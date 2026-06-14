const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-B39pOI_G.js","./vendor-echarts-all-CVx2VYxY.js","./vendor-libs-CdvuqtNs.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var Bt=Object.defineProperty;var Ut=(t,e,r)=>e in t?Bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var mt=(t,e,r)=>Ut(t,typeof e!="symbol"?e+"":e,r);import{_ as tt,e as ct,K as Et,J as Dt,I as Wt}from"./index-B19jVjcp.js";import{_ as $t}from"./vendor-runtime-Dp1pzeXC.js";import{C as Rt,o as kt,w as he,d as H,c as W,f,t as ae,G as oe,W as Ke,X as Ye,g as te,r as G,P as Gt,a as Se,u as J,F as ge,e as Pe,n as de,x as De,S as $e,I as ft,i as pt,H as we,O as It,q as me,v as Vt,a4 as it}from"./vendor-vue-CmuMwCC6.js";import{af as nt,ag as ot,ah as qt,X as Xt,e as gt,ac as vt,ai as Yt,aj as jt,ak as yt,H as xt,al as Zt,T as _t,a2 as Kt,am as Jt,an as Qt,ao as er,ap as tr,q as rr,o as ar,aq as ir}from"./vendor-libs-CdvuqtNs.js";import"./vendor-ol-all-D3od1ozZ.js";import"./vendor-geotiff-DCPfLQJG.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-DbLN0cxH.js";import"./vendor-axios-Bdz_Fv8M.js";function nr(t){var n;const e=t==null?void 0:t.scene,r=e==null?void 0:e.globe;!e||!r||(r.enableLighting=!0,e.sun&&(e.sun.show=!0),e.moon&&(e.moon.show=!0),e.skyBox&&(e.skyBox.show=!0),(n=e.requestRender)==null||n.call(e))}function or(t,e){var c;const r=t==null?void 0:t.scene,n=r==null?void 0:r.globe;if(!r||!n)return;cr(r,e),ur(r),n.enableLighting=!0,n.showGroundAtmosphere=!0,Y(n,"dynamicAtmosphereLighting",!0),Y(n,"dynamicAtmosphereLightingFromSun",!0),Y(n,"atmosphereLightIntensity",11.5),Y(n,"atmosphereHueShift",-.015),Y(n,"atmosphereSaturationShift",.08),Y(n,"atmosphereBrightnessShift",.02),Y(n,"lightingFadeInDistance",15e6),Y(n,"lightingFadeOutDistance",22e6),Y(n,"nightFadeInDistance",9e6),Y(n,"nightFadeOutDistance",16e6),Je(e,n,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Je(e,n,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),Y(n,"atmosphereRayleighScaleHeight",1e4),Y(n,"atmosphereMieScaleHeight",3200),Y(n,"atmosphereMieAnisotropy",.92),!r.skyAtmosphere&&(e!=null&&e.SkyAtmosphere)&&(r.skyAtmosphere=hr(e));const u=r.skyAtmosphere;u&&(u.show=!0,Y(u,"perFragmentAtmosphere",!0),Y(u,"dynamicAtmosphereLighting",!0),Y(u,"dynamicAtmosphereLightingFromSun",!0),Y(u,"hueShift",-.025),Y(u,"saturationShift",.08),Y(u,"brightnessShift",.03),Y(u,"atmosphereLightIntensity",12),Je(e,u,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Je(e,u,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),Y(u,"atmosphereRayleighScaleHeight",1e4),Y(u,"atmosphereMieScaleHeight",3200),Y(u,"atmosphereMieAnisotropy",.92)),r.sun&&(r.sun.show=!0),r.moon&&(r.moon.show=!0),r.skyBox&&(r.skyBox.show=!0),"sunBloom"in r&&(r.sunBloom=!0),"highDynamicRange"in r&&(r.highDynamicRange=!0),dr(r),(c=r.requestRender)==null||c.call(r)}function sr(t){var u;const e=t==null?void 0:t.scene,r=e==null?void 0:e.globe;if(!e||!r)return null;const n=(u=e.postProcessStages)==null?void 0:u.bloom;return{scene:Ae(e,["highDynamicRange","sunBloom","light"]),fog:Ae(e.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:Ae(r,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!e.skyAtmosphere,sky:Ae(e.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:Ae(e.sun,["show"]),moon:Ae(e.moon,["show"]),skyBox:Ae(e.skyBox,["show"]),bloom:{props:Ae(n,["enabled"]),uniforms:Ae(n==null?void 0:n.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function lr(t,e,r){var d,p,b,w;if(!r)return;const n=t==null?void 0:t.scene,u=n==null?void 0:n.globe;if(!n||!u)return;Ce(n,r.scene,e),Ce(n.fog,r.fog,e),Ce(u,r.globe,e),Ce(n.sun,r.sun,e),Ce(n.moon,r.moon,e),Ce(n.skyBox,r.skyBox,e),n.skyAtmosphere&&(Ce(n.skyAtmosphere,r.sky,e),r.skyAtmosphereExisted||(n.skyAtmosphere.show=!1));const c=(d=n.postProcessStages)==null?void 0:d.bloom;Ce(c,(p=r.bloom)==null?void 0:p.props,e),Ce(c==null?void 0:c.uniforms,(b=r.bloom)==null?void 0:b.uniforms,e),(w=n.requestRender)==null||w.call(n)}function cr(t,e){var r;if(e!=null&&e.SunLight)try{t.light=new e.SunLight({color:(r=e.Color)==null?void 0:r.WHITE,intensity:2.35})}catch{t.light=new e.SunLight}Y(t.light,"intensity",2.35)}function ur(t){const e=t==null?void 0:t.fog;e&&(e.enabled=!0,Y(e,"density",12e-5),Y(e,"minimumBrightness",.035),Y(e,"screenSpaceErrorFactor",2),Y(e,"visualDensityScalar",.16))}function dr(t){var r;const e=(r=t==null?void 0:t.postProcessStages)==null?void 0:r.bloom;e&&(e.enabled=!0,e.uniforms&&(Y(e.uniforms,"contrast",128),Y(e.uniforms,"brightness",-.18),Y(e.uniforms,"delta",1),Y(e.uniforms,"sigma",2.5),Y(e.uniforms,"stepSize",4.2)))}function hr(t){var e;try{return new t.SkyAtmosphere((e=t.Ellipsoid)==null?void 0:e.WGS84)}catch{return new t.SkyAtmosphere}}function Y(t,e,r){t&&e in t&&(t[e]=r)}function Je(t,e,r,n,u,c){!e||!(r in e)||!(t!=null&&t.Cartesian3)||(e[r]=new t.Cartesian3(n,u,c))}function Ae(t,e){return t?e.reduce((r,n)=>(n in t&&(r[n]=mr(t[n])),r),{}):{}}function Ce(t,e={},r){!t||!e||Object.entries(e).forEach(([n,u])=>{n in t&&(t[n]=fr(u,r))})}function mr(t){return t&&typeof t=="object"&&"x"in t&&"y"in t&&"z"in t?{__type:"Cartesian3",x:t.x,y:t.y,z:t.z}:t}function fr(t,e){return(t==null?void 0:t.__type)==="Cartesian3"&&(e!=null&&e.Cartesian3)?new e.Cartesian3(t.x,t.y,t.z):t}const pr={key:0,class:"advanced-effects-root"},gr={class:"effects-panel"},vr={class:"panel-head"},yr={class:"effect-switches"},xr={class:"switch-item"},_r={class:"switch-item"},br={class:"switch-item"},Sr={class:"switch-item"},wr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(t){const e=t,r=ct(),n=G(null),u=G(!1),c=G(!1),d=G(!1),p=G(!1),b=G(!1);let w=null,R=null,E=null,N=!1,S=null,L=null,C=null,x=null,A=null,i=null,m=null,h=null,F=!1,D=null,P=0,U=0,j=typeof performance<"u"?performance.now():Date.now();function Q(){return C||(C=$t(()=>import("./cesiumFxRuntime-B39pOI_G.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(g=>{var l;const a=(l=g==null?void 0:g.getCesiumFxEchartsRuntime)==null?void 0:l.call(g);if(!a)throw new Error("Cinematic FX 图表运行时加载失败");return L=a,a}).catch(g=>{throw C=null,g}),C)}async function $(){return L||Q()}const Z={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},y={hdr:null,bloom:null,sky:null};Rt(()=>{T()}),kt(()=>{fe()}),he(()=>e.controls,g=>{k(g||{})},{deep:!0,immediate:!0});function k(g){Object.prototype.hasOwnProperty.call(g,"fog")&&(u.value=!!g.fog),Object.prototype.hasOwnProperty.call(g,"hbao")&&(c.value=!!g.hbao),Object.prototype.hasOwnProperty.call(g,"tiltShift")&&(d.value=!!g.tiltShift),Object.prototype.hasOwnProperty.call(g,"atmosphere")&&(p.value=!!g.atmosphere)}function T(){let g=0;x=window.setInterval(async()=>{var _,M;g+=1;const a=(_=e.getViewer)==null?void 0:_.call(e),l=((M=e.getCesium)==null?void 0:M.call(e))||window.Cesium;if(a&&l){clearInterval(x),x=null;try{ie(a),z(a),ue(a,l),Me(a,l),r.success("高级视觉效果已启用。")}catch(O){r.error("高级视觉效果初始化失败",O),r.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}g>=150&&(clearInterval(x),x=null,r.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function ie(g){var l,_,M,O,V,o;const a=g==null?void 0:g.scene;if(a){if(typeof a.highDynamicRange=="boolean"&&(y.hdr=a.highDynamicRange),(l=a.postProcessStages)!=null&&l.bloom){const s=a.postProcessStages.bloom;y.bloom={enabled:!!s.enabled,contrast:(_=s.uniforms)==null?void 0:_.contrast,brightness:(M=s.uniforms)==null?void 0:M.brightness,delta:(O=s.uniforms)==null?void 0:O.delta,sigma:(V=s.uniforms)==null?void 0:V.sigma,stepSize:(o=s.uniforms)==null?void 0:o.stepSize}}a.skyAtmosphere&&(y.sky={hueShift:a.skyAtmosphere.hueShift,saturationShift:a.skyAtmosphere.saturationShift,brightnessShift:a.skyAtmosphere.brightnessShift})}}function ue(g,a){var _;!((_=g==null?void 0:g.scene)!=null&&_.postProcessStages)||!(a!=null&&a.PostProcessStage)||(Re(g,a),Be(g,a),Te(g,a),p.value?ve(g,a,1200):Le(g))}function z(g){var l;const a=g==null?void 0:g.scene;(l=a==null?void 0:a.renderError)!=null&&l.addEventListener&&(a.rethrowRenderErrors=!1,h=a.renderError.addEventListener((_,M)=>{r.error("Cesium 渲染异常，已触发降级保护",M),ne(),F||(F=!0,r.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function ne(){u.value=!1,d.value=!1,c.value=!1,p.value=!1,w&&(w.enabled=!1),R&&(R.enabled=!1),E&&(E.enabled=!1)}function Re(g,a){w||(w=new a.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new a.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),g.scene.postProcessStages.add(w),w.enabled=u.value)}function Be(g,a){var _,M;const l=(_=g==null?void 0:g.scene)==null?void 0:_.postProcessStages;l&&(l.ambientOcclusion?(E=l.ambientOcclusion,N=!1):(M=a==null?void 0:a.PostProcessStageLibrary)!=null&&M.createAmbientOcclusionStage&&(E=a.PostProcessStageLibrary.createAmbientOcclusionStage(),l.add(E),N=!0),E&&(E.enabled=c.value,E.uniforms&&("intensity"in E.uniforms&&(E.uniforms.intensity=4.2),"bias"in E.uniforms&&(E.uniforms.bias=.08),"lengthCap"in E.uniforms&&(E.uniforms.lengthCap=.35),"stepSize"in E.uniforms&&(E.uniforms.stepSize=1.8),"frustumLength"in E.uniforms&&(E.uniforms.frustumLength=1200))))}function Te(g,a){R||(R=new a.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),g.scene.postProcessStages.add(R),R.enabled=!1)}function Me(g,a){const l=g==null?void 0:g.scene;l&&(m=l.preRender.addEventListener(()=>{var V;const _=ze(g),M=Number(((V=g==null?void 0:g.camera)==null?void 0:V.pitch)??-1.2);P+=1;const O=typeof performance<"u"?performance.now():Date.now();if(O-j>=1e3&&(U=Math.round(P*1e3/(O-j)),P=0,j=O),w&&(w.enabled=u.value,w.uniforms.cameraHeightFactor=xe(_,150,12e3),w.uniforms.fogDensity=55e-5+(1-w.uniforms.cameraHeightFactor)*.00125),E&&(E.enabled=c.value),R){const o=M>-.62,s=o?We((M+.62)/.5):0;R.enabled=d.value&&o,R.uniforms.blurStrength=s}p.value?ve(g,a,_):Le(g)}))}function ve(g,a,l){var o;const _=g==null?void 0:g.scene;if(!_)return;D||(D=sr(g)),or(g,a),typeof _.highDynamicRange=="boolean"&&(_.highDynamicRange=!0);const M=(o=_.postProcessStages)==null?void 0:o.bloom;M&&(M.enabled=!0,M.uniforms&&("contrast"in M.uniforms&&(M.uniforms.contrast=149),"brightness"in M.uniforms&&(M.uniforms.brightness=-.12),"delta"in M.uniforms&&(M.uniforms.delta=1),"sigma"in M.uniforms&&(M.uniforms.sigma=3.25),"stepSize"in M.uniforms&&(M.uniforms.stepSize=5)));const O=_.skyAtmosphere;if(!O)return;const V=xe(l,500,12e4);O.hueShift=-.035+V*.035,O.saturationShift=-.14+V*.09,O.brightnessShift=.03+(1-V)*.08}function Le(g){var M,O;const a=g==null?void 0:g.scene;if(!a)return;const l=((M=e.getCesium)==null?void 0:M.call(e))||window.Cesium;if(D){lr(g,l,D),D=null;return}typeof a.highDynamicRange=="boolean"&&y.hdr!==null&&(a.highDynamicRange=y.hdr);const _=(O=a.postProcessStages)==null?void 0:O.bloom;_&&y.bloom&&(_.enabled=y.bloom.enabled,_.uniforms&&("contrast"in _.uniforms&&y.bloom.contrast!==void 0&&(_.uniforms.contrast=y.bloom.contrast),"brightness"in _.uniforms&&y.bloom.brightness!==void 0&&(_.uniforms.brightness=y.bloom.brightness),"delta"in _.uniforms&&y.bloom.delta!==void 0&&(_.uniforms.delta=y.bloom.delta),"sigma"in _.uniforms&&y.bloom.sigma!==void 0&&(_.uniforms.sigma=y.bloom.sigma),"stepSize"in _.uniforms&&y.bloom.stepSize!==void 0&&(_.uniforms.stepSize=y.bloom.stepSize))),a.skyAtmosphere&&y.sky&&(a.skyAtmosphere.hueShift=y.sky.hueShift,a.skyAtmosphere.saturationShift=y.sky.saturationShift,a.skyAtmosphere.brightnessShift=y.sky.brightnessShift)}function ke(){A&&(clearInterval(A),A=null)}async function Ie(){var _,M;const g=!b.value;if(b.value=g,!g){ke();return}const a=(_=e.getViewer)==null?void 0:_.call(e),l=((M=e.getCesium)==null?void 0:M.call(e))||window.Cesium;if(!a||!l){b.value=!1,r.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Fe(a,l),ce(a,l),ee(a,l)}catch(O){b.value=!1,r.error("图表模块加载失败",O)}}async function Fe(g,a){await $(),await Gt(),n.value&&(S||(S=L.init(n.value),se()),i||(i=()=>{S==null||S.resize()},window.addEventListener("resize",i)),S.resize(),ee(g,a))}function ce(g,a){A||(A=window.setInterval(()=>{!S||!b.value||ee(g,a)},1200))}function ee(g,a){var V;const l=new Date,_=`${Ue(l.getHours())}:${Ue(l.getMinutes())}:${Ue(l.getSeconds())}`,M=Number((ze(g)/1e3).toFixed(2)),O=Number(a.Math.toDegrees(((V=g==null?void 0:g.camera)==null?void 0:V.pitch)??0).toFixed(1));Oe(Z.labels,_,20),Oe(Z.cameraHeightKm,M,20),Oe(Z.pitchDeg,O,20),Oe(Z.fps,U,20),S.setOption({xAxis:{data:Z.labels},series:[{data:Z.cameraHeightKm},{data:Z.pitchDeg},{data:Z.fps}]})}function se(){S&&S.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function fe(){var l,_;x&&(clearInterval(x),x=null),ke();const g=(l=e.getViewer)==null?void 0:l.call(e),a=(_=g==null?void 0:g.scene)==null?void 0:_.postProcessStages;m&&(m(),m=null),h&&(h(),h=null),w&&a&&a.remove(w),w=null,R&&a&&a.remove(R),R=null,E&&(N&&a&&a.remove(E),E=null),N=!1,g&&Le(g),i&&(window.removeEventListener("resize",i),i=null),S&&(S.dispose(),S=null),L=null,F=!1}function ze(g){var M,O,V;const a=(O=(M=g==null?void 0:g.scene)==null?void 0:M.globe)==null?void 0:O.ellipsoid,l=(V=g==null?void 0:g.camera)==null?void 0:V.positionWC;if(!a||!l)return 0;const _=a.cartesianToCartographic(l);return Math.max(0,Number((_==null?void 0:_.height)??0))}function xe(g,a,l){return!Number.isFinite(g)||l<=a?0:We((g-a)/(l-a))}function We(g){return Math.min(1,Math.max(0,Number(g)||0))}function Oe(g,a,l){g.push(a),g.length>l&&g.shift()}function Ue(g){return String(g).padStart(2,"0")}return(g,a)=>t.headless?te("",!0):(H(),W("div",pr,[f("div",gr,[f("div",vr,[a[4]||(a[4]=f("span",{class:"panel-title"},"Cinematic FX",-1)),f("button",{class:"panel-btn",onClick:Ie},ae(b.value?"隐藏图表":"显示图表"),1)]),f("div",yr,[f("label",xr,[oe(f("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>u.value=l),type:"checkbox"},null,512),[[Ke,u.value]]),a[5]||(a[5]=f("span",null,"电影级高度雾",-1))]),f("label",_r,[oe(f("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>c.value=l),type:"checkbox"},null,512),[[Ke,c.value]]),a[6]||(a[6]=f("span",null,"HBAO 微阴影",-1))]),f("label",br,[oe(f("input",{"onUpdate:modelValue":a[2]||(a[2]=l=>d.value=l),type:"checkbox"},null,512),[[Ke,d.value]]),a[7]||(a[7]=f("span",null,"移轴摄影",-1))]),f("label",Sr,[oe(f("input",{"onUpdate:modelValue":a[3]||(a[3]=l=>p.value=l),type:"checkbox"},null,512),[[Ke,p.value]]),a[8]||(a[8]=f("span",null,"动态大气 + Bloom",-1))])]),oe(f("div",{ref_key:"chartRef",ref:n,class:"fx-chart"},null,512),[[Ye,b.value]])])]))}},Tr=tt(wr,[["__scopeId","data-v-1e562e70"]]),Mr={key:0,class:"launcher-count"},Lr={class:"panel-header"},Fr={class:"panel-title-block"},Pr={class:"panel-mark"},Ar={class:"panel-copy"},Cr={class:"panel-subtitle"},Er={class:"panel-actions"},Dr=["title"],Rr={class:"panel-tabs","aria-label":"3D 工具分类"},kr=["aria-pressed","onClick"],Ir={class:"panel-scroll"},zr={class:"panel-page"},Or={class:"overview-grid"},Nr={class:"overview-tile"},Hr={class:"overview-tile"},Br={class:"overview-tile"},Ur={key:0,class:"quick-actions"},Wr=["disabled","onClick"],$r={key:1,class:"empty-state"},Gr={class:"panel-page"},Vr={key:0,class:"option-group"},qr={class:"section-head"},Xr={class:"option-grid"},Yr=["disabled","aria-pressed","title","onClick"],jr={class:"custom-basemap-input-row"},Zr=["disabled"],Kr={key:0,class:"custom-basemap-current"},Jr={key:1,class:"option-group"},Qr={class:"section-head"},ea={class:"option-grid"},ta=["aria-pressed","title","onClick"],ra={key:2,class:"option-group"},aa={class:"section-head"},ia={class:"overlay-list"},na=["disabled","aria-pressed","title","onClick"],oa={class:"overlay-copy"},sa={class:"overlay-title"},la={key:0,class:"overlay-desc"},ca={key:3,class:"empty-state"},ua={class:"panel-page"},da={class:"module-list"},ha=["aria-expanded","onClick"],ma={class:"module-icon"},fa={class:"module-copy"},pa={class:"module-title"},ga={key:0,class:"module-desc"},va={class:"module-head-side"},ya={key:0,class:"module-body"},xa={key:0,class:"module-actions"},_a=["disabled","onClick"],ba={key:1,class:"control-list"},Sa={class:"control-label"},wa={class:"control-label-text"},Ta=["aria-label","title"],Ma=["min","max","step","value","disabled","onInput"],La=["min","max","step","value","disabled","onInput"],Fa=["value","disabled","onInput"],Pa=["value","disabled","onChange"],Aa=["value"],Ca=["aria-pressed","disabled","onClick"],Ea={key:4,class:"control-value"},Da={key:0,class:"empty-state"},Ra={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(t,{emit:e}){const r=t,n=e,u=D(),c=G(u.activeTab||"scene"),d=G(!!u.compactMode),p=G(new Set(u.expandedModuleIds||["effects"])),b=G(r.customBasemapUrl||""),w=me(()=>r.embedded||r.open),R=me(()=>r.modules.find(y=>y.id==="scene")||null),E=me(()=>{var y;return((y=R.value)==null?void 0:y.actions)||[]}),N=me(()=>r.modules.filter(y=>y.id!=="scene")),S=me(()=>N.value.filter(y=>y.statusTone==="success"||y.statusTone==="warning").length),L=[{id:"scene",label:"场景",icon:ot},{id:"layers",label:"图层",icon:gt},{id:"modules",label:"模块",icon:nt}],C=me(()=>{var y;return((y=r.basemapOptions.find(k=>k.value===r.activeBasemap))==null?void 0:y.label)||"未选择"}),x=me(()=>{var y;return((y=r.terrainOptions.find(k=>k.value===r.activeTerrain))==null?void 0:y.label)||"未选择"});he(()=>r.modules.map(y=>y.id),y=>{y.includes(c.value)||c.value==="scene"||c.value==="layers"||c.value==="modules"||(c.value="scene")},{immediate:!0}),he([c,d,p],P,{deep:!0}),he(()=>r.customBasemapUrl,y=>{y!==b.value&&(b.value=y||"")});function A(y){n("update:open",y)}function i(y){return p.value.has(y)}function m(y){const k=new Set(p.value);k.has(y)?k.delete(y):k.add(y),p.value=k}function h(y){y!=null&&y.disabled||n("update:activeBasemap",y.value)}function F(){n("custom-basemap-submit",{url:b.value})}function D(){if(typeof window>"u")return{};try{const y=window.localStorage.getItem(r.storageKey);return y?JSON.parse(y):{}}catch{return{}}}function P(){if(!(typeof window>"u"))try{window.localStorage.setItem(r.storageKey,JSON.stringify({activeTab:c.value,compactMode:d.value,expandedModuleIds:[...p.value]}))}catch{}}function U(y){return{scene:ot,effects:ar,wind:rr,fluid:tr}[y]||nt}function j(y,k){var ie;return((ie={scene:{home:Qt,everest:yt,tileset:Jt},wind:{load:Kt,clear:_t},fluid:{pick:xt,clear:_t}}[y])==null?void 0:ie[k])||er}function Q(y,k){n("module-action",{moduleId:y,actionId:k})}function $(y,k,T){const ie=k.type==="range"?Number(T):T;n("control-change",{moduleId:y,controlId:k.id,value:ie})}function Z(y){y.disabled||n("overlay-toggle",{overlayId:y.value,value:!y.active})}return(y,k)=>(H(),W("aside",{class:de(["cesium-tool-shell",{"is-open":w.value,"is-embedded":t.embedded}])},[!t.embedded&&!w.value?(H(),W("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:k[0]||(k[0]=T=>A(!0))},[Se(J(nt),{size:18,"stroke-width":"2"}),k[5]||(k[5]=f("span",null,"高级控制台",-1)),S.value?(H(),W("span",Mr,ae(S.value),1)):te("",!0)])):te("",!0),oe(f("section",{class:de(["cesium-tool-panel",{compact:d.value}]),"aria-label":"Cesium 高级控制台"},[f("header",Lr,[f("div",Fr,[f("span",Pr,[Se(J(ot),{size:18,"stroke-width":"2"})]),f("span",Ar,[k[6]||(k[6]=f("span",{class:"panel-title"},"3D 高级控制台",-1)),f("span",Cr,ae(C.value)+" / "+ae(x.value),1)])]),f("div",Er,[f("button",{class:"icon-btn",type:"button",title:d.value?"切换为舒展布局":"切换为紧凑布局",onClick:k[1]||(k[1]=T=>d.value=!d.value)},[Se(J(qt),{size:16,"stroke-width":"2"})],8,Dr),t.embedded?te("",!0):(H(),W("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:k[2]||(k[2]=T=>A(!1))},[Se(J(Xt),{size:17,"stroke-width":"2"})]))])]),f("nav",Rr,[(H(),W(ge,null,Pe(L,T=>f("button",{key:T.id,class:de(["tab-btn",{active:c.value===T.id}]),type:"button","aria-pressed":c.value===T.id,onClick:ie=>c.value=T.id},[(H(),De($e(T.icon),{size:15,"stroke-width":"2"})),f("span",null,ae(T.label),1)],10,kr)),64))]),f("div",Ir,[oe(f("section",zr,[f("div",Or,[f("div",Nr,[k[7]||(k[7]=f("span",{class:"overview-label"},"地图源",-1)),f("strong",null,ae(C.value),1)]),f("div",Hr,[k[8]||(k[8]=f("span",{class:"overview-label"},"地形",-1)),f("strong",null,ae(x.value),1)]),f("div",Br,[k[9]||(k[9]=f("span",{class:"overview-label"},"模块",-1)),f("strong",null,ae(S.value)+"/"+ae(N.value.length),1)])]),E.value.length?(H(),W("div",Ur,[(H(!0),W(ge,null,Pe(E.value,T=>(H(),W("button",{key:T.id,class:de(["tool-action",[T.variant||"default",{active:T.active}]]),disabled:T.disabled,type:"button",onClick:ie=>Q(R.value.id,T.id)},[(H(),De($e(j(R.value.id,T.id)),{size:15,"stroke-width":"2"})),ft(" "+ae(T.label),1)],10,Wr))),128))])):(H(),W("div",$r," 暂无场景快捷操作 "))],512),[[Ye,c.value==="scene"]]),oe(f("section",Gr,[t.basemapOptions.length?(H(),W("div",Vr,[f("div",qr,[Se(J(gt),{size:16,"stroke-width":"2"}),k[10]||(k[10]=f("span",null,"地图源",-1))]),f("div",Xr,[(H(!0),W(ge,null,Pe(t.basemapOptions,T=>(H(),W("button",{key:T.value,class:de(["option-card",{active:T.value===t.activeBasemap}]),type:"button",disabled:T.disabled,"aria-pressed":T.value===t.activeBasemap,title:T.description||T.label,onClick:ie=>h(T)},[f("span",null,ae(T.label),1),T.value===t.activeBasemap?(H(),De(J(vt),{key:0,size:15,"stroke-width":"2.4"})):te("",!0)],10,Yr))),128))]),f("form",{class:"custom-basemap-editor",onSubmit:pt(F,["prevent"])},[f("div",jr,[Se(J(Yt),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),oe(f("input",{"onUpdate:modelValue":k[3]||(k[3]=T=>b.value=T),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[we,b.value]]),f("button",{class:"custom-basemap-submit",type:"submit",disabled:!b.value.trim(),title:"加载自定义 XYZ"},[Se(J(jt),{size:14,"stroke-width":"2"}),k[11]||(k[11]=f("span",null,"加载",-1))],8,Zr)]),t.customBasemapUrl?(H(),W("div",Kr,ae(t.customBasemapUrl),1)):te("",!0)],32)])):te("",!0),t.terrainOptions.length?(H(),W("div",Jr,[f("div",Qr,[Se(J(yt),{size:16,"stroke-width":"2"}),k[12]||(k[12]=f("span",null,"地形",-1))]),f("div",ea,[(H(!0),W(ge,null,Pe(t.terrainOptions,T=>(H(),W("button",{key:T.value,class:de(["option-card",{active:T.value===t.activeTerrain}]),type:"button","aria-pressed":T.value===t.activeTerrain,title:T.description||T.label,onClick:ie=>y.$emit("update:activeTerrain",T.value)},[f("span",null,ae(T.label),1),T.value===t.activeTerrain?(H(),De(J(vt),{key:0,size:15,"stroke-width":"2.4"})):te("",!0)],10,ta))),128))])])):te("",!0),t.overlayOptions.length?(H(),W("div",ra,[f("div",aa,[Se(J(xt),{size:16,"stroke-width":"2"}),k[13]||(k[13]=f("span",null,"叠加层",-1))]),f("div",ia,[(H(!0),W(ge,null,Pe(t.overlayOptions,T=>(H(),W("button",{key:T.value,class:de(["overlay-row",{active:!!T.active}]),type:"button",disabled:T.disabled,"aria-pressed":!!T.active,title:T.description||T.label,onClick:ie=>Z(T)},[f("span",oa,[f("span",sa,ae(T.label),1),T.description?(H(),W("span",la,ae(T.description),1)):te("",!0)]),f("span",{class:de(["toggle-control",{active:!!T.active}]),"aria-hidden":"true"},[...k[14]||(k[14]=[f("span",{class:"toggle-track"},[f("span",{class:"toggle-thumb"})],-1)])],2)],10,na))),128))])])):te("",!0),!t.basemapOptions.length&&!t.terrainOptions.length&&!t.overlayOptions.length?(H(),W("div",ca," 暂无图层配置项 ")):te("",!0)],512),[[Ye,c.value==="layers"]]),oe(f("section",ua,[f("div",da,[(H(!0),W(ge,null,Pe(N.value,T=>{var ie,ue;return H(),W("article",{key:T.id,class:de(["module-item",{expanded:i(T.id)}])},[f("button",{class:"module-head",type:"button","aria-expanded":i(T.id),onClick:z=>m(T.id)},[f("span",ma,[(H(),De($e(U(T.id)),{size:16,"stroke-width":"2"}))]),f("span",fa,[f("span",pa,ae(T.title),1),T.description?(H(),W("span",ga,ae(T.description),1)):te("",!0)]),f("span",va,[T.status?(H(),W("span",{key:0,class:de(["module-status",T.statusTone||"neutral"])},ae(T.status),3)):te("",!0),Se(J(Zt),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,ha),i(T.id)?(H(),W("div",ya,[(ie=T.actions)!=null&&ie.length?(H(),W("div",xa,[(H(!0),W(ge,null,Pe(T.actions,z=>(H(),W("button",{key:z.id,class:de(["tool-action",[z.variant||"default",{active:z.active}]]),disabled:z.disabled,type:"button",onClick:ne=>Q(T.id,z.id)},[(H(),De($e(j(T.id,z.id)),{size:14,"stroke-width":"2"})),ft(" "+ae(z.label),1)],10,_a))),128))])):te("",!0),(ue=T.controls)!=null&&ue.length?(H(),W("div",ba,[(H(!0),W(ge,null,Pe(T.controls,z=>(H(),W("label",{key:z.id,class:de(["control-row",`control-${z.type}`])},[f("span",Sa,[f("span",wa,ae(z.label),1),z.tooltip?(H(),W("span",{key:0,class:"control-help","aria-label":z.tooltip,title:z.tooltip,onClick:k[4]||(k[4]=pt(()=>{},["prevent","stop"]))}," ? ",8,Ta)):te("",!0)]),z.type==="range"?(H(),W(ge,{key:0},[f("input",{class:"control-range",type:"range",min:z.min,max:z.max,step:z.step,value:z.value,disabled:z.disabled,onInput:ne=>$(T.id,z,ne.target.value)},null,40,Ma),f("input",{class:"control-number",type:"number",min:z.min,max:z.max,step:z.step,value:z.value,disabled:z.disabled,onInput:ne=>$(T.id,z,ne.target.value)},null,40,La)],64)):z.type==="color"?(H(),W(ge,{key:1},[f("input",{class:"control-color",type:"color",value:z.value,disabled:z.disabled,onInput:ne=>$(T.id,z,ne.target.value)},null,40,Fa),f("span",{class:"control-color-swatch",style:It({backgroundColor:z.value})},null,4)],64)):z.type==="select"?(H(),W("select",{key:2,class:"control-select",value:z.value,disabled:z.disabled,onChange:ne=>$(T.id,z,ne.target.value)},[(H(!0),W(ge,null,Pe(z.options||[],ne=>(H(),W("option",{key:ne.value,value:ne.value},ae(ne.label),9,Aa))),128))],40,Pa)):z.type==="toggle"?(H(),W("button",{key:3,class:de(["toggle-control",{active:!!z.value}]),type:"button","aria-pressed":!!z.value,disabled:z.disabled,onClick:ne=>$(T.id,z,!z.value)},[...k[15]||(k[15]=[f("span",{class:"toggle-track"},[f("span",{class:"toggle-thumb"})],-1)])],10,Ca)):te("",!0),z.displayValue?(H(),W("span",Ea,ae(z.displayValue),1)):te("",!0)],2))),128))])):te("",!0)])):te("",!0)],2)}),128))]),N.value.length?te("",!0):(H(),W("div",Da," 暂无可用功能模块 "))],512),[[Ye,c.value==="modules"]])])],2),[[Ye,t.embedded||w.value]])],2))}},ka=tt(Ra,[["__scopeId","data-v-d54db9a6"]]);function Ia(t){if(!t)throw new Error("Cesium runtime is required for FluidRenderer.");function e(A){return(A==null?void 0:A._view)||(A==null?void 0:A.view)}function r(A){const i=e(A);if(!(i!=null&&i.passState))throw new Error("Cesium scene passState is unavailable.");return i.passState}function n(A){const i=e(A);return(i==null?void 0:i.frustumCommandsList)||(i==null?void 0:i._frustumCommandsList)||[]}const u=`
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
`,c=`
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
`,d=`
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
`,p=`
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
`,b=`
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
`,w=`
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
`;class R{constructor(i){this.commandType=i.commandType,this.geometry=i.geometry,this.attributeLocations=i.attributeLocations,this.primitiveType=i.primitiveType,this.uniformMap=i.uniformMap,this.vertexShaderSource=i.vertexShaderSource,this.fragmentShaderSource=i.fragmentShaderSource,this.rawRenderState=i.rawRenderState,this.framebuffer=i.framebuffer,this.isPostRender=i.isPostRender,this.outputTexture=i.outputTexture,this.autoClear=t.defaultValue(i.autoClear,!1),this.preExecute=i.preExecute,this.modelMatrix=t.defaultValue(i.modelMatrix,t.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new t.ClearCommand({color:new t.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:t.Pass.OPAQUE}))}createCommand(i){switch(this.commandType){case"Draw":{const m=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW}),h=t.ShaderProgram.fromCache({context:i,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),F=t.RenderState.fromCache(this.rawRenderState);return new t.DrawCommand({owner:this,vertexArray:m,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:h,framebuffer:this.framebuffer,renderState:F,pass:t.Pass.OPAQUE})}case"Compute":return new t.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(i,m){this.geometry=m;const h=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=h}update(i){this.show&&(t.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(i.context),this.commandToExecute.isPostRender=this.isPostRender),t.defined(this.preExecute)&&this.preExecute(this),t.defined(this.clearCommand)&&i.commandList.push(this.clearCommand),i.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return t.defined(this.commandToExecute)&&(t.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),t.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),t.destroyObject(this)}}class E{constructor(){}static loadText(i){const m=new XMLHttpRequest;return m.open("GET",i,!1),m.send(),m.responseText}static getFullscreenQuad(){return new t.Geometry({attributes:new t.GeometryAttributes({position:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(i){if(t.defined(i.arrayBufferView)){const h={};h.arrayBufferView=i.arrayBufferView,i.source=h,i.flipY=!1}return new t.Texture(i)}static createDepthFramebuffer(i,m,h){return new t.Framebuffer({context:i,colorTextures:[this.createTexture({context:i,width:m,height:h,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(m*h*4)})],depthRenderbuffer:new t.Renderbuffer({context:i,width:m,height:h,format:t.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(i,m,h,F=!1){const D={context:i,colorTextures:[m],destroyAttachments:F};return h&&(D.depthTexture=h),new t.Framebuffer(D)}static createRawRenderState(i){const F={viewport:i.viewport,depthTest:i.depthTest,depthMask:i.depthMask,blending:i.blending};return t.Appearance.getDefaultRenderState(!0,!1,F)}}const x=class x{constructor(i,m={}){if(!i)throw new Error("Cesium Viewer is required");this.viewer=i,this._initConfiguration(m),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(i){this.config={resolution:new t.Cartesian2(i.width||x.DEFAULTS.width,i.height||x.DEFAULTS.height),dimensions:i.dimensions||x.DEFAULTS.dimensions.clone(),heightRange:{min:i.minHeight??x.DEFAULTS.heightRange[0],max:i.maxHeight??x.DEFAULTS.heightRange[1]},baseHeight:i.baseHeight??x.DEFAULTS.baseHeight,fluidParams:i.fluidParams||x.DEFAULTS.fluidParams.clone(),customParams:i.customParams||x.DEFAULTS.customParams.clone(),waterColor:i.waterColor||x.DEFAULTS.waterColor.clone(),lonLat:i.lonLat||[...x.DEFAULTS.lonLat],timeStep:i.timeStep||x.DEFAULTS.timeStep,heightMapSource:i.heightMapSource||x.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(i){const m=Number(i);!Number.isFinite(m)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,m)),this.resetSimulation())}resetSimulation(){var i,m;this._frameCount=0,(m=(i=this.viewer.scene).requestRender)==null||m.call(i)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const i=()=>E.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:i(),B:i(),C:i(),D:i()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(i){if(!(i!=null&&i.arrayBufferView)||!i.width||!i.height)throw new Error("Invalid height map source.");return E.createTexture({context:this.viewer.scene.context,width:i.width,height:i.height,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:i.arrayBufferView,sampler:new t.Sampler({wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var y,k;const i=this.viewer.scene.context,m=E.createDepthFramebuffer(i,this.config.resolution.x,this.config.resolution.y),h=this.viewer.scene,F=h.frameState,D=r(this.viewer.scene),P=h.camera,U=F.camera,j=D.framebuffer,Q=t.BoundingRectangle.clone(D.viewport,new t.BoundingRectangle);let $=null,Z=[];try{D.viewport.x=0,D.viewport.y=0,D.viewport.width=this.config.resolution.x,D.viewport.height=this.config.resolution.y,D.framebuffer=m,h.camera=this.heightMapCamera,F.camera=this.heightMapCamera,F.context.uniformState.updateCamera(this.heightMapCamera),Z=this._processHeightMapShaders(),this._renderDepthPrepass(D);const T=E.createTexture({context:i,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT});return $=E.createFramebuffer(i,T),this._copyTexture(m.getColorTexture(0),$),T}finally{this._restoreHeightMapShaders(Z),D.framebuffer=j,t.BoundingRectangle.clone(Q,D.viewport),h.camera=P,F.camera=U,U&&F.context.uniformState.updateCamera(U),$&&!((y=$.isDestroyed)!=null&&y.call($))&&$.destroy(),m&&!((k=m.isDestroyed)!=null&&k.call(m))&&m.destroy()}}_renderDepthPrepass(i){const m=this.viewer.scene.frameState;m.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(F=>F.execute(this.viewer.scene.context,i))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:t.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const i={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:c}),this._createComputePass("B",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:d}),this._createComputePass("C",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:p}),this._createComputePass("D",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:b})]}_createComputePass(i,{uniforms:m,shaderSource:h}){return new R({commandType:"Compute",uniformMap:m,fragmentShaderSource:new t.ShaderSource({sources:[u,h]}),geometry:E.getFullscreenQuad(),outputTexture:this.textures[i],preExecute:F=>F.commandToExecute.outputTexture=this.textures[i]})}_createMainRenderPass(){const i=S([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new R({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new t.ShaderSource({sources:[u,w]}),geometry:this._createBoxGeometry(),modelMatrix:i,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var i,m,h,F;return(F=(h=(m=(i=e(this.viewer.scene))==null?void 0:i.globeDepth)==null?void 0:m.colorFramebufferManager)==null?void 0:h._colorTextures)==null?void 0:F[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(i=>this.viewer.scene.primitives.add(i)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(i){const m=this.viewer.camera.getPickRay(i);return this.viewer.scene.globe.pick(m,this.viewer.scene)}_createOrthographicCamera(){const i=new t.Camera(this.viewer.scene);i.frustum=new t.OrthographicOffCenterFrustum;const[m,h]=this.config.lonLat,F=t.Cartesian3.fromDegrees(m,h,this.config.baseHeight),D=t.Transforms.eastNorthUpToFixedFrame(F),P=i.frustum;P.near=.01,P.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),P.left=-this.config.dimensions.x/2,P.right=this.config.dimensions.x/2,P.bottom=-this.config.dimensions.y/2,P.top=this.config.dimensions.y/2;const U=t.Matrix4.getColumn(D,2,new t.Cartesian3);t.Cartesian3.negate(U,U);const j=t.Matrix4.getColumn(D,1,new t.Cartesian3),Q=t.Matrix4.getColumn(D,0,new t.Cartesian3),$=t.Cartesian3.multiplyByScalar(U,-P.far,new t.Cartesian3);return i.position=t.Cartesian3.add(F,$,new t.Cartesian3),i.direction=U,i.up=j,i.right=Q,i}destroy(){var i,m;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(h=>{h&&this.viewer.scene.primitives.remove(h)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(h=>{var F;h&&!((F=h.isDestroyed)!=null&&F.call(h))&&h.destroy()}),this.textures={},this._heightMap&&!((m=(i=this._heightMap).isDestroyed)!=null&&m.call(i))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(i,m){const h=this.viewer.scene.context,F=r(this.viewer.scene),D=h.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>i},owner:this}),P=F.framebuffer;F.framebuffer=m,D.execute(h,F),F.framebuffer=P}_getDepthRenderCommands(){var h,F;const i=[],m=n(this.viewer.scene);for(let D=0;D<m.length;++D){const P=m[D],U=(h=P==null?void 0:P.commands)==null?void 0:h[2],j=((F=P==null?void 0:P.indices)==null?void 0:F[2])??(U==null?void 0:U.length)??0;U&&j>0&&i.push(...U.slice(0,j))}return i}_processHeightMapShaders(){const i=[],m=t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),h=t.Matrix4.inverse(m,new t.Matrix4),F=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(P=>{var Z;if(!((Z=P==null?void 0:P.shaderProgram)!=null&&Z.fragmentShaderSource)||!P.uniformMap)return;const U=Object.prototype.hasOwnProperty.call(P.uniformMap,"u_inverseEnuMatrix"),j=P.uniformMap.u_inverseEnuMatrix,Q=P.shaderProgram,$=new t.Matrix4;P.uniformMap.u_inverseEnuMatrix=()=>{const y=P.modelMatrix||t.Matrix4.IDENTITY;return t.Matrix4.multiply(h,y,$)},P.heightMap_ShaderProgram||(P.heightMap_ShaderProgram=this._getDerivedShaderProgram(F.context,P.shaderProgram,"Height_Map")),P.shaderProgram=P.heightMap_ShaderProgram,i.push({command:P,hadInverseUniform:U,originalInverseUniform:j,originalShaderProgram:Q})}),i}_restoreHeightMapShaders(i){i.forEach(m=>{const{command:h,hadInverseUniform:F,originalInverseUniform:D,originalShaderProgram:P}=m;h!=null&&h.uniformMap&&(h.shaderProgram=P,F?h.uniformMap.u_inverseEnuMatrix=D:delete h.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(i,m,h){let F=i.shaderCache.getDerivedShaderProgram(m,h);return t.defined(F)||(F=this._createHeightMapShaderProgram(i,m,h)),F}_createHeightMapShaderProgram(i,m,h){const F=this._modifyFragmentShader(m.fragmentShaderSource);return i.shaderCache.createDerivedShaderProgram(m,h,{vertexShaderSource:m.vertexShaderSource,fragmentShaderSource:F,attributeLocations:m._attributeLocations})}_modifyFragmentShader(i){const m=i.sources.map(h=>t.ShaderSource.replaceMain(h,"czm_heightMap_main"));return m.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new t.ShaderSource({sources:m,defines:i.defines})}_createBoxGeometry(){return t.BoxGeometry.createGeometry(t.BoxGeometry.fromDimensions({vertexFormat:t.VertexFormat.POSITION_AND_ST,dimensions:new t.Cartesian3(1,1,1)}))}_getAttributeLocations(){return t.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:t.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new t.ShaderSource({sources:[`
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
            }`]})}};mt(x,"DEFAULTS",{width:1024,height:1024,dimensions:new t.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new t.Cartesian4(.995,.25,1e-4,.03),customParams:new t.Cartesian4(10,20,.2,10),waterColor:new t.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let N=x;const S=(A=[0,0,0],i=[0,0,0],m=[1,1,1])=>{const h=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationX(t.Math.toRadians(i[0]))),F=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationY(t.Math.toRadians(i[1]))),D=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationZ(t.Math.toRadians(i[2])));A instanceof t.Cartesian3||(A=t.Cartesian3.fromDegrees(...A));const P=t.Transforms.eastNorthUpToFixedFrame(A);t.Matrix4.multiply(P,h,P),t.Matrix4.multiply(P,F,P),t.Matrix4.multiply(P,D,P);const U=t.Matrix4.fromScale(new t.Cartesian3(...m));return t.Matrix4.multiply(P,U,new t.Matrix4)},L=`
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
    `;function C(){return new t.PostProcessStage({fragmentShader:L})}return{FluidRenderer:N,createSkyEffect:C}}const za={key:0,class:"fluid-root"},Oa={class:"fluid-panel"},Na={class:"panel-actions"},Ha=["disabled"],Ba={key:0,class:"selected-text"},Ua={class:"param-list"},Wa={class:"param-row"},$a={class:"param-row"},Ga={class:"param-row"},Va={key:0,class:"param-row"},qa=["min","max","step"],Xa=["min","max","step"],Ya={class:"param-row color-row"},bt=1024,Qe=1e4,St=1200,ja=100,Za=.01,Ka=.03,Ja=60,st=64,Qa=160,ei={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(t,{expose:e,emit:r}){const n=t,u=r,c=ct(),d=G(10),p=G(20),b=G(3),w=G("#0d4fa3"),R=G(null),E=G(null),N=G(null),S=G(!1),L=G(!1),C=G(null),x=G(null);let A=null,i=null,m=null,h=null,F=null,D=null,P=0;const U=me(()=>!Number.isFinite(C.value)||!Number.isFinite(x.value)?"":`经度 ${C.value.toFixed(6)} / 纬度 ${x.value.toFixed(6)}`),j=me(()=>Number.isFinite(E.value)&&Number.isFinite(N.value)),Q=me(()=>{if(!j.value)return 1;const o=Math.abs(N.value-E.value);return Math.max(o/1e3,.01)});he([d,p,b,w],Oe),he(R,Ue),he(()=>n.params,o=>{Z(o||{})},{deep:!0,immediate:!0}),he([S,L,U,R,E,N],y,{immediate:!0}),Vt(()=>{O(!0)});function $(){var v,I;const o=(v=n.getViewer)==null?void 0:v.call(n),s=((I=n.getCesium)==null?void 0:I.call(n))||window.Cesium;if(!o||!s)return c.warning("Cesium 场景尚未就绪。"),null;if(!A){const B=Ia(s);A=B.FluidRenderer,i=B.createSkyEffect}return{viewer:o,Cesium:s}}function Z(o){Number.isFinite(Number(o.threshold))&&(d.value=Number(o.threshold)),Number.isFinite(Number(o.blend))&&(p.value=Number(o.blend)),Number.isFinite(Number(o.lightStrength))&&(b.value=Number(o.lightStrength)),fe(o.waterColor)&&(w.value=o.waterColor),Number.isFinite(Number(o.waterLevel))&&(R.value=Number(o.waterLevel))}function y(){u("state-change",{isPicking:S.value,hasFluid:L.value,selectedText:U.value,waterLevel:R.value,waterLevelMin:E.value,waterLevelMax:N.value})}function k(){const o=$();if(!o)return;const{viewer:s,Cesium:v}=o;_(),g(s,v),S.value=!0,m=new v.ScreenSpaceEventHandler(s.scene.canvas),m.setInputAction(I=>{T(s,v,I.position)},v.ScreenSpaceEventType.LEFT_CLICK)}async function T(o,s,v){var rt,je;const I=We(o,v);if(!I){c.warning("未选中可用地形位置。");return}const B=++P;_();const q=s.Cartographic.fromCartesian(I),re=s.Math.toDegrees(q.longitude),K=s.Math.toDegrees(q.latitude),_e=Number(q.height),pe=Number.isFinite(_e)?_e:0,ye=new s.Cartesian3(Qe,Qe,0);Et("正在请求模拟范围高度数据...");try{M();const Ne=Number(d.value)||0,at=Number(p.value)||0,Ze=Number(b.value)||0,Ve=await ie(o,s,{lon:re,lat:K,centerHeight:pe,dimensions:ye}),be=ke(Ve,pe),Ot=be.baseHeight,Nt=be.depth,ht=Ie(be,pe),Ht=new s.Cartesian3(Qe,Qe,Nt);if(B!==P)return;E.value=be.minHeight,N.value=be.maxHeight,R.value=ht,Ve||c.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),h=new A(o,{lonLat:[re,K],width:bt,height:bt,dimensions:Ht,baseHeight:Ot,minHeight:be.minHeight,maxHeight:be.maxHeight,heightMapSource:Ve,waterColor:ee(s,w.value),customParams:new s.Cartesian4(Ne,at,Ze,10),fluidParams:new s.Cartesian4(.9+Ze/10*.099,Math.min(1,at/50),Ne/5e4,Fe(ht,be))}),C.value=re,x.value=K,L.value=!0,(je=(rt=o.scene).requestRender)==null||je.call(rt),c.success("水体流体已创建。")}catch(Ne){c.error("水体流体创建失败",Ne),c.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{Dt()}}async function ie(o,s,v){const I=o==null?void 0:o.terrainProvider,B=z(v.dimensions);if(!I)return null;if(s.EllipsoidTerrainProvider&&I instanceof s.EllipsoidTerrainProvider)return ve(B);if(typeof s.sampleTerrain!="function"&&typeof s.sampleTerrainMostDetailed!="function")return null;try{return await ue(o,s,v,B)}catch(q){if(B<=st)throw q;return ue(o,s,v,st)}}async function ue(o,s,v,I){const B=Re(s,v,I),q=await Be(s,o.terrainProvider,B);return Me(q||B,{size:I})}function z(o){const s=Math.max(Number(o==null?void 0:o.x)||0,Number(o==null?void 0:o.y)||0),v=Math.ceil(s/Ja)+1;return ne(v,st,Qa)}function ne(o,s,v){return Math.max(s,Math.min(v,Math.round(o)))}function Re(o,{lon:s,lat:v,centerHeight:I,dimensions:B},q){const re=o.Cartesian3.fromDegrees(s,v,I),K=o.Transforms.eastNorthUpToFixedFrame(re),_e=[],pe=Math.max(1,q-1);for(let ye=0;ye<q;ye++){const je=(.5-ye/pe)*B.y;for(let Ne=0;Ne<q;Ne++){const Ze=(Ne/pe-.5)*B.x,Ve=new o.Cartesian3(Ze,je,0),be=o.Matrix4.multiplyByPoint(K,Ve,new o.Cartesian3);_e.push(o.Cartographic.fromCartesian(be))}}return _e}async function Be(o,s,v){const I=Te(s);return Number.isInteger(I)&&typeof o.sampleTerrain=="function"?o.sampleTerrain(s,I,v):typeof o.sampleTerrainMostDetailed=="function"?o.sampleTerrainMostDetailed(s,v):o.sampleTerrain(s,10,v)}function Te(o){const s=Number(o==null?void 0:o._bottomLevel);return Number.isFinite(s)?Math.max(0,s-1):null}function Me(o,{size:s}){var B;const v=Le(o);if(!v)return null;const I=new Float32Array(s*s*4);for(let q=0;q<s*s;q++){const re=Number((B=o[q])==null?void 0:B.height),K=q*4;I[K]=Number.isFinite(re)?xe(re,v.minHeight,v.maxHeight):v.minHeight,I[K+1]=0,I[K+2]=0,I[K+3]=1}return{width:s,height:s,arrayBufferView:I,minHeight:v.minHeight,maxHeight:v.maxHeight}}function ve(o){return{width:o,height:o,arrayBufferView:new Float32Array(o*o*4),minHeight:0,maxHeight:0}}function Le(o){let s=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;for(const I of o||[]){const B=Number(I==null?void 0:I.height);Number.isFinite(B)&&(s=Math.min(s,B),v=Math.max(v,B))}return!Number.isFinite(s)||!Number.isFinite(v)?null:{minHeight:s,maxHeight:v}}function ke(o,s){const v=Number(o==null?void 0:o.minHeight),I=Number(o==null?void 0:o.maxHeight);if(Number.isFinite(v)&&Number.isFinite(I)){const re=Number(s),K=Number.isFinite(re)?Math.min(v,I,re):Math.min(v,I),_e=Number.isFinite(re)?Math.max(v,I,re):Math.max(v,I),pe=Math.max(_e-K,Za);return{baseHeight:K,depth:pe,minHeight:K,maxHeight:K+pe}}const B=Number(s),q=Number.isFinite(B)?B-ja:0;return{baseHeight:q,depth:St,minHeight:q,maxHeight:q+St}}function Ie(o,s){const v=o.minHeight+o.depth*Ka,I=Number(s),B=Number.isFinite(I)?I:v;return xe(B,o.minHeight,o.maxHeight)}function Fe(o,s){const v=s.maxHeight-s.minHeight;return!Number.isFinite(v)||v<=0?0:xe((o-s.minHeight)/v,0,1)}function ce(){return!Number.isFinite(E.value)||!Number.isFinite(N.value)?null:{minHeight:Math.min(E.value,N.value),maxHeight:Math.max(E.value,N.value)}}function ee(o,s){const v=ze(s)||ze("#0d4fa3");return new o.Cartesian3(v.red,v.green,v.blue)}function se(){var v;const o=ze(w.value),s=(v=h==null?void 0:h.config)==null?void 0:v.waterColor;!o||!s||(s.x=o.red,s.y=o.green,s.z=o.blue)}function fe(o){return typeof o=="string"&&/^#[0-9a-f]{6}$/i.test(o)}function ze(o){return fe(o)?{red:Number.parseInt(o.slice(1,3),16)/255,green:Number.parseInt(o.slice(3,5),16)/255,blue:Number.parseInt(o.slice(5,7),16)/255}:null}function xe(o,s,v){return Math.max(s,Math.min(v,o))}function We(o,s){if(!s)return null;if(o.scene.pickPositionSupported&&typeof o.scene.pickPosition=="function"){const I=o.scene.pickPosition(s);if(I)return I}const v=o.camera.getPickRay(s);return v?o.scene.globe.pick(v,o.scene):null}function Oe(){var I,B,q;if(!(h!=null&&h.config))return;const o=Number(d.value)||0,s=Number(p.value)||0,v=Number(b.value)||0;h.config.customParams&&(h.config.customParams.x=o,h.config.customParams.y=s,h.config.customParams.z=v),h.config.fluidParams&&(h.config.fluidParams.x=.9+v/10*.099,h.config.fluidParams.y=Math.min(1,s/50),h.config.fluidParams.z=o/5e4),se(),(q=(B=(I=h.viewer)==null?void 0:I.scene)==null?void 0:B.requestRender)==null||q.call(B)}function Ue(){var B,q,re,K;if(!((B=h==null?void 0:h.config)!=null&&B.fluidParams))return;const o=ce(),s=Number(R.value);if(!o||!Number.isFinite(s))return;const v=xe(s,o.minHeight,o.maxHeight);if(v!==s){R.value=v;return}const I=Fe(v,o);typeof h.setInitialWaterLevel=="function"?h.setInitialWaterLevel(I):(h.config.fluidParams.w=I,(K=(re=(q=h.viewer)==null?void 0:q.scene)==null?void 0:re.requestRender)==null||K.call(re))}function g(o,s){var v,I;if(!D){const B=o.scene;D={shadows:o.shadows,resolutionScale:o.resolutionScale,msaaSamples:B.msaaSamples,depthTestAgainstTerrain:B.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:B.logarithmicDepthBuffer,highDynamicRange:B.highDynamicRange,fogEnabled:(v=B.fog)==null?void 0:v.enabled,showGroundAtmosphere:B.globe.showGroundAtmosphere,skyAtmosphereShow:(I=B.skyAtmosphere)==null?void 0:I.show,enableLighting:B.globe.enableLighting}}o.shadows=!0,o.resolutionScale=1,o.scene.msaaSamples=4,o.scene.globe.depthTestAgainstTerrain=!0,o.scene.logarithmicDepthBuffer=!0,o.scene.highDynamicRange=!0,o.scene.fog&&(o.scene.fog.enabled=!0),o.scene.globe.showGroundAtmosphere=!0,o.scene.skyAtmosphere&&(o.scene.skyAtmosphere.show=!0),o.scene.globe.enableLighting=!0,!F&&i&&(F=i(s),o.scene.postProcessStages.add(F))}function a(o){if(!o||!D)return;const s=o.scene;o.shadows=D.shadows,o.resolutionScale=D.resolutionScale,D.msaaSamples!==void 0&&(s.msaaSamples=D.msaaSamples),s.globe.depthTestAgainstTerrain=D.depthTestAgainstTerrain,s.logarithmicDepthBuffer=D.logarithmicDepthBuffer,s.highDynamicRange=D.highDynamicRange,s.fog&&D.fogEnabled!==void 0&&(s.fog.enabled=D.fogEnabled),s.globe.showGroundAtmosphere=D.showGroundAtmosphere,s.skyAtmosphere&&D.skyAtmosphereShow!==void 0&&(s.skyAtmosphere.show=D.skyAtmosphereShow),s.globe.enableLighting=D.enableLighting,D=null}function l(){O(!1),c.success("水体流体已清除。")}function _(){m&&(m.destroy(),m=null),S.value=!1}function M(){if(h){try{h.destroy()}catch{}h=null,L.value=!1}}function O(o){var v,I,B;const s=(v=n.getViewer)==null?void 0:v.call(n);if(P+=1,_(),M(),C.value=null,x.value=null,R.value=null,E.value=null,N.value=null,s&&F){try{s.scene.postProcessStages.remove(F)}catch{}F=null}o&&s&&a(s),(B=(I=s==null?void 0:s.scene)==null?void 0:I.requestRender)==null||B.call(I)}function V(){O(!0),u("close")}return e({startPickHeightMap:k,clearFluid:l}),(o,s)=>t.headless?te("",!0):(H(),W("div",za,[f("div",Oa,[f("div",{class:"panel-head"},[s[9]||(s[9]=f("span",{class:"panel-title"},"水体流体",-1)),f("button",{class:"panel-close",title:"关闭",onClick:V}," × ")]),f("div",Na,[f("button",{class:de(["action-btn primary",{active:S.value}]),onClick:k},ae(S.value?"等待选点":"捕捉高度图"),3),f("button",{class:"action-btn",disabled:!L.value&&!S.value,onClick:l}," 清除 ",8,Ha)]),U.value?(H(),W("div",Ba,ae(U.value),1)):te("",!0),f("div",Ua,[f("label",Wa,[s[10]||(s[10]=f("span",null,"阈值",-1)),oe(f("input",{"onUpdate:modelValue":s[0]||(s[0]=v=>d.value=v),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[we,d.value,void 0,{number:!0}]]),oe(f("input",{"onUpdate:modelValue":s[1]||(s[1]=v=>d.value=v),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[we,d.value,void 0,{number:!0}]])]),f("label",$a,[s[11]||(s[11]=f("span",null,"混合",-1)),oe(f("input",{"onUpdate:modelValue":s[2]||(s[2]=v=>p.value=v),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[we,p.value,void 0,{number:!0}]]),oe(f("input",{"onUpdate:modelValue":s[3]||(s[3]=v=>p.value=v),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[we,p.value,void 0,{number:!0}]])]),f("label",Ga,[s[12]||(s[12]=f("span",null,"光强",-1)),oe(f("input",{"onUpdate:modelValue":s[4]||(s[4]=v=>b.value=v),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[we,b.value,void 0,{number:!0}]]),oe(f("input",{"onUpdate:modelValue":s[5]||(s[5]=v=>b.value=v),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[we,b.value,void 0,{number:!0}]])]),j.value?(H(),W("label",Va,[s[13]||(s[13]=f("span",null,"水位",-1)),oe(f("input",{"onUpdate:modelValue":s[6]||(s[6]=v=>R.value=v),type:"range",min:E.value,max:N.value,step:Q.value},null,8,qa),[[we,R.value,void 0,{number:!0}]]),oe(f("input",{"onUpdate:modelValue":s[7]||(s[7]=v=>R.value=v),class:"number-input",type:"number",min:E.value,max:N.value,step:Q.value},null,8,Xa),[[we,R.value,void 0,{number:!0}]])])):te("",!0),f("label",Ya,[s[14]||(s[14]=f("span",null,"水色",-1)),oe(f("input",{"onUpdate:modelValue":s[8]||(s[8]=v=>w.value=v),class:"color-input",type:"color"},null,512),[[we,w.value]]),f("span",{class:"color-swatch",style:It({backgroundColor:w.value})},null,4)])])])]))}},ti=tt(ei,[["__scopeId","data-v-9ecdafb8"]]),ut="https://cdn.jsdelivr.net/npm/cesium@1.110/Build/Cesium/",ri=`${ut}Cesium.js`,ai=`${ut}Widgets/widgets.css`;async function ii({ionToken:t}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=ut),await oi(ai,"cesium-widgets-style"),await ni(ri,"cesium-runtime-script");const e=window.Cesium;if(!e)throw new Error("Cesium global 未找到");return zt(e,t),e}function zt(t,e){e&&(t!=null&&t.Ion)&&(t.Ion.defaultAccessToken=e)}function ni(t,e){return new Promise((r,n)=>{const u=document.getElementById(e);if(u){if(u.getAttribute("data-loaded")==="true"){r();return}u.addEventListener("load",()=>r(),{once:!0}),u.addEventListener("error",()=>n(new Error(`脚本加载失败: ${t}`)),{once:!0});return}const c=document.createElement("script");c.id=e,c.src=t,c.async=!0,c.onload=()=>{c.setAttribute("data-loaded","true"),r()},c.onerror=()=>n(new Error(`脚本加载失败: ${t}`)),document.head.appendChild(c)})}function oi(t,e){return new Promise((r,n)=>{if(document.getElementById(e)){r();return}const c=document.createElement("link");c.id=e,c.rel="stylesheet",c.href=t,c.onload=()=>r(),c.onerror=()=>n(new Error(`样式加载失败: ${t}`)),document.head.appendChild(c)})}const si="Asia/Shanghai",li="UTC+8",ci=new Intl.DateTimeFormat("zh-CN",{timeZone:si,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function ui(t,e){var r,n,u,c,d,p,b;if(!(!t||!(e!=null&&e.JulianDate))){if((r=t.animation)!=null&&r.viewModel&&(t.animation.viewModel.dateFormatter=(...w)=>hi(t,e,...w),t.animation.viewModel.timeFormatter=(...w)=>mi(t,e,...w)),t.timeline){const w=(...R)=>fi(t,e,...R);t.timeline.makeLabel=w,"_makeLabel"in t.timeline&&(t.timeline._makeLabel=w),(u=(n=t.timeline).updateFromClock)==null||u.call(n),(d=(c=t.timeline).zoomTo)==null||d.call(c,t.clock.startTime,t.clock.stopTime)}(b=(p=t.scene).requestRender)==null||b.call(p)}}function dt(t,e,...r){var p;const n=r.find(di)||((p=t==null?void 0:t.clock)==null?void 0:p.currentTime);if(!n)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const u=e.JulianDate.toDate(n),c=ci.formatToParts(u),d=Object.fromEntries(c.filter(({type:b})=>b!=="literal").map(({type:b,value:w})=>[b,w]));return{year:d.year||"0000",month:d.month||"01",day:d.day||"01",hour:d.hour||"00",minute:d.minute||"00",second:d.second||"00"}}function di(t){return t&&typeof t.dayNumber=="number"&&typeof t.secondsOfDay=="number"}function hi(t,e,...r){const{year:n,month:u,day:c}=dt(t,e,...r);return`${n}-${u}-${c}`}function mi(t,e,...r){const{hour:n,minute:u,second:c}=dt(t,e,...r);return`${n}:${u}:${c} ${li}`}function fi(t,e,...r){const{month:n,day:u,hour:c,minute:d}=dt(t,e,...r);return`${n}-${u} ${c}:${d}`}function pi({getViewer:t}){let e=null,r=null;function n(){var p;const d=t==null?void 0:t();if(d&&((p=d._cesiumWidget)!=null&&p._creditContainer&&(d._cesiumWidget._creditContainer.style.display="none"),u(),e=setInterval(()=>{const b=document.querySelector(".cesium-credit-container");b&&b.innerHTML.length>0&&(b.innerHTML="",b.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const b=document.createElement("style");b.id="cesium-credit-override",b.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(b),r=b}}function u(){var b;const d=t==null?void 0:t();if(!d)return;(b=d._cesiumWidget)!=null&&b._creditContainer&&(d._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",d._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(w=>{w.style.cssText="display: none !important; visibility: hidden !important;",w.innerHTML=""}),d.scene&&d.scene.frameState&&d.scene.frameState.creditDisplay&&(d.scene.frameState.creditDisplay.hasCredits=()=>!1,d.scene.frameState.creditDisplay.destroy=()=>{})}function c(){e&&(clearInterval(e),e=null),r&&(r.remove(),r=null)}return{installCreditHider:n,cleanupCreditHider:c}}function gi({getViewer:t,getCesium:e}){let r=null;const n=G("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function u(){const d=t==null?void 0:t(),p=e==null?void 0:e();!d||!p||(c(),r=new p.ScreenSpaceEventHandler(d.scene.canvas),r.setInputAction(b=>{const w=d.camera.getPickRay(b.endPosition);if(!w)return;const R=d.scene.globe.pick(w,d.scene);if(!R)return;const E=p.Cartographic.fromCartesian(R),N=p.Math.toDegrees(E.longitude).toFixed(6),S=p.Math.toDegrees(E.latitude).toFixed(6),L=E.height.toFixed(2);n.value=`经度: ${N}, 纬度: ${S}, 海拔: ${L}米`},p.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(b=>{const w=b.endPosition,R=b.startPosition;if(!p.defined(d.terrainProvider))return;const E=d.scene.globe.ellipsoid;if(!d.camera.pickEllipsoid(R,E)){const S=d.camera;S.rotate(p.Cartesian3.UNIT_X,-.002*(w.y-R.y)),S.rotate(p.Cartesian3.UNIT_Y,-.002*(w.x-R.x))}},p.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_UP))}function c(){r&&(r.destroy(),r=null)}return{coordinateDisplay:n,setupInteractions:u,cleanupInteractions:c}}function vi(t,e=""){if(typeof window>"u")return e;try{const r=window.localStorage.getItem(t);return r??e}catch{return e}}function yi(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(e||""))}catch{}}function et(t,e){if(typeof window>"u")return e;try{const r=window.localStorage.getItem(t);return r==null?e:r==="true"}catch{return e}}function lt(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(!!e))}catch{}}function wt(t){if(!t)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:e,DeveloperError:r,Ellipsoid:n,Resource:u,HeightmapTerrainData:c,Rectangle:d,TileAvailability:p,CustomHeightmapTerrainProvider:b}=t;function w(S,L,C,x,A,i){const m=S.tileXYToRectangle(C,x,A);return e(d.intersection(m,L,i))}function R(S){const L=[[[0,0,1,0]]],C=new p(S.tilingScheme,19);for(let x=0;x<L.length;x++){const A=L[x];for(let i=0;i<A.length;i++){const m=A[i];C.addAvailableTileRange(x,m[0],m[1],m[2],m[3])}}return C}function E(S,L,C,x,A){const i=new c({buffer:S._transformBuffer(L),width:S._width,height:S._height,childTileMask:S._getChildTileMask(x,A,C),structure:S._terrainDataStructure});return i._skirtHeight=6e3,S.availability.addAvailableTileRange(C,x,A,x,A),i}class N extends b{constructor(L={}){if(super({...L,ellipsoid:n.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!e(L.url))throw new r("options.url is required.");this._dataType=L.dataType??"int16",this._url=L.url,this._subdomains=L.subdomains,this._token=L.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=R(this)}get availability(){return this._availability}requestTileGeometry(L,C,x,A){if(x>=this._bottomLevel)return Promise.reject(new Error(`Level ${x} is outside supported range.`));if(x<this._topLevel)return Promise.resolve(new c({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(L,C,x),structure:this._terrainDataStructure}));let i=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const h=this._subdomains[(L+C)%this._subdomains.length];i=i.replace("{s}",h)}i=i.replace("{token}",this._token).replace("{x}",L).replace("{y}",C).replace("{z}",x+1);const m=u.fetchArrayBuffer({url:i,request:A});if(m)return m.then(h=>h.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):ir.inflate(h)).then(h=>E(this,h,x,L,C))}getTileDataAvailable(L,C,x){return x<this._bottomLevel}_transformBuffer(L){let C=2;this._dataType==="float"&&(C=4);const x=L;if(x.length!==22500*C)return null;const A=new ArrayBuffer(C),i=new DataView(A),m=this._width,h=this._height,F=new Uint8Array(m*h*4);for(let D=0;D<h;D++)for(let P=0;P<m;P++){const U=Math.floor(149*D/(h-1)),j=Math.floor(149*P/(m-1)),Q=C*(150*U+j);let $;C===4?(i.setInt8(0,x[Q]),i.setInt8(1,x[Q+1]),i.setInt8(2,x[Q+2]),i.setInt8(3,x[Q+3]),$=i.getFloat32(0,!0)):$=x[Q]+256*x[Q+1],($>1e4||$<-2e3)&&($=0);const Z=($+1e3)/.001,y=4*(D*m+P);F[y]=Z/65536,F[y+1]=(Z-256*F[y]*256)/256,F[y+2]=Z-256*F[y]*256-256*F[y+1],F[y+3]=255}return F}_getVHeightBuffer(){let L=this._vHeightBuffer;if(!e(L)){L=new Uint8ClampedArray(this._width*this._height*4);for(let C=0;C<this._width*this._height*4;)L[C++]=15,L[C++]=66,L[C++]=64,L[C++]=255;this._vHeightBuffer=L}return L}_getChildTileMask(L,C,x){const A=new d,i=this._tilingScheme,m=this._rectangles,h=i.tileXYToRectangle(L,C,x);let F=0;for(let D=0;D<m.length&&F!==15;D++){const P=m[D];if(P.maxLevel<=x)continue;const U=P.rectangle,j=d.intersection(U,h,A);e(j)&&(w(i,U,2*L,2*C,x+1,A)&&(F|=4),w(i,U,2*L+1,2*C,x+1,A)&&(F|=8),w(i,U,2*L,2*C+1,x+1,A)&&(F|=1),w(i,U,2*L+1,2*C+1,x+1,A)&&(F|=2))}return F}}return N}const qe=["0","1","2","3","4","5","6","7"],Xe="https://t{s}.tianditu.gov.cn/",Ee="custom-xyz",Tt="cesium_custom_xyz_basemap_url",xi="cesium_tdt_label_layer_visible",Mt="cesium_tdt_boundary_layer_visible",Lt="cesium_tdt_text_label_layer_visible",Ft=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:Ee,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],Pt=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function _i({getViewer:t,getCesium:e,message:r,backendBaseUrl:n,tiandituToken:u,cesiumIonToken:c}){let d=null,p=null,b=0,w=[];const R=[],E=G([]),N=new Map,S=new Map,L=new Map,C=new Map,x=G("tianditu"),A=G("tianditu"),i=G(vi(Tt,"")),m=et(xi,!0),h=G(et(Mt,m)),F=G(et(Lt,m)),D=me(()=>[...Ft.map(a=>a.value!==Ee?a:{...a,description:i.value?i.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!i.value}),...E.value]),P=me(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:h.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:F.value}]);he(x,a=>{!(t!=null&&t())||!(e!=null&&e())||ce(a)}),he(i,a=>{yi(Tt,a)}),he(A,async a=>{!(t!=null&&t())||!(e!=null&&e())||await se(a)}),he(h,a=>{lt(Mt,a),ve()}),he(F,a=>{lt(Lt,a),ve()});function U(){const a=e==null?void 0:e();if(!a)return[];N.clear(),S.clear();const l=Ft.map(M=>{const O=new a.ProviderViewModel({name:M.label,tooltip:bi(M),category:"项目底图",iconUrl:Ct(M.value==="google"?"#5ea1ff":M.value===Ee?"#f59e0b":"#37d67a",M.value==="google"?"G":M.value===Ee?"XY":"TD"),creationFunction:()=>y(M.value)});return N.set(M.value,O),S.set(O,M.value),O}),_=Z();return E.value=_.map((M,O)=>{const V=String((M==null?void 0:M.name)||`官方底图 ${O+1}`).trim(),o=Ti(V,O);return N.set(o,M),S.set(M,o),{value:o,label:`官方 · ${V}`,description:String((M==null?void 0:M.tooltip)||V),source:"official"}}),[...l,..._]}function j(){const a=e==null?void 0:e();return a?(L.clear(),C.clear(),Pt.map(l=>{const _=new a.ProviderViewModel({name:l.label,tooltip:l.description||l.label,category:"项目地形",iconUrl:Ct(l.value==="ellipsoid"?"#a3a3a3":"#d0a449",l.value==="cesiumWorld"?"CW":l.value==="ellipsoid"?"EL":"TE"),creationFunction:()=>ze(l.value)});return L.set(l.value,_),C.set(_,l.value),_})):[]}function Q(a=[]){return N.get(x.value)||a[0]}function $(a=[]){return L.get(A.value)||a[0]}function Z(){const a=e==null?void 0:e();if(typeof(a==null?void 0:a.createDefaultImageryProviderViewModels)!="function")return[];try{return a.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function y(a){return a==="google"?T():a===Ee?ie():k()}function k(){const a=e==null?void 0:e();return[new a.UrlTemplateImageryProvider({url:`${Xe}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:qe,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})]}function T(){const a=e==null?void 0:e();return[new a.UrlTemplateImageryProvider({url:`${n}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20})]}function ie(){const a=e==null?void 0:e(),l=At(i.value);return l.valid?[new a.UrlTemplateImageryProvider({url:l.url,subdomains:l.subdomains,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(r.warning(l.message,{closable:!0}),k())}function ue(){const a=e==null?void 0:e();return new a.UrlTemplateImageryProvider({url:`${Xe}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:qe,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:10})}function z(){const a=e==null?void 0:e();return new a.UrlTemplateImageryProvider({url:`${Xe}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:qe,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})}function ne(){var s,v,I,B,q;Re();const a=e==null?void 0:e(),l=(v=(s=t==null?void 0:t())==null?void 0:s.baseLayerPicker)==null?void 0:v.viewModel;if(!l||!((I=a==null?void 0:a.knockout)!=null&&I.getObservable))return;const _=a.knockout.getObservable(l,"selectedImagery"),M=a.knockout.getObservable(l,"selectedTerrain"),O=[],V=(B=_==null?void 0:_.subscribe)==null?void 0:B.call(_,re=>{const K=S.get(re);K&&(x.value!==K&&(x.value=K),Me())}),o=(q=M==null?void 0:M.subscribe)==null?void 0:q.call(M,re=>{const K=C.get(re);K&&(A.value!==K&&(A.value=K),fe(K))});V&&O.push(V),o&&O.push(o),w=O}function Re(){w.forEach(a=>{var l;return(l=a==null?void 0:a.dispose)==null?void 0:l.call(a)}),w=[]}function Be(){return Me(),!0}function Te(){const a=t==null?void 0:t();if(a!=null&&a.imageryLayers)for(;R.length;){const l=R.pop();try{a.imageryLayers.remove(l,!0)}catch{}}}function Me(){var a,l,_;ve(),(_=(l=(a=t==null?void 0:t())==null?void 0:a.scene)==null?void 0:l.requestRender)==null||_.call(l)}function ve(){var l,_;const a=t==null?void 0:t();!a||!(e!=null&&e())||(h.value?Le():Ie(),F.value?ke():Fe(),(_=(l=a.scene).requestRender)==null||_.call(l))}function Le(){var l,_,M,O;const a=t==null?void 0:t();if(!(a!=null&&a.imageryLayers)||d)return d&&((_=(l=a==null?void 0:a.imageryLayers)==null?void 0:l.raiseToTop)==null||_.call(l,d)),d;try{return d=a.imageryLayers.addImageryProvider(ue()),(O=(M=a.imageryLayers).raiseToTop)==null||O.call(M,d),d}catch(V){return r.error("天地图国界线图层加载失败",V),null}}function ke(){var l,_,M,O;const a=t==null?void 0:t();if(!(a!=null&&a.imageryLayers)||p)return p&&((_=(l=a==null?void 0:a.imageryLayers)==null?void 0:l.raiseToTop)==null||_.call(l,p)),p;try{return p=a.imageryLayers.addImageryProvider(z()),(O=(M=a.imageryLayers).raiseToTop)==null||O.call(M,p),p}catch(V){return r.error("天地图文字标注图层加载失败",V),null}}function Ie(){const a=t==null?void 0:t();if(!(!d||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(d,!0)}catch{}d=null}}function Fe(){const a=t==null?void 0:t();if(!(!p||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(p,!0)}catch{}p=null}}function ce(a,l={}){var V,o,s;const _=t==null?void 0:t();if(!_||!(e!=null&&e()))return!1;const M=(V=_.baseLayerPicker)==null?void 0:V.viewModel,O=N.get(a);if(M&&O){if(Te(),l.forceReload&&M.selectedImagery===O){const v=N.get("tianditu");v&&v!==O&&(M.selectedImagery=v)}return M.selectedImagery!==O&&(M.selectedImagery=O),Me(),!0}try{return Te(),y(a).forEach(I=>{R.push(_.imageryLayers.addImageryProvider(I))}),ve(),(s=(o=_.scene).requestRender)==null||s.call(o),!0}catch(v){return r.error("地图源切换失败",v),!1}}function ee(){return se(A.value)}async function se(a){var s,v,I,B,q,re,K,_e,pe;const l=t==null?void 0:t(),_=e==null?void 0:e();if(!l||!_)return!1;const M=(s=l.baseLayerPicker)==null?void 0:s.viewModel,O=L.get(a);if(M&&O)return M.selectedTerrain!==O&&(M.selectedTerrain=O),fe(a),(I=(v=l.scene).requestRender)==null||I.call(v),!0;const V=++b;if(a==="ellipsoid")return l.terrainProvider=new _.EllipsoidTerrainProvider,fe(a),(q=(B=l.scene).requestRender)==null||q.call(B),!0;if(a==="cesiumWorld")try{const ye=await xe();return V!==b?!1:(l.terrainProvider=ye,fe(a),(K=(re=l.scene).requestRender)==null||K.call(re),!0)}catch(ye){return V!==b||(l.terrainProvider=new _.EllipsoidTerrainProvider,fe("ellipsoid"),r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",ye)),!1}const o=wt(_);try{return l.terrainProvider=new o({url:`${Xe}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:qe,token:u}),fe(a),(pe=(_e=l.scene).requestRender)==null||pe.call(_e),!0}catch(ye){return l.terrainProvider=new _.EllipsoidTerrainProvider,fe("ellipsoid"),r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",ye),!1}}function fe(a){var _;const l=t==null?void 0:t();(_=l==null?void 0:l.scene)!=null&&_.globe&&(l.scene.globe.depthTestAgainstTerrain=a!=="ellipsoid")}function ze(a){const l=e==null?void 0:e();if(a==="ellipsoid")return new l.EllipsoidTerrainProvider;if(a==="cesiumWorld")return xe().catch(M=>(r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",M),We(a,"ellipsoid"),new l.EllipsoidTerrainProvider));const _=wt(l);try{return new _({url:`${Xe}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:qe,token:u})}catch(M){return r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",M),new l.EllipsoidTerrainProvider}}async function xe(){var _,M;const a=e==null?void 0:e();zt(a,c);const l={requestWaterMask:!1,requestVertexNormals:!0};if(typeof a.createWorldTerrainAsync=="function")return a.createWorldTerrainAsync(l);if(typeof a.createWorldTerrain=="function")return a.createWorldTerrain(l);if(typeof((_=a.CesiumTerrainProvider)==null?void 0:_.fromIonAssetId)=="function")return a.CesiumTerrainProvider.fromIonAssetId(1,l);if((M=a.IonResource)!=null&&M.fromAssetId&&a.CesiumTerrainProvider){const O=await a.IonResource.fromAssetId(1);return new a.CesiumTerrainProvider({url:O,...l})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}function We(a,l){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{A.value===a&&(A.value=l)},0)}function Oe({overlayId:a,value:l}){if(a==="tdt-boundaries"){h.value=!!l;return}a==="tdt-text-labels"&&(F.value=!!l)}function Ue({url:a}){const l=String(a||"").trim(),_=At(l);if(!_.valid){r.warning(_.message,{closable:!0});return}if(i.value=l,x.value===Ee){ce(Ee,{forceReload:!0})&&r.success("已加载自定义 XYZ 图源");return}x.value=Ee,r.success("已切换到自定义 XYZ 图源")}function g(){Te(),Ie(),Fe(),Re()}return{activeBasemap:x,activeTerrain:A,customXyzBasemapUrl:i,basemapOptions:D,terrainOptions:Pt,overlayOptions:P,createImageryProviderViewModels:U,createTerrainProviderViewModels:j,getSelectedImageryProviderViewModel:Q,getSelectedTerrainProviderViewModel:$,bindLayerPickerStateSync:ne,addBaseImageryLayers:Be,initCustomTerrain:ee,applyBasemap:ce,applyTerrain:se,handleOverlayToggle:Oe,handleCustomBasemapSubmit:Ue,cleanupLayers:g}}function bi(t){return t.value!==Ee?t.description||t.label:`${t.description||t.label}
支持 https://server/{z}/{x}/{y}.png`}function At(t){const e=String(t||"").trim();if(!e)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let r=e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const n=r.match(/\{([a-z0-9])-([a-z0-9])\}/i);let u=[];return n?(u=Si(n[1],n[2]),r=r.replace(n[0],"{s}")):/\{s\}/i.test(r)&&(u=["a","b","c"]),!/\{z\}/.test(r)||!/\{x\}/.test(r)||!/\{y\}/.test(r)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:r,subdomains:u}:wi(r)?{valid:!0,message:"",url:r,subdomains:u}:{valid:!1,message:"URL 格式不合法",url:r,subdomains:u}}function Si(t,e){const r=String(t||"").charCodeAt(0),n=String(e||"").charCodeAt(0);if(!Number.isFinite(r)||!Number.isFinite(n))return[];const u=r<=n?1:-1,c=[];for(let d=r;u>0?d<=n:d>=n;d+=u)c.push(String.fromCharCode(d));return c}function wi(t){if(/^(https?:)?\/\//i.test(t)||t.startsWith("/"))return!0;try{const e=typeof window<"u"?window.location.origin:"http://localhost",r=new URL(t,e);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}function Ti(t,e){const r=t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${e}_${r||"basemap"}`}function Ct(t,e){const r=String(e||"").replace(/[<>&"']/g,"").slice(0,2),n=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${t}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${r}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(n)}`}function Mi({getViewer:t,getCesium:e,message:r}){function n(d){const p=t==null?void 0:t(),b=e==null?void 0:e();if(!p||!b)return;const w=typeof d=="number"?d:2;p.camera.flyTo({destination:b.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-b.Math.PI_OVER_TWO,roll:0},duration:w})}function u(){const d=t==null?void 0:t(),p=e==null?void 0:e();!d||!p||d.camera.flyTo({destination:p.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:p.Math.toRadians(0),pitch:p.Math.toRadians(-25),roll:0},duration:3})}async function c(){const d=t==null?void 0:t(),p=e==null?void 0:e();if(!(!d||!p))try{const b=await p.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");d.scene.primitives.add(b),d.flyTo(b,{duration:3,offset:new p.HeadingPitchRange(p.Math.toRadians(0),p.Math.toRadians(-25),b.boundingSphere.radius*2.5)})}catch(b){r.error(`加载模型失败: ${b}`),r.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:n,flyToEverest:u,loadCustomTileset:c}}const Li="cesium_tool_panel_open";function Fi({fluidPanelRef:t,sceneActions:e={},wind:r={},panelStorageKey:n=Li}={}){const u=G(et(n,!0)),c=G({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),d=G({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),p=G({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),b=me(()=>{var S,L,C,x,A,i;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:c.value.atmosphere||c.value.fog?"启用":"关闭",statusTone:c.value.atmosphere||c.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:c.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:c.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:c.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:c.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(S=r.wind2D)!=null&&S.value?"已加载":"未加载",statusTone:(L=r.wind2D)!=null&&L.value?"success":"neutral",actions:[{id:"load",label:(C=r.wind2D)!=null&&C.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((x=r.wind2D)!=null&&x.value)}],controls:Pi((A=r.windParams)==null?void 0:A.value,!!((i=r.wind2D)!=null&&i.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:p.value.isPicking?"等待选点":p.value.hasFluid?"已创建":"未创建",statusTone:p.value.isPicking?"warning":p.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:p.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:p.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!p.value.hasFluid&&!p.value.isPicking}],controls:Ai(d.value,p.value)}]});he(u,S=>{lt(n,S)});function w({moduleId:S,actionId:L}){var x,A;(A=(x={scene:{home:()=>{var i;return(i=e.flyToHome)==null?void 0:i.call(e)},everest:e.flyToEverest,tileset:e.loadCustomTileset},wind:{load:r.loadSimulatedWind,clear:r.clearWind2D},fluid:{pick:()=>{var i,m;return(m=(i=t==null?void 0:t.value)==null?void 0:i.startPickHeightMap)==null?void 0:m.call(i)},clear:()=>{var i,m;return(m=(i=t==null?void 0:t.value)==null?void 0:i.clearFluid)==null?void 0:m.call(i)}}}[S])==null?void 0:x[L])==null||A.call(x)}function R({moduleId:S,controlId:L,value:C}){var x,A;if(S==="effects"&&L in c.value){c.value={...c.value,[L]:!!C};return}if(S==="wind"&&L in(((x=r.windParams)==null?void 0:x.value)||{})){(A=r.setWindParam)==null||A.call(r,L,C);return}S==="fluid"&&L in d.value&&(d.value={...d.value,[L]:L==="waterColor"?C:Number(C)})}function E(S){const L=Ge(S==null?void 0:S.waterLevel),C=Ge(S==null?void 0:S.waterLevelMin),x=Ge(S==null?void 0:S.waterLevelMax);p.value={isPicking:!!(S!=null&&S.isPicking),hasFluid:!!(S!=null&&S.hasFluid),selectedText:(S==null?void 0:S.selectedText)||"",waterLevel:L,waterLevelMin:C,waterLevelMax:x},L!==null&&(d.value={...d.value,waterLevel:L})}function N(){var S;(S=r.clearWind2D)==null||S.call(r)}return{toolPanelOpen:u,advancedEffectControls:c,fluidParams:d,fluidState:p,toolModules:b,handleToolAction:w,handleToolControlChange:R,handleFluidStateChange:E,cleanupTools:N}}function Pi(t={},e){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:t.speedFactor??1,displayValue:Number(t.speedFactor??1).toFixed(1),disabled:e},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:t.arrowLength??15e3,displayValue:`${Math.round((t.arrowLength??15e3)/1e3)} km`,disabled:e},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:t.trailLength??2e4,displayValue:`${Math.round((t.trailLength??2e4)/1e3)} km`,disabled:e},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:t.alphaFactor??1,displayValue:Number(t.alphaFactor??1).toFixed(2),disabled:e}]}function Ai(t,e={}){const r=Ge(e.waterLevelMin),n=Ge(e.waterLevelMax),u=r!==null&&n!==null,c=u?Math.min(r,n):0,d=u?Math.max(r,n):0,p=Ge(t.waterLevel),b=u?Ci(p??c,c,d):0,w=u?Math.max((d-c)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:t.threshold,displayValue:Number(t.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:t.blend,displayValue:Number(t.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:t.lightStrength,displayValue:Number(t.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:c,max:d,step:w,value:b,displayValue:u?`${Ei(b)} m`:"先捕捉",disabled:!u,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:t.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function Ge(t){const e=Number(t);return Number.isFinite(e)?e:null}function Ci(t,e,r){return Math.max(e,Math.min(r,t))}function Ei(t){const e=Math.abs(t);return e>=1e3?t.toFixed(1):e>=10?t.toFixed(2):t.toFixed(3)}const le={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Di=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Ri=new Float32Array([0,0,1,0,1,1,0,1]),ki=new Uint16Array([0,1,2,0,2,3]);function He(t,e,r){return Math.max(e,Math.min(r,t))}function X(t,e){const r=Number(t);return Number.isFinite(r)?r:e}function Ii(t,e){const r=e.getParameter(e.MAX_TEXTURE_SIZE),n=Math.min(2048,r),u=Math.max(1,Math.floor(t)),c=Math.sqrt(u),d=Math.log2(c),p=Number.isFinite(d)?Math.round(d):4;let b=Math.pow(2,p);return b=He(b,16,n),b}function zi(t){const e=t*t,r=new Float32Array(e*4);for(let n=0;n<e;n+=1){const u=n*4;r[u]=Math.random(),r[u+1]=Math.random(),r[u+2]=Math.random(),r[u+3]=Math.random()}return r}function Oi(t){return new Float32Array(t*t*4)}function Ni(t,e,r,n,u){const c=e.createTexture();if(!c)throw new Error("Failed to create wind atlas texture.");e.bindTexture(e.TEXTURE_2D,c),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,r,n,0,e.RGBA,e.FLOAT,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null);let d=!1;return{_context:t,_texture:c,_target:e.TEXTURE_2D,_width:r,_height:n,destroy(){d||(e.deleteTexture(c),d=!0)}}}class Hi{constructor(e,r={}){if(!e||!e.scene||!e.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=e,this._scene=e.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=r.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const n={...le,...r};this.speedFactor=X(n.speedFactor,le.speedFactor),this.cullSpeedMin=X(n.cullSpeedMin,le.cullSpeedMin),this.cullSpeedMax=X(n.cullSpeedMax,le.cullSpeedMax),this.windSpeedMin=X(n.windSpeedMin,le.windSpeedMin),this.windSpeedMax=X(n.windSpeedMax,le.windSpeedMax),this.arrowLength=X(n.arrowLength,le.arrowLength),this.trailLength=X(n.trailLength,le.trailLength),this.decaySpeed=X(n.decaySpeed,le.decaySpeed),this.alphaFactor=X(n.alphaFactor,le.alphaFactor),this.maxWindSpeed=X(n.maxWindSpeed,le.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=X(r.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(e){if(!e||typeof e!="object")throw new Error("Wind2D.loadData requires a valid data object.");const r=X(e.longitude,NaN),n=X(e.latitude,NaN),u=Array.isArray(e.altitude)?e.altitude:[],c=Array.isArray(e.sizeMesh)?e.sizeMesh:[],d=Array.isArray(e.count)?e.count:[],p=Array.isArray(e.hspeed)?e.hspeed:[],b=Array.isArray(e.hdir)?e.hdir:[],w=Array.isArray(e.vspeed)?e.vspeed:[];if(!Number.isFinite(r)||!Number.isFinite(n))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const R=u.length;if(R<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(c.length!==R||d.length!==R)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const E=d.map(P=>Math.max(1,Math.floor(X(P,1)))),N=c.map(P=>Math.max(1,X(P,1))),S=u.map(P=>X(P,0)),L=E.reduce((P,U)=>P+U*U,0);if(p.length<L||b.length<L||w.length<L)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=R,this.visibleLayerMin=0,this.visibleLayerMax=R-1,this._altitudes=S.slice(),this._maxNx=Math.max(...E),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*R;const C=new Float32Array(this._atlasWidth*this._atlasHeight*4);let x=0;for(let P=0;P<R;P+=1){const U=E[P],j=U;for(let Q=0;Q<j;Q+=1)for(let $=0;$<U;$+=1){const Z=x+Q*U+$,y=((P*this._maxNy+Q)*this._atlasWidth+$)*4,k=Number(p[Z]),T=Number(b[Z]),ie=Number(w[Z]);if(!(Number.isFinite(k)&&Number.isFinite(T))){C[y]=0,C[y+1]=0,C[y+2]=0,C[y+3]=0;continue}const z=T*Math.PI/180;C[y]=k*Math.sin(z),C[y+1]=k*Math.cos(z),C[y+2]=Number.isFinite(ie)?ie:0,C[y+3]=1}x+=U*j}this._createOrReplaceWindAtlasTexture(C);const A=Math.max(...N),i=this._maxNx*A,m=i/2/111320,h=n*Math.PI/180,F=Math.max(1e-6,Math.abs(Math.cos(h))),D=i/2/(111320*F);this._bounds={minLon:r-D,maxLon:r+D,minLat:n-m,maxLat:n+m,minHeight:Math.min(...S),maxHeight:Math.max(...S)},this._dataPointCount=L,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(e){const r=Math.max(1,Math.floor(X(e,1))),n=Ii(r,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&n===this._particleTextureSize||(this._particleTextureSize=n,this._particleCount=n*n,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(e){const r=He(X(e,this.particleDensity),.05,10);if(this.particleDensity=r,this._dataPointCount<=0)return;const n=Math.max(1,Math.floor(this._dataPointCount*r));this.setParticleCount(n)}setBounds(e,r,n,u){const c=X(e,NaN),d=X(r,NaN),p=X(n,NaN),b=X(u,NaN);if(!Number.isFinite(c)||!Number.isFinite(d)||!Number.isFinite(p)||!Number.isFinite(b))return;const w=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};w.minLon=Math.min(c,d),w.maxLon=Math.max(c,d),w.minLat=Math.min(p,b),w.maxLat=Math.max(p,b),this._bounds=w,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const e=(this._bounds.minLon+this._bounds.maxLon)*.5,r=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(e,r,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(e){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const u=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[u],this._updateCommand.execute(this._context,e?e.passState:void 0),this._particleState=u,this._drawCommand.modelMatrix=this._modelMatrix,e&&Array.isArray(e.commandList)&&e.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(e){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Ni(this._context,this._gl,this._atlasWidth,this._atlasHeight,e)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const e=this._Cesium,r=this._particleTextureSize,n=zi(r),u=Oi(r);for(let c=0;c<2;c+=1){this._particlePositionTextures[c]=new e.Texture({context:this._context,width:r,height:r,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:n},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[c]=new e.Texture({context:this._context,width:r,height:r,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:u},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._framebuffers[c]=new e.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[c],this._velocityTextures[c]],destroyAttachments:!1});const d=this._framebuffers[c]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,d),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._particlePositionTextures[e]&&(this._particlePositionTextures[e].destroy(),this._particlePositionTextures[e]=null),this._velocityTextures[e]&&(this._velocityTextures[e].destroy(),this._velocityTextures[e]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const e=this._Cesium,r=e.Buffer.createVertexBuffer({context:this._context,typedArray:Di,usage:e.BufferUsage.STATIC_DRAW}),n=e.Buffer.createVertexBuffer({context:this._context,typedArray:Ri,usage:e.BufferUsage.STATIC_DRAW}),u=e.Buffer.createIndexBuffer({context:this._context,typedArray:ki,usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:r,componentsPerAttribute:2},{index:1,vertexBuffer:n,componentsPerAttribute:2}],indexBuffer:u})}_buildParticleVertexArray(){const e=this._Cesium,r=new Float32Array(this._drawVertexCount);for(let n=0;n<r.length;n+=1)r[n]=n;this._particleVertexBuffer=e.Buffer.createVertexBuffer({context:this._context,typedArray:r,usage:e.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const e=this._Cesium,r=`#version 300 es
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
}`;this._updateProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:n,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const e=this._Cesium,r=`#version 300 es
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
}`;this._drawProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:n,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const e=this._Cesium,r=e.RenderState.fromCache({viewport:new e.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:r,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const e=this._Cesium,r=e.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:e.BlendingState.ALPHA_BLEND});this._drawCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:r,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:e.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const e=He(Math.floor(X(this.visibleLayerMin,0)),0,this._layerCount-1),r=He(Math.floor(X(this.visibleLayerMax,this._layerCount-1)),e,this._layerCount-1);return{min:e,max:r}}_normalizeSpeedRange(e,r){const n=Math.max(1e-4,X(this.maxWindSpeed,le.maxWindSpeed)),u=He(X(e,0)/n,0,1),c=He(X(r,n)/n,0,1);return{min:Math.min(u,c),max:Math.max(u,c)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>X(this.speedFactor,le.speedFactor),maxWindSpeed:()=>Math.max(1e-4,X(this.maxWindSpeed,le.maxWindSpeed)),decaySpeed:()=>He(X(this.decaySpeed,le.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>X(this.arrowLength,le.arrowLength),trailLength:()=>X(this.trailLength,le.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>He(X(this.alphaFactor,le.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Bi({getViewer:t,getCesium:e,message:r}){const n=G(null),u=G({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function c(){var R,E;const w=t==null?void 0:t();if(n.value){try{(E=(R=w==null?void 0:w.scene)==null?void 0:R.primitives)==null||E.remove(n.value)}catch{}n.value.destroy(),n.value=null}}function d(){const w=t==null?void 0:t(),R=e==null?void 0:e();if(!w||!R){r.error("Cesium 尚未初始化");return}c();const E=Ui(R);n.value=new Hi(w,{maxWindSpeed:20,cesium:R,speedFactor:u.value.speedFactor,arrowLength:u.value.arrowLength,trailLength:u.value.trailLength,alphaFactor:u.value.alphaFactor}),n.value.loadData(E),w.scene.primitives.add(n.value),n.value.flyTo(),r.success("风场加载成功，可通过下方滑块调节样式")}function p(){n.value&&(n.value.speedFactor=u.value.speedFactor,n.value.arrowLength=u.value.arrowLength,n.value.trailLength=u.value.trailLength,n.value.alphaFactor=u.value.alphaFactor)}function b(w,R){return w in u.value?(u.value={...u.value,[w]:Number(R)},p(),!0):!1}return{wind2D:n,windParams:u,clearWind2D:c,loadSimulatedWind:d,setWindParam:b}}function Ui(t){const u=[0,2e3,5e3,1e4,15e3],c=[3e4,3e4,25e3,25e3,2e4],d=[30,30,25,25,20],p=d.reduce((N,S)=>N+S*S,0),b=new Array(p),w=new Array(p),R=new Array(p);let E=0;for(let N=0;N<5;N++){const S=d[N],L=d[N],C=c[N];for(let x=0;x<L;x++)for(let A=0;A<S;A++){const i=E+x*S+A,m=(A-S/2)*(C/111320),h=(x-L/2)*(C/111320/Math.cos(t.Math.toRadians(35))),D=Math.atan2(h,m)+Math.PI/2+.2*Math.sin(A*.5)*Math.cos(x*.5);w[i]=t.Math.toDegrees(D)%360;const P=Math.sqrt(m*m+h*h),j=Math.max(0,1-P/15);b[i]=(5+N*2)*j+2*Math.random(),R[i]=.5*Math.sin(A*.3)*Math.cos(x*.3)}E+=S*L}return{longitude:104,latitude:35,altitude:u,sizeMesh:c,count:d,hspeed:b,hdir:w,vspeed:R}}const Wi={class:"map-controls-group"},$i={class:"mouse-position-content"},Gi={__name:"CesiumContainer",setup(t){let e=null,r=null;const n="4267820f43926eaf808d61dc07269beb",u="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzRhZjM0ZC02MmYxLTRhNzgtYTkxNi00YWM2MmMxNmNhMWIiLCJpZCI6MTkzNjkxLCJpYXQiOjE3MDY5NDA2ODF9.mKu1zCK-GOjwDem9-J_Ksv0xEGNsN1zGuShYzOuXJsg",c=ct(),d=G(!1),p=G(null),b=()=>r,w=()=>e||window.Cesium,R=_i({getViewer:b,getCesium:w,message:c,backendBaseUrl:Wt,tiandituToken:n,cesiumIonToken:u}),{activeBasemap:E,activeTerrain:N,customXyzBasemapUrl:S,basemapOptions:L,terrainOptions:C,overlayOptions:x,createImageryProviderViewModels:A,createTerrainProviderViewModels:i,getSelectedImageryProviderViewModel:m,getSelectedTerrainProviderViewModel:h,bindLayerPickerStateSync:F,addBaseImageryLayers:D,initCustomTerrain:P,handleOverlayToggle:U,handleCustomBasemapSubmit:j,cleanupLayers:Q}=R,{coordinateDisplay:$,setupInteractions:Z,cleanupInteractions:y}=gi({getViewer:b,getCesium:w}),{installCreditHider:k,cleanupCreditHider:T}=pi({getViewer:b}),ie=Mi({getViewer:b,getCesium:w,message:c}),{flyToHome:ue}=ie,z=Bi({getViewer:b,getCesium:w,message:c}),{toolPanelOpen:ne,advancedEffectControls:Re,fluidParams:Be,toolModules:Te,handleToolAction:Me,handleToolControlChange:ve,handleFluidStateChange:Le,cleanupTools:ke}=Fi({fluidPanelRef:p,sceneActions:ie,wind:z});async function Ie(){Et("正在初始化 3D 场景...");try{if(e=await ii({ionToken:u}),!e||!document.getElementById("cesiumContainer"))return;Fe(),Z();const ce=D(),ee=await P();d.value=!0,ce&&ee?c.success("天地图基础影像与地形加载成功。"):c.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0})}catch(ce){c.error("Cesium 运行时加载失败",ce),c.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{Dt()}}function Fe(){const ce=typeof e.Map=="function"?e.Map:e.Viewer,ee=A(),se=i();r=new ce("cesiumContainer",{baseLayerPicker:!0,geocoder:!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:ee,selectedImageryProviderViewModel:m(ee),terrainProviderViewModels:se,selectedTerrainProviderViewModel:h(se),shouldAnimate:!0}),r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,ui(r,e),nr(r),k(),F(),ue(0)}return Rt(()=>{Ie()}),kt(()=>{if(d.value=!1,y(),ke(),Q(),T(),r){try{r.destroy()}catch{}r=null}}),(ce,ee)=>(H(),W(ge,null,[ee[6]||(ee[6]=f("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),d.value?(H(),De($e(Tr),{key:0,headless:"","get-viewer":b,"get-cesium":w,controls:J(Re)},null,8,["controls"])):te("",!0),d.value?(H(),De($e(ti),{key:1,ref_key:"fluidPanelRef",ref:p,headless:"","get-viewer":b,"get-cesium":w,params:J(Be),onStateChange:J(Le)},null,40,["params","onStateChange"])):te("",!0),d.value?(H(),De(ka,{key:2,open:J(ne),"onUpdate:open":ee[0]||(ee[0]=se=>it(ne)?ne.value=se:null),"active-basemap":J(E),"onUpdate:activeBasemap":ee[1]||(ee[1]=se=>it(E)?E.value=se:null),"active-terrain":J(N),"onUpdate:activeTerrain":ee[2]||(ee[2]=se=>it(N)?N.value=se:null),"basemap-options":J(L),"terrain-options":J(C),"overlay-options":J(x),"custom-basemap-url":J(S),modules:J(Te),onModuleAction:J(Me),onControlChange:J(ve),onOverlayToggle:J(U),onCustomBasemapSubmit:J(j)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):te("",!0),f("div",Wi,[f("div",$i,ae(J($)),1),ee[5]||(ee[5]=f("div",{class:"divider"},null,-1)),f("button",{class:"home-btn",title:"回到初始位置",onClick:ee[3]||(ee[3]=(...se)=>J(ue)&&J(ue)(...se))},[...ee[4]||(ee[4]=[f("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[f("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},rn=tt(Gi,[["__scopeId","data-v-131c1981"]]);export{rn as default};
