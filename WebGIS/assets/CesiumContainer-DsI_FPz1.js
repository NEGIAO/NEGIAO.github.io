const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-Cc0wI3YZ.js","./vendor-echarts-all-Cgo2cNZc.js","./vendor-libs-Bh-FqP6f.js","./vendor-vue-CmuMwCC6.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-MDyf9y9Y.js","./vendor-proj4-DdSQhF8T.js","./index-Chjv6vCp.js","./vendor-ol-all-DI0HoHv7.js","./vendor-geotiff-CSiMSXCK.js","./vendor-lerc-9DOY5ikF.js","./vendor-jszip-BOwK5y_4.js","./vendor-ol-all-BtPuoxOl.css","./vendor-axios-Bdz_Fv8M.js","./index-DduL8x4O.css"])))=>i.map(i=>d[i]);
var Nr=Object.defineProperty;var Or=(e,t,r)=>t in e?Nr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var er=(e,t,r)=>Or(e,typeof t!="symbol"?t+"":t,r);import{C as Pr,o as Er,w as we,d as G,c as Y,f as h,t as se,G as _e,W as xt,X as ct,g as le,r as Q,P as zr,a as xe,u as ie,F as Ee,e as je,n as Ce,x as Be,S as at,I as Ct,i as it,H as Ae,O as Ar,q as Le,z as Br,v as Ur,B as Hr,A as Wr,a4 as At}from"./vendor-vue-CmuMwCC6.js";import{_ as _t,h as qt,R as Dr,Q as kr,e as Dt,f as tr,T as $r,v as Gr,y as kt,P as qr,x as jr}from"./index-Chjv6vCp.js";import{_ as Wt}from"./vendor-runtime-Dp1pzeXC.js";import{af as Rt,ag as It,ah as Xr,X as rr,e as Nt,ai as $t,aj as St,ac as nr,ak as Vr,al as Rr,am as ar,H as ir,T as Ot,a2 as Yr,an as Ft,ao as Kr,ap as Zr,aq as Jr,q as Qr,o as en,ar as wt,G as or,as as tn}from"./vendor-libs-Bh-FqP6f.js";import{F as jt,G as sr,v as bt,B as rn,H as nn,I as an,J as on,K as sn,L as ln,M as lr,N as cn,O as un,P as dn}from"./HomeView-BpGYZDG8.js";import{d as hn}from"./vectorUtils-Ds50OJUZ.js";import"./vendor-ol-all-DI0HoHv7.js";import"./vendor-geotiff-CSiMSXCK.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-DdSQhF8T.js";import"./vendor-axios-Bdz_Fv8M.js";import"./textDecoder-CXjJWEkX.js";const Et=new Map;function fn(e){const t=Et.get(e);t&&t.abort();const r=new AbortController;return Et.set(e,r),r}function mn(){Et.forEach(e=>{e.abort()}),Et.clear()}function pn(e){const t=e.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!t)return/\{s\}/i.test(e)?{url:e,subdomains:["a","b","c"]}:{url:e,subdomains:[]};const r=t[1].charCodeAt(0),n=t[2].charCodeAt(0),l=[];for(let s=r;s<=n;s++)l.push(String.fromCharCode(s));return{url:e.replace(t[0],"{s}"),subdomains:l}}function gn(e){return e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function vn(e,t){let r=e;return t.tiandituTk&&(r=r.replace(/\{tiandituTk\}/g,t.tiandituTk)),t.customUrl&&(r=r.replace(/\{customUrl\}/g,t.customUrl)),r}function yn(e,t,r){if(!e||!t)return null;const l=fn(t.id).signal,{serviceType:s}=t;let p=vn(t.url,r);if(s==="custom"){if(!r.customUrl)return null;p=r.customUrl}if(t.nonStandardAdapter||s==="vector-tile")return null;const{subdomains:_}=pn(p),L=gn(p),T=t.subdomains||_,A=t.maxZoom||18;try{let C=null;if(l.aborted)return null;switch(s){case"wms":{if(typeof e.WebMapServiceImageryProvider!="function")return null;const z=t.wms;if(!(z!=null&&z.layers))return null;C=new e.WebMapServiceImageryProvider({url:L||t.url,layers:z.layers,parameters:{version:z.version||"1.1.1",srs:z.srs||"EPSG:3857",format:z.format||"image/png",styles:z.styles||"",transparent:z.transparent!==!1}});break}case"wmts":{if(typeof e.WebMapTileServiceImageryProvider!="function")return null;const z=t.wmts;if(!(z!=null&&z.layer)||!z.matrixSet)return null;C=new e.WebMapTileServiceImageryProvider({url:L||t.url,layer:z.layer,style:z.style||"default",format:z.format||"image/png",tileMatrixSetID:z.matrixSet,maximumLevel:A});break}case"osm":{typeof e.OpenStreetMapImageryProvider=="function"?C=new e.OpenStreetMapImageryProvider({maximumLevel:A}):C=new e.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:A});break}default:{if(!L||!(L.includes("{z}")||L.includes("{x}")||L.includes("{y}")||L.includes("{reverseY}")))return null;C=new e.UrlTemplateImageryProvider({url:L,subdomains:T.length>0?T:void 0,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:A,enablePickFeatures:!1});break}}if(l.aborted){if(C&&typeof C.destroy=="function")try{C.destroy()}catch{}return null}return C&&(C._descriptorId=t.id),C}catch{return null}}function bn(e,t,r){if(!e||!Array.isArray(t))return[];const n=[];for(const l of t){const s=jt(l);if(!s)continue;const p=yn(e,s,r);p&&n.push(p)}return n}function _n(e){var n;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;!t||!r||(r.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(n=t.requestRender)==null||n.call(t))}function xn(e,t){var s;const r=e==null?void 0:e.scene,n=r==null?void 0:r.globe;if(!r||!n)return;Tn(r,t),Ln(r),n.enableLighting=!0,n.showGroundAtmosphere=!0,me(n,"dynamicAtmosphereLighting",!0),me(n,"dynamicAtmosphereLightingFromSun",!0),me(n,"atmosphereLightIntensity",11.5),me(n,"atmosphereHueShift",-.015),me(n,"atmosphereSaturationShift",.08),me(n,"atmosphereBrightnessShift",.02),me(n,"lightingFadeInDistance",15e6),me(n,"lightingFadeOutDistance",22e6),me(n,"nightFadeInDistance",9e6),me(n,"nightFadeOutDistance",16e6),Tt(t,n,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Tt(t,n,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),me(n,"atmosphereRayleighScaleHeight",1e4),me(n,"atmosphereMieScaleHeight",3200),me(n,"atmosphereMieAnisotropy",.92),!r.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(r.skyAtmosphere=Cn(t));const l=r.skyAtmosphere;l&&(l.show=!0,me(l,"perFragmentAtmosphere",!0),me(l,"dynamicAtmosphereLighting",!0),me(l,"dynamicAtmosphereLightingFromSun",!0),me(l,"hueShift",-.025),me(l,"saturationShift",.08),me(l,"brightnessShift",.03),me(l,"atmosphereLightIntensity",12),Tt(t,l,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Tt(t,l,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),me(l,"atmosphereRayleighScaleHeight",1e4),me(l,"atmosphereMieScaleHeight",3200),me(l,"atmosphereMieAnisotropy",.92)),r.sun&&(r.sun.show=!0),r.moon&&(r.moon.show=!0),r.skyBox&&(r.skyBox.show=!0),"sunBloom"in r&&(r.sunBloom=!0),"highDynamicRange"in r&&(r.highDynamicRange=!0),Mn(r),(s=r.requestRender)==null||s.call(r)}function Sn(e){var l;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;if(!t||!r)return null;const n=(l=t.postProcessStages)==null?void 0:l.bloom;return{scene:Ke(t,["highDynamicRange","sunBloom","light"]),fog:Ke(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:Ke(r,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:Ke(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:Ke(t.sun,["show"]),moon:Ke(t.moon,["show"]),skyBox:Ke(t.skyBox,["show"]),bloom:{props:Ke(n,["enabled"]),uniforms:Ke(n==null?void 0:n.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function wn(e,t,r){var p,_,L,T;if(!r)return;const n=e==null?void 0:e.scene,l=n==null?void 0:n.globe;if(!n||!l)return;Ze(n,r.scene,t),Ze(n.fog,r.fog,t),Ze(l,r.globe,t),Ze(n.sun,r.sun,t),Ze(n.moon,r.moon,t),Ze(n.skyBox,r.skyBox,t),n.skyAtmosphere&&(Ze(n.skyAtmosphere,r.sky,t),r.skyAtmosphereExisted||(n.skyAtmosphere.show=!1));const s=(p=n.postProcessStages)==null?void 0:p.bloom;Ze(s,(_=r.bloom)==null?void 0:_.props,t),Ze(s==null?void 0:s.uniforms,(L=r.bloom)==null?void 0:L.uniforms,t),(T=n.requestRender)==null||T.call(n)}function Tn(e,t){var r;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(r=t.Color)==null?void 0:r.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}me(e.light,"intensity",2.35)}function Ln(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,me(t,"density",12e-5),me(t,"minimumBrightness",.035),me(t,"screenSpaceErrorFactor",2),me(t,"visualDensityScalar",.16))}function Mn(e){var r;const t=(r=e==null?void 0:e.postProcessStages)==null?void 0:r.bloom;t&&(t.enabled=!0,t.uniforms&&(me(t.uniforms,"contrast",128),me(t.uniforms,"brightness",-.18),me(t.uniforms,"delta",1),me(t.uniforms,"sigma",2.5),me(t.uniforms,"stepSize",4.2)))}function Cn(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function me(e,t,r){e&&t in e&&(e[t]=r)}function Tt(e,t,r,n,l,s){!t||!(r in t)||!(e!=null&&e.Cartesian3)||(t[r]=new e.Cartesian3(n,l,s))}function Ke(e,t){return e?t.reduce((r,n)=>(n in e&&(r[n]=Fn(e[n])),r),{}):{}}function Ze(e,t={},r){!e||!t||Object.entries(t).forEach(([n,l])=>{n in e&&(e[n]=Pn(l,r))})}function Fn(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Pn(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const En={key:0,class:"advanced-effects-root"},An={class:"effects-panel"},Dn={class:"panel-head"},kn={class:"effect-switches"},Rn={class:"switch-item"},In={class:"switch-item"},Nn={class:"switch-item"},On={class:"switch-item"},zn={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,r=qt(),n=Q(null),l=Q(!1),s=Q(!1),p=Q(!1),_=Q(!1),L=Q(!1);let T=null,A=null,C=null,z=!1,w=null,x=null,y=null,v=null,k=null,a=null,c=null,u=null,g=!1,i=null,d=0,S=0,F=typeof performance<"u"?performance.now():Date.now();function E(){return y||(y=Wt(()=>import("./cesiumFxRuntime-Cc0wI3YZ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(M=>{var q;const P=(q=M==null?void 0:M.getCesiumFxEchartsRuntime)==null?void 0:q.call(M);if(!P)throw new Error("Cinematic FX 图表运行时加载失败");return x=P,P}).catch(M=>{throw y=null,M}),y)}async function O(){return x||E()}const U={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},I={hdr:null,bloom:null,sky:null};Pr(()=>{$()}),Er(()=>{Je()}),we(()=>t.controls,M=>{J(M||{})},{deep:!0,immediate:!0});function J(M){Object.prototype.hasOwnProperty.call(M,"fog")&&(l.value=!!M.fog),Object.prototype.hasOwnProperty.call(M,"hbao")&&(s.value=!!M.hbao),Object.prototype.hasOwnProperty.call(M,"tiltShift")&&(p.value=!!M.tiltShift),Object.prototype.hasOwnProperty.call(M,"atmosphere")&&(_.value=!!M.atmosphere)}function $(){let M=0;v=window.setInterval(async()=>{var Z,ne;M+=1;const P=(Z=t.getViewer)==null?void 0:Z.call(t),q=((ne=t.getCesium)==null?void 0:ne.call(t))||window.Cesium;if(P&&q){clearInterval(v),v=null;try{te(P),re(P),oe(P,q),Ve(P,q),r.success("高级视觉效果已启用。")}catch(he){r.error("高级视觉效果初始化失败",he),r.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}M>=150&&(clearInterval(v),v=null,r.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function te(M){var q,Z,ne,he,ye,f;const P=M==null?void 0:M.scene;if(P){if(typeof P.highDynamicRange=="boolean"&&(I.hdr=P.highDynamicRange),(q=P.postProcessStages)!=null&&q.bloom){const m=P.postProcessStages.bloom;I.bloom={enabled:!!m.enabled,contrast:(Z=m.uniforms)==null?void 0:Z.contrast,brightness:(ne=m.uniforms)==null?void 0:ne.brightness,delta:(he=m.uniforms)==null?void 0:he.delta,sigma:(ye=m.uniforms)==null?void 0:ye.sigma,stepSize:(f=m.uniforms)==null?void 0:f.stepSize}}P.skyAtmosphere&&(I.sky={hueShift:P.skyAtmosphere.hueShift,saturationShift:P.skyAtmosphere.saturationShift,brightnessShift:P.skyAtmosphere.brightnessShift})}}function oe(M,P){var Z;!((Z=M==null?void 0:M.scene)!=null&&Z.postProcessStages)||!(P!=null&&P.PostProcessStage)||(Me(M,P),Fe(M,P),Xe(M,P),_.value?Re(M,P,1200):B(M))}function re(M){var q;const P=M==null?void 0:M.scene;(q=P==null?void 0:P.renderError)!=null&&q.addEventListener&&(P.rethrowRenderErrors=!1,u=P.renderError.addEventListener((Z,ne)=>{r.error("Cesium 渲染异常，已触发降级保护",ne),ge(),g||(g=!0,r.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function ge(){l.value=!1,p.value=!1,s.value=!1,_.value=!1,T&&(T.enabled=!1),A&&(A.enabled=!1),C&&(C.enabled=!1)}function Me(M,P){T||(T=new P.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new P.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),M.scene.postProcessStages.add(T),T.enabled=l.value)}function Fe(M,P){var Z,ne;const q=(Z=M==null?void 0:M.scene)==null?void 0:Z.postProcessStages;q&&(q.ambientOcclusion?(C=q.ambientOcclusion,z=!1):(ne=P==null?void 0:P.PostProcessStageLibrary)!=null&&ne.createAmbientOcclusionStage&&(C=P.PostProcessStageLibrary.createAmbientOcclusionStage(),q.add(C),z=!0),C&&(C.enabled=s.value,C.uniforms&&("intensity"in C.uniforms&&(C.uniforms.intensity=4.2),"bias"in C.uniforms&&(C.uniforms.bias=.08),"lengthCap"in C.uniforms&&(C.uniforms.lengthCap=.35),"stepSize"in C.uniforms&&(C.uniforms.stepSize=1.8),"frustumLength"in C.uniforms&&(C.uniforms.frustumLength=1200))))}function Xe(M,P){A||(A=new P.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),M.scene.postProcessStages.add(A),A.enabled=!1)}function Ve(M,P){const q=M==null?void 0:M.scene;q&&(c=q.preRender.addEventListener(()=>{var ye;const Z=He(M),ne=Number(((ye=M==null?void 0:M.camera)==null?void 0:ye.pitch)??-1.2);d+=1;const he=typeof performance<"u"?performance.now():Date.now();if(he-F>=1e3&&(S=Math.round(d*1e3/(he-F)),d=0,F=he),T&&(T.enabled=l.value,T.uniforms.cameraHeightFactor=De(Z,150,12e3),T.uniforms.fogDensity=55e-5+(1-T.uniforms.cameraHeightFactor)*.00125),C&&(C.enabled=s.value),A){const f=ne>-.62,m=f?We((ne+.62)/.5):0;A.enabled=p.value&&f,A.uniforms.blurStrength=m}_.value?Re(M,P,Z):B(M)}))}function Re(M,P,q){var f;const Z=M==null?void 0:M.scene;if(!Z)return;i||(i=Sn(M)),xn(M,P),typeof Z.highDynamicRange=="boolean"&&(Z.highDynamicRange=!0);const ne=(f=Z.postProcessStages)==null?void 0:f.bloom;ne&&(ne.enabled=!0,ne.uniforms&&("contrast"in ne.uniforms&&(ne.uniforms.contrast=149),"brightness"in ne.uniforms&&(ne.uniforms.brightness=-.12),"delta"in ne.uniforms&&(ne.uniforms.delta=1),"sigma"in ne.uniforms&&(ne.uniforms.sigma=3.25),"stepSize"in ne.uniforms&&(ne.uniforms.stepSize=5)));const he=Z.skyAtmosphere;if(!he)return;const ye=De(q,500,12e4);he.hueShift=-.035+ye*.035,he.saturationShift=-.14+ye*.09,he.brightnessShift=.03+(1-ye)*.08}function B(M){var ne,he;const P=M==null?void 0:M.scene;if(!P)return;const q=((ne=t.getCesium)==null?void 0:ne.call(t))||window.Cesium;if(i){wn(M,q,i),i=null;return}typeof P.highDynamicRange=="boolean"&&I.hdr!==null&&(P.highDynamicRange=I.hdr);const Z=(he=P.postProcessStages)==null?void 0:he.bloom;Z&&I.bloom&&(Z.enabled=I.bloom.enabled,Z.uniforms&&("contrast"in Z.uniforms&&I.bloom.contrast!==void 0&&(Z.uniforms.contrast=I.bloom.contrast),"brightness"in Z.uniforms&&I.bloom.brightness!==void 0&&(Z.uniforms.brightness=I.bloom.brightness),"delta"in Z.uniforms&&I.bloom.delta!==void 0&&(Z.uniforms.delta=I.bloom.delta),"sigma"in Z.uniforms&&I.bloom.sigma!==void 0&&(Z.uniforms.sigma=I.bloom.sigma),"stepSize"in Z.uniforms&&I.bloom.stepSize!==void 0&&(Z.uniforms.stepSize=I.bloom.stepSize))),P.skyAtmosphere&&I.sky&&(P.skyAtmosphere.hueShift=I.sky.hueShift,P.skyAtmosphere.saturationShift=I.sky.saturationShift,P.skyAtmosphere.brightnessShift=I.sky.brightnessShift)}function N(){k&&(clearInterval(k),k=null)}async function D(){var Z,ne;const M=!L.value;if(L.value=M,!M){N();return}const P=(Z=t.getViewer)==null?void 0:Z.call(t),q=((ne=t.getCesium)==null?void 0:ne.call(t))||window.Cesium;if(!P||!q){L.value=!1,r.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await de(P,q),Ue(P,q),K(P,q)}catch(he){L.value=!1,r.error("图表模块加载失败",he)}}async function de(M,P){await O(),await zr(),n.value&&(w||(w=x.init(n.value),be()),a||(a=()=>{w==null||w.resize()},window.addEventListener("resize",a)),w.resize(),K(M,P))}function Ue(M,P){k||(k=window.setInterval(()=>{!w||!L.value||K(M,P)},1200))}function K(M,P){var ye;const q=new Date,Z=`${$e(q.getHours())}:${$e(q.getMinutes())}:${$e(q.getSeconds())}`,ne=Number((He(M)/1e3).toFixed(2)),he=Number(P.Math.toDegrees(((ye=M==null?void 0:M.camera)==null?void 0:ye.pitch)??0).toFixed(1));Ie(U.labels,Z,20),Ie(U.cameraHeightKm,ne,20),Ie(U.pitchDeg,he,20),Ie(U.fps,S,20),w.setOption({xAxis:{data:U.labels},series:[{data:U.cameraHeightKm},{data:U.pitchDeg},{data:U.fps}]})}function be(){w&&w.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function Je(){var q,Z;v&&(clearInterval(v),v=null),N();const M=(q=t.getViewer)==null?void 0:q.call(t),P=(Z=M==null?void 0:M.scene)==null?void 0:Z.postProcessStages;c&&(c(),c=null),u&&(u(),u=null),T&&P&&P.remove(T),T=null,A&&P&&P.remove(A),A=null,C&&(z&&P&&P.remove(C),C=null),z=!1,M&&B(M),a&&(window.removeEventListener("resize",a),a=null),w&&(w.dispose(),w=null),x=null,g=!1}function He(M){var ne,he,ye;const P=(he=(ne=M==null?void 0:M.scene)==null?void 0:ne.globe)==null?void 0:he.ellipsoid,q=(ye=M==null?void 0:M.camera)==null?void 0:ye.positionWC;if(!P||!q)return 0;const Z=P.cartesianToCartographic(q);return Math.max(0,Number((Z==null?void 0:Z.height)??0))}function De(M,P,q){return!Number.isFinite(M)||q<=P?0:We((M-P)/(q-P))}function We(M){return Math.min(1,Math.max(0,Number(M)||0))}function Ie(M,P,q){M.push(P),M.length>q&&M.shift()}function $e(M){return String(M).padStart(2,"0")}return(M,P)=>e.headless?le("",!0):(G(),Y("div",En,[h("div",An,[h("div",Dn,[P[4]||(P[4]=h("span",{class:"panel-title"},"Cinematic FX",-1)),h("button",{class:"panel-btn",onClick:D},se(L.value?"隐藏图表":"显示图表"),1)]),h("div",kn,[h("label",Rn,[_e(h("input",{"onUpdate:modelValue":P[0]||(P[0]=q=>l.value=q),type:"checkbox"},null,512),[[xt,l.value]]),P[5]||(P[5]=h("span",null,"电影级高度雾",-1))]),h("label",In,[_e(h("input",{"onUpdate:modelValue":P[1]||(P[1]=q=>s.value=q),type:"checkbox"},null,512),[[xt,s.value]]),P[6]||(P[6]=h("span",null,"HBAO 微阴影",-1))]),h("label",Nn,[_e(h("input",{"onUpdate:modelValue":P[2]||(P[2]=q=>p.value=q),type:"checkbox"},null,512),[[xt,p.value]]),P[7]||(P[7]=h("span",null,"移轴摄影",-1))]),h("label",On,[_e(h("input",{"onUpdate:modelValue":P[3]||(P[3]=q=>_.value=q),type:"checkbox"},null,512),[[xt,_.value]]),P[8]||(P[8]=h("span",null,"动态大气 + Bloom",-1))])]),_e(h("div",{ref_key:"chartRef",ref:n,class:"fx-chart"},null,512),[[ct,L.value]])])]))}},Bn=_t(zn,[["__scopeId","data-v-1e562e70"]]),Un={key:0,class:"launcher-count"},Hn={class:"panel-header"},Wn={class:"panel-title-block"},$n={class:"panel-mark"},Gn={class:"panel-copy"},qn={class:"panel-subtitle"},jn={class:"panel-actions"},Xn=["title"],Vn={class:"panel-tabs","aria-label":"3D 工具分类"},Yn=["aria-pressed","onClick"],Kn={class:"panel-scroll"},Zn={class:"panel-page"},Jn={class:"overview-grid"},Qn={class:"overview-tile"},ea={class:"overview-tile"},ta={class:"overview-tile"},ra={key:0,class:"quick-actions"},na=["disabled","onClick"],aa={key:1,class:"empty-state"},ia={class:"panel-page"},oa=["aria-expanded"],sa={class:"section-main"},la={class:"section-meta"},ca={key:0,class:"section-body"},ua={class:"option-grid"},da=["disabled","aria-pressed","title","onClick"],ha={class:"custom-basemap-input-row"},fa=["disabled"],ma={key:0,class:"custom-basemap-current"},pa=["aria-expanded"],ga={class:"section-main"},va={class:"section-meta"},ya={key:0,class:"section-body"},ba={class:"option-grid"},_a=["aria-pressed","title","onClick"],xa=["aria-expanded"],Sa={class:"section-main"},wa={class:"section-meta"},Ta={key:0,class:"section-body"},La={class:"overlay-list"},Ma=["disabled","aria-pressed","title","onClick"],Ca={class:"overlay-copy"},Fa={class:"overlay-title"},Pa={key:0,class:"overlay-desc"},Ea={key:3,class:"empty-state"},Aa={class:"panel-page"},Da={class:"module-list"},ka=["aria-expanded","onClick"],Ra={class:"module-icon"},Ia={class:"module-copy"},Na={class:"module-title"},Oa={key:0,class:"module-desc"},za={class:"module-head-side"},Ba={key:0,class:"module-body"},Ua={key:0,class:"module-actions"},Ha=["disabled","onClick"],Wa={key:1,class:"control-list"},$a={class:"control-label"},Ga={class:"control-label-text"},qa=["aria-label","title"],ja=["min","max","step","value","disabled","onInput"],Xa=["min","max","step","value","disabled","onInput"],Va=["value","disabled","onInput"],Ya=["value","disabled","onChange"],Ka=["value"],Za=["aria-pressed","disabled","onClick"],Ja={key:4,class:"control-value"},Qa={key:0,class:"empty-state"},ei={class:"panel-page"},ti={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},ri={class:"data-upload-hint"},ni={key:0,class:"data-source-list"},ai={class:"data-source-head"},ii={class:"data-source-count"},oi=["title","aria-label","onClick"],si={class:"data-source-icon"},li={class:"data-source-copy"},ci={class:"data-source-name"},ui={class:"data-source-type"},di={key:1,class:"empty-state"},cr=3,hi=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",fi={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(e,{emit:t}){const r=e,n=Q(Array.isArray(r.loadedDataSources)?r.loadedDataSources:[]);we(()=>r.loadedDataSources,B=>{const N=Array.isArray(B)?B:[];N!==n.value&&(n.value=N)},{immediate:!0});const l=t,s=I(),p=s.uiStateVersion===cr,_=Q(s.activeTab||"scene"),L=Q(!!s.compactMode),T=Q(new Set(p?s.expandedLayerSectionIds||[]:[])),A=Q(new Set(p?s.expandedModuleIds||[]:[])),C=Q(r.customBasemapUrl||""),z=Q(null),w=Le(()=>r.embedded||r.open),x=Le(()=>r.modules.find(B=>B.id==="scene")||null),y=Le(()=>{var B;return((B=x.value)==null?void 0:B.actions)||[]}),v=Le(()=>r.modules.filter(B=>B.id!=="scene")),k=Le(()=>v.value.filter(B=>B.statusTone==="success"||B.statusTone==="warning").length),a=Le(()=>r.overlayOptions.filter(B=>!!B.active).length),c=[{id:"scene",label:"场景",icon:It},{id:"layers",label:"图层",icon:Nt},{id:"data",label:"数据",icon:$t},{id:"modules",label:"模块",icon:Rt}],u=Le(()=>{var B;return((B=r.basemapOptions.find(N=>N.value===r.activeBasemap))==null?void 0:B.label)||"未选择"}),g=Le(()=>{var B;return((B=r.terrainOptions.find(N=>N.value===r.activeTerrain))==null?void 0:B.label)||"未选择"});we(()=>r.modules.map(B=>B.id),B=>{B.includes(_.value)||_.value==="scene"||_.value==="layers"||_.value==="modules"||(_.value="scene")},{immediate:!0}),we([_,L,T,A],J,{deep:!0}),we(()=>r.customBasemapUrl,B=>{B!==C.value&&(C.value=B||"")});function i(B){l("update:open",B)}function d(B){return T.value.has(B)}function S(B){const N=new Set(T.value);N.has(B)?N.delete(B):N.add(B),T.value=N}function F(B){return A.value.has(B)}function E(B){const N=new Set(A.value);N.has(B)?N.delete(B):N.add(B),A.value=N}function O(B){B!=null&&B.disabled||l("update:activeBasemap",B.value)}function U(){l("custom-basemap-submit",{url:C.value})}function I(){if(typeof window>"u")return{};try{const B=window.localStorage.getItem(r.storageKey);return B?JSON.parse(B):{}}catch{return{}}}function J(){if(!(typeof window>"u"))try{window.localStorage.setItem(r.storageKey,JSON.stringify({uiStateVersion:cr,activeTab:_.value,compactMode:L.value,expandedLayerSectionIds:[...T.value],expandedModuleIds:[...A.value]}))}catch{}}function $(B){return{scene:It,effects:en,wind:Qr,fluid:Jr}[B]||Rt}function te(B,N){var de;return((de={scene:{home:Kr,everest:ar,tileset:Ft},wind:{load:Yr,clear:Ot},fluid:{pick:ir,clear:Ot}}[B])==null?void 0:de[N])||Zr}function oe(B,N){l("module-action",{moduleId:B,actionId:N})}function re(B,N,D){const de=N.type==="range"?Number(D):D;l("control-change",{moduleId:B,controlId:N.id,value:de})}function ge(B){B.disabled||l("overlay-toggle",{overlayId:B.value,value:!B.active})}function Me(B){return{geojson:wt,json:wt,kml:or,kmz:or,shp:Nt,gltf:Ft,czml:wt,"3dtiles":Ft}[B]||wt}function Fe(B){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[B]||B.toUpperCase()}function Xe(B){var D;const N=(D=B.target)==null?void 0:D.files;!N||N.length===0||(l("data-import",{files:Array.from(N)}),z.value&&(z.value.value=""))}function Ve(B){l("data-remove",{id:B})}function Re(){l("data-clear-all")}return(B,N)=>(G(),Y("aside",{class:Ce(["cesium-tool-shell",{"is-open":w.value,"is-embedded":e.embedded}])},[!e.embedded&&!w.value?(G(),Y("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:N[0]||(N[0]=D=>i(!0))},[xe(ie(Rt),{size:18,"stroke-width":"2"}),N[8]||(N[8]=h("span",null,"高级控制台",-1)),k.value?(G(),Y("span",Un,se(k.value),1)):le("",!0)])):le("",!0),_e(h("section",{class:Ce(["cesium-tool-panel",{compact:L.value}]),"aria-label":"Cesium 高级控制台"},[h("header",Hn,[h("div",Wn,[h("span",$n,[xe(ie(It),{size:18,"stroke-width":"2"})]),h("span",Gn,[N[9]||(N[9]=h("span",{class:"panel-title"},"3D 高级控制台",-1)),h("span",qn,se(u.value)+" / "+se(g.value),1)])]),h("div",jn,[h("button",{class:"icon-btn",type:"button",title:L.value?"切换为舒展布局":"切换为紧凑布局",onClick:N[1]||(N[1]=D=>L.value=!L.value)},[xe(ie(Xr),{size:16,"stroke-width":"2"})],8,Xn),e.embedded?le("",!0):(G(),Y("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:N[2]||(N[2]=D=>i(!1))},[xe(ie(rr),{size:17,"stroke-width":"2"})]))])]),h("nav",Vn,[(G(),Y(Ee,null,je(c,D=>h("button",{key:D.id,class:Ce(["tab-btn",{active:_.value===D.id}]),type:"button","aria-pressed":_.value===D.id,onClick:de=>_.value=D.id},[(G(),Be(at(D.icon),{size:15,"stroke-width":"2"})),h("span",null,se(D.label),1)],10,Yn)),64))]),h("div",Kn,[_e(h("section",Zn,[h("div",Jn,[h("div",Qn,[N[10]||(N[10]=h("span",{class:"overview-label"},"地图源",-1)),h("strong",null,se(u.value),1)]),h("div",ea,[N[11]||(N[11]=h("span",{class:"overview-label"},"地形",-1)),h("strong",null,se(g.value),1)]),h("div",ta,[N[12]||(N[12]=h("span",{class:"overview-label"},"模块",-1)),h("strong",null,se(k.value)+"/"+se(v.value.length),1)])]),y.value.length?(G(),Y("div",ra,[(G(!0),Y(Ee,null,je(y.value,D=>(G(),Y("button",{key:D.id,class:Ce(["tool-action",[D.variant||"default",{active:D.active}]]),disabled:D.disabled,type:"button",onClick:de=>oe(x.value.id,D.id)},[(G(),Be(at(te(x.value.id,D.id)),{size:15,"stroke-width":"2"})),Ct(" "+se(D.label),1)],10,na))),128))])):(G(),Y("div",aa," 暂无场景快捷操作 "))],512),[[ct,_.value==="scene"]]),_e(h("section",ia,[e.basemapOptions.length?(G(),Y("div",{key:0,class:Ce(["option-group",{expanded:d("basemap")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":d("basemap"),onClick:N[3]||(N[3]=D=>S("basemap"))},[h("span",sa,[xe(ie(Nt),{size:16,"stroke-width":"2"}),N[13]||(N[13]=h("span",null,"底图源",-1))]),h("span",la,[h("span",null,se(u.value),1),xe(ie(St),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,oa),d("basemap")?(G(),Y("div",ca,[h("div",ua,[(G(!0),Y(Ee,null,je(e.basemapOptions,D=>(G(),Y("button",{key:D.value,class:Ce(["option-card",{active:D.value===e.activeBasemap}]),type:"button",disabled:D.disabled,"aria-pressed":D.value===e.activeBasemap,title:D.description||D.label,onClick:de=>O(D)},[h("span",null,se(D.label),1),D.value===e.activeBasemap?(G(),Be(ie(nr),{key:0,size:15,"stroke-width":"2.4"})):le("",!0)],10,da))),128))]),h("form",{class:"custom-basemap-editor",onSubmit:it(U,["prevent"])},[h("div",ha,[xe(ie(Vr),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),_e(h("input",{"onUpdate:modelValue":N[4]||(N[4]=D=>C.value=D),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Ae,C.value]]),h("button",{class:"custom-basemap-submit",type:"submit",disabled:!C.value.trim(),title:"加载自定义 XYZ"},[xe(ie(Rr),{size:14,"stroke-width":"2"}),N[14]||(N[14]=h("span",null,"加载",-1))],8,fa)]),e.customBasemapUrl?(G(),Y("div",ma,se(e.customBasemapUrl),1)):le("",!0)],32)])):le("",!0)],2)):le("",!0),e.terrainOptions.length?(G(),Y("div",{key:1,class:Ce(["option-group",{expanded:d("terrain")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":d("terrain"),onClick:N[5]||(N[5]=D=>S("terrain"))},[h("span",ga,[xe(ie(ar),{size:16,"stroke-width":"2"}),N[15]||(N[15]=h("span",null,"地形",-1))]),h("span",va,[h("span",null,se(g.value),1),xe(ie(St),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,pa),d("terrain")?(G(),Y("div",ya,[h("div",ba,[(G(!0),Y(Ee,null,je(e.terrainOptions,D=>(G(),Y("button",{key:D.value,class:Ce(["option-card",{active:D.value===e.activeTerrain}]),type:"button","aria-pressed":D.value===e.activeTerrain,title:D.description||D.label,onClick:de=>B.$emit("update:activeTerrain",D.value)},[h("span",null,se(D.label),1),D.value===e.activeTerrain?(G(),Be(ie(nr),{key:0,size:15,"stroke-width":"2.4"})):le("",!0)],10,_a))),128))])])):le("",!0)],2)):le("",!0),e.overlayOptions.length?(G(),Y("div",{key:2,class:Ce(["option-group",{expanded:d("overlay")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":d("overlay"),onClick:N[6]||(N[6]=D=>S("overlay"))},[h("span",Sa,[xe(ie(ir),{size:16,"stroke-width":"2"}),N[16]||(N[16]=h("span",null,"叠加层",-1))]),h("span",wa,[h("span",null,se(a.value)+"/"+se(e.overlayOptions.length),1),xe(ie(St),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,xa),d("overlay")?(G(),Y("div",Ta,[h("div",La,[(G(!0),Y(Ee,null,je(e.overlayOptions,D=>(G(),Y("button",{key:D.value,class:Ce(["overlay-row",{active:!!D.active}]),type:"button",disabled:D.disabled,"aria-pressed":!!D.active,title:D.description||D.label,onClick:de=>ge(D)},[h("span",Ca,[h("span",Fa,se(D.label),1),D.description?(G(),Y("span",Pa,se(D.description),1)):le("",!0)]),h("span",{class:Ce(["toggle-control",{active:!!D.active}]),"aria-hidden":"true"},[...N[17]||(N[17]=[h("span",{class:"toggle-track"},[h("span",{class:"toggle-thumb"})],-1)])],2)],10,Ma))),128))])])):le("",!0)],2)):le("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(G(),Y("div",Ea," 暂无图层配置项 ")):le("",!0)],512),[[ct,_.value==="layers"]]),_e(h("section",Aa,[h("div",Da,[(G(!0),Y(Ee,null,je(v.value,D=>{var de,Ue;return G(),Y("article",{key:D.id,class:Ce(["module-item",{expanded:F(D.id)}])},[h("button",{class:"module-head",type:"button","aria-expanded":F(D.id),onClick:K=>E(D.id)},[h("span",Ra,[(G(),Be(at($(D.id)),{size:16,"stroke-width":"2"}))]),h("span",Ia,[h("span",Na,se(D.title),1),D.description?(G(),Y("span",Oa,se(D.description),1)):le("",!0)]),h("span",za,[D.status?(G(),Y("span",{key:0,class:Ce(["module-status",D.statusTone||"neutral"])},se(D.status),3)):le("",!0),xe(ie(St),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,ka),F(D.id)?(G(),Y("div",Ba,[(de=D.actions)!=null&&de.length?(G(),Y("div",Ua,[(G(!0),Y(Ee,null,je(D.actions,K=>(G(),Y("button",{key:K.id,class:Ce(["tool-action",[K.variant||"default",{active:K.active}]]),disabled:K.disabled,type:"button",onClick:be=>oe(D.id,K.id)},[(G(),Be(at(te(D.id,K.id)),{size:14,"stroke-width":"2"})),Ct(" "+se(K.label),1)],10,Ha))),128))])):le("",!0),(Ue=D.controls)!=null&&Ue.length?(G(),Y("div",Wa,[(G(!0),Y(Ee,null,je(D.controls,K=>(G(),Y("label",{key:K.id,class:Ce(["control-row",`control-${K.type}`])},[h("span",$a,[h("span",Ga,se(K.label),1),K.tooltip?(G(),Y("span",{key:0,class:"control-help","aria-label":K.tooltip,title:K.tooltip,onClick:N[7]||(N[7]=it(()=>{},["prevent","stop"]))}," ? ",8,qa)):le("",!0)]),K.type==="range"?(G(),Y(Ee,{key:0},[h("input",{class:"control-range",type:"range",min:K.min,max:K.max,step:K.step,value:K.value,disabled:K.disabled,onInput:be=>re(D.id,K,be.target.value)},null,40,ja),h("input",{class:"control-number",type:"number",min:K.min,max:K.max,step:K.step,value:K.value,disabled:K.disabled,onInput:be=>re(D.id,K,be.target.value)},null,40,Xa)],64)):K.type==="color"?(G(),Y(Ee,{key:1},[h("input",{class:"control-color",type:"color",value:K.value,disabled:K.disabled,onInput:be=>re(D.id,K,be.target.value)},null,40,Va),h("span",{class:"control-color-swatch",style:Ar({backgroundColor:K.value})},null,4)],64)):K.type==="select"?(G(),Y("select",{key:2,class:"control-select",value:K.value,disabled:K.disabled,onChange:be=>re(D.id,K,be.target.value)},[(G(!0),Y(Ee,null,je(K.options||[],be=>(G(),Y("option",{key:be.value,value:be.value},se(be.label),9,Ka))),128))],40,Ya)):K.type==="toggle"?(G(),Y("button",{key:3,class:Ce(["toggle-control",{active:!!K.value}]),type:"button","aria-pressed":!!K.value,disabled:K.disabled,onClick:be=>re(D.id,K,!K.value)},[...N[18]||(N[18]=[h("span",{class:"toggle-track"},[h("span",{class:"toggle-thumb"})],-1)])],10,Za)):le("",!0),K.displayValue?(G(),Y("span",Ja,se(K.displayValue),1)):le("",!0)],2))),128))])):le("",!0)])):le("",!0)],2)}),128))]),v.value.length?le("",!0):(G(),Y("div",Qa," 暂无可用功能模块 "))],512),[[ct,_.value==="modules"]]),_e(h("section",ei,[h("label",ti,[h("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:z,class:"data-file-input",type:"file",multiple:"",accept:hi,onChange:Xe},null,544),h("div",ri,[xe(ie($t),{size:28,"stroke-width":"1.5"}),N[19]||(N[19]=h("span",null,"选择文件或拖拽到此处",-1)),N[20]||(N[20]=h("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),n.value.length?(G(),Y("div",ni,[h("div",ai,[h("span",ii," 已加载 "+se(n.value.length)+" 个数据源 ",1),h("button",{class:"tool-action danger",type:"button",onClick:Re},[xe(ie(Ot),{size:13,"stroke-width":"2"}),N[21]||(N[21]=Ct(" 全部清除 ",-1))])]),(G(!0),Y(Ee,null,je(n.value,D=>(G(),Y("button",{key:D.id,class:"data-source-row",type:"button",title:`点击移除 ${D.name} (${Fe(D.type)})`,"aria-label":`移除 ${D.name}`,onClick:de=>Ve(D.id)},[h("span",si,[(G(),Be(at(Me(D.type)),{size:15,"stroke-width":"2"}))]),h("span",li,[h("span",ci,se(D.name),1),h("span",ui,se(Fe(D.type)),1)]),xe(ie(rr),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,oi))),128))])):(G(),Y("div",di," 暂无已导入的数据 "))],512),[[ct,_.value==="data"]])])],2),[[ct,e.embedded||w.value]])],2))}},mi=_t(fi,[["__scopeId","data-v-2fed6c1a"]]),pi={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},gi={class:"dialog-header"},vi={class:"dialog-title-row"},yi={class:"dialog-file-name"},bi={class:"coord-fields"},_i={class:"coord-field"},xi={key:0,class:"coord-error"},Si={class:"coord-field"},wi={key:0,class:"coord-error"},Ti={class:"coord-field"},Li={key:0,class:"coord-error"},Mi={class:"dialog-actions"},Ci=["disabled"],Fi={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const r=e,n=t,l=Q(""),s=Q(""),p=Q("0"),_=Q(null),L=Q(""),T=Q(""),A=Q(""),C=Le(()=>l.value!==""&&s.value!==""&&!L.value&&!T.value&&!A.value);function z(){const x=parseFloat(l.value),y=parseFloat(s.value),v=parseFloat(p.value);L.value="",T.value="",A.value="",l.value!==""&&(isNaN(x)||x<-180||x>180)&&(L.value="经度范围: -180 ~ 180"),s.value!==""&&(isNaN(y)||y<-90||y>90)&&(T.value="纬度范围: -90 ~ 90"),p.value!==""&&(isNaN(v)||v<0)&&(A.value="高度必须 ≥ 0")}function w(){if(!C.value){z();return}const x=parseFloat(l.value),y=parseFloat(s.value),v=parseFloat(p.value)||0;n("confirm",{lng:x,lat:y,height:v})}return we(()=>r.visible,x=>{if(!x){L.value="",T.value="",A.value="";return}l.value="",s.value="",p.value="0",L.value="",T.value="",A.value="",x&&setTimeout(()=>{var y;(y=_.value)==null||y.focus()},60)}),(x,y)=>(G(),Be(Br,{to:"body"},[e.visible?(G(),Y("div",{key:0,class:"cesium-data-dialog-overlay",onClick:y[4]||(y[4]=it(v=>x.$emit("cancel"),["self"]))},[h("div",pi,[h("header",gi,[h("div",vi,[xe(ie(Ft),{size:18,"stroke-width":"2"}),y[5]||(y[5]=h("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),h("p",yi,se(e.fileName),1),y[6]||(y[6]=h("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),h("form",{class:"dialog-form",onSubmit:it(w,["prevent"])},[h("div",bi,[h("label",_i,[y[7]||(y[7]=h("span",{class:"coord-label"},"经度 (Longitude)",-1)),_e(h("input",{ref_key:"lngInputRef",ref:_,"onUpdate:modelValue":y[0]||(y[0]=v=>l.value=v),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:z},null,544),[[Ae,l.value]]),L.value?(G(),Y("span",xi,se(L.value),1)):le("",!0)]),h("label",Si,[y[8]||(y[8]=h("span",{class:"coord-label"},"纬度 (Latitude)",-1)),_e(h("input",{"onUpdate:modelValue":y[1]||(y[1]=v=>s.value=v),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:z},null,544),[[Ae,s.value]]),T.value?(G(),Y("span",wi,se(T.value),1)):le("",!0)]),h("label",Ti,[y[9]||(y[9]=h("span",{class:"coord-label"},"高度 (Height 米)",-1)),_e(h("input",{"onUpdate:modelValue":y[2]||(y[2]=v=>p.value=v),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:z},null,544),[[Ae,p.value]]),A.value?(G(),Y("span",Li,se(A.value),1)):le("",!0)])]),h("div",Mi,[h("button",{class:"dialog-btn cancel-btn",type:"button",onClick:y[3]||(y[3]=v=>x.$emit("cancel"))}," 取消 "),h("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!C.value},[xe(ie(Rr),{size:14,"stroke-width":"2"}),y[10]||(y[10]=Ct(" 确认放置 ",-1))],8,Ci)])],32)])])):le("",!0)]))}},Pi=_t(Fi,[["__scopeId","data-v-81f307a1"]]);function Ei(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(k){return(k==null?void 0:k._view)||(k==null?void 0:k.view)}function r(k){const a=t(k);if(!(a!=null&&a.passState))throw new Error("Cesium scene passState is unavailable.");return a.passState}function n(k){const a=t(k);return(a==null?void 0:a.frustumCommandsList)||(a==null?void 0:a._frustumCommandsList)||[]}const l=`
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
`,s=`
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
`,_=`
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
`,L=`
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
`;class A{constructor(a){this.commandType=a.commandType,this.geometry=a.geometry,this.attributeLocations=a.attributeLocations,this.primitiveType=a.primitiveType,this.uniformMap=a.uniformMap,this.vertexShaderSource=a.vertexShaderSource,this.fragmentShaderSource=a.fragmentShaderSource,this.rawRenderState=a.rawRenderState,this.framebuffer=a.framebuffer,this.isPostRender=a.isPostRender,this.outputTexture=a.outputTexture,this.autoClear=e.defaultValue(a.autoClear,!1),this.preExecute=a.preExecute,this.modelMatrix=e.defaultValue(a.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(a){switch(this.commandType){case"Draw":{const c=e.VertexArray.fromGeometry({context:a,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),u=e.ShaderProgram.fromCache({context:a,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),g=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:c,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:u,framebuffer:this.framebuffer,renderState:g,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(a,c){this.geometry=c;const u=e.VertexArray.fromGeometry({context:a,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=u}update(a){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(a.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&a.commandList.push(this.clearCommand),a.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class C{constructor(){}static loadText(a){const c=new XMLHttpRequest;return c.open("GET",a,!1),c.send(),c.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(a){if(e.defined(a.arrayBufferView)){const u={};u.arrayBufferView=a.arrayBufferView,a.source=u,a.flipY=!1}return new e.Texture(a)}static createDepthFramebuffer(a,c,u){return new e.Framebuffer({context:a,colorTextures:[this.createTexture({context:a,width:c,height:u,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(c*u*4)})],depthRenderbuffer:new e.Renderbuffer({context:a,width:c,height:u,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(a,c,u,g=!1){const i={context:a,colorTextures:[c],destroyAttachments:g};return u&&(i.depthTexture=u),new e.Framebuffer(i)}static createRawRenderState(a){const g={viewport:a.viewport,depthTest:a.depthTest,depthMask:a.depthMask,blending:a.blending};return e.Appearance.getDefaultRenderState(!0,!1,g)}}const v=class v{constructor(a,c={}){if(!a)throw new Error("Cesium Viewer is required");this.viewer=a,this._initConfiguration(c),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(a){this.config={resolution:new e.Cartesian2(a.width||v.DEFAULTS.width,a.height||v.DEFAULTS.height),dimensions:a.dimensions||v.DEFAULTS.dimensions.clone(),heightRange:{min:a.minHeight??v.DEFAULTS.heightRange[0],max:a.maxHeight??v.DEFAULTS.heightRange[1]},baseHeight:a.baseHeight??v.DEFAULTS.baseHeight,fluidParams:a.fluidParams||v.DEFAULTS.fluidParams.clone(),customParams:a.customParams||v.DEFAULTS.customParams.clone(),waterColor:a.waterColor||v.DEFAULTS.waterColor.clone(),lonLat:a.lonLat||[...v.DEFAULTS.lonLat],timeStep:a.timeStep||v.DEFAULTS.timeStep,heightMapSource:a.heightMapSource||v.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(a){const c=Number(a);!Number.isFinite(c)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,c)),this.resetSimulation())}resetSimulation(){var a,c;this._frameCount=0,(c=(a=this.viewer.scene).requestRender)==null||c.call(a)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const a=()=>C.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:a(),B:a(),C:a(),D:a()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(a){if(!(a!=null&&a.arrayBufferView)||!a.width||!a.height)throw new Error("Invalid height map source.");return C.createTexture({context:this.viewer.scene.context,width:a.width,height:a.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:a.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var I,J;const a=this.viewer.scene.context,c=C.createDepthFramebuffer(a,this.config.resolution.x,this.config.resolution.y),u=this.viewer.scene,g=u.frameState,i=r(this.viewer.scene),d=u.camera,S=g.camera,F=i.framebuffer,E=e.BoundingRectangle.clone(i.viewport,new e.BoundingRectangle);let O=null,U=[];try{i.viewport.x=0,i.viewport.y=0,i.viewport.width=this.config.resolution.x,i.viewport.height=this.config.resolution.y,i.framebuffer=c,u.camera=this.heightMapCamera,g.camera=this.heightMapCamera,g.context.uniformState.updateCamera(this.heightMapCamera),U=this._processHeightMapShaders(),this._renderDepthPrepass(i);const $=C.createTexture({context:a,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return O=C.createFramebuffer(a,$),this._copyTexture(c.getColorTexture(0),O),$}finally{this._restoreHeightMapShaders(U),i.framebuffer=F,e.BoundingRectangle.clone(E,i.viewport),u.camera=d,g.camera=S,S&&g.context.uniformState.updateCamera(S),O&&!((I=O.isDestroyed)!=null&&I.call(O))&&O.destroy(),c&&!((J=c.isDestroyed)!=null&&J.call(c))&&c.destroy()}}_renderDepthPrepass(a){const c=this.viewer.scene.frameState;c.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(g=>g.execute(this.viewer.scene.context,a))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const a={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...a,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:s}),this._createComputePass("B",{uniforms:{...a,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:p}),this._createComputePass("C",{uniforms:{...a,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:_}),this._createComputePass("D",{uniforms:{...a,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:L})]}_createComputePass(a,{uniforms:c,shaderSource:u}){return new A({commandType:"Compute",uniformMap:c,fragmentShaderSource:new e.ShaderSource({sources:[l,u]}),geometry:C.getFullscreenQuad(),outputTexture:this.textures[a],preExecute:g=>g.commandToExecute.outputTexture=this.textures[a]})}_createMainRenderPass(){const a=w([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new A({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[l,T]}),geometry:this._createBoxGeometry(),modelMatrix:a,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var a,c,u,g;return(g=(u=(c=(a=t(this.viewer.scene))==null?void 0:a.globeDepth)==null?void 0:c.colorFramebufferManager)==null?void 0:u._colorTextures)==null?void 0:g[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(a=>this.viewer.scene.primitives.add(a)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(a){const c=this.viewer.camera.getPickRay(a);return this.viewer.scene.globe.pick(c,this.viewer.scene)}_createOrthographicCamera(){const a=new e.Camera(this.viewer.scene);a.frustum=new e.OrthographicOffCenterFrustum;const[c,u]=this.config.lonLat,g=e.Cartesian3.fromDegrees(c,u,this.config.baseHeight),i=e.Transforms.eastNorthUpToFixedFrame(g),d=a.frustum;d.near=.01,d.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),d.left=-this.config.dimensions.x/2,d.right=this.config.dimensions.x/2,d.bottom=-this.config.dimensions.y/2,d.top=this.config.dimensions.y/2;const S=e.Matrix4.getColumn(i,2,new e.Cartesian3);e.Cartesian3.negate(S,S);const F=e.Matrix4.getColumn(i,1,new e.Cartesian3),E=e.Matrix4.getColumn(i,0,new e.Cartesian3),O=e.Cartesian3.multiplyByScalar(S,-d.far,new e.Cartesian3);return a.position=e.Cartesian3.add(g,O,new e.Cartesian3),a.direction=S,a.up=F,a.right=E,a}destroy(){var a,c;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(u=>{u&&this.viewer.scene.primitives.remove(u)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(u=>{var g;u&&!((g=u.isDestroyed)!=null&&g.call(u))&&u.destroy()}),this.textures={},this._heightMap&&!((c=(a=this._heightMap).isDestroyed)!=null&&c.call(a))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(a,c){const u=this.viewer.scene.context,g=r(this.viewer.scene),i=u.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>a},owner:this}),d=g.framebuffer;g.framebuffer=c,i.execute(u,g),g.framebuffer=d}_getDepthRenderCommands(){var u,g;const a=[],c=n(this.viewer.scene);for(let i=0;i<c.length;++i){const d=c[i],S=(u=d==null?void 0:d.commands)==null?void 0:u[2],F=((g=d==null?void 0:d.indices)==null?void 0:g[2])??(S==null?void 0:S.length)??0;S&&F>0&&a.push(...S.slice(0,F))}return a}_processHeightMapShaders(){const a=[],c=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),u=e.Matrix4.inverse(c,new e.Matrix4),g=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(d=>{var U;if(!((U=d==null?void 0:d.shaderProgram)!=null&&U.fragmentShaderSource)||!d.uniformMap)return;const S=Object.prototype.hasOwnProperty.call(d.uniformMap,"u_inverseEnuMatrix"),F=d.uniformMap.u_inverseEnuMatrix,E=d.shaderProgram,O=new e.Matrix4;d.uniformMap.u_inverseEnuMatrix=()=>{const I=d.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(u,I,O)},d.heightMap_ShaderProgram||(d.heightMap_ShaderProgram=this._getDerivedShaderProgram(g.context,d.shaderProgram,"Height_Map")),d.shaderProgram=d.heightMap_ShaderProgram,a.push({command:d,hadInverseUniform:S,originalInverseUniform:F,originalShaderProgram:E})}),a}_restoreHeightMapShaders(a){a.forEach(c=>{const{command:u,hadInverseUniform:g,originalInverseUniform:i,originalShaderProgram:d}=c;u!=null&&u.uniformMap&&(u.shaderProgram=d,g?u.uniformMap.u_inverseEnuMatrix=i:delete u.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(a,c,u){let g=a.shaderCache.getDerivedShaderProgram(c,u);return e.defined(g)||(g=this._createHeightMapShaderProgram(a,c,u)),g}_createHeightMapShaderProgram(a,c,u){const g=this._modifyFragmentShader(c.fragmentShaderSource);return a.shaderCache.createDerivedShaderProgram(c,u,{vertexShaderSource:c.vertexShaderSource,fragmentShaderSource:g,attributeLocations:c._attributeLocations})}_modifyFragmentShader(a){const c=a.sources.map(u=>e.ShaderSource.replaceMain(u,"czm_heightMap_main"));return c.push(`
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
            }`]})}};er(v,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let z=v;const w=(k=[0,0,0],a=[0,0,0],c=[1,1,1])=>{const u=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(a[0]))),g=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(a[1]))),i=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(a[2])));k instanceof e.Cartesian3||(k=e.Cartesian3.fromDegrees(...k));const d=e.Transforms.eastNorthUpToFixedFrame(k);e.Matrix4.multiply(d,u,d),e.Matrix4.multiply(d,g,d),e.Matrix4.multiply(d,i,d);const S=e.Matrix4.fromScale(new e.Cartesian3(...c));return e.Matrix4.multiply(d,S,new e.Matrix4)},x=`
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
    `;function y(){return new e.PostProcessStage({fragmentShader:x})}return{FluidRenderer:z,createSkyEffect:y}}const Ai={key:0,class:"fluid-root"},Di={class:"fluid-panel"},ki={class:"panel-actions"},Ri=["disabled"],Ii={key:0,class:"selected-text"},Ni={class:"param-list"},Oi={class:"param-row"},zi={class:"param-row"},Bi={class:"param-row"},Ui={key:0,class:"param-row"},Hi=["min","max","step"],Wi=["min","max","step"],$i={class:"param-row color-row"},ur=1024,Lt=1e4,dr=1200,Gi=100,qi=.01,ji=.03,Xi=60,zt=64,Vi=160,Yi={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:r}){const n=e,l=r,s=qt(),p=Q(10),_=Q(20),L=Q(3),T=Q("#0d4fa3"),A=Q(null),C=Q(null),z=Q(null),w=Q(!1),x=Q(!1),y=Q(null),v=Q(null);let k=null,a=null,c=null,u=null,g=null,i=null,d=0;const S=Le(()=>!Number.isFinite(y.value)||!Number.isFinite(v.value)?"":`经度 ${y.value.toFixed(6)} / 纬度 ${v.value.toFixed(6)}`),F=Le(()=>Number.isFinite(C.value)&&Number.isFinite(z.value)),E=Le(()=>{if(!F.value)return 1;const f=Math.abs(z.value-C.value);return Math.max(f/1e3,.01)});we([p,_,L,T],Ie),we(A,$e),we(()=>n.params,f=>{U(f||{})},{deep:!0,immediate:!0}),we([w,x,S,A,C,z],I,{immediate:!0}),Ur(()=>{he(!0)});function O(){var R,X;const f=(R=n.getViewer)==null?void 0:R.call(n),m=((X=n.getCesium)==null?void 0:X.call(n))||window.Cesium;if(!f||!m)return s.warning("Cesium 场景尚未就绪。"),null;if(!k){const ee=Ei(m);k=ee.FluidRenderer,a=ee.createSkyEffect}return{viewer:f,Cesium:m}}function U(f){Number.isFinite(Number(f.threshold))&&(p.value=Number(f.threshold)),Number.isFinite(Number(f.blend))&&(_.value=Number(f.blend)),Number.isFinite(Number(f.lightStrength))&&(L.value=Number(f.lightStrength)),Je(f.waterColor)&&(T.value=f.waterColor),Number.isFinite(Number(f.waterLevel))&&(A.value=Number(f.waterLevel))}function I(){l("state-change",{isPicking:w.value,hasFluid:x.value,selectedText:S.value,waterLevel:A.value,waterLevelMin:C.value,waterLevelMax:z.value})}function J(){const f=O();if(!f)return;const{viewer:m,Cesium:R}=f;Z(),M(m,R),w.value=!0,c=new R.ScreenSpaceEventHandler(m.scene.canvas),c.setInputAction(X=>{$(m,R,X.position)},R.ScreenSpaceEventType.LEFT_CLICK)}async function $(f,m,R){var Ge,Qe;const X=We(f,R);if(!X){s.warning("未选中可用地形位置。");return}const ee=++d;Z();const ce=m.Cartographic.fromCartesian(X),j=m.Math.toDegrees(ce.longitude),V=m.Math.toDegrees(ce.latitude),ue=Number(ce.height),pe=Number.isFinite(ue)?ue:0,Ne=new m.Cartesian3(Lt,Lt,0);Dr("正在请求模拟范围高度数据...");try{ne();const qe=Number(p.value)||0,ht=Number(_.value)||0,ot=Number(L.value)||0,o=await te(f,m,{lon:j,lat:V,centerHeight:pe,dimensions:Ne}),b=N(o,pe),H=b.baseHeight,W=b.depth,ae=D(b,pe),ve=new m.Cartesian3(Lt,Lt,W);if(ee!==d)return;C.value=b.minHeight,z.value=b.maxHeight,A.value=ae,o||s.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),u=new k(f,{lonLat:[j,V],width:ur,height:ur,dimensions:ve,baseHeight:H,minHeight:b.minHeight,maxHeight:b.maxHeight,heightMapSource:o,waterColor:K(m,T.value),customParams:new m.Cartesian4(qe,ht,ot,10),fluidParams:new m.Cartesian4(.9+ot/10*.099,Math.min(1,ht/50),qe/5e4,de(ae,b))}),y.value=j,v.value=V,x.value=!0,(Qe=(Ge=f.scene).requestRender)==null||Qe.call(Ge),s.success("水体流体已创建。")}catch(qe){s.error("水体流体创建失败",qe),s.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{kr()}}async function te(f,m,R){const X=f==null?void 0:f.terrainProvider,ee=re(R.dimensions);if(!X)return null;if(m.EllipsoidTerrainProvider&&X instanceof m.EllipsoidTerrainProvider)return Re(ee);if(typeof m.sampleTerrain!="function"&&typeof m.sampleTerrainMostDetailed!="function")return null;try{return await oe(f,m,R,ee)}catch(ce){if(ee<=zt)throw ce;return oe(f,m,R,zt)}}async function oe(f,m,R,X){const ee=Me(m,R,X),ce=await Fe(m,f.terrainProvider,ee);return Ve(ce||ee,{size:X})}function re(f){const m=Math.max(Number(f==null?void 0:f.x)||0,Number(f==null?void 0:f.y)||0),R=Math.ceil(m/Xi)+1;return ge(R,zt,Vi)}function ge(f,m,R){return Math.max(m,Math.min(R,Math.round(f)))}function Me(f,{lon:m,lat:R,centerHeight:X,dimensions:ee},ce){const j=f.Cartesian3.fromDegrees(m,R,X),V=f.Transforms.eastNorthUpToFixedFrame(j),ue=[],pe=Math.max(1,ce-1);for(let Ne=0;Ne<ce;Ne++){const Qe=(.5-Ne/pe)*ee.y;for(let qe=0;qe<ce;qe++){const ot=(qe/pe-.5)*ee.x,o=new f.Cartesian3(ot,Qe,0),b=f.Matrix4.multiplyByPoint(V,o,new f.Cartesian3);ue.push(f.Cartographic.fromCartesian(b))}}return ue}async function Fe(f,m,R){const X=Xe(m);return Number.isInteger(X)&&typeof f.sampleTerrain=="function"?f.sampleTerrain(m,X,R):typeof f.sampleTerrainMostDetailed=="function"?f.sampleTerrainMostDetailed(m,R):f.sampleTerrain(m,10,R)}function Xe(f){const m=Number(f==null?void 0:f._bottomLevel);return Number.isFinite(m)?Math.max(0,m-1):null}function Ve(f,{size:m}){var ee;const R=B(f);if(!R)return null;const X=new Float32Array(m*m*4);for(let ce=0;ce<m*m;ce++){const j=Number((ee=f[ce])==null?void 0:ee.height),V=ce*4;X[V]=Number.isFinite(j)?De(j,R.minHeight,R.maxHeight):R.minHeight,X[V+1]=0,X[V+2]=0,X[V+3]=1}return{width:m,height:m,arrayBufferView:X,minHeight:R.minHeight,maxHeight:R.maxHeight}}function Re(f){return{width:f,height:f,arrayBufferView:new Float32Array(f*f*4),minHeight:0,maxHeight:0}}function B(f){let m=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;for(const X of f||[]){const ee=Number(X==null?void 0:X.height);Number.isFinite(ee)&&(m=Math.min(m,ee),R=Math.max(R,ee))}return!Number.isFinite(m)||!Number.isFinite(R)?null:{minHeight:m,maxHeight:R}}function N(f,m){const R=Number(f==null?void 0:f.minHeight),X=Number(f==null?void 0:f.maxHeight);if(Number.isFinite(R)&&Number.isFinite(X)){const j=Number(m),V=Number.isFinite(j)?Math.min(R,X,j):Math.min(R,X),ue=Number.isFinite(j)?Math.max(R,X,j):Math.max(R,X),pe=Math.max(ue-V,qi);return{baseHeight:V,depth:pe,minHeight:V,maxHeight:V+pe}}const ee=Number(m),ce=Number.isFinite(ee)?ee-Gi:0;return{baseHeight:ce,depth:dr,minHeight:ce,maxHeight:ce+dr}}function D(f,m){const R=f.minHeight+f.depth*ji,X=Number(m),ee=Number.isFinite(X)?X:R;return De(ee,f.minHeight,f.maxHeight)}function de(f,m){const R=m.maxHeight-m.minHeight;return!Number.isFinite(R)||R<=0?0:De((f-m.minHeight)/R,0,1)}function Ue(){return!Number.isFinite(C.value)||!Number.isFinite(z.value)?null:{minHeight:Math.min(C.value,z.value),maxHeight:Math.max(C.value,z.value)}}function K(f,m){const R=He(m)||He("#0d4fa3");return new f.Cartesian3(R.red,R.green,R.blue)}function be(){var R;const f=He(T.value),m=(R=u==null?void 0:u.config)==null?void 0:R.waterColor;!f||!m||(m.x=f.red,m.y=f.green,m.z=f.blue)}function Je(f){return typeof f=="string"&&/^#[0-9a-f]{6}$/i.test(f)}function He(f){return Je(f)?{red:Number.parseInt(f.slice(1,3),16)/255,green:Number.parseInt(f.slice(3,5),16)/255,blue:Number.parseInt(f.slice(5,7),16)/255}:null}function De(f,m,R){return Math.max(m,Math.min(R,f))}function We(f,m){if(!m)return null;if(f.scene.pickPositionSupported&&typeof f.scene.pickPosition=="function"){const X=f.scene.pickPosition(m);if(X)return X}const R=f.camera.getPickRay(m);return R?f.scene.globe.pick(R,f.scene):null}function Ie(){var X,ee,ce;if(!(u!=null&&u.config))return;const f=Number(p.value)||0,m=Number(_.value)||0,R=Number(L.value)||0;u.config.customParams&&(u.config.customParams.x=f,u.config.customParams.y=m,u.config.customParams.z=R),u.config.fluidParams&&(u.config.fluidParams.x=.9+R/10*.099,u.config.fluidParams.y=Math.min(1,m/50),u.config.fluidParams.z=f/5e4),be(),(ce=(ee=(X=u.viewer)==null?void 0:X.scene)==null?void 0:ee.requestRender)==null||ce.call(ee)}function $e(){var ee,ce,j,V;if(!((ee=u==null?void 0:u.config)!=null&&ee.fluidParams))return;const f=Ue(),m=Number(A.value);if(!f||!Number.isFinite(m))return;const R=De(m,f.minHeight,f.maxHeight);if(R!==m){A.value=R;return}const X=de(R,f);typeof u.setInitialWaterLevel=="function"?u.setInitialWaterLevel(X):(u.config.fluidParams.w=X,(V=(j=(ce=u.viewer)==null?void 0:ce.scene)==null?void 0:j.requestRender)==null||V.call(j))}function M(f,m){var R,X;if(!i){const ee=f.scene;i={shadows:f.shadows,resolutionScale:f.resolutionScale,msaaSamples:ee.msaaSamples,depthTestAgainstTerrain:ee.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:ee.logarithmicDepthBuffer,highDynamicRange:ee.highDynamicRange,fogEnabled:(R=ee.fog)==null?void 0:R.enabled,showGroundAtmosphere:ee.globe.showGroundAtmosphere,skyAtmosphereShow:(X=ee.skyAtmosphere)==null?void 0:X.show,enableLighting:ee.globe.enableLighting}}f.shadows=!0,f.resolutionScale=1,f.scene.msaaSamples=4,f.scene.globe.depthTestAgainstTerrain=!0,f.scene.logarithmicDepthBuffer=!0,f.scene.highDynamicRange=!0,f.scene.fog&&(f.scene.fog.enabled=!0),f.scene.globe.showGroundAtmosphere=!0,f.scene.skyAtmosphere&&(f.scene.skyAtmosphere.show=!0),f.scene.globe.enableLighting=!0,!g&&a&&(g=a(m),f.scene.postProcessStages.add(g))}function P(f){if(!f||!i)return;const m=f.scene;f.shadows=i.shadows,f.resolutionScale=i.resolutionScale,i.msaaSamples!==void 0&&(m.msaaSamples=i.msaaSamples),m.globe.depthTestAgainstTerrain=i.depthTestAgainstTerrain,m.logarithmicDepthBuffer=i.logarithmicDepthBuffer,m.highDynamicRange=i.highDynamicRange,m.fog&&i.fogEnabled!==void 0&&(m.fog.enabled=i.fogEnabled),m.globe.showGroundAtmosphere=i.showGroundAtmosphere,m.skyAtmosphere&&i.skyAtmosphereShow!==void 0&&(m.skyAtmosphere.show=i.skyAtmosphereShow),m.globe.enableLighting=i.enableLighting,i=null}function q(){he(!1),s.success("水体流体已清除。")}function Z(){c&&(c.destroy(),c=null),w.value=!1}function ne(){if(u){try{u.destroy()}catch{}u=null,x.value=!1}}function he(f){var R,X,ee;const m=(R=n.getViewer)==null?void 0:R.call(n);if(d+=1,Z(),ne(),y.value=null,v.value=null,A.value=null,C.value=null,z.value=null,m&&g){try{m.scene.postProcessStages.remove(g)}catch{}g=null}f&&m&&P(m),(ee=(X=m==null?void 0:m.scene)==null?void 0:X.requestRender)==null||ee.call(X)}function ye(){he(!0),l("close")}return t({startPickHeightMap:J,clearFluid:q}),(f,m)=>e.headless?le("",!0):(G(),Y("div",Ai,[h("div",Di,[h("div",{class:"panel-head"},[m[9]||(m[9]=h("span",{class:"panel-title"},"水体流体",-1)),h("button",{class:"panel-close",title:"关闭",onClick:ye}," × ")]),h("div",ki,[h("button",{class:Ce(["action-btn primary",{active:w.value}]),onClick:J},se(w.value?"等待选点":"捕捉高度图"),3),h("button",{class:"action-btn",disabled:!x.value&&!w.value,onClick:q}," 清除 ",8,Ri)]),S.value?(G(),Y("div",Ii,se(S.value),1)):le("",!0),h("div",Ni,[h("label",Oi,[m[10]||(m[10]=h("span",null,"阈值",-1)),_e(h("input",{"onUpdate:modelValue":m[0]||(m[0]=R=>p.value=R),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Ae,p.value,void 0,{number:!0}]]),_e(h("input",{"onUpdate:modelValue":m[1]||(m[1]=R=>p.value=R),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Ae,p.value,void 0,{number:!0}]])]),h("label",zi,[m[11]||(m[11]=h("span",null,"混合",-1)),_e(h("input",{"onUpdate:modelValue":m[2]||(m[2]=R=>_.value=R),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Ae,_.value,void 0,{number:!0}]]),_e(h("input",{"onUpdate:modelValue":m[3]||(m[3]=R=>_.value=R),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Ae,_.value,void 0,{number:!0}]])]),h("label",Bi,[m[12]||(m[12]=h("span",null,"光强",-1)),_e(h("input",{"onUpdate:modelValue":m[4]||(m[4]=R=>L.value=R),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Ae,L.value,void 0,{number:!0}]]),_e(h("input",{"onUpdate:modelValue":m[5]||(m[5]=R=>L.value=R),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Ae,L.value,void 0,{number:!0}]])]),F.value?(G(),Y("label",Ui,[m[13]||(m[13]=h("span",null,"水位",-1)),_e(h("input",{"onUpdate:modelValue":m[6]||(m[6]=R=>A.value=R),type:"range",min:C.value,max:z.value,step:E.value},null,8,Hi),[[Ae,A.value,void 0,{number:!0}]]),_e(h("input",{"onUpdate:modelValue":m[7]||(m[7]=R=>A.value=R),class:"number-input",type:"number",min:C.value,max:z.value,step:E.value},null,8,Wi),[[Ae,A.value,void 0,{number:!0}]])])):le("",!0),h("label",$i,[m[14]||(m[14]=h("span",null,"水色",-1)),_e(h("input",{"onUpdate:modelValue":m[8]||(m[8]=R=>T.value=R),class:"color-input",type:"color"},null,512),[[Ae,T.value]]),h("span",{class:"color-swatch",style:Ar({backgroundColor:T.value})},null,4)])])])]))}},Ki=_t(Yi,[["__scopeId","data-v-9ecdafb8"]]),Xt="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Zi=`${Xt}Cesium.js`,Ji=`${Xt}Widgets/widgets.css`;async function Qi({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Xt),await to(Ji,"cesium-widgets-style"),await eo(Zi,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Pt(t,e),t}function Pt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function eo(e,t){return new Promise((r,n)=>{const l=document.getElementById(t);if(l){if(l.getAttribute("data-loaded")==="true"){r();return}l.addEventListener("load",()=>r(),{once:!0}),l.addEventListener("error",()=>n(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const s=document.createElement("script");s.id=t,s.src=e,s.async=!0,s.onload=()=>{s.setAttribute("data-loaded","true"),r()},s.onerror=()=>n(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(s)})}function to(e,t){return new Promise((r,n)=>{if(document.getElementById(t)){r();return}const s=document.createElement("link");s.id=t,s.rel="stylesheet",s.href=e,s.onload=()=>r(),s.onerror=()=>n(new Error(`样式加载失败: ${e}`)),document.head.appendChild(s)})}const ro="Asia/Shanghai",no="UTC+8",ao=new Intl.DateTimeFormat("zh-CN",{timeZone:ro,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function io(e,t){var r,n,l,s,p,_,L;if(!(!e||!(t!=null&&t.JulianDate))){if((r=e.animation)!=null&&r.viewModel&&(e.animation.viewModel.dateFormatter=(...T)=>so(e,t,...T),e.animation.viewModel.timeFormatter=(...T)=>lo(e,t,...T)),e.timeline){const T=(...A)=>co(e,t,...A);e.timeline.makeLabel=T,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=T),(l=(n=e.timeline).updateFromClock)==null||l.call(n),(p=(s=e.timeline).zoomTo)==null||p.call(s,e.clock.startTime,e.clock.stopTime)}(L=(_=e.scene).requestRender)==null||L.call(_)}}function Vt(e,t,...r){var _;const n=r.find(oo)||((_=e==null?void 0:e.clock)==null?void 0:_.currentTime);if(!n)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const l=t.JulianDate.toDate(n),s=ao.formatToParts(l),p=Object.fromEntries(s.filter(({type:L})=>L!=="literal").map(({type:L,value:T})=>[L,T]));return{year:p.year||"0000",month:p.month||"01",day:p.day||"01",hour:p.hour||"00",minute:p.minute||"00",second:p.second||"00"}}function oo(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function so(e,t,...r){const{year:n,month:l,day:s}=Vt(e,t,...r);return`${n}-${l}-${s}`}function lo(e,t,...r){const{hour:n,minute:l,second:s}=Vt(e,t,...r);return`${n}:${l}:${s} ${no}`}function co(e,t,...r){const{month:n,day:l,hour:s,minute:p}=Vt(e,t,...r);return`${n}-${l} ${s}:${p}`}function uo({getViewer:e}){let t=null,r=null;function n(){var _;const p=e==null?void 0:e();if(p&&((_=p._cesiumWidget)!=null&&_._creditContainer&&(p._cesiumWidget._creditContainer.style.display="none"),l(),t=setInterval(()=>{const L=document.querySelector(".cesium-credit-container");L&&L.innerHTML.length>0&&(L.innerHTML="",L.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const L=document.createElement("style");L.id="cesium-credit-override",L.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(L),r=L}}function l(){var L;const p=e==null?void 0:e();if(!p)return;(L=p._cesiumWidget)!=null&&L._creditContainer&&(p._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",p._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(T=>{T.style.cssText="display: none !important; visibility: hidden !important;",T.innerHTML=""}),p.scene&&p.scene.frameState&&p.scene.frameState.creditDisplay&&(p.scene.frameState.creditDisplay.hasCredits=()=>!1,p.scene.frameState.creditDisplay.destroy=()=>{})}function s(){t&&(clearInterval(t),t=null),r&&(r.remove(),r=null)}return{installCreditHider:n,cleanupCreditHider:s}}const Bt="经度: --, 纬度: --, 海拔: --米";function ho({getViewer:e,getCesium:t,onCoordinatePick:r}){let n=null,l=null,s=null;const p=Q("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function _(){const w=e==null?void 0:e(),x=t==null?void 0:t();!w||!x||(z(),l=w.scene.canvas,n=new x.ScreenSpaceEventHandler(l),s=()=>{p.value=Bt},l.addEventListener("mouseleave",s),n.setInputAction(y=>{L(y.endPosition,w,x)},x.ScreenSpaceEventType.MOUSE_MOVE),n.setInputAction(y=>{const v=y.endPosition,k=y.startPosition;if(!x.defined(w.terrainProvider))return;const a=w.scene.globe.ellipsoid;if(!w.camera.pickEllipsoid(k,a)){const u=w.camera;u.rotate(x.Cartesian3.UNIT_X,-.002*(v.y-k.y)),u.rotate(x.Cartesian3.UNIT_Y,-.002*(v.x-k.x))}},x.ScreenSpaceEventType.RIGHT_DRAG),n.setInputAction(()=>{},x.ScreenSpaceEventType.RIGHT_DOWN),n.setInputAction(()=>{},x.ScreenSpaceEventType.RIGHT_UP))}function L(w,x,y){const v=T(w,x,y);if(!v){p.value=Bt;return}const k=y.Cartographic.fromCartesian(v);if(!k||!Number.isFinite(k.longitude)||!Number.isFinite(k.latitude)){p.value=Bt;return}const a=y.Math.toDegrees(k.longitude).toFixed(6),c=y.Math.toDegrees(k.latitude).toFixed(6),u=(Number.isFinite(k.height)?k.height:0).toFixed(2);p.value=`经度: ${a}, 纬度: ${c}, 海拔: ${u}米`,typeof r=="function"&&r({lng:Number(a),lat:Number(c),height:Number(u)})}function T(w,x,y){if(!w)return null;const v=x.scene,k=A(w,v,y);if(k)return k;const a=x.camera.getPickRay(w);if(a){const u=v.globe.pick(a,v);if(C(u))return u}const c=x.camera.pickEllipsoid(w,v.globe.ellipsoid);return C(c)?c:null}function A(w,x,y){if(!x.pickPositionSupported||typeof x.pickPosition!="function")return null;const v=typeof x.pick=="function"?x.pick(w):null;if(!y.defined(v))return null;const k=x.pickPosition(w);return C(k)?k:null}function C(w){return!!w&&Number.isFinite(w.x)&&Number.isFinite(w.y)&&Number.isFinite(w.z)}function z(){s&&l&&(l.removeEventListener("mouseleave",s),s=null),l=null,n&&(n.destroy(),n=null)}return{coordinateDisplay:p,setupInteractions:_,cleanupInteractions:z}}function hr(e,t=""){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r??t}catch{return t}}function fo(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function ut(e,t){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r==null?t:r==="true"}catch{return t}}function vt(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function fr(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:r,Ellipsoid:n,Resource:l,HeightmapTerrainData:s,Rectangle:p,TileAvailability:_,CustomHeightmapTerrainProvider:L}=e;function T(w,x,y,v,k,a){const c=w.tileXYToRectangle(y,v,k);return t(p.intersection(c,x,a))}function A(w){const x=[[[0,0,1,0]]],y=new _(w.tilingScheme,19);for(let v=0;v<x.length;v++){const k=x[v];for(let a=0;a<k.length;a++){const c=k[a];y.addAvailableTileRange(v,c[0],c[1],c[2],c[3])}}return y}function C(w,x,y,v,k){const a=new s({buffer:w._transformBuffer(x),width:w._width,height:w._height,childTileMask:w._getChildTileMask(v,k,y),structure:w._terrainDataStructure});return a._skirtHeight=6e3,w.availability.addAvailableTileRange(y,v,k,v,k),a}class z extends L{constructor(x={}){if(super({...x,ellipsoid:n.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(x.url))throw new r("options.url is required.");this._dataType=x.dataType??"int16",this._url=x.url,this._subdomains=x.subdomains,this._token=x.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=A(this)}get availability(){return this._availability}requestTileGeometry(x,y,v,k){if(v>=this._bottomLevel)return Promise.reject(new Error(`Level ${v} is outside supported range.`));if(v<this._topLevel)return Promise.resolve(new s({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(x,y,v),structure:this._terrainDataStructure}));let a=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const u=this._subdomains[(x+y)%this._subdomains.length];a=a.replace("{s}",u)}a=a.replace("{token}",this._token).replace("{x}",x).replace("{y}",y).replace("{z}",v+1);const c=l.fetchArrayBuffer({url:a,request:k});if(c)return c.then(u=>u.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):tn.inflate(u)).then(u=>C(this,u,v,x,y))}getTileDataAvailable(x,y,v){return v<this._bottomLevel}_transformBuffer(x){let y=2;this._dataType==="float"&&(y=4);const v=x;if(v.length!==22500*y)return null;const k=new ArrayBuffer(y),a=new DataView(k),c=this._width,u=this._height,g=new Uint8Array(c*u*4);for(let i=0;i<u;i++)for(let d=0;d<c;d++){const S=Math.floor(149*i/(u-1)),F=Math.floor(149*d/(c-1)),E=y*(150*S+F);let O;y===4?(a.setInt8(0,v[E]),a.setInt8(1,v[E+1]),a.setInt8(2,v[E+2]),a.setInt8(3,v[E+3]),O=a.getFloat32(0,!0)):O=v[E]+256*v[E+1],(O>1e4||O<-2e3)&&(O=0);const U=(O+1e3)/.001,I=4*(i*c+d);g[I]=U/65536,g[I+1]=(U-256*g[I]*256)/256,g[I+2]=U-256*g[I]*256-256*g[I+1],g[I+3]=255}return g}_getVHeightBuffer(){let x=this._vHeightBuffer;if(!t(x)){x=new Uint8ClampedArray(this._width*this._height*4);for(let y=0;y<this._width*this._height*4;)x[y++]=15,x[y++]=66,x[y++]=64,x[y++]=255;this._vHeightBuffer=x}return x}_getChildTileMask(x,y,v){const k=new p,a=this._tilingScheme,c=this._rectangles,u=a.tileXYToRectangle(x,y,v);let g=0;for(let i=0;i<c.length&&g!==15;i++){const d=c[i];if(d.maxLevel<=v)continue;const S=d.rectangle,F=p.intersection(S,u,k);t(F)&&(T(a,S,2*x,2*y,v+1,k)&&(g|=4),T(a,S,2*x+1,2*y,v+1,k)&&(g|=8),T(a,S,2*x,2*y+1,v+1,k)&&(g|=1),T(a,S,2*x+1,2*y+1,v+1,k)&&(g|=2))}return g}}return z}function mo({getViewer:e,getCesium:t,activeBasemap:r,applyBasemap:n,resolvePresetLayerIds:l,message:s,validationTimeoutMs:p=5e3,circuitBreakThreshold:_=3}){const L=new Map,T=new Set,A={value:!1};let C=null,z=[],w=[];function x(g,i={}){return g?T.has(g)&&!i.forceReload?(A.value=!0,!1):n(g,i)?(y(g),!0):(v(g),!1):!1}function y(g){var U,I;a();const i=e==null?void 0:e();if(!(i!=null&&i.imageryLayers))return;const d=l(g),S=[];for(let J=0;J<i.imageryLayers.length;J++){const $=i.imageryLayers.get(J);(U=$==null?void 0:$.imageryProvider)!=null&&U._descriptorId&&d.includes($.imageryProvider._descriptorId)&&S.push($)}if(!S.length)return;z=S;let F=!1;const E=()=>{F=!0,a(),L.delete(g),T.has(g)&&(T.delete(g),A.value=T.size>0)},O=J=>{F||(v(g),a())};for(const J of z){const $=J.imageryProvider;if($!=null&&$.errorEvent&&($.errorEvent.addEventListener(O),w.push(()=>$.errorEvent.removeEventListener(O))),$!=null&&$.ready){E();return}(I=$==null?void 0:$.readyPromise)!=null&&I.then&&$.readyPromise.then(E).catch(O)}C=setTimeout(()=>{F||v(g)},p)}function v(g){const i=(L.get(g)||0)+1;L.set(g,i),i>=_&&(T.add(g),A.value=!0,k(g))}function k(g){var d,S,F,E,O;const i="custom_China_Blender_preset_2";if(g===i){const U="imagery_tianditu_preset";T.has(U)?(S=s==null?void 0:s.error)==null||S.call(s,"所有底图均加载失败，请检查网络",{closable:!0}):((d=s==null?void 0:s.warning)==null||d.call(s,"底图加载失败，已降级到天地图影像",{closable:!0}),r.value=U);return}if(!T.has(i))(F=s==null?void 0:s.warning)==null||F.call(s,"底图加载失败，已降级到默认底图",{closable:!0}),r.value=i;else{const U="imagery_tianditu_preset";T.has(U)?(O=s==null?void 0:s.error)==null||O.call(s,"所有底图均加载失败，请检查网络",{closable:!0}):((E=s==null?void 0:s.warning)==null||E.call(s,"底图加载失败，已降级到天地图影像",{closable:!0}),r.value=U)}}function a(){C&&(clearTimeout(C),C=null);for(const g of w)try{g()}catch{}w=[],z=[]}function c(){L.clear(),T.clear(),A.value=!1,a()}function u(){a(),L.clear(),T.clear(),A.value=!1}return{switchBasemap:x,resetCircuitBreaker:c,isCircuitOpen:A,cleanup:u}}const pt=["0","1","2","3","4","5","6","7"],gt="https://t{s}.tianditu.gov.cn/",po="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",go=96188,yt="custom-xyz",mr="webgis_custom_basemap_url",vo="cesium_tdt_label_layer_visible",pr="cesium_tdt_boundary_layer_visible",gr="cesium_tdt_text_label_layer_visible",vr="cesium_osm_buildings_visible",yr="cesium_google_photorealistic_3d_tiles_visible";function yo(){return rn.map(e=>({...e,description:bo(e.value),source:"preset"}))}function bo(e){const t=bt(e);if(!t.length)return"复合底图";const r=t.map(n=>{const l=jt(n);return l?l.name:n});return r.slice(0,3).join(" + ")+(r.length>3?" ...":"")}const br=yo(),_r=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function _o({getViewer:e,getCesium:t,message:r,backendBaseUrl:n,tiandituToken:l,cesiumIonToken:s}){let p=null,_=null,L=null,T=null,A=0,C=null,z=null,w=0,x=0,y=[];const v=()=>xr(l),k=()=>xr(s),a=[],c=Q([]),u=new Map,g=new Map,i=new Map,d=new Map,S="cesium_custom_xyz_basemap_url",F=Q(sr),E=Q("tianditu"),O=Q(hr(mr,"")||hr(S,"")),U=ut(vo,!1),I=Q(ut(pr,U??!1)),J=Q(ut(gr,U??!1)),$=Q(ut(vr,!1)),te=Q(ut(yr,!1)),oe=Le(()=>[...br.map(o=>o.value!=="custom"?o:{...o,description:O.value?O.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!O.value}),...c.value]),re=mo({getViewer:e,getCesium:t,activeBasemap:F,applyBasemap:ce,resolvePresetLayerIds:bt,message:r}),ge=Le(()=>re.isCircuitOpen.value),Me=Le(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:I.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:J.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:$.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:te.value}]);we(F,o=>{!(e!=null&&e())||!(t!=null&&t())||ce(o)}),we(O,o=>{fo(mr,o)}),we(E,async o=>{!(e!=null&&e())||!(t!=null&&t())||await V(o)}),we(I,o=>{vt(pr,o),M()}),we(J,o=>{vt(gr,o),M()}),we($,o=>{vt(vr,o),he()}),we(te,o=>{vt(yr,o),ye()});function Fe(){const o=t==null?void 0:t();if(!o)return[];u.clear(),g.clear();const b=br.map(W=>{const ae=new o.ProviderViewModel({name:W.label,tooltip:To(W),category:"项目底图",iconUrl:Tr(Lo(W.value),Mo(W.value,W.label)),creationFunction:()=>N(W.value)});return u.set(W.value,ae),g.set(ae,W.value),ae}),H=B();return c.value=H.map((W,ae)=>{const ve=String((W==null?void 0:W.name)||`官方底图 ${ae+1}`).trim(),Se=Po(ve,ae);return u.set(Se,W),g.set(W,Se),{value:Se,label:`官方 · ${ve}`,description:String((W==null?void 0:W.tooltip)||ve),source:"official"}}),[...b,...H]}function Xe(){const o=t==null?void 0:t();return o?(i.clear(),d.clear(),_r.map(b=>{const H=new o.ProviderViewModel({name:b.label,tooltip:b.description||b.label,category:"项目地形",iconUrl:Tr(xo(b.value),So(b.value)),creationFunction:()=>pe(b.value)});return i.set(b.value,H),d.set(H,b.value),H})):[]}function Ve(o=[]){return u.get(F.value)||o[0]}function Re(o=[]){return i.get(E.value)||o[0]}function B(){const o=t==null?void 0:t();if(typeof(o==null?void 0:o.createDefaultImageryProviderViewModels)!="function")return[];try{return o.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function N(o){return bt(o).length>0?D(o):o==="google"?Ue():o===yt?K():de()}function D(o){const b=t==null?void 0:t();if(!b)return[];const H=bt(o);if(!H.length)return de();const W=v(),ae=O.value;return bn(b,H,{tiandituTk:W,customUrl:ae})}function de(){const o=t==null?void 0:t();return[new o.UrlTemplateImageryProvider({url:`${gt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${v()}`,subdomains:pt,tilingScheme:new o.WebMercatorTilingScheme,maximumLevel:18})]}function Ue(){const o=t==null?void 0:t();return[new o.UrlTemplateImageryProvider({url:`${n}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new o.WebMercatorTilingScheme,maximumLevel:20})]}function K(){const o=t==null?void 0:t(),b=wr(O.value);return b.valid?[new o.UrlTemplateImageryProvider({url:b.url,subdomains:b.subdomains,tilingScheme:new o.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(r.warning(b.message,{closable:!0}),de())}function be(){const o=t==null?void 0:t();return new o.UrlTemplateImageryProvider({url:`${gt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${v()}`,subdomains:pt,tilingScheme:new o.WebMercatorTilingScheme,maximumLevel:10})}function Je(){const o=t==null?void 0:t();return new o.UrlTemplateImageryProvider({url:`${gt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${v()}`,subdomains:pt,tilingScheme:new o.WebMercatorTilingScheme,maximumLevel:18})}function He(){var Pe,ke,et,ft,mt;De();const o=t==null?void 0:t(),b=(ke=(Pe=e==null?void 0:e())==null?void 0:Pe.baseLayerPicker)==null?void 0:ke.viewModel;if(!b||!((et=o==null?void 0:o.knockout)!=null&&et.getObservable))return;const H=o.knockout.getObservable(b,"selectedImagery"),W=o.knockout.getObservable(b,"selectedTerrain"),ae=[],ve=(ft=H==null?void 0:H.subscribe)==null?void 0:ft.call(H,st=>{const Oe=g.get(st);Oe&&(F.value!==Oe&&(F.value=Oe),$e())}),Se=(mt=W==null?void 0:W.subscribe)==null?void 0:mt.call(W,st=>{const Oe=d.get(st);Oe&&(E.value!==Oe&&(E.value=Oe),ue(Oe))});ve&&ae.push(ve),Se&&ae.push(Se),y=ae}function De(){y.forEach(o=>{var b;return(b=o==null?void 0:o.dispose)==null?void 0:b.call(o)}),y=[]}function We(){return M(),he(),ye(),!0}function Ie(){const o=e==null?void 0:e();if(o!=null&&o.imageryLayers)for(;a.length;){const b=a.pop();try{o.imageryLayers.remove(b,!0)}catch{}}}function $e(){var o,b,H;M(),he(),ye(),(H=(b=(o=e==null?void 0:e())==null?void 0:o.scene)==null?void 0:b.requestRender)==null||H.call(b)}function M(){var b,H;const o=e==null?void 0:e();!o||!(t!=null&&t())||(I.value?P():Z(),J.value?q():ne(),(H=(b=o.scene).requestRender)==null||H.call(b))}function P(){var b,H,W,ae;const o=e==null?void 0:e();if(!(o!=null&&o.imageryLayers)||p)return p&&((H=(b=o==null?void 0:o.imageryLayers)==null?void 0:b.raiseToTop)==null||H.call(b,p)),p;try{return p=o.imageryLayers.addImageryProvider(be()),(ae=(W=o.imageryLayers).raiseToTop)==null||ae.call(W,p),p}catch(ve){return r.error("天地图国界线图层加载失败",ve),null}}function q(){var b,H,W,ae;const o=e==null?void 0:e();if(!(o!=null&&o.imageryLayers)||_)return _&&((H=(b=o==null?void 0:o.imageryLayers)==null?void 0:b.raiseToTop)==null||H.call(b,_)),_;try{return _=o.imageryLayers.addImageryProvider(Je()),(ae=(W=o.imageryLayers).raiseToTop)==null||ae.call(W,_),_}catch(ve){return r.error("天地图文字标注图层加载失败",ve),null}}function Z(){const o=e==null?void 0:e();if(!(!p||!(o!=null&&o.imageryLayers))){try{o.imageryLayers.remove(p,!0)}catch{}p=null}}function ne(){const o=e==null?void 0:e();if(!(!_||!(o!=null&&o.imageryLayers))){try{o.imageryLayers.remove(_,!0)}catch{}_=null}}async function he(){var b,H,W;const o=e==null?void 0:e();!((b=o==null?void 0:o.scene)!=null&&b.primitives)||!(t!=null&&t())||($.value?await R():X(),(W=(H=o.scene).requestRender)==null||W.call(H))}async function ye(){var b,H,W;const o=e==null?void 0:e();!((b=o==null?void 0:o.scene)!=null&&b.primitives)||!(t!=null&&t())||(te.value?await f():m(),(W=(H=o.scene).requestRender)==null||W.call(H))}async function f(){var W,ae,ve;const o=e==null?void 0:e(),b=t==null?void 0:t();if(!((W=o==null?void 0:o.scene)!=null&&W.primitives))return null;if(C)return o.scene.globe.show=!1,C;if(z)return z;if(typeof(b==null?void 0:b.createGooglePhotorealistic3DTileset)!="function")return r.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),te.value=!1,null;const H=++w;Pt(b,k()),z=b.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const Se=await z;return H!==w||!te.value?(Sr(Se),null):(C=o.scene.primitives.add(Se),o.scene.globe.show=!1,o.scene.skyAtmosphere.show=!0,(ve=(ae=o.scene).requestRender)==null||ve.call(ae),C)}catch(Se){return H!==w||(te.value=!1,r.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),r.error("Google Photorealistic 3D Tiles 初始化失败",Se)),null}finally{H===w&&(z=null)}}function m(){var b,H,W;const o=e==null?void 0:e();if(w+=1,z=null,!C||!((b=o==null?void 0:o.scene)!=null&&b.primitives)){(H=o==null?void 0:o.scene)!=null&&H.globe&&(o.scene.globe.show=!0);return}try{o.scene.primitives.remove(C)}catch{}C=null,(W=o==null?void 0:o.scene)!=null&&W.globe&&(o.scene.globe.show=!0)}async function R(){var W,ae,ve,Se;const o=e==null?void 0:e(),b=t==null?void 0:t();if(!((W=o==null?void 0:o.scene)!=null&&W.primitives)||L)return L;if(T)return T;if(typeof((ae=b==null?void 0:b.Cesium3DTileset)==null?void 0:ae.fromIonAssetId)!="function"&&typeof(b==null?void 0:b.createOsmBuildingsAsync)!="function")return r.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),$.value=!1,null;const H=++A;Pt(b,k()),await ee(),T=wo(b,{maximumScreenSpaceError:8});try{const Pe=await T;return H!==A||!$.value?(Sr(Pe),null):(L=o.scene.primitives.add(Pe),(Se=(ve=o.scene).requestRender)==null||Se.call(ve),L)}catch(Pe){return H!==A||($.value=!1,r.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),r.error("Cesium OSM 建筑图层初始化失败",Pe)),null}finally{H===A&&(T=null)}}function X(){var b,H,W;const o=e==null?void 0:e();if(A+=1,T=null,!(!L||!((b=o==null?void 0:o.scene)!=null&&b.primitives))){try{o.scene.primitives.remove(L)}catch{}L=null,(W=(H=o.scene).requestRender)==null||W.call(H)}}async function ee(){if(E.value==="cesiumWorld")return!0;E.value="cesiumWorld";const o=await V("cesiumWorld");return o||r.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),o}function ce(o,b={}){var ve,Se,Pe;const H=e==null?void 0:e();if(!H||!(t!=null&&t()))return!1;mn(),Ie();const W=(ve=H.baseLayerPicker)==null?void 0:ve.viewModel,ae=u.get(o);if(W&&ae){if(b.forceReload&&W.selectedImagery===ae){const ke=u.get(sr)||u.get("tianditu");ke&&ke!==ae&&(W.selectedImagery=ke)}return W.selectedImagery!==ae&&(W.selectedImagery=ae),$e(),!0}try{return N(o).forEach(et=>{et&&a.push(H.imageryLayers.addImageryProvider(et))}),M(),(Pe=(Se=H.scene).requestRender)==null||Pe.call(Se),!0}catch(ke){return r.error("地图源切换失败",ke),!1}}function j(){return V(E.value)}async function V(o){var Pe,ke,et,ft,mt,st,Oe,Kt,Zt,Jt,Qt;const b=e==null?void 0:e(),H=t==null?void 0:t();if(!b||!H)return!1;const W=(Pe=b.baseLayerPicker)==null?void 0:Pe.viewModel,ae=i.get(o);if(W&&ae)return W.selectedTerrain!==ae&&(W.selectedTerrain=ae),ue(o),(et=(ke=b.scene).requestRender)==null||et.call(ke),!0;const ve=++x;if(o==="ellipsoid")return b.terrainProvider=new H.EllipsoidTerrainProvider,ue(o),(mt=(ft=b.scene).requestRender)==null||mt.call(ft),!0;if(o==="cesiumWorld")try{const Ye=await Ne();return ve!==x?!1:(b.terrainProvider=Ye,ue(o),(Oe=(st=b.scene).requestRender)==null||Oe.call(st),!0)}catch(Ye){return ve!==x||(b.terrainProvider=new H.EllipsoidTerrainProvider,ue("ellipsoid"),r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",Ye)),!1}if(o==="arcgisWorld")try{const Ye=await Ge();return ve!==x?!1:(b.terrainProvider=Ye,ue(o),(Zt=(Kt=b.scene).requestRender)==null||Zt.call(Kt),!0)}catch(Ye){return ve!==x||(b.terrainProvider=new H.EllipsoidTerrainProvider,ue("ellipsoid"),r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",Ye)),!1}const Se=fr(H);try{return b.terrainProvider=new Se({url:`${gt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:pt,token:v()}),ue(o),(Qt=(Jt=b.scene).requestRender)==null||Qt.call(Jt),!0}catch(Ye){return b.terrainProvider=new H.EllipsoidTerrainProvider,ue("ellipsoid"),r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",Ye),!1}}function ue(o){var H;const b=e==null?void 0:e();(H=b==null?void 0:b.scene)!=null&&H.globe&&(b.scene.globe.depthTestAgainstTerrain=o!=="ellipsoid")}function pe(o){const b=t==null?void 0:t();if(o==="ellipsoid")return new b.EllipsoidTerrainProvider;if(o==="cesiumWorld")return Ne().catch(W=>(r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",W),Qe(o,"ellipsoid"),new b.EllipsoidTerrainProvider));if(o==="arcgisWorld")return Ge().catch(W=>(r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",W),Qe(o,"ellipsoid"),new b.EllipsoidTerrainProvider));const H=fr(b);try{return new H({url:`${gt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:pt,token:v()})}catch(W){return r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",W),new b.EllipsoidTerrainProvider}}async function Ne(){var H,W;const o=t==null?void 0:t();Pt(o,k());const b={requestWaterMask:!1,requestVertexNormals:!0};if(typeof o.createWorldTerrainAsync=="function")return o.createWorldTerrainAsync(b);if(typeof o.createWorldTerrain=="function")return o.createWorldTerrain(b);if(typeof((H=o.CesiumTerrainProvider)==null?void 0:H.fromIonAssetId)=="function")return o.CesiumTerrainProvider.fromIonAssetId(1,b);if((W=o.IonResource)!=null&&W.fromAssetId&&o.CesiumTerrainProvider){const ae=await o.IonResource.fromAssetId(1);return new o.CesiumTerrainProvider({url:ae,...b})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function Ge(){var b;const o=t==null?void 0:t();if(typeof((b=o==null?void 0:o.ArcGISTiledElevationTerrainProvider)==null?void 0:b.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return o.ArcGISTiledElevationTerrainProvider.fromUrl(po)}function Qe(o,b){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{E.value===o&&(E.value=b)},0)}function qe({overlayId:o,value:b}){if(o==="tdt-boundaries"){I.value=!!b;return}if(o==="tdt-text-labels"){J.value=!!b;return}if(o==="cesium-osm-buildings"){$.value=!!b;return}o==="google-photorealistic-3d-tiles"&&(te.value=!!b)}function ht({url:o}){const b=String(o||"").trim(),H=wr(b);if(!H.valid){r.warning(H.message,{closable:!0});return}if(O.value=b,F.value===yt){ce(yt,{forceReload:!0})&&r.success("已加载自定义 XYZ 图源");return}F.value=yt,r.success("已切换到自定义 XYZ 图源")}function ot(){Ie(),Z(),ne(),X(),m(),De()}return{activeBasemap:F,activeTerrain:E,customXyzBasemapUrl:O,basemapOptions:oe,terrainOptions:_r,overlayOptions:Me,createImageryProviderViewModels:Fe,createTerrainProviderViewModels:Xe,getSelectedImageryProviderViewModel:Ve,getSelectedTerrainProviderViewModel:Re,bindLayerPickerStateSync:He,addBaseImageryLayers:We,initCustomTerrain:j,applyBasemap:ce,applyTerrain:V,handleOverlayToggle:qe,handleCustomBasemapSubmit:ht,cleanupLayers:ot,basemapSwitcher:re,basemapCircuitOpen:ge,resetCircuitBreaker:re.resetCircuitBreaker}}function xo(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function So(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function xr(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Sr(e){var t,r;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(r=e.destroy)==null||r.call(e)}catch{}}async function wo(e,t={}){var r;if(typeof((r=e==null?void 0:e.Cesium3DTileset)==null?void 0:r.fromIonAssetId)=="function"){const n=await e.Cesium3DTileset.fromIonAssetId(go,t);return!n.style&&typeof e.Cesium3DTileStyle=="function"&&(n.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),n}return e.createOsmBuildingsAsync(t)}function To(e){return e.value===yt?`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`:e.description||e.label}function Lo(e){const t=bt(e);if(!t.length)return"#37d67a";const r=jt(t[0]);if(!r)return"#37d67a";const n=r.category;return n==="imagery"?"#5ea1ff":n==="vector"?"#37d67a":n==="terrain"?"#d0a449":n==="label"?"#a78bfa":n==="theme"?"#f59e0b":n==="custom"?"#f472b6":"#37d67a"}function Mo(e,t){return String(t||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function wr(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let r=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const n=r.match(/\{([a-z0-9])-([a-z0-9])\}/i);let l=[];return n?(l=Co(n[1],n[2]),r=r.replace(n[0],"{s}")):/\{s\}/i.test(r)&&(l=["a","b","c"]),!/\{z\}/.test(r)||!/\{x\}/.test(r)||!/\{y\}/.test(r)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:r,subdomains:l}:Fo(r)?{valid:!0,message:"",url:r,subdomains:l}:{valid:!1,message:"URL 格式不合法",url:r,subdomains:l}}function Co(e,t){const r=String(e||"").charCodeAt(0),n=String(t||"").charCodeAt(0);if(!Number.isFinite(r)||!Number.isFinite(n))return[];const l=r<=n?1:-1,s=[];for(let p=r;l>0?p<=n:p>=n;p+=l)s.push(String.fromCharCode(p));return s}function Fo(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",r=new URL(e,t);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}function Po(e,t){const r=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${r||"basemap"}`}function Tr(e,t){const r=String(t||"").replace(/[<>&"']/g,"").slice(0,2),n=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${r}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(n)}`}function Eo({getViewer:e,getCesium:t,message:r}){function n(p){const _=e==null?void 0:e(),L=t==null?void 0:t();if(!_||!L)return;const T=typeof p=="number"?p:2;_.camera.flyTo({destination:L.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-L.Math.PI_OVER_TWO,roll:0},duration:T})}function l(){const p=e==null?void 0:e(),_=t==null?void 0:t();!p||!_||p.camera.flyTo({destination:_.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:_.Math.toRadians(0),pitch:_.Math.toRadians(-25),roll:0},duration:3})}async function s(){const p=e==null?void 0:e(),_=t==null?void 0:t();if(!(!p||!_))try{const L=await _.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");p.scene.primitives.add(L),p.flyTo(L,{duration:3,offset:new _.HeadingPitchRange(_.Math.toRadians(0),_.Math.toRadians(-25),L.boundingSphere.radius*2.5)})}catch(L){r.error(`加载模型失败: ${L}`),r.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:n,flyToEverest:l,loadCustomTileset:s}}const Ao="tileset.json";let Mt=null;async function Lr(){if(Mt)return Mt;const[{decompressBuffer:e},{parseShpPartsToGeoJSON:t}]=await Promise.all([Wt(()=>import("./decompressFile-DiMYlfaO.js").then(r=>r.f),__vite__mapDeps([4,5]),import.meta.url),Wt(()=>import("./shpParser-MDyf9y9Y.js").then(r=>r.s),__vite__mapDeps([6,5,7,2,3,8,9,10,11,12,13,14,15]),import.meta.url)]);return Mt={decompressBuffer:e,parseShpPartsToGeoJSON:t},Mt}function Ut(e){const t=e.lastIndexOf(".");return t===-1?"":e.slice(t+1).toLowerCase()}function rt(e,t,r,n){if(!(!e||!t||!r))try{n==="3dtiles"&&r.boundingSphere?e.flyTo(r,{duration:2,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-30),r.boundingSphere.radius*2)}):r.entities&&r.entities.values.length>0&&e.flyTo(r,{duration:2})}catch{}}function lt(e){return URL.createObjectURL(e)}function ze(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function Do({getViewer:e,getCesium:t,message:r}){const n=Q([]),l=Q(null);let s=0;async function p(i){const d=t(),S=e();if(!d||!S)throw new Error("Cesium 未初始化");const F=lt(i);try{const E=await d.GeoJsonDataSource.load(F,{stroke:d.Color.fromCssColorString("#3ddc84"),fill:d.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:d.Color.fromCssColorString("#3ddc84"),markerSize:24}),O=`geojson_${++s}`;E.name=i.name,await S.dataSources.add(E),rt(S,d,E,"geojson");const U={id:O,name:i.name,type:"geojson",entity:E,blobUrl:F};return n.value=[...n.value,U],r.success(`GeoJSON "${i.name}" 加载成功`),U}catch(E){throw ze(F),E}}async function _(i){const d=t(),S=e();if(!d||!S)throw new Error("Cesium 未初始化");const F=lt(i);try{const E=await d.KmlDataSource.load(F,{camera:S.scene.camera,canvas:S.scene.canvas}),O=`kml_${++s}`;E.name=i.name,await S.dataSources.add(E),rt(S,d,E,"kml");const U={id:O,name:i.name,type:"kml",entity:E,blobUrl:F};return n.value=[...n.value,U],r.success(`KML "${i.name}" 加载成功`),U}catch(E){throw ze(F),E}}async function L(i){const d=t(),S=e();if(!d||!S)throw new Error("Cesium 未初始化");const F=lt(i);try{const E=await d.KmlDataSource.load(F,{camera:S.scene.camera,canvas:S.scene.canvas}),O=`kmz_${++s}`;E.name=i.name,await S.dataSources.add(E),rt(S,d,E,"kmz");const U={id:O,name:i.name,type:"kmz",entity:E,blobUrl:F};return n.value=[...n.value,U],r.success(`KMZ "${i.name}" 加载成功`),U}catch{return ze(F),await T(i)}}async function T(i){const d=t(),S=e(),F=await i.arrayBuffer(),{decompressBuffer:E}=await Lr(),U=(await E(F,i.name)).find(te=>{var oe;return te.ext==="kml"||((oe=te.name)==null?void 0:oe.toLowerCase().endsWith(".kml"))});if(!U)throw new Error("KMZ 压缩包中未找到 KML 文件");let I;typeof U.content=="string"?I=U.content:U.content instanceof ArrayBuffer||U.content instanceof Uint8Array?I=hn(U.content):I=String(U.content||"");const J=new Blob([I],{type:"application/vnd.google-earth.kml+xml"}),$=URL.createObjectURL(J);try{const te=await d.KmlDataSource.load($,{camera:S.scene.camera,canvas:S.scene.canvas}),oe=`kmz_${++s}`;te.name=i.name,await S.dataSources.add(te),rt(S,d,te,"kmz");const re={id:oe,name:i.name,type:"kmz",entity:te};return n.value=[...n.value,re],r.success(`KMZ "${i.name}" 加载成功（手动解压）`),re}finally{URL.revokeObjectURL($)}}async function A(i,d=[]){const S=t(),F=e();if(!S||!F)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:E}=await Lr(),O={shp:await i.arrayBuffer()};for(const re of d){const ge=Ut(re.name);ge==="dbf"&&(O.dbf=await re.arrayBuffer()),ge==="shx"&&(O.shx=await re.arrayBuffer()),ge==="prj"&&(O.prj=await re.arrayBuffer()),ge==="cpg"&&(O.cpg=await re.arrayBuffer())}const U=await E(O),I=Array.isArray(U)?U:[U],J=I.reduce((re,ge)=>{var Me;return re+(((Me=ge==null?void 0:ge.features)==null?void 0:Me.length)||0)},0),$=I.length===1?I[0]:{type:"FeatureCollection",features:I.flatMap(re=>(re==null?void 0:re.features)||[])},te=new Blob([JSON.stringify($)],{type:"application/geo+json"}),oe=URL.createObjectURL(te);try{const re=await S.GeoJsonDataSource.load(oe,{stroke:S.Color.fromCssColorString("#ffcc00"),fill:S.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:S.Color.fromCssColorString("#ffcc00"),markerSize:20}),ge=`shp_${++s}`;re.name=i.name,await F.dataSources.add(re),rt(F,S,re,"shp");const Me={id:ge,name:i.name,type:"shp",entity:re};return n.value=[...n.value,Me],r.success(`Shapefile "${i.name}" 加载成功 (${J} 个要素)`),URL.revokeObjectURL(oe),Me}catch(re){throw URL.revokeObjectURL(oe),re}}async function C(i){const d=t(),S=e();if(!d||!S)throw new Error("Cesium 未初始化");const F=lt(i);let E=null;try{E=await v(i)}catch{}if(E)try{const O=await a(d,S,F,i.name,E),I={id:`gltf_${++s}`,name:i.name,type:"gltf",entity:O,blobUrl:F};return n.value=[...n.value,I],r.success(`3D 模型 "${i.name}" 加载成功 (${E.lng.toFixed(4)}, ${E.lat.toFixed(4)}, ${E.height.toFixed(1)}m)`),I}catch(O){throw ze(F),O}return l.value&&ze(l.value.blobUrl),l.value={file:i,blobUrl:F,name:i.name},{needsCoordInput:!0,file:i}}async function z(i){const d=t(),S=e();if(!l.value)throw new Error("没有等待确认的模型文件");const{blobUrl:F,name:E}=l.value;try{const O=await a(d,S,F,E,i),I={id:`gltf_${++s}`,name:E,type:"gltf",entity:O,blobUrl:F};n.value=[...n.value,I],r.success(`3D 模型 "${E}" 加载成功 (${i.lng.toFixed(4)}, ${i.lat.toFixed(4)}, ${i.height.toFixed(1)}m)`);const J=d.Cartesian3.fromDegrees(i.lng,i.lat,i.height+500);return S.camera.flyTo({destination:J,orientation:{heading:d.Math.toRadians(0),pitch:d.Math.toRadians(-30),roll:0},duration:2}),l.value=null,I}catch(O){throw ze(F),l.value=null,O}}function w(){l.value&&(ze(l.value.blobUrl),l.value=null)}async function x(i){const d=t(),S=e();if(!d||!S)throw new Error("Cesium 未初始化");const F=lt(i);try{const E=await d.CzmlDataSource.load(F),O=`czml_${++s}`;E.name=i.name,await S.dataSources.add(E),rt(S,d,E,"czml");const U={id:O,name:i.name,type:"czml",entity:E,blobUrl:F};return n.value=[...n.value,U],r.success(`CZML "${i.name}" 加载成功`),U}catch(E){throw ze(F),E}}async function y(i){const d=t(),S=e();if(!d||!S)throw new Error("Cesium 未初始化");const F=lt(i);try{const E=await d.Cesium3DTileset.fromUrl(F),O=`tileset_${++s}`;S.scene.primitives.add(E);const U={id:O,name:i.name,type:"3dtiles",entity:E,blobUrl:F};return n.value=[...n.value,U],rt(S,d,E,"3dtiles"),r.success(`3D Tiles "${i.name}" 加载成功`),U}catch(E){throw ze(F),E}}async function v(i){var E,O,U,I,J;const d=Ut(i.name);let S;if(d==="gltf"){const $=await i.text();S=JSON.parse($)}else{const $=await i.arrayBuffer();S=k($)}if(!S)return null;if((E=S.extensionsUsed)!=null&&E.includes("CESIUM_RTC")&&((U=(O=S.extensions)==null?void 0:O.CESIUM_RTC)!=null&&U.center)){const $=S.extensions.CESIUM_RTC.center;if($.length>=3){const te=t();if(te){const oe=new te.Cartesian3($[0],$[1],$[2]),re=te.Cartographic.fromCartesian(oe);return{lng:te.Math.toDegrees(re.longitude),lat:te.Math.toDegrees(re.latitude),height:re.height}}}}const F=(I=S.asset)==null?void 0:I.extras;if(F){const $=F.longitude??F.lng,te=F.latitude??F.lat,oe=F.height??F.altitude??F.alt??0;if($!=null&&te!=null)return{lng:Number($),lat:Number(te),height:Number(oe)}}if(((J=S.nodes)==null?void 0:J.length)>0&&S.nodes[0].matrix){const $=S.nodes[0].matrix;if($.length>=16){const te=$[12],oe=$[13],re=$[14];if(Math.abs(te)>1e5||Math.abs(oe)>1e5){const ge=t();if(ge)try{const Me=new ge.Cartesian3(te,oe,re),Fe=ge.Cartographic.fromCartesian(Me);return{lng:ge.Math.toDegrees(Fe.longitude),lat:ge.Math.toDegrees(Fe.latitude),height:Fe.height}}catch{}}}}return null}function k(i){if(i.byteLength<20)return null;const d=new DataView(i);if(d.getUint32(0,!0)!==1179937895)return null;const F=d.getUint32(12,!0);if(d.getUint32(16,!0)!==1313821514)return null;const O=new Uint8Array(i,20,F),U=new TextDecoder().decode(O);try{return JSON.parse(U)}catch{return null}}async function a(i,d,S,F,E){const{lng:O,lat:U,height:I}=E,J=i.Cartesian3.fromDegrees(O,U,I),$=new i.HeadingPitchRoll(0,0,0),te=i.Transforms.localFrameToFixedFrameGenerator("north","west"),oe=await i.Model.fromGltfAsync({url:S,modelMatrix:i.Transforms.headingPitchRollToFixedFrame(J,$,i.Ellipsoid.WGS84,te),scale:1,show:!0});return oe.name=F,d.scene.primitives.add(oe),oe}async function c(i){const d=e(),S=t();if(!d||!S)throw r.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const F=Ut(i.name);try{switch(F){case"geojson":case"json":return i.name.toLowerCase().includes(Ao)?await y(i):await p(i);case"kml":return await _(i);case"kmz":return await L(i);case"shp":return await A(i);case"glb":case"gltf":return await C(i);case"czml":return await x(i);default:throw r.error(`不支持的文件格式: .${F}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${F}`)}}catch(E){throw r.error(`加载 "${i.name}" 失败: ${E.message||E}`),E}}function u(i){const d=n.value.find(F=>F.id===i);if(!d)return;const S=e();if(S){try{d.type==="3dtiles"?S.scene.primitives.remove(d.entity):S.dataSources.remove(d.entity,!0)}catch{}d.blobUrl&&ze(d.blobUrl),n.value=n.value.filter(F=>F.id!==i),r.info(`已移除 "${d.name}"`)}}function g(){var S,F,E,O,U;const i=e();if(!i){n.value=[];return}for(const I of n.value){try{I.type==="3dtiles"?i.scene.primitives.remove(I.entity):i.dataSources.remove(I.entity,!0)}catch{}I.blobUrl&&ze(I.blobUrl)}if(Array.isArray((S=i.dataSources)==null?void 0:S.dataSources)){const I=i.dataSources.dataSources.slice();for(const J of I)if(J&&!J.isBaseLayerPickerDataSource)try{i.dataSources.remove(J,!0)}catch{}}const d=t();if(d&&Array.isArray((E=(F=i.scene)==null?void 0:F.primitives)==null?void 0:E.primitives)){const I=i.scene.primitives.primitives.slice();for(const J of I)if(!(!J||!(J instanceof d.Cesium3DTileset||J instanceof d.Model||J.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(J.name||"")))))try{i.scene.primitives.remove(J)}catch{}}n.value=[],w();try{(U=(O=i.scene).requestRender)==null||U.call(O)}catch{}r.info("已清除所有导入数据")}return{loadDataFile:c,loadedDataSources:n,removeDataSource:u,clearAllDataSources:g,pendingGltfFile:l,loadGltfWithUserCoords:z,cancelPendingGltf:w}}const ko="cesium_tool_panel_open";function Ro({fluidPanelRef:e,sceneActions:t={},wind:r={},panelStorageKey:n=ko}={}){const l=Q(ut(n,!0)),s=Q({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),p=Q({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),_=Q({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),L=Le(()=>{var w,x,y,v,k,a;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:s.value.atmosphere||s.value.fog?"启用":"关闭",statusTone:s.value.atmosphere||s.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:s.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:s.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:s.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:s.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(w=r.wind2D)!=null&&w.value?"已加载":"未加载",statusTone:(x=r.wind2D)!=null&&x.value?"success":"neutral",actions:[{id:"load",label:(y=r.wind2D)!=null&&y.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((v=r.wind2D)!=null&&v.value)}],controls:Io((k=r.windParams)==null?void 0:k.value,!!((a=r.wind2D)!=null&&a.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:_.value.isPicking?"等待选点":_.value.hasFluid?"已创建":"未创建",statusTone:_.value.isPicking?"warning":_.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:_.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:_.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!_.value.hasFluid&&!_.value.isPicking}],controls:No(p.value,_.value)}]});we(l,w=>{vt(n,w)});function T({moduleId:w,actionId:x}){var v,k;(k=(v={scene:{home:()=>{var a;return(a=t.flyToHome)==null?void 0:a.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:r.loadSimulatedWind,clear:r.clearWind2D},fluid:{pick:()=>{var a,c;return(c=(a=e==null?void 0:e.value)==null?void 0:a.startPickHeightMap)==null?void 0:c.call(a)},clear:()=>{var a,c;return(c=(a=e==null?void 0:e.value)==null?void 0:a.clearFluid)==null?void 0:c.call(a)}}}[w])==null?void 0:v[x])==null||k.call(v)}function A({moduleId:w,controlId:x,value:y}){var v,k;if(w==="effects"&&x in s.value){s.value={...s.value,[x]:!!y};return}if(w==="wind"&&x in(((v=r.windParams)==null?void 0:v.value)||{})){(k=r.setWindParam)==null||k.call(r,x,y);return}w==="fluid"&&x in p.value&&(p.value={...p.value,[x]:x==="waterColor"?y:Number(y)})}function C(w){const x=dt(w==null?void 0:w.waterLevel),y=dt(w==null?void 0:w.waterLevelMin),v=dt(w==null?void 0:w.waterLevelMax);_.value={isPicking:!!(w!=null&&w.isPicking),hasFluid:!!(w!=null&&w.hasFluid),selectedText:(w==null?void 0:w.selectedText)||"",waterLevel:x,waterLevelMin:y,waterLevelMax:v},x!==null&&(p.value={...p.value,waterLevel:x})}function z(){var w;(w=r.clearWind2D)==null||w.call(r)}return{toolPanelOpen:l,advancedEffectControls:s,fluidParams:p,fluidState:_,toolModules:L,handleToolAction:T,handleToolControlChange:A,handleFluidStateChange:C,cleanupTools:z}}function Io(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function No(e,t={}){const r=dt(t.waterLevelMin),n=dt(t.waterLevelMax),l=r!==null&&n!==null,s=l?Math.min(r,n):0,p=l?Math.max(r,n):0,_=dt(e.waterLevel),L=l?Oo(_??s,s,p):0,T=l?Math.max((p-s)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:s,max:p,step:T,value:L,displayValue:l?`${zo(L)} m`:"先捕捉",disabled:!l,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function dt(e){const t=Number(e);return Number.isFinite(t)?t:null}function Oo(e,t,r){return Math.max(t,Math.min(r,e))}function zo(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const{getLayerIdByIndex:Bo,getLayerIndexById:Mr}=an({urlLayerOptions:on,getLayerCategoryById:sn,getLayerGroupById:ln}),Gt=-90,Yt=1,Ir=5e7;function Uo({getViewer:e,getCesium:t,onCameraViewSync:r,onBasemapRestore:n}={}){const l=Hr(),s=Wr();let p=null;function _(a){return cn(a,l.query)}function L(){const a=String(_(tr)||"").trim(),c=nt(_("lng")),u=nt(_("lat")),g=Ho(_("z")),i=un(a);if(i&&c!==null&&u!==null&&g!==null){const S={lng:c,lat:u,height:g,...i};if(Cr(S))return S}const d=dn(a);return Cr(d)?d:c===null||u===null||g===null||c<-180||c>180||u<-90||u>90?null:{lng:c,lat:u,height:g,heading:nt(_("heading"))??0,pitch:nt(_("pitch"))??Gt,roll:nt(_("roll"))??0}}function T({duration:a=0}={}){const c=e==null?void 0:e(),u=t==null?void 0:t(),g=L();if(!(c!=null&&c.camera)||!u||!g)return!1;const i=u.Cartesian3.fromDegrees(g.lng,g.lat,g.height),d={heading:Ht(u,g.heading??0),pitch:Ht(u,Wo(g.pitch??Gt)),roll:Ht(u,g.roll??0)};return Number(a)>0?(c.camera.flyTo({destination:i,orientation:d,duration:Number(a)}),!0):(c.camera.setView({destination:i,orientation:d}),!0)}function A(a){if(!a)return null;const c=Mr(a);if(c===null)return null;const u={view:Dt,l:String(c)};return k(u),String(c)}function C(){const a=nt(_("l"));if(a===null)return null;const c=Bo(a);return c&&(n==null||n(c)),c}function z({initialSync:a=!1,getActivePresetId:c}={}){const u=y();if(!(!(u!=null&&u.moveEnd)||p)&&(p=u.moveEnd.addEventListener(()=>{const g=c==null?void 0:c();x({activePresetId:g})}),a)){const g=c==null?void 0:c();x({activePresetId:g})}}function w(){typeof p=="function"&&p(),p=null}function x({activePresetId:a}={}){const c=t==null?void 0:t(),u=y();if(!c||!(u!=null&&u.position))return;const g=c.Cartographic.fromCartesian(u.position);if(!g)return;const i=c.Math.toDegrees(g.longitude),d=c.Math.toDegrees(g.latitude),S=Number(g.height),F=c.Math.toDegrees(Number(u.heading)||0),E=c.Math.toDegrees(Number(u.pitch)||0),O=c.Math.toDegrees(Number(u.roll)||0);if(!Number.isFinite(i)||!Number.isFinite(d)||!Number.isFinite(S))return;const U=Math.max(Yt,S),I=nn({heading:F,pitch:E,roll:O});if(!I||I==="0")return;const J={view:Dt,camera:{lng:i,lat:d,height:U,heading:F,pitch:E,roll:O}},$={view:Dt,[tr]:I,lng:Fr(i,6),lat:Fr(d,6),z:$o(U)},te=a;if(te){const oe=Mr(te);oe!==null&&($.l=String(oe))}k($),r==null||r(J)}function y(){var c;const a=e==null?void 0:e();return(a==null?void 0:a.camera)||((c=a==null?void 0:a.scene)==null?void 0:c.camera)||null}function v(a,c){const u=Object.keys(a).filter(i=>a[i]!==void 0&&a[i]!==null&&a[i]!==""),g=Object.keys(c).filter(i=>c[i]!==void 0&&c[i]!==null&&c[i]!=="");return u.length!==g.length?!1:g.every(i=>String(a[i]??"")===String(c[i]??""))}function k(a){const c={...lr(l.query),...a};$r.forEach(g=>{g in a||delete c[g]}),Object.keys(c).forEach(g=>{const i=c[g];i==null||i===""?delete c[g]:c[g]=String(i)});const u=lr(l.query);v(u,c)||s.replace({path:l.path||"/home",query:c}).catch(()=>{})}return{restoreCameraFromUrl:T,restoreBasemapFromUrl:C,syncBasemapToUrl:A,bindCameraViewSync:z,cleanupCameraViewSync:w}}function nt(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Ho(e){const t=nt(e);return t===null||t<Yt||t>Ir?null:t}function Cr(e){if(!e)return!1;const t=Number(e.lng),r=Number(e.lat),n=Number(e.height),l=Number(e.heading),s=Number(e.pitch),p=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(r)&&r>=-90&&r<=90&&Number.isFinite(n)&&n>=Yt&&n<=Ir&&Number.isFinite(l)&&Number.isFinite(s)&&s>=-90&&s<=90&&Number.isFinite(p)}function Wo(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):Gt}function Fr(e,t){const r=Number(e);return Number.isFinite(r)?r.toFixed(t):null}function $o(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function Ht(e,t){const r=Number(t);return Number.isFinite(r)?e.Math.toRadians(r):0}const Te={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Go=new Float32Array([-1,-1,1,-1,1,1,-1,1]),qo=new Float32Array([0,0,1,0,1,1,0,1]),jo=new Uint16Array([0,1,2,0,2,3]);function tt(e,t,r){return Math.max(t,Math.min(r,e))}function fe(e,t){const r=Number(e);return Number.isFinite(r)?r:t}function Xo(e,t){const r=t.getParameter(t.MAX_TEXTURE_SIZE),n=Math.min(2048,r),l=Math.max(1,Math.floor(e)),s=Math.sqrt(l),p=Math.log2(s),_=Number.isFinite(p)?Math.round(p):4;let L=Math.pow(2,_);return L=tt(L,16,n),L}function Vo(e){const t=e*e,r=new Float32Array(t*4);for(let n=0;n<t;n+=1){const l=n*4;r[l]=Math.random(),r[l+1]=Math.random(),r[l+2]=Math.random(),r[l+3]=Math.random()}return r}function Yo(e){return new Float32Array(e*e*4)}function Ko(e,t,r,n,l){const s=t.createTexture();if(!s)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,s),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,r,n,0,t.RGBA,t.FLOAT,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let p=!1;return{_context:e,_texture:s,_target:t.TEXTURE_2D,_width:r,_height:n,destroy(){p||(t.deleteTexture(s),p=!0)}}}class Zo{constructor(t,r={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=r.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const n={...Te,...r};this.speedFactor=fe(n.speedFactor,Te.speedFactor),this.cullSpeedMin=fe(n.cullSpeedMin,Te.cullSpeedMin),this.cullSpeedMax=fe(n.cullSpeedMax,Te.cullSpeedMax),this.windSpeedMin=fe(n.windSpeedMin,Te.windSpeedMin),this.windSpeedMax=fe(n.windSpeedMax,Te.windSpeedMax),this.arrowLength=fe(n.arrowLength,Te.arrowLength),this.trailLength=fe(n.trailLength,Te.trailLength),this.decaySpeed=fe(n.decaySpeed,Te.decaySpeed),this.alphaFactor=fe(n.alphaFactor,Te.alphaFactor),this.maxWindSpeed=fe(n.maxWindSpeed,Te.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=fe(r.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const r=fe(t.longitude,NaN),n=fe(t.latitude,NaN),l=Array.isArray(t.altitude)?t.altitude:[],s=Array.isArray(t.sizeMesh)?t.sizeMesh:[],p=Array.isArray(t.count)?t.count:[],_=Array.isArray(t.hspeed)?t.hspeed:[],L=Array.isArray(t.hdir)?t.hdir:[],T=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(r)||!Number.isFinite(n))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const A=l.length;if(A<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(s.length!==A||p.length!==A)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const C=p.map(d=>Math.max(1,Math.floor(fe(d,1)))),z=s.map(d=>Math.max(1,fe(d,1))),w=l.map(d=>fe(d,0)),x=C.reduce((d,S)=>d+S*S,0);if(_.length<x||L.length<x||T.length<x)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=A,this.visibleLayerMin=0,this.visibleLayerMax=A-1,this._altitudes=w.slice(),this._maxNx=Math.max(...C),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*A;const y=new Float32Array(this._atlasWidth*this._atlasHeight*4);let v=0;for(let d=0;d<A;d+=1){const S=C[d],F=S;for(let E=0;E<F;E+=1)for(let O=0;O<S;O+=1){const U=v+E*S+O,I=((d*this._maxNy+E)*this._atlasWidth+O)*4,J=Number(_[U]),$=Number(L[U]),te=Number(T[U]);if(!(Number.isFinite(J)&&Number.isFinite($))){y[I]=0,y[I+1]=0,y[I+2]=0,y[I+3]=0;continue}const re=$*Math.PI/180;y[I]=J*Math.sin(re),y[I+1]=J*Math.cos(re),y[I+2]=Number.isFinite(te)?te:0,y[I+3]=1}v+=S*F}this._createOrReplaceWindAtlasTexture(y);const k=Math.max(...z),a=this._maxNx*k,c=a/2/111320,u=n*Math.PI/180,g=Math.max(1e-6,Math.abs(Math.cos(u))),i=a/2/(111320*g);this._bounds={minLon:r-i,maxLon:r+i,minLat:n-c,maxLat:n+c,minHeight:Math.min(...w),maxHeight:Math.max(...w)},this._dataPointCount=x,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const r=Math.max(1,Math.floor(fe(t,1))),n=Xo(r,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&n===this._particleTextureSize||(this._particleTextureSize=n,this._particleCount=n*n,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const r=tt(fe(t,this.particleDensity),.05,10);if(this.particleDensity=r,this._dataPointCount<=0)return;const n=Math.max(1,Math.floor(this._dataPointCount*r));this.setParticleCount(n)}setBounds(t,r,n,l){const s=fe(t,NaN),p=fe(r,NaN),_=fe(n,NaN),L=fe(l,NaN);if(!Number.isFinite(s)||!Number.isFinite(p)||!Number.isFinite(_)||!Number.isFinite(L))return;const T=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};T.minLon=Math.min(s,p),T.maxLon=Math.max(s,p),T.minLat=Math.min(_,L),T.maxLat=Math.max(_,L),this._bounds=T,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,r=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,r,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const l=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[l],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=l,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Ko(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,r=this._particleTextureSize,n=Vo(r),l=Yo(r);for(let s=0;s<2;s+=1){this._particlePositionTextures[s]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:n},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[s]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:l},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[s]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[s],this._velocityTextures[s]],destroyAttachments:!1});const p=this._framebuffers[s]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,p),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,r=t.Buffer.createVertexBuffer({context:this._context,typedArray:Go,usage:t.BufferUsage.STATIC_DRAW}),n=t.Buffer.createVertexBuffer({context:this._context,typedArray:qo,usage:t.BufferUsage.STATIC_DRAW}),l=t.Buffer.createIndexBuffer({context:this._context,typedArray:jo,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:r,componentsPerAttribute:2},{index:1,vertexBuffer:n,componentsPerAttribute:2}],indexBuffer:l})}_buildParticleVertexArray(){const t=this._Cesium,r=new Float32Array(this._drawVertexCount);for(let n=0;n<r.length;n+=1)r[n]=n;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:r,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,r=`#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}`,n=`#version 300 es
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
}`;this._updateProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:n,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const t=this._Cesium,r=`#version 300 es
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
}`,n=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:n,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,r=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:r,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,r=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:r,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=tt(Math.floor(fe(this.visibleLayerMin,0)),0,this._layerCount-1),r=tt(Math.floor(fe(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:r}}_normalizeSpeedRange(t,r){const n=Math.max(1e-4,fe(this.maxWindSpeed,Te.maxWindSpeed)),l=tt(fe(t,0)/n,0,1),s=tt(fe(r,n)/n,0,1);return{min:Math.min(l,s),max:Math.max(l,s)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>fe(this.speedFactor,Te.speedFactor),maxWindSpeed:()=>Math.max(1e-4,fe(this.maxWindSpeed,Te.maxWindSpeed)),decaySpeed:()=>tt(fe(this.decaySpeed,Te.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>fe(this.arrowLength,Te.arrowLength),trailLength:()=>fe(this.trailLength,Te.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>tt(fe(this.alphaFactor,Te.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Jo({getViewer:e,getCesium:t,message:r}){const n=Q(null),l=Q({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function s(){var A,C;const T=e==null?void 0:e();if(n.value){try{(C=(A=T==null?void 0:T.scene)==null?void 0:A.primitives)==null||C.remove(n.value)}catch{}n.value.destroy(),n.value=null}}function p(){const T=e==null?void 0:e(),A=t==null?void 0:t();if(!T||!A){r.error("Cesium 尚未初始化");return}s();const C=Qo(A);n.value=new Zo(T,{maxWindSpeed:20,cesium:A,speedFactor:l.value.speedFactor,arrowLength:l.value.arrowLength,trailLength:l.value.trailLength,alphaFactor:l.value.alphaFactor}),n.value.loadData(C),T.scene.primitives.add(n.value),n.value.flyTo(),r.success("风场加载成功，可通过下方滑块调节样式")}function _(){n.value&&(n.value.speedFactor=l.value.speedFactor,n.value.arrowLength=l.value.arrowLength,n.value.trailLength=l.value.trailLength,n.value.alphaFactor=l.value.alphaFactor)}function L(T,A){return T in l.value?(l.value={...l.value,[T]:Number(A)},_(),!0):!1}return{wind2D:n,windParams:l,clearWind2D:s,loadSimulatedWind:p,setWindParam:L}}function Qo(e){const l=[0,2e3,5e3,1e4,15e3],s=[3e4,3e4,25e3,25e3,2e4],p=[30,30,25,25,20],_=p.reduce((z,w)=>z+w*w,0),L=new Array(_),T=new Array(_),A=new Array(_);let C=0;for(let z=0;z<5;z++){const w=p[z],x=p[z],y=s[z];for(let v=0;v<x;v++)for(let k=0;k<w;k++){const a=C+v*w+k,c=(k-w/2)*(y/111320),u=(v-x/2)*(y/111320/Math.cos(e.Math.toRadians(35))),i=Math.atan2(u,c)+Math.PI/2+.2*Math.sin(k*.5)*Math.cos(v*.5);T[a]=e.Math.toDegrees(i)%360;const d=Math.sqrt(c*c+u*u),F=Math.max(0,1-d/15);L[a]=(5+z*2)*F+2*Math.random(),A[a]=.5*Math.sin(k*.3)*Math.cos(v*.3)}C+=w*x}return{longitude:104,latitude:35,altitude:l,sizeMesh:s,count:p,hspeed:L,hdir:T,vspeed:A}}const es={key:3,class:"drag-overlay"},ts={class:"map-controls-group"},rs={class:"mouse-position-content"},ns={__name:"CesiumContainer",emits:["view-sync"],setup(e,{emit:t}){let r=null,n=null,l=!1;const s=qt(),p=t,_=Q(!1),L=Q(null),T=Q(jr()),A=()=>n,C=()=>r||window.Cesium,z=()=>T.value.tiandituTk,w=()=>T.value.cesiumIonToken,x=_o({getViewer:A,getCesium:C,message:s,backendBaseUrl:qr,tiandituToken:z,cesiumIonToken:w}),{activeBasemap:y,activeTerrain:v,customXyzBasemapUrl:k,basemapOptions:a,terrainOptions:c,overlayOptions:u,createImageryProviderViewModels:g,createTerrainProviderViewModels:i,getSelectedImageryProviderViewModel:d,getSelectedTerrainProviderViewModel:S,bindLayerPickerStateSync:F,addBaseImageryLayers:E,initCustomTerrain:O,handleOverlayToggle:U,handleCustomBasemapSubmit:I,cleanupLayers:J}=x;we(y,(j,V)=>{!j||j===V||Xe(j)});const{coordinateDisplay:$,setupInteractions:te,cleanupInteractions:oe}=ho({getViewer:A,getCesium:C}),{installCreditHider:re,cleanupCreditHider:ge}=uo({getViewer:A}),{restoreCameraFromUrl:Me,restoreBasemapFromUrl:Fe,syncBasemapToUrl:Xe,bindCameraViewSync:Ve,cleanupCameraViewSync:Re}=Uo({getViewer:A,getCesium:C,onCameraViewSync:j=>p("view-sync",j),onBasemapRestore:j=>{j&&y.value!==j&&(y.value=j)}}),B=Eo({getViewer:A,getCesium:C,message:s}),{flyToHome:N}=B,D=Jo({getViewer:A,getCesium:C,message:s}),de=Do({getViewer:A,getCesium:C,message:s}),Ue=Le(()=>de.loadedDataSources.value),K=Le(()=>de.pendingGltfFile.value),be=Q(!1);function Je(j){be.value=!0,j.dataTransfer&&(j.dataTransfer.dropEffect="copy")}function He(j){const V=j==null?void 0:j.relatedTarget,ue=j==null?void 0:j.currentTarget;V instanceof Node&&ue instanceof Node&&ue.contains(V)||(be.value=!1)}async function De(j){var ue;if(be.value=!1,!_.value)return;const V=(ue=j.dataTransfer)==null?void 0:ue.files;if(!(!V||V.length===0))for(const pe of V)try{await de.loadDataFile(pe)}catch{}}const{toolPanelOpen:We,advancedEffectControls:Ie,fluidParams:$e,toolModules:M,handleToolAction:P,handleToolControlChange:q,handleFluidStateChange:Z,cleanupTools:ne}=Ro({fluidPanelRef:L,sceneActions:B,wind:D});async function he(){l=!1,Dr("正在初始化 3D 场景...");try{let j=0,V=1;for(;j<V;)try{if(T.value=await Gr({silent:!1,force:j>0}),V=Math.max(V,Array.isArray(T.value.tiandituTokens)?T.value.tiandituTokens.length:1,Array.isArray(T.value.cesiumIonTokens)?T.value.cesiumIonTokens.length:1,1),r=await Qi({ionToken:w()}),l||!r||!document.getElementById("cesiumContainer"))return;f(),te();const ue=E(),pe=await O();if(l){ye();return}if(_.value=!0,Ve({initialSync:!1,getActivePresetId:()=>y.value}),Fe(),ue&&pe){s.success("天地图基础影像与地形加载成功。");return}const Ne=ue?{switched:!1}:kt("tianditu_tk"),Ge=pe?{switched:!1}:kt("cesium_ion_token");if(!(Ne.switched||Ge.switched)){s.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}T.value=Ge.switched?Ge.tokens:Ne.tokens,ye(),j+=1,s.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(ue){const pe=kt("cesium_ion_token");if(!pe.switched)throw ue;T.value=pe.tokens,ye(),j+=1,s.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}s.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(j){s.error("Cesium 运行时加载失败",j),s.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{kr()}}function ye(){if(_.value=!1,Re(),oe(),J(),ge(),!!n){try{n.destroy()}catch{}n=null}}function f(){var pe;const j=typeof r.Map=="function"?r.Map:r.Viewer,V=g(),ue=i();n=new j("cesiumContainer",{baseLayerPicker:!0,geocoder:((pe=r.IonGeocodeProviderType)==null?void 0:pe.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:V,selectedImageryProviderViewModel:d(V),terrainProviderViewModels:ue,selectedTerrainProviderViewModel:S(ue),shouldAnimate:!0}),n.scene.debugShowFramesPerSecond=!0,n.scene.globe.terrainExaggeration=1,n.scene.globe.terrainExaggerationRelativeHeight=0,io(n,r),_n(n),re(),F(),Me({duration:0})||N(0)}Pr(()=>{he()});async function m({files:j}){for(const V of j)try{await de.loadDataFile(V)}catch{}}function R({id:j}){de.removeDataSource(j)}function X(){de.clearAllDataSources()}async function ee(j){try{await de.loadGltfWithUserCoords(j)}catch{}}function ce(){de.cancelPendingGltf()}return Er(()=>{if(l=!0,_.value=!1,Re(),oe(),ne(),J(),ge(),de.clearAllDataSources(),n){try{n.destroy()}catch{}n=null}}),(j,V)=>{var ue;return G(),Y(Ee,null,[h("div",{id:"cesiumContainer",class:"cesium-container",onDragover:it(Je,["prevent"]),onDragleave:it(He,["prevent"]),onDrop:it(De,["prevent"])},null,32),_.value?(G(),Be(at(Bn),{key:0,headless:"","get-viewer":A,"get-cesium":C,controls:ie(Ie)},null,8,["controls"])):le("",!0),_.value?(G(),Be(at(Ki),{key:1,ref_key:"fluidPanelRef",ref:L,headless:"","get-viewer":A,"get-cesium":C,params:ie($e),onStateChange:ie(Z)},null,40,["params","onStateChange"])):le("",!0),_.value?(G(),Be(mi,{key:2,open:ie(We),"onUpdate:open":V[0]||(V[0]=pe=>At(We)?We.value=pe:null),"active-basemap":ie(y),"onUpdate:activeBasemap":V[1]||(V[1]=pe=>At(y)?y.value=pe:null),"active-terrain":ie(v),"onUpdate:activeTerrain":V[2]||(V[2]=pe=>At(v)?v.value=pe:null),"basemap-options":ie(a),"terrain-options":ie(c),"overlay-options":ie(u),"custom-basemap-url":ie(k),modules:ie(M),"loaded-data-sources":Ue.value,onModuleAction:ie(P),onControlChange:ie(q),onOverlayToggle:ie(U),onCustomBasemapSubmit:ie(I),onDataImport:m,onDataRemove:R,onDataClearAll:X},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):le("",!0),xe(Pi,{visible:!!K.value,"file-name":((ue=K.value)==null?void 0:ue.name)||"",onConfirm:ee,onCancel:ce},null,8,["visible","file-name"]),be.value&&_.value?(G(),Y("div",es,[xe(ie($t),{size:48,"stroke-width":"1.5"}),V[4]||(V[4]=h("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),V[5]||(V[5]=h("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):le("",!0),h("div",ts,[h("div",rs,se(ie($)),1),V[7]||(V[7]=h("div",{class:"divider"},null,-1)),h("button",{class:"home-btn",title:"回到初始位置",onClick:V[3]||(V[3]=(...pe)=>ie(N)&&ie(N)(...pe))},[...V[6]||(V[6]=[h("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[h("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},ys=_t(ns,[["__scopeId","data-v-4fae6931"]]);export{ys as default};
