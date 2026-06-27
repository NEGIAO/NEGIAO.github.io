const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-DkUmaEnF.js","./vendor-echarts-all-BoniBKWu.js","./vendor-libs-ZStazrnx.js","./vendor-vue-DrZ_GSNy.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-CTBiR54c.js","./vendor-proj4-BMTxSKs_.js","./index-BRM2BFLl.js","./vendor-ol-all-C4PNuJ-g.js","./vendor-geotiff-CwTT8hcD.js","./vendor-lerc-9DOY5ikF.js","./vendor-jszip-BOwK5y_4.js","./vendor-ol-all-BtPuoxOl.css","./vendor-axios-Bdz_Fv8M.js","./index-DduL8x4O.css","./index-CSfZV33j.js","./HomeView-DgsI7goK.js","./HomeView-DEmb4_2a.css","./vectorUtils-Ds50OJUZ.js","./textDecoder-CXjJWEkX.js"])))=>i.map(i=>d[i]);
var di=Object.defineProperty;var hi=(e,t,n)=>t in e?di(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var et=(e,t,n)=>hi(e,typeof t!="symbol"?t+"":t,n);import{w as Te,v as ai,d as ae,c as ce,P as ri,r as Y,C as ln,o as $t,f as A,t as ye,a as Fe,G as Qe,X as mt,g as xe,q as De,u as de,F as rt,e as lt,n as He,x as Xe,S as pt,I as Ot,i as xt,H as Ht,z as fi,B as mi,A as pi,b as gi,y as vi,a5 as yi,a4 as qt}from"./vendor-vue-DrZ_GSNy.js";import{_ as dt,h as cn,R as oi,Q as si,e as jt,f as yn,T as xi,v as bi,y as Vt,P as _i,x as Si}from"./index-BRM2BFLl.js";import{_ as Wt}from"./vendor-runtime-Dp1pzeXC.js";import{af as wi,ag as Xt,ah as Yt,ai as Ti,X as xn,e as Kt,aj as rn,ak as Et,ac as bn,al as Mi,am as li,an as _n,H as Sn,T as Zt,s as wn,a2 as Di,ao as Bt,ap as Li,aq as Fi,ar as Ci,q as Pi,o as Ai,as as Rt,G as Tn,at as un,au as dn,av as ci,aw as Mn,ax as Ei,ay as Ri,az as Dn,aA as Jt,aB as Ii,aC as ki,aD as zi,aE as It,aF as nt,aG as Ni,aH as Ln,aI as St,aJ as Oi,aK as wt,aL as Hi,aM as Bi,aN as Ui,aO as Wi,aP as Gi,aQ as $i,aR as Fn,aS as Cn,aT as qi,aU as ji,aV as Vi,aW as Xi,aX as Yi,aY as Ki,aZ as Zi,a_ as Ji,a$ as Qi,b0 as Pn,b1 as ea,b2 as ta,b3 as na,b4 as ia}from"./vendor-libs-ZStazrnx.js";import{F as hn,G as An,v as Pt,B as aa,H as ra,I as oa,J as sa,K as la,L as ca,M as En,N as ua,O as da,P as ha}from"./HomeView-DgsI7goK.js";import{d as fa}from"./vectorUtils-Ds50OJUZ.js";const Gt=new Map;function ma(e){const t=Gt.get(e);t&&t.abort();const n=new AbortController;return Gt.set(e,n),n}function pa(){Gt.forEach(e=>{e.abort()}),Gt.clear()}function ga(e){const t=e.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!t)return/\{s\}/i.test(e)?{url:e,subdomains:["a","b","c"]}:{url:e,subdomains:[]};const n=t[1].charCodeAt(0),i=t[2].charCodeAt(0),u=[];for(let o=n;o<=i;o++)u.push(String.fromCharCode(o));return{url:e.replace(t[0],"{s}"),subdomains:u}}function va(e){return e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function ya(e,t){let n=e;return t.tiandituTk&&(n=n.replace(/\{tiandituTk\}/g,t.tiandituTk)),t.customUrl&&(n=n.replace(/\{customUrl\}/g,t.customUrl)),n}function xa(e,t,n){if(!e||!t)return null;const u=ma(t.id).signal,{serviceType:o}=t;let l=ya(t.url,n);if(o==="custom"){if(!n.customUrl)return null;l=n.customUrl}if(t.nonStandardAdapter||o==="vector-tile")return null;const{subdomains:y}=ga(l),v=va(l),b=t.subdomains||y,M=t.maxZoom||18;try{let D=null;if(u.aborted)return null;switch(o){case"wms":{if(typeof e.WebMapServiceImageryProvider!="function")return null;const h=t.wms;if(!(h!=null&&h.layers))return null;D=new e.WebMapServiceImageryProvider({url:v||t.url,layers:h.layers,parameters:{version:h.version||"1.1.1",srs:h.srs||"EPSG:3857",format:h.format||"image/png",styles:h.styles||"",transparent:h.transparent!==!1}});break}case"wmts":{if(typeof e.WebMapTileServiceImageryProvider!="function")return null;const h=t.wmts;if(!(h!=null&&h.layer)||!h.matrixSet)return null;D=new e.WebMapTileServiceImageryProvider({url:v||t.url,layer:h.layer,style:h.style||"default",format:h.format||"image/png",tileMatrixSetID:h.matrixSet,maximumLevel:M});break}case"osm":{typeof e.OpenStreetMapImageryProvider=="function"?D=new e.OpenStreetMapImageryProvider({maximumLevel:M}):D=new e.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:M});break}default:{if(!v||!(v.includes("{z}")||v.includes("{x}")||v.includes("{y}")||v.includes("{reverseY}")))return null;D=new e.UrlTemplateImageryProvider({url:v,subdomains:b.length>0?b:void 0,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:M,enablePickFeatures:!1});break}}if(u.aborted){if(D&&typeof D.destroy=="function")try{D.destroy()}catch{}return null}return D&&(D._descriptorId=t.id),D}catch{return null}}function ba(e,t,n){if(!e||!Array.isArray(t))return[];const i=[];for(const u of t){const o=hn(u);if(!o)continue;const l=xa(e,o,n);l&&i.push(l)}return i}function _a(e){var i;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(i=t.requestRender)==null||i.call(t))}function Sa(e,t){var o;const n=e==null?void 0:e.scene,i=n==null?void 0:n.globe;if(!n||!i)return;Ma(n,t),Da(n),i.enableLighting=!0,i.showGroundAtmosphere=!0,_e(i,"dynamicAtmosphereLighting",!0),_e(i,"dynamicAtmosphereLightingFromSun",!0),_e(i,"atmosphereLightIntensity",5.5),_e(i,"atmosphereHueShift",-.015),_e(i,"atmosphereSaturationShift",.08),_e(i,"atmosphereBrightnessShift",.02),_e(i,"lightingFadeInDistance",15e6),_e(i,"lightingFadeOutDistance",22e6),_e(i,"nightFadeInDistance",9e6),_e(i,"nightFadeOutDistance",16e6),kt(t,i,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),kt(t,i,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),_e(i,"atmosphereRayleighScaleHeight",1e4),_e(i,"atmosphereMieScaleHeight",3200),_e(i,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=Fa(t));const u=n.skyAtmosphere;u&&(u.show=!0,_e(u,"perFragmentAtmosphere",!0),_e(u,"dynamicAtmosphereLighting",!0),_e(u,"dynamicAtmosphereLightingFromSun",!0),_e(u,"hueShift",-.025),_e(u,"saturationShift",.08),_e(u,"brightnessShift",.03),_e(u,"atmosphereLightIntensity",12),kt(t,u,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),kt(t,u,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),_e(u,"atmosphereRayleighScaleHeight",1e4),_e(u,"atmosphereMieScaleHeight",3200),_e(u,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),La(n),(o=n.requestRender)==null||o.call(n)}function wa(e){var u;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const i=(u=t.postProcessStages)==null?void 0:u.bloom;return{scene:it(t,["highDynamicRange","sunBloom","light"]),fog:it(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:it(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:it(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:it(t.sun,["show"]),moon:it(t.moon,["show"]),skyBox:it(t.skyBox,["show"]),bloom:{props:it(i,["enabled"]),uniforms:it(i==null?void 0:i.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Ta(e,t,n){var l,y,v,b;if(!n)return;const i=e==null?void 0:e.scene,u=i==null?void 0:i.globe;if(!i||!u)return;at(i,n.scene,t),at(i.fog,n.fog,t),at(u,n.globe,t),at(i.sun,n.sun,t),at(i.moon,n.moon,t),at(i.skyBox,n.skyBox,t),i.skyAtmosphere&&(at(i.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(i.skyAtmosphere.show=!1));const o=(l=i.postProcessStages)==null?void 0:l.bloom;at(o,(y=n.bloom)==null?void 0:y.props,t),at(o==null?void 0:o.uniforms,(v=n.bloom)==null?void 0:v.uniforms,t),(b=i.requestRender)==null||b.call(i)}function Ma(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}_e(e.light,"intensity",2.35)}function Da(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,_e(t,"density",12e-5),_e(t,"minimumBrightness",.035),_e(t,"screenSpaceErrorFactor",2),_e(t,"visualDensityScalar",.16))}function La(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(_e(t.uniforms,"contrast",128),_e(t.uniforms,"brightness",-.18),_e(t.uniforms,"delta",1),_e(t.uniforms,"sigma",2.5),_e(t.uniforms,"stepSize",4.2)))}function Fa(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function _e(e,t,n){e&&t in e&&(e[t]=n)}function kt(e,t,n,i,u,o){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(i,u,o))}function it(e,t){return e?t.reduce((n,i)=>(i in e&&(n[i]=Ca(e[i])),n),{}):{}}function at(e,t={},n){!e||!t||Object.entries(t).forEach(([i,u])=>{i in e&&(e[i]=Pa(u,n))})}function Ca(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Pa(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Aa={__name:"LilGuiControls",props:{title:{type:String,default:"Parameters"},controls:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const n=e,i=t,u=Y(null),o={},l=new Map;let y=null,v="",b=!1;Te(()=>[n.title,n.controls],()=>{M()},{deep:!0,flush:"post",immediate:!0}),ai(()=>{c()});function M(){typeof window>"u"||b||(b=!0,ri(()=>{b=!1,D()}))}function D(){const a=u.value;if(!a)return;const f=T(n.controls);(!y||f!==v)&&(c(),h(a,f)),C()}function h(a,f){y=new wi({container:a,autoPlace:!1,title:n.title||"Parameters",width:Math.max(260,Math.floor(a.clientWidth||320))}),y.domElement.classList.add("cesium-lil-gui"),a.replaceChildren(y.domElement),v=f;for(const x of n.controls||[]){const L=S(x);L&&l.set(x.id,L)}}function S(a){if(a.type==="info")return null;o[a.id]=r(a);let f=null;return a.type==="range"?f=y.add(o,a.id,s(a.min,0),s(a.max,1),s(a.step,.01)):a.type==="color"?f=y.addColor(o,a.id):a.type==="select"?f=y.add(o,a.id,d(a)):f=y.add(o,a.id),f.name(w(a)).onChange(x=>{const L=p(a.id)||a;L.disabled||i("change",{control:L,controlId:L.id,value:x})}),_(f,a),f}function C(){if(y){y.title(n.title||"Parameters");for(const a of n.controls||[]){const f=l.get(a.id);if(!f)continue;const x=r(a);m(o[a.id],x)||(o[a.id]=x,f.updateDisplay()),f.name(w(a)),f.disable(!!a.disabled),_(f,a)}}}function _(a,f){a.domElement.title=f.tooltip||"",a.domElement.dataset.controlId=f.id||"",a.domElement.dataset.controlType=f.type||""}function T(a=[]){return JSON.stringify(a.map(f=>({id:f.id,type:f.type,min:f.min,max:f.max,step:f.step,options:(f.options||[]).map(x=>({label:x.label,value:x.value}))})))}function w(a){return a.displayValue?`${a.label||a.id} (${a.displayValue})`:a.label||a.id}function r(a){var f,x;return a.type==="range"?s(a.value,s(a.min,0)):a.type==="toggle"?!!a.value:a.type==="select"?a.value??((x=(f=a.options)==null?void 0:f[0])==null?void 0:x.value)??"":a.type==="color"?typeof a.value=="string"&&a.value?a.value:"#ffffff":a.value}function d(a){const f={};for(const x of a.options||[])f[x.label||x.value]=x.value;return f}function p(a){return n.controls.find(f=>f.id===a)||null}function m(a,f){return typeof a=="number"||typeof f=="number"?Math.abs(Number(a)-Number(f))<1e-12:a===f}function s(a,f){const x=Number(a);return Number.isFinite(x)?x:f}function c(){if(y)try{y.destroy()}catch{}y=null,v="",l.clear();for(const a of Object.keys(o))delete o[a]}return(a,f)=>(ae(),ce("div",{ref_key:"containerRef",ref:u,class:"lil-gui-host"},null,512))}},fn=dt(Aa,[["__scopeId","data-v-110f953e"]]),Ea={key:0,class:"advanced-effects-root"},Ra={class:"effects-panel"},Ia={class:"panel-head"},ka={class:"effect-switches"},za={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=cn(),i=Y(null),u=Y(!1),o=Y(!1),l=Y(!1),y=Y(!1),v=Y(!1),b=De(()=>[{id:"fog",label:"Height Fog",type:"toggle",value:u.value},{id:"hbao",label:"HBAO",type:"toggle",value:o.value},{id:"tiltShift",label:"Tilt Shift",type:"toggle",value:l.value},{id:"atmosphere",label:"Atmosphere + Bloom",type:"toggle",value:y.value}]);let M=null,D=null,h=null,S=!1,C=null,_=null,T=null,w=null,r=null,d=null,p=null,m=null,s=!1,c=null,a=!1,f=0,x=0,L=typeof performance<"u"?performance.now():Date.now();function R(){return T||(T=Wt(()=>import("./cesiumFxRuntime-DkUmaEnF.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(N=>{var J;const k=(J=N==null?void 0:N.getCesiumFxEchartsRuntime)==null?void 0:J.call(N);if(!k)throw new Error("Cinematic FX 图表运行时加载失败");return _=k,k}).catch(N=>{throw T=null,N}),T)}async function z(){return _||R()}const G={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},P={hdr:null,bloom:null,sky:null};ln(()=>{oe()}),$t(()=>{Ue()}),Te(()=>t.controls,N=>{V(N||{})},{deep:!0,immediate:!0});function V(N){Object.prototype.hasOwnProperty.call(N,"fog")&&(u.value=!!N.fog),Object.prototype.hasOwnProperty.call(N,"hbao")&&(o.value=!!N.hbao),Object.prototype.hasOwnProperty.call(N,"tiltShift")&&(l.value=!!N.tiltShift),Object.prototype.hasOwnProperty.call(N,"atmosphere")&&(y.value=!!N.atmosphere)}function Z({controlId:N,value:k}){const J=!!k,re={fog:u,hbao:o,tiltShift:l,atmosphere:y}[N];re&&(re.value=J)}function oe(){let N=0;w=window.setInterval(async()=>{var Q,re;N+=1;const k=(Q=t.getViewer)==null?void 0:Q.call(t),J=((re=t.getCesium)==null?void 0:re.call(t))||window.Cesium;if(k&&J){clearInterval(w),w=null;try{le(k),he(k),me(k,J),W(k,J),n.success("高级视觉效果已启用。")}catch(B){n.error("高级视觉效果初始化失败",B),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}N>=150&&(clearInterval(w),w=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function le(N){var Q,re,B,K,ie,ne,fe,Pe,Ee;const k=N==null?void 0:N.scene;if(!k)return;typeof k.highDynamicRange=="boolean"&&(P.hdr=k.highDynamicRange),"sunBloom"in k&&(P.sunBloom=k.sunBloom);const J=k.globe;if(J&&(P.globe={enableLighting:J.enableLighting,showGroundAtmosphere:J.showGroundAtmosphere,dynamicAtmosphereLighting:J.dynamicAtmosphereLighting,dynamicAtmosphereLightingFromSun:J.dynamicAtmosphereLightingFromSun,atmosphereLightIntensity:J.atmosphereLightIntensity,atmosphereHueShift:J.atmosphereHueShift,atmosphereSaturationShift:J.atmosphereSaturationShift,atmosphereBrightnessShift:J.atmosphereBrightnessShift,lightingFadeInDistance:J.lightingFadeInDistance,lightingFadeOutDistance:J.lightingFadeOutDistance,nightFadeInDistance:J.nightFadeInDistance,nightFadeOutDistance:J.nightFadeOutDistance}),k.light&&(P.light={intensity:k.light.intensity}),(Q=k.postProcessStages)!=null&&Q.bloom){const we=k.postProcessStages.bloom;P.bloom={enabled:!!we.enabled,contrast:(re=we.uniforms)==null?void 0:re.contrast,brightness:(B=we.uniforms)==null?void 0:B.brightness,delta:(K=we.uniforms)==null?void 0:K.delta,sigma:(ie=we.uniforms)==null?void 0:ie.sigma,stepSize:(ne=we.uniforms)==null?void 0:ne.stepSize}}k.skyAtmosphere&&(P.sky={show:k.skyAtmosphere.show,hueShift:k.skyAtmosphere.hueShift,saturationShift:k.skyAtmosphere.saturationShift,brightnessShift:k.skyAtmosphere.brightnessShift}),P.celestial={sunShow:(fe=k.sun)==null?void 0:fe.show,moonShow:(Pe=k.moon)==null?void 0:Pe.show,skyBoxShow:(Ee=k.skyBox)==null?void 0:Ee.show}}function me(N,k){var Q;!((Q=N==null?void 0:N.scene)!=null&&Q.postProcessStages)||!(k!=null&&k.PostProcessStage)||(Ce(N,k),Le(N,k),U(N,k),y.value?H(N,k,1200):pe(N))}function he(N){var J;const k=N==null?void 0:N.scene;(J=k==null?void 0:k.renderError)!=null&&J.addEventListener&&(k.rethrowRenderErrors=!1,m=k.renderError.addEventListener((Q,re)=>{n.error("Cesium 渲染异常，已触发降级保护",re),Se(),s||(s=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function Se(){u.value=!1,l.value=!1,o.value=!1,y.value=!1,M&&(M.enabled=!1),D&&(D.enabled=!1),h&&(h.enabled=!1)}function Ce(N,k){M||(M=new k.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new k.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),N.scene.postProcessStages.add(M),M.enabled=u.value)}function Le(N,k){var Q,re;const J=(Q=N==null?void 0:N.scene)==null?void 0:Q.postProcessStages;J&&(J.ambientOcclusion?(h=J.ambientOcclusion,S=!1):(re=k==null?void 0:k.PostProcessStageLibrary)!=null&&re.createAmbientOcclusionStage&&(h=k.PostProcessStageLibrary.createAmbientOcclusionStage(),J.add(h),S=!0),h&&(h.enabled=o.value,h.uniforms&&("intensity"in h.uniforms&&(h.uniforms.intensity=4.2),"bias"in h.uniforms&&(h.uniforms.bias=.08),"lengthCap"in h.uniforms&&(h.uniforms.lengthCap=.35),"stepSize"in h.uniforms&&(h.uniforms.stepSize=1.8),"frustumLength"in h.uniforms&&(h.uniforms.frustumLength=1200))))}function U(N,k){D||(D=new k.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),N.scene.postProcessStages.add(D),D.enabled=!1)}function W(N,k){const J=N==null?void 0:N.scene;J&&(p=J.preRender.addEventListener(()=>{var K;const Q=Ye(N),re=Number(((K=N==null?void 0:N.camera)==null?void 0:K.pitch)??-1.2);f+=1;const B=typeof performance<"u"?performance.now():Date.now();if(B-L>=1e3&&(x=Math.round(f*1e3/(B-L)),f=0,L=B),M&&(M.enabled=u.value,M.uniforms.cameraHeightFactor=je(Q,150,12e3),M.uniforms.fogDensity=55e-5+(1-M.uniforms.cameraHeightFactor)*.00125),h&&(h.enabled=o.value),D){const ie=re>-.62,ne=ie?Ie((re+.62)/.5):0;D.enabled=l.value&&ie,D.uniforms.blurStrength=ne}y.value&&Q>=8e4?(H(N,k,Q),a=!1):a||(pe(N),a=!0)}))}function H(N,k,J){var ie;const Q=N==null?void 0:N.scene;if(!Q)return;c||(c=wa(N)),Sa(N,k),typeof Q.highDynamicRange=="boolean"&&(Q.highDynamicRange=!0);const re=(ie=Q.postProcessStages)==null?void 0:ie.bloom;re&&(re.enabled=!0,re.uniforms&&("contrast"in re.uniforms&&(re.uniforms.contrast=149),"brightness"in re.uniforms&&(re.uniforms.brightness=-.12),"delta"in re.uniforms&&(re.uniforms.delta=1),"sigma"in re.uniforms&&(re.uniforms.sigma=3.25),"stepSize"in re.uniforms&&(re.uniforms.stepSize=5)));const B=Q.skyAtmosphere;if(!B)return;const K=je(J,500,12e4);B.hueShift=-.035+K*.035,B.saturationShift=-.14+K*.09,B.brightnessShift=.03+(1-K)*.08}function pe(N){var B,K,ie;const k=N==null?void 0:N.scene;if(!k)return;const J=((B=t.getCesium)==null?void 0:B.call(t))||window.Cesium;if(c){Ta(N,J,c),c=null;return}typeof k.highDynamicRange=="boolean"&&P.hdr!==null&&(k.highDynamicRange=P.hdr),"sunBloom"in k&&P.sunBloom!==void 0&&(k.sunBloom=P.sunBloom);const Q=k.globe;if(Q&&P.globe){const ne=P.globe;ne.enableLighting!==void 0&&(Q.enableLighting=ne.enableLighting),ne.showGroundAtmosphere!==void 0&&(Q.showGroundAtmosphere=ne.showGroundAtmosphere),ne.dynamicAtmosphereLighting!==void 0&&"dynamicAtmosphereLighting"in Q&&(Q.dynamicAtmosphereLighting=ne.dynamicAtmosphereLighting),ne.dynamicAtmosphereLightingFromSun!==void 0&&"dynamicAtmosphereLightingFromSun"in Q&&(Q.dynamicAtmosphereLightingFromSun=ne.dynamicAtmosphereLightingFromSun),ne.atmosphereLightIntensity!==void 0&&"atmosphereLightIntensity"in Q&&(Q.atmosphereLightIntensity=ne.atmosphereLightIntensity),ne.atmosphereHueShift!==void 0&&"atmosphereHueShift"in Q&&(Q.atmosphereHueShift=ne.atmosphereHueShift),ne.atmosphereSaturationShift!==void 0&&"atmosphereSaturationShift"in Q&&(Q.atmosphereSaturationShift=ne.atmosphereSaturationShift),ne.atmosphereBrightnessShift!==void 0&&"atmosphereBrightnessShift"in Q&&(Q.atmosphereBrightnessShift=ne.atmosphereBrightnessShift),ne.lightingFadeInDistance!==void 0&&"lightingFadeInDistance"in Q&&(Q.lightingFadeInDistance=ne.lightingFadeInDistance),ne.lightingFadeOutDistance!==void 0&&"lightingFadeOutDistance"in Q&&(Q.lightingFadeOutDistance=ne.lightingFadeOutDistance),ne.nightFadeInDistance!==void 0&&"nightFadeInDistance"in Q&&(Q.nightFadeInDistance=ne.nightFadeInDistance),ne.nightFadeOutDistance!==void 0&&"nightFadeOutDistance"in Q&&(Q.nightFadeOutDistance=ne.nightFadeOutDistance)}k.light&&P.light&&P.light.intensity!==void 0&&(k.light.intensity=P.light.intensity);const re=(K=k.postProcessStages)==null?void 0:K.bloom;if(re&&P.bloom&&(re.enabled=P.bloom.enabled,re.uniforms&&("contrast"in re.uniforms&&P.bloom.contrast!==void 0&&(re.uniforms.contrast=P.bloom.contrast),"brightness"in re.uniforms&&P.bloom.brightness!==void 0&&(re.uniforms.brightness=P.bloom.brightness),"delta"in re.uniforms&&P.bloom.delta!==void 0&&(re.uniforms.delta=P.bloom.delta),"sigma"in re.uniforms&&P.bloom.sigma!==void 0&&(re.uniforms.sigma=P.bloom.sigma),"stepSize"in re.uniforms&&P.bloom.stepSize!==void 0&&(re.uniforms.stepSize=P.bloom.stepSize))),k.skyAtmosphere&&P.sky&&(P.sky.show!==void 0&&(k.skyAtmosphere.show=P.sky.show),k.skyAtmosphere.hueShift=P.sky.hueShift,k.skyAtmosphere.saturationShift=P.sky.saturationShift,k.skyAtmosphere.brightnessShift=P.sky.brightnessShift),P.celestial){const ne=P.celestial;k.sun&&ne.sunShow!==void 0&&(k.sun.show=ne.sunShow),k.moon&&ne.moonShow!==void 0&&(k.moon.show=ne.moonShow),k.skyBox&&ne.skyBoxShow!==void 0&&(k.skyBox.show=ne.skyBoxShow)}(ie=k.requestRender)==null||ie.call(k)}function Oe(){r&&(clearInterval(r),r=null)}async function ge(){var Q,re;const N=!v.value;if(v.value=N,!N){Oe();return}const k=(Q=t.getViewer)==null?void 0:Q.call(t),J=((re=t.getCesium)==null?void 0:re.call(t))||window.Cesium;if(!k||!J){v.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ae(k,J),Be(k,J),We(k,J)}catch(B){v.value=!1,n.error("图表模块加载失败",B)}}async function Ae(N,k){await z(),await ri(),i.value&&(C||(C=_.init(i.value),Re()),d||(d=()=>{C==null||C.resize()},window.addEventListener("resize",d)),C.resize(),We(N,k))}function Be(N,k){r||(r=window.setInterval(()=>{!C||!v.value||We(N,k)},1200))}function We(N,k){var K;const J=new Date,Q=`${$e(J.getHours())}:${$e(J.getMinutes())}:${$e(J.getSeconds())}`,re=Number((Ye(N)/1e3).toFixed(2)),B=Number(k.Math.toDegrees(((K=N==null?void 0:N.camera)==null?void 0:K.pitch)??0).toFixed(1));Ge(G.labels,Q,20),Ge(G.cameraHeightKm,re,20),Ge(G.pitchDeg,B,20),Ge(G.fps,x,20),C.setOption({xAxis:{data:G.labels},series:[{data:G.cameraHeightKm},{data:G.pitchDeg},{data:G.fps}]})}function Re(){C&&C.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function Ue(){var J,Q;w&&(clearInterval(w),w=null),Oe();const N=(J=t.getViewer)==null?void 0:J.call(t),k=(Q=N==null?void 0:N.scene)==null?void 0:Q.postProcessStages;p&&(p(),p=null),m&&(m(),m=null),M&&k&&k.remove(M),M=null,D&&k&&k.remove(D),D=null,h&&(S&&k&&k.remove(h),h=null),S=!1,a=!1,N&&pe(N),d&&(window.removeEventListener("resize",d),d=null),C&&(C.dispose(),C=null),_=null,s=!1}function Ye(N){var re,B,K;const k=(B=(re=N==null?void 0:N.scene)==null?void 0:re.globe)==null?void 0:B.ellipsoid,J=(K=N==null?void 0:N.camera)==null?void 0:K.positionWC;if(!k||!J)return 0;const Q=k.cartesianToCartographic(J);return Math.max(0,Number((Q==null?void 0:Q.height)??0))}function je(N,k,J){return!Number.isFinite(N)||J<=k?0:Ie((N-k)/(J-k))}function Ie(N){return Math.min(1,Math.max(0,Number(N)||0))}function Ge(N,k,J){N.push(k),N.length>J&&N.shift()}function $e(N){return String(N).padStart(2,"0")}return(N,k)=>e.headless?xe("",!0):(ae(),ce("div",Ea,[A("div",Ra,[A("div",Ia,[k[0]||(k[0]=A("span",{class:"panel-title"},"Cinematic FX",-1)),A("button",{class:"panel-btn",onClick:ge},ye(v.value?"隐藏图表":"显示图表"),1)]),A("div",ka,[Fe(fn,{title:"Effect Parameters",controls:b.value,onChange:Z},null,8,["controls"])]),Qe(A("div",{ref_key:"chartRef",ref:i,class:"fx-chart"},null,512),[[mt,v.value]])])]))}},Na=dt(za,[["__scopeId","data-v-c7595ca3"]]),Oa={key:0,class:"launcher-count"},Ha={class:"panel-header"},Ba={class:"panel-title-block"},Ua={class:"panel-mark"},Wa={class:"panel-copy"},Ga={class:"panel-subtitle"},$a={class:"panel-actions"},qa=["title"],ja={class:"panel-tabs","aria-label":"3D 工具分类"},Va=["aria-pressed","onClick"],Xa={class:"panel-scroll"},Ya={class:"panel-page"},Ka={class:"overview-grid"},Za={class:"overview-tile"},Ja={class:"overview-tile"},Qa={class:"overview-tile"},er={key:0,class:"quick-actions"},tr=["disabled","onClick"],nr={key:1,class:"empty-state"},ir={class:"panel-page"},ar=["aria-expanded"],rr={class:"section-main"},or={class:"section-meta"},sr={key:0,class:"section-body"},lr={class:"option-grid"},cr=["disabled","aria-pressed","title","onClick"],ur={class:"custom-basemap-input-row"},dr=["disabled"],hr={key:0,class:"custom-basemap-current"},fr=["aria-expanded"],mr={class:"section-main"},pr={class:"section-meta"},gr={key:0,class:"section-body"},vr={class:"option-grid"},yr=["aria-pressed","title","onClick"],xr=["aria-expanded"],br={class:"section-main"},_r={class:"section-meta"},Sr={key:0,class:"section-body"},wr={class:"overlay-list"},Tr=["disabled","aria-pressed","title","onClick"],Mr={class:"overlay-copy"},Dr={class:"overlay-title"},Lr={key:0,class:"overlay-desc"},Fr={key:3,class:"empty-state"},Cr={class:"panel-page"},Pr={class:"module-list"},Ar=["aria-expanded","onClick"],Er={class:"module-icon"},Rr={class:"module-copy"},Ir={class:"module-title"},kr={key:0,class:"module-desc"},zr={class:"module-head-side"},Nr={key:0,class:"module-body"},Or={key:0,class:"module-actions"},Hr=["disabled","onClick"],Br={key:0,class:"empty-state"},Ur={class:"panel-page"},Wr={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},Gr={class:"data-upload-hint"},$r={key:0,class:"data-source-list"},qr={class:"data-source-head"},jr={class:"data-source-count"},Vr=["title","aria-label","onClick"],Xr={class:"data-source-icon"},Yr={class:"data-source-copy"},Kr={class:"data-source-name"},Zr={class:"data-source-type"},Jr={key:1,class:"empty-state"},Rn=3,Qr=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",eo={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(e,{emit:t}){const n=e,i=Y(Array.isArray(n.loadedDataSources)?n.loadedDataSources:[]);Te(()=>n.loadedDataSources,U=>{const W=Array.isArray(U)?U:[];W!==i.value&&(i.value=W)},{immediate:!0});const u=t,o=z(),l=o.uiStateVersion===Rn,y=Y(o.activeTab||"scene"),v=Y(!!o.compactMode),b=Y(new Set(l?o.expandedLayerSectionIds||[]:[])),M=Y(new Set(l?o.expandedModuleIds||[]:[])),D=Y(n.customBasemapUrl||""),h=Y(null),S=De(()=>n.embedded||n.open),C=De(()=>n.modules.find(U=>U.id==="scene")||null),_=De(()=>{var U;return((U=C.value)==null?void 0:U.actions)||[]}),T=De(()=>n.modules.filter(U=>U.id!=="scene")),w=De(()=>T.value.filter(U=>U.statusTone==="success"||U.statusTone==="warning").length),r=De(()=>n.overlayOptions.filter(U=>!!U.active).length),d=[{id:"scene",label:"场景",icon:Yt},{id:"layers",label:"图层",icon:Kt},{id:"data",label:"数据",icon:rn},{id:"modules",label:"模块",icon:Xt}],p=De(()=>{var U;return((U=n.basemapOptions.find(W=>W.value===n.activeBasemap))==null?void 0:U.label)||"未选择"}),m=De(()=>{var U;return((U=n.terrainOptions.find(W=>W.value===n.activeTerrain))==null?void 0:U.label)||"未选择"});Te(()=>n.modules.map(U=>U.id),U=>{U.includes(y.value)||y.value==="scene"||y.value==="layers"||y.value==="modules"||(y.value="scene")},{immediate:!0}),Te([y,v,b,M],G,{deep:!0}),Te(()=>n.customBasemapUrl,U=>{U!==D.value&&(D.value=U||"")});function s(U){u("update:open",U)}function c(U){return b.value.has(U)}function a(U){const W=new Set(b.value);W.has(U)?W.delete(U):W.add(U),b.value=W}function f(U){return M.value.has(U)}function x(U){const W=new Set(M.value);W.has(U)?W.delete(U):W.add(U),M.value=W}function L(U){U!=null&&U.disabled||u("update:activeBasemap",U.value)}function R(){u("custom-basemap-submit",{url:D.value})}function z(){if(typeof window>"u")return{};try{const U=window.localStorage.getItem(n.storageKey);return U?JSON.parse(U):{}}catch{return{}}}function G(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:Rn,activeTab:y.value,compactMode:v.value,expandedLayerSectionIds:[...b.value],expandedModuleIds:[...M.value]}))}catch{}}function P(U){return{scene:Yt,effects:Ai,wind:Pi,fluid:Ci,shallowWater:wn}[U]||Xt}function V(U,W){var pe;return((pe={scene:{home:Li,everest:_n,tileset:Bt},wind:{load:Di,clear:Zt},fluid:{pick:Sn,clear:Zt},shallowWater:{toggle:wn}}[U])==null?void 0:pe[W])||Fi}function Z(U,W){u("module-action",{moduleId:U,actionId:W})}function oe(U,W,H){const pe=W.type==="range"?Number(H):H;u("control-change",{moduleId:U,controlId:W.id,value:pe})}function le(U){U.disabled||u("overlay-toggle",{overlayId:U.value,value:!U.active})}function me(U){return{geojson:Rt,json:Rt,kml:Tn,kmz:Tn,shp:Kt,gltf:Bt,czml:Rt,"3dtiles":Bt}[U]||Rt}function he(U){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[U]||U.toUpperCase()}function Se(U){var H;const W=(H=U.target)==null?void 0:H.files;!W||W.length===0||(u("data-import",{files:Array.from(W)}),h.value&&(h.value.value=""))}function Ce(U){u("data-remove",{id:U})}function Le(){u("data-clear-all")}return(U,W)=>(ae(),ce("aside",{class:He(["cesium-tool-shell",{"is-open":S.value,"is-embedded":e.embedded}])},[!e.embedded&&!S.value?(ae(),ce("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:W[0]||(W[0]=H=>s(!0))},[Fe(de(Xt),{size:18,"stroke-width":"2"}),W[7]||(W[7]=A("span",null,"高级控制台",-1)),w.value?(ae(),ce("span",Oa,ye(w.value),1)):xe("",!0)])):xe("",!0),Qe(A("section",{class:He(["cesium-tool-panel",{compact:v.value}]),"aria-label":"Cesium 高级控制台"},[A("header",Ha,[A("div",Ba,[A("span",Ua,[Fe(de(Yt),{size:18,"stroke-width":"2"})]),A("span",Wa,[W[8]||(W[8]=A("span",{class:"panel-title"},"3D 高级控制台",-1)),A("span",Ga,ye(p.value)+" / "+ye(m.value),1)])]),A("div",$a,[A("button",{class:"icon-btn",type:"button",title:v.value?"切换为舒展布局":"切换为紧凑布局",onClick:W[1]||(W[1]=H=>v.value=!v.value)},[Fe(de(Ti),{size:16,"stroke-width":"2"})],8,qa),e.embedded?xe("",!0):(ae(),ce("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:W[2]||(W[2]=H=>s(!1))},[Fe(de(xn),{size:17,"stroke-width":"2"})]))])]),A("nav",ja,[(ae(),ce(rt,null,lt(d,H=>A("button",{key:H.id,class:He(["tab-btn",{active:y.value===H.id}]),type:"button","aria-pressed":y.value===H.id,onClick:pe=>y.value=H.id},[(ae(),Xe(pt(H.icon),{size:15,"stroke-width":"2"})),A("span",null,ye(H.label),1)],10,Va)),64))]),A("div",Xa,[Qe(A("section",Ya,[A("div",Ka,[A("div",Za,[W[9]||(W[9]=A("span",{class:"overview-label"},"地图源",-1)),A("strong",null,ye(p.value),1)]),A("div",Ja,[W[10]||(W[10]=A("span",{class:"overview-label"},"地形",-1)),A("strong",null,ye(m.value),1)]),A("div",Qa,[W[11]||(W[11]=A("span",{class:"overview-label"},"模块",-1)),A("strong",null,ye(w.value)+"/"+ye(T.value.length),1)])]),_.value.length?(ae(),ce("div",er,[(ae(!0),ce(rt,null,lt(_.value,H=>(ae(),ce("button",{key:H.id,class:He(["tool-action",[H.variant||"default",{active:H.active}]]),disabled:H.disabled,type:"button",onClick:pe=>Z(C.value.id,H.id)},[(ae(),Xe(pt(V(C.value.id,H.id)),{size:15,"stroke-width":"2"})),Ot(" "+ye(H.label),1)],10,tr))),128))])):(ae(),ce("div",nr," 暂无场景快捷操作 "))],512),[[mt,y.value==="scene"]]),Qe(A("section",ir,[e.basemapOptions.length?(ae(),ce("div",{key:0,class:He(["option-group",{expanded:c("basemap")}])},[A("button",{class:"section-head section-toggle",type:"button","aria-expanded":c("basemap"),onClick:W[3]||(W[3]=H=>a("basemap"))},[A("span",rr,[Fe(de(Kt),{size:16,"stroke-width":"2"}),W[12]||(W[12]=A("span",null,"底图源",-1))]),A("span",or,[A("span",null,ye(p.value),1),Fe(de(Et),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,ar),c("basemap")?(ae(),ce("div",sr,[A("div",lr,[(ae(!0),ce(rt,null,lt(e.basemapOptions,H=>(ae(),ce("button",{key:H.value,class:He(["option-card",{active:H.value===e.activeBasemap}]),type:"button",disabled:H.disabled,"aria-pressed":H.value===e.activeBasemap,title:H.description||H.label,onClick:pe=>L(H)},[A("span",null,ye(H.label),1),H.value===e.activeBasemap?(ae(),Xe(de(bn),{key:0,size:15,"stroke-width":"2.4"})):xe("",!0)],10,cr))),128))]),A("form",{class:"custom-basemap-editor",onSubmit:xt(R,["prevent"])},[A("div",ur,[Fe(de(Mi),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),Qe(A("input",{"onUpdate:modelValue":W[4]||(W[4]=H=>D.value=H),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Ht,D.value]]),A("button",{class:"custom-basemap-submit",type:"submit",disabled:!D.value.trim(),title:"加载自定义 XYZ"},[Fe(de(li),{size:14,"stroke-width":"2"}),W[13]||(W[13]=A("span",null,"加载",-1))],8,dr)]),e.customBasemapUrl?(ae(),ce("div",hr,ye(e.customBasemapUrl),1)):xe("",!0)],32)])):xe("",!0)],2)):xe("",!0),e.terrainOptions.length?(ae(),ce("div",{key:1,class:He(["option-group",{expanded:c("terrain")}])},[A("button",{class:"section-head section-toggle",type:"button","aria-expanded":c("terrain"),onClick:W[5]||(W[5]=H=>a("terrain"))},[A("span",mr,[Fe(de(_n),{size:16,"stroke-width":"2"}),W[14]||(W[14]=A("span",null,"地形",-1))]),A("span",pr,[A("span",null,ye(m.value),1),Fe(de(Et),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,fr),c("terrain")?(ae(),ce("div",gr,[A("div",vr,[(ae(!0),ce(rt,null,lt(e.terrainOptions,H=>(ae(),ce("button",{key:H.value,class:He(["option-card",{active:H.value===e.activeTerrain}]),type:"button","aria-pressed":H.value===e.activeTerrain,title:H.description||H.label,onClick:pe=>U.$emit("update:activeTerrain",H.value)},[A("span",null,ye(H.label),1),H.value===e.activeTerrain?(ae(),Xe(de(bn),{key:0,size:15,"stroke-width":"2.4"})):xe("",!0)],10,yr))),128))])])):xe("",!0)],2)):xe("",!0),e.overlayOptions.length?(ae(),ce("div",{key:2,class:He(["option-group",{expanded:c("overlay")}])},[A("button",{class:"section-head section-toggle",type:"button","aria-expanded":c("overlay"),onClick:W[6]||(W[6]=H=>a("overlay"))},[A("span",br,[Fe(de(Sn),{size:16,"stroke-width":"2"}),W[15]||(W[15]=A("span",null,"叠加层",-1))]),A("span",_r,[A("span",null,ye(r.value)+"/"+ye(e.overlayOptions.length),1),Fe(de(Et),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,xr),c("overlay")?(ae(),ce("div",Sr,[A("div",wr,[(ae(!0),ce(rt,null,lt(e.overlayOptions,H=>(ae(),ce("button",{key:H.value,class:He(["overlay-row",{active:!!H.active}]),type:"button",disabled:H.disabled,"aria-pressed":!!H.active,title:H.description||H.label,onClick:pe=>le(H)},[A("span",Mr,[A("span",Dr,ye(H.label),1),H.description?(ae(),ce("span",Lr,ye(H.description),1)):xe("",!0)]),A("span",{class:He(["toggle-control",{active:!!H.active}]),"aria-hidden":"true"},[...W[16]||(W[16]=[A("span",{class:"toggle-track"},[A("span",{class:"toggle-thumb"})],-1)])],2)],10,Tr))),128))])])):xe("",!0)],2)):xe("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(ae(),ce("div",Fr," 暂无图层配置项 ")):xe("",!0)],512),[[mt,y.value==="layers"]]),Qe(A("section",Cr,[A("div",Pr,[(ae(!0),ce(rt,null,lt(T.value,H=>{var pe,Oe;return ae(),ce("article",{key:H.id,class:He(["module-item",{expanded:f(H.id)}])},[A("button",{class:"module-head",type:"button","aria-expanded":f(H.id),onClick:ge=>x(H.id)},[A("span",Er,[(ae(),Xe(pt(P(H.id)),{size:16,"stroke-width":"2"}))]),A("span",Rr,[A("span",Ir,ye(H.title),1),H.description?(ae(),ce("span",kr,ye(H.description),1)):xe("",!0)]),A("span",zr,[H.status?(ae(),ce("span",{key:0,class:He(["module-status",H.statusTone||"neutral"])},ye(H.status),3)):xe("",!0),Fe(de(Et),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Ar),f(H.id)?(ae(),ce("div",Nr,[(pe=H.actions)!=null&&pe.length?(ae(),ce("div",Or,[(ae(!0),ce(rt,null,lt(H.actions,ge=>(ae(),ce("button",{key:ge.id,class:He(["tool-action",[ge.variant||"default",{active:ge.active}]]),disabled:ge.disabled,type:"button",onClick:Ae=>Z(H.id,ge.id)},[(ae(),Xe(pt(V(H.id,ge.id)),{size:14,"stroke-width":"2"})),Ot(" "+ye(ge.label),1)],10,Hr))),128))])):xe("",!0),(Oe=H.controls)!=null&&Oe.length?(ae(),ce("div",{key:1,class:He(["control-list control-list-gui",H.controlLayout?`control-list-${H.controlLayout}`:""])},[Fe(fn,{title:H.title,controls:H.controls,onChange:ge=>oe(H.id,ge.control,ge.value)},null,8,["title","controls","onChange"])],2)):xe("",!0)])):xe("",!0)],2)}),128))]),T.value.length?xe("",!0):(ae(),ce("div",Br," 暂无可用功能模块 "))],512),[[mt,y.value==="modules"]]),Qe(A("section",Ur,[A("label",Wr,[A("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:h,class:"data-file-input",type:"file",multiple:"",accept:Qr,onChange:Se},null,544),A("div",Gr,[Fe(de(rn),{size:28,"stroke-width":"1.5"}),W[17]||(W[17]=A("span",null,"选择文件或拖拽到此处",-1)),W[18]||(W[18]=A("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),i.value.length?(ae(),ce("div",$r,[A("div",qr,[A("span",jr," 已加载 "+ye(i.value.length)+" 个数据源 ",1),A("button",{class:"tool-action danger",type:"button",onClick:Le},[Fe(de(Zt),{size:13,"stroke-width":"2"}),W[19]||(W[19]=Ot(" 全部清除 ",-1))])]),(ae(!0),ce(rt,null,lt(i.value,H=>(ae(),ce("button",{key:H.id,class:"data-source-row",type:"button",title:`点击移除 ${H.name} (${he(H.type)})`,"aria-label":`移除 ${H.name}`,onClick:pe=>Ce(H.id)},[A("span",Xr,[(ae(),Xe(pt(me(H.type)),{size:15,"stroke-width":"2"}))]),A("span",Yr,[A("span",Kr,ye(H.name),1),A("span",Zr,ye(he(H.type)),1)]),Fe(de(xn),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,Vr))),128))])):(ae(),ce("div",Jr," 暂无已导入的数据 "))],512),[[mt,y.value==="data"]])])],2),[[mt,e.embedded||S.value]])],2))}},to=dt(eo,[["__scopeId","data-v-c66eae0a"]]),no={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},io={class:"dialog-header"},ao={class:"dialog-title-row"},ro={class:"dialog-file-name"},oo={class:"coord-fields"},so={class:"coord-field"},lo={key:0,class:"coord-error"},co={class:"coord-field"},uo={key:0,class:"coord-error"},ho={class:"coord-field"},fo={key:0,class:"coord-error"},mo={class:"dialog-actions"},po=["disabled"],go={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,i=t,u=Y(""),o=Y(""),l=Y("0"),y=Y(null),v=Y(""),b=Y(""),M=Y(""),D=De(()=>u.value!==""&&o.value!==""&&!v.value&&!b.value&&!M.value);function h(){const C=parseFloat(u.value),_=parseFloat(o.value),T=parseFloat(l.value);v.value="",b.value="",M.value="",u.value!==""&&(isNaN(C)||C<-180||C>180)&&(v.value="经度范围: -180 ~ 180"),o.value!==""&&(isNaN(_)||_<-90||_>90)&&(b.value="纬度范围: -90 ~ 90"),l.value!==""&&(isNaN(T)||T<0)&&(M.value="高度必须 ≥ 0")}function S(){if(!D.value){h();return}const C=parseFloat(u.value),_=parseFloat(o.value),T=parseFloat(l.value)||0;i("confirm",{lng:C,lat:_,height:T})}return Te(()=>n.visible,C=>{if(!C){v.value="",b.value="",M.value="";return}u.value="",o.value="",l.value="0",v.value="",b.value="",M.value="",C&&setTimeout(()=>{var _;(_=y.value)==null||_.focus()},60)}),(C,_)=>(ae(),Xe(fi,{to:"body"},[e.visible?(ae(),ce("div",{key:0,class:"cesium-data-dialog-overlay",onClick:_[4]||(_[4]=xt(T=>C.$emit("cancel"),["self"]))},[A("div",no,[A("header",io,[A("div",ao,[Fe(de(Bt),{size:18,"stroke-width":"2"}),_[5]||(_[5]=A("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),A("p",ro,ye(e.fileName),1),_[6]||(_[6]=A("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),A("form",{class:"dialog-form",onSubmit:xt(S,["prevent"])},[A("div",oo,[A("label",so,[_[7]||(_[7]=A("span",{class:"coord-label"},"经度 (Longitude)",-1)),Qe(A("input",{ref_key:"lngInputRef",ref:y,"onUpdate:modelValue":_[0]||(_[0]=T=>u.value=T),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:h},null,544),[[Ht,u.value]]),v.value?(ae(),ce("span",lo,ye(v.value),1)):xe("",!0)]),A("label",co,[_[8]||(_[8]=A("span",{class:"coord-label"},"纬度 (Latitude)",-1)),Qe(A("input",{"onUpdate:modelValue":_[1]||(_[1]=T=>o.value=T),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:h},null,544),[[Ht,o.value]]),b.value?(ae(),ce("span",uo,ye(b.value),1)):xe("",!0)]),A("label",ho,[_[9]||(_[9]=A("span",{class:"coord-label"},"高度 (Height 米)",-1)),Qe(A("input",{"onUpdate:modelValue":_[2]||(_[2]=T=>l.value=T),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:h},null,544),[[Ht,l.value]]),M.value?(ae(),ce("span",fo,ye(M.value),1)):xe("",!0)])]),A("div",mo,[A("button",{class:"dialog-btn cancel-btn",type:"button",onClick:_[3]||(_[3]=T=>C.$emit("cancel"))}," 取消 "),A("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!D.value},[Fe(de(li),{size:14,"stroke-width":"2"}),_[10]||(_[10]=Ot(" 确认放置 ",-1))],8,po)])],32)])])):xe("",!0)]))}},vo=dt(go,[["__scopeId","data-v-81f307a1"]]);function yo(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(w){return(w==null?void 0:w._view)||(w==null?void 0:w.view)}function n(w){const r=t(w);if(!(r!=null&&r.passState))throw new Error("Cesium scene passState is unavailable.");return r.passState}function i(w){const r=t(w);return(r==null?void 0:r.frustumCommandsList)||(r==null?void 0:r._frustumCommandsList)||[]}const u=`
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
`,o=`
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
`,l=`
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
`,v=`
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
`,b=`
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
`;class M{constructor(r){this.commandType=r.commandType,this.geometry=r.geometry,this.attributeLocations=r.attributeLocations,this.primitiveType=r.primitiveType,this.uniformMap=r.uniformMap,this.vertexShaderSource=r.vertexShaderSource,this.fragmentShaderSource=r.fragmentShaderSource,this.rawRenderState=r.rawRenderState,this.framebuffer=r.framebuffer,this.isPostRender=r.isPostRender,this.outputTexture=r.outputTexture,this.autoClear=e.defaultValue(r.autoClear,!1),this.preExecute=r.preExecute,this.modelMatrix=e.defaultValue(r.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(r){switch(this.commandType){case"Draw":{const d=e.VertexArray.fromGeometry({context:r,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),p=e.ShaderProgram.fromCache({context:r,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),m=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:d,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:p,framebuffer:this.framebuffer,renderState:m,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(r,d){this.geometry=d;const p=e.VertexArray.fromGeometry({context:r,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=p}update(r){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(r.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&r.commandList.push(this.clearCommand),r.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class D{constructor(){}static loadText(r){const d=new XMLHttpRequest;return d.open("GET",r,!1),d.send(),d.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(r){if(e.defined(r.arrayBufferView)){const p={};p.arrayBufferView=r.arrayBufferView,r.source=p,r.flipY=!1}return new e.Texture(r)}static createDepthFramebuffer(r,d,p){return new e.Framebuffer({context:r,colorTextures:[this.createTexture({context:r,width:d,height:p,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(d*p*4)})],depthRenderbuffer:new e.Renderbuffer({context:r,width:d,height:p,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(r,d,p,m=!1){const s={context:r,colorTextures:[d],destroyAttachments:m};return p&&(s.depthTexture=p),new e.Framebuffer(s)}static createRawRenderState(r){const m={viewport:r.viewport,depthTest:r.depthTest,depthMask:r.depthMask,blending:r.blending};return e.Appearance.getDefaultRenderState(!0,!1,m)}}const T=class T{constructor(r,d={}){if(!r)throw new Error("Cesium Viewer is required");this.viewer=r,this._initConfiguration(d),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(r){this.config={resolution:new e.Cartesian2(r.width||T.DEFAULTS.width,r.height||T.DEFAULTS.height),dimensions:r.dimensions||T.DEFAULTS.dimensions.clone(),heightRange:{min:r.minHeight??T.DEFAULTS.heightRange[0],max:r.maxHeight??T.DEFAULTS.heightRange[1]},baseHeight:r.baseHeight??T.DEFAULTS.baseHeight,fluidParams:r.fluidParams||T.DEFAULTS.fluidParams.clone(),customParams:r.customParams||T.DEFAULTS.customParams.clone(),waterColor:r.waterColor||T.DEFAULTS.waterColor.clone(),lonLat:r.lonLat||[...T.DEFAULTS.lonLat],timeStep:r.timeStep||T.DEFAULTS.timeStep,heightMapSource:r.heightMapSource||T.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(r){const d=Number(r);!Number.isFinite(d)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,d)),this.resetSimulation())}resetSimulation(){var r,d;this._frameCount=0,(d=(r=this.viewer.scene).requestRender)==null||d.call(r)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const r=()=>D.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:r(),B:r(),C:r(),D:r()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(r){if(!(r!=null&&r.arrayBufferView)||!r.width||!r.height)throw new Error("Invalid height map source.");return D.createTexture({context:this.viewer.scene.context,width:r.width,height:r.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:r.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var z,G;const r=this.viewer.scene.context,d=D.createDepthFramebuffer(r,this.config.resolution.x,this.config.resolution.y),p=this.viewer.scene,m=p.frameState,s=n(this.viewer.scene),c=p.camera,a=m.camera,f=s.framebuffer,x=e.BoundingRectangle.clone(s.viewport,new e.BoundingRectangle);let L=null,R=[];try{s.viewport.x=0,s.viewport.y=0,s.viewport.width=this.config.resolution.x,s.viewport.height=this.config.resolution.y,s.framebuffer=d,p.camera=this.heightMapCamera,m.camera=this.heightMapCamera,m.context.uniformState.updateCamera(this.heightMapCamera),R=this._processHeightMapShaders(),this._renderDepthPrepass(s);const P=D.createTexture({context:r,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return L=D.createFramebuffer(r,P),this._copyTexture(d.getColorTexture(0),L),P}finally{this._restoreHeightMapShaders(R),s.framebuffer=f,e.BoundingRectangle.clone(x,s.viewport),p.camera=c,m.camera=a,a&&m.context.uniformState.updateCamera(a),L&&!((z=L.isDestroyed)!=null&&z.call(L))&&L.destroy(),d&&!((G=d.isDestroyed)!=null&&G.call(d))&&d.destroy()}}_renderDepthPrepass(r){const d=this.viewer.scene.frameState;d.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(m=>m.execute(this.viewer.scene.context,r))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const r={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...r,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:o}),this._createComputePass("B",{uniforms:{...r,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:l}),this._createComputePass("C",{uniforms:{...r,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:y}),this._createComputePass("D",{uniforms:{...r,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:v})]}_createComputePass(r,{uniforms:d,shaderSource:p}){return new M({commandType:"Compute",uniformMap:d,fragmentShaderSource:new e.ShaderSource({sources:[u,p]}),geometry:D.getFullscreenQuad(),outputTexture:this.textures[r],preExecute:m=>m.commandToExecute.outputTexture=this.textures[r]})}_createMainRenderPass(){const r=S([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new M({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[u,b]}),geometry:this._createBoxGeometry(),modelMatrix:r,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var r,d,p,m;return(m=(p=(d=(r=t(this.viewer.scene))==null?void 0:r.globeDepth)==null?void 0:d.colorFramebufferManager)==null?void 0:p._colorTextures)==null?void 0:m[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(r=>this.viewer.scene.primitives.add(r)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(r){const d=this.viewer.camera.getPickRay(r);return this.viewer.scene.globe.pick(d,this.viewer.scene)}_createOrthographicCamera(){const r=new e.Camera(this.viewer.scene);r.frustum=new e.OrthographicOffCenterFrustum;const[d,p]=this.config.lonLat,m=e.Cartesian3.fromDegrees(d,p,this.config.baseHeight),s=e.Transforms.eastNorthUpToFixedFrame(m),c=r.frustum;c.near=.01,c.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),c.left=-this.config.dimensions.x/2,c.right=this.config.dimensions.x/2,c.bottom=-this.config.dimensions.y/2,c.top=this.config.dimensions.y/2;const a=e.Matrix4.getColumn(s,2,new e.Cartesian3);e.Cartesian3.negate(a,a);const f=e.Matrix4.getColumn(s,1,new e.Cartesian3),x=e.Matrix4.getColumn(s,0,new e.Cartesian3),L=e.Cartesian3.multiplyByScalar(a,-c.far,new e.Cartesian3);return r.position=e.Cartesian3.add(m,L,new e.Cartesian3),r.direction=a,r.up=f,r.right=x,r}destroy(){var r,d;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(p=>{p&&this.viewer.scene.primitives.remove(p)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(p=>{var m;p&&!((m=p.isDestroyed)!=null&&m.call(p))&&p.destroy()}),this.textures={},this._heightMap&&!((d=(r=this._heightMap).isDestroyed)!=null&&d.call(r))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(r,d){const p=this.viewer.scene.context,m=n(this.viewer.scene),s=p.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>r},owner:this}),c=m.framebuffer;m.framebuffer=d,s.execute(p,m),m.framebuffer=c}_getDepthRenderCommands(){var p,m;const r=[],d=i(this.viewer.scene);for(let s=0;s<d.length;++s){const c=d[s],a=(p=c==null?void 0:c.commands)==null?void 0:p[2],f=((m=c==null?void 0:c.indices)==null?void 0:m[2])??(a==null?void 0:a.length)??0;a&&f>0&&r.push(...a.slice(0,f))}return r}_processHeightMapShaders(){const r=[],d=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),p=e.Matrix4.inverse(d,new e.Matrix4),m=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(c=>{var R;if(!((R=c==null?void 0:c.shaderProgram)!=null&&R.fragmentShaderSource)||!c.uniformMap)return;const a=Object.prototype.hasOwnProperty.call(c.uniformMap,"u_inverseEnuMatrix"),f=c.uniformMap.u_inverseEnuMatrix,x=c.shaderProgram,L=new e.Matrix4;c.uniformMap.u_inverseEnuMatrix=()=>{const z=c.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(p,z,L)},c.heightMap_ShaderProgram||(c.heightMap_ShaderProgram=this._getDerivedShaderProgram(m.context,c.shaderProgram,"Height_Map")),c.shaderProgram=c.heightMap_ShaderProgram,r.push({command:c,hadInverseUniform:a,originalInverseUniform:f,originalShaderProgram:x})}),r}_restoreHeightMapShaders(r){r.forEach(d=>{const{command:p,hadInverseUniform:m,originalInverseUniform:s,originalShaderProgram:c}=d;p!=null&&p.uniformMap&&(p.shaderProgram=c,m?p.uniformMap.u_inverseEnuMatrix=s:delete p.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(r,d,p){let m=r.shaderCache.getDerivedShaderProgram(d,p);return e.defined(m)||(m=this._createHeightMapShaderProgram(r,d,p)),m}_createHeightMapShaderProgram(r,d,p){const m=this._modifyFragmentShader(d.fragmentShaderSource);return r.shaderCache.createDerivedShaderProgram(d,p,{vertexShaderSource:d.vertexShaderSource,fragmentShaderSource:m,attributeLocations:d._attributeLocations})}_modifyFragmentShader(r){const d=r.sources.map(p=>e.ShaderSource.replaceMain(p,"czm_heightMap_main"));return d.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:d,defines:r.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};et(T,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let h=T;const S=(w=[0,0,0],r=[0,0,0],d=[1,1,1])=>{const p=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(r[0]))),m=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(r[1]))),s=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(r[2])));w instanceof e.Cartesian3||(w=e.Cartesian3.fromDegrees(...w));const c=e.Transforms.eastNorthUpToFixedFrame(w);e.Matrix4.multiply(c,p,c),e.Matrix4.multiply(c,m,c),e.Matrix4.multiply(c,s,c);const a=e.Matrix4.fromScale(new e.Cartesian3(...d));return e.Matrix4.multiply(c,a,new e.Matrix4)},C=`
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
    `;function _(){return new e.PostProcessStage({fragmentShader:C})}return{FluidRenderer:h,createSkyEffect:_}}const xo={key:0,class:"fluid-root"},bo={class:"fluid-panel"},_o={class:"panel-actions"},So=["disabled"],wo={key:0,class:"selected-text"},In=1024,zt=1e4,kn=1200,To=100,Mo=.01,Do=.03,Lo=60,Qt=64,Fo=160,Co={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const i=e,u=n,o=cn(),l=Y(10),y=Y(20),v=Y(3),b=Y("#0d4fa3"),M=Y(null),D=Y(null),h=Y(null),S=Y(!1),C=Y(!1),_=Y(null),T=Y(null),w=Y(!1),r=Y(5);let d=null,p=null,m=null,s=null,c=null,a=null,f=null,x=null,L=0;const R=De(()=>!Number.isFinite(_.value)||!Number.isFinite(T.value)?"":`经度 ${_.value.toFixed(6)} / 纬度 ${T.value.toFixed(6)}`),z=De(()=>Number.isFinite(D.value)&&Number.isFinite(h.value)),G=De(()=>{if(!z.value)return 1;const F=Math.abs(h.value-D.value);return Math.max(F/1e3,.01)}),P=De(()=>[{id:"threshold",label:"Threshold",type:"range",min:0,max:500,step:1e-4,value:l.value,displayValue:Number(l.value).toFixed(2)},{id:"blend",label:"Blend",type:"range",min:0,max:50,step:1e-4,value:y.value,displayValue:Number(y.value).toFixed(2)},{id:"lightStrength",label:"Light",type:"range",min:0,max:10,step:1e-4,value:v.value,displayValue:Number(v.value).toFixed(2)},{id:"waterLevel",label:"Water Level",type:"range",min:z.value?D.value:0,max:z.value?h.value:1,step:G.value,value:Number.isFinite(Number(M.value))?Number(M.value):0,displayValue:z.value&&Number.isFinite(Number(M.value))?`${Number(M.value).toFixed(2)} m`:"Pick terrain first",disabled:!z.value},{id:"waterColor",label:"Water Color",type:"color",value:b.value}]);Te([l,y,v,b],k),Te(M,J),Te(()=>i.params,F=>{Z(F||{})},{deep:!0,immediate:!0}),Te([S,C,R,M,D,h,w,r],le,{immediate:!0}),ai(()=>{ie(),Ee(!0)});function V(){var $,te;const F=($=i.getViewer)==null?void 0:$.call(i),I=((te=i.getCesium)==null?void 0:te.call(i))||window.Cesium;if(!F||!I)return o.warning("Cesium 场景尚未就绪。"),null;if(!m){const se=yo(I);m=se.FluidRenderer,s=se.createSkyEffect}return{viewer:F,Cesium:I}}function Z(F){Number.isFinite(Number(F.threshold))&&(l.value=Number(F.threshold)),Number.isFinite(Number(F.blend))&&(y.value=Number(F.blend)),Number.isFinite(Number(F.lightStrength))&&(v.value=Number(F.lightStrength)),Ie(F.waterColor)&&(b.value=F.waterColor),Number.isFinite(Number(F.waterLevel))&&(M.value=Number(F.waterLevel))}function oe({controlId:F,value:I}){F==="threshold"?l.value=Number(I):F==="blend"?y.value=Number(I):F==="lightStrength"?v.value=Number(I):F==="waterLevel"?M.value=Number(I):F==="waterColor"&&Ie(I)&&(b.value=I)}function le(){u("state-change",{isPicking:S.value,hasFluid:C.value,selectedText:R.value,waterLevel:M.value,waterLevelMin:D.value,waterLevelMax:h.value,floodSimActive:w.value,floodSpeed:r.value})}function me(){const F=V();if(!F)return;const{viewer:I,Cesium:$}=F;fe(),Q(I,$),S.value=!0,c=new $.ScreenSpaceEventHandler(I.scene.canvas),c.setInputAction(te=>{he(I,$,te.position)},$.ScreenSpaceEventType.LEFT_CLICK)}async function he(F,I,$){var j,ee;const te=N(F,$);if(!te){o.warning("未选中可用地形位置。");return}const se=++L;fe();const ve=I.Cartographic.fromCartesian(te),g=I.Math.toDegrees(ve.longitude),E=I.Math.toDegrees(ve.latitude),q=Number(ve.height),X=Number.isFinite(q)?q:0,O=new I.Cartesian3(zt,zt,0);oi("正在请求模拟范围高度数据...");try{Pe();const ue=Number(l.value)||0,Me=Number(y.value)||0,ke=Number(v.value)||0,Ke=await Se(F,I,{lon:g,lat:E,centerHeight:X,dimensions:O}),ze=Be(Ke,X),st=ze.baseHeight,Ve=ze.depth,bt=We(ze,X),At=new I.Cartesian3(zt,zt,Ve);if(se!==L)return;D.value=ze.minHeight,h.value=ze.maxHeight,M.value=bt;const _t=Math.abs(ze.maxHeight-ze.minHeight);_t>0&&(r.value=Math.max(_t/10,.1)),Ke||o.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),a=new m(F,{lonLat:[g,E],width:In,height:In,dimensions:At,baseHeight:st,minHeight:ze.minHeight,maxHeight:ze.maxHeight,heightMapSource:Ke,waterColor:Ye(I,b.value),customParams:new I.Cartesian4(ue,Me,ke,10),fluidParams:new I.Cartesian4(.9+ke/10*.099,Math.min(1,Me/50),ue/5e4,Re(bt,ze))}),_.value=g,T.value=E,C.value=!0,(ee=(j=F.scene).requestRender)==null||ee.call(j),o.success("水体流体已创建。")}catch(ue){o.error("水体流体创建失败",ue),o.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{si()}}async function Se(F,I,$){const te=F==null?void 0:F.terrainProvider,se=Le($.dimensions);if(!te)return null;if(I.EllipsoidTerrainProvider&&te instanceof I.EllipsoidTerrainProvider)return ge(se);if(typeof I.sampleTerrain!="function"&&typeof I.sampleTerrainMostDetailed!="function")return null;try{return await Ce(F,I,$,se)}catch(ve){if(se<=Qt)throw ve;return Ce(F,I,$,Qt)}}async function Ce(F,I,$,te){const se=W(I,$,te),ve=await H(I,F.terrainProvider,se);return Oe(ve||se,{size:te})}function Le(F){const I=Math.max(Number(F==null?void 0:F.x)||0,Number(F==null?void 0:F.y)||0),$=Math.ceil(I/Lo)+1;return U($,Qt,Fo)}function U(F,I,$){return Math.max(I,Math.min($,Math.round(F)))}function W(F,{lon:I,lat:$,centerHeight:te,dimensions:se},ve){const g=F.Cartesian3.fromDegrees(I,$,te),E=F.Transforms.eastNorthUpToFixedFrame(g),q=[],X=Math.max(1,ve-1);for(let O=0;O<ve;O++){const ee=(.5-O/X)*se.y;for(let ue=0;ue<ve;ue++){const ke=(ue/X-.5)*se.x,Ke=new F.Cartesian3(ke,ee,0),ze=F.Matrix4.multiplyByPoint(E,Ke,new F.Cartesian3);q.push(F.Cartographic.fromCartesian(ze))}}return q}async function H(F,I,$){const te=pe(I),se=Number.isInteger(te)?te:Math.min((I==null?void 0:I.maximumLevel)??12,12);return typeof F.sampleTerrain=="function"?F.sampleTerrain(I,se,$):F.sampleTerrainMostDetailed(I,$)}function pe(F){const I=Number(F==null?void 0:F._bottomLevel);return Number.isFinite(I)?Math.max(0,I-1):null}function Oe(F,{size:I}){var se;const $=Ae(F);if(!$)return null;const te=new Float32Array(I*I*4);for(let ve=0;ve<I*I;ve++){const g=Number((se=F[ve])==null?void 0:se.height),E=ve*4;te[E]=Number.isFinite(g)?$e(g,$.minHeight,$.maxHeight):$.minHeight,te[E+1]=0,te[E+2]=0,te[E+3]=1}return{width:I,height:I,arrayBufferView:te,minHeight:$.minHeight,maxHeight:$.maxHeight}}function ge(F){return{width:F,height:F,arrayBufferView:new Float32Array(F*F*4),minHeight:0,maxHeight:0}}function Ae(F){let I=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY;for(const te of F||[]){const se=Number(te==null?void 0:te.height);Number.isFinite(se)&&(I=Math.min(I,se),$=Math.max($,se))}return!Number.isFinite(I)||!Number.isFinite($)?null:{minHeight:I,maxHeight:$}}function Be(F,I){const $=Number(F==null?void 0:F.minHeight),te=Number(F==null?void 0:F.maxHeight);if(Number.isFinite($)&&Number.isFinite(te)){const g=Number(I),E=Number.isFinite(g)?Math.min($,te,g):Math.min($,te),q=Number.isFinite(g)?Math.max($,te,g):Math.max($,te),X=Math.max(q-E,Mo);return{baseHeight:E,depth:X,minHeight:E,maxHeight:E+X}}const se=Number(I),ve=Number.isFinite(se)?se-To:0;return{baseHeight:ve,depth:kn,minHeight:ve,maxHeight:ve+kn}}function We(F,I){const $=F.minHeight+F.depth*Do,te=Number(I),se=Number.isFinite(te)?te:$;return $e(se,F.minHeight,F.maxHeight)}function Re(F,I){const $=I.maxHeight-I.minHeight;return!Number.isFinite($)||$<=0?0:$e((F-I.minHeight)/$,0,1)}function Ue(){return!Number.isFinite(D.value)||!Number.isFinite(h.value)?null:{minHeight:Math.min(D.value,h.value),maxHeight:Math.max(D.value,h.value)}}function Ye(F,I){const $=Ge(I)||Ge("#0d4fa3");return new F.Cartesian3($.red,$.green,$.blue)}function je(){var $;const F=Ge(b.value),I=($=a==null?void 0:a.config)==null?void 0:$.waterColor;!F||!I||(I.x=F.red,I.y=F.green,I.z=F.blue)}function Ie(F){return typeof F=="string"&&/^#[0-9a-f]{6}$/i.test(F)}function Ge(F){return Ie(F)?{red:Number.parseInt(F.slice(1,3),16)/255,green:Number.parseInt(F.slice(3,5),16)/255,blue:Number.parseInt(F.slice(5,7),16)/255}:null}function $e(F,I,$){return Math.max(I,Math.min($,F))}function N(F,I){if(!I)return null;if(F.scene.pickPositionSupported&&typeof F.scene.pickPosition=="function"){const te=F.scene.pickPosition(I);if(te)return te}const $=F.camera.getPickRay(I);return $?F.scene.globe.pick($,F.scene):null}function k(){var te,se,ve;if(!(a!=null&&a.config))return;const F=Number(l.value)||0,I=Number(y.value)||0,$=Number(v.value)||0;a.config.customParams&&(a.config.customParams.x=F,a.config.customParams.y=I,a.config.customParams.z=$),a.config.fluidParams&&(a.config.fluidParams.x=.9+$/10*.099,a.config.fluidParams.y=Math.min(1,I/50),a.config.fluidParams.z=F/5e4),je(),(ve=(se=(te=a.viewer)==null?void 0:te.scene)==null?void 0:se.requestRender)==null||ve.call(se)}function J(){var se,ve,g,E;if(!((se=a==null?void 0:a.config)!=null&&se.fluidParams))return;const F=Ue(),I=Number(M.value);if(!F||!Number.isFinite(I))return;const $=$e(I,F.minHeight,F.maxHeight);if($!==I){M.value=$;return}const te=Re($,F);typeof a.setInitialWaterLevel=="function"?a.setInitialWaterLevel(te):(a.config.fluidParams.w=te,(E=(g=(ve=a.viewer)==null?void 0:ve.scene)==null?void 0:g.requestRender)==null||E.call(g))}function Q(F,I){var $,te;if(!x){const se=F.scene;x={shadows:F.shadows,resolutionScale:F.resolutionScale,msaaSamples:se.msaaSamples,depthTestAgainstTerrain:se.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:se.logarithmicDepthBuffer,highDynamicRange:se.highDynamicRange,fogEnabled:($=se.fog)==null?void 0:$.enabled,showGroundAtmosphere:se.globe.showGroundAtmosphere,skyAtmosphereShow:(te=se.skyAtmosphere)==null?void 0:te.show,enableLighting:se.globe.enableLighting}}F.shadows=!0,F.resolutionScale=1,F.scene.msaaSamples=4,F.scene.globe.depthTestAgainstTerrain=!0,F.scene.logarithmicDepthBuffer=!0,F.scene.highDynamicRange=!0,F.scene.fog&&(F.scene.fog.enabled=!0),F.scene.globe.showGroundAtmosphere=!0,F.scene.skyAtmosphere&&(F.scene.skyAtmosphere.show=!0),F.scene.globe.enableLighting=!0,!f&&s&&(f=s(I),F.scene.postProcessStages.add(f))}function re(F){if(!F||!x)return;const I=F.scene;F.shadows=x.shadows,F.resolutionScale=x.resolutionScale,x.msaaSamples!==void 0&&(I.msaaSamples=x.msaaSamples),I.globe.depthTestAgainstTerrain=x.depthTestAgainstTerrain,I.logarithmicDepthBuffer=x.logarithmicDepthBuffer,I.highDynamicRange=x.highDynamicRange,I.fog&&x.fogEnabled!==void 0&&(I.fog.enabled=x.fogEnabled),I.globe.showGroundAtmosphere=x.showGroundAtmosphere,I.skyAtmosphere&&x.skyAtmosphereShow!==void 0&&(I.skyAtmosphere.show=x.skyAtmosphereShow),I.globe.enableLighting=x.enableLighting,x=null}function B(){w.value?ie():K()}function K(){const F=Ue();if(!F)return;const I=Number(M.value);(!Number.isFinite(I)||I>=F.maxHeight-.01)&&(M.value=F.minHeight),w.value=!0,p=null;function $(te){if(!w.value)return;p===null&&(p=te);const se=Math.min((te-p)/1e3,.1);p=te;const ve=Ue();if(!ve){ie();return}const E=Number(M.value)+r.value*se;if(E>=ve.maxHeight){M.value=ve.maxHeight,ie(),o.info("洪水模拟完成：水位已达最大值");return}M.value=E,d=requestAnimationFrame($)}d=requestAnimationFrame($),o.info("洪水模拟开始")}function ie(){w.value=!1,p=null,d!==null&&(cancelAnimationFrame(d),d=null)}function ne(){ie(),Ee(!1),o.success("水体流体已清除。")}function fe(){c&&(c.destroy(),c=null),S.value=!1}function Pe(){if(a){try{a.destroy()}catch{}a=null,C.value=!1}}function Ee(F){var $,te,se;const I=($=i.getViewer)==null?void 0:$.call(i);if(L+=1,ie(),fe(),Pe(),_.value=null,T.value=null,M.value=null,D.value=null,h.value=null,I&&f){try{I.scene.postProcessStages.remove(f)}catch{}f=null}F&&I&&re(I),(se=(te=I==null?void 0:I.scene)==null?void 0:te.requestRender)==null||se.call(te)}function we(){Ee(!0),u("close")}function Ze(F){const I=Number(F);Number.isFinite(I)&&I>0&&(r.value=I)}return t({startPickHeightMap:me,clearFluid:ne,toggleFloodSimulation:B,stopFloodSimulation:ie,setFloodSpeed:Ze}),(F,I)=>e.headless?xe("",!0):(ae(),ce("div",xo,[A("div",bo,[A("div",{class:"panel-head"},[I[0]||(I[0]=A("span",{class:"panel-title"},"水体流体",-1)),A("button",{class:"panel-close",title:"关闭",onClick:we}," × ")]),A("div",_o,[A("button",{class:He(["action-btn primary",{active:S.value}]),onClick:me},ye(S.value?"等待选点":"捕捉高度图"),3),A("button",{class:"action-btn",disabled:!C.value&&!S.value,onClick:ne}," 清除 ",8,So)]),R.value?(ae(),ce("div",wo,ye(R.value),1)):xe("",!0),Fe(fn,{class:"param-list",title:"Fluid Parameters",controls:P.value,onChange:oe},null,8,["controls"])])]))}},Po=dt(Co,[["__scopeId","data-v-2de8b792"]]),Ao=`
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
`,Io=`
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
`;function zo(e=256){const t=new Float32Array(e*e);for(let h=0;h<e*e;h++)t[h]=Math.random();const n=(h,S)=>{const C=new Float32Array(e*e);for(let _=0;_<e;_++)for(let T=0;T<e;T++){let w=0,r=0;for(let d=-S;d<=S;d++)for(let p=-S;p<=S;p++)w+=h[(_+d+e)%e*e+(T+p+e)%e],r++;C[_*e+T]=w/r}return C},i=n(t,4),u=n(t,1),o=new Float32Array(e*e);for(let h=0;h<e*e;h++)o[h]=i[h]*.7+u[h]*.3;const l=document.createElement("canvas");l.width=l.height=e;const y=l.getContext("2d"),v=y.createImageData(e,e),b=(h,S)=>o[(S+e)%e*e+(h+e)%e],M=3;for(let h=0;h<e;h++)for(let S=0;S<e;S++){const C=(b(S-1,h)-b(S+1,h))*M,_=(b(S,h-1)-b(S,h+1))*M,T=Math.hypot(C,_,1),w=(h*e+S)*4;v.data[w]=(C/T*.5+.5)*255,v.data[w+1]=(_/T*.5+.5)*255,v.data[w+2]=(1/T*.5+.5)*255,v.data[w+3]=255}y.putImageData(v,0,0);const D=new un(l);return D.wrapS=D.wrapT=dn,D.colorSpace=ci,D}function No(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#d8c79b",t.fillRect(0,0,512,512);for(let i=0;i<12e3;i++){const u=170+Math.random()*70|0;t.fillStyle=`rgba(${u},${u-22},${u-65},0.22)`,t.fillRect(Math.random()*512,Math.random()*512,1.6,1.6)}for(let i=0;i<26;i++){const u=60+Math.random()*40|0,o=90+Math.random()*50|0,l=70+Math.random()*40|0;t.fillStyle=`rgba(${u},${o},${l},0.30)`,t.beginPath(),t.ellipse(Math.random()*512,Math.random()*512,8+Math.random()*26,6+Math.random()*20,Math.random()*6,0,7),t.fill()}const n=new un(e);return n.wrapS=n.wrapT=dn,n.repeat.set(10,10),n.colorSpace=Ei,n}function Oo(e=256){const t=(b,M)=>{const D=new Float32Array(e*e);for(let h=0;h<e;h++)for(let S=0;S<e;S++){let C=0,_=0;for(let T=-M;T<=M;T++)for(let w=-M;w<=M;w++)C+=b[(h+T+e)%e*e+(S+w+e)%e],_++;D[h*e+S]=C/_}return D},n=()=>{const b=new Float32Array(e*e);for(let _=0;_<e*e;_++)b[_]=Math.random();const M=t(b,3),D=t(b,1),h=new Float32Array(e*e);let S=1e9,C=-1e9;for(let _=0;_<e*e;_++)h[_]=M[_]*.65+D[_]*.35,S=Math.min(S,h[_]),C=Math.max(C,h[_]);for(let _=0;_<e*e;_++)h[_]=(h[_]-S)/(C-S);return h},i=n(),u=n(),o=document.createElement("canvas");o.width=o.height=e;const l=o.getContext("2d"),y=l.createImageData(e,e);for(let b=0;b<e*e;b++){const M=b*4;y.data[M]=i[b]*255,y.data[M+1]=u[b]*255,y.data[M+2]=0,y.data[M+3]=255}l.putImageData(y,0,0);const v=new un(o);return v.wrapS=v.wrapT=dn,v.colorSpace=ci,v.minFilter=Mn,v.magFilter=Mn,v.generateMipmaps=!1,v}function Ho(e={}){const{onReady:t,onError:n,onFpsUpdate:i}=e,u=Y(!1),o=Y(0);let l=null,y=null,v=null,b=null,M=null,D=null,h=null,S=null,C=null,_=null,T=null,w=null,r=null;const d=new nt;let p=null,m=null,s=null;const c=new Ri;let a=0,f=0;const x={value:0},L={value:.9},R={value:0},z={value:new nt};let G=3,P=-100;const V=.62,Z={};let oe=!0,le=null;const me=new Dn,he={elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2};async function Se(B){if(!B){n==null||n(new Error("Container element not provided"));return}if(!u.value){D=B;try{v=new Ii({antialias:!0,alpha:!0}),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setSize(D.clientWidth,D.clientHeight),v.toneMapping=ki,v.toneMappingExposure=V,v.setClearColor(0,0),D.appendChild(v.domElement),l=new Dn,y=new zi(55,D.clientWidth/D.clientHeight,1,2e4),y.position.set(0,55,280),Ce(),Oe(),ge(),Le(),U(),W(),H(),pe(),Re(),Ue(),Ge(),u.value=!0,t==null||t()}catch(K){n==null||n(K)}}}function Ce(){w=new Ni,w.scale.setScalar(12e3),l.add(w);const B=w.material.uniforms;B.turbidity.value=6,B.rayleigh.value=1.6,B.mieCoefficient.value=.005,B.mieDirectionalG.value=.8}function Le(){r=new Gi(16774368,2.6),l.add(r),l.add(new $i(13627391,2117738,.7))}function U(){const B=new Fn(1600,1600,200,200);B.rotateX(-Math.PI/2);const K=B.attributes.position;for(let ne=0;ne<K.count;ne++){const fe=K.getX(ne),Pe=K.getZ(ne);let we=-34+It.clamp((Pe+800)/1600,0,1)*44;we+=Math.sin(fe*.012)*Math.cos(Pe*.014)*3.5,we+=Math.sin(fe*.06+Pe*.05)*1.1,we+=(Math.random()-.5)*.6,K.setY(ne,we)}B.computeVertexNormals();const ie=new Cn({map:No(),roughness:1,metalness:0});zn(ie,{uTime:x,uCaustic:L}),l.add(new wt(B,ie))}function W(){const B=new qi(1,0),K=[8023642,7035722,11887946,13598051,9083483];for(let ie=0;ie<30;ie++){const ne=new Cn({color:K[ie%K.length],roughness:.9,flatShading:!0});zn(ne,{uTime:x,uCaustic:L});const fe=new wt(B,ne),Pe=3+Math.random()*9;fe.scale.set(Pe,Pe*(.5+Math.random()*.6),Pe),fe.position.set((Math.random()-.5)*1100,-24+Math.random()*22,-300+Math.random()*900),fe.rotation.set(Math.random(),Math.random(),Math.random()),l.add(fe)}}function H(){T=new ji(v),_=new Vi(256,{generateMipmaps:!0,minFilter:Xi}),C=new Yi(1,2e4,_),C.position.set(0,4,0),l.add(C);const B=new Jt;v.getDrawingBufferSize(B),S=new Ki(B.x,B.y),S.depthTexture=new Zi(B.x,B.y),S.depthTexture.type=Ji,S.depthTexture.format=Qi}function pe(){const B=new Jt;v.getDrawingBufferSize(B);const K=zo(256),ie={uTime:x,tRefraction:{value:S.texture},tDepth:{value:S.depthTexture},tEnv:{value:_.texture},normalMap:{value:K},resolution:{value:B.clone()},cameraNear:{value:y.near},cameraFar:{value:y.far},invProjection:{value:new Pn},camWorld:{value:new Pn},sunDirection:{value:new nt},sunColor:{value:new St(16774106)},waterColor:{value:new St(he.waterColor)},absorption:{value:new nt(.45,.09,.05)},foamColor:{value:new St(15925247)},clarity:{value:he.clarity},foamWidth:{value:he.foamWidth},waveHeight:{value:he.waveHeight},reflection:{value:he.reflection}};h=new wt(new Fn(16e3,16e3,384,384),new Ln({uniforms:ie,vertexShader:Eo,fragmentShader:Ro})),h.rotation.x=-Math.PI/2,l.add(h)}function Oe(){const B=new Ln({side:Oi,transparent:!0,depthWrite:!1,uniforms:{uTime:x,uNoise:{value:Oo(256)},sunDirection:{value:new nt},sunColor:{value:new St(16773341)},skyTint:{value:new St(7315406)},uCoverage:{value:he.cloudCoverage},uFlash:R,uFlashPos:z},vertexShader:Io,fragmentShader:ko});p=new wt(new Hi(8e3,32,16),B),p.renderOrder=2,l.add(p)}function ge(){s=new Bi({color:14478335,transparent:!0,opacity:0,blending:Ui,depthWrite:!1,depthTest:!1}),m=new Wi,m.visible=!1,l.add(m)}function Ae(B,K,ie,ne,fe,Pe){const Ee=[];let we=B,Ze=K;const F=Math.max(5,Math.floor((ie-ne)/80));for(let te=0;te<=F;te++){const se=te/F;Ee.push(new nt(we,ie+(ne-ie)*se,Ze)),we+=(Math.random()-.5)*fe,Ze+=(Math.random()-.5)*fe}const I=new ta(new na(Ee),F*4,Pe,5,!1),$=new wt(I,s);return $.renderOrder=3,m.add($),Ee}function Be(){for(const ne of m.children)ne.geometry.dispose();m.clear();const B=1+Math.floor(Math.random()*3);let K=0,ie=0;for(let ne=0;ne<B;ne++){const fe=(Math.random()-.5)*5e3,Pe=-(1e3+Math.random()*4500);ne===0&&(K=fe,ie=Pe);const Ee=Ae(fe,Pe,1180,18,110,14),we=2+Math.floor(Math.random()*3);for(let Ze=0;Ze<we;Ze++){const F=Ee[2+Math.floor(Math.random()*(Ee.length-4))];Ae(F.x,F.z,F.y,F.y-(160+Math.random()*420),130,7)}}z.value.set(K,1100,ie)}function We(){if(!he.lightningEnabled){R.value=0,m.visible=!1,v.toneMappingExposure=V;return}const B=x.value;B>=G&&(P=B,Be(),G=B+he.lightningInterval*(.4+Math.random()*.8));const K=B-P;let ie=0;K>=0&&K<.5&&(ie=Math.max(0,Math.exp(-K*5.5)*(.5+.5*Math.sin(K*60)))),R.value=ie*2.4,m.visible=ie>.1,s.opacity=Math.min(1,ie*1.7),v.toneMappingExposure=V+ie*.75}function Re(){b=new ea(y,v.domElement),b.target.set(0,130,-400),b.maxPolarAngle=Math.PI*.49,b.minDistance=30,b.maxDistance=2e3,b.enableDamping=!0}function Ue(){window.addEventListener("keydown",Ye),window.addEventListener("keyup",je)}function Ye(B){const K=B.target&&B.target.tagName;K==="INPUT"||K==="TEXTAREA"||(Z[B.code]=!0)}function je(B){Z[B.code]=!1}function Ie(B){const K=(Z.ShiftLeft||Z.ShiftRight?240:95)*B,ie=new nt,ne=new nt,fe=new nt;y.getWorldDirection(ie).normalize(),ne.crossVectors(ie,y.up).normalize(),fe.set(0,0,0),Z.KeyW&&fe.add(ie),Z.KeyS&&fe.addScaledVector(ie,-1),Z.KeyD&&fe.add(ne),Z.KeyA&&fe.addScaledVector(ne,-1),Z.KeyE&&(fe.y+=1),Z.KeyQ&&(fe.y-=1),fe.lengthSq()!==0&&(fe.normalize().multiplyScalar(K),y.position.add(fe),b.target.add(fe),y.position.y<2.5&&(y.position.y=2.5))}function Ge(){const B=It.degToRad(90-he.elevation),K=It.degToRad(he.azimuth);if(d.setFromSphericalCoords(1,B,K),w.material.uniforms.sunPosition.value.copy(d),r.position.copy(d).multiplyScalar(1e3),h&&h.material.uniforms.sunDirection.value.copy(d).normalize(),p){p.material.uniforms.sunDirection.value.copy(d).normalize();const ie=It.clamp(1-he.elevation/28,0,1);p.material.uniforms.sunColor.value.setRGB(1,.95-.22*ie,.86-.48*ie)}l.remove(w),me.add(w),le&&le.dispose(),le=T.fromScene(me),l.environment=le.texture,me.remove(w),l.add(w),oe=!0}function $e(){M=requestAnimationFrame($e);const B=c.getDelta();x.value+=B,L.value=he.causticStrength,Ie(B),We(),b.update(),y.updateMatrixWorld(),h.material.uniforms.invProjection.value.copy(y.projectionMatrixInverse),h.material.uniforms.camWorld.value.copy(y.matrixWorld),h.visible=!1,oe&&(C.update(v,l),oe=!1),p.visible=!1;const K=m.visible;m.visible=!1,v.setRenderTarget(S),v.render(l,y),v.setRenderTarget(null),p.visible=!0,m.visible=K,h.visible=!0,v.render(l,y),a++;const ie=performance.now();ie-f>=1e3&&(o.value=Math.round(a*1e3/(ie-f)),i==null||i(o.value),a=0,f=ie)}function N(){if(!y||!v||!D)return;const B=D.clientWidth,K=D.clientHeight;y.aspect=B/K,y.updateProjectionMatrix(),v.setSize(B,K);const ie=new Jt;v.getDrawingBufferSize(ie),S.setSize(ie.x,ie.y),h.material.uniforms.resolution.value.copy(ie)}function k(){M||(c.start(),$e())}function J(){M&&(cancelAnimationFrame(M),M=null)}function Q(B){const K={...he};Object.assign(he,B),(B.elevation!==K.elevation||B.azimuth!==K.azimuth)&&Ge(),h&&(B.clarity!==K.clarity&&(h.material.uniforms.clarity.value=B.clarity),B.waveHeight!==K.waveHeight&&(h.material.uniforms.waveHeight.value=B.waveHeight),B.foamWidth!==K.foamWidth&&(h.material.uniforms.foamWidth.value=B.foamWidth),B.reflection!==K.reflection&&(h.material.uniforms.reflection.value=B.reflection),B.waterColor!==K.waterColor&&h.material.uniforms.waterColor.value.set(B.waterColor)),B.causticStrength!==K.causticStrength&&(L.value=B.causticStrength),B.cloudCoverage!==K.cloudCoverage&&p&&(p.material.uniforms.uCoverage.value=B.cloudCoverage)}function re(){J(),window.removeEventListener("keydown",Ye),window.removeEventListener("keyup",je),v&&(v.dispose(),D==null||D.removeChild(v.domElement)),l==null||l.traverse(B=>{B.geometry&&B.geometry.dispose(),B.material&&(Array.isArray(B.material)?B.material.forEach(K=>K.dispose()):B.material.dispose())}),S==null||S.dispose(),_==null||_.dispose(),le==null||le.dispose(),T==null||T.dispose(),l=null,y=null,v=null,b=null,h=null,w=null,r=null,p=null,m=null,s=null,u.value=!1}return $t(()=>{re()}),{isReady:u,fps:o,init:Se,start:k,pause:J,dispose:re,handleResize:N,updateParams:Q}}const Bo={__name:"ShallowWaterOverlay",props:{visible:{type:Boolean,default:!1},elevation:{type:Number,default:30},azimuth:{type:Number,default:150},clarity:{type:Number,default:.085},causticStrength:{type:Number,default:.9},waterColor:{type:String,default:"#2bb3c4"},waveHeight:{type:Number,default:.5},foamWidth:{type:Number,default:2.4},reflection:{type:Number,default:.38},cloudCoverage:{type:Number,default:.58},lightningEnabled:{type:Boolean,default:!0},lightningInterval:{type:Number,default:2}},emits:["ready","error","fps-update"],setup(e,{expose:t,emit:n}){const i=e,u=n,o=Y(null),{isReady:l,fps:y,init:v,start:b,pause:M,dispose:D,handleResize:h,updateParams:S}=Ho({onReady:()=>u("ready"),onError:w=>u("error",w),onFpsUpdate:w=>u("fps-update",w)});Te(()=>i.visible,async w=>{w?(await C(),b()):M()}),Te(()=>[i.elevation,i.azimuth,i.clarity,i.causticStrength,i.waterColor,i.waveHeight,i.foamWidth,i.reflection,i.cloudCoverage,i.lightningEnabled,i.lightningInterval],()=>{_()});async function C(){!o.value||l.value||(await v(o.value),_())}function _(){S({elevation:i.elevation,azimuth:i.azimuth,clarity:i.clarity,causticStrength:i.causticStrength,waterColor:i.waterColor,waveHeight:i.waveHeight,foamWidth:i.foamWidth,reflection:i.reflection,cloudCoverage:i.cloudCoverage,lightningEnabled:i.lightningEnabled,lightningInterval:i.lightningInterval})}function T(){h()}return ln(()=>{window.addEventListener("resize",T),i.visible&&C()}),$t(()=>{window.removeEventListener("resize",T),D()}),t({isReady:l,fps:y,start:b,pause:M}),(w,r)=>Qe((ae(),ce("div",{ref_key:"canvasContainerRef",ref:o,class:"shallow-water-overlay"},null,512)),[[mt,e.visible]])}},Uo=dt(Bo,[["__scopeId","data-v-e9c0d469"]]),mn="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Wo=`${mn}Cesium.js`,Go=`${mn}Widgets/widgets.css`;async function $o({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=mn),await jo(Go,"cesium-widgets-style"),await qo(Wo,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Ut(t,e),t}function Ut(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function qo(e,t){return new Promise((n,i)=>{const u=document.getElementById(t);if(u){if(u.getAttribute("data-loaded")==="true"){n();return}u.addEventListener("load",()=>n(),{once:!0}),u.addEventListener("error",()=>i(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const o=document.createElement("script");o.id=t,o.src=e,o.async=!0,o.onload=()=>{o.setAttribute("data-loaded","true"),n()},o.onerror=()=>i(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(o)})}function jo(e,t){return new Promise((n,i)=>{if(document.getElementById(t)){n();return}const o=document.createElement("link");o.id=t,o.rel="stylesheet",o.href=e,o.onload=()=>n(),o.onerror=()=>i(new Error(`样式加载失败: ${e}`)),document.head.appendChild(o)})}const Vo="Asia/Shanghai",Xo="UTC+8",Yo=new Intl.DateTimeFormat("zh-CN",{timeZone:Vo,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Ko(e,t){var n,i,u,o,l,y,v;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...b)=>Jo(e,t,...b),e.animation.viewModel.timeFormatter=(...b)=>Qo(e,t,...b)),e.timeline){const b=(...M)=>es(e,t,...M);e.timeline.makeLabel=b,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=b),(u=(i=e.timeline).updateFromClock)==null||u.call(i),(l=(o=e.timeline).zoomTo)==null||l.call(o,e.clock.startTime,e.clock.stopTime)}(v=(y=e.scene).requestRender)==null||v.call(y)}}function pn(e,t,...n){var y;const i=n.find(Zo)||((y=e==null?void 0:e.clock)==null?void 0:y.currentTime);if(!i)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const u=t.JulianDate.toDate(i),o=Yo.formatToParts(u),l=Object.fromEntries(o.filter(({type:v})=>v!=="literal").map(({type:v,value:b})=>[v,b]));return{year:l.year||"0000",month:l.month||"01",day:l.day||"01",hour:l.hour||"00",minute:l.minute||"00",second:l.second||"00"}}function Zo(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function Jo(e,t,...n){const{year:i,month:u,day:o}=pn(e,t,...n);return`${i}-${u}-${o}`}function Qo(e,t,...n){const{hour:i,minute:u,second:o}=pn(e,t,...n);return`${i}:${u}:${o} ${Xo}`}function es(e,t,...n){const{month:i,day:u,hour:o,minute:l}=pn(e,t,...n);return`${i}-${u} ${o}:${l}`}function ts({getViewer:e}){let t=null,n=null;function i(){var y;const l=e==null?void 0:e();if(l&&((y=l._cesiumWidget)!=null&&y._creditContainer&&(l._cesiumWidget._creditContainer.style.display="none"),u(),t=setInterval(()=>{const v=document.querySelector(".cesium-credit-container");v&&v.innerHTML.length>0&&(v.innerHTML="",v.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const v=document.createElement("style");v.id="cesium-credit-override",v.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(v),n=v}}function u(){var v;const l=e==null?void 0:e();if(!l)return;(v=l._cesiumWidget)!=null&&v._creditContainer&&(l._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",l._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(b=>{b.style.cssText="display: none !important; visibility: hidden !important;",b.innerHTML=""}),l.scene&&l.scene.frameState&&l.scene.frameState.creditDisplay&&(l.scene.frameState.creditDisplay.hasCredits=()=>!1,l.scene.frameState.creditDisplay.destroy=()=>{})}function o(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:i,cleanupCreditHider:o}}const en="经度: --, 纬度: --, 海拔: --米";function ns({getViewer:e,getCesium:t,onCoordinatePick:n}){let i=null,u=null,o=null;const l=Y("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function y(){const S=e==null?void 0:e(),C=t==null?void 0:t();!S||!C||(h(),u=S.scene.canvas,i=new C.ScreenSpaceEventHandler(u),o=()=>{l.value=en},u.addEventListener("mouseleave",o),i.setInputAction(_=>{v(_.endPosition,S,C)},C.ScreenSpaceEventType.MOUSE_MOVE),i.setInputAction(_=>{const T=_.endPosition,w=_.startPosition;if(!C.defined(S.terrainProvider))return;const r=S.scene.globe.ellipsoid;if(!S.camera.pickEllipsoid(w,r)){const p=S.camera;p.rotate(C.Cartesian3.UNIT_X,-.002*(T.y-w.y)),p.rotate(C.Cartesian3.UNIT_Y,-.002*(T.x-w.x))}},C.ScreenSpaceEventType.RIGHT_DRAG),i.setInputAction(()=>{},C.ScreenSpaceEventType.RIGHT_DOWN),i.setInputAction(()=>{},C.ScreenSpaceEventType.RIGHT_UP))}function v(S,C,_){const T=b(S,C,_);if(!T){l.value=en;return}const w=_.Cartographic.fromCartesian(T);if(!w||!Number.isFinite(w.longitude)||!Number.isFinite(w.latitude)){l.value=en;return}const r=_.Math.toDegrees(w.longitude).toFixed(6),d=_.Math.toDegrees(w.latitude).toFixed(6),p=(Number.isFinite(w.height)?w.height:0).toFixed(2);l.value=`经度: ${r}, 纬度: ${d}, 海拔: ${p}米`,typeof n=="function"&&n({lng:Number(r),lat:Number(d),height:Number(p)})}function b(S,C,_){if(!S)return null;const T=C.scene,w=M(S,T,_);if(w)return w;const r=C.camera.getPickRay(S);if(r){const p=T.globe.pick(r,T);if(D(p))return p}const d=C.camera.pickEllipsoid(S,T.globe.ellipsoid);return D(d)?d:null}function M(S,C,_){if(!C.pickPositionSupported||typeof C.pickPosition!="function")return null;const T=typeof C.pick=="function"?C.pick(S):null;if(!_.defined(T))return null;const w=C.pickPosition(S);return D(w)?w:null}function D(S){return!!S&&Number.isFinite(S.x)&&Number.isFinite(S.y)&&Number.isFinite(S.z)}function h(){o&&u&&(u.removeEventListener("mouseleave",o),o=null),u=null,i&&(i.destroy(),i=null)}return{coordinateDisplay:l,setupInteractions:y,cleanupInteractions:h}}function Nn(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function is(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function yt(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function Ft(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function On(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:i,Resource:u,HeightmapTerrainData:o,Rectangle:l,TileAvailability:y,CustomHeightmapTerrainProvider:v}=e;function b(S,C,_,T,w,r){const d=S.tileXYToRectangle(_,T,w);return t(l.intersection(d,C,r))}function M(S){const C=[[[0,0,1,0]]],_=new y(S.tilingScheme,19);for(let T=0;T<C.length;T++){const w=C[T];for(let r=0;r<w.length;r++){const d=w[r];_.addAvailableTileRange(T,d[0],d[1],d[2],d[3])}}return _}function D(S,C,_,T,w){const r=new o({buffer:S._transformBuffer(C),width:S._width,height:S._height,childTileMask:S._getChildTileMask(T,w,_),structure:S._terrainDataStructure});return r._skirtHeight=6e3,S.availability.addAvailableTileRange(_,T,w,T,w),r}class h extends v{constructor(C={}){if(super({...C,ellipsoid:i.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(C.url))throw new n("options.url is required.");this._dataType=C.dataType??"int16",this._url=C.url,this._subdomains=C.subdomains,this._token=C.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=M(this)}get availability(){return this._availability}requestTileGeometry(C,_,T,w){if(T>=this._bottomLevel)return Promise.reject(new Error(`Level ${T} is outside supported range.`));if(T<this._topLevel)return Promise.resolve(new o({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(C,_,T),structure:this._terrainDataStructure}));let r=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const p=this._subdomains[(C+_)%this._subdomains.length];r=r.replace("{s}",p)}r=r.replace("{token}",this._token).replace("{x}",C).replace("{y}",_).replace("{z}",T+1);const d=u.fetchArrayBuffer({url:r,request:w});if(d)return d.then(p=>p.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):ia.inflate(p)).then(p=>D(this,p,T,C,_))}getTileDataAvailable(C,_,T){return T<this._bottomLevel}_transformBuffer(C){let _=2;this._dataType==="float"&&(_=4);const T=C;if(T.length!==22500*_)return null;const w=new ArrayBuffer(_),r=new DataView(w),d=this._width,p=this._height,m=new Uint8Array(d*p*4);for(let s=0;s<p;s++)for(let c=0;c<d;c++){const a=Math.floor(149*s/(p-1)),f=Math.floor(149*c/(d-1)),x=_*(150*a+f);let L;_===4?(r.setInt8(0,T[x]),r.setInt8(1,T[x+1]),r.setInt8(2,T[x+2]),r.setInt8(3,T[x+3]),L=r.getFloat32(0,!0)):L=T[x]+256*T[x+1],(L>1e4||L<-2e3)&&(L=0);const R=(L+1e3)/.001,z=4*(s*d+c);m[z]=R/65536,m[z+1]=(R-256*m[z]*256)/256,m[z+2]=R-256*m[z]*256-256*m[z+1],m[z+3]=255}return m}_getVHeightBuffer(){let C=this._vHeightBuffer;if(!t(C)){C=new Uint8ClampedArray(this._width*this._height*4);for(let _=0;_<this._width*this._height*4;)C[_++]=15,C[_++]=66,C[_++]=64,C[_++]=255;this._vHeightBuffer=C}return C}_getChildTileMask(C,_,T){const w=new l,r=this._tilingScheme,d=this._rectangles,p=r.tileXYToRectangle(C,_,T);let m=0;for(let s=0;s<d.length&&m!==15;s++){const c=d[s];if(c.maxLevel<=T)continue;const a=c.rectangle,f=l.intersection(a,p,w);t(f)&&(b(r,a,2*C,2*_,T+1,w)&&(m|=4),b(r,a,2*C+1,2*_,T+1,w)&&(m|=8),b(r,a,2*C,2*_+1,T+1,w)&&(m|=1),b(r,a,2*C+1,2*_+1,T+1,w)&&(m|=2))}return m}}return h}function as(e){if(!e)throw new Error("Cesium is required to create ArcGISTerrainProvider.");const{TileAvailability:t}=e;class n{constructor(o){this._inner=o,this._availability=null,this._initAvailability()}_initAvailability(){const o=this._inner.tilingScheme;if(!o)return;const l=this._inner.maximumLevel??15;this._availability=new t(o,l);for(let y=0;y<=l;y++){const v=1<<y;this._availability.addAvailableTileRange(y,0,0,v-1,v-1)}}get availability(){return this._availability||this._initAvailability(),this._availability}get tilingScheme(){return this._inner.tilingScheme}get maximumLevel(){return this._inner.maximumLevel}get requestWaterMask(){return this._inner.requestWaterMask}get requestVertexNormals(){return this._inner.requestVertexNormals}get ready(){return this._inner.ready}get readyPromise(){return this._inner.readyPromise}get errorEvent(){return this._inner.errorEvent}get credit(){return this._inner.credit}getTileDataAvailable(o,l,y){const v=this._inner.maximumLevel??15;return y<=v}requestTileGeometry(o,l,y,v){return this._inner.requestTileGeometry(o,l,y,v)}getLevelMaximumGeometricError(o){return this._inner.getLevelMaximumGeometricError(o)}loadTileDataAvailability(o,l,y){if(typeof this._inner.loadTileDataAvailability=="function")return this._inner.loadTileDataAvailability(o,l,y)}}async function i(u){const o=await e.ArcGISTiledElevationTerrainProvider.fromUrl(u);return new n(o)}return n.fromUrl=i,n}function rs({getViewer:e,getCesium:t,activeBasemap:n,applyBasemap:i,resolvePresetLayerIds:u,message:o,validationTimeoutMs:l=5e3,circuitBreakThreshold:y=3}){const v=new Map,b=new Set,M={value:!1};let D=null,h=[],S=[];function C(m,s={}){return m?b.has(m)&&!s.forceReload?(M.value=!0,!1):i(m,s)?(_(m),!0):(T(m),!1):!1}function _(m){var R,z;r();const s=e==null?void 0:e();if(!(s!=null&&s.imageryLayers))return;const c=u(m),a=[];for(let G=0;G<s.imageryLayers.length;G++){const P=s.imageryLayers.get(G);(R=P==null?void 0:P.imageryProvider)!=null&&R._descriptorId&&c.includes(P.imageryProvider._descriptorId)&&a.push(P)}if(!a.length)return;h=a;let f=!1;const x=()=>{f=!0,r(),v.delete(m),b.has(m)&&(b.delete(m),M.value=b.size>0)},L=G=>{f||(T(m),r())};for(const G of h){const P=G.imageryProvider;if(P!=null&&P.errorEvent&&(P.errorEvent.addEventListener(L),S.push(()=>P.errorEvent.removeEventListener(L))),P!=null&&P.ready){x();return}(z=P==null?void 0:P.readyPromise)!=null&&z.then&&P.readyPromise.then(x).catch(L)}D=setTimeout(()=>{f||T(m)},l)}function T(m){const s=(v.get(m)||0)+1;v.set(m,s),s>=y&&(b.add(m),M.value=!0,w(m))}function w(m){var c,a,f,x,L;const s="custom_China_Blender_preset_2";if(m===s){const R="imagery_tianditu_preset";b.has(R)?(a=o==null?void 0:o.error)==null||a.call(o,"所有底图均加载失败，请检查网络",{closable:!0}):((c=o==null?void 0:o.warning)==null||c.call(o,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=R);return}if(!b.has(s))(f=o==null?void 0:o.warning)==null||f.call(o,"底图加载失败，已降级到默认底图",{closable:!0}),n.value=s;else{const R="imagery_tianditu_preset";b.has(R)?(L=o==null?void 0:o.error)==null||L.call(o,"所有底图均加载失败，请检查网络",{closable:!0}):((x=o==null?void 0:o.warning)==null||x.call(o,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=R)}}function r(){D&&(clearTimeout(D),D=null);for(const m of S)try{m()}catch{}S=[],h=[]}function d(){v.clear(),b.clear(),M.value=!1,r()}function p(){r(),v.clear(),b.clear(),M.value=!1}return{switchBasemap:C,resetCircuitBreaker:d,isCircuitOpen:M,cleanup:p}}const Tt=["0","1","2","3","4","5","6","7"],Mt="https://t{s}.tianditu.gov.cn/",os="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",ss=96188,Ct="custom-xyz",Hn="webgis_custom_basemap_url",ls="cesium_tdt_label_layer_visible",Bn="cesium_tdt_boundary_layer_visible",Un="cesium_tdt_text_label_layer_visible",Wn="cesium_osm_buildings_visible",Gn="cesium_google_photorealistic_3d_tiles_visible";function cs(){return aa.map(e=>({...e,description:us(e.value),source:"preset"}))}function us(e){const t=Pt(e);if(!t.length)return"复合底图";const n=t.map(i=>{const u=hn(i);return u?u.name:i});return n.slice(0,3).join(" + ")+(n.length>3?" ...":"")}const $n=cs(),qn=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function ds({getViewer:e,getCesium:t,message:n,backendBaseUrl:i,tiandituToken:u,cesiumIonToken:o}){let l=null,y=null,v=null,b=null,M=0,D=null,h=null,S=0,C=0,_=[];const T=()=>jn(u),w=()=>jn(o),r=[],d=Y([]),p=new Map,m=new Map,s=new Map,c=new Map,a="cesium_custom_xyz_basemap_url",f=Y(An),x=Y("tianditu"),L=Y(Nn(Hn,"")||Nn(a,"")),R=yt(ls,!1),z=Y(yt(Bn,R??!1)),G=Y(yt(Un,R??!1)),P=Y(yt(Wn,!1)),V=Y(yt(Gn,!1)),Z=De(()=>[...$n.map(g=>g.value!=="custom"?g:{...g,description:L.value?L.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!L.value}),...d.value]),oe=rs({getViewer:e,getCesium:t,activeBasemap:f,applyBasemap:fe,resolvePresetLayerIds:Pt,message:n}),le=De(()=>oe.isCircuitOpen.value),me=De(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:z.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:G.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:P.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:V.value}]);Te(f,g=>{!(e!=null&&e())||!(t!=null&&t())||fe(g)}),Te(L,g=>{is(Hn,g)}),Te(x,async g=>{!(e!=null&&e())||!(t!=null&&t())||await Ee(g)}),Te(z,g=>{Ft(Bn,g),Ie()}),Te(G,g=>{Ft(Un,g),Ie()}),Te(P,g=>{Ft(Wn,g),J()}),Te(V,g=>{Ft(Gn,g),Q()});function he(){const g=t==null?void 0:t();if(!g)return[];p.clear(),m.clear();const E=$n.map(X=>{const O=new g.ProviderViewModel({name:X.label,tooltip:ps(X),category:"项目底图",iconUrl:Yn(gs(X.value),vs(X.value,X.label)),creationFunction:()=>W(X.value)});return p.set(X.value,O),m.set(O,X.value),O}),q=U();return d.value=q.map((X,O)=>{const j=String((X==null?void 0:X.name)||`官方底图 ${O+1}`).trim(),ee=bs(j,O);return p.set(ee,X),m.set(X,ee),{value:ee,label:`官方 · ${j}`,description:String((X==null?void 0:X.tooltip)||j),source:"official"}}),[...E,...q]}function Se(){const g=t==null?void 0:t();return g?(s.clear(),c.clear(),qn.map(E=>{const q=new g.ProviderViewModel({name:E.label,tooltip:E.description||E.label,category:"项目地形",iconUrl:Yn(hs(E.value),fs(E.value)),creationFunction:()=>Ze(E.value)});return s.set(E.value,q),c.set(q,E.value),q})):[]}function Ce(g=[]){return p.get(f.value)||g[0]}function Le(g=[]){return s.get(x.value)||g[0]}function U(){const g=t==null?void 0:t();if(typeof(g==null?void 0:g.createDefaultImageryProviderViewModels)!="function")return[];try{return g.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function W(g){return Pt(g).length>0?H(g):g==="google"?Oe():g===Ct?ge():pe()}function H(g){const E=t==null?void 0:t();if(!E)return[];const q=Pt(g);if(!q.length)return pe();const X=T(),O=L.value;return ba(E,q,{tiandituTk:X,customUrl:O})}function pe(){const g=t==null?void 0:t();return[new g.UrlTemplateImageryProvider({url:`${Mt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${T()}`,subdomains:Tt,tilingScheme:new g.WebMercatorTilingScheme,maximumLevel:18})]}function Oe(){const g=t==null?void 0:t();return[new g.UrlTemplateImageryProvider({url:`${i}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new g.WebMercatorTilingScheme,maximumLevel:20})]}function ge(){const g=t==null?void 0:t(),E=Xn(L.value);return E.valid?[new g.UrlTemplateImageryProvider({url:E.url,subdomains:E.subdomains,tilingScheme:new g.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(E.message,{closable:!0}),pe())}function Ae(){const g=t==null?void 0:t();return new g.UrlTemplateImageryProvider({url:`${Mt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${T()}`,subdomains:Tt,tilingScheme:new g.WebMercatorTilingScheme,maximumLevel:10})}function Be(){const g=t==null?void 0:t();return new g.UrlTemplateImageryProvider({url:`${Mt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${T()}`,subdomains:Tt,tilingScheme:new g.WebMercatorTilingScheme,maximumLevel:18})}function We(){var ue,Me,ke,Ke,ze;Re();const g=t==null?void 0:t(),E=(Me=(ue=e==null?void 0:e())==null?void 0:ue.baseLayerPicker)==null?void 0:Me.viewModel;if(!E||!((ke=g==null?void 0:g.knockout)!=null&&ke.getObservable))return;const q=g.knockout.getObservable(E,"selectedImagery"),X=g.knockout.getObservable(E,"selectedTerrain"),O=[],j=(Ke=q==null?void 0:q.subscribe)==null?void 0:Ke.call(q,st=>{const Ve=m.get(st);Ve&&(f.value!==Ve&&(f.value=Ve),je())}),ee=(ze=X==null?void 0:X.subscribe)==null?void 0:ze.call(X,st=>{const Ve=c.get(st);Ve&&(x.value!==Ve&&(x.value=Ve),we(Ve))});j&&O.push(j),ee&&O.push(ee),_=O}function Re(){_.forEach(g=>{var E;return(E=g==null?void 0:g.dispose)==null?void 0:E.call(g)}),_=[]}function Ue(){return Ie(),J(),Q(),!0}function Ye(){const g=e==null?void 0:e();if(g!=null&&g.imageryLayers)for(;r.length;){const E=r.pop();try{g.imageryLayers.remove(E,!0)}catch{}}}function je(){var g,E,q;Ie(),J(),Q(),(q=(E=(g=e==null?void 0:e())==null?void 0:g.scene)==null?void 0:E.requestRender)==null||q.call(E)}function Ie(){var E,q;const g=e==null?void 0:e();!g||!(t!=null&&t())||(z.value?Ge():N(),G.value?$e():k(),(q=(E=g.scene).requestRender)==null||q.call(E))}function Ge(){var E,q,X,O;const g=e==null?void 0:e();if(!(g!=null&&g.imageryLayers)||l)return l&&((q=(E=g==null?void 0:g.imageryLayers)==null?void 0:E.raiseToTop)==null||q.call(E,l)),l;try{return l=g.imageryLayers.addImageryProvider(Ae()),(O=(X=g.imageryLayers).raiseToTop)==null||O.call(X,l),l}catch(j){return n.error("天地图国界线图层加载失败",j),null}}function $e(){var E,q,X,O;const g=e==null?void 0:e();if(!(g!=null&&g.imageryLayers)||y)return y&&((q=(E=g==null?void 0:g.imageryLayers)==null?void 0:E.raiseToTop)==null||q.call(E,y)),y;try{return y=g.imageryLayers.addImageryProvider(Be()),(O=(X=g.imageryLayers).raiseToTop)==null||O.call(X,y),y}catch(j){return n.error("天地图文字标注图层加载失败",j),null}}function N(){const g=e==null?void 0:e();if(!(!l||!(g!=null&&g.imageryLayers))){try{g.imageryLayers.remove(l,!0)}catch{}l=null}}function k(){const g=e==null?void 0:e();if(!(!y||!(g!=null&&g.imageryLayers))){try{g.imageryLayers.remove(y,!0)}catch{}y=null}}async function J(){var E,q,X;const g=e==null?void 0:e();!((E=g==null?void 0:g.scene)!=null&&E.primitives)||!(t!=null&&t())||(P.value?await K():ie(),(X=(q=g.scene).requestRender)==null||X.call(q))}async function Q(){var E,q,X;const g=e==null?void 0:e();!((E=g==null?void 0:g.scene)!=null&&E.primitives)||!(t!=null&&t())||(V.value?await re():B(),(X=(q=g.scene).requestRender)==null||X.call(q))}async function re(){var X,O,j;const g=e==null?void 0:e(),E=t==null?void 0:t();if(!((X=g==null?void 0:g.scene)!=null&&X.primitives))return null;if(D)return g.scene.globe.show=!1,D;if(h)return h;if(typeof(E==null?void 0:E.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),V.value=!1,null;const q=++S;Ut(E,w()),h=E.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const ee=await h;return q!==S||!V.value?(Vn(ee),null):(D=g.scene.primitives.add(ee),g.scene.globe.show=!1,g.scene.skyAtmosphere.show=!0,(j=(O=g.scene).requestRender)==null||j.call(O),D)}catch(ee){return q!==S||(V.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",ee)),null}finally{q===S&&(h=null)}}function B(){var E,q,X;const g=e==null?void 0:e();if(S+=1,h=null,!D||!((E=g==null?void 0:g.scene)!=null&&E.primitives)){(q=g==null?void 0:g.scene)!=null&&q.globe&&(g.scene.globe.show=!0);return}try{g.scene.primitives.remove(D)}catch{}D=null,(X=g==null?void 0:g.scene)!=null&&X.globe&&(g.scene.globe.show=!0)}async function K(){var X,O,j,ee;const g=e==null?void 0:e(),E=t==null?void 0:t();if(!((X=g==null?void 0:g.scene)!=null&&X.primitives)||v)return v;if(b)return b;if(typeof((O=E==null?void 0:E.Cesium3DTileset)==null?void 0:O.fromIonAssetId)!="function"&&typeof(E==null?void 0:E.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),P.value=!1,null;const q=++M;Ut(E,w()),await ne(),b=ms(E,{maximumScreenSpaceError:8});try{const ue=await b;return q!==M||!P.value?(Vn(ue),null):(v=g.scene.primitives.add(ue),(ee=(j=g.scene).requestRender)==null||ee.call(j),v)}catch(ue){return q!==M||(P.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",ue)),null}finally{q===M&&(b=null)}}function ie(){var E,q,X;const g=e==null?void 0:e();if(M+=1,b=null,!(!v||!((E=g==null?void 0:g.scene)!=null&&E.primitives))){try{g.scene.primitives.remove(v)}catch{}v=null,(X=(q=g.scene).requestRender)==null||X.call(q)}}async function ne(){if(x.value==="cesiumWorld")return!0;x.value="cesiumWorld";const g=await Ee("cesiumWorld");return g||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),g}function fe(g,E={}){var j,ee,ue;const q=e==null?void 0:e();if(!q||!(t!=null&&t()))return!1;pa(),Ye();const X=(j=q.baseLayerPicker)==null?void 0:j.viewModel,O=p.get(g);if(X&&O){if(E.forceReload&&X.selectedImagery===O){const Me=p.get(An)||p.get("tianditu");Me&&Me!==O&&(X.selectedImagery=Me)}return X.selectedImagery!==O&&(X.selectedImagery=O),je(),!0}try{return W(g).forEach(ke=>{ke&&r.push(q.imageryLayers.addImageryProvider(ke))}),Ie(),(ue=(ee=q.scene).requestRender)==null||ue.call(ee),!0}catch(Me){return n.error("地图源切换失败",Me),!1}}function Pe(){return Ee(x.value)}async function Ee(g){var ue,Me,ke,Ke,ze,st,Ve,bt,At,_t,vn;const E=e==null?void 0:e(),q=t==null?void 0:t();if(!E||!q)return!1;const X=(ue=E.baseLayerPicker)==null?void 0:ue.viewModel,O=s.get(g);if(X&&O)return X.selectedTerrain!==O&&(X.selectedTerrain=O),we(g),(ke=(Me=E.scene).requestRender)==null||ke.call(Me),!0;const j=++C;if(g==="ellipsoid")return E.terrainProvider=new q.EllipsoidTerrainProvider,we(g),(ze=(Ke=E.scene).requestRender)==null||ze.call(Ke),!0;if(g==="cesiumWorld")try{const tt=await F();return j!==C?!1:(E.terrainProvider=tt,we(g),(Ve=(st=E.scene).requestRender)==null||Ve.call(st),!0)}catch(tt){return j!==C||(E.terrainProvider=new q.EllipsoidTerrainProvider,we("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",tt)),!1}if(g==="arcgisWorld")try{const tt=await I();return j!==C?!1:(E.terrainProvider=tt,we(g),(At=(bt=E.scene).requestRender)==null||At.call(bt),!0)}catch(tt){return j!==C||(E.terrainProvider=new q.EllipsoidTerrainProvider,we("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",tt)),!1}const ee=On(q);try{return E.terrainProvider=new ee({url:`${Mt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Tt,token:T()}),we(g),(vn=(_t=E.scene).requestRender)==null||vn.call(_t),!0}catch(tt){return E.terrainProvider=new q.EllipsoidTerrainProvider,we("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",tt),!1}}function we(g){var q;const E=e==null?void 0:e();(q=E==null?void 0:E.scene)!=null&&q.globe&&(E.scene.globe.depthTestAgainstTerrain=g!=="ellipsoid")}function Ze(g){const E=t==null?void 0:t();if(g==="ellipsoid")return new E.EllipsoidTerrainProvider;if(g==="cesiumWorld")return F().catch(X=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",X),$(g,"ellipsoid"),new E.EllipsoidTerrainProvider));if(g==="arcgisWorld")return I().catch(X=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",X),$(g,"ellipsoid"),new E.EllipsoidTerrainProvider));const q=On(E);try{return new q({url:`${Mt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Tt,token:T()})}catch(X){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",X),new E.EllipsoidTerrainProvider}}async function F(){var q,X;const g=t==null?void 0:t();Ut(g,w());const E={requestWaterMask:!1,requestVertexNormals:!0};if(typeof g.createWorldTerrainAsync=="function")return g.createWorldTerrainAsync(E);if(typeof g.createWorldTerrain=="function")return g.createWorldTerrain(E);if(typeof((q=g.CesiumTerrainProvider)==null?void 0:q.fromIonAssetId)=="function")return g.CesiumTerrainProvider.fromIonAssetId(1,E);if((X=g.IonResource)!=null&&X.fromAssetId&&g.CesiumTerrainProvider){const O=await g.IonResource.fromAssetId(1);return new g.CesiumTerrainProvider({url:O,...E})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function I(){var q;const g=t==null?void 0:t();if(typeof((q=g==null?void 0:g.ArcGISTiledElevationTerrainProvider)==null?void 0:q.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return as(g).fromUrl(os)}function $(g,E){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{x.value===g&&(x.value=E)},0)}function te({overlayId:g,value:E}){if(g==="tdt-boundaries"){z.value=!!E;return}if(g==="tdt-text-labels"){G.value=!!E;return}if(g==="cesium-osm-buildings"){P.value=!!E;return}g==="google-photorealistic-3d-tiles"&&(V.value=!!E)}function se({url:g}){const E=String(g||"").trim(),q=Xn(E);if(!q.valid){n.warning(q.message,{closable:!0});return}if(L.value=E,f.value===Ct){fe(Ct,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}f.value=Ct,n.success("已切换到自定义 XYZ 图源")}function ve(){Ye(),N(),k(),ie(),B(),Re()}return{activeBasemap:f,activeTerrain:x,customXyzBasemapUrl:L,basemapOptions:Z,terrainOptions:qn,overlayOptions:me,createImageryProviderViewModels:he,createTerrainProviderViewModels:Se,getSelectedImageryProviderViewModel:Ce,getSelectedTerrainProviderViewModel:Le,bindLayerPickerStateSync:We,addBaseImageryLayers:Ue,initCustomTerrain:Pe,applyBasemap:fe,applyTerrain:Ee,handleOverlayToggle:te,handleCustomBasemapSubmit:se,cleanupLayers:ve,basemapSwitcher:oe,basemapCircuitOpen:le,resetCircuitBreaker:oe.resetCircuitBreaker}}function hs(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function fs(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function jn(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Vn(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function ms(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const i=await e.Cesium3DTileset.fromIonAssetId(ss,t);return!i.style&&typeof e.Cesium3DTileStyle=="function"&&(i.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),i}return e.createOsmBuildingsAsync(t)}function ps(e){return e.value===Ct?`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`:e.description||e.label}function gs(e){const t=Pt(e);if(!t.length)return"#37d67a";const n=hn(t[0]);if(!n)return"#37d67a";const i=n.category;return i==="imagery"?"#5ea1ff":i==="vector"?"#37d67a":i==="terrain"?"#d0a449":i==="label"?"#a78bfa":i==="theme"?"#f59e0b":i==="custom"?"#f472b6":"#37d67a"}function vs(e,t){return String(t||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function Xn(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const i=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let u=[];return i?(u=ys(i[1],i[2]),n=n.replace(i[0],"{s}")):/\{s\}/i.test(n)&&(u=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:u}:xs(n)?{valid:!0,message:"",url:n,subdomains:u}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:u}}function ys(e,t){const n=String(e||"").charCodeAt(0),i=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(i))return[];const u=n<=i?1:-1,o=[];for(let l=n;u>0?l<=i:l>=i;l+=u)o.push(String.fromCharCode(l));return o}function xs(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function bs(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function Yn(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),i=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(i)}`}function _s({getViewer:e,getCesium:t,message:n}){function i(l){const y=e==null?void 0:e(),v=t==null?void 0:t();if(!y||!v)return;const b=typeof l=="number"?l:2;y.camera.flyTo({destination:v.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-v.Math.PI_OVER_TWO,roll:0},duration:b})}function u(){const l=e==null?void 0:e(),y=t==null?void 0:t();!l||!y||l.camera.flyTo({destination:y.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:y.Math.toRadians(0),pitch:y.Math.toRadians(-25),roll:0},duration:3})}async function o(){const l=e==null?void 0:e(),y=t==null?void 0:t();if(!(!l||!y))try{const v=await y.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");l.scene.primitives.add(v),l.flyTo(v,{duration:3,offset:new y.HeadingPitchRange(y.Math.toRadians(0),y.Math.toRadians(-25),v.boundingSphere.radius*2.5)})}catch(v){n.error(`加载模型失败: ${v}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:i,flyToEverest:u,loadCustomTileset:o}}const Ss="tileset.json";let Nt=null;async function Kn(){if(Nt)return Nt;const[{decompressBuffer:e},{parseShpPartsToGeoJSON:t}]=await Promise.all([Wt(()=>import("./decompressFile-DiMYlfaO.js").then(n=>n.f),__vite__mapDeps([4,5]),import.meta.url),Wt(()=>import("./shpParser-CTBiR54c.js").then(n=>n.s),__vite__mapDeps([6,5,7,2,3,8,9,10,11,12,13,14,15]),import.meta.url)]);return Nt={decompressBuffer:e,parseShpPartsToGeoJSON:t},Nt}function tn(e){const t=e.lastIndexOf(".");return t===-1?"":e.slice(t+1).toLowerCase()}function ht(e,t,n,i){if(!(!e||!t||!n))try{i==="3dtiles"&&n.boundingSphere?e.flyTo(n,{duration:2,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-30),n.boundingSphere.radius*2)}):n.entities&&n.entities.values.length>0&&e.flyTo(n,{duration:2})}catch{}}function gt(e){return URL.createObjectURL(e)}function Je(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function ws({getViewer:e,getCesium:t,message:n}){const i=Y([]),u=Y(null);let o=0;async function l(s){const c=t(),a=e();if(!c||!a)throw new Error("Cesium 未初始化");const f=gt(s);try{const x=await c.GeoJsonDataSource.load(f,{stroke:c.Color.fromCssColorString("#3ddc84"),fill:c.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:c.Color.fromCssColorString("#3ddc84"),markerSize:24}),L=`geojson_${++o}`;x.name=s.name,await a.dataSources.add(x),ht(a,c,x,"geojson");const R={id:L,name:s.name,type:"geojson",entity:x,blobUrl:f};return i.value=[...i.value,R],n.success(`GeoJSON "${s.name}" 加载成功`),R}catch(x){throw Je(f),x}}async function y(s){const c=t(),a=e();if(!c||!a)throw new Error("Cesium 未初始化");const f=gt(s);try{const x=await c.KmlDataSource.load(f,{camera:a.scene.camera,canvas:a.scene.canvas}),L=`kml_${++o}`;x.name=s.name,await a.dataSources.add(x),ht(a,c,x,"kml");const R={id:L,name:s.name,type:"kml",entity:x,blobUrl:f};return i.value=[...i.value,R],n.success(`KML "${s.name}" 加载成功`),R}catch(x){throw Je(f),x}}async function v(s){const c=t(),a=e();if(!c||!a)throw new Error("Cesium 未初始化");const f=gt(s);try{const x=await c.KmlDataSource.load(f,{camera:a.scene.camera,canvas:a.scene.canvas}),L=`kmz_${++o}`;x.name=s.name,await a.dataSources.add(x),ht(a,c,x,"kmz");const R={id:L,name:s.name,type:"kmz",entity:x,blobUrl:f};return i.value=[...i.value,R],n.success(`KMZ "${s.name}" 加载成功`),R}catch{return Je(f),await b(s)}}async function b(s){const c=t(),a=e(),f=await s.arrayBuffer(),{decompressBuffer:x}=await Kn(),R=(await x(f,s.name)).find(V=>{var Z;return V.ext==="kml"||((Z=V.name)==null?void 0:Z.toLowerCase().endsWith(".kml"))});if(!R)throw new Error("KMZ 压缩包中未找到 KML 文件");let z;typeof R.content=="string"?z=R.content:R.content instanceof ArrayBuffer||R.content instanceof Uint8Array?z=fa(R.content):z=String(R.content||"");const G=new Blob([z],{type:"application/vnd.google-earth.kml+xml"}),P=URL.createObjectURL(G);try{const V=await c.KmlDataSource.load(P,{camera:a.scene.camera,canvas:a.scene.canvas}),Z=`kmz_${++o}`;V.name=s.name,await a.dataSources.add(V),ht(a,c,V,"kmz");const oe={id:Z,name:s.name,type:"kmz",entity:V};return i.value=[...i.value,oe],n.success(`KMZ "${s.name}" 加载成功（手动解压）`),oe}finally{URL.revokeObjectURL(P)}}async function M(s,c=[]){const a=t(),f=e();if(!a||!f)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:x}=await Kn(),L={shp:await s.arrayBuffer()};for(const oe of c){const le=tn(oe.name);le==="dbf"&&(L.dbf=await oe.arrayBuffer()),le==="shx"&&(L.shx=await oe.arrayBuffer()),le==="prj"&&(L.prj=await oe.arrayBuffer()),le==="cpg"&&(L.cpg=await oe.arrayBuffer())}const R=await x(L),z=Array.isArray(R)?R:[R],G=z.reduce((oe,le)=>{var me;return oe+(((me=le==null?void 0:le.features)==null?void 0:me.length)||0)},0),P=z.length===1?z[0]:{type:"FeatureCollection",features:z.flatMap(oe=>(oe==null?void 0:oe.features)||[])},V=new Blob([JSON.stringify(P)],{type:"application/geo+json"}),Z=URL.createObjectURL(V);try{const oe=await a.GeoJsonDataSource.load(Z,{stroke:a.Color.fromCssColorString("#ffcc00"),fill:a.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:a.Color.fromCssColorString("#ffcc00"),markerSize:20}),le=`shp_${++o}`;oe.name=s.name,await f.dataSources.add(oe),ht(f,a,oe,"shp");const me={id:le,name:s.name,type:"shp",entity:oe};return i.value=[...i.value,me],n.success(`Shapefile "${s.name}" 加载成功 (${G} 个要素)`),URL.revokeObjectURL(Z),me}catch(oe){throw URL.revokeObjectURL(Z),oe}}async function D(s){const c=t(),a=e();if(!c||!a)throw new Error("Cesium 未初始化");const f=gt(s);let x=null;try{x=await T(s)}catch{}if(x)try{const L=await r(c,a,f,s.name,x),z={id:`gltf_${++o}`,name:s.name,type:"gltf",entity:L,blobUrl:f};return i.value=[...i.value,z],n.success(`3D 模型 "${s.name}" 加载成功 (${x.lng.toFixed(4)}, ${x.lat.toFixed(4)}, ${x.height.toFixed(1)}m)`),z}catch(L){throw Je(f),L}return u.value&&Je(u.value.blobUrl),u.value={file:s,blobUrl:f,name:s.name},{needsCoordInput:!0,file:s}}async function h(s){const c=t(),a=e();if(!u.value)throw new Error("没有等待确认的模型文件");const{blobUrl:f,name:x}=u.value;try{const L=await r(c,a,f,x,s),z={id:`gltf_${++o}`,name:x,type:"gltf",entity:L,blobUrl:f};i.value=[...i.value,z],n.success(`3D 模型 "${x}" 加载成功 (${s.lng.toFixed(4)}, ${s.lat.toFixed(4)}, ${s.height.toFixed(1)}m)`);const G=c.Cartesian3.fromDegrees(s.lng,s.lat,s.height+500);return a.camera.flyTo({destination:G,orientation:{heading:c.Math.toRadians(0),pitch:c.Math.toRadians(-30),roll:0},duration:2}),u.value=null,z}catch(L){throw Je(f),u.value=null,L}}function S(){u.value&&(Je(u.value.blobUrl),u.value=null)}async function C(s){const c=t(),a=e();if(!c||!a)throw new Error("Cesium 未初始化");const f=gt(s);try{const x=await c.CzmlDataSource.load(f),L=`czml_${++o}`;x.name=s.name,await a.dataSources.add(x),ht(a,c,x,"czml");const R={id:L,name:s.name,type:"czml",entity:x,blobUrl:f};return i.value=[...i.value,R],n.success(`CZML "${s.name}" 加载成功`),R}catch(x){throw Je(f),x}}async function _(s){const c=t(),a=e();if(!c||!a)throw new Error("Cesium 未初始化");const f=gt(s);try{const x=await c.Cesium3DTileset.fromUrl(f),L=`tileset_${++o}`;a.scene.primitives.add(x);const R={id:L,name:s.name,type:"3dtiles",entity:x,blobUrl:f};return i.value=[...i.value,R],ht(a,c,x,"3dtiles"),n.success(`3D Tiles "${s.name}" 加载成功`),R}catch(x){throw Je(f),x}}async function T(s){var x,L,R,z,G;const c=tn(s.name);let a;if(c==="gltf"){const P=await s.text();a=JSON.parse(P)}else{const P=await s.arrayBuffer();a=w(P)}if(!a)return null;if((x=a.extensionsUsed)!=null&&x.includes("CESIUM_RTC")&&((R=(L=a.extensions)==null?void 0:L.CESIUM_RTC)!=null&&R.center)){const P=a.extensions.CESIUM_RTC.center;if(P.length>=3){const V=t();if(V){const Z=new V.Cartesian3(P[0],P[1],P[2]),oe=V.Cartographic.fromCartesian(Z);return{lng:V.Math.toDegrees(oe.longitude),lat:V.Math.toDegrees(oe.latitude),height:oe.height}}}}const f=(z=a.asset)==null?void 0:z.extras;if(f){const P=f.longitude??f.lng,V=f.latitude??f.lat,Z=f.height??f.altitude??f.alt??0;if(P!=null&&V!=null)return{lng:Number(P),lat:Number(V),height:Number(Z)}}if(((G=a.nodes)==null?void 0:G.length)>0&&a.nodes[0].matrix){const P=a.nodes[0].matrix;if(P.length>=16){const V=P[12],Z=P[13],oe=P[14];if(Math.abs(V)>1e5||Math.abs(Z)>1e5){const le=t();if(le)try{const me=new le.Cartesian3(V,Z,oe),he=le.Cartographic.fromCartesian(me);return{lng:le.Math.toDegrees(he.longitude),lat:le.Math.toDegrees(he.latitude),height:he.height}}catch{}}}}return null}function w(s){if(s.byteLength<20)return null;const c=new DataView(s);if(c.getUint32(0,!0)!==1179937895)return null;const f=c.getUint32(12,!0);if(c.getUint32(16,!0)!==1313821514)return null;const L=new Uint8Array(s,20,f),R=new TextDecoder().decode(L);try{return JSON.parse(R)}catch{return null}}async function r(s,c,a,f,x){const{lng:L,lat:R,height:z}=x,G=s.Cartesian3.fromDegrees(L,R,z),P=new s.HeadingPitchRoll(0,0,0),V=s.Transforms.localFrameToFixedFrameGenerator("north","west"),Z=await s.Model.fromGltfAsync({url:a,modelMatrix:s.Transforms.headingPitchRollToFixedFrame(G,P,s.Ellipsoid.WGS84,V),scale:1,show:!0});return Z.name=f,c.scene.primitives.add(Z),Z}async function d(s){const c=e(),a=t();if(!c||!a)throw n.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const f=tn(s.name);try{switch(f){case"geojson":case"json":return s.name.toLowerCase().includes(Ss)?await _(s):await l(s);case"kml":return await y(s);case"kmz":return await v(s);case"shp":return await M(s);case"glb":case"gltf":return await D(s);case"czml":return await C(s);default:throw n.error(`不支持的文件格式: .${f}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${f}`)}}catch(x){throw n.error(`加载 "${s.name}" 失败: ${x.message||x}`),x}}function p(s){const c=i.value.find(f=>f.id===s);if(!c)return;const a=e();if(a){try{c.type==="3dtiles"?a.scene.primitives.remove(c.entity):a.dataSources.remove(c.entity,!0)}catch{}c.blobUrl&&Je(c.blobUrl),i.value=i.value.filter(f=>f.id!==s),n.info(`已移除 "${c.name}"`)}}function m(){var a,f,x,L,R;const s=e();if(!s){i.value=[];return}for(const z of i.value){try{z.type==="3dtiles"?s.scene.primitives.remove(z.entity):s.dataSources.remove(z.entity,!0)}catch{}z.blobUrl&&Je(z.blobUrl)}if(Array.isArray((a=s.dataSources)==null?void 0:a.dataSources)){const z=s.dataSources.dataSources.slice();for(const G of z)if(G&&!G.isBaseLayerPickerDataSource)try{s.dataSources.remove(G,!0)}catch{}}const c=t();if(c&&Array.isArray((x=(f=s.scene)==null?void 0:f.primitives)==null?void 0:x.primitives)){const z=s.scene.primitives.primitives.slice();for(const G of z)if(!(!G||!(G instanceof c.Cesium3DTileset||G instanceof c.Model||G.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(G.name||"")))))try{s.scene.primitives.remove(G)}catch{}}i.value=[],S();try{(R=(L=s.scene).requestRender)==null||R.call(L)}catch{}n.info("已清除所有导入数据")}return{loadDataFile:d,loadedDataSources:i,removeDataSource:p,clearAllDataSources:m,pendingGltfFile:u,loadGltfWithUserCoords:h,cancelPendingGltf:S}}const Ts="cesium_tool_panel_open";function Ms({fluidPanelRef:e,sceneActions:t={},wind:n={},modelManager:i=null,cameraEnhanced:u=null,heightSampler:o=null,playerController:l=null,panelStorageKey:y=Ts}={}){const v=Y(yt(y,!0)),b=Y({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),M=Y({enableLighting:!0,showGroundAtmosphere:!0,dynamicAtmosphereLighting:!0,dynamicAtmosphereLightingFromSun:!0,atmosphereLightIntensity:5.5,atmosphereHueShift:-.015,atmosphereSaturationShift:.08,atmosphereBrightnessShift:.02,lightingFadeInDistance:0,lightingFadeOutDistance:Number.MAX_SAFE_INTEGER,nightFadeInDistance:0,nightFadeOutDistance:Number.MAX_SAFE_INTEGER,fogEnabled:!1,fogDensity:12e-5,fogMinimumBrightness:.035,sunShow:!0,moonShow:!0,skyBoxShow:!0}),D=Y({dayNightEnabled:!1,nightFactor:0,moonLightEnabled:!1,moonLightIntensity:.18,ambientIntensity:.08,starsEnabled:!1,starsIntensity:1}),h=Y({cloudsEnabled:!1,cloudCoverage:.3,cloudSpeed:.001,cloudBottom:1500,cloudTop:2150,cloudQuality:"medium",cloudWindDirection:90,cloudScattering:1,cloudAbsorption:0,cloudAnisotropy1:.7,cloudAnisotropy2:-.2,cloudAnisotropyMix:.5,cloudSkyLight:1,cloudGroundBounce:1,cloudPowder:.8,cloudDensityScale:1,cloudShapeAmount:1,cloudDetailAmount:.5,cloudTurbulence:350,cloudHazeDensity:3e-5,cloudHazeExponent:.001}),S=Y({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null,floodSpeed:5}),C=Y({speed:300,flySpeed:55e3,gravity:-2400,jumpHeight:600,sensitivity:5,acceleration:30,deceleration:30}),_=Y({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null,floodSimActive:!1}),T=Y(!1),w=Y({elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2}),r=De(()=>{var c,a,f,x,L,R,z,G,P,V,Z,oe,le,me,he,Se,Ce,Le,U,W,H,pe;return[{id:"scene",title:"场景导航",description:"相机飞行和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"atmosphere",title:"大气·光照·天空",description:"Cesium 原生光照 + Tellux 增强大气 + 高级后效（全部可选）",status:b.value.atmosphere||b.value.fog||b.value.hbao?"部分启用":"仅晨昏半球",statusTone:b.value.atmosphere?"success":"neutral",controls:[...Is(M.value),{id:"fog",label:"高度雾",type:"toggle",value:b.value.fog,tooltip:"基于高度的指数雾效"},{id:"hbao",label:"微阴影",type:"toggle",value:b.value.hbao,tooltip:"环境光遮蔽（HBAO）"},{id:"tiltShift",label:"移轴",type:"toggle",value:b.value.tiltShift,tooltip:"移轴模糊后处理"},{id:"atmosphere",label:"大气效果",type:"toggle",value:b.value.atmosphere,tooltip:"启用 Tellux 大气渲染（日夜过渡、月光、星空）"},...Es(D.value,!b.value.atmosphere)]},{id:"cloud",title:"体积云",description:"PostProcessStage Ray Marching 体积云渲染",status:h.value.cloudsEnabled?h.value.cloudQuality??"medium":"未启用",statusTone:h.value.cloudsEnabled?"success":"neutral",controls:Rs(h.value,!h.value.cloudsEnabled)},{id:"tools",title:"空间工具",description:"模型加载、增强相机、高度采样（Tellux 移植）",status:(((c=i==null?void 0:i.modelCount)==null?void 0:c.value)>0?"模型":"")||(((a=u==null?void 0:u.flightState)==null?void 0:a.value)==="flying"?"飞行中":"就绪"),statusTone:((f=i==null?void 0:i.modelCount)==null?void 0:f.value)>0?"success":"neutral",controls:[{id:"modelManagerEnabled",label:"模型管理",type:"toggle",value:!1,tooltip:"启用后可加载 glTF/GLB 模型到地理坐标位置"},{id:"cameraEnhancedEnabled",label:"增强相机",type:"toggle",value:!1,tooltip:"自定义缓动函数、角度插值和弹簧物理"},{id:"heightSamplerEnabled",label:"高度采样",type:"toggle",value:!1,tooltip:"地形高度查询、批量异步采样、屏幕坐标拾取"}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(x=n.wind2D)!=null&&x.value?"已加载":"未加载",statusTone:(L=n.wind2D)!=null&&L.value?"success":"neutral",actions:[{id:"load",label:(R=n.wind2D)!=null&&R.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((z=n.wind2D)!=null&&z.value)}],controls:Ds((G=n.windParams)==null?void 0:G.value,!!((P=n.wind2D)!=null&&P.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:_.value.isPicking?"等待选点":_.value.hasFluid?"已创建":"未创建",statusTone:_.value.isPicking?"warning":_.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:_.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:_.value.isPicking},{id:"floodSim",label:_.value.floodSimActive?"停止洪水":"洪水模拟",variant:_.value.floodSimActive?"danger":"default",active:_.value.floodSimActive,disabled:!Ls(_.value)},{id:"clear",label:"清除",variant:"danger",disabled:!_.value.hasFluid&&!_.value.isPicking}],controls:Fs(S.value,_.value)},{id:"shallowWater",title:"热带浅水",description:"Three.js 热带浅水场景（焦散/折射/物理吸色/体积云/闪电）",status:T.value?"已启用":"未启用",statusTone:T.value?"success":"neutral",actions:[{id:"toggle",label:T.value?"关闭":"启用",variant:T.value?"danger":"primary"}],controls:ks(w.value,!T.value)},{id:"player",title:"人物漫游",description:"第一/第三人称视角 + WASD 移动 + 碰撞检测 + 飞行模式",status:(V=l==null?void 0:l.isActive)!=null&&V.value?(Z=l.isFirstPerson)!=null&&Z.value?"第一人称":"第三人称":"未启动",statusTone:(oe=l==null?void 0:l.isActive)!=null&&oe.value?"success":"neutral",actions:[{id:"toggle",label:(le=l==null?void 0:l.isActive)!=null&&le.value?"停止漫游":"启动漫游",variant:(me=l==null?void 0:l.isActive)!=null&&me.value?"danger":"primary"},{id:"changeView",label:"切换视角",disabled:!((he=l==null?void 0:l.isActive)!=null&&he.value)}],controls:[{id:"speed",label:"行走速度",type:"range",value:C.value.speed,min:50,max:2e3,step:10,disabled:!((Se=l==null?void 0:l.isActive)!=null&&Se.value)},{id:"flySpeed",label:"飞行速度",type:"range",value:C.value.flySpeed,min:2e3,max:1e6,step:1e3,disabled:!((Ce=l==null?void 0:l.isActive)!=null&&Ce.value)},{id:"gravity",label:"重力",type:"range",value:C.value.gravity,min:-6e3,max:0,step:50,disabled:!((Le=l==null?void 0:l.isActive)!=null&&Le.value)},{id:"jumpHeight",label:"跳跃高度",type:"range",value:C.value.jumpHeight,min:0,max:3e3,step:50,disabled:!((U=l==null?void 0:l.isActive)!=null&&U.value)},{id:"sensitivity",label:"鼠标灵敏度",type:"range",value:C.value.sensitivity,min:1,max:20,step:.5,disabled:!((W=l==null?void 0:l.isActive)!=null&&W.value)},{id:"acceleration",label:"加速惯性",type:"range",value:C.value.acceleration,min:1,max:100,step:1,disabled:!((H=l==null?void 0:l.isActive)!=null&&H.value),tooltip:"值越大加速越快。WASD 按下后到达目标速度的响应快慢。"},{id:"deceleration",label:"减速惯性",type:"range",value:C.value.deceleration,min:1,max:100,step:1,disabled:!((pe=l==null?void 0:l.isActive)!=null&&pe.value),tooltip:"值越大松手后停得越快。影响滑行/惯性感。"}]}]});Te(v,c=>{Ft(y,c)});function d({moduleId:c,actionId:a}){var x,L;(L=(x={scene:{home:()=>{var R;return(R=t.flyToHome)==null?void 0:R.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},fluid:{pick:()=>{var R,z;return(z=(R=e==null?void 0:e.value)==null?void 0:R.startPickHeightMap)==null?void 0:z.call(R)},floodSim:()=>{var R,z;return(z=(R=e==null?void 0:e.value)==null?void 0:R.toggleFloodSimulation)==null?void 0:z.call(R)},clear:()=>{var R,z;return(z=(R=e==null?void 0:e.value)==null?void 0:R.clearFluid)==null?void 0:z.call(R)}},shallowWater:{toggle:()=>{T.value=!T.value}},player:{toggle:()=>{var R;return(R=l==null?void 0:l.togglePlayer)==null?void 0:R.call(l)},changeView:()=>{var R;return(R=l==null?void 0:l.changeView)==null?void 0:R.call(l)}}}[c])==null?void 0:x[a])==null||L.call(x)}function p({moduleId:c,controlId:a,value:f}){var x,L,R,z,G;if(c==="wind"&&a in(((x=n.windParams)==null?void 0:x.value)||{})){(L=n.setWindParam)==null||L.call(n,a,f);return}if(c==="fluid"&&a in S.value){S.value={...S.value,[a]:a==="waterColor"?f:Number(f)},a==="floodSpeed"&&((z=(R=e==null?void 0:e.value)==null?void 0:R.setFloodSpeed)==null||z.call(R,Number(f)));return}if(c==="shallowWater"&&a in w.value){w.value={...w.value,[a]:a==="waterColor"||a==="lightningEnabled"?f:Number(f)};return}if(c==="player"&&a in C.value){const P=Number(f);C.value={...C.value,[a]:P};const V=(G=l==null?void 0:l.getPlayerInstance)==null?void 0:G.call(l);V&&(a==="speed"?V.setPlayerSpeed(P):a==="flySpeed"?V.setPlayerFlySpeed(P):a==="gravity"?V.setGravity(P):a==="jumpHeight"?V.setJumpHeight(P):a==="sensitivity"?V.setMouseSensitivity(P):a==="acceleration"?V.setAcceleration(P):a==="deceleration"&&V.setDeceleration(P));return}if(c==="atmosphere"){if(a in b.value){b.value={...b.value,[a]:!!f};return}if(a in M.value){M.value={...M.value,[a]:f};return}if(a==="atmosphereEnabled"){b.value={...b.value,atmosphere:!!f};return}a in D.value&&(D.value={...D.value,[a]:f})}c==="cloud"&&a in h.value&&(h.value={...h.value,[a]:a==="cloudQuality"?f:Number(f)})}function m(c){const a=ot(c==null?void 0:c.waterLevel),f=ot(c==null?void 0:c.waterLevelMin),x=ot(c==null?void 0:c.waterLevelMax),L=ot(c==null?void 0:c.floodSpeed);_.value={isPicking:!!(c!=null&&c.isPicking),hasFluid:!!(c!=null&&c.hasFluid),selectedText:(c==null?void 0:c.selectedText)||"",waterLevel:a,waterLevelMin:f,waterLevelMax:x,floodSimActive:!!(c!=null&&c.floodSimActive)},L!==null&&(S.value={...S.value,floodSpeed:L}),a!==null&&(S.value={...S.value,waterLevel:a})}function s(){var c;(c=n.clearWind2D)==null||c.call(n)}return{toolPanelOpen:v,advancedEffectControls:b,baseAtmosphereParams:M,atmosphereParams:D,cloudParams:h,fluidParams:S,fluidState:_,shallowWaterVisible:T,shallowWaterParams:w,toolModules:r,handleToolAction:d,handleToolControlChange:p,handleFluidStateChange:m,cleanupTools:s}}function Ds(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function Ls(e){return ot(e.waterLevelMin)!==null&&ot(e.waterLevelMax)!==null}function Fs(e,t={}){const n=ot(t.waterLevelMin),i=ot(t.waterLevelMax),u=n!==null&&i!==null,o=u?Math.min(n,i):0,l=u?Math.max(n,i):0,y=ot(e.waterLevel),v=u?Cs(y??o,o,l):0,b=u?Math.max((l-o)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:o,max:l,step:b,value:v,displayValue:u?`${Ps(v)} m`:"先捕捉",disabled:!u,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"floodSpeed",label:"洪水速度",type:"range",min:u?Math.max((l-o)/100,.01):.1,max:u?Math.max(l-o,1):50,step:u?Math.max((l-o)/1e3,.01):.5,value:e.floodSpeed??(u?(l-o)/10:5),displayValue:(()=>{const M=l-o,D=e.floodSpeed??(u?M/10:5),h=u&&D>0?M/D:0;return u?`${Number(D).toFixed(1)} m/s（${h.toFixed(1)}s）`:"先捕捉"})(),disabled:!u||!!t.floodSimActive,tooltip:"洪水模拟水位上涨速度。默认值域÷10（10s 完成），可自定义。范围：100s ~ 1s 完成。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function ot(e){const t=Number(e);return Number.isFinite(t)?t:null}function Cs(e,t,n){return Math.max(t,Math.min(n,e))}function Ps(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const As={low:{label:"低"},medium:{label:"中"},high:{label:"高"},ultra:{label:"超高"}};function Es(e={},t){return[{id:"atmosphereEnabled",label:"大气效果",type:"toggle",value:!t,tooltip:"启用 Tellux 大气渲染系统（日夜过渡、月光、体积云、星空）"},{id:"dayNightEnabled",label:"日夜过渡",type:"toggle",value:e.dayNightEnabled!==!1,disabled:t,tooltip:"基于太阳高度角的平滑日夜过渡效果"},{id:"moonLightEnabled",label:"月光",type:"toggle",value:e.moonLightEnabled!==!1,disabled:t,tooltip:"夜间月光照明效果"},{id:"moonLightIntensity",label:"月光强度",type:"range",min:0,max:1,step:.01,value:e.moonLightIntensity??.18,displayValue:Number(e.moonLightIntensity??.18).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"ambientIntensity",label:"环境光",type:"range",min:0,max:1,step:.01,value:e.ambientIntensity??.08,displayValue:Number(e.ambientIntensity??.08).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"starsEnabled",label:"星空",type:"toggle",value:e.starsEnabled!==!1,disabled:t,tooltip:"基于高度的星空可见性"},{id:"starsIntensity",label:"星空强度",type:"range",min:0,max:5,step:.1,value:e.starsIntensity??1,displayValue:Number(e.starsIntensity??1).toFixed(1),disabled:t||!e.starsEnabled}]}function Rs(e={},t){return[{id:"cloudsEnabled",label:"启用体积云",type:"toggle",value:e.cloudsEnabled===!0,tooltip:"基于 PostProcessStage 的体积云 Ray Marching 渲染"},{id:"cloudQuality",label:"质量预设",type:"select",value:e.cloudQuality??"medium",options:Object.entries(As).map(([n,i])=>({value:n,label:i.label})),disabled:t||!e.cloudsEnabled},{id:"cloudCoverage",label:"云覆盖率",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.3,displayValue:`${Math.round((e.cloudCoverage??.3)*100)}%`,disabled:t||!e.cloudsEnabled},{id:"cloudBottom",label:"云底高度",type:"range",min:500,max:5e3,step:50,value:e.cloudBottom??1500,displayValue:`${Math.round(e.cloudBottom??1500)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudTop",label:"云顶高度",type:"range",min:1e3,max:1e4,step:100,value:e.cloudTop??2150,displayValue:`${Math.round(e.cloudTop??2150)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudSpeed",label:"移动速度",type:"range",min:0,max:.01,step:1e-4,value:e.cloudSpeed??.001,displayValue:Number(e.cloudSpeed??.001).toFixed(4),disabled:t||!e.cloudsEnabled},{id:"cloudWindDirection",label:"风向",type:"range",min:0,max:360,step:1,value:e.cloudWindDirection??90,displayValue:`${Math.round(e.cloudWindDirection??90)}°`,disabled:t||!e.cloudsEnabled},{id:"cloudScattering",label:"散射系数",type:"range",min:0,max:3,step:.01,value:e.cloudScattering??1,displayValue:Number(e.cloudScattering??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAbsorption",label:"吸收系数",type:"range",min:0,max:1,step:.01,value:e.cloudAbsorption??0,displayValue:Number(e.cloudAbsorption??0).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropy1",label:"前向散射",type:"range",min:-1,max:1,step:.01,value:e.cloudAnisotropy1??.7,displayValue:Number(e.cloudAnisotropy1??.7).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropy2",label:"后向散射",type:"range",min:-1,max:1,step:.01,value:e.cloudAnisotropy2??-.2,displayValue:Number(e.cloudAnisotropy2??-.2).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropyMix",label:"散射混合比",type:"range",min:0,max:1,step:.01,value:e.cloudAnisotropyMix??.5,displayValue:Number(e.cloudAnisotropyMix??.5).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudSkyLight",label:"天空光",type:"range",min:0,max:3,step:.05,value:e.cloudSkyLight??1,displayValue:Number(e.cloudSkyLight??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudGroundBounce",label:"地面反弹光",type:"range",min:0,max:2,step:.05,value:e.cloudGroundBounce??1,displayValue:Number(e.cloudGroundBounce??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudPowder",label:"Powder 效应",type:"range",min:0,max:2,step:.05,value:e.cloudPowder??.8,displayValue:Number(e.cloudPowder??.8).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudDensityScale",label:"密度缩放",type:"range",min:0,max:3,step:.01,value:e.cloudDensityScale??1,displayValue:Number(e.cloudDensityScale??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudShapeAmount",label:"形状强度",type:"range",min:0,max:2,step:.01,value:e.cloudShapeAmount??1,displayValue:Number(e.cloudShapeAmount??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudDetailAmount",label:"细节强度",type:"range",min:0,max:1,step:.01,value:e.cloudDetailAmount??.5,displayValue:Number(e.cloudDetailAmount??.5).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudTurbulence",label:"湍流位移",type:"range",min:0,max:1e3,step:10,value:e.cloudTurbulence??350,displayValue:`${Math.round(e.cloudTurbulence??350)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudHazeDensity",label:"雾霾密度",type:"range",min:0,max:.001,step:1e-5,value:e.cloudHazeDensity??3e-5,displayValue:Number(e.cloudHazeDensity??3e-5).toFixed(5),disabled:t||!e.cloudsEnabled},{id:"cloudHazeExponent",label:"雾霾衰减",type:"range",min:0,max:.01,step:1e-4,value:e.cloudHazeExponent??.001,displayValue:Number(e.cloudHazeExponent??.001).toFixed(4),disabled:t||!e.cloudsEnabled}]}function Is(e={}){return[{id:"enableLighting",label:"日照",type:"toggle",value:e.enableLighting!==!1,tooltip:"Cesium globe.enableLighting：启用日照贴图"},{id:"showGroundAtmosphere",label:"地面大气",type:"toggle",value:e.showGroundAtmosphere!==!1,tooltip:"globe.showGroundAtmosphere：地面大气光晕"},{id:"dynamicAtmosphereLighting",label:"动态光照",type:"toggle",value:e.dynamicAtmosphereLighting!==!1},{id:"atmosphereLightIntensity",label:"大气光强",type:"range",min:0,max:25,step:.5,value:e.atmosphereLightIntensity??5.5,displayValue:Number(e.atmosphereLightIntensity??5.5).toFixed(1)},{id:"fogEnabled",label:"雾效",type:"toggle",value:e.fogEnabled!==!1},{id:"fogDensity",label:"雾密度",type:"range",min:1e-5,max:.001,step:1e-5,value:e.fogDensity??12e-5,displayValue:Number(e.fogDensity??12e-5).toFixed(5),disabled:!e.fogEnabled},{id:"sunShow",label:"太阳",type:"toggle",value:e.sunShow!==!1},{id:"moonShow",label:"月亮",type:"toggle",value:e.moonShow!==!1},{id:"skyBoxShow",label:"星空盒",type:"toggle",value:e.skyBoxShow!==!1}]}function ks(e={},t=!1){return[{id:"elevation",label:"高度角",type:"range",min:2,max:80,step:.1,value:e.elevation??30,displayValue:Number(e.elevation??30).toFixed(1),disabled:t},{id:"azimuth",label:"方位角",type:"range",min:-180,max:180,step:.1,value:e.azimuth??150,displayValue:Number(e.azimuth??150).toFixed(1),disabled:t},{id:"clarity",label:"清澈度",type:"range",min:.03,max:.4,step:.005,value:e.clarity??.085,displayValue:Number(e.clarity??.085).toFixed(3),tooltip:"越小越清澈(Beer-Lambert 密度)",disabled:t},{id:"causticStrength",label:"焦散强度",type:"range",min:0,max:2,step:.05,value:e.causticStrength??.9,displayValue:Number(e.causticStrength??.9).toFixed(2),disabled:t},{id:"waveHeight",label:"浪高",type:"range",min:0,max:1.5,step:.05,value:e.waveHeight??.5,displayValue:Number(e.waveHeight??.5).toFixed(2),disabled:t},{id:"foamWidth",label:"泡沫宽度",type:"range",min:0,max:8,step:.1,value:e.foamWidth??2.4,displayValue:Number(e.foamWidth??2.4).toFixed(1),disabled:t},{id:"reflection",label:"反射强度",type:"range",min:0,max:1,step:.02,value:e.reflection??.38,displayValue:Number(e.reflection??.38).toFixed(2),disabled:t},{id:"waterColor",label:"远处浅水色",type:"color",value:e.waterColor??"#2bb3c4",disabled:t},{id:"cloudCoverage",label:"云量",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.58,displayValue:Number(e.cloudCoverage??.58).toFixed(2),disabled:t},{id:"lightningEnabled",label:"闪电开关",type:"toggle",value:e.lightningEnabled!==!1,disabled:t},{id:"lightningInterval",label:"闪电间隔(秒)",type:"range",min:.4,max:8,step:.1,value:e.lightningInterval??2,displayValue:Number(e.lightningInterval??2).toFixed(1),disabled:t||e.lightningEnabled===!1}]}const Zn={low:{label:"低",maxIterationCount:64,minStepSize:200,maxStepSize:2e3,maxRayDistance:8e4,perspectiveStepScale:1.02,minDensity:1e-4,minTransmittance:.1,multiScatteringOctaves:2,maxIterationCountToSun:0,maxIterationCountToGround:0,minSecondaryStepSize:200,shapeDetail:!1,turbulence:!1},medium:{label:"中",maxIterationCount:128,minStepSize:100,maxStepSize:1500,maxRayDistance:15e4,perspectiveStepScale:1.015,minDensity:1e-4,minTransmittance:.05,multiScatteringOctaves:4,maxIterationCountToSun:1,maxIterationCountToGround:0,minSecondaryStepSize:150,shapeDetail:!0,turbulence:!1},high:{label:"高",maxIterationCount:256,minStepSize:50,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.01,minDensity:1e-5,minTransmittance:.01,multiScatteringOctaves:6,maxIterationCountToSun:2,maxIterationCountToGround:1,minSecondaryStepSize:100,shapeDetail:!0,turbulence:!0},ultra:{label:"超高",maxIterationCount:512,minStepSize:20,maxStepSize:800,maxRayDistance:25e4,perspectiveStepScale:1.008,minDensity:1e-6,minTransmittance:.005,multiScatteringOctaves:8,maxIterationCountToSun:3,maxIterationCountToGround:2,minSecondaryStepSize:50,shapeDetail:!0,turbulence:!0}};function qe(e){return Zn[e]??Zn.medium}const zs={enabled:!1,quality:"medium",minHeight:1500,maxHeight:2150,coverage:.3,windSpeed:.001,windDirection:90,scatteringCoefficient:1,absorptionCoefficient:0,scatterAnisotropy1:.7,scatterAnisotropy2:-.2,scatterAnisotropyMix:.5,skyLightScale:1,groundBounceScale:1,powderScale:.8,densityScale:1,shapeAmount:1,shapeDetailAmount:.5,turbulenceDisplacement:350,hazeDensityScale:3e-5,hazeExponent:.001,nightMoonIntensity:.18,nightAmbientIntensity:.08,nightColor:"#9bbcff",dayLightFactor:1};function Ns(e){const t=e.replace("#",""),n=parseInt(t.substring(0,2),16)/255,i=parseInt(t.substring(2,4),16)/255,u=parseInt(t.substring(4,6),16)/255;return[n,i,u]}function Os(e){return e*Math.PI/180}function Hs(e){const t=e;return{u_enabled:()=>t().enabled,u_minHeight:()=>t().minHeight,u_maxHeight:()=>t().maxHeight,u_coverage:()=>t().coverage,u_windSpeed:()=>t().windSpeed,u_windDirection:()=>{const n=Os(t().windDirection);return[Math.cos(n),Math.sin(n)]},u_scatteringCoefficient:()=>t().scatteringCoefficient,u_absorptionCoefficient:()=>t().absorptionCoefficient,u_scatterAnisotropy1:()=>t().scatterAnisotropy1,u_scatterAnisotropy2:()=>t().scatterAnisotropy2,u_scatterAnisotropyMix:()=>t().scatterAnisotropyMix,u_skyLightScale:()=>t().skyLightScale,u_groundBounceScale:()=>t().groundBounceScale,u_powderScale:()=>t().powderScale,u_densityScale:()=>t().densityScale,u_shapeAmount:()=>t().shapeAmount,u_shapeDetailAmount:()=>t().shapeDetailAmount,u_turbulenceDisplacement:()=>t().turbulenceDisplacement,u_hazeDensityScale:()=>t().hazeDensityScale,u_hazeExponent:()=>t().hazeExponent,u_nightMoonIntensity:()=>t().nightMoonIntensity,u_nightAmbientIntensity:()=>t().nightAmbientIntensity,u_nightColor:()=>Ns(t().nightColor),u_dayLightFactor:()=>t().dayLightFactor,u_maxIterationCount:()=>qe(t().quality).maxIterationCount,u_minStepSize:()=>qe(t().quality).minStepSize,u_maxStepSize:()=>qe(t().quality).maxStepSize,u_maxRayDistance:()=>qe(t().quality).maxRayDistance,u_perspectiveStepScale:()=>qe(t().quality).perspectiveStepScale,u_minDensity:()=>qe(t().quality).minDensity,u_minTransmittance:()=>qe(t().quality).minTransmittance,u_multiScatteringOctaves:()=>qe(t().quality).multiScatteringOctaves,u_maxIterationCountToSun:()=>qe(t().quality).maxIterationCountToSun,u_maxIterationCountToGround:()=>qe(t().quality).maxIterationCountToGround,u_minSecondaryStepSize:()=>qe(t().quality).minSecondaryStepSize,u_shapeDetailEnabled:()=>qe(t().quality).shapeDetail?1:0,u_turbulenceEnabled:()=>qe(t().quality).turbulence?1:0}}const Bs=`// ============================================================
// cloudFragment.glsl — 体积云片元着色器
//
// 实现完整的体积云 Ray Marching 渲染：
// 1. 从屏幕 NDC 重建 ECEF 射线
// 2. 与云层壳体（球壳）求交确定 march 范围
// 3. 主循环：自适应步长 + 密度采样 + 光照计算
// 4. 合成到场景（alpha blend + 深度测试）
//
// 注意: PostProcessStage 不自动注入 czm_cameraPositionWC 等，
//       必须通过自定义 uniform 从 JS 端传入
// ============================================================

// ─── Cesium 相关 Uniform（通过 JS 自定义传入） ────────────────

uniform vec3 u_cameraPosition;       // czm_cameraPositionWC
uniform mat4 u_inverseProjection;    // czm_inverseProjection
uniform mat4 u_inverseView;          // czm_inverseView
uniform vec3 u_sunDirection;         // czm_sunDirectionWC
uniform vec3 u_ellipsoidRadii;       // czm_ellipsoidRadii
uniform sampler2D depthTexture;        // PostProcessStage 自动传入

// ─── 输入 ─────────────────────────────────────────────────────

in vec2 v_textureCoordinates;
out vec4 fragColor;

// ─── 自定义 Uniform ───────────────────────────────────────────

// 开关
uniform bool u_enabled;

// 云层几何
uniform float u_minHeight;        // 云底高度 (米)
uniform float u_maxHeight;        // 云顶高度 (米)
uniform float u_coverage;         // 云覆盖率 0-1

// 风 / 动画
uniform float u_windSpeed;        // 风速
uniform vec2 u_windDirection;     // 风向 (cos, sin)

// 散射
uniform float u_scatteringCoefficient;
uniform float u_absorptionCoefficient;
uniform float u_scatterAnisotropy1;
uniform float u_scatterAnisotropy2;
uniform float u_scatterAnisotropyMix;
uniform float u_skyLightScale;
uniform float u_groundBounceScale;
uniform float u_powderScale;

// 密度
uniform float u_densityScale;
uniform float u_shapeAmount;
uniform float u_shapeDetailAmount;
uniform float u_turbulenceDisplacement;

// 雾
uniform float u_hazeDensityScale;
uniform float u_hazeExponent;

// 夜间光照
uniform float u_nightMoonIntensity;
uniform float u_nightAmbientIntensity;
uniform vec3 u_nightColor;
uniform float u_dayLightFactor;

// 质量
uniform int u_maxIterationCount;
uniform float u_minStepSize;
uniform float u_maxStepSize;
uniform float u_maxRayDistance;
uniform float u_perspectiveStepScale;
uniform float u_minDensity;
uniform float u_minTransmittance;
uniform int u_multiScatteringOctaves;
uniform int u_maxIterationCountToSun;
uniform int u_maxIterationCountToGround;
uniform float u_minSecondaryStepSize;
uniform float u_shapeDetailEnabled;
uniform float u_turbulenceEnabled;

// 噪声纹理（程序化降级时可为空）
// 注意: shape/shapeDetail 存储为 2D 纹理（size × size²），用 sample3DAs2D 采样
uniform sampler2D u_shapeTexture;
uniform sampler2D u_shapeDetailTexture;
uniform sampler2D u_weatherTexture;
uniform sampler2D u_turbulenceTexture;

// 纹理参数
uniform vec3 u_shapeRepeat;       // shape 纹理 UV 重复率
uniform vec3 u_shapeDetailRepeat; // detail 纹理 UV 重复率
uniform vec2 u_weatherRepeat;     // 天气纹理 UV 重复率
uniform float u_time;             // 动画时间（秒）
uniform float u_shapeDepth;       // shape 纹理深度切片数（128）
uniform float u_shapeDetailDepth; // detail 纹理深度切片数（32）

// ─── 3D→2D 纹理采样辅助 ──────────────────────────────────────
// 将 3D UV (x,y,z ∈ [0,1]) 映射到 2D UV，纹理布局: width=depth, height=depth²
// slice = floor(z * depth), v = (slice + y) / depth²

vec4 sample3DAs2D(sampler2D tex, vec3 uvw, float depth) {
    float z = fract(uvw.z);
    float y = fract(uvw.y);
    float x = fract(uvw.x);
    float slice = floor(z * depth);
    float v = (slice + y) / (depth * depth);
    return texture(tex, vec2(x, v));
}

// ─── 引入工具库 ───────────────────────────────────────────────

// 注意: Cesium PostProcessStage 会自动拼接 include，
// 这里用字符串拼接方式在 JS 端处理

// ─── 工具函数（内联，避免 include 兼容问题） ──────────────────

const float CLOUD_PI = 3.141592653589793;

float cloudSaturate(float x) { return clamp(x, 0.0, 1.0); }
vec3 cloudSaturate(vec3 x) { return clamp(x, vec3(0.0), vec3(1.0)); }
vec4 cloudSaturate(vec4 x) { return clamp(x, vec4(0.0), vec4(1.0)); }

float cloudRemap(float value, float inMin, float inMax) {
    return cloudSaturate((value - inMin) / max(inMax - inMin, 1e-10));
}

float cloudRemap(float value, float inMin, float inMax, float outMin, float outMax) {
    return outMin + (outMax - outMin) * cloudRemap(value, inMin, inMax);
}

// Henyey-Greenstein 相位函数
float henyeyGreenstein(float g, float cosTheta) {
    float g2 = g * g;
    float denom = 1.0 + g2 - 2.0 * g * cosTheta;
    return (1.0 - g2) / (4.0 * CLOUD_PI * pow(max(denom, 1e-10), 1.5));
}

// 双 HG 混合相位函数
float phaseFunction(float cosTheta) {
    return mix(
        henyeyGreenstein(u_scatterAnisotropy1, cosTheta),
        henyeyGreenstein(u_scatterAnisotropy2, cosTheta),
        u_scatterAnisotropyMix
    );
}

// 多重散射近似
float approximateMultipleScattering(float opticalDepth, float cosTheta) {
    vec3 coeffs = vec3(1.0);
    const vec3 attenuation = vec3(0.5, 0.5, 0.5);
    float scattering = 0.0;
    for (int i = 0; i < 8; i++) {
        if (i >= u_multiScatteringOctaves) break;
        float beerLambert = exp(-opticalDepth * coeffs.y);
        float phase = mix(
            henyeyGreenstein(u_scatterAnisotropy1 * coeffs.z, cosTheta),
            henyeyGreenstein(u_scatterAnisotropy2 * coeffs.z, cosTheta),
            u_scatterAnisotropyMix
        );
        scattering += coeffs.x * beerLambert * phase;
        coeffs *= attenuation;
    }
    return scattering;
}

// 密度剖面
float cloudDensityProfile(float heightFraction) {
    float base = exp(-heightFraction * 3.0);
    float bottomBoost = exp(-heightFraction * 8.0) * 0.5;
    float topErosion = 1.0 - exp(-(1.0 - heightFraction) * 4.0);
    float midBump = exp(-pow((heightFraction - 0.4) * 3.0, 2.0));
    return (base + bottomBoost) * topErosion * midBump;
}

// 光线-球面求交
bool raySphereIntersect(vec3 ro, vec3 rd, float radius, out float tNear, out float tFar) {
    float b = dot(ro, rd);
    float c = dot(ro, ro) - radius * radius;
    float disc = b * b - c;
    if (disc < 0.0) { tNear = 0.0; tFar = 0.0; return false; }
    float s = sqrt(disc);
    tNear = -b - s;
    tFar = -b + s;
    return true;
}

// ─── 3D Perlin 噪声（程序化降级用） ──────────────────────────

vec3 mod289v3(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289v4(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute4(vec4 x) { return mod289v4(((x * 34.0) + 10.0) * x); }
vec4 taylorInv(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float perlinNoise3D(vec3 P) {
    vec3 Pi0 = floor(P);
    vec3 Pi1 = Pi0 + 1.0;
    Pi0 = mod289v3(Pi0); Pi1 = mod289v3(Pi1);
    vec3 Pf0 = fract(P); vec3 Pf1 = Pf0 - 1.0;
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz; vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute4(permute4(ix) + iy);
    vec4 ixy0 = permute4(ixy + iz0);
    vec4 ixy1 = permute4(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInv(vec4(dot(g000,g000), dot(g010,g010), dot(g100,g100), dot(g110,g110)));
    g000*=norm0.x; g010*=norm0.y; g100*=norm0.z; g110*=norm0.w;
    vec4 norm1 = taylorInv(vec4(dot(g001,g001), dot(g011,g011), dot(g101,g101), dot(g111,g111)));
    g001*=norm1.x; g011*=norm1.y; g101*=norm1.z; g111*=norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade = Pf0 * Pf0 * Pf0 * (Pf0 * (Pf0 * 6.0 - 15.0) + 10.0);
    vec4 nz = mix(vec4(n000,n100,n010,n110), vec4(n001,n101,n011,n111), fade.z);
    vec2 nyz = mix(nz.xy, nz.zw, fade.y);
    return 2.2 * mix(nyz.x, nyz.y, fade.x);
}

// FBM
float fbm3D(vec3 p, int octaves) {
    float sum = 0.0, amp = 1.0, freq = 1.0;
    for (int i = 0; i < 6; i++) {
        if (i >= octaves) break;
        sum += amp * perlinNoise3D(p * freq);
        freq *= 2.0;
        amp *= 0.5;
    }
    return sum;
}

// ─── 天气纹理采样 ─────────────────────────────────────────────
// 天气纹理编码: r=覆盖率, g=云类型, b=降水概率

struct WeatherData {
    float coverage;
    float cloudType;
    float precipitation;
};

WeatherData sampleWeather(vec3 worldPos, float bottomRadius) {
    // 世界坐标 → 经纬度 UV
    vec3 n = normalize(worldPos);
    float lon = atan(n.z, n.x);
    float lat = asin(clamp(n.y, -1.0, 1.0));
    vec2 uv = vec2(lon / CLOUD_PI * 0.5 + 0.5, lat / CLOUD_PI + 0.5);

    // 风偏移动画
    uv += u_windDirection * u_windSpeed * u_time;
    uv *= u_weatherRepeat;

    // 采样天气纹理（或程序化生成）
    vec3 weatherTex = texture(u_weatherTexture, fract(uv)).rgb;
    // 若纹理未加载（全零），使用程序化天气
    float texLuma = dot(weatherTex, vec3(0.333));
    float coverage = texLuma > 0.01 ? weatherTex.r : 0.5 + 0.3 * perlinNoise3D(worldPos * 0.00005);
    float cloudType = texLuma > 0.01 ? weatherTex.g : 0.5;
    float precip = texLuma > 0.01 ? weatherTex.b : 0.0;

    WeatherData w;
    w.coverage = coverage * u_coverage;
    w.cloudType = cloudType;
    w.precipitation = precip;
    return w;
}

// ─── 密度采样 ─────────────────────────────────────────────────

struct DensityResult {
    float density;
    float extinction;
    float heightFraction;
};

DensityResult sampleCloudDensity(vec3 position, float heightFraction, WeatherData weather, float jitter) {
    // 基础密度 = 天气覆盖 × 密度剖面
    float baseDensity = weather.coverage * cloudDensityProfile(heightFraction);
    baseDensity *= u_densityScale;

    // Shape 纹理采样（低频形状）
    float shapeNoise = 0.0;
    vec3 shapePos = position * u_shapeRepeat + vec3(u_windDirection.x, 0.0, u_windDirection.y) * u_windSpeed * u_time * 0.01;
    vec3 shapeTex = sample3DAs2D(u_shapeTexture, shapePos, u_shapeDepth).rgb;
    float shapeTexLuma = dot(shapeTex, vec3(0.333));
    if (shapeTexLuma > 0.01) {
        shapeNoise = shapeTex.r;
    } else {
        // 程序化降级
        shapeNoise = perlinNoise3D(position * 0.0003) * 0.5 + 0.5;
    }
    // 用 shape 噪声侵蚀基础密度
    baseDensity = cloudRemap(baseDensity, (1.0 - shapeNoise) * u_shapeAmount, 1.0);

    // Shape Detail 纹理采样（高频细节）
    if (u_shapeDetailEnabled > 0.5) {
        vec3 detailPos = position * u_shapeDetailRepeat;
        vec3 detailTex = sample3DAs2D(u_shapeDetailTexture, detailPos, u_shapeDetailDepth).rgb;
        float detailNoise = dot(detailTex, vec3(0.333));
        if (detailNoise < 0.01) {
            // 程序化降级
            detailNoise = perlinNoise3D(position * 0.006) * 0.5 + 0.5;
        }
        float modifier = mix(pow(detailNoise, 6.0), 1.0 - detailNoise, cloudRemap(heightFraction, 0.2, 0.4));
        baseDensity = cloudRemap(baseDensity * 2.0, modifier * u_shapeDetailAmount, 1.0);
    }

    // Turbulence 域扭曲（可选）
    if (u_turbulenceEnabled > 0.5) {
        vec2 turbUV = fract(position.xz * 0.00005 + u_windDirection * u_windSpeed * u_time * 0.001);
        vec3 turbTex = texture(u_turbulenceTexture, turbUV).rgb;
        float turbNoise = dot(turbTex, vec3(0.333));
        if (turbNoise > 0.01) {
            vec3 displacement = (turbTex * 2.0 - 1.0) * u_turbulenceDisplacement;
            // 域扭曲：偏移采样位置后再采样 shape
            vec3 warpedPos = (position + displacement) * u_shapeRepeat;
            float warpedShape = sample3DAs2D(u_shapeTexture, warpedPos, u_shapeDepth).r;
            baseDensity *= mix(1.0, warpedShape, 0.3);
        }
    }

    // Clamp 最终密度
    float density = max(baseDensity, 0.0);
    float extinction = density * (u_scatteringCoefficient + u_absorptionCoefficient);

    DensityResult result;
    result.density = density;
    result.extinction = extinction;
    result.heightFraction = heightFraction;
    return result;
}

// ─── 光照计算 ─────────────────────────────────────────────────

struct LightResult {
    vec3 radiance;
    float opticalDepth;
};

LightResult computeLighting(
    vec3 position, float heightFraction,
    DensityResult density, vec3 sunDir,
    float cosTheta, float stepSize
) {
    // 向太阳方向做二次 ray march（光线能量累积）
    float opticalDepth = 0.0;
    if (u_maxIterationCountToSun > 0) {
        float sunStepSize = u_minSecondaryStepSize;
        float sunDistance = sunStepSize;
        for (int i = 0; i < 8; i++) {
            if (i >= u_maxIterationCountToSun) break;
            vec3 sunSamplePos = position + sunDir * sunDistance;
            float sunHeight = length(sunSamplePos) - u_ellipsoidRadii.x;
            float sunHF = cloudSaturate((sunHeight - u_minHeight) / max(u_maxHeight - u_minHeight, 1.0));
            if (sunHF > 0.0 && sunHF < 1.0) {
                WeatherData sunWeather = sampleWeather(sunSamplePos, u_ellipsoidRadii.x);
                DensityResult sunDensity = sampleCloudDensity(sunSamplePos, sunHF, sunWeather, 0.0);
                opticalDepth += sunDensity.extinction * sunStepSize;
            }
            sunDistance += sunStepSize;
            sunStepSize *= 2.0; // 步长递增
        }
    }

    // 太阳光照 × 多重散射
    float sunScattering = approximateMultipleScattering(opticalDepth, cosTheta);

    // 地面反弹光（简化：使用高度衰减近似）
    float heightFactor = cloudSaturate(heightFraction * 2.0);
    float groundBounce = heightFactor * u_groundBounceScale * 0.3;

    // 天空光（简化：基于高度的梯度）
    float skyGradient = cloudSaturate(1.0 - heightFraction * 0.5) * u_skyLightScale;

    // Powder 效应
    float powder = 1.0 - u_powderScale * exp(-density.extinction * 150.0);

    // 组合辐射度
    vec3 sunColor = vec3(1.0, 0.95, 0.9) * 4.0; // 太阳光色温
    vec3 skyColor = vec3(0.5, 0.6, 0.9);          // 天空光色温
    vec3 groundColor = vec3(0.3, 0.4, 0.2);       // 地面反弹色

    vec3 radiance = sunColor * sunScattering;
    radiance += skyColor * skyGradient;
    radiance += groundColor * groundBounce;
    radiance *= powder;

    // 夜间光照
    float nightFactor = 1.0 - u_dayLightFactor;
    if (nightFactor > 0.01) {
        vec3 moonDir = normalize(vec3(0.5, 0.7, -0.3)); // 简化月亮方向
        float moonDiffuse = max(dot(vec3(0.0, 1.0, 0.0), moonDir), 0.0);
        float moonPhase = approximateMultipleScattering(opticalDepth * 0.35, cosTheta);
        vec3 nightRadiance = u_nightColor * u_nightAmbientIntensity;
        nightRadiance += u_nightColor * u_nightMoonIntensity * moonDiffuse * moonPhase;
        radiance = mix(radiance, nightRadiance, nightFactor);
    }

    LightResult result;
    result.radiance = radiance;
    result.opticalDepth = opticalDepth;
    return result;
}

// ─── 主 Ray March ─────────────────────────────────────────────

struct MarchResult {
    vec3 color;
    float alpha;
    float depth;
};

MarchResult marchClouds(vec3 rayOrigin, vec3 rayDir, float marchStart, float marchEnd) {
    float bottomRadius = u_ellipsoidRadii.x;
    vec3 sunDir = normalize(u_sunDirection);
    float cosTheta = dot(rayDir, sunDir);

    // 累积变量
    vec3 radianceIntegral = vec3(0.0);
    float transmittanceIntegral = 1.0;
    float rayDistance = marchStart;
    float stepSize = u_minStepSize;

    // 时间抖动（蓝噪声降级：使用随机偏移）
    float jitter = fract(sin(dot(v_textureCoordinates, vec2(12.9898, 78.233))) * 43758.5453);

    MarchResult result;
    result.color = vec3(0.0);
    result.alpha = 0.0;
    result.depth = marchEnd;

    for (int i = 0; i < 512; i++) {
        if (i >= u_maxIterationCount) break;
        if (rayDistance > marchEnd || rayDistance > u_maxRayDistance) break;
        if (transmittanceIntegral < u_minTransmittance) break;

        // 当前采样位置
        vec3 position = rayOrigin + rayDir * rayDistance;
        float height = length(position) - bottomRadius;
        float heightFraction = cloudSaturate((height - u_minHeight) / max(u_maxHeight - u_minHeight, 1.0));

        // 在云层范围内才采样
        if (heightFraction > 0.0 && heightFraction < 1.0) {
            // 采样天气
            WeatherData weather = sampleWeather(position, bottomRadius);

            // 云覆盖率阈值
            if (weather.coverage > u_minDensity) {
                // 采样密度
                DensityResult density = sampleCloudDensity(
                    position, heightFraction, weather,
                    jitter + float(i) * 0.1
                );

                if (density.density > u_minDensity) {
                    // 光照计算
                    LightResult light = computeLighting(
                        position, heightFraction, density,
                        sunDir, cosTheta, stepSize
                    );

                    // Frostbite 能量守恒积分
                    float transmittance = exp(-density.extinction * stepSize);
                    float clampedExtinction = max(density.extinction, 1e-7);
                    vec3 scatteringIntegral = (light.radiance - light.radiance * transmittance) / clampedExtinction;

                    radianceIntegral += transmittanceIntegral * scatteringIntegral * u_scatteringCoefficient;
                    transmittanceIntegral *= transmittance;

                    // 记录第一个有效采样的深度
                    if (result.depth == marchEnd && density.density > 0.01) {
                        result.depth = rayDistance;
                    }

                    // 在云内使用较小步长
                    stepSize = max(stepSize * 0.8, u_minStepSize);
                } else {
                    // 空区域：步长递增
                    stepSize = min(stepSize * u_perspectiveStepScale, u_maxStepSize);
                }
            } else {
                stepSize = min(stepSize * u_perspectiveStepScale, u_maxStepSize);
            }
        } else {
            // 云层外：大步长快速跳过
            stepSize = min(stepSize * u_perspectiveStepScale * 1.5, u_maxStepSize * 2.0);
        }

        rayDistance += stepSize * (1.0 + jitter * 0.1);
    }

    result.color = radianceIntegral;
    result.alpha = 1.0 - transmittanceIntegral;
    return result;
}

// ─── Haze（大气雾霾） ─────────────────────────────────────────
// 云层以下的低空区域使用解析雾模型

vec3 applyHaze(vec3 cloudColor, float cloudAlpha, float rayDistance, float cameraHeight) {
    float hazeDensity = u_hazeDensityScale * exp(-cameraHeight * u_hazeExponent);
    float hazeOpticalDepth = hazeDensity * rayDistance;
    float hazeTransmittance = exp(-hazeOpticalDepth);
    vec3 hazeColor = vec3(0.7, 0.8, 0.9) * u_dayLightFactor; // 雾色
    return mix(hazeColor, cloudColor, cloudAlpha) * hazeTransmittance + cloudColor * (1.0 - hazeTransmittance);
}

// ─── 深度比较辅助 ─────────────────────────────────────────────
// Cesium 使用反向对数深度缓冲 (reverse-log depth):
//   - near plane → windowDepth = 1.0
//   - far plane  → windowDepth = 0.0
// 不使用 czm_reverseLogDepth（PostProcessStage 不可用），
// 改为将云的端点投影到 clip space 做深度比较。

bool isCloudOccluded(vec3 cloudPos, float sceneDepth) {
    // 将云位置投影到 clip space
    vec4 cloudClip = u_inverseView * vec4(cloudPos, 1.0);
    cloudClip = u_inverseProjection * vec4(cloudClip.xyz, 1.0);
    float cloudNdcZ = cloudClip.z / cloudClip.w;
    // 反向深度: cloudNdcZ < sceneNdcZ 表示云在几何后面（被遮挡）
    float sceneNdcZ = sceneDepth * 2.0 - 1.0;
    return cloudNdcZ < sceneNdcZ;
}

// ─── 云层壳体求交 ─────────────────────────────────────────────
// 根据相机与云层的相对位置，确定 ray march 的起止距离

void getCloudLayerIntersections(
    vec3 cameraPos, vec3 rayDir,
    float bottomRadius, float minHeight, float maxHeight,
    out float marchStart, out float marchEnd
) {
    float cloudBottomRadius = bottomRadius + minHeight;
    float cloudTopRadius = bottomRadius + maxHeight;
    float cameraHeight = length(cameraPos);

    float nearBottom, farBottom, nearTop, farTop;
    bool hitBottom = raySphereIntersect(cameraPos, rayDir, cloudBottomRadius, nearBottom, farBottom);
    bool hitTop = raySphereIntersect(cameraPos, rayDir, cloudTopRadius, nearTop, farTop);

    if (cameraHeight < cloudBottomRadius) {
        marchStart = hitBottom ? max(nearBottom, 0.0) : -1.0;
        marchEnd = hitTop ? max(nearTop, 0.0) : -1.0;
    } else if (cameraHeight > cloudTopRadius) {
        marchStart = hitTop ? max(nearTop, 0.0) : -1.0;
        marchEnd = hitBottom ? max(nearBottom, 0.0) : -1.0;
    } else {
        marchStart = 0.0;
        marchEnd = hitTop ? max(nearTop, 0.0) : (hitBottom ? max(farBottom, 0.0) : -1.0);
    }

    if (marchStart < 0.0 || marchEnd < 0.0 || marchEnd <= marchStart) {
        marchStart = -1.0;
        marchEnd = -1.0;
    }
}

// ─── 主函数 ───────────────────────────────────────────────────

void main() {
    fragColor = vec4(0.0);

    if (!u_enabled) return;

    // 1. 读取场景深度（用于深度裁剪）
    float sceneDepth = texture(depthTexture, v_textureCoordinates).r;

    // 2. 从 NDC 重建世界空间射线
    vec2 ndc = v_textureCoordinates * 2.0 - 1.0;
    vec4 clipPos = vec4(ndc, 1.0, 1.0);
    vec4 viewPos = u_inverseProjection * clipPos;
    viewPos /= viewPos.w;
    vec3 worldDir = normalize((u_inverseView * viewPos).xyz - u_cameraPosition);

    // 3. 云层壳体求交
    float bottomRadius = u_ellipsoidRadii.x;
    float cameraHeight = length(u_cameraPosition);

    float marchStart, marchEnd;
    getCloudLayerIntersections(
        u_cameraPosition, worldDir,
        bottomRadius, u_minHeight, u_maxHeight,
        marchStart, marchEnd
    );

    // 无交点 → 跳过
    if (marchStart < 0.0) return;

    // 深度裁剪：场景几何比云更近时跳过
    // sceneDepth < 1.0 表示深度缓冲中有非天空几何
    // 将云的端点投影到 clip space 与场景深度比较
    if (sceneDepth < 1.0) {
        vec3 cloudEndPos = u_cameraPosition + worldDir * marchEnd;
        if (isCloudOccluded(cloudEndPos, sceneDepth)) {
            return; // 云完全被场景几何遮挡
        }
    }

    // 4. 主 Ray March
    MarchResult result = marchClouds(u_cameraPosition, worldDir, marchStart, marchEnd);

    // 5. 应用大气雾霾
    vec3 finalColor = applyHaze(result.color, result.alpha, result.depth, cameraHeight);

    // 6. 应用昼夜过渡
    finalColor *= max(u_dayLightFactor, 0.1); // 夜间不完全黑

    // 7. 输出（alpha blend 到场景）
    fragColor = vec4(finalColor, result.alpha);
}
`;function ct(){const e=window.Cesium;if(!e)throw new Error("[CloudManager] window.Cesium 未就绪，请确保 Cesium CDN 已加载");return e}const Us={shape:"/textures/cloud/shape.bin",shapeDetail:"/textures/cloud/shape_detail.bin",weather:"/textures/cloud/local_weather.png",turbulence:"/textures/cloud/turbulence.png"};class Ws{constructor(t,n){et(this,"viewer");et(this,"stage",null);et(this,"textures",{shape:null,shapeDetail:null,weather:null,turbulence:null});et(this,"_values",{...zs});et(this,"_initialized",!1);et(this,"_destroyed",!1);et(this,"_texturePaths");et(this,"_startTime",0);this.viewer=t,this._texturePaths={...Us,...n==null?void 0:n.texturePaths},n!=null&&n.quality&&(this._values.quality=n.quality),(n==null?void 0:n.enabled)!==void 0&&(this._values.enabled=n.enabled)}async init(){if(this._initialized||this._destroyed)return;const t=this.viewer.scene;if(!t||t.isDestroyed())return;this._startTime=performance.now()/1e3;const n=ct(),i=t.context,u=new n.Sampler({minificationFilter:n.TextureMinificationFilter.LINEAR,magnificationFilter:n.TextureMagnificationFilter.LINEAR,wrapS:n.TextureWrap.REPEAT,wrapT:n.TextureWrap.REPEAT}),o=()=>new n.Texture({context:i,source:{arrayBufferView:new Uint8Array([128,128,128,255]),width:1,height:1},pixelFormat:n.PixelFormat.RGBA,pixelDatatype:n.PixelDatatype.UNSIGNED_BYTE,sampler:u});try{this.textures.shape=o(),this.textures.shapeDetail=o(),this.textures.weather=o(),this.textures.turbulence=o()}catch{for(const y of[this.textures.shape,this.textures.shapeDetail,this.textures.weather,this.textures.turbulence])if(y)try{y.destroy()}catch{}this.textures.shape=null,this.textures.shapeDetail=null,this.textures.weather=null,this.textures.turbulence=null;return}this.stage=new n.PostProcessStage({fragmentShader:Bs,uniforms:this.buildStageUniforms()}),this.stage.enabled=!1,t.postProcessStages.add(this.stage),await this.loadTextures(),!this._destroyed&&(this._initialized=!0,this.stage&&this._values.enabled&&(this.stage.enabled=!0))}destroy(){if(this._destroyed=!0,this.stage){const t=this.viewer.scene;t&&!t.isDestroyed()&&(t.postProcessStages.remove(this.stage),this.stage.destroy()),this.stage=null}for(const t of Object.keys(this.textures))if(this.textures[t]){try{this.textures[t].destroy()}catch{}this.textures[t]=null}this._initialized=!1}show(){this._values.enabled=!0,this.stage&&(this.stage.enabled=!0)}hide(){this._values.enabled=!1,this.stage&&(this.stage.enabled=!1)}toggle(){this._values.enabled?this.hide():this.show()}get initialized(){return this._initialized}get visible(){return this._values.enabled}get values(){return this._values}updateUniforms(t){Object.assign(this._values,t)}setQuality(t){this._values.quality=t}getPresetDetail(){return qe(this._values.quality)}buildStageUniforms(){return{...Hs(()=>this._values),...{u_shapeTexture:()=>this.textures.shape,u_shapeDetailTexture:()=>this.textures.shapeDetail,u_weatherTexture:()=>this.textures.weather,u_turbulenceTexture:()=>this.textures.turbulence},...{u_time:()=>performance.now()/1e3-this._startTime},...{u_shapeRepeat:()=>[3e-4,3e-4,3e-4],u_shapeDetailRepeat:()=>[.006,.006,.006],u_weatherRepeat:()=>[1,1],u_shapeDepth:()=>128,u_shapeDetailDepth:()=>32},...{u_cameraPosition:()=>{var b,M,D;const y=ct();return((D=(M=(b=this.viewer)==null?void 0:b.scene)==null?void 0:M.camera)==null?void 0:D.positionWC)??new y.Cartesian3(0,0,0)},u_inverseProjection:()=>{var b,M,D,h;const y=ct();return((h=(D=(M=(b=this.viewer)==null?void 0:b.scene)==null?void 0:M.context)==null?void 0:D.uniformState)==null?void 0:h.inverseProjectionMatrix)??y.Matrix4.IDENTITY},u_inverseView:()=>{var b,M,D,h;const y=ct();return((h=(D=(M=(b=this.viewer)==null?void 0:b.scene)==null?void 0:M.context)==null?void 0:D.uniformState)==null?void 0:h.inverseViewMatrix)??y.Matrix4.IDENTITY},u_sunDirection:()=>{var b,M,D,h;const y=ct();return((h=(D=(M=(b=this.viewer)==null?void 0:b.scene)==null?void 0:M.context)==null?void 0:D.uniformState)==null?void 0:h.sunDirectionWC)??new y.Cartesian3(0,0,1)},u_ellipsoidRadii:()=>{var b,M,D,h;const y=ct();return((h=(D=(M=(b=this.viewer)==null?void 0:b.scene)==null?void 0:M.globe)==null?void 0:D.ellipsoid)==null?void 0:h.radii)??new y.Cartesian3(6378137,6378137,6356752314245179e-9)}}}}async loadTextures(){const t=[this.load3DBinaryTexture("shape",this._texturePaths.shape,128),this.load3DBinaryTexture("shapeDetail",this._texturePaths.shapeDetail,32),this.load2DImageTexture("weather",this._texturePaths.weather),this.load2DImageTexture("turbulence",this._texturePaths.turbulence)];if(await Promise.allSettled(t),this._destroyed){for(const n of Object.keys(this.textures))if(this.textures[n]){try{this.textures[n].destroy()}catch{}this.textures[n]=null}}}async load3DBinaryTexture(t,n,i){var o;if(!n)return;const u=(o=this.viewer.scene)==null?void 0:o.context;if(u)try{const l=await fetch(n);if(!l.ok)throw new Error(`HTTP ${l.status}`);const y=await l.arrayBuffer(),v=i*i*i;if(y.byteLength<v)return;const b=new Uint8Array(y,0,v),M=ct(),D=new M.Texture({context:u,source:{arrayBufferView:b,width:i,height:i*i},pixelFormat:M.PixelFormat.RED,pixelDatatype:M.PixelDatatype.UNSIGNED_BYTE,sampler:new M.Sampler({minificationFilter:M.TextureMinificationFilter.LINEAR,magnificationFilter:M.TextureMagnificationFilter.LINEAR,wrapS:M.TextureWrap.REPEAT,wrapT:M.TextureWrap.REPEAT})});if(this.textures[t])try{this.textures[t].destroy()}catch{}this.textures[t]=D}catch{}}async load2DImageTexture(t,n){var u;if(!n)return;const i=(u=this.viewer.scene)==null?void 0:u.context;if(i)try{const o=await fetch(n);if(!o.ok)throw new Error(`HTTP ${o.status}`);const l=await o.blob(),y=await createImageBitmap(l),v=ct(),b=new v.Texture({context:i,source:y,sampler:new v.Sampler({minificationFilter:v.TextureMinificationFilter.LINEAR,magnificationFilter:v.TextureMagnificationFilter.LINEAR,wrapS:v.TextureWrap.REPEAT,wrapT:v.TextureWrap.REPEAT})});if(y.close(),this.textures[t])try{this.textures[t].destroy()}catch{}this.textures[t]=b}catch{}}}function Gs(e){const{viewer:t,cloudParams:n,atmosphereParams:i,config:u}=e;let o=null,l=null,y=!1;async function v(){if(!y&&!(o!=null&&o.initialized)){if(l){await l;return}o=new Ws(t,{enabled:!!n.value.cloudsEnabled,quality:n.value.cloudQuality||"medium",...u}),l=o.init();try{await l}catch{o=null}finally{l=null}if(y&&o){o.destroy(),o=null;return}o!=null&&o.initialized&&b(n.value)}}function b(h){if(!(o!=null&&o.initialized))return;"cloudsEnabled"in h&&(h.cloudsEnabled?o.show():o.hide());const S={};"cloudCoverage"in h&&(S.coverage=Number(h.cloudCoverage)||.3),"cloudSpeed"in h&&(S.windSpeed=Number(h.cloudSpeed)||.001),"cloudBottom"in h&&(S.minHeight=Number(h.cloudBottom)||1500),"cloudTop"in h&&(S.maxHeight=Number(h.cloudTop)||2150),"cloudWindDirection"in h&&(S.windDirection=Number(h.cloudWindDirection)||90),"cloudScattering"in h&&(S.scatteringCoefficient=Number(h.cloudScattering)||1),"cloudAbsorption"in h&&(S.absorptionCoefficient=Number(h.cloudAbsorption)||0),"cloudAnisotropy1"in h&&(S.scatterAnisotropy1=Number(h.cloudAnisotropy1)||.7),"cloudAnisotropy2"in h&&(S.scatterAnisotropy2=Number(h.cloudAnisotropy2)||-.2),"cloudAnisotropyMix"in h&&(S.scatterAnisotropyMix=Number(h.cloudAnisotropyMix)||.5),"cloudSkyLight"in h&&(S.skyLightScale=Number(h.cloudSkyLight)||1),"cloudGroundBounce"in h&&(S.groundBounceScale=Number(h.cloudGroundBounce)||1),"cloudPowder"in h&&(S.powderScale=Number(h.cloudPowder)||.8),"cloudDensityScale"in h&&(S.densityScale=Number(h.cloudDensityScale)||1),"cloudShapeAmount"in h&&(S.shapeAmount=Number(h.cloudShapeAmount)||1),"cloudDetailAmount"in h&&(S.shapeDetailAmount=Number(h.cloudDetailAmount)||.5),"cloudTurbulence"in h&&(S.turbulenceDisplacement=Number(h.cloudTurbulence)||350),"cloudHazeDensity"in h&&(S.hazeDensityScale=Number(h.cloudHazeDensity)||3e-5),"cloudHazeExponent"in h&&(S.hazeExponent=Number(h.cloudHazeExponent)||.001),"cloudQuality"in h&&o.setQuality(h.cloudQuality),Object.keys(S).length>0&&o.updateUniforms(S)}const M=Te(n,h=>{if(!y){if(!(o!=null&&o.initialized)){h.cloudsEnabled&&v();return}b(h)}},{deep:!0});let D;return i&&(D=Te(i,h=>{if(y||!(o!=null&&o.initialized))return;const S={};"moonLightIntensity"in h&&(S.nightMoonIntensity=Number(h.moonLightIntensity)||0),"ambientIntensity"in h&&(S.nightAmbientIntensity=Number(h.ambientIntensity)||0),"dayNightEnabled"in h&&(S.dayLightFactor=h.dayNightEnabled?1:.5),Object.keys(S).length>0&&o.updateUniforms(S)},{deep:!0})),n.value.cloudsEnabled&&v(),function(){y=!0,M(),D==null||D(),o&&(o.destroy(),o=null),l=null}}const{getLayerIdByIndex:$s,getLayerIndexById:Jn}=oa({urlLayerOptions:sa,getLayerCategoryById:la,getLayerGroupById:ca}),on=-90,gn=1,ui=5e7;function qs({getViewer:e,getCesium:t,onCameraViewSync:n,onBasemapRestore:i}={}){const u=mi(),o=pi();let l=null;function y(r){return ua(r,u.query)}function v(){const r=String(y(yn)||"").trim(),d=ft(y("lng")),p=ft(y("lat")),m=js(y("z")),s=da(r);if(s&&d!==null&&p!==null&&m!==null){const a={lng:d,lat:p,height:m,...s};if(Qn(a))return a}const c=ha(r);return Qn(c)?c:d===null||p===null||m===null||d<-180||d>180||p<-90||p>90?null:{lng:d,lat:p,height:m,heading:ft(y("heading"))??0,pitch:ft(y("pitch"))??on,roll:ft(y("roll"))??0}}function b({duration:r=0}={}){const d=e==null?void 0:e(),p=t==null?void 0:t(),m=v();if(!(d!=null&&d.camera)||!p||!m)return!1;const s=p.Cartesian3.fromDegrees(m.lng,m.lat,m.height),c={heading:nn(p,m.heading??0),pitch:nn(p,Vs(m.pitch??on)),roll:nn(p,m.roll??0)};return Number(r)>0?(d.camera.flyTo({destination:s,orientation:c,duration:Number(r)}),!0):(d.camera.setView({destination:s,orientation:c}),!0)}function M(r){if(!r)return null;const d=Jn(r);if(d===null)return null;const p={view:jt,l:String(d)};return w(p),String(d)}function D(){const r=ft(y("l"));if(r===null)return null;const d=$s(r);return d&&(i==null||i(d)),d}function h({initialSync:r=!1,getActivePresetId:d}={}){const p=_();if(!(!(p!=null&&p.moveEnd)||l)&&(l=p.moveEnd.addEventListener(()=>{const m=d==null?void 0:d();C({activePresetId:m})}),r)){const m=d==null?void 0:d();C({activePresetId:m})}}function S(){typeof l=="function"&&l(),l=null}function C({activePresetId:r}={}){const d=t==null?void 0:t(),p=_();if(!d||!(p!=null&&p.position))return;const m=d.Cartographic.fromCartesian(p.position);if(!m)return;const s=d.Math.toDegrees(m.longitude),c=d.Math.toDegrees(m.latitude),a=Number(m.height),f=d.Math.toDegrees(Number(p.heading)||0),x=d.Math.toDegrees(Number(p.pitch)||0),L=d.Math.toDegrees(Number(p.roll)||0);if(!Number.isFinite(s)||!Number.isFinite(c)||!Number.isFinite(a))return;const R=Math.max(gn,a),z=ra({heading:f,pitch:x,roll:L});if(!z||z==="0")return;const G={view:jt,camera:{lng:s,lat:c,height:R,heading:f,pitch:x,roll:L}},P={view:jt,[yn]:z,lng:ei(s,6),lat:ei(c,6),z:Xs(R)},V=r;if(V){const Z=Jn(V);Z!==null&&(P.l=String(Z))}w(P),n==null||n(G)}function _(){var d;const r=e==null?void 0:e();return(r==null?void 0:r.camera)||((d=r==null?void 0:r.scene)==null?void 0:d.camera)||null}function T(r,d){const p=Object.keys(r).filter(s=>r[s]!==void 0&&r[s]!==null&&r[s]!==""),m=Object.keys(d).filter(s=>d[s]!==void 0&&d[s]!==null&&d[s]!=="");return p.length!==m.length?!1:m.every(s=>String(r[s]??"")===String(d[s]??""))}function w(r){const d={...En(u.query),...r};xi.forEach(m=>{m in r||delete d[m]}),Object.keys(d).forEach(m=>{const s=d[m];s==null||s===""?delete d[m]:d[m]=String(s)});const p=En(u.query);T(p,d)||o.replace({path:u.path||"/home",query:d}).catch(()=>{})}return{restoreCameraFromUrl:b,restoreBasemapFromUrl:D,syncBasemapToUrl:M,bindCameraViewSync:h,cleanupCameraViewSync:S}}function ft(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function js(e){const t=ft(e);return t===null||t<gn||t>ui?null:t}function Qn(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),i=Number(e.height),u=Number(e.heading),o=Number(e.pitch),l=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(i)&&i>=gn&&i<=ui&&Number.isFinite(u)&&Number.isFinite(o)&&o>=-90&&o<=90&&Number.isFinite(l)}function Vs(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):on}function ei(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function Xs(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function nn(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const Ne={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Ys=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Ks=new Float32Array([0,0,1,0,1,1,0,1]),Zs=new Uint16Array([0,1,2,0,2,3]);function ut(e,t,n){return Math.max(t,Math.min(n,e))}function be(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Js(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),i=Math.min(2048,n),u=Math.max(1,Math.floor(e)),o=Math.sqrt(u),l=Math.log2(o),y=Number.isFinite(l)?Math.round(l):4;let v=Math.pow(2,y);return v=ut(v,16,i),v}function Qs(e){const t=e*e,n=new Float32Array(t*4);for(let i=0;i<t;i+=1){const u=i*4;n[u]=Math.random(),n[u+1]=Math.random(),n[u+2]=Math.random(),n[u+3]=Math.random()}return n}function el(e){return new Float32Array(e*e*4)}function tl(e,t,n,i,u){const o=t.createTexture();if(!o)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,o),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,i,0,t.RGBA,t.FLOAT,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let l=!1;return{_context:e,_texture:o,_target:t.TEXTURE_2D,_width:n,_height:i,destroy(){l||(t.deleteTexture(o),l=!0)}}}class nl{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const i={...Ne,...n};this.speedFactor=be(i.speedFactor,Ne.speedFactor),this.cullSpeedMin=be(i.cullSpeedMin,Ne.cullSpeedMin),this.cullSpeedMax=be(i.cullSpeedMax,Ne.cullSpeedMax),this.windSpeedMin=be(i.windSpeedMin,Ne.windSpeedMin),this.windSpeedMax=be(i.windSpeedMax,Ne.windSpeedMax),this.arrowLength=be(i.arrowLength,Ne.arrowLength),this.trailLength=be(i.trailLength,Ne.trailLength),this.decaySpeed=be(i.decaySpeed,Ne.decaySpeed),this.alphaFactor=be(i.alphaFactor,Ne.alphaFactor),this.maxWindSpeed=be(i.maxWindSpeed,Ne.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=be(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=be(t.longitude,NaN),i=be(t.latitude,NaN),u=Array.isArray(t.altitude)?t.altitude:[],o=Array.isArray(t.sizeMesh)?t.sizeMesh:[],l=Array.isArray(t.count)?t.count:[],y=Array.isArray(t.hspeed)?t.hspeed:[],v=Array.isArray(t.hdir)?t.hdir:[],b=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(i))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const M=u.length;if(M<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(o.length!==M||l.length!==M)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const D=l.map(c=>Math.max(1,Math.floor(be(c,1)))),h=o.map(c=>Math.max(1,be(c,1))),S=u.map(c=>be(c,0)),C=D.reduce((c,a)=>c+a*a,0);if(y.length<C||v.length<C||b.length<C)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=M,this.visibleLayerMin=0,this.visibleLayerMax=M-1,this._altitudes=S.slice(),this._maxNx=Math.max(...D),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*M;const _=new Float32Array(this._atlasWidth*this._atlasHeight*4);let T=0;for(let c=0;c<M;c+=1){const a=D[c],f=a;for(let x=0;x<f;x+=1)for(let L=0;L<a;L+=1){const R=T+x*a+L,z=((c*this._maxNy+x)*this._atlasWidth+L)*4,G=Number(y[R]),P=Number(v[R]),V=Number(b[R]);if(!(Number.isFinite(G)&&Number.isFinite(P))){_[z]=0,_[z+1]=0,_[z+2]=0,_[z+3]=0;continue}const oe=P*Math.PI/180;_[z]=G*Math.sin(oe),_[z+1]=G*Math.cos(oe),_[z+2]=Number.isFinite(V)?V:0,_[z+3]=1}T+=a*f}this._createOrReplaceWindAtlasTexture(_);const w=Math.max(...h),r=this._maxNx*w,d=r/2/111320,p=i*Math.PI/180,m=Math.max(1e-6,Math.abs(Math.cos(p))),s=r/2/(111320*m);this._bounds={minLon:n-s,maxLon:n+s,minLat:i-d,maxLat:i+d,minHeight:Math.min(...S),maxHeight:Math.max(...S)},this._dataPointCount=C,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(be(t,1))),i=Js(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&i===this._particleTextureSize||(this._particleTextureSize=i,this._particleCount=i*i,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=ut(be(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const i=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(i)}setBounds(t,n,i,u){const o=be(t,NaN),l=be(n,NaN),y=be(i,NaN),v=be(u,NaN);if(!Number.isFinite(o)||!Number.isFinite(l)||!Number.isFinite(y)||!Number.isFinite(v))return;const b=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};b.minLon=Math.min(o,l),b.maxLon=Math.max(o,l),b.minLat=Math.min(y,v),b.maxLat=Math.max(y,v),this._bounds=b,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const u=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[u],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=u,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=tl(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,i=Qs(n),u=el(n);for(let o=0;o<2;o+=1){this._particlePositionTextures[o]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:i},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[o]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:u},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[o]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[o],this._velocityTextures[o]],destroyAttachments:!1});const l=this._framebuffers[o]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,l),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:Ys,usage:t.BufferUsage.STATIC_DRAW}),i=t.Buffer.createVertexBuffer({context:this._context,typedArray:Ks,usage:t.BufferUsage.STATIC_DRAW}),u=t.Buffer.createIndexBuffer({context:this._context,typedArray:Zs,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:i,componentsPerAttribute:2}],indexBuffer:u})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let i=0;i<n.length;i+=1)n[i]=i;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}`,i=`#version 300 es
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
}`;this._updateProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:i,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const t=this._Cesium,n=`#version 300 es
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
}`,i=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:i,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:t.Pass.OPAQUE})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=ut(Math.floor(be(this.visibleLayerMin,0)),0,this._layerCount-1),n=ut(Math.floor(be(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const i=Math.max(1e-4,be(this.maxWindSpeed,Ne.maxWindSpeed)),u=ut(be(t,0)/i,0,1),o=ut(be(n,i)/i,0,1);return{min:Math.min(u,o),max:Math.max(u,o)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>be(this.speedFactor,Ne.speedFactor),maxWindSpeed:()=>Math.max(1e-4,be(this.maxWindSpeed,Ne.maxWindSpeed)),decaySpeed:()=>ut(be(this.decaySpeed,Ne.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>be(this.arrowLength,Ne.arrowLength),trailLength:()=>be(this.trailLength,Ne.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>ut(be(this.alphaFactor,Ne.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function il({getViewer:e,getCesium:t,message:n}){const i=Y(null),u=Y({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function o(){var M,D;const b=e==null?void 0:e();if(i.value){try{(D=(M=b==null?void 0:b.scene)==null?void 0:M.primitives)==null||D.remove(i.value)}catch{}i.value.destroy(),i.value=null}}function l(){const b=e==null?void 0:e(),M=t==null?void 0:t();if(!b||!M){n.error("Cesium 尚未初始化");return}o();const D=al(M);i.value=new nl(b,{maxWindSpeed:20,cesium:M,speedFactor:u.value.speedFactor,arrowLength:u.value.arrowLength,trailLength:u.value.trailLength,alphaFactor:u.value.alphaFactor}),i.value.loadData(D),b.scene.primitives.add(i.value),i.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function y(){i.value&&(i.value.speedFactor=u.value.speedFactor,i.value.arrowLength=u.value.arrowLength,i.value.trailLength=u.value.trailLength,i.value.alphaFactor=u.value.alphaFactor)}function v(b,M){return b in u.value?(u.value={...u.value,[b]:Number(M)},y(),!0):!1}return{wind2D:i,windParams:u,clearWind2D:o,loadSimulatedWind:l,setWindParam:v}}function al(e){const u=[0,2e3,5e3,1e4,15e3],o=[3e4,3e4,25e3,25e3,2e4],l=[30,30,25,25,20],y=l.reduce((h,S)=>h+S*S,0),v=new Array(y),b=new Array(y),M=new Array(y);let D=0;for(let h=0;h<5;h++){const S=l[h],C=l[h],_=o[h];for(let T=0;T<C;T++)for(let w=0;w<S;w++){const r=D+T*S+w,d=(w-S/2)*(_/111320),p=(T-C/2)*(_/111320/Math.cos(e.Math.toRadians(35))),s=Math.atan2(p,d)+Math.PI/2+.2*Math.sin(w*.5)*Math.cos(T*.5);b[r]=e.Math.toDegrees(s)%360;const c=Math.sqrt(d*d+p*p),f=Math.max(0,1-c/15);v[r]=(5+h*2)*f+2*Math.random(),M[r]=.5*Math.sin(w*.3)*Math.cos(T*.3)}D+=S*C}return{longitude:104,latitude:35,altitude:u,sizeMesh:o,count:l,hspeed:v,hdir:b,vspeed:M}}const Dt=Object.freeze({LOADING:"loading",READY:"ready",ERROR:"error"});function sn(e){if(!e)return null;if(Array.isArray(e)){const[i,u,o=0]=e;return typeof i!="number"||typeof u!="number"?null:{lng:i,lat:u,height:o}}const t=e.longitude??e.lng,n=e.latitude??e.lat;return typeof t!="number"||typeof n!="number"?null:{lng:t,lat:n,height:e.height??0}}function ti(e,t){const n=sn(t.coordinates);if(!n)return null;const i=e.Cartesian3.fromDegrees(n.lng,n.lat,n.height),u=new e.HeadingPitchRoll(e.Math.toRadians(t.heading??0),e.Math.toRadians(t.pitch??0),e.Math.toRadians(t.roll??0)),o=e.Transforms.headingPitchRollToFixedFrame(i,u),l=t.scale;if(l!==void 0&&l!==1){let y=1,v=1,b=1;typeof l=="number"?y=v=b=l:typeof l=="object"&&(y=l.x??1,v=l.y??1,b=l.z??1);const M=e.Matrix4.fromScale(new e.Cartesian3(y,v,b));e.Matrix4.multiply(o,M,o)}return o}function rl({getViewer:e,getCesium:t,message:n}){const i=new Map;let u=0;const o=Y([]),l=De(()=>o.value.filter(m=>m.state===Dt.LOADING).length),y=De(()=>o.value.filter(m=>m.state===Dt.READY).length),v=De(()=>o.value.length);function b(){o.value=Array.from(i.values()).map(m=>({...m.entry}))}function M(){do u++;while(i.has(`model-${u}`));return`model-${u}`}async function D(m){var L,R,z;const s=e==null?void 0:e(),c=t==null?void 0:t();if(!s||!c)return(L=n==null?void 0:n.error)==null||L.call(n,"Cesium 尚未初始化，无法加载模型"),null;const a=m.id??M();if(i.has(a))return(R=n==null?void 0:n.error)==null||R.call(n,`模型 "${a}" 已存在，请使用其他 ID`),null;const f=sn(m.coordinates),x={id:a,name:m.name??a,url:m.url,coordinates:f,heading:m.heading??0,pitch:m.pitch??0,roll:m.roll??0,scale:m.scale??1,state:Dt.LOADING,metadata:m.metadata??{},addedAt:Date.now(),errorMessage:null};i.set(a,{primitive:null,objectUrl:null,entry:x}),b();try{const G=ti(c,{coordinates:x.coordinates,heading:x.heading,pitch:x.pitch,roll:x.roll,scale:x.scale});if(!G)throw new Error("坐标无效，无法计算模型矩阵");const P={url:m.url,modelMatrix:G,minimumPixelSize:m.minimumPixelSize??64,maximumScale:2e4,scene:s.scene};let V;if(typeof c.Model.fromGltfAsync=="function")V=await c.Model.fromGltfAsync(P);else if(typeof c.Model.fromGltf=="function")V=c.Model.fromGltf(P);else throw new Error("当前 Cesium 版本不支持 Model API");s.scene.primitives.add(V);const Z=i.get(a);Z.primitive=V;const oe=()=>{const le=i.get(a);if(le&&(le.entry.state=Dt.READY,b(),m.autoPlayAnimation!==!1))try{V.activeAnimations.addAll({loop:c.ModelAnimationLoop.REPEAT})}catch{}};return V.readyEvent?V.readyEvent.addEventListener(oe):oe(),V.errorEvent&&V.errorEvent.addEventListener(le=>{const me=i.get(a);me&&(me.entry.state=Dt.ERROR,me.entry.errorMessage=(le==null?void 0:le.message)??"模型加载异常",b())}),b(),{...x}}catch(G){const P=i.get(a);return P!=null&&P.objectUrl&&URL.revokeObjectURL(P.objectUrl),i.delete(a),b(),(z=n==null?void 0:n.error)==null||z.call(n,`模型加载失败: ${G.message}`),null}}async function h(m,s={}){const c=URL.createObjectURL(m),a=await D({...s,url:c,name:s.name??m.name.replace(/\.(glb|gltf)$/i,"")});if(a){const f=i.get(a.id);f&&(f.objectUrl=c)}else URL.revokeObjectURL(c);return a}function S(m){var a;const s=e==null?void 0:e(),c=i.get(m);if(c){if(c.primitive&&s)try{s.scene.primitives.remove(c.primitive)}catch{}if((a=c.primitive)!=null&&a.destroy)try{c.primitive.destroy()}catch{}c.objectUrl&&URL.revokeObjectURL(c.objectUrl),i.delete(m),b()}}function C(m,s={}){const c=t==null?void 0:t(),a=i.get(m);if(!a||!c)return!1;const f=a.entry;if(s.coordinates&&(f.coordinates=sn(s.coordinates)),s.heading!==void 0&&(f.heading=s.heading),s.pitch!==void 0&&(f.pitch=s.pitch),s.roll!==void 0&&(f.roll=s.roll),s.scale!==void 0&&(f.scale=s.scale),s.name&&(f.name=s.name),s.metadata&&(f.metadata={...f.metadata,...s.metadata}),a.primitive){const x=ti(c,{coordinates:f.coordinates,heading:f.heading,pitch:f.pitch,roll:f.roll,scale:f.scale});x&&(a.primitive.modelMatrix=x)}return b(),!0}function _(m,s={}){const c=e==null?void 0:e(),a=t==null?void 0:t(),f=i.get(m);if(!f||!c||!a)return;const x=f.entry.coordinates;if(!x)return;const{range:L=200,heading:R=0,pitch:z=-30,duration:G=2}=s,P=x.height+L*.3;c.camera.flyTo({destination:a.Cartesian3.fromDegrees(x.lng,x.lat,P),orientation:{heading:a.Math.toRadians(R),pitch:a.Math.toRadians(z),roll:0},duration:G})}function T(m,s,c={}){const a=i.get(m),f=t==null?void 0:t();if(!(!(a!=null&&a.primitive)||!f))try{const x=a.primitive,L=c.loop!==!1?f.ModelAnimationLoop.REPEAT:f.ModelAnimationLoop.NONE;if(s){let R=!1;const z=x.activeAnimations;for(let G=0;G<z.length;G++)if(z.get(G).name===s){z.get(G).playing=!0,R=!0;break}R||x.activeAnimations.add({name:s,loop:L,speedup:c.speedup??1})}else x.activeAnimations.addAll({loop:L,speedup:c.speedup??1})}catch{}}function w(m){const s=i.get(m);if(s!=null&&s.primitive)try{const c=s.primitive.activeAnimations;for(let a=0;a<c.length;a++)c.get(a).playing=!1}catch{}}function r(m){const s=i.get(m);return s?{...s.entry}:null}function d(m){var s;return((s=i.get(m))==null?void 0:s.primitive)??null}function p(){const m=Array.from(i.keys());for(const s of m)S(s);i.clear(),b()}return{models:o,loadingCount:l,readyCount:y,modelCount:v,addModel:D,addModelFromFile:h,removeModel:S,updateModel:C,flyToModel:_,playAnimation:T,stopAnimation:w,getModel:r,getModelPrimitive:d,dispose:p}}const an=Object.freeze({linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2});class ni{constructor(t={}){this.stiffness=t.stiffness??120,this.damping=t.damping??20,this.mass=t.mass??1,this.threshold=t.threshold??.01,this._current=0,this._target=0,this._velocity=0,this._active=!1}get current(){return this._current}get target(){return this._target}get active(){return this._active}setTarget(t){this._target=t,this._active=!0}setCurrent(t){this._current=t,this._velocity=0}update(t){if(!this._active)return this._current;const n=this._current-this._target,i=-this.stiffness*n,u=-this.damping*this._velocity,o=(i+u)/this.mass;return this._velocity+=o*t,this._current+=this._velocity*t,Math.abs(n)<this.threshold&&Math.abs(this._velocity)<this.threshold&&(this._current=this._target,this._velocity=0,this._active=!1),this._current}reset(){this._current=0,this._target=0,this._velocity=0,this._active=!1}}const vt=Object.freeze({IDLE:"idle",FLYING:"flying",CANCELLED:"cancelled"});function ol({getViewer:e,getCesium:t}){let n=0,i=null,u=null;const o=Y(vt.IDLE),l=De(()=>i);function y(){u!==null&&(cancelAnimationFrame(u),u=null),i=null,o.value=vt.CANCELLED}function v(r){const d=e==null?void 0:e(),p=t==null?void 0:t();if(!d||!p)return null;r.cancelPrevious!==!1&&y();const m=T(p,r.destination);if(!m)return null;const s=d.camera,c=s.heading,a=s.pitch,f=s.roll,x=s.positionWC.clone(),L=r.orientation??{},R=p.Math.toRadians(L.heading??p.Math.toDegrees(c)),z=p.Math.toRadians(L.pitch??p.Math.toDegrees(a)),G=p.Math.toRadians(L.roll??p.Math.toDegrees(f));let P=m.clone();if(r.maximumHeight!==void 0){const Se=p.Cartographic.fromCartesian(m);Se.height>r.maximumHeight&&(P=p.Cartesian3.fromRadians(Se.longitude,Se.latitude,r.maximumHeight))}const V=r.easing??"easeInOutCubic",Z=an[V]??an.easeInOutCubic,oe=r.duration??2.5,le=++n;i=le,o.value=vt.FLYING;let me=null;function he(Se){var ge,Ae;if(i!==le)return;me===null&&(me=Se);const Ce=(Se-me)/1e3,Le=Math.min(Ce/oe,1),U=Z(Le),W=p.Cartesian3.lerp(x,P,U,new p.Cartesian3),H=w(c,R,U),pe=a+(z-a)*U,Oe=f+(G-f)*U;s.setView({destination:W,orientation:{heading:H,pitch:pe,roll:Oe}}),(ge=r.onTick)==null||ge.call(r,Le,W),Le<1?u=requestAnimationFrame(he):(u=null,i===le&&(i=null,o.value=vt.IDLE,(Ae=r.onComplete)==null||Ae.call(r)))}return u=requestAnimationFrame(he),le}function b(r,d,p=1e3,m={}){return v({...m,destination:{longitude:r,latitude:d,height:p}})}function M(r,d,p={}){const m=e==null?void 0:e(),s=t==null?void 0:t();if(!m||!s)return null;const c=s.Cartesian3.fromDegrees(r.longitude,r.latitude,r.height),a=s.Cartesian3.fromDegrees(d.longitude,d.latitude,d.height),f=s.Cartesian3.subtract(a,c,new s.Cartesian3);s.Cartesian3.normalize(f,f);const x=Math.atan2(f.x,f.y),L=Math.asin(f.z);return v({...p,destination:r,orientation:{heading:s.Math.toDegrees(x),pitch:s.Math.toDegrees(L),roll:0}})}function D(r,d={}){const p=e==null?void 0:e(),m=t==null?void 0:t();if(!p||!m)return null;const s=new m.Rectangle.fromDegrees(r.west,r.south,r.east,r.north),c=m.Rectangle.center(s),f=m.Math.toDegrees(s.east-s.west)*.8;return v({...d,destination:{longitude:m.Math.toDegrees(c.longitude),latitude:m.Math.toDegrees(c.latitude),height:Math.max(f*111e3,1e3)},orientation:{heading:0,pitch:-45,roll:0}})}function h(r){const d=e==null?void 0:e(),p=t==null?void 0:t();if(!d||!p)return null;y();const m=new ni(r.spring),s=p.Cartographic.fromCartesian(d.camera.positionWC);m.setCurrent(s.height),m.setTarget(r.targetHeight);const c=++n;i=c,o.value=vt.FLYING;let a=null;function f(x){var G;if(i!==c)return;if(a===null){a=x;return}const L=(x-a)/1e3;a=x;const R=m.update(L),z=p.Cartesian3.fromRadians(s.longitude,s.latitude,R);d.camera.setView({destination:z,orientation:{heading:d.camera.heading,pitch:d.camera.pitch,roll:d.camera.roll}}),m.active?u=requestAnimationFrame(f):(u=null,i===c&&(i=null,o.value=vt.IDLE,(G=r.onComplete)==null||G.call(r)))}return u=requestAnimationFrame(f),c}function S(){const r=e==null?void 0:e(),d=t==null?void 0:t();if(!r||!d)return null;const p=d.Cartographic.fromCartesian(r.camera.positionWC);return{longitude:d.Math.toDegrees(p.longitude),latitude:d.Math.toDegrees(p.latitude),height:p.height,heading:d.Math.toDegrees(r.camera.heading),pitch:d.Math.toDegrees(r.camera.pitch),roll:d.Math.toDegrees(r.camera.roll)}}function C(r=6){const d=S();if(!d)return"--";const p=d.longitude>=0?"E":"W",m=d.latitude>=0?"N":"S";return`${Math.abs(d.longitude).toFixed(r)}°${p}, ${Math.abs(d.latitude).toFixed(r)}°${m}, ${d.height.toFixed(1)}m`}function _(){y()}function T(r,d){if(!d)return null;if(d instanceof r.Cartesian3)return d;if(Array.isArray(d)){const[s,c,a=0]=d;return r.Cartesian3.fromDegrees(s,c,a)}const p=d.longitude??d.lng,m=d.latitude??d.lat;return typeof p=="number"&&typeof m=="number"?r.Cartesian3.fromDegrees(p,m,d.height??0):null}function w(r,d,p){let m=d-r;for(;m>Math.PI;)m-=2*Math.PI;for(;m<-Math.PI;)m+=2*Math.PI;return r+m*p}return{flightState:o,currentFlightId:l,enhancedFlyTo:v,cancelFlight:y,flyToPosition:b,flyToAndLookAt:M,flyToRectangle:D,springToHeight:h,SpringController:ni,getCameraState:S,getFormattedPosition:C,cleanup:_,EasingFunctions:an}}function Lt(e,t){return{longitude:e.Math.toDegrees(t.longitude),latitude:e.Math.toDegrees(t.latitude),height:t.height}}function ii(e,t){if(!t)return null;if(t instanceof e.Cartographic)return t;if(Array.isArray(t)){const[u,o,l=0]=t;return e.Cartographic.fromDegrees(u,o,l)}const n=t.longitude??t.lng,i=t.latitude??t.lat;return typeof n=="number"&&typeof i=="number"?e.Cartographic.fromDegrees(n,i,t.height??0):null}class sl{constructor(t,n){this.data=t,this.timestamp=n}isExpired(t){return Date.now()-this.timestamp>t}}function ll({getViewer:e,getCesium:t}){const n=new Map,i=300*1e3,u=5,o=Y(!1),l=Y(0);function y(w,r){return`${w.toFixed(u)},${r.toFixed(u)}`}function v(w,r){const d=y(w,r),p=n.get(d);return p&&!p.isExpired(i)?{...p.data}:(p&&n.delete(d),null)}function b(w){const r=y(w.longitude,w.latitude);n.set(r,new sl({...w},Date.now()))}function M(){n.clear()}function D(w){const r=e==null?void 0:e(),d=t==null?void 0:t();if(!r||!d||!w)return null;const{x:p,y:m}=w,s=r.camera.getPickRay(new d.Cartesian2(p,m));if(!s)return null;const c=r.scene.pickPositionSupported?r.scene.pickPosition(new d.Cartesian2(p,m)):r.scene.globe.pick(s,r.scene);if(!c){const f=r.scene.globe.ellipsoid,x=r.scene.camera.pickEllipsoid(new d.Cartesian2(p,m),f);if(!x)return null;const L=d.Cartographic.fromCartesian(x);return Lt(d,L)}const a=d.Cartographic.fromCartesian(c);return Lt(d,a)}async function h(w,r={}){const{maxRetries:d=3,retryDelay:p=200}=r;for(let m=0;m<d;m++){const s=D(w);if(s)return s;m<d-1&&await new Promise(c=>setTimeout(c,p))}return null}function S(w,r={}){const d=e==null?void 0:e(),p=t==null?void 0:t();if(!d||!p)return null;const m=ii(p,w);if(!m)return null;const s=p.Math.toDegrees(m.longitude),c=p.Math.toDegrees(m.latitude);if(r.useCache!==!1){const a=v(s,c);if(a)return a}try{const a=r.terrainDetailLevel??0,f=[m],x=a===0?p.sampleTerrain(d.terrainProvider,0,f):p.sampleTerrainMostDetailed(d.terrainProvider,f);if(x&&x.length>0){const L=Lt(p,x[0]);return b(L),L}}catch{}return null}async function C(w,r={}){const d=e==null?void 0:e(),p=t==null?void 0:t();if(!d||!p||!(w!=null&&w.length))return[];o.value=!0,l.value=0;try{const m=[],s=[],c=[];for(let a=0;a<w.length;a++){const f=ii(p,w[a]);if(!f){m.push(null);continue}const x=p.Math.toDegrees(f.longitude),L=p.Math.toDegrees(f.latitude);if(r.useCache!==!1&&!r.skipCached){const R=v(x,L);if(R){m.push(R);continue}}m.push(null),s.push(f),c.push(a)}if(s.length===0)return l.value=1,m;try{const a=d.terrainProvider,f=a._bottomLevel?Math.max(0,a._bottomLevel-1):Math.min(a.maximumLevel??12,12),x=await p.sampleTerrain(a,f,s);for(let L=0;L<x.length;L++){const R=Lt(p,x[L]);m[c[L]]=R,b(R),r.onProgress&&r.onProgress(L+1,s.length),l.value=(L+1)/s.length}}catch{for(let f=0;f<s.length;f++){try{const x=s[f],L=p.sampleTerrain(d.terrainProvider,17,[x]),R=L instanceof Promise?await L:L;if((R==null?void 0:R.length)>0){const z=Lt(p,R[0]);m[c[f]]=z,b(z)}}catch{}r.onProgress&&r.onProgress(f+1,s.length),l.value=(f+1)/s.length}}return m}finally{o.value=!1}}async function _(w,r={}){if(!(t==null?void 0:t()))return null;const{west:p,south:m,east:s,north:c}=w,a=Math.max(2,Math.ceil(Math.sqrt(r.sampleCount??9))),f=[];for(let P=0;P<a;P++)for(let V=0;V<a;V++){const Z=p+(s-p)*(V/(a-1)),oe=m+(c-m)*(P/(a-1));f.push([Z,oe])}const L=(await C(f,{useCache:!0})).filter(P=>P!==null).map(P=>P.height);if(L.length===0)return null;const R=Math.min(...L),z=Math.max(...L),G=L.reduce((P,V)=>P+V,0)/L.length;return{min:R,max:z,avg:G}}function T(){M(),o.value=!1,l.value=0}return{isSampling:o,samplingProgress:l,pickCartographic:D,pickCartographicWithRetry:h,sampleHeight:S,sampleHeightMostDetailed:C,queryHeightRange:_,clearCache:M,cleanup:T}}const cl={url:"./glb/player/UAL1_Standard.glb",scale:.01,idleAnim:"Idle_Loop",walkAnim:"Walk_Loop",runAnim:"Sprint_Loop",jumpAnim:["Jump_Start","Jump_Loop","Jump_Land"],flyAnim:"fly",flyIdleAnim:"flyIdle",flyHoverForwardAnim:"flyHoverForward",flyHoverBackAnim:"flyHoverBack",flyHoverLeftAnim:"flyHoverLeft",flyHoverRightAnim:"flyHoverRight",flyHoverUpAnim:"flyHoverUp",flyHoverDownAnim:"flyHoverDown",rotateY:-Math.PI/2,facingOffset:Math.PI/2},ul={gravity:-2400,jumpHeight:600,speed:300,flySpeed:55e3,acceleration:30,deceleration:30},dl={minCamDistance:100,maxCamDistance:800,camLookAtHeightRatio:.8,thirdMouseMode:1,enableZoom:!0,enableOverShoulderView:!1,isFirstPerson:!1,enableSpringCamera:!0,springCameraTime:.015},hl={forward:["KeyW","ArrowUp"],backward:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],toggleView:["KeyV"],toggleFly:["KeyF"]},fl=5;function ml(e){return e?!!(e.availability||e.requestWaterMask!==void 0||e.requestVertexNormals!==void 0):!1}function pl({getViewer:e,getCesium:t,message:n}){const i=Y(!1),u=Y(!1),o=Y(!1),l=Y(null),y=Y(0);let v=null,b=null;async function M(_={}){var r,d,p,m;const T=e(),w=t();if(!T||!w){(r=n==null?void 0:n.error)==null||r.call(n,"Cesium 未初始化");return}if(i.value&&!v&&(i.value=!1,u.value=!1,o.value=!1),!i.value)try{(d=n==null?void 0:n.info)==null||d.call(n,"正在加载漫游控制器...");const{playerController:s}=await Wt(async()=>{const{playerController:Se}=await import("./index-CSfZV33j.js");return{playerController:Se}},__vite__mapDeps([16,2,3,5,8,9,10,11,12,13,7,14,15,17,18,19,20]),import.meta.url);let c=_.initPos,a=0,f=!0;const x=T.camera,L=w.Cartographic.fromCartesian(x.position);if(!c){let Se=500;const Ce=T.terrainProvider;if(ml(Ce)){const Le=Ce,U=Le._bottomLevel?Math.max(0,Le._bottomLevel-1):Math.min(Le.maximumLevel??12,12);let W=null;try{W=await w.sampleTerrain(Ce,U,[L])}catch{}W&&W[0]&&w.defined(W[0].height)?(a=W[0].height,Se=a+500,f=!1):(Se=L.height>0?L.height+500:500,f=!1)}c=w.Cartesian3.fromRadians(L.longitude,L.latitude,Se)}let R=_.staticCollider;const z=.03;let G={lon:L.longitude,lat:L.latitude};!R&&!f&&(R=[{type:"terrain",rectangle:[L.longitude-z,L.latitude-z,L.longitude+z,L.latitude+z],resolution:64}]);const P={...dl};f&&(P.isFirstPerson=!1);const V={...cl,...ul,..._.modelConfig},Z=new s;await Z.init({viewer:T,initPos:c,playerModelConfig:V,staticCollider:R,...P,mouseSensitivity:fl,keyMap:hl,isShowMobileControls:!1}),f&&(Z.isFlying=!0),v=Z;const oe=5,le=z*.6;let me=!1,he=performance.now();b=T.scene.preUpdate.addEventListener(()=>{const Se=performance.now(),Ce=(Se-he)/1e3;he=Se,Z.update(Ce);const Le=Z.getPosition(),U=w.Cartographic.fromCartesian(Le),W=f?oe:a+oe;U.height<W&&Z.reset(w.Cartesian3.fromRadians(U.longitude,U.latitude,W)),l.value={lng:w.Math.toDegrees(U.longitude),lat:w.Math.toDegrees(U.latitude),height:U.height};const H=Z.getVelocity();if(y.value=Math.hypot(H.e,H.n,H.u),!f&&!me){const pe=Math.abs(U.longitude-G.lon),Oe=Math.abs(U.latitude-G.lat);if(pe>le||Oe>le){me=!0;const ge=U.longitude,Ae=U.latitude;G={lon:ge,lat:Ae},Z.physics.clearStaticColliders(),Z.physics.addStaticColliders(T,{type:"terrain",rectangle:[ge-z,Ae-z,ge+z,Ae+z],resolution:64}).then(async()=>{try{const Be=T.terrainProvider,We=new w.Cartographic(ge,Ae,0),Re=Be._bottomLevel?Math.max(0,Be._bottomLevel-1):Math.min(Be.maximumLevel??12,12),Ue=await w.sampleTerrain(Be,Re,[We]);Ue&&Ue[0]&&w.defined(Ue[0].height)&&(a=Ue[0].height)}catch{}me=!1}).catch(()=>{me=!1})}}}),Z.onViewChange=Se=>{u.value=Se},Z.onGroundChange=()=>{o.value=Z.getIsFlying()},i.value=!0,u.value=Z.getIsFirstPerson(),o.value=Z.getIsFlying(),(p=n==null?void 0:n.success)==null||p.call(n,"漫游模式已启动（WASD 移动 / V 切视角 / F 飞行）")}catch(s){(m=n==null?void 0:n.error)==null||m.call(n,`漫游模式启动失败: ${s.message||"未知错误"}`),D()}}function D(){if(b&&(b(),b=null),v){try{v.destroy()}catch{}v=null}const _=e();if(_){const T=_.scene.screenSpaceCameraController;T.enableRotate=!0,T.enableTranslate=!0,T.enableZoom=!0,T.enableTilt=!0,T.enableLook=!0}i.value=!1,u.value=!1,o.value=!1,l.value=null,y.value=0}function h(_){var T;i.value?(D(),(T=n==null?void 0:n.info)==null||T.call(n,"漫游模式已停止")):M(_)}function S(){v&&(v.changeView(),u.value=v.getIsFirstPerson())}function C(){return v}return{isActive:i,isFirstPerson:u,isFlying:o,playerPosition:l,playerSpeed:y,startPlayer:M,stopPlayer:D,togglePlayer:h,changeView:S,getPlayerInstance:C}}const gl={key:0,class:"player-guide"},vl={class:"guide-pill"},yl={class:"pill-label"},xl={key:0,class:"pill-fly"},bl={__name:"PlayerGuidePanel",props:{visible:{type:Boolean,default:!1},isFirstPerson:{type:Boolean,default:!1},isFlying:{type:Boolean,default:!1}},emits:["close"],setup(e){return(t,n)=>(ae(),Xe(vi,{name:"guide-slide"},{default:gi(()=>[e.visible?(ae(),ce("div",gl,[A("div",vl,[A("span",{class:He(["pill-dot",{fp:e.isFirstPerson}])},null,2),A("span",yl,ye(e.isFirstPerson?"第一人称":"第三人称"),1),e.isFlying?(ae(),ce("span",xl,"✈")):xe("",!0),A("button",{class:"pill-close",title:"关闭提示",onClick:n[0]||(n[0]=i=>t.$emit("close"))},"✕")]),n[1]||(n[1]=A("div",{class:"guide-keys"},[A("span",{class:"key-group"},[A("kbd",null,"W"),A("kbd",null,"A"),A("kbd",null,"S"),A("kbd",null,"D"),A("em",null,"移动")]),A("span",{class:"key-sep"}),A("span",{class:"key-group"},[A("kbd",null,"⇧"),A("em",null,"跑"),A("kbd",null,"␣"),A("em",null,"跳")]),A("span",{class:"key-sep"}),A("span",{class:"key-group"},[A("kbd",null,"V"),A("em",null,"视角"),A("kbd",null,"F"),A("em",null,"飞行")]),A("span",{class:"key-sep"}),A("span",{class:"key-group"},[A("span",{class:"key-mouse"},"🖱"),A("em",null,"旋转")])],-1))])):xe("",!0)]),_:1}))}},_l=dt(bl,[["__scopeId","data-v-6190d367"]]),Sl={key:4,class:"drag-overlay"},wl={class:"map-controls-group"},Tl={class:"mouse-position-content"},Ml={__name:"CesiumContainer",emits:["view-sync"],setup(e,{expose:t,emit:n}){let i=null,u=null,o=!1;const l=cn(),y=n,v=Y(!0),b=Y(!1),M=Y(null),D=Y(Si()),h=()=>u,S=()=>i||window.Cesium,C=()=>D.value.tiandituTk,_=()=>D.value.cesiumIonToken,T=ds({getViewer:h,getCesium:S,message:l,backendBaseUrl:_i,tiandituToken:C,cesiumIonToken:_}),{activeBasemap:w,activeTerrain:r,customXyzBasemapUrl:d,basemapOptions:p,terrainOptions:m,overlayOptions:s,createImageryProviderViewModels:c,createTerrainProviderViewModels:a,getSelectedImageryProviderViewModel:f,getSelectedTerrainProviderViewModel:x,bindLayerPickerStateSync:L,addBaseImageryLayers:R,initCustomTerrain:z,handleOverlayToggle:G,handleCustomBasemapSubmit:P,cleanupLayers:V}=T;Te(w,(O,j)=>{!O||O===j||Le(O)});const{coordinateDisplay:Z,setupInteractions:oe,cleanupInteractions:le}=ns({getViewer:h,getCesium:S}),{installCreditHider:me,cleanupCreditHider:he}=ts({getViewer:h}),{restoreCameraFromUrl:Se,restoreBasemapFromUrl:Ce,syncBasemapToUrl:Le,bindCameraViewSync:U,cleanupCameraViewSync:W}=qs({getViewer:h,getCesium:S,onCameraViewSync:O=>y("view-sync",O),onBasemapRestore:O=>{O&&w.value!==O&&(w.value=O)}}),H=_s({getViewer:h,getCesium:S,message:l}),{flyToHome:pe}=H,Oe=il({getViewer:h,getCesium:S,message:l}),ge=ws({getViewer:h,getCesium:S,message:l}),Ae=rl({getViewer:h,getCesium:S,message:l}),Be=ol({getViewer:h,getCesium:S}),We=ll({getViewer:h,getCesium:S}),Re=pl({getViewer:h,getCesium:S,message:l}),Ue=De(()=>{const O=Re.playerPosition.value;if(O){const j=O.lng.toFixed(6),ee=O.lat.toFixed(6),ue=O.height.toFixed(2),Me=Re.playerSpeed.value,ke=Me>.1?` | 速度: ${Me.toFixed(1)} m/s`:"";return`经度: ${j}, 纬度: ${ee}, 海拔: ${ue}米${ke} (漫游)`}return Z.value});Te(()=>Re.isActive.value,O=>{O&&(v.value=!0,k.value=!1)}),t({getViewer:h,getCesium:S,modelManager:Ae,cameraEnhanced:Be,heightSampler:We,playerController:Re});const Ye=De(()=>ge.loadedDataSources.value),je=De(()=>ge.pendingGltfFile.value),Ie=Y(!1);function Ge(O){Ie.value=!0,O.dataTransfer&&(O.dataTransfer.dropEffect="copy")}function $e(O){const j=O==null?void 0:O.relatedTarget,ee=O==null?void 0:O.currentTarget;j instanceof Node&&ee instanceof Node&&ee.contains(j)||(Ie.value=!1)}async function N(O){var ee;if(Ie.value=!1,!b.value)return;const j=(ee=O.dataTransfer)==null?void 0:ee.files;if(!(!j||j.length===0))for(const ue of j)try{await ge.loadDataFile(ue)}catch{}}const{toolPanelOpen:k,advancedEffectControls:J,fluidParams:Q,baseAtmosphereParams:re,atmosphereParams:B,cloudParams:K,shallowWaterVisible:ie,shallowWaterParams:ne,toolModules:fe,handleToolAction:Pe,handleToolControlChange:Ee,handleFluidStateChange:we,cleanupTools:Ze}=Ms({fluidPanelRef:M,sceneActions:H,wind:Oe,modelManager:Ae,cameraEnhanced:Be,heightSampler:We,playerController:Re});async function F(){o=!1,oi("正在初始化 3D 场景...");try{let O=0,j=1;for(;O<j;)try{if(D.value=await bi({silent:!1,force:O>0}),j=Math.max(j,Array.isArray(D.value.tiandituTokens)?D.value.tiandituTokens.length:1,Array.isArray(D.value.cesiumIonTokens)?D.value.cesiumIonTokens.length:1,1),i=await $o({ionToken:_()}),o||!i||!document.getElementById("cesiumContainer"))return;te(),oe();const ee=R(),ue=await z();if(o){I();return}if(b.value=!0,U({initialSync:!1,getActivePresetId:()=>w.value}),Ce(),ee&&ue){l.success("天地图基础影像与地形加载成功。");return}const Me=ee?{switched:!1}:Vt("tianditu_tk"),ke=ue?{switched:!1}:Vt("cesium_ion_token");if(!(Me.switched||ke.switched)){l.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}D.value=ke.switched?ke.tokens:Me.tokens,I(),O+=1,l.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(ee){const ue=Vt("cesium_ion_token");if(!ue.switched)throw ee;D.value=ue.tokens,I(),O+=1,l.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}l.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(O){l.error("Cesium 运行时加载失败",O),l.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{si()}}function I(){if(b.value=!1,W(),le(),V(),he(),$&&($(),$=null),!!u){try{u.destroy()}catch{}u=null}}let $=null;function te(){var ue;const O=typeof i.Map=="function"?i.Map:i.Viewer,j=c(),ee=a();u=new O("cesiumContainer",{baseLayerPicker:!0,geocoder:((ue=i.IonGeocodeProviderType)==null?void 0:ue.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:j,selectedImageryProviderViewModel:f(j),terrainProviderViewModels:ee,selectedTerrainProviderViewModel:x(ee),shouldAnimate:!0}),u.scene.debugShowFramesPerSecond=!0,u.scene.globe.terrainExaggeration=1,u.scene.globe.terrainExaggerationRelativeHeight=0,Ko(u,i),_a(u),me(),L(),Se({duration:0})||pe(0);try{const{cleanup:Me}=Gs({viewer:u,cloudParams:K,atmosphereParams:B});$=Me}catch{}}ln(()=>{F()});async function se({files:O}){for(const j of O)try{await ge.loadDataFile(j)}catch{}}function ve({id:O}){ge.removeDataSource(O)}function g(){ge.clearAllDataSources()}async function E(O){try{await ge.loadGltfWithUserCoords(O)}catch{}}function q(){ge.cancelPendingGltf()}$t(()=>{if(o=!0,b.value=!1,W(),le(),Ze(),V(),Ae.dispose(),Be.cleanup(),We.cleanup(),$&&($(),$=null),he(),ge.clearAllDataSources(),u){try{u.destroy()}catch{}u=null}}),Te(b,O=>{O&&X(re.value)});function X(O){var ue;if(!u||!i)return;const j=u.scene,ee=j.globe;ee&&(ee.enableLighting=O.enableLighting,ee.showGroundAtmosphere=O.showGroundAtmosphere,"dynamicAtmosphereLighting"in ee&&(ee.dynamicAtmosphereLighting=O.dynamicAtmosphereLighting),"dynamicAtmosphereLightingFromSun"in ee&&(ee.dynamicAtmosphereLightingFromSun=O.dynamicAtmosphereLightingFromSun),"atmosphereLightIntensity"in ee&&(ee.atmosphereLightIntensity=O.atmosphereLightIntensity),"atmosphereHueShift"in ee&&(ee.atmosphereHueShift=O.atmosphereHueShift),"atmosphereSaturationShift"in ee&&(ee.atmosphereSaturationShift=O.atmosphereSaturationShift),"atmosphereBrightnessShift"in ee&&(ee.atmosphereBrightnessShift=O.atmosphereBrightnessShift),"lightingFadeInDistance"in ee&&(ee.lightingFadeInDistance=O.lightingFadeInDistance),"lightingFadeOutDistance"in ee&&(ee.lightingFadeOutDistance=O.lightingFadeOutDistance),"nightFadeInDistance"in ee&&(ee.nightFadeInDistance=O.nightFadeInDistance),"nightFadeOutDistance"in ee&&(ee.nightFadeOutDistance=O.nightFadeOutDistance)),j.fog&&(j.fog.enabled=O.fogEnabled,"density"in j.fog&&(j.fog.density=O.fogDensity),"minimumBrightness"in j.fog&&(j.fog.minimumBrightness=O.fogMinimumBrightness)),j.sun&&(j.sun.show=O.sunShow),j.moon&&(j.moon.show=O.moonShow),j.skyBox&&(j.skyBox.show=O.skyBoxShow),(ue=j.requestRender)==null||ue.call(j)}return Te(re,O=>{X(O)},{deep:!0}),(O,j)=>{var ee;return ae(),ce(rt,null,[A("div",{id:"cesiumContainer",class:"cesium-container",onDragover:xt(Ge,["prevent"]),onDragleave:xt($e,["prevent"]),onDrop:xt(N,["prevent"])},null,32),b.value?(ae(),Xe(pt(Na),{key:0,headless:"","get-viewer":h,"get-cesium":S,controls:de(J)},null,8,["controls"])):xe("",!0),b.value?(ae(),Xe(pt(Po),{key:1,ref_key:"fluidPanelRef",ref:M,headless:"","get-viewer":h,"get-cesium":S,params:de(Q),onStateChange:de(we)},null,40,["params","onStateChange"])):xe("",!0),b.value?(ae(),Xe(Uo,yi({key:2,visible:de(ie)},de(ne)),null,16,["visible"])):xe("",!0),b.value?(ae(),Xe(to,{key:3,open:de(k),"onUpdate:open":j[0]||(j[0]=ue=>qt(k)?k.value=ue:null),"active-basemap":de(w),"onUpdate:activeBasemap":j[1]||(j[1]=ue=>qt(w)?w.value=ue:null),"active-terrain":de(r),"onUpdate:activeTerrain":j[2]||(j[2]=ue=>qt(r)?r.value=ue:null),"basemap-options":de(p),"terrain-options":de(m),"overlay-options":de(s),"custom-basemap-url":de(d),modules:de(fe),"loaded-data-sources":Ye.value,onModuleAction:de(Pe),onControlChange:de(Ee),onOverlayToggle:de(G),onCustomBasemapSubmit:de(P),onDataImport:se,onDataRemove:ve,onDataClearAll:g},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):xe("",!0),Fe(_l,{visible:de(Re).isActive.value&&v.value,"is-first-person":de(Re).isFirstPerson.value,"is-flying":de(Re).isFlying.value,onClose:j[3]||(j[3]=ue=>v.value=!1)},null,8,["visible","is-first-person","is-flying"]),Fe(vo,{visible:!!je.value,"file-name":((ee=je.value)==null?void 0:ee.name)||"",onConfirm:E,onCancel:q},null,8,["visible","file-name"]),Ie.value&&b.value?(ae(),ce("div",Sl,[Fe(de(rn),{size:48,"stroke-width":"1.5"}),j[5]||(j[5]=A("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),j[6]||(j[6]=A("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):xe("",!0),A("div",wl,[A("div",Tl,ye(Ue.value),1),j[8]||(j[8]=A("div",{class:"divider"},null,-1)),A("button",{class:"home-btn",title:"回到初始位置",onClick:j[4]||(j[4]=(...ue)=>de(pe)&&de(pe)(...ue))},[...j[7]||(j[7]=[A("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[A("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},Dl=dt(Ml,[["__scopeId","data-v-292b1a76"]]),Il=Object.freeze(Object.defineProperty({__proto__:null,default:Dl},Symbol.toStringTag,{value:"Module"}));export{Il as C,ml as h};
