// 天地图 vts 建筑矢量 -> GeoJSON(WGS84; CGCS2000≈WGS84, 无需纠偏)
//
// zoom可用范围：15-18；16较为合适，18可能存在数据缺失的问题；

// 依据: C:/Users/NEGIAO/Desktop/aaa/analysis 全量逆向(39 个脚本 + 格式报告)。
// 本文件从零重写, 不复用桌面旧版 880 行启发式逻辑(f3 记录流猜测, 已废弃)。
//
// analysis 证据链(2026-10, vts v1.0, 开封河南大学 z=18 双瓦片复现 23 要素):
//   文件 = 前导图层记录(以 file0=0x1a 开头, file1 为取反长度) + 若干标准图层 f3 记录
//   图层检测: 扫描 body 中每个 0x1a, 按 protobuf 读 tag+len, content 必须完整消费,
//     且含 f5=extent 与 f15=version, 即为一个标准图层(见 analysis/03_detect_layers.mjs)
//   Layer 字段(相对标准 MVT 错位):
//     f1=features, f2=name(图层代码), f3=values, f4=keys, f5=extent=4096, f15=version=2
//   Feature 字段: f1=几何容器(命令流, 个别深嵌套 f1{f1{...}} 需递归),
//     f2=几何类型(1=线, 2=面, 4=点), f3=tags(packed uint32 [keyIdx,valIdx,...])
//   Value 字段: f1 wt2=字符串(UTF-8); f3 wt5=float LE(建筑高度 h)
//   几何命令流: MoveTo=2 / LineTo=3 / ClosePath=7, count=整数>>>3,
//     zigzag 差分累加, 有效坐标恒在 [-82,4178](含 82 缓冲, 越界即误读)
//   取反(XOR 0xff): 前导图层 feature 容器开头 3 字节(file2/3/4)必反;
//     另有固定位置 file99 静默取反(只改一个字节语义值, 不破坏结构),
//     必须翻(214303: BI 层 Z5 key tag 0x22→0xdd; 214304: AA 层 A6 值 '2' 0x32→0xcd),
//     否则 CE 层 tags 错位、整瓦少楼
//   图层含义: BI=特殊POI点(前导) / BV=行政区划面 / CE=建筑面(含 elemid/A6/h/floor) /
//     CK=地表覆盖面 / AA=线要素 / respt=楼号标注点(elemid/lzh)
//   建筑高度规律: h(米) = floor(层数) × 3(100% 自洽); vts 仅约 1/3 建筑给高度, 其余源头缺失
//
// 用法(输入输出统一 WGS-84):
//   node tdt_building_to_geojson.mjs --bbox minLng,minLat,maxLng,maxLat [--zoom 18] [--tk TK] --out out.geojson
//   node tdt_building_to_geojson.mjs --center 114.302,34.822 --delta 0.004 --zoom 18 --out hn_tdt.geojson
// 前端复用: import { decodeTdtTile, mergeTdtBuildings } from './tdt_building_to_geojson.mjs'
// (纯 ESM; decode 内部用 Node Buffer, 浏览器用时换 TextDecoder/DataView 等价写法即可)
import fs from 'fs';

const DEMO_TK = 'b88bfb160c81dab8d9d20aaa74846360';
const REFERER = 'https://map.tianditu.gov.cn/';
const UA = 'Mozilla/5.0 Windows NT 10.0; Win64; x64 AppleWebKit/537.36 Chrome/126.0 Safari/537.36';
const EXT = 4096;

// ---------- pk(官网 bundle 移植, lib_fetch.mjs 原样, round-trip 已验证) ----------
function pkEncode(x, y, z) {
  let n = '';
  for (let a = z; a >= 0; --a) {
    const r = 1 << a;
    let o = 0;
    if (x & r) o |= 1;
    if (y & r) o |= 2;
    n += o;
  }
  let o = n.split('').reverse().join('');
  const S = '9876';
  const E = (e, t, r) => e.substring(0, t) + r + e.substring(t + 1);
  for (let a = 0; a < S.length; a++) {
    const e = Number(S[a]);
    if (e >= o.length) continue;
    o = E(o, e, 1 + Number(o.substring(e, e + 1)));
  }
  let t = '', r = '', nn = 0;
  for (let q = 0; q < o.length; q++) {
    const i = 3 * Number(o[q]);
    let a = t.length - 1;
    const s = String.fromCharCode(97 + i);
    if (s === r) { nn++; if (nn === 1) a++; else if (nn > 10) a--; t = t.slice(0, a) + nn; }
    else { t += s; r = s; nn = 0; }
  }
  return t;
}

// ---------- 最小 protobuf reader ----------
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

// 顶层字段切分(严格, 非法即停)
function splitFields(buf) {
  const out = [];
  const r = R_(buf);
  while (r.pos < buf.length) {
    const tag = r.u32();
    if (tag < 0) break;
    const fl = tag >>> 3, wt = tag & 7;
    if (![0, 1, 2, 5].includes(wt)) break;
    if (wt === 0) { const num = r.u32(); if (num < 0) break; out.push({ fl, wt, num }); continue; }
    if (wt === 1) { out.push({ fl, wt, start: r.pos }); r.pos += 8; continue; }
    if (wt === 5) { out.push({ fl, wt, start: r.pos }); r.pos += 4; continue; }
    const L = r.u32();
    if (L < 0 || L > buf.length - r.pos) break;
    out.push({ fl, wt, L, start: r.pos });
    r.pos += L;
  }
  return out;
}

// 完整可消费顶层解析(图层检测用: 必须消费到结尾)
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

// ---------- 图层检测 ----------
// 扫描 body 每个 0x1a(f3 tag), content 完整消费且含 f5 + f15 即为标准图层
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
    layers.push({ bodyPos: i, content, L });
  }
  return layers;
}

// ---------- 几何命令流 ----------
// 返回 paths: [{points:[[x,y]...], closed:bool}], 无法解析返回 null
function parseCommands(buf) {
  const r = R_(buf);
  const paths = [];
  let cur = null;
  let left = 0, x = 0, y = 0, seenCmd = false;
  while (r.pos < buf.length) {
    if (left <= 0) {
      const c = r.u32();
      if (c < 0) return null;
      const id = c & 7;
      left = c >>> 3;
      if (![2, 3, 7].includes(id) || left > 5000) return null;
      if (!seenCmd && id !== 2) return null;
      seenCmd = true;
      if (id === 2) { if (cur) paths.push(cur); cur = { points: [], closed: false }; }
      if (id === 7) {
        if (!cur) return null;
        if (cur.points.length < 2) return null;
        cur.points.push(cur.points[0]);
        cur.closed = true;
        paths.push(cur);
        cur = null;
        continue;
      }
    }
    left--;
    const a = r.u32(), b = r.u32();
    if (a < 0 || b < 0) return null;
    x += zig(a); y += zig(b);
    if (x < -1000 || x > 5100 || y < -1000 || y > 5100) return null;
    if (!cur) return null;
    cur.points.push([x, y]);
  }
  if (!seenCmd) return null;
  if (cur) paths.push(cur);
  return paths;
}

function findCommands(buf, depth = 0) {
  const direct = parseCommands(buf);
  if (direct && direct.length) return direct;
  if (depth >= 8) return null;
  for (const f of splitFields(buf)) {
    if (f.fl !== 1 || f.wt !== 2) continue;
    const nested = findCommands(buf.slice(f.start, f.start + f.L), depth + 1);
    if (nested && nested.length) return nested;
  }
  return null;
}

// ---------- Value 解析(f1 string / f3 float) ----------
function parseValue(buf) {
  const fields = splitFields(buf);
  let value = null;
  for (const f of fields) {
    if (f.fl === 1 && f.wt === 2) {
      const s = buf.slice(f.start, f.start + f.L);
      const st = s.toString('utf8');
      if (!st.includes('�') && Buffer.from(st, 'utf8').equals(s)) value = st;
      else value = { __raw_hex: s.toString('hex') };
    } else if (f.fl === 3 && f.wt === 5) {
      value = buf.readFloatLE(f.start);
    } else if (f.fl === 3 && f.wt === 1) {
      value = buf.readDoubleLE(f.start);
    }
  }
  return value;
}

// ---------- tags 解码(packed uint32 数组) ----------
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

// ---------- Feature 解析(f1 几何容器 + f2 类型 + f3 tags) ----------
function parseFeature(fbuf) {
  const fields = splitFields(fbuf);
  const pathGroups = [];
  let type = null;
  let tagsRaw = null;
  for (const f of fields) {
    if (f.fl === 1 && f.wt === 2) {
      const sub = fbuf.slice(f.start, f.start + f.L);
      const cmds = findCommands(sub);
      if (cmds && cmds.length) pathGroups.push(cmds);
    } else if (f.fl === 2 && f.wt === 0) {
      type = f.num;
    } else if (f.fl === 3 && f.wt === 2) {
      tagsRaw = fbuf.slice(f.start, f.start + f.L);
    }
  }
  const tags = tagsRaw ? parseTags(tagsRaw) : [];
  return { pathGroups, type, tags };
}

// ---------- Layer 解析 ----------
function parseLayer(layer) {
  const c = layer.content;
  const fields = splitFields(c);
  let name = '', extent = 4096, version = 2;
  const keys = [], values = [], features = [];
  for (const f of fields) {
    if (f.fl === 2 && f.wt === 2) name = c.slice(f.start, f.start + f.L).toString('utf8');
    else if (f.fl === 5 && f.wt === 0) extent = f.num;
    else if (f.fl === 15 && f.wt === 0) version = f.num;
    else if (f.fl === 4 && f.wt === 2) keys.push(c.slice(f.start, f.start + f.L).toString('utf8'));
    else if (f.fl === 3 && f.wt === 2) values.push(parseValue(c.slice(f.start, f.start + f.L)));
    else if (f.fl === 1 && f.wt === 2) features.push(parseFeature(c.slice(f.start, f.start + f.L)));
  }
  return { name, extent, version, keys, values, features };
}

function featureProperties(layer, feature) {
  const props = {};
  for (let i = 0; i + 1 < feature.tags.length; i += 2) {
    const k = feature.tags[i], v = feature.tags[i + 1];
    if (k < layer.keys.length && v < layer.values.length) {
      props[layer.keys[k]] = layer.values[v];
    }
  }
  return props;
}

function validLabel(value) {
  if (typeof value !== 'string') return null;
  const text = value.trim();
  if (!text || text.includes('\uFFFD')) return null;
  return text;
}

function labelFromProperties(props) {
  for (const key of ['lzh', 'name', 'label', 'title', 'Z5']) {
    const label = validLabel(props[key]);
    if (label) return label;
  }
  return null;
}

// ---------- 瓦片坐标 -> WGS84 经纬度(CGCS2000≈WGS84 直接输出) ----------
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

// ---------- 单瓦片解码: 只取 layer=CE 的建筑要素 ----------
// file99 必须翻(analysis/31 原样): 翻后 tags 才能对齐, 否则整瓦少楼
export function decodeTdtTile(buf, tx, ty, tz) {
  const raw = Buffer.from(buf);
  if (raw.length > 99) raw[99] = raw[99] ^ 0xff;
  const body = raw.slice(5);
  const out = [];
  const layerRecs = detectLayers(body);

  for (const layerRec of layerRecs) {
    const layer = parseLayer(layerRec);
    if (layer.name !== 'CE') continue;
    for (const feature of layer.features) {
      if (feature.type !== 2) continue;
      const props = featureProperties(layer, feature);
      const id = props.elemid;
      if (typeof id !== 'string' || !/^\d{14}$/.test(id)) continue;
      // The source occasionally omits ClosePath for a CE polygon. The
      // reverse-engineering parser keeps those paths, so do not drop the
      // feature here; close the ring only when converting to GeoJSON.
      const paths = feature.pathGroups.flat().filter((p) => p.points.length >= 3);
      if (!paths.length) continue;
      let ok = true;
      for (const p of paths) {
        for (const [px, py] of p.points) {
          if (px < -82 || px > 4178 || py < -82 || py > 4178) { ok = false; break; }
        }
        if (!ok) break;
      }
      if (!ok) continue;
      out.push({
        id,
        h: typeof props.h === 'number' ? props.h : null,
        fl: props.floor ?? null,
        A6: props.A6 ?? null,
        rings: paths.map((p) => p.points),
        tx, ty, tz,
      });
    }
  }

  // respt 楼号挂接(同 elemid)
  const names = new Map();
  for (const layerRec of layerRecs) {
    const layer = parseLayer(layerRec);
    if (layer.name !== 'respt') continue;
    for (const feature of layer.features) {
      const props = featureProperties(layer, feature);
      const label = labelFromProperties(props);
      if (props.elemid && label) names.set(String(props.elemid), label);
    }
  }
  for (const b of out) {
    b.name = labelFromProperties({ ...b, name: names.get(b.id) }) ?? null;
  }
  return out;
}

// ---------- 跨瓦合并: 核心范围裁剪 + 按 elemid Union ----------
const GEOM_EPS = 1e-7;
const TILE_SNAP = 1;
const SEAM_EPS = 2;

function samePoint(a, b) {
  return Math.abs(a[0] - b[0]) <= GEOM_EPS && Math.abs(a[1] - b[1]) <= GEOM_EPS;
}

function globalRing(ring, tx, ty) {
  return ring.map(([x, y]) => [
    Math.round((tx * EXT + x) / TILE_SNAP) * TILE_SNAP,
    Math.round((ty * EXT + y) / TILE_SNAP) * TILE_SNAP,
  ]);
}

function globalTileToLngLat(x, y, tz) {
  const n = 2 ** tz;
  const gx = x / EXT;
  const gy = y / EXT;
  return [
    (gx / n) * 360 - 180,
    (Math.atan(Math.sinh(Math.PI * (1 - (2 * gy) / n))) * 180) / Math.PI,
  ];
}

function clipRingToTile(ring) {
  let out = ring.slice();
  const limits = [
    [0, (p) => p[0] >= 0],
    [1, (p) => p[0] <= EXT],
    [2, (p) => p[1] >= 0],
    [3, (p) => p[1] <= EXT],
  ];
  for (const [side, inside] of limits) {
    if (!out.length) break;
    const next = [];
    for (let i = 0; i < out.length; i++) {
      const a = out[i], b = out[(i + 1) % out.length];
      const ia = inside(a), ib = inside(b);
      if (ia !== ib) {
        const axis = side < 2 ? 0 : 1;
        const bound = side === 0 || side === 2 ? 0 : EXT;
        const t = (bound - a[axis]) / (b[axis] - a[axis]);
        next.push([
          a[0] + (b[0] - a[0]) * t,
          a[1] + (b[1] - a[1]) * t,
        ]);
      }
      if (ib) next.push(b);
    }
    out = next;
  }
  if (out.length && !samePoint(out[0], out[out.length - 1])) out.push(out[0]);
  return out;
}

function touchesTileSeam(ring) {
  return ring.some(([x, y]) =>
    x <= SEAM_EPS || x >= EXT - SEAM_EPS ||
    y <= SEAM_EPS || y >= EXT - SEAM_EPS
  );
}

function pointInRings(rings, p) {
  let inside = false;
  for (const ring of rings) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const a = ring[i], b = ring[j];
      if ((a[1] > p[1]) !== (b[1] > p[1]) &&
        p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) {
        inside = !inside;
      }
    }
  }
  return inside;
}

function addSplitParameter(list, value) {
  if (value > GEOM_EPS && value < 1 - GEOM_EPS) list.push(value);
}

function splitIntersection(a, b, c, d) {
  const rx = b[0] - a[0], ry = b[1] - a[1];
  const sx = d[0] - c[0], sy = d[1] - c[1];
  const qx = c[0] - a[0], qy = c[1] - a[1];
  const den = rx * sy - ry * sx;
  const result = [[], []];
  if (Math.abs(den) > GEOM_EPS) {
    const t = (qx * sy - qy * sx) / den;
    const u = (qx * ry - qy * rx) / den;
    addSplitParameter(result[0], t);
    addSplitParameter(result[1], u);
    return result;
  }
  if (Math.abs(qx * ry - qy * rx) > GEOM_EPS) return result;
  const rr = rx * rx + ry * ry;
  const ss = sx * sx + sy * sy;
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

function unionRings(inputRings) {
  const rings = inputRings.map((ring) => {
    const out = [];
    for (const point of ring) {
      const snapped = [
        Math.round(point[0] / TILE_SNAP) * TILE_SNAP,
        Math.round(point[1] / TILE_SNAP) * TILE_SNAP,
      ];
      if (!out.length || !samePoint(out[out.length - 1], snapped)) out.push(snapped);
    }
    if (out.length > 1 && samePoint(out[0], out[out.length - 1])) out.pop();
    return out;
  }).filter((ring) => ring.length >= 3);
  const source = [];
  for (const ring of rings) {
    for (let i = 0; i < ring.length; i++) {
      source.push({ a: ring[i], b: ring[(i + 1) % ring.length], cuts: [0, 1] });
    }
  }
  for (let i = 0; i < source.length; i++) {
    for (let j = i + 1; j < source.length; j++) {
      const [a, b] = splitIntersection(source[i].a, source[i].b, source[j].a, source[j].b);
      source[i].cuts.push(...a);
      source[j].cuts.push(...b);
    }
  }
  const pointKey = (p) =>
    `${Math.round(p[0] / TILE_SNAP)},${Math.round(p[1] / TILE_SNAP)}`;
  const boundary = [];
  for (const edge of source) {
    const cuts = [...new Set(edge.cuts.sort((a, b) => a - b))];
    for (let i = 0; i + 1 < cuts.length; i++) {
      const t0 = cuts[i], t1 = cuts[i + 1];
      const a = [
        edge.a[0] + (edge.b[0] - edge.a[0]) * t0,
        edge.a[1] + (edge.b[1] - edge.a[1]) * t0,
      ];
      const b = [
        edge.a[0] + (edge.b[0] - edge.a[0]) * t1,
        edge.a[1] + (edge.b[1] - edge.a[1]) * t1,
      ];
      const dx = b[0] - a[0], dy = b[1] - a[1], length = Math.hypot(dx, dy);
      if (length <= GEOM_EPS) continue;
      const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      const delta = Math.min(0.01, length / 100);
      const left = [mid[0] - (dy / length) * delta, mid[1] + (dx / length) * delta];
      const right = [mid[0] + (dy / length) * delta, mid[1] - (dx / length) * delta];
      const leftInside = pointInRings(rings, left);
      const rightInside = pointInRings(rings, right);
      if (leftInside === rightInside) continue;
      const start = leftInside ? a : b;
      const end = leftInside ? b : a;
      boundary.push({ a: start, b: end, ak: pointKey(start), bk: pointKey(end) });
    }
  }
  const unique = new Map();
  for (const edge of boundary) {
    const forward = `${edge.ak}>${edge.bk}`;
    const reverse = `${edge.bk}>${edge.ak}`;
    if (unique.has(reverse)) unique.delete(reverse);
    else if (!unique.has(forward)) unique.set(forward, edge);
  }
  const edges = [...unique.values()];
  const outgoing = new Map();
  for (const edge of edges) {
    if (!outgoing.has(edge.ak)) outgoing.set(edge.ak, []);
    outgoing.get(edge.ak).push(edge);
  }
  const ringsOut = [];
  for (const first of edges) {
    if (first.used) continue;
    first.used = true;
    const ring = [first.a, first.b];
    let previous = first.a;
    let current = first.b;
    while (!samePoint(current, ring[0])) {
      const candidates = (outgoing.get(pointKey(current)) || []).filter((edge) => !edge.used);
      if (!candidates.length) break;
      const incoming = Math.atan2(current[1] - previous[1], current[0] - previous[0]);
      candidates.sort((a, b) => {
        const turn = (edge) => {
          const angle = Math.atan2(edge.b[1] - edge.a[1], edge.b[0] - edge.a[0]);
          return (angle - incoming + Math.PI * 2) % (Math.PI * 2);
        };
        return turn(a) - turn(b);
      });
      const next = candidates[0];
      next.used = true;
      previous = current;
      current = next.b;
      ring.push(current);
      if (ring.length > edges.length + 1) break;
    }
    if (samePoint(current, ring[0]) && ring.length >= 4) {
      const cleaned = [];
      for (const point of ring) {
        if (!cleaned.length || !samePoint(cleaned[cleaned.length - 1], point)) {
          cleaned.push(point);
        }
      }
      if (!samePoint(cleaned[0], cleaned[cleaned.length - 1])) {
        cleaned.push(cleaned[0]);
      }
      if (cleaned.length >= 4) ringsOut.push(cleaned);
    }
  }
  return ringsOut;
}

export function mergeTdtBuildings(decodedList, lat0) {
  const byId = new Map();
  for (const b of decodedList) {
    const key = b.id;
    if (!byId.has(key)) {
      byId.set(key, {
        parts: [],
        tileKeys: new Set(),
        touchesSeam: false,
        h: b.h,
        fl: b.fl,
        A6: b.A6,
        name: b.name,
      });
    }
    const e = byId.get(key);
    for (const ring of b.rings || []) {
      if (ring.length < 4) continue;
      const clipped = clipRingToTile(ring);
      if (clipped.length >= 4) {
        e.parts.push({ ring: clipped, tx: b.tx, ty: b.ty, tz: b.tz });
        e.tileKeys.add(`${b.tx},${b.ty},${b.tz}`);
        e.touchesSeam = e.touchesSeam || touchesTileSeam(clipped);
      }
    }
    if (b.h != null && e.h == null) e.h = b.h;
    if (b.fl != null && e.fl == null) e.fl = b.fl;
    if (b.name != null && e.name == null) e.name = b.name;
  }

  const toLL = (ring, tx, ty, tz) => {
    const ll = ring.map(([px, py]) => pointToLngLat(px, py, tx, ty, tz));
    if (ll.length && (ll[0][0] !== ll[ll.length - 1][0] || ll[0][1] !== ll[ll.length - 1][1])) {
      ll.push(ll[0]);
    }
    return ll;
  };

  const feats = [];
  for (const [key, e] of byId) {
    if (!e.parts.length) continue;
    const id = key;
    const globalRings = e.parts.map((p) => globalRing(p.ring, p.tx, p.ty));
    const needsUnion =
      e.parts.length > 1 &&
      e.tileKeys.size > 1 &&
      e.touchesSeam;
    let mergedRings = globalRings;
    if (needsUnion) {
      try { mergedRings = unionRings(globalRings); }
      catch (error) { console.error(`建筑 ${id} Union 失败: ${error.message}`); }
      if (!mergedRings.length) mergedRings = globalRings;
    }
    const polys = mergedRings.map((ring) => [
      ring.map(([x, y]) => globalTileToLngLat(x, y, e.parts[0].tz)),
    ]);
    if (!polys.length) continue;
    const props = { elemid: id };
    if (e.h != null && e.h > 0) props.height_m = e.h;
    if (e.fl != null) props.floors = Number(e.fl);
    if (e.name != null) props.name = e.name;
    feats.push({
      type: 'Feature',
      properties: props,
      geometry: { type: polys.length > 1 ? 'MultiPolygon' : 'Polygon', coordinates: polys.length > 1 ? polys : polys[0] },
    });
  }

  // 残余重叠只打标不动刀
  const bboxOf = (r) => {
    let a = 1e18, b = -1e18, c = 1e18, d = -1e18;
    for (const p of r) { if (p[0] < a) a = p[0]; if (p[0] > b) b = p[0]; if (p[1] < c) c = p[1]; if (p[1] > d) d = p[1]; }
    return [a, c, b, d];
  };
  const pip = (poly, x, y) => {
    let ins = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) ins = !ins;
    }
    return ins;
  };
  const KM2 = 111320 * 111320 * Math.cos(((lat0 || 34.8) * Math.PI) / 180);
  const parts = [];
  feats.forEach((f, fi) => {
    const gs = f.geometry.type === 'Polygon' ? [f.geometry.coordinates[0]] : f.geometry.coordinates.map((p) => p[0]);
    gs.forEach((r) => parts.push({ fi, ring: r.slice(0, -1), id: String(f.properties.elemid) }));
  });
  const review = new Map();
  const REVIEW_CELL = 0.0002;
  const grid = new Map();
  const cellRange = (min, max) => [
    Math.floor(min / REVIEW_CELL),
    Math.floor(max / REVIEW_CELL),
  ];
  parts.forEach((part, index) => {
    const [x1, y1, x2, y2] = bboxOf(part.ring);
    const [cx1, cx2] = cellRange(x1, x2);
    const [cy1, cy2] = cellRange(y1, y2);
    for (let cx = cx1; cx <= cx2; cx++) {
      for (let cy = cy1; cy <= cy2; cy++) {
        const cell = `${cx},${cy}`;
        if (!grid.has(cell)) grid.set(cell, []);
        grid.get(cell).push(index);
      }
    }
  });
  const checkedPairs = new Set();
  for (const indexes of grid.values()) {
    for (let ai = 0; ai < indexes.length; ai++) {
      for (let bi = ai + 1; bi < indexes.length; bi++) {
        const i = indexes[ai], j = indexes[bi];
        const pairKey = i < j ? `${i}:${j}` : `${j}:${i}`;
        if (checkedPairs.has(pairKey)) continue;
        checkedPairs.add(pairKey);
      const A = parts[i], B = parts[j];
      if (A.id === B.id) continue;
      const [x1, y1, x2, y2] = bboxOf(A.ring);
      const [u1, v1, u2, v2] = bboxOf(B.ring);
      const a = Math.max(x1, u1), b = Math.min(x2, u2), c = Math.max(y1, v1), d = Math.min(y2, v2);
      if (a >= b || c >= d) continue;
      const step = Math.min((b - a) / 8, (d - c) / 8, 0.00002);
      let hit = 0, tot = 0;
      for (let x = a + step / 2; x < b; x += step) {
        for (let y = c + step / 2; y < d; y += step) {
          tot++;
          if (pip(A.ring, x, y) && pip(B.ring, x, y)) hit++;
        }
      }
      if (!tot) continue;
      const ia = (hit / tot) * (b - a) * (d - c) * KM2;
      if (ia > 2) {
        if (!review.has(A.fi)) review.set(A.fi, []);
        if (!review.has(B.fi)) review.set(B.fi, []);
        review.get(A.fi).push(`${B.id}~${ia.toFixed(0)}`);
        review.get(B.fi).push(`${A.id}~${ia.toFixed(0)}`);
      }
      }
    }
  }
  for (const [fi, arr] of review) {
    feats[fi].properties.topo_review = `与[${[...new Set(arr)].join(',')}]存在源生重叠(多为裙楼塔楼同框双画), 请人工确认`;
  }
  return {
    type: 'FeatureCollection',
    crs: {
      type: 'name',
      properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
    },
    features: feats,
  };
}

// ---------- 通用 ----------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function parseArgs() {
  const a = process.argv.slice(2), o = { zoom: 18, tk: DEMO_TK };
  for (let i = 0; i < a.length; i += 2) o[a[i].replace(/^--/, '')] = a[i + 1];
  if (o.center && !o.bbox) {
    const [cLng, cLat] = o.center.split(',').map(Number);
    const d = Number(o.delta || 0.004);
    o.bbox = `${cLng - d},${cLat - d},${cLng + d},${cLat + d}`;
  }
  if (!o.bbox || !o.out) {
    console.error('用法: node tdt_building_to_geojson.mjs --bbox minLng,minLat,maxLng,maxLat [--zoom 18] [--tk TK] --out out.geojson');
    process.exit(1);
  }
  return o;
}

// ---------- 主流程 ----------
async function main() {
  const o = parseArgs();
  const [minLng, minLat, maxLng, maxLat] = o.bbox.split(',').map(Number);
  const z = Number(o.zoom);
  const [x0, y1] = lngLatToXyz(minLng, minLat, z);
  const [x1, y0] = lngLatToXyz(maxLng, maxLat, z);
  const tiles = [];
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) tiles.push([x, y]);
  console.log(`bbox ${o.bbox} z=${z} 瓦片 x:${x0}-${x1} y:${y0}-${y1} 共 ${tiles.length} 块`);
  const decoded = [];
  let bi = 0;
  for (const [x, y] of tiles) {
    bi++;
    const pk = pkEncode(x, y, z);
    const host = `tile${(x + y) % 3}.tianditu.gov.cn`;
    const url = `https://${host}/vts?t=vt&pk=${pk}&tk=${o.tk}&v=1.0`;
    let buf = null;
    for (let retry = 0; retry < 3; retry++) {
      try {
        const r = await fetch(url, { headers: { Referer: REFERER, 'User-Agent': UA } });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        buf = Buffer.from(await r.arrayBuffer());
        break;
      } catch (e) {
        if (retry === 2) console.error(` tile ${x}_${y} 失败: ${e.message}`);
        else await sleep(2000);
      }
    }
    if (!buf) continue;
    try {
      const recs = decodeTdtTile(buf, x, y, z);
      decoded.push(...recs);
      if (bi % 10 === 0 || bi === tiles.length) console.log(` ${bi}/${tiles.length} tiles, 建筑 ${decoded.length}`);
    } catch (e) { console.error(` tile ${x}_${y} 解析失败: ${e.message}`); }
    await sleep(800);
  }
  const fc = mergeTdtBuildings(decoded, (minLat + maxLat) / 2);
  fs.writeFileSync(o.out, JSON.stringify(fc, null, 1));
  const withH = fc.features.filter((x) => x.properties.height_m != null).length;
  const withName = fc.features.filter((x) =>
    typeof x.properties.name === 'string' && x.properties.name.length > 0
  ).length;
  console.log(`完成: ${fc.features.length} 栋(其中带高度 ${withH} 栋，带名称 ${withName} 栋) -> ${o.out}`);
}

const __isCli = typeof process !== 'undefined' && !!process.argv?.[1] &&
  String(process.argv[1]).replace(/\\/g, '/').endsWith('tdt_building_to_geojson.mjs');
if (__isCli) main();
export { pkEncode, pointToLngLat, lngLatToXyz };
