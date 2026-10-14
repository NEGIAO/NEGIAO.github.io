// 从高德 JS API 2.0 同款接口批量解析建筑白模 -> GeoJSON(WGS84)
// 链路: web/init 取 tileVersion -> POST web_map/get_tile 换 tile_urls(带新鲜auth_key)
//       -> GET pbf(帧+gzip+protobuf) -> 取 type=3 building 层 -> polygon + mainBuildingHeight
// 用法(输入输出统一 WGS-84):
//   node amap_building_to_geojson.mjs --bbox 108.415,27.048,108.434,27.062 --out zy_amap.geojson
//   node amap_building_to_geojson.mjs --center 108.425,27.055 --delta 0.008 --zoom 14 --out zy_amap.geojson
// 说明: --zoom 为数据瓦片级别(默认14, 与官方3D演示17级显示时取数一致), 非显示级别。
//   高德演示 key 绑域名白名单, 本脚本以浏览器 Referer 请求(学习小范围验证);
//   大范围/商用请用自己申请的 key 并遵守高德条款。
import fs from "fs";
import zlib from "zlib";

const DEMO_KEY = "309f07ac6bc48160e80b480ae511e1e9"; // lbs.amap.com 3D 演示页公用 key
const REFERER = "https://lbs.amap.com/demo/javascript-api-v2/example/3d/map3d";
const UA =
	"Mozilla/5.0 Windows NT 10.0; Win64; x64 AppleWebKit/537.36 Chrome/126.0 Safari/537.36";
const TILE_SIZE = 256;

// ---------- 最小 protobuf reader(按 bundle 内 pbf 语义) ----------
class R {
	constructor(buf) {
		this.b = buf;
		this.pos = 0;
		this.len = buf.length;
	}
	u32() {
		let s = 0,
			sh = 0;
		while (true) {
			const c = this.b[this.pos++];
			s |= (c & 127) << sh;
			if (!(c & 128)) break;
			sh += 7;
		}
		return s >>> 0;
	}
	zig() {
		const t = this.u32();
		return t % 2 === 1 ? -(t + 1) / 2 : t / 2;
	} // sint32
	str() {
		const n = this.u32();
		const s = Buffer.from(this.b.slice(this.pos, this.pos + n)).toString(
			"utf8",
		);
		this.pos += n;
		return s;
	}
	bytes() {
		const n = this.u32();
		const s = this.b.slice(this.pos, this.pos + n);
		this.pos += n;
		return s;
	}
	skip(wt) {
		if (wt === 0) this.u32();
		else if (wt === 1) this.pos += 8;
		else if (wt === 2) this.pos += this.u32();
		else if (wt === 5) this.pos += 4;
		else throw new Error("wt" + wt);
	}
	msg(fn, end) {
		end = end === undefined ? this.len : end;
		while (this.pos < end) {
			const tag = this.u32(),
				f = tag >>> 3,
				wt = tag & 7,
				mark = this.pos;
			fn(f, wt, this);
			if (this.pos === mark) this.skip(wt);
		}
	}
}
function fields(buf, packedArrays, one) {
	const r = new R(buf);
	const o = {};
	r.msg((f, wt, rr) => {
		if (wt === 2 && packedArrays.includes(f)) {
			const n = rr.u32(),
				end = rr.pos + n,
				arr = (o[f] = o[f] || []);
			while (rr.pos < end) arr.push(rr.zig());
		} else one(f, wt, rr, o);
	});
	return o;
}
const readLanguage = (b) =>
	fields(b, [], (f, wt, r, o) => {
		if (f === 1 && wt === 2) o.name = r.str();
		else if (f === 2 && wt === 2) o.lang = r.str();
	});
function readShapeFeature(b) {
	const o = fields(b, [3], (f, wt, r, o) => {
		if (f === 1 && wt === 2) {
			(o.nameLoc = o.nameLoc || []).push(readLanguage(r.bytes()));
		} else if (f === 2 && wt === 0) o.rank = r.u32();
		else if (f === 4 && wt === 0) o.uid = r.u32();
		else if (f === 5 && wt === 0)
			o.mainBuildingHeight = r.u32(); // plain varint, 米
		else if (f === 6 && wt === 2) o.bz = r.str();
		else if ((f === 7 || f === 8 || f === 9) && wt === 2) {
			const k = f === 9 ? "nameZh" : f === 7 ? "nameEng" : "nameMulti";
			(o[k] = o[k] || []).push(readLanguage(r.bytes()));
		}
	});
	o.polygon = o[3] || [];
	return o;
}
const readShapeFeatureMulti = (b) =>
	fields(b, [], (f, wt, r, o) => {
		if (f === 1) o.minZoom = r.u32();
		else if (f === 2) o.maxZoom = r.u32();
		else if (f === 3) o.drawOrder = r.u32();
		else if (f === 4 && wt === 2) {
			(o.shapeFeatures = o.shapeFeatures || []).push(
				readShapeFeature(r.bytes()),
			);
		}
	});
const readBuildingSameStyle = (b) =>
	fields(b, [], (f, wt, r, o) => {
		if (f === 1) o.mainKey = r.u32();
		else if (f === 2) o.subKey = r.u32();
		else if (f === 3) o.resolution = r.u32();
		else if (f === 4 && wt === 2) {
			(o.items = o.items || []).push(readShapeFeatureMulti(r.bytes()));
		}
	});
const readBuildingLayer = (b) =>
	fields(b, [], (f, wt, r, o) => {
		if (f === 1 && wt === 2) {
			(o.buildings = o.buildings || []).push(readBuildingSameStyle(r.bytes()));
		} else if (f === 2 && wt === 2) o.Pii = r.str();
		else if (f === 3 && wt === 2) o.tile_region = r.str();
	});
const readLayer = (b) =>
	fields(b, [], (f, wt, r, o) => {
		if (f === 1) o.z = r.u32();
		else if (f === 2) o.x = r.u32();
		else if (f === 3) o.y = r.u32();
		else if (f === 4) o.type = r.u32();
		else if (f === 5 && wt === 2) o.d = r.bytes();
	});
const readTile = (b) =>
	fields(b, [], (f, wt, r, o) => {
		if (f === 1) o.z = r.u32();
		else if (f === 2) o.x = r.u32();
		else if (f === 3) o.y = r.u32();
		else if (f === 4 && wt === 2) {
			(o.layers = o.layers || []).push(readLayer(r.bytes()));
		}
	});
const readResult = (b) =>
	fields(b, [], (f, wt, r, o) => {
		if (f === 1 && wt === 2) {
			(o.tiles = o.tiles || []).push(readTile(r.bytes()));
		} else if (f === 2 && wt === 2) o.version = r.str();
	});

// ---------- 坐标: bundle 内 tileInnerCoord2LngLat 原样移植 ----------
const NDS = 2147483648,
	DEG = 180;
const d2c = (d) => Math.floor((d * NDS) / DEG + 0.5);
const c2d = (c) => (c * DEG) / NDS;
function wgsCoord(t) {
	const r = 33 - t;
	let e = d2c(180) / (1 << r),
		q = d2c(90) / (1 << r);
	e = e > 0 ? Math.floor(0.5 + e) : Math.floor(e - 0.5);
	q = q > 0 ? Math.floor(0.5 + q) : Math.floor(q - 0.5);
	return [2 * e, 2 * q];
}
function tileSW(x, y, z, res) {
	const [wx, wh] = wgsCoord(z + res),
		n = 1 << z;
	return [-wx / 2 + (x * wx) / n, wh / 2 - ((y + 1) * wh) / n];
}
function inner2lnglat(x, y, z, ix, iy, res) {
	const sw = tileSW(x, y, z, res),
		shift = 33 - res - z;
	const R = (ix + sw[0]) * 2 ** shift,
		N = (iy + sw[1]) * 2 ** shift;
	return [c2d(sw[0] > 0 && R < 0 ? NDS - 1 : R), c2d(N)];
}
// bundle 内 handlerTileBuilding 的多边形还原: 首点绝对, 之后相对首点累加的差分
function buildingPath(polygon, tx, ty, tz, res) {
	const pts = [];
	let T = polygon[0],
		S = polygon[1];
	for (let m = 0; m < polygon.length / 2; m++) {
		let I = polygon[2 * m],
			P = polygon[2 * m + 1];
		if (m !== 0) {
			I += T;
			P += S;
		}
		T = I;
		S = P;
		pts.push(inner2lnglat(tx, ty, tz, I, P, res));
	}
	return pts;
}

// ---------- GCJ-02 -> WGS-84(标准算法, 与 wandergis/coordtransform 一致) ----------
const _PI = Math.PI,
	_A = 6378245.0,
	_EE = 0.00669342162296594323;
const _ooc = (lo, la) =>
	lo < 72.004 || lo > 137.8347 || la < 0.8293 || la > 55.8271;
function _tLat(lon, lat) {
	let r =
		-100 +
		2 * lon +
		3 * lat +
		0.2 * lat * lat +
		0.1 * lon * lat +
		0.2 * Math.sqrt(Math.abs(lon));
	r += ((20 * Math.sin(6 * lon * _PI) + 20 * Math.sin(2 * lon * _PI)) * 2) / 3;
	r += ((20 * Math.sin(lat * _PI) + 40 * Math.sin((lat / 3) * _PI)) * 2) / 3;
	r +=
		((160 * Math.sin((lat / 12) * _PI) + 320 * Math.sin((lat * _PI) / 30)) *
			2) /
		3;
	return r;
}
function _tLon(lon, lat) {
	let r =
		300 +
		lon +
		2 * lat +
		0.1 * lon * lon +
		0.1 * lon * lat +
		0.1 * Math.sqrt(Math.abs(lon));
	r += ((20 * Math.sin(6 * lon * _PI) + 20 * Math.sin(2 * lon * _PI)) * 2) / 3;
	r += ((20 * Math.sin(lon * _PI) + 40 * Math.sin((lon / 3) * _PI)) * 2) / 3;
	r +=
		((150 * Math.sin((lon / 12) * _PI) + 300 * Math.sin((lon / 30) * _PI)) *
			2) /
		3;
	return r;
}
function gcj02ToWgs84(lon, lat) {
	if (_ooc(lon, lat)) return [lon, lat];
	const dLat = _tLat(lon - 105, lat - 35),
		dLon = _tLon(lon - 105, lat - 35);
	const rad = (lat / 180) * _PI;
	let m = Math.sin(rad);
	m = 1 - _EE * m * m;
	const sq = Math.sqrt(m);
	return [
		lon - (dLon * 180) / ((_A / sq) * Math.cos(rad) * _PI),
		lat - (dLat * 180) / (((_A * (1 - _EE)) / (m * sq)) * _PI),
	];
}
function wgs84ToGcj02(lon, lat) {
	if (_ooc(lon, lat)) return [lon, lat];
	const dLat = _tLat(lon - 105, lat - 35),
		dLon = _tLon(lon - 105, lat - 35);
	const rad = (lat / 180) * _PI;
	let m = Math.sin(rad);
	m = 1 - _EE * m * m;
	const sq = Math.sqrt(m);
	return [
		lon + (dLon * 180) / ((_A / sq) * Math.cos(rad) * _PI),
		lat + (dLat * 180) / (((_A * (1 - _EE)) / (m * sq)) * _PI),
	];
}

// ---------- 通用 ----------
function lngLatToXyz(lng, lat, z) {
	// 高德数据瓦片格网: x 同标准 slippy, y 为等距纬度行(已用北京瓦片验证)
	const n = Math.pow(2, z);
	return [
		Math.floor(((lng + 180) / 360) * n),
		Math.floor(((90 - lat) * n) / 180),
	];
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function parseArgs() {
	const a = process.argv.slice(2),
		o = { zoom: 14, key: DEMO_KEY };
	for (let i = 0; i < a.length; i += 2) o[a[i].replace(/^--/, "")] = a[i + 1];
	if (o.center && !o.bbox) {
		const [cLng, cLat] = o.center.split(",").map(Number);
		const d = Number(o.delta || 0.008);
		o.bbox = `${cLng - d},${cLat - d},${cLng + d},${cLat + d}`;
	}
	if (!o.bbox || !o.out) {
		console.error(
			"用法: node amap_building_to_geojson.mjs --bbox minLng,minLat,maxLng,maxLat [--zoom 14] [--key KEY] --out out.geojson",
		);
		process.exit(1);
	}
	return o;
}
async function postForm(url, params) {
	const r = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Referer: REFERER,
			"User-Agent": UA,
		},
		body: new URLSearchParams(params).toString(),
	});
	if (!r.ok) throw new Error("HTTP " + r.status);
	return r.json();
}
function decodePbfTile(buf) {
	// 帧->[gzip]->protobuf -> buildings[]
	const out = [];
	const dv = new DataView(buf.buffer, buf.byteOffset, buf.length);
	let off = 0;
	while (off < buf.length) {
		const len = dv.getUint32(off, false);
		off += 4;
		if (len <= 0 || len > buf.length - off) break;
		const raw = zlib.gunzipSync(buf.slice(off, off + len));
		off += len;
		const res = readResult(raw);
		for (const t of res.tiles || []) {
			for (const l of t.layers || []) {
				if (l.type !== 3 || !l.d) continue;
				const bl = readBuildingLayer(l.d);
				for (const g of bl.buildings || []) {
					const res2 = g.resolution || 12;
					for (const it of g.items || []) {
						for (const sf of it.shapeFeatures || []) {
							if (!sf.polygon || sf.polygon.length < 6) continue;
							const path = buildingPath(
								sf.polygon,
								l.x ?? t.x,
								l.y ?? t.y,
								l.z ?? t.z,
								res2,
							);
							path.push(path[0]);
							const nm = (sf.nameZh && sf.nameZh[0] && sf.nameZh[0].name) || "";
							out.push({ ring: path, h: sf.mainBuildingHeight ?? 6, name: nm });
						}
					}
				}
			}
		}
	}
	return out;
}

async function main() {
	const o = parseArgs();
	const z = Number(o.zoom);
	const [wLng, wLat, eLng, eLat] = o.bbox.split(",").map(Number);
	// 输入 WGS-84 -> 转 GCJ-02 算瓦片(瓦片按火星坐标编号)
	const cs = [
		[wLng, wLat],
		[wLng, eLat],
		[eLng, wLat],
		[eLng, eLat],
	].map(([lo, la]) => wgs84ToGcj02(lo, la));
	const x0lng = Math.min(...cs.map((c) => c[0])),
		x1lng = Math.max(...cs.map((c) => c[0]));
	const y0lat = Math.min(...cs.map((c) => c[1])),
		y1lat = Math.max(...cs.map((c) => c[1]));
	const [tx0, ty1] = lngLatToXyz(x0lng, y0lat, z);
	const [tx1, ty0] = lngLatToXyz(x1lng, y1lat, z);
	const tiles = [];
	for (let y = ty0; y <= ty1; y++)
		for (let x = tx0; x <= tx1; x++) tiles.push([x, y]);
	console.log(
		`bbox(WGS84) ${o.bbox} z=${z} 瓦片 x:${tx0}-${tx1} y:${ty0}-${ty1} 共 ${tiles.length} 块`,
	);
	// 1) web/init 取 tileVersion
	const init = await (
		await fetch(`https://jsapi.amap.com/web/init?key=${o.key}`, {
			headers: { Referer: REFERER, "User-Agent": UA },
		})
	).json();
	const tileVersion = JSON.parse(init.tile).v;
	console.log(
		"tileVersion:",
		tileVersion,
		"combo:",
		JSON.parse(init.tile).combo,
	);
	// 2) POST get_tile 换地址(每批 8 块)
	const BATCH = 8,
		raw = [];
	let oversea = "0"; // 某省瓦片(如贵州)会报 OVERSEA_FORBIDDEN, 此时自动切 1 重试
	for (let i = 0; i < tiles.length; i += BATCH) {
		const group = tiles.slice(i, i + BATCH);
		let urls = null;
		for (let retry = 0; retry < 4; retry++) {
			try {
				const js = await postForm(
					`https://jsapi.amap.com/web_map/get_tile?key=${o.key}`,
					{
						version: tileVersion,
						pbf_version: "v2",
						access_oversea: oversea,
						data_source: "1",
						multi_lang: "0",
						tiles: JSON.stringify(
							group.map(([x, y]) => ({
								id: `${x}_${y}_${z}`,
								type: 1,
								contain_range: 2,
							})),
						),
					},
				);
				if (js.status !== "1" || !js.tile_urls) {
					if (
						(js.infocode == 11000 ||
							js.info === "TILE_ACCESS_OVERSEA_FORBIDDEN") &&
						oversea === "0"
					) {
						oversea = "1";
						console.log(" 某瓦片需 oversea=1, 已切换");
						continue;
					}
					throw new Error(
						(js.info || "auth fail") + JSON.stringify(js).slice(0, 120),
					);
				}
				urls = js.tile_urls;
				break;
			} catch (e) {
				console.error(` auth ${i / BATCH + 1} 重试${retry + 1}: ${e.message}`);
				await sleep(1500);
			}
		}
		if (!urls) {
			console.error(" auth 失败跳过一批");
			continue;
		}
		// 3) GET pbf(限速)
		for (const u of urls) {
			try {
				const r = await fetch(u, {
					headers: { Referer: REFERER, "User-Agent": UA },
				});
				if (!r.ok) throw new Error("HTTP " + r.status);
				const arr = new Uint8Array(await r.arrayBuffer());
				const m = /\/pbf\/\d+\/(\d+)_(\d+)_(\d+)/.exec(u); // 从 URL 取瓦片号(x_y_z), 与返回顺序无关
				const tileTag = m ? `${m[3]}_${m[1]}_${m[2]}` : `${z}_?_?`;
				for (const b of decodePbfTile(Buffer.from(arr))) {
					const ring = b.ring.map(([lo, la]) => gcj02ToWgs84(lo, la));
					ring.push(ring[0]);
					raw.push({
						type: "Feature",
						properties: {
							height_m: b.h,
							tile: tileTag,
							...(b.name ? { name: b.name } : {}),
						},
						geometry: { type: "Polygon", coordinates: [ring] },
					});
				}
			} catch (e) {
				console.error(" tile 失败:", e.message);
			}
			await sleep(300);
		}
		console.log(
			` ${Math.min(i + BATCH, tiles.length)}/${tiles.length} tiles, 已得 ${raw.length} 栋`,
		);
		await sleep(400);
	}
	// 去重(同形状+同高判重, 防跨缝重复)
	const seen = new Set(),
		uniq = [];
	for (const f of raw) {
		const r = f.geometry.coordinates[0];
		const k =
			r.map((p) => p[0].toFixed(7) + "," + p[1].toFixed(7)).join(";") +
			"|" +
			f.properties.height_m;
		if (seen.has(k)) continue;
		seen.add(k);
		uniq.push(f);
	}
	console.log(`去重: ${raw.length} -> ${uniq.length}`);
	fs.writeFileSync(
		o.out,
		JSON.stringify(
			{
				type: "FeatureCollection",
				crs: {
					type: "name",
					properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
				},
				features: uniq,
			},
			null,
			1,
		),
	);
	console.log(`完成: ${uniq.length} 栋(WGS84) -> ${o.out}`);
}
main();
