const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-Cc0wI3YZ.js","./vendor-echarts-all-Cgo2cNZc.js","./vendor-libs-Bh-FqP6f.js","./vendor-vue-CmuMwCC6.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-B7siVeql.js","./vendor-proj4-DdSQhF8T.js","./index-BawwVQuL.js","./vendor-ol-all-DI0HoHv7.js","./vendor-geotiff-CSiMSXCK.js","./vendor-lerc-9DOY5ikF.js","./vendor-jszip-BOwK5y_4.js","./vendor-ol-all-BtPuoxOl.css","./vendor-axios-Bdz_Fv8M.js","./index-DduL8x4O.css"])))=>i.map(i=>d[i]);
var Un=Object.defineProperty;var Hn=(e,t,n)=>t in e?Un(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var nn=(e,t,n)=>Hn(e,typeof t!="symbol"?t+"":t,n);import{C as Rn,o as kn,w as Le,d as W,c as q,f as d,t as oe,G as _e,W as xt,X as ut,g as se,r as K,P as Wn,a as Se,u as ae,F as ke,e as Ve,n as Pe,x as Ge,S as ot,I as Ft,i as st,H as Ie,O as In,q as we,z as $n,v as Gn,B as qn,A as jn,a4 as Et}from"./vendor-vue-CmuMwCC6.js";import{_ as _t,h as Xt,R as Nn,Q as On,e as Dt,f as rn,T as Xn,v as Vn,y as Rt,P as Yn,x as Kn}from"./index-BawwVQuL.js";import{_ as $t}from"./vendor-runtime-Dp1pzeXC.js";import{af as kt,ag as It,ah as Zn,X as an,e as Nt,ai as Gt,aj as St,ac as on,ak as Jn,al as zn,am as sn,H as ln,T as Ot,a2 as Qn,an as Ct,ao as er,ap as tr,aq as nr,q as rr,o as ar,ar as wt,G as cn,as as ir}from"./vendor-libs-Bh-FqP6f.js";import{F as Vt,G as un,v as bt,B as or,H as sr,I as lr,J as cr,K as ur,L as dr,M as dn,N as hr,O as fr,P as mr}from"./HomeView-C-wA9LOB.js";import{d as pr}from"./vectorUtils-Ds50OJUZ.js";import"./vendor-ol-all-DI0HoHv7.js";import"./vendor-geotiff-CSiMSXCK.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-DdSQhF8T.js";import"./vendor-axios-Bdz_Fv8M.js";import"./textDecoder-CXjJWEkX.js";const At=new Map;function vr(e){const t=At.get(e);t&&t.abort();const n=new AbortController;return At.set(e,n),n}function gr(){At.forEach(e=>{e.abort()}),At.clear()}function yr(e){const t=e.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!t)return/\{s\}/i.test(e)?{url:e,subdomains:["a","b","c"]}:{url:e,subdomains:[]};const n=t[1].charCodeAt(0),r=t[2].charCodeAt(0),l=[];for(let s=n;s<=r;s++)l.push(String.fromCharCode(s));return{url:e.replace(t[0],"{s}"),subdomains:l}}function br(e){return e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function _r(e,t){let n=e;return t.tiandituTk&&(n=n.replace(/\{tiandituTk\}/g,t.tiandituTk)),t.customUrl&&(n=n.replace(/\{customUrl\}/g,t.customUrl)),n}function xr(e,t,n){if(!e||!t)return null;const l=vr(t.id).signal,{serviceType:s}=t;let m=_r(t.url,n);if(s==="custom"){if(!n.customUrl)return null;m=n.customUrl}if(t.nonStandardAdapter||s==="vector-tile")return null;const{subdomains:y}=yr(m),M=br(m),T=t.subdomains||y,E=t.maxZoom||18;try{let P=null;if(l.aborted)return null;switch(s){case"wms":{if(typeof e.WebMapServiceImageryProvider!="function")return null;const N=t.wms;if(!(N!=null&&N.layers))return null;P=new e.WebMapServiceImageryProvider({url:M||t.url,layers:N.layers,parameters:{version:N.version||"1.1.1",srs:N.srs||"EPSG:3857",format:N.format||"image/png",styles:N.styles||"",transparent:N.transparent!==!1}});break}case"wmts":{if(typeof e.WebMapTileServiceImageryProvider!="function")return null;const N=t.wmts;if(!(N!=null&&N.layer)||!N.matrixSet)return null;P=new e.WebMapTileServiceImageryProvider({url:M||t.url,layer:N.layer,style:N.style||"default",format:N.format||"image/png",tileMatrixSetID:N.matrixSet,maximumLevel:E});break}case"osm":{typeof e.OpenStreetMapImageryProvider=="function"?P=new e.OpenStreetMapImageryProvider({maximumLevel:E}):P=new e.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:E});break}default:{if(!M||!(M.includes("{z}")||M.includes("{x}")||M.includes("{y}")||M.includes("{reverseY}")))return null;P=new e.UrlTemplateImageryProvider({url:M,subdomains:T.length>0?T:void 0,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:E,enablePickFeatures:!1});break}}if(l.aborted){if(P&&typeof P.destroy=="function")try{P.destroy()}catch{}return null}return P&&(P._descriptorId=t.id),P}catch{return null}}function Sr(e,t,n){if(!e||!Array.isArray(t))return[];const r=[];for(const l of t){const s=Vt(l);if(!s)continue;const m=xr(e,s,n);m&&r.push(m)}return r}function wr(e){var r;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(r=t.requestRender)==null||r.call(t))}function Tr(e,t){var s;const n=e==null?void 0:e.scene,r=n==null?void 0:n.globe;if(!n||!r)return;Fr(n,t),Cr(n),r.enableLighting=!0,r.showGroundAtmosphere=!0,he(r,"dynamicAtmosphereLighting",!0),he(r,"dynamicAtmosphereLightingFromSun",!0),he(r,"atmosphereLightIntensity",11.5),he(r,"atmosphereHueShift",-.015),he(r,"atmosphereSaturationShift",.08),he(r,"atmosphereBrightnessShift",.02),he(r,"lightingFadeInDistance",15e6),he(r,"lightingFadeOutDistance",22e6),he(r,"nightFadeInDistance",9e6),he(r,"nightFadeOutDistance",16e6),Tt(t,r,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Tt(t,r,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),he(r,"atmosphereRayleighScaleHeight",1e4),he(r,"atmosphereMieScaleHeight",3200),he(r,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=Ar(t));const l=n.skyAtmosphere;l&&(l.show=!0,he(l,"perFragmentAtmosphere",!0),he(l,"dynamicAtmosphereLighting",!0),he(l,"dynamicAtmosphereLightingFromSun",!0),he(l,"hueShift",-.025),he(l,"saturationShift",.08),he(l,"brightnessShift",.03),he(l,"atmosphereLightIntensity",12),Tt(t,l,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Tt(t,l,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),he(l,"atmosphereRayleighScaleHeight",1e4),he(l,"atmosphereMieScaleHeight",3200),he(l,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),Pr(n),(s=n.requestRender)==null||s.call(n)}function Mr(e){var l;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const r=(l=t.postProcessStages)==null?void 0:l.bloom;return{scene:Qe(t,["highDynamicRange","sunBloom","light"]),fog:Qe(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:Qe(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:Qe(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:Qe(t.sun,["show"]),moon:Qe(t.moon,["show"]),skyBox:Qe(t.skyBox,["show"]),bloom:{props:Qe(r,["enabled"]),uniforms:Qe(r==null?void 0:r.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Lr(e,t,n){var m,y,M,T;if(!n)return;const r=e==null?void 0:e.scene,l=r==null?void 0:r.globe;if(!r||!l)return;et(r,n.scene,t),et(r.fog,n.fog,t),et(l,n.globe,t),et(r.sun,n.sun,t),et(r.moon,n.moon,t),et(r.skyBox,n.skyBox,t),r.skyAtmosphere&&(et(r.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(r.skyAtmosphere.show=!1));const s=(m=r.postProcessStages)==null?void 0:m.bloom;et(s,(y=n.bloom)==null?void 0:y.props,t),et(s==null?void 0:s.uniforms,(M=n.bloom)==null?void 0:M.uniforms,t),(T=r.requestRender)==null||T.call(r)}function Fr(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}he(e.light,"intensity",2.35)}function Cr(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,he(t,"density",12e-5),he(t,"minimumBrightness",.035),he(t,"screenSpaceErrorFactor",2),he(t,"visualDensityScalar",.16))}function Pr(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(he(t.uniforms,"contrast",128),he(t.uniforms,"brightness",-.18),he(t.uniforms,"delta",1),he(t.uniforms,"sigma",2.5),he(t.uniforms,"stepSize",4.2)))}function Ar(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function he(e,t,n){e&&t in e&&(e[t]=n)}function Tt(e,t,n,r,l,s){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(r,l,s))}function Qe(e,t){return e?t.reduce((n,r)=>(r in e&&(n[r]=Er(e[r])),n),{}):{}}function et(e,t={},n){!e||!t||Object.entries(t).forEach(([r,l])=>{r in e&&(e[r]=Dr(l,n))})}function Er(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Dr(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Rr={key:0,class:"advanced-effects-root"},kr={class:"effects-panel"},Ir={class:"panel-head"},Nr={class:"effect-switches"},Or={class:"switch-item"},zr={class:"switch-item"},Br={class:"switch-item"},Ur={class:"switch-item"},Hr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=Xt(),r=K(null),l=K(!1),s=K(!1),m=K(!1),y=K(!1),M=K(!1);let T=null,E=null,P=null,N=!1,b=null,g=null,S=null,_=null,R=null,a=null,c=null,u=null,v=!1,o=null,h=0,w=0,F=typeof performance<"u"?performance.now():Date.now();function A(){return S||(S=$t(()=>import("./cesiumFxRuntime-Cc0wI3YZ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(L=>{var j;const C=(j=L==null?void 0:L.getCesiumFxEchartsRuntime)==null?void 0:j.call(L);if(!C)throw new Error("Cinematic FX 图表运行时加载失败");return g=C,C}).catch(L=>{throw S=null,L}),S)}async function O(){return g||A()}const B={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},I={hdr:null,bloom:null,sky:null};Rn(()=>{G()}),kn(()=>{Ke()}),Le(()=>t.controls,L=>{Z(L||{})},{deep:!0,immediate:!0});function Z(L){Object.prototype.hasOwnProperty.call(L,"fog")&&(l.value=!!L.fog),Object.prototype.hasOwnProperty.call(L,"hbao")&&(s.value=!!L.hbao),Object.prototype.hasOwnProperty.call(L,"tiltShift")&&(m.value=!!L.tiltShift),Object.prototype.hasOwnProperty.call(L,"atmosphere")&&(y.value=!!L.atmosphere)}function G(){let L=0;_=window.setInterval(async()=>{var Y,ee;L+=1;const C=(Y=t.getViewer)==null?void 0:Y.call(t),j=((ee=t.getCesium)==null?void 0:ee.call(t))||window.Cesium;if(C&&j){clearInterval(_),_=null;try{ne(C),re(C),le(C,j),Ye(C,j),n.success("高级视觉效果已启用。")}catch(ue){n.error("高级视觉效果初始化失败",ue),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}L>=150&&(clearInterval(_),_=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function ne(L){var j,Y,ee,ue,ye,f;const C=L==null?void 0:L.scene;if(C){if(typeof C.highDynamicRange=="boolean"&&(I.hdr=C.highDynamicRange),(j=C.postProcessStages)!=null&&j.bloom){const p=C.postProcessStages.bloom;I.bloom={enabled:!!p.enabled,contrast:(Y=p.uniforms)==null?void 0:Y.contrast,brightness:(ee=p.uniforms)==null?void 0:ee.brightness,delta:(ue=p.uniforms)==null?void 0:ue.delta,sigma:(ye=p.uniforms)==null?void 0:ye.sigma,stepSize:(f=p.uniforms)==null?void 0:f.stepSize}}C.skyAtmosphere&&(I.sky={hueShift:C.skyAtmosphere.hueShift,saturationShift:C.skyAtmosphere.saturationShift,brightnessShift:C.skyAtmosphere.brightnessShift})}}function le(L,C){var Y;!((Y=L==null?void 0:L.scene)!=null&&Y.postProcessStages)||!(C!=null&&C.PostProcessStage)||(Fe(L,C),Ee(L,C),qe(L,C),y.value?Be(L,C,1200):U(L))}function re(L){var j;const C=L==null?void 0:L.scene;(j=C==null?void 0:C.renderError)!=null&&j.addEventListener&&(C.rethrowRenderErrors=!1,u=C.renderError.addEventListener((Y,ee)=>{n.error("Cesium 渲染异常，已触发降级保护",ee),me(),v||(v=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function me(){l.value=!1,m.value=!1,s.value=!1,y.value=!1,T&&(T.enabled=!1),E&&(E.enabled=!1),P&&(P.enabled=!1)}function Fe(L,C){T||(T=new C.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new C.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),L.scene.postProcessStages.add(T),T.enabled=l.value)}function Ee(L,C){var Y,ee;const j=(Y=L==null?void 0:L.scene)==null?void 0:Y.postProcessStages;j&&(j.ambientOcclusion?(P=j.ambientOcclusion,N=!1):(ee=C==null?void 0:C.PostProcessStageLibrary)!=null&&ee.createAmbientOcclusionStage&&(P=C.PostProcessStageLibrary.createAmbientOcclusionStage(),j.add(P),N=!0),P&&(P.enabled=s.value,P.uniforms&&("intensity"in P.uniforms&&(P.uniforms.intensity=4.2),"bias"in P.uniforms&&(P.uniforms.bias=.08),"lengthCap"in P.uniforms&&(P.uniforms.lengthCap=.35),"stepSize"in P.uniforms&&(P.uniforms.stepSize=1.8),"frustumLength"in P.uniforms&&(P.uniforms.frustumLength=1200))))}function qe(L,C){E||(E=new C.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),L.scene.postProcessStages.add(E),E.enabled=!1)}function Ye(L,C){const j=L==null?void 0:L.scene;j&&(c=j.preRender.addEventListener(()=>{var ye;const Y=Ne(L),ee=Number(((ye=L==null?void 0:L.camera)==null?void 0:ye.pitch)??-1.2);h+=1;const ue=typeof performance<"u"?performance.now():Date.now();if(ue-F>=1e3&&(w=Math.round(h*1e3/(ue-F)),h=0,F=ue),T&&(T.enabled=l.value,T.uniforms.cameraHeightFactor=Oe(Y,150,12e3),T.uniforms.fogDensity=55e-5+(1-T.uniforms.cameraHeightFactor)*.00125),P&&(P.enabled=s.value),E){const f=ee>-.62,p=f?Ae((ee+.62)/.5):0;E.enabled=m.value&&f,E.uniforms.blurStrength=p}y.value?Be(L,C,Y):U(L)}))}function Be(L,C,j){var f;const Y=L==null?void 0:L.scene;if(!Y)return;o||(o=Mr(L)),Tr(L,C),typeof Y.highDynamicRange=="boolean"&&(Y.highDynamicRange=!0);const ee=(f=Y.postProcessStages)==null?void 0:f.bloom;ee&&(ee.enabled=!0,ee.uniforms&&("contrast"in ee.uniforms&&(ee.uniforms.contrast=149),"brightness"in ee.uniforms&&(ee.uniforms.brightness=-.12),"delta"in ee.uniforms&&(ee.uniforms.delta=1),"sigma"in ee.uniforms&&(ee.uniforms.sigma=3.25),"stepSize"in ee.uniforms&&(ee.uniforms.stepSize=5)));const ue=Y.skyAtmosphere;if(!ue)return;const ye=Oe(j,500,12e4);ue.hueShift=-.035+ye*.035,ue.saturationShift=-.14+ye*.09,ue.brightnessShift=.03+(1-ye)*.08}function U(L){var ee,ue;const C=L==null?void 0:L.scene;if(!C)return;const j=((ee=t.getCesium)==null?void 0:ee.call(t))||window.Cesium;if(o){Lr(L,j,o),o=null;return}typeof C.highDynamicRange=="boolean"&&I.hdr!==null&&(C.highDynamicRange=I.hdr);const Y=(ue=C.postProcessStages)==null?void 0:ue.bloom;Y&&I.bloom&&(Y.enabled=I.bloom.enabled,Y.uniforms&&("contrast"in Y.uniforms&&I.bloom.contrast!==void 0&&(Y.uniforms.contrast=I.bloom.contrast),"brightness"in Y.uniforms&&I.bloom.brightness!==void 0&&(Y.uniforms.brightness=I.bloom.brightness),"delta"in Y.uniforms&&I.bloom.delta!==void 0&&(Y.uniforms.delta=I.bloom.delta),"sigma"in Y.uniforms&&I.bloom.sigma!==void 0&&(Y.uniforms.sigma=I.bloom.sigma),"stepSize"in Y.uniforms&&I.bloom.stepSize!==void 0&&(Y.uniforms.stepSize=I.bloom.stepSize))),C.skyAtmosphere&&I.sky&&(C.skyAtmosphere.hueShift=I.sky.hueShift,C.skyAtmosphere.saturationShift=I.sky.saturationShift,C.skyAtmosphere.brightnessShift=I.sky.brightnessShift)}function z(){R&&(clearInterval(R),R=null)}async function D(){var Y,ee;const L=!M.value;if(M.value=L,!L){z();return}const C=(Y=t.getViewer)==null?void 0:Y.call(t),j=((ee=t.getCesium)==null?void 0:ee.call(t))||window.Cesium;if(!C||!j){M.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await pe(C,j),je(C,j),V(C,j)}catch(ue){M.value=!1,n.error("图表模块加载失败",ue)}}async function pe(L,C){await O(),await Wn(),r.value&&(b||(b=g.init(r.value),xe()),a||(a=()=>{b==null||b.resize()},window.addEventListener("resize",a)),b.resize(),V(L,C))}function je(L,C){R||(R=window.setInterval(()=>{!b||!M.value||V(L,C)},1200))}function V(L,C){var ye;const j=new Date,Y=`${He(j.getHours())}:${He(j.getMinutes())}:${He(j.getSeconds())}`,ee=Number((Ne(L)/1e3).toFixed(2)),ue=Number(C.Math.toDegrees(((ye=L==null?void 0:L.camera)==null?void 0:ye.pitch)??0).toFixed(1));Ue(B.labels,Y,20),Ue(B.cameraHeightKm,ee,20),Ue(B.pitchDeg,ue,20),Ue(B.fps,w,20),b.setOption({xAxis:{data:B.labels},series:[{data:B.cameraHeightKm},{data:B.pitchDeg},{data:B.fps}]})}function xe(){b&&b.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function Ke(){var j,Y;_&&(clearInterval(_),_=null),z();const L=(j=t.getViewer)==null?void 0:j.call(t),C=(Y=L==null?void 0:L.scene)==null?void 0:Y.postProcessStages;c&&(c(),c=null),u&&(u(),u=null),T&&C&&C.remove(T),T=null,E&&C&&C.remove(E),E=null,P&&(N&&C&&C.remove(P),P=null),N=!1,L&&U(L),a&&(window.removeEventListener("resize",a),a=null),b&&(b.dispose(),b=null),g=null,v=!1}function Ne(L){var ee,ue,ye;const C=(ue=(ee=L==null?void 0:L.scene)==null?void 0:ee.globe)==null?void 0:ue.ellipsoid,j=(ye=L==null?void 0:L.camera)==null?void 0:ye.positionWC;if(!C||!j)return 0;const Y=C.cartesianToCartographic(j);return Math.max(0,Number((Y==null?void 0:Y.height)??0))}function Oe(L,C,j){return!Number.isFinite(L)||j<=C?0:Ae((L-C)/(j-C))}function Ae(L){return Math.min(1,Math.max(0,Number(L)||0))}function Ue(L,C,j){L.push(C),L.length>j&&L.shift()}function He(L){return String(L).padStart(2,"0")}return(L,C)=>e.headless?se("",!0):(W(),q("div",Rr,[d("div",kr,[d("div",Ir,[C[4]||(C[4]=d("span",{class:"panel-title"},"Cinematic FX",-1)),d("button",{class:"panel-btn",onClick:D},oe(M.value?"隐藏图表":"显示图表"),1)]),d("div",Nr,[d("label",Or,[_e(d("input",{"onUpdate:modelValue":C[0]||(C[0]=j=>l.value=j),type:"checkbox"},null,512),[[xt,l.value]]),C[5]||(C[5]=d("span",null,"电影级高度雾",-1))]),d("label",zr,[_e(d("input",{"onUpdate:modelValue":C[1]||(C[1]=j=>s.value=j),type:"checkbox"},null,512),[[xt,s.value]]),C[6]||(C[6]=d("span",null,"HBAO 微阴影",-1))]),d("label",Br,[_e(d("input",{"onUpdate:modelValue":C[2]||(C[2]=j=>m.value=j),type:"checkbox"},null,512),[[xt,m.value]]),C[7]||(C[7]=d("span",null,"移轴摄影",-1))]),d("label",Ur,[_e(d("input",{"onUpdate:modelValue":C[3]||(C[3]=j=>y.value=j),type:"checkbox"},null,512),[[xt,y.value]]),C[8]||(C[8]=d("span",null,"动态大气 + Bloom",-1))])]),_e(d("div",{ref_key:"chartRef",ref:r,class:"fx-chart"},null,512),[[ut,M.value]])])]))}},Wr=_t(Hr,[["__scopeId","data-v-1e562e70"]]),$r={key:0,class:"launcher-count"},Gr={class:"panel-header"},qr={class:"panel-title-block"},jr={class:"panel-mark"},Xr={class:"panel-copy"},Vr={class:"panel-subtitle"},Yr={class:"panel-actions"},Kr=["title"],Zr={class:"panel-tabs","aria-label":"3D 工具分类"},Jr=["aria-pressed","onClick"],Qr={class:"panel-scroll"},ea={class:"panel-page"},ta={class:"overview-grid"},na={class:"overview-tile"},ra={class:"overview-tile"},aa={class:"overview-tile"},ia={key:0,class:"quick-actions"},oa=["disabled","onClick"],sa={key:1,class:"empty-state"},la={class:"panel-page"},ca=["aria-expanded"],ua={class:"section-main"},da={class:"section-meta"},ha={key:0,class:"section-body"},fa={class:"option-grid"},ma=["disabled","aria-pressed","title","onClick"],pa={class:"custom-basemap-input-row"},va=["disabled"],ga={key:0,class:"custom-basemap-current"},ya=["aria-expanded"],ba={class:"section-main"},_a={class:"section-meta"},xa={key:0,class:"section-body"},Sa={class:"option-grid"},wa=["aria-pressed","title","onClick"],Ta=["aria-expanded"],Ma={class:"section-main"},La={class:"section-meta"},Fa={key:0,class:"section-body"},Ca={class:"overlay-list"},Pa=["disabled","aria-pressed","title","onClick"],Aa={class:"overlay-copy"},Ea={class:"overlay-title"},Da={key:0,class:"overlay-desc"},Ra={key:3,class:"empty-state"},ka={class:"panel-page"},Ia={class:"module-list"},Na=["aria-expanded","onClick"],Oa={class:"module-icon"},za={class:"module-copy"},Ba={class:"module-title"},Ua={key:0,class:"module-desc"},Ha={class:"module-head-side"},Wa={key:0,class:"module-body"},$a={key:0,class:"module-actions"},Ga=["disabled","onClick"],qa={key:1,class:"control-list"},ja={class:"control-label"},Xa={class:"control-label-text"},Va=["aria-label","title"],Ya=["min","max","step","value","disabled","onInput"],Ka=["min","max","step","value","disabled","onInput"],Za=["value","disabled","onInput"],Ja=["value","disabled","onChange"],Qa=["value"],ei=["aria-pressed","disabled","onClick"],ti={key:4,class:"control-value"},ni={key:0,class:"empty-state"},ri={class:"panel-page"},ai={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},ii={class:"data-upload-hint"},oi={key:0,class:"data-source-list"},si={class:"data-source-head"},li={class:"data-source-count"},ci=["title","aria-label","onClick"],ui={class:"data-source-icon"},di={class:"data-source-copy"},hi={class:"data-source-name"},fi={class:"data-source-type"},mi={key:1,class:"empty-state"},hn=3,pi=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",vi={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(e,{emit:t}){const n=e,r=K(Array.isArray(n.loadedDataSources)?n.loadedDataSources:[]);Le(()=>n.loadedDataSources,U=>{const z=Array.isArray(U)?U:[];z!==r.value&&(r.value=z)},{immediate:!0});const l=t,s=I(),m=s.uiStateVersion===hn,y=K(s.activeTab||"scene"),M=K(!!s.compactMode),T=K(new Set(m?s.expandedLayerSectionIds||[]:[])),E=K(new Set(m?s.expandedModuleIds||[]:[])),P=K(n.customBasemapUrl||""),N=K(null),b=we(()=>n.embedded||n.open),g=we(()=>n.modules.find(U=>U.id==="scene")||null),S=we(()=>{var U;return((U=g.value)==null?void 0:U.actions)||[]}),_=we(()=>n.modules.filter(U=>U.id!=="scene")),R=we(()=>_.value.filter(U=>U.statusTone==="success"||U.statusTone==="warning").length),a=we(()=>n.overlayOptions.filter(U=>!!U.active).length),c=[{id:"scene",label:"场景",icon:It},{id:"layers",label:"图层",icon:Nt},{id:"data",label:"数据",icon:Gt},{id:"modules",label:"模块",icon:kt}],u=we(()=>{var U;return((U=n.basemapOptions.find(z=>z.value===n.activeBasemap))==null?void 0:U.label)||"未选择"}),v=we(()=>{var U;return((U=n.terrainOptions.find(z=>z.value===n.activeTerrain))==null?void 0:U.label)||"未选择"});Le(()=>n.modules.map(U=>U.id),U=>{U.includes(y.value)||y.value==="scene"||y.value==="layers"||y.value==="modules"||(y.value="scene")},{immediate:!0}),Le([y,M,T,E],Z,{deep:!0}),Le(()=>n.customBasemapUrl,U=>{U!==P.value&&(P.value=U||"")});function o(U){l("update:open",U)}function h(U){return T.value.has(U)}function w(U){const z=new Set(T.value);z.has(U)?z.delete(U):z.add(U),T.value=z}function F(U){return E.value.has(U)}function A(U){const z=new Set(E.value);z.has(U)?z.delete(U):z.add(U),E.value=z}function O(U){U!=null&&U.disabled||l("update:activeBasemap",U.value)}function B(){l("custom-basemap-submit",{url:P.value})}function I(){if(typeof window>"u")return{};try{const U=window.localStorage.getItem(n.storageKey);return U?JSON.parse(U):{}}catch{return{}}}function Z(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:hn,activeTab:y.value,compactMode:M.value,expandedLayerSectionIds:[...T.value],expandedModuleIds:[...E.value]}))}catch{}}function G(U){return{scene:It,effects:ar,wind:rr,fluid:nr}[U]||kt}function ne(U,z){var pe;return((pe={scene:{home:er,everest:sn,tileset:Ct},wind:{load:Qn,clear:Ot},fluid:{pick:ln,clear:Ot}}[U])==null?void 0:pe[z])||tr}function le(U,z){l("module-action",{moduleId:U,actionId:z})}function re(U,z,D){const pe=z.type==="range"?Number(D):D;l("control-change",{moduleId:U,controlId:z.id,value:pe})}function me(U){U.disabled||l("overlay-toggle",{overlayId:U.value,value:!U.active})}function Fe(U){return{geojson:wt,json:wt,kml:cn,kmz:cn,shp:Nt,gltf:Ct,czml:wt,"3dtiles":Ct}[U]||wt}function Ee(U){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[U]||U.toUpperCase()}function qe(U){var D;const z=(D=U.target)==null?void 0:D.files;!z||z.length===0||(l("data-import",{files:Array.from(z)}),N.value&&(N.value.value=""))}function Ye(U){l("data-remove",{id:U})}function Be(){l("data-clear-all")}return(U,z)=>(W(),q("aside",{class:Pe(["cesium-tool-shell",{"is-open":b.value,"is-embedded":e.embedded}])},[!e.embedded&&!b.value?(W(),q("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:z[0]||(z[0]=D=>o(!0))},[Se(ae(kt),{size:18,"stroke-width":"2"}),z[8]||(z[8]=d("span",null,"高级控制台",-1)),R.value?(W(),q("span",$r,oe(R.value),1)):se("",!0)])):se("",!0),_e(d("section",{class:Pe(["cesium-tool-panel",{compact:M.value}]),"aria-label":"Cesium 高级控制台"},[d("header",Gr,[d("div",qr,[d("span",jr,[Se(ae(It),{size:18,"stroke-width":"2"})]),d("span",Xr,[z[9]||(z[9]=d("span",{class:"panel-title"},"3D 高级控制台",-1)),d("span",Vr,oe(u.value)+" / "+oe(v.value),1)])]),d("div",Yr,[d("button",{class:"icon-btn",type:"button",title:M.value?"切换为舒展布局":"切换为紧凑布局",onClick:z[1]||(z[1]=D=>M.value=!M.value)},[Se(ae(Zn),{size:16,"stroke-width":"2"})],8,Kr),e.embedded?se("",!0):(W(),q("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:z[2]||(z[2]=D=>o(!1))},[Se(ae(an),{size:17,"stroke-width":"2"})]))])]),d("nav",Zr,[(W(),q(ke,null,Ve(c,D=>d("button",{key:D.id,class:Pe(["tab-btn",{active:y.value===D.id}]),type:"button","aria-pressed":y.value===D.id,onClick:pe=>y.value=D.id},[(W(),Ge(ot(D.icon),{size:15,"stroke-width":"2"})),d("span",null,oe(D.label),1)],10,Jr)),64))]),d("div",Qr,[_e(d("section",ea,[d("div",ta,[d("div",na,[z[10]||(z[10]=d("span",{class:"overview-label"},"地图源",-1)),d("strong",null,oe(u.value),1)]),d("div",ra,[z[11]||(z[11]=d("span",{class:"overview-label"},"地形",-1)),d("strong",null,oe(v.value),1)]),d("div",aa,[z[12]||(z[12]=d("span",{class:"overview-label"},"模块",-1)),d("strong",null,oe(R.value)+"/"+oe(_.value.length),1)])]),S.value.length?(W(),q("div",ia,[(W(!0),q(ke,null,Ve(S.value,D=>(W(),q("button",{key:D.id,class:Pe(["tool-action",[D.variant||"default",{active:D.active}]]),disabled:D.disabled,type:"button",onClick:pe=>le(g.value.id,D.id)},[(W(),Ge(ot(ne(g.value.id,D.id)),{size:15,"stroke-width":"2"})),Ft(" "+oe(D.label),1)],10,oa))),128))])):(W(),q("div",sa," 暂无场景快捷操作 "))],512),[[ut,y.value==="scene"]]),_e(d("section",la,[e.basemapOptions.length?(W(),q("div",{key:0,class:Pe(["option-group",{expanded:h("basemap")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":h("basemap"),onClick:z[3]||(z[3]=D=>w("basemap"))},[d("span",ua,[Se(ae(Nt),{size:16,"stroke-width":"2"}),z[13]||(z[13]=d("span",null,"底图源",-1))]),d("span",da,[d("span",null,oe(u.value),1),Se(ae(St),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,ca),h("basemap")?(W(),q("div",ha,[d("div",fa,[(W(!0),q(ke,null,Ve(e.basemapOptions,D=>(W(),q("button",{key:D.value,class:Pe(["option-card",{active:D.value===e.activeBasemap}]),type:"button",disabled:D.disabled,"aria-pressed":D.value===e.activeBasemap,title:D.description||D.label,onClick:pe=>O(D)},[d("span",null,oe(D.label),1),D.value===e.activeBasemap?(W(),Ge(ae(on),{key:0,size:15,"stroke-width":"2.4"})):se("",!0)],10,ma))),128))]),d("form",{class:"custom-basemap-editor",onSubmit:st(B,["prevent"])},[d("div",pa,[Se(ae(Jn),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),_e(d("input",{"onUpdate:modelValue":z[4]||(z[4]=D=>P.value=D),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Ie,P.value]]),d("button",{class:"custom-basemap-submit",type:"submit",disabled:!P.value.trim(),title:"加载自定义 XYZ"},[Se(ae(zn),{size:14,"stroke-width":"2"}),z[14]||(z[14]=d("span",null,"加载",-1))],8,va)]),e.customBasemapUrl?(W(),q("div",ga,oe(e.customBasemapUrl),1)):se("",!0)],32)])):se("",!0)],2)):se("",!0),e.terrainOptions.length?(W(),q("div",{key:1,class:Pe(["option-group",{expanded:h("terrain")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":h("terrain"),onClick:z[5]||(z[5]=D=>w("terrain"))},[d("span",ba,[Se(ae(sn),{size:16,"stroke-width":"2"}),z[15]||(z[15]=d("span",null,"地形",-1))]),d("span",_a,[d("span",null,oe(v.value),1),Se(ae(St),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,ya),h("terrain")?(W(),q("div",xa,[d("div",Sa,[(W(!0),q(ke,null,Ve(e.terrainOptions,D=>(W(),q("button",{key:D.value,class:Pe(["option-card",{active:D.value===e.activeTerrain}]),type:"button","aria-pressed":D.value===e.activeTerrain,title:D.description||D.label,onClick:pe=>U.$emit("update:activeTerrain",D.value)},[d("span",null,oe(D.label),1),D.value===e.activeTerrain?(W(),Ge(ae(on),{key:0,size:15,"stroke-width":"2.4"})):se("",!0)],10,wa))),128))])])):se("",!0)],2)):se("",!0),e.overlayOptions.length?(W(),q("div",{key:2,class:Pe(["option-group",{expanded:h("overlay")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":h("overlay"),onClick:z[6]||(z[6]=D=>w("overlay"))},[d("span",Ma,[Se(ae(ln),{size:16,"stroke-width":"2"}),z[16]||(z[16]=d("span",null,"叠加层",-1))]),d("span",La,[d("span",null,oe(a.value)+"/"+oe(e.overlayOptions.length),1),Se(ae(St),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Ta),h("overlay")?(W(),q("div",Fa,[d("div",Ca,[(W(!0),q(ke,null,Ve(e.overlayOptions,D=>(W(),q("button",{key:D.value,class:Pe(["overlay-row",{active:!!D.active}]),type:"button",disabled:D.disabled,"aria-pressed":!!D.active,title:D.description||D.label,onClick:pe=>me(D)},[d("span",Aa,[d("span",Ea,oe(D.label),1),D.description?(W(),q("span",Da,oe(D.description),1)):se("",!0)]),d("span",{class:Pe(["toggle-control",{active:!!D.active}]),"aria-hidden":"true"},[...z[17]||(z[17]=[d("span",{class:"toggle-track"},[d("span",{class:"toggle-thumb"})],-1)])],2)],10,Pa))),128))])])):se("",!0)],2)):se("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(W(),q("div",Ra," 暂无图层配置项 ")):se("",!0)],512),[[ut,y.value==="layers"]]),_e(d("section",ka,[d("div",Ia,[(W(!0),q(ke,null,Ve(_.value,D=>{var pe,je;return W(),q("article",{key:D.id,class:Pe(["module-item",{expanded:F(D.id)}])},[d("button",{class:"module-head",type:"button","aria-expanded":F(D.id),onClick:V=>A(D.id)},[d("span",Oa,[(W(),Ge(ot(G(D.id)),{size:16,"stroke-width":"2"}))]),d("span",za,[d("span",Ba,oe(D.title),1),D.description?(W(),q("span",Ua,oe(D.description),1)):se("",!0)]),d("span",Ha,[D.status?(W(),q("span",{key:0,class:Pe(["module-status",D.statusTone||"neutral"])},oe(D.status),3)):se("",!0),Se(ae(St),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Na),F(D.id)?(W(),q("div",Wa,[(pe=D.actions)!=null&&pe.length?(W(),q("div",$a,[(W(!0),q(ke,null,Ve(D.actions,V=>(W(),q("button",{key:V.id,class:Pe(["tool-action",[V.variant||"default",{active:V.active}]]),disabled:V.disabled,type:"button",onClick:xe=>le(D.id,V.id)},[(W(),Ge(ot(ne(D.id,V.id)),{size:14,"stroke-width":"2"})),Ft(" "+oe(V.label),1)],10,Ga))),128))])):se("",!0),(je=D.controls)!=null&&je.length?(W(),q("div",qa,[(W(!0),q(ke,null,Ve(D.controls,V=>(W(),q("label",{key:V.id,class:Pe(["control-row",`control-${V.type}`])},[d("span",ja,[d("span",Xa,oe(V.label),1),V.tooltip?(W(),q("span",{key:0,class:"control-help","aria-label":V.tooltip,title:V.tooltip,onClick:z[7]||(z[7]=st(()=>{},["prevent","stop"]))}," ? ",8,Va)):se("",!0)]),V.type==="range"?(W(),q(ke,{key:0},[d("input",{class:"control-range",type:"range",min:V.min,max:V.max,step:V.step,value:V.value,disabled:V.disabled,onInput:xe=>re(D.id,V,xe.target.value)},null,40,Ya),d("input",{class:"control-number",type:"number",min:V.min,max:V.max,step:V.step,value:V.value,disabled:V.disabled,onInput:xe=>re(D.id,V,xe.target.value)},null,40,Ka)],64)):V.type==="color"?(W(),q(ke,{key:1},[d("input",{class:"control-color",type:"color",value:V.value,disabled:V.disabled,onInput:xe=>re(D.id,V,xe.target.value)},null,40,Za),d("span",{class:"control-color-swatch",style:In({backgroundColor:V.value})},null,4)],64)):V.type==="select"?(W(),q("select",{key:2,class:"control-select",value:V.value,disabled:V.disabled,onChange:xe=>re(D.id,V,xe.target.value)},[(W(!0),q(ke,null,Ve(V.options||[],xe=>(W(),q("option",{key:xe.value,value:xe.value},oe(xe.label),9,Qa))),128))],40,Ja)):V.type==="toggle"?(W(),q("button",{key:3,class:Pe(["toggle-control",{active:!!V.value}]),type:"button","aria-pressed":!!V.value,disabled:V.disabled,onClick:xe=>re(D.id,V,!V.value)},[...z[18]||(z[18]=[d("span",{class:"toggle-track"},[d("span",{class:"toggle-thumb"})],-1)])],10,ei)):se("",!0),V.displayValue?(W(),q("span",ti,oe(V.displayValue),1)):se("",!0)],2))),128))])):se("",!0)])):se("",!0)],2)}),128))]),_.value.length?se("",!0):(W(),q("div",ni," 暂无可用功能模块 "))],512),[[ut,y.value==="modules"]]),_e(d("section",ri,[d("label",ai,[d("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:N,class:"data-file-input",type:"file",multiple:"",accept:pi,onChange:qe},null,544),d("div",ii,[Se(ae(Gt),{size:28,"stroke-width":"1.5"}),z[19]||(z[19]=d("span",null,"选择文件或拖拽到此处",-1)),z[20]||(z[20]=d("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),r.value.length?(W(),q("div",oi,[d("div",si,[d("span",li," 已加载 "+oe(r.value.length)+" 个数据源 ",1),d("button",{class:"tool-action danger",type:"button",onClick:Be},[Se(ae(Ot),{size:13,"stroke-width":"2"}),z[21]||(z[21]=Ft(" 全部清除 ",-1))])]),(W(!0),q(ke,null,Ve(r.value,D=>(W(),q("button",{key:D.id,class:"data-source-row",type:"button",title:`点击移除 ${D.name} (${Ee(D.type)})`,"aria-label":`移除 ${D.name}`,onClick:pe=>Ye(D.id)},[d("span",ui,[(W(),Ge(ot(Fe(D.type)),{size:15,"stroke-width":"2"}))]),d("span",di,[d("span",hi,oe(D.name),1),d("span",fi,oe(Ee(D.type)),1)]),Se(ae(an),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,ci))),128))])):(W(),q("div",mi," 暂无已导入的数据 "))],512),[[ut,y.value==="data"]])])],2),[[ut,e.embedded||b.value]])],2))}},gi=_t(vi,[["__scopeId","data-v-2fed6c1a"]]),yi={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},bi={class:"dialog-header"},_i={class:"dialog-title-row"},xi={class:"dialog-file-name"},Si={class:"coord-fields"},wi={class:"coord-field"},Ti={key:0,class:"coord-error"},Mi={class:"coord-field"},Li={key:0,class:"coord-error"},Fi={class:"coord-field"},Ci={key:0,class:"coord-error"},Pi={class:"dialog-actions"},Ai=["disabled"],Ei={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,l=K(""),s=K(""),m=K("0"),y=K(null),M=K(""),T=K(""),E=K(""),P=we(()=>l.value!==""&&s.value!==""&&!M.value&&!T.value&&!E.value);function N(){const g=parseFloat(l.value),S=parseFloat(s.value),_=parseFloat(m.value);M.value="",T.value="",E.value="",l.value!==""&&(isNaN(g)||g<-180||g>180)&&(M.value="经度范围: -180 ~ 180"),s.value!==""&&(isNaN(S)||S<-90||S>90)&&(T.value="纬度范围: -90 ~ 90"),m.value!==""&&(isNaN(_)||_<0)&&(E.value="高度必须 ≥ 0")}function b(){if(!P.value){N();return}const g=parseFloat(l.value),S=parseFloat(s.value),_=parseFloat(m.value)||0;r("confirm",{lng:g,lat:S,height:_})}return Le(()=>n.visible,g=>{if(!g){M.value="",T.value="",E.value="";return}l.value="",s.value="",m.value="0",M.value="",T.value="",E.value="",g&&setTimeout(()=>{var S;(S=y.value)==null||S.focus()},60)}),(g,S)=>(W(),Ge($n,{to:"body"},[e.visible?(W(),q("div",{key:0,class:"cesium-data-dialog-overlay",onClick:S[4]||(S[4]=st(_=>g.$emit("cancel"),["self"]))},[d("div",yi,[d("header",bi,[d("div",_i,[Se(ae(Ct),{size:18,"stroke-width":"2"}),S[5]||(S[5]=d("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),d("p",xi,oe(e.fileName),1),S[6]||(S[6]=d("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),d("form",{class:"dialog-form",onSubmit:st(b,["prevent"])},[d("div",Si,[d("label",wi,[S[7]||(S[7]=d("span",{class:"coord-label"},"经度 (Longitude)",-1)),_e(d("input",{ref_key:"lngInputRef",ref:y,"onUpdate:modelValue":S[0]||(S[0]=_=>l.value=_),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:N},null,544),[[Ie,l.value]]),M.value?(W(),q("span",Ti,oe(M.value),1)):se("",!0)]),d("label",Mi,[S[8]||(S[8]=d("span",{class:"coord-label"},"纬度 (Latitude)",-1)),_e(d("input",{"onUpdate:modelValue":S[1]||(S[1]=_=>s.value=_),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:N},null,544),[[Ie,s.value]]),T.value?(W(),q("span",Li,oe(T.value),1)):se("",!0)]),d("label",Fi,[S[9]||(S[9]=d("span",{class:"coord-label"},"高度 (Height 米)",-1)),_e(d("input",{"onUpdate:modelValue":S[2]||(S[2]=_=>m.value=_),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:N},null,544),[[Ie,m.value]]),E.value?(W(),q("span",Ci,oe(E.value),1)):se("",!0)])]),d("div",Pi,[d("button",{class:"dialog-btn cancel-btn",type:"button",onClick:S[3]||(S[3]=_=>g.$emit("cancel"))}," 取消 "),d("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!P.value},[Se(ae(zn),{size:14,"stroke-width":"2"}),S[10]||(S[10]=Ft(" 确认放置 ",-1))],8,Ai)])],32)])])):se("",!0)]))}},Di=_t(Ei,[["__scopeId","data-v-81f307a1"]]);function Ri(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(R){return(R==null?void 0:R._view)||(R==null?void 0:R.view)}function n(R){const a=t(R);if(!(a!=null&&a.passState))throw new Error("Cesium scene passState is unavailable.");return a.passState}function r(R){const a=t(R);return(a==null?void 0:a.frustumCommandsList)||(a==null?void 0:a._frustumCommandsList)||[]}const l=`
// cesium for fluid by mind3d , fluid demo from https://www.shadertoy.com/view/7tSSDD 
const int textureSize = 1024;
// Render
const vec3 backgroundColor = vec3(0.2);
// Terrain
const float transitionTime = 5.0;
const float transitionPercent = 0.3;
const int octaves = 7;
const float minAnimatedFilmDepth = 0.003;
// Water simulation
// const float attenuation = 0.995;
// const float strenght = 0.25;
// const float minTotalFlow = 0.0001;
// fluidParam: x=attenuation, y=strength, z=minTotalFlow, w=initialWaterLevel(normalized absolute elevation)
// customParam: x=threshold(fogDist), y=blend(specPower), z=lightStrength(specIntensity), w=reserved
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
`,s=`
// compute Terrain and update water level 1st pass
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
// Update Outflow 1st pass
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
// water level 2nd pass
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
`,M=`
// Update Outflow 2nd pass
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
`;class E{constructor(a){this.commandType=a.commandType,this.geometry=a.geometry,this.attributeLocations=a.attributeLocations,this.primitiveType=a.primitiveType,this.uniformMap=a.uniformMap,this.vertexShaderSource=a.vertexShaderSource,this.fragmentShaderSource=a.fragmentShaderSource,this.rawRenderState=a.rawRenderState,this.framebuffer=a.framebuffer,this.isPostRender=a.isPostRender,this.outputTexture=a.outputTexture,this.autoClear=e.defaultValue(a.autoClear,!1),this.preExecute=a.preExecute,this.modelMatrix=e.defaultValue(a.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(a){switch(this.commandType){case"Draw":{const c=e.VertexArray.fromGeometry({context:a,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),u=e.ShaderProgram.fromCache({context:a,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),v=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:c,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:u,framebuffer:this.framebuffer,renderState:v,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(a,c){this.geometry=c;const u=e.VertexArray.fromGeometry({context:a,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=u}update(a){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(a.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&a.commandList.push(this.clearCommand),a.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class P{constructor(){}static loadText(a){const c=new XMLHttpRequest;return c.open("GET",a,!1),c.send(),c.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(a){if(e.defined(a.arrayBufferView)){const u={};u.arrayBufferView=a.arrayBufferView,a.source=u,a.flipY=!1}return new e.Texture(a)}static createDepthFramebuffer(a,c,u){return new e.Framebuffer({context:a,colorTextures:[this.createTexture({context:a,width:c,height:u,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(c*u*4)})],depthRenderbuffer:new e.Renderbuffer({context:a,width:c,height:u,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(a,c,u,v=!1){const o={context:a,colorTextures:[c],destroyAttachments:v};return u&&(o.depthTexture=u),new e.Framebuffer(o)}static createRawRenderState(a){const v={viewport:a.viewport,depthTest:a.depthTest,depthMask:a.depthMask,blending:a.blending};return e.Appearance.getDefaultRenderState(!0,!1,v)}}const _=class _{constructor(a,c={}){if(!a)throw new Error("Cesium Viewer is required");this.viewer=a,this._initConfiguration(c),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(a){this.config={resolution:new e.Cartesian2(a.width||_.DEFAULTS.width,a.height||_.DEFAULTS.height),dimensions:a.dimensions||_.DEFAULTS.dimensions.clone(),heightRange:{min:a.minHeight??_.DEFAULTS.heightRange[0],max:a.maxHeight??_.DEFAULTS.heightRange[1]},baseHeight:a.baseHeight??_.DEFAULTS.baseHeight,fluidParams:a.fluidParams||_.DEFAULTS.fluidParams.clone(),customParams:a.customParams||_.DEFAULTS.customParams.clone(),waterColor:a.waterColor||_.DEFAULTS.waterColor.clone(),lonLat:a.lonLat||[..._.DEFAULTS.lonLat],timeStep:a.timeStep||_.DEFAULTS.timeStep,heightMapSource:a.heightMapSource||_.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(a){const c=Number(a);!Number.isFinite(c)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,c)),this.resetSimulation())}resetSimulation(){var a,c;this._frameCount=0,(c=(a=this.viewer.scene).requestRender)==null||c.call(a)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const a=()=>P.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:a(),B:a(),C:a(),D:a()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(a){if(!(a!=null&&a.arrayBufferView)||!a.width||!a.height)throw new Error("Invalid height map source.");return P.createTexture({context:this.viewer.scene.context,width:a.width,height:a.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:a.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var I,Z;const a=this.viewer.scene.context,c=P.createDepthFramebuffer(a,this.config.resolution.x,this.config.resolution.y),u=this.viewer.scene,v=u.frameState,o=n(this.viewer.scene),h=u.camera,w=v.camera,F=o.framebuffer,A=e.BoundingRectangle.clone(o.viewport,new e.BoundingRectangle);let O=null,B=[];try{o.viewport.x=0,o.viewport.y=0,o.viewport.width=this.config.resolution.x,o.viewport.height=this.config.resolution.y,o.framebuffer=c,u.camera=this.heightMapCamera,v.camera=this.heightMapCamera,v.context.uniformState.updateCamera(this.heightMapCamera),B=this._processHeightMapShaders(),this._renderDepthPrepass(o);const G=P.createTexture({context:a,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return O=P.createFramebuffer(a,G),this._copyTexture(c.getColorTexture(0),O),G}finally{this._restoreHeightMapShaders(B),o.framebuffer=F,e.BoundingRectangle.clone(A,o.viewport),u.camera=h,v.camera=w,w&&v.context.uniformState.updateCamera(w),O&&!((I=O.isDestroyed)!=null&&I.call(O))&&O.destroy(),c&&!((Z=c.isDestroyed)!=null&&Z.call(c))&&c.destroy()}}_renderDepthPrepass(a){const c=this.viewer.scene.frameState;c.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(v=>v.execute(this.viewer.scene.context,a))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const a={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...a,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:s}),this._createComputePass("B",{uniforms:{...a,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:m}),this._createComputePass("C",{uniforms:{...a,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:y}),this._createComputePass("D",{uniforms:{...a,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:M})]}_createComputePass(a,{uniforms:c,shaderSource:u}){return new E({commandType:"Compute",uniformMap:c,fragmentShaderSource:new e.ShaderSource({sources:[l,u]}),geometry:P.getFullscreenQuad(),outputTexture:this.textures[a],preExecute:v=>v.commandToExecute.outputTexture=this.textures[a]})}_createMainRenderPass(){const a=b([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new E({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[l,T]}),geometry:this._createBoxGeometry(),modelMatrix:a,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var a,c,u,v;return(v=(u=(c=(a=t(this.viewer.scene))==null?void 0:a.globeDepth)==null?void 0:c.colorFramebufferManager)==null?void 0:u._colorTextures)==null?void 0:v[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(a=>this.viewer.scene.primitives.add(a)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(a){const c=this.viewer.camera.getPickRay(a);return this.viewer.scene.globe.pick(c,this.viewer.scene)}_createOrthographicCamera(){const a=new e.Camera(this.viewer.scene);a.frustum=new e.OrthographicOffCenterFrustum;const[c,u]=this.config.lonLat,v=e.Cartesian3.fromDegrees(c,u,this.config.baseHeight),o=e.Transforms.eastNorthUpToFixedFrame(v),h=a.frustum;h.near=.01,h.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),h.left=-this.config.dimensions.x/2,h.right=this.config.dimensions.x/2,h.bottom=-this.config.dimensions.y/2,h.top=this.config.dimensions.y/2;const w=e.Matrix4.getColumn(o,2,new e.Cartesian3);e.Cartesian3.negate(w,w);const F=e.Matrix4.getColumn(o,1,new e.Cartesian3),A=e.Matrix4.getColumn(o,0,new e.Cartesian3),O=e.Cartesian3.multiplyByScalar(w,-h.far,new e.Cartesian3);return a.position=e.Cartesian3.add(v,O,new e.Cartesian3),a.direction=w,a.up=F,a.right=A,a}destroy(){var a,c;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(u=>{u&&this.viewer.scene.primitives.remove(u)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(u=>{var v;u&&!((v=u.isDestroyed)!=null&&v.call(u))&&u.destroy()}),this.textures={},this._heightMap&&!((c=(a=this._heightMap).isDestroyed)!=null&&c.call(a))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(a,c){const u=this.viewer.scene.context,v=n(this.viewer.scene),o=u.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>a},owner:this}),h=v.framebuffer;v.framebuffer=c,o.execute(u,v),v.framebuffer=h}_getDepthRenderCommands(){var u,v;const a=[],c=r(this.viewer.scene);for(let o=0;o<c.length;++o){const h=c[o],w=(u=h==null?void 0:h.commands)==null?void 0:u[2],F=((v=h==null?void 0:h.indices)==null?void 0:v[2])??(w==null?void 0:w.length)??0;w&&F>0&&a.push(...w.slice(0,F))}return a}_processHeightMapShaders(){const a=[],c=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),u=e.Matrix4.inverse(c,new e.Matrix4),v=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(h=>{var B;if(!((B=h==null?void 0:h.shaderProgram)!=null&&B.fragmentShaderSource)||!h.uniformMap)return;const w=Object.prototype.hasOwnProperty.call(h.uniformMap,"u_inverseEnuMatrix"),F=h.uniformMap.u_inverseEnuMatrix,A=h.shaderProgram,O=new e.Matrix4;h.uniformMap.u_inverseEnuMatrix=()=>{const I=h.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(u,I,O)},h.heightMap_ShaderProgram||(h.heightMap_ShaderProgram=this._getDerivedShaderProgram(v.context,h.shaderProgram,"Height_Map")),h.shaderProgram=h.heightMap_ShaderProgram,a.push({command:h,hadInverseUniform:w,originalInverseUniform:F,originalShaderProgram:A})}),a}_restoreHeightMapShaders(a){a.forEach(c=>{const{command:u,hadInverseUniform:v,originalInverseUniform:o,originalShaderProgram:h}=c;u!=null&&u.uniformMap&&(u.shaderProgram=h,v?u.uniformMap.u_inverseEnuMatrix=o:delete u.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(a,c,u){let v=a.shaderCache.getDerivedShaderProgram(c,u);return e.defined(v)||(v=this._createHeightMapShaderProgram(a,c,u)),v}_createHeightMapShaderProgram(a,c,u){const v=this._modifyFragmentShader(c.fragmentShaderSource);return a.shaderCache.createDerivedShaderProgram(c,u,{vertexShaderSource:c.vertexShaderSource,fragmentShaderSource:v,attributeLocations:c._attributeLocations})}_modifyFragmentShader(a){const c=a.sources.map(u=>e.ShaderSource.replaceMain(u,"czm_heightMap_main"));return c.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:c,defines:a.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};nn(_,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let N=_;const b=(R=[0,0,0],a=[0,0,0],c=[1,1,1])=>{const u=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(a[0]))),v=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(a[1]))),o=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(a[2])));R instanceof e.Cartesian3||(R=e.Cartesian3.fromDegrees(...R));const h=e.Transforms.eastNorthUpToFixedFrame(R);e.Matrix4.multiply(h,u,h),e.Matrix4.multiply(h,v,h),e.Matrix4.multiply(h,o,h);const w=e.Matrix4.fromScale(new e.Cartesian3(...c));return e.Matrix4.multiply(h,w,new e.Matrix4)},g=`
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
    `;function S(){return new e.PostProcessStage({fragmentShader:g})}return{FluidRenderer:N,createSkyEffect:S}}const ki={key:0,class:"fluid-root"},Ii={class:"fluid-panel"},Ni={class:"panel-actions"},Oi=["disabled"],zi={key:0,class:"selected-text"},Bi={class:"param-list"},Ui={class:"param-row"},Hi={class:"param-row"},Wi={class:"param-row"},$i={key:0,class:"param-row"},Gi=["min","max","step"],qi=["min","max","step"],ji={class:"param-row color-row"},fn=1024,Mt=1e4,mn=1200,Xi=100,Vi=.01,Yi=.03,Ki=60,zt=64,Zi=160,Ji={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const r=e,l=n,s=Xt(),m=K(10),y=K(20),M=K(3),T=K("#0d4fa3"),E=K(null),P=K(null),N=K(null),b=K(!1),g=K(!1),S=K(null),_=K(null);let R=null,a=null,c=null,u=null,v=null,o=null,h=0;const w=we(()=>!Number.isFinite(S.value)||!Number.isFinite(_.value)?"":`经度 ${S.value.toFixed(6)} / 纬度 ${_.value.toFixed(6)}`),F=we(()=>Number.isFinite(P.value)&&Number.isFinite(N.value)),A=we(()=>{if(!F.value)return 1;const f=Math.abs(N.value-P.value);return Math.max(f/1e3,.01)});Le([m,y,M,T],Ue),Le(E,He),Le(()=>r.params,f=>{B(f||{})},{deep:!0,immediate:!0}),Le([b,g,w,E,P,N],I,{immediate:!0}),Gn(()=>{ue(!0)});function O(){var k,X;const f=(k=r.getViewer)==null?void 0:k.call(r),p=((X=r.getCesium)==null?void 0:X.call(r))||window.Cesium;if(!f||!p)return s.warning("Cesium 场景尚未就绪。"),null;if(!R){const J=Ri(p);R=J.FluidRenderer,a=J.createSkyEffect}return{viewer:f,Cesium:p}}function B(f){Number.isFinite(Number(f.threshold))&&(m.value=Number(f.threshold)),Number.isFinite(Number(f.blend))&&(y.value=Number(f.blend)),Number.isFinite(Number(f.lightStrength))&&(M.value=Number(f.lightStrength)),Ke(f.waterColor)&&(T.value=f.waterColor),Number.isFinite(Number(f.waterLevel))&&(E.value=Number(f.waterLevel))}function I(){l("state-change",{isPicking:b.value,hasFluid:g.value,selectedText:w.value,waterLevel:E.value,waterLevelMin:P.value,waterLevelMax:N.value})}function Z(){const f=O();if(!f)return;const{viewer:p,Cesium:k}=f;Y(),L(p,k),b.value=!0,c=new k.ScreenSpaceEventHandler(p.scene.canvas),c.setInputAction(X=>{G(p,k,X.position)},k.ScreenSpaceEventType.LEFT_CLICK)}async function G(f,p,k){var tt,Ze;const X=Ae(f,k);if(!X){s.warning("未选中可用地形位置。");return}const J=++h;Y();const ce=p.Cartographic.fromCartesian(X),ge=p.Math.toDegrees(ce.longitude),ve=p.Math.toDegrees(ce.latitude),Te=Number(ce.height),De=Number.isFinite(Te)?Te:0,Xe=new p.Cartesian3(Mt,Mt,0);Nn("正在请求模拟范围高度数据...");try{ee();const Q=Number(m.value)||0,te=Number(y.value)||0,be=Number(M.value)||0,i=await ne(f,p,{lon:ge,lat:ve,centerHeight:De,dimensions:Xe}),x=z(i,De),H=x.baseHeight,$=x.depth,ie=D(x,De),fe=new p.Cartesian3(Mt,Mt,$);if(J!==h)return;P.value=x.minHeight,N.value=x.maxHeight,E.value=ie,i||s.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),u=new R(f,{lonLat:[ge,ve],width:fn,height:fn,dimensions:fe,baseHeight:H,minHeight:x.minHeight,maxHeight:x.maxHeight,heightMapSource:i,waterColor:V(p,T.value),customParams:new p.Cartesian4(Q,te,be,10),fluidParams:new p.Cartesian4(.9+be/10*.099,Math.min(1,te/50),Q/5e4,pe(ie,x))}),S.value=ge,_.value=ve,g.value=!0,(Ze=(tt=f.scene).requestRender)==null||Ze.call(tt),s.success("水体流体已创建。")}catch(Q){s.error("水体流体创建失败",Q),s.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{On()}}async function ne(f,p,k){const X=f==null?void 0:f.terrainProvider,J=re(k.dimensions);if(!X)return null;if(p.EllipsoidTerrainProvider&&X instanceof p.EllipsoidTerrainProvider)return Be(J);if(typeof p.sampleTerrain!="function"&&typeof p.sampleTerrainMostDetailed!="function")return null;try{return await le(f,p,k,J)}catch(ce){if(J<=zt)throw ce;return le(f,p,k,zt)}}async function le(f,p,k,X){const J=Fe(p,k,X),ce=await Ee(p,f.terrainProvider,J);return Ye(ce||J,{size:X})}function re(f){const p=Math.max(Number(f==null?void 0:f.x)||0,Number(f==null?void 0:f.y)||0),k=Math.ceil(p/Ki)+1;return me(k,zt,Zi)}function me(f,p,k){return Math.max(p,Math.min(k,Math.round(f)))}function Fe(f,{lon:p,lat:k,centerHeight:X,dimensions:J},ce){const ge=f.Cartesian3.fromDegrees(p,k,X),ve=f.Transforms.eastNorthUpToFixedFrame(ge),Te=[],De=Math.max(1,ce-1);for(let Xe=0;Xe<ce;Xe++){const Ze=(.5-Xe/De)*J.y;for(let Q=0;Q<ce;Q++){const be=(Q/De-.5)*J.x,i=new f.Cartesian3(be,Ze,0),x=f.Matrix4.multiplyByPoint(ve,i,new f.Cartesian3);Te.push(f.Cartographic.fromCartesian(x))}}return Te}async function Ee(f,p,k){const X=qe(p);return Number.isInteger(X)&&typeof f.sampleTerrain=="function"?f.sampleTerrain(p,X,k):typeof f.sampleTerrainMostDetailed=="function"?f.sampleTerrainMostDetailed(p,k):f.sampleTerrain(p,10,k)}function qe(f){const p=Number(f==null?void 0:f._bottomLevel);return Number.isFinite(p)?Math.max(0,p-1):null}function Ye(f,{size:p}){var J;const k=U(f);if(!k)return null;const X=new Float32Array(p*p*4);for(let ce=0;ce<p*p;ce++){const ge=Number((J=f[ce])==null?void 0:J.height),ve=ce*4;X[ve]=Number.isFinite(ge)?Oe(ge,k.minHeight,k.maxHeight):k.minHeight,X[ve+1]=0,X[ve+2]=0,X[ve+3]=1}return{width:p,height:p,arrayBufferView:X,minHeight:k.minHeight,maxHeight:k.maxHeight}}function Be(f){return{width:f,height:f,arrayBufferView:new Float32Array(f*f*4),minHeight:0,maxHeight:0}}function U(f){let p=Number.POSITIVE_INFINITY,k=Number.NEGATIVE_INFINITY;for(const X of f||[]){const J=Number(X==null?void 0:X.height);Number.isFinite(J)&&(p=Math.min(p,J),k=Math.max(k,J))}return!Number.isFinite(p)||!Number.isFinite(k)?null:{minHeight:p,maxHeight:k}}function z(f,p){const k=Number(f==null?void 0:f.minHeight),X=Number(f==null?void 0:f.maxHeight);if(Number.isFinite(k)&&Number.isFinite(X)){const ge=Number(p),ve=Number.isFinite(ge)?Math.min(k,X,ge):Math.min(k,X),Te=Number.isFinite(ge)?Math.max(k,X,ge):Math.max(k,X),De=Math.max(Te-ve,Vi);return{baseHeight:ve,depth:De,minHeight:ve,maxHeight:ve+De}}const J=Number(p),ce=Number.isFinite(J)?J-Xi:0;return{baseHeight:ce,depth:mn,minHeight:ce,maxHeight:ce+mn}}function D(f,p){const k=f.minHeight+f.depth*Yi,X=Number(p),J=Number.isFinite(X)?X:k;return Oe(J,f.minHeight,f.maxHeight)}function pe(f,p){const k=p.maxHeight-p.minHeight;return!Number.isFinite(k)||k<=0?0:Oe((f-p.minHeight)/k,0,1)}function je(){return!Number.isFinite(P.value)||!Number.isFinite(N.value)?null:{minHeight:Math.min(P.value,N.value),maxHeight:Math.max(P.value,N.value)}}function V(f,p){const k=Ne(p)||Ne("#0d4fa3");return new f.Cartesian3(k.red,k.green,k.blue)}function xe(){var k;const f=Ne(T.value),p=(k=u==null?void 0:u.config)==null?void 0:k.waterColor;!f||!p||(p.x=f.red,p.y=f.green,p.z=f.blue)}function Ke(f){return typeof f=="string"&&/^#[0-9a-f]{6}$/i.test(f)}function Ne(f){return Ke(f)?{red:Number.parseInt(f.slice(1,3),16)/255,green:Number.parseInt(f.slice(3,5),16)/255,blue:Number.parseInt(f.slice(5,7),16)/255}:null}function Oe(f,p,k){return Math.max(p,Math.min(k,f))}function Ae(f,p){if(!p)return null;if(f.scene.pickPositionSupported&&typeof f.scene.pickPosition=="function"){const X=f.scene.pickPosition(p);if(X)return X}const k=f.camera.getPickRay(p);return k?f.scene.globe.pick(k,f.scene):null}function Ue(){var X,J,ce;if(!(u!=null&&u.config))return;const f=Number(m.value)||0,p=Number(y.value)||0,k=Number(M.value)||0;u.config.customParams&&(u.config.customParams.x=f,u.config.customParams.y=p,u.config.customParams.z=k),u.config.fluidParams&&(u.config.fluidParams.x=.9+k/10*.099,u.config.fluidParams.y=Math.min(1,p/50),u.config.fluidParams.z=f/5e4),xe(),(ce=(J=(X=u.viewer)==null?void 0:X.scene)==null?void 0:J.requestRender)==null||ce.call(J)}function He(){var J,ce,ge,ve;if(!((J=u==null?void 0:u.config)!=null&&J.fluidParams))return;const f=je(),p=Number(E.value);if(!f||!Number.isFinite(p))return;const k=Oe(p,f.minHeight,f.maxHeight);if(k!==p){E.value=k;return}const X=pe(k,f);typeof u.setInitialWaterLevel=="function"?u.setInitialWaterLevel(X):(u.config.fluidParams.w=X,(ve=(ge=(ce=u.viewer)==null?void 0:ce.scene)==null?void 0:ge.requestRender)==null||ve.call(ge))}function L(f,p){var k,X;if(!o){const J=f.scene;o={shadows:f.shadows,resolutionScale:f.resolutionScale,msaaSamples:J.msaaSamples,depthTestAgainstTerrain:J.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:J.logarithmicDepthBuffer,highDynamicRange:J.highDynamicRange,fogEnabled:(k=J.fog)==null?void 0:k.enabled,showGroundAtmosphere:J.globe.showGroundAtmosphere,skyAtmosphereShow:(X=J.skyAtmosphere)==null?void 0:X.show,enableLighting:J.globe.enableLighting}}f.shadows=!0,f.resolutionScale=1,f.scene.msaaSamples=4,f.scene.globe.depthTestAgainstTerrain=!0,f.scene.logarithmicDepthBuffer=!0,f.scene.highDynamicRange=!0,f.scene.fog&&(f.scene.fog.enabled=!0),f.scene.globe.showGroundAtmosphere=!0,f.scene.skyAtmosphere&&(f.scene.skyAtmosphere.show=!0),f.scene.globe.enableLighting=!0,!v&&a&&(v=a(p),f.scene.postProcessStages.add(v))}function C(f){if(!f||!o)return;const p=f.scene;f.shadows=o.shadows,f.resolutionScale=o.resolutionScale,o.msaaSamples!==void 0&&(p.msaaSamples=o.msaaSamples),p.globe.depthTestAgainstTerrain=o.depthTestAgainstTerrain,p.logarithmicDepthBuffer=o.logarithmicDepthBuffer,p.highDynamicRange=o.highDynamicRange,p.fog&&o.fogEnabled!==void 0&&(p.fog.enabled=o.fogEnabled),p.globe.showGroundAtmosphere=o.showGroundAtmosphere,p.skyAtmosphere&&o.skyAtmosphereShow!==void 0&&(p.skyAtmosphere.show=o.skyAtmosphereShow),p.globe.enableLighting=o.enableLighting,o=null}function j(){ue(!1),s.success("水体流体已清除。")}function Y(){c&&(c.destroy(),c=null),b.value=!1}function ee(){if(u){try{u.destroy()}catch{}u=null,g.value=!1}}function ue(f){var k,X,J;const p=(k=r.getViewer)==null?void 0:k.call(r);if(h+=1,Y(),ee(),S.value=null,_.value=null,E.value=null,P.value=null,N.value=null,p&&v){try{p.scene.postProcessStages.remove(v)}catch{}v=null}f&&p&&C(p),(J=(X=p==null?void 0:p.scene)==null?void 0:X.requestRender)==null||J.call(X)}function ye(){ue(!0),l("close")}return t({startPickHeightMap:Z,clearFluid:j}),(f,p)=>e.headless?se("",!0):(W(),q("div",ki,[d("div",Ii,[d("div",{class:"panel-head"},[p[9]||(p[9]=d("span",{class:"panel-title"},"水体流体",-1)),d("button",{class:"panel-close",title:"关闭",onClick:ye}," × ")]),d("div",Ni,[d("button",{class:Pe(["action-btn primary",{active:b.value}]),onClick:Z},oe(b.value?"等待选点":"捕捉高度图"),3),d("button",{class:"action-btn",disabled:!g.value&&!b.value,onClick:j}," 清除 ",8,Oi)]),w.value?(W(),q("div",zi,oe(w.value),1)):se("",!0),d("div",Bi,[d("label",Ui,[p[10]||(p[10]=d("span",null,"阈值",-1)),_e(d("input",{"onUpdate:modelValue":p[0]||(p[0]=k=>m.value=k),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Ie,m.value,void 0,{number:!0}]]),_e(d("input",{"onUpdate:modelValue":p[1]||(p[1]=k=>m.value=k),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Ie,m.value,void 0,{number:!0}]])]),d("label",Hi,[p[11]||(p[11]=d("span",null,"混合",-1)),_e(d("input",{"onUpdate:modelValue":p[2]||(p[2]=k=>y.value=k),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Ie,y.value,void 0,{number:!0}]]),_e(d("input",{"onUpdate:modelValue":p[3]||(p[3]=k=>y.value=k),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Ie,y.value,void 0,{number:!0}]])]),d("label",Wi,[p[12]||(p[12]=d("span",null,"光强",-1)),_e(d("input",{"onUpdate:modelValue":p[4]||(p[4]=k=>M.value=k),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Ie,M.value,void 0,{number:!0}]]),_e(d("input",{"onUpdate:modelValue":p[5]||(p[5]=k=>M.value=k),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Ie,M.value,void 0,{number:!0}]])]),F.value?(W(),q("label",$i,[p[13]||(p[13]=d("span",null,"水位",-1)),_e(d("input",{"onUpdate:modelValue":p[6]||(p[6]=k=>E.value=k),type:"range",min:P.value,max:N.value,step:A.value},null,8,Gi),[[Ie,E.value,void 0,{number:!0}]]),_e(d("input",{"onUpdate:modelValue":p[7]||(p[7]=k=>E.value=k),class:"number-input",type:"number",min:P.value,max:N.value,step:A.value},null,8,qi),[[Ie,E.value,void 0,{number:!0}]])])):se("",!0),d("label",ji,[p[14]||(p[14]=d("span",null,"水色",-1)),_e(d("input",{"onUpdate:modelValue":p[8]||(p[8]=k=>T.value=k),class:"color-input",type:"color"},null,512),[[Ie,T.value]]),d("span",{class:"color-swatch",style:In({backgroundColor:T.value})},null,4)])])])]))}},Qi=_t(Ji,[["__scopeId","data-v-9ecdafb8"]]),Yt="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",eo=`${Yt}Cesium.js`,to=`${Yt}Widgets/widgets.css`;async function no({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Yt),await ao(to,"cesium-widgets-style"),await ro(eo,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Pt(t,e),t}function Pt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function ro(e,t){return new Promise((n,r)=>{const l=document.getElementById(t);if(l){if(l.getAttribute("data-loaded")==="true"){n();return}l.addEventListener("load",()=>n(),{once:!0}),l.addEventListener("error",()=>r(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const s=document.createElement("script");s.id=t,s.src=e,s.async=!0,s.onload=()=>{s.setAttribute("data-loaded","true"),n()},s.onerror=()=>r(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(s)})}function ao(e,t){return new Promise((n,r)=>{if(document.getElementById(t)){n();return}const s=document.createElement("link");s.id=t,s.rel="stylesheet",s.href=e,s.onload=()=>n(),s.onerror=()=>r(new Error(`样式加载失败: ${e}`)),document.head.appendChild(s)})}const io="Asia/Shanghai",oo="UTC+8",so=new Intl.DateTimeFormat("zh-CN",{timeZone:io,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function lo(e,t){var n,r,l,s,m,y,M;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...T)=>uo(e,t,...T),e.animation.viewModel.timeFormatter=(...T)=>ho(e,t,...T)),e.timeline){const T=(...E)=>fo(e,t,...E);e.timeline.makeLabel=T,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=T),(l=(r=e.timeline).updateFromClock)==null||l.call(r),(m=(s=e.timeline).zoomTo)==null||m.call(s,e.clock.startTime,e.clock.stopTime)}(M=(y=e.scene).requestRender)==null||M.call(y)}}function Kt(e,t,...n){var y;const r=n.find(co)||((y=e==null?void 0:e.clock)==null?void 0:y.currentTime);if(!r)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const l=t.JulianDate.toDate(r),s=so.formatToParts(l),m=Object.fromEntries(s.filter(({type:M})=>M!=="literal").map(({type:M,value:T})=>[M,T]));return{year:m.year||"0000",month:m.month||"01",day:m.day||"01",hour:m.hour||"00",minute:m.minute||"00",second:m.second||"00"}}function co(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function uo(e,t,...n){const{year:r,month:l,day:s}=Kt(e,t,...n);return`${r}-${l}-${s}`}function ho(e,t,...n){const{hour:r,minute:l,second:s}=Kt(e,t,...n);return`${r}:${l}:${s} ${oo}`}function fo(e,t,...n){const{month:r,day:l,hour:s,minute:m}=Kt(e,t,...n);return`${r}-${l} ${s}:${m}`}function mo({getViewer:e}){let t=null,n=null;function r(){var y;const m=e==null?void 0:e();if(m&&((y=m._cesiumWidget)!=null&&y._creditContainer&&(m._cesiumWidget._creditContainer.style.display="none"),l(),t=setInterval(()=>{const M=document.querySelector(".cesium-credit-container");M&&M.innerHTML.length>0&&(M.innerHTML="",M.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const M=document.createElement("style");M.id="cesium-credit-override",M.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(M),n=M}}function l(){var M;const m=e==null?void 0:e();if(!m)return;(M=m._cesiumWidget)!=null&&M._creditContainer&&(m._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",m._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(T=>{T.style.cssText="display: none !important; visibility: hidden !important;",T.innerHTML=""}),m.scene&&m.scene.frameState&&m.scene.frameState.creditDisplay&&(m.scene.frameState.creditDisplay.hasCredits=()=>!1,m.scene.frameState.creditDisplay.destroy=()=>{})}function s(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:r,cleanupCreditHider:s}}const po=500,qt=48,vo=160,pn=48;function go({getViewer:e}){const t=K(null),n=K([]),r=we(()=>Number.isFinite(t.value)?String(t.value):"--"),l=we(()=>yo(n.value));let s=null,m=0,y=Bt();function M(){var P;const E=(P=e==null?void 0:e())==null?void 0:P.scene;E!=null&&E.preRender&&(T(),t.value=null,n.value=[],m=0,y=Bt(),s=E.preRender.addEventListener(()=>{m+=1;const N=Bt(),b=N-y;if(b<po)return;const g=Math.round(m*1e3/b);t.value=g,n.value=[...n.value.slice(1-qt),g],m=0,y=N}))}function T(){typeof s=="function"&&(s(),s=null)}return{frameRateDisplay:r,frameRateLinePoints:l,setupFrameRateMonitor:M,cleanupFrameRateMonitor:T}}function Bt(){return typeof performance<"u"?performance.now():Date.now()}function yo(e){if(!e.length)return"";const t=Math.max(60,...e),n=vo/(qt-1),r=qt-e.length;return e.map((l,s)=>{const m=(r+s)*n,y=Math.max(0,Math.min(l/t,1)),M=pn-y*pn;return`${m.toFixed(1)},${M.toFixed(1)}`}).join(" ")}const Ut="经度: --, 纬度: --, 海拔: --米";function bo({getViewer:e,getCesium:t,onCoordinatePick:n}){let r=null,l=null,s=null;const m=K("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function y(){const b=e==null?void 0:e(),g=t==null?void 0:t();!b||!g||(N(),l=b.scene.canvas,r=new g.ScreenSpaceEventHandler(l),s=()=>{m.value=Ut},l.addEventListener("mouseleave",s),r.setInputAction(S=>{M(S.endPosition,b,g)},g.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(S=>{const _=S.endPosition,R=S.startPosition;if(!g.defined(b.terrainProvider))return;const a=b.scene.globe.ellipsoid;if(!b.camera.pickEllipsoid(R,a)){const u=b.camera;u.rotate(g.Cartesian3.UNIT_X,-.002*(_.y-R.y)),u.rotate(g.Cartesian3.UNIT_Y,-.002*(_.x-R.x))}},g.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},g.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},g.ScreenSpaceEventType.RIGHT_UP))}function M(b,g,S){const _=T(b,g,S);if(!_){m.value=Ut;return}const R=S.Cartographic.fromCartesian(_);if(!R||!Number.isFinite(R.longitude)||!Number.isFinite(R.latitude)){m.value=Ut;return}const a=S.Math.toDegrees(R.longitude).toFixed(6),c=S.Math.toDegrees(R.latitude).toFixed(6),u=(Number.isFinite(R.height)?R.height:0).toFixed(2);m.value=`经度: ${a}, 纬度: ${c}, 海拔: ${u}米`,typeof n=="function"&&n({lng:Number(a),lat:Number(c),height:Number(u)})}function T(b,g,S){if(!b)return null;const _=g.scene,R=E(b,_,S);if(R)return R;const a=g.camera.getPickRay(b);if(a){const u=_.globe.pick(a,_);if(P(u))return u}const c=g.camera.pickEllipsoid(b,_.globe.ellipsoid);return P(c)?c:null}function E(b,g,S){if(!g.pickPositionSupported||typeof g.pickPosition!="function")return null;const _=typeof g.pick=="function"?g.pick(b):null;if(!S.defined(_))return null;const R=g.pickPosition(b);return P(R)?R:null}function P(b){return!!b&&Number.isFinite(b.x)&&Number.isFinite(b.y)&&Number.isFinite(b.z)}function N(){s&&l&&(l.removeEventListener("mouseleave",s),s=null),l=null,r&&(r.destroy(),r=null)}return{coordinateDisplay:m,setupInteractions:y,cleanupInteractions:N}}function vn(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function _o(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function dt(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function gt(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function gn(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:r,Resource:l,HeightmapTerrainData:s,Rectangle:m,TileAvailability:y,CustomHeightmapTerrainProvider:M}=e;function T(b,g,S,_,R,a){const c=b.tileXYToRectangle(S,_,R);return t(m.intersection(c,g,a))}function E(b){const g=[[[0,0,1,0]]],S=new y(b.tilingScheme,19);for(let _=0;_<g.length;_++){const R=g[_];for(let a=0;a<R.length;a++){const c=R[a];S.addAvailableTileRange(_,c[0],c[1],c[2],c[3])}}return S}function P(b,g,S,_,R){const a=new s({buffer:b._transformBuffer(g),width:b._width,height:b._height,childTileMask:b._getChildTileMask(_,R,S),structure:b._terrainDataStructure});return a._skirtHeight=6e3,b.availability.addAvailableTileRange(S,_,R,_,R),a}class N extends M{constructor(g={}){if(super({...g,ellipsoid:r.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(g.url))throw new n("options.url is required.");this._dataType=g.dataType??"int16",this._url=g.url,this._subdomains=g.subdomains,this._token=g.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=E(this)}get availability(){return this._availability}requestTileGeometry(g,S,_,R){if(_>=this._bottomLevel)return Promise.reject(new Error(`Level ${_} is outside supported range.`));if(_<this._topLevel)return Promise.resolve(new s({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(g,S,_),structure:this._terrainDataStructure}));let a=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const u=this._subdomains[(g+S)%this._subdomains.length];a=a.replace("{s}",u)}a=a.replace("{token}",this._token).replace("{x}",g).replace("{y}",S).replace("{z}",_+1);const c=l.fetchArrayBuffer({url:a,request:R});if(c)return c.then(u=>u.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):ir.inflate(u)).then(u=>P(this,u,_,g,S))}getTileDataAvailable(g,S,_){return _<this._bottomLevel}_transformBuffer(g){let S=2;this._dataType==="float"&&(S=4);const _=g;if(_.length!==22500*S)return null;const R=new ArrayBuffer(S),a=new DataView(R),c=this._width,u=this._height,v=new Uint8Array(c*u*4);for(let o=0;o<u;o++)for(let h=0;h<c;h++){const w=Math.floor(149*o/(u-1)),F=Math.floor(149*h/(c-1)),A=S*(150*w+F);let O;S===4?(a.setInt8(0,_[A]),a.setInt8(1,_[A+1]),a.setInt8(2,_[A+2]),a.setInt8(3,_[A+3]),O=a.getFloat32(0,!0)):O=_[A]+256*_[A+1],(O>1e4||O<-2e3)&&(O=0);const B=(O+1e3)/.001,I=4*(o*c+h);v[I]=B/65536,v[I+1]=(B-256*v[I]*256)/256,v[I+2]=B-256*v[I]*256-256*v[I+1],v[I+3]=255}return v}_getVHeightBuffer(){let g=this._vHeightBuffer;if(!t(g)){g=new Uint8ClampedArray(this._width*this._height*4);for(let S=0;S<this._width*this._height*4;)g[S++]=15,g[S++]=66,g[S++]=64,g[S++]=255;this._vHeightBuffer=g}return g}_getChildTileMask(g,S,_){const R=new m,a=this._tilingScheme,c=this._rectangles,u=a.tileXYToRectangle(g,S,_);let v=0;for(let o=0;o<c.length&&v!==15;o++){const h=c[o];if(h.maxLevel<=_)continue;const w=h.rectangle,F=m.intersection(w,u,R);t(F)&&(T(a,w,2*g,2*S,_+1,R)&&(v|=4),T(a,w,2*g+1,2*S,_+1,R)&&(v|=8),T(a,w,2*g,2*S+1,_+1,R)&&(v|=1),T(a,w,2*g+1,2*S+1,_+1,R)&&(v|=2))}return v}}return N}function xo({getViewer:e,getCesium:t,activeBasemap:n,applyBasemap:r,resolvePresetLayerIds:l,message:s,validationTimeoutMs:m=5e3,circuitBreakThreshold:y=3}){const M=new Map,T=new Set,E={value:!1};let P=null,N=[],b=[];function g(v,o={}){return v?T.has(v)&&!o.forceReload?(E.value=!0,!1):r(v,o)?(S(v),!0):(_(v),!1):!1}function S(v){var B,I;a();const o=e==null?void 0:e();if(!(o!=null&&o.imageryLayers))return;const h=l(v),w=[];for(let Z=0;Z<o.imageryLayers.length;Z++){const G=o.imageryLayers.get(Z);(B=G==null?void 0:G.imageryProvider)!=null&&B._descriptorId&&h.includes(G.imageryProvider._descriptorId)&&w.push(G)}if(!w.length)return;N=w;let F=!1;const A=()=>{F=!0,a(),M.delete(v),T.has(v)&&(T.delete(v),E.value=T.size>0)},O=Z=>{F||(_(v),a())};for(const Z of N){const G=Z.imageryProvider;if(G!=null&&G.errorEvent&&(G.errorEvent.addEventListener(O),b.push(()=>G.errorEvent.removeEventListener(O))),G!=null&&G.ready){A();return}(I=G==null?void 0:G.readyPromise)!=null&&I.then&&G.readyPromise.then(A).catch(O)}P=setTimeout(()=>{F||_(v)},m)}function _(v){const o=(M.get(v)||0)+1;M.set(v,o),o>=y&&(T.add(v),E.value=!0,R(v))}function R(v){var h,w,F,A,O;const o="custom_China_Blender_preset_2";if(v===o){const B="imagery_tianditu_preset";T.has(B)?(w=s==null?void 0:s.error)==null||w.call(s,"所有底图均加载失败，请检查网络",{closable:!0}):((h=s==null?void 0:s.warning)==null||h.call(s,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=B);return}if(!T.has(o))(F=s==null?void 0:s.warning)==null||F.call(s,"底图加载失败，已降级到默认底图",{closable:!0}),n.value=o;else{const B="imagery_tianditu_preset";T.has(B)?(O=s==null?void 0:s.error)==null||O.call(s,"所有底图均加载失败，请检查网络",{closable:!0}):((A=s==null?void 0:s.warning)==null||A.call(s,"底图加载失败，已降级到天地图影像",{closable:!0}),n.value=B)}}function a(){P&&(clearTimeout(P),P=null);for(const v of b)try{v()}catch{}b=[],N=[]}function c(){M.clear(),T.clear(),E.value=!1,a()}function u(){a(),M.clear(),T.clear(),E.value=!1}return{switchBasemap:g,resetCircuitBreaker:c,isCircuitOpen:E,cleanup:u}}const pt=["0","1","2","3","4","5","6","7"],vt="https://t{s}.tianditu.gov.cn/",So="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",wo=96188,yt="custom-xyz",yn="webgis_custom_basemap_url",To="cesium_tdt_label_layer_visible",bn="cesium_tdt_boundary_layer_visible",_n="cesium_tdt_text_label_layer_visible",xn="cesium_osm_buildings_visible",Sn="cesium_google_photorealistic_3d_tiles_visible";function Mo(){return or.map(e=>({...e,description:Lo(e.value),source:"preset"}))}function Lo(e){const t=bt(e);if(!t.length)return"复合底图";const n=t.map(r=>{const l=Vt(r);return l?l.name:r});return n.slice(0,3).join(" + ")+(n.length>3?" ...":"")}const wn=Mo(),Tn=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function Fo({getViewer:e,getCesium:t,message:n,backendBaseUrl:r,tiandituToken:l,cesiumIonToken:s}){let m=null,y=null,M=null,T=null,E=0,P=null,N=null,b=0,g=0,S=[];const _=()=>Mn(l),R=()=>Mn(s),a=[],c=K([]),u=new Map,v=new Map,o=new Map,h=new Map,w="cesium_custom_xyz_basemap_url",F=K(un),A=K("tianditu"),O=K(vn(yn,"")||vn(w,"")),B=dt(To,!1),I=K(dt(bn,B??!1)),Z=K(dt(_n,B??!1)),G=K(dt(xn,!1)),ne=K(dt(Sn,!1)),le=we(()=>[...wn.map(i=>i.value!=="custom"?i:{...i,description:O.value?O.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!O.value}),...c.value]),re=xo({getViewer:e,getCesium:t,activeBasemap:F,applyBasemap:ce,resolvePresetLayerIds:bt,message:n}),me=we(()=>re.isCircuitOpen.value),Fe=we(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:I.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:Z.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:G.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:ne.value}]);Le(F,i=>{!(e!=null&&e())||!(t!=null&&t())||ce(i)}),Le(O,i=>{_o(yn,i)}),Le(A,async i=>{!(e!=null&&e())||!(t!=null&&t())||await ve(i)}),Le(I,i=>{gt(bn,i),L()}),Le(Z,i=>{gt(_n,i),L()}),Le(G,i=>{gt(xn,i),ue()}),Le(ne,i=>{gt(Sn,i),ye()});function Ee(){const i=t==null?void 0:t();if(!i)return[];u.clear(),v.clear();const x=wn.map($=>{const ie=new i.ProviderViewModel({name:$.label,tooltip:Eo($),category:"项目底图",iconUrl:Cn(Do($.value),Ro($.value,$.label)),creationFunction:()=>z($.value)});return u.set($.value,ie),v.set(ie,$.value),ie}),H=U();return c.value=H.map(($,ie)=>{const fe=String(($==null?void 0:$.name)||`官方底图 ${ie+1}`).trim(),Me=No(fe,ie);return u.set(Me,$),v.set($,Me),{value:Me,label:`官方 · ${fe}`,description:String(($==null?void 0:$.tooltip)||fe),source:"official"}}),[...x,...H]}function qe(){const i=t==null?void 0:t();return i?(o.clear(),h.clear(),Tn.map(x=>{const H=new i.ProviderViewModel({name:x.label,tooltip:x.description||x.label,category:"项目地形",iconUrl:Cn(Co(x.value),Po(x.value)),creationFunction:()=>De(x.value)});return o.set(x.value,H),h.set(H,x.value),H})):[]}function Ye(i=[]){return u.get(F.value)||i[0]}function Be(i=[]){return o.get(A.value)||i[0]}function U(){const i=t==null?void 0:t();if(typeof(i==null?void 0:i.createDefaultImageryProviderViewModels)!="function")return[];try{return i.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function z(i){return bt(i).length>0?D(i):i==="google"?je():i===yt?V():pe()}function D(i){const x=t==null?void 0:t();if(!x)return[];const H=bt(i);if(!H.length)return pe();const $=_(),ie=O.value;return Sr(x,H,{tiandituTk:$,customUrl:ie})}function pe(){const i=t==null?void 0:t();return[new i.UrlTemplateImageryProvider({url:`${vt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${_()}`,subdomains:pt,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:18})]}function je(){const i=t==null?void 0:t();return[new i.UrlTemplateImageryProvider({url:`${r}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:20})]}function V(){const i=t==null?void 0:t(),x=Fn(O.value);return x.valid?[new i.UrlTemplateImageryProvider({url:x.url,subdomains:x.subdomains,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(x.message,{closable:!0}),pe())}function xe(){const i=t==null?void 0:t();return new i.UrlTemplateImageryProvider({url:`${vt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${_()}`,subdomains:pt,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:10})}function Ke(){const i=t==null?void 0:t();return new i.UrlTemplateImageryProvider({url:`${vt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${_()}`,subdomains:pt,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:18})}function Ne(){var Re,ze,nt,ft,mt;Oe();const i=t==null?void 0:t(),x=(ze=(Re=e==null?void 0:e())==null?void 0:Re.baseLayerPicker)==null?void 0:ze.viewModel;if(!x||!((nt=i==null?void 0:i.knockout)!=null&&nt.getObservable))return;const H=i.knockout.getObservable(x,"selectedImagery"),$=i.knockout.getObservable(x,"selectedTerrain"),ie=[],fe=(ft=H==null?void 0:H.subscribe)==null?void 0:ft.call(H,lt=>{const We=v.get(lt);We&&(F.value!==We&&(F.value=We),He())}),Me=(mt=$==null?void 0:$.subscribe)==null?void 0:mt.call($,lt=>{const We=h.get(lt);We&&(A.value!==We&&(A.value=We),Te(We))});fe&&ie.push(fe),Me&&ie.push(Me),S=ie}function Oe(){S.forEach(i=>{var x;return(x=i==null?void 0:i.dispose)==null?void 0:x.call(i)}),S=[]}function Ae(){return L(),ue(),ye(),!0}function Ue(){const i=e==null?void 0:e();if(i!=null&&i.imageryLayers)for(;a.length;){const x=a.pop();try{i.imageryLayers.remove(x,!0)}catch{}}}function He(){var i,x,H;L(),ue(),ye(),(H=(x=(i=e==null?void 0:e())==null?void 0:i.scene)==null?void 0:x.requestRender)==null||H.call(x)}function L(){var x,H;const i=e==null?void 0:e();!i||!(t!=null&&t())||(I.value?C():Y(),Z.value?j():ee(),(H=(x=i.scene).requestRender)==null||H.call(x))}function C(){var x,H,$,ie;const i=e==null?void 0:e();if(!(i!=null&&i.imageryLayers)||m)return m&&((H=(x=i==null?void 0:i.imageryLayers)==null?void 0:x.raiseToTop)==null||H.call(x,m)),m;try{return m=i.imageryLayers.addImageryProvider(xe()),(ie=($=i.imageryLayers).raiseToTop)==null||ie.call($,m),m}catch(fe){return n.error("天地图国界线图层加载失败",fe),null}}function j(){var x,H,$,ie;const i=e==null?void 0:e();if(!(i!=null&&i.imageryLayers)||y)return y&&((H=(x=i==null?void 0:i.imageryLayers)==null?void 0:x.raiseToTop)==null||H.call(x,y)),y;try{return y=i.imageryLayers.addImageryProvider(Ke()),(ie=($=i.imageryLayers).raiseToTop)==null||ie.call($,y),y}catch(fe){return n.error("天地图文字标注图层加载失败",fe),null}}function Y(){const i=e==null?void 0:e();if(!(!m||!(i!=null&&i.imageryLayers))){try{i.imageryLayers.remove(m,!0)}catch{}m=null}}function ee(){const i=e==null?void 0:e();if(!(!y||!(i!=null&&i.imageryLayers))){try{i.imageryLayers.remove(y,!0)}catch{}y=null}}async function ue(){var x,H,$;const i=e==null?void 0:e();!((x=i==null?void 0:i.scene)!=null&&x.primitives)||!(t!=null&&t())||(G.value?await k():X(),($=(H=i.scene).requestRender)==null||$.call(H))}async function ye(){var x,H,$;const i=e==null?void 0:e();!((x=i==null?void 0:i.scene)!=null&&x.primitives)||!(t!=null&&t())||(ne.value?await f():p(),($=(H=i.scene).requestRender)==null||$.call(H))}async function f(){var $,ie,fe;const i=e==null?void 0:e(),x=t==null?void 0:t();if(!(($=i==null?void 0:i.scene)!=null&&$.primitives))return null;if(P)return i.scene.globe.show=!1,P;if(N)return N;if(typeof(x==null?void 0:x.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),ne.value=!1,null;const H=++b;Pt(x,R()),N=x.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const Me=await N;return H!==b||!ne.value?(Ln(Me),null):(P=i.scene.primitives.add(Me),i.scene.globe.show=!1,i.scene.skyAtmosphere.show=!0,(fe=(ie=i.scene).requestRender)==null||fe.call(ie),P)}catch(Me){return H!==b||(ne.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",Me)),null}finally{H===b&&(N=null)}}function p(){var x,H,$;const i=e==null?void 0:e();if(b+=1,N=null,!P||!((x=i==null?void 0:i.scene)!=null&&x.primitives)){(H=i==null?void 0:i.scene)!=null&&H.globe&&(i.scene.globe.show=!0);return}try{i.scene.primitives.remove(P)}catch{}P=null,($=i==null?void 0:i.scene)!=null&&$.globe&&(i.scene.globe.show=!0)}async function k(){var $,ie,fe,Me;const i=e==null?void 0:e(),x=t==null?void 0:t();if(!(($=i==null?void 0:i.scene)!=null&&$.primitives)||M)return M;if(T)return T;if(typeof((ie=x==null?void 0:x.Cesium3DTileset)==null?void 0:ie.fromIonAssetId)!="function"&&typeof(x==null?void 0:x.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),G.value=!1,null;const H=++E;Pt(x,R()),await J(),T=Ao(x,{maximumScreenSpaceError:8});try{const Re=await T;return H!==E||!G.value?(Ln(Re),null):(M=i.scene.primitives.add(Re),(Me=(fe=i.scene).requestRender)==null||Me.call(fe),M)}catch(Re){return H!==E||(G.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",Re)),null}finally{H===E&&(T=null)}}function X(){var x,H,$;const i=e==null?void 0:e();if(E+=1,T=null,!(!M||!((x=i==null?void 0:i.scene)!=null&&x.primitives))){try{i.scene.primitives.remove(M)}catch{}M=null,($=(H=i.scene).requestRender)==null||$.call(H)}}async function J(){if(A.value==="cesiumWorld")return!0;A.value="cesiumWorld";const i=await ve("cesiumWorld");return i||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),i}function ce(i,x={}){var fe,Me,Re;const H=e==null?void 0:e();if(!H||!(t!=null&&t()))return!1;gr(),Ue();const $=(fe=H.baseLayerPicker)==null?void 0:fe.viewModel,ie=u.get(i);if($&&ie){if(x.forceReload&&$.selectedImagery===ie){const ze=u.get(un)||u.get("tianditu");ze&&ze!==ie&&($.selectedImagery=ze)}return $.selectedImagery!==ie&&($.selectedImagery=ie),He(),!0}try{return z(i).forEach(nt=>{nt&&a.push(H.imageryLayers.addImageryProvider(nt))}),L(),(Re=(Me=H.scene).requestRender)==null||Re.call(Me),!0}catch(ze){return n.error("地图源切换失败",ze),!1}}function ge(){return ve(A.value)}async function ve(i){var Re,ze,nt,ft,mt,lt,We,Jt,Qt,en,tn;const x=e==null?void 0:e(),H=t==null?void 0:t();if(!x||!H)return!1;const $=(Re=x.baseLayerPicker)==null?void 0:Re.viewModel,ie=o.get(i);if($&&ie)return $.selectedTerrain!==ie&&($.selectedTerrain=ie),Te(i),(nt=(ze=x.scene).requestRender)==null||nt.call(ze),!0;const fe=++g;if(i==="ellipsoid")return x.terrainProvider=new H.EllipsoidTerrainProvider,Te(i),(mt=(ft=x.scene).requestRender)==null||mt.call(ft),!0;if(i==="cesiumWorld")try{const Je=await Xe();return fe!==g?!1:(x.terrainProvider=Je,Te(i),(We=(lt=x.scene).requestRender)==null||We.call(lt),!0)}catch(Je){return fe!==g||(x.terrainProvider=new H.EllipsoidTerrainProvider,Te("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",Je)),!1}if(i==="arcgisWorld")try{const Je=await tt();return fe!==g?!1:(x.terrainProvider=Je,Te(i),(Qt=(Jt=x.scene).requestRender)==null||Qt.call(Jt),!0)}catch(Je){return fe!==g||(x.terrainProvider=new H.EllipsoidTerrainProvider,Te("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",Je)),!1}const Me=gn(H);try{return x.terrainProvider=new Me({url:`${vt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:pt,token:_()}),Te(i),(tn=(en=x.scene).requestRender)==null||tn.call(en),!0}catch(Je){return x.terrainProvider=new H.EllipsoidTerrainProvider,Te("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",Je),!1}}function Te(i){var H;const x=e==null?void 0:e();(H=x==null?void 0:x.scene)!=null&&H.globe&&(x.scene.globe.depthTestAgainstTerrain=i!=="ellipsoid")}function De(i){const x=t==null?void 0:t();if(i==="ellipsoid")return new x.EllipsoidTerrainProvider;if(i==="cesiumWorld")return Xe().catch($=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",$),Ze(i,"ellipsoid"),new x.EllipsoidTerrainProvider));if(i==="arcgisWorld")return tt().catch($=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",$),Ze(i,"ellipsoid"),new x.EllipsoidTerrainProvider));const H=gn(x);try{return new H({url:`${vt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:pt,token:_()})}catch($){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",$),new x.EllipsoidTerrainProvider}}async function Xe(){var H,$;const i=t==null?void 0:t();Pt(i,R());const x={requestWaterMask:!1,requestVertexNormals:!0};if(typeof i.createWorldTerrainAsync=="function")return i.createWorldTerrainAsync(x);if(typeof i.createWorldTerrain=="function")return i.createWorldTerrain(x);if(typeof((H=i.CesiumTerrainProvider)==null?void 0:H.fromIonAssetId)=="function")return i.CesiumTerrainProvider.fromIonAssetId(1,x);if(($=i.IonResource)!=null&&$.fromAssetId&&i.CesiumTerrainProvider){const ie=await i.IonResource.fromAssetId(1);return new i.CesiumTerrainProvider({url:ie,...x})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function tt(){var x;const i=t==null?void 0:t();if(typeof((x=i==null?void 0:i.ArcGISTiledElevationTerrainProvider)==null?void 0:x.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return i.ArcGISTiledElevationTerrainProvider.fromUrl(So)}function Ze(i,x){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{A.value===i&&(A.value=x)},0)}function Q({overlayId:i,value:x}){if(i==="tdt-boundaries"){I.value=!!x;return}if(i==="tdt-text-labels"){Z.value=!!x;return}if(i==="cesium-osm-buildings"){G.value=!!x;return}i==="google-photorealistic-3d-tiles"&&(ne.value=!!x)}function te({url:i}){const x=String(i||"").trim(),H=Fn(x);if(!H.valid){n.warning(H.message,{closable:!0});return}if(O.value=x,F.value===yt){ce(yt,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}F.value=yt,n.success("已切换到自定义 XYZ 图源")}function be(){Ue(),Y(),ee(),X(),p(),Oe()}return{activeBasemap:F,activeTerrain:A,customXyzBasemapUrl:O,basemapOptions:le,terrainOptions:Tn,overlayOptions:Fe,createImageryProviderViewModels:Ee,createTerrainProviderViewModels:qe,getSelectedImageryProviderViewModel:Ye,getSelectedTerrainProviderViewModel:Be,bindLayerPickerStateSync:Ne,addBaseImageryLayers:Ae,initCustomTerrain:ge,applyBasemap:ce,applyTerrain:ve,handleOverlayToggle:Q,handleCustomBasemapSubmit:te,cleanupLayers:be,basemapSwitcher:re,basemapCircuitOpen:me,resetCircuitBreaker:re.resetCircuitBreaker}}function Co(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function Po(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Mn(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Ln(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function Ao(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const r=await e.Cesium3DTileset.fromIonAssetId(wo,t);return!r.style&&typeof e.Cesium3DTileStyle=="function"&&(r.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),r}return e.createOsmBuildingsAsync(t)}function Eo(e){return e.value===yt?`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`:e.description||e.label}function Do(e){const t=bt(e);if(!t.length)return"#37d67a";const n=Vt(t[0]);if(!n)return"#37d67a";const r=n.category;return r==="imagery"?"#5ea1ff":r==="vector"?"#37d67a":r==="terrain"?"#d0a449":r==="label"?"#a78bfa":r==="theme"?"#f59e0b":r==="custom"?"#f472b6":"#37d67a"}function Ro(e,t){return String(t||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function Fn(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const r=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let l=[];return r?(l=ko(r[1],r[2]),n=n.replace(r[0],"{s}")):/\{s\}/i.test(n)&&(l=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:l}:Io(n)?{valid:!0,message:"",url:n,subdomains:l}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:l}}function ko(e,t){const n=String(e||"").charCodeAt(0),r=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(r))return[];const l=n<=r?1:-1,s=[];for(let m=n;l>0?m<=r:m>=r;m+=l)s.push(String.fromCharCode(m));return s}function Io(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function No(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function Cn(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),r=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(r)}`}function Oo({getViewer:e,getCesium:t,message:n}){function r(m){const y=e==null?void 0:e(),M=t==null?void 0:t();if(!y||!M)return;const T=typeof m=="number"?m:2;y.camera.flyTo({destination:M.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-M.Math.PI_OVER_TWO,roll:0},duration:T})}function l(){const m=e==null?void 0:e(),y=t==null?void 0:t();!m||!y||m.camera.flyTo({destination:y.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:y.Math.toRadians(0),pitch:y.Math.toRadians(-25),roll:0},duration:3})}async function s(){const m=e==null?void 0:e(),y=t==null?void 0:t();if(!(!m||!y))try{const M=await y.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");m.scene.primitives.add(M),m.flyTo(M,{duration:3,offset:new y.HeadingPitchRange(y.Math.toRadians(0),y.Math.toRadians(-25),M.boundingSphere.radius*2.5)})}catch(M){n.error(`加载模型失败: ${M}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:r,flyToEverest:l,loadCustomTileset:s}}const zo="tileset.json";let Lt=null;async function Pn(){if(Lt)return Lt;const[{decompressBuffer:e},{parseShpPartsToGeoJSON:t}]=await Promise.all([$t(()=>import("./decompressFile-DiMYlfaO.js").then(n=>n.f),__vite__mapDeps([4,5]),import.meta.url),$t(()=>import("./shpParser-B7siVeql.js").then(n=>n.s),__vite__mapDeps([6,5,7,2,3,8,9,10,11,12,13,14,15]),import.meta.url)]);return Lt={decompressBuffer:e,parseShpPartsToGeoJSON:t},Lt}function Ht(e){const t=e.lastIndexOf(".");return t===-1?"":e.slice(t+1).toLowerCase()}function at(e,t,n,r){if(!(!e||!t||!n))try{r==="3dtiles"&&n.boundingSphere?e.flyTo(n,{duration:2,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-30),n.boundingSphere.radius*2)}):n.entities&&n.entities.values.length>0&&e.flyTo(n,{duration:2})}catch{}}function ct(e){return URL.createObjectURL(e)}function $e(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function Bo({getViewer:e,getCesium:t,message:n}){const r=K([]),l=K(null);let s=0;async function m(o){const h=t(),w=e();if(!h||!w)throw new Error("Cesium 未初始化");const F=ct(o);try{const A=await h.GeoJsonDataSource.load(F,{stroke:h.Color.fromCssColorString("#3ddc84"),fill:h.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:h.Color.fromCssColorString("#3ddc84"),markerSize:24}),O=`geojson_${++s}`;A.name=o.name,await w.dataSources.add(A),at(w,h,A,"geojson");const B={id:O,name:o.name,type:"geojson",entity:A,blobUrl:F};return r.value=[...r.value,B],n.success(`GeoJSON "${o.name}" 加载成功`),B}catch(A){throw $e(F),A}}async function y(o){const h=t(),w=e();if(!h||!w)throw new Error("Cesium 未初始化");const F=ct(o);try{const A=await h.KmlDataSource.load(F,{camera:w.scene.camera,canvas:w.scene.canvas}),O=`kml_${++s}`;A.name=o.name,await w.dataSources.add(A),at(w,h,A,"kml");const B={id:O,name:o.name,type:"kml",entity:A,blobUrl:F};return r.value=[...r.value,B],n.success(`KML "${o.name}" 加载成功`),B}catch(A){throw $e(F),A}}async function M(o){const h=t(),w=e();if(!h||!w)throw new Error("Cesium 未初始化");const F=ct(o);try{const A=await h.KmlDataSource.load(F,{camera:w.scene.camera,canvas:w.scene.canvas}),O=`kmz_${++s}`;A.name=o.name,await w.dataSources.add(A),at(w,h,A,"kmz");const B={id:O,name:o.name,type:"kmz",entity:A,blobUrl:F};return r.value=[...r.value,B],n.success(`KMZ "${o.name}" 加载成功`),B}catch{return $e(F),await T(o)}}async function T(o){const h=t(),w=e(),F=await o.arrayBuffer(),{decompressBuffer:A}=await Pn(),B=(await A(F,o.name)).find(ne=>{var le;return ne.ext==="kml"||((le=ne.name)==null?void 0:le.toLowerCase().endsWith(".kml"))});if(!B)throw new Error("KMZ 压缩包中未找到 KML 文件");let I;typeof B.content=="string"?I=B.content:B.content instanceof ArrayBuffer||B.content instanceof Uint8Array?I=pr(B.content):I=String(B.content||"");const Z=new Blob([I],{type:"application/vnd.google-earth.kml+xml"}),G=URL.createObjectURL(Z);try{const ne=await h.KmlDataSource.load(G,{camera:w.scene.camera,canvas:w.scene.canvas}),le=`kmz_${++s}`;ne.name=o.name,await w.dataSources.add(ne),at(w,h,ne,"kmz");const re={id:le,name:o.name,type:"kmz",entity:ne};return r.value=[...r.value,re],n.success(`KMZ "${o.name}" 加载成功（手动解压）`),re}finally{URL.revokeObjectURL(G)}}async function E(o,h=[]){const w=t(),F=e();if(!w||!F)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:A}=await Pn(),O={shp:await o.arrayBuffer()};for(const re of h){const me=Ht(re.name);me==="dbf"&&(O.dbf=await re.arrayBuffer()),me==="shx"&&(O.shx=await re.arrayBuffer()),me==="prj"&&(O.prj=await re.arrayBuffer()),me==="cpg"&&(O.cpg=await re.arrayBuffer())}const B=await A(O),I=Array.isArray(B)?B:[B],Z=I.reduce((re,me)=>{var Fe;return re+(((Fe=me==null?void 0:me.features)==null?void 0:Fe.length)||0)},0),G=I.length===1?I[0]:{type:"FeatureCollection",features:I.flatMap(re=>(re==null?void 0:re.features)||[])},ne=new Blob([JSON.stringify(G)],{type:"application/geo+json"}),le=URL.createObjectURL(ne);try{const re=await w.GeoJsonDataSource.load(le,{stroke:w.Color.fromCssColorString("#ffcc00"),fill:w.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:w.Color.fromCssColorString("#ffcc00"),markerSize:20}),me=`shp_${++s}`;re.name=o.name,await F.dataSources.add(re),at(F,w,re,"shp");const Fe={id:me,name:o.name,type:"shp",entity:re};return r.value=[...r.value,Fe],n.success(`Shapefile "${o.name}" 加载成功 (${Z} 个要素)`),URL.revokeObjectURL(le),Fe}catch(re){throw URL.revokeObjectURL(le),re}}async function P(o){const h=t(),w=e();if(!h||!w)throw new Error("Cesium 未初始化");const F=ct(o);let A=null;try{A=await _(o)}catch{}if(A)try{const O=await a(h,w,F,o.name,A),I={id:`gltf_${++s}`,name:o.name,type:"gltf",entity:O,blobUrl:F};return r.value=[...r.value,I],n.success(`3D 模型 "${o.name}" 加载成功 (${A.lng.toFixed(4)}, ${A.lat.toFixed(4)}, ${A.height.toFixed(1)}m)`),I}catch(O){throw $e(F),O}return l.value&&$e(l.value.blobUrl),l.value={file:o,blobUrl:F,name:o.name},{needsCoordInput:!0,file:o}}async function N(o){const h=t(),w=e();if(!l.value)throw new Error("没有等待确认的模型文件");const{blobUrl:F,name:A}=l.value;try{const O=await a(h,w,F,A,o),I={id:`gltf_${++s}`,name:A,type:"gltf",entity:O,blobUrl:F};r.value=[...r.value,I],n.success(`3D 模型 "${A}" 加载成功 (${o.lng.toFixed(4)}, ${o.lat.toFixed(4)}, ${o.height.toFixed(1)}m)`);const Z=h.Cartesian3.fromDegrees(o.lng,o.lat,o.height+500);return w.camera.flyTo({destination:Z,orientation:{heading:h.Math.toRadians(0),pitch:h.Math.toRadians(-30),roll:0},duration:2}),l.value=null,I}catch(O){throw $e(F),l.value=null,O}}function b(){l.value&&($e(l.value.blobUrl),l.value=null)}async function g(o){const h=t(),w=e();if(!h||!w)throw new Error("Cesium 未初始化");const F=ct(o);try{const A=await h.CzmlDataSource.load(F),O=`czml_${++s}`;A.name=o.name,await w.dataSources.add(A),at(w,h,A,"czml");const B={id:O,name:o.name,type:"czml",entity:A,blobUrl:F};return r.value=[...r.value,B],n.success(`CZML "${o.name}" 加载成功`),B}catch(A){throw $e(F),A}}async function S(o){const h=t(),w=e();if(!h||!w)throw new Error("Cesium 未初始化");const F=ct(o);try{const A=await h.Cesium3DTileset.fromUrl(F),O=`tileset_${++s}`;w.scene.primitives.add(A);const B={id:O,name:o.name,type:"3dtiles",entity:A,blobUrl:F};return r.value=[...r.value,B],at(w,h,A,"3dtiles"),n.success(`3D Tiles "${o.name}" 加载成功`),B}catch(A){throw $e(F),A}}async function _(o){var A,O,B,I,Z;const h=Ht(o.name);let w;if(h==="gltf"){const G=await o.text();w=JSON.parse(G)}else{const G=await o.arrayBuffer();w=R(G)}if(!w)return null;if((A=w.extensionsUsed)!=null&&A.includes("CESIUM_RTC")&&((B=(O=w.extensions)==null?void 0:O.CESIUM_RTC)!=null&&B.center)){const G=w.extensions.CESIUM_RTC.center;if(G.length>=3){const ne=t();if(ne){const le=new ne.Cartesian3(G[0],G[1],G[2]),re=ne.Cartographic.fromCartesian(le);return{lng:ne.Math.toDegrees(re.longitude),lat:ne.Math.toDegrees(re.latitude),height:re.height}}}}const F=(I=w.asset)==null?void 0:I.extras;if(F){const G=F.longitude??F.lng,ne=F.latitude??F.lat,le=F.height??F.altitude??F.alt??0;if(G!=null&&ne!=null)return{lng:Number(G),lat:Number(ne),height:Number(le)}}if(((Z=w.nodes)==null?void 0:Z.length)>0&&w.nodes[0].matrix){const G=w.nodes[0].matrix;if(G.length>=16){const ne=G[12],le=G[13],re=G[14];if(Math.abs(ne)>1e5||Math.abs(le)>1e5){const me=t();if(me)try{const Fe=new me.Cartesian3(ne,le,re),Ee=me.Cartographic.fromCartesian(Fe);return{lng:me.Math.toDegrees(Ee.longitude),lat:me.Math.toDegrees(Ee.latitude),height:Ee.height}}catch{}}}}return null}function R(o){if(o.byteLength<20)return null;const h=new DataView(o);if(h.getUint32(0,!0)!==1179937895)return null;const F=h.getUint32(12,!0);if(h.getUint32(16,!0)!==1313821514)return null;const O=new Uint8Array(o,20,F),B=new TextDecoder().decode(O);try{return JSON.parse(B)}catch{return null}}async function a(o,h,w,F,A){const{lng:O,lat:B,height:I}=A,Z=o.Cartesian3.fromDegrees(O,B,I),G=new o.HeadingPitchRoll(0,0,0),ne=o.Transforms.localFrameToFixedFrameGenerator("north","west"),le=await o.Model.fromGltfAsync({url:w,modelMatrix:o.Transforms.headingPitchRollToFixedFrame(Z,G,o.Ellipsoid.WGS84,ne),scale:1,show:!0});return le.name=F,h.scene.primitives.add(le),le}async function c(o){const h=e(),w=t();if(!h||!w)throw n.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const F=Ht(o.name);try{switch(F){case"geojson":case"json":return o.name.toLowerCase().includes(zo)?await S(o):await m(o);case"kml":return await y(o);case"kmz":return await M(o);case"shp":return await E(o);case"glb":case"gltf":return await P(o);case"czml":return await g(o);default:throw n.error(`不支持的文件格式: .${F}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${F}`)}}catch(A){throw n.error(`加载 "${o.name}" 失败: ${A.message||A}`),A}}function u(o){const h=r.value.find(F=>F.id===o);if(!h)return;const w=e();if(w){try{h.type==="3dtiles"?w.scene.primitives.remove(h.entity):w.dataSources.remove(h.entity,!0)}catch{}h.blobUrl&&$e(h.blobUrl),r.value=r.value.filter(F=>F.id!==o),n.info(`已移除 "${h.name}"`)}}function v(){var w,F,A,O,B;const o=e();if(!o){r.value=[];return}for(const I of r.value){try{I.type==="3dtiles"?o.scene.primitives.remove(I.entity):o.dataSources.remove(I.entity,!0)}catch{}I.blobUrl&&$e(I.blobUrl)}if(Array.isArray((w=o.dataSources)==null?void 0:w.dataSources)){const I=o.dataSources.dataSources.slice();for(const Z of I)if(Z&&!Z.isBaseLayerPickerDataSource)try{o.dataSources.remove(Z,!0)}catch{}}const h=t();if(h&&Array.isArray((A=(F=o.scene)==null?void 0:F.primitives)==null?void 0:A.primitives)){const I=o.scene.primitives.primitives.slice();for(const Z of I)if(!(!Z||!(Z instanceof h.Cesium3DTileset||Z instanceof h.Model||Z.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(Z.name||"")))))try{o.scene.primitives.remove(Z)}catch{}}r.value=[],b();try{(B=(O=o.scene).requestRender)==null||B.call(O)}catch{}n.info("已清除所有导入数据")}return{loadDataFile:c,loadedDataSources:r,removeDataSource:u,clearAllDataSources:v,pendingGltfFile:l,loadGltfWithUserCoords:N,cancelPendingGltf:b}}const Uo="cesium_tool_panel_open";function Ho({fluidPanelRef:e,sceneActions:t={},wind:n={},panelStorageKey:r=Uo}={}){const l=K(dt(r,!0)),s=K({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),m=K({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),y=K({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),M=we(()=>{var b,g,S,_,R,a;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:s.value.atmosphere||s.value.fog?"启用":"关闭",statusTone:s.value.atmosphere||s.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:s.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:s.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:s.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:s.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(b=n.wind2D)!=null&&b.value?"已加载":"未加载",statusTone:(g=n.wind2D)!=null&&g.value?"success":"neutral",actions:[{id:"load",label:(S=n.wind2D)!=null&&S.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((_=n.wind2D)!=null&&_.value)}],controls:Wo((R=n.windParams)==null?void 0:R.value,!!((a=n.wind2D)!=null&&a.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:y.value.isPicking?"等待选点":y.value.hasFluid?"已创建":"未创建",statusTone:y.value.isPicking?"warning":y.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:y.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:y.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!y.value.hasFluid&&!y.value.isPicking}],controls:$o(m.value,y.value)}]});Le(l,b=>{gt(r,b)});function T({moduleId:b,actionId:g}){var _,R;(R=(_={scene:{home:()=>{var a;return(a=t.flyToHome)==null?void 0:a.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},fluid:{pick:()=>{var a,c;return(c=(a=e==null?void 0:e.value)==null?void 0:a.startPickHeightMap)==null?void 0:c.call(a)},clear:()=>{var a,c;return(c=(a=e==null?void 0:e.value)==null?void 0:a.clearFluid)==null?void 0:c.call(a)}}}[b])==null?void 0:_[g])==null||R.call(_)}function E({moduleId:b,controlId:g,value:S}){var _,R;if(b==="effects"&&g in s.value){s.value={...s.value,[g]:!!S};return}if(b==="wind"&&g in(((_=n.windParams)==null?void 0:_.value)||{})){(R=n.setWindParam)==null||R.call(n,g,S);return}b==="fluid"&&g in m.value&&(m.value={...m.value,[g]:g==="waterColor"?S:Number(S)})}function P(b){const g=ht(b==null?void 0:b.waterLevel),S=ht(b==null?void 0:b.waterLevelMin),_=ht(b==null?void 0:b.waterLevelMax);y.value={isPicking:!!(b!=null&&b.isPicking),hasFluid:!!(b!=null&&b.hasFluid),selectedText:(b==null?void 0:b.selectedText)||"",waterLevel:g,waterLevelMin:S,waterLevelMax:_},g!==null&&(m.value={...m.value,waterLevel:g})}function N(){var b;(b=n.clearWind2D)==null||b.call(n)}return{toolPanelOpen:l,advancedEffectControls:s,fluidParams:m,fluidState:y,toolModules:M,handleToolAction:T,handleToolControlChange:E,handleFluidStateChange:P,cleanupTools:N}}function Wo(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function $o(e,t={}){const n=ht(t.waterLevelMin),r=ht(t.waterLevelMax),l=n!==null&&r!==null,s=l?Math.min(n,r):0,m=l?Math.max(n,r):0,y=ht(e.waterLevel),M=l?Go(y??s,s,m):0,T=l?Math.max((m-s)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:s,max:m,step:T,value:M,displayValue:l?`${qo(M)} m`:"先捕捉",disabled:!l,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function ht(e){const t=Number(e);return Number.isFinite(t)?t:null}function Go(e,t,n){return Math.max(t,Math.min(n,e))}function qo(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const{getLayerIdByIndex:jo,getLayerIndexById:An}=lr({urlLayerOptions:cr,getLayerCategoryById:ur,getLayerGroupById:dr}),jt=-90,Zt=1,Bn=5e7;function Xo({getViewer:e,getCesium:t,onCameraViewSync:n,onBasemapRestore:r}={}){const l=qn(),s=jn();let m=null;function y(a){return hr(a,l.query)}function M(){const a=String(y(rn)||"").trim(),c=it(y("lng")),u=it(y("lat")),v=Vo(y("z")),o=fr(a);if(o&&c!==null&&u!==null&&v!==null){const w={lng:c,lat:u,height:v,...o};if(En(w))return w}const h=mr(a);return En(h)?h:c===null||u===null||v===null||c<-180||c>180||u<-90||u>90?null:{lng:c,lat:u,height:v,heading:it(y("heading"))??0,pitch:it(y("pitch"))??jt,roll:it(y("roll"))??0}}function T({duration:a=0}={}){const c=e==null?void 0:e(),u=t==null?void 0:t(),v=M();if(!(c!=null&&c.camera)||!u||!v)return!1;const o=u.Cartesian3.fromDegrees(v.lng,v.lat,v.height),h={heading:Wt(u,v.heading??0),pitch:Wt(u,Yo(v.pitch??jt)),roll:Wt(u,v.roll??0)};return Number(a)>0?(c.camera.flyTo({destination:o,orientation:h,duration:Number(a)}),!0):(c.camera.setView({destination:o,orientation:h}),!0)}function E(a){if(!a)return null;const c=An(a);if(c===null)return null;const u={view:Dt,l:String(c)};return R(u),String(c)}function P(){const a=it(y("l"));if(a===null)return null;const c=jo(a);return c&&(r==null||r(c)),c}function N({initialSync:a=!1,getActivePresetId:c}={}){const u=S();if(!(!(u!=null&&u.moveEnd)||m)&&(m=u.moveEnd.addEventListener(()=>{const v=c==null?void 0:c();g({activePresetId:v})}),a)){const v=c==null?void 0:c();g({activePresetId:v})}}function b(){typeof m=="function"&&m(),m=null}function g({activePresetId:a}={}){const c=t==null?void 0:t(),u=S();if(!c||!(u!=null&&u.position))return;const v=c.Cartographic.fromCartesian(u.position);if(!v)return;const o=c.Math.toDegrees(v.longitude),h=c.Math.toDegrees(v.latitude),w=Number(v.height),F=c.Math.toDegrees(Number(u.heading)||0),A=c.Math.toDegrees(Number(u.pitch)||0),O=c.Math.toDegrees(Number(u.roll)||0);if(!Number.isFinite(o)||!Number.isFinite(h)||!Number.isFinite(w))return;const B=Math.max(Zt,w),I=sr({heading:F,pitch:A,roll:O});if(!I||I==="0")return;const Z={view:Dt,camera:{lng:o,lat:h,height:B,heading:F,pitch:A,roll:O}},G={view:Dt,[rn]:I,lng:Dn(o,6),lat:Dn(h,6),z:Ko(B)},ne=a;if(ne){const le=An(ne);le!==null&&(G.l=String(le))}R(G),n==null||n(Z)}function S(){var c;const a=e==null?void 0:e();return(a==null?void 0:a.camera)||((c=a==null?void 0:a.scene)==null?void 0:c.camera)||null}function _(a,c){const u=Object.keys(a).filter(o=>a[o]!==void 0&&a[o]!==null&&a[o]!==""),v=Object.keys(c).filter(o=>c[o]!==void 0&&c[o]!==null&&c[o]!=="");return u.length!==v.length?!1:v.every(o=>String(a[o]??"")===String(c[o]??""))}function R(a){const c={...dn(l.query),...a};Xn.forEach(v=>{v in a||delete c[v]}),Object.keys(c).forEach(v=>{const o=c[v];o==null||o===""?delete c[v]:c[v]=String(o)});const u=dn(l.query);_(u,c)||s.replace({path:l.path||"/home",query:c}).catch(()=>{})}return{restoreCameraFromUrl:T,restoreBasemapFromUrl:P,syncBasemapToUrl:E,bindCameraViewSync:N,cleanupCameraViewSync:b}}function it(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Vo(e){const t=it(e);return t===null||t<Zt||t>Bn?null:t}function En(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),r=Number(e.height),l=Number(e.heading),s=Number(e.pitch),m=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(r)&&r>=Zt&&r<=Bn&&Number.isFinite(l)&&Number.isFinite(s)&&s>=-90&&s<=90&&Number.isFinite(m)}function Yo(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):jt}function Dn(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function Ko(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function Wt(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const Ce={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Zo=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Jo=new Float32Array([0,0,1,0,1,1,0,1]),Qo=new Uint16Array([0,1,2,0,2,3]);function rt(e,t,n){return Math.max(t,Math.min(n,e))}function de(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function es(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),r=Math.min(2048,n),l=Math.max(1,Math.floor(e)),s=Math.sqrt(l),m=Math.log2(s),y=Number.isFinite(m)?Math.round(m):4;let M=Math.pow(2,y);return M=rt(M,16,r),M}function ts(e){const t=e*e,n=new Float32Array(t*4);for(let r=0;r<t;r+=1){const l=r*4;n[l]=Math.random(),n[l+1]=Math.random(),n[l+2]=Math.random(),n[l+3]=Math.random()}return n}function ns(e){return new Float32Array(e*e*4)}function rs(e,t,n,r,l){const s=t.createTexture();if(!s)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,s),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,r,0,t.RGBA,t.FLOAT,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let m=!1;return{_context:e,_texture:s,_target:t.TEXTURE_2D,_width:n,_height:r,destroy(){m||(t.deleteTexture(s),m=!0)}}}class as{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const r={...Ce,...n};this.speedFactor=de(r.speedFactor,Ce.speedFactor),this.cullSpeedMin=de(r.cullSpeedMin,Ce.cullSpeedMin),this.cullSpeedMax=de(r.cullSpeedMax,Ce.cullSpeedMax),this.windSpeedMin=de(r.windSpeedMin,Ce.windSpeedMin),this.windSpeedMax=de(r.windSpeedMax,Ce.windSpeedMax),this.arrowLength=de(r.arrowLength,Ce.arrowLength),this.trailLength=de(r.trailLength,Ce.trailLength),this.decaySpeed=de(r.decaySpeed,Ce.decaySpeed),this.alphaFactor=de(r.alphaFactor,Ce.alphaFactor),this.maxWindSpeed=de(r.maxWindSpeed,Ce.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=de(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=de(t.longitude,NaN),r=de(t.latitude,NaN),l=Array.isArray(t.altitude)?t.altitude:[],s=Array.isArray(t.sizeMesh)?t.sizeMesh:[],m=Array.isArray(t.count)?t.count:[],y=Array.isArray(t.hspeed)?t.hspeed:[],M=Array.isArray(t.hdir)?t.hdir:[],T=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(r))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const E=l.length;if(E<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(s.length!==E||m.length!==E)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const P=m.map(h=>Math.max(1,Math.floor(de(h,1)))),N=s.map(h=>Math.max(1,de(h,1))),b=l.map(h=>de(h,0)),g=P.reduce((h,w)=>h+w*w,0);if(y.length<g||M.length<g||T.length<g)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=E,this.visibleLayerMin=0,this.visibleLayerMax=E-1,this._altitudes=b.slice(),this._maxNx=Math.max(...P),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*E;const S=new Float32Array(this._atlasWidth*this._atlasHeight*4);let _=0;for(let h=0;h<E;h+=1){const w=P[h],F=w;for(let A=0;A<F;A+=1)for(let O=0;O<w;O+=1){const B=_+A*w+O,I=((h*this._maxNy+A)*this._atlasWidth+O)*4,Z=Number(y[B]),G=Number(M[B]),ne=Number(T[B]);if(!(Number.isFinite(Z)&&Number.isFinite(G))){S[I]=0,S[I+1]=0,S[I+2]=0,S[I+3]=0;continue}const re=G*Math.PI/180;S[I]=Z*Math.sin(re),S[I+1]=Z*Math.cos(re),S[I+2]=Number.isFinite(ne)?ne:0,S[I+3]=1}_+=w*F}this._createOrReplaceWindAtlasTexture(S);const R=Math.max(...N),a=this._maxNx*R,c=a/2/111320,u=r*Math.PI/180,v=Math.max(1e-6,Math.abs(Math.cos(u))),o=a/2/(111320*v);this._bounds={minLon:n-o,maxLon:n+o,minLat:r-c,maxLat:r+c,minHeight:Math.min(...b),maxHeight:Math.max(...b)},this._dataPointCount=g,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(de(t,1))),r=es(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&r===this._particleTextureSize||(this._particleTextureSize=r,this._particleCount=r*r,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=rt(de(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const r=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(r)}setBounds(t,n,r,l){const s=de(t,NaN),m=de(n,NaN),y=de(r,NaN),M=de(l,NaN);if(!Number.isFinite(s)||!Number.isFinite(m)||!Number.isFinite(y)||!Number.isFinite(M))return;const T=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};T.minLon=Math.min(s,m),T.maxLon=Math.max(s,m),T.minLat=Math.min(y,M),T.maxLat=Math.max(y,M),this._bounds=T,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const l=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[l],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=l,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=rs(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,r=ts(n),l=ns(n);for(let s=0;s<2;s+=1){this._particlePositionTextures[s]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:r},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[s]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:l},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[s]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[s],this._velocityTextures[s]],destroyAttachments:!1});const m=this._framebuffers[s]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,m),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:Zo,usage:t.BufferUsage.STATIC_DRAW}),r=t.Buffer.createVertexBuffer({context:this._context,typedArray:Jo,usage:t.BufferUsage.STATIC_DRAW}),l=t.Buffer.createIndexBuffer({context:this._context,typedArray:Qo,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:r,componentsPerAttribute:2}],indexBuffer:l})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let r=0;r<n.length;r+=1)n[r]=r;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._updateProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:r,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:r,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=rt(Math.floor(de(this.visibleLayerMin,0)),0,this._layerCount-1),n=rt(Math.floor(de(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const r=Math.max(1e-4,de(this.maxWindSpeed,Ce.maxWindSpeed)),l=rt(de(t,0)/r,0,1),s=rt(de(n,r)/r,0,1);return{min:Math.min(l,s),max:Math.max(l,s)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>de(this.speedFactor,Ce.speedFactor),maxWindSpeed:()=>Math.max(1e-4,de(this.maxWindSpeed,Ce.maxWindSpeed)),decaySpeed:()=>rt(de(this.decaySpeed,Ce.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>de(this.arrowLength,Ce.arrowLength),trailLength:()=>de(this.trailLength,Ce.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>rt(de(this.alphaFactor,Ce.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function is({getViewer:e,getCesium:t,message:n}){const r=K(null),l=K({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function s(){var E,P;const T=e==null?void 0:e();if(r.value){try{(P=(E=T==null?void 0:T.scene)==null?void 0:E.primitives)==null||P.remove(r.value)}catch{}r.value.destroy(),r.value=null}}function m(){const T=e==null?void 0:e(),E=t==null?void 0:t();if(!T||!E){n.error("Cesium 尚未初始化");return}s();const P=os(E);r.value=new as(T,{maxWindSpeed:20,cesium:E,speedFactor:l.value.speedFactor,arrowLength:l.value.arrowLength,trailLength:l.value.trailLength,alphaFactor:l.value.alphaFactor}),r.value.loadData(P),T.scene.primitives.add(r.value),r.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function y(){r.value&&(r.value.speedFactor=l.value.speedFactor,r.value.arrowLength=l.value.arrowLength,r.value.trailLength=l.value.trailLength,r.value.alphaFactor=l.value.alphaFactor)}function M(T,E){return T in l.value?(l.value={...l.value,[T]:Number(E)},y(),!0):!1}return{wind2D:r,windParams:l,clearWind2D:s,loadSimulatedWind:m,setWindParam:M}}function os(e){const l=[0,2e3,5e3,1e4,15e3],s=[3e4,3e4,25e3,25e3,2e4],m=[30,30,25,25,20],y=m.reduce((N,b)=>N+b*b,0),M=new Array(y),T=new Array(y),E=new Array(y);let P=0;for(let N=0;N<5;N++){const b=m[N],g=m[N],S=s[N];for(let _=0;_<g;_++)for(let R=0;R<b;R++){const a=P+_*b+R,c=(R-b/2)*(S/111320),u=(_-g/2)*(S/111320/Math.cos(e.Math.toRadians(35))),o=Math.atan2(u,c)+Math.PI/2+.2*Math.sin(R*.5)*Math.cos(_*.5);T[a]=e.Math.toDegrees(o)%360;const h=Math.sqrt(c*c+u*u),F=Math.max(0,1-h/15);M[a]=(5+N*2)*F+2*Math.random(),E[a]=.5*Math.sin(R*.3)*Math.cos(_*.3)}P+=b*g}return{longitude:104,latitude:35,altitude:l,sizeMesh:s,count:m,hspeed:M,hdir:T,vspeed:E}}const ss={key:3,class:"drag-overlay"},ls={key:4,class:"fps-chart-panel","aria-label":"实时帧率折线图"},cs={class:"fps-chart-head"},us={class:"fps-chart-title"},ds={class:"fps-chart",viewBox:"0 0 160 48",preserveAspectRatio:"none","aria-hidden":"true"},hs=["points"],fs={class:"map-controls-group"},ms={class:"mouse-position-content"},ps={__name:"CesiumContainer",emits:["view-sync"],setup(e,{emit:t}){let n=null,r=null,l=!1;const s=Xt(),m=t,y=K(!1),M=K(null),T=K(Kn()),E=K(!0);function P(){E.value=!1}function N(){E.value=!0}const b=()=>r,g=()=>n||window.Cesium,S=()=>T.value.tiandituTk,_=()=>T.value.cesiumIonToken,R=Fo({getViewer:b,getCesium:g,message:s,backendBaseUrl:Yn,tiandituToken:S,cesiumIonToken:_}),{activeBasemap:a,activeTerrain:c,customXyzBasemapUrl:u,basemapOptions:v,terrainOptions:o,overlayOptions:h,createImageryProviderViewModels:w,createTerrainProviderViewModels:F,getSelectedImageryProviderViewModel:A,getSelectedTerrainProviderViewModel:O,bindLayerPickerStateSync:B,addBaseImageryLayers:I,initCustomTerrain:Z,handleOverlayToggle:G,handleCustomBasemapSubmit:ne,cleanupLayers:le}=R;Le(a,(Q,te)=>{!Q||Q===te||je(Q)});const{coordinateDisplay:re,setupInteractions:me,cleanupInteractions:Fe}=bo({getViewer:b,getCesium:g}),{frameRateDisplay:Ee,frameRateLinePoints:qe,setupFrameRateMonitor:Ye,cleanupFrameRateMonitor:Be}=go({getViewer:b}),{installCreditHider:U,cleanupCreditHider:z}=mo({getViewer:b}),{restoreCameraFromUrl:D,restoreBasemapFromUrl:pe,syncBasemapToUrl:je,bindCameraViewSync:V,cleanupCameraViewSync:xe}=Xo({getViewer:b,getCesium:g,onCameraViewSync:Q=>m("view-sync",Q),onBasemapRestore:Q=>{Q&&a.value!==Q&&(a.value=Q)}}),Ke=Oo({getViewer:b,getCesium:g,message:s}),{flyToHome:Ne}=Ke,Oe=is({getViewer:b,getCesium:g,message:s}),Ae=Bo({getViewer:b,getCesium:g,message:s}),Ue=we(()=>Ae.loadedDataSources.value),He=we(()=>Ae.pendingGltfFile.value),L=K(!1);function C(Q){L.value=!0,Q.dataTransfer&&(Q.dataTransfer.dropEffect="copy")}function j(Q){const te=Q==null?void 0:Q.relatedTarget,be=Q==null?void 0:Q.currentTarget;te instanceof Node&&be instanceof Node&&be.contains(te)||(L.value=!1)}async function Y(Q){var be;if(L.value=!1,!y.value)return;const te=(be=Q.dataTransfer)==null?void 0:be.files;if(!(!te||te.length===0))for(const i of te)try{await Ae.loadDataFile(i)}catch{}}const{toolPanelOpen:ee,advancedEffectControls:ue,fluidParams:ye,toolModules:f,handleToolAction:p,handleToolControlChange:k,handleFluidStateChange:X,cleanupTools:J}=Ho({fluidPanelRef:M,sceneActions:Ke,wind:Oe});async function ce(){l=!1,Nn("正在初始化 3D 场景...");try{let Q=0,te=1;for(;Q<te;)try{if(T.value=await Vn({silent:!1,force:Q>0}),te=Math.max(te,Array.isArray(T.value.tiandituTokens)?T.value.tiandituTokens.length:1,Array.isArray(T.value.cesiumIonTokens)?T.value.cesiumIonTokens.length:1,1),n=await no({ionToken:_()}),l||!n||!document.getElementById("cesiumContainer"))return;ve(),me(),Ye();const be=I(),i=await Z();if(l){ge();return}if(y.value=!0,V({initialSync:!1,getActivePresetId:()=>a.value}),pe(),be&&i){s.success("天地图基础影像与地形加载成功。");return}const x=be?{switched:!1}:Rt("tianditu_tk"),H=i?{switched:!1}:Rt("cesium_ion_token");if(!(x.switched||H.switched)){s.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}T.value=H.switched?H.tokens:x.tokens,ge(),Q+=1,s.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(be){const i=Rt("cesium_ion_token");if(!i.switched)throw be;T.value=i.tokens,ge(),Q+=1,s.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}s.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(Q){s.error("Cesium 运行时加载失败",Q),s.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{On()}}function ge(){if(y.value=!1,xe(),Fe(),Be(),le(),z(),!!r){try{r.destroy()}catch{}r=null}}function ve(){var i;const Q=typeof n.Map=="function"?n.Map:n.Viewer,te=w(),be=F();r=new Q("cesiumContainer",{baseLayerPicker:!0,geocoder:((i=n.IonGeocodeProviderType)==null?void 0:i.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:te,selectedImageryProviderViewModel:A(te),terrainProviderViewModels:be,selectedTerrainProviderViewModel:O(be),shouldAnimate:!0}),r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,lo(r,n),wr(r),U(),B(),D({duration:0})||Ne(0)}Rn(()=>{ce()});async function Te({files:Q}){for(const te of Q)try{await Ae.loadDataFile(te)}catch{}}function De({id:Q}){Ae.removeDataSource(Q)}function Xe(){Ae.clearAllDataSources()}async function tt(Q){try{await Ae.loadGltfWithUserCoords(Q)}catch{}}function Ze(){Ae.cancelPendingGltf()}return kn(()=>{if(l=!0,y.value=!1,xe(),Fe(),Be(),J(),le(),z(),Ae.clearAllDataSources(),r){try{r.destroy()}catch{}r=null}}),(Q,te)=>{var be;return W(),q(ke,null,[d("div",{id:"cesiumContainer",class:"cesium-container",onDragover:st(C,["prevent"]),onDragleave:st(j,["prevent"]),onDrop:st(Y,["prevent"])},null,32),y.value?(W(),Ge(ot(Wr),{key:0,headless:"","get-viewer":b,"get-cesium":g,controls:ae(ue)},null,8,["controls"])):se("",!0),y.value?(W(),Ge(ot(Qi),{key:1,ref_key:"fluidPanelRef",ref:M,headless:"","get-viewer":b,"get-cesium":g,params:ae(ye),onStateChange:ae(X)},null,40,["params","onStateChange"])):se("",!0),y.value?(W(),Ge(gi,{key:2,open:ae(ee),"onUpdate:open":te[0]||(te[0]=i=>Et(ee)?ee.value=i:null),"active-basemap":ae(a),"onUpdate:activeBasemap":te[1]||(te[1]=i=>Et(a)?a.value=i:null),"active-terrain":ae(c),"onUpdate:activeTerrain":te[2]||(te[2]=i=>Et(c)?c.value=i:null),"basemap-options":ae(v),"terrain-options":ae(o),"overlay-options":ae(h),"custom-basemap-url":ae(u),modules:ae(f),"loaded-data-sources":Ue.value,onModuleAction:ae(p),onControlChange:ae(k),onOverlayToggle:ae(G),onCustomBasemapSubmit:ae(ne),onDataImport:Te,onDataRemove:De,onDataClearAll:Xe},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):se("",!0),Se(Di,{visible:!!He.value,"file-name":((be=He.value)==null?void 0:be.name)||"",onConfirm:tt,onCancel:Ze},null,8,["visible","file-name"]),L.value&&y.value?(W(),q("div",ss,[Se(ae(Gt),{size:48,"stroke-width":"1.5"}),te[4]||(te[4]=d("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),te[5]||(te[5]=d("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):se("",!0),y.value&&E.value?(W(),q("section",ls,[d("div",cs,[d("div",us,[te[6]||(te[6]=d("span",null,"FPS",-1)),d("strong",null,oe(ae(Ee)),1)]),d("button",{class:"fps-chart-close",type:"button","aria-label":"关闭 FPS 面板",title:"关闭 FPS 面板",onClick:P}," × ")]),(W(),q("svg",ds,[te[7]||(te[7]=d("line",{class:"fps-grid-line",x1:"0",y1:"12",x2:"160",y2:"12"},null,-1)),te[8]||(te[8]=d("line",{class:"fps-grid-line",x1:"0",y1:"24",x2:"160",y2:"24"},null,-1)),te[9]||(te[9]=d("line",{class:"fps-grid-line",x1:"0",y1:"36",x2:"160",y2:"36"},null,-1)),ae(qe)?(W(),q("polyline",{key:0,class:"fps-line",points:ae(qe)},null,8,hs)):se("",!0)]))])):y.value&&!E.value?(W(),q("button",{key:5,class:"fps-chart-toggle",type:"button","aria-label":"显示 FPS 面板",title:"显示 FPS 面板",onClick:N}," FPS ")):se("",!0),d("div",fs,[d("div",ms,oe(ae(re)),1),te[11]||(te[11]=d("div",{class:"divider"},null,-1)),d("button",{class:"home-btn",title:"回到初始位置",onClick:te[3]||(te[3]=(...i)=>ae(Ne)&&ae(Ne)(...i))},[...te[10]||(te[10]=[d("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[d("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},As=_t(ps,[["__scopeId","data-v-44b30f83"]]);export{As as default};
