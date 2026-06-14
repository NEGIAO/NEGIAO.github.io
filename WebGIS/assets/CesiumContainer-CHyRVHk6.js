const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-CvtFB7l4.js","./vendor-echarts-all-B_WEc2GE.js","./vendor-libs-RyoEAG51.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var Wt=Object.defineProperty;var $t=(t,e,r)=>e in t?Wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var ft=(t,e,r)=>$t(t,typeof e!="symbol"?e+"":e,r);import{_ as rt,e as ut,K as Rt,J as kt,I as Gt}from"./index-BwxRhASJ.js";import{_ as Vt}from"./vendor-runtime-Dp1pzeXC.js";import{C as It,o as zt,w as ge,d as z,c as $,f as h,t as te,G as le,W as Ke,X as Ye,g as ee,r as G,P as qt,a as ye,u as Z,F as Se,e as Ae,n as he,x as ke,S as $e,I as pt,i as gt,H as Fe,O as Ot,q as pe,v as Xt,a4 as nt}from"./vendor-vue-CmuMwCC6.js";import{af as ot,ag as st,ah as Yt,X as jt,e as vt,ai as Je,ac as yt,aj as Zt,ak as Kt,al as xt,H as _t,T as bt,a2 as Jt,am as Qt,an as er,ao as tr,ap as rr,q as ar,o as ir,aq as nr}from"./vendor-libs-RyoEAG51.js";import"./vendor-ol-all-ZNWqDNbP.js";import"./vendor-geotiff-B6D64MFK.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BzG5Hdu9.js";import"./vendor-axios-Bdz_Fv8M.js";function or(t){var n;const e=t==null?void 0:t.scene,r=e==null?void 0:e.globe;!e||!r||(r.enableLighting=!0,e.sun&&(e.sun.show=!0),e.moon&&(e.moon.show=!0),e.skyBox&&(e.skyBox.show=!0),(n=e.requestRender)==null||n.call(e))}function sr(t,e){var d;const r=t==null?void 0:t.scene,n=r==null?void 0:r.globe;if(!r||!n)return;ur(r,e),dr(r),n.enableLighting=!0,n.showGroundAtmosphere=!0,j(n,"dynamicAtmosphereLighting",!0),j(n,"dynamicAtmosphereLightingFromSun",!0),j(n,"atmosphereLightIntensity",11.5),j(n,"atmosphereHueShift",-.015),j(n,"atmosphereSaturationShift",.08),j(n,"atmosphereBrightnessShift",.02),j(n,"lightingFadeInDistance",15e6),j(n,"lightingFadeOutDistance",22e6),j(n,"nightFadeInDistance",9e6),j(n,"nightFadeOutDistance",16e6),Qe(e,n,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Qe(e,n,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),j(n,"atmosphereRayleighScaleHeight",1e4),j(n,"atmosphereMieScaleHeight",3200),j(n,"atmosphereMieAnisotropy",.92),!r.skyAtmosphere&&(e!=null&&e.SkyAtmosphere)&&(r.skyAtmosphere=mr(e));const u=r.skyAtmosphere;u&&(u.show=!0,j(u,"perFragmentAtmosphere",!0),j(u,"dynamicAtmosphereLighting",!0),j(u,"dynamicAtmosphereLightingFromSun",!0),j(u,"hueShift",-.025),j(u,"saturationShift",.08),j(u,"brightnessShift",.03),j(u,"atmosphereLightIntensity",12),Qe(e,u,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Qe(e,u,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),j(u,"atmosphereRayleighScaleHeight",1e4),j(u,"atmosphereMieScaleHeight",3200),j(u,"atmosphereMieAnisotropy",.92)),r.sun&&(r.sun.show=!0),r.moon&&(r.moon.show=!0),r.skyBox&&(r.skyBox.show=!0),"sunBloom"in r&&(r.sunBloom=!0),"highDynamicRange"in r&&(r.highDynamicRange=!0),hr(r),(d=r.requestRender)==null||d.call(r)}function lr(t){var u;const e=t==null?void 0:t.scene,r=e==null?void 0:e.globe;if(!e||!r)return null;const n=(u=e.postProcessStages)==null?void 0:u.bloom;return{scene:Ee(e,["highDynamicRange","sunBloom","light"]),fog:Ee(e.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:Ee(r,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!e.skyAtmosphere,sky:Ee(e.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:Ee(e.sun,["show"]),moon:Ee(e.moon,["show"]),skyBox:Ee(e.skyBox,["show"]),bloom:{props:Ee(n,["enabled"]),uniforms:Ee(n==null?void 0:n.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function cr(t,e,r){var c,p,_,b;if(!r)return;const n=t==null?void 0:t.scene,u=n==null?void 0:n.globe;if(!n||!u)return;De(n,r.scene,e),De(n.fog,r.fog,e),De(u,r.globe,e),De(n.sun,r.sun,e),De(n.moon,r.moon,e),De(n.skyBox,r.skyBox,e),n.skyAtmosphere&&(De(n.skyAtmosphere,r.sky,e),r.skyAtmosphereExisted||(n.skyAtmosphere.show=!1));const d=(c=n.postProcessStages)==null?void 0:c.bloom;De(d,(p=r.bloom)==null?void 0:p.props,e),De(d==null?void 0:d.uniforms,(_=r.bloom)==null?void 0:_.uniforms,e),(b=n.requestRender)==null||b.call(n)}function ur(t,e){var r;if(e!=null&&e.SunLight)try{t.light=new e.SunLight({color:(r=e.Color)==null?void 0:r.WHITE,intensity:2.35})}catch{t.light=new e.SunLight}j(t.light,"intensity",2.35)}function dr(t){const e=t==null?void 0:t.fog;e&&(e.enabled=!0,j(e,"density",12e-5),j(e,"minimumBrightness",.035),j(e,"screenSpaceErrorFactor",2),j(e,"visualDensityScalar",.16))}function hr(t){var r;const e=(r=t==null?void 0:t.postProcessStages)==null?void 0:r.bloom;e&&(e.enabled=!0,e.uniforms&&(j(e.uniforms,"contrast",128),j(e.uniforms,"brightness",-.18),j(e.uniforms,"delta",1),j(e.uniforms,"sigma",2.5),j(e.uniforms,"stepSize",4.2)))}function mr(t){var e;try{return new t.SkyAtmosphere((e=t.Ellipsoid)==null?void 0:e.WGS84)}catch{return new t.SkyAtmosphere}}function j(t,e,r){t&&e in t&&(t[e]=r)}function Qe(t,e,r,n,u,d){!e||!(r in e)||!(t!=null&&t.Cartesian3)||(e[r]=new t.Cartesian3(n,u,d))}function Ee(t,e){return t?e.reduce((r,n)=>(n in t&&(r[n]=fr(t[n])),r),{}):{}}function De(t,e={},r){!t||!e||Object.entries(e).forEach(([n,u])=>{n in t&&(t[n]=pr(u,r))})}function fr(t){return t&&typeof t=="object"&&"x"in t&&"y"in t&&"z"in t?{__type:"Cartesian3",x:t.x,y:t.y,z:t.z}:t}function pr(t,e){return(t==null?void 0:t.__type)==="Cartesian3"&&(e!=null&&e.Cartesian3)?new e.Cartesian3(t.x,t.y,t.z):t}const gr={key:0,class:"advanced-effects-root"},vr={class:"effects-panel"},yr={class:"panel-head"},xr={class:"effect-switches"},_r={class:"switch-item"},br={class:"switch-item"},Sr={class:"switch-item"},wr={class:"switch-item"},Tr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(t){const e=t,r=ut(),n=G(null),u=G(!1),d=G(!1),c=G(!1),p=G(!1),_=G(!1);let b=null,D=null,A=null,H=!1,S=null,T=null,P=null,x=null,C=null,i=null,f=null,m=null,w=!1,E=null,F=0,W=0,K=typeof performance<"u"?performance.now():Date.now();function re(){return P||(P=Vt(()=>import("./cesiumFxRuntime-CvtFB7l4.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(g=>{var l;const a=(l=g==null?void 0:g.getCesiumFxEchartsRuntime)==null?void 0:l.call(g);if(!a)throw new Error("Cinematic FX 图表运行时加载失败");return T=a,a}).catch(g=>{throw P=null,g}),P)}async function q(){return T||re()}const J={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},B={hdr:null,bloom:null,sky:null};It(()=>{me()}),zt(()=>{_e()}),ge(()=>e.controls,g=>{se(g||{})},{deep:!0,immediate:!0});function se(g){Object.prototype.hasOwnProperty.call(g,"fog")&&(u.value=!!g.fog),Object.prototype.hasOwnProperty.call(g,"hbao")&&(d.value=!!g.hbao),Object.prototype.hasOwnProperty.call(g,"tiltShift")&&(c.value=!!g.tiltShift),Object.prototype.hasOwnProperty.call(g,"atmosphere")&&(p.value=!!g.atmosphere)}function me(){let g=0;x=window.setInterval(async()=>{var y,L;g+=1;const a=(y=e.getViewer)==null?void 0:y.call(e),l=((L=e.getCesium)==null?void 0:L.call(e))||window.Cesium;if(a&&l){clearInterval(x),x=null;try{de(a),R(a),ve(a,l),O(a,l),r.success("高级视觉效果已启用。")}catch(N){r.error("高级视觉效果初始化失败",N),r.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}g>=150&&(clearInterval(x),x=null,r.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function de(g){var l,y,L,N,V,o;const a=g==null?void 0:g.scene;if(a){if(typeof a.highDynamicRange=="boolean"&&(B.hdr=a.highDynamicRange),(l=a.postProcessStages)!=null&&l.bloom){const s=a.postProcessStages.bloom;B.bloom={enabled:!!s.enabled,contrast:(y=s.uniforms)==null?void 0:y.contrast,brightness:(L=s.uniforms)==null?void 0:L.brightness,delta:(N=s.uniforms)==null?void 0:N.delta,sigma:(V=s.uniforms)==null?void 0:V.sigma,stepSize:(o=s.uniforms)==null?void 0:o.stepSize}}a.skyAtmosphere&&(B.sky={hueShift:a.skyAtmosphere.hueShift,saturationShift:a.skyAtmosphere.saturationShift,brightnessShift:a.skyAtmosphere.brightnessShift})}}function ve(g,a){var y;!((y=g==null?void 0:g.scene)!=null&&y.postProcessStages)||!(a!=null&&a.PostProcessStage)||(M(g,a),oe(g,a),xe(g,a),p.value?ie(g,a,1200):Pe(g))}function R(g){var l;const a=g==null?void 0:g.scene;(l=a==null?void 0:a.renderError)!=null&&l.addEventListener&&(a.rethrowRenderErrors=!1,m=a.renderError.addEventListener((y,L)=>{r.error("Cesium 渲染异常，已触发降级保护",L),k(),w||(w=!0,r.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function k(){u.value=!1,c.value=!1,d.value=!1,p.value=!1,b&&(b.enabled=!1),D&&(D.enabled=!1),A&&(A.enabled=!1)}function M(g,a){b||(b=new a.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new a.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),g.scene.postProcessStages.add(b),b.enabled=u.value)}function oe(g,a){var y,L;const l=(y=g==null?void 0:g.scene)==null?void 0:y.postProcessStages;l&&(l.ambientOcclusion?(A=l.ambientOcclusion,H=!1):(L=a==null?void 0:a.PostProcessStageLibrary)!=null&&L.createAmbientOcclusionStage&&(A=a.PostProcessStageLibrary.createAmbientOcclusionStage(),l.add(A),H=!0),A&&(A.enabled=d.value,A.uniforms&&("intensity"in A.uniforms&&(A.uniforms.intensity=4.2),"bias"in A.uniforms&&(A.uniforms.bias=.08),"lengthCap"in A.uniforms&&(A.uniforms.lengthCap=.35),"stepSize"in A.uniforms&&(A.uniforms.stepSize=1.8),"frustumLength"in A.uniforms&&(A.uniforms.frustumLength=1200))))}function xe(g,a){D||(D=new a.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),g.scene.postProcessStages.add(D),D.enabled=!1)}function O(g,a){const l=g==null?void 0:g.scene;l&&(f=l.preRender.addEventListener(()=>{var V;const y=Oe(g),L=Number(((V=g==null?void 0:g.camera)==null?void 0:V.pitch)??-1.2);F+=1;const N=typeof performance<"u"?performance.now():Date.now();if(N-K>=1e3&&(W=Math.round(F*1e3/(N-K)),F=0,K=N),b&&(b.enabled=u.value,b.uniforms.cameraHeightFactor=Te(y,150,12e3),b.uniforms.fogDensity=55e-5+(1-b.uniforms.cameraHeightFactor)*.00125),A&&(A.enabled=d.value),D){const o=L>-.62,s=o?We((L+.62)/.5):0;D.enabled=c.value&&o,D.uniforms.blurStrength=s}p.value?ie(g,a,y):Pe(g)}))}function ie(g,a,l){var o;const y=g==null?void 0:g.scene;if(!y)return;E||(E=lr(g)),sr(g,a),typeof y.highDynamicRange=="boolean"&&(y.highDynamicRange=!0);const L=(o=y.postProcessStages)==null?void 0:o.bloom;L&&(L.enabled=!0,L.uniforms&&("contrast"in L.uniforms&&(L.uniforms.contrast=149),"brightness"in L.uniforms&&(L.uniforms.brightness=-.12),"delta"in L.uniforms&&(L.uniforms.delta=1),"sigma"in L.uniforms&&(L.uniforms.sigma=3.25),"stepSize"in L.uniforms&&(L.uniforms.stepSize=5)));const N=y.skyAtmosphere;if(!N)return;const V=Te(l,500,12e4);N.hueShift=-.035+V*.035,N.saturationShift=-.14+V*.09,N.brightnessShift=.03+(1-V)*.08}function Pe(g){var L,N;const a=g==null?void 0:g.scene;if(!a)return;const l=((L=e.getCesium)==null?void 0:L.call(e))||window.Cesium;if(E){cr(g,l,E),E=null;return}typeof a.highDynamicRange=="boolean"&&B.hdr!==null&&(a.highDynamicRange=B.hdr);const y=(N=a.postProcessStages)==null?void 0:N.bloom;y&&B.bloom&&(y.enabled=B.bloom.enabled,y.uniforms&&("contrast"in y.uniforms&&B.bloom.contrast!==void 0&&(y.uniforms.contrast=B.bloom.contrast),"brightness"in y.uniforms&&B.bloom.brightness!==void 0&&(y.uniforms.brightness=B.bloom.brightness),"delta"in y.uniforms&&B.bloom.delta!==void 0&&(y.uniforms.delta=B.bloom.delta),"sigma"in y.uniforms&&B.bloom.sigma!==void 0&&(y.uniforms.sigma=B.bloom.sigma),"stepSize"in y.uniforms&&B.bloom.stepSize!==void 0&&(y.uniforms.stepSize=B.bloom.stepSize))),a.skyAtmosphere&&B.sky&&(a.skyAtmosphere.hueShift=B.sky.hueShift,a.skyAtmosphere.saturationShift=B.sky.saturationShift,a.skyAtmosphere.brightnessShift=B.sky.brightnessShift)}function Ie(){C&&(clearInterval(C),C=null)}async function ze(){var y,L;const g=!_.value;if(_.value=g,!g){Ie();return}const a=(y=e.getViewer)==null?void 0:y.call(e),l=((L=e.getCesium)==null?void 0:L.call(e))||window.Cesium;if(!a||!l){_.value=!1,r.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ce(a,l),fe(a,l),ae(a,l)}catch(N){_.value=!1,r.error("图表模块加载失败",N)}}async function Ce(g,a){await q(),await qt(),n.value&&(S||(S=T.init(n.value),ce()),i||(i=()=>{S==null||S.resize()},window.addEventListener("resize",i)),S.resize(),ae(g,a))}function fe(g,a){C||(C=window.setInterval(()=>{!S||!_.value||ae(g,a)},1200))}function ae(g,a){var V;const l=new Date,y=`${Ue(l.getHours())}:${Ue(l.getMinutes())}:${Ue(l.getSeconds())}`,L=Number((Oe(g)/1e3).toFixed(2)),N=Number(a.Math.toDegrees(((V=g==null?void 0:g.camera)==null?void 0:V.pitch)??0).toFixed(1));Ne(J.labels,y,20),Ne(J.cameraHeightKm,L,20),Ne(J.pitchDeg,N,20),Ne(J.fps,W,20),S.setOption({xAxis:{data:J.labels},series:[{data:J.cameraHeightKm},{data:J.pitchDeg},{data:J.fps}]})}function ce(){S&&S.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function _e(){var l,y;x&&(clearInterval(x),x=null),Ie();const g=(l=e.getViewer)==null?void 0:l.call(e),a=(y=g==null?void 0:g.scene)==null?void 0:y.postProcessStages;f&&(f(),f=null),m&&(m(),m=null),b&&a&&a.remove(b),b=null,D&&a&&a.remove(D),D=null,A&&(H&&a&&a.remove(A),A=null),H=!1,g&&Pe(g),i&&(window.removeEventListener("resize",i),i=null),S&&(S.dispose(),S=null),T=null,w=!1}function Oe(g){var L,N,V;const a=(N=(L=g==null?void 0:g.scene)==null?void 0:L.globe)==null?void 0:N.ellipsoid,l=(V=g==null?void 0:g.camera)==null?void 0:V.positionWC;if(!a||!l)return 0;const y=a.cartesianToCartographic(l);return Math.max(0,Number((y==null?void 0:y.height)??0))}function Te(g,a,l){return!Number.isFinite(g)||l<=a?0:We((g-a)/(l-a))}function We(g){return Math.min(1,Math.max(0,Number(g)||0))}function Ne(g,a,l){g.push(a),g.length>l&&g.shift()}function Ue(g){return String(g).padStart(2,"0")}return(g,a)=>t.headless?ee("",!0):(z(),$("div",gr,[h("div",vr,[h("div",yr,[a[4]||(a[4]=h("span",{class:"panel-title"},"Cinematic FX",-1)),h("button",{class:"panel-btn",onClick:ze},te(_.value?"隐藏图表":"显示图表"),1)]),h("div",xr,[h("label",_r,[le(h("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>u.value=l),type:"checkbox"},null,512),[[Ke,u.value]]),a[5]||(a[5]=h("span",null,"电影级高度雾",-1))]),h("label",br,[le(h("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>d.value=l),type:"checkbox"},null,512),[[Ke,d.value]]),a[6]||(a[6]=h("span",null,"HBAO 微阴影",-1))]),h("label",Sr,[le(h("input",{"onUpdate:modelValue":a[2]||(a[2]=l=>c.value=l),type:"checkbox"},null,512),[[Ke,c.value]]),a[7]||(a[7]=h("span",null,"移轴摄影",-1))]),h("label",wr,[le(h("input",{"onUpdate:modelValue":a[3]||(a[3]=l=>p.value=l),type:"checkbox"},null,512),[[Ke,p.value]]),a[8]||(a[8]=h("span",null,"动态大气 + Bloom",-1))])]),le(h("div",{ref_key:"chartRef",ref:n,class:"fx-chart"},null,512),[[Ye,_.value]])])]))}},Mr=rt(Tr,[["__scopeId","data-v-1e562e70"]]),Lr={key:0,class:"launcher-count"},Fr={class:"panel-header"},Pr={class:"panel-title-block"},Cr={class:"panel-mark"},Ar={class:"panel-copy"},Er={class:"panel-subtitle"},Dr={class:"panel-actions"},Rr=["title"],kr={class:"panel-tabs","aria-label":"3D 工具分类"},Ir=["aria-pressed","onClick"],zr={class:"panel-scroll"},Or={class:"panel-page"},Nr={class:"overview-grid"},Hr={class:"overview-tile"},Br={class:"overview-tile"},Ur={class:"overview-tile"},Wr={key:0,class:"quick-actions"},$r=["disabled","onClick"],Gr={key:1,class:"empty-state"},Vr={class:"panel-page"},qr=["aria-expanded"],Xr={class:"section-main"},Yr={class:"section-meta"},jr={key:0,class:"section-body"},Zr={class:"option-grid"},Kr=["disabled","aria-pressed","title","onClick"],Jr={class:"custom-basemap-input-row"},Qr=["disabled"],ea={key:0,class:"custom-basemap-current"},ta=["aria-expanded"],ra={class:"section-main"},aa={class:"section-meta"},ia={key:0,class:"section-body"},na={class:"option-grid"},oa=["aria-pressed","title","onClick"],sa=["aria-expanded"],la={class:"section-main"},ca={class:"section-meta"},ua={key:0,class:"section-body"},da={class:"overlay-list"},ha=["disabled","aria-pressed","title","onClick"],ma={class:"overlay-copy"},fa={class:"overlay-title"},pa={key:0,class:"overlay-desc"},ga={key:3,class:"empty-state"},va={class:"panel-page"},ya={class:"module-list"},xa=["aria-expanded","onClick"],_a={class:"module-icon"},ba={class:"module-copy"},Sa={class:"module-title"},wa={key:0,class:"module-desc"},Ta={class:"module-head-side"},Ma={key:0,class:"module-body"},La={key:0,class:"module-actions"},Fa=["disabled","onClick"],Pa={key:1,class:"control-list"},Ca={class:"control-label"},Aa={class:"control-label-text"},Ea=["aria-label","title"],Da=["min","max","step","value","disabled","onInput"],Ra=["min","max","step","value","disabled","onInput"],ka=["value","disabled","onInput"],Ia=["value","disabled","onChange"],za=["value"],Oa=["aria-pressed","disabled","onClick"],Na={key:4,class:"control-value"},Ha={key:0,class:"empty-state"},St=2,Ba={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(t,{emit:e}){const r=t,n=e,u=q(),d=u.uiStateVersion===St,c=G(u.activeTab||"scene"),p=G(!!u.compactMode),_=G(new Set(d?u.expandedLayerSectionIds||[]:[])),b=G(new Set(d?u.expandedModuleIds||[]:[])),D=G(r.customBasemapUrl||""),A=pe(()=>r.embedded||r.open),H=pe(()=>r.modules.find(R=>R.id==="scene")||null),S=pe(()=>{var R;return((R=H.value)==null?void 0:R.actions)||[]}),T=pe(()=>r.modules.filter(R=>R.id!=="scene")),P=pe(()=>T.value.filter(R=>R.statusTone==="success"||R.statusTone==="warning").length),x=pe(()=>r.overlayOptions.filter(R=>!!R.active).length),C=[{id:"scene",label:"场景",icon:st},{id:"layers",label:"图层",icon:vt},{id:"modules",label:"模块",icon:ot}],i=pe(()=>{var R;return((R=r.basemapOptions.find(k=>k.value===r.activeBasemap))==null?void 0:R.label)||"未选择"}),f=pe(()=>{var R;return((R=r.terrainOptions.find(k=>k.value===r.activeTerrain))==null?void 0:R.label)||"未选择"});ge(()=>r.modules.map(R=>R.id),R=>{R.includes(c.value)||c.value==="scene"||c.value==="layers"||c.value==="modules"||(c.value="scene")},{immediate:!0}),ge([c,p,_,b],J,{deep:!0}),ge(()=>r.customBasemapUrl,R=>{R!==D.value&&(D.value=R||"")});function m(R){n("update:open",R)}function w(R){return _.value.has(R)}function E(R){const k=new Set(_.value);k.has(R)?k.delete(R):k.add(R),_.value=k}function F(R){return b.value.has(R)}function W(R){const k=new Set(b.value);k.has(R)?k.delete(R):k.add(R),b.value=k}function K(R){R!=null&&R.disabled||n("update:activeBasemap",R.value)}function re(){n("custom-basemap-submit",{url:D.value})}function q(){if(typeof window>"u")return{};try{const R=window.localStorage.getItem(r.storageKey);return R?JSON.parse(R):{}}catch{return{}}}function J(){if(!(typeof window>"u"))try{window.localStorage.setItem(r.storageKey,JSON.stringify({uiStateVersion:St,activeTab:c.value,compactMode:p.value,expandedLayerSectionIds:[..._.value],expandedModuleIds:[...b.value]}))}catch{}}function B(R){return{scene:st,effects:ir,wind:ar,fluid:rr}[R]||ot}function se(R,k){var oe;return((oe={scene:{home:er,everest:xt,tileset:Qt},wind:{load:Jt,clear:bt},fluid:{pick:_t,clear:bt}}[R])==null?void 0:oe[k])||tr}function me(R,k){n("module-action",{moduleId:R,actionId:k})}function de(R,k,M){const oe=k.type==="range"?Number(M):M;n("control-change",{moduleId:R,controlId:k.id,value:oe})}function ve(R){R.disabled||n("overlay-toggle",{overlayId:R.value,value:!R.active})}return(R,k)=>(z(),$("aside",{class:he(["cesium-tool-shell",{"is-open":A.value,"is-embedded":t.embedded}])},[!t.embedded&&!A.value?(z(),$("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:k[0]||(k[0]=M=>m(!0))},[ye(Z(ot),{size:18,"stroke-width":"2"}),k[8]||(k[8]=h("span",null,"高级控制台",-1)),P.value?(z(),$("span",Lr,te(P.value),1)):ee("",!0)])):ee("",!0),le(h("section",{class:he(["cesium-tool-panel",{compact:p.value}]),"aria-label":"Cesium 高级控制台"},[h("header",Fr,[h("div",Pr,[h("span",Cr,[ye(Z(st),{size:18,"stroke-width":"2"})]),h("span",Ar,[k[9]||(k[9]=h("span",{class:"panel-title"},"3D 高级控制台",-1)),h("span",Er,te(i.value)+" / "+te(f.value),1)])]),h("div",Dr,[h("button",{class:"icon-btn",type:"button",title:p.value?"切换为舒展布局":"切换为紧凑布局",onClick:k[1]||(k[1]=M=>p.value=!p.value)},[ye(Z(Yt),{size:16,"stroke-width":"2"})],8,Rr),t.embedded?ee("",!0):(z(),$("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:k[2]||(k[2]=M=>m(!1))},[ye(Z(jt),{size:17,"stroke-width":"2"})]))])]),h("nav",kr,[(z(),$(Se,null,Ae(C,M=>h("button",{key:M.id,class:he(["tab-btn",{active:c.value===M.id}]),type:"button","aria-pressed":c.value===M.id,onClick:oe=>c.value=M.id},[(z(),ke($e(M.icon),{size:15,"stroke-width":"2"})),h("span",null,te(M.label),1)],10,Ir)),64))]),h("div",zr,[le(h("section",Or,[h("div",Nr,[h("div",Hr,[k[10]||(k[10]=h("span",{class:"overview-label"},"地图源",-1)),h("strong",null,te(i.value),1)]),h("div",Br,[k[11]||(k[11]=h("span",{class:"overview-label"},"地形",-1)),h("strong",null,te(f.value),1)]),h("div",Ur,[k[12]||(k[12]=h("span",{class:"overview-label"},"模块",-1)),h("strong",null,te(P.value)+"/"+te(T.value.length),1)])]),S.value.length?(z(),$("div",Wr,[(z(!0),$(Se,null,Ae(S.value,M=>(z(),$("button",{key:M.id,class:he(["tool-action",[M.variant||"default",{active:M.active}]]),disabled:M.disabled,type:"button",onClick:oe=>me(H.value.id,M.id)},[(z(),ke($e(se(H.value.id,M.id)),{size:15,"stroke-width":"2"})),pt(" "+te(M.label),1)],10,$r))),128))])):(z(),$("div",Gr," 暂无场景快捷操作 "))],512),[[Ye,c.value==="scene"]]),le(h("section",Vr,[t.basemapOptions.length?(z(),$("div",{key:0,class:he(["option-group",{expanded:w("basemap")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":w("basemap"),onClick:k[3]||(k[3]=M=>E("basemap"))},[h("span",Xr,[ye(Z(vt),{size:16,"stroke-width":"2"}),k[13]||(k[13]=h("span",null,"底图源",-1))]),h("span",Yr,[h("span",null,te(i.value),1),ye(Z(Je),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,qr),w("basemap")?(z(),$("div",jr,[h("div",Zr,[(z(!0),$(Se,null,Ae(t.basemapOptions,M=>(z(),$("button",{key:M.value,class:he(["option-card",{active:M.value===t.activeBasemap}]),type:"button",disabled:M.disabled,"aria-pressed":M.value===t.activeBasemap,title:M.description||M.label,onClick:oe=>K(M)},[h("span",null,te(M.label),1),M.value===t.activeBasemap?(z(),ke(Z(yt),{key:0,size:15,"stroke-width":"2.4"})):ee("",!0)],10,Kr))),128))]),h("form",{class:"custom-basemap-editor",onSubmit:gt(re,["prevent"])},[h("div",Jr,[ye(Z(Zt),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),le(h("input",{"onUpdate:modelValue":k[4]||(k[4]=M=>D.value=M),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Fe,D.value]]),h("button",{class:"custom-basemap-submit",type:"submit",disabled:!D.value.trim(),title:"加载自定义 XYZ"},[ye(Z(Kt),{size:14,"stroke-width":"2"}),k[14]||(k[14]=h("span",null,"加载",-1))],8,Qr)]),t.customBasemapUrl?(z(),$("div",ea,te(t.customBasemapUrl),1)):ee("",!0)],32)])):ee("",!0)],2)):ee("",!0),t.terrainOptions.length?(z(),$("div",{key:1,class:he(["option-group",{expanded:w("terrain")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":w("terrain"),onClick:k[5]||(k[5]=M=>E("terrain"))},[h("span",ra,[ye(Z(xt),{size:16,"stroke-width":"2"}),k[15]||(k[15]=h("span",null,"地形",-1))]),h("span",aa,[h("span",null,te(f.value),1),ye(Z(Je),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,ta),w("terrain")?(z(),$("div",ia,[h("div",na,[(z(!0),$(Se,null,Ae(t.terrainOptions,M=>(z(),$("button",{key:M.value,class:he(["option-card",{active:M.value===t.activeTerrain}]),type:"button","aria-pressed":M.value===t.activeTerrain,title:M.description||M.label,onClick:oe=>R.$emit("update:activeTerrain",M.value)},[h("span",null,te(M.label),1),M.value===t.activeTerrain?(z(),ke(Z(yt),{key:0,size:15,"stroke-width":"2.4"})):ee("",!0)],10,oa))),128))])])):ee("",!0)],2)):ee("",!0),t.overlayOptions.length?(z(),$("div",{key:2,class:he(["option-group",{expanded:w("overlay")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":w("overlay"),onClick:k[6]||(k[6]=M=>E("overlay"))},[h("span",la,[ye(Z(_t),{size:16,"stroke-width":"2"}),k[16]||(k[16]=h("span",null,"叠加层",-1))]),h("span",ca,[h("span",null,te(x.value)+"/"+te(t.overlayOptions.length),1),ye(Z(Je),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,sa),w("overlay")?(z(),$("div",ua,[h("div",da,[(z(!0),$(Se,null,Ae(t.overlayOptions,M=>(z(),$("button",{key:M.value,class:he(["overlay-row",{active:!!M.active}]),type:"button",disabled:M.disabled,"aria-pressed":!!M.active,title:M.description||M.label,onClick:oe=>ve(M)},[h("span",ma,[h("span",fa,te(M.label),1),M.description?(z(),$("span",pa,te(M.description),1)):ee("",!0)]),h("span",{class:he(["toggle-control",{active:!!M.active}]),"aria-hidden":"true"},[...k[17]||(k[17]=[h("span",{class:"toggle-track"},[h("span",{class:"toggle-thumb"})],-1)])],2)],10,ha))),128))])])):ee("",!0)],2)):ee("",!0),!t.basemapOptions.length&&!t.terrainOptions.length&&!t.overlayOptions.length?(z(),$("div",ga," 暂无图层配置项 ")):ee("",!0)],512),[[Ye,c.value==="layers"]]),le(h("section",va,[h("div",ya,[(z(!0),$(Se,null,Ae(T.value,M=>{var oe,xe;return z(),$("article",{key:M.id,class:he(["module-item",{expanded:F(M.id)}])},[h("button",{class:"module-head",type:"button","aria-expanded":F(M.id),onClick:O=>W(M.id)},[h("span",_a,[(z(),ke($e(B(M.id)),{size:16,"stroke-width":"2"}))]),h("span",ba,[h("span",Sa,te(M.title),1),M.description?(z(),$("span",wa,te(M.description),1)):ee("",!0)]),h("span",Ta,[M.status?(z(),$("span",{key:0,class:he(["module-status",M.statusTone||"neutral"])},te(M.status),3)):ee("",!0),ye(Z(Je),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,xa),F(M.id)?(z(),$("div",Ma,[(oe=M.actions)!=null&&oe.length?(z(),$("div",La,[(z(!0),$(Se,null,Ae(M.actions,O=>(z(),$("button",{key:O.id,class:he(["tool-action",[O.variant||"default",{active:O.active}]]),disabled:O.disabled,type:"button",onClick:ie=>me(M.id,O.id)},[(z(),ke($e(se(M.id,O.id)),{size:14,"stroke-width":"2"})),pt(" "+te(O.label),1)],10,Fa))),128))])):ee("",!0),(xe=M.controls)!=null&&xe.length?(z(),$("div",Pa,[(z(!0),$(Se,null,Ae(M.controls,O=>(z(),$("label",{key:O.id,class:he(["control-row",`control-${O.type}`])},[h("span",Ca,[h("span",Aa,te(O.label),1),O.tooltip?(z(),$("span",{key:0,class:"control-help","aria-label":O.tooltip,title:O.tooltip,onClick:k[7]||(k[7]=gt(()=>{},["prevent","stop"]))}," ? ",8,Ea)):ee("",!0)]),O.type==="range"?(z(),$(Se,{key:0},[h("input",{class:"control-range",type:"range",min:O.min,max:O.max,step:O.step,value:O.value,disabled:O.disabled,onInput:ie=>de(M.id,O,ie.target.value)},null,40,Da),h("input",{class:"control-number",type:"number",min:O.min,max:O.max,step:O.step,value:O.value,disabled:O.disabled,onInput:ie=>de(M.id,O,ie.target.value)},null,40,Ra)],64)):O.type==="color"?(z(),$(Se,{key:1},[h("input",{class:"control-color",type:"color",value:O.value,disabled:O.disabled,onInput:ie=>de(M.id,O,ie.target.value)},null,40,ka),h("span",{class:"control-color-swatch",style:Ot({backgroundColor:O.value})},null,4)],64)):O.type==="select"?(z(),$("select",{key:2,class:"control-select",value:O.value,disabled:O.disabled,onChange:ie=>de(M.id,O,ie.target.value)},[(z(!0),$(Se,null,Ae(O.options||[],ie=>(z(),$("option",{key:ie.value,value:ie.value},te(ie.label),9,za))),128))],40,Ia)):O.type==="toggle"?(z(),$("button",{key:3,class:he(["toggle-control",{active:!!O.value}]),type:"button","aria-pressed":!!O.value,disabled:O.disabled,onClick:ie=>de(M.id,O,!O.value)},[...k[18]||(k[18]=[h("span",{class:"toggle-track"},[h("span",{class:"toggle-thumb"})],-1)])],10,Oa)):ee("",!0),O.displayValue?(z(),$("span",Na,te(O.displayValue),1)):ee("",!0)],2))),128))])):ee("",!0)])):ee("",!0)],2)}),128))]),T.value.length?ee("",!0):(z(),$("div",Ha," 暂无可用功能模块 "))],512),[[Ye,c.value==="modules"]])])],2),[[Ye,t.embedded||A.value]])],2))}},Ua=rt(Ba,[["__scopeId","data-v-c2b974d5"]]);function Wa(t){if(!t)throw new Error("Cesium runtime is required for FluidRenderer.");function e(C){return(C==null?void 0:C._view)||(C==null?void 0:C.view)}function r(C){const i=e(C);if(!(i!=null&&i.passState))throw new Error("Cesium scene passState is unavailable.");return i.passState}function n(C){const i=e(C);return(i==null?void 0:i.frustumCommandsList)||(i==null?void 0:i._frustumCommandsList)||[]}const u=`
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
`,d=`
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
`,c=`
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
`,_=`
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
`;class D{constructor(i){this.commandType=i.commandType,this.geometry=i.geometry,this.attributeLocations=i.attributeLocations,this.primitiveType=i.primitiveType,this.uniformMap=i.uniformMap,this.vertexShaderSource=i.vertexShaderSource,this.fragmentShaderSource=i.fragmentShaderSource,this.rawRenderState=i.rawRenderState,this.framebuffer=i.framebuffer,this.isPostRender=i.isPostRender,this.outputTexture=i.outputTexture,this.autoClear=t.defaultValue(i.autoClear,!1),this.preExecute=i.preExecute,this.modelMatrix=t.defaultValue(i.modelMatrix,t.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new t.ClearCommand({color:new t.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:t.Pass.OPAQUE}))}createCommand(i){switch(this.commandType){case"Draw":{const f=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW}),m=t.ShaderProgram.fromCache({context:i,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),w=t.RenderState.fromCache(this.rawRenderState);return new t.DrawCommand({owner:this,vertexArray:f,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:m,framebuffer:this.framebuffer,renderState:w,pass:t.Pass.OPAQUE})}case"Compute":return new t.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(i,f){this.geometry=f;const m=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=m}update(i){this.show&&(t.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(i.context),this.commandToExecute.isPostRender=this.isPostRender),t.defined(this.preExecute)&&this.preExecute(this),t.defined(this.clearCommand)&&i.commandList.push(this.clearCommand),i.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return t.defined(this.commandToExecute)&&(t.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),t.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),t.destroyObject(this)}}class A{constructor(){}static loadText(i){const f=new XMLHttpRequest;return f.open("GET",i,!1),f.send(),f.responseText}static getFullscreenQuad(){return new t.Geometry({attributes:new t.GeometryAttributes({position:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(i){if(t.defined(i.arrayBufferView)){const m={};m.arrayBufferView=i.arrayBufferView,i.source=m,i.flipY=!1}return new t.Texture(i)}static createDepthFramebuffer(i,f,m){return new t.Framebuffer({context:i,colorTextures:[this.createTexture({context:i,width:f,height:m,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(f*m*4)})],depthRenderbuffer:new t.Renderbuffer({context:i,width:f,height:m,format:t.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(i,f,m,w=!1){const E={context:i,colorTextures:[f],destroyAttachments:w};return m&&(E.depthTexture=m),new t.Framebuffer(E)}static createRawRenderState(i){const w={viewport:i.viewport,depthTest:i.depthTest,depthMask:i.depthMask,blending:i.blending};return t.Appearance.getDefaultRenderState(!0,!1,w)}}const x=class x{constructor(i,f={}){if(!i)throw new Error("Cesium Viewer is required");this.viewer=i,this._initConfiguration(f),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(i){this.config={resolution:new t.Cartesian2(i.width||x.DEFAULTS.width,i.height||x.DEFAULTS.height),dimensions:i.dimensions||x.DEFAULTS.dimensions.clone(),heightRange:{min:i.minHeight??x.DEFAULTS.heightRange[0],max:i.maxHeight??x.DEFAULTS.heightRange[1]},baseHeight:i.baseHeight??x.DEFAULTS.baseHeight,fluidParams:i.fluidParams||x.DEFAULTS.fluidParams.clone(),customParams:i.customParams||x.DEFAULTS.customParams.clone(),waterColor:i.waterColor||x.DEFAULTS.waterColor.clone(),lonLat:i.lonLat||[...x.DEFAULTS.lonLat],timeStep:i.timeStep||x.DEFAULTS.timeStep,heightMapSource:i.heightMapSource||x.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(i){const f=Number(i);!Number.isFinite(f)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,f)),this.resetSimulation())}resetSimulation(){var i,f;this._frameCount=0,(f=(i=this.viewer.scene).requestRender)==null||f.call(i)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const i=()=>A.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:i(),B:i(),C:i(),D:i()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(i){if(!(i!=null&&i.arrayBufferView)||!i.width||!i.height)throw new Error("Invalid height map source.");return A.createTexture({context:this.viewer.scene.context,width:i.width,height:i.height,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:i.arrayBufferView,sampler:new t.Sampler({wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var B,se;const i=this.viewer.scene.context,f=A.createDepthFramebuffer(i,this.config.resolution.x,this.config.resolution.y),m=this.viewer.scene,w=m.frameState,E=r(this.viewer.scene),F=m.camera,W=w.camera,K=E.framebuffer,re=t.BoundingRectangle.clone(E.viewport,new t.BoundingRectangle);let q=null,J=[];try{E.viewport.x=0,E.viewport.y=0,E.viewport.width=this.config.resolution.x,E.viewport.height=this.config.resolution.y,E.framebuffer=f,m.camera=this.heightMapCamera,w.camera=this.heightMapCamera,w.context.uniformState.updateCamera(this.heightMapCamera),J=this._processHeightMapShaders(),this._renderDepthPrepass(E);const me=A.createTexture({context:i,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT});return q=A.createFramebuffer(i,me),this._copyTexture(f.getColorTexture(0),q),me}finally{this._restoreHeightMapShaders(J),E.framebuffer=K,t.BoundingRectangle.clone(re,E.viewport),m.camera=F,w.camera=W,W&&w.context.uniformState.updateCamera(W),q&&!((B=q.isDestroyed)!=null&&B.call(q))&&q.destroy(),f&&!((se=f.isDestroyed)!=null&&se.call(f))&&f.destroy()}}_renderDepthPrepass(i){const f=this.viewer.scene.frameState;f.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(w=>w.execute(this.viewer.scene.context,i))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:t.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const i={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:d}),this._createComputePass("B",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:c}),this._createComputePass("C",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:p}),this._createComputePass("D",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:_})]}_createComputePass(i,{uniforms:f,shaderSource:m}){return new D({commandType:"Compute",uniformMap:f,fragmentShaderSource:new t.ShaderSource({sources:[u,m]}),geometry:A.getFullscreenQuad(),outputTexture:this.textures[i],preExecute:w=>w.commandToExecute.outputTexture=this.textures[i]})}_createMainRenderPass(){const i=S([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new D({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new t.ShaderSource({sources:[u,b]}),geometry:this._createBoxGeometry(),modelMatrix:i,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var i,f,m,w;return(w=(m=(f=(i=e(this.viewer.scene))==null?void 0:i.globeDepth)==null?void 0:f.colorFramebufferManager)==null?void 0:m._colorTextures)==null?void 0:w[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(i=>this.viewer.scene.primitives.add(i)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(i){const f=this.viewer.camera.getPickRay(i);return this.viewer.scene.globe.pick(f,this.viewer.scene)}_createOrthographicCamera(){const i=new t.Camera(this.viewer.scene);i.frustum=new t.OrthographicOffCenterFrustum;const[f,m]=this.config.lonLat,w=t.Cartesian3.fromDegrees(f,m,this.config.baseHeight),E=t.Transforms.eastNorthUpToFixedFrame(w),F=i.frustum;F.near=.01,F.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),F.left=-this.config.dimensions.x/2,F.right=this.config.dimensions.x/2,F.bottom=-this.config.dimensions.y/2,F.top=this.config.dimensions.y/2;const W=t.Matrix4.getColumn(E,2,new t.Cartesian3);t.Cartesian3.negate(W,W);const K=t.Matrix4.getColumn(E,1,new t.Cartesian3),re=t.Matrix4.getColumn(E,0,new t.Cartesian3),q=t.Cartesian3.multiplyByScalar(W,-F.far,new t.Cartesian3);return i.position=t.Cartesian3.add(w,q,new t.Cartesian3),i.direction=W,i.up=K,i.right=re,i}destroy(){var i,f;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(m=>{m&&this.viewer.scene.primitives.remove(m)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(m=>{var w;m&&!((w=m.isDestroyed)!=null&&w.call(m))&&m.destroy()}),this.textures={},this._heightMap&&!((f=(i=this._heightMap).isDestroyed)!=null&&f.call(i))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(i,f){const m=this.viewer.scene.context,w=r(this.viewer.scene),E=m.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>i},owner:this}),F=w.framebuffer;w.framebuffer=f,E.execute(m,w),w.framebuffer=F}_getDepthRenderCommands(){var m,w;const i=[],f=n(this.viewer.scene);for(let E=0;E<f.length;++E){const F=f[E],W=(m=F==null?void 0:F.commands)==null?void 0:m[2],K=((w=F==null?void 0:F.indices)==null?void 0:w[2])??(W==null?void 0:W.length)??0;W&&K>0&&i.push(...W.slice(0,K))}return i}_processHeightMapShaders(){const i=[],f=t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),m=t.Matrix4.inverse(f,new t.Matrix4),w=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(F=>{var J;if(!((J=F==null?void 0:F.shaderProgram)!=null&&J.fragmentShaderSource)||!F.uniformMap)return;const W=Object.prototype.hasOwnProperty.call(F.uniformMap,"u_inverseEnuMatrix"),K=F.uniformMap.u_inverseEnuMatrix,re=F.shaderProgram,q=new t.Matrix4;F.uniformMap.u_inverseEnuMatrix=()=>{const B=F.modelMatrix||t.Matrix4.IDENTITY;return t.Matrix4.multiply(m,B,q)},F.heightMap_ShaderProgram||(F.heightMap_ShaderProgram=this._getDerivedShaderProgram(w.context,F.shaderProgram,"Height_Map")),F.shaderProgram=F.heightMap_ShaderProgram,i.push({command:F,hadInverseUniform:W,originalInverseUniform:K,originalShaderProgram:re})}),i}_restoreHeightMapShaders(i){i.forEach(f=>{const{command:m,hadInverseUniform:w,originalInverseUniform:E,originalShaderProgram:F}=f;m!=null&&m.uniformMap&&(m.shaderProgram=F,w?m.uniformMap.u_inverseEnuMatrix=E:delete m.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(i,f,m){let w=i.shaderCache.getDerivedShaderProgram(f,m);return t.defined(w)||(w=this._createHeightMapShaderProgram(i,f,m)),w}_createHeightMapShaderProgram(i,f,m){const w=this._modifyFragmentShader(f.fragmentShaderSource);return i.shaderCache.createDerivedShaderProgram(f,m,{vertexShaderSource:f.vertexShaderSource,fragmentShaderSource:w,attributeLocations:f._attributeLocations})}_modifyFragmentShader(i){const f=i.sources.map(m=>t.ShaderSource.replaceMain(m,"czm_heightMap_main"));return f.push(`
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
            }`]})}};ft(x,"DEFAULTS",{width:1024,height:1024,dimensions:new t.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new t.Cartesian4(.995,.25,1e-4,.03),customParams:new t.Cartesian4(10,20,.2,10),waterColor:new t.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let H=x;const S=(C=[0,0,0],i=[0,0,0],f=[1,1,1])=>{const m=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationX(t.Math.toRadians(i[0]))),w=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationY(t.Math.toRadians(i[1]))),E=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationZ(t.Math.toRadians(i[2])));C instanceof t.Cartesian3||(C=t.Cartesian3.fromDegrees(...C));const F=t.Transforms.eastNorthUpToFixedFrame(C);t.Matrix4.multiply(F,m,F),t.Matrix4.multiply(F,w,F),t.Matrix4.multiply(F,E,F);const W=t.Matrix4.fromScale(new t.Cartesian3(...f));return t.Matrix4.multiply(F,W,new t.Matrix4)},T=`
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
    `;function P(){return new t.PostProcessStage({fragmentShader:T})}return{FluidRenderer:H,createSkyEffect:P}}const $a={key:0,class:"fluid-root"},Ga={class:"fluid-panel"},Va={class:"panel-actions"},qa=["disabled"],Xa={key:0,class:"selected-text"},Ya={class:"param-list"},ja={class:"param-row"},Za={class:"param-row"},Ka={class:"param-row"},Ja={key:0,class:"param-row"},Qa=["min","max","step"],ei=["min","max","step"],ti={class:"param-row color-row"},wt=1024,et=1e4,Tt=1200,ri=100,ai=.01,ii=.03,ni=60,lt=64,oi=160,si={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(t,{expose:e,emit:r}){const n=t,u=r,d=ut(),c=G(10),p=G(20),_=G(3),b=G("#0d4fa3"),D=G(null),A=G(null),H=G(null),S=G(!1),T=G(!1),P=G(null),x=G(null);let C=null,i=null,f=null,m=null,w=null,E=null,F=0;const W=pe(()=>!Number.isFinite(P.value)||!Number.isFinite(x.value)?"":`经度 ${P.value.toFixed(6)} / 纬度 ${x.value.toFixed(6)}`),K=pe(()=>Number.isFinite(A.value)&&Number.isFinite(H.value)),re=pe(()=>{if(!K.value)return 1;const o=Math.abs(H.value-A.value);return Math.max(o/1e3,.01)});ge([c,p,_,b],Ne),ge(D,Ue),ge(()=>n.params,o=>{J(o||{})},{deep:!0,immediate:!0}),ge([S,T,W,D,A,H],B,{immediate:!0}),Xt(()=>{N(!0)});function q(){var v,I;const o=(v=n.getViewer)==null?void 0:v.call(n),s=((I=n.getCesium)==null?void 0:I.call(n))||window.Cesium;if(!o||!s)return d.warning("Cesium 场景尚未就绪。"),null;if(!C){const U=Wa(s);C=U.FluidRenderer,i=U.createSkyEffect}return{viewer:o,Cesium:s}}function J(o){Number.isFinite(Number(o.threshold))&&(c.value=Number(o.threshold)),Number.isFinite(Number(o.blend))&&(p.value=Number(o.blend)),Number.isFinite(Number(o.lightStrength))&&(_.value=Number(o.lightStrength)),_e(o.waterColor)&&(b.value=o.waterColor),Number.isFinite(Number(o.waterLevel))&&(D.value=Number(o.waterLevel))}function B(){u("state-change",{isPicking:S.value,hasFluid:T.value,selectedText:W.value,waterLevel:D.value,waterLevelMin:A.value,waterLevelMax:H.value})}function se(){const o=q();if(!o)return;const{viewer:s,Cesium:v}=o;y(),g(s,v),S.value=!0,f=new v.ScreenSpaceEventHandler(s.scene.canvas),f.setInputAction(I=>{me(s,v,I.position)},v.ScreenSpaceEventType.LEFT_CLICK)}async function me(o,s,v){var at,je;const I=We(o,v);if(!I){d.warning("未选中可用地形位置。");return}const U=++F;y();const X=s.Cartographic.fromCartesian(I),ne=s.Math.toDegrees(X.longitude),Q=s.Math.toDegrees(X.latitude),Me=Number(X.height),be=Number.isFinite(Me)?Me:0,we=new s.Cartesian3(et,et,0);Rt("正在请求模拟范围高度数据...");try{L();const He=Number(c.value)||0,it=Number(p.value)||0,Ze=Number(_.value)||0,Ve=await de(o,s,{lon:ne,lat:Q,centerHeight:be,dimensions:we}),Le=Ie(Ve,be),Ht=Le.baseHeight,Bt=Le.depth,mt=ze(Le,be),Ut=new s.Cartesian3(et,et,Bt);if(U!==F)return;A.value=Le.minHeight,H.value=Le.maxHeight,D.value=mt,Ve||d.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),m=new C(o,{lonLat:[ne,Q],width:wt,height:wt,dimensions:Ut,baseHeight:Ht,minHeight:Le.minHeight,maxHeight:Le.maxHeight,heightMapSource:Ve,waterColor:ae(s,b.value),customParams:new s.Cartesian4(He,it,Ze,10),fluidParams:new s.Cartesian4(.9+Ze/10*.099,Math.min(1,it/50),He/5e4,Ce(mt,Le))}),P.value=ne,x.value=Q,T.value=!0,(je=(at=o.scene).requestRender)==null||je.call(at),d.success("水体流体已创建。")}catch(He){d.error("水体流体创建失败",He),d.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{kt()}}async function de(o,s,v){const I=o==null?void 0:o.terrainProvider,U=R(v.dimensions);if(!I)return null;if(s.EllipsoidTerrainProvider&&I instanceof s.EllipsoidTerrainProvider)return ie(U);if(typeof s.sampleTerrain!="function"&&typeof s.sampleTerrainMostDetailed!="function")return null;try{return await ve(o,s,v,U)}catch(X){if(U<=lt)throw X;return ve(o,s,v,lt)}}async function ve(o,s,v,I){const U=M(s,v,I),X=await oe(s,o.terrainProvider,U);return O(X||U,{size:I})}function R(o){const s=Math.max(Number(o==null?void 0:o.x)||0,Number(o==null?void 0:o.y)||0),v=Math.ceil(s/ni)+1;return k(v,lt,oi)}function k(o,s,v){return Math.max(s,Math.min(v,Math.round(o)))}function M(o,{lon:s,lat:v,centerHeight:I,dimensions:U},X){const ne=o.Cartesian3.fromDegrees(s,v,I),Q=o.Transforms.eastNorthUpToFixedFrame(ne),Me=[],be=Math.max(1,X-1);for(let we=0;we<X;we++){const je=(.5-we/be)*U.y;for(let He=0;He<X;He++){const Ze=(He/be-.5)*U.x,Ve=new o.Cartesian3(Ze,je,0),Le=o.Matrix4.multiplyByPoint(Q,Ve,new o.Cartesian3);Me.push(o.Cartographic.fromCartesian(Le))}}return Me}async function oe(o,s,v){const I=xe(s);return Number.isInteger(I)&&typeof o.sampleTerrain=="function"?o.sampleTerrain(s,I,v):typeof o.sampleTerrainMostDetailed=="function"?o.sampleTerrainMostDetailed(s,v):o.sampleTerrain(s,10,v)}function xe(o){const s=Number(o==null?void 0:o._bottomLevel);return Number.isFinite(s)?Math.max(0,s-1):null}function O(o,{size:s}){var U;const v=Pe(o);if(!v)return null;const I=new Float32Array(s*s*4);for(let X=0;X<s*s;X++){const ne=Number((U=o[X])==null?void 0:U.height),Q=X*4;I[Q]=Number.isFinite(ne)?Te(ne,v.minHeight,v.maxHeight):v.minHeight,I[Q+1]=0,I[Q+2]=0,I[Q+3]=1}return{width:s,height:s,arrayBufferView:I,minHeight:v.minHeight,maxHeight:v.maxHeight}}function ie(o){return{width:o,height:o,arrayBufferView:new Float32Array(o*o*4),minHeight:0,maxHeight:0}}function Pe(o){let s=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;for(const I of o||[]){const U=Number(I==null?void 0:I.height);Number.isFinite(U)&&(s=Math.min(s,U),v=Math.max(v,U))}return!Number.isFinite(s)||!Number.isFinite(v)?null:{minHeight:s,maxHeight:v}}function Ie(o,s){const v=Number(o==null?void 0:o.minHeight),I=Number(o==null?void 0:o.maxHeight);if(Number.isFinite(v)&&Number.isFinite(I)){const ne=Number(s),Q=Number.isFinite(ne)?Math.min(v,I,ne):Math.min(v,I),Me=Number.isFinite(ne)?Math.max(v,I,ne):Math.max(v,I),be=Math.max(Me-Q,ai);return{baseHeight:Q,depth:be,minHeight:Q,maxHeight:Q+be}}const U=Number(s),X=Number.isFinite(U)?U-ri:0;return{baseHeight:X,depth:Tt,minHeight:X,maxHeight:X+Tt}}function ze(o,s){const v=o.minHeight+o.depth*ii,I=Number(s),U=Number.isFinite(I)?I:v;return Te(U,o.minHeight,o.maxHeight)}function Ce(o,s){const v=s.maxHeight-s.minHeight;return!Number.isFinite(v)||v<=0?0:Te((o-s.minHeight)/v,0,1)}function fe(){return!Number.isFinite(A.value)||!Number.isFinite(H.value)?null:{minHeight:Math.min(A.value,H.value),maxHeight:Math.max(A.value,H.value)}}function ae(o,s){const v=Oe(s)||Oe("#0d4fa3");return new o.Cartesian3(v.red,v.green,v.blue)}function ce(){var v;const o=Oe(b.value),s=(v=m==null?void 0:m.config)==null?void 0:v.waterColor;!o||!s||(s.x=o.red,s.y=o.green,s.z=o.blue)}function _e(o){return typeof o=="string"&&/^#[0-9a-f]{6}$/i.test(o)}function Oe(o){return _e(o)?{red:Number.parseInt(o.slice(1,3),16)/255,green:Number.parseInt(o.slice(3,5),16)/255,blue:Number.parseInt(o.slice(5,7),16)/255}:null}function Te(o,s,v){return Math.max(s,Math.min(v,o))}function We(o,s){if(!s)return null;if(o.scene.pickPositionSupported&&typeof o.scene.pickPosition=="function"){const I=o.scene.pickPosition(s);if(I)return I}const v=o.camera.getPickRay(s);return v?o.scene.globe.pick(v,o.scene):null}function Ne(){var I,U,X;if(!(m!=null&&m.config))return;const o=Number(c.value)||0,s=Number(p.value)||0,v=Number(_.value)||0;m.config.customParams&&(m.config.customParams.x=o,m.config.customParams.y=s,m.config.customParams.z=v),m.config.fluidParams&&(m.config.fluidParams.x=.9+v/10*.099,m.config.fluidParams.y=Math.min(1,s/50),m.config.fluidParams.z=o/5e4),ce(),(X=(U=(I=m.viewer)==null?void 0:I.scene)==null?void 0:U.requestRender)==null||X.call(U)}function Ue(){var U,X,ne,Q;if(!((U=m==null?void 0:m.config)!=null&&U.fluidParams))return;const o=fe(),s=Number(D.value);if(!o||!Number.isFinite(s))return;const v=Te(s,o.minHeight,o.maxHeight);if(v!==s){D.value=v;return}const I=Ce(v,o);typeof m.setInitialWaterLevel=="function"?m.setInitialWaterLevel(I):(m.config.fluidParams.w=I,(Q=(ne=(X=m.viewer)==null?void 0:X.scene)==null?void 0:ne.requestRender)==null||Q.call(ne))}function g(o,s){var v,I;if(!E){const U=o.scene;E={shadows:o.shadows,resolutionScale:o.resolutionScale,msaaSamples:U.msaaSamples,depthTestAgainstTerrain:U.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:U.logarithmicDepthBuffer,highDynamicRange:U.highDynamicRange,fogEnabled:(v=U.fog)==null?void 0:v.enabled,showGroundAtmosphere:U.globe.showGroundAtmosphere,skyAtmosphereShow:(I=U.skyAtmosphere)==null?void 0:I.show,enableLighting:U.globe.enableLighting}}o.shadows=!0,o.resolutionScale=1,o.scene.msaaSamples=4,o.scene.globe.depthTestAgainstTerrain=!0,o.scene.logarithmicDepthBuffer=!0,o.scene.highDynamicRange=!0,o.scene.fog&&(o.scene.fog.enabled=!0),o.scene.globe.showGroundAtmosphere=!0,o.scene.skyAtmosphere&&(o.scene.skyAtmosphere.show=!0),o.scene.globe.enableLighting=!0,!w&&i&&(w=i(s),o.scene.postProcessStages.add(w))}function a(o){if(!o||!E)return;const s=o.scene;o.shadows=E.shadows,o.resolutionScale=E.resolutionScale,E.msaaSamples!==void 0&&(s.msaaSamples=E.msaaSamples),s.globe.depthTestAgainstTerrain=E.depthTestAgainstTerrain,s.logarithmicDepthBuffer=E.logarithmicDepthBuffer,s.highDynamicRange=E.highDynamicRange,s.fog&&E.fogEnabled!==void 0&&(s.fog.enabled=E.fogEnabled),s.globe.showGroundAtmosphere=E.showGroundAtmosphere,s.skyAtmosphere&&E.skyAtmosphereShow!==void 0&&(s.skyAtmosphere.show=E.skyAtmosphereShow),s.globe.enableLighting=E.enableLighting,E=null}function l(){N(!1),d.success("水体流体已清除。")}function y(){f&&(f.destroy(),f=null),S.value=!1}function L(){if(m){try{m.destroy()}catch{}m=null,T.value=!1}}function N(o){var v,I,U;const s=(v=n.getViewer)==null?void 0:v.call(n);if(F+=1,y(),L(),P.value=null,x.value=null,D.value=null,A.value=null,H.value=null,s&&w){try{s.scene.postProcessStages.remove(w)}catch{}w=null}o&&s&&a(s),(U=(I=s==null?void 0:s.scene)==null?void 0:I.requestRender)==null||U.call(I)}function V(){N(!0),u("close")}return e({startPickHeightMap:se,clearFluid:l}),(o,s)=>t.headless?ee("",!0):(z(),$("div",$a,[h("div",Ga,[h("div",{class:"panel-head"},[s[9]||(s[9]=h("span",{class:"panel-title"},"水体流体",-1)),h("button",{class:"panel-close",title:"关闭",onClick:V}," × ")]),h("div",Va,[h("button",{class:he(["action-btn primary",{active:S.value}]),onClick:se},te(S.value?"等待选点":"捕捉高度图"),3),h("button",{class:"action-btn",disabled:!T.value&&!S.value,onClick:l}," 清除 ",8,qa)]),W.value?(z(),$("div",Xa,te(W.value),1)):ee("",!0),h("div",Ya,[h("label",ja,[s[10]||(s[10]=h("span",null,"阈值",-1)),le(h("input",{"onUpdate:modelValue":s[0]||(s[0]=v=>c.value=v),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Fe,c.value,void 0,{number:!0}]]),le(h("input",{"onUpdate:modelValue":s[1]||(s[1]=v=>c.value=v),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Fe,c.value,void 0,{number:!0}]])]),h("label",Za,[s[11]||(s[11]=h("span",null,"混合",-1)),le(h("input",{"onUpdate:modelValue":s[2]||(s[2]=v=>p.value=v),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Fe,p.value,void 0,{number:!0}]]),le(h("input",{"onUpdate:modelValue":s[3]||(s[3]=v=>p.value=v),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Fe,p.value,void 0,{number:!0}]])]),h("label",Ka,[s[12]||(s[12]=h("span",null,"光强",-1)),le(h("input",{"onUpdate:modelValue":s[4]||(s[4]=v=>_.value=v),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Fe,_.value,void 0,{number:!0}]]),le(h("input",{"onUpdate:modelValue":s[5]||(s[5]=v=>_.value=v),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Fe,_.value,void 0,{number:!0}]])]),K.value?(z(),$("label",Ja,[s[13]||(s[13]=h("span",null,"水位",-1)),le(h("input",{"onUpdate:modelValue":s[6]||(s[6]=v=>D.value=v),type:"range",min:A.value,max:H.value,step:re.value},null,8,Qa),[[Fe,D.value,void 0,{number:!0}]]),le(h("input",{"onUpdate:modelValue":s[7]||(s[7]=v=>D.value=v),class:"number-input",type:"number",min:A.value,max:H.value,step:re.value},null,8,ei),[[Fe,D.value,void 0,{number:!0}]])])):ee("",!0),h("label",ti,[s[14]||(s[14]=h("span",null,"水色",-1)),le(h("input",{"onUpdate:modelValue":s[8]||(s[8]=v=>b.value=v),class:"color-input",type:"color"},null,512),[[Fe,b.value]]),h("span",{class:"color-swatch",style:Ot({backgroundColor:b.value})},null,4)])])])]))}},li=rt(si,[["__scopeId","data-v-9ecdafb8"]]),dt="https://cdn.jsdelivr.net/npm/cesium@1.110/Build/Cesium/",ci=`${dt}Cesium.js`,ui=`${dt}Widgets/widgets.css`;async function di({ionToken:t}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=dt),await mi(ui,"cesium-widgets-style"),await hi(ci,"cesium-runtime-script");const e=window.Cesium;if(!e)throw new Error("Cesium global 未找到");return Nt(e,t),e}function Nt(t,e){e&&(t!=null&&t.Ion)&&(t.Ion.defaultAccessToken=e)}function hi(t,e){return new Promise((r,n)=>{const u=document.getElementById(e);if(u){if(u.getAttribute("data-loaded")==="true"){r();return}u.addEventListener("load",()=>r(),{once:!0}),u.addEventListener("error",()=>n(new Error(`脚本加载失败: ${t}`)),{once:!0});return}const d=document.createElement("script");d.id=e,d.src=t,d.async=!0,d.onload=()=>{d.setAttribute("data-loaded","true"),r()},d.onerror=()=>n(new Error(`脚本加载失败: ${t}`)),document.head.appendChild(d)})}function mi(t,e){return new Promise((r,n)=>{if(document.getElementById(e)){r();return}const d=document.createElement("link");d.id=e,d.rel="stylesheet",d.href=t,d.onload=()=>r(),d.onerror=()=>n(new Error(`样式加载失败: ${t}`)),document.head.appendChild(d)})}const fi="Asia/Shanghai",pi="UTC+8",gi=new Intl.DateTimeFormat("zh-CN",{timeZone:fi,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function vi(t,e){var r,n,u,d,c,p,_;if(!(!t||!(e!=null&&e.JulianDate))){if((r=t.animation)!=null&&r.viewModel&&(t.animation.viewModel.dateFormatter=(...b)=>xi(t,e,...b),t.animation.viewModel.timeFormatter=(...b)=>_i(t,e,...b)),t.timeline){const b=(...D)=>bi(t,e,...D);t.timeline.makeLabel=b,"_makeLabel"in t.timeline&&(t.timeline._makeLabel=b),(u=(n=t.timeline).updateFromClock)==null||u.call(n),(c=(d=t.timeline).zoomTo)==null||c.call(d,t.clock.startTime,t.clock.stopTime)}(_=(p=t.scene).requestRender)==null||_.call(p)}}function ht(t,e,...r){var p;const n=r.find(yi)||((p=t==null?void 0:t.clock)==null?void 0:p.currentTime);if(!n)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const u=e.JulianDate.toDate(n),d=gi.formatToParts(u),c=Object.fromEntries(d.filter(({type:_})=>_!=="literal").map(({type:_,value:b})=>[_,b]));return{year:c.year||"0000",month:c.month||"01",day:c.day||"01",hour:c.hour||"00",minute:c.minute||"00",second:c.second||"00"}}function yi(t){return t&&typeof t.dayNumber=="number"&&typeof t.secondsOfDay=="number"}function xi(t,e,...r){const{year:n,month:u,day:d}=ht(t,e,...r);return`${n}-${u}-${d}`}function _i(t,e,...r){const{hour:n,minute:u,second:d}=ht(t,e,...r);return`${n}:${u}:${d} ${pi}`}function bi(t,e,...r){const{month:n,day:u,hour:d,minute:c}=ht(t,e,...r);return`${n}-${u} ${d}:${c}`}function Si({getViewer:t}){let e=null,r=null;function n(){var p;const c=t==null?void 0:t();if(c&&((p=c._cesiumWidget)!=null&&p._creditContainer&&(c._cesiumWidget._creditContainer.style.display="none"),u(),e=setInterval(()=>{const _=document.querySelector(".cesium-credit-container");_&&_.innerHTML.length>0&&(_.innerHTML="",_.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const _=document.createElement("style");_.id="cesium-credit-override",_.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(_),r=_}}function u(){var _;const c=t==null?void 0:t();if(!c)return;(_=c._cesiumWidget)!=null&&_._creditContainer&&(c._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",c._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(b=>{b.style.cssText="display: none !important; visibility: hidden !important;",b.innerHTML=""}),c.scene&&c.scene.frameState&&c.scene.frameState.creditDisplay&&(c.scene.frameState.creditDisplay.hasCredits=()=>!1,c.scene.frameState.creditDisplay.destroy=()=>{})}function d(){e&&(clearInterval(e),e=null),r&&(r.remove(),r=null)}return{installCreditHider:n,cleanupCreditHider:d}}function wi({getViewer:t,getCesium:e}){let r=null;const n=G("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function u(){const c=t==null?void 0:t(),p=e==null?void 0:e();!c||!p||(d(),r=new p.ScreenSpaceEventHandler(c.scene.canvas),r.setInputAction(_=>{const b=c.camera.getPickRay(_.endPosition);if(!b)return;const D=c.scene.globe.pick(b,c.scene);if(!D)return;const A=p.Cartographic.fromCartesian(D),H=p.Math.toDegrees(A.longitude).toFixed(6),S=p.Math.toDegrees(A.latitude).toFixed(6),T=A.height.toFixed(2);n.value=`经度: ${H}, 纬度: ${S}, 海拔: ${T}米`},p.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(_=>{const b=_.endPosition,D=_.startPosition;if(!p.defined(c.terrainProvider))return;const A=c.scene.globe.ellipsoid;if(!c.camera.pickEllipsoid(D,A)){const S=c.camera;S.rotate(p.Cartesian3.UNIT_X,-.002*(b.y-D.y)),S.rotate(p.Cartesian3.UNIT_Y,-.002*(b.x-D.x))}},p.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_UP))}function d(){r&&(r.destroy(),r=null)}return{coordinateDisplay:n,setupInteractions:u,cleanupInteractions:d}}function Ti(t,e=""){if(typeof window>"u")return e;try{const r=window.localStorage.getItem(t);return r??e}catch{return e}}function Mi(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(e||""))}catch{}}function tt(t,e){if(typeof window>"u")return e;try{const r=window.localStorage.getItem(t);return r==null?e:r==="true"}catch{return e}}function ct(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(!!e))}catch{}}function Mt(t){if(!t)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:e,DeveloperError:r,Ellipsoid:n,Resource:u,HeightmapTerrainData:d,Rectangle:c,TileAvailability:p,CustomHeightmapTerrainProvider:_}=t;function b(S,T,P,x,C,i){const f=S.tileXYToRectangle(P,x,C);return e(c.intersection(f,T,i))}function D(S){const T=[[[0,0,1,0]]],P=new p(S.tilingScheme,19);for(let x=0;x<T.length;x++){const C=T[x];for(let i=0;i<C.length;i++){const f=C[i];P.addAvailableTileRange(x,f[0],f[1],f[2],f[3])}}return P}function A(S,T,P,x,C){const i=new d({buffer:S._transformBuffer(T),width:S._width,height:S._height,childTileMask:S._getChildTileMask(x,C,P),structure:S._terrainDataStructure});return i._skirtHeight=6e3,S.availability.addAvailableTileRange(P,x,C,x,C),i}class H extends _{constructor(T={}){if(super({...T,ellipsoid:n.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!e(T.url))throw new r("options.url is required.");this._dataType=T.dataType??"int16",this._url=T.url,this._subdomains=T.subdomains,this._token=T.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=D(this)}get availability(){return this._availability}requestTileGeometry(T,P,x,C){if(x>=this._bottomLevel)return Promise.reject(new Error(`Level ${x} is outside supported range.`));if(x<this._topLevel)return Promise.resolve(new d({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(T,P,x),structure:this._terrainDataStructure}));let i=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const m=this._subdomains[(T+P)%this._subdomains.length];i=i.replace("{s}",m)}i=i.replace("{token}",this._token).replace("{x}",T).replace("{y}",P).replace("{z}",x+1);const f=u.fetchArrayBuffer({url:i,request:C});if(f)return f.then(m=>m.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):nr.inflate(m)).then(m=>A(this,m,x,T,P))}getTileDataAvailable(T,P,x){return x<this._bottomLevel}_transformBuffer(T){let P=2;this._dataType==="float"&&(P=4);const x=T;if(x.length!==22500*P)return null;const C=new ArrayBuffer(P),i=new DataView(C),f=this._width,m=this._height,w=new Uint8Array(f*m*4);for(let E=0;E<m;E++)for(let F=0;F<f;F++){const W=Math.floor(149*E/(m-1)),K=Math.floor(149*F/(f-1)),re=P*(150*W+K);let q;P===4?(i.setInt8(0,x[re]),i.setInt8(1,x[re+1]),i.setInt8(2,x[re+2]),i.setInt8(3,x[re+3]),q=i.getFloat32(0,!0)):q=x[re]+256*x[re+1],(q>1e4||q<-2e3)&&(q=0);const J=(q+1e3)/.001,B=4*(E*f+F);w[B]=J/65536,w[B+1]=(J-256*w[B]*256)/256,w[B+2]=J-256*w[B]*256-256*w[B+1],w[B+3]=255}return w}_getVHeightBuffer(){let T=this._vHeightBuffer;if(!e(T)){T=new Uint8ClampedArray(this._width*this._height*4);for(let P=0;P<this._width*this._height*4;)T[P++]=15,T[P++]=66,T[P++]=64,T[P++]=255;this._vHeightBuffer=T}return T}_getChildTileMask(T,P,x){const C=new c,i=this._tilingScheme,f=this._rectangles,m=i.tileXYToRectangle(T,P,x);let w=0;for(let E=0;E<f.length&&w!==15;E++){const F=f[E];if(F.maxLevel<=x)continue;const W=F.rectangle,K=c.intersection(W,m,C);e(K)&&(b(i,W,2*T,2*P,x+1,C)&&(w|=4),b(i,W,2*T+1,2*P,x+1,C)&&(w|=8),b(i,W,2*T,2*P+1,x+1,C)&&(w|=1),b(i,W,2*T+1,2*P+1,x+1,C)&&(w|=2))}return w}}return H}const qe=["0","1","2","3","4","5","6","7"],Xe="https://t{s}.tianditu.gov.cn/",Re="custom-xyz",Lt="cesium_custom_xyz_basemap_url",Li="cesium_tdt_label_layer_visible",Ft="cesium_tdt_boundary_layer_visible",Pt="cesium_tdt_text_label_layer_visible",Ct=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:Re,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],At=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function Fi({getViewer:t,getCesium:e,message:r,backendBaseUrl:n,tiandituToken:u,cesiumIonToken:d}){let c=null,p=null,_=0,b=[];const D=[],A=G([]),H=new Map,S=new Map,T=new Map,P=new Map,x=G("tianditu"),C=G("tianditu"),i=G(Ti(Lt,"")),f=tt(Li,!0),m=G(tt(Ft,f)),w=G(tt(Pt,f)),E=pe(()=>[...Ct.map(a=>a.value!==Re?a:{...a,description:i.value?i.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!i.value}),...A.value]),F=pe(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:m.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:w.value}]);ge(x,a=>{!(t!=null&&t())||!(e!=null&&e())||fe(a)}),ge(i,a=>{Mi(Lt,a)}),ge(C,async a=>{!(t!=null&&t())||!(e!=null&&e())||await ce(a)}),ge(m,a=>{ct(Ft,a),ie()}),ge(w,a=>{ct(Pt,a),ie()});function W(){const a=e==null?void 0:e();if(!a)return[];H.clear(),S.clear();const l=Ct.map(L=>{const N=new a.ProviderViewModel({name:L.label,tooltip:Pi(L),category:"项目底图",iconUrl:Dt(L.value==="google"?"#5ea1ff":L.value===Re?"#f59e0b":"#37d67a",L.value==="google"?"G":L.value===Re?"XY":"TD"),creationFunction:()=>B(L.value)});return H.set(L.value,N),S.set(N,L.value),N}),y=J();return A.value=y.map((L,N)=>{const V=String((L==null?void 0:L.name)||`官方底图 ${N+1}`).trim(),o=Ei(V,N);return H.set(o,L),S.set(L,o),{value:o,label:`官方 · ${V}`,description:String((L==null?void 0:L.tooltip)||V),source:"official"}}),[...l,...y]}function K(){const a=e==null?void 0:e();return a?(T.clear(),P.clear(),At.map(l=>{const y=new a.ProviderViewModel({name:l.label,tooltip:l.description||l.label,category:"项目地形",iconUrl:Dt(l.value==="ellipsoid"?"#a3a3a3":"#d0a449",l.value==="cesiumWorld"?"CW":l.value==="ellipsoid"?"EL":"TE"),creationFunction:()=>Oe(l.value)});return T.set(l.value,y),P.set(y,l.value),y})):[]}function re(a=[]){return H.get(x.value)||a[0]}function q(a=[]){return T.get(C.value)||a[0]}function J(){const a=e==null?void 0:e();if(typeof(a==null?void 0:a.createDefaultImageryProviderViewModels)!="function")return[];try{return a.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function B(a){return a==="google"?me():a===Re?de():se()}function se(){const a=e==null?void 0:e();return[new a.UrlTemplateImageryProvider({url:`${Xe}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:qe,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})]}function me(){const a=e==null?void 0:e();return[new a.UrlTemplateImageryProvider({url:`${n}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20})]}function de(){const a=e==null?void 0:e(),l=Et(i.value);return l.valid?[new a.UrlTemplateImageryProvider({url:l.url,subdomains:l.subdomains,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(r.warning(l.message,{closable:!0}),se())}function ve(){const a=e==null?void 0:e();return new a.UrlTemplateImageryProvider({url:`${Xe}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:qe,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:10})}function R(){const a=e==null?void 0:e();return new a.UrlTemplateImageryProvider({url:`${Xe}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:qe,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})}function k(){var s,v,I,U,X;M();const a=e==null?void 0:e(),l=(v=(s=t==null?void 0:t())==null?void 0:s.baseLayerPicker)==null?void 0:v.viewModel;if(!l||!((I=a==null?void 0:a.knockout)!=null&&I.getObservable))return;const y=a.knockout.getObservable(l,"selectedImagery"),L=a.knockout.getObservable(l,"selectedTerrain"),N=[],V=(U=y==null?void 0:y.subscribe)==null?void 0:U.call(y,ne=>{const Q=S.get(ne);Q&&(x.value!==Q&&(x.value=Q),O())}),o=(X=L==null?void 0:L.subscribe)==null?void 0:X.call(L,ne=>{const Q=P.get(ne);Q&&(C.value!==Q&&(C.value=Q),_e(Q))});V&&N.push(V),o&&N.push(o),b=N}function M(){b.forEach(a=>{var l;return(l=a==null?void 0:a.dispose)==null?void 0:l.call(a)}),b=[]}function oe(){return O(),!0}function xe(){const a=t==null?void 0:t();if(a!=null&&a.imageryLayers)for(;D.length;){const l=D.pop();try{a.imageryLayers.remove(l,!0)}catch{}}}function O(){var a,l,y;ie(),(y=(l=(a=t==null?void 0:t())==null?void 0:a.scene)==null?void 0:l.requestRender)==null||y.call(l)}function ie(){var l,y;const a=t==null?void 0:t();!a||!(e!=null&&e())||(m.value?Pe():ze(),w.value?Ie():Ce(),(y=(l=a.scene).requestRender)==null||y.call(l))}function Pe(){var l,y,L,N;const a=t==null?void 0:t();if(!(a!=null&&a.imageryLayers)||c)return c&&((y=(l=a==null?void 0:a.imageryLayers)==null?void 0:l.raiseToTop)==null||y.call(l,c)),c;try{return c=a.imageryLayers.addImageryProvider(ve()),(N=(L=a.imageryLayers).raiseToTop)==null||N.call(L,c),c}catch(V){return r.error("天地图国界线图层加载失败",V),null}}function Ie(){var l,y,L,N;const a=t==null?void 0:t();if(!(a!=null&&a.imageryLayers)||p)return p&&((y=(l=a==null?void 0:a.imageryLayers)==null?void 0:l.raiseToTop)==null||y.call(l,p)),p;try{return p=a.imageryLayers.addImageryProvider(R()),(N=(L=a.imageryLayers).raiseToTop)==null||N.call(L,p),p}catch(V){return r.error("天地图文字标注图层加载失败",V),null}}function ze(){const a=t==null?void 0:t();if(!(!c||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(c,!0)}catch{}c=null}}function Ce(){const a=t==null?void 0:t();if(!(!p||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(p,!0)}catch{}p=null}}function fe(a,l={}){var V,o,s;const y=t==null?void 0:t();if(!y||!(e!=null&&e()))return!1;const L=(V=y.baseLayerPicker)==null?void 0:V.viewModel,N=H.get(a);if(L&&N){if(xe(),l.forceReload&&L.selectedImagery===N){const v=H.get("tianditu");v&&v!==N&&(L.selectedImagery=v)}return L.selectedImagery!==N&&(L.selectedImagery=N),O(),!0}try{return xe(),B(a).forEach(I=>{D.push(y.imageryLayers.addImageryProvider(I))}),ie(),(s=(o=y.scene).requestRender)==null||s.call(o),!0}catch(v){return r.error("地图源切换失败",v),!1}}function ae(){return ce(C.value)}async function ce(a){var s,v,I,U,X,ne,Q,Me,be;const l=t==null?void 0:t(),y=e==null?void 0:e();if(!l||!y)return!1;const L=(s=l.baseLayerPicker)==null?void 0:s.viewModel,N=T.get(a);if(L&&N)return L.selectedTerrain!==N&&(L.selectedTerrain=N),_e(a),(I=(v=l.scene).requestRender)==null||I.call(v),!0;const V=++_;if(a==="ellipsoid")return l.terrainProvider=new y.EllipsoidTerrainProvider,_e(a),(X=(U=l.scene).requestRender)==null||X.call(U),!0;if(a==="cesiumWorld")try{const we=await Te();return V!==_?!1:(l.terrainProvider=we,_e(a),(Q=(ne=l.scene).requestRender)==null||Q.call(ne),!0)}catch(we){return V!==_||(l.terrainProvider=new y.EllipsoidTerrainProvider,_e("ellipsoid"),r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",we)),!1}const o=Mt(y);try{return l.terrainProvider=new o({url:`${Xe}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:qe,token:u}),_e(a),(be=(Me=l.scene).requestRender)==null||be.call(Me),!0}catch(we){return l.terrainProvider=new y.EllipsoidTerrainProvider,_e("ellipsoid"),r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",we),!1}}function _e(a){var y;const l=t==null?void 0:t();(y=l==null?void 0:l.scene)!=null&&y.globe&&(l.scene.globe.depthTestAgainstTerrain=a!=="ellipsoid")}function Oe(a){const l=e==null?void 0:e();if(a==="ellipsoid")return new l.EllipsoidTerrainProvider;if(a==="cesiumWorld")return Te().catch(L=>(r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",L),We(a,"ellipsoid"),new l.EllipsoidTerrainProvider));const y=Mt(l);try{return new y({url:`${Xe}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:qe,token:u})}catch(L){return r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",L),new l.EllipsoidTerrainProvider}}async function Te(){var y,L;const a=e==null?void 0:e();Nt(a,d);const l={requestWaterMask:!1,requestVertexNormals:!0};if(typeof a.createWorldTerrainAsync=="function")return a.createWorldTerrainAsync(l);if(typeof a.createWorldTerrain=="function")return a.createWorldTerrain(l);if(typeof((y=a.CesiumTerrainProvider)==null?void 0:y.fromIonAssetId)=="function")return a.CesiumTerrainProvider.fromIonAssetId(1,l);if((L=a.IonResource)!=null&&L.fromAssetId&&a.CesiumTerrainProvider){const N=await a.IonResource.fromAssetId(1);return new a.CesiumTerrainProvider({url:N,...l})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}function We(a,l){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{C.value===a&&(C.value=l)},0)}function Ne({overlayId:a,value:l}){if(a==="tdt-boundaries"){m.value=!!l;return}a==="tdt-text-labels"&&(w.value=!!l)}function Ue({url:a}){const l=String(a||"").trim(),y=Et(l);if(!y.valid){r.warning(y.message,{closable:!0});return}if(i.value=l,x.value===Re){fe(Re,{forceReload:!0})&&r.success("已加载自定义 XYZ 图源");return}x.value=Re,r.success("已切换到自定义 XYZ 图源")}function g(){xe(),ze(),Ce(),M()}return{activeBasemap:x,activeTerrain:C,customXyzBasemapUrl:i,basemapOptions:E,terrainOptions:At,overlayOptions:F,createImageryProviderViewModels:W,createTerrainProviderViewModels:K,getSelectedImageryProviderViewModel:re,getSelectedTerrainProviderViewModel:q,bindLayerPickerStateSync:k,addBaseImageryLayers:oe,initCustomTerrain:ae,applyBasemap:fe,applyTerrain:ce,handleOverlayToggle:Ne,handleCustomBasemapSubmit:Ue,cleanupLayers:g}}function Pi(t){return t.value!==Re?t.description||t.label:`${t.description||t.label}
支持 https://server/{z}/{x}/{y}.png`}function Et(t){const e=String(t||"").trim();if(!e)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let r=e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const n=r.match(/\{([a-z0-9])-([a-z0-9])\}/i);let u=[];return n?(u=Ci(n[1],n[2]),r=r.replace(n[0],"{s}")):/\{s\}/i.test(r)&&(u=["a","b","c"]),!/\{z\}/.test(r)||!/\{x\}/.test(r)||!/\{y\}/.test(r)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:r,subdomains:u}:Ai(r)?{valid:!0,message:"",url:r,subdomains:u}:{valid:!1,message:"URL 格式不合法",url:r,subdomains:u}}function Ci(t,e){const r=String(t||"").charCodeAt(0),n=String(e||"").charCodeAt(0);if(!Number.isFinite(r)||!Number.isFinite(n))return[];const u=r<=n?1:-1,d=[];for(let c=r;u>0?c<=n:c>=n;c+=u)d.push(String.fromCharCode(c));return d}function Ai(t){if(/^(https?:)?\/\//i.test(t)||t.startsWith("/"))return!0;try{const e=typeof window<"u"?window.location.origin:"http://localhost",r=new URL(t,e);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}function Ei(t,e){const r=t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${e}_${r||"basemap"}`}function Dt(t,e){const r=String(e||"").replace(/[<>&"']/g,"").slice(0,2),n=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${t}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${r}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(n)}`}function Di({getViewer:t,getCesium:e,message:r}){function n(c){const p=t==null?void 0:t(),_=e==null?void 0:e();if(!p||!_)return;const b=typeof c=="number"?c:2;p.camera.flyTo({destination:_.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-_.Math.PI_OVER_TWO,roll:0},duration:b})}function u(){const c=t==null?void 0:t(),p=e==null?void 0:e();!c||!p||c.camera.flyTo({destination:p.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:p.Math.toRadians(0),pitch:p.Math.toRadians(-25),roll:0},duration:3})}async function d(){const c=t==null?void 0:t(),p=e==null?void 0:e();if(!(!c||!p))try{const _=await p.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");c.scene.primitives.add(_),c.flyTo(_,{duration:3,offset:new p.HeadingPitchRange(p.Math.toRadians(0),p.Math.toRadians(-25),_.boundingSphere.radius*2.5)})}catch(_){r.error(`加载模型失败: ${_}`),r.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:n,flyToEverest:u,loadCustomTileset:d}}const Ri="cesium_tool_panel_open";function ki({fluidPanelRef:t,sceneActions:e={},wind:r={},panelStorageKey:n=Ri}={}){const u=G(tt(n,!0)),d=G({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),c=G({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),p=G({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),_=pe(()=>{var S,T,P,x,C,i;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:d.value.atmosphere||d.value.fog?"启用":"关闭",statusTone:d.value.atmosphere||d.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:d.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:d.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:d.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:d.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(S=r.wind2D)!=null&&S.value?"已加载":"未加载",statusTone:(T=r.wind2D)!=null&&T.value?"success":"neutral",actions:[{id:"load",label:(P=r.wind2D)!=null&&P.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((x=r.wind2D)!=null&&x.value)}],controls:Ii((C=r.windParams)==null?void 0:C.value,!!((i=r.wind2D)!=null&&i.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:p.value.isPicking?"等待选点":p.value.hasFluid?"已创建":"未创建",statusTone:p.value.isPicking?"warning":p.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:p.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:p.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!p.value.hasFluid&&!p.value.isPicking}],controls:zi(c.value,p.value)}]});ge(u,S=>{ct(n,S)});function b({moduleId:S,actionId:T}){var x,C;(C=(x={scene:{home:()=>{var i;return(i=e.flyToHome)==null?void 0:i.call(e)},everest:e.flyToEverest,tileset:e.loadCustomTileset},wind:{load:r.loadSimulatedWind,clear:r.clearWind2D},fluid:{pick:()=>{var i,f;return(f=(i=t==null?void 0:t.value)==null?void 0:i.startPickHeightMap)==null?void 0:f.call(i)},clear:()=>{var i,f;return(f=(i=t==null?void 0:t.value)==null?void 0:i.clearFluid)==null?void 0:f.call(i)}}}[S])==null?void 0:x[T])==null||C.call(x)}function D({moduleId:S,controlId:T,value:P}){var x,C;if(S==="effects"&&T in d.value){d.value={...d.value,[T]:!!P};return}if(S==="wind"&&T in(((x=r.windParams)==null?void 0:x.value)||{})){(C=r.setWindParam)==null||C.call(r,T,P);return}S==="fluid"&&T in c.value&&(c.value={...c.value,[T]:T==="waterColor"?P:Number(P)})}function A(S){const T=Ge(S==null?void 0:S.waterLevel),P=Ge(S==null?void 0:S.waterLevelMin),x=Ge(S==null?void 0:S.waterLevelMax);p.value={isPicking:!!(S!=null&&S.isPicking),hasFluid:!!(S!=null&&S.hasFluid),selectedText:(S==null?void 0:S.selectedText)||"",waterLevel:T,waterLevelMin:P,waterLevelMax:x},T!==null&&(c.value={...c.value,waterLevel:T})}function H(){var S;(S=r.clearWind2D)==null||S.call(r)}return{toolPanelOpen:u,advancedEffectControls:d,fluidParams:c,fluidState:p,toolModules:_,handleToolAction:b,handleToolControlChange:D,handleFluidStateChange:A,cleanupTools:H}}function Ii(t={},e){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:t.speedFactor??1,displayValue:Number(t.speedFactor??1).toFixed(1),disabled:e},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:t.arrowLength??15e3,displayValue:`${Math.round((t.arrowLength??15e3)/1e3)} km`,disabled:e},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:t.trailLength??2e4,displayValue:`${Math.round((t.trailLength??2e4)/1e3)} km`,disabled:e},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:t.alphaFactor??1,displayValue:Number(t.alphaFactor??1).toFixed(2),disabled:e}]}function zi(t,e={}){const r=Ge(e.waterLevelMin),n=Ge(e.waterLevelMax),u=r!==null&&n!==null,d=u?Math.min(r,n):0,c=u?Math.max(r,n):0,p=Ge(t.waterLevel),_=u?Oi(p??d,d,c):0,b=u?Math.max((c-d)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:t.threshold,displayValue:Number(t.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:t.blend,displayValue:Number(t.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:t.lightStrength,displayValue:Number(t.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:d,max:c,step:b,value:_,displayValue:u?`${Ni(_)} m`:"先捕捉",disabled:!u,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:t.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function Ge(t){const e=Number(t);return Number.isFinite(e)?e:null}function Oi(t,e,r){return Math.max(e,Math.min(r,t))}function Ni(t){const e=Math.abs(t);return e>=1e3?t.toFixed(1):e>=10?t.toFixed(2):t.toFixed(3)}const ue={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Hi=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Bi=new Float32Array([0,0,1,0,1,1,0,1]),Ui=new Uint16Array([0,1,2,0,2,3]);function Be(t,e,r){return Math.max(e,Math.min(r,t))}function Y(t,e){const r=Number(t);return Number.isFinite(r)?r:e}function Wi(t,e){const r=e.getParameter(e.MAX_TEXTURE_SIZE),n=Math.min(2048,r),u=Math.max(1,Math.floor(t)),d=Math.sqrt(u),c=Math.log2(d),p=Number.isFinite(c)?Math.round(c):4;let _=Math.pow(2,p);return _=Be(_,16,n),_}function $i(t){const e=t*t,r=new Float32Array(e*4);for(let n=0;n<e;n+=1){const u=n*4;r[u]=Math.random(),r[u+1]=Math.random(),r[u+2]=Math.random(),r[u+3]=Math.random()}return r}function Gi(t){return new Float32Array(t*t*4)}function Vi(t,e,r,n,u){const d=e.createTexture();if(!d)throw new Error("Failed to create wind atlas texture.");e.bindTexture(e.TEXTURE_2D,d),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,r,n,0,e.RGBA,e.FLOAT,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null);let c=!1;return{_context:t,_texture:d,_target:e.TEXTURE_2D,_width:r,_height:n,destroy(){c||(e.deleteTexture(d),c=!0)}}}class qi{constructor(e,r={}){if(!e||!e.scene||!e.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=e,this._scene=e.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=r.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const n={...ue,...r};this.speedFactor=Y(n.speedFactor,ue.speedFactor),this.cullSpeedMin=Y(n.cullSpeedMin,ue.cullSpeedMin),this.cullSpeedMax=Y(n.cullSpeedMax,ue.cullSpeedMax),this.windSpeedMin=Y(n.windSpeedMin,ue.windSpeedMin),this.windSpeedMax=Y(n.windSpeedMax,ue.windSpeedMax),this.arrowLength=Y(n.arrowLength,ue.arrowLength),this.trailLength=Y(n.trailLength,ue.trailLength),this.decaySpeed=Y(n.decaySpeed,ue.decaySpeed),this.alphaFactor=Y(n.alphaFactor,ue.alphaFactor),this.maxWindSpeed=Y(n.maxWindSpeed,ue.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=Y(r.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(e){if(!e||typeof e!="object")throw new Error("Wind2D.loadData requires a valid data object.");const r=Y(e.longitude,NaN),n=Y(e.latitude,NaN),u=Array.isArray(e.altitude)?e.altitude:[],d=Array.isArray(e.sizeMesh)?e.sizeMesh:[],c=Array.isArray(e.count)?e.count:[],p=Array.isArray(e.hspeed)?e.hspeed:[],_=Array.isArray(e.hdir)?e.hdir:[],b=Array.isArray(e.vspeed)?e.vspeed:[];if(!Number.isFinite(r)||!Number.isFinite(n))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const D=u.length;if(D<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(d.length!==D||c.length!==D)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const A=c.map(F=>Math.max(1,Math.floor(Y(F,1)))),H=d.map(F=>Math.max(1,Y(F,1))),S=u.map(F=>Y(F,0)),T=A.reduce((F,W)=>F+W*W,0);if(p.length<T||_.length<T||b.length<T)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=D,this.visibleLayerMin=0,this.visibleLayerMax=D-1,this._altitudes=S.slice(),this._maxNx=Math.max(...A),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*D;const P=new Float32Array(this._atlasWidth*this._atlasHeight*4);let x=0;for(let F=0;F<D;F+=1){const W=A[F],K=W;for(let re=0;re<K;re+=1)for(let q=0;q<W;q+=1){const J=x+re*W+q,B=((F*this._maxNy+re)*this._atlasWidth+q)*4,se=Number(p[J]),me=Number(_[J]),de=Number(b[J]);if(!(Number.isFinite(se)&&Number.isFinite(me))){P[B]=0,P[B+1]=0,P[B+2]=0,P[B+3]=0;continue}const R=me*Math.PI/180;P[B]=se*Math.sin(R),P[B+1]=se*Math.cos(R),P[B+2]=Number.isFinite(de)?de:0,P[B+3]=1}x+=W*K}this._createOrReplaceWindAtlasTexture(P);const C=Math.max(...H),i=this._maxNx*C,f=i/2/111320,m=n*Math.PI/180,w=Math.max(1e-6,Math.abs(Math.cos(m))),E=i/2/(111320*w);this._bounds={minLon:r-E,maxLon:r+E,minLat:n-f,maxLat:n+f,minHeight:Math.min(...S),maxHeight:Math.max(...S)},this._dataPointCount=T,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(e){const r=Math.max(1,Math.floor(Y(e,1))),n=Wi(r,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&n===this._particleTextureSize||(this._particleTextureSize=n,this._particleCount=n*n,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(e){const r=Be(Y(e,this.particleDensity),.05,10);if(this.particleDensity=r,this._dataPointCount<=0)return;const n=Math.max(1,Math.floor(this._dataPointCount*r));this.setParticleCount(n)}setBounds(e,r,n,u){const d=Y(e,NaN),c=Y(r,NaN),p=Y(n,NaN),_=Y(u,NaN);if(!Number.isFinite(d)||!Number.isFinite(c)||!Number.isFinite(p)||!Number.isFinite(_))return;const b=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};b.minLon=Math.min(d,c),b.maxLon=Math.max(d,c),b.minLat=Math.min(p,_),b.maxLat=Math.max(p,_),this._bounds=b,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const e=(this._bounds.minLon+this._bounds.maxLon)*.5,r=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(e,r,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(e){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const u=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[u],this._updateCommand.execute(this._context,e?e.passState:void 0),this._particleState=u,this._drawCommand.modelMatrix=this._modelMatrix,e&&Array.isArray(e.commandList)&&e.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(e){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Vi(this._context,this._gl,this._atlasWidth,this._atlasHeight,e)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const e=this._Cesium,r=this._particleTextureSize,n=$i(r),u=Gi(r);for(let d=0;d<2;d+=1){this._particlePositionTextures[d]=new e.Texture({context:this._context,width:r,height:r,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:n},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[d]=new e.Texture({context:this._context,width:r,height:r,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:u},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._framebuffers[d]=new e.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[d],this._velocityTextures[d]],destroyAttachments:!1});const c=this._framebuffers[d]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,c),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._particlePositionTextures[e]&&(this._particlePositionTextures[e].destroy(),this._particlePositionTextures[e]=null),this._velocityTextures[e]&&(this._velocityTextures[e].destroy(),this._velocityTextures[e]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const e=this._Cesium,r=e.Buffer.createVertexBuffer({context:this._context,typedArray:Hi,usage:e.BufferUsage.STATIC_DRAW}),n=e.Buffer.createVertexBuffer({context:this._context,typedArray:Bi,usage:e.BufferUsage.STATIC_DRAW}),u=e.Buffer.createIndexBuffer({context:this._context,typedArray:Ui,usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:r,componentsPerAttribute:2},{index:1,vertexBuffer:n,componentsPerAttribute:2}],indexBuffer:u})}_buildParticleVertexArray(){const e=this._Cesium,r=new Float32Array(this._drawVertexCount);for(let n=0;n<r.length;n+=1)r[n]=n;this._particleVertexBuffer=e.Buffer.createVertexBuffer({context:this._context,typedArray:r,usage:e.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const e=this._Cesium,r=`#version 300 es
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
}`;this._drawProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:n,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const e=this._Cesium,r=e.RenderState.fromCache({viewport:new e.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:r,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const e=this._Cesium,r=e.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:e.BlendingState.ALPHA_BLEND});this._drawCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:r,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:e.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const e=Be(Math.floor(Y(this.visibleLayerMin,0)),0,this._layerCount-1),r=Be(Math.floor(Y(this.visibleLayerMax,this._layerCount-1)),e,this._layerCount-1);return{min:e,max:r}}_normalizeSpeedRange(e,r){const n=Math.max(1e-4,Y(this.maxWindSpeed,ue.maxWindSpeed)),u=Be(Y(e,0)/n,0,1),d=Be(Y(r,n)/n,0,1);return{min:Math.min(u,d),max:Math.max(u,d)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>Y(this.speedFactor,ue.speedFactor),maxWindSpeed:()=>Math.max(1e-4,Y(this.maxWindSpeed,ue.maxWindSpeed)),decaySpeed:()=>Be(Y(this.decaySpeed,ue.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>Y(this.arrowLength,ue.arrowLength),trailLength:()=>Y(this.trailLength,ue.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Be(Y(this.alphaFactor,ue.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Xi({getViewer:t,getCesium:e,message:r}){const n=G(null),u=G({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function d(){var D,A;const b=t==null?void 0:t();if(n.value){try{(A=(D=b==null?void 0:b.scene)==null?void 0:D.primitives)==null||A.remove(n.value)}catch{}n.value.destroy(),n.value=null}}function c(){const b=t==null?void 0:t(),D=e==null?void 0:e();if(!b||!D){r.error("Cesium 尚未初始化");return}d();const A=Yi(D);n.value=new qi(b,{maxWindSpeed:20,cesium:D,speedFactor:u.value.speedFactor,arrowLength:u.value.arrowLength,trailLength:u.value.trailLength,alphaFactor:u.value.alphaFactor}),n.value.loadData(A),b.scene.primitives.add(n.value),n.value.flyTo(),r.success("风场加载成功，可通过下方滑块调节样式")}function p(){n.value&&(n.value.speedFactor=u.value.speedFactor,n.value.arrowLength=u.value.arrowLength,n.value.trailLength=u.value.trailLength,n.value.alphaFactor=u.value.alphaFactor)}function _(b,D){return b in u.value?(u.value={...u.value,[b]:Number(D)},p(),!0):!1}return{wind2D:n,windParams:u,clearWind2D:d,loadSimulatedWind:c,setWindParam:_}}function Yi(t){const u=[0,2e3,5e3,1e4,15e3],d=[3e4,3e4,25e3,25e3,2e4],c=[30,30,25,25,20],p=c.reduce((H,S)=>H+S*S,0),_=new Array(p),b=new Array(p),D=new Array(p);let A=0;for(let H=0;H<5;H++){const S=c[H],T=c[H],P=d[H];for(let x=0;x<T;x++)for(let C=0;C<S;C++){const i=A+x*S+C,f=(C-S/2)*(P/111320),m=(x-T/2)*(P/111320/Math.cos(t.Math.toRadians(35))),E=Math.atan2(m,f)+Math.PI/2+.2*Math.sin(C*.5)*Math.cos(x*.5);b[i]=t.Math.toDegrees(E)%360;const F=Math.sqrt(f*f+m*m),K=Math.max(0,1-F/15);_[i]=(5+H*2)*K+2*Math.random(),D[i]=.5*Math.sin(C*.3)*Math.cos(x*.3)}A+=S*T}return{longitude:104,latitude:35,altitude:u,sizeMesh:d,count:c,hspeed:_,hdir:b,vspeed:D}}const ji={class:"map-controls-group"},Zi={class:"mouse-position-content"},Ki={__name:"CesiumContainer",setup(t){let e=null,r=null;const n="4267820f43926eaf808d61dc07269beb",u="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzRhZjM0ZC02MmYxLTRhNzgtYTkxNi00YWM2MmMxNmNhMWIiLCJpZCI6MTkzNjkxLCJpYXQiOjE3MDY5NDA2ODF9.mKu1zCK-GOjwDem9-J_Ksv0xEGNsN1zGuShYzOuXJsg",d=ut(),c=G(!1),p=G(null),_=()=>r,b=()=>e||window.Cesium,D=Fi({getViewer:_,getCesium:b,message:d,backendBaseUrl:Gt,tiandituToken:n,cesiumIonToken:u}),{activeBasemap:A,activeTerrain:H,customXyzBasemapUrl:S,basemapOptions:T,terrainOptions:P,overlayOptions:x,createImageryProviderViewModels:C,createTerrainProviderViewModels:i,getSelectedImageryProviderViewModel:f,getSelectedTerrainProviderViewModel:m,bindLayerPickerStateSync:w,addBaseImageryLayers:E,initCustomTerrain:F,handleOverlayToggle:W,handleCustomBasemapSubmit:K,cleanupLayers:re}=D,{coordinateDisplay:q,setupInteractions:J,cleanupInteractions:B}=wi({getViewer:_,getCesium:b}),{installCreditHider:se,cleanupCreditHider:me}=Si({getViewer:_}),de=Di({getViewer:_,getCesium:b,message:d}),{flyToHome:ve}=de,R=Xi({getViewer:_,getCesium:b,message:d}),{toolPanelOpen:k,advancedEffectControls:M,fluidParams:oe,toolModules:xe,handleToolAction:O,handleToolControlChange:ie,handleFluidStateChange:Pe,cleanupTools:Ie}=ki({fluidPanelRef:p,sceneActions:de,wind:R});async function ze(){Rt("正在初始化 3D 场景...");try{if(e=await di({ionToken:u}),!e||!document.getElementById("cesiumContainer"))return;Ce(),J();const fe=E(),ae=await F();c.value=!0,fe&&ae?d.success("天地图基础影像与地形加载成功。"):d.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0})}catch(fe){d.error("Cesium 运行时加载失败",fe),d.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{kt()}}function Ce(){const fe=typeof e.Map=="function"?e.Map:e.Viewer,ae=C(),ce=i();r=new fe("cesiumContainer",{baseLayerPicker:!0,geocoder:!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:ae,selectedImageryProviderViewModel:f(ae),terrainProviderViewModels:ce,selectedTerrainProviderViewModel:m(ce),shouldAnimate:!0}),r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,vi(r,e),or(r),se(),w(),ve(0)}return It(()=>{ze()}),zt(()=>{if(c.value=!1,B(),Ie(),re(),me(),r){try{r.destroy()}catch{}r=null}}),(fe,ae)=>(z(),$(Se,null,[ae[6]||(ae[6]=h("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),c.value?(z(),ke($e(Mr),{key:0,headless:"","get-viewer":_,"get-cesium":b,controls:Z(M)},null,8,["controls"])):ee("",!0),c.value?(z(),ke($e(li),{key:1,ref_key:"fluidPanelRef",ref:p,headless:"","get-viewer":_,"get-cesium":b,params:Z(oe),onStateChange:Z(Pe)},null,40,["params","onStateChange"])):ee("",!0),c.value?(z(),ke(Ua,{key:2,open:Z(k),"onUpdate:open":ae[0]||(ae[0]=ce=>nt(k)?k.value=ce:null),"active-basemap":Z(A),"onUpdate:activeBasemap":ae[1]||(ae[1]=ce=>nt(A)?A.value=ce:null),"active-terrain":Z(H),"onUpdate:activeTerrain":ae[2]||(ae[2]=ce=>nt(H)?H.value=ce:null),"basemap-options":Z(T),"terrain-options":Z(P),"overlay-options":Z(x),"custom-basemap-url":Z(S),modules:Z(xe),onModuleAction:Z(O),onControlChange:Z(ie),onOverlayToggle:Z(W),onCustomBasemapSubmit:Z(K)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):ee("",!0),h("div",ji,[h("div",Zi,te(Z(q)),1),ae[5]||(ae[5]=h("div",{class:"divider"},null,-1)),h("button",{class:"home-btn",title:"回到初始位置",onClick:ae[3]||(ae[3]=(...ce)=>Z(ve)&&Z(ve)(...ce))},[...ae[4]||(ae[4]=[h("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[h("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},un=rt(Ki,[["__scopeId","data-v-131c1981"]]);export{un as default};
