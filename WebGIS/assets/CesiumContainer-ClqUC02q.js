const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-DkUmaEnF.js","./vendor-echarts-all-BoniBKWu.js","./vendor-libs-ZStazrnx.js","./vendor-vue-DrZ_GSNy.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-BF925vE3.js","./vendor-proj4-BMTxSKs_.js","./index-DuhR_wRn.js","./vendor-ol-all-C4PNuJ-g.js","./vendor-geotiff-CwTT8hcD.js","./vendor-lerc-9DOY5ikF.js","./vendor-jszip-BOwK5y_4.js","./vendor-ol-all-BtPuoxOl.css","./vendor-axios-Bdz_Fv8M.js","./index-DduL8x4O.css","./index-B85W4EZr.js","./HomeView-DYLzloYQ.js","./HomeView-Ca_Fp0GP.css","./vectorUtils-Ds50OJUZ.js","./textDecoder-CXjJWEkX.js"])))=>i.map(i=>d[i]);
var fi=Object.defineProperty;var mi=(e,t,n)=>t in e?fi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var tt=(e,t,n)=>mi(e,typeof t!="symbol"?t+"":t,n);import{w as Fe,v as oi,d as ee,c as ce,P as si,r as Y,C as ln,o as $t,f as x,t as be,a as Re,G as et,X as mt,g as ve,q as Ae,u as fe,F as st,e as ct,n as je,x as Ye,S as pt,I as Ot,i as gt,H as Ht,z as pi,B as gi,A as vi,b as cn,y as un,O as yi,a5 as bi,a4 as qt}from"./vendor-vue-DrZ_GSNy.js";import{_ as nt,h as dn,R as li,Q as ci,e as jt,f as xn,T as xi,v as Si,y as Vt,P as _i,x as wi}from"./index-DuhR_wRn.js";import{_ as Wt}from"./vendor-runtime-Dp1pzeXC.js";import{af as Ti,ag as Xt,ah as Yt,ai as Mi,X as Sn,e as Kt,aj as rn,ak as Et,ac as _n,al as Di,am as ui,an as wn,H as Tn,T as Zt,s as Mn,a2 as Li,ao as Bt,ap as Fi,aq as Pi,ar as Ai,q as Ci,o as Ei,as as Rt,G as Dn,at as hn,au as fn,av as di,aw as Ln,ax as Ri,ay as Ii,az as Fn,aA as Jt,aB as ki,aC as zi,aD as Ni,aE as It,aF as at,aG as Oi,aH as Pn,aI as _t,aJ as Hi,aK as wt,aL as Bi,aM as Ui,aN as Wi,aO as Gi,aP as $i,aQ as qi,aR as An,aS as Cn,aT as ji,aU as Vi,aV as Xi,aW as Yi,aX as Ki,aY as Zi,aZ as Ji,a_ as Qi,a$ as ea,b0 as En,b1 as ta,b2 as na,b3 as ia,b4 as aa}from"./vendor-libs-ZStazrnx.js";import{F as mn,G as Rn,v as At,B as ra,H as oa,I as sa,J as la,K as ca,L as ua,M as In,N as da,O as ha,P as fa}from"./HomeView-DYLzloYQ.js";import{d as ma}from"./vectorUtils-Ds50OJUZ.js";const Gt=new Map;function pa(e){const t=Gt.get(e);t&&t.abort();const n=new AbortController;return Gt.set(e,n),n}function ga(){Gt.forEach(e=>{e.abort()}),Gt.clear()}function va(e){const t=e.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!t)return/\{s\}/i.test(e)?{url:e,subdomains:["a","b","c"]}:{url:e,subdomains:[]};const n=t[1].charCodeAt(0),i=t[2].charCodeAt(0),c=[];for(let r=n;r<=i;r++)c.push(String.fromCharCode(r));return{url:e.replace(t[0],"{s}"),subdomains:c}}function ya(e){return e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function ba(e,t){let n=e;return t.tiandituTk&&(n=n.replace(/\{tiandituTk\}/g,t.tiandituTk)),t.customUrl&&(n=n.replace(/\{customUrl\}/g,t.customUrl)),n}function xa(e,t,n){if(!e||!t)return null;const c=pa(t.id).signal,{serviceType:r}=t;let s=ba(t.url,n);if(r==="custom"){if(!n.customUrl)return null;s=n.customUrl}if(t.nonStandardAdapter||r==="vector-tile")return null;const{subdomains:b}=va(s),v=ya(s),S=t.subdomains||b,T=t.maxZoom||18;try{let P=null;if(c.aborted)return null;switch(r){case"wms":{if(typeof e.WebMapServiceImageryProvider!="function")return null;const f=t.wms;if(!(f!=null&&f.layers))return null;P=new e.WebMapServiceImageryProvider({url:v||t.url,layers:f.layers,parameters:{version:f.version||"1.1.1",srs:f.srs||"EPSG:3857",format:f.format||"image/png",styles:f.styles||"",transparent:f.transparent!==!1}});break}case"wmts":{if(typeof e.WebMapTileServiceImageryProvider!="function")return null;const f=t.wmts;if(!(f!=null&&f.layer)||!f.matrixSet)return null;P=new e.WebMapTileServiceImageryProvider({url:v||t.url,layer:f.layer,style:f.style||"default",format:f.format||"image/png",tileMatrixSetID:f.matrixSet,maximumLevel:T});break}case"osm":{typeof e.OpenStreetMapImageryProvider=="function"?P=new e.OpenStreetMapImageryProvider({maximumLevel:T}):P=new e.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:T});break}default:{if(!v||!(v.includes("{z}")||v.includes("{x}")||v.includes("{y}")||v.includes("{reverseY}")))return null;P=new e.UrlTemplateImageryProvider({url:v,subdomains:S.length>0?S:void 0,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:T,enablePickFeatures:!1});break}}if(c.aborted){if(P&&typeof P.destroy=="function")try{P.destroy()}catch{}return null}return P&&(P._descriptorId=t.id),P}catch{return null}}function Sa(e,t,n){if(!e||!Array.isArray(t))return[];const i=[];for(const c of t){const r=mn(c);if(!r)continue;const s=xa(e,r,n);s&&i.push(s)}return i}function _a(e){var i;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(i=t.requestRender)==null||i.call(t))}function wa(e,t){var r;const n=e==null?void 0:e.scene,i=n==null?void 0:n.globe;if(!n||!i)return;Da(n,t),La(n),i.enableLighting=!0,i.showGroundAtmosphere=!0,_e(i,"dynamicAtmosphereLighting",!0),_e(i,"dynamicAtmosphereLightingFromSun",!0),_e(i,"atmosphereLightIntensity",5.5),_e(i,"atmosphereHueShift",-.015),_e(i,"atmosphereSaturationShift",.08),_e(i,"atmosphereBrightnessShift",.02),_e(i,"lightingFadeInDistance",15e6),_e(i,"lightingFadeOutDistance",22e6),_e(i,"nightFadeInDistance",9e6),_e(i,"nightFadeOutDistance",16e6),kt(t,i,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),kt(t,i,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),_e(i,"atmosphereRayleighScaleHeight",1e4),_e(i,"atmosphereMieScaleHeight",3200),_e(i,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=Pa(t));const c=n.skyAtmosphere;c&&(c.show=!0,_e(c,"perFragmentAtmosphere",!0),_e(c,"dynamicAtmosphereLighting",!0),_e(c,"dynamicAtmosphereLightingFromSun",!0),_e(c,"hueShift",-.025),_e(c,"saturationShift",.08),_e(c,"brightnessShift",.03),_e(c,"atmosphereLightIntensity",12),kt(t,c,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),kt(t,c,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),_e(c,"atmosphereRayleighScaleHeight",1e4),_e(c,"atmosphereMieScaleHeight",3200),_e(c,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),Fa(n),(r=n.requestRender)==null||r.call(n)}function Ta(e){var c;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const i=(c=t.postProcessStages)==null?void 0:c.bloom;return{scene:rt(t,["highDynamicRange","sunBloom","light"]),fog:rt(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:rt(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:rt(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:rt(t.sun,["show"]),moon:rt(t.moon,["show"]),skyBox:rt(t.skyBox,["show"]),bloom:{props:rt(i,["enabled"]),uniforms:rt(i==null?void 0:i.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Ma(e,t,n){var s,b,v,S;if(!n)return;const i=e==null?void 0:e.scene,c=i==null?void 0:i.globe;if(!i||!c)return;ot(i,n.scene,t),ot(i.fog,n.fog,t),ot(c,n.globe,t),ot(i.sun,n.sun,t),ot(i.moon,n.moon,t),ot(i.skyBox,n.skyBox,t),i.skyAtmosphere&&(ot(i.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(i.skyAtmosphere.show=!1));const r=(s=i.postProcessStages)==null?void 0:s.bloom;ot(r,(b=n.bloom)==null?void 0:b.props,t),ot(r==null?void 0:r.uniforms,(v=n.bloom)==null?void 0:v.uniforms,t),(S=i.requestRender)==null||S.call(i)}function Da(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}_e(e.light,"intensity",2.35)}function La(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,_e(t,"density",12e-5),_e(t,"minimumBrightness",.035),_e(t,"screenSpaceErrorFactor",2),_e(t,"visualDensityScalar",.16))}function Fa(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(_e(t.uniforms,"contrast",128),_e(t.uniforms,"brightness",-.18),_e(t.uniforms,"delta",1),_e(t.uniforms,"sigma",2.5),_e(t.uniforms,"stepSize",4.2)))}function Pa(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function _e(e,t,n){e&&t in e&&(e[t]=n)}function kt(e,t,n,i,c,r){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(i,c,r))}function rt(e,t){return e?t.reduce((n,i)=>(i in e&&(n[i]=Aa(e[i])),n),{}):{}}function ot(e,t={},n){!e||!t||Object.entries(t).forEach(([i,c])=>{i in e&&(e[i]=Ca(c,n))})}function Aa(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Ca(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Ea={__name:"LilGuiControls",props:{title:{type:String,default:"Parameters"},controls:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const n=e,i=t,c=Y(null),r={},s=new Map;let b=null,v="",S=!1;Fe(()=>[n.title,n.controls],()=>{T()},{deep:!0,flush:"post",immediate:!0}),oi(()=>{d()});function T(){typeof window>"u"||S||(S=!0,si(()=>{S=!1,P()}))}function P(){const a=c.value;if(!a)return;const u=C(n.controls);(!b||u!==v)&&(d(),f(a,u)),M()}function f(a,u){b=new Ti({container:a,autoPlace:!1,title:n.title||"Parameters",width:Math.max(260,Math.floor(a.clientWidth||320))}),b.domElement.classList.add("cesium-lil-gui"),a.replaceChildren(b.domElement),v=u;for(const g of n.controls||[]){const D=_(g);D&&s.set(g.id,D)}}function _(a){if(a.type==="info")return null;r[a.id]=o(a);let u=null;return a.type==="range"?u=b.add(r,a.id,l(a.min,0),l(a.max,1),l(a.step,.01)):a.type==="color"?u=b.addColor(r,a.id):a.type==="select"?u=b.add(r,a.id,h(a)):u=b.add(r,a.id),u.name(F(a)).onChange(g=>{const D=p(a.id)||a;D.disabled||i("change",{control:D,controlId:D.id,value:g})}),w(u,a),u}function M(){if(b){b.title(n.title||"Parameters");for(const a of n.controls||[]){const u=s.get(a.id);if(!u)continue;const g=o(a);m(r[a.id],g)||(r[a.id]=g,u.updateDisplay()),u.name(F(a)),u.disable(!!a.disabled),w(u,a)}}}function w(a,u){a.domElement.title=u.tooltip||"",a.domElement.dataset.controlId=u.id||"",a.domElement.dataset.controlType=u.type||""}function C(a=[]){return JSON.stringify(a.map(u=>({id:u.id,type:u.type,min:u.min,max:u.max,step:u.step,options:(u.options||[]).map(g=>({label:g.label,value:g.value}))})))}function F(a){return a.displayValue?`${a.label||a.id} (${a.displayValue})`:a.label||a.id}function o(a){var u,g;return a.type==="range"?l(a.value,l(a.min,0)):a.type==="toggle"?!!a.value:a.type==="select"?a.value??((g=(u=a.options)==null?void 0:u[0])==null?void 0:g.value)??"":a.type==="color"?typeof a.value=="string"&&a.value?a.value:"#ffffff":a.value}function h(a){const u={};for(const g of a.options||[])u[g.label||g.value]=g.value;return u}function p(a){return n.controls.find(u=>u.id===a)||null}function m(a,u){return typeof a=="number"||typeof u=="number"?Math.abs(Number(a)-Number(u))<1e-12:a===u}function l(a,u){const g=Number(a);return Number.isFinite(g)?g:u}function d(){if(b)try{b.destroy()}catch{}b=null,v="",s.clear();for(const a of Object.keys(r))delete r[a]}return(a,u)=>(ee(),ce("div",{ref_key:"containerRef",ref:c,class:"lil-gui-host"},null,512))}},pn=nt(Ea,[["__scopeId","data-v-110f953e"]]),Ra={key:0,class:"advanced-effects-root"},Ia={class:"effects-panel"},ka={class:"panel-head"},za={class:"effect-switches"},Na={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=dn(),i=Y(null),c=Y(!1),r=Y(!1),s=Y(!1),b=Y(!1),v=Y(!1),S=Ae(()=>[{id:"fog",label:"Height Fog",type:"toggle",value:c.value},{id:"hbao",label:"HBAO",type:"toggle",value:r.value},{id:"tiltShift",label:"Tilt Shift",type:"toggle",value:s.value},{id:"atmosphere",label:"Atmosphere + Bloom",type:"toggle",value:b.value}]);let T=null,P=null,f=null,_=!1,M=null,w=null,C=null,F=null,o=null,h=null,p=null,m=null,l=!1,d=null,a=!1,u=0,g=0,D=typeof performance<"u"?performance.now():Date.now();function A(){return C||(C=Wt(()=>import("./cesiumFxRuntime-DkUmaEnF.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(N=>{var Q;const z=(Q=N==null?void 0:N.getCesiumFxEchartsRuntime)==null?void 0:Q.call(N);if(!z)throw new Error("Cinematic FX 图表运行时加载失败");return w=z,z}).catch(N=>{throw C=null,N}),C)}async function k(){return w||A()}const U={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},E={hdr:null,bloom:null,sky:null};ln(()=>{J()}),$t(()=>{ye()}),Fe(()=>t.controls,N=>{G(N||{})},{deep:!0,immediate:!0});function G(N){Object.prototype.hasOwnProperty.call(N,"fog")&&(c.value=!!N.fog),Object.prototype.hasOwnProperty.call(N,"hbao")&&(r.value=!!N.hbao),Object.prototype.hasOwnProperty.call(N,"tiltShift")&&(s.value=!!N.tiltShift),Object.prototype.hasOwnProperty.call(N,"atmosphere")&&(b.value=!!N.atmosphere)}function te({controlId:N,value:z}){const Q=!!z,ie={fog:c,hbao:r,tiltShift:s,atmosphere:b}[N];ie&&(ie.value=Q)}function J(){let N=0;F=window.setInterval(async()=>{var K,ie;N+=1;const z=(K=t.getViewer)==null?void 0:K.call(t),Q=((ie=t.getCesium)==null?void 0:ie.call(t))||window.Cesium;if(z&&Q){clearInterval(F),F=null;try{le(z),ue(z),ge(z,Q),$(z,Q),n.success("高级视觉效果已启用。")}catch(H){n.error("高级视觉效果初始化失败",H),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}N>=150&&(clearInterval(F),F=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function le(N){var K,ie,H,Z,ae,re,pe,Ne,Be;const z=N==null?void 0:N.scene;if(!z)return;typeof z.highDynamicRange=="boolean"&&(E.hdr=z.highDynamicRange),"sunBloom"in z&&(E.sunBloom=z.sunBloom);const Q=z.globe;if(Q&&(E.globe={enableLighting:Q.enableLighting,showGroundAtmosphere:Q.showGroundAtmosphere,dynamicAtmosphereLighting:Q.dynamicAtmosphereLighting,dynamicAtmosphereLightingFromSun:Q.dynamicAtmosphereLightingFromSun,atmosphereLightIntensity:Q.atmosphereLightIntensity,atmosphereHueShift:Q.atmosphereHueShift,atmosphereSaturationShift:Q.atmosphereSaturationShift,atmosphereBrightnessShift:Q.atmosphereBrightnessShift,lightingFadeInDistance:Q.lightingFadeInDistance,lightingFadeOutDistance:Q.lightingFadeOutDistance,nightFadeInDistance:Q.nightFadeInDistance,nightFadeOutDistance:Q.nightFadeOutDistance}),z.light&&(E.light={intensity:z.light.intensity}),(K=z.postProcessStages)!=null&&K.bloom){const Me=z.postProcessStages.bloom;E.bloom={enabled:!!Me.enabled,contrast:(ie=Me.uniforms)==null?void 0:ie.contrast,brightness:(H=Me.uniforms)==null?void 0:H.brightness,delta:(Z=Me.uniforms)==null?void 0:Z.delta,sigma:(ae=Me.uniforms)==null?void 0:ae.sigma,stepSize:(re=Me.uniforms)==null?void 0:re.stepSize}}z.skyAtmosphere&&(E.sky={show:z.skyAtmosphere.show,hueShift:z.skyAtmosphere.hueShift,saturationShift:z.skyAtmosphere.saturationShift,brightnessShift:z.skyAtmosphere.brightnessShift}),E.celestial={sunShow:(pe=z.sun)==null?void 0:pe.show,moonShow:(Ne=z.moon)==null?void 0:Ne.show,skyBoxShow:(Be=z.skyBox)==null?void 0:Be.show}}function ge(N,z){var K;!((K=N==null?void 0:N.scene)!=null&&K.postProcessStages)||!(z!=null&&z.PostProcessStage)||(Oe(N,z),Le(N,z),W(N,z),b.value?O(N,z,1200):de(N))}function ue(N){var Q;const z=N==null?void 0:N.scene;(Q=z==null?void 0:z.renderError)!=null&&Q.addEventListener&&(z.rethrowRenderErrors=!1,m=z.renderError.addEventListener((K,ie)=>{n.error("Cesium 渲染异常，已触发降级保护",ie),Ce(),l||(l=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function Ce(){c.value=!1,s.value=!1,r.value=!1,b.value=!1,T&&(T.enabled=!1),P&&(P.enabled=!1),f&&(f.enabled=!1)}function Oe(N,z){T||(T=new z.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new z.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),N.scene.postProcessStages.add(T),T.enabled=c.value)}function Le(N,z){var K,ie;const Q=(K=N==null?void 0:N.scene)==null?void 0:K.postProcessStages;Q&&(Q.ambientOcclusion?(f=Q.ambientOcclusion,_=!1):(ie=z==null?void 0:z.PostProcessStageLibrary)!=null&&ie.createAmbientOcclusionStage&&(f=z.PostProcessStageLibrary.createAmbientOcclusionStage(),Q.add(f),_=!0),f&&(f.enabled=r.value,f.uniforms&&("intensity"in f.uniforms&&(f.uniforms.intensity=4.2),"bias"in f.uniforms&&(f.uniforms.bias=.08),"lengthCap"in f.uniforms&&(f.uniforms.lengthCap=.35),"stepSize"in f.uniforms&&(f.uniforms.stepSize=1.8),"frustumLength"in f.uniforms&&(f.uniforms.frustumLength=1200))))}function W(N,z){P||(P=new z.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),N.scene.postProcessStages.add(P),P.enabled=!1)}function $(N,z){const Q=N==null?void 0:N.scene;Q&&(p=Q.preRender.addEventListener(()=>{var Z;const K=He(N),ie=Number(((Z=N==null?void 0:N.camera)==null?void 0:Z.pitch)??-1.2);u+=1;const H=typeof performance<"u"?performance.now():Date.now();if(H-D>=1e3&&(g=Math.round(u*1e3/(H-D)),u=0,D=H),T&&(T.enabled=c.value,T.uniforms.cameraHeightFactor=Ve(K,150,12e3),T.uniforms.fogDensity=55e-5+(1-T.uniforms.cameraHeightFactor)*.00125),f&&(f.enabled=r.value),P){const ae=ie>-.62,re=ae?Ge((ie+.62)/.5):0;P.enabled=s.value&&ae,P.uniforms.blurStrength=re}b.value&&K>=8e4?(O(N,z,K),a=!1):a||(de(N),a=!0)}))}function O(N,z,Q){var ae;const K=N==null?void 0:N.scene;if(!K)return;d||(d=Ta(N)),wa(N,z),typeof K.highDynamicRange=="boolean"&&(K.highDynamicRange=!0);const ie=(ae=K.postProcessStages)==null?void 0:ae.bloom;ie&&(ie.enabled=!0,ie.uniforms&&("contrast"in ie.uniforms&&(ie.uniforms.contrast=149),"brightness"in ie.uniforms&&(ie.uniforms.brightness=-.12),"delta"in ie.uniforms&&(ie.uniforms.delta=1),"sigma"in ie.uniforms&&(ie.uniforms.sigma=3.25),"stepSize"in ie.uniforms&&(ie.uniforms.stepSize=5)));const H=K.skyAtmosphere;if(!H)return;const Z=Ve(Q,500,12e4);H.hueShift=-.035+Z*.035,H.saturationShift=-.14+Z*.09,H.brightnessShift=.03+(1-Z)*.08}function de(N){var H,Z,ae;const z=N==null?void 0:N.scene;if(!z)return;const Q=((H=t.getCesium)==null?void 0:H.call(t))||window.Cesium;if(d){Ma(N,Q,d),d=null;return}typeof z.highDynamicRange=="boolean"&&E.hdr!==null&&(z.highDynamicRange=E.hdr),"sunBloom"in z&&E.sunBloom!==void 0&&(z.sunBloom=E.sunBloom);const K=z.globe;if(K&&E.globe){const re=E.globe;re.enableLighting!==void 0&&(K.enableLighting=re.enableLighting),re.showGroundAtmosphere!==void 0&&(K.showGroundAtmosphere=re.showGroundAtmosphere),re.dynamicAtmosphereLighting!==void 0&&"dynamicAtmosphereLighting"in K&&(K.dynamicAtmosphereLighting=re.dynamicAtmosphereLighting),re.dynamicAtmosphereLightingFromSun!==void 0&&"dynamicAtmosphereLightingFromSun"in K&&(K.dynamicAtmosphereLightingFromSun=re.dynamicAtmosphereLightingFromSun),re.atmosphereLightIntensity!==void 0&&"atmosphereLightIntensity"in K&&(K.atmosphereLightIntensity=re.atmosphereLightIntensity),re.atmosphereHueShift!==void 0&&"atmosphereHueShift"in K&&(K.atmosphereHueShift=re.atmosphereHueShift),re.atmosphereSaturationShift!==void 0&&"atmosphereSaturationShift"in K&&(K.atmosphereSaturationShift=re.atmosphereSaturationShift),re.atmosphereBrightnessShift!==void 0&&"atmosphereBrightnessShift"in K&&(K.atmosphereBrightnessShift=re.atmosphereBrightnessShift),re.lightingFadeInDistance!==void 0&&"lightingFadeInDistance"in K&&(K.lightingFadeInDistance=re.lightingFadeInDistance),re.lightingFadeOutDistance!==void 0&&"lightingFadeOutDistance"in K&&(K.lightingFadeOutDistance=re.lightingFadeOutDistance),re.nightFadeInDistance!==void 0&&"nightFadeInDistance"in K&&(K.nightFadeInDistance=re.nightFadeInDistance),re.nightFadeOutDistance!==void 0&&"nightFadeOutDistance"in K&&(K.nightFadeOutDistance=re.nightFadeOutDistance)}z.light&&E.light&&E.light.intensity!==void 0&&(z.light.intensity=E.light.intensity);const ie=(Z=z.postProcessStages)==null?void 0:Z.bloom;if(ie&&E.bloom&&(ie.enabled=E.bloom.enabled,ie.uniforms&&("contrast"in ie.uniforms&&E.bloom.contrast!==void 0&&(ie.uniforms.contrast=E.bloom.contrast),"brightness"in ie.uniforms&&E.bloom.brightness!==void 0&&(ie.uniforms.brightness=E.bloom.brightness),"delta"in ie.uniforms&&E.bloom.delta!==void 0&&(ie.uniforms.delta=E.bloom.delta),"sigma"in ie.uniforms&&E.bloom.sigma!==void 0&&(ie.uniforms.sigma=E.bloom.sigma),"stepSize"in ie.uniforms&&E.bloom.stepSize!==void 0&&(ie.uniforms.stepSize=E.bloom.stepSize))),z.skyAtmosphere&&E.sky&&(E.sky.show!==void 0&&(z.skyAtmosphere.show=E.sky.show),z.skyAtmosphere.hueShift=E.sky.hueShift,z.skyAtmosphere.saturationShift=E.sky.saturationShift,z.skyAtmosphere.brightnessShift=E.sky.brightnessShift),E.celestial){const re=E.celestial;z.sun&&re.sunShow!==void 0&&(z.sun.show=re.sunShow),z.moon&&re.moonShow!==void 0&&(z.moon.show=re.moonShow),z.skyBox&&re.skyBoxShow!==void 0&&(z.skyBox.show=re.skyBoxShow)}(ae=z.requestRender)==null||ae.call(z)}function Ie(){o&&(clearInterval(o),o=null)}async function we(){var K,ie;const N=!v.value;if(v.value=N,!N){Ie();return}const z=(K=t.getViewer)==null?void 0:K.call(t),Q=((ie=t.getCesium)==null?void 0:ie.call(t))||window.Cesium;if(!z||!Q){v.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ee(z,Q),ze(z,Q),Ue(z,Q)}catch(H){v.value=!1,n.error("图表模块加载失败",H)}}async function Ee(N,z){await k(),await si(),i.value&&(M||(M=w.init(i.value),We()),h||(h=()=>{M==null||M.resize()},window.addEventListener("resize",h)),M.resize(),Ue(N,z))}function ze(N,z){o||(o=window.setInterval(()=>{!M||!v.value||Ue(N,z)},1200))}function Ue(N,z){var Z;const Q=new Date,K=`${ke(Q.getHours())}:${ke(Q.getMinutes())}:${ke(Q.getSeconds())}`,ie=Number((He(N)/1e3).toFixed(2)),H=Number(z.Math.toDegrees(((Z=N==null?void 0:N.camera)==null?void 0:Z.pitch)??0).toFixed(1));$e(U.labels,K,20),$e(U.cameraHeightKm,ie,20),$e(U.pitchDeg,H,20),$e(U.fps,g,20),M.setOption({xAxis:{data:U.labels},series:[{data:U.cameraHeightKm},{data:U.pitchDeg},{data:U.fps}]})}function We(){M&&M.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function ye(){var Q,K;F&&(clearInterval(F),F=null),Ie();const N=(Q=t.getViewer)==null?void 0:Q.call(t),z=(K=N==null?void 0:N.scene)==null?void 0:K.postProcessStages;p&&(p(),p=null),m&&(m(),m=null),T&&z&&z.remove(T),T=null,P&&z&&z.remove(P),P=null,f&&(_&&z&&z.remove(f),f=null),_=!1,a=!1,N&&de(N),h&&(window.removeEventListener("resize",h),h=null),M&&(M.dispose(),M=null),w=null,l=!1}function He(N){var ie,H,Z;const z=(H=(ie=N==null?void 0:N.scene)==null?void 0:ie.globe)==null?void 0:H.ellipsoid,Q=(Z=N==null?void 0:N.camera)==null?void 0:Z.positionWC;if(!z||!Q)return 0;const K=z.cartesianToCartographic(Q);return Math.max(0,Number((K==null?void 0:K.height)??0))}function Ve(N,z,Q){return!Number.isFinite(N)||Q<=z?0:Ge((N-z)/(Q-z))}function Ge(N){return Math.min(1,Math.max(0,Number(N)||0))}function $e(N,z,Q){N.push(z),N.length>Q&&N.shift()}function ke(N){return String(N).padStart(2,"0")}return(N,z)=>e.headless?ve("",!0):(ee(),ce("div",Ra,[x("div",Ia,[x("div",ka,[z[0]||(z[0]=x("span",{class:"panel-title"},"Cinematic FX",-1)),x("button",{class:"panel-btn",onClick:we},be(v.value?"隐藏图表":"显示图表"),1)]),x("div",za,[Re(pn,{title:"Effect Parameters",controls:S.value,onChange:te},null,8,["controls"])]),et(x("div",{ref_key:"chartRef",ref:i,class:"fx-chart"},null,512),[[mt,v.value]])])]))}},Oa=nt(Na,[["__scopeId","data-v-c7595ca3"]]),Ha={key:0,class:"launcher-count"},Ba={class:"panel-header"},Ua={class:"panel-title-block"},Wa={class:"panel-mark"},Ga={class:"panel-copy"},$a={class:"panel-subtitle"},qa={class:"panel-actions"},ja=["title"],Va={class:"panel-tabs","aria-label":"3D 工具分类"},Xa=["aria-pressed","onClick"],Ya={class:"panel-scroll"},Ka={class:"panel-page"},Za={class:"overview-grid"},Ja={class:"overview-tile"},Qa={class:"overview-tile"},er={class:"overview-tile"},tr={key:0,class:"quick-actions"},nr=["disabled","onClick"],ir={key:1,class:"empty-state"},ar={class:"panel-page"},rr=["aria-expanded"],or={class:"section-main"},sr={class:"section-meta"},lr={key:0,class:"section-body"},cr={class:"option-grid"},ur=["disabled","aria-pressed","title","onClick"],dr={class:"custom-basemap-input-row"},hr=["disabled"],fr={key:0,class:"custom-basemap-current"},mr=["aria-expanded"],pr={class:"section-main"},gr={class:"section-meta"},vr={key:0,class:"section-body"},yr={class:"option-grid"},br=["aria-pressed","title","onClick"],xr=["aria-expanded"],Sr={class:"section-main"},_r={class:"section-meta"},wr={key:0,class:"section-body"},Tr={class:"overlay-list"},Mr=["disabled","aria-pressed","title","onClick"],Dr={class:"overlay-copy"},Lr={class:"overlay-title"},Fr={key:0,class:"overlay-desc"},Pr={key:3,class:"empty-state"},Ar={class:"panel-page"},Cr={class:"module-list"},Er=["aria-expanded","onClick"],Rr={class:"module-icon"},Ir={class:"module-copy"},kr={class:"module-title"},zr={key:0,class:"module-desc"},Nr={class:"module-head-side"},Or={key:0,class:"module-body"},Hr={key:0,class:"module-actions"},Br=["disabled","onClick"],Ur={key:0,class:"empty-state"},Wr={class:"panel-page"},Gr={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},$r={class:"data-upload-hint"},qr={key:0,class:"data-source-list"},jr={class:"data-source-head"},Vr={class:"data-source-count"},Xr=["title","aria-label","onClick"],Yr={class:"data-source-icon"},Kr={class:"data-source-copy"},Zr={class:"data-source-name"},Jr={class:"data-source-type"},Qr={key:1,class:"empty-state"},kn=3,eo=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",to={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(e,{emit:t}){const n=e,i=Y(Array.isArray(n.loadedDataSources)?n.loadedDataSources:[]);Fe(()=>n.loadedDataSources,W=>{const $=Array.isArray(W)?W:[];$!==i.value&&(i.value=$)},{immediate:!0});const c=t,r=k(),s=r.uiStateVersion===kn,b=Y(r.activeTab||"scene"),v=Y(!!r.compactMode),S=Y(new Set(s?r.expandedLayerSectionIds||[]:[])),T=Y(new Set(s?r.expandedModuleIds||[]:[])),P=Y(n.customBasemapUrl||""),f=Y(null),_=Ae(()=>n.embedded||n.open),M=Ae(()=>n.modules.find(W=>W.id==="scene")||null),w=Ae(()=>{var W;return((W=M.value)==null?void 0:W.actions)||[]}),C=Ae(()=>n.modules.filter(W=>W.id!=="scene")),F=Ae(()=>C.value.filter(W=>W.statusTone==="success"||W.statusTone==="warning").length),o=Ae(()=>n.overlayOptions.filter(W=>!!W.active).length),h=[{id:"scene",label:"场景",icon:Yt},{id:"layers",label:"图层",icon:Kt},{id:"data",label:"数据",icon:rn},{id:"modules",label:"模块",icon:Xt}],p=Ae(()=>{var W;return((W=n.basemapOptions.find($=>$.value===n.activeBasemap))==null?void 0:W.label)||"未选择"}),m=Ae(()=>{var W;return((W=n.terrainOptions.find($=>$.value===n.activeTerrain))==null?void 0:W.label)||"未选择"});Fe(()=>n.modules.map(W=>W.id),W=>{W.includes(b.value)||b.value==="scene"||b.value==="layers"||b.value==="modules"||(b.value="scene")},{immediate:!0}),Fe([b,v,S,T],U,{deep:!0}),Fe(()=>n.customBasemapUrl,W=>{W!==P.value&&(P.value=W||"")});function l(W){c("update:open",W)}function d(W){return S.value.has(W)}function a(W){const $=new Set(S.value);$.has(W)?$.delete(W):$.add(W),S.value=$}function u(W){return T.value.has(W)}function g(W){const $=new Set(T.value);$.has(W)?$.delete(W):$.add(W),T.value=$}function D(W){W!=null&&W.disabled||c("update:activeBasemap",W.value)}function A(){c("custom-basemap-submit",{url:P.value})}function k(){if(typeof window>"u")return{};try{const W=window.localStorage.getItem(n.storageKey);return W?JSON.parse(W):{}}catch{return{}}}function U(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:kn,activeTab:b.value,compactMode:v.value,expandedLayerSectionIds:[...S.value],expandedModuleIds:[...T.value]}))}catch{}}function E(W){return{scene:Yt,effects:Ei,wind:Ci,fluid:Ai,shallowWater:Mn}[W]||Xt}function G(W,$){var de;return((de={scene:{home:Fi,everest:wn,tileset:Bt},wind:{load:Li,clear:Zt},fluid:{pick:Tn,clear:Zt},shallowWater:{toggle:Mn}}[W])==null?void 0:de[$])||Pi}function te(W,$){c("module-action",{moduleId:W,actionId:$})}function J(W,$,O){const de=$.type==="range"?Number(O):O;c("control-change",{moduleId:W,controlId:$.id,value:de})}function le(W){W.disabled||c("overlay-toggle",{overlayId:W.value,value:!W.active})}function ge(W){return{geojson:Rt,json:Rt,kml:Dn,kmz:Dn,shp:Kt,gltf:Bt,czml:Rt,"3dtiles":Bt}[W]||Rt}function ue(W){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[W]||W.toUpperCase()}function Ce(W){var O;const $=(O=W.target)==null?void 0:O.files;!$||$.length===0||(c("data-import",{files:Array.from($)}),f.value&&(f.value.value=""))}function Oe(W){c("data-remove",{id:W})}function Le(){c("data-clear-all")}return(W,$)=>(ee(),ce("aside",{class:je(["cesium-tool-shell",{"is-open":_.value,"is-embedded":e.embedded}])},[!e.embedded&&!_.value?(ee(),ce("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:$[0]||($[0]=O=>l(!0))},[Re(fe(Xt),{size:18,"stroke-width":"2"}),$[7]||($[7]=x("span",null,"高级控制台",-1)),F.value?(ee(),ce("span",Ha,be(F.value),1)):ve("",!0)])):ve("",!0),et(x("section",{class:je(["cesium-tool-panel",{compact:v.value}]),"aria-label":"Cesium 高级控制台"},[x("header",Ba,[x("div",Ua,[x("span",Wa,[Re(fe(Yt),{size:18,"stroke-width":"2"})]),x("span",Ga,[$[8]||($[8]=x("span",{class:"panel-title"},"3D 高级控制台",-1)),x("span",$a,be(p.value)+" / "+be(m.value),1)])]),x("div",qa,[x("button",{class:"icon-btn",type:"button",title:v.value?"切换为舒展布局":"切换为紧凑布局",onClick:$[1]||($[1]=O=>v.value=!v.value)},[Re(fe(Mi),{size:16,"stroke-width":"2"})],8,ja),e.embedded?ve("",!0):(ee(),ce("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:$[2]||($[2]=O=>l(!1))},[Re(fe(Sn),{size:17,"stroke-width":"2"})]))])]),x("nav",Va,[(ee(),ce(st,null,ct(h,O=>x("button",{key:O.id,class:je(["tab-btn",{active:b.value===O.id}]),type:"button","aria-pressed":b.value===O.id,onClick:de=>b.value=O.id},[(ee(),Ye(pt(O.icon),{size:15,"stroke-width":"2"})),x("span",null,be(O.label),1)],10,Xa)),64))]),x("div",Ya,[et(x("section",Ka,[x("div",Za,[x("div",Ja,[$[9]||($[9]=x("span",{class:"overview-label"},"地图源",-1)),x("strong",null,be(p.value),1)]),x("div",Qa,[$[10]||($[10]=x("span",{class:"overview-label"},"地形",-1)),x("strong",null,be(m.value),1)]),x("div",er,[$[11]||($[11]=x("span",{class:"overview-label"},"模块",-1)),x("strong",null,be(F.value)+"/"+be(C.value.length),1)])]),w.value.length?(ee(),ce("div",tr,[(ee(!0),ce(st,null,ct(w.value,O=>(ee(),ce("button",{key:O.id,class:je(["tool-action",[O.variant||"default",{active:O.active}]]),disabled:O.disabled,type:"button",onClick:de=>te(M.value.id,O.id)},[(ee(),Ye(pt(G(M.value.id,O.id)),{size:15,"stroke-width":"2"})),Ot(" "+be(O.label),1)],10,nr))),128))])):(ee(),ce("div",ir," 暂无场景快捷操作 "))],512),[[mt,b.value==="scene"]]),et(x("section",ar,[e.basemapOptions.length?(ee(),ce("div",{key:0,class:je(["option-group",{expanded:d("basemap")}])},[x("button",{class:"section-head section-toggle",type:"button","aria-expanded":d("basemap"),onClick:$[3]||($[3]=O=>a("basemap"))},[x("span",or,[Re(fe(Kt),{size:16,"stroke-width":"2"}),$[12]||($[12]=x("span",null,"底图源",-1))]),x("span",sr,[x("span",null,be(p.value),1),Re(fe(Et),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,rr),d("basemap")?(ee(),ce("div",lr,[x("div",cr,[(ee(!0),ce(st,null,ct(e.basemapOptions,O=>(ee(),ce("button",{key:O.value,class:je(["option-card",{active:O.value===e.activeBasemap}]),type:"button",disabled:O.disabled,"aria-pressed":O.value===e.activeBasemap,title:O.description||O.label,onClick:de=>D(O)},[x("span",null,be(O.label),1),O.value===e.activeBasemap?(ee(),Ye(fe(_n),{key:0,size:15,"stroke-width":"2.4"})):ve("",!0)],10,ur))),128))]),x("form",{class:"custom-basemap-editor",onSubmit:gt(A,["prevent"])},[x("div",dr,[Re(fe(Di),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),et(x("input",{"onUpdate:modelValue":$[4]||($[4]=O=>P.value=O),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Ht,P.value]]),x("button",{class:"custom-basemap-submit",type:"submit",disabled:!P.value.trim(),title:"加载自定义 XYZ"},[Re(fe(ui),{size:14,"stroke-width":"2"}),$[13]||($[13]=x("span",null,"加载",-1))],8,hr)]),e.customBasemapUrl?(ee(),ce("div",fr,be(e.customBasemapUrl),1)):ve("",!0)],32)])):ve("",!0)],2)):ve("",!0),e.terrainOptions.length?(ee(),ce("div",{key:1,class:je(["option-group",{expanded:d("terrain")}])},[x("button",{class:"section-head section-toggle",type:"button","aria-expanded":d("terrain"),onClick:$[5]||($[5]=O=>a("terrain"))},[x("span",pr,[Re(fe(wn),{size:16,"stroke-width":"2"}),$[14]||($[14]=x("span",null,"地形",-1))]),x("span",gr,[x("span",null,be(m.value),1),Re(fe(Et),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,mr),d("terrain")?(ee(),ce("div",vr,[x("div",yr,[(ee(!0),ce(st,null,ct(e.terrainOptions,O=>(ee(),ce("button",{key:O.value,class:je(["option-card",{active:O.value===e.activeTerrain}]),type:"button","aria-pressed":O.value===e.activeTerrain,title:O.description||O.label,onClick:de=>W.$emit("update:activeTerrain",O.value)},[x("span",null,be(O.label),1),O.value===e.activeTerrain?(ee(),Ye(fe(_n),{key:0,size:15,"stroke-width":"2.4"})):ve("",!0)],10,br))),128))])])):ve("",!0)],2)):ve("",!0),e.overlayOptions.length?(ee(),ce("div",{key:2,class:je(["option-group",{expanded:d("overlay")}])},[x("button",{class:"section-head section-toggle",type:"button","aria-expanded":d("overlay"),onClick:$[6]||($[6]=O=>a("overlay"))},[x("span",Sr,[Re(fe(Tn),{size:16,"stroke-width":"2"}),$[15]||($[15]=x("span",null,"叠加层",-1))]),x("span",_r,[x("span",null,be(o.value)+"/"+be(e.overlayOptions.length),1),Re(fe(Et),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,xr),d("overlay")?(ee(),ce("div",wr,[x("div",Tr,[(ee(!0),ce(st,null,ct(e.overlayOptions,O=>(ee(),ce("button",{key:O.value,class:je(["overlay-row",{active:!!O.active}]),type:"button",disabled:O.disabled,"aria-pressed":!!O.active,title:O.description||O.label,onClick:de=>le(O)},[x("span",Dr,[x("span",Lr,be(O.label),1),O.description?(ee(),ce("span",Fr,be(O.description),1)):ve("",!0)]),x("span",{class:je(["toggle-control",{active:!!O.active}]),"aria-hidden":"true"},[...$[16]||($[16]=[x("span",{class:"toggle-track"},[x("span",{class:"toggle-thumb"})],-1)])],2)],10,Mr))),128))])])):ve("",!0)],2)):ve("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(ee(),ce("div",Pr," 暂无图层配置项 ")):ve("",!0)],512),[[mt,b.value==="layers"]]),et(x("section",Ar,[x("div",Cr,[(ee(!0),ce(st,null,ct(C.value,O=>{var de,Ie;return ee(),ce("article",{key:O.id,class:je(["module-item",{expanded:u(O.id)}])},[x("button",{class:"module-head",type:"button","aria-expanded":u(O.id),onClick:we=>g(O.id)},[x("span",Rr,[(ee(),Ye(pt(E(O.id)),{size:16,"stroke-width":"2"}))]),x("span",Ir,[x("span",kr,be(O.title),1),O.description?(ee(),ce("span",zr,be(O.description),1)):ve("",!0)]),x("span",Nr,[O.status?(ee(),ce("span",{key:0,class:je(["module-status",O.statusTone||"neutral"])},be(O.status),3)):ve("",!0),Re(fe(Et),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Er),u(O.id)?(ee(),ce("div",Or,[(de=O.actions)!=null&&de.length?(ee(),ce("div",Hr,[(ee(!0),ce(st,null,ct(O.actions,we=>(ee(),ce("button",{key:we.id,class:je(["tool-action",[we.variant||"default",{active:we.active}]]),disabled:we.disabled,type:"button",onClick:Ee=>te(O.id,we.id)},[(ee(),Ye(pt(G(O.id,we.id)),{size:14,"stroke-width":"2"})),Ot(" "+be(we.label),1)],10,Br))),128))])):ve("",!0),(Ie=O.controls)!=null&&Ie.length?(ee(),ce("div",{key:1,class:je(["control-list control-list-gui",O.controlLayout?`control-list-${O.controlLayout}`:""])},[Re(pn,{title:O.title,controls:O.controls,onChange:we=>J(O.id,we.control,we.value)},null,8,["title","controls","onChange"])],2)):ve("",!0)])):ve("",!0)],2)}),128))]),C.value.length?ve("",!0):(ee(),ce("div",Ur," 暂无可用功能模块 "))],512),[[mt,b.value==="modules"]]),et(x("section",Wr,[x("label",Gr,[x("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:f,class:"data-file-input",type:"file",multiple:"",accept:eo,onChange:Ce},null,544),x("div",$r,[Re(fe(rn),{size:28,"stroke-width":"1.5"}),$[17]||($[17]=x("span",null,"选择文件或拖拽到此处",-1)),$[18]||($[18]=x("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),i.value.length?(ee(),ce("div",qr,[x("div",jr,[x("span",Vr," 已加载 "+be(i.value.length)+" 个数据源 ",1),x("button",{class:"tool-action danger",type:"button",onClick:Le},[Re(fe(Zt),{size:13,"stroke-width":"2"}),$[19]||($[19]=Ot(" 全部清除 ",-1))])]),(ee(!0),ce(st,null,ct(i.value,O=>(ee(),ce("button",{key:O.id,class:"data-source-row",type:"button",title:`点击移除 ${O.name} (${ue(O.type)})`,"aria-label":`移除 ${O.name}`,onClick:de=>Oe(O.id)},[x("span",Yr,[(ee(),Ye(pt(ge(O.type)),{size:15,"stroke-width":"2"}))]),x("span",Kr,[x("span",Zr,be(O.name),1),x("span",Jr,be(ue(O.type)),1)]),Re(fe(Sn),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,Xr))),128))])):(ee(),ce("div",Qr," 暂无已导入的数据 "))],512),[[mt,b.value==="data"]])])],2),[[mt,e.embedded||_.value]])],2))}},no=nt(to,[["__scopeId","data-v-c66eae0a"]]),io={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},ao={class:"dialog-header"},ro={class:"dialog-title-row"},oo={class:"dialog-file-name"},so={class:"coord-fields"},lo={class:"coord-field"},co={key:0,class:"coord-error"},uo={class:"coord-field"},ho={key:0,class:"coord-error"},fo={class:"coord-field"},mo={key:0,class:"coord-error"},po={class:"dialog-actions"},go=["disabled"],vo={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,i=t,c=Y(""),r=Y(""),s=Y("0"),b=Y(null),v=Y(""),S=Y(""),T=Y(""),P=Ae(()=>c.value!==""&&r.value!==""&&!v.value&&!S.value&&!T.value);function f(){const M=parseFloat(c.value),w=parseFloat(r.value),C=parseFloat(s.value);v.value="",S.value="",T.value="",c.value!==""&&(isNaN(M)||M<-180||M>180)&&(v.value="经度范围: -180 ~ 180"),r.value!==""&&(isNaN(w)||w<-90||w>90)&&(S.value="纬度范围: -90 ~ 90"),s.value!==""&&(isNaN(C)||C<0)&&(T.value="高度必须 ≥ 0")}function _(){if(!P.value){f();return}const M=parseFloat(c.value),w=parseFloat(r.value),C=parseFloat(s.value)||0;i("confirm",{lng:M,lat:w,height:C})}return Fe(()=>n.visible,M=>{if(!M){v.value="",S.value="",T.value="";return}c.value="",r.value="",s.value="0",v.value="",S.value="",T.value="",M&&setTimeout(()=>{var w;(w=b.value)==null||w.focus()},60)}),(M,w)=>(ee(),Ye(pi,{to:"body"},[e.visible?(ee(),ce("div",{key:0,class:"cesium-data-dialog-overlay",onClick:w[4]||(w[4]=gt(C=>M.$emit("cancel"),["self"]))},[x("div",io,[x("header",ao,[x("div",ro,[Re(fe(Bt),{size:18,"stroke-width":"2"}),w[5]||(w[5]=x("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),x("p",oo,be(e.fileName),1),w[6]||(w[6]=x("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),x("form",{class:"dialog-form",onSubmit:gt(_,["prevent"])},[x("div",so,[x("label",lo,[w[7]||(w[7]=x("span",{class:"coord-label"},"经度 (Longitude)",-1)),et(x("input",{ref_key:"lngInputRef",ref:b,"onUpdate:modelValue":w[0]||(w[0]=C=>c.value=C),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:f},null,544),[[Ht,c.value]]),v.value?(ee(),ce("span",co,be(v.value),1)):ve("",!0)]),x("label",uo,[w[8]||(w[8]=x("span",{class:"coord-label"},"纬度 (Latitude)",-1)),et(x("input",{"onUpdate:modelValue":w[1]||(w[1]=C=>r.value=C),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:f},null,544),[[Ht,r.value]]),S.value?(ee(),ce("span",ho,be(S.value),1)):ve("",!0)]),x("label",fo,[w[9]||(w[9]=x("span",{class:"coord-label"},"高度 (Height 米)",-1)),et(x("input",{"onUpdate:modelValue":w[2]||(w[2]=C=>s.value=C),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:f},null,544),[[Ht,s.value]]),T.value?(ee(),ce("span",mo,be(T.value),1)):ve("",!0)])]),x("div",po,[x("button",{class:"dialog-btn cancel-btn",type:"button",onClick:w[3]||(w[3]=C=>M.$emit("cancel"))}," 取消 "),x("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!P.value},[Re(fe(ui),{size:14,"stroke-width":"2"}),w[10]||(w[10]=Ot(" 确认放置 ",-1))],8,go)])],32)])])):ve("",!0)]))}},yo=nt(vo,[["__scopeId","data-v-81f307a1"]]);function bo(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(F){return(F==null?void 0:F._view)||(F==null?void 0:F.view)}function n(F){const o=t(F);if(!(o!=null&&o.passState))throw new Error("Cesium scene passState is unavailable.");return o.passState}function i(F){const o=t(F);return(o==null?void 0:o.frustumCommandsList)||(o==null?void 0:o._frustumCommandsList)||[]}const c=`
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
`;class T{constructor(o){this.commandType=o.commandType,this.geometry=o.geometry,this.attributeLocations=o.attributeLocations,this.primitiveType=o.primitiveType,this.uniformMap=o.uniformMap,this.vertexShaderSource=o.vertexShaderSource,this.fragmentShaderSource=o.fragmentShaderSource,this.rawRenderState=o.rawRenderState,this.framebuffer=o.framebuffer,this.isPostRender=o.isPostRender,this.outputTexture=o.outputTexture,this.autoClear=e.defaultValue(o.autoClear,!1),this.preExecute=o.preExecute,this.modelMatrix=e.defaultValue(o.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(o){switch(this.commandType){case"Draw":{const h=e.VertexArray.fromGeometry({context:o,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),p=e.ShaderProgram.fromCache({context:o,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),m=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:h,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:p,framebuffer:this.framebuffer,renderState:m,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(o,h){this.geometry=h;const p=e.VertexArray.fromGeometry({context:o,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=p}update(o){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(o.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&o.commandList.push(this.clearCommand),o.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class P{constructor(){}static loadText(o){const h=new XMLHttpRequest;return h.open("GET",o,!1),h.send(),h.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(o){if(e.defined(o.arrayBufferView)){const p={};p.arrayBufferView=o.arrayBufferView,o.source=p,o.flipY=!1}return new e.Texture(o)}static createDepthFramebuffer(o,h,p){return new e.Framebuffer({context:o,colorTextures:[this.createTexture({context:o,width:h,height:p,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(h*p*4)})],depthRenderbuffer:new e.Renderbuffer({context:o,width:h,height:p,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(o,h,p,m=!1){const l={context:o,colorTextures:[h],destroyAttachments:m};return p&&(l.depthTexture=p),new e.Framebuffer(l)}static createRawRenderState(o){const m={viewport:o.viewport,depthTest:o.depthTest,depthMask:o.depthMask,blending:o.blending};return e.Appearance.getDefaultRenderState(!0,!1,m)}}const C=class C{constructor(o,h={}){if(!o)throw new Error("Cesium Viewer is required");this.viewer=o,this._initConfiguration(h),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(o){this.config={resolution:new e.Cartesian2(o.width||C.DEFAULTS.width,o.height||C.DEFAULTS.height),dimensions:o.dimensions||C.DEFAULTS.dimensions.clone(),heightRange:{min:o.minHeight??C.DEFAULTS.heightRange[0],max:o.maxHeight??C.DEFAULTS.heightRange[1]},baseHeight:o.baseHeight??C.DEFAULTS.baseHeight,fluidParams:o.fluidParams||C.DEFAULTS.fluidParams.clone(),customParams:o.customParams||C.DEFAULTS.customParams.clone(),waterColor:o.waterColor||C.DEFAULTS.waterColor.clone(),lonLat:o.lonLat||[...C.DEFAULTS.lonLat],timeStep:o.timeStep||C.DEFAULTS.timeStep,heightMapSource:o.heightMapSource||C.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(o){const h=Number(o);!Number.isFinite(h)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,h)),this.resetSimulation())}resetSimulation(){var o,h;this._frameCount=0,(h=(o=this.viewer.scene).requestRender)==null||h.call(o)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const o=()=>P.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:o(),B:o(),C:o(),D:o()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(o){if(!(o!=null&&o.arrayBufferView)||!o.width||!o.height)throw new Error("Invalid height map source.");return P.createTexture({context:this.viewer.scene.context,width:o.width,height:o.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:o.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var k,U;const o=this.viewer.scene.context,h=P.createDepthFramebuffer(o,this.config.resolution.x,this.config.resolution.y),p=this.viewer.scene,m=p.frameState,l=n(this.viewer.scene),d=p.camera,a=m.camera,u=l.framebuffer,g=e.BoundingRectangle.clone(l.viewport,new e.BoundingRectangle);let D=null,A=[];try{l.viewport.x=0,l.viewport.y=0,l.viewport.width=this.config.resolution.x,l.viewport.height=this.config.resolution.y,l.framebuffer=h,p.camera=this.heightMapCamera,m.camera=this.heightMapCamera,m.context.uniformState.updateCamera(this.heightMapCamera),A=this._processHeightMapShaders(),this._renderDepthPrepass(l);const E=P.createTexture({context:o,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return D=P.createFramebuffer(o,E),this._copyTexture(h.getColorTexture(0),D),E}finally{this._restoreHeightMapShaders(A),l.framebuffer=u,e.BoundingRectangle.clone(g,l.viewport),p.camera=d,m.camera=a,a&&m.context.uniformState.updateCamera(a),D&&!((k=D.isDestroyed)!=null&&k.call(D))&&D.destroy(),h&&!((U=h.isDestroyed)!=null&&U.call(h))&&h.destroy()}}_renderDepthPrepass(o){const h=this.viewer.scene.frameState;h.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(m=>m.execute(this.viewer.scene.context,o))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const o={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...o,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:r}),this._createComputePass("B",{uniforms:{...o,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:s}),this._createComputePass("C",{uniforms:{...o,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:b}),this._createComputePass("D",{uniforms:{...o,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:v})]}_createComputePass(o,{uniforms:h,shaderSource:p}){return new T({commandType:"Compute",uniformMap:h,fragmentShaderSource:new e.ShaderSource({sources:[c,p]}),geometry:P.getFullscreenQuad(),outputTexture:this.textures[o],preExecute:m=>m.commandToExecute.outputTexture=this.textures[o]})}_createMainRenderPass(){const o=_([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new T({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[c,S]}),geometry:this._createBoxGeometry(),modelMatrix:o,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var o,h,p,m;return(m=(p=(h=(o=t(this.viewer.scene))==null?void 0:o.globeDepth)==null?void 0:h.colorFramebufferManager)==null?void 0:p._colorTextures)==null?void 0:m[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(o=>this.viewer.scene.primitives.add(o)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(o){const h=this.viewer.camera.getPickRay(o);return this.viewer.scene.globe.pick(h,this.viewer.scene)}_createOrthographicCamera(){const o=new e.Camera(this.viewer.scene);o.frustum=new e.OrthographicOffCenterFrustum;const[h,p]=this.config.lonLat,m=e.Cartesian3.fromDegrees(h,p,this.config.baseHeight),l=e.Transforms.eastNorthUpToFixedFrame(m),d=o.frustum;d.near=.01,d.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),d.left=-this.config.dimensions.x/2,d.right=this.config.dimensions.x/2,d.bottom=-this.config.dimensions.y/2,d.top=this.config.dimensions.y/2;const a=e.Matrix4.getColumn(l,2,new e.Cartesian3);e.Cartesian3.negate(a,a);const u=e.Matrix4.getColumn(l,1,new e.Cartesian3),g=e.Matrix4.getColumn(l,0,new e.Cartesian3),D=e.Cartesian3.multiplyByScalar(a,-d.far,new e.Cartesian3);return o.position=e.Cartesian3.add(m,D,new e.Cartesian3),o.direction=a,o.up=u,o.right=g,o}destroy(){var o,h;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(p=>{p&&this.viewer.scene.primitives.remove(p)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(p=>{var m;p&&!((m=p.isDestroyed)!=null&&m.call(p))&&p.destroy()}),this.textures={},this._heightMap&&!((h=(o=this._heightMap).isDestroyed)!=null&&h.call(o))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(o,h){const p=this.viewer.scene.context,m=n(this.viewer.scene),l=p.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>o},owner:this}),d=m.framebuffer;m.framebuffer=h,l.execute(p,m),m.framebuffer=d}_getDepthRenderCommands(){var p,m;const o=[],h=i(this.viewer.scene);for(let l=0;l<h.length;++l){const d=h[l],a=(p=d==null?void 0:d.commands)==null?void 0:p[2],u=((m=d==null?void 0:d.indices)==null?void 0:m[2])??(a==null?void 0:a.length)??0;a&&u>0&&o.push(...a.slice(0,u))}return o}_processHeightMapShaders(){const o=[],h=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),p=e.Matrix4.inverse(h,new e.Matrix4),m=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(d=>{var A;if(!((A=d==null?void 0:d.shaderProgram)!=null&&A.fragmentShaderSource)||!d.uniformMap)return;const a=Object.prototype.hasOwnProperty.call(d.uniformMap,"u_inverseEnuMatrix"),u=d.uniformMap.u_inverseEnuMatrix,g=d.shaderProgram,D=new e.Matrix4;d.uniformMap.u_inverseEnuMatrix=()=>{const k=d.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(p,k,D)},d.heightMap_ShaderProgram||(d.heightMap_ShaderProgram=this._getDerivedShaderProgram(m.context,d.shaderProgram,"Height_Map")),d.shaderProgram=d.heightMap_ShaderProgram,o.push({command:d,hadInverseUniform:a,originalInverseUniform:u,originalShaderProgram:g})}),o}_restoreHeightMapShaders(o){o.forEach(h=>{const{command:p,hadInverseUniform:m,originalInverseUniform:l,originalShaderProgram:d}=h;p!=null&&p.uniformMap&&(p.shaderProgram=d,m?p.uniformMap.u_inverseEnuMatrix=l:delete p.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(o,h,p){let m=o.shaderCache.getDerivedShaderProgram(h,p);return e.defined(m)||(m=this._createHeightMapShaderProgram(o,h,p)),m}_createHeightMapShaderProgram(o,h,p){const m=this._modifyFragmentShader(h.fragmentShaderSource);return o.shaderCache.createDerivedShaderProgram(h,p,{vertexShaderSource:h.vertexShaderSource,fragmentShaderSource:m,attributeLocations:h._attributeLocations})}_modifyFragmentShader(o){const h=o.sources.map(p=>e.ShaderSource.replaceMain(p,"czm_heightMap_main"));return h.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:h,defines:o.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};tt(C,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let f=C;const _=(F=[0,0,0],o=[0,0,0],h=[1,1,1])=>{const p=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(o[0]))),m=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(o[1]))),l=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(o[2])));F instanceof e.Cartesian3||(F=e.Cartesian3.fromDegrees(...F));const d=e.Transforms.eastNorthUpToFixedFrame(F);e.Matrix4.multiply(d,p,d),e.Matrix4.multiply(d,m,d),e.Matrix4.multiply(d,l,d);const a=e.Matrix4.fromScale(new e.Cartesian3(...h));return e.Matrix4.multiply(d,a,new e.Matrix4)},M=`
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
    `;function w(){return new e.PostProcessStage({fragmentShader:M})}return{FluidRenderer:f,createSkyEffect:w}}const xo={key:0,class:"fluid-root"},So={class:"fluid-panel"},_o={class:"panel-actions"},wo=["disabled"],To={key:0,class:"selected-text"},zn=1024,zt=1e4,Nn=1200,Mo=100,Do=.01,Lo=.03,Fo=60,Qt=64,Po=160,Ao={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const i=e,c=n,r=dn(),s=Y(10),b=Y(20),v=Y(3),S=Y("#0d4fa3"),T=Y(null),P=Y(null),f=Y(null),_=Y(!1),M=Y(!1),w=Y(null),C=Y(null),F=Y(!1),o=Y(5);let h=null,p=null,m=null,l=null,d=null,a=null,u=null,g=null,D=0;const A=Ae(()=>!Number.isFinite(w.value)||!Number.isFinite(C.value)?"":`经度 ${w.value.toFixed(6)} / 纬度 ${C.value.toFixed(6)}`),k=Ae(()=>Number.isFinite(P.value)&&Number.isFinite(f.value)),U=Ae(()=>{if(!k.value)return 1;const L=Math.abs(f.value-P.value);return Math.max(L/1e3,.01)}),E=Ae(()=>[{id:"threshold",label:"Threshold",type:"range",min:0,max:500,step:1e-4,value:s.value,displayValue:Number(s.value).toFixed(2)},{id:"blend",label:"Blend",type:"range",min:0,max:50,step:1e-4,value:b.value,displayValue:Number(b.value).toFixed(2)},{id:"lightStrength",label:"Light",type:"range",min:0,max:10,step:1e-4,value:v.value,displayValue:Number(v.value).toFixed(2)},{id:"waterLevel",label:"Water Level",type:"range",min:k.value?P.value:0,max:k.value?f.value:1,step:U.value,value:Number.isFinite(Number(T.value))?Number(T.value):0,displayValue:k.value&&Number.isFinite(Number(T.value))?`${Number(T.value).toFixed(2)} m`:"Pick terrain first",disabled:!k.value},{id:"waterColor",label:"Water Color",type:"color",value:S.value}]);Fe([s,b,v,S],z),Fe(T,Q),Fe(()=>i.params,L=>{te(L||{})},{deep:!0,immediate:!0}),Fe([_,M,A,T,P,f,F,o],le,{immediate:!0}),oi(()=>{ae(),Be(!0)});function G(){var j,ne;const L=(j=i.getViewer)==null?void 0:j.call(i),I=((ne=i.getCesium)==null?void 0:ne.call(i))||window.Cesium;if(!L||!I)return r.warning("Cesium 场景尚未就绪。"),null;if(!m){const se=bo(I);m=se.FluidRenderer,l=se.createSkyEffect}return{viewer:L,Cesium:I}}function te(L){Number.isFinite(Number(L.threshold))&&(s.value=Number(L.threshold)),Number.isFinite(Number(L.blend))&&(b.value=Number(L.blend)),Number.isFinite(Number(L.lightStrength))&&(v.value=Number(L.lightStrength)),Ge(L.waterColor)&&(S.value=L.waterColor),Number.isFinite(Number(L.waterLevel))&&(T.value=Number(L.waterLevel))}function J({controlId:L,value:I}){L==="threshold"?s.value=Number(I):L==="blend"?b.value=Number(I):L==="lightStrength"?v.value=Number(I):L==="waterLevel"?T.value=Number(I):L==="waterColor"&&Ge(I)&&(S.value=I)}function le(){c("state-change",{isPicking:_.value,hasFluid:M.value,selectedText:A.value,waterLevel:T.value,waterLevelMin:P.value,waterLevelMax:f.value,floodSimActive:F.value,floodSpeed:o.value})}function ge(){const L=G();if(!L)return;const{viewer:I,Cesium:j}=L;pe(),K(I,j),_.value=!0,d=new j.ScreenSpaceEventHandler(I.scene.canvas),d.setInputAction(ne=>{ue(I,j,ne.position)},j.ScreenSpaceEventType.LEFT_CLICK)}async function ue(L,I,j){var Te,Pe;const ne=N(L,j);if(!ne){r.warning("未选中可用地形位置。");return}const se=++D;pe();const xe=I.Cartographic.fromCartesian(ne),y=I.Math.toDegrees(xe.longitude),R=I.Math.toDegrees(xe.latitude),q=Number(xe.height),X=Number.isFinite(q)?q:0,he=new I.Cartesian3(zt,zt,0);li("正在请求模拟范围高度数据...");try{Ne();const B=Number(s.value)||0,V=Number(b.value)||0,oe=Number(v.value)||0,me=await Ce(L,I,{lon:y,lat:R,centerHeight:X,dimensions:he}),De=ze(me,X),Xe=De.baseHeight,Ke=De.depth,xt=Ue(De,X),Ct=new I.Cartesian3(zt,zt,Ke);if(se!==D)return;P.value=De.minHeight,f.value=De.maxHeight,T.value=xt;const St=Math.abs(De.maxHeight-De.minHeight);St>0&&(o.value=Math.max(St/10,.1)),me||r.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),a=new m(L,{lonLat:[y,R],width:zn,height:zn,dimensions:Ct,baseHeight:Xe,minHeight:De.minHeight,maxHeight:De.maxHeight,heightMapSource:me,waterColor:He(I,S.value),customParams:new I.Cartesian4(B,V,oe,10),fluidParams:new I.Cartesian4(.9+oe/10*.099,Math.min(1,V/50),B/5e4,We(xt,De))}),w.value=y,C.value=R,M.value=!0,(Pe=(Te=L.scene).requestRender)==null||Pe.call(Te),r.success("水体流体已创建。")}catch(B){r.error("水体流体创建失败",B),r.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{ci()}}async function Ce(L,I,j){const ne=L==null?void 0:L.terrainProvider,se=Le(j.dimensions);if(!ne)return null;if(I.EllipsoidTerrainProvider&&ne instanceof I.EllipsoidTerrainProvider)return we(se);if(typeof I.sampleTerrain!="function"&&typeof I.sampleTerrainMostDetailed!="function")return null;try{return await Oe(L,I,j,se)}catch(xe){if(se<=Qt)throw xe;return Oe(L,I,j,Qt)}}async function Oe(L,I,j,ne){const se=$(I,j,ne),xe=await O(I,L.terrainProvider,se);return Ie(xe||se,{size:ne})}function Le(L){const I=Math.max(Number(L==null?void 0:L.x)||0,Number(L==null?void 0:L.y)||0),j=Math.ceil(I/Fo)+1;return W(j,Qt,Po)}function W(L,I,j){return Math.max(I,Math.min(j,Math.round(L)))}function $(L,{lon:I,lat:j,centerHeight:ne,dimensions:se},xe){const y=L.Cartesian3.fromDegrees(I,j,ne),R=L.Transforms.eastNorthUpToFixedFrame(y),q=[],X=Math.max(1,xe-1);for(let he=0;he<xe;he++){const Pe=(.5-he/X)*se.y;for(let B=0;B<xe;B++){const oe=(B/X-.5)*se.x,me=new L.Cartesian3(oe,Pe,0),De=L.Matrix4.multiplyByPoint(R,me,new L.Cartesian3);q.push(L.Cartographic.fromCartesian(De))}}return q}async function O(L,I,j){const ne=de(I),se=Number.isInteger(ne)?ne:Math.min((I==null?void 0:I.maximumLevel)??12,12);return typeof L.sampleTerrain=="function"?L.sampleTerrain(I,se,j):L.sampleTerrainMostDetailed(I,j)}function de(L){const I=Number(L==null?void 0:L._bottomLevel);return Number.isFinite(I)?Math.max(0,I-1):null}function Ie(L,{size:I}){var se;const j=Ee(L);if(!j)return null;const ne=new Float32Array(I*I*4);for(let xe=0;xe<I*I;xe++){const y=Number((se=L[xe])==null?void 0:se.height),R=xe*4;ne[R]=Number.isFinite(y)?ke(y,j.minHeight,j.maxHeight):j.minHeight,ne[R+1]=0,ne[R+2]=0,ne[R+3]=1}return{width:I,height:I,arrayBufferView:ne,minHeight:j.minHeight,maxHeight:j.maxHeight}}function we(L){return{width:L,height:L,arrayBufferView:new Float32Array(L*L*4),minHeight:0,maxHeight:0}}function Ee(L){let I=Number.POSITIVE_INFINITY,j=Number.NEGATIVE_INFINITY;for(const ne of L||[]){const se=Number(ne==null?void 0:ne.height);Number.isFinite(se)&&(I=Math.min(I,se),j=Math.max(j,se))}return!Number.isFinite(I)||!Number.isFinite(j)?null:{minHeight:I,maxHeight:j}}function ze(L,I){const j=Number(L==null?void 0:L.minHeight),ne=Number(L==null?void 0:L.maxHeight);if(Number.isFinite(j)&&Number.isFinite(ne)){const y=Number(I),R=Number.isFinite(y)?Math.min(j,ne,y):Math.min(j,ne),q=Number.isFinite(y)?Math.max(j,ne,y):Math.max(j,ne),X=Math.max(q-R,Do);return{baseHeight:R,depth:X,minHeight:R,maxHeight:R+X}}const se=Number(I),xe=Number.isFinite(se)?se-Mo:0;return{baseHeight:xe,depth:Nn,minHeight:xe,maxHeight:xe+Nn}}function Ue(L,I){const j=L.minHeight+L.depth*Lo,ne=Number(I),se=Number.isFinite(ne)?ne:j;return ke(se,L.minHeight,L.maxHeight)}function We(L,I){const j=I.maxHeight-I.minHeight;return!Number.isFinite(j)||j<=0?0:ke((L-I.minHeight)/j,0,1)}function ye(){return!Number.isFinite(P.value)||!Number.isFinite(f.value)?null:{minHeight:Math.min(P.value,f.value),maxHeight:Math.max(P.value,f.value)}}function He(L,I){const j=$e(I)||$e("#0d4fa3");return new L.Cartesian3(j.red,j.green,j.blue)}function Ve(){var j;const L=$e(S.value),I=(j=a==null?void 0:a.config)==null?void 0:j.waterColor;!L||!I||(I.x=L.red,I.y=L.green,I.z=L.blue)}function Ge(L){return typeof L=="string"&&/^#[0-9a-f]{6}$/i.test(L)}function $e(L){return Ge(L)?{red:Number.parseInt(L.slice(1,3),16)/255,green:Number.parseInt(L.slice(3,5),16)/255,blue:Number.parseInt(L.slice(5,7),16)/255}:null}function ke(L,I,j){return Math.max(I,Math.min(j,L))}function N(L,I){if(!I)return null;if(L.scene.pickPositionSupported&&typeof L.scene.pickPosition=="function"){const ne=L.scene.pickPosition(I);if(ne)return ne}const j=L.camera.getPickRay(I);return j?L.scene.globe.pick(j,L.scene):null}function z(){var ne,se,xe;if(!(a!=null&&a.config))return;const L=Number(s.value)||0,I=Number(b.value)||0,j=Number(v.value)||0;a.config.customParams&&(a.config.customParams.x=L,a.config.customParams.y=I,a.config.customParams.z=j),a.config.fluidParams&&(a.config.fluidParams.x=.9+j/10*.099,a.config.fluidParams.y=Math.min(1,I/50),a.config.fluidParams.z=L/5e4),Ve(),(xe=(se=(ne=a.viewer)==null?void 0:ne.scene)==null?void 0:se.requestRender)==null||xe.call(se)}function Q(){var se,xe,y,R;if(!((se=a==null?void 0:a.config)!=null&&se.fluidParams))return;const L=ye(),I=Number(T.value);if(!L||!Number.isFinite(I))return;const j=ke(I,L.minHeight,L.maxHeight);if(j!==I){T.value=j;return}const ne=We(j,L);typeof a.setInitialWaterLevel=="function"?a.setInitialWaterLevel(ne):(a.config.fluidParams.w=ne,(R=(y=(xe=a.viewer)==null?void 0:xe.scene)==null?void 0:y.requestRender)==null||R.call(y))}function K(L,I){var j,ne;if(!g){const se=L.scene;g={shadows:L.shadows,resolutionScale:L.resolutionScale,msaaSamples:se.msaaSamples,depthTestAgainstTerrain:se.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:se.logarithmicDepthBuffer,highDynamicRange:se.highDynamicRange,fogEnabled:(j=se.fog)==null?void 0:j.enabled,showGroundAtmosphere:se.globe.showGroundAtmosphere,skyAtmosphereShow:(ne=se.skyAtmosphere)==null?void 0:ne.show,enableLighting:se.globe.enableLighting}}L.shadows=!0,L.resolutionScale=1,L.scene.msaaSamples=4,L.scene.globe.depthTestAgainstTerrain=!0,L.scene.logarithmicDepthBuffer=!0,L.scene.highDynamicRange=!0,L.scene.fog&&(L.scene.fog.enabled=!0),L.scene.globe.showGroundAtmosphere=!0,L.scene.skyAtmosphere&&(L.scene.skyAtmosphere.show=!0),L.scene.globe.enableLighting=!0,!u&&l&&(u=l(I),L.scene.postProcessStages.add(u))}function ie(L){if(!L||!g)return;const I=L.scene;L.shadows=g.shadows,L.resolutionScale=g.resolutionScale,g.msaaSamples!==void 0&&(I.msaaSamples=g.msaaSamples),I.globe.depthTestAgainstTerrain=g.depthTestAgainstTerrain,I.logarithmicDepthBuffer=g.logarithmicDepthBuffer,I.highDynamicRange=g.highDynamicRange,I.fog&&g.fogEnabled!==void 0&&(I.fog.enabled=g.fogEnabled),I.globe.showGroundAtmosphere=g.showGroundAtmosphere,I.skyAtmosphere&&g.skyAtmosphereShow!==void 0&&(I.skyAtmosphere.show=g.skyAtmosphereShow),I.globe.enableLighting=g.enableLighting,g=null}function H(){F.value?ae():Z()}function Z(){const L=ye();if(!L)return;const I=Number(T.value);(!Number.isFinite(I)||I>=L.maxHeight-.01)&&(T.value=L.minHeight),F.value=!0,p=null;function j(ne){if(!F.value)return;p===null&&(p=ne);const se=Math.min((ne-p)/1e3,.1);p=ne;const xe=ye();if(!xe){ae();return}const R=Number(T.value)+o.value*se;if(R>=xe.maxHeight){T.value=xe.maxHeight,ae(),r.info("洪水模拟完成：水位已达最大值");return}T.value=R,h=requestAnimationFrame(j)}h=requestAnimationFrame(j),r.info("洪水模拟开始")}function ae(){F.value=!1,p=null,h!==null&&(cancelAnimationFrame(h),h=null)}function re(){ae(),Be(!1),r.success("水体流体已清除。")}function pe(){d&&(d.destroy(),d=null),_.value=!1}function Ne(){if(a){try{a.destroy()}catch{}a=null,M.value=!1}}function Be(L){var j,ne,se;const I=(j=i.getViewer)==null?void 0:j.call(i);if(D+=1,ae(),pe(),Ne(),w.value=null,C.value=null,T.value=null,P.value=null,f.value=null,I&&u){try{I.scene.postProcessStages.remove(u)}catch{}u=null}L&&I&&ie(I),(se=(ne=I==null?void 0:I.scene)==null?void 0:ne.requestRender)==null||se.call(ne)}function Me(){Be(!0),c("close")}function Je(L){const I=Number(L);Number.isFinite(I)&&I>0&&(o.value=I)}return t({startPickHeightMap:ge,clearFluid:re,toggleFloodSimulation:H,stopFloodSimulation:ae,setFloodSpeed:Je}),(L,I)=>e.headless?ve("",!0):(ee(),ce("div",xo,[x("div",So,[x("div",{class:"panel-head"},[I[0]||(I[0]=x("span",{class:"panel-title"},"水体流体",-1)),x("button",{class:"panel-close",title:"关闭",onClick:Me}," × ")]),x("div",_o,[x("button",{class:je(["action-btn primary",{active:_.value}]),onClick:ge},be(_.value?"等待选点":"捕捉高度图"),3),x("button",{class:"action-btn",disabled:!M.value&&!_.value,onClick:re}," 清除 ",8,wo)]),A.value?(ee(),ce("div",To,be(A.value),1)):ve("",!0),Re(pn,{class:"param-list",title:"Fluid Parameters",controls:E.value,onChange:J},null,8,["controls"])])]))}},Co=nt(Ao,[["__scopeId","data-v-2de8b792"]]),Eo=`
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
`+Eo).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  float cDepth = smoothstep( 0.0, -2.0, vCWorld.y );
  float caus = causticX( vCWorld.xz * 0.06 );
  caus += causticX( vCWorld.xz * 0.13 + 40.0 ) * 0.6;
  totalEmissiveRadiance += vec3( 0.45, 0.85, 0.8 ) * caus * cDepth * uCaustic;`)}}const Ro=`
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
`,ko=`
  varying vec3 vWorldPos;

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,zo=`
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
`;function No(e=256){const t=new Float32Array(e*e);for(let f=0;f<e*e;f++)t[f]=Math.random();const n=(f,_)=>{const M=new Float32Array(e*e);for(let w=0;w<e;w++)for(let C=0;C<e;C++){let F=0,o=0;for(let h=-_;h<=_;h++)for(let p=-_;p<=_;p++)F+=f[(w+h+e)%e*e+(C+p+e)%e],o++;M[w*e+C]=F/o}return M},i=n(t,4),c=n(t,1),r=new Float32Array(e*e);for(let f=0;f<e*e;f++)r[f]=i[f]*.7+c[f]*.3;const s=document.createElement("canvas");s.width=s.height=e;const b=s.getContext("2d"),v=b.createImageData(e,e),S=(f,_)=>r[(_+e)%e*e+(f+e)%e],T=3;for(let f=0;f<e;f++)for(let _=0;_<e;_++){const M=(S(_-1,f)-S(_+1,f))*T,w=(S(_,f-1)-S(_,f+1))*T,C=Math.hypot(M,w,1),F=(f*e+_)*4;v.data[F]=(M/C*.5+.5)*255,v.data[F+1]=(w/C*.5+.5)*255,v.data[F+2]=(1/C*.5+.5)*255,v.data[F+3]=255}b.putImageData(v,0,0);const P=new hn(s);return P.wrapS=P.wrapT=fn,P.colorSpace=di,P}function Oo(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#d8c79b",t.fillRect(0,0,512,512);for(let i=0;i<12e3;i++){const c=170+Math.random()*70|0;t.fillStyle=`rgba(${c},${c-22},${c-65},0.22)`,t.fillRect(Math.random()*512,Math.random()*512,1.6,1.6)}for(let i=0;i<26;i++){const c=60+Math.random()*40|0,r=90+Math.random()*50|0,s=70+Math.random()*40|0;t.fillStyle=`rgba(${c},${r},${s},0.30)`,t.beginPath(),t.ellipse(Math.random()*512,Math.random()*512,8+Math.random()*26,6+Math.random()*20,Math.random()*6,0,7),t.fill()}const n=new hn(e);return n.wrapS=n.wrapT=fn,n.repeat.set(10,10),n.colorSpace=Ri,n}function Ho(e=256){const t=(S,T)=>{const P=new Float32Array(e*e);for(let f=0;f<e;f++)for(let _=0;_<e;_++){let M=0,w=0;for(let C=-T;C<=T;C++)for(let F=-T;F<=T;F++)M+=S[(f+C+e)%e*e+(_+F+e)%e],w++;P[f*e+_]=M/w}return P},n=()=>{const S=new Float32Array(e*e);for(let w=0;w<e*e;w++)S[w]=Math.random();const T=t(S,3),P=t(S,1),f=new Float32Array(e*e);let _=1e9,M=-1e9;for(let w=0;w<e*e;w++)f[w]=T[w]*.65+P[w]*.35,_=Math.min(_,f[w]),M=Math.max(M,f[w]);for(let w=0;w<e*e;w++)f[w]=(f[w]-_)/(M-_);return f},i=n(),c=n(),r=document.createElement("canvas");r.width=r.height=e;const s=r.getContext("2d"),b=s.createImageData(e,e);for(let S=0;S<e*e;S++){const T=S*4;b.data[T]=i[S]*255,b.data[T+1]=c[S]*255,b.data[T+2]=0,b.data[T+3]=255}s.putImageData(b,0,0);const v=new hn(r);return v.wrapS=v.wrapT=fn,v.colorSpace=di,v.minFilter=Ln,v.magFilter=Ln,v.generateMipmaps=!1,v}function Bo(e={}){const{onReady:t,onError:n,onFpsUpdate:i}=e,c=Y(!1),r=Y(0);let s=null,b=null,v=null,S=null,T=null,P=null,f=null,_=null,M=null,w=null,C=null,F=null,o=null;const h=new at;let p=null,m=null,l=null;const d=new Ii;let a=0,u=0;const g={value:0},D={value:.9},A={value:0},k={value:new at};let U=3,E=-100;const G=.62,te={};let J=!0,le=null;const ge=new Fn,ue={elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2};async function Ce(H){if(!H){n==null||n(new Error("Container element not provided"));return}if(!c.value){P=H;try{v=new ki({antialias:!0,alpha:!0}),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setSize(P.clientWidth,P.clientHeight),v.toneMapping=zi,v.toneMappingExposure=G,v.setClearColor(0,0),P.appendChild(v.domElement),s=new Fn,b=new Ni(55,P.clientWidth/P.clientHeight,1,2e4),b.position.set(0,55,280),Oe(),Ie(),we(),Le(),W(),$(),O(),de(),We(),ye(),$e(),c.value=!0,t==null||t()}catch(Z){n==null||n(Z)}}}function Oe(){F=new Oi,F.scale.setScalar(12e3),s.add(F);const H=F.material.uniforms;H.turbidity.value=6,H.rayleigh.value=1.6,H.mieCoefficient.value=.005,H.mieDirectionalG.value=.8}function Le(){o=new $i(16774368,2.6),s.add(o),s.add(new qi(13627391,2117738,.7))}function W(){const H=new An(1600,1600,200,200);H.rotateX(-Math.PI/2);const Z=H.attributes.position;for(let re=0;re<Z.count;re++){const pe=Z.getX(re),Ne=Z.getZ(re);let Me=-34+It.clamp((Ne+800)/1600,0,1)*44;Me+=Math.sin(pe*.012)*Math.cos(Ne*.014)*3.5,Me+=Math.sin(pe*.06+Ne*.05)*1.1,Me+=(Math.random()-.5)*.6,Z.setY(re,Me)}H.computeVertexNormals();const ae=new Cn({map:Oo(),roughness:1,metalness:0});On(ae,{uTime:g,uCaustic:D}),s.add(new wt(H,ae))}function $(){const H=new ji(1,0),Z=[8023642,7035722,11887946,13598051,9083483];for(let ae=0;ae<30;ae++){const re=new Cn({color:Z[ae%Z.length],roughness:.9,flatShading:!0});On(re,{uTime:g,uCaustic:D});const pe=new wt(H,re),Ne=3+Math.random()*9;pe.scale.set(Ne,Ne*(.5+Math.random()*.6),Ne),pe.position.set((Math.random()-.5)*1100,-24+Math.random()*22,-300+Math.random()*900),pe.rotation.set(Math.random(),Math.random(),Math.random()),s.add(pe)}}function O(){C=new Vi(v),w=new Xi(256,{generateMipmaps:!0,minFilter:Yi}),M=new Ki(1,2e4,w),M.position.set(0,4,0),s.add(M);const H=new Jt;v.getDrawingBufferSize(H),_=new Zi(H.x,H.y),_.depthTexture=new Ji(H.x,H.y),_.depthTexture.type=Qi,_.depthTexture.format=ea}function de(){const H=new Jt;v.getDrawingBufferSize(H);const Z=No(256),ae={uTime:g,tRefraction:{value:_.texture},tDepth:{value:_.depthTexture},tEnv:{value:w.texture},normalMap:{value:Z},resolution:{value:H.clone()},cameraNear:{value:b.near},cameraFar:{value:b.far},invProjection:{value:new En},camWorld:{value:new En},sunDirection:{value:new at},sunColor:{value:new _t(16774106)},waterColor:{value:new _t(ue.waterColor)},absorption:{value:new at(.45,.09,.05)},foamColor:{value:new _t(15925247)},clarity:{value:ue.clarity},foamWidth:{value:ue.foamWidth},waveHeight:{value:ue.waveHeight},reflection:{value:ue.reflection}};f=new wt(new An(16e3,16e3,384,384),new Pn({uniforms:ae,vertexShader:Ro,fragmentShader:Io})),f.rotation.x=-Math.PI/2,s.add(f)}function Ie(){const H=new Pn({side:Hi,transparent:!0,depthWrite:!1,uniforms:{uTime:g,uNoise:{value:Ho(256)},sunDirection:{value:new at},sunColor:{value:new _t(16773341)},skyTint:{value:new _t(7315406)},uCoverage:{value:ue.cloudCoverage},uFlash:A,uFlashPos:k},vertexShader:ko,fragmentShader:zo});p=new wt(new Bi(8e3,32,16),H),p.renderOrder=2,s.add(p)}function we(){l=new Ui({color:14478335,transparent:!0,opacity:0,blending:Wi,depthWrite:!1,depthTest:!1}),m=new Gi,m.visible=!1,s.add(m)}function Ee(H,Z,ae,re,pe,Ne){const Be=[];let Me=H,Je=Z;const L=Math.max(5,Math.floor((ae-re)/80));for(let ne=0;ne<=L;ne++){const se=ne/L;Be.push(new at(Me,ae+(re-ae)*se,Je)),Me+=(Math.random()-.5)*pe,Je+=(Math.random()-.5)*pe}const I=new na(new ia(Be),L*4,Ne,5,!1),j=new wt(I,l);return j.renderOrder=3,m.add(j),Be}function ze(){for(const re of m.children)re.geometry.dispose();m.clear();const H=1+Math.floor(Math.random()*3);let Z=0,ae=0;for(let re=0;re<H;re++){const pe=(Math.random()-.5)*5e3,Ne=-(1e3+Math.random()*4500);re===0&&(Z=pe,ae=Ne);const Be=Ee(pe,Ne,1180,18,110,14),Me=2+Math.floor(Math.random()*3);for(let Je=0;Je<Me;Je++){const L=Be[2+Math.floor(Math.random()*(Be.length-4))];Ee(L.x,L.z,L.y,L.y-(160+Math.random()*420),130,7)}}k.value.set(Z,1100,ae)}function Ue(){if(!ue.lightningEnabled){A.value=0,m.visible=!1,v.toneMappingExposure=G;return}const H=g.value;H>=U&&(E=H,ze(),U=H+ue.lightningInterval*(.4+Math.random()*.8));const Z=H-E;let ae=0;Z>=0&&Z<.5&&(ae=Math.max(0,Math.exp(-Z*5.5)*(.5+.5*Math.sin(Z*60)))),A.value=ae*2.4,m.visible=ae>.1,l.opacity=Math.min(1,ae*1.7),v.toneMappingExposure=G+ae*.75}function We(){S=new ta(b,v.domElement),S.target.set(0,130,-400),S.maxPolarAngle=Math.PI*.49,S.minDistance=30,S.maxDistance=2e3,S.enableDamping=!0}function ye(){window.addEventListener("keydown",He),window.addEventListener("keyup",Ve)}function He(H){const Z=H.target&&H.target.tagName;Z==="INPUT"||Z==="TEXTAREA"||(te[H.code]=!0)}function Ve(H){te[H.code]=!1}function Ge(H){const Z=(te.ShiftLeft||te.ShiftRight?240:95)*H,ae=new at,re=new at,pe=new at;b.getWorldDirection(ae).normalize(),re.crossVectors(ae,b.up).normalize(),pe.set(0,0,0),te.KeyW&&pe.add(ae),te.KeyS&&pe.addScaledVector(ae,-1),te.KeyD&&pe.add(re),te.KeyA&&pe.addScaledVector(re,-1),te.KeyE&&(pe.y+=1),te.KeyQ&&(pe.y-=1),pe.lengthSq()!==0&&(pe.normalize().multiplyScalar(Z),b.position.add(pe),S.target.add(pe),b.position.y<2.5&&(b.position.y=2.5))}function $e(){const H=It.degToRad(90-ue.elevation),Z=It.degToRad(ue.azimuth);if(h.setFromSphericalCoords(1,H,Z),F.material.uniforms.sunPosition.value.copy(h),o.position.copy(h).multiplyScalar(1e3),f&&f.material.uniforms.sunDirection.value.copy(h).normalize(),p){p.material.uniforms.sunDirection.value.copy(h).normalize();const ae=It.clamp(1-ue.elevation/28,0,1);p.material.uniforms.sunColor.value.setRGB(1,.95-.22*ae,.86-.48*ae)}s.remove(F),ge.add(F),le&&le.dispose(),le=C.fromScene(ge),s.environment=le.texture,ge.remove(F),s.add(F),J=!0}function ke(){T=requestAnimationFrame(ke);const H=d.getDelta();g.value+=H,D.value=ue.causticStrength,Ge(H),Ue(),S.update(),b.updateMatrixWorld(),f.material.uniforms.invProjection.value.copy(b.projectionMatrixInverse),f.material.uniforms.camWorld.value.copy(b.matrixWorld),f.visible=!1,J&&(M.update(v,s),J=!1),p.visible=!1;const Z=m.visible;m.visible=!1,v.setRenderTarget(_),v.render(s,b),v.setRenderTarget(null),p.visible=!0,m.visible=Z,f.visible=!0,v.render(s,b),a++;const ae=performance.now();ae-u>=1e3&&(r.value=Math.round(a*1e3/(ae-u)),i==null||i(r.value),a=0,u=ae)}function N(){if(!b||!v||!P)return;const H=P.clientWidth,Z=P.clientHeight;b.aspect=H/Z,b.updateProjectionMatrix(),v.setSize(H,Z);const ae=new Jt;v.getDrawingBufferSize(ae),_.setSize(ae.x,ae.y),f.material.uniforms.resolution.value.copy(ae)}function z(){T||(d.start(),ke())}function Q(){T&&(cancelAnimationFrame(T),T=null)}function K(H){const Z={...ue};Object.assign(ue,H),(H.elevation!==Z.elevation||H.azimuth!==Z.azimuth)&&$e(),f&&(H.clarity!==Z.clarity&&(f.material.uniforms.clarity.value=H.clarity),H.waveHeight!==Z.waveHeight&&(f.material.uniforms.waveHeight.value=H.waveHeight),H.foamWidth!==Z.foamWidth&&(f.material.uniforms.foamWidth.value=H.foamWidth),H.reflection!==Z.reflection&&(f.material.uniforms.reflection.value=H.reflection),H.waterColor!==Z.waterColor&&f.material.uniforms.waterColor.value.set(H.waterColor)),H.causticStrength!==Z.causticStrength&&(D.value=H.causticStrength),H.cloudCoverage!==Z.cloudCoverage&&p&&(p.material.uniforms.uCoverage.value=H.cloudCoverage)}function ie(){Q(),window.removeEventListener("keydown",He),window.removeEventListener("keyup",Ve),v&&(v.dispose(),P==null||P.removeChild(v.domElement)),s==null||s.traverse(H=>{H.geometry&&H.geometry.dispose(),H.material&&(Array.isArray(H.material)?H.material.forEach(Z=>Z.dispose()):H.material.dispose())}),_==null||_.dispose(),w==null||w.dispose(),le==null||le.dispose(),C==null||C.dispose(),s=null,b=null,v=null,S=null,f=null,F=null,o=null,p=null,m=null,l=null,c.value=!1}return $t(()=>{ie()}),{isReady:c,fps:r,init:Ce,start:z,pause:Q,dispose:ie,handleResize:N,updateParams:K}}const Uo={__name:"ShallowWaterOverlay",props:{visible:{type:Boolean,default:!1},elevation:{type:Number,default:30},azimuth:{type:Number,default:150},clarity:{type:Number,default:.085},causticStrength:{type:Number,default:.9},waterColor:{type:String,default:"#2bb3c4"},waveHeight:{type:Number,default:.5},foamWidth:{type:Number,default:2.4},reflection:{type:Number,default:.38},cloudCoverage:{type:Number,default:.58},lightningEnabled:{type:Boolean,default:!0},lightningInterval:{type:Number,default:2}},emits:["ready","error","fps-update"],setup(e,{expose:t,emit:n}){const i=e,c=n,r=Y(null),{isReady:s,fps:b,init:v,start:S,pause:T,dispose:P,handleResize:f,updateParams:_}=Bo({onReady:()=>c("ready"),onError:F=>c("error",F),onFpsUpdate:F=>c("fps-update",F)});Fe(()=>i.visible,async F=>{F?(await M(),S()):T()}),Fe(()=>[i.elevation,i.azimuth,i.clarity,i.causticStrength,i.waterColor,i.waveHeight,i.foamWidth,i.reflection,i.cloudCoverage,i.lightningEnabled,i.lightningInterval],()=>{w()});async function M(){!r.value||s.value||(await v(r.value),w())}function w(){_({elevation:i.elevation,azimuth:i.azimuth,clarity:i.clarity,causticStrength:i.causticStrength,waterColor:i.waterColor,waveHeight:i.waveHeight,foamWidth:i.foamWidth,reflection:i.reflection,cloudCoverage:i.cloudCoverage,lightningEnabled:i.lightningEnabled,lightningInterval:i.lightningInterval})}function C(){f()}return ln(()=>{window.addEventListener("resize",C),i.visible&&M()}),$t(()=>{window.removeEventListener("resize",C),P()}),t({isReady:s,fps:b,start:S,pause:T}),(F,o)=>et((ee(),ce("div",{ref_key:"canvasContainerRef",ref:r,class:"shallow-water-overlay"},null,512)),[[mt,e.visible]])}},Wo=nt(Uo,[["__scopeId","data-v-e9c0d469"]]),gn="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Go=`${gn}Cesium.js`,$o=`${gn}Widgets/widgets.css`;async function qo({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=gn),await Vo($o,"cesium-widgets-style"),await jo(Go,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Ut(t,e),t}function Ut(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function jo(e,t){return new Promise((n,i)=>{const c=document.getElementById(t);if(c){if(c.getAttribute("data-loaded")==="true"){n();return}c.addEventListener("load",()=>n(),{once:!0}),c.addEventListener("error",()=>i(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const r=document.createElement("script");r.id=t,r.src=e,r.async=!0,r.onload=()=>{r.setAttribute("data-loaded","true"),n()},r.onerror=()=>i(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(r)})}function Vo(e,t){return new Promise((n,i)=>{if(document.getElementById(t)){n();return}const r=document.createElement("link");r.id=t,r.rel="stylesheet",r.href=e,r.onload=()=>n(),r.onerror=()=>i(new Error(`样式加载失败: ${e}`)),document.head.appendChild(r)})}const Xo="Asia/Shanghai",Yo="UTC+8",Ko=new Intl.DateTimeFormat("zh-CN",{timeZone:Xo,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Zo(e,t){var n,i,c,r,s,b,v;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...S)=>Qo(e,t,...S),e.animation.viewModel.timeFormatter=(...S)=>es(e,t,...S)),e.timeline){const S=(...T)=>ts(e,t,...T);e.timeline.makeLabel=S,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=S),(c=(i=e.timeline).updateFromClock)==null||c.call(i),(s=(r=e.timeline).zoomTo)==null||s.call(r,e.clock.startTime,e.clock.stopTime)}(v=(b=e.scene).requestRender)==null||v.call(b)}}function vn(e,t,...n){var b;const i=n.find(Jo)||((b=e==null?void 0:e.clock)==null?void 0:b.currentTime);if(!i)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const c=t.JulianDate.toDate(i),r=Ko.formatToParts(c),s=Object.fromEntries(r.filter(({type:v})=>v!=="literal").map(({type:v,value:S})=>[v,S]));return{year:s.year||"0000",month:s.month||"01",day:s.day||"01",hour:s.hour||"00",minute:s.minute||"00",second:s.second||"00"}}function Jo(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function Qo(e,t,...n){const{year:i,month:c,day:r}=vn(e,t,...n);return`${i}-${c}-${r}`}function es(e,t,...n){const{hour:i,minute:c,second:r}=vn(e,t,...n);return`${i}:${c}:${r} ${Yo}`}function ts(e,t,...n){const{month:i,day:c,hour:r,minute:s}=vn(e,t,...n);return`${i}-${c} ${r}:${s}`}function ns({getViewer:e}){let t=null,n=null;function i(){var b;const s=e==null?void 0:e();if(s&&((b=s._cesiumWidget)!=null&&b._creditContainer&&(s._cesiumWidget._creditContainer.style.display="none"),c(),t=setInterval(()=>{const v=document.querySelector(".cesium-credit-container");v&&v.innerHTML.length>0&&(v.innerHTML="",v.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const v=document.createElement("style");v.id="cesium-credit-override",v.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(v),n=v}}function c(){var v;const s=e==null?void 0:e();if(!s)return;(v=s._cesiumWidget)!=null&&v._creditContainer&&(s._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",s._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(S=>{S.style.cssText="display: none !important; visibility: hidden !important;",S.innerHTML=""}),s.scene&&s.scene.frameState&&s.scene.frameState.creditDisplay&&(s.scene.frameState.creditDisplay.hasCredits=()=>!1,s.scene.frameState.creditDisplay.destroy=()=>{})}function r(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:i,cleanupCreditHider:r}}const en="经度: --, 纬度: --, 海拔: --米";function is({getViewer:e,getCesium:t,onCoordinatePick:n}){let i=null,c=null,r=null;const s=Y("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function b(){const _=e==null?void 0:e(),M=t==null?void 0:t();!_||!M||(f(),c=_.scene.canvas,i=new M.ScreenSpaceEventHandler(c),r=()=>{s.value=en},c.addEventListener("mouseleave",r),i.setInputAction(w=>{v(w.endPosition,_,M)},M.ScreenSpaceEventType.MOUSE_MOVE),i.setInputAction(w=>{const C=w.endPosition,F=w.startPosition;if(!M.defined(_.terrainProvider))return;const o=_.scene.globe.ellipsoid;if(!_.camera.pickEllipsoid(F,o)){const p=_.camera;p.rotate(M.Cartesian3.UNIT_X,-.002*(C.y-F.y)),p.rotate(M.Cartesian3.UNIT_Y,-.002*(C.x-F.x))}},M.ScreenSpaceEventType.RIGHT_DRAG),i.setInputAction(()=>{},M.ScreenSpaceEventType.RIGHT_DOWN),i.setInputAction(()=>{},M.ScreenSpaceEventType.RIGHT_UP))}function v(_,M,w){const C=S(_,M,w);if(!C){s.value=en;return}const F=w.Cartographic.fromCartesian(C);if(!F||!Number.isFinite(F.longitude)||!Number.isFinite(F.latitude)){s.value=en;return}const o=w.Math.toDegrees(F.longitude).toFixed(6),h=w.Math.toDegrees(F.latitude).toFixed(6),p=(Number.isFinite(F.height)?F.height:0).toFixed(2);s.value=`经度: ${o}, 纬度: ${h}, 海拔: ${p}米`,typeof n=="function"&&n({lng:Number(o),lat:Number(h),height:Number(p)})}function S(_,M,w){if(!_)return null;const C=M.scene,F=T(_,C,w);if(F)return F;const o=M.camera.getPickRay(_);if(o){const p=C.globe.pick(o,C);if(P(p))return p}const h=M.camera.pickEllipsoid(_,C.globe.ellipsoid);return P(h)?h:null}function T(_,M,w){if(!M.pickPositionSupported||typeof M.pickPosition!="function")return null;const C=typeof M.pick=="function"?M.pick(_):null;if(!w.defined(C))return null;const F=M.pickPosition(_);return P(F)?F:null}function P(_){return!!_&&Number.isFinite(_.x)&&Number.isFinite(_.y)&&Number.isFinite(_.z)}function f(){r&&c&&(c.removeEventListener("mouseleave",r),r=null),c=null,i&&(i.destroy(),i=null)}return{coordinateDisplay:s,setupInteractions:b,cleanupInteractions:f}}function Hn(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function as(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function bt(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function Ft(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Bn(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:i,Resource:c,HeightmapTerrainData:r,Rectangle:s,TileAvailability:b,CustomHeightmapTerrainProvider:v}=e;function S(_,M,w,C,F,o){const h=_.tileXYToRectangle(w,C,F);return t(s.intersection(h,M,o))}function T(_){const M=[[[0,0,1,0]]],w=new b(_.tilingScheme,19);for(let C=0;C<M.length;C++){const F=M[C];for(let o=0;o<F.length;o++){const h=F[o];w.addAvailableTileRange(C,h[0],h[1],h[2],h[3])}}return w}function P(_,M,w,C,F){const o=new r({buffer:_._transformBuffer(M),width:_._width,height:_._height,childTileMask:_._getChildTileMask(C,F,w),structure:_._terrainDataStructure});return o._skirtHeight=6e3,_.availability.addAvailableTileRange(w,C,F,C,F),o}class f extends v{constructor(M={}){if(super({...M,ellipsoid:i.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(M.url))throw new n("options.url is required.");this._dataType=M.dataType??"int16",this._url=M.url,this._subdomains=M.subdomains,this._token=M.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=T(this)}get availability(){return this._availability}requestTileGeometry(M,w,C,F){if(C>=this._bottomLevel)return Promise.reject(new Error(`Level ${C} is outside supported range.`));if(C<this._topLevel)return Promise.resolve(new r({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(M,w,C),structure:this._terrainDataStructure}));let o=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const p=this._subdomains[(M+w)%this._subdomains.length];o=o.replace("{s}",p)}o=o.replace("{token}",this._token).replace("{x}",M).replace("{y}",w).replace("{z}",C+1);const h=c.fetchArrayBuffer({url:o,request:F});if(h)return h.then(p=>p.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):aa.inflate(p)).then(p=>P(this,p,C,M,w))}getTileDataAvailable(M,w,C){return C<this._bottomLevel}_transformBuffer(M){let w=2;this._dataType==="float"&&(w=4);const C=M;if(C.length!==22500*w)return null;const F=new ArrayBuffer(w),o=new DataView(F),h=this._width,p=this._height,m=new Uint8Array(h*p*4);for(let l=0;l<p;l++)for(let d=0;d<h;d++){const a=Math.floor(149*l/(p-1)),u=Math.floor(149*d/(h-1)),g=w*(150*a+u);let D;w===4?(o.setInt8(0,C[g]),o.setInt8(1,C[g+1]),o.setInt8(2,C[g+2]),o.setInt8(3,C[g+3]),D=o.getFloat32(0,!0)):D=C[g]+256*C[g+1],(D>1e4||D<-2e3)&&(D=0);const A=(D+1e3)/.001,k=4*(l*h+d);m[k]=A/65536,m[k+1]=(A-256*m[k]*256)/256,m[k+2]=A-256*m[k]*256-256*m[k+1],m[k+3]=255}return m}_getVHeightBuffer(){let M=this._vHeightBuffer;if(!t(M)){M=new Uint8ClampedArray(this._width*this._height*4);for(let w=0;w<this._width*this._height*4;)M[w++]=15,M[w++]=66,M[w++]=64,M[w++]=255;this._vHeightBuffer=M}return M}_getChildTileMask(M,w,C){const F=new s,o=this._tilingScheme,h=this._rectangles,p=o.tileXYToRectangle(M,w,C);let m=0;for(let l=0;l<h.length&&m!==15;l++){const d=h[l];if(d.maxLevel<=C)continue;const a=d.rectangle,u=s.intersection(a,p,F);t(u)&&(S(o,a,2*M,2*w,C+1,F)&&(m|=4),S(o,a,2*M+1,2*w,C+1,F)&&(m|=8),S(o,a,2*M,2*w+1,C+1,F)&&(m|=1),S(o,a,2*M+1,2*w+1,C+1,F)&&(m|=2))}return m}}return f}function rs(e){if(!e)throw new Error("Cesium is required to create ArcGISTerrainProvider.");const{TileAvailability:t}=e;class n{constructor(r){this._inner=r,this._availability=null,this._initAvailability()}_initAvailability(){const r=this._inner.tilingScheme;if(!r)return;const s=this._inner.maximumLevel??15;this._availability=new t(r,s);for(let b=0;b<=s;b++){const v=1<<b;this._availability.addAvailableTileRange(b,0,0,v-1,v-1)}}get availability(){return this._availability||this._initAvailability(),this._availability}get tilingScheme(){return this._inner.tilingScheme}get maximumLevel(){return this._inner.maximumLevel}get requestWaterMask(){return this._inner.requestWaterMask}get requestVertexNormals(){return this._inner.requestVertexNormals}get ready(){return this._inner.ready}get readyPromise(){return this._inner.readyPromise}get errorEvent(){return this._inner.errorEvent}get credit(){return this._inner.credit}getTileDataAvailable(r,s,b){const v=this._inner.maximumLevel??15;return b<=v}requestTileGeometry(r,s,b,v){return this._inner.requestTileGeometry(r,s,b,v)}getLevelMaximumGeometricError(r){return this._inner.getLevelMaximumGeometricError(r)}loadTileDataAvailability(r,s,b){if(typeof this._inner.loadTileDataAvailability=="function")return this._inner.loadTileDataAvailability(r,s,b)}}async function i(c){const r=await e.ArcGISTiledElevationTerrainProvider.fromUrl(c);return new n(r)}return n.fromUrl=i,n}function os({getViewer:e,getCesium:t,activeBasemap:n,applyBasemap:i,resolvePresetLayerIds:c,message:r,validationTimeoutMs:s=5e3,circuitBreakThreshold:b=3}){const v=new Map,S=new Set,T={value:!1};let P=null,f=[],_=[];function M(m,l={}){return m?S.has(m)&&!l.forceReload?(T.value=!0,!1):i(m,l)?(w(m),!0):(C(m),!1):!1}function w(m){var A,k;o();const l=e==null?void 0:e();if(!(l!=null&&l.imageryLayers))return;const d=c(m),a=[];for(let U=0;U<l.imageryLayers.length;U++){const E=l.imageryLayers.get(U);(A=E==null?void 0:E.imageryProvider)!=null&&A._descriptorId&&d.includes(E.imageryProvider._descriptorId)&&a.push(E)}if(!a.length)return;f=a;let u=!1;const g=()=>{u=!0,o(),v.delete(m),S.has(m)&&(S.delete(m),T.value=S.size>0)},D=U=>{u||(C(m),o())};for(const U of f){const E=U.imageryProvider;if(E!=null&&E.errorEvent&&(E.errorEvent.addEventListener(D),_.push(()=>E.errorEvent.removeEventListener(D))),E!=null&&E.ready){g();return}(k=E==null?void 0:E.readyPromise)!=null&&k.then&&E.readyPromise.then(g).catch(D)}P=setTimeout(()=>{u||C(m)},s)}function C(m){const l=(v.get(m)||0)+1;v.set(m,l),l>=b&&(S.add(m),T.value=!0,F(m))}function F(m){var d,a,u,g,D;const l="custom_China_Blender_preset_2";if(m===l){const A="imagery_tianditu_preset";S.has(A)?(a=r==null?void 0:r.error)==null||a.call(r,"所有底图均加载失败，请检查网络",{closable:!0}):((d=r==null?void 0:r.warning)==null||d.call(r,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=A);return}if(!S.has(l))(u=r==null?void 0:r.warning)==null||u.call(r,"底图加载失败，已降级到默认底图",{closable:!0}),n.value=l;else{const A="imagery_tianditu_preset";S.has(A)?(D=r==null?void 0:r.error)==null||D.call(r,"所有底图均加载失败，请检查网络",{closable:!0}):((g=r==null?void 0:r.warning)==null||g.call(r,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=A)}}function o(){P&&(clearTimeout(P),P=null);for(const m of _)try{m()}catch{}_=[],f=[]}function h(){v.clear(),S.clear(),T.value=!1,o()}function p(){o(),v.clear(),S.clear(),T.value=!1}return{switchBasemap:M,resetCircuitBreaker:h,isCircuitOpen:T,cleanup:p}}const Tt=["0","1","2","3","4","5","6","7"],Mt="https://t{s}.tianditu.gov.cn/",ss="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",ls=96188,Pt="custom-xyz",Un="webgis_custom_basemap_url",cs="cesium_tdt_label_layer_visible",Wn="cesium_tdt_boundary_layer_visible",Gn="cesium_tdt_text_label_layer_visible",$n="cesium_osm_buildings_visible",qn="cesium_google_photorealistic_3d_tiles_visible";function us(){return ra.map(e=>({...e,description:ds(e.value),source:"preset"}))}function ds(e){const t=At(e);if(!t.length)return"复合底图";const n=t.map(i=>{const c=mn(i);return c?c.name:i});return n.slice(0,3).join(" + ")+(n.length>3?" ...":"")}const jn=us(),Vn=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function hs({getViewer:e,getCesium:t,message:n,backendBaseUrl:i,tiandituToken:c,cesiumIonToken:r}){let s=null,b=null,v=null,S=null,T=0,P=null,f=null,_=0,M=0,w=[];const C=()=>Xn(c),F=()=>Xn(r),o=[],h=Y([]),p=new Map,m=new Map,l=new Map,d=new Map,a="cesium_custom_xyz_basemap_url",u=Y(Rn),g=Y("tianditu"),D=Y(Hn(Un,"")||Hn(a,"")),A=bt(cs,!1),k=Y(bt(Wn,A??!1)),U=Y(bt(Gn,A??!1)),E=Y(bt($n,!1)),G=Y(bt(qn,!1)),te=Ae(()=>[...jn.map(y=>y.value!=="custom"?y:{...y,description:D.value?D.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!D.value}),...h.value]),J=os({getViewer:e,getCesium:t,activeBasemap:u,applyBasemap:pe,resolvePresetLayerIds:At,message:n}),le=Ae(()=>J.isCircuitOpen.value),ge=Ae(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:k.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:U.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:E.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:G.value}]);Fe(u,y=>{!(e!=null&&e())||!(t!=null&&t())||pe(y)}),Fe(D,y=>{as(Un,y)}),Fe(g,async y=>{!(e!=null&&e())||!(t!=null&&t())||await Be(y)}),Fe(k,y=>{Ft(Wn,y),Ge()}),Fe(U,y=>{Ft(Gn,y),Ge()}),Fe(E,y=>{Ft($n,y),Q()}),Fe(G,y=>{Ft(qn,y),K()});function ue(){const y=t==null?void 0:t();if(!y)return[];p.clear(),m.clear();const R=jn.map(X=>{const he=new y.ProviderViewModel({name:X.label,tooltip:gs(X),category:"项目底图",iconUrl:Zn(vs(X.value),ys(X.value,X.label)),creationFunction:()=>$(X.value)});return p.set(X.value,he),m.set(he,X.value),he}),q=W();return h.value=q.map((X,he)=>{const Te=String((X==null?void 0:X.name)||`官方底图 ${he+1}`).trim(),Pe=Ss(Te,he);return p.set(Pe,X),m.set(X,Pe),{value:Pe,label:`官方 · ${Te}`,description:String((X==null?void 0:X.tooltip)||Te),source:"official"}}),[...R,...q]}function Ce(){const y=t==null?void 0:t();return y?(l.clear(),d.clear(),Vn.map(R=>{const q=new y.ProviderViewModel({name:R.label,tooltip:R.description||R.label,category:"项目地形",iconUrl:Zn(fs(R.value),ms(R.value)),creationFunction:()=>Je(R.value)});return l.set(R.value,q),d.set(q,R.value),q})):[]}function Oe(y=[]){return p.get(u.value)||y[0]}function Le(y=[]){return l.get(g.value)||y[0]}function W(){const y=t==null?void 0:t();if(typeof(y==null?void 0:y.createDefaultImageryProviderViewModels)!="function")return[];try{return y.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function $(y){return At(y).length>0?O(y):y==="google"?Ie():y===Pt?we():de()}function O(y){const R=t==null?void 0:t();if(!R)return[];const q=At(y);if(!q.length)return de();const X=C(),he=D.value;return Sa(R,q,{tiandituTk:X,customUrl:he})}function de(){const y=t==null?void 0:t();return[new y.UrlTemplateImageryProvider({url:`${Mt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${C()}`,subdomains:Tt,tilingScheme:new y.WebMercatorTilingScheme,maximumLevel:18})]}function Ie(){const y=t==null?void 0:t();return[new y.UrlTemplateImageryProvider({url:`${i}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new y.WebMercatorTilingScheme,maximumLevel:20})]}function we(){const y=t==null?void 0:t(),R=Kn(D.value);return R.valid?[new y.UrlTemplateImageryProvider({url:R.url,subdomains:R.subdomains,tilingScheme:new y.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(R.message,{closable:!0}),de())}function Ee(){const y=t==null?void 0:t();return new y.UrlTemplateImageryProvider({url:`${Mt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${C()}`,subdomains:Tt,tilingScheme:new y.WebMercatorTilingScheme,maximumLevel:10})}function ze(){const y=t==null?void 0:t();return new y.UrlTemplateImageryProvider({url:`${Mt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${C()}`,subdomains:Tt,tilingScheme:new y.WebMercatorTilingScheme,maximumLevel:18})}function Ue(){var B,V,oe,me,De;We();const y=t==null?void 0:t(),R=(V=(B=e==null?void 0:e())==null?void 0:B.baseLayerPicker)==null?void 0:V.viewModel;if(!R||!((oe=y==null?void 0:y.knockout)!=null&&oe.getObservable))return;const q=y.knockout.getObservable(R,"selectedImagery"),X=y.knockout.getObservable(R,"selectedTerrain"),he=[],Te=(me=q==null?void 0:q.subscribe)==null?void 0:me.call(q,Xe=>{const Ke=m.get(Xe);Ke&&(u.value!==Ke&&(u.value=Ke),Ve())}),Pe=(De=X==null?void 0:X.subscribe)==null?void 0:De.call(X,Xe=>{const Ke=d.get(Xe);Ke&&(g.value!==Ke&&(g.value=Ke),Me(Ke))});Te&&he.push(Te),Pe&&he.push(Pe),w=he}function We(){w.forEach(y=>{var R;return(R=y==null?void 0:y.dispose)==null?void 0:R.call(y)}),w=[]}function ye(){return Ge(),Q(),K(),!0}function He(){const y=e==null?void 0:e();if(y!=null&&y.imageryLayers)for(;o.length;){const R=o.pop();try{y.imageryLayers.remove(R,!0)}catch{}}}function Ve(){var y,R,q;Ge(),Q(),K(),(q=(R=(y=e==null?void 0:e())==null?void 0:y.scene)==null?void 0:R.requestRender)==null||q.call(R)}function Ge(){var R,q;const y=e==null?void 0:e();!y||!(t!=null&&t())||(k.value?$e():N(),U.value?ke():z(),(q=(R=y.scene).requestRender)==null||q.call(R))}function $e(){var R,q,X,he;const y=e==null?void 0:e();if(!(y!=null&&y.imageryLayers)||s)return s&&((q=(R=y==null?void 0:y.imageryLayers)==null?void 0:R.raiseToTop)==null||q.call(R,s)),s;try{return s=y.imageryLayers.addImageryProvider(Ee()),(he=(X=y.imageryLayers).raiseToTop)==null||he.call(X,s),s}catch(Te){return n.error("天地图国界线图层加载失败",Te),null}}function ke(){var R,q,X,he;const y=e==null?void 0:e();if(!(y!=null&&y.imageryLayers)||b)return b&&((q=(R=y==null?void 0:y.imageryLayers)==null?void 0:R.raiseToTop)==null||q.call(R,b)),b;try{return b=y.imageryLayers.addImageryProvider(ze()),(he=(X=y.imageryLayers).raiseToTop)==null||he.call(X,b),b}catch(Te){return n.error("天地图文字标注图层加载失败",Te),null}}function N(){const y=e==null?void 0:e();if(!(!s||!(y!=null&&y.imageryLayers))){try{y.imageryLayers.remove(s,!0)}catch{}s=null}}function z(){const y=e==null?void 0:e();if(!(!b||!(y!=null&&y.imageryLayers))){try{y.imageryLayers.remove(b,!0)}catch{}b=null}}async function Q(){var R,q,X;const y=e==null?void 0:e();!((R=y==null?void 0:y.scene)!=null&&R.primitives)||!(t!=null&&t())||(E.value?await Z():ae(),(X=(q=y.scene).requestRender)==null||X.call(q))}async function K(){var R,q,X;const y=e==null?void 0:e();!((R=y==null?void 0:y.scene)!=null&&R.primitives)||!(t!=null&&t())||(G.value?await ie():H(),(X=(q=y.scene).requestRender)==null||X.call(q))}async function ie(){var X,he,Te;const y=e==null?void 0:e(),R=t==null?void 0:t();if(!((X=y==null?void 0:y.scene)!=null&&X.primitives))return null;if(P)return y.scene.globe.show=!1,P;if(f)return f;if(typeof(R==null?void 0:R.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),G.value=!1,null;const q=++_;Ut(R,F()),f=R.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const Pe=await f;return q!==_||!G.value?(Yn(Pe),null):(P=y.scene.primitives.add(Pe),y.scene.globe.show=!1,y.scene.skyAtmosphere.show=!0,(Te=(he=y.scene).requestRender)==null||Te.call(he),P)}catch(Pe){return q!==_||(G.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",Pe)),null}finally{q===_&&(f=null)}}function H(){var R,q,X;const y=e==null?void 0:e();if(_+=1,f=null,!P||!((R=y==null?void 0:y.scene)!=null&&R.primitives)){(q=y==null?void 0:y.scene)!=null&&q.globe&&(y.scene.globe.show=!0);return}try{y.scene.primitives.remove(P)}catch{}P=null,(X=y==null?void 0:y.scene)!=null&&X.globe&&(y.scene.globe.show=!0)}async function Z(){var X,he,Te,Pe;const y=e==null?void 0:e(),R=t==null?void 0:t();if(!((X=y==null?void 0:y.scene)!=null&&X.primitives)||v)return v;if(S)return S;if(typeof((he=R==null?void 0:R.Cesium3DTileset)==null?void 0:he.fromIonAssetId)!="function"&&typeof(R==null?void 0:R.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),E.value=!1,null;const q=++T;Ut(R,F()),await re(),S=ps(R,{maximumScreenSpaceError:8});try{const B=await S;return q!==T||!E.value?(Yn(B),null):(v=y.scene.primitives.add(B),(Pe=(Te=y.scene).requestRender)==null||Pe.call(Te),v)}catch(B){return q!==T||(E.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",B)),null}finally{q===T&&(S=null)}}function ae(){var R,q,X;const y=e==null?void 0:e();if(T+=1,S=null,!(!v||!((R=y==null?void 0:y.scene)!=null&&R.primitives))){try{y.scene.primitives.remove(v)}catch{}v=null,(X=(q=y.scene).requestRender)==null||X.call(q)}}async function re(){if(g.value==="cesiumWorld")return!0;g.value="cesiumWorld";const y=await Be("cesiumWorld");return y||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),y}function pe(y,R={}){var Te,Pe,B;const q=e==null?void 0:e();if(!q||!(t!=null&&t()))return!1;ga(),He();const X=(Te=q.baseLayerPicker)==null?void 0:Te.viewModel,he=p.get(y);if(X&&he){if(R.forceReload&&X.selectedImagery===he){const V=p.get(Rn)||p.get("tianditu");V&&V!==he&&(X.selectedImagery=V)}return X.selectedImagery!==he&&(X.selectedImagery=he),Ve(),!0}try{return $(y).forEach(oe=>{oe&&o.push(q.imageryLayers.addImageryProvider(oe))}),Ge(),(B=(Pe=q.scene).requestRender)==null||B.call(Pe),!0}catch(V){return n.error("地图源切换失败",V),!1}}function Ne(){return Be(g.value)}async function Be(y){var B,V,oe,me,De,Xe,Ke,xt,Ct,St,bn;const R=e==null?void 0:e(),q=t==null?void 0:t();if(!R||!q)return!1;const X=(B=R.baseLayerPicker)==null?void 0:B.viewModel,he=l.get(y);if(X&&he)return X.selectedTerrain!==he&&(X.selectedTerrain=he),Me(y),(oe=(V=R.scene).requestRender)==null||oe.call(V),!0;const Te=++M;if(y==="ellipsoid")return R.terrainProvider=new q.EllipsoidTerrainProvider,Me(y),(De=(me=R.scene).requestRender)==null||De.call(me),!0;if(y==="cesiumWorld")try{const it=await L();return Te!==M?!1:(R.terrainProvider=it,Me(y),(Ke=(Xe=R.scene).requestRender)==null||Ke.call(Xe),!0)}catch(it){return Te!==M||(R.terrainProvider=new q.EllipsoidTerrainProvider,Me("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",it)),!1}if(y==="arcgisWorld")try{const it=await I();return Te!==M?!1:(R.terrainProvider=it,Me(y),(Ct=(xt=R.scene).requestRender)==null||Ct.call(xt),!0)}catch(it){return Te!==M||(R.terrainProvider=new q.EllipsoidTerrainProvider,Me("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",it)),!1}const Pe=Bn(q);try{return R.terrainProvider=new Pe({url:`${Mt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Tt,token:C()}),Me(y),(bn=(St=R.scene).requestRender)==null||bn.call(St),!0}catch(it){return R.terrainProvider=new q.EllipsoidTerrainProvider,Me("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",it),!1}}function Me(y){var q;const R=e==null?void 0:e();(q=R==null?void 0:R.scene)!=null&&q.globe&&(R.scene.globe.depthTestAgainstTerrain=y!=="ellipsoid")}function Je(y){const R=t==null?void 0:t();if(y==="ellipsoid")return new R.EllipsoidTerrainProvider;if(y==="cesiumWorld")return L().catch(X=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",X),j(y,"ellipsoid"),new R.EllipsoidTerrainProvider));if(y==="arcgisWorld")return I().catch(X=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",X),j(y,"ellipsoid"),new R.EllipsoidTerrainProvider));const q=Bn(R);try{return new q({url:`${Mt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Tt,token:C()})}catch(X){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",X),new R.EllipsoidTerrainProvider}}async function L(){var q,X;const y=t==null?void 0:t();Ut(y,F());const R={requestWaterMask:!1,requestVertexNormals:!0};if(typeof y.createWorldTerrainAsync=="function")return y.createWorldTerrainAsync(R);if(typeof y.createWorldTerrain=="function")return y.createWorldTerrain(R);if(typeof((q=y.CesiumTerrainProvider)==null?void 0:q.fromIonAssetId)=="function")return y.CesiumTerrainProvider.fromIonAssetId(1,R);if((X=y.IonResource)!=null&&X.fromAssetId&&y.CesiumTerrainProvider){const he=await y.IonResource.fromAssetId(1);return new y.CesiumTerrainProvider({url:he,...R})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function I(){var q;const y=t==null?void 0:t();if(typeof((q=y==null?void 0:y.ArcGISTiledElevationTerrainProvider)==null?void 0:q.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return rs(y).fromUrl(ss)}function j(y,R){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{g.value===y&&(g.value=R)},0)}function ne({overlayId:y,value:R}){if(y==="tdt-boundaries"){k.value=!!R;return}if(y==="tdt-text-labels"){U.value=!!R;return}if(y==="cesium-osm-buildings"){E.value=!!R;return}y==="google-photorealistic-3d-tiles"&&(G.value=!!R)}function se({url:y}){const R=String(y||"").trim(),q=Kn(R);if(!q.valid){n.warning(q.message,{closable:!0});return}if(D.value=R,u.value===Pt){pe(Pt,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}u.value=Pt,n.success("已切换到自定义 XYZ 图源")}function xe(){He(),N(),z(),ae(),H(),We()}return{activeBasemap:u,activeTerrain:g,customXyzBasemapUrl:D,basemapOptions:te,terrainOptions:Vn,overlayOptions:ge,createImageryProviderViewModels:ue,createTerrainProviderViewModels:Ce,getSelectedImageryProviderViewModel:Oe,getSelectedTerrainProviderViewModel:Le,bindLayerPickerStateSync:Ue,addBaseImageryLayers:ye,initCustomTerrain:Ne,applyBasemap:pe,applyTerrain:Be,handleOverlayToggle:ne,handleCustomBasemapSubmit:se,cleanupLayers:xe,basemapSwitcher:J,basemapCircuitOpen:le,resetCircuitBreaker:J.resetCircuitBreaker}}function fs(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function ms(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Xn(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Yn(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function ps(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const i=await e.Cesium3DTileset.fromIonAssetId(ls,t);return!i.style&&typeof e.Cesium3DTileStyle=="function"&&(i.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),i}return e.createOsmBuildingsAsync(t)}function gs(e){return e.value===Pt?`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`:e.description||e.label}function vs(e){const t=At(e);if(!t.length)return"#37d67a";const n=mn(t[0]);if(!n)return"#37d67a";const i=n.category;return i==="imagery"?"#5ea1ff":i==="vector"?"#37d67a":i==="terrain"?"#d0a449":i==="label"?"#a78bfa":i==="theme"?"#f59e0b":i==="custom"?"#f472b6":"#37d67a"}function ys(e,t){return String(t||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function Kn(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const i=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let c=[];return i?(c=bs(i[1],i[2]),n=n.replace(i[0],"{s}")):/\{s\}/i.test(n)&&(c=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:c}:xs(n)?{valid:!0,message:"",url:n,subdomains:c}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:c}}function bs(e,t){const n=String(e||"").charCodeAt(0),i=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(i))return[];const c=n<=i?1:-1,r=[];for(let s=n;c>0?s<=i:s>=i;s+=c)r.push(String.fromCharCode(s));return r}function xs(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function Ss(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function Zn(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),i=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(i)}`}function _s({getViewer:e,getCesium:t,message:n}){function i(s){const b=e==null?void 0:e(),v=t==null?void 0:t();if(!b||!v)return;const S=typeof s=="number"?s:2;b.camera.flyTo({destination:v.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-v.Math.PI_OVER_TWO,roll:0},duration:S})}function c(){const s=e==null?void 0:e(),b=t==null?void 0:t();!s||!b||s.camera.flyTo({destination:b.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:b.Math.toRadians(0),pitch:b.Math.toRadians(-25),roll:0},duration:3})}async function r(){const s=e==null?void 0:e(),b=t==null?void 0:t();if(!(!s||!b))try{const v=await b.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");s.scene.primitives.add(v),s.flyTo(v,{duration:3,offset:new b.HeadingPitchRange(b.Math.toRadians(0),b.Math.toRadians(-25),v.boundingSphere.radius*2.5)})}catch(v){n.error(`加载模型失败: ${v}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:i,flyToEverest:c,loadCustomTileset:r}}const ws="tileset.json";let Nt=null;async function Jn(){if(Nt)return Nt;const[{decompressBuffer:e},{parseShpPartsToGeoJSON:t}]=await Promise.all([Wt(()=>import("./decompressFile-DiMYlfaO.js").then(n=>n.f),__vite__mapDeps([4,5]),import.meta.url),Wt(()=>import("./shpParser-BF925vE3.js").then(n=>n.s),__vite__mapDeps([6,5,7,2,3,8,9,10,11,12,13,14,15]),import.meta.url)]);return Nt={decompressBuffer:e,parseShpPartsToGeoJSON:t},Nt}function tn(e){const t=e.lastIndexOf(".");return t===-1?"":e.slice(t+1).toLowerCase()}function ht(e,t,n,i){if(!(!e||!t||!n))try{i==="3dtiles"&&n.boundingSphere?e.flyTo(n,{duration:2,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-30),n.boundingSphere.radius*2)}):n.entities&&n.entities.values.length>0&&e.flyTo(n,{duration:2})}catch{}}function vt(e){return URL.createObjectURL(e)}function Qe(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function Ts({getViewer:e,getCesium:t,message:n}){const i=Y([]),c=Y(null);let r=0;async function s(l){const d=t(),a=e();if(!d||!a)throw new Error("Cesium 未初始化");const u=vt(l);try{const g=await d.GeoJsonDataSource.load(u,{stroke:d.Color.fromCssColorString("#3ddc84"),fill:d.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:d.Color.fromCssColorString("#3ddc84"),markerSize:24}),D=`geojson_${++r}`;g.name=l.name,await a.dataSources.add(g),ht(a,d,g,"geojson");const A={id:D,name:l.name,type:"geojson",entity:g,blobUrl:u};return i.value=[...i.value,A],n.success(`GeoJSON "${l.name}" 加载成功`),A}catch(g){throw Qe(u),g}}async function b(l){const d=t(),a=e();if(!d||!a)throw new Error("Cesium 未初始化");const u=vt(l);try{const g=await d.KmlDataSource.load(u,{camera:a.scene.camera,canvas:a.scene.canvas}),D=`kml_${++r}`;g.name=l.name,await a.dataSources.add(g),ht(a,d,g,"kml");const A={id:D,name:l.name,type:"kml",entity:g,blobUrl:u};return i.value=[...i.value,A],n.success(`KML "${l.name}" 加载成功`),A}catch(g){throw Qe(u),g}}async function v(l){const d=t(),a=e();if(!d||!a)throw new Error("Cesium 未初始化");const u=vt(l);try{const g=await d.KmlDataSource.load(u,{camera:a.scene.camera,canvas:a.scene.canvas}),D=`kmz_${++r}`;g.name=l.name,await a.dataSources.add(g),ht(a,d,g,"kmz");const A={id:D,name:l.name,type:"kmz",entity:g,blobUrl:u};return i.value=[...i.value,A],n.success(`KMZ "${l.name}" 加载成功`),A}catch{return Qe(u),await S(l)}}async function S(l){const d=t(),a=e(),u=await l.arrayBuffer(),{decompressBuffer:g}=await Jn(),A=(await g(u,l.name)).find(G=>{var te;return G.ext==="kml"||((te=G.name)==null?void 0:te.toLowerCase().endsWith(".kml"))});if(!A)throw new Error("KMZ 压缩包中未找到 KML 文件");let k;typeof A.content=="string"?k=A.content:A.content instanceof ArrayBuffer||A.content instanceof Uint8Array?k=ma(A.content):k=String(A.content||"");const U=new Blob([k],{type:"application/vnd.google-earth.kml+xml"}),E=URL.createObjectURL(U);try{const G=await d.KmlDataSource.load(E,{camera:a.scene.camera,canvas:a.scene.canvas}),te=`kmz_${++r}`;G.name=l.name,await a.dataSources.add(G),ht(a,d,G,"kmz");const J={id:te,name:l.name,type:"kmz",entity:G};return i.value=[...i.value,J],n.success(`KMZ "${l.name}" 加载成功（手动解压）`),J}finally{URL.revokeObjectURL(E)}}async function T(l,d=[]){const a=t(),u=e();if(!a||!u)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:g}=await Jn(),D={shp:await l.arrayBuffer()};for(const J of d){const le=tn(J.name);le==="dbf"&&(D.dbf=await J.arrayBuffer()),le==="shx"&&(D.shx=await J.arrayBuffer()),le==="prj"&&(D.prj=await J.arrayBuffer()),le==="cpg"&&(D.cpg=await J.arrayBuffer())}const A=await g(D),k=Array.isArray(A)?A:[A],U=k.reduce((J,le)=>{var ge;return J+(((ge=le==null?void 0:le.features)==null?void 0:ge.length)||0)},0),E=k.length===1?k[0]:{type:"FeatureCollection",features:k.flatMap(J=>(J==null?void 0:J.features)||[])},G=new Blob([JSON.stringify(E)],{type:"application/geo+json"}),te=URL.createObjectURL(G);try{const J=await a.GeoJsonDataSource.load(te,{stroke:a.Color.fromCssColorString("#ffcc00"),fill:a.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:a.Color.fromCssColorString("#ffcc00"),markerSize:20}),le=`shp_${++r}`;J.name=l.name,await u.dataSources.add(J),ht(u,a,J,"shp");const ge={id:le,name:l.name,type:"shp",entity:J};return i.value=[...i.value,ge],n.success(`Shapefile "${l.name}" 加载成功 (${U} 个要素)`),URL.revokeObjectURL(te),ge}catch(J){throw URL.revokeObjectURL(te),J}}async function P(l){const d=t(),a=e();if(!d||!a)throw new Error("Cesium 未初始化");const u=vt(l);let g=null;try{g=await C(l)}catch{}if(g)try{const D=await o(d,a,u,l.name,g),k={id:`gltf_${++r}`,name:l.name,type:"gltf",entity:D,blobUrl:u};return i.value=[...i.value,k],n.success(`3D 模型 "${l.name}" 加载成功 (${g.lng.toFixed(4)}, ${g.lat.toFixed(4)}, ${g.height.toFixed(1)}m)`),k}catch(D){throw Qe(u),D}return c.value&&Qe(c.value.blobUrl),c.value={file:l,blobUrl:u,name:l.name},{needsCoordInput:!0,file:l}}async function f(l){const d=t(),a=e();if(!c.value)throw new Error("没有等待确认的模型文件");const{blobUrl:u,name:g}=c.value;try{const D=await o(d,a,u,g,l),k={id:`gltf_${++r}`,name:g,type:"gltf",entity:D,blobUrl:u};i.value=[...i.value,k],n.success(`3D 模型 "${g}" 加载成功 (${l.lng.toFixed(4)}, ${l.lat.toFixed(4)}, ${l.height.toFixed(1)}m)`);const U=d.Cartesian3.fromDegrees(l.lng,l.lat,l.height+500);return a.camera.flyTo({destination:U,orientation:{heading:d.Math.toRadians(0),pitch:d.Math.toRadians(-30),roll:0},duration:2}),c.value=null,k}catch(D){throw Qe(u),c.value=null,D}}function _(){c.value&&(Qe(c.value.blobUrl),c.value=null)}async function M(l){const d=t(),a=e();if(!d||!a)throw new Error("Cesium 未初始化");const u=vt(l);try{const g=await d.CzmlDataSource.load(u),D=`czml_${++r}`;g.name=l.name,await a.dataSources.add(g),ht(a,d,g,"czml");const A={id:D,name:l.name,type:"czml",entity:g,blobUrl:u};return i.value=[...i.value,A],n.success(`CZML "${l.name}" 加载成功`),A}catch(g){throw Qe(u),g}}async function w(l){const d=t(),a=e();if(!d||!a)throw new Error("Cesium 未初始化");const u=vt(l);try{const g=await d.Cesium3DTileset.fromUrl(u),D=`tileset_${++r}`;a.scene.primitives.add(g);const A={id:D,name:l.name,type:"3dtiles",entity:g,blobUrl:u};return i.value=[...i.value,A],ht(a,d,g,"3dtiles"),n.success(`3D Tiles "${l.name}" 加载成功`),A}catch(g){throw Qe(u),g}}async function C(l){var g,D,A,k,U;const d=tn(l.name);let a;if(d==="gltf"){const E=await l.text();a=JSON.parse(E)}else{const E=await l.arrayBuffer();a=F(E)}if(!a)return null;if((g=a.extensionsUsed)!=null&&g.includes("CESIUM_RTC")&&((A=(D=a.extensions)==null?void 0:D.CESIUM_RTC)!=null&&A.center)){const E=a.extensions.CESIUM_RTC.center;if(E.length>=3){const G=t();if(G){const te=new G.Cartesian3(E[0],E[1],E[2]),J=G.Cartographic.fromCartesian(te);return{lng:G.Math.toDegrees(J.longitude),lat:G.Math.toDegrees(J.latitude),height:J.height}}}}const u=(k=a.asset)==null?void 0:k.extras;if(u){const E=u.longitude??u.lng,G=u.latitude??u.lat,te=u.height??u.altitude??u.alt??0;if(E!=null&&G!=null)return{lng:Number(E),lat:Number(G),height:Number(te)}}if(((U=a.nodes)==null?void 0:U.length)>0&&a.nodes[0].matrix){const E=a.nodes[0].matrix;if(E.length>=16){const G=E[12],te=E[13],J=E[14];if(Math.abs(G)>1e5||Math.abs(te)>1e5){const le=t();if(le)try{const ge=new le.Cartesian3(G,te,J),ue=le.Cartographic.fromCartesian(ge);return{lng:le.Math.toDegrees(ue.longitude),lat:le.Math.toDegrees(ue.latitude),height:ue.height}}catch{}}}}return null}function F(l){if(l.byteLength<20)return null;const d=new DataView(l);if(d.getUint32(0,!0)!==1179937895)return null;const u=d.getUint32(12,!0);if(d.getUint32(16,!0)!==1313821514)return null;const D=new Uint8Array(l,20,u),A=new TextDecoder().decode(D);try{return JSON.parse(A)}catch{return null}}async function o(l,d,a,u,g){const{lng:D,lat:A,height:k}=g,U=l.Cartesian3.fromDegrees(D,A,k),E=new l.HeadingPitchRoll(0,0,0),G=l.Transforms.localFrameToFixedFrameGenerator("north","west"),te=await l.Model.fromGltfAsync({url:a,modelMatrix:l.Transforms.headingPitchRollToFixedFrame(U,E,l.Ellipsoid.WGS84,G),scale:1,show:!0});return te.name=u,d.scene.primitives.add(te),te}async function h(l){const d=e(),a=t();if(!d||!a)throw n.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const u=tn(l.name);try{switch(u){case"geojson":case"json":return l.name.toLowerCase().includes(ws)?await w(l):await s(l);case"kml":return await b(l);case"kmz":return await v(l);case"shp":return await T(l);case"glb":case"gltf":return await P(l);case"czml":return await M(l);default:throw n.error(`不支持的文件格式: .${u}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${u}`)}}catch(g){throw n.error(`加载 "${l.name}" 失败: ${g.message||g}`),g}}function p(l){const d=i.value.find(u=>u.id===l);if(!d)return;const a=e();if(a){try{d.type==="3dtiles"?a.scene.primitives.remove(d.entity):a.dataSources.remove(d.entity,!0)}catch{}d.blobUrl&&Qe(d.blobUrl),i.value=i.value.filter(u=>u.id!==l),n.info(`已移除 "${d.name}"`)}}function m(){var a,u,g,D,A;const l=e();if(!l){i.value=[];return}for(const k of i.value){try{k.type==="3dtiles"?l.scene.primitives.remove(k.entity):l.dataSources.remove(k.entity,!0)}catch{}k.blobUrl&&Qe(k.blobUrl)}if(Array.isArray((a=l.dataSources)==null?void 0:a.dataSources)){const k=l.dataSources.dataSources.slice();for(const U of k)if(U&&!U.isBaseLayerPickerDataSource)try{l.dataSources.remove(U,!0)}catch{}}const d=t();if(d&&Array.isArray((g=(u=l.scene)==null?void 0:u.primitives)==null?void 0:g.primitives)){const k=l.scene.primitives.primitives.slice();for(const U of k)if(!(!U||!(U instanceof d.Cesium3DTileset||U instanceof d.Model||U.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(U.name||"")))))try{l.scene.primitives.remove(U)}catch{}}i.value=[],_();try{(A=(D=l.scene).requestRender)==null||A.call(D)}catch{}n.info("已清除所有导入数据")}return{loadDataFile:h,loadedDataSources:i,removeDataSource:p,clearAllDataSources:m,pendingGltfFile:c,loadGltfWithUserCoords:f,cancelPendingGltf:_}}const Ms="cesium_tool_panel_open";function Ds({fluidPanelRef:e,sceneActions:t={},wind:n={},modelManager:i=null,cameraEnhanced:c=null,heightSampler:r=null,playerController:s=null,panelStorageKey:b=Ms}={}){const v=Y(bt(b,!0)),S=Y({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),T=Y({enableLighting:!0,showGroundAtmosphere:!0,dynamicAtmosphereLighting:!0,dynamicAtmosphereLightingFromSun:!0,atmosphereLightIntensity:5.5,atmosphereHueShift:-.015,atmosphereSaturationShift:.08,atmosphereBrightnessShift:.02,lightingFadeInDistance:0,lightingFadeOutDistance:Number.MAX_SAFE_INTEGER,nightFadeInDistance:0,nightFadeOutDistance:Number.MAX_SAFE_INTEGER,fogEnabled:!1,fogDensity:12e-5,fogMinimumBrightness:.035,sunShow:!0,moonShow:!0,skyBoxShow:!0}),P=Y({dayNightEnabled:!0,nightFactor:0,moonLightEnabled:!0,moonLightIntensity:.18,ambientIntensity:.08,starsEnabled:!0,starsIntensity:1}),f=Y({cloudsEnabled:!1,cloudCoverage:.3,cloudSpeed:.001,cloudBottom:1500,cloudTop:2150,cloudQuality:"medium",cloudWindDirection:90,cloudScattering:1,cloudAbsorption:0,cloudAnisotropy1:.7,cloudAnisotropy2:-.2,cloudAnisotropyMix:.5,cloudSkyLight:1,cloudGroundBounce:1,cloudPowder:.8,cloudDensityScale:1,cloudShapeAmount:1,cloudDetailAmount:.5,cloudTurbulence:350,cloudHazeDensity:3e-5,cloudHazeExponent:.001}),_=Y({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null,floodSpeed:5}),M=Y({speed:300,flySpeed:55e3,gravity:-2400,jumpHeight:600,sensitivity:5,acceleration:30,deceleration:30,spawnHeight:500}),w=Y({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null,floodSimActive:!1}),C=Y(!1),F=Y({elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2}),o=Ae(()=>{var d,a,u,g,D,A,k,U,E,G,te,J,le,ge,ue,Ce,Oe,Le,W,$,O,de,Ie,we;return[{id:"scene",title:"场景导航",description:"相机飞行和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"atmosphere",title:"大气·光照·天空",description:"Cesium 原生光照 + Tellux 增强大气 + 高级后效（全部可选）",status:S.value.atmosphere||S.value.fog||S.value.hbao?"部分启用":"仅晨昏半球",statusTone:S.value.atmosphere?"success":"neutral",controls:[...ks(T.value),{id:"fog",label:"高度雾",type:"toggle",value:S.value.fog,tooltip:"基于高度的指数雾效"},{id:"hbao",label:"微阴影",type:"toggle",value:S.value.hbao,tooltip:"环境光遮蔽（HBAO）"},{id:"tiltShift",label:"移轴",type:"toggle",value:S.value.tiltShift,tooltip:"移轴模糊后处理"},{id:"atmosphere",label:"大气效果",type:"toggle",value:S.value.atmosphere,tooltip:"启用 Tellux 大气渲染（日夜过渡、月光、星空）"},...Rs(P.value,!S.value.atmosphere)]},{id:"cloud",title:"体积云",description:"PostProcessStage Ray Marching 体积云渲染",status:f.value.cloudsEnabled?f.value.cloudQuality??"medium":"未启用",statusTone:f.value.cloudsEnabled?"success":"neutral",controls:Is(f.value,!f.value.cloudsEnabled)},{id:"tools",title:"空间工具",description:"模型加载、增强相机、高度采样（Tellux 移植）",status:(((d=i==null?void 0:i.modelCount)==null?void 0:d.value)>0?"模型":"")||(((a=c==null?void 0:c.flightState)==null?void 0:a.value)==="flying"?"飞行中":"就绪"),statusTone:((u=i==null?void 0:i.modelCount)==null?void 0:u.value)>0?"success":"neutral",controls:[{id:"modelManagerEnabled",label:"模型管理",type:"toggle",value:!1,tooltip:"启用后可加载 glTF/GLB 模型到地理坐标位置"},{id:"cameraEnhancedEnabled",label:"增强相机",type:"toggle",value:!1,tooltip:"自定义缓动函数、角度插值和弹簧物理"},{id:"heightSamplerEnabled",label:"高度采样",type:"toggle",value:!1,tooltip:"地形高度查询、批量异步采样、屏幕坐标拾取"}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(g=n.wind2D)!=null&&g.value?"已加载":"未加载",statusTone:(D=n.wind2D)!=null&&D.value?"success":"neutral",actions:[{id:"load",label:(A=n.wind2D)!=null&&A.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((k=n.wind2D)!=null&&k.value)}],controls:Ls((U=n.windParams)==null?void 0:U.value,!!((E=n.wind2D)!=null&&E.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:w.value.isPicking?"等待选点":w.value.hasFluid?"已创建":"未创建",statusTone:w.value.isPicking?"warning":w.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:w.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:w.value.isPicking},{id:"floodSim",label:w.value.floodSimActive?"停止洪水":"洪水模拟",variant:w.value.floodSimActive?"danger":"default",active:w.value.floodSimActive,disabled:!Fs(w.value)},{id:"clear",label:"清除",variant:"danger",disabled:!w.value.hasFluid&&!w.value.isPicking}],controls:Ps(_.value,w.value)},{id:"shallowWater",title:"热带浅水",description:"Three.js 热带浅水场景（焦散/折射/物理吸色/体积云/闪电）",status:C.value?"已启用":"未启用",statusTone:C.value?"success":"neutral",actions:[{id:"toggle",label:C.value?"关闭":"启用",variant:C.value?"danger":"primary"}],controls:zs(F.value,!C.value)},{id:"player",title:"人物漫游",description:"第一/第三人称视角 + WASD 移动 + 碰撞检测 + 飞行模式",status:(G=s==null?void 0:s.isActive)!=null&&G.value?(te=s.isFirstPerson)!=null&&te.value?"第一人称":"第三人称":"未启动",statusTone:(J=s==null?void 0:s.isActive)!=null&&J.value?"success":"neutral",actions:[{id:"toggle",label:(le=s==null?void 0:s.isActive)!=null&&le.value?"停止漫游":"启动漫游",variant:(ge=s==null?void 0:s.isActive)!=null&&ge.value?"danger":"primary"},{id:"changeView",label:"切换视角",disabled:!((ue=s==null?void 0:s.isActive)!=null&&ue.value)},{id:"setNavTarget",label:(Ce=s==null?void 0:s.navTarget)!=null&&Ce.value?"更改目标":"设置导航"},{id:"clearNavTarget",label:"清除导航",disabled:!((Oe=s==null?void 0:s.navTarget)!=null&&Oe.value)}],controls:[{id:"speed",label:"行走速度",type:"range",value:M.value.speed,min:50,max:2e3,step:10,disabled:!((Le=s==null?void 0:s.isActive)!=null&&Le.value)},{id:"flySpeed",label:"飞行速度",type:"range",value:M.value.flySpeed,min:2e3,max:1e6,step:1e3,disabled:!((W=s==null?void 0:s.isActive)!=null&&W.value)},{id:"gravity",label:"重力",type:"range",value:M.value.gravity,min:-6e3,max:0,step:50,disabled:!(($=s==null?void 0:s.isActive)!=null&&$.value)},{id:"jumpHeight",label:"跳跃高度",type:"range",value:M.value.jumpHeight,min:0,max:3e3,step:50,disabled:!((O=s==null?void 0:s.isActive)!=null&&O.value)},{id:"sensitivity",label:"鼠标灵敏度",type:"range",value:M.value.sensitivity,min:1,max:20,step:.5,disabled:!((de=s==null?void 0:s.isActive)!=null&&de.value)},{id:"acceleration",label:"加速惯性",type:"range",value:M.value.acceleration,min:1,max:100,step:1,disabled:!((Ie=s==null?void 0:s.isActive)!=null&&Ie.value),tooltip:"值越大加速越快。WASD 按下后到达目标速度的响应快慢。"},{id:"deceleration",label:"减速惯性",type:"range",value:M.value.deceleration,min:1,max:100,step:1,disabled:!((we=s==null?void 0:s.isActive)!=null&&we.value),tooltip:"值越大松手后停得越快。影响滑行/惯性感。"},{id:"spawnHeight",label:"初始高度",type:"range",value:M.value.spawnHeight,min:50,max:5e3,step:50,disabled:!1,tooltip:"漫游启动时的离地高度（米），重启后生效。"}]}]});Fe(v,d=>{Ft(b,d)});function h({moduleId:d,actionId:a}){var g,D;(D=(g={scene:{home:()=>{var A;return(A=t.flyToHome)==null?void 0:A.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},fluid:{pick:()=>{var A,k;return(k=(A=e==null?void 0:e.value)==null?void 0:A.startPickHeightMap)==null?void 0:k.call(A)},floodSim:()=>{var A,k;return(k=(A=e==null?void 0:e.value)==null?void 0:A.toggleFloodSimulation)==null?void 0:k.call(A)},clear:()=>{var A,k;return(k=(A=e==null?void 0:e.value)==null?void 0:A.clearFluid)==null?void 0:k.call(A)}},shallowWater:{toggle:()=>{C.value=!C.value}},player:{toggle:()=>{var A;return(A=s==null?void 0:s.togglePlayer)==null?void 0:A.call(s,{spawnHeight:M.value.spawnHeight})},changeView:()=>{var A;return(A=s==null?void 0:s.changeView)==null?void 0:A.call(s)},setNavTarget:()=>{var A;return(A=s==null?void 0:s.openNavDialog)==null?void 0:A.call(s)},clearNavTarget:()=>{var A;return(A=s==null?void 0:s.clearNavTarget)==null?void 0:A.call(s)}}}[d])==null?void 0:g[a])==null||D.call(g)}function p({moduleId:d,controlId:a,value:u}){var g,D,A,k,U;if(d==="wind"&&a in(((g=n.windParams)==null?void 0:g.value)||{})){(D=n.setWindParam)==null||D.call(n,a,u);return}if(d==="fluid"&&a in _.value){_.value={..._.value,[a]:a==="waterColor"?u:Number(u)},a==="floodSpeed"&&((k=(A=e==null?void 0:e.value)==null?void 0:A.setFloodSpeed)==null||k.call(A,Number(u)));return}if(d==="shallowWater"&&a in F.value){F.value={...F.value,[a]:a==="waterColor"||a==="lightningEnabled"?u:Number(u)};return}if(d==="player"&&a in M.value){const E=Number(u);if(M.value={...M.value,[a]:E},a==="spawnHeight")return;const G=(U=s==null?void 0:s.getPlayerInstance)==null?void 0:U.call(s);G&&(a==="speed"?G.setPlayerSpeed(E):a==="flySpeed"?G.setPlayerFlySpeed(E):a==="gravity"?G.setGravity(E):a==="jumpHeight"?G.setJumpHeight(E):a==="sensitivity"?G.setMouseSensitivity(E):a==="acceleration"?G.setAcceleration(E):a==="deceleration"&&G.setDeceleration(E));return}if(d==="atmosphere"){if(a in S.value){S.value={...S.value,[a]:!!u};return}if(a in T.value){T.value={...T.value,[a]:u};return}if(a==="atmosphereEnabled"){S.value={...S.value,atmosphere:!!u};return}a in P.value&&(P.value={...P.value,[a]:u})}d==="cloud"&&a in f.value&&(f.value={...f.value,[a]:a==="cloudQuality"?u:Number(u)})}function m(d){const a=lt(d==null?void 0:d.waterLevel),u=lt(d==null?void 0:d.waterLevelMin),g=lt(d==null?void 0:d.waterLevelMax),D=lt(d==null?void 0:d.floodSpeed);w.value={isPicking:!!(d!=null&&d.isPicking),hasFluid:!!(d!=null&&d.hasFluid),selectedText:(d==null?void 0:d.selectedText)||"",waterLevel:a,waterLevelMin:u,waterLevelMax:g,floodSimActive:!!(d!=null&&d.floodSimActive)},D!==null&&(_.value={..._.value,floodSpeed:D}),a!==null&&(_.value={..._.value,waterLevel:a})}function l(){var d;(d=n.clearWind2D)==null||d.call(n)}return{toolPanelOpen:v,advancedEffectControls:S,baseAtmosphereParams:T,atmosphereParams:P,cloudParams:f,fluidParams:_,fluidState:w,shallowWaterVisible:C,shallowWaterParams:F,toolModules:o,handleToolAction:h,handleToolControlChange:p,handleFluidStateChange:m,cleanupTools:l}}function Ls(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function Fs(e){return lt(e.waterLevelMin)!==null&&lt(e.waterLevelMax)!==null}function Ps(e,t={}){const n=lt(t.waterLevelMin),i=lt(t.waterLevelMax),c=n!==null&&i!==null,r=c?Math.min(n,i):0,s=c?Math.max(n,i):0,b=lt(e.waterLevel),v=c?As(b??r,r,s):0,S=c?Math.max((s-r)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:r,max:s,step:S,value:v,displayValue:c?`${Cs(v)} m`:"先捕捉",disabled:!c,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"floodSpeed",label:"洪水速度",type:"range",min:c?Math.max((s-r)/100,.01):.1,max:c?Math.max(s-r,1):50,step:c?Math.max((s-r)/1e3,.01):.5,value:e.floodSpeed??(c?(s-r)/10:5),displayValue:(()=>{const T=s-r,P=e.floodSpeed??(c?T/10:5),f=c&&P>0?T/P:0;return c?`${Number(P).toFixed(1)} m/s（${f.toFixed(1)}s）`:"先捕捉"})(),disabled:!c||!!t.floodSimActive,tooltip:"洪水模拟水位上涨速度。默认值域÷10（10s 完成），可自定义。范围：100s ~ 1s 完成。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function lt(e){const t=Number(e);return Number.isFinite(t)?t:null}function As(e,t,n){return Math.max(t,Math.min(n,e))}function Cs(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const Es={low:{label:"低"},medium:{label:"中"},high:{label:"高"},ultra:{label:"超高"}};function Rs(e={},t){return[{id:"atmosphereEnabled",label:"大气效果",type:"toggle",value:!t,tooltip:"启用 Tellux 大气渲染系统（日夜过渡、月光、体积云、星空）"},{id:"dayNightEnabled",label:"日夜过渡",type:"toggle",value:e.dayNightEnabled!==!1,disabled:t,tooltip:"基于太阳高度角的平滑日夜过渡效果"},{id:"moonLightEnabled",label:"月光",type:"toggle",value:e.moonLightEnabled!==!1,disabled:t,tooltip:"夜间月光照明效果"},{id:"moonLightIntensity",label:"月光强度",type:"range",min:0,max:1,step:.01,value:e.moonLightIntensity??.18,displayValue:Number(e.moonLightIntensity??.18).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"ambientIntensity",label:"环境光",type:"range",min:0,max:1,step:.01,value:e.ambientIntensity??.08,displayValue:Number(e.ambientIntensity??.08).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"starsEnabled",label:"星空",type:"toggle",value:e.starsEnabled!==!1,disabled:t,tooltip:"基于高度的星空可见性"},{id:"starsIntensity",label:"星空强度",type:"range",min:0,max:5,step:.1,value:e.starsIntensity??1,displayValue:Number(e.starsIntensity??1).toFixed(1),disabled:t||!e.starsEnabled}]}function Is(e={},t){return[{id:"cloudsEnabled",label:"启用体积云",type:"toggle",value:e.cloudsEnabled===!0,tooltip:"基于 PostProcessStage 的体积云 Ray Marching 渲染"},{id:"cloudQuality",label:"质量预设",type:"select",value:e.cloudQuality??"medium",options:Object.entries(Es).map(([n,i])=>({value:n,label:i.label})),disabled:t||!e.cloudsEnabled},{id:"cloudCoverage",label:"云覆盖率",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.3,displayValue:`${Math.round((e.cloudCoverage??.3)*100)}%`,disabled:t||!e.cloudsEnabled},{id:"cloudBottom",label:"云底高度",type:"range",min:500,max:5e3,step:50,value:e.cloudBottom??1500,displayValue:`${Math.round(e.cloudBottom??1500)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudTop",label:"云顶高度",type:"range",min:1e3,max:1e4,step:100,value:e.cloudTop??2150,displayValue:`${Math.round(e.cloudTop??2150)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudSpeed",label:"移动速度",type:"range",min:0,max:.01,step:1e-4,value:e.cloudSpeed??.001,displayValue:Number(e.cloudSpeed??.001).toFixed(4),disabled:t||!e.cloudsEnabled},{id:"cloudWindDirection",label:"风向",type:"range",min:0,max:360,step:1,value:e.cloudWindDirection??90,displayValue:`${Math.round(e.cloudWindDirection??90)}°`,disabled:t||!e.cloudsEnabled},{id:"cloudScattering",label:"散射系数",type:"range",min:0,max:3,step:.01,value:e.cloudScattering??1,displayValue:Number(e.cloudScattering??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAbsorption",label:"吸收系数",type:"range",min:0,max:1,step:.01,value:e.cloudAbsorption??0,displayValue:Number(e.cloudAbsorption??0).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropy1",label:"前向散射",type:"range",min:-1,max:1,step:.01,value:e.cloudAnisotropy1??.7,displayValue:Number(e.cloudAnisotropy1??.7).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropy2",label:"后向散射",type:"range",min:-1,max:1,step:.01,value:e.cloudAnisotropy2??-.2,displayValue:Number(e.cloudAnisotropy2??-.2).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudAnisotropyMix",label:"散射混合比",type:"range",min:0,max:1,step:.01,value:e.cloudAnisotropyMix??.5,displayValue:Number(e.cloudAnisotropyMix??.5).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudSkyLight",label:"天空光",type:"range",min:0,max:3,step:.05,value:e.cloudSkyLight??1,displayValue:Number(e.cloudSkyLight??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudGroundBounce",label:"地面反弹光",type:"range",min:0,max:2,step:.05,value:e.cloudGroundBounce??1,displayValue:Number(e.cloudGroundBounce??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudPowder",label:"Powder 效应",type:"range",min:0,max:2,step:.05,value:e.cloudPowder??.8,displayValue:Number(e.cloudPowder??.8).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudDensityScale",label:"密度缩放",type:"range",min:0,max:3,step:.01,value:e.cloudDensityScale??1,displayValue:Number(e.cloudDensityScale??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudShapeAmount",label:"形状强度",type:"range",min:0,max:2,step:.01,value:e.cloudShapeAmount??1,displayValue:Number(e.cloudShapeAmount??1).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudDetailAmount",label:"细节强度",type:"range",min:0,max:1,step:.01,value:e.cloudDetailAmount??.5,displayValue:Number(e.cloudDetailAmount??.5).toFixed(2),disabled:t||!e.cloudsEnabled},{id:"cloudTurbulence",label:"湍流位移",type:"range",min:0,max:1e3,step:10,value:e.cloudTurbulence??350,displayValue:`${Math.round(e.cloudTurbulence??350)} m`,disabled:t||!e.cloudsEnabled},{id:"cloudHazeDensity",label:"雾霾密度",type:"range",min:0,max:.001,step:1e-5,value:e.cloudHazeDensity??3e-5,displayValue:Number(e.cloudHazeDensity??3e-5).toFixed(5),disabled:t||!e.cloudsEnabled},{id:"cloudHazeExponent",label:"雾霾衰减",type:"range",min:0,max:.01,step:1e-4,value:e.cloudHazeExponent??.001,displayValue:Number(e.cloudHazeExponent??.001).toFixed(4),disabled:t||!e.cloudsEnabled}]}function ks(e={}){return[{id:"enableLighting",label:"日照",type:"toggle",value:e.enableLighting!==!1,tooltip:"Cesium globe.enableLighting：启用日照贴图"},{id:"showGroundAtmosphere",label:"地面大气",type:"toggle",value:e.showGroundAtmosphere!==!1,tooltip:"globe.showGroundAtmosphere：地面大气光晕"},{id:"dynamicAtmosphereLighting",label:"动态光照",type:"toggle",value:e.dynamicAtmosphereLighting!==!1},{id:"atmosphereLightIntensity",label:"大气光强",type:"range",min:0,max:25,step:.5,value:e.atmosphereLightIntensity??5.5,displayValue:Number(e.atmosphereLightIntensity??5.5).toFixed(1)},{id:"fogEnabled",label:"雾效",type:"toggle",value:e.fogEnabled!==!1},{id:"fogDensity",label:"雾密度",type:"range",min:1e-5,max:.001,step:1e-5,value:e.fogDensity??12e-5,displayValue:Number(e.fogDensity??12e-5).toFixed(5),disabled:!e.fogEnabled},{id:"sunShow",label:"太阳",type:"toggle",value:e.sunShow!==!1},{id:"moonShow",label:"月亮",type:"toggle",value:e.moonShow!==!1},{id:"skyBoxShow",label:"星空盒",type:"toggle",value:e.skyBoxShow!==!1}]}function zs(e={},t=!1){return[{id:"elevation",label:"高度角",type:"range",min:2,max:80,step:.1,value:e.elevation??30,displayValue:Number(e.elevation??30).toFixed(1),disabled:t},{id:"azimuth",label:"方位角",type:"range",min:-180,max:180,step:.1,value:e.azimuth??150,displayValue:Number(e.azimuth??150).toFixed(1),disabled:t},{id:"clarity",label:"清澈度",type:"range",min:.03,max:.4,step:.005,value:e.clarity??.085,displayValue:Number(e.clarity??.085).toFixed(3),tooltip:"越小越清澈(Beer-Lambert 密度)",disabled:t},{id:"causticStrength",label:"焦散强度",type:"range",min:0,max:2,step:.05,value:e.causticStrength??.9,displayValue:Number(e.causticStrength??.9).toFixed(2),disabled:t},{id:"waveHeight",label:"浪高",type:"range",min:0,max:1.5,step:.05,value:e.waveHeight??.5,displayValue:Number(e.waveHeight??.5).toFixed(2),disabled:t},{id:"foamWidth",label:"泡沫宽度",type:"range",min:0,max:8,step:.1,value:e.foamWidth??2.4,displayValue:Number(e.foamWidth??2.4).toFixed(1),disabled:t},{id:"reflection",label:"反射强度",type:"range",min:0,max:1,step:.02,value:e.reflection??.38,displayValue:Number(e.reflection??.38).toFixed(2),disabled:t},{id:"waterColor",label:"远处浅水色",type:"color",value:e.waterColor??"#2bb3c4",disabled:t},{id:"cloudCoverage",label:"云量",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.58,displayValue:Number(e.cloudCoverage??.58).toFixed(2),disabled:t},{id:"lightningEnabled",label:"闪电开关",type:"toggle",value:e.lightningEnabled!==!1,disabled:t},{id:"lightningInterval",label:"闪电间隔(秒)",type:"range",min:.4,max:8,step:.1,value:e.lightningInterval??2,displayValue:Number(e.lightningInterval??2).toFixed(1),disabled:t||e.lightningEnabled===!1}]}const Qn={low:{label:"低",maxIterationCount:64,minStepSize:200,maxStepSize:2e3,maxRayDistance:8e4,perspectiveStepScale:1.02,minDensity:1e-4,minTransmittance:.1,multiScatteringOctaves:2,maxIterationCountToSun:0,maxIterationCountToGround:0,minSecondaryStepSize:200,shapeDetail:!1,turbulence:!1},medium:{label:"中",maxIterationCount:128,minStepSize:100,maxStepSize:1500,maxRayDistance:15e4,perspectiveStepScale:1.015,minDensity:1e-4,minTransmittance:.05,multiScatteringOctaves:4,maxIterationCountToSun:1,maxIterationCountToGround:0,minSecondaryStepSize:150,shapeDetail:!0,turbulence:!1},high:{label:"高",maxIterationCount:256,minStepSize:50,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.01,minDensity:1e-5,minTransmittance:.01,multiScatteringOctaves:6,maxIterationCountToSun:2,maxIterationCountToGround:1,minSecondaryStepSize:100,shapeDetail:!0,turbulence:!0},ultra:{label:"超高",maxIterationCount:512,minStepSize:20,maxStepSize:800,maxRayDistance:25e4,perspectiveStepScale:1.008,minDensity:1e-6,minTransmittance:.005,multiScatteringOctaves:8,maxIterationCountToSun:3,maxIterationCountToGround:2,minSecondaryStepSize:50,shapeDetail:!0,turbulence:!0}};function Ze(e){return Qn[e]??Qn.medium}const Ns={enabled:!1,quality:"medium",minHeight:1500,maxHeight:2150,coverage:.3,windSpeed:.001,windDirection:90,scatteringCoefficient:1,absorptionCoefficient:0,scatterAnisotropy1:.7,scatterAnisotropy2:-.2,scatterAnisotropyMix:.5,skyLightScale:1,groundBounceScale:1,powderScale:.8,densityScale:1,shapeAmount:1,shapeDetailAmount:.5,turbulenceDisplacement:350,hazeDensityScale:3e-5,hazeExponent:.001,nightMoonIntensity:.18,nightAmbientIntensity:.08,nightColor:"#9bbcff",dayLightFactor:1};function Os(e){const t=e.replace("#",""),n=parseInt(t.substring(0,2),16)/255,i=parseInt(t.substring(2,4),16)/255,c=parseInt(t.substring(4,6),16)/255;return[n,i,c]}function Hs(e){return e*Math.PI/180}function Bs(e){const t=e;return{u_enabled:()=>t().enabled,u_minHeight:()=>t().minHeight,u_maxHeight:()=>t().maxHeight,u_coverage:()=>t().coverage,u_windSpeed:()=>t().windSpeed,u_windDirection:()=>{const n=Hs(t().windDirection);return[Math.cos(n),Math.sin(n)]},u_scatteringCoefficient:()=>t().scatteringCoefficient,u_absorptionCoefficient:()=>t().absorptionCoefficient,u_scatterAnisotropy1:()=>t().scatterAnisotropy1,u_scatterAnisotropy2:()=>t().scatterAnisotropy2,u_scatterAnisotropyMix:()=>t().scatterAnisotropyMix,u_skyLightScale:()=>t().skyLightScale,u_groundBounceScale:()=>t().groundBounceScale,u_powderScale:()=>t().powderScale,u_densityScale:()=>t().densityScale,u_shapeAmount:()=>t().shapeAmount,u_shapeDetailAmount:()=>t().shapeDetailAmount,u_turbulenceDisplacement:()=>t().turbulenceDisplacement,u_hazeDensityScale:()=>t().hazeDensityScale,u_hazeExponent:()=>t().hazeExponent,u_nightMoonIntensity:()=>t().nightMoonIntensity,u_nightAmbientIntensity:()=>t().nightAmbientIntensity,u_nightColor:()=>Os(t().nightColor),u_dayLightFactor:()=>t().dayLightFactor,u_maxIterationCount:()=>Ze(t().quality).maxIterationCount,u_minStepSize:()=>Ze(t().quality).minStepSize,u_maxStepSize:()=>Ze(t().quality).maxStepSize,u_maxRayDistance:()=>Ze(t().quality).maxRayDistance,u_perspectiveStepScale:()=>Ze(t().quality).perspectiveStepScale,u_minDensity:()=>Ze(t().quality).minDensity,u_minTransmittance:()=>Ze(t().quality).minTransmittance,u_multiScatteringOctaves:()=>Ze(t().quality).multiScatteringOctaves,u_maxIterationCountToSun:()=>Ze(t().quality).maxIterationCountToSun,u_maxIterationCountToGround:()=>Ze(t().quality).maxIterationCountToGround,u_minSecondaryStepSize:()=>Ze(t().quality).minSecondaryStepSize,u_shapeDetailEnabled:()=>Ze(t().quality).shapeDetail?1:0,u_turbulenceEnabled:()=>Ze(t().quality).turbulence?1:0}}const Us=`// ============================================================
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
`;function ut(){const e=window.Cesium;if(!e)throw new Error("[CloudManager] window.Cesium 未就绪，请确保 Cesium CDN 已加载");return e}const Ws={shape:"/textures/cloud/shape.bin",shapeDetail:"/textures/cloud/shape_detail.bin",weather:"/textures/cloud/local_weather.png",turbulence:"/textures/cloud/turbulence.png"};class Gs{constructor(t,n){tt(this,"viewer");tt(this,"stage",null);tt(this,"textures",{shape:null,shapeDetail:null,weather:null,turbulence:null});tt(this,"_values",{...Ns});tt(this,"_initialized",!1);tt(this,"_destroyed",!1);tt(this,"_texturePaths");tt(this,"_startTime",0);this.viewer=t,this._texturePaths={...Ws,...n==null?void 0:n.texturePaths},n!=null&&n.quality&&(this._values.quality=n.quality),(n==null?void 0:n.enabled)!==void 0&&(this._values.enabled=n.enabled)}async init(){if(this._initialized||this._destroyed)return;const t=this.viewer.scene;if(!t||t.isDestroyed())return;this._startTime=performance.now()/1e3;const n=ut(),i=t.context,c=new n.Sampler({minificationFilter:n.TextureMinificationFilter.LINEAR,magnificationFilter:n.TextureMagnificationFilter.LINEAR,wrapS:n.TextureWrap.REPEAT,wrapT:n.TextureWrap.REPEAT}),r=()=>new n.Texture({context:i,source:{arrayBufferView:new Uint8Array([128,128,128,255]),width:1,height:1},pixelFormat:n.PixelFormat.RGBA,pixelDatatype:n.PixelDatatype.UNSIGNED_BYTE,sampler:c});try{this.textures.shape=r(),this.textures.shapeDetail=r(),this.textures.weather=r(),this.textures.turbulence=r()}catch{for(const b of[this.textures.shape,this.textures.shapeDetail,this.textures.weather,this.textures.turbulence])if(b)try{b.destroy()}catch{}this.textures.shape=null,this.textures.shapeDetail=null,this.textures.weather=null,this.textures.turbulence=null;return}this.stage=new n.PostProcessStage({fragmentShader:Us,uniforms:this.buildStageUniforms()}),this.stage.enabled=!1,t.postProcessStages.add(this.stage),await this.loadTextures(),!this._destroyed&&(this._initialized=!0,this.stage&&this._values.enabled&&(this.stage.enabled=!0))}destroy(){if(this._destroyed=!0,this.stage){const t=this.viewer.scene;t&&!t.isDestroyed()&&(t.postProcessStages.remove(this.stage),this.stage.destroy()),this.stage=null}for(const t of Object.keys(this.textures))if(this.textures[t]){try{this.textures[t].destroy()}catch{}this.textures[t]=null}this._initialized=!1}show(){this._values.enabled=!0,this.stage&&(this.stage.enabled=!0)}hide(){this._values.enabled=!1,this.stage&&(this.stage.enabled=!1)}toggle(){this._values.enabled?this.hide():this.show()}get initialized(){return this._initialized}get visible(){return this._values.enabled}get values(){return this._values}updateUniforms(t){Object.assign(this._values,t)}setQuality(t){this._values.quality=t}getPresetDetail(){return Ze(this._values.quality)}buildStageUniforms(){return{...Bs(()=>this._values),...{u_shapeTexture:()=>this.textures.shape,u_shapeDetailTexture:()=>this.textures.shapeDetail,u_weatherTexture:()=>this.textures.weather,u_turbulenceTexture:()=>this.textures.turbulence},...{u_time:()=>performance.now()/1e3-this._startTime},...{u_shapeRepeat:()=>[3e-4,3e-4,3e-4],u_shapeDetailRepeat:()=>[.006,.006,.006],u_weatherRepeat:()=>[1,1],u_shapeDepth:()=>128,u_shapeDetailDepth:()=>32},...{u_cameraPosition:()=>{var S,T,P;const b=ut();return((P=(T=(S=this.viewer)==null?void 0:S.scene)==null?void 0:T.camera)==null?void 0:P.positionWC)??new b.Cartesian3(0,0,0)},u_inverseProjection:()=>{var S,T,P,f;const b=ut();return((f=(P=(T=(S=this.viewer)==null?void 0:S.scene)==null?void 0:T.context)==null?void 0:P.uniformState)==null?void 0:f.inverseProjectionMatrix)??b.Matrix4.IDENTITY},u_inverseView:()=>{var S,T,P,f;const b=ut();return((f=(P=(T=(S=this.viewer)==null?void 0:S.scene)==null?void 0:T.context)==null?void 0:P.uniformState)==null?void 0:f.inverseViewMatrix)??b.Matrix4.IDENTITY},u_sunDirection:()=>{var S,T,P,f;const b=ut();return((f=(P=(T=(S=this.viewer)==null?void 0:S.scene)==null?void 0:T.context)==null?void 0:P.uniformState)==null?void 0:f.sunDirectionWC)??new b.Cartesian3(0,0,1)},u_ellipsoidRadii:()=>{var S,T,P,f;const b=ut();return((f=(P=(T=(S=this.viewer)==null?void 0:S.scene)==null?void 0:T.globe)==null?void 0:P.ellipsoid)==null?void 0:f.radii)??new b.Cartesian3(6378137,6378137,6356752314245179e-9)}}}}async loadTextures(){const t=[this.load3DBinaryTexture("shape",this._texturePaths.shape,128),this.load3DBinaryTexture("shapeDetail",this._texturePaths.shapeDetail,32),this.load2DImageTexture("weather",this._texturePaths.weather),this.load2DImageTexture("turbulence",this._texturePaths.turbulence)];if(await Promise.allSettled(t),this._destroyed){for(const n of Object.keys(this.textures))if(this.textures[n]){try{this.textures[n].destroy()}catch{}this.textures[n]=null}}}async load3DBinaryTexture(t,n,i){var r;if(!n)return;const c=(r=this.viewer.scene)==null?void 0:r.context;if(c)try{const s=await fetch(n);if(!s.ok)throw new Error(`HTTP ${s.status}`);const b=await s.arrayBuffer(),v=i*i*i;if(b.byteLength<v)return;const S=new Uint8Array(b,0,v),T=ut(),P=new T.Texture({context:c,source:{arrayBufferView:S,width:i,height:i*i},pixelFormat:T.PixelFormat.RED,pixelDatatype:T.PixelDatatype.UNSIGNED_BYTE,sampler:new T.Sampler({minificationFilter:T.TextureMinificationFilter.LINEAR,magnificationFilter:T.TextureMagnificationFilter.LINEAR,wrapS:T.TextureWrap.REPEAT,wrapT:T.TextureWrap.REPEAT})});if(this.textures[t])try{this.textures[t].destroy()}catch{}this.textures[t]=P}catch{}}async load2DImageTexture(t,n){var c;if(!n)return;const i=(c=this.viewer.scene)==null?void 0:c.context;if(i)try{const r=await fetch(n);if(!r.ok)throw new Error(`HTTP ${r.status}`);const s=await r.blob(),b=await createImageBitmap(s),v=ut(),S=new v.Texture({context:i,source:b,sampler:new v.Sampler({minificationFilter:v.TextureMinificationFilter.LINEAR,magnificationFilter:v.TextureMagnificationFilter.LINEAR,wrapS:v.TextureWrap.REPEAT,wrapT:v.TextureWrap.REPEAT})});if(b.close(),this.textures[t])try{this.textures[t].destroy()}catch{}this.textures[t]=S}catch{}}}function $s(e){const{viewer:t,cloudParams:n,atmosphereParams:i,config:c}=e;let r=null,s=null,b=!1;async function v(){if(!b&&!(r!=null&&r.initialized)){if(s){await s;return}r=new Gs(t,{enabled:!!n.value.cloudsEnabled,quality:n.value.cloudQuality||"medium",...c}),s=r.init();try{await s}catch{r=null}finally{s=null}if(b&&r){r.destroy(),r=null;return}r!=null&&r.initialized&&S(n.value)}}function S(f){if(!(r!=null&&r.initialized))return;"cloudsEnabled"in f&&(f.cloudsEnabled?r.show():r.hide());const _={};"cloudCoverage"in f&&(_.coverage=Number(f.cloudCoverage)||.3),"cloudSpeed"in f&&(_.windSpeed=Number(f.cloudSpeed)||.001),"cloudBottom"in f&&(_.minHeight=Number(f.cloudBottom)||1500),"cloudTop"in f&&(_.maxHeight=Number(f.cloudTop)||2150),"cloudWindDirection"in f&&(_.windDirection=Number(f.cloudWindDirection)||90),"cloudScattering"in f&&(_.scatteringCoefficient=Number(f.cloudScattering)||1),"cloudAbsorption"in f&&(_.absorptionCoefficient=Number(f.cloudAbsorption)||0),"cloudAnisotropy1"in f&&(_.scatterAnisotropy1=Number(f.cloudAnisotropy1)||.7),"cloudAnisotropy2"in f&&(_.scatterAnisotropy2=Number(f.cloudAnisotropy2)||-.2),"cloudAnisotropyMix"in f&&(_.scatterAnisotropyMix=Number(f.cloudAnisotropyMix)||.5),"cloudSkyLight"in f&&(_.skyLightScale=Number(f.cloudSkyLight)||1),"cloudGroundBounce"in f&&(_.groundBounceScale=Number(f.cloudGroundBounce)||1),"cloudPowder"in f&&(_.powderScale=Number(f.cloudPowder)||.8),"cloudDensityScale"in f&&(_.densityScale=Number(f.cloudDensityScale)||1),"cloudShapeAmount"in f&&(_.shapeAmount=Number(f.cloudShapeAmount)||1),"cloudDetailAmount"in f&&(_.shapeDetailAmount=Number(f.cloudDetailAmount)||.5),"cloudTurbulence"in f&&(_.turbulenceDisplacement=Number(f.cloudTurbulence)||350),"cloudHazeDensity"in f&&(_.hazeDensityScale=Number(f.cloudHazeDensity)||3e-5),"cloudHazeExponent"in f&&(_.hazeExponent=Number(f.cloudHazeExponent)||.001),"cloudQuality"in f&&r.setQuality(f.cloudQuality),Object.keys(_).length>0&&r.updateUniforms(_)}const T=Fe(n,f=>{if(!b){if(!(r!=null&&r.initialized)){f.cloudsEnabled&&v();return}S(f)}},{deep:!0});let P;return i&&(P=Fe(i,f=>{if(b||!(r!=null&&r.initialized))return;const _={};"moonLightIntensity"in f&&(_.nightMoonIntensity=Number(f.moonLightIntensity)||0),"ambientIntensity"in f&&(_.nightAmbientIntensity=Number(f.ambientIntensity)||0),"dayNightEnabled"in f&&(_.dayLightFactor=f.dayNightEnabled?1:.5),Object.keys(_).length>0&&r.updateUniforms(_)},{deep:!0})),n.value.cloudsEnabled&&v(),function(){b=!0,T(),P==null||P(),r&&(r.destroy(),r=null),s=null}}const{getLayerIdByIndex:qs,getLayerIndexById:ei}=sa({urlLayerOptions:la,getLayerCategoryById:ca,getLayerGroupById:ua}),on=-90,yn=1,hi=5e7;function js({getViewer:e,getCesium:t,onCameraViewSync:n,onBasemapRestore:i}={}){const c=gi(),r=vi();let s=null;function b(o){return da(o,c.query)}function v(){const o=String(b(xn)||"").trim(),h=ft(b("lng")),p=ft(b("lat")),m=Vs(b("z")),l=ha(o);if(l&&h!==null&&p!==null&&m!==null){const a={lng:h,lat:p,height:m,...l};if(ti(a))return a}const d=fa(o);return ti(d)?d:h===null||p===null||m===null||h<-180||h>180||p<-90||p>90?null:{lng:h,lat:p,height:m,heading:ft(b("heading"))??0,pitch:ft(b("pitch"))??on,roll:ft(b("roll"))??0}}function S({duration:o=0}={}){const h=e==null?void 0:e(),p=t==null?void 0:t(),m=v();if(!(h!=null&&h.camera)||!p||!m)return!1;const l=p.Cartesian3.fromDegrees(m.lng,m.lat,m.height),d={heading:nn(p,m.heading??0),pitch:nn(p,Xs(m.pitch??on)),roll:nn(p,m.roll??0)};return Number(o)>0?(h.camera.flyTo({destination:l,orientation:d,duration:Number(o)}),!0):(h.camera.setView({destination:l,orientation:d}),!0)}function T(o){if(!o)return null;const h=ei(o);if(h===null)return null;const p={view:jt,l:String(h)};return F(p),String(h)}function P(){const o=ft(b("l"));if(o===null)return null;const h=qs(o);return h&&(i==null||i(h)),h}function f({initialSync:o=!1,getActivePresetId:h}={}){const p=w();if(!(!(p!=null&&p.moveEnd)||s)&&(s=p.moveEnd.addEventListener(()=>{const m=h==null?void 0:h();M({activePresetId:m})}),o)){const m=h==null?void 0:h();M({activePresetId:m})}}function _(){typeof s=="function"&&s(),s=null}function M({activePresetId:o}={}){const h=t==null?void 0:t(),p=w();if(!h||!(p!=null&&p.position))return;const m=h.Cartographic.fromCartesian(p.position);if(!m)return;const l=h.Math.toDegrees(m.longitude),d=h.Math.toDegrees(m.latitude),a=Number(m.height),u=h.Math.toDegrees(Number(p.heading)||0),g=h.Math.toDegrees(Number(p.pitch)||0),D=h.Math.toDegrees(Number(p.roll)||0);if(!Number.isFinite(l)||!Number.isFinite(d)||!Number.isFinite(a))return;const A=Math.max(yn,a),k=oa({heading:u,pitch:g,roll:D});if(!k||k==="0")return;const U={view:jt,camera:{lng:l,lat:d,height:A,heading:u,pitch:g,roll:D}},E={view:jt,[xn]:k,lng:ni(l,6),lat:ni(d,6),z:Ys(A)},G=o;if(G){const te=ei(G);te!==null&&(E.l=String(te))}F(E),n==null||n(U)}function w(){var h;const o=e==null?void 0:e();return(o==null?void 0:o.camera)||((h=o==null?void 0:o.scene)==null?void 0:h.camera)||null}function C(o,h){const p=Object.keys(o).filter(l=>o[l]!==void 0&&o[l]!==null&&o[l]!==""),m=Object.keys(h).filter(l=>h[l]!==void 0&&h[l]!==null&&h[l]!=="");return p.length!==m.length?!1:m.every(l=>String(o[l]??"")===String(h[l]??""))}function F(o){const h={...In(c.query),...o};xi.forEach(m=>{m in o||delete h[m]}),Object.keys(h).forEach(m=>{const l=h[m];l==null||l===""?delete h[m]:h[m]=String(l)});const p=In(c.query);C(p,h)||r.replace({path:c.path||"/home",query:h}).catch(()=>{})}return{restoreCameraFromUrl:S,restoreBasemapFromUrl:P,syncBasemapToUrl:T,bindCameraViewSync:f,cleanupCameraViewSync:_}}function ft(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Vs(e){const t=ft(e);return t===null||t<yn||t>hi?null:t}function ti(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),i=Number(e.height),c=Number(e.heading),r=Number(e.pitch),s=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(i)&&i>=yn&&i<=hi&&Number.isFinite(c)&&Number.isFinite(r)&&r>=-90&&r<=90&&Number.isFinite(s)}function Xs(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):on}function ni(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function Ys(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function nn(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const qe={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Ks=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Zs=new Float32Array([0,0,1,0,1,1,0,1]),Js=new Uint16Array([0,1,2,0,2,3]);function dt(e,t,n){return Math.max(t,Math.min(n,e))}function Se(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Qs(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),i=Math.min(2048,n),c=Math.max(1,Math.floor(e)),r=Math.sqrt(c),s=Math.log2(r),b=Number.isFinite(s)?Math.round(s):4;let v=Math.pow(2,b);return v=dt(v,16,i),v}function el(e){const t=e*e,n=new Float32Array(t*4);for(let i=0;i<t;i+=1){const c=i*4;n[c]=Math.random(),n[c+1]=Math.random(),n[c+2]=Math.random(),n[c+3]=Math.random()}return n}function tl(e){return new Float32Array(e*e*4)}function nl(e,t,n,i,c){const r=t.createTexture();if(!r)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,r),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,i,0,t.RGBA,t.FLOAT,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let s=!1;return{_context:e,_texture:r,_target:t.TEXTURE_2D,_width:n,_height:i,destroy(){s||(t.deleteTexture(r),s=!0)}}}class il{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const i={...qe,...n};this.speedFactor=Se(i.speedFactor,qe.speedFactor),this.cullSpeedMin=Se(i.cullSpeedMin,qe.cullSpeedMin),this.cullSpeedMax=Se(i.cullSpeedMax,qe.cullSpeedMax),this.windSpeedMin=Se(i.windSpeedMin,qe.windSpeedMin),this.windSpeedMax=Se(i.windSpeedMax,qe.windSpeedMax),this.arrowLength=Se(i.arrowLength,qe.arrowLength),this.trailLength=Se(i.trailLength,qe.trailLength),this.decaySpeed=Se(i.decaySpeed,qe.decaySpeed),this.alphaFactor=Se(i.alphaFactor,qe.alphaFactor),this.maxWindSpeed=Se(i.maxWindSpeed,qe.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=Se(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=Se(t.longitude,NaN),i=Se(t.latitude,NaN),c=Array.isArray(t.altitude)?t.altitude:[],r=Array.isArray(t.sizeMesh)?t.sizeMesh:[],s=Array.isArray(t.count)?t.count:[],b=Array.isArray(t.hspeed)?t.hspeed:[],v=Array.isArray(t.hdir)?t.hdir:[],S=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(i))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const T=c.length;if(T<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(r.length!==T||s.length!==T)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const P=s.map(d=>Math.max(1,Math.floor(Se(d,1)))),f=r.map(d=>Math.max(1,Se(d,1))),_=c.map(d=>Se(d,0)),M=P.reduce((d,a)=>d+a*a,0);if(b.length<M||v.length<M||S.length<M)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=T,this.visibleLayerMin=0,this.visibleLayerMax=T-1,this._altitudes=_.slice(),this._maxNx=Math.max(...P),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*T;const w=new Float32Array(this._atlasWidth*this._atlasHeight*4);let C=0;for(let d=0;d<T;d+=1){const a=P[d],u=a;for(let g=0;g<u;g+=1)for(let D=0;D<a;D+=1){const A=C+g*a+D,k=((d*this._maxNy+g)*this._atlasWidth+D)*4,U=Number(b[A]),E=Number(v[A]),G=Number(S[A]);if(!(Number.isFinite(U)&&Number.isFinite(E))){w[k]=0,w[k+1]=0,w[k+2]=0,w[k+3]=0;continue}const J=E*Math.PI/180;w[k]=U*Math.sin(J),w[k+1]=U*Math.cos(J),w[k+2]=Number.isFinite(G)?G:0,w[k+3]=1}C+=a*u}this._createOrReplaceWindAtlasTexture(w);const F=Math.max(...f),o=this._maxNx*F,h=o/2/111320,p=i*Math.PI/180,m=Math.max(1e-6,Math.abs(Math.cos(p))),l=o/2/(111320*m);this._bounds={minLon:n-l,maxLon:n+l,minLat:i-h,maxLat:i+h,minHeight:Math.min(..._),maxHeight:Math.max(..._)},this._dataPointCount=M,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(Se(t,1))),i=Qs(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&i===this._particleTextureSize||(this._particleTextureSize=i,this._particleCount=i*i,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=dt(Se(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const i=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(i)}setBounds(t,n,i,c){const r=Se(t,NaN),s=Se(n,NaN),b=Se(i,NaN),v=Se(c,NaN);if(!Number.isFinite(r)||!Number.isFinite(s)||!Number.isFinite(b)||!Number.isFinite(v))return;const S=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};S.minLon=Math.min(r,s),S.maxLon=Math.max(r,s),S.minLat=Math.min(b,v),S.maxLat=Math.max(b,v),this._bounds=S,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const c=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[c],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=c,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=nl(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,i=el(n),c=tl(n);for(let r=0;r<2;r+=1){this._particlePositionTextures[r]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:i},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[r]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:c},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[r]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[r],this._velocityTextures[r]],destroyAttachments:!1});const s=this._framebuffers[r]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,s),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:Ks,usage:t.BufferUsage.STATIC_DRAW}),i=t.Buffer.createVertexBuffer({context:this._context,typedArray:Zs,usage:t.BufferUsage.STATIC_DRAW}),c=t.Buffer.createIndexBuffer({context:this._context,typedArray:Js,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:i,componentsPerAttribute:2}],indexBuffer:c})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let i=0;i<n.length;i+=1)n[i]=i;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:i,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:t.Pass.OPAQUE})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=dt(Math.floor(Se(this.visibleLayerMin,0)),0,this._layerCount-1),n=dt(Math.floor(Se(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const i=Math.max(1e-4,Se(this.maxWindSpeed,qe.maxWindSpeed)),c=dt(Se(t,0)/i,0,1),r=dt(Se(n,i)/i,0,1);return{min:Math.min(c,r),max:Math.max(c,r)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>Se(this.speedFactor,qe.speedFactor),maxWindSpeed:()=>Math.max(1e-4,Se(this.maxWindSpeed,qe.maxWindSpeed)),decaySpeed:()=>dt(Se(this.decaySpeed,qe.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>Se(this.arrowLength,qe.arrowLength),trailLength:()=>Se(this.trailLength,qe.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>dt(Se(this.alphaFactor,qe.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function al({getViewer:e,getCesium:t,message:n}){const i=Y(null),c=Y({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function r(){var T,P;const S=e==null?void 0:e();if(i.value){try{(P=(T=S==null?void 0:S.scene)==null?void 0:T.primitives)==null||P.remove(i.value)}catch{}i.value.destroy(),i.value=null}}function s(){const S=e==null?void 0:e(),T=t==null?void 0:t();if(!S||!T){n.error("Cesium 尚未初始化");return}r();const P=rl(T);i.value=new il(S,{maxWindSpeed:20,cesium:T,speedFactor:c.value.speedFactor,arrowLength:c.value.arrowLength,trailLength:c.value.trailLength,alphaFactor:c.value.alphaFactor}),i.value.loadData(P),S.scene.primitives.add(i.value),i.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function b(){i.value&&(i.value.speedFactor=c.value.speedFactor,i.value.arrowLength=c.value.arrowLength,i.value.trailLength=c.value.trailLength,i.value.alphaFactor=c.value.alphaFactor)}function v(S,T){return S in c.value?(c.value={...c.value,[S]:Number(T)},b(),!0):!1}return{wind2D:i,windParams:c,clearWind2D:r,loadSimulatedWind:s,setWindParam:v}}function rl(e){const c=[0,2e3,5e3,1e4,15e3],r=[3e4,3e4,25e3,25e3,2e4],s=[30,30,25,25,20],b=s.reduce((f,_)=>f+_*_,0),v=new Array(b),S=new Array(b),T=new Array(b);let P=0;for(let f=0;f<5;f++){const _=s[f],M=s[f],w=r[f];for(let C=0;C<M;C++)for(let F=0;F<_;F++){const o=P+C*_+F,h=(F-_/2)*(w/111320),p=(C-M/2)*(w/111320/Math.cos(e.Math.toRadians(35))),l=Math.atan2(p,h)+Math.PI/2+.2*Math.sin(F*.5)*Math.cos(C*.5);S[o]=e.Math.toDegrees(l)%360;const d=Math.sqrt(h*h+p*p),u=Math.max(0,1-d/15);v[o]=(5+f*2)*u+2*Math.random(),T[o]=.5*Math.sin(F*.3)*Math.cos(C*.3)}P+=_*M}return{longitude:104,latitude:35,altitude:c,sizeMesh:r,count:s,hspeed:v,hdir:S,vspeed:T}}const Dt=Object.freeze({LOADING:"loading",READY:"ready",ERROR:"error"});function sn(e){if(!e)return null;if(Array.isArray(e)){const[i,c,r=0]=e;return typeof i!="number"||typeof c!="number"?null:{lng:i,lat:c,height:r}}const t=e.longitude??e.lng,n=e.latitude??e.lat;return typeof t!="number"||typeof n!="number"?null:{lng:t,lat:n,height:e.height??0}}function ii(e,t){const n=sn(t.coordinates);if(!n)return null;const i=e.Cartesian3.fromDegrees(n.lng,n.lat,n.height),c=new e.HeadingPitchRoll(e.Math.toRadians(t.heading??0),e.Math.toRadians(t.pitch??0),e.Math.toRadians(t.roll??0)),r=e.Transforms.headingPitchRollToFixedFrame(i,c),s=t.scale;if(s!==void 0&&s!==1){let b=1,v=1,S=1;typeof s=="number"?b=v=S=s:typeof s=="object"&&(b=s.x??1,v=s.y??1,S=s.z??1);const T=e.Matrix4.fromScale(new e.Cartesian3(b,v,S));e.Matrix4.multiply(r,T,r)}return r}function ol({getViewer:e,getCesium:t,message:n}){const i=new Map;let c=0;const r=Y([]),s=Ae(()=>r.value.filter(m=>m.state===Dt.LOADING).length),b=Ae(()=>r.value.filter(m=>m.state===Dt.READY).length),v=Ae(()=>r.value.length);function S(){r.value=Array.from(i.values()).map(m=>({...m.entry}))}function T(){do c++;while(i.has(`model-${c}`));return`model-${c}`}async function P(m){var D,A,k;const l=e==null?void 0:e(),d=t==null?void 0:t();if(!l||!d)return(D=n==null?void 0:n.error)==null||D.call(n,"Cesium 尚未初始化，无法加载模型"),null;const a=m.id??T();if(i.has(a))return(A=n==null?void 0:n.error)==null||A.call(n,`模型 "${a}" 已存在，请使用其他 ID`),null;const u=sn(m.coordinates),g={id:a,name:m.name??a,url:m.url,coordinates:u,heading:m.heading??0,pitch:m.pitch??0,roll:m.roll??0,scale:m.scale??1,state:Dt.LOADING,metadata:m.metadata??{},addedAt:Date.now(),errorMessage:null};i.set(a,{primitive:null,objectUrl:null,entry:g}),S();try{const U=ii(d,{coordinates:g.coordinates,heading:g.heading,pitch:g.pitch,roll:g.roll,scale:g.scale});if(!U)throw new Error("坐标无效，无法计算模型矩阵");const E={url:m.url,modelMatrix:U,minimumPixelSize:m.minimumPixelSize??64,maximumScale:2e4,scene:l.scene};let G;if(typeof d.Model.fromGltfAsync=="function")G=await d.Model.fromGltfAsync(E);else if(typeof d.Model.fromGltf=="function")G=d.Model.fromGltf(E);else throw new Error("当前 Cesium 版本不支持 Model API");l.scene.primitives.add(G);const te=i.get(a);te.primitive=G;const J=()=>{const le=i.get(a);if(le&&(le.entry.state=Dt.READY,S(),m.autoPlayAnimation!==!1))try{G.activeAnimations.addAll({loop:d.ModelAnimationLoop.REPEAT})}catch{}};return G.readyEvent?G.readyEvent.addEventListener(J):J(),G.errorEvent&&G.errorEvent.addEventListener(le=>{const ge=i.get(a);ge&&(ge.entry.state=Dt.ERROR,ge.entry.errorMessage=(le==null?void 0:le.message)??"模型加载异常",S())}),S(),{...g}}catch(U){const E=i.get(a);return E!=null&&E.objectUrl&&URL.revokeObjectURL(E.objectUrl),i.delete(a),S(),(k=n==null?void 0:n.error)==null||k.call(n,`模型加载失败: ${U.message}`),null}}async function f(m,l={}){const d=URL.createObjectURL(m),a=await P({...l,url:d,name:l.name??m.name.replace(/\.(glb|gltf)$/i,"")});if(a){const u=i.get(a.id);u&&(u.objectUrl=d)}else URL.revokeObjectURL(d);return a}function _(m){var a;const l=e==null?void 0:e(),d=i.get(m);if(d){if(d.primitive&&l)try{l.scene.primitives.remove(d.primitive)}catch{}if((a=d.primitive)!=null&&a.destroy)try{d.primitive.destroy()}catch{}d.objectUrl&&URL.revokeObjectURL(d.objectUrl),i.delete(m),S()}}function M(m,l={}){const d=t==null?void 0:t(),a=i.get(m);if(!a||!d)return!1;const u=a.entry;if(l.coordinates&&(u.coordinates=sn(l.coordinates)),l.heading!==void 0&&(u.heading=l.heading),l.pitch!==void 0&&(u.pitch=l.pitch),l.roll!==void 0&&(u.roll=l.roll),l.scale!==void 0&&(u.scale=l.scale),l.name&&(u.name=l.name),l.metadata&&(u.metadata={...u.metadata,...l.metadata}),a.primitive){const g=ii(d,{coordinates:u.coordinates,heading:u.heading,pitch:u.pitch,roll:u.roll,scale:u.scale});g&&(a.primitive.modelMatrix=g)}return S(),!0}function w(m,l={}){const d=e==null?void 0:e(),a=t==null?void 0:t(),u=i.get(m);if(!u||!d||!a)return;const g=u.entry.coordinates;if(!g)return;const{range:D=200,heading:A=0,pitch:k=-30,duration:U=2}=l,E=g.height+D*.3;d.camera.flyTo({destination:a.Cartesian3.fromDegrees(g.lng,g.lat,E),orientation:{heading:a.Math.toRadians(A),pitch:a.Math.toRadians(k),roll:0},duration:U})}function C(m,l,d={}){const a=i.get(m),u=t==null?void 0:t();if(!(!(a!=null&&a.primitive)||!u))try{const g=a.primitive,D=d.loop!==!1?u.ModelAnimationLoop.REPEAT:u.ModelAnimationLoop.NONE;if(l){let A=!1;const k=g.activeAnimations;for(let U=0;U<k.length;U++)if(k.get(U).name===l){k.get(U).playing=!0,A=!0;break}A||g.activeAnimations.add({name:l,loop:D,speedup:d.speedup??1})}else g.activeAnimations.addAll({loop:D,speedup:d.speedup??1})}catch{}}function F(m){const l=i.get(m);if(l!=null&&l.primitive)try{const d=l.primitive.activeAnimations;for(let a=0;a<d.length;a++)d.get(a).playing=!1}catch{}}function o(m){const l=i.get(m);return l?{...l.entry}:null}function h(m){var l;return((l=i.get(m))==null?void 0:l.primitive)??null}function p(){const m=Array.from(i.keys());for(const l of m)_(l);i.clear(),S()}return{models:r,loadingCount:s,readyCount:b,modelCount:v,addModel:P,addModelFromFile:f,removeModel:_,updateModel:M,flyToModel:w,playAnimation:C,stopAnimation:F,getModel:o,getModelPrimitive:h,dispose:p}}const an=Object.freeze({linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2});class ai{constructor(t={}){this.stiffness=t.stiffness??120,this.damping=t.damping??20,this.mass=t.mass??1,this.threshold=t.threshold??.01,this._current=0,this._target=0,this._velocity=0,this._active=!1}get current(){return this._current}get target(){return this._target}get active(){return this._active}setTarget(t){this._target=t,this._active=!0}setCurrent(t){this._current=t,this._velocity=0}update(t){if(!this._active)return this._current;const n=this._current-this._target,i=-this.stiffness*n,c=-this.damping*this._velocity,r=(i+c)/this.mass;return this._velocity+=r*t,this._current+=this._velocity*t,Math.abs(n)<this.threshold&&Math.abs(this._velocity)<this.threshold&&(this._current=this._target,this._velocity=0,this._active=!1),this._current}reset(){this._current=0,this._target=0,this._velocity=0,this._active=!1}}const yt=Object.freeze({IDLE:"idle",FLYING:"flying",CANCELLED:"cancelled"});function sl({getViewer:e,getCesium:t}){let n=0,i=null,c=null;const r=Y(yt.IDLE),s=Ae(()=>i);function b(){c!==null&&(cancelAnimationFrame(c),c=null),i=null,r.value=yt.CANCELLED}function v(o){const h=e==null?void 0:e(),p=t==null?void 0:t();if(!h||!p)return null;o.cancelPrevious!==!1&&b();const m=C(p,o.destination);if(!m)return null;const l=h.camera,d=l.heading,a=l.pitch,u=l.roll,g=l.positionWC.clone(),D=o.orientation??{},A=p.Math.toRadians(D.heading??p.Math.toDegrees(d)),k=p.Math.toRadians(D.pitch??p.Math.toDegrees(a)),U=p.Math.toRadians(D.roll??p.Math.toDegrees(u));let E=m.clone();if(o.maximumHeight!==void 0){const Ce=p.Cartographic.fromCartesian(m);Ce.height>o.maximumHeight&&(E=p.Cartesian3.fromRadians(Ce.longitude,Ce.latitude,o.maximumHeight))}const G=o.easing??"easeInOutCubic",te=an[G]??an.easeInOutCubic,J=o.duration??2.5,le=++n;i=le,r.value=yt.FLYING;let ge=null;function ue(Ce){var we,Ee;if(i!==le)return;ge===null&&(ge=Ce);const Oe=(Ce-ge)/1e3,Le=Math.min(Oe/J,1),W=te(Le),$=p.Cartesian3.lerp(g,E,W,new p.Cartesian3),O=F(d,A,W),de=a+(k-a)*W,Ie=u+(U-u)*W;l.setView({destination:$,orientation:{heading:O,pitch:de,roll:Ie}}),(we=o.onTick)==null||we.call(o,Le,$),Le<1?c=requestAnimationFrame(ue):(c=null,i===le&&(i=null,r.value=yt.IDLE,(Ee=o.onComplete)==null||Ee.call(o)))}return c=requestAnimationFrame(ue),le}function S(o,h,p=1e3,m={}){return v({...m,destination:{longitude:o,latitude:h,height:p}})}function T(o,h,p={}){const m=e==null?void 0:e(),l=t==null?void 0:t();if(!m||!l)return null;const d=l.Cartesian3.fromDegrees(o.longitude,o.latitude,o.height),a=l.Cartesian3.fromDegrees(h.longitude,h.latitude,h.height),u=l.Cartesian3.subtract(a,d,new l.Cartesian3);l.Cartesian3.normalize(u,u);const g=Math.atan2(u.x,u.y),D=Math.asin(u.z);return v({...p,destination:o,orientation:{heading:l.Math.toDegrees(g),pitch:l.Math.toDegrees(D),roll:0}})}function P(o,h={}){const p=e==null?void 0:e(),m=t==null?void 0:t();if(!p||!m)return null;const l=new m.Rectangle.fromDegrees(o.west,o.south,o.east,o.north),d=m.Rectangle.center(l),u=m.Math.toDegrees(l.east-l.west)*.8;return v({...h,destination:{longitude:m.Math.toDegrees(d.longitude),latitude:m.Math.toDegrees(d.latitude),height:Math.max(u*111e3,1e3)},orientation:{heading:0,pitch:-45,roll:0}})}function f(o){const h=e==null?void 0:e(),p=t==null?void 0:t();if(!h||!p)return null;b();const m=new ai(o.spring),l=p.Cartographic.fromCartesian(h.camera.positionWC);m.setCurrent(l.height),m.setTarget(o.targetHeight);const d=++n;i=d,r.value=yt.FLYING;let a=null;function u(g){var U;if(i!==d)return;if(a===null){a=g;return}const D=(g-a)/1e3;a=g;const A=m.update(D),k=p.Cartesian3.fromRadians(l.longitude,l.latitude,A);h.camera.setView({destination:k,orientation:{heading:h.camera.heading,pitch:h.camera.pitch,roll:h.camera.roll}}),m.active?c=requestAnimationFrame(u):(c=null,i===d&&(i=null,r.value=yt.IDLE,(U=o.onComplete)==null||U.call(o)))}return c=requestAnimationFrame(u),d}function _(){const o=e==null?void 0:e(),h=t==null?void 0:t();if(!o||!h)return null;const p=h.Cartographic.fromCartesian(o.camera.positionWC);return{longitude:h.Math.toDegrees(p.longitude),latitude:h.Math.toDegrees(p.latitude),height:p.height,heading:h.Math.toDegrees(o.camera.heading),pitch:h.Math.toDegrees(o.camera.pitch),roll:h.Math.toDegrees(o.camera.roll)}}function M(o=6){const h=_();if(!h)return"--";const p=h.longitude>=0?"E":"W",m=h.latitude>=0?"N":"S";return`${Math.abs(h.longitude).toFixed(o)}°${p}, ${Math.abs(h.latitude).toFixed(o)}°${m}, ${h.height.toFixed(1)}m`}function w(){b()}function C(o,h){if(!h)return null;if(h instanceof o.Cartesian3)return h;if(Array.isArray(h)){const[l,d,a=0]=h;return o.Cartesian3.fromDegrees(l,d,a)}const p=h.longitude??h.lng,m=h.latitude??h.lat;return typeof p=="number"&&typeof m=="number"?o.Cartesian3.fromDegrees(p,m,h.height??0):null}function F(o,h,p){let m=h-o;for(;m>Math.PI;)m-=2*Math.PI;for(;m<-Math.PI;)m+=2*Math.PI;return o+m*p}return{flightState:r,currentFlightId:s,enhancedFlyTo:v,cancelFlight:b,flyToPosition:S,flyToAndLookAt:T,flyToRectangle:P,springToHeight:f,SpringController:ai,getCameraState:_,getFormattedPosition:M,cleanup:w,EasingFunctions:an}}function Lt(e,t){return{longitude:e.Math.toDegrees(t.longitude),latitude:e.Math.toDegrees(t.latitude),height:t.height}}function ri(e,t){if(!t)return null;if(t instanceof e.Cartographic)return t;if(Array.isArray(t)){const[c,r,s=0]=t;return e.Cartographic.fromDegrees(c,r,s)}const n=t.longitude??t.lng,i=t.latitude??t.lat;return typeof n=="number"&&typeof i=="number"?e.Cartographic.fromDegrees(n,i,t.height??0):null}class ll{constructor(t,n){this.data=t,this.timestamp=n}isExpired(t){return Date.now()-this.timestamp>t}}function cl({getViewer:e,getCesium:t}){const n=new Map,i=300*1e3,c=5,r=Y(!1),s=Y(0);function b(F,o){return`${F.toFixed(c)},${o.toFixed(c)}`}function v(F,o){const h=b(F,o),p=n.get(h);return p&&!p.isExpired(i)?{...p.data}:(p&&n.delete(h),null)}function S(F){const o=b(F.longitude,F.latitude);n.set(o,new ll({...F},Date.now()))}function T(){n.clear()}function P(F){const o=e==null?void 0:e(),h=t==null?void 0:t();if(!o||!h||!F)return null;const{x:p,y:m}=F,l=o.camera.getPickRay(new h.Cartesian2(p,m));if(!l)return null;const d=o.scene.pickPositionSupported?o.scene.pickPosition(new h.Cartesian2(p,m)):o.scene.globe.pick(l,o.scene);if(!d){const u=o.scene.globe.ellipsoid,g=o.scene.camera.pickEllipsoid(new h.Cartesian2(p,m),u);if(!g)return null;const D=h.Cartographic.fromCartesian(g);return Lt(h,D)}const a=h.Cartographic.fromCartesian(d);return Lt(h,a)}async function f(F,o={}){const{maxRetries:h=3,retryDelay:p=200}=o;for(let m=0;m<h;m++){const l=P(F);if(l)return l;m<h-1&&await new Promise(d=>setTimeout(d,p))}return null}function _(F,o={}){const h=e==null?void 0:e(),p=t==null?void 0:t();if(!h||!p)return null;const m=ri(p,F);if(!m)return null;const l=p.Math.toDegrees(m.longitude),d=p.Math.toDegrees(m.latitude);if(o.useCache!==!1){const a=v(l,d);if(a)return a}try{const a=o.terrainDetailLevel??0,u=[m],g=a===0?p.sampleTerrain(h.terrainProvider,0,u):p.sampleTerrainMostDetailed(h.terrainProvider,u);if(g&&g.length>0){const D=Lt(p,g[0]);return S(D),D}}catch{}return null}async function M(F,o={}){const h=e==null?void 0:e(),p=t==null?void 0:t();if(!h||!p||!(F!=null&&F.length))return[];r.value=!0,s.value=0;try{const m=[],l=[],d=[];for(let a=0;a<F.length;a++){const u=ri(p,F[a]);if(!u){m.push(null);continue}const g=p.Math.toDegrees(u.longitude),D=p.Math.toDegrees(u.latitude);if(o.useCache!==!1&&!o.skipCached){const A=v(g,D);if(A){m.push(A);continue}}m.push(null),l.push(u),d.push(a)}if(l.length===0)return s.value=1,m;try{const a=h.terrainProvider,u=a._bottomLevel?Math.max(0,a._bottomLevel-1):Math.min(a.maximumLevel??12,12),g=await p.sampleTerrain(a,u,l);for(let D=0;D<g.length;D++){const A=Lt(p,g[D]);m[d[D]]=A,S(A),o.onProgress&&o.onProgress(D+1,l.length),s.value=(D+1)/l.length}}catch{for(let u=0;u<l.length;u++){try{const g=l[u],D=p.sampleTerrain(h.terrainProvider,17,[g]),A=D instanceof Promise?await D:D;if((A==null?void 0:A.length)>0){const k=Lt(p,A[0]);m[d[u]]=k,S(k)}}catch{}o.onProgress&&o.onProgress(u+1,l.length),s.value=(u+1)/l.length}}return m}finally{r.value=!1}}async function w(F,o={}){if(!(t==null?void 0:t()))return null;const{west:p,south:m,east:l,north:d}=F,a=Math.max(2,Math.ceil(Math.sqrt(o.sampleCount??9))),u=[];for(let E=0;E<a;E++)for(let G=0;G<a;G++){const te=p+(l-p)*(G/(a-1)),J=m+(d-m)*(E/(a-1));u.push([te,J])}const D=(await M(u,{useCache:!0})).filter(E=>E!==null).map(E=>E.height);if(D.length===0)return null;const A=Math.min(...D),k=Math.max(...D),U=D.reduce((E,G)=>E+G,0)/D.length;return{min:A,max:k,avg:U}}function C(){T(),r.value=!1,s.value=0}return{isSampling:r,samplingProgress:s,pickCartographic:P,pickCartographicWithRetry:f,sampleHeight:_,sampleHeightMostDetailed:M,queryHeightRange:w,clearCache:T,cleanup:C}}const ul={url:"./glb/player/UAL1_Standard.glb",scale:.01,idleAnim:"Idle_Loop",walkAnim:"Walk_Loop",runAnim:"Sprint_Loop",jumpAnim:["Jump_Start","Jump_Loop","Jump_Land"],flyAnim:"fly",flyIdleAnim:"flyIdle",flyHoverForwardAnim:"flyHoverForward",flyHoverBackAnim:"flyHoverBack",flyHoverLeftAnim:"flyHoverLeft",flyHoverRightAnim:"flyHoverRight",flyHoverUpAnim:"flyHoverUp",flyHoverDownAnim:"flyHoverDown",rotateY:-Math.PI/2,facingOffset:Math.PI/2},dl={gravity:-2400,jumpHeight:600,speed:300,flySpeed:55e3,acceleration:30,deceleration:30},hl={minCamDistance:100,maxCamDistance:800,camLookAtHeightRatio:.8,thirdMouseMode:1,enableZoom:!0,enableOverShoulderView:!1,isFirstPerson:!1,enableSpringCamera:!0,springCameraTime:.015},fl={forward:["KeyW","ArrowUp"],backward:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],toggleView:["KeyV"],toggleFly:["KeyF"]},ml=5;function pl(e){return e?!!(e.availability||e.requestWaterMask!==void 0||e.requestVertexNormals!==void 0):!1}function gl({getViewer:e,getCesium:t,message:n}){const i=Y(!1),c=Y(!1),r=Y(!1),s=Y(null),b=Y(0),v=Y(null);let S=null,T=null,P=null,f=null,_=null;async function M(a={}){var D,A,k,U;const u=e(),g=t();if(!u||!g){(D=n==null?void 0:n.error)==null||D.call(n,"Cesium 未初始化");return}if(i.value&&!S&&(i.value=!1,c.value=!1,r.value=!1),!i.value)try{(A=n==null?void 0:n.info)==null||A.call(n,"正在加载漫游控制器...");const{playerController:E}=await Wt(async()=>{const{playerController:ze}=await import("./index-B85W4EZr.js");return{playerController:ze}},__vite__mapDeps([16,2,3,5,8,9,10,11,12,13,7,14,15,17,18,19,20]),import.meta.url);let G=a.initPos;const te=a.spawnHeight||500;let J=0,le=!0;const ge=u.camera,ue=g.Cartographic.fromCartesian(ge.position);if(!G){let ze=te;const Ue=u.terrainProvider;if(pl(Ue)){const We=Ue,ye=We._bottomLevel?Math.max(0,We._bottomLevel-1):Math.min(We.maximumLevel??12,12);let He=null;try{He=await g.sampleTerrain(Ue,ye,[ue])}catch{}He&&He[0]&&g.defined(He[0].height)?(J=He[0].height,ze=J+te,le=!1):(ze=ue.height>0?ue.height+te:te,le=!1)}G=g.Cartesian3.fromRadians(ue.longitude,ue.latitude,ze)}const Ce=5;let Oe=a.staticCollider;const Le=.03;let W={lon:ue.longitude,lat:ue.latitude};Oe||(Oe=[{type:"terrain",rectangle:[ue.longitude-Le,ue.latitude-Le,ue.longitude+Le,ue.latitude+Le],resolution:64}]);const $={...hl},O={...ul,...dl,...a.modelConfig},de=new E;await de.init({viewer:u,initPos:G,playerModelConfig:O,staticCollider:Oe,...$,mouseSensitivity:ml,keyMap:fl,isShowMobileControls:!1}),S=de;const Ie=Le*.6;let we=!1,Ee=performance.now();T=u.scene.preUpdate.addEventListener(()=>{const ze=performance.now(),Ue=(ze-Ee)/1e3;Ee=ze,de.update(Ue);const We=de.getPosition(),ye=g.Cartographic.fromCartesian(We),He=le?Ce:J+Ce;ye.height<He&&de.reset(g.Cartesian3.fromRadians(ye.longitude,ye.latitude,He)),s.value={lng:g.Math.toDegrees(ye.longitude),lat:g.Math.toDegrees(ye.latitude),height:ye.height};const Ve=de.getVelocity();if(b.value=Math.hypot(Ve.e,Ve.n,Ve.u),!le&&!we){const Ge=Math.abs(ye.longitude-W.lon),$e=Math.abs(ye.latitude-W.lat);if(Ge>Ie||$e>Ie){we=!0;const ke=ye.longitude,N=ye.latitude;W={lon:ke,lat:N},de.physics.clearStaticColliders(),de.physics.addStaticColliders(u,{type:"terrain",rectangle:[ke-Le,N-Le,ke+Le,N+Le],resolution:64}).then(async()=>{try{const z=u.terrainProvider,Q=new g.Cartographic(ke,N,0),K=z._bottomLevel?Math.max(0,z._bottomLevel-1):Math.min(z.maximumLevel??12,12),ie=await g.sampleTerrain(z,K,[Q]);ie&&ie[0]&&g.defined(ie[0].height)&&(J=ie[0].height)}catch{}we=!1}).catch(()=>{we=!1})}}}),de.onViewChange=ze=>{c.value=ze},de.onGroundChange=()=>{r.value=de.getIsFlying()},i.value=!0,c.value=de.getIsFirstPerson(),r.value=de.getIsFlying(),(k=n==null?void 0:n.success)==null||k.call(n,"漫游模式已启动（WASD 移动 / V 切视角 / F 飞行）")}catch(E){(U=n==null?void 0:n.error)==null||U.call(n,`漫游模式启动失败: ${E.message||"未知错误"}`),w()}}function w(){if(T&&(T(),T=null),S){try{S.destroy()}catch{}S=null}const a=e();if(a){const u=a.scene.screenSpaceCameraController;u.enableRotate=!0,u.enableTranslate=!0,u.enableZoom=!0,u.enableTilt=!0,u.enableLook=!0}i.value=!1,c.value=!1,r.value=!1,s.value=null,b.value=0}function C(a){var u;i.value?(w(),(u=n==null?void 0:n.info)==null||u.call(n,"漫游模式已停止")):M(a)}function F(){S&&(S.changeView(),c.value=S.getIsFirstPerson())}function o({lng:a,lat:u,name:g}){var G;const D=e(),A=t();if(!D||!A)return;h();const k=A.Cartesian3.fromDegrees(a,u),U=D.entities.add({position:k,point:{pixelSize:10,color:A.Color.CYAN.withAlpha(.8)},name:g||"导航目标"});D.selectedEntity=U,f=D.selectedEntityChanged.addEventListener(te=>{var J;(J=v.value)!=null&&J._entity&&te!==v.value._entity&&Promise.resolve().then(()=>{var le;(le=v.value)!=null&&le._entity&&(D.selectedEntity=v.value._entity)})}),v.value={lng:a,lat:u,name:g||"导航目标",bearing:0,distance:0,_entity:U};const E=A.Cartesian3.fromDegrees(a,u);_=D.scene.preRender.addEventListener(()=>{if(!v.value)return;const te=D.camera.position,J=A.Cartographic.fromCartesian(te),le=vl(A.Math.toDegrees(J.longitude),A.Math.toDegrees(J.latitude),a,u),ge=A.Math.toDegrees(D.camera.heading);v.value.bearing=(le-ge+360)%360,v.value.distance=A.Cartesian3.distance(te,E);const ue=v.value._entity;ue&&D.selectedEntity!==ue&&(D.selectedEntity=ue)}),(G=n==null?void 0:n.info)==null||G.call(n,`导航目标已设置：${g||"地图选点"}`)}function h(){var u;const a=e();if(_&&(_(),_=null),f&&(f(),f=null),a&&((u=v.value)!=null&&u._entity)){try{a.entities.remove(v.value._entity)}catch{}a.selectedEntity=void 0}v.value=null}function p(){P&&P()}function m(a){P=a}function l(){var D;const a=e(),u=t();if(!a||!u)return;(D=n==null?void 0:n.info)==null||D.call(n,"点击地图选择导航目标");const g=new u.ScreenSpaceEventHandler(a.scene.canvas);g.setInputAction(A=>{var E;const k=a.scene.pick(A.position);if(u.defined(k)&&k.id&&k.id.position){const G=a.clock.currentTime,te=k.id.position.getValue(G);if(te){const J=u.Cartographic.fromCartesian(te);if(J){a.selectedEntity=k.id,v.value={lng:u.Math.toDegrees(J.longitude),lat:u.Math.toDegrees(J.latitude),name:k.id.name||"数据要素",bearing:0,distance:0,_entity:k.id},(E=n==null?void 0:n.info)==null||E.call(n,`导航目标已设置：${k.id.name||"数据要素"}`),g.destroy();return}}}const U=a.scene.pickPosition(A.position)||a.scene.globe.pick(a.camera.getPickRay(A.position),a.scene);if(U){const G=u.Cartographic.fromCartesian(U);o({lng:u.Math.toDegrees(G.longitude),lat:u.Math.toDegrees(G.latitude),name:"地图选点"})}g.destroy()},u.ScreenSpaceEventType.LEFT_CLICK)}function d(){return S}return{isActive:i,isFirstPerson:c,isFlying:r,playerPosition:s,playerSpeed:b,navTarget:v,startPlayer:M,stopPlayer:w,togglePlayer:C,changeView:F,getPlayerInstance:d,setNavTarget:o,clearNavTarget:h,startNavPick:l,openNavDialog:p,setOpenNavDialogHandler:m}}function vl(e,t,n,i){const c=S=>S*Math.PI/180,r=S=>S*180/Math.PI,s=c(n-e),b=Math.sin(s)*Math.cos(c(i)),v=Math.cos(c(t))*Math.sin(c(i))-Math.sin(c(t))*Math.cos(c(i))*Math.cos(s);return(r(Math.atan2(b,v))+360)%360}const yl={key:0,class:"player-guide"},bl={class:"guide-pill"},xl={class:"pill-label"},Sl={key:0,class:"pill-fly"},_l={__name:"PlayerGuidePanel",props:{visible:{type:Boolean,default:!1},isFirstPerson:{type:Boolean,default:!1},isFlying:{type:Boolean,default:!1}},emits:["close"],setup(e){return(t,n)=>(ee(),Ye(un,{name:"guide-slide"},{default:cn(()=>[e.visible?(ee(),ce("div",yl,[x("div",bl,[x("span",{class:je(["pill-dot",{fp:e.isFirstPerson}])},null,2),x("span",xl,be(e.isFirstPerson?"第一人称":"第三人称"),1),e.isFlying?(ee(),ce("span",Sl,"✈")):ve("",!0),x("button",{class:"pill-close",title:"关闭提示",onClick:n[0]||(n[0]=i=>t.$emit("close"))},"✕")]),n[1]||(n[1]=x("div",{class:"guide-keys"},[x("span",{class:"key-group"},[x("kbd",null,"W"),x("kbd",null,"A"),x("kbd",null,"S"),x("kbd",null,"D"),x("em",null,"移动")]),x("span",{class:"key-sep"}),x("span",{class:"key-group"},[x("kbd",null,"⇧"),x("em",null,"跑"),x("kbd",null,"␣"),x("em",null,"跳")]),x("span",{class:"key-sep"}),x("span",{class:"key-group"},[x("kbd",null,"V"),x("em",null,"视角"),x("kbd",null,"F"),x("em",null,"飞行")]),x("span",{class:"key-sep"}),x("span",{class:"key-group"},[x("span",{class:"key-mouse"},"🖱"),x("em",null,"旋转")])],-1))])):ve("",!0)]),_:1}))}},wl=nt(_l,[["__scopeId","data-v-6190d367"]]),Tl={class:"hud-info-panel"},Ml={class:"nav-target-name"},Dl={class:"nav-name"},Ll={class:"nav-distance-wrapper"},Fl={class:"nav-distance"},Pl={class:"hud-compass-panel"},Al={class:"compass-dial"},Cl=10,El={__name:"NavGuideHUD",props:{navTarget:{type:Object,default:null}},setup(e){const t=e,n=Ae(()=>{var r;return((r=t.navTarget)==null?void 0:r.distance)!=null&&t.navTarget.distance<Cl}),i=Ae(()=>{var r;return((r=t.navTarget)==null?void 0:r.bearing)??0});function c(r){return r==null?"0.0 m":r<1e3?`${Math.round(r)} m`:`${(r/1e3).toFixed(2)} km`}return(r,s)=>(ee(),Ye(un,{name:"nav-guide-fade"},{default:cn(()=>[e.navTarget?(ee(),ce("div",{key:0,class:je(["nav-guide-hud",{arrived:n.value}])},[s[6]||(s[6]=x("div",{class:"hud-bg-glow"},null,-1)),x("div",Tl,[s[1]||(s[1]=x("div",{class:"hud-tag"},[x("span",{class:"tag-dot"}),x("span",{class:"tag-text"},"NAV_TRACKING")],-1)),x("div",Ml,[x("span",Dl,be(e.navTarget.name),1)]),x("div",Ll,[s[0]||(s[0]=x("span",{class:"dist-label"},"DIST //",-1)),x("span",Fl,be(n.value?"ARRIVED":c(e.navTarget.distance)),1)])]),x("div",Pl,[x("div",Al,[s[3]||(s[3]=x("div",{class:"dial-scale"},null,-1)),s[4]||(s[4]=x("div",{class:"dial-scale rotate-45"},null,-1)),x("div",{class:"compass-arrow-container",style:yi({transform:`rotate(${i.value}deg)`})},[...s[2]||(s[2]=[x("span",{class:"hud-pointer"},null,-1)])],4),s[5]||(s[5]=x("div",{class:"compass-center"},[x("span",{class:"center-core"})],-1))])])],2)):ve("",!0)]),_:1}))}},Rl=nt(El,[["__scopeId","data-v-1e2288c0"]]),Il={class:"nav-dialog"},kl={class:"nav-dialog-head futuristic-hud"},zl={class:"head-right-decor"},Nl={class:"nav-dialog-body"},Ol={__name:"NavTargetPicker",props:{visible:{type:Boolean,default:!1}},emits:["close","select"],setup(e,{emit:t}){const n=t;function i(c){n("select",c),n("close")}return(c,r)=>(ee(),Ye(un,{name:"nav-dialog-fade"},{default:cn(()=>[e.visible?(ee(),ce("div",{key:0,class:"nav-dialog-overlay",onClick:r[4]||(r[4]=gt(s=>c.$emit("close"),["self"]))},[x("div",Il,[r[12]||(r[12]=x("div",{class:"border-corner top-left"},null,-1)),r[13]||(r[13]=x("div",{class:"border-corner top-right"},null,-1)),r[14]||(r[14]=x("div",{class:"border-corner bottom-left"},null,-1)),r[15]||(r[15]=x("div",{class:"border-corner bottom-right"},null,-1)),x("div",kl,[r[7]||(r[7]=x("div",{class:"hud-scan-line"},null,-1)),r[8]||(r[8]=x("div",{class:"title-wrapper"},[x("div",{class:"status-matrix-v2"},[x("div",{class:"matrix-row"},[x("span",{class:"matrix-dot activeanimate-flicker"}),x("span",{class:"matrix-dot active"})]),x("div",{class:"matrix-row"},[x("span",{class:"matrix-dot"}),x("span",{class:"matrix-dot active"})])]),x("div",{class:"title-text-group"},[x("span",{class:"nav-dialog-title"},"设置导航目标"),x("span",{class:"title-sub"},"NAV.TARGET_SET // MODE:漫游")])],-1)),x("div",zl,[r[6]||(r[6]=x("div",{class:"decor-geometry"},[x("span",{class:"geo-line"}),x("span",{class:"geo-angle"})],-1)),x("button",{class:"nav-dialog-close v2",title:"关闭",onClick:r[0]||(r[0]=s=>c.$emit("close"))},[...r[5]||(r[5]=[x("span",{class:"close-icon-v2"},"×",-1)])])])]),x("div",Nl,[x("button",{class:"nav-option",onClick:r[1]||(r[1]=s=>i("search"))},[...r[9]||(r[9]=[x("div",{class:"nav-option-icon"},[x("span",null,"🔍")],-1),x("div",{class:"nav-option-text"},[x("span",{class:"nav-option-label"},"搜索地点"),x("span",{class:"nav-option-desc"},"搜索 POI 兴趣点并设为漫游目标")],-1),x("span",{class:"nav-option-arrow"},null,-1)])]),x("button",{class:"nav-option",onClick:r[2]||(r[2]=s=>i("data"))},[...r[10]||(r[10]=[x("div",{class:"nav-option-icon"},[x("span",null,"📁")],-1),x("div",{class:"nav-option-text"},[x("span",{class:"nav-option-label"},"选择数据要素"),x("span",{class:"nav-option-desc"},"从已载入的 GIS 图层中选取要素点")],-1),x("span",{class:"nav-option-arrow"},null,-1)])]),x("button",{class:"nav-option",onClick:r[3]||(r[3]=s=>i("pick"))},[...r[11]||(r[11]=[x("div",{class:"nav-option-icon"},[x("span",null,"📍")],-1),x("div",{class:"nav-option-text"},[x("span",{class:"nav-option-label"},"地图点选"),x("span",{class:"nav-option-desc"},"在三维场景中交互单点击落点")],-1),x("span",{class:"nav-option-arrow"},null,-1)])])])])])):ve("",!0)]),_:1}))}},Hl=nt(Ol,[["__scopeId","data-v-1846a693"]]),Bl={key:5,class:"drag-overlay"},Ul={class:"map-controls-group"},Wl={class:"mouse-position-content"},Gl={__name:"CesiumContainer",emits:["view-sync"],setup(e,{expose:t,emit:n}){let i=null,c=null,r=!1;const s=dn(),b=n,v=Y(!0),S=Y(!1),T=Y(!1),P=Y(null),f=Y(wi()),_=()=>c,M=()=>i||window.Cesium,w=()=>f.value.tiandituTk,C=()=>f.value.cesiumIonToken,F=hs({getViewer:_,getCesium:M,message:s,backendBaseUrl:_i,tiandituToken:w,cesiumIonToken:C}),{activeBasemap:o,activeTerrain:h,customXyzBasemapUrl:p,basemapOptions:m,terrainOptions:l,overlayOptions:d,createImageryProviderViewModels:a,createTerrainProviderViewModels:u,getSelectedImageryProviderViewModel:g,getSelectedTerrainProviderViewModel:D,bindLayerPickerStateSync:A,addBaseImageryLayers:k,initCustomTerrain:U,handleOverlayToggle:E,handleCustomBasemapSubmit:G,cleanupLayers:te}=F;Fe(o,(B,V)=>{!B||B===V||W(B)});const{coordinateDisplay:J,setupInteractions:le,cleanupInteractions:ge}=is({getViewer:_,getCesium:M}),{installCreditHider:ue,cleanupCreditHider:Ce}=ns({getViewer:_}),{restoreCameraFromUrl:Oe,restoreBasemapFromUrl:Le,syncBasemapToUrl:W,bindCameraViewSync:$,cleanupCameraViewSync:O}=js({getViewer:_,getCesium:M,onCameraViewSync:B=>b("view-sync",B),onBasemapRestore:B=>{B&&o.value!==B&&(o.value=B)}}),de=_s({getViewer:_,getCesium:M,message:s}),{flyToHome:Ie}=de,we=al({getViewer:_,getCesium:M,message:s}),Ee=Ts({getViewer:_,getCesium:M,message:s}),ze=ol({getViewer:_,getCesium:M,message:s}),Ue=sl({getViewer:_,getCesium:M}),We=cl({getViewer:_,getCesium:M}),ye=gl({getViewer:_,getCesium:M,message:s});ye.setOpenNavDialogHandler(()=>{S.value=!0});function He(B){B==="pick"?ye.startNavPick():B==="search"?s.info("请使用顶部搜索框搜索地点，搜索结果将自动设为导航目标"):B==="data"&&(s.info("请点击已导入的数据要素，将自动设为导航目标"),ye.startNavPick())}const Ve=Ae(()=>{const B=ye.playerPosition.value;if(B){const V=B.lng.toFixed(6),oe=B.lat.toFixed(6),me=B.height.toFixed(2),De=ye.playerSpeed.value,Xe=De>.1?` | 速度: ${De.toFixed(1)} m/s`:"";return`经度: ${V}, 纬度: ${oe}, 海拔: ${me}米${Xe} (漫游)`}return J.value});Fe(()=>ye.isActive.value,B=>{B&&(v.value=!0,K.value=!1)}),t({getViewer:_,getCesium:M,modelManager:ze,cameraEnhanced:Ue,heightSampler:We,playerController:ye});const Ge=Ae(()=>Ee.loadedDataSources.value),$e=Ae(()=>Ee.pendingGltfFile.value),ke=Y(!1);function N(B){ke.value=!0,B.dataTransfer&&(B.dataTransfer.dropEffect="copy")}function z(B){const V=B==null?void 0:B.relatedTarget,oe=B==null?void 0:B.currentTarget;V instanceof Node&&oe instanceof Node&&oe.contains(V)||(ke.value=!1)}async function Q(B){var oe;if(ke.value=!1,!T.value)return;const V=(oe=B.dataTransfer)==null?void 0:oe.files;if(!(!V||V.length===0))for(const me of V)try{await Ee.loadDataFile(me)}catch{}}const{toolPanelOpen:K,advancedEffectControls:ie,fluidParams:H,baseAtmosphereParams:Z,atmosphereParams:ae,cloudParams:re,shallowWaterVisible:pe,shallowWaterParams:Ne,toolModules:Be,handleToolAction:Me,handleToolControlChange:Je,handleFluidStateChange:L,cleanupTools:I}=Ds({fluidPanelRef:P,sceneActions:de,wind:we,modelManager:ze,cameraEnhanced:Ue,heightSampler:We,playerController:ye});async function j(){r=!1,li("正在初始化 3D 场景...");try{let B=0,V=1;for(;B<V;)try{if(f.value=await Si({silent:!1,force:B>0}),V=Math.max(V,Array.isArray(f.value.tiandituTokens)?f.value.tiandituTokens.length:1,Array.isArray(f.value.cesiumIonTokens)?f.value.cesiumIonTokens.length:1,1),i=await qo({ionToken:C()}),r||!i||!document.getElementById("cesiumContainer"))return;xe(),le();const oe=k(),me=await U();if(r){ne();return}if(T.value=!0,$({initialSync:!1,getActivePresetId:()=>o.value}),Le(),oe&&me){s.success("天地图基础影像与地形加载成功。");return}const De=oe?{switched:!1}:Vt("tianditu_tk"),Xe=me?{switched:!1}:Vt("cesium_ion_token");if(!(De.switched||Xe.switched)){s.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}f.value=Xe.switched?Xe.tokens:De.tokens,ne(),B+=1,s.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(oe){const me=Vt("cesium_ion_token");if(!me.switched)throw oe;f.value=me.tokens,ne(),B+=1,s.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}s.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(B){s.error("Cesium 运行时加载失败",B),s.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{ci()}}function ne(){if(T.value=!1,O(),ge(),te(),Ce(),se&&(se(),se=null),!!c){try{c.destroy()}catch{}c=null}}let se=null;function xe(){var me;const B=typeof i.Map=="function"?i.Map:i.Viewer,V=a(),oe=u();c=new B("cesiumContainer",{baseLayerPicker:!0,geocoder:((me=i.IonGeocodeProviderType)==null?void 0:me.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:V,selectedImageryProviderViewModel:g(V),terrainProviderViewModels:oe,selectedTerrainProviderViewModel:D(oe),shouldAnimate:!0}),c.scene.debugShowFramesPerSecond=!0,c.scene.globe.terrainExaggeration=1,c.scene.globe.terrainExaggerationRelativeHeight=0,Zo(c,i),_a(c),ue(),A(),Oe({duration:0})||Ie(0);try{const{cleanup:De}=$s({viewer:c,cloudParams:re,atmosphereParams:ae});se=De}catch{}}ln(()=>{j()});async function y({files:B}){for(const V of B)try{await Ee.loadDataFile(V)}catch{}}function R({id:B}){Ee.removeDataSource(B)}function q(){Ee.clearAllDataSources()}async function X(B){try{await Ee.loadGltfWithUserCoords(B)}catch{}}function he(){Ee.cancelPendingGltf()}$t(()=>{if(r=!0,T.value=!1,O(),ge(),I(),te(),ze.dispose(),Ue.cleanup(),We.cleanup(),se&&(se(),se=null),Ce(),Ee.clearAllDataSources(),c){try{c.destroy()}catch{}c=null}}),Fe(T,B=>{B&&(Te(Z.value),Pe(ae.value))});function Te(B){var me;if(!c||!i)return;const V=c.scene,oe=V.globe;oe&&(oe.enableLighting=B.enableLighting,oe.showGroundAtmosphere=B.showGroundAtmosphere,"dynamicAtmosphereLighting"in oe&&(oe.dynamicAtmosphereLighting=B.dynamicAtmosphereLighting),"dynamicAtmosphereLightingFromSun"in oe&&(oe.dynamicAtmosphereLightingFromSun=B.dynamicAtmosphereLightingFromSun),"atmosphereLightIntensity"in oe&&(oe.atmosphereLightIntensity=B.atmosphereLightIntensity),"atmosphereHueShift"in oe&&(oe.atmosphereHueShift=B.atmosphereHueShift),"atmosphereSaturationShift"in oe&&(oe.atmosphereSaturationShift=B.atmosphereSaturationShift),"atmosphereBrightnessShift"in oe&&(oe.atmosphereBrightnessShift=B.atmosphereBrightnessShift),"lightingFadeInDistance"in oe&&(oe.lightingFadeInDistance=B.lightingFadeInDistance),"lightingFadeOutDistance"in oe&&(oe.lightingFadeOutDistance=B.lightingFadeOutDistance),"nightFadeInDistance"in oe&&(oe.nightFadeInDistance=B.nightFadeInDistance),"nightFadeOutDistance"in oe&&(oe.nightFadeOutDistance=B.nightFadeOutDistance)),V.fog&&(V.fog.enabled=B.fogEnabled,"density"in V.fog&&(V.fog.density=B.fogDensity),"minimumBrightness"in V.fog&&(V.fog.minimumBrightness=B.fogMinimumBrightness)),V.sun&&(V.sun.show=B.sunShow),V.moon&&(V.moon.show=B.moonShow),V.skyBox&&(V.skyBox.show=B.skyBoxShow),(me=V.requestRender)==null||me.call(V)}Fe(Z,B=>{Te(B)},{deep:!0});function Pe(B){var me;if(!c||!i)return;const V=c.scene,oe=V.globe;if(oe&&"enableLighting"in oe&&(oe.enableLighting=B.dayNightEnabled!==!1),V.moon&&(V.moon.show=B.moonLightEnabled!==!1),V.skyBox&&(V.skyBox.show=B.starsEnabled!==!1),oe&&"atmosphereLightIntensity"in oe){const De=Z.value.atmosphereLightIntensity??5.5,Xe=B.moonLightEnabled!==!1?(B.moonLightIntensity??.18)*8:0;oe.atmosphereLightIntensity=De+Xe}(me=V.requestRender)==null||me.call(V)}return Fe(ae,B=>{Pe(B)},{deep:!0}),(B,V)=>{var oe;return ee(),ce(st,null,[x("div",{id:"cesiumContainer",class:"cesium-container",onDragover:gt(N,["prevent"]),onDragleave:gt(z,["prevent"]),onDrop:gt(Q,["prevent"])},null,32),T.value?(ee(),Ye(pt(Oa),{key:0,headless:"","get-viewer":_,"get-cesium":M,controls:fe(ie)},null,8,["controls"])):ve("",!0),T.value?(ee(),Ye(pt(Co),{key:1,ref_key:"fluidPanelRef",ref:P,headless:"","get-viewer":_,"get-cesium":M,params:fe(H),onStateChange:fe(L)},null,40,["params","onStateChange"])):ve("",!0),T.value?(ee(),Ye(Wo,bi({key:2,visible:fe(pe)},fe(Ne)),null,16,["visible"])):ve("",!0),T.value?(ee(),Ye(no,{key:3,open:fe(K),"onUpdate:open":V[0]||(V[0]=me=>qt(K)?K.value=me:null),"active-basemap":fe(o),"onUpdate:activeBasemap":V[1]||(V[1]=me=>qt(o)?o.value=me:null),"active-terrain":fe(h),"onUpdate:activeTerrain":V[2]||(V[2]=me=>qt(h)?h.value=me:null),"basemap-options":fe(m),"terrain-options":fe(l),"overlay-options":fe(d),"custom-basemap-url":fe(p),modules:fe(Be),"loaded-data-sources":Ge.value,onModuleAction:fe(Me),onControlChange:fe(Je),onOverlayToggle:fe(E),onCustomBasemapSubmit:fe(G),onDataImport:y,onDataRemove:R,onDataClearAll:q},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):ve("",!0),Re(wl,{visible:fe(ye).isActive.value&&v.value,"is-first-person":fe(ye).isFirstPerson.value,"is-flying":fe(ye).isFlying.value,onClose:V[3]||(V[3]=me=>v.value=!1)},null,8,["visible","is-first-person","is-flying"]),fe(ye).navTarget.value?(ee(),Ye(Rl,{key:4,"nav-target":fe(ye).navTarget.value},null,8,["nav-target"])):ve("",!0),Re(Hl,{visible:S.value,onClose:V[4]||(V[4]=me=>S.value=!1),onSelect:He},null,8,["visible"]),Re(yo,{visible:!!$e.value,"file-name":((oe=$e.value)==null?void 0:oe.name)||"",onConfirm:X,onCancel:he},null,8,["visible","file-name"]),ke.value&&T.value?(ee(),ce("div",Bl,[Re(fe(rn),{size:48,"stroke-width":"1.5"}),V[6]||(V[6]=x("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),V[7]||(V[7]=x("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):ve("",!0),x("div",Ul,[x("div",Wl,be(Ve.value),1),V[9]||(V[9]=x("div",{class:"divider"},null,-1)),x("button",{class:"home-btn",title:"回到初始位置",onClick:V[5]||(V[5]=(...me)=>fe(Ie)&&fe(Ie)(...me))},[...V[8]||(V[8]=[x("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[x("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},$l=nt(Gl,[["__scopeId","data-v-b1cc9530"]]),Jl=Object.freeze(Object.defineProperty({__proto__:null,default:$l},Symbol.toStringTag,{value:"Module"}));export{Jl as C,pl as h};
