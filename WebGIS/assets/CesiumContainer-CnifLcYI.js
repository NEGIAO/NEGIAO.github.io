const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-Soxnylob.js","./vendor-echarts-all-p94F8Aev.js","./vendor-libs-Dy-OdQ_c.js","./vendor-vue-DrZ_GSNy.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-BSjSX4XU.js","./vendor-proj4-BXpf0XoL.js","./index-CjCGohGt.js","./vendor-ol-all-BBVsVU_e.js","./vendor-geotiff-BcuD_5kA.js","./vendor-lerc-9DOY5ikF.js","./vendor-jszip-BOwK5y_4.js","./vendor-ol-all-BtPuoxOl.css","./vendor-axios-Bdz_Fv8M.js","./index-DduL8x4O.css"])))=>i.map(i=>d[i]);
var ua=Object.defineProperty;var da=(e,t,n)=>t in e?ua(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var yn=(e,t,n)=>da(e,typeof t!="symbol"?t+"":t,n);import{w as _e,v as aa,d as ne,c as le,P as ia,r as ee,C as rn,o as Ht,f as k,t as fe,a as Se,G as Ye,X as ct,g as ge,q as xe,u as de,F as nt,e as rt,n as Pe,x as Ge,S as ut,I as It,i as gt,H as zt,z as ha,B as fa,A as ma,a5 as pa,a4 as Wt}from"./vendor-vue-DrZ_GSNy.js";import{_ as dt,h as on,R as ra,Q as oa,e as Ut,f as bn,T as ga,v as va,y as Gt,P as ya,x as ba}from"./index-CjCGohGt.js";import{_ as en}from"./vendor-runtime-Dp1pzeXC.js";import{af as xa,ag as $t,ah as qt,ai as _a,X as xn,e as jt,aj as tn,ak as Ft,ac as _n,al as Sa,am as sa,an as Sn,H as wn,T as Xt,a2 as wa,ao as Ot,ap as Ta,aq as Ma,ar as Da,q as Ca,as as La,o as Fa,at as Pt,G as Tn,au as sn,av as ln,aw as la,ax as Mn,ay as Pa,az as Ea,aA as Dn,aB as Yt,aC as Aa,aD as Ra,aE as ka,aF as Et,aG as Qe,aH as Ia,aI as Cn,aJ as xt,aK as za,aL as _t,aM as Oa,aN as Ba,aO as Na,aP as Ha,aQ as Wa,aR as Ua,aS as Ln,aT as Fn,aU as Ga,aV as $a,aW as qa,aX as ja,aY as Xa,aZ as Ya,a_ as Ka,a$ as Va,b0 as Za,b1 as Pn,b2 as Ja,b3 as Qa,b4 as ei,b5 as ti}from"./vendor-libs-Dy-OdQ_c.js";import{F as cn,G as En,v as Lt,B as ni,H as ai,I as ii,J as ri,K as oi,L as si,M as An,N as li,O as ci,P as ui}from"./HomeView-BmdjsnOn.js";import{d as di}from"./vectorUtils-Ds50OJUZ.js";import"./vendor-ol-all-BBVsVU_e.js";import"./vendor-geotiff-BcuD_5kA.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BXpf0XoL.js";import"./vendor-axios-Bdz_Fv8M.js";import"./textDecoder-CXjJWEkX.js";const Nt=new Map;function hi(e){const t=Nt.get(e);t&&t.abort();const n=new AbortController;return Nt.set(e,n),n}function fi(){Nt.forEach(e=>{e.abort()}),Nt.clear()}function mi(e){const t=e.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!t)return/\{s\}/i.test(e)?{url:e,subdomains:["a","b","c"]}:{url:e,subdomains:[]};const n=t[1].charCodeAt(0),a=t[2].charCodeAt(0),h=[];for(let f=n;f<=a;f++)h.push(String.fromCharCode(f));return{url:e.replace(t[0],"{s}"),subdomains:h}}function pi(e){return e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function gi(e,t){let n=e;return t.tiandituTk&&(n=n.replace(/\{tiandituTk\}/g,t.tiandituTk)),t.customUrl&&(n=n.replace(/\{customUrl\}/g,t.customUrl)),n}function vi(e,t,n){if(!e||!t)return null;const h=hi(t.id).signal,{serviceType:f}=t;let p=gi(t.url,n);if(f==="custom"){if(!n.customUrl)return null;p=n.customUrl}if(t.nonStandardAdapter||f==="vector-tile")return null;const{subdomains:w}=mi(p),g=pi(p),T=t.subdomains||w,R=t.maxZoom||18;try{let A=null;if(h.aborted)return null;switch(f){case"wms":{if(typeof e.WebMapServiceImageryProvider!="function")return null;const S=t.wms;if(!(S!=null&&S.layers))return null;A=new e.WebMapServiceImageryProvider({url:g||t.url,layers:S.layers,parameters:{version:S.version||"1.1.1",srs:S.srs||"EPSG:3857",format:S.format||"image/png",styles:S.styles||"",transparent:S.transparent!==!1}});break}case"wmts":{if(typeof e.WebMapTileServiceImageryProvider!="function")return null;const S=t.wmts;if(!(S!=null&&S.layer)||!S.matrixSet)return null;A=new e.WebMapTileServiceImageryProvider({url:g||t.url,layer:S.layer,style:S.style||"default",format:S.format||"image/png",tileMatrixSetID:S.matrixSet,maximumLevel:R});break}case"osm":{typeof e.OpenStreetMapImageryProvider=="function"?A=new e.OpenStreetMapImageryProvider({maximumLevel:R}):A=new e.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:R});break}default:{if(!g||!(g.includes("{z}")||g.includes("{x}")||g.includes("{y}")||g.includes("{reverseY}")))return null;A=new e.UrlTemplateImageryProvider({url:g,subdomains:T.length>0?T:void 0,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:R,enablePickFeatures:!1});break}}if(h.aborted){if(A&&typeof A.destroy=="function")try{A.destroy()}catch{}return null}return A&&(A._descriptorId=t.id),A}catch{return null}}function yi(e,t,n){if(!e||!Array.isArray(t))return[];const a=[];for(const h of t){const f=cn(h);if(!f)continue;const p=vi(e,f,n);p&&a.push(p)}return a}function bi(e){var a;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(a=t.requestRender)==null||a.call(t))}function xi(e,t){var f;const n=e==null?void 0:e.scene,a=n==null?void 0:n.globe;if(!n||!a)return;wi(n,t),Ti(n),a.enableLighting=!0,a.showGroundAtmosphere=!0,me(a,"dynamicAtmosphereLighting",!0),me(a,"dynamicAtmosphereLightingFromSun",!0),me(a,"atmosphereLightIntensity",5.5),me(a,"atmosphereHueShift",-.015),me(a,"atmosphereSaturationShift",.08),me(a,"atmosphereBrightnessShift",.02),me(a,"lightingFadeInDistance",15e6),me(a,"lightingFadeOutDistance",22e6),me(a,"nightFadeInDistance",9e6),me(a,"nightFadeOutDistance",16e6),At(t,a,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),At(t,a,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),me(a,"atmosphereRayleighScaleHeight",1e4),me(a,"atmosphereMieScaleHeight",3200),me(a,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=Di(t));const h=n.skyAtmosphere;h&&(h.show=!0,me(h,"perFragmentAtmosphere",!0),me(h,"dynamicAtmosphereLighting",!0),me(h,"dynamicAtmosphereLightingFromSun",!0),me(h,"hueShift",-.025),me(h,"saturationShift",.08),me(h,"brightnessShift",.03),me(h,"atmosphereLightIntensity",12),At(t,h,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),At(t,h,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),me(h,"atmosphereRayleighScaleHeight",1e4),me(h,"atmosphereMieScaleHeight",3200),me(h,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),Mi(n),(f=n.requestRender)==null||f.call(n)}function _i(e){var h;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const a=(h=t.postProcessStages)==null?void 0:h.bloom;return{scene:et(t,["highDynamicRange","sunBloom","light"]),fog:et(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:et(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:et(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:et(t.sun,["show"]),moon:et(t.moon,["show"]),skyBox:et(t.skyBox,["show"]),bloom:{props:et(a,["enabled"]),uniforms:et(a==null?void 0:a.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Si(e,t,n){var p,w,g,T;if(!n)return;const a=e==null?void 0:e.scene,h=a==null?void 0:a.globe;if(!a||!h)return;tt(a,n.scene,t),tt(a.fog,n.fog,t),tt(h,n.globe,t),tt(a.sun,n.sun,t),tt(a.moon,n.moon,t),tt(a.skyBox,n.skyBox,t),a.skyAtmosphere&&(tt(a.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(a.skyAtmosphere.show=!1));const f=(p=a.postProcessStages)==null?void 0:p.bloom;tt(f,(w=n.bloom)==null?void 0:w.props,t),tt(f==null?void 0:f.uniforms,(g=n.bloom)==null?void 0:g.uniforms,t),(T=a.requestRender)==null||T.call(a)}function wi(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}me(e.light,"intensity",2.35)}function Ti(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,me(t,"density",12e-5),me(t,"minimumBrightness",.035),me(t,"screenSpaceErrorFactor",2),me(t,"visualDensityScalar",.16))}function Mi(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(me(t.uniforms,"contrast",128),me(t.uniforms,"brightness",-.18),me(t.uniforms,"delta",1),me(t.uniforms,"sigma",2.5),me(t.uniforms,"stepSize",4.2)))}function Di(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function me(e,t,n){e&&t in e&&(e[t]=n)}function At(e,t,n,a,h,f){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(a,h,f))}function et(e,t){return e?t.reduce((n,a)=>(a in e&&(n[a]=Ci(e[a])),n),{}):{}}function tt(e,t={},n){!e||!t||Object.entries(t).forEach(([a,h])=>{a in e&&(e[a]=Li(h,n))})}function Ci(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Li(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Fi={__name:"LilGuiControls",props:{title:{type:String,default:"Parameters"},controls:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const n=e,a=t,h=ee(null),f={},p=new Map;let w=null,g="",T=!1;_e(()=>[n.title,n.controls],()=>{R()},{deep:!0,flush:"post",immediate:!0}),aa(()=>{d()});function R(){typeof window>"u"||T||(T=!0,ia(()=>{T=!1,A()}))}function A(){const o=h.value;if(!o)return;const m=L(n.controls);(!w||m!==g)&&(d(),S(o,m)),C()}function S(o,m){w=new xa({container:o,autoPlace:!1,title:n.title||"Parameters",width:Math.max(260,Math.floor(o.clientWidth||320))}),w.domElement.classList.add("cesium-lil-gui"),o.replaceChildren(w.domElement),g=m;for(const v of n.controls||[]){const E=F(v);E&&p.set(v.id,E)}}function F(o){f[o.id]=r(o);let m=null;return o.type==="range"?m=w.add(f,o.id,i(o.min,0),i(o.max,1),i(o.step,.01)):o.type==="color"?m=w.addColor(f,o.id):o.type==="select"?m=w.add(f,o.id,l(o)):m=w.add(f,o.id),m.name(M(o)).onChange(v=>{const E=c(o.id)||o;E.disabled||a("change",{control:E,controlId:E.id,value:v})}),_(m,o),m}function C(){if(w){w.title(n.title||"Parameters");for(const o of n.controls||[]){const m=p.get(o.id);if(!m)continue;const v=r(o);s(f[o.id],v)||(f[o.id]=v,m.updateDisplay()),m.name(M(o)),m.disable(!!o.disabled),_(m,o)}}}function _(o,m){o.domElement.title=m.tooltip||"",o.domElement.dataset.controlId=m.id||"",o.domElement.dataset.controlType=m.type||""}function L(o=[]){return JSON.stringify(o.map(m=>({id:m.id,type:m.type,min:m.min,max:m.max,step:m.step,options:(m.options||[]).map(v=>({label:v.label,value:v.value}))})))}function M(o){return o.displayValue?`${o.label||o.id} (${o.displayValue})`:o.label||o.id}function r(o){var m,v;return o.type==="range"?i(o.value,i(o.min,0)):o.type==="toggle"?!!o.value:o.type==="select"?o.value??((v=(m=o.options)==null?void 0:m[0])==null?void 0:v.value)??"":o.type==="color"?typeof o.value=="string"&&o.value?o.value:"#ffffff":o.value}function l(o){const m={};for(const v of o.options||[])m[v.label||v.value]=v.value;return m}function c(o){return n.controls.find(m=>m.id===o)||null}function s(o,m){return typeof o=="number"||typeof m=="number"?Math.abs(Number(o)-Number(m))<1e-12:o===m}function i(o,m){const v=Number(o);return Number.isFinite(v)?v:m}function d(){if(w)try{w.destroy()}catch{}w=null,g="",p.clear();for(const o of Object.keys(f))delete f[o]}return(o,m)=>(ne(),le("div",{ref_key:"containerRef",ref:h,class:"lil-gui-host"},null,512))}},un=dt(Fi,[["__scopeId","data-v-77b9becf"]]),Pi={key:0,class:"advanced-effects-root"},Ei={class:"effects-panel"},Ai={class:"panel-head"},Ri={class:"effect-switches"},ki=`
uniform sampler2D colorTexture;
uniform sampler2D depthTexture;
uniform vec3 u_cameraPositionWC;
uniform vec3 u_cameraDirectionWC;
uniform mat4 u_inverseViewProjection;
uniform vec3 u_sunDirectionWC;
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
uniform float u_qualityLevel; // 0=low, 1=medium, 2=high, 3=ultra

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

// ============================================================
// 大气散射物理常数（基于 Bruneton 预计算大气模型）
// ============================================================
// Rayleigh 散射系数 (RGB, 550nm 参考): vec3(5.5e-6, 13.0e-6, 28.4e-6)
// Mie 散射系数: 21.0e-6
// Rayleigh 标高: 10000.0m (10km)
// Mie 标高: 3200.0m (3.2km)
// 地球半径: 6378137.0m (WGS84)
// 大气层顶: 90000.0m (90km)
// ============================================================

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
    float rayleighDensity = opticalDepthHeight(radius, 10000.0);  // Rayleigh 标高 10km
    float mieDensity = opticalDepthHeight(radius, 3200.0);        // Mie 标高 3.2km
    return betaRayleigh * rayleighDensity + betaMie * mieDensity;
}

vec3 approximateSunTransmittance(vec3 position, vec3 sunDirection) {
    if (u_atmosphereParams.x < 0.5) {
        return vec3(1.0);
    }

    float radius = length(position);
    float mu = dot(normalize(position), sunDirection);
    float horizon = smoothstep(-0.08, 0.18, mu);
    float slant = 1.0 / max(mu * 0.5 + 0.5, 0.08);
    vec3 extinction = atmosphereExtinctionAtRadius(radius);
    return exp(-extinction * slant * 18000.0) * (0.22 + 0.78 * horizon);
}

vec3 approximateSkyIrradiance(vec3 position, vec3 sunDirection) {
    float radius = length(position);
    vec3 normal = normalize(position);
    float sunUp = saturate(dot(normal, sunDirection) * 0.5 + 0.5);
    vec3 betaRayleigh = vec3(5.5e-6, 13.0e-6, 28.4e-6) * max(u_atmosphereParams.y, 0.0);
    vec3 blueScatter = normalize(betaRayleigh + vec3(0.000001));
    vec3 skyTint = mix(vec3(0.75, 0.56, 0.42), blueScatter * 1.85, smoothstep(0.08, 0.75, sunUp));
    float density = opticalDepthHeight(radius, 10000.0);
    float ambient = 0.18 + 0.55 * sunUp;
    return skyTint * ambient * (0.35 + 0.65 * density);
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
    vec3 phaseColor =
        vec3(0.42, 0.58, 0.86) * rayleighPhase(cosTheta) * 18.0 +
        vec3(1.0, 0.78, 0.48) * hgPhase(cosTheta, 0.76) * 6.0;
    inScattering = phaseColor * sunTransmittance * (1.0 - transmittance);
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
    // 性能优化：减少步数从 6 到 3
    float stepSize = min(maxDistance / 3.0, 5000.0);
    float distanceAlongRay = stepSize * 0.5;
    float opticalDepth = 0.0;

    for (int i = 0; i < 3; i++) {
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

    // 性能优化：减少步数从 10 到 4
    float stepSize = min(maxDistance / 4.0, 12000.0);
    float jitter = structuredShadowJitter(startPosition, sunDirection);
    float distanceAlongRay = stepSize * (0.35 + jitter * 0.55);
    float opticalDepth = 0.0;
    float lastDensity = 0.0;

    for (int i = 0; i < 4; i++) {
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

    // LOD 优化：根据距离和质量等级动态调整步数
    // 质量等级：0=low, 1=medium, 2=high, 3=ultra
    float distanceFactor = 1.0;
    float lodDistanceScale = 1.0 + (3.0 - u_qualityLevel) * 0.5; // 低质量时更早触发 LOD

    if (nearDistance > 150000.0 * lodDistanceScale) {
        distanceFactor = 0.4;
    } else if (nearDistance > 80000.0 * lodDistanceScale) {
        distanceFactor = 0.6;
    } else if (nearDistance > 40000.0 * lodDistanceScale) {
        distanceFactor = 0.8;
    }

    int stepCount = int(clamp(floor(u_stepCount * distanceFactor + 0.5), 16.0, 128.0));
    float baseStepSize = span / float(stepCount);
    // 自适应步长：最小 500m，最大 5000m，避免过密采样
    float stepSize = clamp(baseStepSize, 500.0, 5000.0);
    float jitter = hash31(vec3(gl_FragCoord.xy, fract(u_timeSeconds))) * stepSize;
    float distanceAlongRay = nearDistance + jitter;
    vec3 cloudLight = vec3(0.0);
    float transmittance = 1.0;
    float alpha = 0.0;
    float weightedDepth = 0.0;
    float depthWeight = 0.0;
    vec3 sunDirection = normalize(u_sunDirectionWC);
    // 性能优化：空白区域跳过计数器
    int emptySteps = 0;
    int maxEmptySteps = 8; // 连续空白 8 次后跳大步
    for (int i = 0; i < 128; i++) {
        // 更激进的早期终止：
        // 1. 超过步数限制
        // 2. 超过最大距离
        // 3. 透射率过低（几乎不透明）
        // 4. 已经走了 80% 的步数且 alpha 很高（云已经很厚）
        if (i >= stepCount || distanceAlongRay > farDistance || transmittance < 0.03) {
            break;
        }
        if (i > 64 && alpha > 0.95) {
            break; // 已经足够厚，提前终止
        }

        vec3 position = u_cameraPositionWC + rayDirection * distanceAlongRay;
        float radius = length(position);
        float heightFraction = saturate((radius - u_cloudBottomRadius) / (u_cloudTopRadius - u_cloudBottomRadius));
        float density = sampleCloudDensity(position, heightFraction);

        if (density > 0.001) {
            // 有云：重置空白计数器，恢复正常步长
            emptySteps = 0;
            float extinction = density * u_density * stepSize;
            float opticalDepthToSun = marchSunOpticalDepth(position + sunDirection * stepSize * 0.35, sunDirection);
            float localShadow = exp(-opticalDepthToSun * u_density * 1.35);

            float beerOpticalDepth = marchBeerShadowOpticalDepth(position + sunDirection * stepSize * 0.75, sunDirection);
            float beerShadow = exp(-beerOpticalDepth * u_density * 0.72);

            float sunTransmittance = mix(1.0, localShadow * mix(1.0, beerShadow, u_beerShadowStrength), u_shadowStrength);
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
        } else {
            // 空白区域：累加计数器
            emptySteps++;
        }

        // 自适应步长：空白区域跳大步，有云区域保持精细
        if (emptySteps >= maxEmptySteps) {
            // 连续空白，跳大步（3 倍步长）
            stepSize = clamp(stepSize * 3.0, 500.0, 8000.0);
            emptySteps = 0; // 重置避免无限放大
        } else {
            stepSize *= 1.018;
        }
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
`,Ii={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=on(),a=ee(null),h=ee(!1),f=ee(!1),p=ee(!1),w=ee(!1),g=ee(!1),T=ee(!1),R=ee({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,maxDistance:36e4,stepCount:32}),A=xe(()=>[{id:"fog",label:"Height Fog",type:"toggle",value:h.value},{id:"volumetricClouds",label:"Clouds",type:"toggle",value:f.value},{id:"hbao",label:"HBAO",type:"toggle",value:p.value},{id:"tiltShift",label:"Tilt Shift",type:"toggle",value:w.value},{id:"atmosphere",label:"Atmosphere + Bloom",type:"toggle",value:g.value}]);let S=null,F=null,C=null,_=null,L=!1,M=null,r=null,l=null,c=null,s=null,i=null,d=null,o=null,m=!1,v=null,E=null,z=!1,W=0,Z=0,H=typeof performance<"u"?performance.now():Date.now();const J={};function se(){return l||(l=en(()=>import("./cesiumFxRuntime-Soxnylob.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(x=>{var N;const b=(N=x==null?void 0:x.getCesiumFxEchartsRuntime)==null?void 0:N.call(x);if(!b)throw new Error("Cinematic FX 图表运行时加载失败");return r=b,b}).catch(x=>{throw l=null,x}),l)}async function ie(){return r||se()}const re={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},te={hdr:null,bloom:null,sky:null};rn(()=>{Ee()}),Ht(()=>{He()}),_e(()=>t.controls,x=>{pe(x||{})},{deep:!0,immediate:!0});function pe(x){Object.prototype.hasOwnProperty.call(x,"fog")&&(h.value=!!x.fog),Object.prototype.hasOwnProperty.call(x,"volumetricClouds")&&(f.value=!!x.volumetricClouds),x.clouds&&typeof x.clouds=="object"&&(R.value=ke(x.clouds)),Object.prototype.hasOwnProperty.call(x,"hbao")&&(p.value=!!x.hbao),Object.prototype.hasOwnProperty.call(x,"tiltShift")&&(w.value=!!x.tiltShift),Object.prototype.hasOwnProperty.call(x,"atmosphere")&&(g.value=!!x.atmosphere)}function Te({controlId:x,value:b}){const N=!!b,V={fog:h,volumetricClouds:f,hbao:p,tiltShift:w,atmosphere:g}[x];V&&(V.value=N)}function ke(x={}){return{quality:["low","medium","high","ultra"].includes(x.quality)?x.quality:"medium",coverage:I(x.coverage,.52,.18,.82),density:I(x.density,9e-5,25e-6,18e-5),shadowStrength:I(x.shadowStrength,.82,0,1),beerShadowStrength:I(x.beerShadowStrength,.64,0,1),multiScattering:I(x.multiScattering,.58,0,1),powderStrength:I(x.powderStrength,.72,0,1.4),hazeStrength:I(x.hazeStrength,.38,0,1),groundBounceStrength:I(x.groundBounceStrength,.26,0,1),maxDistance:I(x.maxDistance,36e4,12e4,9e5),stepCount:Math.round(I(x.stepCount,48,16,128))}}function Ee(){let x=0;c=window.setInterval(async()=>{var U,V;x+=1;const b=(U=t.getViewer)==null?void 0:U.call(t),N=((V=t.getCesium)==null?void 0:V.call(t))||window.Cesium;if(b&&N){clearInterval(c),c=null;try{j(b),O(b),X(b,N),Ze(b,N),n.success("高级视觉效果已启用。")}catch(oe){n.error("高级视觉效果初始化失败",oe),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}x>=150&&(clearInterval(c),c=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function j(x){var U,V,oe,ae,q,B,u,P,Y;const b=x==null?void 0:x.scene;if(!b)return;typeof b.highDynamicRange=="boolean"&&(te.hdr=b.highDynamicRange),"sunBloom"in b&&(te.sunBloom=b.sunBloom);const N=b.globe;if(N&&(te.globe={enableLighting:N.enableLighting,showGroundAtmosphere:N.showGroundAtmosphere,dynamicAtmosphereLighting:N.dynamicAtmosphereLighting,dynamicAtmosphereLightingFromSun:N.dynamicAtmosphereLightingFromSun,atmosphereLightIntensity:N.atmosphereLightIntensity,atmosphereHueShift:N.atmosphereHueShift,atmosphereSaturationShift:N.atmosphereSaturationShift,atmosphereBrightnessShift:N.atmosphereBrightnessShift,lightingFadeInDistance:N.lightingFadeInDistance,lightingFadeOutDistance:N.lightingFadeOutDistance,nightFadeInDistance:N.nightFadeInDistance,nightFadeOutDistance:N.nightFadeOutDistance}),b.light&&(te.light={intensity:b.light.intensity}),(U=b.postProcessStages)!=null&&U.bloom){const G=b.postProcessStages.bloom;te.bloom={enabled:!!G.enabled,contrast:(V=G.uniforms)==null?void 0:V.contrast,brightness:(oe=G.uniforms)==null?void 0:oe.brightness,delta:(ae=G.uniforms)==null?void 0:ae.delta,sigma:(q=G.uniforms)==null?void 0:q.sigma,stepSize:(B=G.uniforms)==null?void 0:B.stepSize}}b.skyAtmosphere&&(te.sky={show:b.skyAtmosphere.show,hueShift:b.skyAtmosphere.hueShift,saturationShift:b.skyAtmosphere.saturationShift,brightnessShift:b.skyAtmosphere.brightnessShift}),te.celestial={sunShow:(u=b.sun)==null?void 0:u.show,moonShow:(P=b.moon)==null?void 0:P.show,skyBoxShow:(Y=b.skyBox)==null?void 0:Y.show}}function X(x,b){var U;!((U=x==null?void 0:x.scene)!=null&&U.postProcessStages)||!(b!=null&&b.PostProcessStage)||(we(x,b),ye(x,b),Ce(x,b),$e(x,b),g.value?Oe(x,b,1200):Le(x))}function O(x){var N;const b=x==null?void 0:x.scene;(N=b==null?void 0:b.renderError)!=null&&N.addEventListener&&(b.rethrowRenderErrors=!1,o=b.renderError.addEventListener((U,V)=>{n.error("Cesium 渲染异常，已触发降级保护",V),ve(),m||(m=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function ve(){h.value=!1,f.value=!1,w.value=!1,p.value=!1,g.value=!1,S&&(S.enabled=!1),F&&(F.enabled=!1),C&&(C.enabled=!1),_&&(_.enabled=!1)}function we(x,b){S||(S=new b.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new b.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),x.scene.postProcessStages.add(S),S.enabled=h.value)}function ye(x,b){var B,u;if(F||!(b!=null&&b.PostProcessStage))return;const N=Number((u=(B=b==null?void 0:b.Ellipsoid)==null?void 0:B.WGS84)==null?void 0:u.maximumRadius)||6378137,U=new b.Cartesian3,V=new b.Cartesian3,oe=new b.Cartesian3(.35,-.25,.9),ae=new b.Matrix4,q=new b.Cartesian4(1,1,1,.85);b.Cartesian3.normalize(oe,oe),F=new b.PostProcessStage({name:"cesium_ecef_volumetric_clouds_stage",fragmentShader:ki,uniforms:{u_cameraPositionWC:U,u_cameraDirectionWC:V,u_inverseViewProjection:ae,u_sunDirectionWC:oe,u_cloudBottomRadius:N+1500,u_cloudTopRadius:N+8500,u_maxDistance:42e4,u_coverage:.52,u_density:85e-6,u_shadowStrength:.82,u_beerShadowStrength:.64,u_multiScattering:.58,u_powderStrength:.72,u_hazeStrength:.38,u_groundBounceStrength:.26,u_stepCount:48,u_timeSeconds:0,u_atmosphereParams:q,u_qualityLevel:1}}),x.scene.postProcessStages.add(F),F.enabled=f.value}function Ce(x,b){var U,V;const N=(U=x==null?void 0:x.scene)==null?void 0:U.postProcessStages;N&&(N.ambientOcclusion?(_=N.ambientOcclusion,L=!1):(V=b==null?void 0:b.PostProcessStageLibrary)!=null&&V.createAmbientOcclusionStage&&(_=b.PostProcessStageLibrary.createAmbientOcclusionStage(),N.add(_),L=!0),_&&(_.enabled=p.value,_.uniforms&&("intensity"in _.uniforms&&(_.uniforms.intensity=4.2),"bias"in _.uniforms&&(_.uniforms.bias=.08),"lengthCap"in _.uniforms&&(_.uniforms.lengthCap=.35),"stepSize"in _.uniforms&&(_.uniforms.stepSize=1.8),"frustumLength"in _.uniforms&&(_.uniforms.frustumLength=1200))))}function $e(x,b){C||(C=new b.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),x.scene.postProcessStages.add(C),C.enabled=!1)}function Ze(x,b){const N=x==null?void 0:x.scene;N&&(d=N.preRender.addEventListener(()=>{var ae;const U=K(x),V=Number(((ae=x==null?void 0:x.camera)==null?void 0:ae.pitch)??-1.2);W+=1;const oe=typeof performance<"u"?performance.now():Date.now();if(oe-H>=1e3&&(Z=Math.round(W*1e3/(oe-H)),W=0,H=oe),S&&(S.enabled=h.value,S.uniforms.cameraHeightFactor=y(U,150,12e3),S.uniforms.fogDensity=55e-5+(1-S.uniforms.cameraHeightFactor)*.00125),F&&(F.enabled=f.value,F.enabled&&Ie(x,b,U)),_&&(_.enabled=p.value),C){const q=V>-.62,B=q?D((V+.62)/.5):0;C.enabled=w.value&&q,C.uniforms.blurStrength=B}g.value&&U>=8e4?(Oe(x,b,U),z=!1):z||(Le(x),z=!0)}))}function Ie(x,b,N){var Me;const U=F,V=x==null?void 0:x.scene,oe=x==null?void 0:x.camera;if(!U||!V||!oe||!b)return;const ae=U.uniforms;b.Cartesian3.clone(oe.positionWC,ae.u_cameraPositionWC),b.Cartesian3.clone(oe.directionWC,ae.u_cameraDirectionWC);const q=(Me=V.context)==null?void 0:Me.uniformState;q!=null&&q.inverseViewProjection?b.Matrix4.clone(q.inverseViewProjection,ae.u_inverseViewProjection):oe.inverseViewProjectionMatrix&&b.Matrix4.clone(oe.inverseViewProjectionMatrix,ae.u_inverseViewProjection);const B=Ae(x,b);b.Cartesian3.clone(B,ae.u_sunDirectionWC);const u=y(N,1e4,18e4),P=b.Cartesian3.normalize(oe.positionWC,J),Y=b.Cartesian3.dot(P,B),G=1-D((Y+.08)/.55),ce=g.value?1:.62,ue=R.value;ae.u_coverage=ue.coverage,ae.u_density=ue.density*(1-u*.22),ae.u_maxDistance=ue.maxDistance,ae.u_shadowStrength=ue.shadowStrength*(1-u*.12),ae.u_beerShadowStrength=ue.beerShadowStrength*(1-u*.18),ae.u_multiScattering=ue.multiScattering,ae.u_powderStrength=ue.powderStrength,ae.u_hazeStrength=ue.hazeStrength*(1-u*.35),ae.u_groundBounceStrength=ue.groundBounceStrength,ae.u_stepCount=ue.stepCount,ae.u_timeSeconds=Re(x,b),ae.u_atmosphereParams&&(ae.u_atmosphereParams.x=ce,ae.u_atmosphereParams.y=.92+G*.28,ae.u_atmosphereParams.z=.82+G*.42,ae.u_atmosphereParams.w=(.58+ce*.42)*(1-u*.28));const be=ue.quality==="ultra"?3:ue.quality==="high"?2:ue.quality==="medium"?1:0;ae.u_qualityLevel=be}function Ae(x,b){var V,oe,ae;const N=(ae=(oe=(V=x==null?void 0:x.scene)==null?void 0:V.context)==null?void 0:oe.uniformState)==null?void 0:ae.sunDirectionWC;if(N)return N;const U=new b.Cartesian3(.35,-.25,.9);return b.Cartesian3.normalize(U,U),U}function Re(x,b){var N,U,V;try{const oe=(N=x==null?void 0:x.clock)==null?void 0:N.currentTime;if(oe&&((U=b==null?void 0:b.JulianDate)!=null&&U.secondsDifference)&&((V=b==null?void 0:b.JulianDate)!=null&&V.fromIso8601))return E||(E=b.JulianDate.fromIso8601("2026-01-01T00:00:00Z")),b.JulianDate.secondsDifference(oe,E)}catch{}return(typeof performance<"u"?performance.now():Date.now())*.001}function Oe(x,b,N){var q;const U=x==null?void 0:x.scene;if(!U)return;v||(v=_i(x)),xi(x,b),typeof U.highDynamicRange=="boolean"&&(U.highDynamicRange=!0);const V=(q=U.postProcessStages)==null?void 0:q.bloom;V&&(V.enabled=!0,V.uniforms&&("contrast"in V.uniforms&&(V.uniforms.contrast=149),"brightness"in V.uniforms&&(V.uniforms.brightness=-.12),"delta"in V.uniforms&&(V.uniforms.delta=1),"sigma"in V.uniforms&&(V.uniforms.sigma=3.25),"stepSize"in V.uniforms&&(V.uniforms.stepSize=5)));const oe=U.skyAtmosphere;if(!oe)return;const ae=y(N,500,12e4);oe.hueShift=-.035+ae*.035,oe.saturationShift=-.14+ae*.09,oe.brightnessShift=.03+(1-ae)*.08}function Le(x){var oe,ae,q;const b=x==null?void 0:x.scene;if(!b)return;const N=((oe=t.getCesium)==null?void 0:oe.call(t))||window.Cesium;if(v){Si(x,N,v),v=null;return}typeof b.highDynamicRange=="boolean"&&te.hdr!==null&&(b.highDynamicRange=te.hdr),"sunBloom"in b&&te.sunBloom!==void 0&&(b.sunBloom=te.sunBloom);const U=b.globe;if(U&&te.globe){const B=te.globe;B.enableLighting!==void 0&&(U.enableLighting=B.enableLighting),B.showGroundAtmosphere!==void 0&&(U.showGroundAtmosphere=B.showGroundAtmosphere),B.dynamicAtmosphereLighting!==void 0&&"dynamicAtmosphereLighting"in U&&(U.dynamicAtmosphereLighting=B.dynamicAtmosphereLighting),B.dynamicAtmosphereLightingFromSun!==void 0&&"dynamicAtmosphereLightingFromSun"in U&&(U.dynamicAtmosphereLightingFromSun=B.dynamicAtmosphereLightingFromSun),B.atmosphereLightIntensity!==void 0&&"atmosphereLightIntensity"in U&&(U.atmosphereLightIntensity=B.atmosphereLightIntensity),B.atmosphereHueShift!==void 0&&"atmosphereHueShift"in U&&(U.atmosphereHueShift=B.atmosphereHueShift),B.atmosphereSaturationShift!==void 0&&"atmosphereSaturationShift"in U&&(U.atmosphereSaturationShift=B.atmosphereSaturationShift),B.atmosphereBrightnessShift!==void 0&&"atmosphereBrightnessShift"in U&&(U.atmosphereBrightnessShift=B.atmosphereBrightnessShift),B.lightingFadeInDistance!==void 0&&"lightingFadeInDistance"in U&&(U.lightingFadeInDistance=B.lightingFadeInDistance),B.lightingFadeOutDistance!==void 0&&"lightingFadeOutDistance"in U&&(U.lightingFadeOutDistance=B.lightingFadeOutDistance),B.nightFadeInDistance!==void 0&&"nightFadeInDistance"in U&&(U.nightFadeInDistance=B.nightFadeInDistance),B.nightFadeOutDistance!==void 0&&"nightFadeOutDistance"in U&&(U.nightFadeOutDistance=B.nightFadeOutDistance)}b.light&&te.light&&te.light.intensity!==void 0&&(b.light.intensity=te.light.intensity);const V=(ae=b.postProcessStages)==null?void 0:ae.bloom;if(V&&te.bloom&&(V.enabled=te.bloom.enabled,V.uniforms&&("contrast"in V.uniforms&&te.bloom.contrast!==void 0&&(V.uniforms.contrast=te.bloom.contrast),"brightness"in V.uniforms&&te.bloom.brightness!==void 0&&(V.uniforms.brightness=te.bloom.brightness),"delta"in V.uniforms&&te.bloom.delta!==void 0&&(V.uniforms.delta=te.bloom.delta),"sigma"in V.uniforms&&te.bloom.sigma!==void 0&&(V.uniforms.sigma=te.bloom.sigma),"stepSize"in V.uniforms&&te.bloom.stepSize!==void 0&&(V.uniforms.stepSize=te.bloom.stepSize))),b.skyAtmosphere&&te.sky&&(te.sky.show!==void 0&&(b.skyAtmosphere.show=te.sky.show),b.skyAtmosphere.hueShift=te.sky.hueShift,b.skyAtmosphere.saturationShift=te.sky.saturationShift,b.skyAtmosphere.brightnessShift=te.sky.brightnessShift),te.celestial){const B=te.celestial;b.sun&&B.sunShow!==void 0&&(b.sun.show=B.sunShow),b.moon&&B.moonShow!==void 0&&(b.moon.show=B.moonShow),b.skyBox&&B.skyBoxShow!==void 0&&(b.skyBox.show=B.skyBoxShow)}(q=b.requestRender)==null||q.call(b)}function ze(){s&&(clearInterval(s),s=null)}async function Ke(){var U,V;const x=!T.value;if(T.value=x,!x){ze();return}const b=(U=t.getViewer)==null?void 0:U.call(t),N=((V=t.getCesium)==null?void 0:V.call(t))||window.Cesium;if(!b||!N){T.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ve(b,N),Be(b,N),Fe(b,N)}catch(oe){T.value=!1,n.error("图表模块加载失败",oe)}}async function Ve(x,b){await ie(),await ia(),a.value&&(M||(M=r.init(a.value),Ne()),i||(i=()=>{M==null||M.resize()},window.addEventListener("resize",i)),M.resize(),Fe(x,b))}function Be(x,b){s||(s=window.setInterval(()=>{!M||!T.value||Fe(x,b)},1200))}function Fe(x,b){var ae;const N=new Date,U=`${Q(N.getHours())}:${Q(N.getMinutes())}:${Q(N.getSeconds())}`,V=Number((K(x)/1e3).toFixed(2)),oe=Number(b.Math.toDegrees(((ae=x==null?void 0:x.camera)==null?void 0:ae.pitch)??0).toFixed(1));$(re.labels,U,20),$(re.cameraHeightKm,V,20),$(re.pitchDeg,oe,20),$(re.fps,Z,20),M.setOption({xAxis:{data:re.labels},series:[{data:re.cameraHeightKm},{data:re.pitchDeg},{data:re.fps}]})}function Ne(){M&&M.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function He(){var N,U;c&&(clearInterval(c),c=null),ze();const x=(N=t.getViewer)==null?void 0:N.call(t),b=(U=x==null?void 0:x.scene)==null?void 0:U.postProcessStages;d&&(d(),d=null),o&&(o(),o=null),S&&b&&b.remove(S),S=null,F&&b&&b.remove(F),F=null,C&&b&&b.remove(C),C=null,_&&(L&&b&&b.remove(_),_=null),L=!1,z=!1,x&&Le(x),i&&(window.removeEventListener("resize",i),i=null),M&&(M.dispose(),M=null),r=null,m=!1}function K(x){var V,oe,ae;const b=(oe=(V=x==null?void 0:x.scene)==null?void 0:V.globe)==null?void 0:oe.ellipsoid,N=(ae=x==null?void 0:x.camera)==null?void 0:ae.positionWC;if(!b||!N)return 0;const U=b.cartesianToCartographic(N);return Math.max(0,Number((U==null?void 0:U.height)??0))}function y(x,b,N){return!Number.isFinite(x)||N<=b?0:D((x-b)/(N-b))}function D(x){return Math.min(1,Math.max(0,Number(x)||0))}function I(x,b,N,U){const V=Number(x);return Number.isFinite(V)?Math.min(U,Math.max(N,V)):b}function $(x,b,N){x.push(b),x.length>N&&x.shift()}function Q(x){return String(x).padStart(2,"0")}return(x,b)=>e.headless?ge("",!0):(ne(),le("div",Pi,[k("div",Ei,[k("div",Ai,[b[0]||(b[0]=k("span",{class:"panel-title"},"Cinematic FX",-1)),k("button",{class:"panel-btn",onClick:Ke},fe(T.value?"隐藏图表":"显示图表"),1)]),k("div",Ri,[Se(un,{title:"Effect Parameters",controls:A.value,onChange:Te},null,8,["controls"])]),Ye(k("div",{ref_key:"chartRef",ref:a,class:"fx-chart"},null,512),[[ct,T.value]])])]))}},zi=dt(Ii,[["__scopeId","data-v-9f955e42"]]),Oi={key:0,class:"launcher-count"},Bi={class:"panel-header"},Ni={class:"panel-title-block"},Hi={class:"panel-mark"},Wi={class:"panel-copy"},Ui={class:"panel-subtitle"},Gi={class:"panel-actions"},$i=["title"],qi={class:"panel-tabs","aria-label":"3D 工具分类"},ji=["aria-pressed","onClick"],Xi={class:"panel-scroll"},Yi={class:"panel-page"},Ki={class:"overview-grid"},Vi={class:"overview-tile"},Zi={class:"overview-tile"},Ji={class:"overview-tile"},Qi={key:0,class:"quick-actions"},er=["disabled","onClick"],tr={key:1,class:"empty-state"},nr={class:"panel-page"},ar=["aria-expanded"],ir={class:"section-main"},rr={class:"section-meta"},or={key:0,class:"section-body"},sr={class:"option-grid"},lr=["disabled","aria-pressed","title","onClick"],cr={class:"custom-basemap-input-row"},ur=["disabled"],dr={key:0,class:"custom-basemap-current"},hr=["aria-expanded"],fr={class:"section-main"},mr={class:"section-meta"},pr={key:0,class:"section-body"},gr={class:"option-grid"},vr=["aria-pressed","title","onClick"],yr=["aria-expanded"],br={class:"section-main"},xr={class:"section-meta"},_r={key:0,class:"section-body"},Sr={class:"overlay-list"},wr=["disabled","aria-pressed","title","onClick"],Tr={class:"overlay-copy"},Mr={class:"overlay-title"},Dr={key:0,class:"overlay-desc"},Cr={key:3,class:"empty-state"},Lr={class:"panel-page"},Fr={class:"module-list"},Pr=["aria-expanded","onClick"],Er={class:"module-icon"},Ar={class:"module-copy"},Rr={class:"module-title"},kr={key:0,class:"module-desc"},Ir={class:"module-head-side"},zr={key:0,class:"module-body"},Or={key:0,class:"module-actions"},Br=["disabled","onClick"],Nr={key:0,class:"empty-state"},Hr={class:"panel-page"},Wr={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},Ur={class:"data-upload-hint"},Gr={key:0,class:"data-source-list"},$r={class:"data-source-head"},qr={class:"data-source-count"},jr=["title","aria-label","onClick"],Xr={class:"data-source-icon"},Yr={class:"data-source-copy"},Kr={class:"data-source-name"},Vr={class:"data-source-type"},Zr={key:1,class:"empty-state"},Rn=3,Jr=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",Qr={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(e,{emit:t}){const n=e,a=ee(Array.isArray(n.loadedDataSources)?n.loadedDataSources:[]);_e(()=>n.loadedDataSources,j=>{const X=Array.isArray(j)?j:[];X!==a.value&&(a.value=X)},{immediate:!0});const h=t,f=W(),p=f.uiStateVersion===Rn,w=ee(f.activeTab||"scene"),g=ee(!!f.compactMode),T=ee(new Set(p?f.expandedLayerSectionIds||[]:[])),R=ee(new Set(p?f.expandedModuleIds||[]:[])),A=ee(n.customBasemapUrl||""),S=ee(null),F=xe(()=>n.embedded||n.open),C=xe(()=>n.modules.find(j=>j.id==="scene")||null),_=xe(()=>{var j;return((j=C.value)==null?void 0:j.actions)||[]}),L=xe(()=>n.modules.filter(j=>j.id!=="scene")),M=xe(()=>L.value.filter(j=>j.statusTone==="success"||j.statusTone==="warning").length),r=xe(()=>n.overlayOptions.filter(j=>!!j.active).length),l=[{id:"scene",label:"场景",icon:qt},{id:"layers",label:"图层",icon:jt},{id:"data",label:"数据",icon:tn},{id:"modules",label:"模块",icon:$t}],c=xe(()=>{var j;return((j=n.basemapOptions.find(X=>X.value===n.activeBasemap))==null?void 0:j.label)||"未选择"}),s=xe(()=>{var j;return((j=n.terrainOptions.find(X=>X.value===n.activeTerrain))==null?void 0:j.label)||"未选择"});_e(()=>n.modules.map(j=>j.id),j=>{j.includes(w.value)||w.value==="scene"||w.value==="layers"||w.value==="modules"||(w.value="scene")},{immediate:!0}),_e([w,g,T,R],Z,{deep:!0}),_e(()=>n.customBasemapUrl,j=>{j!==A.value&&(A.value=j||"")});function i(j){h("update:open",j)}function d(j){return T.value.has(j)}function o(j){const X=new Set(T.value);X.has(j)?X.delete(j):X.add(j),T.value=X}function m(j){return R.value.has(j)}function v(j){const X=new Set(R.value);X.has(j)?X.delete(j):X.add(j),R.value=X}function E(j){j!=null&&j.disabled||h("update:activeBasemap",j.value)}function z(){h("custom-basemap-submit",{url:A.value})}function W(){if(typeof window>"u")return{};try{const j=window.localStorage.getItem(n.storageKey);return j?JSON.parse(j):{}}catch{return{}}}function Z(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:Rn,activeTab:w.value,compactMode:g.value,expandedLayerSectionIds:[...T.value],expandedModuleIds:[...R.value]}))}catch{}}function H(j){return{scene:qt,effects:Fa,clouds:La,wind:Ca,fluid:Da}[j]||$t}function J(j,X){var ve;return((ve={scene:{home:Ta,everest:Sn,tileset:Ot},wind:{load:wa,clear:Xt},fluid:{pick:wn,clear:Xt}}[j])==null?void 0:ve[X])||Ma}function se(j,X){h("module-action",{moduleId:j,actionId:X})}function ie(j,X,O){const ve=X.type==="range"?Number(O):O;h("control-change",{moduleId:j,controlId:X.id,value:ve})}function re(j){j.disabled||h("overlay-toggle",{overlayId:j.value,value:!j.active})}function te(j){return{geojson:Pt,json:Pt,kml:Tn,kmz:Tn,shp:jt,gltf:Ot,czml:Pt,"3dtiles":Ot}[j]||Pt}function pe(j){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[j]||j.toUpperCase()}function Te(j){var O;const X=(O=j.target)==null?void 0:O.files;!X||X.length===0||(h("data-import",{files:Array.from(X)}),S.value&&(S.value.value=""))}function ke(j){h("data-remove",{id:j})}function Ee(){h("data-clear-all")}return(j,X)=>(ne(),le("aside",{class:Pe(["cesium-tool-shell",{"is-open":F.value,"is-embedded":e.embedded}])},[!e.embedded&&!F.value?(ne(),le("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:X[0]||(X[0]=O=>i(!0))},[Se(de($t),{size:18,"stroke-width":"2"}),X[7]||(X[7]=k("span",null,"高级控制台",-1)),M.value?(ne(),le("span",Oi,fe(M.value),1)):ge("",!0)])):ge("",!0),Ye(k("section",{class:Pe(["cesium-tool-panel",{compact:g.value}]),"aria-label":"Cesium 高级控制台"},[k("header",Bi,[k("div",Ni,[k("span",Hi,[Se(de(qt),{size:18,"stroke-width":"2"})]),k("span",Wi,[X[8]||(X[8]=k("span",{class:"panel-title"},"3D 高级控制台",-1)),k("span",Ui,fe(c.value)+" / "+fe(s.value),1)])]),k("div",Gi,[k("button",{class:"icon-btn",type:"button",title:g.value?"切换为舒展布局":"切换为紧凑布局",onClick:X[1]||(X[1]=O=>g.value=!g.value)},[Se(de(_a),{size:16,"stroke-width":"2"})],8,$i),e.embedded?ge("",!0):(ne(),le("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:X[2]||(X[2]=O=>i(!1))},[Se(de(xn),{size:17,"stroke-width":"2"})]))])]),k("nav",qi,[(ne(),le(nt,null,rt(l,O=>k("button",{key:O.id,class:Pe(["tab-btn",{active:w.value===O.id}]),type:"button","aria-pressed":w.value===O.id,onClick:ve=>w.value=O.id},[(ne(),Ge(ut(O.icon),{size:15,"stroke-width":"2"})),k("span",null,fe(O.label),1)],10,ji)),64))]),k("div",Xi,[Ye(k("section",Yi,[k("div",Ki,[k("div",Vi,[X[9]||(X[9]=k("span",{class:"overview-label"},"地图源",-1)),k("strong",null,fe(c.value),1)]),k("div",Zi,[X[10]||(X[10]=k("span",{class:"overview-label"},"地形",-1)),k("strong",null,fe(s.value),1)]),k("div",Ji,[X[11]||(X[11]=k("span",{class:"overview-label"},"模块",-1)),k("strong",null,fe(M.value)+"/"+fe(L.value.length),1)])]),_.value.length?(ne(),le("div",Qi,[(ne(!0),le(nt,null,rt(_.value,O=>(ne(),le("button",{key:O.id,class:Pe(["tool-action",[O.variant||"default",{active:O.active}]]),disabled:O.disabled,type:"button",onClick:ve=>se(C.value.id,O.id)},[(ne(),Ge(ut(J(C.value.id,O.id)),{size:15,"stroke-width":"2"})),It(" "+fe(O.label),1)],10,er))),128))])):(ne(),le("div",tr," 暂无场景快捷操作 "))],512),[[ct,w.value==="scene"]]),Ye(k("section",nr,[e.basemapOptions.length?(ne(),le("div",{key:0,class:Pe(["option-group",{expanded:d("basemap")}])},[k("button",{class:"section-head section-toggle",type:"button","aria-expanded":d("basemap"),onClick:X[3]||(X[3]=O=>o("basemap"))},[k("span",ir,[Se(de(jt),{size:16,"stroke-width":"2"}),X[12]||(X[12]=k("span",null,"底图源",-1))]),k("span",rr,[k("span",null,fe(c.value),1),Se(de(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,ar),d("basemap")?(ne(),le("div",or,[k("div",sr,[(ne(!0),le(nt,null,rt(e.basemapOptions,O=>(ne(),le("button",{key:O.value,class:Pe(["option-card",{active:O.value===e.activeBasemap}]),type:"button",disabled:O.disabled,"aria-pressed":O.value===e.activeBasemap,title:O.description||O.label,onClick:ve=>E(O)},[k("span",null,fe(O.label),1),O.value===e.activeBasemap?(ne(),Ge(de(_n),{key:0,size:15,"stroke-width":"2.4"})):ge("",!0)],10,lr))),128))]),k("form",{class:"custom-basemap-editor",onSubmit:gt(z,["prevent"])},[k("div",cr,[Se(de(Sa),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),Ye(k("input",{"onUpdate:modelValue":X[4]||(X[4]=O=>A.value=O),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[zt,A.value]]),k("button",{class:"custom-basemap-submit",type:"submit",disabled:!A.value.trim(),title:"加载自定义 XYZ"},[Se(de(sa),{size:14,"stroke-width":"2"}),X[13]||(X[13]=k("span",null,"加载",-1))],8,ur)]),e.customBasemapUrl?(ne(),le("div",dr,fe(e.customBasemapUrl),1)):ge("",!0)],32)])):ge("",!0)],2)):ge("",!0),e.terrainOptions.length?(ne(),le("div",{key:1,class:Pe(["option-group",{expanded:d("terrain")}])},[k("button",{class:"section-head section-toggle",type:"button","aria-expanded":d("terrain"),onClick:X[5]||(X[5]=O=>o("terrain"))},[k("span",fr,[Se(de(Sn),{size:16,"stroke-width":"2"}),X[14]||(X[14]=k("span",null,"地形",-1))]),k("span",mr,[k("span",null,fe(s.value),1),Se(de(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,hr),d("terrain")?(ne(),le("div",pr,[k("div",gr,[(ne(!0),le(nt,null,rt(e.terrainOptions,O=>(ne(),le("button",{key:O.value,class:Pe(["option-card",{active:O.value===e.activeTerrain}]),type:"button","aria-pressed":O.value===e.activeTerrain,title:O.description||O.label,onClick:ve=>j.$emit("update:activeTerrain",O.value)},[k("span",null,fe(O.label),1),O.value===e.activeTerrain?(ne(),Ge(de(_n),{key:0,size:15,"stroke-width":"2.4"})):ge("",!0)],10,vr))),128))])])):ge("",!0)],2)):ge("",!0),e.overlayOptions.length?(ne(),le("div",{key:2,class:Pe(["option-group",{expanded:d("overlay")}])},[k("button",{class:"section-head section-toggle",type:"button","aria-expanded":d("overlay"),onClick:X[6]||(X[6]=O=>o("overlay"))},[k("span",br,[Se(de(wn),{size:16,"stroke-width":"2"}),X[15]||(X[15]=k("span",null,"叠加层",-1))]),k("span",xr,[k("span",null,fe(r.value)+"/"+fe(e.overlayOptions.length),1),Se(de(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,yr),d("overlay")?(ne(),le("div",_r,[k("div",Sr,[(ne(!0),le(nt,null,rt(e.overlayOptions,O=>(ne(),le("button",{key:O.value,class:Pe(["overlay-row",{active:!!O.active}]),type:"button",disabled:O.disabled,"aria-pressed":!!O.active,title:O.description||O.label,onClick:ve=>re(O)},[k("span",Tr,[k("span",Mr,fe(O.label),1),O.description?(ne(),le("span",Dr,fe(O.description),1)):ge("",!0)]),k("span",{class:Pe(["toggle-control",{active:!!O.active}]),"aria-hidden":"true"},[...X[16]||(X[16]=[k("span",{class:"toggle-track"},[k("span",{class:"toggle-thumb"})],-1)])],2)],10,wr))),128))])])):ge("",!0)],2)):ge("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(ne(),le("div",Cr," 暂无图层配置项 ")):ge("",!0)],512),[[ct,w.value==="layers"]]),Ye(k("section",Lr,[k("div",Fr,[(ne(!0),le(nt,null,rt(L.value,O=>{var ve,we;return ne(),le("article",{key:O.id,class:Pe(["module-item",{expanded:m(O.id)}])},[k("button",{class:"module-head",type:"button","aria-expanded":m(O.id),onClick:ye=>v(O.id)},[k("span",Er,[(ne(),Ge(ut(H(O.id)),{size:16,"stroke-width":"2"}))]),k("span",Ar,[k("span",Rr,fe(O.title),1),O.description?(ne(),le("span",kr,fe(O.description),1)):ge("",!0)]),k("span",Ir,[O.status?(ne(),le("span",{key:0,class:Pe(["module-status",O.statusTone||"neutral"])},fe(O.status),3)):ge("",!0),Se(de(Ft),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Pr),m(O.id)?(ne(),le("div",zr,[(ve=O.actions)!=null&&ve.length?(ne(),le("div",Or,[(ne(!0),le(nt,null,rt(O.actions,ye=>(ne(),le("button",{key:ye.id,class:Pe(["tool-action",[ye.variant||"default",{active:ye.active}]]),disabled:ye.disabled,type:"button",onClick:Ce=>se(O.id,ye.id)},[(ne(),Ge(ut(J(O.id,ye.id)),{size:14,"stroke-width":"2"})),It(" "+fe(ye.label),1)],10,Br))),128))])):ge("",!0),(we=O.controls)!=null&&we.length?(ne(),le("div",{key:1,class:Pe(["control-list control-list-gui",O.controlLayout?`control-list-${O.controlLayout}`:""])},[Se(un,{title:O.title,controls:O.controls,onChange:ye=>ie(O.id,ye.control,ye.value)},null,8,["title","controls","onChange"])],2)):ge("",!0)])):ge("",!0)],2)}),128))]),L.value.length?ge("",!0):(ne(),le("div",Nr," 暂无可用功能模块 "))],512),[[ct,w.value==="modules"]]),Ye(k("section",Hr,[k("label",Wr,[k("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:S,class:"data-file-input",type:"file",multiple:"",accept:Jr,onChange:Te},null,544),k("div",Ur,[Se(de(tn),{size:28,"stroke-width":"1.5"}),X[17]||(X[17]=k("span",null,"选择文件或拖拽到此处",-1)),X[18]||(X[18]=k("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),a.value.length?(ne(),le("div",Gr,[k("div",$r,[k("span",qr," 已加载 "+fe(a.value.length)+" 个数据源 ",1),k("button",{class:"tool-action danger",type:"button",onClick:Ee},[Se(de(Xt),{size:13,"stroke-width":"2"}),X[19]||(X[19]=It(" 全部清除 ",-1))])]),(ne(!0),le(nt,null,rt(a.value,O=>(ne(),le("button",{key:O.id,class:"data-source-row",type:"button",title:`点击移除 ${O.name} (${pe(O.type)})`,"aria-label":`移除 ${O.name}`,onClick:ve=>ke(O.id)},[k("span",Xr,[(ne(),Ge(ut(te(O.type)),{size:15,"stroke-width":"2"}))]),k("span",Yr,[k("span",Kr,fe(O.name),1),k("span",Vr,fe(pe(O.type)),1)]),Se(de(xn),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,jr))),128))])):(ne(),le("div",Zr," 暂无已导入的数据 "))],512),[[ct,w.value==="data"]])])],2),[[ct,e.embedded||F.value]])],2))}},eo=dt(Qr,[["__scopeId","data-v-cb0956f8"]]),to={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},no={class:"dialog-header"},ao={class:"dialog-title-row"},io={class:"dialog-file-name"},ro={class:"coord-fields"},oo={class:"coord-field"},so={key:0,class:"coord-error"},lo={class:"coord-field"},co={key:0,class:"coord-error"},uo={class:"coord-field"},ho={key:0,class:"coord-error"},fo={class:"dialog-actions"},mo=["disabled"],po={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,a=t,h=ee(""),f=ee(""),p=ee("0"),w=ee(null),g=ee(""),T=ee(""),R=ee(""),A=xe(()=>h.value!==""&&f.value!==""&&!g.value&&!T.value&&!R.value);function S(){const C=parseFloat(h.value),_=parseFloat(f.value),L=parseFloat(p.value);g.value="",T.value="",R.value="",h.value!==""&&(isNaN(C)||C<-180||C>180)&&(g.value="经度范围: -180 ~ 180"),f.value!==""&&(isNaN(_)||_<-90||_>90)&&(T.value="纬度范围: -90 ~ 90"),p.value!==""&&(isNaN(L)||L<0)&&(R.value="高度必须 ≥ 0")}function F(){if(!A.value){S();return}const C=parseFloat(h.value),_=parseFloat(f.value),L=parseFloat(p.value)||0;a("confirm",{lng:C,lat:_,height:L})}return _e(()=>n.visible,C=>{if(!C){g.value="",T.value="",R.value="";return}h.value="",f.value="",p.value="0",g.value="",T.value="",R.value="",C&&setTimeout(()=>{var _;(_=w.value)==null||_.focus()},60)}),(C,_)=>(ne(),Ge(ha,{to:"body"},[e.visible?(ne(),le("div",{key:0,class:"cesium-data-dialog-overlay",onClick:_[4]||(_[4]=gt(L=>C.$emit("cancel"),["self"]))},[k("div",to,[k("header",no,[k("div",ao,[Se(de(Ot),{size:18,"stroke-width":"2"}),_[5]||(_[5]=k("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),k("p",io,fe(e.fileName),1),_[6]||(_[6]=k("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),k("form",{class:"dialog-form",onSubmit:gt(F,["prevent"])},[k("div",ro,[k("label",oo,[_[7]||(_[7]=k("span",{class:"coord-label"},"经度 (Longitude)",-1)),Ye(k("input",{ref_key:"lngInputRef",ref:w,"onUpdate:modelValue":_[0]||(_[0]=L=>h.value=L),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:S},null,544),[[zt,h.value]]),g.value?(ne(),le("span",so,fe(g.value),1)):ge("",!0)]),k("label",lo,[_[8]||(_[8]=k("span",{class:"coord-label"},"纬度 (Latitude)",-1)),Ye(k("input",{"onUpdate:modelValue":_[1]||(_[1]=L=>f.value=L),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:S},null,544),[[zt,f.value]]),T.value?(ne(),le("span",co,fe(T.value),1)):ge("",!0)]),k("label",uo,[_[9]||(_[9]=k("span",{class:"coord-label"},"高度 (Height 米)",-1)),Ye(k("input",{"onUpdate:modelValue":_[2]||(_[2]=L=>p.value=L),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:S},null,544),[[zt,p.value]]),R.value?(ne(),le("span",ho,fe(R.value),1)):ge("",!0)])]),k("div",fo,[k("button",{class:"dialog-btn cancel-btn",type:"button",onClick:_[3]||(_[3]=L=>C.$emit("cancel"))}," 取消 "),k("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!A.value},[Se(de(sa),{size:14,"stroke-width":"2"}),_[10]||(_[10]=It(" 确认放置 ",-1))],8,mo)])],32)])])):ge("",!0)]))}},go=dt(po,[["__scopeId","data-v-81f307a1"]]);function vo(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(M){return(M==null?void 0:M._view)||(M==null?void 0:M.view)}function n(M){const r=t(M);if(!(r!=null&&r.passState))throw new Error("Cesium scene passState is unavailable.");return r.passState}function a(M){const r=t(M);return(r==null?void 0:r.frustumCommandsList)||(r==null?void 0:r._frustumCommandsList)||[]}const h=`
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
`,f=`
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
`,p=`
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
`,w=`
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
`,g=`
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
`;class R{constructor(r){this.commandType=r.commandType,this.geometry=r.geometry,this.attributeLocations=r.attributeLocations,this.primitiveType=r.primitiveType,this.uniformMap=r.uniformMap,this.vertexShaderSource=r.vertexShaderSource,this.fragmentShaderSource=r.fragmentShaderSource,this.rawRenderState=r.rawRenderState,this.framebuffer=r.framebuffer,this.isPostRender=r.isPostRender,this.outputTexture=r.outputTexture,this.autoClear=e.defaultValue(r.autoClear,!1),this.preExecute=r.preExecute,this.modelMatrix=e.defaultValue(r.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(r){switch(this.commandType){case"Draw":{const l=e.VertexArray.fromGeometry({context:r,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),c=e.ShaderProgram.fromCache({context:r,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),s=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:l,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:c,framebuffer:this.framebuffer,renderState:s,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(r,l){this.geometry=l;const c=e.VertexArray.fromGeometry({context:r,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=c}update(r){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(r.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&r.commandList.push(this.clearCommand),r.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class A{constructor(){}static loadText(r){const l=new XMLHttpRequest;return l.open("GET",r,!1),l.send(),l.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(r){if(e.defined(r.arrayBufferView)){const c={};c.arrayBufferView=r.arrayBufferView,r.source=c,r.flipY=!1}return new e.Texture(r)}static createDepthFramebuffer(r,l,c){return new e.Framebuffer({context:r,colorTextures:[this.createTexture({context:r,width:l,height:c,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(l*c*4)})],depthRenderbuffer:new e.Renderbuffer({context:r,width:l,height:c,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(r,l,c,s=!1){const i={context:r,colorTextures:[l],destroyAttachments:s};return c&&(i.depthTexture=c),new e.Framebuffer(i)}static createRawRenderState(r){const s={viewport:r.viewport,depthTest:r.depthTest,depthMask:r.depthMask,blending:r.blending};return e.Appearance.getDefaultRenderState(!0,!1,s)}}const L=class L{constructor(r,l={}){if(!r)throw new Error("Cesium Viewer is required");this.viewer=r,this._initConfiguration(l),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(r){this.config={resolution:new e.Cartesian2(r.width||L.DEFAULTS.width,r.height||L.DEFAULTS.height),dimensions:r.dimensions||L.DEFAULTS.dimensions.clone(),heightRange:{min:r.minHeight??L.DEFAULTS.heightRange[0],max:r.maxHeight??L.DEFAULTS.heightRange[1]},baseHeight:r.baseHeight??L.DEFAULTS.baseHeight,fluidParams:r.fluidParams||L.DEFAULTS.fluidParams.clone(),customParams:r.customParams||L.DEFAULTS.customParams.clone(),waterColor:r.waterColor||L.DEFAULTS.waterColor.clone(),lonLat:r.lonLat||[...L.DEFAULTS.lonLat],timeStep:r.timeStep||L.DEFAULTS.timeStep,heightMapSource:r.heightMapSource||L.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(r){const l=Number(r);!Number.isFinite(l)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,l)),this.resetSimulation())}resetSimulation(){var r,l;this._frameCount=0,(l=(r=this.viewer.scene).requestRender)==null||l.call(r)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const r=()=>A.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:r(),B:r(),C:r(),D:r()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(r){if(!(r!=null&&r.arrayBufferView)||!r.width||!r.height)throw new Error("Invalid height map source.");return A.createTexture({context:this.viewer.scene.context,width:r.width,height:r.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:r.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var W,Z;const r=this.viewer.scene.context,l=A.createDepthFramebuffer(r,this.config.resolution.x,this.config.resolution.y),c=this.viewer.scene,s=c.frameState,i=n(this.viewer.scene),d=c.camera,o=s.camera,m=i.framebuffer,v=e.BoundingRectangle.clone(i.viewport,new e.BoundingRectangle);let E=null,z=[];try{i.viewport.x=0,i.viewport.y=0,i.viewport.width=this.config.resolution.x,i.viewport.height=this.config.resolution.y,i.framebuffer=l,c.camera=this.heightMapCamera,s.camera=this.heightMapCamera,s.context.uniformState.updateCamera(this.heightMapCamera),z=this._processHeightMapShaders(),this._renderDepthPrepass(i);const H=A.createTexture({context:r,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return E=A.createFramebuffer(r,H),this._copyTexture(l.getColorTexture(0),E),H}finally{this._restoreHeightMapShaders(z),i.framebuffer=m,e.BoundingRectangle.clone(v,i.viewport),c.camera=d,s.camera=o,o&&s.context.uniformState.updateCamera(o),E&&!((W=E.isDestroyed)!=null&&W.call(E))&&E.destroy(),l&&!((Z=l.isDestroyed)!=null&&Z.call(l))&&l.destroy()}}_renderDepthPrepass(r){const l=this.viewer.scene.frameState;l.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(s=>s.execute(this.viewer.scene.context,r))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const r={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...r,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:f}),this._createComputePass("B",{uniforms:{...r,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:p}),this._createComputePass("C",{uniforms:{...r,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:w}),this._createComputePass("D",{uniforms:{...r,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:g})]}_createComputePass(r,{uniforms:l,shaderSource:c}){return new R({commandType:"Compute",uniformMap:l,fragmentShaderSource:new e.ShaderSource({sources:[h,c]}),geometry:A.getFullscreenQuad(),outputTexture:this.textures[r],preExecute:s=>s.commandToExecute.outputTexture=this.textures[r]})}_createMainRenderPass(){const r=F([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new R({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[h,T]}),geometry:this._createBoxGeometry(),modelMatrix:r,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var r,l,c,s;return(s=(c=(l=(r=t(this.viewer.scene))==null?void 0:r.globeDepth)==null?void 0:l.colorFramebufferManager)==null?void 0:c._colorTextures)==null?void 0:s[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(r=>this.viewer.scene.primitives.add(r)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(r){const l=this.viewer.camera.getPickRay(r);return this.viewer.scene.globe.pick(l,this.viewer.scene)}_createOrthographicCamera(){const r=new e.Camera(this.viewer.scene);r.frustum=new e.OrthographicOffCenterFrustum;const[l,c]=this.config.lonLat,s=e.Cartesian3.fromDegrees(l,c,this.config.baseHeight),i=e.Transforms.eastNorthUpToFixedFrame(s),d=r.frustum;d.near=.01,d.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),d.left=-this.config.dimensions.x/2,d.right=this.config.dimensions.x/2,d.bottom=-this.config.dimensions.y/2,d.top=this.config.dimensions.y/2;const o=e.Matrix4.getColumn(i,2,new e.Cartesian3);e.Cartesian3.negate(o,o);const m=e.Matrix4.getColumn(i,1,new e.Cartesian3),v=e.Matrix4.getColumn(i,0,new e.Cartesian3),E=e.Cartesian3.multiplyByScalar(o,-d.far,new e.Cartesian3);return r.position=e.Cartesian3.add(s,E,new e.Cartesian3),r.direction=o,r.up=m,r.right=v,r}destroy(){var r,l;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(c=>{c&&this.viewer.scene.primitives.remove(c)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(c=>{var s;c&&!((s=c.isDestroyed)!=null&&s.call(c))&&c.destroy()}),this.textures={},this._heightMap&&!((l=(r=this._heightMap).isDestroyed)!=null&&l.call(r))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(r,l){const c=this.viewer.scene.context,s=n(this.viewer.scene),i=c.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>r},owner:this}),d=s.framebuffer;s.framebuffer=l,i.execute(c,s),s.framebuffer=d}_getDepthRenderCommands(){var c,s;const r=[],l=a(this.viewer.scene);for(let i=0;i<l.length;++i){const d=l[i],o=(c=d==null?void 0:d.commands)==null?void 0:c[2],m=((s=d==null?void 0:d.indices)==null?void 0:s[2])??(o==null?void 0:o.length)??0;o&&m>0&&r.push(...o.slice(0,m))}return r}_processHeightMapShaders(){const r=[],l=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),c=e.Matrix4.inverse(l,new e.Matrix4),s=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(d=>{var z;if(!((z=d==null?void 0:d.shaderProgram)!=null&&z.fragmentShaderSource)||!d.uniformMap)return;const o=Object.prototype.hasOwnProperty.call(d.uniformMap,"u_inverseEnuMatrix"),m=d.uniformMap.u_inverseEnuMatrix,v=d.shaderProgram,E=new e.Matrix4;d.uniformMap.u_inverseEnuMatrix=()=>{const W=d.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(c,W,E)},d.heightMap_ShaderProgram||(d.heightMap_ShaderProgram=this._getDerivedShaderProgram(s.context,d.shaderProgram,"Height_Map")),d.shaderProgram=d.heightMap_ShaderProgram,r.push({command:d,hadInverseUniform:o,originalInverseUniform:m,originalShaderProgram:v})}),r}_restoreHeightMapShaders(r){r.forEach(l=>{const{command:c,hadInverseUniform:s,originalInverseUniform:i,originalShaderProgram:d}=l;c!=null&&c.uniformMap&&(c.shaderProgram=d,s?c.uniformMap.u_inverseEnuMatrix=i:delete c.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(r,l,c){let s=r.shaderCache.getDerivedShaderProgram(l,c);return e.defined(s)||(s=this._createHeightMapShaderProgram(r,l,c)),s}_createHeightMapShaderProgram(r,l,c){const s=this._modifyFragmentShader(l.fragmentShaderSource);return r.shaderCache.createDerivedShaderProgram(l,c,{vertexShaderSource:l.vertexShaderSource,fragmentShaderSource:s,attributeLocations:l._attributeLocations})}_modifyFragmentShader(r){const l=r.sources.map(c=>e.ShaderSource.replaceMain(c,"czm_heightMap_main"));return l.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:l,defines:r.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};yn(L,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let S=L;const F=(M=[0,0,0],r=[0,0,0],l=[1,1,1])=>{const c=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(r[0]))),s=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(r[1]))),i=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(r[2])));M instanceof e.Cartesian3||(M=e.Cartesian3.fromDegrees(...M));const d=e.Transforms.eastNorthUpToFixedFrame(M);e.Matrix4.multiply(d,c,d),e.Matrix4.multiply(d,s,d),e.Matrix4.multiply(d,i,d);const o=e.Matrix4.fromScale(new e.Cartesian3(...l));return e.Matrix4.multiply(d,o,new e.Matrix4)},C=`
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
    `;function _(){return new e.PostProcessStage({fragmentShader:C})}return{FluidRenderer:S,createSkyEffect:_}}const yo={key:0,class:"fluid-root"},bo={class:"fluid-panel"},xo={class:"panel-actions"},_o=["disabled"],So={key:0,class:"selected-text"},kn=1024,Rt=1e4,In=1200,wo=100,To=.01,Mo=.03,Do=60,Kt=64,Co=160,Lo={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const a=e,h=n,f=on(),p=ee(10),w=ee(20),g=ee(3),T=ee("#0d4fa3"),R=ee(null),A=ee(null),S=ee(null),F=ee(!1),C=ee(!1),_=ee(null),L=ee(null);let M=null,r=null,l=null,c=null,s=null,i=null,d=0;const o=xe(()=>!Number.isFinite(_.value)||!Number.isFinite(L.value)?"":`经度 ${_.value.toFixed(6)} / 纬度 ${L.value.toFixed(6)}`),m=xe(()=>Number.isFinite(A.value)&&Number.isFinite(S.value)),v=xe(()=>{if(!m.value)return 1;const y=Math.abs(S.value-A.value);return Math.max(y/1e3,.01)}),E=xe(()=>[{id:"threshold",label:"Threshold",type:"range",min:0,max:500,step:1e-4,value:p.value,displayValue:Number(p.value).toFixed(2)},{id:"blend",label:"Blend",type:"range",min:0,max:50,step:1e-4,value:w.value,displayValue:Number(w.value).toFixed(2)},{id:"lightStrength",label:"Light",type:"range",min:0,max:10,step:1e-4,value:g.value,displayValue:Number(g.value).toFixed(2)},{id:"waterLevel",label:"Water Level",type:"range",min:m.value?A.value:0,max:m.value?S.value:1,step:v.value,value:Number.isFinite(Number(R.value))?Number(R.value):0,displayValue:m.value&&Number.isFinite(Number(R.value))?`${Number(R.value).toFixed(2)} m`:"Pick terrain first",disabled:!m.value},{id:"waterColor",label:"Water Color",type:"color",value:T.value}]);_e([p,w,g,T],Le),_e(R,ze),_e(()=>a.params,y=>{W(y||{})},{deep:!0,immediate:!0}),_e([F,C,o,R,A,S],H,{immediate:!0}),aa(()=>{He(!0)});function z(){var I,$;const y=(I=a.getViewer)==null?void 0:I.call(a),D=(($=a.getCesium)==null?void 0:$.call(a))||window.Cesium;if(!y||!D)return f.warning("Cesium 场景尚未就绪。"),null;if(!M){const Q=vo(D);M=Q.FluidRenderer,r=Q.createSkyEffect}return{viewer:y,Cesium:D}}function W(y){Number.isFinite(Number(y.threshold))&&(p.value=Number(y.threshold)),Number.isFinite(Number(y.blend))&&(w.value=Number(y.blend)),Number.isFinite(Number(y.lightStrength))&&(g.value=Number(y.lightStrength)),Ie(y.waterColor)&&(T.value=y.waterColor),Number.isFinite(Number(y.waterLevel))&&(R.value=Number(y.waterLevel))}function Z({controlId:y,value:D}){y==="threshold"?p.value=Number(D):y==="blend"?w.value=Number(D):y==="lightStrength"?g.value=Number(D):y==="waterLevel"?R.value=Number(D):y==="waterColor"&&Ie(D)&&(T.value=D)}function H(){h("state-change",{isPicking:F.value,hasFluid:C.value,selectedText:o.value,waterLevel:R.value,waterLevelMin:A.value,waterLevelMax:S.value})}function J(){const y=z();if(!y)return;const{viewer:D,Cesium:I}=y;Fe(),Ke(D,I),F.value=!0,l=new I.ScreenSpaceEventHandler(D.scene.canvas),l.setInputAction($=>{se(D,I,$.position)},I.ScreenSpaceEventType.LEFT_CLICK)}async function se(y,D,I){var ae,q;const $=Oe(y,I);if(!$){f.warning("未选中可用地形位置。");return}const Q=++d;Fe();const x=D.Cartographic.fromCartesian($),b=D.Math.toDegrees(x.longitude),N=D.Math.toDegrees(x.latitude),U=Number(x.height),V=Number.isFinite(U)?U:0,oe=new D.Cartesian3(Rt,Rt,0);ra("正在请求模拟范围高度数据...");try{Ne();const B=Number(p.value)||0,u=Number(w.value)||0,P=Number(g.value)||0,Y=await ie(y,D,{lon:b,lat:N,centerHeight:V,dimensions:oe}),G=ve(Y,V),ce=G.baseHeight,ue=G.depth,be=we(G,V),Me=new D.Cartesian3(Rt,Rt,ue);if(Q!==d)return;A.value=G.minHeight,S.value=G.maxHeight,R.value=be,Y||f.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),c=new M(y,{lonLat:[b,N],width:kn,height:kn,dimensions:Me,baseHeight:ce,minHeight:G.minHeight,maxHeight:G.maxHeight,heightMapSource:Y,waterColor:$e(D,T.value),customParams:new D.Cartesian4(B,u,P,10),fluidParams:new D.Cartesian4(.9+P/10*.099,Math.min(1,u/50),B/5e4,ye(be,G))}),_.value=b,L.value=N,C.value=!0,(q=(ae=y.scene).requestRender)==null||q.call(ae),f.success("水体流体已创建。")}catch(B){f.error("水体流体创建失败",B),f.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{oa()}}async function ie(y,D,I){const $=y==null?void 0:y.terrainProvider,Q=te(I.dimensions);if(!$)return null;if(D.EllipsoidTerrainProvider&&$ instanceof D.EllipsoidTerrainProvider)return X(Q);if(typeof D.sampleTerrain!="function"&&typeof D.sampleTerrainMostDetailed!="function")return null;try{return await re(y,D,I,Q)}catch(x){if(Q<=Kt)throw x;return re(y,D,I,Kt)}}async function re(y,D,I,$){const Q=Te(D,I,$),x=await ke(D,y.terrainProvider,Q);return j(x||Q,{size:$})}function te(y){const D=Math.max(Number(y==null?void 0:y.x)||0,Number(y==null?void 0:y.y)||0),I=Math.ceil(D/Do)+1;return pe(I,Kt,Co)}function pe(y,D,I){return Math.max(D,Math.min(I,Math.round(y)))}function Te(y,{lon:D,lat:I,centerHeight:$,dimensions:Q},x){const b=y.Cartesian3.fromDegrees(D,I,$),N=y.Transforms.eastNorthUpToFixedFrame(b),U=[],V=Math.max(1,x-1);for(let oe=0;oe<x;oe++){const q=(.5-oe/V)*Q.y;for(let B=0;B<x;B++){const P=(B/V-.5)*Q.x,Y=new y.Cartesian3(P,q,0),G=y.Matrix4.multiplyByPoint(N,Y,new y.Cartesian3);U.push(y.Cartographic.fromCartesian(G))}}return U}async function ke(y,D,I){const $=Ee(D);return Number.isInteger($)&&typeof y.sampleTerrain=="function"?y.sampleTerrain(D,$,I):typeof y.sampleTerrainMostDetailed=="function"?y.sampleTerrainMostDetailed(D,I):y.sampleTerrain(D,10,I)}function Ee(y){const D=Number(y==null?void 0:y._bottomLevel);return Number.isFinite(D)?Math.max(0,D-1):null}function j(y,{size:D}){var Q;const I=O(y);if(!I)return null;const $=new Float32Array(D*D*4);for(let x=0;x<D*D;x++){const b=Number((Q=y[x])==null?void 0:Q.height),N=x*4;$[N]=Number.isFinite(b)?Re(b,I.minHeight,I.maxHeight):I.minHeight,$[N+1]=0,$[N+2]=0,$[N+3]=1}return{width:D,height:D,arrayBufferView:$,minHeight:I.minHeight,maxHeight:I.maxHeight}}function X(y){return{width:y,height:y,arrayBufferView:new Float32Array(y*y*4),minHeight:0,maxHeight:0}}function O(y){let D=Number.POSITIVE_INFINITY,I=Number.NEGATIVE_INFINITY;for(const $ of y||[]){const Q=Number($==null?void 0:$.height);Number.isFinite(Q)&&(D=Math.min(D,Q),I=Math.max(I,Q))}return!Number.isFinite(D)||!Number.isFinite(I)?null:{minHeight:D,maxHeight:I}}function ve(y,D){const I=Number(y==null?void 0:y.minHeight),$=Number(y==null?void 0:y.maxHeight);if(Number.isFinite(I)&&Number.isFinite($)){const b=Number(D),N=Number.isFinite(b)?Math.min(I,$,b):Math.min(I,$),U=Number.isFinite(b)?Math.max(I,$,b):Math.max(I,$),V=Math.max(U-N,To);return{baseHeight:N,depth:V,minHeight:N,maxHeight:N+V}}const Q=Number(D),x=Number.isFinite(Q)?Q-wo:0;return{baseHeight:x,depth:In,minHeight:x,maxHeight:x+In}}function we(y,D){const I=y.minHeight+y.depth*Mo,$=Number(D),Q=Number.isFinite($)?$:I;return Re(Q,y.minHeight,y.maxHeight)}function ye(y,D){const I=D.maxHeight-D.minHeight;return!Number.isFinite(I)||I<=0?0:Re((y-D.minHeight)/I,0,1)}function Ce(){return!Number.isFinite(A.value)||!Number.isFinite(S.value)?null:{minHeight:Math.min(A.value,S.value),maxHeight:Math.max(A.value,S.value)}}function $e(y,D){const I=Ae(D)||Ae("#0d4fa3");return new y.Cartesian3(I.red,I.green,I.blue)}function Ze(){var I;const y=Ae(T.value),D=(I=c==null?void 0:c.config)==null?void 0:I.waterColor;!y||!D||(D.x=y.red,D.y=y.green,D.z=y.blue)}function Ie(y){return typeof y=="string"&&/^#[0-9a-f]{6}$/i.test(y)}function Ae(y){return Ie(y)?{red:Number.parseInt(y.slice(1,3),16)/255,green:Number.parseInt(y.slice(3,5),16)/255,blue:Number.parseInt(y.slice(5,7),16)/255}:null}function Re(y,D,I){return Math.max(D,Math.min(I,y))}function Oe(y,D){if(!D)return null;if(y.scene.pickPositionSupported&&typeof y.scene.pickPosition=="function"){const $=y.scene.pickPosition(D);if($)return $}const I=y.camera.getPickRay(D);return I?y.scene.globe.pick(I,y.scene):null}function Le(){var $,Q,x;if(!(c!=null&&c.config))return;const y=Number(p.value)||0,D=Number(w.value)||0,I=Number(g.value)||0;c.config.customParams&&(c.config.customParams.x=y,c.config.customParams.y=D,c.config.customParams.z=I),c.config.fluidParams&&(c.config.fluidParams.x=.9+I/10*.099,c.config.fluidParams.y=Math.min(1,D/50),c.config.fluidParams.z=y/5e4),Ze(),(x=(Q=($=c.viewer)==null?void 0:$.scene)==null?void 0:Q.requestRender)==null||x.call(Q)}function ze(){var Q,x,b,N;if(!((Q=c==null?void 0:c.config)!=null&&Q.fluidParams))return;const y=Ce(),D=Number(R.value);if(!y||!Number.isFinite(D))return;const I=Re(D,y.minHeight,y.maxHeight);if(I!==D){R.value=I;return}const $=ye(I,y);typeof c.setInitialWaterLevel=="function"?c.setInitialWaterLevel($):(c.config.fluidParams.w=$,(N=(b=(x=c.viewer)==null?void 0:x.scene)==null?void 0:b.requestRender)==null||N.call(b))}function Ke(y,D){var I,$;if(!i){const Q=y.scene;i={shadows:y.shadows,resolutionScale:y.resolutionScale,msaaSamples:Q.msaaSamples,depthTestAgainstTerrain:Q.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:Q.logarithmicDepthBuffer,highDynamicRange:Q.highDynamicRange,fogEnabled:(I=Q.fog)==null?void 0:I.enabled,showGroundAtmosphere:Q.globe.showGroundAtmosphere,skyAtmosphereShow:($=Q.skyAtmosphere)==null?void 0:$.show,enableLighting:Q.globe.enableLighting}}y.shadows=!0,y.resolutionScale=1,y.scene.msaaSamples=4,y.scene.globe.depthTestAgainstTerrain=!0,y.scene.logarithmicDepthBuffer=!0,y.scene.highDynamicRange=!0,y.scene.fog&&(y.scene.fog.enabled=!0),y.scene.globe.showGroundAtmosphere=!0,y.scene.skyAtmosphere&&(y.scene.skyAtmosphere.show=!0),y.scene.globe.enableLighting=!0,!s&&r&&(s=r(D),y.scene.postProcessStages.add(s))}function Ve(y){if(!y||!i)return;const D=y.scene;y.shadows=i.shadows,y.resolutionScale=i.resolutionScale,i.msaaSamples!==void 0&&(D.msaaSamples=i.msaaSamples),D.globe.depthTestAgainstTerrain=i.depthTestAgainstTerrain,D.logarithmicDepthBuffer=i.logarithmicDepthBuffer,D.highDynamicRange=i.highDynamicRange,D.fog&&i.fogEnabled!==void 0&&(D.fog.enabled=i.fogEnabled),D.globe.showGroundAtmosphere=i.showGroundAtmosphere,D.skyAtmosphere&&i.skyAtmosphereShow!==void 0&&(D.skyAtmosphere.show=i.skyAtmosphereShow),D.globe.enableLighting=i.enableLighting,i=null}function Be(){He(!1),f.success("水体流体已清除。")}function Fe(){l&&(l.destroy(),l=null),F.value=!1}function Ne(){if(c){try{c.destroy()}catch{}c=null,C.value=!1}}function He(y){var I,$,Q;const D=(I=a.getViewer)==null?void 0:I.call(a);if(d+=1,Fe(),Ne(),_.value=null,L.value=null,R.value=null,A.value=null,S.value=null,D&&s){try{D.scene.postProcessStages.remove(s)}catch{}s=null}y&&D&&Ve(D),(Q=($=D==null?void 0:D.scene)==null?void 0:$.requestRender)==null||Q.call($)}function K(){He(!0),h("close")}return t({startPickHeightMap:J,clearFluid:Be}),(y,D)=>e.headless?ge("",!0):(ne(),le("div",yo,[k("div",bo,[k("div",{class:"panel-head"},[D[0]||(D[0]=k("span",{class:"panel-title"},"水体流体",-1)),k("button",{class:"panel-close",title:"关闭",onClick:K}," × ")]),k("div",xo,[k("button",{class:Pe(["action-btn primary",{active:F.value}]),onClick:J},fe(F.value?"等待选点":"捕捉高度图"),3),k("button",{class:"action-btn",disabled:!C.value&&!F.value,onClick:Be}," 清除 ",8,_o)]),o.value?(ne(),le("div",So,fe(o.value),1)):ge("",!0),Se(un,{class:"param-list",title:"Fluid Parameters",controls:E.value,onChange:Z},null,8,["controls"])])]))}},Fo=dt(Lo,[["__scopeId","data-v-882532f8"]]),Po=`
  uniform float uTime;
  uniform float uCaustic;
  varying vec3 vCWorld;

  float causticX( vec2 uv ) {
    vec2 p = mod( uv * 6.28318530718, 6.28318530718 ) - 250.0;
    vec2 i = vec2( p );
    float c = 1.0;
    float inten = 0.005;

    for ( int n = 0; n < 5; n++ ) {
      float t = uTime * 0.5 * ( 1.0 - ( 3.5 / float( n + 1 ) ) );
      i = p + vec2( cos( t - i.x ) + sin( t + i.y ), sin( t - i.y ) + cos( t + i.x ) );
      c += 1.0 / length( vec2( p.x / ( sin( i.x + t ) / inten ), p.y / ( cos( i.y + t ) / inten ) ) );
    }

    c /= 5.0;
    c = 1.17 - pow( c, 1.4 );
    return pow( abs( c ), 8.0 );
  }
`;function zn(e,t){e.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uCaustic=t.uCaustic,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vCWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+Po).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  float cDepth = smoothstep( 0.0, -2.0, vCWorld.y );
  float caus = causticX( vCWorld.xz * 0.06 );
  caus += causticX( vCWorld.xz * 0.13 + 40.0 ) * 0.6;
  totalEmissiveRadiance += vec3( 0.45, 0.85, 0.8 ) * caus * cDepth * uCaustic;`)}}const Eo=`
  uniform float uTime;
  uniform float waveHeight;
  varying vec3 vWorldPos;
  varying float vEyeDepth;
  varying vec3 vWaveNormal;
  varying vec2 vWorldUv;

  float wv(vec2 p, vec2 d, float f, float a, float s) {
    return a * sin(dot(p, normalize(d)) * f + uTime * s);
  }

  float h(vec2 p) {
    float v = 0.0;
    v += wv(p, vec2(0.2, 1.0), 0.040, 1.0, 0.9);
    v += wv(p, vec2(1.0, 0.3), 0.055, 0.6, 1.1);
    v += wv(p, vec2(-0.6, 0.7), 0.090, 0.35, 1.5);
    return v;
  }

  void main() {
    vec2 wp = vec2(position.x, -position.y);
    float e = 1.5;

    float H  = h(wp) * waveHeight;
    float Hx = h(wp + vec2(e, 0.0)) * waveHeight;
    float Hz = h(wp + vec2(0.0, e)) * waveHeight;

    vWaveNormal = normalize(vec3(-(Hx - H) / e, 1.0, -(Hz - H) / e));
    vWorldUv = wp;

    vec3 disp = position;
    disp.z += H;
    vec4 wpos = modelMatrix * vec4(disp, 1.0);
    vWorldPos = wpos.xyz;

    vec4 mv = viewMatrix * wpos;
    vEyeDepth = -mv.z;

    gl_Position = projectionMatrix * mv;
  }
`,Ao=`
  precision highp float;

  uniform sampler2D tRefraction;
  uniform sampler2D tDepth;
  uniform sampler2D normalMap;
  uniform samplerCube tEnv;

  uniform mat4 invProjection;
  uniform mat4 camWorld;

  uniform vec2 resolution;
  uniform float cameraNear;
  uniform float cameraFar;

  uniform float uTime;
  uniform float clarity;
  uniform float foamWidth;
  uniform float reflection;

  uniform vec3 sunDirection;
  uniform vec3 sunColor;
  uniform vec3 waterColor;
  uniform vec3 absorption;
  uniform vec3 foamColor;

  varying vec3 vWorldPos;
  varying float vEyeDepth;
  varying vec3 vWaveNormal;
  varying vec2 vWorldUv;

  float sat(float x) {
    return clamp(x, 0.0, 1.0);
  }

  vec3 reconWorld(vec2 uvc, float d) {
    vec4 clip = vec4(uvc * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
    vec4 vpos = invProjection * clip;
    vpos /= vpos.w;
    return (camWorld * vpos).xyz;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution;

    vec3 n1 = texture2D(normalMap, vWorldUv * 0.025 + uTime * vec2(0.02, 0.015)).xyz * 2.0 - 1.0;
    vec3 n2 = texture2D(normalMap, vWorldUv * 0.060 - uTime * vec2(0.015, 0.02)).xyz * 2.0 - 1.0;
    vec3 normal = normalize(vWaveNormal + vec3(n1.x + n2.x, 0.0, n1.y + n2.y) * 0.45);

    vec2 refrUV = clamp(uv + normal.xz * 0.05, vec2(0.001), vec2(0.999));
    vec3 fpos = reconWorld(refrUV, texture2D(tDepth, refrUV).x);

    if (fpos.y > vWorldPos.y - 0.05) {
      refrUV = uv;
      fpos = reconWorld(uv, texture2D(tDepth, uv).x);
    }

    float depth = max(vWorldPos.y - fpos.y, 0.0);
    vec3 refr = texture2D(tRefraction, refrUV).rgb;

    vec3 transmit = exp(-depth * absorption * clarity);
    vec3 throughWater = refr * transmit + waterColor * (1.0 - transmit);

    vec3 viewDir = normalize(vWorldPos - cameraPosition);
    vec3 refl = textureCube(tEnv, reflect(viewDir, normal)).rgb;
    float fres = 0.02 + 0.98 * pow(1.0 - sat(dot(normal, -viewDir)), 5.0);
    vec3 color = mix(throughWater, refl, fres * reflection);

    float foam = 1.0 - smoothstep(0.0, foamWidth, depth);
    float fn = texture2D(normalMap, vWorldUv * 0.08 + uTime * 0.04).r;
    foam *= smoothstep(0.35, 0.85, fn + foam * 0.4);
    color = mix(color, foamColor, sat(foam));

    vec3 hf = normalize(sunDirection - viewDir);
    float spec = pow(max(dot(normal, hf), 0.0), 280.0);
    color += sunColor * spec * 2.2;

    color = pow(clamp(color, 0.0, 1.0), vec3(1.0 / 2.2));
    gl_FragColor = vec4(color, 1.0);
  }
`,Ro=`
  varying vec3 vWorldPos;

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,ko=`
  precision highp float;

  uniform sampler2D uNoise;
  uniform vec3 sunDirection;
  uniform vec3 sunColor;
  uniform vec3 skyTint;
  uniform vec3 uFlashPos;
  uniform float uTime;
  uniform float uCoverage;
  uniform float uFlash;

  varying vec3 vWorldPos;

  const float CMIN = 600.0;
  const float CMAX = 1700.0;

  const mat3 m = mat3(
    0.00, 0.80, 0.60,
    -0.80, 0.36, -0.48,
    -0.60, -0.48, 0.64
  );

  float noise(in vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);

    vec2 uv = (p.xy + vec2(37.0, 239.0) * p.z) + f.xy;
    vec2 rg = texture2D(uNoise, (uv + 0.5) / 256.0).yx;
    return mix(rg.x, rg.y, f.z);
  }

  float density(vec3 wp) {
    float h = (wp.y - CMIN) / (CMAX - CMIN);
    if (h < 0.0 || h > 1.0) return 0.0;

    vec3 q = wp * 0.0022 - vec3(uTime * 0.06, 0.0, uTime * 0.03);

    float f;
    f  = 0.50000 * noise(q); q = m * q * 2.02;
    f += 0.25000 * noise(q); q = m * q * 2.03;
    f += 0.12500 * noise(q); q = m * q * 2.01;
    f += 0.06250 * noise(q); q = m * q * 2.02;
    f += 0.03125 * noise(q);

    float shape = smoothstep(0.0, 0.30, h) * smoothstep(1.0, 0.55, h);

    return clamp((f - (1.0 - uCoverage)) * shape * 2.6, 0.0, 1.0);
  }

  void main() {
    vec3 ro = cameraPosition;
    vec3 rd = normalize(vWorldPos - ro);

    if (rd.y < 0.02) discard;

    float tEnter = max((CMIN - ro.y) / rd.y, 0.0);
    float tExit = (CMAX - ro.y) / rd.y;

    const float STEPS = 48.0;
    float dt = (tExit - tEnter) / STEPS;

    float jit = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    vec3 p = ro + rd * (tEnter + dt * jit);
    vec3 sdir = normalize(sunDirection);

    vec4 sum = vec4(0.0);

    for (int i = 0; i < 48; i++) {
      if (sum.a > 0.99) break;

      float den = density(p);
      if (den > 0.01) {
        float dif = clamp((den - density(p + sdir * 60.0)) / 0.5, 0.0, 1.0);
        vec3 lin = skyTint * 1.1 + sunColor * 2.2 * dif;

        vec4 col = vec4(mix(vec3(1.0, 0.98, 0.92), vec3(0.30, 0.36, 0.45), den), den);
        col.rgb *= lin;

        float fd = length(p.xz - uFlashPos.xz);
        col.rgb += vec3(0.6, 0.75, 1.0) * uFlash * exp(-fd * 0.0016) * den;

        col.a *= 0.5;
        col.rgb *= col.a;
        sum += col * (1.0 - sum.a);
      }

      p += rd * dt;
    }

    float alpha = sum.a * smoothstep(0.02, 0.14, rd.y);
    if (alpha < 0.01) discard;

    vec3 col = sum.rgb / max(sum.a, 0.0001);

    col = (col * (2.51 * col + 0.03)) / (col * (2.43 * col + 0.59) + 0.14);

    col = pow(clamp(col, 0.0, 1.0), vec3(1.0 / 2.2));
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;function Io(e=256){const t=new Float32Array(e*e);for(let S=0;S<e*e;S++)t[S]=Math.random();const n=(S,F)=>{const C=new Float32Array(e*e);for(let _=0;_<e;_++)for(let L=0;L<e;L++){let M=0,r=0;for(let l=-F;l<=F;l++)for(let c=-F;c<=F;c++)M+=S[(_+l+e)%e*e+(L+c+e)%e],r++;C[_*e+L]=M/r}return C},a=n(t,4),h=n(t,1),f=new Float32Array(e*e);for(let S=0;S<e*e;S++)f[S]=a[S]*.7+h[S]*.3;const p=document.createElement("canvas");p.width=p.height=e;const w=p.getContext("2d"),g=w.createImageData(e,e),T=(S,F)=>f[(F+e)%e*e+(S+e)%e],R=3;for(let S=0;S<e;S++)for(let F=0;F<e;F++){const C=(T(F-1,S)-T(F+1,S))*R,_=(T(F,S-1)-T(F,S+1))*R,L=Math.hypot(C,_,1),M=(S*e+F)*4;g.data[M]=(C/L*.5+.5)*255,g.data[M+1]=(_/L*.5+.5)*255,g.data[M+2]=(1/L*.5+.5)*255,g.data[M+3]=255}w.putImageData(g,0,0);const A=new sn(p);return A.wrapS=A.wrapT=ln,A.colorSpace=la,A}function zo(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#d8c79b",t.fillRect(0,0,512,512);for(let a=0;a<12e3;a++){const h=170+Math.random()*70|0;t.fillStyle=`rgba(${h},${h-22},${h-65},0.22)`,t.fillRect(Math.random()*512,Math.random()*512,1.6,1.6)}for(let a=0;a<26;a++){const h=60+Math.random()*40|0,f=90+Math.random()*50|0,p=70+Math.random()*40|0;t.fillStyle=`rgba(${h},${f},${p},0.30)`,t.beginPath(),t.ellipse(Math.random()*512,Math.random()*512,8+Math.random()*26,6+Math.random()*20,Math.random()*6,0,7),t.fill()}const n=new sn(e);return n.wrapS=n.wrapT=ln,n.repeat.set(10,10),n.colorSpace=Pa,n}function Oo(e=256){const t=(T,R)=>{const A=new Float32Array(e*e);for(let S=0;S<e;S++)for(let F=0;F<e;F++){let C=0,_=0;for(let L=-R;L<=R;L++)for(let M=-R;M<=R;M++)C+=T[(S+L+e)%e*e+(F+M+e)%e],_++;A[S*e+F]=C/_}return A},n=()=>{const T=new Float32Array(e*e);for(let _=0;_<e*e;_++)T[_]=Math.random();const R=t(T,3),A=t(T,1),S=new Float32Array(e*e);let F=1e9,C=-1e9;for(let _=0;_<e*e;_++)S[_]=R[_]*.65+A[_]*.35,F=Math.min(F,S[_]),C=Math.max(C,S[_]);for(let _=0;_<e*e;_++)S[_]=(S[_]-F)/(C-F);return S},a=n(),h=n(),f=document.createElement("canvas");f.width=f.height=e;const p=f.getContext("2d"),w=p.createImageData(e,e);for(let T=0;T<e*e;T++){const R=T*4;w.data[R]=a[T]*255,w.data[R+1]=h[T]*255,w.data[R+2]=0,w.data[R+3]=255}p.putImageData(w,0,0);const g=new sn(f);return g.wrapS=g.wrapT=ln,g.colorSpace=la,g.minFilter=Mn,g.magFilter=Mn,g.generateMipmaps=!1,g}function Bo(e={}){const{onReady:t,onError:n,onFpsUpdate:a}=e,h=ee(!1),f=ee(0);let p=null,w=null,g=null,T=null,R=null,A=null,S=null,F=null,C=null,_=null,L=null,M=null,r=null;const l=new Qe;let c=null,s=null,i=null;const d=new Ea;let o=0,m=0;const v={value:0},E={value:.9},z={value:0},W={value:new Qe};let Z=3,H=-100;const J=.62,se={};let ie=!0,re=null;const te=new Dn,pe={elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2};async function Te(K){if(!K){n==null||n(new Error("Container element not provided"));return}if(!h.value){A=K;try{g=new Aa({antialias:!0,alpha:!0}),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setSize(A.clientWidth,A.clientHeight),g.toneMapping=Ra,g.toneMappingExposure=J,g.setClearColor(0,0),A.appendChild(g.domElement),p=new Dn,w=new ka(55,A.clientWidth/A.clientHeight,1,2e4),w.position.set(0,55,280),ke(),we(),ye(),Ee(),j(),X(),O(),ve(),Ie(),Ae(),ze(),h.value=!0,t==null||t()}catch(y){n==null||n(y)}}}function ke(){M=new Ia,M.scale.setScalar(12e3),p.add(M);const K=M.material.uniforms;K.turbidity.value=6,K.rayleigh.value=1.6,K.mieCoefficient.value=.005,K.mieDirectionalG.value=.8}function Ee(){r=new Wa(16774368,2.6),p.add(r),p.add(new Ua(13627391,2117738,.7))}function j(){const K=new Ln(1600,1600,200,200);K.rotateX(-Math.PI/2);const y=K.attributes.position;for(let I=0;I<y.count;I++){const $=y.getX(I),Q=y.getZ(I);let b=-34+Et.clamp((Q+800)/1600,0,1)*44;b+=Math.sin($*.012)*Math.cos(Q*.014)*3.5,b+=Math.sin($*.06+Q*.05)*1.1,b+=(Math.random()-.5)*.6,y.setY(I,b)}K.computeVertexNormals();const D=new Fn({map:zo(),roughness:1,metalness:0});zn(D,{uTime:v,uCaustic:E}),p.add(new _t(K,D))}function X(){const K=new Ga(1,0),y=[8023642,7035722,11887946,13598051,9083483];for(let D=0;D<30;D++){const I=new Fn({color:y[D%y.length],roughness:.9,flatShading:!0});zn(I,{uTime:v,uCaustic:E});const $=new _t(K,I),Q=3+Math.random()*9;$.scale.set(Q,Q*(.5+Math.random()*.6),Q),$.position.set((Math.random()-.5)*1100,-24+Math.random()*22,-300+Math.random()*900),$.rotation.set(Math.random(),Math.random(),Math.random()),p.add($)}}function O(){L=new $a(g),_=new qa(256,{generateMipmaps:!0,minFilter:ja}),C=new Xa(1,2e4,_),C.position.set(0,4,0),p.add(C);const K=new Yt;g.getDrawingBufferSize(K),F=new Ya(K.x,K.y),F.depthTexture=new Ka(K.x,K.y),F.depthTexture.type=Va,F.depthTexture.format=Za}function ve(){const K=new Yt;g.getDrawingBufferSize(K);const y=Io(256),D={uTime:v,tRefraction:{value:F.texture},tDepth:{value:F.depthTexture},tEnv:{value:_.texture},normalMap:{value:y},resolution:{value:K.clone()},cameraNear:{value:w.near},cameraFar:{value:w.far},invProjection:{value:new Pn},camWorld:{value:new Pn},sunDirection:{value:new Qe},sunColor:{value:new xt(16774106)},waterColor:{value:new xt(pe.waterColor)},absorption:{value:new Qe(.45,.09,.05)},foamColor:{value:new xt(15925247)},clarity:{value:pe.clarity},foamWidth:{value:pe.foamWidth},waveHeight:{value:pe.waveHeight},reflection:{value:pe.reflection}};S=new _t(new Ln(16e3,16e3,384,384),new Cn({uniforms:D,vertexShader:Eo,fragmentShader:Ao})),S.rotation.x=-Math.PI/2,p.add(S)}function we(){const K=new Cn({side:za,transparent:!0,depthWrite:!1,uniforms:{uTime:v,uNoise:{value:Oo(256)},sunDirection:{value:new Qe},sunColor:{value:new xt(16773341)},skyTint:{value:new xt(7315406)},uCoverage:{value:pe.cloudCoverage},uFlash:z,uFlashPos:W},vertexShader:Ro,fragmentShader:ko});c=new _t(new Oa(8e3,32,16),K),c.renderOrder=2,p.add(c)}function ye(){i=new Ba({color:14478335,transparent:!0,opacity:0,blending:Na,depthWrite:!1,depthTest:!1}),s=new Ha,s.visible=!1,p.add(s)}function Ce(K,y,D,I,$,Q){const x=[];let b=K,N=y;const U=Math.max(5,Math.floor((D-I)/80));for(let ae=0;ae<=U;ae++){const q=ae/U;x.push(new Qe(b,D+(I-D)*q,N)),b+=(Math.random()-.5)*$,N+=(Math.random()-.5)*$}const V=new Qa(new ei(x),U*4,Q,5,!1),oe=new _t(V,i);return oe.renderOrder=3,s.add(oe),x}function $e(){for(const I of s.children)I.geometry.dispose();s.clear();const K=1+Math.floor(Math.random()*3);let y=0,D=0;for(let I=0;I<K;I++){const $=(Math.random()-.5)*5e3,Q=-(1e3+Math.random()*4500);I===0&&(y=$,D=Q);const x=Ce($,Q,1180,18,110,14),b=2+Math.floor(Math.random()*3);for(let N=0;N<b;N++){const U=x[2+Math.floor(Math.random()*(x.length-4))];Ce(U.x,U.z,U.y,U.y-(160+Math.random()*420),130,7)}}W.value.set(y,1100,D)}function Ze(){if(!pe.lightningEnabled){z.value=0,s.visible=!1,g.toneMappingExposure=J;return}const K=v.value;K>=Z&&(H=K,$e(),Z=K+pe.lightningInterval*(.4+Math.random()*.8));const y=K-H;let D=0;y>=0&&y<.5&&(D=Math.max(0,Math.exp(-y*5.5)*(.5+.5*Math.sin(y*60)))),z.value=D*2.4,s.visible=D>.1,i.opacity=Math.min(1,D*1.7),g.toneMappingExposure=J+D*.75}function Ie(){T=new Ja(w,g.domElement),T.target.set(0,130,-400),T.maxPolarAngle=Math.PI*.49,T.minDistance=30,T.maxDistance=2e3,T.enableDamping=!0}function Ae(){window.addEventListener("keydown",Re),window.addEventListener("keyup",Oe)}function Re(K){const y=K.target&&K.target.tagName;y==="INPUT"||y==="TEXTAREA"||(se[K.code]=!0)}function Oe(K){se[K.code]=!1}function Le(K){const y=(se.ShiftLeft||se.ShiftRight?240:95)*K,D=new Qe,I=new Qe,$=new Qe;w.getWorldDirection(D).normalize(),I.crossVectors(D,w.up).normalize(),$.set(0,0,0),se.KeyW&&$.add(D),se.KeyS&&$.addScaledVector(D,-1),se.KeyD&&$.add(I),se.KeyA&&$.addScaledVector(I,-1),se.KeyE&&($.y+=1),se.KeyQ&&($.y-=1),$.lengthSq()!==0&&($.normalize().multiplyScalar(y),w.position.add($),T.target.add($),w.position.y<2.5&&(w.position.y=2.5))}function ze(){const K=Et.degToRad(90-pe.elevation),y=Et.degToRad(pe.azimuth);if(l.setFromSphericalCoords(1,K,y),M.material.uniforms.sunPosition.value.copy(l),r.position.copy(l).multiplyScalar(1e3),S&&S.material.uniforms.sunDirection.value.copy(l).normalize(),c){c.material.uniforms.sunDirection.value.copy(l).normalize();const D=Et.clamp(1-pe.elevation/28,0,1);c.material.uniforms.sunColor.value.setRGB(1,.95-.22*D,.86-.48*D)}p.remove(M),te.add(M),re&&re.dispose(),re=L.fromScene(te),p.environment=re.texture,te.remove(M),p.add(M),ie=!0}function Ke(){R=requestAnimationFrame(Ke);const K=d.getDelta();v.value+=K,E.value=pe.causticStrength,Le(K),Ze(),T.update(),w.updateMatrixWorld(),S.material.uniforms.invProjection.value.copy(w.projectionMatrixInverse),S.material.uniforms.camWorld.value.copy(w.matrixWorld),S.visible=!1,ie&&(C.update(g,p),ie=!1),c.visible=!1;const y=s.visible;s.visible=!1,g.setRenderTarget(F),g.render(p,w),g.setRenderTarget(null),c.visible=!0,s.visible=y,S.visible=!0,g.render(p,w),o++;const D=performance.now();D-m>=1e3&&(f.value=Math.round(o*1e3/(D-m)),a==null||a(f.value),o=0,m=D)}function Ve(){if(!w||!g||!A)return;const K=A.clientWidth,y=A.clientHeight;w.aspect=K/y,w.updateProjectionMatrix(),g.setSize(K,y);const D=new Yt;g.getDrawingBufferSize(D),F.setSize(D.x,D.y),S.material.uniforms.resolution.value.copy(D)}function Be(){R||(d.start(),Ke())}function Fe(){R&&(cancelAnimationFrame(R),R=null)}function Ne(K){const y={...pe};Object.assign(pe,K),(K.elevation!==y.elevation||K.azimuth!==y.azimuth)&&ze(),S&&(K.clarity!==y.clarity&&(S.material.uniforms.clarity.value=K.clarity),K.waveHeight!==y.waveHeight&&(S.material.uniforms.waveHeight.value=K.waveHeight),K.foamWidth!==y.foamWidth&&(S.material.uniforms.foamWidth.value=K.foamWidth),K.reflection!==y.reflection&&(S.material.uniforms.reflection.value=K.reflection),K.waterColor!==y.waterColor&&S.material.uniforms.waterColor.value.set(K.waterColor)),K.causticStrength!==y.causticStrength&&(E.value=K.causticStrength),K.cloudCoverage!==y.cloudCoverage&&c&&(c.material.uniforms.uCoverage.value=K.cloudCoverage)}function He(){Fe(),window.removeEventListener("keydown",Re),window.removeEventListener("keyup",Oe),g&&(g.dispose(),A==null||A.removeChild(g.domElement)),p==null||p.traverse(K=>{K.geometry&&K.geometry.dispose(),K.material&&(Array.isArray(K.material)?K.material.forEach(y=>y.dispose()):K.material.dispose())}),F==null||F.dispose(),_==null||_.dispose(),re==null||re.dispose(),L==null||L.dispose(),p=null,w=null,g=null,T=null,S=null,M=null,r=null,c=null,s=null,i=null,h.value=!1}return Ht(()=>{He()}),{isReady:h,fps:f,init:Te,start:Be,pause:Fe,dispose:He,handleResize:Ve,updateParams:Ne}}const No={__name:"ShallowWaterOverlay",props:{visible:{type:Boolean,default:!1},elevation:{type:Number,default:30},azimuth:{type:Number,default:150},clarity:{type:Number,default:.085},causticStrength:{type:Number,default:.9},waterColor:{type:String,default:"#2bb3c4"},waveHeight:{type:Number,default:.5},foamWidth:{type:Number,default:2.4},reflection:{type:Number,default:.38},cloudCoverage:{type:Number,default:.58},lightningEnabled:{type:Boolean,default:!0},lightningInterval:{type:Number,default:2}},emits:["ready","error","fps-update"],setup(e,{expose:t,emit:n}){const a=e,h=n,f=ee(null),{isReady:p,fps:w,init:g,start:T,pause:R,dispose:A,handleResize:S,updateParams:F}=Bo({onReady:()=>h("ready"),onError:M=>h("error",M),onFpsUpdate:M=>h("fps-update",M)});_e(()=>a.visible,async M=>{M?(await C(),T()):R()}),_e(()=>[a.elevation,a.azimuth,a.clarity,a.causticStrength,a.waterColor,a.waveHeight,a.foamWidth,a.reflection,a.cloudCoverage,a.lightningEnabled,a.lightningInterval],()=>{_()});async function C(){!f.value||p.value||(await g(f.value),_())}function _(){F({elevation:a.elevation,azimuth:a.azimuth,clarity:a.clarity,causticStrength:a.causticStrength,waterColor:a.waterColor,waveHeight:a.waveHeight,foamWidth:a.foamWidth,reflection:a.reflection,cloudCoverage:a.cloudCoverage,lightningEnabled:a.lightningEnabled,lightningInterval:a.lightningInterval})}function L(){S()}return rn(()=>{window.addEventListener("resize",L),a.visible&&C()}),Ht(()=>{window.removeEventListener("resize",L),A()}),t({isReady:p,fps:w,start:T,pause:R}),(M,r)=>Ye((ne(),le("div",{ref_key:"canvasContainerRef",ref:f,class:"shallow-water-overlay"},null,512)),[[ct,e.visible]])}},Ho=dt(No,[["__scopeId","data-v-e9c0d469"]]),dn="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Wo=`${dn}Cesium.js`,Uo=`${dn}Widgets/widgets.css`;async function Go({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=dn),await qo(Uo,"cesium-widgets-style"),await $o(Wo,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Bt(t,e),t}function Bt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function $o(e,t){return new Promise((n,a)=>{const h=document.getElementById(t);if(h){if(h.getAttribute("data-loaded")==="true"){n();return}h.addEventListener("load",()=>n(),{once:!0}),h.addEventListener("error",()=>a(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const f=document.createElement("script");f.id=t,f.src=e,f.async=!0,f.onload=()=>{f.setAttribute("data-loaded","true"),n()},f.onerror=()=>a(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(f)})}function qo(e,t){return new Promise((n,a)=>{if(document.getElementById(t)){n();return}const f=document.createElement("link");f.id=t,f.rel="stylesheet",f.href=e,f.onload=()=>n(),f.onerror=()=>a(new Error(`样式加载失败: ${e}`)),document.head.appendChild(f)})}const jo="Asia/Shanghai",Xo="UTC+8",Yo=new Intl.DateTimeFormat("zh-CN",{timeZone:jo,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Ko(e,t){var n,a,h,f,p,w,g;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...T)=>Zo(e,t,...T),e.animation.viewModel.timeFormatter=(...T)=>Jo(e,t,...T)),e.timeline){const T=(...R)=>Qo(e,t,...R);e.timeline.makeLabel=T,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=T),(h=(a=e.timeline).updateFromClock)==null||h.call(a),(p=(f=e.timeline).zoomTo)==null||p.call(f,e.clock.startTime,e.clock.stopTime)}(g=(w=e.scene).requestRender)==null||g.call(w)}}function hn(e,t,...n){var w;const a=n.find(Vo)||((w=e==null?void 0:e.clock)==null?void 0:w.currentTime);if(!a)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const h=t.JulianDate.toDate(a),f=Yo.formatToParts(h),p=Object.fromEntries(f.filter(({type:g})=>g!=="literal").map(({type:g,value:T})=>[g,T]));return{year:p.year||"0000",month:p.month||"01",day:p.day||"01",hour:p.hour||"00",minute:p.minute||"00",second:p.second||"00"}}function Vo(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function Zo(e,t,...n){const{year:a,month:h,day:f}=hn(e,t,...n);return`${a}-${h}-${f}`}function Jo(e,t,...n){const{hour:a,minute:h,second:f}=hn(e,t,...n);return`${a}:${h}:${f} ${Xo}`}function Qo(e,t,...n){const{month:a,day:h,hour:f,minute:p}=hn(e,t,...n);return`${a}-${h} ${f}:${p}`}function es({getViewer:e}){let t=null,n=null;function a(){var w;const p=e==null?void 0:e();if(p&&((w=p._cesiumWidget)!=null&&w._creditContainer&&(p._cesiumWidget._creditContainer.style.display="none"),h(),t=setInterval(()=>{const g=document.querySelector(".cesium-credit-container");g&&g.innerHTML.length>0&&(g.innerHTML="",g.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const g=document.createElement("style");g.id="cesium-credit-override",g.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(g),n=g}}function h(){var g;const p=e==null?void 0:e();if(!p)return;(g=p._cesiumWidget)!=null&&g._creditContainer&&(p._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",p._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(T=>{T.style.cssText="display: none !important; visibility: hidden !important;",T.innerHTML=""}),p.scene&&p.scene.frameState&&p.scene.frameState.creditDisplay&&(p.scene.frameState.creditDisplay.hasCredits=()=>!1,p.scene.frameState.creditDisplay.destroy=()=>{})}function f(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:a,cleanupCreditHider:f}}const Vt="经度: --, 纬度: --, 海拔: --米";function ts({getViewer:e,getCesium:t,onCoordinatePick:n}){let a=null,h=null,f=null;const p=ee("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function w(){const F=e==null?void 0:e(),C=t==null?void 0:t();!F||!C||(S(),h=F.scene.canvas,a=new C.ScreenSpaceEventHandler(h),f=()=>{p.value=Vt},h.addEventListener("mouseleave",f),a.setInputAction(_=>{g(_.endPosition,F,C)},C.ScreenSpaceEventType.MOUSE_MOVE),a.setInputAction(_=>{const L=_.endPosition,M=_.startPosition;if(!C.defined(F.terrainProvider))return;const r=F.scene.globe.ellipsoid;if(!F.camera.pickEllipsoid(M,r)){const c=F.camera;c.rotate(C.Cartesian3.UNIT_X,-.002*(L.y-M.y)),c.rotate(C.Cartesian3.UNIT_Y,-.002*(L.x-M.x))}},C.ScreenSpaceEventType.RIGHT_DRAG),a.setInputAction(()=>{},C.ScreenSpaceEventType.RIGHT_DOWN),a.setInputAction(()=>{},C.ScreenSpaceEventType.RIGHT_UP))}function g(F,C,_){const L=T(F,C,_);if(!L){p.value=Vt;return}const M=_.Cartographic.fromCartesian(L);if(!M||!Number.isFinite(M.longitude)||!Number.isFinite(M.latitude)){p.value=Vt;return}const r=_.Math.toDegrees(M.longitude).toFixed(6),l=_.Math.toDegrees(M.latitude).toFixed(6),c=(Number.isFinite(M.height)?M.height:0).toFixed(2);p.value=`经度: ${r}, 纬度: ${l}, 海拔: ${c}米`,typeof n=="function"&&n({lng:Number(r),lat:Number(l),height:Number(c)})}function T(F,C,_){if(!F)return null;const L=C.scene,M=R(F,L,_);if(M)return M;const r=C.camera.getPickRay(F);if(r){const c=L.globe.pick(r,L);if(A(c))return c}const l=C.camera.pickEllipsoid(F,L.globe.ellipsoid);return A(l)?l:null}function R(F,C,_){if(!C.pickPositionSupported||typeof C.pickPosition!="function")return null;const L=typeof C.pick=="function"?C.pick(F):null;if(!_.defined(L))return null;const M=C.pickPosition(F);return A(M)?M:null}function A(F){return!!F&&Number.isFinite(F.x)&&Number.isFinite(F.y)&&Number.isFinite(F.z)}function S(){f&&h&&(h.removeEventListener("mouseleave",f),f=null),h=null,a&&(a.destroy(),a=null)}return{coordinateDisplay:p,setupInteractions:w,cleanupInteractions:S}}function On(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function ns(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function pt(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function Dt(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Bn(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:a,Resource:h,HeightmapTerrainData:f,Rectangle:p,TileAvailability:w,CustomHeightmapTerrainProvider:g}=e;function T(F,C,_,L,M,r){const l=F.tileXYToRectangle(_,L,M);return t(p.intersection(l,C,r))}function R(F){const C=[[[0,0,1,0]]],_=new w(F.tilingScheme,19);for(let L=0;L<C.length;L++){const M=C[L];for(let r=0;r<M.length;r++){const l=M[r];_.addAvailableTileRange(L,l[0],l[1],l[2],l[3])}}return _}function A(F,C,_,L,M){const r=new f({buffer:F._transformBuffer(C),width:F._width,height:F._height,childTileMask:F._getChildTileMask(L,M,_),structure:F._terrainDataStructure});return r._skirtHeight=6e3,F.availability.addAvailableTileRange(_,L,M,L,M),r}class S extends g{constructor(C={}){if(super({...C,ellipsoid:a.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(C.url))throw new n("options.url is required.");this._dataType=C.dataType??"int16",this._url=C.url,this._subdomains=C.subdomains,this._token=C.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=R(this)}get availability(){return this._availability}requestTileGeometry(C,_,L,M){if(L>=this._bottomLevel)return Promise.reject(new Error(`Level ${L} is outside supported range.`));if(L<this._topLevel)return Promise.resolve(new f({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(C,_,L),structure:this._terrainDataStructure}));let r=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const c=this._subdomains[(C+_)%this._subdomains.length];r=r.replace("{s}",c)}r=r.replace("{token}",this._token).replace("{x}",C).replace("{y}",_).replace("{z}",L+1);const l=h.fetchArrayBuffer({url:r,request:M});if(l)return l.then(c=>c.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):ti.inflate(c)).then(c=>A(this,c,L,C,_))}getTileDataAvailable(C,_,L){return L<this._bottomLevel}_transformBuffer(C){let _=2;this._dataType==="float"&&(_=4);const L=C;if(L.length!==22500*_)return null;const M=new ArrayBuffer(_),r=new DataView(M),l=this._width,c=this._height,s=new Uint8Array(l*c*4);for(let i=0;i<c;i++)for(let d=0;d<l;d++){const o=Math.floor(149*i/(c-1)),m=Math.floor(149*d/(l-1)),v=_*(150*o+m);let E;_===4?(r.setInt8(0,L[v]),r.setInt8(1,L[v+1]),r.setInt8(2,L[v+2]),r.setInt8(3,L[v+3]),E=r.getFloat32(0,!0)):E=L[v]+256*L[v+1],(E>1e4||E<-2e3)&&(E=0);const z=(E+1e3)/.001,W=4*(i*l+d);s[W]=z/65536,s[W+1]=(z-256*s[W]*256)/256,s[W+2]=z-256*s[W]*256-256*s[W+1],s[W+3]=255}return s}_getVHeightBuffer(){let C=this._vHeightBuffer;if(!t(C)){C=new Uint8ClampedArray(this._width*this._height*4);for(let _=0;_<this._width*this._height*4;)C[_++]=15,C[_++]=66,C[_++]=64,C[_++]=255;this._vHeightBuffer=C}return C}_getChildTileMask(C,_,L){const M=new p,r=this._tilingScheme,l=this._rectangles,c=r.tileXYToRectangle(C,_,L);let s=0;for(let i=0;i<l.length&&s!==15;i++){const d=l[i];if(d.maxLevel<=L)continue;const o=d.rectangle,m=p.intersection(o,c,M);t(m)&&(T(r,o,2*C,2*_,L+1,M)&&(s|=4),T(r,o,2*C+1,2*_,L+1,M)&&(s|=8),T(r,o,2*C,2*_+1,L+1,M)&&(s|=1),T(r,o,2*C+1,2*_+1,L+1,M)&&(s|=2))}return s}}return S}function as({getViewer:e,getCesium:t,activeBasemap:n,applyBasemap:a,resolvePresetLayerIds:h,message:f,validationTimeoutMs:p=5e3,circuitBreakThreshold:w=3}){const g=new Map,T=new Set,R={value:!1};let A=null,S=[],F=[];function C(s,i={}){return s?T.has(s)&&!i.forceReload?(R.value=!0,!1):a(s,i)?(_(s),!0):(L(s),!1):!1}function _(s){var z,W;r();const i=e==null?void 0:e();if(!(i!=null&&i.imageryLayers))return;const d=h(s),o=[];for(let Z=0;Z<i.imageryLayers.length;Z++){const H=i.imageryLayers.get(Z);(z=H==null?void 0:H.imageryProvider)!=null&&z._descriptorId&&d.includes(H.imageryProvider._descriptorId)&&o.push(H)}if(!o.length)return;S=o;let m=!1;const v=()=>{m=!0,r(),g.delete(s),T.has(s)&&(T.delete(s),R.value=T.size>0)},E=Z=>{m||(L(s),r())};for(const Z of S){const H=Z.imageryProvider;if(H!=null&&H.errorEvent&&(H.errorEvent.addEventListener(E),F.push(()=>H.errorEvent.removeEventListener(E))),H!=null&&H.ready){v();return}(W=H==null?void 0:H.readyPromise)!=null&&W.then&&H.readyPromise.then(v).catch(E)}A=setTimeout(()=>{m||L(s)},p)}function L(s){const i=(g.get(s)||0)+1;g.set(s,i),i>=w&&(T.add(s),R.value=!0,M(s))}function M(s){var d,o,m,v,E;const i="custom_China_Blender_preset_2";if(s===i){const z="imagery_tianditu_preset";T.has(z)?(o=f==null?void 0:f.error)==null||o.call(f,"所有底图均加载失败，请检查网络",{closable:!0}):((d=f==null?void 0:f.warning)==null||d.call(f,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=z);return}if(!T.has(i))(m=f==null?void 0:f.warning)==null||m.call(f,"底图加载失败，已降级到默认底图",{closable:!0}),n.value=i;else{const z="imagery_tianditu_preset";T.has(z)?(E=f==null?void 0:f.error)==null||E.call(f,"所有底图均加载失败，请检查网络",{closable:!0}):((v=f==null?void 0:f.warning)==null||v.call(f,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=z)}}function r(){A&&(clearTimeout(A),A=null);for(const s of F)try{s()}catch{}F=[],S=[]}function l(){g.clear(),T.clear(),R.value=!1,r()}function c(){r(),g.clear(),T.clear(),R.value=!1}return{switchBasemap:C,resetCircuitBreaker:l,isCircuitOpen:R,cleanup:c}}const St=["0","1","2","3","4","5","6","7"],wt="https://t{s}.tianditu.gov.cn/",is="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",rs=96188,Ct="custom-xyz",Nn="webgis_custom_basemap_url",os="cesium_tdt_label_layer_visible",Hn="cesium_tdt_boundary_layer_visible",Wn="cesium_tdt_text_label_layer_visible",Un="cesium_osm_buildings_visible",Gn="cesium_google_photorealistic_3d_tiles_visible";function ss(){return ni.map(e=>({...e,description:ls(e.value),source:"preset"}))}function ls(e){const t=Lt(e);if(!t.length)return"复合底图";const n=t.map(a=>{const h=cn(a);return h?h.name:a});return n.slice(0,3).join(" + ")+(n.length>3?" ...":"")}const $n=ss(),qn=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function cs({getViewer:e,getCesium:t,message:n,backendBaseUrl:a,tiandituToken:h,cesiumIonToken:f}){let p=null,w=null,g=null,T=null,R=0,A=null,S=null,F=0,C=0,_=[];const L=()=>jn(h),M=()=>jn(f),r=[],l=ee([]),c=new Map,s=new Map,i=new Map,d=new Map,o="cesium_custom_xyz_basemap_url",m=ee(En),v=ee("tianditu"),E=ee(On(Nn,"")||On(o,"")),z=pt(os,!1),W=ee(pt(Hn,z??!1)),Z=ee(pt(Wn,z??!1)),H=ee(pt(Un,!1)),J=ee(pt(Gn,!1)),se=xe(()=>[...$n.map(u=>u.value!=="custom"?u:{...u,description:E.value?E.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!E.value}),...l.value]),ie=as({getViewer:e,getCesium:t,activeBasemap:m,applyBasemap:$,resolvePresetLayerIds:Lt,message:n}),re=xe(()=>ie.isCircuitOpen.value),te=xe(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:W.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:Z.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:H.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:J.value}]);_e(m,u=>{!(e!=null&&e())||!(t!=null&&t())||$(u)}),_e(E,u=>{ns(Nn,u)}),_e(v,async u=>{!(e!=null&&e())||!(t!=null&&t())||await x(u)}),_e(W,u=>{Dt(Hn,u),Le()}),_e(Z,u=>{Dt(Wn,u),Le()}),_e(H,u=>{Dt(Un,u),Fe()}),_e(J,u=>{Dt(Gn,u),Ne()});function pe(){const u=t==null?void 0:t();if(!u)return[];c.clear(),s.clear();const P=$n.map(G=>{const ce=new u.ProviderViewModel({name:G.label,tooltip:fs(G),category:"项目底图",iconUrl:Kn(ms(G.value),ps(G.value,G.label)),creationFunction:()=>X(G.value)});return c.set(G.value,ce),s.set(ce,G.value),ce}),Y=j();return l.value=Y.map((G,ce)=>{const ue=String((G==null?void 0:G.name)||`官方底图 ${ce+1}`).trim(),be=ys(ue,ce);return c.set(be,G),s.set(G,be),{value:be,label:`官方 · ${ue}`,description:String((G==null?void 0:G.tooltip)||ue),source:"official"}}),[...P,...Y]}function Te(){const u=t==null?void 0:t();return u?(i.clear(),d.clear(),qn.map(P=>{const Y=new u.ProviderViewModel({name:P.label,tooltip:P.description||P.label,category:"项目地形",iconUrl:Kn(us(P.value),ds(P.value)),creationFunction:()=>N(P.value)});return i.set(P.value,Y),d.set(Y,P.value),Y})):[]}function ke(u=[]){return c.get(m.value)||u[0]}function Ee(u=[]){return i.get(v.value)||u[0]}function j(){const u=t==null?void 0:t();if(typeof(u==null?void 0:u.createDefaultImageryProviderViewModels)!="function")return[];try{return u.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function X(u){return Lt(u).length>0?O(u):u==="google"?we():u===Ct?ye():ve()}function O(u){const P=t==null?void 0:t();if(!P)return[];const Y=Lt(u);if(!Y.length)return ve();const G=L(),ce=E.value;return yi(P,Y,{tiandituTk:G,customUrl:ce})}function ve(){const u=t==null?void 0:t();return[new u.UrlTemplateImageryProvider({url:`${wt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${L()}`,subdomains:St,tilingScheme:new u.WebMercatorTilingScheme,maximumLevel:18})]}function we(){const u=t==null?void 0:t();return[new u.UrlTemplateImageryProvider({url:`${a}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new u.WebMercatorTilingScheme,maximumLevel:20})]}function ye(){const u=t==null?void 0:t(),P=Yn(E.value);return P.valid?[new u.UrlTemplateImageryProvider({url:P.url,subdomains:P.subdomains,tilingScheme:new u.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(P.message,{closable:!0}),ve())}function Ce(){const u=t==null?void 0:t();return new u.UrlTemplateImageryProvider({url:`${wt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${L()}`,subdomains:St,tilingScheme:new u.WebMercatorTilingScheme,maximumLevel:10})}function $e(){const u=t==null?void 0:t();return new u.UrlTemplateImageryProvider({url:`${wt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${L()}`,subdomains:St,tilingScheme:new u.WebMercatorTilingScheme,maximumLevel:18})}function Ze(){var Me,We,it,yt,bt;Ie();const u=t==null?void 0:t(),P=(We=(Me=e==null?void 0:e())==null?void 0:Me.baseLayerPicker)==null?void 0:We.viewModel;if(!P||!((it=u==null?void 0:u.knockout)!=null&&it.getObservable))return;const Y=u.knockout.getObservable(P,"selectedImagery"),G=u.knockout.getObservable(P,"selectedTerrain"),ce=[],ue=(yt=Y==null?void 0:Y.subscribe)==null?void 0:yt.call(Y,ht=>{const qe=s.get(ht);qe&&(m.value!==qe&&(m.value=qe),Oe())}),be=(bt=G==null?void 0:G.subscribe)==null?void 0:bt.call(G,ht=>{const qe=d.get(ht);qe&&(v.value!==qe&&(v.value=qe),b(qe))});ue&&ce.push(ue),be&&ce.push(be),_=ce}function Ie(){_.forEach(u=>{var P;return(P=u==null?void 0:u.dispose)==null?void 0:P.call(u)}),_=[]}function Ae(){return Le(),Fe(),Ne(),!0}function Re(){const u=e==null?void 0:e();if(u!=null&&u.imageryLayers)for(;r.length;){const P=r.pop();try{u.imageryLayers.remove(P,!0)}catch{}}}function Oe(){var u,P,Y;Le(),Fe(),Ne(),(Y=(P=(u=e==null?void 0:e())==null?void 0:u.scene)==null?void 0:P.requestRender)==null||Y.call(P)}function Le(){var P,Y;const u=e==null?void 0:e();!u||!(t!=null&&t())||(W.value?ze():Ve(),Z.value?Ke():Be(),(Y=(P=u.scene).requestRender)==null||Y.call(P))}function ze(){var P,Y,G,ce;const u=e==null?void 0:e();if(!(u!=null&&u.imageryLayers)||p)return p&&((Y=(P=u==null?void 0:u.imageryLayers)==null?void 0:P.raiseToTop)==null||Y.call(P,p)),p;try{return p=u.imageryLayers.addImageryProvider(Ce()),(ce=(G=u.imageryLayers).raiseToTop)==null||ce.call(G,p),p}catch(ue){return n.error("天地图国界线图层加载失败",ue),null}}function Ke(){var P,Y,G,ce;const u=e==null?void 0:e();if(!(u!=null&&u.imageryLayers)||w)return w&&((Y=(P=u==null?void 0:u.imageryLayers)==null?void 0:P.raiseToTop)==null||Y.call(P,w)),w;try{return w=u.imageryLayers.addImageryProvider($e()),(ce=(G=u.imageryLayers).raiseToTop)==null||ce.call(G,w),w}catch(ue){return n.error("天地图文字标注图层加载失败",ue),null}}function Ve(){const u=e==null?void 0:e();if(!(!p||!(u!=null&&u.imageryLayers))){try{u.imageryLayers.remove(p,!0)}catch{}p=null}}function Be(){const u=e==null?void 0:e();if(!(!w||!(u!=null&&u.imageryLayers))){try{u.imageryLayers.remove(w,!0)}catch{}w=null}}async function Fe(){var P,Y,G;const u=e==null?void 0:e();!((P=u==null?void 0:u.scene)!=null&&P.primitives)||!(t!=null&&t())||(H.value?await y():D(),(G=(Y=u.scene).requestRender)==null||G.call(Y))}async function Ne(){var P,Y,G;const u=e==null?void 0:e();!((P=u==null?void 0:u.scene)!=null&&P.primitives)||!(t!=null&&t())||(J.value?await He():K(),(G=(Y=u.scene).requestRender)==null||G.call(Y))}async function He(){var G,ce,ue;const u=e==null?void 0:e(),P=t==null?void 0:t();if(!((G=u==null?void 0:u.scene)!=null&&G.primitives))return null;if(A)return u.scene.globe.show=!1,A;if(S)return S;if(typeof(P==null?void 0:P.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),J.value=!1,null;const Y=++F;Bt(P,M()),S=P.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const be=await S;return Y!==F||!J.value?(Xn(be),null):(A=u.scene.primitives.add(be),u.scene.globe.show=!1,u.scene.skyAtmosphere.show=!0,(ue=(ce=u.scene).requestRender)==null||ue.call(ce),A)}catch(be){return Y!==F||(J.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",be)),null}finally{Y===F&&(S=null)}}function K(){var P,Y,G;const u=e==null?void 0:e();if(F+=1,S=null,!A||!((P=u==null?void 0:u.scene)!=null&&P.primitives)){(Y=u==null?void 0:u.scene)!=null&&Y.globe&&(u.scene.globe.show=!0);return}try{u.scene.primitives.remove(A)}catch{}A=null,(G=u==null?void 0:u.scene)!=null&&G.globe&&(u.scene.globe.show=!0)}async function y(){var G,ce,ue,be;const u=e==null?void 0:e(),P=t==null?void 0:t();if(!((G=u==null?void 0:u.scene)!=null&&G.primitives)||g)return g;if(T)return T;if(typeof((ce=P==null?void 0:P.Cesium3DTileset)==null?void 0:ce.fromIonAssetId)!="function"&&typeof(P==null?void 0:P.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),H.value=!1,null;const Y=++R;Bt(P,M()),await I(),T=hs(P,{maximumScreenSpaceError:8});try{const Me=await T;return Y!==R||!H.value?(Xn(Me),null):(g=u.scene.primitives.add(Me),(be=(ue=u.scene).requestRender)==null||be.call(ue),g)}catch(Me){return Y!==R||(H.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",Me)),null}finally{Y===R&&(T=null)}}function D(){var P,Y,G;const u=e==null?void 0:e();if(R+=1,T=null,!(!g||!((P=u==null?void 0:u.scene)!=null&&P.primitives))){try{u.scene.primitives.remove(g)}catch{}g=null,(G=(Y=u.scene).requestRender)==null||G.call(Y)}}async function I(){if(v.value==="cesiumWorld")return!0;v.value="cesiumWorld";const u=await x("cesiumWorld");return u||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),u}function $(u,P={}){var ue,be,Me;const Y=e==null?void 0:e();if(!Y||!(t!=null&&t()))return!1;fi(),Re();const G=(ue=Y.baseLayerPicker)==null?void 0:ue.viewModel,ce=c.get(u);if(G&&ce){if(P.forceReload&&G.selectedImagery===ce){const We=c.get(En)||c.get("tianditu");We&&We!==ce&&(G.selectedImagery=We)}return G.selectedImagery!==ce&&(G.selectedImagery=ce),Oe(),!0}try{return X(u).forEach(it=>{it&&r.push(Y.imageryLayers.addImageryProvider(it))}),Le(),(Me=(be=Y.scene).requestRender)==null||Me.call(be),!0}catch(We){return n.error("地图源切换失败",We),!1}}function Q(){return x(v.value)}async function x(u){var Me,We,it,yt,bt,ht,qe,mn,pn,gn,vn;const P=e==null?void 0:e(),Y=t==null?void 0:t();if(!P||!Y)return!1;const G=(Me=P.baseLayerPicker)==null?void 0:Me.viewModel,ce=i.get(u);if(G&&ce)return G.selectedTerrain!==ce&&(G.selectedTerrain=ce),b(u),(it=(We=P.scene).requestRender)==null||it.call(We),!0;const ue=++C;if(u==="ellipsoid")return P.terrainProvider=new Y.EllipsoidTerrainProvider,b(u),(bt=(yt=P.scene).requestRender)==null||bt.call(yt),!0;if(u==="cesiumWorld")try{const Je=await U();return ue!==C?!1:(P.terrainProvider=Je,b(u),(qe=(ht=P.scene).requestRender)==null||qe.call(ht),!0)}catch(Je){return ue!==C||(P.terrainProvider=new Y.EllipsoidTerrainProvider,b("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",Je)),!1}if(u==="arcgisWorld")try{const Je=await V();return ue!==C?!1:(P.terrainProvider=Je,b(u),(pn=(mn=P.scene).requestRender)==null||pn.call(mn),!0)}catch(Je){return ue!==C||(P.terrainProvider=new Y.EllipsoidTerrainProvider,b("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",Je)),!1}const be=Bn(Y);try{return P.terrainProvider=new be({url:`${wt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:St,token:L()}),b(u),(vn=(gn=P.scene).requestRender)==null||vn.call(gn),!0}catch(Je){return P.terrainProvider=new Y.EllipsoidTerrainProvider,b("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",Je),!1}}function b(u){var Y;const P=e==null?void 0:e();(Y=P==null?void 0:P.scene)!=null&&Y.globe&&(P.scene.globe.depthTestAgainstTerrain=u!=="ellipsoid")}function N(u){const P=t==null?void 0:t();if(u==="ellipsoid")return new P.EllipsoidTerrainProvider;if(u==="cesiumWorld")return U().catch(G=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",G),oe(u,"ellipsoid"),new P.EllipsoidTerrainProvider));if(u==="arcgisWorld")return V().catch(G=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",G),oe(u,"ellipsoid"),new P.EllipsoidTerrainProvider));const Y=Bn(P);try{return new Y({url:`${wt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:St,token:L()})}catch(G){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",G),new P.EllipsoidTerrainProvider}}async function U(){var Y,G;const u=t==null?void 0:t();Bt(u,M());const P={requestWaterMask:!1,requestVertexNormals:!0};if(typeof u.createWorldTerrainAsync=="function")return u.createWorldTerrainAsync(P);if(typeof u.createWorldTerrain=="function")return u.createWorldTerrain(P);if(typeof((Y=u.CesiumTerrainProvider)==null?void 0:Y.fromIonAssetId)=="function")return u.CesiumTerrainProvider.fromIonAssetId(1,P);if((G=u.IonResource)!=null&&G.fromAssetId&&u.CesiumTerrainProvider){const ce=await u.IonResource.fromAssetId(1);return new u.CesiumTerrainProvider({url:ce,...P})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function V(){var P;const u=t==null?void 0:t();if(typeof((P=u==null?void 0:u.ArcGISTiledElevationTerrainProvider)==null?void 0:P.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return u.ArcGISTiledElevationTerrainProvider.fromUrl(is)}function oe(u,P){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{v.value===u&&(v.value=P)},0)}function ae({overlayId:u,value:P}){if(u==="tdt-boundaries"){W.value=!!P;return}if(u==="tdt-text-labels"){Z.value=!!P;return}if(u==="cesium-osm-buildings"){H.value=!!P;return}u==="google-photorealistic-3d-tiles"&&(J.value=!!P)}function q({url:u}){const P=String(u||"").trim(),Y=Yn(P);if(!Y.valid){n.warning(Y.message,{closable:!0});return}if(E.value=P,m.value===Ct){$(Ct,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}m.value=Ct,n.success("已切换到自定义 XYZ 图源")}function B(){Re(),Ve(),Be(),D(),K(),Ie()}return{activeBasemap:m,activeTerrain:v,customXyzBasemapUrl:E,basemapOptions:se,terrainOptions:qn,overlayOptions:te,createImageryProviderViewModels:pe,createTerrainProviderViewModels:Te,getSelectedImageryProviderViewModel:ke,getSelectedTerrainProviderViewModel:Ee,bindLayerPickerStateSync:Ze,addBaseImageryLayers:Ae,initCustomTerrain:Q,applyBasemap:$,applyTerrain:x,handleOverlayToggle:ae,handleCustomBasemapSubmit:q,cleanupLayers:B,basemapSwitcher:ie,basemapCircuitOpen:re,resetCircuitBreaker:ie.resetCircuitBreaker}}function us(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function ds(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function jn(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Xn(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function hs(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const a=await e.Cesium3DTileset.fromIonAssetId(rs,t);return!a.style&&typeof e.Cesium3DTileStyle=="function"&&(a.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),a}return e.createOsmBuildingsAsync(t)}function fs(e){return e.value===Ct?`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`:e.description||e.label}function ms(e){const t=Lt(e);if(!t.length)return"#37d67a";const n=cn(t[0]);if(!n)return"#37d67a";const a=n.category;return a==="imagery"?"#5ea1ff":a==="vector"?"#37d67a":a==="terrain"?"#d0a449":a==="label"?"#a78bfa":a==="theme"?"#f59e0b":a==="custom"?"#f472b6":"#37d67a"}function ps(e,t){return String(t||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function Yn(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const a=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let h=[];return a?(h=gs(a[1],a[2]),n=n.replace(a[0],"{s}")):/\{s\}/i.test(n)&&(h=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:h}:vs(n)?{valid:!0,message:"",url:n,subdomains:h}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:h}}function gs(e,t){const n=String(e||"").charCodeAt(0),a=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(a))return[];const h=n<=a?1:-1,f=[];for(let p=n;h>0?p<=a:p>=a;p+=h)f.push(String.fromCharCode(p));return f}function vs(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function ys(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function Kn(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),a=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(a)}`}function bs({getViewer:e,getCesium:t,message:n}){function a(p){const w=e==null?void 0:e(),g=t==null?void 0:t();if(!w||!g)return;const T=typeof p=="number"?p:2;w.camera.flyTo({destination:g.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-g.Math.PI_OVER_TWO,roll:0},duration:T})}function h(){const p=e==null?void 0:e(),w=t==null?void 0:t();!p||!w||p.camera.flyTo({destination:w.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:w.Math.toRadians(0),pitch:w.Math.toRadians(-25),roll:0},duration:3})}async function f(){const p=e==null?void 0:e(),w=t==null?void 0:t();if(!(!p||!w))try{const g=await w.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");p.scene.primitives.add(g),p.flyTo(g,{duration:3,offset:new w.HeadingPitchRange(w.Math.toRadians(0),w.Math.toRadians(-25),g.boundingSphere.radius*2.5)})}catch(g){n.error(`加载模型失败: ${g}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:a,flyToEverest:h,loadCustomTileset:f}}const xs="tileset.json";let kt=null;async function Vn(){if(kt)return kt;const[{decompressBuffer:e},{parseShpPartsToGeoJSON:t}]=await Promise.all([en(()=>import("./decompressFile-DiMYlfaO.js").then(n=>n.f),__vite__mapDeps([4,5]),import.meta.url),en(()=>import("./shpParser-BSjSX4XU.js").then(n=>n.s),__vite__mapDeps([6,5,7,2,3,8,9,10,11,12,13,14,15]),import.meta.url)]);return kt={decompressBuffer:e,parseShpPartsToGeoJSON:t},kt}function Zt(e){const t=e.lastIndexOf(".");return t===-1?"":e.slice(t+1).toLowerCase()}function st(e,t,n,a){if(!(!e||!t||!n))try{a==="3dtiles"&&n.boundingSphere?e.flyTo(n,{duration:2,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-30),n.boundingSphere.radius*2)}):n.entities&&n.entities.values.length>0&&e.flyTo(n,{duration:2})}catch{}}function ft(e){return URL.createObjectURL(e)}function je(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function _s({getViewer:e,getCesium:t,message:n}){const a=ee([]),h=ee(null);let f=0;async function p(i){const d=t(),o=e();if(!d||!o)throw new Error("Cesium 未初始化");const m=ft(i);try{const v=await d.GeoJsonDataSource.load(m,{stroke:d.Color.fromCssColorString("#3ddc84"),fill:d.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:d.Color.fromCssColorString("#3ddc84"),markerSize:24}),E=`geojson_${++f}`;v.name=i.name,await o.dataSources.add(v),st(o,d,v,"geojson");const z={id:E,name:i.name,type:"geojson",entity:v,blobUrl:m};return a.value=[...a.value,z],n.success(`GeoJSON "${i.name}" 加载成功`),z}catch(v){throw je(m),v}}async function w(i){const d=t(),o=e();if(!d||!o)throw new Error("Cesium 未初始化");const m=ft(i);try{const v=await d.KmlDataSource.load(m,{camera:o.scene.camera,canvas:o.scene.canvas}),E=`kml_${++f}`;v.name=i.name,await o.dataSources.add(v),st(o,d,v,"kml");const z={id:E,name:i.name,type:"kml",entity:v,blobUrl:m};return a.value=[...a.value,z],n.success(`KML "${i.name}" 加载成功`),z}catch(v){throw je(m),v}}async function g(i){const d=t(),o=e();if(!d||!o)throw new Error("Cesium 未初始化");const m=ft(i);try{const v=await d.KmlDataSource.load(m,{camera:o.scene.camera,canvas:o.scene.canvas}),E=`kmz_${++f}`;v.name=i.name,await o.dataSources.add(v),st(o,d,v,"kmz");const z={id:E,name:i.name,type:"kmz",entity:v,blobUrl:m};return a.value=[...a.value,z],n.success(`KMZ "${i.name}" 加载成功`),z}catch{return je(m),await T(i)}}async function T(i){const d=t(),o=e(),m=await i.arrayBuffer(),{decompressBuffer:v}=await Vn(),z=(await v(m,i.name)).find(J=>{var se;return J.ext==="kml"||((se=J.name)==null?void 0:se.toLowerCase().endsWith(".kml"))});if(!z)throw new Error("KMZ 压缩包中未找到 KML 文件");let W;typeof z.content=="string"?W=z.content:z.content instanceof ArrayBuffer||z.content instanceof Uint8Array?W=di(z.content):W=String(z.content||"");const Z=new Blob([W],{type:"application/vnd.google-earth.kml+xml"}),H=URL.createObjectURL(Z);try{const J=await d.KmlDataSource.load(H,{camera:o.scene.camera,canvas:o.scene.canvas}),se=`kmz_${++f}`;J.name=i.name,await o.dataSources.add(J),st(o,d,J,"kmz");const ie={id:se,name:i.name,type:"kmz",entity:J};return a.value=[...a.value,ie],n.success(`KMZ "${i.name}" 加载成功（手动解压）`),ie}finally{URL.revokeObjectURL(H)}}async function R(i,d=[]){const o=t(),m=e();if(!o||!m)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:v}=await Vn(),E={shp:await i.arrayBuffer()};for(const ie of d){const re=Zt(ie.name);re==="dbf"&&(E.dbf=await ie.arrayBuffer()),re==="shx"&&(E.shx=await ie.arrayBuffer()),re==="prj"&&(E.prj=await ie.arrayBuffer()),re==="cpg"&&(E.cpg=await ie.arrayBuffer())}const z=await v(E),W=Array.isArray(z)?z:[z],Z=W.reduce((ie,re)=>{var te;return ie+(((te=re==null?void 0:re.features)==null?void 0:te.length)||0)},0),H=W.length===1?W[0]:{type:"FeatureCollection",features:W.flatMap(ie=>(ie==null?void 0:ie.features)||[])},J=new Blob([JSON.stringify(H)],{type:"application/geo+json"}),se=URL.createObjectURL(J);try{const ie=await o.GeoJsonDataSource.load(se,{stroke:o.Color.fromCssColorString("#ffcc00"),fill:o.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:o.Color.fromCssColorString("#ffcc00"),markerSize:20}),re=`shp_${++f}`;ie.name=i.name,await m.dataSources.add(ie),st(m,o,ie,"shp");const te={id:re,name:i.name,type:"shp",entity:ie};return a.value=[...a.value,te],n.success(`Shapefile "${i.name}" 加载成功 (${Z} 个要素)`),URL.revokeObjectURL(se),te}catch(ie){throw URL.revokeObjectURL(se),ie}}async function A(i){const d=t(),o=e();if(!d||!o)throw new Error("Cesium 未初始化");const m=ft(i);let v=null;try{v=await L(i)}catch{}if(v)try{const E=await r(d,o,m,i.name,v),W={id:`gltf_${++f}`,name:i.name,type:"gltf",entity:E,blobUrl:m};return a.value=[...a.value,W],n.success(`3D 模型 "${i.name}" 加载成功 (${v.lng.toFixed(4)}, ${v.lat.toFixed(4)}, ${v.height.toFixed(1)}m)`),W}catch(E){throw je(m),E}return h.value&&je(h.value.blobUrl),h.value={file:i,blobUrl:m,name:i.name},{needsCoordInput:!0,file:i}}async function S(i){const d=t(),o=e();if(!h.value)throw new Error("没有等待确认的模型文件");const{blobUrl:m,name:v}=h.value;try{const E=await r(d,o,m,v,i),W={id:`gltf_${++f}`,name:v,type:"gltf",entity:E,blobUrl:m};a.value=[...a.value,W],n.success(`3D 模型 "${v}" 加载成功 (${i.lng.toFixed(4)}, ${i.lat.toFixed(4)}, ${i.height.toFixed(1)}m)`);const Z=d.Cartesian3.fromDegrees(i.lng,i.lat,i.height+500);return o.camera.flyTo({destination:Z,orientation:{heading:d.Math.toRadians(0),pitch:d.Math.toRadians(-30),roll:0},duration:2}),h.value=null,W}catch(E){throw je(m),h.value=null,E}}function F(){h.value&&(je(h.value.blobUrl),h.value=null)}async function C(i){const d=t(),o=e();if(!d||!o)throw new Error("Cesium 未初始化");const m=ft(i);try{const v=await d.CzmlDataSource.load(m),E=`czml_${++f}`;v.name=i.name,await o.dataSources.add(v),st(o,d,v,"czml");const z={id:E,name:i.name,type:"czml",entity:v,blobUrl:m};return a.value=[...a.value,z],n.success(`CZML "${i.name}" 加载成功`),z}catch(v){throw je(m),v}}async function _(i){const d=t(),o=e();if(!d||!o)throw new Error("Cesium 未初始化");const m=ft(i);try{const v=await d.Cesium3DTileset.fromUrl(m),E=`tileset_${++f}`;o.scene.primitives.add(v);const z={id:E,name:i.name,type:"3dtiles",entity:v,blobUrl:m};return a.value=[...a.value,z],st(o,d,v,"3dtiles"),n.success(`3D Tiles "${i.name}" 加载成功`),z}catch(v){throw je(m),v}}async function L(i){var v,E,z,W,Z;const d=Zt(i.name);let o;if(d==="gltf"){const H=await i.text();o=JSON.parse(H)}else{const H=await i.arrayBuffer();o=M(H)}if(!o)return null;if((v=o.extensionsUsed)!=null&&v.includes("CESIUM_RTC")&&((z=(E=o.extensions)==null?void 0:E.CESIUM_RTC)!=null&&z.center)){const H=o.extensions.CESIUM_RTC.center;if(H.length>=3){const J=t();if(J){const se=new J.Cartesian3(H[0],H[1],H[2]),ie=J.Cartographic.fromCartesian(se);return{lng:J.Math.toDegrees(ie.longitude),lat:J.Math.toDegrees(ie.latitude),height:ie.height}}}}const m=(W=o.asset)==null?void 0:W.extras;if(m){const H=m.longitude??m.lng,J=m.latitude??m.lat,se=m.height??m.altitude??m.alt??0;if(H!=null&&J!=null)return{lng:Number(H),lat:Number(J),height:Number(se)}}if(((Z=o.nodes)==null?void 0:Z.length)>0&&o.nodes[0].matrix){const H=o.nodes[0].matrix;if(H.length>=16){const J=H[12],se=H[13],ie=H[14];if(Math.abs(J)>1e5||Math.abs(se)>1e5){const re=t();if(re)try{const te=new re.Cartesian3(J,se,ie),pe=re.Cartographic.fromCartesian(te);return{lng:re.Math.toDegrees(pe.longitude),lat:re.Math.toDegrees(pe.latitude),height:pe.height}}catch{}}}}return null}function M(i){if(i.byteLength<20)return null;const d=new DataView(i);if(d.getUint32(0,!0)!==1179937895)return null;const m=d.getUint32(12,!0);if(d.getUint32(16,!0)!==1313821514)return null;const E=new Uint8Array(i,20,m),z=new TextDecoder().decode(E);try{return JSON.parse(z)}catch{return null}}async function r(i,d,o,m,v){const{lng:E,lat:z,height:W}=v,Z=i.Cartesian3.fromDegrees(E,z,W),H=new i.HeadingPitchRoll(0,0,0),J=i.Transforms.localFrameToFixedFrameGenerator("north","west"),se=await i.Model.fromGltfAsync({url:o,modelMatrix:i.Transforms.headingPitchRollToFixedFrame(Z,H,i.Ellipsoid.WGS84,J),scale:1,show:!0});return se.name=m,d.scene.primitives.add(se),se}async function l(i){const d=e(),o=t();if(!d||!o)throw n.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const m=Zt(i.name);try{switch(m){case"geojson":case"json":return i.name.toLowerCase().includes(xs)?await _(i):await p(i);case"kml":return await w(i);case"kmz":return await g(i);case"shp":return await R(i);case"glb":case"gltf":return await A(i);case"czml":return await C(i);default:throw n.error(`不支持的文件格式: .${m}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${m}`)}}catch(v){throw n.error(`加载 "${i.name}" 失败: ${v.message||v}`),v}}function c(i){const d=a.value.find(m=>m.id===i);if(!d)return;const o=e();if(o){try{d.type==="3dtiles"?o.scene.primitives.remove(d.entity):o.dataSources.remove(d.entity,!0)}catch{}d.blobUrl&&je(d.blobUrl),a.value=a.value.filter(m=>m.id!==i),n.info(`已移除 "${d.name}"`)}}function s(){var o,m,v,E,z;const i=e();if(!i){a.value=[];return}for(const W of a.value){try{W.type==="3dtiles"?i.scene.primitives.remove(W.entity):i.dataSources.remove(W.entity,!0)}catch{}W.blobUrl&&je(W.blobUrl)}if(Array.isArray((o=i.dataSources)==null?void 0:o.dataSources)){const W=i.dataSources.dataSources.slice();for(const Z of W)if(Z&&!Z.isBaseLayerPickerDataSource)try{i.dataSources.remove(Z,!0)}catch{}}const d=t();if(d&&Array.isArray((v=(m=i.scene)==null?void 0:m.primitives)==null?void 0:v.primitives)){const W=i.scene.primitives.primitives.slice();for(const Z of W)if(!(!Z||!(Z instanceof d.Cesium3DTileset||Z instanceof d.Model||Z.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(Z.name||"")))))try{i.scene.primitives.remove(Z)}catch{}}a.value=[],F();try{(z=(E=i.scene).requestRender)==null||z.call(E)}catch{}n.info("已清除所有导入数据")}return{loadDataFile:l,loadedDataSources:a,removeDataSource:c,clearAllDataSources:s,pendingGltfFile:h,loadGltfWithUserCoords:S,cancelPendingGltf:F}}const Ss="cesium_tool_panel_open",at={low:{stepCount:32,maxDistance:2e5,label:"低"},medium:{stepCount:48,maxDistance:36e4,label:"中"},high:{stepCount:64,maxDistance:5e5,label:"高"},ultra:{stepCount:80,maxDistance:7e5,label:"超高"}};function ws({fluidPanelRef:e,sceneActions:t={},wind:n={},modelManager:a=null,cameraEnhanced:h=null,heightSampler:f=null,panelStorageKey:p=Ss}={}){const w=ee(pt(p,!0)),g=ee({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1,volumetricClouds:!1}),T=ee({enableLighting:!0,showGroundAtmosphere:!0,dynamicAtmosphereLighting:!0,dynamicAtmosphereLightingFromSun:!0,atmosphereLightIntensity:5.5,atmosphereHueShift:-.015,atmosphereSaturationShift:.08,atmosphereBrightnessShift:.02,lightingFadeInDistance:0,lightingFadeOutDistance:Number.MAX_SAFE_INTEGER,nightFadeInDistance:0,nightFadeOutDistance:Number.MAX_SAFE_INTEGER,fogEnabled:!1,fogDensity:12e-5,fogMinimumBrightness:.035,sunShow:!0,moonShow:!0,skyBoxShow:!0}),R=ee({dayNightEnabled:!1,nightFactor:0,moonLightEnabled:!1,moonLightIntensity:.18,ambientIntensity:.08,cloudsEnabled:!1,cloudCoverage:.3,cloudSpeed:.001,cloudBottom:1500,cloudTop:2150,cloudQuality:"medium",starsEnabled:!1,starsIntensity:1}),A=ee({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,bsmShadow:!1,shadowResolution:256,maxDistance:at.medium.maxDistance,stepCount:at.medium.stepCount});g.value={...g.value,clouds:A.value};const S=ee({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),F=ee({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),C=ee(!1),_=ee({elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2}),L=xe(()=>{var s,i,d,o,m,v,E,z,W;return[{id:"scene",title:"场景导航",description:"相机飞行和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"atmosphere",title:"大气·光照·天空",description:"Cesium 原生光照 + Tellux 增强大气 + 高级后效（全部可选）",status:g.value.atmosphere||g.value.fog||g.value.hbao||g.value.volumetricClouds?"部分启用":"仅晨昏半球",statusTone:g.value.atmosphere?"success":"neutral",controls:[...As(T.value),{id:"_sep_effects",label:"── 高级后效（默认关闭）──",type:"info"},{id:"fog",label:"高度雾",type:"toggle",value:g.value.fog,tooltip:"基于高度的指数雾效"},{id:"hbao",label:"微阴影",type:"toggle",value:g.value.hbao,tooltip:"环境光遮蔽（HBAO）"},{id:"tiltShift",label:"移轴",type:"toggle",value:g.value.tiltShift,tooltip:"移轴模糊后处理"},{id:"_sep_tellux",label:"── Tellux 增强大气（默认关闭）──",type:"info"},{id:"atmosphere",label:"大气效果",type:"toggle",value:g.value.atmosphere,tooltip:"启用 Tellux 大气渲染（日夜过渡、月光、星空）"},...Es(R.value,!g.value.atmosphere),{id:"_sep_clouds",label:"── 体积云（默认关闭）──",type:"info"},{id:"volumetricClouds",label:"云层",type:"toggle",value:g.value.volumetricClouds,tooltip:"Cesium ECEF 球壳体积云"},{id:"cloudQuality",label:"云质量",type:"select",value:A.value.quality,options:Object.entries(at).map(([Z,H])=>({value:Z,label:H.label})),disabled:!g.value.volumetricClouds},...Ms(A.value,!g.value.volumetricClouds)]},{id:"tools",title:"空间工具",description:"模型加载、增强相机、高度采样（Tellux 移植）",status:(((s=a==null?void 0:a.modelCount)==null?void 0:s.value)>0?"模型":"")||(((i=h==null?void 0:h.flightState)==null?void 0:i.value)==="flying"?"飞行中":"就绪"),statusTone:((d=a==null?void 0:a.modelCount)==null?void 0:d.value)>0?"success":"neutral",controls:[{id:"modelManagerEnabled",label:"模型管理",type:"toggle",value:!1,tooltip:"启用后可加载 glTF/GLB 模型到地理坐标位置"},{id:"cameraEnhancedEnabled",label:"增强相机",type:"toggle",value:!1,tooltip:"自定义缓动函数、角度插值和弹簧物理"},{id:"heightSamplerEnabled",label:"高度采样",type:"toggle",value:!1,tooltip:"地形高度查询、批量异步采样、屏幕坐标拾取"}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(o=n.wind2D)!=null&&o.value?"已加载":"未加载",statusTone:(m=n.wind2D)!=null&&m.value?"success":"neutral",actions:[{id:"load",label:(v=n.wind2D)!=null&&v.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((E=n.wind2D)!=null&&E.value)}],controls:Ts((z=n.windParams)==null?void 0:z.value,!!((W=n.wind2D)!=null&&W.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:F.value.isPicking?"等待选点":F.value.hasFluid?"已创建":"未创建",statusTone:F.value.isPicking?"warning":F.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:F.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:F.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!F.value.hasFluid&&!F.value.isPicking}],controls:Ls(S.value,F.value)},{id:"shallowWater",title:"热带浅水",description:"Three.js 热带浅水场景（焦散/折射/物理吸色/体积云/闪电）",status:C.value?"已启用":"未启用",statusTone:C.value?"success":"neutral",actions:[{id:"toggle",label:C.value?"关闭":"启用",variant:C.value?"danger":"primary"}],controls:Rs(_.value,!C.value)}]});_e(w,s=>{Dt(p,s)});function M({moduleId:s,actionId:i}){var o,m;(m=(o={scene:{home:()=>{var v;return(v=t.flyToHome)==null?void 0:v.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},fluid:{pick:()=>{var v,E;return(E=(v=e==null?void 0:e.value)==null?void 0:v.startPickHeightMap)==null?void 0:E.call(v)},clear:()=>{var v,E;return(E=(v=e==null?void 0:e.value)==null?void 0:v.clearFluid)==null?void 0:E.call(v)}},shallowWater:{toggle:()=>{C.value=!C.value}}}[s])==null?void 0:o[i])==null||m.call(o)}function r({moduleId:s,controlId:i,value:d}){var o,m,v;if(!((o=i==null?void 0:i.startsWith)!=null&&o.call(i,"_sep_"))){if(s==="wind"&&i in(((m=n.windParams)==null?void 0:m.value)||{})){(v=n.setWindParam)==null||v.call(n,i,d);return}if(s==="fluid"&&i in S.value){S.value={...S.value,[i]:i==="waterColor"?d:Number(d)};return}if(s==="shallowWater"&&i in _.value){_.value={..._.value,[i]:i==="waterColor"||i==="lightningEnabled"?d:Number(d)};return}if(s==="atmosphere"){if(i in g.value){g.value={...g.value,[i]:!!d};return}if(Ds(i)){const E=i==="cloudQuality"?{quality:d,previousQuality:A.value.quality}:{[i]:d};A.value=Cs({...A.value,...E}),g.value={...g.value,clouds:A.value};return}if(i in T.value){T.value={...T.value,[i]:d};return}if(i==="atmosphereEnabled"){g.value={...g.value,atmosphere:!!d};return}i in R.value&&(R.value={...R.value,[i]:d})}}}function l(s){const i=vt(s==null?void 0:s.waterLevel),d=vt(s==null?void 0:s.waterLevelMin),o=vt(s==null?void 0:s.waterLevelMax);F.value={isPicking:!!(s!=null&&s.isPicking),hasFluid:!!(s!=null&&s.hasFluid),selectedText:(s==null?void 0:s.selectedText)||"",waterLevel:i,waterLevelMin:d,waterLevelMax:o},i!==null&&(S.value={...S.value,waterLevel:i})}function c(){var s;(s=n.clearWind2D)==null||s.call(n)}return{toolPanelOpen:w,advancedEffectControls:g,cloudParams:A,baseAtmosphereParams:T,atmosphereParams:R,fluidParams:S,fluidState:F,shallowWaterVisible:C,shallowWaterParams:_,toolModules:L,handleToolAction:M,handleToolControlChange:r,handleFluidStateChange:l,cleanupTools:c}}function Ts(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function Ms(e={},t){return[{id:"coverage",label:"云量",type:"range",min:.18,max:.82,step:.01,value:e.coverage??.52,displayValue:Number(e.coverage??.52).toFixed(2),disabled:t,tooltip:"覆盖率阈值。数值越大云越少，数值越小云越密。",numberInput:!1},{id:"density",label:"密度",type:"range",min:25e-6,max:18e-5,step:5e-6,value:e.density??9e-5,displayValue:Number(e.density??9e-5).toExponential(2),disabled:t,tooltip:"体积消光密度。数值越大云更厚、更暗，也更影响性能观感。",numberInput:!1},{id:"shadowStrength",label:"阴影",type:"range",min:0,max:1,step:.02,value:e.shadowStrength??.82,displayValue:Number(e.shadowStrength??.82).toFixed(2),disabled:t,numberInput:!1},{id:"multiScattering",label:"散射",type:"range",min:0,max:1,step:.02,value:e.multiScattering??.58,displayValue:Number(e.multiScattering??.58).toFixed(2),disabled:t,numberInput:!1},{id:"beerShadowStrength",label:"远影",type:"range",min:0,max:1,step:.02,value:e.beerShadowStrength??.64,displayValue:Number(e.beerShadowStrength??.64).toFixed(2),disabled:t,tooltip:"Beer Shadow Map 风格的远距离光学深度近似。数值越大，云层背光阴影越明显。",numberInput:!1},{id:"powderStrength",label:"银边",type:"range",min:0,max:1.4,step:.02,value:e.powderStrength??.72,displayValue:Number(e.powderStrength??.72).toFixed(2),disabled:t,numberInput:!1},{id:"hazeStrength",label:"薄霾",type:"range",min:0,max:1,step:.02,value:e.hazeStrength??.38,displayValue:Number(e.hazeStrength??.38).toFixed(2),disabled:t,numberInput:!1},{id:"groundBounceStrength",label:"反照",type:"range",min:0,max:1,step:.02,value:e.groundBounceStrength??.26,displayValue:Number(e.groundBounceStrength??.26).toFixed(2),disabled:t,tooltip:"地面反弹光近似，用于提亮云底。",numberInput:!1},{id:"bsmShadow",label:"BSM",type:"toggle",value:!!e.bsmShadow,disabled:t,tooltip:"Beer Shadow Map 阴影 atlas。用于远距离自阴影，异常时会自动降级关闭。"},{id:"shadowResolution",label:"影图",type:"range",min:128,max:512,step:128,value:e.shadowResolution??256,displayValue:`${Math.round(e.shadowResolution??256)} px`,disabled:t||!e.bsmShadow,tooltip:"BSM 阴影 atlas 单级联分辨率。越高越清晰，也越影响性能。",numberInput:!1},{id:"maxDistance",label:"距离",type:"range",min:12e4,max:9e5,step:1e4,value:e.maxDistance??at.medium.maxDistance,displayValue:`${Math.round((e.maxDistance??at.medium.maxDistance)/1e3)} km`,disabled:t,numberInput:!1},{id:"stepCount",label:"步数",type:"range",min:24,max:80,step:1,value:e.stepCount??at.medium.stepCount,displayValue:String(Math.round(e.stepCount??at.medium.stepCount)),disabled:t,numberInput:!1}]}function Ds(e){return["cloudQuality","coverage","density","shadowStrength","beerShadowStrength","multiScattering","powderStrength","hazeStrength","groundBounceStrength","bsmShadow","shadowResolution","maxDistance","stepCount"].includes(e)}function Cs(e={}){const t=Object.prototype.hasOwnProperty.call(at,e.quality)?e.quality:"medium",n=at[t],a=e.quality&&e.quality!==e.previousQuality;return{quality:t,coverage:Ue(Xe(e.coverage,.52),.18,.82),density:Ue(Xe(e.density,9e-5),25e-6,18e-5),shadowStrength:Ue(Xe(e.shadowStrength,.82),0,1),beerShadowStrength:Ue(Xe(e.beerShadowStrength,.64),0,1),multiScattering:Ue(Xe(e.multiScattering,.58),0,1),powderStrength:Ue(Xe(e.powderStrength,.72),0,1.4),hazeStrength:Ue(Xe(e.hazeStrength,.38),0,1),groundBounceStrength:Ue(Xe(e.groundBounceStrength,.26),0,1),bsmShadow:e.bsmShadow===!0,shadowResolution:Math.round(Ue(Xe(e.shadowResolution,256),128,512)/128)*128,maxDistance:Ue(a?n.maxDistance:Xe(e.maxDistance,n.maxDistance),12e4,9e5),stepCount:Math.round(Ue(a?n.stepCount:Xe(e.stepCount,n.stepCount),24,80))}}function Ls(e,t={}){const n=vt(t.waterLevelMin),a=vt(t.waterLevelMax),h=n!==null&&a!==null,f=h?Math.min(n,a):0,p=h?Math.max(n,a):0,w=vt(e.waterLevel),g=h?Ue(w??f,f,p):0,T=h?Math.max((p-f)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:f,max:p,step:T,value:g,displayValue:h?`${Fs(g)} m`:"先捕捉",disabled:!h,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function vt(e){const t=Number(e);return Number.isFinite(t)?t:null}function Xe(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Ue(e,t,n){return Math.max(t,Math.min(n,e))}function Fs(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const Ps={low:{stepCount:32,label:"低"},medium:{stepCount:64,label:"中"},high:{stepCount:96,label:"高"},ultra:{stepCount:128,label:"超高"}};function Es(e={},t){return[{id:"atmosphereEnabled",label:"大气效果",type:"toggle",value:!t,tooltip:"启用 Tellux 大气渲染系统（日夜过渡、月光、体积云、星空）"},{id:"dayNightEnabled",label:"日夜过渡",type:"toggle",value:e.dayNightEnabled!==!1,disabled:t,tooltip:"基于太阳高度角的平滑日夜过渡效果"},{id:"moonLightEnabled",label:"月光",type:"toggle",value:e.moonLightEnabled!==!1,disabled:t,tooltip:"夜间月光照明效果"},{id:"moonLightIntensity",label:"月光强度",type:"range",min:0,max:1,step:.01,value:e.moonLightIntensity??.18,displayValue:Number(e.moonLightIntensity??.18).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"ambientIntensity",label:"环境光",type:"range",min:0,max:1,step:.01,value:e.ambientIntensity??.08,displayValue:Number(e.ambientIntensity??.08).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"cloudsEnabled",label:"体积云",type:"toggle",value:e.cloudsEnabled===!0,disabled:t,tooltip:"基于 PostProcessStage 的体积云渲染"},{id:"cloudQuality",label:"云质量",type:"select",value:e.cloudQuality??"medium",options:Object.entries(Ps).map(([n,a])=>({value:n,label:a.label})),disabled:t||!e.cloudsEnabled},{id:"cloudCoverage",label:"覆盖度",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.3,displayValue:`${Math.round((e.cloudCoverage??.3)*100)}%`,disabled:t||!e.cloudsEnabled},{id:"cloudSpeed",label:"移动速度",type:"range",min:0,max:.01,step:1e-4,value:e.cloudSpeed??.001,displayValue:Number(e.cloudSpeed??.001).toFixed(4),disabled:t||!e.cloudsEnabled},{id:"cloudBottom",label:"云底高度",type:"range",min:500,max:5e3,step:50,value:e.cloudBottom??1500,displayValue:`${Math.round(e.cloudBottom??1500)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudTop",label:"云顶高度",type:"range",min:1e3,max:1e4,step:100,value:e.cloudTop??2150,displayValue:`${Math.round(e.cloudTop??2150)} m`,disabled:t||!e.cloudsEnabled},{id:"starsEnabled",label:"星空",type:"toggle",value:e.starsEnabled!==!1,disabled:t,tooltip:"基于高度的星空可见性"},{id:"starsIntensity",label:"星空强度",type:"range",min:0,max:5,step:.1,value:e.starsIntensity??1,displayValue:Number(e.starsIntensity??1).toFixed(1),disabled:t||!e.starsEnabled}]}function As(e={}){return[{id:"enableLighting",label:"日照",type:"toggle",value:e.enableLighting!==!1,tooltip:"Cesium globe.enableLighting：启用日照贴图"},{id:"showGroundAtmosphere",label:"地面大气",type:"toggle",value:e.showGroundAtmosphere!==!1,tooltip:"globe.showGroundAtmosphere：地面大气光晕"},{id:"dynamicAtmosphereLighting",label:"动态光照",type:"toggle",value:e.dynamicAtmosphereLighting!==!1},{id:"atmosphereLightIntensity",label:"大气光强",type:"range",min:0,max:25,step:.5,value:e.atmosphereLightIntensity??5.5,displayValue:Number(e.atmosphereLightIntensity??5.5).toFixed(1)},{id:"fogEnabled",label:"雾效",type:"toggle",value:e.fogEnabled!==!1},{id:"fogDensity",label:"雾密度",type:"range",min:1e-5,max:.001,step:1e-5,value:e.fogDensity??12e-5,displayValue:Number(e.fogDensity??12e-5).toFixed(5),disabled:!e.fogEnabled},{id:"sunShow",label:"太阳",type:"toggle",value:e.sunShow!==!1},{id:"moonShow",label:"月亮",type:"toggle",value:e.moonShow!==!1},{id:"skyBoxShow",label:"星空盒",type:"toggle",value:e.skyBoxShow!==!1}]}function Rs(e={},t=!1){return[{id:"_sep_shallowWater",label:"── 太阳参数 ──",type:"info"},{id:"elevation",label:"高度角",type:"range",min:2,max:80,step:.1,value:e.elevation??30,displayValue:Number(e.elevation??30).toFixed(1),disabled:t},{id:"azimuth",label:"方位角",type:"range",min:-180,max:180,step:.1,value:e.azimuth??150,displayValue:Number(e.azimuth??150).toFixed(1),disabled:t},{id:"_sep_water",label:"── 水面参数 ──",type:"info"},{id:"clarity",label:"清澈度",type:"range",min:.03,max:.4,step:.005,value:e.clarity??.085,displayValue:Number(e.clarity??.085).toFixed(3),tooltip:"越小越清澈(Beer-Lambert 密度)",disabled:t},{id:"causticStrength",label:"焦散强度",type:"range",min:0,max:2,step:.05,value:e.causticStrength??.9,displayValue:Number(e.causticStrength??.9).toFixed(2),disabled:t},{id:"waveHeight",label:"浪高",type:"range",min:0,max:1.5,step:.05,value:e.waveHeight??.5,displayValue:Number(e.waveHeight??.5).toFixed(2),disabled:t},{id:"foamWidth",label:"泡沫宽度",type:"range",min:0,max:8,step:.1,value:e.foamWidth??2.4,displayValue:Number(e.foamWidth??2.4).toFixed(1),disabled:t},{id:"reflection",label:"反射强度",type:"range",min:0,max:1,step:.02,value:e.reflection??.38,displayValue:Number(e.reflection??.38).toFixed(2),disabled:t},{id:"waterColor",label:"远处浅水色",type:"color",value:e.waterColor??"#2bb3c4",disabled:t},{id:"_sep_clouds",label:"── 天空 / 闪电 ──",type:"info"},{id:"cloudCoverage",label:"云量",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.58,displayValue:Number(e.cloudCoverage??.58).toFixed(2),disabled:t},{id:"lightningEnabled",label:"闪电开关",type:"toggle",value:e.lightningEnabled!==!1,disabled:t},{id:"lightningInterval",label:"闪电间隔(秒)",type:"range",min:.4,max:8,step:.1,value:e.lightningInterval??2,displayValue:Number(e.lightningInterval??2).toFixed(1),disabled:t||e.lightningEnabled===!1}]}const{getLayerIdByIndex:ks,getLayerIndexById:Zn}=ii({urlLayerOptions:ri,getLayerCategoryById:oi,getLayerGroupById:si}),nn=-90,fn=1,ca=5e7;function Is({getViewer:e,getCesium:t,onCameraViewSync:n,onBasemapRestore:a}={}){const h=fa(),f=ma();let p=null;function w(r){return li(r,h.query)}function g(){const r=String(w(bn)||"").trim(),l=lt(w("lng")),c=lt(w("lat")),s=zs(w("z")),i=ci(r);if(i&&l!==null&&c!==null&&s!==null){const o={lng:l,lat:c,height:s,...i};if(Jn(o))return o}const d=ui(r);return Jn(d)?d:l===null||c===null||s===null||l<-180||l>180||c<-90||c>90?null:{lng:l,lat:c,height:s,heading:lt(w("heading"))??0,pitch:lt(w("pitch"))??nn,roll:lt(w("roll"))??0}}function T({duration:r=0}={}){const l=e==null?void 0:e(),c=t==null?void 0:t(),s=g();if(!(l!=null&&l.camera)||!c||!s)return!1;const i=c.Cartesian3.fromDegrees(s.lng,s.lat,s.height),d={heading:Jt(c,s.heading??0),pitch:Jt(c,Os(s.pitch??nn)),roll:Jt(c,s.roll??0)};return Number(r)>0?(l.camera.flyTo({destination:i,orientation:d,duration:Number(r)}),!0):(l.camera.setView({destination:i,orientation:d}),!0)}function R(r){if(!r)return null;const l=Zn(r);if(l===null)return null;const c={view:Ut,l:String(l)};return M(c),String(l)}function A(){const r=lt(w("l"));if(r===null)return null;const l=ks(r);return l&&(a==null||a(l)),l}function S({initialSync:r=!1,getActivePresetId:l}={}){const c=_();if(!(!(c!=null&&c.moveEnd)||p)&&(p=c.moveEnd.addEventListener(()=>{const s=l==null?void 0:l();C({activePresetId:s})}),r)){const s=l==null?void 0:l();C({activePresetId:s})}}function F(){typeof p=="function"&&p(),p=null}function C({activePresetId:r}={}){const l=t==null?void 0:t(),c=_();if(!l||!(c!=null&&c.position))return;const s=l.Cartographic.fromCartesian(c.position);if(!s)return;const i=l.Math.toDegrees(s.longitude),d=l.Math.toDegrees(s.latitude),o=Number(s.height),m=l.Math.toDegrees(Number(c.heading)||0),v=l.Math.toDegrees(Number(c.pitch)||0),E=l.Math.toDegrees(Number(c.roll)||0);if(!Number.isFinite(i)||!Number.isFinite(d)||!Number.isFinite(o))return;const z=Math.max(fn,o),W=ai({heading:m,pitch:v,roll:E});if(!W||W==="0")return;const Z={view:Ut,camera:{lng:i,lat:d,height:z,heading:m,pitch:v,roll:E}},H={view:Ut,[bn]:W,lng:Qn(i,6),lat:Qn(d,6),z:Bs(z)},J=r;if(J){const se=Zn(J);se!==null&&(H.l=String(se))}M(H),n==null||n(Z)}function _(){var l;const r=e==null?void 0:e();return(r==null?void 0:r.camera)||((l=r==null?void 0:r.scene)==null?void 0:l.camera)||null}function L(r,l){const c=Object.keys(r).filter(i=>r[i]!==void 0&&r[i]!==null&&r[i]!==""),s=Object.keys(l).filter(i=>l[i]!==void 0&&l[i]!==null&&l[i]!=="");return c.length!==s.length?!1:s.every(i=>String(r[i]??"")===String(l[i]??""))}function M(r){const l={...An(h.query),...r};ga.forEach(s=>{s in r||delete l[s]}),Object.keys(l).forEach(s=>{const i=l[s];i==null||i===""?delete l[s]:l[s]=String(i)});const c=An(h.query);L(c,l)||f.replace({path:h.path||"/home",query:l}).catch(()=>{})}return{restoreCameraFromUrl:T,restoreBasemapFromUrl:A,syncBasemapToUrl:R,bindCameraViewSync:S,cleanupCameraViewSync:F}}function lt(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function zs(e){const t=lt(e);return t===null||t<fn||t>ca?null:t}function Jn(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),a=Number(e.height),h=Number(e.heading),f=Number(e.pitch),p=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(a)&&a>=fn&&a<=ca&&Number.isFinite(h)&&Number.isFinite(f)&&f>=-90&&f<=90&&Number.isFinite(p)}function Os(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):nn}function Qn(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function Bs(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function Jt(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const De={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Ns=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Hs=new Float32Array([0,0,1,0,1,1,0,1]),Ws=new Uint16Array([0,1,2,0,2,3]);function ot(e,t,n){return Math.max(t,Math.min(n,e))}function he(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Us(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),a=Math.min(2048,n),h=Math.max(1,Math.floor(e)),f=Math.sqrt(h),p=Math.log2(f),w=Number.isFinite(p)?Math.round(p):4;let g=Math.pow(2,w);return g=ot(g,16,a),g}function Gs(e){const t=e*e,n=new Float32Array(t*4);for(let a=0;a<t;a+=1){const h=a*4;n[h]=Math.random(),n[h+1]=Math.random(),n[h+2]=Math.random(),n[h+3]=Math.random()}return n}function $s(e){return new Float32Array(e*e*4)}function qs(e,t,n,a,h){const f=t.createTexture();if(!f)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,f),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,a,0,t.RGBA,t.FLOAT,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let p=!1;return{_context:e,_texture:f,_target:t.TEXTURE_2D,_width:n,_height:a,destroy(){p||(t.deleteTexture(f),p=!0)}}}class js{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const a={...De,...n};this.speedFactor=he(a.speedFactor,De.speedFactor),this.cullSpeedMin=he(a.cullSpeedMin,De.cullSpeedMin),this.cullSpeedMax=he(a.cullSpeedMax,De.cullSpeedMax),this.windSpeedMin=he(a.windSpeedMin,De.windSpeedMin),this.windSpeedMax=he(a.windSpeedMax,De.windSpeedMax),this.arrowLength=he(a.arrowLength,De.arrowLength),this.trailLength=he(a.trailLength,De.trailLength),this.decaySpeed=he(a.decaySpeed,De.decaySpeed),this.alphaFactor=he(a.alphaFactor,De.alphaFactor),this.maxWindSpeed=he(a.maxWindSpeed,De.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=he(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=he(t.longitude,NaN),a=he(t.latitude,NaN),h=Array.isArray(t.altitude)?t.altitude:[],f=Array.isArray(t.sizeMesh)?t.sizeMesh:[],p=Array.isArray(t.count)?t.count:[],w=Array.isArray(t.hspeed)?t.hspeed:[],g=Array.isArray(t.hdir)?t.hdir:[],T=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(a))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const R=h.length;if(R<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(f.length!==R||p.length!==R)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const A=p.map(d=>Math.max(1,Math.floor(he(d,1)))),S=f.map(d=>Math.max(1,he(d,1))),F=h.map(d=>he(d,0)),C=A.reduce((d,o)=>d+o*o,0);if(w.length<C||g.length<C||T.length<C)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=R,this.visibleLayerMin=0,this.visibleLayerMax=R-1,this._altitudes=F.slice(),this._maxNx=Math.max(...A),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*R;const _=new Float32Array(this._atlasWidth*this._atlasHeight*4);let L=0;for(let d=0;d<R;d+=1){const o=A[d],m=o;for(let v=0;v<m;v+=1)for(let E=0;E<o;E+=1){const z=L+v*o+E,W=((d*this._maxNy+v)*this._atlasWidth+E)*4,Z=Number(w[z]),H=Number(g[z]),J=Number(T[z]);if(!(Number.isFinite(Z)&&Number.isFinite(H))){_[W]=0,_[W+1]=0,_[W+2]=0,_[W+3]=0;continue}const ie=H*Math.PI/180;_[W]=Z*Math.sin(ie),_[W+1]=Z*Math.cos(ie),_[W+2]=Number.isFinite(J)?J:0,_[W+3]=1}L+=o*m}this._createOrReplaceWindAtlasTexture(_);const M=Math.max(...S),r=this._maxNx*M,l=r/2/111320,c=a*Math.PI/180,s=Math.max(1e-6,Math.abs(Math.cos(c))),i=r/2/(111320*s);this._bounds={minLon:n-i,maxLon:n+i,minLat:a-l,maxLat:a+l,minHeight:Math.min(...F),maxHeight:Math.max(...F)},this._dataPointCount=C,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(he(t,1))),a=Us(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&a===this._particleTextureSize||(this._particleTextureSize=a,this._particleCount=a*a,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=ot(he(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const a=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(a)}setBounds(t,n,a,h){const f=he(t,NaN),p=he(n,NaN),w=he(a,NaN),g=he(h,NaN);if(!Number.isFinite(f)||!Number.isFinite(p)||!Number.isFinite(w)||!Number.isFinite(g))return;const T=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};T.minLon=Math.min(f,p),T.maxLon=Math.max(f,p),T.minLat=Math.min(w,g),T.maxLat=Math.max(w,g),this._bounds=T,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const h=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[h],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=h,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=qs(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,a=Gs(n),h=$s(n);for(let f=0;f<2;f+=1){this._particlePositionTextures[f]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:a},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[f]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:h},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[f]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[f],this._velocityTextures[f]],destroyAttachments:!1});const p=this._framebuffers[f]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,p),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:Ns,usage:t.BufferUsage.STATIC_DRAW}),a=t.Buffer.createVertexBuffer({context:this._context,typedArray:Hs,usage:t.BufferUsage.STATIC_DRAW}),h=t.Buffer.createIndexBuffer({context:this._context,typedArray:Ws,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:a,componentsPerAttribute:2}],indexBuffer:h})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let a=0;a<n.length;a+=1)n[a]=a;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}`,a=`#version 300 es
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
}`;this._updateProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:a,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const t=this._Cesium,n=`#version 300 es
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
}`,a=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:a,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:t.Pass.OPAQUE})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=ot(Math.floor(he(this.visibleLayerMin,0)),0,this._layerCount-1),n=ot(Math.floor(he(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const a=Math.max(1e-4,he(this.maxWindSpeed,De.maxWindSpeed)),h=ot(he(t,0)/a,0,1),f=ot(he(n,a)/a,0,1);return{min:Math.min(h,f),max:Math.max(h,f)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>he(this.speedFactor,De.speedFactor),maxWindSpeed:()=>Math.max(1e-4,he(this.maxWindSpeed,De.maxWindSpeed)),decaySpeed:()=>ot(he(this.decaySpeed,De.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>he(this.arrowLength,De.arrowLength),trailLength:()=>he(this.trailLength,De.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>ot(he(this.alphaFactor,De.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Xs({getViewer:e,getCesium:t,message:n}){const a=ee(null),h=ee({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function f(){var R,A;const T=e==null?void 0:e();if(a.value){try{(A=(R=T==null?void 0:T.scene)==null?void 0:R.primitives)==null||A.remove(a.value)}catch{}a.value.destroy(),a.value=null}}function p(){const T=e==null?void 0:e(),R=t==null?void 0:t();if(!T||!R){n.error("Cesium 尚未初始化");return}f();const A=Ys(R);a.value=new js(T,{maxWindSpeed:20,cesium:R,speedFactor:h.value.speedFactor,arrowLength:h.value.arrowLength,trailLength:h.value.trailLength,alphaFactor:h.value.alphaFactor}),a.value.loadData(A),T.scene.primitives.add(a.value),a.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function w(){a.value&&(a.value.speedFactor=h.value.speedFactor,a.value.arrowLength=h.value.arrowLength,a.value.trailLength=h.value.trailLength,a.value.alphaFactor=h.value.alphaFactor)}function g(T,R){return T in h.value?(h.value={...h.value,[T]:Number(R)},w(),!0):!1}return{wind2D:a,windParams:h,clearWind2D:f,loadSimulatedWind:p,setWindParam:g}}function Ys(e){const h=[0,2e3,5e3,1e4,15e3],f=[3e4,3e4,25e3,25e3,2e4],p=[30,30,25,25,20],w=p.reduce((S,F)=>S+F*F,0),g=new Array(w),T=new Array(w),R=new Array(w);let A=0;for(let S=0;S<5;S++){const F=p[S],C=p[S],_=f[S];for(let L=0;L<C;L++)for(let M=0;M<F;M++){const r=A+L*F+M,l=(M-F/2)*(_/111320),c=(L-C/2)*(_/111320/Math.cos(e.Math.toRadians(35))),i=Math.atan2(c,l)+Math.PI/2+.2*Math.sin(M*.5)*Math.cos(L*.5);T[r]=e.Math.toDegrees(i)%360;const d=Math.sqrt(l*l+c*c),m=Math.max(0,1-d/15);g[r]=(5+S*2)*m+2*Math.random(),R[r]=.5*Math.sin(M*.3)*Math.cos(L*.3)}A+=F*C}return{longitude:104,latitude:35,altitude:h,sizeMesh:f,count:p,hspeed:g,hdir:T,vspeed:R}}const Tt=Object.freeze({LOADING:"loading",READY:"ready",ERROR:"error"});function an(e){if(!e)return null;if(Array.isArray(e)){const[a,h,f=0]=e;return typeof a!="number"||typeof h!="number"?null:{lng:a,lat:h,height:f}}const t=e.longitude??e.lng,n=e.latitude??e.lat;return typeof t!="number"||typeof n!="number"?null:{lng:t,lat:n,height:e.height??0}}function ea(e,t){const n=an(t.coordinates);if(!n)return null;const a=e.Cartesian3.fromDegrees(n.lng,n.lat,n.height),h=new e.HeadingPitchRoll(e.Math.toRadians(t.heading??0),e.Math.toRadians(t.pitch??0),e.Math.toRadians(t.roll??0)),f=e.Transforms.headingPitchRollToFixedFrame(a,h),p=t.scale;if(p!==void 0&&p!==1){let w=1,g=1,T=1;typeof p=="number"?w=g=T=p:typeof p=="object"&&(w=p.x??1,g=p.y??1,T=p.z??1);const R=e.Matrix4.fromScale(new e.Cartesian3(w,g,T));e.Matrix4.multiply(f,R,f)}return f}function Ks({getViewer:e,getCesium:t,message:n}){const a=new Map;let h=0;const f=ee([]),p=xe(()=>f.value.filter(s=>s.state===Tt.LOADING).length),w=xe(()=>f.value.filter(s=>s.state===Tt.READY).length),g=xe(()=>f.value.length);function T(){f.value=Array.from(a.values()).map(s=>({...s.entry}))}function R(){do h++;while(a.has(`model-${h}`));return`model-${h}`}async function A(s){var E,z,W;const i=e==null?void 0:e(),d=t==null?void 0:t();if(!i||!d)return(E=n==null?void 0:n.error)==null||E.call(n,"Cesium 尚未初始化，无法加载模型"),null;const o=s.id??R();if(a.has(o))return(z=n==null?void 0:n.error)==null||z.call(n,`模型 "${o}" 已存在，请使用其他 ID`),null;const m=an(s.coordinates),v={id:o,name:s.name??o,url:s.url,coordinates:m,heading:s.heading??0,pitch:s.pitch??0,roll:s.roll??0,scale:s.scale??1,state:Tt.LOADING,metadata:s.metadata??{},addedAt:Date.now(),errorMessage:null};a.set(o,{primitive:null,objectUrl:null,entry:v}),T();try{const Z=ea(d,{coordinates:v.coordinates,heading:v.heading,pitch:v.pitch,roll:v.roll,scale:v.scale});if(!Z)throw new Error("坐标无效，无法计算模型矩阵");const H={url:s.url,modelMatrix:Z,minimumPixelSize:s.minimumPixelSize??64,maximumScale:2e4,scene:i.scene};let J;if(typeof d.Model.fromGltfAsync=="function")J=await d.Model.fromGltfAsync(H);else if(typeof d.Model.fromGltf=="function")J=d.Model.fromGltf(H);else throw new Error("当前 Cesium 版本不支持 Model API");i.scene.primitives.add(J);const se=a.get(o);se.primitive=J;const ie=()=>{const re=a.get(o);if(re&&(re.entry.state=Tt.READY,T(),s.autoPlayAnimation!==!1))try{J.activeAnimations.addAll({loop:d.ModelAnimationLoop.REPEAT})}catch{}};return J.readyEvent?J.readyEvent.addEventListener(ie):ie(),J.errorEvent&&J.errorEvent.addEventListener(re=>{const te=a.get(o);te&&(te.entry.state=Tt.ERROR,te.entry.errorMessage=(re==null?void 0:re.message)??"模型加载异常",T())}),T(),{...v}}catch(Z){const H=a.get(o);return H!=null&&H.objectUrl&&URL.revokeObjectURL(H.objectUrl),a.delete(o),T(),(W=n==null?void 0:n.error)==null||W.call(n,`模型加载失败: ${Z.message}`),null}}async function S(s,i={}){const d=URL.createObjectURL(s),o=await A({...i,url:d,name:i.name??s.name.replace(/\.(glb|gltf)$/i,"")});if(o){const m=a.get(o.id);m&&(m.objectUrl=d)}else URL.revokeObjectURL(d);return o}function F(s){var o;const i=e==null?void 0:e(),d=a.get(s);if(d){if(d.primitive&&i)try{i.scene.primitives.remove(d.primitive)}catch{}if((o=d.primitive)!=null&&o.destroy)try{d.primitive.destroy()}catch{}d.objectUrl&&URL.revokeObjectURL(d.objectUrl),a.delete(s),T()}}function C(s,i={}){const d=t==null?void 0:t(),o=a.get(s);if(!o||!d)return!1;const m=o.entry;if(i.coordinates&&(m.coordinates=an(i.coordinates)),i.heading!==void 0&&(m.heading=i.heading),i.pitch!==void 0&&(m.pitch=i.pitch),i.roll!==void 0&&(m.roll=i.roll),i.scale!==void 0&&(m.scale=i.scale),i.name&&(m.name=i.name),i.metadata&&(m.metadata={...m.metadata,...i.metadata}),o.primitive){const v=ea(d,{coordinates:m.coordinates,heading:m.heading,pitch:m.pitch,roll:m.roll,scale:m.scale});v&&(o.primitive.modelMatrix=v)}return T(),!0}function _(s,i={}){const d=e==null?void 0:e(),o=t==null?void 0:t(),m=a.get(s);if(!m||!d||!o)return;const v=m.entry.coordinates;if(!v)return;const{range:E=200,heading:z=0,pitch:W=-30,duration:Z=2}=i,H=v.height+E*.3;d.camera.flyTo({destination:o.Cartesian3.fromDegrees(v.lng,v.lat,H),orientation:{heading:o.Math.toRadians(z),pitch:o.Math.toRadians(W),roll:0},duration:Z})}function L(s,i,d={}){const o=a.get(s),m=t==null?void 0:t();if(!(!(o!=null&&o.primitive)||!m))try{const v=o.primitive,E=d.loop!==!1?m.ModelAnimationLoop.REPEAT:m.ModelAnimationLoop.NONE;if(i){let z=!1;const W=v.activeAnimations;for(let Z=0;Z<W.length;Z++)if(W.get(Z).name===i){W.get(Z).playing=!0,z=!0;break}z||v.activeAnimations.add({name:i,loop:E,speedup:d.speedup??1})}else v.activeAnimations.addAll({loop:E,speedup:d.speedup??1})}catch{}}function M(s){const i=a.get(s);if(i!=null&&i.primitive)try{const d=i.primitive.activeAnimations;for(let o=0;o<d.length;o++)d.get(o).playing=!1}catch{}}function r(s){const i=a.get(s);return i?{...i.entry}:null}function l(s){var i;return((i=a.get(s))==null?void 0:i.primitive)??null}function c(){const s=Array.from(a.keys());for(const i of s)F(i);a.clear(),T()}return{models:f,loadingCount:p,readyCount:w,modelCount:g,addModel:A,addModelFromFile:S,removeModel:F,updateModel:C,flyToModel:_,playAnimation:L,stopAnimation:M,getModel:r,getModelPrimitive:l,dispose:c}}const Qt=Object.freeze({linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2});class ta{constructor(t={}){this.stiffness=t.stiffness??120,this.damping=t.damping??20,this.mass=t.mass??1,this.threshold=t.threshold??.01,this._current=0,this._target=0,this._velocity=0,this._active=!1}get current(){return this._current}get target(){return this._target}get active(){return this._active}setTarget(t){this._target=t,this._active=!0}setCurrent(t){this._current=t,this._velocity=0}update(t){if(!this._active)return this._current;const n=this._current-this._target,a=-this.stiffness*n,h=-this.damping*this._velocity,f=(a+h)/this.mass;return this._velocity+=f*t,this._current+=this._velocity*t,Math.abs(n)<this.threshold&&Math.abs(this._velocity)<this.threshold&&(this._current=this._target,this._velocity=0,this._active=!1),this._current}reset(){this._current=0,this._target=0,this._velocity=0,this._active=!1}}const mt=Object.freeze({IDLE:"idle",FLYING:"flying",CANCELLED:"cancelled"});function Vs({getViewer:e,getCesium:t}){let n=0,a=null,h=null;const f=ee(mt.IDLE),p=xe(()=>a);function w(){h!==null&&(cancelAnimationFrame(h),h=null),a=null,f.value=mt.CANCELLED}function g(r){const l=e==null?void 0:e(),c=t==null?void 0:t();if(!l||!c)return null;r.cancelPrevious!==!1&&w();const s=L(c,r.destination);if(!s)return null;const i=l.camera,d=i.heading,o=i.pitch,m=i.roll,v=i.positionWC.clone(),E=r.orientation??{},z=c.Math.toRadians(E.heading??c.Math.toDegrees(d)),W=c.Math.toRadians(E.pitch??c.Math.toDegrees(o)),Z=c.Math.toRadians(E.roll??c.Math.toDegrees(m));let H=s.clone();if(r.maximumHeight!==void 0){const Te=c.Cartographic.fromCartesian(s);Te.height>r.maximumHeight&&(H=c.Cartesian3.fromRadians(Te.longitude,Te.latitude,r.maximumHeight))}const J=r.easing??"easeInOutCubic",se=Qt[J]??Qt.easeInOutCubic,ie=r.duration??2.5,re=++n;a=re,f.value=mt.FLYING;let te=null;function pe(Te){var ye,Ce;if(a!==re)return;te===null&&(te=Te);const ke=(Te-te)/1e3,Ee=Math.min(ke/ie,1),j=se(Ee),X=c.Cartesian3.lerp(v,H,j,new c.Cartesian3),O=M(d,z,j),ve=o+(W-o)*j,we=m+(Z-m)*j;i.setView({destination:X,orientation:{heading:O,pitch:ve,roll:we}}),(ye=r.onTick)==null||ye.call(r,Ee,X),Ee<1?h=requestAnimationFrame(pe):(h=null,a===re&&(a=null,f.value=mt.IDLE,(Ce=r.onComplete)==null||Ce.call(r)))}return h=requestAnimationFrame(pe),re}function T(r,l,c=1e3,s={}){return g({...s,destination:{longitude:r,latitude:l,height:c}})}function R(r,l,c={}){const s=e==null?void 0:e(),i=t==null?void 0:t();if(!s||!i)return null;const d=i.Cartesian3.fromDegrees(r.longitude,r.latitude,r.height),o=i.Cartesian3.fromDegrees(l.longitude,l.latitude,l.height),m=i.Cartesian3.subtract(o,d,new i.Cartesian3);i.Cartesian3.normalize(m,m);const v=Math.atan2(m.x,m.y),E=Math.asin(m.z);return g({...c,destination:r,orientation:{heading:i.Math.toDegrees(v),pitch:i.Math.toDegrees(E),roll:0}})}function A(r,l={}){const c=e==null?void 0:e(),s=t==null?void 0:t();if(!c||!s)return null;const i=new s.Rectangle.fromDegrees(r.west,r.south,r.east,r.north),d=s.Rectangle.center(i),m=s.Math.toDegrees(i.east-i.west)*.8;return g({...l,destination:{longitude:s.Math.toDegrees(d.longitude),latitude:s.Math.toDegrees(d.latitude),height:Math.max(m*111e3,1e3)},orientation:{heading:0,pitch:-45,roll:0}})}function S(r){const l=e==null?void 0:e(),c=t==null?void 0:t();if(!l||!c)return null;w();const s=new ta(r.spring),i=c.Cartographic.fromCartesian(l.camera.positionWC);s.setCurrent(i.height),s.setTarget(r.targetHeight);const d=++n;a=d,f.value=mt.FLYING;let o=null;function m(v){var Z;if(a!==d)return;if(o===null){o=v;return}const E=(v-o)/1e3;o=v;const z=s.update(E),W=c.Cartesian3.fromRadians(i.longitude,i.latitude,z);l.camera.setView({destination:W,orientation:{heading:l.camera.heading,pitch:l.camera.pitch,roll:l.camera.roll}}),s.active?h=requestAnimationFrame(m):(h=null,a===d&&(a=null,f.value=mt.IDLE,(Z=r.onComplete)==null||Z.call(r)))}return h=requestAnimationFrame(m),d}function F(){const r=e==null?void 0:e(),l=t==null?void 0:t();if(!r||!l)return null;const c=l.Cartographic.fromCartesian(r.camera.positionWC);return{longitude:l.Math.toDegrees(c.longitude),latitude:l.Math.toDegrees(c.latitude),height:c.height,heading:l.Math.toDegrees(r.camera.heading),pitch:l.Math.toDegrees(r.camera.pitch),roll:l.Math.toDegrees(r.camera.roll)}}function C(r=6){const l=F();if(!l)return"--";const c=l.longitude>=0?"E":"W",s=l.latitude>=0?"N":"S";return`${Math.abs(l.longitude).toFixed(r)}°${c}, ${Math.abs(l.latitude).toFixed(r)}°${s}, ${l.height.toFixed(1)}m`}function _(){w()}function L(r,l){if(!l)return null;if(l instanceof r.Cartesian3)return l;if(Array.isArray(l)){const[i,d,o=0]=l;return r.Cartesian3.fromDegrees(i,d,o)}const c=l.longitude??l.lng,s=l.latitude??l.lat;return typeof c=="number"&&typeof s=="number"?r.Cartesian3.fromDegrees(c,s,l.height??0):null}function M(r,l,c){let s=l-r;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;return r+s*c}return{flightState:f,currentFlightId:p,enhancedFlyTo:g,cancelFlight:w,flyToPosition:T,flyToAndLookAt:R,flyToRectangle:A,springToHeight:S,SpringController:ta,getCameraState:F,getFormattedPosition:C,cleanup:_,EasingFunctions:Qt}}function Mt(e,t){return{longitude:e.Math.toDegrees(t.longitude),latitude:e.Math.toDegrees(t.latitude),height:t.height}}function na(e,t){if(!t)return null;if(t instanceof e.Cartographic)return t;if(Array.isArray(t)){const[h,f,p=0]=t;return e.Cartographic.fromDegrees(h,f,p)}const n=t.longitude??t.lng,a=t.latitude??t.lat;return typeof n=="number"&&typeof a=="number"?e.Cartographic.fromDegrees(n,a,t.height??0):null}class Zs{constructor(t,n){this.data=t,this.timestamp=n}isExpired(t){return Date.now()-this.timestamp>t}}function Js({getViewer:e,getCesium:t}){const n=new Map,a=300*1e3,h=5,f=ee(!1),p=ee(0);function w(M,r){return`${M.toFixed(h)},${r.toFixed(h)}`}function g(M,r){const l=w(M,r),c=n.get(l);return c&&!c.isExpired(a)?{...c.data}:(c&&n.delete(l),null)}function T(M){const r=w(M.longitude,M.latitude);n.set(r,new Zs({...M},Date.now()))}function R(){n.clear()}function A(M){const r=e==null?void 0:e(),l=t==null?void 0:t();if(!r||!l||!M)return null;const{x:c,y:s}=M,i=r.camera.getPickRay(new l.Cartesian2(c,s));if(!i)return null;const d=r.scene.pickPositionSupported?r.scene.pickPosition(new l.Cartesian2(c,s)):r.scene.globe.pick(i,r.scene);if(!d){const m=r.scene.globe.ellipsoid,v=r.scene.camera.pickEllipsoid(new l.Cartesian2(c,s),m);if(!v)return null;const E=l.Cartographic.fromCartesian(v);return Mt(l,E)}const o=l.Cartographic.fromCartesian(d);return Mt(l,o)}async function S(M,r={}){const{maxRetries:l=3,retryDelay:c=200}=r;for(let s=0;s<l;s++){const i=A(M);if(i)return i;s<l-1&&await new Promise(d=>setTimeout(d,c))}return null}function F(M,r={}){const l=e==null?void 0:e(),c=t==null?void 0:t();if(!l||!c)return null;const s=na(c,M);if(!s)return null;const i=c.Math.toDegrees(s.longitude),d=c.Math.toDegrees(s.latitude);if(r.useCache!==!1){const o=g(i,d);if(o)return o}try{const o=r.terrainDetailLevel??0,m=[s],v=o===0?c.sampleTerrain(l.terrainProvider,0,m):c.sampleTerrainMostDetailed(l.terrainProvider,m);if(v&&v.length>0){const E=Mt(c,v[0]);return T(E),E}}catch{}return null}async function C(M,r={}){const l=e==null?void 0:e(),c=t==null?void 0:t();if(!l||!c||!(M!=null&&M.length))return[];f.value=!0,p.value=0;try{const s=[],i=[],d=[];for(let o=0;o<M.length;o++){const m=na(c,M[o]);if(!m){s.push(null);continue}const v=c.Math.toDegrees(m.longitude),E=c.Math.toDegrees(m.latitude);if(r.useCache!==!1&&!r.skipCached){const z=g(v,E);if(z){s.push(z);continue}}s.push(null),i.push(m),d.push(o)}if(i.length===0)return p.value=1,s;try{const o=c.sampleTerrainMostDetailed(l.terrainProvider,i),m=o instanceof Promise?await o:o;for(let v=0;v<m.length;v++){const E=Mt(c,m[v]);s[d[v]]=E,T(E),r.onProgress&&r.onProgress(v+1,i.length),p.value=(v+1)/i.length}}catch{for(let m=0;m<i.length;m++){try{const v=i[m],E=c.sampleTerrain(l.terrainProvider,17,[v]),z=E instanceof Promise?await E:E;if((z==null?void 0:z.length)>0){const W=Mt(c,z[0]);s[d[m]]=W,T(W)}}catch{}r.onProgress&&r.onProgress(m+1,i.length),p.value=(m+1)/i.length}}return s}finally{f.value=!1}}async function _(M,r={}){if(!(t==null?void 0:t()))return null;const{west:c,south:s,east:i,north:d}=M,o=Math.max(2,Math.ceil(Math.sqrt(r.sampleCount??9))),m=[];for(let H=0;H<o;H++)for(let J=0;J<o;J++){const se=c+(i-c)*(J/(o-1)),ie=s+(d-s)*(H/(o-1));m.push([se,ie])}const E=(await C(m,{useCache:!0})).filter(H=>H!==null).map(H=>H.height);if(E.length===0)return null;const z=Math.min(...E),W=Math.max(...E),Z=E.reduce((H,J)=>H+J,0)/E.length;return{min:z,max:W,avg:Z}}function L(){R(),f.value=!1,p.value=0}return{isSampling:f,samplingProgress:p,pickCartographic:A,pickCartographicWithRetry:S,sampleHeight:F,sampleHeightMostDetailed:C,queryHeightRange:_,clearCache:R,cleanup:L}}const Qs={key:4,class:"drag-overlay"},el={class:"map-controls-group"},tl={class:"mouse-position-content"},nl={__name:"CesiumContainer",emits:["view-sync"],setup(e,{expose:t,emit:n}){let a=null,h=null,f=!1;const p=on(),w=n,g=ee(!1),T=ee(null),R=ee(ba()),A=()=>h,S=()=>a||window.Cesium,F=()=>R.value.tiandituTk,C=()=>R.value.cesiumIonToken,_=cs({getViewer:A,getCesium:S,message:p,backendBaseUrl:ya,tiandituToken:F,cesiumIonToken:C}),{activeBasemap:L,activeTerrain:M,customXyzBasemapUrl:r,basemapOptions:l,terrainOptions:c,overlayOptions:s,createImageryProviderViewModels:i,createTerrainProviderViewModels:d,getSelectedImageryProviderViewModel:o,getSelectedTerrainProviderViewModel:m,bindLayerPickerStateSync:v,addBaseImageryLayers:E,initCustomTerrain:z,handleOverlayToggle:W,handleCustomBasemapSubmit:Z,cleanupLayers:H}=_;_e(L,(q,B)=>{!q||q===B||ke(q)});const{coordinateDisplay:J,setupInteractions:se,cleanupInteractions:ie}=ts({getViewer:A,getCesium:S}),{installCreditHider:re,cleanupCreditHider:te}=es({getViewer:A}),{restoreCameraFromUrl:pe,restoreBasemapFromUrl:Te,syncBasemapToUrl:ke,bindCameraViewSync:Ee,cleanupCameraViewSync:j}=Is({getViewer:A,getCesium:S,onCameraViewSync:q=>w("view-sync",q),onBasemapRestore:q=>{q&&L.value!==q&&(L.value=q)}}),X=bs({getViewer:A,getCesium:S,message:p}),{flyToHome:O}=X,ve=Xs({getViewer:A,getCesium:S,message:p}),we=_s({getViewer:A,getCesium:S,message:p}),ye=Ks({getViewer:A,getCesium:S,message:p}),Ce=Vs({getViewer:A,getCesium:S}),$e=Js({getViewer:A,getCesium:S});t({getViewer:A,getCesium:S,modelManager:ye,cameraEnhanced:Ce,heightSampler:$e});const Ze=xe(()=>we.loadedDataSources.value),Ie=xe(()=>we.pendingGltfFile.value),Ae=ee(!1);function Re(q){Ae.value=!0,q.dataTransfer&&(q.dataTransfer.dropEffect="copy")}function Oe(q){const B=q==null?void 0:q.relatedTarget,u=q==null?void 0:q.currentTarget;B instanceof Node&&u instanceof Node&&u.contains(B)||(Ae.value=!1)}async function Le(q){var u;if(Ae.value=!1,!g.value)return;const B=(u=q.dataTransfer)==null?void 0:u.files;if(!(!B||B.length===0))for(const P of B)try{await we.loadDataFile(P)}catch{}}const{toolPanelOpen:ze,advancedEffectControls:Ke,fluidParams:Ve,baseAtmosphereParams:Be,shallowWaterVisible:Fe,shallowWaterParams:Ne,toolModules:He,handleToolAction:K,handleToolControlChange:y,handleFluidStateChange:D,cleanupTools:I}=ws({fluidPanelRef:T,sceneActions:X,wind:ve,modelManager:ye,cameraEnhanced:Ce,heightSampler:$e});async function $(){f=!1,ra("正在初始化 3D 场景...");try{let q=0,B=1;for(;q<B;)try{if(R.value=await va({silent:!1,force:q>0}),B=Math.max(B,Array.isArray(R.value.tiandituTokens)?R.value.tiandituTokens.length:1,Array.isArray(R.value.cesiumIonTokens)?R.value.cesiumIonTokens.length:1,1),a=await Go({ionToken:C()}),f||!a||!document.getElementById("cesiumContainer"))return;x(),se();const u=E(),P=await z();if(f){Q();return}if(g.value=!0,Ee({initialSync:!1,getActivePresetId:()=>L.value}),Te(),u&&P){p.success("天地图基础影像与地形加载成功。");return}const Y=u?{switched:!1}:Gt("tianditu_tk"),G=P?{switched:!1}:Gt("cesium_ion_token");if(!(Y.switched||G.switched)){p.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}R.value=G.switched?G.tokens:Y.tokens,Q(),q+=1,p.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(u){const P=Gt("cesium_ion_token");if(!P.switched)throw u;R.value=P.tokens,Q(),q+=1,p.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}p.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(q){p.error("Cesium 运行时加载失败",q),p.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{oa()}}function Q(){if(g.value=!1,j(),ie(),H(),te(),!!h){try{h.destroy()}catch{}h=null}}function x(){var P;const q=typeof a.Map=="function"?a.Map:a.Viewer,B=i(),u=d();h=new q("cesiumContainer",{baseLayerPicker:!0,geocoder:((P=a.IonGeocodeProviderType)==null?void 0:P.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:B,selectedImageryProviderViewModel:o(B),terrainProviderViewModels:u,selectedTerrainProviderViewModel:m(u),shouldAnimate:!0}),h.scene.debugShowFramesPerSecond=!0,h.scene.globe.terrainExaggeration=1,h.scene.globe.terrainExaggerationRelativeHeight=0,Ko(h,a),bi(h),re(),v(),pe({duration:0})||O(0)}rn(()=>{$()});async function b({files:q}){for(const B of q)try{await we.loadDataFile(B)}catch{}}function N({id:q}){we.removeDataSource(q)}function U(){we.clearAllDataSources()}async function V(q){try{await we.loadGltfWithUserCoords(q)}catch{}}function oe(){we.cancelPendingGltf()}Ht(()=>{if(f=!0,g.value=!1,j(),ie(),I(),H(),ye.dispose(),Ce.cleanup(),$e.cleanup(),te(),we.clearAllDataSources(),h){try{h.destroy()}catch{}h=null}}),_e(g,q=>{q&&ae(Be.value)});function ae(q){var P;if(!h||!a)return;const B=h.scene,u=B.globe;u&&(u.enableLighting=q.enableLighting,u.showGroundAtmosphere=q.showGroundAtmosphere,"dynamicAtmosphereLighting"in u&&(u.dynamicAtmosphereLighting=q.dynamicAtmosphereLighting),"dynamicAtmosphereLightingFromSun"in u&&(u.dynamicAtmosphereLightingFromSun=q.dynamicAtmosphereLightingFromSun),"atmosphereLightIntensity"in u&&(u.atmosphereLightIntensity=q.atmosphereLightIntensity),"atmosphereHueShift"in u&&(u.atmosphereHueShift=q.atmosphereHueShift),"atmosphereSaturationShift"in u&&(u.atmosphereSaturationShift=q.atmosphereSaturationShift),"atmosphereBrightnessShift"in u&&(u.atmosphereBrightnessShift=q.atmosphereBrightnessShift),"lightingFadeInDistance"in u&&(u.lightingFadeInDistance=q.lightingFadeInDistance),"lightingFadeOutDistance"in u&&(u.lightingFadeOutDistance=q.lightingFadeOutDistance),"nightFadeInDistance"in u&&(u.nightFadeInDistance=q.nightFadeInDistance),"nightFadeOutDistance"in u&&(u.nightFadeOutDistance=q.nightFadeOutDistance)),B.fog&&(B.fog.enabled=q.fogEnabled,"density"in B.fog&&(B.fog.density=q.fogDensity),"minimumBrightness"in B.fog&&(B.fog.minimumBrightness=q.fogMinimumBrightness)),B.sun&&(B.sun.show=q.sunShow),B.moon&&(B.moon.show=q.moonShow),B.skyBox&&(B.skyBox.show=q.skyBoxShow),(P=B.requestRender)==null||P.call(B)}return _e(Be,q=>{ae(q)},{deep:!0}),(q,B)=>{var u;return ne(),le(nt,null,[k("div",{id:"cesiumContainer",class:"cesium-container",onDragover:gt(Re,["prevent"]),onDragleave:gt(Oe,["prevent"]),onDrop:gt(Le,["prevent"])},null,32),g.value?(ne(),Ge(ut(zi),{key:0,headless:"","get-viewer":A,"get-cesium":S,controls:de(Ke)},null,8,["controls"])):ge("",!0),g.value?(ne(),Ge(ut(Fo),{key:1,ref_key:"fluidPanelRef",ref:T,headless:"","get-viewer":A,"get-cesium":S,params:de(Ve),onStateChange:de(D)},null,40,["params","onStateChange"])):ge("",!0),g.value?(ne(),Ge(Ho,pa({key:2,visible:de(Fe)},de(Ne)),null,16,["visible"])):ge("",!0),g.value?(ne(),Ge(eo,{key:3,open:de(ze),"onUpdate:open":B[0]||(B[0]=P=>Wt(ze)?ze.value=P:null),"active-basemap":de(L),"onUpdate:activeBasemap":B[1]||(B[1]=P=>Wt(L)?L.value=P:null),"active-terrain":de(M),"onUpdate:activeTerrain":B[2]||(B[2]=P=>Wt(M)?M.value=P:null),"basemap-options":de(l),"terrain-options":de(c),"overlay-options":de(s),"custom-basemap-url":de(r),modules:de(He),"loaded-data-sources":Ze.value,onModuleAction:de(K),onControlChange:de(y),onOverlayToggle:de(W),onCustomBasemapSubmit:de(Z),onDataImport:b,onDataRemove:N,onDataClearAll:U},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):ge("",!0),Se(go,{visible:!!Ie.value,"file-name":((u=Ie.value)==null?void 0:u.name)||"",onConfirm:V,onCancel:oe},null,8,["visible","file-name"]),Ae.value&&g.value?(ne(),le("div",Qs,[Se(de(tn),{size:48,"stroke-width":"1.5"}),B[4]||(B[4]=k("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),B[5]||(B[5]=k("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):ge("",!0),k("div",el,[k("div",tl,fe(de(J)),1),B[7]||(B[7]=k("div",{class:"divider"},null,-1)),k("button",{class:"home-btn",title:"回到初始位置",onClick:B[3]||(B[3]=(...P)=>de(O)&&de(O)(...P))},[...B[6]||(B[6]=[k("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[k("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},vl=dt(nl,[["__scopeId","data-v-16ce6164"]]);export{vl as default};
