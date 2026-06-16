const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-CvtFB7l4.js","./vendor-echarts-all-B_WEc2GE.js","./vendor-libs-RyoEAG51.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var or=Object.defineProperty;var sr=(e,t,r)=>t in e?or(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Dt=(e,t,r)=>sr(e,typeof t!="symbol"?t+"":t,r);import{_ as yt,e as Ft,N as tr,M as rr,s as lr,q as cr,t as xt,L as ur}from"./index-rhsc8JfJ.js";import{_ as dr}from"./vendor-runtime-Dp1pzeXC.js";import{C as nr,o as ir,w as Te,d as B,c as q,f as h,t as ae,G as ve,W as ft,X as st,g as ie,r as Y,P as hr,a as Fe,u as K,F as Ae,e as Ge,n as be,x as Ve,S as tt,I as Rt,i as Ct,H as ze,O as ar,q as Se,v as fr,a4 as _t}from"./vendor-vue-CmuMwCC6.js";import{af as bt,ag as St,ah as mr,X as pr,e as kt,ai as mt,ac as It,aj as gr,ak as vr,al as Nt,H as Ot,T as Ht,a2 as yr,am as xr,an as _r,ao as br,ap as Sr,q as Tr,o as wr,aq as Mr}from"./vendor-libs-RyoEAG51.js";import"./vendor-ol-all-ZNWqDNbP.js";import"./vendor-geotiff-B6D64MFK.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BzG5Hdu9.js";import"./vendor-axios-Bdz_Fv8M.js";function Lr(e){var a;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;!t||!r||(r.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(a=t.requestRender)==null||a.call(t))}function Fr(e,t){var d;const r=e==null?void 0:e.scene,a=r==null?void 0:r.globe;if(!r||!a)return;Ar(r,t),Dr(r),a.enableLighting=!0,a.showGroundAtmosphere=!0,ne(a,"dynamicAtmosphereLighting",!0),ne(a,"dynamicAtmosphereLightingFromSun",!0),ne(a,"atmosphereLightIntensity",11.5),ne(a,"atmosphereHueShift",-.015),ne(a,"atmosphereSaturationShift",.08),ne(a,"atmosphereBrightnessShift",.02),ne(a,"lightingFadeInDistance",15e6),ne(a,"lightingFadeOutDistance",22e6),ne(a,"nightFadeInDistance",9e6),ne(a,"nightFadeOutDistance",16e6),pt(t,a,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),pt(t,a,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ne(a,"atmosphereRayleighScaleHeight",1e4),ne(a,"atmosphereMieScaleHeight",3200),ne(a,"atmosphereMieAnisotropy",.92),!r.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(r.skyAtmosphere=Cr(t));const c=r.skyAtmosphere;c&&(c.show=!0,ne(c,"perFragmentAtmosphere",!0),ne(c,"dynamicAtmosphereLighting",!0),ne(c,"dynamicAtmosphereLightingFromSun",!0),ne(c,"hueShift",-.025),ne(c,"saturationShift",.08),ne(c,"brightnessShift",.03),ne(c,"atmosphereLightIntensity",12),pt(t,c,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),pt(t,c,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ne(c,"atmosphereRayleighScaleHeight",1e4),ne(c,"atmosphereMieScaleHeight",3200),ne(c,"atmosphereMieAnisotropy",.92)),r.sun&&(r.sun.show=!0),r.moon&&(r.moon.show=!0),r.skyBox&&(r.skyBox.show=!0),"sunBloom"in r&&(r.sunBloom=!0),"highDynamicRange"in r&&(r.highDynamicRange=!0),Rr(r),(d=r.requestRender)==null||d.call(r)}function Pr(e){var c;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;if(!t||!r)return null;const a=(c=t.postProcessStages)==null?void 0:c.bloom;return{scene:$e(t,["highDynamicRange","sunBloom","light"]),fog:$e(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:$e(r,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:$e(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:$e(t.sun,["show"]),moon:$e(t.moon,["show"]),skyBox:$e(t.skyBox,["show"]),bloom:{props:$e(a,["enabled"]),uniforms:$e(a==null?void 0:a.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Er(e,t,r){var u,_,S,w;if(!r)return;const a=e==null?void 0:e.scene,c=a==null?void 0:a.globe;if(!a||!c)return;qe(a,r.scene,t),qe(a.fog,r.fog,t),qe(c,r.globe,t),qe(a.sun,r.sun,t),qe(a.moon,r.moon,t),qe(a.skyBox,r.skyBox,t),a.skyAtmosphere&&(qe(a.skyAtmosphere,r.sky,t),r.skyAtmosphereExisted||(a.skyAtmosphere.show=!1));const d=(u=a.postProcessStages)==null?void 0:u.bloom;qe(d,(_=r.bloom)==null?void 0:_.props,t),qe(d==null?void 0:d.uniforms,(S=r.bloom)==null?void 0:S.uniforms,t),(w=a.requestRender)==null||w.call(a)}function Ar(e,t){var r;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(r=t.Color)==null?void 0:r.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}ne(e.light,"intensity",2.35)}function Dr(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,ne(t,"density",12e-5),ne(t,"minimumBrightness",.035),ne(t,"screenSpaceErrorFactor",2),ne(t,"visualDensityScalar",.16))}function Rr(e){var r;const t=(r=e==null?void 0:e.postProcessStages)==null?void 0:r.bloom;t&&(t.enabled=!0,t.uniforms&&(ne(t.uniforms,"contrast",128),ne(t.uniforms,"brightness",-.18),ne(t.uniforms,"delta",1),ne(t.uniforms,"sigma",2.5),ne(t.uniforms,"stepSize",4.2)))}function Cr(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function ne(e,t,r){e&&t in e&&(e[t]=r)}function pt(e,t,r,a,c,d){!t||!(r in t)||!(e!=null&&e.Cartesian3)||(t[r]=new e.Cartesian3(a,c,d))}function $e(e,t){return e?t.reduce((r,a)=>(a in e&&(r[a]=kr(e[a])),r),{}):{}}function qe(e,t={},r){!e||!t||Object.entries(t).forEach(([a,c])=>{a in e&&(e[a]=Ir(c,r))})}function kr(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Ir(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Nr={key:0,class:"advanced-effects-root"},Or={class:"effects-panel"},Hr={class:"panel-head"},zr={class:"effect-switches"},Br={class:"switch-item"},Ur={class:"switch-item"},Wr={class:"switch-item"},Gr={class:"switch-item"},$r={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,r=Ft(),a=Y(null),c=Y(!1),d=Y(!1),u=Y(!1),_=Y(!1),S=Y(!1);let w=null,A=null,R=null,k=!1,p=null,b=null,M=null,y=null,D=null,i=null,f=null,m=null,L=!1,C=null,E=0,W=0,j=typeof performance<"u"?performance.now():Date.now();function J(){return M||(M=dr(()=>import("./cesiumFxRuntime-CvtFB7l4.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(g=>{var z;const x=(z=g==null?void 0:g.getCesiumFxEchartsRuntime)==null?void 0:z.call(g);if(!x)throw new Error("Cinematic FX 图表运行时加载失败");return b=x,x}).catch(g=>{throw M=null,g}),M)}async function Q(){return b||J()}const te={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},$={hdr:null,bloom:null,sky:null};nr(()=>{he()}),ir(()=>{Ue()}),Te(()=>t.controls,g=>{se(g||{})},{deep:!0,immediate:!0});function se(g){Object.prototype.hasOwnProperty.call(g,"fog")&&(c.value=!!g.fog),Object.prototype.hasOwnProperty.call(g,"hbao")&&(d.value=!!g.hbao),Object.prototype.hasOwnProperty.call(g,"tiltShift")&&(u.value=!!g.tiltShift),Object.prototype.hasOwnProperty.call(g,"atmosphere")&&(_.value=!!g.atmosphere)}function he(){let g=0;y=window.setInterval(async()=>{var U,V;g+=1;const x=(U=t.getViewer)==null?void 0:U.call(t),z=((V=t.getCesium)==null?void 0:V.call(t))||window.Cesium;if(x&&z){clearInterval(y),y=null;try{xe(x),I(x),Ie(x,z),G(x,z),r.success("高级视觉效果已启用。")}catch(oe){r.error("高级视觉效果初始化失败",oe),r.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}g>=150&&(clearInterval(y),y=null,r.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function xe(g){var z,U,V,oe,pe,Pe;const x=g==null?void 0:g.scene;if(x){if(typeof x.highDynamicRange=="boolean"&&($.hdr=x.highDynamicRange),(z=x.postProcessStages)!=null&&z.bloom){const we=x.postProcessStages.bloom;$.bloom={enabled:!!we.enabled,contrast:(U=we.uniforms)==null?void 0:U.contrast,brightness:(V=we.uniforms)==null?void 0:V.brightness,delta:(oe=we.uniforms)==null?void 0:oe.delta,sigma:(pe=we.uniforms)==null?void 0:pe.sigma,stepSize:(Pe=we.uniforms)==null?void 0:Pe.stepSize}}x.skyAtmosphere&&($.sky={hueShift:x.skyAtmosphere.hueShift,saturationShift:x.skyAtmosphere.saturationShift,brightnessShift:x.skyAtmosphere.brightnessShift})}}function Ie(g,x){var U;!((U=g==null?void 0:g.scene)!=null&&U.postProcessStages)||!(x!=null&&x.PostProcessStage)||(F(g,x),fe(g,x),Me(g,x),_.value?le(g,x,1200):Ne(g))}function I(g){var z;const x=g==null?void 0:g.scene;(z=x==null?void 0:x.renderError)!=null&&z.addEventListener&&(x.rethrowRenderErrors=!1,m=x.renderError.addEventListener((U,V)=>{r.error("Cesium 渲染异常，已触发降级保护",V),O(),L||(L=!0,r.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function O(){c.value=!1,u.value=!1,d.value=!1,_.value=!1,w&&(w.enabled=!1),A&&(A.enabled=!1),R&&(R.enabled=!1)}function F(g,x){w||(w=new x.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new x.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),g.scene.postProcessStages.add(w),w.enabled=c.value)}function fe(g,x){var U,V;const z=(U=g==null?void 0:g.scene)==null?void 0:U.postProcessStages;z&&(z.ambientOcclusion?(R=z.ambientOcclusion,k=!1):(V=x==null?void 0:x.PostProcessStageLibrary)!=null&&V.createAmbientOcclusionStage&&(R=x.PostProcessStageLibrary.createAmbientOcclusionStage(),z.add(R),k=!0),R&&(R.enabled=d.value,R.uniforms&&("intensity"in R.uniforms&&(R.uniforms.intensity=4.2),"bias"in R.uniforms&&(R.uniforms.bias=.08),"lengthCap"in R.uniforms&&(R.uniforms.lengthCap=.35),"stepSize"in R.uniforms&&(R.uniforms.stepSize=1.8),"frustumLength"in R.uniforms&&(R.uniforms.frustumLength=1200))))}function Me(g,x){A||(A=new x.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),g.scene.postProcessStages.add(A),A.enabled=!1)}function G(g,x){const z=g==null?void 0:g.scene;z&&(f=z.preRender.addEventListener(()=>{var pe;const U=De(g),V=Number(((pe=g==null?void 0:g.camera)==null?void 0:pe.pitch)??-1.2);E+=1;const oe=typeof performance<"u"?performance.now():Date.now();if(oe-j>=1e3&&(W=Math.round(E*1e3/(oe-j)),E=0,j=oe),w&&(w.enabled=c.value,w.uniforms.cameraHeightFactor=Re(U,150,12e3),w.uniforms.fogDensity=55e-5+(1-w.uniforms.cameraHeightFactor)*.00125),R&&(R.enabled=d.value),A){const Pe=V>-.62,we=Pe?ge((V+.62)/.5):0;A.enabled=u.value&&Pe,A.uniforms.blurStrength=we}_.value?le(g,x,U):Ne(g)}))}function le(g,x,z){var Pe;const U=g==null?void 0:g.scene;if(!U)return;C||(C=Pr(g)),Fr(g,x),typeof U.highDynamicRange=="boolean"&&(U.highDynamicRange=!0);const V=(Pe=U.postProcessStages)==null?void 0:Pe.bloom;V&&(V.enabled=!0,V.uniforms&&("contrast"in V.uniforms&&(V.uniforms.contrast=149),"brightness"in V.uniforms&&(V.uniforms.brightness=-.12),"delta"in V.uniforms&&(V.uniforms.delta=1),"sigma"in V.uniforms&&(V.uniforms.sigma=3.25),"stepSize"in V.uniforms&&(V.uniforms.stepSize=5)));const oe=U.skyAtmosphere;if(!oe)return;const pe=Re(z,500,12e4);oe.hueShift=-.035+pe*.035,oe.saturationShift=-.14+pe*.09,oe.brightnessShift=.03+(1-pe)*.08}function Ne(g){var V,oe;const x=g==null?void 0:g.scene;if(!x)return;const z=((V=t.getCesium)==null?void 0:V.call(t))||window.Cesium;if(C){Er(g,z,C),C=null;return}typeof x.highDynamicRange=="boolean"&&$.hdr!==null&&(x.highDynamicRange=$.hdr);const U=(oe=x.postProcessStages)==null?void 0:oe.bloom;U&&$.bloom&&(U.enabled=$.bloom.enabled,U.uniforms&&("contrast"in U.uniforms&&$.bloom.contrast!==void 0&&(U.uniforms.contrast=$.bloom.contrast),"brightness"in U.uniforms&&$.bloom.brightness!==void 0&&(U.uniforms.brightness=$.bloom.brightness),"delta"in U.uniforms&&$.bloom.delta!==void 0&&(U.uniforms.delta=$.bloom.delta),"sigma"in U.uniforms&&$.bloom.sigma!==void 0&&(U.uniforms.sigma=$.bloom.sigma),"stepSize"in U.uniforms&&$.bloom.stepSize!==void 0&&(U.uniforms.stepSize=$.bloom.stepSize))),x.skyAtmosphere&&$.sky&&(x.skyAtmosphere.hueShift=$.sky.hueShift,x.skyAtmosphere.saturationShift=$.sky.saturationShift,x.skyAtmosphere.brightnessShift=$.sky.brightnessShift)}function Be(){D&&(clearInterval(D),D=null)}async function Ke(){var U,V;const g=!S.value;if(S.value=g,!g){Be();return}const x=(U=t.getViewer)==null?void 0:U.call(t),z=((V=t.getCesium)==null?void 0:V.call(t))||window.Cesium;if(!x||!z){S.value=!1,r.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Qe(x,z),Ye(x,z),Oe(x,z)}catch(oe){S.value=!1,r.error("图表模块加载失败",oe)}}async function Qe(g,x){await Q(),await hr(),a.value&&(p||(p=b.init(a.value),Je()),i||(i=()=>{p==null||p.resize()},window.addEventListener("resize",i)),p.resize(),Oe(g,x))}function Ye(g,x){D||(D=window.setInterval(()=>{!p||!S.value||Oe(g,x)},1200))}function Oe(g,x){var pe;const z=new Date,U=`${ue(z.getHours())}:${ue(z.getMinutes())}:${ue(z.getSeconds())}`,V=Number((De(g)/1e3).toFixed(2)),oe=Number(x.Math.toDegrees(((pe=g==null?void 0:g.camera)==null?void 0:pe.pitch)??0).toFixed(1));Z(te.labels,U,20),Z(te.cameraHeightKm,V,20),Z(te.pitchDeg,oe,20),Z(te.fps,W,20),p.setOption({xAxis:{data:te.labels},series:[{data:te.cameraHeightKm},{data:te.pitchDeg},{data:te.fps}]})}function Je(){p&&p.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function Ue(){var z,U;y&&(clearInterval(y),y=null),Be();const g=(z=t.getViewer)==null?void 0:z.call(t),x=(U=g==null?void 0:g.scene)==null?void 0:U.postProcessStages;f&&(f(),f=null),m&&(m(),m=null),w&&x&&x.remove(w),w=null,A&&x&&x.remove(A),A=null,R&&(k&&x&&x.remove(R),R=null),k=!1,g&&Ne(g),i&&(window.removeEventListener("resize",i),i=null),p&&(p.dispose(),p=null),b=null,L=!1}function De(g){var V,oe,pe;const x=(oe=(V=g==null?void 0:g.scene)==null?void 0:V.globe)==null?void 0:oe.ellipsoid,z=(pe=g==null?void 0:g.camera)==null?void 0:pe.positionWC;if(!x||!z)return 0;const U=x.cartesianToCartographic(z);return Math.max(0,Number((U==null?void 0:U.height)??0))}function Re(g,x,z){return!Number.isFinite(g)||z<=x?0:ge((g-x)/(z-x))}function ge(g){return Math.min(1,Math.max(0,Number(g)||0))}function Z(g,x,z){g.push(x),g.length>z&&g.shift()}function ue(g){return String(g).padStart(2,"0")}return(g,x)=>e.headless?ie("",!0):(B(),q("div",Nr,[h("div",Or,[h("div",Hr,[x[4]||(x[4]=h("span",{class:"panel-title"},"Cinematic FX",-1)),h("button",{class:"panel-btn",onClick:Ke},ae(S.value?"隐藏图表":"显示图表"),1)]),h("div",zr,[h("label",Br,[ve(h("input",{"onUpdate:modelValue":x[0]||(x[0]=z=>c.value=z),type:"checkbox"},null,512),[[ft,c.value]]),x[5]||(x[5]=h("span",null,"电影级高度雾",-1))]),h("label",Ur,[ve(h("input",{"onUpdate:modelValue":x[1]||(x[1]=z=>d.value=z),type:"checkbox"},null,512),[[ft,d.value]]),x[6]||(x[6]=h("span",null,"HBAO 微阴影",-1))]),h("label",Wr,[ve(h("input",{"onUpdate:modelValue":x[2]||(x[2]=z=>u.value=z),type:"checkbox"},null,512),[[ft,u.value]]),x[7]||(x[7]=h("span",null,"移轴摄影",-1))]),h("label",Gr,[ve(h("input",{"onUpdate:modelValue":x[3]||(x[3]=z=>_.value=z),type:"checkbox"},null,512),[[ft,_.value]]),x[8]||(x[8]=h("span",null,"动态大气 + Bloom",-1))])]),ve(h("div",{ref_key:"chartRef",ref:a,class:"fx-chart"},null,512),[[st,S.value]])])]))}},qr=yt($r,[["__scopeId","data-v-1e562e70"]]),Xr={key:0,class:"launcher-count"},Vr={class:"panel-header"},Yr={class:"panel-title-block"},jr={class:"panel-mark"},Zr={class:"panel-copy"},Kr={class:"panel-subtitle"},Qr={class:"panel-actions"},Jr=["title"],en={class:"panel-tabs","aria-label":"3D 工具分类"},tn=["aria-pressed","onClick"],rn={class:"panel-scroll"},nn={class:"panel-page"},an={class:"overview-grid"},on={class:"overview-tile"},sn={class:"overview-tile"},ln={class:"overview-tile"},cn={key:0,class:"quick-actions"},un=["disabled","onClick"],dn={key:1,class:"empty-state"},hn={class:"panel-page"},fn=["aria-expanded"],mn={class:"section-main"},pn={class:"section-meta"},gn={key:0,class:"section-body"},vn={class:"option-grid"},yn=["disabled","aria-pressed","title","onClick"],xn={class:"custom-basemap-input-row"},_n=["disabled"],bn={key:0,class:"custom-basemap-current"},Sn=["aria-expanded"],Tn={class:"section-main"},wn={class:"section-meta"},Mn={key:0,class:"section-body"},Ln={class:"option-grid"},Fn=["aria-pressed","title","onClick"],Pn=["aria-expanded"],En={class:"section-main"},An={class:"section-meta"},Dn={key:0,class:"section-body"},Rn={class:"overlay-list"},Cn=["disabled","aria-pressed","title","onClick"],kn={class:"overlay-copy"},In={class:"overlay-title"},Nn={key:0,class:"overlay-desc"},On={key:3,class:"empty-state"},Hn={class:"panel-page"},zn={class:"module-list"},Bn=["aria-expanded","onClick"],Un={class:"module-icon"},Wn={class:"module-copy"},Gn={class:"module-title"},$n={key:0,class:"module-desc"},qn={class:"module-head-side"},Xn={key:0,class:"module-body"},Vn={key:0,class:"module-actions"},Yn=["disabled","onClick"],jn={key:1,class:"control-list"},Zn={class:"control-label"},Kn={class:"control-label-text"},Qn=["aria-label","title"],Jn=["min","max","step","value","disabled","onInput"],ei=["min","max","step","value","disabled","onInput"],ti=["value","disabled","onInput"],ri=["value","disabled","onChange"],ni=["value"],ii=["aria-pressed","disabled","onClick"],ai={key:4,class:"control-value"},oi={key:0,class:"empty-state"},zt=2,si={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(e,{emit:t}){const r=e,a=t,c=Q(),d=c.uiStateVersion===zt,u=Y(c.activeTab||"scene"),_=Y(!!c.compactMode),S=Y(new Set(d?c.expandedLayerSectionIds||[]:[])),w=Y(new Set(d?c.expandedModuleIds||[]:[])),A=Y(r.customBasemapUrl||""),R=Se(()=>r.embedded||r.open),k=Se(()=>r.modules.find(I=>I.id==="scene")||null),p=Se(()=>{var I;return((I=k.value)==null?void 0:I.actions)||[]}),b=Se(()=>r.modules.filter(I=>I.id!=="scene")),M=Se(()=>b.value.filter(I=>I.statusTone==="success"||I.statusTone==="warning").length),y=Se(()=>r.overlayOptions.filter(I=>!!I.active).length),D=[{id:"scene",label:"场景",icon:St},{id:"layers",label:"图层",icon:kt},{id:"modules",label:"模块",icon:bt}],i=Se(()=>{var I;return((I=r.basemapOptions.find(O=>O.value===r.activeBasemap))==null?void 0:I.label)||"未选择"}),f=Se(()=>{var I;return((I=r.terrainOptions.find(O=>O.value===r.activeTerrain))==null?void 0:I.label)||"未选择"});Te(()=>r.modules.map(I=>I.id),I=>{I.includes(u.value)||u.value==="scene"||u.value==="layers"||u.value==="modules"||(u.value="scene")},{immediate:!0}),Te([u,_,S,w],te,{deep:!0}),Te(()=>r.customBasemapUrl,I=>{I!==A.value&&(A.value=I||"")});function m(I){a("update:open",I)}function L(I){return S.value.has(I)}function C(I){const O=new Set(S.value);O.has(I)?O.delete(I):O.add(I),S.value=O}function E(I){return w.value.has(I)}function W(I){const O=new Set(w.value);O.has(I)?O.delete(I):O.add(I),w.value=O}function j(I){I!=null&&I.disabled||a("update:activeBasemap",I.value)}function J(){a("custom-basemap-submit",{url:A.value})}function Q(){if(typeof window>"u")return{};try{const I=window.localStorage.getItem(r.storageKey);return I?JSON.parse(I):{}}catch{return{}}}function te(){if(!(typeof window>"u"))try{window.localStorage.setItem(r.storageKey,JSON.stringify({uiStateVersion:zt,activeTab:u.value,compactMode:_.value,expandedLayerSectionIds:[...S.value],expandedModuleIds:[...w.value]}))}catch{}}function $(I){return{scene:St,effects:wr,wind:Tr,fluid:Sr}[I]||bt}function se(I,O){var fe;return((fe={scene:{home:_r,everest:Nt,tileset:xr},wind:{load:yr,clear:Ht},fluid:{pick:Ot,clear:Ht}}[I])==null?void 0:fe[O])||br}function he(I,O){a("module-action",{moduleId:I,actionId:O})}function xe(I,O,F){const fe=O.type==="range"?Number(F):F;a("control-change",{moduleId:I,controlId:O.id,value:fe})}function Ie(I){I.disabled||a("overlay-toggle",{overlayId:I.value,value:!I.active})}return(I,O)=>(B(),q("aside",{class:be(["cesium-tool-shell",{"is-open":R.value,"is-embedded":e.embedded}])},[!e.embedded&&!R.value?(B(),q("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:O[0]||(O[0]=F=>m(!0))},[Fe(K(bt),{size:18,"stroke-width":"2"}),O[8]||(O[8]=h("span",null,"高级控制台",-1)),M.value?(B(),q("span",Xr,ae(M.value),1)):ie("",!0)])):ie("",!0),ve(h("section",{class:be(["cesium-tool-panel",{compact:_.value}]),"aria-label":"Cesium 高级控制台"},[h("header",Vr,[h("div",Yr,[h("span",jr,[Fe(K(St),{size:18,"stroke-width":"2"})]),h("span",Zr,[O[9]||(O[9]=h("span",{class:"panel-title"},"3D 高级控制台",-1)),h("span",Kr,ae(i.value)+" / "+ae(f.value),1)])]),h("div",Qr,[h("button",{class:"icon-btn",type:"button",title:_.value?"切换为舒展布局":"切换为紧凑布局",onClick:O[1]||(O[1]=F=>_.value=!_.value)},[Fe(K(mr),{size:16,"stroke-width":"2"})],8,Jr),e.embedded?ie("",!0):(B(),q("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:O[2]||(O[2]=F=>m(!1))},[Fe(K(pr),{size:17,"stroke-width":"2"})]))])]),h("nav",en,[(B(),q(Ae,null,Ge(D,F=>h("button",{key:F.id,class:be(["tab-btn",{active:u.value===F.id}]),type:"button","aria-pressed":u.value===F.id,onClick:fe=>u.value=F.id},[(B(),Ve(tt(F.icon),{size:15,"stroke-width":"2"})),h("span",null,ae(F.label),1)],10,tn)),64))]),h("div",rn,[ve(h("section",nn,[h("div",an,[h("div",on,[O[10]||(O[10]=h("span",{class:"overview-label"},"地图源",-1)),h("strong",null,ae(i.value),1)]),h("div",sn,[O[11]||(O[11]=h("span",{class:"overview-label"},"地形",-1)),h("strong",null,ae(f.value),1)]),h("div",ln,[O[12]||(O[12]=h("span",{class:"overview-label"},"模块",-1)),h("strong",null,ae(M.value)+"/"+ae(b.value.length),1)])]),p.value.length?(B(),q("div",cn,[(B(!0),q(Ae,null,Ge(p.value,F=>(B(),q("button",{key:F.id,class:be(["tool-action",[F.variant||"default",{active:F.active}]]),disabled:F.disabled,type:"button",onClick:fe=>he(k.value.id,F.id)},[(B(),Ve(tt(se(k.value.id,F.id)),{size:15,"stroke-width":"2"})),Rt(" "+ae(F.label),1)],10,un))),128))])):(B(),q("div",dn," 暂无场景快捷操作 "))],512),[[st,u.value==="scene"]]),ve(h("section",hn,[e.basemapOptions.length?(B(),q("div",{key:0,class:be(["option-group",{expanded:L("basemap")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":L("basemap"),onClick:O[3]||(O[3]=F=>C("basemap"))},[h("span",mn,[Fe(K(kt),{size:16,"stroke-width":"2"}),O[13]||(O[13]=h("span",null,"底图源",-1))]),h("span",pn,[h("span",null,ae(i.value),1),Fe(K(mt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,fn),L("basemap")?(B(),q("div",gn,[h("div",vn,[(B(!0),q(Ae,null,Ge(e.basemapOptions,F=>(B(),q("button",{key:F.value,class:be(["option-card",{active:F.value===e.activeBasemap}]),type:"button",disabled:F.disabled,"aria-pressed":F.value===e.activeBasemap,title:F.description||F.label,onClick:fe=>j(F)},[h("span",null,ae(F.label),1),F.value===e.activeBasemap?(B(),Ve(K(It),{key:0,size:15,"stroke-width":"2.4"})):ie("",!0)],10,yn))),128))]),h("form",{class:"custom-basemap-editor",onSubmit:Ct(J,["prevent"])},[h("div",xn,[Fe(K(gr),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),ve(h("input",{"onUpdate:modelValue":O[4]||(O[4]=F=>A.value=F),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[ze,A.value]]),h("button",{class:"custom-basemap-submit",type:"submit",disabled:!A.value.trim(),title:"加载自定义 XYZ"},[Fe(K(vr),{size:14,"stroke-width":"2"}),O[14]||(O[14]=h("span",null,"加载",-1))],8,_n)]),e.customBasemapUrl?(B(),q("div",bn,ae(e.customBasemapUrl),1)):ie("",!0)],32)])):ie("",!0)],2)):ie("",!0),e.terrainOptions.length?(B(),q("div",{key:1,class:be(["option-group",{expanded:L("terrain")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":L("terrain"),onClick:O[5]||(O[5]=F=>C("terrain"))},[h("span",Tn,[Fe(K(Nt),{size:16,"stroke-width":"2"}),O[15]||(O[15]=h("span",null,"地形",-1))]),h("span",wn,[h("span",null,ae(f.value),1),Fe(K(mt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Sn),L("terrain")?(B(),q("div",Mn,[h("div",Ln,[(B(!0),q(Ae,null,Ge(e.terrainOptions,F=>(B(),q("button",{key:F.value,class:be(["option-card",{active:F.value===e.activeTerrain}]),type:"button","aria-pressed":F.value===e.activeTerrain,title:F.description||F.label,onClick:fe=>I.$emit("update:activeTerrain",F.value)},[h("span",null,ae(F.label),1),F.value===e.activeTerrain?(B(),Ve(K(It),{key:0,size:15,"stroke-width":"2.4"})):ie("",!0)],10,Fn))),128))])])):ie("",!0)],2)):ie("",!0),e.overlayOptions.length?(B(),q("div",{key:2,class:be(["option-group",{expanded:L("overlay")}])},[h("button",{class:"section-head section-toggle",type:"button","aria-expanded":L("overlay"),onClick:O[6]||(O[6]=F=>C("overlay"))},[h("span",En,[Fe(K(Ot),{size:16,"stroke-width":"2"}),O[16]||(O[16]=h("span",null,"叠加层",-1))]),h("span",An,[h("span",null,ae(y.value)+"/"+ae(e.overlayOptions.length),1),Fe(K(mt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Pn),L("overlay")?(B(),q("div",Dn,[h("div",Rn,[(B(!0),q(Ae,null,Ge(e.overlayOptions,F=>(B(),q("button",{key:F.value,class:be(["overlay-row",{active:!!F.active}]),type:"button",disabled:F.disabled,"aria-pressed":!!F.active,title:F.description||F.label,onClick:fe=>Ie(F)},[h("span",kn,[h("span",In,ae(F.label),1),F.description?(B(),q("span",Nn,ae(F.description),1)):ie("",!0)]),h("span",{class:be(["toggle-control",{active:!!F.active}]),"aria-hidden":"true"},[...O[17]||(O[17]=[h("span",{class:"toggle-track"},[h("span",{class:"toggle-thumb"})],-1)])],2)],10,Cn))),128))])])):ie("",!0)],2)):ie("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(B(),q("div",On," 暂无图层配置项 ")):ie("",!0)],512),[[st,u.value==="layers"]]),ve(h("section",Hn,[h("div",zn,[(B(!0),q(Ae,null,Ge(b.value,F=>{var fe,Me;return B(),q("article",{key:F.id,class:be(["module-item",{expanded:E(F.id)}])},[h("button",{class:"module-head",type:"button","aria-expanded":E(F.id),onClick:G=>W(F.id)},[h("span",Un,[(B(),Ve(tt($(F.id)),{size:16,"stroke-width":"2"}))]),h("span",Wn,[h("span",Gn,ae(F.title),1),F.description?(B(),q("span",$n,ae(F.description),1)):ie("",!0)]),h("span",qn,[F.status?(B(),q("span",{key:0,class:be(["module-status",F.statusTone||"neutral"])},ae(F.status),3)):ie("",!0),Fe(K(mt),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Bn),E(F.id)?(B(),q("div",Xn,[(fe=F.actions)!=null&&fe.length?(B(),q("div",Vn,[(B(!0),q(Ae,null,Ge(F.actions,G=>(B(),q("button",{key:G.id,class:be(["tool-action",[G.variant||"default",{active:G.active}]]),disabled:G.disabled,type:"button",onClick:le=>he(F.id,G.id)},[(B(),Ve(tt(se(F.id,G.id)),{size:14,"stroke-width":"2"})),Rt(" "+ae(G.label),1)],10,Yn))),128))])):ie("",!0),(Me=F.controls)!=null&&Me.length?(B(),q("div",jn,[(B(!0),q(Ae,null,Ge(F.controls,G=>(B(),q("label",{key:G.id,class:be(["control-row",`control-${G.type}`])},[h("span",Zn,[h("span",Kn,ae(G.label),1),G.tooltip?(B(),q("span",{key:0,class:"control-help","aria-label":G.tooltip,title:G.tooltip,onClick:O[7]||(O[7]=Ct(()=>{},["prevent","stop"]))}," ? ",8,Qn)):ie("",!0)]),G.type==="range"?(B(),q(Ae,{key:0},[h("input",{class:"control-range",type:"range",min:G.min,max:G.max,step:G.step,value:G.value,disabled:G.disabled,onInput:le=>xe(F.id,G,le.target.value)},null,40,Jn),h("input",{class:"control-number",type:"number",min:G.min,max:G.max,step:G.step,value:G.value,disabled:G.disabled,onInput:le=>xe(F.id,G,le.target.value)},null,40,ei)],64)):G.type==="color"?(B(),q(Ae,{key:1},[h("input",{class:"control-color",type:"color",value:G.value,disabled:G.disabled,onInput:le=>xe(F.id,G,le.target.value)},null,40,ti),h("span",{class:"control-color-swatch",style:ar({backgroundColor:G.value})},null,4)],64)):G.type==="select"?(B(),q("select",{key:2,class:"control-select",value:G.value,disabled:G.disabled,onChange:le=>xe(F.id,G,le.target.value)},[(B(!0),q(Ae,null,Ge(G.options||[],le=>(B(),q("option",{key:le.value,value:le.value},ae(le.label),9,ni))),128))],40,ri)):G.type==="toggle"?(B(),q("button",{key:3,class:be(["toggle-control",{active:!!G.value}]),type:"button","aria-pressed":!!G.value,disabled:G.disabled,onClick:le=>xe(F.id,G,!G.value)},[...O[18]||(O[18]=[h("span",{class:"toggle-track"},[h("span",{class:"toggle-thumb"})],-1)])],10,ii)):ie("",!0),G.displayValue?(B(),q("span",ai,ae(G.displayValue),1)):ie("",!0)],2))),128))])):ie("",!0)])):ie("",!0)],2)}),128))]),b.value.length?ie("",!0):(B(),q("div",oi," 暂无可用功能模块 "))],512),[[st,u.value==="modules"]])])],2),[[st,e.embedded||R.value]])],2))}},li=yt(si,[["__scopeId","data-v-c2b974d5"]]);function ci(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(D){return(D==null?void 0:D._view)||(D==null?void 0:D.view)}function r(D){const i=t(D);if(!(i!=null&&i.passState))throw new Error("Cesium scene passState is unavailable.");return i.passState}function a(D){const i=t(D);return(i==null?void 0:i.frustumCommandsList)||(i==null?void 0:i._frustumCommandsList)||[]}const c=`
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
`,u=`
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
`,_=`
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
`,S=`
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
`;class A{constructor(i){this.commandType=i.commandType,this.geometry=i.geometry,this.attributeLocations=i.attributeLocations,this.primitiveType=i.primitiveType,this.uniformMap=i.uniformMap,this.vertexShaderSource=i.vertexShaderSource,this.fragmentShaderSource=i.fragmentShaderSource,this.rawRenderState=i.rawRenderState,this.framebuffer=i.framebuffer,this.isPostRender=i.isPostRender,this.outputTexture=i.outputTexture,this.autoClear=e.defaultValue(i.autoClear,!1),this.preExecute=i.preExecute,this.modelMatrix=e.defaultValue(i.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(i){switch(this.commandType){case"Draw":{const f=e.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),m=e.ShaderProgram.fromCache({context:i,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),L=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:f,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:m,framebuffer:this.framebuffer,renderState:L,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(i,f){this.geometry=f;const m=e.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=m}update(i){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(i.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&i.commandList.push(this.clearCommand),i.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class R{constructor(){}static loadText(i){const f=new XMLHttpRequest;return f.open("GET",i,!1),f.send(),f.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(i){if(e.defined(i.arrayBufferView)){const m={};m.arrayBufferView=i.arrayBufferView,i.source=m,i.flipY=!1}return new e.Texture(i)}static createDepthFramebuffer(i,f,m){return new e.Framebuffer({context:i,colorTextures:[this.createTexture({context:i,width:f,height:m,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(f*m*4)})],depthRenderbuffer:new e.Renderbuffer({context:i,width:f,height:m,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(i,f,m,L=!1){const C={context:i,colorTextures:[f],destroyAttachments:L};return m&&(C.depthTexture=m),new e.Framebuffer(C)}static createRawRenderState(i){const L={viewport:i.viewport,depthTest:i.depthTest,depthMask:i.depthMask,blending:i.blending};return e.Appearance.getDefaultRenderState(!0,!1,L)}}const y=class y{constructor(i,f={}){if(!i)throw new Error("Cesium Viewer is required");this.viewer=i,this._initConfiguration(f),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(i){this.config={resolution:new e.Cartesian2(i.width||y.DEFAULTS.width,i.height||y.DEFAULTS.height),dimensions:i.dimensions||y.DEFAULTS.dimensions.clone(),heightRange:{min:i.minHeight??y.DEFAULTS.heightRange[0],max:i.maxHeight??y.DEFAULTS.heightRange[1]},baseHeight:i.baseHeight??y.DEFAULTS.baseHeight,fluidParams:i.fluidParams||y.DEFAULTS.fluidParams.clone(),customParams:i.customParams||y.DEFAULTS.customParams.clone(),waterColor:i.waterColor||y.DEFAULTS.waterColor.clone(),lonLat:i.lonLat||[...y.DEFAULTS.lonLat],timeStep:i.timeStep||y.DEFAULTS.timeStep,heightMapSource:i.heightMapSource||y.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(i){const f=Number(i);!Number.isFinite(f)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,f)),this.resetSimulation())}resetSimulation(){var i,f;this._frameCount=0,(f=(i=this.viewer.scene).requestRender)==null||f.call(i)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const i=()=>R.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:i(),B:i(),C:i(),D:i()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(i){if(!(i!=null&&i.arrayBufferView)||!i.width||!i.height)throw new Error("Invalid height map source.");return R.createTexture({context:this.viewer.scene.context,width:i.width,height:i.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:i.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var $,se;const i=this.viewer.scene.context,f=R.createDepthFramebuffer(i,this.config.resolution.x,this.config.resolution.y),m=this.viewer.scene,L=m.frameState,C=r(this.viewer.scene),E=m.camera,W=L.camera,j=C.framebuffer,J=e.BoundingRectangle.clone(C.viewport,new e.BoundingRectangle);let Q=null,te=[];try{C.viewport.x=0,C.viewport.y=0,C.viewport.width=this.config.resolution.x,C.viewport.height=this.config.resolution.y,C.framebuffer=f,m.camera=this.heightMapCamera,L.camera=this.heightMapCamera,L.context.uniformState.updateCamera(this.heightMapCamera),te=this._processHeightMapShaders(),this._renderDepthPrepass(C);const he=R.createTexture({context:i,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return Q=R.createFramebuffer(i,he),this._copyTexture(f.getColorTexture(0),Q),he}finally{this._restoreHeightMapShaders(te),C.framebuffer=j,e.BoundingRectangle.clone(J,C.viewport),m.camera=E,L.camera=W,W&&L.context.uniformState.updateCamera(W),Q&&!(($=Q.isDestroyed)!=null&&$.call(Q))&&Q.destroy(),f&&!((se=f.isDestroyed)!=null&&se.call(f))&&f.destroy()}}_renderDepthPrepass(i){const f=this.viewer.scene.frameState;f.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(L=>L.execute(this.viewer.scene.context,i))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const i={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:d}),this._createComputePass("B",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:u}),this._createComputePass("C",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:_}),this._createComputePass("D",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:S})]}_createComputePass(i,{uniforms:f,shaderSource:m}){return new A({commandType:"Compute",uniformMap:f,fragmentShaderSource:new e.ShaderSource({sources:[c,m]}),geometry:R.getFullscreenQuad(),outputTexture:this.textures[i],preExecute:L=>L.commandToExecute.outputTexture=this.textures[i]})}_createMainRenderPass(){const i=p([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new A({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[c,w]}),geometry:this._createBoxGeometry(),modelMatrix:i,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var i,f,m,L;return(L=(m=(f=(i=t(this.viewer.scene))==null?void 0:i.globeDepth)==null?void 0:f.colorFramebufferManager)==null?void 0:m._colorTextures)==null?void 0:L[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(i=>this.viewer.scene.primitives.add(i)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(i){const f=this.viewer.camera.getPickRay(i);return this.viewer.scene.globe.pick(f,this.viewer.scene)}_createOrthographicCamera(){const i=new e.Camera(this.viewer.scene);i.frustum=new e.OrthographicOffCenterFrustum;const[f,m]=this.config.lonLat,L=e.Cartesian3.fromDegrees(f,m,this.config.baseHeight),C=e.Transforms.eastNorthUpToFixedFrame(L),E=i.frustum;E.near=.01,E.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),E.left=-this.config.dimensions.x/2,E.right=this.config.dimensions.x/2,E.bottom=-this.config.dimensions.y/2,E.top=this.config.dimensions.y/2;const W=e.Matrix4.getColumn(C,2,new e.Cartesian3);e.Cartesian3.negate(W,W);const j=e.Matrix4.getColumn(C,1,new e.Cartesian3),J=e.Matrix4.getColumn(C,0,new e.Cartesian3),Q=e.Cartesian3.multiplyByScalar(W,-E.far,new e.Cartesian3);return i.position=e.Cartesian3.add(L,Q,new e.Cartesian3),i.direction=W,i.up=j,i.right=J,i}destroy(){var i,f;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(m=>{m&&this.viewer.scene.primitives.remove(m)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(m=>{var L;m&&!((L=m.isDestroyed)!=null&&L.call(m))&&m.destroy()}),this.textures={},this._heightMap&&!((f=(i=this._heightMap).isDestroyed)!=null&&f.call(i))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(i,f){const m=this.viewer.scene.context,L=r(this.viewer.scene),C=m.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>i},owner:this}),E=L.framebuffer;L.framebuffer=f,C.execute(m,L),L.framebuffer=E}_getDepthRenderCommands(){var m,L;const i=[],f=a(this.viewer.scene);for(let C=0;C<f.length;++C){const E=f[C],W=(m=E==null?void 0:E.commands)==null?void 0:m[2],j=((L=E==null?void 0:E.indices)==null?void 0:L[2])??(W==null?void 0:W.length)??0;W&&j>0&&i.push(...W.slice(0,j))}return i}_processHeightMapShaders(){const i=[],f=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),m=e.Matrix4.inverse(f,new e.Matrix4),L=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(E=>{var te;if(!((te=E==null?void 0:E.shaderProgram)!=null&&te.fragmentShaderSource)||!E.uniformMap)return;const W=Object.prototype.hasOwnProperty.call(E.uniformMap,"u_inverseEnuMatrix"),j=E.uniformMap.u_inverseEnuMatrix,J=E.shaderProgram,Q=new e.Matrix4;E.uniformMap.u_inverseEnuMatrix=()=>{const $=E.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(m,$,Q)},E.heightMap_ShaderProgram||(E.heightMap_ShaderProgram=this._getDerivedShaderProgram(L.context,E.shaderProgram,"Height_Map")),E.shaderProgram=E.heightMap_ShaderProgram,i.push({command:E,hadInverseUniform:W,originalInverseUniform:j,originalShaderProgram:J})}),i}_restoreHeightMapShaders(i){i.forEach(f=>{const{command:m,hadInverseUniform:L,originalInverseUniform:C,originalShaderProgram:E}=f;m!=null&&m.uniformMap&&(m.shaderProgram=E,L?m.uniformMap.u_inverseEnuMatrix=C:delete m.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(i,f,m){let L=i.shaderCache.getDerivedShaderProgram(f,m);return e.defined(L)||(L=this._createHeightMapShaderProgram(i,f,m)),L}_createHeightMapShaderProgram(i,f,m){const L=this._modifyFragmentShader(f.fragmentShaderSource);return i.shaderCache.createDerivedShaderProgram(f,m,{vertexShaderSource:f.vertexShaderSource,fragmentShaderSource:L,attributeLocations:f._attributeLocations})}_modifyFragmentShader(i){const f=i.sources.map(m=>e.ShaderSource.replaceMain(m,"czm_heightMap_main"));return f.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:f,defines:i.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};Dt(y,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let k=y;const p=(D=[0,0,0],i=[0,0,0],f=[1,1,1])=>{const m=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(i[0]))),L=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(i[1]))),C=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(i[2])));D instanceof e.Cartesian3||(D=e.Cartesian3.fromDegrees(...D));const E=e.Transforms.eastNorthUpToFixedFrame(D);e.Matrix4.multiply(E,m,E),e.Matrix4.multiply(E,L,E),e.Matrix4.multiply(E,C,E);const W=e.Matrix4.fromScale(new e.Cartesian3(...f));return e.Matrix4.multiply(E,W,new e.Matrix4)},b=`
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
    `;function M(){return new e.PostProcessStage({fragmentShader:b})}return{FluidRenderer:k,createSkyEffect:M}}const ui={key:0,class:"fluid-root"},di={class:"fluid-panel"},hi={class:"panel-actions"},fi=["disabled"],mi={key:0,class:"selected-text"},pi={class:"param-list"},gi={class:"param-row"},vi={class:"param-row"},yi={class:"param-row"},xi={key:0,class:"param-row"},_i=["min","max","step"],bi=["min","max","step"],Si={class:"param-row color-row"},Bt=1024,gt=1e4,Ut=1200,Ti=100,wi=.01,Mi=.03,Li=60,Tt=64,Fi=160,Pi=120,Ei=64,Ai=96,Di=8,Ri={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:r}){const a=e,c=r,d=Ft(),u=Y(10),_=Y(20),S=Y(3),w=Y("#0d4fa3"),A=Y(null),R=Y(null),k=Y(null),p=Y(!1),b=Y(!1),M=Y(null),y=Y(null);let D=null,i=null,f=null,m=null,L=null,C=null,E=0;const W=Se(()=>!Number.isFinite(M.value)||!Number.isFinite(y.value)?"":`经度 ${M.value.toFixed(6)} / 纬度 ${y.value.toFixed(6)}`),j=Se(()=>Number.isFinite(R.value)&&Number.isFinite(k.value)),J=Se(()=>{if(!j.value)return 1;const o=Math.abs(k.value-R.value);return Math.max(o/1e3,.01)});Te([u,_,S,w],oe),Te(A,pe),Te(()=>a.params,o=>{te(o||{})},{deep:!0,immediate:!0}),Te([p,b,W,A,R,k],$,{immediate:!0}),fr(()=>{nt(!0)});function Q(){var v,H;const o=(v=a.getViewer)==null?void 0:v.call(a),s=((H=a.getCesium)==null?void 0:H.call(a))||window.Cesium;if(!o||!s)return d.warning("Cesium 场景尚未就绪。"),null;if(!D){const N=ci(s);D=N.FluidRenderer,i=N.createSkyEffect}return{viewer:o,Cesium:s}}function te(o){Number.isFinite(Number(o.threshold))&&(u.value=Number(o.threshold)),Number.isFinite(Number(o.blend))&&(_.value=Number(o.blend)),Number.isFinite(Number(o.lightStrength))&&(S.value=Number(o.lightStrength)),x(o.waterColor)&&(w.value=o.waterColor),Number.isFinite(Number(o.waterLevel))&&(A.value=Number(o.waterLevel))}function $(){c("state-change",{isPicking:p.value,hasFluid:b.value,selectedText:W.value,waterLevel:A.value,waterLevelMin:R.value,waterLevelMax:k.value})}function se(){const o=Q();if(!o)return;const{viewer:s,Cesium:v}=o;je(),Pe(s,v),p.value=!0,f=new v.ScreenSpaceEventHandler(s.scene.canvas),f.setInputAction(H=>{he(s,v,H.position)},v.ScreenSpaceEventType.LEFT_CLICK)}async function he(o,s,v){var ce,me;const H=V(o,v);if(!H){d.warning("未选中可用地形位置。");return}const N=++E;je();const n=s.Cartographic.fromCartesian(H),l=s.Math.toDegrees(n.longitude),T=s.Math.toDegrees(n.latitude),P=Number(n.height),X=Number.isFinite(P)?P:0,ee=new s.Cartesian3(gt,gt,0);tr("正在请求模拟范围高度数据...");try{Ee();const de=Number(u.value)||0,Ce=Number(_.value)||0,He=Number(S.value)||0,ke=await xe(o,s,{lon:l,lat:T,centerHeight:X,dimensions:ee}),_e=De(ke,X),Le=_e.baseHeight,dt=_e.depth,it=Re(_e,X),ht=new s.Cartesian3(gt,gt,dt);if(N!==E)return;R.value=_e.minHeight,k.value=_e.maxHeight,A.value=it,ke||d.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),m=new D(o,{lonLat:[l,T],width:Bt,height:Bt,dimensions:ht,baseHeight:Le,minHeight:_e.minHeight,maxHeight:_e.maxHeight,heightMapSource:ke,waterColor:ue(s,w.value),customParams:new s.Cartesian4(de,Ce,He,10),fluidParams:new s.Cartesian4(.9+He/10*.099,Math.min(1,Ce/50),de/5e4,ge(it,_e))}),M.value=l,y.value=T,b.value=!0,(me=(ce=o.scene).requestRender)==null||me.call(ce),d.success("水体流体已创建。")}catch(de){d.error("水体流体创建失败",de),d.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{rr()}}async function xe(o,s,v){const H=o==null?void 0:o.terrainProvider,N=O(v.dimensions);if(fe(o,s)){const n=F(v.dimensions);try{const l=await Ie(o,s,v,n);if(l)return l}catch{}}if(!H)return null;if(s.EllipsoidTerrainProvider&&H instanceof s.EllipsoidTerrainProvider)return Oe(N);if(typeof s.sampleTerrain!="function"&&typeof s.sampleTerrainMostDetailed!="function")return null;try{return await I(o,s,v,N)}catch(n){if(N<=Tt)throw n;return I(o,s,v,Tt)}}async function Ie(o,s,v,H){var T,P;const N=o==null?void 0:o.scene;if(!N||typeof N.sampleHeightMostDetailed!="function"||N.sampleHeightSupported===!1||s.SceneMode&&N.mode!==s.SceneMode.SCENE3D)return null;(P=(T=o.scene).requestRender)==null||P.call(T),await le(o);const n=Be(s,v,H),l=await N.sampleHeightMostDetailed(n,void 0,Di);return Ye(l||n,{size:H})}async function I(o,s,v,H){const N=Be(s,v,H),n=await Ke(s,o.terrainProvider,N);return Ye(n||N,{size:H})}function O(o){const s=Math.max(Number(o==null?void 0:o.x)||0,Number(o==null?void 0:o.y)||0),v=Math.ceil(s/Li)+1;return Ne(v,Tt,Fi)}function F(o){const s=Math.max(Number(o==null?void 0:o.x)||0,Number(o==null?void 0:o.y)||0),v=Math.ceil(s/Pi)+1;return Ne(v,Ei,Ai)}function fe(o,s){var v;return Me((v=o==null?void 0:o.scene)==null?void 0:v.primitives,s)}function Me(o,s){if(!o||o.show===!1||typeof o.get!="function")return!1;const v=Number(o.length)||0;for(let H=0;H<v;H++){const N=o.get(H);if(G(N,s)||Me(N,s))return!0}return!1}function G(o,s){if(!o||o.show===!1)return!1;const v=s==null?void 0:s.Cesium3DTileset;return v&&o instanceof v?!0:!!o.root&&typeof o.makeStyleDirty=="function"}function le(o){var v;const s=o==null?void 0:o.scene;return(v=s==null?void 0:s.postRender)!=null&&v.addEventListener?new Promise(H=>{var T;let N=null,n=!1;const l=()=>{n||(n=!0,typeof N=="function"&&N(),H())};N=s.postRender.addEventListener(()=>{l()}),setTimeout(l,120),(T=s.requestRender)==null||T.call(s)}):Promise.resolve()}function Ne(o,s,v){return Math.max(s,Math.min(v,Math.round(o)))}function Be(o,{lon:s,lat:v,centerHeight:H,dimensions:N},n){const l=o.Cartesian3.fromDegrees(s,v,H),T=o.Transforms.eastNorthUpToFixedFrame(l),P=[],X=Math.max(1,n-1);for(let ee=0;ee<n;ee++){const me=(.5-ee/X)*N.y;for(let de=0;de<n;de++){const He=(de/X-.5)*N.x,ke=new o.Cartesian3(He,me,0),_e=o.Matrix4.multiplyByPoint(T,ke,new o.Cartesian3);P.push(o.Cartographic.fromCartesian(_e))}}return P}async function Ke(o,s,v){const H=Qe(s);return Number.isInteger(H)&&typeof o.sampleTerrain=="function"?o.sampleTerrain(s,H,v):typeof o.sampleTerrainMostDetailed=="function"?o.sampleTerrainMostDetailed(s,v):o.sampleTerrain(s,10,v)}function Qe(o){const s=Number(o==null?void 0:o._bottomLevel);return Number.isFinite(s)?Math.max(0,s-1):null}function Ye(o,{size:s}){var n;const v=Je(o);if(!v)return null;const H=new Float32Array(s*s),N=new Float32Array(s*s*4);for(let l=0;l<s*s;l++){const T=Number((n=o[l])==null?void 0:n.height);H[l]=Number.isFinite(T)?U(T,v.minHeight,v.maxHeight):Number.NaN}Ue(H,s,v.minHeight);for(let l=0;l<s*s;l++){const T=Number(H[l]),P=l*4;N[P]=Number.isFinite(T)?U(T,v.minHeight,v.maxHeight):v.minHeight,N[P+1]=0,N[P+2]=0,N[P+3]=1}return{width:s,height:s,arrayBufferView:N,minHeight:v.minHeight,maxHeight:v.maxHeight}}function Oe(o){return{width:o,height:o,arrayBufferView:new Float32Array(o*o*4),minHeight:0,maxHeight:0}}function Je(o){let s=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;for(const H of o||[]){const N=Number(H==null?void 0:H.height);Number.isFinite(N)&&(s=Math.min(s,N),v=Math.max(v,N))}return!Number.isFinite(s)||!Number.isFinite(v)?null:{minHeight:s,maxHeight:v}}function Ue(o,s,v){const H=s*2;for(let N=0;N<H;N++){let n=0;for(let l=0;l<s;l++)for(let T=0;T<s;T++){const P=l*s+T;if(Number.isFinite(o[P]))continue;let X=0,ee=0;const ce=[l>0?P-s:-1,l<s-1?P+s:-1,T>0?P-1:-1,T<s-1?P+1:-1];for(const me of ce){if(me<0)continue;const de=Number(o[me]);Number.isFinite(de)&&(X+=de,ee+=1)}ee>0&&(o[P]=X/ee,n+=1)}if(n===0)break}for(let N=0;N<o.length;N++)Number.isFinite(o[N])||(o[N]=v)}function De(o,s){const v=Number(o==null?void 0:o.minHeight),H=Number(o==null?void 0:o.maxHeight);if(Number.isFinite(v)&&Number.isFinite(H)){const l=Number(s),T=Number.isFinite(l)?Math.min(v,H,l):Math.min(v,H),P=Number.isFinite(l)?Math.max(v,H,l):Math.max(v,H),X=Math.max(P-T,wi);return{baseHeight:T,depth:X,minHeight:T,maxHeight:T+X}}const N=Number(s),n=Number.isFinite(N)?N-Ti:0;return{baseHeight:n,depth:Ut,minHeight:n,maxHeight:n+Ut}}function Re(o,s){const v=o.minHeight+o.depth*Mi,H=Number(s),N=Number.isFinite(H)?H:v;return U(N,o.minHeight,o.maxHeight)}function ge(o,s){const v=s.maxHeight-s.minHeight;return!Number.isFinite(v)||v<=0?0:U((o-s.minHeight)/v,0,1)}function Z(){return!Number.isFinite(R.value)||!Number.isFinite(k.value)?null:{minHeight:Math.min(R.value,k.value),maxHeight:Math.max(R.value,k.value)}}function ue(o,s){const v=z(s)||z("#0d4fa3");return new o.Cartesian3(v.red,v.green,v.blue)}function g(){var v;const o=z(w.value),s=(v=m==null?void 0:m.config)==null?void 0:v.waterColor;!o||!s||(s.x=o.red,s.y=o.green,s.z=o.blue)}function x(o){return typeof o=="string"&&/^#[0-9a-f]{6}$/i.test(o)}function z(o){return x(o)?{red:Number.parseInt(o.slice(1,3),16)/255,green:Number.parseInt(o.slice(3,5),16)/255,blue:Number.parseInt(o.slice(5,7),16)/255}:null}function U(o,s,v){return Math.max(s,Math.min(v,o))}function V(o,s){if(!s)return null;if(o.scene.pickPositionSupported&&typeof o.scene.pickPosition=="function"){const H=o.scene.pickPosition(s);if(H)return H}const v=o.camera.getPickRay(s);return v?o.scene.globe.pick(v,o.scene):null}function oe(){var H,N,n;if(!(m!=null&&m.config))return;const o=Number(u.value)||0,s=Number(_.value)||0,v=Number(S.value)||0;m.config.customParams&&(m.config.customParams.x=o,m.config.customParams.y=s,m.config.customParams.z=v),m.config.fluidParams&&(m.config.fluidParams.x=.9+v/10*.099,m.config.fluidParams.y=Math.min(1,s/50),m.config.fluidParams.z=o/5e4),g(),(n=(N=(H=m.viewer)==null?void 0:H.scene)==null?void 0:N.requestRender)==null||n.call(N)}function pe(){var N,n,l,T;if(!((N=m==null?void 0:m.config)!=null&&N.fluidParams))return;const o=Z(),s=Number(A.value);if(!o||!Number.isFinite(s))return;const v=U(s,o.minHeight,o.maxHeight);if(v!==s){A.value=v;return}const H=ge(v,o);typeof m.setInitialWaterLevel=="function"?m.setInitialWaterLevel(H):(m.config.fluidParams.w=H,(T=(l=(n=m.viewer)==null?void 0:n.scene)==null?void 0:l.requestRender)==null||T.call(l))}function Pe(o,s){var v,H;if(!C){const N=o.scene;C={shadows:o.shadows,resolutionScale:o.resolutionScale,msaaSamples:N.msaaSamples,depthTestAgainstTerrain:N.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:N.logarithmicDepthBuffer,highDynamicRange:N.highDynamicRange,fogEnabled:(v=N.fog)==null?void 0:v.enabled,showGroundAtmosphere:N.globe.showGroundAtmosphere,skyAtmosphereShow:(H=N.skyAtmosphere)==null?void 0:H.show,enableLighting:N.globe.enableLighting}}o.shadows=!0,o.resolutionScale=1,o.scene.msaaSamples=4,o.scene.globe.depthTestAgainstTerrain=!0,o.scene.logarithmicDepthBuffer=!0,o.scene.highDynamicRange=!0,o.scene.fog&&(o.scene.fog.enabled=!0),o.scene.globe.showGroundAtmosphere=!0,o.scene.skyAtmosphere&&(o.scene.skyAtmosphere.show=!0),o.scene.globe.enableLighting=!0,!L&&i&&(L=i(s),o.scene.postProcessStages.add(L))}function we(o){if(!o||!C)return;const s=o.scene;o.shadows=C.shadows,o.resolutionScale=C.resolutionScale,C.msaaSamples!==void 0&&(s.msaaSamples=C.msaaSamples),s.globe.depthTestAgainstTerrain=C.depthTestAgainstTerrain,s.logarithmicDepthBuffer=C.logarithmicDepthBuffer,s.highDynamicRange=C.highDynamicRange,s.fog&&C.fogEnabled!==void 0&&(s.fog.enabled=C.fogEnabled),s.globe.showGroundAtmosphere=C.showGroundAtmosphere,s.skyAtmosphere&&C.skyAtmosphereShow!==void 0&&(s.skyAtmosphere.show=C.skyAtmosphereShow),s.globe.enableLighting=C.enableLighting,C=null}function ct(){nt(!1),d.success("水体流体已清除。")}function je(){f&&(f.destroy(),f=null),p.value=!1}function Ee(){if(m){try{m.destroy()}catch{}m=null,b.value=!1}}function nt(o){var v,H,N;const s=(v=a.getViewer)==null?void 0:v.call(a);if(E+=1,je(),Ee(),M.value=null,y.value=null,A.value=null,R.value=null,k.value=null,s&&L){try{s.scene.postProcessStages.remove(L)}catch{}L=null}o&&s&&we(s),(N=(H=s==null?void 0:s.scene)==null?void 0:H.requestRender)==null||N.call(H)}function ut(){nt(!0),c("close")}return t({startPickHeightMap:se,clearFluid:ct}),(o,s)=>e.headless?ie("",!0):(B(),q("div",ui,[h("div",di,[h("div",{class:"panel-head"},[s[9]||(s[9]=h("span",{class:"panel-title"},"水体流体",-1)),h("button",{class:"panel-close",title:"关闭",onClick:ut}," × ")]),h("div",hi,[h("button",{class:be(["action-btn primary",{active:p.value}]),onClick:se},ae(p.value?"等待选点":"捕捉高度图"),3),h("button",{class:"action-btn",disabled:!b.value&&!p.value,onClick:ct}," 清除 ",8,fi)]),W.value?(B(),q("div",mi,ae(W.value),1)):ie("",!0),h("div",pi,[h("label",gi,[s[10]||(s[10]=h("span",null,"阈值",-1)),ve(h("input",{"onUpdate:modelValue":s[0]||(s[0]=v=>u.value=v),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[ze,u.value,void 0,{number:!0}]]),ve(h("input",{"onUpdate:modelValue":s[1]||(s[1]=v=>u.value=v),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[ze,u.value,void 0,{number:!0}]])]),h("label",vi,[s[11]||(s[11]=h("span",null,"混合",-1)),ve(h("input",{"onUpdate:modelValue":s[2]||(s[2]=v=>_.value=v),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[ze,_.value,void 0,{number:!0}]]),ve(h("input",{"onUpdate:modelValue":s[3]||(s[3]=v=>_.value=v),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[ze,_.value,void 0,{number:!0}]])]),h("label",yi,[s[12]||(s[12]=h("span",null,"光强",-1)),ve(h("input",{"onUpdate:modelValue":s[4]||(s[4]=v=>S.value=v),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[ze,S.value,void 0,{number:!0}]]),ve(h("input",{"onUpdate:modelValue":s[5]||(s[5]=v=>S.value=v),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[ze,S.value,void 0,{number:!0}]])]),j.value?(B(),q("label",xi,[s[13]||(s[13]=h("span",null,"水位",-1)),ve(h("input",{"onUpdate:modelValue":s[6]||(s[6]=v=>A.value=v),type:"range",min:R.value,max:k.value,step:J.value},null,8,_i),[[ze,A.value,void 0,{number:!0}]]),ve(h("input",{"onUpdate:modelValue":s[7]||(s[7]=v=>A.value=v),class:"number-input",type:"number",min:R.value,max:k.value,step:J.value},null,8,bi),[[ze,A.value,void 0,{number:!0}]])])):ie("",!0),h("label",Si,[s[14]||(s[14]=h("span",null,"水色",-1)),ve(h("input",{"onUpdate:modelValue":s[8]||(s[8]=v=>w.value=v),class:"color-input",type:"color"},null,512),[[ze,w.value]]),h("span",{class:"color-swatch",style:ar({backgroundColor:w.value})},null,4)])])])]))}},Ci=yt(Ri,[["__scopeId","data-v-17587d9e"]]),Pt="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",ki=`${Pt}Cesium.js`,Ii=`${Pt}Widgets/widgets.css`;async function Ni({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Pt),await Hi(Ii,"cesium-widgets-style"),await Oi(ki,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到");return vt(t,e),t}function vt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function Oi(e,t){return new Promise((r,a)=>{const c=document.getElementById(t);if(c){if(c.getAttribute("data-loaded")==="true"){r();return}c.addEventListener("load",()=>r(),{once:!0}),c.addEventListener("error",()=>a(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const d=document.createElement("script");d.id=t,d.src=e,d.async=!0,d.onload=()=>{d.setAttribute("data-loaded","true"),r()},d.onerror=()=>a(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(d)})}function Hi(e,t){return new Promise((r,a)=>{if(document.getElementById(t)){r();return}const d=document.createElement("link");d.id=t,d.rel="stylesheet",d.href=e,d.onload=()=>r(),d.onerror=()=>a(new Error(`样式加载失败: ${e}`)),document.head.appendChild(d)})}const zi="Asia/Shanghai",Bi="UTC+8",Ui=new Intl.DateTimeFormat("zh-CN",{timeZone:zi,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Wi(e,t){var r,a,c,d,u,_,S;if(!(!e||!(t!=null&&t.JulianDate))){if((r=e.animation)!=null&&r.viewModel&&(e.animation.viewModel.dateFormatter=(...w)=>$i(e,t,...w),e.animation.viewModel.timeFormatter=(...w)=>qi(e,t,...w)),e.timeline){const w=(...A)=>Xi(e,t,...A);e.timeline.makeLabel=w,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=w),(c=(a=e.timeline).updateFromClock)==null||c.call(a),(u=(d=e.timeline).zoomTo)==null||u.call(d,e.clock.startTime,e.clock.stopTime)}(S=(_=e.scene).requestRender)==null||S.call(_)}}function Et(e,t,...r){var _;const a=r.find(Gi)||((_=e==null?void 0:e.clock)==null?void 0:_.currentTime);if(!a)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const c=t.JulianDate.toDate(a),d=Ui.formatToParts(c),u=Object.fromEntries(d.filter(({type:S})=>S!=="literal").map(({type:S,value:w})=>[S,w]));return{year:u.year||"0000",month:u.month||"01",day:u.day||"01",hour:u.hour||"00",minute:u.minute||"00",second:u.second||"00"}}function Gi(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function $i(e,t,...r){const{year:a,month:c,day:d}=Et(e,t,...r);return`${a}-${c}-${d}`}function qi(e,t,...r){const{hour:a,minute:c,second:d}=Et(e,t,...r);return`${a}:${c}:${d} ${Bi}`}function Xi(e,t,...r){const{month:a,day:c,hour:d,minute:u}=Et(e,t,...r);return`${a}-${c} ${d}:${u}`}function Vi({getViewer:e}){let t=null,r=null;function a(){var _;const u=e==null?void 0:e();if(u&&((_=u._cesiumWidget)!=null&&_._creditContainer&&(u._cesiumWidget._creditContainer.style.display="none"),c(),t=setInterval(()=>{const S=document.querySelector(".cesium-credit-container");S&&S.innerHTML.length>0&&(S.innerHTML="",S.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const S=document.createElement("style");S.id="cesium-credit-override",S.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(S),r=S}}function c(){var S;const u=e==null?void 0:e();if(!u)return;(S=u._cesiumWidget)!=null&&S._creditContainer&&(u._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",u._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(w=>{w.style.cssText="display: none !important; visibility: hidden !important;",w.innerHTML=""}),u.scene&&u.scene.frameState&&u.scene.frameState.creditDisplay&&(u.scene.frameState.creditDisplay.hasCredits=()=>!1,u.scene.frameState.creditDisplay.destroy=()=>{})}function d(){t&&(clearInterval(t),t=null),r&&(r.remove(),r=null)}return{installCreditHider:a,cleanupCreditHider:d}}const Yi=500,Lt=48,ji=160,Wt=48;function Zi({getViewer:e}){const t=Y(null),r=Y([]),a=Se(()=>Number.isFinite(t.value)?String(t.value):"--"),c=Se(()=>Ki(r.value));let d=null,u=0,_=wt();function S(){var R;const A=(R=e==null?void 0:e())==null?void 0:R.scene;A!=null&&A.preRender&&(w(),t.value=null,r.value=[],u=0,_=wt(),d=A.preRender.addEventListener(()=>{u+=1;const k=wt(),p=k-_;if(p<Yi)return;const b=Math.round(u*1e3/p);t.value=b,r.value=[...r.value.slice(1-Lt),b],u=0,_=k}))}function w(){typeof d=="function"&&(d(),d=null)}return{frameRateDisplay:a,frameRateLinePoints:c,setupFrameRateMonitor:S,cleanupFrameRateMonitor:w}}function wt(){return typeof performance<"u"?performance.now():Date.now()}function Ki(e){if(!e.length)return"";const t=Math.max(60,...e),r=ji/(Lt-1),a=Lt-e.length;return e.map((c,d)=>{const u=(a+d)*r,_=Math.max(0,Math.min(c/t,1)),S=Wt-_*Wt;return`${u.toFixed(1)},${S.toFixed(1)}`}).join(" ")}const Mt="经度: --, 纬度: --, 海拔: --米";function Qi({getViewer:e,getCesium:t}){let r=null,a=null,c=null;const d=Y("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function u(){const k=e==null?void 0:e(),p=t==null?void 0:t();!k||!p||(R(),a=k.scene.canvas,r=new p.ScreenSpaceEventHandler(a),c=()=>{d.value=Mt},a.addEventListener("mouseleave",c),r.setInputAction(b=>{_(b.endPosition,k,p)},p.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(b=>{const M=b.endPosition,y=b.startPosition;if(!p.defined(k.terrainProvider))return;const D=k.scene.globe.ellipsoid;if(!k.camera.pickEllipsoid(y,D)){const f=k.camera;f.rotate(p.Cartesian3.UNIT_X,-.002*(M.y-y.y)),f.rotate(p.Cartesian3.UNIT_Y,-.002*(M.x-y.x))}},p.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_UP))}function _(k,p,b){const M=S(k,p,b);if(!M){d.value=Mt;return}const y=b.Cartographic.fromCartesian(M);if(!y||!Number.isFinite(y.longitude)||!Number.isFinite(y.latitude)){d.value=Mt;return}const D=b.Math.toDegrees(y.longitude).toFixed(6),i=b.Math.toDegrees(y.latitude).toFixed(6),f=(Number.isFinite(y.height)?y.height:0).toFixed(2);d.value=`经度: ${D}, 纬度: ${i}, 海拔: ${f}米`}function S(k,p,b){if(!k)return null;const M=p.scene,y=w(k,M,b);if(y)return y;const D=p.camera.getPickRay(k);if(D){const f=M.globe.pick(D,M);if(A(f))return f}const i=p.camera.pickEllipsoid(k,M.globe.ellipsoid);return A(i)?i:null}function w(k,p,b){if(!p.pickPositionSupported||typeof p.pickPosition!="function")return null;const M=typeof p.pick=="function"?p.pick(k):null;if(!b.defined(M))return null;const y=p.pickPosition(k);return A(y)?y:null}function A(k){return!!k&&Number.isFinite(k.x)&&Number.isFinite(k.y)&&Number.isFinite(k.z)}function R(){c&&a&&(a.removeEventListener("mouseleave",c),c=null),a=null,r&&(r.destroy(),r=null)}return{coordinateDisplay:d,setupInteractions:u,cleanupInteractions:R}}function Ji(e,t=""){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r??t}catch{return t}}function ea(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function et(e,t){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r==null?t:r==="true"}catch{return t}}function lt(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Gt(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:r,Ellipsoid:a,Resource:c,HeightmapTerrainData:d,Rectangle:u,TileAvailability:_,CustomHeightmapTerrainProvider:S}=e;function w(p,b,M,y,D,i){const f=p.tileXYToRectangle(M,y,D);return t(u.intersection(f,b,i))}function A(p){const b=[[[0,0,1,0]]],M=new _(p.tilingScheme,19);for(let y=0;y<b.length;y++){const D=b[y];for(let i=0;i<D.length;i++){const f=D[i];M.addAvailableTileRange(y,f[0],f[1],f[2],f[3])}}return M}function R(p,b,M,y,D){const i=new d({buffer:p._transformBuffer(b),width:p._width,height:p._height,childTileMask:p._getChildTileMask(y,D,M),structure:p._terrainDataStructure});return i._skirtHeight=6e3,p.availability.addAvailableTileRange(M,y,D,y,D),i}class k extends S{constructor(b={}){if(super({...b,ellipsoid:a.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(b.url))throw new r("options.url is required.");this._dataType=b.dataType??"int16",this._url=b.url,this._subdomains=b.subdomains,this._token=b.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=A(this)}get availability(){return this._availability}requestTileGeometry(b,M,y,D){if(y>=this._bottomLevel)return Promise.reject(new Error(`Level ${y} is outside supported range.`));if(y<this._topLevel)return Promise.resolve(new d({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(b,M,y),structure:this._terrainDataStructure}));let i=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const m=this._subdomains[(b+M)%this._subdomains.length];i=i.replace("{s}",m)}i=i.replace("{token}",this._token).replace("{x}",b).replace("{y}",M).replace("{z}",y+1);const f=c.fetchArrayBuffer({url:i,request:D});if(f)return f.then(m=>m.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Mr.inflate(m)).then(m=>R(this,m,y,b,M))}getTileDataAvailable(b,M,y){return y<this._bottomLevel}_transformBuffer(b){let M=2;this._dataType==="float"&&(M=4);const y=b;if(y.length!==22500*M)return null;const D=new ArrayBuffer(M),i=new DataView(D),f=this._width,m=this._height,L=new Uint8Array(f*m*4);for(let C=0;C<m;C++)for(let E=0;E<f;E++){const W=Math.floor(149*C/(m-1)),j=Math.floor(149*E/(f-1)),J=M*(150*W+j);let Q;M===4?(i.setInt8(0,y[J]),i.setInt8(1,y[J+1]),i.setInt8(2,y[J+2]),i.setInt8(3,y[J+3]),Q=i.getFloat32(0,!0)):Q=y[J]+256*y[J+1],(Q>1e4||Q<-2e3)&&(Q=0);const te=(Q+1e3)/.001,$=4*(C*f+E);L[$]=te/65536,L[$+1]=(te-256*L[$]*256)/256,L[$+2]=te-256*L[$]*256-256*L[$+1],L[$+3]=255}return L}_getVHeightBuffer(){let b=this._vHeightBuffer;if(!t(b)){b=new Uint8ClampedArray(this._width*this._height*4);for(let M=0;M<this._width*this._height*4;)b[M++]=15,b[M++]=66,b[M++]=64,b[M++]=255;this._vHeightBuffer=b}return b}_getChildTileMask(b,M,y){const D=new u,i=this._tilingScheme,f=this._rectangles,m=i.tileXYToRectangle(b,M,y);let L=0;for(let C=0;C<f.length&&L!==15;C++){const E=f[C];if(E.maxLevel<=y)continue;const W=E.rectangle,j=u.intersection(W,m,D);t(j)&&(w(i,W,2*b,2*M,y+1,D)&&(L|=4),w(i,W,2*b+1,2*M,y+1,D)&&(L|=8),w(i,W,2*b,2*M+1,y+1,D)&&(L|=1),w(i,W,2*b+1,2*M+1,y+1,D)&&(L|=2))}return L}}return k}const at=["0","1","2","3","4","5","6","7"],ot="https://t{s}.tianditu.gov.cn/",ta="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",ra=96188,Xe="custom-xyz",$t="cesium_custom_xyz_basemap_url",na="cesium_tdt_label_layer_visible",qt="cesium_tdt_boundary_layer_visible",Xt="cesium_tdt_text_label_layer_visible",Vt="cesium_osm_buildings_visible",Yt="cesium_google_photorealistic_3d_tiles_visible",jt=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:Xe,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],Zt=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function ia({getViewer:e,getCesium:t,message:r,backendBaseUrl:a,tiandituToken:c,cesiumIonToken:d}){let u=null,_=null,S=null,w=null,A=0,R=null,k=null,p=0,b=0,M=[];const y=()=>Kt(c),D=()=>Kt(d),i=[],f=Y([]),m=new Map,L=new Map,C=new Map,E=new Map,W=Y("tianditu"),j=Y("tianditu"),J=Y(Ji($t,"")),Q=et(na,!0),te=Y(et(qt,Q)),$=Y(et(Xt,Q)),se=Y(et(Vt,!1)),he=Y(et(Yt,!1)),xe=Se(()=>[...jt.map(n=>n.value!==Xe?n:{...n,description:J.value?J.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!J.value}),...f.value]),Ie=Se(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:te.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:$.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:se.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:he.value}]);Te(W,n=>{!(e!=null&&e())||!(t!=null&&t())||we(n)}),Te(J,n=>{ea($t,n)}),Te(j,async n=>{!(e!=null&&e())||!(t!=null&&t())||await je(n)}),Te(te,n=>{lt(qt,n),Re()}),Te($,n=>{lt(Xt,n),Re()}),Te(se,n=>{lt(Vt,n),x()}),Te(he,n=>{lt(Yt,n),z()});function I(){const n=t==null?void 0:t();if(!n)return[];m.clear(),L.clear();const l=jt.map(P=>{const X=new n.ProviderViewModel({name:P.label,tooltip:la(P),category:"项目底图",iconUrl:er(P.value==="google"?"#5ea1ff":P.value===Xe?"#f59e0b":"#37d67a",P.value==="google"?"G":P.value===Xe?"XY":"TD"),creationFunction:()=>G(P.value)});return m.set(P.value,X),L.set(X,P.value),X}),T=Me();return f.value=T.map((P,X)=>{const ee=String((P==null?void 0:P.name)||`官方底图 ${X+1}`).trim(),ce=da(ee,X);return m.set(ce,P),L.set(P,ce),{value:ce,label:`官方 · ${ee}`,description:String((P==null?void 0:P.tooltip)||ee),source:"official"}}),[...l,...T]}function O(){const n=t==null?void 0:t();return n?(C.clear(),E.clear(),Zt.map(l=>{const T=new n.ProviderViewModel({name:l.label,tooltip:l.description||l.label,category:"项目地形",iconUrl:er(aa(l.value),oa(l.value)),creationFunction:()=>nt(l.value)});return C.set(l.value,T),E.set(T,l.value),T})):[]}function F(n=[]){return m.get(W.value)||n[0]}function fe(n=[]){return C.get(j.value)||n[0]}function Me(){const n=t==null?void 0:t();if(typeof(n==null?void 0:n.createDefaultImageryProviderViewModels)!="function")return[];try{return n.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function G(n){return n==="google"?Ne():n===Xe?Be():le()}function le(){const n=t==null?void 0:t();return[new n.UrlTemplateImageryProvider({url:`${ot}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${y()}`,subdomains:at,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:18})]}function Ne(){const n=t==null?void 0:t();return[new n.UrlTemplateImageryProvider({url:`${a}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:20})]}function Be(){const n=t==null?void 0:t(),l=Jt(J.value);return l.valid?[new n.UrlTemplateImageryProvider({url:l.url,subdomains:l.subdomains,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(r.warning(l.message,{closable:!0}),le())}function Ke(){const n=t==null?void 0:t();return new n.UrlTemplateImageryProvider({url:`${ot}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${y()}`,subdomains:at,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:10})}function Qe(){const n=t==null?void 0:t();return new n.UrlTemplateImageryProvider({url:`${ot}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${y()}`,subdomains:at,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:18})}function Ye(){var me,de,Ce,He,ke;Oe();const n=t==null?void 0:t(),l=(de=(me=e==null?void 0:e())==null?void 0:me.baseLayerPicker)==null?void 0:de.viewModel;if(!l||!((Ce=n==null?void 0:n.knockout)!=null&&Ce.getObservable))return;const T=n.knockout.getObservable(l,"selectedImagery"),P=n.knockout.getObservable(l,"selectedTerrain"),X=[],ee=(He=T==null?void 0:T.subscribe)==null?void 0:He.call(T,_e=>{const Le=L.get(_e);Le&&(W.value!==Le&&(W.value=Le),De())}),ce=(ke=P==null?void 0:P.subscribe)==null?void 0:ke.call(P,_e=>{const Le=E.get(_e);Le&&(j.value!==Le&&(j.value=Le),Ee(Le))});ee&&X.push(ee),ce&&X.push(ce),M=X}function Oe(){M.forEach(n=>{var l;return(l=n==null?void 0:n.dispose)==null?void 0:l.call(n)}),M=[]}function Je(){return De(),!0}function Ue(){const n=e==null?void 0:e();if(n!=null&&n.imageryLayers)for(;i.length;){const l=i.pop();try{n.imageryLayers.remove(l,!0)}catch{}}}function De(){var n,l,T;Re(),x(),z(),(T=(l=(n=e==null?void 0:e())==null?void 0:n.scene)==null?void 0:l.requestRender)==null||T.call(l)}function Re(){var l,T;const n=e==null?void 0:e();!n||!(t!=null&&t())||(te.value?ge():ue(),$.value?Z():g(),(T=(l=n.scene).requestRender)==null||T.call(l))}function ge(){var l,T,P,X;const n=e==null?void 0:e();if(!(n!=null&&n.imageryLayers)||u)return u&&((T=(l=n==null?void 0:n.imageryLayers)==null?void 0:l.raiseToTop)==null||T.call(l,u)),u;try{return u=n.imageryLayers.addImageryProvider(Ke()),(X=(P=n.imageryLayers).raiseToTop)==null||X.call(P,u),u}catch(ee){return r.error("天地图国界线图层加载失败",ee),null}}function Z(){var l,T,P,X;const n=e==null?void 0:e();if(!(n!=null&&n.imageryLayers)||_)return _&&((T=(l=n==null?void 0:n.imageryLayers)==null?void 0:l.raiseToTop)==null||T.call(l,_)),_;try{return _=n.imageryLayers.addImageryProvider(Qe()),(X=(P=n.imageryLayers).raiseToTop)==null||X.call(P,_),_}catch(ee){return r.error("天地图文字标注图层加载失败",ee),null}}function ue(){const n=e==null?void 0:e();if(!(!u||!(n!=null&&n.imageryLayers))){try{n.imageryLayers.remove(u,!0)}catch{}u=null}}function g(){const n=e==null?void 0:e();if(!(!_||!(n!=null&&n.imageryLayers))){try{n.imageryLayers.remove(_,!0)}catch{}_=null}}async function x(){var l,T,P;const n=e==null?void 0:e();!((l=n==null?void 0:n.scene)!=null&&l.primitives)||!(t!=null&&t())||(se.value?await oe():pe(),(P=(T=n.scene).requestRender)==null||P.call(T))}async function z(){var l,T,P;const n=e==null?void 0:e();!((l=n==null?void 0:n.scene)!=null&&l.primitives)||!(t!=null&&t())||(he.value?await U():V(),(P=(T=n.scene).requestRender)==null||P.call(T))}async function U(){var P,X,ee;const n=e==null?void 0:e(),l=t==null?void 0:t();if(!((P=n==null?void 0:n.scene)!=null&&P.primitives))return null;if(R)return n.scene.globe.show=!1,R;if(k)return k;if(typeof(l==null?void 0:l.createGooglePhotorealistic3DTileset)!="function")return r.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),he.value=!1,null;const T=++p;vt(l,D()),k=l.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const ce=await k;return T!==p||!he.value?(Qt(ce),null):(R=n.scene.primitives.add(ce),n.scene.globe.show=!1,n.scene.skyAtmosphere.show=!0,(ee=(X=n.scene).requestRender)==null||ee.call(X),R)}catch(ce){return T!==p||(he.value=!1,r.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),r.error("Google Photorealistic 3D Tiles 初始化失败",ce)),null}finally{T===p&&(k=null)}}function V(){var l,T,P;const n=e==null?void 0:e();if(p+=1,k=null,!R||!((l=n==null?void 0:n.scene)!=null&&l.primitives)){(T=n==null?void 0:n.scene)!=null&&T.globe&&(n.scene.globe.show=!0);return}try{n.scene.primitives.remove(R)}catch{}R=null,(P=n==null?void 0:n.scene)!=null&&P.globe&&(n.scene.globe.show=!0)}async function oe(){var P,X,ee,ce;const n=e==null?void 0:e(),l=t==null?void 0:t();if(!((P=n==null?void 0:n.scene)!=null&&P.primitives)||S)return S;if(w)return w;if(typeof((X=l==null?void 0:l.Cesium3DTileset)==null?void 0:X.fromIonAssetId)!="function"&&typeof(l==null?void 0:l.createOsmBuildingsAsync)!="function")return r.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),se.value=!1,null;const T=++A;vt(l,D()),await Pe(),w=sa(l,{maximumScreenSpaceError:8});try{const me=await w;return T!==A||!se.value?(Qt(me),null):(S=n.scene.primitives.add(me),(ce=(ee=n.scene).requestRender)==null||ce.call(ee),S)}catch(me){return T!==A||(se.value=!1,r.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),r.error("Cesium OSM 建筑图层初始化失败",me)),null}finally{T===A&&(w=null)}}function pe(){var l,T,P;const n=e==null?void 0:e();if(A+=1,w=null,!(!S||!((l=n==null?void 0:n.scene)!=null&&l.primitives))){try{n.scene.primitives.remove(S)}catch{}S=null,(P=(T=n.scene).requestRender)==null||P.call(T)}}async function Pe(){if(j.value==="cesiumWorld")return!0;j.value="cesiumWorld";const n=await je("cesiumWorld");return n||r.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),n}function we(n,l={}){var ee,ce,me;const T=e==null?void 0:e();if(!T||!(t!=null&&t()))return!1;const P=(ee=T.baseLayerPicker)==null?void 0:ee.viewModel,X=m.get(n);if(P&&X){if(Ue(),l.forceReload&&P.selectedImagery===X){const de=m.get("tianditu");de&&de!==X&&(P.selectedImagery=de)}return P.selectedImagery!==X&&(P.selectedImagery=X),De(),!0}try{return Ue(),G(n).forEach(Ce=>{i.push(T.imageryLayers.addImageryProvider(Ce))}),Re(),(me=(ce=T.scene).requestRender)==null||me.call(ce),!0}catch(de){return r.error("地图源切换失败",de),!1}}function ct(){return je(j.value)}async function je(n){var me,de,Ce,He,ke,_e,Le,dt,it,ht,At;const l=e==null?void 0:e(),T=t==null?void 0:t();if(!l||!T)return!1;const P=(me=l.baseLayerPicker)==null?void 0:me.viewModel,X=C.get(n);if(P&&X)return P.selectedTerrain!==X&&(P.selectedTerrain=X),Ee(n),(Ce=(de=l.scene).requestRender)==null||Ce.call(de),!0;const ee=++b;if(n==="ellipsoid")return l.terrainProvider=new T.EllipsoidTerrainProvider,Ee(n),(ke=(He=l.scene).requestRender)==null||ke.call(He),!0;if(n==="cesiumWorld")try{const We=await ut();return ee!==b?!1:(l.terrainProvider=We,Ee(n),(Le=(_e=l.scene).requestRender)==null||Le.call(_e),!0)}catch(We){return ee!==b||(l.terrainProvider=new T.EllipsoidTerrainProvider,Ee("ellipsoid"),r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",We)),!1}if(n==="arcgisWorld")try{const We=await o();return ee!==b?!1:(l.terrainProvider=We,Ee(n),(it=(dt=l.scene).requestRender)==null||it.call(dt),!0)}catch(We){return ee!==b||(l.terrainProvider=new T.EllipsoidTerrainProvider,Ee("ellipsoid"),r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",We)),!1}const ce=Gt(T);try{return l.terrainProvider=new ce({url:`${ot}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:at,token:y()}),Ee(n),(At=(ht=l.scene).requestRender)==null||At.call(ht),!0}catch(We){return l.terrainProvider=new T.EllipsoidTerrainProvider,Ee("ellipsoid"),r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",We),!1}}function Ee(n){var T;const l=e==null?void 0:e();(T=l==null?void 0:l.scene)!=null&&T.globe&&(l.scene.globe.depthTestAgainstTerrain=n!=="ellipsoid")}function nt(n){const l=t==null?void 0:t();if(n==="ellipsoid")return new l.EllipsoidTerrainProvider;if(n==="cesiumWorld")return ut().catch(P=>(r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",P),s(n,"ellipsoid"),new l.EllipsoidTerrainProvider));if(n==="arcgisWorld")return o().catch(P=>(r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",P),s(n,"ellipsoid"),new l.EllipsoidTerrainProvider));const T=Gt(l);try{return new T({url:`${ot}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:at,token:y()})}catch(P){return r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",P),new l.EllipsoidTerrainProvider}}async function ut(){var T,P;const n=t==null?void 0:t();vt(n,D());const l={requestWaterMask:!1,requestVertexNormals:!0};if(typeof n.createWorldTerrainAsync=="function")return n.createWorldTerrainAsync(l);if(typeof n.createWorldTerrain=="function")return n.createWorldTerrain(l);if(typeof((T=n.CesiumTerrainProvider)==null?void 0:T.fromIonAssetId)=="function")return n.CesiumTerrainProvider.fromIonAssetId(1,l);if((P=n.IonResource)!=null&&P.fromAssetId&&n.CesiumTerrainProvider){const X=await n.IonResource.fromAssetId(1);return new n.CesiumTerrainProvider({url:X,...l})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function o(){var l;const n=t==null?void 0:t();if(typeof((l=n==null?void 0:n.ArcGISTiledElevationTerrainProvider)==null?void 0:l.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return n.ArcGISTiledElevationTerrainProvider.fromUrl(ta)}function s(n,l){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{j.value===n&&(j.value=l)},0)}function v({overlayId:n,value:l}){if(n==="tdt-boundaries"){te.value=!!l;return}if(n==="tdt-text-labels"){$.value=!!l;return}if(n==="cesium-osm-buildings"){se.value=!!l;return}n==="google-photorealistic-3d-tiles"&&(he.value=!!l)}function H({url:n}){const l=String(n||"").trim(),T=Jt(l);if(!T.valid){r.warning(T.message,{closable:!0});return}if(J.value=l,W.value===Xe){we(Xe,{forceReload:!0})&&r.success("已加载自定义 XYZ 图源");return}W.value=Xe,r.success("已切换到自定义 XYZ 图源")}function N(){Ue(),ue(),g(),pe(),V(),Oe()}return{activeBasemap:W,activeTerrain:j,customXyzBasemapUrl:J,basemapOptions:xe,terrainOptions:Zt,overlayOptions:Ie,createImageryProviderViewModels:I,createTerrainProviderViewModels:O,getSelectedImageryProviderViewModel:F,getSelectedTerrainProviderViewModel:fe,bindLayerPickerStateSync:Ye,addBaseImageryLayers:Je,initCustomTerrain:ct,applyBasemap:we,applyTerrain:je,handleOverlayToggle:v,handleCustomBasemapSubmit:H,cleanupLayers:N}}function aa(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function oa(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Kt(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function Qt(e){var t,r;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(r=e.destroy)==null||r.call(e)}catch{}}async function sa(e,t={}){var r;if(typeof((r=e==null?void 0:e.Cesium3DTileset)==null?void 0:r.fromIonAssetId)=="function"){const a=await e.Cesium3DTileset.fromIonAssetId(ra,t);return!a.style&&typeof e.Cesium3DTileStyle=="function"&&(a.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),a}return e.createOsmBuildingsAsync(t)}function la(e){return e.value!==Xe?e.description||e.label:`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`}function Jt(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let r=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const a=r.match(/\{([a-z0-9])-([a-z0-9])\}/i);let c=[];return a?(c=ca(a[1],a[2]),r=r.replace(a[0],"{s}")):/\{s\}/i.test(r)&&(c=["a","b","c"]),!/\{z\}/.test(r)||!/\{x\}/.test(r)||!/\{y\}/.test(r)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:r,subdomains:c}:ua(r)?{valid:!0,message:"",url:r,subdomains:c}:{valid:!1,message:"URL 格式不合法",url:r,subdomains:c}}function ca(e,t){const r=String(e||"").charCodeAt(0),a=String(t||"").charCodeAt(0);if(!Number.isFinite(r)||!Number.isFinite(a))return[];const c=r<=a?1:-1,d=[];for(let u=r;c>0?u<=a:u>=a;u+=c)d.push(String.fromCharCode(u));return d}function ua(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",r=new URL(e,t);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}function da(e,t){const r=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${r||"basemap"}`}function er(e,t){const r=String(t||"").replace(/[<>&"']/g,"").slice(0,2),a=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${r}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(a)}`}function ha({getViewer:e,getCesium:t,message:r}){function a(u){const _=e==null?void 0:e(),S=t==null?void 0:t();if(!_||!S)return;const w=typeof u=="number"?u:2;_.camera.flyTo({destination:S.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-S.Math.PI_OVER_TWO,roll:0},duration:w})}function c(){const u=e==null?void 0:e(),_=t==null?void 0:t();!u||!_||u.camera.flyTo({destination:_.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:_.Math.toRadians(0),pitch:_.Math.toRadians(-25),roll:0},duration:3})}async function d(){const u=e==null?void 0:e(),_=t==null?void 0:t();if(!(!u||!_))try{const S=await _.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");u.scene.primitives.add(S),u.flyTo(S,{duration:3,offset:new _.HeadingPitchRange(_.Math.toRadians(0),_.Math.toRadians(-25),S.boundingSphere.radius*2.5)})}catch(S){r.error(`加载模型失败: ${S}`),r.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:a,flyToEverest:c,loadCustomTileset:d}}const fa="cesium_tool_panel_open";function ma({fluidPanelRef:e,sceneActions:t={},wind:r={},panelStorageKey:a=fa}={}){const c=Y(et(a,!0)),d=Y({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),u=Y({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),_=Y({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),S=Se(()=>{var p,b,M,y,D,i;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:d.value.atmosphere||d.value.fog?"启用":"关闭",statusTone:d.value.atmosphere||d.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:d.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:d.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:d.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:d.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(p=r.wind2D)!=null&&p.value?"已加载":"未加载",statusTone:(b=r.wind2D)!=null&&b.value?"success":"neutral",actions:[{id:"load",label:(M=r.wind2D)!=null&&M.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((y=r.wind2D)!=null&&y.value)}],controls:pa((D=r.windParams)==null?void 0:D.value,!!((i=r.wind2D)!=null&&i.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:_.value.isPicking?"等待选点":_.value.hasFluid?"已创建":"未创建",statusTone:_.value.isPicking?"warning":_.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:_.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:_.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!_.value.hasFluid&&!_.value.isPicking}],controls:ga(u.value,_.value)}]});Te(c,p=>{lt(a,p)});function w({moduleId:p,actionId:b}){var y,D;(D=(y={scene:{home:()=>{var i;return(i=t.flyToHome)==null?void 0:i.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:r.loadSimulatedWind,clear:r.clearWind2D},fluid:{pick:()=>{var i,f;return(f=(i=e==null?void 0:e.value)==null?void 0:i.startPickHeightMap)==null?void 0:f.call(i)},clear:()=>{var i,f;return(f=(i=e==null?void 0:e.value)==null?void 0:i.clearFluid)==null?void 0:f.call(i)}}}[p])==null?void 0:y[b])==null||D.call(y)}function A({moduleId:p,controlId:b,value:M}){var y,D;if(p==="effects"&&b in d.value){d.value={...d.value,[b]:!!M};return}if(p==="wind"&&b in(((y=r.windParams)==null?void 0:y.value)||{})){(D=r.setWindParam)==null||D.call(r,b,M);return}p==="fluid"&&b in u.value&&(u.value={...u.value,[b]:b==="waterColor"?M:Number(M)})}function R(p){const b=rt(p==null?void 0:p.waterLevel),M=rt(p==null?void 0:p.waterLevelMin),y=rt(p==null?void 0:p.waterLevelMax);_.value={isPicking:!!(p!=null&&p.isPicking),hasFluid:!!(p!=null&&p.hasFluid),selectedText:(p==null?void 0:p.selectedText)||"",waterLevel:b,waterLevelMin:M,waterLevelMax:y},b!==null&&(u.value={...u.value,waterLevel:b})}function k(){var p;(p=r.clearWind2D)==null||p.call(r)}return{toolPanelOpen:c,advancedEffectControls:d,fluidParams:u,fluidState:_,toolModules:S,handleToolAction:w,handleToolControlChange:A,handleFluidStateChange:R,cleanupTools:k}}function pa(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function ga(e,t={}){const r=rt(t.waterLevelMin),a=rt(t.waterLevelMax),c=r!==null&&a!==null,d=c?Math.min(r,a):0,u=c?Math.max(r,a):0,_=rt(e.waterLevel),S=c?va(_??d,d,u):0,w=c?Math.max((u-d)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:d,max:u,step:w,value:S,displayValue:c?`${ya(S)} m`:"先捕捉",disabled:!c,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function rt(e){const t=Number(e);return Number.isFinite(t)?t:null}function va(e,t,r){return Math.max(t,Math.min(r,e))}function ya(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const ye={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},xa=new Float32Array([-1,-1,1,-1,1,1,-1,1]),_a=new Float32Array([0,0,1,0,1,1,0,1]),ba=new Uint16Array([0,1,2,0,2,3]);function Ze(e,t,r){return Math.max(t,Math.min(r,e))}function re(e,t){const r=Number(e);return Number.isFinite(r)?r:t}function Sa(e,t){const r=t.getParameter(t.MAX_TEXTURE_SIZE),a=Math.min(2048,r),c=Math.max(1,Math.floor(e)),d=Math.sqrt(c),u=Math.log2(d),_=Number.isFinite(u)?Math.round(u):4;let S=Math.pow(2,_);return S=Ze(S,16,a),S}function Ta(e){const t=e*e,r=new Float32Array(t*4);for(let a=0;a<t;a+=1){const c=a*4;r[c]=Math.random(),r[c+1]=Math.random(),r[c+2]=Math.random(),r[c+3]=Math.random()}return r}function wa(e){return new Float32Array(e*e*4)}function Ma(e,t,r,a,c){const d=t.createTexture();if(!d)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,d),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,r,a,0,t.RGBA,t.FLOAT,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let u=!1;return{_context:e,_texture:d,_target:t.TEXTURE_2D,_width:r,_height:a,destroy(){u||(t.deleteTexture(d),u=!0)}}}class La{constructor(t,r={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=r.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const a={...ye,...r};this.speedFactor=re(a.speedFactor,ye.speedFactor),this.cullSpeedMin=re(a.cullSpeedMin,ye.cullSpeedMin),this.cullSpeedMax=re(a.cullSpeedMax,ye.cullSpeedMax),this.windSpeedMin=re(a.windSpeedMin,ye.windSpeedMin),this.windSpeedMax=re(a.windSpeedMax,ye.windSpeedMax),this.arrowLength=re(a.arrowLength,ye.arrowLength),this.trailLength=re(a.trailLength,ye.trailLength),this.decaySpeed=re(a.decaySpeed,ye.decaySpeed),this.alphaFactor=re(a.alphaFactor,ye.alphaFactor),this.maxWindSpeed=re(a.maxWindSpeed,ye.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=re(r.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const r=re(t.longitude,NaN),a=re(t.latitude,NaN),c=Array.isArray(t.altitude)?t.altitude:[],d=Array.isArray(t.sizeMesh)?t.sizeMesh:[],u=Array.isArray(t.count)?t.count:[],_=Array.isArray(t.hspeed)?t.hspeed:[],S=Array.isArray(t.hdir)?t.hdir:[],w=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(r)||!Number.isFinite(a))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const A=c.length;if(A<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(d.length!==A||u.length!==A)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const R=u.map(E=>Math.max(1,Math.floor(re(E,1)))),k=d.map(E=>Math.max(1,re(E,1))),p=c.map(E=>re(E,0)),b=R.reduce((E,W)=>E+W*W,0);if(_.length<b||S.length<b||w.length<b)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=A,this.visibleLayerMin=0,this.visibleLayerMax=A-1,this._altitudes=p.slice(),this._maxNx=Math.max(...R),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*A;const M=new Float32Array(this._atlasWidth*this._atlasHeight*4);let y=0;for(let E=0;E<A;E+=1){const W=R[E],j=W;for(let J=0;J<j;J+=1)for(let Q=0;Q<W;Q+=1){const te=y+J*W+Q,$=((E*this._maxNy+J)*this._atlasWidth+Q)*4,se=Number(_[te]),he=Number(S[te]),xe=Number(w[te]);if(!(Number.isFinite(se)&&Number.isFinite(he))){M[$]=0,M[$+1]=0,M[$+2]=0,M[$+3]=0;continue}const I=he*Math.PI/180;M[$]=se*Math.sin(I),M[$+1]=se*Math.cos(I),M[$+2]=Number.isFinite(xe)?xe:0,M[$+3]=1}y+=W*j}this._createOrReplaceWindAtlasTexture(M);const D=Math.max(...k),i=this._maxNx*D,f=i/2/111320,m=a*Math.PI/180,L=Math.max(1e-6,Math.abs(Math.cos(m))),C=i/2/(111320*L);this._bounds={minLon:r-C,maxLon:r+C,minLat:a-f,maxLat:a+f,minHeight:Math.min(...p),maxHeight:Math.max(...p)},this._dataPointCount=b,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const r=Math.max(1,Math.floor(re(t,1))),a=Sa(r,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&a===this._particleTextureSize||(this._particleTextureSize=a,this._particleCount=a*a,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const r=Ze(re(t,this.particleDensity),.05,10);if(this.particleDensity=r,this._dataPointCount<=0)return;const a=Math.max(1,Math.floor(this._dataPointCount*r));this.setParticleCount(a)}setBounds(t,r,a,c){const d=re(t,NaN),u=re(r,NaN),_=re(a,NaN),S=re(c,NaN);if(!Number.isFinite(d)||!Number.isFinite(u)||!Number.isFinite(_)||!Number.isFinite(S))return;const w=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};w.minLon=Math.min(d,u),w.maxLon=Math.max(d,u),w.minLat=Math.min(_,S),w.maxLat=Math.max(_,S),this._bounds=w,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,r=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,r,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const c=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[c],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=c,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Ma(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,r=this._particleTextureSize,a=Ta(r),c=wa(r);for(let d=0;d<2;d+=1){this._particlePositionTextures[d]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:a},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[d]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:c},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[d]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[d],this._velocityTextures[d]],destroyAttachments:!1});const u=this._framebuffers[d]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,u),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,r=t.Buffer.createVertexBuffer({context:this._context,typedArray:xa,usage:t.BufferUsage.STATIC_DRAW}),a=t.Buffer.createVertexBuffer({context:this._context,typedArray:_a,usage:t.BufferUsage.STATIC_DRAW}),c=t.Buffer.createIndexBuffer({context:this._context,typedArray:ba,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:r,componentsPerAttribute:2},{index:1,vertexBuffer:a,componentsPerAttribute:2}],indexBuffer:c})}_buildParticleVertexArray(){const t=this._Cesium,r=new Float32Array(this._drawVertexCount);for(let a=0;a<r.length;a+=1)r[a]=a;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:r,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,r=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:a,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,r=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:r,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,r=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:r,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=Ze(Math.floor(re(this.visibleLayerMin,0)),0,this._layerCount-1),r=Ze(Math.floor(re(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:r}}_normalizeSpeedRange(t,r){const a=Math.max(1e-4,re(this.maxWindSpeed,ye.maxWindSpeed)),c=Ze(re(t,0)/a,0,1),d=Ze(re(r,a)/a,0,1);return{min:Math.min(c,d),max:Math.max(c,d)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>re(this.speedFactor,ye.speedFactor),maxWindSpeed:()=>Math.max(1e-4,re(this.maxWindSpeed,ye.maxWindSpeed)),decaySpeed:()=>Ze(re(this.decaySpeed,ye.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>re(this.arrowLength,ye.arrowLength),trailLength:()=>re(this.trailLength,ye.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Ze(re(this.alphaFactor,ye.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Fa({getViewer:e,getCesium:t,message:r}){const a=Y(null),c=Y({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function d(){var A,R;const w=e==null?void 0:e();if(a.value){try{(R=(A=w==null?void 0:w.scene)==null?void 0:A.primitives)==null||R.remove(a.value)}catch{}a.value.destroy(),a.value=null}}function u(){const w=e==null?void 0:e(),A=t==null?void 0:t();if(!w||!A){r.error("Cesium 尚未初始化");return}d();const R=Pa(A);a.value=new La(w,{maxWindSpeed:20,cesium:A,speedFactor:c.value.speedFactor,arrowLength:c.value.arrowLength,trailLength:c.value.trailLength,alphaFactor:c.value.alphaFactor}),a.value.loadData(R),w.scene.primitives.add(a.value),a.value.flyTo(),r.success("风场加载成功，可通过下方滑块调节样式")}function _(){a.value&&(a.value.speedFactor=c.value.speedFactor,a.value.arrowLength=c.value.arrowLength,a.value.trailLength=c.value.trailLength,a.value.alphaFactor=c.value.alphaFactor)}function S(w,A){return w in c.value?(c.value={...c.value,[w]:Number(A)},_(),!0):!1}return{wind2D:a,windParams:c,clearWind2D:d,loadSimulatedWind:u,setWindParam:S}}function Pa(e){const c=[0,2e3,5e3,1e4,15e3],d=[3e4,3e4,25e3,25e3,2e4],u=[30,30,25,25,20],_=u.reduce((k,p)=>k+p*p,0),S=new Array(_),w=new Array(_),A=new Array(_);let R=0;for(let k=0;k<5;k++){const p=u[k],b=u[k],M=d[k];for(let y=0;y<b;y++)for(let D=0;D<p;D++){const i=R+y*p+D,f=(D-p/2)*(M/111320),m=(y-b/2)*(M/111320/Math.cos(e.Math.toRadians(35))),C=Math.atan2(m,f)+Math.PI/2+.2*Math.sin(D*.5)*Math.cos(y*.5);w[i]=e.Math.toDegrees(C)%360;const E=Math.sqrt(f*f+m*m),j=Math.max(0,1-E/15);S[i]=(5+k*2)*j+2*Math.random(),A[i]=.5*Math.sin(D*.3)*Math.cos(y*.3)}R+=p*b}return{longitude:104,latitude:35,altitude:c,sizeMesh:d,count:u,hspeed:S,hdir:w,vspeed:A}}const Ea={key:3,class:"fps-chart-panel","aria-label":"实时帧率折线图"},Aa={class:"fps-chart-head"},Da={class:"fps-chart",viewBox:"0 0 160 48",preserveAspectRatio:"none","aria-hidden":"true"},Ra=["points"],Ca={class:"map-controls-group"},ka={class:"mouse-position-content"},Ia={__name:"CesiumContainer",setup(e){let t=null,r=null;const a=Ft(),c=Y(!1),d=Y(null),u=Y(lr()),_=()=>r,S=()=>t||window.Cesium,w=()=>u.value.tiandituTk,A=()=>u.value.cesiumIonToken,R=ia({getViewer:_,getCesium:S,message:a,backendBaseUrl:ur,tiandituToken:w,cesiumIonToken:A}),{activeBasemap:k,activeTerrain:p,customXyzBasemapUrl:b,basemapOptions:M,terrainOptions:y,overlayOptions:D,createImageryProviderViewModels:i,createTerrainProviderViewModels:f,getSelectedImageryProviderViewModel:m,getSelectedTerrainProviderViewModel:L,bindLayerPickerStateSync:C,addBaseImageryLayers:E,initCustomTerrain:W,handleOverlayToggle:j,handleCustomBasemapSubmit:J,cleanupLayers:Q}=R,{coordinateDisplay:te,setupInteractions:$,cleanupInteractions:se}=Qi({getViewer:_,getCesium:S}),{frameRateDisplay:he,frameRateLinePoints:xe,setupFrameRateMonitor:Ie,cleanupFrameRateMonitor:I}=Zi({getViewer:_}),{installCreditHider:O,cleanupCreditHider:F}=Vi({getViewer:_}),fe=ha({getViewer:_,getCesium:S,message:a}),{flyToHome:Me}=fe,G=Fa({getViewer:_,getCesium:S,message:a}),{toolPanelOpen:le,advancedEffectControls:Ne,fluidParams:Be,toolModules:Ke,handleToolAction:Qe,handleToolControlChange:Ye,handleFluidStateChange:Oe,cleanupTools:Je}=ma({fluidPanelRef:d,sceneActions:fe,wind:G});async function Ue(){tr("正在初始化 3D 场景...");try{let ge=0,Z=1;for(;ge<Z;)try{if(u.value=await cr({silent:!1,force:ge>0}),Z=Math.max(Z,Array.isArray(u.value.tiandituTokens)?u.value.tiandituTokens.length:1,Array.isArray(u.value.cesiumIonTokens)?u.value.cesiumIonTokens.length:1,1),t=await Ni({ionToken:A()}),!t||!document.getElementById("cesiumContainer"))return;Re(),$(),Ie();const ue=E(),g=await W();if(c.value=!0,ue&&g){a.success("天地图基础影像与地形加载成功。");return}const x=ue?{switched:!1}:xt("tianditu_tk"),z=g?{switched:!1}:xt("cesium_ion_token");if(!(x.switched||z.switched)){a.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}u.value=z.switched?z.tokens:x.tokens,De(),ge+=1,a.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(ue){const g=xt("cesium_ion_token");if(!g.switched)throw ue;u.value=g.tokens,De(),ge+=1,a.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}a.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(ge){a.error("Cesium 运行时加载失败",ge),a.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{rr()}}function De(){if(c.value=!1,se(),I(),Q(),F(),!!r){try{r.destroy()}catch{}r=null}}function Re(){var g;const ge=typeof t.Map=="function"?t.Map:t.Viewer,Z=i(),ue=f();r=new ge("cesiumContainer",{baseLayerPicker:!0,geocoder:((g=t.IonGeocodeProviderType)==null?void 0:g.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:Z,selectedImageryProviderViewModel:m(Z),terrainProviderViewModels:ue,selectedTerrainProviderViewModel:L(ue),shouldAnimate:!0}),r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,Wi(r,t),Lr(r),O(),C(),Me(0)}return nr(()=>{Ue()}),ir(()=>{if(c.value=!1,se(),I(),Je(),Q(),F(),r){try{r.destroy()}catch{}r=null}}),(ge,Z)=>(B(),q(Ae,null,[Z[10]||(Z[10]=h("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),c.value?(B(),Ve(tt(qr),{key:0,headless:"","get-viewer":_,"get-cesium":S,controls:K(Ne)},null,8,["controls"])):ie("",!0),c.value?(B(),Ve(tt(Ci),{key:1,ref_key:"fluidPanelRef",ref:d,headless:"","get-viewer":_,"get-cesium":S,params:K(Be),onStateChange:K(Oe)},null,40,["params","onStateChange"])):ie("",!0),c.value?(B(),Ve(li,{key:2,open:K(le),"onUpdate:open":Z[0]||(Z[0]=ue=>_t(le)?le.value=ue:null),"active-basemap":K(k),"onUpdate:activeBasemap":Z[1]||(Z[1]=ue=>_t(k)?k.value=ue:null),"active-terrain":K(p),"onUpdate:activeTerrain":Z[2]||(Z[2]=ue=>_t(p)?p.value=ue:null),"basemap-options":K(M),"terrain-options":K(y),"overlay-options":K(D),"custom-basemap-url":K(b),modules:K(Ke),onModuleAction:K(Qe),onControlChange:K(Ye),onOverlayToggle:K(j),onCustomBasemapSubmit:K(J)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):ie("",!0),c.value?(B(),q("section",Ea,[h("div",Aa,[Z[4]||(Z[4]=h("span",null,"FPS",-1)),h("strong",null,ae(K(he)),1)]),(B(),q("svg",Da,[Z[5]||(Z[5]=h("line",{class:"fps-grid-line",x1:"0",y1:"12",x2:"160",y2:"12"},null,-1)),Z[6]||(Z[6]=h("line",{class:"fps-grid-line",x1:"0",y1:"24",x2:"160",y2:"24"},null,-1)),Z[7]||(Z[7]=h("line",{class:"fps-grid-line",x1:"0",y1:"36",x2:"160",y2:"36"},null,-1)),K(xe)?(B(),q("polyline",{key:0,class:"fps-line",points:K(xe)},null,8,Ra)):ie("",!0)]))])):ie("",!0),h("div",Ca,[h("div",ka,ae(K(te)),1),Z[9]||(Z[9]=h("div",{class:"divider"},null,-1)),h("button",{class:"home-btn",title:"回到初始位置",onClick:Z[3]||(Z[3]=(...ue)=>K(Me)&&K(Me)(...ue))},[...Z[8]||(Z[8]=[h("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[h("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},Va=yt(Ia,[["__scopeId","data-v-9d0e9323"]]);export{Va as default};
