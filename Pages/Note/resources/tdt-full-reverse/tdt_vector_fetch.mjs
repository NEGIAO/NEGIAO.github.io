// 天地图矢量最终抓取程序（单文件独立版）：范围 → 瓦片 → 全量解析 → 通用拓扑 → GeoJSON
//
// 用法：
//   node tdt_vector_fetch.mjs --bbox minLng,minLat,maxLng,maxLat --zoom 16 --layers all --outdir ./out
//   node tdt_vector_fetch.mjs --center 114.305,34.827 --delta 0.004 --zoom 16 --layers CE,BK,BM --outdir ./out
//   node tdt_vector_fetch.mjs --bbox ... --zoom 18 --layers respt --tk YOUR_TK --outdir ./out
//
// 参数：
//   --bbox 四至（与 --center 二选一；均为WGS-84/CGCS2000直出无纠偏）
//   --zoom 瓦片级别（15~18已验证；允许其它整数但会警告）
//   --layers all（默认）或逗号分隔图层码：BI,BV,CE,CK,BM,BK,AA,AB,AP,AD,AM,respt
//   --tk 天地图tk（默认内置demo tk；自备tk用 --tk 覆盖；小范围研究，遵守服务条款）
//   --outdir 输出目录（每层 <LAYER>.geojson + merge_stats.json + run_info.json）
//   --delay 批间隔毫秒（默认400，禁调小） --max-tiles 上限（默认40，超限拒绝请缩小范围）
//
// 通用拓扑规则（分层设定，接缝先判后合，无id不跨类硬合；宁可打标不误删）：
//   1) BV原样直出：不裁剪、不去重、不嵌套、不审计（行政底图，保持源样）。
//   2) 有稳定id的面：同layer同id跨瓦接缝Union（CE按elemid：高度/楼层只取数禁做键；
//      AP按objectid：同引擎；合后标 _seam_merged=1；Union前后面积守恒校验，
//      覆盖丢失超1%则回退保留原环记 union_fallback）。
//   3) 无id的覆盖面（CK/BM）：核心裁剪 → 按S8分组（跨S8禁合）→ 连通（重叠/贴边/包含）Union
//      → 洞按包含嵌套（不依赖绕向）；合后标 _seam_merged=1 并记 _fused_from；同样面积守恒。
//   4) 有稳定id的点：buffer亦保留＋同id去重（respt按elemid；BI按F5；AD按Z5+H7+L1+A6，无id按坐标）。
//      去重键舍入1e-7度（≈1cm；旧1e-3度≈100m会误杀相邻要素，已修）。
//   5) 无id的线（AA/AB/AM/BK）：核心裁剪（逐段）＋完全一致去重；接缝断开不断言拼接
//      （跨瓦同路无稳定键，盲Union会误合，缺口如实保留不断开伪造）。
//   6) CE/AP入围：环clip到buffer盒[-82,4178]（替代整要素丢弃，bbox边缘不断楼）；
//      全越界环才弃，整要素无环才弃。
//   7) 几何尾渣（_geom_partial）：保留既有闭合环并标记，尾环缺失如实声明。
//   8) 残余严格重叠（洞感知、边界接触排除；BV除外）：标 _topo_review=1，不改几何。
//
// 解析真结构（与建筑篇/全量篇一致，不再赘述）：f1=features,f2=层名,f3=values,f4=keys,
// f5=extent,f15=version；Feature=f1几何(MoveTo2/LineTo3/ClosePath7＋zigzag差分＋深嵌套递归)
// +f2类型(1线/2面/4点)+f3 tags；XOR先raw[99]^=0xff再slice(5)；三编码（标准0x1a/前导/裸层）；
// Value整数族f4/f5/f6/f7；ClosePath命令字count恒1不占参数（不清零会丢整要素）。
import fs from "fs";
import path from "path";

/* ================= 基础：SDK ================= */
const REFERER = "https://map.tianditu.gov.cn/";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
const DEMO_TK = "b88bfb160c81dab8d9d20aaa74846360";
const EXT = 4096;
const ALL_LAYERS = ["BI", "BV", "CE", "CK", "BM", "BK", "AA", "AB", "AP", "AD", "AM", "respt"];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ================= protobuf reader ================= */
function R_(buf) {
	let pos = 0;
	const u32 = () => {
		let s = 0, sh = 0;
		for (let k = 0; k < 6; k++) {
			if (pos >= buf.length) return -1;
			const c = buf[pos++];
			s |= (c & 127) << sh;
			if (!(c & 128)) return s >>> 0;
			sh += 7;
		}
		return -1;
	};
	return { u32, get pos() { return pos; }, set pos(v) { pos = v; }, len: buf.length };
}
const zig = (t) => (t % 2 === 1 ? -(t + 1) / 2 : t / 2);

function splitFields(buf) {
	const out = [];
	const r = R_(buf);
	while (r.pos < buf.length) {
		const tag = r.u32();
		if (tag < 0) break;
		const fl = tag >>> 3, wt = tag & 7;
		if (![0, 1, 2, 5].includes(wt)) break;
		if (wt === 0) {
			const vs = r.pos;
			const num = r.u32();
			if (num < 0) break;
			out.push({ fl, wt, num, start: vs });
			continue;
		}
		if (wt === 1) { out.push({ fl, wt, start: r.pos }); r.pos += 8; continue; }
		if (wt === 5) { out.push({ fl, wt, start: r.pos }); r.pos += 4; continue; }
		const L = r.u32();
		if (L < 0 || L > buf.length - r.pos) break;
		out.push({ fl, wt, L, start: r.pos });
		r.pos += L;
	}
	return out;
}

function parseTop(buf) {
	const r = R_(buf);
	const fields = [];
	let guard = 0;
	while (r.pos < buf.length && guard++ < buf.length * 4 + 20) {
		const s0 = r.pos;
		const tag = r.u32();
		if (tag < 0 || tag === 0) return { fields, ok: false };
		const fl = tag >>> 3, wt = tag & 7;
		if (![0, 1, 2, 5].includes(wt)) return { fields, ok: false };
		if (wt === 0) { const v = r.u32(); if (v < 0) return { fields, ok: false }; fields.push({ fl, wt, v, start: s0 }); continue; }
		if (wt === 1) { fields.push({ fl, wt, start: r.pos }); r.pos += 8; continue; }
		if (wt === 5) { fields.push({ fl, wt, start: r.pos }); r.pos += 4; continue; }
		const L = r.u32();
		if (L < 0 || L > buf.length - r.pos) return { fields, ok: false };
		fields.push({ fl, wt, L, start: r.pos });
		r.pos += L;
		if (r.pos <= s0) return { fields, ok: false };
	}
	return { fields, ok: r.pos === buf.length };
}

function detectLayers(body) {
	const layers = [];
	for (let i = 0; i < body.length; i++) {
		if (body[i] !== 0x1a) continue;
		const rr = R_(body.slice(i));
		if (rr.u32() !== 0x1a) continue;
		const L = rr.u32();
		if (L <= 0 || L > body.length - (i + rr.pos)) continue;
		const cs = i + rr.pos;
		const content = body.slice(cs, cs + L);
		const res = parseTop(content);
		if (!res.ok) continue;
		if (!res.fields.some((x) => x.fl === 5 && x.wt === 0)) continue;
		if (!res.fields.some((x) => x.fl === 15 && x.wt === 0)) continue;
		layers.push({ bodyPos: i, content, L, total: rr.pos + L });
	}
	return layers;
}

function parseCommands(buf) {
	const r = R_(buf);
	const paths = [];
	let cur = null, left = 0, x = 0, y = 0, seenCmd = false, sawClose = false, partial = false;
	const graceful = () => {
		if (sawClose && paths.length) { partial = true; return true; }
		return false;
	};
	const fail = () => (graceful() ? { paths, partial } : null);
	while (r.pos < buf.length) {
		if (left <= 0) {
			const c = r.u32();
			if (c < 0) return fail();
			const id = c & 7;
			left = c >>> 3;
			if (![2, 3, 7].includes(id) || left > 5000) return fail();
			if (!seenCmd && id !== 2) return fail();
			seenCmd = true;
			if (id === 2) { if (cur) paths.push(cur); cur = { points: [], closed: false }; }
			if (id === 7) {
				if (!cur || cur.points.length < 2) return fail();
				cur.points.push(cur.points[0]);
				cur.closed = true;
				paths.push(cur);
				cur = null;
				sawClose = true;
				left = 0;
				continue;
			}
		}
		left--;
		const a = r.u32(), b = r.u32();
		if (a < 0 || b < 0) return fail();
		x += zig(a); y += zig(b);
		if (x < -1000 || x > 5100 || y < -1000 || y > 5100) {
			if (graceful()) return { paths, partial };
			return null;
		}
		if (!cur) return fail();
		cur.points.push([x, y]);
	}
	if (!seenCmd) return null;
	if (cur) paths.push(cur);
	return { paths, partial };
}

function findCommands(buf, depth = 0) {
	const direct = parseCommands(buf);
	if (direct && direct.paths.length) return direct;
	if (depth >= 8) return null;
	for (const f of splitFields(buf)) {
		if (f.fl !== 1 || f.wt !== 2) continue;
		const nested = findCommands(buf.slice(f.start, f.start + f.L), depth + 1);
		if (nested && nested.paths.length) return nested;
	}
	return null;
}

function readVarint64(buf, pos) {
	let result = 0n, shift = 0n;
	for (let k = 0; k < 10; k++) {
		if (pos >= buf.length) return null;
		const c = BigInt(buf[pos++]);
		result |= (c & 0x7fn) << shift;
		if (!(c & 0x80n)) return { value: result, pos };
		shift += 7n;
	}
	return null;
}

function parseValue(buf) {
	const fields = splitFields(buf);
	let value = null, kind = "empty";
	for (const f of fields) {
		if (f.fl === 1 && f.wt === 2) {
			const s = buf.slice(f.start, f.start + f.L);
			const st = s.toString("utf8");
			if (!st.includes("�") && Buffer.from(st, "utf8").equals(s)) { value = st; kind = "string"; }
			else { value = { __raw_hex: s.toString("hex") }; kind = "rawhex"; }
		} else if (f.fl === 3 && f.wt === 5) {
			value = buf.readFloatLE(f.start); kind = "float32";
		} else if (f.fl === 3 && f.wt === 1) {
			value = buf.readDoubleLE(f.start); kind = "float64";
		} else if (f.wt === 0 && (f.fl === 2 || f.fl === 4 || f.fl === 5 || f.fl === 6 || f.fl === 7)) {
			const r = readVarint64(buf, f.start);
			if (!r) continue;
			if (f.fl === 6) {
				const mag = r.value >> 1n;
				const v = (r.value & 1n) ? -(mag + 1n) : mag;
				value = v <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(v) : "bigint:" + v.toString();
				kind = "sint64";
			} else if (f.fl === 7) {
				value = r.value !== 0n; kind = "bool";
			} else {
				value = r.value <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(r.value) : "bigint:" + r.value.toString();
				kind = f.fl === 5 ? "uint64" : "int64";
			}
		}
	}
	return { value, kind };
}

function parseTags(buf) {
	const r = R_(buf);
	const arr = [];
	while (r.pos < buf.length) {
		const v = r.u32();
		if (v < 0) break;
		arr.push(v);
	}
	return arr;
}

function parseFeature(fbuf) {
	const fields = splitFields(fbuf);
	const pathGroups = [];
	let type = null, tagsRaw = null, partial = false;
	for (const f of fields) {
		if (f.fl === 1 && f.wt === 2) {
			const sub = fbuf.slice(f.start, f.start + f.L);
			const res = findCommands(sub);
			if (res && res.paths.length) {
				pathGroups.push(res.paths);
				if (res.partial) partial = true;
			}
		} else if (f.fl === 2 && f.wt === 0) {
			type = f.num;
		} else if (f.fl === 3 && f.wt === 2) {
			tagsRaw = fbuf.slice(f.start, f.start + f.L);
		}
	}
	const tags = tagsRaw ? parseTags(tagsRaw) : [];
	return { pathGroups, type, tags, partial };
}

function parseLayer(layer) {
	const c = layer.content;
	const fields = splitFields(c);
	let name = "", extent = 4096, version = 2;
	const keys = [], values = [], valueKinds = [], features = [];
	for (const f of fields) {
		if (f.fl === 2 && f.wt === 2) name = c.slice(f.start, f.start + f.L).toString("utf8");
		else if (f.fl === 5 && f.wt === 0) extent = f.num;
		else if (f.fl === 15 && f.wt === 0) version = f.num;
		else if (f.fl === 4 && f.wt === 2) keys.push(c.slice(f.start, f.start + f.L).toString("utf8"));
		else if (f.fl === 3 && f.wt === 2) {
			const { value, kind } = parseValue(c.slice(f.start, f.start + f.L));
			values.push(value); valueKinds.push(kind);
		}
		else if (f.fl === 1 && f.wt === 2) features.push(parseFeature(c.slice(f.start, f.start + f.L)));
	}
	return { name, extent, version, keys, values, valueKinds, features };
}

function featureProperties(layer, feature) {
	const props = {};
	for (let i = 0; i + 1 < feature.tags.length; i += 2) {
		const k = feature.tags[i], v = feature.tags[i + 1];
		if (k < layer.keys.length && v < layer.values.length) props[layer.keys[k]] = layer.values[v];
	}
	return props;
}

/* ---------- 前导/裸层 ---------- */
function readTagXor(buf, pos) {
	const b = buf[pos];
	const fl = b >>> 3, wt = b & 7;
	if (fl >= 1 && fl <= 15 && [0, 1, 2, 5].includes(wt)) return { fl, wt };
	const rb = b ^ 0xff, rfl = rb >>> 3, rwt = rb & 7;
	if (rfl >= 1 && rfl <= 15 && [0, 1, 2, 5].includes(rwt)) return { fl: rfl, wt: rwt };
	return null;
}

function readLenXor(buf, pos, remain) {
	const b = buf[pos];
	if (!(b & 0x80) && b <= remain) return { v: b, n: 1 };
	const rb = b ^ 0xff;
	if (!(rb & 0x80) && rb <= remain) return { v: rb, n: 1 };
	const r = R_(buf.slice(pos));
	const v = r.u32();
	if (v >= 0 && v <= remain) return { v, n: r.pos };
	return { v: -1, n: 0 };
}

function parseFeatureContainerXor(buf) {
	let pos = 0, geom = null, type = null, tags = [], partial = false;
	while (pos < buf.length) {
		const tag = readTagXor(buf, pos);
		if (!tag) { pos++; continue; }
		pos++;
		if (tag.wt === 0) {
			const r = R_(buf.slice(pos));
			const v = r.u32();
			if (tag.fl === 2) type = v;
			pos += r.pos;
			continue;
		}
		if (tag.wt === 2) {
			const rl = readLenXor(buf, pos, buf.length - pos - 1);
			if (rl.v < 0) break;
			pos += rl.n;
			const data = buf.slice(pos, pos + rl.v);
			if (tag.fl === 1) {
				const res = parseCommands(data);
				if (res) { geom = res.paths; if (res.partial) partial = true; }
				else {
					const inner = parseFeatureContainerXor(data);
					if (inner.geom) { geom = inner.geom; if (inner.type != null) type = inner.type; if (inner.tags.length) tags = inner.tags; if (inner.partial) partial = true; }
				}
			} else if (tag.fl === 3) {
				tags = parseTags(data);
			}
			pos += rl.v;
			continue;
		}
		break;
	}
	return { geom, type, tags, partial };
}

function parsePreambleLayer(raw) {
	if (raw[0] !== 0x1a) return null;
	const lb = raw[1];
	const len = (lb & 0x80) ? (lb ^ 0xff) : lb;
	if (len <= 0 || len > raw.length - 2) return null;
	const content = raw.slice(2, 2 + len);
	let pos = 0, feature = null, name = "";
	const keys = [], values = [], valueKinds = [];
	let extent = 4096, version = 2;
	while (pos < content.length) {
		const tag = readTagXor(content, pos);
		if (!tag) { pos++; continue; }
		pos++;
		if (tag.wt === 0) {
			const r = R_(content.slice(pos));
			const v = r.u32();
			if (v < 0) break;
			if (tag.fl === 5) extent = v;
			else if (tag.fl === 15) version = v;
			pos += r.pos;
			continue;
		}
		if (tag.wt === 2) {
			const rl = readLenXor(content, pos, content.length - pos - 1);
			if (rl.v < 0) break;
			pos += rl.n;
			const data = content.slice(pos, pos + rl.v);
			if (tag.fl === 1) feature = parseFeatureContainerXor(data);
			else if (tag.fl === 2) name = data.toString("utf8");
			else if (tag.fl === 4) keys.push(data.toString("utf8"));
			else if (tag.fl === 3) {
				let val = null, kind = "empty";
				for (const vf of splitFields(data)) {
					if (vf.fl === 1 && vf.wt === 2) {
						const s = data.slice(vf.start, vf.start + vf.L);
						const st = s.toString("utf8");
						if (!st.includes("�") && Buffer.from(st, "utf8").equals(s)) { val = st; kind = "string"; }
						else { val = { __raw_hex: s.toString("hex") }; kind = "rawhex"; }
					} else if (vf.fl === 3 && vf.wt === 5) { val = data.readFloatLE(vf.start); kind = "float32"; }
					else if (vf.fl === 3 && vf.wt === 1) { val = data.readDoubleLE(vf.start); kind = "float64"; }
				}
				values.push(val); valueKinds.push(kind);
			}
			pos += rl.v;
			continue;
		}
		break;
	}
	if (!name || !feature || !feature.geom) return null;
	const props = {};
	for (let i = 0; i + 1 < feature.tags.length; i += 2) {
		const k = feature.tags[i], v = feature.tags[i + 1];
		if (k < keys.length && v < values.length) props[keys[k]] = values[v];
	}
	return {
		name, extent, version, keys, values, valueKinds,
		features: [{ type: feature.type, tags: feature.tags, props, paths: feature.geom.map((p) => ({ points: p.points, closed: p.closed })), partial: !!feature.partial }],
	};
}

function parseBareBlock(buf) {
	const top = parseTop(buf);
	if (!top.ok) return null;
	const fields = top.fields;
	const nameIdx = fields.findIndex((f) => f.fl === 2 && f.wt === 2);
	if (nameIdx < 0) return null;
	const name = buf.slice(fields[nameIdx].start, fields[nameIdx].start + fields[nameIdx].L).toString("utf8");
	if (!/^[A-Za-z]{2,5}$/.test(name)) return null;
	const featFields = fields.slice(0, nameIdx);
	const layerFields = fields.slice(nameIdx + 1);
	const keys = [], values = [], valueKinds = [];
	let extent = 4096, version = 2;
	for (const f of layerFields) {
		if (f.fl === 4 && f.wt === 2) keys.push(buf.slice(f.start, f.start + f.L).toString("utf8"));
		else if (f.fl === 3 && f.wt === 2) {
			const { value, kind } = parseValue(buf.slice(f.start, f.start + f.L));
			values.push(value); valueKinds.push(kind);
		}
		else if (f.fl === 5 && f.wt === 0) extent = f.v;
		else if (f.fl === 15 && f.wt === 0) version = f.v;
		else return null;
	}
	if (!keys.length) return null;
	const rawFeatures = [];
	let cur = null;
	const flush = () => {
		if (cur && cur.tags && cur.type != null && cur.geoms.length) rawFeatures.push(cur);
		cur = null;
	};
	for (const f of featFields) {
		if (f.fl === 1 && f.wt === 2) {
			const sub = buf.slice(f.start, f.start + f.L);
			const wrapped = parseFeature(sub);
			const wrappedComplete = wrapped.type != null && wrapped.tags.length && wrapped.pathGroups.flat().length;
			if (wrappedComplete) {
				flush();
				rawFeatures.push({ type: wrapped.type, tags: wrapped.tags, geoms: wrapped.pathGroups.flat(), wrapped: true, partial: !!wrapped.partial });
				continue;
			}
			const res = findCommands(sub);
			if (!res || !res.paths.length) return null;
			(cur ||= { geoms: [], type: null, tags: null, partial: false }).geoms.push(...res.paths);
			if (res.partial) cur.partial = true;
		}
		else if (f.fl === 2 && f.wt === 0) {
			if (cur && cur.tags) flush();
			(cur ||= { geoms: [], type: null, tags: null, partial: false }).type = f.v;
		}
		else if (f.fl === 3 && f.wt === 2) {
			if (!cur || !cur.geoms.length || cur.type == null) return null;
			cur.tags = parseTags(buf.slice(f.start, f.start + f.L));
			flush();
		}
		else return null;
	}
	flush();
	if (!rawFeatures.length) return null;
	const features = [];
	for (const rf of rawFeatures) {
		if (![1, 2, 4].includes(rf.type)) continue;
		if (!rf.tags.length || rf.tags.length % 2) continue;
		const props = {};
		for (let i = 0; i + 1 < rf.tags.length; i += 2) {
			const k = rf.tags[i], v = rf.tags[i + 1];
			if (k < keys.length && v < values.length) props[keys[k]] = values[v];
		}
		features.push({ type: rf.type, tags: rf.tags, props, paths: rf.geoms.map((p) => ({ points: p.points, closed: p.closed })), partial: !!rf.partial });
	}
	if (!features.length) return null;
	return { name, extent, version, keys, values, valueKinds, features };
}

/* ---------- 坐标 ---------- */
function pkEncode(x, y, z) {
	let n = "";
	for (let a = z; a >= 0; --a) {
		const r = 1 << a;
		let o = 0;
		if (x & r) o |= 1;
		if (y & r) o |= 2;
		n += o;
	}
	let o = n.split("").reverse().join("");
	const S = "9876";
	const E = (e, t, r) => e.substring(0, t) + r + e.substring(t + 1);
	for (let a = 0; a < S.length; a++) {
		const e = Number(S[a]);
		if (e >= o.length) continue;
		o = E(o, e, 1 + Number(o.substring(e, e + 1)));
	}
	let t = "", r = "", nn = 0;
	for (let q = 0; q < o.length; q++) {
		const i = 3 * Number(o[q]);
		let a = t.length - 1;
		const s = String.fromCharCode(97 + i);
		if (s === r) {
			nn++;
			if (nn === 1) a++;
			else if (nn > 10) a--;
			t = t.slice(0, a) + nn;
		} else {
			t += s;
			r = s;
			nn = 0;
		}
	}
	return t;
}

function pointToLngLat(x, y, tx, ty, tz) {
	const n = 2 ** tz;
	const w = (tx / n) * 360 - 180;
	const latOf = (yy) => (Math.atan(Math.sinh(Math.PI * (1 - (2 * yy) / n))) * 180) / Math.PI;
	const nn = latOf(ty), ss = latOf(ty + 1);
	const lng = w + (x / EXT) * (360 / n);
	const lat = ss + ((EXT - y) / EXT) * (nn - ss);
	return [lng, lat];
}

function lngLatToXyz(lng, lat, z) {
	const n = Math.pow(2, z);
	const x = Math.floor(((lng + 180) / 360) * n);
	const lr = (lat * Math.PI) / 180;
	const y = Math.floor(((1 - Math.log(Math.tan(lr) + 1 / Math.cos(lr)) / Math.PI) / 2) * n);
	return [x, y];
}

function decodeTileFull(buf, tx, ty, tz) {
	const raw = Buffer.from(buf);
	if (raw.length > 99) raw[99] = raw[99] ^ 0xff;
	const body = raw.slice(5);
	const layerRecs = detectLayers(body);
	const layers = [];
	const preamble = parsePreambleLayer(raw);
	const firstStd = layerRecs.length ? Math.min(...layerRecs.map((r) => r.bodyPos)) : body.length;
	let bare = null;
	if (firstStd > 0) bare = parseBareBlock(body.slice(0, firstStd));
	const mapPaths = (f) => (f.pathGroups ? f.pathGroups.flat() : f.paths).map((p) => ({ points: p.points, closed: p.closed }));
	const mapStd = (L) => layers.push({
		name: L.name, extent: L.extent, version: L.version,
		keys: L.keys, values: L.values, valueKinds: L.valueKinds,
		features: L.features.map((f) => ({
			type: f.type, tags: f.tags, props: featureProperties({ keys: L.keys, values: L.values }, f),
			paths: mapPaths(f), partial: !!f.partial,
		})),
		source: "standard",
	});
	const mapRaw = (L, source) => layers.push({
		name: L.name, extent: L.extent, version: L.version,
		keys: L.keys, values: L.values, valueKinds: L.valueKinds,
		features: L.features.map((f) => ({
			type: f.type, tags: f.tags, props: { ...(f.props || {}) },
			paths: mapPaths(f), partial: !!f.partial,
		})),
		source,
	});
	if (bare && preamble && bare.name === preamble.name) mapRaw(bare, "bare");
	else {
		if (preamble) mapRaw(preamble, "preamble");
		if (bare) mapRaw(bare, "bare");
	}
	for (const lr of layerRecs) mapStd(parseLayer(lr));
	return { tx, ty, tz, layers };
}

async function fetchTile(x, y, z, tk, retries = 3) {
	const host = `tile${(x + y) % 3}.tianditu.gov.cn`;
	const url = `https://${host}/vts?t=vt&pk=${encodeURIComponent(pkEncode(x, y, z))}&tk=${encodeURIComponent(tk)}&v=1.0`;
	let lastErr = null;
	for (let a = 0; a < retries; a++) {
		try {
			const resp = await fetch(url, { headers: { Referer: REFERER, "User-Agent": UA } });
			const buf = Buffer.from(await resp.arrayBuffer());
			const ct = resp.headers.get("content-type") || "";
			if (ct.includes("json") || (buf.length && buf[0] === 0x7b)) {
				try {
					const body = JSON.parse(buf.toString("utf8"));
					if (String(body?.code) === "301010") throw new Error("tdt_permission(令牌无权/过期/域名白名单)");
					if (body?.code != null || body?.msg) throw new Error(String(body.msg || `tdt_code_${body.code}`));
				} catch (e) { if (String(e.message).startsWith("tdt_")) throw e; }
			}
			if (!resp.ok) throw new Error(`tdt_http_${resp.status}`);
			return buf;
		} catch (e) { lastErr = e; await sleep(1500); }
	}
	throw lastErr;
}

/* ================= 通用拓扑（与前端 tdtBuildingTopology.js 同规则，面/线/点分治） ================= */
const GEOM_EPS = 1e-7;
const TILE_SNAP = 1;
const SEAM_EPS = 2;

const samePoint = (a, b) => Math.abs(a[0] - b[0]) <= GEOM_EPS && Math.abs(a[1] - b[1]) <= GEOM_EPS;
const samePt9 = (a, b) => Math.abs(a[0] - b[0]) < 1e-9 && Math.abs(a[1] - b[1]) < 1e-9;

function globalRing(ring, tx, ty) {
	return ring.map(([x, y]) => [
		Math.round((tx * EXT + x) / TILE_SNAP) * TILE_SNAP,
		Math.round((ty * EXT + y) / TILE_SNAP) * TILE_SNAP,
	]);
}

function globalTileToLngLat(x, y, zoom) {
	const n = 2 ** zoom;
	const gx = x / EXT;
	const gy = y / EXT;
	return [
		(gx / n) * 360 - 180,
		(Math.atan(Math.sinh(Math.PI * (1 - (2 * gy) / n))) * 180) / Math.PI,
	];
}

/** 面裁剪到瓦片核心（去buffer；入参应已闭合，输出必闭合）。 */
/** 面裁剪到任意矩形（Sutherland；输出必闭合）。clipRingToTile为其[0,4096]特例。 */
function clipRingToRect(ring, x0, y0, x1, y1) {
	let output = ring.slice();
	const limits = [
		[0, (p) => p[0] >= x0],
		[1, (p) => p[0] <= x1],
		[2, (p) => p[1] >= y0],
		[3, (p) => p[1] <= y1],
	];
	for (const [side, inside] of limits) {
		if (!output.length) break;
		const next = [];
		for (let i = 0; i < output.length; i++) {
			const a = output[i], b = output[(i + 1) % output.length];
			const ia = inside(a), ib = inside(b);
			if (ia !== ib) {
				const axis = side < 2 ? 0 : 1;
				const bound = side === 0 ? x0 : side === 1 ? x1 : side === 2 ? y0 : y1;
				const den = b[axis] - a[axis];
				if (Math.abs(den) > GEOM_EPS) {
					const t = (bound - a[axis]) / den;
					next.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
				}
			}
			if (ib) next.push(b);
		}
		output = next;
	}
	if (output.length && !samePoint(output[0], output[output.length - 1])) output.push(output[0]);
	return output;
}

function clipRingToTile(ring) {
	return clipRingToRect(ring, 0, 0, EXT, EXT);
}

function touchesTileSeam(ring) {
	return ring.some(([x, y]) => x <= SEAM_EPS || x >= EXT - SEAM_EPS || y <= SEAM_EPS || y >= EXT - SEAM_EPS);
}

/** 线裁剪：逐段Cohen–Sutherland，保留核心内子段并串链。返回pieces（每段≥2点）。 */
function clipSegToTile(a, b) {
	const X0 = 0, Y0 = 0, X1 = EXT, Y1 = EXT;
	if (samePt9(a, b)) {
		const [x, y] = a;
		return (x >= X0 && x <= X1 && y >= Y0 && y <= Y1) ? [[a.slice(), b.slice()], true] : null;
	}
	const code = (x, y) => (x < X0 ? 8 : 0) | (x > X1 ? 4 : 0) | (y < Y0 ? 2 : 0) | (y > Y1 ? 1 : 0);
	let x0 = a[0], y0 = a[1], x1 = b[0], y1 = b[1];
	let c0 = code(x0, y0), c1 = code(x1, y1);
	for (let i = 0; i < 8; i++) {
		if (!(c0 | c1)) return [[[x0, y0], [x1, y1]], true];
		if (c0 & c1) return null;
		const c = c0 ? c0 : c1;
		let x, y;
		if (c & 1) {
			if (Math.abs(y1 - y0) < GEOM_EPS) return null;
			x = x0 + ((x1 - x0) * (Y1 - y0)) / (y1 - y0); y = Y1;
		} else if (c & 2) {
			if (Math.abs(y1 - y0) < GEOM_EPS) return null;
			x = x0 + ((x1 - x0) * (Y0 - y0)) / (y1 - y0); y = Y0;
		} else if (c & 4) {
			if (Math.abs(x1 - x0) < GEOM_EPS) return null;
			y = y0 + ((y1 - y0) * (X1 - x0)) / (x1 - x0); x = X1;
		} else {
			if (Math.abs(x1 - x0) < GEOM_EPS) return null;
			y = y0 + ((y1 - y0) * (X0 - x0)) / (x1 - x0); x = X0;
		}
		if (c === c0) { x0 = x; y0 = y; c0 = code(x0, y0); }
		else { x1 = x; y1 = y; c1 = code(x1, y1); }
	}
	return null;
}

function clipPolylineToTile(points) {
	const pieces = [];
	let cur = null;
	const flush = () => { if (cur && cur.length >= 2) pieces.push(cur); cur = null; };
	for (let i = 0; i + 1 < points.length; i++) {
		const a = points[i], b = points[i + 1];
		if (samePt9(a, b)) continue;
		const hit = clipSegToTile(a, b);
		if (!hit) { flush(); continue; }
		const [[sx0, sy0], [sx1, sy1]] = hit[0];
	 const s = [[sx0, sy0], [sx1, sy1]];
		const fullA = samePt9(s[0], a), fullB = samePt9(s[1], b);
		if (cur && fullA && samePt9(cur[cur.length - 1], a)) cur.push(s[1]);
		else { flush(); cur = [s[0], s[1]]; }
		if (!fullB) { if (cur.length >= 2) pieces.push(cur); cur = null; }
	}
	flush();
	return pieces.filter((p) => p.length >= 2);
}

function pointInRings(rings, point) {
	let inside = false;
	for (const ring of rings) {
		for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
			const a = ring[i], b = ring[j];
			if (a[1] > point[1] !== b[1] > point[1] &&
				point[0] < ((b[0] - a[0]) * (point[1] - a[1])) / (b[1] - a[1]) + a[0]) inside = !inside;
		}
	}
	return inside;
}

function addSplitParameter(params, value) {
	if (value > GEOM_EPS && value < 1 - GEOM_EPS) params.push(value);
}

function splitIntersection(a, b, c, d) {
	const rx = b[0] - a[0], ry = b[1] - a[1];
	const sx = d[0] - c[0], sy = d[1] - c[1];
	const qx = c[0] - a[0], qy = c[1] - a[1];
	const den = rx * sy - ry * sx;
	const result = [[], []];
	if (Math.abs(den) > GEOM_EPS) {
		addSplitParameter(result[0], (qx * sy - qy * sx) / den);
		addSplitParameter(result[1], (qx * ry - qy * rx) / den);
		return result;
	}
	if (Math.abs(qx * ry - qy * rx) > GEOM_EPS) return result;
	const rr = rx * rx + ry * ry, ss = sx * sx + sy * sy;
	if (rr > GEOM_EPS) {
		addSplitParameter(result[0], ((c[0] - a[0]) * rx + (c[1] - a[1]) * ry) / rr);
		addSplitParameter(result[0], ((d[0] - a[0]) * rx + (d[1] - a[1]) * ry) / rr);
	}
	if (ss > GEOM_EPS) {
		addSplitParameter(result[1], ((a[0] - c[0]) * sx + (a[1] - c[1]) * sy) / ss);
		addSplitParameter(result[1], ((b[0] - c[0]) * sx + (b[1] - c[1]) * sy) / ss);
	}
	return result;
}

/** 无第三方包的外边界Union（边相交拆分→内外采样→外环追踪）。 */
function unionRings(inputRings) {
	const rings = inputRings.map((ring) => {
		const output = [];
		for (const point of ring) {
			const snapped = [Math.round(point[0] / TILE_SNAP) * TILE_SNAP, Math.round(point[1] / TILE_SNAP) * TILE_SNAP];
			if (!output.length || !samePoint(output[output.length - 1], snapped)) output.push(snapped);
		}
		if (output.length > 1 && samePoint(output[0], output[output.length - 1])) output.pop();
		return output;
	}).filter((ring) => ring.length >= 3);
	const source = [];
	for (const ring of rings) {
		for (let i = 0; i < ring.length; i++) source.push({ a: ring[i], b: ring[(i + 1) % ring.length], cuts: [0, 1] });
	}
	for (let l = 0; l < source.length; l++) {
		for (let r = l + 1; r < source.length; r++) {
			const [a, b] = splitIntersection(source[l].a, source[l].b, source[r].a, source[r].b);
			source[l].cuts.push(...a);
			source[r].cuts.push(...b);
		}
	}
	const pointKey = (p) => `${Math.round(p[0] / TILE_SNAP)},${Math.round(p[1] / TILE_SNAP)}`;
	const boundary = [];
	for (const edge of source) {
		const cuts = [...new Set(edge.cuts.sort((a, b) => a - b))];
		for (let i = 0; i + 1 < cuts.length; i++) {
			const t0 = cuts[i], t1 = cuts[i + 1];
			const a = [edge.a[0] + (edge.b[0] - edge.a[0]) * t0, edge.a[1] + (edge.b[1] - edge.a[1]) * t0];
			const b = [edge.a[0] + (edge.b[0] - edge.a[0]) * t1, edge.a[1] + (edge.b[1] - edge.a[1]) * t1];
			const dx = b[0] - a[0], dy = b[1] - a[1];
			const len = Math.hypot(dx, dy);
			if (len <= GEOM_EPS) continue;
			const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
			const delta = Math.min(0.01, len / 100);
			const left = [mid[0] - (dy / len) * delta, mid[1] + (dx / len) * delta];
			const right = [mid[0] + (dy / len) * delta, mid[1] - (dx / len) * delta];
			const li = pointInRings(rings, left), ri = pointInRings(rings, right);
			if (li === ri) continue;
			boundary.push({ a: li ? a : b, b: li ? b : a, ak: pointKey(li ? a : b), bk: pointKey(li ? b : a) });
		}
	}
	const unique = new Map();
	for (const edge of boundary) {
		const fwd = `${edge.ak}>${edge.bk}`, rev = `${edge.bk}>${edge.ak}`;
		if (unique.has(rev)) unique.delete(rev);
		else if (!unique.has(fwd)) unique.set(fwd, edge);
	}
	const edges = [...unique.values()];
	const outgoing = new Map();
	for (const edge of edges) {
		if (!outgoing.has(edge.ak)) outgoing.set(edge.ak, []);
		outgoing.get(edge.ak).push(edge);
	}
	const output = [];
	for (const first of edges) {
		if (first.used) continue;
		first.used = true;
		const ring = [first.a, first.b];
		let prev = first.a, cur = first.b;
		while (!samePoint(cur, ring[0])) {
			const cands = (outgoing.get(pointKey(cur)) || []).filter((e) => !e.used);
			if (!cands.length) break;
			const incoming = Math.atan2(cur[1] - prev[1], cur[0] - prev[0]);
			cands.sort((l, r) => {
				const turn = (e) => (Math.atan2(e.b[1] - e.a[1], e.b[0] - e.a[0]) - incoming + Math.PI * 2) % (Math.PI * 2);
				return turn(l) - turn(r);
			});
			const next = cands[0];
			next.used = true;
			prev = cur; cur = next.b;
			ring.push(cur);
			if (ring.length > edges.length + 1) break;
		}
		if (samePoint(cur, ring[0]) && ring.length >= 4) {
			const cleaned = [];
			for (const point of ring) {
				if (!cleaned.length || !samePoint(cleaned[cleaned.length - 1], point)) cleaned.push(point);
			}
			if (!samePoint(cleaned[0], cleaned[cleaned.length - 1])) cleaned.push(cleaned[0]);
			if (cleaned.length >= 4) output.push(cleaned);
		}
	}
	return output;
}

function ringArea(ring) {
	let s = 0;
	for (let i = 0; i < ring.length - 1; i++) s += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
	return Math.abs(s / 2);
}

/** 环组覆盖量级（shoelace绝对值和；洞亦计入，用于Union前后守恒对比）。 */
function ringsArea(rings) {
	let s = 0;
	for (const r of rings) s += ringArea(r);
	return s;
}

function pointInRing(ring, pt) {
	let inside = false;
	for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
		const a = ring[i], b = ring[j];
		if (a[1] > pt[1] !== b[1] > pt[1] && pt[0] < ((b[0] - a[0]) * (pt[1] - a[1])) / (b[1] - a[1]) + a[0]) inside = !inside;
	}
	return inside;
}

/** 面洞嵌套（首环外环＋被包含环为洞，不依赖绕向）。 */
function nestRings(coords) {
	if (coords.length <= 1) return coords.map((r) => [r]);
	const order = coords.map((r, i) => i).sort((a, b) => ringArea(coords[b]) - ringArea(coords[a]));
	const owners = new Array(coords.length).fill(-1);
	for (const i of order) {
		let best = -1, bestArea = Infinity;
		for (const j of order) {
			if (i === j || owners[j] !== -1) continue;
			if (ringArea(coords[j]) <= ringArea(coords[i])) continue;
			if (pointInRing(coords[j], coords[i][0])) {
				const a = ringArea(coords[j]);
				if (a < bestArea) { bestArea = a; best = j; }
			}
		}
		owners[i] = best;
	}
	const polys = [];
	for (const i of order) {
		if (owners[i] === -1) polys.push([coords[i]]);
		else polys.find((p) => p[0] === coords[owners[i]]).push(coords[i]);
	}
	return polys;
}

// 去重键舍入：1e-7度≈1cm（远小于瓦片坐标量子~15cm/z16, 更远小于旧round3的~100m误杀线）
const round7 = (v) => Math.round(v * 1e7) / 1e7;
function stableProps(props) {
	const o = {};
	for (const k of Object.keys(props || {}).sort()) {
		const v = props[k];
		o[k] = (v && typeof v === "object") ? JSON.stringify(v) : v;
	}
	return JSON.stringify(o);
}

/** 同id面合并：裁剪→全局坐标→接缝候选Union→输出。id/属性映射由opt给出。 */
function mergeIdPolygons(records, opt) {
	const groups = new Map();
	for (const r of records) {
		if (!groups.has(r.id)) groups.set(r.id, { parts: [], tileKeys: new Set(), seam: false, partial: false });
		const g = groups.get(r.id);
		if (r.partial) g.partial = true;
		for (const ring of r.rings || []) {
			const closed = ring.length >= 3 && !samePoint(ring[0], ring[ring.length - 1]) ? [...ring, ring[0]] : ring.slice();
			const clipped = clipRingToTile(closed);
			if (clipped.length >= 4) {
				g.parts.push({ ring: clipped, tx: r.tx, ty: r.ty, zoom: r.zoom });
				g.tileKeys.add(`${r.tx},${r.ty},${r.zoom}`);
				if (touchesTileSeam(clipped)) g.seam = true;
			}
		}
		if (!g.filled) { g.extra = { ...(r.extra || {}) }; g.filled = true; }
		else if (opt.fillExtra) opt.fillExtra(g.extra, r.extra || {});
	}
	const features = [];
	let unionCount = 0, fallbackCount = 0;
	for (const [id, group] of groups) {
		if (!group.parts.length) continue;
		const zoom = group.parts[0].zoom;
		const globalRings = group.parts.map((part) => globalRing(part.ring, part.tx, part.ty));
		const needsUnion = group.parts.length > 1 && group.tileKeys.size > 1 && group.seam;
		let merged = globalRings, mergedFlag = false;
		if (needsUnion) {
			try {
				const u = unionRings(globalRings);
				// 面积守恒：输出覆盖显著小于输入则回退保留原环（防Union吞环误删）
				if (u.length && ringsArea(u) >= ringsArea(globalRings) * 0.99 - 1) {
					merged = u; mergedFlag = true; unionCount++;
				} else fallbackCount++;
			} catch { fallbackCount++; /* 回退保留裁剪片段 */ }
			if (!merged.length) merged = globalRings;
		}
		const polys = merged.map((ring) => [ring.map(([x, y]) => globalTileToLngLat(x, y, zoom))]);
		if (!polys.length) continue;
		const nested = [];
		for (const poly of polys) {
			for (const ring of poly) {
				let host = -1;
				for (let i = 0; i < nested.length; i++) {
					if (pointInRing(nested[i][0], ring[0]) && ringArea(nested[i][0]) > ringArea(ring)) { host = i; break; }
				}
				if (host >= 0) nested[host].push(ring);
				else nested.push([ring]);
			}
		}
		const properties = { [opt.idProp]: id, ...opt.props(group.extra || {}) };
		if (mergedFlag) properties._seam_merged = 1;
		if (group.partial) properties._geom_partial = 1;
		features.push({
			type: "Feature",
			properties,
			geometry: nested.length > 1
				? { type: "MultiPolygon", coordinates: nested }
				: { type: "Polygon", coordinates: nested[0] },
		});
	}
	return { features, unionCount, fallbackCount, groups: groups.size };
}

/** 残余重叠审计：严格在内（排除边界接触）＋洞感知；只打标不改几何。返回被标要素下标集。 */
function distSeg(p, a, b) {
	const dx = b[0] - a[0], dy = b[1] - a[1];
	const L2 = dx * dx + dy * dy;
	if (L2 === 0) return Math.hypot(p[0] - a[0], p[1] - a[1]);
	let t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L2;
	t = Math.max(0, Math.min(1, t));
	return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}

function strictlyInsideRings(polyRings, pt) {
	if (!pointInRing(polyRings[0], pt)) return false;
	for (let k = 1; k < polyRings.length; k++) if (pointInRing(polyRings[k], pt)) return false;
	for (const r of polyRings) {
		for (let i = 0; i + 1 < r.length; i++) {
			if (distSeg(pt, r[i], r[i + 1]) < 1e-9) return false;
		}
	}
	return true;
}

function polyBbox(ring) {
	const a = [1e9, 1e9, -1e9, -1e9];
	for (const p of ring) {
		if (p[0] < a[0]) a[0] = p[0];
		if (p[1] < a[1]) a[1] = p[1];
		if (p[0] > a[2]) a[2] = p[0];
		if (p[1] > a[3]) a[3] = p[1];
	}
	return a;
}

function auditResidualOverlap(features) {
	// 输入：已输出的面要素数组；输出：需打标下标Set（两两严格互含即残余重叠）
	const polys = [];
	features.forEach((f, idx) => {
		if (!f.geometry) return;
		const gs = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.type === "MultiPolygon" ? f.geometry.coordinates : null;
		if (!gs) return;
		// 同要素内多面片亦参与比较（融合失败残留的叠片即此类；洞感知已排除洞-外环误报）
		for (const poly of gs) polys.push({ rings: poly, idx, bb: polyBbox(poly[0]) });
	});
	const flag = new Set();
	for (let i = 0; i < polys.length; i++) {
		for (let j = i + 1; j < polys.length; j++) {
			const A = polys[i], B = polys[j];
			const a = A.bb, b = B.bb;
			if (!(a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1])) continue;
			if (JSON.stringify(A.rings) === JSON.stringify(B.rings)) continue; // 完全相同已去重，此处防御
			let hit = false;
			for (const r of A.rings) { for (const pt of r) { if (strictlyInsideRings(B.rings, pt)) { hit = true; break; } } if (hit) break; }
			if (!hit) {
				for (const r of B.rings) { for (const pt of r) { if (strictlyInsideRings(A.rings, pt)) { hit = true; break; } } if (hit) break; }
			}
			if (hit) { flag.add(A.idx); flag.add(B.idx); }
		}
	}
	return flag;
}

function validLabel(value) {
	if (typeof value !== "string") return null;
	const t = value.trim();
	if (!t || t.includes("�")) return null;
	return t;
}

function labelFromProps(props) {
	for (const k of ["lzh", "name", "label", "title", "Z5"]) {
		const v = validLabel(props[k]);
		if (v) return v;
	}
	return null;
}

/* ================= 驱动 ================= */
function parseArgs(argv) {
	const o = {};
	for (let i = 2; i < argv.length; i++) {
		const a = argv[i];
		if (a.startsWith("--")) {
			const k = a.slice(2);
			const v = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "1";
			o[k] = v;
		}
	}
	return o;
}

async function main() {
	const args = parseArgs(process.argv);
	const tk = String(args.tk || DEMO_TK).trim();
	let bbox = null;
	if (args.bbox) {
		const p = String(args.bbox).split(",").map(Number);
		if (p.length !== 4 || p.some((v) => !Number.isFinite(v))) { console.error("bbox格式: minLng,minLat,maxLng,maxLat"); process.exit(2); }
		bbox = p;
	} else if (args.center) {
		const [cLng, cLat] = String(args.center).split(",").map(Number);
		const delta = Number(args.delta || 0.004);
		bbox = [cLng - delta, cLat - delta, cLng + delta, cLat + delta];
	} else { console.error("需要 --bbox 或 --center"); process.exit(2); }
	const zoom = Number(args.zoom || 16);
	if (!Number.isInteger(zoom)) { console.error("--zoom 须为整数"); process.exit(2); }
	if (zoom < 15 || zoom > 18) console.error(`警告: --zoom=${zoom} 超出已验证范围15~18，结果仅供参考`);
	let layers = ALL_LAYERS.slice();
	if (args.layers && String(args.layers).toLowerCase() !== "all") {
		layers = String(args.layers).split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
		for (const l of layers) {
			if (!ALL_LAYERS.includes(l)) { console.error(`未知图层 ${l}，可用：${ALL_LAYERS.join(",")} / all`); process.exit(2); }
		}
	}
	const outdir = String(args.outdir || "./tdt_out");
	const delay = Number(args.delay || 400);
	const maxTiles = Number(args["max-tiles"] || 500);
	const [x0, y1] = lngLatToXyz(bbox[0], bbox[1], zoom);
	const [x1, y0] = lngLatToXyz(bbox[2], bbox[3], zoom);
	const tiles = [];
	for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) tiles.push([x, y]);
	console.log(`bbox=${bbox} z=${zoom} 瓦片x[${x0}-${x1}] y[${y0}-${y1}] 共${tiles.length}块 图层=${layers.join(",")}`);
	if (tiles.length > maxTiles) { console.error(`瓦片数${tiles.length}超过上限${maxTiles}，请缩小范围`); process.exit(2); }
	fs.mkdirSync(outdir, { recursive: true });

	// 取数
	const perLayer = new Map(layers.map((l) => [l, []]));
	const failures = [];
	let di = 0;
	for (const [x, y] of tiles) {
		di++;
		const tag = `${zoom}_${x}_${y}`;
		try {
			const buf = await fetchTile(x, y, zoom, tk);
			const dec = decodeTileFull(buf, x, y, zoom);
			for (const L of dec.layers) {
				if (!perLayer.has(L.name)) continue;
				for (const f of L.features) {
					perLayer.get(L.name).push({ ...f, tx: x, ty: y, zoom });
				}
			}
		} catch (e) {
			console.error(`  fail ${tag}: ${String(e?.message || e)}`);
			failures.push({ tag, reason: String(e?.message || e) });
		}
		if (di % 5 === 0 || di === tiles.length) console.log(`  ${di}/${tiles.length} tiles`);
		await sleep(delay);
	}

	// 通用拓扑（分层）
	const stats = {};
	const writeFC = (name, features) => {
		fs.writeFileSync(path.join(outdir, `${name}.geojson`), JSON.stringify({
			type: "FeatureCollection",
			crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
			features,
		}, null, 1));
	};

	const toLngLatPaths = (paths, tx, ty, z) => paths.map((p) => p.points.map(([px, py]) => pointToLngLat(px, py, tx, ty, z)));

	for (const name of layers) {
		const feats = perLayer.get(name) || [];
		const st = { in: feats.length, out: 0 };
		let out = [];
		if (name === "CE") {
			const recs = [];
			for (const f of feats) {
				if (f.type !== 2) continue;
				// elemid 两种编码方案都收（ grouping 键只看稳定性，不看位数 ）：
				//   ① 老样本：14位纯数字（如 41000002088680，沪/豫/开封）
				//   ② 郑州z18起：含字母方案（如 41012025zzrespl0062339，30~34层高楼，
				//      respt 同 id 挂"2号楼"等名）
				// 历史 bug ：曾只认 /^\d{14}$/ ，方案②被静默丢弃（18_213794_104070 瓦 7→3，
				// 丢的正是官方可见的 4 栋百米高楼）；elemid 只作跨瓦 Union 分组键，不得按格式预设。
				const eid = f.props.elemid;
				if (typeof eid !== "string" || !/^[0-9A-Za-z]{6,32}$/.test(eid)) continue;
				// buffer盒裁剪（[-82,4178]）替代整要素丢弃：只去全越界环，bbox边缘不断楼
				// （前端/Node建筑脚本沿用整要素弃的严格版，输出schema与已验证数不变；最终程序取更保数据的裁剪版）
				const rings = [];
				for (const p of f.paths) {
					if (p.points.length < 3) continue;
					const ring = p.points.slice();
					if (!samePoint(ring[0], ring[ring.length - 1])) ring.push(ring[0]);
					const c = clipRingToRect(ring, -82, -82, 4178, 4178);
					if (c.length >= 4) rings.push(c);
				}
				if (!rings.length) continue;
				recs.push({
					id: f.props.elemid,
					rings, tx: f.tx, ty: f.ty, zoom: f.zoom,
					extra: {
						h: typeof f.props.h === "number" ? f.props.h : null,
						floors: f.props.floor ?? null,
						A6: f.props.A6 ?? null,
						name: f._name || null,
					},
					partial: !!f.partial,
				});
			}
			// respt挂名（同瓦elemid→label；跨瓦同elemid在合并fillExtra中互补）
			const nameById = new Map();
			if (perLayer.has("respt") || layers.includes("respt")) {
				for (const f of perLayer.get("respt") || []) {
					const id = f.props && f.props.elemid;
					const label = labelFromProps(f.props || {});
					if (id != null && label && !nameById.has(String(id))) nameById.set(String(id), label);
				}
			}
			for (const r of recs) if (!r.extra.name && nameById.has(r.id)) r.extra.name = nameById.get(r.id);
			const { features, unionCount, fallbackCount } = mergeIdPolygons(recs, {
				idProp: "elemid",
				fillExtra: (dst, src) => {
					if (dst.h == null && src.h != null) dst.h = src.h;
					if (dst.floors == null && src.floors != null) dst.floors = src.floors;
					if (dst.A6 == null && src.A6 != null) dst.A6 = src.A6;
					if (!dst.name && src.name) dst.name = src.name;
				},
				props: (ex) => {
					const p = {};
					if (ex.h != null && ex.h > 0) p.height_m = ex.h;
					if (ex.floors != null) p.floors = Number(ex.floors);
					if (ex.A6 != null) p.A6 = ex.A6;
					if (ex.name) p.name = ex.name;
					return p;
				},
			});
			st.union = unionCount;
			if (fallbackCount) st.union_fallback = fallbackCount;
			out = features;
		} else if (name === "AP") {
			const recs = [];
			for (const f of feats) {
				if (f.type !== 2) continue;
				const id = f.props.objectid;
				if (id == null || (typeof id === "object")) continue;
				const rings = [];
				for (const p of f.paths) {
					if (p.points.length < 3) continue;
					const ring = p.points.slice();
					if (!samePoint(ring[0], ring[ring.length - 1])) ring.push(ring[0]);
					const c = clipRingToRect(ring, -82, -82, 4178, 4178);
					if (c.length >= 4) rings.push(c);
				}
				if (!rings.length) continue;
				recs.push({ id: String(id), rings, tx: f.tx, ty: f.ty, zoom: f.zoom, extra: {}, partial: !!f.partial });
			}
			const { features, unionCount, fallbackCount } = mergeIdPolygons(recs, {
				idProp: "objectid",
				props: () => ({}),
			});
			for (const ft of features) ft.properties.objectid = Number(ft.properties.objectid);
			st.union = unionCount;
			if (fallbackCount) st.union_fallback = fallbackCount;
			out = features;
		} else if (name === "respt" || name === "BI" || name === "AD") {
			// 点：buffer亦保留＋同id去重（respt按elemid；BI按F5；AD按Z5+H7+L1+A6，无id按坐标）
			const seen = new Set();
			for (const f of feats) {
				if (f.type !== 4) continue;
				const pts = [];
				// buffer点亦保留（跨瓦同id/同坐标去重兜底；bbox边缘无邻瓦可取时保数据，不误删）
				for (const p of f.paths) for (const [px, py] of p.points) {
					pts.push(pointToLngLat(px, py, f.tx, f.ty, f.zoom));
				}
				if (!pts.length) continue;
				let key;
				if (name === "respt") key = "e:" + String(f.props.elemid ?? "?");
				else if (name === "BI") key = "f:" + String(f.props.F5 ?? "?");
				else key = "a:" + [f.props.Z5, f.props.H7, f.props.L1, f.props.A6].map((v) => String(v ?? "")).join("|");
				if (key.endsWith("?") || key.includes("undefined")) key += "@" + pts.map((p) => p.map((v) => v.toFixed(7)).join(",")).join(";");
				if (seen.has(key)) { st.dedup = (st.dedup || 0) + 1; continue; }
				seen.add(key);
				const props = { ...f.props, _tile: `${f.zoom}_${f.tx}_${f.ty}` };
				if (f.partial) props._geom_partial = 1;
				out.push({
					type: "Feature", properties: props,
					geometry: pts.length > 1 ? { type: "MultiPoint", coordinates: pts } : { type: "Point", coordinates: pts[0] },
				});
			}
		} else if (name === "AA" || name === "AB" || name === "AM" || name === "BK") {
			// 线：核心裁剪（逐段）＋完全一致去重；接缝断开不断言拼接
			const seen = new Set();
			for (const f of feats) {
				if (f.type !== 1) continue;
				for (const p of f.paths) {
					const pieces = clipPolylineToTile(p.points);
					for (const piece of pieces) {
						const ll = piece.map(([px, py]) => pointToLngLat(px, py, f.tx, f.ty, f.zoom));
						const key = ll.map((q) => q.map(round7).join(",")).join(";") + "|" + stableProps(f.props);
						if (seen.has(key)) { st.dedup = (st.dedup || 0) + 1; continue; }
						seen.add(key);
						const props = { ...f.props, _tile: `${f.zoom}_${f.tx}_${f.ty}` };
						if (f.partial) props._geom_partial = 1;
						out.push({ type: "Feature", properties: props, geometry: { type: "LineString", coordinates: ll } });
					}
					if (!pieces.length) st.clipped = (st.clipped || 0) + 1;
				}
			}
		} else if (name === "BV") {
			// BV原样直出：不裁剪、不去重、不嵌套、不审计（行政底图，保持源样）
			for (const f of feats) {
				if (f.type !== 2) continue;
				const ll = [];
				for (const p of f.paths) {
					if (p.points.length < 3) continue;
					const ring = p.points.map(([px, py]) => pointToLngLat(px, py, f.tx, f.ty, f.zoom));
					if (ring.length < 3) continue;
					const a = ring[0], b = ring[ring.length - 1];
					if (a[0] !== b[0] || a[1] !== b[1]) ring.push([a[0], a[1]]);
					ll.push(ring);
				}
				if (!ll.length) continue;
				const props = { ...f.props, _tile: `${f.zoom}_${f.tx}_${f.ty}` };
				if (f.partial) props._geom_partial = 1;
				out.push({
					type: "Feature", properties: props,
					geometry: ll.length > 1 ? { type: "MultiPolygon", coordinates: ll.map((r) => [r]) } : { type: "Polygon", coordinates: [ll[0]] },
				});
			}
		} else if (name === "CK" || name === "BM") {
			// 覆盖面融合：核心裁剪 → 按S8分组（跨S8禁合）→ 连通（重叠/贴边）Union → 洞嵌套。
			// 无稳定id，以几何连通代替id分组。
			const byS8 = new Map();
			for (const f of feats) {
				if (f.type !== 2) continue;
				const s8 = String(f.props.S8 ?? "__none__");
				if (!byS8.has(s8)) byS8.set(s8, []);
				for (const p of f.paths) {
					if (p.points.length < 3) continue;
					const ring = p.points.slice();
					if (!samePoint(ring[0], ring[ring.length - 1])) ring.push(ring[0]);
					const c = clipRingToTile(ring);
					if (c.length < 4) { st.clipped = (st.clipped || 0) + 1; continue; }
					byS8.get(s8).push({ ring: c, tx: f.tx, ty: f.ty, zoom: f.zoom, partial: !!f.partial, s8v: f.props.S8 ?? null });
				}
			}
			for (const [s8, items] of byS8) {
				if (!items.length) continue;
				const z = items[0].zoom;
				const globals = items.map((it) => ({
					ring: globalRing(it.ring, it.tx, it.ty),
					s8v: it.s8v,
					tile: `${it.zoom}_${it.tx}_${it.ty}`,
					partial: it.partial,
				}));
				const seenR = new Set();
				const uniq = [];
				for (const g of globals) {
					const key = g.ring.map((q) => q.join(",")).join(";");
					if (seenR.has(key)) { st.dedup = (st.dedup || 0) + 1; continue; }
					seenR.add(key);
					uniq.push(g);
				}
				const n = uniq.length;
				const parent = uniq.map((_, i) => i);
				const find = (a) => (parent[a] === a ? a : (parent[a] = find(parent[a])));
				const uni = (a, b) => { parent[find(a)] = find(b); };
				const keys = uniq.map((g) => new Set(g.ring.map((p) => `${Math.round(p[0])},${Math.round(p[1])}`)));
				const bbs = uniq.map((g) => {
					const a = [1e18, 1e18, -1e18, -1e18];
					for (const p of g.ring) {
						if (p[0] < a[0]) a[0] = p[0];
						if (p[1] < a[1]) a[1] = p[1];
						if (p[0] > a[2]) a[2] = p[0];
						if (p[1] > a[3]) a[3] = p[1];
					}
					return a;
				});
				for (let i = 0; i < n; i++) {
					for (let j = i + 1; j < n; j++) {
						const a = bbs[i], b = bbs[j];
						if (!(a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1])) continue;
						let link = false;
						for (const k of keys[i]) { if (keys[j].has(k)) { link = true; break; } }
						if (!link) {
							const ri = uniq[i].ring, rj = uniq[j].ring;
							for (const pt of ri) { if (pointInRing(rj, pt)) { link = true; break; } }
							if (!link) for (const pt of rj) { if (pointInRing(ri, pt)) { link = true; break; } }
						}
						if (link) uni(i, j);
					}
				}
				const comps = new Map();
				uniq.forEach((g, i) => {
					const r = find(i);
					if (!comps.has(r)) comps.set(r, []);
					comps.get(r).push(g);
				});
				for (const [, members] of comps) {
					let outRings, fused = false, partial = false;
					for (const mb of members) if (mb.partial) partial = true;
					if (members.length > 1) {
						const edgeCount = members.reduce((s, mb) => s + mb.ring.length, 0);
						if (edgeCount <= 20000) {
							try {
								const u = unionRings(members.map((mb) => mb.ring));
								// 面积守恒：输出覆盖显著小于输入则回退（防Union吞环误删）
								if (u.length && ringsArea(u) >= ringsArea(members.map((mb) => mb.ring)) * 0.99 - 1) {
									outRings = u; fused = true; st.fused = (st.fused || 0) + 1;
								} else st.union_fallback = (st.union_fallback || 0) + 1;
							} catch { st.union_fallback = (st.union_fallback || 0) + 1; /* 回退保留原环 */ }
						} else st.fused_skip = (st.fused_skip || 0) + 1;
					}
					if (!outRings) outRings = members.map((mb) => mb.ring);
					const ll = outRings.map((r) => r.map(([x, y]) => globalTileToLngLat(x, y, z)));
					const nested = nestRings(ll);
					const props = members[0].s8v == null ? {} : { S8: members[0].s8v };
					props._tile = members[0].tile;
					if (members.length > 1) props._fused_from = members.length;
					if (fused) props._seam_merged = 1;
					if (partial) props._geom_partial = 1;
					out.push({
						type: "Feature", properties: props,
						geometry: nested.length > 1 ? { type: "MultiPolygon", coordinates: nested } : { type: "Polygon", coordinates: nested[0] },
					});
				}
			}
		}
		// 残余重叠只打标不改几何（BV原样直出，不参与审计）
		if (name === "CE" || name === "AP" || name === "CK" || name === "BM") {
			const flagged = auditResidualOverlap(out);
			for (const idx of flagged) out[idx].properties._topo_review = 1;
			if (flagged.size) st.topo_review = flagged.size;
		}
		st.out = out.length;
		stats[name] = st;
		if (out.length) writeFC(name, out);
	}
	fs.writeFileSync(path.join(outdir, "merge_stats.json"), JSON.stringify({ layers: stats, failures }, null, 1));
	fs.writeFileSync(path.join(outdir, "run_info.json"), JSON.stringify({ bbox, zoom, tiles: tiles.length, layers, tk_tail: String(tk).slice(-4), failures: failures.length }, null, 1));
	console.log(`完成 tiles=${tiles.length} 图层=${layers.join(",")}`);
	for (const [k, v] of Object.entries(stats)) console.log(` ${k}: in=${v.in} out=${v.out}` + (v.union ? ` union=${v.union}` : "") + (v.fused ? ` fused=${v.fused}` : "") + (v.union_fallback ? ` fallback=${v.union_fallback}` : "") + (v.dedup ? ` dedup=${v.dedup}` : "") + (v.topo_review ? ` topo_review=${v.topo_review}` : "") + (v.clipped ? ` clipped=${v.clipped}` : ""));
	console.log(`输出 -> ${outdir}`);
}

/** 内置自检：合成用例验证裁剪/合并/去重（node tdt_vector_fetch.mjs --selftest）。 */
function selftest() {
	let pass = 0, fail = 0;
	const ok = (name, cond, extra = "") => {
		if (cond) { pass++; console.log(`  PASS ${name}`); }
		else { fail++; console.log(`  FAIL ${name} ${extra}`); }
	};
	// 1) 线裁剪：十字贯穿应保留核心内两段
	const cross1 = clipPolylineToTile([[-100, 2048], [4196, 2048]]);
	const cross2 = clipPolylineToTile([[2048, -100], [2048, 4196]]);
	ok("线裁剪十字贯穿", cross1.length === 1 && cross2.length === 1,
		JSON.stringify([cross1.length, cross2.length]));
	const allIn = [...cross1, ...cross2].every((p) => p.every(([x, y]) => x >= 0 && x <= 4096 && y >= 0 && y <= 4096));
	ok("线裁剪无越界点", allIn);
	// 2) 线裁剪：完全外部线应整体丢弃
	ok("外部线丢弃", clipPolylineToTile([[-50, -50], [-10, -10]]).length === 0);
	// 3) Union：两接缝半方合成整方（面积守恒）
	const left = [[0, 0], [2048, 0], [2048, 2048], [0, 2048], [0, 0]];
	const right = [[2048, 0], [4096, 0], [4096, 2048], [2048, 2048], [2048, 0]];
	const u = unionRings([left, right]);
	const ua = ringsArea(u);
	ok("接缝Union面积≈整方", Math.abs(ua - 4096 * 2048) < 4096 * 2048 * 0.01, `rings=${u.length} area=${Math.round(ua)}`);
	// 4) Union面积守恒：含洞环不丢洞外面积
	const outer = [[0, 0], [1000, 0], [1000, 1000], [0, 1000], [0, 0]];
	const hole = [[400, 400], [600, 400], [600, 600], [400, 600], [400, 400]];
	const uh = unionRings([outer, hole]);
	ok("洞环Union不吞面", ringsArea(uh) >= ringsArea([outer, hole]) * 0.99 - 1, String(Math.round(ringsArea(uh))));
	// 5) 面裁剪：buffer环裁到核心不断裂丢失主体
	const big = [[-82, -82], [4178, -82], [4178, 4178], [-82, 4178], [-82, -82]];
	const cc = clipRingToTile(big);
	ok("buffer环裁剪保留", cc.length >= 4 && cc.every(([x, y]) => x >= 0 && x <= 4096 && y >= 0 && y <= 4096));
	// 6) 去重键精度：相邻15cm两点不合并（旧1e-3度≈100m误杀已修）
	const k1 = [114.302, 34.82].map(round7).join(","), k2 = [114.3020015, 34.82].map(round7).join(",");
	ok("cm级区分", k1 !== k2, k1 + " vs " + k2);
	console.log(`自检 ${pass}过 ${fail}败`);
	if (fail) process.exit(1);
}

const __isMain = (() => {
	try {
		const a = new URL(import.meta.url).pathname.replace(/\\/g, "/").split("/").pop();
		const b = String(process.argv[1] || "").replace(/\\/g, "/").split("/").pop();
		return !!a && a === b;
	} catch { return false; }
})();
if (__isMain) {
	if (process.argv.includes("--selftest")) selftest();
	else main().catch((e) => { console.error(e); process.exit(1); });
}

// 纯函数导出（供测试/前端复用；主流程不受影响）
export {
	unionRings, clipRingToTile, clipRingToRect, clipPolylineToTile,
	globalRing, globalTileToLngLat, pointToLngLat, nestRings, ringsArea,
};
