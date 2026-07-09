const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-DhdyNrDC.js","./vendor-libs-BH3wVxJ6.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-COyk1DQe.js","./index-DNjrYmw-.js","./vendor-vue-CFdjHPJG.js","./vendor-ol-all-gF5mNgUt.js","./vendor-axios-Bdz_Fv8M.js","./vendor-ol-all-BtPuoxOl.css","./index-DduL8x4O.css","./index-BrBnepeF.js","./vendor-lucide-DyKGhq-J.js","./HomeView-DnIq7Xrk.js","./vectorUtils-Ds50OJUZ.js","./textDecoder-CXjJWEkX.js","./HomeView-DX2_v9YI.css"])))=>i.map(i=>d[i]);
var gi=Object.defineProperty;var yi=(e,t,n)=>t in e?gi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var at=(e,t,n)=>yi(e,typeof t!="symbol"?t+"":t,n);import{w as Ce,v as ci,d as ie,c as me,W as ui,r as Q,C as dn,o as jt,f as b,t as we,a as Ee,G as tt,V as gt,g as _e,q as Re,u as ve,F as ct,e as ht,n as Xe,x as Ze,P as yt,I as wt,i as bt,H as Ut,z as bi,B as xi,A as Si,b as hn,y as fn,O as _i,a5 as wi,a4 as Xt}from"./vendor-vue-CFdjHPJG.js";import{_ as rt,h as mn,a3 as di,a4 as hi,L as wn,F as Rt,B as Ti,f as Yt,U as fi,J as Mi,K as Di,C as Tn,a7 as Li,G as Fi,E as Pi,P as Kt,a5 as Ai,H as Ci}from"./index-DNjrYmw-.js";import{_ as It}from"./vendor-runtime-Dp1pzeXC.js";import{G as Ei}from"./vendor-lilgui-ChXhAV4w.js";import{v as Zt,w as Jt,x as Ri,X as Mn,a as Qt,y as ln,z as kt,q as Dn,E as Ii,F as mi,H as Ln,I as Fn,J as ki,K as zi,s as en,i as Pn,u as Ni,Q as Wt,V as Oi,Y as Hi,Z as Bi,W as Ui,g as Wi,_ as zt,G as An}from"./vendor-lucide-DyKGhq-J.js";import{C as pn,R as vn,N as pi,L as Cn,S as Gi,a as $i,b as En,V as tn,W as ji,A as qi,P as Vi,M as Nt,c as ot,d as Xi,e as Rn,f as Mt,B as Yi,g as Dt,h as Ki,i as Zi,j as Ji,G as Qi,D as ea,H as ta,k as In,l as kn,m as na,n as ia,o as aa,p as ra,q as oa,r as sa,s as la,U as ca,t as ua,u as zn,O as da,T as ha,v as fa}from"./vendor-three-BvVJB9fv.js";import{a as ma}from"./vendor-codec-DD0reNSo.js";import{A as gn,B as pa,E as va,F as Nn,G as ga,H as ya,I as ba}from"./HomeView-DnIq7Xrk.js";import{d as xa}from"./vectorUtils-Ds50OJUZ.js";const $t=new Map;function Sa(e){const t=$t.get(e);t&&t.abort();const n=new AbortController;return $t.set(e,n),n}function _a(){$t.forEach(e=>{e.abort()}),$t.clear()}function wa(e){const t=e.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!t)return/\{s\}/i.test(e)?{url:e,subdomains:["a","b","c"]}:{url:e,subdomains:[]};const n=t[1].charCodeAt(0),i=t[2].charCodeAt(0),l=[];for(let a=n;a<=i;a++)l.push(String.fromCharCode(a));return{url:e.replace(t[0],"{s}"),subdomains:l}}function Ta(e){return e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function Ma(e,t){let n=e;return t.tiandituTk&&(n=n.replace(/\{tiandituTk\}/g,t.tiandituTk)),t.customUrl&&(n=n.replace(/\{customUrl\}/g,t.customUrl)),n}function Da(e,t,n){if(!e||!t)return null;const l=Sa(t.id).signal,{serviceType:a}=t;let o=Ma(t.url,n);if(a==="custom"){if(!n.customUrl)return null;o=n.customUrl}if(t.nonStandardAdapter||a==="vector-tile")return null;const{subdomains:y}=wa(o),v=Ta(o),S=t.subdomains||y,M=t.maxZoom||18;try{let C=null;if(l.aborted)return null;switch(a){case"wms":{if(typeof e.WebMapServiceImageryProvider!="function")return null;const u=t.wms;if(!(u!=null&&u.layers))return null;C=new e.WebMapServiceImageryProvider({url:v||t.url,layers:u.layers,parameters:{version:u.version||"1.1.1",srs:u.srs||"EPSG:3857",format:u.format||"image/png",styles:u.styles||"",transparent:u.transparent!==!1}});break}case"wmts":{if(typeof e.WebMapTileServiceImageryProvider!="function")return null;const u=t.wmts;if(!(u!=null&&u.layer)||!u.matrixSet)return null;C=new e.WebMapTileServiceImageryProvider({url:v||t.url,layer:u.layer,style:u.style||"default",format:u.format||"image/png",tileMatrixSetID:u.matrixSet,maximumLevel:M});break}case"osm":{typeof e.OpenStreetMapImageryProvider=="function"?C=new e.OpenStreetMapImageryProvider({maximumLevel:M}):C=new e.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:M});break}default:{if(!v||!(v.includes("{z}")||v.includes("{x}")||v.includes("{y}")||v.includes("{reverseY}")))return null;C=new e.UrlTemplateImageryProvider({url:v,subdomains:S.length>0?S:void 0,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:M,enablePickFeatures:!1});break}}if(l.aborted){if(C&&typeof C.destroy=="function")try{C.destroy()}catch{}return null}return C&&(C._descriptorId=t.id),C}catch{return null}}function La(e,t,n){if(!e||!Array.isArray(t))return[];const i=[];for(const l of t){const a=gn(l);if(!a)continue;const o=Da(e,a,n);o&&i.push(o)}return i}function Fa(e){var i;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(i=t.requestRender)==null||i.call(t))}function Pa(e,t){var a;const n=e==null?void 0:e.scene,i=n==null?void 0:n.globe;if(!n||!i)return;Ea(n,t),Ra(n),i.enableLighting=!0,i.showGroundAtmosphere=!0,De(i,"dynamicAtmosphereLighting",!0),De(i,"dynamicAtmosphereLightingFromSun",!0),De(i,"atmosphereLightIntensity",5.5),De(i,"atmosphereHueShift",-.015),De(i,"atmosphereSaturationShift",.08),De(i,"atmosphereBrightnessShift",.02),De(i,"lightingFadeInDistance",15e6),De(i,"lightingFadeOutDistance",22e6),De(i,"nightFadeInDistance",9e6),De(i,"nightFadeOutDistance",16e6),Ot(t,i,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Ot(t,i,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),De(i,"atmosphereRayleighScaleHeight",1e4),De(i,"atmosphereMieScaleHeight",3200),De(i,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=ka(t));const l=n.skyAtmosphere;l&&(l.show=!0,De(l,"perFragmentAtmosphere",!0),De(l,"dynamicAtmosphereLighting",!0),De(l,"dynamicAtmosphereLightingFromSun",!0),De(l,"hueShift",-.025),De(l,"saturationShift",.08),De(l,"brightnessShift",.03),De(l,"atmosphereLightIntensity",12),Ot(t,l,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Ot(t,l,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),De(l,"atmosphereRayleighScaleHeight",1e4),De(l,"atmosphereMieScaleHeight",3200),De(l,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),Ia(n),(a=n.requestRender)==null||a.call(n)}function Aa(e){var l;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const i=(l=t.postProcessStages)==null?void 0:l.bloom;return{scene:st(t,["highDynamicRange","sunBloom","light"]),fog:st(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:st(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:st(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:st(t.sun,["show"]),moon:st(t.moon,["show"]),skyBox:st(t.skyBox,["show"]),bloom:{props:st(i,["enabled"]),uniforms:st(i==null?void 0:i.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Ca(e,t,n){var o,y,v,S;if(!n)return;const i=e==null?void 0:e.scene,l=i==null?void 0:i.globe;if(!i||!l)return;lt(i,n.scene,t),lt(i.fog,n.fog,t),lt(l,n.globe,t),lt(i.sun,n.sun,t),lt(i.moon,n.moon,t),lt(i.skyBox,n.skyBox,t),i.skyAtmosphere&&(lt(i.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(i.skyAtmosphere.show=!1));const a=(o=i.postProcessStages)==null?void 0:o.bloom;lt(a,(y=n.bloom)==null?void 0:y.props,t),lt(a==null?void 0:a.uniforms,(v=n.bloom)==null?void 0:v.uniforms,t),(S=i.requestRender)==null||S.call(i)}function Ea(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}De(e.light,"intensity",2.35)}function Ra(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,De(t,"density",12e-5),De(t,"minimumBrightness",.035),De(t,"screenSpaceErrorFactor",2),De(t,"visualDensityScalar",.16))}function Ia(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(De(t.uniforms,"contrast",128),De(t.uniforms,"brightness",-.18),De(t.uniforms,"delta",1),De(t.uniforms,"sigma",2.5),De(t.uniforms,"stepSize",4.2)))}function ka(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function De(e,t,n){e&&t in e&&(e[t]=n)}function Ot(e,t,n,i,l,a){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(i,l,a))}function st(e,t){return e?t.reduce((n,i)=>(i in e&&(n[i]=za(e[i])),n),{}):{}}function lt(e,t={},n){!e||!t||Object.entries(t).forEach(([i,l])=>{i in e&&(e[i]=Na(l,n))})}function za(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Na(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Oa={__name:"LilGuiControls",props:{title:{type:String,default:"Parameters"},controls:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const n=e,i=t,l=Q(null),a={},o=new Map;let y=null,v="",S=!1;Ce(()=>[n.title,n.controls],()=>{M()},{deep:!0,flush:"post",immediate:!0}),ci(()=>{p()});function M(){typeof window>"u"||S||(S=!0,ui(()=>{S=!1,C()}))}function C(){const s=l.value;if(!s)return;const m=E(n.controls);(!y||m!==v)&&(p(),u(s,m)),D()}function u(s,m){y=new Ei({container:s,autoPlace:!1,title:n.title||"Parameters",width:Math.max(260,Math.floor(s.clientWidth||320))}),y.domElement.classList.add("cesium-lil-gui"),s.replaceChildren(y.domElement),v=m;for(const F of n.controls||[]){const z=w(F);z&&o.set(F.id,z)}}function w(s){if(s.type==="info")return null;a[s.id]=r(s);let m=null;return s.type==="range"?m=y.add(a,s.id,x(s.min,0),x(s.max,1),x(s.step,.01)):s.type==="color"?m=y.addColor(a,s.id):s.type==="select"?m=y.add(a,s.id,c(s)):m=y.add(a,s.id),m.name(P(s)).onChange(F=>{const z=f(s.id)||s;z.disabled||i("change",{control:z,controlId:z.id,value:F})}),T(m,s),m}function D(){if(y){y.title(n.title||"Parameters");for(const s of n.controls||[]){const m=o.get(s.id);if(!m)continue;const F=r(s);d(a[s.id],F)||(a[s.id]=F,m.updateDisplay()),m.name(P(s)),m.disable(!!s.disabled),T(m,s)}}}function T(s,m){s.domElement.title=m.tooltip||"",s.domElement.dataset.controlId=m.id||"",s.domElement.dataset.controlType=m.type||""}function E(s=[]){return JSON.stringify(s.map(m=>({id:m.id,type:m.type,min:m.min,max:m.max,step:m.step,options:(m.options||[]).map(F=>({label:F.label,value:F.value}))})))}function P(s){return s.displayValue?`${s.label||s.id} (${s.displayValue})`:s.label||s.id}function r(s){var m,F;return s.type==="range"?x(s.value,x(s.min,0)):s.type==="toggle"?!!s.value:s.type==="select"?s.value??((F=(m=s.options)==null?void 0:m[0])==null?void 0:F.value)??"":s.type==="color"?typeof s.value=="string"&&s.value?s.value:"#ffffff":s.value}function c(s){const m={};for(const F of s.options||[])m[F.label||F.value]=F.value;return m}function f(s){return n.controls.find(m=>m.id===s)||null}function d(s,m){return typeof s=="number"||typeof m=="number"?Math.abs(Number(s)-Number(m))<1e-12:s===m}function x(s,m){const F=Number(s);return Number.isFinite(F)?F:m}function p(){if(y)try{y.destroy()}catch{}y=null,v="",o.clear();for(const s of Object.keys(a))delete a[s]}return(s,m)=>(ie(),me("div",{ref_key:"containerRef",ref:l,class:"lil-gui-host"},null,512))}},yn=rt(Oa,[["__scopeId","data-v-110f953e"]]),Ha={key:0,class:"advanced-effects-root"},Ba={class:"effects-panel"},Ua={class:"panel-head"},Wa={class:"effect-switches"},Ga={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=mn(),i=Q(null),l=Q(!1),a=Q(!1),o=Q(!1),y=Q(!1),v=Q(!1),S=Re(()=>[{id:"fog",label:"Height Fog",type:"toggle",value:l.value},{id:"hbao",label:"HBAO",type:"toggle",value:a.value},{id:"tiltShift",label:"Tilt Shift",type:"toggle",value:o.value},{id:"atmosphere",label:"Atmosphere + Bloom",type:"toggle",value:y.value}]);let M=null,C=null,u=null,w=!1,D=null,T=null,E=null,P=null,r=null,c=null,f=null,d=null,x=!1,p=null,s=!1,m=0,F=0,z=typeof performance<"u"?performance.now():Date.now();function h(){return E||(E=It(()=>import("./cesiumFxRuntime-DhdyNrDC.js"),__vite__mapDeps([0,1]),import.meta.url).then(W=>{var ne;const H=(ne=W==null?void 0:W.getCesiumFxEchartsRuntime)==null?void 0:ne.call(W);if(!H)throw new Error("Cinematic FX 图表运行时加载失败");return T=H,H}).catch(W=>{throw E=null,W}),E)}async function L(){return T||h()}const R={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},_={hdr:null,bloom:null,sky:null};dn(()=>{$()}),jt(()=>{pe()}),Ce(()=>t.controls,W=>{I(W||{})},{deep:!0,immediate:!0});function I(W){Object.prototype.hasOwnProperty.call(W,"fog")&&(l.value=!!W.fog),Object.prototype.hasOwnProperty.call(W,"hbao")&&(a.value=!!W.hbao),Object.prototype.hasOwnProperty.call(W,"tiltShift")&&(o.value=!!W.tiltShift),Object.prototype.hasOwnProperty.call(W,"atmosphere")&&(y.value=!!W.atmosphere)}function B({controlId:W,value:H}){const ne=!!H,ae={fog:l,hbao:a,tiltShift:o,atmosphere:y}[W];ae&&(ae.value=ne)}function $(){let W=0;P=window.setInterval(async()=>{var ee,ae;W+=1;const H=(ee=t.getViewer)==null?void 0:ee.call(t),ne=((ae=t.getCesium)==null?void 0:ae.call(t))||window.Cesium;if(H&&ne){clearInterval(P),P=null;try{X(H),J(H),le(H,ne),G(H,ne),n.success("高级视觉效果已启用。")}catch(j){n.error("高级视觉效果初始化失败",j),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}W>=150&&(clearInterval(P),P=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function X(W){var ee,ae,j,te,re,se,Se,He,Ue;const H=W==null?void 0:W.scene;if(!H)return;typeof H.highDynamicRange=="boolean"&&(_.hdr=H.highDynamicRange),"sunBloom"in H&&(_.sunBloom=H.sunBloom);const ne=H.globe;if(ne&&(_.globe={enableLighting:ne.enableLighting,showGroundAtmosphere:ne.showGroundAtmosphere,dynamicAtmosphereLighting:ne.dynamicAtmosphereLighting,dynamicAtmosphereLightingFromSun:ne.dynamicAtmosphereLightingFromSun,atmosphereLightIntensity:ne.atmosphereLightIntensity,atmosphereHueShift:ne.atmosphereHueShift,atmosphereSaturationShift:ne.atmosphereSaturationShift,atmosphereBrightnessShift:ne.atmosphereBrightnessShift,lightingFadeInDistance:ne.lightingFadeInDistance,lightingFadeOutDistance:ne.lightingFadeOutDistance,nightFadeInDistance:ne.nightFadeInDistance,nightFadeOutDistance:ne.nightFadeOutDistance}),H.light&&(_.light={intensity:H.light.intensity}),(ee=H.postProcessStages)!=null&&ee.bloom){const Pe=H.postProcessStages.bloom;_.bloom={enabled:!!Pe.enabled,contrast:(ae=Pe.uniforms)==null?void 0:ae.contrast,brightness:(j=Pe.uniforms)==null?void 0:j.brightness,delta:(te=Pe.uniforms)==null?void 0:te.delta,sigma:(re=Pe.uniforms)==null?void 0:re.sigma,stepSize:(se=Pe.uniforms)==null?void 0:se.stepSize}}H.skyAtmosphere&&(_.sky={show:H.skyAtmosphere.show,hueShift:H.skyAtmosphere.hueShift,saturationShift:H.skyAtmosphere.saturationShift,brightnessShift:H.skyAtmosphere.brightnessShift}),_.celestial={sunShow:(Se=H.sun)==null?void 0:Se.show,moonShow:(He=H.moon)==null?void 0:He.show,skyBoxShow:(Ue=H.skyBox)==null?void 0:Ue.show}}function le(W,H){var ee;!((ee=W==null?void 0:W.scene)!=null&&ee.postProcessStages)||!(H!=null&&H.PostProcessStage)||(be(W,H),ce(W,H),O(W,H),y.value?U(W,H,1200):he(W))}function J(W){var ne;const H=W==null?void 0:W.scene;(ne=H==null?void 0:H.renderError)!=null&&ne.addEventListener&&(H.rethrowRenderErrors=!1,d=H.renderError.addEventListener((ee,ae)=>{n.error("Cesium 渲染异常，已触发降级保护",ae),fe(),x||(x=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function fe(){l.value=!1,o.value=!1,a.value=!1,y.value=!1,M&&(M.enabled=!1),C&&(C.enabled=!1),u&&(u.enabled=!1)}function be(W,H){M||(M=new H.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new H.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),W.scene.postProcessStages.add(M),M.enabled=l.value)}function ce(W,H){var ee,ae;const ne=(ee=W==null?void 0:W.scene)==null?void 0:ee.postProcessStages;ne&&(ne.ambientOcclusion?(u=ne.ambientOcclusion,w=!1):(ae=H==null?void 0:H.PostProcessStageLibrary)!=null&&ae.createAmbientOcclusionStage&&(u=H.PostProcessStageLibrary.createAmbientOcclusionStage(),ne.add(u),w=!0),u&&(u.enabled=a.value,u.uniforms&&("intensity"in u.uniforms&&(u.uniforms.intensity=4.2),"bias"in u.uniforms&&(u.uniforms.bias=.08),"lengthCap"in u.uniforms&&(u.uniforms.lengthCap=.35),"stepSize"in u.uniforms&&(u.uniforms.stepSize=1.8),"frustumLength"in u.uniforms&&(u.uniforms.frustumLength=1200))))}function O(W,H){C||(C=new H.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),W.scene.postProcessStages.add(C),C.enabled=!1)}function G(W,H){const ne=W==null?void 0:W.scene;ne&&(f=ne.preRender.addEventListener(()=>{var te;const ee=Be(W),ae=Number(((te=W==null?void 0:W.camera)==null?void 0:te.pitch)??-1.2);m+=1;const j=typeof performance<"u"?performance.now():Date.now();if(j-z>=1e3&&(F=Math.round(m*1e3/(j-z)),m=0,z=j),M&&(M.enabled=l.value,M.uniforms.cameraHeightFactor=Ye(ee,150,12e3),M.uniforms.fogDensity=55e-5+(1-M.uniforms.cameraHeightFactor)*.00125),u&&(u.enabled=a.value),C){const re=ae>-.62,se=re?je((ae+.62)/.5):0;C.enabled=o.value&&re,C.uniforms.blurStrength=se}y.value&&ee>=8e4?(U(W,H,ee),s=!1):s||(he(W),s=!0)}))}function U(W,H,ne){var re;const ee=W==null?void 0:W.scene;if(!ee)return;p||(p=Aa(W)),Pa(W,H),typeof ee.highDynamicRange=="boolean"&&(ee.highDynamicRange=!0);const ae=(re=ee.postProcessStages)==null?void 0:re.bloom;ae&&(ae.enabled=!0,ae.uniforms&&("contrast"in ae.uniforms&&(ae.uniforms.contrast=149),"brightness"in ae.uniforms&&(ae.uniforms.brightness=-.12),"delta"in ae.uniforms&&(ae.uniforms.delta=1),"sigma"in ae.uniforms&&(ae.uniforms.sigma=3.25),"stepSize"in ae.uniforms&&(ae.uniforms.stepSize=5)));const j=ee.skyAtmosphere;if(!j)return;const te=Ye(ne,500,12e4);j.hueShift=-.035+te*.035,j.saturationShift=-.14+te*.09,j.brightnessShift=.03+(1-te)*.08}function he(W){var j,te,re;const H=W==null?void 0:W.scene;if(!H)return;const ne=((j=t.getCesium)==null?void 0:j.call(t))||window.Cesium;if(p){Ca(W,ne,p),p=null;return}typeof H.highDynamicRange=="boolean"&&_.hdr!==null&&(H.highDynamicRange=_.hdr),"sunBloom"in H&&_.sunBloom!==void 0&&(H.sunBloom=_.sunBloom);const ee=H.globe;if(ee&&_.globe){const se=_.globe;se.enableLighting!==void 0&&(ee.enableLighting=se.enableLighting),se.showGroundAtmosphere!==void 0&&(ee.showGroundAtmosphere=se.showGroundAtmosphere),se.dynamicAtmosphereLighting!==void 0&&"dynamicAtmosphereLighting"in ee&&(ee.dynamicAtmosphereLighting=se.dynamicAtmosphereLighting),se.dynamicAtmosphereLightingFromSun!==void 0&&"dynamicAtmosphereLightingFromSun"in ee&&(ee.dynamicAtmosphereLightingFromSun=se.dynamicAtmosphereLightingFromSun),se.atmosphereLightIntensity!==void 0&&"atmosphereLightIntensity"in ee&&(ee.atmosphereLightIntensity=se.atmosphereLightIntensity),se.atmosphereHueShift!==void 0&&"atmosphereHueShift"in ee&&(ee.atmosphereHueShift=se.atmosphereHueShift),se.atmosphereSaturationShift!==void 0&&"atmosphereSaturationShift"in ee&&(ee.atmosphereSaturationShift=se.atmosphereSaturationShift),se.atmosphereBrightnessShift!==void 0&&"atmosphereBrightnessShift"in ee&&(ee.atmosphereBrightnessShift=se.atmosphereBrightnessShift),se.lightingFadeInDistance!==void 0&&"lightingFadeInDistance"in ee&&(ee.lightingFadeInDistance=se.lightingFadeInDistance),se.lightingFadeOutDistance!==void 0&&"lightingFadeOutDistance"in ee&&(ee.lightingFadeOutDistance=se.lightingFadeOutDistance),se.nightFadeInDistance!==void 0&&"nightFadeInDistance"in ee&&(ee.nightFadeInDistance=se.nightFadeInDistance),se.nightFadeOutDistance!==void 0&&"nightFadeOutDistance"in ee&&(ee.nightFadeOutDistance=se.nightFadeOutDistance)}H.light&&_.light&&_.light.intensity!==void 0&&(H.light.intensity=_.light.intensity);const ae=(te=H.postProcessStages)==null?void 0:te.bloom;if(ae&&_.bloom&&(ae.enabled=_.bloom.enabled,ae.uniforms&&("contrast"in ae.uniforms&&_.bloom.contrast!==void 0&&(ae.uniforms.contrast=_.bloom.contrast),"brightness"in ae.uniforms&&_.bloom.brightness!==void 0&&(ae.uniforms.brightness=_.bloom.brightness),"delta"in ae.uniforms&&_.bloom.delta!==void 0&&(ae.uniforms.delta=_.bloom.delta),"sigma"in ae.uniforms&&_.bloom.sigma!==void 0&&(ae.uniforms.sigma=_.bloom.sigma),"stepSize"in ae.uniforms&&_.bloom.stepSize!==void 0&&(ae.uniforms.stepSize=_.bloom.stepSize))),H.skyAtmosphere&&_.sky&&(_.sky.show!==void 0&&(H.skyAtmosphere.show=_.sky.show),H.skyAtmosphere.hueShift=_.sky.hueShift,H.skyAtmosphere.saturationShift=_.sky.saturationShift,H.skyAtmosphere.brightnessShift=_.sky.brightnessShift),_.celestial){const se=_.celestial;H.sun&&se.sunShow!==void 0&&(H.sun.show=se.sunShow),H.moon&&se.moonShow!==void 0&&(H.moon.show=se.moonShow),H.skyBox&&se.skyBoxShow!==void 0&&(H.skyBox.show=se.skyBoxShow)}(re=H.requestRender)==null||re.call(H)}function Ae(){r&&(clearInterval(r),r=null)}async function Te(){var ee,ae;const W=!v.value;if(v.value=W,!W){Ae();return}const H=(ee=t.getViewer)==null?void 0:ee.call(t),ne=((ae=t.getCesium)==null?void 0:ae.call(t))||window.Cesium;if(!H||!ne){v.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Fe(H,ne),Ie(H,ne),Oe(H,ne)}catch(j){v.value=!1,n.error("图表模块加载失败",j)}}async function Fe(W,H){await L(),await ui(),i.value&&(D||(D=T.init(i.value),Ge()),c||(c=()=>{D==null||D.resize()},window.addEventListener("resize",c)),D.resize(),Oe(W,H))}function Ie(W,H){r||(r=window.setInterval(()=>{!D||!v.value||Oe(W,H)},1200))}function Oe(W,H){var te;const ne=new Date,ee=`${Ne(ne.getHours())}:${Ne(ne.getMinutes())}:${Ne(ne.getSeconds())}`,ae=Number((Be(W)/1e3).toFixed(2)),j=Number(H.Math.toDegrees(((te=W==null?void 0:W.camera)==null?void 0:te.pitch)??0).toFixed(1));qe(R.labels,ee,20),qe(R.cameraHeightKm,ae,20),qe(R.pitchDeg,j,20),qe(R.fps,F,20),D.setOption({xAxis:{data:R.labels},series:[{data:R.cameraHeightKm},{data:R.pitchDeg},{data:R.fps}]})}function Ge(){D&&D.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function pe(){var ne,ee;P&&(clearInterval(P),P=null),Ae();const W=(ne=t.getViewer)==null?void 0:ne.call(t),H=(ee=W==null?void 0:W.scene)==null?void 0:ee.postProcessStages;f&&(f(),f=null),d&&(d(),d=null),M&&H&&H.remove(M),M=null,C&&H&&H.remove(C),C=null,u&&(w&&H&&H.remove(u),u=null),w=!1,s=!1,W&&he(W),c&&(window.removeEventListener("resize",c),c=null),D&&(D.dispose(),D=null),T=null,x=!1}function Be(W){var ae,j,te;const H=(j=(ae=W==null?void 0:W.scene)==null?void 0:ae.globe)==null?void 0:j.ellipsoid,ne=(te=W==null?void 0:W.camera)==null?void 0:te.positionWC;if(!H||!ne)return 0;const ee=H.cartesianToCartographic(ne);return Math.max(0,Number((ee==null?void 0:ee.height)??0))}function Ye(W,H,ne){return!Number.isFinite(W)||ne<=H?0:je((W-H)/(ne-H))}function je(W){return Math.min(1,Math.max(0,Number(W)||0))}function qe(W,H,ne){W.push(H),W.length>ne&&W.shift()}function Ne(W){return String(W).padStart(2,"0")}return(W,H)=>e.headless?_e("",!0):(ie(),me("div",Ha,[b("div",Ba,[b("div",Ua,[H[0]||(H[0]=b("span",{class:"panel-title"},"Cinematic FX",-1)),b("button",{class:"panel-btn",onClick:Te},we(v.value?"隐藏图表":"显示图表"),1)]),b("div",Wa,[Ee(yn,{title:"Effect Parameters",controls:S.value,onChange:B},null,8,["controls"])]),tt(b("div",{ref_key:"chartRef",ref:i,class:"fx-chart"},null,512),[[gt,v.value]])])]))}},$a=rt(Ga,[["__scopeId","data-v-c7595ca3"]]),ja={key:0,class:"launcher-count"},qa={class:"panel-header"},Va={class:"panel-title-block"},Xa={class:"panel-mark"},Ya={class:"panel-copy"},Ka={class:"panel-subtitle"},Za={class:"panel-actions"},Ja=["title"],Qa={class:"panel-tabs","aria-label":"3D 工具分类"},er=["aria-pressed","onClick"],tr={class:"panel-scroll"},nr={class:"panel-page"},ir={class:"overview-grid"},ar={class:"overview-tile"},rr={class:"overview-tile"},or={class:"overview-tile"},sr={key:0,class:"quick-actions"},lr=["disabled","onClick"],cr={key:1,class:"empty-state"},ur={class:"panel-page"},dr=["aria-expanded"],hr={class:"section-main"},fr={class:"section-meta"},mr={key:0,class:"section-body"},pr={class:"option-grid"},vr=["disabled","aria-pressed","title","onClick"],gr={class:"custom-basemap-input-row"},yr=["disabled"],br={key:0,class:"custom-basemap-current"},xr=["aria-expanded"],Sr={class:"section-main"},_r={class:"section-meta"},wr={key:0,class:"section-body"},Tr={class:"option-grid"},Mr=["aria-pressed","title","onClick"],Dr=["aria-expanded"],Lr={class:"section-main"},Fr={class:"section-meta"},Pr={key:0,class:"section-body"},Ar={class:"overlay-list"},Cr=["disabled","aria-pressed","title","onClick"],Er={class:"overlay-copy"},Rr={class:"overlay-title"},Ir={key:0,class:"overlay-desc"},kr={key:3,class:"empty-state"},zr={class:"panel-page"},Nr={class:"module-list"},Or=["aria-expanded","onClick"],Hr={class:"module-icon"},Br={class:"module-copy"},Ur={class:"module-title"},Wr={key:0,class:"module-desc"},Gr={class:"module-head-side"},$r={key:0,class:"module-body"},jr={key:0,class:"module-actions"},qr=["disabled","onClick"],Vr={key:0,class:"empty-state"},Xr={class:"panel-page"},Yr={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},Kr={class:"data-upload-hint"},Zr={class:"tileset-actions"},Jr={key:0,class:"data-source-list"},Qr={class:"data-source-head"},eo={class:"data-source-count"},to=["title","aria-label","onClick"],no={class:"data-source-icon"},io={class:"data-source-copy"},ao={class:"data-source-name"},ro={class:"data-source-type"},oo={key:1,class:"empty-state"},On=3,so=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",lo={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all","import-tileset-zip","import-tileset-folder"],setup(e,{emit:t}){const n=e,i=Q(Array.isArray(n.loadedDataSources)?n.loadedDataSources:[]);Ce(()=>n.loadedDataSources,O=>{const G=Array.isArray(O)?O:[];G!==i.value&&(i.value=G)},{immediate:!0});const l=t,a=L(),o=a.uiStateVersion===On,y=Q(a.activeTab||"scene"),v=Q(!!a.compactMode),S=Q(new Set(o?a.expandedLayerSectionIds||[]:[])),M=Q(new Set(o?a.expandedModuleIds||[]:[])),C=Q(n.customBasemapUrl||""),u=Q(null),w=Re(()=>n.embedded||n.open),D=Re(()=>n.modules.find(O=>O.id==="scene")||null),T=Re(()=>{var O;return((O=D.value)==null?void 0:O.actions)||[]}),E=Re(()=>n.modules.filter(O=>O.id!=="scene")),P=Re(()=>E.value.filter(O=>O.statusTone==="success"||O.statusTone==="warning").length),r=Re(()=>n.overlayOptions.filter(O=>!!O.active).length),c=[{id:"scene",label:"场景",icon:Jt},{id:"layers",label:"图层",icon:Qt},{id:"data",label:"数据",icon:ln},{id:"modules",label:"模块",icon:Zt}],f=Re(()=>{var O;return((O=n.basemapOptions.find(G=>G.value===n.activeBasemap))==null?void 0:O.label)||"未选择"}),d=Re(()=>{var O;return((O=n.terrainOptions.find(G=>G.value===n.activeTerrain))==null?void 0:O.label)||"未选择"});Ce(()=>n.modules.map(O=>O.id),O=>{O.includes(y.value)||y.value==="scene"||y.value==="layers"||y.value==="modules"||(y.value="scene")},{immediate:!0}),Ce([y,v,S,M],R,{deep:!0}),Ce(()=>n.customBasemapUrl,O=>{O!==C.value&&(C.value=O||"")});function x(O){l("update:open",O)}function p(O){return S.value.has(O)}function s(O){const G=new Set(S.value);G.has(O)?G.delete(O):G.add(O),S.value=G}function m(O){return M.value.has(O)}function F(O){const G=new Set(M.value);G.has(O)?G.delete(O):G.add(O),M.value=G}function z(O){O!=null&&O.disabled||l("update:activeBasemap",O.value)}function h(){l("custom-basemap-submit",{url:C.value})}function L(){if(typeof window>"u")return{};try{const O=window.localStorage.getItem(n.storageKey);return O?JSON.parse(O):{}}catch{return{}}}function R(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:On,activeTab:y.value,compactMode:v.value,expandedLayerSectionIds:[...S.value],expandedModuleIds:[...M.value]}))}catch{}}function _(O){return{scene:Jt,effects:Wi,wind:Ui,fluid:Bi,shallowWater:Pn}[O]||Zt}function I(O,G){var he;return((he={scene:{home:Oi,everest:Ln,tileset:Wt},wind:{load:Ni,clear:en},fluid:{pick:Fn,clear:en},shallowWater:{toggle:Pn}}[O])==null?void 0:he[G])||Hi}function B(O,G){l("module-action",{moduleId:O,actionId:G})}function $(O,G,U){const he=G.type==="range"?Number(U):U;l("control-change",{moduleId:O,controlId:G.id,value:he})}function X(O){O.disabled||l("overlay-toggle",{overlayId:O.value,value:!O.active})}function le(O){return{geojson:zt,json:zt,kml:An,kmz:An,shp:Qt,gltf:Wt,czml:zt,"3dtiles":Wt}[O]||zt}function J(O){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[O]||O.toUpperCase()}function fe(O){var U;const G=(U=O.target)==null?void 0:U.files;!G||G.length===0||(l("data-import",{files:Array.from(G)}),u.value&&(u.value.value=""))}function be(O){l("data-remove",{id:O})}function ce(){l("data-clear-all")}return(O,G)=>(ie(),me("aside",{class:Xe(["cesium-tool-shell",{"is-open":w.value,"is-embedded":e.embedded}])},[!e.embedded&&!w.value?(ie(),me("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:G[0]||(G[0]=U=>x(!0))},[Ee(ve(Zt),{size:18,"stroke-width":"2"}),G[9]||(G[9]=b("span",null,"高级控制台",-1)),P.value?(ie(),me("span",ja,we(P.value),1)):_e("",!0)])):_e("",!0),tt(b("section",{class:Xe(["cesium-tool-panel",{compact:v.value}]),"aria-label":"Cesium 高级控制台"},[b("header",qa,[b("div",Va,[b("span",Xa,[Ee(ve(Jt),{size:18,"stroke-width":"2"})]),b("span",Ya,[G[10]||(G[10]=b("span",{class:"panel-title"},"3D 高级控制台",-1)),b("span",Ka,we(f.value)+" / "+we(d.value),1)])]),b("div",Za,[b("button",{class:"icon-btn",type:"button",title:v.value?"切换为舒展布局":"切换为紧凑布局",onClick:G[1]||(G[1]=U=>v.value=!v.value)},[Ee(ve(Ri),{size:16,"stroke-width":"2"})],8,Ja),e.embedded?_e("",!0):(ie(),me("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:G[2]||(G[2]=U=>x(!1))},[Ee(ve(Mn),{size:17,"stroke-width":"2"})]))])]),b("nav",Qa,[(ie(),me(ct,null,ht(c,U=>b("button",{key:U.id,class:Xe(["tab-btn",{active:y.value===U.id}]),type:"button","aria-pressed":y.value===U.id,onClick:he=>y.value=U.id},[(ie(),Ze(yt(U.icon),{size:15,"stroke-width":"2"})),b("span",null,we(U.label),1)],10,er)),64))]),b("div",tr,[tt(b("section",nr,[b("div",ir,[b("div",ar,[G[11]||(G[11]=b("span",{class:"overview-label"},"地图源",-1)),b("strong",null,we(f.value),1)]),b("div",rr,[G[12]||(G[12]=b("span",{class:"overview-label"},"地形",-1)),b("strong",null,we(d.value),1)]),b("div",or,[G[13]||(G[13]=b("span",{class:"overview-label"},"模块",-1)),b("strong",null,we(P.value)+"/"+we(E.value.length),1)])]),T.value.length?(ie(),me("div",sr,[(ie(!0),me(ct,null,ht(T.value,U=>(ie(),me("button",{key:U.id,class:Xe(["tool-action",[U.variant||"default",{active:U.active}]]),disabled:U.disabled,type:"button",onClick:he=>B(D.value.id,U.id)},[(ie(),Ze(yt(I(D.value.id,U.id)),{size:15,"stroke-width":"2"})),wt(" "+we(U.label),1)],10,lr))),128))])):(ie(),me("div",cr," 暂无场景快捷操作 "))],512),[[gt,y.value==="scene"]]),tt(b("section",ur,[e.basemapOptions.length?(ie(),me("div",{key:0,class:Xe(["option-group",{expanded:p("basemap")}])},[b("button",{class:"section-head section-toggle",type:"button","aria-expanded":p("basemap"),onClick:G[3]||(G[3]=U=>s("basemap"))},[b("span",hr,[Ee(ve(Qt),{size:16,"stroke-width":"2"}),G[14]||(G[14]=b("span",null,"底图源",-1))]),b("span",fr,[b("span",null,we(f.value),1),Ee(ve(kt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,dr),p("basemap")?(ie(),me("div",mr,[b("div",pr,[(ie(!0),me(ct,null,ht(e.basemapOptions,U=>(ie(),me("button",{key:U.value,class:Xe(["option-card",{active:U.value===e.activeBasemap}]),type:"button",disabled:U.disabled,"aria-pressed":U.value===e.activeBasemap,title:U.description||U.label,onClick:he=>z(U)},[b("span",null,we(U.label),1),U.value===e.activeBasemap?(ie(),Ze(ve(Dn),{key:0,size:15,"stroke-width":"2.4"})):_e("",!0)],10,vr))),128))]),b("form",{class:"custom-basemap-editor",onSubmit:bt(h,["prevent"])},[b("div",gr,[Ee(ve(Ii),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),tt(b("input",{"onUpdate:modelValue":G[4]||(G[4]=U=>C.value=U),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Ut,C.value]]),b("button",{class:"custom-basemap-submit",type:"submit",disabled:!C.value.trim(),title:"加载自定义 XYZ"},[Ee(ve(mi),{size:14,"stroke-width":"2"}),G[15]||(G[15]=b("span",null,"加载",-1))],8,yr)]),e.customBasemapUrl?(ie(),me("div",br,we(e.customBasemapUrl),1)):_e("",!0)],32)])):_e("",!0)],2)):_e("",!0),e.terrainOptions.length?(ie(),me("div",{key:1,class:Xe(["option-group",{expanded:p("terrain")}])},[b("button",{class:"section-head section-toggle",type:"button","aria-expanded":p("terrain"),onClick:G[5]||(G[5]=U=>s("terrain"))},[b("span",Sr,[Ee(ve(Ln),{size:16,"stroke-width":"2"}),G[16]||(G[16]=b("span",null,"地形",-1))]),b("span",_r,[b("span",null,we(d.value),1),Ee(ve(kt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,xr),p("terrain")?(ie(),me("div",wr,[b("div",Tr,[(ie(!0),me(ct,null,ht(e.terrainOptions,U=>(ie(),me("button",{key:U.value,class:Xe(["option-card",{active:U.value===e.activeTerrain}]),type:"button","aria-pressed":U.value===e.activeTerrain,title:U.description||U.label,onClick:he=>O.$emit("update:activeTerrain",U.value)},[b("span",null,we(U.label),1),U.value===e.activeTerrain?(ie(),Ze(ve(Dn),{key:0,size:15,"stroke-width":"2.4"})):_e("",!0)],10,Mr))),128))])])):_e("",!0)],2)):_e("",!0),e.overlayOptions.length?(ie(),me("div",{key:2,class:Xe(["option-group",{expanded:p("overlay")}])},[b("button",{class:"section-head section-toggle",type:"button","aria-expanded":p("overlay"),onClick:G[6]||(G[6]=U=>s("overlay"))},[b("span",Lr,[Ee(ve(Fn),{size:16,"stroke-width":"2"}),G[17]||(G[17]=b("span",null,"叠加层",-1))]),b("span",Fr,[b("span",null,we(r.value)+"/"+we(e.overlayOptions.length),1),Ee(ve(kt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Dr),p("overlay")?(ie(),me("div",Pr,[b("div",Ar,[(ie(!0),me(ct,null,ht(e.overlayOptions,U=>(ie(),me("button",{key:U.value,class:Xe(["overlay-row",{active:!!U.active}]),type:"button",disabled:U.disabled,"aria-pressed":!!U.active,title:U.description||U.label,onClick:he=>X(U)},[b("span",Er,[b("span",Rr,we(U.label),1),U.description?(ie(),me("span",Ir,we(U.description),1)):_e("",!0)]),b("span",{class:Xe(["toggle-control",{active:!!U.active}]),"aria-hidden":"true"},[...G[18]||(G[18]=[b("span",{class:"toggle-track"},[b("span",{class:"toggle-thumb"})],-1)])],2)],10,Cr))),128))])])):_e("",!0)],2)):_e("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(ie(),me("div",kr," 暂无图层配置项 ")):_e("",!0)],512),[[gt,y.value==="layers"]]),tt(b("section",zr,[b("div",Nr,[(ie(!0),me(ct,null,ht(E.value,U=>{var he,Ae;return ie(),me("article",{key:U.id,class:Xe(["module-item",{expanded:m(U.id)}])},[b("button",{class:"module-head",type:"button","aria-expanded":m(U.id),onClick:Te=>F(U.id)},[b("span",Hr,[(ie(),Ze(yt(_(U.id)),{size:16,"stroke-width":"2"}))]),b("span",Br,[b("span",Ur,we(U.title),1),U.description?(ie(),me("span",Wr,we(U.description),1)):_e("",!0)]),b("span",Gr,[U.status?(ie(),me("span",{key:0,class:Xe(["module-status",U.statusTone||"neutral"])},we(U.status),3)):_e("",!0),Ee(ve(kt),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Or),m(U.id)?(ie(),me("div",$r,[(he=U.actions)!=null&&he.length?(ie(),me("div",jr,[(ie(!0),me(ct,null,ht(U.actions,Te=>(ie(),me("button",{key:Te.id,class:Xe(["tool-action",[Te.variant||"default",{active:Te.active}]]),disabled:Te.disabled,type:"button",onClick:Fe=>B(U.id,Te.id)},[(ie(),Ze(yt(I(U.id,Te.id)),{size:14,"stroke-width":"2"})),wt(" "+we(Te.label),1)],10,qr))),128))])):_e("",!0),(Ae=U.controls)!=null&&Ae.length?(ie(),me("div",{key:1,class:Xe(["control-list control-list-gui",U.controlLayout?`control-list-${U.controlLayout}`:""])},[Ee(yn,{title:U.title,controls:U.controls,onChange:Te=>$(U.id,Te.control,Te.value)},null,8,["title","controls","onChange"])],2)):_e("",!0)])):_e("",!0)],2)}),128))]),E.value.length?_e("",!0):(ie(),me("div",Vr," 暂无可用功能模块 "))],512),[[gt,y.value==="modules"]]),tt(b("section",Xr,[b("label",Yr,[b("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:u,class:"data-file-input",type:"file",multiple:"",accept:so,onChange:fe},null,544),b("div",Kr,[Ee(ve(ln),{size:28,"stroke-width":"1.5"}),G[19]||(G[19]=b("span",null,"选择文件或拖拽到此处",-1)),G[20]||(G[20]=b("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),b("div",Zr,[b("button",{class:"tool-action primary",type:"button",title:"从 ZIP 压缩包导入 3D Tiles 数据集",onClick:G[7]||(G[7]=U=>l("import-tileset-zip"))},[Ee(ve(ki),{size:14,"stroke-width":"2"}),G[21]||(G[21]=wt(" ZIP导入 ",-1))]),b("button",{class:"tool-action primary",type:"button",title:"从文件夹导入 3D Tiles 数据集（需浏览器支持）",onClick:G[8]||(G[8]=U=>l("import-tileset-folder"))},[Ee(ve(zi),{size:14,"stroke-width":"2"}),G[22]||(G[22]=wt(" 文件夹导入 ",-1))])]),i.value.length?(ie(),me("div",Jr,[b("div",Qr,[b("span",eo," 已加载 "+we(i.value.length)+" 个数据源 ",1),b("button",{class:"tool-action danger",type:"button",onClick:ce},[Ee(ve(en),{size:13,"stroke-width":"2"}),G[23]||(G[23]=wt(" 全部清除 ",-1))])]),(ie(!0),me(ct,null,ht(i.value,U=>(ie(),me("button",{key:U.id,class:"data-source-row",type:"button",title:`点击移除 ${U.name} (${J(U.type)})`,"aria-label":`移除 ${U.name}`,onClick:he=>be(U.id)},[b("span",no,[(ie(),Ze(yt(le(U.type)),{size:15,"stroke-width":"2"}))]),b("span",io,[b("span",ao,we(U.name),1),b("span",ro,we(J(U.type)),1)]),Ee(ve(Mn),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,to))),128))])):(ie(),me("div",oo," 暂无已导入的数据 "))],512),[[gt,y.value==="data"]])])],2),[[gt,e.embedded||w.value]])],2))}},co=rt(lo,[["__scopeId","data-v-322ee0ef"]]),uo={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},ho={class:"dialog-header"},fo={class:"dialog-title-row"},mo={class:"dialog-file-name"},po={class:"coord-fields"},vo={class:"coord-field"},go={key:0,class:"coord-error"},yo={class:"coord-field"},bo={key:0,class:"coord-error"},xo={class:"coord-field"},So={key:0,class:"coord-error"},_o={class:"dialog-actions"},wo=["disabled"],To={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,i=t,l=Q(""),a=Q(""),o=Q("0"),y=Q(null),v=Q(""),S=Q(""),M=Q(""),C=Re(()=>l.value!==""&&a.value!==""&&!v.value&&!S.value&&!M.value);function u(){const D=parseFloat(l.value),T=parseFloat(a.value),E=parseFloat(o.value);v.value="",S.value="",M.value="",l.value!==""&&(isNaN(D)||D<-180||D>180)&&(v.value="经度范围: -180 ~ 180"),a.value!==""&&(isNaN(T)||T<-90||T>90)&&(S.value="纬度范围: -90 ~ 90"),o.value!==""&&(isNaN(E)||E<0)&&(M.value="高度必须 ≥ 0")}function w(){if(!C.value){u();return}const D=parseFloat(l.value),T=parseFloat(a.value),E=parseFloat(o.value)||0;i("confirm",{lng:D,lat:T,height:E})}return Ce(()=>n.visible,D=>{if(!D){v.value="",S.value="",M.value="";return}l.value="",a.value="",o.value="0",v.value="",S.value="",M.value="",D&&setTimeout(()=>{var T;(T=y.value)==null||T.focus()},60)}),(D,T)=>(ie(),Ze(bi,{to:"body"},[e.visible?(ie(),me("div",{key:0,class:"cesium-data-dialog-overlay",onClick:T[4]||(T[4]=bt(E=>D.$emit("cancel"),["self"]))},[b("div",uo,[b("header",ho,[b("div",fo,[Ee(ve(Wt),{size:18,"stroke-width":"2"}),T[5]||(T[5]=b("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),b("p",mo,we(e.fileName),1),T[6]||(T[6]=b("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),b("form",{class:"dialog-form",onSubmit:bt(w,["prevent"])},[b("div",po,[b("label",vo,[T[7]||(T[7]=b("span",{class:"coord-label"},"经度 (Longitude)",-1)),tt(b("input",{ref_key:"lngInputRef",ref:y,"onUpdate:modelValue":T[0]||(T[0]=E=>l.value=E),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:u},null,544),[[Ut,l.value]]),v.value?(ie(),me("span",go,we(v.value),1)):_e("",!0)]),b("label",yo,[T[8]||(T[8]=b("span",{class:"coord-label"},"纬度 (Latitude)",-1)),tt(b("input",{"onUpdate:modelValue":T[1]||(T[1]=E=>a.value=E),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:u},null,544),[[Ut,a.value]]),S.value?(ie(),me("span",bo,we(S.value),1)):_e("",!0)]),b("label",xo,[T[9]||(T[9]=b("span",{class:"coord-label"},"高度 (Height 米)",-1)),tt(b("input",{"onUpdate:modelValue":T[2]||(T[2]=E=>o.value=E),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:u},null,544),[[Ut,o.value]]),M.value?(ie(),me("span",So,we(M.value),1)):_e("",!0)])]),b("div",_o,[b("button",{class:"dialog-btn cancel-btn",type:"button",onClick:T[3]||(T[3]=E=>D.$emit("cancel"))}," 取消 "),b("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!C.value},[Ee(ve(mi),{size:14,"stroke-width":"2"}),T[10]||(T[10]=wt(" 确认放置 ",-1))],8,wo)])],32)])])):_e("",!0)]))}},Mo=rt(To,[["__scopeId","data-v-81f307a1"]]);function Do(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(P){return(P==null?void 0:P._view)||(P==null?void 0:P.view)}function n(P){const r=t(P);if(!(r!=null&&r.passState))throw new Error("Cesium scene passState is unavailable.");return r.passState}function i(P){const r=t(P);return(r==null?void 0:r.frustumCommandsList)||(r==null?void 0:r._frustumCommandsList)||[]}const l=`
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
`,a=`
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
`,o=`
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
`;class M{constructor(r){this.commandType=r.commandType,this.geometry=r.geometry,this.attributeLocations=r.attributeLocations,this.primitiveType=r.primitiveType,this.uniformMap=r.uniformMap,this.vertexShaderSource=r.vertexShaderSource,this.fragmentShaderSource=r.fragmentShaderSource,this.rawRenderState=r.rawRenderState,this.framebuffer=r.framebuffer,this.isPostRender=r.isPostRender,this.outputTexture=r.outputTexture,this.autoClear=e.defaultValue(r.autoClear,!1),this.preExecute=r.preExecute,this.modelMatrix=e.defaultValue(r.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(r){switch(this.commandType){case"Draw":{const c=e.VertexArray.fromGeometry({context:r,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),f=e.ShaderProgram.fromCache({context:r,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),d=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:c,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:f,framebuffer:this.framebuffer,renderState:d,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(r,c){this.geometry=c;const f=e.VertexArray.fromGeometry({context:r,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=f}update(r){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(r.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&r.commandList.push(this.clearCommand),r.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class C{constructor(){}static loadText(r){const c=new XMLHttpRequest;return c.open("GET",r,!1),c.send(),c.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(r){if(e.defined(r.arrayBufferView)){const f={};f.arrayBufferView=r.arrayBufferView,r.source=f,r.flipY=!1}return new e.Texture(r)}static createDepthFramebuffer(r,c,f){return new e.Framebuffer({context:r,colorTextures:[this.createTexture({context:r,width:c,height:f,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(c*f*4)})],depthRenderbuffer:new e.Renderbuffer({context:r,width:c,height:f,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(r,c,f,d=!1){const x={context:r,colorTextures:[c],destroyAttachments:d};return f&&(x.depthTexture=f),new e.Framebuffer(x)}static createRawRenderState(r){const d={viewport:r.viewport,depthTest:r.depthTest,depthMask:r.depthMask,blending:r.blending};return e.Appearance.getDefaultRenderState(!0,!1,d)}}const E=class E{constructor(r,c={}){if(!r)throw new Error("Cesium Viewer is required");this.viewer=r,this._initConfiguration(c),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(r){this.config={resolution:new e.Cartesian2(r.width||E.DEFAULTS.width,r.height||E.DEFAULTS.height),dimensions:r.dimensions||E.DEFAULTS.dimensions.clone(),heightRange:{min:r.minHeight??E.DEFAULTS.heightRange[0],max:r.maxHeight??E.DEFAULTS.heightRange[1]},baseHeight:r.baseHeight??E.DEFAULTS.baseHeight,fluidParams:r.fluidParams||E.DEFAULTS.fluidParams.clone(),customParams:r.customParams||E.DEFAULTS.customParams.clone(),waterColor:r.waterColor||E.DEFAULTS.waterColor.clone(),lonLat:r.lonLat||[...E.DEFAULTS.lonLat],timeStep:r.timeStep||E.DEFAULTS.timeStep,heightMapSource:r.heightMapSource||E.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(r){const c=Number(r);!Number.isFinite(c)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,c)),this.resetSimulation())}resetSimulation(){var r,c;this._frameCount=0,(c=(r=this.viewer.scene).requestRender)==null||c.call(r)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const r=()=>C.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:r(),B:r(),C:r(),D:r()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(r){if(!(r!=null&&r.arrayBufferView)||!r.width||!r.height)throw new Error("Invalid height map source.");return C.createTexture({context:this.viewer.scene.context,width:r.width,height:r.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:r.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var L,R;const r=this.viewer.scene.context,c=C.createDepthFramebuffer(r,this.config.resolution.x,this.config.resolution.y),f=this.viewer.scene,d=f.frameState,x=n(this.viewer.scene),p=f.camera,s=d.camera,m=x.framebuffer,F=e.BoundingRectangle.clone(x.viewport,new e.BoundingRectangle);let z=null,h=[];try{x.viewport.x=0,x.viewport.y=0,x.viewport.width=this.config.resolution.x,x.viewport.height=this.config.resolution.y,x.framebuffer=c,f.camera=this.heightMapCamera,d.camera=this.heightMapCamera,d.context.uniformState.updateCamera(this.heightMapCamera),h=this._processHeightMapShaders(),this._renderDepthPrepass(x);const _=C.createTexture({context:r,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return z=C.createFramebuffer(r,_),this._copyTexture(c.getColorTexture(0),z),_}finally{this._restoreHeightMapShaders(h),x.framebuffer=m,e.BoundingRectangle.clone(F,x.viewport),f.camera=p,d.camera=s,s&&d.context.uniformState.updateCamera(s),z&&!((L=z.isDestroyed)!=null&&L.call(z))&&z.destroy(),c&&!((R=c.isDestroyed)!=null&&R.call(c))&&c.destroy()}}_renderDepthPrepass(r){const c=this.viewer.scene.frameState;c.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(d=>d.execute(this.viewer.scene.context,r))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const r={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...r,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:a}),this._createComputePass("B",{uniforms:{...r,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:o}),this._createComputePass("C",{uniforms:{...r,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:y}),this._createComputePass("D",{uniforms:{...r,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:v})]}_createComputePass(r,{uniforms:c,shaderSource:f}){return new M({commandType:"Compute",uniformMap:c,fragmentShaderSource:new e.ShaderSource({sources:[l,f]}),geometry:C.getFullscreenQuad(),outputTexture:this.textures[r],preExecute:d=>d.commandToExecute.outputTexture=this.textures[r]})}_createMainRenderPass(){const r=w([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new M({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[l,S]}),geometry:this._createBoxGeometry(),modelMatrix:r,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var r,c,f,d;return(d=(f=(c=(r=t(this.viewer.scene))==null?void 0:r.globeDepth)==null?void 0:c.colorFramebufferManager)==null?void 0:f._colorTextures)==null?void 0:d[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(r=>this.viewer.scene.primitives.add(r)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(r){const c=this.viewer.camera.getPickRay(r);return this.viewer.scene.globe.pick(c,this.viewer.scene)}_createOrthographicCamera(){const r=new e.Camera(this.viewer.scene);r.frustum=new e.OrthographicOffCenterFrustum;const[c,f]=this.config.lonLat,d=e.Cartesian3.fromDegrees(c,f,this.config.baseHeight),x=e.Transforms.eastNorthUpToFixedFrame(d),p=r.frustum;p.near=.01,p.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),p.left=-this.config.dimensions.x/2,p.right=this.config.dimensions.x/2,p.bottom=-this.config.dimensions.y/2,p.top=this.config.dimensions.y/2;const s=e.Matrix4.getColumn(x,2,new e.Cartesian3);e.Cartesian3.negate(s,s);const m=e.Matrix4.getColumn(x,1,new e.Cartesian3),F=e.Matrix4.getColumn(x,0,new e.Cartesian3),z=e.Cartesian3.multiplyByScalar(s,-p.far,new e.Cartesian3);return r.position=e.Cartesian3.add(d,z,new e.Cartesian3),r.direction=s,r.up=m,r.right=F,r}destroy(){var r,c;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(f=>{f&&this.viewer.scene.primitives.remove(f)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(f=>{var d;f&&!((d=f.isDestroyed)!=null&&d.call(f))&&f.destroy()}),this.textures={},this._heightMap&&!((c=(r=this._heightMap).isDestroyed)!=null&&c.call(r))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(r,c){const f=this.viewer.scene.context,d=n(this.viewer.scene),x=f.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>r},owner:this}),p=d.framebuffer;d.framebuffer=c,x.execute(f,d),d.framebuffer=p}_getDepthRenderCommands(){var f,d;const r=[],c=i(this.viewer.scene);for(let x=0;x<c.length;++x){const p=c[x],s=(f=p==null?void 0:p.commands)==null?void 0:f[2],m=((d=p==null?void 0:p.indices)==null?void 0:d[2])??(s==null?void 0:s.length)??0;s&&m>0&&r.push(...s.slice(0,m))}return r}_processHeightMapShaders(){const r=[],c=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),f=e.Matrix4.inverse(c,new e.Matrix4),d=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(p=>{var h;if(!((h=p==null?void 0:p.shaderProgram)!=null&&h.fragmentShaderSource)||!p.uniformMap)return;const s=Object.prototype.hasOwnProperty.call(p.uniformMap,"u_inverseEnuMatrix"),m=p.uniformMap.u_inverseEnuMatrix,F=p.shaderProgram,z=new e.Matrix4;p.uniformMap.u_inverseEnuMatrix=()=>{const L=p.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(f,L,z)},p.heightMap_ShaderProgram||(p.heightMap_ShaderProgram=this._getDerivedShaderProgram(d.context,p.shaderProgram,"Height_Map")),p.shaderProgram=p.heightMap_ShaderProgram,r.push({command:p,hadInverseUniform:s,originalInverseUniform:m,originalShaderProgram:F})}),r}_restoreHeightMapShaders(r){r.forEach(c=>{const{command:f,hadInverseUniform:d,originalInverseUniform:x,originalShaderProgram:p}=c;f!=null&&f.uniformMap&&(f.shaderProgram=p,d?f.uniformMap.u_inverseEnuMatrix=x:delete f.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(r,c,f){let d=r.shaderCache.getDerivedShaderProgram(c,f);return e.defined(d)||(d=this._createHeightMapShaderProgram(r,c,f)),d}_createHeightMapShaderProgram(r,c,f){const d=this._modifyFragmentShader(c.fragmentShaderSource);return r.shaderCache.createDerivedShaderProgram(c,f,{vertexShaderSource:c.vertexShaderSource,fragmentShaderSource:d,attributeLocations:c._attributeLocations})}_modifyFragmentShader(r){const c=r.sources.map(f=>e.ShaderSource.replaceMain(f,"czm_heightMap_main"));return c.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:c,defines:r.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};at(E,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let u=E;const w=(P=[0,0,0],r=[0,0,0],c=[1,1,1])=>{const f=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(r[0]))),d=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(r[1]))),x=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(r[2])));P instanceof e.Cartesian3||(P=e.Cartesian3.fromDegrees(...P));const p=e.Transforms.eastNorthUpToFixedFrame(P);e.Matrix4.multiply(p,f,p),e.Matrix4.multiply(p,d,p),e.Matrix4.multiply(p,x,p);const s=e.Matrix4.fromScale(new e.Cartesian3(...c));return e.Matrix4.multiply(p,s,new e.Matrix4)},D=`
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
    `;function T(){return new e.PostProcessStage({fragmentShader:D})}return{FluidRenderer:u,createSkyEffect:T}}const Lo={key:0,class:"fluid-root"},Fo={class:"fluid-panel"},Po={class:"panel-actions"},Ao=["disabled"],Co={key:0,class:"selected-text"},Hn=1024,Ht=1e4,Bn=1200,Eo=100,Ro=.01,Io=.03,ko=60,nn=64,zo=160,No={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const i=e,l=n,a=mn(),o=Q(10),y=Q(20),v=Q(3),S=Q("#0d4fa3"),M=Q(null),C=Q(null),u=Q(null),w=Q(!1),D=Q(!1),T=Q(null),E=Q(null),P=Q(!1),r=Q(5);let c=null,f=null,d=null,x=null,p=null,s=null,m=null,F=null,z=0;const h=Re(()=>!Number.isFinite(T.value)||!Number.isFinite(E.value)?"":`经度 ${T.value.toFixed(6)} / 纬度 ${E.value.toFixed(6)}`),L=Re(()=>Number.isFinite(C.value)&&Number.isFinite(u.value)),R=Re(()=>{if(!L.value)return 1;const A=Math.abs(u.value-C.value);return Math.max(A/1e3,.01)}),_=Re(()=>[{id:"threshold",label:"Threshold",type:"range",min:0,max:500,step:1e-4,value:o.value,displayValue:Number(o.value).toFixed(2)},{id:"blend",label:"Blend",type:"range",min:0,max:50,step:1e-4,value:y.value,displayValue:Number(y.value).toFixed(2)},{id:"lightStrength",label:"Light",type:"range",min:0,max:10,step:1e-4,value:v.value,displayValue:Number(v.value).toFixed(2)},{id:"waterLevel",label:"Water Level",type:"range",min:L.value?C.value:0,max:L.value?u.value:1,step:R.value,value:Number.isFinite(Number(M.value))?Number(M.value):0,displayValue:L.value&&Number.isFinite(Number(M.value))?`${Number(M.value).toFixed(2)} m`:"Pick terrain first",disabled:!L.value},{id:"waterColor",label:"Water Color",type:"color",value:S.value}]);Ce([o,y,v,S],H),Ce(M,ne),Ce(()=>i.params,A=>{B(A||{})},{deep:!0,immediate:!0}),Ce([w,D,h,M,C,u,P,r],X,{immediate:!0}),ci(()=>{re(),Ue(!0)});function I(){var Y,oe;const A=(Y=i.getViewer)==null?void 0:Y.call(i),N=((oe=i.getCesium)==null?void 0:oe.call(i))||window.Cesium;if(!A||!N)return a.warning("Cesium 场景尚未就绪。"),null;if(!d){const ue=Do(N);d=ue.FluidRenderer,x=ue.createSkyEffect}return{viewer:A,Cesium:N}}function B(A){Number.isFinite(Number(A.threshold))&&(o.value=Number(A.threshold)),Number.isFinite(Number(A.blend))&&(y.value=Number(A.blend)),Number.isFinite(Number(A.lightStrength))&&(v.value=Number(A.lightStrength)),je(A.waterColor)&&(S.value=A.waterColor),Number.isFinite(Number(A.waterLevel))&&(M.value=Number(A.waterLevel))}function $({controlId:A,value:N}){A==="threshold"?o.value=Number(N):A==="blend"?y.value=Number(N):A==="lightStrength"?v.value=Number(N):A==="waterLevel"?M.value=Number(N):A==="waterColor"&&je(N)&&(S.value=N)}function X(){l("state-change",{isPicking:w.value,hasFluid:D.value,selectedText:h.value,waterLevel:M.value,waterLevelMin:C.value,waterLevelMax:u.value,floodSimActive:P.value,floodSpeed:r.value})}function le(){const A=I();if(!A)return;const{viewer:N,Cesium:Y}=A;Se(),ee(N,Y),w.value=!0,p=new Y.ScreenSpaceEventHandler(N.scene.canvas),p.setInputAction(oe=>{J(N,Y,oe.position)},Y.ScreenSpaceEventType.LEFT_CLICK)}async function J(A,N,Y){var Le,ke;const oe=W(A,Y);if(!oe){a.warning("未选中可用地形位置。");return}const ue=++z;Se();const xe=N.Cartographic.fromCartesian(oe),g=N.Math.toDegrees(xe.longitude),k=N.Math.toDegrees(xe.latitude),K=Number(xe.height),Z=Number.isFinite(K)?K:0,ge=new N.Cartesian3(Ht,Ht,0);di("正在请求模拟范围高度数据...");try{He();const ze=Number(o.value)||0,$e=Number(y.value)||0,Ke=Number(v.value)||0,q=await fe(A,N,{lon:g,lat:k,centerHeight:Z,dimensions:ge}),V=Ie(q,Z),de=V.baseHeight,ye=V.depth,We=Oe(V,Z),dt=new N.Cartesian3(Ht,Ht,ye);if(ue!==z)return;C.value=V.minHeight,u.value=V.maxHeight,M.value=We;const nt=Math.abs(V.maxHeight-V.minHeight);nt>0&&(r.value=Math.max(nt/10,.1)),q||a.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),s=new d(A,{lonLat:[g,k],width:Hn,height:Hn,dimensions:dt,baseHeight:de,minHeight:V.minHeight,maxHeight:V.maxHeight,heightMapSource:q,waterColor:Be(N,S.value),customParams:new N.Cartesian4(ze,$e,Ke,10),fluidParams:new N.Cartesian4(.9+Ke/10*.099,Math.min(1,$e/50),ze/5e4,Ge(We,V))}),T.value=g,E.value=k,D.value=!0,(ke=(Le=A.scene).requestRender)==null||ke.call(Le),a.success("水体流体已创建。")}catch(ze){a.error("水体流体创建失败",ze),a.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{hi()}}async function fe(A,N,Y){const oe=A==null?void 0:A.terrainProvider,ue=ce(Y.dimensions);if(!oe)return null;if(N.EllipsoidTerrainProvider&&oe instanceof N.EllipsoidTerrainProvider)return Te(ue);if(typeof N.sampleTerrain!="function"&&typeof N.sampleTerrainMostDetailed!="function")return null;try{return await be(A,N,Y,ue)}catch(xe){if(ue<=nn)throw xe;return be(A,N,Y,nn)}}async function be(A,N,Y,oe){const ue=G(N,Y,oe),xe=await U(N,A.terrainProvider,ue);return Ae(xe||ue,{size:oe})}function ce(A){const N=Math.max(Number(A==null?void 0:A.x)||0,Number(A==null?void 0:A.y)||0),Y=Math.ceil(N/ko)+1;return O(Y,nn,zo)}function O(A,N,Y){return Math.max(N,Math.min(Y,Math.round(A)))}function G(A,{lon:N,lat:Y,centerHeight:oe,dimensions:ue},xe){const g=A.Cartesian3.fromDegrees(N,Y,oe),k=A.Transforms.eastNorthUpToFixedFrame(g),K=[],Z=Math.max(1,xe-1);for(let ge=0;ge<xe;ge++){const ke=(.5-ge/Z)*ue.y;for(let ze=0;ze<xe;ze++){const Ke=(ze/Z-.5)*ue.x,q=new A.Cartesian3(Ke,ke,0),V=A.Matrix4.multiplyByPoint(k,q,new A.Cartesian3);K.push(A.Cartographic.fromCartesian(V))}}return K}async function U(A,N,Y){const oe=he(N),ue=Number.isInteger(oe)?oe:Math.min((N==null?void 0:N.maximumLevel)??12,12);return typeof A.sampleTerrain=="function"?A.sampleTerrain(N,ue,Y):A.sampleTerrainMostDetailed(N,Y)}function he(A){const N=Number(A==null?void 0:A._bottomLevel);return Number.isFinite(N)?Math.max(0,N-1):null}function Ae(A,{size:N}){var ue;const Y=Fe(A);if(!Y)return null;const oe=new Float32Array(N*N*4);for(let xe=0;xe<N*N;xe++){const g=Number((ue=A[xe])==null?void 0:ue.height),k=xe*4;oe[k]=Number.isFinite(g)?Ne(g,Y.minHeight,Y.maxHeight):Y.minHeight,oe[k+1]=0,oe[k+2]=0,oe[k+3]=1}return{width:N,height:N,arrayBufferView:oe,minHeight:Y.minHeight,maxHeight:Y.maxHeight}}function Te(A){return{width:A,height:A,arrayBufferView:new Float32Array(A*A*4),minHeight:0,maxHeight:0}}function Fe(A){let N=Number.POSITIVE_INFINITY,Y=Number.NEGATIVE_INFINITY;for(const oe of A||[]){const ue=Number(oe==null?void 0:oe.height);Number.isFinite(ue)&&(N=Math.min(N,ue),Y=Math.max(Y,ue))}return!Number.isFinite(N)||!Number.isFinite(Y)?null:{minHeight:N,maxHeight:Y}}function Ie(A,N){const Y=Number(A==null?void 0:A.minHeight),oe=Number(A==null?void 0:A.maxHeight);if(Number.isFinite(Y)&&Number.isFinite(oe)){const g=Number(N),k=Number.isFinite(g)?Math.min(Y,oe,g):Math.min(Y,oe),K=Number.isFinite(g)?Math.max(Y,oe,g):Math.max(Y,oe),Z=Math.max(K-k,Ro);return{baseHeight:k,depth:Z,minHeight:k,maxHeight:k+Z}}const ue=Number(N),xe=Number.isFinite(ue)?ue-Eo:0;return{baseHeight:xe,depth:Bn,minHeight:xe,maxHeight:xe+Bn}}function Oe(A,N){const Y=A.minHeight+A.depth*Io,oe=Number(N),ue=Number.isFinite(oe)?oe:Y;return Ne(ue,A.minHeight,A.maxHeight)}function Ge(A,N){const Y=N.maxHeight-N.minHeight;return!Number.isFinite(Y)||Y<=0?0:Ne((A-N.minHeight)/Y,0,1)}function pe(){return!Number.isFinite(C.value)||!Number.isFinite(u.value)?null:{minHeight:Math.min(C.value,u.value),maxHeight:Math.max(C.value,u.value)}}function Be(A,N){const Y=qe(N)||qe("#0d4fa3");return new A.Cartesian3(Y.red,Y.green,Y.blue)}function Ye(){var Y;const A=qe(S.value),N=(Y=s==null?void 0:s.config)==null?void 0:Y.waterColor;!A||!N||(N.x=A.red,N.y=A.green,N.z=A.blue)}function je(A){return typeof A=="string"&&/^#[0-9a-f]{6}$/i.test(A)}function qe(A){return je(A)?{red:Number.parseInt(A.slice(1,3),16)/255,green:Number.parseInt(A.slice(3,5),16)/255,blue:Number.parseInt(A.slice(5,7),16)/255}:null}function Ne(A,N,Y){return Math.max(N,Math.min(Y,A))}function W(A,N){if(!N)return null;if(A.scene.pickPositionSupported&&typeof A.scene.pickPosition=="function"){const oe=A.scene.pickPosition(N);if(oe)return oe}const Y=A.camera.getPickRay(N);return Y?A.scene.globe.pick(Y,A.scene):null}function H(){var oe,ue,xe;if(!(s!=null&&s.config))return;const A=Number(o.value)||0,N=Number(y.value)||0,Y=Number(v.value)||0;s.config.customParams&&(s.config.customParams.x=A,s.config.customParams.y=N,s.config.customParams.z=Y),s.config.fluidParams&&(s.config.fluidParams.x=.9+Y/10*.099,s.config.fluidParams.y=Math.min(1,N/50),s.config.fluidParams.z=A/5e4),Ye(),(xe=(ue=(oe=s.viewer)==null?void 0:oe.scene)==null?void 0:ue.requestRender)==null||xe.call(ue)}function ne(){var ue,xe,g,k;if(!((ue=s==null?void 0:s.config)!=null&&ue.fluidParams))return;const A=pe(),N=Number(M.value);if(!A||!Number.isFinite(N))return;const Y=Ne(N,A.minHeight,A.maxHeight);if(Y!==N){M.value=Y;return}const oe=Ge(Y,A);typeof s.setInitialWaterLevel=="function"?s.setInitialWaterLevel(oe):(s.config.fluidParams.w=oe,(k=(g=(xe=s.viewer)==null?void 0:xe.scene)==null?void 0:g.requestRender)==null||k.call(g))}function ee(A,N){var Y,oe;if(!F){const ue=A.scene;F={shadows:A.shadows,resolutionScale:A.resolutionScale,msaaSamples:ue.msaaSamples,depthTestAgainstTerrain:ue.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:ue.logarithmicDepthBuffer,highDynamicRange:ue.highDynamicRange,fogEnabled:(Y=ue.fog)==null?void 0:Y.enabled,showGroundAtmosphere:ue.globe.showGroundAtmosphere,skyAtmosphereShow:(oe=ue.skyAtmosphere)==null?void 0:oe.show,enableLighting:ue.globe.enableLighting}}A.shadows=!0,A.resolutionScale=1,A.scene.msaaSamples=4,A.scene.globe.depthTestAgainstTerrain=!0,A.scene.logarithmicDepthBuffer=!0,A.scene.highDynamicRange=!0,A.scene.fog&&(A.scene.fog.enabled=!0),A.scene.globe.showGroundAtmosphere=!0,A.scene.skyAtmosphere&&(A.scene.skyAtmosphere.show=!0),A.scene.globe.enableLighting=!0,!m&&x&&(m=x(N),A.scene.postProcessStages.add(m))}function ae(A){if(!A||!F)return;const N=A.scene;A.shadows=F.shadows,A.resolutionScale=F.resolutionScale,F.msaaSamples!==void 0&&(N.msaaSamples=F.msaaSamples),N.globe.depthTestAgainstTerrain=F.depthTestAgainstTerrain,N.logarithmicDepthBuffer=F.logarithmicDepthBuffer,N.highDynamicRange=F.highDynamicRange,N.fog&&F.fogEnabled!==void 0&&(N.fog.enabled=F.fogEnabled),N.globe.showGroundAtmosphere=F.showGroundAtmosphere,N.skyAtmosphere&&F.skyAtmosphereShow!==void 0&&(N.skyAtmosphere.show=F.skyAtmosphereShow),N.globe.enableLighting=F.enableLighting,F=null}function j(){P.value?re():te()}function te(){const A=pe();if(!A)return;const N=Number(M.value);(!Number.isFinite(N)||N>=A.maxHeight-.01)&&(M.value=A.minHeight),P.value=!0,f=null;function Y(oe){if(!P.value)return;f===null&&(f=oe);const ue=Math.min((oe-f)/1e3,.1);f=oe;const xe=pe();if(!xe){re();return}const k=Number(M.value)+r.value*ue;if(k>=xe.maxHeight){M.value=xe.maxHeight,re(),a.info("洪水模拟完成：水位已达最大值");return}M.value=k,c=requestAnimationFrame(Y)}c=requestAnimationFrame(Y),a.info("洪水模拟开始")}function re(){P.value=!1,f=null,c!==null&&(cancelAnimationFrame(c),c=null)}function se(){re(),Ue(!1),a.success("水体流体已清除。")}function Se(){p&&(p.destroy(),p=null),w.value=!1}function He(){if(s){try{s.destroy()}catch{}s=null,D.value=!1}}function Ue(A){var Y,oe,ue;const N=(Y=i.getViewer)==null?void 0:Y.call(i);if(z+=1,re(),Se(),He(),T.value=null,E.value=null,M.value=null,C.value=null,u.value=null,N&&m){try{N.scene.postProcessStages.remove(m)}catch{}m=null}A&&N&&ae(N),(ue=(oe=N==null?void 0:N.scene)==null?void 0:oe.requestRender)==null||ue.call(oe)}function Pe(){Ue(!0),l("close")}function et(A){const N=Number(A);Number.isFinite(N)&&N>0&&(r.value=N)}return t({startPickHeightMap:le,clearFluid:se,toggleFloodSimulation:j,stopFloodSimulation:re,setFloodSpeed:et}),(A,N)=>e.headless?_e("",!0):(ie(),me("div",Lo,[b("div",Fo,[b("div",{class:"panel-head"},[N[0]||(N[0]=b("span",{class:"panel-title"},"水体流体",-1)),b("button",{class:"panel-close",title:"关闭",onClick:Pe}," × ")]),b("div",Po,[b("button",{class:Xe(["action-btn primary",{active:w.value}]),onClick:le},we(w.value?"等待选点":"捕捉高度图"),3),b("button",{class:"action-btn",disabled:!D.value&&!w.value,onClick:se}," 清除 ",8,Ao)]),h.value?(ie(),me("div",Co,we(h.value),1)):_e("",!0),Ee(yn,{class:"param-list",title:"Fluid Parameters",controls:_.value,onChange:$},null,8,["controls"])])]))}},Oo=rt(No,[["__scopeId","data-v-2de8b792"]]),Ho=`
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
`;function Un(e,t){e.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uCaustic=t.uCaustic,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vCWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+Ho).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  float cDepth = smoothstep( 0.0, -2.0, vCWorld.y );
  float caus = causticX( vCWorld.xz * 0.06 );
  caus += causticX( vCWorld.xz * 0.13 + 40.0 ) * 0.6;
  totalEmissiveRadiance += vec3( 0.45, 0.85, 0.8 ) * caus * cDepth * uCaustic;`)}}const Bo=`
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
`,Uo=`
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
`,Wo=`
  varying vec3 vWorldPos;

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Go=`
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
`;function $o(e=256){const t=new Float32Array(e*e);for(let u=0;u<e*e;u++)t[u]=Math.random();const n=(u,w)=>{const D=new Float32Array(e*e);for(let T=0;T<e;T++)for(let E=0;E<e;E++){let P=0,r=0;for(let c=-w;c<=w;c++)for(let f=-w;f<=w;f++)P+=u[(T+c+e)%e*e+(E+f+e)%e],r++;D[T*e+E]=P/r}return D},i=n(t,4),l=n(t,1),a=new Float32Array(e*e);for(let u=0;u<e*e;u++)a[u]=i[u]*.7+l[u]*.3;const o=document.createElement("canvas");o.width=o.height=e;const y=o.getContext("2d"),v=y.createImageData(e,e),S=(u,w)=>a[(w+e)%e*e+(u+e)%e],M=3;for(let u=0;u<e;u++)for(let w=0;w<e;w++){const D=(S(w-1,u)-S(w+1,u))*M,T=(S(w,u-1)-S(w,u+1))*M,E=Math.hypot(D,T,1),P=(u*e+w)*4;v.data[P]=(D/E*.5+.5)*255,v.data[P+1]=(T/E*.5+.5)*255,v.data[P+2]=(1/E*.5+.5)*255,v.data[P+3]=255}y.putImageData(v,0,0);const C=new pn(o);return C.wrapS=C.wrapT=vn,C.colorSpace=pi,C}function jo(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#d8c79b",t.fillRect(0,0,512,512);for(let i=0;i<12e3;i++){const l=170+Math.random()*70|0;t.fillStyle=`rgba(${l},${l-22},${l-65},0.22)`,t.fillRect(Math.random()*512,Math.random()*512,1.6,1.6)}for(let i=0;i<26;i++){const l=60+Math.random()*40|0,a=90+Math.random()*50|0,o=70+Math.random()*40|0;t.fillStyle=`rgba(${l},${a},${o},0.30)`,t.beginPath(),t.ellipse(Math.random()*512,Math.random()*512,8+Math.random()*26,6+Math.random()*20,Math.random()*6,0,7),t.fill()}const n=new pn(e);return n.wrapS=n.wrapT=vn,n.repeat.set(10,10),n.colorSpace=Gi,n}function qo(e=256){const t=(S,M)=>{const C=new Float32Array(e*e);for(let u=0;u<e;u++)for(let w=0;w<e;w++){let D=0,T=0;for(let E=-M;E<=M;E++)for(let P=-M;P<=M;P++)D+=S[(u+E+e)%e*e+(w+P+e)%e],T++;C[u*e+w]=D/T}return C},n=()=>{const S=new Float32Array(e*e);for(let T=0;T<e*e;T++)S[T]=Math.random();const M=t(S,3),C=t(S,1),u=new Float32Array(e*e);let w=1e9,D=-1e9;for(let T=0;T<e*e;T++)u[T]=M[T]*.65+C[T]*.35,w=Math.min(w,u[T]),D=Math.max(D,u[T]);for(let T=0;T<e*e;T++)u[T]=(u[T]-w)/(D-w);return u},i=n(),l=n(),a=document.createElement("canvas");a.width=a.height=e;const o=a.getContext("2d"),y=o.createImageData(e,e);for(let S=0;S<e*e;S++){const M=S*4;y.data[M]=i[S]*255,y.data[M+1]=l[S]*255,y.data[M+2]=0,y.data[M+3]=255}o.putImageData(y,0,0);const v=new pn(a);return v.wrapS=v.wrapT=vn,v.colorSpace=pi,v.minFilter=Cn,v.magFilter=Cn,v.generateMipmaps=!1,v}function Vo(e={}){const{onReady:t,onError:n,onFpsUpdate:i}=e,l=Q(!1),a=Q(0);let o=null,y=null,v=null,S=null,M=null,C=null,u=null,w=null,D=null,T=null,E=null,P=null,r=null;const c=new ot;let f=null,d=null,x=null;const p=new $i;let s=0,m=0;const F={value:0},z={value:.9},h={value:0},L={value:new ot};let R=3,_=-100;const I=.62,B={};let $=!0,X=null;const le=new En,J={elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2};async function fe(j){if(!j){n==null||n(new Error("Container element not provided"));return}if(!l.value){C=j;try{v=new ji({antialias:!0,alpha:!0}),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setSize(C.clientWidth,C.clientHeight),v.toneMapping=qi,v.toneMappingExposure=I,v.setClearColor(0,0),C.appendChild(v.domElement),o=new En,y=new Vi(55,C.clientWidth/C.clientHeight,1,2e4),y.position.set(0,55,280),be(),Ae(),Te(),ce(),O(),G(),U(),he(),Ge(),pe(),qe(),l.value=!0,t==null||t()}catch(te){n==null||n(te)}}}function be(){P=new Xi,P.scale.setScalar(12e3),o.add(P);const j=P.material.uniforms;j.turbidity.value=6,j.rayleigh.value=1.6,j.mieCoefficient.value=.005,j.mieDirectionalG.value=.8}function ce(){r=new ea(16774368,2.6),o.add(r),o.add(new ta(13627391,2117738,.7))}function O(){const j=new In(1600,1600,200,200);j.rotateX(-Math.PI/2);const te=j.attributes.position;for(let se=0;se<te.count;se++){const Se=te.getX(se),He=te.getZ(se);let Pe=-34+Nt.clamp((He+800)/1600,0,1)*44;Pe+=Math.sin(Se*.012)*Math.cos(He*.014)*3.5,Pe+=Math.sin(Se*.06+He*.05)*1.1,Pe+=(Math.random()-.5)*.6,te.setY(se,Pe)}j.computeVertexNormals();const re=new kn({map:jo(),roughness:1,metalness:0});Un(re,{uTime:F,uCaustic:z}),o.add(new Dt(j,re))}function G(){const j=new na(1,0),te=[8023642,7035722,11887946,13598051,9083483];for(let re=0;re<30;re++){const se=new kn({color:te[re%te.length],roughness:.9,flatShading:!0});Un(se,{uTime:F,uCaustic:z});const Se=new Dt(j,se),He=3+Math.random()*9;Se.scale.set(He,He*(.5+Math.random()*.6),He),Se.position.set((Math.random()-.5)*1100,-24+Math.random()*22,-300+Math.random()*900),Se.rotation.set(Math.random(),Math.random(),Math.random()),o.add(Se)}}function U(){E=new ia(v),T=new aa(256,{generateMipmaps:!0,minFilter:ra}),D=new oa(1,2e4,T),D.position.set(0,4,0),o.add(D);const j=new tn;v.getDrawingBufferSize(j),w=new sa(j.x,j.y),w.depthTexture=new la(j.x,j.y),w.depthTexture.type=ca,w.depthTexture.format=ua}function he(){const j=new tn;v.getDrawingBufferSize(j);const te=$o(256),re={uTime:F,tRefraction:{value:w.texture},tDepth:{value:w.depthTexture},tEnv:{value:T.texture},normalMap:{value:te},resolution:{value:j.clone()},cameraNear:{value:y.near},cameraFar:{value:y.far},invProjection:{value:new zn},camWorld:{value:new zn},sunDirection:{value:new ot},sunColor:{value:new Mt(16774106)},waterColor:{value:new Mt(J.waterColor)},absorption:{value:new ot(.45,.09,.05)},foamColor:{value:new Mt(15925247)},clarity:{value:J.clarity},foamWidth:{value:J.foamWidth},waveHeight:{value:J.waveHeight},reflection:{value:J.reflection}};u=new Dt(new In(16e3,16e3,384,384),new Rn({uniforms:re,vertexShader:Bo,fragmentShader:Uo})),u.rotation.x=-Math.PI/2,o.add(u)}function Ae(){const j=new Rn({side:Yi,transparent:!0,depthWrite:!1,uniforms:{uTime:F,uNoise:{value:qo(256)},sunDirection:{value:new ot},sunColor:{value:new Mt(16773341)},skyTint:{value:new Mt(7315406)},uCoverage:{value:J.cloudCoverage},uFlash:h,uFlashPos:L},vertexShader:Wo,fragmentShader:Go});f=new Dt(new Ki(8e3,32,16),j),f.renderOrder=2,o.add(f)}function Te(){x=new Zi({color:14478335,transparent:!0,opacity:0,blending:Ji,depthWrite:!1,depthTest:!1}),d=new Qi,d.visible=!1,o.add(d)}function Fe(j,te,re,se,Se,He){const Ue=[];let Pe=j,et=te;const A=Math.max(5,Math.floor((re-se)/80));for(let oe=0;oe<=A;oe++){const ue=oe/A;Ue.push(new ot(Pe,re+(se-re)*ue,et)),Pe+=(Math.random()-.5)*Se,et+=(Math.random()-.5)*Se}const N=new ha(new fa(Ue),A*4,He,5,!1),Y=new Dt(N,x);return Y.renderOrder=3,d.add(Y),Ue}function Ie(){for(const se of d.children)se.geometry.dispose();d.clear();const j=1+Math.floor(Math.random()*3);let te=0,re=0;for(let se=0;se<j;se++){const Se=(Math.random()-.5)*5e3,He=-(1e3+Math.random()*4500);se===0&&(te=Se,re=He);const Ue=Fe(Se,He,1180,18,110,14),Pe=2+Math.floor(Math.random()*3);for(let et=0;et<Pe;et++){const A=Ue[2+Math.floor(Math.random()*(Ue.length-4))];Fe(A.x,A.z,A.y,A.y-(160+Math.random()*420),130,7)}}L.value.set(te,1100,re)}function Oe(){if(!J.lightningEnabled){h.value=0,d.visible=!1,v.toneMappingExposure=I;return}const j=F.value;j>=R&&(_=j,Ie(),R=j+J.lightningInterval*(.4+Math.random()*.8));const te=j-_;let re=0;te>=0&&te<.5&&(re=Math.max(0,Math.exp(-te*5.5)*(.5+.5*Math.sin(te*60)))),h.value=re*2.4,d.visible=re>.1,x.opacity=Math.min(1,re*1.7),v.toneMappingExposure=I+re*.75}function Ge(){S=new da(y,v.domElement),S.target.set(0,130,-400),S.maxPolarAngle=Math.PI*.49,S.minDistance=30,S.maxDistance=2e3,S.enableDamping=!0}function pe(){window.addEventListener("keydown",Be),window.addEventListener("keyup",Ye)}function Be(j){const te=j.target&&j.target.tagName;te==="INPUT"||te==="TEXTAREA"||(B[j.code]=!0)}function Ye(j){B[j.code]=!1}function je(j){const te=(B.ShiftLeft||B.ShiftRight?240:95)*j,re=new ot,se=new ot,Se=new ot;y.getWorldDirection(re).normalize(),se.crossVectors(re,y.up).normalize(),Se.set(0,0,0),B.KeyW&&Se.add(re),B.KeyS&&Se.addScaledVector(re,-1),B.KeyD&&Se.add(se),B.KeyA&&Se.addScaledVector(se,-1),B.KeyE&&(Se.y+=1),B.KeyQ&&(Se.y-=1),Se.lengthSq()!==0&&(Se.normalize().multiplyScalar(te),y.position.add(Se),S.target.add(Se),y.position.y<2.5&&(y.position.y=2.5))}function qe(){const j=Nt.degToRad(90-J.elevation),te=Nt.degToRad(J.azimuth);if(c.setFromSphericalCoords(1,j,te),P.material.uniforms.sunPosition.value.copy(c),r.position.copy(c).multiplyScalar(1e3),u&&u.material.uniforms.sunDirection.value.copy(c).normalize(),f){f.material.uniforms.sunDirection.value.copy(c).normalize();const re=Nt.clamp(1-J.elevation/28,0,1);f.material.uniforms.sunColor.value.setRGB(1,.95-.22*re,.86-.48*re)}o.remove(P),le.add(P),X&&X.dispose(),X=E.fromScene(le),o.environment=X.texture,le.remove(P),o.add(P),$=!0}function Ne(){M=requestAnimationFrame(Ne);const j=p.getDelta();F.value+=j,z.value=J.causticStrength,je(j),Oe(),S.update(),y.updateMatrixWorld(),u.material.uniforms.invProjection.value.copy(y.projectionMatrixInverse),u.material.uniforms.camWorld.value.copy(y.matrixWorld),u.visible=!1,$&&(D.update(v,o),$=!1),f.visible=!1;const te=d.visible;d.visible=!1,v.setRenderTarget(w),v.render(o,y),v.setRenderTarget(null),f.visible=!0,d.visible=te,u.visible=!0,v.render(o,y),s++;const re=performance.now();re-m>=1e3&&(a.value=Math.round(s*1e3/(re-m)),i==null||i(a.value),s=0,m=re)}function W(){if(!y||!v||!C)return;const j=C.clientWidth,te=C.clientHeight;y.aspect=j/te,y.updateProjectionMatrix(),v.setSize(j,te);const re=new tn;v.getDrawingBufferSize(re),w.setSize(re.x,re.y),u.material.uniforms.resolution.value.copy(re)}function H(){M||(p.start(),Ne())}function ne(){M&&(cancelAnimationFrame(M),M=null)}function ee(j){const te={...J};Object.assign(J,j),(j.elevation!==te.elevation||j.azimuth!==te.azimuth)&&qe(),u&&(j.clarity!==te.clarity&&(u.material.uniforms.clarity.value=j.clarity),j.waveHeight!==te.waveHeight&&(u.material.uniforms.waveHeight.value=j.waveHeight),j.foamWidth!==te.foamWidth&&(u.material.uniforms.foamWidth.value=j.foamWidth),j.reflection!==te.reflection&&(u.material.uniforms.reflection.value=j.reflection),j.waterColor!==te.waterColor&&u.material.uniforms.waterColor.value.set(j.waterColor)),j.causticStrength!==te.causticStrength&&(z.value=j.causticStrength),j.cloudCoverage!==te.cloudCoverage&&f&&(f.material.uniforms.uCoverage.value=j.cloudCoverage)}function ae(){ne(),window.removeEventListener("keydown",Be),window.removeEventListener("keyup",Ye),v&&(v.dispose(),C==null||C.removeChild(v.domElement)),o==null||o.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&(Array.isArray(j.material)?j.material.forEach(te=>te.dispose()):j.material.dispose())}),w==null||w.dispose(),T==null||T.dispose(),X==null||X.dispose(),E==null||E.dispose(),o=null,y=null,v=null,S=null,u=null,P=null,r=null,f=null,d=null,x=null,l.value=!1}return jt(()=>{ae()}),{isReady:l,fps:a,init:fe,start:H,pause:ne,dispose:ae,handleResize:W,updateParams:ee}}const Xo={__name:"ShallowWaterOverlay",props:{visible:{type:Boolean,default:!1},elevation:{type:Number,default:30},azimuth:{type:Number,default:150},clarity:{type:Number,default:.085},causticStrength:{type:Number,default:.9},waterColor:{type:String,default:"#2bb3c4"},waveHeight:{type:Number,default:.5},foamWidth:{type:Number,default:2.4},reflection:{type:Number,default:.38},cloudCoverage:{type:Number,default:.58},lightningEnabled:{type:Boolean,default:!0},lightningInterval:{type:Number,default:2}},emits:["ready","error","fps-update"],setup(e,{expose:t,emit:n}){const i=e,l=n,a=Q(null),{isReady:o,fps:y,init:v,start:S,pause:M,dispose:C,handleResize:u,updateParams:w}=Vo({onReady:()=>l("ready"),onError:P=>l("error",P),onFpsUpdate:P=>l("fps-update",P)});Ce(()=>i.visible,async P=>{P?(await D(),S()):M()}),Ce(()=>[i.elevation,i.azimuth,i.clarity,i.causticStrength,i.waterColor,i.waveHeight,i.foamWidth,i.reflection,i.cloudCoverage,i.lightningEnabled,i.lightningInterval],()=>{T()});async function D(){!a.value||o.value||(await v(a.value),T())}function T(){w({elevation:i.elevation,azimuth:i.azimuth,clarity:i.clarity,causticStrength:i.causticStrength,waterColor:i.waterColor,waveHeight:i.waveHeight,foamWidth:i.foamWidth,reflection:i.reflection,cloudCoverage:i.cloudCoverage,lightningEnabled:i.lightningEnabled,lightningInterval:i.lightningInterval})}function E(){u()}return dn(()=>{window.addEventListener("resize",E),i.visible&&D()}),jt(()=>{window.removeEventListener("resize",E),C()}),t({isReady:o,fps:y,start:S,pause:M}),(P,r)=>tt((ie(),me("div",{ref_key:"canvasContainerRef",ref:a,class:"shallow-water-overlay"},null,512)),[[gt,e.visible]])}},Yo=rt(Xo,[["__scopeId","data-v-e9c0d469"]]),bn="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Ko=`${bn}Cesium.js`,Zo=`${bn}Widgets/widgets.css`;async function Jo({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=bn),await es(Zo,"cesium-widgets-style"),await Qo(Ko,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Gt(t,e),t}function Gt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function Qo(e,t){return new Promise((n,i)=>{const l=document.getElementById(t);if(l){if(l.getAttribute("data-loaded")==="true"){n();return}l.addEventListener("load",()=>n(),{once:!0}),l.addEventListener("error",()=>i(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const a=document.createElement("script");a.id=t,a.src=e,a.async=!0,a.onload=()=>{a.setAttribute("data-loaded","true"),n()},a.onerror=()=>i(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(a)})}function es(e,t){return new Promise((n,i)=>{if(document.getElementById(t)){n();return}const a=document.createElement("link");a.id=t,a.rel="stylesheet",a.href=e,a.onload=()=>n(),a.onerror=()=>i(new Error(`样式加载失败: ${e}`)),document.head.appendChild(a)})}const ts="Asia/Shanghai",ns="UTC+8",is=new Intl.DateTimeFormat("zh-CN",{timeZone:ts,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function as(e,t){var n,i,l,a,o,y,v;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...S)=>os(e,t,...S),e.animation.viewModel.timeFormatter=(...S)=>ss(e,t,...S)),e.timeline){const S=(...M)=>ls(e,t,...M);e.timeline.makeLabel=S,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=S),(l=(i=e.timeline).updateFromClock)==null||l.call(i),(o=(a=e.timeline).zoomTo)==null||o.call(a,e.clock.startTime,e.clock.stopTime)}(v=(y=e.scene).requestRender)==null||v.call(y)}}function xn(e,t,...n){var y;const i=n.find(rs)||((y=e==null?void 0:e.clock)==null?void 0:y.currentTime);if(!i)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const l=t.JulianDate.toDate(i),a=is.formatToParts(l),o=Object.fromEntries(a.filter(({type:v})=>v!=="literal").map(({type:v,value:S})=>[v,S]));return{year:o.year||"0000",month:o.month||"01",day:o.day||"01",hour:o.hour||"00",minute:o.minute||"00",second:o.second||"00"}}function rs(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function os(e,t,...n){const{year:i,month:l,day:a}=xn(e,t,...n);return`${i}-${l}-${a}`}function ss(e,t,...n){const{hour:i,minute:l,second:a}=xn(e,t,...n);return`${i}:${l}:${a} ${ns}`}function ls(e,t,...n){const{month:i,day:l,hour:a,minute:o}=xn(e,t,...n);return`${i}-${l} ${a}:${o}`}function cs({getViewer:e}){let t=null,n=null;function i(){var y;const o=e==null?void 0:e();if(o&&((y=o._cesiumWidget)!=null&&y._creditContainer&&(o._cesiumWidget._creditContainer.style.display="none"),l(),t=setInterval(()=>{const v=document.querySelector(".cesium-credit-container");v&&v.innerHTML.length>0&&(v.innerHTML="",v.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const v=document.createElement("style");v.id="cesium-credit-override",v.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(v),n=v}}function l(){var v;const o=e==null?void 0:e();if(!o)return;(v=o._cesiumWidget)!=null&&v._creditContainer&&(o._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",o._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(S=>{S.style.cssText="display: none !important; visibility: hidden !important;",S.innerHTML=""}),o.scene&&o.scene.frameState&&o.scene.frameState.creditDisplay&&(o.scene.frameState.creditDisplay.hasCredits=()=>!1,o.scene.frameState.creditDisplay.destroy=()=>{})}function a(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:i,cleanupCreditHider:a}}const an="经度: --, 纬度: --, 海拔: --米";function us({getViewer:e,getCesium:t,onCoordinatePick:n}){let i=null,l=null,a=null;const o=Q("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function y(){const w=e==null?void 0:e(),D=t==null?void 0:t();!w||!D||(u(),l=w.scene.canvas,i=new D.ScreenSpaceEventHandler(l),a=()=>{o.value=an},l.addEventListener("mouseleave",a),i.setInputAction(T=>{v(T.endPosition,w,D)},D.ScreenSpaceEventType.MOUSE_MOVE),i.setInputAction(T=>{const E=T.endPosition,P=T.startPosition;if(!D.defined(w.terrainProvider))return;const r=w.scene.globe.ellipsoid;if(!w.camera.pickEllipsoid(P,r)){const f=w.camera;f.rotate(D.Cartesian3.UNIT_X,-.002*(E.y-P.y)),f.rotate(D.Cartesian3.UNIT_Y,-.002*(E.x-P.x))}},D.ScreenSpaceEventType.RIGHT_DRAG),i.setInputAction(()=>{},D.ScreenSpaceEventType.RIGHT_DOWN),i.setInputAction(()=>{},D.ScreenSpaceEventType.RIGHT_UP))}function v(w,D,T){const E=S(w,D,T);if(!E){o.value=an;return}const P=T.Cartographic.fromCartesian(E);if(!P||!Number.isFinite(P.longitude)||!Number.isFinite(P.latitude)){o.value=an;return}const r=T.Math.toDegrees(P.longitude).toFixed(6),c=T.Math.toDegrees(P.latitude).toFixed(6),f=(Number.isFinite(P.height)?P.height:0).toFixed(2);o.value=`经度: ${r}, 纬度: ${c}, 海拔: ${f}米`,typeof n=="function"&&n({lng:Number(r),lat:Number(c),height:Number(f)})}function S(w,D,T){if(!w)return null;const E=D.scene,P=M(w,E,T);if(P)return P;const r=D.camera.getPickRay(w);if(r){const f=E.globe.pick(r,E);if(C(f))return f}const c=D.camera.pickEllipsoid(w,E.globe.ellipsoid);return C(c)?c:null}function M(w,D,T){if(!D.pickPositionSupported||typeof D.pickPosition!="function")return null;const E=typeof D.pick=="function"?D.pick(w):null;if(!T.defined(E))return null;const P=D.pickPosition(w);return C(P)?P:null}function C(w){return!!w&&Number.isFinite(w.x)&&Number.isFinite(w.y)&&Number.isFinite(w.z)}function u(){a&&l&&(l.removeEventListener("mouseleave",a),a=null),l=null,i&&(i.destroy(),i=null)}return{coordinateDisplay:o,setupInteractions:y,cleanupInteractions:u}}function Wn(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function ds(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function Tt(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function Ct(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Gn(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:i,Resource:l,HeightmapTerrainData:a,Rectangle:o,TileAvailability:y,CustomHeightmapTerrainProvider:v}=e;function S(w,D,T,E,P,r){const c=w.tileXYToRectangle(T,E,P);return t(o.intersection(c,D,r))}function M(w){const D=[[[0,0,1,0]]],T=new y(w.tilingScheme,19);for(let E=0;E<D.length;E++){const P=D[E];for(let r=0;r<P.length;r++){const c=P[r];T.addAvailableTileRange(E,c[0],c[1],c[2],c[3])}}return T}function C(w,D,T,E,P){const r=new a({buffer:w._transformBuffer(D),width:w._width,height:w._height,childTileMask:w._getChildTileMask(E,P,T),structure:w._terrainDataStructure});return r._skirtHeight=6e3,w.availability.addAvailableTileRange(T,E,P,E,P),r}class u extends v{constructor(D={}){if(super({...D,ellipsoid:i.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(D.url))throw new n("options.url is required.");this._dataType=D.dataType??"int16",this._url=D.url,this._subdomains=D.subdomains,this._token=D.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=M(this)}get availability(){return this._availability}requestTileGeometry(D,T,E,P){if(E>=this._bottomLevel)return Promise.reject(new Error(`Level ${E} is outside supported range.`));if(E<this._topLevel)return Promise.resolve(new a({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(D,T,E),structure:this._terrainDataStructure}));let r=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const f=this._subdomains[(D+T)%this._subdomains.length];r=r.replace("{s}",f)}r=r.replace("{token}",this._token).replace("{x}",D).replace("{y}",T).replace("{z}",E+1);const c=l.fetchArrayBuffer({url:r,request:P});if(c)return c.then(f=>f.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):ma.inflate(f)).then(f=>C(this,f,E,D,T))}getTileDataAvailable(D,T,E){return E<this._bottomLevel}_transformBuffer(D){let T=2;this._dataType==="float"&&(T=4);const E=D;if(E.length!==22500*T)return null;const P=new ArrayBuffer(T),r=new DataView(P),c=this._width,f=this._height,d=new Uint8Array(c*f*4);for(let x=0;x<f;x++)for(let p=0;p<c;p++){const s=Math.floor(149*x/(f-1)),m=Math.floor(149*p/(c-1)),F=T*(150*s+m);let z;T===4?(r.setInt8(0,E[F]),r.setInt8(1,E[F+1]),r.setInt8(2,E[F+2]),r.setInt8(3,E[F+3]),z=r.getFloat32(0,!0)):z=E[F]+256*E[F+1],(z>1e4||z<-2e3)&&(z=0);const h=(z+1e3)/.001,L=4*(x*c+p);d[L]=h/65536,d[L+1]=(h-256*d[L]*256)/256,d[L+2]=h-256*d[L]*256-256*d[L+1],d[L+3]=255}return d}_getVHeightBuffer(){let D=this._vHeightBuffer;if(!t(D)){D=new Uint8ClampedArray(this._width*this._height*4);for(let T=0;T<this._width*this._height*4;)D[T++]=15,D[T++]=66,D[T++]=64,D[T++]=255;this._vHeightBuffer=D}return D}_getChildTileMask(D,T,E){const P=new o,r=this._tilingScheme,c=this._rectangles,f=r.tileXYToRectangle(D,T,E);let d=0;for(let x=0;x<c.length&&d!==15;x++){const p=c[x];if(p.maxLevel<=E)continue;const s=p.rectangle,m=o.intersection(s,f,P);t(m)&&(S(r,s,2*D,2*T,E+1,P)&&(d|=4),S(r,s,2*D+1,2*T,E+1,P)&&(d|=8),S(r,s,2*D,2*T+1,E+1,P)&&(d|=1),S(r,s,2*D+1,2*T+1,E+1,P)&&(d|=2))}return d}}return u}function hs(e){if(!e)throw new Error("Cesium is required to create ArcGISTerrainProvider.");const{TileAvailability:t}=e;class n{constructor(a){this._inner=a,this._availability=null,this._initAvailability()}_initAvailability(){const a=this._inner.tilingScheme;if(!a)return;const o=this._inner.maximumLevel??15;this._availability=new t(a,o);for(let y=0;y<=o;y++){const v=1<<y;this._availability.addAvailableTileRange(y,0,0,v-1,v-1)}}get availability(){return this._availability||this._initAvailability(),this._availability}get tilingScheme(){return this._inner.tilingScheme}get maximumLevel(){return this._inner.maximumLevel}get requestWaterMask(){return this._inner.requestWaterMask}get requestVertexNormals(){return this._inner.requestVertexNormals}get ready(){return this._inner.ready}get readyPromise(){return this._inner.readyPromise}get errorEvent(){return this._inner.errorEvent}get credit(){return this._inner.credit}getTileDataAvailable(a,o,y){const v=this._inner.maximumLevel??15;return y<=v}requestTileGeometry(a,o,y,v){return this._inner.requestTileGeometry(a,o,y,v)}getLevelMaximumGeometricError(a){return this._inner.getLevelMaximumGeometricError(a)}loadTileDataAvailability(a,o,y){if(typeof this._inner.loadTileDataAvailability=="function")return this._inner.loadTileDataAvailability(a,o,y)}}async function i(l){const a=await e.ArcGISTiledElevationTerrainProvider.fromUrl(l);return new n(a)}return n.fromUrl=i,n}function fs({getViewer:e,getCesium:t,activeBasemap:n,applyBasemap:i,resolvePresetLayerIds:l,message:a,validationTimeoutMs:o=5e3,circuitBreakThreshold:y=3}){const v=new Map,S=new Set,M={value:!1};let C=null,u=[],w=[];function D(d,x={}){return d?S.has(d)&&!x.forceReload?(M.value=!0,!1):i(d,x)?(T(d),!0):(E(d),!1):!1}function T(d){var h,L;r();const x=e==null?void 0:e();if(!(x!=null&&x.imageryLayers))return;const p=l(d),s=[];for(let R=0;R<x.imageryLayers.length;R++){const _=x.imageryLayers.get(R);(h=_==null?void 0:_.imageryProvider)!=null&&h._descriptorId&&p.includes(_.imageryProvider._descriptorId)&&s.push(_)}if(!s.length)return;u=s;let m=!1;const F=()=>{m=!0,r(),v.delete(d),S.has(d)&&(S.delete(d),M.value=S.size>0)},z=R=>{m||(E(d),r())};for(const R of u){const _=R.imageryProvider;if(_!=null&&_.errorEvent&&(_.errorEvent.addEventListener(z),w.push(()=>_.errorEvent.removeEventListener(z))),_!=null&&_.ready){F();return}(L=_==null?void 0:_.readyPromise)!=null&&L.then&&_.readyPromise.then(F).catch(z)}C=setTimeout(()=>{m||E(d)},o)}function E(d){const x=(v.get(d)||0)+1;v.set(d,x),x>=y&&(S.add(d),M.value=!0,P(d))}function P(d){var p,s,m,F,z;const x="custom_China_Blender_preset_2";if(d===x){const h="imagery_tianditu_preset";S.has(h)?(s=a==null?void 0:a.error)==null||s.call(a,"所有底图均加载失败，请检查网络",{closable:!0}):((p=a==null?void 0:a.warning)==null||p.call(a,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=h);return}if(!S.has(x))(m=a==null?void 0:a.warning)==null||m.call(a,"底图加载失败，已降级到默认底图",{closable:!0}),n.value=x;else{const h="imagery_tianditu_preset";S.has(h)?(z=a==null?void 0:a.error)==null||z.call(a,"所有底图均加载失败，请检查网络",{closable:!0}):((F=a==null?void 0:a.warning)==null||F.call(a,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=h)}}function r(){C&&(clearTimeout(C),C=null);for(const d of w)try{d()}catch{}w=[],u=[]}function c(){v.clear(),S.clear(),M.value=!1,r()}function f(){r(),v.clear(),S.clear(),M.value=!1}return{switchBasemap:D,resetCircuitBreaker:c,isCircuitOpen:M,cleanup:f}}const Lt=["0","1","2","3","4","5","6","7"],Ft="https://t{s}.tianditu.gov.cn/",ms="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",ps=96188,Et="custom-xyz",$n="webgis_custom_basemap_url",vs="cesium_tdt_label_layer_visible",jn="cesium_tdt_boundary_layer_visible",qn="cesium_tdt_text_label_layer_visible",Vn="cesium_osm_buildings_visible",Xn="cesium_google_photorealistic_3d_tiles_visible";function gs(){return Ti.map(e=>({...e,description:ys(e.value),source:"preset"}))}function ys(e){const t=Rt(e);if(!t.length)return"复合底图";const n=t.map(i=>{const l=gn(i);return l?l.name:i});return n.slice(0,3).join(" + ")+(n.length>3?" ...":"")}const Yn=gs(),Kn=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function bs({getViewer:e,getCesium:t,message:n,backendBaseUrl:i,tiandituToken:l,cesiumIonToken:a}){let o=null,y=null,v=null,S=null,M=0,C=null,u=null,w=0,D=0,T=[];const E=()=>Zn(l),P=()=>Zn(a),r=[],c=Q([]),f=new Map,d=new Map,x=new Map,p=new Map,s="cesium_custom_xyz_basemap_url",m=Q(wn),F=Q("tianditu"),z=Q(Wn($n,"")||Wn(s,"")),h=Tt(vs,!1),L=Q(Tt(jn,h??!1)),R=Q(Tt(qn,h??!1)),_=Q(Tt(Vn,!1)),I=Q(Tt(Xn,!1)),B=Re(()=>[...Yn.map(g=>g.value!=="custom"?g:{...g,description:z.value?z.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!z.value}),...c.value]),$=fs({getViewer:e,getCesium:t,activeBasemap:m,applyBasemap:Se,resolvePresetLayerIds:Rt,message:n}),X=Re(()=>$.isCircuitOpen.value),le=Re(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:L.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:R.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:_.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:I.value}]);Ce(m,g=>{!(e!=null&&e())||!(t!=null&&t())||Se(g)}),Ce(z,g=>{ds($n,g)}),Ce(F,async g=>{!(e!=null&&e())||!(t!=null&&t())||await Ue(g)}),Ce(L,g=>{Ct(jn,g),je()}),Ce(R,g=>{Ct(qn,g),je()}),Ce(_,g=>{Ct(Vn,g),ne()}),Ce(I,g=>{Ct(Xn,g),ee()});function J(){const g=t==null?void 0:t();if(!g)return[];f.clear(),d.clear();const k=Yn.map(Z=>{const ge=new g.ProviderViewModel({name:Z.label,tooltip:ws(Z),category:"项目底图",iconUrl:ei(Ts(Z.value),Ms(Z.value,Z.label)),creationFunction:()=>G(Z.value)});return f.set(Z.value,ge),d.set(ge,Z.value),ge}),K=O();return c.value=K.map((Z,ge)=>{const Le=String((Z==null?void 0:Z.name)||`官方底图 ${ge+1}`).trim(),ke=Fs(Le,ge);return f.set(ke,Z),d.set(Z,ke),{value:ke,label:`官方 · ${Le}`,description:String((Z==null?void 0:Z.tooltip)||Le),source:"official"}}),[...k,...K]}function fe(){const g=t==null?void 0:t();return g?(x.clear(),p.clear(),Kn.map(k=>{const K=new g.ProviderViewModel({name:k.label,tooltip:k.description||k.label,category:"项目地形",iconUrl:ei(xs(k.value),Ss(k.value)),creationFunction:()=>et(k.value)});return x.set(k.value,K),p.set(K,k.value),K})):[]}function be(g=[]){return f.get(m.value)||g[0]}function ce(g=[]){return x.get(F.value)||g[0]}function O(){const g=t==null?void 0:t();if(typeof(g==null?void 0:g.createDefaultImageryProviderViewModels)!="function")return[];try{return g.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function G(g){return Rt(g).length>0?U(g):g==="google"?Ae():g===Et?Te():he()}function U(g){const k=t==null?void 0:t();if(!k)return[];const K=Rt(g);if(!K.length)return he();const Z=E(),ge=z.value;return La(k,K,{tiandituTk:Z,customUrl:ge})}function he(){const g=t==null?void 0:t();return[new g.UrlTemplateImageryProvider({url:`${Ft}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${E()}`,subdomains:Lt,tilingScheme:new g.WebMercatorTilingScheme,maximumLevel:18})]}function Ae(){const g=t==null?void 0:t();return[new g.UrlTemplateImageryProvider({url:`${i}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new g.WebMercatorTilingScheme,maximumLevel:20})]}function Te(){const g=t==null?void 0:t(),k=Qn(z.value);return k.valid?[new g.UrlTemplateImageryProvider({url:k.url,subdomains:k.subdomains,tilingScheme:new g.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(k.message,{closable:!0}),he())}function Fe(){const g=t==null?void 0:t();return new g.UrlTemplateImageryProvider({url:`${Ft}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${E()}`,subdomains:Lt,tilingScheme:new g.WebMercatorTilingScheme,maximumLevel:10})}function Ie(){const g=t==null?void 0:t();return new g.UrlTemplateImageryProvider({url:`${Ft}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${E()}`,subdomains:Lt,tilingScheme:new g.WebMercatorTilingScheme,maximumLevel:18})}function Oe(){var ze,$e,Ke,q,V;Ge();const g=t==null?void 0:t(),k=($e=(ze=e==null?void 0:e())==null?void 0:ze.baseLayerPicker)==null?void 0:$e.viewModel;if(!k||!((Ke=g==null?void 0:g.knockout)!=null&&Ke.getObservable))return;const K=g.knockout.getObservable(k,"selectedImagery"),Z=g.knockout.getObservable(k,"selectedTerrain"),ge=[],Le=(q=K==null?void 0:K.subscribe)==null?void 0:q.call(K,de=>{const ye=d.get(de);ye&&(m.value!==ye&&(m.value=ye),Ye())}),ke=(V=Z==null?void 0:Z.subscribe)==null?void 0:V.call(Z,de=>{const ye=p.get(de);ye&&(F.value!==ye&&(F.value=ye),Pe(ye))});Le&&ge.push(Le),ke&&ge.push(ke),T=ge}function Ge(){T.forEach(g=>{var k;return(k=g==null?void 0:g.dispose)==null?void 0:k.call(g)}),T=[]}function pe(){return je(),ne(),ee(),!0}function Be(){const g=e==null?void 0:e();if(g!=null&&g.imageryLayers)for(;r.length;){const k=r.pop();try{g.imageryLayers.remove(k,!0)}catch{}}}function Ye(){var g,k,K;je(),ne(),ee(),(K=(k=(g=e==null?void 0:e())==null?void 0:g.scene)==null?void 0:k.requestRender)==null||K.call(k)}function je(){var k,K;const g=e==null?void 0:e();!g||!(t!=null&&t())||(L.value?qe():W(),R.value?Ne():H(),(K=(k=g.scene).requestRender)==null||K.call(k))}function qe(){var k,K,Z,ge;const g=e==null?void 0:e();if(!(g!=null&&g.imageryLayers)||o)return o&&((K=(k=g==null?void 0:g.imageryLayers)==null?void 0:k.raiseToTop)==null||K.call(k,o)),o;try{return o=g.imageryLayers.addImageryProvider(Fe()),(ge=(Z=g.imageryLayers).raiseToTop)==null||ge.call(Z,o),o}catch(Le){return n.error("天地图国界线图层加载失败",Le),null}}function Ne(){var k,K,Z,ge;const g=e==null?void 0:e();if(!(g!=null&&g.imageryLayers)||y)return y&&((K=(k=g==null?void 0:g.imageryLayers)==null?void 0:k.raiseToTop)==null||K.call(k,y)),y;try{return y=g.imageryLayers.addImageryProvider(Ie()),(ge=(Z=g.imageryLayers).raiseToTop)==null||ge.call(Z,y),y}catch(Le){return n.error("天地图文字标注图层加载失败",Le),null}}function W(){const g=e==null?void 0:e();if(!(!o||!(g!=null&&g.imageryLayers))){try{g.imageryLayers.remove(o,!0)}catch{}o=null}}function H(){const g=e==null?void 0:e();if(!(!y||!(g!=null&&g.imageryLayers))){try{g.imageryLayers.remove(y,!0)}catch{}y=null}}async function ne(){var k,K,Z;const g=e==null?void 0:e();!((k=g==null?void 0:g.scene)!=null&&k.primitives)||!(t!=null&&t())||(_.value?await te():re(),(Z=(K=g.scene).requestRender)==null||Z.call(K))}async function ee(){var k,K,Z;const g=e==null?void 0:e();!((k=g==null?void 0:g.scene)!=null&&k.primitives)||!(t!=null&&t())||(I.value?await ae():j(),(Z=(K=g.scene).requestRender)==null||Z.call(K))}async function ae(){var Z,ge,Le;const g=e==null?void 0:e(),k=t==null?void 0:t();if(!((Z=g==null?void 0:g.scene)!=null&&Z.primitives))return null;if(C)return g.scene.globe.show=!1,C;if(u)return u;if(typeof(k==null?void 0:k.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),I.value=!1,null;const K=++w;Gt(k,P()),u=k.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const ke=await u;return K!==w||!I.value?(Jn(ke),null):(C=g.scene.primitives.add(ke),g.scene.globe.show=!1,g.scene.skyAtmosphere.show=!0,(Le=(ge=g.scene).requestRender)==null||Le.call(ge),C)}catch(ke){return K!==w||(I.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",ke)),null}finally{K===w&&(u=null)}}function j(){var k,K,Z;const g=e==null?void 0:e();if(w+=1,u=null,!C||!((k=g==null?void 0:g.scene)!=null&&k.primitives)){(K=g==null?void 0:g.scene)!=null&&K.globe&&(g.scene.globe.show=!0);return}try{g.scene.primitives.remove(C)}catch{}C=null,(Z=g==null?void 0:g.scene)!=null&&Z.globe&&(g.scene.globe.show=!0)}async function te(){var Z,ge,Le,ke;const g=e==null?void 0:e(),k=t==null?void 0:t();if(!((Z=g==null?void 0:g.scene)!=null&&Z.primitives)||v)return v;if(S)return S;if(typeof((ge=k==null?void 0:k.Cesium3DTileset)==null?void 0:ge.fromIonAssetId)!="function"&&typeof(k==null?void 0:k.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),_.value=!1,null;const K=++M;Gt(k,P()),await se(),S=_s(k,{maximumScreenSpaceError:8});try{const ze=await S;return K!==M||!_.value?(Jn(ze),null):(v=g.scene.primitives.add(ze),(ke=(Le=g.scene).requestRender)==null||ke.call(Le),v)}catch(ze){return K!==M||(_.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",ze)),null}finally{K===M&&(S=null)}}function re(){var k,K,Z;const g=e==null?void 0:e();if(M+=1,S=null,!(!v||!((k=g==null?void 0:g.scene)!=null&&k.primitives))){try{g.scene.primitives.remove(v)}catch{}v=null,(Z=(K=g.scene).requestRender)==null||Z.call(K)}}async function se(){if(F.value==="cesiumWorld")return!0;F.value="cesiumWorld";const g=await Ue("cesiumWorld");return g||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),g}function Se(g,k={}){var Le,ke,ze;const K=e==null?void 0:e();if(!K||!(t!=null&&t()))return!1;_a(),Be();const Z=(Le=K.baseLayerPicker)==null?void 0:Le.viewModel,ge=f.get(g);if(Z&&ge){if(k.forceReload&&Z.selectedImagery===ge){const $e=f.get(wn)||f.get("tianditu");$e&&$e!==ge&&(Z.selectedImagery=$e)}return Z.selectedImagery!==ge&&(Z.selectedImagery=ge),Ye(),!0}try{return G(g).forEach(Ke=>{Ke&&r.push(K.imageryLayers.addImageryProvider(Ke))}),je(),(ze=(ke=K.scene).requestRender)==null||ze.call(ke),!0}catch($e){return n.error("地图源切换失败",$e),!1}}function He(){return Ue(F.value)}async function Ue(g){var ze,$e,Ke,q,V,de,ye,We,dt,nt,xt;const k=e==null?void 0:e(),K=t==null?void 0:t();if(!k||!K)return!1;const Z=(ze=k.baseLayerPicker)==null?void 0:ze.viewModel,ge=x.get(g);if(Z&&ge)return Z.selectedTerrain!==ge&&(Z.selectedTerrain=ge),Pe(g),(Ke=($e=k.scene).requestRender)==null||Ke.call($e),!0;const Le=++D;if(g==="ellipsoid")return k.terrainProvider=new K.EllipsoidTerrainProvider,Pe(g),(V=(q=k.scene).requestRender)==null||V.call(q),!0;if(g==="cesiumWorld")try{const it=await A();return Le!==D?!1:(k.terrainProvider=it,Pe(g),(ye=(de=k.scene).requestRender)==null||ye.call(de),!0)}catch(it){return Le!==D||(k.terrainProvider=new K.EllipsoidTerrainProvider,Pe("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",it)),!1}if(g==="arcgisWorld")try{const it=await N();return Le!==D?!1:(k.terrainProvider=it,Pe(g),(dt=(We=k.scene).requestRender)==null||dt.call(We),!0)}catch(it){return Le!==D||(k.terrainProvider=new K.EllipsoidTerrainProvider,Pe("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",it)),!1}const ke=Gn(K);try{return k.terrainProvider=new ke({url:`${Ft}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Lt,token:E()}),Pe(g),(xt=(nt=k.scene).requestRender)==null||xt.call(nt),!0}catch(it){return k.terrainProvider=new K.EllipsoidTerrainProvider,Pe("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",it),!1}}function Pe(g){var K;const k=e==null?void 0:e();(K=k==null?void 0:k.scene)!=null&&K.globe&&(k.scene.globe.depthTestAgainstTerrain=g!=="ellipsoid")}function et(g){const k=t==null?void 0:t();if(g==="ellipsoid")return new k.EllipsoidTerrainProvider;if(g==="cesiumWorld")return A().catch(Z=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",Z),Y(g,"ellipsoid"),new k.EllipsoidTerrainProvider));if(g==="arcgisWorld")return N().catch(Z=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",Z),Y(g,"ellipsoid"),new k.EllipsoidTerrainProvider));const K=Gn(k);try{return new K({url:`${Ft}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Lt,token:E()})}catch(Z){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",Z),new k.EllipsoidTerrainProvider}}async function A(){var K,Z;const g=t==null?void 0:t();Gt(g,P());const k={requestWaterMask:!1,requestVertexNormals:!0};if(typeof g.createWorldTerrainAsync=="function")return g.createWorldTerrainAsync(k);if(typeof g.createWorldTerrain=="function")return g.createWorldTerrain(k);if(typeof((K=g.CesiumTerrainProvider)==null?void 0:K.fromIonAssetId)=="function")return g.CesiumTerrainProvider.fromIonAssetId(1,k);if((Z=g.IonResource)!=null&&Z.fromAssetId&&g.CesiumTerrainProvider){const ge=await g.IonResource.fromAssetId(1);return new g.CesiumTerrainProvider({url:ge,...k})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function N(){var K;const g=t==null?void 0:t();if(typeof((K=g==null?void 0:g.ArcGISTiledElevationTerrainProvider)==null?void 0:K.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return hs(g).fromUrl(ms)}function Y(g,k){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{F.value===g&&(F.value=k)},0)}function oe({overlayId:g,value:k}){if(g==="tdt-boundaries"){L.value=!!k;return}if(g==="tdt-text-labels"){R.value=!!k;return}if(g==="cesium-osm-buildings"){_.value=!!k;return}g==="google-photorealistic-3d-tiles"&&(I.value=!!k)}function ue({url:g}){const k=String(g||"").trim(),K=Qn(k);if(!K.valid){n.warning(K.message,{closable:!0});return}if(z.value=k,m.value===Et){Se(Et,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}m.value=Et,n.success("已切换到自定义 XYZ 图源")}function xe(){Be(),W(),H(),re(),j(),Ge()}return{activeBasemap:m,activeTerrain:F,customXyzBasemapUrl:z,basemapOptions:B,terrainOptions:Kn,overlayOptions:le,createImageryProviderViewModels:J,createTerrainProviderViewModels:fe,getSelectedImageryProviderViewModel:be,getSelectedTerrainProviderViewModel:ce,bindLayerPickerStateSync:Oe,addBaseImageryLayers:pe,initCustomTerrain:He,applyBasemap:Se,applyTerrain:Ue,handleOverlayToggle:oe,handleCustomBasemapSubmit:ue,cleanupLayers:xe,basemapSwitcher:$,basemapCircuitOpen:X,resetCircuitBreaker:$.resetCircuitBreaker}}function xs(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function Ss(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Zn(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Jn(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function _s(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const i=await e.Cesium3DTileset.fromIonAssetId(ps,t);return!i.style&&typeof e.Cesium3DTileStyle=="function"&&(i.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),i}return e.createOsmBuildingsAsync(t)}function ws(e){return e.value===Et?`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`:e.description||e.label}function Ts(e){const t=Rt(e);if(!t.length)return"#37d67a";const n=gn(t[0]);if(!n)return"#37d67a";const i=n.category;return i==="imagery"?"#5ea1ff":i==="vector"?"#37d67a":i==="terrain"?"#d0a449":i==="label"?"#a78bfa":i==="theme"?"#f59e0b":i==="custom"?"#f472b6":"#37d67a"}function Ms(e,t){return String(t||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function Qn(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const i=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let l=[];return i?(l=Ds(i[1],i[2]),n=n.replace(i[0],"{s}")):/\{s\}/i.test(n)&&(l=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:l}:Ls(n)?{valid:!0,message:"",url:n,subdomains:l}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:l}}function Ds(e,t){const n=String(e||"").charCodeAt(0),i=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(i))return[];const l=n<=i?1:-1,a=[];for(let o=n;l>0?o<=i:o>=i;o+=l)a.push(String.fromCharCode(o));return a}function Ls(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function Fs(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function ei(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),i=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(i)}`}function Ps({getViewer:e,getCesium:t,message:n}){function i(o){const y=e==null?void 0:e(),v=t==null?void 0:t();if(!y||!v)return;const S=typeof o=="number"?o:2;y.camera.flyTo({destination:v.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-v.Math.PI_OVER_TWO,roll:0},duration:S})}function l(){const o=e==null?void 0:e(),y=t==null?void 0:t();!o||!y||o.camera.flyTo({destination:y.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:y.Math.toRadians(0),pitch:y.Math.toRadians(-25),roll:0},duration:3})}async function a(){const o=e==null?void 0:e(),y=t==null?void 0:t();if(!(!o||!y))try{const v=await y.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");o.scene.primitives.add(v),o.flyTo(v,{duration:3,offset:new y.HeadingPitchRange(y.Math.toRadians(0),y.Math.toRadians(-25),v.boundingSphere.radius*2.5)})}catch(v){n.error(`加载模型失败: ${v}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:i,flyToEverest:l,loadCustomTileset:a}}const As="tileset.json";let Bt=null;async function ti(){if(Bt)return Bt;const[{decompressBuffer:e},{parseShpPartsToGeoJSON:t}]=await Promise.all([It(()=>import("./decompressFile-DiMYlfaO.js").then(n=>n.f),__vite__mapDeps([2,3]),import.meta.url),It(()=>import("./shpParser-COyk1DQe.js").then(n=>n.s),__vite__mapDeps([4,3,1,5,6,7,8,9,10]),import.meta.url)]);return Bt={decompressBuffer:e,parseShpPartsToGeoJSON:t},Bt}function rn(e){const t=e.lastIndexOf(".");return t===-1?"":e.slice(t+1).toLowerCase()}function ft(e,t,n,i){if(!(!e||!t||!n))try{i==="3dtiles"&&n.boundingSphere?e.flyTo(n,{duration:2,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-30),n.boundingSphere.radius*2)}):n.entities&&n.entities.values.length>0&&e.flyTo(n,{duration:2})}catch{}}function St(e){return URL.createObjectURL(e)}function Qe(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function Cs({getViewer:e,getCesium:t,message:n}){const i=Q([]),l=Q(null);let a=0;async function o(h){const L=t(),R=e();if(!L||!R)throw new Error("Cesium 未初始化");const _=St(h);try{const I=await L.GeoJsonDataSource.load(_,{stroke:L.Color.fromCssColorString("#3ddc84"),fill:L.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:L.Color.fromCssColorString("#3ddc84"),markerSize:24}),B=`geojson_${++a}`;I.name=h.name,await R.dataSources.add(I),ft(R,L,I,"geojson");const $={id:B,name:h.name,type:"geojson",entity:I,blobUrl:_};return i.value=[...i.value,$],n.success(`GeoJSON "${h.name}" 加载成功`),$}catch(I){throw Qe(_),I}}async function y(h){const L=t(),R=e();if(!L||!R)throw new Error("Cesium 未初始化");const _=St(h);try{const I=await L.KmlDataSource.load(_,{camera:R.scene.camera,canvas:R.scene.canvas}),B=`kml_${++a}`;I.name=h.name,await R.dataSources.add(I),ft(R,L,I,"kml");const $={id:B,name:h.name,type:"kml",entity:I,blobUrl:_};return i.value=[...i.value,$],n.success(`KML "${h.name}" 加载成功`),$}catch(I){throw Qe(_),I}}async function v(h){const L=t(),R=e();if(!L||!R)throw new Error("Cesium 未初始化");const _=St(h);try{const I=await L.KmlDataSource.load(_,{camera:R.scene.camera,canvas:R.scene.canvas}),B=`kmz_${++a}`;I.name=h.name,await R.dataSources.add(I),ft(R,L,I,"kmz");const $={id:B,name:h.name,type:"kmz",entity:I,blobUrl:_};return i.value=[...i.value,$],n.success(`KMZ "${h.name}" 加载成功`),$}catch{return Qe(_),await S(h)}}async function S(h){const L=t(),R=e(),_=await h.arrayBuffer(),{decompressBuffer:I}=await ti(),$=(await I(_,h.name)).find(fe=>{var be;return fe.ext==="kml"||((be=fe.name)==null?void 0:be.toLowerCase().endsWith(".kml"))});if(!$)throw new Error("KMZ 压缩包中未找到 KML 文件");let X;typeof $.content=="string"?X=$.content:$.content instanceof ArrayBuffer||$.content instanceof Uint8Array?X=xa($.content):X=String($.content||"");const le=new Blob([X],{type:"application/vnd.google-earth.kml+xml"}),J=URL.createObjectURL(le);try{const fe=await L.KmlDataSource.load(J,{camera:R.scene.camera,canvas:R.scene.canvas}),be=`kmz_${++a}`;fe.name=h.name,await R.dataSources.add(fe),ft(R,L,fe,"kmz");const ce={id:be,name:h.name,type:"kmz",entity:fe};return i.value=[...i.value,ce],n.success(`KMZ "${h.name}" 加载成功（手动解压）`),ce}finally{URL.revokeObjectURL(J)}}async function M(h,L=[]){const R=t(),_=e();if(!R||!_)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:I}=await ti(),B={shp:await h.arrayBuffer()};for(const ce of L){const O=rn(ce.name);O==="dbf"&&(B.dbf=await ce.arrayBuffer()),O==="shx"&&(B.shx=await ce.arrayBuffer()),O==="prj"&&(B.prj=await ce.arrayBuffer()),O==="cpg"&&(B.cpg=await ce.arrayBuffer())}const $=await I(B),X=Array.isArray($)?$:[$],le=X.reduce((ce,O)=>{var G;return ce+(((G=O==null?void 0:O.features)==null?void 0:G.length)||0)},0),J=X.length===1?X[0]:{type:"FeatureCollection",features:X.flatMap(ce=>(ce==null?void 0:ce.features)||[])},fe=new Blob([JSON.stringify(J)],{type:"application/geo+json"}),be=URL.createObjectURL(fe);try{const ce=await R.GeoJsonDataSource.load(be,{stroke:R.Color.fromCssColorString("#ffcc00"),fill:R.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:R.Color.fromCssColorString("#ffcc00"),markerSize:20}),O=`shp_${++a}`;ce.name=h.name,await _.dataSources.add(ce),ft(_,R,ce,"shp");const G={id:O,name:h.name,type:"shp",entity:ce};return i.value=[...i.value,G],n.success(`Shapefile "${h.name}" 加载成功 (${le} 个要素)`),URL.revokeObjectURL(be),G}catch(ce){throw URL.revokeObjectURL(be),ce}}async function C(h){const L=t(),R=e();if(!L||!R)throw new Error("Cesium 未初始化");const _=St(h);let I=null;try{I=await x(h)}catch{}if(I)try{const B=await s(L,R,_,h.name,I),X={id:`gltf_${++a}`,name:h.name,type:"gltf",entity:B,blobUrl:_};return i.value=[...i.value,X],n.success(`3D 模型 "${h.name}" 加载成功 (${I.lng.toFixed(4)}, ${I.lat.toFixed(4)}, ${I.height.toFixed(1)}m)`),X}catch(B){throw Qe(_),B}return l.value&&Qe(l.value.blobUrl),l.value={file:h,blobUrl:_,name:h.name},{needsCoordInput:!0,file:h}}async function u(h){const L=t(),R=e();if(!l.value)throw new Error("没有等待确认的模型文件");const{blobUrl:_,name:I}=l.value;try{const B=await s(L,R,_,I,h),X={id:`gltf_${++a}`,name:I,type:"gltf",entity:B,blobUrl:_};i.value=[...i.value,X],n.success(`3D 模型 "${I}" 加载成功 (${h.lng.toFixed(4)}, ${h.lat.toFixed(4)}, ${h.height.toFixed(1)}m)`);const le=L.Cartesian3.fromDegrees(h.lng,h.lat,h.height+500);return R.camera.flyTo({destination:le,orientation:{heading:L.Math.toRadians(0),pitch:L.Math.toRadians(-30),roll:0},duration:2}),l.value=null,X}catch(B){throw Qe(_),l.value=null,B}}function w(){l.value&&(Qe(l.value.blobUrl),l.value=null)}async function D(h){const L=t(),R=e();if(!L||!R)throw new Error("Cesium 未初始化");const _=St(h);try{const I=await L.CzmlDataSource.load(_),B=`czml_${++a}`;I.name=h.name,await R.dataSources.add(I),ft(R,L,I,"czml");const $={id:B,name:h.name,type:"czml",entity:I,blobUrl:_};return i.value=[...i.value,$],n.success(`CZML "${h.name}" 加载成功`),$}catch(I){throw Qe(_),I}}async function T(h){const L=t(),R=e();if(!L||!R)throw new Error("Cesium 未初始化");const _=h.path||"",I=/^[a-zA-Z]:\\/.test(_)||_.startsWith("/");let B="";if(I){const $=_.replace(/\\/g,"/");B=$.startsWith("/")?`file://${$}`:`file:///${$}`}else B=St(h);try{const $=await L.Cesium3DTileset.fromUrl(B),X=`tileset_${++a}`;R.scene.primitives.add($);const le=B.startsWith("file:")?void 0:B,J={id:X,name:h.name,type:"3dtiles",entity:$,blobUrl:le};return i.value=[...i.value,J],ft(R,L,$,"3dtiles"),n.success(`3D Tiles "${h.name}" 加载成功`),J}catch($){throw B.startsWith("blob:")&&Qe(B),$}}function E(h,L){const R=String(L||"").replace(/\\/g,"/");if(/^(blob|file|https?):/i.test(R))return R;if(R.startsWith("/"))return R.slice(1);const I=(h+R).split("/"),B=[];for(const $ of I)if(!($==="."||$==="")){if($===".."){B.pop();continue}B.push($)}return B.join("/")}function P(h,L,R){if(!h||typeof h!="object")return;function _(B){if(!(!B||typeof B!="object"))for(const $ of["url","uri"]){const X=B[$];if(typeof X!="string"||/^(blob|file|https?|data):/i.test(X))continue;const le=E(L,X);R[le]&&(B[$]=R[le])}}const I=h.content;if(I)if(Array.isArray(I))for(const B of I)_(B);else _(I);if(Array.isArray(h.children))for(const B of h.children)P(B,L,R);if(h.extensions&&typeof h.extensions=="object")for(const B of Object.values(h.extensions))B&&typeof B=="object"&&_(B)}async function r(h,L){const R=t(),_=e();if(!R||!_)throw new Error("Cesium 未初始化");const I={},B=[];for(const[O,G]of Object.entries(h)){const U=O.replace(/\\/g,"/"),he=URL.createObjectURL(G);I[U]=he,B.push(he)}const $=Object.keys(I),X=$.filter(O=>O.endsWith("tileset.json")?!0:!(!O.endsWith(".json")||!h[O]));for(const O of X){const G=Object.keys(h).find(Oe=>Oe.replace(/\\/g,"/")===O)||O,U=h[G];let he;try{he=await U.text()}catch{continue}let Ae;try{Ae=JSON.parse(he)}catch{continue}if(!Ae.root)continue;const Te=O.substring(0,O.lastIndexOf("/")+1);P(Ae.root,Te,I);const Fe=new Blob([JSON.stringify(Ae)],{type:"application/json"}),Ie=URL.createObjectURL(Fe);I[O]=Ie,B.push(Ie)}const le=X.find(O=>O==="tileset.json"||O.endsWith("/tileset.json"))||X[0];if(!le)throw new Error("未找到 tileset.json，请确认 ZIP 或目录包含有效的 3D Tiles 数据集");const J=I[le],fe=await R.Cesium3DTileset.fromUrl(J),be=`tileset_${++a}`;_.scene.primitives.add(fe);const ce={id:be,name:L,type:"3dtiles",entity:fe,blobUrls:B};return i.value=[...i.value,ce],ft(_,R,fe,"3dtiles"),n.success(`3D Tiles "${L}" 加载成功 (${$.length} 个文件)`),ce}async function c(h){const{default:L}=await It(async()=>{const{default:B}=await import("./vendor-jszip-BOwK5y_4.js").then($=>$.j);return{default:B}},[],import.meta.url),R=await L.loadAsync(h),_={},I=[];R.forEach((B,$)=>{$.dir||I.push(B)});for(const B of I){const $=await R.file(B).async("blob");_[B]=$}return await r(_,h.name||"3D Tiles")}async function f(h,L,R){for await(const[_,I]of h.entries()){const B=L?`${L}/${_}`:_;if(I.kind==="file"){const $=await I.getFile();R[B]=$}else I.kind==="directory"&&await f(I,B,R)}}async function d(){try{const h=await window.showDirectoryPicker({mode:"read"}),L={};return await f(h,"",L),await r(L,h.name)}catch(h){if(h.name==="AbortError"||h.name==="SecurityError")return null;throw n.error(`导入 3D Tiles 目录失败: ${h.message||h}`),h}}async function x(h){var I,B,$,X,le;const L=rn(h.name);let R;if(L==="gltf"){const J=await h.text();R=JSON.parse(J)}else{const J=await h.arrayBuffer();R=p(J)}if(!R)return null;if((I=R.extensionsUsed)!=null&&I.includes("CESIUM_RTC")&&(($=(B=R.extensions)==null?void 0:B.CESIUM_RTC)!=null&&$.center)){const J=R.extensions.CESIUM_RTC.center;if(J.length>=3){const fe=t();if(fe){const be=new fe.Cartesian3(J[0],J[1],J[2]),ce=fe.Cartographic.fromCartesian(be);return{lng:fe.Math.toDegrees(ce.longitude),lat:fe.Math.toDegrees(ce.latitude),height:ce.height}}}}const _=(X=R.asset)==null?void 0:X.extras;if(_){const J=_.longitude??_.lng,fe=_.latitude??_.lat,be=_.height??_.altitude??_.alt??0;if(J!=null&&fe!=null)return{lng:Number(J),lat:Number(fe),height:Number(be)}}if(((le=R.nodes)==null?void 0:le.length)>0&&R.nodes[0].matrix){const J=R.nodes[0].matrix;if(J.length>=16){const fe=J[12],be=J[13],ce=J[14];if(Math.abs(fe)>1e5||Math.abs(be)>1e5){const O=t();if(O)try{const G=new O.Cartesian3(fe,be,ce),U=O.Cartographic.fromCartesian(G);return{lng:O.Math.toDegrees(U.longitude),lat:O.Math.toDegrees(U.latitude),height:U.height}}catch{}}}}return null}function p(h){if(h.byteLength<20)return null;const L=new DataView(h);if(L.getUint32(0,!0)!==1179937895)return null;const _=L.getUint32(12,!0);if(L.getUint32(16,!0)!==1313821514)return null;const B=new Uint8Array(h,20,_),$=new TextDecoder().decode(B);try{return JSON.parse($)}catch{return null}}async function s(h,L,R,_,I){const{lng:B,lat:$,height:X}=I,le=h.Cartesian3.fromDegrees(B,$,X),J=new h.HeadingPitchRoll(0,0,0),fe=h.Transforms.localFrameToFixedFrameGenerator("north","west"),be=await h.Model.fromGltfAsync({url:R,modelMatrix:h.Transforms.headingPitchRollToFixedFrame(le,J,h.Ellipsoid.WGS84,fe),scale:1,show:!0});return be.name=_,L.scene.primitives.add(be),be}async function m(h){const L=e(),R=t();if(!L||!R)throw n.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const _=rn(h.name);try{switch(_){case"geojson":case"json":return h.name.toLowerCase().includes(As)?await T(h):await o(h);case"kml":return await y(h);case"kmz":return await v(h);case"shp":return await M(h);case"glb":case"gltf":return await C(h);case"czml":return await D(h);case"zip":return await c(h);default:throw n.error(`不支持的文件格式: .${_}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${_}`)}}catch(I){throw n.error(`加载 "${h.name}" 失败: ${I.message||I}`),I}}function F(h){const L=i.value.find(_=>_.id===h);if(!L)return;const R=e();if(R){try{L.type==="3dtiles"?R.scene.primitives.remove(L.entity):R.dataSources.remove(L.entity,!0)}catch{}if(L.blobUrl&&Qe(L.blobUrl),L.blobUrls&&Array.isArray(L.blobUrls))for(const _ of L.blobUrls)Qe(_);i.value=i.value.filter(_=>_.id!==h),n.info(`已移除 "${L.name}"`)}}function z(){var R,_,I,B,$;const h=e();if(!h){i.value=[];return}for(const X of i.value){try{X.type==="3dtiles"?h.scene.primitives.remove(X.entity):h.dataSources.remove(X.entity,!0)}catch{}if(X.blobUrl&&Qe(X.blobUrl),X.blobUrls&&Array.isArray(X.blobUrls))for(const le of X.blobUrls)Qe(le)}if(Array.isArray((R=h.dataSources)==null?void 0:R.dataSources)){const X=h.dataSources.dataSources.slice();for(const le of X)if(le&&!le.isBaseLayerPickerDataSource)try{h.dataSources.remove(le,!0)}catch{}}const L=t();if(L&&Array.isArray((I=(_=h.scene)==null?void 0:_.primitives)==null?void 0:I.primitives)){const X=h.scene.primitives.primitives.slice();for(const le of X)if(!(!le||!(le instanceof L.Cesium3DTileset||le instanceof L.Model||le.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(le.name||"")))))try{h.scene.primitives.remove(le)}catch{}}i.value=[],w();try{($=(B=h.scene).requestRender)==null||$.call(B)}catch{}n.info("已清除所有导入数据")}return{loadDataFile:m,importTilesetFromDirectory:d,loadedDataSources:i,removeDataSource:F,clearAllDataSources:z,pendingGltfFile:l,loadGltfWithUserCoords:u,cancelPendingGltf:w}}const Es="cesium_tool_panel_open";function Rs({fluidPanelRef:e,sceneActions:t={},wind:n={},modelManager:i=null,cameraEnhanced:l=null,heightSampler:a=null,playerController:o=null,panelStorageKey:y=Es}={}){const v=Q(Tt(y,!0)),S=Q({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),M=Q({enableLighting:!0,showGroundAtmosphere:!0,dynamicAtmosphereLighting:!0,dynamicAtmosphereLightingFromSun:!0,atmosphereLightIntensity:5.5,atmosphereHueShift:-.015,atmosphereSaturationShift:.08,atmosphereBrightnessShift:.02,lightingFadeInDistance:0,lightingFadeOutDistance:Number.MAX_SAFE_INTEGER,nightFadeInDistance:0,nightFadeOutDistance:Number.MAX_SAFE_INTEGER,fogEnabled:!1,fogDensity:12e-5,fogMinimumBrightness:.035,sunShow:!0,moonShow:!0,skyBoxShow:!0}),C=Q({dayNightEnabled:!0,nightFactor:0,moonLightEnabled:!0,moonLightIntensity:.18,ambientIntensity:.08,starsEnabled:!0,starsIntensity:1}),u=Q({cloudsEnabled:!1,cloudCoverage:.3,cloudSpeed:.001,cloudBottom:1500,cloudTop:2150,cloudQuality:"medium",cloudWindDirection:90,cloudScattering:1,cloudAbsorption:0,cloudAnisotropy1:.7,cloudAnisotropy2:-.2,cloudAnisotropyMix:.5,cloudSkyLight:1,cloudGroundBounce:1,cloudPowder:.8,cloudDensityScale:1,cloudShapeAmount:1,cloudDetailAmount:.5,cloudTurbulence:350,cloudHazeDensity:3e-5,cloudHazeExponent:.001}),w=Q({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null,floodSpeed:5}),D=Q({speed:300,flySpeed:55e3,gravity:-2400,jumpHeight:600,sensitivity:5,acceleration:30,deceleration:30,spawnHeight:500}),T=Q({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null,floodSimActive:!1}),E=Q(!1),P=Q({elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2}),r=Re(()=>{var p,s,m,F,z,h,L,R,_,I,B,$,X,le,J,fe,be,ce,O,G,U,he,Ae,Te;return[{id:"scene",title:"场景导航",description:"相机飞行和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"atmosphere",title:"大气·光照·天空",description:"Cesium 原生光照 + Tellux 增强大气 + 高级后效（全部可选）",status:S.value.atmosphere||S.value.fog||S.value.hbao?"部分启用":"仅晨昏半球",statusTone:S.value.atmosphere?"success":"neutral",controls:[...Ws(M.value),{id:"fog",label:"高度雾",type:"toggle",value:S.value.fog,tooltip:"基于高度的指数雾效"},{id:"hbao",label:"微阴影",type:"toggle",value:S.value.hbao,tooltip:"环境光遮蔽（HBAO）"},{id:"tiltShift",label:"移轴",type:"toggle",value:S.value.tiltShift,tooltip:"移轴模糊后处理"},{id:"atmosphere",label:"大气效果",type:"toggle",value:S.value.atmosphere,tooltip:"启用 Tellux 大气渲染（日夜过渡、月光、星空）"},...Bs(C.value,!S.value.atmosphere)]},{id:"cloud",title:"体积云",description:"PostProcessStage Ray Marching 体积云渲染",status:u.value.cloudsEnabled?u.value.cloudQuality??"medium":"未启用",statusTone:u.value.cloudsEnabled?"success":"neutral",controls:Us(u.value,!u.value.cloudsEnabled)},{id:"tools",title:"空间工具",description:"模型加载、增强相机、高度采样（Tellux 移植）",status:(((p=i==null?void 0:i.modelCount)==null?void 0:p.value)>0?"模型":"")||(((s=l==null?void 0:l.flightState)==null?void 0:s.value)==="flying"?"飞行中":"就绪"),statusTone:((m=i==null?void 0:i.modelCount)==null?void 0:m.value)>0?"success":"neutral",controls:[{id:"modelManagerEnabled",label:"模型管理",type:"toggle",value:!1,tooltip:"启用后可加载 glTF/GLB 模型到地理坐标位置"},{id:"cameraEnhancedEnabled",label:"增强相机",type:"toggle",value:!1,tooltip:"自定义缓动函数、角度插值和弹簧物理"},{id:"heightSamplerEnabled",label:"高度采样",type:"toggle",value:!1,tooltip:"地形高度查询、批量异步采样、屏幕坐标拾取"}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(F=n.wind2D)!=null&&F.value?"已加载":"未加载",statusTone:(z=n.wind2D)!=null&&z.value?"success":"neutral",actions:[{id:"load",label:(h=n.wind2D)!=null&&h.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((L=n.wind2D)!=null&&L.value)}],controls:Is((R=n.windParams)==null?void 0:R.value,!!((_=n.wind2D)!=null&&_.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:T.value.isPicking?"等待选点":T.value.hasFluid?"已创建":"未创建",statusTone:T.value.isPicking?"warning":T.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:T.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:T.value.isPicking},{id:"floodSim",label:T.value.floodSimActive?"停止洪水":"洪水模拟",variant:T.value.floodSimActive?"danger":"default",active:T.value.floodSimActive,disabled:!ks(T.value)},{id:"clear",label:"清除",variant:"danger",disabled:!T.value.hasFluid&&!T.value.isPicking}],controls:zs(w.value,T.value)},{id:"shallowWater",title:"热带浅水",description:"Three.js 热带浅水场景（焦散/折射/物理吸色/体积云/闪电）",status:E.value?"已启用":"未启用",statusTone:E.value?"success":"neutral",actions:[{id:"toggle",label:E.value?"关闭":"启用",variant:E.value?"danger":"primary"}],controls:Gs(P.value,!E.value)},{id:"player",title:"人物漫游",description:"第一/第三人称视角 + WASD 移动 + 碰撞检测 + 飞行模式",status:(I=o==null?void 0:o.isActive)!=null&&I.value?(B=o.isFirstPerson)!=null&&B.value?"第一人称":"第三人称":"未启动",statusTone:($=o==null?void 0:o.isActive)!=null&&$.value?"success":"neutral",actions:[{id:"toggle",label:(X=o==null?void 0:o.isActive)!=null&&X.value?"停止漫游":"启动漫游",variant:(le=o==null?void 0:o.isActive)!=null&&le.value?"danger":"primary"},{id:"changeView",label:"切换视角",disabled:!((J=o==null?void 0:o.isActive)!=null&&J.value)},{id:"setNavTarget",label:(fe=o==null?void 0:o.navTarget)!=null&&fe.value?"更改目标":"设置导航"},{id:"clearNavTarget",label:"清除导航",disabled:!((be=o==null?void 0:o.navTarget)!=null&&be.value)}],controls:[{id:"speed",label:"行走速度",type:"range",value:D.value.speed,min:50,max:2e3,step:10,disabled:!((ce=o==null?void 0:o.isActive)!=null&&ce.value)},{id:"flySpeed",label:"飞行速度",type:"range",value:D.value.flySpeed,min:2e3,max:1e6,step:1e3,disabled:!((O=o==null?void 0:o.isActive)!=null&&O.value)},{id:"gravity",label:"重力",type:"range",value:D.value.gravity,min:-6e3,max:0,step:50,disabled:!((G=o==null?void 0:o.isActive)!=null&&G.value)},{id:"jumpHeight",label:"跳跃高度",type:"range",value:D.value.jumpHeight,min:0,max:3e3,step:50,disabled:!((U=o==null?void 0:o.isActive)!=null&&U.value)},{id:"sensitivity",label:"鼠标灵敏度",type:"range",value:D.value.sensitivity,min:1,max:20,step:.5,disabled:!((he=o==null?void 0:o.isActive)!=null&&he.value)},{id:"acceleration",label:"加速惯性",type:"range",value:D.value.acceleration,min:1,max:100,step:1,disabled:!((Ae=o==null?void 0:o.isActive)!=null&&Ae.value),tooltip:"值越大加速越快。WASD 按下后到达目标速度的响应快慢。"},{id:"deceleration",label:"减速惯性",type:"range",value:D.value.deceleration,min:1,max:100,step:1,disabled:!((Te=o==null?void 0:o.isActive)!=null&&Te.value),tooltip:"值越大松手后停得越快。影响滑行/惯性感。"},{id:"spawnHeight",label:"初始高度",type:"range",value:D.value.spawnHeight,min:50,max:5e3,step:50,disabled:!1,tooltip:"漫游启动时的离地高度（米），重启后生效。"}]}]});Ce(v,p=>{Ct(y,p)});function c({moduleId:p,actionId:s}){var F,z;(z=(F={scene:{home:()=>{var h;return(h=t.flyToHome)==null?void 0:h.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},fluid:{pick:()=>{var h,L;return(L=(h=e==null?void 0:e.value)==null?void 0:h.startPickHeightMap)==null?void 0:L.call(h)},floodSim:()=>{var h,L;return(L=(h=e==null?void 0:e.value)==null?void 0:h.toggleFloodSimulation)==null?void 0:L.call(h)},clear:()=>{var h,L;return(L=(h=e==null?void 0:e.value)==null?void 0:h.clearFluid)==null?void 0:L.call(h)}},shallowWater:{toggle:()=>{E.value=!E.value}},player:{toggle:()=>{var h;return(h=o==null?void 0:o.togglePlayer)==null?void 0:h.call(o,{spawnHeight:D.value.spawnHeight})},changeView:()=>{var h;return(h=o==null?void 0:o.changeView)==null?void 0:h.call(o)},setNavTarget:()=>{var h;return(h=o==null?void 0:o.openNavDialog)==null?void 0:h.call(o)},clearNavTarget:()=>{var h;return(h=o==null?void 0:o.clearNavTarget)==null?void 0:h.call(o)}}}[p])==null?void 0:F[s])==null||z.call(F)}function f({moduleId:p,controlId:s,value:m}){var F,z,h,L,R;if(p==="wind"&&s in(((F=n.windParams)==null?void 0:F.value)||{})){(z=n.setWindParam)==null||z.call(n,s,m);return}if(p==="fluid"&&s in w.value){w.value={...w.value,[s]:s==="waterColor"?m:Number(m)},s==="floodSpeed"&&((L=(h=e==null?void 0:e.value)==null?void 0:h.setFloodSpeed)==null||L.call(h,Number(m)));return}if(p==="shallowWater"&&s in P.value){P.value={...P.value,[s]:s==="waterColor"||s==="lightningEnabled"?m:Number(m)};return}if(p==="player"&&s in D.value){const _=Number(m);if(D.value={...D.value,[s]:_},s==="spawnHeight")return;const I=(R=o==null?void 0:o.getPlayerInstance)==null?void 0:R.call(o);I&&(s==="speed"?I.setPlayerSpeed(_):s==="flySpeed"?I.setPlayerFlySpeed(_):s==="gravity"?I.setGravity(_):s==="jumpHeight"?I.setJumpHeight(_):s==="sensitivity"?I.setMouseSensitivity(_):s==="acceleration"?I.setAcceleration(_):s==="deceleration"&&I.setDeceleration(_));return}if(p==="atmosphere"){if(s in S.value){S.value={...S.value,[s]:!!m};return}if(s in M.value){M.value={...M.value,[s]:m};return}if(s==="atmosphereEnabled"){S.value={...S.value,atmosphere:!!m};return}s in C.value&&(C.value={...C.value,[s]:m})}p==="cloud"&&s in u.value&&(u.value={...u.value,[s]:s==="cloudQuality"?m:Number(m)})}function d(p){const s=ut(p==null?void 0:p.waterLevel),m=ut(p==null?void 0:p.waterLevelMin),F=ut(p==null?void 0:p.waterLevelMax),z=ut(p==null?void 0:p.floodSpeed);T.value={isPicking:!!(p!=null&&p.isPicking),hasFluid:!!(p!=null&&p.hasFluid),selectedText:(p==null?void 0:p.selectedText)||"",waterLevel:s,waterLevelMin:m,waterLevelMax:F,floodSimActive:!!(p!=null&&p.floodSimActive)},z!==null&&(w.value={...w.value,floodSpeed:z}),s!==null&&(w.value={...w.value,waterLevel:s})}function x(){var p;(p=n.clearWind2D)==null||p.call(n)}return{toolPanelOpen:v,advancedEffectControls:S,baseAtmosphereParams:M,atmosphereParams:C,cloudParams:u,fluidParams:w,fluidState:T,shallowWaterVisible:E,shallowWaterParams:P,toolModules:r,handleToolAction:c,handleToolControlChange:f,handleFluidStateChange:d,cleanupTools:x}}function Is(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function ks(e){return ut(e.waterLevelMin)!==null&&ut(e.waterLevelMax)!==null}function zs(e,t={}){const n=ut(t.waterLevelMin),i=ut(t.waterLevelMax),l=n!==null&&i!==null,a=l?Math.min(n,i):0,o=l?Math.max(n,i):0,y=ut(e.waterLevel),v=l?Ns(y??a,a,o):0,S=l?Math.max((o-a)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:a,max:o,step:S,value:v,displayValue:l?`${Os(v)} m`:"先捕捉",disabled:!l,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"floodSpeed",label:"洪水速度",type:"range",min:l?Math.max((o-a)/100,.01):.1,max:l?Math.max(o-a,1):50,step:l?Math.max((o-a)/1e3,.01):.5,value:e.floodSpeed??(l?(o-a)/10:5),displayValue:(()=>{const M=o-a,C=e.floodSpeed??(l?M/10:5),u=l&&C>0?M/C:0;return l?`${Number(C).toFixed(1)} m/s（${u.toFixed(1)}s）`:"先捕捉"})(),disabled:!l||!!t.floodSimActive,tooltip:"洪水模拟水位上涨速度。默认值域÷10（10s 完成），可自定义。范围：100s ~ 1s 完成。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function ut(e){const t=Number(e);return Number.isFinite(t)?t:null}function Ns(e,t,n){return Math.max(t,Math.min(n,e))}function Os(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const Hs={low:{label:"低"},medium:{label:"中"},high:{label:"高"},ultra:{label:"超高"}};function Bs(e={},t){return[{id:"atmosphereEnabled",label:"大气效果",type:"toggle",value:!t,tooltip:"启用 Tellux 大气渲染系统（日夜过渡、月光、体积云、星空）"},{id:"dayNightEnabled",label:"日夜过渡",type:"toggle",value:e.dayNightEnabled!==!1,disabled:t,tooltip:"基于太阳高度角的平滑日夜过渡效果"},{id:"moonLightEnabled",label:"月光",type:"toggle",value:e.moonLightEnabled!==!1,disabled:t,tooltip:"夜间月光照明效果"},{id:"moonLightIntensity",label:"月光强度",type:"range",min:0,max:1,step:.01,value:e.moonLightIntensity??.18,displayValue:Number(e.moonLightIntensity??.18).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"ambientIntensity",label:"环境光",type:"range",min:0,max:1,step:.01,value:e.ambientIntensity??.08,displayValue:Number(e.ambientIntensity??.08).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"starsEnabled",label:"星空",type:"toggle",value:e.starsEnabled!==!1,disabled:t,tooltip:"基于高度的星空可见性"},{id:"starsIntensity",label:"星空强度",type:"range",min:0,max:5,step:.1,value:e.starsIntensity??1,displayValue:Number(e.starsIntensity??1).toFixed(1),disabled:t||!e.starsEnabled}]}function Us(e={},t){return[{id:"cloudsEnabled",label:"启用体积云",type:"toggle",value:e.cloudsEnabled===!0,tooltip:"基于 PostProcessStage 的体积云 Ray Marching 渲染"},{id:"cloudQuality",label:"质量预设",type:"select",value:e.cloudQuality??"medium",options:Object.entries(Hs).map(([n,i])=>({value:n,label:i.label})),disabled:t||!e.cloudsEnabled},{id:"cloudCoverage",label:"云覆盖率",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.3,displayValue:`${Math.round((e.cloudCoverage??.3)*100)}%`,disabled:t||!e.cloudsEnabled},{id:"cloudBottom",label:"云底高度",type:"range",min:500,max:5e3,step:50,value:e.cloudBottom??1500,displayValue:`${Math.round(e.cloudBottom??1500)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudTop",label:"云顶高度",type:"range",min:1e3,max:1e4,step:100,value:e.cloudTop??2150,displayValue:`${Math.round(e.cloudTop??2150)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudSpeed",label:"移动速度",type:"range",min:0,max:.01,step:1e-4,value:e.cloudSpeed??.001,displayValue:Number(e.cloudSpeed??.001).toFixed(4),disabled:t||!e.cloudsEnabled},{id:"cloudWindDirection",label:"风向",type:"range",min:0,max:360,step:1,value:e.cloudWindDirection??90,displayValue:`${Math.round(e.cloudWindDirection??90)}°`,disabled:t||!e.cloudsEnabled},{id:"cloudScattering",label:"散射系数",type:"range",min:0,max:3,step:.01,value:e.cloudScattering??1,displayValue:Number(e.cloudScattering??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAbsorption",label:"吸收系数",type:"range",min:0,max:1,step:.01,value:e.cloudAbsorption??0,displayValue:Number(e.cloudAbsorption??0).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropy1",label:"前向散射",type:"range",min:-1,max:1,step:.01,value:e.cloudAnisotropy1??.7,displayValue:Number(e.cloudAnisotropy1??.7).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropy2",label:"后向散射",type:"range",min:-1,max:1,step:.01,value:e.cloudAnisotropy2??-.2,displayValue:Number(e.cloudAnisotropy2??-.2).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropyMix",label:"散射混合比",type:"range",min:0,max:1,step:.01,value:e.cloudAnisotropyMix??.5,displayValue:Number(e.cloudAnisotropyMix??.5).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudSkyLight",label:"天空光",type:"range",min:0,max:3,step:.05,value:e.cloudSkyLight??1,displayValue:Number(e.cloudSkyLight??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudGroundBounce",label:"地面反弹光",type:"range",min:0,max:2,step:.05,value:e.cloudGroundBounce??1,displayValue:Number(e.cloudGroundBounce??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudPowder",label:"Powder 效应",type:"range",min:0,max:2,step:.05,value:e.cloudPowder??.8,displayValue:Number(e.cloudPowder??.8).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudDensityScale",label:"密度缩放",type:"range",min:0,max:3,step:.01,value:e.cloudDensityScale??1,displayValue:Number(e.cloudDensityScale??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudShapeAmount",label:"形状强度",type:"range",min:0,max:2,step:.01,value:e.cloudShapeAmount??1,displayValue:Number(e.cloudShapeAmount??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudDetailAmount",label:"细节强度",type:"range",min:0,max:1,step:.01,value:e.cloudDetailAmount??.5,displayValue:Number(e.cloudDetailAmount??.5).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudTurbulence",label:"湍流位移",type:"range",min:0,max:1e3,step:10,value:e.cloudTurbulence??350,displayValue:`${Math.round(e.cloudTurbulence??350)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudHazeDensity",label:"雾霾密度",type:"range",min:0,max:.001,step:1e-5,value:e.cloudHazeDensity??3e-5,displayValue:Number(e.cloudHazeDensity??3e-5).toFixed(5),disabled:t||!e.cloudsEnabled},{id:"cloudHazeExponent",label:"雾霾衰减",type:"range",min:0,max:.01,step:1e-4,value:e.cloudHazeExponent??.001,displayValue:Number(e.cloudHazeExponent??.001).toFixed(4),disabled:t||!e.cloudsEnabled}]}function Ws(e={}){return[{id:"enableLighting",label:"日照",type:"toggle",value:e.enableLighting!==!1,tooltip:"Cesium globe.enableLighting：启用日照贴图"},{id:"showGroundAtmosphere",label:"地面大气",type:"toggle",value:e.showGroundAtmosphere!==!1,tooltip:"globe.showGroundAtmosphere：地面大气光晕"},{id:"dynamicAtmosphereLighting",label:"动态光照",type:"toggle",value:e.dynamicAtmosphereLighting!==!1},{id:"atmosphereLightIntensity",label:"大气光强",type:"range",min:0,max:25,step:.5,value:e.atmosphereLightIntensity??5.5,displayValue:Number(e.atmosphereLightIntensity??5.5).toFixed(1)},{id:"fogEnabled",label:"雾效",type:"toggle",value:e.fogEnabled!==!1},{id:"fogDensity",label:"雾密度",type:"range",min:1e-5,max:.001,step:1e-5,value:e.fogDensity??12e-5,displayValue:Number(e.fogDensity??12e-5).toFixed(5),disabled:!e.fogEnabled},{id:"sunShow",label:"太阳",type:"toggle",value:e.sunShow!==!1},{id:"moonShow",label:"月亮",type:"toggle",value:e.moonShow!==!1},{id:"skyBoxShow",label:"星空盒",type:"toggle",value:e.skyBoxShow!==!1}]}function Gs(e={},t=!1){return[{id:"elevation",label:"高度角",type:"range",min:2,max:80,step:.1,value:e.elevation??30,displayValue:Number(e.elevation??30).toFixed(1),disabled:t},{id:"azimuth",label:"方位角",type:"range",min:-180,max:180,step:.1,value:e.azimuth??150,displayValue:Number(e.azimuth??150).toFixed(1),disabled:t},{id:"clarity",label:"清澈度",type:"range",min:.03,max:.4,step:.005,value:e.clarity??.085,displayValue:Number(e.clarity??.085).toFixed(3),tooltip:"越小越清澈(Beer-Lambert 密度)",disabled:t},{id:"causticStrength",label:"焦散强度",type:"range",min:0,max:2,step:.05,value:e.causticStrength??.9,displayValue:Number(e.causticStrength??.9).toFixed(2),disabled:t},{id:"waveHeight",label:"浪高",type:"range",min:0,max:1.5,step:.05,value:e.waveHeight??.5,displayValue:Number(e.waveHeight??.5).toFixed(2),disabled:t},{id:"foamWidth",label:"泡沫宽度",type:"range",min:0,max:8,step:.1,value:e.foamWidth??2.4,displayValue:Number(e.foamWidth??2.4).toFixed(1),disabled:t},{id:"reflection",label:"反射强度",type:"range",min:0,max:1,step:.02,value:e.reflection??.38,displayValue:Number(e.reflection??.38).toFixed(2),disabled:t},{id:"waterColor",label:"远处浅水色",type:"color",value:e.waterColor??"#2bb3c4",disabled:t},{id:"cloudCoverage",label:"云量",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.58,displayValue:Number(e.cloudCoverage??.58).toFixed(2),disabled:t},{id:"lightningEnabled",label:"闪电开关",type:"toggle",value:e.lightningEnabled!==!1,disabled:t},{id:"lightningInterval",label:"闪电间隔(秒)",type:"range",min:.4,max:8,step:.1,value:e.lightningInterval??2,displayValue:Number(e.lightningInterval??2).toFixed(1),disabled:t||e.lightningEnabled===!1}]}const ni={low:{label:"低",maxIterationCount:64,minStepSize:200,maxStepSize:2e3,maxRayDistance:8e4,perspectiveStepScale:1.02,minDensity:1e-4,minTransmittance:.1,multiScatteringOctaves:2,maxIterationCountToSun:0,maxIterationCountToGround:0,minSecondaryStepSize:200,shapeDetail:!1,turbulence:!1},medium:{label:"中",maxIterationCount:128,minStepSize:100,maxStepSize:1500,maxRayDistance:15e4,perspectiveStepScale:1.015,minDensity:1e-4,minTransmittance:.05,multiScatteringOctaves:4,maxIterationCountToSun:1,maxIterationCountToGround:0,minSecondaryStepSize:150,shapeDetail:!0,turbulence:!1},high:{label:"高",maxIterationCount:256,minStepSize:50,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.01,minDensity:1e-5,minTransmittance:.01,multiScatteringOctaves:6,maxIterationCountToSun:2,maxIterationCountToGround:1,minSecondaryStepSize:100,shapeDetail:!0,turbulence:!0},ultra:{label:"超高",maxIterationCount:512,minStepSize:20,maxStepSize:800,maxRayDistance:25e4,perspectiveStepScale:1.008,minDensity:1e-6,minTransmittance:.005,multiScatteringOctaves:8,maxIterationCountToSun:3,maxIterationCountToGround:2,minSecondaryStepSize:50,shapeDetail:!0,turbulence:!0}};function Je(e){return ni[e]??ni.medium}const $s={enabled:!1,quality:"medium",minHeight:1500,maxHeight:2150,coverage:.3,windSpeed:.001,windDirection:90,scatteringCoefficient:1,absorptionCoefficient:0,scatterAnisotropy1:.7,scatterAnisotropy2:-.2,scatterAnisotropyMix:.5,skyLightScale:1,groundBounceScale:1,powderScale:.8,densityScale:1,shapeAmount:1,shapeDetailAmount:.5,turbulenceDisplacement:350,hazeDensityScale:3e-5,hazeExponent:.001,nightMoonIntensity:.18,nightAmbientIntensity:.08,nightColor:"#9bbcff",dayLightFactor:1};function js(e){const t=e.replace("#",""),n=parseInt(t.substring(0,2),16)/255,i=parseInt(t.substring(2,4),16)/255,l=parseInt(t.substring(4,6),16)/255;return[n,i,l]}function qs(e){return e*Math.PI/180}function Vs(e){const t=e;return{u_enabled:()=>t().enabled,u_minHeight:()=>t().minHeight,u_maxHeight:()=>t().maxHeight,u_coverage:()=>t().coverage,u_windSpeed:()=>t().windSpeed,u_windDirection:()=>{const n=qs(t().windDirection);return[Math.cos(n),Math.sin(n)]},u_scatteringCoefficient:()=>t().scatteringCoefficient,u_absorptionCoefficient:()=>t().absorptionCoefficient,u_scatterAnisotropy1:()=>t().scatterAnisotropy1,u_scatterAnisotropy2:()=>t().scatterAnisotropy2,u_scatterAnisotropyMix:()=>t().scatterAnisotropyMix,u_skyLightScale:()=>t().skyLightScale,u_groundBounceScale:()=>t().groundBounceScale,u_powderScale:()=>t().powderScale,u_densityScale:()=>t().densityScale,u_shapeAmount:()=>t().shapeAmount,u_shapeDetailAmount:()=>t().shapeDetailAmount,u_turbulenceDisplacement:()=>t().turbulenceDisplacement,u_hazeDensityScale:()=>t().hazeDensityScale,u_hazeExponent:()=>t().hazeExponent,u_nightMoonIntensity:()=>t().nightMoonIntensity,u_nightAmbientIntensity:()=>t().nightAmbientIntensity,u_nightColor:()=>js(t().nightColor),u_dayLightFactor:()=>t().dayLightFactor,u_maxIterationCount:()=>Je(t().quality).maxIterationCount,u_minStepSize:()=>Je(t().quality).minStepSize,u_maxStepSize:()=>Je(t().quality).maxStepSize,u_maxRayDistance:()=>Je(t().quality).maxRayDistance,u_perspectiveStepScale:()=>Je(t().quality).perspectiveStepScale,u_minDensity:()=>Je(t().quality).minDensity,u_minTransmittance:()=>Je(t().quality).minTransmittance,u_multiScatteringOctaves:()=>Je(t().quality).multiScatteringOctaves,u_maxIterationCountToSun:()=>Je(t().quality).maxIterationCountToSun,u_maxIterationCountToGround:()=>Je(t().quality).maxIterationCountToGround,u_minSecondaryStepSize:()=>Je(t().quality).minSecondaryStepSize,u_shapeDetailEnabled:()=>Je(t().quality).shapeDetail?1:0,u_turbulenceEnabled:()=>Je(t().quality).turbulence?1:0}}const Xs=`// ============================================================
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
`;function mt(){const e=window.Cesium;if(!e)throw new Error("[CloudManager] window.Cesium 未就绪，请确保 Cesium CDN 已加载");return e}const Ys={shape:"/textures/cloud/shape.bin",shapeDetail:"/textures/cloud/shape_detail.bin",weather:"/textures/cloud/local_weather.png",turbulence:"/textures/cloud/turbulence.png"};class Ks{constructor(t,n){at(this,"viewer");at(this,"stage",null);at(this,"textures",{shape:null,shapeDetail:null,weather:null,turbulence:null});at(this,"_values",{...$s});at(this,"_initialized",!1);at(this,"_destroyed",!1);at(this,"_texturePaths");at(this,"_startTime",0);this.viewer=t,this._texturePaths={...Ys,...n==null?void 0:n.texturePaths},n!=null&&n.quality&&(this._values.quality=n.quality),(n==null?void 0:n.enabled)!==void 0&&(this._values.enabled=n.enabled)}async init(){if(this._initialized||this._destroyed)return;const t=this.viewer.scene;if(!t||t.isDestroyed())return;this._startTime=performance.now()/1e3;const n=mt(),i=t.context,l=new n.Sampler({minificationFilter:n.TextureMinificationFilter.LINEAR,magnificationFilter:n.TextureMagnificationFilter.LINEAR,wrapS:n.TextureWrap.REPEAT,wrapT:n.TextureWrap.REPEAT}),a=()=>new n.Texture({context:i,source:{arrayBufferView:new Uint8Array([128,128,128,255]),width:1,height:1},pixelFormat:n.PixelFormat.RGBA,pixelDatatype:n.PixelDatatype.UNSIGNED_BYTE,sampler:l});try{this.textures.shape=a(),this.textures.shapeDetail=a(),this.textures.weather=a(),this.textures.turbulence=a()}catch{for(const y of[this.textures.shape,this.textures.shapeDetail,this.textures.weather,this.textures.turbulence])if(y)try{y.destroy()}catch{}this.textures.shape=null,this.textures.shapeDetail=null,this.textures.weather=null,this.textures.turbulence=null;return}this.stage=new n.PostProcessStage({fragmentShader:Xs,uniforms:this.buildStageUniforms()}),this.stage.enabled=!1,t.postProcessStages.add(this.stage),await this.loadTextures(),!this._destroyed&&(this._initialized=!0,this.stage&&this._values.enabled&&(this.stage.enabled=!0))}destroy(){if(this._destroyed=!0,this.stage){const t=this.viewer.scene;t&&!t.isDestroyed()&&(t.postProcessStages.remove(this.stage),this.stage.destroy()),this.stage=null}for(const t of Object.keys(this.textures))if(this.textures[t]){try{this.textures[t].destroy()}catch{}this.textures[t]=null}this._initialized=!1}show(){this._values.enabled=!0,this.stage&&(this.stage.enabled=!0)}hide(){this._values.enabled=!1,this.stage&&(this.stage.enabled=!1)}toggle(){this._values.enabled?this.hide():this.show()}get initialized(){return this._initialized}get visible(){return this._values.enabled}get values(){return this._values}updateUniforms(t){Object.assign(this._values,t)}setQuality(t){this._values.quality=t}getPresetDetail(){return Je(this._values.quality)}buildStageUniforms(){return{...Vs(()=>this._values),...{u_shapeTexture:()=>this.textures.shape,u_shapeDetailTexture:()=>this.textures.shapeDetail,u_weatherTexture:()=>this.textures.weather,u_turbulenceTexture:()=>this.textures.turbulence},...{u_time:()=>performance.now()/1e3-this._startTime},...{u_shapeRepeat:()=>[3e-4,3e-4,3e-4],u_shapeDetailRepeat:()=>[.006,.006,.006],u_weatherRepeat:()=>[1,1],u_shapeDepth:()=>128,u_shapeDetailDepth:()=>32},...{u_cameraPosition:()=>{var S,M,C;const y=mt();return((C=(M=(S=this.viewer)==null?void 0:S.scene)==null?void 0:M.camera)==null?void 0:C.positionWC)??new y.Cartesian3(0,0,0)},u_inverseProjection:()=>{var S,M,C,u;const y=mt();return((u=(C=(M=(S=this.viewer)==null?void 0:S.scene)==null?void 0:M.context)==null?void 0:C.uniformState)==null?void 0:u.inverseProjectionMatrix)??y.Matrix4.IDENTITY},u_inverseView:()=>{var S,M,C,u;const y=mt();return((u=(C=(M=(S=this.viewer)==null?void 0:S.scene)==null?void 0:M.context)==null?void 0:C.uniformState)==null?void 0:u.inverseViewMatrix)??y.Matrix4.IDENTITY},u_sunDirection:()=>{var S,M,C,u;const y=mt();return((u=(C=(M=(S=this.viewer)==null?void 0:S.scene)==null?void 0:M.context)==null?void 0:C.uniformState)==null?void 0:u.sunDirectionWC)??new y.Cartesian3(0,0,1)},u_ellipsoidRadii:()=>{var S,M,C,u;const y=mt();return((u=(C=(M=(S=this.viewer)==null?void 0:S.scene)==null?void 0:M.globe)==null?void 0:C.ellipsoid)==null?void 0:u.radii)??new y.Cartesian3(6378137,6378137,6356752314245179e-9)}}}}async loadTextures(){const t=[this.load3DBinaryTexture("shape",this._texturePaths.shape,128),this.load3DBinaryTexture("shapeDetail",this._texturePaths.shapeDetail,32),this.load2DImageTexture("weather",this._texturePaths.weather),this.load2DImageTexture("turbulence",this._texturePaths.turbulence)];if(await Promise.allSettled(t),this._destroyed){for(const n of Object.keys(this.textures))if(this.textures[n]){try{this.textures[n].destroy()}catch{}this.textures[n]=null}}}async load3DBinaryTexture(t,n,i){var a;if(!n)return;const l=(a=this.viewer.scene)==null?void 0:a.context;if(l)try{const o=await fetch(n);if(!o.ok)throw new Error(`HTTP ${o.status}`);const y=await o.arrayBuffer(),v=i*i*i;if(y.byteLength<v)return;const S=new Uint8Array(y,0,v),M=mt(),C=new M.Texture({context:l,source:{arrayBufferView:S,width:i,height:i*i},pixelFormat:M.PixelFormat.RED,pixelDatatype:M.PixelDatatype.UNSIGNED_BYTE,sampler:new M.Sampler({minificationFilter:M.TextureMinificationFilter.LINEAR,magnificationFilter:M.TextureMagnificationFilter.LINEAR,wrapS:M.TextureWrap.REPEAT,wrapT:M.TextureWrap.REPEAT})});if(this.textures[t])try{this.textures[t].destroy()}catch{}this.textures[t]=C}catch{}}async load2DImageTexture(t,n){var l;if(!n)return;const i=(l=this.viewer.scene)==null?void 0:l.context;if(i)try{const a=await fetch(n);if(!a.ok)throw new Error(`HTTP ${a.status}`);const o=await a.blob(),y=await createImageBitmap(o),v=mt(),S=new v.Texture({context:i,source:y,sampler:new v.Sampler({minificationFilter:v.TextureMinificationFilter.LINEAR,magnificationFilter:v.TextureMagnificationFilter.LINEAR,wrapS:v.TextureWrap.REPEAT,wrapT:v.TextureWrap.REPEAT})});if(y.close(),this.textures[t])try{this.textures[t].destroy()}catch{}this.textures[t]=S}catch{}}}function Zs(e){const{viewer:t,cloudParams:n,atmosphereParams:i,config:l}=e;let a=null,o=null,y=!1;async function v(){if(!y&&!(a!=null&&a.initialized)){if(o){await o;return}a=new Ks(t,{enabled:!!n.value.cloudsEnabled,quality:n.value.cloudQuality||"medium",...l}),o=a.init();try{await o}catch{a=null}finally{o=null}if(y&&a){a.destroy(),a=null;return}a!=null&&a.initialized&&S(n.value)}}function S(u){if(!(a!=null&&a.initialized))return;"cloudsEnabled"in u&&(u.cloudsEnabled?a.show():a.hide());const w={};"cloudCoverage"in u&&(w.coverage=Number(u.cloudCoverage)||.3),"cloudSpeed"in u&&(w.windSpeed=Number(u.cloudSpeed)||.001),"cloudBottom"in u&&(w.minHeight=Number(u.cloudBottom)||1500),"cloudTop"in u&&(w.maxHeight=Number(u.cloudTop)||2150),"cloudWindDirection"in u&&(w.windDirection=Number(u.cloudWindDirection)||90),"cloudScattering"in u&&(w.scatteringCoefficient=Number(u.cloudScattering)||1),"cloudAbsorption"in u&&(w.absorptionCoefficient=Number(u.cloudAbsorption)||0),"cloudAnisotropy1"in u&&(w.scatterAnisotropy1=Number(u.cloudAnisotropy1)||.7),"cloudAnisotropy2"in u&&(w.scatterAnisotropy2=Number(u.cloudAnisotropy2)||-.2),"cloudAnisotropyMix"in u&&(w.scatterAnisotropyMix=Number(u.cloudAnisotropyMix)||.5),"cloudSkyLight"in u&&(w.skyLightScale=Number(u.cloudSkyLight)||1),"cloudGroundBounce"in u&&(w.groundBounceScale=Number(u.cloudGroundBounce)||1),"cloudPowder"in u&&(w.powderScale=Number(u.cloudPowder)||.8),"cloudDensityScale"in u&&(w.densityScale=Number(u.cloudDensityScale)||1),"cloudShapeAmount"in u&&(w.shapeAmount=Number(u.cloudShapeAmount)||1),"cloudDetailAmount"in u&&(w.shapeDetailAmount=Number(u.cloudDetailAmount)||.5),"cloudTurbulence"in u&&(w.turbulenceDisplacement=Number(u.cloudTurbulence)||350),"cloudHazeDensity"in u&&(w.hazeDensityScale=Number(u.cloudHazeDensity)||3e-5),"cloudHazeExponent"in u&&(w.hazeExponent=Number(u.cloudHazeExponent)||.001),"cloudQuality"in u&&a.setQuality(u.cloudQuality),Object.keys(w).length>0&&a.updateUniforms(w)}const M=Ce(n,u=>{if(!y){if(!(a!=null&&a.initialized)){u.cloudsEnabled&&v();return}S(u)}},{deep:!0});let C;return i&&(C=Ce(i,u=>{if(y||!(a!=null&&a.initialized))return;const w={};"moonLightIntensity"in u&&(w.nightMoonIntensity=Number(u.moonLightIntensity)||0),"ambientIntensity"in u&&(w.nightAmbientIntensity=Number(u.ambientIntensity)||0),"dayNightEnabled"in u&&(w.dayLightFactor=u.dayNightEnabled?1:.5),Object.keys(w).length>0&&a.updateUniforms(w)},{deep:!0})),n.value.cloudsEnabled&&v(),function(){y=!0,M(),C==null||C(),a&&(a.destroy(),a=null),o=null}}const{getLayerIdByIndex:Js,getLayerIndexById:ii}=va({urlLayerOptions:fi,getLayerCategoryById:Mi,getLayerGroupById:Di}),cn=-90,Sn=1,vi=5e7;function Qs({getViewer:e,getCesium:t,onCameraViewSync:n,onBasemapRestore:i}={}){const l=xi(),a=Si();let o=null;function y(r){return ga(r,l.query)}function v(){const r=String(y(Tn)||"").trim(),c=vt(y("lng")),f=vt(y("lat")),d=el(y("z")),x=ya(r);if(x&&c!==null&&f!==null&&d!==null){const s={lng:c,lat:f,height:d,...x};if(ai(s))return s}const p=ba(r);return ai(p)?p:c===null||f===null||d===null||c<-180||c>180||f<-90||f>90?null:{lng:c,lat:f,height:d,heading:vt(y("heading"))??0,pitch:vt(y("pitch"))??cn,roll:vt(y("roll"))??0}}function S({duration:r=0}={}){const c=e==null?void 0:e(),f=t==null?void 0:t(),d=v();if(!(c!=null&&c.camera)||!f||!d)return!1;const x=f.Cartesian3.fromDegrees(d.lng,d.lat,d.height),p={heading:on(f,d.heading??0),pitch:on(f,tl(d.pitch??cn)),roll:on(f,d.roll??0)};return Number(r)>0?(c.camera.flyTo({destination:x,orientation:p,duration:Number(r)}),!0):(c.camera.setView({destination:x,orientation:p}),!0)}function M(r){if(!r)return null;const c=ii(r);if(c===null)return null;const f={view:Yt,l:String(c)};return P(f),String(c)}function C(){const r=vt(y("l"));if(r===null)return null;const c=Js(r);return c&&(i==null||i(c)),c}function u({initialSync:r=!1,getActivePresetId:c}={}){const f=T();if(!(!(f!=null&&f.moveEnd)||o)&&(o=f.moveEnd.addEventListener(()=>{const d=c==null?void 0:c();D({activePresetId:d})}),r)){const d=c==null?void 0:c();D({activePresetId:d})}}function w(){typeof o=="function"&&o(),o=null}function D({activePresetId:r}={}){const c=t==null?void 0:t(),f=T();if(!c||!(f!=null&&f.position))return;const d=c.Cartographic.fromCartesian(f.position);if(!d)return;const x=c.Math.toDegrees(d.longitude),p=c.Math.toDegrees(d.latitude),s=Number(d.height),m=c.Math.toDegrees(Number(f.heading)||0),F=c.Math.toDegrees(Number(f.pitch)||0),z=c.Math.toDegrees(Number(f.roll)||0);if(!Number.isFinite(x)||!Number.isFinite(p)||!Number.isFinite(s))return;const h=Math.max(Sn,s),L=pa({heading:m,pitch:F,roll:z});if(!L||L==="0")return;const R={view:Yt,camera:{lng:x,lat:p,height:h,heading:m,pitch:F,roll:z}},_={view:Yt,[Tn]:L,lng:ri(x,6),lat:ri(p,6),z:nl(h)},I=r;if(I){const B=ii(I);B!==null&&(_.l=String(B))}P(_),n==null||n(R)}function T(){var c;const r=e==null?void 0:e();return(r==null?void 0:r.camera)||((c=r==null?void 0:r.scene)==null?void 0:c.camera)||null}function E(r,c){const f=Object.keys(r).filter(x=>r[x]!==void 0&&r[x]!==null&&r[x]!==""),d=Object.keys(c).filter(x=>c[x]!==void 0&&c[x]!==null&&c[x]!=="");return f.length!==d.length?!1:d.every(x=>String(r[x]??"")===String(c[x]??""))}function P(r){const c={...Nn(l.query),...r};Li.forEach(d=>{d in r||delete c[d]}),Object.keys(c).forEach(d=>{const x=c[d];x==null||x===""?delete c[d]:c[d]=String(x)});const f=Nn(l.query);E(f,c)||a.replace({path:l.path||"/home",query:c}).catch(()=>{})}return{restoreCameraFromUrl:S,restoreBasemapFromUrl:C,syncBasemapToUrl:M,bindCameraViewSync:u,cleanupCameraViewSync:w}}function vt(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function el(e){const t=vt(e);return t===null||t<Sn||t>vi?null:t}function ai(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),i=Number(e.height),l=Number(e.heading),a=Number(e.pitch),o=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(i)&&i>=Sn&&i<=vi&&Number.isFinite(l)&&Number.isFinite(a)&&a>=-90&&a<=90&&Number.isFinite(o)}function tl(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):cn}function ri(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function nl(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function on(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const Ve={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},il=new Float32Array([-1,-1,1,-1,1,1,-1,1]),al=new Float32Array([0,0,1,0,1,1,0,1]),rl=new Uint16Array([0,1,2,0,2,3]);function pt(e,t,n){return Math.max(t,Math.min(n,e))}function Me(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function ol(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),i=Math.min(2048,n),l=Math.max(1,Math.floor(e)),a=Math.sqrt(l),o=Math.log2(a),y=Number.isFinite(o)?Math.round(o):4;let v=Math.pow(2,y);return v=pt(v,16,i),v}function sl(e){const t=e*e,n=new Float32Array(t*4);for(let i=0;i<t;i+=1){const l=i*4;n[l]=Math.random(),n[l+1]=Math.random(),n[l+2]=Math.random(),n[l+3]=Math.random()}return n}function ll(e){return new Float32Array(e*e*4)}function cl(e,t,n,i,l){const a=t.createTexture();if(!a)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,a),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,i,0,t.RGBA,t.FLOAT,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let o=!1;return{_context:e,_texture:a,_target:t.TEXTURE_2D,_width:n,_height:i,destroy(){o||(t.deleteTexture(a),o=!0)}}}class ul{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const i={...Ve,...n};this.speedFactor=Me(i.speedFactor,Ve.speedFactor),this.cullSpeedMin=Me(i.cullSpeedMin,Ve.cullSpeedMin),this.cullSpeedMax=Me(i.cullSpeedMax,Ve.cullSpeedMax),this.windSpeedMin=Me(i.windSpeedMin,Ve.windSpeedMin),this.windSpeedMax=Me(i.windSpeedMax,Ve.windSpeedMax),this.arrowLength=Me(i.arrowLength,Ve.arrowLength),this.trailLength=Me(i.trailLength,Ve.trailLength),this.decaySpeed=Me(i.decaySpeed,Ve.decaySpeed),this.alphaFactor=Me(i.alphaFactor,Ve.alphaFactor),this.maxWindSpeed=Me(i.maxWindSpeed,Ve.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=Me(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=Me(t.longitude,NaN),i=Me(t.latitude,NaN),l=Array.isArray(t.altitude)?t.altitude:[],a=Array.isArray(t.sizeMesh)?t.sizeMesh:[],o=Array.isArray(t.count)?t.count:[],y=Array.isArray(t.hspeed)?t.hspeed:[],v=Array.isArray(t.hdir)?t.hdir:[],S=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(i))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const M=l.length;if(M<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(a.length!==M||o.length!==M)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const C=o.map(p=>Math.max(1,Math.floor(Me(p,1)))),u=a.map(p=>Math.max(1,Me(p,1))),w=l.map(p=>Me(p,0)),D=C.reduce((p,s)=>p+s*s,0);if(y.length<D||v.length<D||S.length<D)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=M,this.visibleLayerMin=0,this.visibleLayerMax=M-1,this._altitudes=w.slice(),this._maxNx=Math.max(...C),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*M;const T=new Float32Array(this._atlasWidth*this._atlasHeight*4);let E=0;for(let p=0;p<M;p+=1){const s=C[p],m=s;for(let F=0;F<m;F+=1)for(let z=0;z<s;z+=1){const h=E+F*s+z,L=((p*this._maxNy+F)*this._atlasWidth+z)*4,R=Number(y[h]),_=Number(v[h]),I=Number(S[h]);if(!(Number.isFinite(R)&&Number.isFinite(_))){T[L]=0,T[L+1]=0,T[L+2]=0,T[L+3]=0;continue}const $=_*Math.PI/180;T[L]=R*Math.sin($),T[L+1]=R*Math.cos($),T[L+2]=Number.isFinite(I)?I:0,T[L+3]=1}E+=s*m}this._createOrReplaceWindAtlasTexture(T);const P=Math.max(...u),r=this._maxNx*P,c=r/2/111320,f=i*Math.PI/180,d=Math.max(1e-6,Math.abs(Math.cos(f))),x=r/2/(111320*d);this._bounds={minLon:n-x,maxLon:n+x,minLat:i-c,maxLat:i+c,minHeight:Math.min(...w),maxHeight:Math.max(...w)},this._dataPointCount=D,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(Me(t,1))),i=ol(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&i===this._particleTextureSize||(this._particleTextureSize=i,this._particleCount=i*i,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=pt(Me(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const i=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(i)}setBounds(t,n,i,l){const a=Me(t,NaN),o=Me(n,NaN),y=Me(i,NaN),v=Me(l,NaN);if(!Number.isFinite(a)||!Number.isFinite(o)||!Number.isFinite(y)||!Number.isFinite(v))return;const S=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};S.minLon=Math.min(a,o),S.maxLon=Math.max(a,o),S.minLat=Math.min(y,v),S.maxLat=Math.max(y,v),this._bounds=S,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const l=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[l],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=l,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=cl(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,i=sl(n),l=ll(n);for(let a=0;a<2;a+=1){this._particlePositionTextures[a]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:i},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[a]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:l},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[a]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[a],this._velocityTextures[a]],destroyAttachments:!1});const o=this._framebuffers[a]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,o),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:il,usage:t.BufferUsage.STATIC_DRAW}),i=t.Buffer.createVertexBuffer({context:this._context,typedArray:al,usage:t.BufferUsage.STATIC_DRAW}),l=t.Buffer.createIndexBuffer({context:this._context,typedArray:rl,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:i,componentsPerAttribute:2}],indexBuffer:l})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let i=0;i<n.length;i+=1)n[i]=i;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:i,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:t.Pass.OPAQUE})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=pt(Math.floor(Me(this.visibleLayerMin,0)),0,this._layerCount-1),n=pt(Math.floor(Me(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const i=Math.max(1e-4,Me(this.maxWindSpeed,Ve.maxWindSpeed)),l=pt(Me(t,0)/i,0,1),a=pt(Me(n,i)/i,0,1);return{min:Math.min(l,a),max:Math.max(l,a)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>Me(this.speedFactor,Ve.speedFactor),maxWindSpeed:()=>Math.max(1e-4,Me(this.maxWindSpeed,Ve.maxWindSpeed)),decaySpeed:()=>pt(Me(this.decaySpeed,Ve.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>Me(this.arrowLength,Ve.arrowLength),trailLength:()=>Me(this.trailLength,Ve.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>pt(Me(this.alphaFactor,Ve.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function dl({getViewer:e,getCesium:t,message:n}){const i=Q(null),l=Q({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function a(){var M,C;const S=e==null?void 0:e();if(i.value){try{(C=(M=S==null?void 0:S.scene)==null?void 0:M.primitives)==null||C.remove(i.value)}catch{}i.value.destroy(),i.value=null}}function o(){const S=e==null?void 0:e(),M=t==null?void 0:t();if(!S||!M){n.error("Cesium 尚未初始化");return}a();const C=hl(M);i.value=new ul(S,{maxWindSpeed:20,cesium:M,speedFactor:l.value.speedFactor,arrowLength:l.value.arrowLength,trailLength:l.value.trailLength,alphaFactor:l.value.alphaFactor}),i.value.loadData(C),S.scene.primitives.add(i.value),i.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function y(){i.value&&(i.value.speedFactor=l.value.speedFactor,i.value.arrowLength=l.value.arrowLength,i.value.trailLength=l.value.trailLength,i.value.alphaFactor=l.value.alphaFactor)}function v(S,M){return S in l.value?(l.value={...l.value,[S]:Number(M)},y(),!0):!1}return{wind2D:i,windParams:l,clearWind2D:a,loadSimulatedWind:o,setWindParam:v}}function hl(e){const l=[0,2e3,5e3,1e4,15e3],a=[3e4,3e4,25e3,25e3,2e4],o=[30,30,25,25,20],y=o.reduce((u,w)=>u+w*w,0),v=new Array(y),S=new Array(y),M=new Array(y);let C=0;for(let u=0;u<5;u++){const w=o[u],D=o[u],T=a[u];for(let E=0;E<D;E++)for(let P=0;P<w;P++){const r=C+E*w+P,c=(P-w/2)*(T/111320),f=(E-D/2)*(T/111320/Math.cos(e.Math.toRadians(35))),x=Math.atan2(f,c)+Math.PI/2+.2*Math.sin(P*.5)*Math.cos(E*.5);S[r]=e.Math.toDegrees(x)%360;const p=Math.sqrt(c*c+f*f),m=Math.max(0,1-p/15);v[r]=(5+u*2)*m+2*Math.random(),M[r]=.5*Math.sin(P*.3)*Math.cos(E*.3)}C+=w*D}return{longitude:104,latitude:35,altitude:l,sizeMesh:a,count:o,hspeed:v,hdir:S,vspeed:M}}const Pt=Object.freeze({LOADING:"loading",READY:"ready",ERROR:"error"});function un(e){if(!e)return null;if(Array.isArray(e)){const[i,l,a=0]=e;return typeof i!="number"||typeof l!="number"?null:{lng:i,lat:l,height:a}}const t=e.longitude??e.lng,n=e.latitude??e.lat;return typeof t!="number"||typeof n!="number"?null:{lng:t,lat:n,height:e.height??0}}function oi(e,t){const n=un(t.coordinates);if(!n)return null;const i=e.Cartesian3.fromDegrees(n.lng,n.lat,n.height),l=new e.HeadingPitchRoll(e.Math.toRadians(t.heading??0),e.Math.toRadians(t.pitch??0),e.Math.toRadians(t.roll??0)),a=e.Transforms.headingPitchRollToFixedFrame(i,l),o=t.scale;if(o!==void 0&&o!==1){let y=1,v=1,S=1;typeof o=="number"?y=v=S=o:typeof o=="object"&&(y=o.x??1,v=o.y??1,S=o.z??1);const M=e.Matrix4.fromScale(new e.Cartesian3(y,v,S));e.Matrix4.multiply(a,M,a)}return a}function fl({getViewer:e,getCesium:t,message:n}){const i=new Map;let l=0;const a=Q([]),o=Re(()=>a.value.filter(d=>d.state===Pt.LOADING).length),y=Re(()=>a.value.filter(d=>d.state===Pt.READY).length),v=Re(()=>a.value.length);function S(){a.value=Array.from(i.values()).map(d=>({...d.entry}))}function M(){do l++;while(i.has(`model-${l}`));return`model-${l}`}async function C(d){var z,h,L;const x=e==null?void 0:e(),p=t==null?void 0:t();if(!x||!p)return(z=n==null?void 0:n.error)==null||z.call(n,"Cesium 尚未初始化，无法加载模型"),null;const s=d.id??M();if(i.has(s))return(h=n==null?void 0:n.error)==null||h.call(n,`模型 "${s}" 已存在，请使用其他 ID`),null;const m=un(d.coordinates),F={id:s,name:d.name??s,url:d.url,coordinates:m,heading:d.heading??0,pitch:d.pitch??0,roll:d.roll??0,scale:d.scale??1,state:Pt.LOADING,metadata:d.metadata??{},addedAt:Date.now(),errorMessage:null};i.set(s,{primitive:null,objectUrl:null,entry:F}),S();try{const R=oi(p,{coordinates:F.coordinates,heading:F.heading,pitch:F.pitch,roll:F.roll,scale:F.scale});if(!R)throw new Error("坐标无效，无法计算模型矩阵");const _={url:d.url,modelMatrix:R,minimumPixelSize:d.minimumPixelSize??64,maximumScale:2e4,scene:x.scene};let I;if(typeof p.Model.fromGltfAsync=="function")I=await p.Model.fromGltfAsync(_);else if(typeof p.Model.fromGltf=="function")I=p.Model.fromGltf(_);else throw new Error("当前 Cesium 版本不支持 Model API");x.scene.primitives.add(I);const B=i.get(s);B.primitive=I;const $=()=>{const X=i.get(s);if(X&&(X.entry.state=Pt.READY,S(),d.autoPlayAnimation!==!1))try{I.activeAnimations.addAll({loop:p.ModelAnimationLoop.REPEAT})}catch{}};return I.readyEvent?I.readyEvent.addEventListener($):$(),I.errorEvent&&I.errorEvent.addEventListener(X=>{const le=i.get(s);le&&(le.entry.state=Pt.ERROR,le.entry.errorMessage=(X==null?void 0:X.message)??"模型加载异常",S())}),S(),{...F}}catch(R){const _=i.get(s);return _!=null&&_.objectUrl&&URL.revokeObjectURL(_.objectUrl),i.delete(s),S(),(L=n==null?void 0:n.error)==null||L.call(n,`模型加载失败: ${R.message}`),null}}async function u(d,x={}){const p=URL.createObjectURL(d),s=await C({...x,url:p,name:x.name??d.name.replace(/\.(glb|gltf)$/i,"")});if(s){const m=i.get(s.id);m&&(m.objectUrl=p)}else URL.revokeObjectURL(p);return s}function w(d){var s;const x=e==null?void 0:e(),p=i.get(d);if(p){if(p.primitive&&x)try{x.scene.primitives.remove(p.primitive)}catch{}if((s=p.primitive)!=null&&s.destroy)try{p.primitive.destroy()}catch{}p.objectUrl&&URL.revokeObjectURL(p.objectUrl),i.delete(d),S()}}function D(d,x={}){const p=t==null?void 0:t(),s=i.get(d);if(!s||!p)return!1;const m=s.entry;if(x.coordinates&&(m.coordinates=un(x.coordinates)),x.heading!==void 0&&(m.heading=x.heading),x.pitch!==void 0&&(m.pitch=x.pitch),x.roll!==void 0&&(m.roll=x.roll),x.scale!==void 0&&(m.scale=x.scale),x.name&&(m.name=x.name),x.metadata&&(m.metadata={...m.metadata,...x.metadata}),s.primitive){const F=oi(p,{coordinates:m.coordinates,heading:m.heading,pitch:m.pitch,roll:m.roll,scale:m.scale});F&&(s.primitive.modelMatrix=F)}return S(),!0}function T(d,x={}){const p=e==null?void 0:e(),s=t==null?void 0:t(),m=i.get(d);if(!m||!p||!s)return;const F=m.entry.coordinates;if(!F)return;const{range:z=200,heading:h=0,pitch:L=-30,duration:R=2}=x,_=F.height+z*.3;p.camera.flyTo({destination:s.Cartesian3.fromDegrees(F.lng,F.lat,_),orientation:{heading:s.Math.toRadians(h),pitch:s.Math.toRadians(L),roll:0},duration:R})}function E(d,x,p={}){const s=i.get(d),m=t==null?void 0:t();if(!(!(s!=null&&s.primitive)||!m))try{const F=s.primitive,z=p.loop!==!1?m.ModelAnimationLoop.REPEAT:m.ModelAnimationLoop.NONE;if(x){let h=!1;const L=F.activeAnimations;for(let R=0;R<L.length;R++)if(L.get(R).name===x){L.get(R).playing=!0,h=!0;break}h||F.activeAnimations.add({name:x,loop:z,speedup:p.speedup??1})}else F.activeAnimations.addAll({loop:z,speedup:p.speedup??1})}catch{}}function P(d){const x=i.get(d);if(x!=null&&x.primitive)try{const p=x.primitive.activeAnimations;for(let s=0;s<p.length;s++)p.get(s).playing=!1}catch{}}function r(d){const x=i.get(d);return x?{...x.entry}:null}function c(d){var x;return((x=i.get(d))==null?void 0:x.primitive)??null}function f(){const d=Array.from(i.keys());for(const x of d)w(x);i.clear(),S()}return{models:a,loadingCount:o,readyCount:y,modelCount:v,addModel:C,addModelFromFile:u,removeModel:w,updateModel:D,flyToModel:T,playAnimation:E,stopAnimation:P,getModel:r,getModelPrimitive:c,dispose:f}}const sn=Object.freeze({linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2});class si{constructor(t={}){this.stiffness=t.stiffness??120,this.damping=t.damping??20,this.mass=t.mass??1,this.threshold=t.threshold??.01,this._current=0,this._target=0,this._velocity=0,this._active=!1}get current(){return this._current}get target(){return this._target}get active(){return this._active}setTarget(t){this._target=t,this._active=!0}setCurrent(t){this._current=t,this._velocity=0}update(t){if(!this._active)return this._current;const n=this._current-this._target,i=-this.stiffness*n,l=-this.damping*this._velocity,a=(i+l)/this.mass;return this._velocity+=a*t,this._current+=this._velocity*t,Math.abs(n)<this.threshold&&Math.abs(this._velocity)<this.threshold&&(this._current=this._target,this._velocity=0,this._active=!1),this._current}reset(){this._current=0,this._target=0,this._velocity=0,this._active=!1}}const _t=Object.freeze({IDLE:"idle",FLYING:"flying",CANCELLED:"cancelled"});function ml({getViewer:e,getCesium:t}){let n=0,i=null,l=null;const a=Q(_t.IDLE),o=Re(()=>i);function y(){l!==null&&(cancelAnimationFrame(l),l=null),i=null,a.value=_t.CANCELLED}function v(r){const c=e==null?void 0:e(),f=t==null?void 0:t();if(!c||!f)return null;r.cancelPrevious!==!1&&y();const d=E(f,r.destination);if(!d)return null;const x=c.camera,p=x.heading,s=x.pitch,m=x.roll,F=x.positionWC.clone(),z=r.orientation??{},h=f.Math.toRadians(z.heading??f.Math.toDegrees(p)),L=f.Math.toRadians(z.pitch??f.Math.toDegrees(s)),R=f.Math.toRadians(z.roll??f.Math.toDegrees(m));let _=d.clone();if(r.maximumHeight!==void 0){const fe=f.Cartographic.fromCartesian(d);fe.height>r.maximumHeight&&(_=f.Cartesian3.fromRadians(fe.longitude,fe.latitude,r.maximumHeight))}const I=r.easing??"easeInOutCubic",B=sn[I]??sn.easeInOutCubic,$=r.duration??2.5,X=++n;i=X,a.value=_t.FLYING;let le=null;function J(fe){var Te,Fe;if(i!==X)return;le===null&&(le=fe);const be=(fe-le)/1e3,ce=Math.min(be/$,1),O=B(ce),G=f.Cartesian3.lerp(F,_,O,new f.Cartesian3),U=P(p,h,O),he=s+(L-s)*O,Ae=m+(R-m)*O;x.setView({destination:G,orientation:{heading:U,pitch:he,roll:Ae}}),(Te=r.onTick)==null||Te.call(r,ce,G),ce<1?l=requestAnimationFrame(J):(l=null,i===X&&(i=null,a.value=_t.IDLE,(Fe=r.onComplete)==null||Fe.call(r)))}return l=requestAnimationFrame(J),X}function S(r,c,f=1e3,d={}){return v({...d,destination:{longitude:r,latitude:c,height:f}})}function M(r,c,f={}){const d=e==null?void 0:e(),x=t==null?void 0:t();if(!d||!x)return null;const p=x.Cartesian3.fromDegrees(r.longitude,r.latitude,r.height),s=x.Cartesian3.fromDegrees(c.longitude,c.latitude,c.height),m=x.Cartesian3.subtract(s,p,new x.Cartesian3);x.Cartesian3.normalize(m,m);const F=Math.atan2(m.x,m.y),z=Math.asin(m.z);return v({...f,destination:r,orientation:{heading:x.Math.toDegrees(F),pitch:x.Math.toDegrees(z),roll:0}})}function C(r,c={}){const f=e==null?void 0:e(),d=t==null?void 0:t();if(!f||!d)return null;const x=new d.Rectangle.fromDegrees(r.west,r.south,r.east,r.north),p=d.Rectangle.center(x),m=d.Math.toDegrees(x.east-x.west)*.8;return v({...c,destination:{longitude:d.Math.toDegrees(p.longitude),latitude:d.Math.toDegrees(p.latitude),height:Math.max(m*111e3,1e3)},orientation:{heading:0,pitch:-45,roll:0}})}function u(r){const c=e==null?void 0:e(),f=t==null?void 0:t();if(!c||!f)return null;y();const d=new si(r.spring),x=f.Cartographic.fromCartesian(c.camera.positionWC);d.setCurrent(x.height),d.setTarget(r.targetHeight);const p=++n;i=p,a.value=_t.FLYING;let s=null;function m(F){var R;if(i!==p)return;if(s===null){s=F;return}const z=(F-s)/1e3;s=F;const h=d.update(z),L=f.Cartesian3.fromRadians(x.longitude,x.latitude,h);c.camera.setView({destination:L,orientation:{heading:c.camera.heading,pitch:c.camera.pitch,roll:c.camera.roll}}),d.active?l=requestAnimationFrame(m):(l=null,i===p&&(i=null,a.value=_t.IDLE,(R=r.onComplete)==null||R.call(r)))}return l=requestAnimationFrame(m),p}function w(){const r=e==null?void 0:e(),c=t==null?void 0:t();if(!r||!c)return null;const f=c.Cartographic.fromCartesian(r.camera.positionWC);return{longitude:c.Math.toDegrees(f.longitude),latitude:c.Math.toDegrees(f.latitude),height:f.height,heading:c.Math.toDegrees(r.camera.heading),pitch:c.Math.toDegrees(r.camera.pitch),roll:c.Math.toDegrees(r.camera.roll)}}function D(r=6){const c=w();if(!c)return"--";const f=c.longitude>=0?"E":"W",d=c.latitude>=0?"N":"S";return`${Math.abs(c.longitude).toFixed(r)}°${f}, ${Math.abs(c.latitude).toFixed(r)}°${d}, ${c.height.toFixed(1)}m`}function T(){y()}function E(r,c){if(!c)return null;if(c instanceof r.Cartesian3)return c;if(Array.isArray(c)){const[x,p,s=0]=c;return r.Cartesian3.fromDegrees(x,p,s)}const f=c.longitude??c.lng,d=c.latitude??c.lat;return typeof f=="number"&&typeof d=="number"?r.Cartesian3.fromDegrees(f,d,c.height??0):null}function P(r,c,f){let d=c-r;for(;d>Math.PI;)d-=2*Math.PI;for(;d<-Math.PI;)d+=2*Math.PI;return r+d*f}return{flightState:a,currentFlightId:o,enhancedFlyTo:v,cancelFlight:y,flyToPosition:S,flyToAndLookAt:M,flyToRectangle:C,springToHeight:u,SpringController:si,getCameraState:w,getFormattedPosition:D,cleanup:T,EasingFunctions:sn}}function At(e,t){return{longitude:e.Math.toDegrees(t.longitude),latitude:e.Math.toDegrees(t.latitude),height:t.height}}function li(e,t){if(!t)return null;if(t instanceof e.Cartographic)return t;if(Array.isArray(t)){const[l,a,o=0]=t;return e.Cartographic.fromDegrees(l,a,o)}const n=t.longitude??t.lng,i=t.latitude??t.lat;return typeof n=="number"&&typeof i=="number"?e.Cartographic.fromDegrees(n,i,t.height??0):null}class pl{constructor(t,n){this.data=t,this.timestamp=n}isExpired(t){return Date.now()-this.timestamp>t}}function vl({getViewer:e,getCesium:t}){const n=new Map,i=300*1e3,l=5,a=Q(!1),o=Q(0);function y(P,r){return`${P.toFixed(l)},${r.toFixed(l)}`}function v(P,r){const c=y(P,r),f=n.get(c);return f&&!f.isExpired(i)?{...f.data}:(f&&n.delete(c),null)}function S(P){const r=y(P.longitude,P.latitude);n.set(r,new pl({...P},Date.now()))}function M(){n.clear()}function C(P){const r=e==null?void 0:e(),c=t==null?void 0:t();if(!r||!c||!P)return null;const{x:f,y:d}=P,x=r.camera.getPickRay(new c.Cartesian2(f,d));if(!x)return null;const p=r.scene.pickPositionSupported?r.scene.pickPosition(new c.Cartesian2(f,d)):r.scene.globe.pick(x,r.scene);if(!p){const m=r.scene.globe.ellipsoid,F=r.scene.camera.pickEllipsoid(new c.Cartesian2(f,d),m);if(!F)return null;const z=c.Cartographic.fromCartesian(F);return At(c,z)}const s=c.Cartographic.fromCartesian(p);return At(c,s)}async function u(P,r={}){const{maxRetries:c=3,retryDelay:f=200}=r;for(let d=0;d<c;d++){const x=C(P);if(x)return x;d<c-1&&await new Promise(p=>setTimeout(p,f))}return null}function w(P,r={}){const c=e==null?void 0:e(),f=t==null?void 0:t();if(!c||!f)return null;const d=li(f,P);if(!d)return null;const x=f.Math.toDegrees(d.longitude),p=f.Math.toDegrees(d.latitude);if(r.useCache!==!1){const s=v(x,p);if(s)return s}try{const s=r.terrainDetailLevel??0,m=[d],F=s===0?f.sampleTerrain(c.terrainProvider,0,m):f.sampleTerrainMostDetailed(c.terrainProvider,m);if(F&&F.length>0){const z=At(f,F[0]);return S(z),z}}catch{}return null}async function D(P,r={}){const c=e==null?void 0:e(),f=t==null?void 0:t();if(!c||!f||!(P!=null&&P.length))return[];a.value=!0,o.value=0;try{const d=[],x=[],p=[];for(let s=0;s<P.length;s++){const m=li(f,P[s]);if(!m){d.push(null);continue}const F=f.Math.toDegrees(m.longitude),z=f.Math.toDegrees(m.latitude);if(r.useCache!==!1&&!r.skipCached){const h=v(F,z);if(h){d.push(h);continue}}d.push(null),x.push(m),p.push(s)}if(x.length===0)return o.value=1,d;try{const s=c.terrainProvider,m=s._bottomLevel?Math.max(0,s._bottomLevel-1):Math.min(s.maximumLevel??12,12),F=await f.sampleTerrain(s,m,x);for(let z=0;z<F.length;z++){const h=At(f,F[z]);d[p[z]]=h,S(h),r.onProgress&&r.onProgress(z+1,x.length),o.value=(z+1)/x.length}}catch{for(let m=0;m<x.length;m++){try{const F=x[m],z=f.sampleTerrain(c.terrainProvider,17,[F]),h=z instanceof Promise?await z:z;if((h==null?void 0:h.length)>0){const L=At(f,h[0]);d[p[m]]=L,S(L)}}catch{}r.onProgress&&r.onProgress(m+1,x.length),o.value=(m+1)/x.length}}return d}finally{a.value=!1}}async function T(P,r={}){if(!(t==null?void 0:t()))return null;const{west:f,south:d,east:x,north:p}=P,s=Math.max(2,Math.ceil(Math.sqrt(r.sampleCount??9))),m=[];for(let _=0;_<s;_++)for(let I=0;I<s;I++){const B=f+(x-f)*(I/(s-1)),$=d+(p-d)*(_/(s-1));m.push([B,$])}const z=(await D(m,{useCache:!0})).filter(_=>_!==null).map(_=>_.height);if(z.length===0)return null;const h=Math.min(...z),L=Math.max(...z),R=z.reduce((_,I)=>_+I,0)/z.length;return{min:h,max:L,avg:R}}function E(){M(),a.value=!1,o.value=0}return{isSampling:a,samplingProgress:o,pickCartographic:C,pickCartographicWithRetry:u,sampleHeight:w,sampleHeightMostDetailed:D,queryHeightRange:T,clearCache:M,cleanup:E}}const gl={url:"./glb/player/UAL1_Standard.glb",scale:.01,idleAnim:"Idle_Loop",walkAnim:"Walk_Loop",runAnim:"Sprint_Loop",jumpAnim:["Jump_Start","Jump_Loop","Jump_Land"],flyAnim:"fly",flyIdleAnim:"flyIdle",flyHoverForwardAnim:"flyHoverForward",flyHoverBackAnim:"flyHoverBack",flyHoverLeftAnim:"flyHoverLeft",flyHoverRightAnim:"flyHoverRight",flyHoverUpAnim:"flyHoverUp",flyHoverDownAnim:"flyHoverDown",rotateY:-Math.PI/2,facingOffset:Math.PI/2},yl={gravity:-2400,jumpHeight:600,speed:300,flySpeed:55e3,acceleration:30,deceleration:30},bl={minCamDistance:100,maxCamDistance:800,camLookAtHeightRatio:.8,thirdMouseMode:1,enableZoom:!0,enableOverShoulderView:!1,isFirstPerson:!1,enableSpringCamera:!0,springCameraTime:.015},xl={forward:["KeyW","ArrowUp"],backward:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],toggleView:["KeyV"],toggleFly:["KeyF"]},Sl=5;function _l(e){return e?!!(e.availability||e.requestWaterMask!==void 0||e.requestVertexNormals!==void 0):!1}function wl({getViewer:e,getCesium:t,message:n}){const i=Q(!1),l=Q(!1),a=Q(!1),o=Q(null),y=Q(0),v=Q(null);let S=null,M=null,C=null,u=null,w=null;async function D(s={}){var z,h,L,R;const m=e(),F=t();if(!m||!F){(z=n==null?void 0:n.error)==null||z.call(n,"Cesium 未初始化");return}if(i.value&&!S&&(i.value=!1,l.value=!1,a.value=!1),!i.value)try{(h=n==null?void 0:n.info)==null||h.call(n,"正在加载漫游控制器（物理引擎 ~2MB，首次加载较慢）...",{duration:8e3});const{playerController:_}=await It(async()=>{const{playerController:Ie}=await import("./index-BrBnepeF.js");return{playerController:Ie}},__vite__mapDeps([11,1,3,6,5,7,8,12,13,14,15,9,10,16]),import.meta.url);let I=s.initPos;const B=s.spawnHeight||500;let $=0,X=!0;const le=m.camera,J=F.Cartographic.fromCartesian(le.position);if(!I){let Ie=B;const Oe=m.terrainProvider;if(_l(Oe)){const Ge=Oe,pe=Ge._bottomLevel?Math.max(0,Ge._bottomLevel-1):Math.min(Ge.maximumLevel??12,12);let Be=null;try{Be=await F.sampleTerrain(Oe,pe,[J])}catch{}Be&&Be[0]&&F.defined(Be[0].height)?($=Be[0].height,Ie=$+B,X=!1):(Ie=J.height>0?J.height+B:B,X=!1)}I=F.Cartesian3.fromRadians(J.longitude,J.latitude,Ie)}const fe=5;let be=s.staticCollider;const ce=.03;let O={lon:J.longitude,lat:J.latitude};be||(be=[{type:"terrain",rectangle:[J.longitude-ce,J.latitude-ce,J.longitude+ce,J.latitude+ce],resolution:64}]);const G={...bl},U={...gl,...yl,...s.modelConfig},he=new _;await he.init({viewer:m,initPos:I,playerModelConfig:U,staticCollider:be,...G,mouseSensitivity:Sl,keyMap:xl,isShowMobileControls:!1}),S=he;const Ae=ce*.6;let Te=!1,Fe=performance.now();M=m.scene.preUpdate.addEventListener(()=>{const Ie=performance.now(),Oe=(Ie-Fe)/1e3;Fe=Ie,he.update(Oe);const Ge=he.getPosition(),pe=F.Cartographic.fromCartesian(Ge),Be=X?fe:$+fe;pe.height<Be&&he.reset(F.Cartesian3.fromRadians(pe.longitude,pe.latitude,Be)),o.value={lng:F.Math.toDegrees(pe.longitude),lat:F.Math.toDegrees(pe.latitude),height:pe.height};const Ye=he.getVelocity();if(y.value=Math.hypot(Ye.e,Ye.n,Ye.u),!X&&!Te){const je=Math.abs(pe.longitude-O.lon),qe=Math.abs(pe.latitude-O.lat);if(je>Ae||qe>Ae){Te=!0;const Ne=pe.longitude,W=pe.latitude;O={lon:Ne,lat:W},he.physics.clearStaticColliders(),he.physics.addStaticColliders(m,{type:"terrain",rectangle:[Ne-ce,W-ce,Ne+ce,W+ce],resolution:64}).then(async()=>{try{const H=m.terrainProvider,ne=new F.Cartographic(Ne,W,0),ee=H._bottomLevel?Math.max(0,H._bottomLevel-1):Math.min(H.maximumLevel??12,12),ae=await F.sampleTerrain(H,ee,[ne]);ae&&ae[0]&&F.defined(ae[0].height)&&($=ae[0].height)}catch{}Te=!1}).catch(()=>{Te=!1})}}}),he.onViewChange=Ie=>{l.value=Ie},he.onGroundChange=()=>{a.value=he.getIsFlying()},i.value=!0,l.value=he.getIsFirstPerson(),a.value=he.getIsFlying(),(L=n==null?void 0:n.success)==null||L.call(n,"漫游模式已启动（WASD 移动 / V 切视角 / F 飞行）")}catch(_){(R=n==null?void 0:n.error)==null||R.call(n,`漫游模式启动失败: ${_.message||"未知错误"}`),T()}}function T(){if(M&&(M(),M=null),S){try{S.destroy()}catch{}S=null}const s=e();if(s){const m=s.scene.screenSpaceCameraController;m.enableRotate=!0,m.enableTranslate=!0,m.enableZoom=!0,m.enableTilt=!0,m.enableLook=!0}i.value=!1,l.value=!1,a.value=!1,o.value=null,y.value=0}function E(s){var m;i.value?(T(),(m=n==null?void 0:n.info)==null||m.call(n,"漫游模式已停止")):D(s)}function P(){S&&(S.changeView(),l.value=S.getIsFirstPerson())}function r({lng:s,lat:m,name:F}){var I;const z=e(),h=t();if(!z||!h)return;c();const L=h.Cartesian3.fromDegrees(s,m),R=z.entities.add({position:L,point:{pixelSize:10,color:h.Color.CYAN.withAlpha(.8)},name:F||"导航目标"});z.selectedEntity=R,u=z.selectedEntityChanged.addEventListener(B=>{var $;($=v.value)!=null&&$._entity&&B!==v.value._entity&&Promise.resolve().then(()=>{var X;(X=v.value)!=null&&X._entity&&(z.selectedEntity=v.value._entity)})}),v.value={lng:s,lat:m,name:F||"导航目标",bearing:0,distance:0,_entity:R};const _=h.Cartesian3.fromDegrees(s,m);w=z.scene.preRender.addEventListener(()=>{if(!v.value)return;const B=z.camera.position,$=h.Cartographic.fromCartesian(B),X=Tl(h.Math.toDegrees($.longitude),h.Math.toDegrees($.latitude),s,m),le=h.Math.toDegrees(z.camera.heading);v.value.bearing=(X-le+360)%360,v.value.distance=h.Cartesian3.distance(B,_);const J=v.value._entity;J&&z.selectedEntity!==J&&(z.selectedEntity=J)}),(I=n==null?void 0:n.info)==null||I.call(n,`导航目标已设置：${F||"地图选点"}`)}function c(){var m;const s=e();if(w&&(w(),w=null),u&&(u(),u=null),s&&((m=v.value)!=null&&m._entity)){try{s.entities.remove(v.value._entity)}catch{}s.selectedEntity=void 0}v.value=null}function f(){C&&C()}function d(s){C=s}function x(){var z;const s=e(),m=t();if(!s||!m)return;(z=n==null?void 0:n.info)==null||z.call(n,"点击地图选择导航目标");const F=new m.ScreenSpaceEventHandler(s.scene.canvas);F.setInputAction(h=>{var _;const L=s.scene.pick(h.position);if(m.defined(L)&&L.id&&L.id.position){const I=s.clock.currentTime,B=L.id.position.getValue(I);if(B){const $=m.Cartographic.fromCartesian(B);if($){s.selectedEntity=L.id,v.value={lng:m.Math.toDegrees($.longitude),lat:m.Math.toDegrees($.latitude),name:L.id.name||"数据要素",bearing:0,distance:0,_entity:L.id},(_=n==null?void 0:n.info)==null||_.call(n,`导航目标已设置：${L.id.name||"数据要素"}`),F.destroy();return}}}const R=s.scene.pickPosition(h.position)||s.scene.globe.pick(s.camera.getPickRay(h.position),s.scene);if(R){const I=m.Cartographic.fromCartesian(R);r({lng:m.Math.toDegrees(I.longitude),lat:m.Math.toDegrees(I.latitude),name:"地图选点"})}F.destroy()},m.ScreenSpaceEventType.LEFT_CLICK)}function p(){return S}return{isActive:i,isFirstPerson:l,isFlying:a,playerPosition:o,playerSpeed:y,navTarget:v,startPlayer:D,stopPlayer:T,togglePlayer:E,changeView:P,getPlayerInstance:p,setNavTarget:r,clearNavTarget:c,startNavPick:x,openNavDialog:f,setOpenNavDialogHandler:d}}function Tl(e,t,n,i){const l=S=>S*Math.PI/180,a=S=>S*180/Math.PI,o=l(n-e),y=Math.sin(o)*Math.cos(l(i)),v=Math.cos(l(t))*Math.sin(l(i))-Math.sin(l(t))*Math.cos(l(i))*Math.cos(o);return(a(Math.atan2(y,v))+360)%360}const Ml={key:0,class:"player-guide"},Dl={class:"guide-pill"},Ll={class:"pill-label"},Fl={key:0,class:"pill-fly"},Pl={__name:"PlayerGuidePanel",props:{visible:{type:Boolean,default:!1},isFirstPerson:{type:Boolean,default:!1},isFlying:{type:Boolean,default:!1}},emits:["close"],setup(e){return(t,n)=>(ie(),Ze(fn,{name:"guide-slide"},{default:hn(()=>[e.visible?(ie(),me("div",Ml,[b("div",Dl,[b("span",{class:Xe(["pill-dot",{fp:e.isFirstPerson}])},null,2),b("span",Ll,we(e.isFirstPerson?"第一人称":"第三人称"),1),e.isFlying?(ie(),me("span",Fl,"✈")):_e("",!0),b("button",{class:"pill-close",title:"关闭提示",onClick:n[0]||(n[0]=i=>t.$emit("close"))},"✕")]),n[1]||(n[1]=b("div",{class:"guide-keys"},[b("span",{class:"key-group"},[b("kbd",null,"W"),b("kbd",null,"A"),b("kbd",null,"S"),b("kbd",null,"D"),b("em",null,"移动")]),b("span",{class:"key-sep"}),b("span",{class:"key-group"},[b("kbd",null,"⇧"),b("em",null,"跑"),b("kbd",null,"␣"),b("em",null,"跳")]),b("span",{class:"key-sep"}),b("span",{class:"key-group"},[b("kbd",null,"V"),b("em",null,"视角"),b("kbd",null,"F"),b("em",null,"飞行")]),b("span",{class:"key-sep"}),b("span",{class:"key-group"},[b("span",{class:"key-mouse"},"🖱"),b("em",null,"旋转")])],-1))])):_e("",!0)]),_:1}))}},Al=rt(Pl,[["__scopeId","data-v-6190d367"]]),Cl={class:"hud-info-panel"},El={class:"nav-target-name"},Rl={class:"nav-name"},Il={class:"nav-distance-wrapper"},kl={class:"nav-distance"},zl={class:"hud-compass-panel"},Nl={class:"compass-dial"},Ol=10,Hl={__name:"NavGuideHUD",props:{navTarget:{type:Object,default:null}},setup(e){const t=e,n=Re(()=>{var a;return((a=t.navTarget)==null?void 0:a.distance)!=null&&t.navTarget.distance<Ol}),i=Re(()=>{var a;return((a=t.navTarget)==null?void 0:a.bearing)??0});function l(a){return a==null?"0.0 m":a<1e3?`${Math.round(a)} m`:`${(a/1e3).toFixed(2)} km`}return(a,o)=>(ie(),Ze(fn,{name:"nav-guide-fade"},{default:hn(()=>[e.navTarget?(ie(),me("div",{key:0,class:Xe(["nav-guide-hud",{arrived:n.value}])},[o[6]||(o[6]=b("div",{class:"hud-bg-glow"},null,-1)),b("div",Cl,[o[1]||(o[1]=b("div",{class:"hud-tag"},[b("span",{class:"tag-dot"}),b("span",{class:"tag-text"},"NAV_TRACKING")],-1)),b("div",El,[b("span",Rl,we(e.navTarget.name),1)]),b("div",Il,[o[0]||(o[0]=b("span",{class:"dist-label"},"DIST //",-1)),b("span",kl,we(n.value?"ARRIVED":l(e.navTarget.distance)),1)])]),b("div",zl,[b("div",Nl,[o[3]||(o[3]=b("div",{class:"dial-scale"},null,-1)),o[4]||(o[4]=b("div",{class:"dial-scale rotate-45"},null,-1)),b("div",{class:"compass-arrow-container",style:_i({transform:`rotate(${i.value}deg)`})},[...o[2]||(o[2]=[b("span",{class:"hud-pointer"},null,-1)])],4),o[5]||(o[5]=b("div",{class:"compass-center"},[b("span",{class:"center-core"})],-1))])])],2)):_e("",!0)]),_:1}))}},Bl=rt(Hl,[["__scopeId","data-v-1e2288c0"]]),Ul={class:"nav-dialog"},Wl={class:"nav-dialog-head futuristic-hud"},Gl={class:"head-right-decor"},$l={class:"nav-dialog-body"},jl={__name:"NavTargetPicker",props:{visible:{type:Boolean,default:!1}},emits:["close","select"],setup(e,{emit:t}){const n=t;function i(l){n("select",l),n("close")}return(l,a)=>(ie(),Ze(fn,{name:"nav-dialog-fade"},{default:hn(()=>[e.visible?(ie(),me("div",{key:0,class:"nav-dialog-overlay",onClick:a[4]||(a[4]=bt(o=>l.$emit("close"),["self"]))},[b("div",Ul,[a[12]||(a[12]=b("div",{class:"border-corner top-left"},null,-1)),a[13]||(a[13]=b("div",{class:"border-corner top-right"},null,-1)),a[14]||(a[14]=b("div",{class:"border-corner bottom-left"},null,-1)),a[15]||(a[15]=b("div",{class:"border-corner bottom-right"},null,-1)),b("div",Wl,[a[7]||(a[7]=b("div",{class:"hud-scan-line"},null,-1)),a[8]||(a[8]=b("div",{class:"title-wrapper"},[b("div",{class:"status-matrix-v2"},[b("div",{class:"matrix-row"},[b("span",{class:"matrix-dot activeanimate-flicker"}),b("span",{class:"matrix-dot active"})]),b("div",{class:"matrix-row"},[b("span",{class:"matrix-dot"}),b("span",{class:"matrix-dot active"})])]),b("div",{class:"title-text-group"},[b("span",{class:"nav-dialog-title"},"设置导航目标"),b("span",{class:"title-sub"},"NAV.TARGET_SET // MODE:漫游")])],-1)),b("div",Gl,[a[6]||(a[6]=b("div",{class:"decor-geometry"},[b("span",{class:"geo-line"}),b("span",{class:"geo-angle"})],-1)),b("button",{class:"nav-dialog-close v2",title:"关闭",onClick:a[0]||(a[0]=o=>l.$emit("close"))},[...a[5]||(a[5]=[b("span",{class:"close-icon-v2"},"×",-1)])])])]),b("div",$l,[b("button",{class:"nav-option",onClick:a[1]||(a[1]=o=>i("search"))},[...a[9]||(a[9]=[b("div",{class:"nav-option-icon"},[b("span",null,"🔍")],-1),b("div",{class:"nav-option-text"},[b("span",{class:"nav-option-label"},"搜索地点"),b("span",{class:"nav-option-desc"},"搜索 POI 兴趣点并设为漫游目标")],-1),b("span",{class:"nav-option-arrow"},null,-1)])]),b("button",{class:"nav-option",onClick:a[2]||(a[2]=o=>i("data"))},[...a[10]||(a[10]=[b("div",{class:"nav-option-icon"},[b("span",null,"📁")],-1),b("div",{class:"nav-option-text"},[b("span",{class:"nav-option-label"},"选择数据要素"),b("span",{class:"nav-option-desc"},"从已载入的 GIS 图层中选取要素点")],-1),b("span",{class:"nav-option-arrow"},null,-1)])]),b("button",{class:"nav-option",onClick:a[3]||(a[3]=o=>i("pick"))},[...a[11]||(a[11]=[b("div",{class:"nav-option-icon"},[b("span",null,"📍")],-1),b("div",{class:"nav-option-text"},[b("span",{class:"nav-option-label"},"地图点选"),b("span",{class:"nav-option-desc"},"在三维场景中交互单点击落点")],-1),b("span",{class:"nav-option-arrow"},null,-1)])])])])])):_e("",!0)]),_:1}))}},ql=rt(jl,[["__scopeId","data-v-1846a693"]]),Vl={key:5,class:"drag-overlay"},Xl={class:"map-controls-group"},Yl={class:"mouse-position-content"},Kl=5,Zl={__name:"CesiumContainer",emits:["view-sync"],setup(e,{expose:t,emit:n}){let i=null,l=null,a=!1;const o=mn(),y=n,v=Q(!0),S=Q(!1),M=Q(!1),C=Q(null),u=Q(Ci()),w=()=>l,D=()=>i||window.Cesium,T=()=>u.value.tiandituTk,E=()=>u.value.cesiumIonToken,P=bs({getViewer:w,getCesium:D,message:o,backendBaseUrl:Ai,tiandituToken:T,cesiumIonToken:E}),{activeBasemap:r,activeTerrain:c,customXyzBasemapUrl:f,basemapOptions:d,terrainOptions:x,overlayOptions:p,createImageryProviderViewModels:s,createTerrainProviderViewModels:m,getSelectedImageryProviderViewModel:F,getSelectedTerrainProviderViewModel:z,bindLayerPickerStateSync:h,addBaseImageryLayers:L,initCustomTerrain:R,handleOverlayToggle:_,handleCustomBasemapSubmit:I,cleanupLayers:B}=P;Ce(r,(q,V)=>{!q||q===V||O(q)});const{coordinateDisplay:$,setupInteractions:X,cleanupInteractions:le}=us({getViewer:w,getCesium:D}),{installCreditHider:J,cleanupCreditHider:fe}=cs({getViewer:w}),{restoreCameraFromUrl:be,restoreBasemapFromUrl:ce,syncBasemapToUrl:O,bindCameraViewSync:G,cleanupCameraViewSync:U}=Qs({getViewer:w,getCesium:D,onCameraViewSync:q=>y("view-sync",q),onBasemapRestore:q=>{q&&r.value!==q&&(r.value=q)}}),he=Ps({getViewer:w,getCesium:D,message:o}),{flyToHome:Ae}=he,Te=dl({getViewer:w,getCesium:D,message:o}),Fe=Cs({getViewer:w,getCesium:D,message:o}),Ie=fl({getViewer:w,getCesium:D,message:o}),Oe=ml({getViewer:w,getCesium:D}),Ge=vl({getViewer:w,getCesium:D}),pe=wl({getViewer:w,getCesium:D,message:o});pe.setOpenNavDialogHandler(()=>{S.value=!0});function Be(q){q==="pick"?pe.startNavPick():q==="search"?o.info("请使用顶部搜索框搜索地点，搜索结果将自动设为导航目标"):q==="data"&&(o.info("请点击已导入的数据要素，将自动设为导航目标"),pe.startNavPick())}const Ye=Re(()=>{const q=pe.playerPosition.value;if(q){const V=q.lng.toFixed(6),de=q.lat.toFixed(6),ye=q.height.toFixed(2),We=pe.playerSpeed.value,dt=We>.1?` | 速度: ${We.toFixed(1)} m/s`:"";return`经度: ${V}, 纬度: ${de}, 海拔: ${ye}米${dt} (漫游)`}return $.value});Ce(()=>pe.isActive.value,q=>{q&&(v.value=!0,ee.value=!1)}),t({getViewer:w,getCesium:D,modelManager:Ie,cameraEnhanced:Oe,heightSampler:Ge,playerController:pe});const je=Re(()=>Fe.loadedDataSources.value),qe=Re(()=>Fe.pendingGltfFile.value),Ne=Q(!1);function W(q){Ne.value=!0,q.dataTransfer&&(q.dataTransfer.dropEffect="copy")}function H(q){const V=q==null?void 0:q.relatedTarget,de=q==null?void 0:q.currentTarget;V instanceof Node&&de instanceof Node&&de.contains(V)||(Ne.value=!1)}async function ne(q){var de;if(Ne.value=!1,!M.value)return;const V=(de=q.dataTransfer)==null?void 0:de.files;if(!(!V||V.length===0))for(const ye of V){if(a)break;try{await Fe.loadDataFile(ye)}catch{}}}const{toolPanelOpen:ee,advancedEffectControls:ae,fluidParams:j,baseAtmosphereParams:te,atmosphereParams:re,cloudParams:se,shallowWaterVisible:Se,shallowWaterParams:He,toolModules:Ue,handleToolAction:Pe,handleToolControlChange:et,handleFluidStateChange:A,cleanupTools:N}=Rs({fluidPanelRef:C,sceneActions:he,wind:Te,modelManager:Ie,cameraEnhanced:Oe,heightSampler:Ge,playerController:pe});let Y=!1;async function oe(){var q;if(!Y){Y=!0,a=!1,di("正在初始化 3D 场景...");try{let V=0,de=1;for(;V<de;)try{if(u.value=await Fi({silent:!1,force:V>0}),de=Math.min(Kl,Math.max(de,Array.isArray(u.value.tiandituTokens)?u.value.tiandituTokens.length:1,Array.isArray(u.value.cesiumIonTokens)?u.value.cesiumIonTokens.length:1,1)),i=await Jo({ionToken:E()}),a||!i||!document.getElementById("cesiumContainer"))return;g(),X();const ye=L(),We=await R();if(a){ue();return}if(M.value=!0,G({initialSync:!1,getActivePresetId:()=>r.value}),!ce())try{const qt=await Pi(),_n=(q=qt==null?void 0:qt.data)==null?void 0:q.default_basemap_index;if(_n!=null){const Vt=fi[_n]||null;Vt&&r.value!==Vt&&(r.value=Vt)}}catch{}if(O(r.value),ye&&We){o.success("天地图基础影像与地形加载成功。");return}const nt=ye?{switched:!1}:Kt("tianditu_tk"),xt=We?{switched:!1}:Kt("cesium_ion_token");if(!(nt.switched||xt.switched)){o.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}u.value=xt.switched?xt.tokens:nt.tokens,ue(),V+=1,o.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(ye){const We=Kt("cesium_ion_token");if(!We.switched)throw ye;u.value=We.tokens,ue(),V+=1,o.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}o.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(V){o.error("Cesium 运行时加载失败",V),o.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{Y=!1,hi()}}}function ue(){var q;M.value=!1,U(),le(),N(),B(),fe();try{pe.stopPlayer()}catch{}try{(q=pe.clearNavTarget)==null||q.call(pe)}catch{}xe&&(xe(),xe=null);try{Ie.dispose()}catch{}try{Oe.cleanup()}catch{}try{Ge.cleanup()}catch{}if(Fe.clearAllDataSources(),!!l){try{l.destroy()}catch{}l=null}}let xe=null;function g(){var ye;const q=typeof i.Map=="function"?i.Map:i.Viewer,V=s(),de=m();l=new q("cesiumContainer",{baseLayerPicker:!0,geocoder:((ye=i.IonGeocodeProviderType)==null?void 0:ye.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:V,selectedImageryProviderViewModel:F(V),terrainProviderViewModels:de,selectedTerrainProviderViewModel:z(de),shouldAnimate:!0}),l.scene.debugShowFramesPerSecond=!0,l.scene.globe.terrainExaggeration=1,l.scene.globe.terrainExaggerationRelativeHeight=0,as(l,i),Fa(l),J(),h(),be({duration:0})||Ae(0);try{xe=Zs({viewer:l,cloudParams:se,atmosphereParams:re})}catch{}}dn(()=>{oe().catch(q=>{})});async function k({files:q}){for(const V of q){if(a)break;try{await Fe.loadDataFile(V)}catch{}}}function K({id:q}){Fe.removeDataSource(q)}function Z(){Fe.clearAllDataSources()}function ge(){const q=document.createElement("input");q.type="file",q.accept=".zip",q.onchange=async V=>{var ye,We;const de=(We=(ye=V.target)==null?void 0:ye.files)==null?void 0:We[0];if(de)try{await Fe.loadDataFile(de)}catch{}},q.click()}async function Le(){try{await Fe.importTilesetFromDirectory()}catch{}}async function ke(q){if(!a)try{await Fe.loadGltfWithUserCoords(q)}catch{}}function ze(){Fe.cancelPendingGltf()}jt(()=>{var q,V;a=!0,M.value=!1;try{pe.stopPlayer()}catch{}try{(q=pe.clearNavTarget)==null||q.call(pe)}catch{}try{(V=pe.setOpenNavDialogHandler)==null||V.call(pe,null)}catch{}if(U(),le(),N(),B(),Ie.dispose(),Oe.cleanup(),Ge.cleanup(),xe&&(xe(),xe=null),fe(),Fe.clearAllDataSources(),l){try{l.destroy()}catch{}l=null}}),Ce(M,q=>{q&&($e(te.value),Ke(re.value))});function $e(q){var ye;if(!l||!i)return;const V=l.scene,de=V.globe;de&&(de.enableLighting=q.enableLighting,de.showGroundAtmosphere=q.showGroundAtmosphere,"dynamicAtmosphereLighting"in de&&(de.dynamicAtmosphereLighting=q.dynamicAtmosphereLighting),"dynamicAtmosphereLightingFromSun"in de&&(de.dynamicAtmosphereLightingFromSun=q.dynamicAtmosphereLightingFromSun),"atmosphereLightIntensity"in de&&(de.atmosphereLightIntensity=q.atmosphereLightIntensity),"atmosphereHueShift"in de&&(de.atmosphereHueShift=q.atmosphereHueShift),"atmosphereSaturationShift"in de&&(de.atmosphereSaturationShift=q.atmosphereSaturationShift),"atmosphereBrightnessShift"in de&&(de.atmosphereBrightnessShift=q.atmosphereBrightnessShift),"lightingFadeInDistance"in de&&(de.lightingFadeInDistance=q.lightingFadeInDistance),"lightingFadeOutDistance"in de&&(de.lightingFadeOutDistance=q.lightingFadeOutDistance),"nightFadeInDistance"in de&&(de.nightFadeInDistance=q.nightFadeInDistance),"nightFadeOutDistance"in de&&(de.nightFadeOutDistance=q.nightFadeOutDistance)),V.fog&&(V.fog.enabled=q.fogEnabled,"density"in V.fog&&(V.fog.density=q.fogDensity),"minimumBrightness"in V.fog&&(V.fog.minimumBrightness=q.fogMinimumBrightness)),V.sun&&(V.sun.show=q.sunShow),V.moon&&(V.moon.show=q.moonShow),V.skyBox&&(V.skyBox.show=q.skyBoxShow),(ye=V.requestRender)==null||ye.call(V)}Ce(te,q=>{$e(q)},{deep:!0});function Ke(q){var ye;if(!l||!i)return;const V=l.scene,de=V.globe;if(de&&"atmosphereLightIntensity"in de){const We=te.value.atmosphereLightIntensity??5.5,nt=q.moonLightEnabled!==!1?(q.moonLightIntensity??.18)*4:0;de.atmosphereLightIntensity=Math.min(We+nt,12)}(ye=V.requestRender)==null||ye.call(V)}return Ce(re,q=>{Ke(q)},{deep:!0}),(q,V)=>{var de;return ie(),me(ct,null,[b("div",{id:"cesiumContainer",class:"cesium-container",onDragover:bt(W,["prevent"]),onDragleave:bt(H,["prevent"]),onDrop:bt(ne,["prevent"])},null,32),M.value?(ie(),Ze(yt($a),{key:0,headless:"","get-viewer":w,"get-cesium":D,controls:ve(ae)},null,8,["controls"])):_e("",!0),M.value?(ie(),Ze(yt(Oo),{key:1,ref_key:"fluidPanelRef",ref:C,headless:"","get-viewer":w,"get-cesium":D,params:ve(j),onStateChange:ve(A)},null,40,["params","onStateChange"])):_e("",!0),M.value?(ie(),Ze(Yo,wi({key:2,visible:ve(Se)},ve(He)),null,16,["visible"])):_e("",!0),M.value?(ie(),Ze(co,{key:3,open:ve(ee),"onUpdate:open":V[0]||(V[0]=ye=>Xt(ee)?ee.value=ye:null),"active-basemap":ve(r),"onUpdate:activeBasemap":V[1]||(V[1]=ye=>Xt(r)?r.value=ye:null),"active-terrain":ve(c),"onUpdate:activeTerrain":V[2]||(V[2]=ye=>Xt(c)?c.value=ye:null),"basemap-options":ve(d),"terrain-options":ve(x),"overlay-options":ve(p),"custom-basemap-url":ve(f),modules:ve(Ue),"loaded-data-sources":je.value,onModuleAction:ve(Pe),onControlChange:ve(et),onOverlayToggle:ve(_),onCustomBasemapSubmit:ve(I),onDataImport:k,onDataRemove:K,onDataClearAll:Z,onImportTilesetZip:ge,onImportTilesetFolder:Le},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):_e("",!0),Ee(Al,{visible:ve(pe).isActive.value&&v.value,"is-first-person":ve(pe).isFirstPerson.value,"is-flying":ve(pe).isFlying.value,onClose:V[3]||(V[3]=ye=>v.value=!1)},null,8,["visible","is-first-person","is-flying"]),ve(pe).navTarget.value?(ie(),Ze(Bl,{key:4,"nav-target":ve(pe).navTarget.value},null,8,["nav-target"])):_e("",!0),Ee(ql,{visible:S.value,onClose:V[4]||(V[4]=ye=>S.value=!1),onSelect:Be},null,8,["visible"]),Ee(Mo,{visible:!!qe.value,"file-name":((de=qe.value)==null?void 0:de.name)||"",onConfirm:ke,onCancel:ze},null,8,["visible","file-name"]),Ne.value&&M.value?(ie(),me("div",Vl,[Ee(ve(ln),{size:48,"stroke-width":"1.5"}),V[6]||(V[6]=b("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),V[7]||(V[7]=b("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):_e("",!0),b("div",Xl,[b("div",Yl,we(Ye.value),1),V[9]||(V[9]=b("div",{class:"divider"},null,-1)),b("button",{class:"home-btn",title:"回到初始位置",onClick:V[5]||(V[5]=(...ye)=>ve(Ae)&&ve(Ae)(...ye))},[...V[8]||(V[8]=[b("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[b("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},Jl=rt(Zl,[["__scopeId","data-v-e1158482"]]),cc=Object.freeze(Object.defineProperty({__proto__:null,default:Jl},Symbol.toStringTag,{value:"Module"}));export{cc as C,_l as h};
