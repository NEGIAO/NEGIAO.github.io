const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-DhdyNrDC.js","./vendor-libs-BH3wVxJ6.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-B0CS5TVG.js","./index-BlQNMpty.js","./vendor-vue-CFdjHPJG.js","./vendor-ol-all-sRFWUzaL.js","./vendor-axios-Bdz_Fv8M.js","./vendor-ol-all-BtPuoxOl.css","./index-DduL8x4O.css","./index-DoE1naZT.js","./cesium-shim-Dw1YPcub.js","./index-CrsoUpNy.js","./HomeView-Bhf0sAB9.js","./vendor-lucide-B5gJ9S06.js","./vectorUtils-Ds50OJUZ.js","./textDecoder-CXjJWEkX.js","./HomeView-DB_Au80k.css"])))=>i.map(i=>d[i]);
var Pi=Object.defineProperty;var Ai=(e,t,n)=>t in e?Pi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var rt=(e,t,n)=>Ai(e,typeof t!="symbol"?t+"":t,n);import{w as Ae,v as yi,d as te,c as ue,W as bi,r as X,C as yn,o as Zt,f as x,t as _e,a as ze,G as it,V as gt,g as xe,q as Ce,u as pe,F as ut,e as ht,n as Xe,x as Ze,P as yt,I as qt,i as bt,H as jt,z as Ci,B as Ei,A as Ri,b as bn,y as xn,O as Ii,a5 as ki,a4 as Jt}from"./vendor-vue-CFdjHPJG.js";import{_ as ot,h as Sn,Q as xi,R as Si,e as Qt,f as En,U as zi,x as Ni,v as Oi,z as en,S as Hi,y as Bi}from"./index-BlQNMpty.js";import{E as _n,F as Rn,v as It,B as Wi,G as Ui,H as Gi,I as _i,J as $i,K as qi,L as In,M as ji,N as Vi,O as Yi}from"./HomeView-Bhf0sAB9.js";import{_ as zt}from"./vendor-runtime-Dp1pzeXC.js";import{G as Xi}from"./vendor-lilgui-ChXhAV4w.js";import{v as tn,w as nn,x as Ki,X as kn,a as an,y as mn,z as Ht,q as zn,E as Zi,F as wi,H as Nn,I as On,s as rn,i as Hn,u as Ji,J as Vt,K as Qi,Q as ea,V as ta,W as na,g as ia,Y as Bt,G as Bn}from"./vendor-lucide-B5gJ9S06.js";import{C as wn,R as Tn,N as Ti,L as Wn,S as aa,a as ra,b as Un,V as on,W as oa,A as sa,P as la,M as Wt,c as st,d as ca,e as Gn,f as Dt,B as ua,g as Lt,h as da,i as ha,j as fa,G as ma,D as pa,H as va,k as $n,l as qn,m as ga,n as ya,o as ba,p as xa,q as Sa,r as _a,s as wa,U as Ta,t as Ma,u as jn,O as Da,T as La,v as Fa}from"./vendor-three-BvVJB9fv.js";import{a as Pa}from"./vendor-codec-DD0reNSo.js";import{d as Aa}from"./vectorUtils-Ds50OJUZ.js";const Xt=new Map;function Ca(e){const t=Xt.get(e);t&&t.abort();const n=new AbortController;return Xt.set(e,n),n}function Ea(){Xt.forEach(e=>{e.abort()}),Xt.clear()}function Ra(e){const t=e.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!t)return/\{s\}/i.test(e)?{url:e,subdomains:["a","b","c"]}:{url:e,subdomains:[]};const n=t[1].charCodeAt(0),i=t[2].charCodeAt(0),l=[];for(let r=n;r<=i;r++)l.push(String.fromCharCode(r));return{url:e.replace(t[0],"{s}"),subdomains:l}}function Ia(e){return e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function ka(e,t){let n=e;return t.tiandituTk&&(n=n.replace(/\{tiandituTk\}/g,t.tiandituTk)),t.customUrl&&(n=n.replace(/\{customUrl\}/g,t.customUrl)),n}function za(e,t,n){if(!e||!t)return null;const l=Ca(t.id).signal,{serviceType:r}=t;let s=ka(t.url,n);if(r==="custom"){if(!n.customUrl)return null;s=n.customUrl}if(t.nonStandardAdapter||r==="vector-tile")return null;const{subdomains:b}=Ra(s),g=Ia(s),S=t.subdomains||b,T=t.maxZoom||18;try{let P=null;if(l.aborted)return null;switch(r){case"wms":{if(typeof e.WebMapServiceImageryProvider!="function")return null;const f=t.wms;if(!(f!=null&&f.layers))return null;P=new e.WebMapServiceImageryProvider({url:g||t.url,layers:f.layers,parameters:{version:f.version||"1.1.1",srs:f.srs||"EPSG:3857",format:f.format||"image/png",styles:f.styles||"",transparent:f.transparent!==!1}});break}case"wmts":{if(typeof e.WebMapTileServiceImageryProvider!="function")return null;const f=t.wmts;if(!(f!=null&&f.layer)||!f.matrixSet)return null;P=new e.WebMapTileServiceImageryProvider({url:g||t.url,layer:f.layer,style:f.style||"default",format:f.format||"image/png",tileMatrixSetID:f.matrixSet,maximumLevel:T});break}case"osm":{typeof e.OpenStreetMapImageryProvider=="function"?P=new e.OpenStreetMapImageryProvider({maximumLevel:T}):P=new e.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:T});break}default:{if(!g||!(g.includes("{z}")||g.includes("{x}")||g.includes("{y}")||g.includes("{reverseY}")))return null;P=new e.UrlTemplateImageryProvider({url:g,subdomains:S.length>0?S:void 0,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:T,enablePickFeatures:!1});break}}if(l.aborted){if(P&&typeof P.destroy=="function")try{P.destroy()}catch{}return null}return P&&(P._descriptorId=t.id),P}catch{return null}}function Na(e,t,n){if(!e||!Array.isArray(t))return[];const i=[];for(const l of t){const r=_n(l);if(!r)continue;const s=za(e,r,n);s&&i.push(s)}return i}function Oa(e){var i;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(i=t.requestRender)==null||i.call(t))}function Ha(e,t){var r;const n=e==null?void 0:e.scene,i=n==null?void 0:n.globe;if(!n||!i)return;Ua(n,t),Ga(n),i.enableLighting=!0,i.showGroundAtmosphere=!0,Te(i,"dynamicAtmosphereLighting",!0),Te(i,"dynamicAtmosphereLightingFromSun",!0),Te(i,"atmosphereLightIntensity",5.5),Te(i,"atmosphereHueShift",-.015),Te(i,"atmosphereSaturationShift",.08),Te(i,"atmosphereBrightnessShift",.02),Te(i,"lightingFadeInDistance",15e6),Te(i,"lightingFadeOutDistance",22e6),Te(i,"nightFadeInDistance",9e6),Te(i,"nightFadeOutDistance",16e6),Ut(t,i,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Ut(t,i,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),Te(i,"atmosphereRayleighScaleHeight",1e4),Te(i,"atmosphereMieScaleHeight",3200),Te(i,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=qa(t));const l=n.skyAtmosphere;l&&(l.show=!0,Te(l,"perFragmentAtmosphere",!0),Te(l,"dynamicAtmosphereLighting",!0),Te(l,"dynamicAtmosphereLightingFromSun",!0),Te(l,"hueShift",-.025),Te(l,"saturationShift",.08),Te(l,"brightnessShift",.03),Te(l,"atmosphereLightIntensity",12),Ut(t,l,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Ut(t,l,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),Te(l,"atmosphereRayleighScaleHeight",1e4),Te(l,"atmosphereMieScaleHeight",3200),Te(l,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),$a(n),(r=n.requestRender)==null||r.call(n)}function Ba(e){var l;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const i=(l=t.postProcessStages)==null?void 0:l.bloom;return{scene:lt(t,["highDynamicRange","sunBloom","light"]),fog:lt(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:lt(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:lt(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:lt(t.sun,["show"]),moon:lt(t.moon,["show"]),skyBox:lt(t.skyBox,["show"]),bloom:{props:lt(i,["enabled"]),uniforms:lt(i==null?void 0:i.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Wa(e,t,n){var s,b,g,S;if(!n)return;const i=e==null?void 0:e.scene,l=i==null?void 0:i.globe;if(!i||!l)return;ct(i,n.scene,t),ct(i.fog,n.fog,t),ct(l,n.globe,t),ct(i.sun,n.sun,t),ct(i.moon,n.moon,t),ct(i.skyBox,n.skyBox,t),i.skyAtmosphere&&(ct(i.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(i.skyAtmosphere.show=!1));const r=(s=i.postProcessStages)==null?void 0:s.bloom;ct(r,(b=n.bloom)==null?void 0:b.props,t),ct(r==null?void 0:r.uniforms,(g=n.bloom)==null?void 0:g.uniforms,t),(S=i.requestRender)==null||S.call(i)}function Ua(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}Te(e.light,"intensity",2.35)}function Ga(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,Te(t,"density",12e-5),Te(t,"minimumBrightness",.035),Te(t,"screenSpaceErrorFactor",2),Te(t,"visualDensityScalar",.16))}function $a(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(Te(t.uniforms,"contrast",128),Te(t.uniforms,"brightness",-.18),Te(t.uniforms,"delta",1),Te(t.uniforms,"sigma",2.5),Te(t.uniforms,"stepSize",4.2)))}function qa(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function Te(e,t,n){e&&t in e&&(e[t]=n)}function Ut(e,t,n,i,l,r){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(i,l,r))}function lt(e,t){return e?t.reduce((n,i)=>(i in e&&(n[i]=ja(e[i])),n),{}):{}}function ct(e,t={},n){!e||!t||Object.entries(t).forEach(([i,l])=>{i in e&&(e[i]=Va(l,n))})}function ja(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Va(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Ya={__name:"LilGuiControls",props:{title:{type:String,default:"Parameters"},controls:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const n=e,i=t,l=X(null),r={},s=new Map;let b=null,g="",S=!1;Ae(()=>[n.title,n.controls],()=>{T()},{deep:!0,flush:"post",immediate:!0}),yi(()=>{m()});function T(){typeof window>"u"||S||(S=!0,bi(()=>{S=!1,P()}))}function P(){const o=l.value;if(!o)return;const d=A(n.controls);(!b||d!==g)&&(m(),f(o,d)),M()}function f(o,d){b=new Xi({container:o,autoPlace:!1,title:n.title||"Parameters",width:Math.max(260,Math.floor(o.clientWidth||320))}),b.domElement.classList.add("cesium-lil-gui"),o.replaceChildren(b.domElement),g=d;for(const y of n.controls||[]){const C=_(y);C&&s.set(y.id,C)}}function _(o){if(o.type==="info")return null;r[o.id]=a(o);let d=null;return o.type==="range"?d=b.add(r,o.id,c(o.min,0),c(o.max,1),c(o.step,.01)):o.type==="color"?d=b.addColor(r,o.id):o.type==="select"?d=b.add(r,o.id,u(o)):d=b.add(r,o.id),d.name(F(o)).onChange(y=>{const C=p(o.id)||o;C.disabled||i("change",{control:C,controlId:C.id,value:y})}),w(d,o),d}function M(){if(b){b.title(n.title||"Parameters");for(const o of n.controls||[]){const d=s.get(o.id);if(!d)continue;const y=a(o);h(r[o.id],y)||(r[o.id]=y,d.updateDisplay()),d.name(F(o)),d.disable(!!o.disabled),w(d,o)}}}function w(o,d){o.domElement.title=d.tooltip||"",o.domElement.dataset.controlId=d.id||"",o.domElement.dataset.controlType=d.type||""}function A(o=[]){return JSON.stringify(o.map(d=>({id:d.id,type:d.type,min:d.min,max:d.max,step:d.step,options:(d.options||[]).map(y=>({label:y.label,value:y.value}))})))}function F(o){return o.displayValue?`${o.label||o.id} (${o.displayValue})`:o.label||o.id}function a(o){var d,y;return o.type==="range"?c(o.value,c(o.min,0)):o.type==="toggle"?!!o.value:o.type==="select"?o.value??((y=(d=o.options)==null?void 0:d[0])==null?void 0:y.value)??"":o.type==="color"?typeof o.value=="string"&&o.value?o.value:"#ffffff":o.value}function u(o){const d={};for(const y of o.options||[])d[y.label||y.value]=y.value;return d}function p(o){return n.controls.find(d=>d.id===o)||null}function h(o,d){return typeof o=="number"||typeof d=="number"?Math.abs(Number(o)-Number(d))<1e-12:o===d}function c(o,d){const y=Number(o);return Number.isFinite(y)?y:d}function m(){if(b)try{b.destroy()}catch{}b=null,g="",s.clear();for(const o of Object.keys(r))delete r[o]}return(o,d)=>(te(),ue("div",{ref_key:"containerRef",ref:l,class:"lil-gui-host"},null,512))}},Mn=ot(Ya,[["__scopeId","data-v-110f953e"]]),Xa={key:0,class:"advanced-effects-root"},Ka={class:"effects-panel"},Za={class:"panel-head"},Ja={class:"effect-switches"},Qa={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=Sn(),i=X(null),l=X(!1),r=X(!1),s=X(!1),b=X(!1),g=X(!1),S=Ce(()=>[{id:"fog",label:"Height Fog",type:"toggle",value:l.value},{id:"hbao",label:"HBAO",type:"toggle",value:r.value},{id:"tiltShift",label:"Tilt Shift",type:"toggle",value:s.value},{id:"atmosphere",label:"Atmosphere + Bloom",type:"toggle",value:b.value}]);let T=null,P=null,f=null,_=!1,M=null,w=null,A=null,F=null,a=null,u=null,p=null,h=null,c=!1,m=null,o=!1,d=0,y=0,C=typeof performance<"u"?performance.now():Date.now();function D(){return A||(A=zt(()=>import("./cesiumFxRuntime-DhdyNrDC.js"),__vite__mapDeps([0,1]),import.meta.url).then(N=>{var ee;const z=(ee=N==null?void 0:N.getCesiumFxEchartsRuntime)==null?void 0:ee.call(N);if(!z)throw new Error("Cinematic FX 图表运行时加载失败");return w=z,z}).catch(N=>{throw A=null,N}),A)}async function E(){return w||D()}const O={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},R={hdr:null,bloom:null,sky:null};yn(()=>{j()}),Zt(()=>{de()}),Ae(()=>t.controls,N=>{U(N||{})},{deep:!0,immediate:!0});function U(N){Object.prototype.hasOwnProperty.call(N,"fog")&&(l.value=!!N.fog),Object.prototype.hasOwnProperty.call(N,"hbao")&&(r.value=!!N.hbao),Object.prototype.hasOwnProperty.call(N,"tiltShift")&&(s.value=!!N.tiltShift),Object.prototype.hasOwnProperty.call(N,"atmosphere")&&(b.value=!!N.atmosphere)}function B({controlId:N,value:z}){const ee=!!z,ie={fog:l,hbao:r,tiltShift:s,atmosphere:b}[N];ie&&(ie.value=ee)}function j(){let N=0;F=window.setInterval(async()=>{var J,ie;N+=1;const z=(J=t.getViewer)==null?void 0:J.call(t),ee=((ie=t.getCesium)==null?void 0:ie.call(t))||window.Cesium;if(z&&ee){clearInterval(F),F=null;try{le(z),se(z),ve(z,ee),q(z,ee),n.success("高级视觉效果已启用。")}catch(W){n.error("高级视觉效果初始化失败",W),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}N>=150&&(clearInterval(F),F=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function le(N){var J,ie,W,Q,ae,re,ge,Ue,$e;const z=N==null?void 0:N.scene;if(!z)return;typeof z.highDynamicRange=="boolean"&&(R.hdr=z.highDynamicRange),"sunBloom"in z&&(R.sunBloom=z.sunBloom);const ee=z.globe;if(ee&&(R.globe={enableLighting:ee.enableLighting,showGroundAtmosphere:ee.showGroundAtmosphere,dynamicAtmosphereLighting:ee.dynamicAtmosphereLighting,dynamicAtmosphereLightingFromSun:ee.dynamicAtmosphereLightingFromSun,atmosphereLightIntensity:ee.atmosphereLightIntensity,atmosphereHueShift:ee.atmosphereHueShift,atmosphereSaturationShift:ee.atmosphereSaturationShift,atmosphereBrightnessShift:ee.atmosphereBrightnessShift,lightingFadeInDistance:ee.lightingFadeInDistance,lightingFadeOutDistance:ee.lightingFadeOutDistance,nightFadeInDistance:ee.nightFadeInDistance,nightFadeOutDistance:ee.nightFadeOutDistance}),z.light&&(R.light={intensity:z.light.intensity}),(J=z.postProcessStages)!=null&&J.bloom){const Le=z.postProcessStages.bloom;R.bloom={enabled:!!Le.enabled,contrast:(ie=Le.uniforms)==null?void 0:ie.contrast,brightness:(W=Le.uniforms)==null?void 0:W.brightness,delta:(Q=Le.uniforms)==null?void 0:Q.delta,sigma:(ae=Le.uniforms)==null?void 0:ae.sigma,stepSize:(re=Le.uniforms)==null?void 0:re.stepSize}}z.skyAtmosphere&&(R.sky={show:z.skyAtmosphere.show,hueShift:z.skyAtmosphere.hueShift,saturationShift:z.skyAtmosphere.saturationShift,brightnessShift:z.skyAtmosphere.brightnessShift}),R.celestial={sunShow:(ge=z.sun)==null?void 0:ge.show,moonShow:(Ue=z.moon)==null?void 0:Ue.show,skyBoxShow:($e=z.skyBox)==null?void 0:$e.show}}function ve(N,z){var J;!((J=N==null?void 0:N.scene)!=null&&J.postProcessStages)||!(z!=null&&z.PostProcessStage)||(fe(N,z),Pe(N,z),G(N,z),b.value?H(N,z,1200):he(N))}function se(N){var ee;const z=N==null?void 0:N.scene;(ee=z==null?void 0:z.renderError)!=null&&ee.addEventListener&&(z.rethrowRenderErrors=!1,h=z.renderError.addEventListener((J,ie)=>{n.error("Cesium 渲染异常，已触发降级保护",ie),ye(),c||(c=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function ye(){l.value=!1,s.value=!1,r.value=!1,b.value=!1,T&&(T.enabled=!1),P&&(P.enabled=!1),f&&(f.enabled=!1)}function fe(N,z){T||(T=new z.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new z.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),N.scene.postProcessStages.add(T),T.enabled=l.value)}function Pe(N,z){var J,ie;const ee=(J=N==null?void 0:N.scene)==null?void 0:J.postProcessStages;ee&&(ee.ambientOcclusion?(f=ee.ambientOcclusion,_=!1):(ie=z==null?void 0:z.PostProcessStageLibrary)!=null&&ie.createAmbientOcclusionStage&&(f=z.PostProcessStageLibrary.createAmbientOcclusionStage(),ee.add(f),_=!0),f&&(f.enabled=r.value,f.uniforms&&("intensity"in f.uniforms&&(f.uniforms.intensity=4.2),"bias"in f.uniforms&&(f.uniforms.bias=.08),"lengthCap"in f.uniforms&&(f.uniforms.lengthCap=.35),"stepSize"in f.uniforms&&(f.uniforms.stepSize=1.8),"frustumLength"in f.uniforms&&(f.uniforms.frustumLength=1200))))}function G(N,z){P||(P=new z.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),N.scene.postProcessStages.add(P),P.enabled=!1)}function q(N,z){const ee=N==null?void 0:N.scene;ee&&(p=ee.preRender.addEventListener(()=>{var Q;const J=Ge(N),ie=Number(((Q=N==null?void 0:N.camera)==null?void 0:Q.pitch)??-1.2);d+=1;const W=typeof performance<"u"?performance.now():Date.now();if(W-C>=1e3&&(y=Math.round(d*1e3/(W-C)),d=0,C=W),T&&(T.enabled=l.value,T.uniforms.cameraHeightFactor=Ke(J,150,12e3),T.uniforms.fogDensity=55e-5+(1-T.uniforms.cameraHeightFactor)*.00125),f&&(f.enabled=r.value),P){const ae=ie>-.62,re=ae?je((ie+.62)/.5):0;P.enabled=s.value&&ae,P.uniforms.blurStrength=re}b.value&&J>=8e4?(H(N,z,J),o=!1):o||(he(N),o=!0)}))}function H(N,z,ee){var ae;const J=N==null?void 0:N.scene;if(!J)return;m||(m=Ba(N)),Ha(N,z),typeof J.highDynamicRange=="boolean"&&(J.highDynamicRange=!0);const ie=(ae=J.postProcessStages)==null?void 0:ae.bloom;ie&&(ie.enabled=!0,ie.uniforms&&("contrast"in ie.uniforms&&(ie.uniforms.contrast=149),"brightness"in ie.uniforms&&(ie.uniforms.brightness=-.12),"delta"in ie.uniforms&&(ie.uniforms.delta=1),"sigma"in ie.uniforms&&(ie.uniforms.sigma=3.25),"stepSize"in ie.uniforms&&(ie.uniforms.stepSize=5)));const W=J.skyAtmosphere;if(!W)return;const Q=Ke(ee,500,12e4);W.hueShift=-.035+Q*.035,W.saturationShift=-.14+Q*.09,W.brightnessShift=.03+(1-Q)*.08}function he(N){var W,Q,ae;const z=N==null?void 0:N.scene;if(!z)return;const ee=((W=t.getCesium)==null?void 0:W.call(t))||window.Cesium;if(m){Wa(N,ee,m),m=null;return}typeof z.highDynamicRange=="boolean"&&R.hdr!==null&&(z.highDynamicRange=R.hdr),"sunBloom"in z&&R.sunBloom!==void 0&&(z.sunBloom=R.sunBloom);const J=z.globe;if(J&&R.globe){const re=R.globe;re.enableLighting!==void 0&&(J.enableLighting=re.enableLighting),re.showGroundAtmosphere!==void 0&&(J.showGroundAtmosphere=re.showGroundAtmosphere),re.dynamicAtmosphereLighting!==void 0&&"dynamicAtmosphereLighting"in J&&(J.dynamicAtmosphereLighting=re.dynamicAtmosphereLighting),re.dynamicAtmosphereLightingFromSun!==void 0&&"dynamicAtmosphereLightingFromSun"in J&&(J.dynamicAtmosphereLightingFromSun=re.dynamicAtmosphereLightingFromSun),re.atmosphereLightIntensity!==void 0&&"atmosphereLightIntensity"in J&&(J.atmosphereLightIntensity=re.atmosphereLightIntensity),re.atmosphereHueShift!==void 0&&"atmosphereHueShift"in J&&(J.atmosphereHueShift=re.atmosphereHueShift),re.atmosphereSaturationShift!==void 0&&"atmosphereSaturationShift"in J&&(J.atmosphereSaturationShift=re.atmosphereSaturationShift),re.atmosphereBrightnessShift!==void 0&&"atmosphereBrightnessShift"in J&&(J.atmosphereBrightnessShift=re.atmosphereBrightnessShift),re.lightingFadeInDistance!==void 0&&"lightingFadeInDistance"in J&&(J.lightingFadeInDistance=re.lightingFadeInDistance),re.lightingFadeOutDistance!==void 0&&"lightingFadeOutDistance"in J&&(J.lightingFadeOutDistance=re.lightingFadeOutDistance),re.nightFadeInDistance!==void 0&&"nightFadeInDistance"in J&&(J.nightFadeInDistance=re.nightFadeInDistance),re.nightFadeOutDistance!==void 0&&"nightFadeOutDistance"in J&&(J.nightFadeOutDistance=re.nightFadeOutDistance)}z.light&&R.light&&R.light.intensity!==void 0&&(z.light.intensity=R.light.intensity);const ie=(Q=z.postProcessStages)==null?void 0:Q.bloom;if(ie&&R.bloom&&(ie.enabled=R.bloom.enabled,ie.uniforms&&("contrast"in ie.uniforms&&R.bloom.contrast!==void 0&&(ie.uniforms.contrast=R.bloom.contrast),"brightness"in ie.uniforms&&R.bloom.brightness!==void 0&&(ie.uniforms.brightness=R.bloom.brightness),"delta"in ie.uniforms&&R.bloom.delta!==void 0&&(ie.uniforms.delta=R.bloom.delta),"sigma"in ie.uniforms&&R.bloom.sigma!==void 0&&(ie.uniforms.sigma=R.bloom.sigma),"stepSize"in ie.uniforms&&R.bloom.stepSize!==void 0&&(ie.uniforms.stepSize=R.bloom.stepSize))),z.skyAtmosphere&&R.sky&&(R.sky.show!==void 0&&(z.skyAtmosphere.show=R.sky.show),z.skyAtmosphere.hueShift=R.sky.hueShift,z.skyAtmosphere.saturationShift=R.sky.saturationShift,z.skyAtmosphere.brightnessShift=R.sky.brightnessShift),R.celestial){const re=R.celestial;z.sun&&re.sunShow!==void 0&&(z.sun.show=re.sunShow),z.moon&&re.moonShow!==void 0&&(z.moon.show=re.moonShow),z.skyBox&&re.skyBoxShow!==void 0&&(z.skyBox.show=re.skyBoxShow)}(ae=z.requestRender)==null||ae.call(z)}function Oe(){a&&(clearInterval(a),a=null)}async function Me(){var J,ie;const N=!g.value;if(g.value=N,!N){Oe();return}const z=(J=t.getViewer)==null?void 0:J.call(t),ee=((ie=t.getCesium)==null?void 0:ie.call(t))||window.Cesium;if(!z||!ee){g.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Fe(z,ee),Ee(z,ee),He(z,ee)}catch(W){g.value=!1,n.error("图表模块加载失败",W)}}async function Fe(N,z){await E(),await bi(),i.value&&(M||(M=w.init(i.value),Be()),u||(u=()=>{M==null||M.resize()},window.addEventListener("resize",u)),M.resize(),He(N,z))}function Ee(N,z){a||(a=window.setInterval(()=>{!M||!g.value||He(N,z)},1200))}function He(N,z){var Q;const ee=new Date,J=`${We(ee.getHours())}:${We(ee.getMinutes())}:${We(ee.getSeconds())}`,ie=Number((Ge(N)/1e3).toFixed(2)),W=Number(z.Math.toDegrees(((Q=N==null?void 0:N.camera)==null?void 0:Q.pitch)??0).toFixed(1));Ve(O.labels,J,20),Ve(O.cameraHeightKm,ie,20),Ve(O.pitchDeg,W,20),Ve(O.fps,y,20),M.setOption({xAxis:{data:O.labels},series:[{data:O.cameraHeightKm},{data:O.pitchDeg},{data:O.fps}]})}function Be(){M&&M.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function de(){var ee,J;F&&(clearInterval(F),F=null),Oe();const N=(ee=t.getViewer)==null?void 0:ee.call(t),z=(J=N==null?void 0:N.scene)==null?void 0:J.postProcessStages;p&&(p(),p=null),h&&(h(),h=null),T&&z&&z.remove(T),T=null,P&&z&&z.remove(P),P=null,f&&(_&&z&&z.remove(f),f=null),_=!1,o=!1,N&&he(N),u&&(window.removeEventListener("resize",u),u=null),M&&(M.dispose(),M=null),w=null,c=!1}function Ge(N){var ie,W,Q;const z=(W=(ie=N==null?void 0:N.scene)==null?void 0:ie.globe)==null?void 0:W.ellipsoid,ee=(Q=N==null?void 0:N.camera)==null?void 0:Q.positionWC;if(!z||!ee)return 0;const J=z.cartesianToCartographic(ee);return Math.max(0,Number((J==null?void 0:J.height)??0))}function Ke(N,z,ee){return!Number.isFinite(N)||ee<=z?0:je((N-z)/(ee-z))}function je(N){return Math.min(1,Math.max(0,Number(N)||0))}function Ve(N,z,ee){N.push(z),N.length>ee&&N.shift()}function We(N){return String(N).padStart(2,"0")}return(N,z)=>e.headless?xe("",!0):(te(),ue("div",Xa,[x("div",Ka,[x("div",Za,[z[0]||(z[0]=x("span",{class:"panel-title"},"Cinematic FX",-1)),x("button",{class:"panel-btn",onClick:Me},_e(g.value?"隐藏图表":"显示图表"),1)]),x("div",Ja,[ze(Mn,{title:"Effect Parameters",controls:S.value,onChange:B},null,8,["controls"])]),it(x("div",{ref_key:"chartRef",ref:i,class:"fx-chart"},null,512),[[gt,g.value]])])]))}},er=ot(Qa,[["__scopeId","data-v-c7595ca3"]]),tr={key:0,class:"launcher-count"},nr={class:"panel-header"},ir={class:"panel-title-block"},ar={class:"panel-mark"},rr={class:"panel-copy"},or={class:"panel-subtitle"},sr={class:"panel-actions"},lr=["title"],cr={class:"panel-tabs","aria-label":"3D 工具分类"},ur=["aria-pressed","onClick"],dr={class:"panel-scroll"},hr={class:"panel-page"},fr={class:"overview-grid"},mr={class:"overview-tile"},pr={class:"overview-tile"},vr={class:"overview-tile"},gr={key:0,class:"quick-actions"},yr=["disabled","onClick"],br={key:1,class:"empty-state"},xr={class:"panel-page"},Sr=["aria-expanded"],_r={class:"section-main"},wr={class:"section-meta"},Tr={key:0,class:"section-body"},Mr={class:"option-grid"},Dr=["disabled","aria-pressed","title","onClick"],Lr={class:"custom-basemap-input-row"},Fr=["disabled"],Pr={key:0,class:"custom-basemap-current"},Ar=["aria-expanded"],Cr={class:"section-main"},Er={class:"section-meta"},Rr={key:0,class:"section-body"},Ir={class:"option-grid"},kr=["aria-pressed","title","onClick"],zr=["aria-expanded"],Nr={class:"section-main"},Or={class:"section-meta"},Hr={key:0,class:"section-body"},Br={class:"overlay-list"},Wr=["disabled","aria-pressed","title","onClick"],Ur={class:"overlay-copy"},Gr={class:"overlay-title"},$r={key:0,class:"overlay-desc"},qr={key:3,class:"empty-state"},jr={class:"panel-page"},Vr={class:"module-list"},Yr=["aria-expanded","onClick"],Xr={class:"module-icon"},Kr={class:"module-copy"},Zr={class:"module-title"},Jr={key:0,class:"module-desc"},Qr={class:"module-head-side"},eo={key:0,class:"module-body"},to={key:0,class:"module-actions"},no=["disabled","onClick"],io={key:0,class:"empty-state"},ao={class:"panel-page"},ro={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},oo={class:"data-upload-hint"},so={key:0,class:"data-source-list"},lo={class:"data-source-head"},co={class:"data-source-count"},uo=["title","aria-label","onClick"],ho={class:"data-source-icon"},fo={class:"data-source-copy"},mo={class:"data-source-name"},po={class:"data-source-type"},vo={key:1,class:"empty-state"},Vn=3,go=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",yo={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(e,{emit:t}){const n=e,i=X(Array.isArray(n.loadedDataSources)?n.loadedDataSources:[]);Ae(()=>n.loadedDataSources,G=>{const q=Array.isArray(G)?G:[];q!==i.value&&(i.value=q)},{immediate:!0});const l=t,r=E(),s=r.uiStateVersion===Vn,b=X(r.activeTab||"scene"),g=X(!!r.compactMode),S=X(new Set(s?r.expandedLayerSectionIds||[]:[])),T=X(new Set(s?r.expandedModuleIds||[]:[])),P=X(n.customBasemapUrl||""),f=X(null),_=Ce(()=>n.embedded||n.open),M=Ce(()=>n.modules.find(G=>G.id==="scene")||null),w=Ce(()=>{var G;return((G=M.value)==null?void 0:G.actions)||[]}),A=Ce(()=>n.modules.filter(G=>G.id!=="scene")),F=Ce(()=>A.value.filter(G=>G.statusTone==="success"||G.statusTone==="warning").length),a=Ce(()=>n.overlayOptions.filter(G=>!!G.active).length),u=[{id:"scene",label:"场景",icon:nn},{id:"layers",label:"图层",icon:an},{id:"data",label:"数据",icon:mn},{id:"modules",label:"模块",icon:tn}],p=Ce(()=>{var G;return((G=n.basemapOptions.find(q=>q.value===n.activeBasemap))==null?void 0:G.label)||"未选择"}),h=Ce(()=>{var G;return((G=n.terrainOptions.find(q=>q.value===n.activeTerrain))==null?void 0:G.label)||"未选择"});Ae(()=>n.modules.map(G=>G.id),G=>{G.includes(b.value)||b.value==="scene"||b.value==="layers"||b.value==="modules"||(b.value="scene")},{immediate:!0}),Ae([b,g,S,T],O,{deep:!0}),Ae(()=>n.customBasemapUrl,G=>{G!==P.value&&(P.value=G||"")});function c(G){l("update:open",G)}function m(G){return S.value.has(G)}function o(G){const q=new Set(S.value);q.has(G)?q.delete(G):q.add(G),S.value=q}function d(G){return T.value.has(G)}function y(G){const q=new Set(T.value);q.has(G)?q.delete(G):q.add(G),T.value=q}function C(G){G!=null&&G.disabled||l("update:activeBasemap",G.value)}function D(){l("custom-basemap-submit",{url:P.value})}function E(){if(typeof window>"u")return{};try{const G=window.localStorage.getItem(n.storageKey);return G?JSON.parse(G):{}}catch{return{}}}function O(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:Vn,activeTab:b.value,compactMode:g.value,expandedLayerSectionIds:[...S.value],expandedModuleIds:[...T.value]}))}catch{}}function R(G){return{scene:nn,effects:ia,wind:na,fluid:ta,shallowWater:Hn}[G]||tn}function U(G,q){var he;return((he={scene:{home:Qi,everest:Nn,tileset:Vt},wind:{load:Ji,clear:rn},fluid:{pick:On,clear:rn},shallowWater:{toggle:Hn}}[G])==null?void 0:he[q])||ea}function B(G,q){l("module-action",{moduleId:G,actionId:q})}function j(G,q,H){const he=q.type==="range"?Number(H):H;l("control-change",{moduleId:G,controlId:q.id,value:he})}function le(G){G.disabled||l("overlay-toggle",{overlayId:G.value,value:!G.active})}function ve(G){return{geojson:Bt,json:Bt,kml:Bn,kmz:Bn,shp:an,gltf:Vt,czml:Bt,"3dtiles":Vt}[G]||Bt}function se(G){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[G]||G.toUpperCase()}function ye(G){var H;const q=(H=G.target)==null?void 0:H.files;!q||q.length===0||(l("data-import",{files:Array.from(q)}),f.value&&(f.value.value=""))}function fe(G){l("data-remove",{id:G})}function Pe(){l("data-clear-all")}return(G,q)=>(te(),ue("aside",{class:Xe(["cesium-tool-shell",{"is-open":_.value,"is-embedded":e.embedded}])},[!e.embedded&&!_.value?(te(),ue("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:q[0]||(q[0]=H=>c(!0))},[ze(pe(tn),{size:18,"stroke-width":"2"}),q[7]||(q[7]=x("span",null,"高级控制台",-1)),F.value?(te(),ue("span",tr,_e(F.value),1)):xe("",!0)])):xe("",!0),it(x("section",{class:Xe(["cesium-tool-panel",{compact:g.value}]),"aria-label":"Cesium 高级控制台"},[x("header",nr,[x("div",ir,[x("span",ar,[ze(pe(nn),{size:18,"stroke-width":"2"})]),x("span",rr,[q[8]||(q[8]=x("span",{class:"panel-title"},"3D 高级控制台",-1)),x("span",or,_e(p.value)+" / "+_e(h.value),1)])]),x("div",sr,[x("button",{class:"icon-btn",type:"button",title:g.value?"切换为舒展布局":"切换为紧凑布局",onClick:q[1]||(q[1]=H=>g.value=!g.value)},[ze(pe(Ki),{size:16,"stroke-width":"2"})],8,lr),e.embedded?xe("",!0):(te(),ue("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:q[2]||(q[2]=H=>c(!1))},[ze(pe(kn),{size:17,"stroke-width":"2"})]))])]),x("nav",cr,[(te(),ue(ut,null,ht(u,H=>x("button",{key:H.id,class:Xe(["tab-btn",{active:b.value===H.id}]),type:"button","aria-pressed":b.value===H.id,onClick:he=>b.value=H.id},[(te(),Ze(yt(H.icon),{size:15,"stroke-width":"2"})),x("span",null,_e(H.label),1)],10,ur)),64))]),x("div",dr,[it(x("section",hr,[x("div",fr,[x("div",mr,[q[9]||(q[9]=x("span",{class:"overview-label"},"地图源",-1)),x("strong",null,_e(p.value),1)]),x("div",pr,[q[10]||(q[10]=x("span",{class:"overview-label"},"地形",-1)),x("strong",null,_e(h.value),1)]),x("div",vr,[q[11]||(q[11]=x("span",{class:"overview-label"},"模块",-1)),x("strong",null,_e(F.value)+"/"+_e(A.value.length),1)])]),w.value.length?(te(),ue("div",gr,[(te(!0),ue(ut,null,ht(w.value,H=>(te(),ue("button",{key:H.id,class:Xe(["tool-action",[H.variant||"default",{active:H.active}]]),disabled:H.disabled,type:"button",onClick:he=>B(M.value.id,H.id)},[(te(),Ze(yt(U(M.value.id,H.id)),{size:15,"stroke-width":"2"})),qt(" "+_e(H.label),1)],10,yr))),128))])):(te(),ue("div",br," 暂无场景快捷操作 "))],512),[[gt,b.value==="scene"]]),it(x("section",xr,[e.basemapOptions.length?(te(),ue("div",{key:0,class:Xe(["option-group",{expanded:m("basemap")}])},[x("button",{class:"section-head section-toggle",type:"button","aria-expanded":m("basemap"),onClick:q[3]||(q[3]=H=>o("basemap"))},[x("span",_r,[ze(pe(an),{size:16,"stroke-width":"2"}),q[12]||(q[12]=x("span",null,"底图源",-1))]),x("span",wr,[x("span",null,_e(p.value),1),ze(pe(Ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Sr),m("basemap")?(te(),ue("div",Tr,[x("div",Mr,[(te(!0),ue(ut,null,ht(e.basemapOptions,H=>(te(),ue("button",{key:H.value,class:Xe(["option-card",{active:H.value===e.activeBasemap}]),type:"button",disabled:H.disabled,"aria-pressed":H.value===e.activeBasemap,title:H.description||H.label,onClick:he=>C(H)},[x("span",null,_e(H.label),1),H.value===e.activeBasemap?(te(),Ze(pe(zn),{key:0,size:15,"stroke-width":"2.4"})):xe("",!0)],10,Dr))),128))]),x("form",{class:"custom-basemap-editor",onSubmit:bt(D,["prevent"])},[x("div",Lr,[ze(pe(Zi),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),it(x("input",{"onUpdate:modelValue":q[4]||(q[4]=H=>P.value=H),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[jt,P.value]]),x("button",{class:"custom-basemap-submit",type:"submit",disabled:!P.value.trim(),title:"加载自定义 XYZ"},[ze(pe(wi),{size:14,"stroke-width":"2"}),q[13]||(q[13]=x("span",null,"加载",-1))],8,Fr)]),e.customBasemapUrl?(te(),ue("div",Pr,_e(e.customBasemapUrl),1)):xe("",!0)],32)])):xe("",!0)],2)):xe("",!0),e.terrainOptions.length?(te(),ue("div",{key:1,class:Xe(["option-group",{expanded:m("terrain")}])},[x("button",{class:"section-head section-toggle",type:"button","aria-expanded":m("terrain"),onClick:q[5]||(q[5]=H=>o("terrain"))},[x("span",Cr,[ze(pe(Nn),{size:16,"stroke-width":"2"}),q[14]||(q[14]=x("span",null,"地形",-1))]),x("span",Er,[x("span",null,_e(h.value),1),ze(pe(Ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Ar),m("terrain")?(te(),ue("div",Rr,[x("div",Ir,[(te(!0),ue(ut,null,ht(e.terrainOptions,H=>(te(),ue("button",{key:H.value,class:Xe(["option-card",{active:H.value===e.activeTerrain}]),type:"button","aria-pressed":H.value===e.activeTerrain,title:H.description||H.label,onClick:he=>G.$emit("update:activeTerrain",H.value)},[x("span",null,_e(H.label),1),H.value===e.activeTerrain?(te(),Ze(pe(zn),{key:0,size:15,"stroke-width":"2.4"})):xe("",!0)],10,kr))),128))])])):xe("",!0)],2)):xe("",!0),e.overlayOptions.length?(te(),ue("div",{key:2,class:Xe(["option-group",{expanded:m("overlay")}])},[x("button",{class:"section-head section-toggle",type:"button","aria-expanded":m("overlay"),onClick:q[6]||(q[6]=H=>o("overlay"))},[x("span",Nr,[ze(pe(On),{size:16,"stroke-width":"2"}),q[15]||(q[15]=x("span",null,"叠加层",-1))]),x("span",Or,[x("span",null,_e(a.value)+"/"+_e(e.overlayOptions.length),1),ze(pe(Ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,zr),m("overlay")?(te(),ue("div",Hr,[x("div",Br,[(te(!0),ue(ut,null,ht(e.overlayOptions,H=>(te(),ue("button",{key:H.value,class:Xe(["overlay-row",{active:!!H.active}]),type:"button",disabled:H.disabled,"aria-pressed":!!H.active,title:H.description||H.label,onClick:he=>le(H)},[x("span",Ur,[x("span",Gr,_e(H.label),1),H.description?(te(),ue("span",$r,_e(H.description),1)):xe("",!0)]),x("span",{class:Xe(["toggle-control",{active:!!H.active}]),"aria-hidden":"true"},[...q[16]||(q[16]=[x("span",{class:"toggle-track"},[x("span",{class:"toggle-thumb"})],-1)])],2)],10,Wr))),128))])])):xe("",!0)],2)):xe("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(te(),ue("div",qr," 暂无图层配置项 ")):xe("",!0)],512),[[gt,b.value==="layers"]]),it(x("section",jr,[x("div",Vr,[(te(!0),ue(ut,null,ht(A.value,H=>{var he,Oe;return te(),ue("article",{key:H.id,class:Xe(["module-item",{expanded:d(H.id)}])},[x("button",{class:"module-head",type:"button","aria-expanded":d(H.id),onClick:Me=>y(H.id)},[x("span",Xr,[(te(),Ze(yt(R(H.id)),{size:16,"stroke-width":"2"}))]),x("span",Kr,[x("span",Zr,_e(H.title),1),H.description?(te(),ue("span",Jr,_e(H.description),1)):xe("",!0)]),x("span",Qr,[H.status?(te(),ue("span",{key:0,class:Xe(["module-status",H.statusTone||"neutral"])},_e(H.status),3)):xe("",!0),ze(pe(Ht),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Yr),d(H.id)?(te(),ue("div",eo,[(he=H.actions)!=null&&he.length?(te(),ue("div",to,[(te(!0),ue(ut,null,ht(H.actions,Me=>(te(),ue("button",{key:Me.id,class:Xe(["tool-action",[Me.variant||"default",{active:Me.active}]]),disabled:Me.disabled,type:"button",onClick:Fe=>B(H.id,Me.id)},[(te(),Ze(yt(U(H.id,Me.id)),{size:14,"stroke-width":"2"})),qt(" "+_e(Me.label),1)],10,no))),128))])):xe("",!0),(Oe=H.controls)!=null&&Oe.length?(te(),ue("div",{key:1,class:Xe(["control-list control-list-gui",H.controlLayout?`control-list-${H.controlLayout}`:""])},[ze(Mn,{title:H.title,controls:H.controls,onChange:Me=>j(H.id,Me.control,Me.value)},null,8,["title","controls","onChange"])],2)):xe("",!0)])):xe("",!0)],2)}),128))]),A.value.length?xe("",!0):(te(),ue("div",io," 暂无可用功能模块 "))],512),[[gt,b.value==="modules"]]),it(x("section",ao,[x("label",ro,[x("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:f,class:"data-file-input",type:"file",multiple:"",accept:go,onChange:ye},null,544),x("div",oo,[ze(pe(mn),{size:28,"stroke-width":"1.5"}),q[17]||(q[17]=x("span",null,"选择文件或拖拽到此处",-1)),q[18]||(q[18]=x("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),i.value.length?(te(),ue("div",so,[x("div",lo,[x("span",co," 已加载 "+_e(i.value.length)+" 个数据源 ",1),x("button",{class:"tool-action danger",type:"button",onClick:Pe},[ze(pe(rn),{size:13,"stroke-width":"2"}),q[19]||(q[19]=qt(" 全部清除 ",-1))])]),(te(!0),ue(ut,null,ht(i.value,H=>(te(),ue("button",{key:H.id,class:"data-source-row",type:"button",title:`点击移除 ${H.name} (${se(H.type)})`,"aria-label":`移除 ${H.name}`,onClick:he=>fe(H.id)},[x("span",ho,[(te(),Ze(yt(ve(H.type)),{size:15,"stroke-width":"2"}))]),x("span",fo,[x("span",mo,_e(H.name),1),x("span",po,_e(se(H.type)),1)]),ze(pe(kn),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,uo))),128))])):(te(),ue("div",vo," 暂无已导入的数据 "))],512),[[gt,b.value==="data"]])])],2),[[gt,e.embedded||_.value]])],2))}},bo=ot(yo,[["__scopeId","data-v-c66eae0a"]]),xo={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},So={class:"dialog-header"},_o={class:"dialog-title-row"},wo={class:"dialog-file-name"},To={class:"coord-fields"},Mo={class:"coord-field"},Do={key:0,class:"coord-error"},Lo={class:"coord-field"},Fo={key:0,class:"coord-error"},Po={class:"coord-field"},Ao={key:0,class:"coord-error"},Co={class:"dialog-actions"},Eo=["disabled"],Ro={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,i=t,l=X(""),r=X(""),s=X("0"),b=X(null),g=X(""),S=X(""),T=X(""),P=Ce(()=>l.value!==""&&r.value!==""&&!g.value&&!S.value&&!T.value);function f(){const M=parseFloat(l.value),w=parseFloat(r.value),A=parseFloat(s.value);g.value="",S.value="",T.value="",l.value!==""&&(isNaN(M)||M<-180||M>180)&&(g.value="经度范围: -180 ~ 180"),r.value!==""&&(isNaN(w)||w<-90||w>90)&&(S.value="纬度范围: -90 ~ 90"),s.value!==""&&(isNaN(A)||A<0)&&(T.value="高度必须 ≥ 0")}function _(){if(!P.value){f();return}const M=parseFloat(l.value),w=parseFloat(r.value),A=parseFloat(s.value)||0;i("confirm",{lng:M,lat:w,height:A})}return Ae(()=>n.visible,M=>{if(!M){g.value="",S.value="",T.value="";return}l.value="",r.value="",s.value="0",g.value="",S.value="",T.value="",M&&setTimeout(()=>{var w;(w=b.value)==null||w.focus()},60)}),(M,w)=>(te(),Ze(Ci,{to:"body"},[e.visible?(te(),ue("div",{key:0,class:"cesium-data-dialog-overlay",onClick:w[4]||(w[4]=bt(A=>M.$emit("cancel"),["self"]))},[x("div",xo,[x("header",So,[x("div",_o,[ze(pe(Vt),{size:18,"stroke-width":"2"}),w[5]||(w[5]=x("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),x("p",wo,_e(e.fileName),1),w[6]||(w[6]=x("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),x("form",{class:"dialog-form",onSubmit:bt(_,["prevent"])},[x("div",To,[x("label",Mo,[w[7]||(w[7]=x("span",{class:"coord-label"},"经度 (Longitude)",-1)),it(x("input",{ref_key:"lngInputRef",ref:b,"onUpdate:modelValue":w[0]||(w[0]=A=>l.value=A),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:f},null,544),[[jt,l.value]]),g.value?(te(),ue("span",Do,_e(g.value),1)):xe("",!0)]),x("label",Lo,[w[8]||(w[8]=x("span",{class:"coord-label"},"纬度 (Latitude)",-1)),it(x("input",{"onUpdate:modelValue":w[1]||(w[1]=A=>r.value=A),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:f},null,544),[[jt,r.value]]),S.value?(te(),ue("span",Fo,_e(S.value),1)):xe("",!0)]),x("label",Po,[w[9]||(w[9]=x("span",{class:"coord-label"},"高度 (Height 米)",-1)),it(x("input",{"onUpdate:modelValue":w[2]||(w[2]=A=>s.value=A),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:f},null,544),[[jt,s.value]]),T.value?(te(),ue("span",Ao,_e(T.value),1)):xe("",!0)])]),x("div",Co,[x("button",{class:"dialog-btn cancel-btn",type:"button",onClick:w[3]||(w[3]=A=>M.$emit("cancel"))}," 取消 "),x("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!P.value},[ze(pe(wi),{size:14,"stroke-width":"2"}),w[10]||(w[10]=qt(" 确认放置 ",-1))],8,Eo)])],32)])])):xe("",!0)]))}},Io=ot(Ro,[["__scopeId","data-v-81f307a1"]]);function ko(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(F){return(F==null?void 0:F._view)||(F==null?void 0:F.view)}function n(F){const a=t(F);if(!(a!=null&&a.passState))throw new Error("Cesium scene passState is unavailable.");return a.passState}function i(F){const a=t(F);return(a==null?void 0:a.frustumCommandsList)||(a==null?void 0:a._frustumCommandsList)||[]}const l=`
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
`,r=`
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
`,s=`
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
`,b=`
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
`,S=`
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
`;class T{constructor(a){this.commandType=a.commandType,this.geometry=a.geometry,this.attributeLocations=a.attributeLocations,this.primitiveType=a.primitiveType,this.uniformMap=a.uniformMap,this.vertexShaderSource=a.vertexShaderSource,this.fragmentShaderSource=a.fragmentShaderSource,this.rawRenderState=a.rawRenderState,this.framebuffer=a.framebuffer,this.isPostRender=a.isPostRender,this.outputTexture=a.outputTexture,this.autoClear=e.defaultValue(a.autoClear,!1),this.preExecute=a.preExecute,this.modelMatrix=e.defaultValue(a.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(a){switch(this.commandType){case"Draw":{const u=e.VertexArray.fromGeometry({context:a,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),p=e.ShaderProgram.fromCache({context:a,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),h=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:u,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:p,framebuffer:this.framebuffer,renderState:h,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(a,u){this.geometry=u;const p=e.VertexArray.fromGeometry({context:a,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=p}update(a){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(a.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&a.commandList.push(this.clearCommand),a.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class P{constructor(){}static loadText(a){const u=new XMLHttpRequest;return u.open("GET",a,!1),u.send(),u.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(a){if(e.defined(a.arrayBufferView)){const p={};p.arrayBufferView=a.arrayBufferView,a.source=p,a.flipY=!1}return new e.Texture(a)}static createDepthFramebuffer(a,u,p){return new e.Framebuffer({context:a,colorTextures:[this.createTexture({context:a,width:u,height:p,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(u*p*4)})],depthRenderbuffer:new e.Renderbuffer({context:a,width:u,height:p,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(a,u,p,h=!1){const c={context:a,colorTextures:[u],destroyAttachments:h};return p&&(c.depthTexture=p),new e.Framebuffer(c)}static createRawRenderState(a){const h={viewport:a.viewport,depthTest:a.depthTest,depthMask:a.depthMask,blending:a.blending};return e.Appearance.getDefaultRenderState(!0,!1,h)}}const A=class A{constructor(a,u={}){if(!a)throw new Error("Cesium Viewer is required");this.viewer=a,this._initConfiguration(u),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(a){this.config={resolution:new e.Cartesian2(a.width||A.DEFAULTS.width,a.height||A.DEFAULTS.height),dimensions:a.dimensions||A.DEFAULTS.dimensions.clone(),heightRange:{min:a.minHeight??A.DEFAULTS.heightRange[0],max:a.maxHeight??A.DEFAULTS.heightRange[1]},baseHeight:a.baseHeight??A.DEFAULTS.baseHeight,fluidParams:a.fluidParams||A.DEFAULTS.fluidParams.clone(),customParams:a.customParams||A.DEFAULTS.customParams.clone(),waterColor:a.waterColor||A.DEFAULTS.waterColor.clone(),lonLat:a.lonLat||[...A.DEFAULTS.lonLat],timeStep:a.timeStep||A.DEFAULTS.timeStep,heightMapSource:a.heightMapSource||A.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(a){const u=Number(a);!Number.isFinite(u)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,u)),this.resetSimulation())}resetSimulation(){var a,u;this._frameCount=0,(u=(a=this.viewer.scene).requestRender)==null||u.call(a)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const a=()=>P.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:a(),B:a(),C:a(),D:a()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(a){if(!(a!=null&&a.arrayBufferView)||!a.width||!a.height)throw new Error("Invalid height map source.");return P.createTexture({context:this.viewer.scene.context,width:a.width,height:a.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:a.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var E,O;const a=this.viewer.scene.context,u=P.createDepthFramebuffer(a,this.config.resolution.x,this.config.resolution.y),p=this.viewer.scene,h=p.frameState,c=n(this.viewer.scene),m=p.camera,o=h.camera,d=c.framebuffer,y=e.BoundingRectangle.clone(c.viewport,new e.BoundingRectangle);let C=null,D=[];try{c.viewport.x=0,c.viewport.y=0,c.viewport.width=this.config.resolution.x,c.viewport.height=this.config.resolution.y,c.framebuffer=u,p.camera=this.heightMapCamera,h.camera=this.heightMapCamera,h.context.uniformState.updateCamera(this.heightMapCamera),D=this._processHeightMapShaders(),this._renderDepthPrepass(c);const R=P.createTexture({context:a,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return C=P.createFramebuffer(a,R),this._copyTexture(u.getColorTexture(0),C),R}finally{this._restoreHeightMapShaders(D),c.framebuffer=d,e.BoundingRectangle.clone(y,c.viewport),p.camera=m,h.camera=o,o&&h.context.uniformState.updateCamera(o),C&&!((E=C.isDestroyed)!=null&&E.call(C))&&C.destroy(),u&&!((O=u.isDestroyed)!=null&&O.call(u))&&u.destroy()}}_renderDepthPrepass(a){const u=this.viewer.scene.frameState;u.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(h=>h.execute(this.viewer.scene.context,a))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const a={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...a,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:r}),this._createComputePass("B",{uniforms:{...a,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:s}),this._createComputePass("C",{uniforms:{...a,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:b}),this._createComputePass("D",{uniforms:{...a,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:g})]}_createComputePass(a,{uniforms:u,shaderSource:p}){return new T({commandType:"Compute",uniformMap:u,fragmentShaderSource:new e.ShaderSource({sources:[l,p]}),geometry:P.getFullscreenQuad(),outputTexture:this.textures[a],preExecute:h=>h.commandToExecute.outputTexture=this.textures[a]})}_createMainRenderPass(){const a=_([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new T({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[l,S]}),geometry:this._createBoxGeometry(),modelMatrix:a,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var a,u,p,h;return(h=(p=(u=(a=t(this.viewer.scene))==null?void 0:a.globeDepth)==null?void 0:u.colorFramebufferManager)==null?void 0:p._colorTextures)==null?void 0:h[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(a=>this.viewer.scene.primitives.add(a)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(a){const u=this.viewer.camera.getPickRay(a);return this.viewer.scene.globe.pick(u,this.viewer.scene)}_createOrthographicCamera(){const a=new e.Camera(this.viewer.scene);a.frustum=new e.OrthographicOffCenterFrustum;const[u,p]=this.config.lonLat,h=e.Cartesian3.fromDegrees(u,p,this.config.baseHeight),c=e.Transforms.eastNorthUpToFixedFrame(h),m=a.frustum;m.near=.01,m.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),m.left=-this.config.dimensions.x/2,m.right=this.config.dimensions.x/2,m.bottom=-this.config.dimensions.y/2,m.top=this.config.dimensions.y/2;const o=e.Matrix4.getColumn(c,2,new e.Cartesian3);e.Cartesian3.negate(o,o);const d=e.Matrix4.getColumn(c,1,new e.Cartesian3),y=e.Matrix4.getColumn(c,0,new e.Cartesian3),C=e.Cartesian3.multiplyByScalar(o,-m.far,new e.Cartesian3);return a.position=e.Cartesian3.add(h,C,new e.Cartesian3),a.direction=o,a.up=d,a.right=y,a}destroy(){var a,u;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(p=>{p&&this.viewer.scene.primitives.remove(p)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(p=>{var h;p&&!((h=p.isDestroyed)!=null&&h.call(p))&&p.destroy()}),this.textures={},this._heightMap&&!((u=(a=this._heightMap).isDestroyed)!=null&&u.call(a))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(a,u){const p=this.viewer.scene.context,h=n(this.viewer.scene),c=p.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>a},owner:this}),m=h.framebuffer;h.framebuffer=u,c.execute(p,h),h.framebuffer=m}_getDepthRenderCommands(){var p,h;const a=[],u=i(this.viewer.scene);for(let c=0;c<u.length;++c){const m=u[c],o=(p=m==null?void 0:m.commands)==null?void 0:p[2],d=((h=m==null?void 0:m.indices)==null?void 0:h[2])??(o==null?void 0:o.length)??0;o&&d>0&&a.push(...o.slice(0,d))}return a}_processHeightMapShaders(){const a=[],u=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),p=e.Matrix4.inverse(u,new e.Matrix4),h=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(m=>{var D;if(!((D=m==null?void 0:m.shaderProgram)!=null&&D.fragmentShaderSource)||!m.uniformMap)return;const o=Object.prototype.hasOwnProperty.call(m.uniformMap,"u_inverseEnuMatrix"),d=m.uniformMap.u_inverseEnuMatrix,y=m.shaderProgram,C=new e.Matrix4;m.uniformMap.u_inverseEnuMatrix=()=>{const E=m.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(p,E,C)},m.heightMap_ShaderProgram||(m.heightMap_ShaderProgram=this._getDerivedShaderProgram(h.context,m.shaderProgram,"Height_Map")),m.shaderProgram=m.heightMap_ShaderProgram,a.push({command:m,hadInverseUniform:o,originalInverseUniform:d,originalShaderProgram:y})}),a}_restoreHeightMapShaders(a){a.forEach(u=>{const{command:p,hadInverseUniform:h,originalInverseUniform:c,originalShaderProgram:m}=u;p!=null&&p.uniformMap&&(p.shaderProgram=m,h?p.uniformMap.u_inverseEnuMatrix=c:delete p.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(a,u,p){let h=a.shaderCache.getDerivedShaderProgram(u,p);return e.defined(h)||(h=this._createHeightMapShaderProgram(a,u,p)),h}_createHeightMapShaderProgram(a,u,p){const h=this._modifyFragmentShader(u.fragmentShaderSource);return a.shaderCache.createDerivedShaderProgram(u,p,{vertexShaderSource:u.vertexShaderSource,fragmentShaderSource:h,attributeLocations:u._attributeLocations})}_modifyFragmentShader(a){const u=a.sources.map(p=>e.ShaderSource.replaceMain(p,"czm_heightMap_main"));return u.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:u,defines:a.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};rt(A,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let f=A;const _=(F=[0,0,0],a=[0,0,0],u=[1,1,1])=>{const p=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(a[0]))),h=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(a[1]))),c=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(a[2])));F instanceof e.Cartesian3||(F=e.Cartesian3.fromDegrees(...F));const m=e.Transforms.eastNorthUpToFixedFrame(F);e.Matrix4.multiply(m,p,m),e.Matrix4.multiply(m,h,m),e.Matrix4.multiply(m,c,m);const o=e.Matrix4.fromScale(new e.Cartesian3(...u));return e.Matrix4.multiply(m,o,new e.Matrix4)},M=`
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
    `;function w(){return new e.PostProcessStage({fragmentShader:M})}return{FluidRenderer:f,createSkyEffect:w}}const zo={key:0,class:"fluid-root"},No={class:"fluid-panel"},Oo={class:"panel-actions"},Ho=["disabled"],Bo={key:0,class:"selected-text"},Yn=1024,Gt=1e4,Xn=1200,Wo=100,Uo=.01,Go=.03,$o=60,sn=64,qo=160,jo={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const i=e,l=n,r=Sn(),s=X(10),b=X(20),g=X(3),S=X("#0d4fa3"),T=X(null),P=X(null),f=X(null),_=X(!1),M=X(!1),w=X(null),A=X(null),F=X(!1),a=X(5);let u=null,p=null,h=null,c=null,m=null,o=null,d=null,y=null,C=0;const D=Ce(()=>!Number.isFinite(w.value)||!Number.isFinite(A.value)?"":`经度 ${w.value.toFixed(6)} / 纬度 ${A.value.toFixed(6)}`),E=Ce(()=>Number.isFinite(P.value)&&Number.isFinite(f.value)),O=Ce(()=>{if(!E.value)return 1;const L=Math.abs(f.value-P.value);return Math.max(L/1e3,.01)}),R=Ce(()=>[{id:"threshold",label:"Threshold",type:"range",min:0,max:500,step:1e-4,value:s.value,displayValue:Number(s.value).toFixed(2)},{id:"blend",label:"Blend",type:"range",min:0,max:50,step:1e-4,value:b.value,displayValue:Number(b.value).toFixed(2)},{id:"lightStrength",label:"Light",type:"range",min:0,max:10,step:1e-4,value:g.value,displayValue:Number(g.value).toFixed(2)},{id:"waterLevel",label:"Water Level",type:"range",min:E.value?P.value:0,max:E.value?f.value:1,step:O.value,value:Number.isFinite(Number(T.value))?Number(T.value):0,displayValue:E.value&&Number.isFinite(Number(T.value))?`${Number(T.value).toFixed(2)} m`:"Pick terrain first",disabled:!E.value},{id:"waterColor",label:"Water Color",type:"color",value:S.value}]);Ae([s,b,g,S],z),Ae(T,ee),Ae(()=>i.params,L=>{B(L||{})},{deep:!0,immediate:!0}),Ae([_,M,D,T,P,f,F,a],le,{immediate:!0}),yi(()=>{ae(),$e(!0)});function U(){var V,ne;const L=(V=i.getViewer)==null?void 0:V.call(i),k=((ne=i.getCesium)==null?void 0:ne.call(i))||window.Cesium;if(!L||!k)return r.warning("Cesium 场景尚未就绪。"),null;if(!h){const ce=ko(k);h=ce.FluidRenderer,c=ce.createSkyEffect}return{viewer:L,Cesium:k}}function B(L){Number.isFinite(Number(L.threshold))&&(s.value=Number(L.threshold)),Number.isFinite(Number(L.blend))&&(b.value=Number(L.blend)),Number.isFinite(Number(L.lightStrength))&&(g.value=Number(L.lightStrength)),je(L.waterColor)&&(S.value=L.waterColor),Number.isFinite(Number(L.waterLevel))&&(T.value=Number(L.waterLevel))}function j({controlId:L,value:k}){L==="threshold"?s.value=Number(k):L==="blend"?b.value=Number(k):L==="lightStrength"?g.value=Number(k):L==="waterLevel"?T.value=Number(k):L==="waterColor"&&je(k)&&(S.value=k)}function le(){l("state-change",{isPicking:_.value,hasFluid:M.value,selectedText:D.value,waterLevel:T.value,waterLevelMin:P.value,waterLevelMax:f.value,floodSimActive:F.value,floodSpeed:a.value})}function ve(){const L=U();if(!L)return;const{viewer:k,Cesium:V}=L;ge(),J(k,V),_.value=!0,m=new V.ScreenSpaceEventHandler(k.scene.canvas),m.setInputAction(ne=>{se(k,V,ne.position)},V.ScreenSpaceEventType.LEFT_CLICK)}async function se(L,k,V){var De,Re;const ne=N(L,V);if(!ne){r.warning("未选中可用地形位置。");return}const ce=++C;ge();const be=k.Cartographic.fromCartesian(ne),v=k.Math.toDegrees(be.longitude),I=k.Math.toDegrees(be.latitude),Y=Number(be.height),Z=Number.isFinite(Y)?Y:0,me=new k.Cartesian3(Gt,Gt,0);xi("正在请求模拟范围高度数据...");try{Ue();const ke=Number(s.value)||0,qe=Number(b.value)||0,$=Number(g.value)||0,K=await ye(L,k,{lon:v,lat:I,centerHeight:Z,dimensions:me}),oe=Ee(K,Z),Se=oe.baseHeight,Ie=oe.depth,tt=He(oe,Z),at=new k.Cartesian3(Gt,Gt,Ie);if(ce!==C)return;P.value=oe.minHeight,f.value=oe.maxHeight,T.value=tt;const xt=Math.abs(oe.maxHeight-oe.minHeight);xt>0&&(a.value=Math.max(xt/10,.1)),K||r.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),o=new h(L,{lonLat:[v,I],width:Yn,height:Yn,dimensions:at,baseHeight:Se,minHeight:oe.minHeight,maxHeight:oe.maxHeight,heightMapSource:K,waterColor:Ge(k,S.value),customParams:new k.Cartesian4(ke,qe,$,10),fluidParams:new k.Cartesian4(.9+$/10*.099,Math.min(1,qe/50),ke/5e4,Be(tt,oe))}),w.value=v,A.value=I,M.value=!0,(Re=(De=L.scene).requestRender)==null||Re.call(De),r.success("水体流体已创建。")}catch(ke){r.error("水体流体创建失败",ke),r.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{Si()}}async function ye(L,k,V){const ne=L==null?void 0:L.terrainProvider,ce=Pe(V.dimensions);if(!ne)return null;if(k.EllipsoidTerrainProvider&&ne instanceof k.EllipsoidTerrainProvider)return Me(ce);if(typeof k.sampleTerrain!="function"&&typeof k.sampleTerrainMostDetailed!="function")return null;try{return await fe(L,k,V,ce)}catch(be){if(ce<=sn)throw be;return fe(L,k,V,sn)}}async function fe(L,k,V,ne){const ce=q(k,V,ne),be=await H(k,L.terrainProvider,ce);return Oe(be||ce,{size:ne})}function Pe(L){const k=Math.max(Number(L==null?void 0:L.x)||0,Number(L==null?void 0:L.y)||0),V=Math.ceil(k/$o)+1;return G(V,sn,qo)}function G(L,k,V){return Math.max(k,Math.min(V,Math.round(L)))}function q(L,{lon:k,lat:V,centerHeight:ne,dimensions:ce},be){const v=L.Cartesian3.fromDegrees(k,V,ne),I=L.Transforms.eastNorthUpToFixedFrame(v),Y=[],Z=Math.max(1,be-1);for(let me=0;me<be;me++){const Re=(.5-me/Z)*ce.y;for(let ke=0;ke<be;ke++){const $=(ke/Z-.5)*ce.x,K=new L.Cartesian3($,Re,0),oe=L.Matrix4.multiplyByPoint(I,K,new L.Cartesian3);Y.push(L.Cartographic.fromCartesian(oe))}}return Y}async function H(L,k,V){const ne=he(k),ce=Number.isInteger(ne)?ne:Math.min((k==null?void 0:k.maximumLevel)??12,12);return typeof L.sampleTerrain=="function"?L.sampleTerrain(k,ce,V):L.sampleTerrainMostDetailed(k,V)}function he(L){const k=Number(L==null?void 0:L._bottomLevel);return Number.isFinite(k)?Math.max(0,k-1):null}function Oe(L,{size:k}){var ce;const V=Fe(L);if(!V)return null;const ne=new Float32Array(k*k*4);for(let be=0;be<k*k;be++){const v=Number((ce=L[be])==null?void 0:ce.height),I=be*4;ne[I]=Number.isFinite(v)?We(v,V.minHeight,V.maxHeight):V.minHeight,ne[I+1]=0,ne[I+2]=0,ne[I+3]=1}return{width:k,height:k,arrayBufferView:ne,minHeight:V.minHeight,maxHeight:V.maxHeight}}function Me(L){return{width:L,height:L,arrayBufferView:new Float32Array(L*L*4),minHeight:0,maxHeight:0}}function Fe(L){let k=Number.POSITIVE_INFINITY,V=Number.NEGATIVE_INFINITY;for(const ne of L||[]){const ce=Number(ne==null?void 0:ne.height);Number.isFinite(ce)&&(k=Math.min(k,ce),V=Math.max(V,ce))}return!Number.isFinite(k)||!Number.isFinite(V)?null:{minHeight:k,maxHeight:V}}function Ee(L,k){const V=Number(L==null?void 0:L.minHeight),ne=Number(L==null?void 0:L.maxHeight);if(Number.isFinite(V)&&Number.isFinite(ne)){const v=Number(k),I=Number.isFinite(v)?Math.min(V,ne,v):Math.min(V,ne),Y=Number.isFinite(v)?Math.max(V,ne,v):Math.max(V,ne),Z=Math.max(Y-I,Uo);return{baseHeight:I,depth:Z,minHeight:I,maxHeight:I+Z}}const ce=Number(k),be=Number.isFinite(ce)?ce-Wo:0;return{baseHeight:be,depth:Xn,minHeight:be,maxHeight:be+Xn}}function He(L,k){const V=L.minHeight+L.depth*Go,ne=Number(k),ce=Number.isFinite(ne)?ne:V;return We(ce,L.minHeight,L.maxHeight)}function Be(L,k){const V=k.maxHeight-k.minHeight;return!Number.isFinite(V)||V<=0?0:We((L-k.minHeight)/V,0,1)}function de(){return!Number.isFinite(P.value)||!Number.isFinite(f.value)?null:{minHeight:Math.min(P.value,f.value),maxHeight:Math.max(P.value,f.value)}}function Ge(L,k){const V=Ve(k)||Ve("#0d4fa3");return new L.Cartesian3(V.red,V.green,V.blue)}function Ke(){var V;const L=Ve(S.value),k=(V=o==null?void 0:o.config)==null?void 0:V.waterColor;!L||!k||(k.x=L.red,k.y=L.green,k.z=L.blue)}function je(L){return typeof L=="string"&&/^#[0-9a-f]{6}$/i.test(L)}function Ve(L){return je(L)?{red:Number.parseInt(L.slice(1,3),16)/255,green:Number.parseInt(L.slice(3,5),16)/255,blue:Number.parseInt(L.slice(5,7),16)/255}:null}function We(L,k,V){return Math.max(k,Math.min(V,L))}function N(L,k){if(!k)return null;if(L.scene.pickPositionSupported&&typeof L.scene.pickPosition=="function"){const ne=L.scene.pickPosition(k);if(ne)return ne}const V=L.camera.getPickRay(k);return V?L.scene.globe.pick(V,L.scene):null}function z(){var ne,ce,be;if(!(o!=null&&o.config))return;const L=Number(s.value)||0,k=Number(b.value)||0,V=Number(g.value)||0;o.config.customParams&&(o.config.customParams.x=L,o.config.customParams.y=k,o.config.customParams.z=V),o.config.fluidParams&&(o.config.fluidParams.x=.9+V/10*.099,o.config.fluidParams.y=Math.min(1,k/50),o.config.fluidParams.z=L/5e4),Ke(),(be=(ce=(ne=o.viewer)==null?void 0:ne.scene)==null?void 0:ce.requestRender)==null||be.call(ce)}function ee(){var ce,be,v,I;if(!((ce=o==null?void 0:o.config)!=null&&ce.fluidParams))return;const L=de(),k=Number(T.value);if(!L||!Number.isFinite(k))return;const V=We(k,L.minHeight,L.maxHeight);if(V!==k){T.value=V;return}const ne=Be(V,L);typeof o.setInitialWaterLevel=="function"?o.setInitialWaterLevel(ne):(o.config.fluidParams.w=ne,(I=(v=(be=o.viewer)==null?void 0:be.scene)==null?void 0:v.requestRender)==null||I.call(v))}function J(L,k){var V,ne;if(!y){const ce=L.scene;y={shadows:L.shadows,resolutionScale:L.resolutionScale,msaaSamples:ce.msaaSamples,depthTestAgainstTerrain:ce.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:ce.logarithmicDepthBuffer,highDynamicRange:ce.highDynamicRange,fogEnabled:(V=ce.fog)==null?void 0:V.enabled,showGroundAtmosphere:ce.globe.showGroundAtmosphere,skyAtmosphereShow:(ne=ce.skyAtmosphere)==null?void 0:ne.show,enableLighting:ce.globe.enableLighting}}L.shadows=!0,L.resolutionScale=1,L.scene.msaaSamples=4,L.scene.globe.depthTestAgainstTerrain=!0,L.scene.logarithmicDepthBuffer=!0,L.scene.highDynamicRange=!0,L.scene.fog&&(L.scene.fog.enabled=!0),L.scene.globe.showGroundAtmosphere=!0,L.scene.skyAtmosphere&&(L.scene.skyAtmosphere.show=!0),L.scene.globe.enableLighting=!0,!d&&c&&(d=c(k),L.scene.postProcessStages.add(d))}function ie(L){if(!L||!y)return;const k=L.scene;L.shadows=y.shadows,L.resolutionScale=y.resolutionScale,y.msaaSamples!==void 0&&(k.msaaSamples=y.msaaSamples),k.globe.depthTestAgainstTerrain=y.depthTestAgainstTerrain,k.logarithmicDepthBuffer=y.logarithmicDepthBuffer,k.highDynamicRange=y.highDynamicRange,k.fog&&y.fogEnabled!==void 0&&(k.fog.enabled=y.fogEnabled),k.globe.showGroundAtmosphere=y.showGroundAtmosphere,k.skyAtmosphere&&y.skyAtmosphereShow!==void 0&&(k.skyAtmosphere.show=y.skyAtmosphereShow),k.globe.enableLighting=y.enableLighting,y=null}function W(){F.value?ae():Q()}function Q(){const L=de();if(!L)return;const k=Number(T.value);(!Number.isFinite(k)||k>=L.maxHeight-.01)&&(T.value=L.minHeight),F.value=!0,p=null;function V(ne){if(!F.value)return;p===null&&(p=ne);const ce=Math.min((ne-p)/1e3,.1);p=ne;const be=de();if(!be){ae();return}const I=Number(T.value)+a.value*ce;if(I>=be.maxHeight){T.value=be.maxHeight,ae(),r.info("洪水模拟完成：水位已达最大值");return}T.value=I,u=requestAnimationFrame(V)}u=requestAnimationFrame(V),r.info("洪水模拟开始")}function ae(){F.value=!1,p=null,u!==null&&(cancelAnimationFrame(u),u=null)}function re(){ae(),$e(!1),r.success("水体流体已清除。")}function ge(){m&&(m.destroy(),m=null),_.value=!1}function Ue(){if(o){try{o.destroy()}catch{}o=null,M.value=!1}}function $e(L){var V,ne,ce;const k=(V=i.getViewer)==null?void 0:V.call(i);if(C+=1,ae(),ge(),Ue(),w.value=null,A.value=null,T.value=null,P.value=null,f.value=null,k&&d){try{k.scene.postProcessStages.remove(d)}catch{}d=null}L&&k&&ie(k),(ce=(ne=k==null?void 0:k.scene)==null?void 0:ne.requestRender)==null||ce.call(ne)}function Le(){$e(!0),l("close")}function et(L){const k=Number(L);Number.isFinite(k)&&k>0&&(a.value=k)}return t({startPickHeightMap:ve,clearFluid:re,toggleFloodSimulation:W,stopFloodSimulation:ae,setFloodSpeed:et}),(L,k)=>e.headless?xe("",!0):(te(),ue("div",zo,[x("div",No,[x("div",{class:"panel-head"},[k[0]||(k[0]=x("span",{class:"panel-title"},"水体流体",-1)),x("button",{class:"panel-close",title:"关闭",onClick:Le}," × ")]),x("div",Oo,[x("button",{class:Xe(["action-btn primary",{active:_.value}]),onClick:ve},_e(_.value?"等待选点":"捕捉高度图"),3),x("button",{class:"action-btn",disabled:!M.value&&!_.value,onClick:re}," 清除 ",8,Ho)]),D.value?(te(),ue("div",Bo,_e(D.value),1)):xe("",!0),ze(Mn,{class:"param-list",title:"Fluid Parameters",controls:R.value,onChange:j},null,8,["controls"])])]))}},Vo=ot(jo,[["__scopeId","data-v-2de8b792"]]),Yo=`
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
`;function Kn(e,t){e.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uCaustic=t.uCaustic,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vCWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+Yo).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  float cDepth = smoothstep( 0.0, -2.0, vCWorld.y );
  float caus = causticX( vCWorld.xz * 0.06 );
  caus += causticX( vCWorld.xz * 0.13 + 40.0 ) * 0.6;
  totalEmissiveRadiance += vec3( 0.45, 0.85, 0.8 ) * caus * cDepth * uCaustic;`)}}const Xo=`
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
`,Ko=`
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
`,Zo=`
  varying vec3 vWorldPos;

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Jo=`
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
`;function Qo(e=256){const t=new Float32Array(e*e);for(let f=0;f<e*e;f++)t[f]=Math.random();const n=(f,_)=>{const M=new Float32Array(e*e);for(let w=0;w<e;w++)for(let A=0;A<e;A++){let F=0,a=0;for(let u=-_;u<=_;u++)for(let p=-_;p<=_;p++)F+=f[(w+u+e)%e*e+(A+p+e)%e],a++;M[w*e+A]=F/a}return M},i=n(t,4),l=n(t,1),r=new Float32Array(e*e);for(let f=0;f<e*e;f++)r[f]=i[f]*.7+l[f]*.3;const s=document.createElement("canvas");s.width=s.height=e;const b=s.getContext("2d"),g=b.createImageData(e,e),S=(f,_)=>r[(_+e)%e*e+(f+e)%e],T=3;for(let f=0;f<e;f++)for(let _=0;_<e;_++){const M=(S(_-1,f)-S(_+1,f))*T,w=(S(_,f-1)-S(_,f+1))*T,A=Math.hypot(M,w,1),F=(f*e+_)*4;g.data[F]=(M/A*.5+.5)*255,g.data[F+1]=(w/A*.5+.5)*255,g.data[F+2]=(1/A*.5+.5)*255,g.data[F+3]=255}b.putImageData(g,0,0);const P=new wn(s);return P.wrapS=P.wrapT=Tn,P.colorSpace=Ti,P}function es(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#d8c79b",t.fillRect(0,0,512,512);for(let i=0;i<12e3;i++){const l=170+Math.random()*70|0;t.fillStyle=`rgba(${l},${l-22},${l-65},0.22)`,t.fillRect(Math.random()*512,Math.random()*512,1.6,1.6)}for(let i=0;i<26;i++){const l=60+Math.random()*40|0,r=90+Math.random()*50|0,s=70+Math.random()*40|0;t.fillStyle=`rgba(${l},${r},${s},0.30)`,t.beginPath(),t.ellipse(Math.random()*512,Math.random()*512,8+Math.random()*26,6+Math.random()*20,Math.random()*6,0,7),t.fill()}const n=new wn(e);return n.wrapS=n.wrapT=Tn,n.repeat.set(10,10),n.colorSpace=aa,n}function ts(e=256){const t=(S,T)=>{const P=new Float32Array(e*e);for(let f=0;f<e;f++)for(let _=0;_<e;_++){let M=0,w=0;for(let A=-T;A<=T;A++)for(let F=-T;F<=T;F++)M+=S[(f+A+e)%e*e+(_+F+e)%e],w++;P[f*e+_]=M/w}return P},n=()=>{const S=new Float32Array(e*e);for(let w=0;w<e*e;w++)S[w]=Math.random();const T=t(S,3),P=t(S,1),f=new Float32Array(e*e);let _=1e9,M=-1e9;for(let w=0;w<e*e;w++)f[w]=T[w]*.65+P[w]*.35,_=Math.min(_,f[w]),M=Math.max(M,f[w]);for(let w=0;w<e*e;w++)f[w]=(f[w]-_)/(M-_);return f},i=n(),l=n(),r=document.createElement("canvas");r.width=r.height=e;const s=r.getContext("2d"),b=s.createImageData(e,e);for(let S=0;S<e*e;S++){const T=S*4;b.data[T]=i[S]*255,b.data[T+1]=l[S]*255,b.data[T+2]=0,b.data[T+3]=255}s.putImageData(b,0,0);const g=new wn(r);return g.wrapS=g.wrapT=Tn,g.colorSpace=Ti,g.minFilter=Wn,g.magFilter=Wn,g.generateMipmaps=!1,g}function ns(e={}){const{onReady:t,onError:n,onFpsUpdate:i}=e,l=X(!1),r=X(0);let s=null,b=null,g=null,S=null,T=null,P=null,f=null,_=null,M=null,w=null,A=null,F=null,a=null;const u=new st;let p=null,h=null,c=null;const m=new ra;let o=0,d=0;const y={value:0},C={value:.9},D={value:0},E={value:new st};let O=3,R=-100;const U=.62,B={};let j=!0,le=null;const ve=new Un,se={elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2};async function ye(W){if(!W){n==null||n(new Error("Container element not provided"));return}if(!l.value){P=W;try{g=new oa({antialias:!0,alpha:!0}),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setSize(P.clientWidth,P.clientHeight),g.toneMapping=sa,g.toneMappingExposure=U,g.setClearColor(0,0),P.appendChild(g.domElement),s=new Un,b=new la(55,P.clientWidth/P.clientHeight,1,2e4),b.position.set(0,55,280),fe(),Oe(),Me(),Pe(),G(),q(),H(),he(),Be(),de(),Ve(),l.value=!0,t==null||t()}catch(Q){n==null||n(Q)}}}function fe(){F=new ca,F.scale.setScalar(12e3),s.add(F);const W=F.material.uniforms;W.turbidity.value=6,W.rayleigh.value=1.6,W.mieCoefficient.value=.005,W.mieDirectionalG.value=.8}function Pe(){a=new pa(16774368,2.6),s.add(a),s.add(new va(13627391,2117738,.7))}function G(){const W=new $n(1600,1600,200,200);W.rotateX(-Math.PI/2);const Q=W.attributes.position;for(let re=0;re<Q.count;re++){const ge=Q.getX(re),Ue=Q.getZ(re);let Le=-34+Wt.clamp((Ue+800)/1600,0,1)*44;Le+=Math.sin(ge*.012)*Math.cos(Ue*.014)*3.5,Le+=Math.sin(ge*.06+Ue*.05)*1.1,Le+=(Math.random()-.5)*.6,Q.setY(re,Le)}W.computeVertexNormals();const ae=new qn({map:es(),roughness:1,metalness:0});Kn(ae,{uTime:y,uCaustic:C}),s.add(new Lt(W,ae))}function q(){const W=new ga(1,0),Q=[8023642,7035722,11887946,13598051,9083483];for(let ae=0;ae<30;ae++){const re=new qn({color:Q[ae%Q.length],roughness:.9,flatShading:!0});Kn(re,{uTime:y,uCaustic:C});const ge=new Lt(W,re),Ue=3+Math.random()*9;ge.scale.set(Ue,Ue*(.5+Math.random()*.6),Ue),ge.position.set((Math.random()-.5)*1100,-24+Math.random()*22,-300+Math.random()*900),ge.rotation.set(Math.random(),Math.random(),Math.random()),s.add(ge)}}function H(){A=new ya(g),w=new ba(256,{generateMipmaps:!0,minFilter:xa}),M=new Sa(1,2e4,w),M.position.set(0,4,0),s.add(M);const W=new on;g.getDrawingBufferSize(W),_=new _a(W.x,W.y),_.depthTexture=new wa(W.x,W.y),_.depthTexture.type=Ta,_.depthTexture.format=Ma}function he(){const W=new on;g.getDrawingBufferSize(W);const Q=Qo(256),ae={uTime:y,tRefraction:{value:_.texture},tDepth:{value:_.depthTexture},tEnv:{value:w.texture},normalMap:{value:Q},resolution:{value:W.clone()},cameraNear:{value:b.near},cameraFar:{value:b.far},invProjection:{value:new jn},camWorld:{value:new jn},sunDirection:{value:new st},sunColor:{value:new Dt(16774106)},waterColor:{value:new Dt(se.waterColor)},absorption:{value:new st(.45,.09,.05)},foamColor:{value:new Dt(15925247)},clarity:{value:se.clarity},foamWidth:{value:se.foamWidth},waveHeight:{value:se.waveHeight},reflection:{value:se.reflection}};f=new Lt(new $n(16e3,16e3,384,384),new Gn({uniforms:ae,vertexShader:Xo,fragmentShader:Ko})),f.rotation.x=-Math.PI/2,s.add(f)}function Oe(){const W=new Gn({side:ua,transparent:!0,depthWrite:!1,uniforms:{uTime:y,uNoise:{value:ts(256)},sunDirection:{value:new st},sunColor:{value:new Dt(16773341)},skyTint:{value:new Dt(7315406)},uCoverage:{value:se.cloudCoverage},uFlash:D,uFlashPos:E},vertexShader:Zo,fragmentShader:Jo});p=new Lt(new da(8e3,32,16),W),p.renderOrder=2,s.add(p)}function Me(){c=new ha({color:14478335,transparent:!0,opacity:0,blending:fa,depthWrite:!1,depthTest:!1}),h=new ma,h.visible=!1,s.add(h)}function Fe(W,Q,ae,re,ge,Ue){const $e=[];let Le=W,et=Q;const L=Math.max(5,Math.floor((ae-re)/80));for(let ne=0;ne<=L;ne++){const ce=ne/L;$e.push(new st(Le,ae+(re-ae)*ce,et)),Le+=(Math.random()-.5)*ge,et+=(Math.random()-.5)*ge}const k=new La(new Fa($e),L*4,Ue,5,!1),V=new Lt(k,c);return V.renderOrder=3,h.add(V),$e}function Ee(){for(const re of h.children)re.geometry.dispose();h.clear();const W=1+Math.floor(Math.random()*3);let Q=0,ae=0;for(let re=0;re<W;re++){const ge=(Math.random()-.5)*5e3,Ue=-(1e3+Math.random()*4500);re===0&&(Q=ge,ae=Ue);const $e=Fe(ge,Ue,1180,18,110,14),Le=2+Math.floor(Math.random()*3);for(let et=0;et<Le;et++){const L=$e[2+Math.floor(Math.random()*($e.length-4))];Fe(L.x,L.z,L.y,L.y-(160+Math.random()*420),130,7)}}E.value.set(Q,1100,ae)}function He(){if(!se.lightningEnabled){D.value=0,h.visible=!1,g.toneMappingExposure=U;return}const W=y.value;W>=O&&(R=W,Ee(),O=W+se.lightningInterval*(.4+Math.random()*.8));const Q=W-R;let ae=0;Q>=0&&Q<.5&&(ae=Math.max(0,Math.exp(-Q*5.5)*(.5+.5*Math.sin(Q*60)))),D.value=ae*2.4,h.visible=ae>.1,c.opacity=Math.min(1,ae*1.7),g.toneMappingExposure=U+ae*.75}function Be(){S=new Da(b,g.domElement),S.target.set(0,130,-400),S.maxPolarAngle=Math.PI*.49,S.minDistance=30,S.maxDistance=2e3,S.enableDamping=!0}function de(){window.addEventListener("keydown",Ge),window.addEventListener("keyup",Ke)}function Ge(W){const Q=W.target&&W.target.tagName;Q==="INPUT"||Q==="TEXTAREA"||(B[W.code]=!0)}function Ke(W){B[W.code]=!1}function je(W){const Q=(B.ShiftLeft||B.ShiftRight?240:95)*W,ae=new st,re=new st,ge=new st;b.getWorldDirection(ae).normalize(),re.crossVectors(ae,b.up).normalize(),ge.set(0,0,0),B.KeyW&&ge.add(ae),B.KeyS&&ge.addScaledVector(ae,-1),B.KeyD&&ge.add(re),B.KeyA&&ge.addScaledVector(re,-1),B.KeyE&&(ge.y+=1),B.KeyQ&&(ge.y-=1),ge.lengthSq()!==0&&(ge.normalize().multiplyScalar(Q),b.position.add(ge),S.target.add(ge),b.position.y<2.5&&(b.position.y=2.5))}function Ve(){const W=Wt.degToRad(90-se.elevation),Q=Wt.degToRad(se.azimuth);if(u.setFromSphericalCoords(1,W,Q),F.material.uniforms.sunPosition.value.copy(u),a.position.copy(u).multiplyScalar(1e3),f&&f.material.uniforms.sunDirection.value.copy(u).normalize(),p){p.material.uniforms.sunDirection.value.copy(u).normalize();const ae=Wt.clamp(1-se.elevation/28,0,1);p.material.uniforms.sunColor.value.setRGB(1,.95-.22*ae,.86-.48*ae)}s.remove(F),ve.add(F),le&&le.dispose(),le=A.fromScene(ve),s.environment=le.texture,ve.remove(F),s.add(F),j=!0}function We(){T=requestAnimationFrame(We);const W=m.getDelta();y.value+=W,C.value=se.causticStrength,je(W),He(),S.update(),b.updateMatrixWorld(),f.material.uniforms.invProjection.value.copy(b.projectionMatrixInverse),f.material.uniforms.camWorld.value.copy(b.matrixWorld),f.visible=!1,j&&(M.update(g,s),j=!1),p.visible=!1;const Q=h.visible;h.visible=!1,g.setRenderTarget(_),g.render(s,b),g.setRenderTarget(null),p.visible=!0,h.visible=Q,f.visible=!0,g.render(s,b),o++;const ae=performance.now();ae-d>=1e3&&(r.value=Math.round(o*1e3/(ae-d)),i==null||i(r.value),o=0,d=ae)}function N(){if(!b||!g||!P)return;const W=P.clientWidth,Q=P.clientHeight;b.aspect=W/Q,b.updateProjectionMatrix(),g.setSize(W,Q);const ae=new on;g.getDrawingBufferSize(ae),_.setSize(ae.x,ae.y),f.material.uniforms.resolution.value.copy(ae)}function z(){T||(m.start(),We())}function ee(){T&&(cancelAnimationFrame(T),T=null)}function J(W){const Q={...se};Object.assign(se,W),(W.elevation!==Q.elevation||W.azimuth!==Q.azimuth)&&Ve(),f&&(W.clarity!==Q.clarity&&(f.material.uniforms.clarity.value=W.clarity),W.waveHeight!==Q.waveHeight&&(f.material.uniforms.waveHeight.value=W.waveHeight),W.foamWidth!==Q.foamWidth&&(f.material.uniforms.foamWidth.value=W.foamWidth),W.reflection!==Q.reflection&&(f.material.uniforms.reflection.value=W.reflection),W.waterColor!==Q.waterColor&&f.material.uniforms.waterColor.value.set(W.waterColor)),W.causticStrength!==Q.causticStrength&&(C.value=W.causticStrength),W.cloudCoverage!==Q.cloudCoverage&&p&&(p.material.uniforms.uCoverage.value=W.cloudCoverage)}function ie(){ee(),window.removeEventListener("keydown",Ge),window.removeEventListener("keyup",Ke),g&&(g.dispose(),P==null||P.removeChild(g.domElement)),s==null||s.traverse(W=>{W.geometry&&W.geometry.dispose(),W.material&&(Array.isArray(W.material)?W.material.forEach(Q=>Q.dispose()):W.material.dispose())}),_==null||_.dispose(),w==null||w.dispose(),le==null||le.dispose(),A==null||A.dispose(),s=null,b=null,g=null,S=null,f=null,F=null,a=null,p=null,h=null,c=null,l.value=!1}return Zt(()=>{ie()}),{isReady:l,fps:r,init:ye,start:z,pause:ee,dispose:ie,handleResize:N,updateParams:J}}const is={__name:"ShallowWaterOverlay",props:{visible:{type:Boolean,default:!1},elevation:{type:Number,default:30},azimuth:{type:Number,default:150},clarity:{type:Number,default:.085},causticStrength:{type:Number,default:.9},waterColor:{type:String,default:"#2bb3c4"},waveHeight:{type:Number,default:.5},foamWidth:{type:Number,default:2.4},reflection:{type:Number,default:.38},cloudCoverage:{type:Number,default:.58},lightningEnabled:{type:Boolean,default:!0},lightningInterval:{type:Number,default:2}},emits:["ready","error","fps-update"],setup(e,{expose:t,emit:n}){const i=e,l=n,r=X(null),{isReady:s,fps:b,init:g,start:S,pause:T,dispose:P,handleResize:f,updateParams:_}=ns({onReady:()=>l("ready"),onError:F=>l("error",F),onFpsUpdate:F=>l("fps-update",F)});Ae(()=>i.visible,async F=>{F?(await M(),S()):T()}),Ae(()=>[i.elevation,i.azimuth,i.clarity,i.causticStrength,i.waterColor,i.waveHeight,i.foamWidth,i.reflection,i.cloudCoverage,i.lightningEnabled,i.lightningInterval],()=>{w()});async function M(){!r.value||s.value||(await g(r.value),w())}function w(){_({elevation:i.elevation,azimuth:i.azimuth,clarity:i.clarity,causticStrength:i.causticStrength,waterColor:i.waterColor,waveHeight:i.waveHeight,foamWidth:i.foamWidth,reflection:i.reflection,cloudCoverage:i.cloudCoverage,lightningEnabled:i.lightningEnabled,lightningInterval:i.lightningInterval})}function A(){f()}return yn(()=>{window.addEventListener("resize",A),i.visible&&M()}),Zt(()=>{window.removeEventListener("resize",A),P()}),t({isReady:s,fps:b,start:S,pause:T}),(F,a)=>it((te(),ue("div",{ref_key:"canvasContainerRef",ref:r,class:"shallow-water-overlay"},null,512)),[[gt,e.visible]])}},as=ot(is,[["__scopeId","data-v-e9c0d469"]]),Dn="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",rs=`${Dn}Cesium.js`,os=`${Dn}Widgets/widgets.css`;async function ss({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Dn),await cs(os,"cesium-widgets-style"),await ls(rs,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Yt(t,e),t}function Yt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function ls(e,t){return new Promise((n,i)=>{const l=document.getElementById(t);if(l){if(l.getAttribute("data-loaded")==="true"){n();return}l.addEventListener("load",()=>n(),{once:!0}),l.addEventListener("error",()=>i(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const r=document.createElement("script");r.id=t,r.src=e,r.async=!0,r.onload=()=>{r.setAttribute("data-loaded","true"),n()},r.onerror=()=>i(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(r)})}function cs(e,t){return new Promise((n,i)=>{if(document.getElementById(t)){n();return}const r=document.createElement("link");r.id=t,r.rel="stylesheet",r.href=e,r.onload=()=>n(),r.onerror=()=>i(new Error(`样式加载失败: ${e}`)),document.head.appendChild(r)})}const us="Asia/Shanghai",ds="UTC+8",hs=new Intl.DateTimeFormat("zh-CN",{timeZone:us,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function fs(e,t){var n,i,l,r,s,b,g;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...S)=>ps(e,t,...S),e.animation.viewModel.timeFormatter=(...S)=>vs(e,t,...S)),e.timeline){const S=(...T)=>gs(e,t,...T);e.timeline.makeLabel=S,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=S),(l=(i=e.timeline).updateFromClock)==null||l.call(i),(s=(r=e.timeline).zoomTo)==null||s.call(r,e.clock.startTime,e.clock.stopTime)}(g=(b=e.scene).requestRender)==null||g.call(b)}}function Ln(e,t,...n){var b;const i=n.find(ms)||((b=e==null?void 0:e.clock)==null?void 0:b.currentTime);if(!i)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const l=t.JulianDate.toDate(i),r=hs.formatToParts(l),s=Object.fromEntries(r.filter(({type:g})=>g!=="literal").map(({type:g,value:S})=>[g,S]));return{year:s.year||"0000",month:s.month||"01",day:s.day||"01",hour:s.hour||"00",minute:s.minute||"00",second:s.second||"00"}}function ms(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function ps(e,t,...n){const{year:i,month:l,day:r}=Ln(e,t,...n);return`${i}-${l}-${r}`}function vs(e,t,...n){const{hour:i,minute:l,second:r}=Ln(e,t,...n);return`${i}:${l}:${r} ${ds}`}function gs(e,t,...n){const{month:i,day:l,hour:r,minute:s}=Ln(e,t,...n);return`${i}-${l} ${r}:${s}`}function ys({getViewer:e}){let t=null,n=null;function i(){var b;const s=e==null?void 0:e();if(s&&((b=s._cesiumWidget)!=null&&b._creditContainer&&(s._cesiumWidget._creditContainer.style.display="none"),l(),t=setInterval(()=>{const g=document.querySelector(".cesium-credit-container");g&&g.innerHTML.length>0&&(g.innerHTML="",g.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const g=document.createElement("style");g.id="cesium-credit-override",g.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(g),n=g}}function l(){var g;const s=e==null?void 0:e();if(!s)return;(g=s._cesiumWidget)!=null&&g._creditContainer&&(s._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",s._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(S=>{S.style.cssText="display: none !important; visibility: hidden !important;",S.innerHTML=""}),s.scene&&s.scene.frameState&&s.scene.frameState.creditDisplay&&(s.scene.frameState.creditDisplay.hasCredits=()=>!1,s.scene.frameState.creditDisplay.destroy=()=>{})}function r(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:i,cleanupCreditHider:r}}const ln="经度: --, 纬度: --, 海拔: --米";function bs({getViewer:e,getCesium:t,onCoordinatePick:n}){let i=null,l=null,r=null;const s=X("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function b(){const _=e==null?void 0:e(),M=t==null?void 0:t();!_||!M||(f(),l=_.scene.canvas,i=new M.ScreenSpaceEventHandler(l),r=()=>{s.value=ln},l.addEventListener("mouseleave",r),i.setInputAction(w=>{g(w.endPosition,_,M)},M.ScreenSpaceEventType.MOUSE_MOVE),i.setInputAction(w=>{const A=w.endPosition,F=w.startPosition;if(!M.defined(_.terrainProvider))return;const a=_.scene.globe.ellipsoid;if(!_.camera.pickEllipsoid(F,a)){const p=_.camera;p.rotate(M.Cartesian3.UNIT_X,-.002*(A.y-F.y)),p.rotate(M.Cartesian3.UNIT_Y,-.002*(A.x-F.x))}},M.ScreenSpaceEventType.RIGHT_DRAG),i.setInputAction(()=>{},M.ScreenSpaceEventType.RIGHT_DOWN),i.setInputAction(()=>{},M.ScreenSpaceEventType.RIGHT_UP))}function g(_,M,w){const A=S(_,M,w);if(!A){s.value=ln;return}const F=w.Cartographic.fromCartesian(A);if(!F||!Number.isFinite(F.longitude)||!Number.isFinite(F.latitude)){s.value=ln;return}const a=w.Math.toDegrees(F.longitude).toFixed(6),u=w.Math.toDegrees(F.latitude).toFixed(6),p=(Number.isFinite(F.height)?F.height:0).toFixed(2);s.value=`经度: ${a}, 纬度: ${u}, 海拔: ${p}米`,typeof n=="function"&&n({lng:Number(a),lat:Number(u),height:Number(p)})}function S(_,M,w){if(!_)return null;const A=M.scene,F=T(_,A,w);if(F)return F;const a=M.camera.getPickRay(_);if(a){const p=A.globe.pick(a,A);if(P(p))return p}const u=M.camera.pickEllipsoid(_,A.globe.ellipsoid);return P(u)?u:null}function T(_,M,w){if(!M.pickPositionSupported||typeof M.pickPosition!="function")return null;const A=typeof M.pick=="function"?M.pick(_):null;if(!w.defined(A))return null;const F=M.pickPosition(_);return P(F)?F:null}function P(_){return!!_&&Number.isFinite(_.x)&&Number.isFinite(_.y)&&Number.isFinite(_.z)}function f(){r&&l&&(l.removeEventListener("mouseleave",r),r=null),l=null,i&&(i.destroy(),i=null)}return{coordinateDisplay:s,setupInteractions:b,cleanupInteractions:f}}function Zn(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function xs(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function Tt(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function Et(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Jn(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:i,Resource:l,HeightmapTerrainData:r,Rectangle:s,TileAvailability:b,CustomHeightmapTerrainProvider:g}=e;function S(_,M,w,A,F,a){const u=_.tileXYToRectangle(w,A,F);return t(s.intersection(u,M,a))}function T(_){const M=[[[0,0,1,0]]],w=new b(_.tilingScheme,19);for(let A=0;A<M.length;A++){const F=M[A];for(let a=0;a<F.length;a++){const u=F[a];w.addAvailableTileRange(A,u[0],u[1],u[2],u[3])}}return w}function P(_,M,w,A,F){const a=new r({buffer:_._transformBuffer(M),width:_._width,height:_._height,childTileMask:_._getChildTileMask(A,F,w),structure:_._terrainDataStructure});return a._skirtHeight=6e3,_.availability.addAvailableTileRange(w,A,F,A,F),a}class f extends g{constructor(M={}){if(super({...M,ellipsoid:i.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(M.url))throw new n("options.url is required.");this._dataType=M.dataType??"int16",this._url=M.url,this._subdomains=M.subdomains,this._token=M.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=T(this)}get availability(){return this._availability}requestTileGeometry(M,w,A,F){if(A>=this._bottomLevel)return Promise.reject(new Error(`Level ${A} is outside supported range.`));if(A<this._topLevel)return Promise.resolve(new r({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(M,w,A),structure:this._terrainDataStructure}));let a=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const p=this._subdomains[(M+w)%this._subdomains.length];a=a.replace("{s}",p)}a=a.replace("{token}",this._token).replace("{x}",M).replace("{y}",w).replace("{z}",A+1);const u=l.fetchArrayBuffer({url:a,request:F});if(u)return u.then(p=>p.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Pa.inflate(p)).then(p=>P(this,p,A,M,w))}getTileDataAvailable(M,w,A){return A<this._bottomLevel}_transformBuffer(M){let w=2;this._dataType==="float"&&(w=4);const A=M;if(A.length!==22500*w)return null;const F=new ArrayBuffer(w),a=new DataView(F),u=this._width,p=this._height,h=new Uint8Array(u*p*4);for(let c=0;c<p;c++)for(let m=0;m<u;m++){const o=Math.floor(149*c/(p-1)),d=Math.floor(149*m/(u-1)),y=w*(150*o+d);let C;w===4?(a.setInt8(0,A[y]),a.setInt8(1,A[y+1]),a.setInt8(2,A[y+2]),a.setInt8(3,A[y+3]),C=a.getFloat32(0,!0)):C=A[y]+256*A[y+1],(C>1e4||C<-2e3)&&(C=0);const D=(C+1e3)/.001,E=4*(c*u+m);h[E]=D/65536,h[E+1]=(D-256*h[E]*256)/256,h[E+2]=D-256*h[E]*256-256*h[E+1],h[E+3]=255}return h}_getVHeightBuffer(){let M=this._vHeightBuffer;if(!t(M)){M=new Uint8ClampedArray(this._width*this._height*4);for(let w=0;w<this._width*this._height*4;)M[w++]=15,M[w++]=66,M[w++]=64,M[w++]=255;this._vHeightBuffer=M}return M}_getChildTileMask(M,w,A){const F=new s,a=this._tilingScheme,u=this._rectangles,p=a.tileXYToRectangle(M,w,A);let h=0;for(let c=0;c<u.length&&h!==15;c++){const m=u[c];if(m.maxLevel<=A)continue;const o=m.rectangle,d=s.intersection(o,p,F);t(d)&&(S(a,o,2*M,2*w,A+1,F)&&(h|=4),S(a,o,2*M+1,2*w,A+1,F)&&(h|=8),S(a,o,2*M,2*w+1,A+1,F)&&(h|=1),S(a,o,2*M+1,2*w+1,A+1,F)&&(h|=2))}return h}}return f}function Ss(e){if(!e)throw new Error("Cesium is required to create ArcGISTerrainProvider.");const{TileAvailability:t}=e;class n{constructor(r){this._inner=r,this._availability=null,this._initAvailability()}_initAvailability(){const r=this._inner.tilingScheme;if(!r)return;const s=this._inner.maximumLevel??15;this._availability=new t(r,s);for(let b=0;b<=s;b++){const g=1<<b;this._availability.addAvailableTileRange(b,0,0,g-1,g-1)}}get availability(){return this._availability||this._initAvailability(),this._availability}get tilingScheme(){return this._inner.tilingScheme}get maximumLevel(){return this._inner.maximumLevel}get requestWaterMask(){return this._inner.requestWaterMask}get requestVertexNormals(){return this._inner.requestVertexNormals}get ready(){return this._inner.ready}get readyPromise(){return this._inner.readyPromise}get errorEvent(){return this._inner.errorEvent}get credit(){return this._inner.credit}getTileDataAvailable(r,s,b){const g=this._inner.maximumLevel??15;return b<=g}requestTileGeometry(r,s,b,g){return this._inner.requestTileGeometry(r,s,b,g)}getLevelMaximumGeometricError(r){return this._inner.getLevelMaximumGeometricError(r)}loadTileDataAvailability(r,s,b){if(typeof this._inner.loadTileDataAvailability=="function")return this._inner.loadTileDataAvailability(r,s,b)}}async function i(l){const r=await e.ArcGISTiledElevationTerrainProvider.fromUrl(l);return new n(r)}return n.fromUrl=i,n}function _s({getViewer:e,getCesium:t,activeBasemap:n,applyBasemap:i,resolvePresetLayerIds:l,message:r,validationTimeoutMs:s=5e3,circuitBreakThreshold:b=3}){const g=new Map,S=new Set,T={value:!1};let P=null,f=[],_=[];function M(h,c={}){return h?S.has(h)&&!c.forceReload?(T.value=!0,!1):i(h,c)?(w(h),!0):(A(h),!1):!1}function w(h){var D,E;a();const c=e==null?void 0:e();if(!(c!=null&&c.imageryLayers))return;const m=l(h),o=[];for(let O=0;O<c.imageryLayers.length;O++){const R=c.imageryLayers.get(O);(D=R==null?void 0:R.imageryProvider)!=null&&D._descriptorId&&m.includes(R.imageryProvider._descriptorId)&&o.push(R)}if(!o.length)return;f=o;let d=!1;const y=()=>{d=!0,a(),g.delete(h),S.has(h)&&(S.delete(h),T.value=S.size>0)},C=O=>{d||(A(h),a())};for(const O of f){const R=O.imageryProvider;if(R!=null&&R.errorEvent&&(R.errorEvent.addEventListener(C),_.push(()=>R.errorEvent.removeEventListener(C))),R!=null&&R.ready){y();return}(E=R==null?void 0:R.readyPromise)!=null&&E.then&&R.readyPromise.then(y).catch(C)}P=setTimeout(()=>{d||A(h)},s)}function A(h){const c=(g.get(h)||0)+1;g.set(h,c),c>=b&&(S.add(h),T.value=!0,F(h))}function F(h){var m,o,d,y,C;const c="custom_China_Blender_preset_2";if(h===c){const D="imagery_tianditu_preset";S.has(D)?(o=r==null?void 0:r.error)==null||o.call(r,"所有底图均加载失败，请检查网络",{closable:!0}):((m=r==null?void 0:r.warning)==null||m.call(r,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=D);return}if(!S.has(c))(d=r==null?void 0:r.warning)==null||d.call(r,"底图加载失败，已降级到默认底图",{closable:!0}),n.value=c;else{const D="imagery_tianditu_preset";S.has(D)?(C=r==null?void 0:r.error)==null||C.call(r,"所有底图均加载失败，请检查网络",{closable:!0}):((y=r==null?void 0:r.warning)==null||y.call(r,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=D)}}function a(){P&&(clearTimeout(P),P=null);for(const h of _)try{h()}catch{}_=[],f=[]}function u(){g.clear(),S.clear(),T.value=!1,a()}function p(){a(),g.clear(),S.clear(),T.value=!1}return{switchBasemap:M,resetCircuitBreaker:u,isCircuitOpen:T,cleanup:p}}const Ft=["0","1","2","3","4","5","6","7"],Pt="https://t{s}.tianditu.gov.cn/",ws="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",Ts=96188,Rt="custom-xyz",Qn="webgis_custom_basemap_url",Ms="cesium_tdt_label_layer_visible",ei="cesium_tdt_boundary_layer_visible",ti="cesium_tdt_text_label_layer_visible",ni="cesium_osm_buildings_visible",ii="cesium_google_photorealistic_3d_tiles_visible";function Ds(){return Wi.map(e=>({...e,description:Ls(e.value),source:"preset"}))}function Ls(e){const t=It(e);if(!t.length)return"复合底图";const n=t.map(i=>{const l=_n(i);return l?l.name:i});return n.slice(0,3).join(" + ")+(n.length>3?" ...":"")}const ai=Ds(),ri=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function Fs({getViewer:e,getCesium:t,message:n,backendBaseUrl:i,tiandituToken:l,cesiumIonToken:r}){let s=null,b=null,g=null,S=null,T=0,P=null,f=null,_=0,M=0,w=[];const A=()=>oi(l),F=()=>oi(r),a=[],u=X([]),p=new Map,h=new Map,c=new Map,m=new Map,o="cesium_custom_xyz_basemap_url",d=X(Rn),y=X("tianditu"),C=X(Zn(Qn,"")||Zn(o,"")),D=Tt(Ms,!1),E=X(Tt(ei,D??!1)),O=X(Tt(ti,D??!1)),R=X(Tt(ni,!1)),U=X(Tt(ii,!1)),B=Ce(()=>[...ai.map(v=>v.value!=="custom"?v:{...v,description:C.value?C.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!C.value}),...u.value]),j=_s({getViewer:e,getCesium:t,activeBasemap:d,applyBasemap:ge,resolvePresetLayerIds:It,message:n}),le=Ce(()=>j.isCircuitOpen.value),ve=Ce(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:E.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:O.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:R.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:U.value}]);Ae(d,v=>{!(e!=null&&e())||!(t!=null&&t())||ge(v)}),Ae(C,v=>{xs(Qn,v)}),Ae(y,async v=>{!(e!=null&&e())||!(t!=null&&t())||await $e(v)}),Ae(E,v=>{Et(ei,v),je()}),Ae(O,v=>{Et(ti,v),je()}),Ae(R,v=>{Et(ni,v),ee()}),Ae(U,v=>{Et(ii,v),J()});function se(){const v=t==null?void 0:t();if(!v)return[];p.clear(),h.clear();const I=ai.map(Z=>{const me=new v.ProviderViewModel({name:Z.label,tooltip:Es(Z),category:"项目底图",iconUrl:ci(Rs(Z.value),Is(Z.value,Z.label)),creationFunction:()=>q(Z.value)});return p.set(Z.value,me),h.set(me,Z.value),me}),Y=G();return u.value=Y.map((Z,me)=>{const De=String((Z==null?void 0:Z.name)||`官方底图 ${me+1}`).trim(),Re=Ns(De,me);return p.set(Re,Z),h.set(Z,Re),{value:Re,label:`官方 · ${De}`,description:String((Z==null?void 0:Z.tooltip)||De),source:"official"}}),[...I,...Y]}function ye(){const v=t==null?void 0:t();return v?(c.clear(),m.clear(),ri.map(I=>{const Y=new v.ProviderViewModel({name:I.label,tooltip:I.description||I.label,category:"项目地形",iconUrl:ci(Ps(I.value),As(I.value)),creationFunction:()=>et(I.value)});return c.set(I.value,Y),m.set(Y,I.value),Y})):[]}function fe(v=[]){return p.get(d.value)||v[0]}function Pe(v=[]){return c.get(y.value)||v[0]}function G(){const v=t==null?void 0:t();if(typeof(v==null?void 0:v.createDefaultImageryProviderViewModels)!="function")return[];try{return v.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function q(v){return It(v).length>0?H(v):v==="google"?Oe():v===Rt?Me():he()}function H(v){const I=t==null?void 0:t();if(!I)return[];const Y=It(v);if(!Y.length)return he();const Z=A(),me=C.value;return Na(I,Y,{tiandituTk:Z,customUrl:me})}function he(){const v=t==null?void 0:t();return[new v.UrlTemplateImageryProvider({url:`${Pt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${A()}`,subdomains:Ft,tilingScheme:new v.WebMercatorTilingScheme,maximumLevel:18})]}function Oe(){const v=t==null?void 0:t();return[new v.UrlTemplateImageryProvider({url:`${i}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new v.WebMercatorTilingScheme,maximumLevel:20})]}function Me(){const v=t==null?void 0:t(),I=li(C.value);return I.valid?[new v.UrlTemplateImageryProvider({url:I.url,subdomains:I.subdomains,tilingScheme:new v.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(I.message,{closable:!0}),he())}function Fe(){const v=t==null?void 0:t();return new v.UrlTemplateImageryProvider({url:`${Pt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${A()}`,subdomains:Ft,tilingScheme:new v.WebMercatorTilingScheme,maximumLevel:10})}function Ee(){const v=t==null?void 0:t();return new v.UrlTemplateImageryProvider({url:`${Pt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${A()}`,subdomains:Ft,tilingScheme:new v.WebMercatorTilingScheme,maximumLevel:18})}function He(){var ke,qe,$,K,oe;Be();const v=t==null?void 0:t(),I=(qe=(ke=e==null?void 0:e())==null?void 0:ke.baseLayerPicker)==null?void 0:qe.viewModel;if(!I||!(($=v==null?void 0:v.knockout)!=null&&$.getObservable))return;const Y=v.knockout.getObservable(I,"selectedImagery"),Z=v.knockout.getObservable(I,"selectedTerrain"),me=[],De=(K=Y==null?void 0:Y.subscribe)==null?void 0:K.call(Y,Se=>{const Ie=h.get(Se);Ie&&(d.value!==Ie&&(d.value=Ie),Ke())}),Re=(oe=Z==null?void 0:Z.subscribe)==null?void 0:oe.call(Z,Se=>{const Ie=m.get(Se);Ie&&(y.value!==Ie&&(y.value=Ie),Le(Ie))});De&&me.push(De),Re&&me.push(Re),w=me}function Be(){w.forEach(v=>{var I;return(I=v==null?void 0:v.dispose)==null?void 0:I.call(v)}),w=[]}function de(){return je(),ee(),J(),!0}function Ge(){const v=e==null?void 0:e();if(v!=null&&v.imageryLayers)for(;a.length;){const I=a.pop();try{v.imageryLayers.remove(I,!0)}catch{}}}function Ke(){var v,I,Y;je(),ee(),J(),(Y=(I=(v=e==null?void 0:e())==null?void 0:v.scene)==null?void 0:I.requestRender)==null||Y.call(I)}function je(){var I,Y;const v=e==null?void 0:e();!v||!(t!=null&&t())||(E.value?Ve():N(),O.value?We():z(),(Y=(I=v.scene).requestRender)==null||Y.call(I))}function Ve(){var I,Y,Z,me;const v=e==null?void 0:e();if(!(v!=null&&v.imageryLayers)||s)return s&&((Y=(I=v==null?void 0:v.imageryLayers)==null?void 0:I.raiseToTop)==null||Y.call(I,s)),s;try{return s=v.imageryLayers.addImageryProvider(Fe()),(me=(Z=v.imageryLayers).raiseToTop)==null||me.call(Z,s),s}catch(De){return n.error("天地图国界线图层加载失败",De),null}}function We(){var I,Y,Z,me;const v=e==null?void 0:e();if(!(v!=null&&v.imageryLayers)||b)return b&&((Y=(I=v==null?void 0:v.imageryLayers)==null?void 0:I.raiseToTop)==null||Y.call(I,b)),b;try{return b=v.imageryLayers.addImageryProvider(Ee()),(me=(Z=v.imageryLayers).raiseToTop)==null||me.call(Z,b),b}catch(De){return n.error("天地图文字标注图层加载失败",De),null}}function N(){const v=e==null?void 0:e();if(!(!s||!(v!=null&&v.imageryLayers))){try{v.imageryLayers.remove(s,!0)}catch{}s=null}}function z(){const v=e==null?void 0:e();if(!(!b||!(v!=null&&v.imageryLayers))){try{v.imageryLayers.remove(b,!0)}catch{}b=null}}async function ee(){var I,Y,Z;const v=e==null?void 0:e();!((I=v==null?void 0:v.scene)!=null&&I.primitives)||!(t!=null&&t())||(R.value?await Q():ae(),(Z=(Y=v.scene).requestRender)==null||Z.call(Y))}async function J(){var I,Y,Z;const v=e==null?void 0:e();!((I=v==null?void 0:v.scene)!=null&&I.primitives)||!(t!=null&&t())||(U.value?await ie():W(),(Z=(Y=v.scene).requestRender)==null||Z.call(Y))}async function ie(){var Z,me,De;const v=e==null?void 0:e(),I=t==null?void 0:t();if(!((Z=v==null?void 0:v.scene)!=null&&Z.primitives))return null;if(P)return v.scene.globe.show=!1,P;if(f)return f;if(typeof(I==null?void 0:I.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),U.value=!1,null;const Y=++_;Yt(I,F()),f=I.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const Re=await f;return Y!==_||!U.value?(si(Re),null):(P=v.scene.primitives.add(Re),v.scene.globe.show=!1,v.scene.skyAtmosphere.show=!0,(De=(me=v.scene).requestRender)==null||De.call(me),P)}catch(Re){return Y!==_||(U.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",Re)),null}finally{Y===_&&(f=null)}}function W(){var I,Y,Z;const v=e==null?void 0:e();if(_+=1,f=null,!P||!((I=v==null?void 0:v.scene)!=null&&I.primitives)){(Y=v==null?void 0:v.scene)!=null&&Y.globe&&(v.scene.globe.show=!0);return}try{v.scene.primitives.remove(P)}catch{}P=null,(Z=v==null?void 0:v.scene)!=null&&Z.globe&&(v.scene.globe.show=!0)}async function Q(){var Z,me,De,Re;const v=e==null?void 0:e(),I=t==null?void 0:t();if(!((Z=v==null?void 0:v.scene)!=null&&Z.primitives)||g)return g;if(S)return S;if(typeof((me=I==null?void 0:I.Cesium3DTileset)==null?void 0:me.fromIonAssetId)!="function"&&typeof(I==null?void 0:I.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),R.value=!1,null;const Y=++T;Yt(I,F()),await re(),S=Cs(I,{maximumScreenSpaceError:8});try{const ke=await S;return Y!==T||!R.value?(si(ke),null):(g=v.scene.primitives.add(ke),(Re=(De=v.scene).requestRender)==null||Re.call(De),g)}catch(ke){return Y!==T||(R.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",ke)),null}finally{Y===T&&(S=null)}}function ae(){var I,Y,Z;const v=e==null?void 0:e();if(T+=1,S=null,!(!g||!((I=v==null?void 0:v.scene)!=null&&I.primitives))){try{v.scene.primitives.remove(g)}catch{}g=null,(Z=(Y=v.scene).requestRender)==null||Z.call(Y)}}async function re(){if(y.value==="cesiumWorld")return!0;y.value="cesiumWorld";const v=await $e("cesiumWorld");return v||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),v}function ge(v,I={}){var De,Re,ke;const Y=e==null?void 0:e();if(!Y||!(t!=null&&t()))return!1;Ea(),Ge();const Z=(De=Y.baseLayerPicker)==null?void 0:De.viewModel,me=p.get(v);if(Z&&me){if(I.forceReload&&Z.selectedImagery===me){const qe=p.get(Rn)||p.get("tianditu");qe&&qe!==me&&(Z.selectedImagery=qe)}return Z.selectedImagery!==me&&(Z.selectedImagery=me),Ke(),!0}try{return q(v).forEach($=>{$&&a.push(Y.imageryLayers.addImageryProvider($))}),je(),(ke=(Re=Y.scene).requestRender)==null||ke.call(Re),!0}catch(qe){return n.error("地图源切换失败",qe),!1}}function Ue(){return $e(y.value)}async function $e(v){var ke,qe,$,K,oe,Se,Ie,tt,at,xt,St;const I=e==null?void 0:e(),Y=t==null?void 0:t();if(!I||!Y)return!1;const Z=(ke=I.baseLayerPicker)==null?void 0:ke.viewModel,me=c.get(v);if(Z&&me)return Z.selectedTerrain!==me&&(Z.selectedTerrain=me),Le(v),($=(qe=I.scene).requestRender)==null||$.call(qe),!0;const De=++M;if(v==="ellipsoid")return I.terrainProvider=new Y.EllipsoidTerrainProvider,Le(v),(oe=(K=I.scene).requestRender)==null||oe.call(K),!0;if(v==="cesiumWorld")try{const Qe=await L();return De!==M?!1:(I.terrainProvider=Qe,Le(v),(Ie=(Se=I.scene).requestRender)==null||Ie.call(Se),!0)}catch(Qe){return De!==M||(I.terrainProvider=new Y.EllipsoidTerrainProvider,Le("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",Qe)),!1}if(v==="arcgisWorld")try{const Qe=await k();return De!==M?!1:(I.terrainProvider=Qe,Le(v),(at=(tt=I.scene).requestRender)==null||at.call(tt),!0)}catch(Qe){return De!==M||(I.terrainProvider=new Y.EllipsoidTerrainProvider,Le("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",Qe)),!1}const Re=Jn(Y);try{return I.terrainProvider=new Re({url:`${Pt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Ft,token:A()}),Le(v),(St=(xt=I.scene).requestRender)==null||St.call(xt),!0}catch(Qe){return I.terrainProvider=new Y.EllipsoidTerrainProvider,Le("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",Qe),!1}}function Le(v){var Y;const I=e==null?void 0:e();(Y=I==null?void 0:I.scene)!=null&&Y.globe&&(I.scene.globe.depthTestAgainstTerrain=v!=="ellipsoid")}function et(v){const I=t==null?void 0:t();if(v==="ellipsoid")return new I.EllipsoidTerrainProvider;if(v==="cesiumWorld")return L().catch(Z=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",Z),V(v,"ellipsoid"),new I.EllipsoidTerrainProvider));if(v==="arcgisWorld")return k().catch(Z=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",Z),V(v,"ellipsoid"),new I.EllipsoidTerrainProvider));const Y=Jn(I);try{return new Y({url:`${Pt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Ft,token:A()})}catch(Z){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",Z),new I.EllipsoidTerrainProvider}}async function L(){var Y,Z;const v=t==null?void 0:t();Yt(v,F());const I={requestWaterMask:!1,requestVertexNormals:!0};if(typeof v.createWorldTerrainAsync=="function")return v.createWorldTerrainAsync(I);if(typeof v.createWorldTerrain=="function")return v.createWorldTerrain(I);if(typeof((Y=v.CesiumTerrainProvider)==null?void 0:Y.fromIonAssetId)=="function")return v.CesiumTerrainProvider.fromIonAssetId(1,I);if((Z=v.IonResource)!=null&&Z.fromAssetId&&v.CesiumTerrainProvider){const me=await v.IonResource.fromAssetId(1);return new v.CesiumTerrainProvider({url:me,...I})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function k(){var Y;const v=t==null?void 0:t();if(typeof((Y=v==null?void 0:v.ArcGISTiledElevationTerrainProvider)==null?void 0:Y.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return Ss(v).fromUrl(ws)}function V(v,I){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{y.value===v&&(y.value=I)},0)}function ne({overlayId:v,value:I}){if(v==="tdt-boundaries"){E.value=!!I;return}if(v==="tdt-text-labels"){O.value=!!I;return}if(v==="cesium-osm-buildings"){R.value=!!I;return}v==="google-photorealistic-3d-tiles"&&(U.value=!!I)}function ce({url:v}){const I=String(v||"").trim(),Y=li(I);if(!Y.valid){n.warning(Y.message,{closable:!0});return}if(C.value=I,d.value===Rt){ge(Rt,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}d.value=Rt,n.success("已切换到自定义 XYZ 图源")}function be(){Ge(),N(),z(),ae(),W(),Be()}return{activeBasemap:d,activeTerrain:y,customXyzBasemapUrl:C,basemapOptions:B,terrainOptions:ri,overlayOptions:ve,createImageryProviderViewModels:se,createTerrainProviderViewModels:ye,getSelectedImageryProviderViewModel:fe,getSelectedTerrainProviderViewModel:Pe,bindLayerPickerStateSync:He,addBaseImageryLayers:de,initCustomTerrain:Ue,applyBasemap:ge,applyTerrain:$e,handleOverlayToggle:ne,handleCustomBasemapSubmit:ce,cleanupLayers:be,basemapSwitcher:j,basemapCircuitOpen:le,resetCircuitBreaker:j.resetCircuitBreaker}}function Ps(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function As(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function oi(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function si(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function Cs(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const i=await e.Cesium3DTileset.fromIonAssetId(Ts,t);return!i.style&&typeof e.Cesium3DTileStyle=="function"&&(i.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),i}return e.createOsmBuildingsAsync(t)}function Es(e){return e.value===Rt?`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`:e.description||e.label}function Rs(e){const t=It(e);if(!t.length)return"#37d67a";const n=_n(t[0]);if(!n)return"#37d67a";const i=n.category;return i==="imagery"?"#5ea1ff":i==="vector"?"#37d67a":i==="terrain"?"#d0a449":i==="label"?"#a78bfa":i==="theme"?"#f59e0b":i==="custom"?"#f472b6":"#37d67a"}function Is(e,t){return String(t||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function li(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const i=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let l=[];return i?(l=ks(i[1],i[2]),n=n.replace(i[0],"{s}")):/\{s\}/i.test(n)&&(l=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:l}:zs(n)?{valid:!0,message:"",url:n,subdomains:l}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:l}}function ks(e,t){const n=String(e||"").charCodeAt(0),i=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(i))return[];const l=n<=i?1:-1,r=[];for(let s=n;l>0?s<=i:s>=i;s+=l)r.push(String.fromCharCode(s));return r}function zs(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function Ns(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function ci(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),i=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(i)}`}function Os({getViewer:e,getCesium:t,message:n}){function i(s){const b=e==null?void 0:e(),g=t==null?void 0:t();if(!b||!g)return;const S=typeof s=="number"?s:2;b.camera.flyTo({destination:g.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-g.Math.PI_OVER_TWO,roll:0},duration:S})}function l(){const s=e==null?void 0:e(),b=t==null?void 0:t();!s||!b||s.camera.flyTo({destination:b.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:b.Math.toRadians(0),pitch:b.Math.toRadians(-25),roll:0},duration:3})}async function r(){const s=e==null?void 0:e(),b=t==null?void 0:t();if(!(!s||!b))try{const g=await b.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");s.scene.primitives.add(g),s.flyTo(g,{duration:3,offset:new b.HeadingPitchRange(b.Math.toRadians(0),b.Math.toRadians(-25),g.boundingSphere.radius*2.5)})}catch(g){n.error(`加载模型失败: ${g}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:i,flyToEverest:l,loadCustomTileset:r}}const Hs="tileset.json";let $t=null;async function ui(){if($t)return $t;const[{decompressBuffer:e},{parseShpPartsToGeoJSON:t}]=await Promise.all([zt(()=>import("./decompressFile-DiMYlfaO.js").then(n=>n.f),__vite__mapDeps([2,3]),import.meta.url),zt(()=>import("./shpParser-B0CS5TVG.js").then(n=>n.s),__vite__mapDeps([4,3,1,5,6,7,8,9,10]),import.meta.url)]);return $t={decompressBuffer:e,parseShpPartsToGeoJSON:t},$t}function cn(e){const t=e.lastIndexOf(".");return t===-1?"":e.slice(t+1).toLowerCase()}function pt(e,t,n,i){if(!(!e||!t||!n))try{i==="3dtiles"&&n.boundingSphere?e.flyTo(n,{duration:2,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-30),n.boundingSphere.radius*2)}):n.entities&&n.entities.values.length>0&&e.flyTo(n,{duration:2})}catch{}}function _t(e){return URL.createObjectURL(e)}function nt(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function Bs({getViewer:e,getCesium:t,message:n}){const i=X([]),l=X(null);let r=0;async function s(c){const m=t(),o=e();if(!m||!o)throw new Error("Cesium 未初始化");const d=_t(c);try{const y=await m.GeoJsonDataSource.load(d,{stroke:m.Color.fromCssColorString("#3ddc84"),fill:m.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:m.Color.fromCssColorString("#3ddc84"),markerSize:24}),C=`geojson_${++r}`;y.name=c.name,await o.dataSources.add(y),pt(o,m,y,"geojson");const D={id:C,name:c.name,type:"geojson",entity:y,blobUrl:d};return i.value=[...i.value,D],n.success(`GeoJSON "${c.name}" 加载成功`),D}catch(y){throw nt(d),y}}async function b(c){const m=t(),o=e();if(!m||!o)throw new Error("Cesium 未初始化");const d=_t(c);try{const y=await m.KmlDataSource.load(d,{camera:o.scene.camera,canvas:o.scene.canvas}),C=`kml_${++r}`;y.name=c.name,await o.dataSources.add(y),pt(o,m,y,"kml");const D={id:C,name:c.name,type:"kml",entity:y,blobUrl:d};return i.value=[...i.value,D],n.success(`KML "${c.name}" 加载成功`),D}catch(y){throw nt(d),y}}async function g(c){const m=t(),o=e();if(!m||!o)throw new Error("Cesium 未初始化");const d=_t(c);try{const y=await m.KmlDataSource.load(d,{camera:o.scene.camera,canvas:o.scene.canvas}),C=`kmz_${++r}`;y.name=c.name,await o.dataSources.add(y),pt(o,m,y,"kmz");const D={id:C,name:c.name,type:"kmz",entity:y,blobUrl:d};return i.value=[...i.value,D],n.success(`KMZ "${c.name}" 加载成功`),D}catch{return nt(d),await S(c)}}async function S(c){const m=t(),o=e(),d=await c.arrayBuffer(),{decompressBuffer:y}=await ui(),D=(await y(d,c.name)).find(U=>{var B;return U.ext==="kml"||((B=U.name)==null?void 0:B.toLowerCase().endsWith(".kml"))});if(!D)throw new Error("KMZ 压缩包中未找到 KML 文件");let E;typeof D.content=="string"?E=D.content:D.content instanceof ArrayBuffer||D.content instanceof Uint8Array?E=Aa(D.content):E=String(D.content||"");const O=new Blob([E],{type:"application/vnd.google-earth.kml+xml"}),R=URL.createObjectURL(O);try{const U=await m.KmlDataSource.load(R,{camera:o.scene.camera,canvas:o.scene.canvas}),B=`kmz_${++r}`;U.name=c.name,await o.dataSources.add(U),pt(o,m,U,"kmz");const j={id:B,name:c.name,type:"kmz",entity:U};return i.value=[...i.value,j],n.success(`KMZ "${c.name}" 加载成功（手动解压）`),j}finally{URL.revokeObjectURL(R)}}async function T(c,m=[]){const o=t(),d=e();if(!o||!d)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:y}=await ui(),C={shp:await c.arrayBuffer()};for(const j of m){const le=cn(j.name);le==="dbf"&&(C.dbf=await j.arrayBuffer()),le==="shx"&&(C.shx=await j.arrayBuffer()),le==="prj"&&(C.prj=await j.arrayBuffer()),le==="cpg"&&(C.cpg=await j.arrayBuffer())}const D=await y(C),E=Array.isArray(D)?D:[D],O=E.reduce((j,le)=>{var ve;return j+(((ve=le==null?void 0:le.features)==null?void 0:ve.length)||0)},0),R=E.length===1?E[0]:{type:"FeatureCollection",features:E.flatMap(j=>(j==null?void 0:j.features)||[])},U=new Blob([JSON.stringify(R)],{type:"application/geo+json"}),B=URL.createObjectURL(U);try{const j=await o.GeoJsonDataSource.load(B,{stroke:o.Color.fromCssColorString("#ffcc00"),fill:o.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:o.Color.fromCssColorString("#ffcc00"),markerSize:20}),le=`shp_${++r}`;j.name=c.name,await d.dataSources.add(j),pt(d,o,j,"shp");const ve={id:le,name:c.name,type:"shp",entity:j};return i.value=[...i.value,ve],n.success(`Shapefile "${c.name}" 加载成功 (${O} 个要素)`),URL.revokeObjectURL(B),ve}catch(j){throw URL.revokeObjectURL(B),j}}async function P(c){const m=t(),o=e();if(!m||!o)throw new Error("Cesium 未初始化");const d=_t(c);let y=null;try{y=await A(c)}catch{}if(y)try{const C=await a(m,o,d,c.name,y),E={id:`gltf_${++r}`,name:c.name,type:"gltf",entity:C,blobUrl:d};return i.value=[...i.value,E],n.success(`3D 模型 "${c.name}" 加载成功 (${y.lng.toFixed(4)}, ${y.lat.toFixed(4)}, ${y.height.toFixed(1)}m)`),E}catch(C){throw nt(d),C}return l.value&&nt(l.value.blobUrl),l.value={file:c,blobUrl:d,name:c.name},{needsCoordInput:!0,file:c}}async function f(c){const m=t(),o=e();if(!l.value)throw new Error("没有等待确认的模型文件");const{blobUrl:d,name:y}=l.value;try{const C=await a(m,o,d,y,c),E={id:`gltf_${++r}`,name:y,type:"gltf",entity:C,blobUrl:d};i.value=[...i.value,E],n.success(`3D 模型 "${y}" 加载成功 (${c.lng.toFixed(4)}, ${c.lat.toFixed(4)}, ${c.height.toFixed(1)}m)`);const O=m.Cartesian3.fromDegrees(c.lng,c.lat,c.height+500);return o.camera.flyTo({destination:O,orientation:{heading:m.Math.toRadians(0),pitch:m.Math.toRadians(-30),roll:0},duration:2}),l.value=null,E}catch(C){throw nt(d),l.value=null,C}}function _(){l.value&&(nt(l.value.blobUrl),l.value=null)}async function M(c){const m=t(),o=e();if(!m||!o)throw new Error("Cesium 未初始化");const d=_t(c);try{const y=await m.CzmlDataSource.load(d),C=`czml_${++r}`;y.name=c.name,await o.dataSources.add(y),pt(o,m,y,"czml");const D={id:C,name:c.name,type:"czml",entity:y,blobUrl:d};return i.value=[...i.value,D],n.success(`CZML "${c.name}" 加载成功`),D}catch(y){throw nt(d),y}}async function w(c){const m=t(),o=e();if(!m||!o)throw new Error("Cesium 未初始化");const d=_t(c);try{const y=await m.Cesium3DTileset.fromUrl(d),C=`tileset_${++r}`;o.scene.primitives.add(y);const D={id:C,name:c.name,type:"3dtiles",entity:y,blobUrl:d};return i.value=[...i.value,D],pt(o,m,y,"3dtiles"),n.success(`3D Tiles "${c.name}" 加载成功`),D}catch(y){throw nt(d),y}}async function A(c){var y,C,D,E,O;const m=cn(c.name);let o;if(m==="gltf"){const R=await c.text();o=JSON.parse(R)}else{const R=await c.arrayBuffer();o=F(R)}if(!o)return null;if((y=o.extensionsUsed)!=null&&y.includes("CESIUM_RTC")&&((D=(C=o.extensions)==null?void 0:C.CESIUM_RTC)!=null&&D.center)){const R=o.extensions.CESIUM_RTC.center;if(R.length>=3){const U=t();if(U){const B=new U.Cartesian3(R[0],R[1],R[2]),j=U.Cartographic.fromCartesian(B);return{lng:U.Math.toDegrees(j.longitude),lat:U.Math.toDegrees(j.latitude),height:j.height}}}}const d=(E=o.asset)==null?void 0:E.extras;if(d){const R=d.longitude??d.lng,U=d.latitude??d.lat,B=d.height??d.altitude??d.alt??0;if(R!=null&&U!=null)return{lng:Number(R),lat:Number(U),height:Number(B)}}if(((O=o.nodes)==null?void 0:O.length)>0&&o.nodes[0].matrix){const R=o.nodes[0].matrix;if(R.length>=16){const U=R[12],B=R[13],j=R[14];if(Math.abs(U)>1e5||Math.abs(B)>1e5){const le=t();if(le)try{const ve=new le.Cartesian3(U,B,j),se=le.Cartographic.fromCartesian(ve);return{lng:le.Math.toDegrees(se.longitude),lat:le.Math.toDegrees(se.latitude),height:se.height}}catch{}}}}return null}function F(c){if(c.byteLength<20)return null;const m=new DataView(c);if(m.getUint32(0,!0)!==1179937895)return null;const d=m.getUint32(12,!0);if(m.getUint32(16,!0)!==1313821514)return null;const C=new Uint8Array(c,20,d),D=new TextDecoder().decode(C);try{return JSON.parse(D)}catch{return null}}async function a(c,m,o,d,y){const{lng:C,lat:D,height:E}=y,O=c.Cartesian3.fromDegrees(C,D,E),R=new c.HeadingPitchRoll(0,0,0),U=c.Transforms.localFrameToFixedFrameGenerator("north","west"),B=await c.Model.fromGltfAsync({url:o,modelMatrix:c.Transforms.headingPitchRollToFixedFrame(O,R,c.Ellipsoid.WGS84,U),scale:1,show:!0});return B.name=d,m.scene.primitives.add(B),B}async function u(c){const m=e(),o=t();if(!m||!o)throw n.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const d=cn(c.name);try{switch(d){case"geojson":case"json":return c.name.toLowerCase().includes(Hs)?await w(c):await s(c);case"kml":return await b(c);case"kmz":return await g(c);case"shp":return await T(c);case"glb":case"gltf":return await P(c);case"czml":return await M(c);default:throw n.error(`不支持的文件格式: .${d}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${d}`)}}catch(y){throw n.error(`加载 "${c.name}" 失败: ${y.message||y}`),y}}function p(c){const m=i.value.find(d=>d.id===c);if(!m)return;const o=e();if(o){try{m.type==="3dtiles"?o.scene.primitives.remove(m.entity):o.dataSources.remove(m.entity,!0)}catch{}m.blobUrl&&nt(m.blobUrl),i.value=i.value.filter(d=>d.id!==c),n.info(`已移除 "${m.name}"`)}}function h(){var o,d,y,C,D;const c=e();if(!c){i.value=[];return}for(const E of i.value){try{E.type==="3dtiles"?c.scene.primitives.remove(E.entity):c.dataSources.remove(E.entity,!0)}catch{}E.blobUrl&&nt(E.blobUrl)}if(Array.isArray((o=c.dataSources)==null?void 0:o.dataSources)){const E=c.dataSources.dataSources.slice();for(const O of E)if(O&&!O.isBaseLayerPickerDataSource)try{c.dataSources.remove(O,!0)}catch{}}const m=t();if(m&&Array.isArray((y=(d=c.scene)==null?void 0:d.primitives)==null?void 0:y.primitives)){const E=c.scene.primitives.primitives.slice();for(const O of E)if(!(!O||!(O instanceof m.Cesium3DTileset||O instanceof m.Model||O.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(O.name||"")))))try{c.scene.primitives.remove(O)}catch{}}i.value=[],_();try{(D=(C=c.scene).requestRender)==null||D.call(C)}catch{}n.info("已清除所有导入数据")}return{loadDataFile:u,loadedDataSources:i,removeDataSource:p,clearAllDataSources:h,pendingGltfFile:l,loadGltfWithUserCoords:f,cancelPendingGltf:_}}let un=null;function Ws(){return un||(un=zt(()=>import("./index-DoE1naZT.js"),__vite__mapDeps([11,12]),import.meta.url)),un}let Ne=null,Mt=null,kt=null;const Fn=X(!1),Nt=X(!0),Kt=X(""),Ot=X({}),Mi={white:["white"],cyan:["#00ffff","#00ccff","#0099ff"],rainbow:["blue","cyan","green","yellow","orange","red"],thermal:["#000033","#0000ff","#00ffff","#00ff00","#ffff00","#ff0000","#ffffff"],ocean:["#001133","#003366","#006699","#0099cc","#00ccff","#66ddff"],wind:["#f0f0f0","#d0d0e0","#a0a0c0","#7070a0","#404080"]};async function Di(e,t,n={}){if(!e||e.isDestroyed())return null;Ne&&Li(),Mt=e;try{const{WindLayer:i}=await Ws(),l={particleHeight:1e3,particlesTextureSize:100,speedFactor:1,dropRate:.003,dropRateBump:.01,lineWidth:{min:1,max:2},lineLength:{min:20,max:100},colors:Mi.white,flipY:!1,useViewerBounds:!1,dynamic:!0,...n},r=pn(t);return Ne=new i(e,r,l),Fn.value=!0,Nt.value=!0,Ot.value={...l},Ne}catch{return null}}function pn(e){let t=e.bounds;!t&&e.bbox&&(t={west:e.bbox[0],south:e.bbox[1],east:e.bbox[2],north:e.bbox[3]});const n={array:e.u.array instanceof Float32Array?e.u.array:new Float32Array(e.u.array),min:e.u.min,max:e.u.max},i={array:e.v.array instanceof Float32Array?e.v.array:new Float32Array(e.v.array),min:e.v.min,max:e.v.max};return{u:n,v:i,width:e.width,height:e.height,bounds:t,speed:e.speed}}async function Us(e,t={},n=""){if(!Mt)return null;let i;try{if(typeof e=="string"){const l=await fetch(e);if(!l.ok)throw new Error(`HTTP ${l.status}`);const r=await l.json();i=pn(r),Kt.value=n||e.split("/").pop()}else if(typeof e=="object")i=pn(e),Kt.value=n||"Direct Data";else throw new Error("无效的参数类型，需要 URL 字符串或数据对象");return Ne&&!Ne.isDestroyed()?Ne.updateWindData(i):await Di(Mt,i,t),Ne}catch{return null}}function Gs(e){!Ne||Ne.isDestroyed()||(clearTimeout(kt),kt=setTimeout(()=>{try{Ne.updateOptions(e),Ot.value={...Ot.value,...e}}catch{}},50))}function $s(e=1.5){!Ne||Ne.isDestroyed()||Ne.zoomTo(e)}function qs(e){if(!Ne||Ne.isDestroyed())return;const t=e!==void 0?e:!Nt.value;Ne.show=t,Nt.value=t}function js(e,t){return!Ne||Ne.isDestroyed()?null:Ne.getDataAtLonLat(e,t)}function Li(){if(kt&&(clearTimeout(kt),kt=null),Ne){try{Ne.isDestroyed()||Ne.destroy()}catch{}Ne=null}Mt=null,Fn.value=!1,Nt.value=!0,Kt.value="",Ot.value={}}function Vs(){return Ne}function Ys(e){!e||e.isDestroyed()||(Mt=e)}function Xs(){return Mt}function Ks(){return{isLoaded:Fn,isVisible:Nt,currentDataSource:Kt,currentOptions:Ot,COLOR_PRESETS:Mi,initWindLayer:Di,loadWindData:Us,updateWindOptions:Gs,flyToWindArea:$s,toggleVisibility:qs,getWindAtPoint:js,destroyWindLayer:Li,getWindLayer:Vs,setViewer:Ys,getViewer:Xs}}const Pn={wind:{key:"wind",name:"风场数据 (印尼区域)",path:"/wind-data/wind.json",description:"印尼区域风场数据，464×374 网格",flipY:!0,useViewerBounds:!0},ocean:{key:"ocean",name:"洋流数据 (印尼区域)",path:"/wind-data/ocean.json",description:"印尼区域洋流数据，438×336 网格",flipY:!0,useViewerBounds:!0}},dn=new Map;function Zs(){return Object.values(Pn).map(({key:e,name:t,description:n})=>({key:e,name:t,description:n}))}function Js(e){const t=Pn[e];return t?{flipY:t.flipY,useViewerBounds:t.useViewerBounds}:{flipY:!1,useViewerBounds:!1}}async function Qs(e){if(dn.has(e))return dn.get(e);const t=Pn[e];if(!t)return null;try{const n=await fetch(t.path);if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);const i=await n.json(),l=el(i);return dn.set(e,l),l}catch{return null}}function el(e){let t=e.bounds;!t&&e.bbox&&(t={west:e.bbox[0],south:e.bbox[1],east:e.bbox[2],north:e.bbox[3]});const n={array:e.u.array instanceof Float32Array?e.u.array:new Float32Array(e.u.array),min:e.u.min,max:e.u.max},i={array:e.v.array instanceof Float32Array?e.v.array:new Float32Array(e.v.array),min:e.v.min,max:e.v.max},l={u:n,v:i,width:e.width,height:e.height,bounds:t};return e.speed&&(l.speed={array:e.speed.array instanceof Float32Array?e.speed.array:new Float32Array(e.speed.array),min:e.speed.min,max:e.speed.max}),l}const tl="cesium_tool_panel_open";function nl({fluidPanelRef:e,sceneActions:t={},wind:n={},modelManager:i=null,cameraEnhanced:l=null,heightSampler:r=null,playerController:s=null,panelStorageKey:b=tl}={}){const g=X(Tt(b,!0)),S=X({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),T=X({enableLighting:!0,showGroundAtmosphere:!0,dynamicAtmosphereLighting:!0,dynamicAtmosphereLightingFromSun:!0,atmosphereLightIntensity:5.5,atmosphereHueShift:-.015,atmosphereSaturationShift:.08,atmosphereBrightnessShift:.02,lightingFadeInDistance:0,lightingFadeOutDistance:Number.MAX_SAFE_INTEGER,nightFadeInDistance:0,nightFadeOutDistance:Number.MAX_SAFE_INTEGER,fogEnabled:!1,fogDensity:12e-5,fogMinimumBrightness:.035,sunShow:!0,moonShow:!0,skyBoxShow:!0}),P=X({dayNightEnabled:!0,nightFactor:0,moonLightEnabled:!0,moonLightIntensity:.18,ambientIntensity:.08,starsEnabled:!0,starsIntensity:1}),f=X({cloudsEnabled:!1,cloudCoverage:.3,cloudSpeed:.001,cloudBottom:1500,cloudTop:2150,cloudQuality:"medium",cloudWindDirection:90,cloudScattering:1,cloudAbsorption:0,cloudAnisotropy1:.7,cloudAnisotropy2:-.2,cloudAnisotropyMix:.5,cloudSkyLight:1,cloudGroundBounce:1,cloudPowder:.8,cloudDensityScale:1,cloudShapeAmount:1,cloudDetailAmount:.5,cloudTurbulence:350,cloudHazeDensity:3e-5,cloudHazeExponent:.001}),_=X({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null,floodSpeed:5}),M=X({speed:300,flySpeed:55e3,gravity:-2400,jumpHeight:600,sensitivity:5,acceleration:30,deceleration:30,spawnHeight:500}),w=X({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null,floodSimActive:!1}),A=X(!1),F=X({elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2}),a=X({isLoaded:!1,isVisible:!0,currentDataSource:""}),u=X({sampleData:"wind",particlesTextureSize:100,particleHeight:1e3,speedFactor:1,dropRate:.003,dropRateBump:.01,lineWidthMin:1,lineWidthMax:2,lineLengthMin:20,lineLengthMax:100,colorPreset:"white",flipY:!1,useViewerBounds:!1,dynamic:!0}),p=Ce(()=>{var D,E,O,R,U,B,j,le,ve,se,ye,fe,Pe,G,q,H,he,Oe,Me,Fe,Ee,He,Be,de;return[{id:"scene",title:"场景导航",description:"相机飞行和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"atmosphere",title:"大气·光照·天空",description:"Cesium 原生光照 + Tellux 增强大气 + 高级后效（全部可选）",status:S.value.atmosphere||S.value.fog||S.value.hbao?"部分启用":"仅晨昏半球",statusTone:S.value.atmosphere?"success":"neutral",controls:[...hl(T.value),{id:"fog",label:"高度雾",type:"toggle",value:S.value.fog,tooltip:"基于高度的指数雾效"},{id:"hbao",label:"微阴影",type:"toggle",value:S.value.hbao,tooltip:"环境光遮蔽（HBAO）"},{id:"tiltShift",label:"移轴",type:"toggle",value:S.value.tiltShift,tooltip:"移轴模糊后处理"},{id:"atmosphere",label:"大气效果",type:"toggle",value:S.value.atmosphere,tooltip:"启用 Tellux 大气渲染（日夜过渡、月光、星空）"},...ul(P.value,!S.value.atmosphere)]},{id:"cloud",title:"体积云",description:"PostProcessStage Ray Marching 体积云渲染",status:f.value.cloudsEnabled?f.value.cloudQuality??"medium":"未启用",statusTone:f.value.cloudsEnabled?"success":"neutral",controls:dl(f.value,!f.value.cloudsEnabled)},{id:"tools",title:"空间工具",description:"模型加载、增强相机、高度采样（Tellux 移植）",status:(((D=i==null?void 0:i.modelCount)==null?void 0:D.value)>0?"模型":"")||(((E=l==null?void 0:l.flightState)==null?void 0:E.value)==="flying"?"飞行中":"就绪"),statusTone:((O=i==null?void 0:i.modelCount)==null?void 0:O.value)>0?"success":"neutral",controls:[{id:"modelManagerEnabled",label:"模型管理",type:"toggle",value:!1,tooltip:"启用后可加载 glTF/GLB 模型到地理坐标位置"},{id:"cameraEnhancedEnabled",label:"增强相机",type:"toggle",value:!1,tooltip:"自定义缓动函数、角度插值和弹簧物理"},{id:"heightSamplerEnabled",label:"高度采样",type:"toggle",value:!1,tooltip:"地形高度查询、批量异步采样、屏幕坐标拾取"}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(R=n.wind2D)!=null&&R.value?"已加载":"未加载",statusTone:(U=n.wind2D)!=null&&U.value?"success":"neutral",actions:[{id:"load",label:(B=n.wind2D)!=null&&B.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((j=n.wind2D)!=null&&j.value)}],controls:il((le=n.windParams)==null?void 0:le.value,!!((ve=n.wind2D)!=null&&ve.value))},{id:"windViz",title:"风场粒子 (GPU)",description:"GPU 加速风场粒子可视化（cesium-wind-layer）",status:a.value.isLoaded?a.value.currentDataSource:"未加载",statusTone:a.value.isLoaded?"success":"neutral",actions:[{id:"loadWind",label:"加载风场",variant:"primary",disabled:a.value.isLoaded},{id:"loadOcean",label:"加载洋流",variant:"default",disabled:a.value.isLoaded},{id:"flyTo",label:"飞行到区域",disabled:!a.value.isLoaded},{id:"toggle",label:a.value.isVisible?"隐藏":"显示",disabled:!a.value.isLoaded},{id:"destroy",label:"销毁",variant:"danger",disabled:!a.value.isLoaded}],controls:al(u.value,!a.value.isLoaded)},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:w.value.isPicking?"等待选点":w.value.hasFluid?"已创建":"未创建",statusTone:w.value.isPicking?"warning":w.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:w.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:w.value.isPicking},{id:"floodSim",label:w.value.floodSimActive?"停止洪水":"洪水模拟",variant:w.value.floodSimActive?"danger":"default",active:w.value.floodSimActive,disabled:!rl(w.value)},{id:"clear",label:"清除",variant:"danger",disabled:!w.value.hasFluid&&!w.value.isPicking}],controls:ol(_.value,w.value)},{id:"shallowWater",title:"热带浅水",description:"Three.js 热带浅水场景（焦散/折射/物理吸色/体积云/闪电）",status:A.value?"已启用":"未启用",statusTone:A.value?"success":"neutral",actions:[{id:"toggle",label:A.value?"关闭":"启用",variant:A.value?"danger":"primary"}],controls:fl(F.value,!A.value)},{id:"player",title:"人物漫游",description:"第一/第三人称视角 + WASD 移动 + 碰撞检测 + 飞行模式",status:(se=s==null?void 0:s.isActive)!=null&&se.value?(ye=s.isFirstPerson)!=null&&ye.value?"第一人称":"第三人称":"未启动",statusTone:(fe=s==null?void 0:s.isActive)!=null&&fe.value?"success":"neutral",actions:[{id:"toggle",label:(Pe=s==null?void 0:s.isActive)!=null&&Pe.value?"停止漫游":"启动漫游",variant:(G=s==null?void 0:s.isActive)!=null&&G.value?"danger":"primary"},{id:"changeView",label:"切换视角",disabled:!((q=s==null?void 0:s.isActive)!=null&&q.value)},{id:"setNavTarget",label:(H=s==null?void 0:s.navTarget)!=null&&H.value?"更改目标":"设置导航"},{id:"clearNavTarget",label:"清除导航",disabled:!((he=s==null?void 0:s.navTarget)!=null&&he.value)}],controls:[{id:"speed",label:"行走速度",type:"range",value:M.value.speed,min:50,max:2e3,step:10,disabled:!((Oe=s==null?void 0:s.isActive)!=null&&Oe.value)},{id:"flySpeed",label:"飞行速度",type:"range",value:M.value.flySpeed,min:2e3,max:1e6,step:1e3,disabled:!((Me=s==null?void 0:s.isActive)!=null&&Me.value)},{id:"gravity",label:"重力",type:"range",value:M.value.gravity,min:-6e3,max:0,step:50,disabled:!((Fe=s==null?void 0:s.isActive)!=null&&Fe.value)},{id:"jumpHeight",label:"跳跃高度",type:"range",value:M.value.jumpHeight,min:0,max:3e3,step:50,disabled:!((Ee=s==null?void 0:s.isActive)!=null&&Ee.value)},{id:"sensitivity",label:"鼠标灵敏度",type:"range",value:M.value.sensitivity,min:1,max:20,step:.5,disabled:!((He=s==null?void 0:s.isActive)!=null&&He.value)},{id:"acceleration",label:"加速惯性",type:"range",value:M.value.acceleration,min:1,max:100,step:1,disabled:!((Be=s==null?void 0:s.isActive)!=null&&Be.value),tooltip:"值越大加速越快。WASD 按下后到达目标速度的响应快慢。"},{id:"deceleration",label:"减速惯性",type:"range",value:M.value.deceleration,min:1,max:100,step:1,disabled:!((de=s==null?void 0:s.isActive)!=null&&de.value),tooltip:"值越大松手后停得越快。影响滑行/惯性感。"},{id:"spawnHeight",label:"初始高度",type:"range",value:M.value.spawnHeight,min:50,max:5e3,step:50,disabled:!1,tooltip:"漫游启动时的离地高度（米），重启后生效。"}]}]});Ae(g,D=>{Et(b,D)});const h=Ks();function c({moduleId:D,actionId:E}){var R,U;(U=(R={scene:{home:()=>{var B;return(B=t.flyToHome)==null?void 0:B.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},windViz:{loadWind:()=>y("wind"),loadOcean:()=>y("ocean"),flyTo:()=>h.flyToWindArea(1.5),toggle:()=>{const B=!a.value.isVisible;h.toggleVisibility(B),a.value={...a.value,isVisible:B}},destroy:()=>{h.destroyWindLayer(),a.value={isLoaded:!1,isVisible:!0,currentDataSource:""}}},fluid:{pick:()=>{var B,j;return(j=(B=e==null?void 0:e.value)==null?void 0:B.startPickHeightMap)==null?void 0:j.call(B)},floodSim:()=>{var B,j;return(j=(B=e==null?void 0:e.value)==null?void 0:B.toggleFloodSimulation)==null?void 0:j.call(B)},clear:()=>{var B,j;return(j=(B=e==null?void 0:e.value)==null?void 0:B.clearFluid)==null?void 0:j.call(B)}},shallowWater:{toggle:()=>{A.value=!A.value}},player:{toggle:()=>{var B;return(B=s==null?void 0:s.togglePlayer)==null?void 0:B.call(s,{spawnHeight:M.value.spawnHeight})},changeView:()=>{var B;return(B=s==null?void 0:s.changeView)==null?void 0:B.call(s)},setNavTarget:()=>{var B;return(B=s==null?void 0:s.openNavDialog)==null?void 0:B.call(s)},clearNavTarget:()=>{var B;return(B=s==null?void 0:s.clearNavTarget)==null?void 0:B.call(s)}}}[D])==null?void 0:R[E])==null||U.call(R)}function m({moduleId:D,controlId:E,value:O}){var R,U,B,j,le,ve;if(D==="wind"&&E in(((R=n.windParams)==null?void 0:R.value)||{})){(U=n.setWindParam)==null||U.call(n,E,O);return}if(D==="windViz"&&E in u.value){u.value={...u.value,[E]:O};const se={particlesTextureSize:fe=>({particlesTextureSize:Number(fe)}),particleHeight:fe=>({particleHeight:Number(fe)}),speedFactor:fe=>({speedFactor:Number(fe)}),dropRate:fe=>({dropRate:Number(fe)}),dropRateBump:fe=>({dropRateBump:Number(fe)}),lineWidthMin:fe=>({lineWidth:{min:Number(fe),max:u.value.lineWidthMax}}),lineWidthMax:fe=>({lineWidth:{min:u.value.lineWidthMin,max:Number(fe)}}),lineLengthMin:fe=>({lineLength:{min:Number(fe),max:u.value.lineLengthMax}}),lineLengthMax:fe=>({lineLength:{min:u.value.lineLengthMin,max:Number(fe)}}),colorPreset:fe=>({colors:h.COLOR_PRESETS[fe]||["white"]}),flipY:fe=>({flipY:!!fe}),useViewerBounds:fe=>({useViewerBounds:!!fe}),dynamic:fe=>({dynamic:!!fe})},ye=(B=se[E])==null?void 0:B.call(se,O);ye&&h.updateWindOptions(ye);return}if(D==="fluid"&&E in _.value){_.value={..._.value,[E]:E==="waterColor"?O:Number(O)},E==="floodSpeed"&&((le=(j=e==null?void 0:e.value)==null?void 0:j.setFloodSpeed)==null||le.call(j,Number(O)));return}if(D==="shallowWater"&&E in F.value){F.value={...F.value,[E]:E==="waterColor"||E==="lightningEnabled"?O:Number(O)};return}if(D==="player"&&E in M.value){const se=Number(O);if(M.value={...M.value,[E]:se},E==="spawnHeight")return;const ye=(ve=s==null?void 0:s.getPlayerInstance)==null?void 0:ve.call(s);ye&&(E==="speed"?ye.setPlayerSpeed(se):E==="flySpeed"?ye.setPlayerFlySpeed(se):E==="gravity"?ye.setGravity(se):E==="jumpHeight"?ye.setJumpHeight(se):E==="sensitivity"?ye.setMouseSensitivity(se):E==="acceleration"?ye.setAcceleration(se):E==="deceleration"&&ye.setDeceleration(se));return}if(D==="atmosphere"){if(E in S.value){S.value={...S.value,[E]:!!O};return}if(E in T.value){T.value={...T.value,[E]:O};return}if(E==="atmosphereEnabled"){S.value={...S.value,atmosphere:!!O};return}E in P.value&&(P.value={...P.value,[E]:O})}D==="cloud"&&E in f.value&&(f.value={...f.value,[E]:E==="cloudQuality"?O:Number(O)})}function o(D){const E=dt(D==null?void 0:D.waterLevel),O=dt(D==null?void 0:D.waterLevelMin),R=dt(D==null?void 0:D.waterLevelMax),U=dt(D==null?void 0:D.floodSpeed);w.value={isPicking:!!(D!=null&&D.isPicking),hasFluid:!!(D!=null&&D.hasFluid),selectedText:(D==null?void 0:D.selectedText)||"",waterLevel:E,waterLevelMin:O,waterLevelMax:R,floodSimActive:!!(D!=null&&D.floodSimActive)},U!==null&&(_.value={..._.value,floodSpeed:U}),E!==null&&(_.value={..._.value,waterLevel:E})}function d(D){h.setViewer(D)}async function y(D){const E=h.getViewer();if(!E)return;const O=await Qs(D);if(!O)return;const R=Js(D);await h.initWindLayer(E,O,{...R,colors:h.COLOR_PRESETS[u.value.colorPreset]||["white"],particlesTextureSize:u.value.particlesTextureSize,particleHeight:u.value.particleHeight,speedFactor:u.value.speedFactor,dropRate:u.value.dropRate,dropRateBump:u.value.dropRateBump,lineWidth:{min:u.value.lineWidthMin,max:u.value.lineWidthMax},lineLength:{min:u.value.lineLengthMin,max:u.value.lineLengthMax},dynamic:u.value.dynamic});const U=Zs().find(B=>B.key===D);a.value={isLoaded:!0,isVisible:!0,currentDataSource:(U==null?void 0:U.name)||D}}function C(){var D;(D=n.clearWind2D)==null||D.call(n),h.destroyWindLayer(),a.value={isLoaded:!1,isVisible:!0,currentDataSource:""}}return{toolPanelOpen:g,advancedEffectControls:S,baseAtmosphereParams:T,atmosphereParams:P,cloudParams:f,fluidParams:_,fluidState:w,shallowWaterVisible:A,shallowWaterParams:F,windVizState:a,windVizParams:u,toolModules:p,handleToolAction:c,handleToolControlChange:m,handleFluidStateChange:o,initWindVizViewer:d,cleanupTools:C}}function il(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function al(e={},t){return[{id:"particlesTextureSize",label:"粒子密度",type:"range",min:10,max:300,step:10,value:e.particlesTextureSize??100,displayValue:`${e.particlesTextureSize??100}²`,disabled:t},{id:"particleHeight",label:"粒子高度 (m)",type:"range",min:0,max:1e4,step:100,value:e.particleHeight??1e3,displayValue:`${e.particleHeight??1e3} m`,disabled:t},{id:"speedFactor",label:"运动速度",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"dropRate",label:"丢弃率",type:"range",min:0,max:.05,step:.001,value:e.dropRate??.003,displayValue:Number(e.dropRate??.003).toFixed(3),disabled:t},{id:"lineWidthMin",label:"最小宽度",type:"range",min:.5,max:5,step:.5,value:e.lineWidthMin??1,displayValue:Number(e.lineWidthMin??1).toFixed(1),disabled:t},{id:"lineWidthMax",label:"最大宽度",type:"range",min:1,max:10,step:.5,value:e.lineWidthMax??2,displayValue:Number(e.lineWidthMax??2).toFixed(1),disabled:t},{id:"lineLengthMin",label:"最小长度",type:"range",min:5,max:100,step:5,value:e.lineLengthMin??20,displayValue:`${e.lineLengthMin??20}`,disabled:t},{id:"lineLengthMax",label:"最大长度",type:"range",min:20,max:300,step:10,value:e.lineLengthMax??100,displayValue:`${e.lineLengthMax??100}`,disabled:t},{id:"colorPreset",label:"颜色方案",type:"select",value:e.colorPreset??"white",options:[{value:"white",label:"白色"},{value:"cyan",label:"青色"},{value:"rainbow",label:"彩虹"},{value:"thermal",label:"热力"},{value:"ocean",label:"海洋"},{value:"wind",label:"风色"}],disabled:t},{id:"flipY",label:"翻转 Y 轴",type:"toggle",value:e.flipY??!1,disabled:t},{id:"useViewerBounds",label:"使用视域范围",type:"toggle",value:e.useViewerBounds??!1,disabled:t},{id:"dynamic",label:"动态更新",type:"toggle",value:e.dynamic??!0,disabled:t}]}function rl(e){return dt(e.waterLevelMin)!==null&&dt(e.waterLevelMax)!==null}function ol(e,t={}){const n=dt(t.waterLevelMin),i=dt(t.waterLevelMax),l=n!==null&&i!==null,r=l?Math.min(n,i):0,s=l?Math.max(n,i):0,b=dt(e.waterLevel),g=l?sl(b??r,r,s):0,S=l?Math.max((s-r)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:r,max:s,step:S,value:g,displayValue:l?`${ll(g)} m`:"先捕捉",disabled:!l,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"floodSpeed",label:"洪水速度",type:"range",min:l?Math.max((s-r)/100,.01):.1,max:l?Math.max(s-r,1):50,step:l?Math.max((s-r)/1e3,.01):.5,value:e.floodSpeed??(l?(s-r)/10:5),displayValue:(()=>{const T=s-r,P=e.floodSpeed??(l?T/10:5),f=l&&P>0?T/P:0;return l?`${Number(P).toFixed(1)} m/s（${f.toFixed(1)}s）`:"先捕捉"})(),disabled:!l||!!t.floodSimActive,tooltip:"洪水模拟水位上涨速度。默认值域÷10（10s 完成），可自定义。范围：100s ~ 1s 完成。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function dt(e){const t=Number(e);return Number.isFinite(t)?t:null}function sl(e,t,n){return Math.max(t,Math.min(n,e))}function ll(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const cl={low:{label:"低"},medium:{label:"中"},high:{label:"高"},ultra:{label:"超高"}};function ul(e={},t){return[{id:"atmosphereEnabled",label:"大气效果",type:"toggle",value:!t,tooltip:"启用 Tellux 大气渲染系统（日夜过渡、月光、体积云、星空）"},{id:"dayNightEnabled",label:"日夜过渡",type:"toggle",value:e.dayNightEnabled!==!1,disabled:t,tooltip:"基于太阳高度角的平滑日夜过渡效果"},{id:"moonLightEnabled",label:"月光",type:"toggle",value:e.moonLightEnabled!==!1,disabled:t,tooltip:"夜间月光照明效果"},{id:"moonLightIntensity",label:"月光强度",type:"range",min:0,max:1,step:.01,value:e.moonLightIntensity??.18,displayValue:Number(e.moonLightIntensity??.18).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"ambientIntensity",label:"环境光",type:"range",min:0,max:1,step:.01,value:e.ambientIntensity??.08,displayValue:Number(e.ambientIntensity??.08).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"starsEnabled",label:"星空",type:"toggle",value:e.starsEnabled!==!1,disabled:t,tooltip:"基于高度的星空可见性"},{id:"starsIntensity",label:"星空强度",type:"range",min:0,max:5,step:.1,value:e.starsIntensity??1,displayValue:Number(e.starsIntensity??1).toFixed(1),disabled:t||!e.starsEnabled}]}function dl(e={},t){return[{id:"cloudsEnabled",label:"启用体积云",type:"toggle",value:e.cloudsEnabled===!0,tooltip:"基于 PostProcessStage 的体积云 Ray Marching 渲染"},{id:"cloudQuality",label:"质量预设",type:"select",value:e.cloudQuality??"medium",options:Object.entries(cl).map(([n,i])=>({value:n,label:i.label})),disabled:t||!e.cloudsEnabled},{id:"cloudCoverage",label:"云覆盖率",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.3,displayValue:`${Math.round((e.cloudCoverage??.3)*100)}%`,disabled:t||!e.cloudsEnabled},{id:"cloudBottom",label:"云底高度",type:"range",min:500,max:5e3,step:50,value:e.cloudBottom??1500,displayValue:`${Math.round(e.cloudBottom??1500)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudTop",label:"云顶高度",type:"range",min:1e3,max:1e4,step:100,value:e.cloudTop??2150,displayValue:`${Math.round(e.cloudTop??2150)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudSpeed",label:"移动速度",type:"range",min:0,max:.01,step:1e-4,value:e.cloudSpeed??.001,displayValue:Number(e.cloudSpeed??.001).toFixed(4),disabled:t||!e.cloudsEnabled},{id:"cloudWindDirection",label:"风向",type:"range",min:0,max:360,step:1,value:e.cloudWindDirection??90,displayValue:`${Math.round(e.cloudWindDirection??90)}°`,disabled:t||!e.cloudsEnabled},{id:"cloudScattering",label:"散射系数",type:"range",min:0,max:3,step:.01,value:e.cloudScattering??1,displayValue:Number(e.cloudScattering??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAbsorption",label:"吸收系数",type:"range",min:0,max:1,step:.01,value:e.cloudAbsorption??0,displayValue:Number(e.cloudAbsorption??0).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropy1",label:"前向散射",type:"range",min:-1,max:1,step:.01,value:e.cloudAnisotropy1??.7,displayValue:Number(e.cloudAnisotropy1??.7).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropy2",label:"后向散射",type:"range",min:-1,max:1,step:.01,value:e.cloudAnisotropy2??-.2,displayValue:Number(e.cloudAnisotropy2??-.2).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropyMix",label:"散射混合比",type:"range",min:0,max:1,step:.01,value:e.cloudAnisotropyMix??.5,displayValue:Number(e.cloudAnisotropyMix??.5).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudSkyLight",label:"天空光",type:"range",min:0,max:3,step:.05,value:e.cloudSkyLight??1,displayValue:Number(e.cloudSkyLight??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudGroundBounce",label:"地面反弹光",type:"range",min:0,max:2,step:.05,value:e.cloudGroundBounce??1,displayValue:Number(e.cloudGroundBounce??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudPowder",label:"Powder 效应",type:"range",min:0,max:2,step:.05,value:e.cloudPowder??.8,displayValue:Number(e.cloudPowder??.8).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudDensityScale",label:"密度缩放",type:"range",min:0,max:3,step:.01,value:e.cloudDensityScale??1,displayValue:Number(e.cloudDensityScale??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudShapeAmount",label:"形状强度",type:"range",min:0,max:2,step:.01,value:e.cloudShapeAmount??1,displayValue:Number(e.cloudShapeAmount??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudDetailAmount",label:"细节强度",type:"range",min:0,max:1,step:.01,value:e.cloudDetailAmount??.5,displayValue:Number(e.cloudDetailAmount??.5).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudTurbulence",label:"湍流位移",type:"range",min:0,max:1e3,step:10,value:e.cloudTurbulence??350,displayValue:`${Math.round(e.cloudTurbulence??350)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudHazeDensity",label:"雾霾密度",type:"range",min:0,max:.001,step:1e-5,value:e.cloudHazeDensity??3e-5,displayValue:Number(e.cloudHazeDensity??3e-5).toFixed(5),disabled:t||!e.cloudsEnabled},{id:"cloudHazeExponent",label:"雾霾衰减",type:"range",min:0,max:.01,step:1e-4,value:e.cloudHazeExponent??.001,displayValue:Number(e.cloudHazeExponent??.001).toFixed(4),disabled:t||!e.cloudsEnabled}]}function hl(e={}){return[{id:"enableLighting",label:"日照",type:"toggle",value:e.enableLighting!==!1,tooltip:"Cesium globe.enableLighting：启用日照贴图"},{id:"showGroundAtmosphere",label:"地面大气",type:"toggle",value:e.showGroundAtmosphere!==!1,tooltip:"globe.showGroundAtmosphere：地面大气光晕"},{id:"dynamicAtmosphereLighting",label:"动态光照",type:"toggle",value:e.dynamicAtmosphereLighting!==!1},{id:"atmosphereLightIntensity",label:"大气光强",type:"range",min:0,max:25,step:.5,value:e.atmosphereLightIntensity??5.5,displayValue:Number(e.atmosphereLightIntensity??5.5).toFixed(1)},{id:"fogEnabled",label:"雾效",type:"toggle",value:e.fogEnabled!==!1},{id:"fogDensity",label:"雾密度",type:"range",min:1e-5,max:.001,step:1e-5,value:e.fogDensity??12e-5,displayValue:Number(e.fogDensity??12e-5).toFixed(5),disabled:!e.fogEnabled},{id:"sunShow",label:"太阳",type:"toggle",value:e.sunShow!==!1},{id:"moonShow",label:"月亮",type:"toggle",value:e.moonShow!==!1},{id:"skyBoxShow",label:"星空盒",type:"toggle",value:e.skyBoxShow!==!1}]}function fl(e={},t=!1){return[{id:"elevation",label:"高度角",type:"range",min:2,max:80,step:.1,value:e.elevation??30,displayValue:Number(e.elevation??30).toFixed(1),disabled:t},{id:"azimuth",label:"方位角",type:"range",min:-180,max:180,step:.1,value:e.azimuth??150,displayValue:Number(e.azimuth??150).toFixed(1),disabled:t},{id:"clarity",label:"清澈度",type:"range",min:.03,max:.4,step:.005,value:e.clarity??.085,displayValue:Number(e.clarity??.085).toFixed(3),tooltip:"越小越清澈(Beer-Lambert 密度)",disabled:t},{id:"causticStrength",label:"焦散强度",type:"range",min:0,max:2,step:.05,value:e.causticStrength??.9,displayValue:Number(e.causticStrength??.9).toFixed(2),disabled:t},{id:"waveHeight",label:"浪高",type:"range",min:0,max:1.5,step:.05,value:e.waveHeight??.5,displayValue:Number(e.waveHeight??.5).toFixed(2),disabled:t},{id:"foamWidth",label:"泡沫宽度",type:"range",min:0,max:8,step:.1,value:e.foamWidth??2.4,displayValue:Number(e.foamWidth??2.4).toFixed(1),disabled:t},{id:"reflection",label:"反射强度",type:"range",min:0,max:1,step:.02,value:e.reflection??.38,displayValue:Number(e.reflection??.38).toFixed(2),disabled:t},{id:"waterColor",label:"远处浅水色",type:"color",value:e.waterColor??"#2bb3c4",disabled:t},{id:"cloudCoverage",label:"云量",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.58,displayValue:Number(e.cloudCoverage??.58).toFixed(2),disabled:t},{id:"lightningEnabled",label:"闪电开关",type:"toggle",value:e.lightningEnabled!==!1,disabled:t},{id:"lightningInterval",label:"闪电间隔(秒)",type:"range",min:.4,max:8,step:.1,value:e.lightningInterval??2,displayValue:Number(e.lightningInterval??2).toFixed(1),disabled:t||e.lightningEnabled===!1}]}const di={low:{label:"低",maxIterationCount:64,minStepSize:200,maxStepSize:2e3,maxRayDistance:8e4,perspectiveStepScale:1.02,minDensity:1e-4,minTransmittance:.1,multiScatteringOctaves:2,maxIterationCountToSun:0,maxIterationCountToGround:0,minSecondaryStepSize:200,shapeDetail:!1,turbulence:!1},medium:{label:"中",maxIterationCount:128,minStepSize:100,maxStepSize:1500,maxRayDistance:15e4,perspectiveStepScale:1.015,minDensity:1e-4,minTransmittance:.05,multiScatteringOctaves:4,maxIterationCountToSun:1,maxIterationCountToGround:0,minSecondaryStepSize:150,shapeDetail:!0,turbulence:!1},high:{label:"高",maxIterationCount:256,minStepSize:50,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.01,minDensity:1e-5,minTransmittance:.01,multiScatteringOctaves:6,maxIterationCountToSun:2,maxIterationCountToGround:1,minSecondaryStepSize:100,shapeDetail:!0,turbulence:!0},ultra:{label:"超高",maxIterationCount:512,minStepSize:20,maxStepSize:800,maxRayDistance:25e4,perspectiveStepScale:1.008,minDensity:1e-6,minTransmittance:.005,multiScatteringOctaves:8,maxIterationCountToSun:3,maxIterationCountToGround:2,minSecondaryStepSize:50,shapeDetail:!0,turbulence:!0}};function Je(e){return di[e]??di.medium}const ml={enabled:!1,quality:"medium",minHeight:1500,maxHeight:2150,coverage:.3,windSpeed:.001,windDirection:90,scatteringCoefficient:1,absorptionCoefficient:0,scatterAnisotropy1:.7,scatterAnisotropy2:-.2,scatterAnisotropyMix:.5,skyLightScale:1,groundBounceScale:1,powderScale:.8,densityScale:1,shapeAmount:1,shapeDetailAmount:.5,turbulenceDisplacement:350,hazeDensityScale:3e-5,hazeExponent:.001,nightMoonIntensity:.18,nightAmbientIntensity:.08,nightColor:"#9bbcff",dayLightFactor:1};function pl(e){const t=e.replace("#",""),n=parseInt(t.substring(0,2),16)/255,i=parseInt(t.substring(2,4),16)/255,l=parseInt(t.substring(4,6),16)/255;return[n,i,l]}function vl(e){return e*Math.PI/180}function gl(e){const t=e;return{u_enabled:()=>t().enabled,u_minHeight:()=>t().minHeight,u_maxHeight:()=>t().maxHeight,u_coverage:()=>t().coverage,u_windSpeed:()=>t().windSpeed,u_windDirection:()=>{const n=vl(t().windDirection);return[Math.cos(n),Math.sin(n)]},u_scatteringCoefficient:()=>t().scatteringCoefficient,u_absorptionCoefficient:()=>t().absorptionCoefficient,u_scatterAnisotropy1:()=>t().scatterAnisotropy1,u_scatterAnisotropy2:()=>t().scatterAnisotropy2,u_scatterAnisotropyMix:()=>t().scatterAnisotropyMix,u_skyLightScale:()=>t().skyLightScale,u_groundBounceScale:()=>t().groundBounceScale,u_powderScale:()=>t().powderScale,u_densityScale:()=>t().densityScale,u_shapeAmount:()=>t().shapeAmount,u_shapeDetailAmount:()=>t().shapeDetailAmount,u_turbulenceDisplacement:()=>t().turbulenceDisplacement,u_hazeDensityScale:()=>t().hazeDensityScale,u_hazeExponent:()=>t().hazeExponent,u_nightMoonIntensity:()=>t().nightMoonIntensity,u_nightAmbientIntensity:()=>t().nightAmbientIntensity,u_nightColor:()=>pl(t().nightColor),u_dayLightFactor:()=>t().dayLightFactor,u_maxIterationCount:()=>Je(t().quality).maxIterationCount,u_minStepSize:()=>Je(t().quality).minStepSize,u_maxStepSize:()=>Je(t().quality).maxStepSize,u_maxRayDistance:()=>Je(t().quality).maxRayDistance,u_perspectiveStepScale:()=>Je(t().quality).perspectiveStepScale,u_minDensity:()=>Je(t().quality).minDensity,u_minTransmittance:()=>Je(t().quality).minTransmittance,u_multiScatteringOctaves:()=>Je(t().quality).multiScatteringOctaves,u_maxIterationCountToSun:()=>Je(t().quality).maxIterationCountToSun,u_maxIterationCountToGround:()=>Je(t().quality).maxIterationCountToGround,u_minSecondaryStepSize:()=>Je(t().quality).minSecondaryStepSize,u_shapeDetailEnabled:()=>Je(t().quality).shapeDetail?1:0,u_turbulenceEnabled:()=>Je(t().quality).turbulence?1:0}}const yl=`// ============================================================
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
`;function ft(){const e=window.Cesium;if(!e)throw new Error("[CloudManager] window.Cesium 未就绪，请确保 Cesium CDN 已加载");return e}const bl={shape:"/textures/cloud/shape.bin",shapeDetail:"/textures/cloud/shape_detail.bin",weather:"/textures/cloud/local_weather.png",turbulence:"/textures/cloud/turbulence.png"};class xl{constructor(t,n){rt(this,"viewer");rt(this,"stage",null);rt(this,"textures",{shape:null,shapeDetail:null,weather:null,turbulence:null});rt(this,"_values",{...ml});rt(this,"_initialized",!1);rt(this,"_destroyed",!1);rt(this,"_texturePaths");rt(this,"_startTime",0);this.viewer=t,this._texturePaths={...bl,...n==null?void 0:n.texturePaths},n!=null&&n.quality&&(this._values.quality=n.quality),(n==null?void 0:n.enabled)!==void 0&&(this._values.enabled=n.enabled)}async init(){if(this._initialized||this._destroyed)return;const t=this.viewer.scene;if(!t||t.isDestroyed())return;this._startTime=performance.now()/1e3;const n=ft(),i=t.context,l=new n.Sampler({minificationFilter:n.TextureMinificationFilter.LINEAR,magnificationFilter:n.TextureMagnificationFilter.LINEAR,wrapS:n.TextureWrap.REPEAT,wrapT:n.TextureWrap.REPEAT}),r=()=>new n.Texture({context:i,source:{arrayBufferView:new Uint8Array([128,128,128,255]),width:1,height:1},pixelFormat:n.PixelFormat.RGBA,pixelDatatype:n.PixelDatatype.UNSIGNED_BYTE,sampler:l});try{this.textures.shape=r(),this.textures.shapeDetail=r(),this.textures.weather=r(),this.textures.turbulence=r()}catch{for(const b of[this.textures.shape,this.textures.shapeDetail,this.textures.weather,this.textures.turbulence])if(b)try{b.destroy()}catch{}this.textures.shape=null,this.textures.shapeDetail=null,this.textures.weather=null,this.textures.turbulence=null;return}this.stage=new n.PostProcessStage({fragmentShader:yl,uniforms:this.buildStageUniforms()}),this.stage.enabled=!1,t.postProcessStages.add(this.stage),await this.loadTextures(),!this._destroyed&&(this._initialized=!0,this.stage&&this._values.enabled&&(this.stage.enabled=!0))}destroy(){if(this._destroyed=!0,this.stage){const t=this.viewer.scene;t&&!t.isDestroyed()&&(t.postProcessStages.remove(this.stage),this.stage.destroy()),this.stage=null}for(const t of Object.keys(this.textures))if(this.textures[t]){try{this.textures[t].destroy()}catch{}this.textures[t]=null}this._initialized=!1}show(){this._values.enabled=!0,this.stage&&(this.stage.enabled=!0)}hide(){this._values.enabled=!1,this.stage&&(this.stage.enabled=!1)}toggle(){this._values.enabled?this.hide():this.show()}get initialized(){return this._initialized}get visible(){return this._values.enabled}get values(){return this._values}updateUniforms(t){Object.assign(this._values,t)}setQuality(t){this._values.quality=t}getPresetDetail(){return Je(this._values.quality)}buildStageUniforms(){return{...gl(()=>this._values),...{u_shapeTexture:()=>this.textures.shape,u_shapeDetailTexture:()=>this.textures.shapeDetail,u_weatherTexture:()=>this.textures.weather,u_turbulenceTexture:()=>this.textures.turbulence},...{u_time:()=>performance.now()/1e3-this._startTime},...{u_shapeRepeat:()=>[3e-4,3e-4,3e-4],u_shapeDetailRepeat:()=>[.006,.006,.006],u_weatherRepeat:()=>[1,1],u_shapeDepth:()=>128,u_shapeDetailDepth:()=>32},...{u_cameraPosition:()=>{var S,T,P;const b=ft();return((P=(T=(S=this.viewer)==null?void 0:S.scene)==null?void 0:T.camera)==null?void 0:P.positionWC)??new b.Cartesian3(0,0,0)},u_inverseProjection:()=>{var S,T,P,f;const b=ft();return((f=(P=(T=(S=this.viewer)==null?void 0:S.scene)==null?void 0:T.context)==null?void 0:P.uniformState)==null?void 0:f.inverseProjectionMatrix)??b.Matrix4.IDENTITY},u_inverseView:()=>{var S,T,P,f;const b=ft();return((f=(P=(T=(S=this.viewer)==null?void 0:S.scene)==null?void 0:T.context)==null?void 0:P.uniformState)==null?void 0:f.inverseViewMatrix)??b.Matrix4.IDENTITY},u_sunDirection:()=>{var S,T,P,f;const b=ft();return((f=(P=(T=(S=this.viewer)==null?void 0:S.scene)==null?void 0:T.context)==null?void 0:P.uniformState)==null?void 0:f.sunDirectionWC)??new b.Cartesian3(0,0,1)},u_ellipsoidRadii:()=>{var S,T,P,f;const b=ft();return((f=(P=(T=(S=this.viewer)==null?void 0:S.scene)==null?void 0:T.globe)==null?void 0:P.ellipsoid)==null?void 0:f.radii)??new b.Cartesian3(6378137,6378137,6356752314245179e-9)}}}}async loadTextures(){const t=[this.load3DBinaryTexture("shape",this._texturePaths.shape,128),this.load3DBinaryTexture("shapeDetail",this._texturePaths.shapeDetail,32),this.load2DImageTexture("weather",this._texturePaths.weather),this.load2DImageTexture("turbulence",this._texturePaths.turbulence)];if(await Promise.allSettled(t),this._destroyed){for(const n of Object.keys(this.textures))if(this.textures[n]){try{this.textures[n].destroy()}catch{}this.textures[n]=null}}}async load3DBinaryTexture(t,n,i){var r;if(!n)return;const l=(r=this.viewer.scene)==null?void 0:r.context;if(l)try{const s=await fetch(n);if(!s.ok)throw new Error(`HTTP ${s.status}`);const b=await s.arrayBuffer(),g=i*i*i;if(b.byteLength<g)return;const S=new Uint8Array(b,0,g),T=ft(),P=new T.Texture({context:l,source:{arrayBufferView:S,width:i,height:i*i},pixelFormat:T.PixelFormat.RED,pixelDatatype:T.PixelDatatype.UNSIGNED_BYTE,sampler:new T.Sampler({minificationFilter:T.TextureMinificationFilter.LINEAR,magnificationFilter:T.TextureMagnificationFilter.LINEAR,wrapS:T.TextureWrap.REPEAT,wrapT:T.TextureWrap.REPEAT})});if(this.textures[t])try{this.textures[t].destroy()}catch{}this.textures[t]=P}catch{}}async load2DImageTexture(t,n){var l;if(!n)return;const i=(l=this.viewer.scene)==null?void 0:l.context;if(i)try{const r=await fetch(n);if(!r.ok)throw new Error(`HTTP ${r.status}`);const s=await r.blob(),b=await createImageBitmap(s),g=ft(),S=new g.Texture({context:i,source:b,sampler:new g.Sampler({minificationFilter:g.TextureMinificationFilter.LINEAR,magnificationFilter:g.TextureMagnificationFilter.LINEAR,wrapS:g.TextureWrap.REPEAT,wrapT:g.TextureWrap.REPEAT})});if(b.close(),this.textures[t])try{this.textures[t].destroy()}catch{}this.textures[t]=S}catch{}}}function Sl(e){const{viewer:t,cloudParams:n,atmosphereParams:i,config:l}=e;let r=null,s=null,b=!1;async function g(){if(!b&&!(r!=null&&r.initialized)){if(s){await s;return}r=new xl(t,{enabled:!!n.value.cloudsEnabled,quality:n.value.cloudQuality||"medium",...l}),s=r.init();try{await s}catch{r=null}finally{s=null}if(b&&r){r.destroy(),r=null;return}r!=null&&r.initialized&&S(n.value)}}function S(f){if(!(r!=null&&r.initialized))return;"cloudsEnabled"in f&&(f.cloudsEnabled?r.show():r.hide());const _={};"cloudCoverage"in f&&(_.coverage=Number(f.cloudCoverage)||.3),"cloudSpeed"in f&&(_.windSpeed=Number(f.cloudSpeed)||.001),"cloudBottom"in f&&(_.minHeight=Number(f.cloudBottom)||1500),"cloudTop"in f&&(_.maxHeight=Number(f.cloudTop)||2150),"cloudWindDirection"in f&&(_.windDirection=Number(f.cloudWindDirection)||90),"cloudScattering"in f&&(_.scatteringCoefficient=Number(f.cloudScattering)||1),"cloudAbsorption"in f&&(_.absorptionCoefficient=Number(f.cloudAbsorption)||0),"cloudAnisotropy1"in f&&(_.scatterAnisotropy1=Number(f.cloudAnisotropy1)||.7),"cloudAnisotropy2"in f&&(_.scatterAnisotropy2=Number(f.cloudAnisotropy2)||-.2),"cloudAnisotropyMix"in f&&(_.scatterAnisotropyMix=Number(f.cloudAnisotropyMix)||.5),"cloudSkyLight"in f&&(_.skyLightScale=Number(f.cloudSkyLight)||1),"cloudGroundBounce"in f&&(_.groundBounceScale=Number(f.cloudGroundBounce)||1),"cloudPowder"in f&&(_.powderScale=Number(f.cloudPowder)||.8),"cloudDensityScale"in f&&(_.densityScale=Number(f.cloudDensityScale)||1),"cloudShapeAmount"in f&&(_.shapeAmount=Number(f.cloudShapeAmount)||1),"cloudDetailAmount"in f&&(_.shapeDetailAmount=Number(f.cloudDetailAmount)||.5),"cloudTurbulence"in f&&(_.turbulenceDisplacement=Number(f.cloudTurbulence)||350),"cloudHazeDensity"in f&&(_.hazeDensityScale=Number(f.cloudHazeDensity)||3e-5),"cloudHazeExponent"in f&&(_.hazeExponent=Number(f.cloudHazeExponent)||.001),"cloudQuality"in f&&r.setQuality(f.cloudQuality),Object.keys(_).length>0&&r.updateUniforms(_)}const T=Ae(n,f=>{if(!b){if(!(r!=null&&r.initialized)){f.cloudsEnabled&&g();return}S(f)}},{deep:!0});let P;return i&&(P=Ae(i,f=>{if(b||!(r!=null&&r.initialized))return;const _={};"moonLightIntensity"in f&&(_.nightMoonIntensity=Number(f.moonLightIntensity)||0),"ambientIntensity"in f&&(_.nightAmbientIntensity=Number(f.ambientIntensity)||0),"dayNightEnabled"in f&&(_.dayLightFactor=f.dayNightEnabled?1:.5),Object.keys(_).length>0&&r.updateUniforms(_)},{deep:!0})),n.value.cloudsEnabled&&g(),function(){b=!0,T(),P==null||P(),r&&(r.destroy(),r=null),s=null}}const{getLayerIdByIndex:_l,getLayerIndexById:hi}=Gi({urlLayerOptions:_i,getLayerCategoryById:$i,getLayerGroupById:qi}),vn=-90,An=1,Fi=5e7;function wl({getViewer:e,getCesium:t,onCameraViewSync:n,onBasemapRestore:i}={}){const l=Ei(),r=Ri();let s=null;function b(a){return ji(a,l.query)}function g(){const a=String(b(En)||"").trim(),u=vt(b("lng")),p=vt(b("lat")),h=Tl(b("z")),c=Vi(a);if(c&&u!==null&&p!==null&&h!==null){const o={lng:u,lat:p,height:h,...c};if(fi(o))return o}const m=Yi(a);return fi(m)?m:u===null||p===null||h===null||u<-180||u>180||p<-90||p>90?null:{lng:u,lat:p,height:h,heading:vt(b("heading"))??0,pitch:vt(b("pitch"))??vn,roll:vt(b("roll"))??0}}function S({duration:a=0}={}){const u=e==null?void 0:e(),p=t==null?void 0:t(),h=g();if(!(u!=null&&u.camera)||!p||!h)return!1;const c=p.Cartesian3.fromDegrees(h.lng,h.lat,h.height),m={heading:hn(p,h.heading??0),pitch:hn(p,Ml(h.pitch??vn)),roll:hn(p,h.roll??0)};return Number(a)>0?(u.camera.flyTo({destination:c,orientation:m,duration:Number(a)}),!0):(u.camera.setView({destination:c,orientation:m}),!0)}function T(a){if(!a)return null;const u=hi(a);if(u===null)return null;const p={view:Qt,l:String(u)};return F(p),String(u)}function P(){const a=vt(b("l"));if(a===null)return null;const u=_l(a);return u&&(i==null||i(u)),u}function f({initialSync:a=!1,getActivePresetId:u}={}){const p=w();if(!(!(p!=null&&p.moveEnd)||s)&&(s=p.moveEnd.addEventListener(()=>{const h=u==null?void 0:u();M({activePresetId:h})}),a)){const h=u==null?void 0:u();M({activePresetId:h})}}function _(){typeof s=="function"&&s(),s=null}function M({activePresetId:a}={}){const u=t==null?void 0:t(),p=w();if(!u||!(p!=null&&p.position))return;const h=u.Cartographic.fromCartesian(p.position);if(!h)return;const c=u.Math.toDegrees(h.longitude),m=u.Math.toDegrees(h.latitude),o=Number(h.height),d=u.Math.toDegrees(Number(p.heading)||0),y=u.Math.toDegrees(Number(p.pitch)||0),C=u.Math.toDegrees(Number(p.roll)||0);if(!Number.isFinite(c)||!Number.isFinite(m)||!Number.isFinite(o))return;const D=Math.max(An,o),E=Ui({heading:d,pitch:y,roll:C});if(!E||E==="0")return;const O={view:Qt,camera:{lng:c,lat:m,height:D,heading:d,pitch:y,roll:C}},R={view:Qt,[En]:E,lng:mi(c,6),lat:mi(m,6),z:Dl(D)},U=a;if(U){const B=hi(U);B!==null&&(R.l=String(B))}F(R),n==null||n(O)}function w(){var u;const a=e==null?void 0:e();return(a==null?void 0:a.camera)||((u=a==null?void 0:a.scene)==null?void 0:u.camera)||null}function A(a,u){const p=Object.keys(a).filter(c=>a[c]!==void 0&&a[c]!==null&&a[c]!==""),h=Object.keys(u).filter(c=>u[c]!==void 0&&u[c]!==null&&u[c]!=="");return p.length!==h.length?!1:h.every(c=>String(a[c]??"")===String(u[c]??""))}function F(a){const u={...In(l.query),...a};zi.forEach(h=>{h in a||delete u[h]}),Object.keys(u).forEach(h=>{const c=u[h];c==null||c===""?delete u[h]:u[h]=String(c)});const p=In(l.query);A(p,u)||r.replace({path:l.path||"/home",query:u}).catch(()=>{})}return{restoreCameraFromUrl:S,restoreBasemapFromUrl:P,syncBasemapToUrl:T,bindCameraViewSync:f,cleanupCameraViewSync:_}}function vt(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Tl(e){const t=vt(e);return t===null||t<An||t>Fi?null:t}function fi(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),i=Number(e.height),l=Number(e.heading),r=Number(e.pitch),s=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(i)&&i>=An&&i<=Fi&&Number.isFinite(l)&&Number.isFinite(r)&&r>=-90&&r<=90&&Number.isFinite(s)}function Ml(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):vn}function mi(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function Dl(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function hn(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const Ye={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Ll=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Fl=new Float32Array([0,0,1,0,1,1,0,1]),Pl=new Uint16Array([0,1,2,0,2,3]);function mt(e,t,n){return Math.max(t,Math.min(n,e))}function we(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Al(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),i=Math.min(2048,n),l=Math.max(1,Math.floor(e)),r=Math.sqrt(l),s=Math.log2(r),b=Number.isFinite(s)?Math.round(s):4;let g=Math.pow(2,b);return g=mt(g,16,i),g}function Cl(e){const t=e*e,n=new Float32Array(t*4);for(let i=0;i<t;i+=1){const l=i*4;n[l]=Math.random(),n[l+1]=Math.random(),n[l+2]=Math.random(),n[l+3]=Math.random()}return n}function El(e){return new Float32Array(e*e*4)}function Rl(e,t,n,i,l){const r=t.createTexture();if(!r)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,r),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,i,0,t.RGBA,t.FLOAT,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let s=!1;return{_context:e,_texture:r,_target:t.TEXTURE_2D,_width:n,_height:i,destroy(){s||(t.deleteTexture(r),s=!0)}}}class Il{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const i={...Ye,...n};this.speedFactor=we(i.speedFactor,Ye.speedFactor),this.cullSpeedMin=we(i.cullSpeedMin,Ye.cullSpeedMin),this.cullSpeedMax=we(i.cullSpeedMax,Ye.cullSpeedMax),this.windSpeedMin=we(i.windSpeedMin,Ye.windSpeedMin),this.windSpeedMax=we(i.windSpeedMax,Ye.windSpeedMax),this.arrowLength=we(i.arrowLength,Ye.arrowLength),this.trailLength=we(i.trailLength,Ye.trailLength),this.decaySpeed=we(i.decaySpeed,Ye.decaySpeed),this.alphaFactor=we(i.alphaFactor,Ye.alphaFactor),this.maxWindSpeed=we(i.maxWindSpeed,Ye.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=we(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=we(t.longitude,NaN),i=we(t.latitude,NaN),l=Array.isArray(t.altitude)?t.altitude:[],r=Array.isArray(t.sizeMesh)?t.sizeMesh:[],s=Array.isArray(t.count)?t.count:[],b=Array.isArray(t.hspeed)?t.hspeed:[],g=Array.isArray(t.hdir)?t.hdir:[],S=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(i))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const T=l.length;if(T<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(r.length!==T||s.length!==T)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const P=s.map(m=>Math.max(1,Math.floor(we(m,1)))),f=r.map(m=>Math.max(1,we(m,1))),_=l.map(m=>we(m,0)),M=P.reduce((m,o)=>m+o*o,0);if(b.length<M||g.length<M||S.length<M)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=T,this.visibleLayerMin=0,this.visibleLayerMax=T-1,this._altitudes=_.slice(),this._maxNx=Math.max(...P),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*T;const w=new Float32Array(this._atlasWidth*this._atlasHeight*4);let A=0;for(let m=0;m<T;m+=1){const o=P[m],d=o;for(let y=0;y<d;y+=1)for(let C=0;C<o;C+=1){const D=A+y*o+C,E=((m*this._maxNy+y)*this._atlasWidth+C)*4,O=Number(b[D]),R=Number(g[D]),U=Number(S[D]);if(!(Number.isFinite(O)&&Number.isFinite(R))){w[E]=0,w[E+1]=0,w[E+2]=0,w[E+3]=0;continue}const j=R*Math.PI/180;w[E]=O*Math.sin(j),w[E+1]=O*Math.cos(j),w[E+2]=Number.isFinite(U)?U:0,w[E+3]=1}A+=o*d}this._createOrReplaceWindAtlasTexture(w);const F=Math.max(...f),a=this._maxNx*F,u=a/2/111320,p=i*Math.PI/180,h=Math.max(1e-6,Math.abs(Math.cos(p))),c=a/2/(111320*h);this._bounds={minLon:n-c,maxLon:n+c,minLat:i-u,maxLat:i+u,minHeight:Math.min(..._),maxHeight:Math.max(..._)},this._dataPointCount=M,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(we(t,1))),i=Al(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&i===this._particleTextureSize||(this._particleTextureSize=i,this._particleCount=i*i,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=mt(we(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const i=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(i)}setBounds(t,n,i,l){const r=we(t,NaN),s=we(n,NaN),b=we(i,NaN),g=we(l,NaN);if(!Number.isFinite(r)||!Number.isFinite(s)||!Number.isFinite(b)||!Number.isFinite(g))return;const S=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};S.minLon=Math.min(r,s),S.maxLon=Math.max(r,s),S.minLat=Math.min(b,g),S.maxLat=Math.max(b,g),this._bounds=S,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const l=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[l],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=l,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Rl(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,i=Cl(n),l=El(n);for(let r=0;r<2;r+=1){this._particlePositionTextures[r]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:i},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[r]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:l},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[r]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[r],this._velocityTextures[r]],destroyAttachments:!1});const s=this._framebuffers[r]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,s),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:Ll,usage:t.BufferUsage.STATIC_DRAW}),i=t.Buffer.createVertexBuffer({context:this._context,typedArray:Fl,usage:t.BufferUsage.STATIC_DRAW}),l=t.Buffer.createIndexBuffer({context:this._context,typedArray:Pl,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:i,componentsPerAttribute:2}],indexBuffer:l})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let i=0;i<n.length;i+=1)n[i]=i;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:i,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:t.Pass.OPAQUE})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=mt(Math.floor(we(this.visibleLayerMin,0)),0,this._layerCount-1),n=mt(Math.floor(we(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const i=Math.max(1e-4,we(this.maxWindSpeed,Ye.maxWindSpeed)),l=mt(we(t,0)/i,0,1),r=mt(we(n,i)/i,0,1);return{min:Math.min(l,r),max:Math.max(l,r)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>we(this.speedFactor,Ye.speedFactor),maxWindSpeed:()=>Math.max(1e-4,we(this.maxWindSpeed,Ye.maxWindSpeed)),decaySpeed:()=>mt(we(this.decaySpeed,Ye.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>we(this.arrowLength,Ye.arrowLength),trailLength:()=>we(this.trailLength,Ye.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>mt(we(this.alphaFactor,Ye.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function kl({getViewer:e,getCesium:t,message:n}){const i=X(null),l=X({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function r(){var T,P;const S=e==null?void 0:e();if(i.value){try{(P=(T=S==null?void 0:S.scene)==null?void 0:T.primitives)==null||P.remove(i.value)}catch{}i.value.destroy(),i.value=null}}function s(){const S=e==null?void 0:e(),T=t==null?void 0:t();if(!S||!T){n.error("Cesium 尚未初始化");return}r();const P=zl(T);i.value=new Il(S,{maxWindSpeed:20,cesium:T,speedFactor:l.value.speedFactor,arrowLength:l.value.arrowLength,trailLength:l.value.trailLength,alphaFactor:l.value.alphaFactor}),i.value.loadData(P),S.scene.primitives.add(i.value),i.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function b(){i.value&&(i.value.speedFactor=l.value.speedFactor,i.value.arrowLength=l.value.arrowLength,i.value.trailLength=l.value.trailLength,i.value.alphaFactor=l.value.alphaFactor)}function g(S,T){return S in l.value?(l.value={...l.value,[S]:Number(T)},b(),!0):!1}return{wind2D:i,windParams:l,clearWind2D:r,loadSimulatedWind:s,setWindParam:g}}function zl(e){const l=[0,2e3,5e3,1e4,15e3],r=[3e4,3e4,25e3,25e3,2e4],s=[30,30,25,25,20],b=s.reduce((f,_)=>f+_*_,0),g=new Array(b),S=new Array(b),T=new Array(b);let P=0;for(let f=0;f<5;f++){const _=s[f],M=s[f],w=r[f];for(let A=0;A<M;A++)for(let F=0;F<_;F++){const a=P+A*_+F,u=(F-_/2)*(w/111320),p=(A-M/2)*(w/111320/Math.cos(e.Math.toRadians(35))),c=Math.atan2(p,u)+Math.PI/2+.2*Math.sin(F*.5)*Math.cos(A*.5);S[a]=e.Math.toDegrees(c)%360;const m=Math.sqrt(u*u+p*p),d=Math.max(0,1-m/15);g[a]=(5+f*2)*d+2*Math.random(),T[a]=.5*Math.sin(F*.3)*Math.cos(A*.3)}P+=_*M}return{longitude:104,latitude:35,altitude:l,sizeMesh:r,count:s,hspeed:g,hdir:S,vspeed:T}}const At=Object.freeze({LOADING:"loading",READY:"ready",ERROR:"error"});function gn(e){if(!e)return null;if(Array.isArray(e)){const[i,l,r=0]=e;return typeof i!="number"||typeof l!="number"?null:{lng:i,lat:l,height:r}}const t=e.longitude??e.lng,n=e.latitude??e.lat;return typeof t!="number"||typeof n!="number"?null:{lng:t,lat:n,height:e.height??0}}function pi(e,t){const n=gn(t.coordinates);if(!n)return null;const i=e.Cartesian3.fromDegrees(n.lng,n.lat,n.height),l=new e.HeadingPitchRoll(e.Math.toRadians(t.heading??0),e.Math.toRadians(t.pitch??0),e.Math.toRadians(t.roll??0)),r=e.Transforms.headingPitchRollToFixedFrame(i,l),s=t.scale;if(s!==void 0&&s!==1){let b=1,g=1,S=1;typeof s=="number"?b=g=S=s:typeof s=="object"&&(b=s.x??1,g=s.y??1,S=s.z??1);const T=e.Matrix4.fromScale(new e.Cartesian3(b,g,S));e.Matrix4.multiply(r,T,r)}return r}function Nl({getViewer:e,getCesium:t,message:n}){const i=new Map;let l=0;const r=X([]),s=Ce(()=>r.value.filter(h=>h.state===At.LOADING).length),b=Ce(()=>r.value.filter(h=>h.state===At.READY).length),g=Ce(()=>r.value.length);function S(){r.value=Array.from(i.values()).map(h=>({...h.entry}))}function T(){do l++;while(i.has(`model-${l}`));return`model-${l}`}async function P(h){var C,D,E;const c=e==null?void 0:e(),m=t==null?void 0:t();if(!c||!m)return(C=n==null?void 0:n.error)==null||C.call(n,"Cesium 尚未初始化，无法加载模型"),null;const o=h.id??T();if(i.has(o))return(D=n==null?void 0:n.error)==null||D.call(n,`模型 "${o}" 已存在，请使用其他 ID`),null;const d=gn(h.coordinates),y={id:o,name:h.name??o,url:h.url,coordinates:d,heading:h.heading??0,pitch:h.pitch??0,roll:h.roll??0,scale:h.scale??1,state:At.LOADING,metadata:h.metadata??{},addedAt:Date.now(),errorMessage:null};i.set(o,{primitive:null,objectUrl:null,entry:y}),S();try{const O=pi(m,{coordinates:y.coordinates,heading:y.heading,pitch:y.pitch,roll:y.roll,scale:y.scale});if(!O)throw new Error("坐标无效，无法计算模型矩阵");const R={url:h.url,modelMatrix:O,minimumPixelSize:h.minimumPixelSize??64,maximumScale:2e4,scene:c.scene};let U;if(typeof m.Model.fromGltfAsync=="function")U=await m.Model.fromGltfAsync(R);else if(typeof m.Model.fromGltf=="function")U=m.Model.fromGltf(R);else throw new Error("当前 Cesium 版本不支持 Model API");c.scene.primitives.add(U);const B=i.get(o);B.primitive=U;const j=()=>{const le=i.get(o);if(le&&(le.entry.state=At.READY,S(),h.autoPlayAnimation!==!1))try{U.activeAnimations.addAll({loop:m.ModelAnimationLoop.REPEAT})}catch{}};return U.readyEvent?U.readyEvent.addEventListener(j):j(),U.errorEvent&&U.errorEvent.addEventListener(le=>{const ve=i.get(o);ve&&(ve.entry.state=At.ERROR,ve.entry.errorMessage=(le==null?void 0:le.message)??"模型加载异常",S())}),S(),{...y}}catch(O){const R=i.get(o);return R!=null&&R.objectUrl&&URL.revokeObjectURL(R.objectUrl),i.delete(o),S(),(E=n==null?void 0:n.error)==null||E.call(n,`模型加载失败: ${O.message}`),null}}async function f(h,c={}){const m=URL.createObjectURL(h),o=await P({...c,url:m,name:c.name??h.name.replace(/\.(glb|gltf)$/i,"")});if(o){const d=i.get(o.id);d&&(d.objectUrl=m)}else URL.revokeObjectURL(m);return o}function _(h){var o;const c=e==null?void 0:e(),m=i.get(h);if(m){if(m.primitive&&c)try{c.scene.primitives.remove(m.primitive)}catch{}if((o=m.primitive)!=null&&o.destroy)try{m.primitive.destroy()}catch{}m.objectUrl&&URL.revokeObjectURL(m.objectUrl),i.delete(h),S()}}function M(h,c={}){const m=t==null?void 0:t(),o=i.get(h);if(!o||!m)return!1;const d=o.entry;if(c.coordinates&&(d.coordinates=gn(c.coordinates)),c.heading!==void 0&&(d.heading=c.heading),c.pitch!==void 0&&(d.pitch=c.pitch),c.roll!==void 0&&(d.roll=c.roll),c.scale!==void 0&&(d.scale=c.scale),c.name&&(d.name=c.name),c.metadata&&(d.metadata={...d.metadata,...c.metadata}),o.primitive){const y=pi(m,{coordinates:d.coordinates,heading:d.heading,pitch:d.pitch,roll:d.roll,scale:d.scale});y&&(o.primitive.modelMatrix=y)}return S(),!0}function w(h,c={}){const m=e==null?void 0:e(),o=t==null?void 0:t(),d=i.get(h);if(!d||!m||!o)return;const y=d.entry.coordinates;if(!y)return;const{range:C=200,heading:D=0,pitch:E=-30,duration:O=2}=c,R=y.height+C*.3;m.camera.flyTo({destination:o.Cartesian3.fromDegrees(y.lng,y.lat,R),orientation:{heading:o.Math.toRadians(D),pitch:o.Math.toRadians(E),roll:0},duration:O})}function A(h,c,m={}){const o=i.get(h),d=t==null?void 0:t();if(!(!(o!=null&&o.primitive)||!d))try{const y=o.primitive,C=m.loop!==!1?d.ModelAnimationLoop.REPEAT:d.ModelAnimationLoop.NONE;if(c){let D=!1;const E=y.activeAnimations;for(let O=0;O<E.length;O++)if(E.get(O).name===c){E.get(O).playing=!0,D=!0;break}D||y.activeAnimations.add({name:c,loop:C,speedup:m.speedup??1})}else y.activeAnimations.addAll({loop:C,speedup:m.speedup??1})}catch{}}function F(h){const c=i.get(h);if(c!=null&&c.primitive)try{const m=c.primitive.activeAnimations;for(let o=0;o<m.length;o++)m.get(o).playing=!1}catch{}}function a(h){const c=i.get(h);return c?{...c.entry}:null}function u(h){var c;return((c=i.get(h))==null?void 0:c.primitive)??null}function p(){const h=Array.from(i.keys());for(const c of h)_(c);i.clear(),S()}return{models:r,loadingCount:s,readyCount:b,modelCount:g,addModel:P,addModelFromFile:f,removeModel:_,updateModel:M,flyToModel:w,playAnimation:A,stopAnimation:F,getModel:a,getModelPrimitive:u,dispose:p}}const fn=Object.freeze({linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2});class vi{constructor(t={}){this.stiffness=t.stiffness??120,this.damping=t.damping??20,this.mass=t.mass??1,this.threshold=t.threshold??.01,this._current=0,this._target=0,this._velocity=0,this._active=!1}get current(){return this._current}get target(){return this._target}get active(){return this._active}setTarget(t){this._target=t,this._active=!0}setCurrent(t){this._current=t,this._velocity=0}update(t){if(!this._active)return this._current;const n=this._current-this._target,i=-this.stiffness*n,l=-this.damping*this._velocity,r=(i+l)/this.mass;return this._velocity+=r*t,this._current+=this._velocity*t,Math.abs(n)<this.threshold&&Math.abs(this._velocity)<this.threshold&&(this._current=this._target,this._velocity=0,this._active=!1),this._current}reset(){this._current=0,this._target=0,this._velocity=0,this._active=!1}}const wt=Object.freeze({IDLE:"idle",FLYING:"flying",CANCELLED:"cancelled"});function Ol({getViewer:e,getCesium:t}){let n=0,i=null,l=null;const r=X(wt.IDLE),s=Ce(()=>i);function b(){l!==null&&(cancelAnimationFrame(l),l=null),i=null,r.value=wt.CANCELLED}function g(a){const u=e==null?void 0:e(),p=t==null?void 0:t();if(!u||!p)return null;a.cancelPrevious!==!1&&b();const h=A(p,a.destination);if(!h)return null;const c=u.camera,m=c.heading,o=c.pitch,d=c.roll,y=c.positionWC.clone(),C=a.orientation??{},D=p.Math.toRadians(C.heading??p.Math.toDegrees(m)),E=p.Math.toRadians(C.pitch??p.Math.toDegrees(o)),O=p.Math.toRadians(C.roll??p.Math.toDegrees(d));let R=h.clone();if(a.maximumHeight!==void 0){const ye=p.Cartographic.fromCartesian(h);ye.height>a.maximumHeight&&(R=p.Cartesian3.fromRadians(ye.longitude,ye.latitude,a.maximumHeight))}const U=a.easing??"easeInOutCubic",B=fn[U]??fn.easeInOutCubic,j=a.duration??2.5,le=++n;i=le,r.value=wt.FLYING;let ve=null;function se(ye){var Me,Fe;if(i!==le)return;ve===null&&(ve=ye);const fe=(ye-ve)/1e3,Pe=Math.min(fe/j,1),G=B(Pe),q=p.Cartesian3.lerp(y,R,G,new p.Cartesian3),H=F(m,D,G),he=o+(E-o)*G,Oe=d+(O-d)*G;c.setView({destination:q,orientation:{heading:H,pitch:he,roll:Oe}}),(Me=a.onTick)==null||Me.call(a,Pe,q),Pe<1?l=requestAnimationFrame(se):(l=null,i===le&&(i=null,r.value=wt.IDLE,(Fe=a.onComplete)==null||Fe.call(a)))}return l=requestAnimationFrame(se),le}function S(a,u,p=1e3,h={}){return g({...h,destination:{longitude:a,latitude:u,height:p}})}function T(a,u,p={}){const h=e==null?void 0:e(),c=t==null?void 0:t();if(!h||!c)return null;const m=c.Cartesian3.fromDegrees(a.longitude,a.latitude,a.height),o=c.Cartesian3.fromDegrees(u.longitude,u.latitude,u.height),d=c.Cartesian3.subtract(o,m,new c.Cartesian3);c.Cartesian3.normalize(d,d);const y=Math.atan2(d.x,d.y),C=Math.asin(d.z);return g({...p,destination:a,orientation:{heading:c.Math.toDegrees(y),pitch:c.Math.toDegrees(C),roll:0}})}function P(a,u={}){const p=e==null?void 0:e(),h=t==null?void 0:t();if(!p||!h)return null;const c=new h.Rectangle.fromDegrees(a.west,a.south,a.east,a.north),m=h.Rectangle.center(c),d=h.Math.toDegrees(c.east-c.west)*.8;return g({...u,destination:{longitude:h.Math.toDegrees(m.longitude),latitude:h.Math.toDegrees(m.latitude),height:Math.max(d*111e3,1e3)},orientation:{heading:0,pitch:-45,roll:0}})}function f(a){const u=e==null?void 0:e(),p=t==null?void 0:t();if(!u||!p)return null;b();const h=new vi(a.spring),c=p.Cartographic.fromCartesian(u.camera.positionWC);h.setCurrent(c.height),h.setTarget(a.targetHeight);const m=++n;i=m,r.value=wt.FLYING;let o=null;function d(y){var O;if(i!==m)return;if(o===null){o=y;return}const C=(y-o)/1e3;o=y;const D=h.update(C),E=p.Cartesian3.fromRadians(c.longitude,c.latitude,D);u.camera.setView({destination:E,orientation:{heading:u.camera.heading,pitch:u.camera.pitch,roll:u.camera.roll}}),h.active?l=requestAnimationFrame(d):(l=null,i===m&&(i=null,r.value=wt.IDLE,(O=a.onComplete)==null||O.call(a)))}return l=requestAnimationFrame(d),m}function _(){const a=e==null?void 0:e(),u=t==null?void 0:t();if(!a||!u)return null;const p=u.Cartographic.fromCartesian(a.camera.positionWC);return{longitude:u.Math.toDegrees(p.longitude),latitude:u.Math.toDegrees(p.latitude),height:p.height,heading:u.Math.toDegrees(a.camera.heading),pitch:u.Math.toDegrees(a.camera.pitch),roll:u.Math.toDegrees(a.camera.roll)}}function M(a=6){const u=_();if(!u)return"--";const p=u.longitude>=0?"E":"W",h=u.latitude>=0?"N":"S";return`${Math.abs(u.longitude).toFixed(a)}°${p}, ${Math.abs(u.latitude).toFixed(a)}°${h}, ${u.height.toFixed(1)}m`}function w(){b()}function A(a,u){if(!u)return null;if(u instanceof a.Cartesian3)return u;if(Array.isArray(u)){const[c,m,o=0]=u;return a.Cartesian3.fromDegrees(c,m,o)}const p=u.longitude??u.lng,h=u.latitude??u.lat;return typeof p=="number"&&typeof h=="number"?a.Cartesian3.fromDegrees(p,h,u.height??0):null}function F(a,u,p){let h=u-a;for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;return a+h*p}return{flightState:r,currentFlightId:s,enhancedFlyTo:g,cancelFlight:b,flyToPosition:S,flyToAndLookAt:T,flyToRectangle:P,springToHeight:f,SpringController:vi,getCameraState:_,getFormattedPosition:M,cleanup:w,EasingFunctions:fn}}function Ct(e,t){return{longitude:e.Math.toDegrees(t.longitude),latitude:e.Math.toDegrees(t.latitude),height:t.height}}function gi(e,t){if(!t)return null;if(t instanceof e.Cartographic)return t;if(Array.isArray(t)){const[l,r,s=0]=t;return e.Cartographic.fromDegrees(l,r,s)}const n=t.longitude??t.lng,i=t.latitude??t.lat;return typeof n=="number"&&typeof i=="number"?e.Cartographic.fromDegrees(n,i,t.height??0):null}class Hl{constructor(t,n){this.data=t,this.timestamp=n}isExpired(t){return Date.now()-this.timestamp>t}}function Bl({getViewer:e,getCesium:t}){const n=new Map,i=300*1e3,l=5,r=X(!1),s=X(0);function b(F,a){return`${F.toFixed(l)},${a.toFixed(l)}`}function g(F,a){const u=b(F,a),p=n.get(u);return p&&!p.isExpired(i)?{...p.data}:(p&&n.delete(u),null)}function S(F){const a=b(F.longitude,F.latitude);n.set(a,new Hl({...F},Date.now()))}function T(){n.clear()}function P(F){const a=e==null?void 0:e(),u=t==null?void 0:t();if(!a||!u||!F)return null;const{x:p,y:h}=F,c=a.camera.getPickRay(new u.Cartesian2(p,h));if(!c)return null;const m=a.scene.pickPositionSupported?a.scene.pickPosition(new u.Cartesian2(p,h)):a.scene.globe.pick(c,a.scene);if(!m){const d=a.scene.globe.ellipsoid,y=a.scene.camera.pickEllipsoid(new u.Cartesian2(p,h),d);if(!y)return null;const C=u.Cartographic.fromCartesian(y);return Ct(u,C)}const o=u.Cartographic.fromCartesian(m);return Ct(u,o)}async function f(F,a={}){const{maxRetries:u=3,retryDelay:p=200}=a;for(let h=0;h<u;h++){const c=P(F);if(c)return c;h<u-1&&await new Promise(m=>setTimeout(m,p))}return null}function _(F,a={}){const u=e==null?void 0:e(),p=t==null?void 0:t();if(!u||!p)return null;const h=gi(p,F);if(!h)return null;const c=p.Math.toDegrees(h.longitude),m=p.Math.toDegrees(h.latitude);if(a.useCache!==!1){const o=g(c,m);if(o)return o}try{const o=a.terrainDetailLevel??0,d=[h],y=o===0?p.sampleTerrain(u.terrainProvider,0,d):p.sampleTerrainMostDetailed(u.terrainProvider,d);if(y&&y.length>0){const C=Ct(p,y[0]);return S(C),C}}catch{}return null}async function M(F,a={}){const u=e==null?void 0:e(),p=t==null?void 0:t();if(!u||!p||!(F!=null&&F.length))return[];r.value=!0,s.value=0;try{const h=[],c=[],m=[];for(let o=0;o<F.length;o++){const d=gi(p,F[o]);if(!d){h.push(null);continue}const y=p.Math.toDegrees(d.longitude),C=p.Math.toDegrees(d.latitude);if(a.useCache!==!1&&!a.skipCached){const D=g(y,C);if(D){h.push(D);continue}}h.push(null),c.push(d),m.push(o)}if(c.length===0)return s.value=1,h;try{const o=u.terrainProvider,d=o._bottomLevel?Math.max(0,o._bottomLevel-1):Math.min(o.maximumLevel??12,12),y=await p.sampleTerrain(o,d,c);for(let C=0;C<y.length;C++){const D=Ct(p,y[C]);h[m[C]]=D,S(D),a.onProgress&&a.onProgress(C+1,c.length),s.value=(C+1)/c.length}}catch{for(let d=0;d<c.length;d++){try{const y=c[d],C=p.sampleTerrain(u.terrainProvider,17,[y]),D=C instanceof Promise?await C:C;if((D==null?void 0:D.length)>0){const E=Ct(p,D[0]);h[m[d]]=E,S(E)}}catch{}a.onProgress&&a.onProgress(d+1,c.length),s.value=(d+1)/c.length}}return h}finally{r.value=!1}}async function w(F,a={}){if(!(t==null?void 0:t()))return null;const{west:p,south:h,east:c,north:m}=F,o=Math.max(2,Math.ceil(Math.sqrt(a.sampleCount??9))),d=[];for(let R=0;R<o;R++)for(let U=0;U<o;U++){const B=p+(c-p)*(U/(o-1)),j=h+(m-h)*(R/(o-1));d.push([B,j])}const C=(await M(d,{useCache:!0})).filter(R=>R!==null).map(R=>R.height);if(C.length===0)return null;const D=Math.min(...C),E=Math.max(...C),O=C.reduce((R,U)=>R+U,0)/C.length;return{min:D,max:E,avg:O}}function A(){T(),r.value=!1,s.value=0}return{isSampling:r,samplingProgress:s,pickCartographic:P,pickCartographicWithRetry:f,sampleHeight:_,sampleHeightMostDetailed:M,queryHeightRange:w,clearCache:T,cleanup:A}}const Wl={url:"./glb/player/UAL1_Standard.glb",scale:.01,idleAnim:"Idle_Loop",walkAnim:"Walk_Loop",runAnim:"Sprint_Loop",jumpAnim:["Jump_Start","Jump_Loop","Jump_Land"],flyAnim:"fly",flyIdleAnim:"flyIdle",flyHoverForwardAnim:"flyHoverForward",flyHoverBackAnim:"flyHoverBack",flyHoverLeftAnim:"flyHoverLeft",flyHoverRightAnim:"flyHoverRight",flyHoverUpAnim:"flyHoverUp",flyHoverDownAnim:"flyHoverDown",rotateY:-Math.PI/2,facingOffset:Math.PI/2},Ul={gravity:-2400,jumpHeight:600,speed:300,flySpeed:55e3,acceleration:30,deceleration:30},Gl={minCamDistance:100,maxCamDistance:800,camLookAtHeightRatio:.8,thirdMouseMode:1,enableZoom:!0,enableOverShoulderView:!1,isFirstPerson:!1,enableSpringCamera:!0,springCameraTime:.015},$l={forward:["KeyW","ArrowUp"],backward:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],toggleView:["KeyV"],toggleFly:["KeyF"]},ql=5;function jl(e){return e?!!(e.availability||e.requestWaterMask!==void 0||e.requestVertexNormals!==void 0):!1}function Vl({getViewer:e,getCesium:t,message:n}){const i=X(!1),l=X(!1),r=X(!1),s=X(null),b=X(0),g=X(null);let S=null,T=null,P=null,f=null,_=null;async function M(o={}){var C,D,E,O;const d=e(),y=t();if(!d||!y){(C=n==null?void 0:n.error)==null||C.call(n,"Cesium 未初始化");return}if(i.value&&!S&&(i.value=!1,l.value=!1,r.value=!1),!i.value)try{(D=n==null?void 0:n.info)==null||D.call(n,"正在加载漫游控制器（物理引擎 ~2MB，首次加载较慢）...",{duration:8e3});const{playerController:R}=await zt(async()=>{const{playerController:Ee}=await import("./index-CrsoUpNy.js");return{playerController:Ee}},__vite__mapDeps([13,12,1,3,6,5,7,8,14,15,16,17,9,10,18]),import.meta.url);let U=o.initPos;const B=o.spawnHeight||500;let j=0,le=!0;const ve=d.camera,se=y.Cartographic.fromCartesian(ve.position);if(!U){let Ee=B;const He=d.terrainProvider;if(jl(He)){const Be=He,de=Be._bottomLevel?Math.max(0,Be._bottomLevel-1):Math.min(Be.maximumLevel??12,12);let Ge=null;try{Ge=await y.sampleTerrain(He,de,[se])}catch{}Ge&&Ge[0]&&y.defined(Ge[0].height)?(j=Ge[0].height,Ee=j+B,le=!1):(Ee=se.height>0?se.height+B:B,le=!1)}U=y.Cartesian3.fromRadians(se.longitude,se.latitude,Ee)}const ye=5;let fe=o.staticCollider;const Pe=.03;let G={lon:se.longitude,lat:se.latitude};fe||(fe=[{type:"terrain",rectangle:[se.longitude-Pe,se.latitude-Pe,se.longitude+Pe,se.latitude+Pe],resolution:64}]);const q={...Gl},H={...Wl,...Ul,...o.modelConfig},he=new R;await he.init({viewer:d,initPos:U,playerModelConfig:H,staticCollider:fe,...q,mouseSensitivity:ql,keyMap:$l,isShowMobileControls:!1}),S=he;const Oe=Pe*.6;let Me=!1,Fe=performance.now();T=d.scene.preUpdate.addEventListener(()=>{const Ee=performance.now(),He=(Ee-Fe)/1e3;Fe=Ee,he.update(He);const Be=he.getPosition(),de=y.Cartographic.fromCartesian(Be),Ge=le?ye:j+ye;de.height<Ge&&he.reset(y.Cartesian3.fromRadians(de.longitude,de.latitude,Ge)),s.value={lng:y.Math.toDegrees(de.longitude),lat:y.Math.toDegrees(de.latitude),height:de.height};const Ke=he.getVelocity();if(b.value=Math.hypot(Ke.e,Ke.n,Ke.u),!le&&!Me){const je=Math.abs(de.longitude-G.lon),Ve=Math.abs(de.latitude-G.lat);if(je>Oe||Ve>Oe){Me=!0;const We=de.longitude,N=de.latitude;G={lon:We,lat:N},he.physics.clearStaticColliders(),he.physics.addStaticColliders(d,{type:"terrain",rectangle:[We-Pe,N-Pe,We+Pe,N+Pe],resolution:64}).then(async()=>{try{const z=d.terrainProvider,ee=new y.Cartographic(We,N,0),J=z._bottomLevel?Math.max(0,z._bottomLevel-1):Math.min(z.maximumLevel??12,12),ie=await y.sampleTerrain(z,J,[ee]);ie&&ie[0]&&y.defined(ie[0].height)&&(j=ie[0].height)}catch{}Me=!1}).catch(()=>{Me=!1})}}}),he.onViewChange=Ee=>{l.value=Ee},he.onGroundChange=()=>{r.value=he.getIsFlying()},i.value=!0,l.value=he.getIsFirstPerson(),r.value=he.getIsFlying(),(E=n==null?void 0:n.success)==null||E.call(n,"漫游模式已启动（WASD 移动 / V 切视角 / F 飞行）")}catch(R){(O=n==null?void 0:n.error)==null||O.call(n,`漫游模式启动失败: ${R.message||"未知错误"}`),w()}}function w(){if(T&&(T(),T=null),S){try{S.destroy()}catch{}S=null}const o=e();if(o){const d=o.scene.screenSpaceCameraController;d.enableRotate=!0,d.enableTranslate=!0,d.enableZoom=!0,d.enableTilt=!0,d.enableLook=!0}i.value=!1,l.value=!1,r.value=!1,s.value=null,b.value=0}function A(o){var d;i.value?(w(),(d=n==null?void 0:n.info)==null||d.call(n,"漫游模式已停止")):M(o)}function F(){S&&(S.changeView(),l.value=S.getIsFirstPerson())}function a({lng:o,lat:d,name:y}){var U;const C=e(),D=t();if(!C||!D)return;u();const E=D.Cartesian3.fromDegrees(o,d),O=C.entities.add({position:E,point:{pixelSize:10,color:D.Color.CYAN.withAlpha(.8)},name:y||"导航目标"});C.selectedEntity=O,f=C.selectedEntityChanged.addEventListener(B=>{var j;(j=g.value)!=null&&j._entity&&B!==g.value._entity&&Promise.resolve().then(()=>{var le;(le=g.value)!=null&&le._entity&&(C.selectedEntity=g.value._entity)})}),g.value={lng:o,lat:d,name:y||"导航目标",bearing:0,distance:0,_entity:O};const R=D.Cartesian3.fromDegrees(o,d);_=C.scene.preRender.addEventListener(()=>{if(!g.value)return;const B=C.camera.position,j=D.Cartographic.fromCartesian(B),le=Yl(D.Math.toDegrees(j.longitude),D.Math.toDegrees(j.latitude),o,d),ve=D.Math.toDegrees(C.camera.heading);g.value.bearing=(le-ve+360)%360,g.value.distance=D.Cartesian3.distance(B,R);const se=g.value._entity;se&&C.selectedEntity!==se&&(C.selectedEntity=se)}),(U=n==null?void 0:n.info)==null||U.call(n,`导航目标已设置：${y||"地图选点"}`)}function u(){var d;const o=e();if(_&&(_(),_=null),f&&(f(),f=null),o&&((d=g.value)!=null&&d._entity)){try{o.entities.remove(g.value._entity)}catch{}o.selectedEntity=void 0}g.value=null}function p(){P&&P()}function h(o){P=o}function c(){var C;const o=e(),d=t();if(!o||!d)return;(C=n==null?void 0:n.info)==null||C.call(n,"点击地图选择导航目标");const y=new d.ScreenSpaceEventHandler(o.scene.canvas);y.setInputAction(D=>{var R;const E=o.scene.pick(D.position);if(d.defined(E)&&E.id&&E.id.position){const U=o.clock.currentTime,B=E.id.position.getValue(U);if(B){const j=d.Cartographic.fromCartesian(B);if(j){o.selectedEntity=E.id,g.value={lng:d.Math.toDegrees(j.longitude),lat:d.Math.toDegrees(j.latitude),name:E.id.name||"数据要素",bearing:0,distance:0,_entity:E.id},(R=n==null?void 0:n.info)==null||R.call(n,`导航目标已设置：${E.id.name||"数据要素"}`),y.destroy();return}}}const O=o.scene.pickPosition(D.position)||o.scene.globe.pick(o.camera.getPickRay(D.position),o.scene);if(O){const U=d.Cartographic.fromCartesian(O);a({lng:d.Math.toDegrees(U.longitude),lat:d.Math.toDegrees(U.latitude),name:"地图选点"})}y.destroy()},d.ScreenSpaceEventType.LEFT_CLICK)}function m(){return S}return{isActive:i,isFirstPerson:l,isFlying:r,playerPosition:s,playerSpeed:b,navTarget:g,startPlayer:M,stopPlayer:w,togglePlayer:A,changeView:F,getPlayerInstance:m,setNavTarget:a,clearNavTarget:u,startNavPick:c,openNavDialog:p,setOpenNavDialogHandler:h}}function Yl(e,t,n,i){const l=S=>S*Math.PI/180,r=S=>S*180/Math.PI,s=l(n-e),b=Math.sin(s)*Math.cos(l(i)),g=Math.cos(l(t))*Math.sin(l(i))-Math.sin(l(t))*Math.cos(l(i))*Math.cos(s);return(r(Math.atan2(b,g))+360)%360}const Xl={key:0,class:"player-guide"},Kl={class:"guide-pill"},Zl={class:"pill-label"},Jl={key:0,class:"pill-fly"},Ql={__name:"PlayerGuidePanel",props:{visible:{type:Boolean,default:!1},isFirstPerson:{type:Boolean,default:!1},isFlying:{type:Boolean,default:!1}},emits:["close"],setup(e){return(t,n)=>(te(),Ze(xn,{name:"guide-slide"},{default:bn(()=>[e.visible?(te(),ue("div",Xl,[x("div",Kl,[x("span",{class:Xe(["pill-dot",{fp:e.isFirstPerson}])},null,2),x("span",Zl,_e(e.isFirstPerson?"第一人称":"第三人称"),1),e.isFlying?(te(),ue("span",Jl,"✈")):xe("",!0),x("button",{class:"pill-close",title:"关闭提示",onClick:n[0]||(n[0]=i=>t.$emit("close"))},"✕")]),n[1]||(n[1]=x("div",{class:"guide-keys"},[x("span",{class:"key-group"},[x("kbd",null,"W"),x("kbd",null,"A"),x("kbd",null,"S"),x("kbd",null,"D"),x("em",null,"移动")]),x("span",{class:"key-sep"}),x("span",{class:"key-group"},[x("kbd",null,"⇧"),x("em",null,"跑"),x("kbd",null,"␣"),x("em",null,"跳")]),x("span",{class:"key-sep"}),x("span",{class:"key-group"},[x("kbd",null,"V"),x("em",null,"视角"),x("kbd",null,"F"),x("em",null,"飞行")]),x("span",{class:"key-sep"}),x("span",{class:"key-group"},[x("span",{class:"key-mouse"},"🖱"),x("em",null,"旋转")])],-1))])):xe("",!0)]),_:1}))}},ec=ot(Ql,[["__scopeId","data-v-6190d367"]]),tc={class:"hud-info-panel"},nc={class:"nav-target-name"},ic={class:"nav-name"},ac={class:"nav-distance-wrapper"},rc={class:"nav-distance"},oc={class:"hud-compass-panel"},sc={class:"compass-dial"},lc=10,cc={__name:"NavGuideHUD",props:{navTarget:{type:Object,default:null}},setup(e){const t=e,n=Ce(()=>{var r;return((r=t.navTarget)==null?void 0:r.distance)!=null&&t.navTarget.distance<lc}),i=Ce(()=>{var r;return((r=t.navTarget)==null?void 0:r.bearing)??0});function l(r){return r==null?"0.0 m":r<1e3?`${Math.round(r)} m`:`${(r/1e3).toFixed(2)} km`}return(r,s)=>(te(),Ze(xn,{name:"nav-guide-fade"},{default:bn(()=>[e.navTarget?(te(),ue("div",{key:0,class:Xe(["nav-guide-hud",{arrived:n.value}])},[s[6]||(s[6]=x("div",{class:"hud-bg-glow"},null,-1)),x("div",tc,[s[1]||(s[1]=x("div",{class:"hud-tag"},[x("span",{class:"tag-dot"}),x("span",{class:"tag-text"},"NAV_TRACKING")],-1)),x("div",nc,[x("span",ic,_e(e.navTarget.name),1)]),x("div",ac,[s[0]||(s[0]=x("span",{class:"dist-label"},"DIST //",-1)),x("span",rc,_e(n.value?"ARRIVED":l(e.navTarget.distance)),1)])]),x("div",oc,[x("div",sc,[s[3]||(s[3]=x("div",{class:"dial-scale"},null,-1)),s[4]||(s[4]=x("div",{class:"dial-scale rotate-45"},null,-1)),x("div",{class:"compass-arrow-container",style:Ii({transform:`rotate(${i.value}deg)`})},[...s[2]||(s[2]=[x("span",{class:"hud-pointer"},null,-1)])],4),s[5]||(s[5]=x("div",{class:"compass-center"},[x("span",{class:"center-core"})],-1))])])],2)):xe("",!0)]),_:1}))}},uc=ot(cc,[["__scopeId","data-v-1e2288c0"]]),dc={class:"nav-dialog"},hc={class:"nav-dialog-head futuristic-hud"},fc={class:"head-right-decor"},mc={class:"nav-dialog-body"},pc={__name:"NavTargetPicker",props:{visible:{type:Boolean,default:!1}},emits:["close","select"],setup(e,{emit:t}){const n=t;function i(l){n("select",l),n("close")}return(l,r)=>(te(),Ze(xn,{name:"nav-dialog-fade"},{default:bn(()=>[e.visible?(te(),ue("div",{key:0,class:"nav-dialog-overlay",onClick:r[4]||(r[4]=bt(s=>l.$emit("close"),["self"]))},[x("div",dc,[r[12]||(r[12]=x("div",{class:"border-corner top-left"},null,-1)),r[13]||(r[13]=x("div",{class:"border-corner top-right"},null,-1)),r[14]||(r[14]=x("div",{class:"border-corner bottom-left"},null,-1)),r[15]||(r[15]=x("div",{class:"border-corner bottom-right"},null,-1)),x("div",hc,[r[7]||(r[7]=x("div",{class:"hud-scan-line"},null,-1)),r[8]||(r[8]=x("div",{class:"title-wrapper"},[x("div",{class:"status-matrix-v2"},[x("div",{class:"matrix-row"},[x("span",{class:"matrix-dot activeanimate-flicker"}),x("span",{class:"matrix-dot active"})]),x("div",{class:"matrix-row"},[x("span",{class:"matrix-dot"}),x("span",{class:"matrix-dot active"})])]),x("div",{class:"title-text-group"},[x("span",{class:"nav-dialog-title"},"设置导航目标"),x("span",{class:"title-sub"},"NAV.TARGET_SET // MODE:漫游")])],-1)),x("div",fc,[r[6]||(r[6]=x("div",{class:"decor-geometry"},[x("span",{class:"geo-line"}),x("span",{class:"geo-angle"})],-1)),x("button",{class:"nav-dialog-close v2",title:"关闭",onClick:r[0]||(r[0]=s=>l.$emit("close"))},[...r[5]||(r[5]=[x("span",{class:"close-icon-v2"},"×",-1)])])])]),x("div",mc,[x("button",{class:"nav-option",onClick:r[1]||(r[1]=s=>i("search"))},[...r[9]||(r[9]=[x("div",{class:"nav-option-icon"},[x("span",null,"🔍")],-1),x("div",{class:"nav-option-text"},[x("span",{class:"nav-option-label"},"搜索地点"),x("span",{class:"nav-option-desc"},"搜索 POI 兴趣点并设为漫游目标")],-1),x("span",{class:"nav-option-arrow"},null,-1)])]),x("button",{class:"nav-option",onClick:r[2]||(r[2]=s=>i("data"))},[...r[10]||(r[10]=[x("div",{class:"nav-option-icon"},[x("span",null,"📁")],-1),x("div",{class:"nav-option-text"},[x("span",{class:"nav-option-label"},"选择数据要素"),x("span",{class:"nav-option-desc"},"从已载入的 GIS 图层中选取要素点")],-1),x("span",{class:"nav-option-arrow"},null,-1)])]),x("button",{class:"nav-option",onClick:r[3]||(r[3]=s=>i("pick"))},[...r[11]||(r[11]=[x("div",{class:"nav-option-icon"},[x("span",null,"📍")],-1),x("div",{class:"nav-option-text"},[x("span",{class:"nav-option-label"},"地图点选"),x("span",{class:"nav-option-desc"},"在三维场景中交互单点击落点")],-1),x("span",{class:"nav-option-arrow"},null,-1)])])])])])):xe("",!0)]),_:1}))}},vc=ot(pc,[["__scopeId","data-v-1846a693"]]),gc={key:5,class:"drag-overlay"},yc={class:"map-controls-group"},bc={class:"mouse-position-content"},xc=5,Sc={__name:"CesiumContainer",emits:["view-sync"],setup(e,{expose:t,emit:n}){let i=null,l=null,r=!1;const s=Sn(),b=n,g=X(!0),S=X(!1),T=X(!1),P=X(null),f=X(Bi()),_=()=>l,M=()=>i||window.Cesium,w=()=>f.value.tiandituTk,A=()=>f.value.cesiumIonToken,F=Fs({getViewer:_,getCesium:M,message:s,backendBaseUrl:Hi,tiandituToken:w,cesiumIonToken:A}),{activeBasemap:a,activeTerrain:u,customXyzBasemapUrl:p,basemapOptions:h,terrainOptions:c,overlayOptions:m,createImageryProviderViewModels:o,createTerrainProviderViewModels:d,getSelectedImageryProviderViewModel:y,getSelectedTerrainProviderViewModel:C,bindLayerPickerStateSync:D,addBaseImageryLayers:E,initCustomTerrain:O,handleOverlayToggle:R,handleCustomBasemapSubmit:U,cleanupLayers:B}=F;Ae(a,($,K)=>{!$||$===K||G($)});const{coordinateDisplay:j,setupInteractions:le,cleanupInteractions:ve}=bs({getViewer:_,getCesium:M}),{installCreditHider:se,cleanupCreditHider:ye}=ys({getViewer:_}),{restoreCameraFromUrl:fe,restoreBasemapFromUrl:Pe,syncBasemapToUrl:G,bindCameraViewSync:q,cleanupCameraViewSync:H}=wl({getViewer:_,getCesium:M,onCameraViewSync:$=>b("view-sync",$),onBasemapRestore:$=>{$&&a.value!==$&&(a.value=$)}}),he=Os({getViewer:_,getCesium:M,message:s}),{flyToHome:Oe}=he,Me=kl({getViewer:_,getCesium:M,message:s}),Fe=Bs({getViewer:_,getCesium:M,message:s}),Ee=Nl({getViewer:_,getCesium:M,message:s}),He=Ol({getViewer:_,getCesium:M}),Be=Bl({getViewer:_,getCesium:M}),de=Vl({getViewer:_,getCesium:M,message:s});de.setOpenNavDialogHandler(()=>{S.value=!0});function Ge($){$==="pick"?de.startNavPick():$==="search"?s.info("请使用顶部搜索框搜索地点，搜索结果将自动设为导航目标"):$==="data"&&(s.info("请点击已导入的数据要素，将自动设为导航目标"),de.startNavPick())}const Ke=Ce(()=>{const $=de.playerPosition.value;if($){const K=$.lng.toFixed(6),oe=$.lat.toFixed(6),Se=$.height.toFixed(2),Ie=de.playerSpeed.value,tt=Ie>.1?` | 速度: ${Ie.toFixed(1)} m/s`:"";return`经度: ${K}, 纬度: ${oe}, 海拔: ${Se}米${tt} (漫游)`}return j.value});Ae(()=>de.isActive.value,$=>{$&&(g.value=!0,J.value=!1)}),t({getViewer:_,getCesium:M,modelManager:Ee,cameraEnhanced:He,heightSampler:Be,playerController:de});const je=Ce(()=>Fe.loadedDataSources.value),Ve=Ce(()=>Fe.pendingGltfFile.value),We=X(!1);function N($){We.value=!0,$.dataTransfer&&($.dataTransfer.dropEffect="copy")}function z($){const K=$==null?void 0:$.relatedTarget,oe=$==null?void 0:$.currentTarget;K instanceof Node&&oe instanceof Node&&oe.contains(K)||(We.value=!1)}async function ee($){var oe;if(We.value=!1,!T.value)return;const K=(oe=$.dataTransfer)==null?void 0:oe.files;if(!(!K||K.length===0))for(const Se of K){if(r)break;try{await Fe.loadDataFile(Se)}catch{}}}const{toolPanelOpen:J,advancedEffectControls:ie,fluidParams:W,baseAtmosphereParams:Q,atmosphereParams:ae,cloudParams:re,shallowWaterVisible:ge,shallowWaterParams:Ue,toolModules:$e,handleToolAction:Le,handleToolControlChange:et,handleFluidStateChange:L,initWindVizViewer:k,cleanupTools:V}=nl({fluidPanelRef:P,sceneActions:he,wind:Me,modelManager:Ee,cameraEnhanced:He,heightSampler:Be,playerController:de});let ne=!1;async function ce(){var $;if(!ne){ne=!0,r=!1,xi("正在初始化 3D 场景...");try{let K=0,oe=1;for(;K<oe;)try{if(f.value=await Ni({silent:!1,force:K>0}),oe=Math.min(xc,Math.max(oe,Array.isArray(f.value.tiandituTokens)?f.value.tiandituTokens.length:1,Array.isArray(f.value.cesiumIonTokens)?f.value.cesiumIonTokens.length:1,1)),i=await ss({ionToken:A()}),r||!i||!document.getElementById("cesiumContainer"))return;I(),le();const Se=E(),Ie=await O();if(r){be();return}T.value=!0,k(l),q({initialSync:!1,getActivePresetId:()=>a.value});try{const St=await Oi(),Qe=($=St==null?void 0:St.data)==null?void 0:$.default_basemap_index;if(Qe!=null){const Cn=_i[Qe]||null;Cn&&(a.value=Cn)}}catch{}if(Pe(),Se&&Ie){s.success("天地图基础影像与地形加载成功。");return}const tt=Se?{switched:!1}:en("tianditu_tk"),at=Ie?{switched:!1}:en("cesium_ion_token");if(!(tt.switched||at.switched)){s.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}f.value=at.switched?at.tokens:tt.tokens,be(),K+=1,s.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(Se){const Ie=en("cesium_ion_token");if(!Ie.switched)throw Se;f.value=Ie.tokens,be(),K+=1,s.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}s.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(K){s.error("Cesium 运行时加载失败",K),s.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{ne=!1,Si()}}}function be(){var $;T.value=!1,H(),ve(),V(),B(),ye();try{de.stopPlayer()}catch{}try{($=de.clearNavTarget)==null||$.call(de)}catch{}v&&(v(),v=null);try{Ee.dispose()}catch{}try{He.cleanup()}catch{}try{Be.cleanup()}catch{}if(Fe.clearAllDataSources(),!!l){try{l.destroy()}catch{}l=null}}let v=null;function I(){var Se;const $=typeof i.Map=="function"?i.Map:i.Viewer,K=o(),oe=d();l=new $("cesiumContainer",{baseLayerPicker:!0,geocoder:((Se=i.IonGeocodeProviderType)==null?void 0:Se.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:K,selectedImageryProviderViewModel:y(K),terrainProviderViewModels:oe,selectedTerrainProviderViewModel:C(oe),shouldAnimate:!0}),l.scene.debugShowFramesPerSecond=!0,l.scene.globe.terrainExaggeration=1,l.scene.globe.terrainExaggerationRelativeHeight=0,fs(l,i),Oa(l),se(),D(),fe({duration:0})||Oe(0);try{v=Sl({viewer:l,cloudParams:re,atmosphereParams:ae})}catch{}}yn(()=>{ce().catch($=>{})});async function Y({files:$}){for(const K of $){if(r)break;try{await Fe.loadDataFile(K)}catch{}}}function Z({id:$}){Fe.removeDataSource($)}function me(){Fe.clearAllDataSources()}async function De($){if(!r)try{await Fe.loadGltfWithUserCoords($)}catch{}}function Re(){Fe.cancelPendingGltf()}Zt(()=>{var $,K;r=!0,T.value=!1;try{de.stopPlayer()}catch{}try{($=de.clearNavTarget)==null||$.call(de)}catch{}try{(K=de.setOpenNavDialogHandler)==null||K.call(de,null)}catch{}if(H(),ve(),V(),B(),Ee.dispose(),He.cleanup(),Be.cleanup(),v&&(v(),v=null),ye(),Fe.clearAllDataSources(),l){try{l.destroy()}catch{}l=null}}),Ae(T,$=>{$&&(ke(Q.value),qe(ae.value))});function ke($){var Se;if(!l||!i)return;const K=l.scene,oe=K.globe;oe&&(oe.enableLighting=$.enableLighting,oe.showGroundAtmosphere=$.showGroundAtmosphere,"dynamicAtmosphereLighting"in oe&&(oe.dynamicAtmosphereLighting=$.dynamicAtmosphereLighting),"dynamicAtmosphereLightingFromSun"in oe&&(oe.dynamicAtmosphereLightingFromSun=$.dynamicAtmosphereLightingFromSun),"atmosphereLightIntensity"in oe&&(oe.atmosphereLightIntensity=$.atmosphereLightIntensity),"atmosphereHueShift"in oe&&(oe.atmosphereHueShift=$.atmosphereHueShift),"atmosphereSaturationShift"in oe&&(oe.atmosphereSaturationShift=$.atmosphereSaturationShift),"atmosphereBrightnessShift"in oe&&(oe.atmosphereBrightnessShift=$.atmosphereBrightnessShift),"lightingFadeInDistance"in oe&&(oe.lightingFadeInDistance=$.lightingFadeInDistance),"lightingFadeOutDistance"in oe&&(oe.lightingFadeOutDistance=$.lightingFadeOutDistance),"nightFadeInDistance"in oe&&(oe.nightFadeInDistance=$.nightFadeInDistance),"nightFadeOutDistance"in oe&&(oe.nightFadeOutDistance=$.nightFadeOutDistance)),K.fog&&(K.fog.enabled=$.fogEnabled,"density"in K.fog&&(K.fog.density=$.fogDensity),"minimumBrightness"in K.fog&&(K.fog.minimumBrightness=$.fogMinimumBrightness)),K.sun&&(K.sun.show=$.sunShow),K.moon&&(K.moon.show=$.moonShow),K.skyBox&&(K.skyBox.show=$.skyBoxShow),(Se=K.requestRender)==null||Se.call(K)}Ae(Q,$=>{ke($)},{deep:!0});function qe($){var Se;if(!l||!i)return;const K=l.scene,oe=K.globe;if(oe&&"atmosphereLightIntensity"in oe){const Ie=Q.value.atmosphereLightIntensity??5.5,at=$.moonLightEnabled!==!1?($.moonLightIntensity??.18)*4:0;oe.atmosphereLightIntensity=Math.min(Ie+at,12)}(Se=K.requestRender)==null||Se.call(K)}return Ae(ae,$=>{qe($)},{deep:!0}),($,K)=>{var oe;return te(),ue(ut,null,[x("div",{id:"cesiumContainer",class:"cesium-container",onDragover:bt(N,["prevent"]),onDragleave:bt(z,["prevent"]),onDrop:bt(ee,["prevent"])},null,32),T.value?(te(),Ze(yt(er),{key:0,headless:"","get-viewer":_,"get-cesium":M,controls:pe(ie)},null,8,["controls"])):xe("",!0),T.value?(te(),Ze(yt(Vo),{key:1,ref_key:"fluidPanelRef",ref:P,headless:"","get-viewer":_,"get-cesium":M,params:pe(W),onStateChange:pe(L)},null,40,["params","onStateChange"])):xe("",!0),T.value?(te(),Ze(as,ki({key:2,visible:pe(ge)},pe(Ue)),null,16,["visible"])):xe("",!0),T.value?(te(),Ze(bo,{key:3,open:pe(J),"onUpdate:open":K[0]||(K[0]=Se=>Jt(J)?J.value=Se:null),"active-basemap":pe(a),"onUpdate:activeBasemap":K[1]||(K[1]=Se=>Jt(a)?a.value=Se:null),"active-terrain":pe(u),"onUpdate:activeTerrain":K[2]||(K[2]=Se=>Jt(u)?u.value=Se:null),"basemap-options":pe(h),"terrain-options":pe(c),"overlay-options":pe(m),"custom-basemap-url":pe(p),modules:pe($e),"loaded-data-sources":je.value,onModuleAction:pe(Le),onControlChange:pe(et),onOverlayToggle:pe(R),onCustomBasemapSubmit:pe(U),onDataImport:Y,onDataRemove:Z,onDataClearAll:me},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):xe("",!0),ze(ec,{visible:pe(de).isActive.value&&g.value,"is-first-person":pe(de).isFirstPerson.value,"is-flying":pe(de).isFlying.value,onClose:K[3]||(K[3]=Se=>g.value=!1)},null,8,["visible","is-first-person","is-flying"]),pe(de).navTarget.value?(te(),Ze(uc,{key:4,"nav-target":pe(de).navTarget.value},null,8,["nav-target"])):xe("",!0),ze(vc,{visible:S.value,onClose:K[4]||(K[4]=Se=>S.value=!1),onSelect:Ge},null,8,["visible"]),ze(Io,{visible:!!Ve.value,"file-name":((oe=Ve.value)==null?void 0:oe.name)||"",onConfirm:De,onCancel:Re},null,8,["visible","file-name"]),We.value&&T.value?(te(),ue("div",gc,[ze(pe(mn),{size:48,"stroke-width":"1.5"}),K[6]||(K[6]=x("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),K[7]||(K[7]=x("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):xe("",!0),x("div",yc,[x("div",bc,_e(Ke.value),1),K[9]||(K[9]=x("div",{class:"divider"},null,-1)),x("button",{class:"home-btn",title:"回到初始位置",onClick:K[5]||(K[5]=(...Se)=>pe(Oe)&&pe(Oe)(...Se))},[...K[8]||(K[8]=[x("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[x("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},_c=ot(Sc,[["__scopeId","data-v-4ed23f00"]]),Rc=Object.freeze(Object.defineProperty({__proto__:null,default:_c},Symbol.toStringTag,{value:"Module"}));export{Rc as C,jl as h};
