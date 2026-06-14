const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-B39pOI_G.js","./vendor-echarts-all-CVx2VYxY.js","./vendor-libs-CdvuqtNs.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var Pt=Object.defineProperty;var Ct=(t,e,a)=>e in t?Pt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var it=(t,e,a)=>Ct(t,typeof e!="symbol"?e+"":e,a);import{_ as je,e as tt,K as bt,J as St,I as At}from"./index-Dt5_fYCP.js";import{_ as Et}from"./vendor-runtime-Dp1pzeXC.js";import{C as Tt,o as wt,w as he,d as z,c as B,f as p,t as K,G as ne,W as Ve,X as Ge,g as J,r as $,P as Dt,a as xe,u as X,F as pe,e as Me,n as ce,x as Ce,S as He,I as nt,i as Rt,H as ke,O as Mt,q as ve,v as kt,a4 as Ze}from"./vendor-vue-CmuMwCC6.js";import{af as Ke,ag as Je,ah as It,X as zt,e as ot,ac as st,ai as Ot,aj as Nt,ak as lt,H as ct,al as Bt,T as ut,a2 as Ht,am as Ut,an as Wt,ao as Gt,ap as $t,q as Vt,o as qt,aq as Xt}from"./vendor-libs-CdvuqtNs.js";import"./vendor-ol-all-D3od1ozZ.js";import"./vendor-geotiff-DCPfLQJG.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-DbLN0cxH.js";import"./vendor-axios-Bdz_Fv8M.js";function Yt(t){var n;const e=t==null?void 0:t.scene,a=e==null?void 0:e.globe;!e||!a||(a.enableLighting=!0,e.sun&&(e.sun.show=!0),e.moon&&(e.moon.show=!0),e.skyBox&&(e.skyBox.show=!0),(n=e.requestRender)==null||n.call(e))}function jt(t,e){var l;const a=t==null?void 0:t.scene,n=a==null?void 0:a.globe;if(!a||!n)return;Jt(a,e),Qt(a),n.enableLighting=!0,n.showGroundAtmosphere=!0,G(n,"dynamicAtmosphereLighting",!0),G(n,"dynamicAtmosphereLightingFromSun",!0),G(n,"atmosphereLightIntensity",11.5),G(n,"atmosphereHueShift",-.015),G(n,"atmosphereSaturationShift",.08),G(n,"atmosphereBrightnessShift",.02),G(n,"lightingFadeInDistance",15e6),G(n,"lightingFadeOutDistance",22e6),G(n,"nightFadeInDistance",9e6),G(n,"nightFadeOutDistance",16e6),qe(e,n,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),qe(e,n,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),G(n,"atmosphereRayleighScaleHeight",1e4),G(n,"atmosphereMieScaleHeight",3200),G(n,"atmosphereMieAnisotropy",.92),!a.skyAtmosphere&&(e!=null&&e.SkyAtmosphere)&&(a.skyAtmosphere=tr(e));const u=a.skyAtmosphere;u&&(u.show=!0,G(u,"perFragmentAtmosphere",!0),G(u,"dynamicAtmosphereLighting",!0),G(u,"dynamicAtmosphereLightingFromSun",!0),G(u,"hueShift",-.025),G(u,"saturationShift",.08),G(u,"brightnessShift",.03),G(u,"atmosphereLightIntensity",12),qe(e,u,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),qe(e,u,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),G(u,"atmosphereRayleighScaleHeight",1e4),G(u,"atmosphereMieScaleHeight",3200),G(u,"atmosphereMieAnisotropy",.92)),a.sun&&(a.sun.show=!0),a.moon&&(a.moon.show=!0),a.skyBox&&(a.skyBox.show=!0),"sunBloom"in a&&(a.sunBloom=!0),"highDynamicRange"in a&&(a.highDynamicRange=!0),er(a),(l=a.requestRender)==null||l.call(a)}function Zt(t){var u;const e=t==null?void 0:t.scene,a=e==null?void 0:e.globe;if(!e||!a)return null;const n=(u=e.postProcessStages)==null?void 0:u.bloom;return{scene:Le(e,["highDynamicRange","sunBloom","light"]),fog:Le(e.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:Le(a,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!e.skyAtmosphere,sky:Le(e.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:Le(e.sun,["show"]),moon:Le(e.moon,["show"]),skyBox:Le(e.skyBox,["show"]),bloom:{props:Le(n,["enabled"]),uniforms:Le(n==null?void 0:n.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Kt(t,e,a){var d,g,b,T;if(!a)return;const n=t==null?void 0:t.scene,u=n==null?void 0:n.globe;if(!n||!u)return;Fe(n,a.scene,e),Fe(n.fog,a.fog,e),Fe(u,a.globe,e),Fe(n.sun,a.sun,e),Fe(n.moon,a.moon,e),Fe(n.skyBox,a.skyBox,e),n.skyAtmosphere&&(Fe(n.skyAtmosphere,a.sky,e),a.skyAtmosphereExisted||(n.skyAtmosphere.show=!1));const l=(d=n.postProcessStages)==null?void 0:d.bloom;Fe(l,(g=a.bloom)==null?void 0:g.props,e),Fe(l==null?void 0:l.uniforms,(b=a.bloom)==null?void 0:b.uniforms,e),(T=n.requestRender)==null||T.call(n)}function Jt(t,e){var a;if(e!=null&&e.SunLight)try{t.light=new e.SunLight({color:(a=e.Color)==null?void 0:a.WHITE,intensity:2.35})}catch{t.light=new e.SunLight}G(t.light,"intensity",2.35)}function Qt(t){const e=t==null?void 0:t.fog;e&&(e.enabled=!0,G(e,"density",12e-5),G(e,"minimumBrightness",.035),G(e,"screenSpaceErrorFactor",2),G(e,"visualDensityScalar",.16))}function er(t){var a;const e=(a=t==null?void 0:t.postProcessStages)==null?void 0:a.bloom;e&&(e.enabled=!0,e.uniforms&&(G(e.uniforms,"contrast",128),G(e.uniforms,"brightness",-.18),G(e.uniforms,"delta",1),G(e.uniforms,"sigma",2.5),G(e.uniforms,"stepSize",4.2)))}function tr(t){var e;try{return new t.SkyAtmosphere((e=t.Ellipsoid)==null?void 0:e.WGS84)}catch{return new t.SkyAtmosphere}}function G(t,e,a){t&&e in t&&(t[e]=a)}function qe(t,e,a,n,u,l){!e||!(a in e)||!(t!=null&&t.Cartesian3)||(e[a]=new t.Cartesian3(n,u,l))}function Le(t,e){return t?e.reduce((a,n)=>(n in t&&(a[n]=rr(t[n])),a),{}):{}}function Fe(t,e={},a){!t||!e||Object.entries(e).forEach(([n,u])=>{n in t&&(t[n]=ar(u,a))})}function rr(t){return t&&typeof t=="object"&&"x"in t&&"y"in t&&"z"in t?{__type:"Cartesian3",x:t.x,y:t.y,z:t.z}:t}function ar(t,e){return(t==null?void 0:t.__type)==="Cartesian3"&&(e!=null&&e.Cartesian3)?new e.Cartesian3(t.x,t.y,t.z):t}const ir={key:0,class:"advanced-effects-root"},nr={class:"effects-panel"},or={class:"panel-head"},sr={class:"effect-switches"},lr={class:"switch-item"},cr={class:"switch-item"},ur={class:"switch-item"},dr={class:"switch-item"},hr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(t){const e=t,a=tt(),n=$(null),u=$(!1),l=$(!1),d=$(!1),g=$(!1),b=$(!1);let T=null,E=null,A=null,O=!1,M=null,L=null,C=null,v=null,S=null,i=null,f=null,_=null,F=!1,k=null,P=0,N=0,V=typeof performance<"u"?performance.now():Date.now();function Y(){return C||(C=Et(()=>import("./cesiumFxRuntime-B39pOI_G.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(o=>{var s;const r=(s=o==null?void 0:o.getCesiumFxEchartsRuntime)==null?void 0:s.call(o);if(!r)throw new Error("Cinematic FX 图表运行时加载失败");return L=r,r}).catch(o=>{throw C=null,o}),C)}async function U(){return L||Y()}const q={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},y={hdr:null,bloom:null,sky:null};Tt(()=>{w()}),wt(()=>{de()}),he(()=>e.controls,o=>{D(o||{})},{deep:!0,immediate:!0});function D(o){Object.prototype.hasOwnProperty.call(o,"fog")&&(u.value=!!o.fog),Object.prototype.hasOwnProperty.call(o,"hbao")&&(l.value=!!o.hbao),Object.prototype.hasOwnProperty.call(o,"tiltShift")&&(d.value=!!o.tiltShift),Object.prototype.hasOwnProperty.call(o,"atmosphere")&&(g.value=!!o.atmosphere)}function w(){let o=0;v=window.setInterval(async()=>{var m,x;o+=1;const r=(m=e.getViewer)==null?void 0:m.call(e),s=((x=e.getCesium)==null?void 0:x.call(e))||window.Cesium;if(r&&s){clearInterval(v),v=null;try{Q(r),I(r),ue(r,s),be(r,s),a.success("高级视觉效果已启用。")}catch(R){a.error("高级视觉效果初始化失败",R),a.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}o>=150&&(clearInterval(v),v=null,a.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function Q(o){var s,m,x,R,H,Z;const r=o==null?void 0:o.scene;if(r){if(typeof r.highDynamicRange=="boolean"&&(y.hdr=r.highDynamicRange),(s=r.postProcessStages)!=null&&s.bloom){const te=r.postProcessStages.bloom;y.bloom={enabled:!!te.enabled,contrast:(m=te.uniforms)==null?void 0:m.contrast,brightness:(x=te.uniforms)==null?void 0:x.brightness,delta:(R=te.uniforms)==null?void 0:R.delta,sigma:(H=te.uniforms)==null?void 0:H.sigma,stepSize:(Z=te.uniforms)==null?void 0:Z.stepSize}}r.skyAtmosphere&&(y.sky={hueShift:r.skyAtmosphere.hueShift,saturationShift:r.skyAtmosphere.saturationShift,brightnessShift:r.skyAtmosphere.brightnessShift})}}function ue(o,r){var m;!((m=o==null?void 0:o.scene)!=null&&m.postProcessStages)||!(r!=null&&r.PostProcessStage)||(Ae(o,r),ze(o,r),_e(o,r),g.value?fe(o,r,1200):ge(o))}function I(o){var s;const r=o==null?void 0:o.scene;(s=r==null?void 0:r.renderError)!=null&&s.addEventListener&&(r.rethrowRenderErrors=!1,_=r.renderError.addEventListener((m,x)=>{a.error("Cesium 渲染异常，已触发降级保护",x),ee(),F||(F=!0,a.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function ee(){u.value=!1,d.value=!1,l.value=!1,g.value=!1,T&&(T.enabled=!1),E&&(E.enabled=!1),A&&(A.enabled=!1)}function Ae(o,r){T||(T=new r.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new r.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),o.scene.postProcessStages.add(T),T.enabled=u.value)}function ze(o,r){var m,x;const s=(m=o==null?void 0:o.scene)==null?void 0:m.postProcessStages;s&&(s.ambientOcclusion?(A=s.ambientOcclusion,O=!1):(x=r==null?void 0:r.PostProcessStageLibrary)!=null&&x.createAmbientOcclusionStage&&(A=r.PostProcessStageLibrary.createAmbientOcclusionStage(),s.add(A),O=!0),A&&(A.enabled=l.value,A.uniforms&&("intensity"in A.uniforms&&(A.uniforms.intensity=4.2),"bias"in A.uniforms&&(A.uniforms.bias=.08),"lengthCap"in A.uniforms&&(A.uniforms.lengthCap=.35),"stepSize"in A.uniforms&&(A.uniforms.stepSize=1.8),"frustumLength"in A.uniforms&&(A.uniforms.frustumLength=1200))))}function _e(o,r){E||(E=new r.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),o.scene.postProcessStages.add(E),E.enabled=!1)}function be(o,r){const s=o==null?void 0:o.scene;s&&(f=s.preRender.addEventListener(()=>{var H;const m=Oe(o),x=Number(((H=o==null?void 0:o.camera)==null?void 0:H.pitch)??-1.2);P+=1;const R=typeof performance<"u"?performance.now():Date.now();if(R-V>=1e3&&(N=Math.round(P*1e3/(R-V)),P=0,V=R),T&&(T.enabled=u.value,T.uniforms.cameraHeightFactor=Se(m,150,12e3),T.uniforms.fogDensity=55e-5+(1-T.uniforms.cameraHeightFactor)*.00125),A&&(A.enabled=l.value),E){const Z=x>-.62,te=Z?Be((x+.62)/.5):0;E.enabled=d.value&&Z,E.uniforms.blurStrength=te}g.value?fe(o,r,m):ge(o)}))}function fe(o,r,s){var Z;const m=o==null?void 0:o.scene;if(!m)return;k||(k=Zt(o)),jt(o,r),typeof m.highDynamicRange=="boolean"&&(m.highDynamicRange=!0);const x=(Z=m.postProcessStages)==null?void 0:Z.bloom;x&&(x.enabled=!0,x.uniforms&&("contrast"in x.uniforms&&(x.uniforms.contrast=149),"brightness"in x.uniforms&&(x.uniforms.brightness=-.12),"delta"in x.uniforms&&(x.uniforms.delta=1),"sigma"in x.uniforms&&(x.uniforms.sigma=3.25),"stepSize"in x.uniforms&&(x.uniforms.stepSize=5)));const R=m.skyAtmosphere;if(!R)return;const H=Se(s,500,12e4);R.hueShift=-.035+H*.035,R.saturationShift=-.14+H*.09,R.brightnessShift=.03+(1-H)*.08}function ge(o){var x,R;const r=o==null?void 0:o.scene;if(!r)return;const s=((x=e.getCesium)==null?void 0:x.call(e))||window.Cesium;if(k){Kt(o,s,k),k=null;return}typeof r.highDynamicRange=="boolean"&&y.hdr!==null&&(r.highDynamicRange=y.hdr);const m=(R=r.postProcessStages)==null?void 0:R.bloom;m&&y.bloom&&(m.enabled=y.bloom.enabled,m.uniforms&&("contrast"in m.uniforms&&y.bloom.contrast!==void 0&&(m.uniforms.contrast=y.bloom.contrast),"brightness"in m.uniforms&&y.bloom.brightness!==void 0&&(m.uniforms.brightness=y.bloom.brightness),"delta"in m.uniforms&&y.bloom.delta!==void 0&&(m.uniforms.delta=y.bloom.delta),"sigma"in m.uniforms&&y.bloom.sigma!==void 0&&(m.uniforms.sigma=y.bloom.sigma),"stepSize"in m.uniforms&&y.bloom.stepSize!==void 0&&(m.uniforms.stepSize=y.bloom.stepSize))),r.skyAtmosphere&&y.sky&&(r.skyAtmosphere.hueShift=y.sky.hueShift,r.skyAtmosphere.saturationShift=y.sky.saturationShift,r.skyAtmosphere.brightnessShift=y.sky.brightnessShift)}function Ee(){S&&(clearInterval(S),S=null)}async function De(){var m,x;const o=!b.value;if(b.value=o,!o){Ee();return}const r=(m=e.getViewer)==null?void 0:m.call(e),s=((x=e.getCesium)==null?void 0:x.call(e))||window.Cesium;if(!r||!s){b.value=!1,a.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Re(r,s),se(r,s),j(r,s)}catch(R){b.value=!1,a.error("图表模块加载失败",R)}}async function Re(o,r){await U(),await Dt(),n.value&&(M||(M=L.init(n.value),re()),i||(i=()=>{M==null||M.resize()},window.addEventListener("resize",i)),M.resize(),j(o,r))}function se(o,r){S||(S=window.setInterval(()=>{!M||!b.value||j(o,r)},1200))}function j(o,r){var H;const s=new Date,m=`${h(s.getHours())}:${h(s.getMinutes())}:${h(s.getSeconds())}`,x=Number((Oe(o)/1e3).toFixed(2)),R=Number(r.Math.toDegrees(((H=o==null?void 0:o.camera)==null?void 0:H.pitch)??0).toFixed(1));c(q.labels,m,20),c(q.cameraHeightKm,x,20),c(q.pitchDeg,R,20),c(q.fps,N,20),M.setOption({xAxis:{data:q.labels},series:[{data:q.cameraHeightKm},{data:q.pitchDeg},{data:q.fps}]})}function re(){M&&M.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function de(){var s,m;v&&(clearInterval(v),v=null),Ee();const o=(s=e.getViewer)==null?void 0:s.call(e),r=(m=o==null?void 0:o.scene)==null?void 0:m.postProcessStages;f&&(f(),f=null),_&&(_(),_=null),T&&r&&r.remove(T),T=null,E&&r&&r.remove(E),E=null,A&&(O&&r&&r.remove(A),A=null),O=!1,o&&ge(o),i&&(window.removeEventListener("resize",i),i=null),M&&(M.dispose(),M=null),L=null,F=!1}function Oe(o){var x,R,H;const r=(R=(x=o==null?void 0:o.scene)==null?void 0:x.globe)==null?void 0:R.ellipsoid,s=(H=o==null?void 0:o.camera)==null?void 0:H.positionWC;if(!r||!s)return 0;const m=r.cartesianToCartographic(s);return Math.max(0,Number((m==null?void 0:m.height)??0))}function Se(o,r,s){return!Number.isFinite(o)||s<=r?0:Be((o-r)/(s-r))}function Be(o){return Math.min(1,Math.max(0,Number(o)||0))}function c(o,r,s){o.push(r),o.length>s&&o.shift()}function h(o){return String(o).padStart(2,"0")}return(o,r)=>t.headless?J("",!0):(z(),B("div",ir,[p("div",nr,[p("div",or,[r[4]||(r[4]=p("span",{class:"panel-title"},"Cinematic FX",-1)),p("button",{class:"panel-btn",onClick:De},K(b.value?"隐藏图表":"显示图表"),1)]),p("div",sr,[p("label",lr,[ne(p("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>u.value=s),type:"checkbox"},null,512),[[Ve,u.value]]),r[5]||(r[5]=p("span",null,"电影级高度雾",-1))]),p("label",cr,[ne(p("input",{"onUpdate:modelValue":r[1]||(r[1]=s=>l.value=s),type:"checkbox"},null,512),[[Ve,l.value]]),r[6]||(r[6]=p("span",null,"HBAO 微阴影",-1))]),p("label",ur,[ne(p("input",{"onUpdate:modelValue":r[2]||(r[2]=s=>d.value=s),type:"checkbox"},null,512),[[Ve,d.value]]),r[7]||(r[7]=p("span",null,"移轴摄影",-1))]),p("label",dr,[ne(p("input",{"onUpdate:modelValue":r[3]||(r[3]=s=>g.value=s),type:"checkbox"},null,512),[[Ve,g.value]]),r[8]||(r[8]=p("span",null,"动态大气 + Bloom",-1))])]),ne(p("div",{ref_key:"chartRef",ref:n,class:"fx-chart"},null,512),[[Ge,b.value]])])]))}},fr=je(hr,[["__scopeId","data-v-1e562e70"]]),mr={key:0,class:"launcher-count"},pr={class:"panel-header"},gr={class:"panel-title-block"},yr={class:"panel-mark"},vr={class:"panel-copy"},xr={class:"panel-subtitle"},_r={class:"panel-actions"},br=["title"],Sr={class:"panel-tabs","aria-label":"3D 工具分类"},Tr=["aria-pressed","onClick"],wr={class:"panel-scroll"},Mr={class:"panel-page"},Lr={class:"overview-grid"},Fr={class:"overview-tile"},Pr={class:"overview-tile"},Cr={class:"overview-tile"},Ar={key:0,class:"quick-actions"},Er=["disabled","onClick"],Dr={key:1,class:"empty-state"},Rr={class:"panel-page"},kr={key:0,class:"option-group"},Ir={class:"section-head"},zr={class:"option-grid"},Or=["disabled","aria-pressed","title","onClick"],Nr={class:"custom-basemap-input-row"},Br=["disabled"],Hr={key:0,class:"custom-basemap-current"},Ur={key:1,class:"option-group"},Wr={class:"section-head"},Gr={class:"option-grid"},$r=["aria-pressed","title","onClick"],Vr={key:2,class:"option-group"},qr={class:"section-head"},Xr={class:"overlay-list"},Yr=["disabled","aria-pressed","title","onClick"],jr={class:"overlay-copy"},Zr={class:"overlay-title"},Kr={key:0,class:"overlay-desc"},Jr={key:3,class:"empty-state"},Qr={class:"panel-page"},ea={class:"module-list"},ta=["aria-expanded","onClick"],ra={class:"module-icon"},aa={class:"module-copy"},ia={class:"module-title"},na={key:0,class:"module-desc"},oa={class:"module-head-side"},sa={key:0,class:"module-body"},la={key:0,class:"module-actions"},ca=["disabled","onClick"],ua={key:1,class:"control-list"},da={class:"control-label"},ha=["min","max","step","value","disabled","onInput"],fa=["min","max","step","value","disabled","onInput"],ma=["value","disabled","onInput"],pa=["value","disabled","onChange"],ga=["value"],ya=["aria-pressed","disabled","onClick"],va={key:4,class:"control-value"},xa={key:0,class:"empty-state"},_a={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(t,{emit:e}){const a=t,n=e,u=k(),l=$(u.activeTab||"scene"),d=$(!!u.compactMode),g=$(new Set(u.expandedModuleIds||["effects"])),b=$(a.customBasemapUrl||""),T=ve(()=>a.embedded||a.open),E=ve(()=>a.modules.find(y=>y.id==="scene")||null),A=ve(()=>{var y;return((y=E.value)==null?void 0:y.actions)||[]}),O=ve(()=>a.modules.filter(y=>y.id!=="scene")),M=ve(()=>O.value.filter(y=>y.statusTone==="success"||y.statusTone==="warning").length),L=[{id:"scene",label:"场景",icon:Je},{id:"layers",label:"图层",icon:ot},{id:"modules",label:"模块",icon:Ke}],C=ve(()=>{var y;return((y=a.basemapOptions.find(D=>D.value===a.activeBasemap))==null?void 0:y.label)||"未选择"}),v=ve(()=>{var y;return((y=a.terrainOptions.find(D=>D.value===a.activeTerrain))==null?void 0:y.label)||"未选择"});he(()=>a.modules.map(y=>y.id),y=>{y.includes(l.value)||l.value==="scene"||l.value==="layers"||l.value==="modules"||(l.value="scene")},{immediate:!0}),he([l,d,g],P,{deep:!0}),he(()=>a.customBasemapUrl,y=>{y!==b.value&&(b.value=y||"")});function S(y){n("update:open",y)}function i(y){return g.value.has(y)}function f(y){const D=new Set(g.value);D.has(y)?D.delete(y):D.add(y),g.value=D}function _(y){y!=null&&y.disabled||n("update:activeBasemap",y.value)}function F(){n("custom-basemap-submit",{url:b.value})}function k(){if(typeof window>"u")return{};try{const y=window.localStorage.getItem(a.storageKey);return y?JSON.parse(y):{}}catch{return{}}}function P(){if(!(typeof window>"u"))try{window.localStorage.setItem(a.storageKey,JSON.stringify({activeTab:l.value,compactMode:d.value,expandedModuleIds:[...g.value]}))}catch{}}function N(y){return{scene:Je,effects:qt,wind:Vt,fluid:$t}[y]||Ke}function V(y,D){var Q;return((Q={scene:{home:Wt,everest:lt,tileset:Ut},wind:{load:Ht,clear:ut},fluid:{pick:ct,clear:ut}}[y])==null?void 0:Q[D])||Gt}function Y(y,D){n("module-action",{moduleId:y,actionId:D})}function U(y,D,w){const Q=D.type==="range"?Number(w):w;n("control-change",{moduleId:y,controlId:D.id,value:Q})}function q(y){y.disabled||n("overlay-toggle",{overlayId:y.value,value:!y.active})}return(y,D)=>(z(),B("aside",{class:ce(["cesium-tool-shell",{"is-open":T.value,"is-embedded":t.embedded}])},[!t.embedded&&!T.value?(z(),B("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:D[0]||(D[0]=w=>S(!0))},[xe(X(Ke),{size:18,"stroke-width":"2"}),D[4]||(D[4]=p("span",null,"高级控制台",-1)),M.value?(z(),B("span",mr,K(M.value),1)):J("",!0)])):J("",!0),ne(p("section",{class:ce(["cesium-tool-panel",{compact:d.value}]),"aria-label":"Cesium 高级控制台"},[p("header",pr,[p("div",gr,[p("span",yr,[xe(X(Je),{size:18,"stroke-width":"2"})]),p("span",vr,[D[5]||(D[5]=p("span",{class:"panel-title"},"3D 高级控制台",-1)),p("span",xr,K(C.value)+" / "+K(v.value),1)])]),p("div",_r,[p("button",{class:"icon-btn",type:"button",title:d.value?"切换为舒展布局":"切换为紧凑布局",onClick:D[1]||(D[1]=w=>d.value=!d.value)},[xe(X(It),{size:16,"stroke-width":"2"})],8,br),t.embedded?J("",!0):(z(),B("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:D[2]||(D[2]=w=>S(!1))},[xe(X(zt),{size:17,"stroke-width":"2"})]))])]),p("nav",Sr,[(z(),B(pe,null,Me(L,w=>p("button",{key:w.id,class:ce(["tab-btn",{active:l.value===w.id}]),type:"button","aria-pressed":l.value===w.id,onClick:Q=>l.value=w.id},[(z(),Ce(He(w.icon),{size:15,"stroke-width":"2"})),p("span",null,K(w.label),1)],10,Tr)),64))]),p("div",wr,[ne(p("section",Mr,[p("div",Lr,[p("div",Fr,[D[6]||(D[6]=p("span",{class:"overview-label"},"地图源",-1)),p("strong",null,K(C.value),1)]),p("div",Pr,[D[7]||(D[7]=p("span",{class:"overview-label"},"地形",-1)),p("strong",null,K(v.value),1)]),p("div",Cr,[D[8]||(D[8]=p("span",{class:"overview-label"},"模块",-1)),p("strong",null,K(M.value)+"/"+K(O.value.length),1)])]),A.value.length?(z(),B("div",Ar,[(z(!0),B(pe,null,Me(A.value,w=>(z(),B("button",{key:w.id,class:ce(["tool-action",[w.variant||"default",{active:w.active}]]),disabled:w.disabled,type:"button",onClick:Q=>Y(E.value.id,w.id)},[(z(),Ce(He(V(E.value.id,w.id)),{size:15,"stroke-width":"2"})),nt(" "+K(w.label),1)],10,Er))),128))])):(z(),B("div",Dr," 暂无场景快捷操作 "))],512),[[Ge,l.value==="scene"]]),ne(p("section",Rr,[t.basemapOptions.length?(z(),B("div",kr,[p("div",Ir,[xe(X(ot),{size:16,"stroke-width":"2"}),D[9]||(D[9]=p("span",null,"地图源",-1))]),p("div",zr,[(z(!0),B(pe,null,Me(t.basemapOptions,w=>(z(),B("button",{key:w.value,class:ce(["option-card",{active:w.value===t.activeBasemap}]),type:"button",disabled:w.disabled,"aria-pressed":w.value===t.activeBasemap,title:w.description||w.label,onClick:Q=>_(w)},[p("span",null,K(w.label),1),w.value===t.activeBasemap?(z(),Ce(X(st),{key:0,size:15,"stroke-width":"2.4"})):J("",!0)],10,Or))),128))]),p("form",{class:"custom-basemap-editor",onSubmit:Rt(F,["prevent"])},[p("div",Nr,[xe(X(Ot),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),ne(p("input",{"onUpdate:modelValue":D[3]||(D[3]=w=>b.value=w),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[ke,b.value]]),p("button",{class:"custom-basemap-submit",type:"submit",disabled:!b.value.trim(),title:"加载自定义 XYZ"},[xe(X(Nt),{size:14,"stroke-width":"2"}),D[10]||(D[10]=p("span",null,"加载",-1))],8,Br)]),t.customBasemapUrl?(z(),B("div",Hr,K(t.customBasemapUrl),1)):J("",!0)],32)])):J("",!0),t.terrainOptions.length?(z(),B("div",Ur,[p("div",Wr,[xe(X(lt),{size:16,"stroke-width":"2"}),D[11]||(D[11]=p("span",null,"地形",-1))]),p("div",Gr,[(z(!0),B(pe,null,Me(t.terrainOptions,w=>(z(),B("button",{key:w.value,class:ce(["option-card",{active:w.value===t.activeTerrain}]),type:"button","aria-pressed":w.value===t.activeTerrain,title:w.description||w.label,onClick:Q=>y.$emit("update:activeTerrain",w.value)},[p("span",null,K(w.label),1),w.value===t.activeTerrain?(z(),Ce(X(st),{key:0,size:15,"stroke-width":"2.4"})):J("",!0)],10,$r))),128))])])):J("",!0),t.overlayOptions.length?(z(),B("div",Vr,[p("div",qr,[xe(X(ct),{size:16,"stroke-width":"2"}),D[12]||(D[12]=p("span",null,"叠加层",-1))]),p("div",Xr,[(z(!0),B(pe,null,Me(t.overlayOptions,w=>(z(),B("button",{key:w.value,class:ce(["overlay-row",{active:!!w.active}]),type:"button",disabled:w.disabled,"aria-pressed":!!w.active,title:w.description||w.label,onClick:Q=>q(w)},[p("span",jr,[p("span",Zr,K(w.label),1),w.description?(z(),B("span",Kr,K(w.description),1)):J("",!0)]),p("span",{class:ce(["toggle-control",{active:!!w.active}]),"aria-hidden":"true"},[...D[13]||(D[13]=[p("span",{class:"toggle-track"},[p("span",{class:"toggle-thumb"})],-1)])],2)],10,Yr))),128))])])):J("",!0),!t.basemapOptions.length&&!t.terrainOptions.length&&!t.overlayOptions.length?(z(),B("div",Jr," 暂无图层配置项 ")):J("",!0)],512),[[Ge,l.value==="layers"]]),ne(p("section",Qr,[p("div",ea,[(z(!0),B(pe,null,Me(O.value,w=>{var Q,ue;return z(),B("article",{key:w.id,class:ce(["module-item",{expanded:i(w.id)}])},[p("button",{class:"module-head",type:"button","aria-expanded":i(w.id),onClick:I=>f(w.id)},[p("span",ra,[(z(),Ce(He(N(w.id)),{size:16,"stroke-width":"2"}))]),p("span",aa,[p("span",ia,K(w.title),1),w.description?(z(),B("span",na,K(w.description),1)):J("",!0)]),p("span",oa,[w.status?(z(),B("span",{key:0,class:ce(["module-status",w.statusTone||"neutral"])},K(w.status),3)):J("",!0),xe(X(Bt),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,ta),i(w.id)?(z(),B("div",sa,[(Q=w.actions)!=null&&Q.length?(z(),B("div",la,[(z(!0),B(pe,null,Me(w.actions,I=>(z(),B("button",{key:I.id,class:ce(["tool-action",[I.variant||"default",{active:I.active}]]),disabled:I.disabled,type:"button",onClick:ee=>Y(w.id,I.id)},[(z(),Ce(He(V(w.id,I.id)),{size:14,"stroke-width":"2"})),nt(" "+K(I.label),1)],10,ca))),128))])):J("",!0),(ue=w.controls)!=null&&ue.length?(z(),B("div",ua,[(z(!0),B(pe,null,Me(w.controls,I=>(z(),B("label",{key:I.id,class:ce(["control-row",`control-${I.type}`])},[p("span",da,K(I.label),1),I.type==="range"?(z(),B(pe,{key:0},[p("input",{class:"control-range",type:"range",min:I.min,max:I.max,step:I.step,value:I.value,disabled:I.disabled,onInput:ee=>U(w.id,I,ee.target.value)},null,40,ha),p("input",{class:"control-number",type:"number",min:I.min,max:I.max,step:I.step,value:I.value,disabled:I.disabled,onInput:ee=>U(w.id,I,ee.target.value)},null,40,fa)],64)):I.type==="color"?(z(),B(pe,{key:1},[p("input",{class:"control-color",type:"color",value:I.value,disabled:I.disabled,onInput:ee=>U(w.id,I,ee.target.value)},null,40,ma),p("span",{class:"control-color-swatch",style:Mt({backgroundColor:I.value})},null,4)],64)):I.type==="select"?(z(),B("select",{key:2,class:"control-select",value:I.value,disabled:I.disabled,onChange:ee=>U(w.id,I,ee.target.value)},[(z(!0),B(pe,null,Me(I.options||[],ee=>(z(),B("option",{key:ee.value,value:ee.value},K(ee.label),9,ga))),128))],40,pa)):I.type==="toggle"?(z(),B("button",{key:3,class:ce(["toggle-control",{active:!!I.value}]),type:"button","aria-pressed":!!I.value,disabled:I.disabled,onClick:ee=>U(w.id,I,!I.value)},[...D[14]||(D[14]=[p("span",{class:"toggle-track"},[p("span",{class:"toggle-thumb"})],-1)])],10,ya)):J("",!0),I.displayValue?(z(),B("span",va,K(I.displayValue),1)):J("",!0)],2))),128))])):J("",!0)])):J("",!0)],2)}),128))]),O.value.length?J("",!0):(z(),B("div",xa," 暂无可用功能模块 "))],512),[[Ge,l.value==="modules"]])])],2),[[Ge,t.embedded||T.value]])],2))}},ba=je(_a,[["__scopeId","data-v-b9a36ee6"]]);function Sa(t){if(!t)throw new Error("Cesium runtime is required for FluidRenderer.");function e(S){return(S==null?void 0:S._view)||(S==null?void 0:S.view)}function a(S){const i=e(S);if(!(i!=null&&i.passState))throw new Error("Cesium scene passState is unavailable.");return i.passState}function n(S){const i=e(S);return(i==null?void 0:i.frustumCommandsList)||(i==null?void 0:i._frustumCommandsList)||[]}const u=`
// cesium for fluid by mind3d , fluid demo from https://www.shadertoy.com/view/7tSSDD 
const int textureSize = 1024;
// Render
const vec3 backgroundColor = vec3(0.2);
// Terrain
const float transitionTime = 5.0;
const float transitionPercent = 0.3;
const int octaves = 7;
// Water simulation
// const float attenuation = 0.995;
// const float strenght = 0.25;
// const float minTotalFlow = 0.0001;
// fluidParam: x=attenuation, y=strength, z=minTotalFlow, w=initialWaterLevel
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
`,l=`
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
    terrainElevation = (terrainElevation - (minHeight)) / (maxHeight - (minHeight));

    // Water
    // 默认全局水深，由 fluidParam.w 控制
    float waterDept = fluidParam.w;
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
`,g=`
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
`;class E{constructor(i){this.commandType=i.commandType,this.geometry=i.geometry,this.attributeLocations=i.attributeLocations,this.primitiveType=i.primitiveType,this.uniformMap=i.uniformMap,this.vertexShaderSource=i.vertexShaderSource,this.fragmentShaderSource=i.fragmentShaderSource,this.rawRenderState=i.rawRenderState,this.framebuffer=i.framebuffer,this.isPostRender=i.isPostRender,this.outputTexture=i.outputTexture,this.autoClear=t.defaultValue(i.autoClear,!1),this.preExecute=i.preExecute,this.modelMatrix=t.defaultValue(i.modelMatrix,t.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new t.ClearCommand({color:new t.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:t.Pass.OPAQUE}))}createCommand(i){switch(this.commandType){case"Draw":{const f=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW}),_=t.ShaderProgram.fromCache({context:i,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),F=t.RenderState.fromCache(this.rawRenderState);return new t.DrawCommand({owner:this,vertexArray:f,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:_,framebuffer:this.framebuffer,renderState:F,pass:t.Pass.OPAQUE})}case"Compute":return new t.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(i,f){this.geometry=f;const _=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=_}update(i){this.show&&(t.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(i.context),this.commandToExecute.isPostRender=this.isPostRender),t.defined(this.preExecute)&&this.preExecute(this),t.defined(this.clearCommand)&&i.commandList.push(this.clearCommand),i.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return t.defined(this.commandToExecute)&&(t.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),t.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),t.destroyObject(this)}}class A{constructor(){}static loadText(i){const f=new XMLHttpRequest;return f.open("GET",i,!1),f.send(),f.responseText}static getFullscreenQuad(){return new t.Geometry({attributes:new t.GeometryAttributes({position:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(i){if(t.defined(i.arrayBufferView)){const _={};_.arrayBufferView=i.arrayBufferView,i.source=_,i.flipY=!1}return new t.Texture(i)}static createDepthFramebuffer(i,f,_){return new t.Framebuffer({context:i,colorTextures:[this.createTexture({context:i,width:f,height:_,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(f*_*4)})],depthRenderbuffer:new t.Renderbuffer({context:i,width:f,height:_,format:t.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(i,f,_,F=!1){const k={context:i,colorTextures:[f],destroyAttachments:F};return _&&(k.depthTexture=_),new t.Framebuffer(k)}static createRawRenderState(i){const F={viewport:i.viewport,depthTest:i.depthTest,depthMask:i.depthMask,blending:i.blending};return t.Appearance.getDefaultRenderState(!0,!1,F)}}const v=class v{constructor(i,f={}){if(!i)throw new Error("Cesium Viewer is required");this.viewer=i,this._initConfiguration(f),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(i){this.config={resolution:new t.Cartesian2(i.width||v.DEFAULTS.width,i.height||v.DEFAULTS.height),dimensions:i.dimensions||v.DEFAULTS.dimensions.clone(),heightRange:{min:i.minHeight??v.DEFAULTS.heightRange[0],max:i.maxHeight??v.DEFAULTS.heightRange[1]},baseHeight:i.baseHeight??v.DEFAULTS.baseHeight,fluidParams:i.fluidParams||v.DEFAULTS.fluidParams.clone(),customParams:i.customParams||v.DEFAULTS.customParams.clone(),waterColor:i.waterColor||v.DEFAULTS.waterColor.clone(),lonLat:i.lonLat||[...v.DEFAULTS.lonLat],timeStep:i.timeStep||v.DEFAULTS.timeStep,heightMapSource:i.heightMapSource||v.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const i=()=>A.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:i(),B:i(),C:i(),D:i()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(i){if(!(i!=null&&i.arrayBufferView)||!i.width||!i.height)throw new Error("Invalid height map source.");return A.createTexture({context:this.viewer.scene.context,width:i.width,height:i.height,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:i.arrayBufferView,sampler:new t.Sampler({wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var y,D;const i=this.viewer.scene.context,f=A.createDepthFramebuffer(i,this.config.resolution.x,this.config.resolution.y),_=this.viewer.scene,F=_.frameState,k=a(this.viewer.scene),P=_.camera,N=F.camera,V=k.framebuffer,Y=t.BoundingRectangle.clone(k.viewport,new t.BoundingRectangle);let U=null,q=[];try{k.viewport.x=0,k.viewport.y=0,k.viewport.width=this.config.resolution.x,k.viewport.height=this.config.resolution.y,k.framebuffer=f,_.camera=this.heightMapCamera,F.camera=this.heightMapCamera,F.context.uniformState.updateCamera(this.heightMapCamera),q=this._processHeightMapShaders(),this._renderDepthPrepass(k);const w=A.createTexture({context:i,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT});return U=A.createFramebuffer(i,w),this._copyTexture(f.getColorTexture(0),U),w}finally{this._restoreHeightMapShaders(q),k.framebuffer=V,t.BoundingRectangle.clone(Y,k.viewport),_.camera=P,F.camera=N,N&&F.context.uniformState.updateCamera(N),U&&!((y=U.isDestroyed)!=null&&y.call(U))&&U.destroy(),f&&!((D=f.isDestroyed)!=null&&D.call(f))&&f.destroy()}}_renderDepthPrepass(i){const f=this.viewer.scene.frameState;f.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(F=>F.execute(this.viewer.scene.context,i))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:t.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const i={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:l}),this._createComputePass("B",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:d}),this._createComputePass("C",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:g}),this._createComputePass("D",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:b})]}_createComputePass(i,{uniforms:f,shaderSource:_}){return new E({commandType:"Compute",uniformMap:f,fragmentShaderSource:new t.ShaderSource({sources:[u,_]}),geometry:A.getFullscreenQuad(),outputTexture:this.textures[i],preExecute:F=>F.commandToExecute.outputTexture=this.textures[i]})}_createMainRenderPass(){const i=M([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new E({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new t.ShaderSource({sources:[u,T]}),geometry:this._createBoxGeometry(),modelMatrix:i,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var i,f,_,F;return(F=(_=(f=(i=e(this.viewer.scene))==null?void 0:i.globeDepth)==null?void 0:f.colorFramebufferManager)==null?void 0:_._colorTextures)==null?void 0:F[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(i=>this.viewer.scene.primitives.add(i)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(i){const f=this.viewer.camera.getPickRay(i);return this.viewer.scene.globe.pick(f,this.viewer.scene)}_createOrthographicCamera(){const i=new t.Camera(this.viewer.scene);i.frustum=new t.OrthographicOffCenterFrustum;const[f,_]=this.config.lonLat,F=t.Cartesian3.fromDegrees(f,_,this.config.baseHeight),k=t.Transforms.eastNorthUpToFixedFrame(F),P=i.frustum;P.near=.01,P.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),P.left=-this.config.dimensions.x/2,P.right=this.config.dimensions.x/2,P.bottom=-this.config.dimensions.y/2,P.top=this.config.dimensions.y/2;const N=t.Matrix4.getColumn(k,2,new t.Cartesian3);t.Cartesian3.negate(N,N);const V=t.Matrix4.getColumn(k,1,new t.Cartesian3),Y=t.Matrix4.getColumn(k,0,new t.Cartesian3),U=t.Cartesian3.multiplyByScalar(N,-P.far,new t.Cartesian3);return i.position=t.Cartesian3.add(F,U,new t.Cartesian3),i.direction=N,i.up=V,i.right=Y,i}destroy(){var i,f;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(_=>{_&&this.viewer.scene.primitives.remove(_)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(_=>{var F;_&&!((F=_.isDestroyed)!=null&&F.call(_))&&_.destroy()}),this.textures={},this._heightMap&&!((f=(i=this._heightMap).isDestroyed)!=null&&f.call(i))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(i,f){const _=this.viewer.scene.context,F=a(this.viewer.scene),k=_.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>i},owner:this}),P=F.framebuffer;F.framebuffer=f,k.execute(_,F),F.framebuffer=P}_getDepthRenderCommands(){var _,F;const i=[],f=n(this.viewer.scene);for(let k=0;k<f.length;++k){const P=f[k],N=(_=P==null?void 0:P.commands)==null?void 0:_[2],V=((F=P==null?void 0:P.indices)==null?void 0:F[2])??(N==null?void 0:N.length)??0;N&&V>0&&i.push(...N.slice(0,V))}return i}_processHeightMapShaders(){const i=[],f=t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),_=t.Matrix4.inverse(f,new t.Matrix4),F=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(P=>{var q;if(!((q=P==null?void 0:P.shaderProgram)!=null&&q.fragmentShaderSource)||!P.uniformMap)return;const N=Object.prototype.hasOwnProperty.call(P.uniformMap,"u_inverseEnuMatrix"),V=P.uniformMap.u_inverseEnuMatrix,Y=P.shaderProgram,U=new t.Matrix4;P.uniformMap.u_inverseEnuMatrix=()=>{const y=P.modelMatrix||t.Matrix4.IDENTITY;return t.Matrix4.multiply(_,y,U)},P.heightMap_ShaderProgram||(P.heightMap_ShaderProgram=this._getDerivedShaderProgram(F.context,P.shaderProgram,"Height_Map")),P.shaderProgram=P.heightMap_ShaderProgram,i.push({command:P,hadInverseUniform:N,originalInverseUniform:V,originalShaderProgram:Y})}),i}_restoreHeightMapShaders(i){i.forEach(f=>{const{command:_,hadInverseUniform:F,originalInverseUniform:k,originalShaderProgram:P}=f;_!=null&&_.uniformMap&&(_.shaderProgram=P,F?_.uniformMap.u_inverseEnuMatrix=k:delete _.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(i,f,_){let F=i.shaderCache.getDerivedShaderProgram(f,_);return t.defined(F)||(F=this._createHeightMapShaderProgram(i,f,_)),F}_createHeightMapShaderProgram(i,f,_){const F=this._modifyFragmentShader(f.fragmentShaderSource);return i.shaderCache.createDerivedShaderProgram(f,_,{vertexShaderSource:f.vertexShaderSource,fragmentShaderSource:F,attributeLocations:f._attributeLocations})}_modifyFragmentShader(i){const f=i.sources.map(_=>t.ShaderSource.replaceMain(_,"czm_heightMap_main"));return f.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new t.ShaderSource({sources:f,defines:i.defines})}_createBoxGeometry(){return t.BoxGeometry.createGeometry(t.BoxGeometry.fromDimensions({vertexFormat:t.VertexFormat.POSITION_AND_ST,dimensions:new t.Cartesian3(1,1,1)}))}_getAttributeLocations(){return t.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:t.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new t.ShaderSource({sources:[`
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
            }`]})}};it(v,"DEFAULTS",{width:1024,height:1024,dimensions:new t.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new t.Cartesian4(.995,.25,1e-4,.03),customParams:new t.Cartesian4(10,20,.2,10),waterColor:new t.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let O=v;const M=(S=[0,0,0],i=[0,0,0],f=[1,1,1])=>{const _=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationX(t.Math.toRadians(i[0]))),F=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationY(t.Math.toRadians(i[1]))),k=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationZ(t.Math.toRadians(i[2])));S instanceof t.Cartesian3||(S=t.Cartesian3.fromDegrees(...S));const P=t.Transforms.eastNorthUpToFixedFrame(S);t.Matrix4.multiply(P,_,P),t.Matrix4.multiply(P,F,P),t.Matrix4.multiply(P,k,P);const N=t.Matrix4.fromScale(new t.Cartesian3(...f));return t.Matrix4.multiply(P,N,new t.Matrix4)},L=`
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
    `;function C(){return new t.PostProcessStage({fragmentShader:L})}return{FluidRenderer:O,createSkyEffect:C}}const Ta={key:0,class:"fluid-root"},wa={class:"fluid-panel"},Ma={class:"panel-actions"},La=["disabled"],Fa={key:0,class:"selected-text"},Pa={class:"param-list"},Ca={class:"param-row"},Aa={class:"param-row"},Ea={class:"param-row"},Da={class:"param-row color-row"},dt=1024,Xe=1e4,ht=1200,Ra=100,ka=.01,Ia=60,Qe=64,za=160,Oa={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(t,{expose:e,emit:a}){const n=t,u=a,l=tt(),d=$(10),g=$(20),b=$(3),T=$("#0d4fa3"),E=$(!1),A=$(!1),O=$(null),M=$(null);let L=null,C=null,v=null,S=null,i=null,f=null,_=0;const F=ve(()=>!Number.isFinite(O.value)||!Number.isFinite(M.value)?"":`经度 ${O.value.toFixed(6)} / 纬度 ${M.value.toFixed(6)}`);he([d,g,b,T],Re),he(()=>n.params,c=>{P(c||{})},{deep:!0,immediate:!0}),he([E,A,F],N,{immediate:!0}),kt(()=>{Se(!0)});function k(){var o,r;const c=(o=n.getViewer)==null?void 0:o.call(n),h=((r=n.getCesium)==null?void 0:r.call(n))||window.Cesium;if(!c||!h)return l.warning("Cesium 场景尚未就绪。"),null;if(!L){const s=Sa(h);L=s.FluidRenderer,C=s.createSkyEffect}return{viewer:c,Cesium:h}}function P(c){Number.isFinite(Number(c.threshold))&&(d.value=Number(c.threshold)),Number.isFinite(Number(c.blend))&&(g.value=Number(c.blend)),Number.isFinite(Number(c.lightStrength))&&(b.value=Number(c.lightStrength)),fe(c.waterColor)&&(T.value=c.waterColor)}function N(){u("state-change",{isPicking:E.value,hasFluid:A.value,selectedText:F.value})}function V(){const c=k();if(!c)return;const{viewer:h,Cesium:o}=c;de(),se(h,o),E.value=!0,v=new o.ScreenSpaceEventHandler(h.scene.canvas),v.setInputAction(r=>{Y(h,o,r.position)},o.ScreenSpaceEventType.LEFT_CLICK)}async function Y(c,h,o){var oe,me;const r=De(c,o);if(!r){l.warning("未选中可用地形位置。");return}const s=++_;de();const m=h.Cartographic.fromCartesian(r),x=h.Math.toDegrees(m.longitude),R=h.Math.toDegrees(m.latitude),H=Number(m.height),Z=Number.isFinite(H)?H:0,te=new h.Cartesian3(Xe,Xe,0);bt("正在请求模拟范围高度数据...");try{Oe();const le=Number(d.value)||0,Te=Number(g.value)||0,ye=Number(b.value)||0,ie=await U(c,h,{lon:x,lat:R,centerHeight:Z,dimensions:te}),we=ze(ie,Z),$e=we.baseHeight,Ne=we.depth,Ft=new h.Cartesian3(Xe,Xe,Ne);if(s!==_)return;ie||l.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),S=new L(c,{lonLat:[x,R],width:dt,height:dt,dimensions:Ft,baseHeight:$e,minHeight:we.minHeight,maxHeight:we.maxHeight,heightMapSource:ie,waterColor:_e(h,T.value),customParams:new h.Cartesian4(le,Te,ye,10),fluidParams:new h.Cartesian4(.9+ye/10*.099,Math.min(1,Te/50),le/5e4,.03)}),O.value=x,M.value=R,A.value=!0,(me=(oe=c.scene).requestRender)==null||me.call(oe),l.success("水体流体已创建。")}catch(le){l.error("水体流体创建失败",le),l.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{St()}}async function U(c,h,o){const r=c==null?void 0:c.terrainProvider,s=y(o.dimensions);if(!r)return null;if(h.EllipsoidTerrainProvider&&r instanceof h.EllipsoidTerrainProvider)return ee(s);if(typeof h.sampleTerrain!="function"&&typeof h.sampleTerrainMostDetailed!="function")return null;try{return await q(c,h,o,s)}catch(m){if(s<=Qe)throw m;return q(c,h,o,Qe)}}async function q(c,h,o,r){const s=w(h,o,r),m=await Q(h,c.terrainProvider,s);return I(m||s,{size:r})}function y(c){const h=Math.max(Number(c==null?void 0:c.x)||0,Number(c==null?void 0:c.y)||0),o=Math.ceil(h/Ia)+1;return D(o,Qe,za)}function D(c,h,o){return Math.max(h,Math.min(o,Math.round(c)))}function w(c,{lon:h,lat:o,centerHeight:r,dimensions:s},m){const x=c.Cartesian3.fromDegrees(h,o,r),R=c.Transforms.eastNorthUpToFixedFrame(x),H=[],Z=Math.max(1,m-1);for(let te=0;te<m;te++){const me=(.5-te/Z)*s.y;for(let le=0;le<m;le++){const ye=(le/Z-.5)*s.x,ie=new c.Cartesian3(ye,me,0),we=c.Matrix4.multiplyByPoint(R,ie,new c.Cartesian3);H.push(c.Cartographic.fromCartesian(we))}}return H}async function Q(c,h,o){const r=ue(h);return Number.isInteger(r)&&typeof c.sampleTerrain=="function"?c.sampleTerrain(h,r,o):typeof c.sampleTerrainMostDetailed=="function"?c.sampleTerrainMostDetailed(h,o):c.sampleTerrain(h,10,o)}function ue(c){const h=Number(c==null?void 0:c._bottomLevel);return Number.isFinite(h)?Math.max(0,h-1):null}function I(c,{size:h}){var s;const o=Ae(c);if(!o)return null;const r=new Float32Array(h*h*4);for(let m=0;m<h*h;m++){const x=Number((s=c[m])==null?void 0:s.height),R=m*4;r[R]=Number.isFinite(x)?Ee(x,o.minHeight,o.maxHeight):o.minHeight,r[R+1]=0,r[R+2]=0,r[R+3]=1}return{width:h,height:h,arrayBufferView:r,minHeight:o.minHeight,maxHeight:o.maxHeight}}function ee(c){return{width:c,height:c,arrayBufferView:new Float32Array(c*c*4),minHeight:0,maxHeight:0}}function Ae(c){let h=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(const r of c||[]){const s=Number(r==null?void 0:r.height);Number.isFinite(s)&&(h=Math.min(h,s),o=Math.max(o,s))}return!Number.isFinite(h)||!Number.isFinite(o)?null:{minHeight:h,maxHeight:o}}function ze(c,h){const o=Number(c==null?void 0:c.minHeight),r=Number(c==null?void 0:c.maxHeight);if(Number.isFinite(o)&&Number.isFinite(r)){const s=Math.min(o,r),m=Math.abs(r-o),x=Math.max(m,ka);return{baseHeight:s,depth:x,minHeight:s,maxHeight:s+x}}return{baseHeight:h-Ra,depth:ht,minHeight:0,maxHeight:ht}}function _e(c,h){const o=ge(h)||ge("#0d4fa3");return new c.Cartesian3(o.red,o.green,o.blue)}function be(){var o;const c=ge(T.value),h=(o=S==null?void 0:S.config)==null?void 0:o.waterColor;!c||!h||(h.x=c.red,h.y=c.green,h.z=c.blue)}function fe(c){return typeof c=="string"&&/^#[0-9a-f]{6}$/i.test(c)}function ge(c){return fe(c)?{red:Number.parseInt(c.slice(1,3),16)/255,green:Number.parseInt(c.slice(3,5),16)/255,blue:Number.parseInt(c.slice(5,7),16)/255}:null}function Ee(c,h,o){return Math.max(h,Math.min(o,c))}function De(c,h){if(!h)return null;if(c.scene.pickPositionSupported&&typeof c.scene.pickPosition=="function"){const r=c.scene.pickPosition(h);if(r)return r}const o=c.camera.getPickRay(h);return o?c.scene.globe.pick(o,c.scene):null}function Re(){var r,s,m;if(!(S!=null&&S.config))return;const c=Number(d.value)||0,h=Number(g.value)||0,o=Number(b.value)||0;S.config.customParams&&(S.config.customParams.x=c,S.config.customParams.y=h,S.config.customParams.z=o),S.config.fluidParams&&(S.config.fluidParams.x=.9+o/10*.099,S.config.fluidParams.y=Math.min(1,h/50),S.config.fluidParams.z=c/5e4),be(),(m=(s=(r=S.viewer)==null?void 0:r.scene)==null?void 0:s.requestRender)==null||m.call(s)}function se(c,h){var o,r;if(!f){const s=c.scene;f={shadows:c.shadows,resolutionScale:c.resolutionScale,msaaSamples:s.msaaSamples,depthTestAgainstTerrain:s.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:s.logarithmicDepthBuffer,highDynamicRange:s.highDynamicRange,fogEnabled:(o=s.fog)==null?void 0:o.enabled,showGroundAtmosphere:s.globe.showGroundAtmosphere,skyAtmosphereShow:(r=s.skyAtmosphere)==null?void 0:r.show,enableLighting:s.globe.enableLighting}}c.shadows=!0,c.resolutionScale=1,c.scene.msaaSamples=4,c.scene.globe.depthTestAgainstTerrain=!0,c.scene.logarithmicDepthBuffer=!0,c.scene.highDynamicRange=!0,c.scene.fog&&(c.scene.fog.enabled=!0),c.scene.globe.showGroundAtmosphere=!0,c.scene.skyAtmosphere&&(c.scene.skyAtmosphere.show=!0),c.scene.globe.enableLighting=!0,!i&&C&&(i=C(h),c.scene.postProcessStages.add(i))}function j(c){if(!c||!f)return;const h=c.scene;c.shadows=f.shadows,c.resolutionScale=f.resolutionScale,f.msaaSamples!==void 0&&(h.msaaSamples=f.msaaSamples),h.globe.depthTestAgainstTerrain=f.depthTestAgainstTerrain,h.logarithmicDepthBuffer=f.logarithmicDepthBuffer,h.highDynamicRange=f.highDynamicRange,h.fog&&f.fogEnabled!==void 0&&(h.fog.enabled=f.fogEnabled),h.globe.showGroundAtmosphere=f.showGroundAtmosphere,h.skyAtmosphere&&f.skyAtmosphereShow!==void 0&&(h.skyAtmosphere.show=f.skyAtmosphereShow),h.globe.enableLighting=f.enableLighting,f=null}function re(){Se(!1),l.success("水体流体已清除。")}function de(){v&&(v.destroy(),v=null),E.value=!1}function Oe(){if(S){try{S.destroy()}catch{}S=null,A.value=!1}}function Se(c){var o,r,s;const h=(o=n.getViewer)==null?void 0:o.call(n);if(_+=1,de(),Oe(),O.value=null,M.value=null,h&&i){try{h.scene.postProcessStages.remove(i)}catch{}i=null}c&&h&&j(h),(s=(r=h==null?void 0:h.scene)==null?void 0:r.requestRender)==null||s.call(r)}function Be(){Se(!0),u("close")}return e({startPickHeightMap:V,clearFluid:re}),(c,h)=>t.headless?J("",!0):(z(),B("div",Ta,[p("div",wa,[p("div",{class:"panel-head"},[h[7]||(h[7]=p("span",{class:"panel-title"},"水体流体",-1)),p("button",{class:"panel-close",title:"关闭",onClick:Be}," × ")]),p("div",Ma,[p("button",{class:ce(["action-btn primary",{active:E.value}]),onClick:V},K(E.value?"等待选点":"捕捉高度图"),3),p("button",{class:"action-btn",disabled:!A.value&&!E.value,onClick:re}," 清除 ",8,La)]),F.value?(z(),B("div",Fa,K(F.value),1)):J("",!0),p("div",Pa,[p("label",Ca,[h[8]||(h[8]=p("span",null,"阈值",-1)),ne(p("input",{"onUpdate:modelValue":h[0]||(h[0]=o=>d.value=o),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[ke,d.value,void 0,{number:!0}]]),ne(p("input",{"onUpdate:modelValue":h[1]||(h[1]=o=>d.value=o),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[ke,d.value,void 0,{number:!0}]])]),p("label",Aa,[h[9]||(h[9]=p("span",null,"混合",-1)),ne(p("input",{"onUpdate:modelValue":h[2]||(h[2]=o=>g.value=o),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[ke,g.value,void 0,{number:!0}]]),ne(p("input",{"onUpdate:modelValue":h[3]||(h[3]=o=>g.value=o),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[ke,g.value,void 0,{number:!0}]])]),p("label",Ea,[h[10]||(h[10]=p("span",null,"光强",-1)),ne(p("input",{"onUpdate:modelValue":h[4]||(h[4]=o=>b.value=o),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[ke,b.value,void 0,{number:!0}]]),ne(p("input",{"onUpdate:modelValue":h[5]||(h[5]=o=>b.value=o),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[ke,b.value,void 0,{number:!0}]])]),p("label",Da,[h[11]||(h[11]=p("span",null,"水色",-1)),ne(p("input",{"onUpdate:modelValue":h[6]||(h[6]=o=>T.value=o),class:"color-input",type:"color"},null,512),[[ke,T.value]]),p("span",{class:"color-swatch",style:Mt({backgroundColor:T.value})},null,4)])])])]))}},Na=je(Oa,[["__scopeId","data-v-1dba8e33"]]),rt="https://cdn.jsdelivr.net/npm/cesium@1.110/Build/Cesium/",Ba=`${rt}Cesium.js`,Ha=`${rt}Widgets/widgets.css`;async function Ua({ionToken:t}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=rt),await Ga(Ha,"cesium-widgets-style"),await Wa(Ba,"cesium-runtime-script");const e=window.Cesium;if(!e)throw new Error("Cesium global 未找到");return Lt(e,t),e}function Lt(t,e){e&&(t!=null&&t.Ion)&&(t.Ion.defaultAccessToken=e)}function Wa(t,e){return new Promise((a,n)=>{const u=document.getElementById(e);if(u){if(u.getAttribute("data-loaded")==="true"){a();return}u.addEventListener("load",()=>a(),{once:!0}),u.addEventListener("error",()=>n(new Error(`脚本加载失败: ${t}`)),{once:!0});return}const l=document.createElement("script");l.id=e,l.src=t,l.async=!0,l.onload=()=>{l.setAttribute("data-loaded","true"),a()},l.onerror=()=>n(new Error(`脚本加载失败: ${t}`)),document.head.appendChild(l)})}function Ga(t,e){return new Promise((a,n)=>{if(document.getElementById(e)){a();return}const l=document.createElement("link");l.id=e,l.rel="stylesheet",l.href=t,l.onload=()=>a(),l.onerror=()=>n(new Error(`样式加载失败: ${t}`)),document.head.appendChild(l)})}const $a="Asia/Shanghai",Va="UTC+8",qa=new Intl.DateTimeFormat("zh-CN",{timeZone:$a,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Xa(t,e){var a,n,u,l,d,g,b;if(!(!t||!(e!=null&&e.JulianDate))){if((a=t.animation)!=null&&a.viewModel&&(t.animation.viewModel.dateFormatter=(...T)=>ja(t,e,...T),t.animation.viewModel.timeFormatter=(...T)=>Za(t,e,...T)),t.timeline){const T=(...E)=>Ka(t,e,...E);t.timeline.makeLabel=T,"_makeLabel"in t.timeline&&(t.timeline._makeLabel=T),(u=(n=t.timeline).updateFromClock)==null||u.call(n),(d=(l=t.timeline).zoomTo)==null||d.call(l,t.clock.startTime,t.clock.stopTime)}(b=(g=t.scene).requestRender)==null||b.call(g)}}function at(t,e,...a){var g;const n=a.find(Ya)||((g=t==null?void 0:t.clock)==null?void 0:g.currentTime);if(!n)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const u=e.JulianDate.toDate(n),l=qa.formatToParts(u),d=Object.fromEntries(l.filter(({type:b})=>b!=="literal").map(({type:b,value:T})=>[b,T]));return{year:d.year||"0000",month:d.month||"01",day:d.day||"01",hour:d.hour||"00",minute:d.minute||"00",second:d.second||"00"}}function Ya(t){return t&&typeof t.dayNumber=="number"&&typeof t.secondsOfDay=="number"}function ja(t,e,...a){const{year:n,month:u,day:l}=at(t,e,...a);return`${n}-${u}-${l}`}function Za(t,e,...a){const{hour:n,minute:u,second:l}=at(t,e,...a);return`${n}:${u}:${l} ${Va}`}function Ka(t,e,...a){const{month:n,day:u,hour:l,minute:d}=at(t,e,...a);return`${n}-${u} ${l}:${d}`}function Ja({getViewer:t}){let e=null,a=null;function n(){var g;const d=t==null?void 0:t();if(d&&((g=d._cesiumWidget)!=null&&g._creditContainer&&(d._cesiumWidget._creditContainer.style.display="none"),u(),e=setInterval(()=>{const b=document.querySelector(".cesium-credit-container");b&&b.innerHTML.length>0&&(b.innerHTML="",b.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const b=document.createElement("style");b.id="cesium-credit-override",b.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(b),a=b}}function u(){var b;const d=t==null?void 0:t();if(!d)return;(b=d._cesiumWidget)!=null&&b._creditContainer&&(d._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",d._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(T=>{T.style.cssText="display: none !important; visibility: hidden !important;",T.innerHTML=""}),d.scene&&d.scene.frameState&&d.scene.frameState.creditDisplay&&(d.scene.frameState.creditDisplay.hasCredits=()=>!1,d.scene.frameState.creditDisplay.destroy=()=>{})}function l(){e&&(clearInterval(e),e=null),a&&(a.remove(),a=null)}return{installCreditHider:n,cleanupCreditHider:l}}function Qa({getViewer:t,getCesium:e}){let a=null;const n=$("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function u(){const d=t==null?void 0:t(),g=e==null?void 0:e();!d||!g||(l(),a=new g.ScreenSpaceEventHandler(d.scene.canvas),a.setInputAction(b=>{const T=d.camera.getPickRay(b.endPosition);if(!T)return;const E=d.scene.globe.pick(T,d.scene);if(!E)return;const A=g.Cartographic.fromCartesian(E),O=g.Math.toDegrees(A.longitude).toFixed(6),M=g.Math.toDegrees(A.latitude).toFixed(6),L=A.height.toFixed(2);n.value=`经度: ${O}, 纬度: ${M}, 海拔: ${L}米`},g.ScreenSpaceEventType.MOUSE_MOVE),a.setInputAction(b=>{const T=b.endPosition,E=b.startPosition;if(!g.defined(d.terrainProvider))return;const A=d.scene.globe.ellipsoid;if(!d.camera.pickEllipsoid(E,A)){const M=d.camera;M.rotate(g.Cartesian3.UNIT_X,-.002*(T.y-E.y)),M.rotate(g.Cartesian3.UNIT_Y,-.002*(T.x-E.x))}},g.ScreenSpaceEventType.RIGHT_DRAG),a.setInputAction(()=>{},g.ScreenSpaceEventType.RIGHT_DOWN),a.setInputAction(()=>{},g.ScreenSpaceEventType.RIGHT_UP))}function l(){a&&(a.destroy(),a=null)}return{coordinateDisplay:n,setupInteractions:u,cleanupInteractions:l}}function ei(t,e=""){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(t);return a??e}catch{return e}}function ti(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(e||""))}catch{}}function Ye(t,e){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(t);return a==null?e:a==="true"}catch{return e}}function et(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(!!e))}catch{}}function ft(t){if(!t)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:e,DeveloperError:a,Ellipsoid:n,Resource:u,HeightmapTerrainData:l,Rectangle:d,TileAvailability:g,CustomHeightmapTerrainProvider:b}=t;function T(M,L,C,v,S,i){const f=M.tileXYToRectangle(C,v,S);return e(d.intersection(f,L,i))}function E(M){const L=[[[0,0,1,0]]],C=new g(M.tilingScheme,19);for(let v=0;v<L.length;v++){const S=L[v];for(let i=0;i<S.length;i++){const f=S[i];C.addAvailableTileRange(v,f[0],f[1],f[2],f[3])}}return C}function A(M,L,C,v,S){const i=new l({buffer:M._transformBuffer(L),width:M._width,height:M._height,childTileMask:M._getChildTileMask(v,S,C),structure:M._terrainDataStructure});return i._skirtHeight=6e3,M.availability.addAvailableTileRange(C,v,S,v,S),i}class O extends b{constructor(L={}){if(super({...L,ellipsoid:n.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!e(L.url))throw new a("options.url is required.");this._dataType=L.dataType??"int16",this._url=L.url,this._subdomains=L.subdomains,this._token=L.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=E(this)}get availability(){return this._availability}requestTileGeometry(L,C,v,S){if(v>=this._bottomLevel)return Promise.reject(new Error(`Level ${v} is outside supported range.`));if(v<this._topLevel)return Promise.resolve(new l({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(L,C,v),structure:this._terrainDataStructure}));let i=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const _=this._subdomains[(L+C)%this._subdomains.length];i=i.replace("{s}",_)}i=i.replace("{token}",this._token).replace("{x}",L).replace("{y}",C).replace("{z}",v+1);const f=u.fetchArrayBuffer({url:i,request:S});if(f)return f.then(_=>_.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Xt.inflate(_)).then(_=>A(this,_,v,L,C))}getTileDataAvailable(L,C,v){return v<this._bottomLevel}_transformBuffer(L){let C=2;this._dataType==="float"&&(C=4);const v=L;if(v.length!==22500*C)return null;const S=new ArrayBuffer(C),i=new DataView(S),f=this._width,_=this._height,F=new Uint8Array(f*_*4);for(let k=0;k<_;k++)for(let P=0;P<f;P++){const N=Math.floor(149*k/(_-1)),V=Math.floor(149*P/(f-1)),Y=C*(150*N+V);let U;C===4?(i.setInt8(0,v[Y]),i.setInt8(1,v[Y+1]),i.setInt8(2,v[Y+2]),i.setInt8(3,v[Y+3]),U=i.getFloat32(0,!0)):U=v[Y]+256*v[Y+1],(U>1e4||U<-2e3)&&(U=0);const q=(U+1e3)/.001,y=4*(k*f+P);F[y]=q/65536,F[y+1]=(q-256*F[y]*256)/256,F[y+2]=q-256*F[y]*256-256*F[y+1],F[y+3]=255}return F}_getVHeightBuffer(){let L=this._vHeightBuffer;if(!e(L)){L=new Uint8ClampedArray(this._width*this._height*4);for(let C=0;C<this._width*this._height*4;)L[C++]=15,L[C++]=66,L[C++]=64,L[C++]=255;this._vHeightBuffer=L}return L}_getChildTileMask(L,C,v){const S=new d,i=this._tilingScheme,f=this._rectangles,_=i.tileXYToRectangle(L,C,v);let F=0;for(let k=0;k<f.length&&F!==15;k++){const P=f[k];if(P.maxLevel<=v)continue;const N=P.rectangle,V=d.intersection(N,_,S);e(V)&&(T(i,N,2*L,2*C,v+1,S)&&(F|=4),T(i,N,2*L+1,2*C,v+1,S)&&(F|=8),T(i,N,2*L,2*C+1,v+1,S)&&(F|=1),T(i,N,2*L+1,2*C+1,v+1,S)&&(F|=2))}return F}}return O}const Ue=["0","1","2","3","4","5","6","7"],We="https://t{s}.tianditu.gov.cn/",Pe="custom-xyz",mt="cesium_custom_xyz_basemap_url",ri="cesium_tdt_label_layer_visible",pt="cesium_tdt_boundary_layer_visible",gt="cesium_tdt_text_label_layer_visible",yt=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:Pe,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],vt=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function ai({getViewer:t,getCesium:e,message:a,backendBaseUrl:n,tiandituToken:u,cesiumIonToken:l}){let d=null,g=null,b=0,T=[];const E=[],A=$([]),O=new Map,M=new Map,L=new Map,C=new Map,v=$("tianditu"),S=$("tianditu"),i=$(ei(mt,"")),f=Ye(ri,!0),_=$(Ye(pt,f)),F=$(Ye(gt,f)),k=ve(()=>[...yt.map(r=>r.value!==Pe?r:{...r,description:i.value?i.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!i.value}),...A.value]),P=ve(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:_.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:F.value}]);he(v,r=>{!(t!=null&&t())||!(e!=null&&e())||se(r)}),he(i,r=>{ti(mt,r)}),he(S,async r=>{!(t!=null&&t())||!(e!=null&&e())||await re(r)}),he(_,r=>{et(pt,r),fe()}),he(F,r=>{et(gt,r),fe()});function N(){const r=e==null?void 0:e();if(!r)return[];O.clear(),M.clear();const s=yt.map(x=>{const R=new r.ProviderViewModel({name:x.label,tooltip:ii(x),category:"项目底图",iconUrl:_t(x.value==="google"?"#5ea1ff":x.value===Pe?"#f59e0b":"#37d67a",x.value==="google"?"G":x.value===Pe?"XY":"TD"),creationFunction:()=>y(x.value)});return O.set(x.value,R),M.set(R,x.value),R}),m=q();return A.value=m.map((x,R)=>{const H=String((x==null?void 0:x.name)||`官方底图 ${R+1}`).trim(),Z=si(H,R);return O.set(Z,x),M.set(x,Z),{value:Z,label:`官方 · ${H}`,description:String((x==null?void 0:x.tooltip)||H),source:"official"}}),[...s,...m]}function V(){const r=e==null?void 0:e();return r?(L.clear(),C.clear(),vt.map(s=>{const m=new r.ProviderViewModel({name:s.label,tooltip:s.description||s.label,category:"项目地形",iconUrl:_t(s.value==="ellipsoid"?"#a3a3a3":"#d0a449",s.value==="cesiumWorld"?"CW":s.value==="ellipsoid"?"EL":"TE"),creationFunction:()=>Oe(s.value)});return L.set(s.value,m),C.set(m,s.value),m})):[]}function Y(r=[]){return O.get(v.value)||r[0]}function U(r=[]){return L.get(S.value)||r[0]}function q(){const r=e==null?void 0:e();if(typeof(r==null?void 0:r.createDefaultImageryProviderViewModels)!="function")return[];try{return r.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function y(r){return r==="google"?w():r===Pe?Q():D()}function D(){const r=e==null?void 0:e();return[new r.UrlTemplateImageryProvider({url:`${We}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:Ue,tilingScheme:new r.WebMercatorTilingScheme,maximumLevel:18})]}function w(){const r=e==null?void 0:e();return[new r.UrlTemplateImageryProvider({url:`${n}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new r.WebMercatorTilingScheme,maximumLevel:20})]}function Q(){const r=e==null?void 0:e(),s=xt(i.value);return s.valid?[new r.UrlTemplateImageryProvider({url:s.url,subdomains:s.subdomains,tilingScheme:new r.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(a.warning(s.message,{closable:!0}),D())}function ue(){const r=e==null?void 0:e();return new r.UrlTemplateImageryProvider({url:`${We}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:Ue,tilingScheme:new r.WebMercatorTilingScheme,maximumLevel:10})}function I(){const r=e==null?void 0:e();return new r.UrlTemplateImageryProvider({url:`${We}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:Ue,tilingScheme:new r.WebMercatorTilingScheme,maximumLevel:18})}function ee(){var te,oe,me,le,Te;Ae();const r=e==null?void 0:e(),s=(oe=(te=t==null?void 0:t())==null?void 0:te.baseLayerPicker)==null?void 0:oe.viewModel;if(!s||!((me=r==null?void 0:r.knockout)!=null&&me.getObservable))return;const m=r.knockout.getObservable(s,"selectedImagery"),x=r.knockout.getObservable(s,"selectedTerrain"),R=[],H=(le=m==null?void 0:m.subscribe)==null?void 0:le.call(m,ye=>{const ie=M.get(ye);ie&&(v.value!==ie&&(v.value=ie),be())}),Z=(Te=x==null?void 0:x.subscribe)==null?void 0:Te.call(x,ye=>{const ie=C.get(ye);ie&&(S.value!==ie&&(S.value=ie),de(ie))});H&&R.push(H),Z&&R.push(Z),T=R}function Ae(){T.forEach(r=>{var s;return(s=r==null?void 0:r.dispose)==null?void 0:s.call(r)}),T=[]}function ze(){return be(),!0}function _e(){const r=t==null?void 0:t();if(r!=null&&r.imageryLayers)for(;E.length;){const s=E.pop();try{r.imageryLayers.remove(s,!0)}catch{}}}function be(){var r,s,m;fe(),(m=(s=(r=t==null?void 0:t())==null?void 0:r.scene)==null?void 0:s.requestRender)==null||m.call(s)}function fe(){var s,m;const r=t==null?void 0:t();!r||!(e!=null&&e())||(_.value?ge():De(),F.value?Ee():Re(),(m=(s=r.scene).requestRender)==null||m.call(s))}function ge(){var s,m,x,R;const r=t==null?void 0:t();if(!(r!=null&&r.imageryLayers)||d)return d&&((m=(s=r==null?void 0:r.imageryLayers)==null?void 0:s.raiseToTop)==null||m.call(s,d)),d;try{return d=r.imageryLayers.addImageryProvider(ue()),(R=(x=r.imageryLayers).raiseToTop)==null||R.call(x,d),d}catch(H){return a.error("天地图国界线图层加载失败",H),null}}function Ee(){var s,m,x,R;const r=t==null?void 0:t();if(!(r!=null&&r.imageryLayers)||g)return g&&((m=(s=r==null?void 0:r.imageryLayers)==null?void 0:s.raiseToTop)==null||m.call(s,g)),g;try{return g=r.imageryLayers.addImageryProvider(I()),(R=(x=r.imageryLayers).raiseToTop)==null||R.call(x,g),g}catch(H){return a.error("天地图文字标注图层加载失败",H),null}}function De(){const r=t==null?void 0:t();if(!(!d||!(r!=null&&r.imageryLayers))){try{r.imageryLayers.remove(d,!0)}catch{}d=null}}function Re(){const r=t==null?void 0:t();if(!(!g||!(r!=null&&r.imageryLayers))){try{r.imageryLayers.remove(g,!0)}catch{}g=null}}function se(r,s={}){var H,Z,te;const m=t==null?void 0:t();if(!m||!(e!=null&&e()))return!1;const x=(H=m.baseLayerPicker)==null?void 0:H.viewModel,R=O.get(r);if(x&&R){if(_e(),s.forceReload&&x.selectedImagery===R){const oe=O.get("tianditu");oe&&oe!==R&&(x.selectedImagery=oe)}return x.selectedImagery!==R&&(x.selectedImagery=R),be(),!0}try{return _e(),y(r).forEach(me=>{E.push(m.imageryLayers.addImageryProvider(me))}),fe(),(te=(Z=m.scene).requestRender)==null||te.call(Z),!0}catch(oe){return a.error("地图源切换失败",oe),!1}}function j(){return re(S.value)}async function re(r){var te,oe,me,le,Te,ye,ie,we,$e;const s=t==null?void 0:t(),m=e==null?void 0:e();if(!s||!m)return!1;const x=(te=s.baseLayerPicker)==null?void 0:te.viewModel,R=L.get(r);if(x&&R)return x.selectedTerrain!==R&&(x.selectedTerrain=R),de(r),(me=(oe=s.scene).requestRender)==null||me.call(oe),!0;const H=++b;if(r==="ellipsoid")return s.terrainProvider=new m.EllipsoidTerrainProvider,de(r),(Te=(le=s.scene).requestRender)==null||Te.call(le),!0;if(r==="cesiumWorld")try{const Ne=await Se();return H!==b?!1:(s.terrainProvider=Ne,de(r),(ie=(ye=s.scene).requestRender)==null||ie.call(ye),!0)}catch(Ne){return H!==b||(s.terrainProvider=new m.EllipsoidTerrainProvider,de("ellipsoid"),a.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("Cesium 世界地形初始化失败",Ne)),!1}const Z=ft(m);try{return s.terrainProvider=new Z({url:`${We}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Ue,token:u}),de(r),($e=(we=s.scene).requestRender)==null||$e.call(we),!0}catch(Ne){return s.terrainProvider=new m.EllipsoidTerrainProvider,de("ellipsoid"),a.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),a.error("官方地形初始化失败",Ne),!1}}function de(r){var m;const s=t==null?void 0:t();(m=s==null?void 0:s.scene)!=null&&m.globe&&(s.scene.globe.depthTestAgainstTerrain=r!=="ellipsoid")}function Oe(r){const s=e==null?void 0:e();if(r==="ellipsoid")return new s.EllipsoidTerrainProvider;if(r==="cesiumWorld")return Se().catch(x=>(a.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("Cesium 世界地形初始化失败",x),Be(r,"ellipsoid"),new s.EllipsoidTerrainProvider));const m=ft(s);try{return new m({url:`${We}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Ue,token:u})}catch(x){return a.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),a.error("官方地形初始化失败",x),new s.EllipsoidTerrainProvider}}async function Se(){var m,x;const r=e==null?void 0:e();Lt(r,l);const s={requestWaterMask:!1,requestVertexNormals:!0};if(typeof r.createWorldTerrainAsync=="function")return r.createWorldTerrainAsync(s);if(typeof r.createWorldTerrain=="function")return r.createWorldTerrain(s);if(typeof((m=r.CesiumTerrainProvider)==null?void 0:m.fromIonAssetId)=="function")return r.CesiumTerrainProvider.fromIonAssetId(1,s);if((x=r.IonResource)!=null&&x.fromAssetId&&r.CesiumTerrainProvider){const R=await r.IonResource.fromAssetId(1);return new r.CesiumTerrainProvider({url:R,...s})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}function Be(r,s){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{S.value===r&&(S.value=s)},0)}function c({overlayId:r,value:s}){if(r==="tdt-boundaries"){_.value=!!s;return}r==="tdt-text-labels"&&(F.value=!!s)}function h({url:r}){const s=String(r||"").trim(),m=xt(s);if(!m.valid){a.warning(m.message,{closable:!0});return}if(i.value=s,v.value===Pe){se(Pe,{forceReload:!0})&&a.success("已加载自定义 XYZ 图源");return}v.value=Pe,a.success("已切换到自定义 XYZ 图源")}function o(){_e(),De(),Re(),Ae()}return{activeBasemap:v,activeTerrain:S,customXyzBasemapUrl:i,basemapOptions:k,terrainOptions:vt,overlayOptions:P,createImageryProviderViewModels:N,createTerrainProviderViewModels:V,getSelectedImageryProviderViewModel:Y,getSelectedTerrainProviderViewModel:U,bindLayerPickerStateSync:ee,addBaseImageryLayers:ze,initCustomTerrain:j,applyBasemap:se,applyTerrain:re,handleOverlayToggle:c,handleCustomBasemapSubmit:h,cleanupLayers:o}}function ii(t){return t.value!==Pe?t.description||t.label:`${t.description||t.label}
支持 https://server/{z}/{x}/{y}.png`}function xt(t){const e=String(t||"").trim();if(!e)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let a=e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const n=a.match(/\{([a-z0-9])-([a-z0-9])\}/i);let u=[];return n?(u=ni(n[1],n[2]),a=a.replace(n[0],"{s}")):/\{s\}/i.test(a)&&(u=["a","b","c"]),!/\{z\}/.test(a)||!/\{x\}/.test(a)||!/\{y\}/.test(a)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:a,subdomains:u}:oi(a)?{valid:!0,message:"",url:a,subdomains:u}:{valid:!1,message:"URL 格式不合法",url:a,subdomains:u}}function ni(t,e){const a=String(t||"").charCodeAt(0),n=String(e||"").charCodeAt(0);if(!Number.isFinite(a)||!Number.isFinite(n))return[];const u=a<=n?1:-1,l=[];for(let d=a;u>0?d<=n:d>=n;d+=u)l.push(String.fromCharCode(d));return l}function oi(t){if(/^(https?:)?\/\//i.test(t)||t.startsWith("/"))return!0;try{const e=typeof window<"u"?window.location.origin:"http://localhost",a=new URL(t,e);return a.protocol==="http:"||a.protocol==="https:"}catch{return!1}}function si(t,e){const a=t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${e}_${a||"basemap"}`}function _t(t,e){const a=String(e||"").replace(/[<>&"']/g,"").slice(0,2),n=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${t}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${a}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(n)}`}function li({getViewer:t,getCesium:e,message:a}){function n(d){const g=t==null?void 0:t(),b=e==null?void 0:e();if(!g||!b)return;const T=typeof d=="number"?d:2;g.camera.flyTo({destination:b.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-b.Math.PI_OVER_TWO,roll:0},duration:T})}function u(){const d=t==null?void 0:t(),g=e==null?void 0:e();!d||!g||d.camera.flyTo({destination:g.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:g.Math.toRadians(0),pitch:g.Math.toRadians(-25),roll:0},duration:3})}async function l(){const d=t==null?void 0:t(),g=e==null?void 0:e();if(!(!d||!g))try{const b=await g.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");d.scene.primitives.add(b),d.flyTo(b,{duration:3,offset:new g.HeadingPitchRange(g.Math.toRadians(0),g.Math.toRadians(-25),b.boundingSphere.radius*2.5)})}catch(b){a.error(`加载模型失败: ${b}`),a.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:n,flyToEverest:u,loadCustomTileset:l}}const ci="cesium_tool_panel_open";function ui({fluidPanelRef:t,sceneActions:e={},wind:a={},panelStorageKey:n=ci}={}){const u=$(Ye(n,!0)),l=$({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),d=$({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3"}),g=$({isPicking:!1,hasFluid:!1,selectedText:""}),b=ve(()=>{var M,L,C,v,S,i;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:l.value.atmosphere||l.value.fog?"启用":"关闭",statusTone:l.value.atmosphere||l.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:l.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:l.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:l.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:l.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(M=a.wind2D)!=null&&M.value?"已加载":"未加载",statusTone:(L=a.wind2D)!=null&&L.value?"success":"neutral",actions:[{id:"load",label:(C=a.wind2D)!=null&&C.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((v=a.wind2D)!=null&&v.value)}],controls:di((S=a.windParams)==null?void 0:S.value,!!((i=a.wind2D)!=null&&i.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:g.value.isPicking?"等待选点":g.value.hasFluid?"已创建":"未创建",statusTone:g.value.isPicking?"warning":g.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:g.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:g.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!g.value.hasFluid&&!g.value.isPicking}],controls:hi(d.value)}]});he(u,M=>{et(n,M)});function T({moduleId:M,actionId:L}){var v,S;(S=(v={scene:{home:()=>{var i;return(i=e.flyToHome)==null?void 0:i.call(e)},everest:e.flyToEverest,tileset:e.loadCustomTileset},wind:{load:a.loadSimulatedWind,clear:a.clearWind2D},fluid:{pick:()=>{var i,f;return(f=(i=t==null?void 0:t.value)==null?void 0:i.startPickHeightMap)==null?void 0:f.call(i)},clear:()=>{var i,f;return(f=(i=t==null?void 0:t.value)==null?void 0:i.clearFluid)==null?void 0:f.call(i)}}}[M])==null?void 0:v[L])==null||S.call(v)}function E({moduleId:M,controlId:L,value:C}){var v,S;if(M==="effects"&&L in l.value){l.value={...l.value,[L]:!!C};return}if(M==="wind"&&L in(((v=a.windParams)==null?void 0:v.value)||{})){(S=a.setWindParam)==null||S.call(a,L,C);return}M==="fluid"&&L in d.value&&(d.value={...d.value,[L]:L==="waterColor"?C:Number(C)})}function A(M){g.value={isPicking:!!(M!=null&&M.isPicking),hasFluid:!!(M!=null&&M.hasFluid),selectedText:(M==null?void 0:M.selectedText)||""}}function O(){var M;(M=a.clearWind2D)==null||M.call(a)}return{toolPanelOpen:u,advancedEffectControls:l,fluidParams:d,fluidState:g,toolModules:b,handleToolAction:T,handleToolControlChange:E,handleFluidStateChange:A,cleanupTools:O}}function di(t={},e){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:t.speedFactor??1,displayValue:Number(t.speedFactor??1).toFixed(1),disabled:e},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:t.arrowLength??15e3,displayValue:`${Math.round((t.arrowLength??15e3)/1e3)} km`,disabled:e},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:t.trailLength??2e4,displayValue:`${Math.round((t.trailLength??2e4)/1e3)} km`,disabled:e},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:t.alphaFactor??1,displayValue:Number(t.alphaFactor??1).toFixed(2),disabled:e}]}function hi(t){return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:t.threshold,displayValue:Number(t.threshold).toFixed(2)},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:t.blend,displayValue:Number(t.blend).toFixed(2)},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:t.lightStrength,displayValue:Number(t.lightStrength).toFixed(2)},{id:"waterColor",label:"水色",type:"color",value:t.waterColor,displayValue:t.waterColor}]}const ae={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},fi=new Float32Array([-1,-1,1,-1,1,1,-1,1]),mi=new Float32Array([0,0,1,0,1,1,0,1]),pi=new Uint16Array([0,1,2,0,2,3]);function Ie(t,e,a){return Math.max(e,Math.min(a,t))}function W(t,e){const a=Number(t);return Number.isFinite(a)?a:e}function gi(t,e){const a=e.getParameter(e.MAX_TEXTURE_SIZE),n=Math.min(2048,a),u=Math.max(1,Math.floor(t)),l=Math.sqrt(u),d=Math.log2(l),g=Number.isFinite(d)?Math.round(d):4;let b=Math.pow(2,g);return b=Ie(b,16,n),b}function yi(t){const e=t*t,a=new Float32Array(e*4);for(let n=0;n<e;n+=1){const u=n*4;a[u]=Math.random(),a[u+1]=Math.random(),a[u+2]=Math.random(),a[u+3]=Math.random()}return a}function vi(t){return new Float32Array(t*t*4)}function xi(t,e,a,n,u){const l=e.createTexture();if(!l)throw new Error("Failed to create wind atlas texture.");e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,a,n,0,e.RGBA,e.FLOAT,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null);let d=!1;return{_context:t,_texture:l,_target:e.TEXTURE_2D,_width:a,_height:n,destroy(){d||(e.deleteTexture(l),d=!0)}}}class _i{constructor(e,a={}){if(!e||!e.scene||!e.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=e,this._scene=e.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=a.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const n={...ae,...a};this.speedFactor=W(n.speedFactor,ae.speedFactor),this.cullSpeedMin=W(n.cullSpeedMin,ae.cullSpeedMin),this.cullSpeedMax=W(n.cullSpeedMax,ae.cullSpeedMax),this.windSpeedMin=W(n.windSpeedMin,ae.windSpeedMin),this.windSpeedMax=W(n.windSpeedMax,ae.windSpeedMax),this.arrowLength=W(n.arrowLength,ae.arrowLength),this.trailLength=W(n.trailLength,ae.trailLength),this.decaySpeed=W(n.decaySpeed,ae.decaySpeed),this.alphaFactor=W(n.alphaFactor,ae.alphaFactor),this.maxWindSpeed=W(n.maxWindSpeed,ae.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=W(a.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(e){if(!e||typeof e!="object")throw new Error("Wind2D.loadData requires a valid data object.");const a=W(e.longitude,NaN),n=W(e.latitude,NaN),u=Array.isArray(e.altitude)?e.altitude:[],l=Array.isArray(e.sizeMesh)?e.sizeMesh:[],d=Array.isArray(e.count)?e.count:[],g=Array.isArray(e.hspeed)?e.hspeed:[],b=Array.isArray(e.hdir)?e.hdir:[],T=Array.isArray(e.vspeed)?e.vspeed:[];if(!Number.isFinite(a)||!Number.isFinite(n))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const E=u.length;if(E<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(l.length!==E||d.length!==E)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const A=d.map(P=>Math.max(1,Math.floor(W(P,1)))),O=l.map(P=>Math.max(1,W(P,1))),M=u.map(P=>W(P,0)),L=A.reduce((P,N)=>P+N*N,0);if(g.length<L||b.length<L||T.length<L)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=E,this.visibleLayerMin=0,this.visibleLayerMax=E-1,this._altitudes=M.slice(),this._maxNx=Math.max(...A),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*E;const C=new Float32Array(this._atlasWidth*this._atlasHeight*4);let v=0;for(let P=0;P<E;P+=1){const N=A[P],V=N;for(let Y=0;Y<V;Y+=1)for(let U=0;U<N;U+=1){const q=v+Y*N+U,y=((P*this._maxNy+Y)*this._atlasWidth+U)*4,D=Number(g[q]),w=Number(b[q]),Q=Number(T[q]);if(!(Number.isFinite(D)&&Number.isFinite(w))){C[y]=0,C[y+1]=0,C[y+2]=0,C[y+3]=0;continue}const I=w*Math.PI/180;C[y]=D*Math.sin(I),C[y+1]=D*Math.cos(I),C[y+2]=Number.isFinite(Q)?Q:0,C[y+3]=1}v+=N*V}this._createOrReplaceWindAtlasTexture(C);const S=Math.max(...O),i=this._maxNx*S,f=i/2/111320,_=n*Math.PI/180,F=Math.max(1e-6,Math.abs(Math.cos(_))),k=i/2/(111320*F);this._bounds={minLon:a-k,maxLon:a+k,minLat:n-f,maxLat:n+f,minHeight:Math.min(...M),maxHeight:Math.max(...M)},this._dataPointCount=L,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(e){const a=Math.max(1,Math.floor(W(e,1))),n=gi(a,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&n===this._particleTextureSize||(this._particleTextureSize=n,this._particleCount=n*n,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(e){const a=Ie(W(e,this.particleDensity),.05,10);if(this.particleDensity=a,this._dataPointCount<=0)return;const n=Math.max(1,Math.floor(this._dataPointCount*a));this.setParticleCount(n)}setBounds(e,a,n,u){const l=W(e,NaN),d=W(a,NaN),g=W(n,NaN),b=W(u,NaN);if(!Number.isFinite(l)||!Number.isFinite(d)||!Number.isFinite(g)||!Number.isFinite(b))return;const T=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};T.minLon=Math.min(l,d),T.maxLon=Math.max(l,d),T.minLat=Math.min(g,b),T.maxLat=Math.max(g,b),this._bounds=T,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const e=(this._bounds.minLon+this._bounds.maxLon)*.5,a=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(e,a,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(e){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const u=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[u],this._updateCommand.execute(this._context,e?e.passState:void 0),this._particleState=u,this._drawCommand.modelMatrix=this._modelMatrix,e&&Array.isArray(e.commandList)&&e.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(e){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=xi(this._context,this._gl,this._atlasWidth,this._atlasHeight,e)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const e=this._Cesium,a=this._particleTextureSize,n=yi(a),u=vi(a);for(let l=0;l<2;l+=1){this._particlePositionTextures[l]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:n},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[l]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:u},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._framebuffers[l]=new e.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[l],this._velocityTextures[l]],destroyAttachments:!1});const d=this._framebuffers[l]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,d),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._particlePositionTextures[e]&&(this._particlePositionTextures[e].destroy(),this._particlePositionTextures[e]=null),this._velocityTextures[e]&&(this._velocityTextures[e].destroy(),this._velocityTextures[e]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const e=this._Cesium,a=e.Buffer.createVertexBuffer({context:this._context,typedArray:fi,usage:e.BufferUsage.STATIC_DRAW}),n=e.Buffer.createVertexBuffer({context:this._context,typedArray:mi,usage:e.BufferUsage.STATIC_DRAW}),u=e.Buffer.createIndexBuffer({context:this._context,typedArray:pi,usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:a,componentsPerAttribute:2},{index:1,vertexBuffer:n,componentsPerAttribute:2}],indexBuffer:u})}_buildParticleVertexArray(){const e=this._Cesium,a=new Float32Array(this._drawVertexCount);for(let n=0;n<a.length;n+=1)a[n]=n;this._particleVertexBuffer=e.Buffer.createVertexBuffer({context:this._context,typedArray:a,usage:e.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const e=this._Cesium,a=`#version 300 es
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
}`;this._updateProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:a,fragmentShaderSource:n,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const e=this._Cesium,a=`#version 300 es
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
}`;this._drawProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:a,fragmentShaderSource:n,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const e=this._Cesium,a=e.RenderState.fromCache({viewport:new e.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:a,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const e=this._Cesium,a=e.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:e.BlendingState.ALPHA_BLEND});this._drawCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:a,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:e.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const e=Ie(Math.floor(W(this.visibleLayerMin,0)),0,this._layerCount-1),a=Ie(Math.floor(W(this.visibleLayerMax,this._layerCount-1)),e,this._layerCount-1);return{min:e,max:a}}_normalizeSpeedRange(e,a){const n=Math.max(1e-4,W(this.maxWindSpeed,ae.maxWindSpeed)),u=Ie(W(e,0)/n,0,1),l=Ie(W(a,n)/n,0,1);return{min:Math.min(u,l),max:Math.max(u,l)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>W(this.speedFactor,ae.speedFactor),maxWindSpeed:()=>Math.max(1e-4,W(this.maxWindSpeed,ae.maxWindSpeed)),decaySpeed:()=>Ie(W(this.decaySpeed,ae.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>W(this.arrowLength,ae.arrowLength),trailLength:()=>W(this.trailLength,ae.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Ie(W(this.alphaFactor,ae.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function bi({getViewer:t,getCesium:e,message:a}){const n=$(null),u=$({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function l(){var E,A;const T=t==null?void 0:t();if(n.value){try{(A=(E=T==null?void 0:T.scene)==null?void 0:E.primitives)==null||A.remove(n.value)}catch{}n.value.destroy(),n.value=null}}function d(){const T=t==null?void 0:t(),E=e==null?void 0:e();if(!T||!E){a.error("Cesium 尚未初始化");return}l();const A=Si(E);n.value=new _i(T,{maxWindSpeed:20,cesium:E,speedFactor:u.value.speedFactor,arrowLength:u.value.arrowLength,trailLength:u.value.trailLength,alphaFactor:u.value.alphaFactor}),n.value.loadData(A),T.scene.primitives.add(n.value),n.value.flyTo(),a.success("风场加载成功，可通过下方滑块调节样式")}function g(){n.value&&(n.value.speedFactor=u.value.speedFactor,n.value.arrowLength=u.value.arrowLength,n.value.trailLength=u.value.trailLength,n.value.alphaFactor=u.value.alphaFactor)}function b(T,E){return T in u.value?(u.value={...u.value,[T]:Number(E)},g(),!0):!1}return{wind2D:n,windParams:u,clearWind2D:l,loadSimulatedWind:d,setWindParam:b}}function Si(t){const u=[0,2e3,5e3,1e4,15e3],l=[3e4,3e4,25e3,25e3,2e4],d=[30,30,25,25,20],g=d.reduce((O,M)=>O+M*M,0),b=new Array(g),T=new Array(g),E=new Array(g);let A=0;for(let O=0;O<5;O++){const M=d[O],L=d[O],C=l[O];for(let v=0;v<L;v++)for(let S=0;S<M;S++){const i=A+v*M+S,f=(S-M/2)*(C/111320),_=(v-L/2)*(C/111320/Math.cos(t.Math.toRadians(35))),k=Math.atan2(_,f)+Math.PI/2+.2*Math.sin(S*.5)*Math.cos(v*.5);T[i]=t.Math.toDegrees(k)%360;const P=Math.sqrt(f*f+_*_),V=Math.max(0,1-P/15);b[i]=(5+O*2)*V+2*Math.random(),E[i]=.5*Math.sin(S*.3)*Math.cos(v*.3)}A+=M*L}return{longitude:104,latitude:35,altitude:u,sizeMesh:l,count:d,hspeed:b,hdir:T,vspeed:E}}const Ti={class:"map-controls-group"},wi={class:"mouse-position-content"},Mi={__name:"CesiumContainer",setup(t){let e=null,a=null;const n="4267820f43926eaf808d61dc07269beb",u="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzRhZjM0ZC02MmYxLTRhNzgtYTkxNi00YWM2MmMxNmNhMWIiLCJpZCI6MTkzNjkxLCJpYXQiOjE3MDY5NDA2ODF9.mKu1zCK-GOjwDem9-J_Ksv0xEGNsN1zGuShYzOuXJsg",l=tt(),d=$(!1),g=$(null),b=()=>a,T=()=>e||window.Cesium,E=ai({getViewer:b,getCesium:T,message:l,backendBaseUrl:At,tiandituToken:n,cesiumIonToken:u}),{activeBasemap:A,activeTerrain:O,customXyzBasemapUrl:M,basemapOptions:L,terrainOptions:C,overlayOptions:v,createImageryProviderViewModels:S,createTerrainProviderViewModels:i,getSelectedImageryProviderViewModel:f,getSelectedTerrainProviderViewModel:_,bindLayerPickerStateSync:F,addBaseImageryLayers:k,initCustomTerrain:P,handleOverlayToggle:N,handleCustomBasemapSubmit:V,cleanupLayers:Y}=E,{coordinateDisplay:U,setupInteractions:q,cleanupInteractions:y}=Qa({getViewer:b,getCesium:T}),{installCreditHider:D,cleanupCreditHider:w}=Ja({getViewer:b}),Q=li({getViewer:b,getCesium:T,message:l}),{flyToHome:ue}=Q,I=bi({getViewer:b,getCesium:T,message:l}),{toolPanelOpen:ee,advancedEffectControls:Ae,fluidParams:ze,toolModules:_e,handleToolAction:be,handleToolControlChange:fe,handleFluidStateChange:ge,cleanupTools:Ee}=ui({fluidPanelRef:g,sceneActions:Q,wind:I});async function De(){bt("正在初始化 3D 场景...");try{if(e=await Ua({ionToken:u}),!e||!document.getElementById("cesiumContainer"))return;Re(),q();const se=k(),j=await P();d.value=!0,se&&j?l.success("天地图基础影像与地形加载成功。"):l.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0})}catch(se){l.error("Cesium 运行时加载失败",se),l.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{St()}}function Re(){const se=typeof e.Map=="function"?e.Map:e.Viewer,j=S(),re=i();a=new se("cesiumContainer",{baseLayerPicker:!0,geocoder:!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:j,selectedImageryProviderViewModel:f(j),terrainProviderViewModels:re,selectedTerrainProviderViewModel:_(re),shouldAnimate:!0}),a.scene.globe.terrainExaggeration=1,a.scene.globe.terrainExaggerationRelativeHeight=0,Xa(a,e),Yt(a),D(),F(),ue(0)}return Tt(()=>{De()}),wt(()=>{if(d.value=!1,y(),Ee(),Y(),w(),a){try{a.destroy()}catch{}a=null}}),(se,j)=>(z(),B(pe,null,[j[6]||(j[6]=p("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),d.value?(z(),Ce(He(fr),{key:0,headless:"","get-viewer":b,"get-cesium":T,controls:X(Ae)},null,8,["controls"])):J("",!0),d.value?(z(),Ce(He(Na),{key:1,ref_key:"fluidPanelRef",ref:g,headless:"","get-viewer":b,"get-cesium":T,params:X(ze),onStateChange:X(ge)},null,40,["params","onStateChange"])):J("",!0),d.value?(z(),Ce(ba,{key:2,open:X(ee),"onUpdate:open":j[0]||(j[0]=re=>Ze(ee)?ee.value=re:null),"active-basemap":X(A),"onUpdate:activeBasemap":j[1]||(j[1]=re=>Ze(A)?A.value=re:null),"active-terrain":X(O),"onUpdate:activeTerrain":j[2]||(j[2]=re=>Ze(O)?O.value=re:null),"basemap-options":X(L),"terrain-options":X(C),"overlay-options":X(v),"custom-basemap-url":X(M),modules:X(_e),onModuleAction:X(be),onControlChange:X(fe),onOverlayToggle:X(N),onCustomBasemapSubmit:X(V)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):J("",!0),p("div",Ti,[p("div",wi,K(X(U)),1),j[5]||(j[5]=p("div",{class:"divider"},null,-1)),p("button",{class:"home-btn",title:"回到初始位置",onClick:j[3]||(j[3]=(...re)=>X(ue)&&X(ue)(...re))},[...j[4]||(j[4]=[p("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[p("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},Oi=je(Mi,[["__scopeId","data-v-131c1981"]]);export{Oi as default};
