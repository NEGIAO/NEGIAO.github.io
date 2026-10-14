// 腾讯矢量瓦片全量提取（单文件独立: 范围 -> 瓦片 -> 全量解析 -> 通用拓扑 -> GeoJSON）
// 与天地图/高德全量程序同构 CLI 与输出结构, 仅解码链不同。
//
// 用法：
//   node tencent_vector_fetch.mjs --bbox 121.4730,31.2305,121.4760,31.2325 --zoom 16 --layers all --outdir ./out
//   node tencent_vector_fetch.mjs --center 121.4997,31.2397 --delta 0.004 --zoom 16 --layers area_building,road_mainroad --outdir ./out
//   node tencent_vector_fetch.mjs --selftest
//
// 参数：
//   --bbox 四至（与 --center 二选一；均为WGS-84，内部转GCJ-02算瓦片，输出统一回WGS-84）
//   --zoom 瓦片级别（14~18已验证；允许其它整数但会警告）
//   --layers all（默认）或逗号分隔图层组名（见下"图层组"）
//   --outdir 输出目录（每组一个 <组名>.geojson + merge_stats.json + run_info.json）
//   --delay 批间隔毫秒（默认400，禁调小） --max-tiles 上限（默认100，超限拒绝请缩小范围）
//
// 图层组（gljs bundle 分类表 + ID 频段，共 5 频段）：
//   road_*   131072-196607 道路线层（13类: ferry/guojie/highway/mainroad/motorway/path/pfurniture/
//            railway/secondaryroad/shengjie/street/subwayline/water）
//   area_*   196608-262143 面要素层（14类: airportsarea/building/commercial/grass/hospital/land/
//            otherarea/park/parkinglots/resident/school/sportsfield/subwayarea/water；building 含 196619 楼块）
//   poi_*    65536-131071  POI 点层（33类: aoi/autoservice/bridge/building/business/carpark/city/...）
//   label_*  262144-327679 文字注记层（40类: mainroad/secondaryroad/street/...，逐字记录）
//   arrow    327680-393215 道路箭头层
//   raw_<id> 未进分类表的层（按 ID 单列，低置信，如 327701/196965）
//
// 通用拓扑规则（腾讯特性：服务端不裁剪瓦片，且对跨瓦同一要素按瓦抽稀，与天地图"逐瓦裁剪+接缝Union"完全不同）：
//   1) 不裁剪：瓦片内局部坐标 + 瓦片原点 = 全局像素，越界点（buffer）原样保留（实测 27% 点越界）。
//   2) 跨瓦精确去重：全局像素为整数，完全一致去重（几何整数坐标 + 稳定属性），无舍入误差。
//   3) 跨瓦近重复面融合：同一要素在相邻瓦被抽稀成不同形状（同一公园 7 点 / 4 点两种），
//      精确去重抓不到 → 输出里互相重叠。按 layer_id 分组 + 真重叠连通（并查集）→ Union →
//      面积守恒回退 → 洞嵌套，标 _seam_merged / _fused_from。**建筑除外**（相邻楼共享墙，
//      Union 会把整排楼粘成一块）；异 style 只认近乎整体包含（腾讯按瓦给不同外观配置码）。
//   4) 面层多 part：按面积降序 + 包含关系嵌洞（不依赖绕向），只嵌套不改几何。
//   5) 线层闭合几何（首尾差≤1px 且 ≥4 点）转 Polygon（环岛等），否则 LineString；多 part 转 Multi*。
//      线层不做 Union：实测跨瓦几乎无重复（road_street 378 条仅 4 对，且都是 2 点短段），
//      路口盲合会误接。
//   6) 残余重叠审计：严格互含（洞感知 + 边界接触排除）打标 _topo_review=1，只打标不改几何。
//   7) 建筑层 196619：f[2] 为楼高（米，已对官方预览验证），保留 height_m/name/style。
//   8) POI：f[2] 名、f[4] style、f[5] anchors 图集矩形；同名不同点不合并（渲染器按名去重是它的事）。
//   9) 注记：逐字 Point（char/font/style/anchors），全局像素 + 字形去重。
//  10) 无稳定 ID 不做跨类 Union（异 layer_id 只审计不合，如 area_parkinglots 196629 vs 196787）。
//
// 解析真结构（gljs bundle 55722 模块原样移植）：
//   响应 {datas:[{data: 自定义base64}]}；txDecode: stripPad(至多2个'=') -> 自定义b64
//   -> 双字节 rotate+xor 链(3轮) -> UTF-8 -> 以最后一个 } 截断 -> JSON{ret,features,img}；
//   feature 分发：f[0] 为数组 => 注记（逐字记录 [id,[x,y],char,font,style,anchors?]）；
//   否则扁平记录 [id, geom, ...]，频段定类型：point=直接[x,y]，line/region/arrow=deltaDecode
//   （首点绝对、其余差分，整数像素），geom[0] 为数组 = 多 part；
//   TMS y = 2^z-1-xyz_y；瓦片按 GCJ-02 编号，输出 GCJ-02 -> WGS-84。
import fs from "fs";
import path from "path";

const VERSION = 2271; // https://confinfo.map.qq.com/confinfo 当前 version, 变了改这里
const BUILDING_ID = 196619; // gljs bundle et, 楼块图层 id
const TILE_SIZE = 256;
const ALPH =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

// ---------- 频段表（gljs bundle tt 表原值） ----------
const BANDS = [
	[65536, 131071, "point"],
	[131072, 196607, "line"],
	[196608, 262143, "region"],
	[262144, 327679, "label"],
	[327680, 393215, "arrow"],
];
function bandOf(id) {
	for (const [lo, hi, t] of BANDS) if (id >= lo && id <= hi) return t;
	return null;
}

// ---------- 分类表（gljs bundle regionTag/labelTag/roadTag/poiTag 压缩为区段串） ----------
const CATALOG = {
	poi: {
		aoi: "65546,65550,65554,65686-65688,65755-65757,66202,66618",
		autoservice: "65606,66173-66177",
		bridge: "65547,66612-66617",
		building:
			"65568,65574,65577,65587,65592,65594,65600,65602-65604,65608,65619-65630,65632,65703,66092,66096,66098-66103,66105-66116,66120,66132-66142,66178-66181,66183-66184,66186-66187,66189-66194,66224,66414-66435,66634,66684-66686,66850",
		business: "65578,65618,66582",
		carpark: "65607,66526-66527",
		city: "65543,65555,65557-65559,65693",
		commercial: "65758",
		continent: "65537",
		country: "65541,65556",
		district: "65542",
		education: "65562,65571,65583-65584,65701-65702,65741-65742,66227,66849",
		entertainment: "65569,65593,65613,65743,66199-66200,66226",
		government: "65579",
		hospital: "65581,65598,65705,66852",
		hotel: "65582,65733-65735,66123-66128,66163-66172,66188,66222,66490,66541",
		island: "65539",
		lifeservice: "65586,65596-65597,65599,65617,65738-65740,66118-66119,66129,66182,66185,66221",
		ocean: "65538,65540,65549",
		other: "65553,65616,65631,65700,65706-65709,66196,66564-66565,66577",
		province: "66572",
		restrant: "65591,65595,65601,65704,65729-65732,66223,66851",
		scenic: "65552,65563-65567,65573,65585,65744,66198,66201,66491-66525,66528-66540,66542-66563",
		shopping: "65588-65589,65736-65737,66619",
		subwaygate:
			"65745,65836-65864,65894,66080,66086,66160,66233,66398,66402,66413,66590,66594,66600,66610,66679,66682,66775,66844",
		subwayline:
			"65936-65976,65978-66076,66081-66082,66087-66091,66097,66104,66117,66130-66131,66143-66156,66161-66162,66195,66203,66206-66220,66228-66229,66234,66377-66378,66380,66382,66385,66387,66389-66392,66403-66406,66409,66486-66487,66566,66568-66569,66573-66574,66579,66581,66583-66586,66595-66596,66601-66606,66611,66638-66676,66683,66687-66688,66834-66838,66840-66841,66845,66848,66912",
		subwaystation:
			"65635,65637,65639,65641,65643,65645,65647,65649,65651,65653-65655,65657,65659,65661,65663,65665,65667,65669,65673,65675,65677,65681,65683-65684,65689,65691,65694,65696,65698,65710,66077,66083,66157,66204-66205,66230,66235-66340,66342-66376,66379,66381,66383-66384,66386,66388,66393-66395,66399,66407-66408,66410-66411,66488-66489,66567,66570-66571,66575-66576,66580,66587-66588,66591-66592,66597-66598,66607-66608,66677-66678,66680-66681,66773-66774,66842-66843",
		town: "65544",
		transport: "65560,65570,65572,65576,65605,65609-65611,65614-65615,66093-66095,66121-66122,66225",
		village: "65545,65551,65580,66578",
	},
	road: {
		ferry: "131115",
		guojie: "131073-131075",
		highway: "131082,131088,131090,131335,131337,131396,131406",
		mainroad: "131084-131085,131105-131112,131333-131334,131342,131344,131398-131399,131408-131409",
		motorway: "131083,131089,131091,131329,131338,131397,131407",
		path: "131336,131405,131453-131457,131483-131484,131506",
		pfurniture: "131352-131355,131511-131512",
		railway: "131086-131087,131489",
		secondaryroad: "131097-131104,131208,131331-131332,131340-131341,131400-131401,131410-131411,131507",
		shengjie: "131078-131080,131486",
		street: "131092-131096,131330,131339,131345,131412,131505",
		subwayline:
			"131117-131207,131209-131327,131346-131351,131356-131371,131384-131395,131402-131404,131413-131417,131437-131452,131458-131482,131487-131488,131491-131504,131508-131510,131513-131552,131554-131558,131560-131563",
		water: "131081",
	},
	area: {
		airportsarea: "196832",
		building: "196619,197120-197123",
		commercial: "196890",
		grass: "196614-196616,196833",
		hospital: "196774",
		land: "196609,196612-196613,196617",
		otherarea: "196775,196831,196856-196869,196877,196894-196895,196934",
		park: "196622",
		parkinglots: "196629,196787",
		resident: "196621,196627,196630,196632",
		school: "196773",
		sportsfield: "196626,196789-196796,196798",
		subwayarea:
			"196634-196750,196753-196772,196776-196786,196799-196803,196815-196830,196834-196855,196870-196872,196874-196876,196878-196889,196891-196893,196896-196933,196935-196936,196938-196942,196944-196947",
		water: "196610-196611,196618",
	},
	label: {
		aoi: "262149-262150,262153,262404-262406,262482-262484,262952",
		autoservice: "262864",
		bridge: "262154,262946-262950,262953",
		building: "262145,262409,262487,262494,262506,262708,262713,262954",
		business: "262493,262515",
		city: "262157-262160",
		commercial: "262942",
		continent: "262395,262426",
		country: "262402,262865",
		district: "262155",
		education: "262453,262488",
		entertainment: "262486",
		ferry: "262162,262801",
		government: "262869",
		highway: "262166,262418,262425,262792,262799,262812-262813",
		highwaynum: "262164-262165,262169-262170,262783-262784",
		hospital: "262407",
		hotel: "262452",
		island: "262146",
		lifeservice: "262866-262868",
		mainroad: "262178-262179,262185-262186,262415-262416,262419-262420,262790-262791,262797-262798,262802-262803,262810-262811",
		motorway: "262173,262417,262424,262793,262800",
		nationalnum: "262163,262168,262785",
		ocean: "262147,262396,262707",
		other: "262151,262496-262505,262507-262512,262514",
		path: "262903",
		province: "262533",
		railway: "262908,263057",
		restrant: "262450,262495",
		roadnum: "262167,262176,262786",
		scenic: "262288,262489,262870,262941",
		secondaryroad:
			"262180-262181,262187-262188,262413-262414,262421-262422,262788-262789,262795-262796,262804-262805,262808-262809",
		shopping: "262451,262945",
		street: "262182-262183,262189,262412,262423,262787,262794,262806-262807",
		subwaygate:
			"262454-262481,262485,262492,262691,262696,262750,262818,262841-262842,262853,262921-262922,262927,262940,263016",
		subwayline:
			"262544-262561,262564-262682,262684,262686,262688,262690,262693,262695,262698,262700,262702,262704,262706,262710,262712,262715,262717,262719,262721,262723,262725,262727,262729,262731,262733,262735,262737,262739,262741,262743,262745,262747,262749,262752,262762,262767-262782,262815,262817,262820,262822,262824,262826,262828,262830,262832,262834,262836,262838,262840,262844,262846,262848,262850,262852,262855,262857,262859,262861,262863,262905,262907,262909-262910,262912,262914,262916,262918,262920,262924,262926,262929,262931,262933,262935,262937,262939,262944,262973,262975,262977,262979,262981,262983,262985,262987,262989,262991,262993,262995,262997,262999,263001,263003,263005,263007,263009,263011,263013,263015,263018,263020,263022,263024,263026,263028,263030,263032,263034,263036,263038,263040,263042,263044,263046,263048,263050,263052,263054,263056,263061,263063,263065,263067,263069,263073,263075,263077,263079",
		subwaystation: "262287",
		town: "262156",
		transport: "262410,262871",
		village: "262152",
	},
};
function expandRanges(s) {
	const out = [];
	for (const part of s.split(",")) {
		const m = part.match(/^(\d+)(?:-(\d+))?$/);
		if (!m) continue;
		const lo = +m[1],
			hi = m[2] ? +m[2] : lo;
		for (let i = lo; i <= hi; i++) out.push(i);
	}
	return out;
}
const ID2CAT = new Map(); // id -> {band, cat}
for (const [band, table] of Object.entries(CATALOG))
	for (const cat of Object.keys(table))
		for (const id of expandRanges(table[cat]))
			if (!ID2CAT.has(id)) ID2CAT.set(id, { band, cat });
// 图层组名: road_<cat> / area_<cat> / poi_<cat> / label_<cat> / arrow / raw_<id>
function groupOf(id) {
	const c = ID2CAT.get(id);
	if (c) return c.band + "_" + c.cat;
	if (bandOf(id) === "arrow") return "arrow";
	return "raw_" + id;
}
const KNOWN_GROUPS = new Set([...ID2CAT.values()].map((c) => c.band + "_" + c.cat));
KNOWN_GROUPS.add("arrow");

// ---------- 解码: gljs 55722 模块原样移植 ----------
function stripPad(t) {
	return 64 === ALPH.indexOf(t.charAt(t.length - 1))
		? t.substring(0, t.length - 1)
		: t;
}
function rot(t, e) {
	return ((t >> (8 - e)) & 255) | ((t << e) & 255);
}
function b64(t) {
	if (!t) return [];
	t = stripPad(t);
	t = stripPad(t);
	const c = parseInt((t.length / 4) * 3, 10);
	const f = [];
	t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	let u = 0;
	for (let d = 0; d < c; d += 3) {
		const a = ALPH.indexOf(t.charAt(u++));
		const s = ALPH.indexOf(t.charAt(u++));
		const h = ALPH.indexOf(t.charAt(u++));
		const l = ALPH.indexOf(t.charAt(u++));
		f.push((a << 2) | (s >> 4));
		if (64 !== h) f.push(((15 & s) << 4) | (h >> 2));
		if (64 !== l) f.push(((3 & h) << 6) | l);
	}
	return f;
}
function txDecode(t) {
	const b = b64(t);
	const out = [];
	for (let n = 0; n < b.length; n += 2) {
		let o = b[n],
			r = n + 1 < b.length ? b[n + 1] : 0;
		for (let l = 0; l < 3; l++) {
			const f = rot(r, 2) ^ (rot(r, 1) & rot(r, 3));
			const nx = r,
				ny = (o ^ f) & 255;
			o = nx;
			r = ny;
		}
		out.push(o);
		out.push(r);
	}
	let s2 = "";
	for (let i = 0; i < out.length; ) {
		const nn = out[i];
		if (nn < 128) {
			s2 += String.fromCharCode(nn);
			i++;
		} else if (nn > 191 && nn < 224) {
			s2 += String.fromCharCode(((31 & nn) << 6) | (63 & out[i + 1]));
			i += 2;
		} else {
			s2 += String.fromCharCode(
				((15 & nn) << 12) | ((63 & out[i + 1]) << 6) | (63 & out[i + 2]),
			);
			i += 3;
		}
	}
	return s2.substring(0, s2.lastIndexOf("}") + 1);
}
// txDecode 的逆向（仅供 selftest 验证解码链无手抄漂移）：
// UTF-8 字节 -> 逆 3 轮 rotate+xor 链 -> 自定义 base64（字节数补齐到 3 的倍数）
function txEncode(str) {
	const bytes = [];
	for (const ch of str) {
		const c = ch.codePointAt(0);
		if (c < 128) bytes.push(c);
		else if (c < 2048) bytes.push(192 | (c >> 6), 128 | (c & 63));
		else
			bytes.push(
				224 | (c >> 12),
				128 | ((c >> 6) & 63),
				128 | (c & 63),
			);
	}
	while (bytes.length % 3 !== 0) bytes.push(0x20); // 空格垫, 截断在 } 处不受影响
	const b = [];
	for (let i = 0; i < bytes.length; i += 2) {
		// 逆链: 正向一轮为 (o0,r0) -> (o1,r1) = (r0, o0^f(r0))
		// 逆向: r0 = o1, o0 = r1 ^ f(o1)
		let o = bytes[i],
			r = i + 1 < bytes.length ? bytes[i + 1] : 0;
		for (let l = 0; l < 3; l++) {
			const f = rot(o, 2) ^ (rot(o, 1) & rot(o, 3));
			const prevR = o,
				prevO = (r ^ f) & 255;
			o = prevO;
			r = prevR;
		}
		b.push(o, r);
	}
	let s = "";
	for (let i = 0; i < b.length; i += 3) {
		const c0 = b[i],
			c1 = i + 1 < b.length ? b[i + 1] : 0,
			c2 = i + 2 < b.length ? b[i + 2] : 0;
		s += ALPH[c0 >> 2] + ALPH[((3 & c0) << 4) | (c1 >> 4)];
		s += ALPH[((15 & c1) << 2) | (c2 >> 6)];
		s += ALPH[63 & c2];
	}
	return s; // 无 '=' 尾: stripPad 空转, 长度 4 的倍数, 逐字节可逆
}

// ---------- 坐标 ----------
function lngLatToXyz(lng, lat, z) {
	const n = Math.pow(2, z);
	const x = Math.floor(((lng + 180) / 360) * n);
	const r = (lat * Math.PI) / 180;
	const y = Math.floor(
		((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * n,
	);
	return [x, y];
}
function xyzToLngLatPx(gx, gy, z) {
	const n = Math.pow(2, z) * TILE_SIZE;
	const lng = (gx / n) * 360 - 180;
	const lat =
		(Math.atan(Math.sinh(Math.PI * (1 - (2 * gy) / n))) * 180) / Math.PI;
	return [lng, lat];
}
function deltaDecode(arr) {
	const pts = [];
	let x = 0,
		y = 0;
	for (let i = 0; i < arr.length; i += 2) {
		if (i === 0) {
			x = arr[0];
			y = arr[1];
		} else {
			x += arr[i];
			y += arr[i + 1];
		}
		pts.push([x, y]);
	}
	return pts;
}
function isClosedRing(pts) {
	// 渲染器口径: 首尾点差 ≤1px 视为闭合(环岛/面), 否则为线。
	// 必须 ≥4 点: [A,B,A] 这种 2 点回头段首尾相同但只有 2 个不同点, 面积恒为 0,
	// 当环输出会得到退化的 3 坐标 Polygon(实测 road_street 有一例), 应按线保留。
	return (
		pts.length > 3 &&
		Math.abs(pts[0][0] - pts[pts.length - 1][0]) <= 1 &&
		Math.abs(pts[0][1] - pts[pts.length - 1][1]) <= 1
	);
}

// ---------- GCJ-02 <-> WGS-84（复用 wandergis/coordtransform 同算法） ----------
const _PI = Math.PI,
	_A = 6378245.0,
	_EE = 0.00669342162296594323;
function _outOfChina(lon, lat) {
	return lon < 72.004 || lon > 137.8347 || lat < 0.8293 || lat > 55.8271;
}
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
	if (!Number.isFinite(lon) || !Number.isFinite(lat)) return [lon, lat];
	if (_outOfChina(lon, lat)) return [lon, lat];
	const dLat = _tLat(lon - 105, lat - 35),
		dLon = _tLon(lon - 105, lat - 35);
	const rad = (lat / 180) * _PI;
	let m = Math.sin(rad);
	m = 1 - _EE * m * m;
	const sq = Math.sqrt(m);
	const oLat = (dLat * 180) / (((_A * (1 - _EE)) / (m * sq)) * _PI);
	const oLon = (dLon * 180) / ((_A / sq) * Math.cos(rad) * _PI);
	return [lon - oLon, lat - oLat];
}
function wgs84ToGcj02(lon, lat) {
	if (!Number.isFinite(lon) || !Number.isFinite(lat)) return [lon, lat];
	if (_outOfChina(lon, lat)) return [lon, lat];
	const dLat = _tLat(lon - 105, lat - 35),
		dLon = _tLon(lon - 105, lat - 35);
	const rad = (lat / 180) * _PI;
	let m = Math.sin(rad);
	m = 1 - _EE * m * m;
	const sq = Math.sqrt(m);
	const oLat = (dLat * 180) / (((_A * (1 - _EE)) / (m * sq)) * _PI);
	const oLon = (dLon * 180) / ((_A / sq) * Math.cos(rad) * _PI);
	return [lon + oLon, lat + oLat];
}

// ---------- 要素解析: 瓦片内局部整数像素 + 瓦片原点 => 全局像素 ----------
// 全局像素为整数 => 跨瓦去重键精确无舍入; 转 WGS-84 在去重之后做一次
function geomParts(geom) {
	// 返回 part 数组; 每 part = [[lx,ly],...] 局部整数点
	if (!Array.isArray(geom) || !geom.length) return [];
	if (Array.isArray(geom[0])) {
		const parts = [];
		for (const p of geom) if (Array.isArray(p)) parts.push(deltaDecode(p));
		return parts;
	}
	return [deltaDecode(geom)];
}
function toGlobal(parts, tx, ty) {
	return parts.map((pts) => pts.map(([x, y]) => [x + tx * TILE_SIZE, y + ty * TILE_SIZE]));
}
function ringArea(pts) {
	let a = 0;
	for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
		a += pts[j][0] * pts[i][1] - pts[i][0] * pts[j][1];
	}
	return Math.abs(a) / 2;
}
function pointInRing([x, y], ring) {
	let inside = false;
	for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
		const [xi, yi] = ring[i],
			[xj, yj] = ring[j];
		if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)
			inside = !inside;
	}
	return inside;
}
// 多环按面积降序, 小环并入包含它的最小环(洞); 返回 GeoJSON rings 数组(外层在前)
function nestRings(rings) {
	const sorted = rings.map((r, i) => ({ r, i, a: ringArea(r) })).sort((x, y) => y.a - x.a);
	const children = sorted.map(() => []);
	const parent = sorted.map((_, i) => -1);
	for (let i = 1; i < sorted.length; i++) {
		let best = -1,
			bestA = Infinity;
		for (let j = 0; j < i; j++) {
			if (sorted[j].a <= sorted[i].a) continue;
			if (pointInRing(sorted[i].r[0], sorted[j].r)) {
				if (sorted[j].a < bestA) {
					bestA = sorted[j].a;
					best = j;
				}
			}
		}
		if (best >= 0) {
			parent[i] = best;
			children[best].push(i);
		}
	}
	const top = [];
	for (let i = 0; i < sorted.length; i++) if (parent[i] === -1) top.push(i);
	const out = [];
	const walk = (i) => {
		out.push(sorted[i].r);
		for (const c of children[i]) walk(c);
	};
	for (const t of top) walk(t);
	return out;
}
function closeRing(pts) {
	const r = pts.slice();
	const last = r[r.length - 1],
		first = r[0];
	if (!last || last[0] !== first[0] || last[1] !== first[1]) r.push([first[0], first[1]]);
	return r;
}
// 组装的中间产物(与 parseTile 输出同构): 全局整数像素, 输出前统一转 WGS-84
function makeFeature(group, id, props, parts, closed, tile) {
	return {
		group,
		layer_id: id,
		props,
		parts,
		kind: closed ? "polygon" : "line",
		band: "region",
		tile,
		n_parts: parts.length,
	};
}

// ---------- 单瓦片解析: features -> 中间要素(全局整数像素) ----------
function parseTile(obj, tx, ty, z) {
	const out = [];
	const tile = `${z}_${tx}_${ty}`;
	for (const f of obj.features || []) {
		if (!Array.isArray(f)) continue;
		const id = Array.isArray(f[0]) ? f[0][0] : f[0];
		if (typeof id !== "number") continue;
		const group = groupOf(id);
		const band = bandOf(id);
		const cat = ID2CAT.get(id);
		if (Array.isArray(f[0])) {
			// ---- 注记: 逐字记录 [id,[x,y],char,font,style,anchors?] ----
			for (const rec of f) {
				if (!Array.isArray(rec) || !Array.isArray(rec[1]) || rec[1].length !== 2) continue;
				const [px, py] = rec[1];
				if (typeof px !== "number" || typeof py !== "number") continue;
				out.push({
					group,
					layer_id: id,
					cat: cat ? cat.cat : null,
					kind: "point",
					props: {
						char: typeof rec[2] === "string" ? rec[2] : "",
						font: typeof rec[3] === "number" ? rec[3] : null,
						style: typeof rec[4] === "number" ? rec[4] : null,
						anchors: Array.isArray(rec[5]) ? rec[5] : null,
						layer_id: id,
					},
					point: [px + tx * TILE_SIZE, py + ty * TILE_SIZE],
					tile,
				});
			}
			continue;
		}
		// ---- 扁平记录 [id, geom, ...] ----
		const nums = [],
			strs = [];
		for (let i = 2; i < f.length; i++) {
			if (typeof f[i] === "number") nums.push(f[i]);
			else if (typeof f[i] === "string") strs.push(f[i]);
		}
		const anchors = f.length > 2 && Array.isArray(f[f.length - 1]) ? f[f.length - 1] : null;
		const style = nums.length ? nums[nums.length - 1] : null;
		const name = strs.length ? strs[0] : "";
		if (band === "point") {
			const p = f[1];
			if (!Array.isArray(p) || p.length !== 2 || typeof p[0] !== "number") continue;
			out.push({
				group,
				layer_id: id,
				cat: cat ? cat.cat : null,
				kind: "point",
				props: { name, style, anchors, layer_id: id },
				point: [p[0] + tx * TILE_SIZE, p[1] + ty * TILE_SIZE],
				tile,
			});
			continue;
		}
		const parts = toGlobal(geomParts(f[1]), tx, ty);
		if (!parts.length || !parts[0].length) continue;
		// region 频段即面(bundle BASE_LAYER_TYPE.region), 恒 Polygon(环不闭合时输出前补首点);
		// line/arrow 频段按首尾差≤1px 判闭合(环岛/箭头三角转面), 否则线
		const closed = band === "region" ? true : band === "line" || band === "arrow" ? isClosedRing(parts[0]) : false;
		const props = { name, style, layer_id: id };
		if (band === "line" && nums.length > 1) props.start_distance = nums[0];
		if (band === "region" && id === BUILDING_ID && nums.length > 1) {
			props.height_m = nums[0]; // 楼高(米, 已对官方预览验证)
			if (strs.length > 1) props.name = strs[1];
		}
		out.push({
			group,
			layer_id: id,
			cat: cat ? cat.cat : null,
			kind: closed ? "polygon" : "line",
			band,
			props,
			parts,
			tile,
			n_parts: parts.length,
		});
	}
	return out;
}

// ---------- 去重(全局整数像素 + 稳定属性) ----------
function featureKey(f) {
	const p = f.props || {};
	const stab = [p.style, p.height_m, p.name, p.char, p.font, p.start_distance]
		.map((v) => (v === undefined ? "" : v))
		.join("~");
	if (f.kind === "point") return `${f.group}|P${f.point[0]},${f.point[1]}|${stab}`;
	const g = f.parts
		.map((pts) => pts.map(([x, y]) => `${x},${y}`).join(";"))
		.join("#");
	return `${f.group}|${f.kind}|${g}|${stab}`;
}

// ================= 通用拓扑: 跨瓦近重复面融合 + 残余重叠审计 =================
// 腾讯特性(与天地图"逐瓦裁剪 + 接缝 Union"相反): 服务端不裁剪, 且**对跨瓦同一要素按瓦抽稀**
// —— 同一个公园在相邻瓦给 7 点 / 4 点两种形状, 互不相等, 精确去重抓不到 → 输出里两块面互相重叠。
// 实测(陆家嘴 z16 六瓦)真重叠面积: grass 0.076 / park 0.081 / otherarea 0.072 / water 0.027 /
// commercial 0.017 / resident 0.004 km²(最大单对 2.85 公顷);
// 线层跨瓦几乎无重复(road_street 378 条仅 4 对近完全重复, 且都是 2 点短段) → 精确去重已足够,
// 不 Union(路口盲合会误接); 建筑相邻楼共享墙(实测共享 2 顶点, 只剩 ~8 m² 浮点细缝, 占比 ≤0.026)
// → Union 会把整排楼粘成一块, 故建筑只审计不融合。
const TOPO_MIN_RATIO = 0.05; // 同 style: 重叠 / 较小面(建筑实测 ≤0.026, 真实跨瓦抽稀 ≥0.28, 0.05 分离干净)
const TOPO_MIN_RATIO_X = 0.5; // 异 style(腾讯按瓦给不同外观配置码): 只认"近乎整体包含", 实测 0.88~1.00
const TOPO_MIN_PX2 = 2; // 绝对下限(px²), 防浮点噪声
const TOPO_Q = 1e6; // 碎片端点归一键精度(远小于 1px, 仅用于串链)

function ringBBox(pts) {
	let x0 = Infinity,
		y0 = Infinity,
		x1 = -Infinity,
		y1 = -Infinity;
	for (const p of pts) {
		if (p[0] < x0) x0 = p[0];
		if (p[1] < y0) y0 = p[1];
		if (p[0] > x1) x1 = p[0];
		if (p[1] > y1) y1 = p[1];
	}
	return [x0, y0, x1, y1];
}
function bboxHit(a, b) {
	return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1];
}
function distToSeg(p, a, b) {
	const dx = b[0] - a[0],
		dy = b[1] - a[1],
		L2 = dx * dx + dy * dy;
	if (!L2) return Math.hypot(p[0] - a[0], p[1] - a[1]);
	let t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L2;
	t = t < 0 ? 0 : t > 1 ? 1 : t;
	return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}
// 严格落在环集合内(洞感知; 边界上的点一律判否) —— 对齐天地图篇 strictlyInsideRings
// 注意: 腾讯 region 环数据侧不闭口(首尾点不同), 故边界遍历必须含末点->首点那条边
function strictlyInside(rings, pt) {
	if (!pointInRing(pt, rings[0])) return false;
	for (let i = 1; i < rings.length; i++) if (pointInRing(pt, rings[i])) return false;
	for (const r of rings)
		for (let i = 0; i < r.length; i++) if (distToSeg(pt, r[i], r[(i + 1) % r.length]) < 1e-6) return false;
	return true;
}
// 并集口径的"内"(任一环内): Union 边界提取必须用它 —— 用奇偶会把重叠区判成外部, 输出挖洞的 XOR
function insideAny(rings, pt) {
	for (const r of rings) if (pointInRing(pt, r)) return true;
	return false;
}
// 两线段互相切割的参数(含共线重叠); 只收严格内部参数
function segSplitParams(a, b, c, d) {
	const rx = b[0] - a[0],
		ry = b[1] - a[1];
	const sx = d[0] - c[0],
		sy = d[1] - c[1];
	const qx = c[0] - a[0],
		qy = c[1] - a[1];
	const den = rx * sy - ry * sx;
	const ra = [],
		rb = [];
	const push = (arr, v) => {
		if (v > 1e-9 && v < 1 - 1e-9) arr.push(v);
	};
	if (Math.abs(den) > 1e-12) {
		push(ra, (qx * sy - qy * sx) / den);
		push(rb, (qx * ry - qy * rx) / den);
		return [ra, rb];
	}
	if (Math.abs(qx * ry - qy * rx) > 1e-12) return [ra, rb];
	const rr = rx * rx + ry * ry,
		ss = sx * sx + sy * sy;
	if (rr > 1e-12) {
		push(ra, ((c[0] - a[0]) * rx + (c[1] - a[1]) * ry) / rr);
		push(ra, ((d[0] - a[0]) * rx + (d[1] - a[1]) * ry) / rr);
	}
	if (ss > 1e-12) {
		push(rb, ((a[0] - c[0]) * sx + (a[1] - c[1]) * sy) / ss);
		push(rb, ((b[0] - c[0]) * sx + (b[1] - c[1]) * sy) / ss);
	}
	return [ra, rb];
}
// 栅格化求两环交集面积(px²): 只在候选对上跑, 用来判"真重叠"而不是"贴边"
function interAreaPx(A, B, N = 48) {
	const a = ringBBox(A),
		b = ringBBox(B);
	const x0 = Math.max(a[0], b[0]),
		x1 = Math.min(a[2], b[2]);
	const y0 = Math.max(a[1], b[1]),
		y1 = Math.min(a[3], b[3]);
	if (!(x0 < x1 && y0 < y1)) return 0;
	let hit = 0;
	for (let i = 0; i < N; i++)
		for (let j = 0; j < N; j++) {
			const p = [x0 + ((i + 0.5) / N) * (x1 - x0), y0 + ((j + 0.5) / N) * (y1 - y0)];
			if (pointInRing(p, A) && pointInRing(p, B)) hit++;
		}
	return hit * ((x1 - x0) / N) * ((y1 - y0) / N);
}
function turnOf(e, inc) {
	const ang = Math.atan2(e.b[1] - e.a[1], e.b[0] - e.a[0]);
	return (ang - inc + Math.PI * 2) % (Math.PI * 2);
}
// 并集外边界(移植 WebGIS-Dev tdtBuildingTopology.unionRings, 内部判据由奇偶改为并集口径)
// 输入/输出均为全局整数像素环; 输出 0..n 个闭合环(不含洞嵌套, 交 nestRings 处理)
function unionRings(inputRings) {
	const rings = inputRings
		.map((ring) => {
			const out = [];
			for (const p of ring) {
				const s = [Math.round(p[0]), Math.round(p[1])];
				if (!out.length || out[out.length - 1][0] !== s[0] || out[out.length - 1][1] !== s[1]) out.push(s);
			}
			if (out.length > 1 && out[0][0] === out[out.length - 1][0] && out[0][1] === out[out.length - 1][1]) out.pop();
			return out;
		})
		.filter((r) => r.length >= 3);
	if (!rings.length) return [];
	const source = [];
	for (const ring of rings)
		for (let i = 0; i < ring.length; i++) source.push({ a: ring[i], b: ring[(i + 1) % ring.length], cuts: [0, 1] });
	for (let l = 0; l < source.length; l++)
		for (let r = l + 1; r < source.length; r++) {
			const [ca, cb] = segSplitParams(source[l].a, source[l].b, source[r].a, source[r].b);
			if (ca.length) source[l].cuts.push(...ca);
			if (cb.length) source[r].cuts.push(...cb);
		}
	const pk = (p) => `${Math.round(p[0] * TOPO_Q)},${Math.round(p[1] * TOPO_Q)}`;
	const boundary = [];
	for (const e of source) {
		const cuts = [...new Set(e.cuts)].sort((x, y) => x - y);
		for (let i = 0; i + 1 < cuts.length; i++) {
			const t0 = cuts[i],
				t1 = cuts[i + 1];
			if (t1 - t0 < 1e-9) continue;
			const a = [e.a[0] + (e.b[0] - e.a[0]) * t0, e.a[1] + (e.b[1] - e.a[1]) * t0];
			const b = [e.a[0] + (e.b[0] - e.a[0]) * t1, e.a[1] + (e.b[1] - e.a[1]) * t1];
			const dx = b[0] - a[0],
				dy = b[1] - a[1];
			const len = Math.hypot(dx, dy);
			if (len < 1e-9) continue;
			const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
			const d = Math.min(0.01, len / 100);
			const li = insideAny(rings, [mid[0] - (dy / len) * d, mid[1] + (dx / len) * d]);
			const ri = insideAny(rings, [mid[0] + (dy / len) * d, mid[1] - (dx / len) * d]);
			if (li === ri) continue; // 两侧同在内/同在外: 不是并集边界
			const s = li ? a : b,
				t = li ? b : a; // 统一成"内部在左"
			boundary.push({ a: s, b: t, ak: pk(s), bk: pk(t) });
		}
	}
	// 共享内边(两环反向各走一次)抵消
	const uniq = new Map();
	for (const e of boundary) {
		const f = `${e.ak}>${e.bk}`,
			r = `${e.bk}>${e.ak}`;
		if (uniq.has(r)) uniq.delete(r);
		else if (!uniq.has(f)) uniq.set(f, e);
	}
	const edges = [...uniq.values()];
	const outgoing = new Map();
	for (const e of edges) {
		if (!outgoing.has(e.ak)) outgoing.set(e.ak, []);
		outgoing.get(e.ak).push(e);
	}
	const out = [];
	for (const first of edges) {
		if (first.used) continue;
		first.used = true;
		const ring = [first.a, first.b];
		let prev = first.a,
			cur = first.b;
		while (pk(cur) !== pk(ring[0])) {
			const cand = (outgoing.get(pk(cur)) || []).filter((e) => !e.used);
			if (!cand.length) break;
			const inc = Math.atan2(cur[1] - prev[1], cur[0] - prev[0]);
			cand.sort((x, y) => turnOf(x, inc) - turnOf(y, inc));
			const nx = cand[0];
			nx.used = true;
			prev = cur;
			cur = nx.b;
			ring.push(cur);
			if (ring.length > edges.length + 1) break;
		}
		if (pk(cur) === pk(ring[0]) && ring.length >= 4) {
			const clean = [];
			for (const p of ring) if (!clean.length || pk(clean[clean.length - 1]) !== pk(p)) clean.push(p);
			if (pk(clean[0]) !== pk(clean[clean.length - 1])) clean.push(clean[0]);
			if (clean.length >= 4) out.push(clean);
		}
	}
	return out;
}
// 同 layer_id 分组 → 真重叠连通(并查集) → 逐连通分量 Union → 面积守恒回退 → 标 _seam_merged
// 分组键只取 layer_id: 腾讯对同一要素在相邻瓦会给**不同 style**(外观配置码按瓦的 LOD 档变),
// 实测同一公园跨瓦是 66519235 vs 66519048 / 66519100 vs 66519046 —— 带 style 做键会漏合。
// 故 style 只用来定阈值: 同 style 部分重叠(≥5%)即合; 异 style 只认近乎整体包含(≥50%)。
function fuseAreaGroup(list) {
	const buckets = new Map();
	for (const f of list) {
		const k = String(f.layer_id);
		if (!buckets.has(k)) buckets.set(k, []);
		buckets.get(k).push(f);
	}
	const out = [];
	let union = 0,
		fallback = 0,
		fusedMax = 0;
	for (const [, g] of buckets) {
		if (g.length === 1) {
			out.push(g[0]);
			continue;
		}
		const rings = g.map((f) => f.parts[0]);
		const bbs = rings.map(ringBBox);
		const areas = rings.map(ringArea);
		const par = g.map((_, i) => i);
		const find = (a) => (par[a] === a ? a : (par[a] = find(par[a])));
		for (let i = 0; i < g.length; i++)
			for (let j = i + 1; j < g.length; j++) {
				if (!bboxHit(bbs[i], bbs[j])) continue;
				const ov = interAreaPx(rings[i], rings[j]);
				if (ov < TOPO_MIN_PX2) continue;
				const sameStyle = g[i].props && g[j].props && g[i].props.style === g[j].props.style;
				const need = sameStyle ? TOPO_MIN_RATIO : TOPO_MIN_RATIO_X;
				if (ov / Math.min(areas[i], areas[j]) < need) continue;
				par[find(i)] = find(j);
			}
		const comps = new Map();
		g.forEach((f, i) => {
			const r = find(i);
			if (!comps.has(r)) comps.set(r, []);
			comps.get(r).push(i);
		});
		for (const [, idxs] of comps) {
			// 单成员 / 含多环(洞)要素: 不融合, 原样保留
			if (idxs.length === 1 || idxs.some((i) => g[i].parts.length !== 1)) {
				for (const i of idxs) out.push(g[i]);
				continue;
			}
			const inRings = idxs.map((i) => rings[i]);
			const before = inRings.reduce((s, r) => s + ringArea(r), 0);
			const maxA = Math.max(...idxs.map((i) => areas[i]));
			let merged = null;
			try {
				const u = unionRings(inRings);
				const uA = u.reduce((s, r) => s + ringArea(r), 0);
				// 面积守恒: 并集面积必须 ≥ 最大单面(没丢几何) 且 ≤ 原面积和(重叠只减不增);
				// 注意不能要求 ≈ 原面积和 —— 输入本身重叠, 并集必然小于和
				if (u.length && uA >= maxA * 0.99 - 1 && uA <= before + 1) merged = u;
			} catch (e) {
				merged = null;
			}
			if (!merged) {
				fallback++;
				for (const i of idxs) out.push(g[i]);
				continue;
			}
			union++;
			if (idxs.length > fusedMax) fusedMax = idxs.length;
			out.push(
				Object.assign({}, g[idxs[0]], {
					parts: merged,
					n_parts: merged.length,
					_seam_merged: 1,
					_fused_from: idxs.length,
				}),
			);
		}
	}
	return { features: out, union, fallback, fusedMax };
}
// 残余重叠审计(洞感知 + 边界接触排除, 只打标不改几何)
// 分两种信号, 因为腾讯面层是**多分类叠置**模型, 不同 layer_id 重叠往往是设计如此:
//   _topo_review=1  同 layer_id 仍严格互含 —— 真拓扑残留(融合没覆盖到的, 或建筑共享墙细缝)
//   _topo_overlap=1 异 layer_id 严格互含 —— 多分类/层级叠置(实测北京 196775 完整包含
//                   196894/196895 一批子面; 陆家嘴 area_parkinglots 196629 vs 196787),
//                   不是错误, 但会影响面积统计, 单独标出来供筛选
function auditOverlap(list) {
	const polys = [];
	list.forEach((f, idx) => {
		if (f.kind === "polygon" && f.parts && f.parts.length) polys.push({ rings: f.parts, bb: ringBBox(f.parts[0]), idx });
	});
	const rev = new Set(),
		ovl = new Set();
	for (let i = 0; i < polys.length; i++)
		for (let j = i + 1; j < polys.length; j++) {
			const A = polys[i],
				B = polys[j];
			if (!bboxHit(A.bb, B.bb)) continue;
			let hit = false;
			for (const r of A.rings) {
				for (const pt of r)
					if (strictlyInside(B.rings, pt)) {
						hit = true;
						break;
					}
				if (hit) break;
			}
			if (!hit)
				for (const r of B.rings) {
					for (const pt of r)
						if (strictlyInside(A.rings, pt)) {
							hit = true;
							break;
						}
					if (hit) break;
				}
			if (!hit) continue;
			const sameId = String(list[A.idx].layer_id) === String(list[B.idx].layer_id);
			(sameId ? rev : ovl).add(A.idx);
			(sameId ? rev : ovl).add(B.idx);
		}
	for (const idx of rev) list[idx]._topo_review = 1;
	for (const idx of ovl) if (!rev.has(idx)) list[idx]._topo_overlap = 1;
	return { review: rev.size, overlap: ovl.size };
}

// ---------- 输出: 全局像素 -> WGS-84 ----------
function toWgs([gx, gy], z) {
	const [lng, lat] = xyzToLngLatPx(gx, gy, z);
	return gcj02ToWgs84(lng, lat);
}
function emitFeature(f, z) {
	const props = Object.assign({}, f.props, {
		_tile: f.tile,
		_tiles_n: f._tiles_n || 1,
	});
	// 拓扑标记: 跨瓦融合 / 残余重叠审计(只打标, 不改几何)
	if (f._seam_merged) props._seam_merged = 1;
	if (f._fused_from) props._fused_from = f._fused_from;
	if (f._topo_review) props._topo_review = 1;
	if (f._topo_overlap) props._topo_overlap = 1;
	if (f.kind === "point")
		return {
			type: "Feature",
			properties: props,
			geometry: { type: "Point", coordinates: toWgs(f.point, z) },
		};
	let geom;
	if (f.kind === "line") {
		if (f.parts.length > 1)
			geom = {
				type: "MultiLineString",
				coordinates: f.parts.map((pts) => pts.map((p) => toWgs(p, z))),
			};
		else
			geom = {
				type: "LineString",
				coordinates: f.parts[0].map((p) => toWgs(p, z)),
			};
	} else {
		if (f.parts.length > 1) {
			// 多环: 面积降序 + 包含嵌套成 Polygon(洞) 或 MultiPolygon
			const rings = nestRings(f.parts);
			geom = {
				type: "Polygon",
				coordinates: rings.map((r) => r.map((p) => toWgs(p, z))),
			};
		} else {
			const ring = closeRing(f.parts[0]);
			geom = { type: "Polygon", coordinates: [ring.map((p) => toWgs(p, z))] };
		}
	}
	return { type: "Feature", properties: props, geometry: geom };
}

// ---------- 抓取(每批最多4块, 2x2 邻接) ----------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function fetchBatch(z, list) {
	const s = list.map(([x, y]) => `${z}_${x}_${y}`).join(",");
	const hosts = ["rt0", "rt1", "rt2", "rt3"];
	const h = hosts[Math.floor(Math.random() * 4)];
	const url = `https://${h}.map.gtimg.com/tile?styleid=0&tiles=${s}&version=${VERSION}&building=1&style=100&compress=1&mapType=hybrid`;
	const r = await fetch(url, {
		headers: {
			Referer: "https://lbs.qq.com/getPoint/",
			"User-Agent": "Mozilla/5.0 Windows NT 10.0; Win64; x64 AppleWebKit/537.36",
		},
	});
	if (!r.ok) throw new Error(`HTTP ${r.status}`);
	return r.json();
}

// ---------- CLI ----------
function parseArgs() {
	const a = process.argv.slice(2);
	const o = { zoom: 16, delay: 400, maxTiles: 100, layers: "all", outdir: "./out" };
	for (let i = 0; i < a.length; i += 2) {
		const k = a[i].replace(/^--/, "");
		if (k === "selftest") {
			o.selftest = true;
			i--;
			continue;
		}
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
	if (!Number.isInteger(z) || z < 1 || z > 22) {
		console.error("zoom 必须是 1~22 的整数");
		process.exit(1);
	}
	if (z < 14 || z > 18)
		console.warn(`警告: z=${z} 未经实测验证(实测区间 14~18), 结果可能为空`);
	if (!o.bbox) {
		console.error(
			"用法: node tencent_vector_fetch.mjs --bbox minLng,minLat,maxLng,maxLat --zoom 16 --layers all --outdir ./out",
		);
		process.exit(1);
	}
	let want;
	if (o.layers === "all") want = null; // null = 全收(以实际出现的组为准)
	else {
		want = o.layers.split(",").map((s) => s.trim()).filter(Boolean);
		const bad = want.filter((w) => !KNOWN_GROUPS.has(w) && !/^raw_\d+$/.test(w));
		if (bad.length) {
			console.error(
				"未知图层组: " +
					bad.join(",") +
					"\n可用: all / " +
					[...KNOWN_GROUPS].sort().join(",") +
					" / raw_<id>",
			);
			process.exit(1);
		}
	}
	// bbox(WGS84) -> GCJ02 角点 -> 瓦片范围(瓦片按火星坐标编号)
	const [wLng, wLat, eLng, eLat] = o.bbox.split(",").map(Number);
	const cs = [
		[wLng, wLat],
		[wLng, eLat],
		[eLng, wLat],
		[eLng, eLat],
	].map(([lo, la]) => wgs84ToGcj02(lo, la));
	const gMinLng = Math.min(...cs.map((c) => c[0])),
		gMaxLng = Math.max(...cs.map((c) => c[0]));
	const gMinLat = Math.min(...cs.map((c) => c[1])),
		gMaxLat = Math.max(...cs.map((c) => c[1]));
	const [x0, y0] = lngLatToXyz(gMinLng, gMaxLat, z);
	const [x1, y1] = lngLatToXyz(gMaxLng, gMinLat, z);
	const N = Math.pow(2, z);
	const nTiles = (x1 - x0 + 1) * (y1 - y0 + 1);
	if (nTiles > Number(o.maxTiles)) {
		console.error(
			`瓦片数 ${nTiles} 超 --max-tiles=${o.maxTiles}，请缩小范围或分片`,
		);
		process.exit(1);
	}
	console.log(
		`bbox(WGS84) ${o.bbox} -> 取数用(GCJ02) ${gMinLng.toFixed(6)},${gMinLat.toFixed(6)},${gMaxLng.toFixed(6)},${gMaxLat.toFixed(6)} z=${z} xyz x:${x0}-${x1} y:${y0}-${y1} 共 ${nTiles} 块`,
	);
	// 2x2 分批（网格坐标步进, 边缘批允许缺角, 不重不漏）
	const batches = [];
	for (let by = y0; by <= y1; by += 2)
		for (let bx = x0; bx <= x1; bx += 2) {
			const group = [];
			for (let dy = 0; dy < 2; dy++)
				for (let dx = 0; dx < 2; dx++) {
					const xx = bx + dx,
						yy = by + dy;
					if (xx > x1 || yy > y1) continue;
					group.push({ xyz: [xx, yy], tms: [xx, N - 1 - yy] });
				}
			if (group.length) batches.push(group);
		}
	console.log(`批量请求 ${batches.length} 次(每批最多4块), 请限速, 仅学习小范围使用`);
	fs.mkdirSync(o.outdir, { recursive: true });
	const started = Date.now();
	const runInfo = {
		input: { bbox_wgs84: o.bbox, zoom: z, layers: o.layers },
		version: VERSION,
		tiles: [],
		failures: [],
	};
	const feats = [];
	for (let bi = 0; bi < batches.length; bi++) {
		const group = batches[bi];
		let js = null;
		for (let retry = 0; retry < 3; retry++) {
			try {
				js = await fetchBatch(z, group.map((t) => t.tms));
				break;
			} catch (e) {
				console.error(` batch ${bi + 1} 重试${retry + 1}: ${e.message}`);
				await sleep(1500);
			}
		}
		if (!js || !js.datas) {
			runInfo.failures.push({ batch: bi + 1, reason: "no-datas" });
			continue;
		}
		js.datas.forEach((d, di) => {
			const t = group[di];
			if (!t) return;
			runInfo.tiles.push({ tag: `${z}_${t.xyz[0]}_${t.xyz[1]}`, bytes: d && d.data ? d.data.length : 0 });
			if (!d || !d.data) {
				runInfo.failures.push({ tag: `${z}_${t.xyz[0]}_${t.xyz[1]}`, reason: "empty" });
				return;
			}
			let obj;
			try {
				obj = JSON.parse(txDecode(d.data));
			} catch (e) {
				runInfo.failures.push({
					tag: `${z}_${t.xyz[0]}_${t.xyz[1]}`,
					reason: "decode:" + String(e.message).slice(0, 80),
				});
				return;
			}
			if (obj.ret !== 0 || !obj.features) {
				runInfo.failures.push({ tag: `${z}_${t.xyz[0]}_${t.xyz[1]}`, reason: "ret=" + obj.ret });
				return;
			}
			try {
				feats.push(...parseTile(obj, t.xyz[0], t.xyz[1], z));
			} catch (e) {
				runInfo.failures.push({
					tag: `${z}_${t.xyz[0]}_${t.xyz[1]}`,
					reason: "parse:" + String(e.message).slice(0, 80),
				});
			}
		});
		if ((bi + 1) % 5 === 0)
			console.log(` ${bi + 1}/${batches.length} batches, 已解析 ${feats.length} 要素(去重前)`);
		await sleep(Number(o.delay));
	}
	// 去重 + 分组
	const groups = new Map();
	let dup = 0;
	const dupByGroup = new Map();
	for (const f of feats) {
		if (want && !want.includes(f.group)) continue;
		const k = featureKey(f);
		if (!groups.has(f.group)) groups.set(f.group, new Map());
		const m = groups.get(f.group);
		if (m.has(k)) {
			dup++;
			dupByGroup.set(f.group, (dupByGroup.get(f.group) || 0) + 1);
			const old = m.get(k);
			old._tiles_n = (old._tiles_n || 1) + 1;
			continue;
		}
		f._tiles_n = 1;
		m.set(k, f);
	}
	// 通用拓扑: 面层跨瓦近重复融合(建筑除外) + 残余重叠审计
	const stats = {};
	let totUnion = 0,
		totFallback = 0,
		totReview = 0,
		totOverlap = 0;
	for (const [g, m] of groups) {
		let list = [...m.values()];
		const nDedup = dupByGroup.get(g) || 0;
		const inN = list.length + nDedup;
		let union = 0,
			fallback = 0,
			fusedMax = 0,
			review = 0,
			overlap = 0;
		const polys = list.filter((f) => f.kind === "polygon");
		if (polys.length && g !== "area_building") {
			// 建筑不融合: 相邻楼共享墙, Union 会把整排楼粘成一块(实测共享 2 顶点, 占比 ≤0.026)
			const r = fuseAreaGroup(polys);
			union = r.union;
			fallback = r.fallback;
			fusedMax = r.fusedMax;
			list = list.filter((f) => f.kind !== "polygon").concat(r.features);
		}
		if (polys.length) {
			const a = auditOverlap(list.filter((f) => f.kind === "polygon"));
			review = a.review;
			overlap = a.overlap;
		}
		totUnion += union;
		totFallback += fallback;
		totReview += review;
		totOverlap += overlap;
		const arr = list.map((f) => emitFeature(f, z));
		stats[g] = { in: inN, dedup: nDedup, out: arr.length, union, fallback, fused_from_max: fusedMax, review, overlap };
		fs.writeFileSync(
			path.join(o.outdir, `${g}.geojson`),
			JSON.stringify(
				{
					type: "FeatureCollection",
					crs: {
						type: "name",
						properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
					},
					features: arr,
				},
				null,
				1,
			),
		);
		console.log(
			`${g}: ${arr.length} 要素 (in ${inN} / 去重 ${nDedup}${union ? ` / Union ${union}` : ""}${
				fallback ? ` / 回退 ${fallback}` : ""
			}${review ? ` / 同层重叠打标 ${review}` : ""}${overlap ? ` / 异层叠置 ${overlap}` : ""}) -> ${path.join(o.outdir, g + ".geojson")}`,
		);
	}
	runInfo.elapsed_s = Math.round((Date.now() - started) / 1000);
	fs.writeFileSync(
		path.join(o.outdir, "merge_stats.json"),
		JSON.stringify(
			{
				tiles: runInfo.tiles.length,
				requests: batches.length,
				parsed_feats: feats.length,
				dedup_removed: dup,
				topology: { union: totUnion, fallback: totFallback, topo_review: totReview, topo_overlap: totOverlap },
				layers: stats,
			},
			null,
			1,
		),
	);
	fs.writeFileSync(path.join(o.outdir, "run_info.json"), JSON.stringify(runInfo, null, 1));
	console.log(
		`merge_stats: 瓦片=${runInfo.tiles.length} 解析=${feats.length} 跨瓦去重=${dup} 面融合=${totUnion}(回退${totFallback}) 同层重叠打标=${totReview} 异层叠置=${totOverlap} 失败=${runInfo.failures.length} 用时=${runInfo.elapsed_s}s`,
	);
	console.log("注意: 输出已是 WGS-84; 小范围研究请遵守腾讯服务条款, 大范围/商用请自备 key");
}

// ================= selftest（坐标/编解码/拓扑不变量，不过不发版） =================
// 真实夹具: z16 海洋瓦片 16_54000_39000 原样 data（224字符, 解码后 3 要素）
const FIXTURE_MIN =
	"J4eqHLWdTu3jwlNyjXQXKSpJnpdO7WEnv3QZLzMzycW/dNwEQD8nsftDmfE6K48Vd91fJTcyMDSJENJ4jxW/dBkvMzPJxS1oZ6C2Gls9mfFQJwExmfHKTY8Vd91fJTcyMDSJENJ4jxW/dOV3hRP0G1RmiHZOI1QkJSmZ8a72J7HjwiHTZ6DgDkA/jxVM53fdCjPyCoB0vxS0FU1TLXp+prwPTu133bs5";
function selftest() {
	let pass = 0,
		fail = 0;
	const ok = (cond, msg) => {
		if (cond) pass++;
		else {
			fail++;
			console.error("  FAIL:", msg);
		}
	};
	// 1. 频段分类（bundle tt 表原值边界）
	for (const [id, exp] of [
		[65535, null],
		[65536, "point"],
		[65730, "point"],
		[131071, "point"],
		[131072, "line"],
		[131084, "line"],
		[196607, "line"],
		[196608, "region"],
		[196619, "region"],
		[262143, "region"],
		[262144, "label"],
		[262413, "label"],
		[327679, "label"],
		[327680, "arrow"],
		[393215, "arrow"],
		[393216, null],
	])
		ok(bandOf(id) === exp, `bandOf(${id})=${exp}`);
	// 2. 分类表查组
	for (const [id, exp] of [
		[196619, "area_building"],
		[197120, "area_building"],
		[65730, "poi_restrant"],
		[262415, "label_mainroad"],
		[131084, "road_mainroad"],
		[131336, "road_path"],
		[327701, "arrow"],
		[327680, "arrow"],
		[196965, "raw_196965"],
	])
		ok(groupOf(id) === exp, `groupOf(${id})=${exp}`);
	// 3. 真实夹具解码（防手抄漂移）
	const obj = JSON.parse(txDecode(FIXTURE_MIN));
	ok(obj.ret === 0 && Array.isArray(obj.features) && obj.features.length === 3, `夹具 ret/features (ret=${obj.ret}, n=${(obj.features || []).length})`);
	ok(obj.features[0][0] === 131336 && obj.features[2][0] === 196619 && obj.features[2][2] === 4, `夹具要素 id/楼高`);
	const fx = parseTile(obj, 54000, 39000, 16);
	ok(fx.length === 3, `夹具解析 3 要素 (得 ${fx.length})`);
	const bld = fx.find((f) => f.layer_id === 196619);
	ok(bld && bld.props.height_m === 4 && bld.group === "area_building", `夹具楼高 height_m=4`);
	ok(bld && bld.kind === "polygon", "建筑(region频段)恒为面");
	const gjB = bld ? emitFeature(bld, 16) : null;
	ok(gjB && gjB.geometry.type === "Polygon" && gjB.geometry.coordinates[0].length === 6, "建筑输出 Polygon 且环闭合(5点+首点)");
	ok(bld && bld.parts[0][0][0] === 229 + 54000 * 256 && bld.parts[0][0][1] === 270 + 39000 * 256, `夹具全局像素原点`);
	const r1 = fx.find((f) => f.layer_id === 131336 && f.parts[0].length === 2);
	ok(r1 && r1.kind === "line" && r1.parts[0][1][0] === 188 + 54000 * 256, `夹具 deltaDecode+线型`);
	// 4. txEncode/txDecode 往返（编解码闭环）
	const payload =
		'{"ret":0,"features":[[196619,[229,270,1,-5,3,0,1,2,-4,4],4,"",656015360]]}';
	ok(txDecode(txEncode(payload)) === payload, "txEncode->txDecode 往返一致");
	const payload2 = '{"ret":0,"features":[[262413,[180,257],"\\u590d",339,7001,[473,115,29,28]]]}';
	ok(txDecode(txEncode(payload2)) === payload2, "txEncode 含中文/数组往返");
	// 5. 跨瓦同一要素: 全局像素一致（左瓦负坐标 == 右瓦越界坐标, 同一条线段）
	const synth = {
		ret: 0,
		features: [[131336, [-24, 50, 39, 10], "", 327745503]],
	};
	const synthR = {
		ret: 0,
		features: [[131336, [232, 50, 39, 10], "", 327745503]],
	};
	const a = parseTile(synth, 100, 200, 16)[0];
	const b = parseTile(synthR, 99, 200, 16)[0];
	ok(
		a.parts[0][0][0] === b.parts[0][0][0] &&
			a.parts[0][1][0] === b.parts[0][1][0] &&
			a.parts[0][1][0] - a.parts[0][0][0] === 39,
		"跨瓦全局像素对齐(左瓦-24 == 右瓦232)",
	);
	ok(featureKey(a) === featureKey(b), "跨瓦同要素去重键一致");
	// 6. 去重: 同键合并, 异键保留; _tiles_n 累计
	const m = new Map();
	let dupN = 0;
	for (const f of [a, b, JSON.parse(JSON.stringify(a))]) {
		const k = featureKey(f);
		if (m.has(k)) {
			dupN++;
			m.get(k)._tiles_n++;
		} else {
			f._tiles_n = 1;
			m.set(k, f);
		}
	}
	ok(m.size === 1 && dupN === 2 && m.values().next().value._tiles_n === 3, "去重计数(3->1, _tiles_n=3)");
	// 7. 闭合判定: 环岛转面, 普通道路保持线
	ok(isClosedRing([[10, 10], [20, 10], [20, 20], [10, 20], [10, 10]]) === true, "闭合环");
	ok(isClosedRing([[10, 10], [20, 10], [20, 20], [10, 20]]) === false, "开口环");
	ok(isClosedRing([[10, 10], [20, 10]]) === false, "线段");
	ok(isClosedRing([[10, 10], [20, 10], [10, 10]]) === false, "2 点回头段不算环(面积恒 0, 防退化 Polygon)");
	const roundabout = parseTile(
		{ ret: 0, features: [[131336, [100, 100, 50, 0, 0, 50, -50, 0, 0, -50], "", 327745503]] },
		10,
		10,
		16,
	)[0];
	ok(roundabout.kind === "polygon", "闭合道路 -> polygon");
	// 8. 注记逐字解析
	const lab = parseTile(
		{
			ret: 0,
			features: [
				[
					[262413, [180, 257], "复", 339, 7001, [473, 115, 29, 28]],
					[262413, [193, 252], "兴", 344, 7001, [471, 170, 29, 27]],
					[262413, [206, 248], "东", 344, 7001, [222, 225, 29, 28]],
				],
			],
		},
		5,
		7,
		16,
	);
	ok(lab.length === 3 && lab.every((f) => f.group === "label_secondaryroad" && f.kind === "point"), `注记 3 字 (得 ${lab.length})`);
	ok(lab[0].props.char === "复" && lab[0].props.font === 339 && lab[0].props.anchors[2] === 29, "注记属性(char/font/anchors)");
	ok(lab[2].point[0] === 206 + 5 * 256 && lab[2].point[1] === 248 + 7 * 256, "注记全局像素");
	ok(featureKey(lab[0]) !== featureKey(lab[1]), "注记逐字键区分");
	// 9. POI 点解析（直接坐标非差分）
	const poi = parseTile(
		{ ret: 0, features: [[65730, [94, 196], "麦当劳", "", 6362, [24, 4, 3, 3]]] },
		3,
		4,
		16,
	)[0];
	ok(poi.group === "poi_restrant" && poi.props.name === "麦当劳" && poi.props.style === 6362, "POI 属性");
	ok(poi.point[0] === 94 + 3 * 256 && poi.point[1] === 196 + 4 * 256, "POI 直接坐标");
	// 10. 多 part 线 -> MultiLineString; 多环嵌套洞
	const mp = parseTile(
		{
			ret: 0,
			features: [
				[
					131097,
					[
						[0, 0, 10, 0],
						[50, 50, 10, 5],
					],
					"",
					327745503,
				],
			],
		},
		0,
		0,
		16,
	)[0];
	ok(mp.n_parts === 2, "多 part 识别");
	const gj = emitFeature(mp, 16);
	ok(gj.geometry.type === "MultiLineString" && gj.geometry.coordinates.length === 2, "多 part -> MultiLineString");
	const hole = emitFeature(
		makeFeature("area_building", 196619, {}, [
			[
				[0, 0],
				[100, 0],
				[100, 100],
				[0, 100],
			],
			[
				[40, 40],
				[60, 40],
				[60, 60],
				[40, 60],
			],
		], true, "16_0_0"),
		16,
	);
	ok(hole.geometry.type === "Polygon" && hole.geometry.coordinates.length === 2, "多环嵌套洞(2 rings)");
	ok(nestRings([[[40, 40], [60, 40], [60, 60], [40, 60]], [[0, 0], [100, 0], [100, 100], [0, 100]]]).length === 2, "nestRings 与外环序");
	// 11. WGS-84 输出: 陆家嘴瓦片(16_54886_26776) 全局像素 -> 上海附近
	// 注意: 像素 y 北向上, gy 增大 => 纬度减小; gx 增大 => 经度增大
	const w0 = toWgs([54886 * 256 + 229, 26776 * 256 + 270], 16);
	const w1 = toWgs([54886 * 256 + 233, 26776 * 256 + 271], 16);
	ok(
		w0[0] < w1[0] && w0[1] > w1[1] && w0[0] > 121 && w0[0] < 122 && w0[1] > 31 && w0[1] < 32,
		`全局像素->WGS84 单调且在上海 (${w0.map((v) => v.toFixed(4))} -> ${w1.map((v) => v.toFixed(4))})`,
	);
	// 11b. 夹具海洋瓦片(南太平洋): 只查单调与有限
	const s0 = toWgs([54000 * 256 + 229, 39000 * 256 + 270], 16);
	const s1 = toWgs([54000 * 256 + 233, 39000 * 256 + 271], 16);
	ok(
		s0[0] < s1[0] && s0[1] > s1[1] && Number.isFinite(s0[0]) && Number.isFinite(s0[1]),
		`南太平洋瓦片单调 (${s0.map((v) => v.toFixed(4))})`,
	);
	// 12. GCJ02<->WGS84 往返自洽（非精确互逆, 容差 5m）
	const gw = gcj02ToWgs84(121.4997, 31.2397);
	const back = wgs84ToGcj02(gw[0], gw[1]);
	const dm = Math.hypot((back[0] - 121.4997) * 96000, (back[1] - 31.2397) * 111000);
	ok(dm < 5, `GCJ02 往返 (误差 ${dm.toFixed(2)}m)`);
	ok(Math.abs(gw[0] - 121.4997) > 1e-4, "境内必须发生偏移");
	// 12b. _tLat/_tLon 与 wandergis/coordtransform 金标准逐点一致（防手抄回退:
	//      _tLon 第三项是 sin(lon/3) 不是 sin(lat/3), 抄错会整体偏移数十米）
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
	for (const [x, y] of [[16.475481, -3.77177], [11.3974, 4.9086], [8.2644, -11.8709], [0, 0], [30, 20], [-5.5, 12.25]]) {
		ok(Math.abs(_tLat(x, y) - gTL(x, y)) < 1e-12, `_tLat 金标准 (${x},${y})`);
		ok(Math.abs(_tLon(x, y) - gTN(x, y)) < 1e-12, `_tLon 金标准 (${x},${y})`);
	}
	// 13. 批量分组: 3x3 瓦片 -> 2x2 分批完整覆盖不重不漏（与 main 同逻辑: by/bx 步进）
	const rowW = 3;
	const all = [];
	for (let by = 0; by < 3; by += 2)
		for (let bx = 0; bx < rowW; bx += 2) {
			for (let dy = 0; dy < 2; dy++)
				for (let dx = 0; dx < 2; dx++) {
					const xx = bx + dx,
						yy = by + dy;
					if (xx >= rowW || yy >= 3) continue;
					all.push(xx + "_" + yy);
				}
		}
	ok(all.length === 9 && new Set(all).size === 9, `2x2 分批覆盖 9 块不重不漏 (得 ${all.length})`);
	// 14. 通用拓扑: Union 引擎（重叠 / 分离 / 包含 / 共享边 四种合成用例）
	const sq = (x0, y0, s) => [
		[x0, y0],
		[x0 + s, y0],
		[x0 + s, y0 + s],
		[x0, y0 + s],
	];
	const uOverlap = unionRings([sq(0, 0, 100), sq(50, 0, 100)]);
	ok(uOverlap.length === 1, `Union 重叠正方形 -> 1 环 (得 ${uOverlap.length})`);
	ok(
		Math.abs(uOverlap.reduce((s, r) => s + ringArea(r), 0) - 15000) < 1,
		`Union 重叠面积 = 10000+10000-5000 (得 ${uOverlap.reduce((s, r) => s + ringArea(r), 0).toFixed(1)})`,
	);
	ok(unionRings([sq(0, 0, 10), sq(100, 100, 10)]).length === 2, "Union 分离正方形 -> 2 环");
	const uHole = unionRings([sq(0, 0, 100), sq(20, 20, 10)]);
	ok(uHole.length === 1 && Math.abs(ringArea(uHole[0]) - 10000) < 1, "Union 被包含 -> 1 环且面积不变(不挖洞)");
	const uShare = unionRings([sq(0, 0, 100), sq(100, 0, 100)]);
	ok(uShare.length === 1 && Math.abs(ringArea(uShare[0]) - 20000) < 1, "Union 共享边 -> 1 环面积 20000");
	// 15. 栅格化交集面积 + 严格内点判定
	const ia = interAreaPx(sq(0, 0, 100), sq(50, 0, 100));
	ok(Math.abs(ia - 5000) / 5000 < 0.05, `interAreaPx 重叠 5000px² (得 ${ia.toFixed(1)})`);
	ok(interAreaPx(sq(0, 0, 100), sq(100, 0, 100)) === 0, "interAreaPx 共享边 = 0(贴边不算重叠)");
	ok(strictlyInside([sq(0, 0, 100)], [50, 50]) === true, "strictlyInside 内部点");
	ok(strictlyInside([sq(0, 0, 100)], [0, 50]) === false, "strictlyInside 边界点判否(共享墙不算重叠)");
	ok(strictlyInside([sq(0, 0, 100), sq(40, 40, 20)], [50, 50]) === false, "strictlyInside 洞内判否");
	// 16. 面融合: 同 layer_id+style 真重叠才合, 异 style / 仅贴边 都不合
	const mkPoly = (id, style, ring) => ({ group: "area_park", layer_id: id, props: { style }, kind: "polygon", parts: [ring], tile: "16_0_0" });
	const fSame = fuseAreaGroup([mkPoly(196622, 7, sq(0, 0, 100)), mkPoly(196622, 7, sq(50, 0, 100))]);
	ok(fSame.features.length === 1 && fSame.union === 1, `同 id+style 重叠 -> 融合 1 个 (得 ${fSame.features.length})`);
	ok(fSame.features[0]._seam_merged === 1 && fSame.features[0]._fused_from === 2, "融合标记 _seam_merged/_fused_from");
	ok(Math.abs(ringArea(fSame.features[0].parts[0]) - 15000) < 1, "融合后面积 = 并集");
	const fDiff = fuseAreaGroup([mkPoly(196622, 7, sq(0, 0, 100)), mkPoly(196622, 8, sq(80, 0, 100))]);
	ok(fDiff.features.length === 2 && fDiff.union === 0, "异 style 仅部分重叠(20%)不融合");
	const fContain = fuseAreaGroup([mkPoly(196622, 7, sq(0, 0, 100)), mkPoly(196622, 8, sq(20, 20, 30))]);
	ok(fContain.features.length === 1 && fContain.union === 1, "异 style 近乎整体包含 -> 融合(实测跨瓦异 style 占比 0.88~1.00)");
	const fTouch = fuseAreaGroup([mkPoly(196622, 7, sq(0, 0, 100)), mkPoly(196622, 7, sq(100, 0, 100))]);
	ok(fTouch.features.length === 2 && fTouch.union === 0, "仅贴边(共享边)不融合");
	const fDiffId = fuseAreaGroup([mkPoly(196622, 7, sq(0, 0, 100)), mkPoly(196629, 7, sq(50, 0, 100))]);
	ok(fDiffId.features.length === 2, "异 layer_id 不融合");
	// 17. 残余重叠审计: 同 layer_id 严格互含打 _topo_review, 异 layer_id 打 _topo_overlap, 贴边都不打
	const auA = [mkPoly(196622, 1, sq(0, 0, 100)), mkPoly(196622, 2, sq(20, 20, 30))];
	ok(auditOverlap(auA).review === 2 && auA[0]._topo_review === 1 && auA[1]._topo_review === 1, "同 layer_id 严格互含 -> _topo_review");
	const auD = [mkPoly(196775, 1, sq(0, 0, 100)), mkPoly(196894, 2, sq(20, 20, 30))];
	const auDr = auditOverlap(auD);
	ok(auDr.review === 0 && auDr.overlap === 2 && auD[0]._topo_overlap === 1, "异 layer_id 叠置 -> _topo_overlap(多分类, 非错误)");
	const auB = [mkPoly(1, 1, sq(0, 0, 100)), mkPoly(1, 2, sq(100, 0, 100))];
	ok(auditOverlap(auB).review === 0 && auB[0]._topo_review === undefined, "共享墙相邻 -> 不打标");
	const auC = [mkPoly(1, 1, sq(0, 0, 100)), mkPoly(1, 2, sq(500, 500, 10))];
	ok(auditOverlap(auC).review === 0 && auditOverlap(auC).overlap === 0, "分离面 -> 不打标");
	console.log(`selftest: ${pass} 过 / ${fail} 不过`);
	if (fail) process.exit(1);
}

if (
	process.argv[1] &&
	import.meta.url.endsWith(
		process.argv[1].replace(/\\/g, "/").replace(/^.*\//, ""),
	)
) {
	main();
}
