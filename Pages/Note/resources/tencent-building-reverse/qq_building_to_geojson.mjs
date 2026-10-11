// 从 lbs.qq.com/getPoint 同款接口批量解析腾讯建筑白模 -> GeoJSON
// 用法(输入输出统一 WGS-84):
//   node qq_building_to_geojson.mjs --bbox 108.416,27.047,108.434,27.060 --zoom 18 --out zhenyuan.geojson
//   node qq_building_to_geojson.mjs --center 108.425,27.054 --delta 0.009 --zoom 18 --out zhenyuan.geojson
// 原理: 复用 getPoint 页公用 key 的思路, 直接请求 rt*.map.gtimg.com/tile 批量矢量接口,
// 返回 {datas:[{data: base64+混淆}]} , 本地解码后取 id==196619 (et) 的面, f[2] 即楼高(米),
// 坐标为瓦片内差分像素, 累加后按 slippy map 转 GCJ02, 再经 gcj02ToWgs84 直接输出 WGS-84。
// GCJ-02 转换复用 WebGIS-Dev/frontend/src/domains/common/data-import/crs/coordTransform.js
// (与 wandergis/coordtransform 同算法)。输入 bbox/center 按 WGS-84 理解, 程序内部先转回
// GCJ-02 再算瓦片(瓦片按火星坐标编号)。
import fs from 'fs';

const VERSION = 2268; // https://confinfo.map.qq.com/confinfo 当前 version, 变了改这里
const BUILDING_ID = 196619; // gljs 源码 et, 写死的楼块图层 id
const TILE_SIZE = 256;
const ALPH = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

// ---------- 解码: gljs 55722 模块原样移植 ----------
function stripPad(t){ return 64===ALPH.indexOf(t.charAt(t.length-1))?t.substring(0,t.length-1):t; }
function rot(t,e){ return ((t>>8-e)&255)|((t<<e)&255); }
function b64(t){
  if(!t) return [];
  t=stripPad(t); t=stripPad(t);
  const c=parseInt(t.length/4*3,10); const f=[];
  t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");
  let u=0;
  for(let d=0; d<c; d+=3){
    const a=ALPH.indexOf(t.charAt(u++));
    const s=ALPH.indexOf(t.charAt(u++));
    const h=ALPH.indexOf(t.charAt(u++));
    const l=ALPH.indexOf(t.charAt(u++));
    f.push((a<<2)|(s>>4));
    if(64!==h) f.push(((15&s)<<4)|(h>>2));
    if(64!==l) f.push(((3&h)<<6)|l);
  }
  return f;
}
function txDecode(t){
  const b=b64(t); const out=[];
  for(let n=0;n<b.length;n+=2){
    let o=b[n], r=(n+1<b.length)?b[n+1]:0;
    for(let l=0;l<3;l++){ const f=rot(r,2)^(rot(r,1)&rot(r,3)); const nx=r, ny=(o^f)&255; o=nx; r=ny; }
    out.push(o); out.push(r);
  }
  let s2="";
  for(let i=0;i<out.length;){
    const nn=out[i];
    if(nn<128){ s2+=String.fromCharCode(nn); i++; }
    else if(nn>191&&nn<224){ s2+=String.fromCharCode(((31&nn)<<6)|(63&out[i+1])); i+=2; }
    else { s2+=String.fromCharCode(((15&nn)<<12)|((63&out[i+1])<<6)|(63&out[i+2])); i+=3; }
  }
  return s2.substring(0, s2.lastIndexOf("}")+1);
}
// ---------- 坐标 ----------
function lngLatToXyz(lng,lat,z){
  const n=Math.pow(2,z);
  const x=Math.floor((lng+180)/360*n);
  const r=lat*Math.PI/180;
  const y=Math.floor((1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*n);
  return [x,y];
}
function xyzToLngLatPx(gx,gy,z){
  const n=Math.pow(2,z)*TILE_SIZE;
  const lng=gx/n*360-180;
  const lat=Math.atan(Math.sinh(Math.PI*(1-2*gy/n)))*180/Math.PI;
  return [lng,lat];
}
function deltaDecode(arr){
  const pts=[]; let x=0,y=0;
  for(let i=0;i<arr.length;i+=2){
    if(i===0){ x=arr[0]; y=arr[1]; } else { x+=arr[i]; y+=arr[i+1]; }
    pts.push([x,y]);
  }
  return pts;
}
// ---------- GCJ-02 -> WGS-84 ----------
// 复用 WebGIS-Dev/frontend/src/domains/common/data-import/crs/coordTransform.js
// （与 wandergis/coordtransform 同算法）：腾讯瓦片是火星坐标，输出统一转 WGS-84。
const _PI=Math.PI, _A=6378245.0, _EE=0.00669342162296594323;
function _outOfChina(lon,lat){ return lon<72.004||lon>137.8347||lat<0.8293||lat>55.8271; }
function _tLat(lon,lat){
  let r=-100+2*lon+3*lat+0.2*lat*lat+0.1*lon*lat+0.2*Math.sqrt(Math.abs(lon));
  r+=((20*Math.sin(6*lon*_PI)+20*Math.sin(2*lon*_PI))*2)/3;
  r+=((20*Math.sin(lat*_PI)+40*Math.sin((lat/3)*_PI))*2)/3;
  r+=((160*Math.sin((lat/12)*_PI)+320*Math.sin((lat*_PI)/30))*2)/3;
  return r;
}
function _tLon(lon,lat){
  let r=300+lon+2*lat+0.1*lon*lon+0.1*lon*lat+0.1*Math.sqrt(Math.abs(lon));
  r+=((20*Math.sin(6*lon*_PI)+20*Math.sin(2*lon*_PI))*2)/3;
  r+=((20*Math.sin(lon*_PI)+40*Math.sin((lon/3)*_PI))*2)/3;
  r+=((150*Math.sin((lon/12)*_PI)+300*Math.sin((lon/30)*_PI))*2)/3;
  return r;
}
function gcj02ToWgs84(lon,lat){
  if(!Number.isFinite(lon)||!Number.isFinite(lat)) return [lon,lat];
  if(_outOfChina(lon,lat)) return [lon,lat];
  const dLat=_tLat(lon-105,lat-35), dLon=_tLon(lon-105,lat-35);
  const rad=lat/180*_PI;
  let m=Math.sin(rad); m=1-_EE*m*m;
  const sq=Math.sqrt(m);
  const oLat=(dLat*180)/((( _A*(1-_EE))/(m*sq))*_PI);
  const oLon=(dLon*180)/((_A/sq)*Math.cos(rad)*_PI);
  return [lon-oLon, lat-oLat];
}
// 输入 bbox 是 WGS-84, 取数前先转回 GCJ-02(瓦片按火星坐标编号)
function wgs84ToGcj02(lon,lat){
  if(!Number.isFinite(lon)||!Number.isFinite(lat)) return [lon,lat];
  if(_outOfChina(lon,lat)) return [lon,lat];
  const dLat=_tLat(lon-105,lat-35), dLon=_tLon(lon-105,lat-35);
  const rad=lat/180*_PI;
  let m=Math.sin(rad); m=1-_EE*m*m;
  const sq=Math.sqrt(m);
  const oLat=(dLat*180)/((( _A*(1-_EE))/(m*sq))*_PI);
  const oLon=(dLon*180)/((_A/sq)*Math.cos(rad)*_PI);
  return [lon+oLon, lat+oLat];
}
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));

// ---------- 参数 ----------
function parseArgs(){
  const a=process.argv.slice(2); const o={zoom:18};
  for(let i=0;i<a.length;i+=2){ o[a[i].replace(/^--/,'')]=a[i+1]; }
  if(o.center && !o.bbox){
    const [clng,clat]=o.center.split(',').map(Number);
    const d=Number(o.delta||0.009);
    o.bbox=`${clng-d},${clat-d},${clng+d},${clat+d}`;
  }
  if(!o.bbox || !o.out){ console.error('用法: node qq_building_to_geojson.mjs --bbox minLng,minLat,maxLng,maxLat --zoom 18 --out out.geojson'); process.exit(1); }
  return o;
}

async function fetchBatch(tiles){
  // tiles: [[x_tms,y_tms],...] 最多4块, 一次请求
  const z=tiles.z;
  const s=`${tiles.list.map(([x,y])=>`${z}_${x}_${y}`).join(',')}`;
  const hosts=['rt0','rt1','rt2','rt3'];
  const h=hosts[Math.floor(Math.random()*4)];
  const url=`https://${h}.map.gtimg.com/tile?styleid=0&tiles=${s}&version=${VERSION}&building=1&style=100&compress=1&mapType=hybrid`;
  const r=await fetch(url,{headers:{'Referer':'https://lbs.qq.com/getPoint/','User-Agent':'Mozilla/5.0 Windows NT 10.0; Win64; x64 AppleWebKit/537.36'}});
  if(!r.ok) throw new Error(`HTTP ${r.status} ${url}`);
  return r.json();
}

async function main(){
  const o=parseArgs();
  const z=Number(o.zoom);
  // 输入输出统一 WGS-84: 先把框的四个角转回 GCJ-02(瓦片按火星坐标编号), 再算覆盖哪些块
  const [wLng,wLat,eLng,eLat]=o.bbox.split(',').map(Number);
  const corners=[[wLng,wLat],[wLng,eLat],[eLng,wLat],[eLng,eLat]].map(([lo,la])=>wgs84ToGcj02(lo,la));
  const minLng=Math.min(...corners.map(c=>c[0])), maxLng=Math.max(...corners.map(c=>c[0]));
  const minLat=Math.min(...corners.map(c=>c[1])), maxLat=Math.max(...corners.map(c=>c[1]));
  const N=Math.pow(2,z);
  const [x0,y0]=lngLatToXyz(minLng,maxLat,z); // y0 北
  const [x1,y1]=lngLatToXyz(maxLng,minLat,z); // y1 南
  console.log(`bbox(WGS84) ${o.bbox} -> 取数用(GCJ02) ${minLng.toFixed(6)},${minLat.toFixed(6)},${maxLng.toFixed(6)},${maxLat.toFixed(6)} z=${z} xyz x:${x0}-${x1} y:${y0}-${y1} 共 ${(x1-x0+1)*(y1-y0+1)} 块`);
  // TMS y = N-1-xyz_y
  const jobs=[];
  for(let y=y0;y<=y1;y+=2) for(let x=x0;x<=x1;x+=2){
    const group=[];
    for(let dy=0;dy<2;dy++) for(let dx=0;dx<2;dx++){
      const xx=x+dx, yy=y+dy;
      if(xx>x1||yy>y1) continue;
      group.push({xyz:[xx,yy], tms:[xx,N-1-yy]});
    }
    jobs.push(group);
  }
  console.log(`批量请求 ${jobs.length} 次(每批最多4块), 请限速, 仅学习小范围使用`);
  const features=[];
  let bi=0;
  for(const group of jobs){
    bi++;
    const list=group.map(g=>g.tms);
    let js=null;
    for(let retry=0;retry<3;retry++){
      try{ js=await fetchBatch({z,list}); break; }
      catch(e){ console.error(` batch ${bi} 重试${retry+1}: ${e.message}`); await sleep(1500); }
    }
    if(!js||!js.datas){ console.error(` batch ${bi} 失败跳过`); continue; }
    js.datas.forEach((d,di)=>{
      if(!d||!d.data || di>=group.length) return;
      let obj; try{ obj=JSON.parse(txDecode(d.data)); }catch(e){ return; }
      if(obj.ret!==0||!obj.features) return;
      const {xyz:[tx,ty]}=group[di];
      for(const f of obj.features){
        const id=Array.isArray(f[0])?f[0][0]:f[0];
        if(id!==BUILDING_ID) continue;
        const hcode=f[2]; // 米
        if(!Array.isArray(f[1])||f[1].length<6) continue;
        const local=deltaDecode(f[1]);
        // 瓦片像素 -> GCJ-02 -> WGS-84(直接输出 WGS-84, 下游无需再转)
        // 注意: 输入 bbox 按 GCJ-02 理解(与腾讯地图一致), 只有输出坐标做转换
        const ring=local.map(([lx,ly])=>{
          const [gLng,gLat]=xyzToLngLatPx(tx*TILE_SIZE+lx, ty*TILE_SIZE+ly, z);
          return gcj02ToWgs84(gLng,gLat);
        });
        ring.push(ring[0]);
        features.push({type:'Feature',properties:{height_m:hcode, tile:`${z}_${tx}_${ty}`},geometry:{type:'Polygon',coordinates:[ring]}});
      }
    });
    if(bi%5===0) console.log(` ${bi}/${jobs.length}  batches, 已得 ${features.length} 栋`);
    await sleep(400); // 限速, 别被封
  }
  // 去重: 腾讯不对楼块做瓦片裁剪, 跨瓦片的楼会在相邻瓦片重复出现(逐点完全一致)
  const seen=new Set(); const uniq=[];
  for(const f of features){
    const r=f.geometry.coordinates[0];
    const key=r.map(p=>p[0].toFixed(7)+','+p[1].toFixed(7)).join(';')+'|'+f.properties.height_m;
    if(seen.has(key)) continue;
    seen.add(key); uniq.push(f);
  }
  console.log(`去重: ${features.length} -> ${uniq.length} (去掉 ${features.length-uniq.length} 个跨瓦片重复)`);
  fs.writeFileSync(o.out, JSON.stringify({type:'FeatureCollection',crs:'WGS84',features:uniq},null,1));
  console.log(`完成: ${uniq.length} 栋(WGS84) -> ${o.out}`);
  console.log('注意: 输出已是 WGS-84, 可直接进 QGIS/Cesium; 大范围/商用请用自己申请的 key 并遵守腾讯条款');
}
main();
