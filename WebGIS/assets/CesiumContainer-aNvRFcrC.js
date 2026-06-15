const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-CvtFB7l4.js","./vendor-echarts-all-B_WEc2GE.js","./vendor-libs-RyoEAG51.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var tr=Object.defineProperty;var rr=(e,t,r)=>t in e?tr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ft=(e,t,r)=>rr(e,typeof t!="symbol"?t+"":t,r);import{_ as ft,e as _t,K as Kt,J as Zt,I as nr}from"./index-BP1eMSua.js";import{_ as ar}from"./vendor-runtime-Dp1pzeXC.js";import{C as Jt,o as Qt,w as we,d as O,c as $,f as d,t as ie,G as pe,W as lt,X as ot,g as re,r as V,P as ir,a as Le,u as J,F as Pe,e as We,n as _e,x as Xe,S as rt,I as Pt,i as At,H as ke,O as er,q as Te,v as or,a4 as mt}from"./vendor-vue-CmuMwCC6.js";import{af as pt,ag as gt,ah as sr,X as lr,e as Et,ai as ct,ac as Dt,aj as cr,ak as ur,al as Rt,H as Ct,T as It,a2 as dr,am as hr,an as fr,ao as mr,ap as pr,q as gr,o as vr,aq as yr}from"./vendor-libs-RyoEAG51.js";import"./vendor-ol-all-ZNWqDNbP.js";import"./vendor-geotiff-B6D64MFK.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BzG5Hdu9.js";import"./vendor-axios-Bdz_Fv8M.js";function xr(e){var a;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;!t||!r||(r.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(a=t.requestRender)==null||a.call(t))}function _r(e,t){var u;const r=e==null?void 0:e.scene,a=r==null?void 0:r.globe;if(!r||!a)return;Tr(r,t),wr(r),a.enableLighting=!0,a.showGroundAtmosphere=!0,ee(a,"dynamicAtmosphereLighting",!0),ee(a,"dynamicAtmosphereLightingFromSun",!0),ee(a,"atmosphereLightIntensity",11.5),ee(a,"atmosphereHueShift",-.015),ee(a,"atmosphereSaturationShift",.08),ee(a,"atmosphereBrightnessShift",.02),ee(a,"lightingFadeInDistance",15e6),ee(a,"lightingFadeOutDistance",22e6),ee(a,"nightFadeInDistance",9e6),ee(a,"nightFadeOutDistance",16e6),ut(t,a,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ut(t,a,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ee(a,"atmosphereRayleighScaleHeight",1e4),ee(a,"atmosphereMieScaleHeight",3200),ee(a,"atmosphereMieAnisotropy",.92),!r.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(r.skyAtmosphere=Lr(t));const c=r.skyAtmosphere;c&&(c.show=!0,ee(c,"perFragmentAtmosphere",!0),ee(c,"dynamicAtmosphereLighting",!0),ee(c,"dynamicAtmosphereLightingFromSun",!0),ee(c,"hueShift",-.025),ee(c,"saturationShift",.08),ee(c,"brightnessShift",.03),ee(c,"atmosphereLightIntensity",12),ut(t,c,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ut(t,c,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ee(c,"atmosphereRayleighScaleHeight",1e4),ee(c,"atmosphereMieScaleHeight",3200),ee(c,"atmosphereMieAnisotropy",.92)),r.sun&&(r.sun.show=!0),r.moon&&(r.moon.show=!0),r.skyBox&&(r.skyBox.show=!0),"sunBloom"in r&&(r.sunBloom=!0),"highDynamicRange"in r&&(r.highDynamicRange=!0),Mr(r),(u=r.requestRender)==null||u.call(r)}function br(e){var c;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;if(!t||!r)return null;const a=(c=t.postProcessStages)==null?void 0:c.bloom;return{scene:Ge(t,["highDynamicRange","sunBloom","light"]),fog:Ge(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:Ge(r,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:Ge(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:Ge(t.sun,["show"]),moon:Ge(t.moon,["show"]),skyBox:Ge(t.skyBox,["show"]),bloom:{props:Ge(a,["enabled"]),uniforms:Ge(a==null?void 0:a.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Sr(e,t,r){var l,p,v,x;if(!r)return;const a=e==null?void 0:e.scene,c=a==null?void 0:a.globe;if(!a||!c)return;$e(a,r.scene,t),$e(a.fog,r.fog,t),$e(c,r.globe,t),$e(a.sun,r.sun,t),$e(a.moon,r.moon,t),$e(a.skyBox,r.skyBox,t),a.skyAtmosphere&&($e(a.skyAtmosphere,r.sky,t),r.skyAtmosphereExisted||(a.skyAtmosphere.show=!1));const u=(l=a.postProcessStages)==null?void 0:l.bloom;$e(u,(p=r.bloom)==null?void 0:p.props,t),$e(u==null?void 0:u.uniforms,(v=r.bloom)==null?void 0:v.uniforms,t),(x=a.requestRender)==null||x.call(a)}function Tr(e,t){var r;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(r=t.Color)==null?void 0:r.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}ee(e.light,"intensity",2.35)}function wr(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,ee(t,"density",12e-5),ee(t,"minimumBrightness",.035),ee(t,"screenSpaceErrorFactor",2),ee(t,"visualDensityScalar",.16))}function Mr(e){var r;const t=(r=e==null?void 0:e.postProcessStages)==null?void 0:r.bloom;t&&(t.enabled=!0,t.uniforms&&(ee(t.uniforms,"contrast",128),ee(t.uniforms,"brightness",-.18),ee(t.uniforms,"delta",1),ee(t.uniforms,"sigma",2.5),ee(t.uniforms,"stepSize",4.2)))}function Lr(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function ee(e,t,r){e&&t in e&&(e[t]=r)}function ut(e,t,r,a,c,u){!t||!(r in t)||!(e!=null&&e.Cartesian3)||(t[r]=new e.Cartesian3(a,c,u))}function Ge(e,t){return e?t.reduce((r,a)=>(a in e&&(r[a]=Fr(e[a])),r),{}):{}}function $e(e,t={},r){!e||!t||Object.entries(t).forEach(([a,c])=>{a in e&&(e[a]=Pr(c,r))})}function Fr(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Pr(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Ar={key:0,class:"advanced-effects-root"},Er={class:"effects-panel"},Dr={class:"panel-head"},Rr={class:"effect-switches"},Cr={class:"switch-item"},Ir={class:"switch-item"},kr={class:"switch-item"},Or={class:"switch-item"},zr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,r=_t(),a=V(null),c=V(!1),u=V(!1),l=V(!1),p=V(!1),v=V(!1);let x=null,P=null,F=null,N=!1,b=null,T=null,E=null,S=null,C=null,n=null,m=null,f=null,M=!1,A=null,w=0,W=0,te=typeof performance<"u"?performance.now():Date.now();function ne(){return E||(E=ar(()=>import("./cesiumFxRuntime-CvtFB7l4.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(g=>{var z;const y=(z=g==null?void 0:g.getCesiumFxEchartsRuntime)==null?void 0:z.call(g);if(!y)throw new Error("Cinematic FX 图表运行时加载失败");return T=y,y}).catch(g=>{throw E=null,g}),E)}async function K(){return T||ne()}const Z={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},B={hdr:null,bloom:null,sky:null};Jt(()=>{xe()}),Qt(()=>{Re()}),we(()=>t.controls,g=>{ge(g||{})},{deep:!0,immediate:!0});function ge(g){Object.prototype.hasOwnProperty.call(g,"fog")&&(c.value=!!g.fog),Object.prototype.hasOwnProperty.call(g,"hbao")&&(u.value=!!g.hbao),Object.prototype.hasOwnProperty.call(g,"tiltShift")&&(l.value=!!g.tiltShift),Object.prototype.hasOwnProperty.call(g,"atmosphere")&&(p.value=!!g.atmosphere)}function xe(){let g=0;S=window.setInterval(async()=>{var G,X;g+=1;const y=(G=t.getViewer)==null?void 0:G.call(t),z=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(y&&z){clearInterval(S),S=null;try{be(y),I(y),Ae(y,z),H(y,z),r.success("高级视觉效果已启用。")}catch(oe){r.error("高级视觉效果初始化失败",oe),r.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}g>=150&&(clearInterval(S),S=null,r.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function be(g){var z,G,X,oe,he,o;const y=g==null?void 0:g.scene;if(y){if(typeof y.highDynamicRange=="boolean"&&(B.hdr=y.highDynamicRange),(z=y.postProcessStages)!=null&&z.bloom){const s=y.postProcessStages.bloom;B.bloom={enabled:!!s.enabled,contrast:(G=s.uniforms)==null?void 0:G.contrast,brightness:(X=s.uniforms)==null?void 0:X.brightness,delta:(oe=s.uniforms)==null?void 0:oe.delta,sigma:(he=s.uniforms)==null?void 0:he.sigma,stepSize:(o=s.uniforms)==null?void 0:o.stepSize}}y.skyAtmosphere&&(B.sky={hueShift:y.skyAtmosphere.hueShift,saturationShift:y.skyAtmosphere.saturationShift,brightnessShift:y.skyAtmosphere.brightnessShift})}}function Ae(g,y){var G;!((G=g==null?void 0:g.scene)!=null&&G.postProcessStages)||!(y!=null&&y.PostProcessStage)||(L(g,y),ue(g,y),Ee(g,y),p.value?de(g,y,1200):Oe(g))}function I(g){var z;const y=g==null?void 0:g.scene;(z=y==null?void 0:y.renderError)!=null&&z.addEventListener&&(y.rethrowRenderErrors=!1,f=y.renderError.addEventListener((G,X)=>{r.error("Cesium 渲染异常，已触发降级保护",X),k(),M||(M=!0,r.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function k(){c.value=!1,l.value=!1,u.value=!1,p.value=!1,x&&(x.enabled=!1),P&&(P.enabled=!1),F&&(F.enabled=!1)}function L(g,y){x||(x=new y.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new y.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),g.scene.postProcessStages.add(x),x.enabled=c.value)}function ue(g,y){var G,X;const z=(G=g==null?void 0:g.scene)==null?void 0:G.postProcessStages;z&&(z.ambientOcclusion?(F=z.ambientOcclusion,N=!1):(X=y==null?void 0:y.PostProcessStageLibrary)!=null&&X.createAmbientOcclusionStage&&(F=y.PostProcessStageLibrary.createAmbientOcclusionStage(),z.add(F),N=!0),F&&(F.enabled=u.value,F.uniforms&&("intensity"in F.uniforms&&(F.uniforms.intensity=4.2),"bias"in F.uniforms&&(F.uniforms.bias=.08),"lengthCap"in F.uniforms&&(F.uniforms.lengthCap=.35),"stepSize"in F.uniforms&&(F.uniforms.stepSize=1.8),"frustumLength"in F.uniforms&&(F.uniforms.frustumLength=1200))))}function Ee(g,y){P||(P=new y.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),g.scene.postProcessStages.add(P),P.enabled=!1)}function H(g,y){const z=g==null?void 0:g.scene;z&&(m=z.preRender.addEventListener(()=>{var he;const G=Se(g),X=Number(((he=g==null?void 0:g.camera)==null?void 0:he.pitch)??-1.2);w+=1;const oe=typeof performance<"u"?performance.now():Date.now();if(oe-te>=1e3&&(W=Math.round(w*1e3/(oe-te)),w=0,te=oe),x&&(x.enabled=c.value,x.uniforms.cameraHeightFactor=j(G,150,12e3),x.uniforms.fogDensity=55e-5+(1-x.uniforms.cameraHeightFactor)*.00125),F&&(F.enabled=u.value),P){const o=X>-.62,s=o?ve((X+.62)/.5):0;P.enabled=l.value&&o,P.uniforms.blurStrength=s}p.value?de(g,y,G):Oe(g)}))}function de(g,y,z){var o;const G=g==null?void 0:g.scene;if(!G)return;A||(A=br(g)),_r(g,y),typeof G.highDynamicRange=="boolean"&&(G.highDynamicRange=!0);const X=(o=G.postProcessStages)==null?void 0:o.bloom;X&&(X.enabled=!0,X.uniforms&&("contrast"in X.uniforms&&(X.uniforms.contrast=149),"brightness"in X.uniforms&&(X.uniforms.brightness=-.12),"delta"in X.uniforms&&(X.uniforms.delta=1),"sigma"in X.uniforms&&(X.uniforms.sigma=3.25),"stepSize"in X.uniforms&&(X.uniforms.stepSize=5)));const oe=G.skyAtmosphere;if(!oe)return;const he=j(z,500,12e4);oe.hueShift=-.035+he*.035,oe.saturationShift=-.14+he*.09,oe.brightnessShift=.03+(1-he)*.08}function Oe(g){var X,oe;const y=g==null?void 0:g.scene;if(!y)return;const z=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(A){Sr(g,z,A),A=null;return}typeof y.highDynamicRange=="boolean"&&B.hdr!==null&&(y.highDynamicRange=B.hdr);const G=(oe=y.postProcessStages)==null?void 0:oe.bloom;G&&B.bloom&&(G.enabled=B.bloom.enabled,G.uniforms&&("contrast"in G.uniforms&&B.bloom.contrast!==void 0&&(G.uniforms.contrast=B.bloom.contrast),"brightness"in G.uniforms&&B.bloom.brightness!==void 0&&(G.uniforms.brightness=B.bloom.brightness),"delta"in G.uniforms&&B.bloom.delta!==void 0&&(G.uniforms.delta=B.bloom.delta),"sigma"in G.uniforms&&B.bloom.sigma!==void 0&&(G.uniforms.sigma=B.bloom.sigma),"stepSize"in G.uniforms&&B.bloom.stepSize!==void 0&&(G.uniforms.stepSize=B.bloom.stepSize))),y.skyAtmosphere&&B.sky&&(y.skyAtmosphere.hueShift=B.sky.hueShift,y.skyAtmosphere.saturationShift=B.sky.saturationShift,y.skyAtmosphere.brightnessShift=B.sky.brightnessShift)}function Ve(){C&&(clearInterval(C),C=null)}async function Ze(){var G,X;const g=!v.value;if(v.value=g,!g){Ve();return}const y=(G=t.getViewer)==null?void 0:G.call(t),z=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(!y||!z){v.value=!1,r.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await ze(y,z),Je(y,z),De(y,z)}catch(oe){v.value=!1,r.error("图表模块加载失败",oe)}}async function ze(g,y){await K(),await ir(),a.value&&(b||(b=T.init(a.value),Ne()),n||(n=()=>{b==null||b.resize()},window.addEventListener("resize",n)),b.resize(),De(g,y))}function Je(g,y){C||(C=window.setInterval(()=>{!b||!v.value||De(g,y)},1200))}function De(g,y){var he;const z=new Date,G=`${Ye(z.getHours())}:${Ye(z.getMinutes())}:${Ye(z.getSeconds())}`,X=Number((Se(g)/1e3).toFixed(2)),oe=Number(y.Math.toDegrees(((he=g==null?void 0:g.camera)==null?void 0:he.pitch)??0).toFixed(1));Fe(Z.labels,G,20),Fe(Z.cameraHeightKm,X,20),Fe(Z.pitchDeg,oe,20),Fe(Z.fps,W,20),b.setOption({xAxis:{data:Z.labels},series:[{data:Z.cameraHeightKm},{data:Z.pitchDeg},{data:Z.fps}]})}function Ne(){b&&b.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function Re(){var z,G;S&&(clearInterval(S),S=null),Ve();const g=(z=t.getViewer)==null?void 0:z.call(t),y=(G=g==null?void 0:g.scene)==null?void 0:G.postProcessStages;m&&(m(),m=null),f&&(f(),f=null),x&&y&&y.remove(x),x=null,P&&y&&y.remove(P),P=null,F&&(N&&y&&y.remove(F),F=null),N=!1,g&&Oe(g),n&&(window.removeEventListener("resize",n),n=null),b&&(b.dispose(),b=null),T=null,M=!1}function Se(g){var X,oe,he;const y=(oe=(X=g==null?void 0:g.scene)==null?void 0:X.globe)==null?void 0:oe.ellipsoid,z=(he=g==null?void 0:g.camera)==null?void 0:he.positionWC;if(!y||!z)return 0;const G=y.cartesianToCartographic(z);return Math.max(0,Number((G==null?void 0:G.height)??0))}function j(g,y,z){return!Number.isFinite(g)||z<=y?0:ve((g-y)/(z-y))}function ve(g){return Math.min(1,Math.max(0,Number(g)||0))}function Fe(g,y,z){g.push(y),g.length>z&&g.shift()}function Ye(g){return String(g).padStart(2,"0")}return(g,y)=>e.headless?re("",!0):(O(),$("div",Ar,[d("div",Er,[d("div",Dr,[y[4]||(y[4]=d("span",{class:"panel-title"},"Cinematic FX",-1)),d("button",{class:"panel-btn",onClick:Ze},ie(v.value?"隐藏图表":"显示图表"),1)]),d("div",Rr,[d("label",Cr,[pe(d("input",{"onUpdate:modelValue":y[0]||(y[0]=z=>c.value=z),type:"checkbox"},null,512),[[lt,c.value]]),y[5]||(y[5]=d("span",null,"电影级高度雾",-1))]),d("label",Ir,[pe(d("input",{"onUpdate:modelValue":y[1]||(y[1]=z=>u.value=z),type:"checkbox"},null,512),[[lt,u.value]]),y[6]||(y[6]=d("span",null,"HBAO 微阴影",-1))]),d("label",kr,[pe(d("input",{"onUpdate:modelValue":y[2]||(y[2]=z=>l.value=z),type:"checkbox"},null,512),[[lt,l.value]]),y[7]||(y[7]=d("span",null,"移轴摄影",-1))]),d("label",Or,[pe(d("input",{"onUpdate:modelValue":y[3]||(y[3]=z=>p.value=z),type:"checkbox"},null,512),[[lt,p.value]]),y[8]||(y[8]=d("span",null,"动态大气 + Bloom",-1))])]),pe(d("div",{ref_key:"chartRef",ref:a,class:"fx-chart"},null,512),[[ot,v.value]])])]))}},Nr=ft(zr,[["__scopeId","data-v-1e562e70"]]),Br={key:0,class:"launcher-count"},Hr={class:"panel-header"},Ur={class:"panel-title-block"},Wr={class:"panel-mark"},Gr={class:"panel-copy"},$r={class:"panel-subtitle"},qr={class:"panel-actions"},Xr=["title"],Vr={class:"panel-tabs","aria-label":"3D 工具分类"},Yr=["aria-pressed","onClick"],jr={class:"panel-scroll"},Kr={class:"panel-page"},Zr={class:"overview-grid"},Jr={class:"overview-tile"},Qr={class:"overview-tile"},en={class:"overview-tile"},tn={key:0,class:"quick-actions"},rn=["disabled","onClick"],nn={key:1,class:"empty-state"},an={class:"panel-page"},on=["aria-expanded"],sn={class:"section-main"},ln={class:"section-meta"},cn={key:0,class:"section-body"},un={class:"option-grid"},dn=["disabled","aria-pressed","title","onClick"],hn={class:"custom-basemap-input-row"},fn=["disabled"],mn={key:0,class:"custom-basemap-current"},pn=["aria-expanded"],gn={class:"section-main"},vn={class:"section-meta"},yn={key:0,class:"section-body"},xn={class:"option-grid"},_n=["aria-pressed","title","onClick"],bn=["aria-expanded"],Sn={class:"section-main"},Tn={class:"section-meta"},wn={key:0,class:"section-body"},Mn={class:"overlay-list"},Ln=["disabled","aria-pressed","title","onClick"],Fn={class:"overlay-copy"},Pn={class:"overlay-title"},An={key:0,class:"overlay-desc"},En={key:3,class:"empty-state"},Dn={class:"panel-page"},Rn={class:"module-list"},Cn=["aria-expanded","onClick"],In={class:"module-icon"},kn={class:"module-copy"},On={class:"module-title"},zn={key:0,class:"module-desc"},Nn={class:"module-head-side"},Bn={key:0,class:"module-body"},Hn={key:0,class:"module-actions"},Un=["disabled","onClick"],Wn={key:1,class:"control-list"},Gn={class:"control-label"},$n={class:"control-label-text"},qn=["aria-label","title"],Xn=["min","max","step","value","disabled","onInput"],Vn=["min","max","step","value","disabled","onInput"],Yn=["value","disabled","onInput"],jn=["value","disabled","onChange"],Kn=["value"],Zn=["aria-pressed","disabled","onClick"],Jn={key:4,class:"control-value"},Qn={key:0,class:"empty-state"},kt=2,ea={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(e,{emit:t}){const r=e,a=t,c=K(),u=c.uiStateVersion===kt,l=V(c.activeTab||"scene"),p=V(!!c.compactMode),v=V(new Set(u?c.expandedLayerSectionIds||[]:[])),x=V(new Set(u?c.expandedModuleIds||[]:[])),P=V(r.customBasemapUrl||""),F=Te(()=>r.embedded||r.open),N=Te(()=>r.modules.find(I=>I.id==="scene")||null),b=Te(()=>{var I;return((I=N.value)==null?void 0:I.actions)||[]}),T=Te(()=>r.modules.filter(I=>I.id!=="scene")),E=Te(()=>T.value.filter(I=>I.statusTone==="success"||I.statusTone==="warning").length),S=Te(()=>r.overlayOptions.filter(I=>!!I.active).length),C=[{id:"scene",label:"场景",icon:gt},{id:"layers",label:"图层",icon:Et},{id:"modules",label:"模块",icon:pt}],n=Te(()=>{var I;return((I=r.basemapOptions.find(k=>k.value===r.activeBasemap))==null?void 0:I.label)||"未选择"}),m=Te(()=>{var I;return((I=r.terrainOptions.find(k=>k.value===r.activeTerrain))==null?void 0:I.label)||"未选择"});we(()=>r.modules.map(I=>I.id),I=>{I.includes(l.value)||l.value==="scene"||l.value==="layers"||l.value==="modules"||(l.value="scene")},{immediate:!0}),we([l,p,v,x],Z,{deep:!0}),we(()=>r.customBasemapUrl,I=>{I!==P.value&&(P.value=I||"")});function f(I){a("update:open",I)}function M(I){return v.value.has(I)}function A(I){const k=new Set(v.value);k.has(I)?k.delete(I):k.add(I),v.value=k}function w(I){return x.value.has(I)}function W(I){const k=new Set(x.value);k.has(I)?k.delete(I):k.add(I),x.value=k}function te(I){I!=null&&I.disabled||a("update:activeBasemap",I.value)}function ne(){a("custom-basemap-submit",{url:P.value})}function K(){if(typeof window>"u")return{};try{const I=window.localStorage.getItem(r.storageKey);return I?JSON.parse(I):{}}catch{return{}}}function Z(){if(!(typeof window>"u"))try{window.localStorage.setItem(r.storageKey,JSON.stringify({uiStateVersion:kt,activeTab:l.value,compactMode:p.value,expandedLayerSectionIds:[...v.value],expandedModuleIds:[...x.value]}))}catch{}}function B(I){return{scene:gt,effects:vr,wind:gr,fluid:pr}[I]||pt}function ge(I,k){var ue;return((ue={scene:{home:fr,everest:Rt,tileset:hr},wind:{load:dr,clear:It},fluid:{pick:Ct,clear:It}}[I])==null?void 0:ue[k])||mr}function xe(I,k){a("module-action",{moduleId:I,actionId:k})}function be(I,k,L){const ue=k.type==="range"?Number(L):L;a("control-change",{moduleId:I,controlId:k.id,value:ue})}function Ae(I){I.disabled||a("overlay-toggle",{overlayId:I.value,value:!I.active})}return(I,k)=>(O(),$("aside",{class:_e(["cesium-tool-shell",{"is-open":F.value,"is-embedded":e.embedded}])},[!e.embedded&&!F.value?(O(),$("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:k[0]||(k[0]=L=>f(!0))},[Le(J(pt),{size:18,"stroke-width":"2"}),k[8]||(k[8]=d("span",null,"高级控制台",-1)),E.value?(O(),$("span",Br,ie(E.value),1)):re("",!0)])):re("",!0),pe(d("section",{class:_e(["cesium-tool-panel",{compact:p.value}]),"aria-label":"Cesium 高级控制台"},[d("header",Hr,[d("div",Ur,[d("span",Wr,[Le(J(gt),{size:18,"stroke-width":"2"})]),d("span",Gr,[k[9]||(k[9]=d("span",{class:"panel-title"},"3D 高级控制台",-1)),d("span",$r,ie(n.value)+" / "+ie(m.value),1)])]),d("div",qr,[d("button",{class:"icon-btn",type:"button",title:p.value?"切换为舒展布局":"切换为紧凑布局",onClick:k[1]||(k[1]=L=>p.value=!p.value)},[Le(J(sr),{size:16,"stroke-width":"2"})],8,Xr),e.embedded?re("",!0):(O(),$("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:k[2]||(k[2]=L=>f(!1))},[Le(J(lr),{size:17,"stroke-width":"2"})]))])]),d("nav",Vr,[(O(),$(Pe,null,We(C,L=>d("button",{key:L.id,class:_e(["tab-btn",{active:l.value===L.id}]),type:"button","aria-pressed":l.value===L.id,onClick:ue=>l.value=L.id},[(O(),Xe(rt(L.icon),{size:15,"stroke-width":"2"})),d("span",null,ie(L.label),1)],10,Yr)),64))]),d("div",jr,[pe(d("section",Kr,[d("div",Zr,[d("div",Jr,[k[10]||(k[10]=d("span",{class:"overview-label"},"地图源",-1)),d("strong",null,ie(n.value),1)]),d("div",Qr,[k[11]||(k[11]=d("span",{class:"overview-label"},"地形",-1)),d("strong",null,ie(m.value),1)]),d("div",en,[k[12]||(k[12]=d("span",{class:"overview-label"},"模块",-1)),d("strong",null,ie(E.value)+"/"+ie(T.value.length),1)])]),b.value.length?(O(),$("div",tn,[(O(!0),$(Pe,null,We(b.value,L=>(O(),$("button",{key:L.id,class:_e(["tool-action",[L.variant||"default",{active:L.active}]]),disabled:L.disabled,type:"button",onClick:ue=>xe(N.value.id,L.id)},[(O(),Xe(rt(ge(N.value.id,L.id)),{size:15,"stroke-width":"2"})),Pt(" "+ie(L.label),1)],10,rn))),128))])):(O(),$("div",nn," 暂无场景快捷操作 "))],512),[[ot,l.value==="scene"]]),pe(d("section",an,[e.basemapOptions.length?(O(),$("div",{key:0,class:_e(["option-group",{expanded:M("basemap")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":M("basemap"),onClick:k[3]||(k[3]=L=>A("basemap"))},[d("span",sn,[Le(J(Et),{size:16,"stroke-width":"2"}),k[13]||(k[13]=d("span",null,"底图源",-1))]),d("span",ln,[d("span",null,ie(n.value),1),Le(J(ct),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,on),M("basemap")?(O(),$("div",cn,[d("div",un,[(O(!0),$(Pe,null,We(e.basemapOptions,L=>(O(),$("button",{key:L.value,class:_e(["option-card",{active:L.value===e.activeBasemap}]),type:"button",disabled:L.disabled,"aria-pressed":L.value===e.activeBasemap,title:L.description||L.label,onClick:ue=>te(L)},[d("span",null,ie(L.label),1),L.value===e.activeBasemap?(O(),Xe(J(Dt),{key:0,size:15,"stroke-width":"2.4"})):re("",!0)],10,dn))),128))]),d("form",{class:"custom-basemap-editor",onSubmit:At(ne,["prevent"])},[d("div",hn,[Le(J(cr),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),pe(d("input",{"onUpdate:modelValue":k[4]||(k[4]=L=>P.value=L),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[ke,P.value]]),d("button",{class:"custom-basemap-submit",type:"submit",disabled:!P.value.trim(),title:"加载自定义 XYZ"},[Le(J(ur),{size:14,"stroke-width":"2"}),k[14]||(k[14]=d("span",null,"加载",-1))],8,fn)]),e.customBasemapUrl?(O(),$("div",mn,ie(e.customBasemapUrl),1)):re("",!0)],32)])):re("",!0)],2)):re("",!0),e.terrainOptions.length?(O(),$("div",{key:1,class:_e(["option-group",{expanded:M("terrain")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":M("terrain"),onClick:k[5]||(k[5]=L=>A("terrain"))},[d("span",gn,[Le(J(Rt),{size:16,"stroke-width":"2"}),k[15]||(k[15]=d("span",null,"地形",-1))]),d("span",vn,[d("span",null,ie(m.value),1),Le(J(ct),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,pn),M("terrain")?(O(),$("div",yn,[d("div",xn,[(O(!0),$(Pe,null,We(e.terrainOptions,L=>(O(),$("button",{key:L.value,class:_e(["option-card",{active:L.value===e.activeTerrain}]),type:"button","aria-pressed":L.value===e.activeTerrain,title:L.description||L.label,onClick:ue=>I.$emit("update:activeTerrain",L.value)},[d("span",null,ie(L.label),1),L.value===e.activeTerrain?(O(),Xe(J(Dt),{key:0,size:15,"stroke-width":"2.4"})):re("",!0)],10,_n))),128))])])):re("",!0)],2)):re("",!0),e.overlayOptions.length?(O(),$("div",{key:2,class:_e(["option-group",{expanded:M("overlay")}])},[d("button",{class:"section-head section-toggle",type:"button","aria-expanded":M("overlay"),onClick:k[6]||(k[6]=L=>A("overlay"))},[d("span",Sn,[Le(J(Ct),{size:16,"stroke-width":"2"}),k[16]||(k[16]=d("span",null,"叠加层",-1))]),d("span",Tn,[d("span",null,ie(S.value)+"/"+ie(e.overlayOptions.length),1),Le(J(ct),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,bn),M("overlay")?(O(),$("div",wn,[d("div",Mn,[(O(!0),$(Pe,null,We(e.overlayOptions,L=>(O(),$("button",{key:L.value,class:_e(["overlay-row",{active:!!L.active}]),type:"button",disabled:L.disabled,"aria-pressed":!!L.active,title:L.description||L.label,onClick:ue=>Ae(L)},[d("span",Fn,[d("span",Pn,ie(L.label),1),L.description?(O(),$("span",An,ie(L.description),1)):re("",!0)]),d("span",{class:_e(["toggle-control",{active:!!L.active}]),"aria-hidden":"true"},[...k[17]||(k[17]=[d("span",{class:"toggle-track"},[d("span",{class:"toggle-thumb"})],-1)])],2)],10,Ln))),128))])])):re("",!0)],2)):re("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(O(),$("div",En," 暂无图层配置项 ")):re("",!0)],512),[[ot,l.value==="layers"]]),pe(d("section",Dn,[d("div",Rn,[(O(!0),$(Pe,null,We(T.value,L=>{var ue,Ee;return O(),$("article",{key:L.id,class:_e(["module-item",{expanded:w(L.id)}])},[d("button",{class:"module-head",type:"button","aria-expanded":w(L.id),onClick:H=>W(L.id)},[d("span",In,[(O(),Xe(rt(B(L.id)),{size:16,"stroke-width":"2"}))]),d("span",kn,[d("span",On,ie(L.title),1),L.description?(O(),$("span",zn,ie(L.description),1)):re("",!0)]),d("span",Nn,[L.status?(O(),$("span",{key:0,class:_e(["module-status",L.statusTone||"neutral"])},ie(L.status),3)):re("",!0),Le(J(ct),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Cn),w(L.id)?(O(),$("div",Bn,[(ue=L.actions)!=null&&ue.length?(O(),$("div",Hn,[(O(!0),$(Pe,null,We(L.actions,H=>(O(),$("button",{key:H.id,class:_e(["tool-action",[H.variant||"default",{active:H.active}]]),disabled:H.disabled,type:"button",onClick:de=>xe(L.id,H.id)},[(O(),Xe(rt(ge(L.id,H.id)),{size:14,"stroke-width":"2"})),Pt(" "+ie(H.label),1)],10,Un))),128))])):re("",!0),(Ee=L.controls)!=null&&Ee.length?(O(),$("div",Wn,[(O(!0),$(Pe,null,We(L.controls,H=>(O(),$("label",{key:H.id,class:_e(["control-row",`control-${H.type}`])},[d("span",Gn,[d("span",$n,ie(H.label),1),H.tooltip?(O(),$("span",{key:0,class:"control-help","aria-label":H.tooltip,title:H.tooltip,onClick:k[7]||(k[7]=At(()=>{},["prevent","stop"]))}," ? ",8,qn)):re("",!0)]),H.type==="range"?(O(),$(Pe,{key:0},[d("input",{class:"control-range",type:"range",min:H.min,max:H.max,step:H.step,value:H.value,disabled:H.disabled,onInput:de=>be(L.id,H,de.target.value)},null,40,Xn),d("input",{class:"control-number",type:"number",min:H.min,max:H.max,step:H.step,value:H.value,disabled:H.disabled,onInput:de=>be(L.id,H,de.target.value)},null,40,Vn)],64)):H.type==="color"?(O(),$(Pe,{key:1},[d("input",{class:"control-color",type:"color",value:H.value,disabled:H.disabled,onInput:de=>be(L.id,H,de.target.value)},null,40,Yn),d("span",{class:"control-color-swatch",style:er({backgroundColor:H.value})},null,4)],64)):H.type==="select"?(O(),$("select",{key:2,class:"control-select",value:H.value,disabled:H.disabled,onChange:de=>be(L.id,H,de.target.value)},[(O(!0),$(Pe,null,We(H.options||[],de=>(O(),$("option",{key:de.value,value:de.value},ie(de.label),9,Kn))),128))],40,jn)):H.type==="toggle"?(O(),$("button",{key:3,class:_e(["toggle-control",{active:!!H.value}]),type:"button","aria-pressed":!!H.value,disabled:H.disabled,onClick:de=>be(L.id,H,!H.value)},[...k[18]||(k[18]=[d("span",{class:"toggle-track"},[d("span",{class:"toggle-thumb"})],-1)])],10,Zn)):re("",!0),H.displayValue?(O(),$("span",Jn,ie(H.displayValue),1)):re("",!0)],2))),128))])):re("",!0)])):re("",!0)],2)}),128))]),T.value.length?re("",!0):(O(),$("div",Qn," 暂无可用功能模块 "))],512),[[ot,l.value==="modules"]])])],2),[[ot,e.embedded||F.value]])],2))}},ta=ft(ea,[["__scopeId","data-v-c2b974d5"]]);function ra(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(C){return(C==null?void 0:C._view)||(C==null?void 0:C.view)}function r(C){const n=t(C);if(!(n!=null&&n.passState))throw new Error("Cesium scene passState is unavailable.");return n.passState}function a(C){const n=t(C);return(n==null?void 0:n.frustumCommandsList)||(n==null?void 0:n._frustumCommandsList)||[]}const c=`
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
`,v=`
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
`,x=`
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
`;class P{constructor(n){this.commandType=n.commandType,this.geometry=n.geometry,this.attributeLocations=n.attributeLocations,this.primitiveType=n.primitiveType,this.uniformMap=n.uniformMap,this.vertexShaderSource=n.vertexShaderSource,this.fragmentShaderSource=n.fragmentShaderSource,this.rawRenderState=n.rawRenderState,this.framebuffer=n.framebuffer,this.isPostRender=n.isPostRender,this.outputTexture=n.outputTexture,this.autoClear=e.defaultValue(n.autoClear,!1),this.preExecute=n.preExecute,this.modelMatrix=e.defaultValue(n.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(n){switch(this.commandType){case"Draw":{const m=e.VertexArray.fromGeometry({context:n,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),f=e.ShaderProgram.fromCache({context:n,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),M=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:m,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:f,framebuffer:this.framebuffer,renderState:M,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(n,m){this.geometry=m;const f=e.VertexArray.fromGeometry({context:n,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=f}update(n){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(n.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&n.commandList.push(this.clearCommand),n.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class F{constructor(){}static loadText(n){const m=new XMLHttpRequest;return m.open("GET",n,!1),m.send(),m.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(n){if(e.defined(n.arrayBufferView)){const f={};f.arrayBufferView=n.arrayBufferView,n.source=f,n.flipY=!1}return new e.Texture(n)}static createDepthFramebuffer(n,m,f){return new e.Framebuffer({context:n,colorTextures:[this.createTexture({context:n,width:m,height:f,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(m*f*4)})],depthRenderbuffer:new e.Renderbuffer({context:n,width:m,height:f,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(n,m,f,M=!1){const A={context:n,colorTextures:[m],destroyAttachments:M};return f&&(A.depthTexture=f),new e.Framebuffer(A)}static createRawRenderState(n){const M={viewport:n.viewport,depthTest:n.depthTest,depthMask:n.depthMask,blending:n.blending};return e.Appearance.getDefaultRenderState(!0,!1,M)}}const S=class S{constructor(n,m={}){if(!n)throw new Error("Cesium Viewer is required");this.viewer=n,this._initConfiguration(m),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(n){this.config={resolution:new e.Cartesian2(n.width||S.DEFAULTS.width,n.height||S.DEFAULTS.height),dimensions:n.dimensions||S.DEFAULTS.dimensions.clone(),heightRange:{min:n.minHeight??S.DEFAULTS.heightRange[0],max:n.maxHeight??S.DEFAULTS.heightRange[1]},baseHeight:n.baseHeight??S.DEFAULTS.baseHeight,fluidParams:n.fluidParams||S.DEFAULTS.fluidParams.clone(),customParams:n.customParams||S.DEFAULTS.customParams.clone(),waterColor:n.waterColor||S.DEFAULTS.waterColor.clone(),lonLat:n.lonLat||[...S.DEFAULTS.lonLat],timeStep:n.timeStep||S.DEFAULTS.timeStep,heightMapSource:n.heightMapSource||S.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(n){const m=Number(n);!Number.isFinite(m)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,m)),this.resetSimulation())}resetSimulation(){var n,m;this._frameCount=0,(m=(n=this.viewer.scene).requestRender)==null||m.call(n)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const n=()=>F.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:n(),B:n(),C:n(),D:n()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(n){if(!(n!=null&&n.arrayBufferView)||!n.width||!n.height)throw new Error("Invalid height map source.");return F.createTexture({context:this.viewer.scene.context,width:n.width,height:n.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:n.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var B,ge;const n=this.viewer.scene.context,m=F.createDepthFramebuffer(n,this.config.resolution.x,this.config.resolution.y),f=this.viewer.scene,M=f.frameState,A=r(this.viewer.scene),w=f.camera,W=M.camera,te=A.framebuffer,ne=e.BoundingRectangle.clone(A.viewport,new e.BoundingRectangle);let K=null,Z=[];try{A.viewport.x=0,A.viewport.y=0,A.viewport.width=this.config.resolution.x,A.viewport.height=this.config.resolution.y,A.framebuffer=m,f.camera=this.heightMapCamera,M.camera=this.heightMapCamera,M.context.uniformState.updateCamera(this.heightMapCamera),Z=this._processHeightMapShaders(),this._renderDepthPrepass(A);const xe=F.createTexture({context:n,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return K=F.createFramebuffer(n,xe),this._copyTexture(m.getColorTexture(0),K),xe}finally{this._restoreHeightMapShaders(Z),A.framebuffer=te,e.BoundingRectangle.clone(ne,A.viewport),f.camera=w,M.camera=W,W&&M.context.uniformState.updateCamera(W),K&&!((B=K.isDestroyed)!=null&&B.call(K))&&K.destroy(),m&&!((ge=m.isDestroyed)!=null&&ge.call(m))&&m.destroy()}}_renderDepthPrepass(n){const m=this.viewer.scene.frameState;m.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(M=>M.execute(this.viewer.scene.context,n))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const n={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...n,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:u}),this._createComputePass("B",{uniforms:{...n,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:l}),this._createComputePass("C",{uniforms:{...n,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:p}),this._createComputePass("D",{uniforms:{...n,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:v})]}_createComputePass(n,{uniforms:m,shaderSource:f}){return new P({commandType:"Compute",uniformMap:m,fragmentShaderSource:new e.ShaderSource({sources:[c,f]}),geometry:F.getFullscreenQuad(),outputTexture:this.textures[n],preExecute:M=>M.commandToExecute.outputTexture=this.textures[n]})}_createMainRenderPass(){const n=b([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new P({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[c,x]}),geometry:this._createBoxGeometry(),modelMatrix:n,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var n,m,f,M;return(M=(f=(m=(n=t(this.viewer.scene))==null?void 0:n.globeDepth)==null?void 0:m.colorFramebufferManager)==null?void 0:f._colorTextures)==null?void 0:M[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(n=>this.viewer.scene.primitives.add(n)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(n){const m=this.viewer.camera.getPickRay(n);return this.viewer.scene.globe.pick(m,this.viewer.scene)}_createOrthographicCamera(){const n=new e.Camera(this.viewer.scene);n.frustum=new e.OrthographicOffCenterFrustum;const[m,f]=this.config.lonLat,M=e.Cartesian3.fromDegrees(m,f,this.config.baseHeight),A=e.Transforms.eastNorthUpToFixedFrame(M),w=n.frustum;w.near=.01,w.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),w.left=-this.config.dimensions.x/2,w.right=this.config.dimensions.x/2,w.bottom=-this.config.dimensions.y/2,w.top=this.config.dimensions.y/2;const W=e.Matrix4.getColumn(A,2,new e.Cartesian3);e.Cartesian3.negate(W,W);const te=e.Matrix4.getColumn(A,1,new e.Cartesian3),ne=e.Matrix4.getColumn(A,0,new e.Cartesian3),K=e.Cartesian3.multiplyByScalar(W,-w.far,new e.Cartesian3);return n.position=e.Cartesian3.add(M,K,new e.Cartesian3),n.direction=W,n.up=te,n.right=ne,n}destroy(){var n,m;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(f=>{f&&this.viewer.scene.primitives.remove(f)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(f=>{var M;f&&!((M=f.isDestroyed)!=null&&M.call(f))&&f.destroy()}),this.textures={},this._heightMap&&!((m=(n=this._heightMap).isDestroyed)!=null&&m.call(n))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(n,m){const f=this.viewer.scene.context,M=r(this.viewer.scene),A=f.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>n},owner:this}),w=M.framebuffer;M.framebuffer=m,A.execute(f,M),M.framebuffer=w}_getDepthRenderCommands(){var f,M;const n=[],m=a(this.viewer.scene);for(let A=0;A<m.length;++A){const w=m[A],W=(f=w==null?void 0:w.commands)==null?void 0:f[2],te=((M=w==null?void 0:w.indices)==null?void 0:M[2])??(W==null?void 0:W.length)??0;W&&te>0&&n.push(...W.slice(0,te))}return n}_processHeightMapShaders(){const n=[],m=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),f=e.Matrix4.inverse(m,new e.Matrix4),M=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(w=>{var Z;if(!((Z=w==null?void 0:w.shaderProgram)!=null&&Z.fragmentShaderSource)||!w.uniformMap)return;const W=Object.prototype.hasOwnProperty.call(w.uniformMap,"u_inverseEnuMatrix"),te=w.uniformMap.u_inverseEnuMatrix,ne=w.shaderProgram,K=new e.Matrix4;w.uniformMap.u_inverseEnuMatrix=()=>{const B=w.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(f,B,K)},w.heightMap_ShaderProgram||(w.heightMap_ShaderProgram=this._getDerivedShaderProgram(M.context,w.shaderProgram,"Height_Map")),w.shaderProgram=w.heightMap_ShaderProgram,n.push({command:w,hadInverseUniform:W,originalInverseUniform:te,originalShaderProgram:ne})}),n}_restoreHeightMapShaders(n){n.forEach(m=>{const{command:f,hadInverseUniform:M,originalInverseUniform:A,originalShaderProgram:w}=m;f!=null&&f.uniformMap&&(f.shaderProgram=w,M?f.uniformMap.u_inverseEnuMatrix=A:delete f.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(n,m,f){let M=n.shaderCache.getDerivedShaderProgram(m,f);return e.defined(M)||(M=this._createHeightMapShaderProgram(n,m,f)),M}_createHeightMapShaderProgram(n,m,f){const M=this._modifyFragmentShader(m.fragmentShaderSource);return n.shaderCache.createDerivedShaderProgram(m,f,{vertexShaderSource:m.vertexShaderSource,fragmentShaderSource:M,attributeLocations:m._attributeLocations})}_modifyFragmentShader(n){const m=n.sources.map(f=>e.ShaderSource.replaceMain(f,"czm_heightMap_main"));return m.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:m,defines:n.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};Ft(S,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let N=S;const b=(C=[0,0,0],n=[0,0,0],m=[1,1,1])=>{const f=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(n[0]))),M=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(n[1]))),A=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(n[2])));C instanceof e.Cartesian3||(C=e.Cartesian3.fromDegrees(...C));const w=e.Transforms.eastNorthUpToFixedFrame(C);e.Matrix4.multiply(w,f,w),e.Matrix4.multiply(w,M,w),e.Matrix4.multiply(w,A,w);const W=e.Matrix4.fromScale(new e.Cartesian3(...m));return e.Matrix4.multiply(w,W,new e.Matrix4)},T=`
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
    `;function E(){return new e.PostProcessStage({fragmentShader:T})}return{FluidRenderer:N,createSkyEffect:E}}const na={key:0,class:"fluid-root"},aa={class:"fluid-panel"},ia={class:"panel-actions"},oa=["disabled"],sa={key:0,class:"selected-text"},la={class:"param-list"},ca={class:"param-row"},ua={class:"param-row"},da={class:"param-row"},ha={key:0,class:"param-row"},fa=["min","max","step"],ma=["min","max","step"],pa={class:"param-row color-row"},Ot=1024,dt=1e4,zt=1200,ga=100,va=.01,ya=.03,xa=60,vt=64,_a=160,ba={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:r}){const a=e,c=r,u=_t(),l=V(10),p=V(20),v=V(3),x=V("#0d4fa3"),P=V(null),F=V(null),N=V(null),b=V(!1),T=V(!1),E=V(null),S=V(null);let C=null,n=null,m=null,f=null,M=null,A=null,w=0;const W=Te(()=>!Number.isFinite(E.value)||!Number.isFinite(S.value)?"":`经度 ${E.value.toFixed(6)} / 纬度 ${S.value.toFixed(6)}`),te=Te(()=>Number.isFinite(F.value)&&Number.isFinite(N.value)),ne=Te(()=>{if(!te.value)return 1;const o=Math.abs(N.value-F.value);return Math.max(o/1e3,.01)});we([l,p,v,x],Fe),we(P,Ye),we(()=>a.params,o=>{Z(o||{})},{deep:!0,immediate:!0}),we([b,T,W,P,F,N],B,{immediate:!0}),or(()=>{oe(!0)});function K(){var _,U;const o=(_=a.getViewer)==null?void 0:_.call(a),s=((U=a.getCesium)==null?void 0:U.call(a))||window.Cesium;if(!o||!s)return u.warning("Cesium 场景尚未就绪。"),null;if(!C){const q=ra(s);C=q.FluidRenderer,n=q.createSkyEffect}return{viewer:o,Cesium:s}}function Z(o){Number.isFinite(Number(o.threshold))&&(l.value=Number(o.threshold)),Number.isFinite(Number(o.blend))&&(p.value=Number(o.blend)),Number.isFinite(Number(o.lightStrength))&&(v.value=Number(o.lightStrength)),Re(o.waterColor)&&(x.value=o.waterColor),Number.isFinite(Number(o.waterLevel))&&(P.value=Number(o.waterLevel))}function B(){c("state-change",{isPicking:b.value,hasFluid:T.value,selectedText:W.value,waterLevel:P.value,waterLevelMin:F.value,waterLevelMax:N.value})}function ge(){const o=K();if(!o)return;const{viewer:s,Cesium:_}=o;G(),g(s,_),b.value=!0,m=new _.ScreenSpaceEventHandler(s.scene.canvas),m.setInputAction(U=>{xe(s,_,U.position)},_.ScreenSpaceEventType.LEFT_CLICK)}async function xe(o,s,_){var h,R;const U=ve(o,_);if(!U){u.warning("未选中可用地形位置。");return}const q=++w;G();const ae=s.Cartographic.fromCartesian(U),fe=s.Math.toDegrees(ae.longitude),me=s.Math.toDegrees(ae.latitude),Be=Number(ae.height),Ce=Number.isFinite(Be)?Be:0,i=new s.Cartesian3(dt,dt,0);Kt("正在请求模拟范围高度数据...");try{X();const D=Number(l.value)||0,Y=Number(p.value)||0,se=Number(v.value)||0,le=await be(o,s,{lon:fe,lat:me,centerHeight:Ce,dimensions:i}),ce=Ve(le,Ce),Me=ce.baseHeight,He=ce.depth,je=Ze(ce,Ce),Qe=new s.Cartesian3(dt,dt,He);if(q!==w)return;F.value=ce.minHeight,N.value=ce.maxHeight,P.value=je,le||u.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),f=new C(o,{lonLat:[fe,me],width:Ot,height:Ot,dimensions:Qe,baseHeight:Me,minHeight:ce.minHeight,maxHeight:ce.maxHeight,heightMapSource:le,waterColor:De(s,x.value),customParams:new s.Cartesian4(D,Y,se,10),fluidParams:new s.Cartesian4(.9+se/10*.099,Math.min(1,Y/50),D/5e4,ze(je,ce))}),E.value=fe,S.value=me,T.value=!0,(R=(h=o.scene).requestRender)==null||R.call(h),u.success("水体流体已创建。")}catch(D){u.error("水体流体创建失败",D),u.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{Zt()}}async function be(o,s,_){const U=o==null?void 0:o.terrainProvider,q=I(_.dimensions);if(!U)return null;if(s.EllipsoidTerrainProvider&&U instanceof s.EllipsoidTerrainProvider)return de(q);if(typeof s.sampleTerrain!="function"&&typeof s.sampleTerrainMostDetailed!="function")return null;try{return await Ae(o,s,_,q)}catch(ae){if(q<=vt)throw ae;return Ae(o,s,_,vt)}}async function Ae(o,s,_,U){const q=L(s,_,U),ae=await ue(s,o.terrainProvider,q);return H(ae||q,{size:U})}function I(o){const s=Math.max(Number(o==null?void 0:o.x)||0,Number(o==null?void 0:o.y)||0),_=Math.ceil(s/xa)+1;return k(_,vt,_a)}function k(o,s,_){return Math.max(s,Math.min(_,Math.round(o)))}function L(o,{lon:s,lat:_,centerHeight:U,dimensions:q},ae){const fe=o.Cartesian3.fromDegrees(s,_,U),me=o.Transforms.eastNorthUpToFixedFrame(fe),Be=[],Ce=Math.max(1,ae-1);for(let i=0;i<ae;i++){const R=(.5-i/Ce)*q.y;for(let D=0;D<ae;D++){const se=(D/Ce-.5)*q.x,le=new o.Cartesian3(se,R,0),ce=o.Matrix4.multiplyByPoint(me,le,new o.Cartesian3);Be.push(o.Cartographic.fromCartesian(ce))}}return Be}async function ue(o,s,_){const U=Ee(s);return Number.isInteger(U)&&typeof o.sampleTerrain=="function"?o.sampleTerrain(s,U,_):typeof o.sampleTerrainMostDetailed=="function"?o.sampleTerrainMostDetailed(s,_):o.sampleTerrain(s,10,_)}function Ee(o){const s=Number(o==null?void 0:o._bottomLevel);return Number.isFinite(s)?Math.max(0,s-1):null}function H(o,{size:s}){var q;const _=Oe(o);if(!_)return null;const U=new Float32Array(s*s*4);for(let ae=0;ae<s*s;ae++){const fe=Number((q=o[ae])==null?void 0:q.height),me=ae*4;U[me]=Number.isFinite(fe)?j(fe,_.minHeight,_.maxHeight):_.minHeight,U[me+1]=0,U[me+2]=0,U[me+3]=1}return{width:s,height:s,arrayBufferView:U,minHeight:_.minHeight,maxHeight:_.maxHeight}}function de(o){return{width:o,height:o,arrayBufferView:new Float32Array(o*o*4),minHeight:0,maxHeight:0}}function Oe(o){let s=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY;for(const U of o||[]){const q=Number(U==null?void 0:U.height);Number.isFinite(q)&&(s=Math.min(s,q),_=Math.max(_,q))}return!Number.isFinite(s)||!Number.isFinite(_)?null:{minHeight:s,maxHeight:_}}function Ve(o,s){const _=Number(o==null?void 0:o.minHeight),U=Number(o==null?void 0:o.maxHeight);if(Number.isFinite(_)&&Number.isFinite(U)){const fe=Number(s),me=Number.isFinite(fe)?Math.min(_,U,fe):Math.min(_,U),Be=Number.isFinite(fe)?Math.max(_,U,fe):Math.max(_,U),Ce=Math.max(Be-me,va);return{baseHeight:me,depth:Ce,minHeight:me,maxHeight:me+Ce}}const q=Number(s),ae=Number.isFinite(q)?q-ga:0;return{baseHeight:ae,depth:zt,minHeight:ae,maxHeight:ae+zt}}function Ze(o,s){const _=o.minHeight+o.depth*ya,U=Number(s),q=Number.isFinite(U)?U:_;return j(q,o.minHeight,o.maxHeight)}function ze(o,s){const _=s.maxHeight-s.minHeight;return!Number.isFinite(_)||_<=0?0:j((o-s.minHeight)/_,0,1)}function Je(){return!Number.isFinite(F.value)||!Number.isFinite(N.value)?null:{minHeight:Math.min(F.value,N.value),maxHeight:Math.max(F.value,N.value)}}function De(o,s){const _=Se(s)||Se("#0d4fa3");return new o.Cartesian3(_.red,_.green,_.blue)}function Ne(){var _;const o=Se(x.value),s=(_=f==null?void 0:f.config)==null?void 0:_.waterColor;!o||!s||(s.x=o.red,s.y=o.green,s.z=o.blue)}function Re(o){return typeof o=="string"&&/^#[0-9a-f]{6}$/i.test(o)}function Se(o){return Re(o)?{red:Number.parseInt(o.slice(1,3),16)/255,green:Number.parseInt(o.slice(3,5),16)/255,blue:Number.parseInt(o.slice(5,7),16)/255}:null}function j(o,s,_){return Math.max(s,Math.min(_,o))}function ve(o,s){if(!s)return null;if(o.scene.pickPositionSupported&&typeof o.scene.pickPosition=="function"){const U=o.scene.pickPosition(s);if(U)return U}const _=o.camera.getPickRay(s);return _?o.scene.globe.pick(_,o.scene):null}function Fe(){var U,q,ae;if(!(f!=null&&f.config))return;const o=Number(l.value)||0,s=Number(p.value)||0,_=Number(v.value)||0;f.config.customParams&&(f.config.customParams.x=o,f.config.customParams.y=s,f.config.customParams.z=_),f.config.fluidParams&&(f.config.fluidParams.x=.9+_/10*.099,f.config.fluidParams.y=Math.min(1,s/50),f.config.fluidParams.z=o/5e4),Ne(),(ae=(q=(U=f.viewer)==null?void 0:U.scene)==null?void 0:q.requestRender)==null||ae.call(q)}function Ye(){var q,ae,fe,me;if(!((q=f==null?void 0:f.config)!=null&&q.fluidParams))return;const o=Je(),s=Number(P.value);if(!o||!Number.isFinite(s))return;const _=j(s,o.minHeight,o.maxHeight);if(_!==s){P.value=_;return}const U=ze(_,o);typeof f.setInitialWaterLevel=="function"?f.setInitialWaterLevel(U):(f.config.fluidParams.w=U,(me=(fe=(ae=f.viewer)==null?void 0:ae.scene)==null?void 0:fe.requestRender)==null||me.call(fe))}function g(o,s){var _,U;if(!A){const q=o.scene;A={shadows:o.shadows,resolutionScale:o.resolutionScale,msaaSamples:q.msaaSamples,depthTestAgainstTerrain:q.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:q.logarithmicDepthBuffer,highDynamicRange:q.highDynamicRange,fogEnabled:(_=q.fog)==null?void 0:_.enabled,showGroundAtmosphere:q.globe.showGroundAtmosphere,skyAtmosphereShow:(U=q.skyAtmosphere)==null?void 0:U.show,enableLighting:q.globe.enableLighting}}o.shadows=!0,o.resolutionScale=1,o.scene.msaaSamples=4,o.scene.globe.depthTestAgainstTerrain=!0,o.scene.logarithmicDepthBuffer=!0,o.scene.highDynamicRange=!0,o.scene.fog&&(o.scene.fog.enabled=!0),o.scene.globe.showGroundAtmosphere=!0,o.scene.skyAtmosphere&&(o.scene.skyAtmosphere.show=!0),o.scene.globe.enableLighting=!0,!M&&n&&(M=n(s),o.scene.postProcessStages.add(M))}function y(o){if(!o||!A)return;const s=o.scene;o.shadows=A.shadows,o.resolutionScale=A.resolutionScale,A.msaaSamples!==void 0&&(s.msaaSamples=A.msaaSamples),s.globe.depthTestAgainstTerrain=A.depthTestAgainstTerrain,s.logarithmicDepthBuffer=A.logarithmicDepthBuffer,s.highDynamicRange=A.highDynamicRange,s.fog&&A.fogEnabled!==void 0&&(s.fog.enabled=A.fogEnabled),s.globe.showGroundAtmosphere=A.showGroundAtmosphere,s.skyAtmosphere&&A.skyAtmosphereShow!==void 0&&(s.skyAtmosphere.show=A.skyAtmosphereShow),s.globe.enableLighting=A.enableLighting,A=null}function z(){oe(!1),u.success("水体流体已清除。")}function G(){m&&(m.destroy(),m=null),b.value=!1}function X(){if(f){try{f.destroy()}catch{}f=null,T.value=!1}}function oe(o){var _,U,q;const s=(_=a.getViewer)==null?void 0:_.call(a);if(w+=1,G(),X(),E.value=null,S.value=null,P.value=null,F.value=null,N.value=null,s&&M){try{s.scene.postProcessStages.remove(M)}catch{}M=null}o&&s&&y(s),(q=(U=s==null?void 0:s.scene)==null?void 0:U.requestRender)==null||q.call(U)}function he(){oe(!0),c("close")}return t({startPickHeightMap:ge,clearFluid:z}),(o,s)=>e.headless?re("",!0):(O(),$("div",na,[d("div",aa,[d("div",{class:"panel-head"},[s[9]||(s[9]=d("span",{class:"panel-title"},"水体流体",-1)),d("button",{class:"panel-close",title:"关闭",onClick:he}," × ")]),d("div",ia,[d("button",{class:_e(["action-btn primary",{active:b.value}]),onClick:ge},ie(b.value?"等待选点":"捕捉高度图"),3),d("button",{class:"action-btn",disabled:!T.value&&!b.value,onClick:z}," 清除 ",8,oa)]),W.value?(O(),$("div",sa,ie(W.value),1)):re("",!0),d("div",la,[d("label",ca,[s[10]||(s[10]=d("span",null,"阈值",-1)),pe(d("input",{"onUpdate:modelValue":s[0]||(s[0]=_=>l.value=_),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[ke,l.value,void 0,{number:!0}]]),pe(d("input",{"onUpdate:modelValue":s[1]||(s[1]=_=>l.value=_),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[ke,l.value,void 0,{number:!0}]])]),d("label",ua,[s[11]||(s[11]=d("span",null,"混合",-1)),pe(d("input",{"onUpdate:modelValue":s[2]||(s[2]=_=>p.value=_),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[ke,p.value,void 0,{number:!0}]]),pe(d("input",{"onUpdate:modelValue":s[3]||(s[3]=_=>p.value=_),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[ke,p.value,void 0,{number:!0}]])]),d("label",da,[s[12]||(s[12]=d("span",null,"光强",-1)),pe(d("input",{"onUpdate:modelValue":s[4]||(s[4]=_=>v.value=_),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[ke,v.value,void 0,{number:!0}]]),pe(d("input",{"onUpdate:modelValue":s[5]||(s[5]=_=>v.value=_),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[ke,v.value,void 0,{number:!0}]])]),te.value?(O(),$("label",ha,[s[13]||(s[13]=d("span",null,"水位",-1)),pe(d("input",{"onUpdate:modelValue":s[6]||(s[6]=_=>P.value=_),type:"range",min:F.value,max:N.value,step:ne.value},null,8,fa),[[ke,P.value,void 0,{number:!0}]]),pe(d("input",{"onUpdate:modelValue":s[7]||(s[7]=_=>P.value=_),class:"number-input",type:"number",min:F.value,max:N.value,step:ne.value},null,8,ma),[[ke,P.value,void 0,{number:!0}]])])):re("",!0),d("label",pa,[s[14]||(s[14]=d("span",null,"水色",-1)),pe(d("input",{"onUpdate:modelValue":s[8]||(s[8]=_=>x.value=_),class:"color-input",type:"color"},null,512),[[ke,x.value]]),d("span",{class:"color-swatch",style:er({backgroundColor:x.value})},null,4)])])])]))}},Sa=ft(ba,[["__scopeId","data-v-9ecdafb8"]]),bt="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Ta=`${bt}Cesium.js`,wa=`${bt}Widgets/widgets.css`;async function Ma({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=bt),await Fa(wa,"cesium-widgets-style"),await La(Ta,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到");return ht(t,e),t}function ht(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function La(e,t){return new Promise((r,a)=>{const c=document.getElementById(t);if(c){if(c.getAttribute("data-loaded")==="true"){r();return}c.addEventListener("load",()=>r(),{once:!0}),c.addEventListener("error",()=>a(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const u=document.createElement("script");u.id=t,u.src=e,u.async=!0,u.onload=()=>{u.setAttribute("data-loaded","true"),r()},u.onerror=()=>a(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(u)})}function Fa(e,t){return new Promise((r,a)=>{if(document.getElementById(t)){r();return}const u=document.createElement("link");u.id=t,u.rel="stylesheet",u.href=e,u.onload=()=>r(),u.onerror=()=>a(new Error(`样式加载失败: ${e}`)),document.head.appendChild(u)})}const Pa="Asia/Shanghai",Aa="UTC+8",Ea=new Intl.DateTimeFormat("zh-CN",{timeZone:Pa,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Da(e,t){var r,a,c,u,l,p,v;if(!(!e||!(t!=null&&t.JulianDate))){if((r=e.animation)!=null&&r.viewModel&&(e.animation.viewModel.dateFormatter=(...x)=>Ca(e,t,...x),e.animation.viewModel.timeFormatter=(...x)=>Ia(e,t,...x)),e.timeline){const x=(...P)=>ka(e,t,...P);e.timeline.makeLabel=x,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=x),(c=(a=e.timeline).updateFromClock)==null||c.call(a),(l=(u=e.timeline).zoomTo)==null||l.call(u,e.clock.startTime,e.clock.stopTime)}(v=(p=e.scene).requestRender)==null||v.call(p)}}function St(e,t,...r){var p;const a=r.find(Ra)||((p=e==null?void 0:e.clock)==null?void 0:p.currentTime);if(!a)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const c=t.JulianDate.toDate(a),u=Ea.formatToParts(c),l=Object.fromEntries(u.filter(({type:v})=>v!=="literal").map(({type:v,value:x})=>[v,x]));return{year:l.year||"0000",month:l.month||"01",day:l.day||"01",hour:l.hour||"00",minute:l.minute||"00",second:l.second||"00"}}function Ra(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function Ca(e,t,...r){const{year:a,month:c,day:u}=St(e,t,...r);return`${a}-${c}-${u}`}function Ia(e,t,...r){const{hour:a,minute:c,second:u}=St(e,t,...r);return`${a}:${c}:${u} ${Aa}`}function ka(e,t,...r){const{month:a,day:c,hour:u,minute:l}=St(e,t,...r);return`${a}-${c} ${u}:${l}`}function Oa({getViewer:e}){let t=null,r=null;function a(){var p;const l=e==null?void 0:e();if(l&&((p=l._cesiumWidget)!=null&&p._creditContainer&&(l._cesiumWidget._creditContainer.style.display="none"),c(),t=setInterval(()=>{const v=document.querySelector(".cesium-credit-container");v&&v.innerHTML.length>0&&(v.innerHTML="",v.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const v=document.createElement("style");v.id="cesium-credit-override",v.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(v),r=v}}function c(){var v;const l=e==null?void 0:e();if(!l)return;(v=l._cesiumWidget)!=null&&v._creditContainer&&(l._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",l._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(x=>{x.style.cssText="display: none !important; visibility: hidden !important;",x.innerHTML=""}),l.scene&&l.scene.frameState&&l.scene.frameState.creditDisplay&&(l.scene.frameState.creditDisplay.hasCredits=()=>!1,l.scene.frameState.creditDisplay.destroy=()=>{})}function u(){t&&(clearInterval(t),t=null),r&&(r.remove(),r=null)}return{installCreditHider:a,cleanupCreditHider:u}}const za=500,xt=48,Na=160,Nt=48;function Ba({getViewer:e}){const t=V(null),r=V([]),a=Te(()=>Number.isFinite(t.value)?String(t.value):"--"),c=Te(()=>Ha(r.value));let u=null,l=0,p=yt();function v(){var F;const P=(F=e==null?void 0:e())==null?void 0:F.scene;P!=null&&P.preRender&&(x(),t.value=null,r.value=[],l=0,p=yt(),u=P.preRender.addEventListener(()=>{l+=1;const N=yt(),b=N-p;if(b<za)return;const T=Math.round(l*1e3/b);t.value=T,r.value=[...r.value.slice(1-xt),T],l=0,p=N}))}function x(){typeof u=="function"&&(u(),u=null)}return{frameRateDisplay:a,frameRateLinePoints:c,setupFrameRateMonitor:v,cleanupFrameRateMonitor:x}}function yt(){return typeof performance<"u"?performance.now():Date.now()}function Ha(e){if(!e.length)return"";const t=Math.max(60,...e),r=Na/(xt-1),a=xt-e.length;return e.map((c,u)=>{const l=(a+u)*r,p=Math.max(0,Math.min(c/t,1)),v=Nt-p*Nt;return`${l.toFixed(1)},${v.toFixed(1)}`}).join(" ")}function Ua({getViewer:e,getCesium:t}){let r=null;const a=V("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function c(){const l=e==null?void 0:e(),p=t==null?void 0:t();!l||!p||(u(),r=new p.ScreenSpaceEventHandler(l.scene.canvas),r.setInputAction(v=>{const x=l.camera.getPickRay(v.endPosition);if(!x)return;const P=l.scene.globe.pick(x,l.scene);if(!P)return;const F=p.Cartographic.fromCartesian(P),N=p.Math.toDegrees(F.longitude).toFixed(6),b=p.Math.toDegrees(F.latitude).toFixed(6),T=F.height.toFixed(2);a.value=`经度: ${N}, 纬度: ${b}, 海拔: ${T}米`},p.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(v=>{const x=v.endPosition,P=v.startPosition;if(!p.defined(l.terrainProvider))return;const F=l.scene.globe.ellipsoid;if(!l.camera.pickEllipsoid(P,F)){const b=l.camera;b.rotate(p.Cartesian3.UNIT_X,-.002*(x.y-P.y)),b.rotate(p.Cartesian3.UNIT_Y,-.002*(x.x-P.x))}},p.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},p.ScreenSpaceEventType.RIGHT_UP))}function u(){r&&(r.destroy(),r=null)}return{coordinateDisplay:a,setupInteractions:c,cleanupInteractions:u}}function Wa(e,t=""){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r??t}catch{return t}}function Ga(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function tt(e,t){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r==null?t:r==="true"}catch{return t}}function st(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Bt(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:r,Ellipsoid:a,Resource:c,HeightmapTerrainData:u,Rectangle:l,TileAvailability:p,CustomHeightmapTerrainProvider:v}=e;function x(b,T,E,S,C,n){const m=b.tileXYToRectangle(E,S,C);return t(l.intersection(m,T,n))}function P(b){const T=[[[0,0,1,0]]],E=new p(b.tilingScheme,19);for(let S=0;S<T.length;S++){const C=T[S];for(let n=0;n<C.length;n++){const m=C[n];E.addAvailableTileRange(S,m[0],m[1],m[2],m[3])}}return E}function F(b,T,E,S,C){const n=new u({buffer:b._transformBuffer(T),width:b._width,height:b._height,childTileMask:b._getChildTileMask(S,C,E),structure:b._terrainDataStructure});return n._skirtHeight=6e3,b.availability.addAvailableTileRange(E,S,C,S,C),n}class N extends v{constructor(T={}){if(super({...T,ellipsoid:a.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(T.url))throw new r("options.url is required.");this._dataType=T.dataType??"int16",this._url=T.url,this._subdomains=T.subdomains,this._token=T.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=P(this)}get availability(){return this._availability}requestTileGeometry(T,E,S,C){if(S>=this._bottomLevel)return Promise.reject(new Error(`Level ${S} is outside supported range.`));if(S<this._topLevel)return Promise.resolve(new u({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(T,E,S),structure:this._terrainDataStructure}));let n=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const f=this._subdomains[(T+E)%this._subdomains.length];n=n.replace("{s}",f)}n=n.replace("{token}",this._token).replace("{x}",T).replace("{y}",E).replace("{z}",S+1);const m=c.fetchArrayBuffer({url:n,request:C});if(m)return m.then(f=>f.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):yr.inflate(f)).then(f=>F(this,f,S,T,E))}getTileDataAvailable(T,E,S){return S<this._bottomLevel}_transformBuffer(T){let E=2;this._dataType==="float"&&(E=4);const S=T;if(S.length!==22500*E)return null;const C=new ArrayBuffer(E),n=new DataView(C),m=this._width,f=this._height,M=new Uint8Array(m*f*4);for(let A=0;A<f;A++)for(let w=0;w<m;w++){const W=Math.floor(149*A/(f-1)),te=Math.floor(149*w/(m-1)),ne=E*(150*W+te);let K;E===4?(n.setInt8(0,S[ne]),n.setInt8(1,S[ne+1]),n.setInt8(2,S[ne+2]),n.setInt8(3,S[ne+3]),K=n.getFloat32(0,!0)):K=S[ne]+256*S[ne+1],(K>1e4||K<-2e3)&&(K=0);const Z=(K+1e3)/.001,B=4*(A*m+w);M[B]=Z/65536,M[B+1]=(Z-256*M[B]*256)/256,M[B+2]=Z-256*M[B]*256-256*M[B+1],M[B+3]=255}return M}_getVHeightBuffer(){let T=this._vHeightBuffer;if(!t(T)){T=new Uint8ClampedArray(this._width*this._height*4);for(let E=0;E<this._width*this._height*4;)T[E++]=15,T[E++]=66,T[E++]=64,T[E++]=255;this._vHeightBuffer=T}return T}_getChildTileMask(T,E,S){const C=new l,n=this._tilingScheme,m=this._rectangles,f=n.tileXYToRectangle(T,E,S);let M=0;for(let A=0;A<m.length&&M!==15;A++){const w=m[A];if(w.maxLevel<=S)continue;const W=w.rectangle,te=l.intersection(W,f,C);t(te)&&(x(n,W,2*T,2*E,S+1,C)&&(M|=4),x(n,W,2*T+1,2*E,S+1,C)&&(M|=8),x(n,W,2*T,2*E+1,S+1,C)&&(M|=1),x(n,W,2*T+1,2*E+1,S+1,C)&&(M|=2))}return M}}return N}const at=["0","1","2","3","4","5","6","7"],it="https://t{s}.tianditu.gov.cn/",$a="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",qa=96188,qe="custom-xyz",Ht="cesium_custom_xyz_basemap_url",Xa="cesium_tdt_label_layer_visible",Ut="cesium_tdt_boundary_layer_visible",Wt="cesium_tdt_text_label_layer_visible",Gt="cesium_osm_buildings_visible",$t="cesium_google_photorealistic_3d_tiles_visible",qt=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:qe,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],Xt=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function Va({getViewer:e,getCesium:t,message:r,backendBaseUrl:a,tiandituToken:c,cesiumIonToken:u}){let l=null,p=null,v=null,x=null,P=0,F=null,N=null,b=0,T=0,E=[];const S=[],C=V([]),n=new Map,m=new Map,f=new Map,M=new Map,A=V("tianditu"),w=V("tianditu"),W=V(Wa(Ht,"")),te=tt(Xa,!0),ne=V(tt(Ut,te)),K=V(tt(Wt,te)),Z=V(tt(Gt,!1)),B=V(tt($t,!1)),ge=Te(()=>[...qt.map(i=>i.value!==qe?i:{...i,description:W.value?W.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!W.value}),...C.value]),xe=Te(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:ne.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:K.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:Z.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:B.value}]);we(A,i=>{!(e!=null&&e())||!(t!=null&&t())||he(i)}),we(W,i=>{Ga(Ht,i)}),we(w,async i=>{!(e!=null&&e())||!(t!=null&&t())||await s(i)}),we(ne,i=>{st(Ut,i),Re()}),we(K,i=>{st(Wt,i),Re()}),we(Z,i=>{st(Gt,i),Ye()}),we(B,i=>{st($t,i),g()});function be(){const i=t==null?void 0:t();if(!i)return[];n.clear(),m.clear();const h=qt.map(D=>{const Y=new i.ProviderViewModel({name:D.label,tooltip:Za(D),category:"项目底图",iconUrl:jt(D.value==="google"?"#5ea1ff":D.value===qe?"#f59e0b":"#37d67a",D.value==="google"?"G":D.value===qe?"XY":"TD"),creationFunction:()=>ue(D.value)});return n.set(D.value,Y),m.set(Y,D.value),Y}),R=L();return C.value=R.map((D,Y)=>{const se=String((D==null?void 0:D.name)||`官方底图 ${Y+1}`).trim(),le=ei(se,Y);return n.set(le,D),m.set(D,le),{value:le,label:`官方 · ${se}`,description:String((D==null?void 0:D.tooltip)||se),source:"official"}}),[...h,...R]}function Ae(){const i=t==null?void 0:t();return i?(f.clear(),M.clear(),Xt.map(h=>{const R=new i.ProviderViewModel({name:h.label,tooltip:h.description||h.label,category:"项目地形",iconUrl:jt(Ya(h.value),ja(h.value)),creationFunction:()=>U(h.value)});return f.set(h.value,R),M.set(R,h.value),R})):[]}function I(i=[]){return n.get(A.value)||i[0]}function k(i=[]){return f.get(w.value)||i[0]}function L(){const i=t==null?void 0:t();if(typeof(i==null?void 0:i.createDefaultImageryProviderViewModels)!="function")return[];try{return i.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function ue(i){return i==="google"?H():i===qe?de():Ee()}function Ee(){const i=t==null?void 0:t();return[new i.UrlTemplateImageryProvider({url:`${it}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${c}`,subdomains:at,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:18})]}function H(){const i=t==null?void 0:t();return[new i.UrlTemplateImageryProvider({url:`${a}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:20})]}function de(){const i=t==null?void 0:t(),h=Yt(W.value);return h.valid?[new i.UrlTemplateImageryProvider({url:h.url,subdomains:h.subdomains,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(r.warning(h.message,{closable:!0}),Ee())}function Oe(){const i=t==null?void 0:t();return new i.UrlTemplateImageryProvider({url:`${it}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${c}`,subdomains:at,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:10})}function Ve(){const i=t==null?void 0:t();return new i.UrlTemplateImageryProvider({url:`${it}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${c}`,subdomains:at,tilingScheme:new i.WebMercatorTilingScheme,maximumLevel:18})}function Ze(){var ce,Me,He,je,Qe;ze();const i=t==null?void 0:t(),h=(Me=(ce=e==null?void 0:e())==null?void 0:ce.baseLayerPicker)==null?void 0:Me.viewModel;if(!h||!((He=i==null?void 0:i.knockout)!=null&&He.getObservable))return;const R=i.knockout.getObservable(h,"selectedImagery"),D=i.knockout.getObservable(h,"selectedTerrain"),Y=[],se=(je=R==null?void 0:R.subscribe)==null?void 0:je.call(R,et=>{const Ie=m.get(et);Ie&&(A.value!==Ie&&(A.value=Ie),Ne())}),le=(Qe=D==null?void 0:D.subscribe)==null?void 0:Qe.call(D,et=>{const Ie=M.get(et);Ie&&(w.value!==Ie&&(w.value=Ie),_(Ie))});se&&Y.push(se),le&&Y.push(le),E=Y}function ze(){E.forEach(i=>{var h;return(h=i==null?void 0:i.dispose)==null?void 0:h.call(i)}),E=[]}function Je(){return Ne(),!0}function De(){const i=e==null?void 0:e();if(i!=null&&i.imageryLayers)for(;S.length;){const h=S.pop();try{i.imageryLayers.remove(h,!0)}catch{}}}function Ne(){var i,h,R;Re(),Ye(),g(),(R=(h=(i=e==null?void 0:e())==null?void 0:i.scene)==null?void 0:h.requestRender)==null||R.call(h)}function Re(){var h,R;const i=e==null?void 0:e();!i||!(t!=null&&t())||(ne.value?Se():ve(),K.value?j():Fe(),(R=(h=i.scene).requestRender)==null||R.call(h))}function Se(){var h,R,D,Y;const i=e==null?void 0:e();if(!(i!=null&&i.imageryLayers)||l)return l&&((R=(h=i==null?void 0:i.imageryLayers)==null?void 0:h.raiseToTop)==null||R.call(h,l)),l;try{return l=i.imageryLayers.addImageryProvider(Oe()),(Y=(D=i.imageryLayers).raiseToTop)==null||Y.call(D,l),l}catch(se){return r.error("天地图国界线图层加载失败",se),null}}function j(){var h,R,D,Y;const i=e==null?void 0:e();if(!(i!=null&&i.imageryLayers)||p)return p&&((R=(h=i==null?void 0:i.imageryLayers)==null?void 0:h.raiseToTop)==null||R.call(h,p)),p;try{return p=i.imageryLayers.addImageryProvider(Ve()),(Y=(D=i.imageryLayers).raiseToTop)==null||Y.call(D,p),p}catch(se){return r.error("天地图文字标注图层加载失败",se),null}}function ve(){const i=e==null?void 0:e();if(!(!l||!(i!=null&&i.imageryLayers))){try{i.imageryLayers.remove(l,!0)}catch{}l=null}}function Fe(){const i=e==null?void 0:e();if(!(!p||!(i!=null&&i.imageryLayers))){try{i.imageryLayers.remove(p,!0)}catch{}p=null}}async function Ye(){var h,R,D;const i=e==null?void 0:e();!((h=i==null?void 0:i.scene)!=null&&h.primitives)||!(t!=null&&t())||(Z.value?await G():X(),(D=(R=i.scene).requestRender)==null||D.call(R))}async function g(){var h,R,D;const i=e==null?void 0:e();!((h=i==null?void 0:i.scene)!=null&&h.primitives)||!(t!=null&&t())||(B.value?await y():z(),(D=(R=i.scene).requestRender)==null||D.call(R))}async function y(){var D,Y,se;const i=e==null?void 0:e(),h=t==null?void 0:t();if(!((D=i==null?void 0:i.scene)!=null&&D.primitives))return null;if(F)return i.scene.globe.show=!1,F;if(N)return N;if(typeof(h==null?void 0:h.createGooglePhotorealistic3DTileset)!="function")return r.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),B.value=!1,null;const R=++b;ht(h,u),N=h.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const le=await N;return R!==b||!B.value?(Vt(le),null):(F=i.scene.primitives.add(le),i.scene.globe.show=!1,i.scene.skyAtmosphere.show=!0,(se=(Y=i.scene).requestRender)==null||se.call(Y),F)}catch(le){return R!==b||(B.value=!1,r.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),r.error("Google Photorealistic 3D Tiles 初始化失败",le)),null}finally{R===b&&(N=null)}}function z(){var h,R,D;const i=e==null?void 0:e();if(b+=1,N=null,!F||!((h=i==null?void 0:i.scene)!=null&&h.primitives)){(R=i==null?void 0:i.scene)!=null&&R.globe&&(i.scene.globe.show=!0);return}try{i.scene.primitives.remove(F)}catch{}F=null,(D=i==null?void 0:i.scene)!=null&&D.globe&&(i.scene.globe.show=!0)}async function G(){var D,Y,se,le;const i=e==null?void 0:e(),h=t==null?void 0:t();if(!((D=i==null?void 0:i.scene)!=null&&D.primitives)||v)return v;if(x)return x;if(typeof((Y=h==null?void 0:h.Cesium3DTileset)==null?void 0:Y.fromIonAssetId)!="function"&&typeof(h==null?void 0:h.createOsmBuildingsAsync)!="function")return r.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),Z.value=!1,null;const R=++P;ht(h,u),await oe(),x=Ka(h,{maximumScreenSpaceError:8});try{const ce=await x;return R!==P||!Z.value?(Vt(ce),null):(v=i.scene.primitives.add(ce),(le=(se=i.scene).requestRender)==null||le.call(se),v)}catch(ce){return R!==P||(Z.value=!1,r.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),r.error("Cesium OSM 建筑图层初始化失败",ce)),null}finally{R===P&&(x=null)}}function X(){var h,R,D;const i=e==null?void 0:e();if(P+=1,x=null,!(!v||!((h=i==null?void 0:i.scene)!=null&&h.primitives))){try{i.scene.primitives.remove(v)}catch{}v=null,(D=(R=i.scene).requestRender)==null||D.call(R)}}async function oe(){if(w.value==="cesiumWorld")return!0;w.value="cesiumWorld";const i=await s("cesiumWorld");return i||r.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),i}function he(i,h={}){var se,le,ce;const R=e==null?void 0:e();if(!R||!(t!=null&&t()))return!1;const D=(se=R.baseLayerPicker)==null?void 0:se.viewModel,Y=n.get(i);if(D&&Y){if(De(),h.forceReload&&D.selectedImagery===Y){const Me=n.get("tianditu");Me&&Me!==Y&&(D.selectedImagery=Me)}return D.selectedImagery!==Y&&(D.selectedImagery=Y),Ne(),!0}try{return De(),ue(i).forEach(He=>{S.push(R.imageryLayers.addImageryProvider(He))}),Re(),(ce=(le=R.scene).requestRender)==null||ce.call(le),!0}catch(Me){return r.error("地图源切换失败",Me),!1}}function o(){return s(w.value)}async function s(i){var ce,Me,He,je,Qe,et,Ie,Tt,wt,Mt,Lt;const h=e==null?void 0:e(),R=t==null?void 0:t();if(!h||!R)return!1;const D=(ce=h.baseLayerPicker)==null?void 0:ce.viewModel,Y=f.get(i);if(D&&Y)return D.selectedTerrain!==Y&&(D.selectedTerrain=Y),_(i),(He=(Me=h.scene).requestRender)==null||He.call(Me),!0;const se=++T;if(i==="ellipsoid")return h.terrainProvider=new R.EllipsoidTerrainProvider,_(i),(Qe=(je=h.scene).requestRender)==null||Qe.call(je),!0;if(i==="cesiumWorld")try{const Ue=await q();return se!==T?!1:(h.terrainProvider=Ue,_(i),(Ie=(et=h.scene).requestRender)==null||Ie.call(et),!0)}catch(Ue){return se!==T||(h.terrainProvider=new R.EllipsoidTerrainProvider,_("ellipsoid"),r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",Ue)),!1}if(i==="arcgisWorld")try{const Ue=await ae();return se!==T?!1:(h.terrainProvider=Ue,_(i),(wt=(Tt=h.scene).requestRender)==null||wt.call(Tt),!0)}catch(Ue){return se!==T||(h.terrainProvider=new R.EllipsoidTerrainProvider,_("ellipsoid"),r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",Ue)),!1}const le=Bt(R);try{return h.terrainProvider=new le({url:`${it}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:at,token:c}),_(i),(Lt=(Mt=h.scene).requestRender)==null||Lt.call(Mt),!0}catch(Ue){return h.terrainProvider=new R.EllipsoidTerrainProvider,_("ellipsoid"),r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",Ue),!1}}function _(i){var R;const h=e==null?void 0:e();(R=h==null?void 0:h.scene)!=null&&R.globe&&(h.scene.globe.depthTestAgainstTerrain=i!=="ellipsoid")}function U(i){const h=t==null?void 0:t();if(i==="ellipsoid")return new h.EllipsoidTerrainProvider;if(i==="cesiumWorld")return q().catch(D=>(r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",D),fe(i,"ellipsoid"),new h.EllipsoidTerrainProvider));if(i==="arcgisWorld")return ae().catch(D=>(r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",D),fe(i,"ellipsoid"),new h.EllipsoidTerrainProvider));const R=Bt(h);try{return new R({url:`${it}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:at,token:c})}catch(D){return r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",D),new h.EllipsoidTerrainProvider}}async function q(){var R,D;const i=t==null?void 0:t();ht(i,u);const h={requestWaterMask:!1,requestVertexNormals:!0};if(typeof i.createWorldTerrainAsync=="function")return i.createWorldTerrainAsync(h);if(typeof i.createWorldTerrain=="function")return i.createWorldTerrain(h);if(typeof((R=i.CesiumTerrainProvider)==null?void 0:R.fromIonAssetId)=="function")return i.CesiumTerrainProvider.fromIonAssetId(1,h);if((D=i.IonResource)!=null&&D.fromAssetId&&i.CesiumTerrainProvider){const Y=await i.IonResource.fromAssetId(1);return new i.CesiumTerrainProvider({url:Y,...h})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function ae(){var h;const i=t==null?void 0:t();if(typeof((h=i==null?void 0:i.ArcGISTiledElevationTerrainProvider)==null?void 0:h.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return i.ArcGISTiledElevationTerrainProvider.fromUrl($a)}function fe(i,h){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{w.value===i&&(w.value=h)},0)}function me({overlayId:i,value:h}){if(i==="tdt-boundaries"){ne.value=!!h;return}if(i==="tdt-text-labels"){K.value=!!h;return}if(i==="cesium-osm-buildings"){Z.value=!!h;return}i==="google-photorealistic-3d-tiles"&&(B.value=!!h)}function Be({url:i}){const h=String(i||"").trim(),R=Yt(h);if(!R.valid){r.warning(R.message,{closable:!0});return}if(W.value=h,A.value===qe){he(qe,{forceReload:!0})&&r.success("已加载自定义 XYZ 图源");return}A.value=qe,r.success("已切换到自定义 XYZ 图源")}function Ce(){De(),ve(),Fe(),X(),z(),ze()}return{activeBasemap:A,activeTerrain:w,customXyzBasemapUrl:W,basemapOptions:ge,terrainOptions:Xt,overlayOptions:xe,createImageryProviderViewModels:be,createTerrainProviderViewModels:Ae,getSelectedImageryProviderViewModel:I,getSelectedTerrainProviderViewModel:k,bindLayerPickerStateSync:Ze,addBaseImageryLayers:Je,initCustomTerrain:o,applyBasemap:he,applyTerrain:s,handleOverlayToggle:me,handleCustomBasemapSubmit:Be,cleanupLayers:Ce}}function Ya(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function ja(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function Vt(e){var t,r;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(r=e.destroy)==null||r.call(e)}catch{}}async function Ka(e,t={}){var r;if(typeof((r=e==null?void 0:e.Cesium3DTileset)==null?void 0:r.fromIonAssetId)=="function"){const a=await e.Cesium3DTileset.fromIonAssetId(qa,t);return!a.style&&typeof e.Cesium3DTileStyle=="function"&&(a.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),a}return e.createOsmBuildingsAsync(t)}function Za(e){return e.value!==qe?e.description||e.label:`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`}function Yt(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let r=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const a=r.match(/\{([a-z0-9])-([a-z0-9])\}/i);let c=[];return a?(c=Ja(a[1],a[2]),r=r.replace(a[0],"{s}")):/\{s\}/i.test(r)&&(c=["a","b","c"]),!/\{z\}/.test(r)||!/\{x\}/.test(r)||!/\{y\}/.test(r)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:r,subdomains:c}:Qa(r)?{valid:!0,message:"",url:r,subdomains:c}:{valid:!1,message:"URL 格式不合法",url:r,subdomains:c}}function Ja(e,t){const r=String(e||"").charCodeAt(0),a=String(t||"").charCodeAt(0);if(!Number.isFinite(r)||!Number.isFinite(a))return[];const c=r<=a?1:-1,u=[];for(let l=r;c>0?l<=a:l>=a;l+=c)u.push(String.fromCharCode(l));return u}function Qa(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",r=new URL(e,t);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}function ei(e,t){const r=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${r||"basemap"}`}function jt(e,t){const r=String(t||"").replace(/[<>&"']/g,"").slice(0,2),a=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${r}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(a)}`}function ti({getViewer:e,getCesium:t,message:r}){function a(l){const p=e==null?void 0:e(),v=t==null?void 0:t();if(!p||!v)return;const x=typeof l=="number"?l:2;p.camera.flyTo({destination:v.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-v.Math.PI_OVER_TWO,roll:0},duration:x})}function c(){const l=e==null?void 0:e(),p=t==null?void 0:t();!l||!p||l.camera.flyTo({destination:p.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:p.Math.toRadians(0),pitch:p.Math.toRadians(-25),roll:0},duration:3})}async function u(){const l=e==null?void 0:e(),p=t==null?void 0:t();if(!(!l||!p))try{const v=await p.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");l.scene.primitives.add(v),l.flyTo(v,{duration:3,offset:new p.HeadingPitchRange(p.Math.toRadians(0),p.Math.toRadians(-25),v.boundingSphere.radius*2.5)})}catch(v){r.error(`加载模型失败: ${v}`),r.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:a,flyToEverest:c,loadCustomTileset:u}}const ri="cesium_tool_panel_open";function ni({fluidPanelRef:e,sceneActions:t={},wind:r={},panelStorageKey:a=ri}={}){const c=V(tt(a,!0)),u=V({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),l=V({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),p=V({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),v=Te(()=>{var b,T,E,S,C,n;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:u.value.atmosphere||u.value.fog?"启用":"关闭",statusTone:u.value.atmosphere||u.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:u.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:u.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:u.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:u.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(b=r.wind2D)!=null&&b.value?"已加载":"未加载",statusTone:(T=r.wind2D)!=null&&T.value?"success":"neutral",actions:[{id:"load",label:(E=r.wind2D)!=null&&E.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((S=r.wind2D)!=null&&S.value)}],controls:ai((C=r.windParams)==null?void 0:C.value,!!((n=r.wind2D)!=null&&n.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:p.value.isPicking?"等待选点":p.value.hasFluid?"已创建":"未创建",statusTone:p.value.isPicking?"warning":p.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:p.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:p.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!p.value.hasFluid&&!p.value.isPicking}],controls:ii(l.value,p.value)}]});we(c,b=>{st(a,b)});function x({moduleId:b,actionId:T}){var S,C;(C=(S={scene:{home:()=>{var n;return(n=t.flyToHome)==null?void 0:n.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:r.loadSimulatedWind,clear:r.clearWind2D},fluid:{pick:()=>{var n,m;return(m=(n=e==null?void 0:e.value)==null?void 0:n.startPickHeightMap)==null?void 0:m.call(n)},clear:()=>{var n,m;return(m=(n=e==null?void 0:e.value)==null?void 0:n.clearFluid)==null?void 0:m.call(n)}}}[b])==null?void 0:S[T])==null||C.call(S)}function P({moduleId:b,controlId:T,value:E}){var S,C;if(b==="effects"&&T in u.value){u.value={...u.value,[T]:!!E};return}if(b==="wind"&&T in(((S=r.windParams)==null?void 0:S.value)||{})){(C=r.setWindParam)==null||C.call(r,T,E);return}b==="fluid"&&T in l.value&&(l.value={...l.value,[T]:T==="waterColor"?E:Number(E)})}function F(b){const T=nt(b==null?void 0:b.waterLevel),E=nt(b==null?void 0:b.waterLevelMin),S=nt(b==null?void 0:b.waterLevelMax);p.value={isPicking:!!(b!=null&&b.isPicking),hasFluid:!!(b!=null&&b.hasFluid),selectedText:(b==null?void 0:b.selectedText)||"",waterLevel:T,waterLevelMin:E,waterLevelMax:S},T!==null&&(l.value={...l.value,waterLevel:T})}function N(){var b;(b=r.clearWind2D)==null||b.call(r)}return{toolPanelOpen:c,advancedEffectControls:u,fluidParams:l,fluidState:p,toolModules:v,handleToolAction:x,handleToolControlChange:P,handleFluidStateChange:F,cleanupTools:N}}function ai(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function ii(e,t={}){const r=nt(t.waterLevelMin),a=nt(t.waterLevelMax),c=r!==null&&a!==null,u=c?Math.min(r,a):0,l=c?Math.max(r,a):0,p=nt(e.waterLevel),v=c?oi(p??u,u,l):0,x=c?Math.max((l-u)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:u,max:l,step:x,value:v,displayValue:c?`${si(v)} m`:"先捕捉",disabled:!c,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function nt(e){const t=Number(e);return Number.isFinite(t)?t:null}function oi(e,t,r){return Math.max(t,Math.min(r,e))}function si(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const ye={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},li=new Float32Array([-1,-1,1,-1,1,1,-1,1]),ci=new Float32Array([0,0,1,0,1,1,0,1]),ui=new Uint16Array([0,1,2,0,2,3]);function Ke(e,t,r){return Math.max(t,Math.min(r,e))}function Q(e,t){const r=Number(e);return Number.isFinite(r)?r:t}function di(e,t){const r=t.getParameter(t.MAX_TEXTURE_SIZE),a=Math.min(2048,r),c=Math.max(1,Math.floor(e)),u=Math.sqrt(c),l=Math.log2(u),p=Number.isFinite(l)?Math.round(l):4;let v=Math.pow(2,p);return v=Ke(v,16,a),v}function hi(e){const t=e*e,r=new Float32Array(t*4);for(let a=0;a<t;a+=1){const c=a*4;r[c]=Math.random(),r[c+1]=Math.random(),r[c+2]=Math.random(),r[c+3]=Math.random()}return r}function fi(e){return new Float32Array(e*e*4)}function mi(e,t,r,a,c){const u=t.createTexture();if(!u)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,u),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,r,a,0,t.RGBA,t.FLOAT,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let l=!1;return{_context:e,_texture:u,_target:t.TEXTURE_2D,_width:r,_height:a,destroy(){l||(t.deleteTexture(u),l=!0)}}}class pi{constructor(t,r={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=r.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const a={...ye,...r};this.speedFactor=Q(a.speedFactor,ye.speedFactor),this.cullSpeedMin=Q(a.cullSpeedMin,ye.cullSpeedMin),this.cullSpeedMax=Q(a.cullSpeedMax,ye.cullSpeedMax),this.windSpeedMin=Q(a.windSpeedMin,ye.windSpeedMin),this.windSpeedMax=Q(a.windSpeedMax,ye.windSpeedMax),this.arrowLength=Q(a.arrowLength,ye.arrowLength),this.trailLength=Q(a.trailLength,ye.trailLength),this.decaySpeed=Q(a.decaySpeed,ye.decaySpeed),this.alphaFactor=Q(a.alphaFactor,ye.alphaFactor),this.maxWindSpeed=Q(a.maxWindSpeed,ye.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=Q(r.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const r=Q(t.longitude,NaN),a=Q(t.latitude,NaN),c=Array.isArray(t.altitude)?t.altitude:[],u=Array.isArray(t.sizeMesh)?t.sizeMesh:[],l=Array.isArray(t.count)?t.count:[],p=Array.isArray(t.hspeed)?t.hspeed:[],v=Array.isArray(t.hdir)?t.hdir:[],x=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(r)||!Number.isFinite(a))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const P=c.length;if(P<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(u.length!==P||l.length!==P)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const F=l.map(w=>Math.max(1,Math.floor(Q(w,1)))),N=u.map(w=>Math.max(1,Q(w,1))),b=c.map(w=>Q(w,0)),T=F.reduce((w,W)=>w+W*W,0);if(p.length<T||v.length<T||x.length<T)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=P,this.visibleLayerMin=0,this.visibleLayerMax=P-1,this._altitudes=b.slice(),this._maxNx=Math.max(...F),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*P;const E=new Float32Array(this._atlasWidth*this._atlasHeight*4);let S=0;for(let w=0;w<P;w+=1){const W=F[w],te=W;for(let ne=0;ne<te;ne+=1)for(let K=0;K<W;K+=1){const Z=S+ne*W+K,B=((w*this._maxNy+ne)*this._atlasWidth+K)*4,ge=Number(p[Z]),xe=Number(v[Z]),be=Number(x[Z]);if(!(Number.isFinite(ge)&&Number.isFinite(xe))){E[B]=0,E[B+1]=0,E[B+2]=0,E[B+3]=0;continue}const I=xe*Math.PI/180;E[B]=ge*Math.sin(I),E[B+1]=ge*Math.cos(I),E[B+2]=Number.isFinite(be)?be:0,E[B+3]=1}S+=W*te}this._createOrReplaceWindAtlasTexture(E);const C=Math.max(...N),n=this._maxNx*C,m=n/2/111320,f=a*Math.PI/180,M=Math.max(1e-6,Math.abs(Math.cos(f))),A=n/2/(111320*M);this._bounds={minLon:r-A,maxLon:r+A,minLat:a-m,maxLat:a+m,minHeight:Math.min(...b),maxHeight:Math.max(...b)},this._dataPointCount=T,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const r=Math.max(1,Math.floor(Q(t,1))),a=di(r,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&a===this._particleTextureSize||(this._particleTextureSize=a,this._particleCount=a*a,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const r=Ke(Q(t,this.particleDensity),.05,10);if(this.particleDensity=r,this._dataPointCount<=0)return;const a=Math.max(1,Math.floor(this._dataPointCount*r));this.setParticleCount(a)}setBounds(t,r,a,c){const u=Q(t,NaN),l=Q(r,NaN),p=Q(a,NaN),v=Q(c,NaN);if(!Number.isFinite(u)||!Number.isFinite(l)||!Number.isFinite(p)||!Number.isFinite(v))return;const x=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};x.minLon=Math.min(u,l),x.maxLon=Math.max(u,l),x.minLat=Math.min(p,v),x.maxLat=Math.max(p,v),this._bounds=x,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,r=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,r,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const c=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[c],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=c,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=mi(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,r=this._particleTextureSize,a=hi(r),c=fi(r);for(let u=0;u<2;u+=1){this._particlePositionTextures[u]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:a},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[u]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:c},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[u]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[u],this._velocityTextures[u]],destroyAttachments:!1});const l=this._framebuffers[u]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,l),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,r=t.Buffer.createVertexBuffer({context:this._context,typedArray:li,usage:t.BufferUsage.STATIC_DRAW}),a=t.Buffer.createVertexBuffer({context:this._context,typedArray:ci,usage:t.BufferUsage.STATIC_DRAW}),c=t.Buffer.createIndexBuffer({context:this._context,typedArray:ui,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:r,componentsPerAttribute:2},{index:1,vertexBuffer:a,componentsPerAttribute:2}],indexBuffer:c})}_buildParticleVertexArray(){const t=this._Cesium,r=new Float32Array(this._drawVertexCount);for(let a=0;a<r.length;a+=1)r[a]=a;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:r,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,r=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:a,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,r=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:r,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,r=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:r,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=Ke(Math.floor(Q(this.visibleLayerMin,0)),0,this._layerCount-1),r=Ke(Math.floor(Q(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:r}}_normalizeSpeedRange(t,r){const a=Math.max(1e-4,Q(this.maxWindSpeed,ye.maxWindSpeed)),c=Ke(Q(t,0)/a,0,1),u=Ke(Q(r,a)/a,0,1);return{min:Math.min(c,u),max:Math.max(c,u)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>Q(this.speedFactor,ye.speedFactor),maxWindSpeed:()=>Math.max(1e-4,Q(this.maxWindSpeed,ye.maxWindSpeed)),decaySpeed:()=>Ke(Q(this.decaySpeed,ye.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>Q(this.arrowLength,ye.arrowLength),trailLength:()=>Q(this.trailLength,ye.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Ke(Q(this.alphaFactor,ye.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function gi({getViewer:e,getCesium:t,message:r}){const a=V(null),c=V({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function u(){var P,F;const x=e==null?void 0:e();if(a.value){try{(F=(P=x==null?void 0:x.scene)==null?void 0:P.primitives)==null||F.remove(a.value)}catch{}a.value.destroy(),a.value=null}}function l(){const x=e==null?void 0:e(),P=t==null?void 0:t();if(!x||!P){r.error("Cesium 尚未初始化");return}u();const F=vi(P);a.value=new pi(x,{maxWindSpeed:20,cesium:P,speedFactor:c.value.speedFactor,arrowLength:c.value.arrowLength,trailLength:c.value.trailLength,alphaFactor:c.value.alphaFactor}),a.value.loadData(F),x.scene.primitives.add(a.value),a.value.flyTo(),r.success("风场加载成功，可通过下方滑块调节样式")}function p(){a.value&&(a.value.speedFactor=c.value.speedFactor,a.value.arrowLength=c.value.arrowLength,a.value.trailLength=c.value.trailLength,a.value.alphaFactor=c.value.alphaFactor)}function v(x,P){return x in c.value?(c.value={...c.value,[x]:Number(P)},p(),!0):!1}return{wind2D:a,windParams:c,clearWind2D:u,loadSimulatedWind:l,setWindParam:v}}function vi(e){const c=[0,2e3,5e3,1e4,15e3],u=[3e4,3e4,25e3,25e3,2e4],l=[30,30,25,25,20],p=l.reduce((N,b)=>N+b*b,0),v=new Array(p),x=new Array(p),P=new Array(p);let F=0;for(let N=0;N<5;N++){const b=l[N],T=l[N],E=u[N];for(let S=0;S<T;S++)for(let C=0;C<b;C++){const n=F+S*b+C,m=(C-b/2)*(E/111320),f=(S-T/2)*(E/111320/Math.cos(e.Math.toRadians(35))),A=Math.atan2(f,m)+Math.PI/2+.2*Math.sin(C*.5)*Math.cos(S*.5);x[n]=e.Math.toDegrees(A)%360;const w=Math.sqrt(m*m+f*f),te=Math.max(0,1-w/15);v[n]=(5+N*2)*te+2*Math.random(),P[n]=.5*Math.sin(C*.3)*Math.cos(S*.3)}F+=b*T}return{longitude:104,latitude:35,altitude:c,sizeMesh:u,count:l,hspeed:v,hdir:x,vspeed:P}}const yi={key:3,class:"fps-chart-panel","aria-label":"实时帧率折线图"},xi={class:"fps-chart-head"},_i={class:"fps-chart",viewBox:"0 0 160 48",preserveAspectRatio:"none","aria-hidden":"true"},bi=["points"],Si={class:"map-controls-group"},Ti={class:"mouse-position-content"},wi={__name:"CesiumContainer",setup(e){let t=null,r=null;const a="4267820f43926eaf808d61dc07269beb",c="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzRhZjM0ZC02MmYxLTRhNzgtYTkxNi00YWM2MmMxNmNhMWIiLCJpZCI6MTkzNjkxLCJpYXQiOjE3MDY5NDA2ODF9.mKu1zCK-GOjwDem9-J_Ksv0xEGNsN1zGuShYzOuXJsg",u=_t(),l=V(!1),p=V(null),v=()=>r,x=()=>t||window.Cesium,P=Va({getViewer:v,getCesium:x,message:u,backendBaseUrl:nr,tiandituToken:a,cesiumIonToken:c}),{activeBasemap:F,activeTerrain:N,customXyzBasemapUrl:b,basemapOptions:T,terrainOptions:E,overlayOptions:S,createImageryProviderViewModels:C,createTerrainProviderViewModels:n,getSelectedImageryProviderViewModel:m,getSelectedTerrainProviderViewModel:f,bindLayerPickerStateSync:M,addBaseImageryLayers:A,initCustomTerrain:w,handleOverlayToggle:W,handleCustomBasemapSubmit:te,cleanupLayers:ne}=P,{coordinateDisplay:K,setupInteractions:Z,cleanupInteractions:B}=Ua({getViewer:v,getCesium:x}),{frameRateDisplay:ge,frameRateLinePoints:xe,setupFrameRateMonitor:be,cleanupFrameRateMonitor:Ae}=Ba({getViewer:v}),{installCreditHider:I,cleanupCreditHider:k}=Oa({getViewer:v}),L=ti({getViewer:v,getCesium:x,message:u}),{flyToHome:ue}=L,Ee=gi({getViewer:v,getCesium:x,message:u}),{toolPanelOpen:H,advancedEffectControls:de,fluidParams:Oe,toolModules:Ve,handleToolAction:Ze,handleToolControlChange:ze,handleFluidStateChange:Je,cleanupTools:De}=ni({fluidPanelRef:p,sceneActions:L,wind:Ee});async function Ne(){Kt("正在初始化 3D 场景...");try{if(t=await Ma({ionToken:c}),!t||!document.getElementById("cesiumContainer"))return;Re(),Z(),be();const Se=A(),j=await w();l.value=!0,Se&&j?u.success("天地图基础影像与地形加载成功。"):u.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0})}catch(Se){u.error("Cesium 运行时加载失败",Se),u.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{Zt()}}function Re(){var Fe;const Se=typeof t.Map=="function"?t.Map:t.Viewer,j=C(),ve=n();r=new Se("cesiumContainer",{baseLayerPicker:!0,geocoder:((Fe=t.IonGeocodeProviderType)==null?void 0:Fe.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:j,selectedImageryProviderViewModel:m(j),terrainProviderViewModels:ve,selectedTerrainProviderViewModel:f(ve),shouldAnimate:!0}),r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,Da(r,t),xr(r),I(),M(),ue(0)}return Jt(()=>{Ne()}),Qt(()=>{if(l.value=!1,B(),Ae(),De(),ne(),k(),r){try{r.destroy()}catch{}r=null}}),(Se,j)=>(O(),$(Pe,null,[j[10]||(j[10]=d("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),l.value?(O(),Xe(rt(Nr),{key:0,headless:"","get-viewer":v,"get-cesium":x,controls:J(de)},null,8,["controls"])):re("",!0),l.value?(O(),Xe(rt(Sa),{key:1,ref_key:"fluidPanelRef",ref:p,headless:"","get-viewer":v,"get-cesium":x,params:J(Oe),onStateChange:J(Je)},null,40,["params","onStateChange"])):re("",!0),l.value?(O(),Xe(ta,{key:2,open:J(H),"onUpdate:open":j[0]||(j[0]=ve=>mt(H)?H.value=ve:null),"active-basemap":J(F),"onUpdate:activeBasemap":j[1]||(j[1]=ve=>mt(F)?F.value=ve:null),"active-terrain":J(N),"onUpdate:activeTerrain":j[2]||(j[2]=ve=>mt(N)?N.value=ve:null),"basemap-options":J(T),"terrain-options":J(E),"overlay-options":J(S),"custom-basemap-url":J(b),modules:J(Ve),onModuleAction:J(Ze),onControlChange:J(ze),onOverlayToggle:J(W),onCustomBasemapSubmit:J(te)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):re("",!0),l.value?(O(),$("section",yi,[d("div",xi,[j[4]||(j[4]=d("span",null,"FPS",-1)),d("strong",null,ie(J(ge)),1)]),(O(),$("svg",_i,[j[5]||(j[5]=d("line",{class:"fps-grid-line",x1:"0",y1:"12",x2:"160",y2:"12"},null,-1)),j[6]||(j[6]=d("line",{class:"fps-grid-line",x1:"0",y1:"24",x2:"160",y2:"24"},null,-1)),j[7]||(j[7]=d("line",{class:"fps-grid-line",x1:"0",y1:"36",x2:"160",y2:"36"},null,-1)),J(xe)?(O(),$("polyline",{key:0,class:"fps-line",points:J(xe)},null,8,bi)):re("",!0)]))])):re("",!0),d("div",Si,[d("div",Ti,ie(J(K)),1),j[9]||(j[9]=d("div",{class:"divider"},null,-1)),d("button",{class:"home-btn",title:"回到初始位置",onClick:j[3]||(j[3]=(...ve)=>J(ue)&&J(ue)(...ve))},[...j[8]||(j[8]=[d("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[d("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},Oi=ft(wi,[["__scopeId","data-v-20a80d41"]]);export{Oi as default};
