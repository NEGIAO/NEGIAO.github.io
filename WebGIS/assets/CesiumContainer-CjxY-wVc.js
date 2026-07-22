const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-DhdyNrDC.js","./vendor-libs-BH3wVxJ6.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-1NMznEfK.js","./index-DyvtUQGK.js","./vendor-vue-CFdjHPJG.js","./vendor-ol-all-gF5mNgUt.js","./vendor-axios-Bdz_Fv8M.js","./vendor-ol-all-BtPuoxOl.css","./index-DduL8x4O.css","./createCloudAtmosphere-oCF6bh0g.js","./getCesium-6L1FaWum.js","./LensFlareBloomStage-B2e7fUow.js","./index-OICPEIBl.js","./vendor-lucide-DyKGhq-J.js","./HomeView-B4N-TlrJ.js","./vectorUtils-Ds50OJUZ.js","./textDecoder-CXjJWEkX.js","./HomeView-3DEnt_RE.css"])))=>i.map(i=>d[i]);
var Sa=Object.defineProperty;var wa=(e,t,n)=>t in e?Sa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _n=(e,t,n)=>wa(e,typeof t!="symbol"?t+"":t,n);import{w as Ie,v as fa,d as ae,c as me,W as ma,r as Q,C as dn,o as $t,f as v,t as _e,a as Pe,G as tt,V as pt,g as we,q as ke,u as ge,F as lt,e as dt,n as Ke,x as Je,P as gt,I as wt,i as vt,H as Ht,z as _a,B as Ta,A as Ma,b as hn,y as fn,O as La,a5 as Fa,a4 as Vt}from"./vendor-vue-CFdjHPJG.js";import{_ as it,h as mn,a3 as pa,a4 as ga,L as Tn,F as Pt,B as Ea,f as Xt,U as va,J as Aa,K as Da,C as Mn,a7 as Ca,G as Pa,E as ka,P as Kt,a5 as Ia,H as Ra}from"./index-DyvtUQGK.js";import{_ as yt}from"./vendor-runtime-Dp1pzeXC.js";import{G as Oa}from"./vendor-lilgui-ChXhAV4w.js";import{v as Yt,w as Zt,x as Na,X as Ln,a as Jt,y as sn,z as kt,q as Fn,E as Ba,F as ya,H as En,I as An,J as Ha,K as za,s as Qt,i as Dn,u as Ua,Q as zt,V as Wa,Y as Ga,Z as $a,W as ja,g as qa,_ as It,G as Cn}from"./vendor-lucide-DyKGhq-J.js";import{C as pn,R as gn,N as ba,L as Pn,S as Va,a as Xa,b as kn,V as en,W as Ka,A as Ya,P as Za,M as Rt,c as rt,d as Ja,e as In,f as Tt,B as Qa,g as Mt,h as ei,i as ti,j as ni,G as ai,D as ii,H as ri,k as Rn,l as On,m as oi,n as si,o as li,p as ci,q as ui,r as di,s as hi,U as fi,t as mi,u as Nn,O as pi,T as gi,v as vi}from"./vendor-three-Dm5RPYnA.js";import{a as yi}from"./vendor-codec-DD0reNSo.js";import{A as vn,B as bi,E as xi,F as Bn,G as Si,H as wi,I as _i}from"./HomeView-B4N-TlrJ.js";import{d as Ti}from"./vectorUtils-Ds50OJUZ.js";const Wt=new Map;function Mi(e){const t=Wt.get(e);t&&t.abort();const n=new AbortController;return Wt.set(e,n),n}function Li(){Wt.forEach(e=>{e.abort()}),Wt.clear()}function Fi(e){const t=e.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!t)return/\{s\}/i.test(e)?{url:e,subdomains:["a","b","c"]}:{url:e,subdomains:[]};const n=t[1].charCodeAt(0),a=t[2].charCodeAt(0),l=[];for(let o=n;o<=a;o++)l.push(String.fromCharCode(o));return{url:e.replace(t[0],"{s}"),subdomains:l}}function Ei(e){return e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function Ai(e,t){let n=e;return t.tiandituTk&&(n=n.replace(/\{tiandituTk\}/g,t.tiandituTk)),t.customUrl&&(n=n.replace(/\{customUrl\}/g,t.customUrl)),n}function Di(e,t,n){if(!e||!t)return null;const l=Mi(t.id).signal,{serviceType:o}=t;let r=Ai(t.url,n);if(o==="custom"){if(!n.customUrl)return null;r=n.customUrl}if(t.nonStandardAdapter||o==="vector-tile")return null;const{subdomains:b}=Fi(r),g=Ei(r),S=t.subdomains||b,E=t.maxZoom||18;try{let R=null;if(l.aborted)return null;switch(o){case"wms":{if(typeof e.WebMapServiceImageryProvider!="function")return null;const w=t.wms;if(!(w!=null&&w.layers))return null;R=new e.WebMapServiceImageryProvider({url:g||t.url,layers:w.layers,parameters:{version:w.version||"1.1.1",srs:w.srs||"EPSG:3857",format:w.format||"image/png",styles:w.styles||"",transparent:w.transparent!==!1}});break}case"wmts":{if(typeof e.WebMapTileServiceImageryProvider!="function")return null;const w=t.wmts;if(!(w!=null&&w.layer)||!w.matrixSet)return null;R=new e.WebMapTileServiceImageryProvider({url:g||t.url,layer:w.layer,style:w.style||"default",format:w.format||"image/png",tileMatrixSetID:w.matrixSet,maximumLevel:E});break}case"osm":{typeof e.OpenStreetMapImageryProvider=="function"?R=new e.OpenStreetMapImageryProvider({maximumLevel:E}):R=new e.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:E});break}default:{if(!g||!(g.includes("{z}")||g.includes("{x}")||g.includes("{y}")||g.includes("{reverseY}")))return null;R=new e.UrlTemplateImageryProvider({url:g,subdomains:S.length>0?S:void 0,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:E,enablePickFeatures:!1});break}}if(l.aborted){if(R&&typeof R.destroy=="function")try{R.destroy()}catch{}return null}return R&&(R._descriptorId=t.id),R}catch{return null}}function Ci(e,t,n){if(!e||!Array.isArray(t))return[];const a=[];for(const l of t){const o=vn(l);if(!o)continue;const r=Di(e,o,n);r&&a.push(r)}return a}function Pi(e){var a;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(a=t.requestRender)==null||a.call(t))}function ki(e,t){var o;const n=e==null?void 0:e.scene,a=n==null?void 0:n.globe;if(!n||!a)return;Oi(n,t),Ni(n),a.enableLighting=!0,a.showGroundAtmosphere=!0,Le(a,"dynamicAtmosphereLighting",!0),Le(a,"dynamicAtmosphereLightingFromSun",!0),Le(a,"atmosphereLightIntensity",5.5),Le(a,"atmosphereHueShift",-.015),Le(a,"atmosphereSaturationShift",.08),Le(a,"atmosphereBrightnessShift",.02),Le(a,"lightingFadeInDistance",15e6),Le(a,"lightingFadeOutDistance",22e6),Le(a,"nightFadeInDistance",9e6),Le(a,"nightFadeOutDistance",16e6),Ot(t,a,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Ot(t,a,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),Le(a,"atmosphereRayleighScaleHeight",1e4),Le(a,"atmosphereMieScaleHeight",3200),Le(a,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=Hi(t));const l=n.skyAtmosphere;l&&(l.show=!0,Le(l,"perFragmentAtmosphere",!0),Le(l,"dynamicAtmosphereLighting",!0),Le(l,"dynamicAtmosphereLightingFromSun",!0),Le(l,"hueShift",-.025),Le(l,"saturationShift",.08),Le(l,"brightnessShift",.03),Le(l,"atmosphereLightIntensity",12),Ot(t,l,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Ot(t,l,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),Le(l,"atmosphereRayleighScaleHeight",1e4),Le(l,"atmosphereMieScaleHeight",3200),Le(l,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),Bi(n),(o=n.requestRender)==null||o.call(n)}function Ii(e){var l;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const a=(l=t.postProcessStages)==null?void 0:l.bloom;return{scene:ot(t,["highDynamicRange","sunBloom","light"]),fog:ot(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:ot(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:ot(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:ot(t.sun,["show"]),moon:ot(t.moon,["show"]),skyBox:ot(t.skyBox,["show"]),bloom:{props:ot(a,["enabled"]),uniforms:ot(a==null?void 0:a.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Ri(e,t,n){var r,b,g,S;if(!n)return;const a=e==null?void 0:e.scene,l=a==null?void 0:a.globe;if(!a||!l)return;st(a,n.scene,t),st(a.fog,n.fog,t),st(l,n.globe,t),st(a.sun,n.sun,t),st(a.moon,n.moon,t),st(a.skyBox,n.skyBox,t),a.skyAtmosphere&&(st(a.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(a.skyAtmosphere.show=!1));const o=(r=a.postProcessStages)==null?void 0:r.bloom;st(o,(b=n.bloom)==null?void 0:b.props,t),st(o==null?void 0:o.uniforms,(g=n.bloom)==null?void 0:g.uniforms,t),(S=a.requestRender)==null||S.call(a)}function Oi(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}Le(e.light,"intensity",2.35)}function Ni(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,Le(t,"density",12e-5),Le(t,"minimumBrightness",.035),Le(t,"screenSpaceErrorFactor",2),Le(t,"visualDensityScalar",.16))}function Bi(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(Le(t.uniforms,"contrast",128),Le(t.uniforms,"brightness",-.18),Le(t.uniforms,"delta",1),Le(t.uniforms,"sigma",2.5),Le(t.uniforms,"stepSize",4.2)))}function Hi(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function Le(e,t,n){e&&t in e&&(e[t]=n)}function Ot(e,t,n,a,l,o){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(a,l,o))}function ot(e,t){return e?t.reduce((n,a)=>(a in e&&(n[a]=zi(e[a])),n),{}):{}}function st(e,t={},n){!e||!t||Object.entries(t).forEach(([a,l])=>{a in e&&(e[a]=Ui(l,n))})}function zi(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Ui(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Wi={__name:"LilGuiControls",props:{title:{type:String,default:"Parameters"},controls:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const n=e,a=t,l=Q(null),o={},r=new Map;let b=null,g="",S=!1;Ie(()=>[n.title,n.controls],()=>{E()},{deep:!0,flush:"post",immediate:!0}),fa(()=>{m()});function E(){typeof window>"u"||S||(S=!0,ma(()=>{S=!1,R()}))}function R(){const s=l.value;if(!s)return;const f=D(n.controls);(!b||f!==g)&&(m(),w(s,f)),T()}function w(s,f){b=new Oa({container:s,autoPlace:!1,title:n.title||"Parameters",width:Math.max(260,Math.floor(s.clientWidth||320))}),b.domElement.classList.add("cesium-lil-gui"),s.replaceChildren(b.domElement),g=f;for(const L of n.controls||[]){const O=C(L);O&&r.set(L.id,O)}}function C(s){if(s.type==="info")return null;o[s.id]=i(s);let f=null;return s.type==="range"?f=b.add(o,s.id,y(s.min,0),y(s.max,1),y(s.step,.01)):s.type==="color"?f=b.addColor(o,s.id):s.type==="select"?f=b.add(o,s.id,c(s)):f=b.add(o,s.id),f.name(M(s)).onChange(L=>{const O=h(s.id)||s;O.disabled||a("change",{control:O,controlId:O.id,value:L})}),_(f,s),f}function T(){if(b){b.title(n.title||"Parameters");for(const s of n.controls||[]){const f=r.get(s.id);if(!f)continue;const L=i(s);u(o[s.id],L)||(o[s.id]=L,f.updateDisplay()),f.name(M(s)),f.disable(!!s.disabled),_(f,s)}}}function _(s,f){s.domElement.title=f.tooltip||"",s.domElement.dataset.controlId=f.id||"",s.domElement.dataset.controlType=f.type||""}function D(s=[]){return JSON.stringify(s.map(f=>({id:f.id,type:f.type,min:f.min,max:f.max,step:f.step,options:(f.options||[]).map(L=>({label:L.label,value:L.value}))})))}function M(s){return s.displayValue?`${s.label||s.id} (${s.displayValue})`:s.label||s.id}function i(s){var f,L;return s.type==="range"?y(s.value,y(s.min,0)):s.type==="toggle"?!!s.value:s.type==="select"?s.value??((L=(f=s.options)==null?void 0:f[0])==null?void 0:L.value)??"":s.type==="color"?typeof s.value=="string"&&s.value?s.value:"#ffffff":s.value}function c(s){const f={};for(const L of s.options||[])f[L.label||L.value]=L.value;return f}function h(s){return n.controls.find(f=>f.id===s)||null}function u(s,f){return typeof s=="number"||typeof f=="number"?Math.abs(Number(s)-Number(f))<1e-12:s===f}function y(s,f){const L=Number(s);return Number.isFinite(L)?L:f}function m(){if(b)try{b.destroy()}catch{}b=null,g="",r.clear();for(const s of Object.keys(o))delete o[s]}return(s,f)=>(ae(),me("div",{ref_key:"containerRef",ref:l,class:"lil-gui-host"},null,512))}},yn=it(Wi,[["__scopeId","data-v-110f953e"]]),Gi={key:0,class:"advanced-effects-root"},$i={class:"effects-panel"},ji={class:"panel-head"},qi={class:"effect-switches"},Vi={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=mn(),a=Q(null),l=Q(!1),o=Q(!1),r=Q(!1),b=Q(!1),g=Q(!1),S=ke(()=>[{id:"fog",label:"Height Fog",type:"toggle",value:l.value},{id:"hbao",label:"HBAO",type:"toggle",value:o.value},{id:"tiltShift",label:"Tilt Shift",type:"toggle",value:r.value},{id:"atmosphere",label:"Atmosphere + Bloom",type:"toggle",value:b.value}]);let E=null,R=null,w=null,C=!1,T=null,_=null,D=null,M=null,i=null,c=null,h=null,u=null,y=!1,m=null,s=!1,f=0,L=0,O=typeof performance<"u"?performance.now():Date.now();function d(){return D||(D=yt(()=>import("./cesiumFxRuntime-DhdyNrDC.js"),__vite__mapDeps([0,1]),import.meta.url).then(W=>{var ne;const H=(ne=W==null?void 0:W.getCesiumFxEchartsRuntime)==null?void 0:ne.call(W);if(!H)throw new Error("Cinematic FX 图表运行时加载失败");return _=H,H}).catch(W=>{throw D=null,W}),D)}async function F(){return _||d()}const P={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},x={hdr:null,bloom:null,sky:null};dn(()=>{$()}),$t(()=>{pe()}),Ie(()=>t.controls,W=>{k(W||{})},{deep:!0,immediate:!0});function k(W){Object.prototype.hasOwnProperty.call(W,"fog")&&(l.value=!!W.fog),Object.prototype.hasOwnProperty.call(W,"hbao")&&(o.value=!!W.hbao),Object.prototype.hasOwnProperty.call(W,"tiltShift")&&(r.value=!!W.tiltShift),Object.prototype.hasOwnProperty.call(W,"atmosphere")&&(b.value=!!W.atmosphere)}function z({controlId:W,value:H}){const ne=!!H,ie={fog:l,hbao:o,tiltShift:r,atmosphere:b}[W];ie&&(ie.value=ne)}function $(){let W=0;M=window.setInterval(async()=>{var ee,ie;W+=1;const H=(ee=t.getViewer)==null?void 0:ee.call(t),ne=((ie=t.getCesium)==null?void 0:ie.call(t))||window.Cesium;if(H&&ne){clearInterval(M),M=null;try{X(H),J(H),le(H,ne),G(H,ne),n.success("高级视觉效果已启用。")}catch(j){n.error("高级视觉效果初始化失败",j),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}W>=150&&(clearInterval(M),M=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function X(W){var ee,ie,j,te,re,se,Se,ze,We;const H=W==null?void 0:W.scene;if(!H)return;typeof H.highDynamicRange=="boolean"&&(x.hdr=H.highDynamicRange),"sunBloom"in H&&(x.sunBloom=H.sunBloom);const ne=H.globe;if(ne&&(x.globe={enableLighting:ne.enableLighting,showGroundAtmosphere:ne.showGroundAtmosphere,dynamicAtmosphereLighting:ne.dynamicAtmosphereLighting,dynamicAtmosphereLightingFromSun:ne.dynamicAtmosphereLightingFromSun,atmosphereLightIntensity:ne.atmosphereLightIntensity,atmosphereHueShift:ne.atmosphereHueShift,atmosphereSaturationShift:ne.atmosphereSaturationShift,atmosphereBrightnessShift:ne.atmosphereBrightnessShift,lightingFadeInDistance:ne.lightingFadeInDistance,lightingFadeOutDistance:ne.lightingFadeOutDistance,nightFadeInDistance:ne.nightFadeInDistance,nightFadeOutDistance:ne.nightFadeOutDistance}),H.light&&(x.light={intensity:H.light.intensity}),(ee=H.postProcessStages)!=null&&ee.bloom){const Ae=H.postProcessStages.bloom;x.bloom={enabled:!!Ae.enabled,contrast:(ie=Ae.uniforms)==null?void 0:ie.contrast,brightness:(j=Ae.uniforms)==null?void 0:j.brightness,delta:(te=Ae.uniforms)==null?void 0:te.delta,sigma:(re=Ae.uniforms)==null?void 0:re.sigma,stepSize:(se=Ae.uniforms)==null?void 0:se.stepSize}}H.skyAtmosphere&&(x.sky={show:H.skyAtmosphere.show,hueShift:H.skyAtmosphere.hueShift,saturationShift:H.skyAtmosphere.saturationShift,brightnessShift:H.skyAtmosphere.brightnessShift}),x.celestial={sunShow:(Se=H.sun)==null?void 0:Se.show,moonShow:(ze=H.moon)==null?void 0:ze.show,skyBoxShow:(We=H.skyBox)==null?void 0:We.show}}function le(W,H){var ee;!((ee=W==null?void 0:W.scene)!=null&&ee.postProcessStages)||!(H!=null&&H.PostProcessStage)||(be(W,H),ce(W,H),B(W,H),b.value?U(W,H,1200):he(W))}function J(W){var ne;const H=W==null?void 0:W.scene;(ne=H==null?void 0:H.renderError)!=null&&ne.addEventListener&&(H.rethrowRenderErrors=!1,u=H.renderError.addEventListener((ee,ie)=>{n.error("Cesium 渲染异常，已触发降级保护",ie),fe(),y||(y=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function fe(){l.value=!1,r.value=!1,o.value=!1,b.value=!1,E&&(E.enabled=!1),R&&(R.enabled=!1),w&&(w.enabled=!1)}function be(W,H){E||(E=new H.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new H.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),W.scene.postProcessStages.add(E),E.enabled=l.value)}function ce(W,H){var ee,ie;const ne=(ee=W==null?void 0:W.scene)==null?void 0:ee.postProcessStages;ne&&(ne.ambientOcclusion?(w=ne.ambientOcclusion,C=!1):(ie=H==null?void 0:H.PostProcessStageLibrary)!=null&&ie.createAmbientOcclusionStage&&(w=H.PostProcessStageLibrary.createAmbientOcclusionStage(),ne.add(w),C=!0),w&&(w.enabled=o.value,w.uniforms&&("intensity"in w.uniforms&&(w.uniforms.intensity=4.2),"bias"in w.uniforms&&(w.uniforms.bias=.08),"lengthCap"in w.uniforms&&(w.uniforms.lengthCap=.35),"stepSize"in w.uniforms&&(w.uniforms.stepSize=1.8),"frustumLength"in w.uniforms&&(w.uniforms.frustumLength=1200))))}function B(W,H){R||(R=new H.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),W.scene.postProcessStages.add(R),R.enabled=!1)}function G(W,H){const ne=W==null?void 0:W.scene;ne&&(h=ne.preRender.addEventListener(()=>{var te;const ee=Ue(W),ie=Number(((te=W==null?void 0:W.camera)==null?void 0:te.pitch)??-1.2);f+=1;const j=typeof performance<"u"?performance.now():Date.now();if(j-O>=1e3&&(L=Math.round(f*1e3/(j-O)),f=0,O=j),E&&(E.enabled=l.value,E.uniforms.cameraHeightFactor=Ye(ee,150,12e3),E.uniforms.fogDensity=55e-5+(1-E.uniforms.cameraHeightFactor)*.00125),w&&(w.enabled=o.value),R){const re=ie>-.62,se=re?qe((ie+.62)/.5):0;R.enabled=r.value&&re,R.uniforms.blurStrength=se}b.value&&ee>=8e4?(U(W,H,ee),s=!1):s||(he(W),s=!0)}))}function U(W,H,ne){var re;const ee=W==null?void 0:W.scene;if(!ee)return;m||(m=Ii(W)),ki(W,H),typeof ee.highDynamicRange=="boolean"&&(ee.highDynamicRange=!0);const ie=(re=ee.postProcessStages)==null?void 0:re.bloom;ie&&(ie.enabled=!0,ie.uniforms&&("contrast"in ie.uniforms&&(ie.uniforms.contrast=149),"brightness"in ie.uniforms&&(ie.uniforms.brightness=-.12),"delta"in ie.uniforms&&(ie.uniforms.delta=1),"sigma"in ie.uniforms&&(ie.uniforms.sigma=3.25),"stepSize"in ie.uniforms&&(ie.uniforms.stepSize=5)));const j=ee.skyAtmosphere;if(!j)return;const te=Ye(ne,500,12e4);j.hueShift=-.035+te*.035,j.saturationShift=-.14+te*.09,j.brightnessShift=.03+(1-te)*.08}function he(W){var j,te,re;const H=W==null?void 0:W.scene;if(!H)return;const ne=((j=t.getCesium)==null?void 0:j.call(t))||window.Cesium;if(m){Ri(W,ne,m),m=null;return}typeof H.highDynamicRange=="boolean"&&x.hdr!==null&&(H.highDynamicRange=x.hdr),"sunBloom"in H&&x.sunBloom!==void 0&&(H.sunBloom=x.sunBloom);const ee=H.globe;if(ee&&x.globe){const se=x.globe;se.enableLighting!==void 0&&(ee.enableLighting=se.enableLighting),se.showGroundAtmosphere!==void 0&&(ee.showGroundAtmosphere=se.showGroundAtmosphere),se.dynamicAtmosphereLighting!==void 0&&"dynamicAtmosphereLighting"in ee&&(ee.dynamicAtmosphereLighting=se.dynamicAtmosphereLighting),se.dynamicAtmosphereLightingFromSun!==void 0&&"dynamicAtmosphereLightingFromSun"in ee&&(ee.dynamicAtmosphereLightingFromSun=se.dynamicAtmosphereLightingFromSun),se.atmosphereLightIntensity!==void 0&&"atmosphereLightIntensity"in ee&&(ee.atmosphereLightIntensity=se.atmosphereLightIntensity),se.atmosphereHueShift!==void 0&&"atmosphereHueShift"in ee&&(ee.atmosphereHueShift=se.atmosphereHueShift),se.atmosphereSaturationShift!==void 0&&"atmosphereSaturationShift"in ee&&(ee.atmosphereSaturationShift=se.atmosphereSaturationShift),se.atmosphereBrightnessShift!==void 0&&"atmosphereBrightnessShift"in ee&&(ee.atmosphereBrightnessShift=se.atmosphereBrightnessShift),se.lightingFadeInDistance!==void 0&&"lightingFadeInDistance"in ee&&(ee.lightingFadeInDistance=se.lightingFadeInDistance),se.lightingFadeOutDistance!==void 0&&"lightingFadeOutDistance"in ee&&(ee.lightingFadeOutDistance=se.lightingFadeOutDistance),se.nightFadeInDistance!==void 0&&"nightFadeInDistance"in ee&&(ee.nightFadeInDistance=se.nightFadeInDistance),se.nightFadeOutDistance!==void 0&&"nightFadeOutDistance"in ee&&(ee.nightFadeOutDistance=se.nightFadeOutDistance)}H.light&&x.light&&x.light.intensity!==void 0&&(H.light.intensity=x.light.intensity);const ie=(te=H.postProcessStages)==null?void 0:te.bloom;if(ie&&x.bloom&&(ie.enabled=x.bloom.enabled,ie.uniforms&&("contrast"in ie.uniforms&&x.bloom.contrast!==void 0&&(ie.uniforms.contrast=x.bloom.contrast),"brightness"in ie.uniforms&&x.bloom.brightness!==void 0&&(ie.uniforms.brightness=x.bloom.brightness),"delta"in ie.uniforms&&x.bloom.delta!==void 0&&(ie.uniforms.delta=x.bloom.delta),"sigma"in ie.uniforms&&x.bloom.sigma!==void 0&&(ie.uniforms.sigma=x.bloom.sigma),"stepSize"in ie.uniforms&&x.bloom.stepSize!==void 0&&(ie.uniforms.stepSize=x.bloom.stepSize))),H.skyAtmosphere&&x.sky&&(x.sky.show!==void 0&&(H.skyAtmosphere.show=x.sky.show),H.skyAtmosphere.hueShift=x.sky.hueShift,H.skyAtmosphere.saturationShift=x.sky.saturationShift,H.skyAtmosphere.brightnessShift=x.sky.brightnessShift),x.celestial){const se=x.celestial;H.sun&&se.sunShow!==void 0&&(H.sun.show=se.sunShow),H.moon&&se.moonShow!==void 0&&(H.moon.show=se.moonShow),H.skyBox&&se.skyBoxShow!==void 0&&(H.skyBox.show=se.skyBoxShow)}(re=H.requestRender)==null||re.call(H)}function De(){i&&(clearInterval(i),i=null)}async function Te(){var ee,ie;const W=!g.value;if(g.value=W,!W){De();return}const H=(ee=t.getViewer)==null?void 0:ee.call(t),ne=((ie=t.getCesium)==null?void 0:ie.call(t))||window.Cesium;if(!H||!ne){g.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ee(H,ne),Re(H,ne),He(H,ne)}catch(j){g.value=!1,n.error("图表模块加载失败",j)}}async function Ee(W,H){await F(),await ma(),a.value&&(T||(T=_.init(a.value),$e()),c||(c=()=>{T==null||T.resize()},window.addEventListener("resize",c)),T.resize(),He(W,H))}function Re(W,H){i||(i=window.setInterval(()=>{!T||!g.value||He(W,H)},1200))}function He(W,H){var te;const ne=new Date,ee=`${Be(ne.getHours())}:${Be(ne.getMinutes())}:${Be(ne.getSeconds())}`,ie=Number((Ue(W)/1e3).toFixed(2)),j=Number(H.Math.toDegrees(((te=W==null?void 0:W.camera)==null?void 0:te.pitch)??0).toFixed(1));Ve(P.labels,ee,20),Ve(P.cameraHeightKm,ie,20),Ve(P.pitchDeg,j,20),Ve(P.fps,L,20),T.setOption({xAxis:{data:P.labels},series:[{data:P.cameraHeightKm},{data:P.pitchDeg},{data:P.fps}]})}function $e(){T&&T.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function pe(){var ne,ee;M&&(clearInterval(M),M=null),De();const W=(ne=t.getViewer)==null?void 0:ne.call(t),H=(ee=W==null?void 0:W.scene)==null?void 0:ee.postProcessStages;h&&(h(),h=null),u&&(u(),u=null),E&&H&&H.remove(E),E=null,R&&H&&H.remove(R),R=null,w&&(C&&H&&H.remove(w),w=null),C=!1,s=!1,W&&he(W),c&&(window.removeEventListener("resize",c),c=null),T&&(T.dispose(),T=null),_=null,y=!1}function Ue(W){var ie,j,te;const H=(j=(ie=W==null?void 0:W.scene)==null?void 0:ie.globe)==null?void 0:j.ellipsoid,ne=(te=W==null?void 0:W.camera)==null?void 0:te.positionWC;if(!H||!ne)return 0;const ee=H.cartesianToCartographic(ne);return Math.max(0,Number((ee==null?void 0:ee.height)??0))}function Ye(W,H,ne){return!Number.isFinite(W)||ne<=H?0:qe((W-H)/(ne-H))}function qe(W){return Math.min(1,Math.max(0,Number(W)||0))}function Ve(W,H,ne){W.push(H),W.length>ne&&W.shift()}function Be(W){return String(W).padStart(2,"0")}return(W,H)=>e.headless?we("",!0):(ae(),me("div",Gi,[v("div",$i,[v("div",ji,[H[0]||(H[0]=v("span",{class:"panel-title"},"Cinematic FX",-1)),v("button",{class:"panel-btn",onClick:Te},_e(g.value?"隐藏图表":"显示图表"),1)]),v("div",qi,[Pe(yn,{title:"Effect Parameters",controls:S.value,onChange:z},null,8,["controls"])]),tt(v("div",{ref_key:"chartRef",ref:a,class:"fx-chart"},null,512),[[pt,g.value]])])]))}},Xi=it(Vi,[["__scopeId","data-v-c7595ca3"]]),Ki={key:0,class:"launcher-count"},Yi={class:"panel-header"},Zi={class:"panel-title-block"},Ji={class:"panel-mark"},Qi={class:"panel-copy"},er={class:"panel-subtitle"},tr={class:"panel-actions"},nr=["title"],ar={class:"panel-tabs","aria-label":"3D 工具分类"},ir=["aria-pressed","onClick"],rr={class:"panel-scroll"},or={class:"panel-page"},sr={class:"overview-grid"},lr={class:"overview-tile"},cr={class:"overview-tile"},ur={class:"overview-tile"},dr={key:0,class:"quick-actions"},hr=["disabled","onClick"],fr={key:1,class:"empty-state"},mr={class:"panel-page"},pr=["aria-expanded"],gr={class:"section-main"},vr={class:"section-meta"},yr={key:0,class:"section-body"},br={class:"option-grid"},xr=["disabled","aria-pressed","title","onClick"],Sr={class:"custom-basemap-input-row"},wr=["disabled"],_r={key:0,class:"custom-basemap-current"},Tr=["aria-expanded"],Mr={class:"section-main"},Lr={class:"section-meta"},Fr={key:0,class:"section-body"},Er={class:"option-grid"},Ar=["aria-pressed","title","onClick"],Dr=["aria-expanded"],Cr={class:"section-main"},Pr={class:"section-meta"},kr={key:0,class:"section-body"},Ir={class:"overlay-list"},Rr=["disabled","aria-pressed","title","onClick"],Or={class:"overlay-copy"},Nr={class:"overlay-title"},Br={key:0,class:"overlay-desc"},Hr={key:3,class:"empty-state"},zr={class:"panel-page"},Ur={class:"module-list"},Wr=["aria-expanded","onClick"],Gr={class:"module-icon"},$r={class:"module-copy"},jr={class:"module-title"},qr={key:0,class:"module-desc"},Vr={class:"module-head-side"},Xr={key:0,class:"module-body"},Kr={key:0,class:"module-actions"},Yr=["disabled","onClick"],Zr={key:0,class:"empty-state"},Jr={class:"panel-page"},Qr={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},eo={class:"data-upload-hint"},to={class:"tileset-actions"},no={key:0,class:"data-source-list"},ao={class:"data-source-head"},io={class:"data-source-count"},ro=["title","aria-label","onClick"],oo={class:"data-source-icon"},so={class:"data-source-copy"},lo={class:"data-source-name"},co={class:"data-source-type"},uo={key:1,class:"empty-state"},Hn=3,ho=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",fo={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all","import-tileset-zip","import-tileset-folder"],setup(e,{emit:t}){const n=e,a=Q(Array.isArray(n.loadedDataSources)?n.loadedDataSources:[]);Ie(()=>n.loadedDataSources,B=>{const G=Array.isArray(B)?B:[];G!==a.value&&(a.value=G)},{immediate:!0});const l=t,o=F(),r=o.uiStateVersion===Hn,b=Q(o.activeTab||"scene"),g=Q(!!o.compactMode),S=Q(new Set(r?o.expandedLayerSectionIds||[]:[])),E=Q(new Set(r?o.expandedModuleIds||[]:[])),R=Q(n.customBasemapUrl||""),w=Q(null),C=ke(()=>n.embedded||n.open),T=ke(()=>n.modules.find(B=>B.id==="scene")||null),_=ke(()=>{var B;return((B=T.value)==null?void 0:B.actions)||[]}),D=ke(()=>n.modules.filter(B=>B.id!=="scene")),M=ke(()=>D.value.filter(B=>B.statusTone==="success"||B.statusTone==="warning").length),i=ke(()=>n.overlayOptions.filter(B=>!!B.active).length),c=[{id:"scene",label:"场景",icon:Zt},{id:"layers",label:"图层",icon:Jt},{id:"data",label:"数据",icon:sn},{id:"modules",label:"模块",icon:Yt}],h=ke(()=>{var B;return((B=n.basemapOptions.find(G=>G.value===n.activeBasemap))==null?void 0:B.label)||"未选择"}),u=ke(()=>{var B;return((B=n.terrainOptions.find(G=>G.value===n.activeTerrain))==null?void 0:B.label)||"未选择"});Ie(()=>n.modules.map(B=>B.id),B=>{B.includes(b.value)||b.value==="scene"||b.value==="layers"||b.value==="modules"||(b.value="scene")},{immediate:!0}),Ie([b,g,S,E],P,{deep:!0}),Ie(()=>n.customBasemapUrl,B=>{B!==R.value&&(R.value=B||"")});function y(B){l("update:open",B)}function m(B){return S.value.has(B)}function s(B){const G=new Set(S.value);G.has(B)?G.delete(B):G.add(B),S.value=G}function f(B){return E.value.has(B)}function L(B){const G=new Set(E.value);G.has(B)?G.delete(B):G.add(B),E.value=G}function O(B){B!=null&&B.disabled||l("update:activeBasemap",B.value)}function d(){l("custom-basemap-submit",{url:R.value})}function F(){if(typeof window>"u")return{};try{const B=window.localStorage.getItem(n.storageKey);return B?JSON.parse(B):{}}catch{return{}}}function P(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:Hn,activeTab:b.value,compactMode:g.value,expandedLayerSectionIds:[...S.value],expandedModuleIds:[...E.value]}))}catch{}}function x(B){return{scene:Zt,effects:qa,wind:ja,fluid:$a,shallowWater:Dn}[B]||Yt}function k(B,G){var he;return((he={scene:{home:Wa,everest:En,tileset:zt},wind:{load:Ua,clear:Qt},fluid:{pick:An,clear:Qt},shallowWater:{toggle:Dn}}[B])==null?void 0:he[G])||Ga}function z(B,G){l("module-action",{moduleId:B,actionId:G})}function $(B,G,U){const he=G.type==="range"?Number(U):U;l("control-change",{moduleId:B,controlId:G.id,value:he})}function X(B){B.disabled||l("overlay-toggle",{overlayId:B.value,value:!B.active})}function le(B){return{geojson:It,json:It,kml:Cn,kmz:Cn,shp:Jt,gltf:zt,czml:It,"3dtiles":zt}[B]||It}function J(B){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[B]||B.toUpperCase()}function fe(B){var U;const G=(U=B.target)==null?void 0:U.files;!G||G.length===0||(l("data-import",{files:Array.from(G)}),w.value&&(w.value.value=""))}function be(B){l("data-remove",{id:B})}function ce(){l("data-clear-all")}return(B,G)=>(ae(),me("aside",{class:Ke(["cesium-tool-shell",{"is-open":C.value,"is-embedded":e.embedded}])},[!e.embedded&&!C.value?(ae(),me("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:G[0]||(G[0]=U=>y(!0))},[Pe(ge(Yt),{size:18,"stroke-width":"2"}),G[9]||(G[9]=v("span",null,"高级控制台",-1)),M.value?(ae(),me("span",Ki,_e(M.value),1)):we("",!0)])):we("",!0),tt(v("section",{class:Ke(["cesium-tool-panel",{compact:g.value}]),"aria-label":"Cesium 高级控制台"},[v("header",Yi,[v("div",Zi,[v("span",Ji,[Pe(ge(Zt),{size:18,"stroke-width":"2"})]),v("span",Qi,[G[10]||(G[10]=v("span",{class:"panel-title"},"3D 高级控制台",-1)),v("span",er,_e(h.value)+" / "+_e(u.value),1)])]),v("div",tr,[v("button",{class:"icon-btn",type:"button",title:g.value?"切换为舒展布局":"切换为紧凑布局",onClick:G[1]||(G[1]=U=>g.value=!g.value)},[Pe(ge(Na),{size:16,"stroke-width":"2"})],8,nr),e.embedded?we("",!0):(ae(),me("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:G[2]||(G[2]=U=>y(!1))},[Pe(ge(Ln),{size:17,"stroke-width":"2"})]))])]),v("nav",ar,[(ae(),me(lt,null,dt(c,U=>v("button",{key:U.id,class:Ke(["tab-btn",{active:b.value===U.id}]),type:"button","aria-pressed":b.value===U.id,onClick:he=>b.value=U.id},[(ae(),Je(gt(U.icon),{size:15,"stroke-width":"2"})),v("span",null,_e(U.label),1)],10,ir)),64))]),v("div",rr,[tt(v("section",or,[v("div",sr,[v("div",lr,[G[11]||(G[11]=v("span",{class:"overview-label"},"地图源",-1)),v("strong",null,_e(h.value),1)]),v("div",cr,[G[12]||(G[12]=v("span",{class:"overview-label"},"地形",-1)),v("strong",null,_e(u.value),1)]),v("div",ur,[G[13]||(G[13]=v("span",{class:"overview-label"},"模块",-1)),v("strong",null,_e(M.value)+"/"+_e(D.value.length),1)])]),_.value.length?(ae(),me("div",dr,[(ae(!0),me(lt,null,dt(_.value,U=>(ae(),me("button",{key:U.id,class:Ke(["tool-action",[U.variant||"default",{active:U.active}]]),disabled:U.disabled,type:"button",onClick:he=>z(T.value.id,U.id)},[(ae(),Je(gt(k(T.value.id,U.id)),{size:15,"stroke-width":"2"})),wt(" "+_e(U.label),1)],10,hr))),128))])):(ae(),me("div",fr," 暂无场景快捷操作 "))],512),[[pt,b.value==="scene"]]),tt(v("section",mr,[e.basemapOptions.length?(ae(),me("div",{key:0,class:Ke(["option-group",{expanded:m("basemap")}])},[v("button",{class:"section-head section-toggle",type:"button","aria-expanded":m("basemap"),onClick:G[3]||(G[3]=U=>s("basemap"))},[v("span",gr,[Pe(ge(Jt),{size:16,"stroke-width":"2"}),G[14]||(G[14]=v("span",null,"底图源",-1))]),v("span",vr,[v("span",null,_e(h.value),1),Pe(ge(kt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,pr),m("basemap")?(ae(),me("div",yr,[v("div",br,[(ae(!0),me(lt,null,dt(e.basemapOptions,U=>(ae(),me("button",{key:U.value,class:Ke(["option-card",{active:U.value===e.activeBasemap}]),type:"button",disabled:U.disabled,"aria-pressed":U.value===e.activeBasemap,title:U.description||U.label,onClick:he=>O(U)},[v("span",null,_e(U.label),1),U.value===e.activeBasemap?(ae(),Je(ge(Fn),{key:0,size:15,"stroke-width":"2.4"})):we("",!0)],10,xr))),128))]),v("form",{class:"custom-basemap-editor",onSubmit:vt(d,["prevent"])},[v("div",Sr,[Pe(ge(Ba),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),tt(v("input",{"onUpdate:modelValue":G[4]||(G[4]=U=>R.value=U),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Ht,R.value]]),v("button",{class:"custom-basemap-submit",type:"submit",disabled:!R.value.trim(),title:"加载自定义 XYZ"},[Pe(ge(ya),{size:14,"stroke-width":"2"}),G[15]||(G[15]=v("span",null,"加载",-1))],8,wr)]),e.customBasemapUrl?(ae(),me("div",_r,_e(e.customBasemapUrl),1)):we("",!0)],32)])):we("",!0)],2)):we("",!0),e.terrainOptions.length?(ae(),me("div",{key:1,class:Ke(["option-group",{expanded:m("terrain")}])},[v("button",{class:"section-head section-toggle",type:"button","aria-expanded":m("terrain"),onClick:G[5]||(G[5]=U=>s("terrain"))},[v("span",Mr,[Pe(ge(En),{size:16,"stroke-width":"2"}),G[16]||(G[16]=v("span",null,"地形",-1))]),v("span",Lr,[v("span",null,_e(u.value),1),Pe(ge(kt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Tr),m("terrain")?(ae(),me("div",Fr,[v("div",Er,[(ae(!0),me(lt,null,dt(e.terrainOptions,U=>(ae(),me("button",{key:U.value,class:Ke(["option-card",{active:U.value===e.activeTerrain}]),type:"button","aria-pressed":U.value===e.activeTerrain,title:U.description||U.label,onClick:he=>B.$emit("update:activeTerrain",U.value)},[v("span",null,_e(U.label),1),U.value===e.activeTerrain?(ae(),Je(ge(Fn),{key:0,size:15,"stroke-width":"2.4"})):we("",!0)],10,Ar))),128))])])):we("",!0)],2)):we("",!0),e.overlayOptions.length?(ae(),me("div",{key:2,class:Ke(["option-group",{expanded:m("overlay")}])},[v("button",{class:"section-head section-toggle",type:"button","aria-expanded":m("overlay"),onClick:G[6]||(G[6]=U=>s("overlay"))},[v("span",Cr,[Pe(ge(An),{size:16,"stroke-width":"2"}),G[17]||(G[17]=v("span",null,"叠加层",-1))]),v("span",Pr,[v("span",null,_e(i.value)+"/"+_e(e.overlayOptions.length),1),Pe(ge(kt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Dr),m("overlay")?(ae(),me("div",kr,[v("div",Ir,[(ae(!0),me(lt,null,dt(e.overlayOptions,U=>(ae(),me("button",{key:U.value,class:Ke(["overlay-row",{active:!!U.active}]),type:"button",disabled:U.disabled,"aria-pressed":!!U.active,title:U.description||U.label,onClick:he=>X(U)},[v("span",Or,[v("span",Nr,_e(U.label),1),U.description?(ae(),me("span",Br,_e(U.description),1)):we("",!0)]),v("span",{class:Ke(["toggle-control",{active:!!U.active}]),"aria-hidden":"true"},[...G[18]||(G[18]=[v("span",{class:"toggle-track"},[v("span",{class:"toggle-thumb"})],-1)])],2)],10,Rr))),128))])])):we("",!0)],2)):we("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(ae(),me("div",Hr," 暂无图层配置项 ")):we("",!0)],512),[[pt,b.value==="layers"]]),tt(v("section",zr,[v("div",Ur,[(ae(!0),me(lt,null,dt(D.value,U=>{var he,De;return ae(),me("article",{key:U.id,class:Ke(["module-item",{expanded:f(U.id)}])},[v("button",{class:"module-head",type:"button","aria-expanded":f(U.id),onClick:Te=>L(U.id)},[v("span",Gr,[(ae(),Je(gt(x(U.id)),{size:16,"stroke-width":"2"}))]),v("span",$r,[v("span",jr,_e(U.title),1),U.description?(ae(),me("span",qr,_e(U.description),1)):we("",!0)]),v("span",Vr,[U.status?(ae(),me("span",{key:0,class:Ke(["module-status",U.statusTone||"neutral"])},_e(U.status),3)):we("",!0),Pe(ge(kt),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Wr),f(U.id)?(ae(),me("div",Xr,[(he=U.actions)!=null&&he.length?(ae(),me("div",Kr,[(ae(!0),me(lt,null,dt(U.actions,Te=>(ae(),me("button",{key:Te.id,class:Ke(["tool-action",[Te.variant||"default",{active:Te.active}]]),disabled:Te.disabled,type:"button",onClick:Ee=>z(U.id,Te.id)},[(ae(),Je(gt(k(U.id,Te.id)),{size:14,"stroke-width":"2"})),wt(" "+_e(Te.label),1)],10,Yr))),128))])):we("",!0),(De=U.controls)!=null&&De.length?(ae(),me("div",{key:1,class:Ke(["control-list control-list-gui",U.controlLayout?`control-list-${U.controlLayout}`:""])},[Pe(yn,{title:U.title,controls:U.controls,onChange:Te=>$(U.id,Te.control,Te.value)},null,8,["title","controls","onChange"])],2)):we("",!0)])):we("",!0)],2)}),128))]),D.value.length?we("",!0):(ae(),me("div",Zr," 暂无可用功能模块 "))],512),[[pt,b.value==="modules"]]),tt(v("section",Jr,[v("label",Qr,[v("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:w,class:"data-file-input",type:"file",multiple:"",accept:ho,onChange:fe},null,544),v("div",eo,[Pe(ge(sn),{size:28,"stroke-width":"1.5"}),G[19]||(G[19]=v("span",null,"选择文件或拖拽到此处",-1)),G[20]||(G[20]=v("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),v("div",to,[v("button",{class:"tool-action primary",type:"button",title:"从 ZIP 压缩包导入 3D Tiles 数据集",onClick:G[7]||(G[7]=U=>l("import-tileset-zip"))},[Pe(ge(Ha),{size:14,"stroke-width":"2"}),G[21]||(G[21]=wt(" ZIP导入 ",-1))]),v("button",{class:"tool-action primary",type:"button",title:"从文件夹导入 3D Tiles 数据集（需浏览器支持）",onClick:G[8]||(G[8]=U=>l("import-tileset-folder"))},[Pe(ge(za),{size:14,"stroke-width":"2"}),G[22]||(G[22]=wt(" 文件夹导入 ",-1))])]),a.value.length?(ae(),me("div",no,[v("div",ao,[v("span",io," 已加载 "+_e(a.value.length)+" 个数据源 ",1),v("button",{class:"tool-action danger",type:"button",onClick:ce},[Pe(ge(Qt),{size:13,"stroke-width":"2"}),G[23]||(G[23]=wt(" 全部清除 ",-1))])]),(ae(!0),me(lt,null,dt(a.value,U=>(ae(),me("button",{key:U.id,class:"data-source-row",type:"button",title:`点击移除 ${U.name} (${J(U.type)})`,"aria-label":`移除 ${U.name}`,onClick:he=>be(U.id)},[v("span",oo,[(ae(),Je(gt(le(U.type)),{size:15,"stroke-width":"2"}))]),v("span",so,[v("span",lo,_e(U.name),1),v("span",co,_e(J(U.type)),1)]),Pe(ge(Ln),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,ro))),128))])):(ae(),me("div",uo," 暂无已导入的数据 "))],512),[[pt,b.value==="data"]])])],2),[[pt,e.embedded||C.value]])],2))}},mo=it(fo,[["__scopeId","data-v-322ee0ef"]]),po={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},go={class:"dialog-header"},vo={class:"dialog-title-row"},yo={class:"dialog-file-name"},bo={class:"coord-fields"},xo={class:"coord-field"},So={key:0,class:"coord-error"},wo={class:"coord-field"},_o={key:0,class:"coord-error"},To={class:"coord-field"},Mo={key:0,class:"coord-error"},Lo={class:"dialog-actions"},Fo=["disabled"],Eo={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,a=t,l=Q(""),o=Q(""),r=Q("0"),b=Q(null),g=Q(""),S=Q(""),E=Q(""),R=ke(()=>l.value!==""&&o.value!==""&&!g.value&&!S.value&&!E.value);function w(){const T=parseFloat(l.value),_=parseFloat(o.value),D=parseFloat(r.value);g.value="",S.value="",E.value="",l.value!==""&&(isNaN(T)||T<-180||T>180)&&(g.value="经度范围: -180 ~ 180"),o.value!==""&&(isNaN(_)||_<-90||_>90)&&(S.value="纬度范围: -90 ~ 90"),r.value!==""&&(isNaN(D)||D<0)&&(E.value="高度必须 ≥ 0")}function C(){if(!R.value){w();return}const T=parseFloat(l.value),_=parseFloat(o.value),D=parseFloat(r.value)||0;a("confirm",{lng:T,lat:_,height:D})}return Ie(()=>n.visible,T=>{if(!T){g.value="",S.value="",E.value="";return}l.value="",o.value="",r.value="0",g.value="",S.value="",E.value="",T&&setTimeout(()=>{var _;(_=b.value)==null||_.focus()},60)}),(T,_)=>(ae(),Je(_a,{to:"body"},[e.visible?(ae(),me("div",{key:0,class:"cesium-data-dialog-overlay",onClick:_[4]||(_[4]=vt(D=>T.$emit("cancel"),["self"]))},[v("div",po,[v("header",go,[v("div",vo,[Pe(ge(zt),{size:18,"stroke-width":"2"}),_[5]||(_[5]=v("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),v("p",yo,_e(e.fileName),1),_[6]||(_[6]=v("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),v("form",{class:"dialog-form",onSubmit:vt(C,["prevent"])},[v("div",bo,[v("label",xo,[_[7]||(_[7]=v("span",{class:"coord-label"},"经度 (Longitude)",-1)),tt(v("input",{ref_key:"lngInputRef",ref:b,"onUpdate:modelValue":_[0]||(_[0]=D=>l.value=D),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:w},null,544),[[Ht,l.value]]),g.value?(ae(),me("span",So,_e(g.value),1)):we("",!0)]),v("label",wo,[_[8]||(_[8]=v("span",{class:"coord-label"},"纬度 (Latitude)",-1)),tt(v("input",{"onUpdate:modelValue":_[1]||(_[1]=D=>o.value=D),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:w},null,544),[[Ht,o.value]]),S.value?(ae(),me("span",_o,_e(S.value),1)):we("",!0)]),v("label",To,[_[9]||(_[9]=v("span",{class:"coord-label"},"高度 (Height 米)",-1)),tt(v("input",{"onUpdate:modelValue":_[2]||(_[2]=D=>r.value=D),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:w},null,544),[[Ht,r.value]]),E.value?(ae(),me("span",Mo,_e(E.value),1)):we("",!0)])]),v("div",Lo,[v("button",{class:"dialog-btn cancel-btn",type:"button",onClick:_[3]||(_[3]=D=>T.$emit("cancel"))}," 取消 "),v("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!R.value},[Pe(ge(ya),{size:14,"stroke-width":"2"}),_[10]||(_[10]=wt(" 确认放置 ",-1))],8,Fo)])],32)])])):we("",!0)]))}},Ao=it(Eo,[["__scopeId","data-v-81f307a1"]]);function Do(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(M){return(M==null?void 0:M._view)||(M==null?void 0:M.view)}function n(M){const i=t(M);if(!(i!=null&&i.passState))throw new Error("Cesium scene passState is unavailable.");return i.passState}function a(M){const i=t(M);return(i==null?void 0:i.frustumCommandsList)||(i==null?void 0:i._frustumCommandsList)||[]}const l=`
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
`,r=`
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
`;class E{constructor(i){this.commandType=i.commandType,this.geometry=i.geometry,this.attributeLocations=i.attributeLocations,this.primitiveType=i.primitiveType,this.uniformMap=i.uniformMap,this.vertexShaderSource=i.vertexShaderSource,this.fragmentShaderSource=i.fragmentShaderSource,this.rawRenderState=i.rawRenderState,this.framebuffer=i.framebuffer,this.isPostRender=i.isPostRender,this.outputTexture=i.outputTexture,this.autoClear=e.defaultValue(i.autoClear,!1),this.preExecute=i.preExecute,this.modelMatrix=e.defaultValue(i.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(i){switch(this.commandType){case"Draw":{const c=e.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),h=e.ShaderProgram.fromCache({context:i,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),u=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:c,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:h,framebuffer:this.framebuffer,renderState:u,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(i,c){this.geometry=c;const h=e.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=h}update(i){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(i.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&i.commandList.push(this.clearCommand),i.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class R{constructor(){}static loadText(i){const c=new XMLHttpRequest;return c.open("GET",i,!1),c.send(),c.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(i){if(e.defined(i.arrayBufferView)){const h={};h.arrayBufferView=i.arrayBufferView,i.source=h,i.flipY=!1}return new e.Texture(i)}static createDepthFramebuffer(i,c,h){return new e.Framebuffer({context:i,colorTextures:[this.createTexture({context:i,width:c,height:h,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(c*h*4)})],depthRenderbuffer:new e.Renderbuffer({context:i,width:c,height:h,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(i,c,h,u=!1){const y={context:i,colorTextures:[c],destroyAttachments:u};return h&&(y.depthTexture=h),new e.Framebuffer(y)}static createRawRenderState(i){const u={viewport:i.viewport,depthTest:i.depthTest,depthMask:i.depthMask,blending:i.blending};return e.Appearance.getDefaultRenderState(!0,!1,u)}}const D=class D{constructor(i,c={}){if(!i)throw new Error("Cesium Viewer is required");this.viewer=i,this._initConfiguration(c),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(i){this.config={resolution:new e.Cartesian2(i.width||D.DEFAULTS.width,i.height||D.DEFAULTS.height),dimensions:i.dimensions||D.DEFAULTS.dimensions.clone(),heightRange:{min:i.minHeight??D.DEFAULTS.heightRange[0],max:i.maxHeight??D.DEFAULTS.heightRange[1]},baseHeight:i.baseHeight??D.DEFAULTS.baseHeight,fluidParams:i.fluidParams||D.DEFAULTS.fluidParams.clone(),customParams:i.customParams||D.DEFAULTS.customParams.clone(),waterColor:i.waterColor||D.DEFAULTS.waterColor.clone(),lonLat:i.lonLat||[...D.DEFAULTS.lonLat],timeStep:i.timeStep||D.DEFAULTS.timeStep,heightMapSource:i.heightMapSource||D.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(i){const c=Number(i);!Number.isFinite(c)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,c)),this.resetSimulation())}resetSimulation(){var i,c;this._frameCount=0,(c=(i=this.viewer.scene).requestRender)==null||c.call(i)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const i=()=>R.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:i(),B:i(),C:i(),D:i()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(i){if(!(i!=null&&i.arrayBufferView)||!i.width||!i.height)throw new Error("Invalid height map source.");return R.createTexture({context:this.viewer.scene.context,width:i.width,height:i.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:i.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var F,P;const i=this.viewer.scene.context,c=R.createDepthFramebuffer(i,this.config.resolution.x,this.config.resolution.y),h=this.viewer.scene,u=h.frameState,y=n(this.viewer.scene),m=h.camera,s=u.camera,f=y.framebuffer,L=e.BoundingRectangle.clone(y.viewport,new e.BoundingRectangle);let O=null,d=[];try{y.viewport.x=0,y.viewport.y=0,y.viewport.width=this.config.resolution.x,y.viewport.height=this.config.resolution.y,y.framebuffer=c,h.camera=this.heightMapCamera,u.camera=this.heightMapCamera,u.context.uniformState.updateCamera(this.heightMapCamera),d=this._processHeightMapShaders(),this._renderDepthPrepass(y);const x=R.createTexture({context:i,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return O=R.createFramebuffer(i,x),this._copyTexture(c.getColorTexture(0),O),x}finally{this._restoreHeightMapShaders(d),y.framebuffer=f,e.BoundingRectangle.clone(L,y.viewport),h.camera=m,u.camera=s,s&&u.context.uniformState.updateCamera(s),O&&!((F=O.isDestroyed)!=null&&F.call(O))&&O.destroy(),c&&!((P=c.isDestroyed)!=null&&P.call(c))&&c.destroy()}}_renderDepthPrepass(i){const c=this.viewer.scene.frameState;c.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(u=>u.execute(this.viewer.scene.context,i))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const i={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:o}),this._createComputePass("B",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:r}),this._createComputePass("C",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:b}),this._createComputePass("D",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:g})]}_createComputePass(i,{uniforms:c,shaderSource:h}){return new E({commandType:"Compute",uniformMap:c,fragmentShaderSource:new e.ShaderSource({sources:[l,h]}),geometry:R.getFullscreenQuad(),outputTexture:this.textures[i],preExecute:u=>u.commandToExecute.outputTexture=this.textures[i]})}_createMainRenderPass(){const i=C([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new E({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[l,S]}),geometry:this._createBoxGeometry(),modelMatrix:i,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var i,c,h,u;return(u=(h=(c=(i=t(this.viewer.scene))==null?void 0:i.globeDepth)==null?void 0:c.colorFramebufferManager)==null?void 0:h._colorTextures)==null?void 0:u[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(i=>this.viewer.scene.primitives.add(i)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(i){const c=this.viewer.camera.getPickRay(i);return this.viewer.scene.globe.pick(c,this.viewer.scene)}_createOrthographicCamera(){const i=new e.Camera(this.viewer.scene);i.frustum=new e.OrthographicOffCenterFrustum;const[c,h]=this.config.lonLat,u=e.Cartesian3.fromDegrees(c,h,this.config.baseHeight),y=e.Transforms.eastNorthUpToFixedFrame(u),m=i.frustum;m.near=.01,m.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),m.left=-this.config.dimensions.x/2,m.right=this.config.dimensions.x/2,m.bottom=-this.config.dimensions.y/2,m.top=this.config.dimensions.y/2;const s=e.Matrix4.getColumn(y,2,new e.Cartesian3);e.Cartesian3.negate(s,s);const f=e.Matrix4.getColumn(y,1,new e.Cartesian3),L=e.Matrix4.getColumn(y,0,new e.Cartesian3),O=e.Cartesian3.multiplyByScalar(s,-m.far,new e.Cartesian3);return i.position=e.Cartesian3.add(u,O,new e.Cartesian3),i.direction=s,i.up=f,i.right=L,i}destroy(){var i,c;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(h=>{h&&this.viewer.scene.primitives.remove(h)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(h=>{var u;h&&!((u=h.isDestroyed)!=null&&u.call(h))&&h.destroy()}),this.textures={},this._heightMap&&!((c=(i=this._heightMap).isDestroyed)!=null&&c.call(i))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(i,c){const h=this.viewer.scene.context,u=n(this.viewer.scene),y=h.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>i},owner:this}),m=u.framebuffer;u.framebuffer=c,y.execute(h,u),u.framebuffer=m}_getDepthRenderCommands(){var h,u;const i=[],c=a(this.viewer.scene);for(let y=0;y<c.length;++y){const m=c[y],s=(h=m==null?void 0:m.commands)==null?void 0:h[2],f=((u=m==null?void 0:m.indices)==null?void 0:u[2])??(s==null?void 0:s.length)??0;s&&f>0&&i.push(...s.slice(0,f))}return i}_processHeightMapShaders(){const i=[],c=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),h=e.Matrix4.inverse(c,new e.Matrix4),u=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(m=>{var d;if(!((d=m==null?void 0:m.shaderProgram)!=null&&d.fragmentShaderSource)||!m.uniformMap)return;const s=Object.prototype.hasOwnProperty.call(m.uniformMap,"u_inverseEnuMatrix"),f=m.uniformMap.u_inverseEnuMatrix,L=m.shaderProgram,O=new e.Matrix4;m.uniformMap.u_inverseEnuMatrix=()=>{const F=m.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(h,F,O)},m.heightMap_ShaderProgram||(m.heightMap_ShaderProgram=this._getDerivedShaderProgram(u.context,m.shaderProgram,"Height_Map")),m.shaderProgram=m.heightMap_ShaderProgram,i.push({command:m,hadInverseUniform:s,originalInverseUniform:f,originalShaderProgram:L})}),i}_restoreHeightMapShaders(i){i.forEach(c=>{const{command:h,hadInverseUniform:u,originalInverseUniform:y,originalShaderProgram:m}=c;h!=null&&h.uniformMap&&(h.shaderProgram=m,u?h.uniformMap.u_inverseEnuMatrix=y:delete h.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(i,c,h){let u=i.shaderCache.getDerivedShaderProgram(c,h);return e.defined(u)||(u=this._createHeightMapShaderProgram(i,c,h)),u}_createHeightMapShaderProgram(i,c,h){const u=this._modifyFragmentShader(c.fragmentShaderSource);return i.shaderCache.createDerivedShaderProgram(c,h,{vertexShaderSource:c.vertexShaderSource,fragmentShaderSource:u,attributeLocations:c._attributeLocations})}_modifyFragmentShader(i){const c=i.sources.map(h=>e.ShaderSource.replaceMain(h,"czm_heightMap_main"));return c.push(`
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
            }`]})}};_n(D,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let w=D;const C=(M=[0,0,0],i=[0,0,0],c=[1,1,1])=>{const h=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(i[0]))),u=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(i[1]))),y=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(i[2])));M instanceof e.Cartesian3||(M=e.Cartesian3.fromDegrees(...M));const m=e.Transforms.eastNorthUpToFixedFrame(M);e.Matrix4.multiply(m,h,m),e.Matrix4.multiply(m,u,m),e.Matrix4.multiply(m,y,m);const s=e.Matrix4.fromScale(new e.Cartesian3(...c));return e.Matrix4.multiply(m,s,new e.Matrix4)},T=`
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
    `;function _(){return new e.PostProcessStage({fragmentShader:T})}return{FluidRenderer:w,createSkyEffect:_}}const Co={key:0,class:"fluid-root"},Po={class:"fluid-panel"},ko={class:"panel-actions"},Io=["disabled"],Ro={key:0,class:"selected-text"},zn=1024,Nt=1e4,Un=1200,Oo=100,No=.01,Bo=.03,Ho=60,tn=64,zo=160,Uo={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=mn(),r=Q(10),b=Q(20),g=Q(3),S=Q("#0d4fa3"),E=Q(null),R=Q(null),w=Q(null),C=Q(!1),T=Q(!1),_=Q(null),D=Q(null),M=Q(!1),i=Q(5);let c=null,h=null,u=null,y=null,m=null,s=null,f=null,L=null,O=0;const d=ke(()=>!Number.isFinite(_.value)||!Number.isFinite(D.value)?"":`经度 ${_.value.toFixed(6)} / 纬度 ${D.value.toFixed(6)}`),F=ke(()=>Number.isFinite(R.value)&&Number.isFinite(w.value)),P=ke(()=>{if(!F.value)return 1;const A=Math.abs(w.value-R.value);return Math.max(A/1e3,.01)}),x=ke(()=>[{id:"threshold",label:"Threshold",type:"range",min:0,max:500,step:1e-4,value:r.value,displayValue:Number(r.value).toFixed(2)},{id:"blend",label:"Blend",type:"range",min:0,max:50,step:1e-4,value:b.value,displayValue:Number(b.value).toFixed(2)},{id:"lightStrength",label:"Light",type:"range",min:0,max:10,step:1e-4,value:g.value,displayValue:Number(g.value).toFixed(2)},{id:"waterLevel",label:"Water Level",type:"range",min:F.value?R.value:0,max:F.value?w.value:1,step:P.value,value:Number.isFinite(Number(E.value))?Number(E.value):0,displayValue:F.value&&Number.isFinite(Number(E.value))?`${Number(E.value).toFixed(2)} m`:"Pick terrain first",disabled:!F.value},{id:"waterColor",label:"Water Color",type:"color",value:S.value}]);Ie([r,b,g,S],H),Ie(E,ne),Ie(()=>a.params,A=>{z(A||{})},{deep:!0,immediate:!0}),Ie([C,T,d,E,R,w,M,i],X,{immediate:!0}),fa(()=>{re(),We(!0)});function k(){var K,oe;const A=(K=a.getViewer)==null?void 0:K.call(a),N=((oe=a.getCesium)==null?void 0:oe.call(a))||window.Cesium;if(!A||!N)return o.warning("Cesium 场景尚未就绪。"),null;if(!u){const ue=Do(N);u=ue.FluidRenderer,y=ue.createSkyEffect}return{viewer:A,Cesium:N}}function z(A){Number.isFinite(Number(A.threshold))&&(r.value=Number(A.threshold)),Number.isFinite(Number(A.blend))&&(b.value=Number(A.blend)),Number.isFinite(Number(A.lightStrength))&&(g.value=Number(A.lightStrength)),qe(A.waterColor)&&(S.value=A.waterColor),Number.isFinite(Number(A.waterLevel))&&(E.value=Number(A.waterLevel))}function $({controlId:A,value:N}){A==="threshold"?r.value=Number(N):A==="blend"?b.value=Number(N):A==="lightStrength"?g.value=Number(N):A==="waterLevel"?E.value=Number(N):A==="waterColor"&&qe(N)&&(S.value=N)}function X(){l("state-change",{isPicking:C.value,hasFluid:T.value,selectedText:d.value,waterLevel:E.value,waterLevelMin:R.value,waterLevelMax:w.value,floodSimActive:M.value,floodSpeed:i.value})}function le(){const A=k();if(!A)return;const{viewer:N,Cesium:K}=A;Se(),ee(N,K),C.value=!0,m=new K.ScreenSpaceEventHandler(N.scene.canvas),m.setInputAction(oe=>{J(N,K,oe.position)},K.ScreenSpaceEventType.LEFT_CLICK)}async function J(A,N,K){var Fe,Oe;const oe=W(A,K);if(!oe){o.warning("未选中可用地形位置。");return}const ue=++O;Se();const xe=N.Cartographic.fromCartesian(oe),p=N.Math.toDegrees(xe.longitude),I=N.Math.toDegrees(xe.latitude),Y=Number(xe.height),Z=Number.isFinite(Y)?Y:0,ve=new N.Cartesian3(Nt,Nt,0);pa("正在请求模拟范围高度数据...");try{ze();const Ne=Number(r.value)||0,je=Number(b.value)||0,Ze=Number(g.value)||0,q=await fe(A,N,{lon:p,lat:I,centerHeight:Z,dimensions:ve}),V=Re(q,Z),de=V.baseHeight,ye=V.depth,Ge=He(V,Z),ut=new N.Cartesian3(Nt,Nt,ye);if(ue!==O)return;R.value=V.minHeight,w.value=V.maxHeight,E.value=Ge;const nt=Math.abs(V.maxHeight-V.minHeight);nt>0&&(i.value=Math.max(nt/10,.1)),q||o.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),s=new u(A,{lonLat:[p,I],width:zn,height:zn,dimensions:ut,baseHeight:de,minHeight:V.minHeight,maxHeight:V.maxHeight,heightMapSource:q,waterColor:Ue(N,S.value),customParams:new N.Cartesian4(Ne,je,Ze,10),fluidParams:new N.Cartesian4(.9+Ze/10*.099,Math.min(1,je/50),Ne/5e4,$e(Ge,V))}),_.value=p,D.value=I,T.value=!0,(Oe=(Fe=A.scene).requestRender)==null||Oe.call(Fe),o.success("水体流体已创建。")}catch(Ne){o.error("水体流体创建失败",Ne),o.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{ga()}}async function fe(A,N,K){const oe=A==null?void 0:A.terrainProvider,ue=ce(K.dimensions);if(!oe)return null;if(N.EllipsoidTerrainProvider&&oe instanceof N.EllipsoidTerrainProvider)return Te(ue);if(typeof N.sampleTerrain!="function"&&typeof N.sampleTerrainMostDetailed!="function")return null;try{return await be(A,N,K,ue)}catch(xe){if(ue<=tn)throw xe;return be(A,N,K,tn)}}async function be(A,N,K,oe){const ue=G(N,K,oe),xe=await U(N,A.terrainProvider,ue);return De(xe||ue,{size:oe})}function ce(A){const N=Math.max(Number(A==null?void 0:A.x)||0,Number(A==null?void 0:A.y)||0),K=Math.ceil(N/Ho)+1;return B(K,tn,zo)}function B(A,N,K){return Math.max(N,Math.min(K,Math.round(A)))}function G(A,{lon:N,lat:K,centerHeight:oe,dimensions:ue},xe){const p=A.Cartesian3.fromDegrees(N,K,oe),I=A.Transforms.eastNorthUpToFixedFrame(p),Y=[],Z=Math.max(1,xe-1);for(let ve=0;ve<xe;ve++){const Oe=(.5-ve/Z)*ue.y;for(let Ne=0;Ne<xe;Ne++){const Ze=(Ne/Z-.5)*ue.x,q=new A.Cartesian3(Ze,Oe,0),V=A.Matrix4.multiplyByPoint(I,q,new A.Cartesian3);Y.push(A.Cartographic.fromCartesian(V))}}return Y}async function U(A,N,K){const oe=he(N),ue=Number.isInteger(oe)?oe:Math.min((N==null?void 0:N.maximumLevel)??12,12);return typeof A.sampleTerrain=="function"?A.sampleTerrain(N,ue,K):A.sampleTerrainMostDetailed(N,K)}function he(A){const N=Number(A==null?void 0:A._bottomLevel);return Number.isFinite(N)?Math.max(0,N-1):null}function De(A,{size:N}){var ue;const K=Ee(A);if(!K)return null;const oe=new Float32Array(N*N*4);for(let xe=0;xe<N*N;xe++){const p=Number((ue=A[xe])==null?void 0:ue.height),I=xe*4;oe[I]=Number.isFinite(p)?Be(p,K.minHeight,K.maxHeight):K.minHeight,oe[I+1]=0,oe[I+2]=0,oe[I+3]=1}return{width:N,height:N,arrayBufferView:oe,minHeight:K.minHeight,maxHeight:K.maxHeight}}function Te(A){return{width:A,height:A,arrayBufferView:new Float32Array(A*A*4),minHeight:0,maxHeight:0}}function Ee(A){let N=Number.POSITIVE_INFINITY,K=Number.NEGATIVE_INFINITY;for(const oe of A||[]){const ue=Number(oe==null?void 0:oe.height);Number.isFinite(ue)&&(N=Math.min(N,ue),K=Math.max(K,ue))}return!Number.isFinite(N)||!Number.isFinite(K)?null:{minHeight:N,maxHeight:K}}function Re(A,N){const K=Number(A==null?void 0:A.minHeight),oe=Number(A==null?void 0:A.maxHeight);if(Number.isFinite(K)&&Number.isFinite(oe)){const p=Number(N),I=Number.isFinite(p)?Math.min(K,oe,p):Math.min(K,oe),Y=Number.isFinite(p)?Math.max(K,oe,p):Math.max(K,oe),Z=Math.max(Y-I,No);return{baseHeight:I,depth:Z,minHeight:I,maxHeight:I+Z}}const ue=Number(N),xe=Number.isFinite(ue)?ue-Oo:0;return{baseHeight:xe,depth:Un,minHeight:xe,maxHeight:xe+Un}}function He(A,N){const K=A.minHeight+A.depth*Bo,oe=Number(N),ue=Number.isFinite(oe)?oe:K;return Be(ue,A.minHeight,A.maxHeight)}function $e(A,N){const K=N.maxHeight-N.minHeight;return!Number.isFinite(K)||K<=0?0:Be((A-N.minHeight)/K,0,1)}function pe(){return!Number.isFinite(R.value)||!Number.isFinite(w.value)?null:{minHeight:Math.min(R.value,w.value),maxHeight:Math.max(R.value,w.value)}}function Ue(A,N){const K=Ve(N)||Ve("#0d4fa3");return new A.Cartesian3(K.red,K.green,K.blue)}function Ye(){var K;const A=Ve(S.value),N=(K=s==null?void 0:s.config)==null?void 0:K.waterColor;!A||!N||(N.x=A.red,N.y=A.green,N.z=A.blue)}function qe(A){return typeof A=="string"&&/^#[0-9a-f]{6}$/i.test(A)}function Ve(A){return qe(A)?{red:Number.parseInt(A.slice(1,3),16)/255,green:Number.parseInt(A.slice(3,5),16)/255,blue:Number.parseInt(A.slice(5,7),16)/255}:null}function Be(A,N,K){return Math.max(N,Math.min(K,A))}function W(A,N){if(!N)return null;if(A.scene.pickPositionSupported&&typeof A.scene.pickPosition=="function"){const oe=A.scene.pickPosition(N);if(oe)return oe}const K=A.camera.getPickRay(N);return K?A.scene.globe.pick(K,A.scene):null}function H(){var oe,ue,xe;if(!(s!=null&&s.config))return;const A=Number(r.value)||0,N=Number(b.value)||0,K=Number(g.value)||0;s.config.customParams&&(s.config.customParams.x=A,s.config.customParams.y=N,s.config.customParams.z=K),s.config.fluidParams&&(s.config.fluidParams.x=.9+K/10*.099,s.config.fluidParams.y=Math.min(1,N/50),s.config.fluidParams.z=A/5e4),Ye(),(xe=(ue=(oe=s.viewer)==null?void 0:oe.scene)==null?void 0:ue.requestRender)==null||xe.call(ue)}function ne(){var ue,xe,p,I;if(!((ue=s==null?void 0:s.config)!=null&&ue.fluidParams))return;const A=pe(),N=Number(E.value);if(!A||!Number.isFinite(N))return;const K=Be(N,A.minHeight,A.maxHeight);if(K!==N){E.value=K;return}const oe=$e(K,A);typeof s.setInitialWaterLevel=="function"?s.setInitialWaterLevel(oe):(s.config.fluidParams.w=oe,(I=(p=(xe=s.viewer)==null?void 0:xe.scene)==null?void 0:p.requestRender)==null||I.call(p))}function ee(A,N){var K,oe;if(!L){const ue=A.scene;L={shadows:A.shadows,resolutionScale:A.resolutionScale,msaaSamples:ue.msaaSamples,depthTestAgainstTerrain:ue.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:ue.logarithmicDepthBuffer,highDynamicRange:ue.highDynamicRange,fogEnabled:(K=ue.fog)==null?void 0:K.enabled,showGroundAtmosphere:ue.globe.showGroundAtmosphere,skyAtmosphereShow:(oe=ue.skyAtmosphere)==null?void 0:oe.show,enableLighting:ue.globe.enableLighting}}A.shadows=!0,A.resolutionScale=1,A.scene.msaaSamples=4,A.scene.globe.depthTestAgainstTerrain=!0,A.scene.logarithmicDepthBuffer=!0,A.scene.highDynamicRange=!0,A.scene.fog&&(A.scene.fog.enabled=!0),A.scene.globe.showGroundAtmosphere=!0,A.scene.skyAtmosphere&&(A.scene.skyAtmosphere.show=!0),A.scene.globe.enableLighting=!0,!f&&y&&(f=y(N),A.scene.postProcessStages.add(f))}function ie(A){if(!A||!L)return;const N=A.scene;A.shadows=L.shadows,A.resolutionScale=L.resolutionScale,L.msaaSamples!==void 0&&(N.msaaSamples=L.msaaSamples),N.globe.depthTestAgainstTerrain=L.depthTestAgainstTerrain,N.logarithmicDepthBuffer=L.logarithmicDepthBuffer,N.highDynamicRange=L.highDynamicRange,N.fog&&L.fogEnabled!==void 0&&(N.fog.enabled=L.fogEnabled),N.globe.showGroundAtmosphere=L.showGroundAtmosphere,N.skyAtmosphere&&L.skyAtmosphereShow!==void 0&&(N.skyAtmosphere.show=L.skyAtmosphereShow),N.globe.enableLighting=L.enableLighting,L=null}function j(){M.value?re():te()}function te(){const A=pe();if(!A)return;const N=Number(E.value);(!Number.isFinite(N)||N>=A.maxHeight-.01)&&(E.value=A.minHeight),M.value=!0,h=null;function K(oe){if(!M.value)return;h===null&&(h=oe);const ue=Math.min((oe-h)/1e3,.1);h=oe;const xe=pe();if(!xe){re();return}const I=Number(E.value)+i.value*ue;if(I>=xe.maxHeight){E.value=xe.maxHeight,re(),o.info("洪水模拟完成：水位已达最大值");return}E.value=I,c=requestAnimationFrame(K)}c=requestAnimationFrame(K),o.info("洪水模拟开始")}function re(){M.value=!1,h=null,c!==null&&(cancelAnimationFrame(c),c=null)}function se(){re(),We(!1),o.success("水体流体已清除。")}function Se(){m&&(m.destroy(),m=null),C.value=!1}function ze(){if(s){try{s.destroy()}catch{}s=null,T.value=!1}}function We(A){var K,oe,ue;const N=(K=a.getViewer)==null?void 0:K.call(a);if(O+=1,re(),Se(),ze(),_.value=null,D.value=null,E.value=null,R.value=null,w.value=null,N&&f){try{N.scene.postProcessStages.remove(f)}catch{}f=null}A&&N&&ie(N),(ue=(oe=N==null?void 0:N.scene)==null?void 0:oe.requestRender)==null||ue.call(oe)}function Ae(){We(!0),l("close")}function et(A){const N=Number(A);Number.isFinite(N)&&N>0&&(i.value=N)}return t({startPickHeightMap:le,clearFluid:se,toggleFloodSimulation:j,stopFloodSimulation:re,setFloodSpeed:et}),(A,N)=>e.headless?we("",!0):(ae(),me("div",Co,[v("div",Po,[v("div",{class:"panel-head"},[N[0]||(N[0]=v("span",{class:"panel-title"},"水体流体",-1)),v("button",{class:"panel-close",title:"关闭",onClick:Ae}," × ")]),v("div",ko,[v("button",{class:Ke(["action-btn primary",{active:C.value}]),onClick:le},_e(C.value?"等待选点":"捕捉高度图"),3),v("button",{class:"action-btn",disabled:!T.value&&!C.value,onClick:se}," 清除 ",8,Io)]),d.value?(ae(),me("div",Ro,_e(d.value),1)):we("",!0),Pe(yn,{class:"param-list",title:"Fluid Parameters",controls:x.value,onChange:$},null,8,["controls"])])]))}},Wo=it(Uo,[["__scopeId","data-v-2de8b792"]]),Go=`
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
`;function Wn(e,t){e.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uCaustic=t.uCaustic,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vCWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+Go).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  float cDepth = smoothstep( 0.0, -2.0, vCWorld.y );
  float caus = causticX( vCWorld.xz * 0.06 );
  caus += causticX( vCWorld.xz * 0.13 + 40.0 ) * 0.6;
  totalEmissiveRadiance += vec3( 0.45, 0.85, 0.8 ) * caus * cDepth * uCaustic;`)}}const $o=`
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
`,jo=`
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
`,qo=`
  varying vec3 vWorldPos;

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Vo=`
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
`;function Xo(e=256){const t=new Float32Array(e*e);for(let w=0;w<e*e;w++)t[w]=Math.random();const n=(w,C)=>{const T=new Float32Array(e*e);for(let _=0;_<e;_++)for(let D=0;D<e;D++){let M=0,i=0;for(let c=-C;c<=C;c++)for(let h=-C;h<=C;h++)M+=w[(_+c+e)%e*e+(D+h+e)%e],i++;T[_*e+D]=M/i}return T},a=n(t,4),l=n(t,1),o=new Float32Array(e*e);for(let w=0;w<e*e;w++)o[w]=a[w]*.7+l[w]*.3;const r=document.createElement("canvas");r.width=r.height=e;const b=r.getContext("2d"),g=b.createImageData(e,e),S=(w,C)=>o[(C+e)%e*e+(w+e)%e],E=3;for(let w=0;w<e;w++)for(let C=0;C<e;C++){const T=(S(C-1,w)-S(C+1,w))*E,_=(S(C,w-1)-S(C,w+1))*E,D=Math.hypot(T,_,1),M=(w*e+C)*4;g.data[M]=(T/D*.5+.5)*255,g.data[M+1]=(_/D*.5+.5)*255,g.data[M+2]=(1/D*.5+.5)*255,g.data[M+3]=255}b.putImageData(g,0,0);const R=new pn(r);return R.wrapS=R.wrapT=gn,R.colorSpace=ba,R}function Ko(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#d8c79b",t.fillRect(0,0,512,512);for(let a=0;a<12e3;a++){const l=170+Math.random()*70|0;t.fillStyle=`rgba(${l},${l-22},${l-65},0.22)`,t.fillRect(Math.random()*512,Math.random()*512,1.6,1.6)}for(let a=0;a<26;a++){const l=60+Math.random()*40|0,o=90+Math.random()*50|0,r=70+Math.random()*40|0;t.fillStyle=`rgba(${l},${o},${r},0.30)`,t.beginPath(),t.ellipse(Math.random()*512,Math.random()*512,8+Math.random()*26,6+Math.random()*20,Math.random()*6,0,7),t.fill()}const n=new pn(e);return n.wrapS=n.wrapT=gn,n.repeat.set(10,10),n.colorSpace=Va,n}function Yo(e=256){const t=(S,E)=>{const R=new Float32Array(e*e);for(let w=0;w<e;w++)for(let C=0;C<e;C++){let T=0,_=0;for(let D=-E;D<=E;D++)for(let M=-E;M<=E;M++)T+=S[(w+D+e)%e*e+(C+M+e)%e],_++;R[w*e+C]=T/_}return R},n=()=>{const S=new Float32Array(e*e);for(let _=0;_<e*e;_++)S[_]=Math.random();const E=t(S,3),R=t(S,1),w=new Float32Array(e*e);let C=1e9,T=-1e9;for(let _=0;_<e*e;_++)w[_]=E[_]*.65+R[_]*.35,C=Math.min(C,w[_]),T=Math.max(T,w[_]);for(let _=0;_<e*e;_++)w[_]=(w[_]-C)/(T-C);return w},a=n(),l=n(),o=document.createElement("canvas");o.width=o.height=e;const r=o.getContext("2d"),b=r.createImageData(e,e);for(let S=0;S<e*e;S++){const E=S*4;b.data[E]=a[S]*255,b.data[E+1]=l[S]*255,b.data[E+2]=0,b.data[E+3]=255}r.putImageData(b,0,0);const g=new pn(o);return g.wrapS=g.wrapT=gn,g.colorSpace=ba,g.minFilter=Pn,g.magFilter=Pn,g.generateMipmaps=!1,g}function Zo(e={}){const{onReady:t,onError:n,onFpsUpdate:a}=e,l=Q(!1),o=Q(0);let r=null,b=null,g=null,S=null,E=null,R=null,w=null,C=null,T=null,_=null,D=null,M=null,i=null;const c=new rt;let h=null,u=null,y=null;const m=new Xa;let s=0,f=0;const L={value:0},O={value:.9},d={value:0},F={value:new rt};let P=3,x=-100;const k=.62,z={};let $=!0,X=null;const le=new kn,J={elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2};async function fe(j){if(!j){n==null||n(new Error("Container element not provided"));return}if(!l.value){R=j;try{g=new Ka({antialias:!0,alpha:!0}),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setSize(R.clientWidth,R.clientHeight),g.toneMapping=Ya,g.toneMappingExposure=k,g.setClearColor(0,0),R.appendChild(g.domElement),r=new kn,b=new Za(55,R.clientWidth/R.clientHeight,1,2e4),b.position.set(0,55,280),be(),De(),Te(),ce(),B(),G(),U(),he(),$e(),pe(),Ve(),l.value=!0,t==null||t()}catch(te){n==null||n(te)}}}function be(){M=new Ja,M.scale.setScalar(12e3),r.add(M);const j=M.material.uniforms;j.turbidity.value=6,j.rayleigh.value=1.6,j.mieCoefficient.value=.005,j.mieDirectionalG.value=.8}function ce(){i=new ii(16774368,2.6),r.add(i),r.add(new ri(13627391,2117738,.7))}function B(){const j=new Rn(1600,1600,200,200);j.rotateX(-Math.PI/2);const te=j.attributes.position;for(let se=0;se<te.count;se++){const Se=te.getX(se),ze=te.getZ(se);let Ae=-34+Rt.clamp((ze+800)/1600,0,1)*44;Ae+=Math.sin(Se*.012)*Math.cos(ze*.014)*3.5,Ae+=Math.sin(Se*.06+ze*.05)*1.1,Ae+=(Math.random()-.5)*.6,te.setY(se,Ae)}j.computeVertexNormals();const re=new On({map:Ko(),roughness:1,metalness:0});Wn(re,{uTime:L,uCaustic:O}),r.add(new Mt(j,re))}function G(){const j=new oi(1,0),te=[8023642,7035722,11887946,13598051,9083483];for(let re=0;re<30;re++){const se=new On({color:te[re%te.length],roughness:.9,flatShading:!0});Wn(se,{uTime:L,uCaustic:O});const Se=new Mt(j,se),ze=3+Math.random()*9;Se.scale.set(ze,ze*(.5+Math.random()*.6),ze),Se.position.set((Math.random()-.5)*1100,-24+Math.random()*22,-300+Math.random()*900),Se.rotation.set(Math.random(),Math.random(),Math.random()),r.add(Se)}}function U(){D=new si(g),_=new li(256,{generateMipmaps:!0,minFilter:ci}),T=new ui(1,2e4,_),T.position.set(0,4,0),r.add(T);const j=new en;g.getDrawingBufferSize(j),C=new di(j.x,j.y),C.depthTexture=new hi(j.x,j.y),C.depthTexture.type=fi,C.depthTexture.format=mi}function he(){const j=new en;g.getDrawingBufferSize(j);const te=Xo(256),re={uTime:L,tRefraction:{value:C.texture},tDepth:{value:C.depthTexture},tEnv:{value:_.texture},normalMap:{value:te},resolution:{value:j.clone()},cameraNear:{value:b.near},cameraFar:{value:b.far},invProjection:{value:new Nn},camWorld:{value:new Nn},sunDirection:{value:new rt},sunColor:{value:new Tt(16774106)},waterColor:{value:new Tt(J.waterColor)},absorption:{value:new rt(.45,.09,.05)},foamColor:{value:new Tt(15925247)},clarity:{value:J.clarity},foamWidth:{value:J.foamWidth},waveHeight:{value:J.waveHeight},reflection:{value:J.reflection}};w=new Mt(new Rn(16e3,16e3,384,384),new In({uniforms:re,vertexShader:$o,fragmentShader:jo})),w.rotation.x=-Math.PI/2,r.add(w)}function De(){const j=new In({side:Qa,transparent:!0,depthWrite:!1,uniforms:{uTime:L,uNoise:{value:Yo(256)},sunDirection:{value:new rt},sunColor:{value:new Tt(16773341)},skyTint:{value:new Tt(7315406)},uCoverage:{value:J.cloudCoverage},uFlash:d,uFlashPos:F},vertexShader:qo,fragmentShader:Vo});h=new Mt(new ei(8e3,32,16),j),h.renderOrder=2,r.add(h)}function Te(){y=new ti({color:14478335,transparent:!0,opacity:0,blending:ni,depthWrite:!1,depthTest:!1}),u=new ai,u.visible=!1,r.add(u)}function Ee(j,te,re,se,Se,ze){const We=[];let Ae=j,et=te;const A=Math.max(5,Math.floor((re-se)/80));for(let oe=0;oe<=A;oe++){const ue=oe/A;We.push(new rt(Ae,re+(se-re)*ue,et)),Ae+=(Math.random()-.5)*Se,et+=(Math.random()-.5)*Se}const N=new gi(new vi(We),A*4,ze,5,!1),K=new Mt(N,y);return K.renderOrder=3,u.add(K),We}function Re(){for(const se of u.children)se.geometry.dispose();u.clear();const j=1+Math.floor(Math.random()*3);let te=0,re=0;for(let se=0;se<j;se++){const Se=(Math.random()-.5)*5e3,ze=-(1e3+Math.random()*4500);se===0&&(te=Se,re=ze);const We=Ee(Se,ze,1180,18,110,14),Ae=2+Math.floor(Math.random()*3);for(let et=0;et<Ae;et++){const A=We[2+Math.floor(Math.random()*(We.length-4))];Ee(A.x,A.z,A.y,A.y-(160+Math.random()*420),130,7)}}F.value.set(te,1100,re)}function He(){if(!J.lightningEnabled){d.value=0,u.visible=!1,g.toneMappingExposure=k;return}const j=L.value;j>=P&&(x=j,Re(),P=j+J.lightningInterval*(.4+Math.random()*.8));const te=j-x;let re=0;te>=0&&te<.5&&(re=Math.max(0,Math.exp(-te*5.5)*(.5+.5*Math.sin(te*60)))),d.value=re*2.4,u.visible=re>.1,y.opacity=Math.min(1,re*1.7),g.toneMappingExposure=k+re*.75}function $e(){S=new pi(b,g.domElement),S.target.set(0,130,-400),S.maxPolarAngle=Math.PI*.49,S.minDistance=30,S.maxDistance=2e3,S.enableDamping=!0}function pe(){window.addEventListener("keydown",Ue),window.addEventListener("keyup",Ye)}function Ue(j){const te=j.target&&j.target.tagName;te==="INPUT"||te==="TEXTAREA"||(z[j.code]=!0)}function Ye(j){z[j.code]=!1}function qe(j){const te=(z.ShiftLeft||z.ShiftRight?240:95)*j,re=new rt,se=new rt,Se=new rt;b.getWorldDirection(re).normalize(),se.crossVectors(re,b.up).normalize(),Se.set(0,0,0),z.KeyW&&Se.add(re),z.KeyS&&Se.addScaledVector(re,-1),z.KeyD&&Se.add(se),z.KeyA&&Se.addScaledVector(se,-1),z.KeyE&&(Se.y+=1),z.KeyQ&&(Se.y-=1),Se.lengthSq()!==0&&(Se.normalize().multiplyScalar(te),b.position.add(Se),S.target.add(Se),b.position.y<2.5&&(b.position.y=2.5))}function Ve(){const j=Rt.degToRad(90-J.elevation),te=Rt.degToRad(J.azimuth);if(c.setFromSphericalCoords(1,j,te),M.material.uniforms.sunPosition.value.copy(c),i.position.copy(c).multiplyScalar(1e3),w&&w.material.uniforms.sunDirection.value.copy(c).normalize(),h){h.material.uniforms.sunDirection.value.copy(c).normalize();const re=Rt.clamp(1-J.elevation/28,0,1);h.material.uniforms.sunColor.value.setRGB(1,.95-.22*re,.86-.48*re)}r.remove(M),le.add(M),X&&X.dispose(),X=D.fromScene(le),r.environment=X.texture,le.remove(M),r.add(M),$=!0}function Be(){E=requestAnimationFrame(Be);const j=m.getDelta();L.value+=j,O.value=J.causticStrength,qe(j),He(),S.update(),b.updateMatrixWorld(),w.material.uniforms.invProjection.value.copy(b.projectionMatrixInverse),w.material.uniforms.camWorld.value.copy(b.matrixWorld),w.visible=!1,$&&(T.update(g,r),$=!1),h.visible=!1;const te=u.visible;u.visible=!1,g.setRenderTarget(C),g.render(r,b),g.setRenderTarget(null),h.visible=!0,u.visible=te,w.visible=!0,g.render(r,b),s++;const re=performance.now();re-f>=1e3&&(o.value=Math.round(s*1e3/(re-f)),a==null||a(o.value),s=0,f=re)}function W(){if(!b||!g||!R)return;const j=R.clientWidth,te=R.clientHeight;b.aspect=j/te,b.updateProjectionMatrix(),g.setSize(j,te);const re=new en;g.getDrawingBufferSize(re),C.setSize(re.x,re.y),w.material.uniforms.resolution.value.copy(re)}function H(){E||(m.start(),Be())}function ne(){E&&(cancelAnimationFrame(E),E=null)}function ee(j){const te={...J};Object.assign(J,j),(j.elevation!==te.elevation||j.azimuth!==te.azimuth)&&Ve(),w&&(j.clarity!==te.clarity&&(w.material.uniforms.clarity.value=j.clarity),j.waveHeight!==te.waveHeight&&(w.material.uniforms.waveHeight.value=j.waveHeight),j.foamWidth!==te.foamWidth&&(w.material.uniforms.foamWidth.value=j.foamWidth),j.reflection!==te.reflection&&(w.material.uniforms.reflection.value=j.reflection),j.waterColor!==te.waterColor&&w.material.uniforms.waterColor.value.set(j.waterColor)),j.causticStrength!==te.causticStrength&&(O.value=j.causticStrength),j.cloudCoverage!==te.cloudCoverage&&h&&(h.material.uniforms.uCoverage.value=j.cloudCoverage)}function ie(){ne(),window.removeEventListener("keydown",Ue),window.removeEventListener("keyup",Ye),g&&(g.dispose(),R==null||R.removeChild(g.domElement)),r==null||r.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&(Array.isArray(j.material)?j.material.forEach(te=>te.dispose()):j.material.dispose())}),C==null||C.dispose(),_==null||_.dispose(),X==null||X.dispose(),D==null||D.dispose(),r=null,b=null,g=null,S=null,w=null,M=null,i=null,h=null,u=null,y=null,l.value=!1}return $t(()=>{ie()}),{isReady:l,fps:o,init:fe,start:H,pause:ne,dispose:ie,handleResize:W,updateParams:ee}}const Jo={__name:"ShallowWaterOverlay",props:{visible:{type:Boolean,default:!1},elevation:{type:Number,default:30},azimuth:{type:Number,default:150},clarity:{type:Number,default:.085},causticStrength:{type:Number,default:.9},waterColor:{type:String,default:"#2bb3c4"},waveHeight:{type:Number,default:.5},foamWidth:{type:Number,default:2.4},reflection:{type:Number,default:.38},cloudCoverage:{type:Number,default:.58},lightningEnabled:{type:Boolean,default:!0},lightningInterval:{type:Number,default:2}},emits:["ready","error","fps-update"],setup(e,{expose:t,emit:n}){const a=e,l=n,o=Q(null),{isReady:r,fps:b,init:g,start:S,pause:E,dispose:R,handleResize:w,updateParams:C}=Zo({onReady:()=>l("ready"),onError:M=>l("error",M),onFpsUpdate:M=>l("fps-update",M)});Ie(()=>a.visible,async M=>{M?(await T(),S()):E()}),Ie(()=>[a.elevation,a.azimuth,a.clarity,a.causticStrength,a.waterColor,a.waveHeight,a.foamWidth,a.reflection,a.cloudCoverage,a.lightningEnabled,a.lightningInterval],()=>{_()});async function T(){!o.value||r.value||(await g(o.value),_())}function _(){C({elevation:a.elevation,azimuth:a.azimuth,clarity:a.clarity,causticStrength:a.causticStrength,waterColor:a.waterColor,waveHeight:a.waveHeight,foamWidth:a.foamWidth,reflection:a.reflection,cloudCoverage:a.cloudCoverage,lightningEnabled:a.lightningEnabled,lightningInterval:a.lightningInterval})}function D(){w()}return dn(()=>{window.addEventListener("resize",D),a.visible&&T()}),$t(()=>{window.removeEventListener("resize",D),R()}),t({isReady:r,fps:b,start:S,pause:E}),(M,i)=>tt((ae(),me("div",{ref_key:"canvasContainerRef",ref:o,class:"shallow-water-overlay"},null,512)),[[pt,e.visible]])}},Qo=it(Jo,[["__scopeId","data-v-e9c0d469"]]),bn="https://cdn.jsdelivr.net/npm/cesium@1.132/Build/Cesium/",es=`${bn}Cesium.js`,ts=`${bn}Widgets/widgets.css`;async function ns({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=bn),await is(ts,"cesium-widgets-style"),await as(es,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Ut(t,e),t}function Ut(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function as(e,t){return new Promise((n,a)=>{const l=document.getElementById(t);if(l){if(l.getAttribute("data-loaded")==="true"){n();return}l.addEventListener("load",()=>n(),{once:!0}),l.addEventListener("error",()=>a(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const o=document.createElement("script");o.id=t,o.src=e,o.async=!0,o.onload=()=>{o.setAttribute("data-loaded","true"),n()},o.onerror=()=>a(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(o)})}function is(e,t){return new Promise((n,a)=>{if(document.getElementById(t)){n();return}const o=document.createElement("link");o.id=t,o.rel="stylesheet",o.href=e,o.onload=()=>n(),o.onerror=()=>a(new Error(`样式加载失败: ${e}`)),document.head.appendChild(o)})}const rs="Asia/Shanghai",os="UTC+8",ss=new Intl.DateTimeFormat("zh-CN",{timeZone:rs,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function ls(e,t){var n,a,l,o,r,b,g;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...S)=>us(e,t,...S),e.animation.viewModel.timeFormatter=(...S)=>ds(e,t,...S)),e.timeline){const S=(...E)=>hs(e,t,...E);e.timeline.makeLabel=S,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=S),(l=(a=e.timeline).updateFromClock)==null||l.call(a),(r=(o=e.timeline).zoomTo)==null||r.call(o,e.clock.startTime,e.clock.stopTime)}(g=(b=e.scene).requestRender)==null||g.call(b)}}function xn(e,t,...n){var b;const a=n.find(cs)||((b=e==null?void 0:e.clock)==null?void 0:b.currentTime);if(!a)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const l=t.JulianDate.toDate(a),o=ss.formatToParts(l),r=Object.fromEntries(o.filter(({type:g})=>g!=="literal").map(({type:g,value:S})=>[g,S]));return{year:r.year||"0000",month:r.month||"01",day:r.day||"01",hour:r.hour||"00",minute:r.minute||"00",second:r.second||"00"}}function cs(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function us(e,t,...n){const{year:a,month:l,day:o}=xn(e,t,...n);return`${a}-${l}-${o}`}function ds(e,t,...n){const{hour:a,minute:l,second:o}=xn(e,t,...n);return`${a}:${l}:${o} ${os}`}function hs(e,t,...n){const{month:a,day:l,hour:o,minute:r}=xn(e,t,...n);return`${a}-${l} ${o}:${r}`}function fs({getViewer:e}){let t=null,n=null;function a(){var b;const r=e==null?void 0:e();if(r&&((b=r._cesiumWidget)!=null&&b._creditContainer&&(r._cesiumWidget._creditContainer.style.display="none"),l(),t=setInterval(()=>{const g=document.querySelector(".cesium-credit-container");g&&g.innerHTML.length>0&&(g.innerHTML="",g.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const g=document.createElement("style");g.id="cesium-credit-override",g.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(g),n=g}}function l(){var g;const r=e==null?void 0:e();if(!r)return;(g=r._cesiumWidget)!=null&&g._creditContainer&&(r._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",r._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(S=>{S.style.cssText="display: none !important; visibility: hidden !important;",S.innerHTML=""}),r.scene&&r.scene.frameState&&r.scene.frameState.creditDisplay&&(r.scene.frameState.creditDisplay.hasCredits=()=>!1,r.scene.frameState.creditDisplay.destroy=()=>{})}function o(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:a,cleanupCreditHider:o}}const nn="经度: --, 纬度: --, 海拔: --米";function ms({getViewer:e,getCesium:t,onCoordinatePick:n}){let a=null,l=null,o=null;const r=Q("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function b(){const C=e==null?void 0:e(),T=t==null?void 0:t();!C||!T||(w(),l=C.scene.canvas,a=new T.ScreenSpaceEventHandler(l),o=()=>{r.value=nn},l.addEventListener("mouseleave",o),a.setInputAction(_=>{g(_.endPosition,C,T)},T.ScreenSpaceEventType.MOUSE_MOVE),a.setInputAction(_=>{const D=_.endPosition,M=_.startPosition;if(!T.defined(C.terrainProvider))return;const i=C.scene.globe.ellipsoid;if(!C.camera.pickEllipsoid(M,i)){const h=C.camera;h.rotate(T.Cartesian3.UNIT_X,-.002*(D.y-M.y)),h.rotate(T.Cartesian3.UNIT_Y,-.002*(D.x-M.x))}},T.ScreenSpaceEventType.RIGHT_DRAG),a.setInputAction(()=>{},T.ScreenSpaceEventType.RIGHT_DOWN),a.setInputAction(()=>{},T.ScreenSpaceEventType.RIGHT_UP))}function g(C,T,_){const D=S(C,T,_);if(!D){r.value=nn;return}const M=_.Cartographic.fromCartesian(D);if(!M||!Number.isFinite(M.longitude)||!Number.isFinite(M.latitude)){r.value=nn;return}const i=_.Math.toDegrees(M.longitude).toFixed(6),c=_.Math.toDegrees(M.latitude).toFixed(6),h=(Number.isFinite(M.height)?M.height:0).toFixed(2);r.value=`经度: ${i}, 纬度: ${c}, 海拔: ${h}米`,typeof n=="function"&&n({lng:Number(i),lat:Number(c),height:Number(h)})}function S(C,T,_){if(!C)return null;const D=T.scene,M=E(C,D,_);if(M)return M;const i=T.camera.getPickRay(C);if(i){const h=D.globe.pick(i,D);if(R(h))return h}const c=T.camera.pickEllipsoid(C,D.globe.ellipsoid);return R(c)?c:null}function E(C,T,_){if(!T.pickPositionSupported||typeof T.pickPosition!="function")return null;const D=typeof T.pick=="function"?T.pick(C):null;if(!_.defined(D))return null;const M=T.pickPosition(C);return R(M)?M:null}function R(C){return!!C&&Number.isFinite(C.x)&&Number.isFinite(C.y)&&Number.isFinite(C.z)}function w(){o&&l&&(l.removeEventListener("mouseleave",o),o=null),l=null,a&&(a.destroy(),a=null)}return{coordinateDisplay:r,setupInteractions:b,cleanupInteractions:w}}function Gn(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function ps(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function _t(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function Dt(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function $n(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:a,Resource:l,HeightmapTerrainData:o,Rectangle:r,TileAvailability:b,CustomHeightmapTerrainProvider:g}=e;function S(C,T,_,D,M,i){const c=C.tileXYToRectangle(_,D,M);return t(r.intersection(c,T,i))}function E(C){const T=[[[0,0,1,0]]],_=new b(C.tilingScheme,19);for(let D=0;D<T.length;D++){const M=T[D];for(let i=0;i<M.length;i++){const c=M[i];_.addAvailableTileRange(D,c[0],c[1],c[2],c[3])}}return _}function R(C,T,_,D,M){const i=new o({buffer:C._transformBuffer(T),width:C._width,height:C._height,childTileMask:C._getChildTileMask(D,M,_),structure:C._terrainDataStructure});return i._skirtHeight=6e3,C.availability.addAvailableTileRange(_,D,M,D,M),i}class w extends g{constructor(T={}){if(super({...T,ellipsoid:a.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(T.url))throw new n("options.url is required.");this._dataType=T.dataType??"int16",this._url=T.url,this._subdomains=T.subdomains,this._token=T.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=E(this)}get availability(){return this._availability}requestTileGeometry(T,_,D,M){if(D>=this._bottomLevel)return Promise.reject(new Error(`Level ${D} is outside supported range.`));if(D<this._topLevel)return Promise.resolve(new o({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(T,_,D),structure:this._terrainDataStructure}));let i=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const h=this._subdomains[(T+_)%this._subdomains.length];i=i.replace("{s}",h)}i=i.replace("{token}",this._token).replace("{x}",T).replace("{y}",_).replace("{z}",D+1);const c=l.fetchArrayBuffer({url:i,request:M});if(c)return c.then(h=>h.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):yi.inflate(h)).then(h=>R(this,h,D,T,_))}getTileDataAvailable(T,_,D){return D<this._bottomLevel}_transformBuffer(T){let _=2;this._dataType==="float"&&(_=4);const D=T;if(D.length!==22500*_)return null;const M=new ArrayBuffer(_),i=new DataView(M),c=this._width,h=this._height,u=new Uint8Array(c*h*4);for(let y=0;y<h;y++)for(let m=0;m<c;m++){const s=Math.floor(149*y/(h-1)),f=Math.floor(149*m/(c-1)),L=_*(150*s+f);let O;_===4?(i.setInt8(0,D[L]),i.setInt8(1,D[L+1]),i.setInt8(2,D[L+2]),i.setInt8(3,D[L+3]),O=i.getFloat32(0,!0)):O=D[L]+256*D[L+1],(O>1e4||O<-2e3)&&(O=0);const d=(O+1e3)/.001,F=4*(y*c+m);u[F]=d/65536,u[F+1]=(d-256*u[F]*256)/256,u[F+2]=d-256*u[F]*256-256*u[F+1],u[F+3]=255}return u}_getVHeightBuffer(){let T=this._vHeightBuffer;if(!t(T)){T=new Uint8ClampedArray(this._width*this._height*4);for(let _=0;_<this._width*this._height*4;)T[_++]=15,T[_++]=66,T[_++]=64,T[_++]=255;this._vHeightBuffer=T}return T}_getChildTileMask(T,_,D){const M=new r,i=this._tilingScheme,c=this._rectangles,h=i.tileXYToRectangle(T,_,D);let u=0;for(let y=0;y<c.length&&u!==15;y++){const m=c[y];if(m.maxLevel<=D)continue;const s=m.rectangle,f=r.intersection(s,h,M);t(f)&&(S(i,s,2*T,2*_,D+1,M)&&(u|=4),S(i,s,2*T+1,2*_,D+1,M)&&(u|=8),S(i,s,2*T,2*_+1,D+1,M)&&(u|=1),S(i,s,2*T+1,2*_+1,D+1,M)&&(u|=2))}return u}}return w}function gs(e){if(!e)throw new Error("Cesium is required to create ArcGISTerrainProvider.");const{TileAvailability:t}=e;class n{constructor(o){this._inner=o,this._availability=null,this._initAvailability()}_initAvailability(){const o=this._inner.tilingScheme;if(!o)return;const r=this._inner.maximumLevel??15;this._availability=new t(o,r);for(let b=0;b<=r;b++){const g=1<<b;this._availability.addAvailableTileRange(b,0,0,g-1,g-1)}}get availability(){return this._availability||this._initAvailability(),this._availability}get tilingScheme(){return this._inner.tilingScheme}get maximumLevel(){return this._inner.maximumLevel}get requestWaterMask(){return this._inner.requestWaterMask}get requestVertexNormals(){return this._inner.requestVertexNormals}get ready(){return this._inner.ready}get readyPromise(){return this._inner.readyPromise}get errorEvent(){return this._inner.errorEvent}get credit(){return this._inner.credit}getTileDataAvailable(o,r,b){const g=this._inner.maximumLevel??15;return b<=g}requestTileGeometry(o,r,b,g){return this._inner.requestTileGeometry(o,r,b,g)}getLevelMaximumGeometricError(o){return this._inner.getLevelMaximumGeometricError(o)}loadTileDataAvailability(o,r,b){if(typeof this._inner.loadTileDataAvailability=="function")return this._inner.loadTileDataAvailability(o,r,b)}}async function a(l){const o=await e.ArcGISTiledElevationTerrainProvider.fromUrl(l);return new n(o)}return n.fromUrl=a,n}function vs({getViewer:e,getCesium:t,activeBasemap:n,applyBasemap:a,resolvePresetLayerIds:l,message:o,validationTimeoutMs:r=5e3,circuitBreakThreshold:b=3}){const g=new Map,S=new Set,E={value:!1};let R=null,w=[],C=[];function T(u,y={}){return u?S.has(u)&&!y.forceReload?(E.value=!0,!1):a(u,y)?(_(u),!0):(D(u),!1):!1}function _(u){var d,F;i();const y=e==null?void 0:e();if(!(y!=null&&y.imageryLayers))return;const m=l(u),s=[];for(let P=0;P<y.imageryLayers.length;P++){const x=y.imageryLayers.get(P);(d=x==null?void 0:x.imageryProvider)!=null&&d._descriptorId&&m.includes(x.imageryProvider._descriptorId)&&s.push(x)}if(!s.length)return;w=s;let f=!1;const L=()=>{f=!0,i(),g.delete(u),S.has(u)&&(S.delete(u),E.value=S.size>0)},O=P=>{f||(D(u),i())};for(const P of w){const x=P.imageryProvider;if(x!=null&&x.errorEvent&&(x.errorEvent.addEventListener(O),C.push(()=>x.errorEvent.removeEventListener(O))),x!=null&&x.ready){L();return}(F=x==null?void 0:x.readyPromise)!=null&&F.then&&x.readyPromise.then(L).catch(O)}R=setTimeout(()=>{f||D(u)},r)}function D(u){const y=(g.get(u)||0)+1;g.set(u,y),y>=b&&(S.add(u),E.value=!0,M(u))}function M(u){var m,s,f,L,O;const y="custom_China_Blender_preset_2";if(u===y){const d="imagery_tianditu_preset";S.has(d)?(s=o==null?void 0:o.error)==null||s.call(o,"所有底图均加载失败，请检查网络",{closable:!0}):((m=o==null?void 0:o.warning)==null||m.call(o,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=d);return}if(!S.has(y))(f=o==null?void 0:o.warning)==null||f.call(o,"底图加载失败，已降级到默认底图",{closable:!0}),n.value=y;else{const d="imagery_tianditu_preset";S.has(d)?(O=o==null?void 0:o.error)==null||O.call(o,"所有底图均加载失败，请检查网络",{closable:!0}):((L=o==null?void 0:o.warning)==null||L.call(o,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=d)}}function i(){R&&(clearTimeout(R),R=null);for(const u of C)try{u()}catch{}C=[],w=[]}function c(){g.clear(),S.clear(),E.value=!1,i()}function h(){i(),g.clear(),S.clear(),E.value=!1}return{switchBasemap:T,resetCircuitBreaker:c,isCircuitOpen:E,cleanup:h}}const Lt=["0","1","2","3","4","5","6","7"],Ft="https://t{s}.tianditu.gov.cn/",ys="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",bs=96188,Ct="custom-xyz",jn="webgis_custom_basemap_url",xs="cesium_tdt_label_layer_visible",qn="cesium_tdt_boundary_layer_visible",Vn="cesium_tdt_text_label_layer_visible",Xn="cesium_osm_buildings_visible",Kn="cesium_google_photorealistic_3d_tiles_visible";function Ss(){return Ea.map(e=>({...e,description:ws(e.value),source:"preset"}))}function ws(e){const t=Pt(e);if(!t.length)return"复合底图";const n=t.map(a=>{const l=vn(a);return l?l.name:a});return n.slice(0,3).join(" + ")+(n.length>3?" ...":"")}const Yn=Ss(),Zn=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function _s({getViewer:e,getCesium:t,message:n,backendBaseUrl:a,tiandituToken:l,cesiumIonToken:o}){let r=null,b=null,g=null,S=null,E=0,R=null,w=null,C=0,T=0,_=[];const D=()=>Jn(l),M=()=>Jn(o),i=[],c=Q([]),h=new Map,u=new Map,y=new Map,m=new Map,s="cesium_custom_xyz_basemap_url",f=Q(Tn),L=Q("tianditu"),O=Q(Gn(jn,"")||Gn(s,"")),d=_t(xs,!1),F=Q(_t(qn,d??!1)),P=Q(_t(Vn,d??!1)),x=Q(_t(Xn,!1)),k=Q(_t(Kn,!1)),z=ke(()=>[...Yn.map(p=>p.value!=="custom"?p:{...p,description:O.value?O.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!O.value}),...c.value]),$=vs({getViewer:e,getCesium:t,activeBasemap:f,applyBasemap:Se,resolvePresetLayerIds:Pt,message:n}),X=ke(()=>$.isCircuitOpen.value),le=ke(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:F.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:P.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:x.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:k.value}]);Ie(f,p=>{!(e!=null&&e())||!(t!=null&&t())||Se(p)}),Ie(O,p=>{ps(jn,p)}),Ie(L,async p=>{!(e!=null&&e())||!(t!=null&&t())||await We(p)}),Ie(F,p=>{Dt(qn,p),qe()}),Ie(P,p=>{Dt(Vn,p),qe()}),Ie(x,p=>{Dt(Xn,p),ne()}),Ie(k,p=>{Dt(Kn,p),ee()});function J(){const p=t==null?void 0:t();if(!p)return[];h.clear(),u.clear();const I=Yn.map(Z=>{const ve=new p.ProviderViewModel({name:Z.label,tooltip:Fs(Z),category:"项目底图",iconUrl:ta(Es(Z.value),As(Z.value,Z.label)),creationFunction:()=>G(Z.value)});return h.set(Z.value,ve),u.set(ve,Z.value),ve}),Y=B();return c.value=Y.map((Z,ve)=>{const Fe=String((Z==null?void 0:Z.name)||`官方底图 ${ve+1}`).trim(),Oe=Ps(Fe,ve);return h.set(Oe,Z),u.set(Z,Oe),{value:Oe,label:`官方 · ${Fe}`,description:String((Z==null?void 0:Z.tooltip)||Fe),source:"official"}}),[...I,...Y]}function fe(){const p=t==null?void 0:t();return p?(y.clear(),m.clear(),Zn.map(I=>{const Y=new p.ProviderViewModel({name:I.label,tooltip:I.description||I.label,category:"项目地形",iconUrl:ta(Ts(I.value),Ms(I.value)),creationFunction:()=>et(I.value)});return y.set(I.value,Y),m.set(Y,I.value),Y})):[]}function be(p=[]){return h.get(f.value)||p[0]}function ce(p=[]){return y.get(L.value)||p[0]}function B(){const p=t==null?void 0:t();if(typeof(p==null?void 0:p.createDefaultImageryProviderViewModels)!="function")return[];try{return p.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function G(p){return Pt(p).length>0?U(p):p==="google"?De():p===Ct?Te():he()}function U(p){const I=t==null?void 0:t();if(!I)return[];const Y=Pt(p);if(!Y.length)return he();const Z=D(),ve=O.value;return Ci(I,Y,{tiandituTk:Z,customUrl:ve})}function he(){const p=t==null?void 0:t();return[new p.UrlTemplateImageryProvider({url:`${Ft}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${D()}`,subdomains:Lt,tilingScheme:new p.WebMercatorTilingScheme,maximumLevel:18})]}function De(){const p=t==null?void 0:t();return[new p.UrlTemplateImageryProvider({url:`${a}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new p.WebMercatorTilingScheme,maximumLevel:20})]}function Te(){const p=t==null?void 0:t(),I=ea(O.value);return I.valid?[new p.UrlTemplateImageryProvider({url:I.url,subdomains:I.subdomains,tilingScheme:new p.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(I.message,{closable:!0}),he())}function Ee(){const p=t==null?void 0:t();return new p.UrlTemplateImageryProvider({url:`${Ft}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${D()}`,subdomains:Lt,tilingScheme:new p.WebMercatorTilingScheme,maximumLevel:10})}function Re(){const p=t==null?void 0:t();return new p.UrlTemplateImageryProvider({url:`${Ft}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${D()}`,subdomains:Lt,tilingScheme:new p.WebMercatorTilingScheme,maximumLevel:18})}function He(){var Ne,je,Ze,q,V;$e();const p=t==null?void 0:t(),I=(je=(Ne=e==null?void 0:e())==null?void 0:Ne.baseLayerPicker)==null?void 0:je.viewModel;if(!I||!((Ze=p==null?void 0:p.knockout)!=null&&Ze.getObservable))return;const Y=p.knockout.getObservable(I,"selectedImagery"),Z=p.knockout.getObservable(I,"selectedTerrain"),ve=[],Fe=(q=Y==null?void 0:Y.subscribe)==null?void 0:q.call(Y,de=>{const ye=u.get(de);ye&&(f.value!==ye&&(f.value=ye),Ye())}),Oe=(V=Z==null?void 0:Z.subscribe)==null?void 0:V.call(Z,de=>{const ye=m.get(de);ye&&(L.value!==ye&&(L.value=ye),Ae(ye))});Fe&&ve.push(Fe),Oe&&ve.push(Oe),_=ve}function $e(){_.forEach(p=>{var I;return(I=p==null?void 0:p.dispose)==null?void 0:I.call(p)}),_=[]}function pe(){return qe(),ne(),ee(),!0}function Ue(){const p=e==null?void 0:e();if(p!=null&&p.imageryLayers)for(;i.length;){const I=i.pop();try{p.imageryLayers.remove(I,!0)}catch{}}}function Ye(){var p,I,Y;qe(),ne(),ee(),(Y=(I=(p=e==null?void 0:e())==null?void 0:p.scene)==null?void 0:I.requestRender)==null||Y.call(I)}function qe(){var I,Y;const p=e==null?void 0:e();!p||!(t!=null&&t())||(F.value?Ve():W(),P.value?Be():H(),(Y=(I=p.scene).requestRender)==null||Y.call(I))}function Ve(){var I,Y,Z,ve;const p=e==null?void 0:e();if(!(p!=null&&p.imageryLayers)||r)return r&&((Y=(I=p==null?void 0:p.imageryLayers)==null?void 0:I.raiseToTop)==null||Y.call(I,r)),r;try{return r=p.imageryLayers.addImageryProvider(Ee()),(ve=(Z=p.imageryLayers).raiseToTop)==null||ve.call(Z,r),r}catch(Fe){return n.error("天地图国界线图层加载失败",Fe),null}}function Be(){var I,Y,Z,ve;const p=e==null?void 0:e();if(!(p!=null&&p.imageryLayers)||b)return b&&((Y=(I=p==null?void 0:p.imageryLayers)==null?void 0:I.raiseToTop)==null||Y.call(I,b)),b;try{return b=p.imageryLayers.addImageryProvider(Re()),(ve=(Z=p.imageryLayers).raiseToTop)==null||ve.call(Z,b),b}catch(Fe){return n.error("天地图文字标注图层加载失败",Fe),null}}function W(){const p=e==null?void 0:e();if(!(!r||!(p!=null&&p.imageryLayers))){try{p.imageryLayers.remove(r,!0)}catch{}r=null}}function H(){const p=e==null?void 0:e();if(!(!b||!(p!=null&&p.imageryLayers))){try{p.imageryLayers.remove(b,!0)}catch{}b=null}}async function ne(){var I,Y,Z;const p=e==null?void 0:e();!((I=p==null?void 0:p.scene)!=null&&I.primitives)||!(t!=null&&t())||(x.value?await te():re(),(Z=(Y=p.scene).requestRender)==null||Z.call(Y))}async function ee(){var I,Y,Z;const p=e==null?void 0:e();!((I=p==null?void 0:p.scene)!=null&&I.primitives)||!(t!=null&&t())||(k.value?await ie():j(),(Z=(Y=p.scene).requestRender)==null||Z.call(Y))}async function ie(){var Z,ve,Fe;const p=e==null?void 0:e(),I=t==null?void 0:t();if(!((Z=p==null?void 0:p.scene)!=null&&Z.primitives))return null;if(R)return p.scene.globe.show=!1,R;if(w)return w;if(typeof(I==null?void 0:I.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),k.value=!1,null;const Y=++C;Ut(I,M()),w=I.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const Oe=await w;return Y!==C||!k.value?(Qn(Oe),null):(R=p.scene.primitives.add(Oe),p.scene.globe.show=!1,p.scene.skyAtmosphere.show=!0,(Fe=(ve=p.scene).requestRender)==null||Fe.call(ve),R)}catch(Oe){return Y!==C||(k.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",Oe)),null}finally{Y===C&&(w=null)}}function j(){var I,Y,Z;const p=e==null?void 0:e();if(C+=1,w=null,!R||!((I=p==null?void 0:p.scene)!=null&&I.primitives)){(Y=p==null?void 0:p.scene)!=null&&Y.globe&&(p.scene.globe.show=!0);return}try{p.scene.primitives.remove(R)}catch{}R=null,(Z=p==null?void 0:p.scene)!=null&&Z.globe&&(p.scene.globe.show=!0)}async function te(){var Z,ve,Fe,Oe;const p=e==null?void 0:e(),I=t==null?void 0:t();if(!((Z=p==null?void 0:p.scene)!=null&&Z.primitives)||g)return g;if(S)return S;if(typeof((ve=I==null?void 0:I.Cesium3DTileset)==null?void 0:ve.fromIonAssetId)!="function"&&typeof(I==null?void 0:I.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),x.value=!1,null;const Y=++E;Ut(I,M()),await se(),S=Ls(I,{maximumScreenSpaceError:8});try{const Ne=await S;return Y!==E||!x.value?(Qn(Ne),null):(g=p.scene.primitives.add(Ne),(Oe=(Fe=p.scene).requestRender)==null||Oe.call(Fe),g)}catch(Ne){return Y!==E||(x.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",Ne)),null}finally{Y===E&&(S=null)}}function re(){var I,Y,Z;const p=e==null?void 0:e();if(E+=1,S=null,!(!g||!((I=p==null?void 0:p.scene)!=null&&I.primitives))){try{p.scene.primitives.remove(g)}catch{}g=null,(Z=(Y=p.scene).requestRender)==null||Z.call(Y)}}async function se(){if(L.value==="cesiumWorld")return!0;L.value="cesiumWorld";const p=await We("cesiumWorld");return p||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),p}function Se(p,I={}){var Fe,Oe,Ne;const Y=e==null?void 0:e();if(!Y||!(t!=null&&t()))return!1;Li(),Ue();const Z=(Fe=Y.baseLayerPicker)==null?void 0:Fe.viewModel,ve=h.get(p);if(Z&&ve){if(I.forceReload&&Z.selectedImagery===ve){const je=h.get(Tn)||h.get("tianditu");je&&je!==ve&&(Z.selectedImagery=je)}return Z.selectedImagery!==ve&&(Z.selectedImagery=ve),Ye(),!0}try{return G(p).forEach(Ze=>{Ze&&i.push(Y.imageryLayers.addImageryProvider(Ze))}),qe(),(Ne=(Oe=Y.scene).requestRender)==null||Ne.call(Oe),!0}catch(je){return n.error("地图源切换失败",je),!1}}function ze(){return We(L.value)}async function We(p){var Ne,je,Ze,q,V,de,ye,Ge,ut,nt,bt;const I=e==null?void 0:e(),Y=t==null?void 0:t();if(!I||!Y)return!1;const Z=(Ne=I.baseLayerPicker)==null?void 0:Ne.viewModel,ve=y.get(p);if(Z&&ve)return Z.selectedTerrain!==ve&&(Z.selectedTerrain=ve),Ae(p),(Ze=(je=I.scene).requestRender)==null||Ze.call(je),!0;const Fe=++T;if(p==="ellipsoid")return I.terrainProvider=new Y.EllipsoidTerrainProvider,Ae(p),(V=(q=I.scene).requestRender)==null||V.call(q),!0;if(p==="cesiumWorld")try{const at=await A();return Fe!==T?!1:(I.terrainProvider=at,Ae(p),(ye=(de=I.scene).requestRender)==null||ye.call(de),!0)}catch(at){return Fe!==T||(I.terrainProvider=new Y.EllipsoidTerrainProvider,Ae("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",at)),!1}if(p==="arcgisWorld")try{const at=await N();return Fe!==T?!1:(I.terrainProvider=at,Ae(p),(ut=(Ge=I.scene).requestRender)==null||ut.call(Ge),!0)}catch(at){return Fe!==T||(I.terrainProvider=new Y.EllipsoidTerrainProvider,Ae("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",at)),!1}const Oe=$n(Y);try{return I.terrainProvider=new Oe({url:`${Ft}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Lt,token:D()}),Ae(p),(bt=(nt=I.scene).requestRender)==null||bt.call(nt),!0}catch(at){return I.terrainProvider=new Y.EllipsoidTerrainProvider,Ae("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",at),!1}}function Ae(p){var Y;const I=e==null?void 0:e();(Y=I==null?void 0:I.scene)!=null&&Y.globe&&(I.scene.globe.depthTestAgainstTerrain=p!=="ellipsoid")}function et(p){const I=t==null?void 0:t();if(p==="ellipsoid")return new I.EllipsoidTerrainProvider;if(p==="cesiumWorld")return A().catch(Z=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",Z),K(p,"ellipsoid"),new I.EllipsoidTerrainProvider));if(p==="arcgisWorld")return N().catch(Z=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",Z),K(p,"ellipsoid"),new I.EllipsoidTerrainProvider));const Y=$n(I);try{return new Y({url:`${Ft}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Lt,token:D()})}catch(Z){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",Z),new I.EllipsoidTerrainProvider}}async function A(){var Y,Z;const p=t==null?void 0:t();Ut(p,M());const I={requestWaterMask:!1,requestVertexNormals:!0};if(typeof p.createWorldTerrainAsync=="function")return p.createWorldTerrainAsync(I);if(typeof p.createWorldTerrain=="function")return p.createWorldTerrain(I);if(typeof((Y=p.CesiumTerrainProvider)==null?void 0:Y.fromIonAssetId)=="function")return p.CesiumTerrainProvider.fromIonAssetId(1,I);if((Z=p.IonResource)!=null&&Z.fromAssetId&&p.CesiumTerrainProvider){const ve=await p.IonResource.fromAssetId(1);return new p.CesiumTerrainProvider({url:ve,...I})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function N(){var Y;const p=t==null?void 0:t();if(typeof((Y=p==null?void 0:p.ArcGISTiledElevationTerrainProvider)==null?void 0:Y.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return gs(p).fromUrl(ys)}function K(p,I){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{L.value===p&&(L.value=I)},0)}function oe({overlayId:p,value:I}){if(p==="tdt-boundaries"){F.value=!!I;return}if(p==="tdt-text-labels"){P.value=!!I;return}if(p==="cesium-osm-buildings"){x.value=!!I;return}p==="google-photorealistic-3d-tiles"&&(k.value=!!I)}function ue({url:p}){const I=String(p||"").trim(),Y=ea(I);if(!Y.valid){n.warning(Y.message,{closable:!0});return}if(O.value=I,f.value===Ct){Se(Ct,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}f.value=Ct,n.success("已切换到自定义 XYZ 图源")}function xe(){Ue(),W(),H(),re(),j(),$e()}return{activeBasemap:f,activeTerrain:L,customXyzBasemapUrl:O,basemapOptions:z,terrainOptions:Zn,overlayOptions:le,createImageryProviderViewModels:J,createTerrainProviderViewModels:fe,getSelectedImageryProviderViewModel:be,getSelectedTerrainProviderViewModel:ce,bindLayerPickerStateSync:He,addBaseImageryLayers:pe,initCustomTerrain:ze,applyBasemap:Se,applyTerrain:We,handleOverlayToggle:oe,handleCustomBasemapSubmit:ue,cleanupLayers:xe,basemapSwitcher:$,basemapCircuitOpen:X,resetCircuitBreaker:$.resetCircuitBreaker}}function Ts(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function Ms(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Jn(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Qn(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function Ls(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const a=await e.Cesium3DTileset.fromIonAssetId(bs,t);return!a.style&&typeof e.Cesium3DTileStyle=="function"&&(a.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),a}return e.createOsmBuildingsAsync(t)}function Fs(e){return e.value===Ct?`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`:e.description||e.label}function Es(e){const t=Pt(e);if(!t.length)return"#37d67a";const n=vn(t[0]);if(!n)return"#37d67a";const a=n.category;return a==="imagery"?"#5ea1ff":a==="vector"?"#37d67a":a==="terrain"?"#d0a449":a==="label"?"#a78bfa":a==="theme"?"#f59e0b":a==="custom"?"#f472b6":"#37d67a"}function As(e,t){return String(t||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function ea(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const a=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let l=[];return a?(l=Ds(a[1],a[2]),n=n.replace(a[0],"{s}")):/\{s\}/i.test(n)&&(l=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:l}:Cs(n)?{valid:!0,message:"",url:n,subdomains:l}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:l}}function Ds(e,t){const n=String(e||"").charCodeAt(0),a=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(a))return[];const l=n<=a?1:-1,o=[];for(let r=n;l>0?r<=a:r>=a;r+=l)o.push(String.fromCharCode(r));return o}function Cs(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function Ps(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function ta(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),a=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(a)}`}function ks({getViewer:e,getCesium:t,message:n}){function a(r){const b=e==null?void 0:e(),g=t==null?void 0:t();if(!b||!g)return;const S=typeof r=="number"?r:2;b.camera.flyTo({destination:g.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-g.Math.PI_OVER_TWO,roll:0},duration:S})}function l(){const r=e==null?void 0:e(),b=t==null?void 0:t();!r||!b||r.camera.flyTo({destination:b.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:b.Math.toRadians(0),pitch:b.Math.toRadians(-25),roll:0},duration:3})}async function o(){const r=e==null?void 0:e(),b=t==null?void 0:t();if(!(!r||!b))try{const g=await b.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");r.scene.primitives.add(g),r.flyTo(g,{duration:3,offset:new b.HeadingPitchRange(b.Math.toRadians(0),b.Math.toRadians(-25),g.boundingSphere.radius*2.5)})}catch(g){n.error(`加载模型失败: ${g}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:a,flyToEverest:l,loadCustomTileset:o}}const Is="tileset.json";let Bt=null;async function na(){if(Bt)return Bt;const[{decompressBuffer:e},{parseShpPartsToGeoJSON:t}]=await Promise.all([yt(()=>import("./decompressFile-DiMYlfaO.js").then(n=>n.f),__vite__mapDeps([2,3]),import.meta.url),yt(()=>import("./shpParser-1NMznEfK.js").then(n=>n.s),__vite__mapDeps([4,3,1,5,6,7,8,9,10]),import.meta.url)]);return Bt={decompressBuffer:e,parseShpPartsToGeoJSON:t},Bt}function an(e){const t=e.lastIndexOf(".");return t===-1?"":e.slice(t+1).toLowerCase()}function ht(e,t,n,a){if(!(!e||!t||!n))try{a==="3dtiles"&&n.boundingSphere?e.flyTo(n,{duration:2,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-30),n.boundingSphere.radius*2)}):n.entities&&n.entities.values.length>0&&e.flyTo(n,{duration:2})}catch{}}function xt(e){return URL.createObjectURL(e)}function Qe(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function Rs({getViewer:e,getCesium:t,message:n}){const a=Q([]),l=Q(null);let o=0;async function r(d){const F=t(),P=e();if(!F||!P)throw new Error("Cesium 未初始化");const x=xt(d);try{const k=await F.GeoJsonDataSource.load(x,{stroke:F.Color.fromCssColorString("#3ddc84"),fill:F.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:F.Color.fromCssColorString("#3ddc84"),markerSize:24}),z=`geojson_${++o}`;k.name=d.name,await P.dataSources.add(k),ht(P,F,k,"geojson");const $={id:z,name:d.name,type:"geojson",entity:k,blobUrl:x};return a.value=[...a.value,$],n.success(`GeoJSON "${d.name}" 加载成功`),$}catch(k){throw Qe(x),k}}async function b(d){const F=t(),P=e();if(!F||!P)throw new Error("Cesium 未初始化");const x=xt(d);try{const k=await F.KmlDataSource.load(x,{camera:P.scene.camera,canvas:P.scene.canvas}),z=`kml_${++o}`;k.name=d.name,await P.dataSources.add(k),ht(P,F,k,"kml");const $={id:z,name:d.name,type:"kml",entity:k,blobUrl:x};return a.value=[...a.value,$],n.success(`KML "${d.name}" 加载成功`),$}catch(k){throw Qe(x),k}}async function g(d){const F=t(),P=e();if(!F||!P)throw new Error("Cesium 未初始化");const x=xt(d);try{const k=await F.KmlDataSource.load(x,{camera:P.scene.camera,canvas:P.scene.canvas}),z=`kmz_${++o}`;k.name=d.name,await P.dataSources.add(k),ht(P,F,k,"kmz");const $={id:z,name:d.name,type:"kmz",entity:k,blobUrl:x};return a.value=[...a.value,$],n.success(`KMZ "${d.name}" 加载成功`),$}catch{return Qe(x),await S(d)}}async function S(d){const F=t(),P=e(),x=await d.arrayBuffer(),{decompressBuffer:k}=await na(),$=(await k(x,d.name)).find(fe=>{var be;return fe.ext==="kml"||((be=fe.name)==null?void 0:be.toLowerCase().endsWith(".kml"))});if(!$)throw new Error("KMZ 压缩包中未找到 KML 文件");let X;typeof $.content=="string"?X=$.content:$.content instanceof ArrayBuffer||$.content instanceof Uint8Array?X=Ti($.content):X=String($.content||"");const le=new Blob([X],{type:"application/vnd.google-earth.kml+xml"}),J=URL.createObjectURL(le);try{const fe=await F.KmlDataSource.load(J,{camera:P.scene.camera,canvas:P.scene.canvas}),be=`kmz_${++o}`;fe.name=d.name,await P.dataSources.add(fe),ht(P,F,fe,"kmz");const ce={id:be,name:d.name,type:"kmz",entity:fe};return a.value=[...a.value,ce],n.success(`KMZ "${d.name}" 加载成功（手动解压）`),ce}finally{URL.revokeObjectURL(J)}}async function E(d,F=[]){const P=t(),x=e();if(!P||!x)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:k}=await na(),z={shp:await d.arrayBuffer()};for(const ce of F){const B=an(ce.name);B==="dbf"&&(z.dbf=await ce.arrayBuffer()),B==="shx"&&(z.shx=await ce.arrayBuffer()),B==="prj"&&(z.prj=await ce.arrayBuffer()),B==="cpg"&&(z.cpg=await ce.arrayBuffer())}const $=await k(z),X=Array.isArray($)?$:[$],le=X.reduce((ce,B)=>{var G;return ce+(((G=B==null?void 0:B.features)==null?void 0:G.length)||0)},0),J=X.length===1?X[0]:{type:"FeatureCollection",features:X.flatMap(ce=>(ce==null?void 0:ce.features)||[])},fe=new Blob([JSON.stringify(J)],{type:"application/geo+json"}),be=URL.createObjectURL(fe);try{const ce=await P.GeoJsonDataSource.load(be,{stroke:P.Color.fromCssColorString("#ffcc00"),fill:P.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:P.Color.fromCssColorString("#ffcc00"),markerSize:20}),B=`shp_${++o}`;ce.name=d.name,await x.dataSources.add(ce),ht(x,P,ce,"shp");const G={id:B,name:d.name,type:"shp",entity:ce};return a.value=[...a.value,G],n.success(`Shapefile "${d.name}" 加载成功 (${le} 个要素)`),URL.revokeObjectURL(be),G}catch(ce){throw URL.revokeObjectURL(be),ce}}async function R(d){const F=t(),P=e();if(!F||!P)throw new Error("Cesium 未初始化");const x=xt(d);let k=null;try{k=await y(d)}catch{}if(k)try{const z=await s(F,P,x,d.name,k),X={id:`gltf_${++o}`,name:d.name,type:"gltf",entity:z,blobUrl:x};return a.value=[...a.value,X],n.success(`3D 模型 "${d.name}" 加载成功 (${k.lng.toFixed(4)}, ${k.lat.toFixed(4)}, ${k.height.toFixed(1)}m)`),X}catch(z){throw Qe(x),z}return l.value&&Qe(l.value.blobUrl),l.value={file:d,blobUrl:x,name:d.name},{needsCoordInput:!0,file:d}}async function w(d){const F=t(),P=e();if(!l.value)throw new Error("没有等待确认的模型文件");const{blobUrl:x,name:k}=l.value;try{const z=await s(F,P,x,k,d),X={id:`gltf_${++o}`,name:k,type:"gltf",entity:z,blobUrl:x};a.value=[...a.value,X],n.success(`3D 模型 "${k}" 加载成功 (${d.lng.toFixed(4)}, ${d.lat.toFixed(4)}, ${d.height.toFixed(1)}m)`);const le=F.Cartesian3.fromDegrees(d.lng,d.lat,d.height+500);return P.camera.flyTo({destination:le,orientation:{heading:F.Math.toRadians(0),pitch:F.Math.toRadians(-30),roll:0},duration:2}),l.value=null,X}catch(z){throw Qe(x),l.value=null,z}}function C(){l.value&&(Qe(l.value.blobUrl),l.value=null)}async function T(d){const F=t(),P=e();if(!F||!P)throw new Error("Cesium 未初始化");const x=xt(d);try{const k=await F.CzmlDataSource.load(x),z=`czml_${++o}`;k.name=d.name,await P.dataSources.add(k),ht(P,F,k,"czml");const $={id:z,name:d.name,type:"czml",entity:k,blobUrl:x};return a.value=[...a.value,$],n.success(`CZML "${d.name}" 加载成功`),$}catch(k){throw Qe(x),k}}async function _(d){const F=t(),P=e();if(!F||!P)throw new Error("Cesium 未初始化");const x=d.path||"",k=/^[a-zA-Z]:\\/.test(x)||x.startsWith("/");let z="";if(k){const $=x.replace(/\\/g,"/");z=$.startsWith("/")?`file://${$}`:`file:///${$}`}else z=xt(d);try{const $=await F.Cesium3DTileset.fromUrl(z),X=`tileset_${++o}`;P.scene.primitives.add($);const le=z.startsWith("file:")?void 0:z,J={id:X,name:d.name,type:"3dtiles",entity:$,blobUrl:le};return a.value=[...a.value,J],ht(P,F,$,"3dtiles"),n.success(`3D Tiles "${d.name}" 加载成功`),J}catch($){throw z.startsWith("blob:")&&Qe(z),$}}function D(d,F){const P=String(F||"").replace(/\\/g,"/");if(/^(blob|file|https?):/i.test(P))return P;if(P.startsWith("/"))return P.slice(1);const k=(d+P).split("/"),z=[];for(const $ of k)if(!($==="."||$==="")){if($===".."){z.pop();continue}z.push($)}return z.join("/")}function M(d,F,P){if(!d||typeof d!="object")return;function x(z){if(!(!z||typeof z!="object"))for(const $ of["url","uri"]){const X=z[$];if(typeof X!="string"||/^(blob|file|https?|data):/i.test(X))continue;const le=D(F,X);P[le]&&(z[$]=P[le])}}const k=d.content;if(k)if(Array.isArray(k))for(const z of k)x(z);else x(k);if(Array.isArray(d.children))for(const z of d.children)M(z,F,P);if(d.extensions&&typeof d.extensions=="object")for(const z of Object.values(d.extensions))z&&typeof z=="object"&&x(z)}async function i(d,F){const P=t(),x=e();if(!P||!x)throw new Error("Cesium 未初始化");const k={},z=[];for(const[B,G]of Object.entries(d)){const U=B.replace(/\\/g,"/"),he=URL.createObjectURL(G);k[U]=he,z.push(he)}const $=Object.keys(k),X=$.filter(B=>B.endsWith("tileset.json")?!0:!(!B.endsWith(".json")||!d[B]));for(const B of X){const G=Object.keys(d).find(He=>He.replace(/\\/g,"/")===B)||B,U=d[G];let he;try{he=await U.text()}catch{continue}let De;try{De=JSON.parse(he)}catch{continue}if(!De.root)continue;const Te=B.substring(0,B.lastIndexOf("/")+1);M(De.root,Te,k);const Ee=new Blob([JSON.stringify(De)],{type:"application/json"}),Re=URL.createObjectURL(Ee);k[B]=Re,z.push(Re)}const le=X.find(B=>B==="tileset.json"||B.endsWith("/tileset.json"))||X[0];if(!le)throw new Error("未找到 tileset.json，请确认 ZIP 或目录包含有效的 3D Tiles 数据集");const J=k[le],fe=await P.Cesium3DTileset.fromUrl(J),be=`tileset_${++o}`;x.scene.primitives.add(fe);const ce={id:be,name:F,type:"3dtiles",entity:fe,blobUrls:z};return a.value=[...a.value,ce],ht(x,P,fe,"3dtiles"),n.success(`3D Tiles "${F}" 加载成功 (${$.length} 个文件)`),ce}async function c(d){const{default:F}=await yt(async()=>{const{default:z}=await import("./vendor-jszip-BOwK5y_4.js").then($=>$.j);return{default:z}},[],import.meta.url),P=await F.loadAsync(d),x={},k=[];P.forEach((z,$)=>{$.dir||k.push(z)});for(const z of k){const $=await P.file(z).async("blob");x[z]=$}return await i(x,d.name||"3D Tiles")}async function h(d,F,P){for await(const[x,k]of d.entries()){const z=F?`${F}/${x}`:x;if(k.kind==="file"){const $=await k.getFile();P[z]=$}else k.kind==="directory"&&await h(k,z,P)}}async function u(){try{const d=await window.showDirectoryPicker({mode:"read"}),F={};return await h(d,"",F),await i(F,d.name)}catch(d){if(d.name==="AbortError"||d.name==="SecurityError")return null;throw n.error(`导入 3D Tiles 目录失败: ${d.message||d}`),d}}async function y(d){var k,z,$,X,le;const F=an(d.name);let P;if(F==="gltf"){const J=await d.text();P=JSON.parse(J)}else{const J=await d.arrayBuffer();P=m(J)}if(!P)return null;if((k=P.extensionsUsed)!=null&&k.includes("CESIUM_RTC")&&(($=(z=P.extensions)==null?void 0:z.CESIUM_RTC)!=null&&$.center)){const J=P.extensions.CESIUM_RTC.center;if(J.length>=3){const fe=t();if(fe){const be=new fe.Cartesian3(J[0],J[1],J[2]),ce=fe.Cartographic.fromCartesian(be);return{lng:fe.Math.toDegrees(ce.longitude),lat:fe.Math.toDegrees(ce.latitude),height:ce.height}}}}const x=(X=P.asset)==null?void 0:X.extras;if(x){const J=x.longitude??x.lng,fe=x.latitude??x.lat,be=x.height??x.altitude??x.alt??0;if(J!=null&&fe!=null)return{lng:Number(J),lat:Number(fe),height:Number(be)}}if(((le=P.nodes)==null?void 0:le.length)>0&&P.nodes[0].matrix){const J=P.nodes[0].matrix;if(J.length>=16){const fe=J[12],be=J[13],ce=J[14];if(Math.abs(fe)>1e5||Math.abs(be)>1e5){const B=t();if(B)try{const G=new B.Cartesian3(fe,be,ce),U=B.Cartographic.fromCartesian(G);return{lng:B.Math.toDegrees(U.longitude),lat:B.Math.toDegrees(U.latitude),height:U.height}}catch{}}}}return null}function m(d){if(d.byteLength<20)return null;const F=new DataView(d);if(F.getUint32(0,!0)!==1179937895)return null;const x=F.getUint32(12,!0);if(F.getUint32(16,!0)!==1313821514)return null;const z=new Uint8Array(d,20,x),$=new TextDecoder().decode(z);try{return JSON.parse($)}catch{return null}}async function s(d,F,P,x,k){const{lng:z,lat:$,height:X}=k,le=d.Cartesian3.fromDegrees(z,$,X),J=new d.HeadingPitchRoll(0,0,0),fe=d.Transforms.localFrameToFixedFrameGenerator("north","west"),be=await d.Model.fromGltfAsync({url:P,modelMatrix:d.Transforms.headingPitchRollToFixedFrame(le,J,d.Ellipsoid.WGS84,fe),scale:1,show:!0});return be.name=x,F.scene.primitives.add(be),be}async function f(d){const F=e(),P=t();if(!F||!P)throw n.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const x=an(d.name);try{switch(x){case"geojson":case"json":return d.name.toLowerCase().includes(Is)?await _(d):await r(d);case"kml":return await b(d);case"kmz":return await g(d);case"shp":return await E(d);case"glb":case"gltf":return await R(d);case"czml":return await T(d);case"zip":return await c(d);default:throw n.error(`不支持的文件格式: .${x}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${x}`)}}catch(k){throw n.error(`加载 "${d.name}" 失败: ${k.message||k}`),k}}function L(d){const F=a.value.find(x=>x.id===d);if(!F)return;const P=e();if(P){try{F.type==="3dtiles"?P.scene.primitives.remove(F.entity):P.dataSources.remove(F.entity,!0)}catch{}if(F.blobUrl&&Qe(F.blobUrl),F.blobUrls&&Array.isArray(F.blobUrls))for(const x of F.blobUrls)Qe(x);a.value=a.value.filter(x=>x.id!==d),n.info(`已移除 "${F.name}"`)}}function O(){var P,x,k,z,$;const d=e();if(!d){a.value=[];return}for(const X of a.value){try{X.type==="3dtiles"?d.scene.primitives.remove(X.entity):d.dataSources.remove(X.entity,!0)}catch{}if(X.blobUrl&&Qe(X.blobUrl),X.blobUrls&&Array.isArray(X.blobUrls))for(const le of X.blobUrls)Qe(le)}if(Array.isArray((P=d.dataSources)==null?void 0:P.dataSources)){const X=d.dataSources.dataSources.slice();for(const le of X)if(le&&!le.isBaseLayerPickerDataSource)try{d.dataSources.remove(le,!0)}catch{}}const F=t();if(F&&Array.isArray((k=(x=d.scene)==null?void 0:x.primitives)==null?void 0:k.primitives)){const X=d.scene.primitives.primitives.slice();for(const le of X)if(!(!le||!(le instanceof F.Cesium3DTileset||le instanceof F.Model||le.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(le.name||"")))))try{d.scene.primitives.remove(le)}catch{}}a.value=[],C();try{($=(z=d.scene).requestRender)==null||$.call(z)}catch{}n.info("已清除所有导入数据")}return{loadDataFile:f,importTilesetFromDirectory:u,loadedDataSources:a,removeDataSource:L,clearAllDataSources:O,pendingGltfFile:l,loadGltfWithUserCoords:w,cancelPendingGltf:C}}const ln={smooth:{label:"流畅",description:"仅体积云，关 BSM/光晕/丁达尔，低采样，优先帧率",params:{quality:"smooth",layer0Altitude:1800,layer0Height:600,layer0Coverage:.28,layer1Altitude:3200,layer1Height:900,layer1Coverage:.18,layer2Altitude:7500,layer2Height:400,layer2Coverage:0,sunIntensity:16,cloudExposure:2.4,skyToSunRatio:.22,aerialPerspectiveScale:0,atmosphereExposureDay:.85,atmosphereExposureNight:.08,atmosphereExposureManual:.85,atmosphereExposureFollowTimeline:!0,magentaFixStrength:1.5,scatterG1:.65,scatterG2:-.15,multiScatteringOctaves:2,windSpeed:0,evolutionSpeed:.002,distFadeStart:8e3,distFadeEnd:38e3,maxSteps:140,useShadowBuffer:!1,shadowLengthEnabled:!1,hazeEnabled:!1,temporalEnabled:!1,bsmGroundScale:.3,bsmTyndallScale:1,shadowFar:3e4,shadowSplitLambda:.8,shadowFadeScale:3,lensFlareEnabled:!1,bloomIntensity:0,ghostIntensity:0,haloIntensity:0,atmosphereStageEnabled:!0,aerialStageEnabled:!1}},balanced:{label:"均衡",description:"云 + 轻 BSM/丁达尔，中等采样，表现与性能折中",params:{quality:"balanced",layer0Altitude:1800,layer0Height:650,layer0Coverage:.3,layer1Altitude:2400,layer1Height:1100,layer1Coverage:.28,layer2Altitude:7500,layer2Height:450,layer2Coverage:.15,sunIntensity:18,cloudExposure:2.8,skyToSunRatio:.26,aerialPerspectiveScale:0,atmosphereExposureDay:.9,atmosphereExposureNight:.1,atmosphereExposureManual:.9,atmosphereExposureFollowTimeline:!0,magentaFixStrength:1.8,scatterG1:.7,scatterG2:-.2,multiScatteringOctaves:4,windSpeed:0,evolutionSpeed:.004,distFadeStart:1e4,distFadeEnd:45e3,maxSteps:280,useShadowBuffer:!0,shadowLengthEnabled:!0,hazeEnabled:!1,temporalEnabled:!1,bsmGroundScale:.35,bsmTyndallScale:.8,shadowFar:35e3,shadowSplitLambda:.9,shadowFadeScale:4,lensFlareEnabled:!0,bloomIntensity:.35,ghostIntensity:.5,haloIntensity:.12,atmosphereStageEnabled:!0,aerialStageEnabled:!0}},ultra:{label:"极致",description:"全效果：高采样 + BSM + 丁达尔 + 光晕，偏重画质",params:{quality:"ultra",layer0Altitude:1800,layer0Height:650,layer0Coverage:.3,layer1Altitude:2400,layer1Height:1200,layer1Coverage:.3,layer2Altitude:7500,layer2Height:500,layer2Coverage:.3,sunIntensity:20,cloudExposure:3,skyToSunRatio:.28,aerialPerspectiveScale:0,atmosphereExposureDay:.85,atmosphereExposureNight:.1,atmosphereExposureManual:.85,atmosphereExposureFollowTimeline:!0,magentaFixStrength:2,scatterG1:.7,scatterG2:-.2,multiScatteringOctaves:8,windSpeed:0,evolutionSpeed:.005,distFadeStart:11e3,distFadeEnd:51e3,maxSteps:500,useShadowBuffer:!0,shadowLengthEnabled:!0,hazeEnabled:!1,temporalEnabled:!1,bsmGroundScale:.3,bsmTyndallScale:1,shadowFar:4e4,shadowSplitLambda:1,shadowFadeScale:5,lensFlareEnabled:!0,bloomIntensity:.6,ghostIntensity:1.1,haloIntensity:.2,atmosphereStageEnabled:!0,aerialStageEnabled:!0}}},Gt="smooth";function aa(e,t){const n=ln[t]?t:Gt,a=ln[n];return{...e,...a.params,quality:n,cloudsEnabled:(e==null?void 0:e.cloudsEnabled)===!0}}function Os(){return Object.entries(ln).map(([e,t])=>({value:e,label:t.label}))}const Ns="cesium_tool_panel_open";function Bs({fluidPanelRef:e,sceneActions:t={},wind:n={},modelManager:a=null,cameraEnhanced:l=null,heightSampler:o=null,playerController:r=null,panelStorageKey:b=Ns}={}){const g=Q(_t(b,!0)),S=Q({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),E=Q({enableLighting:!0,showGroundAtmosphere:!0,dynamicAtmosphereLighting:!0,dynamicAtmosphereLightingFromSun:!0,atmosphereLightIntensity:5.5,atmosphereHueShift:-.015,atmosphereSaturationShift:.08,atmosphereBrightnessShift:.02,lightingFadeInDistance:0,lightingFadeOutDistance:Number.MAX_SAFE_INTEGER,nightFadeInDistance:0,nightFadeOutDistance:Number.MAX_SAFE_INTEGER,fogEnabled:!1,fogDensity:12e-5,fogMinimumBrightness:.035,sunShow:!0,moonShow:!0,skyBoxShow:!0}),R=Q({dayNightEnabled:!0,nightFactor:0,moonLightEnabled:!0,moonLightIntensity:.18,ambientIntensity:.08,starsEnabled:!0,starsIntensity:1}),w=Q(aa({cloudsEnabled:!1,quality:Gt},Gt)),C=Q({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null,floodSpeed:5}),T=Q({speed:300,flySpeed:55e3,gravity:-2400,jumpHeight:600,sensitivity:5,acceleration:30,deceleration:30,spawnHeight:500}),_=Q({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null,floodSimActive:!1}),D=Q(!1),M=Q({elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2}),i=ke(()=>{var m,s,f,L,O,d,F,P,x,k,z,$,X,le,J,fe,be,ce,B,G,U,he,De,Te;return[{id:"scene",title:"场景导航",description:"相机飞行和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"atmosphere",title:"大气·光照·天空",description:"Cesium 原生光照 + Tellux 增强大气 + 高级后效（全部可选）",status:S.value.atmosphere||S.value.fog||S.value.hbao?"部分启用":"仅晨昏半球",statusTone:S.value.atmosphere?"success":"neutral",controls:[...Vs(E.value),{id:"fog",label:"高度雾",type:"toggle",value:S.value.fog,tooltip:"基于高度的指数雾效"},{id:"hbao",label:"微阴影",type:"toggle",value:S.value.hbao,tooltip:"环境光遮蔽（HBAO）"},{id:"tiltShift",label:"移轴",type:"toggle",value:S.value.tiltShift,tooltip:"移轴模糊后处理"},{id:"atmosphere",label:"大气效果",type:"toggle",value:S.value.atmosphere,tooltip:"启用 Tellux 大气渲染（日夜过渡、月光、星空）"},...$s(R.value,!S.value.atmosphere)]},{id:"cloud",title:"体积云·大气",description:"Bruneton 大气 + 体积云 raymarch + BSM 云影/丁达尔（cesium-clouds-atmosphere）",status:w.value.cloudsEnabled?qs(w.value.quality):"未启用",statusTone:w.value.cloudsEnabled?"success":"neutral",controls:js(w.value,!w.value.cloudsEnabled)},{id:"tools",title:"空间工具",description:"模型加载、增强相机、高度采样（Tellux 移植）",status:(((m=a==null?void 0:a.modelCount)==null?void 0:m.value)>0?"模型":"")||(((s=l==null?void 0:l.flightState)==null?void 0:s.value)==="flying"?"飞行中":"就绪"),statusTone:((f=a==null?void 0:a.modelCount)==null?void 0:f.value)>0?"success":"neutral",controls:[{id:"modelManagerEnabled",label:"模型管理",type:"toggle",value:!1,tooltip:"启用后可加载 glTF/GLB 模型到地理坐标位置"},{id:"cameraEnhancedEnabled",label:"增强相机",type:"toggle",value:!1,tooltip:"自定义缓动函数、角度插值和弹簧物理"},{id:"heightSamplerEnabled",label:"高度采样",type:"toggle",value:!1,tooltip:"地形高度查询、批量异步采样、屏幕坐标拾取"}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(L=n.wind2D)!=null&&L.value?"已加载":"未加载",statusTone:(O=n.wind2D)!=null&&O.value?"success":"neutral",actions:[{id:"load",label:(d=n.wind2D)!=null&&d.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((F=n.wind2D)!=null&&F.value)}],controls:Hs((P=n.windParams)==null?void 0:P.value,!!((x=n.wind2D)!=null&&x.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:_.value.isPicking?"等待选点":_.value.hasFluid?"已创建":"未创建",statusTone:_.value.isPicking?"warning":_.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:_.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:_.value.isPicking},{id:"floodSim",label:_.value.floodSimActive?"停止洪水":"洪水模拟",variant:_.value.floodSimActive?"danger":"default",active:_.value.floodSimActive,disabled:!zs(_.value)},{id:"clear",label:"清除",variant:"danger",disabled:!_.value.hasFluid&&!_.value.isPicking}],controls:Us(C.value,_.value)},{id:"shallowWater",title:"热带浅水",description:"Three.js 热带浅水场景（焦散/折射/物理吸色/体积云/闪电）",status:D.value?"已启用":"未启用",statusTone:D.value?"success":"neutral",actions:[{id:"toggle",label:D.value?"关闭":"启用",variant:D.value?"danger":"primary"}],controls:Xs(M.value,!D.value)},{id:"player",title:"人物漫游",description:"第一/第三人称视角 + WASD 移动 + 碰撞检测 + 飞行模式",status:(k=r==null?void 0:r.isActive)!=null&&k.value?(z=r.isFirstPerson)!=null&&z.value?"第一人称":"第三人称":"未启动",statusTone:($=r==null?void 0:r.isActive)!=null&&$.value?"success":"neutral",actions:[{id:"toggle",label:(X=r==null?void 0:r.isActive)!=null&&X.value?"停止漫游":"启动漫游",variant:(le=r==null?void 0:r.isActive)!=null&&le.value?"danger":"primary"},{id:"changeView",label:"切换视角",disabled:!((J=r==null?void 0:r.isActive)!=null&&J.value)},{id:"setNavTarget",label:(fe=r==null?void 0:r.navTarget)!=null&&fe.value?"更改目标":"设置导航"},{id:"clearNavTarget",label:"清除导航",disabled:!((be=r==null?void 0:r.navTarget)!=null&&be.value)}],controls:[{id:"speed",label:"行走速度",type:"range",value:T.value.speed,min:50,max:2e3,step:10,disabled:!((ce=r==null?void 0:r.isActive)!=null&&ce.value)},{id:"flySpeed",label:"飞行速度",type:"range",value:T.value.flySpeed,min:2e3,max:1e6,step:1e3,disabled:!((B=r==null?void 0:r.isActive)!=null&&B.value)},{id:"gravity",label:"重力",type:"range",value:T.value.gravity,min:-6e3,max:0,step:50,disabled:!((G=r==null?void 0:r.isActive)!=null&&G.value)},{id:"jumpHeight",label:"跳跃高度",type:"range",value:T.value.jumpHeight,min:0,max:3e3,step:50,disabled:!((U=r==null?void 0:r.isActive)!=null&&U.value)},{id:"sensitivity",label:"鼠标灵敏度",type:"range",value:T.value.sensitivity,min:1,max:20,step:.5,disabled:!((he=r==null?void 0:r.isActive)!=null&&he.value)},{id:"acceleration",label:"加速惯性",type:"range",value:T.value.acceleration,min:1,max:100,step:1,disabled:!((De=r==null?void 0:r.isActive)!=null&&De.value),tooltip:"值越大加速越快。WASD 按下后到达目标速度的响应快慢。"},{id:"deceleration",label:"减速惯性",type:"range",value:T.value.deceleration,min:1,max:100,step:1,disabled:!((Te=r==null?void 0:r.isActive)!=null&&Te.value),tooltip:"值越大松手后停得越快。影响滑行/惯性感。"},{id:"spawnHeight",label:"初始高度",type:"range",value:T.value.spawnHeight,min:50,max:5e3,step:50,disabled:!1,tooltip:"漫游启动时的离地高度（米），重启后生效。"}]}]});Ie(g,m=>{Dt(b,m)});function c({moduleId:m,actionId:s}){var L,O;(O=(L={scene:{home:()=>{var d;return(d=t.flyToHome)==null?void 0:d.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},fluid:{pick:()=>{var d,F;return(F=(d=e==null?void 0:e.value)==null?void 0:d.startPickHeightMap)==null?void 0:F.call(d)},floodSim:()=>{var d,F;return(F=(d=e==null?void 0:e.value)==null?void 0:d.toggleFloodSimulation)==null?void 0:F.call(d)},clear:()=>{var d,F;return(F=(d=e==null?void 0:e.value)==null?void 0:d.clearFluid)==null?void 0:F.call(d)}},shallowWater:{toggle:()=>{D.value=!D.value}},player:{toggle:()=>{var d;return(d=r==null?void 0:r.togglePlayer)==null?void 0:d.call(r,{spawnHeight:T.value.spawnHeight})},changeView:()=>{var d;return(d=r==null?void 0:r.changeView)==null?void 0:d.call(r)},setNavTarget:()=>{var d;return(d=r==null?void 0:r.openNavDialog)==null?void 0:d.call(r)},clearNavTarget:()=>{var d;return(d=r==null?void 0:r.clearNavTarget)==null?void 0:d.call(r)}}}[m])==null?void 0:L[s])==null||O.call(L)}function h({moduleId:m,controlId:s,value:f}){var L,O,d,F,P;if(m==="wind"&&s in(((L=n.windParams)==null?void 0:L.value)||{})){(O=n.setWindParam)==null||O.call(n,s,f);return}if(m==="fluid"&&s in C.value){C.value={...C.value,[s]:s==="waterColor"?f:Number(f)},s==="floodSpeed"&&((F=(d=e==null?void 0:e.value)==null?void 0:d.setFloodSpeed)==null||F.call(d,Number(f)));return}if(m==="shallowWater"&&s in M.value){M.value={...M.value,[s]:s==="waterColor"||s==="lightningEnabled"?f:Number(f)};return}if(m==="player"&&s in T.value){const x=Number(f);if(T.value={...T.value,[s]:x},s==="spawnHeight")return;const k=(P=r==null?void 0:r.getPlayerInstance)==null?void 0:P.call(r);k&&(s==="speed"?k.setPlayerSpeed(x):s==="flySpeed"?k.setPlayerFlySpeed(x):s==="gravity"?k.setGravity(x):s==="jumpHeight"?k.setJumpHeight(x):s==="sensitivity"?k.setMouseSensitivity(x):s==="acceleration"?k.setAcceleration(x):s==="deceleration"&&k.setDeceleration(x));return}if(m==="atmosphere"){if(s in S.value){S.value={...S.value,[s]:!!f};return}if(s in E.value){E.value={...E.value,[s]:f};return}if(s==="atmosphereEnabled"){S.value={...S.value,atmosphere:!!f};return}s in R.value&&(R.value={...R.value,[s]:f})}if(m==="cloud"){if(s==="quality"){w.value=aa(w.value,f);return}if(s in w.value){const x=new Set(["cloudsEnabled","lensFlareEnabled","useShadowBuffer","shadowLengthEnabled","hazeEnabled","temporalEnabled","atmosphereExposureFollowTimeline","atmosphereStageEnabled","aerialStageEnabled"]);w.value={...w.value,[s]:x.has(s)?!!f:Number(f)}}}}function u(m){const s=ct(m==null?void 0:m.waterLevel),f=ct(m==null?void 0:m.waterLevelMin),L=ct(m==null?void 0:m.waterLevelMax),O=ct(m==null?void 0:m.floodSpeed);_.value={isPicking:!!(m!=null&&m.isPicking),hasFluid:!!(m!=null&&m.hasFluid),selectedText:(m==null?void 0:m.selectedText)||"",waterLevel:s,waterLevelMin:f,waterLevelMax:L,floodSimActive:!!(m!=null&&m.floodSimActive)},O!==null&&(C.value={...C.value,floodSpeed:O}),s!==null&&(C.value={...C.value,waterLevel:s})}function y(){var m;(m=n.clearWind2D)==null||m.call(n)}return{toolPanelOpen:g,advancedEffectControls:S,baseAtmosphereParams:E,atmosphereParams:R,cloudParams:w,fluidParams:C,fluidState:_,shallowWaterVisible:D,shallowWaterParams:M,toolModules:i,handleToolAction:c,handleToolControlChange:h,handleFluidStateChange:u,cleanupTools:y}}function Hs(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function zs(e){return ct(e.waterLevelMin)!==null&&ct(e.waterLevelMax)!==null}function Us(e,t={}){const n=ct(t.waterLevelMin),a=ct(t.waterLevelMax),l=n!==null&&a!==null,o=l?Math.min(n,a):0,r=l?Math.max(n,a):0,b=ct(e.waterLevel),g=l?Ws(b??o,o,r):0,S=l?Math.max((r-o)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:o,max:r,step:S,value:g,displayValue:l?`${Gs(g)} m`:"先捕捉",disabled:!l,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"floodSpeed",label:"洪水速度",type:"range",min:l?Math.max((r-o)/100,.01):.1,max:l?Math.max(r-o,1):50,step:l?Math.max((r-o)/1e3,.01):.5,value:e.floodSpeed??(l?(r-o)/10:5),displayValue:(()=>{const E=r-o,R=e.floodSpeed??(l?E/10:5),w=l&&R>0?E/R:0;return l?`${Number(R).toFixed(1)} m/s（${w.toFixed(1)}s）`:"先捕捉"})(),disabled:!l||!!t.floodSimActive,tooltip:"洪水模拟水位上涨速度。默认值域÷10（10s 完成），可自定义。范围：100s ~ 1s 完成。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function ct(e){const t=Number(e);return Number.isFinite(t)?t:null}function Ws(e,t,n){return Math.max(t,Math.min(n,e))}function Gs(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}function $s(e={},t){return[{id:"atmosphereEnabled",label:"大气效果",type:"toggle",value:!t,tooltip:"启用 Tellux 大气渲染系统（日夜过渡、月光、体积云、星空）"},{id:"dayNightEnabled",label:"日夜过渡",type:"toggle",value:e.dayNightEnabled!==!1,disabled:t,tooltip:"基于太阳高度角的平滑日夜过渡效果"},{id:"moonLightEnabled",label:"月光",type:"toggle",value:e.moonLightEnabled!==!1,disabled:t,tooltip:"夜间月光照明效果"},{id:"moonLightIntensity",label:"月光强度",type:"range",min:0,max:1,step:.01,value:e.moonLightIntensity??.18,displayValue:Number(e.moonLightIntensity??.18).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"ambientIntensity",label:"环境光",type:"range",min:0,max:1,step:.01,value:e.ambientIntensity??.08,displayValue:Number(e.ambientIntensity??.08).toFixed(2),disabled:t||!e.moonLightEnabled},{id:"starsEnabled",label:"星空",type:"toggle",value:e.starsEnabled!==!1,disabled:t,tooltip:"基于高度的星空可见性"},{id:"starsIntensity",label:"星空强度",type:"range",min:0,max:5,step:.1,value:e.starsIntensity??1,displayValue:Number(e.starsIntensity??1).toFixed(1),disabled:t||!e.starsEnabled}]}function js(e={},t){const n=t||!e.cloudsEnabled;return[{id:"cloudsEnabled",label:"启用体积云·大气",type:"toggle",value:e.cloudsEnabled===!0,tooltip:"懒加载 Bruneton 大气 + 体积云 raymarch；默认「流畅」档，首次开启会加载约 29MB 纹理/LUT"},{id:"quality",label:"性能预设",type:"select",value:e.quality??Gt,options:Os(),disabled:n,tooltip:"流畅=仅云；均衡=云+轻 BSM/光晕；极致=全效果高采样"},{id:"layer0Coverage",label:"低云覆盖",type:"range",min:0,max:1,step:.01,value:e.layer0Coverage??.3,displayValue:`${Math.round((e.layer0Coverage??.3)*100)}%`,disabled:n},{id:"layer0Altitude",label:"低云底高",type:"range",min:0,max:8e3,step:50,value:e.layer0Altitude??1800,displayValue:`${Math.round(e.layer0Altitude??1800)} m`,disabled:n},{id:"layer0Height",label:"低云厚度",type:"range",min:50,max:5e3,step:50,value:e.layer0Height??650,displayValue:`${Math.round(e.layer0Height??650)} m`,disabled:n},{id:"layer1Coverage",label:"中云覆盖",type:"range",min:0,max:1,step:.01,value:e.layer1Coverage??.3,displayValue:`${Math.round((e.layer1Coverage??.3)*100)}%`,disabled:n},{id:"layer1Altitude",label:"中云底高",type:"range",min:0,max:12e3,step:50,value:e.layer1Altitude??2400,displayValue:`${Math.round(e.layer1Altitude??2400)} m`,disabled:n},{id:"layer1Height",label:"中云厚度",type:"range",min:50,max:6e3,step:50,value:e.layer1Height??1200,displayValue:`${Math.round(e.layer1Height??1200)} m`,disabled:n},{id:"layer2Coverage",label:"高云覆盖",type:"range",min:0,max:1,step:.01,value:e.layer2Coverage??.3,displayValue:`${Math.round((e.layer2Coverage??.3)*100)}%`,disabled:n},{id:"layer2Altitude",label:"高云底高",type:"range",min:2e3,max:16e3,step:100,value:e.layer2Altitude??7500,displayValue:`${Math.round(e.layer2Altitude??7500)} m`,disabled:n},{id:"layer2Height",label:"高云厚度",type:"range",min:50,max:4e3,step:50,value:e.layer2Height??500,displayValue:`${Math.round(e.layer2Height??500)} m`,disabled:n},{id:"sunIntensity",label:"太阳强度",type:"range",min:0,max:150,step:1,value:e.sunIntensity??20,displayValue:Number(e.sunIntensity??20).toFixed(0),disabled:n},{id:"cloudExposure",label:"云曝光",type:"range",min:.1,max:8,step:.1,value:e.cloudExposure??3,displayValue:Number(e.cloudExposure??3).toFixed(1),disabled:n,tooltip:"只影响云颜色，不影响底图"},{id:"skyToSunRatio",label:"天空/太阳比",type:"range",min:.05,max:.6,step:.01,value:e.skyToSunRatio??.28,displayValue:Number(e.skyToSunRatio??.28).toFixed(2),disabled:n},{id:"aerialPerspectiveScale",label:"大气透视",type:"range",min:0,max:3,step:.1,value:e.aerialPerspectiveScale??0,displayValue:Number(e.aerialPerspectiveScale??0).toFixed(1),disabled:n,tooltip:"Aerial 阶段近距离散射；过高会让底图过曝涂白"},{id:"atmosphereExposureDay",label:"大气曝光(白天)",type:"range",min:.1,max:3,step:.05,value:e.atmosphereExposureDay??1,displayValue:Number(e.atmosphereExposureDay??1).toFixed(2),disabled:n,tooltip:"乘到所有像素（含底图）；>1 会让底图偏白"},{id:"atmosphereExposureNight",label:"大气曝光(夜晚)",type:"range",min:0,max:1.5,step:.05,value:e.atmosphereExposureNight??.1,displayValue:Number(e.atmosphereExposureNight??.1).toFixed(2),disabled:n},{id:"atmosphereExposureManual",label:"大气曝光(手动)",type:"range",min:.1,max:5,step:.05,value:e.atmosphereExposureManual??1,displayValue:Number(e.atmosphereExposureManual??1).toFixed(2),disabled:n||e.atmosphereExposureFollowTimeline!==!1,tooltip:"关闭「曝光随时间轴」后生效"},{id:"atmosphereExposureFollowTimeline",label:"曝光随时间轴",type:"toggle",value:e.atmosphereExposureFollowTimeline!==!1,disabled:n},{id:"atmosphereStageEnabled",label:"Bruneton 天空",type:"toggle",value:e.atmosphereStageEnabled!==!1,disabled:n,tooltip:"关闭后只保留体积云 stage，天空回退为透传场景色"},{id:"aerialStageEnabled",label:"空中透视 stage",type:"toggle",value:e.aerialStageEnabled!==!1,disabled:n,tooltip:"链末端 ACES/几何透视；流畅档默认关闭以省 GPU"},{id:"windSpeed",label:"风速",type:"range",min:0,max:1,step:1e-4,value:e.windSpeed??0,displayValue:Number(e.windSpeed??0).toFixed(4),disabled:n},{id:"evolutionSpeed",label:"云演化速度",type:"range",min:0,max:.02,step:5e-4,value:e.evolutionSpeed??.005,displayValue:Number(e.evolutionSpeed??.005).toFixed(4),disabled:n},{id:"maxSteps",label:"主采样步数",type:"range",min:64,max:1e3,step:1,value:e.maxSteps??500,displayValue:String(Math.round(e.maxSteps??500)),disabled:n,tooltip:"越大越清晰但越耗 GPU（流畅约 140 / 均衡约 280 / 极致 500）"},{id:"multiScatteringOctaves",label:"多散射阶数",type:"range",min:1,max:12,step:1,value:e.multiScatteringOctaves??8,displayValue:String(Math.round(e.multiScatteringOctaves??8)),disabled:n},{id:"useShadowBuffer",label:"BSM 云阴影",type:"toggle",value:e.useShadowBuffer!==!1,disabled:n,tooltip:"Beer Shadow Map：云对地面投影（流畅档关闭）"},{id:"shadowLengthEnabled",label:"丁达尔光柱",type:"toggle",value:e.shadowLengthEnabled!==!1,disabled:n,tooltip:"阴影长度采样（流畅档关闭）"},{id:"bsmGroundScale",label:"地面阴影强度",type:"range",min:.1,max:10,step:.1,value:e.bsmGroundScale??.3,displayValue:Number(e.bsmGroundScale??.3).toFixed(1),disabled:n||e.useShadowBuffer===!1},{id:"bsmTyndallScale",label:"光柱强度",type:"range",min:.1,max:10,step:.1,value:e.bsmTyndallScale??1,displayValue:Number(e.bsmTyndallScale??1).toFixed(1),disabled:n||e.shadowLengthEnabled===!1},{id:"shadowFar",label:"阴影覆盖距离",type:"range",min:1e4,max:2e5,step:1e3,value:e.shadowFar??4e4,displayValue:`${Math.round((e.shadowFar??4e4)/1e3)} km`,disabled:n||e.useShadowBuffer===!1},{id:"hazeEnabled",label:"雾霾",type:"toggle",value:e.hazeEnabled===!0,disabled:n},{id:"temporalEnabled",label:"TAA 时序滤波",type:"toggle",value:e.temporalEnabled===!0,disabled:n,tooltip:"原生 WebGL PBO 时序抗锯齿，可能与部分 GPU 驱动不兼容"},{id:"lensFlareEnabled",label:"镜头光晕",type:"toggle",value:e.lensFlareEnabled!==!1,disabled:n,tooltip:"流畅档默认关闭"},{id:"bloomIntensity",label:"光晕 Bloom",type:"range",min:0,max:3,step:.05,value:e.bloomIntensity??.6,displayValue:Number(e.bloomIntensity??.6).toFixed(2),disabled:n||e.lensFlareEnabled===!1},{id:"ghostIntensity",label:"鬼影强度",type:"range",min:0,max:3,step:.05,value:e.ghostIntensity??1.1,displayValue:Number(e.ghostIntensity??1.1).toFixed(2),disabled:n||e.lensFlareEnabled===!1},{id:"haloIntensity",label:"Halo 强度",type:"range",min:0,max:2,step:.05,value:e.haloIntensity??.2,displayValue:Number(e.haloIntensity??.2).toFixed(2),disabled:n||e.lensFlareEnabled===!1}]}function qs(e){return e==="balanced"?"均衡":e==="ultra"?"极致":"流畅"}function Vs(e={}){return[{id:"enableLighting",label:"日照",type:"toggle",value:e.enableLighting!==!1,tooltip:"Cesium globe.enableLighting：启用日照贴图"},{id:"showGroundAtmosphere",label:"地面大气",type:"toggle",value:e.showGroundAtmosphere!==!1,tooltip:"globe.showGroundAtmosphere：地面大气光晕"},{id:"dynamicAtmosphereLighting",label:"动态光照",type:"toggle",value:e.dynamicAtmosphereLighting!==!1},{id:"atmosphereLightIntensity",label:"大气光强",type:"range",min:0,max:25,step:.5,value:e.atmosphereLightIntensity??5.5,displayValue:Number(e.atmosphereLightIntensity??5.5).toFixed(1)},{id:"fogEnabled",label:"雾效",type:"toggle",value:e.fogEnabled!==!1},{id:"fogDensity",label:"雾密度",type:"range",min:1e-5,max:.001,step:1e-5,value:e.fogDensity??12e-5,displayValue:Number(e.fogDensity??12e-5).toFixed(5),disabled:!e.fogEnabled},{id:"sunShow",label:"太阳",type:"toggle",value:e.sunShow!==!1},{id:"moonShow",label:"月亮",type:"toggle",value:e.moonShow!==!1},{id:"skyBoxShow",label:"星空盒",type:"toggle",value:e.skyBoxShow!==!1}]}function Xs(e={},t=!1){return[{id:"elevation",label:"高度角",type:"range",min:2,max:80,step:.1,value:e.elevation??30,displayValue:Number(e.elevation??30).toFixed(1),disabled:t},{id:"azimuth",label:"方位角",type:"range",min:-180,max:180,step:.1,value:e.azimuth??150,displayValue:Number(e.azimuth??150).toFixed(1),disabled:t},{id:"clarity",label:"清澈度",type:"range",min:.03,max:.4,step:.005,value:e.clarity??.085,displayValue:Number(e.clarity??.085).toFixed(3),tooltip:"越小越清澈(Beer-Lambert 密度)",disabled:t},{id:"causticStrength",label:"焦散强度",type:"range",min:0,max:2,step:.05,value:e.causticStrength??.9,displayValue:Number(e.causticStrength??.9).toFixed(2),disabled:t},{id:"waveHeight",label:"浪高",type:"range",min:0,max:1.5,step:.05,value:e.waveHeight??.5,displayValue:Number(e.waveHeight??.5).toFixed(2),disabled:t},{id:"foamWidth",label:"泡沫宽度",type:"range",min:0,max:8,step:.1,value:e.foamWidth??2.4,displayValue:Number(e.foamWidth??2.4).toFixed(1),disabled:t},{id:"reflection",label:"反射强度",type:"range",min:0,max:1,step:.02,value:e.reflection??.38,displayValue:Number(e.reflection??.38).toFixed(2),disabled:t},{id:"waterColor",label:"远处浅水色",type:"color",value:e.waterColor??"#2bb3c4",disabled:t},{id:"cloudCoverage",label:"云量",type:"range",min:0,max:1,step:.01,value:e.cloudCoverage??.58,displayValue:Number(e.cloudCoverage??.58).toFixed(2),disabled:t},{id:"lightningEnabled",label:"闪电开关",type:"toggle",value:e.lightningEnabled!==!1,disabled:t},{id:"lightningInterval",label:"闪电间隔(秒)",type:"range",min:.4,max:8,step:.1,value:e.lightningInterval??2,displayValue:Number(e.lightningInterval??2).toFixed(1),disabled:t||e.lightningEnabled===!1}]}function Ks(e){return e.endsWith("/")?e:`${e}/`}function Ys(e){const n=`${Ks(e)}cloud-atmosphere/`;return{cloudsAssetsBase:`${n}clouds-assets/`,brunetonShaderBase:`${n}shaders/bruneton/`,blueNoiseUrl:`${n}noise/noisergba256.png`,atmosphereAssetsBase:`${n}assets/`,atmosphereShaderBase:`${n}shaders/`}}function ia(e,t){if(!(e!=null&&e.params)||!t)return;const n=e.params,a=n.layers;typeof t.cloudsEnabled=="boolean"&&(n.cloudsVisible=t.cloudsEnabled,e.cloudStage&&(e.cloudStage.enabled=t.cloudsEnabled)),a!=null&&a[0]&&(Ce(t.layer0Altitude)!=null&&(a[0].altitude=Ce(t.layer0Altitude)),Ce(t.layer0Height)!=null&&(a[0].height=Ce(t.layer0Height)),Ce(t.layer0Coverage)!=null&&(a[0].coverage=Ce(t.layer0Coverage))),a!=null&&a[1]&&(Ce(t.layer1Altitude)!=null&&(a[1].altitude=Ce(t.layer1Altitude)),Ce(t.layer1Height)!=null&&(a[1].height=Ce(t.layer1Height)),Ce(t.layer1Coverage)!=null&&(a[1].coverage=Ce(t.layer1Coverage))),a!=null&&a[2]&&(Ce(t.layer2Altitude)!=null&&(a[2].altitude=Ce(t.layer2Altitude)),Ce(t.layer2Height)!=null&&(a[2].height=Ce(t.layer2Height)),Ce(t.layer2Coverage)!=null&&(a[2].coverage=Ce(t.layer2Coverage)));const l=["sunIntensity","cloudExposure","skyToSunRatio","aerialPerspectiveScale","magentaFixStrength","scatterG1","scatterG2","multiScatteringOctaves","windSpeed","evolutionSpeed","distFadeStart","distFadeEnd","maxSteps","shadowFar","shadowSplitLambda","shadowFadeScale"];for(const g of l){const S=Ce(t[g]);S!=null&&(n[g]=S)}const o=Ce(t.aerialPerspectiveScale);o!=null&&(n.aerialPerspectiveScale=o,e.aerial&&(e.aerial._aerialPerspectiveScale=o)),typeof t.useShadowBuffer=="boolean"&&(n.useShadowBuffer=t.useShadowBuffer),typeof t.shadowLengthEnabled=="boolean"&&(n.shadowLengthEnabled=t.shadowLengthEnabled),typeof t.hazeEnabled=="boolean"&&(n.hazeEnabled=t.hazeEnabled),typeof t.temporalEnabled=="boolean"&&(n.temporalEnabled=t.temporalEnabled);const r=Ce(t.bsmGroundScale),b=Ce(t.bsmTyndallScale);r!=null&&(n._bsmGroundScale=r,e.atmosphere&&(e.atmosphere._bsmGroundOpticalDepthScale=r),e.aerial&&(e.aerial._bsmGroundOpticalDepthScale=r)),b!=null&&(n._bsmTyndallScale=b,e.atmosphere&&(e.atmosphere._bsmTyndallOpticalDepthScale=b),e.aerial&&(e.aerial._bsmTyndallOpticalDepthScale=b)),Js(e.atmosphere,t),Zs(e,t)}function Zs(e,t){var n,a;typeof t.atmosphereStageEnabled=="boolean"&&((n=e.atmosphere)!=null&&n.stage)&&(e.atmosphere.stage.enabled=t.atmosphereStageEnabled),typeof t.aerialStageEnabled=="boolean"&&((a=e.aerial)!=null&&a.stage)&&(e.aerial.stage.enabled=t.aerialStageEnabled)}function Js(e,t){if(!e)return;const n=Ce(t.atmosphereExposureDay),a=Ce(t.atmosphereExposureNight),l=Ce(t.atmosphereExposureManual);n!=null&&(e._exposureDay=n),a!=null&&(e._exposureNight=a),l!=null&&(e._atmosphereExposure=l),typeof t.atmosphereExposureFollowTimeline=="boolean"&&(e._exposureFollowTimeline=t.atmosphereExposureFollowTimeline)}function ra(e,t){var o,r,b;if(!e||!t)return;typeof t.lensFlareEnabled=="boolean"&&e.stage&&(e.stage.enabled=t.lensFlareEnabled);const n=Ce(t.bloomIntensity),a=Ce(t.ghostIntensity),l=Ce(t.haloIntensity);n!=null&&((o=e.setBloomIntensity)==null||o.call(e,n)),a!=null&&((r=e.setGhostIntensity)==null||r.call(e,a)),l!=null&&((b=e.setHaloIntensity)==null||b.call(e,l))}function Ce(e){const t=Number(e);return Number.isFinite(t)?t:null}function Qs({viewer:e,cloudParams:t,atmosphereParams:n,advancedEffectControls:a,enableGui:l=!1,message:o}={}){var D;if(!e)return()=>{};let r=null,b=null,g=null,S=!1,E=null;const R=el(e),w=((D=a==null?void 0:a.value)==null?void 0:D.atmosphere)===!0;async function C(){if(!S&&!r){if(g){await g;return}g=(async()=>{var M,i,c,h;try{typeof window<"u"&&!window.Cesium&&globalThis.Cesium&&(window.Cesium=globalThis.Cesium);const{createCloudAtmosphere:u}=await yt(async()=>{const{createCloudAtmosphere:L}=await import("./createCloudAtmosphere-oCF6bh0g.js");return{createCloudAtmosphere:L}},__vite__mapDeps([11,3,12]),import.meta.url),{LensFlareBloomStage:y}=await yt(async()=>{const{LensFlareBloomStage:L}=await import("./LensFlareBloomStage-B2e7fUow.js");return{LensFlareBloomStage:L}},__vite__mapDeps([13,12]),import.meta.url);if(S)return;tl(e),a!=null&&a.value&&a.value.atmosphere!==!1&&(a.value={...a.value,atmosphere:!1});const m=Ys("./"),s=await u(e,{enableGui:l,...m});if(S){try{s.destroy()}catch{}return}r=s,ia(r,(t==null?void 0:t.value)??{});const f=new y(e,{bloomIntensity:Number((M=t==null?void 0:t.value)==null?void 0:M.bloomIntensity)||.6,ghostIntensity:Number((i=t==null?void 0:t.value)==null?void 0:i.ghostIntensity)||1.1,haloIntensity:Number((c=t==null?void 0:t.value)==null?void 0:c.haloIntensity)||.2});f.init(),((h=t==null?void 0:t.value)==null?void 0:h.lensFlareEnabled)===!1&&f.stage&&(f.stage.enabled=!1),b=f,ra(b,(t==null?void 0:t.value)??{})}catch(u){throw oa(e,R),r=null,b=null,u}finally{g=null}})(),await g}}function T(){var M,i;o&&E&&(o.remove(E),E=null);try{(M=b==null?void 0:b.destroy)==null||M.call(b)}catch{}b=null;try{(i=r==null?void 0:r.destroy)==null||i.call(r)}catch{}r=null,oa(e,R),a!=null&&a.value&&w&&(a.value={...a.value,atmosphere:!0})}const _=Ie(()=>t==null?void 0:t.value,async M=>{if(!(S||!M))if(M.cloudsEnabled){o&&!r&&!E&&(E=o.info("体积云资源加载中（需加载约 4 个 8MB 纹理文件），请稍候...",{closable:!1,duration:0}));try{if(await C(),S)return;o&&E&&(o.remove(E),E=null,o.success("体积云已就绪")),ia(r,M),ra(b,M)}catch{o&&E&&(o.remove(E),E=null),o&&o.error("体积云加载失败，请稍后重试")}}else r&&T()},{deep:!0,immediate:!0});return function(){S=!0;try{_()}catch{}T()}}function el(e){const t=e==null?void 0:e.scene;return{skyAtmosphereShow:t!=null&&t.skyAtmosphere?t.skyAtmosphere.show:void 0,skyBoxShow:t!=null&&t.skyBox?t.skyBox.show:void 0}}function tl(e){const t=e==null?void 0:e.scene;t&&(t.skyAtmosphere&&(t.skyAtmosphere.show=!1),t.skyBox&&(t.skyBox.show=!1))}function oa(e,t){const n=e==null?void 0:e.scene;!n||!t||(n.skyAtmosphere&&t.skyAtmosphereShow!==void 0&&(n.skyAtmosphere.show=t.skyAtmosphereShow),n.skyBox&&t.skyBoxShow!==void 0&&(n.skyBox.show=t.skyBoxShow))}const{getLayerIdByIndex:nl,getLayerIndexById:sa}=xi({urlLayerOptions:va,getLayerCategoryById:Aa,getLayerGroupById:Da}),cn=-90,Sn=1,xa=5e7;function al({getViewer:e,getCesium:t,onCameraViewSync:n,onBasemapRestore:a}={}){const l=Ta(),o=Ma();let r=null;function b(i){return Si(i,l.query)}function g(){const i=String(b(Mn)||"").trim(),c=mt(b("lng")),h=mt(b("lat")),u=il(b("z")),y=wi(i);if(y&&c!==null&&h!==null&&u!==null){const s={lng:c,lat:h,height:u,...y};if(la(s))return s}const m=_i(i);return la(m)?m:c===null||h===null||u===null||c<-180||c>180||h<-90||h>90?null:{lng:c,lat:h,height:u,heading:mt(b("heading"))??0,pitch:mt(b("pitch"))??cn,roll:mt(b("roll"))??0}}function S({duration:i=0}={}){const c=e==null?void 0:e(),h=t==null?void 0:t(),u=g();if(!(c!=null&&c.camera)||!h||!u)return!1;const y=h.Cartesian3.fromDegrees(u.lng,u.lat,u.height),m={heading:rn(h,u.heading??0),pitch:rn(h,rl(u.pitch??cn)),roll:rn(h,u.roll??0)};return Number(i)>0?(c.camera.flyTo({destination:y,orientation:m,duration:Number(i)}),!0):(c.camera.setView({destination:y,orientation:m}),!0)}function E(i){if(!i)return null;const c=sa(i);if(c===null)return null;const h={view:Xt,l:String(c)};return M(h),String(c)}function R(){const i=mt(b("l"));if(i===null)return null;const c=nl(i);return c&&(a==null||a(c)),c}function w({initialSync:i=!1,getActivePresetId:c}={}){const h=_();if(!(!(h!=null&&h.moveEnd)||r)&&(r=h.moveEnd.addEventListener(()=>{const u=c==null?void 0:c();T({activePresetId:u})}),i)){const u=c==null?void 0:c();T({activePresetId:u})}}function C(){typeof r=="function"&&r(),r=null}function T({activePresetId:i}={}){const c=t==null?void 0:t(),h=_();if(!c||!(h!=null&&h.position))return;const u=c.Cartographic.fromCartesian(h.position);if(!u)return;const y=c.Math.toDegrees(u.longitude),m=c.Math.toDegrees(u.latitude),s=Number(u.height),f=c.Math.toDegrees(Number(h.heading)||0),L=c.Math.toDegrees(Number(h.pitch)||0),O=c.Math.toDegrees(Number(h.roll)||0);if(!Number.isFinite(y)||!Number.isFinite(m)||!Number.isFinite(s))return;const d=Math.max(Sn,s),F=bi({heading:f,pitch:L,roll:O});if(!F||F==="0")return;const P={view:Xt,camera:{lng:y,lat:m,height:d,heading:f,pitch:L,roll:O}},x={view:Xt,[Mn]:F,lng:ca(y,6),lat:ca(m,6),z:ol(d)},k=i;if(k){const z=sa(k);z!==null&&(x.l=String(z))}M(x),n==null||n(P)}function _(){var c;const i=e==null?void 0:e();return(i==null?void 0:i.camera)||((c=i==null?void 0:i.scene)==null?void 0:c.camera)||null}function D(i,c){const h=Object.keys(i).filter(y=>i[y]!==void 0&&i[y]!==null&&i[y]!==""),u=Object.keys(c).filter(y=>c[y]!==void 0&&c[y]!==null&&c[y]!=="");return h.length!==u.length?!1:u.every(y=>String(i[y]??"")===String(c[y]??""))}function M(i){const c={...Bn(l.query),...i};Ca.forEach(u=>{u in i||delete c[u]}),Object.keys(c).forEach(u=>{const y=c[u];y==null||y===""?delete c[u]:c[u]=String(y)});const h=Bn(l.query);D(h,c)||o.replace({path:l.path||"/home",query:c}).catch(()=>{})}return{restoreCameraFromUrl:S,restoreBasemapFromUrl:R,syncBasemapToUrl:E,bindCameraViewSync:w,cleanupCameraViewSync:C}}function mt(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function il(e){const t=mt(e);return t===null||t<Sn||t>xa?null:t}function la(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),a=Number(e.height),l=Number(e.heading),o=Number(e.pitch),r=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(a)&&a>=Sn&&a<=xa&&Number.isFinite(l)&&Number.isFinite(o)&&o>=-90&&o<=90&&Number.isFinite(r)}function rl(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):cn}function ca(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function ol(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function rn(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const Xe={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},sl=new Float32Array([-1,-1,1,-1,1,1,-1,1]),ll=new Float32Array([0,0,1,0,1,1,0,1]),cl=new Uint16Array([0,1,2,0,2,3]);function ft(e,t,n){return Math.max(t,Math.min(n,e))}function Me(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function ul(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),a=Math.min(2048,n),l=Math.max(1,Math.floor(e)),o=Math.sqrt(l),r=Math.log2(o),b=Number.isFinite(r)?Math.round(r):4;let g=Math.pow(2,b);return g=ft(g,16,a),g}function dl(e){const t=e*e,n=new Float32Array(t*4);for(let a=0;a<t;a+=1){const l=a*4;n[l]=Math.random(),n[l+1]=Math.random(),n[l+2]=Math.random(),n[l+3]=Math.random()}return n}function hl(e){return new Float32Array(e*e*4)}function fl(e,t,n,a,l){const o=t.createTexture();if(!o)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,o),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,a,0,t.RGBA,t.FLOAT,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let r=!1;return{_context:e,_texture:o,_target:t.TEXTURE_2D,_width:n,_height:a,destroy(){r||(t.deleteTexture(o),r=!0)}}}class ml{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const a={...Xe,...n};this.speedFactor=Me(a.speedFactor,Xe.speedFactor),this.cullSpeedMin=Me(a.cullSpeedMin,Xe.cullSpeedMin),this.cullSpeedMax=Me(a.cullSpeedMax,Xe.cullSpeedMax),this.windSpeedMin=Me(a.windSpeedMin,Xe.windSpeedMin),this.windSpeedMax=Me(a.windSpeedMax,Xe.windSpeedMax),this.arrowLength=Me(a.arrowLength,Xe.arrowLength),this.trailLength=Me(a.trailLength,Xe.trailLength),this.decaySpeed=Me(a.decaySpeed,Xe.decaySpeed),this.alphaFactor=Me(a.alphaFactor,Xe.alphaFactor),this.maxWindSpeed=Me(a.maxWindSpeed,Xe.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=Me(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=Me(t.longitude,NaN),a=Me(t.latitude,NaN),l=Array.isArray(t.altitude)?t.altitude:[],o=Array.isArray(t.sizeMesh)?t.sizeMesh:[],r=Array.isArray(t.count)?t.count:[],b=Array.isArray(t.hspeed)?t.hspeed:[],g=Array.isArray(t.hdir)?t.hdir:[],S=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(a))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const E=l.length;if(E<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(o.length!==E||r.length!==E)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const R=r.map(m=>Math.max(1,Math.floor(Me(m,1)))),w=o.map(m=>Math.max(1,Me(m,1))),C=l.map(m=>Me(m,0)),T=R.reduce((m,s)=>m+s*s,0);if(b.length<T||g.length<T||S.length<T)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=E,this.visibleLayerMin=0,this.visibleLayerMax=E-1,this._altitudes=C.slice(),this._maxNx=Math.max(...R),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*E;const _=new Float32Array(this._atlasWidth*this._atlasHeight*4);let D=0;for(let m=0;m<E;m+=1){const s=R[m],f=s;for(let L=0;L<f;L+=1)for(let O=0;O<s;O+=1){const d=D+L*s+O,F=((m*this._maxNy+L)*this._atlasWidth+O)*4,P=Number(b[d]),x=Number(g[d]),k=Number(S[d]);if(!(Number.isFinite(P)&&Number.isFinite(x))){_[F]=0,_[F+1]=0,_[F+2]=0,_[F+3]=0;continue}const $=x*Math.PI/180;_[F]=P*Math.sin($),_[F+1]=P*Math.cos($),_[F+2]=Number.isFinite(k)?k:0,_[F+3]=1}D+=s*f}this._createOrReplaceWindAtlasTexture(_);const M=Math.max(...w),i=this._maxNx*M,c=i/2/111320,h=a*Math.PI/180,u=Math.max(1e-6,Math.abs(Math.cos(h))),y=i/2/(111320*u);this._bounds={minLon:n-y,maxLon:n+y,minLat:a-c,maxLat:a+c,minHeight:Math.min(...C),maxHeight:Math.max(...C)},this._dataPointCount=T,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(Me(t,1))),a=ul(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&a===this._particleTextureSize||(this._particleTextureSize=a,this._particleCount=a*a,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=ft(Me(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const a=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(a)}setBounds(t,n,a,l){const o=Me(t,NaN),r=Me(n,NaN),b=Me(a,NaN),g=Me(l,NaN);if(!Number.isFinite(o)||!Number.isFinite(r)||!Number.isFinite(b)||!Number.isFinite(g))return;const S=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};S.minLon=Math.min(o,r),S.maxLon=Math.max(o,r),S.minLat=Math.min(b,g),S.maxLat=Math.max(b,g),this._bounds=S,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const l=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[l],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=l,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=fl(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,a=dl(n),l=hl(n);for(let o=0;o<2;o+=1){this._particlePositionTextures[o]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:a},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[o]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:l},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[o]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[o],this._velocityTextures[o]],destroyAttachments:!1});const r=this._framebuffers[o]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,r),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:sl,usage:t.BufferUsage.STATIC_DRAW}),a=t.Buffer.createVertexBuffer({context:this._context,typedArray:ll,usage:t.BufferUsage.STATIC_DRAW}),l=t.Buffer.createIndexBuffer({context:this._context,typedArray:cl,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:a,componentsPerAttribute:2}],indexBuffer:l})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let a=0;a<n.length;a+=1)n[a]=a;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:a,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:t.Pass.OPAQUE})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=ft(Math.floor(Me(this.visibleLayerMin,0)),0,this._layerCount-1),n=ft(Math.floor(Me(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const a=Math.max(1e-4,Me(this.maxWindSpeed,Xe.maxWindSpeed)),l=ft(Me(t,0)/a,0,1),o=ft(Me(n,a)/a,0,1);return{min:Math.min(l,o),max:Math.max(l,o)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>Me(this.speedFactor,Xe.speedFactor),maxWindSpeed:()=>Math.max(1e-4,Me(this.maxWindSpeed,Xe.maxWindSpeed)),decaySpeed:()=>ft(Me(this.decaySpeed,Xe.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>Me(this.arrowLength,Xe.arrowLength),trailLength:()=>Me(this.trailLength,Xe.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>ft(Me(this.alphaFactor,Xe.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function pl({getViewer:e,getCesium:t,message:n}){const a=Q(null),l=Q({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function o(){var E,R;const S=e==null?void 0:e();if(a.value){try{(R=(E=S==null?void 0:S.scene)==null?void 0:E.primitives)==null||R.remove(a.value)}catch{}a.value.destroy(),a.value=null}}function r(){const S=e==null?void 0:e(),E=t==null?void 0:t();if(!S||!E){n.error("Cesium 尚未初始化");return}o();const R=gl(E);a.value=new ml(S,{maxWindSpeed:20,cesium:E,speedFactor:l.value.speedFactor,arrowLength:l.value.arrowLength,trailLength:l.value.trailLength,alphaFactor:l.value.alphaFactor}),a.value.loadData(R),S.scene.primitives.add(a.value),a.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function b(){a.value&&(a.value.speedFactor=l.value.speedFactor,a.value.arrowLength=l.value.arrowLength,a.value.trailLength=l.value.trailLength,a.value.alphaFactor=l.value.alphaFactor)}function g(S,E){return S in l.value?(l.value={...l.value,[S]:Number(E)},b(),!0):!1}return{wind2D:a,windParams:l,clearWind2D:o,loadSimulatedWind:r,setWindParam:g}}function gl(e){const l=[0,2e3,5e3,1e4,15e3],o=[3e4,3e4,25e3,25e3,2e4],r=[30,30,25,25,20],b=r.reduce((w,C)=>w+C*C,0),g=new Array(b),S=new Array(b),E=new Array(b);let R=0;for(let w=0;w<5;w++){const C=r[w],T=r[w],_=o[w];for(let D=0;D<T;D++)for(let M=0;M<C;M++){const i=R+D*C+M,c=(M-C/2)*(_/111320),h=(D-T/2)*(_/111320/Math.cos(e.Math.toRadians(35))),y=Math.atan2(h,c)+Math.PI/2+.2*Math.sin(M*.5)*Math.cos(D*.5);S[i]=e.Math.toDegrees(y)%360;const m=Math.sqrt(c*c+h*h),f=Math.max(0,1-m/15);g[i]=(5+w*2)*f+2*Math.random(),E[i]=.5*Math.sin(M*.3)*Math.cos(D*.3)}R+=C*T}return{longitude:104,latitude:35,altitude:l,sizeMesh:o,count:r,hspeed:g,hdir:S,vspeed:E}}const Et=Object.freeze({LOADING:"loading",READY:"ready",ERROR:"error"});function un(e){if(!e)return null;if(Array.isArray(e)){const[a,l,o=0]=e;return typeof a!="number"||typeof l!="number"?null:{lng:a,lat:l,height:o}}const t=e.longitude??e.lng,n=e.latitude??e.lat;return typeof t!="number"||typeof n!="number"?null:{lng:t,lat:n,height:e.height??0}}function ua(e,t){const n=un(t.coordinates);if(!n)return null;const a=e.Cartesian3.fromDegrees(n.lng,n.lat,n.height),l=new e.HeadingPitchRoll(e.Math.toRadians(t.heading??0),e.Math.toRadians(t.pitch??0),e.Math.toRadians(t.roll??0)),o=e.Transforms.headingPitchRollToFixedFrame(a,l),r=t.scale;if(r!==void 0&&r!==1){let b=1,g=1,S=1;typeof r=="number"?b=g=S=r:typeof r=="object"&&(b=r.x??1,g=r.y??1,S=r.z??1);const E=e.Matrix4.fromScale(new e.Cartesian3(b,g,S));e.Matrix4.multiply(o,E,o)}return o}function vl({getViewer:e,getCesium:t,message:n}){const a=new Map;let l=0;const o=Q([]),r=ke(()=>o.value.filter(u=>u.state===Et.LOADING).length),b=ke(()=>o.value.filter(u=>u.state===Et.READY).length),g=ke(()=>o.value.length);function S(){o.value=Array.from(a.values()).map(u=>({...u.entry}))}function E(){do l++;while(a.has(`model-${l}`));return`model-${l}`}async function R(u){var O,d,F;const y=e==null?void 0:e(),m=t==null?void 0:t();if(!y||!m)return(O=n==null?void 0:n.error)==null||O.call(n,"Cesium 尚未初始化，无法加载模型"),null;const s=u.id??E();if(a.has(s))return(d=n==null?void 0:n.error)==null||d.call(n,`模型 "${s}" 已存在，请使用其他 ID`),null;const f=un(u.coordinates),L={id:s,name:u.name??s,url:u.url,coordinates:f,heading:u.heading??0,pitch:u.pitch??0,roll:u.roll??0,scale:u.scale??1,state:Et.LOADING,metadata:u.metadata??{},addedAt:Date.now(),errorMessage:null};a.set(s,{primitive:null,objectUrl:null,entry:L}),S();try{const P=ua(m,{coordinates:L.coordinates,heading:L.heading,pitch:L.pitch,roll:L.roll,scale:L.scale});if(!P)throw new Error("坐标无效，无法计算模型矩阵");const x={url:u.url,modelMatrix:P,minimumPixelSize:u.minimumPixelSize??64,maximumScale:2e4,scene:y.scene};let k;if(typeof m.Model.fromGltfAsync=="function")k=await m.Model.fromGltfAsync(x);else if(typeof m.Model.fromGltf=="function")k=m.Model.fromGltf(x);else throw new Error("当前 Cesium 版本不支持 Model API");y.scene.primitives.add(k);const z=a.get(s);z.primitive=k;const $=()=>{const X=a.get(s);if(X&&(X.entry.state=Et.READY,S(),u.autoPlayAnimation!==!1))try{k.activeAnimations.addAll({loop:m.ModelAnimationLoop.REPEAT})}catch{}};return k.readyEvent?k.readyEvent.addEventListener($):$(),k.errorEvent&&k.errorEvent.addEventListener(X=>{const le=a.get(s);le&&(le.entry.state=Et.ERROR,le.entry.errorMessage=(X==null?void 0:X.message)??"模型加载异常",S())}),S(),{...L}}catch(P){const x=a.get(s);return x!=null&&x.objectUrl&&URL.revokeObjectURL(x.objectUrl),a.delete(s),S(),(F=n==null?void 0:n.error)==null||F.call(n,`模型加载失败: ${P.message}`),null}}async function w(u,y={}){const m=URL.createObjectURL(u),s=await R({...y,url:m,name:y.name??u.name.replace(/\.(glb|gltf)$/i,"")});if(s){const f=a.get(s.id);f&&(f.objectUrl=m)}else URL.revokeObjectURL(m);return s}function C(u){var s;const y=e==null?void 0:e(),m=a.get(u);if(m){if(m.primitive&&y)try{y.scene.primitives.remove(m.primitive)}catch{}if((s=m.primitive)!=null&&s.destroy)try{m.primitive.destroy()}catch{}m.objectUrl&&URL.revokeObjectURL(m.objectUrl),a.delete(u),S()}}function T(u,y={}){const m=t==null?void 0:t(),s=a.get(u);if(!s||!m)return!1;const f=s.entry;if(y.coordinates&&(f.coordinates=un(y.coordinates)),y.heading!==void 0&&(f.heading=y.heading),y.pitch!==void 0&&(f.pitch=y.pitch),y.roll!==void 0&&(f.roll=y.roll),y.scale!==void 0&&(f.scale=y.scale),y.name&&(f.name=y.name),y.metadata&&(f.metadata={...f.metadata,...y.metadata}),s.primitive){const L=ua(m,{coordinates:f.coordinates,heading:f.heading,pitch:f.pitch,roll:f.roll,scale:f.scale});L&&(s.primitive.modelMatrix=L)}return S(),!0}function _(u,y={}){const m=e==null?void 0:e(),s=t==null?void 0:t(),f=a.get(u);if(!f||!m||!s)return;const L=f.entry.coordinates;if(!L)return;const{range:O=200,heading:d=0,pitch:F=-30,duration:P=2}=y,x=L.height+O*.3;m.camera.flyTo({destination:s.Cartesian3.fromDegrees(L.lng,L.lat,x),orientation:{heading:s.Math.toRadians(d),pitch:s.Math.toRadians(F),roll:0},duration:P})}function D(u,y,m={}){const s=a.get(u),f=t==null?void 0:t();if(!(!(s!=null&&s.primitive)||!f))try{const L=s.primitive,O=m.loop!==!1?f.ModelAnimationLoop.REPEAT:f.ModelAnimationLoop.NONE;if(y){let d=!1;const F=L.activeAnimations;for(let P=0;P<F.length;P++)if(F.get(P).name===y){F.get(P).playing=!0,d=!0;break}d||L.activeAnimations.add({name:y,loop:O,speedup:m.speedup??1})}else L.activeAnimations.addAll({loop:O,speedup:m.speedup??1})}catch{}}function M(u){const y=a.get(u);if(y!=null&&y.primitive)try{const m=y.primitive.activeAnimations;for(let s=0;s<m.length;s++)m.get(s).playing=!1}catch{}}function i(u){const y=a.get(u);return y?{...y.entry}:null}function c(u){var y;return((y=a.get(u))==null?void 0:y.primitive)??null}function h(){const u=Array.from(a.keys());for(const y of u)C(y);a.clear(),S()}return{models:o,loadingCount:r,readyCount:b,modelCount:g,addModel:R,addModelFromFile:w,removeModel:C,updateModel:T,flyToModel:_,playAnimation:D,stopAnimation:M,getModel:i,getModelPrimitive:c,dispose:h}}const on=Object.freeze({linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2});class da{constructor(t={}){this.stiffness=t.stiffness??120,this.damping=t.damping??20,this.mass=t.mass??1,this.threshold=t.threshold??.01,this._current=0,this._target=0,this._velocity=0,this._active=!1}get current(){return this._current}get target(){return this._target}get active(){return this._active}setTarget(t){this._target=t,this._active=!0}setCurrent(t){this._current=t,this._velocity=0}update(t){if(!this._active)return this._current;const n=this._current-this._target,a=-this.stiffness*n,l=-this.damping*this._velocity,o=(a+l)/this.mass;return this._velocity+=o*t,this._current+=this._velocity*t,Math.abs(n)<this.threshold&&Math.abs(this._velocity)<this.threshold&&(this._current=this._target,this._velocity=0,this._active=!1),this._current}reset(){this._current=0,this._target=0,this._velocity=0,this._active=!1}}const St=Object.freeze({IDLE:"idle",FLYING:"flying",CANCELLED:"cancelled"});function yl({getViewer:e,getCesium:t}){let n=0,a=null,l=null;const o=Q(St.IDLE),r=ke(()=>a);function b(){l!==null&&(cancelAnimationFrame(l),l=null),a=null,o.value=St.CANCELLED}function g(i){const c=e==null?void 0:e(),h=t==null?void 0:t();if(!c||!h)return null;i.cancelPrevious!==!1&&b();const u=D(h,i.destination);if(!u)return null;const y=c.camera,m=y.heading,s=y.pitch,f=y.roll,L=y.positionWC.clone(),O=i.orientation??{},d=h.Math.toRadians(O.heading??h.Math.toDegrees(m)),F=h.Math.toRadians(O.pitch??h.Math.toDegrees(s)),P=h.Math.toRadians(O.roll??h.Math.toDegrees(f));let x=u.clone();if(i.maximumHeight!==void 0){const fe=h.Cartographic.fromCartesian(u);fe.height>i.maximumHeight&&(x=h.Cartesian3.fromRadians(fe.longitude,fe.latitude,i.maximumHeight))}const k=i.easing??"easeInOutCubic",z=on[k]??on.easeInOutCubic,$=i.duration??2.5,X=++n;a=X,o.value=St.FLYING;let le=null;function J(fe){var Te,Ee;if(a!==X)return;le===null&&(le=fe);const be=(fe-le)/1e3,ce=Math.min(be/$,1),B=z(ce),G=h.Cartesian3.lerp(L,x,B,new h.Cartesian3),U=M(m,d,B),he=s+(F-s)*B,De=f+(P-f)*B;y.setView({destination:G,orientation:{heading:U,pitch:he,roll:De}}),(Te=i.onTick)==null||Te.call(i,ce,G),ce<1?l=requestAnimationFrame(J):(l=null,a===X&&(a=null,o.value=St.IDLE,(Ee=i.onComplete)==null||Ee.call(i)))}return l=requestAnimationFrame(J),X}function S(i,c,h=1e3,u={}){return g({...u,destination:{longitude:i,latitude:c,height:h}})}function E(i,c,h={}){const u=e==null?void 0:e(),y=t==null?void 0:t();if(!u||!y)return null;const m=y.Cartesian3.fromDegrees(i.longitude,i.latitude,i.height),s=y.Cartesian3.fromDegrees(c.longitude,c.latitude,c.height),f=y.Cartesian3.subtract(s,m,new y.Cartesian3);y.Cartesian3.normalize(f,f);const L=Math.atan2(f.x,f.y),O=Math.asin(f.z);return g({...h,destination:i,orientation:{heading:y.Math.toDegrees(L),pitch:y.Math.toDegrees(O),roll:0}})}function R(i,c={}){const h=e==null?void 0:e(),u=t==null?void 0:t();if(!h||!u)return null;const y=new u.Rectangle.fromDegrees(i.west,i.south,i.east,i.north),m=u.Rectangle.center(y),f=u.Math.toDegrees(y.east-y.west)*.8;return g({...c,destination:{longitude:u.Math.toDegrees(m.longitude),latitude:u.Math.toDegrees(m.latitude),height:Math.max(f*111e3,1e3)},orientation:{heading:0,pitch:-45,roll:0}})}function w(i){const c=e==null?void 0:e(),h=t==null?void 0:t();if(!c||!h)return null;b();const u=new da(i.spring),y=h.Cartographic.fromCartesian(c.camera.positionWC);u.setCurrent(y.height),u.setTarget(i.targetHeight);const m=++n;a=m,o.value=St.FLYING;let s=null;function f(L){var P;if(a!==m)return;if(s===null){s=L;return}const O=(L-s)/1e3;s=L;const d=u.update(O),F=h.Cartesian3.fromRadians(y.longitude,y.latitude,d);c.camera.setView({destination:F,orientation:{heading:c.camera.heading,pitch:c.camera.pitch,roll:c.camera.roll}}),u.active?l=requestAnimationFrame(f):(l=null,a===m&&(a=null,o.value=St.IDLE,(P=i.onComplete)==null||P.call(i)))}return l=requestAnimationFrame(f),m}function C(){const i=e==null?void 0:e(),c=t==null?void 0:t();if(!i||!c)return null;const h=c.Cartographic.fromCartesian(i.camera.positionWC);return{longitude:c.Math.toDegrees(h.longitude),latitude:c.Math.toDegrees(h.latitude),height:h.height,heading:c.Math.toDegrees(i.camera.heading),pitch:c.Math.toDegrees(i.camera.pitch),roll:c.Math.toDegrees(i.camera.roll)}}function T(i=6){const c=C();if(!c)return"--";const h=c.longitude>=0?"E":"W",u=c.latitude>=0?"N":"S";return`${Math.abs(c.longitude).toFixed(i)}°${h}, ${Math.abs(c.latitude).toFixed(i)}°${u}, ${c.height.toFixed(1)}m`}function _(){b()}function D(i,c){if(!c)return null;if(c instanceof i.Cartesian3)return c;if(Array.isArray(c)){const[y,m,s=0]=c;return i.Cartesian3.fromDegrees(y,m,s)}const h=c.longitude??c.lng,u=c.latitude??c.lat;return typeof h=="number"&&typeof u=="number"?i.Cartesian3.fromDegrees(h,u,c.height??0):null}function M(i,c,h){let u=c-i;for(;u>Math.PI;)u-=2*Math.PI;for(;u<-Math.PI;)u+=2*Math.PI;return i+u*h}return{flightState:o,currentFlightId:r,enhancedFlyTo:g,cancelFlight:b,flyToPosition:S,flyToAndLookAt:E,flyToRectangle:R,springToHeight:w,SpringController:da,getCameraState:C,getFormattedPosition:T,cleanup:_,EasingFunctions:on}}function At(e,t){return{longitude:e.Math.toDegrees(t.longitude),latitude:e.Math.toDegrees(t.latitude),height:t.height}}function ha(e,t){if(!t)return null;if(t instanceof e.Cartographic)return t;if(Array.isArray(t)){const[l,o,r=0]=t;return e.Cartographic.fromDegrees(l,o,r)}const n=t.longitude??t.lng,a=t.latitude??t.lat;return typeof n=="number"&&typeof a=="number"?e.Cartographic.fromDegrees(n,a,t.height??0):null}class bl{constructor(t,n){this.data=t,this.timestamp=n}isExpired(t){return Date.now()-this.timestamp>t}}function xl({getViewer:e,getCesium:t}){const n=new Map,a=300*1e3,l=5,o=Q(!1),r=Q(0);function b(M,i){return`${M.toFixed(l)},${i.toFixed(l)}`}function g(M,i){const c=b(M,i),h=n.get(c);return h&&!h.isExpired(a)?{...h.data}:(h&&n.delete(c),null)}function S(M){const i=b(M.longitude,M.latitude);n.set(i,new bl({...M},Date.now()))}function E(){n.clear()}function R(M){const i=e==null?void 0:e(),c=t==null?void 0:t();if(!i||!c||!M)return null;const{x:h,y:u}=M,y=i.camera.getPickRay(new c.Cartesian2(h,u));if(!y)return null;const m=i.scene.pickPositionSupported?i.scene.pickPosition(new c.Cartesian2(h,u)):i.scene.globe.pick(y,i.scene);if(!m){const f=i.scene.globe.ellipsoid,L=i.scene.camera.pickEllipsoid(new c.Cartesian2(h,u),f);if(!L)return null;const O=c.Cartographic.fromCartesian(L);return At(c,O)}const s=c.Cartographic.fromCartesian(m);return At(c,s)}async function w(M,i={}){const{maxRetries:c=3,retryDelay:h=200}=i;for(let u=0;u<c;u++){const y=R(M);if(y)return y;u<c-1&&await new Promise(m=>setTimeout(m,h))}return null}function C(M,i={}){const c=e==null?void 0:e(),h=t==null?void 0:t();if(!c||!h)return null;const u=ha(h,M);if(!u)return null;const y=h.Math.toDegrees(u.longitude),m=h.Math.toDegrees(u.latitude);if(i.useCache!==!1){const s=g(y,m);if(s)return s}try{const s=i.terrainDetailLevel??0,f=[u],L=s===0?h.sampleTerrain(c.terrainProvider,0,f):h.sampleTerrainMostDetailed(c.terrainProvider,f);if(L&&L.length>0){const O=At(h,L[0]);return S(O),O}}catch{}return null}async function T(M,i={}){const c=e==null?void 0:e(),h=t==null?void 0:t();if(!c||!h||!(M!=null&&M.length))return[];o.value=!0,r.value=0;try{const u=[],y=[],m=[];for(let s=0;s<M.length;s++){const f=ha(h,M[s]);if(!f){u.push(null);continue}const L=h.Math.toDegrees(f.longitude),O=h.Math.toDegrees(f.latitude);if(i.useCache!==!1&&!i.skipCached){const d=g(L,O);if(d){u.push(d);continue}}u.push(null),y.push(f),m.push(s)}if(y.length===0)return r.value=1,u;try{const s=c.terrainProvider,f=s._bottomLevel?Math.max(0,s._bottomLevel-1):Math.min(s.maximumLevel??12,12),L=await h.sampleTerrain(s,f,y);for(let O=0;O<L.length;O++){const d=At(h,L[O]);u[m[O]]=d,S(d),i.onProgress&&i.onProgress(O+1,y.length),r.value=(O+1)/y.length}}catch{for(let f=0;f<y.length;f++){try{const L=y[f],O=h.sampleTerrain(c.terrainProvider,17,[L]),d=O instanceof Promise?await O:O;if((d==null?void 0:d.length)>0){const F=At(h,d[0]);u[m[f]]=F,S(F)}}catch{}i.onProgress&&i.onProgress(f+1,y.length),r.value=(f+1)/y.length}}return u}finally{o.value=!1}}async function _(M,i={}){if(!(t==null?void 0:t()))return null;const{west:h,south:u,east:y,north:m}=M,s=Math.max(2,Math.ceil(Math.sqrt(i.sampleCount??9))),f=[];for(let x=0;x<s;x++)for(let k=0;k<s;k++){const z=h+(y-h)*(k/(s-1)),$=u+(m-u)*(x/(s-1));f.push([z,$])}const O=(await T(f,{useCache:!0})).filter(x=>x!==null).map(x=>x.height);if(O.length===0)return null;const d=Math.min(...O),F=Math.max(...O),P=O.reduce((x,k)=>x+k,0)/O.length;return{min:d,max:F,avg:P}}function D(){E(),o.value=!1,r.value=0}return{isSampling:o,samplingProgress:r,pickCartographic:R,pickCartographicWithRetry:w,sampleHeight:C,sampleHeightMostDetailed:T,queryHeightRange:_,clearCache:E,cleanup:D}}const Sl={url:"./glb/player/UAL1_Standard.glb",scale:.01,idleAnim:"Idle_Loop",walkAnim:"Walk_Loop",runAnim:"Sprint_Loop",jumpAnim:["Jump_Start","Jump_Loop","Jump_Land"],flyAnim:"fly",flyIdleAnim:"flyIdle",flyHoverForwardAnim:"flyHoverForward",flyHoverBackAnim:"flyHoverBack",flyHoverLeftAnim:"flyHoverLeft",flyHoverRightAnim:"flyHoverRight",flyHoverUpAnim:"flyHoverUp",flyHoverDownAnim:"flyHoverDown",rotateY:-Math.PI/2,facingOffset:Math.PI/2},wl={gravity:-2400,jumpHeight:600,speed:300,flySpeed:55e3,acceleration:30,deceleration:30},_l={minCamDistance:100,maxCamDistance:800,camLookAtHeightRatio:.8,thirdMouseMode:1,enableZoom:!0,enableOverShoulderView:!1,isFirstPerson:!1,enableSpringCamera:!0,springCameraTime:.015},Tl={forward:["KeyW","ArrowUp"],backward:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],toggleView:["KeyV"],toggleFly:["KeyF"]},Ml=5;function Ll(e){return e?!!(e.availability||e.requestWaterMask!==void 0||e.requestVertexNormals!==void 0):!1}function Fl({getViewer:e,getCesium:t,message:n}){const a=Q(!1),l=Q(!1),o=Q(!1),r=Q(null),b=Q(0),g=Q(null);let S=null,E=null,R=null,w=null,C=null;async function T(s={}){var O,d,F,P;const f=e(),L=t();if(!f||!L){(O=n==null?void 0:n.error)==null||O.call(n,"Cesium 未初始化");return}if(a.value&&!S&&(a.value=!1,l.value=!1,o.value=!1),!a.value)try{(d=n==null?void 0:n.info)==null||d.call(n,"正在加载漫游控制器（物理引擎 ~2MB，首次加载较慢）...",{duration:8e3});const{playerController:x}=await yt(async()=>{const{playerController:Re}=await import("./index-OICPEIBl.js");return{playerController:Re}},__vite__mapDeps([14,1,3,6,5,7,8,15,16,17,18,9,10,19]),import.meta.url);let k=s.initPos;const z=s.spawnHeight||500;let $=0,X=!0;const le=f.camera,J=L.Cartographic.fromCartesian(le.position);if(!k){let Re=z;const He=f.terrainProvider;if(Ll(He)){const $e=He,pe=$e._bottomLevel?Math.max(0,$e._bottomLevel-1):Math.min($e.maximumLevel??12,12);let Ue=null;try{Ue=await L.sampleTerrain(He,pe,[J])}catch{}Ue&&Ue[0]&&L.defined(Ue[0].height)?($=Ue[0].height,Re=$+z,X=!1):(Re=J.height>0?J.height+z:z,X=!1)}k=L.Cartesian3.fromRadians(J.longitude,J.latitude,Re)}const fe=5;let be=s.staticCollider;const ce=.03;let B={lon:J.longitude,lat:J.latitude};be||(be=[{type:"terrain",rectangle:[J.longitude-ce,J.latitude-ce,J.longitude+ce,J.latitude+ce],resolution:64}]);const G={..._l},U={...Sl,...wl,...s.modelConfig},he=new x;await he.init({viewer:f,initPos:k,playerModelConfig:U,staticCollider:be,...G,mouseSensitivity:Ml,keyMap:Tl,isShowMobileControls:!1}),S=he;const De=ce*.6;let Te=!1,Ee=performance.now();E=f.scene.preUpdate.addEventListener(()=>{const Re=performance.now(),He=(Re-Ee)/1e3;Ee=Re,he.update(He);const $e=he.getPosition(),pe=L.Cartographic.fromCartesian($e),Ue=X?fe:$+fe;pe.height<Ue&&he.reset(L.Cartesian3.fromRadians(pe.longitude,pe.latitude,Ue)),r.value={lng:L.Math.toDegrees(pe.longitude),lat:L.Math.toDegrees(pe.latitude),height:pe.height};const Ye=he.getVelocity();if(b.value=Math.hypot(Ye.e,Ye.n,Ye.u),!X&&!Te){const qe=Math.abs(pe.longitude-B.lon),Ve=Math.abs(pe.latitude-B.lat);if(qe>De||Ve>De){Te=!0;const Be=pe.longitude,W=pe.latitude;B={lon:Be,lat:W},he.physics.clearStaticColliders(),he.physics.addStaticColliders(f,{type:"terrain",rectangle:[Be-ce,W-ce,Be+ce,W+ce],resolution:64}).then(async()=>{try{const H=f.terrainProvider,ne=new L.Cartographic(Be,W,0),ee=H._bottomLevel?Math.max(0,H._bottomLevel-1):Math.min(H.maximumLevel??12,12),ie=await L.sampleTerrain(H,ee,[ne]);ie&&ie[0]&&L.defined(ie[0].height)&&($=ie[0].height)}catch{}Te=!1}).catch(()=>{Te=!1})}}}),he.onViewChange=Re=>{l.value=Re},he.onGroundChange=()=>{o.value=he.getIsFlying()},a.value=!0,l.value=he.getIsFirstPerson(),o.value=he.getIsFlying(),(F=n==null?void 0:n.success)==null||F.call(n,"漫游模式已启动（WASD 移动 / V 切视角 / F 飞行）")}catch(x){(P=n==null?void 0:n.error)==null||P.call(n,`漫游模式启动失败: ${x.message||"未知错误"}`),_()}}function _(){if(E&&(E(),E=null),S){try{S.destroy()}catch{}S=null}const s=e();if(s){const f=s.scene.screenSpaceCameraController;f.enableRotate=!0,f.enableTranslate=!0,f.enableZoom=!0,f.enableTilt=!0,f.enableLook=!0}a.value=!1,l.value=!1,o.value=!1,r.value=null,b.value=0}function D(s){var f;a.value?(_(),(f=n==null?void 0:n.info)==null||f.call(n,"漫游模式已停止")):T(s)}function M(){S&&(S.changeView(),l.value=S.getIsFirstPerson())}function i({lng:s,lat:f,name:L}){var k;const O=e(),d=t();if(!O||!d)return;c();const F=d.Cartesian3.fromDegrees(s,f),P=O.entities.add({position:F,point:{pixelSize:10,color:d.Color.CYAN.withAlpha(.8)},name:L||"导航目标"});O.selectedEntity=P,w=O.selectedEntityChanged.addEventListener(z=>{var $;($=g.value)!=null&&$._entity&&z!==g.value._entity&&Promise.resolve().then(()=>{var X;(X=g.value)!=null&&X._entity&&(O.selectedEntity=g.value._entity)})}),g.value={lng:s,lat:f,name:L||"导航目标",bearing:0,distance:0,_entity:P};const x=d.Cartesian3.fromDegrees(s,f);C=O.scene.preRender.addEventListener(()=>{if(!g.value)return;const z=O.camera.position,$=d.Cartographic.fromCartesian(z),X=El(d.Math.toDegrees($.longitude),d.Math.toDegrees($.latitude),s,f),le=d.Math.toDegrees(O.camera.heading);g.value.bearing=(X-le+360)%360,g.value.distance=d.Cartesian3.distance(z,x);const J=g.value._entity;J&&O.selectedEntity!==J&&(O.selectedEntity=J)}),(k=n==null?void 0:n.info)==null||k.call(n,`导航目标已设置：${L||"地图选点"}`)}function c(){var f;const s=e();if(C&&(C(),C=null),w&&(w(),w=null),s&&((f=g.value)!=null&&f._entity)){try{s.entities.remove(g.value._entity)}catch{}s.selectedEntity=void 0}g.value=null}function h(){R&&R()}function u(s){R=s}function y(){var O;const s=e(),f=t();if(!s||!f)return;(O=n==null?void 0:n.info)==null||O.call(n,"点击地图选择导航目标");const L=new f.ScreenSpaceEventHandler(s.scene.canvas);L.setInputAction(d=>{var x;const F=s.scene.pick(d.position);if(f.defined(F)&&F.id&&F.id.position){const k=s.clock.currentTime,z=F.id.position.getValue(k);if(z){const $=f.Cartographic.fromCartesian(z);if($){s.selectedEntity=F.id,g.value={lng:f.Math.toDegrees($.longitude),lat:f.Math.toDegrees($.latitude),name:F.id.name||"数据要素",bearing:0,distance:0,_entity:F.id},(x=n==null?void 0:n.info)==null||x.call(n,`导航目标已设置：${F.id.name||"数据要素"}`),L.destroy();return}}}const P=s.scene.pickPosition(d.position)||s.scene.globe.pick(s.camera.getPickRay(d.position),s.scene);if(P){const k=f.Cartographic.fromCartesian(P);i({lng:f.Math.toDegrees(k.longitude),lat:f.Math.toDegrees(k.latitude),name:"地图选点"})}L.destroy()},f.ScreenSpaceEventType.LEFT_CLICK)}function m(){return S}return{isActive:a,isFirstPerson:l,isFlying:o,playerPosition:r,playerSpeed:b,navTarget:g,startPlayer:T,stopPlayer:_,togglePlayer:D,changeView:M,getPlayerInstance:m,setNavTarget:i,clearNavTarget:c,startNavPick:y,openNavDialog:h,setOpenNavDialogHandler:u}}function El(e,t,n,a){const l=S=>S*Math.PI/180,o=S=>S*180/Math.PI,r=l(n-e),b=Math.sin(r)*Math.cos(l(a)),g=Math.cos(l(t))*Math.sin(l(a))-Math.sin(l(t))*Math.cos(l(a))*Math.cos(r);return(o(Math.atan2(b,g))+360)%360}const Al={key:0,class:"player-guide"},Dl={class:"guide-pill"},Cl={class:"pill-label"},Pl={key:0,class:"pill-fly"},kl={__name:"PlayerGuidePanel",props:{visible:{type:Boolean,default:!1},isFirstPerson:{type:Boolean,default:!1},isFlying:{type:Boolean,default:!1}},emits:["close"],setup(e){return(t,n)=>(ae(),Je(fn,{name:"guide-slide"},{default:hn(()=>[e.visible?(ae(),me("div",Al,[v("div",Dl,[v("span",{class:Ke(["pill-dot",{fp:e.isFirstPerson}])},null,2),v("span",Cl,_e(e.isFirstPerson?"第一人称":"第三人称"),1),e.isFlying?(ae(),me("span",Pl,"✈")):we("",!0),v("button",{class:"pill-close",title:"关闭提示",onClick:n[0]||(n[0]=a=>t.$emit("close"))},"✕")]),n[1]||(n[1]=v("div",{class:"guide-keys"},[v("span",{class:"key-group"},[v("kbd",null,"W"),v("kbd",null,"A"),v("kbd",null,"S"),v("kbd",null,"D"),v("em",null,"移动")]),v("span",{class:"key-sep"}),v("span",{class:"key-group"},[v("kbd",null,"⇧"),v("em",null,"跑"),v("kbd",null,"␣"),v("em",null,"跳")]),v("span",{class:"key-sep"}),v("span",{class:"key-group"},[v("kbd",null,"V"),v("em",null,"视角"),v("kbd",null,"F"),v("em",null,"飞行")]),v("span",{class:"key-sep"}),v("span",{class:"key-group"},[v("span",{class:"key-mouse"},"🖱"),v("em",null,"旋转")])],-1))])):we("",!0)]),_:1}))}},Il=it(kl,[["__scopeId","data-v-6190d367"]]),Rl={class:"hud-info-panel"},Ol={class:"nav-target-name"},Nl={class:"nav-name"},Bl={class:"nav-distance-wrapper"},Hl={class:"nav-distance"},zl={class:"hud-compass-panel"},Ul={class:"compass-dial"},Wl=10,Gl={__name:"NavGuideHUD",props:{navTarget:{type:Object,default:null}},setup(e){const t=e,n=ke(()=>{var o;return((o=t.navTarget)==null?void 0:o.distance)!=null&&t.navTarget.distance<Wl}),a=ke(()=>{var o;return((o=t.navTarget)==null?void 0:o.bearing)??0});function l(o){return o==null?"0.0 m":o<1e3?`${Math.round(o)} m`:`${(o/1e3).toFixed(2)} km`}return(o,r)=>(ae(),Je(fn,{name:"nav-guide-fade"},{default:hn(()=>[e.navTarget?(ae(),me("div",{key:0,class:Ke(["nav-guide-hud",{arrived:n.value}])},[r[6]||(r[6]=v("div",{class:"hud-bg-glow"},null,-1)),v("div",Rl,[r[1]||(r[1]=v("div",{class:"hud-tag"},[v("span",{class:"tag-dot"}),v("span",{class:"tag-text"},"NAV_TRACKING")],-1)),v("div",Ol,[v("span",Nl,_e(e.navTarget.name),1)]),v("div",Bl,[r[0]||(r[0]=v("span",{class:"dist-label"},"DIST //",-1)),v("span",Hl,_e(n.value?"ARRIVED":l(e.navTarget.distance)),1)])]),v("div",zl,[v("div",Ul,[r[3]||(r[3]=v("div",{class:"dial-scale"},null,-1)),r[4]||(r[4]=v("div",{class:"dial-scale rotate-45"},null,-1)),v("div",{class:"compass-arrow-container",style:La({transform:`rotate(${a.value}deg)`})},[...r[2]||(r[2]=[v("span",{class:"hud-pointer"},null,-1)])],4),r[5]||(r[5]=v("div",{class:"compass-center"},[v("span",{class:"center-core"})],-1))])])],2)):we("",!0)]),_:1}))}},$l=it(Gl,[["__scopeId","data-v-1e2288c0"]]),jl={class:"nav-dialog"},ql={class:"nav-dialog-head futuristic-hud"},Vl={class:"head-right-decor"},Xl={class:"nav-dialog-body"},Kl={__name:"NavTargetPicker",props:{visible:{type:Boolean,default:!1}},emits:["close","select"],setup(e,{emit:t}){const n=t;function a(l){n("select",l),n("close")}return(l,o)=>(ae(),Je(fn,{name:"nav-dialog-fade"},{default:hn(()=>[e.visible?(ae(),me("div",{key:0,class:"nav-dialog-overlay",onClick:o[4]||(o[4]=vt(r=>l.$emit("close"),["self"]))},[v("div",jl,[o[12]||(o[12]=v("div",{class:"border-corner top-left"},null,-1)),o[13]||(o[13]=v("div",{class:"border-corner top-right"},null,-1)),o[14]||(o[14]=v("div",{class:"border-corner bottom-left"},null,-1)),o[15]||(o[15]=v("div",{class:"border-corner bottom-right"},null,-1)),v("div",ql,[o[7]||(o[7]=v("div",{class:"hud-scan-line"},null,-1)),o[8]||(o[8]=v("div",{class:"title-wrapper"},[v("div",{class:"status-matrix-v2"},[v("div",{class:"matrix-row"},[v("span",{class:"matrix-dot activeanimate-flicker"}),v("span",{class:"matrix-dot active"})]),v("div",{class:"matrix-row"},[v("span",{class:"matrix-dot"}),v("span",{class:"matrix-dot active"})])]),v("div",{class:"title-text-group"},[v("span",{class:"nav-dialog-title"},"设置导航目标"),v("span",{class:"title-sub"},"NAV.TARGET_SET // MODE:漫游")])],-1)),v("div",Vl,[o[6]||(o[6]=v("div",{class:"decor-geometry"},[v("span",{class:"geo-line"}),v("span",{class:"geo-angle"})],-1)),v("button",{class:"nav-dialog-close v2",title:"关闭",onClick:o[0]||(o[0]=r=>l.$emit("close"))},[...o[5]||(o[5]=[v("span",{class:"close-icon-v2"},"×",-1)])])])]),v("div",Xl,[v("button",{class:"nav-option",onClick:o[1]||(o[1]=r=>a("search"))},[...o[9]||(o[9]=[v("div",{class:"nav-option-icon"},[v("span",null,"🔍")],-1),v("div",{class:"nav-option-text"},[v("span",{class:"nav-option-label"},"搜索地点"),v("span",{class:"nav-option-desc"},"搜索 POI 兴趣点并设为漫游目标")],-1),v("span",{class:"nav-option-arrow"},null,-1)])]),v("button",{class:"nav-option",onClick:o[2]||(o[2]=r=>a("data"))},[...o[10]||(o[10]=[v("div",{class:"nav-option-icon"},[v("span",null,"📁")],-1),v("div",{class:"nav-option-text"},[v("span",{class:"nav-option-label"},"选择数据要素"),v("span",{class:"nav-option-desc"},"从已载入的 GIS 图层中选取要素点")],-1),v("span",{class:"nav-option-arrow"},null,-1)])]),v("button",{class:"nav-option",onClick:o[3]||(o[3]=r=>a("pick"))},[...o[11]||(o[11]=[v("div",{class:"nav-option-icon"},[v("span",null,"📍")],-1),v("div",{class:"nav-option-text"},[v("span",{class:"nav-option-label"},"地图点选"),v("span",{class:"nav-option-desc"},"在三维场景中交互单点击落点")],-1),v("span",{class:"nav-option-arrow"},null,-1)])])])])])):we("",!0)]),_:1}))}},Yl=it(Kl,[["__scopeId","data-v-1846a693"]]),Zl={key:5,class:"drag-overlay"},Jl={class:"map-controls-group"},Ql={class:"mouse-position-content"},ec=5,tc={__name:"CesiumContainer",emits:["view-sync"],setup(e,{expose:t,emit:n}){let a=null,l=null,o=!1;const r=mn(),b=n,g=Q(!0),S=Q(!1),E=Q(!1),R=Q(null),w=Q(Ra()),C=()=>l,T=()=>a||window.Cesium,_=()=>w.value.tiandituTk,D=()=>w.value.cesiumIonToken,M=_s({getViewer:C,getCesium:T,message:r,backendBaseUrl:Ia,tiandituToken:_,cesiumIonToken:D}),{activeBasemap:i,activeTerrain:c,customXyzBasemapUrl:h,basemapOptions:u,terrainOptions:y,overlayOptions:m,createImageryProviderViewModels:s,createTerrainProviderViewModels:f,getSelectedImageryProviderViewModel:L,getSelectedTerrainProviderViewModel:O,bindLayerPickerStateSync:d,addBaseImageryLayers:F,initCustomTerrain:P,handleOverlayToggle:x,handleCustomBasemapSubmit:k,cleanupLayers:z}=M;Ie(i,(q,V)=>{!q||q===V||B(q)});const{coordinateDisplay:$,setupInteractions:X,cleanupInteractions:le}=ms({getViewer:C,getCesium:T}),{installCreditHider:J,cleanupCreditHider:fe}=fs({getViewer:C}),{restoreCameraFromUrl:be,restoreBasemapFromUrl:ce,syncBasemapToUrl:B,bindCameraViewSync:G,cleanupCameraViewSync:U}=al({getViewer:C,getCesium:T,onCameraViewSync:q=>b("view-sync",q),onBasemapRestore:q=>{q&&i.value!==q&&(i.value=q)}}),he=ks({getViewer:C,getCesium:T,message:r}),{flyToHome:De}=he,Te=pl({getViewer:C,getCesium:T,message:r}),Ee=Rs({getViewer:C,getCesium:T,message:r}),Re=vl({getViewer:C,getCesium:T,message:r}),He=yl({getViewer:C,getCesium:T}),$e=xl({getViewer:C,getCesium:T}),pe=Fl({getViewer:C,getCesium:T,message:r});pe.setOpenNavDialogHandler(()=>{S.value=!0});function Ue(q){q==="pick"?pe.startNavPick():q==="search"?r.info("请使用顶部搜索框搜索地点，搜索结果将自动设为导航目标"):q==="data"&&(r.info("请点击已导入的数据要素，将自动设为导航目标"),pe.startNavPick())}const Ye=ke(()=>{const q=pe.playerPosition.value;if(q){const V=q.lng.toFixed(6),de=q.lat.toFixed(6),ye=q.height.toFixed(2),Ge=pe.playerSpeed.value,ut=Ge>.1?` | 速度: ${Ge.toFixed(1)} m/s`:"";return`经度: ${V}, 纬度: ${de}, 海拔: ${ye}米${ut} (漫游)`}return $.value});Ie(()=>pe.isActive.value,q=>{q&&(g.value=!0,ee.value=!1)}),t({getViewer:C,getCesium:T,modelManager:Re,cameraEnhanced:He,heightSampler:$e,playerController:pe});const qe=ke(()=>Ee.loadedDataSources.value),Ve=ke(()=>Ee.pendingGltfFile.value),Be=Q(!1);function W(q){Be.value=!0,q.dataTransfer&&(q.dataTransfer.dropEffect="copy")}function H(q){const V=q==null?void 0:q.relatedTarget,de=q==null?void 0:q.currentTarget;V instanceof Node&&de instanceof Node&&de.contains(V)||(Be.value=!1)}async function ne(q){var de;if(Be.value=!1,!E.value)return;const V=(de=q.dataTransfer)==null?void 0:de.files;if(!(!V||V.length===0))for(const ye of V){if(o)break;try{await Ee.loadDataFile(ye)}catch{}}}const{toolPanelOpen:ee,advancedEffectControls:ie,fluidParams:j,baseAtmosphereParams:te,atmosphereParams:re,cloudParams:se,shallowWaterVisible:Se,shallowWaterParams:ze,toolModules:We,handleToolAction:Ae,handleToolControlChange:et,handleFluidStateChange:A,cleanupTools:N}=Bs({fluidPanelRef:R,sceneActions:he,wind:Te,modelManager:Re,cameraEnhanced:He,heightSampler:$e,playerController:pe});let K=!1;async function oe(){var q;if(!K){K=!0,o=!1,pa("正在初始化 3D 场景...");try{let V=0,de=1;for(;V<de;)try{if(w.value=await Pa({silent:!1,force:V>0}),de=Math.min(ec,Math.max(de,Array.isArray(w.value.tiandituTokens)?w.value.tiandituTokens.length:1,Array.isArray(w.value.cesiumIonTokens)?w.value.cesiumIonTokens.length:1,1)),a=await ns({ionToken:D()}),o||!a||!document.getElementById("cesiumContainer"))return;p(),X();const ye=F(),Ge=await P();if(o){ue();return}if(E.value=!0,G({initialSync:!1,getActivePresetId:()=>i.value}),!ce())try{const jt=await ka(),wn=(q=jt==null?void 0:jt.data)==null?void 0:q.default_basemap_index;if(wn!=null){const qt=va[wn]||null;qt&&i.value!==qt&&(i.value=qt)}}catch{}if(B(i.value),ye&&Ge){r.success("天地图基础影像与地形加载成功。");return}const nt=ye?{switched:!1}:Kt("tianditu_tk"),bt=Ge?{switched:!1}:Kt("cesium_ion_token");if(!(nt.switched||bt.switched)){r.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}w.value=bt.switched?bt.tokens:nt.tokens,ue(),V+=1,r.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(ye){const Ge=Kt("cesium_ion_token");if(!Ge.switched)throw ye;w.value=Ge.tokens,ue(),V+=1,r.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}r.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(V){r.error("Cesium 运行时加载失败",V),r.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{K=!1,ga()}}}function ue(){var q;E.value=!1,U(),le(),N(),z(),fe();try{pe.stopPlayer()}catch{}try{(q=pe.clearNavTarget)==null||q.call(pe)}catch{}xe&&(xe(),xe=null);try{Re.dispose()}catch{}try{He.cleanup()}catch{}try{$e.cleanup()}catch{}if(Ee.clearAllDataSources(),!!l){try{l.destroy()}catch{}l=null}}let xe=null;function p(){var ye;const q=typeof a.Map=="function"?a.Map:a.Viewer,V=s(),de=f();l=new q("cesiumContainer",{baseLayerPicker:!0,geocoder:((ye=a.IonGeocodeProviderType)==null?void 0:ye.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:V,selectedImageryProviderViewModel:L(V),terrainProviderViewModels:de,selectedTerrainProviderViewModel:O(de),shouldAnimate:!0}),l.scene.debugShowFramesPerSecond=!0,l.scene.globe.terrainExaggeration=1,l.scene.globe.terrainExaggerationRelativeHeight=0,ls(l,a),Pi(l),J(),d(),be({duration:0})||De(0);try{xe=Qs({viewer:l,cloudParams:se,atmosphereParams:re,advancedEffectControls:ie,message:r})}catch{}}dn(()=>{oe().catch(q=>{})});async function I({files:q}){for(const V of q){if(o)break;try{await Ee.loadDataFile(V)}catch{}}}function Y({id:q}){Ee.removeDataSource(q)}function Z(){Ee.clearAllDataSources()}function ve(){const q=document.createElement("input");q.type="file",q.accept=".zip",q.onchange=async V=>{var ye,Ge;const de=(Ge=(ye=V.target)==null?void 0:ye.files)==null?void 0:Ge[0];if(de)try{await Ee.loadDataFile(de)}catch{}},q.click()}async function Fe(){try{await Ee.importTilesetFromDirectory()}catch{}}async function Oe(q){if(!o)try{await Ee.loadGltfWithUserCoords(q)}catch{}}function Ne(){Ee.cancelPendingGltf()}$t(()=>{var q,V;o=!0,E.value=!1;try{pe.stopPlayer()}catch{}try{(q=pe.clearNavTarget)==null||q.call(pe)}catch{}try{(V=pe.setOpenNavDialogHandler)==null||V.call(pe,null)}catch{}if(U(),le(),N(),z(),Re.dispose(),He.cleanup(),$e.cleanup(),xe&&(xe(),xe=null),fe(),Ee.clearAllDataSources(),l){try{l.destroy()}catch{}l=null}}),Ie(E,q=>{q&&(je(te.value),Ze(re.value))});function je(q){var ye;if(!l||!a)return;const V=l.scene,de=V.globe;de&&(de.enableLighting=q.enableLighting,de.showGroundAtmosphere=q.showGroundAtmosphere,"dynamicAtmosphereLighting"in de&&(de.dynamicAtmosphereLighting=q.dynamicAtmosphereLighting),"dynamicAtmosphereLightingFromSun"in de&&(de.dynamicAtmosphereLightingFromSun=q.dynamicAtmosphereLightingFromSun),"atmosphereLightIntensity"in de&&(de.atmosphereLightIntensity=q.atmosphereLightIntensity),"atmosphereHueShift"in de&&(de.atmosphereHueShift=q.atmosphereHueShift),"atmosphereSaturationShift"in de&&(de.atmosphereSaturationShift=q.atmosphereSaturationShift),"atmosphereBrightnessShift"in de&&(de.atmosphereBrightnessShift=q.atmosphereBrightnessShift),"lightingFadeInDistance"in de&&(de.lightingFadeInDistance=q.lightingFadeInDistance),"lightingFadeOutDistance"in de&&(de.lightingFadeOutDistance=q.lightingFadeOutDistance),"nightFadeInDistance"in de&&(de.nightFadeInDistance=q.nightFadeInDistance),"nightFadeOutDistance"in de&&(de.nightFadeOutDistance=q.nightFadeOutDistance)),V.fog&&(V.fog.enabled=q.fogEnabled,"density"in V.fog&&(V.fog.density=q.fogDensity),"minimumBrightness"in V.fog&&(V.fog.minimumBrightness=q.fogMinimumBrightness)),V.sun&&(V.sun.show=q.sunShow),V.moon&&(V.moon.show=q.moonShow),V.skyBox&&(V.skyBox.show=q.skyBoxShow),(ye=V.requestRender)==null||ye.call(V)}Ie(te,q=>{je(q)},{deep:!0});function Ze(q){var ye;if(!l||!a)return;const V=l.scene,de=V.globe;if(de&&"atmosphereLightIntensity"in de){const Ge=te.value.atmosphereLightIntensity??5.5,nt=q.moonLightEnabled!==!1?(q.moonLightIntensity??.18)*4:0;de.atmosphereLightIntensity=Math.min(Ge+nt,12)}(ye=V.requestRender)==null||ye.call(V)}return Ie(re,q=>{Ze(q)},{deep:!0}),(q,V)=>{var de;return ae(),me(lt,null,[v("div",{id:"cesiumContainer",class:"cesium-container",onDragover:vt(W,["prevent"]),onDragleave:vt(H,["prevent"]),onDrop:vt(ne,["prevent"])},null,32),E.value?(ae(),Je(gt(Xi),{key:0,headless:"","get-viewer":C,"get-cesium":T,controls:ge(ie)},null,8,["controls"])):we("",!0),E.value?(ae(),Je(gt(Wo),{key:1,ref_key:"fluidPanelRef",ref:R,headless:"","get-viewer":C,"get-cesium":T,params:ge(j),onStateChange:ge(A)},null,40,["params","onStateChange"])):we("",!0),E.value?(ae(),Je(Qo,Fa({key:2,visible:ge(Se)},ge(ze)),null,16,["visible"])):we("",!0),E.value?(ae(),Je(mo,{key:3,open:ge(ee),"onUpdate:open":V[0]||(V[0]=ye=>Vt(ee)?ee.value=ye:null),"active-basemap":ge(i),"onUpdate:activeBasemap":V[1]||(V[1]=ye=>Vt(i)?i.value=ye:null),"active-terrain":ge(c),"onUpdate:activeTerrain":V[2]||(V[2]=ye=>Vt(c)?c.value=ye:null),"basemap-options":ge(u),"terrain-options":ge(y),"overlay-options":ge(m),"custom-basemap-url":ge(h),modules:ge(We),"loaded-data-sources":qe.value,onModuleAction:ge(Ae),onControlChange:ge(et),onOverlayToggle:ge(x),onCustomBasemapSubmit:ge(k),onDataImport:I,onDataRemove:Y,onDataClearAll:Z,onImportTilesetZip:ve,onImportTilesetFolder:Fe},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):we("",!0),Pe(Il,{visible:ge(pe).isActive.value&&g.value,"is-first-person":ge(pe).isFirstPerson.value,"is-flying":ge(pe).isFlying.value,onClose:V[3]||(V[3]=ye=>g.value=!1)},null,8,["visible","is-first-person","is-flying"]),ge(pe).navTarget.value?(ae(),Je($l,{key:4,"nav-target":ge(pe).navTarget.value},null,8,["nav-target"])):we("",!0),Pe(Yl,{visible:S.value,onClose:V[4]||(V[4]=ye=>S.value=!1),onSelect:Ue},null,8,["visible"]),Pe(Ao,{visible:!!Ve.value,"file-name":((de=Ve.value)==null?void 0:de.name)||"",onConfirm:Oe,onCancel:Ne},null,8,["visible","file-name"]),Be.value&&E.value?(ae(),me("div",Zl,[Pe(ge(sn),{size:48,"stroke-width":"1.5"}),V[6]||(V[6]=v("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),V[7]||(V[7]=v("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):we("",!0),v("div",Jl,[v("div",Ql,_e(Ye.value),1),V[9]||(V[9]=v("div",{class:"divider"},null,-1)),v("button",{class:"home-btn",title:"回到初始位置",onClick:V[5]||(V[5]=(...ye)=>ge(De)&&ge(De)(...ye))},[...V[8]||(V[8]=[v("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[v("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},nc=it(tc,[["__scopeId","data-v-02cb5c18"]]),fc=Object.freeze(Object.defineProperty({__proto__:null,default:nc},Symbol.toStringTag,{value:"Module"}));export{fc as C,Ll as h};
