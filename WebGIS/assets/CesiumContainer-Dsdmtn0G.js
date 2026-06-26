const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-DwbESWKF.js","./vendor-echarts-all-cqkMgDfv.js","./vendor-libs-4DJmrfJi.js","./vendor-vue-CmuMwCC6.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-C7C2VucA.js","./vendor-proj4-BFhoKKYj.js","./index-Bwi5JKWq.js","./vendor-ol-all-Ad62VZxn.js","./vendor-geotiff-CL7gAULd.js","./vendor-lerc-9DOY5ikF.js","./vendor-jszip-BOwK5y_4.js","./vendor-ol-all-BtPuoxOl.css","./vendor-axios-Bdz_Fv8M.js","./index-DduL8x4O.css"])))=>i.map(i=>d[i]);
var dr=Object.defineProperty;var hr=(t,e,a)=>e in t?dr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var Ma=(t,e,a)=>hr(t,typeof e!="symbol"?e+"":e,a);import{w as we,v as ar,d as Z,c as ae,P as rr,r as Q,C as nr,o as ir,f as L,t as de,a as ve,G as Ze,X as wt,g as me,q as Se,u as oe,F as st,e as dt,n as Pe,x as Ve,S as _t,I as jt,i as Ct,H as Vt,z as fr,B as mr,A as pr,a4 as aa}from"./vendor-vue-CmuMwCC6.js";import{_ as Mt,h as xa,R as or,Q as sr,e as ra,f as La,T as gr,v as yr,y as na,P as vr,x as xr}from"./index-Bwi5JKWq.js";import{_ as pa}from"./vendor-runtime-Dp1pzeXC.js";import{af as _r,ag as ia,ah as oa,ai as br,X as Pa,e as sa,aj as ga,ak as Bt,ac as Fa,al as Sr,am as lr,an as Aa,H as Ea,T as la,a2 as wr,ao as Xt,ap as Tr,aq as Cr,ar as Dr,q as Mr,as as Lr,o as Pr,at as Ht,G as Ra,au as Fr}from"./vendor-libs-4DJmrfJi.js";import{F as _a,G as Ia,v as Ot,B as Ar,H as Er,I as Rr,J as Ir,K as kr,L as zr,M as ka,N as Nr,O as Or,P as Br}from"./HomeView-DIw00eQ_.js";import{d as Hr}from"./vectorUtils-Ds50OJUZ.js";import"./vendor-ol-all-Ad62VZxn.js";import"./vendor-geotiff-CL7gAULd.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BFhoKKYj.js";import"./vendor-axios-Bdz_Fv8M.js";import"./textDecoder-CXjJWEkX.js";const ea=new Map;function Ur(t){const e=ea.get(t);e&&e.abort();const a=new AbortController;return ea.set(t,a),a}function Wr(){ea.forEach(t=>{t.abort()}),ea.clear()}function Gr(t){const e=t.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!e)return/\{s\}/i.test(t)?{url:t,subdomains:["a","b","c"]}:{url:t,subdomains:[]};const a=e[1].charCodeAt(0),r=e[2].charCodeAt(0),s=[];for(let n=a;n<=r;n++)s.push(String.fromCharCode(n));return{url:t.replace(e[0],"{s}"),subdomains:s}}function $r(t){return t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function qr(t,e){let a=t;return e.tiandituTk&&(a=a.replace(/\{tiandituTk\}/g,e.tiandituTk)),e.customUrl&&(a=a.replace(/\{customUrl\}/g,e.customUrl)),a}function jr(t,e,a){if(!t||!e)return null;const s=Ur(e.id).signal,{serviceType:n}=e;let m=qr(e.url,a);if(n==="custom"){if(!a.customUrl)return null;m=a.customUrl}if(e.nonStandardAdapter||n==="vector-tile")return null;const{subdomains:y}=Gr(m),_=$r(m),T=e.subdomains||y,F=e.maxZoom||18;try{let k=null;if(s.aborted)return null;switch(n){case"wms":{if(typeof t.WebMapServiceImageryProvider!="function")return null;const A=e.wms;if(!(A!=null&&A.layers))return null;k=new t.WebMapServiceImageryProvider({url:_||e.url,layers:A.layers,parameters:{version:A.version||"1.1.1",srs:A.srs||"EPSG:3857",format:A.format||"image/png",styles:A.styles||"",transparent:A.transparent!==!1}});break}case"wmts":{if(typeof t.WebMapTileServiceImageryProvider!="function")return null;const A=e.wmts;if(!(A!=null&&A.layer)||!A.matrixSet)return null;k=new t.WebMapTileServiceImageryProvider({url:_||e.url,layer:A.layer,style:A.style||"default",format:A.format||"image/png",tileMatrixSetID:A.matrixSet,maximumLevel:F});break}case"osm":{typeof t.OpenStreetMapImageryProvider=="function"?k=new t.OpenStreetMapImageryProvider({maximumLevel:F}):k=new t.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:F});break}default:{if(!_||!(_.includes("{z}")||_.includes("{x}")||_.includes("{y}")||_.includes("{reverseY}")))return null;k=new t.UrlTemplateImageryProvider({url:_,subdomains:T.length>0?T:void 0,tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:F,enablePickFeatures:!1});break}}if(s.aborted){if(k&&typeof k.destroy=="function")try{k.destroy()}catch{}return null}return k&&(k._descriptorId=e.id),k}catch{return null}}function Vr(t,e,a){if(!t||!Array.isArray(e))return[];const r=[];for(const s of e){const n=_a(s);if(!n)continue;const m=jr(t,n,a);m&&r.push(m)}return r}function Xr(t){var r;const e=t==null?void 0:t.scene,a=e==null?void 0:e.globe;!e||!a||(a.enableLighting=!0,e.sun&&(e.sun.show=!0),e.moon&&(e.moon.show=!0),e.skyBox&&(e.skyBox.show=!0),(r=e.requestRender)==null||r.call(e))}function Yr(t,e){var n;const a=t==null?void 0:t.scene,r=a==null?void 0:a.globe;if(!a||!r)return;Zr(a,e),Qr(a),r.enableLighting=!0,r.showGroundAtmosphere=!0,he(r,"dynamicAtmosphereLighting",!0),he(r,"dynamicAtmosphereLightingFromSun",!0),he(r,"atmosphereLightIntensity",11.5),he(r,"atmosphereHueShift",-.015),he(r,"atmosphereSaturationShift",.08),he(r,"atmosphereBrightnessShift",.02),he(r,"lightingFadeInDistance",15e6),he(r,"lightingFadeOutDistance",22e6),he(r,"nightFadeInDistance",9e6),he(r,"nightFadeOutDistance",16e6),Ut(e,r,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Ut(e,r,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),he(r,"atmosphereRayleighScaleHeight",1e4),he(r,"atmosphereMieScaleHeight",3200),he(r,"atmosphereMieAnisotropy",.92),!a.skyAtmosphere&&(e!=null&&e.SkyAtmosphere)&&(a.skyAtmosphere=tn(e));const s=a.skyAtmosphere;s&&(s.show=!0,he(s,"perFragmentAtmosphere",!0),he(s,"dynamicAtmosphereLighting",!0),he(s,"dynamicAtmosphereLightingFromSun",!0),he(s,"hueShift",-.025),he(s,"saturationShift",.08),he(s,"brightnessShift",.03),he(s,"atmosphereLightIntensity",12),Ut(e,s,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Ut(e,s,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),he(s,"atmosphereRayleighScaleHeight",1e4),he(s,"atmosphereMieScaleHeight",3200),he(s,"atmosphereMieAnisotropy",.92)),a.sun&&(a.sun.show=!0),a.moon&&(a.moon.show=!0),a.skyBox&&(a.skyBox.show=!0),"sunBloom"in a&&(a.sunBloom=!0),"highDynamicRange"in a&&(a.highDynamicRange=!0),en(a),(n=a.requestRender)==null||n.call(a)}function Kr(t){var s;const e=t==null?void 0:t.scene,a=e==null?void 0:e.globe;if(!e||!a)return null;const r=(s=e.postProcessStages)==null?void 0:s.bloom;return{scene:nt(e,["highDynamicRange","sunBloom","light"]),fog:nt(e.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:nt(a,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!e.skyAtmosphere,sky:nt(e.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:nt(e.sun,["show"]),moon:nt(e.moon,["show"]),skyBox:nt(e.skyBox,["show"]),bloom:{props:nt(r,["enabled"]),uniforms:nt(r==null?void 0:r.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Jr(t,e,a){var m,y,_,T;if(!a)return;const r=t==null?void 0:t.scene,s=r==null?void 0:r.globe;if(!r||!s)return;it(r,a.scene,e),it(r.fog,a.fog,e),it(s,a.globe,e),it(r.sun,a.sun,e),it(r.moon,a.moon,e),it(r.skyBox,a.skyBox,e),r.skyAtmosphere&&(it(r.skyAtmosphere,a.sky,e),a.skyAtmosphereExisted||(r.skyAtmosphere.show=!1));const n=(m=r.postProcessStages)==null?void 0:m.bloom;it(n,(y=a.bloom)==null?void 0:y.props,e),it(n==null?void 0:n.uniforms,(_=a.bloom)==null?void 0:_.uniforms,e),(T=r.requestRender)==null||T.call(r)}function Zr(t,e){var a;if(e!=null&&e.SunLight)try{t.light=new e.SunLight({color:(a=e.Color)==null?void 0:a.WHITE,intensity:2.35})}catch{t.light=new e.SunLight}he(t.light,"intensity",2.35)}function Qr(t){const e=t==null?void 0:t.fog;e&&(e.enabled=!0,he(e,"density",12e-5),he(e,"minimumBrightness",.035),he(e,"screenSpaceErrorFactor",2),he(e,"visualDensityScalar",.16))}function en(t){var a;const e=(a=t==null?void 0:t.postProcessStages)==null?void 0:a.bloom;e&&(e.enabled=!0,e.uniforms&&(he(e.uniforms,"contrast",128),he(e.uniforms,"brightness",-.18),he(e.uniforms,"delta",1),he(e.uniforms,"sigma",2.5),he(e.uniforms,"stepSize",4.2)))}function tn(t){var e;try{return new t.SkyAtmosphere((e=t.Ellipsoid)==null?void 0:e.WGS84)}catch{return new t.SkyAtmosphere}}function he(t,e,a){t&&e in t&&(t[e]=a)}function Ut(t,e,a,r,s,n){!e||!(a in e)||!(t!=null&&t.Cartesian3)||(e[a]=new t.Cartesian3(r,s,n))}function nt(t,e){return t?e.reduce((a,r)=>(r in t&&(a[r]=an(t[r])),a),{}):{}}function it(t,e={},a){!t||!e||Object.entries(e).forEach(([r,s])=>{r in t&&(t[r]=rn(s,a))})}function an(t){return t&&typeof t=="object"&&"x"in t&&"y"in t&&"z"in t?{__type:"Cartesian3",x:t.x,y:t.y,z:t.z}:t}function rn(t,e){return(t==null?void 0:t.__type)==="Cartesian3"&&(e!=null&&e.Cartesian3)?new e.Cartesian3(t.x,t.y,t.z):t}const Rt=128,Yt=32,It=64,Kt=16,kt=128,Jt=64,bt=6378137,cr=bt+9e4;class nn{constructor(e,a={}){var r;if(!((r=e==null?void 0:e.scene)!=null&&r.context))throw new Error("AtmosphereLutResources requires a valid Cesium Viewer instance.");this.viewer=e,this.context=e.scene.context,this.Cesium=a.cesium||globalThis.Cesium,this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this._destroyed=!1,this._createTextures()}destroy(){var e,a,r,s,n,m;this._destroyed||((a=(e=this.transmittanceTexture)==null?void 0:e.destroy)==null||a.call(e),(s=(r=this.irradianceTexture)==null?void 0:r.destroy)==null||s.call(r),(m=(n=this.scatteringTexture)==null?void 0:n.destroy)==null||m.call(n),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this._destroyed=!0)}isDestroyed(){return this._destroyed}_createTextures(){const e=on(),a=sn(),r=ln();this.transmittanceTexture=ca({Cesium:this.Cesium,context:this.context,width:Rt,height:Yt,data:e}),this.irradianceTexture=ca({Cesium:this.Cesium,context:this.context,width:It,height:Kt,data:a}),this.scatteringTexture=ca({Cesium:this.Cesium,context:this.context,width:kt,height:Jt,data:r})}}function ca({Cesium:t,context:e,width:a,height:r,data:s}){return new t.Texture({context:e,width:a,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.UNSIGNED_BYTE,source:{width:a,height:r,arrayBufferView:s},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE})})}function on(){const t=new Uint8Array(Rt*Yt*4);for(let e=0;e<Yt;e+=1){const a=e/Math.max(Yt-1,1),r=bt+a*(cr-bt);for(let s=0;s<Rt;s+=1){const n=s/Math.max(Rt-1,1)*2-1,m=cn(r,n);ba(t,(e*Rt+s)*4,m,255)}}return t}function sn(){const t=new Uint8Array(It*Kt*4);for(let e=0;e<Kt;e+=1){const a=e/Math.max(Kt-1,1),r=bt+a*(cr-bt);for(let s=0;s<It;s+=1){const n=s/Math.max(It-1,1),m=un(r,n);ba(t,(e*It+s)*4,m,255)}}return t}function ln(){const t=new Uint8Array(kt*Jt*4);for(let e=0;e<Jt;e+=1){const a=e/Math.max(Jt-1,1);for(let r=0;r<kt;r+=1){const s=r/Math.max(kt-1,1)*2-1,n=dn(s,a);ba(t,(e*kt+r)*4,n,255)}}return t}function cn(t,e){const a=Math.max(t-bt,0),r=ta(-.08,.18,e),s=1/Math.max(e*.5+.5,.08),n=Math.exp(-a/1e4),m=Math.exp(-a/3200),y=s*(.22+.78*r);return[Math.exp(-(55e-7*n+21e-6*m)*y*18e3),Math.exp(-(13e-6*n+21e-6*m)*y*18e3),Math.exp(-(284e-7*n+21e-6*m)*y*18e3)].map(_=>_*(.22+.78*r))}function un(t,e){const a=Math.max(t-bt,0),r=Math.exp(-a/1e4),s=[.32,.62,1],n=[.95,.62,.38],m=ta(.08,.75,e),y=.18+.55*e;return s.map((_,T)=>(n[T]*(1-m)+_*1.35*m)*y*(.35+.65*r))}function dn(t,e){const a=hn(t),r=fn(t,.76),s=1-Math.exp(-e*3.2),n=ta(.58,1,e)*ta(.15,1,t*.5+.5),m=[.42,.58,.9].map(_=>_*a*18),y=[1,.78,.48].map(_=>_*r*5.5);return m.map((_,T)=>(_+y[T]*(.55+n))*s)}function hn(t){return .05968310366*(1+t*t)}function fn(t,e){const a=e*e,r=Math.pow(Math.max(1+a-2*e*t,.001),1.5);return(1-a)/(12.5663706144*r)}function ba(t,e,a,r){t[e]=ua(a[0]),t[e+1]=ua(a[1]),t[e+2]=ua(a[2]),t[e+3]=r}function ua(t){return Math.round(Math.max(0,Math.min(1,t))*255)}function ta(t,e,a){const r=Math.max(0,Math.min(1,(a-t)/(e-t)));return r*r*(3-2*r)}const mn=`#version 300 es
in vec2 position;
out vec2 v_uv;

void main() {
    v_uv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
}
`,pn=`#version 300 es
precision highp float;

in vec2 v_uv;

uniform vec4 u_shadowAtlas;       // x=cascade count, y=resolution, z=bottom radius, w=top radius
uniform vec4 u_shadowParams;      // x=extinction density, y=coverage, z=step count, w=time
uniform vec3 u_sunDirectionWC;
uniform mat4 u_inverseCascadeMatrices[4];

float saturate(float value) {
    return clamp(value, 0.0, 1.0);
}

float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
}

float valueNoise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    float x00 = mix(n000, n100, f.x);
    float x10 = mix(n010, n110, f.x);
    float x01 = mix(n001, n101, f.x);
    float x11 = mix(n011, n111, f.x);
    float y0 = mix(x00, x10, f.y);
    float y1 = mix(x01, x11, f.y);
    return mix(y0, y1, f.z);
}

float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
        value += valueNoise(p) * amplitude;
        p = p * 2.03 + vec3(17.1, 31.7, 11.3);
        amplitude *= 0.5;
    }
    return value;
}

vec2 raySphere(vec3 origin, vec3 direction, float radius) {
    float b = dot(origin, direction);
    float c = dot(origin, origin) - radius * radius;
    float h = b * b - c;
    if (h < 0.0) return vec2(1.0, 0.0);
    h = sqrt(h);
    return vec2(-b - h, -b + h);
}

vec3 getStructureNormal(int index) {
    float phi = 1.61803398875;
    if (index == 0) return normalize(vec3(-1.0,  phi, 0.0));
    if (index == 1) return normalize(vec3( 1.0,  phi, 0.0));
    if (index == 2) return normalize(vec3(-1.0, -phi, 0.0));
    if (index == 3) return normalize(vec3( 1.0, -phi, 0.0));
    if (index == 4) return normalize(vec3(0.0, -1.0,  phi));
    if (index == 5) return normalize(vec3(0.0,  1.0,  phi));
    if (index == 6) return normalize(vec3(0.0, -1.0, -phi));
    if (index == 7) return normalize(vec3(0.0,  1.0, -phi));
    if (index == 8) return normalize(vec3( phi, 0.0, -1.0));
    if (index == 9) return normalize(vec3( phi, 0.0,  1.0));
    if (index == 10) return normalize(vec3(-phi, 0.0, -1.0));
    return normalize(vec3(-phi, 0.0, 1.0));
}

float stableBlueNoise(vec2 texel, float cascadeIndex) {
    vec2 cell = floor(texel);
    float a = fract(0.06711056 * cell.x + 0.00583715 * cell.y + cascadeIndex * 0.113);
    return fract(52.9829189 * a);
}

float sampleCloudDensity(vec3 position, float heightFraction) {
    vec3 normal = normalize(position);
    vec3 wind = vec3(u_shadowParams.w * 0.0025, u_shadowParams.w * 0.0015, 0.0);
    vec3 weatherCoord = normal * 42.0 + wind;
    vec3 shapeCoord = position * 0.000075 + vec3(u_shadowParams.w * 0.006, 0.0, 0.0);

    float weather = fbm(weatherCoord);
    float shape = fbm(shapeCoord);
    float detail = fbm(shapeCoord * 3.2 + 19.0);
    float profile = smoothstep(0.02, 0.22, heightFraction) * (1.0 - smoothstep(0.72, 1.0, heightFraction));
    float coverageCutoff = 1.0 - u_shadowParams.y;
    float baseDensity = smoothstep(coverageCutoff, coverageCutoff + 0.28, weather * 0.72 + shape * 0.28);
    float carved = baseDensity * smoothstep(0.10, 0.82, detail);

    return carved * profile;
}

void main() {
    float cascadeCount = max(u_shadowAtlas.x, 1.0);
    float cascadeWidth = 1.0 / cascadeCount;
    int cascadeIndex = int(clamp(floor(v_uv.x / cascadeWidth), 0.0, cascadeCount - 1.0));
    float localX = fract(v_uv.x * cascadeCount);
    vec2 cascadeUv = vec2(localX, v_uv.y);
    vec2 ndc = cascadeUv * 2.0 - 1.0;

    mat4 inverseCascade = u_inverseCascadeMatrices[cascadeIndex];
    vec4 nearWorld = inverseCascade * vec4(ndc, -1.0, 1.0);
    vec4 farWorld = inverseCascade * vec4(ndc, 1.0, 1.0);
    nearWorld.xyz /= max(abs(nearWorld.w), 0.000001);
    farWorld.xyz /= max(abs(farWorld.w), 0.000001);

    vec3 rayOrigin = nearWorld.xyz;
    vec3 rayDirection = normalize(farWorld.xyz - nearWorld.xyz);
    if (dot(rayDirection, u_sunDirectionWC) < 0.0) {
        rayDirection = -rayDirection;
    }

    vec2 outerHit = raySphere(rayOrigin, rayDirection, u_shadowAtlas.w);
    if (outerHit.x > outerHit.y || outerHit.y <= 0.0) {
        out_FragColor = vec4(0.0);
        return;
    }

    vec2 innerHit = raySphere(rayOrigin, rayDirection, u_shadowAtlas.z);
    float nearT = max(outerHit.x, 0.0);
    float farT = outerHit.y;
    if (innerHit.x <= innerHit.y && innerHit.y > 0.0) {
        farT = min(farT, max(innerHit.x, 0.0));
    }
    if (farT <= nearT) {
        out_FragColor = vec4(0.0);
        return;
    }

    int stepCount = int(clamp(floor(u_shadowParams.z + 0.5), 8.0, 48.0));
    float span = farT - nearT;
    float stepSize = span / float(stepCount);
    float stableJitter = stableBlueNoise(gl_FragCoord.xy, float(cascadeIndex));
    int structureIndex = int(floor(stableJitter * 12.0));
    vec3 structureNormal = getStructureNormal(structureIndex);
    float structureDenom = dot(rayDirection, structureNormal);
    float structureSpacing = max(stepSize, 250.0);
    float t = nearT + stableJitter * stepSize;
    float planeIndex = 0.0;
    float planeDirection = 1.0;

    if (abs(structureDenom) > 0.035) {
        vec3 nearPosition = rayOrigin + rayDirection * nearT;
        float nearCoord = dot(nearPosition, structureNormal);
        planeDirection = sign(structureDenom);
        planeIndex = planeDirection > 0.0
            ? ceil(nearCoord / structureSpacing + stableJitter)
            : floor(nearCoord / structureSpacing - stableJitter);
        float planeCoord = planeIndex * structureSpacing;
        t = (planeCoord - dot(rayOrigin, structureNormal)) / structureDenom;
        if (t < nearT) {
            planeIndex += planeDirection;
            planeCoord = planeIndex * structureSpacing;
            t = (planeCoord - dot(rayOrigin, structureNormal)) / structureDenom;
        }
    }

    float opticalDepth = 0.0;
    float firstDepth = -1.0;
    float maxDensity = 0.0;

    for (int i = 0; i < 48; i++) {
        if (i >= stepCount || t > farT) break;

        float currentT = t;
        float nextT = currentT + stepSize;
        if (abs(structureDenom) > 0.035) {
            float nextPlaneCoord = (planeIndex + planeDirection) * structureSpacing;
            nextT = (nextPlaneCoord - dot(rayOrigin, structureNormal)) / structureDenom;
        }
        float sampleLength = clamp(nextT - currentT, 0.0, stepSize * 2.5);
        vec3 position = rayOrigin + rayDirection * t;
        float radius = length(position);
        float heightFraction = saturate((radius - u_shadowAtlas.z) / max(u_shadowAtlas.w - u_shadowAtlas.z, 1.0));
        float density = sampleCloudDensity(position, heightFraction);
        if (density > 0.001) {
            if (firstDepth < 0.0) firstDepth = t;
            opticalDepth += density * sampleLength * u_shadowParams.x;
            maxDensity = max(maxDensity, density);
        }

        if (abs(structureDenom) > 0.035) {
            planeIndex += planeDirection;
            float planeCoord = planeIndex * structureSpacing;
            t = (planeCoord - dot(rayOrigin, structureNormal)) / structureDenom;
        } else {
            t += stepSize;
        }
    }

    float normalizedFront = firstDepth < 0.0 ? 0.0 : saturate((firstDepth - nearT) / max(farT - nearT, 1.0));
    float encodedOcclusion = 1.0 - exp(-opticalDepth * 0.85);
    out_FragColor = vec4(normalizedFront, saturate(encodedOcclusion), saturate(maxDensity), firstDepth < 0.0 ? 0.0 : 1.0);
}
`,Ft={cascadeCount:3,resolution:256,splitLambda:.58,near:1500,far:72e4};class gn{constructor(e,a={}){var r;if(!((r=e==null?void 0:e.scene)!=null&&r.context))throw new Error("CloudShadowResources requires a valid Cesium Viewer instance.");this.viewer=e,this.scene=e.scene,this.context=e.scene.context,this.Cesium=a.cesium||globalThis.Cesium,this.options=_n(a),this.enabled=a.enabled!==!1,this.status={ready:!1,frameNumber:-1,width:0,height:0,pixelDatatype:"UNSIGNED_BYTE"},this.cascadeSplits=new Float32Array(this.options.cascadeCount),this.cascadeMatrices=Array.from({length:this.options.cascadeCount},()=>new this.Cesium.Matrix4),this.inverseCascadeMatrices=Array.from({length:this.options.cascadeCount},()=>new this.Cesium.Matrix4),this._textures=[null,null],this._framebuffers=[null,null],this._clearCommand=null,this._drawCommand=null,this._shaderProgram=null,this._quadVertexArray=null,this._viewport=null,this._activeIndex=0,this._destroyed=!1,this._lastCameraPosition=new this.Cesium.Cartesian3,this._lastSunDirection=new this.Cesium.Cartesian3,this._uniformScratch={atlas:new this.Cesium.Cartesian4,params:new this.Cesium.Cartesian4,sun:new this.Cesium.Cartesian3,inverseMatrices:Array.from({length:4},()=>new this.Cesium.Matrix4)},this._createTargets(),this._createCommands(),this.status.ready=!0}get texture(){return this._textures[this._activeIndex]}get historyTexture(){return this._textures[1-this._activeIndex]}get framebuffer(){return this._framebuffers[this._activeIndex]}get width(){return this.options.resolution*this.options.cascadeCount}get height(){return this.options.resolution}get viewport(){return this._viewport||(this._viewport=new this.Cesium.BoundingRectangle(0,0,this.width,this.height)),this._viewport.width=this.width,this._viewport.height=this.height,this._viewport}resize(e){var r,s;const a=ya(e,64,2048);a!==this.options.resolution&&(this.options.resolution=a,this._destroyTargets(),this._createTargets(),this.status.ready=!0,this._drawCommand&&(this._drawCommand.framebuffer=this.framebuffer,this._drawCommand.renderState=this.Cesium.RenderState.fromCache({viewport:this.viewport,depthTest:{enabled:!1},depthMask:!1})),(s=(r=this.scene).requestRender)==null||s.call(r))}update({camera:e,sunDirection:a,maxDistance:r,density:s,coverage:n,bottomRadius:m,topRadius:y,timeSeconds:_,frameState:T}={}){var A,E;if(this._destroyed||!this.enabled)return;const F=e||this.viewer.camera,k=a||((E=(A=this.scene.context)==null?void 0:A.uniformState)==null?void 0:E.sunDirectionWC);!F||!k||(this._updateCascadeSplits(r),this._updateMatrices(F,k),this._updateUniforms({sunDirection:k,density:s,coverage:n,bottomRadius:m,topRadius:y,timeSeconds:_}),this.Cesium.Cartesian3.clone(F.positionWC||F.position,this._lastCameraPosition),this.Cesium.Cartesian3.clone(k,this._lastSunDirection),T!=null&&T.commandList&&this._drawCommand&&(this.enqueueClear(T),this._drawCommand.framebuffer=this.framebuffer,this.status.frameNumber=Number(T.frameNumber??this.status.frameNumber+1),T.commandList.push(this._drawCommand)))}swap(){this._activeIndex=1-this._activeIndex}enqueueClear(e){!(e!=null&&e.commandList)||!this.framebuffer||(this._clearCommand||(this._clearCommand=new this.Cesium.ClearCommand({color:new this.Cesium.Color(0,0,0,0),owner:this,pass:this.Cesium.Pass.OPAQUE})),this._clearCommand.framebuffer=this.framebuffer,this._clearCommand.renderState=this.Cesium.RenderState.fromCache({viewport:this.viewport}),e.commandList.push(this._clearCommand))}destroy(){this._destroyed||(this._destroyTargets(),this._destroyCommandResources(),this._destroyed=!0)}isDestroyed(){return this._destroyed}_createTargets(){const e=this.Cesium;this.options.resolution;const a=this.width,r=this.height,s=a*r,n=!!this.options.useFloatTexture&&!!this.context.floatingPointTexture,m=n?e.PixelDatatype.FLOAT:e.PixelDatatype.UNSIGNED_BYTE;this.status.width=a,this.status.height=r,this.status.pixelDatatype=n?"FLOAT":"UNSIGNED_BYTE";for(let y=0;y<2;y+=1)this._textures[y]=new e.Texture({context:this.context,width:a,height:r,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:m,source:{width:a,height:r,arrayBufferView:n?new Float32Array(s*4):new Uint8Array(s*4)},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR,wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE})}),this._framebuffers[y]=new e.Framebuffer({context:this.context,colorTextures:[this._textures[y]],destroyAttachments:!1})}_createCommands(){this._destroyCommandResources(),this._createQuadVertexArray(),this._shaderProgram=this.Cesium.ShaderProgram.fromCache({context:this.context,vertexShaderSource:mn,fragmentShaderSource:pn,attributeLocations:{position:0}}),this._drawCommand=new this.Cesium.DrawCommand({owner:this,primitiveType:this.Cesium.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._shaderProgram,renderState:this.Cesium.RenderState.fromCache({viewport:this.viewport,depthTest:{enabled:!1},depthMask:!1}),framebuffer:this.framebuffer,uniformMap:this._getUniformMap(),pass:this.Cesium.Pass.OPAQUE})}_createQuadVertexArray(){const e=this.Cesium,a=e.Buffer.createVertexBuffer({context:this.context,typedArray:new Float32Array([-1,-1,1,-1,1,1,-1,1]),usage:e.BufferUsage.STATIC_DRAW}),r=e.Buffer.createIndexBuffer({context:this.context,typedArray:new Uint16Array([0,1,2,0,2,3]),usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this.context,attributes:[{index:0,vertexBuffer:a,componentsPerAttribute:2}],indexBuffer:r})}_destroyCommandResources(){this._drawCommand=null,this._clearCommand=null,this._shaderProgram&&(this._shaderProgram.destroy(),this._shaderProgram=null),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null)}_getUniformMap(){return{u_shadowAtlas:()=>this._uniformScratch.atlas,u_shadowParams:()=>this._uniformScratch.params,u_sunDirectionWC:()=>this._uniformScratch.sun,u_inverseCascadeMatrices:()=>this._uniformScratch.inverseMatrices}}_updateUniforms({sunDirection:e,density:a=9e-5,coverage:r=.52,bottomRadius:s,topRadius:n,timeSeconds:m=0}){this._uniformScratch.atlas.x=this.options.cascadeCount,this._uniformScratch.atlas.y=this.options.resolution,this._uniformScratch.atlas.z=s||6379637,this._uniformScratch.atlas.w=n||6386637,this._uniformScratch.params.x=a,this._uniformScratch.params.y=r,this._uniformScratch.params.z=24,this._uniformScratch.params.w=m,this.Cesium.Cartesian3.clone(e,this._uniformScratch.sun);for(let y=0;y<4;y+=1)this.Cesium.Matrix4.clone(this.inverseCascadeMatrices[y]||this.Cesium.Matrix4.IDENTITY,this._uniformScratch.inverseMatrices[y])}_destroyTargets(){this.status.ready=!1;for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._textures[e]&&(this._textures[e].destroy(),this._textures[e]=null)}_updateCascadeSplits(e){const a=this.options.near,r=Math.max(a+1,Number(e)||this.options.far),s=this.options.splitLambda,n=this.options.cascadeCount;for(let m=1;m<=n;m+=1){const y=m/n,_=a*Math.pow(r/a,y),T=a+(r-a)*y;this.cascadeSplits[m-1]=_*s+T*(1-s)}}_updateMatrices(e,a){const r=this.Cesium,s=r.Cartesian3.normalize(a,yn),n=e.positionWC||e.position,m=e.upWC||e.up,y=e.rightWC||e.right,_=e.directionWC||e.direction;let T=this.options.near;for(let F=0;F<this.options.cascadeCount;F+=1){const k=this.cascadeSplits[F];vn({Cesium:r,eye:n,up:m,right:y,direction:_,sunDirection:s,near:T,far:k,resolution:this.options.resolution,result:this.cascadeMatrices[F],inverseResult:this.inverseCascadeMatrices[F]}),T=k}}}const yn={},Ke={},ke={},ot={},Je={},Wt={},Gt={};function vn({Cesium:t,eye:e,up:a,right:r,direction:s,sunDirection:n,near:m,far:y,resolution:_,result:T,inverseResult:F}){const k=(m+y)*.5,A=Math.max((y-m)*.62,1200);t.Cartesian3.multiplyByScalar(s,k,Ke),t.Cartesian3.add(e,Ke,Ke),t.Cartesian3.negate(n,Je),t.Cartesian3.cross(a,Je,ke),t.Cartesian3.magnitudeSquared(ke)<.001&&t.Cartesian3.cross(r,Je,ke),t.Cartesian3.normalize(ke,ke),t.Cartesian3.cross(Je,ke,ot),t.Cartesian3.normalize(ot,ot);const E=A*2/Math.max(_,1),p=Math.round(t.Cartesian3.dot(Ke,ke)/E)*E,S=Math.round(t.Cartesian3.dot(Ke,ot)/E)*E,b=t.Cartesian3.dot(Ke,Je);t.Cartesian3.multiplyByScalar(ke,p,Wt),t.Cartesian3.multiplyByScalar(ot,S,Gt),t.Cartesian3.add(Wt,Gt,Wt),t.Cartesian3.multiplyByScalar(Je,b,Gt),t.Cartesian3.add(Wt,Gt,Ke);const P=t.Matrix4.fromArray([ke.x,ke.y,ke.z,-t.Cartesian3.dot(ke,Ke),ot.x,ot.y,ot.z,-t.Cartesian3.dot(ot,Ke),Je.x,Je.y,Je.z,-t.Cartesian3.dot(Je,Ke),0,0,0,1]),i=t.Matrix4.computeOrthographicOffCenter(-A,A,-A,A,-A*3,A*3,xn);t.Matrix4.multiply(i,P,T),t.Matrix4.inverse(T,F)}const xn={};function _n(t={}){return{cascadeCount:ya(t.cascadeCount??Ft.cascadeCount,1,4),resolution:ya(t.resolution??Ft.resolution,64,2048),splitLambda:Zt(t.splitLambda??Ft.splitLambda,0,1),near:Zt(t.near??Ft.near,1,1e5),far:Zt(t.far??Ft.far,1e4,2e6),useFloatTexture:t.useFloatTexture===!0}}function ya(t,e,a){return Math.round(Zt(Number(t)||e,e,a))}function Zt(t,e,a){return Math.max(e,Math.min(a,t))}class bn{constructor(e,a={}){var r;if(!((r=e==null?void 0:e.scene)!=null&&r.context))throw new Error("CloudShadowPrimitive requires a valid Cesium Viewer instance.");this.viewer=e,this.Cesium=a.cesium||globalThis.Cesium,this.show=a.enabled===!0,this.params={...a},this.resources=new gn(e,{cesium:this.Cesium,enabled:this.show,far:a.maxDistance,resolution:a.shadowResolution||256}),this._destroyed=!1}get texture(){var e;return((e=this.resources)==null?void 0:e.texture)||null}get cascadeMatrices(){var e;return((e=this.resources)==null?void 0:e.cascadeMatrices)||null}get cascadeSplits(){var e;return((e=this.resources)==null?void 0:e.cascadeSplits)||null}get cascadeCount(){var e,a;return((a=(e=this.resources)==null?void 0:e.options)==null?void 0:a.cascadeCount)||0}get shadowResolution(){var e,a;return((a=(e=this.resources)==null?void 0:e.options)==null?void 0:a.resolution)||0}get status(){var e;return((e=this.resources)==null?void 0:e.status)||null}setParams(e={}){this.params={...this.params,...e},this.show=this.params.enabled!==!1,this.resources&&(this.resources.enabled=this.show,e.shadowResolution!==void 0&&this.resources.resize(e.shadowResolution))}update(e){var a,r;if(!(this._destroyed||!this.show||!this.resources))try{const n=(r=(a=this.viewer.scene.context)==null?void 0:a.uniformState)==null?void 0:r.sunDirectionWC;this.resources.update({camera:this.viewer.camera,sunDirection:n,maxDistance:this.params.maxDistance,density:this.params.density,coverage:this.params.coverage,bottomRadius:this.params.bottomRadius,topRadius:this.params.topRadius,timeSeconds:this.params.timeSeconds,frameState:e})}catch{this.show=!1,this.params.enabled=!1,this.resources.enabled=!1}}destroy(){var e;this._destroyed||((e=this.resources)==null||e.destroy(),this.resources=null,this._destroyed=!0)}isDestroyed(){return this._destroyed}}const Sn={__name:"LilGuiControls",props:{title:{type:String,default:"Parameters"},controls:{type:Array,default:()=>[]}},emits:["change"],setup(t,{emit:e}){const a=t,r=e,s=Q(null),n={},m=new Map;let y=null,_="",T=!1;we(()=>[a.title,a.controls],()=>{F()},{deep:!0,flush:"post",immediate:!0}),ar(()=>{g()});function F(){typeof window>"u"||T||(T=!0,rr(()=>{T=!1,k()}))}function k(){const u=s.value;if(!u)return;const v=b(a.controls);(!y||v!==_)&&(g(),A(u,v)),p()}function A(u,v){y=new _r({container:u,autoPlace:!1,title:a.title||"Parameters",width:Math.max(260,Math.floor(u.clientWidth||320))}),y.domElement.classList.add("cesium-lil-gui"),u.replaceChildren(y.domElement),_=v;for(const D of a.controls||[]){const N=E(D);N&&m.set(D.id,N)}}function E(u){n[u.id]=i(u);let v=null;return u.type==="range"?v=y.add(n,u.id,l(u.min,0),l(u.max,1),l(u.step,.01)):u.type==="color"?v=y.addColor(n,u.id):u.type==="select"?v=y.add(n,u.id,h(u)):v=y.add(n,u.id),v.name(P(u)).onChange(D=>{const N=f(u.id)||u;N.disabled||r("change",{control:N,controlId:N.id,value:D})}),S(v,u),v}function p(){if(y){y.title(a.title||"Parameters");for(const u of a.controls||[]){const v=m.get(u.id);if(!v)continue;const D=i(u);w(n[u.id],D)||(n[u.id]=D,v.updateDisplay()),v.name(P(u)),v.disable(!!u.disabled),S(v,u)}}}function S(u,v){u.domElement.title=v.tooltip||"",u.domElement.dataset.controlId=v.id||"",u.domElement.dataset.controlType=v.type||""}function b(u=[]){return JSON.stringify(u.map(v=>({id:v.id,type:v.type,min:v.min,max:v.max,step:v.step,options:(v.options||[]).map(D=>({label:D.label,value:D.value}))})))}function P(u){return u.displayValue?`${u.label||u.id} (${u.displayValue})`:u.label||u.id}function i(u){var v,D;return u.type==="range"?l(u.value,l(u.min,0)):u.type==="toggle"?!!u.value:u.type==="select"?u.value??((D=(v=u.options)==null?void 0:v[0])==null?void 0:D.value)??"":u.type==="color"?typeof u.value=="string"&&u.value?u.value:"#ffffff":u.value}function h(u){const v={};for(const D of u.options||[])v[D.label||D.value]=D.value;return v}function f(u){return a.controls.find(v=>v.id===u)||null}function w(u,v){return typeof u=="number"||typeof v=="number"?Math.abs(Number(u)-Number(v))<1e-12:u===v}function l(u,v){const D=Number(u);return Number.isFinite(D)?D:v}function g(){if(y)try{y.destroy()}catch{}y=null,_="",m.clear();for(const u of Object.keys(n))delete n[u]}return(u,v)=>(Z(),ae("div",{ref_key:"containerRef",ref:s,class:"lil-gui-host"},null,512))}},Sa=Mt(Sn,[["__scopeId","data-v-8ebe7afa"]]),wn={key:0,class:"advanced-effects-root"},Tn={class:"effects-panel"},Cn={class:"panel-head"},Dn={class:"effect-switches"},Mn=`
uniform sampler2D colorTexture;
uniform sampler2D depthTexture;
uniform sampler2D u_cloudShadowTexture;
uniform sampler2D u_atmosphereTransmittanceTexture;
uniform sampler2D u_atmosphereIrradianceTexture;
uniform sampler2D u_atmosphereScatteringTexture;
uniform vec3 u_cameraPositionWC;
uniform vec3 u_cameraDirectionWC;
uniform mat4 u_inverseViewProjection;
uniform vec3 u_sunDirectionWC;
uniform mat4 u_cloudShadowMatrices[4];
uniform mat4 u_cloudShadowInverseMatrices[4];
uniform vec4 u_cloudShadowSplits;
uniform vec4 u_cloudShadowParams;
uniform float u_cloudBottomRadius;
uniform float u_cloudTopRadius;
uniform float u_maxDistance;
uniform float u_coverage;
uniform float u_density;
uniform float u_shadowStrength;
uniform float u_beerShadowStrength;
uniform float u_multiScattering;
uniform float u_powderStrength;
uniform float u_hazeStrength;
uniform float u_groundBounceStrength;
uniform float u_stepCount;
uniform float u_timeSeconds;
uniform vec4 u_atmosphereParams; // x=enabled, y=rayleigh, z=mie, w=aerial perspective strength

#if __VERSION__ == 300
in vec2 v_textureCoordinates;
#define SAMPLE_TEX texture
#define FRAG_COLOR out_FragColor
#else
varying vec2 v_textureCoordinates;
#define SAMPLE_TEX texture2D
#define FRAG_COLOR gl_FragColor
#endif

float saturate(float value) {
    return clamp(value, 0.0, 1.0);
}

float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
}

float valueNoise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    float x00 = mix(n000, n100, f.x);
    float x10 = mix(n010, n110, f.x);
    float x01 = mix(n001, n101, f.x);
    float x11 = mix(n011, n111, f.x);
    float y0 = mix(x00, x10, f.y);
    float y1 = mix(x01, x11, f.y);
    return mix(y0, y1, f.z);
}

float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
        value += valueNoise(p) * amplitude;
        p = p * 2.03 + vec3(17.1, 31.7, 11.3);
        amplitude *= 0.5;
    }
    return value;
}

vec2 raySphere(vec3 origin, vec3 direction, float radius) {
    float b = dot(origin, direction);
    float c = dot(origin, origin) - radius * radius;
    float h = b * b - c;
    if (h < 0.0) {
        return vec2(1.0, 0.0);
    }
    h = sqrt(h);
    return vec2(-b - h, -b + h);
}

float getSceneDistance(vec2 uv) {
    float depth = czm_readDepth(depthTexture, uv);
    if (depth <= 0.0 || depth >= 1.0) {
        return 1.0e9;
    }
    vec4 eye = czm_windowToEyeCoordinates(gl_FragCoord.xy, depth);
    return length(eye.xyz);
}

vec3 getRayDirection(vec2 uv) {
    vec2 ndc = uv * 2.0 - 1.0;
    vec4 farPosition = u_inverseViewProjection * vec4(ndc, 1.0, 1.0);
    float safeW = abs(farPosition.w) < 0.00001 ? 0.00001 : farPosition.w;
    farPosition.xyz /= safeW;
    return normalize(farPosition.xyz - u_cameraPositionWC);
}

float sampleCloudDensity(vec3 position, float heightFraction) {
    vec3 normal = normalize(position);
    vec3 wind = vec3(u_timeSeconds * 0.0025, u_timeSeconds * 0.0015, 0.0);
    vec3 weatherCoord = normal * 42.0 + wind;
    vec3 shapeCoord = position * 0.000075 + vec3(u_timeSeconds * 0.006, 0.0, 0.0);

    float weather = fbm(weatherCoord);
    float shape = fbm(shapeCoord);
    float detail = fbm(shapeCoord * 3.2 + 19.0);
    float profile = smoothstep(0.02, 0.22, heightFraction) * (1.0 - smoothstep(0.72, 1.0, heightFraction));
    float coverageCutoff = 1.0 - u_coverage;
    float baseDensity = smoothstep(coverageCutoff, coverageCutoff + 0.28, weather * 0.72 + shape * 0.28);
    float carved = baseDensity * smoothstep(0.10, 0.82, detail);

    return carved * profile;
}

float hgPhase(float cosTheta, float g) {
    float g2 = g * g;
    float denom = pow(max(1.0 + g2 - 2.0 * g * cosTheta, 0.001), 1.5);
    return (1.0 - g2) / (12.5663706144 * denom);
}

float rayleighPhase(float cosTheta) {
    return 0.05968310366 * (1.0 + cosTheta * cosTheta);
}

float opticalDepthHeight(float radius, float scaleHeight) {
    float altitude = max(radius - 6378137.0, 0.0);
    return exp(-altitude / scaleHeight);
}

vec3 atmosphereExtinctionAtRadius(float radius) {
    vec3 betaRayleigh = vec3(5.5e-6, 13.0e-6, 28.4e-6) * max(u_atmosphereParams.y, 0.0);
    vec3 betaMie = vec3(21.0e-6) * max(u_atmosphereParams.z, 0.0);
    float rayleighDensity = opticalDepthHeight(radius, 10000.0);
    float mieDensity = opticalDepthHeight(radius, 3200.0);
    return betaRayleigh * rayleighDensity + betaMie * mieDensity;
}

vec3 approximateSunTransmittance(vec3 position, vec3 sunDirection) {
    if (u_atmosphereParams.x < 0.5) {
        return vec3(1.0);
    }

    float radius = length(position);
    float mu = dot(normalize(position), sunDirection);
    float altitudeUv = saturate((radius - 6378137.0) / 90000.0);
    vec2 lutUv = vec2(mu * 0.5 + 0.5, altitudeUv);
    vec3 lutTransmittance = SAMPLE_TEX(u_atmosphereTransmittanceTexture, lutUv).rgb;
    float horizon = smoothstep(-0.08, 0.18, mu);
    float slant = 1.0 / max(mu * 0.5 + 0.5, 0.08);
    vec3 extinction = atmosphereExtinctionAtRadius(radius);
    vec3 analyticTransmittance = exp(-extinction * slant * 18000.0) * (0.22 + 0.78 * horizon);
    return mix(analyticTransmittance, lutTransmittance, 0.78);
}

vec3 approximateSkyIrradiance(vec3 position, vec3 sunDirection) {
    float radius = length(position);
    vec3 normal = normalize(position);
    float sunUp = saturate(dot(normal, sunDirection) * 0.5 + 0.5);
    float altitudeUv = saturate((radius - 6378137.0) / 90000.0);
    vec3 lutIrradiance = SAMPLE_TEX(u_atmosphereIrradianceTexture, vec2(sunUp, altitudeUv)).rgb;
    vec3 betaRayleigh = vec3(5.5e-6, 13.0e-6, 28.4e-6) * max(u_atmosphereParams.y, 0.0);
    vec3 blueScatter = normalize(betaRayleigh + vec3(0.000001));
    vec3 skyTint = mix(vec3(0.75, 0.56, 0.42), blueScatter * 1.85, smoothstep(0.08, 0.75, sunUp));
    float density = opticalDepthHeight(radius, 10000.0);
    float ambient = 0.18 + 0.55 * sunUp;
    vec3 analyticIrradiance = skyTint * ambient * (0.35 + 0.65 * density);
    return mix(analyticIrradiance, lutIrradiance, 0.78);
}

void GetSunAndSkyScalarIrradiance(vec3 position, vec3 sunDirection, out vec3 sunIrradiance, out vec3 skyIrradiance) {
    sunIrradiance = mix(vec3(1.0), approximateSunTransmittance(position, sunDirection), saturate(u_atmosphereParams.x));
    skyIrradiance = mix(vec3(0.42, 0.62, 0.86), approximateSkyIrradiance(position, sunDirection), saturate(u_atmosphereParams.x));
}

void GetSkyRadianceToPoint(vec3 cameraPosition, vec3 pointPosition, vec3 sunDirection, out vec3 transmittance, out vec3 inScattering) {
    vec3 segment = pointPosition - cameraPosition;
    float distanceMeters = length(segment);
    vec3 rayDirection = distanceMeters > 1.0 ? segment / distanceMeters : normalize(pointPosition);

    if (u_atmosphereParams.x < 0.5) {
        transmittance = vec3(1.0);
        inScattering = vec3(0.0);
        return;
    }

    float density = opticalDepthHeight(length(cameraPosition), 10000.0) * 0.35 +
        opticalDepthHeight(length(pointPosition), 10000.0) * 0.65;
    vec3 rayleigh = vec3(5.5e-6, 13.0e-6, 28.4e-6) * max(u_atmosphereParams.y, 0.0);
    vec3 mie = vec3(21.0e-6) * max(u_atmosphereParams.z, 0.0);
    vec3 extinction = (rayleigh * 1.15 + mie * 0.72) * density;
    transmittance = exp(-extinction * distanceMeters * u_atmosphereParams.w);
    float cosTheta = dot(rayDirection, sunDirection);
    vec3 sunTransmittance = approximateSunTransmittance(mix(cameraPosition, pointPosition, 0.55), sunDirection);
    float distanceUv = saturate(distanceMeters / 360000.0);
    vec3 lutScattering = SAMPLE_TEX(u_atmosphereScatteringTexture, vec2(cosTheta * 0.5 + 0.5, distanceUv)).rgb;
    vec3 phaseColor =
        vec3(0.42, 0.58, 0.86) * rayleighPhase(cosTheta) * 18.0 +
        vec3(1.0, 0.78, 0.48) * hgPhase(cosTheta, 0.76) * 6.0;
    inScattering = mix(phaseColor, lutScattering, 0.82) * sunTransmittance * (1.0 - transmittance);
}

vec3 applyAerialPerspective(vec3 color, vec3 rayDirection, vec3 sunDirection, float frontDistance, float alpha) {
    vec3 pointPosition = u_cameraPositionWC + rayDirection * max(frontDistance, 0.0);
    vec3 transmittance;
    vec3 inScattering;
    GetSkyRadianceToPoint(u_cameraPositionWC, pointPosition, sunDirection, transmittance, inScattering);
    return color * transmittance + inScattering * alpha;
}

float marchSunOpticalDepth(vec3 startPosition, vec3 sunDirection) {
    vec2 sunHit = raySphere(startPosition, sunDirection, u_cloudTopRadius);
    float maxDistance = max(sunHit.y, 0.0);
    float stepSize = min(maxDistance / 6.0, 2600.0);
    float distanceAlongRay = stepSize * 0.5;
    float opticalDepth = 0.0;

    for (int i = 0; i < 6; i++) {
        if (distanceAlongRay > maxDistance) {
            break;
        }

        vec3 samplePosition = startPosition + sunDirection * distanceAlongRay;
        float radius = length(samplePosition);
        float heightFraction = saturate((radius - u_cloudBottomRadius) / (u_cloudTopRadius - u_cloudBottomRadius));
        if (heightFraction > 0.0 && heightFraction < 1.0) {
            opticalDepth += sampleCloudDensity(samplePosition, heightFraction) * stepSize;
        }

        distanceAlongRay += stepSize;
    }

    return opticalDepth;
}

float structuredShadowJitter(vec3 position, vec3 sunDirection) {
    vec3 p = normalize(position) * 37.0 + sunDirection * 19.0;
    return hash31(p + vec3(fract(u_timeSeconds * 0.031)));
}

float marchBeerShadowOpticalDepth(vec3 startPosition, vec3 sunDirection) {
    vec2 sunHit = raySphere(startPosition, sunDirection, u_cloudTopRadius);
    float maxDistance = max(sunHit.y, 0.0);
    if (maxDistance <= 0.0) {
        return 0.0;
    }

    float stepSize = min(maxDistance / 10.0, 7200.0);
    float jitter = structuredShadowJitter(startPosition, sunDirection);
    float distanceAlongRay = stepSize * (0.35 + jitter * 0.55);
    float opticalDepth = 0.0;
    float lastDensity = 0.0;

    for (int i = 0; i < 10; i++) {
        if (distanceAlongRay > maxDistance) {
            break;
        }

        vec3 samplePosition = startPosition + sunDirection * distanceAlongRay;
        float radius = length(samplePosition);
        float heightFraction = saturate((radius - u_cloudBottomRadius) / (u_cloudTopRadius - u_cloudBottomRadius));
        if (heightFraction > 0.0 && heightFraction < 1.0) {
            lastDensity = sampleCloudDensity(samplePosition, heightFraction);
            opticalDepth += lastDensity * stepSize;
        }

        distanceAlongRay += stepSize * 1.18;
    }

    float tailDistance = max(maxDistance - distanceAlongRay, 0.0);
    opticalDepth += lastDensity * tailDistance * 0.28;
    return opticalDepth;
}

float sampleBsmShadow(vec3 position, float cameraDistance, float localShadow) {
    if (u_cloudShadowParams.x < 0.5) {
        return 1.0;
    }

    int cascadeIndex = 0;
    if (cameraDistance > u_cloudShadowSplits.z) {
        cascadeIndex = 3;
    } else if (cameraDistance > u_cloudShadowSplits.y) {
        cascadeIndex = 2;
    } else if (cameraDistance > u_cloudShadowSplits.x) {
        cascadeIndex = 1;
    }

    float cascadeCount = max(u_cloudShadowParams.y, 1.0);
    if (float(cascadeIndex) >= cascadeCount) {
        cascadeIndex = int(cascadeCount - 1.0);
    }

    vec4 shadowClip = u_cloudShadowMatrices[cascadeIndex] * vec4(position, 1.0);
    shadowClip.xyz /= max(abs(shadowClip.w), 0.000001);
    vec2 localUv = shadowClip.xy * 0.5 + 0.5;
    vec4 lightNearWorld = u_cloudShadowInverseMatrices[cascadeIndex] * vec4(shadowClip.xy, -1.0, 1.0);
    vec4 lightFarWorld = u_cloudShadowInverseMatrices[cascadeIndex] * vec4(shadowClip.xy, 1.0, 1.0);
    lightNearWorld.xyz /= max(abs(lightNearWorld.w), 0.000001);
    lightFarWorld.xyz /= max(abs(lightFarWorld.w), 0.000001);
    vec3 lightRayOrigin = lightNearWorld.xyz;
    vec3 lightRayDirection = normalize(lightFarWorld.xyz - lightNearWorld.xyz);
    if (dot(lightRayDirection, normalize(u_sunDirectionWC)) < 0.0) {
        lightRayDirection = -lightRayDirection;
    }
    vec2 lightOuterHit = raySphere(lightRayOrigin, lightRayDirection, u_cloudTopRadius);
    vec2 lightInnerHit = raySphere(lightRayOrigin, lightRayDirection, u_cloudBottomRadius);
    if (lightOuterHit.x > lightOuterHit.y || lightOuterHit.y <= 0.0) {
        return 1.0;
    }
    float lightNearT = max(lightOuterHit.x, 0.0);
    float lightFarT = lightOuterHit.y;
    if (lightInnerHit.x <= lightInnerHit.y && lightInnerHit.y > 0.0) {
        lightFarT = min(lightFarT, max(lightInnerHit.x, 0.0));
    }
    float currentLightT = dot(position - lightRayOrigin, lightRayDirection);
    float currentCloudDepth = saturate((currentLightT - lightNearT) / max(lightFarT - lightNearT, 1.0));

    if (localUv.x <= 0.001 || localUv.x >= 0.999 || localUv.y <= 0.001 || localUv.y >= 0.999) {
        return 1.0;
    }

    float atlasWidth = 1.0 / cascadeCount;
    vec2 atlasUv = vec2((float(cascadeIndex) + localUv.x) * atlasWidth, localUv.y);
    float atlasResolution = max(u_cloudShadowParams.z, 1.0);
    vec2 texel = vec2(atlasWidth / atlasResolution, 1.0 / atlasResolution);
    float accumulatedShadow = 0.0;
    float accumulatedWeight = 0.0;

    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 tapUv = atlasUv + vec2(float(x), float(y)) * texel;
            vec4 packed = SAMPLE_TEX(u_cloudShadowTexture, tapUv);
            float hasCloud = step(0.5, packed.a);
            float behindFront = step(packed.r + 0.006, currentCloudDepth);
            float densityWeight = smoothstep(0.015, 0.42, packed.b);
            float occlusion = saturate(packed.g) * hasCloud * behindFront * densityWeight;
            float weight = x == 0 && y == 0 ? 1.0 : 0.55;
            accumulatedShadow += (1.0 - occlusion) * weight;
            accumulatedWeight += weight;
        }
    }

    float atlasShadow = accumulatedShadow / max(accumulatedWeight, 0.001);
    return mix(1.0, min(localShadow, atlasShadow), u_cloudShadowParams.w);
}

float approximateMultipleScattering(float opticalDepth) {
    float attenuation = 1.0;
    float contribution = 0.0;
    float octaveWeight = 0.5;

    for (int i = 0; i < 3; i++) {
        attenuation *= exp(-opticalDepth * u_density * octaveWeight);
        contribution += (1.0 - attenuation) * octaveWeight;
        octaveWeight *= 0.5;
    }

    return saturate(contribution);
}

vec3 applyCloudHaze(vec3 color, vec3 rayDirection, vec3 sunDirection, float frontDistance, float alpha) {
    float distanceHaze = 1.0 - exp(-max(frontDistance, 0.0) * 0.0000028);
    float sunGlow = pow(saturate(dot(rayDirection, sunDirection) * 0.5 + 0.5), 5.0);
    float verticalFade = saturate(dot(rayDirection, normalize(u_cameraPositionWC)) * 1.8 + 0.9);
    vec3 skyHaze = mix(vec3(0.48, 0.62, 0.78), vec3(1.0, 0.82, 0.55), sunGlow);
    float hazeAmount = distanceHaze * u_hazeStrength * alpha * verticalFade;
    return mix(color, skyHaze, saturate(hazeAmount));
}

void main() {
    vec2 uv = v_textureCoordinates;
    vec4 sceneColor = SAMPLE_TEX(colorTexture, uv);
    vec3 rayDirection = getRayDirection(uv);

    vec2 outerHit = raySphere(u_cameraPositionWC, rayDirection, u_cloudTopRadius);
    if (outerHit.x > outerHit.y || outerHit.y <= 0.0) {
        FRAG_COLOR = sceneColor;
        return;
    }

    vec2 innerHit = raySphere(u_cameraPositionWC, rayDirection, u_cloudBottomRadius);
    float nearDistance = max(outerHit.x, 0.0);
    float farDistance = outerHit.y;
    if (innerHit.x <= innerHit.y && innerHit.y > 0.0) {
        if (length(u_cameraPositionWC) < u_cloudBottomRadius) {
            nearDistance = max(innerHit.y, nearDistance);
        } else {
            farDistance = min(farDistance, max(innerHit.x, 0.0));
        }
    }

    farDistance = min(farDistance, u_maxDistance);
    farDistance = min(farDistance, getSceneDistance(uv));
    if (farDistance <= nearDistance) {
        FRAG_COLOR = sceneColor;
        return;
    }

    float span = farDistance - nearDistance;
    int stepCount = int(clamp(floor(u_stepCount + 0.5), 16.0, 80.0));
    float stepSize = max(span / float(stepCount), 750.0);
    float jitter = hash31(vec3(gl_FragCoord.xy, fract(u_timeSeconds))) * stepSize;
    float distanceAlongRay = nearDistance + jitter;
    vec3 cloudLight = vec3(0.0);
    float transmittance = 1.0;
    float alpha = 0.0;
    float weightedDepth = 0.0;
    float depthWeight = 0.0;
    vec3 sunDirection = normalize(u_sunDirectionWC);

    for (int i = 0; i < 80; i++) {
        if (i >= stepCount || distanceAlongRay > farDistance || transmittance < 0.03) {
            break;
        }

        vec3 position = u_cameraPositionWC + rayDirection * distanceAlongRay;
        float radius = length(position);
        float heightFraction = saturate((radius - u_cloudBottomRadius) / (u_cloudTopRadius - u_cloudBottomRadius));
        float density = sampleCloudDensity(position, heightFraction);

        if (density > 0.001) {
            float extinction = density * u_density * stepSize;
            float opticalDepthToSun = marchSunOpticalDepth(position + sunDirection * stepSize * 0.35, sunDirection);
            float beerOpticalDepth = marchBeerShadowOpticalDepth(position + sunDirection * stepSize * 0.75, sunDirection);
            float localShadow = exp(-opticalDepthToSun * u_density * 1.35);
            float beerShadow = exp(-beerOpticalDepth * u_density * 0.72);
            float bsmShadow = sampleBsmShadow(position, distanceAlongRay, localShadow);
            float sunTransmittance = mix(1.0, localShadow * mix(1.0, beerShadow, u_beerShadowStrength) * bsmShadow, u_shadowStrength);
            float multipleScattering = approximateMultipleScattering(opticalDepthToSun + beerOpticalDepth * 0.45) * u_multiScattering;
            float lightFacing = saturate(dot(normalize(position), sunDirection) * 0.45 + 0.55);
            float cosTheta = dot(rayDirection, sunDirection);
            float phase = hgPhase(cosTheta, 0.68) * 4.6 + hgPhase(cosTheta, -0.22) * 1.25;
            float silverLining = pow(saturate(cosTheta * 0.5 + 0.5), 10.0);
            float powder = 1.0 - exp(-density * 3.8);
            vec3 atmosphereSun;
            vec3 atmosphereSky;
            GetSunAndSkyScalarIrradiance(position, sunDirection, atmosphereSun, atmosphereSky);
            vec3 sunColor = vec3(1.0, 0.88, 0.66) * atmosphereSun *
                (phase * (sunTransmittance + multipleScattering * 0.34) + silverLining * sunTransmittance * 0.42) *
                (0.62 + 0.68 * lightFacing) *
                (1.0 + powder * u_powderStrength * 0.42);
            vec3 skyColor = atmosphereSky * (0.24 + 0.30 * heightFraction) * (0.78 + 0.22 * multipleScattering);
            vec3 groundBounce = vec3(0.44, 0.38, 0.31) * (1.0 - heightFraction) * u_groundBounceStrength * 0.42 * (0.45 + 0.55 * lightFacing);
            vec3 sampleLight = sunColor + skyColor;
            float sampleAlpha = 1.0 - exp(-extinction);

            cloudLight += transmittance * (sampleLight + groundBounce) * sampleAlpha;
            weightedDepth += distanceAlongRay * transmittance * sampleAlpha;
            depthWeight += transmittance * sampleAlpha;
            transmittance *= exp(-extinction);
            alpha = 1.0 - transmittance;
        }

        stepSize *= 1.018;
        distanceAlongRay += stepSize;
    }

    if (alpha <= 0.001) {
        FRAG_COLOR = sceneColor;
        return;
    }

    float horizonFade = saturate(dot(rayDirection, normalize(u_cameraPositionWC)) * 2.5 + 0.8);
    alpha *= horizonFade;
    vec3 cloudColor = cloudLight / max(alpha, 0.001);
    vec3 finalColor = mix(sceneColor.rgb, cloudColor, saturate(alpha * 0.82));
    float frontDistance = weightedDepth / max(depthWeight, 0.001);
    finalColor = applyAerialPerspective(finalColor, rayDirection, sunDirection, frontDistance, alpha);
    finalColor = applyCloudHaze(finalColor, rayDirection, sunDirection, frontDistance, alpha * (1.0 - saturate(u_atmosphereParams.x) * 0.55));
    FRAG_COLOR = vec4(finalColor, sceneColor.a);
}
`,Ln={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(t){const e=t,a=xa(),r=Q(null),s=Q(!1),n=Q(!1),m=Q(!1),y=Q(!1),_=Q(!1),T=Q(!1),F=Q({coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,bsmShadow:!1,shadowResolution:256,maxDistance:36e4,stepCount:48}),k=Se(()=>[{id:"fog",label:"Height Fog",type:"toggle",value:s.value},{id:"volumetricClouds",label:"Clouds",type:"toggle",value:n.value},{id:"hbao",label:"HBAO",type:"toggle",value:m.value},{id:"tiltShift",label:"Tilt Shift",type:"toggle",value:y.value},{id:"atmosphere",label:"Atmosphere + Bloom",type:"toggle",value:_.value}]);let A=null,E=null,p=null,S=!1,b=null,P=null,i=!1,h=null,f=null,w=!1,l=null,g=null,u=null,v=null,D=null,N=null,q=null,j=null,ee=!1,V=null,te=null,le=0,ne=0,pe=typeof performance<"u"?performance.now():Date.now();const De={};function Ae(){return u||(u=pa(()=>import("./cesiumFxRuntime-DwbESWKF.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(o=>{var I;const d=(I=o==null?void 0:o.getCesiumFxEchartsRuntime)==null?void 0:I.call(o);if(!d)throw new Error("Cinematic FX 图表运行时加载失败");return g=d,d}).catch(o=>{throw u=null,o}),u)}async function Qe(){return g||Ae()}const Me={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},ce={texture:null,matrices:null,inverseMatrices:null,splits:null,params:null},R={hdr:null,bloom:null,sky:null};nr(()=>{Xe()}),ir(()=>{yt()}),we(()=>e.controls,o=>{G(o||{})},{deep:!0,immediate:!0});function G(o){Object.prototype.hasOwnProperty.call(o,"fog")&&(s.value=!!o.fog),Object.prototype.hasOwnProperty.call(o,"volumetricClouds")&&(n.value=!!o.volumetricClouds),o.clouds&&typeof o.clouds=="object"&&(F.value=fe(o.clouds),F.value.bsmShadow&&(S=!1)),Object.prototype.hasOwnProperty.call(o,"hbao")&&(m.value=!!o.hbao),Object.prototype.hasOwnProperty.call(o,"tiltShift")&&(y.value=!!o.tiltShift),Object.prototype.hasOwnProperty.call(o,"atmosphere")&&(_.value=!!o.atmosphere)}function z({controlId:o,value:d}){const I=!!d,H={fog:s,volumetricClouds:n,hbao:m,tiltShift:y,atmosphere:_}[o];H&&(H.value=I)}function fe(o={}){return{coverage:C(o.coverage,.52,.18,.82),density:C(o.density,9e-5,25e-6,18e-5),shadowStrength:C(o.shadowStrength,.82,0,1),beerShadowStrength:C(o.beerShadowStrength,.64,0,1),multiScattering:C(o.multiScattering,.58,0,1),powderStrength:C(o.powderStrength,.72,0,1.4),hazeStrength:C(o.hazeStrength,.38,0,1),groundBounceStrength:C(o.groundBounceStrength,.26,0,1),bsmShadow:o.bsmShadow===!0,shadowResolution:Math.round(C(o.shadowResolution,256,128,512)/128)*128,maxDistance:C(o.maxDistance,36e4,12e4,9e5),stepCount:Math.round(C(o.stepCount,48,24,80))}}function Xe(){let o=0;v=window.setInterval(async()=>{var O,H;o+=1;const d=(O=e.getViewer)==null?void 0:O.call(e),I=((H=e.getCesium)==null?void 0:H.call(e))||window.Cesium;if(d&&I){clearInterval(v),v=null;try{_e(d),ft(d),Ne(d,I),tt(d,I),a.success("高级视觉效果已启用。")}catch(K){a.error("高级视觉效果初始化失败",K),a.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}o>=150&&(clearInterval(v),v=null,a.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function _e(o){var I,O,H,K,J,ge;const d=o==null?void 0:o.scene;if(d){if(typeof d.highDynamicRange=="boolean"&&(R.hdr=d.highDynamicRange),(I=d.postProcessStages)!=null&&I.bloom){const se=d.postProcessStages.bloom;R.bloom={enabled:!!se.enabled,contrast:(O=se.uniforms)==null?void 0:O.contrast,brightness:(H=se.uniforms)==null?void 0:H.brightness,delta:(K=se.uniforms)==null?void 0:K.delta,sigma:(J=se.uniforms)==null?void 0:J.sigma,stepSize:(ge=se.uniforms)==null?void 0:ge.stepSize}}d.skyAtmosphere&&(R.sky={hueShift:d.skyAtmosphere.hueShift,saturationShift:d.skyAtmosphere.saturationShift,brightnessShift:d.skyAtmosphere.brightnessShift})}}function Ne(o,d){var O;!((O=o==null?void 0:o.scene)!=null&&O.postProcessStages)||!(d!=null&&d.PostProcessStage)||(Ye(o,d),Oe(o,d),Ue(o,d),Re(o,d),_.value?Y(o,d,1200):B(o))}function ft(o){var I;const d=o==null?void 0:o.scene;(I=d==null?void 0:d.renderError)!=null&&I.addEventListener&&(d.rethrowRenderErrors=!1,j=d.renderError.addEventListener((O,H)=>{a.error("Cesium 渲染异常，已触发降级保护",H),mt(),ee||(ee=!0,a.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function mt(){var o;s.value=!1,n.value=!1,y.value=!1,m.value=!1,_.value=!1,A&&(A.enabled=!1),E&&(E.enabled=!1),p&&(p.show=!1,(o=p.setParams)==null||o.call(p,{enabled:!1})),ce.params&&(ce.params.x=0,ce.params.w=0),h&&(h.enabled=!1),f&&(f.enabled=!1)}function Ye(o,d){A||(A=new d.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
      uniform sampler2D colorTexture;
      uniform sampler2D depthTexture;
      uniform vec3 fogColor;
      uniform float fogDensity;
      uniform float cameraHeightFactor;

      #if __VERSION__ == 300
      in vec2 v_textureCoordinates;
      #define SAMPLE_TEX texture
      #define FRAG_COLOR out_FragColor
      #else
      varying vec2 v_textureCoordinates;
      #define SAMPLE_TEX texture2D
      #define FRAG_COLOR gl_FragColor
      #endif

      float getLinearDepth(vec2 uv) {
        float depth = czm_readDepth(depthTexture, uv);
        if (depth == 0.0) {
          return 0.0;
        }
        vec4 eyeCoordinate = czm_windowToEyeCoordinates(gl_FragCoord.xy, depth);
        return max(0.0, -eyeCoordinate.z);
      }

      void main() {
        vec4 color = SAMPLE_TEX(colorTexture, v_textureCoordinates);
        float linearDepth = getLinearDepth(v_textureCoordinates);

        float depthFog = 1.0 - exp(-linearDepth * fogDensity);
        float groundBoost = clamp(1.0 - cameraHeightFactor, 0.0, 1.0);
        float fogAmount = clamp(depthFog * (0.22 + 1.28 * groundBoost), 0.0, 0.9);

        vec3 finalColor = mix(color.rgb, fogColor, fogAmount);
        FRAG_COLOR = vec4(finalColor, color.a);
      }
    `,uniforms:{fogColor:new d.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),o.scene.postProcessStages.add(A),A.enabled=s.value)}function Oe(o,d){var Ge,$e;if(E||!(d!=null&&d.PostProcessStage))return;Be(o,d);const I=Number(($e=(Ge=d==null?void 0:d.Ellipsoid)==null?void 0:Ge.WGS84)==null?void 0:$e.maximumRadius)||6378137,O=new d.Cartesian3,H=new d.Cartesian3,K=new d.Cartesian3(.35,-.25,.9),J=new d.Matrix4,ge=Array.from({length:4},()=>new d.Matrix4),se=Array.from({length:4},()=>new d.Matrix4),xe=new d.Cartesian4(0,0,0,0),Ie=new d.Cartesian4(0,1,256,0),Te=new d.Cartesian4(1,1,1,.85);d.Cartesian3.normalize(K,K),ce.texture=Le(o,d),ce.matrices=ge,ce.inverseMatrices=se,ce.splits=xe,ce.params=Ie,E=new d.PostProcessStage({name:"cesium_ecef_volumetric_clouds_stage",fragmentShader:Mn,uniforms:{u_cloudShadowTexture:()=>ce.texture,u_atmosphereTransmittanceTexture:()=>He(o,d),u_atmosphereIrradianceTexture:()=>pt(o,d),u_atmosphereScatteringTexture:()=>gt(o,d),u_cameraPositionWC:O,u_cameraDirectionWC:H,u_inverseViewProjection:J,u_sunDirectionWC:K,u_cloudShadowMatrices:()=>ce.matrices,u_cloudShadowInverseMatrices:()=>ce.inverseMatrices,u_cloudShadowSplits:()=>ce.splits,u_cloudShadowParams:()=>ce.params,u_cloudBottomRadius:I+1500,u_cloudTopRadius:I+8500,u_maxDistance:42e4,u_coverage:.52,u_density:85e-6,u_shadowStrength:.82,u_beerShadowStrength:.64,u_multiScattering:.58,u_powderStrength:.72,u_hazeStrength:.38,u_groundBounceStrength:.26,u_stepCount:48,u_timeSeconds:0,u_atmosphereParams:Te}}),o.scene.postProcessStages.add(E),E.enabled=n.value}function Le(o,d){var H;if(P)return P;const I=(H=o==null?void 0:o.scene)==null?void 0:H.context;if(!I||!(d!=null&&d.Texture))return null;const O=I.defaultTexture||I.defaultTexture2D;return O?(P=O,i=!1,P):(P=new d.Texture({context:I,width:1,height:1,pixelFormat:d.PixelFormat.RGBA,pixelDatatype:d.PixelDatatype.UNSIGNED_BYTE,source:{width:1,height:1,arrayBufferView:new Uint8Array([0,0,0,0])}}),i=!0,P)}function Be(o,d){var I;if(!(b||!((I=o==null?void 0:o.scene)!=null&&I.context)||!(d!=null&&d.Texture)))try{b=new nn(o,{cesium:d})}catch{b=null}}function He(o,d){return Be(o,d),(b==null?void 0:b.transmittanceTexture)||Le(o,d)}function pt(o,d){return Be(o,d),(b==null?void 0:b.irradianceTexture)||Le(o,d)}function gt(o,d){return Be(o,d),(b==null?void 0:b.scatteringTexture)||Le(o,d)}function ct(o,d){var H;const I=F.value;if(!(n.value&&I.bsmShadow&&!S)){et(o);return}if(!(p||!((H=o==null?void 0:o.scene)!=null&&H.primitives)||!d))try{p=new bn(o,{cesium:d,enabled:!0,shadowResolution:I.shadowResolution,maxDistance:I.maxDistance}),o.scene.primitives.add(p)}catch{S=!0,p=null}}function et(o){var I,O,H,K;if(!p)return;const d=((I=e.getCesium)==null?void 0:I.call(e))||window.Cesium;if(ce.params&&(ce.params.x=0,ce.params.w=0),ce.texture=Le(o,d),(O=o==null?void 0:o.scene)!=null&&O.primitives)try{o.scene.primitives.remove(p)}catch{(H=p.destroy)==null||H.call(p)}else(K=p.destroy)==null||K.call(p);p=null}function Ue(o,d){var O,H;const I=(O=o==null?void 0:o.scene)==null?void 0:O.postProcessStages;I&&(I.ambientOcclusion?(f=I.ambientOcclusion,w=!1):(H=d==null?void 0:d.PostProcessStageLibrary)!=null&&H.createAmbientOcclusionStage&&(f=d.PostProcessStageLibrary.createAmbientOcclusionStage(),I.add(f),w=!0),f&&(f.enabled=m.value,f.uniforms&&("intensity"in f.uniforms&&(f.uniforms.intensity=4.2),"bias"in f.uniforms&&(f.uniforms.bias=.08),"lengthCap"in f.uniforms&&(f.uniforms.lengthCap=.35),"stepSize"in f.uniforms&&(f.uniforms.stepSize=1.8),"frustumLength"in f.uniforms&&(f.uniforms.frustumLength=1200))))}function Re(o,d){h||(h=new d.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
      uniform sampler2D colorTexture;
      uniform float focusCenter;
      uniform float focusSpread;
      uniform float blurStrength;

      #if __VERSION__ == 300
      in vec2 v_textureCoordinates;
      #define SAMPLE_TEX texture
      #define FRAG_COLOR out_FragColor
      #else
      varying vec2 v_textureCoordinates;
      #define SAMPLE_TEX texture2D
      #define FRAG_COLOR gl_FragColor
      #endif

      void main() {
        vec2 uv = v_textureCoordinates;
        vec4 centerColor = SAMPLE_TEX(colorTexture, uv);

        float dist = abs(uv.y - focusCenter);
        float blurMix = smoothstep(focusSpread * 0.7, focusSpread * 2.1, dist) * blurStrength;

        vec2 o = vec2(0.0035 * blurMix, 0.0);
        vec4 blurColor = vec4(0.0);
        blurColor += SAMPLE_TEX(colorTexture, uv - 3.0 * o) * 0.12;
        blurColor += SAMPLE_TEX(colorTexture, uv - 2.0 * o) * 0.16;
        blurColor += SAMPLE_TEX(colorTexture, uv - 1.0 * o) * 0.18;
        blurColor += SAMPLE_TEX(colorTexture, uv) * 0.20;
        blurColor += SAMPLE_TEX(colorTexture, uv + 1.0 * o) * 0.18;
        blurColor += SAMPLE_TEX(colorTexture, uv + 2.0 * o) * 0.16;
        blurColor += SAMPLE_TEX(colorTexture, uv + 3.0 * o) * 0.12;

        FRAG_COLOR = mix(centerColor, blurColor, clamp(blurMix * 1.05, 0.0, 1.0));
      }
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),o.scene.postProcessStages.add(h),h.enabled=!1)}function tt(o,d){const I=o==null?void 0:o.scene;I&&(q=I.preRender.addEventListener(()=>{var J;const O=at(o),H=Number(((J=o==null?void 0:o.camera)==null?void 0:J.pitch)??-1.2);le+=1;const K=typeof performance<"u"?performance.now():Date.now();if(K-pe>=1e3&&(ne=Math.round(le*1e3/(K-pe)),le=0,pe=K),A&&(A.enabled=s.value,A.uniforms.cameraHeightFactor=Ee(O,150,12e3),A.uniforms.fogDensity=55e-5+(1-A.uniforms.cameraHeightFactor)*.00125),E&&(E.enabled=n.value,ct(o,d),p&&(p.show=n.value&&F.value.bsmShadow),E.enabled&&ut(o,d,O)),f&&(f.enabled=m.value),h){const ge=H>-.62,se=ge?c((H+.62)/.5):0;h.enabled=y.value&&ge,h.uniforms.blurStrength=se}_.value?Y(o,d,O):B(o)}))}function ut(o,d,I){var Pt,rt,Da;const O=E,H=o==null?void 0:o.scene,K=o==null?void 0:o.camera;if(!O||!H||!K||!d)return;const J=O.uniforms;d.Cartesian3.clone(K.positionWC,J.u_cameraPositionWC),d.Cartesian3.clone(K.directionWC,J.u_cameraDirectionWC);const ge=(Pt=H.context)==null?void 0:Pt.uniformState;ge!=null&&ge.inverseViewProjection?d.Matrix4.clone(ge.inverseViewProjection,J.u_inverseViewProjection):K.inverseViewProjectionMatrix&&d.Matrix4.clone(K.inverseViewProjectionMatrix,J.u_inverseViewProjection);const se=M(o,d);d.Cartesian3.clone(se,J.u_sunDirectionWC);const xe=Ee(I,1e4,18e4),Ie=d.Cartesian3.normalize(K.positionWC,De),Te=d.Cartesian3.dot(Ie,se),Ge=1-c((Te+.08)/.55),$e=_.value?1:.62,ye=F.value,Lt=Number((Da=(rt=d==null?void 0:d.Ellipsoid)==null?void 0:rt.WGS84)==null?void 0:Da.maximumRadius)||6378137;J.u_coverage=ye.coverage,J.u_density=ye.density*(1-xe*.22),J.u_maxDistance=ye.maxDistance,J.u_shadowStrength=ye.shadowStrength*(1-xe*.12),J.u_beerShadowStrength=ye.beerShadowStrength*(1-xe*.18),J.u_multiScattering=ye.multiScattering,J.u_powderStrength=ye.powderStrength,J.u_hazeStrength=ye.hazeStrength*(1-xe*.35),J.u_groundBounceStrength=ye.groundBounceStrength,J.u_stepCount=ye.stepCount,J.u_timeSeconds=$(o,d),J.u_atmosphereParams&&(J.u_atmosphereParams.x=$e,J.u_atmosphereParams.y=.92+Ge*.28,J.u_atmosphereParams.z=.82+Ge*.42,J.u_atmosphereParams.w=(.58+$e*.42)*(1-xe*.28)),p==null||p.setParams({enabled:n.value&&ye.bsmShadow&&!S,coverage:J.u_coverage,density:J.u_density,bottomRadius:Lt+1500,topRadius:Lt+8500,maxDistance:J.u_maxDistance,shadowResolution:ye.shadowResolution,timeSeconds:J.u_timeSeconds}),x(o,d,ye)}function x(o,d,I){var Ge,$e,ye,Lt,Pt;const O=ce.params,H=ce.splits,K=ce.matrices,J=ce.inverseMatrices;if(!O||!H||!K||!J)return;const ge=Le(o,d),se=p==null?void 0:p.resources,xe=(se==null?void 0:se.texture)||null,Ie=!!(n.value&&I.bsmShadow&&!S&&xe&&((Ge=se==null?void 0:se.status)!=null&&Ge.ready));ce.texture=Ie?xe:ge,O.x=Ie?1:0,O.y=Ie?Math.max((($e=se.options)==null?void 0:$e.cascadeCount)||1,1):1,O.z=Ie?Math.max(((ye=se.options)==null?void 0:ye.resolution)||1,1):1,O.w=Ie?I.beerShadowStrength:0;for(let rt=0;rt<4;rt+=1)d.Matrix4.clone(((Lt=se==null?void 0:se.cascadeMatrices)==null?void 0:Lt[rt])||d.Matrix4.IDENTITY,K[rt]),d.Matrix4.clone(((Pt=se==null?void 0:se.inverseCascadeMatrices)==null?void 0:Pt[rt])||d.Matrix4.IDENTITY,J[rt]);const Te=se==null?void 0:se.cascadeSplits;H.x=Number((Te==null?void 0:Te[0])||0),H.y=Number((Te==null?void 0:Te[1])||H.x),H.z=Number((Te==null?void 0:Te[2])||H.y),H.w=Number((Te==null?void 0:Te[3])||H.z)}function M(o,d){var H,K,J;const I=(J=(K=(H=o==null?void 0:o.scene)==null?void 0:H.context)==null?void 0:K.uniformState)==null?void 0:J.sunDirectionWC;if(I)return I;const O=new d.Cartesian3(.35,-.25,.9);return d.Cartesian3.normalize(O,O),O}function $(o,d){var I,O,H;try{const K=(I=o==null?void 0:o.clock)==null?void 0:I.currentTime;if(K&&((O=d==null?void 0:d.JulianDate)!=null&&O.secondsDifference)&&((H=d==null?void 0:d.JulianDate)!=null&&H.fromIso8601))return te||(te=d.JulianDate.fromIso8601("2026-01-01T00:00:00Z")),d.JulianDate.secondsDifference(K,te)}catch{}return(typeof performance<"u"?performance.now():Date.now())*.001}function Y(o,d,I){var ge;const O=o==null?void 0:o.scene;if(!O)return;V||(V=Kr(o)),Yr(o,d),typeof O.highDynamicRange=="boolean"&&(O.highDynamicRange=!0);const H=(ge=O.postProcessStages)==null?void 0:ge.bloom;H&&(H.enabled=!0,H.uniforms&&("contrast"in H.uniforms&&(H.uniforms.contrast=149),"brightness"in H.uniforms&&(H.uniforms.brightness=-.12),"delta"in H.uniforms&&(H.uniforms.delta=1),"sigma"in H.uniforms&&(H.uniforms.sigma=3.25),"stepSize"in H.uniforms&&(H.uniforms.stepSize=5)));const K=O.skyAtmosphere;if(!K)return;const J=Ee(I,500,12e4);K.hueShift=-.035+J*.035,K.saturationShift=-.14+J*.09,K.brightnessShift=.03+(1-J)*.08}function B(o){var H,K;const d=o==null?void 0:o.scene;if(!d)return;const I=((H=e.getCesium)==null?void 0:H.call(e))||window.Cesium;if(V){Jr(o,I,V),V=null;return}typeof d.highDynamicRange=="boolean"&&R.hdr!==null&&(d.highDynamicRange=R.hdr);const O=(K=d.postProcessStages)==null?void 0:K.bloom;O&&R.bloom&&(O.enabled=R.bloom.enabled,O.uniforms&&("contrast"in O.uniforms&&R.bloom.contrast!==void 0&&(O.uniforms.contrast=R.bloom.contrast),"brightness"in O.uniforms&&R.bloom.brightness!==void 0&&(O.uniforms.brightness=R.bloom.brightness),"delta"in O.uniforms&&R.bloom.delta!==void 0&&(O.uniforms.delta=R.bloom.delta),"sigma"in O.uniforms&&R.bloom.sigma!==void 0&&(O.uniforms.sigma=R.bloom.sigma),"stepSize"in O.uniforms&&R.bloom.stepSize!==void 0&&(O.uniforms.stepSize=R.bloom.stepSize))),d.skyAtmosphere&&R.sky&&(d.skyAtmosphere.hueShift=R.sky.hueShift,d.skyAtmosphere.saturationShift=R.sky.saturationShift,d.skyAtmosphere.brightnessShift=R.sky.brightnessShift)}function X(){D&&(clearInterval(D),D=null)}async function re(){var O,H;const o=!T.value;if(T.value=o,!o){X();return}const d=(O=e.getViewer)==null?void 0:O.call(e),I=((H=e.getCesium)==null?void 0:H.call(e))||window.Cesium;if(!d||!I){T.value=!1,a.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await ie(d,I),Fe(d,I),be(d,I)}catch(K){T.value=!1,a.error("图表模块加载失败",K)}}async function ie(o,d){await Qe(),await rr(),r.value&&(l||(l=g.init(r.value),We()),N||(N=()=>{l==null||l.resize()},window.addEventListener("resize",N)),l.resize(),be(o,d))}function Fe(o,d){D||(D=window.setInterval(()=>{!l||!T.value||be(o,d)},1200))}function be(o,d){var J;const I=new Date,O=`${W(I.getHours())}:${W(I.getMinutes())}:${W(I.getSeconds())}`,H=Number((at(o)/1e3).toFixed(2)),K=Number(d.Math.toDegrees(((J=o==null?void 0:o.camera)==null?void 0:J.pitch)??0).toFixed(1));U(Me.labels,O,20),U(Me.cameraHeightKm,H,20),U(Me.pitchDeg,K,20),U(Me.fps,ne,20),l.setOption({xAxis:{data:Me.labels},series:[{data:Me.cameraHeightKm},{data:Me.pitchDeg},{data:Me.fps}]})}function We(){l&&l.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function yt(){var I,O,H,K,J,ge;v&&(clearInterval(v),v=null),X();const o=(I=e.getViewer)==null?void 0:I.call(e),d=(O=o==null?void 0:o.scene)==null?void 0:O.postProcessStages;q&&(q(),q=null),j&&(j(),j=null),A&&d&&d.remove(A),A=null,E&&d&&d.remove(E),E=null,p&&((H=o==null?void 0:o.scene)!=null&&H.primitives)?o.scene.primitives.remove(p):p&&((K=p.destroy)==null||K.call(p)),p=null,i&&P&&((J=P.destroy)==null||J.call(P)),P=null,i=!1,ce.texture=null,ce.inverseMatrices=null,(ge=b==null?void 0:b.destroy)==null||ge.call(b),b=null,h&&d&&d.remove(h),h=null,f&&(w&&d&&d.remove(f),f=null),w=!1,o&&B(o),N&&(window.removeEventListener("resize",N),N=null),l&&(l.dispose(),l=null),g=null,ee=!1}function at(o){var H,K,J;const d=(K=(H=o==null?void 0:o.scene)==null?void 0:H.globe)==null?void 0:K.ellipsoid,I=(J=o==null?void 0:o.camera)==null?void 0:J.positionWC;if(!d||!I)return 0;const O=d.cartesianToCartographic(I);return Math.max(0,Number((O==null?void 0:O.height)??0))}function Ee(o,d,I){return!Number.isFinite(o)||I<=d?0:c((o-d)/(I-d))}function c(o){return Math.min(1,Math.max(0,Number(o)||0))}function C(o,d,I,O){const H=Number(o);return Number.isFinite(H)?Math.min(O,Math.max(I,H)):d}function U(o,d,I){o.push(d),o.length>I&&o.shift()}function W(o){return String(o).padStart(2,"0")}return(o,d)=>t.headless?me("",!0):(Z(),ae("div",wn,[L("div",Tn,[L("div",Cn,[d[0]||(d[0]=L("span",{class:"panel-title"},"Cinematic FX",-1)),L("button",{class:"panel-btn",onClick:re},de(T.value?"隐藏图表":"显示图表"),1)]),L("div",Dn,[ve(Sa,{title:"Effect Parameters",controls:k.value,onChange:z},null,8,["controls"])]),Ze(L("div",{ref_key:"chartRef",ref:r,class:"fx-chart"},null,512),[[wt,T.value]])])]))}},Pn=Mt(Ln,[["__scopeId","data-v-90d508c8"]]),Fn={key:0,class:"launcher-count"},An={class:"panel-header"},En={class:"panel-title-block"},Rn={class:"panel-mark"},In={class:"panel-copy"},kn={class:"panel-subtitle"},zn={class:"panel-actions"},Nn=["title"],On={class:"panel-tabs","aria-label":"3D 工具分类"},Bn=["aria-pressed","onClick"],Hn={class:"panel-scroll"},Un={class:"panel-page"},Wn={class:"overview-grid"},Gn={class:"overview-tile"},$n={class:"overview-tile"},qn={class:"overview-tile"},jn={key:0,class:"quick-actions"},Vn=["disabled","onClick"],Xn={key:1,class:"empty-state"},Yn={class:"panel-page"},Kn=["aria-expanded"],Jn={class:"section-main"},Zn={class:"section-meta"},Qn={key:0,class:"section-body"},ei={class:"option-grid"},ti=["disabled","aria-pressed","title","onClick"],ai={class:"custom-basemap-input-row"},ri=["disabled"],ni={key:0,class:"custom-basemap-current"},ii=["aria-expanded"],oi={class:"section-main"},si={class:"section-meta"},li={key:0,class:"section-body"},ci={class:"option-grid"},ui=["aria-pressed","title","onClick"],di=["aria-expanded"],hi={class:"section-main"},fi={class:"section-meta"},mi={key:0,class:"section-body"},pi={class:"overlay-list"},gi=["disabled","aria-pressed","title","onClick"],yi={class:"overlay-copy"},vi={class:"overlay-title"},xi={key:0,class:"overlay-desc"},_i={key:3,class:"empty-state"},bi={class:"panel-page"},Si={class:"module-list"},wi=["aria-expanded","onClick"],Ti={class:"module-icon"},Ci={class:"module-copy"},Di={class:"module-title"},Mi={key:0,class:"module-desc"},Li={class:"module-head-side"},Pi={key:0,class:"module-body"},Fi={key:0,class:"module-actions"},Ai=["disabled","onClick"],Ei={key:0,class:"empty-state"},Ri={class:"panel-page"},Ii={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},ki={class:"data-upload-hint"},zi={key:0,class:"data-source-list"},Ni={class:"data-source-head"},Oi={class:"data-source-count"},Bi=["title","aria-label","onClick"],Hi={class:"data-source-icon"},Ui={class:"data-source-copy"},Wi={class:"data-source-name"},Gi={class:"data-source-type"},$i={key:1,class:"empty-state"},za=3,qi=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",ji={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(t,{emit:e}){const a=t,r=Q(Array.isArray(a.loadedDataSources)?a.loadedDataSources:[]);we(()=>a.loadedDataSources,R=>{const G=Array.isArray(R)?R:[];G!==r.value&&(r.value=G)},{immediate:!0});const s=e,n=j(),m=n.uiStateVersion===za,y=Q(n.activeTab||"scene"),_=Q(!!n.compactMode),T=Q(new Set(m?n.expandedLayerSectionIds||[]:[])),F=Q(new Set(m?n.expandedModuleIds||[]:[])),k=Q(a.customBasemapUrl||""),A=Q(null),E=Se(()=>a.embedded||a.open),p=Se(()=>a.modules.find(R=>R.id==="scene")||null),S=Se(()=>{var R;return((R=p.value)==null?void 0:R.actions)||[]}),b=Se(()=>a.modules.filter(R=>R.id!=="scene")),P=Se(()=>b.value.filter(R=>R.statusTone==="success"||R.statusTone==="warning").length),i=Se(()=>a.overlayOptions.filter(R=>!!R.active).length),h=[{id:"scene",label:"场景",icon:oa},{id:"layers",label:"图层",icon:sa},{id:"data",label:"数据",icon:ga},{id:"modules",label:"模块",icon:ia}],f=Se(()=>{var R;return((R=a.basemapOptions.find(G=>G.value===a.activeBasemap))==null?void 0:R.label)||"未选择"}),w=Se(()=>{var R;return((R=a.terrainOptions.find(G=>G.value===a.activeTerrain))==null?void 0:R.label)||"未选择"});we(()=>a.modules.map(R=>R.id),R=>{R.includes(y.value)||y.value==="scene"||y.value==="layers"||y.value==="modules"||(y.value="scene")},{immediate:!0}),we([y,_,T,F],ee,{deep:!0}),we(()=>a.customBasemapUrl,R=>{R!==k.value&&(k.value=R||"")});function l(R){s("update:open",R)}function g(R){return T.value.has(R)}function u(R){const G=new Set(T.value);G.has(R)?G.delete(R):G.add(R),T.value=G}function v(R){return F.value.has(R)}function D(R){const G=new Set(F.value);G.has(R)?G.delete(R):G.add(R),F.value=G}function N(R){R!=null&&R.disabled||s("update:activeBasemap",R.value)}function q(){s("custom-basemap-submit",{url:k.value})}function j(){if(typeof window>"u")return{};try{const R=window.localStorage.getItem(a.storageKey);return R?JSON.parse(R):{}}catch{return{}}}function ee(){if(!(typeof window>"u"))try{window.localStorage.setItem(a.storageKey,JSON.stringify({uiStateVersion:za,activeTab:y.value,compactMode:_.value,expandedLayerSectionIds:[...T.value],expandedModuleIds:[...F.value]}))}catch{}}function V(R){return{scene:oa,effects:Pr,clouds:Lr,wind:Mr,fluid:Dr}[R]||ia}function te(R,G){var fe;return((fe={scene:{home:Tr,everest:Aa,tileset:Xt},wind:{load:wr,clear:la},fluid:{pick:Ea,clear:la}}[R])==null?void 0:fe[G])||Cr}function le(R,G){s("module-action",{moduleId:R,actionId:G})}function ne(R,G,z){const fe=G.type==="range"?Number(z):z;s("control-change",{moduleId:R,controlId:G.id,value:fe})}function pe(R){R.disabled||s("overlay-toggle",{overlayId:R.value,value:!R.active})}function De(R){return{geojson:Ht,json:Ht,kml:Ra,kmz:Ra,shp:sa,gltf:Xt,czml:Ht,"3dtiles":Xt}[R]||Ht}function Ae(R){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[R]||R.toUpperCase()}function Qe(R){var z;const G=(z=R.target)==null?void 0:z.files;!G||G.length===0||(s("data-import",{files:Array.from(G)}),A.value&&(A.value.value=""))}function Me(R){s("data-remove",{id:R})}function ce(){s("data-clear-all")}return(R,G)=>(Z(),ae("aside",{class:Pe(["cesium-tool-shell",{"is-open":E.value,"is-embedded":t.embedded}])},[!t.embedded&&!E.value?(Z(),ae("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:G[0]||(G[0]=z=>l(!0))},[ve(oe(ia),{size:18,"stroke-width":"2"}),G[7]||(G[7]=L("span",null,"高级控制台",-1)),P.value?(Z(),ae("span",Fn,de(P.value),1)):me("",!0)])):me("",!0),Ze(L("section",{class:Pe(["cesium-tool-panel",{compact:_.value}]),"aria-label":"Cesium 高级控制台"},[L("header",An,[L("div",En,[L("span",Rn,[ve(oe(oa),{size:18,"stroke-width":"2"})]),L("span",In,[G[8]||(G[8]=L("span",{class:"panel-title"},"3D 高级控制台",-1)),L("span",kn,de(f.value)+" / "+de(w.value),1)])]),L("div",zn,[L("button",{class:"icon-btn",type:"button",title:_.value?"切换为舒展布局":"切换为紧凑布局",onClick:G[1]||(G[1]=z=>_.value=!_.value)},[ve(oe(br),{size:16,"stroke-width":"2"})],8,Nn),t.embedded?me("",!0):(Z(),ae("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:G[2]||(G[2]=z=>l(!1))},[ve(oe(Pa),{size:17,"stroke-width":"2"})]))])]),L("nav",On,[(Z(),ae(st,null,dt(h,z=>L("button",{key:z.id,class:Pe(["tab-btn",{active:y.value===z.id}]),type:"button","aria-pressed":y.value===z.id,onClick:fe=>y.value=z.id},[(Z(),Ve(_t(z.icon),{size:15,"stroke-width":"2"})),L("span",null,de(z.label),1)],10,Bn)),64))]),L("div",Hn,[Ze(L("section",Un,[L("div",Wn,[L("div",Gn,[G[9]||(G[9]=L("span",{class:"overview-label"},"地图源",-1)),L("strong",null,de(f.value),1)]),L("div",$n,[G[10]||(G[10]=L("span",{class:"overview-label"},"地形",-1)),L("strong",null,de(w.value),1)]),L("div",qn,[G[11]||(G[11]=L("span",{class:"overview-label"},"模块",-1)),L("strong",null,de(P.value)+"/"+de(b.value.length),1)])]),S.value.length?(Z(),ae("div",jn,[(Z(!0),ae(st,null,dt(S.value,z=>(Z(),ae("button",{key:z.id,class:Pe(["tool-action",[z.variant||"default",{active:z.active}]]),disabled:z.disabled,type:"button",onClick:fe=>le(p.value.id,z.id)},[(Z(),Ve(_t(te(p.value.id,z.id)),{size:15,"stroke-width":"2"})),jt(" "+de(z.label),1)],10,Vn))),128))])):(Z(),ae("div",Xn," 暂无场景快捷操作 "))],512),[[wt,y.value==="scene"]]),Ze(L("section",Yn,[t.basemapOptions.length?(Z(),ae("div",{key:0,class:Pe(["option-group",{expanded:g("basemap")}])},[L("button",{class:"section-head section-toggle",type:"button","aria-expanded":g("basemap"),onClick:G[3]||(G[3]=z=>u("basemap"))},[L("span",Jn,[ve(oe(sa),{size:16,"stroke-width":"2"}),G[12]||(G[12]=L("span",null,"底图源",-1))]),L("span",Zn,[L("span",null,de(f.value),1),ve(oe(Bt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Kn),g("basemap")?(Z(),ae("div",Qn,[L("div",ei,[(Z(!0),ae(st,null,dt(t.basemapOptions,z=>(Z(),ae("button",{key:z.value,class:Pe(["option-card",{active:z.value===t.activeBasemap}]),type:"button",disabled:z.disabled,"aria-pressed":z.value===t.activeBasemap,title:z.description||z.label,onClick:fe=>N(z)},[L("span",null,de(z.label),1),z.value===t.activeBasemap?(Z(),Ve(oe(Fa),{key:0,size:15,"stroke-width":"2.4"})):me("",!0)],10,ti))),128))]),L("form",{class:"custom-basemap-editor",onSubmit:Ct(q,["prevent"])},[L("div",ai,[ve(oe(Sr),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),Ze(L("input",{"onUpdate:modelValue":G[4]||(G[4]=z=>k.value=z),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Vt,k.value]]),L("button",{class:"custom-basemap-submit",type:"submit",disabled:!k.value.trim(),title:"加载自定义 XYZ"},[ve(oe(lr),{size:14,"stroke-width":"2"}),G[13]||(G[13]=L("span",null,"加载",-1))],8,ri)]),t.customBasemapUrl?(Z(),ae("div",ni,de(t.customBasemapUrl),1)):me("",!0)],32)])):me("",!0)],2)):me("",!0),t.terrainOptions.length?(Z(),ae("div",{key:1,class:Pe(["option-group",{expanded:g("terrain")}])},[L("button",{class:"section-head section-toggle",type:"button","aria-expanded":g("terrain"),onClick:G[5]||(G[5]=z=>u("terrain"))},[L("span",oi,[ve(oe(Aa),{size:16,"stroke-width":"2"}),G[14]||(G[14]=L("span",null,"地形",-1))]),L("span",si,[L("span",null,de(w.value),1),ve(oe(Bt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,ii),g("terrain")?(Z(),ae("div",li,[L("div",ci,[(Z(!0),ae(st,null,dt(t.terrainOptions,z=>(Z(),ae("button",{key:z.value,class:Pe(["option-card",{active:z.value===t.activeTerrain}]),type:"button","aria-pressed":z.value===t.activeTerrain,title:z.description||z.label,onClick:fe=>R.$emit("update:activeTerrain",z.value)},[L("span",null,de(z.label),1),z.value===t.activeTerrain?(Z(),Ve(oe(Fa),{key:0,size:15,"stroke-width":"2.4"})):me("",!0)],10,ui))),128))])])):me("",!0)],2)):me("",!0),t.overlayOptions.length?(Z(),ae("div",{key:2,class:Pe(["option-group",{expanded:g("overlay")}])},[L("button",{class:"section-head section-toggle",type:"button","aria-expanded":g("overlay"),onClick:G[6]||(G[6]=z=>u("overlay"))},[L("span",hi,[ve(oe(Ea),{size:16,"stroke-width":"2"}),G[15]||(G[15]=L("span",null,"叠加层",-1))]),L("span",fi,[L("span",null,de(i.value)+"/"+de(t.overlayOptions.length),1),ve(oe(Bt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,di),g("overlay")?(Z(),ae("div",mi,[L("div",pi,[(Z(!0),ae(st,null,dt(t.overlayOptions,z=>(Z(),ae("button",{key:z.value,class:Pe(["overlay-row",{active:!!z.active}]),type:"button",disabled:z.disabled,"aria-pressed":!!z.active,title:z.description||z.label,onClick:fe=>pe(z)},[L("span",yi,[L("span",vi,de(z.label),1),z.description?(Z(),ae("span",xi,de(z.description),1)):me("",!0)]),L("span",{class:Pe(["toggle-control",{active:!!z.active}]),"aria-hidden":"true"},[...G[16]||(G[16]=[L("span",{class:"toggle-track"},[L("span",{class:"toggle-thumb"})],-1)])],2)],10,gi))),128))])])):me("",!0)],2)):me("",!0),!t.basemapOptions.length&&!t.terrainOptions.length&&!t.overlayOptions.length?(Z(),ae("div",_i," 暂无图层配置项 ")):me("",!0)],512),[[wt,y.value==="layers"]]),Ze(L("section",bi,[L("div",Si,[(Z(!0),ae(st,null,dt(b.value,z=>{var fe,Xe;return Z(),ae("article",{key:z.id,class:Pe(["module-item",{expanded:v(z.id)}])},[L("button",{class:"module-head",type:"button","aria-expanded":v(z.id),onClick:_e=>D(z.id)},[L("span",Ti,[(Z(),Ve(_t(V(z.id)),{size:16,"stroke-width":"2"}))]),L("span",Ci,[L("span",Di,de(z.title),1),z.description?(Z(),ae("span",Mi,de(z.description),1)):me("",!0)]),L("span",Li,[z.status?(Z(),ae("span",{key:0,class:Pe(["module-status",z.statusTone||"neutral"])},de(z.status),3)):me("",!0),ve(oe(Bt),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,wi),v(z.id)?(Z(),ae("div",Pi,[(fe=z.actions)!=null&&fe.length?(Z(),ae("div",Fi,[(Z(!0),ae(st,null,dt(z.actions,_e=>(Z(),ae("button",{key:_e.id,class:Pe(["tool-action",[_e.variant||"default",{active:_e.active}]]),disabled:_e.disabled,type:"button",onClick:Ne=>le(z.id,_e.id)},[(Z(),Ve(_t(te(z.id,_e.id)),{size:14,"stroke-width":"2"})),jt(" "+de(_e.label),1)],10,Ai))),128))])):me("",!0),(Xe=z.controls)!=null&&Xe.length?(Z(),ae("div",{key:1,class:Pe(["control-list control-list-gui",z.controlLayout?`control-list-${z.controlLayout}`:""])},[ve(Sa,{title:z.title,controls:z.controls,onChange:_e=>ne(z.id,_e.control,_e.value)},null,8,["title","controls","onChange"])],2)):me("",!0)])):me("",!0)],2)}),128))]),b.value.length?me("",!0):(Z(),ae("div",Ei," 暂无可用功能模块 "))],512),[[wt,y.value==="modules"]]),Ze(L("section",Ri,[L("label",Ii,[L("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:A,class:"data-file-input",type:"file",multiple:"",accept:qi,onChange:Qe},null,544),L("div",ki,[ve(oe(ga),{size:28,"stroke-width":"1.5"}),G[17]||(G[17]=L("span",null,"选择文件或拖拽到此处",-1)),G[18]||(G[18]=L("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),r.value.length?(Z(),ae("div",zi,[L("div",Ni,[L("span",Oi," 已加载 "+de(r.value.length)+" 个数据源 ",1),L("button",{class:"tool-action danger",type:"button",onClick:ce},[ve(oe(la),{size:13,"stroke-width":"2"}),G[19]||(G[19]=jt(" 全部清除 ",-1))])]),(Z(!0),ae(st,null,dt(r.value,z=>(Z(),ae("button",{key:z.id,class:"data-source-row",type:"button",title:`点击移除 ${z.name} (${Ae(z.type)})`,"aria-label":`移除 ${z.name}`,onClick:fe=>Me(z.id)},[L("span",Hi,[(Z(),Ve(_t(De(z.type)),{size:15,"stroke-width":"2"}))]),L("span",Ui,[L("span",Wi,de(z.name),1),L("span",Gi,de(Ae(z.type)),1)]),ve(oe(Pa),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,Bi))),128))])):(Z(),ae("div",$i," 暂无已导入的数据 "))],512),[[wt,y.value==="data"]])])],2),[[wt,t.embedded||E.value]])],2))}},Vi=Mt(ji,[["__scopeId","data-v-69fdbc10"]]),Xi={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},Yi={class:"dialog-header"},Ki={class:"dialog-title-row"},Ji={class:"dialog-file-name"},Zi={class:"coord-fields"},Qi={class:"coord-field"},eo={key:0,class:"coord-error"},to={class:"coord-field"},ao={key:0,class:"coord-error"},ro={class:"coord-field"},no={key:0,class:"coord-error"},io={class:"dialog-actions"},oo=["disabled"],so={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(t,{emit:e}){const a=t,r=e,s=Q(""),n=Q(""),m=Q("0"),y=Q(null),_=Q(""),T=Q(""),F=Q(""),k=Se(()=>s.value!==""&&n.value!==""&&!_.value&&!T.value&&!F.value);function A(){const p=parseFloat(s.value),S=parseFloat(n.value),b=parseFloat(m.value);_.value="",T.value="",F.value="",s.value!==""&&(isNaN(p)||p<-180||p>180)&&(_.value="经度范围: -180 ~ 180"),n.value!==""&&(isNaN(S)||S<-90||S>90)&&(T.value="纬度范围: -90 ~ 90"),m.value!==""&&(isNaN(b)||b<0)&&(F.value="高度必须 ≥ 0")}function E(){if(!k.value){A();return}const p=parseFloat(s.value),S=parseFloat(n.value),b=parseFloat(m.value)||0;r("confirm",{lng:p,lat:S,height:b})}return we(()=>a.visible,p=>{if(!p){_.value="",T.value="",F.value="";return}s.value="",n.value="",m.value="0",_.value="",T.value="",F.value="",p&&setTimeout(()=>{var S;(S=y.value)==null||S.focus()},60)}),(p,S)=>(Z(),Ve(fr,{to:"body"},[t.visible?(Z(),ae("div",{key:0,class:"cesium-data-dialog-overlay",onClick:S[4]||(S[4]=Ct(b=>p.$emit("cancel"),["self"]))},[L("div",Xi,[L("header",Yi,[L("div",Ki,[ve(oe(Xt),{size:18,"stroke-width":"2"}),S[5]||(S[5]=L("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),L("p",Ji,de(t.fileName),1),S[6]||(S[6]=L("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),L("form",{class:"dialog-form",onSubmit:Ct(E,["prevent"])},[L("div",Zi,[L("label",Qi,[S[7]||(S[7]=L("span",{class:"coord-label"},"经度 (Longitude)",-1)),Ze(L("input",{ref_key:"lngInputRef",ref:y,"onUpdate:modelValue":S[0]||(S[0]=b=>s.value=b),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:A},null,544),[[Vt,s.value]]),_.value?(Z(),ae("span",eo,de(_.value),1)):me("",!0)]),L("label",to,[S[8]||(S[8]=L("span",{class:"coord-label"},"纬度 (Latitude)",-1)),Ze(L("input",{"onUpdate:modelValue":S[1]||(S[1]=b=>n.value=b),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:A},null,544),[[Vt,n.value]]),T.value?(Z(),ae("span",ao,de(T.value),1)):me("",!0)]),L("label",ro,[S[9]||(S[9]=L("span",{class:"coord-label"},"高度 (Height 米)",-1)),Ze(L("input",{"onUpdate:modelValue":S[2]||(S[2]=b=>m.value=b),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:A},null,544),[[Vt,m.value]]),F.value?(Z(),ae("span",no,de(F.value),1)):me("",!0)])]),L("div",io,[L("button",{class:"dialog-btn cancel-btn",type:"button",onClick:S[3]||(S[3]=b=>p.$emit("cancel"))}," 取消 "),L("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!k.value},[ve(oe(lr),{size:14,"stroke-width":"2"}),S[10]||(S[10]=jt(" 确认放置 ",-1))],8,oo)])],32)])])):me("",!0)]))}},lo=Mt(so,[["__scopeId","data-v-81f307a1"]]);function co(t){if(!t)throw new Error("Cesium runtime is required for FluidRenderer.");function e(P){return(P==null?void 0:P._view)||(P==null?void 0:P.view)}function a(P){const i=e(P);if(!(i!=null&&i.passState))throw new Error("Cesium scene passState is unavailable.");return i.passState}function r(P){const i=e(P);return(i==null?void 0:i.frustumCommandsList)||(i==null?void 0:i._frustumCommandsList)||[]}const s=`
// 基于 mind3d 的 Cesium 流体示例，原始灵感来自 shadertoy：https://www.shadertoy.com/view/7tSSDD
const int textureSize = 1024;
// 渲染相关常量
const vec3 backgroundColor = vec3(0.2);
// 地形相关常量
const float transitionTime = 5.0;
const float transitionPercent = 0.3;
const int octaves = 7;
const float minAnimatedFilmDepth = 0.003;
// 水体模拟参数
// const float attenuation = 0.995;
// const float strenght = 0.25;
// const float minTotalFlow = 0.0001;
// fluidParam：x=衰减系数，y=扩散强度，z=最小总流量，w=初始水位（归一化后的绝对高程）
// customParam：x=雾化距离阈值，y=高光指数，z=高光强度，w=保留参数
uniform vec4 fluidParam;
uniform vec4 customParam;

mat2 rot(in float ang) 
{
   return mat2(
			cos(ang), -sin(ang),
			sin(ang),  cos(ang));
}

// hash from Dave_Hoskins https://www.shadertoy.com/view/4djSRW
float hash12(vec2 p)
{
	vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

float hash13(vec3 p3)
{
	p3  = fract(p3 * .1031);
    p3 += dot(p3, p3.zyx + 31.32);
    return fract((p3.x + p3.y) * p3.z);
}

// Box intersection by IQ https://iquilezles.org/articles/boxfunctions

vec2 boxIntersection( in vec3 ro, in vec3 rd, in vec3 rad, out vec3 oN ) 
{
    vec3 m = 1.0 / rd;
    vec3 n = m * ro;
    vec3 k = abs(m) * rad;
    vec3 t1 = -n - k;
    vec3 t2 = -n + k;

    float tN = max( max( t1.x, t1.y ), t1.z );
    float tF = min( min( t2.x, t2.y ), t2.z );
	
    if( tN > tF || tF < 0.0) return vec2(-1.0); // no intersection
    
    oN = -sign(rd)*step(t1.yzx, t1.xyz) * step(t1.zxy, t1.xyz);

    return vec2( tN, tF );
}

vec2 hitBox(vec3 orig, vec3 dir) {
    const vec3 box_min = vec3(-0.5);
    const vec3 box_max = vec3(0.5);
    vec3 inv_dir = 1.0 / dir;
    vec3 tmin_tmp = (box_min - orig) * inv_dir;
    vec3 tmax_tmp = (box_max - orig) * inv_dir;
    vec3 tmin = min(tmin_tmp, tmax_tmp);
    vec3 tmax = max(tmin_tmp, tmax_tmp);
    float t0 = max(tmin.x, max(tmin.y, tmin.z));
    float t1 = min(tmax.x, min(tmax.y, tmax.z));
    return vec2(t0, t1);
}

// Fog by IQ https://iquilezles.org/articles/fog

vec3 applyFog( in vec3  rgb, vec3 fogColor, in float distance)
{
    float fogAmount = exp( -distance );
    return mix( fogColor, rgb, fogAmount );
}
`,n=`
    // 计算地形并更新水位的第一阶段
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D heightMap;
uniform float     iTime;
uniform int     iFrame;
uniform vec2     center;
uniform float   playTime;
uniform vec2    resolution;
uniform float     minHeight;
uniform float     maxHeight;
float boxNoise( in vec2 p, in float z )
{
    vec2 fl = floor(p);
    vec2 fr = fract(p);
    fr = smoothstep(0.0, 1.0, fr);    
    float res = mix(mix( hash13(vec3(fl, z)),             hash13(vec3(fl + vec2(1,0), z)),fr.x),
                mix( hash13(vec3(fl + vec2(0,1), z)), hash13(vec3(fl + vec2(1,1), z)),fr.x),fr.y);
    return res;
}

float Terrain( in vec2 p, in float z, in int octaveNum)
{
	float a = 1.0;
	float f = .0;
	for (int i = 0; i < octaveNum; i++)
	{
		f += a * boxNoise(p, z);
		a *= 0.45;
		p = 2.0 * rot(radians(41.0)) * p;
	}
	return f;
}

vec2 readHeight(ivec2 p)
{
	p = clamp(p, ivec2(0), ivec2(textureSize - 1));
	return texelFetch(iChannel0, p, 0).xy;
} 

vec4 readOutFlow(ivec2 p)
{
	if(p.x < 0 || p.y < 0 || p.x >= textureSize || p.y >= textureSize)
		return vec4(0);
	return texelFetch(iChannel1, p, 0);
} 
void main( )
{
    // Outside ?
    if( max(gl_FragCoord.x, gl_FragCoord.y) > float(textureSize) )
    discard;
       
    // Terrain
    vec2 uv = gl_FragCoord.xy / float(textureSize);
    float t = iTime / transitionTime;
    // float terrainElevation = mix(Terrain(uv * 4.0, floor(t), octaves), Terrain(uv * 4.0, floor(t) + 1.0, octaves), smoothstep(1.0 - transitionPercent, 1.0, fract(t))) * 0.5;

    float terrainElevation = texture(heightMap, uv).r;
    float heightSpan = max(maxHeight - minHeight, 0.0001);
    terrainElevation = clamp((terrainElevation - minHeight) / heightSpan, 0.0, 1.0);

    // Water
    // fluidParam.w is a normalized absolute water level in the current elevation range.
    float animatedFilmDepth = min(min(fluidParam.w, minAnimatedFilmDepth), max(1.0 - terrainElevation, 0.0));
    float waterDept = max(fluidParam.w - terrainElevation, animatedFilmDepth);
    if(iFrame != 0)
    {
    ivec2 p = ivec2(gl_FragCoord.xy);
    vec2 height = readHeight(p);
    vec4 OutFlow = texelFetch(iChannel1, p, 0);
    float totalOutFlow = OutFlow.x + OutFlow.y + OutFlow.z + OutFlow.w;
    float totalInFlow = 0.0;
    totalInFlow += readOutFlow(p  + ivec2( 1,  0)).z;
    totalInFlow += readOutFlow(p  + ivec2( 0,  1)).w;
    totalInFlow += readOutFlow(p  + ivec2(-1,  0)).x;
    totalInFlow += readOutFlow(p  + ivec2( 0, -1)).y;
    waterDept = height.y - totalOutFlow + totalInFlow;
    }
    out_FragColor = vec4(terrainElevation, waterDept, 0, 1);
}
`,m=`
// 计算流量更新的第一阶段
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform float     iTime;
uniform int     iFrame;
vec2 readHeight(ivec2 p)
{
	p = clamp(p, ivec2(0), ivec2(textureSize - 1));
	return texelFetch(iChannel0, p, 0).xy;
} 

float computeOutFlowDir(vec2 centerHeight, ivec2 pos)
{
	vec2 dirHeight = readHeight(pos);
	return max(0.0, (centerHeight.x + centerHeight.y) - (dirHeight.x + dirHeight.y));
}

void main()
{
    ivec2 p = ivec2(gl_FragCoord.xy);
    // Init to zero at frame 0
    if(iFrame == 0)
    {
    out_FragColor = vec4(0);
    return;
    }    
    
    // Outside ?
    if( max(p.x, p.y) > textureSize )
    discard;
    
    
   	vec4 oOutFlow = texelFetch(iChannel1, p, 0);
	vec2 height = readHeight(p);
	vec4 nOutFlow;        
	nOutFlow.x = computeOutFlowDir(height, p + ivec2( 1,  0));
	nOutFlow.y = computeOutFlowDir(height, p + ivec2( 0,  1));
	nOutFlow.z = computeOutFlowDir(height, p + ivec2(-1,  0));
	nOutFlow.w = computeOutFlowDir(height, p + ivec2( 0, -1));
	nOutFlow = fluidParam.x * oOutFlow + fluidParam.y * nOutFlow;
	float totalFlow = nOutFlow.x + nOutFlow.y + nOutFlow.z + nOutFlow.w;
	if(totalFlow > fluidParam.z)
	{
		if(height.y < totalFlow)
		{
			nOutFlow = nOutFlow * (height.y / totalFlow);
		}
	}
	else
	{
		nOutFlow = vec4(0);
	}


    out_FragColor = nOutFlow;
}
`,y=`
// 水位计算的第二阶段
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform float     iTime;
uniform int     iFrame;
vec2 readHeight(ivec2 p)
{
	p = clamp(p, ivec2(0), ivec2(textureSize - 1));
	return texelFetch(iChannel0, p, 0).xy;
} 

vec4 readOutFlow(ivec2 p)
{
	if(p.x < 0 || p.y < 0 || p.x >= textureSize || p.y >= textureSize)
		return vec4(0);
	return texelFetch(iChannel1, p, 0);
} 

void main( )
{
    // Outside ?
    if( max(gl_FragCoord.x, gl_FragCoord.y) > float(textureSize) )
    discard;
       
    // Water
    ivec2 p = ivec2(gl_FragCoord.xy);
    vec2 height = readHeight(p);
    vec4 OutFlow = texelFetch(iChannel1, p, 0);
    float totalOutFlow = OutFlow.x + OutFlow.y + OutFlow.z + OutFlow.w;
    float totalInFlow = 0.0;
    totalInFlow += readOutFlow(p  + ivec2( 1,  0)).z;
    totalInFlow += readOutFlow(p  + ivec2( 0,  1)).w;
    totalInFlow += readOutFlow(p  + ivec2(-1,  0)).x;
    totalInFlow += readOutFlow(p  + ivec2( 0, -1)).y;
    float waterDept = height.y - totalOutFlow + totalInFlow;

    out_FragColor = vec4(height.x, waterDept, 0, 1);
}
`,_=`
// 计算流量更新的第二阶段
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform float     iTime;
uniform int     iFrame;
vec2 readHeight(ivec2 p)
{
	p = clamp(p, ivec2(0), ivec2(textureSize - 1));
	return texelFetch(iChannel0, p, 0).xy;
} 

float computeOutFlowDir(vec2 centerHeight, ivec2 pos)
{
	vec2 dirHeight = readHeight(pos);
	return max(0.0, (centerHeight.x + centerHeight.y) - (dirHeight.x + dirHeight.y));
}

void main( )
{
    ivec2 p = ivec2(gl_FragCoord.xy);
    
    // Outside ?
    if( max(p.x, p.y) > textureSize )
    discard;
    
    
   	vec4 oOutFlow = texelFetch(iChannel1, p, 0);
	vec2 height = readHeight(p);
	vec4 nOutFlow;        
	nOutFlow.x = computeOutFlowDir(height, p + ivec2( 1,  0));
	nOutFlow.y = computeOutFlowDir(height, p + ivec2( 0,  1));
	nOutFlow.z = computeOutFlowDir(height, p + ivec2(-1,  0));
	nOutFlow.w = computeOutFlowDir(height, p + ivec2( 0, -1));
	nOutFlow = fluidParam.x * oOutFlow + fluidParam.y * nOutFlow;
	float totalFlow = nOutFlow.x + nOutFlow.y + nOutFlow.z + nOutFlow.w;
	if(totalFlow > fluidParam.z)
	{
		if(height.y < totalFlow)
		{
			nOutFlow = nOutFlow * (height.y / totalFlow);
		}
	}
	else
	{
		nOutFlow = vec4(0);
	}


    out_FragColor = nOutFlow;
}
`,T=`
// Created by David Gallardo - xjorma/2021
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0
#define AA
#define GAMMA 1
uniform sampler2D iChannel0;
uniform sampler2D heightMap;
uniform sampler2D colorTexture;
uniform vec3 waterColor;
uniform vec2     iResolution;
uniform float     iTime;
uniform int     iFrame;
in vec3 vo;
in vec3 vd;
in vec2 v_st;
const vec3 light = vec3(0.,4.,2.);
const vec3 boxSize = vec3(0.5);
vec2 getHeight(in vec3 p)
{
    // 局部坐标 [-0.5, 0.5] → [0, 1] → texel 坐标 [0, textureSize)
    vec2 uv = p.xz + 0.5;
    ivec2 texel = ivec2(clamp(uv * vec2(textureSize), vec2(0.0), vec2(float(textureSize - 1))));
    vec2 h = texelFetch(iChannel0, texel, 0).xy;
    h.y += h.x;
    return h - boxSize.z;
}

vec3 getNormal(in vec3 p, int comp)
{
    float d = 2.0 / float(textureSize);
    float hMid = getHeight(p)[comp];
    float hRight = getHeight(p + vec3(d, 0, 0))[comp];
    float hTop = getHeight(p + vec3(0, 0, d))[comp];
    return normalize(cross(vec3(0, hTop - hMid, d), vec3(d, hRight - hMid, 0)));
}

vec3 terrainColor(in vec3 p, in vec3 n, out float spec)
{
    // p.xz 为局部坐标 [-0.5, 0.5]，需转换为 UV [0, 1]
    vec2 uv = p.xz + 0.5;
    // 采样模拟输出（含 terrainElevation + waterDepth），而非原始高度图
    vec2 simData = texture(iChannel0, uv).xy;
    // 简单地形着色：水面区域蓝色，陆地区域灰绿
    float waterDepth = max(0.0, simData.y - simData.x);
    vec3 landColor = vec3(0.25, 0.45, 0.18);
    vec3 waterTint = vec3(0.05, 0.15, 0.45);
    return mix(landColor, waterTint, smoothstep(0.001, 0.02, waterDepth));
}

vec3 undergroundColor(float d)
{
    vec3 color[4] = vec3[](vec3(0.5, 0.45, 0.5), vec3(0.40, 0.35, 0.25), vec3(0.55, 0.50, 0.4), vec3(0.45, 0.30, 0.20));
    d *= 6.0;
    d = min(d, 3.0 - 0.001);
    float fr = fract(d);
    float fl = floor(d);
    return mix(color[int(fl)], color[int(fl) + 1], fr);
}


vec3 Render(in vec3 ro, in vec3 rd)
{

    vec3 n;
    vec2 ret = boxIntersection(ro, rd, boxSize, n);
    vec2 uv = gl_FragCoord.xy / czm_viewport.zw;
    if(ret.x > 0.0)
    {
    vec3 pi = ro + rd * ret.x;
    // Find Terrain
    vec3 tc;
    vec3 tn;
    float tt = ret.x;
    vec2 h = getHeight(pi);
    float spec;
    if(pi.y < h.x)
    {
        tn = n;
        tc = undergroundColor(h.x - pi.y);
    }
    else
    {
        for (int i = 0; i < 80; i++)
        {
            vec3 p = ro + rd * tt;
            float h = p.y - getHeight(p).x;
            if (h < 0.0002 || tt > ret.y)
                break;
            tt += h * 0.3;
        }
        // tn = getNormal(ro + rd * tt, 0);
        // tc = terrainColor(ro + rd * tt, tn, spec);
        vec3 p =  ro + rd * tt;
        vec2 uv = gl_FragCoord.xy / czm_viewport.zw;
        tc = texture(colorTexture, uv).rgb;
    }
    
    {
        // vec3 lightDir = czm_sunDirectionEC;
        // tc = tc * (max( 0.0, dot(lightDir, tn)) + 0.3);
        // spec *= pow(max(0., dot(lightDir, reflect(rd, tn))), 10.0);
        // tc += spec;            
    }
    
    if(tt > ret.y) {
        // tc = vec3(0, 0, 0.4);
        tc = texture(colorTexture, uv).rgb;
    }
    
    // Find Water
    float wt = ret.x;
    h = getHeight(pi);
    vec3 waterNormal;
    if(pi.y < h.y)
    {
        waterNormal = n;
    }
    else
    {
        for (int i = 0; i < 80; i++)
        {
            vec3 p = ro + rd * wt;
            float h = p.y - getHeight(p).y;
            if (h < 0.0002 || wt > min(tt, ret.y))
                break;
            wt += h * 0.3;
        }
        waterNormal = getNormal(ro + rd * wt, 1);
    }
    
    if(wt < ret.y)
    {
        float dist = (min(tt, ret.y) - wt);
        vec3 p = waterNormal;
        vec3 lightDir = normalize(light - (ro + rd * tt));
        vec3 color = waterColor;
        tc = applyFog( tc, color, dist * customParam.x);
        float spec = pow(max(0., dot(lightDir, reflect(rd, waterNormal))),customParam.y);
        tc += customParam.z * spec * smoothstep(0.0, 0.1, dist);
    }else{
        discard;
    }
    return tc;
    }
    discard;
}


vec3 vignette(vec3 color, vec2 q, float v)
{
    color *= 0.3 + 0.8 * pow(16.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), v);
    return color;
}


void main()
{
	vec3 tot = vec3(0.0);
    vec3 rayDir = normalize(vd);
    vec3 col = Render(vo, rayDir);
    tot += col;
	out_FragColor = vec4( tot, 1.0 );
}
`;class F{constructor(i){this.commandType=i.commandType,this.geometry=i.geometry,this.attributeLocations=i.attributeLocations,this.primitiveType=i.primitiveType,this.uniformMap=i.uniformMap,this.vertexShaderSource=i.vertexShaderSource,this.fragmentShaderSource=i.fragmentShaderSource,this.rawRenderState=i.rawRenderState,this.framebuffer=i.framebuffer,this.isPostRender=i.isPostRender,this.outputTexture=i.outputTexture,this.autoClear=t.defaultValue(i.autoClear,!1),this.preExecute=i.preExecute,this.modelMatrix=t.defaultValue(i.modelMatrix,t.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new t.ClearCommand({color:new t.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:t.Pass.OPAQUE}))}createCommand(i){switch(this.commandType){case"Draw":{const h=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW}),f=t.ShaderProgram.fromCache({context:i,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),w=t.RenderState.fromCache(this.rawRenderState);return new t.DrawCommand({owner:this,vertexArray:h,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:f,framebuffer:this.framebuffer,renderState:w,pass:t.Pass.OPAQUE})}case"Compute":return new t.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(i,h){this.geometry=h;const f=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=f}update(i){this.show&&(t.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(i.context),this.commandToExecute.isPostRender=this.isPostRender),t.defined(this.preExecute)&&this.preExecute(this),t.defined(this.clearCommand)&&i.commandList.push(this.clearCommand),i.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return t.defined(this.commandToExecute)&&(t.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),t.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),t.destroyObject(this)}}class k{constructor(){}static loadText(i){const h=new XMLHttpRequest;return h.open("GET",i,!1),h.send(),h.responseText}static getFullscreenQuad(){return new t.Geometry({attributes:new t.GeometryAttributes({position:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(i){if(t.defined(i.arrayBufferView)){const f={};f.arrayBufferView=i.arrayBufferView,i.source=f,i.flipY=!1}return new t.Texture(i)}static createDepthFramebuffer(i,h,f){return new t.Framebuffer({context:i,colorTextures:[this.createTexture({context:i,width:h,height:f,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(h*f*4)})],depthRenderbuffer:new t.Renderbuffer({context:i,width:h,height:f,format:t.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(i,h,f,w=!1){const l={context:i,colorTextures:[h],destroyAttachments:w};return f&&(l.depthTexture=f),new t.Framebuffer(l)}static createRawRenderState(i){const w={viewport:i.viewport,depthTest:i.depthTest,depthMask:i.depthMask,blending:i.blending};return t.Appearance.getDefaultRenderState(!0,!1,w)}}const b=class b{constructor(i,h={}){if(!i)throw new Error("Cesium Viewer is required");this.viewer=i,this._initConfiguration(h),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(i){this.config={resolution:new t.Cartesian2(i.width||b.DEFAULTS.width,i.height||b.DEFAULTS.height),dimensions:i.dimensions||b.DEFAULTS.dimensions.clone(),heightRange:{min:i.minHeight??b.DEFAULTS.heightRange[0],max:i.maxHeight??b.DEFAULTS.heightRange[1]},baseHeight:i.baseHeight??b.DEFAULTS.baseHeight,fluidParams:i.fluidParams||b.DEFAULTS.fluidParams.clone(),customParams:i.customParams||b.DEFAULTS.customParams.clone(),waterColor:i.waterColor||b.DEFAULTS.waterColor.clone(),lonLat:i.lonLat||[...b.DEFAULTS.lonLat],timeStep:i.timeStep||b.DEFAULTS.timeStep,heightMapSource:i.heightMapSource||b.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(i){const h=Number(i);!Number.isFinite(h)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,h)),this.resetSimulation())}resetSimulation(){var i,h;this._frameCount=0,(h=(i=this.viewer.scene).requestRender)==null||h.call(i)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const i=()=>k.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:i(),B:i(),C:i(),D:i()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(i){if(!(i!=null&&i.arrayBufferView)||!i.width||!i.height)throw new Error("Invalid height map source.");return k.createTexture({context:this.viewer.scene.context,width:i.width,height:i.height,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:i.arrayBufferView,sampler:new t.Sampler({wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var j,ee;const i=this.viewer.scene.context,h=k.createDepthFramebuffer(i,this.config.resolution.x,this.config.resolution.y),f=this.viewer.scene,w=f.frameState,l=a(this.viewer.scene),g=f.camera,u=w.camera,v=l.framebuffer,D=t.BoundingRectangle.clone(l.viewport,new t.BoundingRectangle);let N=null,q=[];try{l.viewport.x=0,l.viewport.y=0,l.viewport.width=this.config.resolution.x,l.viewport.height=this.config.resolution.y,l.framebuffer=h,f.camera=this.heightMapCamera,w.camera=this.heightMapCamera,w.context.uniformState.updateCamera(this.heightMapCamera),q=this._processHeightMapShaders(),this._renderDepthPrepass(l);const V=k.createTexture({context:i,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT});return N=k.createFramebuffer(i,V),this._copyTexture(h.getColorTexture(0),N),V}finally{this._restoreHeightMapShaders(q),l.framebuffer=v,t.BoundingRectangle.clone(D,l.viewport),f.camera=g,w.camera=u,u&&w.context.uniformState.updateCamera(u),N&&!((j=N.isDestroyed)!=null&&j.call(N))&&N.destroy(),h&&!((ee=h.isDestroyed)!=null&&ee.call(h))&&h.destroy()}}_renderDepthPrepass(i){const h=this.viewer.scene.frameState;h.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(w=>w.execute(this.viewer.scene.context,i))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:t.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const i={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:n}),this._createComputePass("B",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:m}),this._createComputePass("C",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:y}),this._createComputePass("D",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:_})]}_createComputePass(i,{uniforms:h,shaderSource:f}){return new F({commandType:"Compute",uniformMap:h,fragmentShaderSource:new t.ShaderSource({sources:[s,f]}),geometry:k.getFullscreenQuad(),outputTexture:this.textures[i],preExecute:w=>w.commandToExecute.outputTexture=this.textures[i]})}_createMainRenderPass(){const i=E([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new F({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new t.ShaderSource({sources:[s,T]}),geometry:this._createBoxGeometry(),modelMatrix:i,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var i,h,f,w;return(w=(f=(h=(i=e(this.viewer.scene))==null?void 0:i.globeDepth)==null?void 0:h.colorFramebufferManager)==null?void 0:f._colorTextures)==null?void 0:w[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(i=>this.viewer.scene.primitives.add(i)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(i){const h=this.viewer.camera.getPickRay(i);return this.viewer.scene.globe.pick(h,this.viewer.scene)}_createOrthographicCamera(){const i=new t.Camera(this.viewer.scene);i.frustum=new t.OrthographicOffCenterFrustum;const[h,f]=this.config.lonLat,w=t.Cartesian3.fromDegrees(h,f,this.config.baseHeight),l=t.Transforms.eastNorthUpToFixedFrame(w),g=i.frustum;g.near=.01,g.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),g.left=-this.config.dimensions.x/2,g.right=this.config.dimensions.x/2,g.bottom=-this.config.dimensions.y/2,g.top=this.config.dimensions.y/2;const u=t.Matrix4.getColumn(l,2,new t.Cartesian3);t.Cartesian3.negate(u,u);const v=t.Matrix4.getColumn(l,1,new t.Cartesian3),D=t.Matrix4.getColumn(l,0,new t.Cartesian3),N=t.Cartesian3.multiplyByScalar(u,-g.far,new t.Cartesian3);return i.position=t.Cartesian3.add(w,N,new t.Cartesian3),i.direction=u,i.up=v,i.right=D,i}destroy(){var i,h;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(f=>{f&&this.viewer.scene.primitives.remove(f)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(f=>{var w;f&&!((w=f.isDestroyed)!=null&&w.call(f))&&f.destroy()}),this.textures={},this._heightMap&&!((h=(i=this._heightMap).isDestroyed)!=null&&h.call(i))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(i,h){const f=this.viewer.scene.context,w=a(this.viewer.scene),l=f.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>i},owner:this}),g=w.framebuffer;w.framebuffer=h,l.execute(f,w),w.framebuffer=g}_getDepthRenderCommands(){var f,w;const i=[],h=r(this.viewer.scene);for(let l=0;l<h.length;++l){const g=h[l],u=(f=g==null?void 0:g.commands)==null?void 0:f[2],v=((w=g==null?void 0:g.indices)==null?void 0:w[2])??(u==null?void 0:u.length)??0;u&&v>0&&i.push(...u.slice(0,v))}return i}_processHeightMapShaders(){const i=[],h=t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),f=t.Matrix4.inverse(h,new t.Matrix4),w=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(g=>{var q;if(!((q=g==null?void 0:g.shaderProgram)!=null&&q.fragmentShaderSource)||!g.uniformMap)return;const u=Object.prototype.hasOwnProperty.call(g.uniformMap,"u_inverseEnuMatrix"),v=g.uniformMap.u_inverseEnuMatrix,D=g.shaderProgram,N=new t.Matrix4;g.uniformMap.u_inverseEnuMatrix=()=>{const j=g.modelMatrix||t.Matrix4.IDENTITY;return t.Matrix4.multiply(f,j,N)},g.heightMap_ShaderProgram||(g.heightMap_ShaderProgram=this._getDerivedShaderProgram(w.context,g.shaderProgram,"Height_Map")),g.shaderProgram=g.heightMap_ShaderProgram,i.push({command:g,hadInverseUniform:u,originalInverseUniform:v,originalShaderProgram:D})}),i}_restoreHeightMapShaders(i){i.forEach(h=>{const{command:f,hadInverseUniform:w,originalInverseUniform:l,originalShaderProgram:g}=h;f!=null&&f.uniformMap&&(f.shaderProgram=g,w?f.uniformMap.u_inverseEnuMatrix=l:delete f.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(i,h,f){let w=i.shaderCache.getDerivedShaderProgram(h,f);return t.defined(w)||(w=this._createHeightMapShaderProgram(i,h,f)),w}_createHeightMapShaderProgram(i,h,f){const w=this._modifyFragmentShader(h.fragmentShaderSource);return i.shaderCache.createDerivedShaderProgram(h,f,{vertexShaderSource:h.vertexShaderSource,fragmentShaderSource:w,attributeLocations:h._attributeLocations})}_modifyFragmentShader(i){const h=i.sources.map(f=>t.ShaderSource.replaceMain(f,"czm_heightMap_main"));return h.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new t.ShaderSource({sources:h,defines:i.defines})}_createBoxGeometry(){return t.BoxGeometry.createGeometry(t.BoxGeometry.fromDimensions({vertexFormat:t.VertexFormat.POSITION_AND_ST,dimensions:new t.Cartesian3(1,1,1)}))}_getAttributeLocations(){return t.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:t.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new t.ShaderSource({sources:[`
            in vec3 position;
            in vec2 st;
          
            out vec3 vo;
            out vec3 vd;
            out vec2 v_st;
            
            void main() {    
                vo = czm_encodedCameraPositionMCHigh + czm_encodedCameraPositionMCLow;
                vd = position - vo;
                v_st = st;
                gl_Position = czm_modelViewProjection * vec4(position,1.0);
            }`]})}};Ma(b,"DEFAULTS",{width:1024,height:1024,dimensions:new t.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new t.Cartesian4(.995,.25,1e-4,.03),customParams:new t.Cartesian4(10,20,.2,10),waterColor:new t.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let A=b;const E=(P=[0,0,0],i=[0,0,0],h=[1,1,1])=>{const f=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationX(t.Math.toRadians(i[0]))),w=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationY(t.Math.toRadians(i[1]))),l=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationZ(t.Math.toRadians(i[2])));P instanceof t.Cartesian3||(P=t.Cartesian3.fromDegrees(...P));const g=t.Transforms.eastNorthUpToFixedFrame(P);t.Matrix4.multiply(g,f,g),t.Matrix4.multiply(g,w,g),t.Matrix4.multiply(g,l,g);const u=t.Matrix4.fromScale(new t.Cartesian3(...h));return t.Matrix4.multiply(g,u,new t.Matrix4)},p=`
    precision highp float;
    uniform sampler2D colorTexture;
    uniform sampler2D depthTexture;
    uniform vec4 customParam;
    in vec2 v_textureCoordinates;
    const float PI = 3.14159265359;
    const float TWO_PI = PI * 2.0;
    const float FOUR_PI = PI * 4.0;
    const vec3 betaR = vec3(5.5e-6, 13.0e-6, 22.4e-6); 
    const vec3 betaM = vec3(21e-6);
    const float hR = 10e3;
    const float hM = 3.8e3;
    const int num_samples = 16;
    const int num_samples_light = 4;
    #ifdef GL_ES
        #define _in(T) const in T
        #define _inout(T) inout T
        #define _out(T) out T
        #define _begin(type) type (
        #define _end )
        #define mul(a, b) (a) * (b)
    #endif
    struct ray_t {
        vec3 origin;
        vec3 direction;
    };
    struct sphere_t {
        vec3 origin;
        float radius;
        int material;
    };
    struct plane_t {
        vec3 direction;
        float distance;
        int material;
    };
    plane_t plane;
    mat3 rotate_around_x(_in(float) angle_degrees) {
        float angle = radians(angle_degrees);
        float _sin = sin(angle);
        float _cos = cos(angle);
        return mat3(1, 0, 0, 0, _cos, -_sin, 0, _sin, _cos);
    }
    bool isect_sphere(_in(ray_t) ray, _in(sphere_t) sphere, _inout(float) t0, _inout(float) t1) {
        vec3 rc = sphere.origin - ray.origin;
        float radius2 = sphere.radius * sphere.radius;
        float tca = dot(rc, ray.direction);
        float d2 = dot(rc, rc) - tca * tca;
        if (d2 > radius2) return false;
        float thc = sqrt(radius2 - d2);
        t0 = tca - thc;
        t1 = tca + thc;
        return true;
    }
    float rayleigh_phase_func(float mu) {
        return
        3. * (1. + mu*mu)
        / 
        (16. * PI);
    }
    const float g = 0.76;
    float henyey_greenstein_phase_func(float mu) {
        return
        (1. - g*g)
        / 
        ((4. * PI) * pow(1. + g*g - 2.*g*mu, 1.5));
    }
    const float k = 1.55*g - 0.55 * (g*g*g);
    float schlick_phase_func(float mu) {
        return
        (1. - k*k)
        / 
        (4. * PI * (1. + k*mu) * (1. + k*mu));
    }
    const sphere_t atmosphere = _begin(sphere_t)
    vec3(0, 0, 0), 6420e3, 0
    _end;
    bool get_sun_light(
    _in(ray_t) ray, _inout(float) optical_depthR, _inout(float) optical_depthM
    ) {
        float t0, t1;
        isect_sphere(ray, atmosphere, t0, t1);
        float march_pos = 0.;
        float march_step = t1 / float(num_samples_light);
        for (int i = 0; i < num_samples_light; i++) {
            vec3 s = ray.origin +
            ray.direction * (march_pos + 0.5 * march_step);
            float height = length(s) - 6360e3;
            if (height < 0.)
            return false;
            optical_depthR += exp(-height / hR) * march_step;
            optical_depthM += exp(-height / hM) * march_step;
            march_pos += march_step;
        }
        return true;
    }
    // 基于屏幕空间的Ray Marching球面近似大气散射
    vec4 get_incident_light(_in(ray_t) ray) {
        vec3 dir = ray.direction;
        vec3 start = ray.origin;
        float a = dot( dir, dir);
        float b = 2.0 * dot(dir, start);
        float radius2 = atmosphere.radius * atmosphere.radius;
        float c = dot(start, start) - radius2;
        float d = (b * b) - 4.0 * a * c;
        if (d < 0.0) return vec4(0.0);
        float squaredD = sqrt(d);
        vec2 ray_length = vec2(
        max((-b - squaredD) / (2.0 * a), 0.0), min((-b + squaredD) / (2.0 * a), plane.distance)
        );
        if (ray_length.x > ray_length.y) return vec4(0.0);
        float march_step = (ray_length.y - ray_length.x) / float(num_samples);
        float mu = dot(ray.direction, normalize(czm_sunPositionWC));
        float phaseR = rayleigh_phase_func(mu);
        float phaseM = 
        #if 1
            henyey_greenstein_phase_func(mu);
        #else
            schlick_phase_func(mu);
        #endif
        
        float optical_depthR = 0.;
        float optical_depthM = 0.;
        vec3 sumR = vec3(0);
        vec3 sumM = vec3(0);
        float march_pos = 0.;
        for (int i = 0; i < num_samples; i++) {
            vec3 s = ray.origin +
            ray.direction * (march_pos + 0.5 * march_step);
            float height = length(s) - 6360e3;
            float hr = exp(-height / hR) * march_step;
            float hm = exp(-height / hM) * march_step;
            optical_depthR += hr;
            optical_depthM += hm;
            ray_t light_ray = _begin(ray_t)
            s, normalize(czm_sunPositionWC)
            _end;
            float optical_depth_lightR = 0.;
            float optical_depth_lightM = 0.;
            bool overground = get_sun_light(
                light_ray,
                optical_depth_lightR,
                optical_depth_lightM);

            if (overground) {
                vec3 tau =
                    betaR * (optical_depthR + optical_depth_lightR) +
                    betaM * 1.1 * (optical_depthM + optical_depth_lightM);
                vec3 attenuation = exp(-tau);

                sumR += hr * attenuation;
                sumM += hm * attenuation;
            }

            march_pos += march_step;
        }
        float attenuation = length(exp(-((betaM * optical_depthM)
        + (betaR * optical_depthR)) * 4.));
        return vec4(
        23. *
        (sumR * phaseR * betaR +
        sumM * phaseM * betaM), 1.0-attenuation);
    }
    
    void main() {
        vec4 rawColor = texture(colorTexture, v_textureCoordinates);
        float depth = czm_unpackDepth(texture(depthTexture, v_textureCoordinates));
        vec4 positionEC = czm_windowToEyeCoordinates(gl_FragCoord.xy, depth);
        vec4 positionWC = czm_inverseView * positionEC;
        positionWC.xyz = positionWC.xyz / positionWC.w;
        vec3 lVector = positionWC.xyz - czm_viewerPositionWC;
        ray_t ray;
        ray.origin = czm_viewerPositionWC;
        ray.direction =  normalize(lVector);
        plane.distance = length(lVector);
        vec4 atmosphereColor = get_incident_light(ray);
        rawColor = atmosphereColor + rawColor * (1.0 - atmosphereColor.a);
        rawColor = vec4(1.0 - exp(-2.2 * rawColor));
        out_FragColor = rawColor;
    }      
    `;function S(){return new t.PostProcessStage({fragmentShader:p})}return{FluidRenderer:A,createSkyEffect:S}}const uo={key:0,class:"fluid-root"},ho={class:"fluid-panel"},fo={class:"panel-actions"},mo=["disabled"],po={key:0,class:"selected-text"},Na=1024,$t=1e4,Oa=1200,go=100,yo=.01,vo=.03,xo=60,da=64,_o=160,bo={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(t,{expose:e,emit:a}){const r=t,s=a,n=xa(),m=Q(10),y=Q(20),_=Q(3),T=Q("#0d4fa3"),F=Q(null),k=Q(null),A=Q(null),E=Q(!1),p=Q(!1),S=Q(null),b=Q(null);let P=null,i=null,h=null,f=null,w=null,l=null,g=0;const u=Se(()=>!Number.isFinite(S.value)||!Number.isFinite(b.value)?"":`经度 ${S.value.toFixed(6)} / 纬度 ${b.value.toFixed(6)}`),v=Se(()=>Number.isFinite(k.value)&&Number.isFinite(A.value)),D=Se(()=>{if(!v.value)return 1;const x=Math.abs(A.value-k.value);return Math.max(x/1e3,.01)}),N=Se(()=>[{id:"threshold",label:"Threshold",type:"range",min:0,max:500,step:1e-4,value:m.value,displayValue:Number(m.value).toFixed(2)},{id:"blend",label:"Blend",type:"range",min:0,max:50,step:1e-4,value:y.value,displayValue:Number(y.value).toFixed(2)},{id:"lightStrength",label:"Light",type:"range",min:0,max:10,step:1e-4,value:_.value,displayValue:Number(_.value).toFixed(2)},{id:"waterLevel",label:"Water Level",type:"range",min:v.value?k.value:0,max:v.value?A.value:1,step:D.value,value:Number.isFinite(Number(F.value))?Number(F.value):0,displayValue:v.value&&Number.isFinite(Number(F.value))?`${Number(F.value).toFixed(2)} m`:"Pick terrain first",disabled:!v.value},{id:"waterColor",label:"Water Color",type:"color",value:T.value}]);we([m,y,_,T],He),we(F,pt),we(()=>r.params,x=>{j(x||{})},{deep:!0,immediate:!0}),we([E,p,u,F,k,A],V,{immediate:!0}),ar(()=>{tt(!0)});function q(){var $,Y;const x=($=r.getViewer)==null?void 0:$.call(r),M=((Y=r.getCesium)==null?void 0:Y.call(r))||window.Cesium;if(!x||!M)return n.warning("Cesium 场景尚未就绪。"),null;if(!P){const B=co(M);P=B.FluidRenderer,i=B.createSkyEffect}return{viewer:x,Cesium:M}}function j(x){Number.isFinite(Number(x.threshold))&&(m.value=Number(x.threshold)),Number.isFinite(Number(x.blend))&&(y.value=Number(x.blend)),Number.isFinite(Number(x.lightStrength))&&(_.value=Number(x.lightStrength)),Ye(x.waterColor)&&(T.value=x.waterColor),Number.isFinite(Number(x.waterLevel))&&(F.value=Number(x.waterLevel))}function ee({controlId:x,value:M}){x==="threshold"?m.value=Number(M):x==="blend"?y.value=Number(M):x==="lightStrength"?_.value=Number(M):x==="waterLevel"?F.value=Number(M):x==="waterColor"&&Ye(M)&&(T.value=M)}function V(){s("state-change",{isPicking:E.value,hasFluid:p.value,selectedText:u.value,waterLevel:F.value,waterLevelMin:k.value,waterLevelMax:A.value})}function te(){const x=q();if(!x)return;const{viewer:M,Cesium:$}=x;Ue(),gt(M,$),E.value=!0,h=new $.ScreenSpaceEventHandler(M.scene.canvas),h.setInputAction(Y=>{le(M,$,Y.position)},$.ScreenSpaceEventType.LEFT_CLICK)}async function le(x,M,$){var yt,at;const Y=Be(x,$);if(!Y){n.warning("未选中可用地形位置。");return}const B=++g;Ue();const X=M.Cartographic.fromCartesian(Y),re=M.Math.toDegrees(X.longitude),ie=M.Math.toDegrees(X.latitude),Fe=Number(X.height),be=Number.isFinite(Fe)?Fe:0,We=new M.Cartesian3($t,$t,0);or("正在请求模拟范围高度数据...");try{Re();const Ee=Number(m.value)||0,c=Number(y.value)||0,C=Number(_.value)||0,U=await ne(x,M,{lon:re,lat:ie,centerHeight:be,dimensions:We}),W=fe(U,be),o=W.baseHeight,d=W.depth,I=Xe(W,be),O=new M.Cartesian3($t,$t,d);if(B!==g)return;k.value=W.minHeight,A.value=W.maxHeight,F.value=I,U||n.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),f=new P(x,{lonLat:[re,ie],width:Na,height:Na,dimensions:O,baseHeight:o,minHeight:W.minHeight,maxHeight:W.maxHeight,heightMapSource:U,waterColor:ft(M,T.value),customParams:new M.Cartesian4(Ee,c,C,10),fluidParams:new M.Cartesian4(.9+C/10*.099,Math.min(1,c/50),Ee/5e4,_e(I,W))}),S.value=re,b.value=ie,p.value=!0,(at=(yt=x.scene).requestRender)==null||at.call(yt),n.success("水体流体已创建。")}catch(Ee){n.error("水体流体创建失败",Ee),n.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{sr()}}async function ne(x,M,$){const Y=x==null?void 0:x.terrainProvider,B=De($.dimensions);if(!Y)return null;if(M.EllipsoidTerrainProvider&&Y instanceof M.EllipsoidTerrainProvider)return G(B);if(typeof M.sampleTerrain!="function"&&typeof M.sampleTerrainMostDetailed!="function")return null;try{return await pe(x,M,$,B)}catch(X){if(B<=da)throw X;return pe(x,M,$,da)}}async function pe(x,M,$,Y){const B=Qe(M,$,Y),X=await Me(M,x.terrainProvider,B);return R(X||B,{size:Y})}function De(x){const M=Math.max(Number(x==null?void 0:x.x)||0,Number(x==null?void 0:x.y)||0),$=Math.ceil(M/xo)+1;return Ae($,da,_o)}function Ae(x,M,$){return Math.max(M,Math.min($,Math.round(x)))}function Qe(x,{lon:M,lat:$,centerHeight:Y,dimensions:B},X){const re=x.Cartesian3.fromDegrees(M,$,Y),ie=x.Transforms.eastNorthUpToFixedFrame(re),Fe=[],be=Math.max(1,X-1);for(let We=0;We<X;We++){const at=(.5-We/be)*B.y;for(let Ee=0;Ee<X;Ee++){const C=(Ee/be-.5)*B.x,U=new x.Cartesian3(C,at,0),W=x.Matrix4.multiplyByPoint(ie,U,new x.Cartesian3);Fe.push(x.Cartographic.fromCartesian(W))}}return Fe}async function Me(x,M,$){const Y=ce(M);return Number.isInteger(Y)&&typeof x.sampleTerrain=="function"?x.sampleTerrain(M,Y,$):typeof x.sampleTerrainMostDetailed=="function"?x.sampleTerrainMostDetailed(M,$):x.sampleTerrain(M,10,$)}function ce(x){const M=Number(x==null?void 0:x._bottomLevel);return Number.isFinite(M)?Math.max(0,M-1):null}function R(x,{size:M}){var B;const $=z(x);if(!$)return null;const Y=new Float32Array(M*M*4);for(let X=0;X<M*M;X++){const re=Number((B=x[X])==null?void 0:B.height),ie=X*4;Y[ie]=Number.isFinite(re)?Le(re,$.minHeight,$.maxHeight):$.minHeight,Y[ie+1]=0,Y[ie+2]=0,Y[ie+3]=1}return{width:M,height:M,arrayBufferView:Y,minHeight:$.minHeight,maxHeight:$.maxHeight}}function G(x){return{width:x,height:x,arrayBufferView:new Float32Array(x*x*4),minHeight:0,maxHeight:0}}function z(x){let M=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY;for(const Y of x||[]){const B=Number(Y==null?void 0:Y.height);Number.isFinite(B)&&(M=Math.min(M,B),$=Math.max($,B))}return!Number.isFinite(M)||!Number.isFinite($)?null:{minHeight:M,maxHeight:$}}function fe(x,M){const $=Number(x==null?void 0:x.minHeight),Y=Number(x==null?void 0:x.maxHeight);if(Number.isFinite($)&&Number.isFinite(Y)){const re=Number(M),ie=Number.isFinite(re)?Math.min($,Y,re):Math.min($,Y),Fe=Number.isFinite(re)?Math.max($,Y,re):Math.max($,Y),be=Math.max(Fe-ie,yo);return{baseHeight:ie,depth:be,minHeight:ie,maxHeight:ie+be}}const B=Number(M),X=Number.isFinite(B)?B-go:0;return{baseHeight:X,depth:Oa,minHeight:X,maxHeight:X+Oa}}function Xe(x,M){const $=x.minHeight+x.depth*vo,Y=Number(M),B=Number.isFinite(Y)?Y:$;return Le(B,x.minHeight,x.maxHeight)}function _e(x,M){const $=M.maxHeight-M.minHeight;return!Number.isFinite($)||$<=0?0:Le((x-M.minHeight)/$,0,1)}function Ne(){return!Number.isFinite(k.value)||!Number.isFinite(A.value)?null:{minHeight:Math.min(k.value,A.value),maxHeight:Math.max(k.value,A.value)}}function ft(x,M){const $=Oe(M)||Oe("#0d4fa3");return new x.Cartesian3($.red,$.green,$.blue)}function mt(){var $;const x=Oe(T.value),M=($=f==null?void 0:f.config)==null?void 0:$.waterColor;!x||!M||(M.x=x.red,M.y=x.green,M.z=x.blue)}function Ye(x){return typeof x=="string"&&/^#[0-9a-f]{6}$/i.test(x)}function Oe(x){return Ye(x)?{red:Number.parseInt(x.slice(1,3),16)/255,green:Number.parseInt(x.slice(3,5),16)/255,blue:Number.parseInt(x.slice(5,7),16)/255}:null}function Le(x,M,$){return Math.max(M,Math.min($,x))}function Be(x,M){if(!M)return null;if(x.scene.pickPositionSupported&&typeof x.scene.pickPosition=="function"){const Y=x.scene.pickPosition(M);if(Y)return Y}const $=x.camera.getPickRay(M);return $?x.scene.globe.pick($,x.scene):null}function He(){var Y,B,X;if(!(f!=null&&f.config))return;const x=Number(m.value)||0,M=Number(y.value)||0,$=Number(_.value)||0;f.config.customParams&&(f.config.customParams.x=x,f.config.customParams.y=M,f.config.customParams.z=$),f.config.fluidParams&&(f.config.fluidParams.x=.9+$/10*.099,f.config.fluidParams.y=Math.min(1,M/50),f.config.fluidParams.z=x/5e4),mt(),(X=(B=(Y=f.viewer)==null?void 0:Y.scene)==null?void 0:B.requestRender)==null||X.call(B)}function pt(){var B,X,re,ie;if(!((B=f==null?void 0:f.config)!=null&&B.fluidParams))return;const x=Ne(),M=Number(F.value);if(!x||!Number.isFinite(M))return;const $=Le(M,x.minHeight,x.maxHeight);if($!==M){F.value=$;return}const Y=_e($,x);typeof f.setInitialWaterLevel=="function"?f.setInitialWaterLevel(Y):(f.config.fluidParams.w=Y,(ie=(re=(X=f.viewer)==null?void 0:X.scene)==null?void 0:re.requestRender)==null||ie.call(re))}function gt(x,M){var $,Y;if(!l){const B=x.scene;l={shadows:x.shadows,resolutionScale:x.resolutionScale,msaaSamples:B.msaaSamples,depthTestAgainstTerrain:B.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:B.logarithmicDepthBuffer,highDynamicRange:B.highDynamicRange,fogEnabled:($=B.fog)==null?void 0:$.enabled,showGroundAtmosphere:B.globe.showGroundAtmosphere,skyAtmosphereShow:(Y=B.skyAtmosphere)==null?void 0:Y.show,enableLighting:B.globe.enableLighting}}x.shadows=!0,x.resolutionScale=1,x.scene.msaaSamples=4,x.scene.globe.depthTestAgainstTerrain=!0,x.scene.logarithmicDepthBuffer=!0,x.scene.highDynamicRange=!0,x.scene.fog&&(x.scene.fog.enabled=!0),x.scene.globe.showGroundAtmosphere=!0,x.scene.skyAtmosphere&&(x.scene.skyAtmosphere.show=!0),x.scene.globe.enableLighting=!0,!w&&i&&(w=i(M),x.scene.postProcessStages.add(w))}function ct(x){if(!x||!l)return;const M=x.scene;x.shadows=l.shadows,x.resolutionScale=l.resolutionScale,l.msaaSamples!==void 0&&(M.msaaSamples=l.msaaSamples),M.globe.depthTestAgainstTerrain=l.depthTestAgainstTerrain,M.logarithmicDepthBuffer=l.logarithmicDepthBuffer,M.highDynamicRange=l.highDynamicRange,M.fog&&l.fogEnabled!==void 0&&(M.fog.enabled=l.fogEnabled),M.globe.showGroundAtmosphere=l.showGroundAtmosphere,M.skyAtmosphere&&l.skyAtmosphereShow!==void 0&&(M.skyAtmosphere.show=l.skyAtmosphereShow),M.globe.enableLighting=l.enableLighting,l=null}function et(){tt(!1),n.success("水体流体已清除。")}function Ue(){h&&(h.destroy(),h=null),E.value=!1}function Re(){if(f){try{f.destroy()}catch{}f=null,p.value=!1}}function tt(x){var $,Y,B;const M=($=r.getViewer)==null?void 0:$.call(r);if(g+=1,Ue(),Re(),S.value=null,b.value=null,F.value=null,k.value=null,A.value=null,M&&w){try{M.scene.postProcessStages.remove(w)}catch{}w=null}x&&M&&ct(M),(B=(Y=M==null?void 0:M.scene)==null?void 0:Y.requestRender)==null||B.call(Y)}function ut(){tt(!0),s("close")}return e({startPickHeightMap:te,clearFluid:et}),(x,M)=>t.headless?me("",!0):(Z(),ae("div",uo,[L("div",ho,[L("div",{class:"panel-head"},[M[0]||(M[0]=L("span",{class:"panel-title"},"水体流体",-1)),L("button",{class:"panel-close",title:"关闭",onClick:ut}," × ")]),L("div",fo,[L("button",{class:Pe(["action-btn primary",{active:E.value}]),onClick:te},de(E.value?"等待选点":"捕捉高度图"),3),L("button",{class:"action-btn",disabled:!p.value&&!E.value,onClick:et}," 清除 ",8,mo)]),u.value?(Z(),ae("div",po,de(u.value),1)):me("",!0),ve(Sa,{class:"param-list",title:"Fluid Parameters",controls:N.value,onChange:ee},null,8,["controls"])])]))}},So=Mt(bo,[["__scopeId","data-v-ab96c3cf"]]),wa="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",wo=`${wa}Cesium.js`,To=`${wa}Widgets/widgets.css`;async function Co({ionToken:t}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=wa),await Mo(To,"cesium-widgets-style"),await Do(wo,"cesium-runtime-script");const e=window.Cesium;if(!e)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Qt(e,t),e}function Qt(t,e){e&&(t!=null&&t.Ion)&&(t.Ion.defaultAccessToken=e)}function Do(t,e){return new Promise((a,r)=>{const s=document.getElementById(e);if(s){if(s.getAttribute("data-loaded")==="true"){a();return}s.addEventListener("load",()=>a(),{once:!0}),s.addEventListener("error",()=>r(new Error(`脚本加载失败: ${t}`)),{once:!0});return}const n=document.createElement("script");n.id=e,n.src=t,n.async=!0,n.onload=()=>{n.setAttribute("data-loaded","true"),a()},n.onerror=()=>r(new Error(`脚本加载失败: ${t}`)),document.head.appendChild(n)})}function Mo(t,e){return new Promise((a,r)=>{if(document.getElementById(e)){a();return}const n=document.createElement("link");n.id=e,n.rel="stylesheet",n.href=t,n.onload=()=>a(),n.onerror=()=>r(new Error(`样式加载失败: ${t}`)),document.head.appendChild(n)})}const Lo="Asia/Shanghai",Po="UTC+8",Fo=new Intl.DateTimeFormat("zh-CN",{timeZone:Lo,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Ao(t,e){var a,r,s,n,m,y,_;if(!(!t||!(e!=null&&e.JulianDate))){if((a=t.animation)!=null&&a.viewModel&&(t.animation.viewModel.dateFormatter=(...T)=>Ro(t,e,...T),t.animation.viewModel.timeFormatter=(...T)=>Io(t,e,...T)),t.timeline){const T=(...F)=>ko(t,e,...F);t.timeline.makeLabel=T,"_makeLabel"in t.timeline&&(t.timeline._makeLabel=T),(s=(r=t.timeline).updateFromClock)==null||s.call(r),(m=(n=t.timeline).zoomTo)==null||m.call(n,t.clock.startTime,t.clock.stopTime)}(_=(y=t.scene).requestRender)==null||_.call(y)}}function Ta(t,e,...a){var y;const r=a.find(Eo)||((y=t==null?void 0:t.clock)==null?void 0:y.currentTime);if(!r)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const s=e.JulianDate.toDate(r),n=Fo.formatToParts(s),m=Object.fromEntries(n.filter(({type:_})=>_!=="literal").map(({type:_,value:T})=>[_,T]));return{year:m.year||"0000",month:m.month||"01",day:m.day||"01",hour:m.hour||"00",minute:m.minute||"00",second:m.second||"00"}}function Eo(t){return t&&typeof t.dayNumber=="number"&&typeof t.secondsOfDay=="number"}function Ro(t,e,...a){const{year:r,month:s,day:n}=Ta(t,e,...a);return`${r}-${s}-${n}`}function Io(t,e,...a){const{hour:r,minute:s,second:n}=Ta(t,e,...a);return`${r}:${s}:${n} ${Po}`}function ko(t,e,...a){const{month:r,day:s,hour:n,minute:m}=Ta(t,e,...a);return`${r}-${s} ${n}:${m}`}function zo({getViewer:t}){let e=null,a=null;function r(){var y;const m=t==null?void 0:t();if(m&&((y=m._cesiumWidget)!=null&&y._creditContainer&&(m._cesiumWidget._creditContainer.style.display="none"),s(),e=setInterval(()=>{const _=document.querySelector(".cesium-credit-container");_&&_.innerHTML.length>0&&(_.innerHTML="",_.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const _=document.createElement("style");_.id="cesium-credit-override",_.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(_),a=_}}function s(){var _;const m=t==null?void 0:t();if(!m)return;(_=m._cesiumWidget)!=null&&_._creditContainer&&(m._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",m._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(T=>{T.style.cssText="display: none !important; visibility: hidden !important;",T.innerHTML=""}),m.scene&&m.scene.frameState&&m.scene.frameState.creditDisplay&&(m.scene.frameState.creditDisplay.hasCredits=()=>!1,m.scene.frameState.creditDisplay.destroy=()=>{})}function n(){e&&(clearInterval(e),e=null),a&&(a.remove(),a=null)}return{installCreditHider:r,cleanupCreditHider:n}}const ha="经度: --, 纬度: --, 海拔: --米";function No({getViewer:t,getCesium:e,onCoordinatePick:a}){let r=null,s=null,n=null;const m=Q("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function y(){const E=t==null?void 0:t(),p=e==null?void 0:e();!E||!p||(A(),s=E.scene.canvas,r=new p.ScreenSpaceEventHandler(s),n=()=>{m.value=ha},s.addEventListener("mouseleave",n),r.setInputAction(S=>{_(S.endPosition,E,p)},p.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(S=>{const b=S.endPosition,P=S.startPosition;if(!p.defined(E.terrainProvider))return;const i=E.scene.globe.ellipsoid;if(!E.camera.pickEllipsoid(P,i)){const f=E.camera;f.rotate(p.Cartesian3.UNIT_X,-.002*(b.y-P.y)),f.rotate(p.Cartesian3.UNIT_Y,-.002*(b.x-P.x))}},p.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_UP))}function _(E,p,S){const b=T(E,p,S);if(!b){m.value=ha;return}const P=S.Cartographic.fromCartesian(b);if(!P||!Number.isFinite(P.longitude)||!Number.isFinite(P.latitude)){m.value=ha;return}const i=S.Math.toDegrees(P.longitude).toFixed(6),h=S.Math.toDegrees(P.latitude).toFixed(6),f=(Number.isFinite(P.height)?P.height:0).toFixed(2);m.value=`经度: ${i}, 纬度: ${h}, 海拔: ${f}米`,typeof a=="function"&&a({lng:Number(i),lat:Number(h),height:Number(f)})}function T(E,p,S){if(!E)return null;const b=p.scene,P=F(E,b,S);if(P)return P;const i=p.camera.getPickRay(E);if(i){const f=b.globe.pick(i,b);if(k(f))return f}const h=p.camera.pickEllipsoid(E,b.globe.ellipsoid);return k(h)?h:null}function F(E,p,S){if(!p.pickPositionSupported||typeof p.pickPosition!="function")return null;const b=typeof p.pick=="function"?p.pick(E):null;if(!S.defined(b))return null;const P=p.pickPosition(E);return k(P)?P:null}function k(E){return!!E&&Number.isFinite(E.x)&&Number.isFinite(E.y)&&Number.isFinite(E.z)}function A(){n&&s&&(s.removeEventListener("mouseleave",n),n=null),s=null,r&&(r.destroy(),r=null)}return{coordinateDisplay:m,setupInteractions:y,cleanupInteractions:A}}function Ba(t,e=""){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(t);return a??e}catch{return e}}function Oo(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(e||""))}catch{}}function Tt(t,e){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(t);return a==null?e:a==="true"}catch{return e}}function zt(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(!!e))}catch{}}function Ha(t){if(!t)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:e,DeveloperError:a,Ellipsoid:r,Resource:s,HeightmapTerrainData:n,Rectangle:m,TileAvailability:y,CustomHeightmapTerrainProvider:_}=t;function T(E,p,S,b,P,i){const h=E.tileXYToRectangle(S,b,P);return e(m.intersection(h,p,i))}function F(E){const p=[[[0,0,1,0]]],S=new y(E.tilingScheme,19);for(let b=0;b<p.length;b++){const P=p[b];for(let i=0;i<P.length;i++){const h=P[i];S.addAvailableTileRange(b,h[0],h[1],h[2],h[3])}}return S}function k(E,p,S,b,P){const i=new n({buffer:E._transformBuffer(p),width:E._width,height:E._height,childTileMask:E._getChildTileMask(b,P,S),structure:E._terrainDataStructure});return i._skirtHeight=6e3,E.availability.addAvailableTileRange(S,b,P,b,P),i}class A extends _{constructor(p={}){if(super({...p,ellipsoid:r.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!e(p.url))throw new a("options.url is required.");this._dataType=p.dataType??"int16",this._url=p.url,this._subdomains=p.subdomains,this._token=p.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=F(this)}get availability(){return this._availability}requestTileGeometry(p,S,b,P){if(b>=this._bottomLevel)return Promise.reject(new Error(`Level ${b} is outside supported range.`));if(b<this._topLevel)return Promise.resolve(new n({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(p,S,b),structure:this._terrainDataStructure}));let i=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const f=this._subdomains[(p+S)%this._subdomains.length];i=i.replace("{s}",f)}i=i.replace("{token}",this._token).replace("{x}",p).replace("{y}",S).replace("{z}",b+1);const h=s.fetchArrayBuffer({url:i,request:P});if(h)return h.then(f=>f.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Fr.inflate(f)).then(f=>k(this,f,b,p,S))}getTileDataAvailable(p,S,b){return b<this._bottomLevel}_transformBuffer(p){let S=2;this._dataType==="float"&&(S=4);const b=p;if(b.length!==22500*S)return null;const P=new ArrayBuffer(S),i=new DataView(P),h=this._width,f=this._height,w=new Uint8Array(h*f*4);for(let l=0;l<f;l++)for(let g=0;g<h;g++){const u=Math.floor(149*l/(f-1)),v=Math.floor(149*g/(h-1)),D=S*(150*u+v);let N;S===4?(i.setInt8(0,b[D]),i.setInt8(1,b[D+1]),i.setInt8(2,b[D+2]),i.setInt8(3,b[D+3]),N=i.getFloat32(0,!0)):N=b[D]+256*b[D+1],(N>1e4||N<-2e3)&&(N=0);const q=(N+1e3)/.001,j=4*(l*h+g);w[j]=q/65536,w[j+1]=(q-256*w[j]*256)/256,w[j+2]=q-256*w[j]*256-256*w[j+1],w[j+3]=255}return w}_getVHeightBuffer(){let p=this._vHeightBuffer;if(!e(p)){p=new Uint8ClampedArray(this._width*this._height*4);for(let S=0;S<this._width*this._height*4;)p[S++]=15,p[S++]=66,p[S++]=64,p[S++]=255;this._vHeightBuffer=p}return p}_getChildTileMask(p,S,b){const P=new m,i=this._tilingScheme,h=this._rectangles,f=i.tileXYToRectangle(p,S,b);let w=0;for(let l=0;l<h.length&&w!==15;l++){const g=h[l];if(g.maxLevel<=b)continue;const u=g.rectangle,v=m.intersection(u,f,P);e(v)&&(T(i,u,2*p,2*S,b+1,P)&&(w|=4),T(i,u,2*p+1,2*S,b+1,P)&&(w|=8),T(i,u,2*p,2*S+1,b+1,P)&&(w|=1),T(i,u,2*p+1,2*S+1,b+1,P)&&(w|=2))}return w}}return A}function Bo({getViewer:t,getCesium:e,activeBasemap:a,applyBasemap:r,resolvePresetLayerIds:s,message:n,validationTimeoutMs:m=5e3,circuitBreakThreshold:y=3}){const _=new Map,T=new Set,F={value:!1};let k=null,A=[],E=[];function p(w,l={}){return w?T.has(w)&&!l.forceReload?(F.value=!0,!1):r(w,l)?(S(w),!0):(b(w),!1):!1}function S(w){var q,j;i();const l=t==null?void 0:t();if(!(l!=null&&l.imageryLayers))return;const g=s(w),u=[];for(let ee=0;ee<l.imageryLayers.length;ee++){const V=l.imageryLayers.get(ee);(q=V==null?void 0:V.imageryProvider)!=null&&q._descriptorId&&g.includes(V.imageryProvider._descriptorId)&&u.push(V)}if(!u.length)return;A=u;let v=!1;const D=()=>{v=!0,i(),_.delete(w),T.has(w)&&(T.delete(w),F.value=T.size>0)},N=ee=>{v||(b(w),i())};for(const ee of A){const V=ee.imageryProvider;if(V!=null&&V.errorEvent&&(V.errorEvent.addEventListener(N),E.push(()=>V.errorEvent.removeEventListener(N))),V!=null&&V.ready){D();return}(j=V==null?void 0:V.readyPromise)!=null&&j.then&&V.readyPromise.then(D).catch(N)}k=setTimeout(()=>{v||b(w)},m)}function b(w){const l=(_.get(w)||0)+1;_.set(w,l),l>=y&&(T.add(w),F.value=!0,P(w))}function P(w){var g,u,v,D,N;const l="custom_China_Blender_preset_2";if(w===l){const q="imagery_tianditu_preset";T.has(q)?(u=n==null?void 0:n.error)==null||u.call(n,"所有底图均加载失败，请检查网络",{closable:!0}):((g=n==null?void 0:n.warning)==null||g.call(n,"底图加载失败，已降级到天地图影像",{closable:!0}),a.value=q);return}if(!T.has(l))(v=n==null?void 0:n.warning)==null||v.call(n,"底图加载失败，已降级到默认底图",{closable:!0}),a.value=l;else{const q="imagery_tianditu_preset";T.has(q)?(N=n==null?void 0:n.error)==null||N.call(n,"所有底图均加载失败，请检查网络",{closable:!0}):((D=n==null?void 0:n.warning)==null||D.call(n,"底图加载失败，已降级到天地图影像",{closable:!0}),a.value=q)}}function i(){k&&(clearTimeout(k),k=null);for(const w of E)try{w()}catch{}E=[],A=[]}function h(){_.clear(),T.clear(),F.value=!1,i()}function f(){i(),_.clear(),T.clear(),F.value=!1}return{switchBasemap:p,resetCircuitBreaker:h,isCircuitOpen:F,cleanup:f}}const At=["0","1","2","3","4","5","6","7"],Et="https://t{s}.tianditu.gov.cn/",Ho="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",Uo=96188,Nt="custom-xyz",Ua="webgis_custom_basemap_url",Wo="cesium_tdt_label_layer_visible",Wa="cesium_tdt_boundary_layer_visible",Ga="cesium_tdt_text_label_layer_visible",$a="cesium_osm_buildings_visible",qa="cesium_google_photorealistic_3d_tiles_visible";function Go(){return Ar.map(t=>({...t,description:$o(t.value),source:"preset"}))}function $o(t){const e=Ot(t);if(!e.length)return"复合底图";const a=e.map(r=>{const s=_a(r);return s?s.name:r});return a.slice(0,3).join(" + ")+(a.length>3?" ...":"")}const ja=Go(),Va=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function qo({getViewer:t,getCesium:e,message:a,backendBaseUrl:r,tiandituToken:s,cesiumIonToken:n}){let m=null,y=null,_=null,T=null,F=0,k=null,A=null,E=0,p=0,S=[];const b=()=>Xa(s),P=()=>Xa(n),i=[],h=Q([]),f=new Map,w=new Map,l=new Map,g=new Map,u="cesium_custom_xyz_basemap_url",v=Q(Ia),D=Q("tianditu"),N=Q(Ba(Ua,"")||Ba(u,"")),q=Tt(Wo,!1),j=Q(Tt(Wa,q??!1)),ee=Q(Tt(Ga,q??!1)),V=Q(Tt($a,!1)),te=Q(Tt(qa,!1)),le=Se(()=>[...ja.map(c=>c.value!=="custom"?c:{...c,description:N.value?N.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!N.value}),...h.value]),ne=Bo({getViewer:t,getCesium:e,activeBasemap:v,applyBasemap:Y,resolvePresetLayerIds:Ot,message:a}),pe=Se(()=>ne.isCircuitOpen.value),De=Se(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:j.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:ee.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:V.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:te.value}]);we(v,c=>{!(t!=null&&t())||!(e!=null&&e())||Y(c)}),we(N,c=>{Oo(Ua,c)}),we(D,async c=>{!(t!=null&&t())||!(e!=null&&e())||await X(c)}),we(j,c=>{zt(Wa,c),He()}),we(ee,c=>{zt(Ga,c),He()}),we(V,c=>{zt($a,c),Ue()}),we(te,c=>{zt(qa,c),Re()});function Ae(){const c=e==null?void 0:e();if(!c)return[];f.clear(),w.clear();const C=ja.map(W=>{const o=new c.ProviderViewModel({name:W.label,tooltip:Yo(W),category:"项目底图",iconUrl:Ja(Ko(W.value),Jo(W.value,W.label)),creationFunction:()=>G(W.value)});return f.set(W.value,o),w.set(o,W.value),o}),U=R();return h.value=U.map((W,o)=>{const d=String((W==null?void 0:W.name)||`官方底图 ${o+1}`).trim(),I=es(d,o);return f.set(I,W),w.set(W,I),{value:I,label:`官方 · ${d}`,description:String((W==null?void 0:W.tooltip)||d),source:"official"}}),[...C,...U]}function Qe(){const c=e==null?void 0:e();return c?(l.clear(),g.clear(),Va.map(C=>{const U=new c.ProviderViewModel({name:C.label,tooltip:C.description||C.label,category:"项目地形",iconUrl:Ja(jo(C.value),Vo(C.value)),creationFunction:()=>ie(C.value)});return l.set(C.value,U),g.set(U,C.value),U})):[]}function Me(c=[]){return f.get(v.value)||c[0]}function ce(c=[]){return l.get(D.value)||c[0]}function R(){const c=e==null?void 0:e();if(typeof(c==null?void 0:c.createDefaultImageryProviderViewModels)!="function")return[];try{return c.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function G(c){return Ot(c).length>0?z(c):c==="google"?Xe():c===Nt?_e():fe()}function z(c){const C=e==null?void 0:e();if(!C)return[];const U=Ot(c);if(!U.length)return fe();const W=b(),o=N.value;return Vr(C,U,{tiandituTk:W,customUrl:o})}function fe(){const c=e==null?void 0:e();return[new c.UrlTemplateImageryProvider({url:`${Et}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${b()}`,subdomains:At,tilingScheme:new c.WebMercatorTilingScheme,maximumLevel:18})]}function Xe(){const c=e==null?void 0:e();return[new c.UrlTemplateImageryProvider({url:`${r}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new c.WebMercatorTilingScheme,maximumLevel:20})]}function _e(){const c=e==null?void 0:e(),C=Ka(N.value);return C.valid?[new c.UrlTemplateImageryProvider({url:C.url,subdomains:C.subdomains,tilingScheme:new c.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(a.warning(C.message,{closable:!0}),fe())}function Ne(){const c=e==null?void 0:e();return new c.UrlTemplateImageryProvider({url:`${Et}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${b()}`,subdomains:At,tilingScheme:new c.WebMercatorTilingScheme,maximumLevel:10})}function ft(){const c=e==null?void 0:e();return new c.UrlTemplateImageryProvider({url:`${Et}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${b()}`,subdomains:At,tilingScheme:new c.WebMercatorTilingScheme,maximumLevel:18})}function mt(){var O,H,K,J,ge;Ye();const c=e==null?void 0:e(),C=(H=(O=t==null?void 0:t())==null?void 0:O.baseLayerPicker)==null?void 0:H.viewModel;if(!C||!((K=c==null?void 0:c.knockout)!=null&&K.getObservable))return;const U=c.knockout.getObservable(C,"selectedImagery"),W=c.knockout.getObservable(C,"selectedTerrain"),o=[],d=(J=U==null?void 0:U.subscribe)==null?void 0:J.call(U,se=>{const xe=w.get(se);xe&&(v.value!==xe&&(v.value=xe),Be())}),I=(ge=W==null?void 0:W.subscribe)==null?void 0:ge.call(W,se=>{const xe=g.get(se);xe&&(D.value!==xe&&(D.value=xe),re(xe))});d&&o.push(d),I&&o.push(I),S=o}function Ye(){S.forEach(c=>{var C;return(C=c==null?void 0:c.dispose)==null?void 0:C.call(c)}),S=[]}function Oe(){return He(),Ue(),Re(),!0}function Le(){const c=t==null?void 0:t();if(c!=null&&c.imageryLayers)for(;i.length;){const C=i.pop();try{c.imageryLayers.remove(C,!0)}catch{}}}function Be(){var c,C,U;He(),Ue(),Re(),(U=(C=(c=t==null?void 0:t())==null?void 0:c.scene)==null?void 0:C.requestRender)==null||U.call(C)}function He(){var C,U;const c=t==null?void 0:t();!c||!(e!=null&&e())||(j.value?pt():ct(),ee.value?gt():et(),(U=(C=c.scene).requestRender)==null||U.call(C))}function pt(){var C,U,W,o;const c=t==null?void 0:t();if(!(c!=null&&c.imageryLayers)||m)return m&&((U=(C=c==null?void 0:c.imageryLayers)==null?void 0:C.raiseToTop)==null||U.call(C,m)),m;try{return m=c.imageryLayers.addImageryProvider(Ne()),(o=(W=c.imageryLayers).raiseToTop)==null||o.call(W,m),m}catch(d){return a.error("天地图国界线图层加载失败",d),null}}function gt(){var C,U,W,o;const c=t==null?void 0:t();if(!(c!=null&&c.imageryLayers)||y)return y&&((U=(C=c==null?void 0:c.imageryLayers)==null?void 0:C.raiseToTop)==null||U.call(C,y)),y;try{return y=c.imageryLayers.addImageryProvider(ft()),(o=(W=c.imageryLayers).raiseToTop)==null||o.call(W,y),y}catch(d){return a.error("天地图文字标注图层加载失败",d),null}}function ct(){const c=t==null?void 0:t();if(!(!m||!(c!=null&&c.imageryLayers))){try{c.imageryLayers.remove(m,!0)}catch{}m=null}}function et(){const c=t==null?void 0:t();if(!(!y||!(c!=null&&c.imageryLayers))){try{c.imageryLayers.remove(y,!0)}catch{}y=null}}async function Ue(){var C,U,W;const c=t==null?void 0:t();!((C=c==null?void 0:c.scene)!=null&&C.primitives)||!(e!=null&&e())||(V.value?await x():M(),(W=(U=c.scene).requestRender)==null||W.call(U))}async function Re(){var C,U,W;const c=t==null?void 0:t();!((C=c==null?void 0:c.scene)!=null&&C.primitives)||!(e!=null&&e())||(te.value?await tt():ut(),(W=(U=c.scene).requestRender)==null||W.call(U))}async function tt(){var W,o,d;const c=t==null?void 0:t(),C=e==null?void 0:e();if(!((W=c==null?void 0:c.scene)!=null&&W.primitives))return null;if(k)return c.scene.globe.show=!1,k;if(A)return A;if(typeof(C==null?void 0:C.createGooglePhotorealistic3DTileset)!="function")return a.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),te.value=!1,null;const U=++E;Qt(C,P()),A=C.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const I=await A;return U!==E||!te.value?(Ya(I),null):(k=c.scene.primitives.add(I),c.scene.globe.show=!1,c.scene.skyAtmosphere.show=!0,(d=(o=c.scene).requestRender)==null||d.call(o),k)}catch(I){return U!==E||(te.value=!1,a.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),a.error("Google Photorealistic 3D Tiles 初始化失败",I)),null}finally{U===E&&(A=null)}}function ut(){var C,U,W;const c=t==null?void 0:t();if(E+=1,A=null,!k||!((C=c==null?void 0:c.scene)!=null&&C.primitives)){(U=c==null?void 0:c.scene)!=null&&U.globe&&(c.scene.globe.show=!0);return}try{c.scene.primitives.remove(k)}catch{}k=null,(W=c==null?void 0:c.scene)!=null&&W.globe&&(c.scene.globe.show=!0)}async function x(){var W,o,d,I;const c=t==null?void 0:t(),C=e==null?void 0:e();if(!((W=c==null?void 0:c.scene)!=null&&W.primitives)||_)return _;if(T)return T;if(typeof((o=C==null?void 0:C.Cesium3DTileset)==null?void 0:o.fromIonAssetId)!="function"&&typeof(C==null?void 0:C.createOsmBuildingsAsync)!="function")return a.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),V.value=!1,null;const U=++F;Qt(C,P()),await $(),T=Xo(C,{maximumScreenSpaceError:8});try{const O=await T;return U!==F||!V.value?(Ya(O),null):(_=c.scene.primitives.add(O),(I=(d=c.scene).requestRender)==null||I.call(d),_)}catch(O){return U!==F||(V.value=!1,a.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),a.error("Cesium OSM 建筑图层初始化失败",O)),null}finally{U===F&&(T=null)}}function M(){var C,U,W;const c=t==null?void 0:t();if(F+=1,T=null,!(!_||!((C=c==null?void 0:c.scene)!=null&&C.primitives))){try{c.scene.primitives.remove(_)}catch{}_=null,(W=(U=c.scene).requestRender)==null||W.call(U)}}async function $(){if(D.value==="cesiumWorld")return!0;D.value="cesiumWorld";const c=await X("cesiumWorld");return c||a.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),c}function Y(c,C={}){var d,I,O;const U=t==null?void 0:t();if(!U||!(e!=null&&e()))return!1;Wr(),Le();const W=(d=U.baseLayerPicker)==null?void 0:d.viewModel,o=f.get(c);if(W&&o){if(C.forceReload&&W.selectedImagery===o){const H=f.get(Ia)||f.get("tianditu");H&&H!==o&&(W.selectedImagery=H)}return W.selectedImagery!==o&&(W.selectedImagery=o),Be(),!0}try{return G(c).forEach(K=>{K&&i.push(U.imageryLayers.addImageryProvider(K))}),He(),(O=(I=U.scene).requestRender)==null||O.call(I),!0}catch(H){return a.error("地图源切换失败",H),!1}}function B(){return X(D.value)}async function X(c){var O,H,K,J,ge,se,xe,Ie,Te,Ge,$e;const C=t==null?void 0:t(),U=e==null?void 0:e();if(!C||!U)return!1;const W=(O=C.baseLayerPicker)==null?void 0:O.viewModel,o=l.get(c);if(W&&o)return W.selectedTerrain!==o&&(W.selectedTerrain=o),re(c),(K=(H=C.scene).requestRender)==null||K.call(H),!0;const d=++p;if(c==="ellipsoid")return C.terrainProvider=new U.EllipsoidTerrainProvider,re(c),(ge=(J=C.scene).requestRender)==null||ge.call(J),!0;if(c==="cesiumWorld")try{const ye=await Fe();return d!==p?!1:(C.terrainProvider=ye,re(c),(xe=(se=C.scene).requestRender)==null||xe.call(se),!0)}catch(ye){return d!==p||(C.terrainProvider=new U.EllipsoidTerrainProvider,re("ellipsoid"),a.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("Cesium 世界地形初始化失败",ye)),!1}if(c==="arcgisWorld")try{const ye=await be();return d!==p?!1:(C.terrainProvider=ye,re(c),(Te=(Ie=C.scene).requestRender)==null||Te.call(Ie),!0)}catch(ye){return d!==p||(C.terrainProvider=new U.EllipsoidTerrainProvider,re("ellipsoid"),a.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("ArcGIS 世界地形初始化失败",ye)),!1}const I=Ha(U);try{return C.terrainProvider=new I({url:`${Et}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:At,token:b()}),re(c),($e=(Ge=C.scene).requestRender)==null||$e.call(Ge),!0}catch(ye){return C.terrainProvider=new U.EllipsoidTerrainProvider,re("ellipsoid"),a.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),a.error("官方地形初始化失败",ye),!1}}function re(c){var U;const C=t==null?void 0:t();(U=C==null?void 0:C.scene)!=null&&U.globe&&(C.scene.globe.depthTestAgainstTerrain=c!=="ellipsoid")}function ie(c){const C=e==null?void 0:e();if(c==="ellipsoid")return new C.EllipsoidTerrainProvider;if(c==="cesiumWorld")return Fe().catch(W=>(a.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("Cesium 世界地形初始化失败",W),We(c,"ellipsoid"),new C.EllipsoidTerrainProvider));if(c==="arcgisWorld")return be().catch(W=>(a.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("ArcGIS 世界地形初始化失败",W),We(c,"ellipsoid"),new C.EllipsoidTerrainProvider));const U=Ha(C);try{return new U({url:`${Et}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:At,token:b()})}catch(W){return a.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),a.error("官方地形初始化失败",W),new C.EllipsoidTerrainProvider}}async function Fe(){var U,W;const c=e==null?void 0:e();Qt(c,P());const C={requestWaterMask:!1,requestVertexNormals:!0};if(typeof c.createWorldTerrainAsync=="function")return c.createWorldTerrainAsync(C);if(typeof c.createWorldTerrain=="function")return c.createWorldTerrain(C);if(typeof((U=c.CesiumTerrainProvider)==null?void 0:U.fromIonAssetId)=="function")return c.CesiumTerrainProvider.fromIonAssetId(1,C);if((W=c.IonResource)!=null&&W.fromAssetId&&c.CesiumTerrainProvider){const o=await c.IonResource.fromAssetId(1);return new c.CesiumTerrainProvider({url:o,...C})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function be(){var C;const c=e==null?void 0:e();if(typeof((C=c==null?void 0:c.ArcGISTiledElevationTerrainProvider)==null?void 0:C.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return c.ArcGISTiledElevationTerrainProvider.fromUrl(Ho)}function We(c,C){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{D.value===c&&(D.value=C)},0)}function yt({overlayId:c,value:C}){if(c==="tdt-boundaries"){j.value=!!C;return}if(c==="tdt-text-labels"){ee.value=!!C;return}if(c==="cesium-osm-buildings"){V.value=!!C;return}c==="google-photorealistic-3d-tiles"&&(te.value=!!C)}function at({url:c}){const C=String(c||"").trim(),U=Ka(C);if(!U.valid){a.warning(U.message,{closable:!0});return}if(N.value=C,v.value===Nt){Y(Nt,{forceReload:!0})&&a.success("已加载自定义 XYZ 图源");return}v.value=Nt,a.success("已切换到自定义 XYZ 图源")}function Ee(){Le(),ct(),et(),M(),ut(),Ye()}return{activeBasemap:v,activeTerrain:D,customXyzBasemapUrl:N,basemapOptions:le,terrainOptions:Va,overlayOptions:De,createImageryProviderViewModels:Ae,createTerrainProviderViewModels:Qe,getSelectedImageryProviderViewModel:Me,getSelectedTerrainProviderViewModel:ce,bindLayerPickerStateSync:mt,addBaseImageryLayers:Oe,initCustomTerrain:B,applyBasemap:Y,applyTerrain:X,handleOverlayToggle:yt,handleCustomBasemapSubmit:at,cleanupLayers:Ee,basemapSwitcher:ne,basemapCircuitOpen:pe,resetCircuitBreaker:ne.resetCircuitBreaker}}function jo(t){return t==="ellipsoid"?"#a3a3a3":t==="arcgisWorld"?"#5ea1ff":"#d0a449"}function Vo(t){return t==="cesiumWorld"?"CW":t==="arcgisWorld"?"AG":t==="ellipsoid"?"EL":"TE"}function Xa(t){return typeof t=="function"?String(t()||"").trim():t&&typeof t=="object"&&"value"in t?String(t.value||"").trim():String(t||"").trim()}function Ya(t){var e,a;if(!(!t||(e=t.isDestroyed)!=null&&e.call(t)))try{(a=t.destroy)==null||a.call(t)}catch{}}async function Xo(t,e={}){var a;if(typeof((a=t==null?void 0:t.Cesium3DTileset)==null?void 0:a.fromIonAssetId)=="function"){const r=await t.Cesium3DTileset.fromIonAssetId(Uo,e);return!r.style&&typeof t.Cesium3DTileStyle=="function"&&(r.style=new t.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),r}return t.createOsmBuildingsAsync(e)}function Yo(t){return t.value===Nt?`${t.description||t.label}
支持 https://server/{z}/{x}/{y}.png`:t.description||t.label}function Ko(t){const e=Ot(t);if(!e.length)return"#37d67a";const a=_a(e[0]);if(!a)return"#37d67a";const r=a.category;return r==="imagery"?"#5ea1ff":r==="vector"?"#37d67a":r==="terrain"?"#d0a449":r==="label"?"#a78bfa":r==="theme"?"#f59e0b":r==="custom"?"#f472b6":"#37d67a"}function Jo(t,e){return String(e||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function Ka(t){const e=String(t||"").trim();if(!e)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let a=e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const r=a.match(/\{([a-z0-9])-([a-z0-9])\}/i);let s=[];return r?(s=Zo(r[1],r[2]),a=a.replace(r[0],"{s}")):/\{s\}/i.test(a)&&(s=["a","b","c"]),!/\{z\}/.test(a)||!/\{x\}/.test(a)||!/\{y\}/.test(a)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:a,subdomains:s}:Qo(a)?{valid:!0,message:"",url:a,subdomains:s}:{valid:!1,message:"URL 格式不合法",url:a,subdomains:s}}function Zo(t,e){const a=String(t||"").charCodeAt(0),r=String(e||"").charCodeAt(0);if(!Number.isFinite(a)||!Number.isFinite(r))return[];const s=a<=r?1:-1,n=[];for(let m=a;s>0?m<=r:m>=r;m+=s)n.push(String.fromCharCode(m));return n}function Qo(t){if(/^(https?:)?\/\//i.test(t)||t.startsWith("/"))return!0;try{const e=typeof window<"u"?window.location.origin:"http://localhost",a=new URL(t,e);return a.protocol==="http:"||a.protocol==="https:"}catch{return!1}}function es(t,e){const a=t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${e}_${a||"basemap"}`}function Ja(t,e){const a=String(e||"").replace(/[<>&"']/g,"").slice(0,2),r=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${t}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${a}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(r)}`}function ts({getViewer:t,getCesium:e,message:a}){function r(m){const y=t==null?void 0:t(),_=e==null?void 0:e();if(!y||!_)return;const T=typeof m=="number"?m:2;y.camera.flyTo({destination:_.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-_.Math.PI_OVER_TWO,roll:0},duration:T})}function s(){const m=t==null?void 0:t(),y=e==null?void 0:e();!m||!y||m.camera.flyTo({destination:y.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:y.Math.toRadians(0),pitch:y.Math.toRadians(-25),roll:0},duration:3})}async function n(){const m=t==null?void 0:t(),y=e==null?void 0:e();if(!(!m||!y))try{const _=await y.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");m.scene.primitives.add(_),m.flyTo(_,{duration:3,offset:new y.HeadingPitchRange(y.Math.toRadians(0),y.Math.toRadians(-25),_.boundingSphere.radius*2.5)})}catch(_){a.error(`加载模型失败: ${_}`),a.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:r,flyToEverest:s,loadCustomTileset:n}}const as="tileset.json";let qt=null;async function Za(){if(qt)return qt;const[{decompressBuffer:t},{parseShpPartsToGeoJSON:e}]=await Promise.all([pa(()=>import("./decompressFile-DiMYlfaO.js").then(a=>a.f),__vite__mapDeps([4,5]),import.meta.url),pa(()=>import("./shpParser-C7C2VucA.js").then(a=>a.s),__vite__mapDeps([6,5,7,2,3,8,9,10,11,12,13,14,15]),import.meta.url)]);return qt={decompressBuffer:t,parseShpPartsToGeoJSON:e},qt}function fa(t){const e=t.lastIndexOf(".");return e===-1?"":t.slice(e+1).toLowerCase()}function vt(t,e,a,r){if(!(!t||!e||!a))try{r==="3dtiles"&&a.boundingSphere?t.flyTo(a,{duration:2,offset:new e.HeadingPitchRange(e.Math.toRadians(0),e.Math.toRadians(-30),a.boundingSphere.radius*2)}):a.entities&&a.entities.values.length>0&&t.flyTo(a,{duration:2})}catch{}}function St(t){return URL.createObjectURL(t)}function qe(t){t&&t.startsWith("blob:")&&URL.revokeObjectURL(t)}function rs({getViewer:t,getCesium:e,message:a}){const r=Q([]),s=Q(null);let n=0;async function m(l){const g=e(),u=t();if(!g||!u)throw new Error("Cesium 未初始化");const v=St(l);try{const D=await g.GeoJsonDataSource.load(v,{stroke:g.Color.fromCssColorString("#3ddc84"),fill:g.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:g.Color.fromCssColorString("#3ddc84"),markerSize:24}),N=`geojson_${++n}`;D.name=l.name,await u.dataSources.add(D),vt(u,g,D,"geojson");const q={id:N,name:l.name,type:"geojson",entity:D,blobUrl:v};return r.value=[...r.value,q],a.success(`GeoJSON "${l.name}" 加载成功`),q}catch(D){throw qe(v),D}}async function y(l){const g=e(),u=t();if(!g||!u)throw new Error("Cesium 未初始化");const v=St(l);try{const D=await g.KmlDataSource.load(v,{camera:u.scene.camera,canvas:u.scene.canvas}),N=`kml_${++n}`;D.name=l.name,await u.dataSources.add(D),vt(u,g,D,"kml");const q={id:N,name:l.name,type:"kml",entity:D,blobUrl:v};return r.value=[...r.value,q],a.success(`KML "${l.name}" 加载成功`),q}catch(D){throw qe(v),D}}async function _(l){const g=e(),u=t();if(!g||!u)throw new Error("Cesium 未初始化");const v=St(l);try{const D=await g.KmlDataSource.load(v,{camera:u.scene.camera,canvas:u.scene.canvas}),N=`kmz_${++n}`;D.name=l.name,await u.dataSources.add(D),vt(u,g,D,"kmz");const q={id:N,name:l.name,type:"kmz",entity:D,blobUrl:v};return r.value=[...r.value,q],a.success(`KMZ "${l.name}" 加载成功`),q}catch{return qe(v),await T(l)}}async function T(l){const g=e(),u=t(),v=await l.arrayBuffer(),{decompressBuffer:D}=await Za(),q=(await D(v,l.name)).find(te=>{var le;return te.ext==="kml"||((le=te.name)==null?void 0:le.toLowerCase().endsWith(".kml"))});if(!q)throw new Error("KMZ 压缩包中未找到 KML 文件");let j;typeof q.content=="string"?j=q.content:q.content instanceof ArrayBuffer||q.content instanceof Uint8Array?j=Hr(q.content):j=String(q.content||"");const ee=new Blob([j],{type:"application/vnd.google-earth.kml+xml"}),V=URL.createObjectURL(ee);try{const te=await g.KmlDataSource.load(V,{camera:u.scene.camera,canvas:u.scene.canvas}),le=`kmz_${++n}`;te.name=l.name,await u.dataSources.add(te),vt(u,g,te,"kmz");const ne={id:le,name:l.name,type:"kmz",entity:te};return r.value=[...r.value,ne],a.success(`KMZ "${l.name}" 加载成功（手动解压）`),ne}finally{URL.revokeObjectURL(V)}}async function F(l,g=[]){const u=e(),v=t();if(!u||!v)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:D}=await Za(),N={shp:await l.arrayBuffer()};for(const ne of g){const pe=fa(ne.name);pe==="dbf"&&(N.dbf=await ne.arrayBuffer()),pe==="shx"&&(N.shx=await ne.arrayBuffer()),pe==="prj"&&(N.prj=await ne.arrayBuffer()),pe==="cpg"&&(N.cpg=await ne.arrayBuffer())}const q=await D(N),j=Array.isArray(q)?q:[q],ee=j.reduce((ne,pe)=>{var De;return ne+(((De=pe==null?void 0:pe.features)==null?void 0:De.length)||0)},0),V=j.length===1?j[0]:{type:"FeatureCollection",features:j.flatMap(ne=>(ne==null?void 0:ne.features)||[])},te=new Blob([JSON.stringify(V)],{type:"application/geo+json"}),le=URL.createObjectURL(te);try{const ne=await u.GeoJsonDataSource.load(le,{stroke:u.Color.fromCssColorString("#ffcc00"),fill:u.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:u.Color.fromCssColorString("#ffcc00"),markerSize:20}),pe=`shp_${++n}`;ne.name=l.name,await v.dataSources.add(ne),vt(v,u,ne,"shp");const De={id:pe,name:l.name,type:"shp",entity:ne};return r.value=[...r.value,De],a.success(`Shapefile "${l.name}" 加载成功 (${ee} 个要素)`),URL.revokeObjectURL(le),De}catch(ne){throw URL.revokeObjectURL(le),ne}}async function k(l){const g=e(),u=t();if(!g||!u)throw new Error("Cesium 未初始化");const v=St(l);let D=null;try{D=await b(l)}catch{}if(D)try{const N=await i(g,u,v,l.name,D),j={id:`gltf_${++n}`,name:l.name,type:"gltf",entity:N,blobUrl:v};return r.value=[...r.value,j],a.success(`3D 模型 "${l.name}" 加载成功 (${D.lng.toFixed(4)}, ${D.lat.toFixed(4)}, ${D.height.toFixed(1)}m)`),j}catch(N){throw qe(v),N}return s.value&&qe(s.value.blobUrl),s.value={file:l,blobUrl:v,name:l.name},{needsCoordInput:!0,file:l}}async function A(l){const g=e(),u=t();if(!s.value)throw new Error("没有等待确认的模型文件");const{blobUrl:v,name:D}=s.value;try{const N=await i(g,u,v,D,l),j={id:`gltf_${++n}`,name:D,type:"gltf",entity:N,blobUrl:v};r.value=[...r.value,j],a.success(`3D 模型 "${D}" 加载成功 (${l.lng.toFixed(4)}, ${l.lat.toFixed(4)}, ${l.height.toFixed(1)}m)`);const ee=g.Cartesian3.fromDegrees(l.lng,l.lat,l.height+500);return u.camera.flyTo({destination:ee,orientation:{heading:g.Math.toRadians(0),pitch:g.Math.toRadians(-30),roll:0},duration:2}),s.value=null,j}catch(N){throw qe(v),s.value=null,N}}function E(){s.value&&(qe(s.value.blobUrl),s.value=null)}async function p(l){const g=e(),u=t();if(!g||!u)throw new Error("Cesium 未初始化");const v=St(l);try{const D=await g.CzmlDataSource.load(v),N=`czml_${++n}`;D.name=l.name,await u.dataSources.add(D),vt(u,g,D,"czml");const q={id:N,name:l.name,type:"czml",entity:D,blobUrl:v};return r.value=[...r.value,q],a.success(`CZML "${l.name}" 加载成功`),q}catch(D){throw qe(v),D}}async function S(l){const g=e(),u=t();if(!g||!u)throw new Error("Cesium 未初始化");const v=St(l);try{const D=await g.Cesium3DTileset.fromUrl(v),N=`tileset_${++n}`;u.scene.primitives.add(D);const q={id:N,name:l.name,type:"3dtiles",entity:D,blobUrl:v};return r.value=[...r.value,q],vt(u,g,D,"3dtiles"),a.success(`3D Tiles "${l.name}" 加载成功`),q}catch(D){throw qe(v),D}}async function b(l){var D,N,q,j,ee;const g=fa(l.name);let u;if(g==="gltf"){const V=await l.text();u=JSON.parse(V)}else{const V=await l.arrayBuffer();u=P(V)}if(!u)return null;if((D=u.extensionsUsed)!=null&&D.includes("CESIUM_RTC")&&((q=(N=u.extensions)==null?void 0:N.CESIUM_RTC)!=null&&q.center)){const V=u.extensions.CESIUM_RTC.center;if(V.length>=3){const te=e();if(te){const le=new te.Cartesian3(V[0],V[1],V[2]),ne=te.Cartographic.fromCartesian(le);return{lng:te.Math.toDegrees(ne.longitude),lat:te.Math.toDegrees(ne.latitude),height:ne.height}}}}const v=(j=u.asset)==null?void 0:j.extras;if(v){const V=v.longitude??v.lng,te=v.latitude??v.lat,le=v.height??v.altitude??v.alt??0;if(V!=null&&te!=null)return{lng:Number(V),lat:Number(te),height:Number(le)}}if(((ee=u.nodes)==null?void 0:ee.length)>0&&u.nodes[0].matrix){const V=u.nodes[0].matrix;if(V.length>=16){const te=V[12],le=V[13],ne=V[14];if(Math.abs(te)>1e5||Math.abs(le)>1e5){const pe=e();if(pe)try{const De=new pe.Cartesian3(te,le,ne),Ae=pe.Cartographic.fromCartesian(De);return{lng:pe.Math.toDegrees(Ae.longitude),lat:pe.Math.toDegrees(Ae.latitude),height:Ae.height}}catch{}}}}return null}function P(l){if(l.byteLength<20)return null;const g=new DataView(l);if(g.getUint32(0,!0)!==1179937895)return null;const v=g.getUint32(12,!0);if(g.getUint32(16,!0)!==1313821514)return null;const N=new Uint8Array(l,20,v),q=new TextDecoder().decode(N);try{return JSON.parse(q)}catch{return null}}async function i(l,g,u,v,D){const{lng:N,lat:q,height:j}=D,ee=l.Cartesian3.fromDegrees(N,q,j),V=new l.HeadingPitchRoll(0,0,0),te=l.Transforms.localFrameToFixedFrameGenerator("north","west"),le=await l.Model.fromGltfAsync({url:u,modelMatrix:l.Transforms.headingPitchRollToFixedFrame(ee,V,l.Ellipsoid.WGS84,te),scale:1,show:!0});return le.name=v,g.scene.primitives.add(le),le}async function h(l){const g=t(),u=e();if(!g||!u)throw a.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const v=fa(l.name);try{switch(v){case"geojson":case"json":return l.name.toLowerCase().includes(as)?await S(l):await m(l);case"kml":return await y(l);case"kmz":return await _(l);case"shp":return await F(l);case"glb":case"gltf":return await k(l);case"czml":return await p(l);default:throw a.error(`不支持的文件格式: .${v}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${v}`)}}catch(D){throw a.error(`加载 "${l.name}" 失败: ${D.message||D}`),D}}function f(l){const g=r.value.find(v=>v.id===l);if(!g)return;const u=t();if(u){try{g.type==="3dtiles"?u.scene.primitives.remove(g.entity):u.dataSources.remove(g.entity,!0)}catch{}g.blobUrl&&qe(g.blobUrl),r.value=r.value.filter(v=>v.id!==l),a.info(`已移除 "${g.name}"`)}}function w(){var u,v,D,N,q;const l=t();if(!l){r.value=[];return}for(const j of r.value){try{j.type==="3dtiles"?l.scene.primitives.remove(j.entity):l.dataSources.remove(j.entity,!0)}catch{}j.blobUrl&&qe(j.blobUrl)}if(Array.isArray((u=l.dataSources)==null?void 0:u.dataSources)){const j=l.dataSources.dataSources.slice();for(const ee of j)if(ee&&!ee.isBaseLayerPickerDataSource)try{l.dataSources.remove(ee,!0)}catch{}}const g=e();if(g&&Array.isArray((D=(v=l.scene)==null?void 0:v.primitives)==null?void 0:D.primitives)){const j=l.scene.primitives.primitives.slice();for(const ee of j)if(!(!ee||!(ee instanceof g.Cesium3DTileset||ee instanceof g.Model||ee.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(ee.name||"")))))try{l.scene.primitives.remove(ee)}catch{}}r.value=[],E();try{(q=(N=l.scene).requestRender)==null||q.call(N)}catch{}a.info("已清除所有导入数据")}return{loadDataFile:h,loadedDataSources:r,removeDataSource:f,clearAllDataSources:w,pendingGltfFile:s,loadGltfWithUserCoords:A,cancelPendingGltf:E}}const ns="cesium_tool_panel_open",lt={low:{label:"性能",stepCount:28,maxDistance:24e4},medium:{label:"均衡",stepCount:48,maxDistance:36e4},high:{label:"精细",stepCount:64,maxDistance:52e4}};function is({fluidPanelRef:t,sceneActions:e={},wind:a={},panelStorageKey:r=ns}={}){const s=Q(Tt(r,!0)),n=Q({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1,volumetricClouds:!1}),m=Q({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,bsmShadow:!1,shadowResolution:256,maxDistance:lt.medium.maxDistance,stepCount:lt.medium.stepCount});n.value={...n.value,clouds:m.value};const y=Q({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),_=Q({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),T=Se(()=>{var p,S,b,P,i,h;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:n.value.atmosphere||n.value.fog||n.value.hbao||n.value.tiltShift?"启用":"关闭",statusTone:n.value.atmosphere||n.value.fog||n.value.hbao||n.value.tiltShift?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:n.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:n.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:n.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:n.value.atmosphere}]},{id:"clouds",title:"体积云",description:"云层质量、光照、自阴影和步进参数",status:n.value.volumetricClouds?"启用":"关闭",statusTone:n.value.volumetricClouds?"success":"neutral",controlLayout:"clouds",controls:[{id:"volumetricClouds",label:"云层",type:"toggle",value:n.value.volumetricClouds,tooltip:"Cesium ECEF 球壳体积云。包含向太阳二次步进、SVS Beer Shadow Map、自阴影与薄雾近似。"},{id:"cloudQuality",label:"质量",type:"select",value:m.value.quality,options:Object.entries(lt).map(([f,w])=>({value:f,label:w.label})),disabled:!n.value.volumetricClouds},...ss(m.value,!n.value.volumetricClouds)]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(p=a.wind2D)!=null&&p.value?"已加载":"未加载",statusTone:(S=a.wind2D)!=null&&S.value?"success":"neutral",actions:[{id:"load",label:(b=a.wind2D)!=null&&b.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((P=a.wind2D)!=null&&P.value)}],controls:os((i=a.windParams)==null?void 0:i.value,!!((h=a.wind2D)!=null&&h.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:_.value.isPicking?"等待选点":_.value.hasFluid?"已创建":"未创建",statusTone:_.value.isPicking?"warning":_.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:_.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:_.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!_.value.hasFluid&&!_.value.isPicking}],controls:us(y.value,_.value)}]});we(s,p=>{zt(r,p)});function F({moduleId:p,actionId:S}){var P,i;(i=(P={scene:{home:()=>{var h;return(h=e.flyToHome)==null?void 0:h.call(e)},everest:e.flyToEverest,tileset:e.loadCustomTileset},wind:{load:a.loadSimulatedWind,clear:a.clearWind2D},fluid:{pick:()=>{var h,f;return(f=(h=t==null?void 0:t.value)==null?void 0:h.startPickHeightMap)==null?void 0:f.call(h)},clear:()=>{var h,f;return(f=(h=t==null?void 0:t.value)==null?void 0:h.clearFluid)==null?void 0:f.call(h)}}}[p])==null?void 0:P[S])==null||i.call(P)}function k({moduleId:p,controlId:S,value:b}){var P,i;if((p==="effects"||p==="clouds")&&S in n.value){n.value={...n.value,[S]:!!b};return}if(p==="clouds"&&ls(S)){const h=S==="cloudQuality"?{quality:b,previousQuality:m.value.quality}:{[S]:b};m.value=cs({...m.value,...h}),n.value={...n.value,clouds:m.value};return}if(p==="wind"&&S in(((P=a.windParams)==null?void 0:P.value)||{})){(i=a.setWindParam)==null||i.call(a,S,b);return}p==="fluid"&&S in y.value&&(y.value={...y.value,[S]:S==="waterColor"?b:Number(b)})}function A(p){const S=Dt(p==null?void 0:p.waterLevel),b=Dt(p==null?void 0:p.waterLevelMin),P=Dt(p==null?void 0:p.waterLevelMax);_.value={isPicking:!!(p!=null&&p.isPicking),hasFluid:!!(p!=null&&p.hasFluid),selectedText:(p==null?void 0:p.selectedText)||"",waterLevel:S,waterLevelMin:b,waterLevelMax:P},S!==null&&(y.value={...y.value,waterLevel:S})}function E(){var p;(p=a.clearWind2D)==null||p.call(a)}return{toolPanelOpen:s,advancedEffectControls:n,cloudParams:m,fluidParams:y,fluidState:_,toolModules:T,handleToolAction:F,handleToolControlChange:k,handleFluidStateChange:A,cleanupTools:E}}function os(t={},e){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:t.speedFactor??1,displayValue:Number(t.speedFactor??1).toFixed(1),disabled:e},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:t.arrowLength??15e3,displayValue:`${Math.round((t.arrowLength??15e3)/1e3)} km`,disabled:e},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:t.trailLength??2e4,displayValue:`${Math.round((t.trailLength??2e4)/1e3)} km`,disabled:e},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:t.alphaFactor??1,displayValue:Number(t.alphaFactor??1).toFixed(2),disabled:e}]}function ss(t={},e){return[{id:"coverage",label:"云量",type:"range",min:.18,max:.82,step:.01,value:t.coverage??.52,displayValue:Number(t.coverage??.52).toFixed(2),disabled:e,tooltip:"覆盖率阈值。数值越大云越少，数值越小云越密。",numberInput:!1},{id:"density",label:"密度",type:"range",min:25e-6,max:18e-5,step:5e-6,value:t.density??9e-5,displayValue:Number(t.density??9e-5).toExponential(2),disabled:e,tooltip:"体积消光密度。数值越大云更厚、更暗，也更影响性能观感。",numberInput:!1},{id:"shadowStrength",label:"阴影",type:"range",min:0,max:1,step:.02,value:t.shadowStrength??.82,displayValue:Number(t.shadowStrength??.82).toFixed(2),disabled:e,numberInput:!1},{id:"multiScattering",label:"散射",type:"range",min:0,max:1,step:.02,value:t.multiScattering??.58,displayValue:Number(t.multiScattering??.58).toFixed(2),disabled:e,numberInput:!1},{id:"beerShadowStrength",label:"远影",type:"range",min:0,max:1,step:.02,value:t.beerShadowStrength??.64,displayValue:Number(t.beerShadowStrength??.64).toFixed(2),disabled:e,tooltip:"Beer Shadow Map 风格的远距离光学深度近似。数值越大，云层背光阴影越明显。",numberInput:!1},{id:"powderStrength",label:"银边",type:"range",min:0,max:1.4,step:.02,value:t.powderStrength??.72,displayValue:Number(t.powderStrength??.72).toFixed(2),disabled:e,numberInput:!1},{id:"hazeStrength",label:"薄霾",type:"range",min:0,max:1,step:.02,value:t.hazeStrength??.38,displayValue:Number(t.hazeStrength??.38).toFixed(2),disabled:e,numberInput:!1},{id:"groundBounceStrength",label:"反照",type:"range",min:0,max:1,step:.02,value:t.groundBounceStrength??.26,displayValue:Number(t.groundBounceStrength??.26).toFixed(2),disabled:e,tooltip:"地面反弹光近似，用于提亮云底。",numberInput:!1},{id:"bsmShadow",label:"BSM",type:"toggle",value:!!t.bsmShadow,disabled:e,tooltip:"Beer Shadow Map 阴影 atlas。用于远距离自阴影，异常时会自动降级关闭。"},{id:"shadowResolution",label:"影图",type:"range",min:128,max:512,step:128,value:t.shadowResolution??256,displayValue:`${Math.round(t.shadowResolution??256)} px`,disabled:e||!t.bsmShadow,tooltip:"BSM 阴影 atlas 单级联分辨率。越高越清晰，也越影响性能。",numberInput:!1},{id:"maxDistance",label:"距离",type:"range",min:12e4,max:9e5,step:1e4,value:t.maxDistance??lt.medium.maxDistance,displayValue:`${Math.round((t.maxDistance??lt.medium.maxDistance)/1e3)} km`,disabled:e,numberInput:!1},{id:"stepCount",label:"步数",type:"range",min:24,max:80,step:1,value:t.stepCount??lt.medium.stepCount,displayValue:String(Math.round(t.stepCount??lt.medium.stepCount)),disabled:e,numberInput:!1}]}function ls(t){return["cloudQuality","coverage","density","shadowStrength","beerShadowStrength","multiScattering","powderStrength","hazeStrength","groundBounceStrength","bsmShadow","shadowResolution","maxDistance","stepCount"].includes(t)}function cs(t={}){const e=Object.prototype.hasOwnProperty.call(lt,t.quality)?t.quality:"medium",a=lt[e],r=t.quality&&t.quality!==t.previousQuality;return{quality:e,coverage:ze(je(t.coverage,.52),.18,.82),density:ze(je(t.density,9e-5),25e-6,18e-5),shadowStrength:ze(je(t.shadowStrength,.82),0,1),beerShadowStrength:ze(je(t.beerShadowStrength,.64),0,1),multiScattering:ze(je(t.multiScattering,.58),0,1),powderStrength:ze(je(t.powderStrength,.72),0,1.4),hazeStrength:ze(je(t.hazeStrength,.38),0,1),groundBounceStrength:ze(je(t.groundBounceStrength,.26),0,1),bsmShadow:t.bsmShadow===!0,shadowResolution:Math.round(ze(je(t.shadowResolution,256),128,512)/128)*128,maxDistance:ze(r?a.maxDistance:je(t.maxDistance,a.maxDistance),12e4,9e5),stepCount:Math.round(ze(r?a.stepCount:je(t.stepCount,a.stepCount),24,80))}}function us(t,e={}){const a=Dt(e.waterLevelMin),r=Dt(e.waterLevelMax),s=a!==null&&r!==null,n=s?Math.min(a,r):0,m=s?Math.max(a,r):0,y=Dt(t.waterLevel),_=s?ze(y??n,n,m):0,T=s?Math.max((m-n)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:t.threshold,displayValue:Number(t.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:t.blend,displayValue:Number(t.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:t.lightStrength,displayValue:Number(t.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:n,max:m,step:T,value:_,displayValue:s?`${ds(_)} m`:"先捕捉",disabled:!s,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:t.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function Dt(t){const e=Number(t);return Number.isFinite(e)?e:null}function je(t,e){const a=Number(t);return Number.isFinite(a)?a:e}function ze(t,e,a){return Math.max(e,Math.min(a,t))}function ds(t){const e=Math.abs(t);return e>=1e3?t.toFixed(1):e>=10?t.toFixed(2):t.toFixed(3)}const{getLayerIdByIndex:hs,getLayerIndexById:Qa}=Rr({urlLayerOptions:Ir,getLayerCategoryById:kr,getLayerGroupById:zr}),va=-90,Ca=1,ur=5e7;function fs({getViewer:t,getCesium:e,onCameraViewSync:a,onBasemapRestore:r}={}){const s=mr(),n=pr();let m=null;function y(i){return Nr(i,s.query)}function _(){const i=String(y(La)||"").trim(),h=xt(y("lng")),f=xt(y("lat")),w=ms(y("z")),l=Or(i);if(l&&h!==null&&f!==null&&w!==null){const u={lng:h,lat:f,height:w,...l};if(er(u))return u}const g=Br(i);return er(g)?g:h===null||f===null||w===null||h<-180||h>180||f<-90||f>90?null:{lng:h,lat:f,height:w,heading:xt(y("heading"))??0,pitch:xt(y("pitch"))??va,roll:xt(y("roll"))??0}}function T({duration:i=0}={}){const h=t==null?void 0:t(),f=e==null?void 0:e(),w=_();if(!(h!=null&&h.camera)||!f||!w)return!1;const l=f.Cartesian3.fromDegrees(w.lng,w.lat,w.height),g={heading:ma(f,w.heading??0),pitch:ma(f,ps(w.pitch??va)),roll:ma(f,w.roll??0)};return Number(i)>0?(h.camera.flyTo({destination:l,orientation:g,duration:Number(i)}),!0):(h.camera.setView({destination:l,orientation:g}),!0)}function F(i){if(!i)return null;const h=Qa(i);if(h===null)return null;const f={view:ra,l:String(h)};return P(f),String(h)}function k(){const i=xt(y("l"));if(i===null)return null;const h=hs(i);return h&&(r==null||r(h)),h}function A({initialSync:i=!1,getActivePresetId:h}={}){const f=S();if(!(!(f!=null&&f.moveEnd)||m)&&(m=f.moveEnd.addEventListener(()=>{const w=h==null?void 0:h();p({activePresetId:w})}),i)){const w=h==null?void 0:h();p({activePresetId:w})}}function E(){typeof m=="function"&&m(),m=null}function p({activePresetId:i}={}){const h=e==null?void 0:e(),f=S();if(!h||!(f!=null&&f.position))return;const w=h.Cartographic.fromCartesian(f.position);if(!w)return;const l=h.Math.toDegrees(w.longitude),g=h.Math.toDegrees(w.latitude),u=Number(w.height),v=h.Math.toDegrees(Number(f.heading)||0),D=h.Math.toDegrees(Number(f.pitch)||0),N=h.Math.toDegrees(Number(f.roll)||0);if(!Number.isFinite(l)||!Number.isFinite(g)||!Number.isFinite(u))return;const q=Math.max(Ca,u),j=Er({heading:v,pitch:D,roll:N});if(!j||j==="0")return;const ee={view:ra,camera:{lng:l,lat:g,height:q,heading:v,pitch:D,roll:N}},V={view:ra,[La]:j,lng:tr(l,6),lat:tr(g,6),z:gs(q)},te=i;if(te){const le=Qa(te);le!==null&&(V.l=String(le))}P(V),a==null||a(ee)}function S(){var h;const i=t==null?void 0:t();return(i==null?void 0:i.camera)||((h=i==null?void 0:i.scene)==null?void 0:h.camera)||null}function b(i,h){const f=Object.keys(i).filter(l=>i[l]!==void 0&&i[l]!==null&&i[l]!==""),w=Object.keys(h).filter(l=>h[l]!==void 0&&h[l]!==null&&h[l]!=="");return f.length!==w.length?!1:w.every(l=>String(i[l]??"")===String(h[l]??""))}function P(i){const h={...ka(s.query),...i};gr.forEach(w=>{w in i||delete h[w]}),Object.keys(h).forEach(w=>{const l=h[w];l==null||l===""?delete h[w]:h[w]=String(l)});const f=ka(s.query);b(f,h)||n.replace({path:s.path||"/home",query:h}).catch(()=>{})}return{restoreCameraFromUrl:T,restoreBasemapFromUrl:k,syncBasemapToUrl:F,bindCameraViewSync:A,cleanupCameraViewSync:E}}function xt(t){if(t==null||typeof t=="string"&&t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function ms(t){const e=xt(t);return e===null||e<Ca||e>ur?null:e}function er(t){if(!t)return!1;const e=Number(t.lng),a=Number(t.lat),r=Number(t.height),s=Number(t.heading),n=Number(t.pitch),m=Number(t.roll);return Number.isFinite(e)&&e>=-180&&e<=180&&Number.isFinite(a)&&a>=-90&&a<=90&&Number.isFinite(r)&&r>=Ca&&r<=ur&&Number.isFinite(s)&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(m)}function ps(t){const e=Number(t);return Number.isFinite(e)?Math.max(-90,Math.min(90,e)):va}function tr(t,e){const a=Number(t);return Number.isFinite(a)?a.toFixed(e):null}function gs(t){const e=Number(t);return Number.isFinite(e)?e.toFixed(2):null}function ma(t,e){const a=Number(e);return Number.isFinite(a)?t.Math.toRadians(a):0}const Ce={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},ys=new Float32Array([-1,-1,1,-1,1,1,-1,1]),vs=new Float32Array([0,0,1,0,1,1,0,1]),xs=new Uint16Array([0,1,2,0,2,3]);function ht(t,e,a){return Math.max(e,Math.min(a,t))}function ue(t,e){const a=Number(t);return Number.isFinite(a)?a:e}function _s(t,e){const a=e.getParameter(e.MAX_TEXTURE_SIZE),r=Math.min(2048,a),s=Math.max(1,Math.floor(t)),n=Math.sqrt(s),m=Math.log2(n),y=Number.isFinite(m)?Math.round(m):4;let _=Math.pow(2,y);return _=ht(_,16,r),_}function bs(t){const e=t*t,a=new Float32Array(e*4);for(let r=0;r<e;r+=1){const s=r*4;a[s]=Math.random(),a[s+1]=Math.random(),a[s+2]=Math.random(),a[s+3]=Math.random()}return a}function Ss(t){return new Float32Array(t*t*4)}function ws(t,e,a,r,s){const n=e.createTexture();if(!n)throw new Error("Failed to create wind atlas texture.");e.bindTexture(e.TEXTURE_2D,n),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,a,r,0,e.RGBA,e.FLOAT,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null);let m=!1;return{_context:t,_texture:n,_target:e.TEXTURE_2D,_width:a,_height:r,destroy(){m||(e.deleteTexture(n),m=!0)}}}class Ts{constructor(e,a={}){if(!e||!e.scene||!e.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=e,this._scene=e.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=a.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const r={...Ce,...a};this.speedFactor=ue(r.speedFactor,Ce.speedFactor),this.cullSpeedMin=ue(r.cullSpeedMin,Ce.cullSpeedMin),this.cullSpeedMax=ue(r.cullSpeedMax,Ce.cullSpeedMax),this.windSpeedMin=ue(r.windSpeedMin,Ce.windSpeedMin),this.windSpeedMax=ue(r.windSpeedMax,Ce.windSpeedMax),this.arrowLength=ue(r.arrowLength,Ce.arrowLength),this.trailLength=ue(r.trailLength,Ce.trailLength),this.decaySpeed=ue(r.decaySpeed,Ce.decaySpeed),this.alphaFactor=ue(r.alphaFactor,Ce.alphaFactor),this.maxWindSpeed=ue(r.maxWindSpeed,Ce.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=ue(a.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(e){if(!e||typeof e!="object")throw new Error("Wind2D.loadData requires a valid data object.");const a=ue(e.longitude,NaN),r=ue(e.latitude,NaN),s=Array.isArray(e.altitude)?e.altitude:[],n=Array.isArray(e.sizeMesh)?e.sizeMesh:[],m=Array.isArray(e.count)?e.count:[],y=Array.isArray(e.hspeed)?e.hspeed:[],_=Array.isArray(e.hdir)?e.hdir:[],T=Array.isArray(e.vspeed)?e.vspeed:[];if(!Number.isFinite(a)||!Number.isFinite(r))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const F=s.length;if(F<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(n.length!==F||m.length!==F)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const k=m.map(g=>Math.max(1,Math.floor(ue(g,1)))),A=n.map(g=>Math.max(1,ue(g,1))),E=s.map(g=>ue(g,0)),p=k.reduce((g,u)=>g+u*u,0);if(y.length<p||_.length<p||T.length<p)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=F,this.visibleLayerMin=0,this.visibleLayerMax=F-1,this._altitudes=E.slice(),this._maxNx=Math.max(...k),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*F;const S=new Float32Array(this._atlasWidth*this._atlasHeight*4);let b=0;for(let g=0;g<F;g+=1){const u=k[g],v=u;for(let D=0;D<v;D+=1)for(let N=0;N<u;N+=1){const q=b+D*u+N,j=((g*this._maxNy+D)*this._atlasWidth+N)*4,ee=Number(y[q]),V=Number(_[q]),te=Number(T[q]);if(!(Number.isFinite(ee)&&Number.isFinite(V))){S[j]=0,S[j+1]=0,S[j+2]=0,S[j+3]=0;continue}const ne=V*Math.PI/180;S[j]=ee*Math.sin(ne),S[j+1]=ee*Math.cos(ne),S[j+2]=Number.isFinite(te)?te:0,S[j+3]=1}b+=u*v}this._createOrReplaceWindAtlasTexture(S);const P=Math.max(...A),i=this._maxNx*P,h=i/2/111320,f=r*Math.PI/180,w=Math.max(1e-6,Math.abs(Math.cos(f))),l=i/2/(111320*w);this._bounds={minLon:a-l,maxLon:a+l,minLat:r-h,maxLat:r+h,minHeight:Math.min(...E),maxHeight:Math.max(...E)},this._dataPointCount=p,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(e){const a=Math.max(1,Math.floor(ue(e,1))),r=_s(a,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&r===this._particleTextureSize||(this._particleTextureSize=r,this._particleCount=r*r,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(e){const a=ht(ue(e,this.particleDensity),.05,10);if(this.particleDensity=a,this._dataPointCount<=0)return;const r=Math.max(1,Math.floor(this._dataPointCount*a));this.setParticleCount(r)}setBounds(e,a,r,s){const n=ue(e,NaN),m=ue(a,NaN),y=ue(r,NaN),_=ue(s,NaN);if(!Number.isFinite(n)||!Number.isFinite(m)||!Number.isFinite(y)||!Number.isFinite(_))return;const T=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};T.minLon=Math.min(n,m),T.maxLon=Math.max(n,m),T.minLat=Math.min(y,_),T.maxLat=Math.max(y,_),this._bounds=T,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const e=(this._bounds.minLon+this._bounds.maxLon)*.5,a=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(e,a,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(e){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const s=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[s],this._updateCommand.execute(this._context,e?e.passState:void 0),this._particleState=s,this._drawCommand.modelMatrix=this._modelMatrix,e&&Array.isArray(e.commandList)&&e.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(e){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=ws(this._context,this._gl,this._atlasWidth,this._atlasHeight,e)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const e=this._Cesium,a=this._particleTextureSize,r=bs(a),s=Ss(a);for(let n=0;n<2;n+=1){this._particlePositionTextures[n]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:r},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[n]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:s},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._framebuffers[n]=new e.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[n],this._velocityTextures[n]],destroyAttachments:!1});const m=this._framebuffers[n]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,m),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._particlePositionTextures[e]&&(this._particlePositionTextures[e].destroy(),this._particlePositionTextures[e]=null),this._velocityTextures[e]&&(this._velocityTextures[e].destroy(),this._velocityTextures[e]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const e=this._Cesium,a=e.Buffer.createVertexBuffer({context:this._context,typedArray:ys,usage:e.BufferUsage.STATIC_DRAW}),r=e.Buffer.createVertexBuffer({context:this._context,typedArray:vs,usage:e.BufferUsage.STATIC_DRAW}),s=e.Buffer.createIndexBuffer({context:this._context,typedArray:xs,usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:a,componentsPerAttribute:2},{index:1,vertexBuffer:r,componentsPerAttribute:2}],indexBuffer:s})}_buildParticleVertexArray(){const e=this._Cesium,a=new Float32Array(this._drawVertexCount);for(let r=0;r<a.length;r+=1)a[r]=r;this._particleVertexBuffer=e.Buffer.createVertexBuffer({context:this._context,typedArray:a,usage:e.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const e=this._Cesium,a=`#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}`,r=`#version 300 es
precision highp float;
precision highp sampler2D;

in vec2 v_textureCoordinates;

uniform sampler2D currentParticlesPosition;
uniform sampler2D windAtlas;
uniform float speedFactor;
uniform float maxWindSpeed;
uniform float decaySpeed;
uniform int layerCount;
uniform float maxNx;
uniform float maxNy;
uniform float atlasW;
uniform float atlasH;
uniform int visibleLayerMin;
uniform int visibleLayerMax;

layout(location = 0) out vec4 positionOut;
layout(location = 1) out vec4 velocityOut;

float hash2(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

vec3 randomPos(vec2 uv) {
  return vec3(
    hash2(uv + vec2(0.123, 0.713)),
    hash2(uv + vec2(0.531, 0.219)),
    hash2(uv + vec2(0.917, 0.417))
  );
}

float wrap01(float value) {
  return value < 0.0 ? value + 1.0 : (value > 1.0 ? value - 1.0 : value);
}

vec4 sampleLayer(int layerIdx, vec2 posXY) {
  float layerStartV = float(layerIdx) * maxNy / atlasH;
  float layerEndV = float(layerIdx + 1) * maxNy / atlasH;
  float u = posXY.x * maxNx / atlasW;
  float v = mix(layerStartV, layerEndV, posXY.y);
  return texture(windAtlas, vec2(u, v));
}

vec4 sampleWind(vec3 pos) {
  if (layerCount <= 0) {
    return vec4(0.0);
  }

  int minLayer = max(0, min(visibleLayerMin, layerCount - 1));
  int maxLayer = max(minLayer, min(visibleLayerMax, layerCount - 1));

  float z = clamp(pos.z, 0.0, 1.0);

  int lower = 0;
  int upper = 0;

  if (layerCount > 1) {
    float firstCenter = 0.5 / float(layerCount);
    if (z > firstCenter) {
      lower = layerCount - 1;
      upper = layerCount - 1;
      for (int i = 0; i < 64; i++) {
        if (i >= layerCount) {
          break;
        }

        float center = (float(i) + 0.5) / float(layerCount);
        if (z >= center) {
          lower = i;
        }
        if (z < center) {
          upper = i;
          break;
        }
      }

      if (upper < lower) {
        upper = lower;
      }
    }
  }

  if (lower < minLayer || lower > maxLayer || upper < minLayer || upper > maxLayer) {
    return vec4(0.0);
  }

  vec4 lowerWind = sampleLayer(lower, pos.xy);
  if (lowerWind.a < 0.5) {
    return vec4(0.0);
  }

  if (upper == lower) {
    return vec4(lowerWind.xyz, 1.0);
  }

  vec4 upperWind = sampleLayer(upper, pos.xy);
  if (upperWind.a < 0.5) {
    return vec4(0.0);
  }

  float zLower = (float(lower) + 0.5) / float(layerCount);
  float zUpper = (float(upper) + 0.5) / float(layerCount);
  float t = clamp((z - zLower) / max(1e-6, zUpper - zLower), 0.0, 1.0);
  return vec4(mix(lowerWind.xyz, upperWind.xyz, t), 1.0);
}

void main() {
  vec4 particle = texture(currentParticlesPosition, v_textureCoordinates);
  vec3 pos = particle.xyz;
  float age = fract(particle.w);

  age += decaySpeed;
  if (age > 1.0) {
    age = 0.0;
    pos = randomPos(v_textureCoordinates);
  }

  vec4 sampled = sampleWind(pos);
  vec3 wind = sampled.xyz;

  float packed = 0.0;
  if (sampled.a < 0.5) {
    age = 0.0;
    pos = randomPos(v_textureCoordinates + vec2(0.217, 0.683));
    wind = vec3(0.0);
    packed = 0.0;
  } else {
    vec3 nextPos = pos + wind * speedFactor * 0.001;
    pos = vec3(wrap01(nextPos.x), wrap01(nextPos.y), wrap01(nextPos.z));
    float normalizedSpeed = clamp(length(wind) / max(maxWindSpeed, 1e-6), 0.0, 1.0);
    packed = floor(normalizedSpeed * 255.0) + age;
  }

  positionOut = vec4(pos, packed);
  velocityOut = vec4(wind, 0.0);
}`;this._updateProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:a,fragmentShaderSource:r,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const e=this._Cesium,a=`#version 300 es
precision highp float;
precision highp sampler2D;

in float particleIndex;

uniform sampler2D currentParticlesPosition;
uniform sampler2D velocityTexture;
uniform float particlesTextureSize;
uniform float arrowLength;
uniform float trailLength;
uniform float speedMin;
uniform float speedMax;
uniform float boundsMinLon;
uniform float boundsMaxLon;
uniform float boundsMinLat;
uniform float boundsMaxLat;
uniform float boundsMinHeight;
uniform float boundsMaxHeight;
uniform vec3 centerECEF;
uniform float centerLonRad;
uniform float centerLatRad;

out float v_age;
out float v_speed;
out float v_culled;

mat3 enuToECEF(float lon, float lat) {
  float cosLon = cos(lon);
  float sinLon = sin(lon);
  float cosLat = cos(lat);
  float sinLat = sin(lat);

  vec3 east = vec3(-sinLon, cosLon, 0.0);
  vec3 north = vec3(-sinLat * cosLon, -sinLat * sinLon, cosLat);
  vec3 up = vec3(cosLat * cosLon, cosLat * sinLon, sinLat);
  return mat3(east, north, up);
}

vec3 lonLatHeightToECEF(float lon, float lat, float height) {
  float a = 6378137.0;
  float e2 = 0.00669437999014;

  float sinLat = sin(lat);
  float cosLat = cos(lat);
  float sinLon = sin(lon);
  float cosLon = cos(lon);

  float N = a / sqrt(1.0 - e2 * sinLat * sinLat);
  return vec3(
    (N + height) * cosLat * cosLon,
    (N + height) * cosLat * sinLon,
    (N * (1.0 - e2) + height) * sinLat
  );
}

void main() {
  float pIdx = floor(particleIndex / 6.0);
  float vType = particleIndex - pIdx * 6.0;

  float tx = mod(pIdx, particlesTextureSize);
  float ty = floor(pIdx / particlesTextureSize);
  vec2 uv = (vec2(tx, ty) + 0.5) / particlesTextureSize;

  vec4 particle = texture(currentParticlesPosition, uv);
  vec3 normalizedPos = clamp(particle.xyz, 0.0, 1.0);
  vec3 windENU = texture(velocityTexture, uv).xyz;

  float age = fract(particle.w);
  float packedSpeed = floor(particle.w) / 255.0;

  v_age = age;
  v_speed = packedSpeed;
  v_culled = 0.0;

  if (packedSpeed < speedMin || packedSpeed > speedMax) {
    v_culled = 1.0;
    gl_Position = vec4(0.0);
    return;
  }

  mat3 enuToEcefCenter = enuToECEF(centerLonRad, centerLatRad);
  mat3 ecefToLocal = transpose(enuToEcefCenter);
  vec3 windLocal = ecefToLocal * (enuToEcefCenter * windENU);
  float speedLocal = length(windLocal);
  if (speedLocal < 1e-6) {
    v_culled = 1.0;
    gl_Position = vec4(0.0);
    return;
  }

  float lon = mix(boundsMinLon, boundsMaxLon, normalizedPos.x);
  float lat = mix(boundsMinLat, boundsMaxLat, normalizedPos.y);
  float height = mix(boundsMinHeight, boundsMaxHeight, normalizedPos.z);
  vec3 ecefPosition = lonLatHeightToECEF(lon, lat, height);
  vec3 localPosition = ecefToLocal * (ecefPosition - centerECEF);

  vec3 forward = normalize(windLocal);
  vec3 up = vec3(0.0, 0.0, 1.0);
  vec3 right = cross(forward, up);
  float rightLen = length(right);
  right = rightLen < 1e-6 ? vec3(1.0, 0.0, 0.0) : (right / rightLen);

  vec3 tip = localPosition + forward * arrowLength;
  vec3 tail = localPosition - forward * trailLength;
  float headLen = arrowLength * 0.3;
  float headWidth = arrowLength * 0.15;
  vec3 headBase = tip - forward * headLen;
  vec3 leftWing = headBase + right * headWidth;
  vec3 rightWing = headBase - right * headWidth;

  vec3 vertex = tail;
  if (vType < 0.5) {
    vertex = tail;
  } else if (vType < 1.5) {
    vertex = tip;
  } else if (vType < 2.5) {
    vertex = tip;
  } else if (vType < 3.5) {
    vertex = leftWing;
  } else if (vType < 4.5) {
    vertex = tip;
  } else {
    vertex = rightWing;
  }

  gl_Position = czm_modelViewProjection * vec4(vertex, 1.0);
}`,r=`#version 300 es
precision highp float;

in float v_age;
in float v_speed;
in float v_culled;

uniform float alphaFactor;
uniform float colorSpeedMin;
uniform float colorSpeedMax;


vec3 speedToColor(float t) {
  if (t < 0.25) {
    return mix(vec3(0.0, 0.0, 1.0), vec3(0.0, 1.0, 1.0), t / 0.25);
  }
  if (t < 0.5) {
    return mix(vec3(0.0, 1.0, 1.0), vec3(0.0, 1.0, 0.0), (t - 0.25) / 0.25);
  }
  if (t < 0.75) {
    return mix(vec3(0.0, 1.0, 0.0), vec3(1.0, 1.0, 0.0), (t - 0.5) / 0.25);
  }
  return mix(vec3(1.0, 1.0, 0.0), vec3(1.0, 0.0, 0.0), (t - 0.75) / 0.25);
}

void main() {
  if (v_culled > 0.5) {
    discard;
  }

  float speedT = clamp(
    (v_speed - colorSpeedMin) / max(1e-6, colorSpeedMax - colorSpeedMin),
    0.0,
    1.0
  );

  vec3 color = speedToColor(speedT);
  float alpha = clamp((1.0 - v_age) * alphaFactor, 0.0, 1.0);
  out_FragColor = vec4(color, alpha);
}`;this._drawProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:a,fragmentShaderSource:r,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const e=this._Cesium,a=e.RenderState.fromCache({viewport:new e.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:a,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:e.Pass.OPAQUE})}_buildDrawCommand(){const e=this._Cesium,a=e.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:e.BlendingState.ALPHA_BLEND});this._drawCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:a,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:e.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const e=ht(Math.floor(ue(this.visibleLayerMin,0)),0,this._layerCount-1),a=ht(Math.floor(ue(this.visibleLayerMax,this._layerCount-1)),e,this._layerCount-1);return{min:e,max:a}}_normalizeSpeedRange(e,a){const r=Math.max(1e-4,ue(this.maxWindSpeed,Ce.maxWindSpeed)),s=ht(ue(e,0)/r,0,1),n=ht(ue(a,r)/r,0,1);return{min:Math.min(s,n),max:Math.max(s,n)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>ue(this.speedFactor,Ce.speedFactor),maxWindSpeed:()=>Math.max(1e-4,ue(this.maxWindSpeed,Ce.maxWindSpeed)),decaySpeed:()=>ht(ue(this.decaySpeed,Ce.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>ue(this.arrowLength,Ce.arrowLength),trailLength:()=>ue(this.trailLength,Ce.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>ht(ue(this.alphaFactor,Ce.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Cs({getViewer:t,getCesium:e,message:a}){const r=Q(null),s=Q({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function n(){var F,k;const T=t==null?void 0:t();if(r.value){try{(k=(F=T==null?void 0:T.scene)==null?void 0:F.primitives)==null||k.remove(r.value)}catch{}r.value.destroy(),r.value=null}}function m(){const T=t==null?void 0:t(),F=e==null?void 0:e();if(!T||!F){a.error("Cesium 尚未初始化");return}n();const k=Ds(F);r.value=new Ts(T,{maxWindSpeed:20,cesium:F,speedFactor:s.value.speedFactor,arrowLength:s.value.arrowLength,trailLength:s.value.trailLength,alphaFactor:s.value.alphaFactor}),r.value.loadData(k),T.scene.primitives.add(r.value),r.value.flyTo(),a.success("风场加载成功，可通过下方滑块调节样式")}function y(){r.value&&(r.value.speedFactor=s.value.speedFactor,r.value.arrowLength=s.value.arrowLength,r.value.trailLength=s.value.trailLength,r.value.alphaFactor=s.value.alphaFactor)}function _(T,F){return T in s.value?(s.value={...s.value,[T]:Number(F)},y(),!0):!1}return{wind2D:r,windParams:s,clearWind2D:n,loadSimulatedWind:m,setWindParam:_}}function Ds(t){const s=[0,2e3,5e3,1e4,15e3],n=[3e4,3e4,25e3,25e3,2e4],m=[30,30,25,25,20],y=m.reduce((A,E)=>A+E*E,0),_=new Array(y),T=new Array(y),F=new Array(y);let k=0;for(let A=0;A<5;A++){const E=m[A],p=m[A],S=n[A];for(let b=0;b<p;b++)for(let P=0;P<E;P++){const i=k+b*E+P,h=(P-E/2)*(S/111320),f=(b-p/2)*(S/111320/Math.cos(t.Math.toRadians(35))),l=Math.atan2(f,h)+Math.PI/2+.2*Math.sin(P*.5)*Math.cos(b*.5);T[i]=t.Math.toDegrees(l)%360;const g=Math.sqrt(h*h+f*f),v=Math.max(0,1-g/15);_[i]=(5+A*2)*v+2*Math.random(),F[i]=.5*Math.sin(P*.3)*Math.cos(b*.3)}k+=E*p}return{longitude:104,latitude:35,altitude:s,sizeMesh:n,count:m,hspeed:_,hdir:T,vspeed:F}}const Ms={key:3,class:"drag-overlay"},Ls={class:"map-controls-group"},Ps={class:"mouse-position-content"},Fs={__name:"CesiumContainer",emits:["view-sync"],setup(t,{emit:e}){let a=null,r=null,s=!1;const n=xa(),m=e,y=Q(!1),_=Q(null),T=Q(xr()),F=()=>r,k=()=>a||window.Cesium,A=()=>T.value.tiandituTk,E=()=>T.value.cesiumIonToken,p=qo({getViewer:F,getCesium:k,message:n,backendBaseUrl:vr,tiandituToken:A,cesiumIonToken:E}),{activeBasemap:S,activeTerrain:b,customXyzBasemapUrl:P,basemapOptions:i,terrainOptions:h,overlayOptions:f,createImageryProviderViewModels:w,createTerrainProviderViewModels:l,getSelectedImageryProviderViewModel:g,getSelectedTerrainProviderViewModel:u,bindLayerPickerStateSync:v,addBaseImageryLayers:D,initCustomTerrain:N,handleOverlayToggle:q,handleCustomBasemapSubmit:j,cleanupLayers:ee}=p;we(S,(B,X)=>{!B||B===X||Qe(B)});const{coordinateDisplay:V,setupInteractions:te,cleanupInteractions:le}=No({getViewer:F,getCesium:k}),{installCreditHider:ne,cleanupCreditHider:pe}=zo({getViewer:F}),{restoreCameraFromUrl:De,restoreBasemapFromUrl:Ae,syncBasemapToUrl:Qe,bindCameraViewSync:Me,cleanupCameraViewSync:ce}=fs({getViewer:F,getCesium:k,onCameraViewSync:B=>m("view-sync",B),onBasemapRestore:B=>{B&&S.value!==B&&(S.value=B)}}),R=ts({getViewer:F,getCesium:k,message:n}),{flyToHome:G}=R,z=Cs({getViewer:F,getCesium:k,message:n}),fe=rs({getViewer:F,getCesium:k,message:n}),Xe=Se(()=>fe.loadedDataSources.value),_e=Se(()=>fe.pendingGltfFile.value),Ne=Q(!1);function ft(B){Ne.value=!0,B.dataTransfer&&(B.dataTransfer.dropEffect="copy")}function mt(B){const X=B==null?void 0:B.relatedTarget,re=B==null?void 0:B.currentTarget;X instanceof Node&&re instanceof Node&&re.contains(X)||(Ne.value=!1)}async function Ye(B){var re;if(Ne.value=!1,!y.value)return;const X=(re=B.dataTransfer)==null?void 0:re.files;if(!(!X||X.length===0))for(const ie of X)try{await fe.loadDataFile(ie)}catch{}}const{toolPanelOpen:Oe,advancedEffectControls:Le,fluidParams:Be,toolModules:He,handleToolAction:pt,handleToolControlChange:gt,handleFluidStateChange:ct,cleanupTools:et}=is({fluidPanelRef:_,sceneActions:R,wind:z});async function Ue(){s=!1,or("正在初始化 3D 场景...");try{let B=0,X=1;for(;B<X;)try{if(T.value=await yr({silent:!1,force:B>0}),X=Math.max(X,Array.isArray(T.value.tiandituTokens)?T.value.tiandituTokens.length:1,Array.isArray(T.value.cesiumIonTokens)?T.value.cesiumIonTokens.length:1,1),a=await Co({ionToken:E()}),s||!a||!document.getElementById("cesiumContainer"))return;tt(),te();const re=D(),ie=await N();if(s){Re();return}if(y.value=!0,Me({initialSync:!1,getActivePresetId:()=>S.value}),Ae(),re&&ie){n.success("天地图基础影像与地形加载成功。");return}const Fe=re?{switched:!1}:na("tianditu_tk"),be=ie?{switched:!1}:na("cesium_ion_token");if(!(Fe.switched||be.switched)){n.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}T.value=be.switched?be.tokens:Fe.tokens,Re(),B+=1,n.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(re){const ie=na("cesium_ion_token");if(!ie.switched)throw re;T.value=ie.tokens,Re(),B+=1,n.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}n.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(B){n.error("Cesium 运行时加载失败",B),n.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{sr()}}function Re(){if(y.value=!1,ce(),le(),ee(),pe(),!!r){try{r.destroy()}catch{}r=null}}function tt(){var ie;const B=typeof a.Map=="function"?a.Map:a.Viewer,X=w(),re=l();r=new B("cesiumContainer",{baseLayerPicker:!0,geocoder:((ie=a.IonGeocodeProviderType)==null?void 0:ie.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:X,selectedImageryProviderViewModel:g(X),terrainProviderViewModels:re,selectedTerrainProviderViewModel:u(re),shouldAnimate:!0}),r.scene.debugShowFramesPerSecond=!0,r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,Ao(r,a),Xr(r),ne(),v(),De({duration:0})||G(0)}nr(()=>{Ue()});async function ut({files:B}){for(const X of B)try{await fe.loadDataFile(X)}catch{}}function x({id:B}){fe.removeDataSource(B)}function M(){fe.clearAllDataSources()}async function $(B){try{await fe.loadGltfWithUserCoords(B)}catch{}}function Y(){fe.cancelPendingGltf()}return ir(()=>{if(s=!0,y.value=!1,ce(),le(),et(),ee(),pe(),fe.clearAllDataSources(),r){try{r.destroy()}catch{}r=null}}),(B,X)=>{var re;return Z(),ae(st,null,[L("div",{id:"cesiumContainer",class:"cesium-container",onDragover:Ct(ft,["prevent"]),onDragleave:Ct(mt,["prevent"]),onDrop:Ct(Ye,["prevent"])},null,32),y.value?(Z(),Ve(_t(Pn),{key:0,headless:"","get-viewer":F,"get-cesium":k,controls:oe(Le)},null,8,["controls"])):me("",!0),y.value?(Z(),Ve(_t(So),{key:1,ref_key:"fluidPanelRef",ref:_,headless:"","get-viewer":F,"get-cesium":k,params:oe(Be),onStateChange:oe(ct)},null,40,["params","onStateChange"])):me("",!0),y.value?(Z(),Ve(Vi,{key:2,open:oe(Oe),"onUpdate:open":X[0]||(X[0]=ie=>aa(Oe)?Oe.value=ie:null),"active-basemap":oe(S),"onUpdate:activeBasemap":X[1]||(X[1]=ie=>aa(S)?S.value=ie:null),"active-terrain":oe(b),"onUpdate:activeTerrain":X[2]||(X[2]=ie=>aa(b)?b.value=ie:null),"basemap-options":oe(i),"terrain-options":oe(h),"overlay-options":oe(f),"custom-basemap-url":oe(P),modules:oe(He),"loaded-data-sources":Xe.value,onModuleAction:oe(pt),onControlChange:oe(gt),onOverlayToggle:oe(q),onCustomBasemapSubmit:oe(j),onDataImport:ut,onDataRemove:x,onDataClearAll:M},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):me("",!0),ve(lo,{visible:!!_e.value,"file-name":((re=_e.value)==null?void 0:re.name)||"",onConfirm:$,onCancel:Y},null,8,["visible","file-name"]),Ne.value&&y.value?(Z(),ae("div",Ms,[ve(oe(ga),{size:48,"stroke-width":"1.5"}),X[4]||(X[4]=L("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),X[5]||(X[5]=L("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):me("",!0),L("div",Ls,[L("div",Ps,de(oe(V)),1),X[7]||(X[7]=L("div",{class:"divider"},null,-1)),L("button",{class:"home-btn",title:"回到初始位置",onClick:X[3]||(X[3]=(...ie)=>oe(G)&&oe(G)(...ie))},[...X[6]||(X[6]=[L("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[L("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},qs=Mt(Fs,[["__scopeId","data-v-4fae6931"]]);export{qs as default};
