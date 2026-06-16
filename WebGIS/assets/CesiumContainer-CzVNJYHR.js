const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-CvtFB7l4.js","./vendor-echarts-all-B_WEc2GE.js","./vendor-libs-RyoEAG51.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var ir=Object.defineProperty;var or=(e,t,r)=>t in e?ir(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Et=(e,t,r)=>or(e,typeof t!="symbol"?t+"":t,r);import{_ as pt,e as Tt,N as er,M as tr,s as sr,q as lr,t as gt,L as cr}from"./index-B_gqgC7Y.js";import{_ as ur}from"./vendor-runtime-Dp1pzeXC.js";import{C as rr,o as nr,w as Te,d as z,c as q,f as d,t as ie,G as ve,W as ut,X as lt,g as ae,r as Y,P as dr,a as Pe,u as K,F as Ee,e as Ue,n as be,x as qe,S as tt,I as Rt,i as Ct,H as ze,O as ar,q as Se,v as hr,a4 as vt}from"./vendor-vue-CmuMwCC6.js";import{af as yt,ag as xt,ah as fr,X as mr,e as Dt,ai as dt,ac as kt,aj as pr,ak as gr,al as It,H as Ot,T as zt,a2 as vr,am as yr,an as xr,ao as _r,ap as br,q as Sr,o as Tr,aq as wr}from"./vendor-libs-RyoEAG51.js";import"./vendor-ol-all-ZNWqDNbP.js";import"./vendor-geotiff-B6D64MFK.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BzG5Hdu9.js";import"./vendor-axios-Bdz_Fv8M.js";function Mr(e){var a;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;!t||!r||(r.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(a=t.requestRender)==null||a.call(t))}function Lr(e,t){var u;const r=e==null?void 0:e.scene,a=r==null?void 0:r.globe;if(!r||!a)return;Ar(r,t),Er(r),a.enableLighting=!0,a.showGroundAtmosphere=!0,ne(a,"dynamicAtmosphereLighting",!0),ne(a,"dynamicAtmosphereLightingFromSun",!0),ne(a,"atmosphereLightIntensity",11.5),ne(a,"atmosphereHueShift",-.015),ne(a,"atmosphereSaturationShift",.08),ne(a,"atmosphereBrightnessShift",.02),ne(a,"lightingFadeInDistance",15e6),ne(a,"lightingFadeOutDistance",22e6),ne(a,"nightFadeInDistance",9e6),ne(a,"nightFadeOutDistance",16e6),ht(t,a,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ht(t,a,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ne(a,"atmosphereRayleighScaleHeight",1e4),ne(a,"atmosphereMieScaleHeight",3200),ne(a,"atmosphereMieAnisotropy",.92),!r.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(r.skyAtmosphere=Cr(t));const c=r.skyAtmosphere;c&&(c.show=!0,ne(c,"perFragmentAtmosphere",!0),ne(c,"dynamicAtmosphereLighting",!0),ne(c,"dynamicAtmosphereLightingFromSun",!0),ne(c,"hueShift",-.025),ne(c,"saturationShift",.08),ne(c,"brightnessShift",.03),ne(c,"atmosphereLightIntensity",12),ht(t,c,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ht(t,c,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ne(c,"atmosphereRayleighScaleHeight",1e4),ne(c,"atmosphereMieScaleHeight",3200),ne(c,"atmosphereMieAnisotropy",.92)),r.sun&&(r.sun.show=!0),r.moon&&(r.moon.show=!0),r.skyBox&&(r.skyBox.show=!0),"sunBloom"in r&&(r.sunBloom=!0),"highDynamicRange"in r&&(r.highDynamicRange=!0),Rr(r),(u=r.requestRender)==null||u.call(r)}function Fr(e){var c;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;if(!t||!r)return null;const a=(c=t.postProcessStages)==null?void 0:c.bloom;return{scene:We(t,["highDynamicRange","sunBloom","light"]),fog:We(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:We(r,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:We(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:We(t.sun,["show"]),moon:We(t.moon,["show"]),skyBox:We(t.skyBox,["show"]),bloom:{props:We(a,["enabled"]),uniforms:We(a==null?void 0:a.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Pr(e,t,r){var s,m,y,_;if(!r)return;const a=e==null?void 0:e.scene,c=a==null?void 0:a.globe;if(!a||!c)return;Ge(a,r.scene,t),Ge(a.fog,r.fog,t),Ge(c,r.globe,t),Ge(a.sun,r.sun,t),Ge(a.moon,r.moon,t),Ge(a.skyBox,r.skyBox,t),a.skyAtmosphere&&(Ge(a.skyAtmosphere,r.sky,t),r.skyAtmosphereExisted||(a.skyAtmosphere.show=!1));const u=(s=a.postProcessStages)==null?void 0:s.bloom;Ge(u,(m=r.bloom)==null?void 0:m.props,t),Ge(u==null?void 0:u.uniforms,(y=r.bloom)==null?void 0:y.uniforms,t),(_=a.requestRender)==null||_.call(a)}function Ar(e,t){var r;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(r=t.Color)==null?void 0:r.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}ne(e.light,"intensity",2.35)}function Er(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,ne(t,"density",12e-5),ne(t,"minimumBrightness",.035),ne(t,"screenSpaceErrorFactor",2),ne(t,"visualDensityScalar",.16))}function Rr(e){var r;const t=(r=e==null?void 0:e.postProcessStages)==null?void 0:r.bloom;t&&(t.enabled=!0,t.uniforms&&(ne(t.uniforms,"contrast",128),ne(t.uniforms,"brightness",-.18),ne(t.uniforms,"delta",1),ne(t.uniforms,"sigma",2.5),ne(t.uniforms,"stepSize",4.2)))}function Cr(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function ne(e,t,r){e&&t in e&&(e[t]=r)}function ht(e,t,r,a,c,u){!t||!(r in t)||!(e!=null&&e.Cartesian3)||(t[r]=new e.Cartesian3(a,c,u))}function We(e,t){return e?t.reduce((r,a)=>(a in e&&(r[a]=Dr(e[a])),r),{}):{}}function Ge(e,t={},r){!e||!t||Object.entries(t).forEach(([a,c])=>{a in e&&(e[a]=kr(c,r))})}function Dr(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function kr(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Ir={key:0,class:"advanced-effects-root"},Or={class:"effects-panel"},zr={class:"panel-head"},Br={class:"effect-switches"},Nr={class:"switch-item"},Hr={class:"switch-item"},Ur={class:"switch-item"},Wr={class:"switch-item"},Gr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,r=Tt(),a=Y(null),c=Y(!1),u=Y(!1),s=Y(!1),m=Y(!1),y=Y(!1);let _=null,F=null,P=null,N=!1,x=null,S=null,A=null,b=null,C=null,n=null,p=null,f=null,w=!1,E=null,L=0,U=0,j=typeof performance<"u"?performance.now():Date.now();function ee(){return A||(A=ur(()=>import("./cesiumFxRuntime-CvtFB7l4.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(g=>{var O;const v=(O=g==null?void 0:g.getCesiumFxEchartsRuntime)==null?void 0:O.call(g);if(!v)throw new Error("Cinematic FX 图表运行时加载失败");return S=v,v}).catch(g=>{throw A=null,g}),A)}async function Q(){return S||ee()}const te={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},G={hdr:null,bloom:null,sky:null};rr(()=>{de()}),nr(()=>{Ie()}),Te(()=>t.controls,g=>{le(g||{})},{deep:!0,immediate:!0});function le(g){Object.prototype.hasOwnProperty.call(g,"fog")&&(c.value=!!g.fog),Object.prototype.hasOwnProperty.call(g,"hbao")&&(u.value=!!g.hbao),Object.prototype.hasOwnProperty.call(g,"tiltShift")&&(s.value=!!g.tiltShift),Object.prototype.hasOwnProperty.call(g,"atmosphere")&&(m.value=!!g.atmosphere)}function de(){let g=0;b=window.setInterval(async()=>{var $,X;g+=1;const v=($=t.getViewer)==null?void 0:$.call(t),O=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(v&&O){clearInterval(b),b=null;try{_e(v),D(v),Re(v,O),W(v,O),r.success("高级视觉效果已启用。")}catch(oe){r.error("高级视觉效果初始化失败",oe),r.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}g>=150&&(clearInterval(b),b=null,r.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function _e(g){var O,$,X,oe,ge,o;const v=g==null?void 0:g.scene;if(v){if(typeof v.highDynamicRange=="boolean"&&(G.hdr=v.highDynamicRange),(O=v.postProcessStages)!=null&&O.bloom){const l=v.postProcessStages.bloom;G.bloom={enabled:!!l.enabled,contrast:($=l.uniforms)==null?void 0:$.contrast,brightness:(X=l.uniforms)==null?void 0:X.brightness,delta:(oe=l.uniforms)==null?void 0:oe.delta,sigma:(ge=l.uniforms)==null?void 0:ge.sigma,stepSize:(o=l.uniforms)==null?void 0:o.stepSize}}v.skyAtmosphere&&(G.sky={hueShift:v.skyAtmosphere.hueShift,saturationShift:v.skyAtmosphere.saturationShift,brightnessShift:v.skyAtmosphere.brightnessShift})}}function Re(g,v){var $;!(($=g==null?void 0:g.scene)!=null&&$.postProcessStages)||!(v!=null&&v.PostProcessStage)||(M(g,v),he(g,v),Ae(g,v),m.value?ce(g,v,1200):Be(g))}function D(g){var O;const v=g==null?void 0:g.scene;(O=v==null?void 0:v.renderError)!=null&&O.addEventListener&&(v.rethrowRenderErrors=!1,f=v.renderError.addEventListener(($,X)=>{r.error("Cesium 渲染异常，已触发降级保护",X),I(),w||(w=!0,r.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function I(){c.value=!1,s.value=!1,u.value=!1,m.value=!1,_&&(_.enabled=!1),F&&(F.enabled=!1),P&&(P.enabled=!1)}function M(g,v){_||(_=new v.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new v.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),g.scene.postProcessStages.add(_),_.enabled=c.value)}function he(g,v){var $,X;const O=($=g==null?void 0:g.scene)==null?void 0:$.postProcessStages;O&&(O.ambientOcclusion?(P=O.ambientOcclusion,N=!1):(X=v==null?void 0:v.PostProcessStageLibrary)!=null&&X.createAmbientOcclusionStage&&(P=v.PostProcessStageLibrary.createAmbientOcclusionStage(),O.add(P),N=!0),P&&(P.enabled=u.value,P.uniforms&&("intensity"in P.uniforms&&(P.uniforms.intensity=4.2),"bias"in P.uniforms&&(P.uniforms.bias=.08),"lengthCap"in P.uniforms&&(P.uniforms.lengthCap=.35),"stepSize"in P.uniforms&&(P.uniforms.stepSize=1.8),"frustumLength"in P.uniforms&&(P.uniforms.frustumLength=1200))))}function Ae(g,v){F||(F=new v.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),g.scene.postProcessStages.add(F),F.enabled=!1)}function W(g,v){const O=g==null?void 0:g.scene;O&&(p=O.preRender.addEventListener(()=>{var ge;const $=Fe(g),X=Number(((ge=g==null?void 0:g.camera)==null?void 0:ge.pitch)??-1.2);L+=1;const oe=typeof performance<"u"?performance.now():Date.now();if(oe-j>=1e3&&(U=Math.round(L*1e3/(oe-j)),L=0,j=oe),_&&(_.enabled=c.value,_.uniforms.cameraHeightFactor=Le($,150,12e3),_.uniforms.fogDensity=55e-5+(1-_.uniforms.cameraHeightFactor)*.00125),P&&(P.enabled=u.value),F){const o=X>-.62,l=o?ye((X+.62)/.5):0;F.enabled=s.value&&o,F.uniforms.blurStrength=l}m.value?ce(g,v,$):Be(g)}))}function ce(g,v,O){var o;const $=g==null?void 0:g.scene;if(!$)return;E||(E=Fr(g)),Lr(g,v),typeof $.highDynamicRange=="boolean"&&($.highDynamicRange=!0);const X=(o=$.postProcessStages)==null?void 0:o.bloom;X&&(X.enabled=!0,X.uniforms&&("contrast"in X.uniforms&&(X.uniforms.contrast=149),"brightness"in X.uniforms&&(X.uniforms.brightness=-.12),"delta"in X.uniforms&&(X.uniforms.delta=1),"sigma"in X.uniforms&&(X.uniforms.sigma=3.25),"stepSize"in X.uniforms&&(X.uniforms.stepSize=5)));const oe=$.skyAtmosphere;if(!oe)return;const ge=Le(O,500,12e4);oe.hueShift=-.035+ge*.035,oe.saturationShift=-.14+ge*.09,oe.brightnessShift=.03+(1-ge)*.08}function Be(g){var X,oe;const v=g==null?void 0:g.scene;if(!v)return;const O=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(E){Pr(g,O,E),E=null;return}typeof v.highDynamicRange=="boolean"&&G.hdr!==null&&(v.highDynamicRange=G.hdr);const $=(oe=v.postProcessStages)==null?void 0:oe.bloom;$&&G.bloom&&($.enabled=G.bloom.enabled,$.uniforms&&("contrast"in $.uniforms&&G.bloom.contrast!==void 0&&($.uniforms.contrast=G.bloom.contrast),"brightness"in $.uniforms&&G.bloom.brightness!==void 0&&($.uniforms.brightness=G.bloom.brightness),"delta"in $.uniforms&&G.bloom.delta!==void 0&&($.uniforms.delta=G.bloom.delta),"sigma"in $.uniforms&&G.bloom.sigma!==void 0&&($.uniforms.sigma=G.bloom.sigma),"stepSize"in $.uniforms&&G.bloom.stepSize!==void 0&&($.uniforms.stepSize=G.bloom.stepSize))),v.skyAtmosphere&&G.sky&&(v.skyAtmosphere.hueShift=G.sky.hueShift,v.skyAtmosphere.saturationShift=G.sky.saturationShift,v.skyAtmosphere.brightnessShift=G.sky.brightnessShift)}function Xe(){C&&(clearInterval(C),C=null)}async function je(){var $,X;const g=!y.value;if(y.value=g,!g){Xe();return}const v=($=t.getViewer)==null?void 0:$.call(t),O=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(!v||!O){y.value=!1,r.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ve(v,O),Ze(v,O),ke(v,O)}catch(oe){y.value=!1,r.error("图表模块加载失败",oe)}}async function Ve(g,v){await Q(),await dr(),a.value&&(x||(x=S.init(a.value),Ke()),n||(n=()=>{x==null||x.resize()},window.addEventListener("resize",n)),x.resize(),ke(g,v))}function Ze(g,v){C||(C=window.setInterval(()=>{!x||!y.value||ke(g,v)},1200))}function ke(g,v){var ge;const O=new Date,$=`${ue(O.getHours())}:${ue(O.getMinutes())}:${ue(O.getSeconds())}`,X=Number((Fe(g)/1e3).toFixed(2)),oe=Number(v.Math.toDegrees(((ge=g==null?void 0:g.camera)==null?void 0:ge.pitch)??0).toFixed(1));Z(te.labels,$,20),Z(te.cameraHeightKm,X,20),Z(te.pitchDeg,oe,20),Z(te.fps,U,20),x.setOption({xAxis:{data:te.labels},series:[{data:te.cameraHeightKm},{data:te.pitchDeg},{data:te.fps}]})}function Ke(){x&&x.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function Ie(){var O,$;b&&(clearInterval(b),b=null),Xe();const g=(O=t.getViewer)==null?void 0:O.call(t),v=($=g==null?void 0:g.scene)==null?void 0:$.postProcessStages;p&&(p(),p=null),f&&(f(),f=null),_&&v&&v.remove(_),_=null,F&&v&&v.remove(F),F=null,P&&(N&&v&&v.remove(P),P=null),N=!1,g&&Be(g),n&&(window.removeEventListener("resize",n),n=null),x&&(x.dispose(),x=null),S=null,w=!1}function Fe(g){var X,oe,ge;const v=(oe=(X=g==null?void 0:g.scene)==null?void 0:X.globe)==null?void 0:oe.ellipsoid,O=(ge=g==null?void 0:g.camera)==null?void 0:ge.positionWC;if(!v||!O)return 0;const $=v.cartesianToCartographic(O);return Math.max(0,Number(($==null?void 0:$.height)??0))}function Le(g,v,O){return!Number.isFinite(g)||O<=v?0:ye((g-v)/(O-v))}function ye(g){return Math.min(1,Math.max(0,Number(g)||0))}function Z(g,v,O){g.push(v),g.length>O&&g.shift()}function ue(g){return String(g).padStart(2,"0")}return(g,v)=>e.headless?ae("",!0):(z(),q("div",Ir,[d("div",Or,[d("div",zr,[v[4]||(v[4]=d("span",{class:"panel-title"},"Cinematic FX",-1)),d("button",{class:"panel-btn",onClick:je},ie(y.value?"隐藏图表":"显示图表"),1)]),d("div",Br,[d("label",Nr,[ve(d("input",{"onUpdate:modelValue":v[0]||(v[0]=O=>c.value=O),type:"checkbox"},null,512),[[ut,c.value]]),v[5]||(v[5]=d("span",null,"电影级高度雾",-1))]),d("label",Hr,[ve(d("input",{"onUpdate:modelValue":v[1]||(v[1]=O=>u.value=O),type:"checkbox"},null,512),[[ut,u.value]]),v[6]||(v[6]=d("span",null,"HBAO 微阴影",-1))]),d("label",Ur,[ve(d("input",{"onUpdate:modelValue":v[2]||(v[2]=O=>s.value=O),type:"checkbox"},null,512),[[ut,s.value]]),v[7]||(v[7]=d("span",null,"移轴摄影",-1))]),d("label",Wr,[ve(d("input",{"onUpdate:modelValue":v[3]||(v[3]=O=>m.value=O),type:"checkbox"},null,512),[[ut,m.value]]),v[8]||(v[8]=d("span",null,"动态大气 + Bloom",-1))])]),ve(d("div",{ref_key:"chartRef",ref:a,class:"fx-chart"},null,512),[[lt,y.value]])])]))}},$r=pt(Gr,[["__scopeId","data-v-1e562e70"]]),qr={key:0,class:"launcher-count"},Xr={class:"panel-header"},Vr={class:"panel-title-block"},Yr={class:"panel-mark"},jr={class:"panel-copy"},Zr={class:"panel-subtitle"},Kr={class:"panel-actions"},Qr=["title"],Jr={class:"panel-tabs","aria-label":"3D 工具分类"},en=["aria-pressed","onClick"],tn={class:"panel-scroll"},rn={class:"panel-page"},nn={class:"overview-grid"},an={class:"overview-tile"},on={class:"overview-tile"},sn={class:"overview-tile"},ln={key:0,class:"quick-actions"},cn=["disabled","onClick"],un={key:1,class:"empty-state"},dn={class:"panel-page"},hn=["aria-expanded"],fn={class:"section-main"},mn={class:"section-meta"},pn={key:0,class:"section-body"},gn={class:"option-grid"},vn=["disabled","aria-pressed","title","onClick"],yn={class:"custom-basemap-input-row"},xn=["disabled"],_n={key:0,class:"custom-basemap-current"},bn=["aria-expanded"],Sn={class:"section-main"},Tn={class:"section-meta"},wn={key:0,class:"section-body"},Mn={class:"option-grid"},Ln=["aria-pressed","title","onClick"],Fn=["aria-expanded"],Pn={class:"section-main"},An={class:"section-meta"},En={key:0,class:"section-body"},Rn={class:"overlay-list"},Cn=["disabled","aria-pressed","title","onClick"],Dn={class:"overlay-copy"},kn={class:"overlay-title"},In={key:0,class:"overlay-desc"},On={key:3,class:"empty-state"},zn={class:"panel-page"},Bn={class:"module-list"},Nn=["aria-expanded","onClick"],Hn={class:"module-icon"},Un={class:"module-copy"},Wn={class:"module-title"},Gn={key:0,class:"module-desc"},$n={class:"module-head-side"},qn={key:0,class:"module-body"},Xn={key:0,class:"module-actions"},Vn=["disabled","onClick"],Yn={key:1,class:"control-list"},jn={class:"control-label"},Zn={class:"control-label-text"},Kn=["aria-label","title"],Qn=["min","max","step","value","disabled","onInput"],Jn=["min","max","step","value","disabled","onInput"],ea=["value","disabled","onInput"],ta=["value","disabled","onChange"],ra=["value"],na=["aria-pressed","disabled","onClick"],aa={key:4,class:"control-value"},ia={key:0,class:"empty-state"},Bt=2,oa={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(e,{emit:t}){const r=e,a=t,c=Q(),u=c.uiStateVersion===Bt,s=Y(c.activeTab||"scene"),m=Y(!!c.compactMode),y=Y(new Set(u?c.expandedLayerSectionIds||[]:[])),_=Y(new Set(u?c.expandedModuleIds||[]:[])),F=Y(r.customBasemapUrl||""),P=Se(()=>r.embedded||r.open),N=Se(()=>r.modules.find(D=>D.id==="scene")||null),x=Se(()=>{var D;return((D=N.value)==null?void 0:D.actions)||[]}),S=Se(()=>r.modules.filter(D=>D.id!=="scene")),A=Se(()=>S.value.filter(D=>D.statusTone==="success"||D.statusTone==="warning").length),b=Se(()=>r.overlayOptions.filter(D=>!!D.active).length),C=[{id:"scene",label:"场景",icon:xt},{id:"layers",label:"图层",icon:Dt},{id:"modules",label:"模块",icon:yt}],n=Se(()=>{var D;return((D=r.basemapOptions.find(I=>I.value===r.activeBasemap))==null?void 0:D.label)||"未选择"}),p=Se(()=>{var D;return((D=r.terrainOptions.find(I=>I.value===r.activeTerrain))==null?void 0:D.label)||"未选择"});Te(()=>r.modules.map(D=>D.id),D=>{D.includes(s.value)||s.value==="scene"||s.value==="layers"||s.value==="modules"||(s.value="scene")},{immediate:!0}),Te([s,m,y,_],te,{deep:!0}),Te(()=>r.customBasemapUrl,D=>{D!==F.value&&(F.value=D||"")});function f(D){a("update:open",D)}function w(D){return y.value.has(D)}function E(D){const I=new Set(y.value);I.has(D)?I.delete(D):I.add(D),y.value=I}function L(D){return _.value.has(D)}function U(D){const I=new Set(_.value);I.has(D)?I.delete(D):I.add(D),_.value=I}function j(D){D!=null&&D.disabled||a("update:activeBasemap",D.value)}function ee(){a("custom-basemap-submit",{url:F.value})}function Q(){if(typeof window>"u")return{};try{const D=window.localStorage.getItem(r.storageKey);return D?JSON.parse(D):{}}catch{return{}}}function te(){if(!(typeof window>"u"))try{window.localStorage.setItem(r.storageKey,JSON.stringify({uiStateVersion:Bt,activeTab:s.value,compactMode:m.value,expandedLayerSectionIds:[...y.value],expandedModuleIds:[..._.value]}))}catch{}}function G(D){return{scene:xt,effects:Tr,wind:Sr,fluid:br}[D]||yt}function le(D,I){var he;return((he={scene:{home:xr,everest:It,tileset:yr},wind:{load:vr,clear:zt},fluid:{pick:Ot,clear:zt}}[D])==null?void 0:he[I])||_r}function de(D,I){a("module-action",{moduleId:D,actionId:I})}function _e(D,I,M){const he=I.type==="range"?Number(M):M;a("control-change",{moduleId:D,controlId:I.id,value:he})}function Re(D){D.disabled||a("overlay-toggle",{overlayId:D.value,value:!D.active})}return(D,I)=>(z(),q("aside",{class:be(["cesium-tool-shell",{"is-open":P.value,"is-embedded":e.embedded}])},[!e.embedded&&!P.value?(z(),q("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:I[0]||(I[0]=M=>f(!0))},[Pe(K(yt),{size:18,"stroke-width":"2"}),I[8]||(I[8]=d("span",null,"高级控制台",-1)),A.value?(z(),q("span",qr,ie(A.value),1)):ae("",!0)])):ae("",!0),ve(d("section",{class:be(["cesium-tool-panel",{compact:m.value}]),"aria-label":"Cesium 高级控制台"},[d("header",Xr,[d("div",Vr,[d("span",Yr,[Pe(K(xt),{size:18,"stroke-width":"2"})]),d("span",jr,[I[9]||(I[9]=d("span",{class:"panel-title"},"3D 高级控制台",-1)),d("span",Zr,ie(n.value)+" / "+ie(p.value),1)])]),d("div",Kr,[d("button",{class:"icon-btn",type:"button",title:m.value?"切换为舒展布局":"切换为紧凑布局",onClick:I[1]||(I[1]=M=>m.value=!m.value)},[Pe(K(fr),{size:16,"stroke-width":"2"})],8,Qr),e.embedded?ae("",!0):(z(),q("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:I[2]||(I[2]=M=>f(!1))},[Pe(K(mr),{size:17,"stroke-width":"2"})]))])]),d("nav",Jr,[(z(),q(Ee,null,Ue(C,M=>d("button",{key:M.id,class:be(["tab-btn",{active:s.value===M.id}]),type:"button","aria-pressed":s.value===M.id,onClick:he=>s.value=M.id},[(z(),qe(tt(M.icon),{size:15,"stroke-width":"2"})),d("span",null,ie(M.label),1)],10,en)),64))]),d("div",tn,[ve(d("section",rn,[d("div",nn,[d("div",an,[I[10]||(I[10]=d("span",{class:"overview-label"},"地图源",-1)),d("strong",null,ie(n.value),1)]),d("div",on,[I[11]||(I[11]=d("span",{class:"overview-label"},"地形",-1)),d("strong",null,ie(p.value),1)]),d("div",sn,[I[12]||(I[12]=d("span",{class:"overview-label"},"模块",-1)),d("strong",null,ie(A.value)+"/"+ie(S.value.length),1)])]),x.value.length?(z(),q("div",ln,[(z(!0),q(Ee,null,Ue(x.value,M=>(z(),q("button",{key:M.id,class:be(["tool-action",[M.variant||"default",{active:M.active}]]),disabled:M.disabled,type:"button",onClick:he=>de(N.value.id,M.id)},[(z(),qe(tt(le(N.value.id,M.id)),{size:15,"stroke-width":"2"})),Rt(" "+ie(M.label),1)],10,cn))),128))])):(z(),q("div",un," 暂无场景快捷操作 "))],512),[[lt,s.value==="scene"]]),ve(d("section",dn,[e.basemapOptions.length?(z(),q("div",{key:0,class:be(["option-group",{expanded:w("basemap")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":w("basemap"),onClick:I[3]||(I[3]=M=>E("basemap"))},[d("span",fn,[Pe(K(Dt),{size:16,"stroke-width":"2"}),I[13]||(I[13]=d("span",null,"底图源",-1))]),d("span",mn,[d("span",null,ie(n.value),1),Pe(K(dt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,hn),w("basemap")?(z(),q("div",pn,[d("div",gn,[(z(!0),q(Ee,null,Ue(e.basemapOptions,M=>(z(),q("button",{key:M.value,class:be(["option-card",{active:M.value===e.activeBasemap}]),type:"button",disabled:M.disabled,"aria-pressed":M.value===e.activeBasemap,title:M.description||M.label,onClick:he=>j(M)},[d("span",null,ie(M.label),1),M.value===e.activeBasemap?(z(),qe(K(kt),{key:0,size:15,"stroke-width":"2.4"})):ae("",!0)],10,vn))),128))]),d("form",{class:"custom-basemap-editor",onSubmit:Ct(ee,["prevent"])},[d("div",yn,[Pe(K(pr),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),ve(d("input",{"onUpdate:modelValue":I[4]||(I[4]=M=>F.value=M),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[ze,F.value]]),d("button",{class:"custom-basemap-submit",type:"submit",disabled:!F.value.trim(),title:"加载自定义 XYZ"},[Pe(K(gr),{size:14,"stroke-width":"2"}),I[14]||(I[14]=d("span",null,"加载",-1))],8,xn)]),e.customBasemapUrl?(z(),q("div",_n,ie(e.customBasemapUrl),1)):ae("",!0)],32)])):ae("",!0)],2)):ae("",!0),e.terrainOptions.length?(z(),q("div",{key:1,class:be(["option-group",{expanded:w("terrain")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":w("terrain"),onClick:I[5]||(I[5]=M=>E("terrain"))},[d("span",Sn,[Pe(K(It),{size:16,"stroke-width":"2"}),I[15]||(I[15]=d("span",null,"地形",-1))]),d("span",Tn,[d("span",null,ie(p.value),1),Pe(K(dt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,bn),w("terrain")?(z(),q("div",wn,[d("div",Mn,[(z(!0),q(Ee,null,Ue(e.terrainOptions,M=>(z(),q("button",{key:M.value,class:be(["option-card",{active:M.value===e.activeTerrain}]),type:"button","aria-pressed":M.value===e.activeTerrain,title:M.description||M.label,onClick:he=>D.$emit("update:activeTerrain",M.value)},[d("span",null,ie(M.label),1),M.value===e.activeTerrain?(z(),qe(K(kt),{key:0,size:15,"stroke-width":"2.4"})):ae("",!0)],10,Ln))),128))])])):ae("",!0)],2)):ae("",!0),e.overlayOptions.length?(z(),q("div",{key:2,class:be(["option-group",{expanded:w("overlay")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":w("overlay"),onClick:I[6]||(I[6]=M=>E("overlay"))},[d("span",Pn,[Pe(K(Ot),{size:16,"stroke-width":"2"}),I[16]||(I[16]=d("span",null,"叠加层",-1))]),d("span",An,[d("span",null,ie(b.value)+"/"+ie(e.overlayOptions.length),1),Pe(K(dt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Fn),w("overlay")?(z(),q("div",En,[d("div",Rn,[(z(!0),q(Ee,null,Ue(e.overlayOptions,M=>(z(),q("button",{key:M.value,class:be(["overlay-row",{active:!!M.active}]),type:"button",disabled:M.disabled,"aria-pressed":!!M.active,title:M.description||M.label,onClick:he=>Re(M)},[d("span",Dn,[d("span",kn,ie(M.label),1),M.description?(z(),q("span",In,ie(M.description),1)):ae("",!0)]),d("span",{class:be(["toggle-control",{active:!!M.active}]),"aria-hidden":"true"},[...I[17]||(I[17]=[d("span",{class:"toggle-track"},[d("span",{class:"toggle-thumb"})],-1)])],2)],10,Cn))),128))])])):ae("",!0)],2)):ae("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(z(),q("div",On," 暂无图层配置项 ")):ae("",!0)],512),[[lt,s.value==="layers"]]),ve(d("section",zn,[d("div",Bn,[(z(!0),q(Ee,null,Ue(S.value,M=>{var he,Ae;return z(),q("article",{key:M.id,class:be(["module-item",{expanded:L(M.id)}])},[d("button",{class:"module-head",type:"button","aria-expanded":L(M.id),onClick:W=>U(M.id)},[d("span",Hn,[(z(),qe(tt(G(M.id)),{size:16,"stroke-width":"2"}))]),d("span",Un,[d("span",Wn,ie(M.title),1),M.description?(z(),q("span",Gn,ie(M.description),1)):ae("",!0)]),d("span",$n,[M.status?(z(),q("span",{key:0,class:be(["module-status",M.statusTone||"neutral"])},ie(M.status),3)):ae("",!0),Pe(K(dt),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Nn),L(M.id)?(z(),q("div",qn,[(he=M.actions)!=null&&he.length?(z(),q("div",Xn,[(z(!0),q(Ee,null,Ue(M.actions,W=>(z(),q("button",{key:W.id,class:be(["tool-action",[W.variant||"default",{active:W.active}]]),disabled:W.disabled,type:"button",onClick:ce=>de(M.id,W.id)},[(z(),qe(tt(le(M.id,W.id)),{size:14,"stroke-width":"2"})),Rt(" "+ie(W.label),1)],10,Vn))),128))])):ae("",!0),(Ae=M.controls)!=null&&Ae.length?(z(),q("div",Yn,[(z(!0),q(Ee,null,Ue(M.controls,W=>(z(),q("label",{key:W.id,class:be(["control-row",`control-${W.type}`])},[d("span",jn,[d("span",Zn,ie(W.label),1),W.tooltip?(z(),q("span",{key:0,class:"control-help","aria-label":W.tooltip,title:W.tooltip,onClick:I[7]||(I[7]=Ct(()=>{},["prevent","stop"]))}," ? ",8,Kn)):ae("",!0)]),W.type==="range"?(z(),q(Ee,{key:0},[d("input",{class:"control-range",type:"range",min:W.min,max:W.max,step:W.step,value:W.value,disabled:W.disabled,onInput:ce=>_e(M.id,W,ce.target.value)},null,40,Qn),d("input",{class:"control-number",type:"number",min:W.min,max:W.max,step:W.step,value:W.value,disabled:W.disabled,onInput:ce=>_e(M.id,W,ce.target.value)},null,40,Jn)],64)):W.type==="color"?(z(),q(Ee,{key:1},[d("input",{class:"control-color",type:"color",value:W.value,disabled:W.disabled,onInput:ce=>_e(M.id,W,ce.target.value)},null,40,ea),d("span",{class:"control-color-swatch",style:ar({backgroundColor:W.value})},null,4)],64)):W.type==="select"?(z(),q("select",{key:2,class:"control-select",value:W.value,disabled:W.disabled,onChange:ce=>_e(M.id,W,ce.target.value)},[(z(!0),q(Ee,null,Ue(W.options||[],ce=>(z(),q("option",{key:ce.value,value:ce.value},ie(ce.label),9,ra))),128))],40,ta)):W.type==="toggle"?(z(),q("button",{key:3,class:be(["toggle-control",{active:!!W.value}]),type:"button","aria-pressed":!!W.value,disabled:W.disabled,onClick:ce=>_e(M.id,W,!W.value)},[...I[18]||(I[18]=[d("span",{class:"toggle-track"},[d("span",{class:"toggle-thumb"})],-1)])],10,na)):ae("",!0),W.displayValue?(z(),q("span",aa,ie(W.displayValue),1)):ae("",!0)],2))),128))])):ae("",!0)])):ae("",!0)],2)}),128))]),S.value.length?ae("",!0):(z(),q("div",ia," 暂无可用功能模块 "))],512),[[lt,s.value==="modules"]])])],2),[[lt,e.embedded||P.value]])],2))}},sa=pt(oa,[["__scopeId","data-v-c2b974d5"]]);function la(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(C){return(C==null?void 0:C._view)||(C==null?void 0:C.view)}function r(C){const n=t(C);if(!(n!=null&&n.passState))throw new Error("Cesium scene passState is unavailable.");return n.passState}function a(C){const n=t(C);return(n==null?void 0:n.frustumCommandsList)||(n==null?void 0:n._frustumCommandsList)||[]}const c=`
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
`,u=`
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
`,s=`
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
`,m=`
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
`;class F{constructor(n){this.commandType=n.commandType,this.geometry=n.geometry,this.attributeLocations=n.attributeLocations,this.primitiveType=n.primitiveType,this.uniformMap=n.uniformMap,this.vertexShaderSource=n.vertexShaderSource,this.fragmentShaderSource=n.fragmentShaderSource,this.rawRenderState=n.rawRenderState,this.framebuffer=n.framebuffer,this.isPostRender=n.isPostRender,this.outputTexture=n.outputTexture,this.autoClear=e.defaultValue(n.autoClear,!1),this.preExecute=n.preExecute,this.modelMatrix=e.defaultValue(n.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(n){switch(this.commandType){case"Draw":{const p=e.VertexArray.fromGeometry({context:n,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),f=e.ShaderProgram.fromCache({context:n,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),w=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:p,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:f,framebuffer:this.framebuffer,renderState:w,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(n,p){this.geometry=p;const f=e.VertexArray.fromGeometry({context:n,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=f}update(n){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(n.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&n.commandList.push(this.clearCommand),n.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class P{constructor(){}static loadText(n){const p=new XMLHttpRequest;return p.open("GET",n,!1),p.send(),p.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(n){if(e.defined(n.arrayBufferView)){const f={};f.arrayBufferView=n.arrayBufferView,n.source=f,n.flipY=!1}return new e.Texture(n)}static createDepthFramebuffer(n,p,f){return new e.Framebuffer({context:n,colorTextures:[this.createTexture({context:n,width:p,height:f,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(p*f*4)})],depthRenderbuffer:new e.Renderbuffer({context:n,width:p,height:f,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(n,p,f,w=!1){const E={context:n,colorTextures:[p],destroyAttachments:w};return f&&(E.depthTexture=f),new e.Framebuffer(E)}static createRawRenderState(n){const w={viewport:n.viewport,depthTest:n.depthTest,depthMask:n.depthMask,blending:n.blending};return e.Appearance.getDefaultRenderState(!0,!1,w)}}const b=class b{constructor(n,p={}){if(!n)throw new Error("Cesium Viewer is required");this.viewer=n,this._initConfiguration(p),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(n){this.config={resolution:new e.Cartesian2(n.width||b.DEFAULTS.width,n.height||b.DEFAULTS.height),dimensions:n.dimensions||b.DEFAULTS.dimensions.clone(),heightRange:{min:n.minHeight??b.DEFAULTS.heightRange[0],max:n.maxHeight??b.DEFAULTS.heightRange[1]},baseHeight:n.baseHeight??b.DEFAULTS.baseHeight,fluidParams:n.fluidParams||b.DEFAULTS.fluidParams.clone(),customParams:n.customParams||b.DEFAULTS.customParams.clone(),waterColor:n.waterColor||b.DEFAULTS.waterColor.clone(),lonLat:n.lonLat||[...b.DEFAULTS.lonLat],timeStep:n.timeStep||b.DEFAULTS.timeStep,heightMapSource:n.heightMapSource||b.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(n){const p=Number(n);!Number.isFinite(p)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,p)),this.resetSimulation())}resetSimulation(){var n,p;this._frameCount=0,(p=(n=this.viewer.scene).requestRender)==null||p.call(n)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const n=()=>P.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:n(),B:n(),C:n(),D:n()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(n){if(!(n!=null&&n.arrayBufferView)||!n.width||!n.height)throw new Error("Invalid height map source.");return P.createTexture({context:this.viewer.scene.context,width:n.width,height:n.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:n.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var G,le;const n=this.viewer.scene.context,p=P.createDepthFramebuffer(n,this.config.resolution.x,this.config.resolution.y),f=this.viewer.scene,w=f.frameState,E=r(this.viewer.scene),L=f.camera,U=w.camera,j=E.framebuffer,ee=e.BoundingRectangle.clone(E.viewport,new e.BoundingRectangle);let Q=null,te=[];try{E.viewport.x=0,E.viewport.y=0,E.viewport.width=this.config.resolution.x,E.viewport.height=this.config.resolution.y,E.framebuffer=p,f.camera=this.heightMapCamera,w.camera=this.heightMapCamera,w.context.uniformState.updateCamera(this.heightMapCamera),te=this._processHeightMapShaders(),this._renderDepthPrepass(E);const de=P.createTexture({context:n,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return Q=P.createFramebuffer(n,de),this._copyTexture(p.getColorTexture(0),Q),de}finally{this._restoreHeightMapShaders(te),E.framebuffer=j,e.BoundingRectangle.clone(ee,E.viewport),f.camera=L,w.camera=U,U&&w.context.uniformState.updateCamera(U),Q&&!((G=Q.isDestroyed)!=null&&G.call(Q))&&Q.destroy(),p&&!((le=p.isDestroyed)!=null&&le.call(p))&&p.destroy()}}_renderDepthPrepass(n){const p=this.viewer.scene.frameState;p.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(w=>w.execute(this.viewer.scene.context,n))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const n={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...n,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:u}),this._createComputePass("B",{uniforms:{...n,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:s}),this._createComputePass("C",{uniforms:{...n,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:m}),this._createComputePass("D",{uniforms:{...n,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:y})]}_createComputePass(n,{uniforms:p,shaderSource:f}){return new F({commandType:"Compute",uniformMap:p,fragmentShaderSource:new e.ShaderSource({sources:[c,f]}),geometry:P.getFullscreenQuad(),outputTexture:this.textures[n],preExecute:w=>w.commandToExecute.outputTexture=this.textures[n]})}_createMainRenderPass(){const n=x([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new F({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[c,_]}),geometry:this._createBoxGeometry(),modelMatrix:n,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var n,p,f,w;return(w=(f=(p=(n=t(this.viewer.scene))==null?void 0:n.globeDepth)==null?void 0:p.colorFramebufferManager)==null?void 0:f._colorTextures)==null?void 0:w[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(n=>this.viewer.scene.primitives.add(n)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(n){const p=this.viewer.camera.getPickRay(n);return this.viewer.scene.globe.pick(p,this.viewer.scene)}_createOrthographicCamera(){const n=new e.Camera(this.viewer.scene);n.frustum=new e.OrthographicOffCenterFrustum;const[p,f]=this.config.lonLat,w=e.Cartesian3.fromDegrees(p,f,this.config.baseHeight),E=e.Transforms.eastNorthUpToFixedFrame(w),L=n.frustum;L.near=.01,L.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),L.left=-this.config.dimensions.x/2,L.right=this.config.dimensions.x/2,L.bottom=-this.config.dimensions.y/2,L.top=this.config.dimensions.y/2;const U=e.Matrix4.getColumn(E,2,new e.Cartesian3);e.Cartesian3.negate(U,U);const j=e.Matrix4.getColumn(E,1,new e.Cartesian3),ee=e.Matrix4.getColumn(E,0,new e.Cartesian3),Q=e.Cartesian3.multiplyByScalar(U,-L.far,new e.Cartesian3);return n.position=e.Cartesian3.add(w,Q,new e.Cartesian3),n.direction=U,n.up=j,n.right=ee,n}destroy(){var n,p;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(f=>{f&&this.viewer.scene.primitives.remove(f)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(f=>{var w;f&&!((w=f.isDestroyed)!=null&&w.call(f))&&f.destroy()}),this.textures={},this._heightMap&&!((p=(n=this._heightMap).isDestroyed)!=null&&p.call(n))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(n,p){const f=this.viewer.scene.context,w=r(this.viewer.scene),E=f.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>n},owner:this}),L=w.framebuffer;w.framebuffer=p,E.execute(f,w),w.framebuffer=L}_getDepthRenderCommands(){var f,w;const n=[],p=a(this.viewer.scene);for(let E=0;E<p.length;++E){const L=p[E],U=(f=L==null?void 0:L.commands)==null?void 0:f[2],j=((w=L==null?void 0:L.indices)==null?void 0:w[2])??(U==null?void 0:U.length)??0;U&&j>0&&n.push(...U.slice(0,j))}return n}_processHeightMapShaders(){const n=[],p=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),f=e.Matrix4.inverse(p,new e.Matrix4),w=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(L=>{var te;if(!((te=L==null?void 0:L.shaderProgram)!=null&&te.fragmentShaderSource)||!L.uniformMap)return;const U=Object.prototype.hasOwnProperty.call(L.uniformMap,"u_inverseEnuMatrix"),j=L.uniformMap.u_inverseEnuMatrix,ee=L.shaderProgram,Q=new e.Matrix4;L.uniformMap.u_inverseEnuMatrix=()=>{const G=L.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(f,G,Q)},L.heightMap_ShaderProgram||(L.heightMap_ShaderProgram=this._getDerivedShaderProgram(w.context,L.shaderProgram,"Height_Map")),L.shaderProgram=L.heightMap_ShaderProgram,n.push({command:L,hadInverseUniform:U,originalInverseUniform:j,originalShaderProgram:ee})}),n}_restoreHeightMapShaders(n){n.forEach(p=>{const{command:f,hadInverseUniform:w,originalInverseUniform:E,originalShaderProgram:L}=p;f!=null&&f.uniformMap&&(f.shaderProgram=L,w?f.uniformMap.u_inverseEnuMatrix=E:delete f.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(n,p,f){let w=n.shaderCache.getDerivedShaderProgram(p,f);return e.defined(w)||(w=this._createHeightMapShaderProgram(n,p,f)),w}_createHeightMapShaderProgram(n,p,f){const w=this._modifyFragmentShader(p.fragmentShaderSource);return n.shaderCache.createDerivedShaderProgram(p,f,{vertexShaderSource:p.vertexShaderSource,fragmentShaderSource:w,attributeLocations:p._attributeLocations})}_modifyFragmentShader(n){const p=n.sources.map(f=>e.ShaderSource.replaceMain(f,"czm_heightMap_main"));return p.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:p,defines:n.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};Et(b,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let N=b;const x=(C=[0,0,0],n=[0,0,0],p=[1,1,1])=>{const f=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(n[0]))),w=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(n[1]))),E=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(n[2])));C instanceof e.Cartesian3||(C=e.Cartesian3.fromDegrees(...C));const L=e.Transforms.eastNorthUpToFixedFrame(C);e.Matrix4.multiply(L,f,L),e.Matrix4.multiply(L,w,L),e.Matrix4.multiply(L,E,L);const U=e.Matrix4.fromScale(new e.Cartesian3(...p));return e.Matrix4.multiply(L,U,new e.Matrix4)},S=`
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
    `;function A(){return new e.PostProcessStage({fragmentShader:S})}return{FluidRenderer:N,createSkyEffect:A}}const ca={key:0,class:"fluid-root"},ua={class:"fluid-panel"},da={class:"panel-actions"},ha=["disabled"],fa={key:0,class:"selected-text"},ma={class:"param-list"},pa={class:"param-row"},ga={class:"param-row"},va={class:"param-row"},ya={key:0,class:"param-row"},xa=["min","max","step"],_a=["min","max","step"],ba={class:"param-row color-row"},Nt=1024,ft=1e4,Ht=1200,Sa=100,Ta=.01,wa=.03,Ma=60,_t=64,La=160,Fa={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:r}){const a=e,c=r,u=Tt(),s=Y(10),m=Y(20),y=Y(3),_=Y("#0d4fa3"),F=Y(null),P=Y(null),N=Y(null),x=Y(!1),S=Y(!1),A=Y(null),b=Y(null);let C=null,n=null,p=null,f=null,w=null,E=null,L=0;const U=Se(()=>!Number.isFinite(A.value)||!Number.isFinite(b.value)?"":`经度 ${A.value.toFixed(6)} / 纬度 ${b.value.toFixed(6)}`),j=Se(()=>Number.isFinite(P.value)&&Number.isFinite(N.value)),ee=Se(()=>{if(!j.value)return 1;const o=Math.abs(N.value-P.value);return Math.max(o/1e3,.01)});Te([s,m,y,_],Z),Te(F,ue),Te(()=>a.params,o=>{te(o||{})},{deep:!0,immediate:!0}),Te([x,S,U,F,P,N],G,{immediate:!0}),hr(()=>{oe(!0)});function Q(){var T,B;const o=(T=a.getViewer)==null?void 0:T.call(a),l=((B=a.getCesium)==null?void 0:B.call(a))||window.Cesium;if(!o||!l)return u.warning("Cesium 场景尚未就绪。"),null;if(!C){const H=la(l);C=H.FluidRenderer,n=H.createSkyEffect}return{viewer:o,Cesium:l}}function te(o){Number.isFinite(Number(o.threshold))&&(s.value=Number(o.threshold)),Number.isFinite(Number(o.blend))&&(m.value=Number(o.blend)),Number.isFinite(Number(o.lightStrength))&&(y.value=Number(o.lightStrength)),Ie(o.waterColor)&&(_.value=o.waterColor),Number.isFinite(Number(o.waterLevel))&&(F.value=Number(o.waterLevel))}function G(){c("state-change",{isPicking:x.value,hasFluid:S.value,selectedText:U.value,waterLevel:F.value,waterLevelMin:P.value,waterLevelMax:N.value})}function le(){const o=Q();if(!o)return;const{viewer:l,Cesium:T}=o;$(),g(l,T),x.value=!0,p=new T.ScreenSpaceEventHandler(l.scene.canvas),p.setInputAction(B=>{de(l,T,B.position)},T.ScreenSpaceEventType.LEFT_CLICK)}async function de(o,l,T){var nt,i;const B=ye(o,T);if(!B){u.warning("未选中可用地形位置。");return}const H=++L;$();const se=l.Cartographic.fromCartesian(B),fe=l.Math.toDegrees(se.longitude),me=l.Math.toDegrees(se.latitude),Oe=Number(se.height),Ce=Number.isFinite(Oe)?Oe:0,Qe=new l.Cartesian3(ft,ft,0);er("正在请求模拟范围高度数据...");try{X();const h=Number(s.value)||0,R=Number(m.value)||0,k=Number(y.value)||0,V=await _e(o,l,{lon:fe,lat:me,centerHeight:Ce,dimensions:Qe}),J=Xe(V,Ce),pe=J.baseHeight,we=J.depth,Me=je(J,Ce),Ne=new l.Cartesian3(ft,ft,we);if(H!==L)return;P.value=J.minHeight,N.value=J.maxHeight,F.value=Me,V||u.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),f=new C(o,{lonLat:[fe,me],width:Nt,height:Nt,dimensions:Ne,baseHeight:pe,minHeight:J.minHeight,maxHeight:J.maxHeight,heightMapSource:V,waterColor:ke(l,_.value),customParams:new l.Cartesian4(h,R,k,10),fluidParams:new l.Cartesian4(.9+k/10*.099,Math.min(1,R/50),h/5e4,Ve(Me,J))}),A.value=fe,b.value=me,S.value=!0,(i=(nt=o.scene).requestRender)==null||i.call(nt),u.success("水体流体已创建。")}catch(h){u.error("水体流体创建失败",h),u.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{tr()}}async function _e(o,l,T){const B=o==null?void 0:o.terrainProvider,H=D(T.dimensions);if(!B)return null;if(l.EllipsoidTerrainProvider&&B instanceof l.EllipsoidTerrainProvider)return ce(H);if(typeof l.sampleTerrain!="function"&&typeof l.sampleTerrainMostDetailed!="function")return null;try{return await Re(o,l,T,H)}catch(se){if(H<=_t)throw se;return Re(o,l,T,_t)}}async function Re(o,l,T,B){const H=M(l,T,B),se=await he(l,o.terrainProvider,H);return W(se||H,{size:B})}function D(o){const l=Math.max(Number(o==null?void 0:o.x)||0,Number(o==null?void 0:o.y)||0),T=Math.ceil(l/Ma)+1;return I(T,_t,La)}function I(o,l,T){return Math.max(l,Math.min(T,Math.round(o)))}function M(o,{lon:l,lat:T,centerHeight:B,dimensions:H},se){const fe=o.Cartesian3.fromDegrees(l,T,B),me=o.Transforms.eastNorthUpToFixedFrame(fe),Oe=[],Ce=Math.max(1,se-1);for(let Qe=0;Qe<se;Qe++){const i=(.5-Qe/Ce)*H.y;for(let h=0;h<se;h++){const k=(h/Ce-.5)*H.x,V=new o.Cartesian3(k,i,0),J=o.Matrix4.multiplyByPoint(me,V,new o.Cartesian3);Oe.push(o.Cartographic.fromCartesian(J))}}return Oe}async function he(o,l,T){const B=Ae(l);return Number.isInteger(B)&&typeof o.sampleTerrain=="function"?o.sampleTerrain(l,B,T):typeof o.sampleTerrainMostDetailed=="function"?o.sampleTerrainMostDetailed(l,T):o.sampleTerrain(l,10,T)}function Ae(o){const l=Number(o==null?void 0:o._bottomLevel);return Number.isFinite(l)?Math.max(0,l-1):null}function W(o,{size:l}){var H;const T=Be(o);if(!T)return null;const B=new Float32Array(l*l*4);for(let se=0;se<l*l;se++){const fe=Number((H=o[se])==null?void 0:H.height),me=se*4;B[me]=Number.isFinite(fe)?Le(fe,T.minHeight,T.maxHeight):T.minHeight,B[me+1]=0,B[me+2]=0,B[me+3]=1}return{width:l,height:l,arrayBufferView:B,minHeight:T.minHeight,maxHeight:T.maxHeight}}function ce(o){return{width:o,height:o,arrayBufferView:new Float32Array(o*o*4),minHeight:0,maxHeight:0}}function Be(o){let l=Number.POSITIVE_INFINITY,T=Number.NEGATIVE_INFINITY;for(const B of o||[]){const H=Number(B==null?void 0:B.height);Number.isFinite(H)&&(l=Math.min(l,H),T=Math.max(T,H))}return!Number.isFinite(l)||!Number.isFinite(T)?null:{minHeight:l,maxHeight:T}}function Xe(o,l){const T=Number(o==null?void 0:o.minHeight),B=Number(o==null?void 0:o.maxHeight);if(Number.isFinite(T)&&Number.isFinite(B)){const fe=Number(l),me=Number.isFinite(fe)?Math.min(T,B,fe):Math.min(T,B),Oe=Number.isFinite(fe)?Math.max(T,B,fe):Math.max(T,B),Ce=Math.max(Oe-me,Ta);return{baseHeight:me,depth:Ce,minHeight:me,maxHeight:me+Ce}}const H=Number(l),se=Number.isFinite(H)?H-Sa:0;return{baseHeight:se,depth:Ht,minHeight:se,maxHeight:se+Ht}}function je(o,l){const T=o.minHeight+o.depth*wa,B=Number(l),H=Number.isFinite(B)?B:T;return Le(H,o.minHeight,o.maxHeight)}function Ve(o,l){const T=l.maxHeight-l.minHeight;return!Number.isFinite(T)||T<=0?0:Le((o-l.minHeight)/T,0,1)}function Ze(){return!Number.isFinite(P.value)||!Number.isFinite(N.value)?null:{minHeight:Math.min(P.value,N.value),maxHeight:Math.max(P.value,N.value)}}function ke(o,l){const T=Fe(l)||Fe("#0d4fa3");return new o.Cartesian3(T.red,T.green,T.blue)}function Ke(){var T;const o=Fe(_.value),l=(T=f==null?void 0:f.config)==null?void 0:T.waterColor;!o||!l||(l.x=o.red,l.y=o.green,l.z=o.blue)}function Ie(o){return typeof o=="string"&&/^#[0-9a-f]{6}$/i.test(o)}function Fe(o){return Ie(o)?{red:Number.parseInt(o.slice(1,3),16)/255,green:Number.parseInt(o.slice(3,5),16)/255,blue:Number.parseInt(o.slice(5,7),16)/255}:null}function Le(o,l,T){return Math.max(l,Math.min(T,o))}function ye(o,l){if(!l)return null;if(o.scene.pickPositionSupported&&typeof o.scene.pickPosition=="function"){const B=o.scene.pickPosition(l);if(B)return B}const T=o.camera.getPickRay(l);return T?o.scene.globe.pick(T,o.scene):null}function Z(){var B,H,se;if(!(f!=null&&f.config))return;const o=Number(s.value)||0,l=Number(m.value)||0,T=Number(y.value)||0;f.config.customParams&&(f.config.customParams.x=o,f.config.customParams.y=l,f.config.customParams.z=T),f.config.fluidParams&&(f.config.fluidParams.x=.9+T/10*.099,f.config.fluidParams.y=Math.min(1,l/50),f.config.fluidParams.z=o/5e4),Ke(),(se=(H=(B=f.viewer)==null?void 0:B.scene)==null?void 0:H.requestRender)==null||se.call(H)}function ue(){var H,se,fe,me;if(!((H=f==null?void 0:f.config)!=null&&H.fluidParams))return;const o=Ze(),l=Number(F.value);if(!o||!Number.isFinite(l))return;const T=Le(l,o.minHeight,o.maxHeight);if(T!==l){F.value=T;return}const B=Ve(T,o);typeof f.setInitialWaterLevel=="function"?f.setInitialWaterLevel(B):(f.config.fluidParams.w=B,(me=(fe=(se=f.viewer)==null?void 0:se.scene)==null?void 0:fe.requestRender)==null||me.call(fe))}function g(o,l){var T,B;if(!E){const H=o.scene;E={shadows:o.shadows,resolutionScale:o.resolutionScale,msaaSamples:H.msaaSamples,depthTestAgainstTerrain:H.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:H.logarithmicDepthBuffer,highDynamicRange:H.highDynamicRange,fogEnabled:(T=H.fog)==null?void 0:T.enabled,showGroundAtmosphere:H.globe.showGroundAtmosphere,skyAtmosphereShow:(B=H.skyAtmosphere)==null?void 0:B.show,enableLighting:H.globe.enableLighting}}o.shadows=!0,o.resolutionScale=1,o.scene.msaaSamples=4,o.scene.globe.depthTestAgainstTerrain=!0,o.scene.logarithmicDepthBuffer=!0,o.scene.highDynamicRange=!0,o.scene.fog&&(o.scene.fog.enabled=!0),o.scene.globe.showGroundAtmosphere=!0,o.scene.skyAtmosphere&&(o.scene.skyAtmosphere.show=!0),o.scene.globe.enableLighting=!0,!w&&n&&(w=n(l),o.scene.postProcessStages.add(w))}function v(o){if(!o||!E)return;const l=o.scene;o.shadows=E.shadows,o.resolutionScale=E.resolutionScale,E.msaaSamples!==void 0&&(l.msaaSamples=E.msaaSamples),l.globe.depthTestAgainstTerrain=E.depthTestAgainstTerrain,l.logarithmicDepthBuffer=E.logarithmicDepthBuffer,l.highDynamicRange=E.highDynamicRange,l.fog&&E.fogEnabled!==void 0&&(l.fog.enabled=E.fogEnabled),l.globe.showGroundAtmosphere=E.showGroundAtmosphere,l.skyAtmosphere&&E.skyAtmosphereShow!==void 0&&(l.skyAtmosphere.show=E.skyAtmosphereShow),l.globe.enableLighting=E.enableLighting,E=null}function O(){oe(!1),u.success("水体流体已清除。")}function $(){p&&(p.destroy(),p=null),x.value=!1}function X(){if(f){try{f.destroy()}catch{}f=null,S.value=!1}}function oe(o){var T,B,H;const l=(T=a.getViewer)==null?void 0:T.call(a);if(L+=1,$(),X(),A.value=null,b.value=null,F.value=null,P.value=null,N.value=null,l&&w){try{l.scene.postProcessStages.remove(w)}catch{}w=null}o&&l&&v(l),(H=(B=l==null?void 0:l.scene)==null?void 0:B.requestRender)==null||H.call(B)}function ge(){oe(!0),c("close")}return t({startPickHeightMap:le,clearFluid:O}),(o,l)=>e.headless?ae("",!0):(z(),q("div",ca,[d("div",ua,[d("div",{class:"panel-head"},[l[9]||(l[9]=d("span",{class:"panel-title"},"水体流体",-1)),d("button",{class:"panel-close",title:"关闭",onClick:ge}," × ")]),d("div",da,[d("button",{class:be(["action-btn primary",{active:x.value}]),onClick:le},ie(x.value?"等待选点":"捕捉高度图"),3),d("button",{class:"action-btn",disabled:!S.value&&!x.value,onClick:O}," 清除 ",8,ha)]),U.value?(z(),q("div",fa,ie(U.value),1)):ae("",!0),d("div",ma,[d("label",pa,[l[10]||(l[10]=d("span",null,"阈值",-1)),ve(d("input",{"onUpdate:modelValue":l[0]||(l[0]=T=>s.value=T),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[ze,s.value,void 0,{number:!0}]]),ve(d("input",{"onUpdate:modelValue":l[1]||(l[1]=T=>s.value=T),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[ze,s.value,void 0,{number:!0}]])]),d("label",ga,[l[11]||(l[11]=d("span",null,"混合",-1)),ve(d("input",{"onUpdate:modelValue":l[2]||(l[2]=T=>m.value=T),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[ze,m.value,void 0,{number:!0}]]),ve(d("input",{"onUpdate:modelValue":l[3]||(l[3]=T=>m.value=T),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[ze,m.value,void 0,{number:!0}]])]),d("label",va,[l[12]||(l[12]=d("span",null,"光强",-1)),ve(d("input",{"onUpdate:modelValue":l[4]||(l[4]=T=>y.value=T),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[ze,y.value,void 0,{number:!0}]]),ve(d("input",{"onUpdate:modelValue":l[5]||(l[5]=T=>y.value=T),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[ze,y.value,void 0,{number:!0}]])]),j.value?(z(),q("label",ya,[l[13]||(l[13]=d("span",null,"水位",-1)),ve(d("input",{"onUpdate:modelValue":l[6]||(l[6]=T=>F.value=T),type:"range",min:P.value,max:N.value,step:ee.value},null,8,xa),[[ze,F.value,void 0,{number:!0}]]),ve(d("input",{"onUpdate:modelValue":l[7]||(l[7]=T=>F.value=T),class:"number-input",type:"number",min:P.value,max:N.value,step:ee.value},null,8,_a),[[ze,F.value,void 0,{number:!0}]])])):ae("",!0),d("label",ba,[l[14]||(l[14]=d("span",null,"水色",-1)),ve(d("input",{"onUpdate:modelValue":l[8]||(l[8]=T=>_.value=T),class:"color-input",type:"color"},null,512),[[ze,_.value]]),d("span",{class:"color-swatch",style:ar({backgroundColor:_.value})},null,4)])])])]))}},Pa=pt(Fa,[["__scopeId","data-v-9ecdafb8"]]),wt="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Aa=`${wt}Cesium.js`,Ea=`${wt}Widgets/widgets.css`;async function Ra({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=wt),await Da(Ea,"cesium-widgets-style"),await Ca(Aa,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到");return mt(t,e),t}function mt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function Ca(e,t){return new Promise((r,a)=>{const c=document.getElementById(t);if(c){if(c.getAttribute("data-loaded")==="true"){r();return}c.addEventListener("load",()=>r(),{once:!0}),c.addEventListener("error",()=>a(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const u=document.createElement("script");u.id=t,u.src=e,u.async=!0,u.onload=()=>{u.setAttribute("data-loaded","true"),r()},u.onerror=()=>a(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(u)})}function Da(e,t){return new Promise((r,a)=>{if(document.getElementById(t)){r();return}const u=document.createElement("link");u.id=t,u.rel="stylesheet",u.href=e,u.onload=()=>r(),u.onerror=()=>a(new Error(`样式加载失败: ${e}`)),document.head.appendChild(u)})}const ka="Asia/Shanghai",Ia="UTC+8",Oa=new Intl.DateTimeFormat("zh-CN",{timeZone:ka,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function za(e,t){var r,a,c,u,s,m,y;if(!(!e||!(t!=null&&t.JulianDate))){if((r=e.animation)!=null&&r.viewModel&&(e.animation.viewModel.dateFormatter=(..._)=>Na(e,t,..._),e.animation.viewModel.timeFormatter=(..._)=>Ha(e,t,..._)),e.timeline){const _=(...F)=>Ua(e,t,...F);e.timeline.makeLabel=_,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=_),(c=(a=e.timeline).updateFromClock)==null||c.call(a),(s=(u=e.timeline).zoomTo)==null||s.call(u,e.clock.startTime,e.clock.stopTime)}(y=(m=e.scene).requestRender)==null||y.call(m)}}function Mt(e,t,...r){var m;const a=r.find(Ba)||((m=e==null?void 0:e.clock)==null?void 0:m.currentTime);if(!a)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const c=t.JulianDate.toDate(a),u=Oa.formatToParts(c),s=Object.fromEntries(u.filter(({type:y})=>y!=="literal").map(({type:y,value:_})=>[y,_]));return{year:s.year||"0000",month:s.month||"01",day:s.day||"01",hour:s.hour||"00",minute:s.minute||"00",second:s.second||"00"}}function Ba(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function Na(e,t,...r){const{year:a,month:c,day:u}=Mt(e,t,...r);return`${a}-${c}-${u}`}function Ha(e,t,...r){const{hour:a,minute:c,second:u}=Mt(e,t,...r);return`${a}:${c}:${u} ${Ia}`}function Ua(e,t,...r){const{month:a,day:c,hour:u,minute:s}=Mt(e,t,...r);return`${a}-${c} ${u}:${s}`}function Wa({getViewer:e}){let t=null,r=null;function a(){var m;const s=e==null?void 0:e();if(s&&((m=s._cesiumWidget)!=null&&m._creditContainer&&(s._cesiumWidget._creditContainer.style.display="none"),c(),t=setInterval(()=>{const y=document.querySelector(".cesium-credit-container");y&&y.innerHTML.length>0&&(y.innerHTML="",y.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const y=document.createElement("style");y.id="cesium-credit-override",y.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(y),r=y}}function c(){var y;const s=e==null?void 0:e();if(!s)return;(y=s._cesiumWidget)!=null&&y._creditContainer&&(s._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",s._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(_=>{_.style.cssText="display: none !important; visibility: hidden !important;",_.innerHTML=""}),s.scene&&s.scene.frameState&&s.scene.frameState.creditDisplay&&(s.scene.frameState.creditDisplay.hasCredits=()=>!1,s.scene.frameState.creditDisplay.destroy=()=>{})}function u(){t&&(clearInterval(t),t=null),r&&(r.remove(),r=null)}return{installCreditHider:a,cleanupCreditHider:u}}const Ga=500,St=48,$a=160,Ut=48;function qa({getViewer:e}){const t=Y(null),r=Y([]),a=Se(()=>Number.isFinite(t.value)?String(t.value):"--"),c=Se(()=>Xa(r.value));let u=null,s=0,m=bt();function y(){var P;const F=(P=e==null?void 0:e())==null?void 0:P.scene;F!=null&&F.preRender&&(_(),t.value=null,r.value=[],s=0,m=bt(),u=F.preRender.addEventListener(()=>{s+=1;const N=bt(),x=N-m;if(x<Ga)return;const S=Math.round(s*1e3/x);t.value=S,r.value=[...r.value.slice(1-St),S],s=0,m=N}))}function _(){typeof u=="function"&&(u(),u=null)}return{frameRateDisplay:a,frameRateLinePoints:c,setupFrameRateMonitor:y,cleanupFrameRateMonitor:_}}function bt(){return typeof performance<"u"?performance.now():Date.now()}function Xa(e){if(!e.length)return"";const t=Math.max(60,...e),r=$a/(St-1),a=St-e.length;return e.map((c,u)=>{const s=(a+u)*r,m=Math.max(0,Math.min(c/t,1)),y=Ut-m*Ut;return`${s.toFixed(1)},${y.toFixed(1)}`}).join(" ")}function Va({getViewer:e,getCesium:t}){let r=null;const a=Y("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function c(){const s=e==null?void 0:e(),m=t==null?void 0:t();!s||!m||(u(),r=new m.ScreenSpaceEventHandler(s.scene.canvas),r.setInputAction(y=>{const _=s.camera.getPickRay(y.endPosition);if(!_)return;const F=s.scene.globe.pick(_,s.scene);if(!F)return;const P=m.Cartographic.fromCartesian(F),N=m.Math.toDegrees(P.longitude).toFixed(6),x=m.Math.toDegrees(P.latitude).toFixed(6),S=P.height.toFixed(2);a.value=`经度: ${N}, 纬度: ${x}, 海拔: ${S}米`},m.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(y=>{const _=y.endPosition,F=y.startPosition;if(!m.defined(s.terrainProvider))return;const P=s.scene.globe.ellipsoid;if(!s.camera.pickEllipsoid(F,P)){const x=s.camera;x.rotate(m.Cartesian3.UNIT_X,-.002*(_.y-F.y)),x.rotate(m.Cartesian3.UNIT_Y,-.002*(_.x-F.x))}},m.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},m.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},m.ScreenSpaceEventType.RIGHT_UP))}function u(){r&&(r.destroy(),r=null)}return{coordinateDisplay:a,setupInteractions:c,cleanupInteractions:u}}function Ya(e,t=""){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r??t}catch{return t}}function ja(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function et(e,t){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r==null?t:r==="true"}catch{return t}}function ct(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Wt(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:r,Ellipsoid:a,Resource:c,HeightmapTerrainData:u,Rectangle:s,TileAvailability:m,CustomHeightmapTerrainProvider:y}=e;function _(x,S,A,b,C,n){const p=x.tileXYToRectangle(A,b,C);return t(s.intersection(p,S,n))}function F(x){const S=[[[0,0,1,0]]],A=new m(x.tilingScheme,19);for(let b=0;b<S.length;b++){const C=S[b];for(let n=0;n<C.length;n++){const p=C[n];A.addAvailableTileRange(b,p[0],p[1],p[2],p[3])}}return A}function P(x,S,A,b,C){const n=new u({buffer:x._transformBuffer(S),width:x._width,height:x._height,childTileMask:x._getChildTileMask(b,C,A),structure:x._terrainDataStructure});return n._skirtHeight=6e3,x.availability.addAvailableTileRange(A,b,C,b,C),n}class N extends y{constructor(S={}){if(super({...S,ellipsoid:a.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(S.url))throw new r("options.url is required.");this._dataType=S.dataType??"int16",this._url=S.url,this._subdomains=S.subdomains,this._token=S.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=F(this)}get availability(){return this._availability}requestTileGeometry(S,A,b,C){if(b>=this._bottomLevel)return Promise.reject(new Error(`Level ${b} is outside supported range.`));if(b<this._topLevel)return Promise.resolve(new u({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(S,A,b),structure:this._terrainDataStructure}));let n=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const f=this._subdomains[(S+A)%this._subdomains.length];n=n.replace("{s}",f)}n=n.replace("{token}",this._token).replace("{x}",S).replace("{y}",A).replace("{z}",b+1);const p=c.fetchArrayBuffer({url:n,request:C});if(p)return p.then(f=>f.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):wr.inflate(f)).then(f=>P(this,f,b,S,A))}getTileDataAvailable(S,A,b){return b<this._bottomLevel}_transformBuffer(S){let A=2;this._dataType==="float"&&(A=4);const b=S;if(b.length!==22500*A)return null;const C=new ArrayBuffer(A),n=new DataView(C),p=this._width,f=this._height,w=new Uint8Array(p*f*4);for(let E=0;E<f;E++)for(let L=0;L<p;L++){const U=Math.floor(149*E/(f-1)),j=Math.floor(149*L/(p-1)),ee=A*(150*U+j);let Q;A===4?(n.setInt8(0,b[ee]),n.setInt8(1,b[ee+1]),n.setInt8(2,b[ee+2]),n.setInt8(3,b[ee+3]),Q=n.getFloat32(0,!0)):Q=b[ee]+256*b[ee+1],(Q>1e4||Q<-2e3)&&(Q=0);const te=(Q+1e3)/.001,G=4*(E*p+L);w[G]=te/65536,w[G+1]=(te-256*w[G]*256)/256,w[G+2]=te-256*w[G]*256-256*w[G+1],w[G+3]=255}return w}_getVHeightBuffer(){let S=this._vHeightBuffer;if(!t(S)){S=new Uint8ClampedArray(this._width*this._height*4);for(let A=0;A<this._width*this._height*4;)S[A++]=15,S[A++]=66,S[A++]=64,S[A++]=255;this._vHeightBuffer=S}return S}_getChildTileMask(S,A,b){const C=new s,n=this._tilingScheme,p=this._rectangles,f=n.tileXYToRectangle(S,A,b);let w=0;for(let E=0;E<p.length&&w!==15;E++){const L=p[E];if(L.maxLevel<=b)continue;const U=L.rectangle,j=s.intersection(U,f,C);t(j)&&(_(n,U,2*S,2*A,b+1,C)&&(w|=4),_(n,U,2*S+1,2*A,b+1,C)&&(w|=8),_(n,U,2*S,2*A+1,b+1,C)&&(w|=1),_(n,U,2*S+1,2*A+1,b+1,C)&&(w|=2))}return w}}return N}const ot=["0","1","2","3","4","5","6","7"],st="https://t{s}.tianditu.gov.cn/",Za="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",Ka=96188,$e="custom-xyz",Gt="cesium_custom_xyz_basemap_url",Qa="cesium_tdt_label_layer_visible",$t="cesium_tdt_boundary_layer_visible",qt="cesium_tdt_text_label_layer_visible",Xt="cesium_osm_buildings_visible",Vt="cesium_google_photorealistic_3d_tiles_visible",Yt=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:$e,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],jt=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function Ja({getViewer:e,getCesium:t,message:r,backendBaseUrl:a,tiandituToken:c,cesiumIonToken:u}){let s=null,m=null,y=null,_=null,F=0,P=null,N=null,x=0,S=0,A=[];const b=()=>Zt(c),C=()=>Zt(u),n=[],p=Y([]),f=new Map,w=new Map,E=new Map,L=new Map,U=Y("tianditu"),j=Y("tianditu"),ee=Y(Ya(Gt,"")),Q=et(Qa,!0),te=Y(et($t,Q)),G=Y(et(qt,Q)),le=Y(et(Xt,!1)),de=Y(et(Vt,!1)),_e=Se(()=>[...Yt.map(i=>i.value!==$e?i:{...i,description:ee.value?ee.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!ee.value}),...p.value]),Re=Se(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:te.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:G.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:le.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:de.value}]);Te(U,i=>{!(e!=null&&e())||!(t!=null&&t())||l(i)}),Te(ee,i=>{ja(Gt,i)}),Te(j,async i=>{!(e!=null&&e())||!(t!=null&&t())||await B(i)}),Te(te,i=>{ct($t,i),Le()}),Te(G,i=>{ct(qt,i),Le()}),Te(le,i=>{ct(Xt,i),v()}),Te(de,i=>{ct(Vt,i),O()});function D(){const i=t==null?void 0:t();if(!i)return[];f.clear(),w.clear();const h=Yt.map(k=>{const V=new i.ProviderViewModel({name:k.label,tooltip:ni(k),category:"项目底图",iconUrl:Jt(k.value==="google"?"#5ea1ff":k.value===$e?"#f59e0b":"#37d67a",k.value==="google"?"G":k.value===$e?"XY":"TD"),creationFunction:()=>W(k.value)});return f.set(k.value,V),w.set(V,k.value),V}),R=Ae();return p.value=R.map((k,V)=>{const J=String((k==null?void 0:k.name)||`官方底图 ${V+1}`).trim(),pe=oi(J,V);return f.set(pe,k),w.set(k,pe),{value:pe,label:`官方 · ${J}`,description:String((k==null?void 0:k.tooltip)||J),source:"official"}}),[...h,...R]}function I(){const i=t==null?void 0:t();return i?(E.clear(),L.clear(),jt.map(h=>{const R=new i.ProviderViewModel({name:h.label,tooltip:h.description||h.label,category:"项目地形",iconUrl:Jt(ei(h.value),ti(h.value)),creationFunction:()=>se(h.value)});return E.set(h.value,R),L.set(R,h.value),R})):[]}function M(i=[]){return f.get(U.value)||i[0]}function he(i=[]){return E.get(j.value)||i[0]}function Ae(){const i=t==null?void 0:t();if(typeof(i==null?void 0:i.createDefaultImageryProviderViewModels)!="function")return[];try{return i.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function W(i){return i==="google"?Be():i===$e?Xe():ce()}function ce(){const i=t==null?void 0:t();return[new i.UrlTemplateImageryProvider({url:`${st}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${b()}`,subdomains:ot,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:18})]}function Be(){const i=t==null?void 0:t();return[new i.UrlTemplateImageryProvider({url:`${a}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:20})]}function Xe(){const i=t==null?void 0:t(),h=Qt(ee.value);return h.valid?[new i.UrlTemplateImageryProvider({url:h.url,subdomains:h.subdomains,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(r.warning(h.message,{closable:!0}),ce())}function je(){const i=t==null?void 0:t();return new i.UrlTemplateImageryProvider({url:`${st}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${b()}`,subdomains:ot,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:10})}function Ve(){const i=t==null?void 0:t();return new i.UrlTemplateImageryProvider({url:`${st}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${b()}`,subdomains:ot,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:18})}function Ze(){var we,Me,Ne,at,it;ke();const i=t==null?void 0:t(),h=(Me=(we=e==null?void 0:e())==null?void 0:we.baseLayerPicker)==null?void 0:Me.viewModel;if(!h||!((Ne=i==null?void 0:i.knockout)!=null&&Ne.getObservable))return;const R=i.knockout.getObservable(h,"selectedImagery"),k=i.knockout.getObservable(h,"selectedTerrain"),V=[],J=(at=R==null?void 0:R.subscribe)==null?void 0:at.call(R,Je=>{const De=w.get(Je);De&&(U.value!==De&&(U.value=De),Fe())}),pe=(it=k==null?void 0:k.subscribe)==null?void 0:it.call(k,Je=>{const De=L.get(Je);De&&(j.value!==De&&(j.value=De),H(De))});J&&V.push(J),pe&&V.push(pe),A=V}function ke(){A.forEach(i=>{var h;return(h=i==null?void 0:i.dispose)==null?void 0:h.call(i)}),A=[]}function Ke(){return Fe(),!0}function Ie(){const i=e==null?void 0:e();if(i!=null&&i.imageryLayers)for(;n.length;){const h=n.pop();try{i.imageryLayers.remove(h,!0)}catch{}}}function Fe(){var i,h,R;Le(),v(),O(),(R=(h=(i=e==null?void 0:e())==null?void 0:i.scene)==null?void 0:h.requestRender)==null||R.call(h)}function Le(){var h,R;const i=e==null?void 0:e();!i||!(t!=null&&t())||(te.value?ye():ue(),G.value?Z():g(),(R=(h=i.scene).requestRender)==null||R.call(h))}function ye(){var h,R,k,V;const i=e==null?void 0:e();if(!(i!=null&&i.imageryLayers)||s)return s&&((R=(h=i==null?void 0:i.imageryLayers)==null?void 0:h.raiseToTop)==null||R.call(h,s)),s;try{return s=i.imageryLayers.addImageryProvider(je()),(V=(k=i.imageryLayers).raiseToTop)==null||V.call(k,s),s}catch(J){return r.error("天地图国界线图层加载失败",J),null}}function Z(){var h,R,k,V;const i=e==null?void 0:e();if(!(i!=null&&i.imageryLayers)||m)return m&&((R=(h=i==null?void 0:i.imageryLayers)==null?void 0:h.raiseToTop)==null||R.call(h,m)),m;try{return m=i.imageryLayers.addImageryProvider(Ve()),(V=(k=i.imageryLayers).raiseToTop)==null||V.call(k,m),m}catch(J){return r.error("天地图文字标注图层加载失败",J),null}}function ue(){const i=e==null?void 0:e();if(!(!s||!(i!=null&&i.imageryLayers))){try{i.imageryLayers.remove(s,!0)}catch{}s=null}}function g(){const i=e==null?void 0:e();if(!(!m||!(i!=null&&i.imageryLayers))){try{i.imageryLayers.remove(m,!0)}catch{}m=null}}async function v(){var h,R,k;const i=e==null?void 0:e();!((h=i==null?void 0:i.scene)!=null&&h.primitives)||!(t!=null&&t())||(le.value?await oe():ge(),(k=(R=i.scene).requestRender)==null||k.call(R))}async function O(){var h,R,k;const i=e==null?void 0:e();!((h=i==null?void 0:i.scene)!=null&&h.primitives)||!(t!=null&&t())||(de.value?await $():X(),(k=(R=i.scene).requestRender)==null||k.call(R))}async function $(){var k,V,J;const i=e==null?void 0:e(),h=t==null?void 0:t();if(!((k=i==null?void 0:i.scene)!=null&&k.primitives))return null;if(P)return i.scene.globe.show=!1,P;if(N)return N;if(typeof(h==null?void 0:h.createGooglePhotorealistic3DTileset)!="function")return r.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),de.value=!1,null;const R=++x;mt(h,C()),N=h.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const pe=await N;return R!==x||!de.value?(Kt(pe),null):(P=i.scene.primitives.add(pe),i.scene.globe.show=!1,i.scene.skyAtmosphere.show=!0,(J=(V=i.scene).requestRender)==null||J.call(V),P)}catch(pe){return R!==x||(de.value=!1,r.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),r.error("Google Photorealistic 3D Tiles 初始化失败",pe)),null}finally{R===x&&(N=null)}}function X(){var h,R,k;const i=e==null?void 0:e();if(x+=1,N=null,!P||!((h=i==null?void 0:i.scene)!=null&&h.primitives)){(R=i==null?void 0:i.scene)!=null&&R.globe&&(i.scene.globe.show=!0);return}try{i.scene.primitives.remove(P)}catch{}P=null,(k=i==null?void 0:i.scene)!=null&&k.globe&&(i.scene.globe.show=!0)}async function oe(){var k,V,J,pe;const i=e==null?void 0:e(),h=t==null?void 0:t();if(!((k=i==null?void 0:i.scene)!=null&&k.primitives)||y)return y;if(_)return _;if(typeof((V=h==null?void 0:h.Cesium3DTileset)==null?void 0:V.fromIonAssetId)!="function"&&typeof(h==null?void 0:h.createOsmBuildingsAsync)!="function")return r.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),le.value=!1,null;const R=++F;mt(h,C()),await o(),_=ri(h,{maximumScreenSpaceError:8});try{const we=await _;return R!==F||!le.value?(Kt(we),null):(y=i.scene.primitives.add(we),(pe=(J=i.scene).requestRender)==null||pe.call(J),y)}catch(we){return R!==F||(le.value=!1,r.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),r.error("Cesium OSM 建筑图层初始化失败",we)),null}finally{R===F&&(_=null)}}function ge(){var h,R,k;const i=e==null?void 0:e();if(F+=1,_=null,!(!y||!((h=i==null?void 0:i.scene)!=null&&h.primitives))){try{i.scene.primitives.remove(y)}catch{}y=null,(k=(R=i.scene).requestRender)==null||k.call(R)}}async function o(){if(j.value==="cesiumWorld")return!0;j.value="cesiumWorld";const i=await B("cesiumWorld");return i||r.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),i}function l(i,h={}){var J,pe,we;const R=e==null?void 0:e();if(!R||!(t!=null&&t()))return!1;const k=(J=R.baseLayerPicker)==null?void 0:J.viewModel,V=f.get(i);if(k&&V){if(Ie(),h.forceReload&&k.selectedImagery===V){const Me=f.get("tianditu");Me&&Me!==V&&(k.selectedImagery=Me)}return k.selectedImagery!==V&&(k.selectedImagery=V),Fe(),!0}try{return Ie(),W(i).forEach(Ne=>{n.push(R.imageryLayers.addImageryProvider(Ne))}),Le(),(we=(pe=R.scene).requestRender)==null||we.call(pe),!0}catch(Me){return r.error("地图源切换失败",Me),!1}}function T(){return B(j.value)}async function B(i){var we,Me,Ne,at,it,Je,De,Lt,Ft,Pt,At;const h=e==null?void 0:e(),R=t==null?void 0:t();if(!h||!R)return!1;const k=(we=h.baseLayerPicker)==null?void 0:we.viewModel,V=E.get(i);if(k&&V)return k.selectedTerrain!==V&&(k.selectedTerrain=V),H(i),(Ne=(Me=h.scene).requestRender)==null||Ne.call(Me),!0;const J=++S;if(i==="ellipsoid")return h.terrainProvider=new R.EllipsoidTerrainProvider,H(i),(it=(at=h.scene).requestRender)==null||it.call(at),!0;if(i==="cesiumWorld")try{const He=await fe();return J!==S?!1:(h.terrainProvider=He,H(i),(De=(Je=h.scene).requestRender)==null||De.call(Je),!0)}catch(He){return J!==S||(h.terrainProvider=new R.EllipsoidTerrainProvider,H("ellipsoid"),r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",He)),!1}if(i==="arcgisWorld")try{const He=await me();return J!==S?!1:(h.terrainProvider=He,H(i),(Ft=(Lt=h.scene).requestRender)==null||Ft.call(Lt),!0)}catch(He){return J!==S||(h.terrainProvider=new R.EllipsoidTerrainProvider,H("ellipsoid"),r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",He)),!1}const pe=Wt(R);try{return h.terrainProvider=new pe({url:`${st}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:ot,token:b()}),H(i),(At=(Pt=h.scene).requestRender)==null||At.call(Pt),!0}catch(He){return h.terrainProvider=new R.EllipsoidTerrainProvider,H("ellipsoid"),r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",He),!1}}function H(i){var R;const h=e==null?void 0:e();(R=h==null?void 0:h.scene)!=null&&R.globe&&(h.scene.globe.depthTestAgainstTerrain=i!=="ellipsoid")}function se(i){const h=t==null?void 0:t();if(i==="ellipsoid")return new h.EllipsoidTerrainProvider;if(i==="cesiumWorld")return fe().catch(k=>(r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",k),Oe(i,"ellipsoid"),new h.EllipsoidTerrainProvider));if(i==="arcgisWorld")return me().catch(k=>(r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",k),Oe(i,"ellipsoid"),new h.EllipsoidTerrainProvider));const R=Wt(h);try{return new R({url:`${st}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:ot,token:b()})}catch(k){return r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",k),new h.EllipsoidTerrainProvider}}async function fe(){var R,k;const i=t==null?void 0:t();mt(i,C());const h={requestWaterMask:!1,requestVertexNormals:!0};if(typeof i.createWorldTerrainAsync=="function")return i.createWorldTerrainAsync(h);if(typeof i.createWorldTerrain=="function")return i.createWorldTerrain(h);if(typeof((R=i.CesiumTerrainProvider)==null?void 0:R.fromIonAssetId)=="function")return i.CesiumTerrainProvider.fromIonAssetId(1,h);if((k=i.IonResource)!=null&&k.fromAssetId&&i.CesiumTerrainProvider){const V=await i.IonResource.fromAssetId(1);return new i.CesiumTerrainProvider({url:V,...h})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function me(){var h;const i=t==null?void 0:t();if(typeof((h=i==null?void 0:i.ArcGISTiledElevationTerrainProvider)==null?void 0:h.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return i.ArcGISTiledElevationTerrainProvider.fromUrl(Za)}function Oe(i,h){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{j.value===i&&(j.value=h)},0)}function Ce({overlayId:i,value:h}){if(i==="tdt-boundaries"){te.value=!!h;return}if(i==="tdt-text-labels"){G.value=!!h;return}if(i==="cesium-osm-buildings"){le.value=!!h;return}i==="google-photorealistic-3d-tiles"&&(de.value=!!h)}function Qe({url:i}){const h=String(i||"").trim(),R=Qt(h);if(!R.valid){r.warning(R.message,{closable:!0});return}if(ee.value=h,U.value===$e){l($e,{forceReload:!0})&&r.success("已加载自定义 XYZ 图源");return}U.value=$e,r.success("已切换到自定义 XYZ 图源")}function nt(){Ie(),ue(),g(),ge(),X(),ke()}return{activeBasemap:U,activeTerrain:j,customXyzBasemapUrl:ee,basemapOptions:_e,terrainOptions:jt,overlayOptions:Re,createImageryProviderViewModels:D,createTerrainProviderViewModels:I,getSelectedImageryProviderViewModel:M,getSelectedTerrainProviderViewModel:he,bindLayerPickerStateSync:Ze,addBaseImageryLayers:Ke,initCustomTerrain:T,applyBasemap:l,applyTerrain:B,handleOverlayToggle:Ce,handleCustomBasemapSubmit:Qe,cleanupLayers:nt}}function ei(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function ti(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Zt(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Kt(e){var t,r;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(r=e.destroy)==null||r.call(e)}catch{}}async function ri(e,t={}){var r;if(typeof((r=e==null?void 0:e.Cesium3DTileset)==null?void 0:r.fromIonAssetId)=="function"){const a=await e.Cesium3DTileset.fromIonAssetId(Ka,t);return!a.style&&typeof e.Cesium3DTileStyle=="function"&&(a.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),a}return e.createOsmBuildingsAsync(t)}function ni(e){return e.value!==$e?e.description||e.label:`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`}function Qt(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let r=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const a=r.match(/\{([a-z0-9])-([a-z0-9])\}/i);let c=[];return a?(c=ai(a[1],a[2]),r=r.replace(a[0],"{s}")):/\{s\}/i.test(r)&&(c=["a","b","c"]),!/\{z\}/.test(r)||!/\{x\}/.test(r)||!/\{y\}/.test(r)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:r,subdomains:c}:ii(r)?{valid:!0,message:"",url:r,subdomains:c}:{valid:!1,message:"URL 格式不合法",url:r,subdomains:c}}function ai(e,t){const r=String(e||"").charCodeAt(0),a=String(t||"").charCodeAt(0);if(!Number.isFinite(r)||!Number.isFinite(a))return[];const c=r<=a?1:-1,u=[];for(let s=r;c>0?s<=a:s>=a;s+=c)u.push(String.fromCharCode(s));return u}function ii(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",r=new URL(e,t);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}function oi(e,t){const r=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${r||"basemap"}`}function Jt(e,t){const r=String(t||"").replace(/[<>&"']/g,"").slice(0,2),a=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${r}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(a)}`}function si({getViewer:e,getCesium:t,message:r}){function a(s){const m=e==null?void 0:e(),y=t==null?void 0:t();if(!m||!y)return;const _=typeof s=="number"?s:2;m.camera.flyTo({destination:y.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-y.Math.PI_OVER_TWO,roll:0},duration:_})}function c(){const s=e==null?void 0:e(),m=t==null?void 0:t();!s||!m||s.camera.flyTo({destination:m.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:m.Math.toRadians(0),pitch:m.Math.toRadians(-25),roll:0},duration:3})}async function u(){const s=e==null?void 0:e(),m=t==null?void 0:t();if(!(!s||!m))try{const y=await m.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");s.scene.primitives.add(y),s.flyTo(y,{duration:3,offset:new m.HeadingPitchRange(m.Math.toRadians(0),m.Math.toRadians(-25),y.boundingSphere.radius*2.5)})}catch(y){r.error(`加载模型失败: ${y}`),r.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:a,flyToEverest:c,loadCustomTileset:u}}const li="cesium_tool_panel_open";function ci({fluidPanelRef:e,sceneActions:t={},wind:r={},panelStorageKey:a=li}={}){const c=Y(et(a,!0)),u=Y({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),s=Y({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),m=Y({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),y=Se(()=>{var x,S,A,b,C,n;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:u.value.atmosphere||u.value.fog?"启用":"关闭",statusTone:u.value.atmosphere||u.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:u.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:u.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:u.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:u.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(x=r.wind2D)!=null&&x.value?"已加载":"未加载",statusTone:(S=r.wind2D)!=null&&S.value?"success":"neutral",actions:[{id:"load",label:(A=r.wind2D)!=null&&A.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((b=r.wind2D)!=null&&b.value)}],controls:ui((C=r.windParams)==null?void 0:C.value,!!((n=r.wind2D)!=null&&n.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:m.value.isPicking?"等待选点":m.value.hasFluid?"已创建":"未创建",statusTone:m.value.isPicking?"warning":m.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:m.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:m.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!m.value.hasFluid&&!m.value.isPicking}],controls:di(s.value,m.value)}]});Te(c,x=>{ct(a,x)});function _({moduleId:x,actionId:S}){var b,C;(C=(b={scene:{home:()=>{var n;return(n=t.flyToHome)==null?void 0:n.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:r.loadSimulatedWind,clear:r.clearWind2D},fluid:{pick:()=>{var n,p;return(p=(n=e==null?void 0:e.value)==null?void 0:n.startPickHeightMap)==null?void 0:p.call(n)},clear:()=>{var n,p;return(p=(n=e==null?void 0:e.value)==null?void 0:n.clearFluid)==null?void 0:p.call(n)}}}[x])==null?void 0:b[S])==null||C.call(b)}function F({moduleId:x,controlId:S,value:A}){var b,C;if(x==="effects"&&S in u.value){u.value={...u.value,[S]:!!A};return}if(x==="wind"&&S in(((b=r.windParams)==null?void 0:b.value)||{})){(C=r.setWindParam)==null||C.call(r,S,A);return}x==="fluid"&&S in s.value&&(s.value={...s.value,[S]:S==="waterColor"?A:Number(A)})}function P(x){const S=rt(x==null?void 0:x.waterLevel),A=rt(x==null?void 0:x.waterLevelMin),b=rt(x==null?void 0:x.waterLevelMax);m.value={isPicking:!!(x!=null&&x.isPicking),hasFluid:!!(x!=null&&x.hasFluid),selectedText:(x==null?void 0:x.selectedText)||"",waterLevel:S,waterLevelMin:A,waterLevelMax:b},S!==null&&(s.value={...s.value,waterLevel:S})}function N(){var x;(x=r.clearWind2D)==null||x.call(r)}return{toolPanelOpen:c,advancedEffectControls:u,fluidParams:s,fluidState:m,toolModules:y,handleToolAction:_,handleToolControlChange:F,handleFluidStateChange:P,cleanupTools:N}}function ui(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function di(e,t={}){const r=rt(t.waterLevelMin),a=rt(t.waterLevelMax),c=r!==null&&a!==null,u=c?Math.min(r,a):0,s=c?Math.max(r,a):0,m=rt(e.waterLevel),y=c?hi(m??u,u,s):0,_=c?Math.max((s-u)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:u,max:s,step:_,value:y,displayValue:c?`${fi(y)} m`:"先捕捉",disabled:!c,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function rt(e){const t=Number(e);return Number.isFinite(t)?t:null}function hi(e,t,r){return Math.max(t,Math.min(r,e))}function fi(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const xe={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},mi=new Float32Array([-1,-1,1,-1,1,1,-1,1]),pi=new Float32Array([0,0,1,0,1,1,0,1]),gi=new Uint16Array([0,1,2,0,2,3]);function Ye(e,t,r){return Math.max(t,Math.min(r,e))}function re(e,t){const r=Number(e);return Number.isFinite(r)?r:t}function vi(e,t){const r=t.getParameter(t.MAX_TEXTURE_SIZE),a=Math.min(2048,r),c=Math.max(1,Math.floor(e)),u=Math.sqrt(c),s=Math.log2(u),m=Number.isFinite(s)?Math.round(s):4;let y=Math.pow(2,m);return y=Ye(y,16,a),y}function yi(e){const t=e*e,r=new Float32Array(t*4);for(let a=0;a<t;a+=1){const c=a*4;r[c]=Math.random(),r[c+1]=Math.random(),r[c+2]=Math.random(),r[c+3]=Math.random()}return r}function xi(e){return new Float32Array(e*e*4)}function _i(e,t,r,a,c){const u=t.createTexture();if(!u)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,u),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,r,a,0,t.RGBA,t.FLOAT,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let s=!1;return{_context:e,_texture:u,_target:t.TEXTURE_2D,_width:r,_height:a,destroy(){s||(t.deleteTexture(u),s=!0)}}}class bi{constructor(t,r={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=r.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const a={...xe,...r};this.speedFactor=re(a.speedFactor,xe.speedFactor),this.cullSpeedMin=re(a.cullSpeedMin,xe.cullSpeedMin),this.cullSpeedMax=re(a.cullSpeedMax,xe.cullSpeedMax),this.windSpeedMin=re(a.windSpeedMin,xe.windSpeedMin),this.windSpeedMax=re(a.windSpeedMax,xe.windSpeedMax),this.arrowLength=re(a.arrowLength,xe.arrowLength),this.trailLength=re(a.trailLength,xe.trailLength),this.decaySpeed=re(a.decaySpeed,xe.decaySpeed),this.alphaFactor=re(a.alphaFactor,xe.alphaFactor),this.maxWindSpeed=re(a.maxWindSpeed,xe.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=re(r.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const r=re(t.longitude,NaN),a=re(t.latitude,NaN),c=Array.isArray(t.altitude)?t.altitude:[],u=Array.isArray(t.sizeMesh)?t.sizeMesh:[],s=Array.isArray(t.count)?t.count:[],m=Array.isArray(t.hspeed)?t.hspeed:[],y=Array.isArray(t.hdir)?t.hdir:[],_=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(r)||!Number.isFinite(a))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const F=c.length;if(F<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(u.length!==F||s.length!==F)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const P=s.map(L=>Math.max(1,Math.floor(re(L,1)))),N=u.map(L=>Math.max(1,re(L,1))),x=c.map(L=>re(L,0)),S=P.reduce((L,U)=>L+U*U,0);if(m.length<S||y.length<S||_.length<S)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=F,this.visibleLayerMin=0,this.visibleLayerMax=F-1,this._altitudes=x.slice(),this._maxNx=Math.max(...P),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*F;const A=new Float32Array(this._atlasWidth*this._atlasHeight*4);let b=0;for(let L=0;L<F;L+=1){const U=P[L],j=U;for(let ee=0;ee<j;ee+=1)for(let Q=0;Q<U;Q+=1){const te=b+ee*U+Q,G=((L*this._maxNy+ee)*this._atlasWidth+Q)*4,le=Number(m[te]),de=Number(y[te]),_e=Number(_[te]);if(!(Number.isFinite(le)&&Number.isFinite(de))){A[G]=0,A[G+1]=0,A[G+2]=0,A[G+3]=0;continue}const D=de*Math.PI/180;A[G]=le*Math.sin(D),A[G+1]=le*Math.cos(D),A[G+2]=Number.isFinite(_e)?_e:0,A[G+3]=1}b+=U*j}this._createOrReplaceWindAtlasTexture(A);const C=Math.max(...N),n=this._maxNx*C,p=n/2/111320,f=a*Math.PI/180,w=Math.max(1e-6,Math.abs(Math.cos(f))),E=n/2/(111320*w);this._bounds={minLon:r-E,maxLon:r+E,minLat:a-p,maxLat:a+p,minHeight:Math.min(...x),maxHeight:Math.max(...x)},this._dataPointCount=S,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const r=Math.max(1,Math.floor(re(t,1))),a=vi(r,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&a===this._particleTextureSize||(this._particleTextureSize=a,this._particleCount=a*a,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const r=Ye(re(t,this.particleDensity),.05,10);if(this.particleDensity=r,this._dataPointCount<=0)return;const a=Math.max(1,Math.floor(this._dataPointCount*r));this.setParticleCount(a)}setBounds(t,r,a,c){const u=re(t,NaN),s=re(r,NaN),m=re(a,NaN),y=re(c,NaN);if(!Number.isFinite(u)||!Number.isFinite(s)||!Number.isFinite(m)||!Number.isFinite(y))return;const _=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};_.minLon=Math.min(u,s),_.maxLon=Math.max(u,s),_.minLat=Math.min(m,y),_.maxLat=Math.max(m,y),this._bounds=_,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,r=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,r,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const c=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[c],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=c,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=_i(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,r=this._particleTextureSize,a=yi(r),c=xi(r);for(let u=0;u<2;u+=1){this._particlePositionTextures[u]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:a},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[u]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:c},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[u]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[u],this._velocityTextures[u]],destroyAttachments:!1});const s=this._framebuffers[u]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,s),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,r=t.Buffer.createVertexBuffer({context:this._context,typedArray:mi,usage:t.BufferUsage.STATIC_DRAW}),a=t.Buffer.createVertexBuffer({context:this._context,typedArray:pi,usage:t.BufferUsage.STATIC_DRAW}),c=t.Buffer.createIndexBuffer({context:this._context,typedArray:gi,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:r,componentsPerAttribute:2},{index:1,vertexBuffer:a,componentsPerAttribute:2}],indexBuffer:c})}_buildParticleVertexArray(){const t=this._Cesium,r=new Float32Array(this._drawVertexCount);for(let a=0;a<r.length;a+=1)r[a]=a;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:r,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,r=`#version 300 es
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
}`;this._updateProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:a,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const t=this._Cesium,r=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:a,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,r=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:r,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,r=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:r,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=Ye(Math.floor(re(this.visibleLayerMin,0)),0,this._layerCount-1),r=Ye(Math.floor(re(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:r}}_normalizeSpeedRange(t,r){const a=Math.max(1e-4,re(this.maxWindSpeed,xe.maxWindSpeed)),c=Ye(re(t,0)/a,0,1),u=Ye(re(r,a)/a,0,1);return{min:Math.min(c,u),max:Math.max(c,u)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>re(this.speedFactor,xe.speedFactor),maxWindSpeed:()=>Math.max(1e-4,re(this.maxWindSpeed,xe.maxWindSpeed)),decaySpeed:()=>Ye(re(this.decaySpeed,xe.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>re(this.arrowLength,xe.arrowLength),trailLength:()=>re(this.trailLength,xe.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Ye(re(this.alphaFactor,xe.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Si({getViewer:e,getCesium:t,message:r}){const a=Y(null),c=Y({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function u(){var F,P;const _=e==null?void 0:e();if(a.value){try{(P=(F=_==null?void 0:_.scene)==null?void 0:F.primitives)==null||P.remove(a.value)}catch{}a.value.destroy(),a.value=null}}function s(){const _=e==null?void 0:e(),F=t==null?void 0:t();if(!_||!F){r.error("Cesium 尚未初始化");return}u();const P=Ti(F);a.value=new bi(_,{maxWindSpeed:20,cesium:F,speedFactor:c.value.speedFactor,arrowLength:c.value.arrowLength,trailLength:c.value.trailLength,alphaFactor:c.value.alphaFactor}),a.value.loadData(P),_.scene.primitives.add(a.value),a.value.flyTo(),r.success("风场加载成功，可通过下方滑块调节样式")}function m(){a.value&&(a.value.speedFactor=c.value.speedFactor,a.value.arrowLength=c.value.arrowLength,a.value.trailLength=c.value.trailLength,a.value.alphaFactor=c.value.alphaFactor)}function y(_,F){return _ in c.value?(c.value={...c.value,[_]:Number(F)},m(),!0):!1}return{wind2D:a,windParams:c,clearWind2D:u,loadSimulatedWind:s,setWindParam:y}}function Ti(e){const c=[0,2e3,5e3,1e4,15e3],u=[3e4,3e4,25e3,25e3,2e4],s=[30,30,25,25,20],m=s.reduce((N,x)=>N+x*x,0),y=new Array(m),_=new Array(m),F=new Array(m);let P=0;for(let N=0;N<5;N++){const x=s[N],S=s[N],A=u[N];for(let b=0;b<S;b++)for(let C=0;C<x;C++){const n=P+b*x+C,p=(C-x/2)*(A/111320),f=(b-S/2)*(A/111320/Math.cos(e.Math.toRadians(35))),E=Math.atan2(f,p)+Math.PI/2+.2*Math.sin(C*.5)*Math.cos(b*.5);_[n]=e.Math.toDegrees(E)%360;const L=Math.sqrt(p*p+f*f),j=Math.max(0,1-L/15);y[n]=(5+N*2)*j+2*Math.random(),F[n]=.5*Math.sin(C*.3)*Math.cos(b*.3)}P+=x*S}return{longitude:104,latitude:35,altitude:c,sizeMesh:u,count:s,hspeed:y,hdir:_,vspeed:F}}const wi={key:3,class:"fps-chart-panel","aria-label":"实时帧率折线图"},Mi={class:"fps-chart-head"},Li={class:"fps-chart",viewBox:"0 0 160 48",preserveAspectRatio:"none","aria-hidden":"true"},Fi=["points"],Pi={class:"map-controls-group"},Ai={class:"mouse-position-content"},Ei={__name:"CesiumContainer",setup(e){let t=null,r=null;const a=Tt(),c=Y(!1),u=Y(null),s=Y(sr()),m=()=>r,y=()=>t||window.Cesium,_=()=>s.value.tiandituTk,F=()=>s.value.cesiumIonToken,P=Ja({getViewer:m,getCesium:y,message:a,backendBaseUrl:cr,tiandituToken:_,cesiumIonToken:F}),{activeBasemap:N,activeTerrain:x,customXyzBasemapUrl:S,basemapOptions:A,terrainOptions:b,overlayOptions:C,createImageryProviderViewModels:n,createTerrainProviderViewModels:p,getSelectedImageryProviderViewModel:f,getSelectedTerrainProviderViewModel:w,bindLayerPickerStateSync:E,addBaseImageryLayers:L,initCustomTerrain:U,handleOverlayToggle:j,handleCustomBasemapSubmit:ee,cleanupLayers:Q}=P,{coordinateDisplay:te,setupInteractions:G,cleanupInteractions:le}=Va({getViewer:m,getCesium:y}),{frameRateDisplay:de,frameRateLinePoints:_e,setupFrameRateMonitor:Re,cleanupFrameRateMonitor:D}=qa({getViewer:m}),{installCreditHider:I,cleanupCreditHider:M}=Wa({getViewer:m}),he=si({getViewer:m,getCesium:y,message:a}),{flyToHome:Ae}=he,W=Si({getViewer:m,getCesium:y,message:a}),{toolPanelOpen:ce,advancedEffectControls:Be,fluidParams:Xe,toolModules:je,handleToolAction:Ve,handleToolControlChange:Ze,handleFluidStateChange:ke,cleanupTools:Ke}=ci({fluidPanelRef:u,sceneActions:he,wind:W});async function Ie(){er("正在初始化 3D 场景...");try{let ye=0,Z=1;for(;ye<Z;)try{if(s.value=await lr({silent:!1,force:ye>0}),Z=Math.max(Z,Array.isArray(s.value.tiandituTokens)?s.value.tiandituTokens.length:1,Array.isArray(s.value.cesiumIonTokens)?s.value.cesiumIonTokens.length:1,1),t=await Ra({ionToken:F()}),!t||!document.getElementById("cesiumContainer"))return;Le(),G(),Re();const ue=L(),g=await U();if(c.value=!0,ue&&g){a.success("天地图基础影像与地形加载成功。");return}const v=ue?{switched:!1}:gt("tianditu_tk"),O=g?{switched:!1}:gt("cesium_ion_token");if(!(v.switched||O.switched)){a.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}s.value=O.switched?O.tokens:v.tokens,Fe(),ye+=1,a.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(ue){const g=gt("cesium_ion_token");if(!g.switched)throw ue;s.value=g.tokens,Fe(),ye+=1,a.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}a.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(ye){a.error("Cesium 运行时加载失败",ye),a.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{tr()}}function Fe(){if(c.value=!1,le(),D(),Q(),M(),!!r){try{r.destroy()}catch{}r=null}}function Le(){var g;const ye=typeof t.Map=="function"?t.Map:t.Viewer,Z=n(),ue=p();r=new ye("cesiumContainer",{baseLayerPicker:!0,geocoder:((g=t.IonGeocodeProviderType)==null?void 0:g.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:Z,selectedImageryProviderViewModel:f(Z),terrainProviderViewModels:ue,selectedTerrainProviderViewModel:w(ue),shouldAnimate:!0}),r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,za(r,t),Mr(r),I(),E(),Ae(0)}return rr(()=>{Ie()}),nr(()=>{if(c.value=!1,le(),D(),Ke(),Q(),M(),r){try{r.destroy()}catch{}r=null}}),(ye,Z)=>(z(),q(Ee,null,[Z[10]||(Z[10]=d("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),c.value?(z(),qe(tt($r),{key:0,headless:"","get-viewer":m,"get-cesium":y,controls:K(Be)},null,8,["controls"])):ae("",!0),c.value?(z(),qe(tt(Pa),{key:1,ref_key:"fluidPanelRef",ref:u,headless:"","get-viewer":m,"get-cesium":y,params:K(Xe),onStateChange:K(ke)},null,40,["params","onStateChange"])):ae("",!0),c.value?(z(),qe(sa,{key:2,open:K(ce),"onUpdate:open":Z[0]||(Z[0]=ue=>vt(ce)?ce.value=ue:null),"active-basemap":K(N),"onUpdate:activeBasemap":Z[1]||(Z[1]=ue=>vt(N)?N.value=ue:null),"active-terrain":K(x),"onUpdate:activeTerrain":Z[2]||(Z[2]=ue=>vt(x)?x.value=ue:null),"basemap-options":K(A),"terrain-options":K(b),"overlay-options":K(C),"custom-basemap-url":K(S),modules:K(je),onModuleAction:K(Ve),onControlChange:K(Ze),onOverlayToggle:K(j),onCustomBasemapSubmit:K(ee)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):ae("",!0),c.value?(z(),q("section",wi,[d("div",Mi,[Z[4]||(Z[4]=d("span",null,"FPS",-1)),d("strong",null,ie(K(de)),1)]),(z(),q("svg",Li,[Z[5]||(Z[5]=d("line",{class:"fps-grid-line",x1:"0",y1:"12",x2:"160",y2:"12"},null,-1)),Z[6]||(Z[6]=d("line",{class:"fps-grid-line",x1:"0",y1:"24",x2:"160",y2:"24"},null,-1)),Z[7]||(Z[7]=d("line",{class:"fps-grid-line",x1:"0",y1:"36",x2:"160",y2:"36"},null,-1)),K(_e)?(z(),q("polyline",{key:0,class:"fps-line",points:K(_e)},null,8,Fi)):ae("",!0)]))])):ae("",!0),d("div",Pi,[d("div",Ai,ie(K(te)),1),Z[9]||(Z[9]=d("div",{class:"divider"},null,-1)),d("button",{class:"home-btn",title:"回到初始位置",onClick:Z[3]||(Z[3]=(...ue)=>K(Ae)&&K(Ae)(...ue))},[...Z[8]||(Z[8]=[d("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[d("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},Wi=pt(Ei,[["__scopeId","data-v-9d0e9323"]]);export{Wi as default};
