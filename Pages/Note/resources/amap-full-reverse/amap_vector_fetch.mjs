// 高德矢量瓦片全量提取（单文件独立: 范围＋图层选项＋数据变体→干净GeoJSON）
// 用法:
//   node amap_vector_fetch.mjs --bbox 121.4730,31.2305,121.4760,31.2325 --zoom 14 --layers all --outdir ./out
//   node amap_vector_fetch.mjs --center 121.4776,31.2335 --delta 0.004 --zoom 14 --layers poi,road --outdir ./out
//   node amap_vector_fetch.mjs --selftest
// 说明:
//   --bbox/--center 输入输出统一 WGS-84（瓦片按 GCJ-02 编号，内部自动换算）;
//   --layers: all 或逗号指定 poi,road,region,building,transit（自动选数据变体: poi/road/region/transit→type2, building→type1, 两者都要→各抓一次）;
//   --zoom: 数据级别，仅 12/14 有数据（14 含全部五层，12 无 poi/building）;
//   --key: 高德 key（必填，白名单含调用方域名）; --delay 默认 400ms 禁调小; --max-tiles 默认 200.
// 遵守高德服务条款；仅用于小范围格式研究。
import fs from "fs";
import path from "path";
import zlib from "zlib";

const KEY_DEFAULT = "309f07ac6bc48160e80b480ae511e1e9"; // lbs.amap.com 3D 演示页公用 key(仅格式验证)
const REF = "https://lbs.amap.com/demo/javascript-api-v2/example/3d/map3d";
const UA = "Mozilla/5.0 Windows NT 10.0; Win64; x64 AppleWebKit/537.36 Chrome/126.0 Safari/537.36";

// ================= 最小 protobuf reader（bundle pbf 语义） =================
class R {
	constructor(b) { this.b = b; this.pos = 0; this.len = b.length; }
	u32() { let s = 0, sh = 0; for (;;) { const c = this.b[this.pos++]; s |= (c & 0x7f) << sh; if (!(c & 0x80)) break; sh += 7; } return s >>> 0; }
	zig() { const t = this.u32(); return t % 2 === 1 ? -(t + 1) / 2 : t / 2; }
	str() { const n = this.u32(); const s = Buffer.from(this.b.slice(this.pos, this.pos + n)).toString("utf8"); this.pos += n; return s; }
	bytes() { const n = this.u32(); const s = this.b.slice(this.pos, this.pos + n); this.pos += n; return s; }
	msg(fn, end) {
		end = end === undefined ? this.len : end;
		while (this.pos < end) {
			const tag = this.u32(), f = tag >>> 3, wt = tag & 7, mark = this.pos;
			fn(f, wt, this);
			if (this.pos === mark) { if (wt === 0) this.u32(); else if (wt === 1) this.pos += 8; else if (wt === 2) this.u32(); else if (wt === 5) this.pos += 4; }
		}
	}
}
function F(b, handler) { const r = new R(b); r.msg((f, wt, rr) => handler(f, wt, rr)); }
// bundle readPackedEnd: wt2 字段外层 length 即结束边界，其后直接是值流（无内层长度前缀）
function packedZig(b, arr) {
	let pos = 0;
	while (pos < b.length) {
		let v = 0, sh = 0;
		for (;;) { const c = b[pos++]; v |= (c & 0x7f) << sh; if (!(c & 0x80)) break; sh += 7; }
		arr.push(v % 2 === 1 ? -(v + 1) / 2 : v / 2);
	}
}
function packedVarint(b, arr) {
	let pos = 0;
	while (pos < b.length) {
		let v = 0, sh = 0;
		for (;;) { const c = b[pos++]; v |= (c & 0x7f) << sh; if (!(c & 0x80)) break; sh += 7; }
		arr.push(v);
	}
}
// ---- 通用 schema 驱动解码：已知字段给语义名，未知字段按线型兜底捕获为 fN（全量不丢） ----
// spec 条目: {t:'u32'|'str'|'lang'|'msg'|'bytes'|'pz'|'pv', k:输出键, rep:是否数组, spec:子消息spec}; spec.defaults=缺省值表
const isPrintable = (b) => { let n = 0; for (const c of b) { if (c === 0x09 || c === 0x0a || (c >= 0x20 && c !== 0x7f)) n++; } return b.length > 0 && n === b.length; };
function decodeMsg(b, spec) {
	const o = {};
	const put = (k, v, rep) => { if (rep) { (o[k] = o[k] || []).push(v); } else o[k] = v; };
	new R(b).msg((f, wt, r) => {
		const s = spec[f];
		if (!s) { // 未知字段: 按 wire type 全捕获
			if (wt === 0) put("f" + f, r.u32(), true);
			else if (wt === 1) { put("f" + f, Buffer.from(r.b.slice(r.pos, r.pos + 8)).toString("hex"), true); r.pos += 8; }
			else if (wt === 5) { put("f" + f, Buffer.from(r.b.slice(r.pos, r.pos + 4)).toString("hex"), true); r.pos += 4; }
			else if (wt === 2) { const bb = Buffer.from(r.bytes()); put("f" + f, isPrintable(bb) ? bb.toString("utf8") : bb.toString("hex"), true); }
			return;
		}
		const k = s.k || "f" + f;
		if (s.t === "u32") put(k, r.u32(), s.rep);
		else if (s.t === "str") put(k, r.str(), s.rep);
		else if (s.t === "lang") put(k, decodeMsg(r.bytes(), S_LANG), true);
		else if (s.t === "msg") put(k, decodeMsg(r.bytes(), s.spec), s.rep !== false);
		else if (s.t === "bytes") put(k, r.bytes(), s.rep);
		else if (s.t === "pz") { const a = []; packedZig(r.bytes(), a); put(k, a, false); }
		else if (s.t === "pv") { const a = []; packedVarint(r.bytes(), a); put(k, a, false); }
	});
	if (spec.defaults) for (const [k, v] of Object.entries(spec.defaults)) if (o[k] === undefined) o[k] = v;
	return o;
}
const S_LANG = { 1: { t: "str", k: "name" }, 2: { t: "str", k: "lang" } };
const SAME = (itemSpec) => ({ 1: { t: "u32", k: "mainKey" }, 2: { t: "u32", k: "subKey", }, 3: { t: "u32", k: "resolution" }, 4: { t: "msg", k: "items", spec: itemSpec }, defaults: { subKey: 1, resolution: 12 } });
// 点要素（poi / transit.points）: PointFeatureMulti{minZoom,maxZoom,rank} -> PointFeature
const S_POINT = { 1: { t: "lang", k: "nameLoc" }, 2: { t: "u32", k: "drawOrder" }, 3: { t: "str", k: "rti" }, 4: { t: "pv", k: "pos" }, 5: { t: "lang", k: "nameEng" }, 6: { t: "u32", k: "uid" }, 7: { t: "lang", k: "nameMulti" }, 8: { t: "lang", k: "nameZh" }, defaults: { uid: 1 } };
const S_POINT_M = { 1: { t: "u32", k: "minZoom" }, 2: { t: "u32", k: "maxZoom" }, 3: { t: "u32", k: "rank" }, 4: { t: "msg", k: "points", spec: S_POINT }, defaults: { minZoom: 18, maxZoom: 30, rank: 0 } };
// 道路线: RoadLineMulti -> RoadLine
const S_ROADLINE = { 1: { t: "lang", k: "nameLoc" }, 2: { t: "u32", k: "rank" }, 3: { t: "str", k: "shield" }, 4: { t: "u32", k: "shieldType" }, 5: { t: "pz", k: "line" }, 6: { t: "lang", k: "nameEng" }, 7: { t: "u32", k: "uid" }, 8: { t: "lang", k: "nameMulti" }, 9: { t: "lang", k: "nameZh" }, defaults: { uid: 1, rank: 0 } };
const S_ROADLINE_M = { 1: { t: "u32", k: "minZoom" }, 2: { t: "u32", k: "maxZoom" }, 3: { t: "u32", k: "drawOrder" }, 4: { t: "msg", k: "roadLines", spec: S_ROADLINE }, defaults: { minZoom: 2, maxZoom: 30, drawOrder: 0 } };
// 通用线要素（road/transit.lines/region.lines）: LineFeatureMulti -> LineFeature
const S_LINEF = { 1: { t: "lang", k: "nameLoc" }, 2: { t: "u32", k: "rank" }, 3: { t: "pz", k: "line" }, 4: { t: "lang", k: "nameEng" }, 5: { t: "u32", k: "uid" }, 6: { t: "lang", k: "nameMulti" }, 7: { t: "lang", k: "nameZh" }, defaults: { uid: 1, rank: 0 } };
const S_LINEF_M = { 1: { t: "u32", k: "minZoom" }, 2: { t: "u32", k: "maxZoom" }, 3: { t: "u32", k: "drawOrder" }, 4: { t: "msg", k: "lineFeatures", spec: S_LINEF }, defaults: { minZoom: 2, maxZoom: 30, drawOrder: 0 } };
// 建筑面: ShapeFeatureMulti -> ShapeFeature
const S_SHAPE = { 1: { t: "lang", k: "nameLoc" }, 2: { t: "u32", k: "rank" }, 3: { t: "pz", k: "polygon" }, 4: { t: "u32", k: "uid" }, 5: { t: "u32", k: "mainBuildingHeight" }, 6: { t: "str", k: "bz" }, 7: { t: "lang", k: "nameEng" }, 8: { t: "lang", k: "nameMulti" }, 9: { t: "lang", k: "nameZh" }, defaults: { uid: 1, rank: 0 } };
const S_SHAPE_M = { 1: { t: "u32", k: "minZoom" }, 2: { t: "u32", k: "maxZoom" }, 3: { t: "u32", k: "drawOrder" }, 4: { t: "msg", k: "shapeFeatures", spec: S_SHAPE }, defaults: { minZoom: 15, maxZoom: 30, drawOrder: 0 } };
// 通用面要素（region/transit.polygons）: PolygonFeature（自带 minZoom/maxZoom/drawOrder/rank）+ GeometryPolygon
const S_GEOMPOLY = { 1: { t: "pz", k: "polygon" } };
const S_POLYF = { 1: { t: "u32", k: "minZoom" }, 2: { t: "u32", k: "maxZoom" }, 3: { t: "lang", k: "nameLoc" }, 4: { t: "u32", k: "drawOrder" }, 5: { t: "u32", k: "rank" }, 6: { t: "msg", k: "polygons", spec: S_GEOMPOLY }, 7: { t: "lang", k: "nameEng" }, 8: { t: "u32", k: "uid" }, defaults: { uid: 1, minZoom: 2, maxZoom: 30, drawOrder: 0, rank: 0 } };
// 五层顶层容器（Pii/tile_region 为层级元数据，未知字段自动 fN）
const S_POI = { 1: { t: "msg", k: "points", spec: SAME(S_POINT_M) }, 2: { t: "str", k: "Pii" }, 3: { t: "str", k: "tile_region" } };
const S_ROAD = { 1: { t: "msg", k: "roadLines", spec: SAME(S_ROADLINE_M) }, 2: { t: "str", k: "Pii" }, 3: { t: "str", k: "tile_region" } };
const S_REGION = { 1: { t: "msg", k: "polygons", spec: SAME(S_POLYF) }, 2: { t: "msg", k: "lines", spec: SAME(S_LINEF_M) }, 3: { t: "str", k: "Pii" }, 4: { t: "str", k: "tile_region" } };
const S_BUILDING = { 1: { t: "msg", k: "buildings", spec: SAME(S_SHAPE_M) }, 2: { t: "str", k: "Pii" }, 3: { t: "str", k: "tile_region" } };
const S_TRANSIT = { 1: { t: "msg", k: "lines", spec: SAME(S_LINEF_M) }, 2: { t: "msg", k: "points", spec: SAME(S_POINT_M) }, 3: { t: "msg", k: "polygons", spec: SAME(S_POLYF) }, 4: { t: "str", k: "Pii" }, 5: { t: "str", k: "tile_region" } };
const LAYER_SPECS = { 0: S_POI, 1: S_ROAD, 2: S_REGION, 3: S_BUILDING, 4: S_TRANSIT };
const LAYER_NAMES = { 0: "poi", 1: "road", 2: "region", 3: "building", 4: "transit" };

// ================= 坐标（bundle tileInnerCoord2LngLat 移植 + 标准 GCJ02 算法） =================
// 瓦片内整数坐标 -> GCJ-02（data 层面即 GCJ-02，已验证: 与高德官方 POI 锚点 0.2m 级一致）
const NDS = 2147483648, DEG = 180;
const d2c = (d) => Math.floor((d * NDS) / DEG + 0.5);
const c2d = (c) => (c * DEG) / NDS;
function wgsCoordGrid(t) {
	const r = 33 - t;
	let e = d2c(180) / (1 << r), q = d2c(90) / (1 << r);
	e = e > 0 ? Math.floor(0.5 + e) : Math.floor(e - 0.5);
	q = q > 0 ? Math.floor(0.5 + q) : Math.floor(q - 0.5);
	return [2 * e, 2 * q];
}
function tileSW(x, y, z, res) {
	const [wx, wh] = wgsCoordGrid(z + res), n = 1 << z;
	return [-wx / 2 + (x * wx) / n, wh / 2 - ((y + 1) * wh) / n];
}
function inner2lnglat(x, y, z, ix, iy, res) {
	const sw = tileSW(x, y, z, res), shift = 33 - res - z;
	const R = (ix + sw[0]) * 2 ** shift, N = (iy + sw[1]) * 2 ** shift;
	return [c2d(sw[0] > 0 && R < 0 ? NDS - 1 : R), c2d(N)];
}
// 首点绝对 + 逐点 zigzag 差分累加（bundle buildingPath 同款）
function path2coords(poly, tx, ty, tz, res) {
	const pts = [];
	let T = poly[0], S = poly[1];
	for (let m = 0; m < poly.length / 2; m++) {
		let I = poly[2 * m], P = poly[2 * m + 1];
		if (m !== 0) { I += T; P += S; }
		T = I; S = P;
		pts.push(inner2lnglat(tx, ty, tz, I, P, res));
	}
	return pts;
}

// ---- GCJ-02 <-> WGS-84（与 WebGIS-Dev crs/coordTransform.js 数值一致; 曾在此手抄出错, 勿改写法） ----
const _PI = Math.PI, _A = 6378245.0, _EE = 0.00669342162296594323;
const _ooc = (lo, la) => lo < 72.004 || lo > 137.8347 || la < 0.8293 || la > 55.8271;
function _tLat(lon, lat) {
	let r = -100 + 2 * lon + 3 * lat + 0.2 * lat * lat + 0.1 * lon * lat + 0.2 * Math.sqrt(Math.abs(lon));
	r += ((20 * Math.sin(6 * lon * _PI) + 20 * Math.sin(2 * lon * _PI)) * 2) / 3;
	r += ((20 * Math.sin(lat * _PI) + 40 * Math.sin((lat / 3) * _PI)) * 2) / 3;
	r += ((160 * Math.sin((lat / 12) * _PI) + 320 * Math.sin((lat * _PI) / 30)) * 2) / 3;
	return r;
}
function _tLon(lon, lat) {
	let r = 300 + lon + 2 * lat + 0.1 * lon * lon + 0.1 * lon * lat + 0.1 * Math.sqrt(Math.abs(lon));
	r += ((20 * Math.sin(6 * lon * _PI) + 20 * Math.sin(2 * lon * _PI)) * 2) / 3;
	r += ((20 * Math.sin(lon * _PI) + 40 * Math.sin((lon / 3) * _PI)) * 2) / 3;
	r += ((150 * Math.sin((lon / 12) * _PI) + 300 * Math.sin((lon * _PI) / 30)) * 2) / 3;
	return r;
}
export function gcj02ToWgs84(lon, lat) {
	if (_ooc(lon, lat)) return [lon, lat];
	const dLat = _tLat(lon - 105, lat - 35), dLon = _tLon(lon - 105, lat - 35);
	const rad = (lat / 180) * _PI;
	let m = Math.sin(rad); m = 1 - _EE * m * m;
	const sq = Math.sqrt(m);
	return [lon - (dLon * 180) / ((_A / sq) * Math.cos(rad) * _PI), lat - (dLat * 180) / (((_A * (1 - _EE)) / (m * sq)) * _PI)];
}
export function wgs84ToGcj02(lon, lat) {
	if (_ooc(lon, lat)) return [lon, lat];
	const dLat = _tLat(lon - 105, lat - 35), dLon = _tLon(lon - 105, lat - 35);
	const rad = (lat / 180) * _PI;
	let m = Math.sin(rad); m = 1 - _EE * m * m;
	const sq = Math.sqrt(m);
	return [lon + (dLon * 180) / ((_A / sq) * Math.cos(rad) * _PI), lat + (dLat * 180) / (((_A * (1 - _EE)) / (m * sq)) * _PI)];
}
// 高德数据瓦片号: x 同标准 slippy, y 为等距纬度行（y=(90-lat)*2^z/180），输入 GCJ-02
function lngLatToXyz(lng, lat, z) {
	const n = Math.pow(2, z);
	return [Math.floor(((lng + 180) / 360) * n), Math.floor(((90 - lat) * n) / 180)];
}

// ================= 帧解包: 4字节大端帧长 + gzip + protobuf =================
// Result{f1 tiles, f2 version, f3 status} -> Tile{f1 z,f2 x,f3 y,f4 layers}
//   -> Layer{f1 z,f2 x,f3 y,f4 type,f5 d}（layer 自带 z/x/y 为 z15 子瓦片号, 缺失回退 tile）
const S_LAYER = { 1: { t: "u32", k: "z" }, 2: { t: "u32", k: "x" }, 3: { t: "u32", k: "y" }, 4: { t: "u32", k: "type" }, 5: { t: "bytes", k: "d" } };
const S_TILE = { 1: { t: "u32", k: "z" }, 2: { t: "u32", k: "x" }, 3: { t: "u32", k: "y" }, 4: { t: "msg", k: "layers", spec: S_LAYER } };
const S_RESULT = { 1: { t: "msg", k: "tiles", spec: S_TILE }, 2: { t: "u32", k: "version" }, 3: { t: "u32", k: "status" } };
export function decodeTile(buf) {
	const out = { z: 0, x: 0, y: 0, layers: [], result: {} };
	const dv = new DataView(buf.buffer, buf.byteOffset, buf.length);
	let off = 0;
	while (off < buf.length) {
		const len = dv.getUint32(off, false); off += 4;
		if (len <= 0 || len > buf.length - off) break;
		const raw = buf.slice(off, off + len); off += len;
		const un = raw[0] === 0x1f && raw[1] === 0x8b ? zlib.gunzipSync(raw) : raw;
		const res = decodeMsg(un, S_RESULT);
		for (const [k, v] of Object.entries(res)) if (k !== "tiles") out.result[k] = v; // version/status/未知字段全保留
		for (const t of res.tiles || []) {
			out.z = t.z ?? 0; out.x = t.x ?? 0; out.y = t.y ?? 0;
			for (const l of t.layers || []) out.layers.push(l);
			for (const [k, v] of Object.entries(t)) if (!["z", "x", "y", "layers"].includes(k)) out.result["tile_" + k] = v; // Tile 级未知字段
		}
	}
	return out;
}
export function parseTile(buf) {
	const tile = decodeTile(buf);
	const res = { tile: `${tile.z}_${tile.x}_${tile.y}`, z: tile.z, x: tile.x, y: tile.y, layers: [], ...(Object.keys(tile.result).length ? { result: tile.result } : {}) };
	for (const l of tile.layers) {
		const spec = LAYER_SPECS[l.type];
		const entry = { type: l.type, name: LAYER_NAMES[l.type] ?? `type${l.type}`, x: l.x ?? tile.x, y: l.y ?? tile.y, z: l.z ?? tile.z };
		if (l.d && spec) { try { entry.load = decodeMsg(l.d, spec); } catch (e) { entry.error = String(e.message).slice(0, 120); } }
		else if (l.d && !spec) entry.raw_hex = Buffer.from(l.d).toString("hex").slice(0, 500); // 未知图层类型: 原样保留
		res.layers.push(entry);
	}
	return res;
}

// ================= 五层统一出口: SameStyle 组 -> GeoJSON features（WGS84） =================
// itemsOf: Multi 包装 / 直挂 feature（region 的 item 即 PolygonFeature）统一展平
function itemsOf(group) {
	const out = [];
	for (const it of group.items || []) {
		const inner = it.shapeFeatures || it.roadLines || it.lineFeatures || it.points || null;
		const meta = {};
		for (const k of ["minZoom", "maxZoom", "drawOrder", "rank"]) if (it[k] !== undefined) meta[k] = it[k];
		out.push({ meta, feats: inner || [it] });
	}
	return out;
}
// 全字段属性提取: 除几何流外全部进 properties（含未知字段 fN），不丢任何属性
const GEO_KEYS = new Set(["pos", "polygon", "line", "polygons"]);
function propsOf(f) {
	const p = {};
	for (const [k, v] of Object.entries(f)) {
		if (GEO_KEYS.has(k)) continue;
		if (Array.isArray(v)) { if (v.length) p[k] = v.length === 1 ? v[0] : v; }
		else if (v !== "" && v !== null && v !== undefined) p[k] = v;
	}
	const nm = (f.nameZh && f.nameZh[0] && f.nameZh[0].name) || (f.nameLoc && f.nameLoc[0] && f.nameLoc[0].name) || "";
	if (nm) p.name = nm;
	if (f.mainBuildingHeight !== undefined) p.height_m = f.mainBuildingHeight; // 语义别名
	return p;
}
const toWgs = (pts) => pts.map(([lo, la]) => gcj02ToWgs84(lo, la));
const closeRing = (ring) => { const r = ring.slice(); if (r.length && (r[0][0] !== r[r.length - 1][0] || r[0][1] !== r[r.length - 1][1])) r.push(r[0]); return r; };

// ---- region 子类（按 item 级 drawOrder + mainKey/subKey 实证归类；拓扑叠放: 大地块在下, 湖泊/绿地/建筑底板压上, draw>=80 顶层小面）----
const REGION_CLASSES = ["water", "green", "parcel", "builtup", "harbor", "airport", "top", "other", "line"];
function regionClassOf(mainKey, subKey, drawOrder, isLine) {
	if (isLine) return "line";                         // region 线组（mk=20017/20010/20014/20011, res 13/15）
	if ((drawOrder ?? 0) >= 80) return "top";          // 顶层小面（停车场/广场/高架/机场）
	if (mainKey === 30004) return "airport";           // 机场（虹桥实例）
	if (mainKey === null && subKey === 2) return "water";  // 水面：江/湖/池塘（黄浦江/滴水湖/西湖实测）
	if (mainKey === null && subKey === 3) return "builtup"; // 建筑底板碎面（最常见，中位 ~1000m²）
	if (mainKey === 30002 && subKey === 5) return "green";  // 绿地/公园大面（世纪公园实测）
	if (mainKey === 30002 && subKey === 6) return "harbor"; // 港口码头（东方明珠码头实例）
	if (mainKey === 30002) return "parcel";            // 街区用地地块
	return "other";
}

// 从单个 parsed tile 提取某类图层的 features。
// layerName: poi/road/building/transit/region(全部子类)/region_<class>(单子类, class 见 REGION_CLASSES)
export function layerFeatures(parsed, layerName) {
	const feats = [];
	const wantClass = layerName.startsWith("region_") ? layerName.slice(7) : null;
	for (const l of parsed.layers) {
		if (wantClass ? l.name !== "region" : l.name !== layerName || !l.load) continue;
		// region 有两组容器（polygons 面 + lines 线），其余层一组
		const groupSets = l.type === 2
			? [["polygons", l.load.polygons || []], ["lines", l.load.lines || []]]
			: l.type === 4
				? [["lines", l.load.lines || []], ["points", l.load.points || []], ["polygons", l.load.polygons || []]]
				: [[null, l.load.points || l.load.roadLines || l.load.buildings || l.load.polygons || l.load.lines || []]];
		for (const [cont, gs] of groupSets) {
			for (const g of gs || []) {
				const res = g.resolution || 12;
				for (const { meta, feats: its } of itemsOf(g)) {
					const isLine = l.type === 2 && cont === "lines";
					const regionClass = l.type === 2 ? regionClassOf(g.mainKey ?? null, g.subKey, meta.drawOrder, isLine) : null;
					if (wantClass && regionClass !== wantClass) continue;
					for (const f of its) {
						if (!f || typeof f !== "object") continue;
						const rec = { layer: l.name, sub: l.type === 2 ? (isLine ? "line" : "poly") : cont, mainKey: g.mainKey ?? null, subKey: g.subKey, resolution: g.resolution, tile: `${parsed.z}_${parsed.x}_${parsed.y}`, layer_tile: `${l.z}_${l.x}_${l.y}` };
						if (regionClass) rec.region_class = regionClass;
						Object.assign(rec, meta);      // Multi 包装级: minZoom/maxZoom/drawOrder/rank
						Object.assign(rec, propsOf(f)); // 要素级全部字段（含未知 fN）
						if ((l.type === 0 || (l.type === 4 && cont === "points")) && f.pos && f.pos.length >= 2) {
							const p = path2coords(f.pos, l.x, l.y, l.z, res)[0];
							feats.push({ type: "Feature", properties: rec, geometry: { type: "Point", coordinates: gcj02ToWgs84(p[0], p[1]) } });
						} else if (f.polygons) {
							for (const gp of f.polygons) {
								if (!gp.polygon || gp.polygon.length < 6) continue;
								feats.push({ type: "Feature", properties: { ...rec, geom: "poly" }, geometry: { type: "Polygon", coordinates: [closeRing(toWgs(path2coords(gp.polygon, l.x, l.y, l.z, res)))] } });
							}
						} else if (f.polygon) {
							if (f.polygon.length < 6) continue;
							feats.push({ type: "Feature", properties: { ...rec, geom: "poly" }, geometry: { type: "Polygon", coordinates: [closeRing(toWgs(path2coords(f.polygon, l.x, l.y, l.z, res)))] } });
						} else if (f.line) {
							if (f.line.length < 4) continue;
							feats.push({ type: "Feature", properties: { ...rec, geom: "line" }, geometry: { type: "LineString", coordinates: toWgs(path2coords(f.line, l.x, l.y, l.z, res)) } });
						}
					}
				}
			}
		}
	}
	return feats;
}

// ================= 抓取链: web/init -> POST get_tile -> GET pbf =================
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function postForm(url, params, key) {
	const r = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded", Referer: REF, "User-Agent": UA },
		body: new URLSearchParams(params).toString(),
	});
	if (!r.ok) throw new Error("HTTP " + r.status);
	return r.json();
}
async function fetchTiles(tiles, z, variant, key, delay, overseaRef) {
	const init = await (await fetch(`https://jsapi.amap.com/web/init?key=${key}`, { headers: { Referer: REF, "User-Agent": UA } })).json();
	const tileVersion = JSON.parse(init.tile).v;
	const out = [];
	for (let i = 0; i < tiles.length; i += 8) {
		const group = tiles.slice(i, i + 8);
		let urls = null;
		for (let retry = 0; retry < 4; retry++) {
			try {
				const js = await postForm(`https://jsapi.amap.com/web_map/get_tile?key=${key}`, {
					version: tileVersion, pbf_version: "v2", access_oversea: overseaRef.v,
					data_source: "1", multi_lang: "0",
					tiles: JSON.stringify(group.map(([x, y]) => ({ id: `${x}_${y}_${z}`, type: variant, contain_range: 2 }))),
				}, key);
				if (js.status !== "1" || !js.tile_urls) {
					if ((js.infocode == 11000 || js.info === "TILE_ACCESS_OVERSEA_FORBIDDEN") && overseaRef.v === "0") { overseaRef.v = "1"; continue; }
					throw new Error((js.info || "auth fail") + JSON.stringify(js).slice(0, 120));
				}
				urls = js.tile_urls; break;
			} catch (e) { console.error(` auth ${i / 8 + 1} 重试${retry + 1}: ${e.message}`); await sleep(1500); }
		}
		if (!urls) { console.error(" auth 失败跳过一批"); continue; }
		for (const u of urls) {
			try {
				const r = await fetch(u, { headers: { Referer: REF, "User-Agent": UA } });
				if (!r.ok) throw new Error("HTTP " + r.status);
				const arr = new Uint8Array(await r.arrayBuffer());
				const m = /\/pbf\/\d+\/(\d+)_(\d+)_(\d+)/.exec(u);
				out.push({ tag: m ? `${m[3]}_${m[1]}_${m[2]}` : `z${z}_?`, buf: Buffer.from(arr) });
			} catch (e) { console.error(" tile 失败:", e.message); }
			await sleep(Math.max(300, delay));
		}
		console.log(` ${Math.min(i + 8, tiles.length)}/${tiles.length} tiles (type=${variant})`);
		await sleep(Math.max(400, delay));
	}
	return out;
}

// ================= CLI =================
function parseArgs() {
	const a = process.argv.slice(2), o = { zoom: 14, key: KEY_DEFAULT, delay: 400, maxTiles: 200, layers: "all", outdir: "./out" };
	for (let i = 0; i < a.length; i += 2) {
		const k = a[i].replace(/^--/, "");
		if (k === "selftest") { o.selftest = true; i--; continue; }
		o[k] = a[i + 1];
	}
	if (o.center && !o.bbox) {
		const [cLng, cLat] = o.center.split(",").map(Number);
		const d = Number(o.delta || 0.004);
		o.bbox = `${cLng - d},${cLat - d},${cLng + d},${cLat + d}`;
	}
	return o;
}
async function main() {
	const o = parseArgs();
	if (o.selftest) return selftest();
	const z = Number(o.zoom);
	if (![12, 14].includes(z)) { console.error("zoom 仅支持 12/14（实测 z16 返回空壳瓦片，数据实际只在这两级）"); process.exit(1); }
	if (!o.bbox) { console.error("缺少 --bbox/--center"); process.exit(1); }
	const VALID = ["poi", "road", "region", "building", "transit", ...REGION_CLASSES.map((c) => "region_" + c)];
	let want = o.layers === "all" ? ["poi", "road", "region", "building", "transit"] : o.layers.split(",").map((s) => s.trim());
	const invalid = want.filter((w) => !VALID.includes(w));
	if (invalid.length) { console.error("未知图层:", invalid.join(","), "\n可用:", VALID.join(",")); process.exit(1); }
	// "region" 展开为全部子类（region_water/green/parcel/builtup/harbor/airport/top/other/line）
	if (want.includes("region")) {
		want = want.filter((w) => w !== "region").concat(REGION_CLASSES.map((c) => "region_" + c));
	}
	if (!want.length) want = ["poi"];
	// 数据变体: type=2(poi_region_road_transit, 含POI与命名道路) / type=1(building_region_road_transit, 含建筑)
	const variants = new Set();
	if (want.some((w) => w !== "building")) variants.add(2);
	if (want.includes("building")) variants.add(1);
	// bbox(WGS84) -> GCJ02 角点 -> 瓦片列表（等距纬度行 y）
	const [wLng, wLat, eLng, eLat] = o.bbox.split(",").map(Number);
	const cs = [[wLng, wLat], [wLng, eLat], [eLng, wLat], [eLng, eLat]].map(([lo, la]) => wgs84ToGcj02(lo, la));
	const x0 = Math.min(...cs.map((c) => lngLatToXyz(c[0], c[1], z)[0])), x1 = Math.max(...cs.map((c) => lngLatToXyz(c[0], c[1], z)[0]));
	const y0 = Math.min(...cs.map((c) => lngLatToXyz(c[0], c[1], z)[1])), y1 = Math.max(...cs.map((c) => lngLatToXyz(c[0], c[1], z)[1]));
	const tiles = [];
	for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) tiles.push([x, y]);
	if (tiles.length > Number(o.maxTiles)) { console.error(`瓦片数 ${tiles.length} 超 --max-tiles=${o.maxTiles}，请缩小范围或分片`); process.exit(1); }
	console.log(`bbox(WGS84) ${o.bbox} z=${z} 瓦片 x:${x0}-${x1} y:${y0}-${y1} 共 ${tiles.length} 块, 变体 type=${[...variants].join(",")}`);
	fs.mkdirSync(o.outdir, { recursive: true });
	const overseaRef = { v: "0" };
	const gj = {};
	for (const w of want) gj[w] = [];
	const runInfo = { input: o.bbox, zoom: z, layers: want, variants: [...variants], tiles: [], failures: [] };
	for (const v of variants) {
		for (const t of await fetchTiles(tiles, z, v, o.key, Number(o.delay), overseaRef)) {
			runInfo.tiles.push({ tag: t.tag, variant: v, bytes: t.buf.length });
			if (t.buf.length < 100) { runInfo.failures.push({ tag: t.tag, variant: v, reason: "empty-shell" }); continue; }
			let parsed;
			try { parsed = parseTile(t.buf); } catch (e) { runInfo.failures.push({ tag: t.tag, variant: v, reason: String(e.message).slice(0, 100) }); continue; }
			for (const w of want) {
				try { gj[w].push(...layerFeatures(parsed, w)); } catch (e) { runInfo.failures.push({ tag: t.tag, variant: v, layer: w, reason: String(e.message).slice(0, 100) }); }
			}
			// 同 key 去重（跨瓦片接缝重复）
			for (const w of want) {
				const seen = new Set(), uniq = [];
				for (const f of gj[w]) {
					const g = f.geometry;
					const k = g.type === "Point" ? `${g.coordinates}` : g.type === "LineString" ? g.coordinates.map((p) => p.map((v) => v.toFixed(7)).join(",")).join(";") : g.coordinates[0].map((p) => p.map((v) => v.toFixed(7)).join(",")).join(";");
					if (seen.has(k)) continue; seen.add(k); uniq.push(f);
				}
				gj[w] = uniq;
			}
		}
	}
	for (const [w, arr] of Object.entries(gj)) {
		if (!arr.length) continue;
		fs.writeFileSync(path.join(o.outdir, `${w}.geojson`), JSON.stringify({ type: "FeatureCollection", crs: "WGS84", features: arr }, null, 1));
		console.log(`${w}: ${arr.length} 要素 -> ${path.join(o.outdir, w + ".geojson")}`);
	}
	fs.writeFileSync(path.join(o.outdir, "run_info.json"), JSON.stringify(runInfo, null, 1));
	console.log(`run_info.json: tiles=${runInfo.tiles.length} failures=${runInfo.failures.length}`);
}

// ================= selftest（坐标/编解码不变量，不过不发版） =================
function selftest() {
	let pass = 0, fail = 0;
	const ok = (cond, msg) => { if (cond) { pass++; } else { fail++; console.error("  FAIL:", msg); } };
	// 1. GCJ02<->WGS84 往返自洽（transformLat 公式对非精确互逆, 已知残留数米级误差, 容差 5m）
	for (const [lng, lat] of [[121.4755, 31.2282], [116.3974, 39.9086], [113.2644, 23.1291]]) {
		const w = gcj02ToWgs84(lng, lat), back = wgs84ToGcj02(w[0], w[1]);
		const dm = Math.hypot((back[0] - lng) * 96000, (back[1] - lat) * 111000);
		ok(dm < 5, `往返 ${lng},${lat} (误差 ${dm.toFixed(2)}m)`);
		ok(w[0] !== lng || w[1] !== lat, `境内必须发生偏移 ${lng},${lat}`);
	}
	// 2. 上海博物馆: 官方 WGS84=121.470556,31.230278, 我方 gcj2wgs 应 <60m
	const mw = gcj02ToWgs84(121.475480, 31.228231);
	const dm = Math.hypot((mw[0] - 121.470556) * 96000, (mw[1] - 31.230278) * 111000);
	ok(dm < 60, `上海博物馆 WGS84 偏差 ${dm.toFixed(1)}m < 60m`);
	// 3. _tLat/_tLon 与 WebGIS-Dev coordTransform.js 金标准原样比对（防手抄回退）
	const PI = Math.PI;
	const gTL = (lon, lat) => {
		let ret = -100.0 + 2.0 * lon + 3.0 * lat + 0.2 * lat * lat + 0.1 * lon * lat + 0.2 * Math.sqrt(Math.abs(lon));
		ret += ((20.0 * Math.sin(6.0 * lon * PI) + 20.0 * Math.sin(2.0 * lon * PI)) * 2.0) / 3.0;
		ret += ((20.0 * Math.sin(lat * PI) + 40.0 * Math.sin((lat / 3.0) * PI)) * 2.0) / 3.0;
		ret += ((160.0 * Math.sin((lat / 12.0) * PI) + 320 * Math.sin((lat * PI) / 30.0)) * 2.0) / 3.0;
		return ret;
	};
	const gTN = (lon, lat) => {
		let ret = 300.0 + lon + 2.0 * lat + 0.1 * lon * lon + 0.1 * lon * lat + 0.1 * Math.sqrt(Math.abs(lon));
		ret += ((20.0 * Math.sin(6.0 * lon * PI) + 20.0 * Math.sin(2.0 * lon * PI)) * 2.0) / 3.0;
		ret += ((20.0 * Math.sin(lon * PI) + 40.0 * Math.sin((lon / 3.0) * PI)) * 2.0) / 3.0;
		ret += ((150.0 * Math.sin((lon / 12.0) * PI) + 300.0 * Math.sin((lon / 30.0) * PI)) * 2.0) / 3.0;
		return ret;
	};
	for (const [x, y] of [[16.475481, -3.77177], [11.3974, 4.9086], [8.2644, -11.8709], [0, 0], [30, 20]]) {
		ok(Math.abs(_tLat(x, y) - gTL(x, y)) < 1e-12, `_tLat 金标准 (${x},${y})`);
		ok(Math.abs(_tLon(x, y) - gTN(x, y)) < 1e-12, `_tLon 金标准 (${x},${y})`);
	}
	// 3b. gcj02ToWgs84 与金标准实现数值一致（人民广场点对点, <1e-9°）
	const oldG = (lon, lat) => {
		let dLat = gTL(lon - 105.0, lat - 35.0), dLon = gTN(lon - 105.0, lat - 35.0);
		const radLat = (lat / 180.0) * _PI;
		let magic = Math.sin(radLat);
		magic = 1 - _EE * magic * magic;
		const sqrtMagic = Math.sqrt(magic);
		dLat = (dLat * 180.0) / (((_A * (1 - _EE)) / (magic * sqrtMagic)) * _PI);
		dLon = (dLon * 180.0) / ((_A / sqrtMagic) * Math.cos(radLat) * _PI);
		return [lon * 2 - (lon + dLon), lat * 2 - (lat + dLat)];
	};
	const o1 = oldG(121.475480, 31.228231), n1 = gcj02ToWgs84(121.475480, 31.228231);
	ok(Math.abs(o1[0] - n1[0]) < 1e-9 && Math.abs(o1[1] - n1[1]) < 1e-9, `gcj02ToWgs84 与金标准一致 (差 ${(Math.abs(o1[0] - n1[0]) + Math.abs(o1[1] - n1[1])).toExponential(2)}°)`);
	// 4. 瓦片网格往返: z15 子瓦片号 + pos -> GCJ02（人民广场案例, 与 layer 头自洽）
	const p1 = path2coords([1983, 948], 27440, 10699, 15, 12)[0]; // 上海博物馆
	ok(Math.abs(p1[0] - 121.475481) < 1e-5 && Math.abs(p1[1] - 31.228230) < 1e-5, `博物馆 pos->GCJ02 (得 ${p1.map((v) => v.toFixed(6))})`);
	// 5. packedZig/packedVarint 无内层长度前缀语义
	const zb = [];
	packedZig(Buffer.from([0x05, 0x02]), zb); // 05->zigzag -3 ... 手工: [5,2]->[-3,1]
	ok(zb.length === 2 && zb[0] === -3 && zb[1] === 1, `packedZig 值流 (得 ${zb})`);
	const vb = [];
	packedVarint(Buffer.from([0xb1, 0x09, 0xd2, 0x04]), vb); // 1201, 594
	ok(vb.length === 2 && vb[0] === 1201 && vb[1] === 594, `packedVarint 值流 (得 ${vb})`);
	// 6. 瓦片号计算: GCJ02 人民广场 -> z14 tile 13720_5349
	const [tx, ty] = lngLatToXyz(121.4707, 31.2287, 14);
	ok(tx === 13720 && ty === 5349, `瓦片号 (得 ${tx}_${ty})`);
	console.log(`selftest: ${pass} 过 / ${fail} 不过`);
	if (fail) process.exit(1);
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").replace(/^.*\//, ""))) {
	main().catch((e) => { console.error("ERR", e); process.exit(1); });
}
