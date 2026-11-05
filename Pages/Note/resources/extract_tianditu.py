# -*- coding: utf-8 -*-
"""从 OGE frontend_control 信封中提取标准 GeoJSON（RFC 7946）。

输入: shuiti.geojson（含 data: 前缀的 SSE/前端控制报文）
输出: shuiti_clean.geojson（标准 FeatureCollection，WGS84 / CRS84）
"""
import os
import sys

# --- 强制 UTF-8 输出，修复 Windows 终端中文乱码 ---
if sys.platform == "win32":
    try:
        os.system("chcp 65001 > nul")
    except Exception:
        pass
for _s in (sys.stdout, sys.stderr):
    try:
        _s.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

import json
import math
import hashlib
from pathlib import Path

SRC = Path(__file__).with_name("shuiti.geojson")
DST = Path(__file__).with_name("shuiti_clean.geojson")

raw = SRC.read_text(encoding="utf-8")

# 1. 解析 data: 信封，收集所有 FeatureCollection 的 features
features = []
meta_name = None
for line in raw.splitlines():
    line = line.strip()
    if not line.startswith("data:"):
        continue
    payload = line[5:].strip()
    if not payload:
        continue
    obj = json.loads(payload)
    actions = obj.get("actions", [obj])
    for act in actions:
        val = act.get("value") if isinstance(act, dict) else None
        if isinstance(val, dict) and val.get("type") == "FeatureCollection":
            meta_name = val.get("name") or meta_name
            features.extend(val.get("features", []))

print(f"[1] 信封解析: {len(features)} 个 feature, name={meta_name}")

# 2. 逐要素清洗：去连续重复点、闭合环、剔除退化环
M_PER_DEG_LAT = 110574.0


def ring_area_m2(ring, lat0):
    """equirectangular 投影下的鞋带公式面积（平方米）"""
    kx = 111320.0 * math.cos(math.radians(lat0))
    s = 0.0
    for i in range(len(ring) - 1):
        x1, y1 = ring[i][0] * kx, ring[i][1] * M_PER_DEG_LAT
        x2, y2 = ring[i + 1][0] * kx, ring[i + 1][1] * M_PER_DEG_LAT
        s += x1 * y2 - x2 * y1
    return abs(s) / 2.0


def clean_ring(ring):
    out = []
    for pt in ring:
        if not out or pt[:2] != out[-1][:2]:
            out.append([pt[0], pt[1]])
    if out and out[0][:2] != out[-1][:2]:
        out.append(out[0][:2])
    return out


cleaned = []
dropped = 0
for f in features:
    g = f.get("geometry") or {}
    if g.get("type") != "Polygon":
        dropped += 1
        continue
    rings_out = []
    for ring in g.get("coordinates", []):
        r = clean_ring(ring)
        if len(r) >= 4:
            rings_out.append(r)
    if not rings_out:
        dropped += 1
        continue
    lats = [p[1] for r in rings_out for p in r]
    lons = [p[0] for r in rings_out for p in r]
    lat0 = sum(lats) / len(lats)
    area_calc = ring_area_m2(rings_out[0], lat0)
    for hole in rings_out[1:]:
        area_calc -= ring_area_m2(hole, lat0)
    props = dict(f.get("properties") or {})
    cleaned.append(
        {
            "type": "Feature",
            "properties": props,
            "geometry": {"type": "Polygon", "coordinates": rings_out},
            "_area_calc": area_calc,
            "_bbox": (min(lons), min(lats), max(lons), max(lats)),
        }
    )

print(f"[2] 清洗完成: 保留 {len(cleaned)}, 剔除 {dropped}")

# 3. 几何指纹查重
seen = set()
dup = 0
for f in cleaned:
    key = hashlib.md5(
        json.dumps(f["geometry"]["coordinates"], sort_keys=True).encode()
    ).hexdigest()
    if key in seen:
        dup += 1
    seen.add(key)
print(f"[3] 完全重复几何: {dup}")

# 4. 面积属性交叉校验
mism = []
for i, f in enumerate(cleaned):
    pa = f["properties"].get("area_m2")
    ca = f["_area_calc"]
    if pa and abs(ca - pa) / pa > 0.02:
        mism.append((i + 1, round(pa, 2), round(ca, 2), round((ca - pa) / pa * 100, 2)))
print(f"[4] area_m2 与几何重算偏差>2% 的要素: {len(mism)}")
for m in mism[:10]:
    print("    id=%d prop=%.2f calc=%.2f diff=%+.2f%%" % m)

# 5. 写出标准 GeoJSON（RFC 7946：不写 crs 成员）
minx = min(f["_bbox"][0] for f in cleaned)
miny = min(f["_bbox"][1] for f in cleaned)
maxx = max(f["_bbox"][0] for f in cleaned)
maxy = max(f["_bbox"][1] for f in cleaned)

out_features = []
for i, f in enumerate(cleaned, 1):
    props = f["properties"]
    props["id"] = i
    out_features.append(
        {
            "type": "Feature",
            "properties": props,
            "geometry": f["geometry"],
        }
    )

fc = {"type": "FeatureCollection", "features": out_features}
DST.write_text(
    json.dumps(fc, ensure_ascii=False, separators=(",", ":")), encoding="utf-8"
)

total_prop = sum(f["properties"].get("area_m2", 0) for f in cleaned)
total_calc = sum(f["_area_calc"] for f in cleaned)
print(f"[5] 写出: {DST}")
print(f"    要素数: {len(out_features)}")
print(f"    类型分布: {sorted(set(f['properties'].get('type') for f in cleaned))}")
print(f"    面积合计(属性): {total_prop:.2f} m2 | 几何重算: {total_calc:.2f} m2")
print(f"    bbox: [{minx:.6f}, {miny:.6f}, {maxx:.6f}, {maxy:.6f}]")
print(f"    文件大小: {DST.stat().st_size} bytes (原 {SRC.stat().st_size} bytes)")