const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-B39pOI_G.js","./vendor-echarts-all-CVx2VYxY.js","./vendor-libs-CdvuqtNs.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var Mt=Object.defineProperty;var Lt=(t,e,r)=>e in t?Mt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var at=(t,e,r)=>Lt(t,typeof e!="symbol"?e+"":e,r);import{_ as Ve,e as Je,K as xt,J as bt,I as Ft}from"./index-DOtz_JjR.js";import{_ as Pt}from"./vendor-runtime-Dp1pzeXC.js";import{C as St,o as Tt,w as he,d as z,c as U,f as g,t as Q,G as oe,W as Ge,X as We,g as ee,r as X,P as At,a as xe,u as Z,F as ye,e as we,n as ue,x as Pe,S as ze,I as it,i as Et,H as ke,q as ve,v as Ct,a4 as Xe}from"./vendor-vue-CmuMwCC6.js";import{af as Ye,ag as je,ah as Dt,X as Rt,e as nt,ac as ot,ai as kt,aj as It,ak as st,H as lt,al as zt,T as ct,a2 as Ot,am as Bt,an as Nt,ao as Ht,ap as Ut,q as Wt,o as Gt,aq as $t}from"./vendor-libs-CdvuqtNs.js";import"./vendor-ol-all-D3od1ozZ.js";import"./vendor-geotiff-DCPfLQJG.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-DbLN0cxH.js";import"./vendor-axios-Bdz_Fv8M.js";function qt(t){var n;const e=t==null?void 0:t.scene,r=e==null?void 0:e.globe;!e||!r||(r.enableLighting=!0,e.sun&&(e.sun.show=!0),e.moon&&(e.moon.show=!0),e.skyBox&&(e.skyBox.show=!0),(n=e.requestRender)==null||n.call(e))}function Vt(t,e){var s;const r=t==null?void 0:t.scene,n=r==null?void 0:r.globe;if(!r||!n)return;jt(r,e),Zt(r),n.enableLighting=!0,n.showGroundAtmosphere=!0,V(n,"dynamicAtmosphereLighting",!0),V(n,"dynamicAtmosphereLightingFromSun",!0),V(n,"atmosphereLightIntensity",11.5),V(n,"atmosphereHueShift",-.015),V(n,"atmosphereSaturationShift",.08),V(n,"atmosphereBrightnessShift",.02),V(n,"lightingFadeInDistance",15e6),V(n,"lightingFadeOutDistance",22e6),V(n,"nightFadeInDistance",9e6),V(n,"nightFadeOutDistance",16e6),$e(e,n,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),$e(e,n,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),V(n,"atmosphereRayleighScaleHeight",1e4),V(n,"atmosphereMieScaleHeight",3200),V(n,"atmosphereMieAnisotropy",.92),!r.skyAtmosphere&&(e!=null&&e.SkyAtmosphere)&&(r.skyAtmosphere=Jt(e));const l=r.skyAtmosphere;l&&(l.show=!0,V(l,"perFragmentAtmosphere",!0),V(l,"dynamicAtmosphereLighting",!0),V(l,"dynamicAtmosphereLightingFromSun",!0),V(l,"hueShift",-.025),V(l,"saturationShift",.08),V(l,"brightnessShift",.03),V(l,"atmosphereLightIntensity",12),$e(e,l,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),$e(e,l,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),V(l,"atmosphereRayleighScaleHeight",1e4),V(l,"atmosphereMieScaleHeight",3200),V(l,"atmosphereMieAnisotropy",.92)),r.sun&&(r.sun.show=!0),r.moon&&(r.moon.show=!0),r.skyBox&&(r.skyBox.show=!0),"sunBloom"in r&&(r.sunBloom=!0),"highDynamicRange"in r&&(r.highDynamicRange=!0),Kt(r),(s=r.requestRender)==null||s.call(r)}function Xt(t){var l;const e=t==null?void 0:t.scene,r=e==null?void 0:e.globe;if(!e||!r)return null;const n=(l=e.postProcessStages)==null?void 0:l.bloom;return{scene:Me(e,["highDynamicRange","sunBloom","light"]),fog:Me(e.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:Me(r,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!e.skyAtmosphere,sky:Me(e.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:Me(e.sun,["show"]),moon:Me(e.moon,["show"]),skyBox:Me(e.skyBox,["show"]),bloom:{props:Me(n,["enabled"]),uniforms:Me(n==null?void 0:n.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Yt(t,e,r){var c,p,x,S;if(!r)return;const n=t==null?void 0:t.scene,l=n==null?void 0:n.globe;if(!n||!l)return;Le(n,r.scene,e),Le(n.fog,r.fog,e),Le(l,r.globe,e),Le(n.sun,r.sun,e),Le(n.moon,r.moon,e),Le(n.skyBox,r.skyBox,e),n.skyAtmosphere&&(Le(n.skyAtmosphere,r.sky,e),r.skyAtmosphereExisted||(n.skyAtmosphere.show=!1));const s=(c=n.postProcessStages)==null?void 0:c.bloom;Le(s,(p=r.bloom)==null?void 0:p.props,e),Le(s==null?void 0:s.uniforms,(x=r.bloom)==null?void 0:x.uniforms,e),(S=n.requestRender)==null||S.call(n)}function jt(t,e){var r;if(e!=null&&e.SunLight)try{t.light=new e.SunLight({color:(r=e.Color)==null?void 0:r.WHITE,intensity:2.35})}catch{t.light=new e.SunLight}V(t.light,"intensity",2.35)}function Zt(t){const e=t==null?void 0:t.fog;e&&(e.enabled=!0,V(e,"density",12e-5),V(e,"minimumBrightness",.035),V(e,"screenSpaceErrorFactor",2),V(e,"visualDensityScalar",.16))}function Kt(t){var r;const e=(r=t==null?void 0:t.postProcessStages)==null?void 0:r.bloom;e&&(e.enabled=!0,e.uniforms&&(V(e.uniforms,"contrast",128),V(e.uniforms,"brightness",-.18),V(e.uniforms,"delta",1),V(e.uniforms,"sigma",2.5),V(e.uniforms,"stepSize",4.2)))}function Jt(t){var e;try{return new t.SkyAtmosphere((e=t.Ellipsoid)==null?void 0:e.WGS84)}catch{return new t.SkyAtmosphere}}function V(t,e,r){t&&e in t&&(t[e]=r)}function $e(t,e,r,n,l,s){!e||!(r in e)||!(t!=null&&t.Cartesian3)||(e[r]=new t.Cartesian3(n,l,s))}function Me(t,e){return t?e.reduce((r,n)=>(n in t&&(r[n]=Qt(t[n])),r),{}):{}}function Le(t,e={},r){!t||!e||Object.entries(e).forEach(([n,l])=>{n in t&&(t[n]=er(l,r))})}function Qt(t){return t&&typeof t=="object"&&"x"in t&&"y"in t&&"z"in t?{__type:"Cartesian3",x:t.x,y:t.y,z:t.z}:t}function er(t,e){return(t==null?void 0:t.__type)==="Cartesian3"&&(e!=null&&e.Cartesian3)?new e.Cartesian3(t.x,t.y,t.z):t}const tr={key:0,class:"advanced-effects-root"},rr={class:"effects-panel"},ar={class:"panel-head"},ir={class:"effect-switches"},nr={class:"switch-item"},or={class:"switch-item"},sr={class:"switch-item"},lr={class:"switch-item"},cr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(t){const e=t,r=Je(),n=X(null),l=X(!1),s=X(!1),c=X(!1),p=X(!1),x=X(!1);let S=null,D=null,C=null,B=!1,w=null,L=null,A=null,f=null,M=null,i=null,m=null,_=null,P=!1,k=null,F=0,N=0,Y=typeof performance<"u"?performance.now():Date.now();function K(){return A||(A=Pt(()=>import("./cesiumFxRuntime-B39pOI_G.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(d=>{var o;const a=(o=d==null?void 0:d.getCesiumFxEchartsRuntime)==null?void 0:o.call(d);if(!a)throw new Error("Cinematic FX 图表运行时加载失败");return L=a,a}).catch(d=>{throw A=null,d}),A)}async function G(){return L||K()}const j={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},y={hdr:null,bloom:null,sky:null};St(()=>{T()}),Tt(()=>{H()}),he(()=>e.controls,d=>{R(d||{})},{deep:!0,immediate:!0});function R(d){Object.prototype.hasOwnProperty.call(d,"fog")&&(l.value=!!d.fog),Object.prototype.hasOwnProperty.call(d,"hbao")&&(s.value=!!d.hbao),Object.prototype.hasOwnProperty.call(d,"tiltShift")&&(c.value=!!d.tiltShift),Object.prototype.hasOwnProperty.call(d,"atmosphere")&&(p.value=!!d.atmosphere)}function T(){let d=0;f=window.setInterval(async()=>{var v,b;d+=1;const a=(v=e.getViewer)==null?void 0:v.call(e),o=((b=e.getCesium)==null?void 0:b.call(e))||window.Cesium;if(a&&o){clearInterval(f),f=null;try{te(a),O(a),de(a,o),Se(a,o),r.success("高级视觉效果已启用。")}catch(I){r.error("高级视觉效果初始化失败",I),r.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}d>=150&&(clearInterval(f),f=null,r.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function te(d){var o,v,b,I,W,J;const a=d==null?void 0:d.scene;if(a){if(typeof a.highDynamicRange=="boolean"&&(y.hdr=a.highDynamicRange),(o=a.postProcessStages)!=null&&o.bloom){const re=a.postProcessStages.bloom;y.bloom={enabled:!!re.enabled,contrast:(v=re.uniforms)==null?void 0:v.contrast,brightness:(b=re.uniforms)==null?void 0:b.brightness,delta:(I=re.uniforms)==null?void 0:I.delta,sigma:(W=re.uniforms)==null?void 0:W.sigma,stepSize:(J=re.uniforms)==null?void 0:J.stepSize}}a.skyAtmosphere&&(y.sky={hueShift:a.skyAtmosphere.hueShift,saturationShift:a.skyAtmosphere.saturationShift,brightnessShift:a.skyAtmosphere.brightnessShift})}}function de(d,a){var v;!((v=d==null?void 0:d.scene)!=null&&v.postProcessStages)||!(a!=null&&a.PostProcessStage)||(Ae(d,a),De(d,a),be(d,a),p.value?fe(d,a,1200):pe(d))}function O(d){var o;const a=d==null?void 0:d.scene;(o=a==null?void 0:a.renderError)!=null&&o.addEventListener&&(a.rethrowRenderErrors=!1,_=a.renderError.addEventListener((v,b)=>{r.error("Cesium 渲染异常，已触发降级保护",b),ae(),P||(P=!0,r.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function ae(){l.value=!1,c.value=!1,s.value=!1,p.value=!1,S&&(S.enabled=!1),D&&(D.enabled=!1),C&&(C.enabled=!1)}function Ae(d,a){S||(S=new a.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new a.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),d.scene.postProcessStages.add(S),S.enabled=l.value)}function De(d,a){var v,b;const o=(v=d==null?void 0:d.scene)==null?void 0:v.postProcessStages;o&&(o.ambientOcclusion?(C=o.ambientOcclusion,B=!1):(b=a==null?void 0:a.PostProcessStageLibrary)!=null&&b.createAmbientOcclusionStage&&(C=a.PostProcessStageLibrary.createAmbientOcclusionStage(),o.add(C),B=!0),C&&(C.enabled=s.value,C.uniforms&&("intensity"in C.uniforms&&(C.uniforms.intensity=4.2),"bias"in C.uniforms&&(C.uniforms.bias=.08),"lengthCap"in C.uniforms&&(C.uniforms.lengthCap=.35),"stepSize"in C.uniforms&&(C.uniforms.stepSize=1.8),"frustumLength"in C.uniforms&&(C.uniforms.frustumLength=1200))))}function be(d,a){D||(D=new a.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),d.scene.postProcessStages.add(D),D.enabled=!1)}function Se(d,a){const o=d==null?void 0:d.scene;o&&(m=o.preRender.addEventListener(()=>{var W;const v=$(d),b=Number(((W=d==null?void 0:d.camera)==null?void 0:W.pitch)??-1.2);F+=1;const I=typeof performance<"u"?performance.now():Date.now();if(I-Y>=1e3&&(N=Math.round(F*1e3/(I-Y)),F=0,Y=I),S&&(S.enabled=l.value,S.uniforms.cameraHeightFactor=ie(v,150,12e3),S.uniforms.fogDensity=55e-5+(1-S.uniforms.cameraHeightFactor)*.00125),C&&(C.enabled=s.value),D){const J=b>-.62,re=J?se((b+.62)/.5):0;D.enabled=c.value&&J,D.uniforms.blurStrength=re}p.value?fe(d,a,v):pe(d)}))}function fe(d,a,o){var J;const v=d==null?void 0:d.scene;if(!v)return;k||(k=Xt(d)),Vt(d,a),typeof v.highDynamicRange=="boolean"&&(v.highDynamicRange=!0);const b=(J=v.postProcessStages)==null?void 0:J.bloom;b&&(b.enabled=!0,b.uniforms&&("contrast"in b.uniforms&&(b.uniforms.contrast=149),"brightness"in b.uniforms&&(b.uniforms.brightness=-.12),"delta"in b.uniforms&&(b.uniforms.delta=1),"sigma"in b.uniforms&&(b.uniforms.sigma=3.25),"stepSize"in b.uniforms&&(b.uniforms.stepSize=5)));const I=v.skyAtmosphere;if(!I)return;const W=ie(o,500,12e4);I.hueShift=-.035+W*.035,I.saturationShift=-.14+W*.09,I.brightnessShift=.03+(1-W)*.08}function pe(d){var b,I;const a=d==null?void 0:d.scene;if(!a)return;const o=((b=e.getCesium)==null?void 0:b.call(e))||window.Cesium;if(k){Yt(d,o,k),k=null;return}typeof a.highDynamicRange=="boolean"&&y.hdr!==null&&(a.highDynamicRange=y.hdr);const v=(I=a.postProcessStages)==null?void 0:I.bloom;v&&y.bloom&&(v.enabled=y.bloom.enabled,v.uniforms&&("contrast"in v.uniforms&&y.bloom.contrast!==void 0&&(v.uniforms.contrast=y.bloom.contrast),"brightness"in v.uniforms&&y.bloom.brightness!==void 0&&(v.uniforms.brightness=y.bloom.brightness),"delta"in v.uniforms&&y.bloom.delta!==void 0&&(v.uniforms.delta=y.bloom.delta),"sigma"in v.uniforms&&y.bloom.sigma!==void 0&&(v.uniforms.sigma=y.bloom.sigma),"stepSize"in v.uniforms&&y.bloom.stepSize!==void 0&&(v.uniforms.stepSize=y.bloom.stepSize))),a.skyAtmosphere&&y.sky&&(a.skyAtmosphere.hueShift=y.sky.hueShift,a.skyAtmosphere.saturationShift=y.sky.saturationShift,a.skyAtmosphere.brightnessShift=y.sky.brightnessShift)}function Te(){M&&(clearInterval(M),M=null)}async function _e(){var v,b;const d=!x.value;if(x.value=d,!d){Te();return}const a=(v=e.getViewer)==null?void 0:v.call(e),o=((b=e.getCesium)==null?void 0:b.call(e))||window.Cesium;if(!a||!o){x.value=!1,r.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ee(a,o),h(a,o),u(a,o)}catch(I){x.value=!1,r.error("图表模块加载失败",I)}}async function Ee(d,a){await G(),await At(),n.value&&(w||(w=L.init(n.value),E()),i||(i=()=>{w==null||w.resize()},window.addEventListener("resize",i)),w.resize(),u(d,a))}function h(d,a){M||(M=window.setInterval(()=>{!w||!x.value||u(d,a)},1200))}function u(d,a){var W;const o=new Date,v=`${me(o.getHours())}:${me(o.getMinutes())}:${me(o.getSeconds())}`,b=Number(($(d)/1e3).toFixed(2)),I=Number(a.Math.toDegrees(((W=d==null?void 0:d.camera)==null?void 0:W.pitch)??0).toFixed(1));le(j.labels,v,20),le(j.cameraHeightKm,b,20),le(j.pitchDeg,I,20),le(j.fps,N,20),w.setOption({xAxis:{data:j.labels},series:[{data:j.cameraHeightKm},{data:j.pitchDeg},{data:j.fps}]})}function E(){w&&w.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function H(){var o,v;f&&(clearInterval(f),f=null),Te();const d=(o=e.getViewer)==null?void 0:o.call(e),a=(v=d==null?void 0:d.scene)==null?void 0:v.postProcessStages;m&&(m(),m=null),_&&(_(),_=null),S&&a&&a.remove(S),S=null,D&&a&&a.remove(D),D=null,C&&(B&&a&&a.remove(C),C=null),B=!1,d&&pe(d),i&&(window.removeEventListener("resize",i),i=null),w&&(w.dispose(),w=null),L=null,P=!1}function $(d){var b,I,W;const a=(I=(b=d==null?void 0:d.scene)==null?void 0:b.globe)==null?void 0:I.ellipsoid,o=(W=d==null?void 0:d.camera)==null?void 0:W.positionWC;if(!a||!o)return 0;const v=a.cartesianToCartographic(o);return Math.max(0,Number((v==null?void 0:v.height)??0))}function ie(d,a,o){return!Number.isFinite(d)||o<=a?0:se((d-a)/(o-a))}function se(d){return Math.min(1,Math.max(0,Number(d)||0))}function le(d,a,o){d.push(a),d.length>o&&d.shift()}function me(d){return String(d).padStart(2,"0")}return(d,a)=>t.headless?ee("",!0):(z(),U("div",tr,[g("div",rr,[g("div",ar,[a[4]||(a[4]=g("span",{class:"panel-title"},"Cinematic FX",-1)),g("button",{class:"panel-btn",onClick:_e},Q(x.value?"隐藏图表":"显示图表"),1)]),g("div",ir,[g("label",nr,[oe(g("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>l.value=o),type:"checkbox"},null,512),[[Ge,l.value]]),a[5]||(a[5]=g("span",null,"电影级高度雾",-1))]),g("label",or,[oe(g("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>s.value=o),type:"checkbox"},null,512),[[Ge,s.value]]),a[6]||(a[6]=g("span",null,"HBAO 微阴影",-1))]),g("label",sr,[oe(g("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>c.value=o),type:"checkbox"},null,512),[[Ge,c.value]]),a[7]||(a[7]=g("span",null,"移轴摄影",-1))]),g("label",lr,[oe(g("input",{"onUpdate:modelValue":a[3]||(a[3]=o=>p.value=o),type:"checkbox"},null,512),[[Ge,p.value]]),a[8]||(a[8]=g("span",null,"动态大气 + Bloom",-1))])]),oe(g("div",{ref_key:"chartRef",ref:n,class:"fx-chart"},null,512),[[We,x.value]])])]))}},ur=Ve(cr,[["__scopeId","data-v-1e562e70"]]),dr={key:0,class:"launcher-count"},hr={class:"panel-header"},fr={class:"panel-title-block"},mr={class:"panel-mark"},pr={class:"panel-copy"},gr={class:"panel-subtitle"},yr={class:"panel-actions"},vr=["title"],_r={class:"panel-tabs","aria-label":"3D 工具分类"},xr=["aria-pressed","onClick"],br={class:"panel-scroll"},Sr={class:"panel-page"},Tr={class:"overview-grid"},wr={class:"overview-tile"},Mr={class:"overview-tile"},Lr={class:"overview-tile"},Fr={key:0,class:"quick-actions"},Pr=["disabled","onClick"],Ar={key:1,class:"empty-state"},Er={class:"panel-page"},Cr={key:0,class:"option-group"},Dr={class:"section-head"},Rr={class:"option-grid"},kr=["disabled","aria-pressed","title","onClick"],Ir={class:"custom-basemap-input-row"},zr=["disabled"],Or={key:0,class:"custom-basemap-current"},Br={key:1,class:"option-group"},Nr={class:"section-head"},Hr={class:"option-grid"},Ur=["aria-pressed","title","onClick"],Wr={key:2,class:"option-group"},Gr={class:"section-head"},$r={class:"overlay-list"},qr=["disabled","aria-pressed","title","onClick"],Vr={class:"overlay-copy"},Xr={class:"overlay-title"},Yr={key:0,class:"overlay-desc"},jr={key:3,class:"empty-state"},Zr={class:"panel-page"},Kr={class:"module-list"},Jr=["aria-expanded","onClick"],Qr={class:"module-icon"},ea={class:"module-copy"},ta={class:"module-title"},ra={key:0,class:"module-desc"},aa={class:"module-head-side"},ia={key:0,class:"module-body"},na={key:0,class:"module-actions"},oa=["disabled","onClick"],sa={key:1,class:"control-list"},la={class:"control-label"},ca=["min","max","step","value","disabled","onInput"],ua=["min","max","step","value","disabled","onInput"],da=["value","disabled","onChange"],ha=["value"],fa=["aria-pressed","disabled","onClick"],ma={key:3,class:"control-value"},pa={key:0,class:"empty-state"},ga={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(t,{emit:e}){const r=t,n=e,l=k(),s=X(l.activeTab||"scene"),c=X(!!l.compactMode),p=X(new Set(l.expandedModuleIds||["effects"])),x=X(r.customBasemapUrl||""),S=ve(()=>r.embedded||r.open),D=ve(()=>r.modules.find(y=>y.id==="scene")||null),C=ve(()=>{var y;return((y=D.value)==null?void 0:y.actions)||[]}),B=ve(()=>r.modules.filter(y=>y.id!=="scene")),w=ve(()=>B.value.filter(y=>y.statusTone==="success"||y.statusTone==="warning").length),L=[{id:"scene",label:"场景",icon:je},{id:"layers",label:"图层",icon:nt},{id:"modules",label:"模块",icon:Ye}],A=ve(()=>{var y;return((y=r.basemapOptions.find(R=>R.value===r.activeBasemap))==null?void 0:y.label)||"未选择"}),f=ve(()=>{var y;return((y=r.terrainOptions.find(R=>R.value===r.activeTerrain))==null?void 0:y.label)||"未选择"});he(()=>r.modules.map(y=>y.id),y=>{y.includes(s.value)||s.value==="scene"||s.value==="layers"||s.value==="modules"||(s.value="scene")},{immediate:!0}),he([s,c,p],F,{deep:!0}),he(()=>r.customBasemapUrl,y=>{y!==x.value&&(x.value=y||"")});function M(y){n("update:open",y)}function i(y){return p.value.has(y)}function m(y){const R=new Set(p.value);R.has(y)?R.delete(y):R.add(y),p.value=R}function _(y){y!=null&&y.disabled||n("update:activeBasemap",y.value)}function P(){n("custom-basemap-submit",{url:x.value})}function k(){if(typeof window>"u")return{};try{const y=window.localStorage.getItem(r.storageKey);return y?JSON.parse(y):{}}catch{return{}}}function F(){if(!(typeof window>"u"))try{window.localStorage.setItem(r.storageKey,JSON.stringify({activeTab:s.value,compactMode:c.value,expandedModuleIds:[...p.value]}))}catch{}}function N(y){return{scene:je,effects:Gt,wind:Wt,fluid:Ut}[y]||Ye}function Y(y,R){var te;return((te={scene:{home:Nt,everest:st,tileset:Bt},wind:{load:Ot,clear:ct},fluid:{pick:lt,clear:ct}}[y])==null?void 0:te[R])||Ht}function K(y,R){n("module-action",{moduleId:y,actionId:R})}function G(y,R,T){const te=R.type==="range"?Number(T):T;n("control-change",{moduleId:y,controlId:R.id,value:te})}function j(y){y.disabled||n("overlay-toggle",{overlayId:y.value,value:!y.active})}return(y,R)=>(z(),U("aside",{class:ue(["cesium-tool-shell",{"is-open":S.value,"is-embedded":t.embedded}])},[!t.embedded&&!S.value?(z(),U("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:R[0]||(R[0]=T=>M(!0))},[xe(Z(Ye),{size:18,"stroke-width":"2"}),R[4]||(R[4]=g("span",null,"高级控制台",-1)),w.value?(z(),U("span",dr,Q(w.value),1)):ee("",!0)])):ee("",!0),oe(g("section",{class:ue(["cesium-tool-panel",{compact:c.value}]),"aria-label":"Cesium 高级控制台"},[g("header",hr,[g("div",fr,[g("span",mr,[xe(Z(je),{size:18,"stroke-width":"2"})]),g("span",pr,[R[5]||(R[5]=g("span",{class:"panel-title"},"3D 高级控制台",-1)),g("span",gr,Q(A.value)+" / "+Q(f.value),1)])]),g("div",yr,[g("button",{class:"icon-btn",type:"button",title:c.value?"切换为舒展布局":"切换为紧凑布局",onClick:R[1]||(R[1]=T=>c.value=!c.value)},[xe(Z(Dt),{size:16,"stroke-width":"2"})],8,vr),t.embedded?ee("",!0):(z(),U("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:R[2]||(R[2]=T=>M(!1))},[xe(Z(Rt),{size:17,"stroke-width":"2"})]))])]),g("nav",_r,[(z(),U(ye,null,we(L,T=>g("button",{key:T.id,class:ue(["tab-btn",{active:s.value===T.id}]),type:"button","aria-pressed":s.value===T.id,onClick:te=>s.value=T.id},[(z(),Pe(ze(T.icon),{size:15,"stroke-width":"2"})),g("span",null,Q(T.label),1)],10,xr)),64))]),g("div",br,[oe(g("section",Sr,[g("div",Tr,[g("div",wr,[R[6]||(R[6]=g("span",{class:"overview-label"},"地图源",-1)),g("strong",null,Q(A.value),1)]),g("div",Mr,[R[7]||(R[7]=g("span",{class:"overview-label"},"地形",-1)),g("strong",null,Q(f.value),1)]),g("div",Lr,[R[8]||(R[8]=g("span",{class:"overview-label"},"模块",-1)),g("strong",null,Q(w.value)+"/"+Q(B.value.length),1)])]),C.value.length?(z(),U("div",Fr,[(z(!0),U(ye,null,we(C.value,T=>(z(),U("button",{key:T.id,class:ue(["tool-action",[T.variant||"default",{active:T.active}]]),disabled:T.disabled,type:"button",onClick:te=>K(D.value.id,T.id)},[(z(),Pe(ze(Y(D.value.id,T.id)),{size:15,"stroke-width":"2"})),it(" "+Q(T.label),1)],10,Pr))),128))])):(z(),U("div",Ar," 暂无场景快捷操作 "))],512),[[We,s.value==="scene"]]),oe(g("section",Er,[t.basemapOptions.length?(z(),U("div",Cr,[g("div",Dr,[xe(Z(nt),{size:16,"stroke-width":"2"}),R[9]||(R[9]=g("span",null,"地图源",-1))]),g("div",Rr,[(z(!0),U(ye,null,we(t.basemapOptions,T=>(z(),U("button",{key:T.value,class:ue(["option-card",{active:T.value===t.activeBasemap}]),type:"button",disabled:T.disabled,"aria-pressed":T.value===t.activeBasemap,title:T.description||T.label,onClick:te=>_(T)},[g("span",null,Q(T.label),1),T.value===t.activeBasemap?(z(),Pe(Z(ot),{key:0,size:15,"stroke-width":"2.4"})):ee("",!0)],10,kr))),128))]),g("form",{class:"custom-basemap-editor",onSubmit:Et(P,["prevent"])},[g("div",Ir,[xe(Z(kt),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),oe(g("input",{"onUpdate:modelValue":R[3]||(R[3]=T=>x.value=T),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[ke,x.value]]),g("button",{class:"custom-basemap-submit",type:"submit",disabled:!x.value.trim(),title:"加载自定义 XYZ"},[xe(Z(It),{size:14,"stroke-width":"2"}),R[10]||(R[10]=g("span",null,"加载",-1))],8,zr)]),t.customBasemapUrl?(z(),U("div",Or,Q(t.customBasemapUrl),1)):ee("",!0)],32)])):ee("",!0),t.terrainOptions.length?(z(),U("div",Br,[g("div",Nr,[xe(Z(st),{size:16,"stroke-width":"2"}),R[11]||(R[11]=g("span",null,"地形",-1))]),g("div",Hr,[(z(!0),U(ye,null,we(t.terrainOptions,T=>(z(),U("button",{key:T.value,class:ue(["option-card",{active:T.value===t.activeTerrain}]),type:"button","aria-pressed":T.value===t.activeTerrain,title:T.description||T.label,onClick:te=>y.$emit("update:activeTerrain",T.value)},[g("span",null,Q(T.label),1),T.value===t.activeTerrain?(z(),Pe(Z(ot),{key:0,size:15,"stroke-width":"2.4"})):ee("",!0)],10,Ur))),128))])])):ee("",!0),t.overlayOptions.length?(z(),U("div",Wr,[g("div",Gr,[xe(Z(lt),{size:16,"stroke-width":"2"}),R[12]||(R[12]=g("span",null,"叠加层",-1))]),g("div",$r,[(z(!0),U(ye,null,we(t.overlayOptions,T=>(z(),U("button",{key:T.value,class:ue(["overlay-row",{active:!!T.active}]),type:"button",disabled:T.disabled,"aria-pressed":!!T.active,title:T.description||T.label,onClick:te=>j(T)},[g("span",Vr,[g("span",Xr,Q(T.label),1),T.description?(z(),U("span",Yr,Q(T.description),1)):ee("",!0)]),g("span",{class:ue(["toggle-control",{active:!!T.active}]),"aria-hidden":"true"},[...R[13]||(R[13]=[g("span",{class:"toggle-track"},[g("span",{class:"toggle-thumb"})],-1)])],2)],10,qr))),128))])])):ee("",!0),!t.basemapOptions.length&&!t.terrainOptions.length&&!t.overlayOptions.length?(z(),U("div",jr," 暂无图层配置项 ")):ee("",!0)],512),[[We,s.value==="layers"]]),oe(g("section",Zr,[g("div",Kr,[(z(!0),U(ye,null,we(B.value,T=>{var te,de;return z(),U("article",{key:T.id,class:ue(["module-item",{expanded:i(T.id)}])},[g("button",{class:"module-head",type:"button","aria-expanded":i(T.id),onClick:O=>m(T.id)},[g("span",Qr,[(z(),Pe(ze(N(T.id)),{size:16,"stroke-width":"2"}))]),g("span",ea,[g("span",ta,Q(T.title),1),T.description?(z(),U("span",ra,Q(T.description),1)):ee("",!0)]),g("span",aa,[T.status?(z(),U("span",{key:0,class:ue(["module-status",T.statusTone||"neutral"])},Q(T.status),3)):ee("",!0),xe(Z(zt),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Jr),i(T.id)?(z(),U("div",ia,[(te=T.actions)!=null&&te.length?(z(),U("div",na,[(z(!0),U(ye,null,we(T.actions,O=>(z(),U("button",{key:O.id,class:ue(["tool-action",[O.variant||"default",{active:O.active}]]),disabled:O.disabled,type:"button",onClick:ae=>K(T.id,O.id)},[(z(),Pe(ze(Y(T.id,O.id)),{size:14,"stroke-width":"2"})),it(" "+Q(O.label),1)],10,oa))),128))])):ee("",!0),(de=T.controls)!=null&&de.length?(z(),U("div",sa,[(z(!0),U(ye,null,we(T.controls,O=>(z(),U("label",{key:O.id,class:ue(["control-row",`control-${O.type}`])},[g("span",la,Q(O.label),1),O.type==="range"?(z(),U(ye,{key:0},[g("input",{class:"control-range",type:"range",min:O.min,max:O.max,step:O.step,value:O.value,disabled:O.disabled,onInput:ae=>G(T.id,O,ae.target.value)},null,40,ca),g("input",{class:"control-number",type:"number",min:O.min,max:O.max,step:O.step,value:O.value,disabled:O.disabled,onInput:ae=>G(T.id,O,ae.target.value)},null,40,ua)],64)):O.type==="select"?(z(),U("select",{key:1,class:"control-select",value:O.value,disabled:O.disabled,onChange:ae=>G(T.id,O,ae.target.value)},[(z(!0),U(ye,null,we(O.options||[],ae=>(z(),U("option",{key:ae.value,value:ae.value},Q(ae.label),9,ha))),128))],40,da)):O.type==="toggle"?(z(),U("button",{key:2,class:ue(["toggle-control",{active:!!O.value}]),type:"button","aria-pressed":!!O.value,disabled:O.disabled,onClick:ae=>G(T.id,O,!O.value)},[...R[14]||(R[14]=[g("span",{class:"toggle-track"},[g("span",{class:"toggle-thumb"})],-1)])],10,fa)):ee("",!0),O.displayValue?(z(),U("span",ma,Q(O.displayValue),1)):ee("",!0)],2))),128))])):ee("",!0)])):ee("",!0)],2)}),128))]),B.value.length?ee("",!0):(z(),U("div",pa," 暂无可用功能模块 "))],512),[[We,s.value==="modules"]])])],2),[[We,t.embedded||S.value]])],2))}},ya=Ve(ga,[["__scopeId","data-v-1d60f149"]]);function va(t){if(!t)throw new Error("Cesium runtime is required for FluidRenderer.");function e(M){return(M==null?void 0:M._view)||(M==null?void 0:M.view)}function r(M){const i=e(M);if(!(i!=null&&i.passState))throw new Error("Cesium scene passState is unavailable.");return i.passState}function n(M){const i=e(M);return(i==null?void 0:i.frustumCommandsList)||(i==null?void 0:i._frustumCommandsList)||[]}const l=`
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
`,x=`
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
`,S=`
// Created by David Gallardo - xjorma/2021
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0
#define AA
#define GAMMA 1
uniform sampler2D iChannel0;
uniform sampler2D heightMap;
uniform sampler2D colorTexture;
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
    vec3 waterColor = vec3(0.05, 0.15, 0.45);
    return mix(landColor, waterColor, smoothstep(0.001, 0.02, waterDepth));
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
        vec3 color = vec3(0.,0.,0.4);
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
`;class D{constructor(i){this.commandType=i.commandType,this.geometry=i.geometry,this.attributeLocations=i.attributeLocations,this.primitiveType=i.primitiveType,this.uniformMap=i.uniformMap,this.vertexShaderSource=i.vertexShaderSource,this.fragmentShaderSource=i.fragmentShaderSource,this.rawRenderState=i.rawRenderState,this.framebuffer=i.framebuffer,this.isPostRender=i.isPostRender,this.outputTexture=i.outputTexture,this.autoClear=t.defaultValue(i.autoClear,!1),this.preExecute=i.preExecute,this.modelMatrix=t.defaultValue(i.modelMatrix,t.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new t.ClearCommand({color:new t.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:t.Pass.OPAQUE}))}createCommand(i){switch(this.commandType){case"Draw":{const m=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW}),_=t.ShaderProgram.fromCache({context:i,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),P=t.RenderState.fromCache(this.rawRenderState);return new t.DrawCommand({owner:this,vertexArray:m,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:_,framebuffer:this.framebuffer,renderState:P,pass:t.Pass.OPAQUE})}case"Compute":return new t.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(i,m){this.geometry=m;const _=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=_}update(i){this.show&&(t.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(i.context),this.commandToExecute.isPostRender=this.isPostRender),t.defined(this.preExecute)&&this.preExecute(this),t.defined(this.clearCommand)&&i.commandList.push(this.clearCommand),i.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return t.defined(this.commandToExecute)&&(t.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),t.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),t.destroyObject(this)}}class C{constructor(){}static loadText(i){const m=new XMLHttpRequest;return m.open("GET",i,!1),m.send(),m.responseText}static getFullscreenQuad(){return new t.Geometry({attributes:new t.GeometryAttributes({position:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(i){if(t.defined(i.arrayBufferView)){const _={};_.arrayBufferView=i.arrayBufferView,i.source=_,i.flipY=!1}return new t.Texture(i)}static createDepthFramebuffer(i,m,_){return new t.Framebuffer({context:i,colorTextures:[this.createTexture({context:i,width:m,height:_,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(m*_*4)})],depthRenderbuffer:new t.Renderbuffer({context:i,width:m,height:_,format:t.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(i,m,_,P=!1){const k={context:i,colorTextures:[m],destroyAttachments:P};return _&&(k.depthTexture=_),new t.Framebuffer(k)}static createRawRenderState(i){const P={viewport:i.viewport,depthTest:i.depthTest,depthMask:i.depthMask,blending:i.blending};return t.Appearance.getDefaultRenderState(!0,!1,P)}}const f=class f{constructor(i,m={}){if(!i)throw new Error("Cesium Viewer is required");this.viewer=i,this._initConfiguration(m),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(i){this.config={resolution:new t.Cartesian2(i.width||f.DEFAULTS.width,i.height||f.DEFAULTS.height),dimensions:i.dimensions||f.DEFAULTS.dimensions.clone(),heightRange:{min:i.minHeight??f.DEFAULTS.heightRange[0],max:i.maxHeight??f.DEFAULTS.heightRange[1]},baseHeight:i.baseHeight??f.DEFAULTS.baseHeight,fluidParams:i.fluidParams||f.DEFAULTS.fluidParams.clone(),customParams:i.customParams||f.DEFAULTS.customParams.clone(),lonLat:i.lonLat||[...f.DEFAULTS.lonLat],timeStep:i.timeStep||f.DEFAULTS.timeStep,heightMapSource:i.heightMapSource||f.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const i=()=>C.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:i(),B:i(),C:i(),D:i()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(i){if(!(i!=null&&i.arrayBufferView)||!i.width||!i.height)throw new Error("Invalid height map source.");return C.createTexture({context:this.viewer.scene.context,width:i.width,height:i.height,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:i.arrayBufferView,sampler:new t.Sampler({wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var y,R;const i=this.viewer.scene.context,m=C.createDepthFramebuffer(i,this.config.resolution.x,this.config.resolution.y),_=this.viewer.scene,P=_.frameState,k=r(this.viewer.scene),F=_.camera,N=P.camera,Y=k.framebuffer,K=t.BoundingRectangle.clone(k.viewport,new t.BoundingRectangle);let G=null,j=[];try{k.viewport.x=0,k.viewport.y=0,k.viewport.width=this.config.resolution.x,k.viewport.height=this.config.resolution.y,k.framebuffer=m,_.camera=this.heightMapCamera,P.camera=this.heightMapCamera,P.context.uniformState.updateCamera(this.heightMapCamera),j=this._processHeightMapShaders(),this._renderDepthPrepass(k);const T=C.createTexture({context:i,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT});return G=C.createFramebuffer(i,T),this._copyTexture(m.getColorTexture(0),G),T}finally{this._restoreHeightMapShaders(j),k.framebuffer=Y,t.BoundingRectangle.clone(K,k.viewport),_.camera=F,P.camera=N,N&&P.context.uniformState.updateCamera(N),G&&!((y=G.isDestroyed)!=null&&y.call(G))&&G.destroy(),m&&!((R=m.isDestroyed)!=null&&R.call(m))&&m.destroy()}}_renderDepthPrepass(i){const m=this.viewer.scene.frameState;m.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(P=>P.execute(this.viewer.scene.context,i))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:t.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const i={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:s}),this._createComputePass("B",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:c}),this._createComputePass("C",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:p}),this._createComputePass("D",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:x})]}_createComputePass(i,{uniforms:m,shaderSource:_}){return new D({commandType:"Compute",uniformMap:m,fragmentShaderSource:new t.ShaderSource({sources:[l,_]}),geometry:C.getFullscreenQuad(),outputTexture:this.textures[i],preExecute:P=>P.commandToExecute.outputTexture=this.textures[i]})}_createMainRenderPass(){const i=w([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new D({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new t.ShaderSource({sources:[l,S]}),geometry:this._createBoxGeometry(),modelMatrix:i,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,colorTexture:()=>{var i,m,_,P;return(P=(_=(m=(i=e(this.viewer.scene))==null?void 0:i.globeDepth)==null?void 0:m.colorFramebufferManager)==null?void 0:_._colorTextures)==null?void 0:P[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(i=>this.viewer.scene.primitives.add(i)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(i){const m=this.viewer.camera.getPickRay(i);return this.viewer.scene.globe.pick(m,this.viewer.scene)}_createOrthographicCamera(){const i=new t.Camera(this.viewer.scene);i.frustum=new t.OrthographicOffCenterFrustum;const[m,_]=this.config.lonLat,P=t.Cartesian3.fromDegrees(m,_,this.config.baseHeight),k=t.Transforms.eastNorthUpToFixedFrame(P),F=i.frustum;F.near=.01,F.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),F.left=-this.config.dimensions.x/2,F.right=this.config.dimensions.x/2,F.bottom=-this.config.dimensions.y/2,F.top=this.config.dimensions.y/2;const N=t.Matrix4.getColumn(k,2,new t.Cartesian3);t.Cartesian3.negate(N,N);const Y=t.Matrix4.getColumn(k,1,new t.Cartesian3),K=t.Matrix4.getColumn(k,0,new t.Cartesian3),G=t.Cartesian3.multiplyByScalar(N,-F.far,new t.Cartesian3);return i.position=t.Cartesian3.add(P,G,new t.Cartesian3),i.direction=N,i.up=Y,i.right=K,i}destroy(){var i,m;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(_=>{_&&this.viewer.scene.primitives.remove(_)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(_=>{var P;_&&!((P=_.isDestroyed)!=null&&P.call(_))&&_.destroy()}),this.textures={},this._heightMap&&!((m=(i=this._heightMap).isDestroyed)!=null&&m.call(i))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(i,m){const _=this.viewer.scene.context,P=r(this.viewer.scene),k=_.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>i},owner:this}),F=P.framebuffer;P.framebuffer=m,k.execute(_,P),P.framebuffer=F}_getDepthRenderCommands(){var _,P;const i=[],m=n(this.viewer.scene);for(let k=0;k<m.length;++k){const F=m[k],N=(_=F==null?void 0:F.commands)==null?void 0:_[2],Y=((P=F==null?void 0:F.indices)==null?void 0:P[2])??(N==null?void 0:N.length)??0;N&&Y>0&&i.push(...N.slice(0,Y))}return i}_processHeightMapShaders(){const i=[],m=t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),_=t.Matrix4.inverse(m,new t.Matrix4),P=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(F=>{var j;if(!((j=F==null?void 0:F.shaderProgram)!=null&&j.fragmentShaderSource)||!F.uniformMap)return;const N=Object.prototype.hasOwnProperty.call(F.uniformMap,"u_inverseEnuMatrix"),Y=F.uniformMap.u_inverseEnuMatrix,K=F.shaderProgram,G=new t.Matrix4;F.uniformMap.u_inverseEnuMatrix=()=>{const y=F.modelMatrix||t.Matrix4.IDENTITY;return t.Matrix4.multiply(_,y,G)},F.heightMap_ShaderProgram||(F.heightMap_ShaderProgram=this._getDerivedShaderProgram(P.context,F.shaderProgram,"Height_Map")),F.shaderProgram=F.heightMap_ShaderProgram,i.push({command:F,hadInverseUniform:N,originalInverseUniform:Y,originalShaderProgram:K})}),i}_restoreHeightMapShaders(i){i.forEach(m=>{const{command:_,hadInverseUniform:P,originalInverseUniform:k,originalShaderProgram:F}=m;_!=null&&_.uniformMap&&(_.shaderProgram=F,P?_.uniformMap.u_inverseEnuMatrix=k:delete _.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(i,m,_){let P=i.shaderCache.getDerivedShaderProgram(m,_);return t.defined(P)||(P=this._createHeightMapShaderProgram(i,m,_)),P}_createHeightMapShaderProgram(i,m,_){const P=this._modifyFragmentShader(m.fragmentShaderSource);return i.shaderCache.createDerivedShaderProgram(m,_,{vertexShaderSource:m.vertexShaderSource,fragmentShaderSource:P,attributeLocations:m._attributeLocations})}_modifyFragmentShader(i){const m=i.sources.map(_=>t.ShaderSource.replaceMain(_,"czm_heightMap_main"));return m.push(`
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
            }`]})}};at(f,"DEFAULTS",{width:1024,height:1024,dimensions:new t.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new t.Cartesian4(.995,.25,1e-4,.03),customParams:new t.Cartesian4(10,20,.2,10),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let B=f;const w=(M=[0,0,0],i=[0,0,0],m=[1,1,1])=>{const _=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationX(t.Math.toRadians(i[0]))),P=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationY(t.Math.toRadians(i[1]))),k=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationZ(t.Math.toRadians(i[2])));M instanceof t.Cartesian3||(M=t.Cartesian3.fromDegrees(...M));const F=t.Transforms.eastNorthUpToFixedFrame(M);t.Matrix4.multiply(F,_,F),t.Matrix4.multiply(F,P,F),t.Matrix4.multiply(F,k,F);const N=t.Matrix4.fromScale(new t.Cartesian3(...m));return t.Matrix4.multiply(F,N,new t.Matrix4)},L=`
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
    `;function A(){return new t.PostProcessStage({fragmentShader:L})}return{FluidRenderer:B,createSkyEffect:A}}const _a={key:0,class:"fluid-root"},xa={class:"fluid-panel"},ba={class:"panel-actions"},Sa=["disabled"],Ta={key:0,class:"selected-text"},wa={class:"param-list"},Ma={class:"param-row"},La={class:"param-row"},Fa={class:"param-row"},ut=1024,dt=1e4,Pa=1200,Aa=60,Ze=64,Ea=160,Ca={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(t,{expose:e,emit:r}){const n=t,l=r,s=Je(),c=X(10),p=X(20),x=X(3),S=X(!1),D=X(!1),C=X(null),B=X(null);let w=null,L=null,A=null,f=null,M=null,i=null,m=0;const _=ve(()=>!Number.isFinite(C.value)||!Number.isFinite(B.value)?"":`经度 ${C.value.toFixed(6)} / 纬度 ${B.value.toFixed(6)}`);he([c,p,x],De),he(()=>n.params,h=>{k(h||{})},{deep:!0,immediate:!0}),he([S,D,_],F,{immediate:!0}),Ct(()=>{_e(!0)});function P(){var E,H;const h=(E=n.getViewer)==null?void 0:E.call(n),u=((H=n.getCesium)==null?void 0:H.call(n))||window.Cesium;if(!h||!u)return s.warning("Cesium 场景尚未就绪。"),null;if(!w){const $=va(u);w=$.FluidRenderer,L=$.createSkyEffect}return{viewer:h,Cesium:u}}function k(h){Number.isFinite(Number(h.threshold))&&(c.value=Number(h.threshold)),Number.isFinite(Number(h.blend))&&(p.value=Number(h.blend)),Number.isFinite(Number(h.lightStrength))&&(x.value=Number(h.lightStrength))}function F(){l("state-change",{isPicking:S.value,hasFluid:D.value,selectedText:_.value})}function N(){const h=P();if(!h)return;const{viewer:u,Cesium:E}=h;pe(),be(u,E),S.value=!0,A=new E.ScreenSpaceEventHandler(u.scene.canvas),A.setInputAction(H=>{Y(u,E,H.position)},E.ScreenSpaceEventType.LEFT_CLICK)}async function Y(h,u,E){var b,I;const H=Ae(h,E);if(!H){s.warning("未选中可用地形位置。");return}const $=++m;pe();const ie=u.Cartographic.fromCartesian(H),se=u.Math.toDegrees(ie.longitude),le=u.Math.toDegrees(ie.latitude),me=Math.max(0,Number(ie.height)||0),d=100,a=Pa,o=Math.max(0,me-d),v=new u.Cartesian3(dt,dt,a);xt("正在请求模拟范围高度数据...");try{Te();const W=Number(c.value)||0,J=Number(p.value)||0,re=Number(x.value)||0,ce=await K(h,u,{lon:se,lat:le,baseHeight:o,dimensions:v});if($!==m)return;ce||s.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),f=new w(h,{lonLat:[se,le],width:ut,height:ut,dimensions:v,baseHeight:o,minHeight:0,maxHeight:a,heightMapSource:ce,customParams:new u.Cartesian4(W,J,re,10),fluidParams:new u.Cartesian4(.9+re/10*.099,Math.min(1,J/50),W/5e4,.03)}),C.value=se,B.value=le,D.value=!0,(I=(b=h.scene).requestRender)==null||I.call(b),s.success("水体流体已创建。")}catch(W){s.error("水体流体创建失败",W),s.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{bt()}}async function K(h,u,E){const H=h==null?void 0:h.terrainProvider,$=j(E.dimensions);if(!H)return null;if(u.EllipsoidTerrainProvider&&H instanceof u.EllipsoidTerrainProvider)return O($);if(typeof u.sampleTerrain!="function"&&typeof u.sampleTerrainMostDetailed!="function")return null;try{return await G(h,u,E,$)}catch(ie){if($<=Ze)throw ie;return G(h,u,E,Ze)}}async function G(h,u,E,H){const $=R(u,E,H),ie=await T(u,h.terrainProvider,$);return de(ie||$,{baseHeight:E.baseHeight,fluidDepth:E.dimensions.z,size:H})}function j(h){const u=Math.max(Number(h==null?void 0:h.x)||0,Number(h==null?void 0:h.y)||0),E=Math.ceil(u/Aa)+1;return y(E,Ze,Ea)}function y(h,u,E){return Math.max(u,Math.min(E,Math.round(h)))}function R(h,{lon:u,lat:E,baseHeight:H,dimensions:$},ie){const se=h.Cartesian3.fromDegrees(u,E,H),le=h.Transforms.eastNorthUpToFixedFrame(se),me=[],d=Math.max(1,ie-1);for(let a=0;a<ie;a++){const v=(.5-a/d)*$.y;for(let b=0;b<ie;b++){const W=(b/d-.5)*$.x,J=new h.Cartesian3(W,v,0),re=h.Matrix4.multiplyByPoint(le,J,new h.Cartesian3);me.push(h.Cartographic.fromCartesian(re))}}return me}async function T(h,u,E){const H=te(u);return Number.isInteger(H)&&typeof h.sampleTerrain=="function"?h.sampleTerrain(u,H,E):typeof h.sampleTerrainMostDetailed=="function"?h.sampleTerrainMostDetailed(u,E):h.sampleTerrain(u,10,E)}function te(h){const u=Number(h==null?void 0:h._bottomLevel);return Number.isFinite(u)?Math.max(0,u-1):null}function de(h,{baseHeight:u,fluidDepth:E,size:H}){var ie;const $=new Float32Array(H*H*4);for(let se=0;se<h.length;se++){const le=Number((ie=h[se])==null?void 0:ie.height),me=Number.isFinite(le)?ae(le-u,0,E):0,d=se*4;$[d]=me,$[d+1]=0,$[d+2]=0,$[d+3]=1}return{width:H,height:H,arrayBufferView:$}}function O(h){return{width:h,height:h,arrayBufferView:new Float32Array(h*h*4)}}function ae(h,u,E){return Math.max(u,Math.min(E,h))}function Ae(h,u){if(!u)return null;if(h.scene.pickPositionSupported&&typeof h.scene.pickPosition=="function"){const H=h.scene.pickPosition(u);if(H)return H}const E=h.camera.getPickRay(u);return E?h.scene.globe.pick(E,h.scene):null}function De(){if(!(f!=null&&f.config))return;const h=Number(c.value)||0,u=Number(p.value)||0,E=Number(x.value)||0;f.config.customParams&&(f.config.customParams.x=h,f.config.customParams.y=u,f.config.customParams.z=E),f.config.fluidParams&&(f.config.fluidParams.x=.9+E/10*.099,f.config.fluidParams.y=Math.min(1,u/50),f.config.fluidParams.z=h/5e4)}function be(h,u){var E,H;if(!i){const $=h.scene;i={shadows:h.shadows,resolutionScale:h.resolutionScale,msaaSamples:$.msaaSamples,depthTestAgainstTerrain:$.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:$.logarithmicDepthBuffer,highDynamicRange:$.highDynamicRange,fogEnabled:(E=$.fog)==null?void 0:E.enabled,showGroundAtmosphere:$.globe.showGroundAtmosphere,skyAtmosphereShow:(H=$.skyAtmosphere)==null?void 0:H.show,enableLighting:$.globe.enableLighting}}h.shadows=!0,h.resolutionScale=1,h.scene.msaaSamples=4,h.scene.globe.depthTestAgainstTerrain=!0,h.scene.logarithmicDepthBuffer=!0,h.scene.highDynamicRange=!0,h.scene.fog&&(h.scene.fog.enabled=!0),h.scene.globe.showGroundAtmosphere=!0,h.scene.skyAtmosphere&&(h.scene.skyAtmosphere.show=!0),h.scene.globe.enableLighting=!0,!M&&L&&(M=L(u),h.scene.postProcessStages.add(M))}function Se(h){if(!h||!i)return;const u=h.scene;h.shadows=i.shadows,h.resolutionScale=i.resolutionScale,i.msaaSamples!==void 0&&(u.msaaSamples=i.msaaSamples),u.globe.depthTestAgainstTerrain=i.depthTestAgainstTerrain,u.logarithmicDepthBuffer=i.logarithmicDepthBuffer,u.highDynamicRange=i.highDynamicRange,u.fog&&i.fogEnabled!==void 0&&(u.fog.enabled=i.fogEnabled),u.globe.showGroundAtmosphere=i.showGroundAtmosphere,u.skyAtmosphere&&i.skyAtmosphereShow!==void 0&&(u.skyAtmosphere.show=i.skyAtmosphereShow),u.globe.enableLighting=i.enableLighting,i=null}function fe(){_e(!1),s.success("水体流体已清除。")}function pe(){A&&(A.destroy(),A=null),S.value=!1}function Te(){if(f){try{f.destroy()}catch{}f=null,D.value=!1}}function _e(h){var E,H,$;const u=(E=n.getViewer)==null?void 0:E.call(n);if(m+=1,pe(),Te(),C.value=null,B.value=null,u&&M){try{u.scene.postProcessStages.remove(M)}catch{}M=null}h&&u&&Se(u),($=(H=u==null?void 0:u.scene)==null?void 0:H.requestRender)==null||$.call(H)}function Ee(){_e(!0),l("close")}return e({startPickHeightMap:N,clearFluid:fe}),(h,u)=>t.headless?ee("",!0):(z(),U("div",_a,[g("div",xa,[g("div",{class:"panel-head"},[u[6]||(u[6]=g("span",{class:"panel-title"},"水体流体",-1)),g("button",{class:"panel-close",title:"关闭",onClick:Ee}," × ")]),g("div",ba,[g("button",{class:ue(["action-btn primary",{active:S.value}]),onClick:N},Q(S.value?"等待选点":"捕捉高度图"),3),g("button",{class:"action-btn",disabled:!D.value&&!S.value,onClick:fe}," 清除 ",8,Sa)]),_.value?(z(),U("div",Ta,Q(_.value),1)):ee("",!0),g("div",wa,[g("label",Ma,[u[7]||(u[7]=g("span",null,"阈值",-1)),oe(g("input",{"onUpdate:modelValue":u[0]||(u[0]=E=>c.value=E),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[ke,c.value,void 0,{number:!0}]]),oe(g("input",{"onUpdate:modelValue":u[1]||(u[1]=E=>c.value=E),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[ke,c.value,void 0,{number:!0}]])]),g("label",La,[u[8]||(u[8]=g("span",null,"混合",-1)),oe(g("input",{"onUpdate:modelValue":u[2]||(u[2]=E=>p.value=E),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[ke,p.value,void 0,{number:!0}]]),oe(g("input",{"onUpdate:modelValue":u[3]||(u[3]=E=>p.value=E),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[ke,p.value,void 0,{number:!0}]])]),g("label",Fa,[u[9]||(u[9]=g("span",null,"光强",-1)),oe(g("input",{"onUpdate:modelValue":u[4]||(u[4]=E=>x.value=E),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[ke,x.value,void 0,{number:!0}]]),oe(g("input",{"onUpdate:modelValue":u[5]||(u[5]=E=>x.value=E),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[ke,x.value,void 0,{number:!0}]])])])])]))}},Da=Ve(Ca,[["__scopeId","data-v-75db8dff"]]),Qe="https://cdn.jsdelivr.net/npm/cesium@1.110/Build/Cesium/",Ra=`${Qe}Cesium.js`,ka=`${Qe}Widgets/widgets.css`;async function Ia({ionToken:t}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Qe),await Oa(ka,"cesium-widgets-style"),await za(Ra,"cesium-runtime-script");const e=window.Cesium;if(!e)throw new Error("Cesium global 未找到");return wt(e,t),e}function wt(t,e){e&&(t!=null&&t.Ion)&&(t.Ion.defaultAccessToken=e)}function za(t,e){return new Promise((r,n)=>{const l=document.getElementById(e);if(l){if(l.getAttribute("data-loaded")==="true"){r();return}l.addEventListener("load",()=>r(),{once:!0}),l.addEventListener("error",()=>n(new Error(`脚本加载失败: ${t}`)),{once:!0});return}const s=document.createElement("script");s.id=e,s.src=t,s.async=!0,s.onload=()=>{s.setAttribute("data-loaded","true"),r()},s.onerror=()=>n(new Error(`脚本加载失败: ${t}`)),document.head.appendChild(s)})}function Oa(t,e){return new Promise((r,n)=>{if(document.getElementById(e)){r();return}const s=document.createElement("link");s.id=e,s.rel="stylesheet",s.href=t,s.onload=()=>r(),s.onerror=()=>n(new Error(`样式加载失败: ${t}`)),document.head.appendChild(s)})}const Ba="Asia/Shanghai",Na="UTC+8",Ha=new Intl.DateTimeFormat("zh-CN",{timeZone:Ba,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Ua(t,e){var r,n,l,s,c,p,x;if(!(!t||!(e!=null&&e.JulianDate))){if((r=t.animation)!=null&&r.viewModel&&(t.animation.viewModel.dateFormatter=(...S)=>Ga(t,e,...S),t.animation.viewModel.timeFormatter=(...S)=>$a(t,e,...S)),t.timeline){const S=(...D)=>qa(t,e,...D);t.timeline.makeLabel=S,"_makeLabel"in t.timeline&&(t.timeline._makeLabel=S),(l=(n=t.timeline).updateFromClock)==null||l.call(n),(c=(s=t.timeline).zoomTo)==null||c.call(s,t.clock.startTime,t.clock.stopTime)}(x=(p=t.scene).requestRender)==null||x.call(p)}}function et(t,e,...r){var p;const n=r.find(Wa)||((p=t==null?void 0:t.clock)==null?void 0:p.currentTime);if(!n)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const l=e.JulianDate.toDate(n),s=Ha.formatToParts(l),c=Object.fromEntries(s.filter(({type:x})=>x!=="literal").map(({type:x,value:S})=>[x,S]));return{year:c.year||"0000",month:c.month||"01",day:c.day||"01",hour:c.hour||"00",minute:c.minute||"00",second:c.second||"00"}}function Wa(t){return t&&typeof t.dayNumber=="number"&&typeof t.secondsOfDay=="number"}function Ga(t,e,...r){const{year:n,month:l,day:s}=et(t,e,...r);return`${n}-${l}-${s}`}function $a(t,e,...r){const{hour:n,minute:l,second:s}=et(t,e,...r);return`${n}:${l}:${s} ${Na}`}function qa(t,e,...r){const{month:n,day:l,hour:s,minute:c}=et(t,e,...r);return`${n}-${l} ${s}:${c}`}function Va({getViewer:t}){let e=null,r=null;function n(){var p;const c=t==null?void 0:t();if(c&&((p=c._cesiumWidget)!=null&&p._creditContainer&&(c._cesiumWidget._creditContainer.style.display="none"),l(),e=setInterval(()=>{const x=document.querySelector(".cesium-credit-container");x&&x.innerHTML.length>0&&(x.innerHTML="",x.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const x=document.createElement("style");x.id="cesium-credit-override",x.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(x),r=x}}function l(){var x;const c=t==null?void 0:t();if(!c)return;(x=c._cesiumWidget)!=null&&x._creditContainer&&(c._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",c._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(S=>{S.style.cssText="display: none !important; visibility: hidden !important;",S.innerHTML=""}),c.scene&&c.scene.frameState&&c.scene.frameState.creditDisplay&&(c.scene.frameState.creditDisplay.hasCredits=()=>!1,c.scene.frameState.creditDisplay.destroy=()=>{})}function s(){e&&(clearInterval(e),e=null),r&&(r.remove(),r=null)}return{installCreditHider:n,cleanupCreditHider:s}}function Xa({getViewer:t,getCesium:e}){let r=null;const n=X("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function l(){const c=t==null?void 0:t(),p=e==null?void 0:e();!c||!p||(s(),r=new p.ScreenSpaceEventHandler(c.scene.canvas),r.setInputAction(x=>{const S=c.camera.getPickRay(x.endPosition);if(!S)return;const D=c.scene.globe.pick(S,c.scene);if(!D)return;const C=p.Cartographic.fromCartesian(D),B=p.Math.toDegrees(C.longitude).toFixed(6),w=p.Math.toDegrees(C.latitude).toFixed(6),L=C.height.toFixed(2);n.value=`经度: ${B}, 纬度: ${w}, 海拔: ${L}米`},p.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(x=>{const S=x.endPosition,D=x.startPosition;if(!p.defined(c.terrainProvider))return;const C=c.scene.globe.ellipsoid;if(!c.camera.pickEllipsoid(D,C)){const w=c.camera;w.rotate(p.Cartesian3.UNIT_X,-.002*(S.y-D.y)),w.rotate(p.Cartesian3.UNIT_Y,-.002*(S.x-D.x))}},p.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_UP))}function s(){r&&(r.destroy(),r=null)}return{coordinateDisplay:n,setupInteractions:l,cleanupInteractions:s}}function Ya(t,e=""){if(typeof window>"u")return e;try{const r=window.localStorage.getItem(t);return r??e}catch{return e}}function ja(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(e||""))}catch{}}function qe(t,e){if(typeof window>"u")return e;try{const r=window.localStorage.getItem(t);return r==null?e:r==="true"}catch{return e}}function Ke(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(!!e))}catch{}}function ht(t){if(!t)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:e,DeveloperError:r,Ellipsoid:n,Resource:l,HeightmapTerrainData:s,Rectangle:c,TileAvailability:p,CustomHeightmapTerrainProvider:x}=t;function S(w,L,A,f,M,i){const m=w.tileXYToRectangle(A,f,M);return e(c.intersection(m,L,i))}function D(w){const L=[[[0,0,1,0]]],A=new p(w.tilingScheme,19);for(let f=0;f<L.length;f++){const M=L[f];for(let i=0;i<M.length;i++){const m=M[i];A.addAvailableTileRange(f,m[0],m[1],m[2],m[3])}}return A}function C(w,L,A,f,M){const i=new s({buffer:w._transformBuffer(L),width:w._width,height:w._height,childTileMask:w._getChildTileMask(f,M,A),structure:w._terrainDataStructure});return i._skirtHeight=6e3,w.availability.addAvailableTileRange(A,f,M,f,M),i}class B extends x{constructor(L={}){if(super({...L,ellipsoid:n.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!e(L.url))throw new r("options.url is required.");this._dataType=L.dataType??"int16",this._url=L.url,this._subdomains=L.subdomains,this._token=L.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=D(this)}get availability(){return this._availability}requestTileGeometry(L,A,f,M){if(f>=this._bottomLevel)return Promise.reject(new Error(`Level ${f} is outside supported range.`));if(f<this._topLevel)return Promise.resolve(new s({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(L,A,f),structure:this._terrainDataStructure}));let i=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const _=this._subdomains[(L+A)%this._subdomains.length];i=i.replace("{s}",_)}i=i.replace("{token}",this._token).replace("{x}",L).replace("{y}",A).replace("{z}",f+1);const m=l.fetchArrayBuffer({url:i,request:M});if(m)return m.then(_=>_.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):$t.inflate(_)).then(_=>C(this,_,f,L,A))}getTileDataAvailable(L,A,f){return f<this._bottomLevel}_transformBuffer(L){let A=2;this._dataType==="float"&&(A=4);const f=L;if(f.length!==22500*A)return null;const M=new ArrayBuffer(A),i=new DataView(M),m=this._width,_=this._height,P=new Uint8Array(m*_*4);for(let k=0;k<_;k++)for(let F=0;F<m;F++){const N=Math.floor(149*k/(_-1)),Y=Math.floor(149*F/(m-1)),K=A*(150*N+Y);let G;A===4?(i.setInt8(0,f[K]),i.setInt8(1,f[K+1]),i.setInt8(2,f[K+2]),i.setInt8(3,f[K+3]),G=i.getFloat32(0,!0)):G=f[K]+256*f[K+1],(G>1e4||G<-2e3)&&(G=0);const j=(G+1e3)/.001,y=4*(k*m+F);P[y]=j/65536,P[y+1]=(j-256*P[y]*256)/256,P[y+2]=j-256*P[y]*256-256*P[y+1],P[y+3]=255}return P}_getVHeightBuffer(){let L=this._vHeightBuffer;if(!e(L)){L=new Uint8ClampedArray(this._width*this._height*4);for(let A=0;A<this._width*this._height*4;)L[A++]=15,L[A++]=66,L[A++]=64,L[A++]=255;this._vHeightBuffer=L}return L}_getChildTileMask(L,A,f){const M=new c,i=this._tilingScheme,m=this._rectangles,_=i.tileXYToRectangle(L,A,f);let P=0;for(let k=0;k<m.length&&P!==15;k++){const F=m[k];if(F.maxLevel<=f)continue;const N=F.rectangle,Y=c.intersection(N,_,M);e(Y)&&(S(i,N,2*L,2*A,f+1,M)&&(P|=4),S(i,N,2*L+1,2*A,f+1,M)&&(P|=8),S(i,N,2*L,2*A+1,f+1,M)&&(P|=1),S(i,N,2*L+1,2*A+1,f+1,M)&&(P|=2))}return P}}return B}const He=["0","1","2","3","4","5","6","7"],Ue="https://t{s}.tianditu.gov.cn/",Fe="custom-xyz",ft="cesium_custom_xyz_basemap_url",Za="cesium_tdt_label_layer_visible",mt="cesium_tdt_boundary_layer_visible",pt="cesium_tdt_text_label_layer_visible",gt=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:Fe,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],yt=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function Ka({getViewer:t,getCesium:e,message:r,backendBaseUrl:n,tiandituToken:l,cesiumIonToken:s}){let c=null,p=null,x=0,S=[];const D=[],C=X([]),B=new Map,w=new Map,L=new Map,A=new Map,f=X("tianditu"),M=X("tianditu"),i=X(Ya(ft,"")),m=qe(Za,!0),_=X(qe(mt,m)),P=X(qe(pt,m)),k=ve(()=>[...gt.map(a=>a.value!==Fe?a:{...a,description:i.value?i.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!i.value}),...C.value]),F=ve(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:_.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:P.value}]);he(f,a=>{!(t!=null&&t())||!(e!=null&&e())||h(a)}),he(i,a=>{ja(ft,a)}),he(M,async a=>{!(t!=null&&t())||!(e!=null&&e())||await E(a)}),he(_,a=>{Ke(mt,a),fe()}),he(P,a=>{Ke(pt,a),fe()});function N(){const a=e==null?void 0:e();if(!a)return[];B.clear(),w.clear();const o=gt.map(b=>{const I=new a.ProviderViewModel({name:b.label,tooltip:Ja(b),category:"项目底图",iconUrl:_t(b.value==="google"?"#5ea1ff":b.value===Fe?"#f59e0b":"#37d67a",b.value==="google"?"G":b.value===Fe?"XY":"TD"),creationFunction:()=>y(b.value)});return B.set(b.value,I),w.set(I,b.value),I}),v=j();return C.value=v.map((b,I)=>{const W=String((b==null?void 0:b.name)||`官方底图 ${I+1}`).trim(),J=ti(W,I);return B.set(J,b),w.set(b,J),{value:J,label:`官方 · ${W}`,description:String((b==null?void 0:b.tooltip)||W),source:"official"}}),[...o,...v]}function Y(){const a=e==null?void 0:e();return a?(L.clear(),A.clear(),yt.map(o=>{const v=new a.ProviderViewModel({name:o.label,tooltip:o.description||o.label,category:"项目地形",iconUrl:_t(o.value==="ellipsoid"?"#a3a3a3":"#d0a449",o.value==="cesiumWorld"?"CW":o.value==="ellipsoid"?"EL":"TE"),creationFunction:()=>$(o.value)});return L.set(o.value,v),A.set(v,o.value),v})):[]}function K(a=[]){return B.get(f.value)||a[0]}function G(a=[]){return L.get(M.value)||a[0]}function j(){const a=e==null?void 0:e();if(typeof(a==null?void 0:a.createDefaultImageryProviderViewModels)!="function")return[];try{return a.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function y(a){return a==="google"?T():a===Fe?te():R()}function R(){const a=e==null?void 0:e();return[new a.UrlTemplateImageryProvider({url:`${Ue}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${l}`,subdomains:He,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})]}function T(){const a=e==null?void 0:e();return[new a.UrlTemplateImageryProvider({url:`${n}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20})]}function te(){const a=e==null?void 0:e(),o=vt(i.value);return o.valid?[new a.UrlTemplateImageryProvider({url:o.url,subdomains:o.subdomains,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(r.warning(o.message,{closable:!0}),R())}function de(){const a=e==null?void 0:e();return new a.UrlTemplateImageryProvider({url:`${Ue}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${l}`,subdomains:He,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:10})}function O(){const a=e==null?void 0:e();return new a.UrlTemplateImageryProvider({url:`${Ue}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${l}`,subdomains:He,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})}function ae(){var re,ce,Re,Oe,Be;Ae();const a=e==null?void 0:e(),o=(ce=(re=t==null?void 0:t())==null?void 0:re.baseLayerPicker)==null?void 0:ce.viewModel;if(!o||!((Re=a==null?void 0:a.knockout)!=null&&Re.getObservable))return;const v=a.knockout.getObservable(o,"selectedImagery"),b=a.knockout.getObservable(o,"selectedTerrain"),I=[],W=(Oe=v==null?void 0:v.subscribe)==null?void 0:Oe.call(v,Ie=>{const ge=w.get(Ie);ge&&(f.value!==ge&&(f.value=ge),Se())}),J=(Be=b==null?void 0:b.subscribe)==null?void 0:Be.call(b,Ie=>{const ge=A.get(Ie);ge&&(M.value!==ge&&(M.value=ge),H(ge))});W&&I.push(W),J&&I.push(J),S=I}function Ae(){S.forEach(a=>{var o;return(o=a==null?void 0:a.dispose)==null?void 0:o.call(a)}),S=[]}function De(){return Se(),!0}function be(){const a=t==null?void 0:t();if(a!=null&&a.imageryLayers)for(;D.length;){const o=D.pop();try{a.imageryLayers.remove(o,!0)}catch{}}}function Se(){var a,o,v;fe(),(v=(o=(a=t==null?void 0:t())==null?void 0:a.scene)==null?void 0:o.requestRender)==null||v.call(o)}function fe(){var o,v;const a=t==null?void 0:t();!a||!(e!=null&&e())||(_.value?pe():_e(),P.value?Te():Ee(),(v=(o=a.scene).requestRender)==null||v.call(o))}function pe(){var o,v,b,I;const a=t==null?void 0:t();if(!(a!=null&&a.imageryLayers)||c)return c&&((v=(o=a==null?void 0:a.imageryLayers)==null?void 0:o.raiseToTop)==null||v.call(o,c)),c;try{return c=a.imageryLayers.addImageryProvider(de()),(I=(b=a.imageryLayers).raiseToTop)==null||I.call(b,c),c}catch(W){return r.error("天地图国界线图层加载失败",W),null}}function Te(){var o,v,b,I;const a=t==null?void 0:t();if(!(a!=null&&a.imageryLayers)||p)return p&&((v=(o=a==null?void 0:a.imageryLayers)==null?void 0:o.raiseToTop)==null||v.call(o,p)),p;try{return p=a.imageryLayers.addImageryProvider(O()),(I=(b=a.imageryLayers).raiseToTop)==null||I.call(b,p),p}catch(W){return r.error("天地图文字标注图层加载失败",W),null}}function _e(){const a=t==null?void 0:t();if(!(!c||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(c,!0)}catch{}c=null}}function Ee(){const a=t==null?void 0:t();if(!(!p||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(p,!0)}catch{}p=null}}function h(a,o={}){var W,J,re;const v=t==null?void 0:t();if(!v||!(e!=null&&e()))return!1;const b=(W=v.baseLayerPicker)==null?void 0:W.viewModel,I=B.get(a);if(b&&I){if(be(),o.forceReload&&b.selectedImagery===I){const ce=B.get("tianditu");ce&&ce!==I&&(b.selectedImagery=ce)}return b.selectedImagery!==I&&(b.selectedImagery=I),Se(),!0}try{return be(),y(a).forEach(Re=>{D.push(v.imageryLayers.addImageryProvider(Re))}),fe(),(re=(J=v.scene).requestRender)==null||re.call(J),!0}catch(ce){return r.error("地图源切换失败",ce),!1}}function u(){return E(M.value)}async function E(a){var re,ce,Re,Oe,Be,Ie,ge,tt,rt;const o=t==null?void 0:t(),v=e==null?void 0:e();if(!o||!v)return!1;const b=(re=o.baseLayerPicker)==null?void 0:re.viewModel,I=L.get(a);if(b&&I)return b.selectedTerrain!==I&&(b.selectedTerrain=I),H(a),(Re=(ce=o.scene).requestRender)==null||Re.call(ce),!0;const W=++x;if(a==="ellipsoid")return o.terrainProvider=new v.EllipsoidTerrainProvider,H(a),(Be=(Oe=o.scene).requestRender)==null||Be.call(Oe),!0;if(a==="cesiumWorld")try{const Ne=await ie();return W!==x?!1:(o.terrainProvider=Ne,H(a),(ge=(Ie=o.scene).requestRender)==null||ge.call(Ie),!0)}catch(Ne){return W!==x||(o.terrainProvider=new v.EllipsoidTerrainProvider,H("ellipsoid"),r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",Ne)),!1}const J=ht(v);try{return o.terrainProvider=new J({url:`${Ue}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:He,token:l}),H(a),(rt=(tt=o.scene).requestRender)==null||rt.call(tt),!0}catch(Ne){return o.terrainProvider=new v.EllipsoidTerrainProvider,H("ellipsoid"),r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",Ne),!1}}function H(a){var v;const o=t==null?void 0:t();(v=o==null?void 0:o.scene)!=null&&v.globe&&(o.scene.globe.depthTestAgainstTerrain=a!=="ellipsoid")}function $(a){const o=e==null?void 0:e();if(a==="ellipsoid")return new o.EllipsoidTerrainProvider;if(a==="cesiumWorld")return ie().catch(b=>(r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",b),se(a,"ellipsoid"),new o.EllipsoidTerrainProvider));const v=ht(o);try{return new v({url:`${Ue}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:He,token:l})}catch(b){return r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",b),new o.EllipsoidTerrainProvider}}async function ie(){var v,b;const a=e==null?void 0:e();wt(a,s);const o={requestWaterMask:!1,requestVertexNormals:!0};if(typeof a.createWorldTerrainAsync=="function")return a.createWorldTerrainAsync(o);if(typeof a.createWorldTerrain=="function")return a.createWorldTerrain(o);if(typeof((v=a.CesiumTerrainProvider)==null?void 0:v.fromIonAssetId)=="function")return a.CesiumTerrainProvider.fromIonAssetId(1,o);if((b=a.IonResource)!=null&&b.fromAssetId&&a.CesiumTerrainProvider){const I=await a.IonResource.fromAssetId(1);return new a.CesiumTerrainProvider({url:I,...o})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}function se(a,o){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{M.value===a&&(M.value=o)},0)}function le({overlayId:a,value:o}){if(a==="tdt-boundaries"){_.value=!!o;return}a==="tdt-text-labels"&&(P.value=!!o)}function me({url:a}){const o=String(a||"").trim(),v=vt(o);if(!v.valid){r.warning(v.message,{closable:!0});return}if(i.value=o,f.value===Fe){h(Fe,{forceReload:!0})&&r.success("已加载自定义 XYZ 图源");return}f.value=Fe,r.success("已切换到自定义 XYZ 图源")}function d(){be(),_e(),Ee(),Ae()}return{activeBasemap:f,activeTerrain:M,customXyzBasemapUrl:i,basemapOptions:k,terrainOptions:yt,overlayOptions:F,createImageryProviderViewModels:N,createTerrainProviderViewModels:Y,getSelectedImageryProviderViewModel:K,getSelectedTerrainProviderViewModel:G,bindLayerPickerStateSync:ae,addBaseImageryLayers:De,initCustomTerrain:u,applyBasemap:h,applyTerrain:E,handleOverlayToggle:le,handleCustomBasemapSubmit:me,cleanupLayers:d}}function Ja(t){return t.value!==Fe?t.description||t.label:`${t.description||t.label}
支持 https://server/{z}/{x}/{y}.png`}function vt(t){const e=String(t||"").trim();if(!e)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let r=e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const n=r.match(/\{([a-z0-9])-([a-z0-9])\}/i);let l=[];return n?(l=Qa(n[1],n[2]),r=r.replace(n[0],"{s}")):/\{s\}/i.test(r)&&(l=["a","b","c"]),!/\{z\}/.test(r)||!/\{x\}/.test(r)||!/\{y\}/.test(r)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:r,subdomains:l}:ei(r)?{valid:!0,message:"",url:r,subdomains:l}:{valid:!1,message:"URL 格式不合法",url:r,subdomains:l}}function Qa(t,e){const r=String(t||"").charCodeAt(0),n=String(e||"").charCodeAt(0);if(!Number.isFinite(r)||!Number.isFinite(n))return[];const l=r<=n?1:-1,s=[];for(let c=r;l>0?c<=n:c>=n;c+=l)s.push(String.fromCharCode(c));return s}function ei(t){if(/^(https?:)?\/\//i.test(t)||t.startsWith("/"))return!0;try{const e=typeof window<"u"?window.location.origin:"http://localhost",r=new URL(t,e);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}function ti(t,e){const r=t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${e}_${r||"basemap"}`}function _t(t,e){const r=String(e||"").replace(/[<>&"']/g,"").slice(0,2),n=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${t}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${r}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(n)}`}function ri({getViewer:t,getCesium:e,message:r}){function n(c){const p=t==null?void 0:t(),x=e==null?void 0:e();if(!p||!x)return;const S=typeof c=="number"?c:2;p.camera.flyTo({destination:x.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-x.Math.PI_OVER_TWO,roll:0},duration:S})}function l(){const c=t==null?void 0:t(),p=e==null?void 0:e();!c||!p||c.camera.flyTo({destination:p.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:p.Math.toRadians(0),pitch:p.Math.toRadians(-25),roll:0},duration:3})}async function s(){const c=t==null?void 0:t(),p=e==null?void 0:e();if(!(!c||!p))try{const x=await p.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");c.scene.primitives.add(x),c.flyTo(x,{duration:3,offset:new p.HeadingPitchRange(p.Math.toRadians(0),p.Math.toRadians(-25),x.boundingSphere.radius*2.5)})}catch(x){r.error(`加载模型失败: ${x}`),r.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:n,flyToEverest:l,loadCustomTileset:s}}const ai="cesium_tool_panel_open";function ii({fluidPanelRef:t,sceneActions:e={},wind:r={},panelStorageKey:n=ai}={}){const l=X(qe(n,!0)),s=X({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),c=X({threshold:10,blend:20,lightStrength:3}),p=X({isPicking:!1,hasFluid:!1,selectedText:""}),x=ve(()=>{var w,L,A,f,M,i;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:s.value.atmosphere||s.value.fog?"启用":"关闭",statusTone:s.value.atmosphere||s.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:s.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:s.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:s.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:s.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(w=r.wind2D)!=null&&w.value?"已加载":"未加载",statusTone:(L=r.wind2D)!=null&&L.value?"success":"neutral",actions:[{id:"load",label:(A=r.wind2D)!=null&&A.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((f=r.wind2D)!=null&&f.value)}],controls:ni((M=r.windParams)==null?void 0:M.value,!!((i=r.wind2D)!=null&&i.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:p.value.isPicking?"等待选点":p.value.hasFluid?"已创建":"未创建",statusTone:p.value.isPicking?"warning":p.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:p.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:p.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!p.value.hasFluid&&!p.value.isPicking}],controls:oi(c.value)}]});he(l,w=>{Ke(n,w)});function S({moduleId:w,actionId:L}){var f,M;(M=(f={scene:{home:()=>{var i;return(i=e.flyToHome)==null?void 0:i.call(e)},everest:e.flyToEverest,tileset:e.loadCustomTileset},wind:{load:r.loadSimulatedWind,clear:r.clearWind2D},fluid:{pick:()=>{var i,m;return(m=(i=t==null?void 0:t.value)==null?void 0:i.startPickHeightMap)==null?void 0:m.call(i)},clear:()=>{var i,m;return(m=(i=t==null?void 0:t.value)==null?void 0:i.clearFluid)==null?void 0:m.call(i)}}}[w])==null?void 0:f[L])==null||M.call(f)}function D({moduleId:w,controlId:L,value:A}){var f,M;if(w==="effects"&&L in s.value){s.value={...s.value,[L]:!!A};return}if(w==="wind"&&L in(((f=r.windParams)==null?void 0:f.value)||{})){(M=r.setWindParam)==null||M.call(r,L,A);return}w==="fluid"&&L in c.value&&(c.value={...c.value,[L]:Number(A)})}function C(w){p.value={isPicking:!!(w!=null&&w.isPicking),hasFluid:!!(w!=null&&w.hasFluid),selectedText:(w==null?void 0:w.selectedText)||""}}function B(){var w;(w=r.clearWind2D)==null||w.call(r)}return{toolPanelOpen:l,advancedEffectControls:s,fluidParams:c,fluidState:p,toolModules:x,handleToolAction:S,handleToolControlChange:D,handleFluidStateChange:C,cleanupTools:B}}function ni(t={},e){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:t.speedFactor??1,displayValue:Number(t.speedFactor??1).toFixed(1),disabled:e},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:t.arrowLength??15e3,displayValue:`${Math.round((t.arrowLength??15e3)/1e3)} km`,disabled:e},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:t.trailLength??2e4,displayValue:`${Math.round((t.trailLength??2e4)/1e3)} km`,disabled:e},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:t.alphaFactor??1,displayValue:Number(t.alphaFactor??1).toFixed(2),disabled:e}]}function oi(t){return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:t.threshold,displayValue:Number(t.threshold).toFixed(2)},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:t.blend,displayValue:Number(t.blend).toFixed(2)},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:t.lightStrength,displayValue:Number(t.lightStrength).toFixed(2)}]}const ne={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},si=new Float32Array([-1,-1,1,-1,1,1,-1,1]),li=new Float32Array([0,0,1,0,1,1,0,1]),ci=new Uint16Array([0,1,2,0,2,3]);function Ce(t,e,r){return Math.max(e,Math.min(r,t))}function q(t,e){const r=Number(t);return Number.isFinite(r)?r:e}function ui(t,e){const r=e.getParameter(e.MAX_TEXTURE_SIZE),n=Math.min(2048,r),l=Math.max(1,Math.floor(t)),s=Math.sqrt(l),c=Math.log2(s),p=Number.isFinite(c)?Math.round(c):4;let x=Math.pow(2,p);return x=Ce(x,16,n),x}function di(t){const e=t*t,r=new Float32Array(e*4);for(let n=0;n<e;n+=1){const l=n*4;r[l]=Math.random(),r[l+1]=Math.random(),r[l+2]=Math.random(),r[l+3]=Math.random()}return r}function hi(t){return new Float32Array(t*t*4)}function fi(t,e,r,n,l){const s=e.createTexture();if(!s)throw new Error("Failed to create wind atlas texture.");e.bindTexture(e.TEXTURE_2D,s),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,r,n,0,e.RGBA,e.FLOAT,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null);let c=!1;return{_context:t,_texture:s,_target:e.TEXTURE_2D,_width:r,_height:n,destroy(){c||(e.deleteTexture(s),c=!0)}}}class mi{constructor(e,r={}){if(!e||!e.scene||!e.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=e,this._scene=e.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=r.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const n={...ne,...r};this.speedFactor=q(n.speedFactor,ne.speedFactor),this.cullSpeedMin=q(n.cullSpeedMin,ne.cullSpeedMin),this.cullSpeedMax=q(n.cullSpeedMax,ne.cullSpeedMax),this.windSpeedMin=q(n.windSpeedMin,ne.windSpeedMin),this.windSpeedMax=q(n.windSpeedMax,ne.windSpeedMax),this.arrowLength=q(n.arrowLength,ne.arrowLength),this.trailLength=q(n.trailLength,ne.trailLength),this.decaySpeed=q(n.decaySpeed,ne.decaySpeed),this.alphaFactor=q(n.alphaFactor,ne.alphaFactor),this.maxWindSpeed=q(n.maxWindSpeed,ne.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=q(r.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(e){if(!e||typeof e!="object")throw new Error("Wind2D.loadData requires a valid data object.");const r=q(e.longitude,NaN),n=q(e.latitude,NaN),l=Array.isArray(e.altitude)?e.altitude:[],s=Array.isArray(e.sizeMesh)?e.sizeMesh:[],c=Array.isArray(e.count)?e.count:[],p=Array.isArray(e.hspeed)?e.hspeed:[],x=Array.isArray(e.hdir)?e.hdir:[],S=Array.isArray(e.vspeed)?e.vspeed:[];if(!Number.isFinite(r)||!Number.isFinite(n))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const D=l.length;if(D<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(s.length!==D||c.length!==D)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const C=c.map(F=>Math.max(1,Math.floor(q(F,1)))),B=s.map(F=>Math.max(1,q(F,1))),w=l.map(F=>q(F,0)),L=C.reduce((F,N)=>F+N*N,0);if(p.length<L||x.length<L||S.length<L)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=D,this.visibleLayerMin=0,this.visibleLayerMax=D-1,this._altitudes=w.slice(),this._maxNx=Math.max(...C),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*D;const A=new Float32Array(this._atlasWidth*this._atlasHeight*4);let f=0;for(let F=0;F<D;F+=1){const N=C[F],Y=N;for(let K=0;K<Y;K+=1)for(let G=0;G<N;G+=1){const j=f+K*N+G,y=((F*this._maxNy+K)*this._atlasWidth+G)*4,R=Number(p[j]),T=Number(x[j]),te=Number(S[j]);if(!(Number.isFinite(R)&&Number.isFinite(T))){A[y]=0,A[y+1]=0,A[y+2]=0,A[y+3]=0;continue}const O=T*Math.PI/180;A[y]=R*Math.sin(O),A[y+1]=R*Math.cos(O),A[y+2]=Number.isFinite(te)?te:0,A[y+3]=1}f+=N*Y}this._createOrReplaceWindAtlasTexture(A);const M=Math.max(...B),i=this._maxNx*M,m=i/2/111320,_=n*Math.PI/180,P=Math.max(1e-6,Math.abs(Math.cos(_))),k=i/2/(111320*P);this._bounds={minLon:r-k,maxLon:r+k,minLat:n-m,maxLat:n+m,minHeight:Math.min(...w),maxHeight:Math.max(...w)},this._dataPointCount=L,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(e){const r=Math.max(1,Math.floor(q(e,1))),n=ui(r,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&n===this._particleTextureSize||(this._particleTextureSize=n,this._particleCount=n*n,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(e){const r=Ce(q(e,this.particleDensity),.05,10);if(this.particleDensity=r,this._dataPointCount<=0)return;const n=Math.max(1,Math.floor(this._dataPointCount*r));this.setParticleCount(n)}setBounds(e,r,n,l){const s=q(e,NaN),c=q(r,NaN),p=q(n,NaN),x=q(l,NaN);if(!Number.isFinite(s)||!Number.isFinite(c)||!Number.isFinite(p)||!Number.isFinite(x))return;const S=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};S.minLon=Math.min(s,c),S.maxLon=Math.max(s,c),S.minLat=Math.min(p,x),S.maxLat=Math.max(p,x),this._bounds=S,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const e=(this._bounds.minLon+this._bounds.maxLon)*.5,r=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(e,r,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(e){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const l=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[l],this._updateCommand.execute(this._context,e?e.passState:void 0),this._particleState=l,this._drawCommand.modelMatrix=this._modelMatrix,e&&Array.isArray(e.commandList)&&e.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(e){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=fi(this._context,this._gl,this._atlasWidth,this._atlasHeight,e)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const e=this._Cesium,r=this._particleTextureSize,n=di(r),l=hi(r);for(let s=0;s<2;s+=1){this._particlePositionTextures[s]=new e.Texture({context:this._context,width:r,height:r,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:n},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[s]=new e.Texture({context:this._context,width:r,height:r,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:l},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._framebuffers[s]=new e.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[s],this._velocityTextures[s]],destroyAttachments:!1});const c=this._framebuffers[s]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,c),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._particlePositionTextures[e]&&(this._particlePositionTextures[e].destroy(),this._particlePositionTextures[e]=null),this._velocityTextures[e]&&(this._velocityTextures[e].destroy(),this._velocityTextures[e]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const e=this._Cesium,r=e.Buffer.createVertexBuffer({context:this._context,typedArray:si,usage:e.BufferUsage.STATIC_DRAW}),n=e.Buffer.createVertexBuffer({context:this._context,typedArray:li,usage:e.BufferUsage.STATIC_DRAW}),l=e.Buffer.createIndexBuffer({context:this._context,typedArray:ci,usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:r,componentsPerAttribute:2},{index:1,vertexBuffer:n,componentsPerAttribute:2}],indexBuffer:l})}_buildParticleVertexArray(){const e=this._Cesium,r=new Float32Array(this._drawVertexCount);for(let n=0;n<r.length;n+=1)r[n]=n;this._particleVertexBuffer=e.Buffer.createVertexBuffer({context:this._context,typedArray:r,usage:e.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const e=this._Cesium,r=`#version 300 es
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
}`;this._drawProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:n,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const e=this._Cesium,r=e.RenderState.fromCache({viewport:new e.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:r,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const e=this._Cesium,r=e.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:e.BlendingState.ALPHA_BLEND});this._drawCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:r,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:e.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const e=Ce(Math.floor(q(this.visibleLayerMin,0)),0,this._layerCount-1),r=Ce(Math.floor(q(this.visibleLayerMax,this._layerCount-1)),e,this._layerCount-1);return{min:e,max:r}}_normalizeSpeedRange(e,r){const n=Math.max(1e-4,q(this.maxWindSpeed,ne.maxWindSpeed)),l=Ce(q(e,0)/n,0,1),s=Ce(q(r,n)/n,0,1);return{min:Math.min(l,s),max:Math.max(l,s)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>q(this.speedFactor,ne.speedFactor),maxWindSpeed:()=>Math.max(1e-4,q(this.maxWindSpeed,ne.maxWindSpeed)),decaySpeed:()=>Ce(q(this.decaySpeed,ne.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>q(this.arrowLength,ne.arrowLength),trailLength:()=>q(this.trailLength,ne.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Ce(q(this.alphaFactor,ne.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function pi({getViewer:t,getCesium:e,message:r}){const n=X(null),l=X({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function s(){var D,C;const S=t==null?void 0:t();if(n.value){try{(C=(D=S==null?void 0:S.scene)==null?void 0:D.primitives)==null||C.remove(n.value)}catch{}n.value.destroy(),n.value=null}}function c(){const S=t==null?void 0:t(),D=e==null?void 0:e();if(!S||!D){r.error("Cesium 尚未初始化");return}s();const C=gi(D);n.value=new mi(S,{maxWindSpeed:20,cesium:D,speedFactor:l.value.speedFactor,arrowLength:l.value.arrowLength,trailLength:l.value.trailLength,alphaFactor:l.value.alphaFactor}),n.value.loadData(C),S.scene.primitives.add(n.value),n.value.flyTo(),r.success("风场加载成功，可通过下方滑块调节样式")}function p(){n.value&&(n.value.speedFactor=l.value.speedFactor,n.value.arrowLength=l.value.arrowLength,n.value.trailLength=l.value.trailLength,n.value.alphaFactor=l.value.alphaFactor)}function x(S,D){return S in l.value?(l.value={...l.value,[S]:Number(D)},p(),!0):!1}return{wind2D:n,windParams:l,clearWind2D:s,loadSimulatedWind:c,setWindParam:x}}function gi(t){const l=[0,2e3,5e3,1e4,15e3],s=[3e4,3e4,25e3,25e3,2e4],c=[30,30,25,25,20],p=c.reduce((B,w)=>B+w*w,0),x=new Array(p),S=new Array(p),D=new Array(p);let C=0;for(let B=0;B<5;B++){const w=c[B],L=c[B],A=s[B];for(let f=0;f<L;f++)for(let M=0;M<w;M++){const i=C+f*w+M,m=(M-w/2)*(A/111320),_=(f-L/2)*(A/111320/Math.cos(t.Math.toRadians(35))),k=Math.atan2(_,m)+Math.PI/2+.2*Math.sin(M*.5)*Math.cos(f*.5);S[i]=t.Math.toDegrees(k)%360;const F=Math.sqrt(m*m+_*_),Y=Math.max(0,1-F/15);x[i]=(5+B*2)*Y+2*Math.random(),D[i]=.5*Math.sin(M*.3)*Math.cos(f*.3)}C+=w*L}return{longitude:104,latitude:35,altitude:l,sizeMesh:s,count:c,hspeed:x,hdir:S,vspeed:D}}const yi={class:"map-controls-group"},vi={class:"mouse-position-content"},_i={__name:"CesiumContainer",setup(t){let e=null,r=null;const n="4267820f43926eaf808d61dc07269beb",l="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzRhZjM0ZC02MmYxLTRhNzgtYTkxNi00YWM2MmMxNmNhMWIiLCJpZCI6MTkzNjkxLCJpYXQiOjE3MDY5NDA2ODF9.mKu1zCK-GOjwDem9-J_Ksv0xEGNsN1zGuShYzOuXJsg",s=Je(),c=X(!1),p=X(null),x=()=>r,S=()=>e||window.Cesium,D=Ka({getViewer:x,getCesium:S,message:s,backendBaseUrl:Ft,tiandituToken:n,cesiumIonToken:l}),{activeBasemap:C,activeTerrain:B,customXyzBasemapUrl:w,basemapOptions:L,terrainOptions:A,overlayOptions:f,createImageryProviderViewModels:M,createTerrainProviderViewModels:i,getSelectedImageryProviderViewModel:m,getSelectedTerrainProviderViewModel:_,bindLayerPickerStateSync:P,addBaseImageryLayers:k,initCustomTerrain:F,handleOverlayToggle:N,handleCustomBasemapSubmit:Y,cleanupLayers:K}=D,{coordinateDisplay:G,setupInteractions:j,cleanupInteractions:y}=Xa({getViewer:x,getCesium:S}),{installCreditHider:R,cleanupCreditHider:T}=Va({getViewer:x}),te=ri({getViewer:x,getCesium:S,message:s}),{flyToHome:de}=te,O=pi({getViewer:x,getCesium:S,message:s}),{toolPanelOpen:ae,advancedEffectControls:Ae,fluidParams:De,toolModules:be,handleToolAction:Se,handleToolControlChange:fe,handleFluidStateChange:pe,cleanupTools:Te}=ii({fluidPanelRef:p,sceneActions:te,wind:O});async function _e(){xt("正在初始化 3D 场景...");try{if(e=await Ia({ionToken:l}),!e||!document.getElementById("cesiumContainer"))return;Ee(),j();const h=k(),u=await F();c.value=!0,h&&u?s.success("天地图基础影像与地形加载成功。"):s.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0})}catch(h){s.error("Cesium 运行时加载失败",h),s.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{bt()}}function Ee(){const h=typeof e.Map=="function"?e.Map:e.Viewer,u=M(),E=i();r=new h("cesiumContainer",{baseLayerPicker:!0,geocoder:!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:u,selectedImageryProviderViewModel:m(u),terrainProviderViewModels:E,selectedTerrainProviderViewModel:_(E),shouldAnimate:!0}),r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,Ua(r,e),qt(r),R(),P(),de(0)}return St(()=>{_e()}),Tt(()=>{if(c.value=!1,y(),Te(),K(),T(),r){try{r.destroy()}catch{}r=null}}),(h,u)=>(z(),U(ye,null,[u[6]||(u[6]=g("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),c.value?(z(),Pe(ze(ur),{key:0,headless:"","get-viewer":x,"get-cesium":S,controls:Z(Ae)},null,8,["controls"])):ee("",!0),c.value?(z(),Pe(ze(Da),{key:1,ref_key:"fluidPanelRef",ref:p,headless:"","get-viewer":x,"get-cesium":S,params:Z(De),onStateChange:Z(pe)},null,40,["params","onStateChange"])):ee("",!0),c.value?(z(),Pe(ya,{key:2,open:Z(ae),"onUpdate:open":u[0]||(u[0]=E=>Xe(ae)?ae.value=E:null),"active-basemap":Z(C),"onUpdate:activeBasemap":u[1]||(u[1]=E=>Xe(C)?C.value=E:null),"active-terrain":Z(B),"onUpdate:activeTerrain":u[2]||(u[2]=E=>Xe(B)?B.value=E:null),"basemap-options":Z(L),"terrain-options":Z(A),"overlay-options":Z(f),"custom-basemap-url":Z(w),modules:Z(be),onModuleAction:Z(Se),onControlChange:Z(fe),onOverlayToggle:Z(N),onCustomBasemapSubmit:Z(Y)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):ee("",!0),g("div",yi,[g("div",vi,Q(Z(G)),1),u[5]||(u[5]=g("div",{class:"divider"},null,-1)),g("button",{class:"home-btn",title:"回到初始位置",onClick:u[3]||(u[3]=(...E)=>Z(de)&&Z(de)(...E))},[...u[4]||(u[4]=[g("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[g("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},Ci=Ve(_i,[["__scopeId","data-v-131c1981"]]);export{Ci as default};
