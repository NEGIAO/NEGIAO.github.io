const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-CvtFB7l4.js","./vendor-echarts-all-B_WEc2GE.js","./vendor-libs-RyoEAG51.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var Xt=Object.defineProperty;var Vt=(e,t,r)=>t in e?Xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var yt=(e,t,r)=>Vt(e,typeof t!="symbol"?t+"":t,r);import{_ as lt,e as pt,K as Bt,J as Ht,I as Yt}from"./index-DLau6VlP.js";import{_ as jt}from"./vendor-runtime-Dp1pzeXC.js";import{C as Ut,o as Wt,w as _e,d as k,c as U,f as h,t as re,G as ce,W as nt,X as Qe,g as Q,r as X,P as Kt,a as we,u as j,F as Le,e as Be,n as ge,x as Ge,S as je,I as xt,i as _t,H as Ie,O as Gt,q as xe,v as Zt,a4 as ct}from"./vendor-vue-CmuMwCC6.js";import{af as ut,ag as dt,ah as Jt,X as Qt,e as bt,ai as at,ac as St,aj as er,ak as tr,al as wt,H as Tt,T as Mt,a2 as rr,am as nr,an as ar,ao as ir,ap as or,q as sr,o as lr,aq as cr}from"./vendor-libs-RyoEAG51.js";import"./vendor-ol-all-ZNWqDNbP.js";import"./vendor-geotiff-B6D64MFK.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BzG5Hdu9.js";import"./vendor-axios-Bdz_Fv8M.js";function ur(e){var i;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;!t||!r||(r.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(i=t.requestRender)==null||i.call(t))}function dr(e,t){var d;const r=e==null?void 0:e.scene,i=r==null?void 0:r.globe;if(!r||!i)return;mr(r,t),pr(r),i.enableLighting=!0,i.showGroundAtmosphere=!0,J(i,"dynamicAtmosphereLighting",!0),J(i,"dynamicAtmosphereLightingFromSun",!0),J(i,"atmosphereLightIntensity",11.5),J(i,"atmosphereHueShift",-.015),J(i,"atmosphereSaturationShift",.08),J(i,"atmosphereBrightnessShift",.02),J(i,"lightingFadeInDistance",15e6),J(i,"lightingFadeOutDistance",22e6),J(i,"nightFadeInDistance",9e6),J(i,"nightFadeOutDistance",16e6),it(t,i,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),it(t,i,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),J(i,"atmosphereRayleighScaleHeight",1e4),J(i,"atmosphereMieScaleHeight",3200),J(i,"atmosphereMieAnisotropy",.92),!r.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(r.skyAtmosphere=vr(t));const u=r.skyAtmosphere;u&&(u.show=!0,J(u,"perFragmentAtmosphere",!0),J(u,"dynamicAtmosphereLighting",!0),J(u,"dynamicAtmosphereLightingFromSun",!0),J(u,"hueShift",-.025),J(u,"saturationShift",.08),J(u,"brightnessShift",.03),J(u,"atmosphereLightIntensity",12),it(t,u,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),it(t,u,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),J(u,"atmosphereRayleighScaleHeight",1e4),J(u,"atmosphereMieScaleHeight",3200),J(u,"atmosphereMieAnisotropy",.92)),r.sun&&(r.sun.show=!0),r.moon&&(r.moon.show=!0),r.skyBox&&(r.skyBox.show=!0),"sunBloom"in r&&(r.sunBloom=!0),"highDynamicRange"in r&&(r.highDynamicRange=!0),gr(r),(d=r.requestRender)==null||d.call(r)}function hr(e){var u;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;if(!t||!r)return null;const i=(u=t.postProcessStages)==null?void 0:u.bloom;return{scene:He(t,["highDynamicRange","sunBloom","light"]),fog:He(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:He(r,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:He(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:He(t.sun,["show"]),moon:He(t.moon,["show"]),skyBox:He(t.skyBox,["show"]),bloom:{props:He(i,["enabled"]),uniforms:He(i==null?void 0:i.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function fr(e,t,r){var l,p,y,_;if(!r)return;const i=e==null?void 0:e.scene,u=i==null?void 0:i.globe;if(!i||!u)return;Ue(i,r.scene,t),Ue(i.fog,r.fog,t),Ue(u,r.globe,t),Ue(i.sun,r.sun,t),Ue(i.moon,r.moon,t),Ue(i.skyBox,r.skyBox,t),i.skyAtmosphere&&(Ue(i.skyAtmosphere,r.sky,t),r.skyAtmosphereExisted||(i.skyAtmosphere.show=!1));const d=(l=i.postProcessStages)==null?void 0:l.bloom;Ue(d,(p=r.bloom)==null?void 0:p.props,t),Ue(d==null?void 0:d.uniforms,(y=r.bloom)==null?void 0:y.uniforms,t),(_=i.requestRender)==null||_.call(i)}function mr(e,t){var r;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(r=t.Color)==null?void 0:r.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}J(e.light,"intensity",2.35)}function pr(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,J(t,"density",12e-5),J(t,"minimumBrightness",.035),J(t,"screenSpaceErrorFactor",2),J(t,"visualDensityScalar",.16))}function gr(e){var r;const t=(r=e==null?void 0:e.postProcessStages)==null?void 0:r.bloom;t&&(t.enabled=!0,t.uniforms&&(J(t.uniforms,"contrast",128),J(t.uniforms,"brightness",-.18),J(t.uniforms,"delta",1),J(t.uniforms,"sigma",2.5),J(t.uniforms,"stepSize",4.2)))}function vr(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function J(e,t,r){e&&t in e&&(e[t]=r)}function it(e,t,r,i,u,d){!t||!(r in t)||!(e!=null&&e.Cartesian3)||(t[r]=new e.Cartesian3(i,u,d))}function He(e,t){return e?t.reduce((r,i)=>(i in e&&(r[i]=yr(e[i])),r),{}):{}}function Ue(e,t={},r){!e||!t||Object.entries(t).forEach(([i,u])=>{i in e&&(e[i]=xr(u,r))})}function yr(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function xr(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const _r={key:0,class:"advanced-effects-root"},br={class:"effects-panel"},Sr={class:"panel-head"},wr={class:"effect-switches"},Tr={class:"switch-item"},Mr={class:"switch-item"},Lr={class:"switch-item"},Fr={class:"switch-item"},Pr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,r=pt(),i=X(null),u=X(!1),d=X(!1),l=X(!1),p=X(!1),y=X(!1);let _=null,P=null,A=null,N=!1,b=null,T=null,E=null,S=null,R=null,a=null,m=null,f=null,w=!1,C=null,L=0,H=0,V=typeof performance<"u"?performance.now():Date.now();function ne(){return E||(E=jt(()=>import("./cesiumFxRuntime-CvtFB7l4.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(v=>{var O;const g=(O=v==null?void 0:v.getCesiumFxEchartsRuntime)==null?void 0:O.call(v);if(!g)throw new Error("Cinematic FX 图表运行时加载失败");return T=g,g}).catch(v=>{throw E=null,v}),E)}async function K(){return T||ne()}const ee={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},W={hdr:null,bloom:null,sky:null};Ut(()=>{me()}),Wt(()=>{Ne()}),_e(()=>t.controls,v=>{ue(v||{})},{deep:!0,immediate:!0});function ue(v){Object.prototype.hasOwnProperty.call(v,"fog")&&(u.value=!!v.fog),Object.prototype.hasOwnProperty.call(v,"hbao")&&(d.value=!!v.hbao),Object.prototype.hasOwnProperty.call(v,"tiltShift")&&(l.value=!!v.tiltShift),Object.prototype.hasOwnProperty.call(v,"atmosphere")&&(p.value=!!v.atmosphere)}function me(){let v=0;S=window.setInterval(async()=>{var B,$;v+=1;const g=(B=t.getViewer)==null?void 0:B.call(t),O=(($=t.getCesium)==null?void 0:$.call(t))||window.Cesium;if(g&&O){clearInterval(S),S=null;try{ve(g),D(g),Te(g,O),z(g,O),r.success("高级视觉效果已启用。")}catch(te){r.error("高级视觉效果初始化失败",te),r.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}v>=150&&(clearInterval(S),S=null,r.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function ve(v){var O,B,$,te,le,s;const g=v==null?void 0:v.scene;if(g){if(typeof g.highDynamicRange=="boolean"&&(W.hdr=g.highDynamicRange),(O=g.postProcessStages)!=null&&O.bloom){const c=g.postProcessStages.bloom;W.bloom={enabled:!!c.enabled,contrast:(B=c.uniforms)==null?void 0:B.contrast,brightness:($=c.uniforms)==null?void 0:$.brightness,delta:(te=c.uniforms)==null?void 0:te.delta,sigma:(le=c.uniforms)==null?void 0:le.sigma,stepSize:(s=c.uniforms)==null?void 0:s.stepSize}}g.skyAtmosphere&&(W.sky={hueShift:g.skyAtmosphere.hueShift,saturationShift:g.skyAtmosphere.saturationShift,brightnessShift:g.skyAtmosphere.brightnessShift})}}function Te(v,g){var B;!((B=v==null?void 0:v.scene)!=null&&B.postProcessStages)||!(g!=null&&g.PostProcessStage)||(M(v,g),oe(v,g),Ae(v,g),p.value?ae(v,g,1200):ke(v))}function D(v){var O;const g=v==null?void 0:v.scene;(O=g==null?void 0:g.renderError)!=null&&O.addEventListener&&(g.rethrowRenderErrors=!1,f=g.renderError.addEventListener((B,$)=>{r.error("Cesium 渲染异常，已触发降级保护",$),I(),w||(w=!0,r.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function I(){u.value=!1,l.value=!1,d.value=!1,p.value=!1,_&&(_.enabled=!1),P&&(P.enabled=!1),A&&(A.enabled=!1)}function M(v,g){_||(_=new g.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new g.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),v.scene.postProcessStages.add(_),_.enabled=u.value)}function oe(v,g){var B,$;const O=(B=v==null?void 0:v.scene)==null?void 0:B.postProcessStages;O&&(O.ambientOcclusion?(A=O.ambientOcclusion,N=!1):($=g==null?void 0:g.PostProcessStageLibrary)!=null&&$.createAmbientOcclusionStage&&(A=g.PostProcessStageLibrary.createAmbientOcclusionStage(),O.add(A),N=!0),A&&(A.enabled=d.value,A.uniforms&&("intensity"in A.uniforms&&(A.uniforms.intensity=4.2),"bias"in A.uniforms&&(A.uniforms.bias=.08),"lengthCap"in A.uniforms&&(A.uniforms.lengthCap=.35),"stepSize"in A.uniforms&&(A.uniforms.stepSize=1.8),"frustumLength"in A.uniforms&&(A.uniforms.frustumLength=1200))))}function Ae(v,g){P||(P=new g.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),v.scene.postProcessStages.add(P),P.enabled=!1)}function z(v,g){const O=v==null?void 0:v.scene;O&&(m=O.preRender.addEventListener(()=>{var le;const B=pe(v),$=Number(((le=v==null?void 0:v.camera)==null?void 0:le.pitch)??-1.2);L+=1;const te=typeof performance<"u"?performance.now():Date.now();if(te-V>=1e3&&(H=Math.round(L*1e3/(te-V)),L=0,V=te),_&&(_.enabled=u.value,_.uniforms.cameraHeightFactor=Y(B,150,12e3),_.uniforms.fogDensity=55e-5+(1-_.uniforms.cameraHeightFactor)*.00125),A&&(A.enabled=d.value),P){const s=$>-.62,c=s?de(($+.62)/.5):0;P.enabled=l.value&&s,P.uniforms.blurStrength=c}p.value?ae(v,g,B):ke(v)}))}function ae(v,g,O){var s;const B=v==null?void 0:v.scene;if(!B)return;C||(C=hr(v)),dr(v,g),typeof B.highDynamicRange=="boolean"&&(B.highDynamicRange=!0);const $=(s=B.postProcessStages)==null?void 0:s.bloom;$&&($.enabled=!0,$.uniforms&&("contrast"in $.uniforms&&($.uniforms.contrast=149),"brightness"in $.uniforms&&($.uniforms.brightness=-.12),"delta"in $.uniforms&&($.uniforms.delta=1),"sigma"in $.uniforms&&($.uniforms.sigma=3.25),"stepSize"in $.uniforms&&($.uniforms.stepSize=5)));const te=B.skyAtmosphere;if(!te)return;const le=Y(O,500,12e4);te.hueShift=-.035+le*.035,te.saturationShift=-.14+le*.09,te.brightnessShift=.03+(1-le)*.08}function ke(v){var $,te;const g=v==null?void 0:v.scene;if(!g)return;const O=(($=t.getCesium)==null?void 0:$.call(t))||window.Cesium;if(C){fr(v,O,C),C=null;return}typeof g.highDynamicRange=="boolean"&&W.hdr!==null&&(g.highDynamicRange=W.hdr);const B=(te=g.postProcessStages)==null?void 0:te.bloom;B&&W.bloom&&(B.enabled=W.bloom.enabled,B.uniforms&&("contrast"in B.uniforms&&W.bloom.contrast!==void 0&&(B.uniforms.contrast=W.bloom.contrast),"brightness"in B.uniforms&&W.bloom.brightness!==void 0&&(B.uniforms.brightness=W.bloom.brightness),"delta"in B.uniforms&&W.bloom.delta!==void 0&&(B.uniforms.delta=W.bloom.delta),"sigma"in B.uniforms&&W.bloom.sigma!==void 0&&(B.uniforms.sigma=W.bloom.sigma),"stepSize"in B.uniforms&&W.bloom.stepSize!==void 0&&(B.uniforms.stepSize=W.bloom.stepSize))),g.skyAtmosphere&&W.sky&&(g.skyAtmosphere.hueShift=W.sky.hueShift,g.skyAtmosphere.saturationShift=W.sky.saturationShift,g.skyAtmosphere.brightnessShift=W.sky.brightnessShift)}function Ee(){R&&(clearInterval(R),R=null)}async function Oe(){var B,$;const v=!y.value;if(y.value=v,!v){Ee();return}const g=(B=t.getViewer)==null?void 0:B.call(t),O=(($=t.getCesium)==null?void 0:$.call(t))||window.Cesium;if(!g||!O){y.value=!1,r.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Fe(g,O),Ve(g,O),ze(g,O)}catch(te){y.value=!1,r.error("图表模块加载失败",te)}}async function Fe(v,g){await K(),await Kt(),i.value&&(b||(b=T.init(i.value),$e()),a||(a=()=>{b==null||b.resize()},window.addEventListener("resize",a)),b.resize(),ze(v,g))}function Ve(v,g){R||(R=window.setInterval(()=>{!b||!y.value||ze(v,g)},1200))}function ze(v,g){var le;const O=new Date,B=`${Ye(O.getHours())}:${Ye(O.getMinutes())}:${Ye(O.getSeconds())}`,$=Number((pe(v)/1e3).toFixed(2)),te=Number(g.Math.toDegrees(((le=v==null?void 0:v.camera)==null?void 0:le.pitch)??0).toFixed(1));Ce(ee.labels,B,20),Ce(ee.cameraHeightKm,$,20),Ce(ee.pitchDeg,te,20),Ce(ee.fps,H,20),b.setOption({xAxis:{data:ee.labels},series:[{data:ee.cameraHeightKm},{data:ee.pitchDeg},{data:ee.fps}]})}function $e(){b&&b.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function Ne(){var O,B;S&&(clearInterval(S),S=null),Ee();const v=(O=t.getViewer)==null?void 0:O.call(t),g=(B=v==null?void 0:v.scene)==null?void 0:B.postProcessStages;m&&(m(),m=null),f&&(f(),f=null),_&&g&&g.remove(_),_=null,P&&g&&g.remove(P),P=null,A&&(N&&g&&g.remove(A),A=null),N=!1,v&&ke(v),a&&(window.removeEventListener("resize",a),a=null),b&&(b.dispose(),b=null),T=null,w=!1}function pe(v){var $,te,le;const g=(te=($=v==null?void 0:v.scene)==null?void 0:$.globe)==null?void 0:te.ellipsoid,O=(le=v==null?void 0:v.camera)==null?void 0:le.positionWC;if(!g||!O)return 0;const B=g.cartesianToCartographic(O);return Math.max(0,Number((B==null?void 0:B.height)??0))}function Y(v,g,O){return!Number.isFinite(v)||O<=g?0:de((v-g)/(O-g))}function de(v){return Math.min(1,Math.max(0,Number(v)||0))}function Ce(v,g,O){v.push(g),v.length>O&&v.shift()}function Ye(v){return String(v).padStart(2,"0")}return(v,g)=>e.headless?Q("",!0):(k(),U("div",_r,[h("div",br,[h("div",Sr,[g[4]||(g[4]=h("span",{class:"panel-title"},"Cinematic FX",-1)),h("button",{class:"panel-btn",onClick:Oe},re(y.value?"隐藏图表":"显示图表"),1)]),h("div",wr,[h("label",Tr,[ce(h("input",{"onUpdate:modelValue":g[0]||(g[0]=O=>u.value=O),type:"checkbox"},null,512),[[nt,u.value]]),g[5]||(g[5]=h("span",null,"电影级高度雾",-1))]),h("label",Mr,[ce(h("input",{"onUpdate:modelValue":g[1]||(g[1]=O=>d.value=O),type:"checkbox"},null,512),[[nt,d.value]]),g[6]||(g[6]=h("span",null,"HBAO 微阴影",-1))]),h("label",Lr,[ce(h("input",{"onUpdate:modelValue":g[2]||(g[2]=O=>l.value=O),type:"checkbox"},null,512),[[nt,l.value]]),g[7]||(g[7]=h("span",null,"移轴摄影",-1))]),h("label",Fr,[ce(h("input",{"onUpdate:modelValue":g[3]||(g[3]=O=>p.value=O),type:"checkbox"},null,512),[[nt,p.value]]),g[8]||(g[8]=h("span",null,"动态大气 + Bloom",-1))])]),ce(h("div",{ref_key:"chartRef",ref:i,class:"fx-chart"},null,512),[[Qe,y.value]])])]))}},Ar=lt(Pr,[["__scopeId","data-v-1e562e70"]]),Er={key:0,class:"launcher-count"},Cr={class:"panel-header"},Rr={class:"panel-title-block"},Dr={class:"panel-mark"},Ir={class:"panel-copy"},kr={class:"panel-subtitle"},Or={class:"panel-actions"},zr=["title"],Nr={class:"panel-tabs","aria-label":"3D 工具分类"},Br=["aria-pressed","onClick"],Hr={class:"panel-scroll"},Ur={class:"panel-page"},Wr={class:"overview-grid"},Gr={class:"overview-tile"},$r={class:"overview-tile"},qr={class:"overview-tile"},Xr={key:0,class:"quick-actions"},Vr=["disabled","onClick"],Yr={key:1,class:"empty-state"},jr={class:"panel-page"},Kr=["aria-expanded"],Zr={class:"section-main"},Jr={class:"section-meta"},Qr={key:0,class:"section-body"},en={class:"option-grid"},tn=["disabled","aria-pressed","title","onClick"],rn={class:"custom-basemap-input-row"},nn=["disabled"],an={key:0,class:"custom-basemap-current"},on=["aria-expanded"],sn={class:"section-main"},ln={class:"section-meta"},cn={key:0,class:"section-body"},un={class:"option-grid"},dn=["aria-pressed","title","onClick"],hn=["aria-expanded"],fn={class:"section-main"},mn={class:"section-meta"},pn={key:0,class:"section-body"},gn={class:"overlay-list"},vn=["disabled","aria-pressed","title","onClick"],yn={class:"overlay-copy"},xn={class:"overlay-title"},_n={key:0,class:"overlay-desc"},bn={key:3,class:"empty-state"},Sn={class:"panel-page"},wn={class:"module-list"},Tn=["aria-expanded","onClick"],Mn={class:"module-icon"},Ln={class:"module-copy"},Fn={class:"module-title"},Pn={key:0,class:"module-desc"},An={class:"module-head-side"},En={key:0,class:"module-body"},Cn={key:0,class:"module-actions"},Rn=["disabled","onClick"],Dn={key:1,class:"control-list"},In={class:"control-label"},kn={class:"control-label-text"},On=["aria-label","title"],zn=["min","max","step","value","disabled","onInput"],Nn=["min","max","step","value","disabled","onInput"],Bn=["value","disabled","onInput"],Hn=["value","disabled","onChange"],Un=["value"],Wn=["aria-pressed","disabled","onClick"],Gn={key:4,class:"control-value"},$n={key:0,class:"empty-state"},Lt=2,qn={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(e,{emit:t}){const r=e,i=t,u=K(),d=u.uiStateVersion===Lt,l=X(u.activeTab||"scene"),p=X(!!u.compactMode),y=X(new Set(d?u.expandedLayerSectionIds||[]:[])),_=X(new Set(d?u.expandedModuleIds||[]:[])),P=X(r.customBasemapUrl||""),A=xe(()=>r.embedded||r.open),N=xe(()=>r.modules.find(D=>D.id==="scene")||null),b=xe(()=>{var D;return((D=N.value)==null?void 0:D.actions)||[]}),T=xe(()=>r.modules.filter(D=>D.id!=="scene")),E=xe(()=>T.value.filter(D=>D.statusTone==="success"||D.statusTone==="warning").length),S=xe(()=>r.overlayOptions.filter(D=>!!D.active).length),R=[{id:"scene",label:"场景",icon:dt},{id:"layers",label:"图层",icon:bt},{id:"modules",label:"模块",icon:ut}],a=xe(()=>{var D;return((D=r.basemapOptions.find(I=>I.value===r.activeBasemap))==null?void 0:D.label)||"未选择"}),m=xe(()=>{var D;return((D=r.terrainOptions.find(I=>I.value===r.activeTerrain))==null?void 0:D.label)||"未选择"});_e(()=>r.modules.map(D=>D.id),D=>{D.includes(l.value)||l.value==="scene"||l.value==="layers"||l.value==="modules"||(l.value="scene")},{immediate:!0}),_e([l,p,y,_],ee,{deep:!0}),_e(()=>r.customBasemapUrl,D=>{D!==P.value&&(P.value=D||"")});function f(D){i("update:open",D)}function w(D){return y.value.has(D)}function C(D){const I=new Set(y.value);I.has(D)?I.delete(D):I.add(D),y.value=I}function L(D){return _.value.has(D)}function H(D){const I=new Set(_.value);I.has(D)?I.delete(D):I.add(D),_.value=I}function V(D){D!=null&&D.disabled||i("update:activeBasemap",D.value)}function ne(){i("custom-basemap-submit",{url:P.value})}function K(){if(typeof window>"u")return{};try{const D=window.localStorage.getItem(r.storageKey);return D?JSON.parse(D):{}}catch{return{}}}function ee(){if(!(typeof window>"u"))try{window.localStorage.setItem(r.storageKey,JSON.stringify({uiStateVersion:Lt,activeTab:l.value,compactMode:p.value,expandedLayerSectionIds:[...y.value],expandedModuleIds:[..._.value]}))}catch{}}function W(D){return{scene:dt,effects:lr,wind:sr,fluid:or}[D]||ut}function ue(D,I){var oe;return((oe={scene:{home:ar,everest:wt,tileset:nr},wind:{load:rr,clear:Mt},fluid:{pick:Tt,clear:Mt}}[D])==null?void 0:oe[I])||ir}function me(D,I){i("module-action",{moduleId:D,actionId:I})}function ve(D,I,M){const oe=I.type==="range"?Number(M):M;i("control-change",{moduleId:D,controlId:I.id,value:oe})}function Te(D){D.disabled||i("overlay-toggle",{overlayId:D.value,value:!D.active})}return(D,I)=>(k(),U("aside",{class:ge(["cesium-tool-shell",{"is-open":A.value,"is-embedded":e.embedded}])},[!e.embedded&&!A.value?(k(),U("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:I[0]||(I[0]=M=>f(!0))},[we(j(ut),{size:18,"stroke-width":"2"}),I[8]||(I[8]=h("span",null,"高级控制台",-1)),E.value?(k(),U("span",Er,re(E.value),1)):Q("",!0)])):Q("",!0),ce(h("section",{class:ge(["cesium-tool-panel",{compact:p.value}]),"aria-label":"Cesium 高级控制台"},[h("header",Cr,[h("div",Rr,[h("span",Dr,[we(j(dt),{size:18,"stroke-width":"2"})]),h("span",Ir,[I[9]||(I[9]=h("span",{class:"panel-title"},"3D 高级控制台",-1)),h("span",kr,re(a.value)+" / "+re(m.value),1)])]),h("div",Or,[h("button",{class:"icon-btn",type:"button",title:p.value?"切换为舒展布局":"切换为紧凑布局",onClick:I[1]||(I[1]=M=>p.value=!p.value)},[we(j(Jt),{size:16,"stroke-width":"2"})],8,zr),e.embedded?Q("",!0):(k(),U("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:I[2]||(I[2]=M=>f(!1))},[we(j(Qt),{size:17,"stroke-width":"2"})]))])]),h("nav",Nr,[(k(),U(Le,null,Be(R,M=>h("button",{key:M.id,class:ge(["tab-btn",{active:l.value===M.id}]),type:"button","aria-pressed":l.value===M.id,onClick:oe=>l.value=M.id},[(k(),Ge(je(M.icon),{size:15,"stroke-width":"2"})),h("span",null,re(M.label),1)],10,Br)),64))]),h("div",Hr,[ce(h("section",Ur,[h("div",Wr,[h("div",Gr,[I[10]||(I[10]=h("span",{class:"overview-label"},"地图源",-1)),h("strong",null,re(a.value),1)]),h("div",$r,[I[11]||(I[11]=h("span",{class:"overview-label"},"地形",-1)),h("strong",null,re(m.value),1)]),h("div",qr,[I[12]||(I[12]=h("span",{class:"overview-label"},"模块",-1)),h("strong",null,re(E.value)+"/"+re(T.value.length),1)])]),b.value.length?(k(),U("div",Xr,[(k(!0),U(Le,null,Be(b.value,M=>(k(),U("button",{key:M.id,class:ge(["tool-action",[M.variant||"default",{active:M.active}]]),disabled:M.disabled,type:"button",onClick:oe=>me(N.value.id,M.id)},[(k(),Ge(je(ue(N.value.id,M.id)),{size:15,"stroke-width":"2"})),xt(" "+re(M.label),1)],10,Vr))),128))])):(k(),U("div",Yr," 暂无场景快捷操作 "))],512),[[Qe,l.value==="scene"]]),ce(h("section",jr,[e.basemapOptions.length?(k(),U("div",{key:0,class:ge(["option-group",{expanded:w("basemap")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":w("basemap"),onClick:I[3]||(I[3]=M=>C("basemap"))},[h("span",Zr,[we(j(bt),{size:16,"stroke-width":"2"}),I[13]||(I[13]=h("span",null,"底图源",-1))]),h("span",Jr,[h("span",null,re(a.value),1),we(j(at),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Kr),w("basemap")?(k(),U("div",Qr,[h("div",en,[(k(!0),U(Le,null,Be(e.basemapOptions,M=>(k(),U("button",{key:M.value,class:ge(["option-card",{active:M.value===e.activeBasemap}]),type:"button",disabled:M.disabled,"aria-pressed":M.value===e.activeBasemap,title:M.description||M.label,onClick:oe=>V(M)},[h("span",null,re(M.label),1),M.value===e.activeBasemap?(k(),Ge(j(St),{key:0,size:15,"stroke-width":"2.4"})):Q("",!0)],10,tn))),128))]),h("form",{class:"custom-basemap-editor",onSubmit:_t(ne,["prevent"])},[h("div",rn,[we(j(er),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),ce(h("input",{"onUpdate:modelValue":I[4]||(I[4]=M=>P.value=M),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Ie,P.value]]),h("button",{class:"custom-basemap-submit",type:"submit",disabled:!P.value.trim(),title:"加载自定义 XYZ"},[we(j(tr),{size:14,"stroke-width":"2"}),I[14]||(I[14]=h("span",null,"加载",-1))],8,nn)]),e.customBasemapUrl?(k(),U("div",an,re(e.customBasemapUrl),1)):Q("",!0)],32)])):Q("",!0)],2)):Q("",!0),e.terrainOptions.length?(k(),U("div",{key:1,class:ge(["option-group",{expanded:w("terrain")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":w("terrain"),onClick:I[5]||(I[5]=M=>C("terrain"))},[h("span",sn,[we(j(wt),{size:16,"stroke-width":"2"}),I[15]||(I[15]=h("span",null,"地形",-1))]),h("span",ln,[h("span",null,re(m.value),1),we(j(at),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,on),w("terrain")?(k(),U("div",cn,[h("div",un,[(k(!0),U(Le,null,Be(e.terrainOptions,M=>(k(),U("button",{key:M.value,class:ge(["option-card",{active:M.value===e.activeTerrain}]),type:"button","aria-pressed":M.value===e.activeTerrain,title:M.description||M.label,onClick:oe=>D.$emit("update:activeTerrain",M.value)},[h("span",null,re(M.label),1),M.value===e.activeTerrain?(k(),Ge(j(St),{key:0,size:15,"stroke-width":"2.4"})):Q("",!0)],10,dn))),128))])])):Q("",!0)],2)):Q("",!0),e.overlayOptions.length?(k(),U("div",{key:2,class:ge(["option-group",{expanded:w("overlay")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":w("overlay"),onClick:I[6]||(I[6]=M=>C("overlay"))},[h("span",fn,[we(j(Tt),{size:16,"stroke-width":"2"}),I[16]||(I[16]=h("span",null,"叠加层",-1))]),h("span",mn,[h("span",null,re(S.value)+"/"+re(e.overlayOptions.length),1),we(j(at),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,hn),w("overlay")?(k(),U("div",pn,[h("div",gn,[(k(!0),U(Le,null,Be(e.overlayOptions,M=>(k(),U("button",{key:M.value,class:ge(["overlay-row",{active:!!M.active}]),type:"button",disabled:M.disabled,"aria-pressed":!!M.active,title:M.description||M.label,onClick:oe=>Te(M)},[h("span",yn,[h("span",xn,re(M.label),1),M.description?(k(),U("span",_n,re(M.description),1)):Q("",!0)]),h("span",{class:ge(["toggle-control",{active:!!M.active}]),"aria-hidden":"true"},[...I[17]||(I[17]=[h("span",{class:"toggle-track"},[h("span",{class:"toggle-thumb"})],-1)])],2)],10,vn))),128))])])):Q("",!0)],2)):Q("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(k(),U("div",bn," 暂无图层配置项 ")):Q("",!0)],512),[[Qe,l.value==="layers"]]),ce(h("section",Sn,[h("div",wn,[(k(!0),U(Le,null,Be(T.value,M=>{var oe,Ae;return k(),U("article",{key:M.id,class:ge(["module-item",{expanded:L(M.id)}])},[h("button",{class:"module-head",type:"button","aria-expanded":L(M.id),onClick:z=>H(M.id)},[h("span",Mn,[(k(),Ge(je(W(M.id)),{size:16,"stroke-width":"2"}))]),h("span",Ln,[h("span",Fn,re(M.title),1),M.description?(k(),U("span",Pn,re(M.description),1)):Q("",!0)]),h("span",An,[M.status?(k(),U("span",{key:0,class:ge(["module-status",M.statusTone||"neutral"])},re(M.status),3)):Q("",!0),we(j(at),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Tn),L(M.id)?(k(),U("div",En,[(oe=M.actions)!=null&&oe.length?(k(),U("div",Cn,[(k(!0),U(Le,null,Be(M.actions,z=>(k(),U("button",{key:z.id,class:ge(["tool-action",[z.variant||"default",{active:z.active}]]),disabled:z.disabled,type:"button",onClick:ae=>me(M.id,z.id)},[(k(),Ge(je(ue(M.id,z.id)),{size:14,"stroke-width":"2"})),xt(" "+re(z.label),1)],10,Rn))),128))])):Q("",!0),(Ae=M.controls)!=null&&Ae.length?(k(),U("div",Dn,[(k(!0),U(Le,null,Be(M.controls,z=>(k(),U("label",{key:z.id,class:ge(["control-row",`control-${z.type}`])},[h("span",In,[h("span",kn,re(z.label),1),z.tooltip?(k(),U("span",{key:0,class:"control-help","aria-label":z.tooltip,title:z.tooltip,onClick:I[7]||(I[7]=_t(()=>{},["prevent","stop"]))}," ? ",8,On)):Q("",!0)]),z.type==="range"?(k(),U(Le,{key:0},[h("input",{class:"control-range",type:"range",min:z.min,max:z.max,step:z.step,value:z.value,disabled:z.disabled,onInput:ae=>ve(M.id,z,ae.target.value)},null,40,zn),h("input",{class:"control-number",type:"number",min:z.min,max:z.max,step:z.step,value:z.value,disabled:z.disabled,onInput:ae=>ve(M.id,z,ae.target.value)},null,40,Nn)],64)):z.type==="color"?(k(),U(Le,{key:1},[h("input",{class:"control-color",type:"color",value:z.value,disabled:z.disabled,onInput:ae=>ve(M.id,z,ae.target.value)},null,40,Bn),h("span",{class:"control-color-swatch",style:Gt({backgroundColor:z.value})},null,4)],64)):z.type==="select"?(k(),U("select",{key:2,class:"control-select",value:z.value,disabled:z.disabled,onChange:ae=>ve(M.id,z,ae.target.value)},[(k(!0),U(Le,null,Be(z.options||[],ae=>(k(),U("option",{key:ae.value,value:ae.value},re(ae.label),9,Un))),128))],40,Hn)):z.type==="toggle"?(k(),U("button",{key:3,class:ge(["toggle-control",{active:!!z.value}]),type:"button","aria-pressed":!!z.value,disabled:z.disabled,onClick:ae=>ve(M.id,z,!z.value)},[...I[18]||(I[18]=[h("span",{class:"toggle-track"},[h("span",{class:"toggle-thumb"})],-1)])],10,Wn)):Q("",!0),z.displayValue?(k(),U("span",Gn,re(z.displayValue),1)):Q("",!0)],2))),128))])):Q("",!0)])):Q("",!0)],2)}),128))]),T.value.length?Q("",!0):(k(),U("div",$n," 暂无可用功能模块 "))],512),[[Qe,l.value==="modules"]])])],2),[[Qe,e.embedded||A.value]])],2))}},Xn=lt(qn,[["__scopeId","data-v-c2b974d5"]]);function Vn(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(R){return(R==null?void 0:R._view)||(R==null?void 0:R.view)}function r(R){const a=t(R);if(!(a!=null&&a.passState))throw new Error("Cesium scene passState is unavailable.");return a.passState}function i(R){const a=t(R);return(a==null?void 0:a.frustumCommandsList)||(a==null?void 0:a._frustumCommandsList)||[]}const u=`
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
`,l=`
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
`,y=`
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
`,_=`
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
`;class P{constructor(a){this.commandType=a.commandType,this.geometry=a.geometry,this.attributeLocations=a.attributeLocations,this.primitiveType=a.primitiveType,this.uniformMap=a.uniformMap,this.vertexShaderSource=a.vertexShaderSource,this.fragmentShaderSource=a.fragmentShaderSource,this.rawRenderState=a.rawRenderState,this.framebuffer=a.framebuffer,this.isPostRender=a.isPostRender,this.outputTexture=a.outputTexture,this.autoClear=e.defaultValue(a.autoClear,!1),this.preExecute=a.preExecute,this.modelMatrix=e.defaultValue(a.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(a){switch(this.commandType){case"Draw":{const m=e.VertexArray.fromGeometry({context:a,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),f=e.ShaderProgram.fromCache({context:a,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),w=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:m,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:f,framebuffer:this.framebuffer,renderState:w,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(a,m){this.geometry=m;const f=e.VertexArray.fromGeometry({context:a,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=f}update(a){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(a.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&a.commandList.push(this.clearCommand),a.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class A{constructor(){}static loadText(a){const m=new XMLHttpRequest;return m.open("GET",a,!1),m.send(),m.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(a){if(e.defined(a.arrayBufferView)){const f={};f.arrayBufferView=a.arrayBufferView,a.source=f,a.flipY=!1}return new e.Texture(a)}static createDepthFramebuffer(a,m,f){return new e.Framebuffer({context:a,colorTextures:[this.createTexture({context:a,width:m,height:f,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(m*f*4)})],depthRenderbuffer:new e.Renderbuffer({context:a,width:m,height:f,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(a,m,f,w=!1){const C={context:a,colorTextures:[m],destroyAttachments:w};return f&&(C.depthTexture=f),new e.Framebuffer(C)}static createRawRenderState(a){const w={viewport:a.viewport,depthTest:a.depthTest,depthMask:a.depthMask,blending:a.blending};return e.Appearance.getDefaultRenderState(!0,!1,w)}}const S=class S{constructor(a,m={}){if(!a)throw new Error("Cesium Viewer is required");this.viewer=a,this._initConfiguration(m),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(a){this.config={resolution:new e.Cartesian2(a.width||S.DEFAULTS.width,a.height||S.DEFAULTS.height),dimensions:a.dimensions||S.DEFAULTS.dimensions.clone(),heightRange:{min:a.minHeight??S.DEFAULTS.heightRange[0],max:a.maxHeight??S.DEFAULTS.heightRange[1]},baseHeight:a.baseHeight??S.DEFAULTS.baseHeight,fluidParams:a.fluidParams||S.DEFAULTS.fluidParams.clone(),customParams:a.customParams||S.DEFAULTS.customParams.clone(),waterColor:a.waterColor||S.DEFAULTS.waterColor.clone(),lonLat:a.lonLat||[...S.DEFAULTS.lonLat],timeStep:a.timeStep||S.DEFAULTS.timeStep,heightMapSource:a.heightMapSource||S.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(a){const m=Number(a);!Number.isFinite(m)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,m)),this.resetSimulation())}resetSimulation(){var a,m;this._frameCount=0,(m=(a=this.viewer.scene).requestRender)==null||m.call(a)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const a=()=>A.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:a(),B:a(),C:a(),D:a()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(a){if(!(a!=null&&a.arrayBufferView)||!a.width||!a.height)throw new Error("Invalid height map source.");return A.createTexture({context:this.viewer.scene.context,width:a.width,height:a.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:a.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var W,ue;const a=this.viewer.scene.context,m=A.createDepthFramebuffer(a,this.config.resolution.x,this.config.resolution.y),f=this.viewer.scene,w=f.frameState,C=r(this.viewer.scene),L=f.camera,H=w.camera,V=C.framebuffer,ne=e.BoundingRectangle.clone(C.viewport,new e.BoundingRectangle);let K=null,ee=[];try{C.viewport.x=0,C.viewport.y=0,C.viewport.width=this.config.resolution.x,C.viewport.height=this.config.resolution.y,C.framebuffer=m,f.camera=this.heightMapCamera,w.camera=this.heightMapCamera,w.context.uniformState.updateCamera(this.heightMapCamera),ee=this._processHeightMapShaders(),this._renderDepthPrepass(C);const me=A.createTexture({context:a,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return K=A.createFramebuffer(a,me),this._copyTexture(m.getColorTexture(0),K),me}finally{this._restoreHeightMapShaders(ee),C.framebuffer=V,e.BoundingRectangle.clone(ne,C.viewport),f.camera=L,w.camera=H,H&&w.context.uniformState.updateCamera(H),K&&!((W=K.isDestroyed)!=null&&W.call(K))&&K.destroy(),m&&!((ue=m.isDestroyed)!=null&&ue.call(m))&&m.destroy()}}_renderDepthPrepass(a){const m=this.viewer.scene.frameState;m.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(w=>w.execute(this.viewer.scene.context,a))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const a={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...a,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:d}),this._createComputePass("B",{uniforms:{...a,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:l}),this._createComputePass("C",{uniforms:{...a,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:p}),this._createComputePass("D",{uniforms:{...a,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:y})]}_createComputePass(a,{uniforms:m,shaderSource:f}){return new P({commandType:"Compute",uniformMap:m,fragmentShaderSource:new e.ShaderSource({sources:[u,f]}),geometry:A.getFullscreenQuad(),outputTexture:this.textures[a],preExecute:w=>w.commandToExecute.outputTexture=this.textures[a]})}_createMainRenderPass(){const a=b([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new P({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[u,_]}),geometry:this._createBoxGeometry(),modelMatrix:a,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var a,m,f,w;return(w=(f=(m=(a=t(this.viewer.scene))==null?void 0:a.globeDepth)==null?void 0:m.colorFramebufferManager)==null?void 0:f._colorTextures)==null?void 0:w[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(a=>this.viewer.scene.primitives.add(a)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(a){const m=this.viewer.camera.getPickRay(a);return this.viewer.scene.globe.pick(m,this.viewer.scene)}_createOrthographicCamera(){const a=new e.Camera(this.viewer.scene);a.frustum=new e.OrthographicOffCenterFrustum;const[m,f]=this.config.lonLat,w=e.Cartesian3.fromDegrees(m,f,this.config.baseHeight),C=e.Transforms.eastNorthUpToFixedFrame(w),L=a.frustum;L.near=.01,L.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),L.left=-this.config.dimensions.x/2,L.right=this.config.dimensions.x/2,L.bottom=-this.config.dimensions.y/2,L.top=this.config.dimensions.y/2;const H=e.Matrix4.getColumn(C,2,new e.Cartesian3);e.Cartesian3.negate(H,H);const V=e.Matrix4.getColumn(C,1,new e.Cartesian3),ne=e.Matrix4.getColumn(C,0,new e.Cartesian3),K=e.Cartesian3.multiplyByScalar(H,-L.far,new e.Cartesian3);return a.position=e.Cartesian3.add(w,K,new e.Cartesian3),a.direction=H,a.up=V,a.right=ne,a}destroy(){var a,m;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(f=>{f&&this.viewer.scene.primitives.remove(f)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(f=>{var w;f&&!((w=f.isDestroyed)!=null&&w.call(f))&&f.destroy()}),this.textures={},this._heightMap&&!((m=(a=this._heightMap).isDestroyed)!=null&&m.call(a))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(a,m){const f=this.viewer.scene.context,w=r(this.viewer.scene),C=f.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>a},owner:this}),L=w.framebuffer;w.framebuffer=m,C.execute(f,w),w.framebuffer=L}_getDepthRenderCommands(){var f,w;const a=[],m=i(this.viewer.scene);for(let C=0;C<m.length;++C){const L=m[C],H=(f=L==null?void 0:L.commands)==null?void 0:f[2],V=((w=L==null?void 0:L.indices)==null?void 0:w[2])??(H==null?void 0:H.length)??0;H&&V>0&&a.push(...H.slice(0,V))}return a}_processHeightMapShaders(){const a=[],m=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),f=e.Matrix4.inverse(m,new e.Matrix4),w=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(L=>{var ee;if(!((ee=L==null?void 0:L.shaderProgram)!=null&&ee.fragmentShaderSource)||!L.uniformMap)return;const H=Object.prototype.hasOwnProperty.call(L.uniformMap,"u_inverseEnuMatrix"),V=L.uniformMap.u_inverseEnuMatrix,ne=L.shaderProgram,K=new e.Matrix4;L.uniformMap.u_inverseEnuMatrix=()=>{const W=L.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(f,W,K)},L.heightMap_ShaderProgram||(L.heightMap_ShaderProgram=this._getDerivedShaderProgram(w.context,L.shaderProgram,"Height_Map")),L.shaderProgram=L.heightMap_ShaderProgram,a.push({command:L,hadInverseUniform:H,originalInverseUniform:V,originalShaderProgram:ne})}),a}_restoreHeightMapShaders(a){a.forEach(m=>{const{command:f,hadInverseUniform:w,originalInverseUniform:C,originalShaderProgram:L}=m;f!=null&&f.uniformMap&&(f.shaderProgram=L,w?f.uniformMap.u_inverseEnuMatrix=C:delete f.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(a,m,f){let w=a.shaderCache.getDerivedShaderProgram(m,f);return e.defined(w)||(w=this._createHeightMapShaderProgram(a,m,f)),w}_createHeightMapShaderProgram(a,m,f){const w=this._modifyFragmentShader(m.fragmentShaderSource);return a.shaderCache.createDerivedShaderProgram(m,f,{vertexShaderSource:m.vertexShaderSource,fragmentShaderSource:w,attributeLocations:m._attributeLocations})}_modifyFragmentShader(a){const m=a.sources.map(f=>e.ShaderSource.replaceMain(f,"czm_heightMap_main"));return m.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:m,defines:a.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};yt(S,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let N=S;const b=(R=[0,0,0],a=[0,0,0],m=[1,1,1])=>{const f=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(a[0]))),w=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(a[1]))),C=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(a[2])));R instanceof e.Cartesian3||(R=e.Cartesian3.fromDegrees(...R));const L=e.Transforms.eastNorthUpToFixedFrame(R);e.Matrix4.multiply(L,f,L),e.Matrix4.multiply(L,w,L),e.Matrix4.multiply(L,C,L);const H=e.Matrix4.fromScale(new e.Cartesian3(...m));return e.Matrix4.multiply(L,H,new e.Matrix4)},T=`
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
    `;function E(){return new e.PostProcessStage({fragmentShader:T})}return{FluidRenderer:N,createSkyEffect:E}}const Yn={key:0,class:"fluid-root"},jn={class:"fluid-panel"},Kn={class:"panel-actions"},Zn=["disabled"],Jn={key:0,class:"selected-text"},Qn={class:"param-list"},ea={class:"param-row"},ta={class:"param-row"},ra={class:"param-row"},na={key:0,class:"param-row"},aa=["min","max","step"],ia=["min","max","step"],oa={class:"param-row color-row"},Ft=1024,ot=1e4,Pt=1200,sa=100,la=.01,ca=.03,ua=60,ht=64,da=160,ha={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:r}){const i=e,u=r,d=pt(),l=X(10),p=X(20),y=X(3),_=X("#0d4fa3"),P=X(null),A=X(null),N=X(null),b=X(!1),T=X(!1),E=X(null),S=X(null);let R=null,a=null,m=null,f=null,w=null,C=null,L=0;const H=xe(()=>!Number.isFinite(E.value)||!Number.isFinite(S.value)?"":`经度 ${E.value.toFixed(6)} / 纬度 ${S.value.toFixed(6)}`),V=xe(()=>Number.isFinite(A.value)&&Number.isFinite(N.value)),ne=xe(()=>{if(!V.value)return 1;const s=Math.abs(N.value-A.value);return Math.max(s/1e3,.01)});_e([l,p,y,_],Ce),_e(P,Ye),_e(()=>i.params,s=>{ee(s||{})},{deep:!0,immediate:!0}),_e([b,T,H,P,A,N],W,{immediate:!0}),Zt(()=>{te(!0)});function K(){var n,o;const s=(n=i.getViewer)==null?void 0:n.call(i),c=((o=i.getCesium)==null?void 0:o.call(i))||window.Cesium;if(!s||!c)return d.warning("Cesium 场景尚未就绪。"),null;if(!R){const x=Vn(c);R=x.FluidRenderer,a=x.createSkyEffect}return{viewer:s,Cesium:c}}function ee(s){Number.isFinite(Number(s.threshold))&&(l.value=Number(s.threshold)),Number.isFinite(Number(s.blend))&&(p.value=Number(s.blend)),Number.isFinite(Number(s.lightStrength))&&(y.value=Number(s.lightStrength)),Ne(s.waterColor)&&(_.value=s.waterColor),Number.isFinite(Number(s.waterLevel))&&(P.value=Number(s.waterLevel))}function W(){u("state-change",{isPicking:b.value,hasFluid:T.value,selectedText:H.value,waterLevel:P.value,waterLevelMin:A.value,waterLevelMax:N.value})}function ue(){const s=K();if(!s)return;const{viewer:c,Cesium:n}=s;B(),v(c,n),b.value=!0,m=new n.ScreenSpaceEventHandler(c.scene.canvas),m.setInputAction(o=>{me(c,n,o.position)},n.ScreenSpaceEventType.LEFT_CLICK)}async function me(s,c,n){var Pe,Re;const o=de(s,n);if(!o){d.warning("未选中可用地形位置。");return}const x=++L;B();const F=c.Cartographic.fromCartesian(o),G=c.Math.toDegrees(F.longitude),q=c.Math.toDegrees(F.latitude),se=Number(F.height),ie=Number.isFinite(se)?se:0,he=new c.Cartesian3(ot,ot,0);Bt("正在请求模拟范围高度数据...");try{$();const be=Number(l.value)||0,De=Number(p.value)||0,ye=Number(y.value)||0,qe=await ve(s,c,{lon:G,lat:q,centerHeight:ie,dimensions:he}),Se=Ee(qe,ie),tt=Se.baseHeight,rt=Se.depth,Me=Oe(Se,ie),qt=new c.Cartesian3(ot,ot,rt);if(x!==L)return;A.value=Se.minHeight,N.value=Se.maxHeight,P.value=Me,qe||d.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),f=new R(s,{lonLat:[G,q],width:Ft,height:Ft,dimensions:qt,baseHeight:tt,minHeight:Se.minHeight,maxHeight:Se.maxHeight,heightMapSource:qe,waterColor:ze(c,_.value),customParams:new c.Cartesian4(be,De,ye,10),fluidParams:new c.Cartesian4(.9+ye/10*.099,Math.min(1,De/50),be/5e4,Fe(Me,Se))}),E.value=G,S.value=q,T.value=!0,(Re=(Pe=s.scene).requestRender)==null||Re.call(Pe),d.success("水体流体已创建。")}catch(be){d.error("水体流体创建失败",be),d.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{Ht()}}async function ve(s,c,n){const o=s==null?void 0:s.terrainProvider,x=D(n.dimensions);if(!o)return null;if(c.EllipsoidTerrainProvider&&o instanceof c.EllipsoidTerrainProvider)return ae(x);if(typeof c.sampleTerrain!="function"&&typeof c.sampleTerrainMostDetailed!="function")return null;try{return await Te(s,c,n,x)}catch(F){if(x<=ht)throw F;return Te(s,c,n,ht)}}async function Te(s,c,n,o){const x=M(c,n,o),F=await oe(c,s.terrainProvider,x);return z(F||x,{size:o})}function D(s){const c=Math.max(Number(s==null?void 0:s.x)||0,Number(s==null?void 0:s.y)||0),n=Math.ceil(c/ua)+1;return I(n,ht,da)}function I(s,c,n){return Math.max(c,Math.min(n,Math.round(s)))}function M(s,{lon:c,lat:n,centerHeight:o,dimensions:x},F){const G=s.Cartesian3.fromDegrees(c,n,o),q=s.Transforms.eastNorthUpToFixedFrame(G),se=[],ie=Math.max(1,F-1);for(let he=0;he<F;he++){const Re=(.5-he/ie)*x.y;for(let be=0;be<F;be++){const ye=(be/ie-.5)*x.x,qe=new s.Cartesian3(ye,Re,0),Se=s.Matrix4.multiplyByPoint(q,qe,new s.Cartesian3);se.push(s.Cartographic.fromCartesian(Se))}}return se}async function oe(s,c,n){const o=Ae(c);return Number.isInteger(o)&&typeof s.sampleTerrain=="function"?s.sampleTerrain(c,o,n):typeof s.sampleTerrainMostDetailed=="function"?s.sampleTerrainMostDetailed(c,n):s.sampleTerrain(c,10,n)}function Ae(s){const c=Number(s==null?void 0:s._bottomLevel);return Number.isFinite(c)?Math.max(0,c-1):null}function z(s,{size:c}){var x;const n=ke(s);if(!n)return null;const o=new Float32Array(c*c*4);for(let F=0;F<c*c;F++){const G=Number((x=s[F])==null?void 0:x.height),q=F*4;o[q]=Number.isFinite(G)?Y(G,n.minHeight,n.maxHeight):n.minHeight,o[q+1]=0,o[q+2]=0,o[q+3]=1}return{width:c,height:c,arrayBufferView:o,minHeight:n.minHeight,maxHeight:n.maxHeight}}function ae(s){return{width:s,height:s,arrayBufferView:new Float32Array(s*s*4),minHeight:0,maxHeight:0}}function ke(s){let c=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;for(const o of s||[]){const x=Number(o==null?void 0:o.height);Number.isFinite(x)&&(c=Math.min(c,x),n=Math.max(n,x))}return!Number.isFinite(c)||!Number.isFinite(n)?null:{minHeight:c,maxHeight:n}}function Ee(s,c){const n=Number(s==null?void 0:s.minHeight),o=Number(s==null?void 0:s.maxHeight);if(Number.isFinite(n)&&Number.isFinite(o)){const G=Number(c),q=Number.isFinite(G)?Math.min(n,o,G):Math.min(n,o),se=Number.isFinite(G)?Math.max(n,o,G):Math.max(n,o),ie=Math.max(se-q,la);return{baseHeight:q,depth:ie,minHeight:q,maxHeight:q+ie}}const x=Number(c),F=Number.isFinite(x)?x-sa:0;return{baseHeight:F,depth:Pt,minHeight:F,maxHeight:F+Pt}}function Oe(s,c){const n=s.minHeight+s.depth*ca,o=Number(c),x=Number.isFinite(o)?o:n;return Y(x,s.minHeight,s.maxHeight)}function Fe(s,c){const n=c.maxHeight-c.minHeight;return!Number.isFinite(n)||n<=0?0:Y((s-c.minHeight)/n,0,1)}function Ve(){return!Number.isFinite(A.value)||!Number.isFinite(N.value)?null:{minHeight:Math.min(A.value,N.value),maxHeight:Math.max(A.value,N.value)}}function ze(s,c){const n=pe(c)||pe("#0d4fa3");return new s.Cartesian3(n.red,n.green,n.blue)}function $e(){var n;const s=pe(_.value),c=(n=f==null?void 0:f.config)==null?void 0:n.waterColor;!s||!c||(c.x=s.red,c.y=s.green,c.z=s.blue)}function Ne(s){return typeof s=="string"&&/^#[0-9a-f]{6}$/i.test(s)}function pe(s){return Ne(s)?{red:Number.parseInt(s.slice(1,3),16)/255,green:Number.parseInt(s.slice(3,5),16)/255,blue:Number.parseInt(s.slice(5,7),16)/255}:null}function Y(s,c,n){return Math.max(c,Math.min(n,s))}function de(s,c){if(!c)return null;if(s.scene.pickPositionSupported&&typeof s.scene.pickPosition=="function"){const o=s.scene.pickPosition(c);if(o)return o}const n=s.camera.getPickRay(c);return n?s.scene.globe.pick(n,s.scene):null}function Ce(){var o,x,F;if(!(f!=null&&f.config))return;const s=Number(l.value)||0,c=Number(p.value)||0,n=Number(y.value)||0;f.config.customParams&&(f.config.customParams.x=s,f.config.customParams.y=c,f.config.customParams.z=n),f.config.fluidParams&&(f.config.fluidParams.x=.9+n/10*.099,f.config.fluidParams.y=Math.min(1,c/50),f.config.fluidParams.z=s/5e4),$e(),(F=(x=(o=f.viewer)==null?void 0:o.scene)==null?void 0:x.requestRender)==null||F.call(x)}function Ye(){var x,F,G,q;if(!((x=f==null?void 0:f.config)!=null&&x.fluidParams))return;const s=Ve(),c=Number(P.value);if(!s||!Number.isFinite(c))return;const n=Y(c,s.minHeight,s.maxHeight);if(n!==c){P.value=n;return}const o=Fe(n,s);typeof f.setInitialWaterLevel=="function"?f.setInitialWaterLevel(o):(f.config.fluidParams.w=o,(q=(G=(F=f.viewer)==null?void 0:F.scene)==null?void 0:G.requestRender)==null||q.call(G))}function v(s,c){var n,o;if(!C){const x=s.scene;C={shadows:s.shadows,resolutionScale:s.resolutionScale,msaaSamples:x.msaaSamples,depthTestAgainstTerrain:x.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:x.logarithmicDepthBuffer,highDynamicRange:x.highDynamicRange,fogEnabled:(n=x.fog)==null?void 0:n.enabled,showGroundAtmosphere:x.globe.showGroundAtmosphere,skyAtmosphereShow:(o=x.skyAtmosphere)==null?void 0:o.show,enableLighting:x.globe.enableLighting}}s.shadows=!0,s.resolutionScale=1,s.scene.msaaSamples=4,s.scene.globe.depthTestAgainstTerrain=!0,s.scene.logarithmicDepthBuffer=!0,s.scene.highDynamicRange=!0,s.scene.fog&&(s.scene.fog.enabled=!0),s.scene.globe.showGroundAtmosphere=!0,s.scene.skyAtmosphere&&(s.scene.skyAtmosphere.show=!0),s.scene.globe.enableLighting=!0,!w&&a&&(w=a(c),s.scene.postProcessStages.add(w))}function g(s){if(!s||!C)return;const c=s.scene;s.shadows=C.shadows,s.resolutionScale=C.resolutionScale,C.msaaSamples!==void 0&&(c.msaaSamples=C.msaaSamples),c.globe.depthTestAgainstTerrain=C.depthTestAgainstTerrain,c.logarithmicDepthBuffer=C.logarithmicDepthBuffer,c.highDynamicRange=C.highDynamicRange,c.fog&&C.fogEnabled!==void 0&&(c.fog.enabled=C.fogEnabled),c.globe.showGroundAtmosphere=C.showGroundAtmosphere,c.skyAtmosphere&&C.skyAtmosphereShow!==void 0&&(c.skyAtmosphere.show=C.skyAtmosphereShow),c.globe.enableLighting=C.enableLighting,C=null}function O(){te(!1),d.success("水体流体已清除。")}function B(){m&&(m.destroy(),m=null),b.value=!1}function $(){if(f){try{f.destroy()}catch{}f=null,T.value=!1}}function te(s){var n,o,x;const c=(n=i.getViewer)==null?void 0:n.call(i);if(L+=1,B(),$(),E.value=null,S.value=null,P.value=null,A.value=null,N.value=null,c&&w){try{c.scene.postProcessStages.remove(w)}catch{}w=null}s&&c&&g(c),(x=(o=c==null?void 0:c.scene)==null?void 0:o.requestRender)==null||x.call(o)}function le(){te(!0),u("close")}return t({startPickHeightMap:ue,clearFluid:O}),(s,c)=>e.headless?Q("",!0):(k(),U("div",Yn,[h("div",jn,[h("div",{class:"panel-head"},[c[9]||(c[9]=h("span",{class:"panel-title"},"水体流体",-1)),h("button",{class:"panel-close",title:"关闭",onClick:le}," × ")]),h("div",Kn,[h("button",{class:ge(["action-btn primary",{active:b.value}]),onClick:ue},re(b.value?"等待选点":"捕捉高度图"),3),h("button",{class:"action-btn",disabled:!T.value&&!b.value,onClick:O}," 清除 ",8,Zn)]),H.value?(k(),U("div",Jn,re(H.value),1)):Q("",!0),h("div",Qn,[h("label",ea,[c[10]||(c[10]=h("span",null,"阈值",-1)),ce(h("input",{"onUpdate:modelValue":c[0]||(c[0]=n=>l.value=n),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Ie,l.value,void 0,{number:!0}]]),ce(h("input",{"onUpdate:modelValue":c[1]||(c[1]=n=>l.value=n),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Ie,l.value,void 0,{number:!0}]])]),h("label",ta,[c[11]||(c[11]=h("span",null,"混合",-1)),ce(h("input",{"onUpdate:modelValue":c[2]||(c[2]=n=>p.value=n),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Ie,p.value,void 0,{number:!0}]]),ce(h("input",{"onUpdate:modelValue":c[3]||(c[3]=n=>p.value=n),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Ie,p.value,void 0,{number:!0}]])]),h("label",ra,[c[12]||(c[12]=h("span",null,"光强",-1)),ce(h("input",{"onUpdate:modelValue":c[4]||(c[4]=n=>y.value=n),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Ie,y.value,void 0,{number:!0}]]),ce(h("input",{"onUpdate:modelValue":c[5]||(c[5]=n=>y.value=n),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Ie,y.value,void 0,{number:!0}]])]),V.value?(k(),U("label",na,[c[13]||(c[13]=h("span",null,"水位",-1)),ce(h("input",{"onUpdate:modelValue":c[6]||(c[6]=n=>P.value=n),type:"range",min:A.value,max:N.value,step:ne.value},null,8,aa),[[Ie,P.value,void 0,{number:!0}]]),ce(h("input",{"onUpdate:modelValue":c[7]||(c[7]=n=>P.value=n),class:"number-input",type:"number",min:A.value,max:N.value,step:ne.value},null,8,ia),[[Ie,P.value,void 0,{number:!0}]])])):Q("",!0),h("label",oa,[c[14]||(c[14]=h("span",null,"水色",-1)),ce(h("input",{"onUpdate:modelValue":c[8]||(c[8]=n=>_.value=n),class:"color-input",type:"color"},null,512),[[Ie,_.value]]),h("span",{class:"color-swatch",style:Gt({backgroundColor:_.value})},null,4)])])])]))}},fa=lt(ha,[["__scopeId","data-v-9ecdafb8"]]),gt="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",ma=`${gt}Cesium.js`,pa=`${gt}Widgets/widgets.css`;async function ga({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=gt),await ya(pa,"cesium-widgets-style"),await va(ma,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到");return $t(t,e),t}function $t(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function va(e,t){return new Promise((r,i)=>{const u=document.getElementById(t);if(u){if(u.getAttribute("data-loaded")==="true"){r();return}u.addEventListener("load",()=>r(),{once:!0}),u.addEventListener("error",()=>i(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const d=document.createElement("script");d.id=t,d.src=e,d.async=!0,d.onload=()=>{d.setAttribute("data-loaded","true"),r()},d.onerror=()=>i(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(d)})}function ya(e,t){return new Promise((r,i)=>{if(document.getElementById(t)){r();return}const d=document.createElement("link");d.id=t,d.rel="stylesheet",d.href=e,d.onload=()=>r(),d.onerror=()=>i(new Error(`样式加载失败: ${e}`)),document.head.appendChild(d)})}const xa="Asia/Shanghai",_a="UTC+8",ba=new Intl.DateTimeFormat("zh-CN",{timeZone:xa,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Sa(e,t){var r,i,u,d,l,p,y;if(!(!e||!(t!=null&&t.JulianDate))){if((r=e.animation)!=null&&r.viewModel&&(e.animation.viewModel.dateFormatter=(..._)=>Ta(e,t,..._),e.animation.viewModel.timeFormatter=(..._)=>Ma(e,t,..._)),e.timeline){const _=(...P)=>La(e,t,...P);e.timeline.makeLabel=_,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=_),(u=(i=e.timeline).updateFromClock)==null||u.call(i),(l=(d=e.timeline).zoomTo)==null||l.call(d,e.clock.startTime,e.clock.stopTime)}(y=(p=e.scene).requestRender)==null||y.call(p)}}function vt(e,t,...r){var p;const i=r.find(wa)||((p=e==null?void 0:e.clock)==null?void 0:p.currentTime);if(!i)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const u=t.JulianDate.toDate(i),d=ba.formatToParts(u),l=Object.fromEntries(d.filter(({type:y})=>y!=="literal").map(({type:y,value:_})=>[y,_]));return{year:l.year||"0000",month:l.month||"01",day:l.day||"01",hour:l.hour||"00",minute:l.minute||"00",second:l.second||"00"}}function wa(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function Ta(e,t,...r){const{year:i,month:u,day:d}=vt(e,t,...r);return`${i}-${u}-${d}`}function Ma(e,t,...r){const{hour:i,minute:u,second:d}=vt(e,t,...r);return`${i}:${u}:${d} ${_a}`}function La(e,t,...r){const{month:i,day:u,hour:d,minute:l}=vt(e,t,...r);return`${i}-${u} ${d}:${l}`}function Fa({getViewer:e}){let t=null,r=null;function i(){var p;const l=e==null?void 0:e();if(l&&((p=l._cesiumWidget)!=null&&p._creditContainer&&(l._cesiumWidget._creditContainer.style.display="none"),u(),t=setInterval(()=>{const y=document.querySelector(".cesium-credit-container");y&&y.innerHTML.length>0&&(y.innerHTML="",y.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const y=document.createElement("style");y.id="cesium-credit-override",y.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(y),r=y}}function u(){var y;const l=e==null?void 0:e();if(!l)return;(y=l._cesiumWidget)!=null&&y._creditContainer&&(l._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",l._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(_=>{_.style.cssText="display: none !important; visibility: hidden !important;",_.innerHTML=""}),l.scene&&l.scene.frameState&&l.scene.frameState.creditDisplay&&(l.scene.frameState.creditDisplay.hasCredits=()=>!1,l.scene.frameState.creditDisplay.destroy=()=>{})}function d(){t&&(clearInterval(t),t=null),r&&(r.remove(),r=null)}return{installCreditHider:i,cleanupCreditHider:d}}const Pa=500,mt=48,Aa=160,At=48;function Ea({getViewer:e}){const t=X(null),r=X([]),i=xe(()=>Number.isFinite(t.value)?String(t.value):"--"),u=xe(()=>Ca(r.value));let d=null,l=0,p=ft();function y(){var A;const P=(A=e==null?void 0:e())==null?void 0:A.scene;P!=null&&P.preRender&&(_(),t.value=null,r.value=[],l=0,p=ft(),d=P.preRender.addEventListener(()=>{l+=1;const N=ft(),b=N-p;if(b<Pa)return;const T=Math.round(l*1e3/b);t.value=T,r.value=[...r.value.slice(1-mt),T],l=0,p=N}))}function _(){typeof d=="function"&&(d(),d=null)}return{frameRateDisplay:i,frameRateLinePoints:u,setupFrameRateMonitor:y,cleanupFrameRateMonitor:_}}function ft(){return typeof performance<"u"?performance.now():Date.now()}function Ca(e){if(!e.length)return"";const t=Math.max(60,...e),r=Aa/(mt-1),i=mt-e.length;return e.map((u,d)=>{const l=(i+d)*r,p=Math.max(0,Math.min(u/t,1)),y=At-p*At;return`${l.toFixed(1)},${y.toFixed(1)}`}).join(" ")}function Ra({getViewer:e,getCesium:t}){let r=null;const i=X("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function u(){const l=e==null?void 0:e(),p=t==null?void 0:t();!l||!p||(d(),r=new p.ScreenSpaceEventHandler(l.scene.canvas),r.setInputAction(y=>{const _=l.camera.getPickRay(y.endPosition);if(!_)return;const P=l.scene.globe.pick(_,l.scene);if(!P)return;const A=p.Cartographic.fromCartesian(P),N=p.Math.toDegrees(A.longitude).toFixed(6),b=p.Math.toDegrees(A.latitude).toFixed(6),T=A.height.toFixed(2);i.value=`经度: ${N}, 纬度: ${b}, 海拔: ${T}米`},p.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(y=>{const _=y.endPosition,P=y.startPosition;if(!p.defined(l.terrainProvider))return;const A=l.scene.globe.ellipsoid;if(!l.camera.pickEllipsoid(P,A)){const b=l.camera;b.rotate(p.Cartesian3.UNIT_X,-.002*(_.y-P.y)),b.rotate(p.Cartesian3.UNIT_Y,-.002*(_.x-P.x))}},p.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_UP))}function d(){r&&(r.destroy(),r=null)}return{coordinateDisplay:i,setupInteractions:u,cleanupInteractions:d}}function Da(e,t=""){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r??t}catch{return t}}function Ia(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function et(e,t){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r==null?t:r==="true"}catch{return t}}function st(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Et(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:r,Ellipsoid:i,Resource:u,HeightmapTerrainData:d,Rectangle:l,TileAvailability:p,CustomHeightmapTerrainProvider:y}=e;function _(b,T,E,S,R,a){const m=b.tileXYToRectangle(E,S,R);return t(l.intersection(m,T,a))}function P(b){const T=[[[0,0,1,0]]],E=new p(b.tilingScheme,19);for(let S=0;S<T.length;S++){const R=T[S];for(let a=0;a<R.length;a++){const m=R[a];E.addAvailableTileRange(S,m[0],m[1],m[2],m[3])}}return E}function A(b,T,E,S,R){const a=new d({buffer:b._transformBuffer(T),width:b._width,height:b._height,childTileMask:b._getChildTileMask(S,R,E),structure:b._terrainDataStructure});return a._skirtHeight=6e3,b.availability.addAvailableTileRange(E,S,R,S,R),a}class N extends y{constructor(T={}){if(super({...T,ellipsoid:i.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(T.url))throw new r("options.url is required.");this._dataType=T.dataType??"int16",this._url=T.url,this._subdomains=T.subdomains,this._token=T.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=P(this)}get availability(){return this._availability}requestTileGeometry(T,E,S,R){if(S>=this._bottomLevel)return Promise.reject(new Error(`Level ${S} is outside supported range.`));if(S<this._topLevel)return Promise.resolve(new d({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(T,E,S),structure:this._terrainDataStructure}));let a=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const f=this._subdomains[(T+E)%this._subdomains.length];a=a.replace("{s}",f)}a=a.replace("{token}",this._token).replace("{x}",T).replace("{y}",E).replace("{z}",S+1);const m=u.fetchArrayBuffer({url:a,request:R});if(m)return m.then(f=>f.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):cr.inflate(f)).then(f=>A(this,f,S,T,E))}getTileDataAvailable(T,E,S){return S<this._bottomLevel}_transformBuffer(T){let E=2;this._dataType==="float"&&(E=4);const S=T;if(S.length!==22500*E)return null;const R=new ArrayBuffer(E),a=new DataView(R),m=this._width,f=this._height,w=new Uint8Array(m*f*4);for(let C=0;C<f;C++)for(let L=0;L<m;L++){const H=Math.floor(149*C/(f-1)),V=Math.floor(149*L/(m-1)),ne=E*(150*H+V);let K;E===4?(a.setInt8(0,S[ne]),a.setInt8(1,S[ne+1]),a.setInt8(2,S[ne+2]),a.setInt8(3,S[ne+3]),K=a.getFloat32(0,!0)):K=S[ne]+256*S[ne+1],(K>1e4||K<-2e3)&&(K=0);const ee=(K+1e3)/.001,W=4*(C*m+L);w[W]=ee/65536,w[W+1]=(ee-256*w[W]*256)/256,w[W+2]=ee-256*w[W]*256-256*w[W+1],w[W+3]=255}return w}_getVHeightBuffer(){let T=this._vHeightBuffer;if(!t(T)){T=new Uint8ClampedArray(this._width*this._height*4);for(let E=0;E<this._width*this._height*4;)T[E++]=15,T[E++]=66,T[E++]=64,T[E++]=255;this._vHeightBuffer=T}return T}_getChildTileMask(T,E,S){const R=new l,a=this._tilingScheme,m=this._rectangles,f=a.tileXYToRectangle(T,E,S);let w=0;for(let C=0;C<m.length&&w!==15;C++){const L=m[C];if(L.maxLevel<=S)continue;const H=L.rectangle,V=l.intersection(H,f,R);t(V)&&(_(a,H,2*T,2*E,S+1,R)&&(w|=4),_(a,H,2*T+1,2*E,S+1,R)&&(w|=8),_(a,H,2*T,2*E+1,S+1,R)&&(w|=1),_(a,H,2*T+1,2*E+1,S+1,R)&&(w|=2))}return w}}return N}const Ze=["0","1","2","3","4","5","6","7"],Je="https://t{s}.tianditu.gov.cn/",ka="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",Oa="https://basemaps3d.arcgis.com/arcgis/rest/services/Open3D_Buildings_v1/SceneServer/layers/0",We="custom-xyz",Ct="cesium_custom_xyz_basemap_url",za="cesium_tdt_label_layer_visible",Rt="cesium_tdt_boundary_layer_visible",Dt="cesium_tdt_text_label_layer_visible",It="cesium_arcgis_open3d_buildings_visible",kt=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:We,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],Ot=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function Na({getViewer:e,getCesium:t,message:r,backendBaseUrl:i,tiandituToken:u,cesiumIonToken:d}){let l=null,p=null,y=null,_=null,P=0,A=0,N=[];const b=[],T=X([]),E=new Map,S=new Map,R=new Map,a=new Map,m=X("tianditu"),f=X("tianditu"),w=X(Da(Ct,"")),C=et(za,!0),L=X(et(Rt,C)),H=X(et(Dt,C)),V=X(et(It,!1)),ne=xe(()=>[...kt.map(n=>n.value!==We?n:{...n,description:w.value?w.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!w.value}),...T.value]),K=xe(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:L.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:H.value},{value:"arcgis-open3d-buildings",label:"ArcGIS Open3D建筑",description:"ArcGIS Open3D Buildings 3DObject SceneServer 图层",active:V.value}]);_e(m,n=>{!(e!=null&&e())||!(t!=null&&t())||Ce(n)}),_e(w,n=>{Ia(Ct,n)}),_e(f,async n=>{!(e!=null&&e())||!(t!=null&&t())||await v(n)}),_e(L,n=>{st(Rt,n),Fe()}),_e(H,n=>{st(Dt,n),Fe()}),_e(V,n=>{st(It,n),pe()});function ee(){const n=t==null?void 0:t();if(!n)return[];E.clear(),S.clear();const o=kt.map(F=>{const G=new n.ProviderViewModel({name:F.label,tooltip:Wa(F),category:"项目底图",iconUrl:Nt(F.value==="google"?"#5ea1ff":F.value===We?"#f59e0b":"#37d67a",F.value==="google"?"G":F.value===We?"XY":"TD"),creationFunction:()=>Te(F.value)});return E.set(F.value,G),S.set(G,F.value),G}),x=ve();return T.value=x.map((F,G)=>{const q=String((F==null?void 0:F.name)||`官方底图 ${G+1}`).trim(),se=qa(q,G);return E.set(se,F),S.set(F,se),{value:se,label:`官方 · ${q}`,description:String((F==null?void 0:F.tooltip)||q),source:"official"}}),[...o,...x]}function W(){const n=t==null?void 0:t();return n?(R.clear(),a.clear(),Ot.map(o=>{const x=new n.ProviderViewModel({name:o.label,tooltip:o.description||o.label,category:"项目地形",iconUrl:Nt(Ba(o.value),Ha(o.value)),creationFunction:()=>O(o.value)});return R.set(o.value,x),a.set(x,o.value),x})):[]}function ue(n=[]){return E.get(m.value)||n[0]}function me(n=[]){return R.get(f.value)||n[0]}function ve(){const n=t==null?void 0:t();if(typeof(n==null?void 0:n.createDefaultImageryProviderViewModels)!="function")return[];try{return n.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function Te(n){return n==="google"?I():n===We?M():D()}function D(){const n=t==null?void 0:t();return[new n.UrlTemplateImageryProvider({url:`${Je}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:Ze,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:18})]}function I(){const n=t==null?void 0:t();return[new n.UrlTemplateImageryProvider({url:`${i}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:20})]}function M(){const n=t==null?void 0:t(),o=zt(w.value);return o.valid?[new n.UrlTemplateImageryProvider({url:o.url,subdomains:o.subdomains,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(r.warning(o.message,{closable:!0}),D())}function oe(){const n=t==null?void 0:t();return new n.UrlTemplateImageryProvider({url:`${Je}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:Ze,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:10})}function Ae(){const n=t==null?void 0:t();return new n.UrlTemplateImageryProvider({url:`${Je}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${u}`,subdomains:Ze,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:18})}function z(){var ie,he,Pe,Re,be;ae();const n=t==null?void 0:t(),o=(he=(ie=e==null?void 0:e())==null?void 0:ie.baseLayerPicker)==null?void 0:he.viewModel;if(!o||!((Pe=n==null?void 0:n.knockout)!=null&&Pe.getObservable))return;const x=n.knockout.getObservable(o,"selectedImagery"),F=n.knockout.getObservable(o,"selectedTerrain"),G=[],q=(Re=x==null?void 0:x.subscribe)==null?void 0:Re.call(x,De=>{const ye=S.get(De);ye&&(m.value!==ye&&(m.value=ye),Oe())}),se=(be=F==null?void 0:F.subscribe)==null?void 0:be.call(F,De=>{const ye=a.get(De);ye&&(f.value!==ye&&(f.value=ye),g(ye))});q&&G.push(q),se&&G.push(se),N=G}function ae(){N.forEach(n=>{var o;return(o=n==null?void 0:n.dispose)==null?void 0:o.call(n)}),N=[]}function ke(){return Oe(),!0}function Ee(){const n=e==null?void 0:e();if(n!=null&&n.imageryLayers)for(;b.length;){const o=b.pop();try{n.imageryLayers.remove(o,!0)}catch{}}}function Oe(){var n,o,x;Fe(),pe(),(x=(o=(n=e==null?void 0:e())==null?void 0:n.scene)==null?void 0:o.requestRender)==null||x.call(o)}function Fe(){var o,x;const n=e==null?void 0:e();!n||!(t!=null&&t())||(L.value?Ve():$e(),H.value?ze():Ne(),(x=(o=n.scene).requestRender)==null||x.call(o))}function Ve(){var o,x,F,G;const n=e==null?void 0:e();if(!(n!=null&&n.imageryLayers)||l)return l&&((x=(o=n==null?void 0:n.imageryLayers)==null?void 0:o.raiseToTop)==null||x.call(o,l)),l;try{return l=n.imageryLayers.addImageryProvider(oe()),(G=(F=n.imageryLayers).raiseToTop)==null||G.call(F,l),l}catch(q){return r.error("天地图国界线图层加载失败",q),null}}function ze(){var o,x,F,G;const n=e==null?void 0:e();if(!(n!=null&&n.imageryLayers)||p)return p&&((x=(o=n==null?void 0:n.imageryLayers)==null?void 0:o.raiseToTop)==null||x.call(o,p)),p;try{return p=n.imageryLayers.addImageryProvider(Ae()),(G=(F=n.imageryLayers).raiseToTop)==null||G.call(F,p),p}catch(q){return r.error("天地图文字标注图层加载失败",q),null}}function $e(){const n=e==null?void 0:e();if(!(!l||!(n!=null&&n.imageryLayers))){try{n.imageryLayers.remove(l,!0)}catch{}l=null}}function Ne(){const n=e==null?void 0:e();if(!(!p||!(n!=null&&n.imageryLayers))){try{n.imageryLayers.remove(p,!0)}catch{}p=null}}async function pe(){var o,x,F;const n=e==null?void 0:e();!((o=n==null?void 0:n.scene)!=null&&o.primitives)||!(t!=null&&t())||(V.value?await Y():de(),(F=(x=n.scene).requestRender)==null||F.call(x))}async function Y(){var F,G,q,se;const n=e==null?void 0:e(),o=t==null?void 0:t();if(!((F=n==null?void 0:n.scene)!=null&&F.primitives)||y)return y;if(_)return _;if(typeof((G=o==null?void 0:o.I3SDataProvider)==null?void 0:G.fromUrl)!="function")return r.warning("当前 Cesium 运行时不支持 ArcGIS I3S 建筑图层。",{closable:!0}),V.value=!1,null;const x=++P;_=o.I3SDataProvider.fromUrl(Oa);try{const ie=await _;return x!==P||!V.value?(Ua(ie),null):(y=n.scene.primitives.add(ie),(se=(q=n.scene).requestRender)==null||se.call(q),y)}catch(ie){return x!==P||(V.value=!1,r.warning("ArcGIS Open3D 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),r.error("ArcGIS Open3D 建筑图层初始化失败",ie)),null}finally{x===P&&(_=null)}}function de(){var o,x,F;const n=e==null?void 0:e();if(P+=1,_=null,!(!y||!((o=n==null?void 0:n.scene)!=null&&o.primitives))){try{n.scene.primitives.remove(y)}catch{}y=null,(F=(x=n.scene).requestRender)==null||F.call(x)}}function Ce(n,o={}){var q,se,ie;const x=e==null?void 0:e();if(!x||!(t!=null&&t()))return!1;const F=(q=x.baseLayerPicker)==null?void 0:q.viewModel,G=E.get(n);if(F&&G){if(Ee(),o.forceReload&&F.selectedImagery===G){const he=E.get("tianditu");he&&he!==G&&(F.selectedImagery=he)}return F.selectedImagery!==G&&(F.selectedImagery=G),Oe(),!0}try{return Ee(),Te(n).forEach(Pe=>{b.push(x.imageryLayers.addImageryProvider(Pe))}),Fe(),(ie=(se=x.scene).requestRender)==null||ie.call(se),!0}catch(he){return r.error("地图源切换失败",he),!1}}function Ye(){return v(f.value)}async function v(n){var ie,he,Pe,Re,be,De,ye,qe,Se,tt,rt;const o=e==null?void 0:e(),x=t==null?void 0:t();if(!o||!x)return!1;const F=(ie=o.baseLayerPicker)==null?void 0:ie.viewModel,G=R.get(n);if(F&&G)return F.selectedTerrain!==G&&(F.selectedTerrain=G),g(n),(Pe=(he=o.scene).requestRender)==null||Pe.call(he),!0;const q=++A;if(n==="ellipsoid")return o.terrainProvider=new x.EllipsoidTerrainProvider,g(n),(be=(Re=o.scene).requestRender)==null||be.call(Re),!0;if(n==="cesiumWorld")try{const Me=await B();return q!==A?!1:(o.terrainProvider=Me,g(n),(ye=(De=o.scene).requestRender)==null||ye.call(De),!0)}catch(Me){return q!==A||(o.terrainProvider=new x.EllipsoidTerrainProvider,g("ellipsoid"),r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",Me)),!1}if(n==="arcgisWorld")try{const Me=await $();return q!==A?!1:(o.terrainProvider=Me,g(n),(Se=(qe=o.scene).requestRender)==null||Se.call(qe),!0)}catch(Me){return q!==A||(o.terrainProvider=new x.EllipsoidTerrainProvider,g("ellipsoid"),r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",Me)),!1}const se=Et(x);try{return o.terrainProvider=new se({url:`${Je}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Ze,token:u}),g(n),(rt=(tt=o.scene).requestRender)==null||rt.call(tt),!0}catch(Me){return o.terrainProvider=new x.EllipsoidTerrainProvider,g("ellipsoid"),r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",Me),!1}}function g(n){var x;const o=e==null?void 0:e();(x=o==null?void 0:o.scene)!=null&&x.globe&&(o.scene.globe.depthTestAgainstTerrain=n!=="ellipsoid")}function O(n){const o=t==null?void 0:t();if(n==="ellipsoid")return new o.EllipsoidTerrainProvider;if(n==="cesiumWorld")return B().catch(F=>(r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",F),te(n,"ellipsoid"),new o.EllipsoidTerrainProvider));if(n==="arcgisWorld")return $().catch(F=>(r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",F),te(n,"ellipsoid"),new o.EllipsoidTerrainProvider));const x=Et(o);try{return new x({url:`${Je}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Ze,token:u})}catch(F){return r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",F),new o.EllipsoidTerrainProvider}}async function B(){var x,F;const n=t==null?void 0:t();$t(n,d);const o={requestWaterMask:!1,requestVertexNormals:!0};if(typeof n.createWorldTerrainAsync=="function")return n.createWorldTerrainAsync(o);if(typeof n.createWorldTerrain=="function")return n.createWorldTerrain(o);if(typeof((x=n.CesiumTerrainProvider)==null?void 0:x.fromIonAssetId)=="function")return n.CesiumTerrainProvider.fromIonAssetId(1,o);if((F=n.IonResource)!=null&&F.fromAssetId&&n.CesiumTerrainProvider){const G=await n.IonResource.fromAssetId(1);return new n.CesiumTerrainProvider({url:G,...o})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function $(){var o;const n=t==null?void 0:t();if(typeof((o=n==null?void 0:n.ArcGISTiledElevationTerrainProvider)==null?void 0:o.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return n.ArcGISTiledElevationTerrainProvider.fromUrl(ka)}function te(n,o){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{f.value===n&&(f.value=o)},0)}function le({overlayId:n,value:o}){if(n==="tdt-boundaries"){L.value=!!o;return}if(n==="tdt-text-labels"){H.value=!!o;return}n==="arcgis-open3d-buildings"&&(V.value=!!o)}function s({url:n}){const o=String(n||"").trim(),x=zt(o);if(!x.valid){r.warning(x.message,{closable:!0});return}if(w.value=o,m.value===We){Ce(We,{forceReload:!0})&&r.success("已加载自定义 XYZ 图源");return}m.value=We,r.success("已切换到自定义 XYZ 图源")}function c(){Ee(),$e(),Ne(),de(),ae()}return{activeBasemap:m,activeTerrain:f,customXyzBasemapUrl:w,basemapOptions:ne,terrainOptions:Ot,overlayOptions:K,createImageryProviderViewModels:ee,createTerrainProviderViewModels:W,getSelectedImageryProviderViewModel:ue,getSelectedTerrainProviderViewModel:me,bindLayerPickerStateSync:z,addBaseImageryLayers:ke,initCustomTerrain:Ye,applyBasemap:Ce,applyTerrain:v,handleOverlayToggle:le,handleCustomBasemapSubmit:s,cleanupLayers:c}}function Ba(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function Ha(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Ua(e){var t,r;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(r=e.destroy)==null||r.call(e)}catch{}}function Wa(e){return e.value!==We?e.description||e.label:`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`}function zt(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let r=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const i=r.match(/\{([a-z0-9])-([a-z0-9])\}/i);let u=[];return i?(u=Ga(i[1],i[2]),r=r.replace(i[0],"{s}")):/\{s\}/i.test(r)&&(u=["a","b","c"]),!/\{z\}/.test(r)||!/\{x\}/.test(r)||!/\{y\}/.test(r)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:r,subdomains:u}:$a(r)?{valid:!0,message:"",url:r,subdomains:u}:{valid:!1,message:"URL 格式不合法",url:r,subdomains:u}}function Ga(e,t){const r=String(e||"").charCodeAt(0),i=String(t||"").charCodeAt(0);if(!Number.isFinite(r)||!Number.isFinite(i))return[];const u=r<=i?1:-1,d=[];for(let l=r;u>0?l<=i:l>=i;l+=u)d.push(String.fromCharCode(l));return d}function $a(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",r=new URL(e,t);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}function qa(e,t){const r=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${r||"basemap"}`}function Nt(e,t){const r=String(t||"").replace(/[<>&"']/g,"").slice(0,2),i=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${r}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(i)}`}function Xa({getViewer:e,getCesium:t,message:r}){function i(l){const p=e==null?void 0:e(),y=t==null?void 0:t();if(!p||!y)return;const _=typeof l=="number"?l:2;p.camera.flyTo({destination:y.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-y.Math.PI_OVER_TWO,roll:0},duration:_})}function u(){const l=e==null?void 0:e(),p=t==null?void 0:t();!l||!p||l.camera.flyTo({destination:p.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:p.Math.toRadians(0),pitch:p.Math.toRadians(-25),roll:0},duration:3})}async function d(){const l=e==null?void 0:e(),p=t==null?void 0:t();if(!(!l||!p))try{const y=await p.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");l.scene.primitives.add(y),l.flyTo(y,{duration:3,offset:new p.HeadingPitchRange(p.Math.toRadians(0),p.Math.toRadians(-25),y.boundingSphere.radius*2.5)})}catch(y){r.error(`加载模型失败: ${y}`),r.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:i,flyToEverest:u,loadCustomTileset:d}}const Va="cesium_tool_panel_open";function Ya({fluidPanelRef:e,sceneActions:t={},wind:r={},panelStorageKey:i=Va}={}){const u=X(et(i,!0)),d=X({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),l=X({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),p=X({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),y=xe(()=>{var b,T,E,S,R,a;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:d.value.atmosphere||d.value.fog?"启用":"关闭",statusTone:d.value.atmosphere||d.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:d.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:d.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:d.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:d.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(b=r.wind2D)!=null&&b.value?"已加载":"未加载",statusTone:(T=r.wind2D)!=null&&T.value?"success":"neutral",actions:[{id:"load",label:(E=r.wind2D)!=null&&E.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((S=r.wind2D)!=null&&S.value)}],controls:ja((R=r.windParams)==null?void 0:R.value,!!((a=r.wind2D)!=null&&a.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:p.value.isPicking?"等待选点":p.value.hasFluid?"已创建":"未创建",statusTone:p.value.isPicking?"warning":p.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:p.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:p.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!p.value.hasFluid&&!p.value.isPicking}],controls:Ka(l.value,p.value)}]});_e(u,b=>{st(i,b)});function _({moduleId:b,actionId:T}){var S,R;(R=(S={scene:{home:()=>{var a;return(a=t.flyToHome)==null?void 0:a.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:r.loadSimulatedWind,clear:r.clearWind2D},fluid:{pick:()=>{var a,m;return(m=(a=e==null?void 0:e.value)==null?void 0:a.startPickHeightMap)==null?void 0:m.call(a)},clear:()=>{var a,m;return(m=(a=e==null?void 0:e.value)==null?void 0:a.clearFluid)==null?void 0:m.call(a)}}}[b])==null?void 0:S[T])==null||R.call(S)}function P({moduleId:b,controlId:T,value:E}){var S,R;if(b==="effects"&&T in d.value){d.value={...d.value,[T]:!!E};return}if(b==="wind"&&T in(((S=r.windParams)==null?void 0:S.value)||{})){(R=r.setWindParam)==null||R.call(r,T,E);return}b==="fluid"&&T in l.value&&(l.value={...l.value,[T]:T==="waterColor"?E:Number(E)})}function A(b){const T=Ke(b==null?void 0:b.waterLevel),E=Ke(b==null?void 0:b.waterLevelMin),S=Ke(b==null?void 0:b.waterLevelMax);p.value={isPicking:!!(b!=null&&b.isPicking),hasFluid:!!(b!=null&&b.hasFluid),selectedText:(b==null?void 0:b.selectedText)||"",waterLevel:T,waterLevelMin:E,waterLevelMax:S},T!==null&&(l.value={...l.value,waterLevel:T})}function N(){var b;(b=r.clearWind2D)==null||b.call(r)}return{toolPanelOpen:u,advancedEffectControls:d,fluidParams:l,fluidState:p,toolModules:y,handleToolAction:_,handleToolControlChange:P,handleFluidStateChange:A,cleanupTools:N}}function ja(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function Ka(e,t={}){const r=Ke(t.waterLevelMin),i=Ke(t.waterLevelMax),u=r!==null&&i!==null,d=u?Math.min(r,i):0,l=u?Math.max(r,i):0,p=Ke(e.waterLevel),y=u?Za(p??d,d,l):0,_=u?Math.max((l-d)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:d,max:l,step:_,value:y,displayValue:u?`${Ja(y)} m`:"先捕捉",disabled:!u,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function Ke(e){const t=Number(e);return Number.isFinite(t)?t:null}function Za(e,t,r){return Math.max(t,Math.min(r,e))}function Ja(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const fe={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Qa=new Float32Array([-1,-1,1,-1,1,1,-1,1]),ei=new Float32Array([0,0,1,0,1,1,0,1]),ti=new Uint16Array([0,1,2,0,2,3]);function Xe(e,t,r){return Math.max(t,Math.min(r,e))}function Z(e,t){const r=Number(e);return Number.isFinite(r)?r:t}function ri(e,t){const r=t.getParameter(t.MAX_TEXTURE_SIZE),i=Math.min(2048,r),u=Math.max(1,Math.floor(e)),d=Math.sqrt(u),l=Math.log2(d),p=Number.isFinite(l)?Math.round(l):4;let y=Math.pow(2,p);return y=Xe(y,16,i),y}function ni(e){const t=e*e,r=new Float32Array(t*4);for(let i=0;i<t;i+=1){const u=i*4;r[u]=Math.random(),r[u+1]=Math.random(),r[u+2]=Math.random(),r[u+3]=Math.random()}return r}function ai(e){return new Float32Array(e*e*4)}function ii(e,t,r,i,u){const d=t.createTexture();if(!d)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,d),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,r,i,0,t.RGBA,t.FLOAT,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let l=!1;return{_context:e,_texture:d,_target:t.TEXTURE_2D,_width:r,_height:i,destroy(){l||(t.deleteTexture(d),l=!0)}}}class oi{constructor(t,r={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=r.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const i={...fe,...r};this.speedFactor=Z(i.speedFactor,fe.speedFactor),this.cullSpeedMin=Z(i.cullSpeedMin,fe.cullSpeedMin),this.cullSpeedMax=Z(i.cullSpeedMax,fe.cullSpeedMax),this.windSpeedMin=Z(i.windSpeedMin,fe.windSpeedMin),this.windSpeedMax=Z(i.windSpeedMax,fe.windSpeedMax),this.arrowLength=Z(i.arrowLength,fe.arrowLength),this.trailLength=Z(i.trailLength,fe.trailLength),this.decaySpeed=Z(i.decaySpeed,fe.decaySpeed),this.alphaFactor=Z(i.alphaFactor,fe.alphaFactor),this.maxWindSpeed=Z(i.maxWindSpeed,fe.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=Z(r.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const r=Z(t.longitude,NaN),i=Z(t.latitude,NaN),u=Array.isArray(t.altitude)?t.altitude:[],d=Array.isArray(t.sizeMesh)?t.sizeMesh:[],l=Array.isArray(t.count)?t.count:[],p=Array.isArray(t.hspeed)?t.hspeed:[],y=Array.isArray(t.hdir)?t.hdir:[],_=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(r)||!Number.isFinite(i))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const P=u.length;if(P<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(d.length!==P||l.length!==P)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const A=l.map(L=>Math.max(1,Math.floor(Z(L,1)))),N=d.map(L=>Math.max(1,Z(L,1))),b=u.map(L=>Z(L,0)),T=A.reduce((L,H)=>L+H*H,0);if(p.length<T||y.length<T||_.length<T)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=P,this.visibleLayerMin=0,this.visibleLayerMax=P-1,this._altitudes=b.slice(),this._maxNx=Math.max(...A),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*P;const E=new Float32Array(this._atlasWidth*this._atlasHeight*4);let S=0;for(let L=0;L<P;L+=1){const H=A[L],V=H;for(let ne=0;ne<V;ne+=1)for(let K=0;K<H;K+=1){const ee=S+ne*H+K,W=((L*this._maxNy+ne)*this._atlasWidth+K)*4,ue=Number(p[ee]),me=Number(y[ee]),ve=Number(_[ee]);if(!(Number.isFinite(ue)&&Number.isFinite(me))){E[W]=0,E[W+1]=0,E[W+2]=0,E[W+3]=0;continue}const D=me*Math.PI/180;E[W]=ue*Math.sin(D),E[W+1]=ue*Math.cos(D),E[W+2]=Number.isFinite(ve)?ve:0,E[W+3]=1}S+=H*V}this._createOrReplaceWindAtlasTexture(E);const R=Math.max(...N),a=this._maxNx*R,m=a/2/111320,f=i*Math.PI/180,w=Math.max(1e-6,Math.abs(Math.cos(f))),C=a/2/(111320*w);this._bounds={minLon:r-C,maxLon:r+C,minLat:i-m,maxLat:i+m,minHeight:Math.min(...b),maxHeight:Math.max(...b)},this._dataPointCount=T,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const r=Math.max(1,Math.floor(Z(t,1))),i=ri(r,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&i===this._particleTextureSize||(this._particleTextureSize=i,this._particleCount=i*i,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const r=Xe(Z(t,this.particleDensity),.05,10);if(this.particleDensity=r,this._dataPointCount<=0)return;const i=Math.max(1,Math.floor(this._dataPointCount*r));this.setParticleCount(i)}setBounds(t,r,i,u){const d=Z(t,NaN),l=Z(r,NaN),p=Z(i,NaN),y=Z(u,NaN);if(!Number.isFinite(d)||!Number.isFinite(l)||!Number.isFinite(p)||!Number.isFinite(y))return;const _=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};_.minLon=Math.min(d,l),_.maxLon=Math.max(d,l),_.minLat=Math.min(p,y),_.maxLat=Math.max(p,y),this._bounds=_,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,r=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,r,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const u=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[u],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=u,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=ii(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,r=this._particleTextureSize,i=ni(r),u=ai(r);for(let d=0;d<2;d+=1){this._particlePositionTextures[d]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:i},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[d]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:u},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[d]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[d],this._velocityTextures[d]],destroyAttachments:!1});const l=this._framebuffers[d]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,l),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,r=t.Buffer.createVertexBuffer({context:this._context,typedArray:Qa,usage:t.BufferUsage.STATIC_DRAW}),i=t.Buffer.createVertexBuffer({context:this._context,typedArray:ei,usage:t.BufferUsage.STATIC_DRAW}),u=t.Buffer.createIndexBuffer({context:this._context,typedArray:ti,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:r,componentsPerAttribute:2},{index:1,vertexBuffer:i,componentsPerAttribute:2}],indexBuffer:u})}_buildParticleVertexArray(){const t=this._Cesium,r=new Float32Array(this._drawVertexCount);for(let i=0;i<r.length;i+=1)r[i]=i;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:r,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,r=`#version 300 es
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
}`;this._updateProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:i,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const t=this._Cesium,r=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:i,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,r=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:r,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,r=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:r,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=Xe(Math.floor(Z(this.visibleLayerMin,0)),0,this._layerCount-1),r=Xe(Math.floor(Z(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:r}}_normalizeSpeedRange(t,r){const i=Math.max(1e-4,Z(this.maxWindSpeed,fe.maxWindSpeed)),u=Xe(Z(t,0)/i,0,1),d=Xe(Z(r,i)/i,0,1);return{min:Math.min(u,d),max:Math.max(u,d)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>Z(this.speedFactor,fe.speedFactor),maxWindSpeed:()=>Math.max(1e-4,Z(this.maxWindSpeed,fe.maxWindSpeed)),decaySpeed:()=>Xe(Z(this.decaySpeed,fe.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>Z(this.arrowLength,fe.arrowLength),trailLength:()=>Z(this.trailLength,fe.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Xe(Z(this.alphaFactor,fe.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function si({getViewer:e,getCesium:t,message:r}){const i=X(null),u=X({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function d(){var P,A;const _=e==null?void 0:e();if(i.value){try{(A=(P=_==null?void 0:_.scene)==null?void 0:P.primitives)==null||A.remove(i.value)}catch{}i.value.destroy(),i.value=null}}function l(){const _=e==null?void 0:e(),P=t==null?void 0:t();if(!_||!P){r.error("Cesium 尚未初始化");return}d();const A=li(P);i.value=new oi(_,{maxWindSpeed:20,cesium:P,speedFactor:u.value.speedFactor,arrowLength:u.value.arrowLength,trailLength:u.value.trailLength,alphaFactor:u.value.alphaFactor}),i.value.loadData(A),_.scene.primitives.add(i.value),i.value.flyTo(),r.success("风场加载成功，可通过下方滑块调节样式")}function p(){i.value&&(i.value.speedFactor=u.value.speedFactor,i.value.arrowLength=u.value.arrowLength,i.value.trailLength=u.value.trailLength,i.value.alphaFactor=u.value.alphaFactor)}function y(_,P){return _ in u.value?(u.value={...u.value,[_]:Number(P)},p(),!0):!1}return{wind2D:i,windParams:u,clearWind2D:d,loadSimulatedWind:l,setWindParam:y}}function li(e){const u=[0,2e3,5e3,1e4,15e3],d=[3e4,3e4,25e3,25e3,2e4],l=[30,30,25,25,20],p=l.reduce((N,b)=>N+b*b,0),y=new Array(p),_=new Array(p),P=new Array(p);let A=0;for(let N=0;N<5;N++){const b=l[N],T=l[N],E=d[N];for(let S=0;S<T;S++)for(let R=0;R<b;R++){const a=A+S*b+R,m=(R-b/2)*(E/111320),f=(S-T/2)*(E/111320/Math.cos(e.Math.toRadians(35))),C=Math.atan2(f,m)+Math.PI/2+.2*Math.sin(R*.5)*Math.cos(S*.5);_[a]=e.Math.toDegrees(C)%360;const L=Math.sqrt(m*m+f*f),V=Math.max(0,1-L/15);y[a]=(5+N*2)*V+2*Math.random(),P[a]=.5*Math.sin(R*.3)*Math.cos(S*.3)}A+=b*T}return{longitude:104,latitude:35,altitude:u,sizeMesh:d,count:l,hspeed:y,hdir:_,vspeed:P}}const ci={key:3,class:"fps-chart-panel","aria-label":"实时帧率折线图"},ui={class:"fps-chart-head"},di={class:"fps-chart",viewBox:"0 0 160 48",preserveAspectRatio:"none","aria-hidden":"true"},hi=["points"],fi={class:"map-controls-group"},mi={class:"mouse-position-content"},pi={__name:"CesiumContainer",setup(e){let t=null,r=null;const i="4267820f43926eaf808d61dc07269beb",u="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzRhZjM0ZC02MmYxLTRhNzgtYTkxNi00YWM2MmMxNmNhMWIiLCJpZCI6MTkzNjkxLCJpYXQiOjE3MDY5NDA2ODF9.mKu1zCK-GOjwDem9-J_Ksv0xEGNsN1zGuShYzOuXJsg",d=pt(),l=X(!1),p=X(null),y=()=>r,_=()=>t||window.Cesium,P=Na({getViewer:y,getCesium:_,message:d,backendBaseUrl:Yt,tiandituToken:i,cesiumIonToken:u}),{activeBasemap:A,activeTerrain:N,customXyzBasemapUrl:b,basemapOptions:T,terrainOptions:E,overlayOptions:S,createImageryProviderViewModels:R,createTerrainProviderViewModels:a,getSelectedImageryProviderViewModel:m,getSelectedTerrainProviderViewModel:f,bindLayerPickerStateSync:w,addBaseImageryLayers:C,initCustomTerrain:L,handleOverlayToggle:H,handleCustomBasemapSubmit:V,cleanupLayers:ne}=P,{coordinateDisplay:K,setupInteractions:ee,cleanupInteractions:W}=Ra({getViewer:y,getCesium:_}),{frameRateDisplay:ue,frameRateLinePoints:me,setupFrameRateMonitor:ve,cleanupFrameRateMonitor:Te}=Ea({getViewer:y}),{installCreditHider:D,cleanupCreditHider:I}=Fa({getViewer:y}),M=Xa({getViewer:y,getCesium:_,message:d}),{flyToHome:oe}=M,Ae=si({getViewer:y,getCesium:_,message:d}),{toolPanelOpen:z,advancedEffectControls:ae,fluidParams:ke,toolModules:Ee,handleToolAction:Oe,handleToolControlChange:Fe,handleFluidStateChange:Ve,cleanupTools:ze}=Ya({fluidPanelRef:p,sceneActions:M,wind:Ae});async function $e(){Bt("正在初始化 3D 场景...");try{if(t=await ga({ionToken:u}),!t||!document.getElementById("cesiumContainer"))return;Ne(),ee(),ve();const pe=C(),Y=await L();l.value=!0,pe&&Y?d.success("天地图基础影像与地形加载成功。"):d.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0})}catch(pe){d.error("Cesium 运行时加载失败",pe),d.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{Ht()}}function Ne(){const pe=typeof t.Map=="function"?t.Map:t.Viewer,Y=R(),de=a();r=new pe("cesiumContainer",{baseLayerPicker:!0,geocoder:!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:Y,selectedImageryProviderViewModel:m(Y),terrainProviderViewModels:de,selectedTerrainProviderViewModel:f(de),shouldAnimate:!0}),r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,Sa(r,t),ur(r),D(),w(),oe(0)}return Ut(()=>{$e()}),Wt(()=>{if(l.value=!1,W(),Te(),ze(),ne(),I(),r){try{r.destroy()}catch{}r=null}}),(pe,Y)=>(k(),U(Le,null,[Y[10]||(Y[10]=h("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),l.value?(k(),Ge(je(Ar),{key:0,headless:"","get-viewer":y,"get-cesium":_,controls:j(ae)},null,8,["controls"])):Q("",!0),l.value?(k(),Ge(je(fa),{key:1,ref_key:"fluidPanelRef",ref:p,headless:"","get-viewer":y,"get-cesium":_,params:j(ke),onStateChange:j(Ve)},null,40,["params","onStateChange"])):Q("",!0),l.value?(k(),Ge(Xn,{key:2,open:j(z),"onUpdate:open":Y[0]||(Y[0]=de=>ct(z)?z.value=de:null),"active-basemap":j(A),"onUpdate:activeBasemap":Y[1]||(Y[1]=de=>ct(A)?A.value=de:null),"active-terrain":j(N),"onUpdate:activeTerrain":Y[2]||(Y[2]=de=>ct(N)?N.value=de:null),"basemap-options":j(T),"terrain-options":j(E),"overlay-options":j(S),"custom-basemap-url":j(b),modules:j(Ee),onModuleAction:j(Oe),onControlChange:j(Fe),onOverlayToggle:j(H),onCustomBasemapSubmit:j(V)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):Q("",!0),l.value?(k(),U("section",ci,[h("div",ui,[Y[4]||(Y[4]=h("span",null,"FPS",-1)),h("strong",null,re(j(ue)),1)]),(k(),U("svg",di,[Y[5]||(Y[5]=h("line",{class:"fps-grid-line",x1:"0",y1:"12",x2:"160",y2:"12"},null,-1)),Y[6]||(Y[6]=h("line",{class:"fps-grid-line",x1:"0",y1:"24",x2:"160",y2:"24"},null,-1)),Y[7]||(Y[7]=h("line",{class:"fps-grid-line",x1:"0",y1:"36",x2:"160",y2:"36"},null,-1)),j(me)?(k(),U("polyline",{key:0,class:"fps-line",points:j(me)},null,8,hi)):Q("",!0)]))])):Q("",!0),h("div",fi,[h("div",mi,re(j(K)),1),Y[9]||(Y[9]=h("div",{class:"divider"},null,-1)),h("button",{class:"home-btn",title:"回到初始位置",onClick:Y[3]||(Y[3]=(...de)=>j(oe)&&j(oe)(...de))},[...Y[8]||(Y[8]=[h("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[h("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},Fi=lt(pi,[["__scopeId","data-v-c03ddd23"]]);export{Fi as default};
