const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-CvtFB7l4.js","./vendor-echarts-all-B_WEc2GE.js","./vendor-libs-RyoEAG51.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var or=Object.defineProperty;var sr=(e,t,r)=>t in e?or(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Rt=(e,t,r)=>sr(e,typeof t!="symbol"?t+"":t,r);import{_ as pt,e as wt,N as tr,M as rr,s as lr,q as cr,t as gt,L as ur}from"./index-CIQeecjK.js";import{_ as dr}from"./vendor-runtime-Dp1pzeXC.js";import{C as nr,o as ir,w as Te,d as N,c as q,f as d,t as ae,G as ve,W as ut,X as lt,g as ie,r as Y,P as hr,a as Pe,u as K,F as Ee,e as Ue,n as be,x as qe,S as tt,I as Ct,i as Dt,H as ze,O as ar,q as Se,v as fr,a4 as vt}from"./vendor-vue-CmuMwCC6.js";import{af as yt,ag as xt,ah as mr,X as pr,e as kt,ai as dt,ac as It,aj as gr,ak as vr,al as Ot,H as zt,T as Nt,a2 as yr,am as xr,an as _r,ao as br,ap as Sr,q as Tr,o as wr,aq as Mr}from"./vendor-libs-RyoEAG51.js";import"./vendor-ol-all-ZNWqDNbP.js";import"./vendor-geotiff-B6D64MFK.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BzG5Hdu9.js";import"./vendor-axios-Bdz_Fv8M.js";function Lr(e){var i;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;!t||!r||(r.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(i=t.requestRender)==null||i.call(t))}function Fr(e,t){var u;const r=e==null?void 0:e.scene,i=r==null?void 0:r.globe;if(!r||!i)return;Er(r,t),Rr(r),i.enableLighting=!0,i.showGroundAtmosphere=!0,ne(i,"dynamicAtmosphereLighting",!0),ne(i,"dynamicAtmosphereLightingFromSun",!0),ne(i,"atmosphereLightIntensity",11.5),ne(i,"atmosphereHueShift",-.015),ne(i,"atmosphereSaturationShift",.08),ne(i,"atmosphereBrightnessShift",.02),ne(i,"lightingFadeInDistance",15e6),ne(i,"lightingFadeOutDistance",22e6),ne(i,"nightFadeInDistance",9e6),ne(i,"nightFadeOutDistance",16e6),ht(t,i,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ht(t,i,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ne(i,"atmosphereRayleighScaleHeight",1e4),ne(i,"atmosphereMieScaleHeight",3200),ne(i,"atmosphereMieAnisotropy",.92),!r.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(r.skyAtmosphere=Dr(t));const l=r.skyAtmosphere;l&&(l.show=!0,ne(l,"perFragmentAtmosphere",!0),ne(l,"dynamicAtmosphereLighting",!0),ne(l,"dynamicAtmosphereLightingFromSun",!0),ne(l,"hueShift",-.025),ne(l,"saturationShift",.08),ne(l,"brightnessShift",.03),ne(l,"atmosphereLightIntensity",12),ht(t,l,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ht(t,l,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ne(l,"atmosphereRayleighScaleHeight",1e4),ne(l,"atmosphereMieScaleHeight",3200),ne(l,"atmosphereMieAnisotropy",.92)),r.sun&&(r.sun.show=!0),r.moon&&(r.moon.show=!0),r.skyBox&&(r.skyBox.show=!0),"sunBloom"in r&&(r.sunBloom=!0),"highDynamicRange"in r&&(r.highDynamicRange=!0),Cr(r),(u=r.requestRender)==null||u.call(r)}function Pr(e){var l;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;if(!t||!r)return null;const i=(l=t.postProcessStages)==null?void 0:l.bloom;return{scene:We(t,["highDynamicRange","sunBloom","light"]),fog:We(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:We(r,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:We(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:We(t.sun,["show"]),moon:We(t.moon,["show"]),skyBox:We(t.skyBox,["show"]),bloom:{props:We(i,["enabled"]),uniforms:We(i==null?void 0:i.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Ar(e,t,r){var c,y,b,T;if(!r)return;const i=e==null?void 0:e.scene,l=i==null?void 0:i.globe;if(!i||!l)return;Ge(i,r.scene,t),Ge(i.fog,r.fog,t),Ge(l,r.globe,t),Ge(i.sun,r.sun,t),Ge(i.moon,r.moon,t),Ge(i.skyBox,r.skyBox,t),i.skyAtmosphere&&(Ge(i.skyAtmosphere,r.sky,t),r.skyAtmosphereExisted||(i.skyAtmosphere.show=!1));const u=(c=i.postProcessStages)==null?void 0:c.bloom;Ge(u,(y=r.bloom)==null?void 0:y.props,t),Ge(u==null?void 0:u.uniforms,(b=r.bloom)==null?void 0:b.uniforms,t),(T=i.requestRender)==null||T.call(i)}function Er(e,t){var r;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(r=t.Color)==null?void 0:r.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}ne(e.light,"intensity",2.35)}function Rr(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,ne(t,"density",12e-5),ne(t,"minimumBrightness",.035),ne(t,"screenSpaceErrorFactor",2),ne(t,"visualDensityScalar",.16))}function Cr(e){var r;const t=(r=e==null?void 0:e.postProcessStages)==null?void 0:r.bloom;t&&(t.enabled=!0,t.uniforms&&(ne(t.uniforms,"contrast",128),ne(t.uniforms,"brightness",-.18),ne(t.uniforms,"delta",1),ne(t.uniforms,"sigma",2.5),ne(t.uniforms,"stepSize",4.2)))}function Dr(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function ne(e,t,r){e&&t in e&&(e[t]=r)}function ht(e,t,r,i,l,u){!t||!(r in t)||!(e!=null&&e.Cartesian3)||(t[r]=new e.Cartesian3(i,l,u))}function We(e,t){return e?t.reduce((r,i)=>(i in e&&(r[i]=kr(e[i])),r),{}):{}}function Ge(e,t={},r){!e||!t||Object.entries(t).forEach(([i,l])=>{i in e&&(e[i]=Ir(l,r))})}function kr(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Ir(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Or={key:0,class:"advanced-effects-root"},zr={class:"effects-panel"},Nr={class:"panel-head"},Br={class:"effect-switches"},Hr={class:"switch-item"},Ur={class:"switch-item"},Wr={class:"switch-item"},Gr={class:"switch-item"},$r={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,r=wt(),i=Y(null),l=Y(!1),u=Y(!1),c=Y(!1),y=Y(!1),b=Y(!1);let T=null,P=null,E=null,C=!1,p=null,_=null,w=null,v=null,A=null,n=null,f=null,m=null,M=!1,R=null,F=0,U=0,j=typeof performance<"u"?performance.now():Date.now();function ee(){return w||(w=dr(()=>import("./cesiumFxRuntime-CvtFB7l4.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(g=>{var z;const x=(z=g==null?void 0:g.getCesiumFxEchartsRuntime)==null?void 0:z.call(g);if(!x)throw new Error("Cinematic FX 图表运行时加载失败");return _=x,x}).catch(g=>{throw w=null,g}),w)}async function Q(){return _||ee()}const te={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},G={hdr:null,bloom:null,sky:null};nr(()=>{de()}),ir(()=>{Ie()}),Te(()=>t.controls,g=>{le(g||{})},{deep:!0,immediate:!0});function le(g){Object.prototype.hasOwnProperty.call(g,"fog")&&(l.value=!!g.fog),Object.prototype.hasOwnProperty.call(g,"hbao")&&(u.value=!!g.hbao),Object.prototype.hasOwnProperty.call(g,"tiltShift")&&(c.value=!!g.tiltShift),Object.prototype.hasOwnProperty.call(g,"atmosphere")&&(y.value=!!g.atmosphere)}function de(){let g=0;v=window.setInterval(async()=>{var $,X;g+=1;const x=($=t.getViewer)==null?void 0:$.call(t),z=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(x&&z){clearInterval(v),v=null;try{_e(x),k(x),Re(x,z),W(x,z),r.success("高级视觉效果已启用。")}catch(oe){r.error("高级视觉效果初始化失败",oe),r.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}g>=150&&(clearInterval(v),v=null,r.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function _e(g){var z,$,X,oe,ge,o;const x=g==null?void 0:g.scene;if(x){if(typeof x.highDynamicRange=="boolean"&&(G.hdr=x.highDynamicRange),(z=x.postProcessStages)!=null&&z.bloom){const s=x.postProcessStages.bloom;G.bloom={enabled:!!s.enabled,contrast:($=s.uniforms)==null?void 0:$.contrast,brightness:(X=s.uniforms)==null?void 0:X.brightness,delta:(oe=s.uniforms)==null?void 0:oe.delta,sigma:(ge=s.uniforms)==null?void 0:ge.sigma,stepSize:(o=s.uniforms)==null?void 0:o.stepSize}}x.skyAtmosphere&&(G.sky={hueShift:x.skyAtmosphere.hueShift,saturationShift:x.skyAtmosphere.saturationShift,brightnessShift:x.skyAtmosphere.brightnessShift})}}function Re(g,x){var $;!(($=g==null?void 0:g.scene)!=null&&$.postProcessStages)||!(x!=null&&x.PostProcessStage)||(L(g,x),he(g,x),Ae(g,x),y.value?ce(g,x,1200):Ne(g))}function k(g){var z;const x=g==null?void 0:g.scene;(z=x==null?void 0:x.renderError)!=null&&z.addEventListener&&(x.rethrowRenderErrors=!1,m=x.renderError.addEventListener(($,X)=>{r.error("Cesium 渲染异常，已触发降级保护",X),O(),M||(M=!0,r.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function O(){l.value=!1,c.value=!1,u.value=!1,y.value=!1,T&&(T.enabled=!1),P&&(P.enabled=!1),E&&(E.enabled=!1)}function L(g,x){T||(T=new x.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new x.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),g.scene.postProcessStages.add(T),T.enabled=l.value)}function he(g,x){var $,X;const z=($=g==null?void 0:g.scene)==null?void 0:$.postProcessStages;z&&(z.ambientOcclusion?(E=z.ambientOcclusion,C=!1):(X=x==null?void 0:x.PostProcessStageLibrary)!=null&&X.createAmbientOcclusionStage&&(E=x.PostProcessStageLibrary.createAmbientOcclusionStage(),z.add(E),C=!0),E&&(E.enabled=u.value,E.uniforms&&("intensity"in E.uniforms&&(E.uniforms.intensity=4.2),"bias"in E.uniforms&&(E.uniforms.bias=.08),"lengthCap"in E.uniforms&&(E.uniforms.lengthCap=.35),"stepSize"in E.uniforms&&(E.uniforms.stepSize=1.8),"frustumLength"in E.uniforms&&(E.uniforms.frustumLength=1200))))}function Ae(g,x){P||(P=new x.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),g.scene.postProcessStages.add(P),P.enabled=!1)}function W(g,x){const z=g==null?void 0:g.scene;z&&(f=z.preRender.addEventListener(()=>{var ge;const $=Fe(g),X=Number(((ge=g==null?void 0:g.camera)==null?void 0:ge.pitch)??-1.2);F+=1;const oe=typeof performance<"u"?performance.now():Date.now();if(oe-j>=1e3&&(U=Math.round(F*1e3/(oe-j)),F=0,j=oe),T&&(T.enabled=l.value,T.uniforms.cameraHeightFactor=Le($,150,12e3),T.uniforms.fogDensity=55e-5+(1-T.uniforms.cameraHeightFactor)*.00125),E&&(E.enabled=u.value),P){const o=X>-.62,s=o?ye((X+.62)/.5):0;P.enabled=c.value&&o,P.uniforms.blurStrength=s}y.value?ce(g,x,$):Ne(g)}))}function ce(g,x,z){var o;const $=g==null?void 0:g.scene;if(!$)return;R||(R=Pr(g)),Fr(g,x),typeof $.highDynamicRange=="boolean"&&($.highDynamicRange=!0);const X=(o=$.postProcessStages)==null?void 0:o.bloom;X&&(X.enabled=!0,X.uniforms&&("contrast"in X.uniforms&&(X.uniforms.contrast=149),"brightness"in X.uniforms&&(X.uniforms.brightness=-.12),"delta"in X.uniforms&&(X.uniforms.delta=1),"sigma"in X.uniforms&&(X.uniforms.sigma=3.25),"stepSize"in X.uniforms&&(X.uniforms.stepSize=5)));const oe=$.skyAtmosphere;if(!oe)return;const ge=Le(z,500,12e4);oe.hueShift=-.035+ge*.035,oe.saturationShift=-.14+ge*.09,oe.brightnessShift=.03+(1-ge)*.08}function Ne(g){var X,oe;const x=g==null?void 0:g.scene;if(!x)return;const z=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(R){Ar(g,z,R),R=null;return}typeof x.highDynamicRange=="boolean"&&G.hdr!==null&&(x.highDynamicRange=G.hdr);const $=(oe=x.postProcessStages)==null?void 0:oe.bloom;$&&G.bloom&&($.enabled=G.bloom.enabled,$.uniforms&&("contrast"in $.uniforms&&G.bloom.contrast!==void 0&&($.uniforms.contrast=G.bloom.contrast),"brightness"in $.uniforms&&G.bloom.brightness!==void 0&&($.uniforms.brightness=G.bloom.brightness),"delta"in $.uniforms&&G.bloom.delta!==void 0&&($.uniforms.delta=G.bloom.delta),"sigma"in $.uniforms&&G.bloom.sigma!==void 0&&($.uniforms.sigma=G.bloom.sigma),"stepSize"in $.uniforms&&G.bloom.stepSize!==void 0&&($.uniforms.stepSize=G.bloom.stepSize))),x.skyAtmosphere&&G.sky&&(x.skyAtmosphere.hueShift=G.sky.hueShift,x.skyAtmosphere.saturationShift=G.sky.saturationShift,x.skyAtmosphere.brightnessShift=G.sky.brightnessShift)}function Xe(){A&&(clearInterval(A),A=null)}async function je(){var $,X;const g=!b.value;if(b.value=g,!g){Xe();return}const x=($=t.getViewer)==null?void 0:$.call(t),z=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(!x||!z){b.value=!1,r.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ve(x,z),Ze(x,z),ke(x,z)}catch(oe){b.value=!1,r.error("图表模块加载失败",oe)}}async function Ve(g,x){await Q(),await hr(),i.value&&(p||(p=_.init(i.value),Ke()),n||(n=()=>{p==null||p.resize()},window.addEventListener("resize",n)),p.resize(),ke(g,x))}function Ze(g,x){A||(A=window.setInterval(()=>{!p||!b.value||ke(g,x)},1200))}function ke(g,x){var ge;const z=new Date,$=`${ue(z.getHours())}:${ue(z.getMinutes())}:${ue(z.getSeconds())}`,X=Number((Fe(g)/1e3).toFixed(2)),oe=Number(x.Math.toDegrees(((ge=g==null?void 0:g.camera)==null?void 0:ge.pitch)??0).toFixed(1));Z(te.labels,$,20),Z(te.cameraHeightKm,X,20),Z(te.pitchDeg,oe,20),Z(te.fps,U,20),p.setOption({xAxis:{data:te.labels},series:[{data:te.cameraHeightKm},{data:te.pitchDeg},{data:te.fps}]})}function Ke(){p&&p.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function Ie(){var z,$;v&&(clearInterval(v),v=null),Xe();const g=(z=t.getViewer)==null?void 0:z.call(t),x=($=g==null?void 0:g.scene)==null?void 0:$.postProcessStages;f&&(f(),f=null),m&&(m(),m=null),T&&x&&x.remove(T),T=null,P&&x&&x.remove(P),P=null,E&&(C&&x&&x.remove(E),E=null),C=!1,g&&Ne(g),n&&(window.removeEventListener("resize",n),n=null),p&&(p.dispose(),p=null),_=null,M=!1}function Fe(g){var X,oe,ge;const x=(oe=(X=g==null?void 0:g.scene)==null?void 0:X.globe)==null?void 0:oe.ellipsoid,z=(ge=g==null?void 0:g.camera)==null?void 0:ge.positionWC;if(!x||!z)return 0;const $=x.cartesianToCartographic(z);return Math.max(0,Number(($==null?void 0:$.height)??0))}function Le(g,x,z){return!Number.isFinite(g)||z<=x?0:ye((g-x)/(z-x))}function ye(g){return Math.min(1,Math.max(0,Number(g)||0))}function Z(g,x,z){g.push(x),g.length>z&&g.shift()}function ue(g){return String(g).padStart(2,"0")}return(g,x)=>e.headless?ie("",!0):(N(),q("div",Or,[d("div",zr,[d("div",Nr,[x[4]||(x[4]=d("span",{class:"panel-title"},"Cinematic FX",-1)),d("button",{class:"panel-btn",onClick:je},ae(b.value?"隐藏图表":"显示图表"),1)]),d("div",Br,[d("label",Hr,[ve(d("input",{"onUpdate:modelValue":x[0]||(x[0]=z=>l.value=z),type:"checkbox"},null,512),[[ut,l.value]]),x[5]||(x[5]=d("span",null,"电影级高度雾",-1))]),d("label",Ur,[ve(d("input",{"onUpdate:modelValue":x[1]||(x[1]=z=>u.value=z),type:"checkbox"},null,512),[[ut,u.value]]),x[6]||(x[6]=d("span",null,"HBAO 微阴影",-1))]),d("label",Wr,[ve(d("input",{"onUpdate:modelValue":x[2]||(x[2]=z=>c.value=z),type:"checkbox"},null,512),[[ut,c.value]]),x[7]||(x[7]=d("span",null,"移轴摄影",-1))]),d("label",Gr,[ve(d("input",{"onUpdate:modelValue":x[3]||(x[3]=z=>y.value=z),type:"checkbox"},null,512),[[ut,y.value]]),x[8]||(x[8]=d("span",null,"动态大气 + Bloom",-1))])]),ve(d("div",{ref_key:"chartRef",ref:i,class:"fx-chart"},null,512),[[lt,b.value]])])]))}},qr=pt($r,[["__scopeId","data-v-1e562e70"]]),Xr={key:0,class:"launcher-count"},Vr={class:"panel-header"},Yr={class:"panel-title-block"},jr={class:"panel-mark"},Zr={class:"panel-copy"},Kr={class:"panel-subtitle"},Qr={class:"panel-actions"},Jr=["title"],en={class:"panel-tabs","aria-label":"3D 工具分类"},tn=["aria-pressed","onClick"],rn={class:"panel-scroll"},nn={class:"panel-page"},an={class:"overview-grid"},on={class:"overview-tile"},sn={class:"overview-tile"},ln={class:"overview-tile"},cn={key:0,class:"quick-actions"},un=["disabled","onClick"],dn={key:1,class:"empty-state"},hn={class:"panel-page"},fn=["aria-expanded"],mn={class:"section-main"},pn={class:"section-meta"},gn={key:0,class:"section-body"},vn={class:"option-grid"},yn=["disabled","aria-pressed","title","onClick"],xn={class:"custom-basemap-input-row"},_n=["disabled"],bn={key:0,class:"custom-basemap-current"},Sn=["aria-expanded"],Tn={class:"section-main"},wn={class:"section-meta"},Mn={key:0,class:"section-body"},Ln={class:"option-grid"},Fn=["aria-pressed","title","onClick"],Pn=["aria-expanded"],An={class:"section-main"},En={class:"section-meta"},Rn={key:0,class:"section-body"},Cn={class:"overlay-list"},Dn=["disabled","aria-pressed","title","onClick"],kn={class:"overlay-copy"},In={class:"overlay-title"},On={key:0,class:"overlay-desc"},zn={key:3,class:"empty-state"},Nn={class:"panel-page"},Bn={class:"module-list"},Hn=["aria-expanded","onClick"],Un={class:"module-icon"},Wn={class:"module-copy"},Gn={class:"module-title"},$n={key:0,class:"module-desc"},qn={class:"module-head-side"},Xn={key:0,class:"module-body"},Vn={key:0,class:"module-actions"},Yn=["disabled","onClick"],jn={key:1,class:"control-list"},Zn={class:"control-label"},Kn={class:"control-label-text"},Qn=["aria-label","title"],Jn=["min","max","step","value","disabled","onInput"],ei=["min","max","step","value","disabled","onInput"],ti=["value","disabled","onInput"],ri=["value","disabled","onChange"],ni=["value"],ii=["aria-pressed","disabled","onClick"],ai={key:4,class:"control-value"},oi={key:0,class:"empty-state"},Bt=2,si={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(e,{emit:t}){const r=e,i=t,l=Q(),u=l.uiStateVersion===Bt,c=Y(l.activeTab||"scene"),y=Y(!!l.compactMode),b=Y(new Set(u?l.expandedLayerSectionIds||[]:[])),T=Y(new Set(u?l.expandedModuleIds||[]:[])),P=Y(r.customBasemapUrl||""),E=Se(()=>r.embedded||r.open),C=Se(()=>r.modules.find(k=>k.id==="scene")||null),p=Se(()=>{var k;return((k=C.value)==null?void 0:k.actions)||[]}),_=Se(()=>r.modules.filter(k=>k.id!=="scene")),w=Se(()=>_.value.filter(k=>k.statusTone==="success"||k.statusTone==="warning").length),v=Se(()=>r.overlayOptions.filter(k=>!!k.active).length),A=[{id:"scene",label:"场景",icon:xt},{id:"layers",label:"图层",icon:kt},{id:"modules",label:"模块",icon:yt}],n=Se(()=>{var k;return((k=r.basemapOptions.find(O=>O.value===r.activeBasemap))==null?void 0:k.label)||"未选择"}),f=Se(()=>{var k;return((k=r.terrainOptions.find(O=>O.value===r.activeTerrain))==null?void 0:k.label)||"未选择"});Te(()=>r.modules.map(k=>k.id),k=>{k.includes(c.value)||c.value==="scene"||c.value==="layers"||c.value==="modules"||(c.value="scene")},{immediate:!0}),Te([c,y,b,T],te,{deep:!0}),Te(()=>r.customBasemapUrl,k=>{k!==P.value&&(P.value=k||"")});function m(k){i("update:open",k)}function M(k){return b.value.has(k)}function R(k){const O=new Set(b.value);O.has(k)?O.delete(k):O.add(k),b.value=O}function F(k){return T.value.has(k)}function U(k){const O=new Set(T.value);O.has(k)?O.delete(k):O.add(k),T.value=O}function j(k){k!=null&&k.disabled||i("update:activeBasemap",k.value)}function ee(){i("custom-basemap-submit",{url:P.value})}function Q(){if(typeof window>"u")return{};try{const k=window.localStorage.getItem(r.storageKey);return k?JSON.parse(k):{}}catch{return{}}}function te(){if(!(typeof window>"u"))try{window.localStorage.setItem(r.storageKey,JSON.stringify({uiStateVersion:Bt,activeTab:c.value,compactMode:y.value,expandedLayerSectionIds:[...b.value],expandedModuleIds:[...T.value]}))}catch{}}function G(k){return{scene:xt,effects:wr,wind:Tr,fluid:Sr}[k]||yt}function le(k,O){var he;return((he={scene:{home:_r,everest:Ot,tileset:xr},wind:{load:yr,clear:Nt},fluid:{pick:zt,clear:Nt}}[k])==null?void 0:he[O])||br}function de(k,O){i("module-action",{moduleId:k,actionId:O})}function _e(k,O,L){const he=O.type==="range"?Number(L):L;i("control-change",{moduleId:k,controlId:O.id,value:he})}function Re(k){k.disabled||i("overlay-toggle",{overlayId:k.value,value:!k.active})}return(k,O)=>(N(),q("aside",{class:be(["cesium-tool-shell",{"is-open":E.value,"is-embedded":e.embedded}])},[!e.embedded&&!E.value?(N(),q("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:O[0]||(O[0]=L=>m(!0))},[Pe(K(yt),{size:18,"stroke-width":"2"}),O[8]||(O[8]=d("span",null,"高级控制台",-1)),w.value?(N(),q("span",Xr,ae(w.value),1)):ie("",!0)])):ie("",!0),ve(d("section",{class:be(["cesium-tool-panel",{compact:y.value}]),"aria-label":"Cesium 高级控制台"},[d("header",Vr,[d("div",Yr,[d("span",jr,[Pe(K(xt),{size:18,"stroke-width":"2"})]),d("span",Zr,[O[9]||(O[9]=d("span",{class:"panel-title"},"3D 高级控制台",-1)),d("span",Kr,ae(n.value)+" / "+ae(f.value),1)])]),d("div",Qr,[d("button",{class:"icon-btn",type:"button",title:y.value?"切换为舒展布局":"切换为紧凑布局",onClick:O[1]||(O[1]=L=>y.value=!y.value)},[Pe(K(mr),{size:16,"stroke-width":"2"})],8,Jr),e.embedded?ie("",!0):(N(),q("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:O[2]||(O[2]=L=>m(!1))},[Pe(K(pr),{size:17,"stroke-width":"2"})]))])]),d("nav",en,[(N(),q(Ee,null,Ue(A,L=>d("button",{key:L.id,class:be(["tab-btn",{active:c.value===L.id}]),type:"button","aria-pressed":c.value===L.id,onClick:he=>c.value=L.id},[(N(),qe(tt(L.icon),{size:15,"stroke-width":"2"})),d("span",null,ae(L.label),1)],10,tn)),64))]),d("div",rn,[ve(d("section",nn,[d("div",an,[d("div",on,[O[10]||(O[10]=d("span",{class:"overview-label"},"地图源",-1)),d("strong",null,ae(n.value),1)]),d("div",sn,[O[11]||(O[11]=d("span",{class:"overview-label"},"地形",-1)),d("strong",null,ae(f.value),1)]),d("div",ln,[O[12]||(O[12]=d("span",{class:"overview-label"},"模块",-1)),d("strong",null,ae(w.value)+"/"+ae(_.value.length),1)])]),p.value.length?(N(),q("div",cn,[(N(!0),q(Ee,null,Ue(p.value,L=>(N(),q("button",{key:L.id,class:be(["tool-action",[L.variant||"default",{active:L.active}]]),disabled:L.disabled,type:"button",onClick:he=>de(C.value.id,L.id)},[(N(),qe(tt(le(C.value.id,L.id)),{size:15,"stroke-width":"2"})),Ct(" "+ae(L.label),1)],10,un))),128))])):(N(),q("div",dn," 暂无场景快捷操作 "))],512),[[lt,c.value==="scene"]]),ve(d("section",hn,[e.basemapOptions.length?(N(),q("div",{key:0,class:be(["option-group",{expanded:M("basemap")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":M("basemap"),onClick:O[3]||(O[3]=L=>R("basemap"))},[d("span",mn,[Pe(K(kt),{size:16,"stroke-width":"2"}),O[13]||(O[13]=d("span",null,"底图源",-1))]),d("span",pn,[d("span",null,ae(n.value),1),Pe(K(dt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,fn),M("basemap")?(N(),q("div",gn,[d("div",vn,[(N(!0),q(Ee,null,Ue(e.basemapOptions,L=>(N(),q("button",{key:L.value,class:be(["option-card",{active:L.value===e.activeBasemap}]),type:"button",disabled:L.disabled,"aria-pressed":L.value===e.activeBasemap,title:L.description||L.label,onClick:he=>j(L)},[d("span",null,ae(L.label),1),L.value===e.activeBasemap?(N(),qe(K(It),{key:0,size:15,"stroke-width":"2.4"})):ie("",!0)],10,yn))),128))]),d("form",{class:"custom-basemap-editor",onSubmit:Dt(ee,["prevent"])},[d("div",xn,[Pe(K(gr),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),ve(d("input",{"onUpdate:modelValue":O[4]||(O[4]=L=>P.value=L),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[ze,P.value]]),d("button",{class:"custom-basemap-submit",type:"submit",disabled:!P.value.trim(),title:"加载自定义 XYZ"},[Pe(K(vr),{size:14,"stroke-width":"2"}),O[14]||(O[14]=d("span",null,"加载",-1))],8,_n)]),e.customBasemapUrl?(N(),q("div",bn,ae(e.customBasemapUrl),1)):ie("",!0)],32)])):ie("",!0)],2)):ie("",!0),e.terrainOptions.length?(N(),q("div",{key:1,class:be(["option-group",{expanded:M("terrain")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":M("terrain"),onClick:O[5]||(O[5]=L=>R("terrain"))},[d("span",Tn,[Pe(K(Ot),{size:16,"stroke-width":"2"}),O[15]||(O[15]=d("span",null,"地形",-1))]),d("span",wn,[d("span",null,ae(f.value),1),Pe(K(dt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Sn),M("terrain")?(N(),q("div",Mn,[d("div",Ln,[(N(!0),q(Ee,null,Ue(e.terrainOptions,L=>(N(),q("button",{key:L.value,class:be(["option-card",{active:L.value===e.activeTerrain}]),type:"button","aria-pressed":L.value===e.activeTerrain,title:L.description||L.label,onClick:he=>k.$emit("update:activeTerrain",L.value)},[d("span",null,ae(L.label),1),L.value===e.activeTerrain?(N(),qe(K(It),{key:0,size:15,"stroke-width":"2.4"})):ie("",!0)],10,Fn))),128))])])):ie("",!0)],2)):ie("",!0),e.overlayOptions.length?(N(),q("div",{key:2,class:be(["option-group",{expanded:M("overlay")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":M("overlay"),onClick:O[6]||(O[6]=L=>R("overlay"))},[d("span",An,[Pe(K(zt),{size:16,"stroke-width":"2"}),O[16]||(O[16]=d("span",null,"叠加层",-1))]),d("span",En,[d("span",null,ae(v.value)+"/"+ae(e.overlayOptions.length),1),Pe(K(dt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Pn),M("overlay")?(N(),q("div",Rn,[d("div",Cn,[(N(!0),q(Ee,null,Ue(e.overlayOptions,L=>(N(),q("button",{key:L.value,class:be(["overlay-row",{active:!!L.active}]),type:"button",disabled:L.disabled,"aria-pressed":!!L.active,title:L.description||L.label,onClick:he=>Re(L)},[d("span",kn,[d("span",In,ae(L.label),1),L.description?(N(),q("span",On,ae(L.description),1)):ie("",!0)]),d("span",{class:be(["toggle-control",{active:!!L.active}]),"aria-hidden":"true"},[...O[17]||(O[17]=[d("span",{class:"toggle-track"},[d("span",{class:"toggle-thumb"})],-1)])],2)],10,Dn))),128))])])):ie("",!0)],2)):ie("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(N(),q("div",zn," 暂无图层配置项 ")):ie("",!0)],512),[[lt,c.value==="layers"]]),ve(d("section",Nn,[d("div",Bn,[(N(!0),q(Ee,null,Ue(_.value,L=>{var he,Ae;return N(),q("article",{key:L.id,class:be(["module-item",{expanded:F(L.id)}])},[d("button",{class:"module-head",type:"button","aria-expanded":F(L.id),onClick:W=>U(L.id)},[d("span",Un,[(N(),qe(tt(G(L.id)),{size:16,"stroke-width":"2"}))]),d("span",Wn,[d("span",Gn,ae(L.title),1),L.description?(N(),q("span",$n,ae(L.description),1)):ie("",!0)]),d("span",qn,[L.status?(N(),q("span",{key:0,class:be(["module-status",L.statusTone||"neutral"])},ae(L.status),3)):ie("",!0),Pe(K(dt),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Hn),F(L.id)?(N(),q("div",Xn,[(he=L.actions)!=null&&he.length?(N(),q("div",Vn,[(N(!0),q(Ee,null,Ue(L.actions,W=>(N(),q("button",{key:W.id,class:be(["tool-action",[W.variant||"default",{active:W.active}]]),disabled:W.disabled,type:"button",onClick:ce=>de(L.id,W.id)},[(N(),qe(tt(le(L.id,W.id)),{size:14,"stroke-width":"2"})),Ct(" "+ae(W.label),1)],10,Yn))),128))])):ie("",!0),(Ae=L.controls)!=null&&Ae.length?(N(),q("div",jn,[(N(!0),q(Ee,null,Ue(L.controls,W=>(N(),q("label",{key:W.id,class:be(["control-row",`control-${W.type}`])},[d("span",Zn,[d("span",Kn,ae(W.label),1),W.tooltip?(N(),q("span",{key:0,class:"control-help","aria-label":W.tooltip,title:W.tooltip,onClick:O[7]||(O[7]=Dt(()=>{},["prevent","stop"]))}," ? ",8,Qn)):ie("",!0)]),W.type==="range"?(N(),q(Ee,{key:0},[d("input",{class:"control-range",type:"range",min:W.min,max:W.max,step:W.step,value:W.value,disabled:W.disabled,onInput:ce=>_e(L.id,W,ce.target.value)},null,40,Jn),d("input",{class:"control-number",type:"number",min:W.min,max:W.max,step:W.step,value:W.value,disabled:W.disabled,onInput:ce=>_e(L.id,W,ce.target.value)},null,40,ei)],64)):W.type==="color"?(N(),q(Ee,{key:1},[d("input",{class:"control-color",type:"color",value:W.value,disabled:W.disabled,onInput:ce=>_e(L.id,W,ce.target.value)},null,40,ti),d("span",{class:"control-color-swatch",style:ar({backgroundColor:W.value})},null,4)],64)):W.type==="select"?(N(),q("select",{key:2,class:"control-select",value:W.value,disabled:W.disabled,onChange:ce=>_e(L.id,W,ce.target.value)},[(N(!0),q(Ee,null,Ue(W.options||[],ce=>(N(),q("option",{key:ce.value,value:ce.value},ae(ce.label),9,ni))),128))],40,ri)):W.type==="toggle"?(N(),q("button",{key:3,class:be(["toggle-control",{active:!!W.value}]),type:"button","aria-pressed":!!W.value,disabled:W.disabled,onClick:ce=>_e(L.id,W,!W.value)},[...O[18]||(O[18]=[d("span",{class:"toggle-track"},[d("span",{class:"toggle-thumb"})],-1)])],10,ii)):ie("",!0),W.displayValue?(N(),q("span",ai,ae(W.displayValue),1)):ie("",!0)],2))),128))])):ie("",!0)])):ie("",!0)],2)}),128))]),_.value.length?ie("",!0):(N(),q("div",oi," 暂无可用功能模块 "))],512),[[lt,c.value==="modules"]])])],2),[[lt,e.embedded||E.value]])],2))}},li=pt(si,[["__scopeId","data-v-c2b974d5"]]);function ci(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(A){return(A==null?void 0:A._view)||(A==null?void 0:A.view)}function r(A){const n=t(A);if(!(n!=null&&n.passState))throw new Error("Cesium scene passState is unavailable.");return n.passState}function i(A){const n=t(A);return(n==null?void 0:n.frustumCommandsList)||(n==null?void 0:n._frustumCommandsList)||[]}const l=`
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
`;class P{constructor(n){this.commandType=n.commandType,this.geometry=n.geometry,this.attributeLocations=n.attributeLocations,this.primitiveType=n.primitiveType,this.uniformMap=n.uniformMap,this.vertexShaderSource=n.vertexShaderSource,this.fragmentShaderSource=n.fragmentShaderSource,this.rawRenderState=n.rawRenderState,this.framebuffer=n.framebuffer,this.isPostRender=n.isPostRender,this.outputTexture=n.outputTexture,this.autoClear=e.defaultValue(n.autoClear,!1),this.preExecute=n.preExecute,this.modelMatrix=e.defaultValue(n.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(n){switch(this.commandType){case"Draw":{const f=e.VertexArray.fromGeometry({context:n,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),m=e.ShaderProgram.fromCache({context:n,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),M=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:f,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:m,framebuffer:this.framebuffer,renderState:M,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(n,f){this.geometry=f;const m=e.VertexArray.fromGeometry({context:n,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=m}update(n){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(n.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&n.commandList.push(this.clearCommand),n.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class E{constructor(){}static loadText(n){const f=new XMLHttpRequest;return f.open("GET",n,!1),f.send(),f.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(n){if(e.defined(n.arrayBufferView)){const m={};m.arrayBufferView=n.arrayBufferView,n.source=m,n.flipY=!1}return new e.Texture(n)}static createDepthFramebuffer(n,f,m){return new e.Framebuffer({context:n,colorTextures:[this.createTexture({context:n,width:f,height:m,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(f*m*4)})],depthRenderbuffer:new e.Renderbuffer({context:n,width:f,height:m,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(n,f,m,M=!1){const R={context:n,colorTextures:[f],destroyAttachments:M};return m&&(R.depthTexture=m),new e.Framebuffer(R)}static createRawRenderState(n){const M={viewport:n.viewport,depthTest:n.depthTest,depthMask:n.depthMask,blending:n.blending};return e.Appearance.getDefaultRenderState(!0,!1,M)}}const v=class v{constructor(n,f={}){if(!n)throw new Error("Cesium Viewer is required");this.viewer=n,this._initConfiguration(f),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(n){this.config={resolution:new e.Cartesian2(n.width||v.DEFAULTS.width,n.height||v.DEFAULTS.height),dimensions:n.dimensions||v.DEFAULTS.dimensions.clone(),heightRange:{min:n.minHeight??v.DEFAULTS.heightRange[0],max:n.maxHeight??v.DEFAULTS.heightRange[1]},baseHeight:n.baseHeight??v.DEFAULTS.baseHeight,fluidParams:n.fluidParams||v.DEFAULTS.fluidParams.clone(),customParams:n.customParams||v.DEFAULTS.customParams.clone(),waterColor:n.waterColor||v.DEFAULTS.waterColor.clone(),lonLat:n.lonLat||[...v.DEFAULTS.lonLat],timeStep:n.timeStep||v.DEFAULTS.timeStep,heightMapSource:n.heightMapSource||v.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(n){const f=Number(n);!Number.isFinite(f)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,f)),this.resetSimulation())}resetSimulation(){var n,f;this._frameCount=0,(f=(n=this.viewer.scene).requestRender)==null||f.call(n)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const n=()=>E.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:n(),B:n(),C:n(),D:n()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(n){if(!(n!=null&&n.arrayBufferView)||!n.width||!n.height)throw new Error("Invalid height map source.");return E.createTexture({context:this.viewer.scene.context,width:n.width,height:n.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:n.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var G,le;const n=this.viewer.scene.context,f=E.createDepthFramebuffer(n,this.config.resolution.x,this.config.resolution.y),m=this.viewer.scene,M=m.frameState,R=r(this.viewer.scene),F=m.camera,U=M.camera,j=R.framebuffer,ee=e.BoundingRectangle.clone(R.viewport,new e.BoundingRectangle);let Q=null,te=[];try{R.viewport.x=0,R.viewport.y=0,R.viewport.width=this.config.resolution.x,R.viewport.height=this.config.resolution.y,R.framebuffer=f,m.camera=this.heightMapCamera,M.camera=this.heightMapCamera,M.context.uniformState.updateCamera(this.heightMapCamera),te=this._processHeightMapShaders(),this._renderDepthPrepass(R);const de=E.createTexture({context:n,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return Q=E.createFramebuffer(n,de),this._copyTexture(f.getColorTexture(0),Q),de}finally{this._restoreHeightMapShaders(te),R.framebuffer=j,e.BoundingRectangle.clone(ee,R.viewport),m.camera=F,M.camera=U,U&&M.context.uniformState.updateCamera(U),Q&&!((G=Q.isDestroyed)!=null&&G.call(Q))&&Q.destroy(),f&&!((le=f.isDestroyed)!=null&&le.call(f))&&f.destroy()}}_renderDepthPrepass(n){const f=this.viewer.scene.frameState;f.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(M=>M.execute(this.viewer.scene.context,n))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const n={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...n,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:u}),this._createComputePass("B",{uniforms:{...n,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:c}),this._createComputePass("C",{uniforms:{...n,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:y}),this._createComputePass("D",{uniforms:{...n,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:b})]}_createComputePass(n,{uniforms:f,shaderSource:m}){return new P({commandType:"Compute",uniformMap:f,fragmentShaderSource:new e.ShaderSource({sources:[l,m]}),geometry:E.getFullscreenQuad(),outputTexture:this.textures[n],preExecute:M=>M.commandToExecute.outputTexture=this.textures[n]})}_createMainRenderPass(){const n=p([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new P({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[l,T]}),geometry:this._createBoxGeometry(),modelMatrix:n,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var n,f,m,M;return(M=(m=(f=(n=t(this.viewer.scene))==null?void 0:n.globeDepth)==null?void 0:f.colorFramebufferManager)==null?void 0:m._colorTextures)==null?void 0:M[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(n=>this.viewer.scene.primitives.add(n)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(n){const f=this.viewer.camera.getPickRay(n);return this.viewer.scene.globe.pick(f,this.viewer.scene)}_createOrthographicCamera(){const n=new e.Camera(this.viewer.scene);n.frustum=new e.OrthographicOffCenterFrustum;const[f,m]=this.config.lonLat,M=e.Cartesian3.fromDegrees(f,m,this.config.baseHeight),R=e.Transforms.eastNorthUpToFixedFrame(M),F=n.frustum;F.near=.01,F.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),F.left=-this.config.dimensions.x/2,F.right=this.config.dimensions.x/2,F.bottom=-this.config.dimensions.y/2,F.top=this.config.dimensions.y/2;const U=e.Matrix4.getColumn(R,2,new e.Cartesian3);e.Cartesian3.negate(U,U);const j=e.Matrix4.getColumn(R,1,new e.Cartesian3),ee=e.Matrix4.getColumn(R,0,new e.Cartesian3),Q=e.Cartesian3.multiplyByScalar(U,-F.far,new e.Cartesian3);return n.position=e.Cartesian3.add(M,Q,new e.Cartesian3),n.direction=U,n.up=j,n.right=ee,n}destroy(){var n,f;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(m=>{m&&this.viewer.scene.primitives.remove(m)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(m=>{var M;m&&!((M=m.isDestroyed)!=null&&M.call(m))&&m.destroy()}),this.textures={},this._heightMap&&!((f=(n=this._heightMap).isDestroyed)!=null&&f.call(n))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(n,f){const m=this.viewer.scene.context,M=r(this.viewer.scene),R=m.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>n},owner:this}),F=M.framebuffer;M.framebuffer=f,R.execute(m,M),M.framebuffer=F}_getDepthRenderCommands(){var m,M;const n=[],f=i(this.viewer.scene);for(let R=0;R<f.length;++R){const F=f[R],U=(m=F==null?void 0:F.commands)==null?void 0:m[2],j=((M=F==null?void 0:F.indices)==null?void 0:M[2])??(U==null?void 0:U.length)??0;U&&j>0&&n.push(...U.slice(0,j))}return n}_processHeightMapShaders(){const n=[],f=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),m=e.Matrix4.inverse(f,new e.Matrix4),M=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(F=>{var te;if(!((te=F==null?void 0:F.shaderProgram)!=null&&te.fragmentShaderSource)||!F.uniformMap)return;const U=Object.prototype.hasOwnProperty.call(F.uniformMap,"u_inverseEnuMatrix"),j=F.uniformMap.u_inverseEnuMatrix,ee=F.shaderProgram,Q=new e.Matrix4;F.uniformMap.u_inverseEnuMatrix=()=>{const G=F.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(m,G,Q)},F.heightMap_ShaderProgram||(F.heightMap_ShaderProgram=this._getDerivedShaderProgram(M.context,F.shaderProgram,"Height_Map")),F.shaderProgram=F.heightMap_ShaderProgram,n.push({command:F,hadInverseUniform:U,originalInverseUniform:j,originalShaderProgram:ee})}),n}_restoreHeightMapShaders(n){n.forEach(f=>{const{command:m,hadInverseUniform:M,originalInverseUniform:R,originalShaderProgram:F}=f;m!=null&&m.uniformMap&&(m.shaderProgram=F,M?m.uniformMap.u_inverseEnuMatrix=R:delete m.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(n,f,m){let M=n.shaderCache.getDerivedShaderProgram(f,m);return e.defined(M)||(M=this._createHeightMapShaderProgram(n,f,m)),M}_createHeightMapShaderProgram(n,f,m){const M=this._modifyFragmentShader(f.fragmentShaderSource);return n.shaderCache.createDerivedShaderProgram(f,m,{vertexShaderSource:f.vertexShaderSource,fragmentShaderSource:M,attributeLocations:f._attributeLocations})}_modifyFragmentShader(n){const f=n.sources.map(m=>e.ShaderSource.replaceMain(m,"czm_heightMap_main"));return f.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:f,defines:n.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};Rt(v,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let C=v;const p=(A=[0,0,0],n=[0,0,0],f=[1,1,1])=>{const m=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(n[0]))),M=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(n[1]))),R=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(n[2])));A instanceof e.Cartesian3||(A=e.Cartesian3.fromDegrees(...A));const F=e.Transforms.eastNorthUpToFixedFrame(A);e.Matrix4.multiply(F,m,F),e.Matrix4.multiply(F,M,F),e.Matrix4.multiply(F,R,F);const U=e.Matrix4.fromScale(new e.Cartesian3(...f));return e.Matrix4.multiply(F,U,new e.Matrix4)},_=`
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
    `;function w(){return new e.PostProcessStage({fragmentShader:_})}return{FluidRenderer:C,createSkyEffect:w}}const ui={key:0,class:"fluid-root"},di={class:"fluid-panel"},hi={class:"panel-actions"},fi=["disabled"],mi={key:0,class:"selected-text"},pi={class:"param-list"},gi={class:"param-row"},vi={class:"param-row"},yi={class:"param-row"},xi={key:0,class:"param-row"},_i=["min","max","step"],bi=["min","max","step"],Si={class:"param-row color-row"},Ht=1024,ft=1e4,Ut=1200,Ti=100,wi=.01,Mi=.03,Li=60,_t=64,Fi=160,Pi={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:r}){const i=e,l=r,u=wt(),c=Y(10),y=Y(20),b=Y(3),T=Y("#0d4fa3"),P=Y(null),E=Y(null),C=Y(null),p=Y(!1),_=Y(!1),w=Y(null),v=Y(null);let A=null,n=null,f=null,m=null,M=null,R=null,F=0;const U=Se(()=>!Number.isFinite(w.value)||!Number.isFinite(v.value)?"":`经度 ${w.value.toFixed(6)} / 纬度 ${v.value.toFixed(6)}`),j=Se(()=>Number.isFinite(E.value)&&Number.isFinite(C.value)),ee=Se(()=>{if(!j.value)return 1;const o=Math.abs(C.value-E.value);return Math.max(o/1e3,.01)});Te([c,y,b,T],Z),Te(P,ue),Te(()=>i.params,o=>{te(o||{})},{deep:!0,immediate:!0}),Te([p,_,U,P,E,C],G,{immediate:!0}),fr(()=>{oe(!0)});function Q(){var S,B;const o=(S=i.getViewer)==null?void 0:S.call(i),s=((B=i.getCesium)==null?void 0:B.call(i))||window.Cesium;if(!o||!s)return u.warning("Cesium 场景尚未就绪。"),null;if(!A){const H=ci(s);A=H.FluidRenderer,n=H.createSkyEffect}return{viewer:o,Cesium:s}}function te(o){Number.isFinite(Number(o.threshold))&&(c.value=Number(o.threshold)),Number.isFinite(Number(o.blend))&&(y.value=Number(o.blend)),Number.isFinite(Number(o.lightStrength))&&(b.value=Number(o.lightStrength)),Ie(o.waterColor)&&(T.value=o.waterColor),Number.isFinite(Number(o.waterLevel))&&(P.value=Number(o.waterLevel))}function G(){l("state-change",{isPicking:p.value,hasFluid:_.value,selectedText:U.value,waterLevel:P.value,waterLevelMin:E.value,waterLevelMax:C.value})}function le(){const o=Q();if(!o)return;const{viewer:s,Cesium:S}=o;$(),g(s,S),p.value=!0,f=new S.ScreenSpaceEventHandler(s.scene.canvas),f.setInputAction(B=>{de(s,S,B.position)},S.ScreenSpaceEventType.LEFT_CLICK)}async function de(o,s,S){var nt,a;const B=ye(o,S);if(!B){u.warning("未选中可用地形位置。");return}const H=++F;$();const se=s.Cartographic.fromCartesian(B),fe=s.Math.toDegrees(se.longitude),me=s.Math.toDegrees(se.latitude),Oe=Number(se.height),Ce=Number.isFinite(Oe)?Oe:0,Qe=new s.Cartesian3(ft,ft,0);tr("正在请求模拟范围高度数据...");try{X();const h=Number(c.value)||0,D=Number(y.value)||0,I=Number(b.value)||0,V=await _e(o,s,{lon:fe,lat:me,centerHeight:Ce,dimensions:Qe}),J=Xe(V,Ce),pe=J.baseHeight,we=J.depth,Me=je(J,Ce),Be=new s.Cartesian3(ft,ft,we);if(H!==F)return;E.value=J.minHeight,C.value=J.maxHeight,P.value=Me,V||u.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),m=new A(o,{lonLat:[fe,me],width:Ht,height:Ht,dimensions:Be,baseHeight:pe,minHeight:J.minHeight,maxHeight:J.maxHeight,heightMapSource:V,waterColor:ke(s,T.value),customParams:new s.Cartesian4(h,D,I,10),fluidParams:new s.Cartesian4(.9+I/10*.099,Math.min(1,D/50),h/5e4,Ve(Me,J))}),w.value=fe,v.value=me,_.value=!0,(a=(nt=o.scene).requestRender)==null||a.call(nt),u.success("水体流体已创建。")}catch(h){u.error("水体流体创建失败",h),u.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{rr()}}async function _e(o,s,S){const B=o==null?void 0:o.terrainProvider,H=k(S.dimensions);if(!B)return null;if(s.EllipsoidTerrainProvider&&B instanceof s.EllipsoidTerrainProvider)return ce(H);if(typeof s.sampleTerrain!="function"&&typeof s.sampleTerrainMostDetailed!="function")return null;try{return await Re(o,s,S,H)}catch(se){if(H<=_t)throw se;return Re(o,s,S,_t)}}async function Re(o,s,S,B){const H=L(s,S,B),se=await he(s,o.terrainProvider,H);return W(se||H,{size:B})}function k(o){const s=Math.max(Number(o==null?void 0:o.x)||0,Number(o==null?void 0:o.y)||0),S=Math.ceil(s/Li)+1;return O(S,_t,Fi)}function O(o,s,S){return Math.max(s,Math.min(S,Math.round(o)))}function L(o,{lon:s,lat:S,centerHeight:B,dimensions:H},se){const fe=o.Cartesian3.fromDegrees(s,S,B),me=o.Transforms.eastNorthUpToFixedFrame(fe),Oe=[],Ce=Math.max(1,se-1);for(let Qe=0;Qe<se;Qe++){const a=(.5-Qe/Ce)*H.y;for(let h=0;h<se;h++){const I=(h/Ce-.5)*H.x,V=new o.Cartesian3(I,a,0),J=o.Matrix4.multiplyByPoint(me,V,new o.Cartesian3);Oe.push(o.Cartographic.fromCartesian(J))}}return Oe}async function he(o,s,S){const B=Ae(s);return Number.isInteger(B)&&typeof o.sampleTerrain=="function"?o.sampleTerrain(s,B,S):typeof o.sampleTerrainMostDetailed=="function"?o.sampleTerrainMostDetailed(s,S):o.sampleTerrain(s,10,S)}function Ae(o){const s=Number(o==null?void 0:o._bottomLevel);return Number.isFinite(s)?Math.max(0,s-1):null}function W(o,{size:s}){var H;const S=Ne(o);if(!S)return null;const B=new Float32Array(s*s*4);for(let se=0;se<s*s;se++){const fe=Number((H=o[se])==null?void 0:H.height),me=se*4;B[me]=Number.isFinite(fe)?Le(fe,S.minHeight,S.maxHeight):S.minHeight,B[me+1]=0,B[me+2]=0,B[me+3]=1}return{width:s,height:s,arrayBufferView:B,minHeight:S.minHeight,maxHeight:S.maxHeight}}function ce(o){return{width:o,height:o,arrayBufferView:new Float32Array(o*o*4),minHeight:0,maxHeight:0}}function Ne(o){let s=Number.POSITIVE_INFINITY,S=Number.NEGATIVE_INFINITY;for(const B of o||[]){const H=Number(B==null?void 0:B.height);Number.isFinite(H)&&(s=Math.min(s,H),S=Math.max(S,H))}return!Number.isFinite(s)||!Number.isFinite(S)?null:{minHeight:s,maxHeight:S}}function Xe(o,s){const S=Number(o==null?void 0:o.minHeight),B=Number(o==null?void 0:o.maxHeight);if(Number.isFinite(S)&&Number.isFinite(B)){const fe=Number(s),me=Number.isFinite(fe)?Math.min(S,B,fe):Math.min(S,B),Oe=Number.isFinite(fe)?Math.max(S,B,fe):Math.max(S,B),Ce=Math.max(Oe-me,wi);return{baseHeight:me,depth:Ce,minHeight:me,maxHeight:me+Ce}}const H=Number(s),se=Number.isFinite(H)?H-Ti:0;return{baseHeight:se,depth:Ut,minHeight:se,maxHeight:se+Ut}}function je(o,s){const S=o.minHeight+o.depth*Mi,B=Number(s),H=Number.isFinite(B)?B:S;return Le(H,o.minHeight,o.maxHeight)}function Ve(o,s){const S=s.maxHeight-s.minHeight;return!Number.isFinite(S)||S<=0?0:Le((o-s.minHeight)/S,0,1)}function Ze(){return!Number.isFinite(E.value)||!Number.isFinite(C.value)?null:{minHeight:Math.min(E.value,C.value),maxHeight:Math.max(E.value,C.value)}}function ke(o,s){const S=Fe(s)||Fe("#0d4fa3");return new o.Cartesian3(S.red,S.green,S.blue)}function Ke(){var S;const o=Fe(T.value),s=(S=m==null?void 0:m.config)==null?void 0:S.waterColor;!o||!s||(s.x=o.red,s.y=o.green,s.z=o.blue)}function Ie(o){return typeof o=="string"&&/^#[0-9a-f]{6}$/i.test(o)}function Fe(o){return Ie(o)?{red:Number.parseInt(o.slice(1,3),16)/255,green:Number.parseInt(o.slice(3,5),16)/255,blue:Number.parseInt(o.slice(5,7),16)/255}:null}function Le(o,s,S){return Math.max(s,Math.min(S,o))}function ye(o,s){if(!s)return null;if(o.scene.pickPositionSupported&&typeof o.scene.pickPosition=="function"){const B=o.scene.pickPosition(s);if(B)return B}const S=o.camera.getPickRay(s);return S?o.scene.globe.pick(S,o.scene):null}function Z(){var B,H,se;if(!(m!=null&&m.config))return;const o=Number(c.value)||0,s=Number(y.value)||0,S=Number(b.value)||0;m.config.customParams&&(m.config.customParams.x=o,m.config.customParams.y=s,m.config.customParams.z=S),m.config.fluidParams&&(m.config.fluidParams.x=.9+S/10*.099,m.config.fluidParams.y=Math.min(1,s/50),m.config.fluidParams.z=o/5e4),Ke(),(se=(H=(B=m.viewer)==null?void 0:B.scene)==null?void 0:H.requestRender)==null||se.call(H)}function ue(){var H,se,fe,me;if(!((H=m==null?void 0:m.config)!=null&&H.fluidParams))return;const o=Ze(),s=Number(P.value);if(!o||!Number.isFinite(s))return;const S=Le(s,o.minHeight,o.maxHeight);if(S!==s){P.value=S;return}const B=Ve(S,o);typeof m.setInitialWaterLevel=="function"?m.setInitialWaterLevel(B):(m.config.fluidParams.w=B,(me=(fe=(se=m.viewer)==null?void 0:se.scene)==null?void 0:fe.requestRender)==null||me.call(fe))}function g(o,s){var S,B;if(!R){const H=o.scene;R={shadows:o.shadows,resolutionScale:o.resolutionScale,msaaSamples:H.msaaSamples,depthTestAgainstTerrain:H.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:H.logarithmicDepthBuffer,highDynamicRange:H.highDynamicRange,fogEnabled:(S=H.fog)==null?void 0:S.enabled,showGroundAtmosphere:H.globe.showGroundAtmosphere,skyAtmosphereShow:(B=H.skyAtmosphere)==null?void 0:B.show,enableLighting:H.globe.enableLighting}}o.shadows=!0,o.resolutionScale=1,o.scene.msaaSamples=4,o.scene.globe.depthTestAgainstTerrain=!0,o.scene.logarithmicDepthBuffer=!0,o.scene.highDynamicRange=!0,o.scene.fog&&(o.scene.fog.enabled=!0),o.scene.globe.showGroundAtmosphere=!0,o.scene.skyAtmosphere&&(o.scene.skyAtmosphere.show=!0),o.scene.globe.enableLighting=!0,!M&&n&&(M=n(s),o.scene.postProcessStages.add(M))}function x(o){if(!o||!R)return;const s=o.scene;o.shadows=R.shadows,o.resolutionScale=R.resolutionScale,R.msaaSamples!==void 0&&(s.msaaSamples=R.msaaSamples),s.globe.depthTestAgainstTerrain=R.depthTestAgainstTerrain,s.logarithmicDepthBuffer=R.logarithmicDepthBuffer,s.highDynamicRange=R.highDynamicRange,s.fog&&R.fogEnabled!==void 0&&(s.fog.enabled=R.fogEnabled),s.globe.showGroundAtmosphere=R.showGroundAtmosphere,s.skyAtmosphere&&R.skyAtmosphereShow!==void 0&&(s.skyAtmosphere.show=R.skyAtmosphereShow),s.globe.enableLighting=R.enableLighting,R=null}function z(){oe(!1),u.success("水体流体已清除。")}function $(){f&&(f.destroy(),f=null),p.value=!1}function X(){if(m){try{m.destroy()}catch{}m=null,_.value=!1}}function oe(o){var S,B,H;const s=(S=i.getViewer)==null?void 0:S.call(i);if(F+=1,$(),X(),w.value=null,v.value=null,P.value=null,E.value=null,C.value=null,s&&M){try{s.scene.postProcessStages.remove(M)}catch{}M=null}o&&s&&x(s),(H=(B=s==null?void 0:s.scene)==null?void 0:B.requestRender)==null||H.call(B)}function ge(){oe(!0),l("close")}return t({startPickHeightMap:le,clearFluid:z}),(o,s)=>e.headless?ie("",!0):(N(),q("div",ui,[d("div",di,[d("div",{class:"panel-head"},[s[9]||(s[9]=d("span",{class:"panel-title"},"水体流体",-1)),d("button",{class:"panel-close",title:"关闭",onClick:ge}," × ")]),d("div",hi,[d("button",{class:be(["action-btn primary",{active:p.value}]),onClick:le},ae(p.value?"等待选点":"捕捉高度图"),3),d("button",{class:"action-btn",disabled:!_.value&&!p.value,onClick:z}," 清除 ",8,fi)]),U.value?(N(),q("div",mi,ae(U.value),1)):ie("",!0),d("div",pi,[d("label",gi,[s[10]||(s[10]=d("span",null,"阈值",-1)),ve(d("input",{"onUpdate:modelValue":s[0]||(s[0]=S=>c.value=S),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[ze,c.value,void 0,{number:!0}]]),ve(d("input",{"onUpdate:modelValue":s[1]||(s[1]=S=>c.value=S),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[ze,c.value,void 0,{number:!0}]])]),d("label",vi,[s[11]||(s[11]=d("span",null,"混合",-1)),ve(d("input",{"onUpdate:modelValue":s[2]||(s[2]=S=>y.value=S),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[ze,y.value,void 0,{number:!0}]]),ve(d("input",{"onUpdate:modelValue":s[3]||(s[3]=S=>y.value=S),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[ze,y.value,void 0,{number:!0}]])]),d("label",yi,[s[12]||(s[12]=d("span",null,"光强",-1)),ve(d("input",{"onUpdate:modelValue":s[4]||(s[4]=S=>b.value=S),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[ze,b.value,void 0,{number:!0}]]),ve(d("input",{"onUpdate:modelValue":s[5]||(s[5]=S=>b.value=S),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[ze,b.value,void 0,{number:!0}]])]),j.value?(N(),q("label",xi,[s[13]||(s[13]=d("span",null,"水位",-1)),ve(d("input",{"onUpdate:modelValue":s[6]||(s[6]=S=>P.value=S),type:"range",min:E.value,max:C.value,step:ee.value},null,8,_i),[[ze,P.value,void 0,{number:!0}]]),ve(d("input",{"onUpdate:modelValue":s[7]||(s[7]=S=>P.value=S),class:"number-input",type:"number",min:E.value,max:C.value,step:ee.value},null,8,bi),[[ze,P.value,void 0,{number:!0}]])])):ie("",!0),d("label",Si,[s[14]||(s[14]=d("span",null,"水色",-1)),ve(d("input",{"onUpdate:modelValue":s[8]||(s[8]=S=>T.value=S),class:"color-input",type:"color"},null,512),[[ze,T.value]]),d("span",{class:"color-swatch",style:ar({backgroundColor:T.value})},null,4)])])])]))}},Ai=pt(Pi,[["__scopeId","data-v-9ecdafb8"]]),Mt="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Ei=`${Mt}Cesium.js`,Ri=`${Mt}Widgets/widgets.css`;async function Ci({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Mt),await ki(Ri,"cesium-widgets-style"),await Di(Ei,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到");return mt(t,e),t}function mt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function Di(e,t){return new Promise((r,i)=>{const l=document.getElementById(t);if(l){if(l.getAttribute("data-loaded")==="true"){r();return}l.addEventListener("load",()=>r(),{once:!0}),l.addEventListener("error",()=>i(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const u=document.createElement("script");u.id=t,u.src=e,u.async=!0,u.onload=()=>{u.setAttribute("data-loaded","true"),r()},u.onerror=()=>i(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(u)})}function ki(e,t){return new Promise((r,i)=>{if(document.getElementById(t)){r();return}const u=document.createElement("link");u.id=t,u.rel="stylesheet",u.href=e,u.onload=()=>r(),u.onerror=()=>i(new Error(`样式加载失败: ${e}`)),document.head.appendChild(u)})}const Ii="Asia/Shanghai",Oi="UTC+8",zi=new Intl.DateTimeFormat("zh-CN",{timeZone:Ii,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Ni(e,t){var r,i,l,u,c,y,b;if(!(!e||!(t!=null&&t.JulianDate))){if((r=e.animation)!=null&&r.viewModel&&(e.animation.viewModel.dateFormatter=(...T)=>Hi(e,t,...T),e.animation.viewModel.timeFormatter=(...T)=>Ui(e,t,...T)),e.timeline){const T=(...P)=>Wi(e,t,...P);e.timeline.makeLabel=T,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=T),(l=(i=e.timeline).updateFromClock)==null||l.call(i),(c=(u=e.timeline).zoomTo)==null||c.call(u,e.clock.startTime,e.clock.stopTime)}(b=(y=e.scene).requestRender)==null||b.call(y)}}function Lt(e,t,...r){var y;const i=r.find(Bi)||((y=e==null?void 0:e.clock)==null?void 0:y.currentTime);if(!i)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const l=t.JulianDate.toDate(i),u=zi.formatToParts(l),c=Object.fromEntries(u.filter(({type:b})=>b!=="literal").map(({type:b,value:T})=>[b,T]));return{year:c.year||"0000",month:c.month||"01",day:c.day||"01",hour:c.hour||"00",minute:c.minute||"00",second:c.second||"00"}}function Bi(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function Hi(e,t,...r){const{year:i,month:l,day:u}=Lt(e,t,...r);return`${i}-${l}-${u}`}function Ui(e,t,...r){const{hour:i,minute:l,second:u}=Lt(e,t,...r);return`${i}:${l}:${u} ${Oi}`}function Wi(e,t,...r){const{month:i,day:l,hour:u,minute:c}=Lt(e,t,...r);return`${i}-${l} ${u}:${c}`}function Gi({getViewer:e}){let t=null,r=null;function i(){var y;const c=e==null?void 0:e();if(c&&((y=c._cesiumWidget)!=null&&y._creditContainer&&(c._cesiumWidget._creditContainer.style.display="none"),l(),t=setInterval(()=>{const b=document.querySelector(".cesium-credit-container");b&&b.innerHTML.length>0&&(b.innerHTML="",b.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const b=document.createElement("style");b.id="cesium-credit-override",b.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(b),r=b}}function l(){var b;const c=e==null?void 0:e();if(!c)return;(b=c._cesiumWidget)!=null&&b._creditContainer&&(c._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",c._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(T=>{T.style.cssText="display: none !important; visibility: hidden !important;",T.innerHTML=""}),c.scene&&c.scene.frameState&&c.scene.frameState.creditDisplay&&(c.scene.frameState.creditDisplay.hasCredits=()=>!1,c.scene.frameState.creditDisplay.destroy=()=>{})}function u(){t&&(clearInterval(t),t=null),r&&(r.remove(),r=null)}return{installCreditHider:i,cleanupCreditHider:u}}const $i=500,Tt=48,qi=160,Wt=48;function Xi({getViewer:e}){const t=Y(null),r=Y([]),i=Se(()=>Number.isFinite(t.value)?String(t.value):"--"),l=Se(()=>Vi(r.value));let u=null,c=0,y=bt();function b(){var E;const P=(E=e==null?void 0:e())==null?void 0:E.scene;P!=null&&P.preRender&&(T(),t.value=null,r.value=[],c=0,y=bt(),u=P.preRender.addEventListener(()=>{c+=1;const C=bt(),p=C-y;if(p<$i)return;const _=Math.round(c*1e3/p);t.value=_,r.value=[...r.value.slice(1-Tt),_],c=0,y=C}))}function T(){typeof u=="function"&&(u(),u=null)}return{frameRateDisplay:i,frameRateLinePoints:l,setupFrameRateMonitor:b,cleanupFrameRateMonitor:T}}function bt(){return typeof performance<"u"?performance.now():Date.now()}function Vi(e){if(!e.length)return"";const t=Math.max(60,...e),r=qi/(Tt-1),i=Tt-e.length;return e.map((l,u)=>{const c=(i+u)*r,y=Math.max(0,Math.min(l/t,1)),b=Wt-y*Wt;return`${c.toFixed(1)},${b.toFixed(1)}`}).join(" ")}const St="经度: --, 纬度: --, 海拔: --米";function Yi({getViewer:e,getCesium:t}){let r=null,i=null,l=null;const u=Y("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function c(){const C=e==null?void 0:e(),p=t==null?void 0:t();!C||!p||(E(),i=C.scene.canvas,r=new p.ScreenSpaceEventHandler(i),l=()=>{u.value=St},i.addEventListener("mouseleave",l),r.setInputAction(_=>{y(_.endPosition,C,p)},p.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(_=>{const w=_.endPosition,v=_.startPosition;if(!p.defined(C.terrainProvider))return;const A=C.scene.globe.ellipsoid;if(!C.camera.pickEllipsoid(v,A)){const f=C.camera;f.rotate(p.Cartesian3.UNIT_X,-.002*(w.y-v.y)),f.rotate(p.Cartesian3.UNIT_Y,-.002*(w.x-v.x))}},p.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_UP))}function y(C,p,_){const w=b(C,p,_);if(!w){u.value=St;return}const v=_.Cartographic.fromCartesian(w);if(!v||!Number.isFinite(v.longitude)||!Number.isFinite(v.latitude)){u.value=St;return}const A=_.Math.toDegrees(v.longitude).toFixed(6),n=_.Math.toDegrees(v.latitude).toFixed(6),f=(Number.isFinite(v.height)?v.height:0).toFixed(2);u.value=`经度: ${A}, 纬度: ${n}, 海拔: ${f}米`}function b(C,p,_){if(!C)return null;const w=p.scene,v=T(C,w,_);if(v)return v;const A=p.camera.getPickRay(C);if(A){const f=w.globe.pick(A,w);if(P(f))return f}const n=p.camera.pickEllipsoid(C,w.globe.ellipsoid);return P(n)?n:null}function T(C,p,_){if(!p.pickPositionSupported||typeof p.pickPosition!="function")return null;const w=typeof p.pick=="function"?p.pick(C):null;if(!_.defined(w))return null;const v=p.pickPosition(C);return P(v)?v:null}function P(C){return!!C&&Number.isFinite(C.x)&&Number.isFinite(C.y)&&Number.isFinite(C.z)}function E(){l&&i&&(i.removeEventListener("mouseleave",l),l=null),i=null,r&&(r.destroy(),r=null)}return{coordinateDisplay:u,setupInteractions:c,cleanupInteractions:E}}function ji(e,t=""){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r??t}catch{return t}}function Zi(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function et(e,t){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r==null?t:r==="true"}catch{return t}}function ct(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Gt(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:r,Ellipsoid:i,Resource:l,HeightmapTerrainData:u,Rectangle:c,TileAvailability:y,CustomHeightmapTerrainProvider:b}=e;function T(p,_,w,v,A,n){const f=p.tileXYToRectangle(w,v,A);return t(c.intersection(f,_,n))}function P(p){const _=[[[0,0,1,0]]],w=new y(p.tilingScheme,19);for(let v=0;v<_.length;v++){const A=_[v];for(let n=0;n<A.length;n++){const f=A[n];w.addAvailableTileRange(v,f[0],f[1],f[2],f[3])}}return w}function E(p,_,w,v,A){const n=new u({buffer:p._transformBuffer(_),width:p._width,height:p._height,childTileMask:p._getChildTileMask(v,A,w),structure:p._terrainDataStructure});return n._skirtHeight=6e3,p.availability.addAvailableTileRange(w,v,A,v,A),n}class C extends b{constructor(_={}){if(super({..._,ellipsoid:i.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(_.url))throw new r("options.url is required.");this._dataType=_.dataType??"int16",this._url=_.url,this._subdomains=_.subdomains,this._token=_.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=P(this)}get availability(){return this._availability}requestTileGeometry(_,w,v,A){if(v>=this._bottomLevel)return Promise.reject(new Error(`Level ${v} is outside supported range.`));if(v<this._topLevel)return Promise.resolve(new u({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(_,w,v),structure:this._terrainDataStructure}));let n=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const m=this._subdomains[(_+w)%this._subdomains.length];n=n.replace("{s}",m)}n=n.replace("{token}",this._token).replace("{x}",_).replace("{y}",w).replace("{z}",v+1);const f=l.fetchArrayBuffer({url:n,request:A});if(f)return f.then(m=>m.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Mr.inflate(m)).then(m=>E(this,m,v,_,w))}getTileDataAvailable(_,w,v){return v<this._bottomLevel}_transformBuffer(_){let w=2;this._dataType==="float"&&(w=4);const v=_;if(v.length!==22500*w)return null;const A=new ArrayBuffer(w),n=new DataView(A),f=this._width,m=this._height,M=new Uint8Array(f*m*4);for(let R=0;R<m;R++)for(let F=0;F<f;F++){const U=Math.floor(149*R/(m-1)),j=Math.floor(149*F/(f-1)),ee=w*(150*U+j);let Q;w===4?(n.setInt8(0,v[ee]),n.setInt8(1,v[ee+1]),n.setInt8(2,v[ee+2]),n.setInt8(3,v[ee+3]),Q=n.getFloat32(0,!0)):Q=v[ee]+256*v[ee+1],(Q>1e4||Q<-2e3)&&(Q=0);const te=(Q+1e3)/.001,G=4*(R*f+F);M[G]=te/65536,M[G+1]=(te-256*M[G]*256)/256,M[G+2]=te-256*M[G]*256-256*M[G+1],M[G+3]=255}return M}_getVHeightBuffer(){let _=this._vHeightBuffer;if(!t(_)){_=new Uint8ClampedArray(this._width*this._height*4);for(let w=0;w<this._width*this._height*4;)_[w++]=15,_[w++]=66,_[w++]=64,_[w++]=255;this._vHeightBuffer=_}return _}_getChildTileMask(_,w,v){const A=new c,n=this._tilingScheme,f=this._rectangles,m=n.tileXYToRectangle(_,w,v);let M=0;for(let R=0;R<f.length&&M!==15;R++){const F=f[R];if(F.maxLevel<=v)continue;const U=F.rectangle,j=c.intersection(U,m,A);t(j)&&(T(n,U,2*_,2*w,v+1,A)&&(M|=4),T(n,U,2*_+1,2*w,v+1,A)&&(M|=8),T(n,U,2*_,2*w+1,v+1,A)&&(M|=1),T(n,U,2*_+1,2*w+1,v+1,A)&&(M|=2))}return M}}return C}const ot=["0","1","2","3","4","5","6","7"],st="https://t{s}.tianditu.gov.cn/",Ki="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",Qi=96188,$e="custom-xyz",$t="cesium_custom_xyz_basemap_url",Ji="cesium_tdt_label_layer_visible",qt="cesium_tdt_boundary_layer_visible",Xt="cesium_tdt_text_label_layer_visible",Vt="cesium_osm_buildings_visible",Yt="cesium_google_photorealistic_3d_tiles_visible",jt=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:$e,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],Zt=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function ea({getViewer:e,getCesium:t,message:r,backendBaseUrl:i,tiandituToken:l,cesiumIonToken:u}){let c=null,y=null,b=null,T=null,P=0,E=null,C=null,p=0,_=0,w=[];const v=()=>Kt(l),A=()=>Kt(u),n=[],f=Y([]),m=new Map,M=new Map,R=new Map,F=new Map,U=Y("tianditu"),j=Y("tianditu"),ee=Y(ji($t,"")),Q=et(Ji,!0),te=Y(et(qt,Q)),G=Y(et(Xt,Q)),le=Y(et(Vt,!1)),de=Y(et(Yt,!1)),_e=Se(()=>[...jt.map(a=>a.value!==$e?a:{...a,description:ee.value?ee.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!ee.value}),...f.value]),Re=Se(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:te.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:G.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:le.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:de.value}]);Te(U,a=>{!(e!=null&&e())||!(t!=null&&t())||s(a)}),Te(ee,a=>{Zi($t,a)}),Te(j,async a=>{!(e!=null&&e())||!(t!=null&&t())||await B(a)}),Te(te,a=>{ct(qt,a),Le()}),Te(G,a=>{ct(Xt,a),Le()}),Te(le,a=>{ct(Vt,a),x()}),Te(de,a=>{ct(Yt,a),z()});function k(){const a=t==null?void 0:t();if(!a)return[];m.clear(),M.clear();const h=jt.map(I=>{const V=new a.ProviderViewModel({name:I.label,tooltip:ia(I),category:"项目底图",iconUrl:er(I.value==="google"?"#5ea1ff":I.value===$e?"#f59e0b":"#37d67a",I.value==="google"?"G":I.value===$e?"XY":"TD"),creationFunction:()=>W(I.value)});return m.set(I.value,V),M.set(V,I.value),V}),D=Ae();return f.value=D.map((I,V)=>{const J=String((I==null?void 0:I.name)||`官方底图 ${V+1}`).trim(),pe=sa(J,V);return m.set(pe,I),M.set(I,pe),{value:pe,label:`官方 · ${J}`,description:String((I==null?void 0:I.tooltip)||J),source:"official"}}),[...h,...D]}function O(){const a=t==null?void 0:t();return a?(R.clear(),F.clear(),Zt.map(h=>{const D=new a.ProviderViewModel({name:h.label,tooltip:h.description||h.label,category:"项目地形",iconUrl:er(ta(h.value),ra(h.value)),creationFunction:()=>se(h.value)});return R.set(h.value,D),F.set(D,h.value),D})):[]}function L(a=[]){return m.get(U.value)||a[0]}function he(a=[]){return R.get(j.value)||a[0]}function Ae(){const a=t==null?void 0:t();if(typeof(a==null?void 0:a.createDefaultImageryProviderViewModels)!="function")return[];try{return a.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function W(a){return a==="google"?Ne():a===$e?Xe():ce()}function ce(){const a=t==null?void 0:t();return[new a.UrlTemplateImageryProvider({url:`${st}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${v()}`,subdomains:ot,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})]}function Ne(){const a=t==null?void 0:t();return[new a.UrlTemplateImageryProvider({url:`${i}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20})]}function Xe(){const a=t==null?void 0:t(),h=Jt(ee.value);return h.valid?[new a.UrlTemplateImageryProvider({url:h.url,subdomains:h.subdomains,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(r.warning(h.message,{closable:!0}),ce())}function je(){const a=t==null?void 0:t();return new a.UrlTemplateImageryProvider({url:`${st}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${v()}`,subdomains:ot,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:10})}function Ve(){const a=t==null?void 0:t();return new a.UrlTemplateImageryProvider({url:`${st}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${v()}`,subdomains:ot,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})}function Ze(){var we,Me,Be,it,at;ke();const a=t==null?void 0:t(),h=(Me=(we=e==null?void 0:e())==null?void 0:we.baseLayerPicker)==null?void 0:Me.viewModel;if(!h||!((Be=a==null?void 0:a.knockout)!=null&&Be.getObservable))return;const D=a.knockout.getObservable(h,"selectedImagery"),I=a.knockout.getObservable(h,"selectedTerrain"),V=[],J=(it=D==null?void 0:D.subscribe)==null?void 0:it.call(D,Je=>{const De=M.get(Je);De&&(U.value!==De&&(U.value=De),Fe())}),pe=(at=I==null?void 0:I.subscribe)==null?void 0:at.call(I,Je=>{const De=F.get(Je);De&&(j.value!==De&&(j.value=De),H(De))});J&&V.push(J),pe&&V.push(pe),w=V}function ke(){w.forEach(a=>{var h;return(h=a==null?void 0:a.dispose)==null?void 0:h.call(a)}),w=[]}function Ke(){return Fe(),!0}function Ie(){const a=e==null?void 0:e();if(a!=null&&a.imageryLayers)for(;n.length;){const h=n.pop();try{a.imageryLayers.remove(h,!0)}catch{}}}function Fe(){var a,h,D;Le(),x(),z(),(D=(h=(a=e==null?void 0:e())==null?void 0:a.scene)==null?void 0:h.requestRender)==null||D.call(h)}function Le(){var h,D;const a=e==null?void 0:e();!a||!(t!=null&&t())||(te.value?ye():ue(),G.value?Z():g(),(D=(h=a.scene).requestRender)==null||D.call(h))}function ye(){var h,D,I,V;const a=e==null?void 0:e();if(!(a!=null&&a.imageryLayers)||c)return c&&((D=(h=a==null?void 0:a.imageryLayers)==null?void 0:h.raiseToTop)==null||D.call(h,c)),c;try{return c=a.imageryLayers.addImageryProvider(je()),(V=(I=a.imageryLayers).raiseToTop)==null||V.call(I,c),c}catch(J){return r.error("天地图国界线图层加载失败",J),null}}function Z(){var h,D,I,V;const a=e==null?void 0:e();if(!(a!=null&&a.imageryLayers)||y)return y&&((D=(h=a==null?void 0:a.imageryLayers)==null?void 0:h.raiseToTop)==null||D.call(h,y)),y;try{return y=a.imageryLayers.addImageryProvider(Ve()),(V=(I=a.imageryLayers).raiseToTop)==null||V.call(I,y),y}catch(J){return r.error("天地图文字标注图层加载失败",J),null}}function ue(){const a=e==null?void 0:e();if(!(!c||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(c,!0)}catch{}c=null}}function g(){const a=e==null?void 0:e();if(!(!y||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(y,!0)}catch{}y=null}}async function x(){var h,D,I;const a=e==null?void 0:e();!((h=a==null?void 0:a.scene)!=null&&h.primitives)||!(t!=null&&t())||(le.value?await oe():ge(),(I=(D=a.scene).requestRender)==null||I.call(D))}async function z(){var h,D,I;const a=e==null?void 0:e();!((h=a==null?void 0:a.scene)!=null&&h.primitives)||!(t!=null&&t())||(de.value?await $():X(),(I=(D=a.scene).requestRender)==null||I.call(D))}async function $(){var I,V,J;const a=e==null?void 0:e(),h=t==null?void 0:t();if(!((I=a==null?void 0:a.scene)!=null&&I.primitives))return null;if(E)return a.scene.globe.show=!1,E;if(C)return C;if(typeof(h==null?void 0:h.createGooglePhotorealistic3DTileset)!="function")return r.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),de.value=!1,null;const D=++p;mt(h,A()),C=h.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const pe=await C;return D!==p||!de.value?(Qt(pe),null):(E=a.scene.primitives.add(pe),a.scene.globe.show=!1,a.scene.skyAtmosphere.show=!0,(J=(V=a.scene).requestRender)==null||J.call(V),E)}catch(pe){return D!==p||(de.value=!1,r.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),r.error("Google Photorealistic 3D Tiles 初始化失败",pe)),null}finally{D===p&&(C=null)}}function X(){var h,D,I;const a=e==null?void 0:e();if(p+=1,C=null,!E||!((h=a==null?void 0:a.scene)!=null&&h.primitives)){(D=a==null?void 0:a.scene)!=null&&D.globe&&(a.scene.globe.show=!0);return}try{a.scene.primitives.remove(E)}catch{}E=null,(I=a==null?void 0:a.scene)!=null&&I.globe&&(a.scene.globe.show=!0)}async function oe(){var I,V,J,pe;const a=e==null?void 0:e(),h=t==null?void 0:t();if(!((I=a==null?void 0:a.scene)!=null&&I.primitives)||b)return b;if(T)return T;if(typeof((V=h==null?void 0:h.Cesium3DTileset)==null?void 0:V.fromIonAssetId)!="function"&&typeof(h==null?void 0:h.createOsmBuildingsAsync)!="function")return r.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),le.value=!1,null;const D=++P;mt(h,A()),await o(),T=na(h,{maximumScreenSpaceError:8});try{const we=await T;return D!==P||!le.value?(Qt(we),null):(b=a.scene.primitives.add(we),(pe=(J=a.scene).requestRender)==null||pe.call(J),b)}catch(we){return D!==P||(le.value=!1,r.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),r.error("Cesium OSM 建筑图层初始化失败",we)),null}finally{D===P&&(T=null)}}function ge(){var h,D,I;const a=e==null?void 0:e();if(P+=1,T=null,!(!b||!((h=a==null?void 0:a.scene)!=null&&h.primitives))){try{a.scene.primitives.remove(b)}catch{}b=null,(I=(D=a.scene).requestRender)==null||I.call(D)}}async function o(){if(j.value==="cesiumWorld")return!0;j.value="cesiumWorld";const a=await B("cesiumWorld");return a||r.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),a}function s(a,h={}){var J,pe,we;const D=e==null?void 0:e();if(!D||!(t!=null&&t()))return!1;const I=(J=D.baseLayerPicker)==null?void 0:J.viewModel,V=m.get(a);if(I&&V){if(Ie(),h.forceReload&&I.selectedImagery===V){const Me=m.get("tianditu");Me&&Me!==V&&(I.selectedImagery=Me)}return I.selectedImagery!==V&&(I.selectedImagery=V),Fe(),!0}try{return Ie(),W(a).forEach(Be=>{n.push(D.imageryLayers.addImageryProvider(Be))}),Le(),(we=(pe=D.scene).requestRender)==null||we.call(pe),!0}catch(Me){return r.error("地图源切换失败",Me),!1}}function S(){return B(j.value)}async function B(a){var we,Me,Be,it,at,Je,De,Ft,Pt,At,Et;const h=e==null?void 0:e(),D=t==null?void 0:t();if(!h||!D)return!1;const I=(we=h.baseLayerPicker)==null?void 0:we.viewModel,V=R.get(a);if(I&&V)return I.selectedTerrain!==V&&(I.selectedTerrain=V),H(a),(Be=(Me=h.scene).requestRender)==null||Be.call(Me),!0;const J=++_;if(a==="ellipsoid")return h.terrainProvider=new D.EllipsoidTerrainProvider,H(a),(at=(it=h.scene).requestRender)==null||at.call(it),!0;if(a==="cesiumWorld")try{const He=await fe();return J!==_?!1:(h.terrainProvider=He,H(a),(De=(Je=h.scene).requestRender)==null||De.call(Je),!0)}catch(He){return J!==_||(h.terrainProvider=new D.EllipsoidTerrainProvider,H("ellipsoid"),r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",He)),!1}if(a==="arcgisWorld")try{const He=await me();return J!==_?!1:(h.terrainProvider=He,H(a),(Pt=(Ft=h.scene).requestRender)==null||Pt.call(Ft),!0)}catch(He){return J!==_||(h.terrainProvider=new D.EllipsoidTerrainProvider,H("ellipsoid"),r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",He)),!1}const pe=Gt(D);try{return h.terrainProvider=new pe({url:`${st}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:ot,token:v()}),H(a),(Et=(At=h.scene).requestRender)==null||Et.call(At),!0}catch(He){return h.terrainProvider=new D.EllipsoidTerrainProvider,H("ellipsoid"),r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",He),!1}}function H(a){var D;const h=e==null?void 0:e();(D=h==null?void 0:h.scene)!=null&&D.globe&&(h.scene.globe.depthTestAgainstTerrain=a!=="ellipsoid")}function se(a){const h=t==null?void 0:t();if(a==="ellipsoid")return new h.EllipsoidTerrainProvider;if(a==="cesiumWorld")return fe().catch(I=>(r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",I),Oe(a,"ellipsoid"),new h.EllipsoidTerrainProvider));if(a==="arcgisWorld")return me().catch(I=>(r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",I),Oe(a,"ellipsoid"),new h.EllipsoidTerrainProvider));const D=Gt(h);try{return new D({url:`${st}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:ot,token:v()})}catch(I){return r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",I),new h.EllipsoidTerrainProvider}}async function fe(){var D,I;const a=t==null?void 0:t();mt(a,A());const h={requestWaterMask:!1,requestVertexNormals:!0};if(typeof a.createWorldTerrainAsync=="function")return a.createWorldTerrainAsync(h);if(typeof a.createWorldTerrain=="function")return a.createWorldTerrain(h);if(typeof((D=a.CesiumTerrainProvider)==null?void 0:D.fromIonAssetId)=="function")return a.CesiumTerrainProvider.fromIonAssetId(1,h);if((I=a.IonResource)!=null&&I.fromAssetId&&a.CesiumTerrainProvider){const V=await a.IonResource.fromAssetId(1);return new a.CesiumTerrainProvider({url:V,...h})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function me(){var h;const a=t==null?void 0:t();if(typeof((h=a==null?void 0:a.ArcGISTiledElevationTerrainProvider)==null?void 0:h.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return a.ArcGISTiledElevationTerrainProvider.fromUrl(Ki)}function Oe(a,h){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{j.value===a&&(j.value=h)},0)}function Ce({overlayId:a,value:h}){if(a==="tdt-boundaries"){te.value=!!h;return}if(a==="tdt-text-labels"){G.value=!!h;return}if(a==="cesium-osm-buildings"){le.value=!!h;return}a==="google-photorealistic-3d-tiles"&&(de.value=!!h)}function Qe({url:a}){const h=String(a||"").trim(),D=Jt(h);if(!D.valid){r.warning(D.message,{closable:!0});return}if(ee.value=h,U.value===$e){s($e,{forceReload:!0})&&r.success("已加载自定义 XYZ 图源");return}U.value=$e,r.success("已切换到自定义 XYZ 图源")}function nt(){Ie(),ue(),g(),ge(),X(),ke()}return{activeBasemap:U,activeTerrain:j,customXyzBasemapUrl:ee,basemapOptions:_e,terrainOptions:Zt,overlayOptions:Re,createImageryProviderViewModels:k,createTerrainProviderViewModels:O,getSelectedImageryProviderViewModel:L,getSelectedTerrainProviderViewModel:he,bindLayerPickerStateSync:Ze,addBaseImageryLayers:Ke,initCustomTerrain:S,applyBasemap:s,applyTerrain:B,handleOverlayToggle:Ce,handleCustomBasemapSubmit:Qe,cleanupLayers:nt}}function ta(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function ra(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Kt(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Qt(e){var t,r;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(r=e.destroy)==null||r.call(e)}catch{}}async function na(e,t={}){var r;if(typeof((r=e==null?void 0:e.Cesium3DTileset)==null?void 0:r.fromIonAssetId)=="function"){const i=await e.Cesium3DTileset.fromIonAssetId(Qi,t);return!i.style&&typeof e.Cesium3DTileStyle=="function"&&(i.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),i}return e.createOsmBuildingsAsync(t)}function ia(e){return e.value!==$e?e.description||e.label:`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`}function Jt(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let r=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const i=r.match(/\{([a-z0-9])-([a-z0-9])\}/i);let l=[];return i?(l=aa(i[1],i[2]),r=r.replace(i[0],"{s}")):/\{s\}/i.test(r)&&(l=["a","b","c"]),!/\{z\}/.test(r)||!/\{x\}/.test(r)||!/\{y\}/.test(r)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:r,subdomains:l}:oa(r)?{valid:!0,message:"",url:r,subdomains:l}:{valid:!1,message:"URL 格式不合法",url:r,subdomains:l}}function aa(e,t){const r=String(e||"").charCodeAt(0),i=String(t||"").charCodeAt(0);if(!Number.isFinite(r)||!Number.isFinite(i))return[];const l=r<=i?1:-1,u=[];for(let c=r;l>0?c<=i:c>=i;c+=l)u.push(String.fromCharCode(c));return u}function oa(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",r=new URL(e,t);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}function sa(e,t){const r=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${r||"basemap"}`}function er(e,t){const r=String(t||"").replace(/[<>&"']/g,"").slice(0,2),i=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${r}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(i)}`}function la({getViewer:e,getCesium:t,message:r}){function i(c){const y=e==null?void 0:e(),b=t==null?void 0:t();if(!y||!b)return;const T=typeof c=="number"?c:2;y.camera.flyTo({destination:b.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-b.Math.PI_OVER_TWO,roll:0},duration:T})}function l(){const c=e==null?void 0:e(),y=t==null?void 0:t();!c||!y||c.camera.flyTo({destination:y.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:y.Math.toRadians(0),pitch:y.Math.toRadians(-25),roll:0},duration:3})}async function u(){const c=e==null?void 0:e(),y=t==null?void 0:t();if(!(!c||!y))try{const b=await y.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");c.scene.primitives.add(b),c.flyTo(b,{duration:3,offset:new y.HeadingPitchRange(y.Math.toRadians(0),y.Math.toRadians(-25),b.boundingSphere.radius*2.5)})}catch(b){r.error(`加载模型失败: ${b}`),r.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:i,flyToEverest:l,loadCustomTileset:u}}const ca="cesium_tool_panel_open";function ua({fluidPanelRef:e,sceneActions:t={},wind:r={},panelStorageKey:i=ca}={}){const l=Y(et(i,!0)),u=Y({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),c=Y({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),y=Y({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),b=Se(()=>{var p,_,w,v,A,n;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:u.value.atmosphere||u.value.fog?"启用":"关闭",statusTone:u.value.atmosphere||u.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:u.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:u.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:u.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:u.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(p=r.wind2D)!=null&&p.value?"已加载":"未加载",statusTone:(_=r.wind2D)!=null&&_.value?"success":"neutral",actions:[{id:"load",label:(w=r.wind2D)!=null&&w.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((v=r.wind2D)!=null&&v.value)}],controls:da((A=r.windParams)==null?void 0:A.value,!!((n=r.wind2D)!=null&&n.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:y.value.isPicking?"等待选点":y.value.hasFluid?"已创建":"未创建",statusTone:y.value.isPicking?"warning":y.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:y.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:y.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!y.value.hasFluid&&!y.value.isPicking}],controls:ha(c.value,y.value)}]});Te(l,p=>{ct(i,p)});function T({moduleId:p,actionId:_}){var v,A;(A=(v={scene:{home:()=>{var n;return(n=t.flyToHome)==null?void 0:n.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:r.loadSimulatedWind,clear:r.clearWind2D},fluid:{pick:()=>{var n,f;return(f=(n=e==null?void 0:e.value)==null?void 0:n.startPickHeightMap)==null?void 0:f.call(n)},clear:()=>{var n,f;return(f=(n=e==null?void 0:e.value)==null?void 0:n.clearFluid)==null?void 0:f.call(n)}}}[p])==null?void 0:v[_])==null||A.call(v)}function P({moduleId:p,controlId:_,value:w}){var v,A;if(p==="effects"&&_ in u.value){u.value={...u.value,[_]:!!w};return}if(p==="wind"&&_ in(((v=r.windParams)==null?void 0:v.value)||{})){(A=r.setWindParam)==null||A.call(r,_,w);return}p==="fluid"&&_ in c.value&&(c.value={...c.value,[_]:_==="waterColor"?w:Number(w)})}function E(p){const _=rt(p==null?void 0:p.waterLevel),w=rt(p==null?void 0:p.waterLevelMin),v=rt(p==null?void 0:p.waterLevelMax);y.value={isPicking:!!(p!=null&&p.isPicking),hasFluid:!!(p!=null&&p.hasFluid),selectedText:(p==null?void 0:p.selectedText)||"",waterLevel:_,waterLevelMin:w,waterLevelMax:v},_!==null&&(c.value={...c.value,waterLevel:_})}function C(){var p;(p=r.clearWind2D)==null||p.call(r)}return{toolPanelOpen:l,advancedEffectControls:u,fluidParams:c,fluidState:y,toolModules:b,handleToolAction:T,handleToolControlChange:P,handleFluidStateChange:E,cleanupTools:C}}function da(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function ha(e,t={}){const r=rt(t.waterLevelMin),i=rt(t.waterLevelMax),l=r!==null&&i!==null,u=l?Math.min(r,i):0,c=l?Math.max(r,i):0,y=rt(e.waterLevel),b=l?fa(y??u,u,c):0,T=l?Math.max((c-u)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:u,max:c,step:T,value:b,displayValue:l?`${ma(b)} m`:"先捕捉",disabled:!l,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function rt(e){const t=Number(e);return Number.isFinite(t)?t:null}function fa(e,t,r){return Math.max(t,Math.min(r,e))}function ma(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const xe={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},pa=new Float32Array([-1,-1,1,-1,1,1,-1,1]),ga=new Float32Array([0,0,1,0,1,1,0,1]),va=new Uint16Array([0,1,2,0,2,3]);function Ye(e,t,r){return Math.max(t,Math.min(r,e))}function re(e,t){const r=Number(e);return Number.isFinite(r)?r:t}function ya(e,t){const r=t.getParameter(t.MAX_TEXTURE_SIZE),i=Math.min(2048,r),l=Math.max(1,Math.floor(e)),u=Math.sqrt(l),c=Math.log2(u),y=Number.isFinite(c)?Math.round(c):4;let b=Math.pow(2,y);return b=Ye(b,16,i),b}function xa(e){const t=e*e,r=new Float32Array(t*4);for(let i=0;i<t;i+=1){const l=i*4;r[l]=Math.random(),r[l+1]=Math.random(),r[l+2]=Math.random(),r[l+3]=Math.random()}return r}function _a(e){return new Float32Array(e*e*4)}function ba(e,t,r,i,l){const u=t.createTexture();if(!u)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,u),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,r,i,0,t.RGBA,t.FLOAT,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let c=!1;return{_context:e,_texture:u,_target:t.TEXTURE_2D,_width:r,_height:i,destroy(){c||(t.deleteTexture(u),c=!0)}}}class Sa{constructor(t,r={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=r.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const i={...xe,...r};this.speedFactor=re(i.speedFactor,xe.speedFactor),this.cullSpeedMin=re(i.cullSpeedMin,xe.cullSpeedMin),this.cullSpeedMax=re(i.cullSpeedMax,xe.cullSpeedMax),this.windSpeedMin=re(i.windSpeedMin,xe.windSpeedMin),this.windSpeedMax=re(i.windSpeedMax,xe.windSpeedMax),this.arrowLength=re(i.arrowLength,xe.arrowLength),this.trailLength=re(i.trailLength,xe.trailLength),this.decaySpeed=re(i.decaySpeed,xe.decaySpeed),this.alphaFactor=re(i.alphaFactor,xe.alphaFactor),this.maxWindSpeed=re(i.maxWindSpeed,xe.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=re(r.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const r=re(t.longitude,NaN),i=re(t.latitude,NaN),l=Array.isArray(t.altitude)?t.altitude:[],u=Array.isArray(t.sizeMesh)?t.sizeMesh:[],c=Array.isArray(t.count)?t.count:[],y=Array.isArray(t.hspeed)?t.hspeed:[],b=Array.isArray(t.hdir)?t.hdir:[],T=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(r)||!Number.isFinite(i))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const P=l.length;if(P<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(u.length!==P||c.length!==P)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const E=c.map(F=>Math.max(1,Math.floor(re(F,1)))),C=u.map(F=>Math.max(1,re(F,1))),p=l.map(F=>re(F,0)),_=E.reduce((F,U)=>F+U*U,0);if(y.length<_||b.length<_||T.length<_)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=P,this.visibleLayerMin=0,this.visibleLayerMax=P-1,this._altitudes=p.slice(),this._maxNx=Math.max(...E),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*P;const w=new Float32Array(this._atlasWidth*this._atlasHeight*4);let v=0;for(let F=0;F<P;F+=1){const U=E[F],j=U;for(let ee=0;ee<j;ee+=1)for(let Q=0;Q<U;Q+=1){const te=v+ee*U+Q,G=((F*this._maxNy+ee)*this._atlasWidth+Q)*4,le=Number(y[te]),de=Number(b[te]),_e=Number(T[te]);if(!(Number.isFinite(le)&&Number.isFinite(de))){w[G]=0,w[G+1]=0,w[G+2]=0,w[G+3]=0;continue}const k=de*Math.PI/180;w[G]=le*Math.sin(k),w[G+1]=le*Math.cos(k),w[G+2]=Number.isFinite(_e)?_e:0,w[G+3]=1}v+=U*j}this._createOrReplaceWindAtlasTexture(w);const A=Math.max(...C),n=this._maxNx*A,f=n/2/111320,m=i*Math.PI/180,M=Math.max(1e-6,Math.abs(Math.cos(m))),R=n/2/(111320*M);this._bounds={minLon:r-R,maxLon:r+R,minLat:i-f,maxLat:i+f,minHeight:Math.min(...p),maxHeight:Math.max(...p)},this._dataPointCount=_,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const r=Math.max(1,Math.floor(re(t,1))),i=ya(r,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&i===this._particleTextureSize||(this._particleTextureSize=i,this._particleCount=i*i,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const r=Ye(re(t,this.particleDensity),.05,10);if(this.particleDensity=r,this._dataPointCount<=0)return;const i=Math.max(1,Math.floor(this._dataPointCount*r));this.setParticleCount(i)}setBounds(t,r,i,l){const u=re(t,NaN),c=re(r,NaN),y=re(i,NaN),b=re(l,NaN);if(!Number.isFinite(u)||!Number.isFinite(c)||!Number.isFinite(y)||!Number.isFinite(b))return;const T=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};T.minLon=Math.min(u,c),T.maxLon=Math.max(u,c),T.minLat=Math.min(y,b),T.maxLat=Math.max(y,b),this._bounds=T,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,r=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,r,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const l=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[l],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=l,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=ba(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,r=this._particleTextureSize,i=xa(r),l=_a(r);for(let u=0;u<2;u+=1){this._particlePositionTextures[u]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:i},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[u]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:l},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[u]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[u],this._velocityTextures[u]],destroyAttachments:!1});const c=this._framebuffers[u]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,c),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,r=t.Buffer.createVertexBuffer({context:this._context,typedArray:pa,usage:t.BufferUsage.STATIC_DRAW}),i=t.Buffer.createVertexBuffer({context:this._context,typedArray:ga,usage:t.BufferUsage.STATIC_DRAW}),l=t.Buffer.createIndexBuffer({context:this._context,typedArray:va,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:r,componentsPerAttribute:2},{index:1,vertexBuffer:i,componentsPerAttribute:2}],indexBuffer:l})}_buildParticleVertexArray(){const t=this._Cesium,r=new Float32Array(this._drawVertexCount);for(let i=0;i<r.length;i+=1)r[i]=i;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:r,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,r=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:i,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,r=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:r,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,r=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:r,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=Ye(Math.floor(re(this.visibleLayerMin,0)),0,this._layerCount-1),r=Ye(Math.floor(re(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:r}}_normalizeSpeedRange(t,r){const i=Math.max(1e-4,re(this.maxWindSpeed,xe.maxWindSpeed)),l=Ye(re(t,0)/i,0,1),u=Ye(re(r,i)/i,0,1);return{min:Math.min(l,u),max:Math.max(l,u)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>re(this.speedFactor,xe.speedFactor),maxWindSpeed:()=>Math.max(1e-4,re(this.maxWindSpeed,xe.maxWindSpeed)),decaySpeed:()=>Ye(re(this.decaySpeed,xe.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>re(this.arrowLength,xe.arrowLength),trailLength:()=>re(this.trailLength,xe.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Ye(re(this.alphaFactor,xe.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Ta({getViewer:e,getCesium:t,message:r}){const i=Y(null),l=Y({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function u(){var P,E;const T=e==null?void 0:e();if(i.value){try{(E=(P=T==null?void 0:T.scene)==null?void 0:P.primitives)==null||E.remove(i.value)}catch{}i.value.destroy(),i.value=null}}function c(){const T=e==null?void 0:e(),P=t==null?void 0:t();if(!T||!P){r.error("Cesium 尚未初始化");return}u();const E=wa(P);i.value=new Sa(T,{maxWindSpeed:20,cesium:P,speedFactor:l.value.speedFactor,arrowLength:l.value.arrowLength,trailLength:l.value.trailLength,alphaFactor:l.value.alphaFactor}),i.value.loadData(E),T.scene.primitives.add(i.value),i.value.flyTo(),r.success("风场加载成功，可通过下方滑块调节样式")}function y(){i.value&&(i.value.speedFactor=l.value.speedFactor,i.value.arrowLength=l.value.arrowLength,i.value.trailLength=l.value.trailLength,i.value.alphaFactor=l.value.alphaFactor)}function b(T,P){return T in l.value?(l.value={...l.value,[T]:Number(P)},y(),!0):!1}return{wind2D:i,windParams:l,clearWind2D:u,loadSimulatedWind:c,setWindParam:b}}function wa(e){const l=[0,2e3,5e3,1e4,15e3],u=[3e4,3e4,25e3,25e3,2e4],c=[30,30,25,25,20],y=c.reduce((C,p)=>C+p*p,0),b=new Array(y),T=new Array(y),P=new Array(y);let E=0;for(let C=0;C<5;C++){const p=c[C],_=c[C],w=u[C];for(let v=0;v<_;v++)for(let A=0;A<p;A++){const n=E+v*p+A,f=(A-p/2)*(w/111320),m=(v-_/2)*(w/111320/Math.cos(e.Math.toRadians(35))),R=Math.atan2(m,f)+Math.PI/2+.2*Math.sin(A*.5)*Math.cos(v*.5);T[n]=e.Math.toDegrees(R)%360;const F=Math.sqrt(f*f+m*m),j=Math.max(0,1-F/15);b[n]=(5+C*2)*j+2*Math.random(),P[n]=.5*Math.sin(A*.3)*Math.cos(v*.3)}E+=p*_}return{longitude:104,latitude:35,altitude:l,sizeMesh:u,count:c,hspeed:b,hdir:T,vspeed:P}}const Ma={key:3,class:"fps-chart-panel","aria-label":"实时帧率折线图"},La={class:"fps-chart-head"},Fa={class:"fps-chart",viewBox:"0 0 160 48",preserveAspectRatio:"none","aria-hidden":"true"},Pa=["points"],Aa={class:"map-controls-group"},Ea={class:"mouse-position-content"},Ra={__name:"CesiumContainer",setup(e){let t=null,r=null;const i=wt(),l=Y(!1),u=Y(null),c=Y(lr()),y=()=>r,b=()=>t||window.Cesium,T=()=>c.value.tiandituTk,P=()=>c.value.cesiumIonToken,E=ea({getViewer:y,getCesium:b,message:i,backendBaseUrl:ur,tiandituToken:T,cesiumIonToken:P}),{activeBasemap:C,activeTerrain:p,customXyzBasemapUrl:_,basemapOptions:w,terrainOptions:v,overlayOptions:A,createImageryProviderViewModels:n,createTerrainProviderViewModels:f,getSelectedImageryProviderViewModel:m,getSelectedTerrainProviderViewModel:M,bindLayerPickerStateSync:R,addBaseImageryLayers:F,initCustomTerrain:U,handleOverlayToggle:j,handleCustomBasemapSubmit:ee,cleanupLayers:Q}=E,{coordinateDisplay:te,setupInteractions:G,cleanupInteractions:le}=Yi({getViewer:y,getCesium:b}),{frameRateDisplay:de,frameRateLinePoints:_e,setupFrameRateMonitor:Re,cleanupFrameRateMonitor:k}=Xi({getViewer:y}),{installCreditHider:O,cleanupCreditHider:L}=Gi({getViewer:y}),he=la({getViewer:y,getCesium:b,message:i}),{flyToHome:Ae}=he,W=Ta({getViewer:y,getCesium:b,message:i}),{toolPanelOpen:ce,advancedEffectControls:Ne,fluidParams:Xe,toolModules:je,handleToolAction:Ve,handleToolControlChange:Ze,handleFluidStateChange:ke,cleanupTools:Ke}=ua({fluidPanelRef:u,sceneActions:he,wind:W});async function Ie(){tr("正在初始化 3D 场景...");try{let ye=0,Z=1;for(;ye<Z;)try{if(c.value=await cr({silent:!1,force:ye>0}),Z=Math.max(Z,Array.isArray(c.value.tiandituTokens)?c.value.tiandituTokens.length:1,Array.isArray(c.value.cesiumIonTokens)?c.value.cesiumIonTokens.length:1,1),t=await Ci({ionToken:P()}),!t||!document.getElementById("cesiumContainer"))return;Le(),G(),Re();const ue=F(),g=await U();if(l.value=!0,ue&&g){i.success("天地图基础影像与地形加载成功。");return}const x=ue?{switched:!1}:gt("tianditu_tk"),z=g?{switched:!1}:gt("cesium_ion_token");if(!(x.switched||z.switched)){i.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}c.value=z.switched?z.tokens:x.tokens,Fe(),ye+=1,i.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(ue){const g=gt("cesium_ion_token");if(!g.switched)throw ue;c.value=g.tokens,Fe(),ye+=1,i.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}i.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(ye){i.error("Cesium 运行时加载失败",ye),i.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{rr()}}function Fe(){if(l.value=!1,le(),k(),Q(),L(),!!r){try{r.destroy()}catch{}r=null}}function Le(){var g;const ye=typeof t.Map=="function"?t.Map:t.Viewer,Z=n(),ue=f();r=new ye("cesiumContainer",{baseLayerPicker:!0,geocoder:((g=t.IonGeocodeProviderType)==null?void 0:g.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:Z,selectedImageryProviderViewModel:m(Z),terrainProviderViewModels:ue,selectedTerrainProviderViewModel:M(ue),shouldAnimate:!0}),r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,Ni(r,t),Lr(r),O(),R(),Ae(0)}return nr(()=>{Ie()}),ir(()=>{if(l.value=!1,le(),k(),Ke(),Q(),L(),r){try{r.destroy()}catch{}r=null}}),(ye,Z)=>(N(),q(Ee,null,[Z[10]||(Z[10]=d("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),l.value?(N(),qe(tt(qr),{key:0,headless:"","get-viewer":y,"get-cesium":b,controls:K(Ne)},null,8,["controls"])):ie("",!0),l.value?(N(),qe(tt(Ai),{key:1,ref_key:"fluidPanelRef",ref:u,headless:"","get-viewer":y,"get-cesium":b,params:K(Xe),onStateChange:K(ke)},null,40,["params","onStateChange"])):ie("",!0),l.value?(N(),qe(li,{key:2,open:K(ce),"onUpdate:open":Z[0]||(Z[0]=ue=>vt(ce)?ce.value=ue:null),"active-basemap":K(C),"onUpdate:activeBasemap":Z[1]||(Z[1]=ue=>vt(C)?C.value=ue:null),"active-terrain":K(p),"onUpdate:activeTerrain":Z[2]||(Z[2]=ue=>vt(p)?p.value=ue:null),"basemap-options":K(w),"terrain-options":K(v),"overlay-options":K(A),"custom-basemap-url":K(_),modules:K(je),onModuleAction:K(Ve),onControlChange:K(Ze),onOverlayToggle:K(j),onCustomBasemapSubmit:K(ee)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):ie("",!0),l.value?(N(),q("section",Ma,[d("div",La,[Z[4]||(Z[4]=d("span",null,"FPS",-1)),d("strong",null,ae(K(de)),1)]),(N(),q("svg",Fa,[Z[5]||(Z[5]=d("line",{class:"fps-grid-line",x1:"0",y1:"12",x2:"160",y2:"12"},null,-1)),Z[6]||(Z[6]=d("line",{class:"fps-grid-line",x1:"0",y1:"24",x2:"160",y2:"24"},null,-1)),Z[7]||(Z[7]=d("line",{class:"fps-grid-line",x1:"0",y1:"36",x2:"160",y2:"36"},null,-1)),K(_e)?(N(),q("polyline",{key:0,class:"fps-line",points:K(_e)},null,8,Pa)):ie("",!0)]))])):ie("",!0),d("div",Aa,[d("div",Ea,ae(K(te)),1),Z[9]||(Z[9]=d("div",{class:"divider"},null,-1)),d("button",{class:"home-btn",title:"回到初始位置",onClick:Z[3]||(Z[3]=(...ue)=>K(Ae)&&K(Ae)(...ue))},[...Z[8]||(Z[8]=[d("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[d("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},Ga=pt(Ra,[["__scopeId","data-v-9d0e9323"]]);export{Ga as default};
