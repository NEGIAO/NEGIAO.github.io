const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-DMg_WTd2.js","./vendor-echarts-all-SqY2e8y7.js","./vendor-libs-DvlOPPtR.js","./vendor-vue-DrZ_GSNy.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-DD22FS0p.js","./vendor-proj4-Dr70jk1D.js","./index-BbX4t5YM.js","./vendor-ol-all-DpQ1-oRD.js","./vendor-geotiff-DzxsKQ4i.js","./vendor-lerc-9DOY5ikF.js","./vendor-jszip-BOwK5y_4.js","./vendor-ol-all-BtPuoxOl.css","./vendor-axios-Bdz_Fv8M.js","./index-DduL8x4O.css","./index-L_DQc7zX.js","./HomeView-gJZupog9.js","./HomeView-wSLbKH0f.css","./vectorUtils-Ds50OJUZ.js","./textDecoder-CXjJWEkX.js"])))=>i.map(i=>d[i]);
var ha=Object.defineProperty;var fa=(e,t,n)=>t in e?ha(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var yn=(e,t,n)=>fa(e,typeof t!="symbol"?t+"":t,n);import{w as xe,v as ra,d as ee,c as se,P as oa,r as Z,C as rn,o as Wt,f as E,t as he,a as Se,G as Ye,X as ut,g as fe,q as _e,u as ue,F as nt,e as rt,n as Ce,x as Oe,S as dt,I as It,i as gt,H as zt,z as ma,B as pa,A as ga,b as va,y as ya,a5 as ba,a4 as Ut}from"./vendor-vue-DrZ_GSNy.js";import{_ as st,h as on,R as sa,Q as la,e as Gt,f as bn,T as xa,v as Sa,y as $t,P as _a,x as wa}from"./index-BbX4t5YM.js";import{_ as Ht}from"./vendor-runtime-Dp1pzeXC.js";import{af as Ta,ag as qt,ah as jt,ai as Ma,X as xn,e as Xt,aj as tn,ak as Ft,ac as Sn,al as Da,am as ca,an as _n,H as wn,T as Vt,s as Tn,a2 as La,ao as Ot,ap as Ca,aq as Fa,ar as Pa,q as Aa,as as Ea,o as Ra,at as Pt,G as Mn,au as sn,av as ln,aw as ua,ax as Dn,ay as ka,az as Ia,aA as Ln,aB as Kt,aC as za,aD as Oa,aE as Ba,aF as At,aG as Qe,aH as Ha,aI as Cn,aJ as xt,aK as Na,aL as St,aM as Wa,aN as Ua,aO as Ga,aP as $a,aQ as qa,aR as ja,aS as Fn,aT as Pn,aU as Xa,aV as Va,aW as Ka,aX as Ya,aY as Za,aZ as Ja,a_ as Qa,a$ as ei,b0 as ti,b1 as An,b2 as ni,b3 as ai,b4 as ii,b5 as ri}from"./vendor-libs-DvlOPPtR.js";import{F as cn,G as En,v as Ct,B as oi,H as si,I as li,J as ci,K as ui,L as di,M as Rn,N as hi,O as fi,P as mi}from"./HomeView-gJZupog9.js";import{d as pi}from"./vectorUtils-Ds50OJUZ.js";const Nt=new Map;function gi(e){const t=Nt.get(e);t&&t.abort();const n=new AbortController;return Nt.set(e,n),n}function vi(){Nt.forEach(e=>{e.abort()}),Nt.clear()}function yi(e){const t=e.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!t)return/\{s\}/i.test(e)?{url:e,subdomains:["a","b","c"]}:{url:e,subdomains:[]};const n=t[1].charCodeAt(0),a=t[2].charCodeAt(0),p=[];for(let m=n;m<=a;m++)p.push(String.fromCharCode(m));return{url:e.replace(t[0],"{s}"),subdomains:p}}function bi(e){return e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function xi(e,t){let n=e;return t.tiandituTk&&(n=n.replace(/\{tiandituTk\}/g,t.tiandituTk)),t.customUrl&&(n=n.replace(/\{customUrl\}/g,t.customUrl)),n}function Si(e,t,n){if(!e||!t)return null;const p=gi(t.id).signal,{serviceType:m}=t;let c=xi(t.url,n);if(m==="custom"){if(!n.customUrl)return null;c=n.customUrl}if(t.nonStandardAdapter||m==="vector-tile")return null;const{subdomains:T}=yi(c),_=bi(c),x=t.subdomains||T,I=t.maxZoom||18;try{let k=null;if(p.aborted)return null;switch(m){case"wms":{if(typeof e.WebMapServiceImageryProvider!="function")return null;const M=t.wms;if(!(M!=null&&M.layers))return null;k=new e.WebMapServiceImageryProvider({url:_||t.url,layers:M.layers,parameters:{version:M.version||"1.1.1",srs:M.srs||"EPSG:3857",format:M.format||"image/png",styles:M.styles||"",transparent:M.transparent!==!1}});break}case"wmts":{if(typeof e.WebMapTileServiceImageryProvider!="function")return null;const M=t.wmts;if(!(M!=null&&M.layer)||!M.matrixSet)return null;k=new e.WebMapTileServiceImageryProvider({url:_||t.url,layer:M.layer,style:M.style||"default",format:M.format||"image/png",tileMatrixSetID:M.matrixSet,maximumLevel:I});break}case"osm":{typeof e.OpenStreetMapImageryProvider=="function"?k=new e.OpenStreetMapImageryProvider({maximumLevel:I}):k=new e.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:I});break}default:{if(!_||!(_.includes("{z}")||_.includes("{x}")||_.includes("{y}")||_.includes("{reverseY}")))return null;k=new e.UrlTemplateImageryProvider({url:_,subdomains:x.length>0?x:void 0,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:I,enablePickFeatures:!1});break}}if(p.aborted){if(k&&typeof k.destroy=="function")try{k.destroy()}catch{}return null}return k&&(k._descriptorId=t.id),k}catch{return null}}function _i(e,t,n){if(!e||!Array.isArray(t))return[];const a=[];for(const p of t){const m=cn(p);if(!m)continue;const c=Si(e,m,n);c&&a.push(c)}return a}function wi(e){var a;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(a=t.requestRender)==null||a.call(t))}function Ti(e,t){var m;const n=e==null?void 0:e.scene,a=n==null?void 0:n.globe;if(!n||!a)return;Li(n,t),Ci(n),a.enableLighting=!0,a.showGroundAtmosphere=!0,ge(a,"dynamicAtmosphereLighting",!0),ge(a,"dynamicAtmosphereLightingFromSun",!0),ge(a,"atmosphereLightIntensity",5.5),ge(a,"atmosphereHueShift",-.015),ge(a,"atmosphereSaturationShift",.08),ge(a,"atmosphereBrightnessShift",.02),ge(a,"lightingFadeInDistance",15e6),ge(a,"lightingFadeOutDistance",22e6),ge(a,"nightFadeInDistance",9e6),ge(a,"nightFadeOutDistance",16e6),Et(t,a,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Et(t,a,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ge(a,"atmosphereRayleighScaleHeight",1e4),ge(a,"atmosphereMieScaleHeight",3200),ge(a,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=Pi(t));const p=n.skyAtmosphere;p&&(p.show=!0,ge(p,"perFragmentAtmosphere",!0),ge(p,"dynamicAtmosphereLighting",!0),ge(p,"dynamicAtmosphereLightingFromSun",!0),ge(p,"hueShift",-.025),ge(p,"saturationShift",.08),ge(p,"brightnessShift",.03),ge(p,"atmosphereLightIntensity",12),Et(t,p,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Et(t,p,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ge(p,"atmosphereRayleighScaleHeight",1e4),ge(p,"atmosphereMieScaleHeight",3200),ge(p,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),Fi(n),(m=n.requestRender)==null||m.call(n)}function Mi(e){var p;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const a=(p=t.postProcessStages)==null?void 0:p.bloom;return{scene:et(t,["highDynamicRange","sunBloom","light"]),fog:et(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:et(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:et(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:et(t.sun,["show"]),moon:et(t.moon,["show"]),skyBox:et(t.skyBox,["show"]),bloom:{props:et(a,["enabled"]),uniforms:et(a==null?void 0:a.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Di(e,t,n){var c,T,_,x;if(!n)return;const a=e==null?void 0:e.scene,p=a==null?void 0:a.globe;if(!a||!p)return;tt(a,n.scene,t),tt(a.fog,n.fog,t),tt(p,n.globe,t),tt(a.sun,n.sun,t),tt(a.moon,n.moon,t),tt(a.skyBox,n.skyBox,t),a.skyAtmosphere&&(tt(a.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(a.skyAtmosphere.show=!1));const m=(c=a.postProcessStages)==null?void 0:c.bloom;tt(m,(T=n.bloom)==null?void 0:T.props,t),tt(m==null?void 0:m.uniforms,(_=n.bloom)==null?void 0:_.uniforms,t),(x=a.requestRender)==null||x.call(a)}function Li(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}ge(e.light,"intensity",2.35)}function Ci(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,ge(t,"density",12e-5),ge(t,"minimumBrightness",.035),ge(t,"screenSpaceErrorFactor",2),ge(t,"visualDensityScalar",.16))}function Fi(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(ge(t.uniforms,"contrast",128),ge(t.uniforms,"brightness",-.18),ge(t.uniforms,"delta",1),ge(t.uniforms,"sigma",2.5),ge(t.uniforms,"stepSize",4.2)))}function Pi(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function ge(e,t,n){e&&t in e&&(e[t]=n)}function Et(e,t,n,a,p,m){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(a,p,m))}function et(e,t){return e?t.reduce((n,a)=>(a in e&&(n[a]=Ai(e[a])),n),{}):{}}function tt(e,t={},n){!e||!t||Object.entries(t).forEach(([a,p])=>{a in e&&(e[a]=Ei(p,n))})}function Ai(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Ei(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Ri={__name:"LilGuiControls",props:{title:{type:String,default:"Parameters"},controls:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const n=e,a=t,p=Z(null),m={},c=new Map;let T=null,_="",x=!1;xe(()=>[n.title,n.controls],()=>{I()},{deep:!0,flush:"post",immediate:!0}),ra(()=>{l()});function I(){typeof window>"u"||x||(x=!0,oa(()=>{x=!1,k()}))}function k(){const r=p.value;if(!r)return;const f=P(n.controls);(!T||f!==_)&&(l(),M(r,f)),D()}function M(r,f){T=new Ta({container:r,autoPlace:!1,title:n.title||"Parameters",width:Math.max(260,Math.floor(r.clientWidth||320))}),T.domElement.classList.add("cesium-lil-gui"),r.replaceChildren(T.domElement),_=f;for(const v of n.controls||[]){const A=C(v);A&&c.set(v.id,A)}}function C(r){if(r.type==="info")return null;m[r.id]=i(r);let f=null;return r.type==="range"?f=T.add(m,r.id,o(r.min,0),o(r.max,1),o(r.step,.01)):r.type==="color"?f=T.addColor(m,r.id):r.type==="select"?f=T.add(m,r.id,d(r)):f=T.add(m,r.id),f.name(L(r)).onChange(v=>{const A=u(r.id)||r;A.disabled||a("change",{control:A,controlId:A.id,value:v})}),g(f,r),f}function D(){if(T){T.title(n.title||"Parameters");for(const r of n.controls||[]){const f=c.get(r.id);if(!f)continue;const v=i(r);h(m[r.id],v)||(m[r.id]=v,f.updateDisplay()),f.name(L(r)),f.disable(!!r.disabled),g(f,r)}}}function g(r,f){r.domElement.title=f.tooltip||"",r.domElement.dataset.controlId=f.id||"",r.domElement.dataset.controlType=f.type||""}function P(r=[]){return JSON.stringify(r.map(f=>({id:f.id,type:f.type,min:f.min,max:f.max,step:f.step,options:(f.options||[]).map(v=>({label:v.label,value:v.value}))})))}function L(r){return r.displayValue?`${r.label||r.id} (${r.displayValue})`:r.label||r.id}function i(r){var f,v;return r.type==="range"?o(r.value,o(r.min,0)):r.type==="toggle"?!!r.value:r.type==="select"?r.value??((v=(f=r.options)==null?void 0:f[0])==null?void 0:v.value)??"":r.type==="color"?typeof r.value=="string"&&r.value?r.value:"#ffffff":r.value}function d(r){const f={};for(const v of r.options||[])f[v.label||v.value]=v.value;return f}function u(r){return n.controls.find(f=>f.id===r)||null}function h(r,f){return typeof r=="number"||typeof f=="number"?Math.abs(Number(r)-Number(f))<1e-12:r===f}function o(r,f){const v=Number(r);return Number.isFinite(v)?v:f}function l(){if(T)try{T.destroy()}catch{}T=null,_="",c.clear();for(const r of Object.keys(m))delete m[r]}return(r,f)=>(ee(),se("div",{ref_key:"containerRef",ref:p,class:"lil-gui-host"},null,512))}},un=st(Ri,[["__scopeId","data-v-110f953e"]]),ki={key:0,class:"advanced-effects-root"},Ii={class:"effects-panel"},zi={class:"panel-head"},Oi={class:"effect-switches"},Bi=`
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
`,Hi={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=on(),a=Z(null),p=Z(!1),m=Z(!1),c=Z(!1),T=Z(!1),_=Z(!1),x=Z(!1),I=Z({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,maxDistance:36e4,stepCount:32}),k=_e(()=>[{id:"fog",label:"Height Fog",type:"toggle",value:p.value},{id:"volumetricClouds",label:"Clouds",type:"toggle",value:m.value},{id:"hbao",label:"HBAO",type:"toggle",value:c.value},{id:"tiltShift",label:"Tilt Shift",type:"toggle",value:T.value},{id:"atmosphere",label:"Atmosphere + Bloom",type:"toggle",value:_.value}]);let M=null,C=null,D=null,g=null,P=!1,L=null,i=null,d=null,u=null,h=null,o=null,l=null,r=null,f=!1,v=null,A=null,R=!1,O=0,X=0,B=typeof performance<"u"?performance.now():Date.now();const Y={};function te(){return d||(d=Ht(()=>import("./cesiumFxRuntime-DMg_WTd2.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(S=>{var U;const b=(U=S==null?void 0:S.getCesiumFxEchartsRuntime)==null?void 0:U.call(S);if(!b)throw new Error("Cinematic FX 图表运行时加载失败");return i=b,b}).catch(S=>{throw d=null,S}),d)}async function ae(){return i||te()}const ne={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},J={hdr:null,bloom:null,sky:null};rn(()=>{Te()}),Wt(()=>{He()}),xe(()=>t.controls,S=>{de(S||{})},{deep:!0,immediate:!0});function de(S){Object.prototype.hasOwnProperty.call(S,"fog")&&(p.value=!!S.fog),Object.prototype.hasOwnProperty.call(S,"volumetricClouds")&&(m.value=!!S.volumetricClouds),S.clouds&&typeof S.clouds=="object"&&(I.value=Fe(S.clouds)),Object.prototype.hasOwnProperty.call(S,"hbao")&&(c.value=!!S.hbao),Object.prototype.hasOwnProperty.call(S,"tiltShift")&&(T.value=!!S.tiltShift),Object.prototype.hasOwnProperty.call(S,"atmosphere")&&(_.value=!!S.atmosphere)}function we({controlId:S,value:b}){const U=!!b,K={fog:p,volumetricClouds:m,hbao:c,tiltShift:T,atmosphere:_}[S];K&&(K.value=U)}function Fe(S={}){return{quality:["low","medium","high","ultra"].includes(S.quality)?S.quality:"medium",coverage:N(S.coverage,.52,.18,.82),density:N(S.density,9e-5,25e-6,18e-5),shadowStrength:N(S.shadowStrength,.82,0,1),beerShadowStrength:N(S.beerShadowStrength,.64,0,1),multiScattering:N(S.multiScattering,.58,0,1),powderStrength:N(S.powderStrength,.72,0,1.4),hazeStrength:N(S.hazeStrength,.38,0,1),groundBounceStrength:N(S.groundBounceStrength,.26,0,1),maxDistance:N(S.maxDistance,36e4,12e4,9e5),stepCount:Math.round(N(S.stepCount,48,16,128))}}function Te(){let S=0;u=window.setInterval(async()=>{var G,K;S+=1;const b=(G=t.getViewer)==null?void 0:G.call(t),U=((K=t.getCesium)==null?void 0:K.call(t))||window.Cesium;if(b&&U){clearInterval(u),u=null;try{q(b),W(b),j(b,U),Ge(b,U),n.success("高级视觉效果已启用。")}catch(oe){n.error("高级视觉效果初始化失败",oe),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}S>=150&&(clearInterval(u),u=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function q(S){var G,K,oe,ie,ye,re,s,w,z;const b=S==null?void 0:S.scene;if(!b)return;typeof b.highDynamicRange=="boolean"&&(J.hdr=b.highDynamicRange),"sunBloom"in b&&(J.sunBloom=b.sunBloom);const U=b.globe;if(U&&(J.globe={enableLighting:U.enableLighting,showGroundAtmosphere:U.showGroundAtmosphere,dynamicAtmosphereLighting:U.dynamicAtmosphereLighting,dynamicAtmosphereLightingFromSun:U.dynamicAtmosphereLightingFromSun,atmosphereLightIntensity:U.atmosphereLightIntensity,atmosphereHueShift:U.atmosphereHueShift,atmosphereSaturationShift:U.atmosphereSaturationShift,atmosphereBrightnessShift:U.atmosphereBrightnessShift,lightingFadeInDistance:U.lightingFadeInDistance,lightingFadeOutDistance:U.lightingFadeOutDistance,nightFadeInDistance:U.nightFadeInDistance,nightFadeOutDistance:U.nightFadeOutDistance}),b.light&&(J.light={intensity:b.light.intensity}),(G=b.postProcessStages)!=null&&G.bloom){const H=b.postProcessStages.bloom;J.bloom={enabled:!!H.enabled,contrast:(K=H.uniforms)==null?void 0:K.contrast,brightness:(oe=H.uniforms)==null?void 0:oe.brightness,delta:(ie=H.uniforms)==null?void 0:ie.delta,sigma:(ye=H.uniforms)==null?void 0:ye.sigma,stepSize:(re=H.uniforms)==null?void 0:re.stepSize}}b.skyAtmosphere&&(J.sky={show:b.skyAtmosphere.show,hueShift:b.skyAtmosphere.hueShift,saturationShift:b.skyAtmosphere.saturationShift,brightnessShift:b.skyAtmosphere.brightnessShift}),J.celestial={sunShow:(s=b.sun)==null?void 0:s.show,moonShow:(w=b.moon)==null?void 0:w.show,skyBoxShow:(z=b.skyBox)==null?void 0:z.show}}function j(S,b){var G;!((G=S==null?void 0:S.scene)!=null&&G.postProcessStages)||!(b!=null&&b.PostProcessStage)||(Ie(S,b),me(S,b),Pe(S,b),Ue(S,b),_.value?ke(S,b,1200):Ae(S))}function W(S){var U;const b=S==null?void 0:S.scene;(U=b==null?void 0:b.renderError)!=null&&U.addEventListener&&(b.rethrowRenderErrors=!1,r=b.renderError.addEventListener((G,K)=>{n.error("Cesium 渲染异常，已触发降级保护",K),ve(),f||(f=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function ve(){p.value=!1,m.value=!1,T.value=!1,c.value=!1,_.value=!1,M&&(M.enabled=!1),C&&(C.enabled=!1),D&&(D.enabled=!1),g&&(g.enabled=!1)}function Ie(S,b){M||(M=new b.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new b.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),S.scene.postProcessStages.add(M),M.enabled=p.value)}function me(S,b){var re,s;if(C||!(b!=null&&b.PostProcessStage))return;const U=Number((s=(re=b==null?void 0:b.Ellipsoid)==null?void 0:re.WGS84)==null?void 0:s.maximumRadius)||6378137,G=new b.Cartesian3,K=new b.Cartesian3,oe=new b.Cartesian3(.35,-.25,.9),ie=new b.Matrix4,ye=new b.Cartesian4(1,1,1,.85);b.Cartesian3.normalize(oe,oe),C=new b.PostProcessStage({name:"cesium_ecef_volumetric_clouds_stage",fragmentShader:Bi,uniforms:{u_cameraPositionWC:G,u_cameraDirectionWC:K,u_inverseViewProjection:ie,u_sunDirectionWC:oe,u_cloudBottomRadius:U+1500,u_cloudTopRadius:U+8500,u_maxDistance:42e4,u_coverage:.52,u_density:85e-6,u_shadowStrength:.82,u_beerShadowStrength:.64,u_multiScattering:.58,u_powderStrength:.72,u_hazeStrength:.38,u_groundBounceStrength:.26,u_stepCount:48,u_timeSeconds:0,u_atmosphereParams:ye,u_qualityLevel:1}}),S.scene.postProcessStages.add(C),C.enabled=m.value}function Pe(S,b){var G,K;const U=(G=S==null?void 0:S.scene)==null?void 0:G.postProcessStages;U&&(U.ambientOcclusion?(g=U.ambientOcclusion,P=!1):(K=b==null?void 0:b.PostProcessStageLibrary)!=null&&K.createAmbientOcclusionStage&&(g=b.PostProcessStageLibrary.createAmbientOcclusionStage(),U.add(g),P=!0),g&&(g.enabled=c.value,g.uniforms&&("intensity"in g.uniforms&&(g.uniforms.intensity=4.2),"bias"in g.uniforms&&(g.uniforms.bias=.08),"lengthCap"in g.uniforms&&(g.uniforms.lengthCap=.35),"stepSize"in g.uniforms&&(g.uniforms.stepSize=1.8),"frustumLength"in g.uniforms&&(g.uniforms.frustumLength=1200))))}function Ue(S,b){D||(D=new b.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),S.scene.postProcessStages.add(D),D.enabled=!1)}function Ge(S,b){const U=S==null?void 0:S.scene;U&&(l=U.preRender.addEventListener(()=>{var ie;const G=V(S),K=Number(((ie=S==null?void 0:S.camera)==null?void 0:ie.pitch)??-1.2);O+=1;const oe=typeof performance<"u"?performance.now():Date.now();if(oe-B>=1e3&&(X=Math.round(O*1e3/(oe-B)),O=0,B=oe),M&&(M.enabled=p.value,M.uniforms.cameraHeightFactor=y(G,150,12e3),M.uniforms.fogDensity=55e-5+(1-M.uniforms.cameraHeightFactor)*.00125),C&&(C.enabled=m.value,C.enabled&&Le(S,b,G)),g&&(g.enabled=c.value),D){const ye=K>-.62,re=ye?F((K+.62)/.5):0;D.enabled=T.value&&ye,D.uniforms.blurStrength=re}_.value&&G>=8e4?(ke(S,b,G),R=!1):R||(Ae(S),R=!0)}))}function Le(S,b,U){var Me;const G=C,K=S==null?void 0:S.scene,oe=S==null?void 0:S.camera;if(!G||!K||!oe||!b)return;const ie=G.uniforms;b.Cartesian3.clone(oe.positionWC,ie.u_cameraPositionWC),b.Cartesian3.clone(oe.directionWC,ie.u_cameraDirectionWC);const ye=(Me=K.context)==null?void 0:Me.uniformState;ye!=null&&ye.inverseViewProjection?b.Matrix4.clone(ye.inverseViewProjection,ie.u_inverseViewProjection):oe.inverseViewProjectionMatrix&&b.Matrix4.clone(oe.inverseViewProjectionMatrix,ie.u_inverseViewProjection);const re=$e(S,b);b.Cartesian3.clone(re,ie.u_sunDirectionWC);const s=y(U,1e4,18e4),w=b.Cartesian3.normalize(oe.positionWC,Y),z=b.Cartesian3.dot(w,re),H=1-F((z+.08)/.55),le=_.value?1:.62,ce=I.value;ie.u_coverage=ce.coverage,ie.u_density=ce.density*(1-s*.22),ie.u_maxDistance=ce.maxDistance,ie.u_shadowStrength=ce.shadowStrength*(1-s*.12),ie.u_beerShadowStrength=ce.beerShadowStrength*(1-s*.18),ie.u_multiScattering=ce.multiScattering,ie.u_powderStrength=ce.powderStrength,ie.u_hazeStrength=ce.hazeStrength*(1-s*.35),ie.u_groundBounceStrength=ce.groundBounceStrength,ie.u_stepCount=ce.stepCount,ie.u_timeSeconds=Re(S,b),ie.u_atmosphereParams&&(ie.u_atmosphereParams.x=le,ie.u_atmosphereParams.y=.92+H*.28,ie.u_atmosphereParams.z=.82+H*.42,ie.u_atmosphereParams.w=(.58+le*.42)*(1-s*.28));const be=ce.quality==="ultra"?3:ce.quality==="high"?2:ce.quality==="medium"?1:0;ie.u_qualityLevel=be}function $e(S,b){var K,oe,ie;const U=(ie=(oe=(K=S==null?void 0:S.scene)==null?void 0:K.context)==null?void 0:oe.uniformState)==null?void 0:ie.sunDirectionWC;if(U)return U;const G=new b.Cartesian3(.35,-.25,.9);return b.Cartesian3.normalize(G,G),G}function Re(S,b){var U,G,K;try{const oe=(U=S==null?void 0:S.clock)==null?void 0:U.currentTime;if(oe&&((G=b==null?void 0:b.JulianDate)!=null&&G.secondsDifference)&&((K=b==null?void 0:b.JulianDate)!=null&&K.fromIso8601))return A||(A=b.JulianDate.fromIso8601("2026-01-01T00:00:00Z")),b.JulianDate.secondsDifference(oe,A)}catch{}return(typeof performance<"u"?performance.now():Date.now())*.001}function ke(S,b,U){var ye;const G=S==null?void 0:S.scene;if(!G)return;v||(v=Mi(S)),Ti(S,b),typeof G.highDynamicRange=="boolean"&&(G.highDynamicRange=!0);const K=(ye=G.postProcessStages)==null?void 0:ye.bloom;K&&(K.enabled=!0,K.uniforms&&("contrast"in K.uniforms&&(K.uniforms.contrast=149),"brightness"in K.uniforms&&(K.uniforms.brightness=-.12),"delta"in K.uniforms&&(K.uniforms.delta=1),"sigma"in K.uniforms&&(K.uniforms.sigma=3.25),"stepSize"in K.uniforms&&(K.uniforms.stepSize=5)));const oe=G.skyAtmosphere;if(!oe)return;const ie=y(U,500,12e4);oe.hueShift=-.035+ie*.035,oe.saturationShift=-.14+ie*.09,oe.brightnessShift=.03+(1-ie)*.08}function Ae(S){var oe,ie,ye;const b=S==null?void 0:S.scene;if(!b)return;const U=((oe=t.getCesium)==null?void 0:oe.call(t))||window.Cesium;if(v){Di(S,U,v),v=null;return}typeof b.highDynamicRange=="boolean"&&J.hdr!==null&&(b.highDynamicRange=J.hdr),"sunBloom"in b&&J.sunBloom!==void 0&&(b.sunBloom=J.sunBloom);const G=b.globe;if(G&&J.globe){const re=J.globe;re.enableLighting!==void 0&&(G.enableLighting=re.enableLighting),re.showGroundAtmosphere!==void 0&&(G.showGroundAtmosphere=re.showGroundAtmosphere),re.dynamicAtmosphereLighting!==void 0&&"dynamicAtmosphereLighting"in G&&(G.dynamicAtmosphereLighting=re.dynamicAtmosphereLighting),re.dynamicAtmosphereLightingFromSun!==void 0&&"dynamicAtmosphereLightingFromSun"in G&&(G.dynamicAtmosphereLightingFromSun=re.dynamicAtmosphereLightingFromSun),re.atmosphereLightIntensity!==void 0&&"atmosphereLightIntensity"in G&&(G.atmosphereLightIntensity=re.atmosphereLightIntensity),re.atmosphereHueShift!==void 0&&"atmosphereHueShift"in G&&(G.atmosphereHueShift=re.atmosphereHueShift),re.atmosphereSaturationShift!==void 0&&"atmosphereSaturationShift"in G&&(G.atmosphereSaturationShift=re.atmosphereSaturationShift),re.atmosphereBrightnessShift!==void 0&&"atmosphereBrightnessShift"in G&&(G.atmosphereBrightnessShift=re.atmosphereBrightnessShift),re.lightingFadeInDistance!==void 0&&"lightingFadeInDistance"in G&&(G.lightingFadeInDistance=re.lightingFadeInDistance),re.lightingFadeOutDistance!==void 0&&"lightingFadeOutDistance"in G&&(G.lightingFadeOutDistance=re.lightingFadeOutDistance),re.nightFadeInDistance!==void 0&&"nightFadeInDistance"in G&&(G.nightFadeInDistance=re.nightFadeInDistance),re.nightFadeOutDistance!==void 0&&"nightFadeOutDistance"in G&&(G.nightFadeOutDistance=re.nightFadeOutDistance)}b.light&&J.light&&J.light.intensity!==void 0&&(b.light.intensity=J.light.intensity);const K=(ie=b.postProcessStages)==null?void 0:ie.bloom;if(K&&J.bloom&&(K.enabled=J.bloom.enabled,K.uniforms&&("contrast"in K.uniforms&&J.bloom.contrast!==void 0&&(K.uniforms.contrast=J.bloom.contrast),"brightness"in K.uniforms&&J.bloom.brightness!==void 0&&(K.uniforms.brightness=J.bloom.brightness),"delta"in K.uniforms&&J.bloom.delta!==void 0&&(K.uniforms.delta=J.bloom.delta),"sigma"in K.uniforms&&J.bloom.sigma!==void 0&&(K.uniforms.sigma=J.bloom.sigma),"stepSize"in K.uniforms&&J.bloom.stepSize!==void 0&&(K.uniforms.stepSize=J.bloom.stepSize))),b.skyAtmosphere&&J.sky&&(J.sky.show!==void 0&&(b.skyAtmosphere.show=J.sky.show),b.skyAtmosphere.hueShift=J.sky.hueShift,b.skyAtmosphere.saturationShift=J.sky.saturationShift,b.skyAtmosphere.brightnessShift=J.sky.brightnessShift),J.celestial){const re=J.celestial;b.sun&&re.sunShow!==void 0&&(b.sun.show=re.sunShow),b.moon&&re.moonShow!==void 0&&(b.moon.show=re.moonShow),b.skyBox&&re.skyBoxShow!==void 0&&(b.skyBox.show=re.skyBoxShow)}(ye=b.requestRender)==null||ye.call(b)}function qe(){h&&(clearInterval(h),h=null)}async function Ze(){var G,K;const S=!x.value;if(x.value=S,!S){qe();return}const b=(G=t.getViewer)==null?void 0:G.call(t),U=((K=t.getCesium)==null?void 0:K.call(t))||window.Cesium;if(!b||!U){x.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Be(b,U),je(b,U),Ee(b,U)}catch(oe){x.value=!1,n.error("图表模块加载失败",oe)}}async function Be(S,b){await ae(),await oa(),a.value&&(L||(L=i.init(a.value),ze()),o||(o=()=>{L==null||L.resize()},window.addEventListener("resize",o)),L.resize(),Ee(S,b))}function je(S,b){h||(h=window.setInterval(()=>{!L||!x.value||Ee(S,b)},1200))}function Ee(S,b){var ie;const U=new Date,G=`${Q(U.getHours())}:${Q(U.getMinutes())}:${Q(U.getSeconds())}`,K=Number((V(S)/1e3).toFixed(2)),oe=Number(b.Math.toDegrees(((ie=S==null?void 0:S.camera)==null?void 0:ie.pitch)??0).toFixed(1));$(ne.labels,G,20),$(ne.cameraHeightKm,K,20),$(ne.pitchDeg,oe,20),$(ne.fps,X,20),L.setOption({xAxis:{data:ne.labels},series:[{data:ne.cameraHeightKm},{data:ne.pitchDeg},{data:ne.fps}]})}function ze(){L&&L.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function He(){var U,G;u&&(clearInterval(u),u=null),qe();const S=(U=t.getViewer)==null?void 0:U.call(t),b=(G=S==null?void 0:S.scene)==null?void 0:G.postProcessStages;l&&(l(),l=null),r&&(r(),r=null),M&&b&&b.remove(M),M=null,C&&b&&b.remove(C),C=null,D&&b&&b.remove(D),D=null,g&&(P&&b&&b.remove(g),g=null),P=!1,R=!1,S&&Ae(S),o&&(window.removeEventListener("resize",o),o=null),L&&(L.dispose(),L=null),i=null,f=!1}function V(S){var K,oe,ie;const b=(oe=(K=S==null?void 0:S.scene)==null?void 0:K.globe)==null?void 0:oe.ellipsoid,U=(ie=S==null?void 0:S.camera)==null?void 0:ie.positionWC;if(!b||!U)return 0;const G=b.cartesianToCartographic(U);return Math.max(0,Number((G==null?void 0:G.height)??0))}function y(S,b,U){return!Number.isFinite(S)||U<=b?0:F((S-b)/(U-b))}function F(S){return Math.min(1,Math.max(0,Number(S)||0))}function N(S,b,U,G){const K=Number(S);return Number.isFinite(K)?Math.min(G,Math.max(U,K)):b}function $(S,b,U){S.push(b),S.length>U&&S.shift()}function Q(S){return String(S).padStart(2,"0")}return(S,b)=>e.headless?fe("",!0):(ee(),se("div",ki,[E("div",Ii,[E("div",zi,[b[0]||(b[0]=E("span",{class:"panel-title"},"Cinematic FX",-1)),E("button",{class:"panel-btn",onClick:Ze},he(x.value?"隐藏图表":"显示图表"),1)]),E("div",Oi,[Se(un,{title:"Effect Parameters",controls:k.value,onChange:we},null,8,["controls"])]),Ye(E("div",{ref_key:"chartRef",ref:a,class:"fx-chart"},null,512),[[ut,x.value]])])]))}},Ni=st(Hi,[["__scopeId","data-v-9f955e42"]]),Wi={key:0,class:"launcher-count"},Ui={class:"panel-header"},Gi={class:"panel-title-block"},$i={class:"panel-mark"},qi={class:"panel-copy"},ji={class:"panel-subtitle"},Xi={class:"panel-actions"},Vi=["title"],Ki={class:"panel-tabs","aria-label":"3D 工具分类"},Yi=["aria-pressed","onClick"],Zi={class:"panel-scroll"},Ji={class:"panel-page"},Qi={class:"overview-grid"},er={class:"overview-tile"},tr={class:"overview-tile"},nr={class:"overview-tile"},ar={key:0,class:"quick-actions"},ir=["disabled","onClick"],rr={key:1,class:"empty-state"},or={class:"panel-page"},sr=["aria-expanded"],lr={class:"section-main"},cr={class:"section-meta"},ur={key:0,class:"section-body"},dr={class:"option-grid"},hr=["disabled","aria-pressed","title","onClick"],fr={class:"custom-basemap-input-row"},mr=["disabled"],pr={key:0,class:"custom-basemap-current"},gr=["aria-expanded"],vr={class:"section-main"},yr={class:"section-meta"},br={key:0,class:"section-body"},xr={class:"option-grid"},Sr=["aria-pressed","title","onClick"],_r=["aria-expanded"],wr={class:"section-main"},Tr={class:"section-meta"},Mr={key:0,class:"section-body"},Dr={class:"overlay-list"},Lr=["disabled","aria-pressed","title","onClick"],Cr={class:"overlay-copy"},Fr={class:"overlay-title"},Pr={key:0,class:"overlay-desc"},Ar={key:3,class:"empty-state"},Er={class:"panel-page"},Rr={class:"module-list"},kr=["aria-expanded","onClick"],Ir={class:"module-icon"},zr={class:"module-copy"},Or={class:"module-title"},Br={key:0,class:"module-desc"},Hr={class:"module-head-side"},Nr={key:0,class:"module-body"},Wr={key:0,class:"module-actions"},Ur=["disabled","onClick"],Gr={key:0,class:"empty-state"},$r={class:"panel-page"},qr={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},jr={class:"data-upload-hint"},Xr={key:0,class:"data-source-list"},Vr={class:"data-source-head"},Kr={class:"data-source-count"},Yr=["title","aria-label","onClick"],Zr={class:"data-source-icon"},Jr={class:"data-source-copy"},Qr={class:"data-source-name"},eo={class:"data-source-type"},to={key:1,class:"empty-state"},kn=3,no=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",ao={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(e,{emit:t}){const n=e,a=Z(Array.isArray(n.loadedDataSources)?n.loadedDataSources:[]);xe(()=>n.loadedDataSources,q=>{const j=Array.isArray(q)?q:[];j!==a.value&&(a.value=j)},{immediate:!0});const p=t,m=O(),c=m.uiStateVersion===kn,T=Z(m.activeTab||"scene"),_=Z(!!m.compactMode),x=Z(new Set(c?m.expandedLayerSectionIds||[]:[])),I=Z(new Set(c?m.expandedModuleIds||[]:[])),k=Z(n.customBasemapUrl||""),M=Z(null),C=_e(()=>n.embedded||n.open),D=_e(()=>n.modules.find(q=>q.id==="scene")||null),g=_e(()=>{var q;return((q=D.value)==null?void 0:q.actions)||[]}),P=_e(()=>n.modules.filter(q=>q.id!=="scene")),L=_e(()=>P.value.filter(q=>q.statusTone==="success"||q.statusTone==="warning").length),i=_e(()=>n.overlayOptions.filter(q=>!!q.active).length),d=[{id:"scene",label:"场景",icon:jt},{id:"layers",label:"图层",icon:Xt},{id:"data",label:"数据",icon:tn},{id:"modules",label:"模块",icon:qt}],u=_e(()=>{var q;return((q=n.basemapOptions.find(j=>j.value===n.activeBasemap))==null?void 0:q.label)||"未选择"}),h=_e(()=>{var q;return((q=n.terrainOptions.find(j=>j.value===n.activeTerrain))==null?void 0:q.label)||"未选择"});xe(()=>n.modules.map(q=>q.id),q=>{q.includes(T.value)||T.value==="scene"||T.value==="layers"||T.value==="modules"||(T.value="scene")},{immediate:!0}),xe([T,_,x,I],X,{deep:!0}),xe(()=>n.customBasemapUrl,q=>{q!==k.value&&(k.value=q||"")});function o(q){p("update:open",q)}function l(q){return x.value.has(q)}function r(q){const j=new Set(x.value);j.has(q)?j.delete(q):j.add(q),x.value=j}function f(q){return I.value.has(q)}function v(q){const j=new Set(I.value);j.has(q)?j.delete(q):j.add(q),I.value=j}function A(q){q!=null&&q.disabled||p("update:activeBasemap",q.value)}function R(){p("custom-basemap-submit",{url:k.value})}function O(){if(typeof window>"u")return{};try{const q=window.localStorage.getItem(n.storageKey);return q?JSON.parse(q):{}}catch{return{}}}function X(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:kn,activeTab:T.value,compactMode:_.value,expandedLayerSectionIds:[...x.value],expandedModuleIds:[...I.value]}))}catch{}}function B(q){return{scene:jt,effects:Ra,clouds:Ea,wind:Aa,fluid:Pa,shallowWater:Tn}[q]||qt}function Y(q,j){var ve;return((ve={scene:{home:Ca,everest:_n,tileset:Ot},wind:{load:La,clear:Vt},fluid:{pick:wn,clear:Vt},shallowWater:{toggle:Tn}}[q])==null?void 0:ve[j])||Fa}function te(q,j){p("module-action",{moduleId:q,actionId:j})}function ae(q,j,W){const ve=j.type==="range"?Number(W):W;p("control-change",{moduleId:q,controlId:j.id,value:ve})}function ne(q){q.disabled||p("overlay-toggle",{overlayId:q.value,value:!q.active})}function J(q){return{geojson:Pt,json:Pt,kml:Mn,kmz:Mn,shp:Xt,gltf:Ot,czml:Pt,"3dtiles":Ot}[q]||Pt}function de(q){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[q]||q.toUpperCase()}function we(q){var W;const j=(W=q.target)==null?void 0:W.files;!j||j.length===0||(p("data-import",{files:Array.from(j)}),M.value&&(M.value.value=""))}function Fe(q){p("data-remove",{id:q})}function Te(){p("data-clear-all")}return(q,j)=>(ee(),se("aside",{class:Ce(["cesium-tool-shell",{"is-open":C.value,"is-embedded":e.embedded}])},[!e.embedded&&!C.value?(ee(),se("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:j[0]||(j[0]=W=>o(!0))},[Se(ue(qt),{size:18,"stroke-width":"2"}),j[7]||(j[7]=E("span",null,"高级控制台",-1)),L.value?(ee(),se("span",Wi,he(L.value),1)):fe("",!0)])):fe("",!0),Ye(E("section",{class:Ce(["cesium-tool-panel",{compact:_.value}]),"aria-label":"Cesium 高级控制台"},[E("header",Ui,[E("div",Gi,[E("span",$i,[Se(ue(jt),{size:18,"stroke-width":"2"})]),E("span",qi,[j[8]||(j[8]=E("span",{class:"panel-title"},"3D 高级控制台",-1)),E("span",ji,he(u.value)+" / "+he(h.value),1)])]),E("div",Xi,[E("button",{class:"icon-btn",type:"button",title:_.value?"切换为舒展布局":"切换为紧凑布局",onClick:j[1]||(j[1]=W=>_.value=!_.value)},[Se(ue(Ma),{size:16,"stroke-width":"2"})],8,Vi),e.embedded?fe("",!0):(ee(),se("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:j[2]||(j[2]=W=>o(!1))},[Se(ue(xn),{size:17,"stroke-width":"2"})]))])]),E("nav",Ki,[(ee(),se(nt,null,rt(d,W=>E("button",{key:W.id,class:Ce(["tab-btn",{active:T.value===W.id}]),type:"button","aria-pressed":T.value===W.id,onClick:ve=>T.value=W.id},[(ee(),Oe(dt(W.icon),{size:15,"stroke-width":"2"})),E("span",null,he(W.label),1)],10,Yi)),64))]),E("div",Zi,[Ye(E("section",Ji,[E("div",Qi,[E("div",er,[j[9]||(j[9]=E("span",{class:"overview-label"},"地图源",-1)),E("strong",null,he(u.value),1)]),E("div",tr,[j[10]||(j[10]=E("span",{class:"overview-label"},"地形",-1)),E("strong",null,he(h.value),1)]),E("div",nr,[j[11]||(j[11]=E("span",{class:"overview-label"},"模块",-1)),E("strong",null,he(L.value)+"/"+he(P.value.length),1)])]),g.value.length?(ee(),se("div",ar,[(ee(!0),se(nt,null,rt(g.value,W=>(ee(),se("button",{key:W.id,class:Ce(["tool-action",[W.variant||"default",{active:W.active}]]),disabled:W.disabled,type:"button",onClick:ve=>te(D.value.id,W.id)},[(ee(),Oe(dt(Y(D.value.id,W.id)),{size:15,"stroke-width":"2"})),It(" "+he(W.label),1)],10,ir))),128))])):(ee(),se("div",rr," 暂无场景快捷操作 "))],512),[[ut,T.value==="scene"]]),Ye(E("section",or,[e.basemapOptions.length?(ee(),se("div",{key:0,class:Ce(["option-group",{expanded:l("basemap")}])},[E("button",{class:"section-head section-toggle",type:"button","aria-expanded":l("basemap"),onClick:j[3]||(j[3]=W=>r("basemap"))},[E("span",lr,[Se(ue(Xt),{size:16,"stroke-width":"2"}),j[12]||(j[12]=E("span",null,"底图源",-1))]),E("span",cr,[E("span",null,he(u.value),1),Se(ue(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,sr),l("basemap")?(ee(),se("div",ur,[E("div",dr,[(ee(!0),se(nt,null,rt(e.basemapOptions,W=>(ee(),se("button",{key:W.value,class:Ce(["option-card",{active:W.value===e.activeBasemap}]),type:"button",disabled:W.disabled,"aria-pressed":W.value===e.activeBasemap,title:W.description||W.label,onClick:ve=>A(W)},[E("span",null,he(W.label),1),W.value===e.activeBasemap?(ee(),Oe(ue(Sn),{key:0,size:15,"stroke-width":"2.4"})):fe("",!0)],10,hr))),128))]),E("form",{class:"custom-basemap-editor",onSubmit:gt(R,["prevent"])},[E("div",fr,[Se(ue(Da),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),Ye(E("input",{"onUpdate:modelValue":j[4]||(j[4]=W=>k.value=W),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[zt,k.value]]),E("button",{class:"custom-basemap-submit",type:"submit",disabled:!k.value.trim(),title:"加载自定义 XYZ"},[Se(ue(ca),{size:14,"stroke-width":"2"}),j[13]||(j[13]=E("span",null,"加载",-1))],8,mr)]),e.customBasemapUrl?(ee(),se("div",pr,he(e.customBasemapUrl),1)):fe("",!0)],32)])):fe("",!0)],2)):fe("",!0),e.terrainOptions.length?(ee(),se("div",{key:1,class:Ce(["option-group",{expanded:l("terrain")}])},[E("button",{class:"section-head section-toggle",type:"button","aria-expanded":l("terrain"),onClick:j[5]||(j[5]=W=>r("terrain"))},[E("span",vr,[Se(ue(_n),{size:16,"stroke-width":"2"}),j[14]||(j[14]=E("span",null,"地形",-1))]),E("span",yr,[E("span",null,he(h.value),1),Se(ue(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,gr),l("terrain")?(ee(),se("div",br,[E("div",xr,[(ee(!0),se(nt,null,rt(e.terrainOptions,W=>(ee(),se("button",{key:W.value,class:Ce(["option-card",{active:W.value===e.activeTerrain}]),type:"button","aria-pressed":W.value===e.activeTerrain,title:W.description||W.label,onClick:ve=>q.$emit("update:activeTerrain",W.value)},[E("span",null,he(W.label),1),W.value===e.activeTerrain?(ee(),Oe(ue(Sn),{key:0,size:15,"stroke-width":"2.4"})):fe("",!0)],10,Sr))),128))])])):fe("",!0)],2)):fe("",!0),e.overlayOptions.length?(ee(),se("div",{key:2,class:Ce(["option-group",{expanded:l("overlay")}])},[E("button",{class:"section-head section-toggle",type:"button","aria-expanded":l("overlay"),onClick:j[6]||(j[6]=W=>r("overlay"))},[E("span",wr,[Se(ue(wn),{size:16,"stroke-width":"2"}),j[15]||(j[15]=E("span",null,"叠加层",-1))]),E("span",Tr,[E("span",null,he(i.value)+"/"+he(e.overlayOptions.length),1),Se(ue(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,_r),l("overlay")?(ee(),se("div",Mr,[E("div",Dr,[(ee(!0),se(nt,null,rt(e.overlayOptions,W=>(ee(),se("button",{key:W.value,class:Ce(["overlay-row",{active:!!W.active}]),type:"button",disabled:W.disabled,"aria-pressed":!!W.active,title:W.description||W.label,onClick:ve=>ne(W)},[E("span",Cr,[E("span",Fr,he(W.label),1),W.description?(ee(),se("span",Pr,he(W.description),1)):fe("",!0)]),E("span",{class:Ce(["toggle-control",{active:!!W.active}]),"aria-hidden":"true"},[...j[16]||(j[16]=[E("span",{class:"toggle-track"},[E("span",{class:"toggle-thumb"})],-1)])],2)],10,Lr))),128))])])):fe("",!0)],2)):fe("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(ee(),se("div",Ar," 暂无图层配置项 ")):fe("",!0)],512),[[ut,T.value==="layers"]]),Ye(E("section",Er,[E("div",Rr,[(ee(!0),se(nt,null,rt(P.value,W=>{var ve,Ie;return ee(),se("article",{key:W.id,class:Ce(["module-item",{expanded:f(W.id)}])},[E("button",{class:"module-head",type:"button","aria-expanded":f(W.id),onClick:me=>v(W.id)},[E("span",Ir,[(ee(),Oe(dt(B(W.id)),{size:16,"stroke-width":"2"}))]),E("span",zr,[E("span",Or,he(W.title),1),W.description?(ee(),se("span",Br,he(W.description),1)):fe("",!0)]),E("span",Hr,[W.status?(ee(),se("span",{key:0,class:Ce(["module-status",W.statusTone||"neutral"])},he(W.status),3)):fe("",!0),Se(ue(Ft),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,kr),f(W.id)?(ee(),se("div",Nr,[(ve=W.actions)!=null&&ve.length?(ee(),se("div",Wr,[(ee(!0),se(nt,null,rt(W.actions,me=>(ee(),se("button",{key:me.id,class:Ce(["tool-action",[me.variant||"default",{active:me.active}]]),disabled:me.disabled,type:"button",onClick:Pe=>te(W.id,me.id)},[(ee(),Oe(dt(Y(W.id,me.id)),{size:14,"stroke-width":"2"})),It(" "+he(me.label),1)],10,Ur))),128))])):fe("",!0),(Ie=W.controls)!=null&&Ie.length?(ee(),se("div",{key:1,class:Ce(["control-list control-list-gui",W.controlLayout?`control-list-${W.controlLayout}`:""])},[Se(un,{title:W.title,controls:W.controls,onChange:me=>ae(W.id,me.control,me.value)},null,8,["title","controls","onChange"])],2)):fe("",!0)])):fe("",!0)],2)}),128))]),P.value.length?fe("",!0):(ee(),se("div",Gr," 暂无可用功能模块 "))],512),[[ut,T.value==="modules"]]),Ye(E("section",$r,[E("label",qr,[E("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:M,class:"data-file-input",type:"file",multiple:"",accept:no,onChange:we},null,544),E("div",jr,[Se(ue(tn),{size:28,"stroke-width":"1.5"}),j[17]||(j[17]=E("span",null,"选择文件或拖拽到此处",-1)),j[18]||(j[18]=E("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),a.value.length?(ee(),se("div",Xr,[E("div",Vr,[E("span",Kr," 已加载 "+he(a.value.length)+" 个数据源 ",1),E("button",{class:"tool-action danger",type:"button",onClick:Te},[Se(ue(Vt),{size:13,"stroke-width":"2"}),j[19]||(j[19]=It(" 全部清除 ",-1))])]),(ee(!0),se(nt,null,rt(a.value,W=>(ee(),se("button",{key:W.id,class:"data-source-row",type:"button",title:`点击移除 ${W.name} (${de(W.type)})`,"aria-label":`移除 ${W.name}`,onClick:ve=>Fe(W.id)},[E("span",Zr,[(ee(),Oe(dt(J(W.type)),{size:15,"stroke-width":"2"}))]),E("span",Jr,[E("span",Qr,he(W.name),1),E("span",eo,he(de(W.type)),1)]),Se(ue(xn),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,Yr))),128))])):(ee(),se("div",to," 暂无已导入的数据 "))],512),[[ut,T.value==="data"]])])],2),[[ut,e.embedded||C.value]])],2))}},io=st(ao,[["__scopeId","data-v-7d2bb0cf"]]),ro={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},oo={class:"dialog-header"},so={class:"dialog-title-row"},lo={class:"dialog-file-name"},co={class:"coord-fields"},uo={class:"coord-field"},ho={key:0,class:"coord-error"},fo={class:"coord-field"},mo={key:0,class:"coord-error"},po={class:"coord-field"},go={key:0,class:"coord-error"},vo={class:"dialog-actions"},yo=["disabled"],bo={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,a=t,p=Z(""),m=Z(""),c=Z("0"),T=Z(null),_=Z(""),x=Z(""),I=Z(""),k=_e(()=>p.value!==""&&m.value!==""&&!_.value&&!x.value&&!I.value);function M(){const D=parseFloat(p.value),g=parseFloat(m.value),P=parseFloat(c.value);_.value="",x.value="",I.value="",p.value!==""&&(isNaN(D)||D<-180||D>180)&&(_.value="经度范围: -180 ~ 180"),m.value!==""&&(isNaN(g)||g<-90||g>90)&&(x.value="纬度范围: -90 ~ 90"),c.value!==""&&(isNaN(P)||P<0)&&(I.value="高度必须 ≥ 0")}function C(){if(!k.value){M();return}const D=parseFloat(p.value),g=parseFloat(m.value),P=parseFloat(c.value)||0;a("confirm",{lng:D,lat:g,height:P})}return xe(()=>n.visible,D=>{if(!D){_.value="",x.value="",I.value="";return}p.value="",m.value="",c.value="0",_.value="",x.value="",I.value="",D&&setTimeout(()=>{var g;(g=T.value)==null||g.focus()},60)}),(D,g)=>(ee(),Oe(ma,{to:"body"},[e.visible?(ee(),se("div",{key:0,class:"cesium-data-dialog-overlay",onClick:g[4]||(g[4]=gt(P=>D.$emit("cancel"),["self"]))},[E("div",ro,[E("header",oo,[E("div",so,[Se(ue(Ot),{size:18,"stroke-width":"2"}),g[5]||(g[5]=E("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),E("p",lo,he(e.fileName),1),g[6]||(g[6]=E("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),E("form",{class:"dialog-form",onSubmit:gt(C,["prevent"])},[E("div",co,[E("label",uo,[g[7]||(g[7]=E("span",{class:"coord-label"},"经度 (Longitude)",-1)),Ye(E("input",{ref_key:"lngInputRef",ref:T,"onUpdate:modelValue":g[0]||(g[0]=P=>p.value=P),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:M},null,544),[[zt,p.value]]),_.value?(ee(),se("span",ho,he(_.value),1)):fe("",!0)]),E("label",fo,[g[8]||(g[8]=E("span",{class:"coord-label"},"纬度 (Latitude)",-1)),Ye(E("input",{"onUpdate:modelValue":g[1]||(g[1]=P=>m.value=P),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:M},null,544),[[zt,m.value]]),x.value?(ee(),se("span",mo,he(x.value),1)):fe("",!0)]),E("label",po,[g[9]||(g[9]=E("span",{class:"coord-label"},"高度 (Height 米)",-1)),Ye(E("input",{"onUpdate:modelValue":g[2]||(g[2]=P=>c.value=P),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:M},null,544),[[zt,c.value]]),I.value?(ee(),se("span",go,he(I.value),1)):fe("",!0)])]),E("div",vo,[E("button",{class:"dialog-btn cancel-btn",type:"button",onClick:g[3]||(g[3]=P=>D.$emit("cancel"))}," 取消 "),E("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!k.value},[Se(ue(ca),{size:14,"stroke-width":"2"}),g[10]||(g[10]=It(" 确认放置 ",-1))],8,yo)])],32)])])):fe("",!0)]))}},xo=st(bo,[["__scopeId","data-v-81f307a1"]]);function So(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(L){return(L==null?void 0:L._view)||(L==null?void 0:L.view)}function n(L){const i=t(L);if(!(i!=null&&i.passState))throw new Error("Cesium scene passState is unavailable.");return i.passState}function a(L){const i=t(L);return(i==null?void 0:i.frustumCommandsList)||(i==null?void 0:i._frustumCommandsList)||[]}const p=`
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
`,m=`
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
`,c=`
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
`,T=`
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
`,x=`
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
`;class I{constructor(i){this.commandType=i.commandType,this.geometry=i.geometry,this.attributeLocations=i.attributeLocations,this.primitiveType=i.primitiveType,this.uniformMap=i.uniformMap,this.vertexShaderSource=i.vertexShaderSource,this.fragmentShaderSource=i.fragmentShaderSource,this.rawRenderState=i.rawRenderState,this.framebuffer=i.framebuffer,this.isPostRender=i.isPostRender,this.outputTexture=i.outputTexture,this.autoClear=e.defaultValue(i.autoClear,!1),this.preExecute=i.preExecute,this.modelMatrix=e.defaultValue(i.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(i){switch(this.commandType){case"Draw":{const d=e.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),u=e.ShaderProgram.fromCache({context:i,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),h=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:d,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:u,framebuffer:this.framebuffer,renderState:h,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(i,d){this.geometry=d;const u=e.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=u}update(i){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(i.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&i.commandList.push(this.clearCommand),i.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class k{constructor(){}static loadText(i){const d=new XMLHttpRequest;return d.open("GET",i,!1),d.send(),d.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(i){if(e.defined(i.arrayBufferView)){const u={};u.arrayBufferView=i.arrayBufferView,i.source=u,i.flipY=!1}return new e.Texture(i)}static createDepthFramebuffer(i,d,u){return new e.Framebuffer({context:i,colorTextures:[this.createTexture({context:i,width:d,height:u,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(d*u*4)})],depthRenderbuffer:new e.Renderbuffer({context:i,width:d,height:u,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(i,d,u,h=!1){const o={context:i,colorTextures:[d],destroyAttachments:h};return u&&(o.depthTexture=u),new e.Framebuffer(o)}static createRawRenderState(i){const h={viewport:i.viewport,depthTest:i.depthTest,depthMask:i.depthMask,blending:i.blending};return e.Appearance.getDefaultRenderState(!0,!1,h)}}const P=class P{constructor(i,d={}){if(!i)throw new Error("Cesium Viewer is required");this.viewer=i,this._initConfiguration(d),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(i){this.config={resolution:new e.Cartesian2(i.width||P.DEFAULTS.width,i.height||P.DEFAULTS.height),dimensions:i.dimensions||P.DEFAULTS.dimensions.clone(),heightRange:{min:i.minHeight??P.DEFAULTS.heightRange[0],max:i.maxHeight??P.DEFAULTS.heightRange[1]},baseHeight:i.baseHeight??P.DEFAULTS.baseHeight,fluidParams:i.fluidParams||P.DEFAULTS.fluidParams.clone(),customParams:i.customParams||P.DEFAULTS.customParams.clone(),waterColor:i.waterColor||P.DEFAULTS.waterColor.clone(),lonLat:i.lonLat||[...P.DEFAULTS.lonLat],timeStep:i.timeStep||P.DEFAULTS.timeStep,heightMapSource:i.heightMapSource||P.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(i){const d=Number(i);!Number.isFinite(d)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,d)),this.resetSimulation())}resetSimulation(){var i,d;this._frameCount=0,(d=(i=this.viewer.scene).requestRender)==null||d.call(i)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const i=()=>k.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:i(),B:i(),C:i(),D:i()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(i){if(!(i!=null&&i.arrayBufferView)||!i.width||!i.height)throw new Error("Invalid height map source.");return k.createTexture({context:this.viewer.scene.context,width:i.width,height:i.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:i.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var O,X;const i=this.viewer.scene.context,d=k.createDepthFramebuffer(i,this.config.resolution.x,this.config.resolution.y),u=this.viewer.scene,h=u.frameState,o=n(this.viewer.scene),l=u.camera,r=h.camera,f=o.framebuffer,v=e.BoundingRectangle.clone(o.viewport,new e.BoundingRectangle);let A=null,R=[];try{o.viewport.x=0,o.viewport.y=0,o.viewport.width=this.config.resolution.x,o.viewport.height=this.config.resolution.y,o.framebuffer=d,u.camera=this.heightMapCamera,h.camera=this.heightMapCamera,h.context.uniformState.updateCamera(this.heightMapCamera),R=this._processHeightMapShaders(),this._renderDepthPrepass(o);const B=k.createTexture({context:i,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return A=k.createFramebuffer(i,B),this._copyTexture(d.getColorTexture(0),A),B}finally{this._restoreHeightMapShaders(R),o.framebuffer=f,e.BoundingRectangle.clone(v,o.viewport),u.camera=l,h.camera=r,r&&h.context.uniformState.updateCamera(r),A&&!((O=A.isDestroyed)!=null&&O.call(A))&&A.destroy(),d&&!((X=d.isDestroyed)!=null&&X.call(d))&&d.destroy()}}_renderDepthPrepass(i){const d=this.viewer.scene.frameState;d.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(h=>h.execute(this.viewer.scene.context,i))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const i={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:m}),this._createComputePass("B",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:c}),this._createComputePass("C",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:T}),this._createComputePass("D",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:_})]}_createComputePass(i,{uniforms:d,shaderSource:u}){return new I({commandType:"Compute",uniformMap:d,fragmentShaderSource:new e.ShaderSource({sources:[p,u]}),geometry:k.getFullscreenQuad(),outputTexture:this.textures[i],preExecute:h=>h.commandToExecute.outputTexture=this.textures[i]})}_createMainRenderPass(){const i=C([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new I({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[p,x]}),geometry:this._createBoxGeometry(),modelMatrix:i,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var i,d,u,h;return(h=(u=(d=(i=t(this.viewer.scene))==null?void 0:i.globeDepth)==null?void 0:d.colorFramebufferManager)==null?void 0:u._colorTextures)==null?void 0:h[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(i=>this.viewer.scene.primitives.add(i)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(i){const d=this.viewer.camera.getPickRay(i);return this.viewer.scene.globe.pick(d,this.viewer.scene)}_createOrthographicCamera(){const i=new e.Camera(this.viewer.scene);i.frustum=new e.OrthographicOffCenterFrustum;const[d,u]=this.config.lonLat,h=e.Cartesian3.fromDegrees(d,u,this.config.baseHeight),o=e.Transforms.eastNorthUpToFixedFrame(h),l=i.frustum;l.near=.01,l.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),l.left=-this.config.dimensions.x/2,l.right=this.config.dimensions.x/2,l.bottom=-this.config.dimensions.y/2,l.top=this.config.dimensions.y/2;const r=e.Matrix4.getColumn(o,2,new e.Cartesian3);e.Cartesian3.negate(r,r);const f=e.Matrix4.getColumn(o,1,new e.Cartesian3),v=e.Matrix4.getColumn(o,0,new e.Cartesian3),A=e.Cartesian3.multiplyByScalar(r,-l.far,new e.Cartesian3);return i.position=e.Cartesian3.add(h,A,new e.Cartesian3),i.direction=r,i.up=f,i.right=v,i}destroy(){var i,d;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(u=>{u&&this.viewer.scene.primitives.remove(u)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(u=>{var h;u&&!((h=u.isDestroyed)!=null&&h.call(u))&&u.destroy()}),this.textures={},this._heightMap&&!((d=(i=this._heightMap).isDestroyed)!=null&&d.call(i))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(i,d){const u=this.viewer.scene.context,h=n(this.viewer.scene),o=u.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>i},owner:this}),l=h.framebuffer;h.framebuffer=d,o.execute(u,h),h.framebuffer=l}_getDepthRenderCommands(){var u,h;const i=[],d=a(this.viewer.scene);for(let o=0;o<d.length;++o){const l=d[o],r=(u=l==null?void 0:l.commands)==null?void 0:u[2],f=((h=l==null?void 0:l.indices)==null?void 0:h[2])??(r==null?void 0:r.length)??0;r&&f>0&&i.push(...r.slice(0,f))}return i}_processHeightMapShaders(){const i=[],d=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),u=e.Matrix4.inverse(d,new e.Matrix4),h=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(l=>{var R;if(!((R=l==null?void 0:l.shaderProgram)!=null&&R.fragmentShaderSource)||!l.uniformMap)return;const r=Object.prototype.hasOwnProperty.call(l.uniformMap,"u_inverseEnuMatrix"),f=l.uniformMap.u_inverseEnuMatrix,v=l.shaderProgram,A=new e.Matrix4;l.uniformMap.u_inverseEnuMatrix=()=>{const O=l.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(u,O,A)},l.heightMap_ShaderProgram||(l.heightMap_ShaderProgram=this._getDerivedShaderProgram(h.context,l.shaderProgram,"Height_Map")),l.shaderProgram=l.heightMap_ShaderProgram,i.push({command:l,hadInverseUniform:r,originalInverseUniform:f,originalShaderProgram:v})}),i}_restoreHeightMapShaders(i){i.forEach(d=>{const{command:u,hadInverseUniform:h,originalInverseUniform:o,originalShaderProgram:l}=d;u!=null&&u.uniformMap&&(u.shaderProgram=l,h?u.uniformMap.u_inverseEnuMatrix=o:delete u.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(i,d,u){let h=i.shaderCache.getDerivedShaderProgram(d,u);return e.defined(h)||(h=this._createHeightMapShaderProgram(i,d,u)),h}_createHeightMapShaderProgram(i,d,u){const h=this._modifyFragmentShader(d.fragmentShaderSource);return i.shaderCache.createDerivedShaderProgram(d,u,{vertexShaderSource:d.vertexShaderSource,fragmentShaderSource:h,attributeLocations:d._attributeLocations})}_modifyFragmentShader(i){const d=i.sources.map(u=>e.ShaderSource.replaceMain(u,"czm_heightMap_main"));return d.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:d,defines:i.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};yn(P,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let M=P;const C=(L=[0,0,0],i=[0,0,0],d=[1,1,1])=>{const u=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(i[0]))),h=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(i[1]))),o=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(i[2])));L instanceof e.Cartesian3||(L=e.Cartesian3.fromDegrees(...L));const l=e.Transforms.eastNorthUpToFixedFrame(L);e.Matrix4.multiply(l,u,l),e.Matrix4.multiply(l,h,l),e.Matrix4.multiply(l,o,l);const r=e.Matrix4.fromScale(new e.Cartesian3(...d));return e.Matrix4.multiply(l,r,new e.Matrix4)},D=`
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
    `;function g(){return new e.PostProcessStage({fragmentShader:D})}return{FluidRenderer:M,createSkyEffect:g}}const _o={key:0,class:"fluid-root"},wo={class:"fluid-panel"},To={class:"panel-actions"},Mo=["disabled"],Do={key:0,class:"selected-text"},In=1024,Rt=1e4,zn=1200,Lo=100,Co=.01,Fo=.03,Po=60,Yt=64,Ao=160,Eo={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const a=e,p=n,m=on(),c=Z(10),T=Z(20),_=Z(3),x=Z("#0d4fa3"),I=Z(null),k=Z(null),M=Z(null),C=Z(!1),D=Z(!1),g=Z(null),P=Z(null);let L=null,i=null,d=null,u=null,h=null,o=null,l=0;const r=_e(()=>!Number.isFinite(g.value)||!Number.isFinite(P.value)?"":`经度 ${g.value.toFixed(6)} / 纬度 ${P.value.toFixed(6)}`),f=_e(()=>Number.isFinite(k.value)&&Number.isFinite(M.value)),v=_e(()=>{if(!f.value)return 1;const y=Math.abs(M.value-k.value);return Math.max(y/1e3,.01)}),A=_e(()=>[{id:"threshold",label:"Threshold",type:"range",min:0,max:500,step:1e-4,value:c.value,displayValue:Number(c.value).toFixed(2)},{id:"blend",label:"Blend",type:"range",min:0,max:50,step:1e-4,value:T.value,displayValue:Number(T.value).toFixed(2)},{id:"lightStrength",label:"Light",type:"range",min:0,max:10,step:1e-4,value:_.value,displayValue:Number(_.value).toFixed(2)},{id:"waterLevel",label:"Water Level",type:"range",min:f.value?k.value:0,max:f.value?M.value:1,step:v.value,value:Number.isFinite(Number(I.value))?Number(I.value):0,displayValue:f.value&&Number.isFinite(Number(I.value))?`${Number(I.value).toFixed(2)} m`:"Pick terrain first",disabled:!f.value},{id:"waterColor",label:"Water Color",type:"color",value:x.value}]);xe([c,T,_,x],Ae),xe(I,qe),xe(()=>a.params,y=>{O(y||{})},{deep:!0,immediate:!0}),xe([C,D,r,I,k,M],B,{immediate:!0}),ra(()=>{He(!0)});function R(){var N,$;const y=(N=a.getViewer)==null?void 0:N.call(a),F=(($=a.getCesium)==null?void 0:$.call(a))||window.Cesium;if(!y||!F)return m.warning("Cesium 场景尚未就绪。"),null;if(!L){const Q=So(F);L=Q.FluidRenderer,i=Q.createSkyEffect}return{viewer:y,Cesium:F}}function O(y){Number.isFinite(Number(y.threshold))&&(c.value=Number(y.threshold)),Number.isFinite(Number(y.blend))&&(T.value=Number(y.blend)),Number.isFinite(Number(y.lightStrength))&&(_.value=Number(y.lightStrength)),Le(y.waterColor)&&(x.value=y.waterColor),Number.isFinite(Number(y.waterLevel))&&(I.value=Number(y.waterLevel))}function X({controlId:y,value:F}){y==="threshold"?c.value=Number(F):y==="blend"?T.value=Number(F):y==="lightStrength"?_.value=Number(F):y==="waterLevel"?I.value=Number(F):y==="waterColor"&&Le(F)&&(x.value=F)}function B(){p("state-change",{isPicking:C.value,hasFluid:D.value,selectedText:r.value,waterLevel:I.value,waterLevelMin:k.value,waterLevelMax:M.value})}function Y(){const y=R();if(!y)return;const{viewer:F,Cesium:N}=y;Ee(),Ze(F,N),C.value=!0,d=new N.ScreenSpaceEventHandler(F.scene.canvas),d.setInputAction($=>{te(F,N,$.position)},N.ScreenSpaceEventType.LEFT_CLICK)}async function te(y,F,N){var ie,ye;const $=ke(y,N);if(!$){m.warning("未选中可用地形位置。");return}const Q=++l;Ee();const S=F.Cartographic.fromCartesian($),b=F.Math.toDegrees(S.longitude),U=F.Math.toDegrees(S.latitude),G=Number(S.height),K=Number.isFinite(G)?G:0,oe=new F.Cartesian3(Rt,Rt,0);sa("正在请求模拟范围高度数据...");try{ze();const re=Number(c.value)||0,s=Number(T.value)||0,w=Number(_.value)||0,z=await ae(y,F,{lon:b,lat:U,centerHeight:K,dimensions:oe}),H=ve(z,K),le=H.baseHeight,ce=H.depth,be=Ie(H,K),Me=new F.Cartesian3(Rt,Rt,ce);if(Q!==l)return;k.value=H.minHeight,M.value=H.maxHeight,I.value=be,z||m.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),u=new L(y,{lonLat:[b,U],width:In,height:In,dimensions:Me,baseHeight:le,minHeight:H.minHeight,maxHeight:H.maxHeight,heightMapSource:z,waterColor:Ue(F,x.value),customParams:new F.Cartesian4(re,s,w,10),fluidParams:new F.Cartesian4(.9+w/10*.099,Math.min(1,s/50),re/5e4,me(be,H))}),g.value=b,P.value=U,D.value=!0,(ye=(ie=y.scene).requestRender)==null||ye.call(ie),m.success("水体流体已创建。")}catch(re){m.error("水体流体创建失败",re),m.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{la()}}async function ae(y,F,N){const $=y==null?void 0:y.terrainProvider,Q=J(N.dimensions);if(!$)return null;if(F.EllipsoidTerrainProvider&&$ instanceof F.EllipsoidTerrainProvider)return j(Q);if(typeof F.sampleTerrain!="function"&&typeof F.sampleTerrainMostDetailed!="function")return null;try{return await ne(y,F,N,Q)}catch(S){if(Q<=Yt)throw S;return ne(y,F,N,Yt)}}async function ne(y,F,N,$){const Q=we(F,N,$),S=await Fe(F,y.terrainProvider,Q);return q(S||Q,{size:$})}function J(y){const F=Math.max(Number(y==null?void 0:y.x)||0,Number(y==null?void 0:y.y)||0),N=Math.ceil(F/Po)+1;return de(N,Yt,Ao)}function de(y,F,N){return Math.max(F,Math.min(N,Math.round(y)))}function we(y,{lon:F,lat:N,centerHeight:$,dimensions:Q},S){const b=y.Cartesian3.fromDegrees(F,N,$),U=y.Transforms.eastNorthUpToFixedFrame(b),G=[],K=Math.max(1,S-1);for(let oe=0;oe<S;oe++){const ye=(.5-oe/K)*Q.y;for(let re=0;re<S;re++){const w=(re/K-.5)*Q.x,z=new y.Cartesian3(w,ye,0),H=y.Matrix4.multiplyByPoint(U,z,new y.Cartesian3);G.push(y.Cartographic.fromCartesian(H))}}return G}async function Fe(y,F,N){const $=Te(F);return Number.isInteger($)&&typeof y.sampleTerrain=="function"?y.sampleTerrain(F,$,N):typeof y.sampleTerrainMostDetailed=="function"?y.sampleTerrainMostDetailed(F,N):y.sampleTerrain(F,10,N)}function Te(y){const F=Number(y==null?void 0:y._bottomLevel);return Number.isFinite(F)?Math.max(0,F-1):null}function q(y,{size:F}){var Q;const N=W(y);if(!N)return null;const $=new Float32Array(F*F*4);for(let S=0;S<F*F;S++){const b=Number((Q=y[S])==null?void 0:Q.height),U=S*4;$[U]=Number.isFinite(b)?Re(b,N.minHeight,N.maxHeight):N.minHeight,$[U+1]=0,$[U+2]=0,$[U+3]=1}return{width:F,height:F,arrayBufferView:$,minHeight:N.minHeight,maxHeight:N.maxHeight}}function j(y){return{width:y,height:y,arrayBufferView:new Float32Array(y*y*4),minHeight:0,maxHeight:0}}function W(y){let F=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY;for(const $ of y||[]){const Q=Number($==null?void 0:$.height);Number.isFinite(Q)&&(F=Math.min(F,Q),N=Math.max(N,Q))}return!Number.isFinite(F)||!Number.isFinite(N)?null:{minHeight:F,maxHeight:N}}function ve(y,F){const N=Number(y==null?void 0:y.minHeight),$=Number(y==null?void 0:y.maxHeight);if(Number.isFinite(N)&&Number.isFinite($)){const b=Number(F),U=Number.isFinite(b)?Math.min(N,$,b):Math.min(N,$),G=Number.isFinite(b)?Math.max(N,$,b):Math.max(N,$),K=Math.max(G-U,Co);return{baseHeight:U,depth:K,minHeight:U,maxHeight:U+K}}const Q=Number(F),S=Number.isFinite(Q)?Q-Lo:0;return{baseHeight:S,depth:zn,minHeight:S,maxHeight:S+zn}}function Ie(y,F){const N=y.minHeight+y.depth*Fo,$=Number(F),Q=Number.isFinite($)?$:N;return Re(Q,y.minHeight,y.maxHeight)}function me(y,F){const N=F.maxHeight-F.minHeight;return!Number.isFinite(N)||N<=0?0:Re((y-F.minHeight)/N,0,1)}function Pe(){return!Number.isFinite(k.value)||!Number.isFinite(M.value)?null:{minHeight:Math.min(k.value,M.value),maxHeight:Math.max(k.value,M.value)}}function Ue(y,F){const N=$e(F)||$e("#0d4fa3");return new y.Cartesian3(N.red,N.green,N.blue)}function Ge(){var N;const y=$e(x.value),F=(N=u==null?void 0:u.config)==null?void 0:N.waterColor;!y||!F||(F.x=y.red,F.y=y.green,F.z=y.blue)}function Le(y){return typeof y=="string"&&/^#[0-9a-f]{6}$/i.test(y)}function $e(y){return Le(y)?{red:Number.parseInt(y.slice(1,3),16)/255,green:Number.parseInt(y.slice(3,5),16)/255,blue:Number.parseInt(y.slice(5,7),16)/255}:null}function Re(y,F,N){return Math.max(F,Math.min(N,y))}function ke(y,F){if(!F)return null;if(y.scene.pickPositionSupported&&typeof y.scene.pickPosition=="function"){const $=y.scene.pickPosition(F);if($)return $}const N=y.camera.getPickRay(F);return N?y.scene.globe.pick(N,y.scene):null}function Ae(){var $,Q,S;if(!(u!=null&&u.config))return;const y=Number(c.value)||0,F=Number(T.value)||0,N=Number(_.value)||0;u.config.customParams&&(u.config.customParams.x=y,u.config.customParams.y=F,u.config.customParams.z=N),u.config.fluidParams&&(u.config.fluidParams.x=.9+N/10*.099,u.config.fluidParams.y=Math.min(1,F/50),u.config.fluidParams.z=y/5e4),Ge(),(S=(Q=($=u.viewer)==null?void 0:$.scene)==null?void 0:Q.requestRender)==null||S.call(Q)}function qe(){var Q,S,b,U;if(!((Q=u==null?void 0:u.config)!=null&&Q.fluidParams))return;const y=Pe(),F=Number(I.value);if(!y||!Number.isFinite(F))return;const N=Re(F,y.minHeight,y.maxHeight);if(N!==F){I.value=N;return}const $=me(N,y);typeof u.setInitialWaterLevel=="function"?u.setInitialWaterLevel($):(u.config.fluidParams.w=$,(U=(b=(S=u.viewer)==null?void 0:S.scene)==null?void 0:b.requestRender)==null||U.call(b))}function Ze(y,F){var N,$;if(!o){const Q=y.scene;o={shadows:y.shadows,resolutionScale:y.resolutionScale,msaaSamples:Q.msaaSamples,depthTestAgainstTerrain:Q.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:Q.logarithmicDepthBuffer,highDynamicRange:Q.highDynamicRange,fogEnabled:(N=Q.fog)==null?void 0:N.enabled,showGroundAtmosphere:Q.globe.showGroundAtmosphere,skyAtmosphereShow:($=Q.skyAtmosphere)==null?void 0:$.show,enableLighting:Q.globe.enableLighting}}y.shadows=!0,y.resolutionScale=1,y.scene.msaaSamples=4,y.scene.globe.depthTestAgainstTerrain=!0,y.scene.logarithmicDepthBuffer=!0,y.scene.highDynamicRange=!0,y.scene.fog&&(y.scene.fog.enabled=!0),y.scene.globe.showGroundAtmosphere=!0,y.scene.skyAtmosphere&&(y.scene.skyAtmosphere.show=!0),y.scene.globe.enableLighting=!0,!h&&i&&(h=i(F),y.scene.postProcessStages.add(h))}function Be(y){if(!y||!o)return;const F=y.scene;y.shadows=o.shadows,y.resolutionScale=o.resolutionScale,o.msaaSamples!==void 0&&(F.msaaSamples=o.msaaSamples),F.globe.depthTestAgainstTerrain=o.depthTestAgainstTerrain,F.logarithmicDepthBuffer=o.logarithmicDepthBuffer,F.highDynamicRange=o.highDynamicRange,F.fog&&o.fogEnabled!==void 0&&(F.fog.enabled=o.fogEnabled),F.globe.showGroundAtmosphere=o.showGroundAtmosphere,F.skyAtmosphere&&o.skyAtmosphereShow!==void 0&&(F.skyAtmosphere.show=o.skyAtmosphereShow),F.globe.enableLighting=o.enableLighting,o=null}function je(){He(!1),m.success("水体流体已清除。")}function Ee(){d&&(d.destroy(),d=null),C.value=!1}function ze(){if(u){try{u.destroy()}catch{}u=null,D.value=!1}}function He(y){var N,$,Q;const F=(N=a.getViewer)==null?void 0:N.call(a);if(l+=1,Ee(),ze(),g.value=null,P.value=null,I.value=null,k.value=null,M.value=null,F&&h){try{F.scene.postProcessStages.remove(h)}catch{}h=null}y&&F&&Be(F),(Q=($=F==null?void 0:F.scene)==null?void 0:$.requestRender)==null||Q.call($)}function V(){He(!0),p("close")}return t({startPickHeightMap:Y,clearFluid:je}),(y,F)=>e.headless?fe("",!0):(ee(),se("div",_o,[E("div",wo,[E("div",{class:"panel-head"},[F[0]||(F[0]=E("span",{class:"panel-title"},"水体流体",-1)),E("button",{class:"panel-close",title:"关闭",onClick:V}," × ")]),E("div",To,[E("button",{class:Ce(["action-btn primary",{active:C.value}]),onClick:Y},he(C.value?"等待选点":"捕捉高度图"),3),E("button",{class:"action-btn",disabled:!D.value&&!C.value,onClick:je}," 清除 ",8,Mo)]),r.value?(ee(),se("div",Do,he(r.value),1)):fe("",!0),Se(un,{class:"param-list",title:"Fluid Parameters",controls:A.value,onChange:X},null,8,["controls"])])]))}},Ro=st(Eo,[["__scopeId","data-v-882532f8"]]),ko=`
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
`;function On(e,t){e.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uCaustic=t.uCaustic,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vCWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+ko).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  float cDepth = smoothstep( 0.0, -2.0, vCWorld.y );
  float caus = causticX( vCWorld.xz * 0.06 );
  caus += causticX( vCWorld.xz * 0.13 + 40.0 ) * 0.6;
  totalEmissiveRadiance += vec3( 0.45, 0.85, 0.8 ) * caus * cDepth * uCaustic;`)}}const Io=`
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
`,zo=`
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
`,Oo=`
  varying vec3 vWorldPos;

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Bo=`
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
`;function Ho(e=256){const t=new Float32Array(e*e);for(let M=0;M<e*e;M++)t[M]=Math.random();const n=(M,C)=>{const D=new Float32Array(e*e);for(let g=0;g<e;g++)for(let P=0;P<e;P++){let L=0,i=0;for(let d=-C;d<=C;d++)for(let u=-C;u<=C;u++)L+=M[(g+d+e)%e*e+(P+u+e)%e],i++;D[g*e+P]=L/i}return D},a=n(t,4),p=n(t,1),m=new Float32Array(e*e);for(let M=0;M<e*e;M++)m[M]=a[M]*.7+p[M]*.3;const c=document.createElement("canvas");c.width=c.height=e;const T=c.getContext("2d"),_=T.createImageData(e,e),x=(M,C)=>m[(C+e)%e*e+(M+e)%e],I=3;for(let M=0;M<e;M++)for(let C=0;C<e;C++){const D=(x(C-1,M)-x(C+1,M))*I,g=(x(C,M-1)-x(C,M+1))*I,P=Math.hypot(D,g,1),L=(M*e+C)*4;_.data[L]=(D/P*.5+.5)*255,_.data[L+1]=(g/P*.5+.5)*255,_.data[L+2]=(1/P*.5+.5)*255,_.data[L+3]=255}T.putImageData(_,0,0);const k=new sn(c);return k.wrapS=k.wrapT=ln,k.colorSpace=ua,k}function No(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#d8c79b",t.fillRect(0,0,512,512);for(let a=0;a<12e3;a++){const p=170+Math.random()*70|0;t.fillStyle=`rgba(${p},${p-22},${p-65},0.22)`,t.fillRect(Math.random()*512,Math.random()*512,1.6,1.6)}for(let a=0;a<26;a++){const p=60+Math.random()*40|0,m=90+Math.random()*50|0,c=70+Math.random()*40|0;t.fillStyle=`rgba(${p},${m},${c},0.30)`,t.beginPath(),t.ellipse(Math.random()*512,Math.random()*512,8+Math.random()*26,6+Math.random()*20,Math.random()*6,0,7),t.fill()}const n=new sn(e);return n.wrapS=n.wrapT=ln,n.repeat.set(10,10),n.colorSpace=ka,n}function Wo(e=256){const t=(x,I)=>{const k=new Float32Array(e*e);for(let M=0;M<e;M++)for(let C=0;C<e;C++){let D=0,g=0;for(let P=-I;P<=I;P++)for(let L=-I;L<=I;L++)D+=x[(M+P+e)%e*e+(C+L+e)%e],g++;k[M*e+C]=D/g}return k},n=()=>{const x=new Float32Array(e*e);for(let g=0;g<e*e;g++)x[g]=Math.random();const I=t(x,3),k=t(x,1),M=new Float32Array(e*e);let C=1e9,D=-1e9;for(let g=0;g<e*e;g++)M[g]=I[g]*.65+k[g]*.35,C=Math.min(C,M[g]),D=Math.max(D,M[g]);for(let g=0;g<e*e;g++)M[g]=(M[g]-C)/(D-C);return M},a=n(),p=n(),m=document.createElement("canvas");m.width=m.height=e;const c=m.getContext("2d"),T=c.createImageData(e,e);for(let x=0;x<e*e;x++){const I=x*4;T.data[I]=a[x]*255,T.data[I+1]=p[x]*255,T.data[I+2]=0,T.data[I+3]=255}c.putImageData(T,0,0);const _=new sn(m);return _.wrapS=_.wrapT=ln,_.colorSpace=ua,_.minFilter=Dn,_.magFilter=Dn,_.generateMipmaps=!1,_}function Uo(e={}){const{onReady:t,onError:n,onFpsUpdate:a}=e,p=Z(!1),m=Z(0);let c=null,T=null,_=null,x=null,I=null,k=null,M=null,C=null,D=null,g=null,P=null,L=null,i=null;const d=new Qe;let u=null,h=null,o=null;const l=new Ia;let r=0,f=0;const v={value:0},A={value:.9},R={value:0},O={value:new Qe};let X=3,B=-100;const Y=.62,te={};let ae=!0,ne=null;const J=new Ln,de={elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2};async function we(V){if(!V){n==null||n(new Error("Container element not provided"));return}if(!p.value){k=V;try{_=new za({antialias:!0,alpha:!0}),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(k.clientWidth,k.clientHeight),_.toneMapping=Oa,_.toneMappingExposure=Y,_.setClearColor(0,0),k.appendChild(_.domElement),c=new Ln,T=new Ba(55,k.clientWidth/k.clientHeight,1,2e4),T.position.set(0,55,280),Fe(),Ie(),me(),Te(),q(),j(),W(),ve(),Le(),$e(),qe(),p.value=!0,t==null||t()}catch(y){n==null||n(y)}}}function Fe(){L=new Ha,L.scale.setScalar(12e3),c.add(L);const V=L.material.uniforms;V.turbidity.value=6,V.rayleigh.value=1.6,V.mieCoefficient.value=.005,V.mieDirectionalG.value=.8}function Te(){i=new qa(16774368,2.6),c.add(i),c.add(new ja(13627391,2117738,.7))}function q(){const V=new Fn(1600,1600,200,200);V.rotateX(-Math.PI/2);const y=V.attributes.position;for(let N=0;N<y.count;N++){const $=y.getX(N),Q=y.getZ(N);let b=-34+At.clamp((Q+800)/1600,0,1)*44;b+=Math.sin($*.012)*Math.cos(Q*.014)*3.5,b+=Math.sin($*.06+Q*.05)*1.1,b+=(Math.random()-.5)*.6,y.setY(N,b)}V.computeVertexNormals();const F=new Pn({map:No(),roughness:1,metalness:0});On(F,{uTime:v,uCaustic:A}),c.add(new St(V,F))}function j(){const V=new Xa(1,0),y=[8023642,7035722,11887946,13598051,9083483];for(let F=0;F<30;F++){const N=new Pn({color:y[F%y.length],roughness:.9,flatShading:!0});On(N,{uTime:v,uCaustic:A});const $=new St(V,N),Q=3+Math.random()*9;$.scale.set(Q,Q*(.5+Math.random()*.6),Q),$.position.set((Math.random()-.5)*1100,-24+Math.random()*22,-300+Math.random()*900),$.rotation.set(Math.random(),Math.random(),Math.random()),c.add($)}}function W(){P=new Va(_),g=new Ka(256,{generateMipmaps:!0,minFilter:Ya}),D=new Za(1,2e4,g),D.position.set(0,4,0),c.add(D);const V=new Kt;_.getDrawingBufferSize(V),C=new Ja(V.x,V.y),C.depthTexture=new Qa(V.x,V.y),C.depthTexture.type=ei,C.depthTexture.format=ti}function ve(){const V=new Kt;_.getDrawingBufferSize(V);const y=Ho(256),F={uTime:v,tRefraction:{value:C.texture},tDepth:{value:C.depthTexture},tEnv:{value:g.texture},normalMap:{value:y},resolution:{value:V.clone()},cameraNear:{value:T.near},cameraFar:{value:T.far},invProjection:{value:new An},camWorld:{value:new An},sunDirection:{value:new Qe},sunColor:{value:new xt(16774106)},waterColor:{value:new xt(de.waterColor)},absorption:{value:new Qe(.45,.09,.05)},foamColor:{value:new xt(15925247)},clarity:{value:de.clarity},foamWidth:{value:de.foamWidth},waveHeight:{value:de.waveHeight},reflection:{value:de.reflection}};M=new St(new Fn(16e3,16e3,384,384),new Cn({uniforms:F,vertexShader:Io,fragmentShader:zo})),M.rotation.x=-Math.PI/2,c.add(M)}function Ie(){const V=new Cn({side:Na,transparent:!0,depthWrite:!1,uniforms:{uTime:v,uNoise:{value:Wo(256)},sunDirection:{value:new Qe},sunColor:{value:new xt(16773341)},skyTint:{value:new xt(7315406)},uCoverage:{value:de.cloudCoverage},uFlash:R,uFlashPos:O},vertexShader:Oo,fragmentShader:Bo});u=new St(new Wa(8e3,32,16),V),u.renderOrder=2,c.add(u)}function me(){o=new Ua({color:14478335,transparent:!0,opacity:0,blending:Ga,depthWrite:!1,depthTest:!1}),h=new $a,h.visible=!1,c.add(h)}function Pe(V,y,F,N,$,Q){const S=[];let b=V,U=y;const G=Math.max(5,Math.floor((F-N)/80));for(let ie=0;ie<=G;ie++){const ye=ie/G;S.push(new Qe(b,F+(N-F)*ye,U)),b+=(Math.random()-.5)*$,U+=(Math.random()-.5)*$}const K=new ai(new ii(S),G*4,Q,5,!1),oe=new St(K,o);return oe.renderOrder=3,h.add(oe),S}function Ue(){for(const N of h.children)N.geometry.dispose();h.clear();const V=1+Math.floor(Math.random()*3);let y=0,F=0;for(let N=0;N<V;N++){const $=(Math.random()-.5)*5e3,Q=-(1e3+Math.random()*4500);N===0&&(y=$,F=Q);const S=Pe($,Q,1180,18,110,14),b=2+Math.floor(Math.random()*3);for(let U=0;U<b;U++){const G=S[2+Math.floor(Math.random()*(S.length-4))];Pe(G.x,G.z,G.y,G.y-(160+Math.random()*420),130,7)}}O.value.set(y,1100,F)}function Ge(){if(!de.lightningEnabled){R.value=0,h.visible=!1,_.toneMappingExposure=Y;return}const V=v.value;V>=X&&(B=V,Ue(),X=V+de.lightningInterval*(.4+Math.random()*.8));const y=V-B;let F=0;y>=0&&y<.5&&(F=Math.max(0,Math.exp(-y*5.5)*(.5+.5*Math.sin(y*60)))),R.value=F*2.4,h.visible=F>.1,o.opacity=Math.min(1,F*1.7),_.toneMappingExposure=Y+F*.75}function Le(){x=new ni(T,_.domElement),x.target.set(0,130,-400),x.maxPolarAngle=Math.PI*.49,x.minDistance=30,x.maxDistance=2e3,x.enableDamping=!0}function $e(){window.addEventListener("keydown",Re),window.addEventListener("keyup",ke)}function Re(V){const y=V.target&&V.target.tagName;y==="INPUT"||y==="TEXTAREA"||(te[V.code]=!0)}function ke(V){te[V.code]=!1}function Ae(V){const y=(te.ShiftLeft||te.ShiftRight?240:95)*V,F=new Qe,N=new Qe,$=new Qe;T.getWorldDirection(F).normalize(),N.crossVectors(F,T.up).normalize(),$.set(0,0,0),te.KeyW&&$.add(F),te.KeyS&&$.addScaledVector(F,-1),te.KeyD&&$.add(N),te.KeyA&&$.addScaledVector(N,-1),te.KeyE&&($.y+=1),te.KeyQ&&($.y-=1),$.lengthSq()!==0&&($.normalize().multiplyScalar(y),T.position.add($),x.target.add($),T.position.y<2.5&&(T.position.y=2.5))}function qe(){const V=At.degToRad(90-de.elevation),y=At.degToRad(de.azimuth);if(d.setFromSphericalCoords(1,V,y),L.material.uniforms.sunPosition.value.copy(d),i.position.copy(d).multiplyScalar(1e3),M&&M.material.uniforms.sunDirection.value.copy(d).normalize(),u){u.material.uniforms.sunDirection.value.copy(d).normalize();const F=At.clamp(1-de.elevation/28,0,1);u.material.uniforms.sunColor.value.setRGB(1,.95-.22*F,.86-.48*F)}c.remove(L),J.add(L),ne&&ne.dispose(),ne=P.fromScene(J),c.environment=ne.texture,J.remove(L),c.add(L),ae=!0}function Ze(){I=requestAnimationFrame(Ze);const V=l.getDelta();v.value+=V,A.value=de.causticStrength,Ae(V),Ge(),x.update(),T.updateMatrixWorld(),M.material.uniforms.invProjection.value.copy(T.projectionMatrixInverse),M.material.uniforms.camWorld.value.copy(T.matrixWorld),M.visible=!1,ae&&(D.update(_,c),ae=!1),u.visible=!1;const y=h.visible;h.visible=!1,_.setRenderTarget(C),_.render(c,T),_.setRenderTarget(null),u.visible=!0,h.visible=y,M.visible=!0,_.render(c,T),r++;const F=performance.now();F-f>=1e3&&(m.value=Math.round(r*1e3/(F-f)),a==null||a(m.value),r=0,f=F)}function Be(){if(!T||!_||!k)return;const V=k.clientWidth,y=k.clientHeight;T.aspect=V/y,T.updateProjectionMatrix(),_.setSize(V,y);const F=new Kt;_.getDrawingBufferSize(F),C.setSize(F.x,F.y),M.material.uniforms.resolution.value.copy(F)}function je(){I||(l.start(),Ze())}function Ee(){I&&(cancelAnimationFrame(I),I=null)}function ze(V){const y={...de};Object.assign(de,V),(V.elevation!==y.elevation||V.azimuth!==y.azimuth)&&qe(),M&&(V.clarity!==y.clarity&&(M.material.uniforms.clarity.value=V.clarity),V.waveHeight!==y.waveHeight&&(M.material.uniforms.waveHeight.value=V.waveHeight),V.foamWidth!==y.foamWidth&&(M.material.uniforms.foamWidth.value=V.foamWidth),V.reflection!==y.reflection&&(M.material.uniforms.reflection.value=V.reflection),V.waterColor!==y.waterColor&&M.material.uniforms.waterColor.value.set(V.waterColor)),V.causticStrength!==y.causticStrength&&(A.value=V.causticStrength),V.cloudCoverage!==y.cloudCoverage&&u&&(u.material.uniforms.uCoverage.value=V.cloudCoverage)}function He(){Ee(),window.removeEventListener("keydown",Re),window.removeEventListener("keyup",ke),_&&(_.dispose(),k==null||k.removeChild(_.domElement)),c==null||c.traverse(V=>{V.geometry&&V.geometry.dispose(),V.material&&(Array.isArray(V.material)?V.material.forEach(y=>y.dispose()):V.material.dispose())}),C==null||C.dispose(),g==null||g.dispose(),ne==null||ne.dispose(),P==null||P.dispose(),c=null,T=null,_=null,x=null,M=null,L=null,i=null,u=null,h=null,o=null,p.value=!1}return Wt(()=>{He()}),{isReady:p,fps:m,init:we,start:je,pause:Ee,dispose:He,handleResize:Be,updateParams:ze}}const Go={__name:"ShallowWaterOverlay",props:{visible:{type:Boolean,default:!1},elevation:{type:Number,default:30},azimuth:{type:Number,default:150},clarity:{type:Number,default:.085},causticStrength:{type:Number,default:.9},waterColor:{type:String,default:"#2bb3c4"},waveHeight:{type:Number,default:.5},foamWidth:{type:Number,default:2.4},reflection:{type:Number,default:.38},cloudCoverage:{type:Number,default:.58},lightningEnabled:{type:Boolean,default:!0},lightningInterval:{type:Number,default:2}},emits:["ready","error","fps-update"],setup(e,{expose:t,emit:n}){const a=e,p=n,m=Z(null),{isReady:c,fps:T,init:_,start:x,pause:I,dispose:k,handleResize:M,updateParams:C}=Uo({onReady:()=>p("ready"),onError:L=>p("error",L),onFpsUpdate:L=>p("fps-update",L)});xe(()=>a.visible,async L=>{L?(await D(),x()):I()}),xe(()=>[a.elevation,a.azimuth,a.clarity,a.causticStrength,a.waterColor,a.waveHeight,a.foamWidth,a.reflection,a.cloudCoverage,a.lightningEnabled,a.lightningInterval],()=>{g()});async function D(){!m.value||c.value||(await _(m.value),g())}function g(){C({elevation:a.elevation,azimuth:a.azimuth,clarity:a.clarity,causticStrength:a.causticStrength,waterColor:a.waterColor,waveHeight:a.waveHeight,foamWidth:a.foamWidth,reflection:a.reflection,cloudCoverage:a.cloudCoverage,lightningEnabled:a.lightningEnabled,lightningInterval:a.lightningInterval})}function P(){M()}return rn(()=>{window.addEventListener("resize",P),a.visible&&D()}),Wt(()=>{window.removeEventListener("resize",P),k()}),t({isReady:c,fps:T,start:x,pause:I}),(L,i)=>Ye((ee(),se("div",{ref_key:"canvasContainerRef",ref:m,class:"shallow-water-overlay"},null,512)),[[ut,e.visible]])}},$o=st(Go,[["__scopeId","data-v-e9c0d469"]]),dn="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",qo=`${dn}Cesium.js`,jo=`${dn}Widgets/widgets.css`;async function Xo({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=dn),await Ko(jo,"cesium-widgets-style"),await Vo(qo,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Bt(t,e),t}function Bt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function Vo(e,t){return new Promise((n,a)=>{const p=document.getElementById(t);if(p){if(p.getAttribute("data-loaded")==="true"){n();return}p.addEventListener("load",()=>n(),{once:!0}),p.addEventListener("error",()=>a(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const m=document.createElement("script");m.id=t,m.src=e,m.async=!0,m.onload=()=>{m.setAttribute("data-loaded","true"),n()},m.onerror=()=>a(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(m)})}function Ko(e,t){return new Promise((n,a)=>{if(document.getElementById(t)){n();return}const m=document.createElement("link");m.id=t,m.rel="stylesheet",m.href=e,m.onload=()=>n(),m.onerror=()=>a(new Error(`样式加载失败: ${e}`)),document.head.appendChild(m)})}const Yo="Asia/Shanghai",Zo="UTC+8",Jo=new Intl.DateTimeFormat("zh-CN",{timeZone:Yo,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Qo(e,t){var n,a,p,m,c,T,_;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...x)=>ts(e,t,...x),e.animation.viewModel.timeFormatter=(...x)=>ns(e,t,...x)),e.timeline){const x=(...I)=>as(e,t,...I);e.timeline.makeLabel=x,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=x),(p=(a=e.timeline).updateFromClock)==null||p.call(a),(c=(m=e.timeline).zoomTo)==null||c.call(m,e.clock.startTime,e.clock.stopTime)}(_=(T=e.scene).requestRender)==null||_.call(T)}}function hn(e,t,...n){var T;const a=n.find(es)||((T=e==null?void 0:e.clock)==null?void 0:T.currentTime);if(!a)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const p=t.JulianDate.toDate(a),m=Jo.formatToParts(p),c=Object.fromEntries(m.filter(({type:_})=>_!=="literal").map(({type:_,value:x})=>[_,x]));return{year:c.year||"0000",month:c.month||"01",day:c.day||"01",hour:c.hour||"00",minute:c.minute||"00",second:c.second||"00"}}function es(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function ts(e,t,...n){const{year:a,month:p,day:m}=hn(e,t,...n);return`${a}-${p}-${m}`}function ns(e,t,...n){const{hour:a,minute:p,second:m}=hn(e,t,...n);return`${a}:${p}:${m} ${Zo}`}function as(e,t,...n){const{month:a,day:p,hour:m,minute:c}=hn(e,t,...n);return`${a}-${p} ${m}:${c}`}function is({getViewer:e}){let t=null,n=null;function a(){var T;const c=e==null?void 0:e();if(c&&((T=c._cesiumWidget)!=null&&T._creditContainer&&(c._cesiumWidget._creditContainer.style.display="none"),p(),t=setInterval(()=>{const _=document.querySelector(".cesium-credit-container");_&&_.innerHTML.length>0&&(_.innerHTML="",_.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const _=document.createElement("style");_.id="cesium-credit-override",_.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(_),n=_}}function p(){var _;const c=e==null?void 0:e();if(!c)return;(_=c._cesiumWidget)!=null&&_._creditContainer&&(c._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",c._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(x=>{x.style.cssText="display: none !important; visibility: hidden !important;",x.innerHTML=""}),c.scene&&c.scene.frameState&&c.scene.frameState.creditDisplay&&(c.scene.frameState.creditDisplay.hasCredits=()=>!1,c.scene.frameState.creditDisplay.destroy=()=>{})}function m(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:a,cleanupCreditHider:m}}const Zt="经度: --, 纬度: --, 海拔: --米";function rs({getViewer:e,getCesium:t,onCoordinatePick:n}){let a=null,p=null,m=null;const c=Z("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function T(){const C=e==null?void 0:e(),D=t==null?void 0:t();!C||!D||(M(),p=C.scene.canvas,a=new D.ScreenSpaceEventHandler(p),m=()=>{c.value=Zt},p.addEventListener("mouseleave",m),a.setInputAction(g=>{_(g.endPosition,C,D)},D.ScreenSpaceEventType.MOUSE_MOVE),a.setInputAction(g=>{const P=g.endPosition,L=g.startPosition;if(!D.defined(C.terrainProvider))return;const i=C.scene.globe.ellipsoid;if(!C.camera.pickEllipsoid(L,i)){const u=C.camera;u.rotate(D.Cartesian3.UNIT_X,-.002*(P.y-L.y)),u.rotate(D.Cartesian3.UNIT_Y,-.002*(P.x-L.x))}},D.ScreenSpaceEventType.RIGHT_DRAG),a.setInputAction(()=>{},D.ScreenSpaceEventType.RIGHT_DOWN),a.setInputAction(()=>{},D.ScreenSpaceEventType.RIGHT_UP))}function _(C,D,g){const P=x(C,D,g);if(!P){c.value=Zt;return}const L=g.Cartographic.fromCartesian(P);if(!L||!Number.isFinite(L.longitude)||!Number.isFinite(L.latitude)){c.value=Zt;return}const i=g.Math.toDegrees(L.longitude).toFixed(6),d=g.Math.toDegrees(L.latitude).toFixed(6),u=(Number.isFinite(L.height)?L.height:0).toFixed(2);c.value=`经度: ${i}, 纬度: ${d}, 海拔: ${u}米`,typeof n=="function"&&n({lng:Number(i),lat:Number(d),height:Number(u)})}function x(C,D,g){if(!C)return null;const P=D.scene,L=I(C,P,g);if(L)return L;const i=D.camera.getPickRay(C);if(i){const u=P.globe.pick(i,P);if(k(u))return u}const d=D.camera.pickEllipsoid(C,P.globe.ellipsoid);return k(d)?d:null}function I(C,D,g){if(!D.pickPositionSupported||typeof D.pickPosition!="function")return null;const P=typeof D.pick=="function"?D.pick(C):null;if(!g.defined(P))return null;const L=D.pickPosition(C);return k(L)?L:null}function k(C){return!!C&&Number.isFinite(C.x)&&Number.isFinite(C.y)&&Number.isFinite(C.z)}function M(){m&&p&&(p.removeEventListener("mouseleave",m),m=null),p=null,a&&(a.destroy(),a=null)}return{coordinateDisplay:c,setupInteractions:T,cleanupInteractions:M}}function Bn(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function os(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function pt(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function Dt(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Hn(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:a,Resource:p,HeightmapTerrainData:m,Rectangle:c,TileAvailability:T,CustomHeightmapTerrainProvider:_}=e;function x(C,D,g,P,L,i){const d=C.tileXYToRectangle(g,P,L);return t(c.intersection(d,D,i))}function I(C){const D=[[[0,0,1,0]]],g=new T(C.tilingScheme,19);for(let P=0;P<D.length;P++){const L=D[P];for(let i=0;i<L.length;i++){const d=L[i];g.addAvailableTileRange(P,d[0],d[1],d[2],d[3])}}return g}function k(C,D,g,P,L){const i=new m({buffer:C._transformBuffer(D),width:C._width,height:C._height,childTileMask:C._getChildTileMask(P,L,g),structure:C._terrainDataStructure});return i._skirtHeight=6e3,C.availability.addAvailableTileRange(g,P,L,P,L),i}class M extends _{constructor(D={}){if(super({...D,ellipsoid:a.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(D.url))throw new n("options.url is required.");this._dataType=D.dataType??"int16",this._url=D.url,this._subdomains=D.subdomains,this._token=D.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=I(this)}get availability(){return this._availability}requestTileGeometry(D,g,P,L){if(P>=this._bottomLevel)return Promise.reject(new Error(`Level ${P} is outside supported range.`));if(P<this._topLevel)return Promise.resolve(new m({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(D,g,P),structure:this._terrainDataStructure}));let i=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const u=this._subdomains[(D+g)%this._subdomains.length];i=i.replace("{s}",u)}i=i.replace("{token}",this._token).replace("{x}",D).replace("{y}",g).replace("{z}",P+1);const d=p.fetchArrayBuffer({url:i,request:L});if(d)return d.then(u=>u.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):ri.inflate(u)).then(u=>k(this,u,P,D,g))}getTileDataAvailable(D,g,P){return P<this._bottomLevel}_transformBuffer(D){let g=2;this._dataType==="float"&&(g=4);const P=D;if(P.length!==22500*g)return null;const L=new ArrayBuffer(g),i=new DataView(L),d=this._width,u=this._height,h=new Uint8Array(d*u*4);for(let o=0;o<u;o++)for(let l=0;l<d;l++){const r=Math.floor(149*o/(u-1)),f=Math.floor(149*l/(d-1)),v=g*(150*r+f);let A;g===4?(i.setInt8(0,P[v]),i.setInt8(1,P[v+1]),i.setInt8(2,P[v+2]),i.setInt8(3,P[v+3]),A=i.getFloat32(0,!0)):A=P[v]+256*P[v+1],(A>1e4||A<-2e3)&&(A=0);const R=(A+1e3)/.001,O=4*(o*d+l);h[O]=R/65536,h[O+1]=(R-256*h[O]*256)/256,h[O+2]=R-256*h[O]*256-256*h[O+1],h[O+3]=255}return h}_getVHeightBuffer(){let D=this._vHeightBuffer;if(!t(D)){D=new Uint8ClampedArray(this._width*this._height*4);for(let g=0;g<this._width*this._height*4;)D[g++]=15,D[g++]=66,D[g++]=64,D[g++]=255;this._vHeightBuffer=D}return D}_getChildTileMask(D,g,P){const L=new c,i=this._tilingScheme,d=this._rectangles,u=i.tileXYToRectangle(D,g,P);let h=0;for(let o=0;o<d.length&&h!==15;o++){const l=d[o];if(l.maxLevel<=P)continue;const r=l.rectangle,f=c.intersection(r,u,L);t(f)&&(x(i,r,2*D,2*g,P+1,L)&&(h|=4),x(i,r,2*D+1,2*g,P+1,L)&&(h|=8),x(i,r,2*D,2*g+1,P+1,L)&&(h|=1),x(i,r,2*D+1,2*g+1,P+1,L)&&(h|=2))}return h}}return M}function ss(e){if(!e)throw new Error("Cesium is required to create ArcGISTerrainProvider.");const{TileAvailability:t}=e;class n{constructor(m){this._inner=m,this._availability=null,this._initAvailability()}_initAvailability(){const m=this._inner.tilingScheme;if(!m)return;const c=this._inner.maximumLevel??15;this._availability=new t(m,c),this._availability.addAvailableTileRange(0,0,0,1,0)}get availability(){return this._availability||this._initAvailability(),this._availability}get tilingScheme(){return this._inner.tilingScheme}get maximumLevel(){return this._inner.maximumLevel}get ready(){return this._inner.ready}get readyPromise(){return this._inner.readyPromise}get errorEvent(){return this._inner.errorEvent}get credit(){return this._inner.credit}getTileDataAvailable(m,c,T){const _=this._inner.maximumLevel??15;return T<=_}requestTileGeometry(m,c,T,_){return this._inner.requestTileGeometry(m,c,T,_)}getLevelMaximumGeometricError(m){return this._inner.getLevelMaximumGeometricError(m)}loadTileDataAvailability(m,c,T){if(typeof this._inner.loadTileDataAvailability=="function")return this._inner.loadTileDataAvailability(m,c,T)}}async function a(p){const m=await e.ArcGISTiledElevationTerrainProvider.fromUrl(p);return new n(m)}return n.fromUrl=a,n}function ls({getViewer:e,getCesium:t,activeBasemap:n,applyBasemap:a,resolvePresetLayerIds:p,message:m,validationTimeoutMs:c=5e3,circuitBreakThreshold:T=3}){const _=new Map,x=new Set,I={value:!1};let k=null,M=[],C=[];function D(h,o={}){return h?x.has(h)&&!o.forceReload?(I.value=!0,!1):a(h,o)?(g(h),!0):(P(h),!1):!1}function g(h){var R,O;i();const o=e==null?void 0:e();if(!(o!=null&&o.imageryLayers))return;const l=p(h),r=[];for(let X=0;X<o.imageryLayers.length;X++){const B=o.imageryLayers.get(X);(R=B==null?void 0:B.imageryProvider)!=null&&R._descriptorId&&l.includes(B.imageryProvider._descriptorId)&&r.push(B)}if(!r.length)return;M=r;let f=!1;const v=()=>{f=!0,i(),_.delete(h),x.has(h)&&(x.delete(h),I.value=x.size>0)},A=X=>{f||(P(h),i())};for(const X of M){const B=X.imageryProvider;if(B!=null&&B.errorEvent&&(B.errorEvent.addEventListener(A),C.push(()=>B.errorEvent.removeEventListener(A))),B!=null&&B.ready){v();return}(O=B==null?void 0:B.readyPromise)!=null&&O.then&&B.readyPromise.then(v).catch(A)}k=setTimeout(()=>{f||P(h)},c)}function P(h){const o=(_.get(h)||0)+1;_.set(h,o),o>=T&&(x.add(h),I.value=!0,L(h))}function L(h){var l,r,f,v,A;const o="custom_China_Blender_preset_2";if(h===o){const R="imagery_tianditu_preset";x.has(R)?(r=m==null?void 0:m.error)==null||r.call(m,"所有底图均加载失败，请检查网络",{closable:!0}):((l=m==null?void 0:m.warning)==null||l.call(m,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=R);return}if(!x.has(o))(f=m==null?void 0:m.warning)==null||f.call(m,"底图加载失败，已降级到默认底图",{closable:!0}),n.value=o;else{const R="imagery_tianditu_preset";x.has(R)?(A=m==null?void 0:m.error)==null||A.call(m,"所有底图均加载失败，请检查网络",{closable:!0}):((v=m==null?void 0:m.warning)==null||v.call(m,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=R)}}function i(){k&&(clearTimeout(k),k=null);for(const h of C)try{h()}catch{}C=[],M=[]}function d(){_.clear(),x.clear(),I.value=!1,i()}function u(){i(),_.clear(),x.clear(),I.value=!1}return{switchBasemap:D,resetCircuitBreaker:d,isCircuitOpen:I,cleanup:u}}const _t=["0","1","2","3","4","5","6","7"],wt="https://t{s}.tianditu.gov.cn/",cs="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",us=96188,Lt="custom-xyz",Nn="webgis_custom_basemap_url",ds="cesium_tdt_label_layer_visible",Wn="cesium_tdt_boundary_layer_visible",Un="cesium_tdt_text_label_layer_visible",Gn="cesium_osm_buildings_visible",$n="cesium_google_photorealistic_3d_tiles_visible";function hs(){return oi.map(e=>({...e,description:fs(e.value),source:"preset"}))}function fs(e){const t=Ct(e);if(!t.length)return"复合底图";const n=t.map(a=>{const p=cn(a);return p?p.name:a});return n.slice(0,3).join(" + ")+(n.length>3?" ...":"")}const qn=hs(),jn=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function ms({getViewer:e,getCesium:t,message:n,backendBaseUrl:a,tiandituToken:p,cesiumIonToken:m}){let c=null,T=null,_=null,x=null,I=0,k=null,M=null,C=0,D=0,g=[];const P=()=>Xn(p),L=()=>Xn(m),i=[],d=Z([]),u=new Map,h=new Map,o=new Map,l=new Map,r="cesium_custom_xyz_basemap_url",f=Z(En),v=Z("tianditu"),A=Z(Bn(Nn,"")||Bn(r,"")),R=pt(ds,!1),O=Z(pt(Wn,R??!1)),X=Z(pt(Un,R??!1)),B=Z(pt(Gn,!1)),Y=Z(pt($n,!1)),te=_e(()=>[...qn.map(s=>s.value!=="custom"?s:{...s,description:A.value?A.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!A.value}),...d.value]),ae=ls({getViewer:e,getCesium:t,activeBasemap:f,applyBasemap:$,resolvePresetLayerIds:Ct,message:n}),ne=_e(()=>ae.isCircuitOpen.value),J=_e(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:O.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:X.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:B.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:Y.value}]);xe(f,s=>{!(e!=null&&e())||!(t!=null&&t())||$(s)}),xe(A,s=>{os(Nn,s)}),xe(v,async s=>{!(e!=null&&e())||!(t!=null&&t())||await S(s)}),xe(O,s=>{Dt(Wn,s),Ae()}),xe(X,s=>{Dt(Un,s),Ae()}),xe(B,s=>{Dt(Gn,s),Ee()}),xe(Y,s=>{Dt($n,s),ze()});function de(){const s=t==null?void 0:t();if(!s)return[];u.clear(),h.clear();const w=qn.map(H=>{const le=new s.ProviderViewModel({name:H.label,tooltip:ys(H),category:"项目底图",iconUrl:Yn(bs(H.value),xs(H.value,H.label)),creationFunction:()=>j(H.value)});return u.set(H.value,le),h.set(le,H.value),le}),z=q();return d.value=z.map((H,le)=>{const ce=String((H==null?void 0:H.name)||`官方底图 ${le+1}`).trim(),be=ws(ce,le);return u.set(be,H),h.set(H,be),{value:be,label:`官方 · ${ce}`,description:String((H==null?void 0:H.tooltip)||ce),source:"official"}}),[...w,...z]}function we(){const s=t==null?void 0:t();return s?(o.clear(),l.clear(),jn.map(w=>{const z=new s.ProviderViewModel({name:w.label,tooltip:w.description||w.label,category:"项目地形",iconUrl:Yn(ps(w.value),gs(w.value)),creationFunction:()=>U(w.value)});return o.set(w.value,z),l.set(z,w.value),z})):[]}function Fe(s=[]){return u.get(f.value)||s[0]}function Te(s=[]){return o.get(v.value)||s[0]}function q(){const s=t==null?void 0:t();if(typeof(s==null?void 0:s.createDefaultImageryProviderViewModels)!="function")return[];try{return s.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function j(s){return Ct(s).length>0?W(s):s==="google"?Ie():s===Lt?me():ve()}function W(s){const w=t==null?void 0:t();if(!w)return[];const z=Ct(s);if(!z.length)return ve();const H=P(),le=A.value;return _i(w,z,{tiandituTk:H,customUrl:le})}function ve(){const s=t==null?void 0:t();return[new s.UrlTemplateImageryProvider({url:`${wt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${P()}`,subdomains:_t,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:18})]}function Ie(){const s=t==null?void 0:t();return[new s.UrlTemplateImageryProvider({url:`${a}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:20})]}function me(){const s=t==null?void 0:t(),w=Kn(A.value);return w.valid?[new s.UrlTemplateImageryProvider({url:w.url,subdomains:w.subdomains,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(w.message,{closable:!0}),ve())}function Pe(){const s=t==null?void 0:t();return new s.UrlTemplateImageryProvider({url:`${wt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${P()}`,subdomains:_t,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:10})}function Ue(){const s=t==null?void 0:t();return new s.UrlTemplateImageryProvider({url:`${wt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${P()}`,subdomains:_t,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:18})}function Ge(){var Me,Ne,it,yt,bt;Le();const s=t==null?void 0:t(),w=(Ne=(Me=e==null?void 0:e())==null?void 0:Me.baseLayerPicker)==null?void 0:Ne.viewModel;if(!w||!((it=s==null?void 0:s.knockout)!=null&&it.getObservable))return;const z=s.knockout.getObservable(w,"selectedImagery"),H=s.knockout.getObservable(w,"selectedTerrain"),le=[],ce=(yt=z==null?void 0:z.subscribe)==null?void 0:yt.call(z,ht=>{const Xe=h.get(ht);Xe&&(f.value!==Xe&&(f.value=Xe),ke())}),be=(bt=H==null?void 0:H.subscribe)==null?void 0:bt.call(H,ht=>{const Xe=l.get(ht);Xe&&(v.value!==Xe&&(v.value=Xe),b(Xe))});ce&&le.push(ce),be&&le.push(be),g=le}function Le(){g.forEach(s=>{var w;return(w=s==null?void 0:s.dispose)==null?void 0:w.call(s)}),g=[]}function $e(){return Ae(),Ee(),ze(),!0}function Re(){const s=e==null?void 0:e();if(s!=null&&s.imageryLayers)for(;i.length;){const w=i.pop();try{s.imageryLayers.remove(w,!0)}catch{}}}function ke(){var s,w,z;Ae(),Ee(),ze(),(z=(w=(s=e==null?void 0:e())==null?void 0:s.scene)==null?void 0:w.requestRender)==null||z.call(w)}function Ae(){var w,z;const s=e==null?void 0:e();!s||!(t!=null&&t())||(O.value?qe():Be(),X.value?Ze():je(),(z=(w=s.scene).requestRender)==null||z.call(w))}function qe(){var w,z,H,le;const s=e==null?void 0:e();if(!(s!=null&&s.imageryLayers)||c)return c&&((z=(w=s==null?void 0:s.imageryLayers)==null?void 0:w.raiseToTop)==null||z.call(w,c)),c;try{return c=s.imageryLayers.addImageryProvider(Pe()),(le=(H=s.imageryLayers).raiseToTop)==null||le.call(H,c),c}catch(ce){return n.error("天地图国界线图层加载失败",ce),null}}function Ze(){var w,z,H,le;const s=e==null?void 0:e();if(!(s!=null&&s.imageryLayers)||T)return T&&((z=(w=s==null?void 0:s.imageryLayers)==null?void 0:w.raiseToTop)==null||z.call(w,T)),T;try{return T=s.imageryLayers.addImageryProvider(Ue()),(le=(H=s.imageryLayers).raiseToTop)==null||le.call(H,T),T}catch(ce){return n.error("天地图文字标注图层加载失败",ce),null}}function Be(){const s=e==null?void 0:e();if(!(!c||!(s!=null&&s.imageryLayers))){try{s.imageryLayers.remove(c,!0)}catch{}c=null}}function je(){const s=e==null?void 0:e();if(!(!T||!(s!=null&&s.imageryLayers))){try{s.imageryLayers.remove(T,!0)}catch{}T=null}}async function Ee(){var w,z,H;const s=e==null?void 0:e();!((w=s==null?void 0:s.scene)!=null&&w.primitives)||!(t!=null&&t())||(B.value?await y():F(),(H=(z=s.scene).requestRender)==null||H.call(z))}async function ze(){var w,z,H;const s=e==null?void 0:e();!((w=s==null?void 0:s.scene)!=null&&w.primitives)||!(t!=null&&t())||(Y.value?await He():V(),(H=(z=s.scene).requestRender)==null||H.call(z))}async function He(){var H,le,ce;const s=e==null?void 0:e(),w=t==null?void 0:t();if(!((H=s==null?void 0:s.scene)!=null&&H.primitives))return null;if(k)return s.scene.globe.show=!1,k;if(M)return M;if(typeof(w==null?void 0:w.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),Y.value=!1,null;const z=++C;Bt(w,L()),M=w.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const be=await M;return z!==C||!Y.value?(Vn(be),null):(k=s.scene.primitives.add(be),s.scene.globe.show=!1,s.scene.skyAtmosphere.show=!0,(ce=(le=s.scene).requestRender)==null||ce.call(le),k)}catch(be){return z!==C||(Y.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",be)),null}finally{z===C&&(M=null)}}function V(){var w,z,H;const s=e==null?void 0:e();if(C+=1,M=null,!k||!((w=s==null?void 0:s.scene)!=null&&w.primitives)){(z=s==null?void 0:s.scene)!=null&&z.globe&&(s.scene.globe.show=!0);return}try{s.scene.primitives.remove(k)}catch{}k=null,(H=s==null?void 0:s.scene)!=null&&H.globe&&(s.scene.globe.show=!0)}async function y(){var H,le,ce,be;const s=e==null?void 0:e(),w=t==null?void 0:t();if(!((H=s==null?void 0:s.scene)!=null&&H.primitives)||_)return _;if(x)return x;if(typeof((le=w==null?void 0:w.Cesium3DTileset)==null?void 0:le.fromIonAssetId)!="function"&&typeof(w==null?void 0:w.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),B.value=!1,null;const z=++I;Bt(w,L()),await N(),x=vs(w,{maximumScreenSpaceError:8});try{const Me=await x;return z!==I||!B.value?(Vn(Me),null):(_=s.scene.primitives.add(Me),(be=(ce=s.scene).requestRender)==null||be.call(ce),_)}catch(Me){return z!==I||(B.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",Me)),null}finally{z===I&&(x=null)}}function F(){var w,z,H;const s=e==null?void 0:e();if(I+=1,x=null,!(!_||!((w=s==null?void 0:s.scene)!=null&&w.primitives))){try{s.scene.primitives.remove(_)}catch{}_=null,(H=(z=s.scene).requestRender)==null||H.call(z)}}async function N(){if(v.value==="cesiumWorld")return!0;v.value="cesiumWorld";const s=await S("cesiumWorld");return s||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),s}function $(s,w={}){var ce,be,Me;const z=e==null?void 0:e();if(!z||!(t!=null&&t()))return!1;vi(),Re();const H=(ce=z.baseLayerPicker)==null?void 0:ce.viewModel,le=u.get(s);if(H&&le){if(w.forceReload&&H.selectedImagery===le){const Ne=u.get(En)||u.get("tianditu");Ne&&Ne!==le&&(H.selectedImagery=Ne)}return H.selectedImagery!==le&&(H.selectedImagery=le),ke(),!0}try{return j(s).forEach(it=>{it&&i.push(z.imageryLayers.addImageryProvider(it))}),Ae(),(Me=(be=z.scene).requestRender)==null||Me.call(be),!0}catch(Ne){return n.error("地图源切换失败",Ne),!1}}function Q(){return S(v.value)}async function S(s){var Me,Ne,it,yt,bt,ht,Xe,mn,pn,gn,vn;const w=e==null?void 0:e(),z=t==null?void 0:t();if(!w||!z)return!1;const H=(Me=w.baseLayerPicker)==null?void 0:Me.viewModel,le=o.get(s);if(H&&le)return H.selectedTerrain!==le&&(H.selectedTerrain=le),b(s),(it=(Ne=w.scene).requestRender)==null||it.call(Ne),!0;const ce=++D;if(s==="ellipsoid")return w.terrainProvider=new z.EllipsoidTerrainProvider,b(s),(bt=(yt=w.scene).requestRender)==null||bt.call(yt),!0;if(s==="cesiumWorld")try{const Je=await G();return ce!==D?!1:(w.terrainProvider=Je,b(s),(Xe=(ht=w.scene).requestRender)==null||Xe.call(ht),!0)}catch(Je){return ce!==D||(w.terrainProvider=new z.EllipsoidTerrainProvider,b("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",Je)),!1}if(s==="arcgisWorld")try{const Je=await K();return ce!==D?!1:(w.terrainProvider=Je,b(s),(pn=(mn=w.scene).requestRender)==null||pn.call(mn),!0)}catch(Je){return ce!==D||(w.terrainProvider=new z.EllipsoidTerrainProvider,b("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",Je)),!1}const be=Hn(z);try{return w.terrainProvider=new be({url:`${wt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:_t,token:P()}),b(s),(vn=(gn=w.scene).requestRender)==null||vn.call(gn),!0}catch(Je){return w.terrainProvider=new z.EllipsoidTerrainProvider,b("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",Je),!1}}function b(s){var z;const w=e==null?void 0:e();(z=w==null?void 0:w.scene)!=null&&z.globe&&(w.scene.globe.depthTestAgainstTerrain=s!=="ellipsoid")}function U(s){const w=t==null?void 0:t();if(s==="ellipsoid")return new w.EllipsoidTerrainProvider;if(s==="cesiumWorld")return G().catch(H=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",H),oe(s,"ellipsoid"),new w.EllipsoidTerrainProvider));if(s==="arcgisWorld")return K().catch(H=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",H),oe(s,"ellipsoid"),new w.EllipsoidTerrainProvider));const z=Hn(w);try{return new z({url:`${wt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:_t,token:P()})}catch(H){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",H),new w.EllipsoidTerrainProvider}}async function G(){var z,H;const s=t==null?void 0:t();Bt(s,L());const w={requestWaterMask:!1,requestVertexNormals:!0};if(typeof s.createWorldTerrainAsync=="function")return s.createWorldTerrainAsync(w);if(typeof s.createWorldTerrain=="function")return s.createWorldTerrain(w);if(typeof((z=s.CesiumTerrainProvider)==null?void 0:z.fromIonAssetId)=="function")return s.CesiumTerrainProvider.fromIonAssetId(1,w);if((H=s.IonResource)!=null&&H.fromAssetId&&s.CesiumTerrainProvider){const le=await s.IonResource.fromAssetId(1);return new s.CesiumTerrainProvider({url:le,...w})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function K(){var z;const s=t==null?void 0:t();if(typeof((z=s==null?void 0:s.ArcGISTiledElevationTerrainProvider)==null?void 0:z.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return ss(s).fromUrl(cs)}function oe(s,w){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{v.value===s&&(v.value=w)},0)}function ie({overlayId:s,value:w}){if(s==="tdt-boundaries"){O.value=!!w;return}if(s==="tdt-text-labels"){X.value=!!w;return}if(s==="cesium-osm-buildings"){B.value=!!w;return}s==="google-photorealistic-3d-tiles"&&(Y.value=!!w)}function ye({url:s}){const w=String(s||"").trim(),z=Kn(w);if(!z.valid){n.warning(z.message,{closable:!0});return}if(A.value=w,f.value===Lt){$(Lt,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}f.value=Lt,n.success("已切换到自定义 XYZ 图源")}function re(){Re(),Be(),je(),F(),V(),Le()}return{activeBasemap:f,activeTerrain:v,customXyzBasemapUrl:A,basemapOptions:te,terrainOptions:jn,overlayOptions:J,createImageryProviderViewModels:de,createTerrainProviderViewModels:we,getSelectedImageryProviderViewModel:Fe,getSelectedTerrainProviderViewModel:Te,bindLayerPickerStateSync:Ge,addBaseImageryLayers:$e,initCustomTerrain:Q,applyBasemap:$,applyTerrain:S,handleOverlayToggle:ie,handleCustomBasemapSubmit:ye,cleanupLayers:re,basemapSwitcher:ae,basemapCircuitOpen:ne,resetCircuitBreaker:ae.resetCircuitBreaker}}function ps(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function gs(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Xn(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Vn(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function vs(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const a=await e.Cesium3DTileset.fromIonAssetId(us,t);return!a.style&&typeof e.Cesium3DTileStyle=="function"&&(a.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),a}return e.createOsmBuildingsAsync(t)}function ys(e){return e.value===Lt?`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`:e.description||e.label}function bs(e){const t=Ct(e);if(!t.length)return"#37d67a";const n=cn(t[0]);if(!n)return"#37d67a";const a=n.category;return a==="imagery"?"#5ea1ff":a==="vector"?"#37d67a":a==="terrain"?"#d0a449":a==="label"?"#a78bfa":a==="theme"?"#f59e0b":a==="custom"?"#f472b6":"#37d67a"}function xs(e,t){return String(t||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function Kn(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const a=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let p=[];return a?(p=Ss(a[1],a[2]),n=n.replace(a[0],"{s}")):/\{s\}/i.test(n)&&(p=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:p}:_s(n)?{valid:!0,message:"",url:n,subdomains:p}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:p}}function Ss(e,t){const n=String(e||"").charCodeAt(0),a=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(a))return[];const p=n<=a?1:-1,m=[];for(let c=n;p>0?c<=a:c>=a;c+=p)m.push(String.fromCharCode(c));return m}function _s(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function ws(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function Yn(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),a=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(a)}`}function Ts({getViewer:e,getCesium:t,message:n}){function a(c){const T=e==null?void 0:e(),_=t==null?void 0:t();if(!T||!_)return;const x=typeof c=="number"?c:2;T.camera.flyTo({destination:_.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-_.Math.PI_OVER_TWO,roll:0},duration:x})}function p(){const c=e==null?void 0:e(),T=t==null?void 0:t();!c||!T||c.camera.flyTo({destination:T.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:T.Math.toRadians(0),pitch:T.Math.toRadians(-25),roll:0},duration:3})}async function m(){const c=e==null?void 0:e(),T=t==null?void 0:t();if(!(!c||!T))try{const _=await T.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");c.scene.primitives.add(_),c.flyTo(_,{duration:3,offset:new T.HeadingPitchRange(T.Math.toRadians(0),T.Math.toRadians(-25),_.boundingSphere.radius*2.5)})}catch(_){n.error(`加载模型失败: ${_}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:a,flyToEverest:p,loadCustomTileset:m}}const Ms="tileset.json";let kt=null;async function Zn(){if(kt)return kt;const[{decompressBuffer:e},{parseShpPartsToGeoJSON:t}]=await Promise.all([Ht(()=>import("./decompressFile-DiMYlfaO.js").then(n=>n.f),__vite__mapDeps([4,5]),import.meta.url),Ht(()=>import("./shpParser-DD22FS0p.js").then(n=>n.s),__vite__mapDeps([6,5,7,2,3,8,9,10,11,12,13,14,15]),import.meta.url)]);return kt={decompressBuffer:e,parseShpPartsToGeoJSON:t},kt}function Jt(e){const t=e.lastIndexOf(".");return t===-1?"":e.slice(t+1).toLowerCase()}function lt(e,t,n,a){if(!(!e||!t||!n))try{a==="3dtiles"&&n.boundingSphere?e.flyTo(n,{duration:2,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-30),n.boundingSphere.radius*2)}):n.entities&&n.entities.values.length>0&&e.flyTo(n,{duration:2})}catch{}}function ft(e){return URL.createObjectURL(e)}function Ve(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function Ds({getViewer:e,getCesium:t,message:n}){const a=Z([]),p=Z(null);let m=0;async function c(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);try{const v=await l.GeoJsonDataSource.load(f,{stroke:l.Color.fromCssColorString("#3ddc84"),fill:l.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:l.Color.fromCssColorString("#3ddc84"),markerSize:24}),A=`geojson_${++m}`;v.name=o.name,await r.dataSources.add(v),lt(r,l,v,"geojson");const R={id:A,name:o.name,type:"geojson",entity:v,blobUrl:f};return a.value=[...a.value,R],n.success(`GeoJSON "${o.name}" 加载成功`),R}catch(v){throw Ve(f),v}}async function T(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);try{const v=await l.KmlDataSource.load(f,{camera:r.scene.camera,canvas:r.scene.canvas}),A=`kml_${++m}`;v.name=o.name,await r.dataSources.add(v),lt(r,l,v,"kml");const R={id:A,name:o.name,type:"kml",entity:v,blobUrl:f};return a.value=[...a.value,R],n.success(`KML "${o.name}" 加载成功`),R}catch(v){throw Ve(f),v}}async function _(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);try{const v=await l.KmlDataSource.load(f,{camera:r.scene.camera,canvas:r.scene.canvas}),A=`kmz_${++m}`;v.name=o.name,await r.dataSources.add(v),lt(r,l,v,"kmz");const R={id:A,name:o.name,type:"kmz",entity:v,blobUrl:f};return a.value=[...a.value,R],n.success(`KMZ "${o.name}" 加载成功`),R}catch{return Ve(f),await x(o)}}async function x(o){const l=t(),r=e(),f=await o.arrayBuffer(),{decompressBuffer:v}=await Zn(),R=(await v(f,o.name)).find(Y=>{var te;return Y.ext==="kml"||((te=Y.name)==null?void 0:te.toLowerCase().endsWith(".kml"))});if(!R)throw new Error("KMZ 压缩包中未找到 KML 文件");let O;typeof R.content=="string"?O=R.content:R.content instanceof ArrayBuffer||R.content instanceof Uint8Array?O=pi(R.content):O=String(R.content||"");const X=new Blob([O],{type:"application/vnd.google-earth.kml+xml"}),B=URL.createObjectURL(X);try{const Y=await l.KmlDataSource.load(B,{camera:r.scene.camera,canvas:r.scene.canvas}),te=`kmz_${++m}`;Y.name=o.name,await r.dataSources.add(Y),lt(r,l,Y,"kmz");const ae={id:te,name:o.name,type:"kmz",entity:Y};return a.value=[...a.value,ae],n.success(`KMZ "${o.name}" 加载成功（手动解压）`),ae}finally{URL.revokeObjectURL(B)}}async function I(o,l=[]){const r=t(),f=e();if(!r||!f)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:v}=await Zn(),A={shp:await o.arrayBuffer()};for(const ae of l){const ne=Jt(ae.name);ne==="dbf"&&(A.dbf=await ae.arrayBuffer()),ne==="shx"&&(A.shx=await ae.arrayBuffer()),ne==="prj"&&(A.prj=await ae.arrayBuffer()),ne==="cpg"&&(A.cpg=await ae.arrayBuffer())}const R=await v(A),O=Array.isArray(R)?R:[R],X=O.reduce((ae,ne)=>{var J;return ae+(((J=ne==null?void 0:ne.features)==null?void 0:J.length)||0)},0),B=O.length===1?O[0]:{type:"FeatureCollection",features:O.flatMap(ae=>(ae==null?void 0:ae.features)||[])},Y=new Blob([JSON.stringify(B)],{type:"application/geo+json"}),te=URL.createObjectURL(Y);try{const ae=await r.GeoJsonDataSource.load(te,{stroke:r.Color.fromCssColorString("#ffcc00"),fill:r.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:r.Color.fromCssColorString("#ffcc00"),markerSize:20}),ne=`shp_${++m}`;ae.name=o.name,await f.dataSources.add(ae),lt(f,r,ae,"shp");const J={id:ne,name:o.name,type:"shp",entity:ae};return a.value=[...a.value,J],n.success(`Shapefile "${o.name}" 加载成功 (${X} 个要素)`),URL.revokeObjectURL(te),J}catch(ae){throw URL.revokeObjectURL(te),ae}}async function k(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);let v=null;try{v=await P(o)}catch{}if(v)try{const A=await i(l,r,f,o.name,v),O={id:`gltf_${++m}`,name:o.name,type:"gltf",entity:A,blobUrl:f};return a.value=[...a.value,O],n.success(`3D 模型 "${o.name}" 加载成功 (${v.lng.toFixed(4)}, ${v.lat.toFixed(4)}, ${v.height.toFixed(1)}m)`),O}catch(A){throw Ve(f),A}return p.value&&Ve(p.value.blobUrl),p.value={file:o,blobUrl:f,name:o.name},{needsCoordInput:!0,file:o}}async function M(o){const l=t(),r=e();if(!p.value)throw new Error("没有等待确认的模型文件");const{blobUrl:f,name:v}=p.value;try{const A=await i(l,r,f,v,o),O={id:`gltf_${++m}`,name:v,type:"gltf",entity:A,blobUrl:f};a.value=[...a.value,O],n.success(`3D 模型 "${v}" 加载成功 (${o.lng.toFixed(4)}, ${o.lat.toFixed(4)}, ${o.height.toFixed(1)}m)`);const X=l.Cartesian3.fromDegrees(o.lng,o.lat,o.height+500);return r.camera.flyTo({destination:X,orientation:{heading:l.Math.toRadians(0),pitch:l.Math.toRadians(-30),roll:0},duration:2}),p.value=null,O}catch(A){throw Ve(f),p.value=null,A}}function C(){p.value&&(Ve(p.value.blobUrl),p.value=null)}async function D(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);try{const v=await l.CzmlDataSource.load(f),A=`czml_${++m}`;v.name=o.name,await r.dataSources.add(v),lt(r,l,v,"czml");const R={id:A,name:o.name,type:"czml",entity:v,blobUrl:f};return a.value=[...a.value,R],n.success(`CZML "${o.name}" 加载成功`),R}catch(v){throw Ve(f),v}}async function g(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);try{const v=await l.Cesium3DTileset.fromUrl(f),A=`tileset_${++m}`;r.scene.primitives.add(v);const R={id:A,name:o.name,type:"3dtiles",entity:v,blobUrl:f};return a.value=[...a.value,R],lt(r,l,v,"3dtiles"),n.success(`3D Tiles "${o.name}" 加载成功`),R}catch(v){throw Ve(f),v}}async function P(o){var v,A,R,O,X;const l=Jt(o.name);let r;if(l==="gltf"){const B=await o.text();r=JSON.parse(B)}else{const B=await o.arrayBuffer();r=L(B)}if(!r)return null;if((v=r.extensionsUsed)!=null&&v.includes("CESIUM_RTC")&&((R=(A=r.extensions)==null?void 0:A.CESIUM_RTC)!=null&&R.center)){const B=r.extensions.CESIUM_RTC.center;if(B.length>=3){const Y=t();if(Y){const te=new Y.Cartesian3(B[0],B[1],B[2]),ae=Y.Cartographic.fromCartesian(te);return{lng:Y.Math.toDegrees(ae.longitude),lat:Y.Math.toDegrees(ae.latitude),height:ae.height}}}}const f=(O=r.asset)==null?void 0:O.extras;if(f){const B=f.longitude??f.lng,Y=f.latitude??f.lat,te=f.height??f.altitude??f.alt??0;if(B!=null&&Y!=null)return{lng:Number(B),lat:Number(Y),height:Number(te)}}if(((X=r.nodes)==null?void 0:X.length)>0&&r.nodes[0].matrix){const B=r.nodes[0].matrix;if(B.length>=16){const Y=B[12],te=B[13],ae=B[14];if(Math.abs(Y)>1e5||Math.abs(te)>1e5){const ne=t();if(ne)try{const J=new ne.Cartesian3(Y,te,ae),de=ne.Cartographic.fromCartesian(J);return{lng:ne.Math.toDegrees(de.longitude),lat:ne.Math.toDegrees(de.latitude),height:de.height}}catch{}}}}return null}function L(o){if(o.byteLength<20)return null;const l=new DataView(o);if(l.getUint32(0,!0)!==1179937895)return null;const f=l.getUint32(12,!0);if(l.getUint32(16,!0)!==1313821514)return null;const A=new Uint8Array(o,20,f),R=new TextDecoder().decode(A);try{return JSON.parse(R)}catch{return null}}async function i(o,l,r,f,v){const{lng:A,lat:R,height:O}=v,X=o.Cartesian3.fromDegrees(A,R,O),B=new o.HeadingPitchRoll(0,0,0),Y=o.Transforms.localFrameToFixedFrameGenerator("north","west"),te=await o.Model.fromGltfAsync({url:r,modelMatrix:o.Transforms.headingPitchRollToFixedFrame(X,B,o.Ellipsoid.WGS84,Y),scale:1,show:!0});return te.name=f,l.scene.primitives.add(te),te}async function d(o){const l=e(),r=t();if(!l||!r)throw n.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const f=Jt(o.name);try{switch(f){case"geojson":case"json":return o.name.toLowerCase().includes(Ms)?await g(o):await c(o);case"kml":return await T(o);case"kmz":return await _(o);case"shp":return await I(o);case"glb":case"gltf":return await k(o);case"czml":return await D(o);default:throw n.error(`不支持的文件格式: .${f}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${f}`)}}catch(v){throw n.error(`加载 "${o.name}" 失败: ${v.message||v}`),v}}function u(o){const l=a.value.find(f=>f.id===o);if(!l)return;const r=e();if(r){try{l.type==="3dtiles"?r.scene.primitives.remove(l.entity):r.dataSources.remove(l.entity,!0)}catch{}l.blobUrl&&Ve(l.blobUrl),a.value=a.value.filter(f=>f.id!==o),n.info(`已移除 "${l.name}"`)}}function h(){var r,f,v,A,R;const o=e();if(!o){a.value=[];return}for(const O of a.value){try{O.type==="3dtiles"?o.scene.primitives.remove(O.entity):o.dataSources.remove(O.entity,!0)}catch{}O.blobUrl&&Ve(O.blobUrl)}if(Array.isArray((r=o.dataSources)==null?void 0:r.dataSources)){const O=o.dataSources.dataSources.slice();for(const X of O)if(X&&!X.isBaseLayerPickerDataSource)try{o.dataSources.remove(X,!0)}catch{}}const l=t();if(l&&Array.isArray((v=(f=o.scene)==null?void 0:f.primitives)==null?void 0:v.primitives)){const O=o.scene.primitives.primitives.slice();for(const X of O)if(!(!X||!(X instanceof l.Cesium3DTileset||X instanceof l.Model||X.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(X.name||"")))))try{o.scene.primitives.remove(X)}catch{}}a.value=[],C();try{(R=(A=o.scene).requestRender)==null||R.call(A)}catch{}n.info("已清除所有导入数据")}return{loadDataFile:d,loadedDataSources:a,removeDataSource:u,clearAllDataSources:h,pendingGltfFile:p,loadGltfWithUserCoords:M,cancelPendingGltf:C}}const Ls="cesium_tool_panel_open",at={low:{stepCount:32,maxDistance:2e5,label:"低"},medium:{stepCount:48,maxDistance:36e4,label:"中"},high:{stepCount:64,maxDistance:5e5,label:"高"},ultra:{stepCount:80,maxDistance:7e5,label:"超高"}};function Cs({fluidPanelRef:e,sceneActions:t={},wind:n={},modelManager:a=null,cameraEnhanced:p=null,heightSampler:m=null,playerController:c=null,panelStorageKey:T=Ls}={}){const _=Z(pt(T,!0)),x=Z({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1,volumetricClouds:!1}),I=Z({enableLighting:!0,showGroundAtmosphere:!0,dynamicAtmosphereLighting:!0,dynamicAtmosphereLightingFromSun:!0,atmosphereLightIntensity:5.5,atmosphereHueShift:-.015,atmosphereSaturationShift:.08,atmosphereBrightnessShift:.02,lightingFadeInDistance:0,lightingFadeOutDistance:Number.MAX_SAFE_INTEGER,nightFadeInDistance:0,nightFadeOutDistance:Number.MAX_SAFE_INTEGER,fogEnabled:!1,fogDensity:12e-5,fogMinimumBrightness:.035,sunShow:!0,moonShow:!0,skyBoxShow:!0}),k=Z({dayNightEnabled:!1,nightFactor:0,moonLightEnabled:!1,moonLightIntensity:.18,ambientIntensity:.08,cloudsEnabled:!1,cloudCoverage:.3,cloudSpeed:.001,cloudBottom:1500,cloudTop:2150,cloudQuality:"medium",starsEnabled:!1,starsIntensity:1}),M=Z({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,bsmShadow:!1,shadowResolution:256,maxDistance:at.medium.maxDistance,stepCount:at.medium.stepCount});x.value={...x.value,clouds:M.value};const C=Z({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),D=Z({speed:300,flySpeed:5500,gravity:-2400,jumpHeight:600,sensitivity:5}),g=Z({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),P=Z(!1),L=Z({elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2}),i=_e(()=>{var l,r,f,v,A,R,O,X,B,Y,te,ae,ne,J,de,we,Fe,Te,q,j;return[{id:"scene",title:"场景导航",description:"相机飞行和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"atmosphere",title:"大气·光照·天空",description:"Cesium 原生光照 + Tellux 增强大气 + 高级后效（全部可选）",status:x.value.atmosphere||x.value.fog||x.value.hbao||x.value.volumetricClouds?"部分启用":"仅晨昏半球",statusTone:x.value.atmosphere?"success":"neutral",controls:[...Os(I.value),{id:"fog",label:"高度雾",type:"toggle",value:x.value.fog,tooltip:"基于高度的指数雾效"},{id:"hbao",label:"微阴影",type:"toggle",value:x.value.hbao,tooltip:"环境光遮蔽（HBAO）"},{id:"tiltShift",label:"移轴",type:"toggle",value:x.value.tiltShift,tooltip:"移轴模糊后处理"},{id:"atmosphere",label:"大气效果",type:"toggle",value:x.value.atmosphere,tooltip:"启用 Tellux 大气渲染（日夜过渡、月光、星空）"},...zs(k.value,!x.value.atmosphere),{id:"volumetricClouds",label:"云层",type:"toggle",value:x.value.volumetricClouds,tooltip:"Cesium ECEF 球壳体积云"},{id:"cloudQuality",label:"云质量",type:"select",value:M.value.quality,options:Object.entries(at).map(([W,ve])=>({value:W,label:ve.label})),disabled:!x.value.volumetricClouds},...Ps(M.value,!x.value.volumetricClouds)]},{id:"tools",title:"空间工具",description:"模型加载、增强相机、高度采样（Tellux 移植）",status:(((l=a==null?void 0:a.modelCount)==null?void 0:l.value)>0?"模型":"")||(((r=p==null?void 0:p.flightState)==null?void 0:r.value)==="flying"?"飞行中":"就绪"),statusTone:((f=a==null?void 0:a.modelCount)==null?void 0:f.value)>0?"success":"neutral",controls:[{id:"modelManagerEnabled",label:"模型管理",type:"toggle",value:!1,tooltip:"启用后可加载 glTF/GLB 模型到地理坐标位置"},{id:"cameraEnhancedEnabled",label:"增强相机",type:"toggle",value:!1,tooltip:"自定义缓动函数、角度插值和弹簧物理"},{id:"heightSamplerEnabled",label:"高度采样",type:"toggle",value:!1,tooltip:"地形高度查询、批量异步采样、屏幕坐标拾取"}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(v=n.wind2D)!=null&&v.value?"已加载":"未加载",statusTone:(A=n.wind2D)!=null&&A.value?"success":"neutral",actions:[{id:"load",label:(R=n.wind2D)!=null&&R.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((O=n.wind2D)!=null&&O.value)}],controls:Fs((X=n.windParams)==null?void 0:X.value,!!((B=n.wind2D)!=null&&B.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:g.value.isPicking?"等待选点":g.value.hasFluid?"已创建":"未创建",statusTone:g.value.isPicking?"warning":g.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:g.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:g.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!g.value.hasFluid&&!g.value.isPicking}],controls:Rs(C.value,g.value)},{id:"shallowWater",title:"热带浅水",description:"Three.js 热带浅水场景（焦散/折射/物理吸色/体积云/闪电）",status:P.value?"已启用":"未启用",statusTone:P.value?"success":"neutral",actions:[{id:"toggle",label:P.value?"关闭":"启用",variant:P.value?"danger":"primary"}],controls:Bs(L.value,!P.value)},{id:"player",title:"人物漫游",description:"第一/第三人称视角 + WASD 移动 + 碰撞检测 + 飞行模式",status:(Y=c==null?void 0:c.isActive)!=null&&Y.value?(te=c.isFirstPerson)!=null&&te.value?"第一人称":"第三人称":"未启动",statusTone:(ae=c==null?void 0:c.isActive)!=null&&ae.value?"success":"neutral",actions:[{id:"toggle",label:(ne=c==null?void 0:c.isActive)!=null&&ne.value?"停止漫游":"启动漫游",variant:(J=c==null?void 0:c.isActive)!=null&&J.value?"danger":"primary"},{id:"changeView",label:"切换视角",disabled:!((de=c==null?void 0:c.isActive)!=null&&de.value)}],controls:[{id:"speed",label:"行走速度",type:"range",value:D.value.speed,min:50,max:2e3,step:10,disabled:!((we=c==null?void 0:c.isActive)!=null&&we.value)},{id:"flySpeed",label:"飞行速度",type:"range",value:D.value.flySpeed,min:200,max:1e4,step:100,disabled:!((Fe=c==null?void 0:c.isActive)!=null&&Fe.value)},{id:"gravity",label:"重力",type:"range",value:D.value.gravity,min:-6e3,max:0,step:50,disabled:!((Te=c==null?void 0:c.isActive)!=null&&Te.value)},{id:"jumpHeight",label:"跳跃高度",type:"range",value:D.value.jumpHeight,min:0,max:3e3,step:50,disabled:!((q=c==null?void 0:c.isActive)!=null&&q.value)},{id:"sensitivity",label:"鼠标灵敏度",type:"range",value:D.value.sensitivity,min:1,max:20,step:.5,disabled:!((j=c==null?void 0:c.isActive)!=null&&j.value)}]}]});xe(_,l=>{Dt(T,l)});function d({moduleId:l,actionId:r}){var v,A;(A=(v={scene:{home:()=>{var R;return(R=t.flyToHome)==null?void 0:R.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},fluid:{pick:()=>{var R,O;return(O=(R=e==null?void 0:e.value)==null?void 0:R.startPickHeightMap)==null?void 0:O.call(R)},clear:()=>{var R,O;return(O=(R=e==null?void 0:e.value)==null?void 0:R.clearFluid)==null?void 0:O.call(R)}},shallowWater:{toggle:()=>{P.value=!P.value}},player:{toggle:()=>{var R;return(R=c==null?void 0:c.togglePlayer)==null?void 0:R.call(c)},changeView:()=>{var R;return(R=c==null?void 0:c.changeView)==null?void 0:R.call(c)}}}[l])==null?void 0:v[r])==null||A.call(v)}function u({moduleId:l,controlId:r,value:f}){var v,A,R;if(l==="wind"&&r in(((v=n.windParams)==null?void 0:v.value)||{})){(A=n.setWindParam)==null||A.call(n,r,f);return}if(l==="fluid"&&r in C.value){C.value={...C.value,[r]:r==="waterColor"?f:Number(f)};return}if(l==="shallowWater"&&r in L.value){L.value={...L.value,[r]:r==="waterColor"||r==="lightningEnabled"?f:Number(f)};return}if(l==="player"&&r in D.value){const O=Number(f);D.value={...D.value,[r]:O};const X=(R=c==null?void 0:c.getPlayerInstance)==null?void 0:R.call(c);X&&(r==="speed"?X.setPlayerSpeed(O):r==="flySpeed"?X.setPlayerFlySpeed(O):r==="gravity"?X.setGravity(O):r==="jumpHeight"?X.setJumpHeight(O):r==="sensitivity"&&X.setMouseSensitivity(O));return}if(l==="atmosphere"){if(r in x.value){x.value={...x.value,[r]:!!f};return}if(As(r)){const O=r==="cloudQuality"?{quality:f,previousQuality:M.value.quality}:{[r]:f};M.value=Es({...M.value,...O}),x.value={...x.value,clouds:M.value};return}if(r in I.value){I.value={...I.value,[r]:f};return}if(r==="atmosphereEnabled"){x.value={...x.value,atmosphere:!!f};return}r in k.value&&(k.value={...k.value,[r]:f})}}function h(l){const r=vt(l==null?void 0:l.waterLevel),f=vt(l==null?void 0:l.waterLevelMin),v=vt(l==null?void 0:l.waterLevelMax);g.value={isPicking:!!(l!=null&&l.isPicking),hasFluid:!!(l!=null&&l.hasFluid),selectedText:(l==null?void 0:l.selectedText)||"",waterLevel:r,waterLevelMin:f,waterLevelMax:v},r!==null&&(C.value={...C.value,waterLevel:r})}function o(){var l;(l=n.clearWind2D)==null||l.call(n)}return{toolPanelOpen:_,advancedEffectControls:x,cloudParams:M,baseAtmosphereParams:I,atmosphereParams:k,fluidParams:C,fluidState:g,shallowWaterVisible:P,shallowWaterParams:L,toolModules:i,handleToolAction:d,handleToolControlChange:u,handleFluidStateChange:h,cleanupTools:o}}function Fs(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function Ps(e={},t){return[{id:"coverage",label:"云量",type:"range",min:.18,max:.82,step:.01,value:e.coverage??.52,displayValue:Number(e.coverage??.52).toFixed(2),disabled:t,tooltip:"覆盖率阈值。数值越大云越少，数值越小云越密。",numberInput:!1},{id:"density",label:"密度",type:"range",min:25e-6,max:18e-5,step:5e-6,value:e.density??9e-5,displayValue:Number(e.density??9e-5).toExponential(2),disabled:t,tooltip:"体积消光密度。数值越大云更厚、更暗，也更影响性能观感。",numberInput:!1},{id:"shadowStrength",label:"阴影",type:"range",min:0,max:1,step:.02,value:e.shadowStrength??.82,displayValue:Number(e.shadowStrength??.82).toFixed(2),disabled:t,numberInput:!1},{id:"multiScattering",label:"散射",type:"range",min:0,max:1,step:.02,value:e.multiScattering??.58,displayValue:Number(e.multiScattering??.58).toFixed(2),disabled:t,numberInput:!1},{id:"beerShadowStrength",label:"远影",type:"range",min:0,max:1,step:.02,value:e.beerShadowStrength??.64,displayValue:Number(e.beerShadowStrength??.64).toFixed(2),disabled:t,tooltip:"Beer Shadow Map 风格的远距离光学深度近似。数值越大，云层背光阴影越明显。",numberInput:!1},{id:"powderStrength",label:"银边",type:"range",min:0,max:1.4,step:.02,value:e.powderStrength??.72,displayValue:Number(e.powderStrength??.72).toFixed(2),disabled:t,numberInput:!1},{id:"hazeStrength",label:"薄霾",type:"range",min:0,max:1,step:.02,value:e.hazeStrength??.38,displayValue:Number(e.hazeStrength??.38).toFixed(2),disabled:t,numberInput:!1},{id:"groundBounceStrength",label:"反照",type:"range",min:0,max:1,step:.02,value:e.groundBounceStrength??.26,displayValue:Number(e.groundBounceStrength??.26).toFixed(2),disabled:t,tooltip:"地面反弹光近似，用于提亮云底。",numberInput:!1},{id:"bsmShadow",label:"BSM",type:"toggle",value:!!e.bsmShadow,disabled:t,tooltip:"Beer Shadow Map 阴影 atlas。用于远距离自阴影，异常时会自动降级关闭。"},{id:"shadowResolution",label:"影图",type:"range",min:128,max:512,step:128,value:e.shadowResolution??256,displayValue:`${Math.round(e.shadowResolution??256)} px`,disabled:t||!e.bsmShadow,tooltip:"BSM 阴影 atlas 单级联分辨率。越高越清晰，也越影响性能。",numberInput:!1},{id:"maxDistance",label:"距离",type:"range",min:12e4,max:9e5,step:1e4,value:e.maxDistance??at.medium.maxDistance,displayValue:`${Math.round((e.maxDistance??at.medium.maxDistance)/1e3)} km`,disabled:t,numberInput:!1},{id:"stepCount",label:"步数",type:"range",min:24,max:80,step:1,value:e.stepCount??at.medium.stepCount,displayValue:String(Math.round(e.stepCount??at.medium.stepCount)),disabled:t,numberInput:!1}]}function As(e){return["cloudQuality","coverage","density","shadowStrength","beerShadowStrength","multiScattering","powderStrength","hazeStrength","groundBounceStrength","bsmShadow","shadowResolution","maxDistance","stepCount"].includes(e)}function Es(e={}){const t=Object.prototype.hasOwnProperty.call(at,e.quality)?e.quality:"medium",n=at[t],a=e.quality&&e.quality!==e.previousQuality;return{quality:t,coverage:We(Ke(e.coverage,.52),.18,.82),density:We(Ke(e.density,9e-5),25e-6,18e-5),shadowStrength:We(Ke(e.shadowStrength,.82),0,1),beerShadowStrength:We(Ke(e.beerShadowStrength,.64),0,1),multiScattering:We(Ke(e.multiScattering,.58),0,1),powderStrength:We(Ke(e.powderStrength,.72),0,1.4),hazeStrength:We(Ke(e.hazeStrength,.38),0,1),groundBounceStrength:We(Ke(e.groundBounceStrength,.26),0,1),bsmShadow:e.bsmShadow===!0,shadowResolution:Math.round(We(Ke(e.shadowResolution,256),128,512)/128)*128,maxDistance:We(a?n.maxDistance:Ke(e.maxDistance,n.maxDistance),12e4,9e5),stepCount:Math.round(We(a?n.stepCount:Ke(e.stepCount,n.stepCount),24,80))}}function Rs(e,t={}){const n=vt(t.waterLevelMin),a=vt(t.waterLevelMax),p=n!==null&&a!==null,m=p?Math.min(n,a):0,c=p?Math.max(n,a):0,T=vt(e.waterLevel),_=p?We(T??m,m,c):0,x=p?Math.max((c-m)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:m,max:c,step:x,value:_,displayValue:p?`${ks(_)} m`:"先捕捉",disabled:!p,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function vt(e){const t=Number(e);return Number.isFinite(t)?t:null}function Ke(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function We(e,t,n){return Math.max(t,Math.min(n,e))}function ks(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const Is={low:{stepCount:32,label:"低"},medium:{stepCount:64,label:"中"},high:{stepCount:96,label:"高"},ultra:{stepCount:128,label:"超高"}};function zs(e={},t){return[{id:"atmosphereEnabled",label:"大气效果",type:"toggle",value:!t,tooltip:"启用 Tellux 大气渲染系统（日夜过渡、月光、体积云、星空）"},{id:"dayNightEnabled",label:"日夜过渡",type:"toggle",value:e.dayNightEnabled!==!1,disabled:t,tooltip:"基于太阳高度角的平滑日夜过渡效果"},{id:"moonLightEnabled",label:"月光",type:"toggle",value:e.moonLightEnabled!==!1,disabled:t,tooltip:"夜间月光照明效果"},{id:"moonLightIntensity",label:"月光强度",type:"range",min:0,max:1,step:.01,value:e.moonLightIntensity??.18,displayValue:Number(e.moonLightIntensity??.18).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"ambientIntensity",label:"环境光",type:"range",min:0,max:1,step:.01,value:e.ambientIntensity??.08,displayValue:Number(e.ambientIntensity??.08).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"cloudsEnabled",label:"体积云",type:"toggle",value:e.cloudsEnabled===!0,disabled:t,tooltip:"基于 PostProcessStage 的体积云渲染"},{id:"cloudQuality",label:"云质量",type:"select",value:e.cloudQuality??"medium",options:Object.entries(Is).map(([n,a])=>({value:n,label:a.label})),disabled:t||!e.cloudsEnabled},{id:"cloudCoverage",label:"覆盖度",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.3,displayValue:`${Math.round((e.cloudCoverage??.3)*100)}%`,disabled:t||!e.cloudsEnabled},{id:"cloudSpeed",label:"移动速度",type:"range",min:0,max:.01,step:1e-4,value:e.cloudSpeed??.001,displayValue:Number(e.cloudSpeed??.001).toFixed(4),disabled:t||!e.cloudsEnabled},{id:"cloudBottom",label:"云底高度",type:"range",min:500,max:5e3,step:50,value:e.cloudBottom??1500,displayValue:`${Math.round(e.cloudBottom??1500)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudTop",label:"云顶高度",type:"range",min:1e3,max:1e4,step:100,value:e.cloudTop??2150,displayValue:`${Math.round(e.cloudTop??2150)} m`,disabled:t||!e.cloudsEnabled},{id:"starsEnabled",label:"星空",type:"toggle",value:e.starsEnabled!==!1,disabled:t,tooltip:"基于高度的星空可见性"},{id:"starsIntensity",label:"星空强度",type:"range",min:0,max:5,step:.1,value:e.starsIntensity??1,displayValue:Number(e.starsIntensity??1).toFixed(1),disabled:t||!e.starsEnabled}]}function Os(e={}){return[{id:"enableLighting",label:"日照",type:"toggle",value:e.enableLighting!==!1,tooltip:"Cesium globe.enableLighting：启用日照贴图"},{id:"showGroundAtmosphere",label:"地面大气",type:"toggle",value:e.showGroundAtmosphere!==!1,tooltip:"globe.showGroundAtmosphere：地面大气光晕"},{id:"dynamicAtmosphereLighting",label:"动态光照",type:"toggle",value:e.dynamicAtmosphereLighting!==!1},{id:"atmosphereLightIntensity",label:"大气光强",type:"range",min:0,max:25,step:.5,value:e.atmosphereLightIntensity??5.5,displayValue:Number(e.atmosphereLightIntensity??5.5).toFixed(1)},{id:"fogEnabled",label:"雾效",type:"toggle",value:e.fogEnabled!==!1},{id:"fogDensity",label:"雾密度",type:"range",min:1e-5,max:.001,step:1e-5,value:e.fogDensity??12e-5,displayValue:Number(e.fogDensity??12e-5).toFixed(5),disabled:!e.fogEnabled},{id:"sunShow",label:"太阳",type:"toggle",value:e.sunShow!==!1},{id:"moonShow",label:"月亮",type:"toggle",value:e.moonShow!==!1},{id:"skyBoxShow",label:"星空盒",type:"toggle",value:e.skyBoxShow!==!1}]}function Bs(e={},t=!1){return[{id:"elevation",label:"高度角",type:"range",min:2,max:80,step:.1,value:e.elevation??30,displayValue:Number(e.elevation??30).toFixed(1),disabled:t},{id:"azimuth",label:"方位角",type:"range",min:-180,max:180,step:.1,value:e.azimuth??150,displayValue:Number(e.azimuth??150).toFixed(1),disabled:t},{id:"clarity",label:"清澈度",type:"range",min:.03,max:.4,step:.005,value:e.clarity??.085,displayValue:Number(e.clarity??.085).toFixed(3),tooltip:"越小越清澈(Beer-Lambert 密度)",disabled:t},{id:"causticStrength",label:"焦散强度",type:"range",min:0,max:2,step:.05,value:e.causticStrength??.9,displayValue:Number(e.causticStrength??.9).toFixed(2),disabled:t},{id:"waveHeight",label:"浪高",type:"range",min:0,max:1.5,step:.05,value:e.waveHeight??.5,displayValue:Number(e.waveHeight??.5).toFixed(2),disabled:t},{id:"foamWidth",label:"泡沫宽度",type:"range",min:0,max:8,step:.1,value:e.foamWidth??2.4,displayValue:Number(e.foamWidth??2.4).toFixed(1),disabled:t},{id:"reflection",label:"反射强度",type:"range",min:0,max:1,step:.02,value:e.reflection??.38,displayValue:Number(e.reflection??.38).toFixed(2),disabled:t},{id:"waterColor",label:"远处浅水色",type:"color",value:e.waterColor??"#2bb3c4",disabled:t},{id:"cloudCoverage",label:"云量",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.58,displayValue:Number(e.cloudCoverage??.58).toFixed(2),disabled:t},{id:"lightningEnabled",label:"闪电开关",type:"toggle",value:e.lightningEnabled!==!1,disabled:t},{id:"lightningInterval",label:"闪电间隔(秒)",type:"range",min:.4,max:8,step:.1,value:e.lightningInterval??2,displayValue:Number(e.lightningInterval??2).toFixed(1),disabled:t||e.lightningEnabled===!1}]}const{getLayerIdByIndex:Hs,getLayerIndexById:Jn}=li({urlLayerOptions:ci,getLayerCategoryById:ui,getLayerGroupById:di}),nn=-90,fn=1,da=5e7;function Ns({getViewer:e,getCesium:t,onCameraViewSync:n,onBasemapRestore:a}={}){const p=pa(),m=ga();let c=null;function T(i){return hi(i,p.query)}function _(){const i=String(T(bn)||"").trim(),d=ct(T("lng")),u=ct(T("lat")),h=Ws(T("z")),o=fi(i);if(o&&d!==null&&u!==null&&h!==null){const r={lng:d,lat:u,height:h,...o};if(Qn(r))return r}const l=mi(i);return Qn(l)?l:d===null||u===null||h===null||d<-180||d>180||u<-90||u>90?null:{lng:d,lat:u,height:h,heading:ct(T("heading"))??0,pitch:ct(T("pitch"))??nn,roll:ct(T("roll"))??0}}function x({duration:i=0}={}){const d=e==null?void 0:e(),u=t==null?void 0:t(),h=_();if(!(d!=null&&d.camera)||!u||!h)return!1;const o=u.Cartesian3.fromDegrees(h.lng,h.lat,h.height),l={heading:Qt(u,h.heading??0),pitch:Qt(u,Us(h.pitch??nn)),roll:Qt(u,h.roll??0)};return Number(i)>0?(d.camera.flyTo({destination:o,orientation:l,duration:Number(i)}),!0):(d.camera.setView({destination:o,orientation:l}),!0)}function I(i){if(!i)return null;const d=Jn(i);if(d===null)return null;const u={view:Gt,l:String(d)};return L(u),String(d)}function k(){const i=ct(T("l"));if(i===null)return null;const d=Hs(i);return d&&(a==null||a(d)),d}function M({initialSync:i=!1,getActivePresetId:d}={}){const u=g();if(!(!(u!=null&&u.moveEnd)||c)&&(c=u.moveEnd.addEventListener(()=>{const h=d==null?void 0:d();D({activePresetId:h})}),i)){const h=d==null?void 0:d();D({activePresetId:h})}}function C(){typeof c=="function"&&c(),c=null}function D({activePresetId:i}={}){const d=t==null?void 0:t(),u=g();if(!d||!(u!=null&&u.position))return;const h=d.Cartographic.fromCartesian(u.position);if(!h)return;const o=d.Math.toDegrees(h.longitude),l=d.Math.toDegrees(h.latitude),r=Number(h.height),f=d.Math.toDegrees(Number(u.heading)||0),v=d.Math.toDegrees(Number(u.pitch)||0),A=d.Math.toDegrees(Number(u.roll)||0);if(!Number.isFinite(o)||!Number.isFinite(l)||!Number.isFinite(r))return;const R=Math.max(fn,r),O=si({heading:f,pitch:v,roll:A});if(!O||O==="0")return;const X={view:Gt,camera:{lng:o,lat:l,height:R,heading:f,pitch:v,roll:A}},B={view:Gt,[bn]:O,lng:ea(o,6),lat:ea(l,6),z:Gs(R)},Y=i;if(Y){const te=Jn(Y);te!==null&&(B.l=String(te))}L(B),n==null||n(X)}function g(){var d;const i=e==null?void 0:e();return(i==null?void 0:i.camera)||((d=i==null?void 0:i.scene)==null?void 0:d.camera)||null}function P(i,d){const u=Object.keys(i).filter(o=>i[o]!==void 0&&i[o]!==null&&i[o]!==""),h=Object.keys(d).filter(o=>d[o]!==void 0&&d[o]!==null&&d[o]!=="");return u.length!==h.length?!1:h.every(o=>String(i[o]??"")===String(d[o]??""))}function L(i){const d={...Rn(p.query),...i};xa.forEach(h=>{h in i||delete d[h]}),Object.keys(d).forEach(h=>{const o=d[h];o==null||o===""?delete d[h]:d[h]=String(o)});const u=Rn(p.query);P(u,d)||m.replace({path:p.path||"/home",query:d}).catch(()=>{})}return{restoreCameraFromUrl:x,restoreBasemapFromUrl:k,syncBasemapToUrl:I,bindCameraViewSync:M,cleanupCameraViewSync:C}}function ct(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Ws(e){const t=ct(e);return t===null||t<fn||t>da?null:t}function Qn(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),a=Number(e.height),p=Number(e.heading),m=Number(e.pitch),c=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(a)&&a>=fn&&a<=da&&Number.isFinite(p)&&Number.isFinite(m)&&m>=-90&&m<=90&&Number.isFinite(c)}function Us(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):nn}function ea(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function Gs(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function Qt(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const De={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},$s=new Float32Array([-1,-1,1,-1,1,1,-1,1]),qs=new Float32Array([0,0,1,0,1,1,0,1]),js=new Uint16Array([0,1,2,0,2,3]);function ot(e,t,n){return Math.max(t,Math.min(n,e))}function pe(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Xs(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),a=Math.min(2048,n),p=Math.max(1,Math.floor(e)),m=Math.sqrt(p),c=Math.log2(m),T=Number.isFinite(c)?Math.round(c):4;let _=Math.pow(2,T);return _=ot(_,16,a),_}function Vs(e){const t=e*e,n=new Float32Array(t*4);for(let a=0;a<t;a+=1){const p=a*4;n[p]=Math.random(),n[p+1]=Math.random(),n[p+2]=Math.random(),n[p+3]=Math.random()}return n}function Ks(e){return new Float32Array(e*e*4)}function Ys(e,t,n,a,p){const m=t.createTexture();if(!m)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,m),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,a,0,t.RGBA,t.FLOAT,p),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let c=!1;return{_context:e,_texture:m,_target:t.TEXTURE_2D,_width:n,_height:a,destroy(){c||(t.deleteTexture(m),c=!0)}}}class Zs{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const a={...De,...n};this.speedFactor=pe(a.speedFactor,De.speedFactor),this.cullSpeedMin=pe(a.cullSpeedMin,De.cullSpeedMin),this.cullSpeedMax=pe(a.cullSpeedMax,De.cullSpeedMax),this.windSpeedMin=pe(a.windSpeedMin,De.windSpeedMin),this.windSpeedMax=pe(a.windSpeedMax,De.windSpeedMax),this.arrowLength=pe(a.arrowLength,De.arrowLength),this.trailLength=pe(a.trailLength,De.trailLength),this.decaySpeed=pe(a.decaySpeed,De.decaySpeed),this.alphaFactor=pe(a.alphaFactor,De.alphaFactor),this.maxWindSpeed=pe(a.maxWindSpeed,De.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=pe(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=pe(t.longitude,NaN),a=pe(t.latitude,NaN),p=Array.isArray(t.altitude)?t.altitude:[],m=Array.isArray(t.sizeMesh)?t.sizeMesh:[],c=Array.isArray(t.count)?t.count:[],T=Array.isArray(t.hspeed)?t.hspeed:[],_=Array.isArray(t.hdir)?t.hdir:[],x=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(a))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const I=p.length;if(I<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(m.length!==I||c.length!==I)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const k=c.map(l=>Math.max(1,Math.floor(pe(l,1)))),M=m.map(l=>Math.max(1,pe(l,1))),C=p.map(l=>pe(l,0)),D=k.reduce((l,r)=>l+r*r,0);if(T.length<D||_.length<D||x.length<D)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=I,this.visibleLayerMin=0,this.visibleLayerMax=I-1,this._altitudes=C.slice(),this._maxNx=Math.max(...k),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*I;const g=new Float32Array(this._atlasWidth*this._atlasHeight*4);let P=0;for(let l=0;l<I;l+=1){const r=k[l],f=r;for(let v=0;v<f;v+=1)for(let A=0;A<r;A+=1){const R=P+v*r+A,O=((l*this._maxNy+v)*this._atlasWidth+A)*4,X=Number(T[R]),B=Number(_[R]),Y=Number(x[R]);if(!(Number.isFinite(X)&&Number.isFinite(B))){g[O]=0,g[O+1]=0,g[O+2]=0,g[O+3]=0;continue}const ae=B*Math.PI/180;g[O]=X*Math.sin(ae),g[O+1]=X*Math.cos(ae),g[O+2]=Number.isFinite(Y)?Y:0,g[O+3]=1}P+=r*f}this._createOrReplaceWindAtlasTexture(g);const L=Math.max(...M),i=this._maxNx*L,d=i/2/111320,u=a*Math.PI/180,h=Math.max(1e-6,Math.abs(Math.cos(u))),o=i/2/(111320*h);this._bounds={minLon:n-o,maxLon:n+o,minLat:a-d,maxLat:a+d,minHeight:Math.min(...C),maxHeight:Math.max(...C)},this._dataPointCount=D,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(pe(t,1))),a=Xs(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&a===this._particleTextureSize||(this._particleTextureSize=a,this._particleCount=a*a,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=ot(pe(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const a=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(a)}setBounds(t,n,a,p){const m=pe(t,NaN),c=pe(n,NaN),T=pe(a,NaN),_=pe(p,NaN);if(!Number.isFinite(m)||!Number.isFinite(c)||!Number.isFinite(T)||!Number.isFinite(_))return;const x=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};x.minLon=Math.min(m,c),x.maxLon=Math.max(m,c),x.minLat=Math.min(T,_),x.maxLat=Math.max(T,_),this._bounds=x,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const p=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[p],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=p,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Ys(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,a=Vs(n),p=Ks(n);for(let m=0;m<2;m+=1){this._particlePositionTextures[m]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:a},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[m]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:p},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[m]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[m],this._velocityTextures[m]],destroyAttachments:!1});const c=this._framebuffers[m]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,c),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:$s,usage:t.BufferUsage.STATIC_DRAW}),a=t.Buffer.createVertexBuffer({context:this._context,typedArray:qs,usage:t.BufferUsage.STATIC_DRAW}),p=t.Buffer.createIndexBuffer({context:this._context,typedArray:js,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:a,componentsPerAttribute:2}],indexBuffer:p})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let a=0;a<n.length;a+=1)n[a]=a;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:a,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:t.Pass.OPAQUE})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=ot(Math.floor(pe(this.visibleLayerMin,0)),0,this._layerCount-1),n=ot(Math.floor(pe(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const a=Math.max(1e-4,pe(this.maxWindSpeed,De.maxWindSpeed)),p=ot(pe(t,0)/a,0,1),m=ot(pe(n,a)/a,0,1);return{min:Math.min(p,m),max:Math.max(p,m)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>pe(this.speedFactor,De.speedFactor),maxWindSpeed:()=>Math.max(1e-4,pe(this.maxWindSpeed,De.maxWindSpeed)),decaySpeed:()=>ot(pe(this.decaySpeed,De.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>pe(this.arrowLength,De.arrowLength),trailLength:()=>pe(this.trailLength,De.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>ot(pe(this.alphaFactor,De.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Js({getViewer:e,getCesium:t,message:n}){const a=Z(null),p=Z({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function m(){var I,k;const x=e==null?void 0:e();if(a.value){try{(k=(I=x==null?void 0:x.scene)==null?void 0:I.primitives)==null||k.remove(a.value)}catch{}a.value.destroy(),a.value=null}}function c(){const x=e==null?void 0:e(),I=t==null?void 0:t();if(!x||!I){n.error("Cesium 尚未初始化");return}m();const k=Qs(I);a.value=new Zs(x,{maxWindSpeed:20,cesium:I,speedFactor:p.value.speedFactor,arrowLength:p.value.arrowLength,trailLength:p.value.trailLength,alphaFactor:p.value.alphaFactor}),a.value.loadData(k),x.scene.primitives.add(a.value),a.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function T(){a.value&&(a.value.speedFactor=p.value.speedFactor,a.value.arrowLength=p.value.arrowLength,a.value.trailLength=p.value.trailLength,a.value.alphaFactor=p.value.alphaFactor)}function _(x,I){return x in p.value?(p.value={...p.value,[x]:Number(I)},T(),!0):!1}return{wind2D:a,windParams:p,clearWind2D:m,loadSimulatedWind:c,setWindParam:_}}function Qs(e){const p=[0,2e3,5e3,1e4,15e3],m=[3e4,3e4,25e3,25e3,2e4],c=[30,30,25,25,20],T=c.reduce((M,C)=>M+C*C,0),_=new Array(T),x=new Array(T),I=new Array(T);let k=0;for(let M=0;M<5;M++){const C=c[M],D=c[M],g=m[M];for(let P=0;P<D;P++)for(let L=0;L<C;L++){const i=k+P*C+L,d=(L-C/2)*(g/111320),u=(P-D/2)*(g/111320/Math.cos(e.Math.toRadians(35))),o=Math.atan2(u,d)+Math.PI/2+.2*Math.sin(L*.5)*Math.cos(P*.5);x[i]=e.Math.toDegrees(o)%360;const l=Math.sqrt(d*d+u*u),f=Math.max(0,1-l/15);_[i]=(5+M*2)*f+2*Math.random(),I[i]=.5*Math.sin(L*.3)*Math.cos(P*.3)}k+=C*D}return{longitude:104,latitude:35,altitude:p,sizeMesh:m,count:c,hspeed:_,hdir:x,vspeed:I}}const Tt=Object.freeze({LOADING:"loading",READY:"ready",ERROR:"error"});function an(e){if(!e)return null;if(Array.isArray(e)){const[a,p,m=0]=e;return typeof a!="number"||typeof p!="number"?null:{lng:a,lat:p,height:m}}const t=e.longitude??e.lng,n=e.latitude??e.lat;return typeof t!="number"||typeof n!="number"?null:{lng:t,lat:n,height:e.height??0}}function ta(e,t){const n=an(t.coordinates);if(!n)return null;const a=e.Cartesian3.fromDegrees(n.lng,n.lat,n.height),p=new e.HeadingPitchRoll(e.Math.toRadians(t.heading??0),e.Math.toRadians(t.pitch??0),e.Math.toRadians(t.roll??0)),m=e.Transforms.headingPitchRollToFixedFrame(a,p),c=t.scale;if(c!==void 0&&c!==1){let T=1,_=1,x=1;typeof c=="number"?T=_=x=c:typeof c=="object"&&(T=c.x??1,_=c.y??1,x=c.z??1);const I=e.Matrix4.fromScale(new e.Cartesian3(T,_,x));e.Matrix4.multiply(m,I,m)}return m}function el({getViewer:e,getCesium:t,message:n}){const a=new Map;let p=0;const m=Z([]),c=_e(()=>m.value.filter(h=>h.state===Tt.LOADING).length),T=_e(()=>m.value.filter(h=>h.state===Tt.READY).length),_=_e(()=>m.value.length);function x(){m.value=Array.from(a.values()).map(h=>({...h.entry}))}function I(){do p++;while(a.has(`model-${p}`));return`model-${p}`}async function k(h){var A,R,O;const o=e==null?void 0:e(),l=t==null?void 0:t();if(!o||!l)return(A=n==null?void 0:n.error)==null||A.call(n,"Cesium 尚未初始化，无法加载模型"),null;const r=h.id??I();if(a.has(r))return(R=n==null?void 0:n.error)==null||R.call(n,`模型 "${r}" 已存在，请使用其他 ID`),null;const f=an(h.coordinates),v={id:r,name:h.name??r,url:h.url,coordinates:f,heading:h.heading??0,pitch:h.pitch??0,roll:h.roll??0,scale:h.scale??1,state:Tt.LOADING,metadata:h.metadata??{},addedAt:Date.now(),errorMessage:null};a.set(r,{primitive:null,objectUrl:null,entry:v}),x();try{const X=ta(l,{coordinates:v.coordinates,heading:v.heading,pitch:v.pitch,roll:v.roll,scale:v.scale});if(!X)throw new Error("坐标无效，无法计算模型矩阵");const B={url:h.url,modelMatrix:X,minimumPixelSize:h.minimumPixelSize??64,maximumScale:2e4,scene:o.scene};let Y;if(typeof l.Model.fromGltfAsync=="function")Y=await l.Model.fromGltfAsync(B);else if(typeof l.Model.fromGltf=="function")Y=l.Model.fromGltf(B);else throw new Error("当前 Cesium 版本不支持 Model API");o.scene.primitives.add(Y);const te=a.get(r);te.primitive=Y;const ae=()=>{const ne=a.get(r);if(ne&&(ne.entry.state=Tt.READY,x(),h.autoPlayAnimation!==!1))try{Y.activeAnimations.addAll({loop:l.ModelAnimationLoop.REPEAT})}catch{}};return Y.readyEvent?Y.readyEvent.addEventListener(ae):ae(),Y.errorEvent&&Y.errorEvent.addEventListener(ne=>{const J=a.get(r);J&&(J.entry.state=Tt.ERROR,J.entry.errorMessage=(ne==null?void 0:ne.message)??"模型加载异常",x())}),x(),{...v}}catch(X){const B=a.get(r);return B!=null&&B.objectUrl&&URL.revokeObjectURL(B.objectUrl),a.delete(r),x(),(O=n==null?void 0:n.error)==null||O.call(n,`模型加载失败: ${X.message}`),null}}async function M(h,o={}){const l=URL.createObjectURL(h),r=await k({...o,url:l,name:o.name??h.name.replace(/\.(glb|gltf)$/i,"")});if(r){const f=a.get(r.id);f&&(f.objectUrl=l)}else URL.revokeObjectURL(l);return r}function C(h){var r;const o=e==null?void 0:e(),l=a.get(h);if(l){if(l.primitive&&o)try{o.scene.primitives.remove(l.primitive)}catch{}if((r=l.primitive)!=null&&r.destroy)try{l.primitive.destroy()}catch{}l.objectUrl&&URL.revokeObjectURL(l.objectUrl),a.delete(h),x()}}function D(h,o={}){const l=t==null?void 0:t(),r=a.get(h);if(!r||!l)return!1;const f=r.entry;if(o.coordinates&&(f.coordinates=an(o.coordinates)),o.heading!==void 0&&(f.heading=o.heading),o.pitch!==void 0&&(f.pitch=o.pitch),o.roll!==void 0&&(f.roll=o.roll),o.scale!==void 0&&(f.scale=o.scale),o.name&&(f.name=o.name),o.metadata&&(f.metadata={...f.metadata,...o.metadata}),r.primitive){const v=ta(l,{coordinates:f.coordinates,heading:f.heading,pitch:f.pitch,roll:f.roll,scale:f.scale});v&&(r.primitive.modelMatrix=v)}return x(),!0}function g(h,o={}){const l=e==null?void 0:e(),r=t==null?void 0:t(),f=a.get(h);if(!f||!l||!r)return;const v=f.entry.coordinates;if(!v)return;const{range:A=200,heading:R=0,pitch:O=-30,duration:X=2}=o,B=v.height+A*.3;l.camera.flyTo({destination:r.Cartesian3.fromDegrees(v.lng,v.lat,B),orientation:{heading:r.Math.toRadians(R),pitch:r.Math.toRadians(O),roll:0},duration:X})}function P(h,o,l={}){const r=a.get(h),f=t==null?void 0:t();if(!(!(r!=null&&r.primitive)||!f))try{const v=r.primitive,A=l.loop!==!1?f.ModelAnimationLoop.REPEAT:f.ModelAnimationLoop.NONE;if(o){let R=!1;const O=v.activeAnimations;for(let X=0;X<O.length;X++)if(O.get(X).name===o){O.get(X).playing=!0,R=!0;break}R||v.activeAnimations.add({name:o,loop:A,speedup:l.speedup??1})}else v.activeAnimations.addAll({loop:A,speedup:l.speedup??1})}catch{}}function L(h){const o=a.get(h);if(o!=null&&o.primitive)try{const l=o.primitive.activeAnimations;for(let r=0;r<l.length;r++)l.get(r).playing=!1}catch{}}function i(h){const o=a.get(h);return o?{...o.entry}:null}function d(h){var o;return((o=a.get(h))==null?void 0:o.primitive)??null}function u(){const h=Array.from(a.keys());for(const o of h)C(o);a.clear(),x()}return{models:m,loadingCount:c,readyCount:T,modelCount:_,addModel:k,addModelFromFile:M,removeModel:C,updateModel:D,flyToModel:g,playAnimation:P,stopAnimation:L,getModel:i,getModelPrimitive:d,dispose:u}}const en=Object.freeze({linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2});class na{constructor(t={}){this.stiffness=t.stiffness??120,this.damping=t.damping??20,this.mass=t.mass??1,this.threshold=t.threshold??.01,this._current=0,this._target=0,this._velocity=0,this._active=!1}get current(){return this._current}get target(){return this._target}get active(){return this._active}setTarget(t){this._target=t,this._active=!0}setCurrent(t){this._current=t,this._velocity=0}update(t){if(!this._active)return this._current;const n=this._current-this._target,a=-this.stiffness*n,p=-this.damping*this._velocity,m=(a+p)/this.mass;return this._velocity+=m*t,this._current+=this._velocity*t,Math.abs(n)<this.threshold&&Math.abs(this._velocity)<this.threshold&&(this._current=this._target,this._velocity=0,this._active=!1),this._current}reset(){this._current=0,this._target=0,this._velocity=0,this._active=!1}}const mt=Object.freeze({IDLE:"idle",FLYING:"flying",CANCELLED:"cancelled"});function tl({getViewer:e,getCesium:t}){let n=0,a=null,p=null;const m=Z(mt.IDLE),c=_e(()=>a);function T(){p!==null&&(cancelAnimationFrame(p),p=null),a=null,m.value=mt.CANCELLED}function _(i){const d=e==null?void 0:e(),u=t==null?void 0:t();if(!d||!u)return null;i.cancelPrevious!==!1&&T();const h=P(u,i.destination);if(!h)return null;const o=d.camera,l=o.heading,r=o.pitch,f=o.roll,v=o.positionWC.clone(),A=i.orientation??{},R=u.Math.toRadians(A.heading??u.Math.toDegrees(l)),O=u.Math.toRadians(A.pitch??u.Math.toDegrees(r)),X=u.Math.toRadians(A.roll??u.Math.toDegrees(f));let B=h.clone();if(i.maximumHeight!==void 0){const we=u.Cartographic.fromCartesian(h);we.height>i.maximumHeight&&(B=u.Cartesian3.fromRadians(we.longitude,we.latitude,i.maximumHeight))}const Y=i.easing??"easeInOutCubic",te=en[Y]??en.easeInOutCubic,ae=i.duration??2.5,ne=++n;a=ne,m.value=mt.FLYING;let J=null;function de(we){var me,Pe;if(a!==ne)return;J===null&&(J=we);const Fe=(we-J)/1e3,Te=Math.min(Fe/ae,1),q=te(Te),j=u.Cartesian3.lerp(v,B,q,new u.Cartesian3),W=L(l,R,q),ve=r+(O-r)*q,Ie=f+(X-f)*q;o.setView({destination:j,orientation:{heading:W,pitch:ve,roll:Ie}}),(me=i.onTick)==null||me.call(i,Te,j),Te<1?p=requestAnimationFrame(de):(p=null,a===ne&&(a=null,m.value=mt.IDLE,(Pe=i.onComplete)==null||Pe.call(i)))}return p=requestAnimationFrame(de),ne}function x(i,d,u=1e3,h={}){return _({...h,destination:{longitude:i,latitude:d,height:u}})}function I(i,d,u={}){const h=e==null?void 0:e(),o=t==null?void 0:t();if(!h||!o)return null;const l=o.Cartesian3.fromDegrees(i.longitude,i.latitude,i.height),r=o.Cartesian3.fromDegrees(d.longitude,d.latitude,d.height),f=o.Cartesian3.subtract(r,l,new o.Cartesian3);o.Cartesian3.normalize(f,f);const v=Math.atan2(f.x,f.y),A=Math.asin(f.z);return _({...u,destination:i,orientation:{heading:o.Math.toDegrees(v),pitch:o.Math.toDegrees(A),roll:0}})}function k(i,d={}){const u=e==null?void 0:e(),h=t==null?void 0:t();if(!u||!h)return null;const o=new h.Rectangle.fromDegrees(i.west,i.south,i.east,i.north),l=h.Rectangle.center(o),f=h.Math.toDegrees(o.east-o.west)*.8;return _({...d,destination:{longitude:h.Math.toDegrees(l.longitude),latitude:h.Math.toDegrees(l.latitude),height:Math.max(f*111e3,1e3)},orientation:{heading:0,pitch:-45,roll:0}})}function M(i){const d=e==null?void 0:e(),u=t==null?void 0:t();if(!d||!u)return null;T();const h=new na(i.spring),o=u.Cartographic.fromCartesian(d.camera.positionWC);h.setCurrent(o.height),h.setTarget(i.targetHeight);const l=++n;a=l,m.value=mt.FLYING;let r=null;function f(v){var X;if(a!==l)return;if(r===null){r=v;return}const A=(v-r)/1e3;r=v;const R=h.update(A),O=u.Cartesian3.fromRadians(o.longitude,o.latitude,R);d.camera.setView({destination:O,orientation:{heading:d.camera.heading,pitch:d.camera.pitch,roll:d.camera.roll}}),h.active?p=requestAnimationFrame(f):(p=null,a===l&&(a=null,m.value=mt.IDLE,(X=i.onComplete)==null||X.call(i)))}return p=requestAnimationFrame(f),l}function C(){const i=e==null?void 0:e(),d=t==null?void 0:t();if(!i||!d)return null;const u=d.Cartographic.fromCartesian(i.camera.positionWC);return{longitude:d.Math.toDegrees(u.longitude),latitude:d.Math.toDegrees(u.latitude),height:u.height,heading:d.Math.toDegrees(i.camera.heading),pitch:d.Math.toDegrees(i.camera.pitch),roll:d.Math.toDegrees(i.camera.roll)}}function D(i=6){const d=C();if(!d)return"--";const u=d.longitude>=0?"E":"W",h=d.latitude>=0?"N":"S";return`${Math.abs(d.longitude).toFixed(i)}°${u}, ${Math.abs(d.latitude).toFixed(i)}°${h}, ${d.height.toFixed(1)}m`}function g(){T()}function P(i,d){if(!d)return null;if(d instanceof i.Cartesian3)return d;if(Array.isArray(d)){const[o,l,r=0]=d;return i.Cartesian3.fromDegrees(o,l,r)}const u=d.longitude??d.lng,h=d.latitude??d.lat;return typeof u=="number"&&typeof h=="number"?i.Cartesian3.fromDegrees(u,h,d.height??0):null}function L(i,d,u){let h=d-i;for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;return i+h*u}return{flightState:m,currentFlightId:c,enhancedFlyTo:_,cancelFlight:T,flyToPosition:x,flyToAndLookAt:I,flyToRectangle:k,springToHeight:M,SpringController:na,getCameraState:C,getFormattedPosition:D,cleanup:g,EasingFunctions:en}}function Mt(e,t){return{longitude:e.Math.toDegrees(t.longitude),latitude:e.Math.toDegrees(t.latitude),height:t.height}}function aa(e,t){if(!t)return null;if(t instanceof e.Cartographic)return t;if(Array.isArray(t)){const[p,m,c=0]=t;return e.Cartographic.fromDegrees(p,m,c)}const n=t.longitude??t.lng,a=t.latitude??t.lat;return typeof n=="number"&&typeof a=="number"?e.Cartographic.fromDegrees(n,a,t.height??0):null}class nl{constructor(t,n){this.data=t,this.timestamp=n}isExpired(t){return Date.now()-this.timestamp>t}}function al({getViewer:e,getCesium:t}){const n=new Map,a=300*1e3,p=5,m=Z(!1),c=Z(0);function T(L,i){return`${L.toFixed(p)},${i.toFixed(p)}`}function _(L,i){const d=T(L,i),u=n.get(d);return u&&!u.isExpired(a)?{...u.data}:(u&&n.delete(d),null)}function x(L){const i=T(L.longitude,L.latitude);n.set(i,new nl({...L},Date.now()))}function I(){n.clear()}function k(L){const i=e==null?void 0:e(),d=t==null?void 0:t();if(!i||!d||!L)return null;const{x:u,y:h}=L,o=i.camera.getPickRay(new d.Cartesian2(u,h));if(!o)return null;const l=i.scene.pickPositionSupported?i.scene.pickPosition(new d.Cartesian2(u,h)):i.scene.globe.pick(o,i.scene);if(!l){const f=i.scene.globe.ellipsoid,v=i.scene.camera.pickEllipsoid(new d.Cartesian2(u,h),f);if(!v)return null;const A=d.Cartographic.fromCartesian(v);return Mt(d,A)}const r=d.Cartographic.fromCartesian(l);return Mt(d,r)}async function M(L,i={}){const{maxRetries:d=3,retryDelay:u=200}=i;for(let h=0;h<d;h++){const o=k(L);if(o)return o;h<d-1&&await new Promise(l=>setTimeout(l,u))}return null}function C(L,i={}){const d=e==null?void 0:e(),u=t==null?void 0:t();if(!d||!u)return null;const h=aa(u,L);if(!h)return null;const o=u.Math.toDegrees(h.longitude),l=u.Math.toDegrees(h.latitude);if(i.useCache!==!1){const r=_(o,l);if(r)return r}try{const r=i.terrainDetailLevel??0,f=[h],v=r===0?u.sampleTerrain(d.terrainProvider,0,f):u.sampleTerrainMostDetailed(d.terrainProvider,f);if(v&&v.length>0){const A=Mt(u,v[0]);return x(A),A}}catch{}return null}async function D(L,i={}){const d=e==null?void 0:e(),u=t==null?void 0:t();if(!d||!u||!(L!=null&&L.length))return[];m.value=!0,c.value=0;try{const h=[],o=[],l=[];for(let r=0;r<L.length;r++){const f=aa(u,L[r]);if(!f){h.push(null);continue}const v=u.Math.toDegrees(f.longitude),A=u.Math.toDegrees(f.latitude);if(i.useCache!==!1&&!i.skipCached){const R=_(v,A);if(R){h.push(R);continue}}h.push(null),o.push(f),l.push(r)}if(o.length===0)return c.value=1,h;try{const r=u.sampleTerrainMostDetailed(d.terrainProvider,o),f=r instanceof Promise?await r:r;for(let v=0;v<f.length;v++){const A=Mt(u,f[v]);h[l[v]]=A,x(A),i.onProgress&&i.onProgress(v+1,o.length),c.value=(v+1)/o.length}}catch{for(let f=0;f<o.length;f++){try{const v=o[f],A=u.sampleTerrain(d.terrainProvider,17,[v]),R=A instanceof Promise?await A:A;if((R==null?void 0:R.length)>0){const O=Mt(u,R[0]);h[l[f]]=O,x(O)}}catch{}i.onProgress&&i.onProgress(f+1,o.length),c.value=(f+1)/o.length}}return h}finally{m.value=!1}}async function g(L,i={}){if(!(t==null?void 0:t()))return null;const{west:u,south:h,east:o,north:l}=L,r=Math.max(2,Math.ceil(Math.sqrt(i.sampleCount??9))),f=[];for(let B=0;B<r;B++)for(let Y=0;Y<r;Y++){const te=u+(o-u)*(Y/(r-1)),ae=h+(l-h)*(B/(r-1));f.push([te,ae])}const A=(await D(f,{useCache:!0})).filter(B=>B!==null).map(B=>B.height);if(A.length===0)return null;const R=Math.min(...A),O=Math.max(...A),X=A.reduce((B,Y)=>B+Y,0)/A.length;return{min:R,max:O,avg:X}}function P(){I(),m.value=!1,c.value=0}return{isSampling:m,samplingProgress:c,pickCartographic:k,pickCartographicWithRetry:M,sampleHeight:C,sampleHeightMostDetailed:D,queryHeightRange:g,clearCache:I,cleanup:P}}const il={url:"./glb/player/UAL1_Standard.glb",scale:.01,idleAnim:"Idle_Loop",walkAnim:"Walk_Loop",runAnim:"Sprint_Loop",jumpAnim:["Jump_Start","Jump_Loop","Jump_Land"],flyAnim:"fly",flyIdleAnim:"flyIdle",flyHoverForwardAnim:"flyHoverForward",flyHoverBackAnim:"flyHoverBack",flyHoverLeftAnim:"flyHoverLeft",flyHoverRightAnim:"flyHoverRight",flyHoverUpAnim:"flyHoverUp",flyHoverDownAnim:"flyHoverDown",rotateY:-Math.PI/2,facingOffset:Math.PI/2},rl={gravity:-2400,jumpHeight:600,speed:300,flySpeed:5500,acceleration:30,deceleration:30},ia={minCamDistance:100,maxCamDistance:440,camLookAtHeightRatio:.8,thirdMouseMode:1,enableZoom:!0,enableOverShoulderView:!1,isFirstPerson:!1,enableSpringCamera:!0,springCameraTime:.05},ol={forward:["KeyW","ArrowUp"],backward:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],toggleView:["KeyV"],toggleFly:["KeyF"]},sl=5;function ll(e){var n;return!(!e||((n=e.constructor)==null?void 0:n.name)==="EllipsoidTerrainProvider")}function cl({getViewer:e,getCesium:t,message:n}){const a=Z(!1),p=Z(!1),m=Z(!1);let c=null,T=null;async function _(C={}){var P,L,i,d;const D=e(),g=t();if(!D||!g){(P=n==null?void 0:n.error)==null||P.call(n,"Cesium 未初始化");return}if(!a.value)try{(L=n==null?void 0:n.info)==null||L.call(n,"正在加载漫游控制器...");const{playerController:u}=await Ht(async()=>{const{playerController:B}=await import("./index-L_DQc7zX.js");return{playerController:B}},__vite__mapDeps([16,2,3,5,8,9,10,11,12,13,7,14,15,17,18,19,20]),import.meta.url);let h=C.initPos,o=0,l=!0;const r=D.camera,f=g.Cartographic.fromCartesian(r.position);if(!h){let B=500;const Y=D.terrainProvider;if(ll(Y)){let te=null;try{te=await g.sampleTerrainMostDetailed(Y,[f])}catch{try{te=await g.sampleTerrain(Y,17,[f])}catch{}}te&&te[0]&&g.defined(te[0].height)?(o=te[0].height,B=o+500,l=!1):(B=f.height>0?f.height+500:500,l=!1)}h=g.Cartesian3.fromRadians(f.longitude,f.latitude,B)}let v=C.staticCollider;!v&&!l&&(v=[{type:"terrain",rectangle:[f.longitude-.006,f.latitude-.006,f.longitude+.006,f.latitude+.006],resolution:64}]),l&&(ia.isFirstPerson=!1);const A={...il,...rl,...C.modelConfig},R=new u;await R.init({viewer:D,initPos:h,playerModelConfig:A,staticCollider:v,...ia,mouseSensitivity:sl,keyMap:ol,isShowMobileControls:!1}),l&&(R.isFlying=!0),c=R;const O=5;let X=performance.now();T=D.scene.preUpdate.addEventListener(()=>{const B=performance.now(),Y=(B-X)/1e3;X=B,R.update(Y);const te=R.getPosition(),ae=g.Cartographic.fromCartesian(te),ne=l?O:o+O;ae.height<ne&&R.reset(g.Cartesian3.fromRadians(ae.longitude,ae.latitude,ne))}),R.onViewChange=B=>{p.value=B},R.onGroundChange=()=>{m.value=R.getIsFlying()},a.value=!0,p.value=R.getIsFirstPerson(),m.value=R.getIsFlying(),(i=n==null?void 0:n.success)==null||i.call(n,"漫游模式已启动（WASD 移动 / V 切视角 / F 飞行）")}catch(u){(d=n==null?void 0:n.error)==null||d.call(n,`漫游模式启动失败: ${u.message||"未知错误"}`),x()}}function x(){if(T&&(T(),T=null),c){try{c.destroy()}catch{}c=null}const C=e();if(C){const D=C.scene.screenSpaceCameraController;D.enableRotate=!0,D.enableTranslate=!0,D.enableZoom=!0,D.enableTilt=!0,D.enableLook=!0}a.value=!1,p.value=!1,m.value=!1}function I(C){var D;a.value?(x(),(D=n==null?void 0:n.info)==null||D.call(n,"漫游模式已停止")):_(C)}function k(){c&&(c.changeView(),p.value=c.getIsFirstPerson())}function M(){return c}return{isActive:a,isFirstPerson:p,isFlying:m,startPlayer:_,stopPlayer:x,togglePlayer:I,changeView:k,getPlayerInstance:M}}const ul={key:0,class:"player-guide"},dl={class:"guide-pill"},hl={class:"pill-label"},fl={key:0,class:"pill-fly"},ml={__name:"PlayerGuidePanel",props:{visible:{type:Boolean,default:!1},isFirstPerson:{type:Boolean,default:!1},isFlying:{type:Boolean,default:!1}},emits:["close"],setup(e){return(t,n)=>(ee(),Oe(ya,{name:"guide-slide"},{default:va(()=>[e.visible?(ee(),se("div",ul,[E("div",dl,[E("span",{class:Ce(["pill-dot",{fp:e.isFirstPerson}])},null,2),E("span",hl,he(e.isFirstPerson?"第一人称":"第三人称"),1),e.isFlying?(ee(),se("span",fl,"✈")):fe("",!0),E("button",{class:"pill-close",title:"关闭提示",onClick:n[0]||(n[0]=a=>t.$emit("close"))},"✕")]),n[1]||(n[1]=E("div",{class:"guide-keys"},[E("span",{class:"key-group"},[E("kbd",null,"W"),E("kbd",null,"A"),E("kbd",null,"S"),E("kbd",null,"D"),E("em",null,"移动")]),E("span",{class:"key-sep"}),E("span",{class:"key-group"},[E("kbd",null,"⇧"),E("em",null,"跑"),E("kbd",null,"␣"),E("em",null,"跳")]),E("span",{class:"key-sep"}),E("span",{class:"key-group"},[E("kbd",null,"V"),E("em",null,"视角"),E("kbd",null,"F"),E("em",null,"飞行")]),E("span",{class:"key-sep"}),E("span",{class:"key-group"},[E("span",{class:"key-mouse"},"🖱"),E("em",null,"旋转")])],-1))])):fe("",!0)]),_:1}))}},pl=st(ml,[["__scopeId","data-v-6190d367"]]),gl={key:4,class:"drag-overlay"},vl={class:"map-controls-group"},yl={class:"mouse-position-content"},bl={__name:"CesiumContainer",emits:["view-sync"],setup(e,{expose:t,emit:n}){let a=null,p=null,m=!1;const c=on(),T=n,_=Z(!0),x=Z(!1),I=Z(null),k=Z(wa()),M=()=>p,C=()=>a||window.Cesium,D=()=>k.value.tiandituTk,g=()=>k.value.cesiumIonToken,P=ms({getViewer:M,getCesium:C,message:c,backendBaseUrl:_a,tiandituToken:D,cesiumIonToken:g}),{activeBasemap:L,activeTerrain:i,customXyzBasemapUrl:d,basemapOptions:u,terrainOptions:h,overlayOptions:o,createImageryProviderViewModels:l,createTerrainProviderViewModels:r,getSelectedImageryProviderViewModel:f,getSelectedTerrainProviderViewModel:v,bindLayerPickerStateSync:A,addBaseImageryLayers:R,initCustomTerrain:O,handleOverlayToggle:X,handleCustomBasemapSubmit:B,cleanupLayers:Y}=P;xe(L,(s,w)=>{!s||s===w||Te(s)});const{coordinateDisplay:te,setupInteractions:ae,cleanupInteractions:ne}=rs({getViewer:M,getCesium:C}),{installCreditHider:J,cleanupCreditHider:de}=is({getViewer:M}),{restoreCameraFromUrl:we,restoreBasemapFromUrl:Fe,syncBasemapToUrl:Te,bindCameraViewSync:q,cleanupCameraViewSync:j}=Ns({getViewer:M,getCesium:C,onCameraViewSync:s=>T("view-sync",s),onBasemapRestore:s=>{s&&L.value!==s&&(L.value=s)}}),W=Ts({getViewer:M,getCesium:C,message:c}),{flyToHome:ve}=W,Ie=Js({getViewer:M,getCesium:C,message:c}),me=Ds({getViewer:M,getCesium:C,message:c}),Pe=el({getViewer:M,getCesium:C,message:c}),Ue=tl({getViewer:M,getCesium:C}),Ge=al({getViewer:M,getCesium:C}),Le=cl({getViewer:M,getCesium:C,message:c});xe(()=>Le.isActive.value,s=>{s&&(_.value=!0)}),t({getViewer:M,getCesium:C,modelManager:Pe,cameraEnhanced:Ue,heightSampler:Ge,playerController:Le});const $e=_e(()=>me.loadedDataSources.value),Re=_e(()=>me.pendingGltfFile.value),ke=Z(!1);function Ae(s){ke.value=!0,s.dataTransfer&&(s.dataTransfer.dropEffect="copy")}function qe(s){const w=s==null?void 0:s.relatedTarget,z=s==null?void 0:s.currentTarget;w instanceof Node&&z instanceof Node&&z.contains(w)||(ke.value=!1)}async function Ze(s){var z;if(ke.value=!1,!x.value)return;const w=(z=s.dataTransfer)==null?void 0:z.files;if(!(!w||w.length===0))for(const H of w)try{await me.loadDataFile(H)}catch{}}const{toolPanelOpen:Be,advancedEffectControls:je,fluidParams:Ee,baseAtmosphereParams:ze,shallowWaterVisible:He,shallowWaterParams:V,toolModules:y,handleToolAction:F,handleToolControlChange:N,handleFluidStateChange:$,cleanupTools:Q}=Cs({fluidPanelRef:I,sceneActions:W,wind:Ie,modelManager:Pe,cameraEnhanced:Ue,heightSampler:Ge,playerController:Le});async function S(){m=!1,sa("正在初始化 3D 场景...");try{let s=0,w=1;for(;s<w;)try{if(k.value=await Sa({silent:!1,force:s>0}),w=Math.max(w,Array.isArray(k.value.tiandituTokens)?k.value.tiandituTokens.length:1,Array.isArray(k.value.cesiumIonTokens)?k.value.cesiumIonTokens.length:1,1),a=await Xo({ionToken:g()}),m||!a||!document.getElementById("cesiumContainer"))return;U(),ae();const z=R(),H=await O();if(m){b();return}if(x.value=!0,q({initialSync:!1,getActivePresetId:()=>L.value}),Fe(),z&&H){c.success("天地图基础影像与地形加载成功。");return}const le=z?{switched:!1}:$t("tianditu_tk"),ce=H?{switched:!1}:$t("cesium_ion_token");if(!(le.switched||ce.switched)){c.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}k.value=ce.switched?ce.tokens:le.tokens,b(),s+=1,c.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(z){const H=$t("cesium_ion_token");if(!H.switched)throw z;k.value=H.tokens,b(),s+=1,c.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}c.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(s){c.error("Cesium 运行时加载失败",s),c.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{la()}}function b(){if(x.value=!1,j(),ne(),Y(),de(),!!p){try{p.destroy()}catch{}p=null}}function U(){var H;const s=typeof a.Map=="function"?a.Map:a.Viewer,w=l(),z=r();p=new s("cesiumContainer",{baseLayerPicker:!0,geocoder:((H=a.IonGeocodeProviderType)==null?void 0:H.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:w,selectedImageryProviderViewModel:f(w),terrainProviderViewModels:z,selectedTerrainProviderViewModel:v(z),shouldAnimate:!0}),p.scene.debugShowFramesPerSecond=!0,p.scene.globe.terrainExaggeration=1,p.scene.globe.terrainExaggerationRelativeHeight=0,Qo(p,a),wi(p),J(),A(),we({duration:0})||ve(0)}rn(()=>{S()});async function G({files:s}){for(const w of s)try{await me.loadDataFile(w)}catch{}}function K({id:s}){me.removeDataSource(s)}function oe(){me.clearAllDataSources()}async function ie(s){try{await me.loadGltfWithUserCoords(s)}catch{}}function ye(){me.cancelPendingGltf()}Wt(()=>{if(m=!0,x.value=!1,j(),ne(),Q(),Y(),Pe.dispose(),Ue.cleanup(),Ge.cleanup(),de(),me.clearAllDataSources(),p){try{p.destroy()}catch{}p=null}}),xe(x,s=>{s&&re(ze.value)});function re(s){var H;if(!p||!a)return;const w=p.scene,z=w.globe;z&&(z.enableLighting=s.enableLighting,z.showGroundAtmosphere=s.showGroundAtmosphere,"dynamicAtmosphereLighting"in z&&(z.dynamicAtmosphereLighting=s.dynamicAtmosphereLighting),"dynamicAtmosphereLightingFromSun"in z&&(z.dynamicAtmosphereLightingFromSun=s.dynamicAtmosphereLightingFromSun),"atmosphereLightIntensity"in z&&(z.atmosphereLightIntensity=s.atmosphereLightIntensity),"atmosphereHueShift"in z&&(z.atmosphereHueShift=s.atmosphereHueShift),"atmosphereSaturationShift"in z&&(z.atmosphereSaturationShift=s.atmosphereSaturationShift),"atmosphereBrightnessShift"in z&&(z.atmosphereBrightnessShift=s.atmosphereBrightnessShift),"lightingFadeInDistance"in z&&(z.lightingFadeInDistance=s.lightingFadeInDistance),"lightingFadeOutDistance"in z&&(z.lightingFadeOutDistance=s.lightingFadeOutDistance),"nightFadeInDistance"in z&&(z.nightFadeInDistance=s.nightFadeInDistance),"nightFadeOutDistance"in z&&(z.nightFadeOutDistance=s.nightFadeOutDistance)),w.fog&&(w.fog.enabled=s.fogEnabled,"density"in w.fog&&(w.fog.density=s.fogDensity),"minimumBrightness"in w.fog&&(w.fog.minimumBrightness=s.fogMinimumBrightness)),w.sun&&(w.sun.show=s.sunShow),w.moon&&(w.moon.show=s.moonShow),w.skyBox&&(w.skyBox.show=s.skyBoxShow),(H=w.requestRender)==null||H.call(w)}return xe(ze,s=>{re(s)},{deep:!0}),(s,w)=>{var z;return ee(),se(nt,null,[E("div",{id:"cesiumContainer",class:"cesium-container",onDragover:gt(Ae,["prevent"]),onDragleave:gt(qe,["prevent"]),onDrop:gt(Ze,["prevent"])},null,32),x.value?(ee(),Oe(dt(Ni),{key:0,headless:"","get-viewer":M,"get-cesium":C,controls:ue(je)},null,8,["controls"])):fe("",!0),x.value?(ee(),Oe(dt(Ro),{key:1,ref_key:"fluidPanelRef",ref:I,headless:"","get-viewer":M,"get-cesium":C,params:ue(Ee),onStateChange:ue($)},null,40,["params","onStateChange"])):fe("",!0),x.value?(ee(),Oe($o,ba({key:2,visible:ue(He)},ue(V)),null,16,["visible"])):fe("",!0),x.value?(ee(),Oe(io,{key:3,open:ue(Be),"onUpdate:open":w[0]||(w[0]=H=>Ut(Be)?Be.value=H:null),"active-basemap":ue(L),"onUpdate:activeBasemap":w[1]||(w[1]=H=>Ut(L)?L.value=H:null),"active-terrain":ue(i),"onUpdate:activeTerrain":w[2]||(w[2]=H=>Ut(i)?i.value=H:null),"basemap-options":ue(u),"terrain-options":ue(h),"overlay-options":ue(o),"custom-basemap-url":ue(d),modules:ue(y),"loaded-data-sources":$e.value,onModuleAction:ue(F),onControlChange:ue(N),onOverlayToggle:ue(X),onCustomBasemapSubmit:ue(B),onDataImport:G,onDataRemove:K,onDataClearAll:oe},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):fe("",!0),Se(pl,{visible:ue(Le).isActive.value&&_.value,"is-first-person":ue(Le).isFirstPerson.value,"is-flying":ue(Le).isFlying.value,onClose:w[3]||(w[3]=H=>_.value=!1)},null,8,["visible","is-first-person","is-flying"]),Se(xo,{visible:!!Re.value,"file-name":((z=Re.value)==null?void 0:z.name)||"",onConfirm:ie,onCancel:ye},null,8,["visible","file-name"]),ke.value&&x.value?(ee(),se("div",gl,[Se(ue(tn),{size:48,"stroke-width":"1.5"}),w[5]||(w[5]=E("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),w[6]||(w[6]=E("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):fe("",!0),E("div",vl,[E("div",yl,he(ue(te)),1),w[8]||(w[8]=E("div",{class:"divider"},null,-1)),E("button",{class:"home-btn",title:"回到初始位置",onClick:w[4]||(w[4]=(...H)=>ue(ve)&&ue(ve)(...H))},[...w[7]||(w[7]=[E("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[E("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},xl=st(bl,[["__scopeId","data-v-71aef44f"]]),Cl=Object.freeze(Object.defineProperty({__proto__:null,default:xl},Symbol.toStringTag,{value:"Module"}));export{Cl as C,ll as h};
