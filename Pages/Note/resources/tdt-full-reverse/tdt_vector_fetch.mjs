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
//   --layers all（=全部75码）或逗号分隔；默认20码：
//            BI,BV,CE,CK,BM,BK,AA,AB,AP,AD,AM,respt,BA,AN,AR,AW,AF,CA,BN,AX
//            其余可用：CC(国道省道) AG/AE/BE(界线) AJ/AI/AT/BH/BL/BT/BY/BZ(注记) AL/Y*/Z*/t8ji/... （见 LAYER_SPEC）
//   --tk 天地图tk（默认内置demo tk；自备tk用 --tk 覆盖；小范围研究，遵守服务条款）
//   --outdir 输出目录（每层 <LAYER>.geojson + merge_stats.json + run_info.json）
//   --delay 批间隔毫秒（默认400，禁调小） --max-tiles 上限（默认40，超限拒绝请缩小范围）
//   --zh-keys 属性键输出为中文（仅供人工查看；生产管线勿用，会破坏既有 schema）
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
//      AP 为区级行政区划面（分层），跨要素“纯包含”属正常层级（区含乡/功能区残留）不打标，
//      只报“部分重叠”（互相切进去又出来）；CE/CK/BM 保持原严格语义。
//   9) 裁剪环洁净：Sutherland 以环形取模遍历，闭合环会让首点被再计入一次；
//      旧版 clipRingToRect 因此给每个输出环插入 1 个零长边（凹环沿裁剪边留下退化桥→自相交）。
//      现先开环化、输出前再去零长边，环内不再出现重复相邻点。
//  10) 裁剪多环化：单环 Sutherland 无法表达「环被裁剪线切成 k>1 块」，只能用一条沿边退化桥
//      把各块串成一个环——该桥与各块自身的贴边段重叠，环沿同一条线走两遍，形成零宽走廊
//      （GEOS 判 Self-intersection / Ring Self-intersection）。实测 CE 层 1311 个建筑面有 7 个
//      因此非法。现 clipRingToRectMulti 按半平面逐边裁剪 + 交点沿裁剪线排序配对 + 子链沿弦
//      链式闭合，被切开的 k 块自然得到 k 个合法环；所有调用方改为按「环数组」消费。
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
/* ===== 图层规范（由官方样式 + 瓦片实测生成，见 tdt_style_analysis.md）=====
 * geom: 瓦片中实际要素类型 1=线 2=面 4=点；z: 样式声明可见区间；cls: 该层真实携带的属性键；
 * conf: 语义置信度（低=仅配色/层级推断，建议按几何直出、不断言语义）。
 * 关键结论：A6/V1 是数据生产包码（非行政区！跨城恒定）；K0 才是真城市码；B1 是 POI 分类码；
 *           S8 按图层分表（CK 绿地 / BM 水体，数值可重叠但语义不同）；AP 是最小管理网格（非区级区划）。
 */
const LAYER_SPEC = {
  AA: { zh: "城市道路（含路名/编号/单行箭头注记载体）", geom: 1, z: [11, 19], cls: ["Z5", "J9", "X3", "D3", "JF", "QQ", "A6", "V1"], conf: "高" },
  AB: { zh: "无名支路/巷道（z17+ 补充路网）", geom: 1, z: [17, 19], cls: ["X3", "D3", "V1"], conf: "中高" },
  CC: { zh: "国道/省道（低 zoom 干线）", geom: 1, z: [5, 11], cls: ["J9", "G6", "JF", "A6"], conf: "高" },
  CE: { zh: "建筑物面（含 3D 拉伸）", geom: 2, z: [11, 19], cls: ["elemid", "h", "floor", "A6", "Z5", "I8"], conf: "高" },
  CK: { zh: "绿地/植被覆盖面", geom: 2, z: [10, 19], cls: ["S8"], conf: "高" },
  BM: { zh: "水体面（河湖渠池）", geom: 2, z: [10, 19], cls: ["S8"], conf: "高" },
  AN: { zh: "水体边线（水面轮廓）", geom: 1, z: [10, 19], cls: ["S8"], conf: "中高" },
  BK: { zh: "水系名称注记线（放水名，非水体本身）", geom: 1, z: [10, 19], cls: ["S8", "Z5"], conf: "高" },
  BV: { zh: "行政区划面（国/省/市多级混装）", geom: 2, z: [1, 19], cls: ["Z5"], conf: "高" },
  AP: { zh: "面状管理单元（网格/最小行政单元）", geom: 2, z: [12, 19], cls: ["objectid"], conf: "中" },
  BI: { zh: "POI/单位点", geom: 4, z: [10, 19], cls: ["B1", "P5", "F5", "S8", "Z5", "M2", "W2"], conf: "高" },
  AX: { zh: "POI 补充点（文教/场馆等，中 zoom）", geom: 4, z: [12, 19], cls: ["S8", "A6", "Z5"], conf: "中高" },
  AD: { zh: "地铁站/出入口点", geom: 4, z: [13, 19], cls: ["K0", "A6", "C8", "Z5", "E0", "L1", "H7"], conf: "高" },
  AM: { zh: "轨道交通线", geom: 1, z: [10, 19], cls: ["K0", "C2", "C8", "Z5"], conf: "高" },
  respt: { zh: "楼栋名点（与 CE 按 elemid 挂接）", geom: 4, z: [17, 19], cls: ["elemid", "lzh", "Z5"], conf: "高" },
  AF: { zh: "行政地名点（国家/省/市/区县）", geom: 4, z: [5, 13], cls: ["B7", "O4", "I8"], conf: "高" },
  CA: { zh: "街道/乡镇地名点", geom: 4, z: [8, 11], cls: ["Z5", "F5", "I8", "S8"], conf: "中" },
  AJ: { zh: "街道/道路名补充注记点", geom: 4, z: [13, 19], cls: ["E4", "S8", "Z5"], conf: "中低" },
  AT: { zh: "山/岛/自然地物名注记", geom: 4, z: [5, 19], cls: ["B7", "S8", "display"], conf: "中低" },
  BH: { zh: "地名注记（综合）", geom: 4, z: [5, 19], cls: ["B7", "I8", "S8"], conf: "中低" },
  BN: { zh: "河流名称沿线注记", geom: 4, z: [5, 19], cls: ["B7", "S8"], conf: "高" },
  AI: { zh: "水系名称注记（低 zoom 点状）", geom: 4, z: [6, 11], cls: ["Z5", "S8"], conf: "中" },
  BB: { zh: "地名注记（低 zoom）", geom: 4, z: [6, 10], cls: [], conf: "低" },
  BZ: { zh: "地名注记（低 zoom）", geom: 4, z: [6, 10], cls: [], conf: "低" },
  BY: { zh: "国家/地区名注记", geom: 4, z: [4, 6], cls: [], conf: "低" },
  BT: { zh: "国家/地区名注记（z3-4）", geom: 4, z: [3, 4], cls: [], conf: "低" },
  BQ: { zh: "洲/大区名注记", geom: 4, z: [4, 5], cls: [], conf: "低" },
  BL: { zh: "洲名/国家名注记（z1-10）", geom: 4, z: [1, 10], cls: [], conf: "中低" },
  BS: { zh: "外国首都注记", geom: 4, z: [5, 7], cls: [], conf: "中" },
  AY: { zh: "外国首都注记（z3-4）", geom: 4, z: [3, 4], cls: [], conf: "中" },
  AZ: { zh: "外国首都注记（z6-11）", geom: 4, z: [6, 11], cls: [], conf: "中" },
  CB: { zh: "首都注记（z4-5）", geom: 4, z: [4, 5], cls: [], conf: "中" },
  BC: { zh: "首都注记（z3-11）", geom: 4, z: [3, 11], cls: [], conf: "中" },
  CJ: { zh: "城市名注记（z4-5）", geom: 4, z: [4, 5], cls: [], conf: "低" },
  CD: { zh: "城市名注记（z5-11）", geom: 4, z: [5, 11], cls: [], conf: "低" },
  AS: { zh: "城市名注记（z7-11）", geom: 4, z: [7, 11], cls: [], conf: "低" },
  BF: { zh: "城市名注记（z5.2-10）", geom: 4, z: [5.2, 10], cls: [], conf: "低" },
  BW: { zh: "居民点注记（z6-11）", geom: 4, z: [6, 11], cls: [], conf: "低" },
  BA: { zh: "铁路线", geom: 1, z: [11, 19], cls: ["A6", "Z5"], conf: "高" },
  AG: { zh: "界线（省/地区界，灰虚线）", geom: 1, z: [4, 11], cls: ["O4", "A6"], conf: "中高" },
  AE: { zh: "国界线", geom: 1, z: [2, 11], cls: [], conf: "中高" },
  BE: { zh: "国界虚线段（z2-6）", geom: 1, z: [2, 6], cls: ["A6"], conf: "中" },
  BG: { zh: "低 zoom 背景线（z1-6）", geom: 1, z: [1, 6], cls: [], conf: "低" },
  AK: { zh: "铁路/界线低 zoom 底图线", geom: 1, z: [4, 11], cls: [], conf: "低" },
  CF: { zh: "快速路/高架（黄橙线）", geom: 1, z: [9, 11], cls: [], conf: "中低" },
  CH: { zh: "桥梁/高架面边线", geom: 1, z: [6, 11], cls: [], conf: "低" },
  AH: { zh: "低 zoom 界线补充", geom: 1, z: [4, 7], cls: [], conf: "低" },
  AC: { zh: "低 zoom 线（灰）", geom: 1, z: [4, 6], cls: [], conf: "低" },
  AU: { zh: "低 zoom 线（灰）", geom: 1, z: [2, 4], cls: [], conf: "低" },
  AV: { zh: "红色虚线要素", geom: 1, z: [2, 19], cls: [], conf: "低" },
  Q5: { zh: "低 zoom 干线（A6 过滤）", geom: 1, z: [5, 10], cls: [], conf: "低" },
  Z1: { zh: "低 zoom 线（z5-6）", geom: 1, z: [5, 6], cls: [], conf: "低" },
  Z2: { zh: "低 zoom 线（z6-10）", geom: 1, z: [6, 10], cls: [], conf: "低" },
  Z6: { zh: "低 zoom 线（z1-7）", geom: 1, z: [1, 7], cls: [], conf: "低" },
  Z7: { zh: "低 zoom 线（z9-10）", geom: 1, z: [9, 10], cls: [], conf: "低" },
  Z9: { zh: "低 zoom 线（z3-5）", geom: 1, z: [3, 5], cls: [], conf: "低" },
  t8ji: { zh: "分级底图线（z7-8）", geom: 1, z: [7, 8], cls: [], conf: "低" },
  t9ji: { zh: "分级底图线（z8-9）", geom: 1, z: [8, 9], cls: [], conf: "低" },
  huangyandao34: { zh: "黄岩岛专线（z1-5）", geom: 1, z: [1, 5], cls: [], conf: "中低" },
  AR: { zh: "低 zoom 面状水体（海/大湖/大河面）", geom: 2, z: [2, 11], cls: ["S8", "Z8"], conf: "高" },
  AW: { zh: "低 zoom 水系线（岸线/河线）", geom: 1, z: [4, 11], cls: ["S8"], conf: "高" },
  Y1: { zh: "低 zoom 面（背景）", geom: 1, z: [1, 2], cls: [], conf: "低" },
  Y2: { zh: "低 zoom 线（背景）", geom: 1, z: [1, 3], cls: [], conf: "低" },
  Y3: { zh: "低 zoom 面（S8 过滤）", geom: 2, z: [2, 4], cls: [], conf: "低" },
  Y5: { zh: "低 zoom 面（浅黄，滩涂/沙地候选）", geom: 2, z: [8, 19], cls: [], conf: "低" },
  Y6: { zh: "低 zoom 面（z7-8）", geom: 2, z: [7, 8], cls: [], conf: "低" },
  Y9: { zh: "低 zoom 面（IS 分级，已关闭）", geom: 2, z: [1, 5], cls: [], conf: "低" },
  AL: { zh: "面要素（C8=1，z17+）", geom: 2, z: [17, 19], cls: [], conf: "低" },
  TA: { zh: "天安门专指点", geom: 4, z: [10, 19], cls: [], conf: "高" },
  sea_poihy: { zh: "海域 POI 注记", geom: 4, z: [11, 19], cls: [], conf: "中" },
  zangnan: { zh: "特定区域注记层", geom: 4, z: [10, 19], cls: [], conf: "中" },
  tdt_ditie: { zh: "地铁相关面（底图专用）", geom: 2, z: [1, 19], cls: [], conf: "中低" },
  tdt_ditie_poi: { zh: "地铁 POI 注记（底图专用）", geom: 4, z: [1, 19], cls: [], conf: "中低" },
  country_3level_w_vec: { zh: "国界三级注记（z2-3）", geom: 4, z: [2, 3], cls: [], conf: "中" },
  country_5level_w_vec: { zh: "国界五级注记（z4-5）", geom: 4, z: [4, 5], cls: [], conf: "中" },
};
const ALL_LAYERS = Object.keys(LAYER_SPEC);
// 默认抓 20 层：原 12 码 + 8 个扩展层（铁路/水面轮廓/低zoom水系/地名点/河名注记/补充POI）。
// 低 zoom 层在 z15+ 自然为空，不增加请求数与耗时；其余 55 码需显式 --layers 指定。
const DEFAULT_LAYERS = [
	"BI", "BV", "CE", "CK", "BM", "BK", "AA", "AB", "AP", "AD", "AM", "respt",
	"BA", "AN", "AR", "AW", "AF", "CA", "BN", "AX",
];
const POINT_SPECIAL = new Set(["respt", "BI", "AD", "AX"]);
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
		} else if ((f.fl === 2 || f.fl === 3) && f.wt === 5) {
			// 标准 MVT：field2=float_value(fixed32)；本变体实测把 float 写在 field3/fixed32，两者都收
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

/** 去重复相邻点。 */
function dedupeRing(ring) {
	const out = [];
	for (const point of ring) {
		if (!out.length || !samePoint(out[out.length - 1], point)) out.push(point);
	}
	return out;
}

/** 开环化：摘掉重合尾点，便于按 (i+1)%n 环形遍历。 */
function openRing(ring) {
	const out = ring.slice();
	if (out.length > 1 && samePoint(out[0], out[out.length - 1])) out.pop();
	return out;
}

/** 闭合环：首尾相同，且无重复相邻点。 */
function closeRing(ring) {
	const cleaned = dedupeRing(ring);
	if (cleaned.length && !samePoint(cleaned[0], cleaned[cleaned.length - 1])) cleaned.push(cleaned[0].slice());
	return cleaned;
}

/**
 * 单条裁剪线的半平面裁剪：**返回多个环**。
 *
 * 单环 Sutherland–Hodgman 的致命缺陷：当一个环被裁剪线切成 k>1 块时它只能输出 1 个环，
 * 于是用「沿裁剪线把各块首尾串起来」的退化桥连接——这条桥与各块自身的贴边段**重叠**，
 * 环沿同一条线被走了两遍，形成零宽走廊，GEOS 判 Self-intersection / Ring Self-intersection。
 * 实测：CE 层 1311 个建筑面里有 7 个由此产生非法几何。
 *
 * 本实现分三步，是标准的「凸窗口 Weiler–Atherton」在矩形上的特化：
 *   1) 沿环遍历收集**内侧子链**（每条从入口交点到出口交点）；
 *   2) 把所有交点按「沿裁剪线的坐标」排序后**两两配对**——简单环与一条直线相交，其交点
 *      依序交替界定内/外区间，故相邻成对恰好就是内侧区间，也就是需要补上的那条弦；
 *   3) 从任一未消费的子链出发沿弦链式前进（落到某子链入口就正向走、落到出口就反向走），
 *      回到起点即闭合成环。被切开的 k 块自然得到 k 个合法环，U 形连通块也能正确串成一个环。
 *
 * @param {Array} ring 输入环（闭合或开环均可）
 * @param {number} axis 0=按 x 裁，1=按 y 裁
 * @param {number} bound 裁剪线在该轴上的坐标
 * @param {boolean} keepGreater true=保留 axis>=bound 一侧
 * @returns {Array<Array>} 闭合环数组（可能为空）
 */
function clipRingHalfPlane(ring, axis, bound, keepGreater) {
	const open = openRing(ring);
	const n = open.length;
	if (n < 3) return [];
	const inside = keepGreater ? (point) => point[axis] >= bound : (point) => point[axis] <= bound;
	// 从环外顶点起遍历：这样每条内侧子链都必然先「入口」后「出口」，收尾不会残留悬挂子链。
	let start = -1;
	for (let index = 0; index < n; index += 1) {
		if (!inside(open[index])) {
			start = index;
			break;
		}
	}
	if (start < 0) return [closeRing(open)];

	const subpaths = [];
	const crossings = [];
	const pushCrossing = (point, subpathIndex, end) => {
		crossings.push({ point, along: point[1 - axis], subpathIndex, end });
		return crossings.length - 1;
	};
	let run = null;
	let runEntry = -1;
	for (let step = 0; step < n; step += 1) {
		const a = open[(start + step) % n];
		const b = open[(start + step + 1) % n];
		const insideA = inside(a);
		const insideB = inside(b);
		if (insideA && insideB) {
			if (!run) {
				run = [a.slice()];
				runEntry = -1;
			}
			run.push(b.slice());
			continue;
		}
		if (!insideA && !insideB) continue;
		const denominator = b[axis] - a[axis];
		if (Math.abs(denominator) <= GEOM_EPS) continue;
		const t = (bound - a[axis]) / denominator;
		const cross = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
		if (insideB) {
			run = [cross, b.slice()];
			runEntry = pushCrossing(cross, subpaths.length, 'entry');
		} else {
			if (!run) {
				run = [a.slice()];
				runEntry = pushCrossing(a, subpaths.length, 'entry');
			}
			run.push(cross);
			const exitKey = pushCrossing(cross, subpaths.length, 'exit');
			subpaths.push({ points: run, entryKey: runEntry, exitKey });
			run = null;
			runEntry = -1;
		}
	}
	if (run) {
		const exitKey = pushCrossing(run[0], subpaths.length, 'exit');
		subpaths.push({ points: run, entryKey: runEntry, exitKey });
	}
	if (!subpaths.length) return [];

	// 交点按沿裁剪线坐标排序 → 相邻两两配对即「内侧区间」。
	const order = crossings.map((_, index) => index)
		.sort((i, j) => crossings[i].along - crossings[j].along || i - j);
	const partner = new Array(crossings.length).fill(-1);
	for (let index = 0; index + 1 < order.length; index += 2) {
		partner[order[index]] = order[index + 1];
		partner[order[index + 1]] = order[index];
	}

	const rings = [];
	const used = new Array(subpaths.length).fill(false);
	for (let seed = 0; seed < subpaths.length; seed += 1) {
		if (used[seed]) continue;
		const startKey = subpaths[seed].entryKey;
		const points = [];
		let cursor = seed;
		let forward = true;
		for (let guard = 0; guard <= subpaths.length; guard += 1) {
			used[cursor] = true;
			const source = subpaths[cursor].points;
			const sequence = forward ? source : source.slice().reverse();
			for (let index = points.length ? 1 : 0; index < sequence.length; index += 1) {
				points.push(sequence[index].slice());
			}
			const endKey = forward ? subpaths[cursor].exitKey : subpaths[cursor].entryKey;
			const next = partner[endKey];
			if (next < 0) break;
			points.push(crossings[next].point.slice());
			if (next === startKey) break;
			cursor = crossings[next].subpathIndex;
			forward = crossings[next].end === 'entry';
		}
		const closed = closeRing(points);
		if (closed.length >= 4) rings.push(closed);
	}
	return rings;
}

/**
 * 面裁剪到任意矩形：**返回多个环**（替代旧单环 Sutherland–Hodgman）。
 * 4 条边依次做半平面裁剪，每一条边都可能把 1 个环拆成多个。
 */
function clipRingToRectMulti(ring, x0, y0, x1, y1) {
	let rings = [closeRing(ring)];
	const planes = [[0, x0, true], [0, x1, false], [1, y0, true], [1, y1, false]];
	for (const [axis, bound, keepGreater] of planes) {
		const next = [];
		for (const current of rings) {
			if (current.length < 3) continue;
			for (const out of clipRingHalfPlane(current, axis, bound, keepGreater)) next.push(out);
		}
		rings = next;
		if (!rings.length) return [];
	}
	return rings.filter((current) => current.length >= 4);
}

/** 面裁剪到任意矩形（返回多个环）。clipRingToTile 为其 [0,4096] 特例。 */
function clipRingToRect(ring, x0, y0, x1, y1) {
	return clipRingToRectMulti(ring, x0, y0, x1, y1);
}

/** 面裁剪到瓦片核心（去 buffer；返回多个环）。 */
function clipRingToTile(ring) {
	return clipRingToRectMulti(ring, 0, 0, EXT, EXT);
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
			// 核心裁剪可能把 1 个环拆成多个（贴瓦片边被切开），逐个收编为独立片段。
			for (const clipped of clipRingToTile(closed)) {
				if (clipped.length < 4) continue;
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

function distToRings(ring, pt) {
	let d = Infinity;
	for (let i = 0; i + 1 < ring.length; i++) d = Math.min(d, distSeg(pt, ring[i], ring[i + 1]));
	return d;
}

/** 点是否在环组内（含贴边）：洞内不算，边界接触算在内。 */
function insideOrOnRings(polyRings, pt) {
	if (!pointInRing(polyRings[0], pt) && distToRings(polyRings[0], pt) >= 1e-9) return false;
	for (let k = 1; k < polyRings.length; k++) {
		if (pointInRing(polyRings[k], pt) && distToRings(polyRings[k], pt) >= 1e-9) return false;
	}
	return true;
}

/** src 环组是否整体落在 dst 环组内（允许贴边）：用于区分“父子嵌套”与“真·残余重叠”。 */
function allInsideOrOnRings(srcRings, dstRings) {
	for (const r of srcRings) for (const pt of r) if (!insideOrOnRings(dstRings, pt)) return false;
	return true;
}

/**
 * 残余重叠审计：严格在内（排除边界接触）＋洞感知；只打标不改几何。返回被标要素下标集。
 * opt.allowContainment=true 时跳过“纯包含”对（一方整体落在另一方内）：分层数据（如 AP
 * 区级行政区划面里大区含小区/乡级残留）属正常层级关系，不是残余重叠；
 * 只有“部分重叠”（互相切进去又出来）才打标。CE 等平面铺满层保持原严格语义。
 */
function auditResidualOverlap(features, opt = {}) {
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
			if (hit) {
				// 纯包含=父子嵌套（分层数据里大区含小区属正常层级），非残余重叠，跳过
				if (opt.allowContainment && (allInsideOrOnRings(A.rings, B.rings) || allInsideOrOnRings(B.rings, A.rings))) continue;
				flag.add(A.idx); flag.add(B.idx);
			}
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

/* ================= 字段字典（输出属性含义；单文件自包含） ================= */
/** key -> { zh 中文名, type 类型, use 含义, note 注意 } —— 供 --zh-keys 与 field_dictionary.json 使用 */
const FIELD_DICT = {
	Z5: { zh: "名称", type: "string", use: "道路名/楼名/ POI名/行政区名/水名/站名", note: "BI 用 “|” 分行；respt/CE 的楼栋名也在此" },
	B7: { zh: "地名", type: "string", use: "注记类文字：行政地名、河流名、山名、国名", note: "注记层用 B7，POI 层用 Z5" },
	J9: { zh: "道路编号", type: "string", use: "G104/S103/G311 等公路编号", note: "G=国道 S=省道；与 Z5 路名可互校" },
	G6: { zh: "要素全名", type: "string", use: "低 zoom 干线全名（京台线/南三环）、海域要素名", note: "CC/sea_poihy 专用" },
	A6: { zh: "数据包码", type: "string", use: "数据生产批次码，形似行政区码但与地理位置无关", note: "切勿当行政区！北京道路=440300/440100；全国建筑恒 3103xx；AD 例外（450101站/450190口）" },
	V1: { zh: "数据包码2", type: "string", use: "道路数据包码，多与 A6 相同", note: "同 A6，不可当选址依据" },
	K0: { zh: "城市码", type: "string", use: "真正的行政区代码（410100=郑州）", note: "仅地铁层 AD/AM 携带；需要城市归属时用它" },
	X3: { zh: "道路类型码", type: "string", use: "00~07 / 0a / 0b / 12 / 14~17，用于分级设线宽", note: "字符串比较；0a/0b 是十六进制式两位码" },
	D3: { zh: "道路等级", type: "string", use: "1~5，1 最高", note: "与 X3 组合判断等级" },
	JF: { zh: "道路标记", type: "string", use: "0/1/2/3/4，样式里按它分色/分宽", note: "实测是字符串 \"0\"/\"4\"" },
	QQ: { zh: "道路标记2", type: "string", use: "1/2/3，z16+ 两个通用层按它开关", note: "含义未定，勿当车道数" },
	JP: { zh: "标记", type: "string", use: "CC 层布尔样式标记（true/false）", note: "含义未定" },
	S8: { zh: "子类码", type: "string", use: "按图层各自分表的要素类/符号编码", note: "CK 绿地 / BM 水体 / BI-POI 各一套，数值可重叠但语义不同，跨层不可比" },
	B1: { zh: "POI分类码", type: "string", use: "6 位 POI 分类，前 2 位为大类（17医院/15金融/19政府…）", note: "来自官方样式 icon 分支反推，非全表" },
	P5: { zh: "POI子类码", type: "string", use: "银行品牌等子类码（130001=工行）", note: "需与 B1=150101 联用" },
	F5: { zh: "POI编号", type: "string", use: "POI/地名点稳定 ID（10 位）", note: "跨瓦去重键" },
	M2: { zh: "大类码", type: "string", use: "BI 的 POI 大类码（160201/170101 等）", note: "与 B1 并存，含义相近，优先用 B1" },
	W2: { zh: "备用字段", type: "string", use: "BI 备用文本（实测多为空串）", note: "空串≠缺失，是源数据显式空值" },
	elemid: { zh: "要素ID", type: "string", use: "建筑物稳定 ID（14 位数字或含字母方案）", note: "CE/respt 靠它挂接；跨瓦会重复，需 Union" },
	objectid: { zh: "对象ID", type: "sint64", use: "AP 街区/地块单元 ID（数值）", note: "单瓦唯一；跨瓦重复属接缝" },
	h: { zh: "高度", type: "number", use: "建筑高度，单位米", note: "0=无高度/平房；3D 拉伸直接乘此值" },
	floor: { zh: "楼层", type: "string", use: "楼层数（字符串）", note: "恒等于 h/3" },
	I8: { zh: "类型码", type: "string", use: "各层分级/类型序号（如 CE 的“无底座”）", note: "语义按图层不同" },
	O4: { zh: "地名等级", type: "string", use: "1首都 / 2市 / 4区县；\" \"=空", note: "AF 的 O4 可直接映射行政级别" },
	C8: { zh: "标记", type: "string", use: "地铁/构筑物标记（实测恒 1）", note: "含义未定" },
	L1: { zh: "线路号", type: "string", use: "地铁线路号", note: "与 AM.C2 对应" },
	H7: { zh: "出入口号", type: "string", use: "地铁出入口字母 A/B/C/D…", note: "与 L1+A6 组成出入口唯一键" },
	C2: { zh: "线路号2", type: "string", use: "AM 的线路编号（01=1号线）", note: "—" },
	E0: { zh: "标记2", type: "string", use: "AD 的状态标记（实测 0）", note: "含义未定" },
	E4: { zh: "标记3", type: "string", use: "AJ 的样式/分级码", note: "含义未定" },
	Z8: { zh: "标记4", type: "string", use: "AR 的低 zoom 水体标记（实测空串）", note: "—" },
	U0: { zh: "标记5", type: "string", use: "首都类注记的分级码", note: "含义未定" },
	R7: { zh: "排序", type: "string", use: "注记避让/优先级排序码", note: "样式用于 symbol 排序" },
	Y4: { zh: "标记6", type: "string", use: "CD 城市名注记的分级码", note: "含义未定" },
	N3: { zh: "标记7", type: "string", use: "AC 低 zoom 线标记", note: "含义未定" },
	A0: { zh: "标记8", type: "string", use: "AU 低 zoom 线标记", note: "含义未定" },
	lzh: { zh: "楼号", type: "string", use: "楼栋号（全角数字，“4栋”）", note: "respt 专用" },
	display: { zh: "显示开关", type: "string", use: "注记显示控制字段", note: "—" },
	height_m: { zh: "高度_米", type: "number", use: "派生：由 h 转来，单位米", note: "与 h 同值；h=0 时不输出" },
	floors: { zh: "楼层数", type: "number", use: "派生：由 floor 转数值", note: "≡ height_m/3" },
	name: { zh: "名称", type: "string", use: "派生：CE 取 Z5，缺失时由 respt 按 elemid 补", note: "与 Z5 同源" },
	_tile: { zh: "来源瓦片", type: "string", use: "z_x_y，要素来自哪块瓦", note: "融合要素取首个片" },
	_seam_merged: { zh: "接缝已合并", type: "number", use: "1=跨瓦同 id 做过 Union", note: "—" },
	_fused_from: { zh: "融合片数", type: "number", use: "CK/BM 按 S8 融合了几个环片", note: ">1 表示由多片并成" },
	_topo_review: { zh: "拓扑待核", type: "number", use: "1=存在残余重叠/包含，几何未改", note: "人工复核标记" },
	_geom_partial: { zh: "几何截断", type: "number", use: "1=源几何不完整（缺闭合环/命令流中断）", note: "不是解析失败，是源瓦片截断" },
	_poi_group: { zh: "POI大类", type: "string", use: "派生：B1 前两位映射的大类（政府机构/金融…）", note: "粗分，细类看 B1/P5" },
};

/** --zh-keys 输出用：ASCII 键 -> 中文键（未收录的键原样保留） */
function zhKey(k) {
	const d = FIELD_DICT[k];
	return d && d.zh ? d.zh : k;
}

/* ================= 通用兜底导出（未专门处理的已识别图层） ================= */
/** POI 大类：由官方样式 74 个 icon-image 反推（B1 前两位），仅作粗分，细类看 B1/P5 原值 */
const POI_GROUP = {
	"12": "住宿餐饮", "13": "购物/生活服务", "15": "金融", "16": "教育文化",
	"17": "医疗", "18": "休闲娱乐", "19": "政府机构", "20": "商业楼宇",
	"21": "公共设施", "23": "交通", "26": "自然地理",
};
function poiGroup(b1) {
	if (typeof b1 !== "string" || b1.length < 2) return null;
	return POI_GROUP[b1.slice(0, 2)] || null;
}

/**
 * 兜底导出：不做跨瓦融合、不做语义推断，只保证「数据不静默丢失」。
 * 面：裁到核心瓦 → 同要素多环嵌套为 Polygon/MultiPolygon → 完全一致去重；
 * 线：逐段裁剪 → 完全一致去重；点：全留 → 坐标+属性去重。
 * 所有输出带 _tile；几何被截断的带 _geom_partial；无法判定的置信度层仅按几何直出。
 */
function exportFallback(name, feats, st) {
	const spec = LAYER_SPEC[name] || {};
	const want = spec.geom; // 1|2|4；undefined 时按要素自身类型
	const out = [];
	const seen = new Set();
	const tag = (props, z, tx, ty) => ({ ...props, _tile: `${z}_${tx}_${ty}` });
	for (const f of feats) {
		const type = f.type;
		if (want && type !== want) continue;
		const z = f.zoom, tx = f.tx, ty = f.ty;
		if (type === 4) {
			const pts = [];
			for (const p of f.paths) for (const [px, py] of p.points) pts.push(pointToLngLat(px, py, tx, ty, z));
			if (!pts.length) continue;
			const key = "p:" + pts.map((q) => q.map(round7).join(",")).join(";") + "|" + stableProps(f.props);
			if (seen.has(key)) { st.dedup = (st.dedup || 0) + 1; continue; }
			seen.add(key);
			const props = tag(f.props, z, tx, ty);
			if (f.partial) props._geom_partial = 1;
			out.push({
				type: "Feature", properties: props,
				geometry: pts.length > 1 ? { type: "MultiPoint", coordinates: pts } : { type: "Point", coordinates: pts[0] },
			});
			continue;
		}
		if (type === 1) {
			for (const p of f.paths) {
				for (const piece of clipPolylineToTile(p.points)) {
					const ll = piece.map(([px, py]) => pointToLngLat(px, py, tx, ty, z));
					const key = "l:" + ll.map((q) => q.map(round7).join(",")).join(";") + "|" + stableProps(f.props);
					if (seen.has(key)) { st.dedup = (st.dedup || 0) + 1; continue; }
					seen.add(key);
					const props = tag(f.props, z, tx, ty);
					if (f.partial) props._geom_partial = 1;
					out.push({ type: "Feature", properties: props, geometry: { type: "LineString", coordinates: ll } });
				}
			}
			continue;
		}
		if (type === 2) {
			const rings = [];
			for (const p of f.paths) {
				if (p.points.length < 3) continue;
				const ring = p.points.slice();
				if (!samePoint(ring[0], ring[ring.length - 1])) ring.push(ring[0]);
				for (const c of clipRingToTile(ring)) {
					if (c.length >= 4) rings.push(c.map(([px, py]) => pointToLngLat(px, py, tx, ty, z)));
				}
			}
			if (!rings.length) { st.clipped = (st.clipped || 0) + 1; continue; }
			const key = "a:" + rings.map((r) => r.map((q) => q.map(round7).join(",")).join(";")).join("|") + "=" + stableProps(f.props);
			if (seen.has(key)) { st.dedup = (st.dedup || 0) + 1; continue; }
			seen.add(key);
			const nested = nestRings(rings);
			const props = tag(f.props, z, tx, ty);
			if (f.partial) props._geom_partial = 1;
			out.push({
				type: "Feature", properties: props,
				geometry: nested.length > 1 ? { type: "MultiPolygon", coordinates: nested } : { type: "Polygon", coordinates: nested[0] },
			});
		}
	}
	return out;
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
	let layers = DEFAULT_LAYERS.slice();
	if (args.layers) {
		const raw = String(args.layers).toLowerCase();
		if (raw === "all") layers = ALL_LAYERS.slice();
		else {
			layers = String(args.layers).split(",").map((s) => s.trim()).filter(Boolean);
			// 图层码大小写混排（AA/AA、respt、t8ji、country_5level_w_vec），按 key 原样匹配，不做强制大写
			const byLower = new Map(ALL_LAYERS.map((k) => [k.toLowerCase(), k]));
			const picked = [];
			for (const l of layers) {
				const hit = ALL_LAYERS.includes(l) ? l : byLower.get(l.toLowerCase());
				if (!hit) { console.error(`未知图层 ${l}，可用：${ALL_LAYERS.join(",")} / all`); process.exit(2); }
				picked.push(hit);
			}
			layers = picked;
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
	const zhKeys = Boolean(args["zh-keys"]);
	const writeFC = (name, features) => {
		const fsOut = zhKeys
			? features.map((ft) => {
				const props = {};
				for (const [k, v] of Object.entries(ft.properties || {})) props[zhKey(k)] = v;
				return { ...ft, properties: props };
			})
			: features;
		fs.writeFileSync(path.join(outdir, `${name}.geojson`), JSON.stringify({
			type: "FeatureCollection",
			crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
			features: fsOut,
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
					for (const c of clipRingToRect(ring, -82, -82, 4178, 4178)) {
						if (c.length >= 4) rings.push(c);
					}
				}
				if (!rings.length) continue;
				recs.push({
					id: f.props.elemid,
					rings, tx: f.tx, ty: f.ty, zoom: f.zoom,
					extra: {
						raw: { ...f.props },
						h: typeof f.props.h === "number" ? f.props.h : null,
						floors: f.props.floor ?? null,
						A6: f.props.A6 ?? null,
						// 官方实测：约一半建筑自带 Z5 楼名（如"和平新村２栋"），优先于 respt 挂接
						name: typeof f.props.Z5 === "string" && f.props.Z5.trim() ? f.props.Z5.trim() : null,
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
					for (const [k, v] of Object.entries(src.raw || {})) if (dst.raw && dst.raw[k] == null) dst.raw[k] = v;
					if (dst.h == null && src.h != null) dst.h = src.h;
					if (dst.floors == null && src.floors != null) dst.floors = src.floors;
					if (dst.A6 == null && src.A6 != null) dst.A6 = src.A6;
					if (!dst.name && src.name) dst.name = src.name;
				},
				props: (ex) => {
					// 原始键全部保留（elemid/A6/h/floor/Z5/I8…）+ 追加语义化派生键
					const p = { ...(ex.raw || {}) };
					if (ex.h != null && ex.h > 0) p.height_m = ex.h;
					if (ex.floors != null) p.floors = Number(ex.floors);
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
					for (const c of clipRingToRect(ring, -82, -82, 4178, 4178)) {
						if (c.length >= 4) rings.push(c);
					}
				}
				if (!rings.length) continue;
				recs.push({ id: String(id), rings, tx: f.tx, ty: f.ty, zoom: f.zoom, extra: { raw: { ...f.props } }, partial: !!f.partial });
			}
			const { features, unionCount, fallbackCount } = mergeIdPolygons(recs, {
				idProp: "objectid",
				props: (ex) => ({ ...(ex.raw || {}) }),
			});
			for (const ft of features) ft.properties.objectid = Number(ft.properties.objectid);
			st.union = unionCount;
			if (fallbackCount) st.union_fallback = fallbackCount;
			out = features;
		} else if (POINT_SPECIAL.has(name)) {
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
				// B1 是 POI 分类码（6 位），前 2 位为大类；S8 不是类别，勿混用
				if (name === "BI" || name === "AX") {
					const g = poiGroup(f.props.B1);
					if (g) props._poi_group = g;
				}
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
					const clippedRings = clipRingToTile(ring);
					if (!clippedRings.length) { st.clipped = (st.clipped || 0) + 1; continue; }
					for (const c of clippedRings) {
						byS8.get(s8).push({ ring: c, tx: f.tx, ty: f.ty, zoom: f.zoom, partial: !!f.partial, s8v: f.props.S8 ?? null, props: { ...f.props } });
					}
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
					// 属性取各片并集（同名取首个非空），不再只留 S8
					const props = {};
					for (const mb of members) for (const [k, v] of Object.entries(mb.props || {})) if (props[k] == null) props[k] = v;
					if (props.S8 == null && members[0].s8v != null) props.S8 = members[0].s8v;
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
		} else {
			// 已识别但未专门处理的图层（BA铁路/AR水体面/AF地名点/CA街道…）：按几何保守直出
			out = exportFallback(name, feats, st);
		}
		// 残余重叠只打标不改几何（BV原样直出，不参与审计）
		// AP=街区/地块单元（非区级区划）：纯包含仍属正常（被更粗行政面包含），只报部分重叠
		if (name === "CE" || name === "AP" || name === "CK" || name === "BM") {
			const flagged = auditResidualOverlap(out, { allowContainment: name === "AP" });
			for (const idx of flagged) out[idx].properties._topo_review = 1;
			if (flagged.size) st.topo_review = flagged.size;
		}
		st.out = out.length;
		stats[name] = st;
		if (out.length) writeFC(name, out);
	}
	fs.writeFileSync(path.join(outdir, "field_dictionary.json"), JSON.stringify({
		note: "本目录 GeoJSON 的字段含义（--zh-keys 时输出中文键，此表仍按 ASCII 键给出对照）",
		fields: FIELD_DICT,
	}, null, 1));
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
	ok("buffer环裁剪保留", cc.length === 1 && cc[0].length >= 4
		&& cc[0].every(([x, y]) => x >= 0 && x <= 4096 && y >= 0 && y <= 4096));
	// 5b) 多环化：被瓦片边切成 2 块的环必须输出 2 个合法环（旧单环 S-H 会输出 1 个自相交环）
	const segCross = (a, b, c, d) => {
		const d1 = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
		const d2 = (b[0] - a[0]) * (d[1] - a[1]) - (b[1] - a[1]) * (d[0] - a[0]);
		const d3 = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]);
		const d4 = (d[0] - c[0]) * (b[1] - c[1]) - (d[1] - c[1]) * (b[0] - c[0]);
		return (d1 > 0) !== (d2 > 0) && (d3 > 0) !== (d4 > 0);
	};
	const ringSimple = (ring) => {
		const m = ring.length - 1;
		for (let i = 0; i < m; i += 1) {
			for (let j = i + 2; j < m; j += 1) {
				if (i === 0 && j === m - 1) continue;
				if (segCross(ring[i], ring[i + 1], ring[j], ring[j + 1])) return false;
			}
		}
		return true;
	};
	// 真实 z16 瓦片 54883/26774 上 elemid=31000001382289 的原始环（贴着瓦片上边 y=0 上下穿插）
	const d2 = [[2018, -82], [2143, -65], [2144, -65], [2138, 13], [2137, 13], [2113, 10],
		[2113, 9], [2116, -16], [2074, -21], [2071, 3], [2071, 4], [2025, -2], [2025, -3],
		[2028, -28], [1986, -33], [1983, -8], [1983, -7], [1960, -10], [1959, -10], [1966, -82], [2018, -82]];
	const d2c = clipRingToTile(d2);
	ok("D2贴边环拆成2个环", d2c.length === 2, `rings=${d2c.length}`);
	ok("D2每环自不相交", d2c.every((r) => ringSimple(r)));
	ok("D2各环闭合且无重复相邻点", d2c.every((r) => r.length >= 4 && samePoint(r[0], r[r.length - 1])
		&& r.every((p, i) => i === 0 || !samePoint(r[i - 1], p))));
	ok("D2裁剪结果全在瓦片核心内", d2c.every((r) => r.every(([x, y]) => x >= 0 && x <= 4096 && y >= 0 && y <= 4096)));
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
	unionRings, clipRingToTile, clipRingToRect, clipRingToRectMulti, clipPolylineToTile,
	globalRing, globalTileToLngLat, pointToLngLat, nestRings, ringsArea,
};
