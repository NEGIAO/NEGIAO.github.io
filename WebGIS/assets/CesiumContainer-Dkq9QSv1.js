const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-DMg_WTd2.js","./vendor-echarts-all-SqY2e8y7.js","./vendor-libs-DvlOPPtR.js","./vendor-vue-DrZ_GSNy.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-lL3UcSdw.js","./vendor-proj4-Dr70jk1D.js","./index-qzVgHtEy.js","./vendor-ol-all-DpQ1-oRD.js","./vendor-geotiff-DzxsKQ4i.js","./vendor-lerc-9DOY5ikF.js","./vendor-jszip-BOwK5y_4.js","./vendor-ol-all-BtPuoxOl.css","./vendor-axios-Bdz_Fv8M.js","./index-DduL8x4O.css","./index-g_2HqqF6.js","./HomeView-DIsjV5jg.js","./HomeView-wSLbKH0f.css","./vectorUtils-Ds50OJUZ.js","./textDecoder-CXjJWEkX.js"])))=>i.map(i=>d[i]);
var da=Object.defineProperty;var ha=(e,t,n)=>t in e?da(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var yn=(e,t,n)=>ha(e,typeof t!="symbol"?t+"":t,n);import{w as we,v as ia,d as ee,c as se,P as ra,r as J,C as rn,o as Wt,f as E,t as me,a as Te,G as Ye,X as ut,g as pe,q as Me,u as ue,F as nt,e as rt,n as Ae,x as Ne,S as dt,I as It,i as gt,H as zt,z as fa,B as ma,A as pa,b as ga,y as va,a5 as ya,a4 as Ut}from"./vendor-vue-DrZ_GSNy.js";import{_ as st,h as on,R as oa,Q as sa,e as Gt,f as bn,T as ba,v as xa,y as $t,P as Sa,x as _a}from"./index-qzVgHtEy.js";import{_ as Nt}from"./vendor-runtime-Dp1pzeXC.js";import{af as wa,ag as qt,ah as jt,ai as Ta,X as xn,e as Xt,aj as tn,ak as Ft,ac as Sn,al as Ma,am as la,an as _n,H as wn,T as Vt,s as Tn,a2 as Da,ao as Ot,ap as La,aq as Ca,ar as Fa,q as Pa,as as Aa,o as Ea,at as Pt,G as Mn,au as sn,av as ln,aw as ca,ax as Dn,ay as Ra,az as ka,aA as Ln,aB as Kt,aC as Ia,aD as za,aE as Oa,aF as At,aG as Qe,aH as Ba,aI as Cn,aJ as xt,aK as Na,aL as St,aM as Ha,aN as Wa,aO as Ua,aP as Ga,aQ as $a,aR as qa,aS as Fn,aT as Pn,aU as ja,aV as Xa,aW as Va,aX as Ka,aY as Ya,aZ as Za,a_ as Ja,a$ as Qa,b0 as ei,b1 as An,b2 as ti,b3 as ni,b4 as ai,b5 as ii}from"./vendor-libs-DvlOPPtR.js";import{F as cn,G as En,v as Ct,B as ri,H as oi,I as si,J as li,K as ci,L as ui,M as Rn,N as di,O as hi,P as fi}from"./HomeView-DIsjV5jg.js";import{d as mi}from"./vectorUtils-Ds50OJUZ.js";const Ht=new Map;function pi(e){const t=Ht.get(e);t&&t.abort();const n=new AbortController;return Ht.set(e,n),n}function gi(){Ht.forEach(e=>{e.abort()}),Ht.clear()}function vi(e){const t=e.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!t)return/\{s\}/i.test(e)?{url:e,subdomains:["a","b","c"]}:{url:e,subdomains:[]};const n=t[1].charCodeAt(0),a=t[2].charCodeAt(0),p=[];for(let m=n;m<=a;m++)p.push(String.fromCharCode(m));return{url:e.replace(t[0],"{s}"),subdomains:p}}function yi(e){return e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function bi(e,t){let n=e;return t.tiandituTk&&(n=n.replace(/\{tiandituTk\}/g,t.tiandituTk)),t.customUrl&&(n=n.replace(/\{customUrl\}/g,t.customUrl)),n}function xi(e,t,n){if(!e||!t)return null;const p=pi(t.id).signal,{serviceType:m}=t;let c=bi(t.url,n);if(m==="custom"){if(!n.customUrl)return null;c=n.customUrl}if(t.nonStandardAdapter||m==="vector-tile")return null;const{subdomains:w}=vi(c),S=yi(c),x=t.subdomains||w,I=t.maxZoom||18;try{let k=null;if(p.aborted)return null;switch(m){case"wms":{if(typeof e.WebMapServiceImageryProvider!="function")return null;const M=t.wms;if(!(M!=null&&M.layers))return null;k=new e.WebMapServiceImageryProvider({url:S||t.url,layers:M.layers,parameters:{version:M.version||"1.1.1",srs:M.srs||"EPSG:3857",format:M.format||"image/png",styles:M.styles||"",transparent:M.transparent!==!1}});break}case"wmts":{if(typeof e.WebMapTileServiceImageryProvider!="function")return null;const M=t.wmts;if(!(M!=null&&M.layer)||!M.matrixSet)return null;k=new e.WebMapTileServiceImageryProvider({url:S||t.url,layer:M.layer,style:M.style||"default",format:M.format||"image/png",tileMatrixSetID:M.matrixSet,maximumLevel:I});break}case"osm":{typeof e.OpenStreetMapImageryProvider=="function"?k=new e.OpenStreetMapImageryProvider({maximumLevel:I}):k=new e.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:I});break}default:{if(!S||!(S.includes("{z}")||S.includes("{x}")||S.includes("{y}")||S.includes("{reverseY}")))return null;k=new e.UrlTemplateImageryProvider({url:S,subdomains:x.length>0?x:void 0,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:I,enablePickFeatures:!1});break}}if(p.aborted){if(k&&typeof k.destroy=="function")try{k.destroy()}catch{}return null}return k&&(k._descriptorId=t.id),k}catch{return null}}function Si(e,t,n){if(!e||!Array.isArray(t))return[];const a=[];for(const p of t){const m=cn(p);if(!m)continue;const c=xi(e,m,n);c&&a.push(c)}return a}function _i(e){var a;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(a=t.requestRender)==null||a.call(t))}function wi(e,t){var m;const n=e==null?void 0:e.scene,a=n==null?void 0:n.globe;if(!n||!a)return;Di(n,t),Li(n),a.enableLighting=!0,a.showGroundAtmosphere=!0,ve(a,"dynamicAtmosphereLighting",!0),ve(a,"dynamicAtmosphereLightingFromSun",!0),ve(a,"atmosphereLightIntensity",5.5),ve(a,"atmosphereHueShift",-.015),ve(a,"atmosphereSaturationShift",.08),ve(a,"atmosphereBrightnessShift",.02),ve(a,"lightingFadeInDistance",15e6),ve(a,"lightingFadeOutDistance",22e6),ve(a,"nightFadeInDistance",9e6),ve(a,"nightFadeOutDistance",16e6),Et(t,a,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Et(t,a,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ve(a,"atmosphereRayleighScaleHeight",1e4),ve(a,"atmosphereMieScaleHeight",3200),ve(a,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=Fi(t));const p=n.skyAtmosphere;p&&(p.show=!0,ve(p,"perFragmentAtmosphere",!0),ve(p,"dynamicAtmosphereLighting",!0),ve(p,"dynamicAtmosphereLightingFromSun",!0),ve(p,"hueShift",-.025),ve(p,"saturationShift",.08),ve(p,"brightnessShift",.03),ve(p,"atmosphereLightIntensity",12),Et(t,p,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Et(t,p,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ve(p,"atmosphereRayleighScaleHeight",1e4),ve(p,"atmosphereMieScaleHeight",3200),ve(p,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),Ci(n),(m=n.requestRender)==null||m.call(n)}function Ti(e){var p;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const a=(p=t.postProcessStages)==null?void 0:p.bloom;return{scene:et(t,["highDynamicRange","sunBloom","light"]),fog:et(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:et(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:et(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:et(t.sun,["show"]),moon:et(t.moon,["show"]),skyBox:et(t.skyBox,["show"]),bloom:{props:et(a,["enabled"]),uniforms:et(a==null?void 0:a.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Mi(e,t,n){var c,w,S,x;if(!n)return;const a=e==null?void 0:e.scene,p=a==null?void 0:a.globe;if(!a||!p)return;tt(a,n.scene,t),tt(a.fog,n.fog,t),tt(p,n.globe,t),tt(a.sun,n.sun,t),tt(a.moon,n.moon,t),tt(a.skyBox,n.skyBox,t),a.skyAtmosphere&&(tt(a.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(a.skyAtmosphere.show=!1));const m=(c=a.postProcessStages)==null?void 0:c.bloom;tt(m,(w=n.bloom)==null?void 0:w.props,t),tt(m==null?void 0:m.uniforms,(S=n.bloom)==null?void 0:S.uniforms,t),(x=a.requestRender)==null||x.call(a)}function Di(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}ve(e.light,"intensity",2.35)}function Li(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,ve(t,"density",12e-5),ve(t,"minimumBrightness",.035),ve(t,"screenSpaceErrorFactor",2),ve(t,"visualDensityScalar",.16))}function Ci(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(ve(t.uniforms,"contrast",128),ve(t.uniforms,"brightness",-.18),ve(t.uniforms,"delta",1),ve(t.uniforms,"sigma",2.5),ve(t.uniforms,"stepSize",4.2)))}function Fi(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function ve(e,t,n){e&&t in e&&(e[t]=n)}function Et(e,t,n,a,p,m){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(a,p,m))}function et(e,t){return e?t.reduce((n,a)=>(a in e&&(n[a]=Pi(e[a])),n),{}):{}}function tt(e,t={},n){!e||!t||Object.entries(t).forEach(([a,p])=>{a in e&&(e[a]=Ai(p,n))})}function Pi(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Ai(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Ei={__name:"LilGuiControls",props:{title:{type:String,default:"Parameters"},controls:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const n=e,a=t,p=J(null),m={},c=new Map;let w=null,S="",x=!1;we(()=>[n.title,n.controls],()=>{I()},{deep:!0,flush:"post",immediate:!0}),ia(()=>{l()});function I(){typeof window>"u"||x||(x=!0,ra(()=>{x=!1,k()}))}function k(){const r=p.value;if(!r)return;const f=P(n.controls);(!w||f!==S)&&(l(),M(r,f)),D()}function M(r,f){w=new wa({container:r,autoPlace:!1,title:n.title||"Parameters",width:Math.max(260,Math.floor(r.clientWidth||320))}),w.domElement.classList.add("cesium-lil-gui"),r.replaceChildren(w.domElement),S=f;for(const b of n.controls||[]){const A=C(b);A&&c.set(b.id,A)}}function C(r){if(r.type==="info")return null;m[r.id]=i(r);let f=null;return r.type==="range"?f=w.add(m,r.id,o(r.min,0),o(r.max,1),o(r.step,.01)):r.type==="color"?f=w.addColor(m,r.id):r.type==="select"?f=w.add(m,r.id,d(r)):f=w.add(m,r.id),f.name(L(r)).onChange(b=>{const A=u(r.id)||r;A.disabled||a("change",{control:A,controlId:A.id,value:b})}),g(f,r),f}function D(){if(w){w.title(n.title||"Parameters");for(const r of n.controls||[]){const f=c.get(r.id);if(!f)continue;const b=i(r);h(m[r.id],b)||(m[r.id]=b,f.updateDisplay()),f.name(L(r)),f.disable(!!r.disabled),g(f,r)}}}function g(r,f){r.domElement.title=f.tooltip||"",r.domElement.dataset.controlId=f.id||"",r.domElement.dataset.controlType=f.type||""}function P(r=[]){return JSON.stringify(r.map(f=>({id:f.id,type:f.type,min:f.min,max:f.max,step:f.step,options:(f.options||[]).map(b=>({label:b.label,value:b.value}))})))}function L(r){return r.displayValue?`${r.label||r.id} (${r.displayValue})`:r.label||r.id}function i(r){var f,b;return r.type==="range"?o(r.value,o(r.min,0)):r.type==="toggle"?!!r.value:r.type==="select"?r.value??((b=(f=r.options)==null?void 0:f[0])==null?void 0:b.value)??"":r.type==="color"?typeof r.value=="string"&&r.value?r.value:"#ffffff":r.value}function d(r){const f={};for(const b of r.options||[])f[b.label||b.value]=b.value;return f}function u(r){return n.controls.find(f=>f.id===r)||null}function h(r,f){return typeof r=="number"||typeof f=="number"?Math.abs(Number(r)-Number(f))<1e-12:r===f}function o(r,f){const b=Number(r);return Number.isFinite(b)?b:f}function l(){if(w)try{w.destroy()}catch{}w=null,S="",c.clear();for(const r of Object.keys(m))delete m[r]}return(r,f)=>(ee(),se("div",{ref_key:"containerRef",ref:p,class:"lil-gui-host"},null,512))}},un=st(Ei,[["__scopeId","data-v-110f953e"]]),Ri={key:0,class:"advanced-effects-root"},ki={class:"effects-panel"},Ii={class:"panel-head"},zi={class:"effect-switches"},Oi=`
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
`,Bi={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=on(),a=J(null),p=J(!1),m=J(!1),c=J(!1),w=J(!1),S=J(!1),x=J(!1),I=J({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,maxDistance:36e4,stepCount:32}),k=Me(()=>[{id:"fog",label:"Height Fog",type:"toggle",value:p.value},{id:"volumetricClouds",label:"Clouds",type:"toggle",value:m.value},{id:"hbao",label:"HBAO",type:"toggle",value:c.value},{id:"tiltShift",label:"Tilt Shift",type:"toggle",value:w.value},{id:"atmosphere",label:"Atmosphere + Bloom",type:"toggle",value:S.value}]);let M=null,C=null,D=null,g=null,P=!1,L=null,i=null,d=null,u=null,h=null,o=null,l=null,r=null,f=!1,b=null,A=null,R=!1,O=0,X=0,B=typeof performance<"u"?performance.now():Date.now();const Z={};function ie(){return d||(d=Nt(()=>import("./cesiumFxRuntime-DMg_WTd2.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(_=>{var U;const y=(U=_==null?void 0:_.getCesiumFxEchartsRuntime)==null?void 0:U.call(_);if(!y)throw new Error("Cinematic FX 图表运行时加载失败");return i=y,y}).catch(_=>{throw d=null,_}),d)}async function te(){return i||ie()}const ne={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},Y={hdr:null,bloom:null,sky:null};rn(()=>{xe()}),Wt(()=>{He()}),we(()=>t.controls,_=>{de(_||{})},{deep:!0,immediate:!0});function de(_){Object.prototype.hasOwnProperty.call(_,"fog")&&(p.value=!!_.fog),Object.prototype.hasOwnProperty.call(_,"volumetricClouds")&&(m.value=!!_.volumetricClouds),_.clouds&&typeof _.clouds=="object"&&(I.value=Se(_.clouds)),Object.prototype.hasOwnProperty.call(_,"hbao")&&(c.value=!!_.hbao),Object.prototype.hasOwnProperty.call(_,"tiltShift")&&(w.value=!!_.tiltShift),Object.prototype.hasOwnProperty.call(_,"atmosphere")&&(S.value=!!_.atmosphere)}function be({controlId:_,value:y}){const U=!!y,K={fog:p,volumetricClouds:m,hbao:c,tiltShift:w,atmosphere:S}[_];K&&(K.value=U)}function Se(_={}){return{quality:["low","medium","high","ultra"].includes(_.quality)?_.quality:"medium",coverage:W(_.coverage,.52,.18,.82),density:W(_.density,9e-5,25e-6,18e-5),shadowStrength:W(_.shadowStrength,.82,0,1),beerShadowStrength:W(_.beerShadowStrength,.64,0,1),multiScattering:W(_.multiScattering,.58,0,1),powderStrength:W(_.powderStrength,.72,0,1.4),hazeStrength:W(_.hazeStrength,.38,0,1),groundBounceStrength:W(_.groundBounceStrength,.26,0,1),maxDistance:W(_.maxDistance,36e4,12e4,9e5),stepCount:Math.round(W(_.stepCount,48,16,128))}}function xe(){let _=0;u=window.setInterval(async()=>{var G,K;_+=1;const y=(G=t.getViewer)==null?void 0:G.call(t),U=((K=t.getCesium)==null?void 0:K.call(t))||window.Cesium;if(y&&U){clearInterval(u),u=null;try{$(y),N(y),j(y,U),Ge(y,U),n.success("高级视觉效果已启用。")}catch(oe){n.error("高级视觉效果初始化失败",oe),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}_>=150&&(clearInterval(u),u=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function $(_){var G,K,oe,ae,ye,re,s,T,z;const y=_==null?void 0:_.scene;if(!y)return;typeof y.highDynamicRange=="boolean"&&(Y.hdr=y.highDynamicRange),"sunBloom"in y&&(Y.sunBloom=y.sunBloom);const U=y.globe;if(U&&(Y.globe={enableLighting:U.enableLighting,showGroundAtmosphere:U.showGroundAtmosphere,dynamicAtmosphereLighting:U.dynamicAtmosphereLighting,dynamicAtmosphereLightingFromSun:U.dynamicAtmosphereLightingFromSun,atmosphereLightIntensity:U.atmosphereLightIntensity,atmosphereHueShift:U.atmosphereHueShift,atmosphereSaturationShift:U.atmosphereSaturationShift,atmosphereBrightnessShift:U.atmosphereBrightnessShift,lightingFadeInDistance:U.lightingFadeInDistance,lightingFadeOutDistance:U.lightingFadeOutDistance,nightFadeInDistance:U.nightFadeInDistance,nightFadeOutDistance:U.nightFadeOutDistance}),y.light&&(Y.light={intensity:y.light.intensity}),(G=y.postProcessStages)!=null&&G.bloom){const H=y.postProcessStages.bloom;Y.bloom={enabled:!!H.enabled,contrast:(K=H.uniforms)==null?void 0:K.contrast,brightness:(oe=H.uniforms)==null?void 0:oe.brightness,delta:(ae=H.uniforms)==null?void 0:ae.delta,sigma:(ye=H.uniforms)==null?void 0:ye.sigma,stepSize:(re=H.uniforms)==null?void 0:re.stepSize}}y.skyAtmosphere&&(Y.sky={show:y.skyAtmosphere.show,hueShift:y.skyAtmosphere.hueShift,saturationShift:y.skyAtmosphere.saturationShift,brightnessShift:y.skyAtmosphere.brightnessShift}),Y.celestial={sunShow:(s=y.sun)==null?void 0:s.show,moonShow:(T=y.moon)==null?void 0:T.show,skyBoxShow:(z=y.skyBox)==null?void 0:z.show}}function j(_,y){var G;!((G=_==null?void 0:_.scene)!=null&&G.postProcessStages)||!(y!=null&&y.PostProcessStage)||(De(_,y),fe(_,y),Le(_,y),Ee(_,y),S.value?ze(_,y,1200):Re(_))}function N(_){var U;const y=_==null?void 0:_.scene;(U=y==null?void 0:y.renderError)!=null&&U.addEventListener&&(y.rethrowRenderErrors=!1,r=y.renderError.addEventListener((G,K)=>{n.error("Cesium 渲染异常，已触发降级保护",K),he(),f||(f=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function he(){p.value=!1,m.value=!1,w.value=!1,c.value=!1,S.value=!1,M&&(M.enabled=!1),C&&(C.enabled=!1),D&&(D.enabled=!1),g&&(g.enabled=!1)}function De(_,y){M||(M=new y.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new y.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),_.scene.postProcessStages.add(M),M.enabled=p.value)}function fe(_,y){var re,s;if(C||!(y!=null&&y.PostProcessStage))return;const U=Number((s=(re=y==null?void 0:y.Ellipsoid)==null?void 0:re.WGS84)==null?void 0:s.maximumRadius)||6378137,G=new y.Cartesian3,K=new y.Cartesian3,oe=new y.Cartesian3(.35,-.25,.9),ae=new y.Matrix4,ye=new y.Cartesian4(1,1,1,.85);y.Cartesian3.normalize(oe,oe),C=new y.PostProcessStage({name:"cesium_ecef_volumetric_clouds_stage",fragmentShader:Oi,uniforms:{u_cameraPositionWC:G,u_cameraDirectionWC:K,u_inverseViewProjection:ae,u_sunDirectionWC:oe,u_cloudBottomRadius:U+1500,u_cloudTopRadius:U+8500,u_maxDistance:42e4,u_coverage:.52,u_density:85e-6,u_shadowStrength:.82,u_beerShadowStrength:.64,u_multiScattering:.58,u_powderStrength:.72,u_hazeStrength:.38,u_groundBounceStrength:.26,u_stepCount:48,u_timeSeconds:0,u_atmosphereParams:ye,u_qualityLevel:1}}),_.scene.postProcessStages.add(C),C.enabled=m.value}function Le(_,y){var G,K;const U=(G=_==null?void 0:_.scene)==null?void 0:G.postProcessStages;U&&(U.ambientOcclusion?(g=U.ambientOcclusion,P=!1):(K=y==null?void 0:y.PostProcessStageLibrary)!=null&&K.createAmbientOcclusionStage&&(g=y.PostProcessStageLibrary.createAmbientOcclusionStage(),U.add(g),P=!0),g&&(g.enabled=c.value,g.uniforms&&("intensity"in g.uniforms&&(g.uniforms.intensity=4.2),"bias"in g.uniforms&&(g.uniforms.bias=.08),"lengthCap"in g.uniforms&&(g.uniforms.lengthCap=.35),"stepSize"in g.uniforms&&(g.uniforms.stepSize=1.8),"frustumLength"in g.uniforms&&(g.uniforms.frustumLength=1200))))}function Ee(_,y){D||(D=new y.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),_.scene.postProcessStages.add(D),D.enabled=!1)}function Ge(_,y){const U=_==null?void 0:_.scene;U&&(l=U.preRender.addEventListener(()=>{var ae;const G=V(_),K=Number(((ae=_==null?void 0:_.camera)==null?void 0:ae.pitch)??-1.2);O+=1;const oe=typeof performance<"u"?performance.now():Date.now();if(oe-B>=1e3&&(X=Math.round(O*1e3/(oe-B)),O=0,B=oe),M&&(M.enabled=p.value,M.uniforms.cameraHeightFactor=v(G,150,12e3),M.uniforms.fogDensity=55e-5+(1-M.uniforms.cameraHeightFactor)*.00125),C&&(C.enabled=m.value,C.enabled&&Pe(_,y,G)),g&&(g.enabled=c.value),D){const ye=K>-.62,re=ye?F((K+.62)/.5):0;D.enabled=w.value&&ye,D.uniforms.blurStrength=re}S.value&&G>=8e4?(ze(_,y,G),R=!1):R||(Re(_),R=!0)}))}function Pe(_,y,U){var Ce;const G=C,K=_==null?void 0:_.scene,oe=_==null?void 0:_.camera;if(!G||!K||!oe||!y)return;const ae=G.uniforms;y.Cartesian3.clone(oe.positionWC,ae.u_cameraPositionWC),y.Cartesian3.clone(oe.directionWC,ae.u_cameraDirectionWC);const ye=(Ce=K.context)==null?void 0:Ce.uniformState;ye!=null&&ye.inverseViewProjection?y.Matrix4.clone(ye.inverseViewProjection,ae.u_inverseViewProjection):oe.inverseViewProjectionMatrix&&y.Matrix4.clone(oe.inverseViewProjectionMatrix,ae.u_inverseViewProjection);const re=$e(_,y);y.Cartesian3.clone(re,ae.u_sunDirectionWC);const s=v(U,1e4,18e4),T=y.Cartesian3.normalize(oe.positionWC,Z),z=y.Cartesian3.dot(T,re),H=1-F((z+.08)/.55),le=S.value?1:.62,ce=I.value;ae.u_coverage=ce.coverage,ae.u_density=ce.density*(1-s*.22),ae.u_maxDistance=ce.maxDistance,ae.u_shadowStrength=ce.shadowStrength*(1-s*.12),ae.u_beerShadowStrength=ce.beerShadowStrength*(1-s*.18),ae.u_multiScattering=ce.multiScattering,ae.u_powderStrength=ce.powderStrength,ae.u_hazeStrength=ce.hazeStrength*(1-s*.35),ae.u_groundBounceStrength=ce.groundBounceStrength,ae.u_stepCount=ce.stepCount,ae.u_timeSeconds=Ie(_,y),ae.u_atmosphereParams&&(ae.u_atmosphereParams.x=le,ae.u_atmosphereParams.y=.92+H*.28,ae.u_atmosphereParams.z=.82+H*.42,ae.u_atmosphereParams.w=(.58+le*.42)*(1-s*.28));const _e=ce.quality==="ultra"?3:ce.quality==="high"?2:ce.quality==="medium"?1:0;ae.u_qualityLevel=_e}function $e(_,y){var K,oe,ae;const U=(ae=(oe=(K=_==null?void 0:_.scene)==null?void 0:K.context)==null?void 0:oe.uniformState)==null?void 0:ae.sunDirectionWC;if(U)return U;const G=new y.Cartesian3(.35,-.25,.9);return y.Cartesian3.normalize(G,G),G}function Ie(_,y){var U,G,K;try{const oe=(U=_==null?void 0:_.clock)==null?void 0:U.currentTime;if(oe&&((G=y==null?void 0:y.JulianDate)!=null&&G.secondsDifference)&&((K=y==null?void 0:y.JulianDate)!=null&&K.fromIso8601))return A||(A=y.JulianDate.fromIso8601("2026-01-01T00:00:00Z")),y.JulianDate.secondsDifference(oe,A)}catch{}return(typeof performance<"u"?performance.now():Date.now())*.001}function ze(_,y,U){var ye;const G=_==null?void 0:_.scene;if(!G)return;b||(b=Ti(_)),wi(_,y),typeof G.highDynamicRange=="boolean"&&(G.highDynamicRange=!0);const K=(ye=G.postProcessStages)==null?void 0:ye.bloom;K&&(K.enabled=!0,K.uniforms&&("contrast"in K.uniforms&&(K.uniforms.contrast=149),"brightness"in K.uniforms&&(K.uniforms.brightness=-.12),"delta"in K.uniforms&&(K.uniforms.delta=1),"sigma"in K.uniforms&&(K.uniforms.sigma=3.25),"stepSize"in K.uniforms&&(K.uniforms.stepSize=5)));const oe=G.skyAtmosphere;if(!oe)return;const ae=v(U,500,12e4);oe.hueShift=-.035+ae*.035,oe.saturationShift=-.14+ae*.09,oe.brightnessShift=.03+(1-ae)*.08}function Re(_){var oe,ae,ye;const y=_==null?void 0:_.scene;if(!y)return;const U=((oe=t.getCesium)==null?void 0:oe.call(t))||window.Cesium;if(b){Mi(_,U,b),b=null;return}typeof y.highDynamicRange=="boolean"&&Y.hdr!==null&&(y.highDynamicRange=Y.hdr),"sunBloom"in y&&Y.sunBloom!==void 0&&(y.sunBloom=Y.sunBloom);const G=y.globe;if(G&&Y.globe){const re=Y.globe;re.enableLighting!==void 0&&(G.enableLighting=re.enableLighting),re.showGroundAtmosphere!==void 0&&(G.showGroundAtmosphere=re.showGroundAtmosphere),re.dynamicAtmosphereLighting!==void 0&&"dynamicAtmosphereLighting"in G&&(G.dynamicAtmosphereLighting=re.dynamicAtmosphereLighting),re.dynamicAtmosphereLightingFromSun!==void 0&&"dynamicAtmosphereLightingFromSun"in G&&(G.dynamicAtmosphereLightingFromSun=re.dynamicAtmosphereLightingFromSun),re.atmosphereLightIntensity!==void 0&&"atmosphereLightIntensity"in G&&(G.atmosphereLightIntensity=re.atmosphereLightIntensity),re.atmosphereHueShift!==void 0&&"atmosphereHueShift"in G&&(G.atmosphereHueShift=re.atmosphereHueShift),re.atmosphereSaturationShift!==void 0&&"atmosphereSaturationShift"in G&&(G.atmosphereSaturationShift=re.atmosphereSaturationShift),re.atmosphereBrightnessShift!==void 0&&"atmosphereBrightnessShift"in G&&(G.atmosphereBrightnessShift=re.atmosphereBrightnessShift),re.lightingFadeInDistance!==void 0&&"lightingFadeInDistance"in G&&(G.lightingFadeInDistance=re.lightingFadeInDistance),re.lightingFadeOutDistance!==void 0&&"lightingFadeOutDistance"in G&&(G.lightingFadeOutDistance=re.lightingFadeOutDistance),re.nightFadeInDistance!==void 0&&"nightFadeInDistance"in G&&(G.nightFadeInDistance=re.nightFadeInDistance),re.nightFadeOutDistance!==void 0&&"nightFadeOutDistance"in G&&(G.nightFadeOutDistance=re.nightFadeOutDistance)}y.light&&Y.light&&Y.light.intensity!==void 0&&(y.light.intensity=Y.light.intensity);const K=(ae=y.postProcessStages)==null?void 0:ae.bloom;if(K&&Y.bloom&&(K.enabled=Y.bloom.enabled,K.uniforms&&("contrast"in K.uniforms&&Y.bloom.contrast!==void 0&&(K.uniforms.contrast=Y.bloom.contrast),"brightness"in K.uniforms&&Y.bloom.brightness!==void 0&&(K.uniforms.brightness=Y.bloom.brightness),"delta"in K.uniforms&&Y.bloom.delta!==void 0&&(K.uniforms.delta=Y.bloom.delta),"sigma"in K.uniforms&&Y.bloom.sigma!==void 0&&(K.uniforms.sigma=Y.bloom.sigma),"stepSize"in K.uniforms&&Y.bloom.stepSize!==void 0&&(K.uniforms.stepSize=Y.bloom.stepSize))),y.skyAtmosphere&&Y.sky&&(Y.sky.show!==void 0&&(y.skyAtmosphere.show=Y.sky.show),y.skyAtmosphere.hueShift=Y.sky.hueShift,y.skyAtmosphere.saturationShift=Y.sky.saturationShift,y.skyAtmosphere.brightnessShift=Y.sky.brightnessShift),Y.celestial){const re=Y.celestial;y.sun&&re.sunShow!==void 0&&(y.sun.show=re.sunShow),y.moon&&re.moonShow!==void 0&&(y.moon.show=re.moonShow),y.skyBox&&re.skyBoxShow!==void 0&&(y.skyBox.show=re.skyBoxShow)}(ye=y.requestRender)==null||ye.call(y)}function qe(){h&&(clearInterval(h),h=null)}async function Ze(){var G,K;const _=!x.value;if(x.value=_,!_){qe();return}const y=(G=t.getViewer)==null?void 0:G.call(t),U=((K=t.getCesium)==null?void 0:K.call(t))||window.Cesium;if(!y||!U){x.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Oe(y,U),je(y,U),ke(y,U)}catch(oe){x.value=!1,n.error("图表模块加载失败",oe)}}async function Oe(_,y){await te(),await ra(),a.value&&(L||(L=i.init(a.value),Be()),o||(o=()=>{L==null||L.resize()},window.addEventListener("resize",o)),L.resize(),ke(_,y))}function je(_,y){h||(h=window.setInterval(()=>{!L||!x.value||ke(_,y)},1200))}function ke(_,y){var ae;const U=new Date,G=`${Q(U.getHours())}:${Q(U.getMinutes())}:${Q(U.getSeconds())}`,K=Number((V(_)/1e3).toFixed(2)),oe=Number(y.Math.toDegrees(((ae=_==null?void 0:_.camera)==null?void 0:ae.pitch)??0).toFixed(1));q(ne.labels,G,20),q(ne.cameraHeightKm,K,20),q(ne.pitchDeg,oe,20),q(ne.fps,X,20),L.setOption({xAxis:{data:ne.labels},series:[{data:ne.cameraHeightKm},{data:ne.pitchDeg},{data:ne.fps}]})}function Be(){L&&L.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function He(){var U,G;u&&(clearInterval(u),u=null),qe();const _=(U=t.getViewer)==null?void 0:U.call(t),y=(G=_==null?void 0:_.scene)==null?void 0:G.postProcessStages;l&&(l(),l=null),r&&(r(),r=null),M&&y&&y.remove(M),M=null,C&&y&&y.remove(C),C=null,D&&y&&y.remove(D),D=null,g&&(P&&y&&y.remove(g),g=null),P=!1,R=!1,_&&Re(_),o&&(window.removeEventListener("resize",o),o=null),L&&(L.dispose(),L=null),i=null,f=!1}function V(_){var K,oe,ae;const y=(oe=(K=_==null?void 0:_.scene)==null?void 0:K.globe)==null?void 0:oe.ellipsoid,U=(ae=_==null?void 0:_.camera)==null?void 0:ae.positionWC;if(!y||!U)return 0;const G=y.cartesianToCartographic(U);return Math.max(0,Number((G==null?void 0:G.height)??0))}function v(_,y,U){return!Number.isFinite(_)||U<=y?0:F((_-y)/(U-y))}function F(_){return Math.min(1,Math.max(0,Number(_)||0))}function W(_,y,U,G){const K=Number(_);return Number.isFinite(K)?Math.min(G,Math.max(U,K)):y}function q(_,y,U){_.push(y),_.length>U&&_.shift()}function Q(_){return String(_).padStart(2,"0")}return(_,y)=>e.headless?pe("",!0):(ee(),se("div",Ri,[E("div",ki,[E("div",Ii,[y[0]||(y[0]=E("span",{class:"panel-title"},"Cinematic FX",-1)),E("button",{class:"panel-btn",onClick:Ze},me(x.value?"隐藏图表":"显示图表"),1)]),E("div",zi,[Te(un,{title:"Effect Parameters",controls:k.value,onChange:be},null,8,["controls"])]),Ye(E("div",{ref_key:"chartRef",ref:a,class:"fx-chart"},null,512),[[ut,x.value]])])]))}},Ni=st(Bi,[["__scopeId","data-v-9f955e42"]]),Hi={key:0,class:"launcher-count"},Wi={class:"panel-header"},Ui={class:"panel-title-block"},Gi={class:"panel-mark"},$i={class:"panel-copy"},qi={class:"panel-subtitle"},ji={class:"panel-actions"},Xi=["title"],Vi={class:"panel-tabs","aria-label":"3D 工具分类"},Ki=["aria-pressed","onClick"],Yi={class:"panel-scroll"},Zi={class:"panel-page"},Ji={class:"overview-grid"},Qi={class:"overview-tile"},er={class:"overview-tile"},tr={class:"overview-tile"},nr={key:0,class:"quick-actions"},ar=["disabled","onClick"],ir={key:1,class:"empty-state"},rr={class:"panel-page"},or=["aria-expanded"],sr={class:"section-main"},lr={class:"section-meta"},cr={key:0,class:"section-body"},ur={class:"option-grid"},dr=["disabled","aria-pressed","title","onClick"],hr={class:"custom-basemap-input-row"},fr=["disabled"],mr={key:0,class:"custom-basemap-current"},pr=["aria-expanded"],gr={class:"section-main"},vr={class:"section-meta"},yr={key:0,class:"section-body"},br={class:"option-grid"},xr=["aria-pressed","title","onClick"],Sr=["aria-expanded"],_r={class:"section-main"},wr={class:"section-meta"},Tr={key:0,class:"section-body"},Mr={class:"overlay-list"},Dr=["disabled","aria-pressed","title","onClick"],Lr={class:"overlay-copy"},Cr={class:"overlay-title"},Fr={key:0,class:"overlay-desc"},Pr={key:3,class:"empty-state"},Ar={class:"panel-page"},Er={class:"module-list"},Rr=["aria-expanded","onClick"],kr={class:"module-icon"},Ir={class:"module-copy"},zr={class:"module-title"},Or={key:0,class:"module-desc"},Br={class:"module-head-side"},Nr={key:0,class:"module-body"},Hr={key:0,class:"module-actions"},Wr=["disabled","onClick"],Ur={key:0,class:"empty-state"},Gr={class:"panel-page"},$r={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},qr={class:"data-upload-hint"},jr={key:0,class:"data-source-list"},Xr={class:"data-source-head"},Vr={class:"data-source-count"},Kr=["title","aria-label","onClick"],Yr={class:"data-source-icon"},Zr={class:"data-source-copy"},Jr={class:"data-source-name"},Qr={class:"data-source-type"},eo={key:1,class:"empty-state"},kn=3,to=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",no={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(e,{emit:t}){const n=e,a=J(Array.isArray(n.loadedDataSources)?n.loadedDataSources:[]);we(()=>n.loadedDataSources,$=>{const j=Array.isArray($)?$:[];j!==a.value&&(a.value=j)},{immediate:!0});const p=t,m=O(),c=m.uiStateVersion===kn,w=J(m.activeTab||"scene"),S=J(!!m.compactMode),x=J(new Set(c?m.expandedLayerSectionIds||[]:[])),I=J(new Set(c?m.expandedModuleIds||[]:[])),k=J(n.customBasemapUrl||""),M=J(null),C=Me(()=>n.embedded||n.open),D=Me(()=>n.modules.find($=>$.id==="scene")||null),g=Me(()=>{var $;return(($=D.value)==null?void 0:$.actions)||[]}),P=Me(()=>n.modules.filter($=>$.id!=="scene")),L=Me(()=>P.value.filter($=>$.statusTone==="success"||$.statusTone==="warning").length),i=Me(()=>n.overlayOptions.filter($=>!!$.active).length),d=[{id:"scene",label:"场景",icon:jt},{id:"layers",label:"图层",icon:Xt},{id:"data",label:"数据",icon:tn},{id:"modules",label:"模块",icon:qt}],u=Me(()=>{var $;return(($=n.basemapOptions.find(j=>j.value===n.activeBasemap))==null?void 0:$.label)||"未选择"}),h=Me(()=>{var $;return(($=n.terrainOptions.find(j=>j.value===n.activeTerrain))==null?void 0:$.label)||"未选择"});we(()=>n.modules.map($=>$.id),$=>{$.includes(w.value)||w.value==="scene"||w.value==="layers"||w.value==="modules"||(w.value="scene")},{immediate:!0}),we([w,S,x,I],X,{deep:!0}),we(()=>n.customBasemapUrl,$=>{$!==k.value&&(k.value=$||"")});function o($){p("update:open",$)}function l($){return x.value.has($)}function r($){const j=new Set(x.value);j.has($)?j.delete($):j.add($),x.value=j}function f($){return I.value.has($)}function b($){const j=new Set(I.value);j.has($)?j.delete($):j.add($),I.value=j}function A($){$!=null&&$.disabled||p("update:activeBasemap",$.value)}function R(){p("custom-basemap-submit",{url:k.value})}function O(){if(typeof window>"u")return{};try{const $=window.localStorage.getItem(n.storageKey);return $?JSON.parse($):{}}catch{return{}}}function X(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:kn,activeTab:w.value,compactMode:S.value,expandedLayerSectionIds:[...x.value],expandedModuleIds:[...I.value]}))}catch{}}function B($){return{scene:jt,effects:Ea,clouds:Aa,wind:Pa,fluid:Fa,shallowWater:Tn}[$]||qt}function Z($,j){var he;return((he={scene:{home:La,everest:_n,tileset:Ot},wind:{load:Da,clear:Vt},fluid:{pick:wn,clear:Vt},shallowWater:{toggle:Tn}}[$])==null?void 0:he[j])||Ca}function ie($,j){p("module-action",{moduleId:$,actionId:j})}function te($,j,N){const he=j.type==="range"?Number(N):N;p("control-change",{moduleId:$,controlId:j.id,value:he})}function ne($){$.disabled||p("overlay-toggle",{overlayId:$.value,value:!$.active})}function Y($){return{geojson:Pt,json:Pt,kml:Mn,kmz:Mn,shp:Xt,gltf:Ot,czml:Pt,"3dtiles":Ot}[$]||Pt}function de($){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[$]||$.toUpperCase()}function be($){var N;const j=(N=$.target)==null?void 0:N.files;!j||j.length===0||(p("data-import",{files:Array.from(j)}),M.value&&(M.value.value=""))}function Se($){p("data-remove",{id:$})}function xe(){p("data-clear-all")}return($,j)=>(ee(),se("aside",{class:Ae(["cesium-tool-shell",{"is-open":C.value,"is-embedded":e.embedded}])},[!e.embedded&&!C.value?(ee(),se("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:j[0]||(j[0]=N=>o(!0))},[Te(ue(qt),{size:18,"stroke-width":"2"}),j[7]||(j[7]=E("span",null,"高级控制台",-1)),L.value?(ee(),se("span",Hi,me(L.value),1)):pe("",!0)])):pe("",!0),Ye(E("section",{class:Ae(["cesium-tool-panel",{compact:S.value}]),"aria-label":"Cesium 高级控制台"},[E("header",Wi,[E("div",Ui,[E("span",Gi,[Te(ue(jt),{size:18,"stroke-width":"2"})]),E("span",$i,[j[8]||(j[8]=E("span",{class:"panel-title"},"3D 高级控制台",-1)),E("span",qi,me(u.value)+" / "+me(h.value),1)])]),E("div",ji,[E("button",{class:"icon-btn",type:"button",title:S.value?"切换为舒展布局":"切换为紧凑布局",onClick:j[1]||(j[1]=N=>S.value=!S.value)},[Te(ue(Ta),{size:16,"stroke-width":"2"})],8,Xi),e.embedded?pe("",!0):(ee(),se("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:j[2]||(j[2]=N=>o(!1))},[Te(ue(xn),{size:17,"stroke-width":"2"})]))])]),E("nav",Vi,[(ee(),se(nt,null,rt(d,N=>E("button",{key:N.id,class:Ae(["tab-btn",{active:w.value===N.id}]),type:"button","aria-pressed":w.value===N.id,onClick:he=>w.value=N.id},[(ee(),Ne(dt(N.icon),{size:15,"stroke-width":"2"})),E("span",null,me(N.label),1)],10,Ki)),64))]),E("div",Yi,[Ye(E("section",Zi,[E("div",Ji,[E("div",Qi,[j[9]||(j[9]=E("span",{class:"overview-label"},"地图源",-1)),E("strong",null,me(u.value),1)]),E("div",er,[j[10]||(j[10]=E("span",{class:"overview-label"},"地形",-1)),E("strong",null,me(h.value),1)]),E("div",tr,[j[11]||(j[11]=E("span",{class:"overview-label"},"模块",-1)),E("strong",null,me(L.value)+"/"+me(P.value.length),1)])]),g.value.length?(ee(),se("div",nr,[(ee(!0),se(nt,null,rt(g.value,N=>(ee(),se("button",{key:N.id,class:Ae(["tool-action",[N.variant||"default",{active:N.active}]]),disabled:N.disabled,type:"button",onClick:he=>ie(D.value.id,N.id)},[(ee(),Ne(dt(Z(D.value.id,N.id)),{size:15,"stroke-width":"2"})),It(" "+me(N.label),1)],10,ar))),128))])):(ee(),se("div",ir," 暂无场景快捷操作 "))],512),[[ut,w.value==="scene"]]),Ye(E("section",rr,[e.basemapOptions.length?(ee(),se("div",{key:0,class:Ae(["option-group",{expanded:l("basemap")}])},[E("button",{class:"section-head section-toggle",type:"button","aria-expanded":l("basemap"),onClick:j[3]||(j[3]=N=>r("basemap"))},[E("span",sr,[Te(ue(Xt),{size:16,"stroke-width":"2"}),j[12]||(j[12]=E("span",null,"底图源",-1))]),E("span",lr,[E("span",null,me(u.value),1),Te(ue(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,or),l("basemap")?(ee(),se("div",cr,[E("div",ur,[(ee(!0),se(nt,null,rt(e.basemapOptions,N=>(ee(),se("button",{key:N.value,class:Ae(["option-card",{active:N.value===e.activeBasemap}]),type:"button",disabled:N.disabled,"aria-pressed":N.value===e.activeBasemap,title:N.description||N.label,onClick:he=>A(N)},[E("span",null,me(N.label),1),N.value===e.activeBasemap?(ee(),Ne(ue(Sn),{key:0,size:15,"stroke-width":"2.4"})):pe("",!0)],10,dr))),128))]),E("form",{class:"custom-basemap-editor",onSubmit:gt(R,["prevent"])},[E("div",hr,[Te(ue(Ma),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),Ye(E("input",{"onUpdate:modelValue":j[4]||(j[4]=N=>k.value=N),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[zt,k.value]]),E("button",{class:"custom-basemap-submit",type:"submit",disabled:!k.value.trim(),title:"加载自定义 XYZ"},[Te(ue(la),{size:14,"stroke-width":"2"}),j[13]||(j[13]=E("span",null,"加载",-1))],8,fr)]),e.customBasemapUrl?(ee(),se("div",mr,me(e.customBasemapUrl),1)):pe("",!0)],32)])):pe("",!0)],2)):pe("",!0),e.terrainOptions.length?(ee(),se("div",{key:1,class:Ae(["option-group",{expanded:l("terrain")}])},[E("button",{class:"section-head section-toggle",type:"button","aria-expanded":l("terrain"),onClick:j[5]||(j[5]=N=>r("terrain"))},[E("span",gr,[Te(ue(_n),{size:16,"stroke-width":"2"}),j[14]||(j[14]=E("span",null,"地形",-1))]),E("span",vr,[E("span",null,me(h.value),1),Te(ue(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,pr),l("terrain")?(ee(),se("div",yr,[E("div",br,[(ee(!0),se(nt,null,rt(e.terrainOptions,N=>(ee(),se("button",{key:N.value,class:Ae(["option-card",{active:N.value===e.activeTerrain}]),type:"button","aria-pressed":N.value===e.activeTerrain,title:N.description||N.label,onClick:he=>$.$emit("update:activeTerrain",N.value)},[E("span",null,me(N.label),1),N.value===e.activeTerrain?(ee(),Ne(ue(Sn),{key:0,size:15,"stroke-width":"2.4"})):pe("",!0)],10,xr))),128))])])):pe("",!0)],2)):pe("",!0),e.overlayOptions.length?(ee(),se("div",{key:2,class:Ae(["option-group",{expanded:l("overlay")}])},[E("button",{class:"section-head section-toggle",type:"button","aria-expanded":l("overlay"),onClick:j[6]||(j[6]=N=>r("overlay"))},[E("span",_r,[Te(ue(wn),{size:16,"stroke-width":"2"}),j[15]||(j[15]=E("span",null,"叠加层",-1))]),E("span",wr,[E("span",null,me(i.value)+"/"+me(e.overlayOptions.length),1),Te(ue(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Sr),l("overlay")?(ee(),se("div",Tr,[E("div",Mr,[(ee(!0),se(nt,null,rt(e.overlayOptions,N=>(ee(),se("button",{key:N.value,class:Ae(["overlay-row",{active:!!N.active}]),type:"button",disabled:N.disabled,"aria-pressed":!!N.active,title:N.description||N.label,onClick:he=>ne(N)},[E("span",Lr,[E("span",Cr,me(N.label),1),N.description?(ee(),se("span",Fr,me(N.description),1)):pe("",!0)]),E("span",{class:Ae(["toggle-control",{active:!!N.active}]),"aria-hidden":"true"},[...j[16]||(j[16]=[E("span",{class:"toggle-track"},[E("span",{class:"toggle-thumb"})],-1)])],2)],10,Dr))),128))])])):pe("",!0)],2)):pe("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(ee(),se("div",Pr," 暂无图层配置项 ")):pe("",!0)],512),[[ut,w.value==="layers"]]),Ye(E("section",Ar,[E("div",Er,[(ee(!0),se(nt,null,rt(P.value,N=>{var he,De;return ee(),se("article",{key:N.id,class:Ae(["module-item",{expanded:f(N.id)}])},[E("button",{class:"module-head",type:"button","aria-expanded":f(N.id),onClick:fe=>b(N.id)},[E("span",kr,[(ee(),Ne(dt(B(N.id)),{size:16,"stroke-width":"2"}))]),E("span",Ir,[E("span",zr,me(N.title),1),N.description?(ee(),se("span",Or,me(N.description),1)):pe("",!0)]),E("span",Br,[N.status?(ee(),se("span",{key:0,class:Ae(["module-status",N.statusTone||"neutral"])},me(N.status),3)):pe("",!0),Te(ue(Ft),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Rr),f(N.id)?(ee(),se("div",Nr,[(he=N.actions)!=null&&he.length?(ee(),se("div",Hr,[(ee(!0),se(nt,null,rt(N.actions,fe=>(ee(),se("button",{key:fe.id,class:Ae(["tool-action",[fe.variant||"default",{active:fe.active}]]),disabled:fe.disabled,type:"button",onClick:Le=>ie(N.id,fe.id)},[(ee(),Ne(dt(Z(N.id,fe.id)),{size:14,"stroke-width":"2"})),It(" "+me(fe.label),1)],10,Wr))),128))])):pe("",!0),(De=N.controls)!=null&&De.length?(ee(),se("div",{key:1,class:Ae(["control-list control-list-gui",N.controlLayout?`control-list-${N.controlLayout}`:""])},[Te(un,{title:N.title,controls:N.controls,onChange:fe=>te(N.id,fe.control,fe.value)},null,8,["title","controls","onChange"])],2)):pe("",!0)])):pe("",!0)],2)}),128))]),P.value.length?pe("",!0):(ee(),se("div",Ur," 暂无可用功能模块 "))],512),[[ut,w.value==="modules"]]),Ye(E("section",Gr,[E("label",$r,[E("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:M,class:"data-file-input",type:"file",multiple:"",accept:to,onChange:be},null,544),E("div",qr,[Te(ue(tn),{size:28,"stroke-width":"1.5"}),j[17]||(j[17]=E("span",null,"选择文件或拖拽到此处",-1)),j[18]||(j[18]=E("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),a.value.length?(ee(),se("div",jr,[E("div",Xr,[E("span",Vr," 已加载 "+me(a.value.length)+" 个数据源 ",1),E("button",{class:"tool-action danger",type:"button",onClick:xe},[Te(ue(Vt),{size:13,"stroke-width":"2"}),j[19]||(j[19]=It(" 全部清除 ",-1))])]),(ee(!0),se(nt,null,rt(a.value,N=>(ee(),se("button",{key:N.id,class:"data-source-row",type:"button",title:`点击移除 ${N.name} (${de(N.type)})`,"aria-label":`移除 ${N.name}`,onClick:he=>Se(N.id)},[E("span",Yr,[(ee(),Ne(dt(Y(N.type)),{size:15,"stroke-width":"2"}))]),E("span",Zr,[E("span",Jr,me(N.name),1),E("span",Qr,me(de(N.type)),1)]),Te(ue(xn),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,Kr))),128))])):(ee(),se("div",eo," 暂无已导入的数据 "))],512),[[ut,w.value==="data"]])])],2),[[ut,e.embedded||C.value]])],2))}},ao=st(no,[["__scopeId","data-v-7d2bb0cf"]]),io={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},ro={class:"dialog-header"},oo={class:"dialog-title-row"},so={class:"dialog-file-name"},lo={class:"coord-fields"},co={class:"coord-field"},uo={key:0,class:"coord-error"},ho={class:"coord-field"},fo={key:0,class:"coord-error"},mo={class:"coord-field"},po={key:0,class:"coord-error"},go={class:"dialog-actions"},vo=["disabled"],yo={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,a=t,p=J(""),m=J(""),c=J("0"),w=J(null),S=J(""),x=J(""),I=J(""),k=Me(()=>p.value!==""&&m.value!==""&&!S.value&&!x.value&&!I.value);function M(){const D=parseFloat(p.value),g=parseFloat(m.value),P=parseFloat(c.value);S.value="",x.value="",I.value="",p.value!==""&&(isNaN(D)||D<-180||D>180)&&(S.value="经度范围: -180 ~ 180"),m.value!==""&&(isNaN(g)||g<-90||g>90)&&(x.value="纬度范围: -90 ~ 90"),c.value!==""&&(isNaN(P)||P<0)&&(I.value="高度必须 ≥ 0")}function C(){if(!k.value){M();return}const D=parseFloat(p.value),g=parseFloat(m.value),P=parseFloat(c.value)||0;a("confirm",{lng:D,lat:g,height:P})}return we(()=>n.visible,D=>{if(!D){S.value="",x.value="",I.value="";return}p.value="",m.value="",c.value="0",S.value="",x.value="",I.value="",D&&setTimeout(()=>{var g;(g=w.value)==null||g.focus()},60)}),(D,g)=>(ee(),Ne(fa,{to:"body"},[e.visible?(ee(),se("div",{key:0,class:"cesium-data-dialog-overlay",onClick:g[4]||(g[4]=gt(P=>D.$emit("cancel"),["self"]))},[E("div",io,[E("header",ro,[E("div",oo,[Te(ue(Ot),{size:18,"stroke-width":"2"}),g[5]||(g[5]=E("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),E("p",so,me(e.fileName),1),g[6]||(g[6]=E("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),E("form",{class:"dialog-form",onSubmit:gt(C,["prevent"])},[E("div",lo,[E("label",co,[g[7]||(g[7]=E("span",{class:"coord-label"},"经度 (Longitude)",-1)),Ye(E("input",{ref_key:"lngInputRef",ref:w,"onUpdate:modelValue":g[0]||(g[0]=P=>p.value=P),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:M},null,544),[[zt,p.value]]),S.value?(ee(),se("span",uo,me(S.value),1)):pe("",!0)]),E("label",ho,[g[8]||(g[8]=E("span",{class:"coord-label"},"纬度 (Latitude)",-1)),Ye(E("input",{"onUpdate:modelValue":g[1]||(g[1]=P=>m.value=P),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:M},null,544),[[zt,m.value]]),x.value?(ee(),se("span",fo,me(x.value),1)):pe("",!0)]),E("label",mo,[g[9]||(g[9]=E("span",{class:"coord-label"},"高度 (Height 米)",-1)),Ye(E("input",{"onUpdate:modelValue":g[2]||(g[2]=P=>c.value=P),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:M},null,544),[[zt,c.value]]),I.value?(ee(),se("span",po,me(I.value),1)):pe("",!0)])]),E("div",go,[E("button",{class:"dialog-btn cancel-btn",type:"button",onClick:g[3]||(g[3]=P=>D.$emit("cancel"))}," 取消 "),E("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!k.value},[Te(ue(la),{size:14,"stroke-width":"2"}),g[10]||(g[10]=It(" 确认放置 ",-1))],8,vo)])],32)])])):pe("",!0)]))}},bo=st(yo,[["__scopeId","data-v-81f307a1"]]);function xo(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(L){return(L==null?void 0:L._view)||(L==null?void 0:L.view)}function n(L){const i=t(L);if(!(i!=null&&i.passState))throw new Error("Cesium scene passState is unavailable.");return i.passState}function a(L){const i=t(L);return(i==null?void 0:i.frustumCommandsList)||(i==null?void 0:i._frustumCommandsList)||[]}const p=`
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
`,S=`
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
`;class I{constructor(i){this.commandType=i.commandType,this.geometry=i.geometry,this.attributeLocations=i.attributeLocations,this.primitiveType=i.primitiveType,this.uniformMap=i.uniformMap,this.vertexShaderSource=i.vertexShaderSource,this.fragmentShaderSource=i.fragmentShaderSource,this.rawRenderState=i.rawRenderState,this.framebuffer=i.framebuffer,this.isPostRender=i.isPostRender,this.outputTexture=i.outputTexture,this.autoClear=e.defaultValue(i.autoClear,!1),this.preExecute=i.preExecute,this.modelMatrix=e.defaultValue(i.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(i){switch(this.commandType){case"Draw":{const d=e.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),u=e.ShaderProgram.fromCache({context:i,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),h=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:d,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:u,framebuffer:this.framebuffer,renderState:h,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(i,d){this.geometry=d;const u=e.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=u}update(i){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(i.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&i.commandList.push(this.clearCommand),i.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class k{constructor(){}static loadText(i){const d=new XMLHttpRequest;return d.open("GET",i,!1),d.send(),d.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(i){if(e.defined(i.arrayBufferView)){const u={};u.arrayBufferView=i.arrayBufferView,i.source=u,i.flipY=!1}return new e.Texture(i)}static createDepthFramebuffer(i,d,u){return new e.Framebuffer({context:i,colorTextures:[this.createTexture({context:i,width:d,height:u,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(d*u*4)})],depthRenderbuffer:new e.Renderbuffer({context:i,width:d,height:u,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(i,d,u,h=!1){const o={context:i,colorTextures:[d],destroyAttachments:h};return u&&(o.depthTexture=u),new e.Framebuffer(o)}static createRawRenderState(i){const h={viewport:i.viewport,depthTest:i.depthTest,depthMask:i.depthMask,blending:i.blending};return e.Appearance.getDefaultRenderState(!0,!1,h)}}const P=class P{constructor(i,d={}){if(!i)throw new Error("Cesium Viewer is required");this.viewer=i,this._initConfiguration(d),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(i){this.config={resolution:new e.Cartesian2(i.width||P.DEFAULTS.width,i.height||P.DEFAULTS.height),dimensions:i.dimensions||P.DEFAULTS.dimensions.clone(),heightRange:{min:i.minHeight??P.DEFAULTS.heightRange[0],max:i.maxHeight??P.DEFAULTS.heightRange[1]},baseHeight:i.baseHeight??P.DEFAULTS.baseHeight,fluidParams:i.fluidParams||P.DEFAULTS.fluidParams.clone(),customParams:i.customParams||P.DEFAULTS.customParams.clone(),waterColor:i.waterColor||P.DEFAULTS.waterColor.clone(),lonLat:i.lonLat||[...P.DEFAULTS.lonLat],timeStep:i.timeStep||P.DEFAULTS.timeStep,heightMapSource:i.heightMapSource||P.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(i){const d=Number(i);!Number.isFinite(d)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,d)),this.resetSimulation())}resetSimulation(){var i,d;this._frameCount=0,(d=(i=this.viewer.scene).requestRender)==null||d.call(i)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const i=()=>k.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:i(),B:i(),C:i(),D:i()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(i){if(!(i!=null&&i.arrayBufferView)||!i.width||!i.height)throw new Error("Invalid height map source.");return k.createTexture({context:this.viewer.scene.context,width:i.width,height:i.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:i.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var O,X;const i=this.viewer.scene.context,d=k.createDepthFramebuffer(i,this.config.resolution.x,this.config.resolution.y),u=this.viewer.scene,h=u.frameState,o=n(this.viewer.scene),l=u.camera,r=h.camera,f=o.framebuffer,b=e.BoundingRectangle.clone(o.viewport,new e.BoundingRectangle);let A=null,R=[];try{o.viewport.x=0,o.viewport.y=0,o.viewport.width=this.config.resolution.x,o.viewport.height=this.config.resolution.y,o.framebuffer=d,u.camera=this.heightMapCamera,h.camera=this.heightMapCamera,h.context.uniformState.updateCamera(this.heightMapCamera),R=this._processHeightMapShaders(),this._renderDepthPrepass(o);const B=k.createTexture({context:i,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return A=k.createFramebuffer(i,B),this._copyTexture(d.getColorTexture(0),A),B}finally{this._restoreHeightMapShaders(R),o.framebuffer=f,e.BoundingRectangle.clone(b,o.viewport),u.camera=l,h.camera=r,r&&h.context.uniformState.updateCamera(r),A&&!((O=A.isDestroyed)!=null&&O.call(A))&&A.destroy(),d&&!((X=d.isDestroyed)!=null&&X.call(d))&&d.destroy()}}_renderDepthPrepass(i){const d=this.viewer.scene.frameState;d.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(h=>h.execute(this.viewer.scene.context,i))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const i={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:m}),this._createComputePass("B",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:c}),this._createComputePass("C",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:w}),this._createComputePass("D",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:S})]}_createComputePass(i,{uniforms:d,shaderSource:u}){return new I({commandType:"Compute",uniformMap:d,fragmentShaderSource:new e.ShaderSource({sources:[p,u]}),geometry:k.getFullscreenQuad(),outputTexture:this.textures[i],preExecute:h=>h.commandToExecute.outputTexture=this.textures[i]})}_createMainRenderPass(){const i=C([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new I({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[p,x]}),geometry:this._createBoxGeometry(),modelMatrix:i,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var i,d,u,h;return(h=(u=(d=(i=t(this.viewer.scene))==null?void 0:i.globeDepth)==null?void 0:d.colorFramebufferManager)==null?void 0:u._colorTextures)==null?void 0:h[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(i=>this.viewer.scene.primitives.add(i)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(i){const d=this.viewer.camera.getPickRay(i);return this.viewer.scene.globe.pick(d,this.viewer.scene)}_createOrthographicCamera(){const i=new e.Camera(this.viewer.scene);i.frustum=new e.OrthographicOffCenterFrustum;const[d,u]=this.config.lonLat,h=e.Cartesian3.fromDegrees(d,u,this.config.baseHeight),o=e.Transforms.eastNorthUpToFixedFrame(h),l=i.frustum;l.near=.01,l.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),l.left=-this.config.dimensions.x/2,l.right=this.config.dimensions.x/2,l.bottom=-this.config.dimensions.y/2,l.top=this.config.dimensions.y/2;const r=e.Matrix4.getColumn(o,2,new e.Cartesian3);e.Cartesian3.negate(r,r);const f=e.Matrix4.getColumn(o,1,new e.Cartesian3),b=e.Matrix4.getColumn(o,0,new e.Cartesian3),A=e.Cartesian3.multiplyByScalar(r,-l.far,new e.Cartesian3);return i.position=e.Cartesian3.add(h,A,new e.Cartesian3),i.direction=r,i.up=f,i.right=b,i}destroy(){var i,d;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(u=>{u&&this.viewer.scene.primitives.remove(u)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(u=>{var h;u&&!((h=u.isDestroyed)!=null&&h.call(u))&&u.destroy()}),this.textures={},this._heightMap&&!((d=(i=this._heightMap).isDestroyed)!=null&&d.call(i))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(i,d){const u=this.viewer.scene.context,h=n(this.viewer.scene),o=u.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>i},owner:this}),l=h.framebuffer;h.framebuffer=d,o.execute(u,h),h.framebuffer=l}_getDepthRenderCommands(){var u,h;const i=[],d=a(this.viewer.scene);for(let o=0;o<d.length;++o){const l=d[o],r=(u=l==null?void 0:l.commands)==null?void 0:u[2],f=((h=l==null?void 0:l.indices)==null?void 0:h[2])??(r==null?void 0:r.length)??0;r&&f>0&&i.push(...r.slice(0,f))}return i}_processHeightMapShaders(){const i=[],d=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),u=e.Matrix4.inverse(d,new e.Matrix4),h=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(l=>{var R;if(!((R=l==null?void 0:l.shaderProgram)!=null&&R.fragmentShaderSource)||!l.uniformMap)return;const r=Object.prototype.hasOwnProperty.call(l.uniformMap,"u_inverseEnuMatrix"),f=l.uniformMap.u_inverseEnuMatrix,b=l.shaderProgram,A=new e.Matrix4;l.uniformMap.u_inverseEnuMatrix=()=>{const O=l.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(u,O,A)},l.heightMap_ShaderProgram||(l.heightMap_ShaderProgram=this._getDerivedShaderProgram(h.context,l.shaderProgram,"Height_Map")),l.shaderProgram=l.heightMap_ShaderProgram,i.push({command:l,hadInverseUniform:r,originalInverseUniform:f,originalShaderProgram:b})}),i}_restoreHeightMapShaders(i){i.forEach(d=>{const{command:u,hadInverseUniform:h,originalInverseUniform:o,originalShaderProgram:l}=d;u!=null&&u.uniformMap&&(u.shaderProgram=l,h?u.uniformMap.u_inverseEnuMatrix=o:delete u.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(i,d,u){let h=i.shaderCache.getDerivedShaderProgram(d,u);return e.defined(h)||(h=this._createHeightMapShaderProgram(i,d,u)),h}_createHeightMapShaderProgram(i,d,u){const h=this._modifyFragmentShader(d.fragmentShaderSource);return i.shaderCache.createDerivedShaderProgram(d,u,{vertexShaderSource:d.vertexShaderSource,fragmentShaderSource:h,attributeLocations:d._attributeLocations})}_modifyFragmentShader(i){const d=i.sources.map(u=>e.ShaderSource.replaceMain(u,"czm_heightMap_main"));return d.push(`
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
    `;function g(){return new e.PostProcessStage({fragmentShader:D})}return{FluidRenderer:M,createSkyEffect:g}}const So={key:0,class:"fluid-root"},_o={class:"fluid-panel"},wo={class:"panel-actions"},To=["disabled"],Mo={key:0,class:"selected-text"},In=1024,Rt=1e4,zn=1200,Do=100,Lo=.01,Co=.03,Fo=60,Yt=64,Po=160,Ao={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const a=e,p=n,m=on(),c=J(10),w=J(20),S=J(3),x=J("#0d4fa3"),I=J(null),k=J(null),M=J(null),C=J(!1),D=J(!1),g=J(null),P=J(null);let L=null,i=null,d=null,u=null,h=null,o=null,l=0;const r=Me(()=>!Number.isFinite(g.value)||!Number.isFinite(P.value)?"":`经度 ${g.value.toFixed(6)} / 纬度 ${P.value.toFixed(6)}`),f=Me(()=>Number.isFinite(k.value)&&Number.isFinite(M.value)),b=Me(()=>{if(!f.value)return 1;const v=Math.abs(M.value-k.value);return Math.max(v/1e3,.01)}),A=Me(()=>[{id:"threshold",label:"Threshold",type:"range",min:0,max:500,step:1e-4,value:c.value,displayValue:Number(c.value).toFixed(2)},{id:"blend",label:"Blend",type:"range",min:0,max:50,step:1e-4,value:w.value,displayValue:Number(w.value).toFixed(2)},{id:"lightStrength",label:"Light",type:"range",min:0,max:10,step:1e-4,value:S.value,displayValue:Number(S.value).toFixed(2)},{id:"waterLevel",label:"Water Level",type:"range",min:f.value?k.value:0,max:f.value?M.value:1,step:b.value,value:Number.isFinite(Number(I.value))?Number(I.value):0,displayValue:f.value&&Number.isFinite(Number(I.value))?`${Number(I.value).toFixed(2)} m`:"Pick terrain first",disabled:!f.value},{id:"waterColor",label:"Water Color",type:"color",value:x.value}]);we([c,w,S,x],Re),we(I,qe),we(()=>a.params,v=>{O(v||{})},{deep:!0,immediate:!0}),we([C,D,r,I,k,M],B,{immediate:!0}),ia(()=>{He(!0)});function R(){var W,q;const v=(W=a.getViewer)==null?void 0:W.call(a),F=((q=a.getCesium)==null?void 0:q.call(a))||window.Cesium;if(!v||!F)return m.warning("Cesium 场景尚未就绪。"),null;if(!L){const Q=xo(F);L=Q.FluidRenderer,i=Q.createSkyEffect}return{viewer:v,Cesium:F}}function O(v){Number.isFinite(Number(v.threshold))&&(c.value=Number(v.threshold)),Number.isFinite(Number(v.blend))&&(w.value=Number(v.blend)),Number.isFinite(Number(v.lightStrength))&&(S.value=Number(v.lightStrength)),Pe(v.waterColor)&&(x.value=v.waterColor),Number.isFinite(Number(v.waterLevel))&&(I.value=Number(v.waterLevel))}function X({controlId:v,value:F}){v==="threshold"?c.value=Number(F):v==="blend"?w.value=Number(F):v==="lightStrength"?S.value=Number(F):v==="waterLevel"?I.value=Number(F):v==="waterColor"&&Pe(F)&&(x.value=F)}function B(){p("state-change",{isPicking:C.value,hasFluid:D.value,selectedText:r.value,waterLevel:I.value,waterLevelMin:k.value,waterLevelMax:M.value})}function Z(){const v=R();if(!v)return;const{viewer:F,Cesium:W}=v;ke(),Ze(F,W),C.value=!0,d=new W.ScreenSpaceEventHandler(F.scene.canvas),d.setInputAction(q=>{ie(F,W,q.position)},W.ScreenSpaceEventType.LEFT_CLICK)}async function ie(v,F,W){var ae,ye;const q=ze(v,W);if(!q){m.warning("未选中可用地形位置。");return}const Q=++l;ke();const _=F.Cartographic.fromCartesian(q),y=F.Math.toDegrees(_.longitude),U=F.Math.toDegrees(_.latitude),G=Number(_.height),K=Number.isFinite(G)?G:0,oe=new F.Cartesian3(Rt,Rt,0);oa("正在请求模拟范围高度数据...");try{Be();const re=Number(c.value)||0,s=Number(w.value)||0,T=Number(S.value)||0,z=await te(v,F,{lon:y,lat:U,centerHeight:K,dimensions:oe}),H=he(z,K),le=H.baseHeight,ce=H.depth,_e=De(H,K),Ce=new F.Cartesian3(Rt,Rt,ce);if(Q!==l)return;k.value=H.minHeight,M.value=H.maxHeight,I.value=_e,z||m.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),u=new L(v,{lonLat:[y,U],width:In,height:In,dimensions:Ce,baseHeight:le,minHeight:H.minHeight,maxHeight:H.maxHeight,heightMapSource:z,waterColor:Ee(F,x.value),customParams:new F.Cartesian4(re,s,T,10),fluidParams:new F.Cartesian4(.9+T/10*.099,Math.min(1,s/50),re/5e4,fe(_e,H))}),g.value=y,P.value=U,D.value=!0,(ye=(ae=v.scene).requestRender)==null||ye.call(ae),m.success("水体流体已创建。")}catch(re){m.error("水体流体创建失败",re),m.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{sa()}}async function te(v,F,W){const q=v==null?void 0:v.terrainProvider,Q=Y(W.dimensions);if(!q)return null;if(F.EllipsoidTerrainProvider&&q instanceof F.EllipsoidTerrainProvider)return j(Q);if(typeof F.sampleTerrain!="function"&&typeof F.sampleTerrainMostDetailed!="function")return null;try{return await ne(v,F,W,Q)}catch(_){if(Q<=Yt)throw _;return ne(v,F,W,Yt)}}async function ne(v,F,W,q){const Q=be(F,W,q),_=await Se(F,v.terrainProvider,Q);return $(_||Q,{size:q})}function Y(v){const F=Math.max(Number(v==null?void 0:v.x)||0,Number(v==null?void 0:v.y)||0),W=Math.ceil(F/Fo)+1;return de(W,Yt,Po)}function de(v,F,W){return Math.max(F,Math.min(W,Math.round(v)))}function be(v,{lon:F,lat:W,centerHeight:q,dimensions:Q},_){const y=v.Cartesian3.fromDegrees(F,W,q),U=v.Transforms.eastNorthUpToFixedFrame(y),G=[],K=Math.max(1,_-1);for(let oe=0;oe<_;oe++){const ye=(.5-oe/K)*Q.y;for(let re=0;re<_;re++){const T=(re/K-.5)*Q.x,z=new v.Cartesian3(T,ye,0),H=v.Matrix4.multiplyByPoint(U,z,new v.Cartesian3);G.push(v.Cartographic.fromCartesian(H))}}return G}async function Se(v,F,W){const q=xe(F),Q=Number.isInteger(q)?q:Math.min((F==null?void 0:F.maximumLevel)??12,12);return typeof v.sampleTerrain=="function"?v.sampleTerrain(F,Q,W):v.sampleTerrainMostDetailed(F,W)}function xe(v){const F=Number(v==null?void 0:v._bottomLevel);return Number.isFinite(F)?Math.max(0,F-1):null}function $(v,{size:F}){var Q;const W=N(v);if(!W)return null;const q=new Float32Array(F*F*4);for(let _=0;_<F*F;_++){const y=Number((Q=v[_])==null?void 0:Q.height),U=_*4;q[U]=Number.isFinite(y)?Ie(y,W.minHeight,W.maxHeight):W.minHeight,q[U+1]=0,q[U+2]=0,q[U+3]=1}return{width:F,height:F,arrayBufferView:q,minHeight:W.minHeight,maxHeight:W.maxHeight}}function j(v){return{width:v,height:v,arrayBufferView:new Float32Array(v*v*4),minHeight:0,maxHeight:0}}function N(v){let F=Number.POSITIVE_INFINITY,W=Number.NEGATIVE_INFINITY;for(const q of v||[]){const Q=Number(q==null?void 0:q.height);Number.isFinite(Q)&&(F=Math.min(F,Q),W=Math.max(W,Q))}return!Number.isFinite(F)||!Number.isFinite(W)?null:{minHeight:F,maxHeight:W}}function he(v,F){const W=Number(v==null?void 0:v.minHeight),q=Number(v==null?void 0:v.maxHeight);if(Number.isFinite(W)&&Number.isFinite(q)){const y=Number(F),U=Number.isFinite(y)?Math.min(W,q,y):Math.min(W,q),G=Number.isFinite(y)?Math.max(W,q,y):Math.max(W,q),K=Math.max(G-U,Lo);return{baseHeight:U,depth:K,minHeight:U,maxHeight:U+K}}const Q=Number(F),_=Number.isFinite(Q)?Q-Do:0;return{baseHeight:_,depth:zn,minHeight:_,maxHeight:_+zn}}function De(v,F){const W=v.minHeight+v.depth*Co,q=Number(F),Q=Number.isFinite(q)?q:W;return Ie(Q,v.minHeight,v.maxHeight)}function fe(v,F){const W=F.maxHeight-F.minHeight;return!Number.isFinite(W)||W<=0?0:Ie((v-F.minHeight)/W,0,1)}function Le(){return!Number.isFinite(k.value)||!Number.isFinite(M.value)?null:{minHeight:Math.min(k.value,M.value),maxHeight:Math.max(k.value,M.value)}}function Ee(v,F){const W=$e(F)||$e("#0d4fa3");return new v.Cartesian3(W.red,W.green,W.blue)}function Ge(){var W;const v=$e(x.value),F=(W=u==null?void 0:u.config)==null?void 0:W.waterColor;!v||!F||(F.x=v.red,F.y=v.green,F.z=v.blue)}function Pe(v){return typeof v=="string"&&/^#[0-9a-f]{6}$/i.test(v)}function $e(v){return Pe(v)?{red:Number.parseInt(v.slice(1,3),16)/255,green:Number.parseInt(v.slice(3,5),16)/255,blue:Number.parseInt(v.slice(5,7),16)/255}:null}function Ie(v,F,W){return Math.max(F,Math.min(W,v))}function ze(v,F){if(!F)return null;if(v.scene.pickPositionSupported&&typeof v.scene.pickPosition=="function"){const q=v.scene.pickPosition(F);if(q)return q}const W=v.camera.getPickRay(F);return W?v.scene.globe.pick(W,v.scene):null}function Re(){var q,Q,_;if(!(u!=null&&u.config))return;const v=Number(c.value)||0,F=Number(w.value)||0,W=Number(S.value)||0;u.config.customParams&&(u.config.customParams.x=v,u.config.customParams.y=F,u.config.customParams.z=W),u.config.fluidParams&&(u.config.fluidParams.x=.9+W/10*.099,u.config.fluidParams.y=Math.min(1,F/50),u.config.fluidParams.z=v/5e4),Ge(),(_=(Q=(q=u.viewer)==null?void 0:q.scene)==null?void 0:Q.requestRender)==null||_.call(Q)}function qe(){var Q,_,y,U;if(!((Q=u==null?void 0:u.config)!=null&&Q.fluidParams))return;const v=Le(),F=Number(I.value);if(!v||!Number.isFinite(F))return;const W=Ie(F,v.minHeight,v.maxHeight);if(W!==F){I.value=W;return}const q=fe(W,v);typeof u.setInitialWaterLevel=="function"?u.setInitialWaterLevel(q):(u.config.fluidParams.w=q,(U=(y=(_=u.viewer)==null?void 0:_.scene)==null?void 0:y.requestRender)==null||U.call(y))}function Ze(v,F){var W,q;if(!o){const Q=v.scene;o={shadows:v.shadows,resolutionScale:v.resolutionScale,msaaSamples:Q.msaaSamples,depthTestAgainstTerrain:Q.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:Q.logarithmicDepthBuffer,highDynamicRange:Q.highDynamicRange,fogEnabled:(W=Q.fog)==null?void 0:W.enabled,showGroundAtmosphere:Q.globe.showGroundAtmosphere,skyAtmosphereShow:(q=Q.skyAtmosphere)==null?void 0:q.show,enableLighting:Q.globe.enableLighting}}v.shadows=!0,v.resolutionScale=1,v.scene.msaaSamples=4,v.scene.globe.depthTestAgainstTerrain=!0,v.scene.logarithmicDepthBuffer=!0,v.scene.highDynamicRange=!0,v.scene.fog&&(v.scene.fog.enabled=!0),v.scene.globe.showGroundAtmosphere=!0,v.scene.skyAtmosphere&&(v.scene.skyAtmosphere.show=!0),v.scene.globe.enableLighting=!0,!h&&i&&(h=i(F),v.scene.postProcessStages.add(h))}function Oe(v){if(!v||!o)return;const F=v.scene;v.shadows=o.shadows,v.resolutionScale=o.resolutionScale,o.msaaSamples!==void 0&&(F.msaaSamples=o.msaaSamples),F.globe.depthTestAgainstTerrain=o.depthTestAgainstTerrain,F.logarithmicDepthBuffer=o.logarithmicDepthBuffer,F.highDynamicRange=o.highDynamicRange,F.fog&&o.fogEnabled!==void 0&&(F.fog.enabled=o.fogEnabled),F.globe.showGroundAtmosphere=o.showGroundAtmosphere,F.skyAtmosphere&&o.skyAtmosphereShow!==void 0&&(F.skyAtmosphere.show=o.skyAtmosphereShow),F.globe.enableLighting=o.enableLighting,o=null}function je(){He(!1),m.success("水体流体已清除。")}function ke(){d&&(d.destroy(),d=null),C.value=!1}function Be(){if(u){try{u.destroy()}catch{}u=null,D.value=!1}}function He(v){var W,q,Q;const F=(W=a.getViewer)==null?void 0:W.call(a);if(l+=1,ke(),Be(),g.value=null,P.value=null,I.value=null,k.value=null,M.value=null,F&&h){try{F.scene.postProcessStages.remove(h)}catch{}h=null}v&&F&&Oe(F),(Q=(q=F==null?void 0:F.scene)==null?void 0:q.requestRender)==null||Q.call(q)}function V(){He(!0),p("close")}return t({startPickHeightMap:Z,clearFluid:je}),(v,F)=>e.headless?pe("",!0):(ee(),se("div",So,[E("div",_o,[E("div",{class:"panel-head"},[F[0]||(F[0]=E("span",{class:"panel-title"},"水体流体",-1)),E("button",{class:"panel-close",title:"关闭",onClick:V}," × ")]),E("div",wo,[E("button",{class:Ae(["action-btn primary",{active:C.value}]),onClick:Z},me(C.value?"等待选点":"捕捉高度图"),3),E("button",{class:"action-btn",disabled:!D.value&&!C.value,onClick:je}," 清除 ",8,To)]),r.value?(ee(),se("div",Mo,me(r.value),1)):pe("",!0),Te(un,{class:"param-list",title:"Fluid Parameters",controls:A.value,onChange:X},null,8,["controls"])])]))}},Eo=st(Ao,[["__scopeId","data-v-61fac667"]]),Ro=`
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
`+Ro).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  float cDepth = smoothstep( 0.0, -2.0, vCWorld.y );
  float caus = causticX( vCWorld.xz * 0.06 );
  caus += causticX( vCWorld.xz * 0.13 + 40.0 ) * 0.6;
  totalEmissiveRadiance += vec3( 0.45, 0.85, 0.8 ) * caus * cDepth * uCaustic;`)}}const ko=`
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
`,Io=`
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
`,zo=`
  varying vec3 vWorldPos;

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Oo=`
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
`;function Bo(e=256){const t=new Float32Array(e*e);for(let M=0;M<e*e;M++)t[M]=Math.random();const n=(M,C)=>{const D=new Float32Array(e*e);for(let g=0;g<e;g++)for(let P=0;P<e;P++){let L=0,i=0;for(let d=-C;d<=C;d++)for(let u=-C;u<=C;u++)L+=M[(g+d+e)%e*e+(P+u+e)%e],i++;D[g*e+P]=L/i}return D},a=n(t,4),p=n(t,1),m=new Float32Array(e*e);for(let M=0;M<e*e;M++)m[M]=a[M]*.7+p[M]*.3;const c=document.createElement("canvas");c.width=c.height=e;const w=c.getContext("2d"),S=w.createImageData(e,e),x=(M,C)=>m[(C+e)%e*e+(M+e)%e],I=3;for(let M=0;M<e;M++)for(let C=0;C<e;C++){const D=(x(C-1,M)-x(C+1,M))*I,g=(x(C,M-1)-x(C,M+1))*I,P=Math.hypot(D,g,1),L=(M*e+C)*4;S.data[L]=(D/P*.5+.5)*255,S.data[L+1]=(g/P*.5+.5)*255,S.data[L+2]=(1/P*.5+.5)*255,S.data[L+3]=255}w.putImageData(S,0,0);const k=new sn(c);return k.wrapS=k.wrapT=ln,k.colorSpace=ca,k}function No(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#d8c79b",t.fillRect(0,0,512,512);for(let a=0;a<12e3;a++){const p=170+Math.random()*70|0;t.fillStyle=`rgba(${p},${p-22},${p-65},0.22)`,t.fillRect(Math.random()*512,Math.random()*512,1.6,1.6)}for(let a=0;a<26;a++){const p=60+Math.random()*40|0,m=90+Math.random()*50|0,c=70+Math.random()*40|0;t.fillStyle=`rgba(${p},${m},${c},0.30)`,t.beginPath(),t.ellipse(Math.random()*512,Math.random()*512,8+Math.random()*26,6+Math.random()*20,Math.random()*6,0,7),t.fill()}const n=new sn(e);return n.wrapS=n.wrapT=ln,n.repeat.set(10,10),n.colorSpace=Ra,n}function Ho(e=256){const t=(x,I)=>{const k=new Float32Array(e*e);for(let M=0;M<e;M++)for(let C=0;C<e;C++){let D=0,g=0;for(let P=-I;P<=I;P++)for(let L=-I;L<=I;L++)D+=x[(M+P+e)%e*e+(C+L+e)%e],g++;k[M*e+C]=D/g}return k},n=()=>{const x=new Float32Array(e*e);for(let g=0;g<e*e;g++)x[g]=Math.random();const I=t(x,3),k=t(x,1),M=new Float32Array(e*e);let C=1e9,D=-1e9;for(let g=0;g<e*e;g++)M[g]=I[g]*.65+k[g]*.35,C=Math.min(C,M[g]),D=Math.max(D,M[g]);for(let g=0;g<e*e;g++)M[g]=(M[g]-C)/(D-C);return M},a=n(),p=n(),m=document.createElement("canvas");m.width=m.height=e;const c=m.getContext("2d"),w=c.createImageData(e,e);for(let x=0;x<e*e;x++){const I=x*4;w.data[I]=a[x]*255,w.data[I+1]=p[x]*255,w.data[I+2]=0,w.data[I+3]=255}c.putImageData(w,0,0);const S=new sn(m);return S.wrapS=S.wrapT=ln,S.colorSpace=ca,S.minFilter=Dn,S.magFilter=Dn,S.generateMipmaps=!1,S}function Wo(e={}){const{onReady:t,onError:n,onFpsUpdate:a}=e,p=J(!1),m=J(0);let c=null,w=null,S=null,x=null,I=null,k=null,M=null,C=null,D=null,g=null,P=null,L=null,i=null;const d=new Qe;let u=null,h=null,o=null;const l=new ka;let r=0,f=0;const b={value:0},A={value:.9},R={value:0},O={value:new Qe};let X=3,B=-100;const Z=.62,ie={};let te=!0,ne=null;const Y=new Ln,de={elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2};async function be(V){if(!V){n==null||n(new Error("Container element not provided"));return}if(!p.value){k=V;try{S=new Ia({antialias:!0,alpha:!0}),S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.setSize(k.clientWidth,k.clientHeight),S.toneMapping=za,S.toneMappingExposure=Z,S.setClearColor(0,0),k.appendChild(S.domElement),c=new Ln,w=new Oa(55,k.clientWidth/k.clientHeight,1,2e4),w.position.set(0,55,280),Se(),De(),fe(),xe(),$(),j(),N(),he(),Pe(),$e(),qe(),p.value=!0,t==null||t()}catch(v){n==null||n(v)}}}function Se(){L=new Ba,L.scale.setScalar(12e3),c.add(L);const V=L.material.uniforms;V.turbidity.value=6,V.rayleigh.value=1.6,V.mieCoefficient.value=.005,V.mieDirectionalG.value=.8}function xe(){i=new $a(16774368,2.6),c.add(i),c.add(new qa(13627391,2117738,.7))}function $(){const V=new Fn(1600,1600,200,200);V.rotateX(-Math.PI/2);const v=V.attributes.position;for(let W=0;W<v.count;W++){const q=v.getX(W),Q=v.getZ(W);let y=-34+At.clamp((Q+800)/1600,0,1)*44;y+=Math.sin(q*.012)*Math.cos(Q*.014)*3.5,y+=Math.sin(q*.06+Q*.05)*1.1,y+=(Math.random()-.5)*.6,v.setY(W,y)}V.computeVertexNormals();const F=new Pn({map:No(),roughness:1,metalness:0});On(F,{uTime:b,uCaustic:A}),c.add(new St(V,F))}function j(){const V=new ja(1,0),v=[8023642,7035722,11887946,13598051,9083483];for(let F=0;F<30;F++){const W=new Pn({color:v[F%v.length],roughness:.9,flatShading:!0});On(W,{uTime:b,uCaustic:A});const q=new St(V,W),Q=3+Math.random()*9;q.scale.set(Q,Q*(.5+Math.random()*.6),Q),q.position.set((Math.random()-.5)*1100,-24+Math.random()*22,-300+Math.random()*900),q.rotation.set(Math.random(),Math.random(),Math.random()),c.add(q)}}function N(){P=new Xa(S),g=new Va(256,{generateMipmaps:!0,minFilter:Ka}),D=new Ya(1,2e4,g),D.position.set(0,4,0),c.add(D);const V=new Kt;S.getDrawingBufferSize(V),C=new Za(V.x,V.y),C.depthTexture=new Ja(V.x,V.y),C.depthTexture.type=Qa,C.depthTexture.format=ei}function he(){const V=new Kt;S.getDrawingBufferSize(V);const v=Bo(256),F={uTime:b,tRefraction:{value:C.texture},tDepth:{value:C.depthTexture},tEnv:{value:g.texture},normalMap:{value:v},resolution:{value:V.clone()},cameraNear:{value:w.near},cameraFar:{value:w.far},invProjection:{value:new An},camWorld:{value:new An},sunDirection:{value:new Qe},sunColor:{value:new xt(16774106)},waterColor:{value:new xt(de.waterColor)},absorption:{value:new Qe(.45,.09,.05)},foamColor:{value:new xt(15925247)},clarity:{value:de.clarity},foamWidth:{value:de.foamWidth},waveHeight:{value:de.waveHeight},reflection:{value:de.reflection}};M=new St(new Fn(16e3,16e3,384,384),new Cn({uniforms:F,vertexShader:ko,fragmentShader:Io})),M.rotation.x=-Math.PI/2,c.add(M)}function De(){const V=new Cn({side:Na,transparent:!0,depthWrite:!1,uniforms:{uTime:b,uNoise:{value:Ho(256)},sunDirection:{value:new Qe},sunColor:{value:new xt(16773341)},skyTint:{value:new xt(7315406)},uCoverage:{value:de.cloudCoverage},uFlash:R,uFlashPos:O},vertexShader:zo,fragmentShader:Oo});u=new St(new Ha(8e3,32,16),V),u.renderOrder=2,c.add(u)}function fe(){o=new Wa({color:14478335,transparent:!0,opacity:0,blending:Ua,depthWrite:!1,depthTest:!1}),h=new Ga,h.visible=!1,c.add(h)}function Le(V,v,F,W,q,Q){const _=[];let y=V,U=v;const G=Math.max(5,Math.floor((F-W)/80));for(let ae=0;ae<=G;ae++){const ye=ae/G;_.push(new Qe(y,F+(W-F)*ye,U)),y+=(Math.random()-.5)*q,U+=(Math.random()-.5)*q}const K=new ni(new ai(_),G*4,Q,5,!1),oe=new St(K,o);return oe.renderOrder=3,h.add(oe),_}function Ee(){for(const W of h.children)W.geometry.dispose();h.clear();const V=1+Math.floor(Math.random()*3);let v=0,F=0;for(let W=0;W<V;W++){const q=(Math.random()-.5)*5e3,Q=-(1e3+Math.random()*4500);W===0&&(v=q,F=Q);const _=Le(q,Q,1180,18,110,14),y=2+Math.floor(Math.random()*3);for(let U=0;U<y;U++){const G=_[2+Math.floor(Math.random()*(_.length-4))];Le(G.x,G.z,G.y,G.y-(160+Math.random()*420),130,7)}}O.value.set(v,1100,F)}function Ge(){if(!de.lightningEnabled){R.value=0,h.visible=!1,S.toneMappingExposure=Z;return}const V=b.value;V>=X&&(B=V,Ee(),X=V+de.lightningInterval*(.4+Math.random()*.8));const v=V-B;let F=0;v>=0&&v<.5&&(F=Math.max(0,Math.exp(-v*5.5)*(.5+.5*Math.sin(v*60)))),R.value=F*2.4,h.visible=F>.1,o.opacity=Math.min(1,F*1.7),S.toneMappingExposure=Z+F*.75}function Pe(){x=new ti(w,S.domElement),x.target.set(0,130,-400),x.maxPolarAngle=Math.PI*.49,x.minDistance=30,x.maxDistance=2e3,x.enableDamping=!0}function $e(){window.addEventListener("keydown",Ie),window.addEventListener("keyup",ze)}function Ie(V){const v=V.target&&V.target.tagName;v==="INPUT"||v==="TEXTAREA"||(ie[V.code]=!0)}function ze(V){ie[V.code]=!1}function Re(V){const v=(ie.ShiftLeft||ie.ShiftRight?240:95)*V,F=new Qe,W=new Qe,q=new Qe;w.getWorldDirection(F).normalize(),W.crossVectors(F,w.up).normalize(),q.set(0,0,0),ie.KeyW&&q.add(F),ie.KeyS&&q.addScaledVector(F,-1),ie.KeyD&&q.add(W),ie.KeyA&&q.addScaledVector(W,-1),ie.KeyE&&(q.y+=1),ie.KeyQ&&(q.y-=1),q.lengthSq()!==0&&(q.normalize().multiplyScalar(v),w.position.add(q),x.target.add(q),w.position.y<2.5&&(w.position.y=2.5))}function qe(){const V=At.degToRad(90-de.elevation),v=At.degToRad(de.azimuth);if(d.setFromSphericalCoords(1,V,v),L.material.uniforms.sunPosition.value.copy(d),i.position.copy(d).multiplyScalar(1e3),M&&M.material.uniforms.sunDirection.value.copy(d).normalize(),u){u.material.uniforms.sunDirection.value.copy(d).normalize();const F=At.clamp(1-de.elevation/28,0,1);u.material.uniforms.sunColor.value.setRGB(1,.95-.22*F,.86-.48*F)}c.remove(L),Y.add(L),ne&&ne.dispose(),ne=P.fromScene(Y),c.environment=ne.texture,Y.remove(L),c.add(L),te=!0}function Ze(){I=requestAnimationFrame(Ze);const V=l.getDelta();b.value+=V,A.value=de.causticStrength,Re(V),Ge(),x.update(),w.updateMatrixWorld(),M.material.uniforms.invProjection.value.copy(w.projectionMatrixInverse),M.material.uniforms.camWorld.value.copy(w.matrixWorld),M.visible=!1,te&&(D.update(S,c),te=!1),u.visible=!1;const v=h.visible;h.visible=!1,S.setRenderTarget(C),S.render(c,w),S.setRenderTarget(null),u.visible=!0,h.visible=v,M.visible=!0,S.render(c,w),r++;const F=performance.now();F-f>=1e3&&(m.value=Math.round(r*1e3/(F-f)),a==null||a(m.value),r=0,f=F)}function Oe(){if(!w||!S||!k)return;const V=k.clientWidth,v=k.clientHeight;w.aspect=V/v,w.updateProjectionMatrix(),S.setSize(V,v);const F=new Kt;S.getDrawingBufferSize(F),C.setSize(F.x,F.y),M.material.uniforms.resolution.value.copy(F)}function je(){I||(l.start(),Ze())}function ke(){I&&(cancelAnimationFrame(I),I=null)}function Be(V){const v={...de};Object.assign(de,V),(V.elevation!==v.elevation||V.azimuth!==v.azimuth)&&qe(),M&&(V.clarity!==v.clarity&&(M.material.uniforms.clarity.value=V.clarity),V.waveHeight!==v.waveHeight&&(M.material.uniforms.waveHeight.value=V.waveHeight),V.foamWidth!==v.foamWidth&&(M.material.uniforms.foamWidth.value=V.foamWidth),V.reflection!==v.reflection&&(M.material.uniforms.reflection.value=V.reflection),V.waterColor!==v.waterColor&&M.material.uniforms.waterColor.value.set(V.waterColor)),V.causticStrength!==v.causticStrength&&(A.value=V.causticStrength),V.cloudCoverage!==v.cloudCoverage&&u&&(u.material.uniforms.uCoverage.value=V.cloudCoverage)}function He(){ke(),window.removeEventListener("keydown",Ie),window.removeEventListener("keyup",ze),S&&(S.dispose(),k==null||k.removeChild(S.domElement)),c==null||c.traverse(V=>{V.geometry&&V.geometry.dispose(),V.material&&(Array.isArray(V.material)?V.material.forEach(v=>v.dispose()):V.material.dispose())}),C==null||C.dispose(),g==null||g.dispose(),ne==null||ne.dispose(),P==null||P.dispose(),c=null,w=null,S=null,x=null,M=null,L=null,i=null,u=null,h=null,o=null,p.value=!1}return Wt(()=>{He()}),{isReady:p,fps:m,init:be,start:je,pause:ke,dispose:He,handleResize:Oe,updateParams:Be}}const Uo={__name:"ShallowWaterOverlay",props:{visible:{type:Boolean,default:!1},elevation:{type:Number,default:30},azimuth:{type:Number,default:150},clarity:{type:Number,default:.085},causticStrength:{type:Number,default:.9},waterColor:{type:String,default:"#2bb3c4"},waveHeight:{type:Number,default:.5},foamWidth:{type:Number,default:2.4},reflection:{type:Number,default:.38},cloudCoverage:{type:Number,default:.58},lightningEnabled:{type:Boolean,default:!0},lightningInterval:{type:Number,default:2}},emits:["ready","error","fps-update"],setup(e,{expose:t,emit:n}){const a=e,p=n,m=J(null),{isReady:c,fps:w,init:S,start:x,pause:I,dispose:k,handleResize:M,updateParams:C}=Wo({onReady:()=>p("ready"),onError:L=>p("error",L),onFpsUpdate:L=>p("fps-update",L)});we(()=>a.visible,async L=>{L?(await D(),x()):I()}),we(()=>[a.elevation,a.azimuth,a.clarity,a.causticStrength,a.waterColor,a.waveHeight,a.foamWidth,a.reflection,a.cloudCoverage,a.lightningEnabled,a.lightningInterval],()=>{g()});async function D(){!m.value||c.value||(await S(m.value),g())}function g(){C({elevation:a.elevation,azimuth:a.azimuth,clarity:a.clarity,causticStrength:a.causticStrength,waterColor:a.waterColor,waveHeight:a.waveHeight,foamWidth:a.foamWidth,reflection:a.reflection,cloudCoverage:a.cloudCoverage,lightningEnabled:a.lightningEnabled,lightningInterval:a.lightningInterval})}function P(){M()}return rn(()=>{window.addEventListener("resize",P),a.visible&&D()}),Wt(()=>{window.removeEventListener("resize",P),k()}),t({isReady:c,fps:w,start:x,pause:I}),(L,i)=>Ye((ee(),se("div",{ref_key:"canvasContainerRef",ref:m,class:"shallow-water-overlay"},null,512)),[[ut,e.visible]])}},Go=st(Uo,[["__scopeId","data-v-e9c0d469"]]),dn="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",$o=`${dn}Cesium.js`,qo=`${dn}Widgets/widgets.css`;async function jo({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=dn),await Vo(qo,"cesium-widgets-style"),await Xo($o,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Bt(t,e),t}function Bt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function Xo(e,t){return new Promise((n,a)=>{const p=document.getElementById(t);if(p){if(p.getAttribute("data-loaded")==="true"){n();return}p.addEventListener("load",()=>n(),{once:!0}),p.addEventListener("error",()=>a(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const m=document.createElement("script");m.id=t,m.src=e,m.async=!0,m.onload=()=>{m.setAttribute("data-loaded","true"),n()},m.onerror=()=>a(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(m)})}function Vo(e,t){return new Promise((n,a)=>{if(document.getElementById(t)){n();return}const m=document.createElement("link");m.id=t,m.rel="stylesheet",m.href=e,m.onload=()=>n(),m.onerror=()=>a(new Error(`样式加载失败: ${e}`)),document.head.appendChild(m)})}const Ko="Asia/Shanghai",Yo="UTC+8",Zo=new Intl.DateTimeFormat("zh-CN",{timeZone:Ko,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Jo(e,t){var n,a,p,m,c,w,S;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...x)=>es(e,t,...x),e.animation.viewModel.timeFormatter=(...x)=>ts(e,t,...x)),e.timeline){const x=(...I)=>ns(e,t,...I);e.timeline.makeLabel=x,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=x),(p=(a=e.timeline).updateFromClock)==null||p.call(a),(c=(m=e.timeline).zoomTo)==null||c.call(m,e.clock.startTime,e.clock.stopTime)}(S=(w=e.scene).requestRender)==null||S.call(w)}}function hn(e,t,...n){var w;const a=n.find(Qo)||((w=e==null?void 0:e.clock)==null?void 0:w.currentTime);if(!a)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const p=t.JulianDate.toDate(a),m=Zo.formatToParts(p),c=Object.fromEntries(m.filter(({type:S})=>S!=="literal").map(({type:S,value:x})=>[S,x]));return{year:c.year||"0000",month:c.month||"01",day:c.day||"01",hour:c.hour||"00",minute:c.minute||"00",second:c.second||"00"}}function Qo(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function es(e,t,...n){const{year:a,month:p,day:m}=hn(e,t,...n);return`${a}-${p}-${m}`}function ts(e,t,...n){const{hour:a,minute:p,second:m}=hn(e,t,...n);return`${a}:${p}:${m} ${Yo}`}function ns(e,t,...n){const{month:a,day:p,hour:m,minute:c}=hn(e,t,...n);return`${a}-${p} ${m}:${c}`}function as({getViewer:e}){let t=null,n=null;function a(){var w;const c=e==null?void 0:e();if(c&&((w=c._cesiumWidget)!=null&&w._creditContainer&&(c._cesiumWidget._creditContainer.style.display="none"),p(),t=setInterval(()=>{const S=document.querySelector(".cesium-credit-container");S&&S.innerHTML.length>0&&(S.innerHTML="",S.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const S=document.createElement("style");S.id="cesium-credit-override",S.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(S),n=S}}function p(){var S;const c=e==null?void 0:e();if(!c)return;(S=c._cesiumWidget)!=null&&S._creditContainer&&(c._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",c._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(x=>{x.style.cssText="display: none !important; visibility: hidden !important;",x.innerHTML=""}),c.scene&&c.scene.frameState&&c.scene.frameState.creditDisplay&&(c.scene.frameState.creditDisplay.hasCredits=()=>!1,c.scene.frameState.creditDisplay.destroy=()=>{})}function m(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:a,cleanupCreditHider:m}}const Zt="经度: --, 纬度: --, 海拔: --米";function is({getViewer:e,getCesium:t,onCoordinatePick:n}){let a=null,p=null,m=null;const c=J("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function w(){const C=e==null?void 0:e(),D=t==null?void 0:t();!C||!D||(M(),p=C.scene.canvas,a=new D.ScreenSpaceEventHandler(p),m=()=>{c.value=Zt},p.addEventListener("mouseleave",m),a.setInputAction(g=>{S(g.endPosition,C,D)},D.ScreenSpaceEventType.MOUSE_MOVE),a.setInputAction(g=>{const P=g.endPosition,L=g.startPosition;if(!D.defined(C.terrainProvider))return;const i=C.scene.globe.ellipsoid;if(!C.camera.pickEllipsoid(L,i)){const u=C.camera;u.rotate(D.Cartesian3.UNIT_X,-.002*(P.y-L.y)),u.rotate(D.Cartesian3.UNIT_Y,-.002*(P.x-L.x))}},D.ScreenSpaceEventType.RIGHT_DRAG),a.setInputAction(()=>{},D.ScreenSpaceEventType.RIGHT_DOWN),a.setInputAction(()=>{},D.ScreenSpaceEventType.RIGHT_UP))}function S(C,D,g){const P=x(C,D,g);if(!P){c.value=Zt;return}const L=g.Cartographic.fromCartesian(P);if(!L||!Number.isFinite(L.longitude)||!Number.isFinite(L.latitude)){c.value=Zt;return}const i=g.Math.toDegrees(L.longitude).toFixed(6),d=g.Math.toDegrees(L.latitude).toFixed(6),u=(Number.isFinite(L.height)?L.height:0).toFixed(2);c.value=`经度: ${i}, 纬度: ${d}, 海拔: ${u}米`,typeof n=="function"&&n({lng:Number(i),lat:Number(d),height:Number(u)})}function x(C,D,g){if(!C)return null;const P=D.scene,L=I(C,P,g);if(L)return L;const i=D.camera.getPickRay(C);if(i){const u=P.globe.pick(i,P);if(k(u))return u}const d=D.camera.pickEllipsoid(C,P.globe.ellipsoid);return k(d)?d:null}function I(C,D,g){if(!D.pickPositionSupported||typeof D.pickPosition!="function")return null;const P=typeof D.pick=="function"?D.pick(C):null;if(!g.defined(P))return null;const L=D.pickPosition(C);return k(L)?L:null}function k(C){return!!C&&Number.isFinite(C.x)&&Number.isFinite(C.y)&&Number.isFinite(C.z)}function M(){m&&p&&(p.removeEventListener("mouseleave",m),m=null),p=null,a&&(a.destroy(),a=null)}return{coordinateDisplay:c,setupInteractions:w,cleanupInteractions:M}}function Bn(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function rs(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function pt(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function Dt(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Nn(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:a,Resource:p,HeightmapTerrainData:m,Rectangle:c,TileAvailability:w,CustomHeightmapTerrainProvider:S}=e;function x(C,D,g,P,L,i){const d=C.tileXYToRectangle(g,P,L);return t(c.intersection(d,D,i))}function I(C){const D=[[[0,0,1,0]]],g=new w(C.tilingScheme,19);for(let P=0;P<D.length;P++){const L=D[P];for(let i=0;i<L.length;i++){const d=L[i];g.addAvailableTileRange(P,d[0],d[1],d[2],d[3])}}return g}function k(C,D,g,P,L){const i=new m({buffer:C._transformBuffer(D),width:C._width,height:C._height,childTileMask:C._getChildTileMask(P,L,g),structure:C._terrainDataStructure});return i._skirtHeight=6e3,C.availability.addAvailableTileRange(g,P,L,P,L),i}class M extends S{constructor(D={}){if(super({...D,ellipsoid:a.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(D.url))throw new n("options.url is required.");this._dataType=D.dataType??"int16",this._url=D.url,this._subdomains=D.subdomains,this._token=D.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=I(this)}get availability(){return this._availability}requestTileGeometry(D,g,P,L){if(P>=this._bottomLevel)return Promise.reject(new Error(`Level ${P} is outside supported range.`));if(P<this._topLevel)return Promise.resolve(new m({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(D,g,P),structure:this._terrainDataStructure}));let i=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const u=this._subdomains[(D+g)%this._subdomains.length];i=i.replace("{s}",u)}i=i.replace("{token}",this._token).replace("{x}",D).replace("{y}",g).replace("{z}",P+1);const d=p.fetchArrayBuffer({url:i,request:L});if(d)return d.then(u=>u.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):ii.inflate(u)).then(u=>k(this,u,P,D,g))}getTileDataAvailable(D,g,P){return P<this._bottomLevel}_transformBuffer(D){let g=2;this._dataType==="float"&&(g=4);const P=D;if(P.length!==22500*g)return null;const L=new ArrayBuffer(g),i=new DataView(L),d=this._width,u=this._height,h=new Uint8Array(d*u*4);for(let o=0;o<u;o++)for(let l=0;l<d;l++){const r=Math.floor(149*o/(u-1)),f=Math.floor(149*l/(d-1)),b=g*(150*r+f);let A;g===4?(i.setInt8(0,P[b]),i.setInt8(1,P[b+1]),i.setInt8(2,P[b+2]),i.setInt8(3,P[b+3]),A=i.getFloat32(0,!0)):A=P[b]+256*P[b+1],(A>1e4||A<-2e3)&&(A=0);const R=(A+1e3)/.001,O=4*(o*d+l);h[O]=R/65536,h[O+1]=(R-256*h[O]*256)/256,h[O+2]=R-256*h[O]*256-256*h[O+1],h[O+3]=255}return h}_getVHeightBuffer(){let D=this._vHeightBuffer;if(!t(D)){D=new Uint8ClampedArray(this._width*this._height*4);for(let g=0;g<this._width*this._height*4;)D[g++]=15,D[g++]=66,D[g++]=64,D[g++]=255;this._vHeightBuffer=D}return D}_getChildTileMask(D,g,P){const L=new c,i=this._tilingScheme,d=this._rectangles,u=i.tileXYToRectangle(D,g,P);let h=0;for(let o=0;o<d.length&&h!==15;o++){const l=d[o];if(l.maxLevel<=P)continue;const r=l.rectangle,f=c.intersection(r,u,L);t(f)&&(x(i,r,2*D,2*g,P+1,L)&&(h|=4),x(i,r,2*D+1,2*g,P+1,L)&&(h|=8),x(i,r,2*D,2*g+1,P+1,L)&&(h|=1),x(i,r,2*D+1,2*g+1,P+1,L)&&(h|=2))}return h}}return M}function os(e){if(!e)throw new Error("Cesium is required to create ArcGISTerrainProvider.");const{TileAvailability:t}=e;class n{constructor(m){this._inner=m,this._availability=null,this._initAvailability()}_initAvailability(){const m=this._inner.tilingScheme;if(!m)return;const c=this._inner.maximumLevel??15;this._availability=new t(m,c);for(let w=0;w<=c;w++){const S=1<<w;this._availability.addAvailableTileRange(w,0,0,S-1,S-1)}}get availability(){return this._availability||this._initAvailability(),this._availability}get tilingScheme(){return this._inner.tilingScheme}get maximumLevel(){return this._inner.maximumLevel}get requestWaterMask(){return this._inner.requestWaterMask}get requestVertexNormals(){return this._inner.requestVertexNormals}get ready(){return this._inner.ready}get readyPromise(){return this._inner.readyPromise}get errorEvent(){return this._inner.errorEvent}get credit(){return this._inner.credit}getTileDataAvailable(m,c,w){const S=this._inner.maximumLevel??15;return w<=S}requestTileGeometry(m,c,w,S){return this._inner.requestTileGeometry(m,c,w,S)}getLevelMaximumGeometricError(m){return this._inner.getLevelMaximumGeometricError(m)}loadTileDataAvailability(m,c,w){if(typeof this._inner.loadTileDataAvailability=="function")return this._inner.loadTileDataAvailability(m,c,w)}}async function a(p){const m=await e.ArcGISTiledElevationTerrainProvider.fromUrl(p);return new n(m)}return n.fromUrl=a,n}function ss({getViewer:e,getCesium:t,activeBasemap:n,applyBasemap:a,resolvePresetLayerIds:p,message:m,validationTimeoutMs:c=5e3,circuitBreakThreshold:w=3}){const S=new Map,x=new Set,I={value:!1};let k=null,M=[],C=[];function D(h,o={}){return h?x.has(h)&&!o.forceReload?(I.value=!0,!1):a(h,o)?(g(h),!0):(P(h),!1):!1}function g(h){var R,O;i();const o=e==null?void 0:e();if(!(o!=null&&o.imageryLayers))return;const l=p(h),r=[];for(let X=0;X<o.imageryLayers.length;X++){const B=o.imageryLayers.get(X);(R=B==null?void 0:B.imageryProvider)!=null&&R._descriptorId&&l.includes(B.imageryProvider._descriptorId)&&r.push(B)}if(!r.length)return;M=r;let f=!1;const b=()=>{f=!0,i(),S.delete(h),x.has(h)&&(x.delete(h),I.value=x.size>0)},A=X=>{f||(P(h),i())};for(const X of M){const B=X.imageryProvider;if(B!=null&&B.errorEvent&&(B.errorEvent.addEventListener(A),C.push(()=>B.errorEvent.removeEventListener(A))),B!=null&&B.ready){b();return}(O=B==null?void 0:B.readyPromise)!=null&&O.then&&B.readyPromise.then(b).catch(A)}k=setTimeout(()=>{f||P(h)},c)}function P(h){const o=(S.get(h)||0)+1;S.set(h,o),o>=w&&(x.add(h),I.value=!0,L(h))}function L(h){var l,r,f,b,A;const o="custom_China_Blender_preset_2";if(h===o){const R="imagery_tianditu_preset";x.has(R)?(r=m==null?void 0:m.error)==null||r.call(m,"所有底图均加载失败，请检查网络",{closable:!0}):((l=m==null?void 0:m.warning)==null||l.call(m,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=R);return}if(!x.has(o))(f=m==null?void 0:m.warning)==null||f.call(m,"底图加载失败，已降级到默认底图",{closable:!0}),n.value=o;else{const R="imagery_tianditu_preset";x.has(R)?(A=m==null?void 0:m.error)==null||A.call(m,"所有底图均加载失败，请检查网络",{closable:!0}):((b=m==null?void 0:m.warning)==null||b.call(m,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=R)}}function i(){k&&(clearTimeout(k),k=null);for(const h of C)try{h()}catch{}C=[],M=[]}function d(){S.clear(),x.clear(),I.value=!1,i()}function u(){i(),S.clear(),x.clear(),I.value=!1}return{switchBasemap:D,resetCircuitBreaker:d,isCircuitOpen:I,cleanup:u}}const _t=["0","1","2","3","4","5","6","7"],wt="https://t{s}.tianditu.gov.cn/",ls="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",cs=96188,Lt="custom-xyz",Hn="webgis_custom_basemap_url",us="cesium_tdt_label_layer_visible",Wn="cesium_tdt_boundary_layer_visible",Un="cesium_tdt_text_label_layer_visible",Gn="cesium_osm_buildings_visible",$n="cesium_google_photorealistic_3d_tiles_visible";function ds(){return ri.map(e=>({...e,description:hs(e.value),source:"preset"}))}function hs(e){const t=Ct(e);if(!t.length)return"复合底图";const n=t.map(a=>{const p=cn(a);return p?p.name:a});return n.slice(0,3).join(" + ")+(n.length>3?" ...":"")}const qn=ds(),jn=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function fs({getViewer:e,getCesium:t,message:n,backendBaseUrl:a,tiandituToken:p,cesiumIonToken:m}){let c=null,w=null,S=null,x=null,I=0,k=null,M=null,C=0,D=0,g=[];const P=()=>Xn(p),L=()=>Xn(m),i=[],d=J([]),u=new Map,h=new Map,o=new Map,l=new Map,r="cesium_custom_xyz_basemap_url",f=J(En),b=J("tianditu"),A=J(Bn(Hn,"")||Bn(r,"")),R=pt(us,!1),O=J(pt(Wn,R??!1)),X=J(pt(Un,R??!1)),B=J(pt(Gn,!1)),Z=J(pt($n,!1)),ie=Me(()=>[...qn.map(s=>s.value!=="custom"?s:{...s,description:A.value?A.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!A.value}),...d.value]),te=ss({getViewer:e,getCesium:t,activeBasemap:f,applyBasemap:q,resolvePresetLayerIds:Ct,message:n}),ne=Me(()=>te.isCircuitOpen.value),Y=Me(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:O.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:X.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:B.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:Z.value}]);we(f,s=>{!(e!=null&&e())||!(t!=null&&t())||q(s)}),we(A,s=>{rs(Hn,s)}),we(b,async s=>{!(e!=null&&e())||!(t!=null&&t())||await _(s)}),we(O,s=>{Dt(Wn,s),Re()}),we(X,s=>{Dt(Un,s),Re()}),we(B,s=>{Dt(Gn,s),ke()}),we(Z,s=>{Dt($n,s),Be()});function de(){const s=t==null?void 0:t();if(!s)return[];u.clear(),h.clear();const T=qn.map(H=>{const le=new s.ProviderViewModel({name:H.label,tooltip:vs(H),category:"项目底图",iconUrl:Yn(ys(H.value),bs(H.value,H.label)),creationFunction:()=>j(H.value)});return u.set(H.value,le),h.set(le,H.value),le}),z=$();return d.value=z.map((H,le)=>{const ce=String((H==null?void 0:H.name)||`官方底图 ${le+1}`).trim(),_e=_s(ce,le);return u.set(_e,H),h.set(H,_e),{value:_e,label:`官方 · ${ce}`,description:String((H==null?void 0:H.tooltip)||ce),source:"official"}}),[...T,...z]}function be(){const s=t==null?void 0:t();return s?(o.clear(),l.clear(),jn.map(T=>{const z=new s.ProviderViewModel({name:T.label,tooltip:T.description||T.label,category:"项目地形",iconUrl:Yn(ms(T.value),ps(T.value)),creationFunction:()=>U(T.value)});return o.set(T.value,z),l.set(z,T.value),z})):[]}function Se(s=[]){return u.get(f.value)||s[0]}function xe(s=[]){return o.get(b.value)||s[0]}function $(){const s=t==null?void 0:t();if(typeof(s==null?void 0:s.createDefaultImageryProviderViewModels)!="function")return[];try{return s.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function j(s){return Ct(s).length>0?N(s):s==="google"?De():s===Lt?fe():he()}function N(s){const T=t==null?void 0:t();if(!T)return[];const z=Ct(s);if(!z.length)return he();const H=P(),le=A.value;return Si(T,z,{tiandituTk:H,customUrl:le})}function he(){const s=t==null?void 0:t();return[new s.UrlTemplateImageryProvider({url:`${wt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${P()}`,subdomains:_t,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:18})]}function De(){const s=t==null?void 0:t();return[new s.UrlTemplateImageryProvider({url:`${a}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:20})]}function fe(){const s=t==null?void 0:t(),T=Kn(A.value);return T.valid?[new s.UrlTemplateImageryProvider({url:T.url,subdomains:T.subdomains,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(T.message,{closable:!0}),he())}function Le(){const s=t==null?void 0:t();return new s.UrlTemplateImageryProvider({url:`${wt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${P()}`,subdomains:_t,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:10})}function Ee(){const s=t==null?void 0:t();return new s.UrlTemplateImageryProvider({url:`${wt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${P()}`,subdomains:_t,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:18})}function Ge(){var Ce,We,it,yt,bt;Pe();const s=t==null?void 0:t(),T=(We=(Ce=e==null?void 0:e())==null?void 0:Ce.baseLayerPicker)==null?void 0:We.viewModel;if(!T||!((it=s==null?void 0:s.knockout)!=null&&it.getObservable))return;const z=s.knockout.getObservable(T,"selectedImagery"),H=s.knockout.getObservable(T,"selectedTerrain"),le=[],ce=(yt=z==null?void 0:z.subscribe)==null?void 0:yt.call(z,ht=>{const Xe=h.get(ht);Xe&&(f.value!==Xe&&(f.value=Xe),ze())}),_e=(bt=H==null?void 0:H.subscribe)==null?void 0:bt.call(H,ht=>{const Xe=l.get(ht);Xe&&(b.value!==Xe&&(b.value=Xe),y(Xe))});ce&&le.push(ce),_e&&le.push(_e),g=le}function Pe(){g.forEach(s=>{var T;return(T=s==null?void 0:s.dispose)==null?void 0:T.call(s)}),g=[]}function $e(){return Re(),ke(),Be(),!0}function Ie(){const s=e==null?void 0:e();if(s!=null&&s.imageryLayers)for(;i.length;){const T=i.pop();try{s.imageryLayers.remove(T,!0)}catch{}}}function ze(){var s,T,z;Re(),ke(),Be(),(z=(T=(s=e==null?void 0:e())==null?void 0:s.scene)==null?void 0:T.requestRender)==null||z.call(T)}function Re(){var T,z;const s=e==null?void 0:e();!s||!(t!=null&&t())||(O.value?qe():Oe(),X.value?Ze():je(),(z=(T=s.scene).requestRender)==null||z.call(T))}function qe(){var T,z,H,le;const s=e==null?void 0:e();if(!(s!=null&&s.imageryLayers)||c)return c&&((z=(T=s==null?void 0:s.imageryLayers)==null?void 0:T.raiseToTop)==null||z.call(T,c)),c;try{return c=s.imageryLayers.addImageryProvider(Le()),(le=(H=s.imageryLayers).raiseToTop)==null||le.call(H,c),c}catch(ce){return n.error("天地图国界线图层加载失败",ce),null}}function Ze(){var T,z,H,le;const s=e==null?void 0:e();if(!(s!=null&&s.imageryLayers)||w)return w&&((z=(T=s==null?void 0:s.imageryLayers)==null?void 0:T.raiseToTop)==null||z.call(T,w)),w;try{return w=s.imageryLayers.addImageryProvider(Ee()),(le=(H=s.imageryLayers).raiseToTop)==null||le.call(H,w),w}catch(ce){return n.error("天地图文字标注图层加载失败",ce),null}}function Oe(){const s=e==null?void 0:e();if(!(!c||!(s!=null&&s.imageryLayers))){try{s.imageryLayers.remove(c,!0)}catch{}c=null}}function je(){const s=e==null?void 0:e();if(!(!w||!(s!=null&&s.imageryLayers))){try{s.imageryLayers.remove(w,!0)}catch{}w=null}}async function ke(){var T,z,H;const s=e==null?void 0:e();!((T=s==null?void 0:s.scene)!=null&&T.primitives)||!(t!=null&&t())||(B.value?await v():F(),(H=(z=s.scene).requestRender)==null||H.call(z))}async function Be(){var T,z,H;const s=e==null?void 0:e();!((T=s==null?void 0:s.scene)!=null&&T.primitives)||!(t!=null&&t())||(Z.value?await He():V(),(H=(z=s.scene).requestRender)==null||H.call(z))}async function He(){var H,le,ce;const s=e==null?void 0:e(),T=t==null?void 0:t();if(!((H=s==null?void 0:s.scene)!=null&&H.primitives))return null;if(k)return s.scene.globe.show=!1,k;if(M)return M;if(typeof(T==null?void 0:T.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),Z.value=!1,null;const z=++C;Bt(T,L()),M=T.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const _e=await M;return z!==C||!Z.value?(Vn(_e),null):(k=s.scene.primitives.add(_e),s.scene.globe.show=!1,s.scene.skyAtmosphere.show=!0,(ce=(le=s.scene).requestRender)==null||ce.call(le),k)}catch(_e){return z!==C||(Z.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",_e)),null}finally{z===C&&(M=null)}}function V(){var T,z,H;const s=e==null?void 0:e();if(C+=1,M=null,!k||!((T=s==null?void 0:s.scene)!=null&&T.primitives)){(z=s==null?void 0:s.scene)!=null&&z.globe&&(s.scene.globe.show=!0);return}try{s.scene.primitives.remove(k)}catch{}k=null,(H=s==null?void 0:s.scene)!=null&&H.globe&&(s.scene.globe.show=!0)}async function v(){var H,le,ce,_e;const s=e==null?void 0:e(),T=t==null?void 0:t();if(!((H=s==null?void 0:s.scene)!=null&&H.primitives)||S)return S;if(x)return x;if(typeof((le=T==null?void 0:T.Cesium3DTileset)==null?void 0:le.fromIonAssetId)!="function"&&typeof(T==null?void 0:T.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),B.value=!1,null;const z=++I;Bt(T,L()),await W(),x=gs(T,{maximumScreenSpaceError:8});try{const Ce=await x;return z!==I||!B.value?(Vn(Ce),null):(S=s.scene.primitives.add(Ce),(_e=(ce=s.scene).requestRender)==null||_e.call(ce),S)}catch(Ce){return z!==I||(B.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",Ce)),null}finally{z===I&&(x=null)}}function F(){var T,z,H;const s=e==null?void 0:e();if(I+=1,x=null,!(!S||!((T=s==null?void 0:s.scene)!=null&&T.primitives))){try{s.scene.primitives.remove(S)}catch{}S=null,(H=(z=s.scene).requestRender)==null||H.call(z)}}async function W(){if(b.value==="cesiumWorld")return!0;b.value="cesiumWorld";const s=await _("cesiumWorld");return s||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),s}function q(s,T={}){var ce,_e,Ce;const z=e==null?void 0:e();if(!z||!(t!=null&&t()))return!1;gi(),Ie();const H=(ce=z.baseLayerPicker)==null?void 0:ce.viewModel,le=u.get(s);if(H&&le){if(T.forceReload&&H.selectedImagery===le){const We=u.get(En)||u.get("tianditu");We&&We!==le&&(H.selectedImagery=We)}return H.selectedImagery!==le&&(H.selectedImagery=le),ze(),!0}try{return j(s).forEach(it=>{it&&i.push(z.imageryLayers.addImageryProvider(it))}),Re(),(Ce=(_e=z.scene).requestRender)==null||Ce.call(_e),!0}catch(We){return n.error("地图源切换失败",We),!1}}function Q(){return _(b.value)}async function _(s){var Ce,We,it,yt,bt,ht,Xe,mn,pn,gn,vn;const T=e==null?void 0:e(),z=t==null?void 0:t();if(!T||!z)return!1;const H=(Ce=T.baseLayerPicker)==null?void 0:Ce.viewModel,le=o.get(s);if(H&&le)return H.selectedTerrain!==le&&(H.selectedTerrain=le),y(s),(it=(We=T.scene).requestRender)==null||it.call(We),!0;const ce=++D;if(s==="ellipsoid")return T.terrainProvider=new z.EllipsoidTerrainProvider,y(s),(bt=(yt=T.scene).requestRender)==null||bt.call(yt),!0;if(s==="cesiumWorld")try{const Je=await G();return ce!==D?!1:(T.terrainProvider=Je,y(s),(Xe=(ht=T.scene).requestRender)==null||Xe.call(ht),!0)}catch(Je){return ce!==D||(T.terrainProvider=new z.EllipsoidTerrainProvider,y("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",Je)),!1}if(s==="arcgisWorld")try{const Je=await K();return ce!==D?!1:(T.terrainProvider=Je,y(s),(pn=(mn=T.scene).requestRender)==null||pn.call(mn),!0)}catch(Je){return ce!==D||(T.terrainProvider=new z.EllipsoidTerrainProvider,y("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",Je)),!1}const _e=Nn(z);try{return T.terrainProvider=new _e({url:`${wt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:_t,token:P()}),y(s),(vn=(gn=T.scene).requestRender)==null||vn.call(gn),!0}catch(Je){return T.terrainProvider=new z.EllipsoidTerrainProvider,y("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",Je),!1}}function y(s){var z;const T=e==null?void 0:e();(z=T==null?void 0:T.scene)!=null&&z.globe&&(T.scene.globe.depthTestAgainstTerrain=s!=="ellipsoid")}function U(s){const T=t==null?void 0:t();if(s==="ellipsoid")return new T.EllipsoidTerrainProvider;if(s==="cesiumWorld")return G().catch(H=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",H),oe(s,"ellipsoid"),new T.EllipsoidTerrainProvider));if(s==="arcgisWorld")return K().catch(H=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",H),oe(s,"ellipsoid"),new T.EllipsoidTerrainProvider));const z=Nn(T);try{return new z({url:`${wt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:_t,token:P()})}catch(H){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",H),new T.EllipsoidTerrainProvider}}async function G(){var z,H;const s=t==null?void 0:t();Bt(s,L());const T={requestWaterMask:!1,requestVertexNormals:!0};if(typeof s.createWorldTerrainAsync=="function")return s.createWorldTerrainAsync(T);if(typeof s.createWorldTerrain=="function")return s.createWorldTerrain(T);if(typeof((z=s.CesiumTerrainProvider)==null?void 0:z.fromIonAssetId)=="function")return s.CesiumTerrainProvider.fromIonAssetId(1,T);if((H=s.IonResource)!=null&&H.fromAssetId&&s.CesiumTerrainProvider){const le=await s.IonResource.fromAssetId(1);return new s.CesiumTerrainProvider({url:le,...T})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function K(){var z;const s=t==null?void 0:t();if(typeof((z=s==null?void 0:s.ArcGISTiledElevationTerrainProvider)==null?void 0:z.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return os(s).fromUrl(ls)}function oe(s,T){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{b.value===s&&(b.value=T)},0)}function ae({overlayId:s,value:T}){if(s==="tdt-boundaries"){O.value=!!T;return}if(s==="tdt-text-labels"){X.value=!!T;return}if(s==="cesium-osm-buildings"){B.value=!!T;return}s==="google-photorealistic-3d-tiles"&&(Z.value=!!T)}function ye({url:s}){const T=String(s||"").trim(),z=Kn(T);if(!z.valid){n.warning(z.message,{closable:!0});return}if(A.value=T,f.value===Lt){q(Lt,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}f.value=Lt,n.success("已切换到自定义 XYZ 图源")}function re(){Ie(),Oe(),je(),F(),V(),Pe()}return{activeBasemap:f,activeTerrain:b,customXyzBasemapUrl:A,basemapOptions:ie,terrainOptions:jn,overlayOptions:Y,createImageryProviderViewModels:de,createTerrainProviderViewModels:be,getSelectedImageryProviderViewModel:Se,getSelectedTerrainProviderViewModel:xe,bindLayerPickerStateSync:Ge,addBaseImageryLayers:$e,initCustomTerrain:Q,applyBasemap:q,applyTerrain:_,handleOverlayToggle:ae,handleCustomBasemapSubmit:ye,cleanupLayers:re,basemapSwitcher:te,basemapCircuitOpen:ne,resetCircuitBreaker:te.resetCircuitBreaker}}function ms(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function ps(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Xn(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Vn(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function gs(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const a=await e.Cesium3DTileset.fromIonAssetId(cs,t);return!a.style&&typeof e.Cesium3DTileStyle=="function"&&(a.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),a}return e.createOsmBuildingsAsync(t)}function vs(e){return e.value===Lt?`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`:e.description||e.label}function ys(e){const t=Ct(e);if(!t.length)return"#37d67a";const n=cn(t[0]);if(!n)return"#37d67a";const a=n.category;return a==="imagery"?"#5ea1ff":a==="vector"?"#37d67a":a==="terrain"?"#d0a449":a==="label"?"#a78bfa":a==="theme"?"#f59e0b":a==="custom"?"#f472b6":"#37d67a"}function bs(e,t){return String(t||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function Kn(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const a=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let p=[];return a?(p=xs(a[1],a[2]),n=n.replace(a[0],"{s}")):/\{s\}/i.test(n)&&(p=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:p}:Ss(n)?{valid:!0,message:"",url:n,subdomains:p}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:p}}function xs(e,t){const n=String(e||"").charCodeAt(0),a=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(a))return[];const p=n<=a?1:-1,m=[];for(let c=n;p>0?c<=a:c>=a;c+=p)m.push(String.fromCharCode(c));return m}function Ss(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function _s(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function Yn(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),a=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(a)}`}function ws({getViewer:e,getCesium:t,message:n}){function a(c){const w=e==null?void 0:e(),S=t==null?void 0:t();if(!w||!S)return;const x=typeof c=="number"?c:2;w.camera.flyTo({destination:S.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-S.Math.PI_OVER_TWO,roll:0},duration:x})}function p(){const c=e==null?void 0:e(),w=t==null?void 0:t();!c||!w||c.camera.flyTo({destination:w.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:w.Math.toRadians(0),pitch:w.Math.toRadians(-25),roll:0},duration:3})}async function m(){const c=e==null?void 0:e(),w=t==null?void 0:t();if(!(!c||!w))try{const S=await w.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");c.scene.primitives.add(S),c.flyTo(S,{duration:3,offset:new w.HeadingPitchRange(w.Math.toRadians(0),w.Math.toRadians(-25),S.boundingSphere.radius*2.5)})}catch(S){n.error(`加载模型失败: ${S}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:a,flyToEverest:p,loadCustomTileset:m}}const Ts="tileset.json";let kt=null;async function Zn(){if(kt)return kt;const[{decompressBuffer:e},{parseShpPartsToGeoJSON:t}]=await Promise.all([Nt(()=>import("./decompressFile-DiMYlfaO.js").then(n=>n.f),__vite__mapDeps([4,5]),import.meta.url),Nt(()=>import("./shpParser-lL3UcSdw.js").then(n=>n.s),__vite__mapDeps([6,5,7,2,3,8,9,10,11,12,13,14,15]),import.meta.url)]);return kt={decompressBuffer:e,parseShpPartsToGeoJSON:t},kt}function Jt(e){const t=e.lastIndexOf(".");return t===-1?"":e.slice(t+1).toLowerCase()}function lt(e,t,n,a){if(!(!e||!t||!n))try{a==="3dtiles"&&n.boundingSphere?e.flyTo(n,{duration:2,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-30),n.boundingSphere.radius*2)}):n.entities&&n.entities.values.length>0&&e.flyTo(n,{duration:2})}catch{}}function ft(e){return URL.createObjectURL(e)}function Ve(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function Ms({getViewer:e,getCesium:t,message:n}){const a=J([]),p=J(null);let m=0;async function c(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);try{const b=await l.GeoJsonDataSource.load(f,{stroke:l.Color.fromCssColorString("#3ddc84"),fill:l.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:l.Color.fromCssColorString("#3ddc84"),markerSize:24}),A=`geojson_${++m}`;b.name=o.name,await r.dataSources.add(b),lt(r,l,b,"geojson");const R={id:A,name:o.name,type:"geojson",entity:b,blobUrl:f};return a.value=[...a.value,R],n.success(`GeoJSON "${o.name}" 加载成功`),R}catch(b){throw Ve(f),b}}async function w(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);try{const b=await l.KmlDataSource.load(f,{camera:r.scene.camera,canvas:r.scene.canvas}),A=`kml_${++m}`;b.name=o.name,await r.dataSources.add(b),lt(r,l,b,"kml");const R={id:A,name:o.name,type:"kml",entity:b,blobUrl:f};return a.value=[...a.value,R],n.success(`KML "${o.name}" 加载成功`),R}catch(b){throw Ve(f),b}}async function S(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);try{const b=await l.KmlDataSource.load(f,{camera:r.scene.camera,canvas:r.scene.canvas}),A=`kmz_${++m}`;b.name=o.name,await r.dataSources.add(b),lt(r,l,b,"kmz");const R={id:A,name:o.name,type:"kmz",entity:b,blobUrl:f};return a.value=[...a.value,R],n.success(`KMZ "${o.name}" 加载成功`),R}catch{return Ve(f),await x(o)}}async function x(o){const l=t(),r=e(),f=await o.arrayBuffer(),{decompressBuffer:b}=await Zn(),R=(await b(f,o.name)).find(Z=>{var ie;return Z.ext==="kml"||((ie=Z.name)==null?void 0:ie.toLowerCase().endsWith(".kml"))});if(!R)throw new Error("KMZ 压缩包中未找到 KML 文件");let O;typeof R.content=="string"?O=R.content:R.content instanceof ArrayBuffer||R.content instanceof Uint8Array?O=mi(R.content):O=String(R.content||"");const X=new Blob([O],{type:"application/vnd.google-earth.kml+xml"}),B=URL.createObjectURL(X);try{const Z=await l.KmlDataSource.load(B,{camera:r.scene.camera,canvas:r.scene.canvas}),ie=`kmz_${++m}`;Z.name=o.name,await r.dataSources.add(Z),lt(r,l,Z,"kmz");const te={id:ie,name:o.name,type:"kmz",entity:Z};return a.value=[...a.value,te],n.success(`KMZ "${o.name}" 加载成功（手动解压）`),te}finally{URL.revokeObjectURL(B)}}async function I(o,l=[]){const r=t(),f=e();if(!r||!f)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:b}=await Zn(),A={shp:await o.arrayBuffer()};for(const te of l){const ne=Jt(te.name);ne==="dbf"&&(A.dbf=await te.arrayBuffer()),ne==="shx"&&(A.shx=await te.arrayBuffer()),ne==="prj"&&(A.prj=await te.arrayBuffer()),ne==="cpg"&&(A.cpg=await te.arrayBuffer())}const R=await b(A),O=Array.isArray(R)?R:[R],X=O.reduce((te,ne)=>{var Y;return te+(((Y=ne==null?void 0:ne.features)==null?void 0:Y.length)||0)},0),B=O.length===1?O[0]:{type:"FeatureCollection",features:O.flatMap(te=>(te==null?void 0:te.features)||[])},Z=new Blob([JSON.stringify(B)],{type:"application/geo+json"}),ie=URL.createObjectURL(Z);try{const te=await r.GeoJsonDataSource.load(ie,{stroke:r.Color.fromCssColorString("#ffcc00"),fill:r.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:r.Color.fromCssColorString("#ffcc00"),markerSize:20}),ne=`shp_${++m}`;te.name=o.name,await f.dataSources.add(te),lt(f,r,te,"shp");const Y={id:ne,name:o.name,type:"shp",entity:te};return a.value=[...a.value,Y],n.success(`Shapefile "${o.name}" 加载成功 (${X} 个要素)`),URL.revokeObjectURL(ie),Y}catch(te){throw URL.revokeObjectURL(ie),te}}async function k(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);let b=null;try{b=await P(o)}catch{}if(b)try{const A=await i(l,r,f,o.name,b),O={id:`gltf_${++m}`,name:o.name,type:"gltf",entity:A,blobUrl:f};return a.value=[...a.value,O],n.success(`3D 模型 "${o.name}" 加载成功 (${b.lng.toFixed(4)}, ${b.lat.toFixed(4)}, ${b.height.toFixed(1)}m)`),O}catch(A){throw Ve(f),A}return p.value&&Ve(p.value.blobUrl),p.value={file:o,blobUrl:f,name:o.name},{needsCoordInput:!0,file:o}}async function M(o){const l=t(),r=e();if(!p.value)throw new Error("没有等待确认的模型文件");const{blobUrl:f,name:b}=p.value;try{const A=await i(l,r,f,b,o),O={id:`gltf_${++m}`,name:b,type:"gltf",entity:A,blobUrl:f};a.value=[...a.value,O],n.success(`3D 模型 "${b}" 加载成功 (${o.lng.toFixed(4)}, ${o.lat.toFixed(4)}, ${o.height.toFixed(1)}m)`);const X=l.Cartesian3.fromDegrees(o.lng,o.lat,o.height+500);return r.camera.flyTo({destination:X,orientation:{heading:l.Math.toRadians(0),pitch:l.Math.toRadians(-30),roll:0},duration:2}),p.value=null,O}catch(A){throw Ve(f),p.value=null,A}}function C(){p.value&&(Ve(p.value.blobUrl),p.value=null)}async function D(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);try{const b=await l.CzmlDataSource.load(f),A=`czml_${++m}`;b.name=o.name,await r.dataSources.add(b),lt(r,l,b,"czml");const R={id:A,name:o.name,type:"czml",entity:b,blobUrl:f};return a.value=[...a.value,R],n.success(`CZML "${o.name}" 加载成功`),R}catch(b){throw Ve(f),b}}async function g(o){const l=t(),r=e();if(!l||!r)throw new Error("Cesium 未初始化");const f=ft(o);try{const b=await l.Cesium3DTileset.fromUrl(f),A=`tileset_${++m}`;r.scene.primitives.add(b);const R={id:A,name:o.name,type:"3dtiles",entity:b,blobUrl:f};return a.value=[...a.value,R],lt(r,l,b,"3dtiles"),n.success(`3D Tiles "${o.name}" 加载成功`),R}catch(b){throw Ve(f),b}}async function P(o){var b,A,R,O,X;const l=Jt(o.name);let r;if(l==="gltf"){const B=await o.text();r=JSON.parse(B)}else{const B=await o.arrayBuffer();r=L(B)}if(!r)return null;if((b=r.extensionsUsed)!=null&&b.includes("CESIUM_RTC")&&((R=(A=r.extensions)==null?void 0:A.CESIUM_RTC)!=null&&R.center)){const B=r.extensions.CESIUM_RTC.center;if(B.length>=3){const Z=t();if(Z){const ie=new Z.Cartesian3(B[0],B[1],B[2]),te=Z.Cartographic.fromCartesian(ie);return{lng:Z.Math.toDegrees(te.longitude),lat:Z.Math.toDegrees(te.latitude),height:te.height}}}}const f=(O=r.asset)==null?void 0:O.extras;if(f){const B=f.longitude??f.lng,Z=f.latitude??f.lat,ie=f.height??f.altitude??f.alt??0;if(B!=null&&Z!=null)return{lng:Number(B),lat:Number(Z),height:Number(ie)}}if(((X=r.nodes)==null?void 0:X.length)>0&&r.nodes[0].matrix){const B=r.nodes[0].matrix;if(B.length>=16){const Z=B[12],ie=B[13],te=B[14];if(Math.abs(Z)>1e5||Math.abs(ie)>1e5){const ne=t();if(ne)try{const Y=new ne.Cartesian3(Z,ie,te),de=ne.Cartographic.fromCartesian(Y);return{lng:ne.Math.toDegrees(de.longitude),lat:ne.Math.toDegrees(de.latitude),height:de.height}}catch{}}}}return null}function L(o){if(o.byteLength<20)return null;const l=new DataView(o);if(l.getUint32(0,!0)!==1179937895)return null;const f=l.getUint32(12,!0);if(l.getUint32(16,!0)!==1313821514)return null;const A=new Uint8Array(o,20,f),R=new TextDecoder().decode(A);try{return JSON.parse(R)}catch{return null}}async function i(o,l,r,f,b){const{lng:A,lat:R,height:O}=b,X=o.Cartesian3.fromDegrees(A,R,O),B=new o.HeadingPitchRoll(0,0,0),Z=o.Transforms.localFrameToFixedFrameGenerator("north","west"),ie=await o.Model.fromGltfAsync({url:r,modelMatrix:o.Transforms.headingPitchRollToFixedFrame(X,B,o.Ellipsoid.WGS84,Z),scale:1,show:!0});return ie.name=f,l.scene.primitives.add(ie),ie}async function d(o){const l=e(),r=t();if(!l||!r)throw n.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const f=Jt(o.name);try{switch(f){case"geojson":case"json":return o.name.toLowerCase().includes(Ts)?await g(o):await c(o);case"kml":return await w(o);case"kmz":return await S(o);case"shp":return await I(o);case"glb":case"gltf":return await k(o);case"czml":return await D(o);default:throw n.error(`不支持的文件格式: .${f}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${f}`)}}catch(b){throw n.error(`加载 "${o.name}" 失败: ${b.message||b}`),b}}function u(o){const l=a.value.find(f=>f.id===o);if(!l)return;const r=e();if(r){try{l.type==="3dtiles"?r.scene.primitives.remove(l.entity):r.dataSources.remove(l.entity,!0)}catch{}l.blobUrl&&Ve(l.blobUrl),a.value=a.value.filter(f=>f.id!==o),n.info(`已移除 "${l.name}"`)}}function h(){var r,f,b,A,R;const o=e();if(!o){a.value=[];return}for(const O of a.value){try{O.type==="3dtiles"?o.scene.primitives.remove(O.entity):o.dataSources.remove(O.entity,!0)}catch{}O.blobUrl&&Ve(O.blobUrl)}if(Array.isArray((r=o.dataSources)==null?void 0:r.dataSources)){const O=o.dataSources.dataSources.slice();for(const X of O)if(X&&!X.isBaseLayerPickerDataSource)try{o.dataSources.remove(X,!0)}catch{}}const l=t();if(l&&Array.isArray((b=(f=o.scene)==null?void 0:f.primitives)==null?void 0:b.primitives)){const O=o.scene.primitives.primitives.slice();for(const X of O)if(!(!X||!(X instanceof l.Cesium3DTileset||X instanceof l.Model||X.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(X.name||"")))))try{o.scene.primitives.remove(X)}catch{}}a.value=[],C();try{(R=(A=o.scene).requestRender)==null||R.call(A)}catch{}n.info("已清除所有导入数据")}return{loadDataFile:d,loadedDataSources:a,removeDataSource:u,clearAllDataSources:h,pendingGltfFile:p,loadGltfWithUserCoords:M,cancelPendingGltf:C}}const Ds="cesium_tool_panel_open",at={low:{stepCount:32,maxDistance:2e5,label:"低"},medium:{stepCount:48,maxDistance:36e4,label:"中"},high:{stepCount:64,maxDistance:5e5,label:"高"},ultra:{stepCount:80,maxDistance:7e5,label:"超高"}};function Ls({fluidPanelRef:e,sceneActions:t={},wind:n={},modelManager:a=null,cameraEnhanced:p=null,heightSampler:m=null,playerController:c=null,panelStorageKey:w=Ds}={}){const S=J(pt(w,!0)),x=J({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1,volumetricClouds:!1}),I=J({enableLighting:!0,showGroundAtmosphere:!0,dynamicAtmosphereLighting:!0,dynamicAtmosphereLightingFromSun:!0,atmosphereLightIntensity:5.5,atmosphereHueShift:-.015,atmosphereSaturationShift:.08,atmosphereBrightnessShift:.02,lightingFadeInDistance:0,lightingFadeOutDistance:Number.MAX_SAFE_INTEGER,nightFadeInDistance:0,nightFadeOutDistance:Number.MAX_SAFE_INTEGER,fogEnabled:!1,fogDensity:12e-5,fogMinimumBrightness:.035,sunShow:!0,moonShow:!0,skyBoxShow:!0}),k=J({dayNightEnabled:!1,nightFactor:0,moonLightEnabled:!1,moonLightIntensity:.18,ambientIntensity:.08,cloudsEnabled:!1,cloudCoverage:.3,cloudSpeed:.001,cloudBottom:1500,cloudTop:2150,cloudQuality:"medium",starsEnabled:!1,starsIntensity:1}),M=J({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,bsmShadow:!1,shadowResolution:256,maxDistance:at.medium.maxDistance,stepCount:at.medium.stepCount});x.value={...x.value,clouds:M.value};const C=J({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),D=J({speed:300,flySpeed:55e3,gravity:-2400,jumpHeight:600,sensitivity:5}),g=J({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),P=J(!1),L=J({elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2}),i=Me(()=>{var l,r,f,b,A,R,O,X,B,Z,ie,te,ne,Y,de,be,Se,xe,$,j;return[{id:"scene",title:"场景导航",description:"相机飞行和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"atmosphere",title:"大气·光照·天空",description:"Cesium 原生光照 + Tellux 增强大气 + 高级后效（全部可选）",status:x.value.atmosphere||x.value.fog||x.value.hbao||x.value.volumetricClouds?"部分启用":"仅晨昏半球",statusTone:x.value.atmosphere?"success":"neutral",controls:[...zs(I.value),{id:"fog",label:"高度雾",type:"toggle",value:x.value.fog,tooltip:"基于高度的指数雾效"},{id:"hbao",label:"微阴影",type:"toggle",value:x.value.hbao,tooltip:"环境光遮蔽（HBAO）"},{id:"tiltShift",label:"移轴",type:"toggle",value:x.value.tiltShift,tooltip:"移轴模糊后处理"},{id:"atmosphere",label:"大气效果",type:"toggle",value:x.value.atmosphere,tooltip:"启用 Tellux 大气渲染（日夜过渡、月光、星空）"},...Is(k.value,!x.value.atmosphere),{id:"volumetricClouds",label:"云层",type:"toggle",value:x.value.volumetricClouds,tooltip:"Cesium ECEF 球壳体积云"},{id:"cloudQuality",label:"云质量",type:"select",value:M.value.quality,options:Object.entries(at).map(([N,he])=>({value:N,label:he.label})),disabled:!x.value.volumetricClouds},...Fs(M.value,!x.value.volumetricClouds)]},{id:"tools",title:"空间工具",description:"模型加载、增强相机、高度采样（Tellux 移植）",status:(((l=a==null?void 0:a.modelCount)==null?void 0:l.value)>0?"模型":"")||(((r=p==null?void 0:p.flightState)==null?void 0:r.value)==="flying"?"飞行中":"就绪"),statusTone:((f=a==null?void 0:a.modelCount)==null?void 0:f.value)>0?"success":"neutral",controls:[{id:"modelManagerEnabled",label:"模型管理",type:"toggle",value:!1,tooltip:"启用后可加载 glTF/GLB 模型到地理坐标位置"},{id:"cameraEnhancedEnabled",label:"增强相机",type:"toggle",value:!1,tooltip:"自定义缓动函数、角度插值和弹簧物理"},{id:"heightSamplerEnabled",label:"高度采样",type:"toggle",value:!1,tooltip:"地形高度查询、批量异步采样、屏幕坐标拾取"}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(b=n.wind2D)!=null&&b.value?"已加载":"未加载",statusTone:(A=n.wind2D)!=null&&A.value?"success":"neutral",actions:[{id:"load",label:(R=n.wind2D)!=null&&R.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((O=n.wind2D)!=null&&O.value)}],controls:Cs((X=n.windParams)==null?void 0:X.value,!!((B=n.wind2D)!=null&&B.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:g.value.isPicking?"等待选点":g.value.hasFluid?"已创建":"未创建",statusTone:g.value.isPicking?"warning":g.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:g.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:g.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!g.value.hasFluid&&!g.value.isPicking}],controls:Es(C.value,g.value)},{id:"shallowWater",title:"热带浅水",description:"Three.js 热带浅水场景（焦散/折射/物理吸色/体积云/闪电）",status:P.value?"已启用":"未启用",statusTone:P.value?"success":"neutral",actions:[{id:"toggle",label:P.value?"关闭":"启用",variant:P.value?"danger":"primary"}],controls:Os(L.value,!P.value)},{id:"player",title:"人物漫游",description:"第一/第三人称视角 + WASD 移动 + 碰撞检测 + 飞行模式",status:(Z=c==null?void 0:c.isActive)!=null&&Z.value?(ie=c.isFirstPerson)!=null&&ie.value?"第一人称":"第三人称":"未启动",statusTone:(te=c==null?void 0:c.isActive)!=null&&te.value?"success":"neutral",actions:[{id:"toggle",label:(ne=c==null?void 0:c.isActive)!=null&&ne.value?"停止漫游":"启动漫游",variant:(Y=c==null?void 0:c.isActive)!=null&&Y.value?"danger":"primary"},{id:"changeView",label:"切换视角",disabled:!((de=c==null?void 0:c.isActive)!=null&&de.value)}],controls:[{id:"speed",label:"行走速度",type:"range",value:D.value.speed,min:50,max:2e3,step:10,disabled:!((be=c==null?void 0:c.isActive)!=null&&be.value)},{id:"flySpeed",label:"飞行速度",type:"range",value:D.value.flySpeed,min:2e3,max:1e6,step:1e3,disabled:!((Se=c==null?void 0:c.isActive)!=null&&Se.value)},{id:"gravity",label:"重力",type:"range",value:D.value.gravity,min:-6e3,max:0,step:50,disabled:!((xe=c==null?void 0:c.isActive)!=null&&xe.value)},{id:"jumpHeight",label:"跳跃高度",type:"range",value:D.value.jumpHeight,min:0,max:3e3,step:50,disabled:!(($=c==null?void 0:c.isActive)!=null&&$.value)},{id:"sensitivity",label:"鼠标灵敏度",type:"range",value:D.value.sensitivity,min:1,max:20,step:.5,disabled:!((j=c==null?void 0:c.isActive)!=null&&j.value)}]}]});we(S,l=>{Dt(w,l)});function d({moduleId:l,actionId:r}){var b,A;(A=(b={scene:{home:()=>{var R;return(R=t.flyToHome)==null?void 0:R.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},fluid:{pick:()=>{var R,O;return(O=(R=e==null?void 0:e.value)==null?void 0:R.startPickHeightMap)==null?void 0:O.call(R)},clear:()=>{var R,O;return(O=(R=e==null?void 0:e.value)==null?void 0:R.clearFluid)==null?void 0:O.call(R)}},shallowWater:{toggle:()=>{P.value=!P.value}},player:{toggle:()=>{var R;return(R=c==null?void 0:c.togglePlayer)==null?void 0:R.call(c)},changeView:()=>{var R;return(R=c==null?void 0:c.changeView)==null?void 0:R.call(c)}}}[l])==null?void 0:b[r])==null||A.call(b)}function u({moduleId:l,controlId:r,value:f}){var b,A,R;if(l==="wind"&&r in(((b=n.windParams)==null?void 0:b.value)||{})){(A=n.setWindParam)==null||A.call(n,r,f);return}if(l==="fluid"&&r in C.value){C.value={...C.value,[r]:r==="waterColor"?f:Number(f)};return}if(l==="shallowWater"&&r in L.value){L.value={...L.value,[r]:r==="waterColor"||r==="lightningEnabled"?f:Number(f)};return}if(l==="player"&&r in D.value){const O=Number(f);D.value={...D.value,[r]:O};const X=(R=c==null?void 0:c.getPlayerInstance)==null?void 0:R.call(c);X&&(r==="speed"?X.setPlayerSpeed(O):r==="flySpeed"?X.setPlayerFlySpeed(O):r==="gravity"?X.setGravity(O):r==="jumpHeight"?X.setJumpHeight(O):r==="sensitivity"&&X.setMouseSensitivity(O));return}if(l==="atmosphere"){if(r in x.value){x.value={...x.value,[r]:!!f};return}if(Ps(r)){const O=r==="cloudQuality"?{quality:f,previousQuality:M.value.quality}:{[r]:f};M.value=As({...M.value,...O}),x.value={...x.value,clouds:M.value};return}if(r in I.value){I.value={...I.value,[r]:f};return}if(r==="atmosphereEnabled"){x.value={...x.value,atmosphere:!!f};return}r in k.value&&(k.value={...k.value,[r]:f})}}function h(l){const r=vt(l==null?void 0:l.waterLevel),f=vt(l==null?void 0:l.waterLevelMin),b=vt(l==null?void 0:l.waterLevelMax);g.value={isPicking:!!(l!=null&&l.isPicking),hasFluid:!!(l!=null&&l.hasFluid),selectedText:(l==null?void 0:l.selectedText)||"",waterLevel:r,waterLevelMin:f,waterLevelMax:b},r!==null&&(C.value={...C.value,waterLevel:r})}function o(){var l;(l=n.clearWind2D)==null||l.call(n)}return{toolPanelOpen:S,advancedEffectControls:x,cloudParams:M,baseAtmosphereParams:I,atmosphereParams:k,fluidParams:C,fluidState:g,shallowWaterVisible:P,shallowWaterParams:L,toolModules:i,handleToolAction:d,handleToolControlChange:u,handleFluidStateChange:h,cleanupTools:o}}function Cs(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function Fs(e={},t){return[{id:"coverage",label:"云量",type:"range",min:.18,max:.82,step:.01,value:e.coverage??.52,displayValue:Number(e.coverage??.52).toFixed(2),disabled:t,tooltip:"覆盖率阈值。数值越大云越少，数值越小云越密。",numberInput:!1},{id:"density",label:"密度",type:"range",min:25e-6,max:18e-5,step:5e-6,value:e.density??9e-5,displayValue:Number(e.density??9e-5).toExponential(2),disabled:t,tooltip:"体积消光密度。数值越大云更厚、更暗，也更影响性能观感。",numberInput:!1},{id:"shadowStrength",label:"阴影",type:"range",min:0,max:1,step:.02,value:e.shadowStrength??.82,displayValue:Number(e.shadowStrength??.82).toFixed(2),disabled:t,numberInput:!1},{id:"multiScattering",label:"散射",type:"range",min:0,max:1,step:.02,value:e.multiScattering??.58,displayValue:Number(e.multiScattering??.58).toFixed(2),disabled:t,numberInput:!1},{id:"beerShadowStrength",label:"远影",type:"range",min:0,max:1,step:.02,value:e.beerShadowStrength??.64,displayValue:Number(e.beerShadowStrength??.64).toFixed(2),disabled:t,tooltip:"Beer Shadow Map 风格的远距离光学深度近似。数值越大，云层背光阴影越明显。",numberInput:!1},{id:"powderStrength",label:"银边",type:"range",min:0,max:1.4,step:.02,value:e.powderStrength??.72,displayValue:Number(e.powderStrength??.72).toFixed(2),disabled:t,numberInput:!1},{id:"hazeStrength",label:"薄霾",type:"range",min:0,max:1,step:.02,value:e.hazeStrength??.38,displayValue:Number(e.hazeStrength??.38).toFixed(2),disabled:t,numberInput:!1},{id:"groundBounceStrength",label:"反照",type:"range",min:0,max:1,step:.02,value:e.groundBounceStrength??.26,displayValue:Number(e.groundBounceStrength??.26).toFixed(2),disabled:t,tooltip:"地面反弹光近似，用于提亮云底。",numberInput:!1},{id:"bsmShadow",label:"BSM",type:"toggle",value:!!e.bsmShadow,disabled:t,tooltip:"Beer Shadow Map 阴影 atlas。用于远距离自阴影，异常时会自动降级关闭。"},{id:"shadowResolution",label:"影图",type:"range",min:128,max:512,step:128,value:e.shadowResolution??256,displayValue:`${Math.round(e.shadowResolution??256)} px`,disabled:t||!e.bsmShadow,tooltip:"BSM 阴影 atlas 单级联分辨率。越高越清晰，也越影响性能。",numberInput:!1},{id:"maxDistance",label:"距离",type:"range",min:12e4,max:9e5,step:1e4,value:e.maxDistance??at.medium.maxDistance,displayValue:`${Math.round((e.maxDistance??at.medium.maxDistance)/1e3)} km`,disabled:t,numberInput:!1},{id:"stepCount",label:"步数",type:"range",min:24,max:80,step:1,value:e.stepCount??at.medium.stepCount,displayValue:String(Math.round(e.stepCount??at.medium.stepCount)),disabled:t,numberInput:!1}]}function Ps(e){return["cloudQuality","coverage","density","shadowStrength","beerShadowStrength","multiScattering","powderStrength","hazeStrength","groundBounceStrength","bsmShadow","shadowResolution","maxDistance","stepCount"].includes(e)}function As(e={}){const t=Object.prototype.hasOwnProperty.call(at,e.quality)?e.quality:"medium",n=at[t],a=e.quality&&e.quality!==e.previousQuality;return{quality:t,coverage:Ue(Ke(e.coverage,.52),.18,.82),density:Ue(Ke(e.density,9e-5),25e-6,18e-5),shadowStrength:Ue(Ke(e.shadowStrength,.82),0,1),beerShadowStrength:Ue(Ke(e.beerShadowStrength,.64),0,1),multiScattering:Ue(Ke(e.multiScattering,.58),0,1),powderStrength:Ue(Ke(e.powderStrength,.72),0,1.4),hazeStrength:Ue(Ke(e.hazeStrength,.38),0,1),groundBounceStrength:Ue(Ke(e.groundBounceStrength,.26),0,1),bsmShadow:e.bsmShadow===!0,shadowResolution:Math.round(Ue(Ke(e.shadowResolution,256),128,512)/128)*128,maxDistance:Ue(a?n.maxDistance:Ke(e.maxDistance,n.maxDistance),12e4,9e5),stepCount:Math.round(Ue(a?n.stepCount:Ke(e.stepCount,n.stepCount),24,80))}}function Es(e,t={}){const n=vt(t.waterLevelMin),a=vt(t.waterLevelMax),p=n!==null&&a!==null,m=p?Math.min(n,a):0,c=p?Math.max(n,a):0,w=vt(e.waterLevel),S=p?Ue(w??m,m,c):0,x=p?Math.max((c-m)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:m,max:c,step:x,value:S,displayValue:p?`${Rs(S)} m`:"先捕捉",disabled:!p,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function vt(e){const t=Number(e);return Number.isFinite(t)?t:null}function Ke(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Ue(e,t,n){return Math.max(t,Math.min(n,e))}function Rs(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const ks={low:{stepCount:32,label:"低"},medium:{stepCount:64,label:"中"},high:{stepCount:96,label:"高"},ultra:{stepCount:128,label:"超高"}};function Is(e={},t){return[{id:"atmosphereEnabled",label:"大气效果",type:"toggle",value:!t,tooltip:"启用 Tellux 大气渲染系统（日夜过渡、月光、体积云、星空）"},{id:"dayNightEnabled",label:"日夜过渡",type:"toggle",value:e.dayNightEnabled!==!1,disabled:t,tooltip:"基于太阳高度角的平滑日夜过渡效果"},{id:"moonLightEnabled",label:"月光",type:"toggle",value:e.moonLightEnabled!==!1,disabled:t,tooltip:"夜间月光照明效果"},{id:"moonLightIntensity",label:"月光强度",type:"range",min:0,max:1,step:.01,value:e.moonLightIntensity??.18,displayValue:Number(e.moonLightIntensity??.18).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"ambientIntensity",label:"环境光",type:"range",min:0,max:1,step:.01,value:e.ambientIntensity??.08,displayValue:Number(e.ambientIntensity??.08).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"cloudsEnabled",label:"体积云",type:"toggle",value:e.cloudsEnabled===!0,disabled:t,tooltip:"基于 PostProcessStage 的体积云渲染"},{id:"cloudQuality",label:"云质量",type:"select",value:e.cloudQuality??"medium",options:Object.entries(ks).map(([n,a])=>({value:n,label:a.label})),disabled:t||!e.cloudsEnabled},{id:"cloudCoverage",label:"覆盖度",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.3,displayValue:`${Math.round((e.cloudCoverage??.3)*100)}%`,disabled:t||!e.cloudsEnabled},{id:"cloudSpeed",label:"移动速度",type:"range",min:0,max:.01,step:1e-4,value:e.cloudSpeed??.001,displayValue:Number(e.cloudSpeed??.001).toFixed(4),disabled:t||!e.cloudsEnabled},{id:"cloudBottom",label:"云底高度",type:"range",min:500,max:5e3,step:50,value:e.cloudBottom??1500,displayValue:`${Math.round(e.cloudBottom??1500)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudTop",label:"云顶高度",type:"range",min:1e3,max:1e4,step:100,value:e.cloudTop??2150,displayValue:`${Math.round(e.cloudTop??2150)} m`,disabled:t||!e.cloudsEnabled},{id:"starsEnabled",label:"星空",type:"toggle",value:e.starsEnabled!==!1,disabled:t,tooltip:"基于高度的星空可见性"},{id:"starsIntensity",label:"星空强度",type:"range",min:0,max:5,step:.1,value:e.starsIntensity??1,displayValue:Number(e.starsIntensity??1).toFixed(1),disabled:t||!e.starsEnabled}]}function zs(e={}){return[{id:"enableLighting",label:"日照",type:"toggle",value:e.enableLighting!==!1,tooltip:"Cesium globe.enableLighting：启用日照贴图"},{id:"showGroundAtmosphere",label:"地面大气",type:"toggle",value:e.showGroundAtmosphere!==!1,tooltip:"globe.showGroundAtmosphere：地面大气光晕"},{id:"dynamicAtmosphereLighting",label:"动态光照",type:"toggle",value:e.dynamicAtmosphereLighting!==!1},{id:"atmosphereLightIntensity",label:"大气光强",type:"range",min:0,max:25,step:.5,value:e.atmosphereLightIntensity??5.5,displayValue:Number(e.atmosphereLightIntensity??5.5).toFixed(1)},{id:"fogEnabled",label:"雾效",type:"toggle",value:e.fogEnabled!==!1},{id:"fogDensity",label:"雾密度",type:"range",min:1e-5,max:.001,step:1e-5,value:e.fogDensity??12e-5,displayValue:Number(e.fogDensity??12e-5).toFixed(5),disabled:!e.fogEnabled},{id:"sunShow",label:"太阳",type:"toggle",value:e.sunShow!==!1},{id:"moonShow",label:"月亮",type:"toggle",value:e.moonShow!==!1},{id:"skyBoxShow",label:"星空盒",type:"toggle",value:e.skyBoxShow!==!1}]}function Os(e={},t=!1){return[{id:"elevation",label:"高度角",type:"range",min:2,max:80,step:.1,value:e.elevation??30,displayValue:Number(e.elevation??30).toFixed(1),disabled:t},{id:"azimuth",label:"方位角",type:"range",min:-180,max:180,step:.1,value:e.azimuth??150,displayValue:Number(e.azimuth??150).toFixed(1),disabled:t},{id:"clarity",label:"清澈度",type:"range",min:.03,max:.4,step:.005,value:e.clarity??.085,displayValue:Number(e.clarity??.085).toFixed(3),tooltip:"越小越清澈(Beer-Lambert 密度)",disabled:t},{id:"causticStrength",label:"焦散强度",type:"range",min:0,max:2,step:.05,value:e.causticStrength??.9,displayValue:Number(e.causticStrength??.9).toFixed(2),disabled:t},{id:"waveHeight",label:"浪高",type:"range",min:0,max:1.5,step:.05,value:e.waveHeight??.5,displayValue:Number(e.waveHeight??.5).toFixed(2),disabled:t},{id:"foamWidth",label:"泡沫宽度",type:"range",min:0,max:8,step:.1,value:e.foamWidth??2.4,displayValue:Number(e.foamWidth??2.4).toFixed(1),disabled:t},{id:"reflection",label:"反射强度",type:"range",min:0,max:1,step:.02,value:e.reflection??.38,displayValue:Number(e.reflection??.38).toFixed(2),disabled:t},{id:"waterColor",label:"远处浅水色",type:"color",value:e.waterColor??"#2bb3c4",disabled:t},{id:"cloudCoverage",label:"云量",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.58,displayValue:Number(e.cloudCoverage??.58).toFixed(2),disabled:t},{id:"lightningEnabled",label:"闪电开关",type:"toggle",value:e.lightningEnabled!==!1,disabled:t},{id:"lightningInterval",label:"闪电间隔(秒)",type:"range",min:.4,max:8,step:.1,value:e.lightningInterval??2,displayValue:Number(e.lightningInterval??2).toFixed(1),disabled:t||e.lightningEnabled===!1}]}const{getLayerIdByIndex:Bs,getLayerIndexById:Jn}=si({urlLayerOptions:li,getLayerCategoryById:ci,getLayerGroupById:ui}),nn=-90,fn=1,ua=5e7;function Ns({getViewer:e,getCesium:t,onCameraViewSync:n,onBasemapRestore:a}={}){const p=ma(),m=pa();let c=null;function w(i){return di(i,p.query)}function S(){const i=String(w(bn)||"").trim(),d=ct(w("lng")),u=ct(w("lat")),h=Hs(w("z")),o=hi(i);if(o&&d!==null&&u!==null&&h!==null){const r={lng:d,lat:u,height:h,...o};if(Qn(r))return r}const l=fi(i);return Qn(l)?l:d===null||u===null||h===null||d<-180||d>180||u<-90||u>90?null:{lng:d,lat:u,height:h,heading:ct(w("heading"))??0,pitch:ct(w("pitch"))??nn,roll:ct(w("roll"))??0}}function x({duration:i=0}={}){const d=e==null?void 0:e(),u=t==null?void 0:t(),h=S();if(!(d!=null&&d.camera)||!u||!h)return!1;const o=u.Cartesian3.fromDegrees(h.lng,h.lat,h.height),l={heading:Qt(u,h.heading??0),pitch:Qt(u,Ws(h.pitch??nn)),roll:Qt(u,h.roll??0)};return Number(i)>0?(d.camera.flyTo({destination:o,orientation:l,duration:Number(i)}),!0):(d.camera.setView({destination:o,orientation:l}),!0)}function I(i){if(!i)return null;const d=Jn(i);if(d===null)return null;const u={view:Gt,l:String(d)};return L(u),String(d)}function k(){const i=ct(w("l"));if(i===null)return null;const d=Bs(i);return d&&(a==null||a(d)),d}function M({initialSync:i=!1,getActivePresetId:d}={}){const u=g();if(!(!(u!=null&&u.moveEnd)||c)&&(c=u.moveEnd.addEventListener(()=>{const h=d==null?void 0:d();D({activePresetId:h})}),i)){const h=d==null?void 0:d();D({activePresetId:h})}}function C(){typeof c=="function"&&c(),c=null}function D({activePresetId:i}={}){const d=t==null?void 0:t(),u=g();if(!d||!(u!=null&&u.position))return;const h=d.Cartographic.fromCartesian(u.position);if(!h)return;const o=d.Math.toDegrees(h.longitude),l=d.Math.toDegrees(h.latitude),r=Number(h.height),f=d.Math.toDegrees(Number(u.heading)||0),b=d.Math.toDegrees(Number(u.pitch)||0),A=d.Math.toDegrees(Number(u.roll)||0);if(!Number.isFinite(o)||!Number.isFinite(l)||!Number.isFinite(r))return;const R=Math.max(fn,r),O=oi({heading:f,pitch:b,roll:A});if(!O||O==="0")return;const X={view:Gt,camera:{lng:o,lat:l,height:R,heading:f,pitch:b,roll:A}},B={view:Gt,[bn]:O,lng:ea(o,6),lat:ea(l,6),z:Us(R)},Z=i;if(Z){const ie=Jn(Z);ie!==null&&(B.l=String(ie))}L(B),n==null||n(X)}function g(){var d;const i=e==null?void 0:e();return(i==null?void 0:i.camera)||((d=i==null?void 0:i.scene)==null?void 0:d.camera)||null}function P(i,d){const u=Object.keys(i).filter(o=>i[o]!==void 0&&i[o]!==null&&i[o]!==""),h=Object.keys(d).filter(o=>d[o]!==void 0&&d[o]!==null&&d[o]!=="");return u.length!==h.length?!1:h.every(o=>String(i[o]??"")===String(d[o]??""))}function L(i){const d={...Rn(p.query),...i};ba.forEach(h=>{h in i||delete d[h]}),Object.keys(d).forEach(h=>{const o=d[h];o==null||o===""?delete d[h]:d[h]=String(o)});const u=Rn(p.query);P(u,d)||m.replace({path:p.path||"/home",query:d}).catch(()=>{})}return{restoreCameraFromUrl:x,restoreBasemapFromUrl:k,syncBasemapToUrl:I,bindCameraViewSync:M,cleanupCameraViewSync:C}}function ct(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Hs(e){const t=ct(e);return t===null||t<fn||t>ua?null:t}function Qn(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),a=Number(e.height),p=Number(e.heading),m=Number(e.pitch),c=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(a)&&a>=fn&&a<=ua&&Number.isFinite(p)&&Number.isFinite(m)&&m>=-90&&m<=90&&Number.isFinite(c)}function Ws(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):nn}function ea(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function Us(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function Qt(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const Fe={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Gs=new Float32Array([-1,-1,1,-1,1,1,-1,1]),$s=new Float32Array([0,0,1,0,1,1,0,1]),qs=new Uint16Array([0,1,2,0,2,3]);function ot(e,t,n){return Math.max(t,Math.min(n,e))}function ge(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function js(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),a=Math.min(2048,n),p=Math.max(1,Math.floor(e)),m=Math.sqrt(p),c=Math.log2(m),w=Number.isFinite(c)?Math.round(c):4;let S=Math.pow(2,w);return S=ot(S,16,a),S}function Xs(e){const t=e*e,n=new Float32Array(t*4);for(let a=0;a<t;a+=1){const p=a*4;n[p]=Math.random(),n[p+1]=Math.random(),n[p+2]=Math.random(),n[p+3]=Math.random()}return n}function Vs(e){return new Float32Array(e*e*4)}function Ks(e,t,n,a,p){const m=t.createTexture();if(!m)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,m),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,a,0,t.RGBA,t.FLOAT,p),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let c=!1;return{_context:e,_texture:m,_target:t.TEXTURE_2D,_width:n,_height:a,destroy(){c||(t.deleteTexture(m),c=!0)}}}class Ys{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const a={...Fe,...n};this.speedFactor=ge(a.speedFactor,Fe.speedFactor),this.cullSpeedMin=ge(a.cullSpeedMin,Fe.cullSpeedMin),this.cullSpeedMax=ge(a.cullSpeedMax,Fe.cullSpeedMax),this.windSpeedMin=ge(a.windSpeedMin,Fe.windSpeedMin),this.windSpeedMax=ge(a.windSpeedMax,Fe.windSpeedMax),this.arrowLength=ge(a.arrowLength,Fe.arrowLength),this.trailLength=ge(a.trailLength,Fe.trailLength),this.decaySpeed=ge(a.decaySpeed,Fe.decaySpeed),this.alphaFactor=ge(a.alphaFactor,Fe.alphaFactor),this.maxWindSpeed=ge(a.maxWindSpeed,Fe.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=ge(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=ge(t.longitude,NaN),a=ge(t.latitude,NaN),p=Array.isArray(t.altitude)?t.altitude:[],m=Array.isArray(t.sizeMesh)?t.sizeMesh:[],c=Array.isArray(t.count)?t.count:[],w=Array.isArray(t.hspeed)?t.hspeed:[],S=Array.isArray(t.hdir)?t.hdir:[],x=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(a))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const I=p.length;if(I<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(m.length!==I||c.length!==I)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const k=c.map(l=>Math.max(1,Math.floor(ge(l,1)))),M=m.map(l=>Math.max(1,ge(l,1))),C=p.map(l=>ge(l,0)),D=k.reduce((l,r)=>l+r*r,0);if(w.length<D||S.length<D||x.length<D)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=I,this.visibleLayerMin=0,this.visibleLayerMax=I-1,this._altitudes=C.slice(),this._maxNx=Math.max(...k),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*I;const g=new Float32Array(this._atlasWidth*this._atlasHeight*4);let P=0;for(let l=0;l<I;l+=1){const r=k[l],f=r;for(let b=0;b<f;b+=1)for(let A=0;A<r;A+=1){const R=P+b*r+A,O=((l*this._maxNy+b)*this._atlasWidth+A)*4,X=Number(w[R]),B=Number(S[R]),Z=Number(x[R]);if(!(Number.isFinite(X)&&Number.isFinite(B))){g[O]=0,g[O+1]=0,g[O+2]=0,g[O+3]=0;continue}const te=B*Math.PI/180;g[O]=X*Math.sin(te),g[O+1]=X*Math.cos(te),g[O+2]=Number.isFinite(Z)?Z:0,g[O+3]=1}P+=r*f}this._createOrReplaceWindAtlasTexture(g);const L=Math.max(...M),i=this._maxNx*L,d=i/2/111320,u=a*Math.PI/180,h=Math.max(1e-6,Math.abs(Math.cos(u))),o=i/2/(111320*h);this._bounds={minLon:n-o,maxLon:n+o,minLat:a-d,maxLat:a+d,minHeight:Math.min(...C),maxHeight:Math.max(...C)},this._dataPointCount=D,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(ge(t,1))),a=js(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&a===this._particleTextureSize||(this._particleTextureSize=a,this._particleCount=a*a,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=ot(ge(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const a=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(a)}setBounds(t,n,a,p){const m=ge(t,NaN),c=ge(n,NaN),w=ge(a,NaN),S=ge(p,NaN);if(!Number.isFinite(m)||!Number.isFinite(c)||!Number.isFinite(w)||!Number.isFinite(S))return;const x=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};x.minLon=Math.min(m,c),x.maxLon=Math.max(m,c),x.minLat=Math.min(w,S),x.maxLat=Math.max(w,S),this._bounds=x,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const p=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[p],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=p,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Ks(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,a=Xs(n),p=Vs(n);for(let m=0;m<2;m+=1){this._particlePositionTextures[m]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:a},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[m]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:p},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[m]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[m],this._velocityTextures[m]],destroyAttachments:!1});const c=this._framebuffers[m]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,c),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:Gs,usage:t.BufferUsage.STATIC_DRAW}),a=t.Buffer.createVertexBuffer({context:this._context,typedArray:$s,usage:t.BufferUsage.STATIC_DRAW}),p=t.Buffer.createIndexBuffer({context:this._context,typedArray:qs,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:a,componentsPerAttribute:2}],indexBuffer:p})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let a=0;a<n.length;a+=1)n[a]=a;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:a,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:t.Pass.OPAQUE})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=ot(Math.floor(ge(this.visibleLayerMin,0)),0,this._layerCount-1),n=ot(Math.floor(ge(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const a=Math.max(1e-4,ge(this.maxWindSpeed,Fe.maxWindSpeed)),p=ot(ge(t,0)/a,0,1),m=ot(ge(n,a)/a,0,1);return{min:Math.min(p,m),max:Math.max(p,m)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>ge(this.speedFactor,Fe.speedFactor),maxWindSpeed:()=>Math.max(1e-4,ge(this.maxWindSpeed,Fe.maxWindSpeed)),decaySpeed:()=>ot(ge(this.decaySpeed,Fe.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>ge(this.arrowLength,Fe.arrowLength),trailLength:()=>ge(this.trailLength,Fe.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>ot(ge(this.alphaFactor,Fe.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Zs({getViewer:e,getCesium:t,message:n}){const a=J(null),p=J({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function m(){var I,k;const x=e==null?void 0:e();if(a.value){try{(k=(I=x==null?void 0:x.scene)==null?void 0:I.primitives)==null||k.remove(a.value)}catch{}a.value.destroy(),a.value=null}}function c(){const x=e==null?void 0:e(),I=t==null?void 0:t();if(!x||!I){n.error("Cesium 尚未初始化");return}m();const k=Js(I);a.value=new Ys(x,{maxWindSpeed:20,cesium:I,speedFactor:p.value.speedFactor,arrowLength:p.value.arrowLength,trailLength:p.value.trailLength,alphaFactor:p.value.alphaFactor}),a.value.loadData(k),x.scene.primitives.add(a.value),a.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function w(){a.value&&(a.value.speedFactor=p.value.speedFactor,a.value.arrowLength=p.value.arrowLength,a.value.trailLength=p.value.trailLength,a.value.alphaFactor=p.value.alphaFactor)}function S(x,I){return x in p.value?(p.value={...p.value,[x]:Number(I)},w(),!0):!1}return{wind2D:a,windParams:p,clearWind2D:m,loadSimulatedWind:c,setWindParam:S}}function Js(e){const p=[0,2e3,5e3,1e4,15e3],m=[3e4,3e4,25e3,25e3,2e4],c=[30,30,25,25,20],w=c.reduce((M,C)=>M+C*C,0),S=new Array(w),x=new Array(w),I=new Array(w);let k=0;for(let M=0;M<5;M++){const C=c[M],D=c[M],g=m[M];for(let P=0;P<D;P++)for(let L=0;L<C;L++){const i=k+P*C+L,d=(L-C/2)*(g/111320),u=(P-D/2)*(g/111320/Math.cos(e.Math.toRadians(35))),o=Math.atan2(u,d)+Math.PI/2+.2*Math.sin(L*.5)*Math.cos(P*.5);x[i]=e.Math.toDegrees(o)%360;const l=Math.sqrt(d*d+u*u),f=Math.max(0,1-l/15);S[i]=(5+M*2)*f+2*Math.random(),I[i]=.5*Math.sin(L*.3)*Math.cos(P*.3)}k+=C*D}return{longitude:104,latitude:35,altitude:p,sizeMesh:m,count:c,hspeed:S,hdir:x,vspeed:I}}const Tt=Object.freeze({LOADING:"loading",READY:"ready",ERROR:"error"});function an(e){if(!e)return null;if(Array.isArray(e)){const[a,p,m=0]=e;return typeof a!="number"||typeof p!="number"?null:{lng:a,lat:p,height:m}}const t=e.longitude??e.lng,n=e.latitude??e.lat;return typeof t!="number"||typeof n!="number"?null:{lng:t,lat:n,height:e.height??0}}function ta(e,t){const n=an(t.coordinates);if(!n)return null;const a=e.Cartesian3.fromDegrees(n.lng,n.lat,n.height),p=new e.HeadingPitchRoll(e.Math.toRadians(t.heading??0),e.Math.toRadians(t.pitch??0),e.Math.toRadians(t.roll??0)),m=e.Transforms.headingPitchRollToFixedFrame(a,p),c=t.scale;if(c!==void 0&&c!==1){let w=1,S=1,x=1;typeof c=="number"?w=S=x=c:typeof c=="object"&&(w=c.x??1,S=c.y??1,x=c.z??1);const I=e.Matrix4.fromScale(new e.Cartesian3(w,S,x));e.Matrix4.multiply(m,I,m)}return m}function Qs({getViewer:e,getCesium:t,message:n}){const a=new Map;let p=0;const m=J([]),c=Me(()=>m.value.filter(h=>h.state===Tt.LOADING).length),w=Me(()=>m.value.filter(h=>h.state===Tt.READY).length),S=Me(()=>m.value.length);function x(){m.value=Array.from(a.values()).map(h=>({...h.entry}))}function I(){do p++;while(a.has(`model-${p}`));return`model-${p}`}async function k(h){var A,R,O;const o=e==null?void 0:e(),l=t==null?void 0:t();if(!o||!l)return(A=n==null?void 0:n.error)==null||A.call(n,"Cesium 尚未初始化，无法加载模型"),null;const r=h.id??I();if(a.has(r))return(R=n==null?void 0:n.error)==null||R.call(n,`模型 "${r}" 已存在，请使用其他 ID`),null;const f=an(h.coordinates),b={id:r,name:h.name??r,url:h.url,coordinates:f,heading:h.heading??0,pitch:h.pitch??0,roll:h.roll??0,scale:h.scale??1,state:Tt.LOADING,metadata:h.metadata??{},addedAt:Date.now(),errorMessage:null};a.set(r,{primitive:null,objectUrl:null,entry:b}),x();try{const X=ta(l,{coordinates:b.coordinates,heading:b.heading,pitch:b.pitch,roll:b.roll,scale:b.scale});if(!X)throw new Error("坐标无效，无法计算模型矩阵");const B={url:h.url,modelMatrix:X,minimumPixelSize:h.minimumPixelSize??64,maximumScale:2e4,scene:o.scene};let Z;if(typeof l.Model.fromGltfAsync=="function")Z=await l.Model.fromGltfAsync(B);else if(typeof l.Model.fromGltf=="function")Z=l.Model.fromGltf(B);else throw new Error("当前 Cesium 版本不支持 Model API");o.scene.primitives.add(Z);const ie=a.get(r);ie.primitive=Z;const te=()=>{const ne=a.get(r);if(ne&&(ne.entry.state=Tt.READY,x(),h.autoPlayAnimation!==!1))try{Z.activeAnimations.addAll({loop:l.ModelAnimationLoop.REPEAT})}catch{}};return Z.readyEvent?Z.readyEvent.addEventListener(te):te(),Z.errorEvent&&Z.errorEvent.addEventListener(ne=>{const Y=a.get(r);Y&&(Y.entry.state=Tt.ERROR,Y.entry.errorMessage=(ne==null?void 0:ne.message)??"模型加载异常",x())}),x(),{...b}}catch(X){const B=a.get(r);return B!=null&&B.objectUrl&&URL.revokeObjectURL(B.objectUrl),a.delete(r),x(),(O=n==null?void 0:n.error)==null||O.call(n,`模型加载失败: ${X.message}`),null}}async function M(h,o={}){const l=URL.createObjectURL(h),r=await k({...o,url:l,name:o.name??h.name.replace(/\.(glb|gltf)$/i,"")});if(r){const f=a.get(r.id);f&&(f.objectUrl=l)}else URL.revokeObjectURL(l);return r}function C(h){var r;const o=e==null?void 0:e(),l=a.get(h);if(l){if(l.primitive&&o)try{o.scene.primitives.remove(l.primitive)}catch{}if((r=l.primitive)!=null&&r.destroy)try{l.primitive.destroy()}catch{}l.objectUrl&&URL.revokeObjectURL(l.objectUrl),a.delete(h),x()}}function D(h,o={}){const l=t==null?void 0:t(),r=a.get(h);if(!r||!l)return!1;const f=r.entry;if(o.coordinates&&(f.coordinates=an(o.coordinates)),o.heading!==void 0&&(f.heading=o.heading),o.pitch!==void 0&&(f.pitch=o.pitch),o.roll!==void 0&&(f.roll=o.roll),o.scale!==void 0&&(f.scale=o.scale),o.name&&(f.name=o.name),o.metadata&&(f.metadata={...f.metadata,...o.metadata}),r.primitive){const b=ta(l,{coordinates:f.coordinates,heading:f.heading,pitch:f.pitch,roll:f.roll,scale:f.scale});b&&(r.primitive.modelMatrix=b)}return x(),!0}function g(h,o={}){const l=e==null?void 0:e(),r=t==null?void 0:t(),f=a.get(h);if(!f||!l||!r)return;const b=f.entry.coordinates;if(!b)return;const{range:A=200,heading:R=0,pitch:O=-30,duration:X=2}=o,B=b.height+A*.3;l.camera.flyTo({destination:r.Cartesian3.fromDegrees(b.lng,b.lat,B),orientation:{heading:r.Math.toRadians(R),pitch:r.Math.toRadians(O),roll:0},duration:X})}function P(h,o,l={}){const r=a.get(h),f=t==null?void 0:t();if(!(!(r!=null&&r.primitive)||!f))try{const b=r.primitive,A=l.loop!==!1?f.ModelAnimationLoop.REPEAT:f.ModelAnimationLoop.NONE;if(o){let R=!1;const O=b.activeAnimations;for(let X=0;X<O.length;X++)if(O.get(X).name===o){O.get(X).playing=!0,R=!0;break}R||b.activeAnimations.add({name:o,loop:A,speedup:l.speedup??1})}else b.activeAnimations.addAll({loop:A,speedup:l.speedup??1})}catch{}}function L(h){const o=a.get(h);if(o!=null&&o.primitive)try{const l=o.primitive.activeAnimations;for(let r=0;r<l.length;r++)l.get(r).playing=!1}catch{}}function i(h){const o=a.get(h);return o?{...o.entry}:null}function d(h){var o;return((o=a.get(h))==null?void 0:o.primitive)??null}function u(){const h=Array.from(a.keys());for(const o of h)C(o);a.clear(),x()}return{models:m,loadingCount:c,readyCount:w,modelCount:S,addModel:k,addModelFromFile:M,removeModel:C,updateModel:D,flyToModel:g,playAnimation:P,stopAnimation:L,getModel:i,getModelPrimitive:d,dispose:u}}const en=Object.freeze({linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2});class na{constructor(t={}){this.stiffness=t.stiffness??120,this.damping=t.damping??20,this.mass=t.mass??1,this.threshold=t.threshold??.01,this._current=0,this._target=0,this._velocity=0,this._active=!1}get current(){return this._current}get target(){return this._target}get active(){return this._active}setTarget(t){this._target=t,this._active=!0}setCurrent(t){this._current=t,this._velocity=0}update(t){if(!this._active)return this._current;const n=this._current-this._target,a=-this.stiffness*n,p=-this.damping*this._velocity,m=(a+p)/this.mass;return this._velocity+=m*t,this._current+=this._velocity*t,Math.abs(n)<this.threshold&&Math.abs(this._velocity)<this.threshold&&(this._current=this._target,this._velocity=0,this._active=!1),this._current}reset(){this._current=0,this._target=0,this._velocity=0,this._active=!1}}const mt=Object.freeze({IDLE:"idle",FLYING:"flying",CANCELLED:"cancelled"});function el({getViewer:e,getCesium:t}){let n=0,a=null,p=null;const m=J(mt.IDLE),c=Me(()=>a);function w(){p!==null&&(cancelAnimationFrame(p),p=null),a=null,m.value=mt.CANCELLED}function S(i){const d=e==null?void 0:e(),u=t==null?void 0:t();if(!d||!u)return null;i.cancelPrevious!==!1&&w();const h=P(u,i.destination);if(!h)return null;const o=d.camera,l=o.heading,r=o.pitch,f=o.roll,b=o.positionWC.clone(),A=i.orientation??{},R=u.Math.toRadians(A.heading??u.Math.toDegrees(l)),O=u.Math.toRadians(A.pitch??u.Math.toDegrees(r)),X=u.Math.toRadians(A.roll??u.Math.toDegrees(f));let B=h.clone();if(i.maximumHeight!==void 0){const be=u.Cartographic.fromCartesian(h);be.height>i.maximumHeight&&(B=u.Cartesian3.fromRadians(be.longitude,be.latitude,i.maximumHeight))}const Z=i.easing??"easeInOutCubic",ie=en[Z]??en.easeInOutCubic,te=i.duration??2.5,ne=++n;a=ne,m.value=mt.FLYING;let Y=null;function de(be){var fe,Le;if(a!==ne)return;Y===null&&(Y=be);const Se=(be-Y)/1e3,xe=Math.min(Se/te,1),$=ie(xe),j=u.Cartesian3.lerp(b,B,$,new u.Cartesian3),N=L(l,R,$),he=r+(O-r)*$,De=f+(X-f)*$;o.setView({destination:j,orientation:{heading:N,pitch:he,roll:De}}),(fe=i.onTick)==null||fe.call(i,xe,j),xe<1?p=requestAnimationFrame(de):(p=null,a===ne&&(a=null,m.value=mt.IDLE,(Le=i.onComplete)==null||Le.call(i)))}return p=requestAnimationFrame(de),ne}function x(i,d,u=1e3,h={}){return S({...h,destination:{longitude:i,latitude:d,height:u}})}function I(i,d,u={}){const h=e==null?void 0:e(),o=t==null?void 0:t();if(!h||!o)return null;const l=o.Cartesian3.fromDegrees(i.longitude,i.latitude,i.height),r=o.Cartesian3.fromDegrees(d.longitude,d.latitude,d.height),f=o.Cartesian3.subtract(r,l,new o.Cartesian3);o.Cartesian3.normalize(f,f);const b=Math.atan2(f.x,f.y),A=Math.asin(f.z);return S({...u,destination:i,orientation:{heading:o.Math.toDegrees(b),pitch:o.Math.toDegrees(A),roll:0}})}function k(i,d={}){const u=e==null?void 0:e(),h=t==null?void 0:t();if(!u||!h)return null;const o=new h.Rectangle.fromDegrees(i.west,i.south,i.east,i.north),l=h.Rectangle.center(o),f=h.Math.toDegrees(o.east-o.west)*.8;return S({...d,destination:{longitude:h.Math.toDegrees(l.longitude),latitude:h.Math.toDegrees(l.latitude),height:Math.max(f*111e3,1e3)},orientation:{heading:0,pitch:-45,roll:0}})}function M(i){const d=e==null?void 0:e(),u=t==null?void 0:t();if(!d||!u)return null;w();const h=new na(i.spring),o=u.Cartographic.fromCartesian(d.camera.positionWC);h.setCurrent(o.height),h.setTarget(i.targetHeight);const l=++n;a=l,m.value=mt.FLYING;let r=null;function f(b){var X;if(a!==l)return;if(r===null){r=b;return}const A=(b-r)/1e3;r=b;const R=h.update(A),O=u.Cartesian3.fromRadians(o.longitude,o.latitude,R);d.camera.setView({destination:O,orientation:{heading:d.camera.heading,pitch:d.camera.pitch,roll:d.camera.roll}}),h.active?p=requestAnimationFrame(f):(p=null,a===l&&(a=null,m.value=mt.IDLE,(X=i.onComplete)==null||X.call(i)))}return p=requestAnimationFrame(f),l}function C(){const i=e==null?void 0:e(),d=t==null?void 0:t();if(!i||!d)return null;const u=d.Cartographic.fromCartesian(i.camera.positionWC);return{longitude:d.Math.toDegrees(u.longitude),latitude:d.Math.toDegrees(u.latitude),height:u.height,heading:d.Math.toDegrees(i.camera.heading),pitch:d.Math.toDegrees(i.camera.pitch),roll:d.Math.toDegrees(i.camera.roll)}}function D(i=6){const d=C();if(!d)return"--";const u=d.longitude>=0?"E":"W",h=d.latitude>=0?"N":"S";return`${Math.abs(d.longitude).toFixed(i)}°${u}, ${Math.abs(d.latitude).toFixed(i)}°${h}, ${d.height.toFixed(1)}m`}function g(){w()}function P(i,d){if(!d)return null;if(d instanceof i.Cartesian3)return d;if(Array.isArray(d)){const[o,l,r=0]=d;return i.Cartesian3.fromDegrees(o,l,r)}const u=d.longitude??d.lng,h=d.latitude??d.lat;return typeof u=="number"&&typeof h=="number"?i.Cartesian3.fromDegrees(u,h,d.height??0):null}function L(i,d,u){let h=d-i;for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;return i+h*u}return{flightState:m,currentFlightId:c,enhancedFlyTo:S,cancelFlight:w,flyToPosition:x,flyToAndLookAt:I,flyToRectangle:k,springToHeight:M,SpringController:na,getCameraState:C,getFormattedPosition:D,cleanup:g,EasingFunctions:en}}function Mt(e,t){return{longitude:e.Math.toDegrees(t.longitude),latitude:e.Math.toDegrees(t.latitude),height:t.height}}function aa(e,t){if(!t)return null;if(t instanceof e.Cartographic)return t;if(Array.isArray(t)){const[p,m,c=0]=t;return e.Cartographic.fromDegrees(p,m,c)}const n=t.longitude??t.lng,a=t.latitude??t.lat;return typeof n=="number"&&typeof a=="number"?e.Cartographic.fromDegrees(n,a,t.height??0):null}class tl{constructor(t,n){this.data=t,this.timestamp=n}isExpired(t){return Date.now()-this.timestamp>t}}function nl({getViewer:e,getCesium:t}){const n=new Map,a=300*1e3,p=5,m=J(!1),c=J(0);function w(L,i){return`${L.toFixed(p)},${i.toFixed(p)}`}function S(L,i){const d=w(L,i),u=n.get(d);return u&&!u.isExpired(a)?{...u.data}:(u&&n.delete(d),null)}function x(L){const i=w(L.longitude,L.latitude);n.set(i,new tl({...L},Date.now()))}function I(){n.clear()}function k(L){const i=e==null?void 0:e(),d=t==null?void 0:t();if(!i||!d||!L)return null;const{x:u,y:h}=L,o=i.camera.getPickRay(new d.Cartesian2(u,h));if(!o)return null;const l=i.scene.pickPositionSupported?i.scene.pickPosition(new d.Cartesian2(u,h)):i.scene.globe.pick(o,i.scene);if(!l){const f=i.scene.globe.ellipsoid,b=i.scene.camera.pickEllipsoid(new d.Cartesian2(u,h),f);if(!b)return null;const A=d.Cartographic.fromCartesian(b);return Mt(d,A)}const r=d.Cartographic.fromCartesian(l);return Mt(d,r)}async function M(L,i={}){const{maxRetries:d=3,retryDelay:u=200}=i;for(let h=0;h<d;h++){const o=k(L);if(o)return o;h<d-1&&await new Promise(l=>setTimeout(l,u))}return null}function C(L,i={}){const d=e==null?void 0:e(),u=t==null?void 0:t();if(!d||!u)return null;const h=aa(u,L);if(!h)return null;const o=u.Math.toDegrees(h.longitude),l=u.Math.toDegrees(h.latitude);if(i.useCache!==!1){const r=S(o,l);if(r)return r}try{const r=i.terrainDetailLevel??0,f=[h],b=r===0?u.sampleTerrain(d.terrainProvider,0,f):u.sampleTerrainMostDetailed(d.terrainProvider,f);if(b&&b.length>0){const A=Mt(u,b[0]);return x(A),A}}catch{}return null}async function D(L,i={}){const d=e==null?void 0:e(),u=t==null?void 0:t();if(!d||!u||!(L!=null&&L.length))return[];m.value=!0,c.value=0;try{const h=[],o=[],l=[];for(let r=0;r<L.length;r++){const f=aa(u,L[r]);if(!f){h.push(null);continue}const b=u.Math.toDegrees(f.longitude),A=u.Math.toDegrees(f.latitude);if(i.useCache!==!1&&!i.skipCached){const R=S(b,A);if(R){h.push(R);continue}}h.push(null),o.push(f),l.push(r)}if(o.length===0)return c.value=1,h;try{const r=d.terrainProvider,f=r._bottomLevel?Math.max(0,r._bottomLevel-1):Math.min(r.maximumLevel??12,12),b=await u.sampleTerrain(r,f,o);for(let A=0;A<b.length;A++){const R=Mt(u,b[A]);h[l[A]]=R,x(R),i.onProgress&&i.onProgress(A+1,o.length),c.value=(A+1)/o.length}}catch{for(let f=0;f<o.length;f++){try{const b=o[f],A=u.sampleTerrain(d.terrainProvider,17,[b]),R=A instanceof Promise?await A:A;if((R==null?void 0:R.length)>0){const O=Mt(u,R[0]);h[l[f]]=O,x(O)}}catch{}i.onProgress&&i.onProgress(f+1,o.length),c.value=(f+1)/o.length}}return h}finally{m.value=!1}}async function g(L,i={}){if(!(t==null?void 0:t()))return null;const{west:u,south:h,east:o,north:l}=L,r=Math.max(2,Math.ceil(Math.sqrt(i.sampleCount??9))),f=[];for(let B=0;B<r;B++)for(let Z=0;Z<r;Z++){const ie=u+(o-u)*(Z/(r-1)),te=h+(l-h)*(B/(r-1));f.push([ie,te])}const A=(await D(f,{useCache:!0})).filter(B=>B!==null).map(B=>B.height);if(A.length===0)return null;const R=Math.min(...A),O=Math.max(...A),X=A.reduce((B,Z)=>B+Z,0)/A.length;return{min:R,max:O,avg:X}}function P(){I(),m.value=!1,c.value=0}return{isSampling:m,samplingProgress:c,pickCartographic:k,pickCartographicWithRetry:M,sampleHeight:C,sampleHeightMostDetailed:D,queryHeightRange:g,clearCache:I,cleanup:P}}const al={url:"./glb/player/UAL1_Standard.glb",scale:.01,idleAnim:"Idle_Loop",walkAnim:"Walk_Loop",runAnim:"Sprint_Loop",jumpAnim:["Jump_Start","Jump_Loop","Jump_Land"],flyAnim:"fly",flyIdleAnim:"flyIdle",flyHoverForwardAnim:"flyHoverForward",flyHoverBackAnim:"flyHoverBack",flyHoverLeftAnim:"flyHoverLeft",flyHoverRightAnim:"flyHoverRight",flyHoverUpAnim:"flyHoverUp",flyHoverDownAnim:"flyHoverDown",rotateY:-Math.PI/2,facingOffset:Math.PI/2},il={gravity:-2400,jumpHeight:600,speed:300,flySpeed:55e3,acceleration:30,deceleration:30},rl={minCamDistance:100,maxCamDistance:800,camLookAtHeightRatio:.8,thirdMouseMode:1,enableZoom:!0,enableOverShoulderView:!1,isFirstPerson:!1,enableSpringCamera:!0,springCameraTime:.015},ol={forward:["KeyW","ArrowUp"],backward:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],toggleView:["KeyV"],toggleFly:["KeyF"]},sl=5;function ll(e){return e?!!(e.availability||e.requestWaterMask!==void 0||e.requestVertexNormals!==void 0):!1}function cl({getViewer:e,getCesium:t,message:n}){const a=J(!1),p=J(!1),m=J(!1);let c=null,w=null;async function S(C={}){var P,L,i,d;const D=e(),g=t();if(!D||!g){(P=n==null?void 0:n.error)==null||P.call(n,"Cesium 未初始化");return}if(a.value&&!c&&(a.value=!1,p.value=!1,m.value=!1),!a.value)try{(L=n==null?void 0:n.info)==null||L.call(n,"正在加载漫游控制器...");const{playerController:u}=await Nt(async()=>{const{playerController:Y}=await import("./index-g_2HqqF6.js");return{playerController:Y}},__vite__mapDeps([16,2,3,5,8,9,10,11,12,13,7,14,15,17,18,19,20]),import.meta.url);let h=C.initPos,o=0,l=!0;const r=D.camera,f=g.Cartographic.fromCartesian(r.position);if(!h){let Y=500;const de=D.terrainProvider;if(ll(de)){const be=de,Se=be._bottomLevel?Math.max(0,be._bottomLevel-1):Math.min(be.maximumLevel??12,12);let xe=null;try{xe=await g.sampleTerrain(de,Se,[f])}catch{}xe&&xe[0]&&g.defined(xe[0].height)?(o=xe[0].height,Y=o+500,l=!1):(Y=f.height>0?f.height+500:500,l=!1)}h=g.Cartesian3.fromRadians(f.longitude,f.latitude,Y)}let b=C.staticCollider;const A=.03;let R={lon:f.longitude,lat:f.latitude};!b&&!l&&(b=[{type:"terrain",rectangle:[f.longitude-A,f.latitude-A,f.longitude+A,f.latitude+A],resolution:64}]);const O={...rl};l&&(O.isFirstPerson=!1);const X={...al,...il,...C.modelConfig},B=new u;await B.init({viewer:D,initPos:h,playerModelConfig:X,staticCollider:b,...O,mouseSensitivity:sl,keyMap:ol,isShowMobileControls:!1}),l&&(B.isFlying=!0),c=B;const Z=5,ie=A*.6;let te=!1,ne=performance.now();w=D.scene.preUpdate.addEventListener(()=>{const Y=performance.now(),de=(Y-ne)/1e3;ne=Y,B.update(de);const be=B.getPosition(),Se=g.Cartographic.fromCartesian(be),xe=l?Z:o+Z;if(Se.height<xe&&B.reset(g.Cartesian3.fromRadians(Se.longitude,Se.latitude,xe)),!l&&!te){const $=Math.abs(Se.longitude-R.lon),j=Math.abs(Se.latitude-R.lat);if($>ie||j>ie){te=!0;const N=Se.longitude,he=Se.latitude;R={lon:N,lat:he},B.physics.clearStaticColliders(),B.physics.addStaticColliders(D,{type:"terrain",rectangle:[N-A,he-A,N+A,he+A],resolution:64}).then(async()=>{try{const De=D.terrainProvider,fe=new g.Cartographic(N,he,0),Le=De._bottomLevel?Math.max(0,De._bottomLevel-1):Math.min(De.maximumLevel??12,12),Ee=await g.sampleTerrain(De,Le,[fe]);Ee&&Ee[0]&&g.defined(Ee[0].height)&&(o=Ee[0].height)}catch{}te=!1}).catch(()=>{te=!1})}}}),B.onViewChange=Y=>{p.value=Y},B.onGroundChange=()=>{m.value=B.getIsFlying()},a.value=!0,p.value=B.getIsFirstPerson(),m.value=B.getIsFlying(),(i=n==null?void 0:n.success)==null||i.call(n,"漫游模式已启动（WASD 移动 / V 切视角 / F 飞行）")}catch(u){(d=n==null?void 0:n.error)==null||d.call(n,`漫游模式启动失败: ${u.message||"未知错误"}`),x()}}function x(){if(w&&(w(),w=null),c){try{c.destroy()}catch{}c=null}const C=e();if(C){const D=C.scene.screenSpaceCameraController;D.enableRotate=!0,D.enableTranslate=!0,D.enableZoom=!0,D.enableTilt=!0,D.enableLook=!0}a.value=!1,p.value=!1,m.value=!1}function I(C){var D;a.value?(x(),(D=n==null?void 0:n.info)==null||D.call(n,"漫游模式已停止")):S(C)}function k(){c&&(c.changeView(),p.value=c.getIsFirstPerson())}function M(){return c}return{isActive:a,isFirstPerson:p,isFlying:m,startPlayer:S,stopPlayer:x,togglePlayer:I,changeView:k,getPlayerInstance:M}}const ul={key:0,class:"player-guide"},dl={class:"guide-pill"},hl={class:"pill-label"},fl={key:0,class:"pill-fly"},ml={__name:"PlayerGuidePanel",props:{visible:{type:Boolean,default:!1},isFirstPerson:{type:Boolean,default:!1},isFlying:{type:Boolean,default:!1}},emits:["close"],setup(e){return(t,n)=>(ee(),Ne(va,{name:"guide-slide"},{default:ga(()=>[e.visible?(ee(),se("div",ul,[E("div",dl,[E("span",{class:Ae(["pill-dot",{fp:e.isFirstPerson}])},null,2),E("span",hl,me(e.isFirstPerson?"第一人称":"第三人称"),1),e.isFlying?(ee(),se("span",fl,"✈")):pe("",!0),E("button",{class:"pill-close",title:"关闭提示",onClick:n[0]||(n[0]=a=>t.$emit("close"))},"✕")]),n[1]||(n[1]=E("div",{class:"guide-keys"},[E("span",{class:"key-group"},[E("kbd",null,"W"),E("kbd",null,"A"),E("kbd",null,"S"),E("kbd",null,"D"),E("em",null,"移动")]),E("span",{class:"key-sep"}),E("span",{class:"key-group"},[E("kbd",null,"⇧"),E("em",null,"跑"),E("kbd",null,"␣"),E("em",null,"跳")]),E("span",{class:"key-sep"}),E("span",{class:"key-group"},[E("kbd",null,"V"),E("em",null,"视角"),E("kbd",null,"F"),E("em",null,"飞行")]),E("span",{class:"key-sep"}),E("span",{class:"key-group"},[E("span",{class:"key-mouse"},"🖱"),E("em",null,"旋转")])],-1))])):pe("",!0)]),_:1}))}},pl=st(ml,[["__scopeId","data-v-6190d367"]]),gl={key:4,class:"drag-overlay"},vl={class:"map-controls-group"},yl={class:"mouse-position-content"},bl={__name:"CesiumContainer",emits:["view-sync"],setup(e,{expose:t,emit:n}){let a=null,p=null,m=!1;const c=on(),w=n,S=J(!0),x=J(!1),I=J(null),k=J(_a()),M=()=>p,C=()=>a||window.Cesium,D=()=>k.value.tiandituTk,g=()=>k.value.cesiumIonToken,P=fs({getViewer:M,getCesium:C,message:c,backendBaseUrl:Sa,tiandituToken:D,cesiumIonToken:g}),{activeBasemap:L,activeTerrain:i,customXyzBasemapUrl:d,basemapOptions:u,terrainOptions:h,overlayOptions:o,createImageryProviderViewModels:l,createTerrainProviderViewModels:r,getSelectedImageryProviderViewModel:f,getSelectedTerrainProviderViewModel:b,bindLayerPickerStateSync:A,addBaseImageryLayers:R,initCustomTerrain:O,handleOverlayToggle:X,handleCustomBasemapSubmit:B,cleanupLayers:Z}=P;we(L,(s,T)=>{!s||s===T||xe(s)});const{coordinateDisplay:ie,setupInteractions:te,cleanupInteractions:ne}=is({getViewer:M,getCesium:C}),{installCreditHider:Y,cleanupCreditHider:de}=as({getViewer:M}),{restoreCameraFromUrl:be,restoreBasemapFromUrl:Se,syncBasemapToUrl:xe,bindCameraViewSync:$,cleanupCameraViewSync:j}=Ns({getViewer:M,getCesium:C,onCameraViewSync:s=>w("view-sync",s),onBasemapRestore:s=>{s&&L.value!==s&&(L.value=s)}}),N=ws({getViewer:M,getCesium:C,message:c}),{flyToHome:he}=N,De=Zs({getViewer:M,getCesium:C,message:c}),fe=Ms({getViewer:M,getCesium:C,message:c}),Le=Qs({getViewer:M,getCesium:C,message:c}),Ee=el({getViewer:M,getCesium:C}),Ge=nl({getViewer:M,getCesium:C}),Pe=cl({getViewer:M,getCesium:C,message:c});we(()=>Pe.isActive.value,s=>{s&&(S.value=!0,Oe.value=!1)}),t({getViewer:M,getCesium:C,modelManager:Le,cameraEnhanced:Ee,heightSampler:Ge,playerController:Pe});const $e=Me(()=>fe.loadedDataSources.value),Ie=Me(()=>fe.pendingGltfFile.value),ze=J(!1);function Re(s){ze.value=!0,s.dataTransfer&&(s.dataTransfer.dropEffect="copy")}function qe(s){const T=s==null?void 0:s.relatedTarget,z=s==null?void 0:s.currentTarget;T instanceof Node&&z instanceof Node&&z.contains(T)||(ze.value=!1)}async function Ze(s){var z;if(ze.value=!1,!x.value)return;const T=(z=s.dataTransfer)==null?void 0:z.files;if(!(!T||T.length===0))for(const H of T)try{await fe.loadDataFile(H)}catch{}}const{toolPanelOpen:Oe,advancedEffectControls:je,fluidParams:ke,baseAtmosphereParams:Be,shallowWaterVisible:He,shallowWaterParams:V,toolModules:v,handleToolAction:F,handleToolControlChange:W,handleFluidStateChange:q,cleanupTools:Q}=Ls({fluidPanelRef:I,sceneActions:N,wind:De,modelManager:Le,cameraEnhanced:Ee,heightSampler:Ge,playerController:Pe});async function _(){m=!1,oa("正在初始化 3D 场景...");try{let s=0,T=1;for(;s<T;)try{if(k.value=await xa({silent:!1,force:s>0}),T=Math.max(T,Array.isArray(k.value.tiandituTokens)?k.value.tiandituTokens.length:1,Array.isArray(k.value.cesiumIonTokens)?k.value.cesiumIonTokens.length:1,1),a=await jo({ionToken:g()}),m||!a||!document.getElementById("cesiumContainer"))return;U(),te();const z=R(),H=await O();if(m){y();return}if(x.value=!0,$({initialSync:!1,getActivePresetId:()=>L.value}),Se(),z&&H){c.success("天地图基础影像与地形加载成功。");return}const le=z?{switched:!1}:$t("tianditu_tk"),ce=H?{switched:!1}:$t("cesium_ion_token");if(!(le.switched||ce.switched)){c.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}k.value=ce.switched?ce.tokens:le.tokens,y(),s+=1,c.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(z){const H=$t("cesium_ion_token");if(!H.switched)throw z;k.value=H.tokens,y(),s+=1,c.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}c.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(s){c.error("Cesium 运行时加载失败",s),c.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{sa()}}function y(){if(x.value=!1,j(),ne(),Z(),de(),!!p){try{p.destroy()}catch{}p=null}}function U(){var H;const s=typeof a.Map=="function"?a.Map:a.Viewer,T=l(),z=r();p=new s("cesiumContainer",{baseLayerPicker:!0,geocoder:((H=a.IonGeocodeProviderType)==null?void 0:H.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:T,selectedImageryProviderViewModel:f(T),terrainProviderViewModels:z,selectedTerrainProviderViewModel:b(z),shouldAnimate:!0}),p.scene.debugShowFramesPerSecond=!0,p.scene.globe.terrainExaggeration=1,p.scene.globe.terrainExaggerationRelativeHeight=0,Jo(p,a),_i(p),Y(),A(),be({duration:0})||he(0)}rn(()=>{_()});async function G({files:s}){for(const T of s)try{await fe.loadDataFile(T)}catch{}}function K({id:s}){fe.removeDataSource(s)}function oe(){fe.clearAllDataSources()}async function ae(s){try{await fe.loadGltfWithUserCoords(s)}catch{}}function ye(){fe.cancelPendingGltf()}Wt(()=>{if(m=!0,x.value=!1,j(),ne(),Q(),Z(),Le.dispose(),Ee.cleanup(),Ge.cleanup(),de(),fe.clearAllDataSources(),p){try{p.destroy()}catch{}p=null}}),we(x,s=>{s&&re(Be.value)});function re(s){var H;if(!p||!a)return;const T=p.scene,z=T.globe;z&&(z.enableLighting=s.enableLighting,z.showGroundAtmosphere=s.showGroundAtmosphere,"dynamicAtmosphereLighting"in z&&(z.dynamicAtmosphereLighting=s.dynamicAtmosphereLighting),"dynamicAtmosphereLightingFromSun"in z&&(z.dynamicAtmosphereLightingFromSun=s.dynamicAtmosphereLightingFromSun),"atmosphereLightIntensity"in z&&(z.atmosphereLightIntensity=s.atmosphereLightIntensity),"atmosphereHueShift"in z&&(z.atmosphereHueShift=s.atmosphereHueShift),"atmosphereSaturationShift"in z&&(z.atmosphereSaturationShift=s.atmosphereSaturationShift),"atmosphereBrightnessShift"in z&&(z.atmosphereBrightnessShift=s.atmosphereBrightnessShift),"lightingFadeInDistance"in z&&(z.lightingFadeInDistance=s.lightingFadeInDistance),"lightingFadeOutDistance"in z&&(z.lightingFadeOutDistance=s.lightingFadeOutDistance),"nightFadeInDistance"in z&&(z.nightFadeInDistance=s.nightFadeInDistance),"nightFadeOutDistance"in z&&(z.nightFadeOutDistance=s.nightFadeOutDistance)),T.fog&&(T.fog.enabled=s.fogEnabled,"density"in T.fog&&(T.fog.density=s.fogDensity),"minimumBrightness"in T.fog&&(T.fog.minimumBrightness=s.fogMinimumBrightness)),T.sun&&(T.sun.show=s.sunShow),T.moon&&(T.moon.show=s.moonShow),T.skyBox&&(T.skyBox.show=s.skyBoxShow),(H=T.requestRender)==null||H.call(T)}return we(Be,s=>{re(s)},{deep:!0}),(s,T)=>{var z;return ee(),se(nt,null,[E("div",{id:"cesiumContainer",class:"cesium-container",onDragover:gt(Re,["prevent"]),onDragleave:gt(qe,["prevent"]),onDrop:gt(Ze,["prevent"])},null,32),x.value?(ee(),Ne(dt(Ni),{key:0,headless:"","get-viewer":M,"get-cesium":C,controls:ue(je)},null,8,["controls"])):pe("",!0),x.value?(ee(),Ne(dt(Eo),{key:1,ref_key:"fluidPanelRef",ref:I,headless:"","get-viewer":M,"get-cesium":C,params:ue(ke),onStateChange:ue(q)},null,40,["params","onStateChange"])):pe("",!0),x.value?(ee(),Ne(Go,ya({key:2,visible:ue(He)},ue(V)),null,16,["visible"])):pe("",!0),x.value?(ee(),Ne(ao,{key:3,open:ue(Oe),"onUpdate:open":T[0]||(T[0]=H=>Ut(Oe)?Oe.value=H:null),"active-basemap":ue(L),"onUpdate:activeBasemap":T[1]||(T[1]=H=>Ut(L)?L.value=H:null),"active-terrain":ue(i),"onUpdate:activeTerrain":T[2]||(T[2]=H=>Ut(i)?i.value=H:null),"basemap-options":ue(u),"terrain-options":ue(h),"overlay-options":ue(o),"custom-basemap-url":ue(d),modules:ue(v),"loaded-data-sources":$e.value,onModuleAction:ue(F),onControlChange:ue(W),onOverlayToggle:ue(X),onCustomBasemapSubmit:ue(B),onDataImport:G,onDataRemove:K,onDataClearAll:oe},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):pe("",!0),Te(pl,{visible:ue(Pe).isActive.value&&S.value,"is-first-person":ue(Pe).isFirstPerson.value,"is-flying":ue(Pe).isFlying.value,onClose:T[3]||(T[3]=H=>S.value=!1)},null,8,["visible","is-first-person","is-flying"]),Te(bo,{visible:!!Ie.value,"file-name":((z=Ie.value)==null?void 0:z.name)||"",onConfirm:ae,onCancel:ye},null,8,["visible","file-name"]),ze.value&&x.value?(ee(),se("div",gl,[Te(ue(tn),{size:48,"stroke-width":"1.5"}),T[5]||(T[5]=E("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),T[6]||(T[6]=E("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):pe("",!0),E("div",vl,[E("div",yl,me(ue(ie)),1),T[8]||(T[8]=E("div",{class:"divider"},null,-1)),E("button",{class:"home-btn",title:"回到初始位置",onClick:T[4]||(T[4]=(...H)=>ue(he)&&ue(he)(...H))},[...T[7]||(T[7]=[E("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[E("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},xl=st(bl,[["__scopeId","data-v-4510d4a4"]]),Cl=Object.freeze(Object.defineProperty({__proto__:null,default:xl},Symbol.toStringTag,{value:"Module"}));export{Cl as C,ll as h};
