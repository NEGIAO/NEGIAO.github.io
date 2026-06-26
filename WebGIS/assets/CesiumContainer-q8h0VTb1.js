const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-Soxnylob.js","./vendor-echarts-all-p94F8Aev.js","./vendor-libs-Dy-OdQ_c.js","./vendor-vue-DrZ_GSNy.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-Ct7_BiKs.js","./vendor-proj4-BXpf0XoL.js","./index-Dicg4vj8.js","./vendor-ol-all-BBVsVU_e.js","./vendor-geotiff-BcuD_5kA.js","./vendor-lerc-9DOY5ikF.js","./vendor-jszip-BOwK5y_4.js","./vendor-ol-all-BtPuoxOl.css","./vendor-axios-Bdz_Fv8M.js","./index-DduL8x4O.css"])))=>i.map(i=>d[i]);
var da=Object.defineProperty;var ha=(e,t,n)=>t in e?da(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var yn=(e,t,n)=>ha(e,typeof t!="symbol"?t+"":t,n);import{w as xe,v as ra,d as ee,c as se,P as ia,r as Z,C as rn,o as Ht,f as z,t as fe,a as Se,G as Ve,X as ct,g as ge,q as _e,u as ue,F as nt,e as it,n as Ae,x as We,S as ut,I as It,i as gt,H as zt,z as fa,B as ma,A as pa,a5 as ga,a4 as Wt}from"./vendor-vue-DrZ_GSNy.js";import{_ as dt,h as on,R as oa,Q as sa,e as Ut,f as bn,T as va,v as ya,y as Gt,P as ba,x as xa}from"./index-Dicg4vj8.js";import{_ as en}from"./vendor-runtime-Dp1pzeXC.js";import{af as _a,ag as $t,ah as qt,ai as Sa,X as xn,e as jt,aj as tn,ak as Ft,ac as _n,al as wa,am as la,an as Sn,H as wn,T as Xt,s as Tn,a2 as Ta,ao as Ot,ap as Ma,aq as Ca,ar as Da,q as La,as as Fa,o as Pa,at as Pt,G as Mn,au as sn,av as ln,aw as ca,ax as Cn,ay as Aa,az as Ea,aA as Dn,aB as Yt,aC as Ra,aD as ka,aE as Ia,aF as At,aG as Qe,aH as za,aI as Ln,aJ as xt,aK as Oa,aL as _t,aM as Ba,aN as Na,aO as Ha,aP as Wa,aQ as Ua,aR as Ga,aS as Fn,aT as Pn,aU as $a,aV as qa,aW as ja,aX as Xa,aY as Ya,aZ as Ka,a_ as Va,a$ as Za,b0 as Ja,b1 as An,b2 as Qa,b3 as er,b4 as tr,b5 as nr}from"./vendor-libs-Dy-OdQ_c.js";import{F as cn,G as En,v as Lt,B as ar,H as rr,I as ir,J as or,K as sr,L as lr,M as Rn,N as cr,O as ur,P as dr}from"./HomeView-C-6Pyb3C.js";import{d as hr}from"./vectorUtils-Ds50OJUZ.js";import"./vendor-ol-all-BBVsVU_e.js";import"./vendor-geotiff-BcuD_5kA.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BXpf0XoL.js";import"./vendor-axios-Bdz_Fv8M.js";import"./textDecoder-CXjJWEkX.js";const Nt=new Map;function fr(e){const t=Nt.get(e);t&&t.abort();const n=new AbortController;return Nt.set(e,n),n}function mr(){Nt.forEach(e=>{e.abort()}),Nt.clear()}function pr(e){const t=e.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!t)return/\{s\}/i.test(e)?{url:e,subdomains:["a","b","c"]}:{url:e,subdomains:[]};const n=t[1].charCodeAt(0),a=t[2].charCodeAt(0),h=[];for(let f=n;f<=a;f++)h.push(String.fromCharCode(f));return{url:e.replace(t[0],"{s}"),subdomains:h}}function gr(e){return e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function vr(e,t){let n=e;return t.tiandituTk&&(n=n.replace(/\{tiandituTk\}/g,t.tiandituTk)),t.customUrl&&(n=n.replace(/\{customUrl\}/g,t.customUrl)),n}function yr(e,t,n){if(!e||!t)return null;const h=fr(t.id).signal,{serviceType:f}=t;let p=vr(t.url,n);if(f==="custom"){if(!n.customUrl)return null;p=n.customUrl}if(t.nonStandardAdapter||f==="vector-tile")return null;const{subdomains:T}=pr(p),g=gr(p),L=t.subdomains||T,R=t.maxZoom||18;try{let E=null;if(h.aborted)return null;switch(f){case"wms":{if(typeof e.WebMapServiceImageryProvider!="function")return null;const S=t.wms;if(!(S!=null&&S.layers))return null;E=new e.WebMapServiceImageryProvider({url:g||t.url,layers:S.layers,parameters:{version:S.version||"1.1.1",srs:S.srs||"EPSG:3857",format:S.format||"image/png",styles:S.styles||"",transparent:S.transparent!==!1}});break}case"wmts":{if(typeof e.WebMapTileServiceImageryProvider!="function")return null;const S=t.wmts;if(!(S!=null&&S.layer)||!S.matrixSet)return null;E=new e.WebMapTileServiceImageryProvider({url:g||t.url,layer:S.layer,style:S.style||"default",format:S.format||"image/png",tileMatrixSetID:S.matrixSet,maximumLevel:R});break}case"osm":{typeof e.OpenStreetMapImageryProvider=="function"?E=new e.OpenStreetMapImageryProvider({maximumLevel:R}):E=new e.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:R});break}default:{if(!g||!(g.includes("{z}")||g.includes("{x}")||g.includes("{y}")||g.includes("{reverseY}")))return null;E=new e.UrlTemplateImageryProvider({url:g,subdomains:L.length>0?L:void 0,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:R,enablePickFeatures:!1});break}}if(h.aborted){if(E&&typeof E.destroy=="function")try{E.destroy()}catch{}return null}return E&&(E._descriptorId=t.id),E}catch{return null}}function br(e,t,n){if(!e||!Array.isArray(t))return[];const a=[];for(const h of t){const f=cn(h);if(!f)continue;const p=yr(e,f,n);p&&a.push(p)}return a}function xr(e){var a;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(a=t.requestRender)==null||a.call(t))}function _r(e,t){var f;const n=e==null?void 0:e.scene,a=n==null?void 0:n.globe;if(!n||!a)return;Tr(n,t),Mr(n),a.enableLighting=!0,a.showGroundAtmosphere=!0,me(a,"dynamicAtmosphereLighting",!0),me(a,"dynamicAtmosphereLightingFromSun",!0),me(a,"atmosphereLightIntensity",5.5),me(a,"atmosphereHueShift",-.015),me(a,"atmosphereSaturationShift",.08),me(a,"atmosphereBrightnessShift",.02),me(a,"lightingFadeInDistance",15e6),me(a,"lightingFadeOutDistance",22e6),me(a,"nightFadeInDistance",9e6),me(a,"nightFadeOutDistance",16e6),Et(t,a,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Et(t,a,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),me(a,"atmosphereRayleighScaleHeight",1e4),me(a,"atmosphereMieScaleHeight",3200),me(a,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=Dr(t));const h=n.skyAtmosphere;h&&(h.show=!0,me(h,"perFragmentAtmosphere",!0),me(h,"dynamicAtmosphereLighting",!0),me(h,"dynamicAtmosphereLightingFromSun",!0),me(h,"hueShift",-.025),me(h,"saturationShift",.08),me(h,"brightnessShift",.03),me(h,"atmosphereLightIntensity",12),Et(t,h,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Et(t,h,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),me(h,"atmosphereRayleighScaleHeight",1e4),me(h,"atmosphereMieScaleHeight",3200),me(h,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),Cr(n),(f=n.requestRender)==null||f.call(n)}function Sr(e){var h;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const a=(h=t.postProcessStages)==null?void 0:h.bloom;return{scene:et(t,["highDynamicRange","sunBloom","light"]),fog:et(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:et(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:et(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:et(t.sun,["show"]),moon:et(t.moon,["show"]),skyBox:et(t.skyBox,["show"]),bloom:{props:et(a,["enabled"]),uniforms:et(a==null?void 0:a.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function wr(e,t,n){var p,T,g,L;if(!n)return;const a=e==null?void 0:e.scene,h=a==null?void 0:a.globe;if(!a||!h)return;tt(a,n.scene,t),tt(a.fog,n.fog,t),tt(h,n.globe,t),tt(a.sun,n.sun,t),tt(a.moon,n.moon,t),tt(a.skyBox,n.skyBox,t),a.skyAtmosphere&&(tt(a.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(a.skyAtmosphere.show=!1));const f=(p=a.postProcessStages)==null?void 0:p.bloom;tt(f,(T=n.bloom)==null?void 0:T.props,t),tt(f==null?void 0:f.uniforms,(g=n.bloom)==null?void 0:g.uniforms,t),(L=a.requestRender)==null||L.call(a)}function Tr(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}me(e.light,"intensity",2.35)}function Mr(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,me(t,"density",12e-5),me(t,"minimumBrightness",.035),me(t,"screenSpaceErrorFactor",2),me(t,"visualDensityScalar",.16))}function Cr(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(me(t.uniforms,"contrast",128),me(t.uniforms,"brightness",-.18),me(t.uniforms,"delta",1),me(t.uniforms,"sigma",2.5),me(t.uniforms,"stepSize",4.2)))}function Dr(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function me(e,t,n){e&&t in e&&(e[t]=n)}function Et(e,t,n,a,h,f){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(a,h,f))}function et(e,t){return e?t.reduce((n,a)=>(a in e&&(n[a]=Lr(e[a])),n),{}):{}}function tt(e,t={},n){!e||!t||Object.entries(t).forEach(([a,h])=>{a in e&&(e[a]=Fr(h,n))})}function Lr(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Fr(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Pr={__name:"LilGuiControls",props:{title:{type:String,default:"Parameters"},controls:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const n=e,a=t,h=Z(null),f={},p=new Map;let T=null,g="",L=!1;xe(()=>[n.title,n.controls],()=>{R()},{deep:!0,flush:"post",immediate:!0}),ra(()=>{l()});function R(){typeof window>"u"||L||(L=!0,ia(()=>{L=!1,E()}))}function E(){const o=h.value;if(!o)return;const m=M(n.controls);(!T||m!==g)&&(l(),S(o,m)),D()}function S(o,m){T=new _a({container:o,autoPlace:!1,title:n.title||"Parameters",width:Math.max(260,Math.floor(o.clientWidth||320))}),T.domElement.classList.add("cesium-lil-gui"),o.replaceChildren(T.domElement),g=m;for(const x of n.controls||[]){const P=A(x);P&&p.set(x.id,P)}}function A(o){var x;if(o.type==="info"){const P=document.createElement("div");return P.className="lil-separator",P.textContent=o.label||"",P.style.cssText=`
            padding: 6px 0 4px;
            color: rgba(155, 216, 255, 0.7);
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.03em;
            border-top: 1px solid rgba(155, 216, 255, 0.12);
            margin-top: 4px;
        `,(((x=T.children[0])==null?void 0:x.domElement)||T.domElement).appendChild(P),null}f[o.id]=i(o);let m=null;return o.type==="range"?m=T.add(f,o.id,r(o.min,0),r(o.max,1),r(o.step,.01)):o.type==="color"?m=T.addColor(f,o.id):o.type==="select"?m=T.add(f,o.id,c(o)):m=T.add(f,o.id),m.name(C(o)).onChange(P=>{const I=u(o.id)||o;I.disabled||a("change",{control:I,controlId:I.id,value:P})}),b(m,o),m}function D(){if(T){T.title(n.title||"Parameters");for(const o of n.controls||[]){const m=p.get(o.id);if(!m)continue;const x=i(o);d(f[o.id],x)||(f[o.id]=x,m.updateDisplay()),m.name(C(o)),m.disable(!!o.disabled),b(m,o)}}}function b(o,m){o.domElement.title=m.tooltip||"",o.domElement.dataset.controlId=m.id||"",o.domElement.dataset.controlType=m.type||""}function M(o=[]){return JSON.stringify(o.map(m=>({id:m.id,type:m.type,min:m.min,max:m.max,step:m.step,options:(m.options||[]).map(x=>({label:x.label,value:x.value}))})))}function C(o){return o.displayValue?`${o.label||o.id} (${o.displayValue})`:o.label||o.id}function i(o){var m,x;return o.type==="range"?r(o.value,r(o.min,0)):o.type==="toggle"?!!o.value:o.type==="select"?o.value??((x=(m=o.options)==null?void 0:m[0])==null?void 0:x.value)??"":o.type==="color"?typeof o.value=="string"&&o.value?o.value:"#ffffff":o.value}function c(o){const m={};for(const x of o.options||[])m[x.label||x.value]=x.value;return m}function u(o){return n.controls.find(m=>m.id===o)||null}function d(o,m){return typeof o=="number"||typeof m=="number"?Math.abs(Number(o)-Number(m))<1e-12:o===m}function r(o,m){const x=Number(o);return Number.isFinite(x)?x:m}function l(){if(T)try{T.destroy()}catch{}T=null,g="",p.clear();for(const o of Object.keys(f))delete f[o]}return(o,m)=>(ee(),se("div",{ref_key:"containerRef",ref:h,class:"lil-gui-host"},null,512))}},un=dt(Pr,[["__scopeId","data-v-f0c1e4b4"]]),Ar={key:0,class:"advanced-effects-root"},Er={class:"effects-panel"},Rr={class:"panel-head"},kr={class:"effect-switches"},Ir=`
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
`,zr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=on(),a=Z(null),h=Z(!1),f=Z(!1),p=Z(!1),T=Z(!1),g=Z(!1),L=Z(!1),R=Z({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,maxDistance:36e4,stepCount:32}),E=_e(()=>[{id:"fog",label:"Height Fog",type:"toggle",value:h.value},{id:"volumetricClouds",label:"Clouds",type:"toggle",value:f.value},{id:"hbao",label:"HBAO",type:"toggle",value:p.value},{id:"tiltShift",label:"Tilt Shift",type:"toggle",value:T.value},{id:"atmosphere",label:"Atmosphere + Bloom",type:"toggle",value:g.value}]);let S=null,A=null,D=null,b=null,M=!1,C=null,i=null,c=null,u=null,d=null,r=null,l=null,o=null,m=!1,x=null,P=null,I=!1,U=0,K=0,W=typeof performance<"u"?performance.now():Date.now();const V={};function oe(){return c||(c=en(()=>import("./cesiumFxRuntime-Soxnylob.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(_=>{var H;const y=(H=_==null?void 0:_.getCesiumFxEchartsRuntime)==null?void 0:H.call(_);if(!y)throw new Error("Cinematic FX 图表运行时加载失败");return i=y,y}).catch(_=>{throw c=null,_}),c)}async function ae(){return i||oe()}const re={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},Q={hdr:null,bloom:null,sky:null};rn(()=>{Ee()}),Ht(()=>{Ne()}),xe(()=>t.controls,_=>{pe(_||{})},{deep:!0,immediate:!0});function pe(_){Object.prototype.hasOwnProperty.call(_,"fog")&&(h.value=!!_.fog),Object.prototype.hasOwnProperty.call(_,"volumetricClouds")&&(f.value=!!_.volumetricClouds),_.clouds&&typeof _.clouds=="object"&&(R.value=Re(_.clouds)),Object.prototype.hasOwnProperty.call(_,"hbao")&&(p.value=!!_.hbao),Object.prototype.hasOwnProperty.call(_,"tiltShift")&&(T.value=!!_.tiltShift),Object.prototype.hasOwnProperty.call(_,"atmosphere")&&(g.value=!!_.atmosphere)}function we({controlId:_,value:y}){const H=!!y,Y={fog:h,volumetricClouds:f,hbao:p,tiltShift:T,atmosphere:g}[_];Y&&(Y.value=H)}function Re(_={}){return{quality:["low","medium","high","ultra"].includes(_.quality)?_.quality:"medium",coverage:O(_.coverage,.52,.18,.82),density:O(_.density,9e-5,25e-6,18e-5),shadowStrength:O(_.shadowStrength,.82,0,1),beerShadowStrength:O(_.beerShadowStrength,.64,0,1),multiScattering:O(_.multiScattering,.58,0,1),powderStrength:O(_.powderStrength,.72,0,1.4),hazeStrength:O(_.hazeStrength,.38,0,1),groundBounceStrength:O(_.groundBounceStrength,.26,0,1),maxDistance:O(_.maxDistance,36e4,12e4,9e5),stepCount:Math.round(O(_.stepCount,48,16,128))}}function Ee(){let _=0;u=window.setInterval(async()=>{var G,Y;_+=1;const y=(G=t.getViewer)==null?void 0:G.call(t),H=((Y=t.getCesium)==null?void 0:Y.call(t))||window.Cesium;if(y&&H){clearInterval(u),u=null;try{q(y),N(y),j(y,H),Ge(y,H),n.success("高级视觉效果已启用。")}catch(ie){n.error("高级视觉效果初始化失败",ie),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}_>=150&&(clearInterval(u),u=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function q(_){var G,Y,ie,te,ve,ne,s,w,k;const y=_==null?void 0:_.scene;if(!y)return;typeof y.highDynamicRange=="boolean"&&(Q.hdr=y.highDynamicRange),"sunBloom"in y&&(Q.sunBloom=y.sunBloom);const H=y.globe;if(H&&(Q.globe={enableLighting:H.enableLighting,showGroundAtmosphere:H.showGroundAtmosphere,dynamicAtmosphereLighting:H.dynamicAtmosphereLighting,dynamicAtmosphereLightingFromSun:H.dynamicAtmosphereLightingFromSun,atmosphereLightIntensity:H.atmosphereLightIntensity,atmosphereHueShift:H.atmosphereHueShift,atmosphereSaturationShift:H.atmosphereSaturationShift,atmosphereBrightnessShift:H.atmosphereBrightnessShift,lightingFadeInDistance:H.lightingFadeInDistance,lightingFadeOutDistance:H.lightingFadeOutDistance,nightFadeInDistance:H.nightFadeInDistance,nightFadeOutDistance:H.nightFadeOutDistance}),y.light&&(Q.light={intensity:y.light.intensity}),(G=y.postProcessStages)!=null&&G.bloom){const B=y.postProcessStages.bloom;Q.bloom={enabled:!!B.enabled,contrast:(Y=B.uniforms)==null?void 0:Y.contrast,brightness:(ie=B.uniforms)==null?void 0:ie.brightness,delta:(te=B.uniforms)==null?void 0:te.delta,sigma:(ve=B.uniforms)==null?void 0:ve.sigma,stepSize:(ne=B.uniforms)==null?void 0:ne.stepSize}}y.skyAtmosphere&&(Q.sky={show:y.skyAtmosphere.show,hueShift:y.skyAtmosphere.hueShift,saturationShift:y.skyAtmosphere.saturationShift,brightnessShift:y.skyAtmosphere.brightnessShift}),Q.celestial={sunShow:(s=y.sun)==null?void 0:s.show,moonShow:(w=y.moon)==null?void 0:w.show,skyBoxShow:(k=y.skyBox)==null?void 0:k.show}}function j(_,y){var G;!((G=_==null?void 0:_.scene)!=null&&G.postProcessStages)||!(y!=null&&y.PostProcessStage)||(Ce(_,y),de(_,y),Fe(_,y),Ue(_,y),g.value?ze(_,y,1200):Pe(_))}function N(_){var H;const y=_==null?void 0:_.scene;(H=y==null?void 0:y.renderError)!=null&&H.addEventListener&&(y.rethrowRenderErrors=!1,o=y.renderError.addEventListener((G,Y)=>{n.error("Cesium 渲染异常，已触发降级保护",Y),ye(),m||(m=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function ye(){h.value=!1,f.value=!1,T.value=!1,p.value=!1,g.value=!1,S&&(S.enabled=!1),A&&(A.enabled=!1),D&&(D.enabled=!1),b&&(b.enabled=!1)}function Ce(_,y){S||(S=new y.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new y.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),_.scene.postProcessStages.add(S),S.enabled=h.value)}function de(_,y){var ne,s;if(A||!(y!=null&&y.PostProcessStage))return;const H=Number((s=(ne=y==null?void 0:y.Ellipsoid)==null?void 0:ne.WGS84)==null?void 0:s.maximumRadius)||6378137,G=new y.Cartesian3,Y=new y.Cartesian3,ie=new y.Cartesian3(.35,-.25,.9),te=new y.Matrix4,ve=new y.Cartesian4(1,1,1,.85);y.Cartesian3.normalize(ie,ie),A=new y.PostProcessStage({name:"cesium_ecef_volumetric_clouds_stage",fragmentShader:Ir,uniforms:{u_cameraPositionWC:G,u_cameraDirectionWC:Y,u_inverseViewProjection:te,u_sunDirectionWC:ie,u_cloudBottomRadius:H+1500,u_cloudTopRadius:H+8500,u_maxDistance:42e4,u_coverage:.52,u_density:85e-6,u_shadowStrength:.82,u_beerShadowStrength:.64,u_multiScattering:.58,u_powderStrength:.72,u_hazeStrength:.38,u_groundBounceStrength:.26,u_stepCount:48,u_timeSeconds:0,u_atmosphereParams:ve,u_qualityLevel:1}}),_.scene.postProcessStages.add(A),A.enabled=f.value}function Fe(_,y){var G,Y;const H=(G=_==null?void 0:_.scene)==null?void 0:G.postProcessStages;H&&(H.ambientOcclusion?(b=H.ambientOcclusion,M=!1):(Y=y==null?void 0:y.PostProcessStageLibrary)!=null&&Y.createAmbientOcclusionStage&&(b=y.PostProcessStageLibrary.createAmbientOcclusionStage(),H.add(b),M=!0),b&&(b.enabled=p.value,b.uniforms&&("intensity"in b.uniforms&&(b.uniforms.intensity=4.2),"bias"in b.uniforms&&(b.uniforms.bias=.08),"lengthCap"in b.uniforms&&(b.uniforms.lengthCap=.35),"stepSize"in b.uniforms&&(b.uniforms.stepSize=1.8),"frustumLength"in b.uniforms&&(b.uniforms.frustumLength=1200))))}function Ue(_,y){D||(D=new y.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),_.scene.postProcessStages.add(D),D.enabled=!1)}function Ge(_,y){const H=_==null?void 0:_.scene;H&&(l=H.preRender.addEventListener(()=>{var te;const G=X(_),Y=Number(((te=_==null?void 0:_.camera)==null?void 0:te.pitch)??-1.2);U+=1;const ie=typeof performance<"u"?performance.now():Date.now();if(ie-W>=1e3&&(K=Math.round(U*1e3/(ie-W)),U=0,W=ie),S&&(S.enabled=h.value,S.uniforms.cameraHeightFactor=v(G,150,12e3),S.uniforms.fogDensity=55e-5+(1-S.uniforms.cameraHeightFactor)*.00125),A&&(A.enabled=f.value,A.enabled&&ke(_,y,G)),b&&(b.enabled=p.value),D){const ve=Y>-.62,ne=ve?F((Y+.62)/.5):0;D.enabled=T.value&&ve,D.uniforms.blurStrength=ne}g.value&&G>=8e4?(ze(_,y,G),I=!1):I||(Pe(_),I=!0)}))}function ke(_,y,H){var Te;const G=A,Y=_==null?void 0:_.scene,ie=_==null?void 0:_.camera;if(!G||!Y||!ie||!y)return;const te=G.uniforms;y.Cartesian3.clone(ie.positionWC,te.u_cameraPositionWC),y.Cartesian3.clone(ie.directionWC,te.u_cameraDirectionWC);const ve=(Te=Y.context)==null?void 0:Te.uniformState;ve!=null&&ve.inverseViewProjection?y.Matrix4.clone(ve.inverseViewProjection,te.u_inverseViewProjection):ie.inverseViewProjectionMatrix&&y.Matrix4.clone(ie.inverseViewProjectionMatrix,te.u_inverseViewProjection);const ne=Ie(_,y);y.Cartesian3.clone(ne,te.u_sunDirectionWC);const s=v(H,1e4,18e4),w=y.Cartesian3.normalize(ie.positionWC,V),k=y.Cartesian3.dot(w,ne),B=1-F((k+.08)/.55),le=g.value?1:.62,ce=R.value;te.u_coverage=ce.coverage,te.u_density=ce.density*(1-s*.22),te.u_maxDistance=ce.maxDistance,te.u_shadowStrength=ce.shadowStrength*(1-s*.12),te.u_beerShadowStrength=ce.beerShadowStrength*(1-s*.18),te.u_multiScattering=ce.multiScattering,te.u_powderStrength=ce.powderStrength,te.u_hazeStrength=ce.hazeStrength*(1-s*.35),te.u_groundBounceStrength=ce.groundBounceStrength,te.u_stepCount=ce.stepCount,te.u_timeSeconds=De(_,y),te.u_atmosphereParams&&(te.u_atmosphereParams.x=le,te.u_atmosphereParams.y=.92+B*.28,te.u_atmosphereParams.z=.82+B*.42,te.u_atmosphereParams.w=(.58+le*.42)*(1-s*.28));const be=ce.quality==="ultra"?3:ce.quality==="high"?2:ce.quality==="medium"?1:0;te.u_qualityLevel=be}function Ie(_,y){var Y,ie,te;const H=(te=(ie=(Y=_==null?void 0:_.scene)==null?void 0:Y.context)==null?void 0:ie.uniformState)==null?void 0:te.sunDirectionWC;if(H)return H;const G=new y.Cartesian3(.35,-.25,.9);return y.Cartesian3.normalize(G,G),G}function De(_,y){var H,G,Y;try{const ie=(H=_==null?void 0:_.clock)==null?void 0:H.currentTime;if(ie&&((G=y==null?void 0:y.JulianDate)!=null&&G.secondsDifference)&&((Y=y==null?void 0:y.JulianDate)!=null&&Y.fromIso8601))return P||(P=y.JulianDate.fromIso8601("2026-01-01T00:00:00Z")),y.JulianDate.secondsDifference(ie,P)}catch{}return(typeof performance<"u"?performance.now():Date.now())*.001}function ze(_,y,H){var ve;const G=_==null?void 0:_.scene;if(!G)return;x||(x=Sr(_)),_r(_,y),typeof G.highDynamicRange=="boolean"&&(G.highDynamicRange=!0);const Y=(ve=G.postProcessStages)==null?void 0:ve.bloom;Y&&(Y.enabled=!0,Y.uniforms&&("contrast"in Y.uniforms&&(Y.uniforms.contrast=149),"brightness"in Y.uniforms&&(Y.uniforms.brightness=-.12),"delta"in Y.uniforms&&(Y.uniforms.delta=1),"sigma"in Y.uniforms&&(Y.uniforms.sigma=3.25),"stepSize"in Y.uniforms&&(Y.uniforms.stepSize=5)));const ie=G.skyAtmosphere;if(!ie)return;const te=v(H,500,12e4);ie.hueShift=-.035+te*.035,ie.saturationShift=-.14+te*.09,ie.brightnessShift=.03+(1-te)*.08}function Pe(_){var ie,te,ve;const y=_==null?void 0:_.scene;if(!y)return;const H=((ie=t.getCesium)==null?void 0:ie.call(t))||window.Cesium;if(x){wr(_,H,x),x=null;return}typeof y.highDynamicRange=="boolean"&&Q.hdr!==null&&(y.highDynamicRange=Q.hdr),"sunBloom"in y&&Q.sunBloom!==void 0&&(y.sunBloom=Q.sunBloom);const G=y.globe;if(G&&Q.globe){const ne=Q.globe;ne.enableLighting!==void 0&&(G.enableLighting=ne.enableLighting),ne.showGroundAtmosphere!==void 0&&(G.showGroundAtmosphere=ne.showGroundAtmosphere),ne.dynamicAtmosphereLighting!==void 0&&"dynamicAtmosphereLighting"in G&&(G.dynamicAtmosphereLighting=ne.dynamicAtmosphereLighting),ne.dynamicAtmosphereLightingFromSun!==void 0&&"dynamicAtmosphereLightingFromSun"in G&&(G.dynamicAtmosphereLightingFromSun=ne.dynamicAtmosphereLightingFromSun),ne.atmosphereLightIntensity!==void 0&&"atmosphereLightIntensity"in G&&(G.atmosphereLightIntensity=ne.atmosphereLightIntensity),ne.atmosphereHueShift!==void 0&&"atmosphereHueShift"in G&&(G.atmosphereHueShift=ne.atmosphereHueShift),ne.atmosphereSaturationShift!==void 0&&"atmosphereSaturationShift"in G&&(G.atmosphereSaturationShift=ne.atmosphereSaturationShift),ne.atmosphereBrightnessShift!==void 0&&"atmosphereBrightnessShift"in G&&(G.atmosphereBrightnessShift=ne.atmosphereBrightnessShift),ne.lightingFadeInDistance!==void 0&&"lightingFadeInDistance"in G&&(G.lightingFadeInDistance=ne.lightingFadeInDistance),ne.lightingFadeOutDistance!==void 0&&"lightingFadeOutDistance"in G&&(G.lightingFadeOutDistance=ne.lightingFadeOutDistance),ne.nightFadeInDistance!==void 0&&"nightFadeInDistance"in G&&(G.nightFadeInDistance=ne.nightFadeInDistance),ne.nightFadeOutDistance!==void 0&&"nightFadeOutDistance"in G&&(G.nightFadeOutDistance=ne.nightFadeOutDistance)}y.light&&Q.light&&Q.light.intensity!==void 0&&(y.light.intensity=Q.light.intensity);const Y=(te=y.postProcessStages)==null?void 0:te.bloom;if(Y&&Q.bloom&&(Y.enabled=Q.bloom.enabled,Y.uniforms&&("contrast"in Y.uniforms&&Q.bloom.contrast!==void 0&&(Y.uniforms.contrast=Q.bloom.contrast),"brightness"in Y.uniforms&&Q.bloom.brightness!==void 0&&(Y.uniforms.brightness=Q.bloom.brightness),"delta"in Y.uniforms&&Q.bloom.delta!==void 0&&(Y.uniforms.delta=Q.bloom.delta),"sigma"in Y.uniforms&&Q.bloom.sigma!==void 0&&(Y.uniforms.sigma=Q.bloom.sigma),"stepSize"in Y.uniforms&&Q.bloom.stepSize!==void 0&&(Y.uniforms.stepSize=Q.bloom.stepSize))),y.skyAtmosphere&&Q.sky&&(Q.sky.show!==void 0&&(y.skyAtmosphere.show=Q.sky.show),y.skyAtmosphere.hueShift=Q.sky.hueShift,y.skyAtmosphere.saturationShift=Q.sky.saturationShift,y.skyAtmosphere.brightnessShift=Q.sky.brightnessShift),Q.celestial){const ne=Q.celestial;y.sun&&ne.sunShow!==void 0&&(y.sun.show=ne.sunShow),y.moon&&ne.moonShow!==void 0&&(y.moon.show=ne.moonShow),y.skyBox&&ne.skyBoxShow!==void 0&&(y.skyBox.show=ne.skyBoxShow)}(ve=y.requestRender)==null||ve.call(y)}function $e(){d&&(clearInterval(d),d=null)}async function Oe(){var G,Y;const _=!L.value;if(L.value=_,!_){$e();return}const y=(G=t.getViewer)==null?void 0:G.call(t),H=((Y=t.getCesium)==null?void 0:Y.call(t))||window.Cesium;if(!y||!H){L.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ze(y,H),qe(y,H),Le(y,H)}catch(ie){L.value=!1,n.error("图表模块加载失败",ie)}}async function Ze(_,y){await ae(),await ia(),a.value&&(C||(C=i.init(a.value),Be()),r||(r=()=>{C==null||C.resize()},window.addEventListener("resize",r)),C.resize(),Le(_,y))}function qe(_,y){d||(d=window.setInterval(()=>{!C||!L.value||Le(_,y)},1200))}function Le(_,y){var te;const H=new Date,G=`${J(H.getHours())}:${J(H.getMinutes())}:${J(H.getSeconds())}`,Y=Number((X(_)/1e3).toFixed(2)),ie=Number(y.Math.toDegrees(((te=_==null?void 0:_.camera)==null?void 0:te.pitch)??0).toFixed(1));$(re.labels,G,20),$(re.cameraHeightKm,Y,20),$(re.pitchDeg,ie,20),$(re.fps,K,20),C.setOption({xAxis:{data:re.labels},series:[{data:re.cameraHeightKm},{data:re.pitchDeg},{data:re.fps}]})}function Be(){C&&C.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function Ne(){var H,G;u&&(clearInterval(u),u=null),$e();const _=(H=t.getViewer)==null?void 0:H.call(t),y=(G=_==null?void 0:_.scene)==null?void 0:G.postProcessStages;l&&(l(),l=null),o&&(o(),o=null),S&&y&&y.remove(S),S=null,A&&y&&y.remove(A),A=null,D&&y&&y.remove(D),D=null,b&&(M&&y&&y.remove(b),b=null),M=!1,I=!1,_&&Pe(_),r&&(window.removeEventListener("resize",r),r=null),C&&(C.dispose(),C=null),i=null,m=!1}function X(_){var Y,ie,te;const y=(ie=(Y=_==null?void 0:_.scene)==null?void 0:Y.globe)==null?void 0:ie.ellipsoid,H=(te=_==null?void 0:_.camera)==null?void 0:te.positionWC;if(!y||!H)return 0;const G=y.cartesianToCartographic(H);return Math.max(0,Number((G==null?void 0:G.height)??0))}function v(_,y,H){return!Number.isFinite(_)||H<=y?0:F((_-y)/(H-y))}function F(_){return Math.min(1,Math.max(0,Number(_)||0))}function O(_,y,H,G){const Y=Number(_);return Number.isFinite(Y)?Math.min(G,Math.max(H,Y)):y}function $(_,y,H){_.push(y),_.length>H&&_.shift()}function J(_){return String(_).padStart(2,"0")}return(_,y)=>e.headless?ge("",!0):(ee(),se("div",Ar,[z("div",Er,[z("div",Rr,[y[0]||(y[0]=z("span",{class:"panel-title"},"Cinematic FX",-1)),z("button",{class:"panel-btn",onClick:Oe},fe(L.value?"隐藏图表":"显示图表"),1)]),z("div",kr,[Se(un,{title:"Effect Parameters",controls:E.value,onChange:we},null,8,["controls"])]),Ve(z("div",{ref_key:"chartRef",ref:a,class:"fx-chart"},null,512),[[ct,L.value]])])]))}},Or=dt(zr,[["__scopeId","data-v-9f955e42"]]),Br={key:0,class:"launcher-count"},Nr={class:"panel-header"},Hr={class:"panel-title-block"},Wr={class:"panel-mark"},Ur={class:"panel-copy"},Gr={class:"panel-subtitle"},$r={class:"panel-actions"},qr=["title"],jr={class:"panel-tabs","aria-label":"3D 工具分类"},Xr=["aria-pressed","onClick"],Yr={class:"panel-scroll"},Kr={class:"panel-page"},Vr={class:"overview-grid"},Zr={class:"overview-tile"},Jr={class:"overview-tile"},Qr={class:"overview-tile"},ei={key:0,class:"quick-actions"},ti=["disabled","onClick"],ni={key:1,class:"empty-state"},ai={class:"panel-page"},ri=["aria-expanded"],ii={class:"section-main"},oi={class:"section-meta"},si={key:0,class:"section-body"},li={class:"option-grid"},ci=["disabled","aria-pressed","title","onClick"],ui={class:"custom-basemap-input-row"},di=["disabled"],hi={key:0,class:"custom-basemap-current"},fi=["aria-expanded"],mi={class:"section-main"},pi={class:"section-meta"},gi={key:0,class:"section-body"},vi={class:"option-grid"},yi=["aria-pressed","title","onClick"],bi=["aria-expanded"],xi={class:"section-main"},_i={class:"section-meta"},Si={key:0,class:"section-body"},wi={class:"overlay-list"},Ti=["disabled","aria-pressed","title","onClick"],Mi={class:"overlay-copy"},Ci={class:"overlay-title"},Di={key:0,class:"overlay-desc"},Li={key:3,class:"empty-state"},Fi={class:"panel-page"},Pi={class:"module-list"},Ai=["aria-expanded","onClick"],Ei={class:"module-icon"},Ri={class:"module-copy"},ki={class:"module-title"},Ii={key:0,class:"module-desc"},zi={class:"module-head-side"},Oi={key:0,class:"module-body"},Bi={key:0,class:"module-actions"},Ni=["disabled","onClick"],Hi={key:0,class:"empty-state"},Wi={class:"panel-page"},Ui={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},Gi={class:"data-upload-hint"},$i={key:0,class:"data-source-list"},qi={class:"data-source-head"},ji={class:"data-source-count"},Xi=["title","aria-label","onClick"],Yi={class:"data-source-icon"},Ki={class:"data-source-copy"},Vi={class:"data-source-name"},Zi={class:"data-source-type"},Ji={key:1,class:"empty-state"},kn=3,Qi=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",eo={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(e,{emit:t}){const n=e,a=Z(Array.isArray(n.loadedDataSources)?n.loadedDataSources:[]);xe(()=>n.loadedDataSources,q=>{const j=Array.isArray(q)?q:[];j!==a.value&&(a.value=j)},{immediate:!0});const h=t,f=U(),p=f.uiStateVersion===kn,T=Z(f.activeTab||"scene"),g=Z(!!f.compactMode),L=Z(new Set(p?f.expandedLayerSectionIds||[]:[])),R=Z(new Set(p?f.expandedModuleIds||[]:[])),E=Z(n.customBasemapUrl||""),S=Z(null),A=_e(()=>n.embedded||n.open),D=_e(()=>n.modules.find(q=>q.id==="scene")||null),b=_e(()=>{var q;return((q=D.value)==null?void 0:q.actions)||[]}),M=_e(()=>n.modules.filter(q=>q.id!=="scene")),C=_e(()=>M.value.filter(q=>q.statusTone==="success"||q.statusTone==="warning").length),i=_e(()=>n.overlayOptions.filter(q=>!!q.active).length),c=[{id:"scene",label:"场景",icon:qt},{id:"layers",label:"图层",icon:jt},{id:"data",label:"数据",icon:tn},{id:"modules",label:"模块",icon:$t}],u=_e(()=>{var q;return((q=n.basemapOptions.find(j=>j.value===n.activeBasemap))==null?void 0:q.label)||"未选择"}),d=_e(()=>{var q;return((q=n.terrainOptions.find(j=>j.value===n.activeTerrain))==null?void 0:q.label)||"未选择"});xe(()=>n.modules.map(q=>q.id),q=>{q.includes(T.value)||T.value==="scene"||T.value==="layers"||T.value==="modules"||(T.value="scene")},{immediate:!0}),xe([T,g,L,R],K,{deep:!0}),xe(()=>n.customBasemapUrl,q=>{q!==E.value&&(E.value=q||"")});function r(q){h("update:open",q)}function l(q){return L.value.has(q)}function o(q){const j=new Set(L.value);j.has(q)?j.delete(q):j.add(q),L.value=j}function m(q){return R.value.has(q)}function x(q){const j=new Set(R.value);j.has(q)?j.delete(q):j.add(q),R.value=j}function P(q){q!=null&&q.disabled||h("update:activeBasemap",q.value)}function I(){h("custom-basemap-submit",{url:E.value})}function U(){if(typeof window>"u")return{};try{const q=window.localStorage.getItem(n.storageKey);return q?JSON.parse(q):{}}catch{return{}}}function K(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:kn,activeTab:T.value,compactMode:g.value,expandedLayerSectionIds:[...L.value],expandedModuleIds:[...R.value]}))}catch{}}function W(q){return{scene:qt,effects:Pa,clouds:Fa,wind:La,fluid:Da,shallowWater:Tn}[q]||$t}function V(q,j){var ye;return((ye={scene:{home:Ma,everest:Sn,tileset:Ot},wind:{load:Ta,clear:Xt},fluid:{pick:wn,clear:Xt},shallowWater:{toggle:Tn}}[q])==null?void 0:ye[j])||Ca}function oe(q,j){h("module-action",{moduleId:q,actionId:j})}function ae(q,j,N){const ye=j.type==="range"?Number(N):N;h("control-change",{moduleId:q,controlId:j.id,value:ye})}function re(q){q.disabled||h("overlay-toggle",{overlayId:q.value,value:!q.active})}function Q(q){return{geojson:Pt,json:Pt,kml:Mn,kmz:Mn,shp:jt,gltf:Ot,czml:Pt,"3dtiles":Ot}[q]||Pt}function pe(q){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[q]||q.toUpperCase()}function we(q){var N;const j=(N=q.target)==null?void 0:N.files;!j||j.length===0||(h("data-import",{files:Array.from(j)}),S.value&&(S.value.value=""))}function Re(q){h("data-remove",{id:q})}function Ee(){h("data-clear-all")}return(q,j)=>(ee(),se("aside",{class:Ae(["cesium-tool-shell",{"is-open":A.value,"is-embedded":e.embedded}])},[!e.embedded&&!A.value?(ee(),se("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:j[0]||(j[0]=N=>r(!0))},[Se(ue($t),{size:18,"stroke-width":"2"}),j[7]||(j[7]=z("span",null,"高级控制台",-1)),C.value?(ee(),se("span",Br,fe(C.value),1)):ge("",!0)])):ge("",!0),Ve(z("section",{class:Ae(["cesium-tool-panel",{compact:g.value}]),"aria-label":"Cesium 高级控制台"},[z("header",Nr,[z("div",Hr,[z("span",Wr,[Se(ue(qt),{size:18,"stroke-width":"2"})]),z("span",Ur,[j[8]||(j[8]=z("span",{class:"panel-title"},"3D 高级控制台",-1)),z("span",Gr,fe(u.value)+" / "+fe(d.value),1)])]),z("div",$r,[z("button",{class:"icon-btn",type:"button",title:g.value?"切换为舒展布局":"切换为紧凑布局",onClick:j[1]||(j[1]=N=>g.value=!g.value)},[Se(ue(Sa),{size:16,"stroke-width":"2"})],8,qr),e.embedded?ge("",!0):(ee(),se("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:j[2]||(j[2]=N=>r(!1))},[Se(ue(xn),{size:17,"stroke-width":"2"})]))])]),z("nav",jr,[(ee(),se(nt,null,it(c,N=>z("button",{key:N.id,class:Ae(["tab-btn",{active:T.value===N.id}]),type:"button","aria-pressed":T.value===N.id,onClick:ye=>T.value=N.id},[(ee(),We(ut(N.icon),{size:15,"stroke-width":"2"})),z("span",null,fe(N.label),1)],10,Xr)),64))]),z("div",Yr,[Ve(z("section",Kr,[z("div",Vr,[z("div",Zr,[j[9]||(j[9]=z("span",{class:"overview-label"},"地图源",-1)),z("strong",null,fe(u.value),1)]),z("div",Jr,[j[10]||(j[10]=z("span",{class:"overview-label"},"地形",-1)),z("strong",null,fe(d.value),1)]),z("div",Qr,[j[11]||(j[11]=z("span",{class:"overview-label"},"模块",-1)),z("strong",null,fe(C.value)+"/"+fe(M.value.length),1)])]),b.value.length?(ee(),se("div",ei,[(ee(!0),se(nt,null,it(b.value,N=>(ee(),se("button",{key:N.id,class:Ae(["tool-action",[N.variant||"default",{active:N.active}]]),disabled:N.disabled,type:"button",onClick:ye=>oe(D.value.id,N.id)},[(ee(),We(ut(V(D.value.id,N.id)),{size:15,"stroke-width":"2"})),It(" "+fe(N.label),1)],10,ti))),128))])):(ee(),se("div",ni," 暂无场景快捷操作 "))],512),[[ct,T.value==="scene"]]),Ve(z("section",ai,[e.basemapOptions.length?(ee(),se("div",{key:0,class:Ae(["option-group",{expanded:l("basemap")}])},[z("button",{class:"section-head section-toggle",type:"button","aria-expanded":l("basemap"),onClick:j[3]||(j[3]=N=>o("basemap"))},[z("span",ii,[Se(ue(jt),{size:16,"stroke-width":"2"}),j[12]||(j[12]=z("span",null,"底图源",-1))]),z("span",oi,[z("span",null,fe(u.value),1),Se(ue(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,ri),l("basemap")?(ee(),se("div",si,[z("div",li,[(ee(!0),se(nt,null,it(e.basemapOptions,N=>(ee(),se("button",{key:N.value,class:Ae(["option-card",{active:N.value===e.activeBasemap}]),type:"button",disabled:N.disabled,"aria-pressed":N.value===e.activeBasemap,title:N.description||N.label,onClick:ye=>P(N)},[z("span",null,fe(N.label),1),N.value===e.activeBasemap?(ee(),We(ue(_n),{key:0,size:15,"stroke-width":"2.4"})):ge("",!0)],10,ci))),128))]),z("form",{class:"custom-basemap-editor",onSubmit:gt(I,["prevent"])},[z("div",ui,[Se(ue(wa),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),Ve(z("input",{"onUpdate:modelValue":j[4]||(j[4]=N=>E.value=N),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[zt,E.value]]),z("button",{class:"custom-basemap-submit",type:"submit",disabled:!E.value.trim(),title:"加载自定义 XYZ"},[Se(ue(la),{size:14,"stroke-width":"2"}),j[13]||(j[13]=z("span",null,"加载",-1))],8,di)]),e.customBasemapUrl?(ee(),se("div",hi,fe(e.customBasemapUrl),1)):ge("",!0)],32)])):ge("",!0)],2)):ge("",!0),e.terrainOptions.length?(ee(),se("div",{key:1,class:Ae(["option-group",{expanded:l("terrain")}])},[z("button",{class:"section-head section-toggle",type:"button","aria-expanded":l("terrain"),onClick:j[5]||(j[5]=N=>o("terrain"))},[z("span",mi,[Se(ue(Sn),{size:16,"stroke-width":"2"}),j[14]||(j[14]=z("span",null,"地形",-1))]),z("span",pi,[z("span",null,fe(d.value),1),Se(ue(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,fi),l("terrain")?(ee(),se("div",gi,[z("div",vi,[(ee(!0),se(nt,null,it(e.terrainOptions,N=>(ee(),se("button",{key:N.value,class:Ae(["option-card",{active:N.value===e.activeTerrain}]),type:"button","aria-pressed":N.value===e.activeTerrain,title:N.description||N.label,onClick:ye=>q.$emit("update:activeTerrain",N.value)},[z("span",null,fe(N.label),1),N.value===e.activeTerrain?(ee(),We(ue(_n),{key:0,size:15,"stroke-width":"2.4"})):ge("",!0)],10,yi))),128))])])):ge("",!0)],2)):ge("",!0),e.overlayOptions.length?(ee(),se("div",{key:2,class:Ae(["option-group",{expanded:l("overlay")}])},[z("button",{class:"section-head section-toggle",type:"button","aria-expanded":l("overlay"),onClick:j[6]||(j[6]=N=>o("overlay"))},[z("span",xi,[Se(ue(wn),{size:16,"stroke-width":"2"}),j[15]||(j[15]=z("span",null,"叠加层",-1))]),z("span",_i,[z("span",null,fe(i.value)+"/"+fe(e.overlayOptions.length),1),Se(ue(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,bi),l("overlay")?(ee(),se("div",Si,[z("div",wi,[(ee(!0),se(nt,null,it(e.overlayOptions,N=>(ee(),se("button",{key:N.value,class:Ae(["overlay-row",{active:!!N.active}]),type:"button",disabled:N.disabled,"aria-pressed":!!N.active,title:N.description||N.label,onClick:ye=>re(N)},[z("span",Mi,[z("span",Ci,fe(N.label),1),N.description?(ee(),se("span",Di,fe(N.description),1)):ge("",!0)]),z("span",{class:Ae(["toggle-control",{active:!!N.active}]),"aria-hidden":"true"},[...j[16]||(j[16]=[z("span",{class:"toggle-track"},[z("span",{class:"toggle-thumb"})],-1)])],2)],10,Ti))),128))])])):ge("",!0)],2)):ge("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(ee(),se("div",Li," 暂无图层配置项 ")):ge("",!0)],512),[[ct,T.value==="layers"]]),Ve(z("section",Fi,[z("div",Pi,[(ee(!0),se(nt,null,it(M.value,N=>{var ye,Ce;return ee(),se("article",{key:N.id,class:Ae(["module-item",{expanded:m(N.id)}])},[z("button",{class:"module-head",type:"button","aria-expanded":m(N.id),onClick:de=>x(N.id)},[z("span",Ei,[(ee(),We(ut(W(N.id)),{size:16,"stroke-width":"2"}))]),z("span",Ri,[z("span",ki,fe(N.title),1),N.description?(ee(),se("span",Ii,fe(N.description),1)):ge("",!0)]),z("span",zi,[N.status?(ee(),se("span",{key:0,class:Ae(["module-status",N.statusTone||"neutral"])},fe(N.status),3)):ge("",!0),Se(ue(Ft),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Ai),m(N.id)?(ee(),se("div",Oi,[(ye=N.actions)!=null&&ye.length?(ee(),se("div",Bi,[(ee(!0),se(nt,null,it(N.actions,de=>(ee(),se("button",{key:de.id,class:Ae(["tool-action",[de.variant||"default",{active:de.active}]]),disabled:de.disabled,type:"button",onClick:Fe=>oe(N.id,de.id)},[(ee(),We(ut(V(N.id,de.id)),{size:14,"stroke-width":"2"})),It(" "+fe(de.label),1)],10,Ni))),128))])):ge("",!0),(Ce=N.controls)!=null&&Ce.length?(ee(),se("div",{key:1,class:Ae(["control-list control-list-gui",N.controlLayout?`control-list-${N.controlLayout}`:""])},[Se(un,{title:N.title,controls:N.controls,onChange:de=>ae(N.id,de.control,de.value)},null,8,["title","controls","onChange"])],2)):ge("",!0)])):ge("",!0)],2)}),128))]),M.value.length?ge("",!0):(ee(),se("div",Hi," 暂无可用功能模块 "))],512),[[ct,T.value==="modules"]]),Ve(z("section",Wi,[z("label",Ui,[z("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:S,class:"data-file-input",type:"file",multiple:"",accept:Qi,onChange:we},null,544),z("div",Gi,[Se(ue(tn),{size:28,"stroke-width":"1.5"}),j[17]||(j[17]=z("span",null,"选择文件或拖拽到此处",-1)),j[18]||(j[18]=z("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),a.value.length?(ee(),se("div",$i,[z("div",qi,[z("span",ji," 已加载 "+fe(a.value.length)+" 个数据源 ",1),z("button",{class:"tool-action danger",type:"button",onClick:Ee},[Se(ue(Xt),{size:13,"stroke-width":"2"}),j[19]||(j[19]=It(" 全部清除 ",-1))])]),(ee(!0),se(nt,null,it(a.value,N=>(ee(),se("button",{key:N.id,class:"data-source-row",type:"button",title:`点击移除 ${N.name} (${pe(N.type)})`,"aria-label":`移除 ${N.name}`,onClick:ye=>Re(N.id)},[z("span",Yi,[(ee(),We(ut(Q(N.type)),{size:15,"stroke-width":"2"}))]),z("span",Ki,[z("span",Vi,fe(N.name),1),z("span",Zi,fe(pe(N.type)),1)]),Se(ue(xn),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,Xi))),128))])):(ee(),se("div",Ji," 暂无已导入的数据 "))],512),[[ct,T.value==="data"]])])],2),[[ct,e.embedded||A.value]])],2))}},to=dt(eo,[["__scopeId","data-v-7d2bb0cf"]]),no={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},ao={class:"dialog-header"},ro={class:"dialog-title-row"},io={class:"dialog-file-name"},oo={class:"coord-fields"},so={class:"coord-field"},lo={key:0,class:"coord-error"},co={class:"coord-field"},uo={key:0,class:"coord-error"},ho={class:"coord-field"},fo={key:0,class:"coord-error"},mo={class:"dialog-actions"},po=["disabled"],go={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,a=t,h=Z(""),f=Z(""),p=Z("0"),T=Z(null),g=Z(""),L=Z(""),R=Z(""),E=_e(()=>h.value!==""&&f.value!==""&&!g.value&&!L.value&&!R.value);function S(){const D=parseFloat(h.value),b=parseFloat(f.value),M=parseFloat(p.value);g.value="",L.value="",R.value="",h.value!==""&&(isNaN(D)||D<-180||D>180)&&(g.value="经度范围: -180 ~ 180"),f.value!==""&&(isNaN(b)||b<-90||b>90)&&(L.value="纬度范围: -90 ~ 90"),p.value!==""&&(isNaN(M)||M<0)&&(R.value="高度必须 ≥ 0")}function A(){if(!E.value){S();return}const D=parseFloat(h.value),b=parseFloat(f.value),M=parseFloat(p.value)||0;a("confirm",{lng:D,lat:b,height:M})}return xe(()=>n.visible,D=>{if(!D){g.value="",L.value="",R.value="";return}h.value="",f.value="",p.value="0",g.value="",L.value="",R.value="",D&&setTimeout(()=>{var b;(b=T.value)==null||b.focus()},60)}),(D,b)=>(ee(),We(fa,{to:"body"},[e.visible?(ee(),se("div",{key:0,class:"cesium-data-dialog-overlay",onClick:b[4]||(b[4]=gt(M=>D.$emit("cancel"),["self"]))},[z("div",no,[z("header",ao,[z("div",ro,[Se(ue(Ot),{size:18,"stroke-width":"2"}),b[5]||(b[5]=z("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),z("p",io,fe(e.fileName),1),b[6]||(b[6]=z("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),z("form",{class:"dialog-form",onSubmit:gt(A,["prevent"])},[z("div",oo,[z("label",so,[b[7]||(b[7]=z("span",{class:"coord-label"},"经度 (Longitude)",-1)),Ve(z("input",{ref_key:"lngInputRef",ref:T,"onUpdate:modelValue":b[0]||(b[0]=M=>h.value=M),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:S},null,544),[[zt,h.value]]),g.value?(ee(),se("span",lo,fe(g.value),1)):ge("",!0)]),z("label",co,[b[8]||(b[8]=z("span",{class:"coord-label"},"纬度 (Latitude)",-1)),Ve(z("input",{"onUpdate:modelValue":b[1]||(b[1]=M=>f.value=M),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:S},null,544),[[zt,f.value]]),L.value?(ee(),se("span",uo,fe(L.value),1)):ge("",!0)]),z("label",ho,[b[9]||(b[9]=z("span",{class:"coord-label"},"高度 (Height 米)",-1)),Ve(z("input",{"onUpdate:modelValue":b[2]||(b[2]=M=>p.value=M),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:S},null,544),[[zt,p.value]]),R.value?(ee(),se("span",fo,fe(R.value),1)):ge("",!0)])]),z("div",mo,[z("button",{class:"dialog-btn cancel-btn",type:"button",onClick:b[3]||(b[3]=M=>D.$emit("cancel"))}," 取消 "),z("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!E.value},[Se(ue(la),{size:14,"stroke-width":"2"}),b[10]||(b[10]=It(" 确认放置 ",-1))],8,po)])],32)])])):ge("",!0)]))}},vo=dt(go,[["__scopeId","data-v-81f307a1"]]);function yo(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(C){return(C==null?void 0:C._view)||(C==null?void 0:C.view)}function n(C){const i=t(C);if(!(i!=null&&i.passState))throw new Error("Cesium scene passState is unavailable.");return i.passState}function a(C){const i=t(C);return(i==null?void 0:i.frustumCommandsList)||(i==null?void 0:i._frustumCommandsList)||[]}const h=`
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
`,L=`
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
`;class R{constructor(i){this.commandType=i.commandType,this.geometry=i.geometry,this.attributeLocations=i.attributeLocations,this.primitiveType=i.primitiveType,this.uniformMap=i.uniformMap,this.vertexShaderSource=i.vertexShaderSource,this.fragmentShaderSource=i.fragmentShaderSource,this.rawRenderState=i.rawRenderState,this.framebuffer=i.framebuffer,this.isPostRender=i.isPostRender,this.outputTexture=i.outputTexture,this.autoClear=e.defaultValue(i.autoClear,!1),this.preExecute=i.preExecute,this.modelMatrix=e.defaultValue(i.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(i){switch(this.commandType){case"Draw":{const c=e.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),u=e.ShaderProgram.fromCache({context:i,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),d=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:c,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:u,framebuffer:this.framebuffer,renderState:d,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(i,c){this.geometry=c;const u=e.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=u}update(i){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(i.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&i.commandList.push(this.clearCommand),i.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class E{constructor(){}static loadText(i){const c=new XMLHttpRequest;return c.open("GET",i,!1),c.send(),c.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(i){if(e.defined(i.arrayBufferView)){const u={};u.arrayBufferView=i.arrayBufferView,i.source=u,i.flipY=!1}return new e.Texture(i)}static createDepthFramebuffer(i,c,u){return new e.Framebuffer({context:i,colorTextures:[this.createTexture({context:i,width:c,height:u,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(c*u*4)})],depthRenderbuffer:new e.Renderbuffer({context:i,width:c,height:u,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(i,c,u,d=!1){const r={context:i,colorTextures:[c],destroyAttachments:d};return u&&(r.depthTexture=u),new e.Framebuffer(r)}static createRawRenderState(i){const d={viewport:i.viewport,depthTest:i.depthTest,depthMask:i.depthMask,blending:i.blending};return e.Appearance.getDefaultRenderState(!0,!1,d)}}const M=class M{constructor(i,c={}){if(!i)throw new Error("Cesium Viewer is required");this.viewer=i,this._initConfiguration(c),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(i){this.config={resolution:new e.Cartesian2(i.width||M.DEFAULTS.width,i.height||M.DEFAULTS.height),dimensions:i.dimensions||M.DEFAULTS.dimensions.clone(),heightRange:{min:i.minHeight??M.DEFAULTS.heightRange[0],max:i.maxHeight??M.DEFAULTS.heightRange[1]},baseHeight:i.baseHeight??M.DEFAULTS.baseHeight,fluidParams:i.fluidParams||M.DEFAULTS.fluidParams.clone(),customParams:i.customParams||M.DEFAULTS.customParams.clone(),waterColor:i.waterColor||M.DEFAULTS.waterColor.clone(),lonLat:i.lonLat||[...M.DEFAULTS.lonLat],timeStep:i.timeStep||M.DEFAULTS.timeStep,heightMapSource:i.heightMapSource||M.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(i){const c=Number(i);!Number.isFinite(c)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,c)),this.resetSimulation())}resetSimulation(){var i,c;this._frameCount=0,(c=(i=this.viewer.scene).requestRender)==null||c.call(i)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const i=()=>E.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:i(),B:i(),C:i(),D:i()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(i){if(!(i!=null&&i.arrayBufferView)||!i.width||!i.height)throw new Error("Invalid height map source.");return E.createTexture({context:this.viewer.scene.context,width:i.width,height:i.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:i.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var U,K;const i=this.viewer.scene.context,c=E.createDepthFramebuffer(i,this.config.resolution.x,this.config.resolution.y),u=this.viewer.scene,d=u.frameState,r=n(this.viewer.scene),l=u.camera,o=d.camera,m=r.framebuffer,x=e.BoundingRectangle.clone(r.viewport,new e.BoundingRectangle);let P=null,I=[];try{r.viewport.x=0,r.viewport.y=0,r.viewport.width=this.config.resolution.x,r.viewport.height=this.config.resolution.y,r.framebuffer=c,u.camera=this.heightMapCamera,d.camera=this.heightMapCamera,d.context.uniformState.updateCamera(this.heightMapCamera),I=this._processHeightMapShaders(),this._renderDepthPrepass(r);const W=E.createTexture({context:i,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return P=E.createFramebuffer(i,W),this._copyTexture(c.getColorTexture(0),P),W}finally{this._restoreHeightMapShaders(I),r.framebuffer=m,e.BoundingRectangle.clone(x,r.viewport),u.camera=l,d.camera=o,o&&d.context.uniformState.updateCamera(o),P&&!((U=P.isDestroyed)!=null&&U.call(P))&&P.destroy(),c&&!((K=c.isDestroyed)!=null&&K.call(c))&&c.destroy()}}_renderDepthPrepass(i){const c=this.viewer.scene.frameState;c.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(d=>d.execute(this.viewer.scene.context,i))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const i={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:f}),this._createComputePass("B",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:p}),this._createComputePass("C",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:T}),this._createComputePass("D",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:g})]}_createComputePass(i,{uniforms:c,shaderSource:u}){return new R({commandType:"Compute",uniformMap:c,fragmentShaderSource:new e.ShaderSource({sources:[h,u]}),geometry:E.getFullscreenQuad(),outputTexture:this.textures[i],preExecute:d=>d.commandToExecute.outputTexture=this.textures[i]})}_createMainRenderPass(){const i=A([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new R({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[h,L]}),geometry:this._createBoxGeometry(),modelMatrix:i,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var i,c,u,d;return(d=(u=(c=(i=t(this.viewer.scene))==null?void 0:i.globeDepth)==null?void 0:c.colorFramebufferManager)==null?void 0:u._colorTextures)==null?void 0:d[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(i=>this.viewer.scene.primitives.add(i)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(i){const c=this.viewer.camera.getPickRay(i);return this.viewer.scene.globe.pick(c,this.viewer.scene)}_createOrthographicCamera(){const i=new e.Camera(this.viewer.scene);i.frustum=new e.OrthographicOffCenterFrustum;const[c,u]=this.config.lonLat,d=e.Cartesian3.fromDegrees(c,u,this.config.baseHeight),r=e.Transforms.eastNorthUpToFixedFrame(d),l=i.frustum;l.near=.01,l.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),l.left=-this.config.dimensions.x/2,l.right=this.config.dimensions.x/2,l.bottom=-this.config.dimensions.y/2,l.top=this.config.dimensions.y/2;const o=e.Matrix4.getColumn(r,2,new e.Cartesian3);e.Cartesian3.negate(o,o);const m=e.Matrix4.getColumn(r,1,new e.Cartesian3),x=e.Matrix4.getColumn(r,0,new e.Cartesian3),P=e.Cartesian3.multiplyByScalar(o,-l.far,new e.Cartesian3);return i.position=e.Cartesian3.add(d,P,new e.Cartesian3),i.direction=o,i.up=m,i.right=x,i}destroy(){var i,c;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(u=>{u&&this.viewer.scene.primitives.remove(u)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(u=>{var d;u&&!((d=u.isDestroyed)!=null&&d.call(u))&&u.destroy()}),this.textures={},this._heightMap&&!((c=(i=this._heightMap).isDestroyed)!=null&&c.call(i))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(i,c){const u=this.viewer.scene.context,d=n(this.viewer.scene),r=u.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>i},owner:this}),l=d.framebuffer;d.framebuffer=c,r.execute(u,d),d.framebuffer=l}_getDepthRenderCommands(){var u,d;const i=[],c=a(this.viewer.scene);for(let r=0;r<c.length;++r){const l=c[r],o=(u=l==null?void 0:l.commands)==null?void 0:u[2],m=((d=l==null?void 0:l.indices)==null?void 0:d[2])??(o==null?void 0:o.length)??0;o&&m>0&&i.push(...o.slice(0,m))}return i}_processHeightMapShaders(){const i=[],c=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),u=e.Matrix4.inverse(c,new e.Matrix4),d=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(l=>{var I;if(!((I=l==null?void 0:l.shaderProgram)!=null&&I.fragmentShaderSource)||!l.uniformMap)return;const o=Object.prototype.hasOwnProperty.call(l.uniformMap,"u_inverseEnuMatrix"),m=l.uniformMap.u_inverseEnuMatrix,x=l.shaderProgram,P=new e.Matrix4;l.uniformMap.u_inverseEnuMatrix=()=>{const U=l.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(u,U,P)},l.heightMap_ShaderProgram||(l.heightMap_ShaderProgram=this._getDerivedShaderProgram(d.context,l.shaderProgram,"Height_Map")),l.shaderProgram=l.heightMap_ShaderProgram,i.push({command:l,hadInverseUniform:o,originalInverseUniform:m,originalShaderProgram:x})}),i}_restoreHeightMapShaders(i){i.forEach(c=>{const{command:u,hadInverseUniform:d,originalInverseUniform:r,originalShaderProgram:l}=c;u!=null&&u.uniformMap&&(u.shaderProgram=l,d?u.uniformMap.u_inverseEnuMatrix=r:delete u.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(i,c,u){let d=i.shaderCache.getDerivedShaderProgram(c,u);return e.defined(d)||(d=this._createHeightMapShaderProgram(i,c,u)),d}_createHeightMapShaderProgram(i,c,u){const d=this._modifyFragmentShader(c.fragmentShaderSource);return i.shaderCache.createDerivedShaderProgram(c,u,{vertexShaderSource:c.vertexShaderSource,fragmentShaderSource:d,attributeLocations:c._attributeLocations})}_modifyFragmentShader(i){const c=i.sources.map(u=>e.ShaderSource.replaceMain(u,"czm_heightMap_main"));return c.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:c,defines:i.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};yn(M,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let S=M;const A=(C=[0,0,0],i=[0,0,0],c=[1,1,1])=>{const u=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(i[0]))),d=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(i[1]))),r=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(i[2])));C instanceof e.Cartesian3||(C=e.Cartesian3.fromDegrees(...C));const l=e.Transforms.eastNorthUpToFixedFrame(C);e.Matrix4.multiply(l,u,l),e.Matrix4.multiply(l,d,l),e.Matrix4.multiply(l,r,l);const o=e.Matrix4.fromScale(new e.Cartesian3(...c));return e.Matrix4.multiply(l,o,new e.Matrix4)},D=`
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
    `;function b(){return new e.PostProcessStage({fragmentShader:D})}return{FluidRenderer:S,createSkyEffect:b}}const bo={key:0,class:"fluid-root"},xo={class:"fluid-panel"},_o={class:"panel-actions"},So=["disabled"],wo={key:0,class:"selected-text"},In=1024,Rt=1e4,zn=1200,To=100,Mo=.01,Co=.03,Do=60,Kt=64,Lo=160,Fo={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const a=e,h=n,f=on(),p=Z(10),T=Z(20),g=Z(3),L=Z("#0d4fa3"),R=Z(null),E=Z(null),S=Z(null),A=Z(!1),D=Z(!1),b=Z(null),M=Z(null);let C=null,i=null,c=null,u=null,d=null,r=null,l=0;const o=_e(()=>!Number.isFinite(b.value)||!Number.isFinite(M.value)?"":`经度 ${b.value.toFixed(6)} / 纬度 ${M.value.toFixed(6)}`),m=_e(()=>Number.isFinite(E.value)&&Number.isFinite(S.value)),x=_e(()=>{if(!m.value)return 1;const v=Math.abs(S.value-E.value);return Math.max(v/1e3,.01)}),P=_e(()=>[{id:"threshold",label:"Threshold",type:"range",min:0,max:500,step:1e-4,value:p.value,displayValue:Number(p.value).toFixed(2)},{id:"blend",label:"Blend",type:"range",min:0,max:50,step:1e-4,value:T.value,displayValue:Number(T.value).toFixed(2)},{id:"lightStrength",label:"Light",type:"range",min:0,max:10,step:1e-4,value:g.value,displayValue:Number(g.value).toFixed(2)},{id:"waterLevel",label:"Water Level",type:"range",min:m.value?E.value:0,max:m.value?S.value:1,step:x.value,value:Number.isFinite(Number(R.value))?Number(R.value):0,displayValue:m.value&&Number.isFinite(Number(R.value))?`${Number(R.value).toFixed(2)} m`:"Pick terrain first",disabled:!m.value},{id:"waterColor",label:"Water Color",type:"color",value:L.value}]);xe([p,T,g,L],Pe),xe(R,$e),xe(()=>a.params,v=>{U(v||{})},{deep:!0,immediate:!0}),xe([A,D,o,R,E,S],W,{immediate:!0}),ra(()=>{Ne(!0)});function I(){var O,$;const v=(O=a.getViewer)==null?void 0:O.call(a),F=(($=a.getCesium)==null?void 0:$.call(a))||window.Cesium;if(!v||!F)return f.warning("Cesium 场景尚未就绪。"),null;if(!C){const J=yo(F);C=J.FluidRenderer,i=J.createSkyEffect}return{viewer:v,Cesium:F}}function U(v){Number.isFinite(Number(v.threshold))&&(p.value=Number(v.threshold)),Number.isFinite(Number(v.blend))&&(T.value=Number(v.blend)),Number.isFinite(Number(v.lightStrength))&&(g.value=Number(v.lightStrength)),ke(v.waterColor)&&(L.value=v.waterColor),Number.isFinite(Number(v.waterLevel))&&(R.value=Number(v.waterLevel))}function K({controlId:v,value:F}){v==="threshold"?p.value=Number(F):v==="blend"?T.value=Number(F):v==="lightStrength"?g.value=Number(F):v==="waterLevel"?R.value=Number(F):v==="waterColor"&&ke(F)&&(L.value=F)}function W(){h("state-change",{isPicking:A.value,hasFluid:D.value,selectedText:o.value,waterLevel:R.value,waterLevelMin:E.value,waterLevelMax:S.value})}function V(){const v=I();if(!v)return;const{viewer:F,Cesium:O}=v;Le(),Oe(F,O),A.value=!0,c=new O.ScreenSpaceEventHandler(F.scene.canvas),c.setInputAction($=>{oe(F,O,$.position)},O.ScreenSpaceEventType.LEFT_CLICK)}async function oe(v,F,O){var te,ve;const $=ze(v,O);if(!$){f.warning("未选中可用地形位置。");return}const J=++l;Le();const _=F.Cartographic.fromCartesian($),y=F.Math.toDegrees(_.longitude),H=F.Math.toDegrees(_.latitude),G=Number(_.height),Y=Number.isFinite(G)?G:0,ie=new F.Cartesian3(Rt,Rt,0);oa("正在请求模拟范围高度数据...");try{Be();const ne=Number(p.value)||0,s=Number(T.value)||0,w=Number(g.value)||0,k=await ae(v,F,{lon:y,lat:H,centerHeight:Y,dimensions:ie}),B=ye(k,Y),le=B.baseHeight,ce=B.depth,be=Ce(B,Y),Te=new F.Cartesian3(Rt,Rt,ce);if(J!==l)return;E.value=B.minHeight,S.value=B.maxHeight,R.value=be,k||f.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),u=new C(v,{lonLat:[y,H],width:In,height:In,dimensions:Te,baseHeight:le,minHeight:B.minHeight,maxHeight:B.maxHeight,heightMapSource:k,waterColor:Ue(F,L.value),customParams:new F.Cartesian4(ne,s,w,10),fluidParams:new F.Cartesian4(.9+w/10*.099,Math.min(1,s/50),ne/5e4,de(be,B))}),b.value=y,M.value=H,D.value=!0,(ve=(te=v.scene).requestRender)==null||ve.call(te),f.success("水体流体已创建。")}catch(ne){f.error("水体流体创建失败",ne),f.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{sa()}}async function ae(v,F,O){const $=v==null?void 0:v.terrainProvider,J=Q(O.dimensions);if(!$)return null;if(F.EllipsoidTerrainProvider&&$ instanceof F.EllipsoidTerrainProvider)return j(J);if(typeof F.sampleTerrain!="function"&&typeof F.sampleTerrainMostDetailed!="function")return null;try{return await re(v,F,O,J)}catch(_){if(J<=Kt)throw _;return re(v,F,O,Kt)}}async function re(v,F,O,$){const J=we(F,O,$),_=await Re(F,v.terrainProvider,J);return q(_||J,{size:$})}function Q(v){const F=Math.max(Number(v==null?void 0:v.x)||0,Number(v==null?void 0:v.y)||0),O=Math.ceil(F/Do)+1;return pe(O,Kt,Lo)}function pe(v,F,O){return Math.max(F,Math.min(O,Math.round(v)))}function we(v,{lon:F,lat:O,centerHeight:$,dimensions:J},_){const y=v.Cartesian3.fromDegrees(F,O,$),H=v.Transforms.eastNorthUpToFixedFrame(y),G=[],Y=Math.max(1,_-1);for(let ie=0;ie<_;ie++){const ve=(.5-ie/Y)*J.y;for(let ne=0;ne<_;ne++){const w=(ne/Y-.5)*J.x,k=new v.Cartesian3(w,ve,0),B=v.Matrix4.multiplyByPoint(H,k,new v.Cartesian3);G.push(v.Cartographic.fromCartesian(B))}}return G}async function Re(v,F,O){const $=Ee(F);return Number.isInteger($)&&typeof v.sampleTerrain=="function"?v.sampleTerrain(F,$,O):typeof v.sampleTerrainMostDetailed=="function"?v.sampleTerrainMostDetailed(F,O):v.sampleTerrain(F,10,O)}function Ee(v){const F=Number(v==null?void 0:v._bottomLevel);return Number.isFinite(F)?Math.max(0,F-1):null}function q(v,{size:F}){var J;const O=N(v);if(!O)return null;const $=new Float32Array(F*F*4);for(let _=0;_<F*F;_++){const y=Number((J=v[_])==null?void 0:J.height),H=_*4;$[H]=Number.isFinite(y)?De(y,O.minHeight,O.maxHeight):O.minHeight,$[H+1]=0,$[H+2]=0,$[H+3]=1}return{width:F,height:F,arrayBufferView:$,minHeight:O.minHeight,maxHeight:O.maxHeight}}function j(v){return{width:v,height:v,arrayBufferView:new Float32Array(v*v*4),minHeight:0,maxHeight:0}}function N(v){let F=Number.POSITIVE_INFINITY,O=Number.NEGATIVE_INFINITY;for(const $ of v||[]){const J=Number($==null?void 0:$.height);Number.isFinite(J)&&(F=Math.min(F,J),O=Math.max(O,J))}return!Number.isFinite(F)||!Number.isFinite(O)?null:{minHeight:F,maxHeight:O}}function ye(v,F){const O=Number(v==null?void 0:v.minHeight),$=Number(v==null?void 0:v.maxHeight);if(Number.isFinite(O)&&Number.isFinite($)){const y=Number(F),H=Number.isFinite(y)?Math.min(O,$,y):Math.min(O,$),G=Number.isFinite(y)?Math.max(O,$,y):Math.max(O,$),Y=Math.max(G-H,Mo);return{baseHeight:H,depth:Y,minHeight:H,maxHeight:H+Y}}const J=Number(F),_=Number.isFinite(J)?J-To:0;return{baseHeight:_,depth:zn,minHeight:_,maxHeight:_+zn}}function Ce(v,F){const O=v.minHeight+v.depth*Co,$=Number(F),J=Number.isFinite($)?$:O;return De(J,v.minHeight,v.maxHeight)}function de(v,F){const O=F.maxHeight-F.minHeight;return!Number.isFinite(O)||O<=0?0:De((v-F.minHeight)/O,0,1)}function Fe(){return!Number.isFinite(E.value)||!Number.isFinite(S.value)?null:{minHeight:Math.min(E.value,S.value),maxHeight:Math.max(E.value,S.value)}}function Ue(v,F){const O=Ie(F)||Ie("#0d4fa3");return new v.Cartesian3(O.red,O.green,O.blue)}function Ge(){var O;const v=Ie(L.value),F=(O=u==null?void 0:u.config)==null?void 0:O.waterColor;!v||!F||(F.x=v.red,F.y=v.green,F.z=v.blue)}function ke(v){return typeof v=="string"&&/^#[0-9a-f]{6}$/i.test(v)}function Ie(v){return ke(v)?{red:Number.parseInt(v.slice(1,3),16)/255,green:Number.parseInt(v.slice(3,5),16)/255,blue:Number.parseInt(v.slice(5,7),16)/255}:null}function De(v,F,O){return Math.max(F,Math.min(O,v))}function ze(v,F){if(!F)return null;if(v.scene.pickPositionSupported&&typeof v.scene.pickPosition=="function"){const $=v.scene.pickPosition(F);if($)return $}const O=v.camera.getPickRay(F);return O?v.scene.globe.pick(O,v.scene):null}function Pe(){var $,J,_;if(!(u!=null&&u.config))return;const v=Number(p.value)||0,F=Number(T.value)||0,O=Number(g.value)||0;u.config.customParams&&(u.config.customParams.x=v,u.config.customParams.y=F,u.config.customParams.z=O),u.config.fluidParams&&(u.config.fluidParams.x=.9+O/10*.099,u.config.fluidParams.y=Math.min(1,F/50),u.config.fluidParams.z=v/5e4),Ge(),(_=(J=($=u.viewer)==null?void 0:$.scene)==null?void 0:J.requestRender)==null||_.call(J)}function $e(){var J,_,y,H;if(!((J=u==null?void 0:u.config)!=null&&J.fluidParams))return;const v=Fe(),F=Number(R.value);if(!v||!Number.isFinite(F))return;const O=De(F,v.minHeight,v.maxHeight);if(O!==F){R.value=O;return}const $=de(O,v);typeof u.setInitialWaterLevel=="function"?u.setInitialWaterLevel($):(u.config.fluidParams.w=$,(H=(y=(_=u.viewer)==null?void 0:_.scene)==null?void 0:y.requestRender)==null||H.call(y))}function Oe(v,F){var O,$;if(!r){const J=v.scene;r={shadows:v.shadows,resolutionScale:v.resolutionScale,msaaSamples:J.msaaSamples,depthTestAgainstTerrain:J.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:J.logarithmicDepthBuffer,highDynamicRange:J.highDynamicRange,fogEnabled:(O=J.fog)==null?void 0:O.enabled,showGroundAtmosphere:J.globe.showGroundAtmosphere,skyAtmosphereShow:($=J.skyAtmosphere)==null?void 0:$.show,enableLighting:J.globe.enableLighting}}v.shadows=!0,v.resolutionScale=1,v.scene.msaaSamples=4,v.scene.globe.depthTestAgainstTerrain=!0,v.scene.logarithmicDepthBuffer=!0,v.scene.highDynamicRange=!0,v.scene.fog&&(v.scene.fog.enabled=!0),v.scene.globe.showGroundAtmosphere=!0,v.scene.skyAtmosphere&&(v.scene.skyAtmosphere.show=!0),v.scene.globe.enableLighting=!0,!d&&i&&(d=i(F),v.scene.postProcessStages.add(d))}function Ze(v){if(!v||!r)return;const F=v.scene;v.shadows=r.shadows,v.resolutionScale=r.resolutionScale,r.msaaSamples!==void 0&&(F.msaaSamples=r.msaaSamples),F.globe.depthTestAgainstTerrain=r.depthTestAgainstTerrain,F.logarithmicDepthBuffer=r.logarithmicDepthBuffer,F.highDynamicRange=r.highDynamicRange,F.fog&&r.fogEnabled!==void 0&&(F.fog.enabled=r.fogEnabled),F.globe.showGroundAtmosphere=r.showGroundAtmosphere,F.skyAtmosphere&&r.skyAtmosphereShow!==void 0&&(F.skyAtmosphere.show=r.skyAtmosphereShow),F.globe.enableLighting=r.enableLighting,r=null}function qe(){Ne(!1),f.success("水体流体已清除。")}function Le(){c&&(c.destroy(),c=null),A.value=!1}function Be(){if(u){try{u.destroy()}catch{}u=null,D.value=!1}}function Ne(v){var O,$,J;const F=(O=a.getViewer)==null?void 0:O.call(a);if(l+=1,Le(),Be(),b.value=null,M.value=null,R.value=null,E.value=null,S.value=null,F&&d){try{F.scene.postProcessStages.remove(d)}catch{}d=null}v&&F&&Ze(F),(J=($=F==null?void 0:F.scene)==null?void 0:$.requestRender)==null||J.call($)}function X(){Ne(!0),h("close")}return t({startPickHeightMap:V,clearFluid:qe}),(v,F)=>e.headless?ge("",!0):(ee(),se("div",bo,[z("div",xo,[z("div",{class:"panel-head"},[F[0]||(F[0]=z("span",{class:"panel-title"},"水体流体",-1)),z("button",{class:"panel-close",title:"关闭",onClick:X}," × ")]),z("div",_o,[z("button",{class:Ae(["action-btn primary",{active:A.value}]),onClick:V},fe(A.value?"等待选点":"捕捉高度图"),3),z("button",{class:"action-btn",disabled:!D.value&&!A.value,onClick:qe}," 清除 ",8,So)]),o.value?(ee(),se("div",wo,fe(o.value),1)):ge("",!0),Se(un,{class:"param-list",title:"Fluid Parameters",controls:P.value,onChange:K},null,8,["controls"])])]))}},Po=dt(Fo,[["__scopeId","data-v-882532f8"]]),Ao=`
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
`+Ao).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
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
`,Ro=`
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
`,ko=`
  varying vec3 vWorldPos;

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Io=`
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
`;function zo(e=256){const t=new Float32Array(e*e);for(let S=0;S<e*e;S++)t[S]=Math.random();const n=(S,A)=>{const D=new Float32Array(e*e);for(let b=0;b<e;b++)for(let M=0;M<e;M++){let C=0,i=0;for(let c=-A;c<=A;c++)for(let u=-A;u<=A;u++)C+=S[(b+c+e)%e*e+(M+u+e)%e],i++;D[b*e+M]=C/i}return D},a=n(t,4),h=n(t,1),f=new Float32Array(e*e);for(let S=0;S<e*e;S++)f[S]=a[S]*.7+h[S]*.3;const p=document.createElement("canvas");p.width=p.height=e;const T=p.getContext("2d"),g=T.createImageData(e,e),L=(S,A)=>f[(A+e)%e*e+(S+e)%e],R=3;for(let S=0;S<e;S++)for(let A=0;A<e;A++){const D=(L(A-1,S)-L(A+1,S))*R,b=(L(A,S-1)-L(A,S+1))*R,M=Math.hypot(D,b,1),C=(S*e+A)*4;g.data[C]=(D/M*.5+.5)*255,g.data[C+1]=(b/M*.5+.5)*255,g.data[C+2]=(1/M*.5+.5)*255,g.data[C+3]=255}T.putImageData(g,0,0);const E=new sn(p);return E.wrapS=E.wrapT=ln,E.colorSpace=ca,E}function Oo(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#d8c79b",t.fillRect(0,0,512,512);for(let a=0;a<12e3;a++){const h=170+Math.random()*70|0;t.fillStyle=`rgba(${h},${h-22},${h-65},0.22)`,t.fillRect(Math.random()*512,Math.random()*512,1.6,1.6)}for(let a=0;a<26;a++){const h=60+Math.random()*40|0,f=90+Math.random()*50|0,p=70+Math.random()*40|0;t.fillStyle=`rgba(${h},${f},${p},0.30)`,t.beginPath(),t.ellipse(Math.random()*512,Math.random()*512,8+Math.random()*26,6+Math.random()*20,Math.random()*6,0,7),t.fill()}const n=new sn(e);return n.wrapS=n.wrapT=ln,n.repeat.set(10,10),n.colorSpace=Aa,n}function Bo(e=256){const t=(L,R)=>{const E=new Float32Array(e*e);for(let S=0;S<e;S++)for(let A=0;A<e;A++){let D=0,b=0;for(let M=-R;M<=R;M++)for(let C=-R;C<=R;C++)D+=L[(S+M+e)%e*e+(A+C+e)%e],b++;E[S*e+A]=D/b}return E},n=()=>{const L=new Float32Array(e*e);for(let b=0;b<e*e;b++)L[b]=Math.random();const R=t(L,3),E=t(L,1),S=new Float32Array(e*e);let A=1e9,D=-1e9;for(let b=0;b<e*e;b++)S[b]=R[b]*.65+E[b]*.35,A=Math.min(A,S[b]),D=Math.max(D,S[b]);for(let b=0;b<e*e;b++)S[b]=(S[b]-A)/(D-A);return S},a=n(),h=n(),f=document.createElement("canvas");f.width=f.height=e;const p=f.getContext("2d"),T=p.createImageData(e,e);for(let L=0;L<e*e;L++){const R=L*4;T.data[R]=a[L]*255,T.data[R+1]=h[L]*255,T.data[R+2]=0,T.data[R+3]=255}p.putImageData(T,0,0);const g=new sn(f);return g.wrapS=g.wrapT=ln,g.colorSpace=ca,g.minFilter=Cn,g.magFilter=Cn,g.generateMipmaps=!1,g}function No(e={}){const{onReady:t,onError:n,onFpsUpdate:a}=e,h=Z(!1),f=Z(0);let p=null,T=null,g=null,L=null,R=null,E=null,S=null,A=null,D=null,b=null,M=null,C=null,i=null;const c=new Qe;let u=null,d=null,r=null;const l=new Ea;let o=0,m=0;const x={value:0},P={value:.9},I={value:0},U={value:new Qe};let K=3,W=-100;const V=.62,oe={};let ae=!0,re=null;const Q=new Dn,pe={elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2};async function we(X){if(!X){n==null||n(new Error("Container element not provided"));return}if(!h.value){E=X;try{g=new Ra({antialias:!0,alpha:!0}),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setSize(E.clientWidth,E.clientHeight),g.toneMapping=ka,g.toneMappingExposure=V,g.setClearColor(0,0),E.appendChild(g.domElement),p=new Dn,T=new Ia(55,E.clientWidth/E.clientHeight,1,2e4),T.position.set(0,55,280),Re(),Ce(),de(),Ee(),q(),j(),N(),ye(),ke(),Ie(),$e(),h.value=!0,t==null||t()}catch(v){n==null||n(v)}}}function Re(){C=new za,C.scale.setScalar(12e3),p.add(C);const X=C.material.uniforms;X.turbidity.value=6,X.rayleigh.value=1.6,X.mieCoefficient.value=.005,X.mieDirectionalG.value=.8}function Ee(){i=new Ua(16774368,2.6),p.add(i),p.add(new Ga(13627391,2117738,.7))}function q(){const X=new Fn(1600,1600,200,200);X.rotateX(-Math.PI/2);const v=X.attributes.position;for(let O=0;O<v.count;O++){const $=v.getX(O),J=v.getZ(O);let y=-34+At.clamp((J+800)/1600,0,1)*44;y+=Math.sin($*.012)*Math.cos(J*.014)*3.5,y+=Math.sin($*.06+J*.05)*1.1,y+=(Math.random()-.5)*.6,v.setY(O,y)}X.computeVertexNormals();const F=new Pn({map:Oo(),roughness:1,metalness:0});On(F,{uTime:x,uCaustic:P}),p.add(new _t(X,F))}function j(){const X=new $a(1,0),v=[8023642,7035722,11887946,13598051,9083483];for(let F=0;F<30;F++){const O=new Pn({color:v[F%v.length],roughness:.9,flatShading:!0});On(O,{uTime:x,uCaustic:P});const $=new _t(X,O),J=3+Math.random()*9;$.scale.set(J,J*(.5+Math.random()*.6),J),$.position.set((Math.random()-.5)*1100,-24+Math.random()*22,-300+Math.random()*900),$.rotation.set(Math.random(),Math.random(),Math.random()),p.add($)}}function N(){M=new qa(g),b=new ja(256,{generateMipmaps:!0,minFilter:Xa}),D=new Ya(1,2e4,b),D.position.set(0,4,0),p.add(D);const X=new Yt;g.getDrawingBufferSize(X),A=new Ka(X.x,X.y),A.depthTexture=new Va(X.x,X.y),A.depthTexture.type=Za,A.depthTexture.format=Ja}function ye(){const X=new Yt;g.getDrawingBufferSize(X);const v=zo(256),F={uTime:x,tRefraction:{value:A.texture},tDepth:{value:A.depthTexture},tEnv:{value:b.texture},normalMap:{value:v},resolution:{value:X.clone()},cameraNear:{value:T.near},cameraFar:{value:T.far},invProjection:{value:new An},camWorld:{value:new An},sunDirection:{value:new Qe},sunColor:{value:new xt(16774106)},waterColor:{value:new xt(pe.waterColor)},absorption:{value:new Qe(.45,.09,.05)},foamColor:{value:new xt(15925247)},clarity:{value:pe.clarity},foamWidth:{value:pe.foamWidth},waveHeight:{value:pe.waveHeight},reflection:{value:pe.reflection}};S=new _t(new Fn(16e3,16e3,384,384),new Ln({uniforms:F,vertexShader:Eo,fragmentShader:Ro})),S.rotation.x=-Math.PI/2,p.add(S)}function Ce(){const X=new Ln({side:Oa,transparent:!0,depthWrite:!1,uniforms:{uTime:x,uNoise:{value:Bo(256)},sunDirection:{value:new Qe},sunColor:{value:new xt(16773341)},skyTint:{value:new xt(7315406)},uCoverage:{value:pe.cloudCoverage},uFlash:I,uFlashPos:U},vertexShader:ko,fragmentShader:Io});u=new _t(new Ba(8e3,32,16),X),u.renderOrder=2,p.add(u)}function de(){r=new Na({color:14478335,transparent:!0,opacity:0,blending:Ha,depthWrite:!1,depthTest:!1}),d=new Wa,d.visible=!1,p.add(d)}function Fe(X,v,F,O,$,J){const _=[];let y=X,H=v;const G=Math.max(5,Math.floor((F-O)/80));for(let te=0;te<=G;te++){const ve=te/G;_.push(new Qe(y,F+(O-F)*ve,H)),y+=(Math.random()-.5)*$,H+=(Math.random()-.5)*$}const Y=new er(new tr(_),G*4,J,5,!1),ie=new _t(Y,r);return ie.renderOrder=3,d.add(ie),_}function Ue(){for(const O of d.children)O.geometry.dispose();d.clear();const X=1+Math.floor(Math.random()*3);let v=0,F=0;for(let O=0;O<X;O++){const $=(Math.random()-.5)*5e3,J=-(1e3+Math.random()*4500);O===0&&(v=$,F=J);const _=Fe($,J,1180,18,110,14),y=2+Math.floor(Math.random()*3);for(let H=0;H<y;H++){const G=_[2+Math.floor(Math.random()*(_.length-4))];Fe(G.x,G.z,G.y,G.y-(160+Math.random()*420),130,7)}}U.value.set(v,1100,F)}function Ge(){if(!pe.lightningEnabled){I.value=0,d.visible=!1,g.toneMappingExposure=V;return}const X=x.value;X>=K&&(W=X,Ue(),K=X+pe.lightningInterval*(.4+Math.random()*.8));const v=X-W;let F=0;v>=0&&v<.5&&(F=Math.max(0,Math.exp(-v*5.5)*(.5+.5*Math.sin(v*60)))),I.value=F*2.4,d.visible=F>.1,r.opacity=Math.min(1,F*1.7),g.toneMappingExposure=V+F*.75}function ke(){L=new Qa(T,g.domElement),L.target.set(0,130,-400),L.maxPolarAngle=Math.PI*.49,L.minDistance=30,L.maxDistance=2e3,L.enableDamping=!0}function Ie(){window.addEventListener("keydown",De),window.addEventListener("keyup",ze)}function De(X){const v=X.target&&X.target.tagName;v==="INPUT"||v==="TEXTAREA"||(oe[X.code]=!0)}function ze(X){oe[X.code]=!1}function Pe(X){const v=(oe.ShiftLeft||oe.ShiftRight?240:95)*X,F=new Qe,O=new Qe,$=new Qe;T.getWorldDirection(F).normalize(),O.crossVectors(F,T.up).normalize(),$.set(0,0,0),oe.KeyW&&$.add(F),oe.KeyS&&$.addScaledVector(F,-1),oe.KeyD&&$.add(O),oe.KeyA&&$.addScaledVector(O,-1),oe.KeyE&&($.y+=1),oe.KeyQ&&($.y-=1),$.lengthSq()!==0&&($.normalize().multiplyScalar(v),T.position.add($),L.target.add($),T.position.y<2.5&&(T.position.y=2.5))}function $e(){const X=At.degToRad(90-pe.elevation),v=At.degToRad(pe.azimuth);if(c.setFromSphericalCoords(1,X,v),C.material.uniforms.sunPosition.value.copy(c),i.position.copy(c).multiplyScalar(1e3),S&&S.material.uniforms.sunDirection.value.copy(c).normalize(),u){u.material.uniforms.sunDirection.value.copy(c).normalize();const F=At.clamp(1-pe.elevation/28,0,1);u.material.uniforms.sunColor.value.setRGB(1,.95-.22*F,.86-.48*F)}p.remove(C),Q.add(C),re&&re.dispose(),re=M.fromScene(Q),p.environment=re.texture,Q.remove(C),p.add(C),ae=!0}function Oe(){R=requestAnimationFrame(Oe);const X=l.getDelta();x.value+=X,P.value=pe.causticStrength,Pe(X),Ge(),L.update(),T.updateMatrixWorld(),S.material.uniforms.invProjection.value.copy(T.projectionMatrixInverse),S.material.uniforms.camWorld.value.copy(T.matrixWorld),S.visible=!1,ae&&(D.update(g,p),ae=!1),u.visible=!1;const v=d.visible;d.visible=!1,g.setRenderTarget(A),g.render(p,T),g.setRenderTarget(null),u.visible=!0,d.visible=v,S.visible=!0,g.render(p,T),o++;const F=performance.now();F-m>=1e3&&(f.value=Math.round(o*1e3/(F-m)),a==null||a(f.value),o=0,m=F)}function Ze(){if(!T||!g||!E)return;const X=E.clientWidth,v=E.clientHeight;T.aspect=X/v,T.updateProjectionMatrix(),g.setSize(X,v);const F=new Yt;g.getDrawingBufferSize(F),A.setSize(F.x,F.y),S.material.uniforms.resolution.value.copy(F)}function qe(){R||(l.start(),Oe())}function Le(){R&&(cancelAnimationFrame(R),R=null)}function Be(X){const v={...pe};Object.assign(pe,X),(X.elevation!==v.elevation||X.azimuth!==v.azimuth)&&$e(),S&&(X.clarity!==v.clarity&&(S.material.uniforms.clarity.value=X.clarity),X.waveHeight!==v.waveHeight&&(S.material.uniforms.waveHeight.value=X.waveHeight),X.foamWidth!==v.foamWidth&&(S.material.uniforms.foamWidth.value=X.foamWidth),X.reflection!==v.reflection&&(S.material.uniforms.reflection.value=X.reflection),X.waterColor!==v.waterColor&&S.material.uniforms.waterColor.value.set(X.waterColor)),X.causticStrength!==v.causticStrength&&(P.value=X.causticStrength),X.cloudCoverage!==v.cloudCoverage&&u&&(u.material.uniforms.uCoverage.value=X.cloudCoverage)}function Ne(){Le(),window.removeEventListener("keydown",De),window.removeEventListener("keyup",ze),g&&(g.dispose(),E==null||E.removeChild(g.domElement)),p==null||p.traverse(X=>{X.geometry&&X.geometry.dispose(),X.material&&(Array.isArray(X.material)?X.material.forEach(v=>v.dispose()):X.material.dispose())}),A==null||A.dispose(),b==null||b.dispose(),re==null||re.dispose(),M==null||M.dispose(),p=null,T=null,g=null,L=null,S=null,C=null,i=null,u=null,d=null,r=null,h.value=!1}return Ht(()=>{Ne()}),{isReady:h,fps:f,init:we,start:qe,pause:Le,dispose:Ne,handleResize:Ze,updateParams:Be}}const Ho={__name:"ShallowWaterOverlay",props:{visible:{type:Boolean,default:!1},elevation:{type:Number,default:30},azimuth:{type:Number,default:150},clarity:{type:Number,default:.085},causticStrength:{type:Number,default:.9},waterColor:{type:String,default:"#2bb3c4"},waveHeight:{type:Number,default:.5},foamWidth:{type:Number,default:2.4},reflection:{type:Number,default:.38},cloudCoverage:{type:Number,default:.58},lightningEnabled:{type:Boolean,default:!0},lightningInterval:{type:Number,default:2}},emits:["ready","error","fps-update"],setup(e,{expose:t,emit:n}){const a=e,h=n,f=Z(null),{isReady:p,fps:T,init:g,start:L,pause:R,dispose:E,handleResize:S,updateParams:A}=No({onReady:()=>h("ready"),onError:C=>h("error",C),onFpsUpdate:C=>h("fps-update",C)});xe(()=>a.visible,async C=>{C?(await D(),L()):R()}),xe(()=>[a.elevation,a.azimuth,a.clarity,a.causticStrength,a.waterColor,a.waveHeight,a.foamWidth,a.reflection,a.cloudCoverage,a.lightningEnabled,a.lightningInterval],()=>{b()});async function D(){!f.value||p.value||(await g(f.value),b())}function b(){A({elevation:a.elevation,azimuth:a.azimuth,clarity:a.clarity,causticStrength:a.causticStrength,waterColor:a.waterColor,waveHeight:a.waveHeight,foamWidth:a.foamWidth,reflection:a.reflection,cloudCoverage:a.cloudCoverage,lightningEnabled:a.lightningEnabled,lightningInterval:a.lightningInterval})}function M(){S()}return rn(()=>{window.addEventListener("resize",M),a.visible&&D()}),Ht(()=>{window.removeEventListener("resize",M),E()}),t({isReady:p,fps:T,start:L,pause:R}),(C,i)=>Ve((ee(),se("div",{ref_key:"canvasContainerRef",ref:f,class:"shallow-water-overlay"},null,512)),[[ct,e.visible]])}},Wo=dt(Ho,[["__scopeId","data-v-e9c0d469"]]);function Uo({getViewer:e,getCesium:t,heightThreshold:n=8e4}={}){const a=Z(!0),h=Z(!1);let f=!0,p=null;function T(){const E=e();E&&(p=E.scene.postRender.addEventListener(()=>{a.value&&g(E)}))}function g(E){var i,c;const S=t(),A=E.camera,b=S.Cartographic.fromCartesian(A.positionWC).height,M=E.scene,C=M.globe;b<n?h.value||(f=C.enableLighting,C.showGroundAtmosphere=!1,C.enableLighting=!1,M.skyAtmosphere&&(M.skyAtmosphere.show=!1),h.value=!0,(i=M.requestRender)==null||i.call(M)):h.value&&(C.showGroundAtmosphere=!0,C.enableLighting=f,M.skyAtmosphere&&(M.skyAtmosphere.show=!0),h.value=!1,(c=M.requestRender)==null||c.call(M))}function L(){var D;a.value=!a.value;const E=e();if(!E)return a.value;const S=E.scene,A=S.globe;return a.value||(A.showGroundAtmosphere=!0,A.enableLighting=f,S.skyAtmosphere&&(S.skyAtmosphere.show=!0),h.value=!1,(D=S.requestRender)==null||D.call(S)),a.value}function R(){p&&(p(),p=null)}return{atmosphereAutoCloseEnabled:a,atmosphereAutoClosed:h,start:T,toggleAutoClose:L,cleanup:R}}const dn="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Go=`${dn}Cesium.js`,$o=`${dn}Widgets/widgets.css`;async function qo({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=dn),await Xo($o,"cesium-widgets-style"),await jo(Go,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Bt(t,e),t}function Bt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function jo(e,t){return new Promise((n,a)=>{const h=document.getElementById(t);if(h){if(h.getAttribute("data-loaded")==="true"){n();return}h.addEventListener("load",()=>n(),{once:!0}),h.addEventListener("error",()=>a(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const f=document.createElement("script");f.id=t,f.src=e,f.async=!0,f.onload=()=>{f.setAttribute("data-loaded","true"),n()},f.onerror=()=>a(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(f)})}function Xo(e,t){return new Promise((n,a)=>{if(document.getElementById(t)){n();return}const f=document.createElement("link");f.id=t,f.rel="stylesheet",f.href=e,f.onload=()=>n(),f.onerror=()=>a(new Error(`样式加载失败: ${e}`)),document.head.appendChild(f)})}const Yo="Asia/Shanghai",Ko="UTC+8",Vo=new Intl.DateTimeFormat("zh-CN",{timeZone:Yo,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Zo(e,t){var n,a,h,f,p,T,g;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...L)=>Qo(e,t,...L),e.animation.viewModel.timeFormatter=(...L)=>es(e,t,...L)),e.timeline){const L=(...R)=>ts(e,t,...R);e.timeline.makeLabel=L,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=L),(h=(a=e.timeline).updateFromClock)==null||h.call(a),(p=(f=e.timeline).zoomTo)==null||p.call(f,e.clock.startTime,e.clock.stopTime)}(g=(T=e.scene).requestRender)==null||g.call(T)}}function hn(e,t,...n){var T;const a=n.find(Jo)||((T=e==null?void 0:e.clock)==null?void 0:T.currentTime);if(!a)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const h=t.JulianDate.toDate(a),f=Vo.formatToParts(h),p=Object.fromEntries(f.filter(({type:g})=>g!=="literal").map(({type:g,value:L})=>[g,L]));return{year:p.year||"0000",month:p.month||"01",day:p.day||"01",hour:p.hour||"00",minute:p.minute||"00",second:p.second||"00"}}function Jo(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function Qo(e,t,...n){const{year:a,month:h,day:f}=hn(e,t,...n);return`${a}-${h}-${f}`}function es(e,t,...n){const{hour:a,minute:h,second:f}=hn(e,t,...n);return`${a}:${h}:${f} ${Ko}`}function ts(e,t,...n){const{month:a,day:h,hour:f,minute:p}=hn(e,t,...n);return`${a}-${h} ${f}:${p}`}function ns({getViewer:e}){let t=null,n=null;function a(){var T;const p=e==null?void 0:e();if(p&&((T=p._cesiumWidget)!=null&&T._creditContainer&&(p._cesiumWidget._creditContainer.style.display="none"),h(),t=setInterval(()=>{const g=document.querySelector(".cesium-credit-container");g&&g.innerHTML.length>0&&(g.innerHTML="",g.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const g=document.createElement("style");g.id="cesium-credit-override",g.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(g),n=g}}function h(){var g;const p=e==null?void 0:e();if(!p)return;(g=p._cesiumWidget)!=null&&g._creditContainer&&(p._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",p._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(L=>{L.style.cssText="display: none !important; visibility: hidden !important;",L.innerHTML=""}),p.scene&&p.scene.frameState&&p.scene.frameState.creditDisplay&&(p.scene.frameState.creditDisplay.hasCredits=()=>!1,p.scene.frameState.creditDisplay.destroy=()=>{})}function f(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:a,cleanupCreditHider:f}}const Vt="经度: --, 纬度: --, 海拔: --米";function as({getViewer:e,getCesium:t,onCoordinatePick:n}){let a=null,h=null,f=null;const p=Z("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function T(){const A=e==null?void 0:e(),D=t==null?void 0:t();!A||!D||(S(),h=A.scene.canvas,a=new D.ScreenSpaceEventHandler(h),f=()=>{p.value=Vt},h.addEventListener("mouseleave",f),a.setInputAction(b=>{g(b.endPosition,A,D)},D.ScreenSpaceEventType.MOUSE_MOVE),a.setInputAction(b=>{const M=b.endPosition,C=b.startPosition;if(!D.defined(A.terrainProvider))return;const i=A.scene.globe.ellipsoid;if(!A.camera.pickEllipsoid(C,i)){const u=A.camera;u.rotate(D.Cartesian3.UNIT_X,-.002*(M.y-C.y)),u.rotate(D.Cartesian3.UNIT_Y,-.002*(M.x-C.x))}},D.ScreenSpaceEventType.RIGHT_DRAG),a.setInputAction(()=>{},D.ScreenSpaceEventType.RIGHT_DOWN),a.setInputAction(()=>{},D.ScreenSpaceEventType.RIGHT_UP))}function g(A,D,b){const M=L(A,D,b);if(!M){p.value=Vt;return}const C=b.Cartographic.fromCartesian(M);if(!C||!Number.isFinite(C.longitude)||!Number.isFinite(C.latitude)){p.value=Vt;return}const i=b.Math.toDegrees(C.longitude).toFixed(6),c=b.Math.toDegrees(C.latitude).toFixed(6),u=(Number.isFinite(C.height)?C.height:0).toFixed(2);p.value=`经度: ${i}, 纬度: ${c}, 海拔: ${u}米`,typeof n=="function"&&n({lng:Number(i),lat:Number(c),height:Number(u)})}function L(A,D,b){if(!A)return null;const M=D.scene,C=R(A,M,b);if(C)return C;const i=D.camera.getPickRay(A);if(i){const u=M.globe.pick(i,M);if(E(u))return u}const c=D.camera.pickEllipsoid(A,M.globe.ellipsoid);return E(c)?c:null}function R(A,D,b){if(!D.pickPositionSupported||typeof D.pickPosition!="function")return null;const M=typeof D.pick=="function"?D.pick(A):null;if(!b.defined(M))return null;const C=D.pickPosition(A);return E(C)?C:null}function E(A){return!!A&&Number.isFinite(A.x)&&Number.isFinite(A.y)&&Number.isFinite(A.z)}function S(){f&&h&&(h.removeEventListener("mouseleave",f),f=null),h=null,a&&(a.destroy(),a=null)}return{coordinateDisplay:p,setupInteractions:T,cleanupInteractions:S}}function Bn(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function rs(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function pt(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function Ct(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Nn(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:a,Resource:h,HeightmapTerrainData:f,Rectangle:p,TileAvailability:T,CustomHeightmapTerrainProvider:g}=e;function L(A,D,b,M,C,i){const c=A.tileXYToRectangle(b,M,C);return t(p.intersection(c,D,i))}function R(A){const D=[[[0,0,1,0]]],b=new T(A.tilingScheme,19);for(let M=0;M<D.length;M++){const C=D[M];for(let i=0;i<C.length;i++){const c=C[i];b.addAvailableTileRange(M,c[0],c[1],c[2],c[3])}}return b}function E(A,D,b,M,C){const i=new f({buffer:A._transformBuffer(D),width:A._width,height:A._height,childTileMask:A._getChildTileMask(M,C,b),structure:A._terrainDataStructure});return i._skirtHeight=6e3,A.availability.addAvailableTileRange(b,M,C,M,C),i}class S extends g{constructor(D={}){if(super({...D,ellipsoid:a.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(D.url))throw new n("options.url is required.");this._dataType=D.dataType??"int16",this._url=D.url,this._subdomains=D.subdomains,this._token=D.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=R(this)}get availability(){return this._availability}requestTileGeometry(D,b,M,C){if(M>=this._bottomLevel)return Promise.reject(new Error(`Level ${M} is outside supported range.`));if(M<this._topLevel)return Promise.resolve(new f({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(D,b,M),structure:this._terrainDataStructure}));let i=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const u=this._subdomains[(D+b)%this._subdomains.length];i=i.replace("{s}",u)}i=i.replace("{token}",this._token).replace("{x}",D).replace("{y}",b).replace("{z}",M+1);const c=h.fetchArrayBuffer({url:i,request:C});if(c)return c.then(u=>u.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):nr.inflate(u)).then(u=>E(this,u,M,D,b))}getTileDataAvailable(D,b,M){return M<this._bottomLevel}_transformBuffer(D){let b=2;this._dataType==="float"&&(b=4);const M=D;if(M.length!==22500*b)return null;const C=new ArrayBuffer(b),i=new DataView(C),c=this._width,u=this._height,d=new Uint8Array(c*u*4);for(let r=0;r<u;r++)for(let l=0;l<c;l++){const o=Math.floor(149*r/(u-1)),m=Math.floor(149*l/(c-1)),x=b*(150*o+m);let P;b===4?(i.setInt8(0,M[x]),i.setInt8(1,M[x+1]),i.setInt8(2,M[x+2]),i.setInt8(3,M[x+3]),P=i.getFloat32(0,!0)):P=M[x]+256*M[x+1],(P>1e4||P<-2e3)&&(P=0);const I=(P+1e3)/.001,U=4*(r*c+l);d[U]=I/65536,d[U+1]=(I-256*d[U]*256)/256,d[U+2]=I-256*d[U]*256-256*d[U+1],d[U+3]=255}return d}_getVHeightBuffer(){let D=this._vHeightBuffer;if(!t(D)){D=new Uint8ClampedArray(this._width*this._height*4);for(let b=0;b<this._width*this._height*4;)D[b++]=15,D[b++]=66,D[b++]=64,D[b++]=255;this._vHeightBuffer=D}return D}_getChildTileMask(D,b,M){const C=new p,i=this._tilingScheme,c=this._rectangles,u=i.tileXYToRectangle(D,b,M);let d=0;for(let r=0;r<c.length&&d!==15;r++){const l=c[r];if(l.maxLevel<=M)continue;const o=l.rectangle,m=p.intersection(o,u,C);t(m)&&(L(i,o,2*D,2*b,M+1,C)&&(d|=4),L(i,o,2*D+1,2*b,M+1,C)&&(d|=8),L(i,o,2*D,2*b+1,M+1,C)&&(d|=1),L(i,o,2*D+1,2*b+1,M+1,C)&&(d|=2))}return d}}return S}function is({getViewer:e,getCesium:t,activeBasemap:n,applyBasemap:a,resolvePresetLayerIds:h,message:f,validationTimeoutMs:p=5e3,circuitBreakThreshold:T=3}){const g=new Map,L=new Set,R={value:!1};let E=null,S=[],A=[];function D(d,r={}){return d?L.has(d)&&!r.forceReload?(R.value=!0,!1):a(d,r)?(b(d),!0):(M(d),!1):!1}function b(d){var I,U;i();const r=e==null?void 0:e();if(!(r!=null&&r.imageryLayers))return;const l=h(d),o=[];for(let K=0;K<r.imageryLayers.length;K++){const W=r.imageryLayers.get(K);(I=W==null?void 0:W.imageryProvider)!=null&&I._descriptorId&&l.includes(W.imageryProvider._descriptorId)&&o.push(W)}if(!o.length)return;S=o;let m=!1;const x=()=>{m=!0,i(),g.delete(d),L.has(d)&&(L.delete(d),R.value=L.size>0)},P=K=>{m||(M(d),i())};for(const K of S){const W=K.imageryProvider;if(W!=null&&W.errorEvent&&(W.errorEvent.addEventListener(P),A.push(()=>W.errorEvent.removeEventListener(P))),W!=null&&W.ready){x();return}(U=W==null?void 0:W.readyPromise)!=null&&U.then&&W.readyPromise.then(x).catch(P)}E=setTimeout(()=>{m||M(d)},p)}function M(d){const r=(g.get(d)||0)+1;g.set(d,r),r>=T&&(L.add(d),R.value=!0,C(d))}function C(d){var l,o,m,x,P;const r="custom_China_Blender_preset_2";if(d===r){const I="imagery_tianditu_preset";L.has(I)?(o=f==null?void 0:f.error)==null||o.call(f,"所有底图均加载失败，请检查网络",{closable:!0}):((l=f==null?void 0:f.warning)==null||l.call(f,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=I);return}if(!L.has(r))(m=f==null?void 0:f.warning)==null||m.call(f,"底图加载失败，已降级到默认底图",{closable:!0}),n.value=r;else{const I="imagery_tianditu_preset";L.has(I)?(P=f==null?void 0:f.error)==null||P.call(f,"所有底图均加载失败，请检查网络",{closable:!0}):((x=f==null?void 0:f.warning)==null||x.call(f,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=I)}}function i(){E&&(clearTimeout(E),E=null);for(const d of A)try{d()}catch{}A=[],S=[]}function c(){g.clear(),L.clear(),R.value=!1,i()}function u(){i(),g.clear(),L.clear(),R.value=!1}return{switchBasemap:D,resetCircuitBreaker:c,isCircuitOpen:R,cleanup:u}}const St=["0","1","2","3","4","5","6","7"],wt="https://t{s}.tianditu.gov.cn/",os="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",ss=96188,Dt="custom-xyz",Hn="webgis_custom_basemap_url",ls="cesium_tdt_label_layer_visible",Wn="cesium_tdt_boundary_layer_visible",Un="cesium_tdt_text_label_layer_visible",Gn="cesium_osm_buildings_visible",$n="cesium_google_photorealistic_3d_tiles_visible";function cs(){return ar.map(e=>({...e,description:us(e.value),source:"preset"}))}function us(e){const t=Lt(e);if(!t.length)return"复合底图";const n=t.map(a=>{const h=cn(a);return h?h.name:a});return n.slice(0,3).join(" + ")+(n.length>3?" ...":"")}const qn=cs(),jn=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function ds({getViewer:e,getCesium:t,message:n,backendBaseUrl:a,tiandituToken:h,cesiumIonToken:f}){let p=null,T=null,g=null,L=null,R=0,E=null,S=null,A=0,D=0,b=[];const M=()=>Xn(h),C=()=>Xn(f),i=[],c=Z([]),u=new Map,d=new Map,r=new Map,l=new Map,o="cesium_custom_xyz_basemap_url",m=Z(En),x=Z("tianditu"),P=Z(Bn(Hn,"")||Bn(o,"")),I=pt(ls,!1),U=Z(pt(Wn,I??!1)),K=Z(pt(Un,I??!1)),W=Z(pt(Gn,!1)),V=Z(pt($n,!1)),oe=_e(()=>[...qn.map(s=>s.value!=="custom"?s:{...s,description:P.value?P.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!P.value}),...c.value]),ae=is({getViewer:e,getCesium:t,activeBasemap:m,applyBasemap:$,resolvePresetLayerIds:Lt,message:n}),re=_e(()=>ae.isCircuitOpen.value),Q=_e(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:U.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:K.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:W.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:V.value}]);xe(m,s=>{!(e!=null&&e())||!(t!=null&&t())||$(s)}),xe(P,s=>{rs(Hn,s)}),xe(x,async s=>{!(e!=null&&e())||!(t!=null&&t())||await _(s)}),xe(U,s=>{Ct(Wn,s),Pe()}),xe(K,s=>{Ct(Un,s),Pe()}),xe(W,s=>{Ct(Gn,s),Le()}),xe(V,s=>{Ct($n,s),Be()});function pe(){const s=t==null?void 0:t();if(!s)return[];u.clear(),d.clear();const w=qn.map(B=>{const le=new s.ProviderViewModel({name:B.label,tooltip:ps(B),category:"项目底图",iconUrl:Vn(gs(B.value),vs(B.value,B.label)),creationFunction:()=>j(B.value)});return u.set(B.value,le),d.set(le,B.value),le}),k=q();return c.value=k.map((B,le)=>{const ce=String((B==null?void 0:B.name)||`官方底图 ${le+1}`).trim(),be=xs(ce,le);return u.set(be,B),d.set(B,be),{value:be,label:`官方 · ${ce}`,description:String((B==null?void 0:B.tooltip)||ce),source:"official"}}),[...w,...k]}function we(){const s=t==null?void 0:t();return s?(r.clear(),l.clear(),jn.map(w=>{const k=new s.ProviderViewModel({name:w.label,tooltip:w.description||w.label,category:"项目地形",iconUrl:Vn(hs(w.value),fs(w.value)),creationFunction:()=>H(w.value)});return r.set(w.value,k),l.set(k,w.value),k})):[]}function Re(s=[]){return u.get(m.value)||s[0]}function Ee(s=[]){return r.get(x.value)||s[0]}function q(){const s=t==null?void 0:t();if(typeof(s==null?void 0:s.createDefaultImageryProviderViewModels)!="function")return[];try{return s.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function j(s){return Lt(s).length>0?N(s):s==="google"?Ce():s===Dt?de():ye()}function N(s){const w=t==null?void 0:t();if(!w)return[];const k=Lt(s);if(!k.length)return ye();const B=M(),le=P.value;return br(w,k,{tiandituTk:B,customUrl:le})}function ye(){const s=t==null?void 0:t();return[new s.UrlTemplateImageryProvider({url:`${wt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${M()}`,subdomains:St,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:18})]}function Ce(){const s=t==null?void 0:t();return[new s.UrlTemplateImageryProvider({url:`${a}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:20})]}function de(){const s=t==null?void 0:t(),w=Kn(P.value);return w.valid?[new s.UrlTemplateImageryProvider({url:w.url,subdomains:w.subdomains,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(w.message,{closable:!0}),ye())}function Fe(){const s=t==null?void 0:t();return new s.UrlTemplateImageryProvider({url:`${wt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${M()}`,subdomains:St,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:10})}function Ue(){const s=t==null?void 0:t();return new s.UrlTemplateImageryProvider({url:`${wt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${M()}`,subdomains:St,tilingScheme:new s.WebMercatorTilingScheme,maximumLevel:18})}function Ge(){var Te,He,rt,yt,bt;ke();const s=t==null?void 0:t(),w=(He=(Te=e==null?void 0:e())==null?void 0:Te.baseLayerPicker)==null?void 0:He.viewModel;if(!w||!((rt=s==null?void 0:s.knockout)!=null&&rt.getObservable))return;const k=s.knockout.getObservable(w,"selectedImagery"),B=s.knockout.getObservable(w,"selectedTerrain"),le=[],ce=(yt=k==null?void 0:k.subscribe)==null?void 0:yt.call(k,ht=>{const je=d.get(ht);je&&(m.value!==je&&(m.value=je),ze())}),be=(bt=B==null?void 0:B.subscribe)==null?void 0:bt.call(B,ht=>{const je=l.get(ht);je&&(x.value!==je&&(x.value=je),y(je))});ce&&le.push(ce),be&&le.push(be),b=le}function ke(){b.forEach(s=>{var w;return(w=s==null?void 0:s.dispose)==null?void 0:w.call(s)}),b=[]}function Ie(){return Pe(),Le(),Be(),!0}function De(){const s=e==null?void 0:e();if(s!=null&&s.imageryLayers)for(;i.length;){const w=i.pop();try{s.imageryLayers.remove(w,!0)}catch{}}}function ze(){var s,w,k;Pe(),Le(),Be(),(k=(w=(s=e==null?void 0:e())==null?void 0:s.scene)==null?void 0:w.requestRender)==null||k.call(w)}function Pe(){var w,k;const s=e==null?void 0:e();!s||!(t!=null&&t())||(U.value?$e():Ze(),K.value?Oe():qe(),(k=(w=s.scene).requestRender)==null||k.call(w))}function $e(){var w,k,B,le;const s=e==null?void 0:e();if(!(s!=null&&s.imageryLayers)||p)return p&&((k=(w=s==null?void 0:s.imageryLayers)==null?void 0:w.raiseToTop)==null||k.call(w,p)),p;try{return p=s.imageryLayers.addImageryProvider(Fe()),(le=(B=s.imageryLayers).raiseToTop)==null||le.call(B,p),p}catch(ce){return n.error("天地图国界线图层加载失败",ce),null}}function Oe(){var w,k,B,le;const s=e==null?void 0:e();if(!(s!=null&&s.imageryLayers)||T)return T&&((k=(w=s==null?void 0:s.imageryLayers)==null?void 0:w.raiseToTop)==null||k.call(w,T)),T;try{return T=s.imageryLayers.addImageryProvider(Ue()),(le=(B=s.imageryLayers).raiseToTop)==null||le.call(B,T),T}catch(ce){return n.error("天地图文字标注图层加载失败",ce),null}}function Ze(){const s=e==null?void 0:e();if(!(!p||!(s!=null&&s.imageryLayers))){try{s.imageryLayers.remove(p,!0)}catch{}p=null}}function qe(){const s=e==null?void 0:e();if(!(!T||!(s!=null&&s.imageryLayers))){try{s.imageryLayers.remove(T,!0)}catch{}T=null}}async function Le(){var w,k,B;const s=e==null?void 0:e();!((w=s==null?void 0:s.scene)!=null&&w.primitives)||!(t!=null&&t())||(W.value?await v():F(),(B=(k=s.scene).requestRender)==null||B.call(k))}async function Be(){var w,k,B;const s=e==null?void 0:e();!((w=s==null?void 0:s.scene)!=null&&w.primitives)||!(t!=null&&t())||(V.value?await Ne():X(),(B=(k=s.scene).requestRender)==null||B.call(k))}async function Ne(){var B,le,ce;const s=e==null?void 0:e(),w=t==null?void 0:t();if(!((B=s==null?void 0:s.scene)!=null&&B.primitives))return null;if(E)return s.scene.globe.show=!1,E;if(S)return S;if(typeof(w==null?void 0:w.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),V.value=!1,null;const k=++A;Bt(w,C()),S=w.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const be=await S;return k!==A||!V.value?(Yn(be),null):(E=s.scene.primitives.add(be),s.scene.globe.show=!1,s.scene.skyAtmosphere.show=!0,(ce=(le=s.scene).requestRender)==null||ce.call(le),E)}catch(be){return k!==A||(V.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",be)),null}finally{k===A&&(S=null)}}function X(){var w,k,B;const s=e==null?void 0:e();if(A+=1,S=null,!E||!((w=s==null?void 0:s.scene)!=null&&w.primitives)){(k=s==null?void 0:s.scene)!=null&&k.globe&&(s.scene.globe.show=!0);return}try{s.scene.primitives.remove(E)}catch{}E=null,(B=s==null?void 0:s.scene)!=null&&B.globe&&(s.scene.globe.show=!0)}async function v(){var B,le,ce,be;const s=e==null?void 0:e(),w=t==null?void 0:t();if(!((B=s==null?void 0:s.scene)!=null&&B.primitives)||g)return g;if(L)return L;if(typeof((le=w==null?void 0:w.Cesium3DTileset)==null?void 0:le.fromIonAssetId)!="function"&&typeof(w==null?void 0:w.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),W.value=!1,null;const k=++R;Bt(w,C()),await O(),L=ms(w,{maximumScreenSpaceError:8});try{const Te=await L;return k!==R||!W.value?(Yn(Te),null):(g=s.scene.primitives.add(Te),(be=(ce=s.scene).requestRender)==null||be.call(ce),g)}catch(Te){return k!==R||(W.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",Te)),null}finally{k===R&&(L=null)}}function F(){var w,k,B;const s=e==null?void 0:e();if(R+=1,L=null,!(!g||!((w=s==null?void 0:s.scene)!=null&&w.primitives))){try{s.scene.primitives.remove(g)}catch{}g=null,(B=(k=s.scene).requestRender)==null||B.call(k)}}async function O(){if(x.value==="cesiumWorld")return!0;x.value="cesiumWorld";const s=await _("cesiumWorld");return s||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),s}function $(s,w={}){var ce,be,Te;const k=e==null?void 0:e();if(!k||!(t!=null&&t()))return!1;mr(),De();const B=(ce=k.baseLayerPicker)==null?void 0:ce.viewModel,le=u.get(s);if(B&&le){if(w.forceReload&&B.selectedImagery===le){const He=u.get(En)||u.get("tianditu");He&&He!==le&&(B.selectedImagery=He)}return B.selectedImagery!==le&&(B.selectedImagery=le),ze(),!0}try{return j(s).forEach(rt=>{rt&&i.push(k.imageryLayers.addImageryProvider(rt))}),Pe(),(Te=(be=k.scene).requestRender)==null||Te.call(be),!0}catch(He){return n.error("地图源切换失败",He),!1}}function J(){return _(x.value)}async function _(s){var Te,He,rt,yt,bt,ht,je,mn,pn,gn,vn;const w=e==null?void 0:e(),k=t==null?void 0:t();if(!w||!k)return!1;const B=(Te=w.baseLayerPicker)==null?void 0:Te.viewModel,le=r.get(s);if(B&&le)return B.selectedTerrain!==le&&(B.selectedTerrain=le),y(s),(rt=(He=w.scene).requestRender)==null||rt.call(He),!0;const ce=++D;if(s==="ellipsoid")return w.terrainProvider=new k.EllipsoidTerrainProvider,y(s),(bt=(yt=w.scene).requestRender)==null||bt.call(yt),!0;if(s==="cesiumWorld")try{const Je=await G();return ce!==D?!1:(w.terrainProvider=Je,y(s),(je=(ht=w.scene).requestRender)==null||je.call(ht),!0)}catch(Je){return ce!==D||(w.terrainProvider=new k.EllipsoidTerrainProvider,y("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",Je)),!1}if(s==="arcgisWorld")try{const Je=await Y();return ce!==D?!1:(w.terrainProvider=Je,y(s),(pn=(mn=w.scene).requestRender)==null||pn.call(mn),!0)}catch(Je){return ce!==D||(w.terrainProvider=new k.EllipsoidTerrainProvider,y("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",Je)),!1}const be=Nn(k);try{return w.terrainProvider=new be({url:`${wt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:St,token:M()}),y(s),(vn=(gn=w.scene).requestRender)==null||vn.call(gn),!0}catch(Je){return w.terrainProvider=new k.EllipsoidTerrainProvider,y("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",Je),!1}}function y(s){var k;const w=e==null?void 0:e();(k=w==null?void 0:w.scene)!=null&&k.globe&&(w.scene.globe.depthTestAgainstTerrain=s!=="ellipsoid")}function H(s){const w=t==null?void 0:t();if(s==="ellipsoid")return new w.EllipsoidTerrainProvider;if(s==="cesiumWorld")return G().catch(B=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",B),ie(s,"ellipsoid"),new w.EllipsoidTerrainProvider));if(s==="arcgisWorld")return Y().catch(B=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",B),ie(s,"ellipsoid"),new w.EllipsoidTerrainProvider));const k=Nn(w);try{return new k({url:`${wt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:St,token:M()})}catch(B){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",B),new w.EllipsoidTerrainProvider}}async function G(){var k,B;const s=t==null?void 0:t();Bt(s,C());const w={requestWaterMask:!1,requestVertexNormals:!0};if(typeof s.createWorldTerrainAsync=="function")return s.createWorldTerrainAsync(w);if(typeof s.createWorldTerrain=="function")return s.createWorldTerrain(w);if(typeof((k=s.CesiumTerrainProvider)==null?void 0:k.fromIonAssetId)=="function")return s.CesiumTerrainProvider.fromIonAssetId(1,w);if((B=s.IonResource)!=null&&B.fromAssetId&&s.CesiumTerrainProvider){const le=await s.IonResource.fromAssetId(1);return new s.CesiumTerrainProvider({url:le,...w})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function Y(){var w;const s=t==null?void 0:t();if(typeof((w=s==null?void 0:s.ArcGISTiledElevationTerrainProvider)==null?void 0:w.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return s.ArcGISTiledElevationTerrainProvider.fromUrl(os)}function ie(s,w){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{x.value===s&&(x.value=w)},0)}function te({overlayId:s,value:w}){if(s==="tdt-boundaries"){U.value=!!w;return}if(s==="tdt-text-labels"){K.value=!!w;return}if(s==="cesium-osm-buildings"){W.value=!!w;return}s==="google-photorealistic-3d-tiles"&&(V.value=!!w)}function ve({url:s}){const w=String(s||"").trim(),k=Kn(w);if(!k.valid){n.warning(k.message,{closable:!0});return}if(P.value=w,m.value===Dt){$(Dt,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}m.value=Dt,n.success("已切换到自定义 XYZ 图源")}function ne(){De(),Ze(),qe(),F(),X(),ke()}return{activeBasemap:m,activeTerrain:x,customXyzBasemapUrl:P,basemapOptions:oe,terrainOptions:jn,overlayOptions:Q,createImageryProviderViewModels:pe,createTerrainProviderViewModels:we,getSelectedImageryProviderViewModel:Re,getSelectedTerrainProviderViewModel:Ee,bindLayerPickerStateSync:Ge,addBaseImageryLayers:Ie,initCustomTerrain:J,applyBasemap:$,applyTerrain:_,handleOverlayToggle:te,handleCustomBasemapSubmit:ve,cleanupLayers:ne,basemapSwitcher:ae,basemapCircuitOpen:re,resetCircuitBreaker:ae.resetCircuitBreaker}}function hs(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function fs(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Xn(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Yn(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function ms(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const a=await e.Cesium3DTileset.fromIonAssetId(ss,t);return!a.style&&typeof e.Cesium3DTileStyle=="function"&&(a.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),a}return e.createOsmBuildingsAsync(t)}function ps(e){return e.value===Dt?`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`:e.description||e.label}function gs(e){const t=Lt(e);if(!t.length)return"#37d67a";const n=cn(t[0]);if(!n)return"#37d67a";const a=n.category;return a==="imagery"?"#5ea1ff":a==="vector"?"#37d67a":a==="terrain"?"#d0a449":a==="label"?"#a78bfa":a==="theme"?"#f59e0b":a==="custom"?"#f472b6":"#37d67a"}function vs(e,t){return String(t||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function Kn(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const a=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let h=[];return a?(h=ys(a[1],a[2]),n=n.replace(a[0],"{s}")):/\{s\}/i.test(n)&&(h=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:h}:bs(n)?{valid:!0,message:"",url:n,subdomains:h}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:h}}function ys(e,t){const n=String(e||"").charCodeAt(0),a=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(a))return[];const h=n<=a?1:-1,f=[];for(let p=n;h>0?p<=a:p>=a;p+=h)f.push(String.fromCharCode(p));return f}function bs(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function xs(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function Vn(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),a=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(a)}`}function _s({getViewer:e,getCesium:t,message:n}){function a(p){const T=e==null?void 0:e(),g=t==null?void 0:t();if(!T||!g)return;const L=typeof p=="number"?p:2;T.camera.flyTo({destination:g.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-g.Math.PI_OVER_TWO,roll:0},duration:L})}function h(){const p=e==null?void 0:e(),T=t==null?void 0:t();!p||!T||p.camera.flyTo({destination:T.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:T.Math.toRadians(0),pitch:T.Math.toRadians(-25),roll:0},duration:3})}async function f(){const p=e==null?void 0:e(),T=t==null?void 0:t();if(!(!p||!T))try{const g=await T.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");p.scene.primitives.add(g),p.flyTo(g,{duration:3,offset:new T.HeadingPitchRange(T.Math.toRadians(0),T.Math.toRadians(-25),g.boundingSphere.radius*2.5)})}catch(g){n.error(`加载模型失败: ${g}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:a,flyToEverest:h,loadCustomTileset:f}}const Ss="tileset.json";let kt=null;async function Zn(){if(kt)return kt;const[{decompressBuffer:e},{parseShpPartsToGeoJSON:t}]=await Promise.all([en(()=>import("./decompressFile-DiMYlfaO.js").then(n=>n.f),__vite__mapDeps([4,5]),import.meta.url),en(()=>import("./shpParser-Ct7_BiKs.js").then(n=>n.s),__vite__mapDeps([6,5,7,2,3,8,9,10,11,12,13,14,15]),import.meta.url)]);return kt={decompressBuffer:e,parseShpPartsToGeoJSON:t},kt}function Zt(e){const t=e.lastIndexOf(".");return t===-1?"":e.slice(t+1).toLowerCase()}function st(e,t,n,a){if(!(!e||!t||!n))try{a==="3dtiles"&&n.boundingSphere?e.flyTo(n,{duration:2,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-30),n.boundingSphere.radius*2)}):n.entities&&n.entities.values.length>0&&e.flyTo(n,{duration:2})}catch{}}function ft(e){return URL.createObjectURL(e)}function Xe(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function ws({getViewer:e,getCesium:t,message:n}){const a=Z([]),h=Z(null);let f=0;async function p(r){const l=t(),o=e();if(!l||!o)throw new Error("Cesium 未初始化");const m=ft(r);try{const x=await l.GeoJsonDataSource.load(m,{stroke:l.Color.fromCssColorString("#3ddc84"),fill:l.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:l.Color.fromCssColorString("#3ddc84"),markerSize:24}),P=`geojson_${++f}`;x.name=r.name,await o.dataSources.add(x),st(o,l,x,"geojson");const I={id:P,name:r.name,type:"geojson",entity:x,blobUrl:m};return a.value=[...a.value,I],n.success(`GeoJSON "${r.name}" 加载成功`),I}catch(x){throw Xe(m),x}}async function T(r){const l=t(),o=e();if(!l||!o)throw new Error("Cesium 未初始化");const m=ft(r);try{const x=await l.KmlDataSource.load(m,{camera:o.scene.camera,canvas:o.scene.canvas}),P=`kml_${++f}`;x.name=r.name,await o.dataSources.add(x),st(o,l,x,"kml");const I={id:P,name:r.name,type:"kml",entity:x,blobUrl:m};return a.value=[...a.value,I],n.success(`KML "${r.name}" 加载成功`),I}catch(x){throw Xe(m),x}}async function g(r){const l=t(),o=e();if(!l||!o)throw new Error("Cesium 未初始化");const m=ft(r);try{const x=await l.KmlDataSource.load(m,{camera:o.scene.camera,canvas:o.scene.canvas}),P=`kmz_${++f}`;x.name=r.name,await o.dataSources.add(x),st(o,l,x,"kmz");const I={id:P,name:r.name,type:"kmz",entity:x,blobUrl:m};return a.value=[...a.value,I],n.success(`KMZ "${r.name}" 加载成功`),I}catch{return Xe(m),await L(r)}}async function L(r){const l=t(),o=e(),m=await r.arrayBuffer(),{decompressBuffer:x}=await Zn(),I=(await x(m,r.name)).find(V=>{var oe;return V.ext==="kml"||((oe=V.name)==null?void 0:oe.toLowerCase().endsWith(".kml"))});if(!I)throw new Error("KMZ 压缩包中未找到 KML 文件");let U;typeof I.content=="string"?U=I.content:I.content instanceof ArrayBuffer||I.content instanceof Uint8Array?U=hr(I.content):U=String(I.content||"");const K=new Blob([U],{type:"application/vnd.google-earth.kml+xml"}),W=URL.createObjectURL(K);try{const V=await l.KmlDataSource.load(W,{camera:o.scene.camera,canvas:o.scene.canvas}),oe=`kmz_${++f}`;V.name=r.name,await o.dataSources.add(V),st(o,l,V,"kmz");const ae={id:oe,name:r.name,type:"kmz",entity:V};return a.value=[...a.value,ae],n.success(`KMZ "${r.name}" 加载成功（手动解压）`),ae}finally{URL.revokeObjectURL(W)}}async function R(r,l=[]){const o=t(),m=e();if(!o||!m)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:x}=await Zn(),P={shp:await r.arrayBuffer()};for(const ae of l){const re=Zt(ae.name);re==="dbf"&&(P.dbf=await ae.arrayBuffer()),re==="shx"&&(P.shx=await ae.arrayBuffer()),re==="prj"&&(P.prj=await ae.arrayBuffer()),re==="cpg"&&(P.cpg=await ae.arrayBuffer())}const I=await x(P),U=Array.isArray(I)?I:[I],K=U.reduce((ae,re)=>{var Q;return ae+(((Q=re==null?void 0:re.features)==null?void 0:Q.length)||0)},0),W=U.length===1?U[0]:{type:"FeatureCollection",features:U.flatMap(ae=>(ae==null?void 0:ae.features)||[])},V=new Blob([JSON.stringify(W)],{type:"application/geo+json"}),oe=URL.createObjectURL(V);try{const ae=await o.GeoJsonDataSource.load(oe,{stroke:o.Color.fromCssColorString("#ffcc00"),fill:o.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:o.Color.fromCssColorString("#ffcc00"),markerSize:20}),re=`shp_${++f}`;ae.name=r.name,await m.dataSources.add(ae),st(m,o,ae,"shp");const Q={id:re,name:r.name,type:"shp",entity:ae};return a.value=[...a.value,Q],n.success(`Shapefile "${r.name}" 加载成功 (${K} 个要素)`),URL.revokeObjectURL(oe),Q}catch(ae){throw URL.revokeObjectURL(oe),ae}}async function E(r){const l=t(),o=e();if(!l||!o)throw new Error("Cesium 未初始化");const m=ft(r);let x=null;try{x=await M(r)}catch{}if(x)try{const P=await i(l,o,m,r.name,x),U={id:`gltf_${++f}`,name:r.name,type:"gltf",entity:P,blobUrl:m};return a.value=[...a.value,U],n.success(`3D 模型 "${r.name}" 加载成功 (${x.lng.toFixed(4)}, ${x.lat.toFixed(4)}, ${x.height.toFixed(1)}m)`),U}catch(P){throw Xe(m),P}return h.value&&Xe(h.value.blobUrl),h.value={file:r,blobUrl:m,name:r.name},{needsCoordInput:!0,file:r}}async function S(r){const l=t(),o=e();if(!h.value)throw new Error("没有等待确认的模型文件");const{blobUrl:m,name:x}=h.value;try{const P=await i(l,o,m,x,r),U={id:`gltf_${++f}`,name:x,type:"gltf",entity:P,blobUrl:m};a.value=[...a.value,U],n.success(`3D 模型 "${x}" 加载成功 (${r.lng.toFixed(4)}, ${r.lat.toFixed(4)}, ${r.height.toFixed(1)}m)`);const K=l.Cartesian3.fromDegrees(r.lng,r.lat,r.height+500);return o.camera.flyTo({destination:K,orientation:{heading:l.Math.toRadians(0),pitch:l.Math.toRadians(-30),roll:0},duration:2}),h.value=null,U}catch(P){throw Xe(m),h.value=null,P}}function A(){h.value&&(Xe(h.value.blobUrl),h.value=null)}async function D(r){const l=t(),o=e();if(!l||!o)throw new Error("Cesium 未初始化");const m=ft(r);try{const x=await l.CzmlDataSource.load(m),P=`czml_${++f}`;x.name=r.name,await o.dataSources.add(x),st(o,l,x,"czml");const I={id:P,name:r.name,type:"czml",entity:x,blobUrl:m};return a.value=[...a.value,I],n.success(`CZML "${r.name}" 加载成功`),I}catch(x){throw Xe(m),x}}async function b(r){const l=t(),o=e();if(!l||!o)throw new Error("Cesium 未初始化");const m=ft(r);try{const x=await l.Cesium3DTileset.fromUrl(m),P=`tileset_${++f}`;o.scene.primitives.add(x);const I={id:P,name:r.name,type:"3dtiles",entity:x,blobUrl:m};return a.value=[...a.value,I],st(o,l,x,"3dtiles"),n.success(`3D Tiles "${r.name}" 加载成功`),I}catch(x){throw Xe(m),x}}async function M(r){var x,P,I,U,K;const l=Zt(r.name);let o;if(l==="gltf"){const W=await r.text();o=JSON.parse(W)}else{const W=await r.arrayBuffer();o=C(W)}if(!o)return null;if((x=o.extensionsUsed)!=null&&x.includes("CESIUM_RTC")&&((I=(P=o.extensions)==null?void 0:P.CESIUM_RTC)!=null&&I.center)){const W=o.extensions.CESIUM_RTC.center;if(W.length>=3){const V=t();if(V){const oe=new V.Cartesian3(W[0],W[1],W[2]),ae=V.Cartographic.fromCartesian(oe);return{lng:V.Math.toDegrees(ae.longitude),lat:V.Math.toDegrees(ae.latitude),height:ae.height}}}}const m=(U=o.asset)==null?void 0:U.extras;if(m){const W=m.longitude??m.lng,V=m.latitude??m.lat,oe=m.height??m.altitude??m.alt??0;if(W!=null&&V!=null)return{lng:Number(W),lat:Number(V),height:Number(oe)}}if(((K=o.nodes)==null?void 0:K.length)>0&&o.nodes[0].matrix){const W=o.nodes[0].matrix;if(W.length>=16){const V=W[12],oe=W[13],ae=W[14];if(Math.abs(V)>1e5||Math.abs(oe)>1e5){const re=t();if(re)try{const Q=new re.Cartesian3(V,oe,ae),pe=re.Cartographic.fromCartesian(Q);return{lng:re.Math.toDegrees(pe.longitude),lat:re.Math.toDegrees(pe.latitude),height:pe.height}}catch{}}}}return null}function C(r){if(r.byteLength<20)return null;const l=new DataView(r);if(l.getUint32(0,!0)!==1179937895)return null;const m=l.getUint32(12,!0);if(l.getUint32(16,!0)!==1313821514)return null;const P=new Uint8Array(r,20,m),I=new TextDecoder().decode(P);try{return JSON.parse(I)}catch{return null}}async function i(r,l,o,m,x){const{lng:P,lat:I,height:U}=x,K=r.Cartesian3.fromDegrees(P,I,U),W=new r.HeadingPitchRoll(0,0,0),V=r.Transforms.localFrameToFixedFrameGenerator("north","west"),oe=await r.Model.fromGltfAsync({url:o,modelMatrix:r.Transforms.headingPitchRollToFixedFrame(K,W,r.Ellipsoid.WGS84,V),scale:1,show:!0});return oe.name=m,l.scene.primitives.add(oe),oe}async function c(r){const l=e(),o=t();if(!l||!o)throw n.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const m=Zt(r.name);try{switch(m){case"geojson":case"json":return r.name.toLowerCase().includes(Ss)?await b(r):await p(r);case"kml":return await T(r);case"kmz":return await g(r);case"shp":return await R(r);case"glb":case"gltf":return await E(r);case"czml":return await D(r);default:throw n.error(`不支持的文件格式: .${m}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${m}`)}}catch(x){throw n.error(`加载 "${r.name}" 失败: ${x.message||x}`),x}}function u(r){const l=a.value.find(m=>m.id===r);if(!l)return;const o=e();if(o){try{l.type==="3dtiles"?o.scene.primitives.remove(l.entity):o.dataSources.remove(l.entity,!0)}catch{}l.blobUrl&&Xe(l.blobUrl),a.value=a.value.filter(m=>m.id!==r),n.info(`已移除 "${l.name}"`)}}function d(){var o,m,x,P,I;const r=e();if(!r){a.value=[];return}for(const U of a.value){try{U.type==="3dtiles"?r.scene.primitives.remove(U.entity):r.dataSources.remove(U.entity,!0)}catch{}U.blobUrl&&Xe(U.blobUrl)}if(Array.isArray((o=r.dataSources)==null?void 0:o.dataSources)){const U=r.dataSources.dataSources.slice();for(const K of U)if(K&&!K.isBaseLayerPickerDataSource)try{r.dataSources.remove(K,!0)}catch{}}const l=t();if(l&&Array.isArray((x=(m=r.scene)==null?void 0:m.primitives)==null?void 0:x.primitives)){const U=r.scene.primitives.primitives.slice();for(const K of U)if(!(!K||!(K instanceof l.Cesium3DTileset||K instanceof l.Model||K.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(K.name||"")))))try{r.scene.primitives.remove(K)}catch{}}a.value=[],A();try{(I=(P=r.scene).requestRender)==null||I.call(P)}catch{}n.info("已清除所有导入数据")}return{loadDataFile:c,loadedDataSources:a,removeDataSource:u,clearAllDataSources:d,pendingGltfFile:h,loadGltfWithUserCoords:S,cancelPendingGltf:A}}const at={low:{stepCount:32,maxDistance:2e5,label:"低"},medium:{stepCount:48,maxDistance:36e4,label:"中"},high:{stepCount:64,maxDistance:5e5,label:"高"},ultra:{stepCount:80,maxDistance:7e5,label:"超高"}},Ts=["cloudQuality","coverage","density","shadowStrength","beerShadowStrength","multiScattering","powderStrength","hazeStrength","groundBounceStrength","bsmShadow","shadowResolution","maxDistance","stepCount"];function Ms(e){return Ts.includes(e)}function Cs(e={}){const t=Object.prototype.hasOwnProperty.call(at,e.quality)?e.quality:"medium",n=at[t],a=e.quality&&e.quality!==e.previousQuality;return{quality:t,coverage:Ke(Ye(e.coverage,.52),.18,.82),density:Ke(Ye(e.density,9e-5),25e-6,18e-5),shadowStrength:Ke(Ye(e.shadowStrength,.82),0,1),beerShadowStrength:Ke(Ye(e.beerShadowStrength,.64),0,1),multiScattering:Ke(Ye(e.multiScattering,.58),0,1),powderStrength:Ke(Ye(e.powderStrength,.72),0,1.4),hazeStrength:Ke(Ye(e.hazeStrength,.38),0,1),groundBounceStrength:Ke(Ye(e.groundBounceStrength,.26),0,1),bsmShadow:e.bsmShadow===!0,shadowResolution:Math.round(Ke(Ye(e.shadowResolution,256),128,512)/128)*128,maxDistance:Ke(a?n.maxDistance:Ye(e.maxDistance,n.maxDistance),12e4,9e5),stepCount:Math.round(Ke(a?n.stepCount:Ye(e.stepCount,n.stepCount),24,80))}}function Ds(e={},t){return[{id:"coverage",label:"云量",type:"range",min:.18,max:.82,step:.01,value:e.coverage??.52,displayValue:Number(e.coverage??.52).toFixed(2),disabled:t,tooltip:"覆盖率阈值。数值越大云越少，数值越小云越密。",numberInput:!1},{id:"density",label:"密度",type:"range",min:25e-6,max:18e-5,step:5e-6,value:e.density??9e-5,displayValue:Number(e.density??9e-5).toExponential(2),disabled:t,tooltip:"体积消光密度。数值越大云更厚、更暗，也更影响性能观感。",numberInput:!1},{id:"shadowStrength",label:"阴影",type:"range",min:0,max:1,step:.02,value:e.shadowStrength??.82,displayValue:Number(e.shadowStrength??.82).toFixed(2),disabled:t,numberInput:!1},{id:"multiScattering",label:"散射",type:"range",min:0,max:1,step:.02,value:e.multiScattering??.58,displayValue:Number(e.multiScattering??.58).toFixed(2),disabled:t,numberInput:!1},{id:"beerShadowStrength",label:"远影",type:"range",min:0,max:1,step:.02,value:e.beerShadowStrength??.64,displayValue:Number(e.beerShadowStrength??.64).toFixed(2),disabled:t,tooltip:"Beer Shadow Map 风格的远距离光学深度近似。数值越大，云层背光阴影越明显。",numberInput:!1},{id:"powderStrength",label:"银边",type:"range",min:0,max:1.4,step:.02,value:e.powderStrength??.72,displayValue:Number(e.powderStrength??.72).toFixed(2),disabled:t,numberInput:!1},{id:"hazeStrength",label:"薄霾",type:"range",min:0,max:1,step:.02,value:e.hazeStrength??.38,displayValue:Number(e.hazeStrength??.38).toFixed(2),disabled:t,numberInput:!1},{id:"groundBounceStrength",label:"反照",type:"range",min:0,max:1,step:.02,value:e.groundBounceStrength??.26,displayValue:Number(e.groundBounceStrength??.26).toFixed(2),disabled:t,tooltip:"地面反弹光近似，用于提亮云底。",numberInput:!1},{id:"bsmShadow",label:"BSM",type:"toggle",value:!!e.bsmShadow,disabled:t,tooltip:"Beer Shadow Map 阴影 atlas。用于远距离自阴影，异常时会自动降级关闭。"},{id:"shadowResolution",label:"影图",type:"range",min:128,max:512,step:128,value:e.shadowResolution??256,displayValue:`${Math.round(e.shadowResolution??256)} px`,disabled:t||!e.bsmShadow,tooltip:"BSM 阴影 atlas 单级联分辨率。越高越清晰，也越影响性能。",numberInput:!1},{id:"maxDistance",label:"距离",type:"range",min:12e4,max:9e5,step:1e4,value:e.maxDistance??at.medium.maxDistance,displayValue:`${Math.round((e.maxDistance??at.medium.maxDistance)/1e3)} km`,disabled:t,numberInput:!1},{id:"stepCount",label:"步数",type:"range",min:24,max:80,step:1,value:e.stepCount??at.medium.stepCount,displayValue:String(Math.round(e.stepCount??at.medium.stepCount)),disabled:t,numberInput:!1}]}function Ye(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Ke(e,t,n){return Math.max(t,Math.min(n,e))}const Ls="cesium_tool_panel_open";function Fs({fluidPanelRef:e,sceneActions:t={},wind:n={},modelManager:a=null,cameraEnhanced:h=null,heightSampler:f=null,panelStorageKey:p=Ls}={}){const T=Z(pt(p,!0)),g=Z({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1,volumetricClouds:!1}),L=Z(!0),R=Z({enableLighting:!0,showGroundAtmosphere:!0,dynamicAtmosphereLighting:!0,dynamicAtmosphereLightingFromSun:!0,atmosphereLightIntensity:5.5,atmosphereHueShift:-.015,atmosphereSaturationShift:.08,atmosphereBrightnessShift:.02,lightingFadeInDistance:0,lightingFadeOutDistance:Number.MAX_SAFE_INTEGER,nightFadeInDistance:0,nightFadeOutDistance:Number.MAX_SAFE_INTEGER,fogEnabled:!1,fogDensity:12e-5,fogMinimumBrightness:.035,sunShow:!0,moonShow:!0,skyBoxShow:!0}),E=Z({dayNightEnabled:!1,nightFactor:0,moonLightEnabled:!1,moonLightIntensity:.18,ambientIntensity:.08,cloudsEnabled:!1,cloudCoverage:.3,cloudSpeed:.001,cloudBottom:1500,cloudTop:2150,cloudQuality:"medium",starsEnabled:!1,starsIntensity:1}),S=Z({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,bsmShadow:!1,shadowResolution:256,maxDistance:at.medium.maxDistance,stepCount:at.medium.stepCount});g.value={...g.value,clouds:S.value};const A=Z({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),D=Z({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),b=Z(!1),M=Z({elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2}),C=_e(()=>{var r,l,o,m,x,P,I,U,K;return[{id:"scene",title:"场景导航",description:"相机飞行和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"atmosphere",title:"大气·光照·天空",description:"Cesium 原生光照 + Tellux 增强大气 + 高级后效（全部可选）",status:g.value.atmosphere||g.value.fog||g.value.hbao?"部分启用":"仅晨昏半球",statusTone:g.value.atmosphere?"success":"neutral",controls:[{id:"atmosphereAutoClose",label:"近地自动关大气+光照",type:"toggle",value:L.value,tooltip:"开启后，相机高度低于 80000m（URL z 参数）时自动关闭大气和日照，近地面查看更清晰"},...zs(R.value),{id:"_sep_effects",label:"── 高级后效（默认关闭）──",type:"info"},{id:"fog",label:"高度雾",type:"toggle",value:g.value.fog,tooltip:"基于高度的指数雾效"},{id:"hbao",label:"微阴影",type:"toggle",value:g.value.hbao,tooltip:"环境光遮蔽（HBAO）"},{id:"tiltShift",label:"移轴",type:"toggle",value:g.value.tiltShift,tooltip:"移轴模糊后处理"},{id:"_sep_tellux",label:"── Tellux 增强大气（默认关闭）──",type:"info"},{id:"atmosphere",label:"大气效果",type:"toggle",value:g.value.atmosphere,tooltip:"启用 Tellux 大气渲染（日夜过渡、月光、星空）"},...Is(E.value,!g.value.atmosphere)]},{id:"cloud",title:"体积云",description:"Cesium ECEF 球壳体积云（独立控制）",status:g.value.volumetricClouds?"已启用":"未启用",statusTone:g.value.volumetricClouds?"success":"neutral",controls:[{id:"volumetricClouds",label:"体积云",type:"toggle",value:g.value.volumetricClouds,tooltip:"Cesium ECEF 球壳体积云"},{id:"cloudQuality",label:"云质量",type:"select",value:S.value.quality,options:Object.entries(at).map(([W,V])=>({value:W,label:V.label})),disabled:!g.value.volumetricClouds},...Ds(S.value,!g.value.volumetricClouds)]},{id:"tools",title:"空间工具",description:"模型加载、增强相机、高度采样（Tellux 移植）",status:(((r=a==null?void 0:a.modelCount)==null?void 0:r.value)>0?"模型":"")||(((l=h==null?void 0:h.flightState)==null?void 0:l.value)==="flying"?"飞行中":"就绪"),statusTone:((o=a==null?void 0:a.modelCount)==null?void 0:o.value)>0?"success":"neutral",controls:[{id:"modelManagerEnabled",label:"模型管理",type:"toggle",value:!1,tooltip:"启用后可加载 glTF/GLB 模型到地理坐标位置"},{id:"cameraEnhancedEnabled",label:"增强相机",type:"toggle",value:!1,tooltip:"自定义缓动函数、角度插值和弹簧物理"},{id:"heightSamplerEnabled",label:"高度采样",type:"toggle",value:!1,tooltip:"地形高度查询、批量异步采样、屏幕坐标拾取"}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(m=n.wind2D)!=null&&m.value?"已加载":"未加载",statusTone:(x=n.wind2D)!=null&&x.value?"success":"neutral",actions:[{id:"load",label:(P=n.wind2D)!=null&&P.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((I=n.wind2D)!=null&&I.value)}],controls:Ps((U=n.windParams)==null?void 0:U.value,!!((K=n.wind2D)!=null&&K.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:D.value.isPicking?"等待选点":D.value.hasFluid?"已创建":"未创建",statusTone:D.value.isPicking?"warning":D.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:D.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:D.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!D.value.hasFluid&&!D.value.isPicking}],controls:As(A.value,D.value)},{id:"shallowWater",title:"热带浅水",description:"Three.js 热带浅水场景（焦散/折射/物理吸色/体积云/闪电）",status:b.value?"已启用":"未启用",statusTone:b.value?"success":"neutral",actions:[{id:"toggle",label:b.value?"关闭":"启用",variant:b.value?"danger":"primary"}],controls:Os(M.value,!b.value)}]});xe(T,r=>{Ct(p,r)});function i({moduleId:r,actionId:l}){var m,x;(x=(m={scene:{home:()=>{var P;return(P=t.flyToHome)==null?void 0:P.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},fluid:{pick:()=>{var P,I;return(I=(P=e==null?void 0:e.value)==null?void 0:P.startPickHeightMap)==null?void 0:I.call(P)},clear:()=>{var P,I;return(I=(P=e==null?void 0:e.value)==null?void 0:P.clearFluid)==null?void 0:I.call(P)}},shallowWater:{toggle:()=>{b.value=!b.value}}}[r])==null?void 0:m[l])==null||x.call(m)}function c({moduleId:r,controlId:l,value:o}){var m,x,P;if(!((m=l==null?void 0:l.startsWith)!=null&&m.call(l,"_sep_"))){if(r==="wind"&&l in(((x=n.windParams)==null?void 0:x.value)||{})){(P=n.setWindParam)==null||P.call(n,l,o);return}if(r==="fluid"&&l in A.value){A.value={...A.value,[l]:l==="waterColor"?o:Number(o)};return}if(r==="shallowWater"&&l in M.value){M.value={...M.value,[l]:l==="waterColor"||l==="lightningEnabled"?o:Number(o)};return}if(r==="atmosphere"){if(l==="atmosphereAutoClose"){L.value=!!o;return}if(l in g.value){g.value={...g.value,[l]:!!o};return}if(l in R.value){R.value={...R.value,[l]:o};return}if(l==="atmosphereEnabled"){g.value={...g.value,atmosphere:!!o};return}l in E.value&&(E.value={...E.value,[l]:o})}if(r==="cloud"){if(l==="volumetricClouds"){g.value={...g.value,volumetricClouds:!!o};return}if(Ms(l)){const I=l==="cloudQuality"?{quality:o,previousQuality:S.value.quality}:{[l]:o};S.value=Cs({...S.value,...I}),g.value={...g.value,clouds:S.value};return}}}}function u(r){const l=vt(r==null?void 0:r.waterLevel),o=vt(r==null?void 0:r.waterLevelMin),m=vt(r==null?void 0:r.waterLevelMax);D.value={isPicking:!!(r!=null&&r.isPicking),hasFluid:!!(r!=null&&r.hasFluid),selectedText:(r==null?void 0:r.selectedText)||"",waterLevel:l,waterLevelMin:o,waterLevelMax:m},l!==null&&(A.value={...A.value,waterLevel:l})}function d(){var r;(r=n.clearWind2D)==null||r.call(n)}return{toolPanelOpen:T,advancedEffectControls:g,cloudParams:S,baseAtmosphereParams:R,atmosphereParams:E,atmosphereAutoCloseEnabled:L,fluidParams:A,fluidState:D,shallowWaterVisible:b,shallowWaterParams:M,toolModules:C,handleToolAction:i,handleToolControlChange:c,handleFluidStateChange:u,cleanupTools:d}}function Ps(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function As(e,t={}){const n=vt(t.waterLevelMin),a=vt(t.waterLevelMax),h=n!==null&&a!==null,f=h?Math.min(n,a):0,p=h?Math.max(n,a):0,T=vt(e.waterLevel),g=h?Es(T??f,f,p):0,L=h?Math.max((p-f)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:f,max:p,step:L,value:g,displayValue:h?`${Rs(g)} m`:"先捕捉",disabled:!h,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function vt(e){const t=Number(e);return Number.isFinite(t)?t:null}function Es(e,t,n){return Math.max(t,Math.min(n,e))}function Rs(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const ks={low:{stepCount:32,label:"低"},medium:{stepCount:64,label:"中"},high:{stepCount:96,label:"高"},ultra:{stepCount:128,label:"超高"}};function Is(e={},t){return[{id:"atmosphereEnabled",label:"大气效果",type:"toggle",value:!t,tooltip:"启用 Tellux 大气渲染系统（日夜过渡、月光、体积云、星空）"},{id:"dayNightEnabled",label:"日夜过渡",type:"toggle",value:e.dayNightEnabled!==!1,disabled:t,tooltip:"基于太阳高度角的平滑日夜过渡效果"},{id:"moonLightEnabled",label:"月光",type:"toggle",value:e.moonLightEnabled!==!1,disabled:t,tooltip:"夜间月光照明效果"},{id:"moonLightIntensity",label:"月光强度",type:"range",min:0,max:1,step:.01,value:e.moonLightIntensity??.18,displayValue:Number(e.moonLightIntensity??.18).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"ambientIntensity",label:"环境光",type:"range",min:0,max:1,step:.01,value:e.ambientIntensity??.08,displayValue:Number(e.ambientIntensity??.08).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"cloudsEnabled",label:"体积云",type:"toggle",value:e.cloudsEnabled===!0,disabled:t,tooltip:"基于 PostProcessStage 的体积云渲染"},{id:"cloudQuality",label:"云质量",type:"select",value:e.cloudQuality??"medium",options:Object.entries(ks).map(([n,a])=>({value:n,label:a.label})),disabled:t||!e.cloudsEnabled},{id:"cloudCoverage",label:"覆盖度",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.3,displayValue:`${Math.round((e.cloudCoverage??.3)*100)}%`,disabled:t||!e.cloudsEnabled},{id:"cloudSpeed",label:"移动速度",type:"range",min:0,max:.01,step:1e-4,value:e.cloudSpeed??.001,displayValue:Number(e.cloudSpeed??.001).toFixed(4),disabled:t||!e.cloudsEnabled},{id:"cloudBottom",label:"云底高度",type:"range",min:500,max:5e3,step:50,value:e.cloudBottom??1500,displayValue:`${Math.round(e.cloudBottom??1500)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudTop",label:"云顶高度",type:"range",min:1e3,max:1e4,step:100,value:e.cloudTop??2150,displayValue:`${Math.round(e.cloudTop??2150)} m`,disabled:t||!e.cloudsEnabled},{id:"starsEnabled",label:"星空",type:"toggle",value:e.starsEnabled!==!1,disabled:t,tooltip:"基于高度的星空可见性"},{id:"starsIntensity",label:"星空强度",type:"range",min:0,max:5,step:.1,value:e.starsIntensity??1,displayValue:Number(e.starsIntensity??1).toFixed(1),disabled:t||!e.starsEnabled}]}function zs(e={}){return[{id:"enableLighting",label:"日照",type:"toggle",value:e.enableLighting!==!1,tooltip:"Cesium globe.enableLighting：启用日照贴图"},{id:"showGroundAtmosphere",label:"地面大气",type:"toggle",value:e.showGroundAtmosphere!==!1,tooltip:"globe.showGroundAtmosphere：地面大气光晕"},{id:"dynamicAtmosphereLighting",label:"动态光照",type:"toggle",value:e.dynamicAtmosphereLighting!==!1},{id:"atmosphereLightIntensity",label:"大气光强",type:"range",min:0,max:25,step:.5,value:e.atmosphereLightIntensity??5.5,displayValue:Number(e.atmosphereLightIntensity??5.5).toFixed(1)},{id:"fogEnabled",label:"雾效",type:"toggle",value:e.fogEnabled!==!1},{id:"fogDensity",label:"雾密度",type:"range",min:1e-5,max:.001,step:1e-5,value:e.fogDensity??12e-5,displayValue:Number(e.fogDensity??12e-5).toFixed(5),disabled:!e.fogEnabled},{id:"sunShow",label:"太阳",type:"toggle",value:e.sunShow!==!1},{id:"moonShow",label:"月亮",type:"toggle",value:e.moonShow!==!1},{id:"skyBoxShow",label:"星空盒",type:"toggle",value:e.skyBoxShow!==!1}]}function Os(e={},t=!1){return[{id:"_sep_shallowWater",label:"── 太阳参数 ──",type:"info"},{id:"elevation",label:"高度角",type:"range",min:2,max:80,step:.1,value:e.elevation??30,displayValue:Number(e.elevation??30).toFixed(1),disabled:t},{id:"azimuth",label:"方位角",type:"range",min:-180,max:180,step:.1,value:e.azimuth??150,displayValue:Number(e.azimuth??150).toFixed(1),disabled:t},{id:"_sep_water",label:"── 水面参数 ──",type:"info"},{id:"clarity",label:"清澈度",type:"range",min:.03,max:.4,step:.005,value:e.clarity??.085,displayValue:Number(e.clarity??.085).toFixed(3),tooltip:"越小越清澈(Beer-Lambert 密度)",disabled:t},{id:"causticStrength",label:"焦散强度",type:"range",min:0,max:2,step:.05,value:e.causticStrength??.9,displayValue:Number(e.causticStrength??.9).toFixed(2),disabled:t},{id:"waveHeight",label:"浪高",type:"range",min:0,max:1.5,step:.05,value:e.waveHeight??.5,displayValue:Number(e.waveHeight??.5).toFixed(2),disabled:t},{id:"foamWidth",label:"泡沫宽度",type:"range",min:0,max:8,step:.1,value:e.foamWidth??2.4,displayValue:Number(e.foamWidth??2.4).toFixed(1),disabled:t},{id:"reflection",label:"反射强度",type:"range",min:0,max:1,step:.02,value:e.reflection??.38,displayValue:Number(e.reflection??.38).toFixed(2),disabled:t},{id:"waterColor",label:"远处浅水色",type:"color",value:e.waterColor??"#2bb3c4",disabled:t},{id:"_sep_clouds",label:"── 天空 / 闪电 ──",type:"info"},{id:"cloudCoverage",label:"云量",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.58,displayValue:Number(e.cloudCoverage??.58).toFixed(2),disabled:t},{id:"lightningEnabled",label:"闪电开关",type:"toggle",value:e.lightningEnabled!==!1,disabled:t},{id:"lightningInterval",label:"闪电间隔(秒)",type:"range",min:.4,max:8,step:.1,value:e.lightningInterval??2,displayValue:Number(e.lightningInterval??2).toFixed(1),disabled:t||e.lightningEnabled===!1}]}const{getLayerIdByIndex:Bs,getLayerIndexById:Jn}=ir({urlLayerOptions:or,getLayerCategoryById:sr,getLayerGroupById:lr}),nn=-90,fn=1,ua=5e7;function Ns({getViewer:e,getCesium:t,onCameraViewSync:n,onBasemapRestore:a}={}){const h=ma(),f=pa();let p=null;function T(i){return cr(i,h.query)}function g(){const i=String(T(bn)||"").trim(),c=lt(T("lng")),u=lt(T("lat")),d=Hs(T("z")),r=ur(i);if(r&&c!==null&&u!==null&&d!==null){const o={lng:c,lat:u,height:d,...r};if(Qn(o))return o}const l=dr(i);return Qn(l)?l:c===null||u===null||d===null||c<-180||c>180||u<-90||u>90?null:{lng:c,lat:u,height:d,heading:lt(T("heading"))??0,pitch:lt(T("pitch"))??nn,roll:lt(T("roll"))??0}}function L({duration:i=0}={}){const c=e==null?void 0:e(),u=t==null?void 0:t(),d=g();if(!(c!=null&&c.camera)||!u||!d)return!1;const r=u.Cartesian3.fromDegrees(d.lng,d.lat,d.height),l={heading:Jt(u,d.heading??0),pitch:Jt(u,Ws(d.pitch??nn)),roll:Jt(u,d.roll??0)};return Number(i)>0?(c.camera.flyTo({destination:r,orientation:l,duration:Number(i)}),!0):(c.camera.setView({destination:r,orientation:l}),!0)}function R(i){if(!i)return null;const c=Jn(i);if(c===null)return null;const u={view:Ut,l:String(c)};return C(u),String(c)}function E(){const i=lt(T("l"));if(i===null)return null;const c=Bs(i);return c&&(a==null||a(c)),c}function S({initialSync:i=!1,getActivePresetId:c}={}){const u=b();if(!(!(u!=null&&u.moveEnd)||p)&&(p=u.moveEnd.addEventListener(()=>{const d=c==null?void 0:c();D({activePresetId:d})}),i)){const d=c==null?void 0:c();D({activePresetId:d})}}function A(){typeof p=="function"&&p(),p=null}function D({activePresetId:i}={}){const c=t==null?void 0:t(),u=b();if(!c||!(u!=null&&u.position))return;const d=c.Cartographic.fromCartesian(u.position);if(!d)return;const r=c.Math.toDegrees(d.longitude),l=c.Math.toDegrees(d.latitude),o=Number(d.height),m=c.Math.toDegrees(Number(u.heading)||0),x=c.Math.toDegrees(Number(u.pitch)||0),P=c.Math.toDegrees(Number(u.roll)||0);if(!Number.isFinite(r)||!Number.isFinite(l)||!Number.isFinite(o))return;const I=Math.max(fn,o),U=rr({heading:m,pitch:x,roll:P});if(!U||U==="0")return;const K={view:Ut,camera:{lng:r,lat:l,height:I,heading:m,pitch:x,roll:P}},W={view:Ut,[bn]:U,lng:ea(r,6),lat:ea(l,6),z:Us(I)},V=i;if(V){const oe=Jn(V);oe!==null&&(W.l=String(oe))}C(W),n==null||n(K)}function b(){var c;const i=e==null?void 0:e();return(i==null?void 0:i.camera)||((c=i==null?void 0:i.scene)==null?void 0:c.camera)||null}function M(i,c){const u=Object.keys(i).filter(r=>i[r]!==void 0&&i[r]!==null&&i[r]!==""),d=Object.keys(c).filter(r=>c[r]!==void 0&&c[r]!==null&&c[r]!=="");return u.length!==d.length?!1:d.every(r=>String(i[r]??"")===String(c[r]??""))}function C(i){const c={...Rn(h.query),...i};va.forEach(d=>{d in i||delete c[d]}),Object.keys(c).forEach(d=>{const r=c[d];r==null||r===""?delete c[d]:c[d]=String(r)});const u=Rn(h.query);M(u,c)||f.replace({path:h.path||"/home",query:c}).catch(()=>{})}return{restoreCameraFromUrl:L,restoreBasemapFromUrl:E,syncBasemapToUrl:R,bindCameraViewSync:S,cleanupCameraViewSync:A}}function lt(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Hs(e){const t=lt(e);return t===null||t<fn||t>ua?null:t}function Qn(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),a=Number(e.height),h=Number(e.heading),f=Number(e.pitch),p=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(a)&&a>=fn&&a<=ua&&Number.isFinite(h)&&Number.isFinite(f)&&f>=-90&&f<=90&&Number.isFinite(p)}function Ws(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):nn}function ea(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function Us(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function Jt(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const Me={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Gs=new Float32Array([-1,-1,1,-1,1,1,-1,1]),$s=new Float32Array([0,0,1,0,1,1,0,1]),qs=new Uint16Array([0,1,2,0,2,3]);function ot(e,t,n){return Math.max(t,Math.min(n,e))}function he(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function js(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),a=Math.min(2048,n),h=Math.max(1,Math.floor(e)),f=Math.sqrt(h),p=Math.log2(f),T=Number.isFinite(p)?Math.round(p):4;let g=Math.pow(2,T);return g=ot(g,16,a),g}function Xs(e){const t=e*e,n=new Float32Array(t*4);for(let a=0;a<t;a+=1){const h=a*4;n[h]=Math.random(),n[h+1]=Math.random(),n[h+2]=Math.random(),n[h+3]=Math.random()}return n}function Ys(e){return new Float32Array(e*e*4)}function Ks(e,t,n,a,h){const f=t.createTexture();if(!f)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,f),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,a,0,t.RGBA,t.FLOAT,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let p=!1;return{_context:e,_texture:f,_target:t.TEXTURE_2D,_width:n,_height:a,destroy(){p||(t.deleteTexture(f),p=!0)}}}class Vs{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const a={...Me,...n};this.speedFactor=he(a.speedFactor,Me.speedFactor),this.cullSpeedMin=he(a.cullSpeedMin,Me.cullSpeedMin),this.cullSpeedMax=he(a.cullSpeedMax,Me.cullSpeedMax),this.windSpeedMin=he(a.windSpeedMin,Me.windSpeedMin),this.windSpeedMax=he(a.windSpeedMax,Me.windSpeedMax),this.arrowLength=he(a.arrowLength,Me.arrowLength),this.trailLength=he(a.trailLength,Me.trailLength),this.decaySpeed=he(a.decaySpeed,Me.decaySpeed),this.alphaFactor=he(a.alphaFactor,Me.alphaFactor),this.maxWindSpeed=he(a.maxWindSpeed,Me.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=he(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=he(t.longitude,NaN),a=he(t.latitude,NaN),h=Array.isArray(t.altitude)?t.altitude:[],f=Array.isArray(t.sizeMesh)?t.sizeMesh:[],p=Array.isArray(t.count)?t.count:[],T=Array.isArray(t.hspeed)?t.hspeed:[],g=Array.isArray(t.hdir)?t.hdir:[],L=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(a))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const R=h.length;if(R<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(f.length!==R||p.length!==R)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const E=p.map(l=>Math.max(1,Math.floor(he(l,1)))),S=f.map(l=>Math.max(1,he(l,1))),A=h.map(l=>he(l,0)),D=E.reduce((l,o)=>l+o*o,0);if(T.length<D||g.length<D||L.length<D)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=R,this.visibleLayerMin=0,this.visibleLayerMax=R-1,this._altitudes=A.slice(),this._maxNx=Math.max(...E),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*R;const b=new Float32Array(this._atlasWidth*this._atlasHeight*4);let M=0;for(let l=0;l<R;l+=1){const o=E[l],m=o;for(let x=0;x<m;x+=1)for(let P=0;P<o;P+=1){const I=M+x*o+P,U=((l*this._maxNy+x)*this._atlasWidth+P)*4,K=Number(T[I]),W=Number(g[I]),V=Number(L[I]);if(!(Number.isFinite(K)&&Number.isFinite(W))){b[U]=0,b[U+1]=0,b[U+2]=0,b[U+3]=0;continue}const ae=W*Math.PI/180;b[U]=K*Math.sin(ae),b[U+1]=K*Math.cos(ae),b[U+2]=Number.isFinite(V)?V:0,b[U+3]=1}M+=o*m}this._createOrReplaceWindAtlasTexture(b);const C=Math.max(...S),i=this._maxNx*C,c=i/2/111320,u=a*Math.PI/180,d=Math.max(1e-6,Math.abs(Math.cos(u))),r=i/2/(111320*d);this._bounds={minLon:n-r,maxLon:n+r,minLat:a-c,maxLat:a+c,minHeight:Math.min(...A),maxHeight:Math.max(...A)},this._dataPointCount=D,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(he(t,1))),a=js(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&a===this._particleTextureSize||(this._particleTextureSize=a,this._particleCount=a*a,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=ot(he(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const a=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(a)}setBounds(t,n,a,h){const f=he(t,NaN),p=he(n,NaN),T=he(a,NaN),g=he(h,NaN);if(!Number.isFinite(f)||!Number.isFinite(p)||!Number.isFinite(T)||!Number.isFinite(g))return;const L=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};L.minLon=Math.min(f,p),L.maxLon=Math.max(f,p),L.minLat=Math.min(T,g),L.maxLat=Math.max(T,g),this._bounds=L,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const h=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[h],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=h,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Ks(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,a=Xs(n),h=Ys(n);for(let f=0;f<2;f+=1){this._particlePositionTextures[f]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:a},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[f]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:h},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[f]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[f],this._velocityTextures[f]],destroyAttachments:!1});const p=this._framebuffers[f]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,p),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:Gs,usage:t.BufferUsage.STATIC_DRAW}),a=t.Buffer.createVertexBuffer({context:this._context,typedArray:$s,usage:t.BufferUsage.STATIC_DRAW}),h=t.Buffer.createIndexBuffer({context:this._context,typedArray:qs,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:a,componentsPerAttribute:2}],indexBuffer:h})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let a=0;a<n.length;a+=1)n[a]=a;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:a,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:t.Pass.OPAQUE})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=ot(Math.floor(he(this.visibleLayerMin,0)),0,this._layerCount-1),n=ot(Math.floor(he(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const a=Math.max(1e-4,he(this.maxWindSpeed,Me.maxWindSpeed)),h=ot(he(t,0)/a,0,1),f=ot(he(n,a)/a,0,1);return{min:Math.min(h,f),max:Math.max(h,f)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>he(this.speedFactor,Me.speedFactor),maxWindSpeed:()=>Math.max(1e-4,he(this.maxWindSpeed,Me.maxWindSpeed)),decaySpeed:()=>ot(he(this.decaySpeed,Me.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>he(this.arrowLength,Me.arrowLength),trailLength:()=>he(this.trailLength,Me.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>ot(he(this.alphaFactor,Me.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Zs({getViewer:e,getCesium:t,message:n}){const a=Z(null),h=Z({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function f(){var R,E;const L=e==null?void 0:e();if(a.value){try{(E=(R=L==null?void 0:L.scene)==null?void 0:R.primitives)==null||E.remove(a.value)}catch{}a.value.destroy(),a.value=null}}function p(){const L=e==null?void 0:e(),R=t==null?void 0:t();if(!L||!R){n.error("Cesium 尚未初始化");return}f();const E=Js(R);a.value=new Vs(L,{maxWindSpeed:20,cesium:R,speedFactor:h.value.speedFactor,arrowLength:h.value.arrowLength,trailLength:h.value.trailLength,alphaFactor:h.value.alphaFactor}),a.value.loadData(E),L.scene.primitives.add(a.value),a.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function T(){a.value&&(a.value.speedFactor=h.value.speedFactor,a.value.arrowLength=h.value.arrowLength,a.value.trailLength=h.value.trailLength,a.value.alphaFactor=h.value.alphaFactor)}function g(L,R){return L in h.value?(h.value={...h.value,[L]:Number(R)},T(),!0):!1}return{wind2D:a,windParams:h,clearWind2D:f,loadSimulatedWind:p,setWindParam:g}}function Js(e){const h=[0,2e3,5e3,1e4,15e3],f=[3e4,3e4,25e3,25e3,2e4],p=[30,30,25,25,20],T=p.reduce((S,A)=>S+A*A,0),g=new Array(T),L=new Array(T),R=new Array(T);let E=0;for(let S=0;S<5;S++){const A=p[S],D=p[S],b=f[S];for(let M=0;M<D;M++)for(let C=0;C<A;C++){const i=E+M*A+C,c=(C-A/2)*(b/111320),u=(M-D/2)*(b/111320/Math.cos(e.Math.toRadians(35))),r=Math.atan2(u,c)+Math.PI/2+.2*Math.sin(C*.5)*Math.cos(M*.5);L[i]=e.Math.toDegrees(r)%360;const l=Math.sqrt(c*c+u*u),m=Math.max(0,1-l/15);g[i]=(5+S*2)*m+2*Math.random(),R[i]=.5*Math.sin(C*.3)*Math.cos(M*.3)}E+=A*D}return{longitude:104,latitude:35,altitude:h,sizeMesh:f,count:p,hspeed:g,hdir:L,vspeed:R}}const Tt=Object.freeze({LOADING:"loading",READY:"ready",ERROR:"error"});function an(e){if(!e)return null;if(Array.isArray(e)){const[a,h,f=0]=e;return typeof a!="number"||typeof h!="number"?null:{lng:a,lat:h,height:f}}const t=e.longitude??e.lng,n=e.latitude??e.lat;return typeof t!="number"||typeof n!="number"?null:{lng:t,lat:n,height:e.height??0}}function ta(e,t){const n=an(t.coordinates);if(!n)return null;const a=e.Cartesian3.fromDegrees(n.lng,n.lat,n.height),h=new e.HeadingPitchRoll(e.Math.toRadians(t.heading??0),e.Math.toRadians(t.pitch??0),e.Math.toRadians(t.roll??0)),f=e.Transforms.headingPitchRollToFixedFrame(a,h),p=t.scale;if(p!==void 0&&p!==1){let T=1,g=1,L=1;typeof p=="number"?T=g=L=p:typeof p=="object"&&(T=p.x??1,g=p.y??1,L=p.z??1);const R=e.Matrix4.fromScale(new e.Cartesian3(T,g,L));e.Matrix4.multiply(f,R,f)}return f}function Qs({getViewer:e,getCesium:t,message:n}){const a=new Map;let h=0;const f=Z([]),p=_e(()=>f.value.filter(d=>d.state===Tt.LOADING).length),T=_e(()=>f.value.filter(d=>d.state===Tt.READY).length),g=_e(()=>f.value.length);function L(){f.value=Array.from(a.values()).map(d=>({...d.entry}))}function R(){do h++;while(a.has(`model-${h}`));return`model-${h}`}async function E(d){var P,I,U;const r=e==null?void 0:e(),l=t==null?void 0:t();if(!r||!l)return(P=n==null?void 0:n.error)==null||P.call(n,"Cesium 尚未初始化，无法加载模型"),null;const o=d.id??R();if(a.has(o))return(I=n==null?void 0:n.error)==null||I.call(n,`模型 "${o}" 已存在，请使用其他 ID`),null;const m=an(d.coordinates),x={id:o,name:d.name??o,url:d.url,coordinates:m,heading:d.heading??0,pitch:d.pitch??0,roll:d.roll??0,scale:d.scale??1,state:Tt.LOADING,metadata:d.metadata??{},addedAt:Date.now(),errorMessage:null};a.set(o,{primitive:null,objectUrl:null,entry:x}),L();try{const K=ta(l,{coordinates:x.coordinates,heading:x.heading,pitch:x.pitch,roll:x.roll,scale:x.scale});if(!K)throw new Error("坐标无效，无法计算模型矩阵");const W={url:d.url,modelMatrix:K,minimumPixelSize:d.minimumPixelSize??64,maximumScale:2e4,scene:r.scene};let V;if(typeof l.Model.fromGltfAsync=="function")V=await l.Model.fromGltfAsync(W);else if(typeof l.Model.fromGltf=="function")V=l.Model.fromGltf(W);else throw new Error("当前 Cesium 版本不支持 Model API");r.scene.primitives.add(V);const oe=a.get(o);oe.primitive=V;const ae=()=>{const re=a.get(o);if(re&&(re.entry.state=Tt.READY,L(),d.autoPlayAnimation!==!1))try{V.activeAnimations.addAll({loop:l.ModelAnimationLoop.REPEAT})}catch{}};return V.readyEvent?V.readyEvent.addEventListener(ae):ae(),V.errorEvent&&V.errorEvent.addEventListener(re=>{const Q=a.get(o);Q&&(Q.entry.state=Tt.ERROR,Q.entry.errorMessage=(re==null?void 0:re.message)??"模型加载异常",L())}),L(),{...x}}catch(K){const W=a.get(o);return W!=null&&W.objectUrl&&URL.revokeObjectURL(W.objectUrl),a.delete(o),L(),(U=n==null?void 0:n.error)==null||U.call(n,`模型加载失败: ${K.message}`),null}}async function S(d,r={}){const l=URL.createObjectURL(d),o=await E({...r,url:l,name:r.name??d.name.replace(/\.(glb|gltf)$/i,"")});if(o){const m=a.get(o.id);m&&(m.objectUrl=l)}else URL.revokeObjectURL(l);return o}function A(d){var o;const r=e==null?void 0:e(),l=a.get(d);if(l){if(l.primitive&&r)try{r.scene.primitives.remove(l.primitive)}catch{}if((o=l.primitive)!=null&&o.destroy)try{l.primitive.destroy()}catch{}l.objectUrl&&URL.revokeObjectURL(l.objectUrl),a.delete(d),L()}}function D(d,r={}){const l=t==null?void 0:t(),o=a.get(d);if(!o||!l)return!1;const m=o.entry;if(r.coordinates&&(m.coordinates=an(r.coordinates)),r.heading!==void 0&&(m.heading=r.heading),r.pitch!==void 0&&(m.pitch=r.pitch),r.roll!==void 0&&(m.roll=r.roll),r.scale!==void 0&&(m.scale=r.scale),r.name&&(m.name=r.name),r.metadata&&(m.metadata={...m.metadata,...r.metadata}),o.primitive){const x=ta(l,{coordinates:m.coordinates,heading:m.heading,pitch:m.pitch,roll:m.roll,scale:m.scale});x&&(o.primitive.modelMatrix=x)}return L(),!0}function b(d,r={}){const l=e==null?void 0:e(),o=t==null?void 0:t(),m=a.get(d);if(!m||!l||!o)return;const x=m.entry.coordinates;if(!x)return;const{range:P=200,heading:I=0,pitch:U=-30,duration:K=2}=r,W=x.height+P*.3;l.camera.flyTo({destination:o.Cartesian3.fromDegrees(x.lng,x.lat,W),orientation:{heading:o.Math.toRadians(I),pitch:o.Math.toRadians(U),roll:0},duration:K})}function M(d,r,l={}){const o=a.get(d),m=t==null?void 0:t();if(!(!(o!=null&&o.primitive)||!m))try{const x=o.primitive,P=l.loop!==!1?m.ModelAnimationLoop.REPEAT:m.ModelAnimationLoop.NONE;if(r){let I=!1;const U=x.activeAnimations;for(let K=0;K<U.length;K++)if(U.get(K).name===r){U.get(K).playing=!0,I=!0;break}I||x.activeAnimations.add({name:r,loop:P,speedup:l.speedup??1})}else x.activeAnimations.addAll({loop:P,speedup:l.speedup??1})}catch{}}function C(d){const r=a.get(d);if(r!=null&&r.primitive)try{const l=r.primitive.activeAnimations;for(let o=0;o<l.length;o++)l.get(o).playing=!1}catch{}}function i(d){const r=a.get(d);return r?{...r.entry}:null}function c(d){var r;return((r=a.get(d))==null?void 0:r.primitive)??null}function u(){const d=Array.from(a.keys());for(const r of d)A(r);a.clear(),L()}return{models:f,loadingCount:p,readyCount:T,modelCount:g,addModel:E,addModelFromFile:S,removeModel:A,updateModel:D,flyToModel:b,playAnimation:M,stopAnimation:C,getModel:i,getModelPrimitive:c,dispose:u}}const Qt=Object.freeze({linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2});class na{constructor(t={}){this.stiffness=t.stiffness??120,this.damping=t.damping??20,this.mass=t.mass??1,this.threshold=t.threshold??.01,this._current=0,this._target=0,this._velocity=0,this._active=!1}get current(){return this._current}get target(){return this._target}get active(){return this._active}setTarget(t){this._target=t,this._active=!0}setCurrent(t){this._current=t,this._velocity=0}update(t){if(!this._active)return this._current;const n=this._current-this._target,a=-this.stiffness*n,h=-this.damping*this._velocity,f=(a+h)/this.mass;return this._velocity+=f*t,this._current+=this._velocity*t,Math.abs(n)<this.threshold&&Math.abs(this._velocity)<this.threshold&&(this._current=this._target,this._velocity=0,this._active=!1),this._current}reset(){this._current=0,this._target=0,this._velocity=0,this._active=!1}}const mt=Object.freeze({IDLE:"idle",FLYING:"flying",CANCELLED:"cancelled"});function el({getViewer:e,getCesium:t}){let n=0,a=null,h=null;const f=Z(mt.IDLE),p=_e(()=>a);function T(){h!==null&&(cancelAnimationFrame(h),h=null),a=null,f.value=mt.CANCELLED}function g(i){const c=e==null?void 0:e(),u=t==null?void 0:t();if(!c||!u)return null;i.cancelPrevious!==!1&&T();const d=M(u,i.destination);if(!d)return null;const r=c.camera,l=r.heading,o=r.pitch,m=r.roll,x=r.positionWC.clone(),P=i.orientation??{},I=u.Math.toRadians(P.heading??u.Math.toDegrees(l)),U=u.Math.toRadians(P.pitch??u.Math.toDegrees(o)),K=u.Math.toRadians(P.roll??u.Math.toDegrees(m));let W=d.clone();if(i.maximumHeight!==void 0){const we=u.Cartographic.fromCartesian(d);we.height>i.maximumHeight&&(W=u.Cartesian3.fromRadians(we.longitude,we.latitude,i.maximumHeight))}const V=i.easing??"easeInOutCubic",oe=Qt[V]??Qt.easeInOutCubic,ae=i.duration??2.5,re=++n;a=re,f.value=mt.FLYING;let Q=null;function pe(we){var de,Fe;if(a!==re)return;Q===null&&(Q=we);const Re=(we-Q)/1e3,Ee=Math.min(Re/ae,1),q=oe(Ee),j=u.Cartesian3.lerp(x,W,q,new u.Cartesian3),N=C(l,I,q),ye=o+(U-o)*q,Ce=m+(K-m)*q;r.setView({destination:j,orientation:{heading:N,pitch:ye,roll:Ce}}),(de=i.onTick)==null||de.call(i,Ee,j),Ee<1?h=requestAnimationFrame(pe):(h=null,a===re&&(a=null,f.value=mt.IDLE,(Fe=i.onComplete)==null||Fe.call(i)))}return h=requestAnimationFrame(pe),re}function L(i,c,u=1e3,d={}){return g({...d,destination:{longitude:i,latitude:c,height:u}})}function R(i,c,u={}){const d=e==null?void 0:e(),r=t==null?void 0:t();if(!d||!r)return null;const l=r.Cartesian3.fromDegrees(i.longitude,i.latitude,i.height),o=r.Cartesian3.fromDegrees(c.longitude,c.latitude,c.height),m=r.Cartesian3.subtract(o,l,new r.Cartesian3);r.Cartesian3.normalize(m,m);const x=Math.atan2(m.x,m.y),P=Math.asin(m.z);return g({...u,destination:i,orientation:{heading:r.Math.toDegrees(x),pitch:r.Math.toDegrees(P),roll:0}})}function E(i,c={}){const u=e==null?void 0:e(),d=t==null?void 0:t();if(!u||!d)return null;const r=new d.Rectangle.fromDegrees(i.west,i.south,i.east,i.north),l=d.Rectangle.center(r),m=d.Math.toDegrees(r.east-r.west)*.8;return g({...c,destination:{longitude:d.Math.toDegrees(l.longitude),latitude:d.Math.toDegrees(l.latitude),height:Math.max(m*111e3,1e3)},orientation:{heading:0,pitch:-45,roll:0}})}function S(i){const c=e==null?void 0:e(),u=t==null?void 0:t();if(!c||!u)return null;T();const d=new na(i.spring),r=u.Cartographic.fromCartesian(c.camera.positionWC);d.setCurrent(r.height),d.setTarget(i.targetHeight);const l=++n;a=l,f.value=mt.FLYING;let o=null;function m(x){var K;if(a!==l)return;if(o===null){o=x;return}const P=(x-o)/1e3;o=x;const I=d.update(P),U=u.Cartesian3.fromRadians(r.longitude,r.latitude,I);c.camera.setView({destination:U,orientation:{heading:c.camera.heading,pitch:c.camera.pitch,roll:c.camera.roll}}),d.active?h=requestAnimationFrame(m):(h=null,a===l&&(a=null,f.value=mt.IDLE,(K=i.onComplete)==null||K.call(i)))}return h=requestAnimationFrame(m),l}function A(){const i=e==null?void 0:e(),c=t==null?void 0:t();if(!i||!c)return null;const u=c.Cartographic.fromCartesian(i.camera.positionWC);return{longitude:c.Math.toDegrees(u.longitude),latitude:c.Math.toDegrees(u.latitude),height:u.height,heading:c.Math.toDegrees(i.camera.heading),pitch:c.Math.toDegrees(i.camera.pitch),roll:c.Math.toDegrees(i.camera.roll)}}function D(i=6){const c=A();if(!c)return"--";const u=c.longitude>=0?"E":"W",d=c.latitude>=0?"N":"S";return`${Math.abs(c.longitude).toFixed(i)}°${u}, ${Math.abs(c.latitude).toFixed(i)}°${d}, ${c.height.toFixed(1)}m`}function b(){T()}function M(i,c){if(!c)return null;if(c instanceof i.Cartesian3)return c;if(Array.isArray(c)){const[r,l,o=0]=c;return i.Cartesian3.fromDegrees(r,l,o)}const u=c.longitude??c.lng,d=c.latitude??c.lat;return typeof u=="number"&&typeof d=="number"?i.Cartesian3.fromDegrees(u,d,c.height??0):null}function C(i,c,u){let d=c-i;for(;d>Math.PI;)d-=2*Math.PI;for(;d<-Math.PI;)d+=2*Math.PI;return i+d*u}return{flightState:f,currentFlightId:p,enhancedFlyTo:g,cancelFlight:T,flyToPosition:L,flyToAndLookAt:R,flyToRectangle:E,springToHeight:S,SpringController:na,getCameraState:A,getFormattedPosition:D,cleanup:b,EasingFunctions:Qt}}function Mt(e,t){return{longitude:e.Math.toDegrees(t.longitude),latitude:e.Math.toDegrees(t.latitude),height:t.height}}function aa(e,t){if(!t)return null;if(t instanceof e.Cartographic)return t;if(Array.isArray(t)){const[h,f,p=0]=t;return e.Cartographic.fromDegrees(h,f,p)}const n=t.longitude??t.lng,a=t.latitude??t.lat;return typeof n=="number"&&typeof a=="number"?e.Cartographic.fromDegrees(n,a,t.height??0):null}class tl{constructor(t,n){this.data=t,this.timestamp=n}isExpired(t){return Date.now()-this.timestamp>t}}function nl({getViewer:e,getCesium:t}){const n=new Map,a=300*1e3,h=5,f=Z(!1),p=Z(0);function T(C,i){return`${C.toFixed(h)},${i.toFixed(h)}`}function g(C,i){const c=T(C,i),u=n.get(c);return u&&!u.isExpired(a)?{...u.data}:(u&&n.delete(c),null)}function L(C){const i=T(C.longitude,C.latitude);n.set(i,new tl({...C},Date.now()))}function R(){n.clear()}function E(C){const i=e==null?void 0:e(),c=t==null?void 0:t();if(!i||!c||!C)return null;const{x:u,y:d}=C,r=i.camera.getPickRay(new c.Cartesian2(u,d));if(!r)return null;const l=i.scene.pickPositionSupported?i.scene.pickPosition(new c.Cartesian2(u,d)):i.scene.globe.pick(r,i.scene);if(!l){const m=i.scene.globe.ellipsoid,x=i.scene.camera.pickEllipsoid(new c.Cartesian2(u,d),m);if(!x)return null;const P=c.Cartographic.fromCartesian(x);return Mt(c,P)}const o=c.Cartographic.fromCartesian(l);return Mt(c,o)}async function S(C,i={}){const{maxRetries:c=3,retryDelay:u=200}=i;for(let d=0;d<c;d++){const r=E(C);if(r)return r;d<c-1&&await new Promise(l=>setTimeout(l,u))}return null}function A(C,i={}){const c=e==null?void 0:e(),u=t==null?void 0:t();if(!c||!u)return null;const d=aa(u,C);if(!d)return null;const r=u.Math.toDegrees(d.longitude),l=u.Math.toDegrees(d.latitude);if(i.useCache!==!1){const o=g(r,l);if(o)return o}try{const o=i.terrainDetailLevel??0,m=[d],x=o===0?u.sampleTerrain(c.terrainProvider,0,m):u.sampleTerrainMostDetailed(c.terrainProvider,m);if(x&&x.length>0){const P=Mt(u,x[0]);return L(P),P}}catch{}return null}async function D(C,i={}){const c=e==null?void 0:e(),u=t==null?void 0:t();if(!c||!u||!(C!=null&&C.length))return[];f.value=!0,p.value=0;try{const d=[],r=[],l=[];for(let o=0;o<C.length;o++){const m=aa(u,C[o]);if(!m){d.push(null);continue}const x=u.Math.toDegrees(m.longitude),P=u.Math.toDegrees(m.latitude);if(i.useCache!==!1&&!i.skipCached){const I=g(x,P);if(I){d.push(I);continue}}d.push(null),r.push(m),l.push(o)}if(r.length===0)return p.value=1,d;try{const o=u.sampleTerrainMostDetailed(c.terrainProvider,r),m=o instanceof Promise?await o:o;for(let x=0;x<m.length;x++){const P=Mt(u,m[x]);d[l[x]]=P,L(P),i.onProgress&&i.onProgress(x+1,r.length),p.value=(x+1)/r.length}}catch{for(let m=0;m<r.length;m++){try{const x=r[m],P=u.sampleTerrain(c.terrainProvider,17,[x]),I=P instanceof Promise?await P:P;if((I==null?void 0:I.length)>0){const U=Mt(u,I[0]);d[l[m]]=U,L(U)}}catch{}i.onProgress&&i.onProgress(m+1,r.length),p.value=(m+1)/r.length}}return d}finally{f.value=!1}}async function b(C,i={}){if(!(t==null?void 0:t()))return null;const{west:u,south:d,east:r,north:l}=C,o=Math.max(2,Math.ceil(Math.sqrt(i.sampleCount??9))),m=[];for(let W=0;W<o;W++)for(let V=0;V<o;V++){const oe=u+(r-u)*(V/(o-1)),ae=d+(l-d)*(W/(o-1));m.push([oe,ae])}const P=(await D(m,{useCache:!0})).filter(W=>W!==null).map(W=>W.height);if(P.length===0)return null;const I=Math.min(...P),U=Math.max(...P),K=P.reduce((W,V)=>W+V,0)/P.length;return{min:I,max:U,avg:K}}function M(){R(),f.value=!1,p.value=0}return{isSampling:f,samplingProgress:p,pickCartographic:E,pickCartographicWithRetry:S,sampleHeight:A,sampleHeightMostDetailed:D,queryHeightRange:b,clearCache:R,cleanup:M}}const al={key:4,class:"drag-overlay"},rl={class:"map-controls-group"},il={class:"mouse-position-content"},ol={__name:"CesiumContainer",emits:["view-sync"],setup(e,{expose:t,emit:n}){let a=null,h=null,f=!1;const p=on(),T=n,g=Z(!1),L=Z(null),R=Z(xa()),E=()=>h,S=()=>a||window.Cesium,A=()=>R.value.tiandituTk,D=()=>R.value.cesiumIonToken,b=ds({getViewer:E,getCesium:S,message:p,backendBaseUrl:ba,tiandituToken:A,cesiumIonToken:D}),{activeBasemap:M,activeTerrain:C,customXyzBasemapUrl:i,basemapOptions:c,terrainOptions:u,overlayOptions:d,createImageryProviderViewModels:r,createTerrainProviderViewModels:l,getSelectedImageryProviderViewModel:o,getSelectedTerrainProviderViewModel:m,bindLayerPickerStateSync:x,addBaseImageryLayers:P,initCustomTerrain:I,handleOverlayToggle:U,handleCustomBasemapSubmit:K,cleanupLayers:W}=b;xe(M,(s,w)=>{!s||s===w||Re(s)});const{coordinateDisplay:V,setupInteractions:oe,cleanupInteractions:ae}=as({getViewer:E,getCesium:S}),{installCreditHider:re,cleanupCreditHider:Q}=ns({getViewer:E}),{restoreCameraFromUrl:pe,restoreBasemapFromUrl:we,syncBasemapToUrl:Re,bindCameraViewSync:Ee,cleanupCameraViewSync:q}=Ns({getViewer:E,getCesium:S,onCameraViewSync:s=>T("view-sync",s),onBasemapRestore:s=>{s&&M.value!==s&&(M.value=s)}}),j=_s({getViewer:E,getCesium:S,message:p}),{flyToHome:N}=j,ye=Zs({getViewer:E,getCesium:S,message:p}),Ce=Uo({getViewer:E,getCesium:S}),de=ws({getViewer:E,getCesium:S,message:p}),Fe=Qs({getViewer:E,getCesium:S,message:p}),Ue=el({getViewer:E,getCesium:S}),Ge=nl({getViewer:E,getCesium:S});t({getViewer:E,getCesium:S,modelManager:Fe,cameraEnhanced:Ue,heightSampler:Ge});const ke=_e(()=>de.loadedDataSources.value),Ie=_e(()=>de.pendingGltfFile.value),De=Z(!1);function ze(s){De.value=!0,s.dataTransfer&&(s.dataTransfer.dropEffect="copy")}function Pe(s){const w=s==null?void 0:s.relatedTarget,k=s==null?void 0:s.currentTarget;w instanceof Node&&k instanceof Node&&k.contains(w)||(De.value=!1)}async function $e(s){var k;if(De.value=!1,!g.value)return;const w=(k=s.dataTransfer)==null?void 0:k.files;if(!(!w||w.length===0))for(const B of w)try{await de.loadDataFile(B)}catch{}}const{toolPanelOpen:Oe,advancedEffectControls:Ze,fluidParams:qe,baseAtmosphereParams:Le,atmosphereAutoCloseEnabled:Be,shallowWaterVisible:Ne,shallowWaterParams:X,toolModules:v,handleToolAction:F,handleToolControlChange:O,handleFluidStateChange:$,cleanupTools:J}=Fs({fluidPanelRef:L,sceneActions:j,wind:ye,modelManager:Fe,cameraEnhanced:Ue,heightSampler:Ge});async function _(){f=!1,oa("正在初始化 3D 场景...");try{let s=0,w=1;for(;s<w;)try{if(R.value=await ya({silent:!1,force:s>0}),w=Math.max(w,Array.isArray(R.value.tiandituTokens)?R.value.tiandituTokens.length:1,Array.isArray(R.value.cesiumIonTokens)?R.value.cesiumIonTokens.length:1,1),a=await qo({ionToken:D()}),f||!a||!document.getElementById("cesiumContainer"))return;H(),oe();const k=P(),B=await I();if(f){y();return}if(g.value=!0,Ee({initialSync:!1,getActivePresetId:()=>M.value}),we(),k&&B){p.success("天地图基础影像与地形加载成功。");return}const le=k?{switched:!1}:Gt("tianditu_tk"),ce=B?{switched:!1}:Gt("cesium_ion_token");if(!(le.switched||ce.switched)){p.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}R.value=ce.switched?ce.tokens:le.tokens,y(),s+=1,p.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(k){const B=Gt("cesium_ion_token");if(!B.switched)throw k;R.value=B.tokens,y(),s+=1,p.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}p.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(s){p.error("Cesium 运行时加载失败",s),p.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{sa()}}function y(){if(g.value=!1,q(),ae(),W(),Q(),!!h){try{h.destroy()}catch{}h=null}}function H(){var B;const s=typeof a.Map=="function"?a.Map:a.Viewer,w=r(),k=l();h=new s("cesiumContainer",{baseLayerPicker:!0,geocoder:((B=a.IonGeocodeProviderType)==null?void 0:B.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:w,selectedImageryProviderViewModel:o(w),terrainProviderViewModels:k,selectedTerrainProviderViewModel:m(k),shouldAnimate:!0}),h.scene.debugShowFramesPerSecond=!0,h.scene.globe.terrainExaggeration=1,h.scene.globe.terrainExaggerationRelativeHeight=0,Zo(h,a),xr(h),re(),x(),pe({duration:0})||N(0)}rn(()=>{_()});async function G({files:s}){for(const w of s)try{await de.loadDataFile(w)}catch{}}function Y({id:s}){de.removeDataSource(s)}function ie(){de.clearAllDataSources()}async function te(s){try{await de.loadGltfWithUserCoords(s)}catch{}}function ve(){de.cancelPendingGltf()}Ht(()=>{if(f=!0,g.value=!1,q(),ae(),J(),W(),Fe.dispose(),Ue.cleanup(),Ge.cleanup(),Ce.cleanup(),Q(),de.clearAllDataSources(),h){try{h.destroy()}catch{}h=null}}),xe(g,s=>{s&&(ne(Le.value),Ce.start())}),xe(Be,s=>{Ce.atmosphereAutoCloseEnabled.value=s});function ne(s){var B;if(!h||!a)return;const w=h.scene,k=w.globe;k&&(Ce.atmosphereAutoClosed.value||(k.enableLighting=s.enableLighting,k.showGroundAtmosphere=s.showGroundAtmosphere),"dynamicAtmosphereLighting"in k&&(k.dynamicAtmosphereLighting=s.dynamicAtmosphereLighting),"dynamicAtmosphereLightingFromSun"in k&&(k.dynamicAtmosphereLightingFromSun=s.dynamicAtmosphereLightingFromSun),"atmosphereLightIntensity"in k&&(k.atmosphereLightIntensity=s.atmosphereLightIntensity),"atmosphereHueShift"in k&&(k.atmosphereHueShift=s.atmosphereHueShift),"atmosphereSaturationShift"in k&&(k.atmosphereSaturationShift=s.atmosphereSaturationShift),"atmosphereBrightnessShift"in k&&(k.atmosphereBrightnessShift=s.atmosphereBrightnessShift),"lightingFadeInDistance"in k&&(k.lightingFadeInDistance=s.lightingFadeInDistance),"lightingFadeOutDistance"in k&&(k.lightingFadeOutDistance=s.lightingFadeOutDistance),"nightFadeInDistance"in k&&(k.nightFadeInDistance=s.nightFadeInDistance),"nightFadeOutDistance"in k&&(k.nightFadeOutDistance=s.nightFadeOutDistance)),w.fog&&(w.fog.enabled=s.fogEnabled,"density"in w.fog&&(w.fog.density=s.fogDensity),"minimumBrightness"in w.fog&&(w.fog.minimumBrightness=s.fogMinimumBrightness)),w.sun&&(w.sun.show=s.sunShow),w.moon&&(w.moon.show=s.moonShow),w.skyBox&&(w.skyBox.show=s.skyBoxShow),(B=w.requestRender)==null||B.call(w)}return xe(Le,s=>{ne(s)},{deep:!0}),(s,w)=>{var k;return ee(),se(nt,null,[z("div",{id:"cesiumContainer",class:"cesium-container",onDragover:gt(ze,["prevent"]),onDragleave:gt(Pe,["prevent"]),onDrop:gt($e,["prevent"])},null,32),g.value?(ee(),We(ut(Or),{key:0,headless:"","get-viewer":E,"get-cesium":S,controls:ue(Ze)},null,8,["controls"])):ge("",!0),g.value?(ee(),We(ut(Po),{key:1,ref_key:"fluidPanelRef",ref:L,headless:"","get-viewer":E,"get-cesium":S,params:ue(qe),onStateChange:ue($)},null,40,["params","onStateChange"])):ge("",!0),g.value?(ee(),We(Wo,ga({key:2,visible:ue(Ne)},ue(X)),null,16,["visible"])):ge("",!0),g.value?(ee(),We(to,{key:3,open:ue(Oe),"onUpdate:open":w[0]||(w[0]=B=>Wt(Oe)?Oe.value=B:null),"active-basemap":ue(M),"onUpdate:activeBasemap":w[1]||(w[1]=B=>Wt(M)?M.value=B:null),"active-terrain":ue(C),"onUpdate:activeTerrain":w[2]||(w[2]=B=>Wt(C)?C.value=B:null),"basemap-options":ue(c),"terrain-options":ue(u),"overlay-options":ue(d),"custom-basemap-url":ue(i),modules:ue(v),"loaded-data-sources":ke.value,onModuleAction:ue(F),onControlChange:ue(O),onOverlayToggle:ue(U),onCustomBasemapSubmit:ue(K),onDataImport:G,onDataRemove:Y,onDataClearAll:ie},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):ge("",!0),Se(vo,{visible:!!Ie.value,"file-name":((k=Ie.value)==null?void 0:k.name)||"",onConfirm:te,onCancel:ve},null,8,["visible","file-name"]),De.value&&g.value?(ee(),se("div",al,[Se(ue(tn),{size:48,"stroke-width":"1.5"}),w[4]||(w[4]=z("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),w[5]||(w[5]=z("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):ge("",!0),z("div",rl,[z("div",il,fe(ue(V)),1),w[7]||(w[7]=z("div",{class:"divider"},null,-1)),z("button",{class:"home-btn",title:"回到初始位置",onClick:w[3]||(w[3]=(...B)=>ue(N)&&ue(N)(...B))},[...w[6]||(w[6]=[z("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[z("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},_l=dt(ol,[["__scopeId","data-v-d16bb1d7"]]);export{_l as default};
