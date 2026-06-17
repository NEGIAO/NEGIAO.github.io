const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-hkrlvPw0.js","./vendor-echarts-all-DHBw4pVz.js","./vendor-libs-RyoEAG51.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var mr=Object.defineProperty;var pr=(e,t,r)=>t in e?mr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var It=(e,t,r)=>pr(e,typeof t!="symbol"?t+"":t,r);import{_ as gt,e as Ft,N as sr,M as lr,q as gr,t as vt,L as vr,s as yr}from"./index-CYQkOPV2.js";import{_ as xr}from"./vendor-runtime-Dp1pzeXC.js";import{C as cr,o as ur,w as _e,d as z,c as X,f as p,t as ae,G as pe,W as dt,X as ct,g as ie,r as j,P as _r,a as we,u as Z,F as Fe,e as Ge,n as ve,x as Ve,S as rt,I as Nt,i as Ot,H as Oe,O as dr,q as xe,v as br,B as Sr,a4 as yt}from"./vendor-vue-CmuMwCC6.js";import{af as xt,ag as _t,ah as Tr,X as wr,e as zt,ai as ht,ac as Bt,aj as Mr,ak as Lr,al as Ht,H as Ut,T as Wt,a2 as Fr,am as Pr,an as Ar,ao as Er,ap as Cr,q as Rr,o as Dr,aq as kr}from"./vendor-libs-RyoEAG51.js";import{F as Ir,G as Nr,M as Gt}from"./HomeView-DGl_o4_f.js";import"./vendor-ol-all-ZNWqDNbP.js";import"./vendor-geotiff-B6D64MFK.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BzG5Hdu9.js";import"./vendor-axios-Bdz_Fv8M.js";function Or(e){var i;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;!t||!r||(r.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(i=t.requestRender)==null||i.call(t))}function zr(e,t){var h;const r=e==null?void 0:e.scene,i=r==null?void 0:r.globe;if(!r||!i)return;Ur(r,t),Wr(r),i.enableLighting=!0,i.showGroundAtmosphere=!0,ne(i,"dynamicAtmosphereLighting",!0),ne(i,"dynamicAtmosphereLightingFromSun",!0),ne(i,"atmosphereLightIntensity",11.5),ne(i,"atmosphereHueShift",-.015),ne(i,"atmosphereSaturationShift",.08),ne(i,"atmosphereBrightnessShift",.02),ne(i,"lightingFadeInDistance",15e6),ne(i,"lightingFadeOutDistance",22e6),ne(i,"nightFadeInDistance",9e6),ne(i,"nightFadeOutDistance",16e6),ft(t,i,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ft(t,i,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ne(i,"atmosphereRayleighScaleHeight",1e4),ne(i,"atmosphereMieScaleHeight",3200),ne(i,"atmosphereMieAnisotropy",.92),!r.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(r.skyAtmosphere=$r(t));const s=r.skyAtmosphere;s&&(s.show=!0,ne(s,"perFragmentAtmosphere",!0),ne(s,"dynamicAtmosphereLighting",!0),ne(s,"dynamicAtmosphereLightingFromSun",!0),ne(s,"hueShift",-.025),ne(s,"saturationShift",.08),ne(s,"brightnessShift",.03),ne(s,"atmosphereLightIntensity",12),ft(t,s,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ft(t,s,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ne(s,"atmosphereRayleighScaleHeight",1e4),ne(s,"atmosphereMieScaleHeight",3200),ne(s,"atmosphereMieAnisotropy",.92)),r.sun&&(r.sun.show=!0),r.moon&&(r.moon.show=!0),r.skyBox&&(r.skyBox.show=!0),"sunBloom"in r&&(r.sunBloom=!0),"highDynamicRange"in r&&(r.highDynamicRange=!0),Gr(r),(h=r.requestRender)==null||h.call(r)}function Br(e){var s;const t=e==null?void 0:e.scene,r=t==null?void 0:t.globe;if(!t||!r)return null;const i=(s=t.postProcessStages)==null?void 0:s.bloom;return{scene:$e(t,["highDynamicRange","sunBloom","light"]),fog:$e(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:$e(r,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:$e(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:$e(t.sun,["show"]),moon:$e(t.moon,["show"]),skyBox:$e(t.skyBox,["show"]),bloom:{props:$e(i,["enabled"]),uniforms:$e(i==null?void 0:i.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Hr(e,t,r){var f,x,S,w;if(!r)return;const i=e==null?void 0:e.scene,s=i==null?void 0:i.globe;if(!i||!s)return;qe(i,r.scene,t),qe(i.fog,r.fog,t),qe(s,r.globe,t),qe(i.sun,r.sun,t),qe(i.moon,r.moon,t),qe(i.skyBox,r.skyBox,t),i.skyAtmosphere&&(qe(i.skyAtmosphere,r.sky,t),r.skyAtmosphereExisted||(i.skyAtmosphere.show=!1));const h=(f=i.postProcessStages)==null?void 0:f.bloom;qe(h,(x=r.bloom)==null?void 0:x.props,t),qe(h==null?void 0:h.uniforms,(S=r.bloom)==null?void 0:S.uniforms,t),(w=i.requestRender)==null||w.call(i)}function Ur(e,t){var r;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(r=t.Color)==null?void 0:r.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}ne(e.light,"intensity",2.35)}function Wr(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,ne(t,"density",12e-5),ne(t,"minimumBrightness",.035),ne(t,"screenSpaceErrorFactor",2),ne(t,"visualDensityScalar",.16))}function Gr(e){var r;const t=(r=e==null?void 0:e.postProcessStages)==null?void 0:r.bloom;t&&(t.enabled=!0,t.uniforms&&(ne(t.uniforms,"contrast",128),ne(t.uniforms,"brightness",-.18),ne(t.uniforms,"delta",1),ne(t.uniforms,"sigma",2.5),ne(t.uniforms,"stepSize",4.2)))}function $r(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function ne(e,t,r){e&&t in e&&(e[t]=r)}function ft(e,t,r,i,s,h){!t||!(r in t)||!(e!=null&&e.Cartesian3)||(t[r]=new e.Cartesian3(i,s,h))}function $e(e,t){return e?t.reduce((r,i)=>(i in e&&(r[i]=qr(e[i])),r),{}):{}}function qe(e,t={},r){!e||!t||Object.entries(t).forEach(([i,s])=>{i in e&&(e[i]=Xr(s,r))})}function qr(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Xr(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const Vr={key:0,class:"advanced-effects-root"},Yr={class:"effects-panel"},jr={class:"panel-head"},Kr={class:"effect-switches"},Zr={class:"switch-item"},Qr={class:"switch-item"},Jr={class:"switch-item"},en={class:"switch-item"},tn={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,r=Ft(),i=j(null),s=j(!1),h=j(!1),f=j(!1),x=j(!1),S=j(!1);let w=null,R=null,C=null,U=!1,v=null,y=null,M=null,o=null,m=null,n=null,u=null,c=null,T=!1,A=null,P=0,W=0,V=typeof performance<"u"?performance.now():Date.now();function J(){return M||(M=xr(()=>import("./cesiumFxRuntime-hkrlvPw0.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(_=>{var D;const b=(D=_==null?void 0:_.getCesiumFxEchartsRuntime)==null?void 0:D.call(_);if(!b)throw new Error("Cinematic FX 图表运行时加载失败");return y=b,b}).catch(_=>{throw M=null,_}),M)}async function ee(){return y||J()}const te={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},q={hdr:null,bloom:null,sky:null};cr(()=>{le()}),ur(()=>{De()}),_e(()=>t.controls,_=>{se(_||{})},{deep:!0,immediate:!0});function se(_){Object.prototype.hasOwnProperty.call(_,"fog")&&(s.value=!!_.fog),Object.prototype.hasOwnProperty.call(_,"hbao")&&(h.value=!!_.hbao),Object.prototype.hasOwnProperty.call(_,"tiltShift")&&(f.value=!!_.tiltShift),Object.prototype.hasOwnProperty.call(_,"atmosphere")&&(x.value=!!_.atmosphere)}function le(){let _=0;o=window.setInterval(async()=>{var E,B;_+=1;const b=(E=t.getViewer)==null?void 0:E.call(t),D=((B=t.getCesium)==null?void 0:B.call(t))||window.Cesium;if(b&&D){clearInterval(o),o=null;try{ye(b),N(b),Me(b,D),$(b,D),r.success("高级视觉效果已启用。")}catch(K){r.error("高级视觉效果初始化失败",K),r.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}_>=150&&(clearInterval(o),o=null,r.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function ye(_){var D,E,B,K,ue,l;const b=_==null?void 0:_.scene;if(b){if(typeof b.highDynamicRange=="boolean"&&(q.hdr=b.highDynamicRange),(D=b.postProcessStages)!=null&&D.bloom){const d=b.postProcessStages.bloom;q.bloom={enabled:!!d.enabled,contrast:(E=d.uniforms)==null?void 0:E.contrast,brightness:(B=d.uniforms)==null?void 0:B.brightness,delta:(K=d.uniforms)==null?void 0:K.delta,sigma:(ue=d.uniforms)==null?void 0:ue.sigma,stepSize:(l=d.uniforms)==null?void 0:l.stepSize}}b.skyAtmosphere&&(q.sky={hueShift:b.skyAtmosphere.hueShift,saturationShift:b.skyAtmosphere.saturationShift,brightnessShift:b.skyAtmosphere.brightnessShift})}}function Me(_,b){var E;!((E=_==null?void 0:_.scene)!=null&&E.postProcessStages)||!(b!=null&&b.PostProcessStage)||(F(_,b),de(_,b),Ee(_,b),x.value?ce(_,b,1200):Ce(_))}function N(_){var D;const b=_==null?void 0:_.scene;(D=b==null?void 0:b.renderError)!=null&&D.addEventListener&&(b.rethrowRenderErrors=!1,c=b.renderError.addEventListener((E,B)=>{r.error("Cesium 渲染异常，已触发降级保护",B),O(),T||(T=!0,r.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function O(){s.value=!1,f.value=!1,h.value=!1,x.value=!1,w&&(w.enabled=!1),R&&(R.enabled=!1),C&&(C.enabled=!1)}function F(_,b){w||(w=new b.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new b.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),_.scene.postProcessStages.add(w),w.enabled=s.value)}function de(_,b){var E,B;const D=(E=_==null?void 0:_.scene)==null?void 0:E.postProcessStages;D&&(D.ambientOcclusion?(C=D.ambientOcclusion,U=!1):(B=b==null?void 0:b.PostProcessStageLibrary)!=null&&B.createAmbientOcclusionStage&&(C=b.PostProcessStageLibrary.createAmbientOcclusionStage(),D.add(C),U=!0),C&&(C.enabled=h.value,C.uniforms&&("intensity"in C.uniforms&&(C.uniforms.intensity=4.2),"bias"in C.uniforms&&(C.uniforms.bias=.08),"lengthCap"in C.uniforms&&(C.uniforms.lengthCap=.35),"stepSize"in C.uniforms&&(C.uniforms.stepSize=1.8),"frustumLength"in C.uniforms&&(C.uniforms.frustumLength=1200))))}function Ee(_,b){R||(R=new b.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),_.scene.postProcessStages.add(R),R.enabled=!1)}function $(_,b){const D=_==null?void 0:_.scene;D&&(u=D.preRender.addEventListener(()=>{var ue;const E=Le(_),B=Number(((ue=_==null?void 0:_.camera)==null?void 0:ue.pitch)??-1.2);P+=1;const K=typeof performance<"u"?performance.now():Date.now();if(K-V>=1e3&&(W=Math.round(P*1e3/(K-V)),P=0,V=K),w&&(w.enabled=s.value,w.uniforms.cameraHeightFactor=Te(E,150,12e3),w.uniforms.fogDensity=55e-5+(1-w.uniforms.cameraHeightFactor)*.00125),C&&(C.enabled=h.value),R){const l=B>-.62,d=l?je((B+.62)/.5):0;R.enabled=f.value&&l,R.uniforms.blurStrength=d}x.value?ce(_,b,E):Ce(_)}))}function ce(_,b,D){var l;const E=_==null?void 0:_.scene;if(!E)return;A||(A=Br(_)),zr(_,b),typeof E.highDynamicRange=="boolean"&&(E.highDynamicRange=!0);const B=(l=E.postProcessStages)==null?void 0:l.bloom;B&&(B.enabled=!0,B.uniforms&&("contrast"in B.uniforms&&(B.uniforms.contrast=149),"brightness"in B.uniforms&&(B.uniforms.brightness=-.12),"delta"in B.uniforms&&(B.uniforms.delta=1),"sigma"in B.uniforms&&(B.uniforms.sigma=3.25),"stepSize"in B.uniforms&&(B.uniforms.stepSize=5)));const K=E.skyAtmosphere;if(!K)return;const ue=Te(D,500,12e4);K.hueShift=-.035+ue*.035,K.saturationShift=-.14+ue*.09,K.brightnessShift=.03+(1-ue)*.08}function Ce(_){var B,K;const b=_==null?void 0:_.scene;if(!b)return;const D=((B=t.getCesium)==null?void 0:B.call(t))||window.Cesium;if(A){Hr(_,D,A),A=null;return}typeof b.highDynamicRange=="boolean"&&q.hdr!==null&&(b.highDynamicRange=q.hdr);const E=(K=b.postProcessStages)==null?void 0:K.bloom;E&&q.bloom&&(E.enabled=q.bloom.enabled,E.uniforms&&("contrast"in E.uniforms&&q.bloom.contrast!==void 0&&(E.uniforms.contrast=q.bloom.contrast),"brightness"in E.uniforms&&q.bloom.brightness!==void 0&&(E.uniforms.brightness=q.bloom.brightness),"delta"in E.uniforms&&q.bloom.delta!==void 0&&(E.uniforms.delta=q.bloom.delta),"sigma"in E.uniforms&&q.bloom.sigma!==void 0&&(E.uniforms.sigma=q.bloom.sigma),"stepSize"in E.uniforms&&q.bloom.stepSize!==void 0&&(E.uniforms.stepSize=q.bloom.stepSize))),b.skyAtmosphere&&q.sky&&(b.skyAtmosphere.hueShift=q.sky.hueShift,b.skyAtmosphere.saturationShift=q.sky.saturationShift,b.skyAtmosphere.brightnessShift=q.sky.brightnessShift)}function ze(){m&&(clearInterval(m),m=null)}async function Be(){var E,B;const _=!S.value;if(S.value=_,!_){ze();return}const b=(E=t.getViewer)==null?void 0:E.call(t),D=((B=t.getCesium)==null?void 0:B.call(t))||window.Cesium;if(!b||!D){S.value=!1,r.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ye(b,D),He(b,D),Re(b,D)}catch(K){S.value=!1,r.error("图表模块加载失败",K)}}async function Ye(_,b){await ee(),await _r(),i.value&&(v||(v=y.init(i.value),Ze()),n||(n=()=>{v==null||v.resize()},window.addEventListener("resize",n)),v.resize(),Re(_,b))}function He(_,b){m||(m=window.setInterval(()=>{!v||!S.value||Re(_,b)},1200))}function Re(_,b){var ue;const D=new Date,E=`${Ie(D.getHours())}:${Ie(D.getMinutes())}:${Ie(D.getSeconds())}`,B=Number((Le(_)/1e3).toFixed(2)),K=Number(b.Math.toDegrees(((ue=_==null?void 0:_.camera)==null?void 0:ue.pitch)??0).toFixed(1));ke(te.labels,E,20),ke(te.cameraHeightKm,B,20),ke(te.pitchDeg,K,20),ke(te.fps,W,20),v.setOption({xAxis:{data:te.labels},series:[{data:te.cameraHeightKm},{data:te.pitchDeg},{data:te.fps}]})}function Ze(){v&&v.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function De(){var D,E;o&&(clearInterval(o),o=null),ze();const _=(D=t.getViewer)==null?void 0:D.call(t),b=(E=_==null?void 0:_.scene)==null?void 0:E.postProcessStages;u&&(u(),u=null),c&&(c(),c=null),w&&b&&b.remove(w),w=null,R&&b&&b.remove(R),R=null,C&&(U&&b&&b.remove(C),C=null),U=!1,_&&Ce(_),n&&(window.removeEventListener("resize",n),n=null),v&&(v.dispose(),v=null),y=null,T=!1}function Le(_){var B,K,ue;const b=(K=(B=_==null?void 0:_.scene)==null?void 0:B.globe)==null?void 0:K.ellipsoid,D=(ue=_==null?void 0:_.camera)==null?void 0:ue.positionWC;if(!b||!D)return 0;const E=b.cartesianToCartographic(D);return Math.max(0,Number((E==null?void 0:E.height)??0))}function Te(_,b,D){return!Number.isFinite(_)||D<=b?0:je((_-b)/(D-b))}function je(_){return Math.min(1,Math.max(0,Number(_)||0))}function ke(_,b,D){_.push(b),_.length>D&&_.shift()}function Ie(_){return String(_).padStart(2,"0")}return(_,b)=>e.headless?ie("",!0):(z(),X("div",Vr,[p("div",Yr,[p("div",jr,[b[4]||(b[4]=p("span",{class:"panel-title"},"Cinematic FX",-1)),p("button",{class:"panel-btn",onClick:Be},ae(S.value?"隐藏图表":"显示图表"),1)]),p("div",Kr,[p("label",Zr,[pe(p("input",{"onUpdate:modelValue":b[0]||(b[0]=D=>s.value=D),type:"checkbox"},null,512),[[dt,s.value]]),b[5]||(b[5]=p("span",null,"电影级高度雾",-1))]),p("label",Qr,[pe(p("input",{"onUpdate:modelValue":b[1]||(b[1]=D=>h.value=D),type:"checkbox"},null,512),[[dt,h.value]]),b[6]||(b[6]=p("span",null,"HBAO 微阴影",-1))]),p("label",Jr,[pe(p("input",{"onUpdate:modelValue":b[2]||(b[2]=D=>f.value=D),type:"checkbox"},null,512),[[dt,f.value]]),b[7]||(b[7]=p("span",null,"移轴摄影",-1))]),p("label",en,[pe(p("input",{"onUpdate:modelValue":b[3]||(b[3]=D=>x.value=D),type:"checkbox"},null,512),[[dt,x.value]]),b[8]||(b[8]=p("span",null,"动态大气 + Bloom",-1))])]),pe(p("div",{ref_key:"chartRef",ref:i,class:"fx-chart"},null,512),[[ct,S.value]])])]))}},rn=gt(tn,[["__scopeId","data-v-1e562e70"]]),nn={key:0,class:"launcher-count"},an={class:"panel-header"},on={class:"panel-title-block"},sn={class:"panel-mark"},ln={class:"panel-copy"},cn={class:"panel-subtitle"},un={class:"panel-actions"},dn=["title"],hn={class:"panel-tabs","aria-label":"3D 工具分类"},fn=["aria-pressed","onClick"],mn={class:"panel-scroll"},pn={class:"panel-page"},gn={class:"overview-grid"},vn={class:"overview-tile"},yn={class:"overview-tile"},xn={class:"overview-tile"},_n={key:0,class:"quick-actions"},bn=["disabled","onClick"],Sn={key:1,class:"empty-state"},Tn={class:"panel-page"},wn=["aria-expanded"],Mn={class:"section-main"},Ln={class:"section-meta"},Fn={key:0,class:"section-body"},Pn={class:"option-grid"},An=["disabled","aria-pressed","title","onClick"],En={class:"custom-basemap-input-row"},Cn=["disabled"],Rn={key:0,class:"custom-basemap-current"},Dn=["aria-expanded"],kn={class:"section-main"},In={class:"section-meta"},Nn={key:0,class:"section-body"},On={class:"option-grid"},zn=["aria-pressed","title","onClick"],Bn=["aria-expanded"],Hn={class:"section-main"},Un={class:"section-meta"},Wn={key:0,class:"section-body"},Gn={class:"overlay-list"},$n=["disabled","aria-pressed","title","onClick"],qn={class:"overlay-copy"},Xn={class:"overlay-title"},Vn={key:0,class:"overlay-desc"},Yn={key:3,class:"empty-state"},jn={class:"panel-page"},Kn={class:"module-list"},Zn=["aria-expanded","onClick"],Qn={class:"module-icon"},Jn={class:"module-copy"},ei={class:"module-title"},ti={key:0,class:"module-desc"},ri={class:"module-head-side"},ni={key:0,class:"module-body"},ii={key:0,class:"module-actions"},ai=["disabled","onClick"],oi={key:1,class:"control-list"},si={class:"control-label"},li={class:"control-label-text"},ci=["aria-label","title"],ui=["min","max","step","value","disabled","onInput"],di=["min","max","step","value","disabled","onInput"],hi=["value","disabled","onInput"],fi=["value","disabled","onChange"],mi=["value"],pi=["aria-pressed","disabled","onClick"],gi={key:4,class:"control-value"},vi={key:0,class:"empty-state"},$t=2,yi={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(e,{emit:t}){const r=e,i=t,s=ee(),h=s.uiStateVersion===$t,f=j(s.activeTab||"scene"),x=j(!!s.compactMode),S=j(new Set(h?s.expandedLayerSectionIds||[]:[])),w=j(new Set(h?s.expandedModuleIds||[]:[])),R=j(r.customBasemapUrl||""),C=xe(()=>r.embedded||r.open),U=xe(()=>r.modules.find(N=>N.id==="scene")||null),v=xe(()=>{var N;return((N=U.value)==null?void 0:N.actions)||[]}),y=xe(()=>r.modules.filter(N=>N.id!=="scene")),M=xe(()=>y.value.filter(N=>N.statusTone==="success"||N.statusTone==="warning").length),o=xe(()=>r.overlayOptions.filter(N=>!!N.active).length),m=[{id:"scene",label:"场景",icon:_t},{id:"layers",label:"图层",icon:zt},{id:"modules",label:"模块",icon:xt}],n=xe(()=>{var N;return((N=r.basemapOptions.find(O=>O.value===r.activeBasemap))==null?void 0:N.label)||"未选择"}),u=xe(()=>{var N;return((N=r.terrainOptions.find(O=>O.value===r.activeTerrain))==null?void 0:N.label)||"未选择"});_e(()=>r.modules.map(N=>N.id),N=>{N.includes(f.value)||f.value==="scene"||f.value==="layers"||f.value==="modules"||(f.value="scene")},{immediate:!0}),_e([f,x,S,w],te,{deep:!0}),_e(()=>r.customBasemapUrl,N=>{N!==R.value&&(R.value=N||"")});function c(N){i("update:open",N)}function T(N){return S.value.has(N)}function A(N){const O=new Set(S.value);O.has(N)?O.delete(N):O.add(N),S.value=O}function P(N){return w.value.has(N)}function W(N){const O=new Set(w.value);O.has(N)?O.delete(N):O.add(N),w.value=O}function V(N){N!=null&&N.disabled||i("update:activeBasemap",N.value)}function J(){i("custom-basemap-submit",{url:R.value})}function ee(){if(typeof window>"u")return{};try{const N=window.localStorage.getItem(r.storageKey);return N?JSON.parse(N):{}}catch{return{}}}function te(){if(!(typeof window>"u"))try{window.localStorage.setItem(r.storageKey,JSON.stringify({uiStateVersion:$t,activeTab:f.value,compactMode:x.value,expandedLayerSectionIds:[...S.value],expandedModuleIds:[...w.value]}))}catch{}}function q(N){return{scene:_t,effects:Dr,wind:Rr,fluid:Cr}[N]||xt}function se(N,O){var de;return((de={scene:{home:Ar,everest:Ht,tileset:Pr},wind:{load:Fr,clear:Wt},fluid:{pick:Ut,clear:Wt}}[N])==null?void 0:de[O])||Er}function le(N,O){i("module-action",{moduleId:N,actionId:O})}function ye(N,O,F){const de=O.type==="range"?Number(F):F;i("control-change",{moduleId:N,controlId:O.id,value:de})}function Me(N){N.disabled||i("overlay-toggle",{overlayId:N.value,value:!N.active})}return(N,O)=>(z(),X("aside",{class:ve(["cesium-tool-shell",{"is-open":C.value,"is-embedded":e.embedded}])},[!e.embedded&&!C.value?(z(),X("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:O[0]||(O[0]=F=>c(!0))},[we(Z(xt),{size:18,"stroke-width":"2"}),O[8]||(O[8]=p("span",null,"高级控制台",-1)),M.value?(z(),X("span",nn,ae(M.value),1)):ie("",!0)])):ie("",!0),pe(p("section",{class:ve(["cesium-tool-panel",{compact:x.value}]),"aria-label":"Cesium 高级控制台"},[p("header",an,[p("div",on,[p("span",sn,[we(Z(_t),{size:18,"stroke-width":"2"})]),p("span",ln,[O[9]||(O[9]=p("span",{class:"panel-title"},"3D 高级控制台",-1)),p("span",cn,ae(n.value)+" / "+ae(u.value),1)])]),p("div",un,[p("button",{class:"icon-btn",type:"button",title:x.value?"切换为舒展布局":"切换为紧凑布局",onClick:O[1]||(O[1]=F=>x.value=!x.value)},[we(Z(Tr),{size:16,"stroke-width":"2"})],8,dn),e.embedded?ie("",!0):(z(),X("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:O[2]||(O[2]=F=>c(!1))},[we(Z(wr),{size:17,"stroke-width":"2"})]))])]),p("nav",hn,[(z(),X(Fe,null,Ge(m,F=>p("button",{key:F.id,class:ve(["tab-btn",{active:f.value===F.id}]),type:"button","aria-pressed":f.value===F.id,onClick:de=>f.value=F.id},[(z(),Ve(rt(F.icon),{size:15,"stroke-width":"2"})),p("span",null,ae(F.label),1)],10,fn)),64))]),p("div",mn,[pe(p("section",pn,[p("div",gn,[p("div",vn,[O[10]||(O[10]=p("span",{class:"overview-label"},"地图源",-1)),p("strong",null,ae(n.value),1)]),p("div",yn,[O[11]||(O[11]=p("span",{class:"overview-label"},"地形",-1)),p("strong",null,ae(u.value),1)]),p("div",xn,[O[12]||(O[12]=p("span",{class:"overview-label"},"模块",-1)),p("strong",null,ae(M.value)+"/"+ae(y.value.length),1)])]),v.value.length?(z(),X("div",_n,[(z(!0),X(Fe,null,Ge(v.value,F=>(z(),X("button",{key:F.id,class:ve(["tool-action",[F.variant||"default",{active:F.active}]]),disabled:F.disabled,type:"button",onClick:de=>le(U.value.id,F.id)},[(z(),Ve(rt(se(U.value.id,F.id)),{size:15,"stroke-width":"2"})),Nt(" "+ae(F.label),1)],10,bn))),128))])):(z(),X("div",Sn," 暂无场景快捷操作 "))],512),[[ct,f.value==="scene"]]),pe(p("section",Tn,[e.basemapOptions.length?(z(),X("div",{key:0,class:ve(["option-group",{expanded:T("basemap")}])},[p("button",{class:"section-head section-toggle",type:"button","aria-expanded":T("basemap"),onClick:O[3]||(O[3]=F=>A("basemap"))},[p("span",Mn,[we(Z(zt),{size:16,"stroke-width":"2"}),O[13]||(O[13]=p("span",null,"底图源",-1))]),p("span",Ln,[p("span",null,ae(n.value),1),we(Z(ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,wn),T("basemap")?(z(),X("div",Fn,[p("div",Pn,[(z(!0),X(Fe,null,Ge(e.basemapOptions,F=>(z(),X("button",{key:F.value,class:ve(["option-card",{active:F.value===e.activeBasemap}]),type:"button",disabled:F.disabled,"aria-pressed":F.value===e.activeBasemap,title:F.description||F.label,onClick:de=>V(F)},[p("span",null,ae(F.label),1),F.value===e.activeBasemap?(z(),Ve(Z(Bt),{key:0,size:15,"stroke-width":"2.4"})):ie("",!0)],10,An))),128))]),p("form",{class:"custom-basemap-editor",onSubmit:Ot(J,["prevent"])},[p("div",En,[we(Z(Mr),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),pe(p("input",{"onUpdate:modelValue":O[4]||(O[4]=F=>R.value=F),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Oe,R.value]]),p("button",{class:"custom-basemap-submit",type:"submit",disabled:!R.value.trim(),title:"加载自定义 XYZ"},[we(Z(Lr),{size:14,"stroke-width":"2"}),O[14]||(O[14]=p("span",null,"加载",-1))],8,Cn)]),e.customBasemapUrl?(z(),X("div",Rn,ae(e.customBasemapUrl),1)):ie("",!0)],32)])):ie("",!0)],2)):ie("",!0),e.terrainOptions.length?(z(),X("div",{key:1,class:ve(["option-group",{expanded:T("terrain")}])},[p("button",{class:"section-head section-toggle",type:"button","aria-expanded":T("terrain"),onClick:O[5]||(O[5]=F=>A("terrain"))},[p("span",kn,[we(Z(Ht),{size:16,"stroke-width":"2"}),O[15]||(O[15]=p("span",null,"地形",-1))]),p("span",In,[p("span",null,ae(u.value),1),we(Z(ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Dn),T("terrain")?(z(),X("div",Nn,[p("div",On,[(z(!0),X(Fe,null,Ge(e.terrainOptions,F=>(z(),X("button",{key:F.value,class:ve(["option-card",{active:F.value===e.activeTerrain}]),type:"button","aria-pressed":F.value===e.activeTerrain,title:F.description||F.label,onClick:de=>N.$emit("update:activeTerrain",F.value)},[p("span",null,ae(F.label),1),F.value===e.activeTerrain?(z(),Ve(Z(Bt),{key:0,size:15,"stroke-width":"2.4"})):ie("",!0)],10,zn))),128))])])):ie("",!0)],2)):ie("",!0),e.overlayOptions.length?(z(),X("div",{key:2,class:ve(["option-group",{expanded:T("overlay")}])},[p("button",{class:"section-head section-toggle",type:"button","aria-expanded":T("overlay"),onClick:O[6]||(O[6]=F=>A("overlay"))},[p("span",Hn,[we(Z(Ut),{size:16,"stroke-width":"2"}),O[16]||(O[16]=p("span",null,"叠加层",-1))]),p("span",Un,[p("span",null,ae(o.value)+"/"+ae(e.overlayOptions.length),1),we(Z(ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Bn),T("overlay")?(z(),X("div",Wn,[p("div",Gn,[(z(!0),X(Fe,null,Ge(e.overlayOptions,F=>(z(),X("button",{key:F.value,class:ve(["overlay-row",{active:!!F.active}]),type:"button",disabled:F.disabled,"aria-pressed":!!F.active,title:F.description||F.label,onClick:de=>Me(F)},[p("span",qn,[p("span",Xn,ae(F.label),1),F.description?(z(),X("span",Vn,ae(F.description),1)):ie("",!0)]),p("span",{class:ve(["toggle-control",{active:!!F.active}]),"aria-hidden":"true"},[...O[17]||(O[17]=[p("span",{class:"toggle-track"},[p("span",{class:"toggle-thumb"})],-1)])],2)],10,$n))),128))])])):ie("",!0)],2)):ie("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(z(),X("div",Yn," 暂无图层配置项 ")):ie("",!0)],512),[[ct,f.value==="layers"]]),pe(p("section",jn,[p("div",Kn,[(z(!0),X(Fe,null,Ge(y.value,F=>{var de,Ee;return z(),X("article",{key:F.id,class:ve(["module-item",{expanded:P(F.id)}])},[p("button",{class:"module-head",type:"button","aria-expanded":P(F.id),onClick:$=>W(F.id)},[p("span",Qn,[(z(),Ve(rt(q(F.id)),{size:16,"stroke-width":"2"}))]),p("span",Jn,[p("span",ei,ae(F.title),1),F.description?(z(),X("span",ti,ae(F.description),1)):ie("",!0)]),p("span",ri,[F.status?(z(),X("span",{key:0,class:ve(["module-status",F.statusTone||"neutral"])},ae(F.status),3)):ie("",!0),we(Z(ht),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Zn),P(F.id)?(z(),X("div",ni,[(de=F.actions)!=null&&de.length?(z(),X("div",ii,[(z(!0),X(Fe,null,Ge(F.actions,$=>(z(),X("button",{key:$.id,class:ve(["tool-action",[$.variant||"default",{active:$.active}]]),disabled:$.disabled,type:"button",onClick:ce=>le(F.id,$.id)},[(z(),Ve(rt(se(F.id,$.id)),{size:14,"stroke-width":"2"})),Nt(" "+ae($.label),1)],10,ai))),128))])):ie("",!0),(Ee=F.controls)!=null&&Ee.length?(z(),X("div",oi,[(z(!0),X(Fe,null,Ge(F.controls,$=>(z(),X("label",{key:$.id,class:ve(["control-row",`control-${$.type}`])},[p("span",si,[p("span",li,ae($.label),1),$.tooltip?(z(),X("span",{key:0,class:"control-help","aria-label":$.tooltip,title:$.tooltip,onClick:O[7]||(O[7]=Ot(()=>{},["prevent","stop"]))}," ? ",8,ci)):ie("",!0)]),$.type==="range"?(z(),X(Fe,{key:0},[p("input",{class:"control-range",type:"range",min:$.min,max:$.max,step:$.step,value:$.value,disabled:$.disabled,onInput:ce=>ye(F.id,$,ce.target.value)},null,40,ui),p("input",{class:"control-number",type:"number",min:$.min,max:$.max,step:$.step,value:$.value,disabled:$.disabled,onInput:ce=>ye(F.id,$,ce.target.value)},null,40,di)],64)):$.type==="color"?(z(),X(Fe,{key:1},[p("input",{class:"control-color",type:"color",value:$.value,disabled:$.disabled,onInput:ce=>ye(F.id,$,ce.target.value)},null,40,hi),p("span",{class:"control-color-swatch",style:dr({backgroundColor:$.value})},null,4)],64)):$.type==="select"?(z(),X("select",{key:2,class:"control-select",value:$.value,disabled:$.disabled,onChange:ce=>ye(F.id,$,ce.target.value)},[(z(!0),X(Fe,null,Ge($.options||[],ce=>(z(),X("option",{key:ce.value,value:ce.value},ae(ce.label),9,mi))),128))],40,fi)):$.type==="toggle"?(z(),X("button",{key:3,class:ve(["toggle-control",{active:!!$.value}]),type:"button","aria-pressed":!!$.value,disabled:$.disabled,onClick:ce=>ye(F.id,$,!$.value)},[...O[18]||(O[18]=[p("span",{class:"toggle-track"},[p("span",{class:"toggle-thumb"})],-1)])],10,pi)):ie("",!0),$.displayValue?(z(),X("span",gi,ae($.displayValue),1)):ie("",!0)],2))),128))])):ie("",!0)])):ie("",!0)],2)}),128))]),y.value.length?ie("",!0):(z(),X("div",vi," 暂无可用功能模块 "))],512),[[ct,f.value==="modules"]])])],2),[[ct,e.embedded||C.value]])],2))}},xi=gt(yi,[["__scopeId","data-v-c2b974d5"]]);function _i(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(m){return(m==null?void 0:m._view)||(m==null?void 0:m.view)}function r(m){const n=t(m);if(!(n!=null&&n.passState))throw new Error("Cesium scene passState is unavailable.");return n.passState}function i(m){const n=t(m);return(n==null?void 0:n.frustumCommandsList)||(n==null?void 0:n._frustumCommandsList)||[]}const s=`
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
`,h=`
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
`,f=`
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
`,x=`
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
`;class R{constructor(n){this.commandType=n.commandType,this.geometry=n.geometry,this.attributeLocations=n.attributeLocations,this.primitiveType=n.primitiveType,this.uniformMap=n.uniformMap,this.vertexShaderSource=n.vertexShaderSource,this.fragmentShaderSource=n.fragmentShaderSource,this.rawRenderState=n.rawRenderState,this.framebuffer=n.framebuffer,this.isPostRender=n.isPostRender,this.outputTexture=n.outputTexture,this.autoClear=e.defaultValue(n.autoClear,!1),this.preExecute=n.preExecute,this.modelMatrix=e.defaultValue(n.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(n){switch(this.commandType){case"Draw":{const u=e.VertexArray.fromGeometry({context:n,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),c=e.ShaderProgram.fromCache({context:n,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),T=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:u,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:c,framebuffer:this.framebuffer,renderState:T,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(n,u){this.geometry=u;const c=e.VertexArray.fromGeometry({context:n,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=c}update(n){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(n.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&n.commandList.push(this.clearCommand),n.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class C{constructor(){}static loadText(n){const u=new XMLHttpRequest;return u.open("GET",n,!1),u.send(),u.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(n){if(e.defined(n.arrayBufferView)){const c={};c.arrayBufferView=n.arrayBufferView,n.source=c,n.flipY=!1}return new e.Texture(n)}static createDepthFramebuffer(n,u,c){return new e.Framebuffer({context:n,colorTextures:[this.createTexture({context:n,width:u,height:c,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(u*c*4)})],depthRenderbuffer:new e.Renderbuffer({context:n,width:u,height:c,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(n,u,c,T=!1){const A={context:n,colorTextures:[u],destroyAttachments:T};return c&&(A.depthTexture=c),new e.Framebuffer(A)}static createRawRenderState(n){const T={viewport:n.viewport,depthTest:n.depthTest,depthMask:n.depthMask,blending:n.blending};return e.Appearance.getDefaultRenderState(!0,!1,T)}}const o=class o{constructor(n,u={}){if(!n)throw new Error("Cesium Viewer is required");this.viewer=n,this._initConfiguration(u),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(n){this.config={resolution:new e.Cartesian2(n.width||o.DEFAULTS.width,n.height||o.DEFAULTS.height),dimensions:n.dimensions||o.DEFAULTS.dimensions.clone(),heightRange:{min:n.minHeight??o.DEFAULTS.heightRange[0],max:n.maxHeight??o.DEFAULTS.heightRange[1]},baseHeight:n.baseHeight??o.DEFAULTS.baseHeight,fluidParams:n.fluidParams||o.DEFAULTS.fluidParams.clone(),customParams:n.customParams||o.DEFAULTS.customParams.clone(),waterColor:n.waterColor||o.DEFAULTS.waterColor.clone(),lonLat:n.lonLat||[...o.DEFAULTS.lonLat],timeStep:n.timeStep||o.DEFAULTS.timeStep,heightMapSource:n.heightMapSource||o.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(n){const u=Number(n);!Number.isFinite(u)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,u)),this.resetSimulation())}resetSimulation(){var n,u;this._frameCount=0,(u=(n=this.viewer.scene).requestRender)==null||u.call(n)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const n=()=>C.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:n(),B:n(),C:n(),D:n()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(n){if(!(n!=null&&n.arrayBufferView)||!n.width||!n.height)throw new Error("Invalid height map source.");return C.createTexture({context:this.viewer.scene.context,width:n.width,height:n.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:n.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var q,se;const n=this.viewer.scene.context,u=C.createDepthFramebuffer(n,this.config.resolution.x,this.config.resolution.y),c=this.viewer.scene,T=c.frameState,A=r(this.viewer.scene),P=c.camera,W=T.camera,V=A.framebuffer,J=e.BoundingRectangle.clone(A.viewport,new e.BoundingRectangle);let ee=null,te=[];try{A.viewport.x=0,A.viewport.y=0,A.viewport.width=this.config.resolution.x,A.viewport.height=this.config.resolution.y,A.framebuffer=u,c.camera=this.heightMapCamera,T.camera=this.heightMapCamera,T.context.uniformState.updateCamera(this.heightMapCamera),te=this._processHeightMapShaders(),this._renderDepthPrepass(A);const le=C.createTexture({context:n,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return ee=C.createFramebuffer(n,le),this._copyTexture(u.getColorTexture(0),ee),le}finally{this._restoreHeightMapShaders(te),A.framebuffer=V,e.BoundingRectangle.clone(J,A.viewport),c.camera=P,T.camera=W,W&&T.context.uniformState.updateCamera(W),ee&&!((q=ee.isDestroyed)!=null&&q.call(ee))&&ee.destroy(),u&&!((se=u.isDestroyed)!=null&&se.call(u))&&u.destroy()}}_renderDepthPrepass(n){const u=this.viewer.scene.frameState;u.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(T=>T.execute(this.viewer.scene.context,n))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const n={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...n,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:h}),this._createComputePass("B",{uniforms:{...n,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:f}),this._createComputePass("C",{uniforms:{...n,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:x}),this._createComputePass("D",{uniforms:{...n,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:S})]}_createComputePass(n,{uniforms:u,shaderSource:c}){return new R({commandType:"Compute",uniformMap:u,fragmentShaderSource:new e.ShaderSource({sources:[s,c]}),geometry:C.getFullscreenQuad(),outputTexture:this.textures[n],preExecute:T=>T.commandToExecute.outputTexture=this.textures[n]})}_createMainRenderPass(){const n=v([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new R({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[s,w]}),geometry:this._createBoxGeometry(),modelMatrix:n,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var n,u,c,T;return(T=(c=(u=(n=t(this.viewer.scene))==null?void 0:n.globeDepth)==null?void 0:u.colorFramebufferManager)==null?void 0:c._colorTextures)==null?void 0:T[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(n=>this.viewer.scene.primitives.add(n)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(n){const u=this.viewer.camera.getPickRay(n);return this.viewer.scene.globe.pick(u,this.viewer.scene)}_createOrthographicCamera(){const n=new e.Camera(this.viewer.scene);n.frustum=new e.OrthographicOffCenterFrustum;const[u,c]=this.config.lonLat,T=e.Cartesian3.fromDegrees(u,c,this.config.baseHeight),A=e.Transforms.eastNorthUpToFixedFrame(T),P=n.frustum;P.near=.01,P.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),P.left=-this.config.dimensions.x/2,P.right=this.config.dimensions.x/2,P.bottom=-this.config.dimensions.y/2,P.top=this.config.dimensions.y/2;const W=e.Matrix4.getColumn(A,2,new e.Cartesian3);e.Cartesian3.negate(W,W);const V=e.Matrix4.getColumn(A,1,new e.Cartesian3),J=e.Matrix4.getColumn(A,0,new e.Cartesian3),ee=e.Cartesian3.multiplyByScalar(W,-P.far,new e.Cartesian3);return n.position=e.Cartesian3.add(T,ee,new e.Cartesian3),n.direction=W,n.up=V,n.right=J,n}destroy(){var n,u;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(c=>{c&&this.viewer.scene.primitives.remove(c)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(c=>{var T;c&&!((T=c.isDestroyed)!=null&&T.call(c))&&c.destroy()}),this.textures={},this._heightMap&&!((u=(n=this._heightMap).isDestroyed)!=null&&u.call(n))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(n,u){const c=this.viewer.scene.context,T=r(this.viewer.scene),A=c.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>n},owner:this}),P=T.framebuffer;T.framebuffer=u,A.execute(c,T),T.framebuffer=P}_getDepthRenderCommands(){var c,T;const n=[],u=i(this.viewer.scene);for(let A=0;A<u.length;++A){const P=u[A],W=(c=P==null?void 0:P.commands)==null?void 0:c[2],V=((T=P==null?void 0:P.indices)==null?void 0:T[2])??(W==null?void 0:W.length)??0;W&&V>0&&n.push(...W.slice(0,V))}return n}_processHeightMapShaders(){const n=[],u=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),c=e.Matrix4.inverse(u,new e.Matrix4),T=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(P=>{var te;if(!((te=P==null?void 0:P.shaderProgram)!=null&&te.fragmentShaderSource)||!P.uniformMap)return;const W=Object.prototype.hasOwnProperty.call(P.uniformMap,"u_inverseEnuMatrix"),V=P.uniformMap.u_inverseEnuMatrix,J=P.shaderProgram,ee=new e.Matrix4;P.uniformMap.u_inverseEnuMatrix=()=>{const q=P.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(c,q,ee)},P.heightMap_ShaderProgram||(P.heightMap_ShaderProgram=this._getDerivedShaderProgram(T.context,P.shaderProgram,"Height_Map")),P.shaderProgram=P.heightMap_ShaderProgram,n.push({command:P,hadInverseUniform:W,originalInverseUniform:V,originalShaderProgram:J})}),n}_restoreHeightMapShaders(n){n.forEach(u=>{const{command:c,hadInverseUniform:T,originalInverseUniform:A,originalShaderProgram:P}=u;c!=null&&c.uniformMap&&(c.shaderProgram=P,T?c.uniformMap.u_inverseEnuMatrix=A:delete c.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(n,u,c){let T=n.shaderCache.getDerivedShaderProgram(u,c);return e.defined(T)||(T=this._createHeightMapShaderProgram(n,u,c)),T}_createHeightMapShaderProgram(n,u,c){const T=this._modifyFragmentShader(u.fragmentShaderSource);return n.shaderCache.createDerivedShaderProgram(u,c,{vertexShaderSource:u.vertexShaderSource,fragmentShaderSource:T,attributeLocations:u._attributeLocations})}_modifyFragmentShader(n){const u=n.sources.map(c=>e.ShaderSource.replaceMain(c,"czm_heightMap_main"));return u.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:u,defines:n.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};It(o,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let U=o;const v=(m=[0,0,0],n=[0,0,0],u=[1,1,1])=>{const c=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(n[0]))),T=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(n[1]))),A=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(n[2])));m instanceof e.Cartesian3||(m=e.Cartesian3.fromDegrees(...m));const P=e.Transforms.eastNorthUpToFixedFrame(m);e.Matrix4.multiply(P,c,P),e.Matrix4.multiply(P,T,P),e.Matrix4.multiply(P,A,P);const W=e.Matrix4.fromScale(new e.Cartesian3(...u));return e.Matrix4.multiply(P,W,new e.Matrix4)},y=`
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
    `;function M(){return new e.PostProcessStage({fragmentShader:y})}return{FluidRenderer:U,createSkyEffect:M}}const bi={key:0,class:"fluid-root"},Si={class:"fluid-panel"},Ti={class:"panel-actions"},wi=["disabled"],Mi={key:0,class:"selected-text"},Li={class:"param-list"},Fi={class:"param-row"},Pi={class:"param-row"},Ai={class:"param-row"},Ei={key:0,class:"param-row"},Ci=["min","max","step"],Ri=["min","max","step"],Di={class:"param-row color-row"},qt=1024,mt=1e4,Xt=1200,ki=100,Ii=.01,Ni=.03,Oi=60,bt=64,zi=160,Bi={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:r}){const i=e,s=r,h=Ft(),f=j(10),x=j(20),S=j(3),w=j("#0d4fa3"),R=j(null),C=j(null),U=j(null),v=j(!1),y=j(!1),M=j(null),o=j(null);let m=null,n=null,u=null,c=null,T=null,A=null,P=0;const W=xe(()=>!Number.isFinite(M.value)||!Number.isFinite(o.value)?"":`经度 ${M.value.toFixed(6)} / 纬度 ${o.value.toFixed(6)}`),V=xe(()=>Number.isFinite(C.value)&&Number.isFinite(U.value)),J=xe(()=>{if(!V.value)return 1;const l=Math.abs(U.value-C.value);return Math.max(l/1e3,.01)});_e([f,x,S,w],ke),_e(R,Ie),_e(()=>i.params,l=>{te(l||{})},{deep:!0,immediate:!0}),_e([v,y,W,R,C,U],q,{immediate:!0}),br(()=>{K(!0)});function ee(){var L,H;const l=(L=i.getViewer)==null?void 0:L.call(i),d=((H=i.getCesium)==null?void 0:H.call(i))||window.Cesium;if(!l||!d)return h.warning("Cesium 场景尚未就绪。"),null;if(!m){const G=_i(d);m=G.FluidRenderer,n=G.createSkyEffect}return{viewer:l,Cesium:d}}function te(l){Number.isFinite(Number(l.threshold))&&(f.value=Number(l.threshold)),Number.isFinite(Number(l.blend))&&(x.value=Number(l.blend)),Number.isFinite(Number(l.lightStrength))&&(S.value=Number(l.lightStrength)),De(l.waterColor)&&(w.value=l.waterColor),Number.isFinite(Number(l.waterLevel))&&(R.value=Number(l.waterLevel))}function q(){s("state-change",{isPicking:v.value,hasFluid:y.value,selectedText:W.value,waterLevel:R.value,waterLevelMin:C.value,waterLevelMax:U.value})}function se(){const l=ee();if(!l)return;const{viewer:d,Cesium:L}=l;E(),_(d,L),v.value=!0,u=new L.ScreenSpaceEventHandler(d.scene.canvas),u.setInputAction(H=>{le(d,L,H.position)},L.ScreenSpaceEventType.LEFT_CLICK)}async function le(l,d,L){var it,a;const H=je(l,L);if(!H){h.warning("未选中可用地形位置。");return}const G=++P;E();const oe=d.Cartographic.fromCartesian(H),he=d.Math.toDegrees(oe.longitude),fe=d.Math.toDegrees(oe.latitude),Ne=Number(oe.height),Pe=Number.isFinite(Ne)?Ne:0,Qe=new d.Cartesian3(mt,mt,0);sr("正在请求模拟范围高度数据...");try{B();const g=Number(f.value)||0,k=Number(x.value)||0,I=Number(S.value)||0,Y=await ye(l,d,{lon:he,lat:fe,centerHeight:Pe,dimensions:Qe}),Q=ze(Y,Pe),me=Q.baseHeight,be=Q.depth,Se=Be(Q,Pe),Ue=new d.Cartesian3(mt,mt,be);if(G!==P)return;C.value=Q.minHeight,U.value=Q.maxHeight,R.value=Se,Y||h.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),c=new m(l,{lonLat:[he,fe],width:qt,height:qt,dimensions:Ue,baseHeight:me,minHeight:Q.minHeight,maxHeight:Q.maxHeight,heightMapSource:Y,waterColor:Re(d,w.value),customParams:new d.Cartesian4(g,k,I,10),fluidParams:new d.Cartesian4(.9+I/10*.099,Math.min(1,k/50),g/5e4,Ye(Se,Q))}),M.value=he,o.value=fe,y.value=!0,(a=(it=l.scene).requestRender)==null||a.call(it),h.success("水体流体已创建。")}catch(g){h.error("水体流体创建失败",g),h.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{lr()}}async function ye(l,d,L){const H=l==null?void 0:l.terrainProvider,G=N(L.dimensions);if(!H)return null;if(d.EllipsoidTerrainProvider&&H instanceof d.EllipsoidTerrainProvider)return ce(G);if(typeof d.sampleTerrain!="function"&&typeof d.sampleTerrainMostDetailed!="function")return null;try{return await Me(l,d,L,G)}catch(oe){if(G<=bt)throw oe;return Me(l,d,L,bt)}}async function Me(l,d,L,H){const G=F(d,L,H),oe=await de(d,l.terrainProvider,G);return $(oe||G,{size:H})}function N(l){const d=Math.max(Number(l==null?void 0:l.x)||0,Number(l==null?void 0:l.y)||0),L=Math.ceil(d/Oi)+1;return O(L,bt,zi)}function O(l,d,L){return Math.max(d,Math.min(L,Math.round(l)))}function F(l,{lon:d,lat:L,centerHeight:H,dimensions:G},oe){const he=l.Cartesian3.fromDegrees(d,L,H),fe=l.Transforms.eastNorthUpToFixedFrame(he),Ne=[],Pe=Math.max(1,oe-1);for(let Qe=0;Qe<oe;Qe++){const a=(.5-Qe/Pe)*G.y;for(let g=0;g<oe;g++){const I=(g/Pe-.5)*G.x,Y=new l.Cartesian3(I,a,0),Q=l.Matrix4.multiplyByPoint(fe,Y,new l.Cartesian3);Ne.push(l.Cartographic.fromCartesian(Q))}}return Ne}async function de(l,d,L){const H=Ee(d);return Number.isInteger(H)&&typeof l.sampleTerrain=="function"?l.sampleTerrain(d,H,L):typeof l.sampleTerrainMostDetailed=="function"?l.sampleTerrainMostDetailed(d,L):l.sampleTerrain(d,10,L)}function Ee(l){const d=Number(l==null?void 0:l._bottomLevel);return Number.isFinite(d)?Math.max(0,d-1):null}function $(l,{size:d}){var G;const L=Ce(l);if(!L)return null;const H=new Float32Array(d*d*4);for(let oe=0;oe<d*d;oe++){const he=Number((G=l[oe])==null?void 0:G.height),fe=oe*4;H[fe]=Number.isFinite(he)?Te(he,L.minHeight,L.maxHeight):L.minHeight,H[fe+1]=0,H[fe+2]=0,H[fe+3]=1}return{width:d,height:d,arrayBufferView:H,minHeight:L.minHeight,maxHeight:L.maxHeight}}function ce(l){return{width:l,height:l,arrayBufferView:new Float32Array(l*l*4),minHeight:0,maxHeight:0}}function Ce(l){let d=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;for(const H of l||[]){const G=Number(H==null?void 0:H.height);Number.isFinite(G)&&(d=Math.min(d,G),L=Math.max(L,G))}return!Number.isFinite(d)||!Number.isFinite(L)?null:{minHeight:d,maxHeight:L}}function ze(l,d){const L=Number(l==null?void 0:l.minHeight),H=Number(l==null?void 0:l.maxHeight);if(Number.isFinite(L)&&Number.isFinite(H)){const he=Number(d),fe=Number.isFinite(he)?Math.min(L,H,he):Math.min(L,H),Ne=Number.isFinite(he)?Math.max(L,H,he):Math.max(L,H),Pe=Math.max(Ne-fe,Ii);return{baseHeight:fe,depth:Pe,minHeight:fe,maxHeight:fe+Pe}}const G=Number(d),oe=Number.isFinite(G)?G-ki:0;return{baseHeight:oe,depth:Xt,minHeight:oe,maxHeight:oe+Xt}}function Be(l,d){const L=l.minHeight+l.depth*Ni,H=Number(d),G=Number.isFinite(H)?H:L;return Te(G,l.minHeight,l.maxHeight)}function Ye(l,d){const L=d.maxHeight-d.minHeight;return!Number.isFinite(L)||L<=0?0:Te((l-d.minHeight)/L,0,1)}function He(){return!Number.isFinite(C.value)||!Number.isFinite(U.value)?null:{minHeight:Math.min(C.value,U.value),maxHeight:Math.max(C.value,U.value)}}function Re(l,d){const L=Le(d)||Le("#0d4fa3");return new l.Cartesian3(L.red,L.green,L.blue)}function Ze(){var L;const l=Le(w.value),d=(L=c==null?void 0:c.config)==null?void 0:L.waterColor;!l||!d||(d.x=l.red,d.y=l.green,d.z=l.blue)}function De(l){return typeof l=="string"&&/^#[0-9a-f]{6}$/i.test(l)}function Le(l){return De(l)?{red:Number.parseInt(l.slice(1,3),16)/255,green:Number.parseInt(l.slice(3,5),16)/255,blue:Number.parseInt(l.slice(5,7),16)/255}:null}function Te(l,d,L){return Math.max(d,Math.min(L,l))}function je(l,d){if(!d)return null;if(l.scene.pickPositionSupported&&typeof l.scene.pickPosition=="function"){const H=l.scene.pickPosition(d);if(H)return H}const L=l.camera.getPickRay(d);return L?l.scene.globe.pick(L,l.scene):null}function ke(){var H,G,oe;if(!(c!=null&&c.config))return;const l=Number(f.value)||0,d=Number(x.value)||0,L=Number(S.value)||0;c.config.customParams&&(c.config.customParams.x=l,c.config.customParams.y=d,c.config.customParams.z=L),c.config.fluidParams&&(c.config.fluidParams.x=.9+L/10*.099,c.config.fluidParams.y=Math.min(1,d/50),c.config.fluidParams.z=l/5e4),Ze(),(oe=(G=(H=c.viewer)==null?void 0:H.scene)==null?void 0:G.requestRender)==null||oe.call(G)}function Ie(){var G,oe,he,fe;if(!((G=c==null?void 0:c.config)!=null&&G.fluidParams))return;const l=He(),d=Number(R.value);if(!l||!Number.isFinite(d))return;const L=Te(d,l.minHeight,l.maxHeight);if(L!==d){R.value=L;return}const H=Ye(L,l);typeof c.setInitialWaterLevel=="function"?c.setInitialWaterLevel(H):(c.config.fluidParams.w=H,(fe=(he=(oe=c.viewer)==null?void 0:oe.scene)==null?void 0:he.requestRender)==null||fe.call(he))}function _(l,d){var L,H;if(!A){const G=l.scene;A={shadows:l.shadows,resolutionScale:l.resolutionScale,msaaSamples:G.msaaSamples,depthTestAgainstTerrain:G.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:G.logarithmicDepthBuffer,highDynamicRange:G.highDynamicRange,fogEnabled:(L=G.fog)==null?void 0:L.enabled,showGroundAtmosphere:G.globe.showGroundAtmosphere,skyAtmosphereShow:(H=G.skyAtmosphere)==null?void 0:H.show,enableLighting:G.globe.enableLighting}}l.shadows=!0,l.resolutionScale=1,l.scene.msaaSamples=4,l.scene.globe.depthTestAgainstTerrain=!0,l.scene.logarithmicDepthBuffer=!0,l.scene.highDynamicRange=!0,l.scene.fog&&(l.scene.fog.enabled=!0),l.scene.globe.showGroundAtmosphere=!0,l.scene.skyAtmosphere&&(l.scene.skyAtmosphere.show=!0),l.scene.globe.enableLighting=!0,!T&&n&&(T=n(d),l.scene.postProcessStages.add(T))}function b(l){if(!l||!A)return;const d=l.scene;l.shadows=A.shadows,l.resolutionScale=A.resolutionScale,A.msaaSamples!==void 0&&(d.msaaSamples=A.msaaSamples),d.globe.depthTestAgainstTerrain=A.depthTestAgainstTerrain,d.logarithmicDepthBuffer=A.logarithmicDepthBuffer,d.highDynamicRange=A.highDynamicRange,d.fog&&A.fogEnabled!==void 0&&(d.fog.enabled=A.fogEnabled),d.globe.showGroundAtmosphere=A.showGroundAtmosphere,d.skyAtmosphere&&A.skyAtmosphereShow!==void 0&&(d.skyAtmosphere.show=A.skyAtmosphereShow),d.globe.enableLighting=A.enableLighting,A=null}function D(){K(!1),h.success("水体流体已清除。")}function E(){u&&(u.destroy(),u=null),v.value=!1}function B(){if(c){try{c.destroy()}catch{}c=null,y.value=!1}}function K(l){var L,H,G;const d=(L=i.getViewer)==null?void 0:L.call(i);if(P+=1,E(),B(),M.value=null,o.value=null,R.value=null,C.value=null,U.value=null,d&&T){try{d.scene.postProcessStages.remove(T)}catch{}T=null}l&&d&&b(d),(G=(H=d==null?void 0:d.scene)==null?void 0:H.requestRender)==null||G.call(H)}function ue(){K(!0),s("close")}return t({startPickHeightMap:se,clearFluid:D}),(l,d)=>e.headless?ie("",!0):(z(),X("div",bi,[p("div",Si,[p("div",{class:"panel-head"},[d[9]||(d[9]=p("span",{class:"panel-title"},"水体流体",-1)),p("button",{class:"panel-close",title:"关闭",onClick:ue}," × ")]),p("div",Ti,[p("button",{class:ve(["action-btn primary",{active:v.value}]),onClick:se},ae(v.value?"等待选点":"捕捉高度图"),3),p("button",{class:"action-btn",disabled:!y.value&&!v.value,onClick:D}," 清除 ",8,wi)]),W.value?(z(),X("div",Mi,ae(W.value),1)):ie("",!0),p("div",Li,[p("label",Fi,[d[10]||(d[10]=p("span",null,"阈值",-1)),pe(p("input",{"onUpdate:modelValue":d[0]||(d[0]=L=>f.value=L),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Oe,f.value,void 0,{number:!0}]]),pe(p("input",{"onUpdate:modelValue":d[1]||(d[1]=L=>f.value=L),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Oe,f.value,void 0,{number:!0}]])]),p("label",Pi,[d[11]||(d[11]=p("span",null,"混合",-1)),pe(p("input",{"onUpdate:modelValue":d[2]||(d[2]=L=>x.value=L),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Oe,x.value,void 0,{number:!0}]]),pe(p("input",{"onUpdate:modelValue":d[3]||(d[3]=L=>x.value=L),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Oe,x.value,void 0,{number:!0}]])]),p("label",Ai,[d[12]||(d[12]=p("span",null,"光强",-1)),pe(p("input",{"onUpdate:modelValue":d[4]||(d[4]=L=>S.value=L),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Oe,S.value,void 0,{number:!0}]]),pe(p("input",{"onUpdate:modelValue":d[5]||(d[5]=L=>S.value=L),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Oe,S.value,void 0,{number:!0}]])]),V.value?(z(),X("label",Ei,[d[13]||(d[13]=p("span",null,"水位",-1)),pe(p("input",{"onUpdate:modelValue":d[6]||(d[6]=L=>R.value=L),type:"range",min:C.value,max:U.value,step:J.value},null,8,Ci),[[Oe,R.value,void 0,{number:!0}]]),pe(p("input",{"onUpdate:modelValue":d[7]||(d[7]=L=>R.value=L),class:"number-input",type:"number",min:C.value,max:U.value,step:J.value},null,8,Ri),[[Oe,R.value,void 0,{number:!0}]])])):ie("",!0),p("label",Di,[d[14]||(d[14]=p("span",null,"水色",-1)),pe(p("input",{"onUpdate:modelValue":d[8]||(d[8]=L=>w.value=L),class:"color-input",type:"color"},null,512),[[Oe,w.value]]),p("span",{class:"color-swatch",style:dr({backgroundColor:w.value})},null,4)])])])]))}},Hi=gt(Bi,[["__scopeId","data-v-9ecdafb8"]]),Pt="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Ui=`${Pt}Cesium.js`,Wi=`${Pt}Widgets/widgets.css`;async function Gi({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Pt),await qi(Wi,"cesium-widgets-style"),await $i(Ui,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到");return pt(t,e),t}function pt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function $i(e,t){return new Promise((r,i)=>{const s=document.getElementById(t);if(s){if(s.getAttribute("data-loaded")==="true"){r();return}s.addEventListener("load",()=>r(),{once:!0}),s.addEventListener("error",()=>i(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const h=document.createElement("script");h.id=t,h.src=e,h.async=!0,h.onload=()=>{h.setAttribute("data-loaded","true"),r()},h.onerror=()=>i(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(h)})}function qi(e,t){return new Promise((r,i)=>{if(document.getElementById(t)){r();return}const h=document.createElement("link");h.id=t,h.rel="stylesheet",h.href=e,h.onload=()=>r(),h.onerror=()=>i(new Error(`样式加载失败: ${e}`)),document.head.appendChild(h)})}const Xi="Asia/Shanghai",Vi="UTC+8",Yi=new Intl.DateTimeFormat("zh-CN",{timeZone:Xi,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function ji(e,t){var r,i,s,h,f,x,S;if(!(!e||!(t!=null&&t.JulianDate))){if((r=e.animation)!=null&&r.viewModel&&(e.animation.viewModel.dateFormatter=(...w)=>Zi(e,t,...w),e.animation.viewModel.timeFormatter=(...w)=>Qi(e,t,...w)),e.timeline){const w=(...R)=>Ji(e,t,...R);e.timeline.makeLabel=w,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=w),(s=(i=e.timeline).updateFromClock)==null||s.call(i),(f=(h=e.timeline).zoomTo)==null||f.call(h,e.clock.startTime,e.clock.stopTime)}(S=(x=e.scene).requestRender)==null||S.call(x)}}function At(e,t,...r){var x;const i=r.find(Ki)||((x=e==null?void 0:e.clock)==null?void 0:x.currentTime);if(!i)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const s=t.JulianDate.toDate(i),h=Yi.formatToParts(s),f=Object.fromEntries(h.filter(({type:S})=>S!=="literal").map(({type:S,value:w})=>[S,w]));return{year:f.year||"0000",month:f.month||"01",day:f.day||"01",hour:f.hour||"00",minute:f.minute||"00",second:f.second||"00"}}function Ki(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function Zi(e,t,...r){const{year:i,month:s,day:h}=At(e,t,...r);return`${i}-${s}-${h}`}function Qi(e,t,...r){const{hour:i,minute:s,second:h}=At(e,t,...r);return`${i}:${s}:${h} ${Vi}`}function Ji(e,t,...r){const{month:i,day:s,hour:h,minute:f}=At(e,t,...r);return`${i}-${s} ${h}:${f}`}function ea({getViewer:e}){let t=null,r=null;function i(){var x;const f=e==null?void 0:e();if(f&&((x=f._cesiumWidget)!=null&&x._creditContainer&&(f._cesiumWidget._creditContainer.style.display="none"),s(),t=setInterval(()=>{const S=document.querySelector(".cesium-credit-container");S&&S.innerHTML.length>0&&(S.innerHTML="",S.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const S=document.createElement("style");S.id="cesium-credit-override",S.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(S),r=S}}function s(){var S;const f=e==null?void 0:e();if(!f)return;(S=f._cesiumWidget)!=null&&S._creditContainer&&(f._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",f._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(w=>{w.style.cssText="display: none !important; visibility: hidden !important;",w.innerHTML=""}),f.scene&&f.scene.frameState&&f.scene.frameState.creditDisplay&&(f.scene.frameState.creditDisplay.hasCredits=()=>!1,f.scene.frameState.creditDisplay.destroy=()=>{})}function h(){t&&(clearInterval(t),t=null),r&&(r.remove(),r=null)}return{installCreditHider:i,cleanupCreditHider:h}}const ta=500,Lt=48,ra=160,Vt=48;function na({getViewer:e}){const t=j(null),r=j([]),i=xe(()=>Number.isFinite(t.value)?String(t.value):"--"),s=xe(()=>ia(r.value));let h=null,f=0,x=St();function S(){var C;const R=(C=e==null?void 0:e())==null?void 0:C.scene;R!=null&&R.preRender&&(w(),t.value=null,r.value=[],f=0,x=St(),h=R.preRender.addEventListener(()=>{f+=1;const U=St(),v=U-x;if(v<ta)return;const y=Math.round(f*1e3/v);t.value=y,r.value=[...r.value.slice(1-Lt),y],f=0,x=U}))}function w(){typeof h=="function"&&(h(),h=null)}return{frameRateDisplay:i,frameRateLinePoints:s,setupFrameRateMonitor:S,cleanupFrameRateMonitor:w}}function St(){return typeof performance<"u"?performance.now():Date.now()}function ia(e){if(!e.length)return"";const t=Math.max(60,...e),r=ra/(Lt-1),i=Lt-e.length;return e.map((s,h)=>{const f=(i+h)*r,x=Math.max(0,Math.min(s/t,1)),S=Vt-x*Vt;return`${f.toFixed(1)},${S.toFixed(1)}`}).join(" ")}const Tt="经度: --, 纬度: --, 海拔: --米";function aa({getViewer:e,getCesium:t,onCoordinatePick:r}){let i=null,s=null,h=null;const f=j("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function x(){const v=e==null?void 0:e(),y=t==null?void 0:t();!v||!y||(U(),s=v.scene.canvas,i=new y.ScreenSpaceEventHandler(s),h=()=>{f.value=Tt},s.addEventListener("mouseleave",h),i.setInputAction(M=>{S(M.endPosition,v,y)},y.ScreenSpaceEventType.MOUSE_MOVE),i.setInputAction(M=>{const o=M.endPosition,m=M.startPosition;if(!y.defined(v.terrainProvider))return;const n=v.scene.globe.ellipsoid;if(!v.camera.pickEllipsoid(m,n)){const c=v.camera;c.rotate(y.Cartesian3.UNIT_X,-.002*(o.y-m.y)),c.rotate(y.Cartesian3.UNIT_Y,-.002*(o.x-m.x))}},y.ScreenSpaceEventType.RIGHT_DRAG),i.setInputAction(()=>{},y.ScreenSpaceEventType.RIGHT_DOWN),i.setInputAction(()=>{},y.ScreenSpaceEventType.RIGHT_UP))}function S(v,y,M){const o=w(v,y,M);if(!o){f.value=Tt;return}const m=M.Cartographic.fromCartesian(o);if(!m||!Number.isFinite(m.longitude)||!Number.isFinite(m.latitude)){f.value=Tt;return}const n=M.Math.toDegrees(m.longitude).toFixed(6),u=M.Math.toDegrees(m.latitude).toFixed(6),c=(Number.isFinite(m.height)?m.height:0).toFixed(2);f.value=`经度: ${n}, 纬度: ${u}, 海拔: ${c}米`,typeof r=="function"&&r({lng:Number(n),lat:Number(u),height:Number(c)})}function w(v,y,M){if(!v)return null;const o=y.scene,m=R(v,o,M);if(m)return m;const n=y.camera.getPickRay(v);if(n){const c=o.globe.pick(n,o);if(C(c))return c}const u=y.camera.pickEllipsoid(v,o.globe.ellipsoid);return C(u)?u:null}function R(v,y,M){if(!y.pickPositionSupported||typeof y.pickPosition!="function")return null;const o=typeof y.pick=="function"?y.pick(v):null;if(!M.defined(o))return null;const m=y.pickPosition(v);return C(m)?m:null}function C(v){return!!v&&Number.isFinite(v.x)&&Number.isFinite(v.y)&&Number.isFinite(v.z)}function U(){h&&s&&(s.removeEventListener("mouseleave",h),h=null),s=null,i&&(i.destroy(),i=null)}return{coordinateDisplay:f,setupInteractions:x,cleanupInteractions:U}}function oa(e,t=""){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r??t}catch{return t}}function sa(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function et(e,t){if(typeof window>"u")return t;try{const r=window.localStorage.getItem(e);return r==null?t:r==="true"}catch{return t}}function ut(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Yt(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:r,Ellipsoid:i,Resource:s,HeightmapTerrainData:h,Rectangle:f,TileAvailability:x,CustomHeightmapTerrainProvider:S}=e;function w(v,y,M,o,m,n){const u=v.tileXYToRectangle(M,o,m);return t(f.intersection(u,y,n))}function R(v){const y=[[[0,0,1,0]]],M=new x(v.tilingScheme,19);for(let o=0;o<y.length;o++){const m=y[o];for(let n=0;n<m.length;n++){const u=m[n];M.addAvailableTileRange(o,u[0],u[1],u[2],u[3])}}return M}function C(v,y,M,o,m){const n=new h({buffer:v._transformBuffer(y),width:v._width,height:v._height,childTileMask:v._getChildTileMask(o,m,M),structure:v._terrainDataStructure});return n._skirtHeight=6e3,v.availability.addAvailableTileRange(M,o,m,o,m),n}class U extends S{constructor(y={}){if(super({...y,ellipsoid:i.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(y.url))throw new r("options.url is required.");this._dataType=y.dataType??"int16",this._url=y.url,this._subdomains=y.subdomains,this._token=y.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=R(this)}get availability(){return this._availability}requestTileGeometry(y,M,o,m){if(o>=this._bottomLevel)return Promise.reject(new Error(`Level ${o} is outside supported range.`));if(o<this._topLevel)return Promise.resolve(new h({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(y,M,o),structure:this._terrainDataStructure}));let n=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const c=this._subdomains[(y+M)%this._subdomains.length];n=n.replace("{s}",c)}n=n.replace("{token}",this._token).replace("{x}",y).replace("{y}",M).replace("{z}",o+1);const u=s.fetchArrayBuffer({url:n,request:m});if(u)return u.then(c=>c.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):kr.inflate(c)).then(c=>C(this,c,o,y,M))}getTileDataAvailable(y,M,o){return o<this._bottomLevel}_transformBuffer(y){let M=2;this._dataType==="float"&&(M=4);const o=y;if(o.length!==22500*M)return null;const m=new ArrayBuffer(M),n=new DataView(m),u=this._width,c=this._height,T=new Uint8Array(u*c*4);for(let A=0;A<c;A++)for(let P=0;P<u;P++){const W=Math.floor(149*A/(c-1)),V=Math.floor(149*P/(u-1)),J=M*(150*W+V);let ee;M===4?(n.setInt8(0,o[J]),n.setInt8(1,o[J+1]),n.setInt8(2,o[J+2]),n.setInt8(3,o[J+3]),ee=n.getFloat32(0,!0)):ee=o[J]+256*o[J+1],(ee>1e4||ee<-2e3)&&(ee=0);const te=(ee+1e3)/.001,q=4*(A*u+P);T[q]=te/65536,T[q+1]=(te-256*T[q]*256)/256,T[q+2]=te-256*T[q]*256-256*T[q+1],T[q+3]=255}return T}_getVHeightBuffer(){let y=this._vHeightBuffer;if(!t(y)){y=new Uint8ClampedArray(this._width*this._height*4);for(let M=0;M<this._width*this._height*4;)y[M++]=15,y[M++]=66,y[M++]=64,y[M++]=255;this._vHeightBuffer=y}return y}_getChildTileMask(y,M,o){const m=new f,n=this._tilingScheme,u=this._rectangles,c=n.tileXYToRectangle(y,M,o);let T=0;for(let A=0;A<u.length&&T!==15;A++){const P=u[A];if(P.maxLevel<=o)continue;const W=P.rectangle,V=f.intersection(W,c,m);t(V)&&(w(n,W,2*y,2*M,o+1,m)&&(T|=4),w(n,W,2*y+1,2*M,o+1,m)&&(T|=8),w(n,W,2*y,2*M+1,o+1,m)&&(T|=1),w(n,W,2*y+1,2*M+1,o+1,m)&&(T|=2))}return T}}return U}const st=["0","1","2","3","4","5","6","7"],lt="https://t{s}.tianditu.gov.cn/",la="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",ca=96188,Xe="custom-xyz",jt="cesium_custom_xyz_basemap_url",ua="cesium_tdt_label_layer_visible",Kt="cesium_tdt_boundary_layer_visible",Zt="cesium_tdt_text_label_layer_visible",Qt="cesium_osm_buildings_visible",Jt="cesium_google_photorealistic_3d_tiles_visible",er=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:Xe,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],tr=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function da({getViewer:e,getCesium:t,message:r,backendBaseUrl:i,tiandituToken:s,cesiumIonToken:h}){let f=null,x=null,S=null,w=null,R=0,C=null,U=null,v=0,y=0,M=[];const o=()=>rr(s),m=()=>rr(h),n=[],u=j([]),c=new Map,T=new Map,A=new Map,P=new Map,W=j("tianditu"),V=j("tianditu"),J=j(oa(jt,"")),ee=et(ua,!0),te=j(et(Kt,ee)),q=j(et(Zt,ee)),se=j(et(Qt,!1)),le=j(et(Jt,!1)),ye=xe(()=>[...er.map(a=>a.value!==Xe?a:{...a,description:J.value?J.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!J.value}),...u.value]),Me=xe(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:te.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:q.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:se.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:le.value}]);_e(W,a=>{!(e!=null&&e())||!(t!=null&&t())||d(a)}),_e(J,a=>{sa(jt,a)}),_e(V,async a=>{!(e!=null&&e())||!(t!=null&&t())||await H(a)}),_e(te,a=>{ut(Kt,a),Te()}),_e(q,a=>{ut(Zt,a),Te()}),_e(se,a=>{ut(Qt,a),b()}),_e(le,a=>{ut(Jt,a),D()});function N(){const a=t==null?void 0:t();if(!a)return[];c.clear(),T.clear();const g=er.map(I=>{const Y=new a.ProviderViewModel({name:I.label,tooltip:pa(I),category:"项目底图",iconUrl:ar(I.value==="google"?"#5ea1ff":I.value===Xe?"#f59e0b":"#37d67a",I.value==="google"?"G":I.value===Xe?"XY":"TD"),creationFunction:()=>$(I.value)});return c.set(I.value,Y),T.set(Y,I.value),Y}),k=Ee();return u.value=k.map((I,Y)=>{const Q=String((I==null?void 0:I.name)||`官方底图 ${Y+1}`).trim(),me=ya(Q,Y);return c.set(me,I),T.set(I,me),{value:me,label:`官方 · ${Q}`,description:String((I==null?void 0:I.tooltip)||Q),source:"official"}}),[...g,...k]}function O(){const a=t==null?void 0:t();return a?(A.clear(),P.clear(),tr.map(g=>{const k=new a.ProviderViewModel({name:g.label,tooltip:g.description||g.label,category:"项目地形",iconUrl:ar(ha(g.value),fa(g.value)),creationFunction:()=>oe(g.value)});return A.set(g.value,k),P.set(k,g.value),k})):[]}function F(a=[]){return c.get(W.value)||a[0]}function de(a=[]){return A.get(V.value)||a[0]}function Ee(){const a=t==null?void 0:t();if(typeof(a==null?void 0:a.createDefaultImageryProviderViewModels)!="function")return[];try{return a.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function $(a){return a==="google"?Ce():a===Xe?ze():ce()}function ce(){const a=t==null?void 0:t();return[new a.UrlTemplateImageryProvider({url:`${lt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${o()}`,subdomains:st,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})]}function Ce(){const a=t==null?void 0:t();return[new a.UrlTemplateImageryProvider({url:`${i}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20})]}function ze(){const a=t==null?void 0:t(),g=ir(J.value);return g.valid?[new a.UrlTemplateImageryProvider({url:g.url,subdomains:g.subdomains,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(r.warning(g.message,{closable:!0}),ce())}function Be(){const a=t==null?void 0:t();return new a.UrlTemplateImageryProvider({url:`${lt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${o()}`,subdomains:st,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:10})}function Ye(){const a=t==null?void 0:t();return new a.UrlTemplateImageryProvider({url:`${lt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${o()}`,subdomains:st,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})}function He(){var be,Se,Ue,at,ot;Re();const a=t==null?void 0:t(),g=(Se=(be=e==null?void 0:e())==null?void 0:be.baseLayerPicker)==null?void 0:Se.viewModel;if(!g||!((Ue=a==null?void 0:a.knockout)!=null&&Ue.getObservable))return;const k=a.knockout.getObservable(g,"selectedImagery"),I=a.knockout.getObservable(g,"selectedTerrain"),Y=[],Q=(at=k==null?void 0:k.subscribe)==null?void 0:at.call(k,Je=>{const Ae=T.get(Je);Ae&&(W.value!==Ae&&(W.value=Ae),Le())}),me=(ot=I==null?void 0:I.subscribe)==null?void 0:ot.call(I,Je=>{const Ae=P.get(Je);Ae&&(V.value!==Ae&&(V.value=Ae),G(Ae))});Q&&Y.push(Q),me&&Y.push(me),M=Y}function Re(){M.forEach(a=>{var g;return(g=a==null?void 0:a.dispose)==null?void 0:g.call(a)}),M=[]}function Ze(){return Le(),!0}function De(){const a=e==null?void 0:e();if(a!=null&&a.imageryLayers)for(;n.length;){const g=n.pop();try{a.imageryLayers.remove(g,!0)}catch{}}}function Le(){var a,g,k;Te(),b(),D(),(k=(g=(a=e==null?void 0:e())==null?void 0:a.scene)==null?void 0:g.requestRender)==null||k.call(g)}function Te(){var g,k;const a=e==null?void 0:e();!a||!(t!=null&&t())||(te.value?je():Ie(),q.value?ke():_(),(k=(g=a.scene).requestRender)==null||k.call(g))}function je(){var g,k,I,Y;const a=e==null?void 0:e();if(!(a!=null&&a.imageryLayers)||f)return f&&((k=(g=a==null?void 0:a.imageryLayers)==null?void 0:g.raiseToTop)==null||k.call(g,f)),f;try{return f=a.imageryLayers.addImageryProvider(Be()),(Y=(I=a.imageryLayers).raiseToTop)==null||Y.call(I,f),f}catch(Q){return r.error("天地图国界线图层加载失败",Q),null}}function ke(){var g,k,I,Y;const a=e==null?void 0:e();if(!(a!=null&&a.imageryLayers)||x)return x&&((k=(g=a==null?void 0:a.imageryLayers)==null?void 0:g.raiseToTop)==null||k.call(g,x)),x;try{return x=a.imageryLayers.addImageryProvider(Ye()),(Y=(I=a.imageryLayers).raiseToTop)==null||Y.call(I,x),x}catch(Q){return r.error("天地图文字标注图层加载失败",Q),null}}function Ie(){const a=e==null?void 0:e();if(!(!f||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(f,!0)}catch{}f=null}}function _(){const a=e==null?void 0:e();if(!(!x||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(x,!0)}catch{}x=null}}async function b(){var g,k,I;const a=e==null?void 0:e();!((g=a==null?void 0:a.scene)!=null&&g.primitives)||!(t!=null&&t())||(se.value?await K():ue(),(I=(k=a.scene).requestRender)==null||I.call(k))}async function D(){var g,k,I;const a=e==null?void 0:e();!((g=a==null?void 0:a.scene)!=null&&g.primitives)||!(t!=null&&t())||(le.value?await E():B(),(I=(k=a.scene).requestRender)==null||I.call(k))}async function E(){var I,Y,Q;const a=e==null?void 0:e(),g=t==null?void 0:t();if(!((I=a==null?void 0:a.scene)!=null&&I.primitives))return null;if(C)return a.scene.globe.show=!1,C;if(U)return U;if(typeof(g==null?void 0:g.createGooglePhotorealistic3DTileset)!="function")return r.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),le.value=!1,null;const k=++v;pt(g,m()),U=g.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const me=await U;return k!==v||!le.value?(nr(me),null):(C=a.scene.primitives.add(me),a.scene.globe.show=!1,a.scene.skyAtmosphere.show=!0,(Q=(Y=a.scene).requestRender)==null||Q.call(Y),C)}catch(me){return k!==v||(le.value=!1,r.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),r.error("Google Photorealistic 3D Tiles 初始化失败",me)),null}finally{k===v&&(U=null)}}function B(){var g,k,I;const a=e==null?void 0:e();if(v+=1,U=null,!C||!((g=a==null?void 0:a.scene)!=null&&g.primitives)){(k=a==null?void 0:a.scene)!=null&&k.globe&&(a.scene.globe.show=!0);return}try{a.scene.primitives.remove(C)}catch{}C=null,(I=a==null?void 0:a.scene)!=null&&I.globe&&(a.scene.globe.show=!0)}async function K(){var I,Y,Q,me;const a=e==null?void 0:e(),g=t==null?void 0:t();if(!((I=a==null?void 0:a.scene)!=null&&I.primitives)||S)return S;if(w)return w;if(typeof((Y=g==null?void 0:g.Cesium3DTileset)==null?void 0:Y.fromIonAssetId)!="function"&&typeof(g==null?void 0:g.createOsmBuildingsAsync)!="function")return r.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),se.value=!1,null;const k=++R;pt(g,m()),await l(),w=ma(g,{maximumScreenSpaceError:8});try{const be=await w;return k!==R||!se.value?(nr(be),null):(S=a.scene.primitives.add(be),(me=(Q=a.scene).requestRender)==null||me.call(Q),S)}catch(be){return k!==R||(se.value=!1,r.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),r.error("Cesium OSM 建筑图层初始化失败",be)),null}finally{k===R&&(w=null)}}function ue(){var g,k,I;const a=e==null?void 0:e();if(R+=1,w=null,!(!S||!((g=a==null?void 0:a.scene)!=null&&g.primitives))){try{a.scene.primitives.remove(S)}catch{}S=null,(I=(k=a.scene).requestRender)==null||I.call(k)}}async function l(){if(V.value==="cesiumWorld")return!0;V.value="cesiumWorld";const a=await H("cesiumWorld");return a||r.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),a}function d(a,g={}){var Q,me,be;const k=e==null?void 0:e();if(!k||!(t!=null&&t()))return!1;const I=(Q=k.baseLayerPicker)==null?void 0:Q.viewModel,Y=c.get(a);if(I&&Y){if(De(),g.forceReload&&I.selectedImagery===Y){const Se=c.get("tianditu");Se&&Se!==Y&&(I.selectedImagery=Se)}return I.selectedImagery!==Y&&(I.selectedImagery=Y),Le(),!0}try{return De(),$(a).forEach(Ue=>{n.push(k.imageryLayers.addImageryProvider(Ue))}),Te(),(be=(me=k.scene).requestRender)==null||be.call(me),!0}catch(Se){return r.error("地图源切换失败",Se),!1}}function L(){return H(V.value)}async function H(a){var be,Se,Ue,at,ot,Je,Ae,Ct,Rt,Dt,kt;const g=e==null?void 0:e(),k=t==null?void 0:t();if(!g||!k)return!1;const I=(be=g.baseLayerPicker)==null?void 0:be.viewModel,Y=A.get(a);if(I&&Y)return I.selectedTerrain!==Y&&(I.selectedTerrain=Y),G(a),(Ue=(Se=g.scene).requestRender)==null||Ue.call(Se),!0;const Q=++y;if(a==="ellipsoid")return g.terrainProvider=new k.EllipsoidTerrainProvider,G(a),(ot=(at=g.scene).requestRender)==null||ot.call(at),!0;if(a==="cesiumWorld")try{const We=await he();return Q!==y?!1:(g.terrainProvider=We,G(a),(Ae=(Je=g.scene).requestRender)==null||Ae.call(Je),!0)}catch(We){return Q!==y||(g.terrainProvider=new k.EllipsoidTerrainProvider,G("ellipsoid"),r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",We)),!1}if(a==="arcgisWorld")try{const We=await fe();return Q!==y?!1:(g.terrainProvider=We,G(a),(Rt=(Ct=g.scene).requestRender)==null||Rt.call(Ct),!0)}catch(We){return Q!==y||(g.terrainProvider=new k.EllipsoidTerrainProvider,G("ellipsoid"),r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",We)),!1}const me=Yt(k);try{return g.terrainProvider=new me({url:`${lt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:st,token:o()}),G(a),(kt=(Dt=g.scene).requestRender)==null||kt.call(Dt),!0}catch(We){return g.terrainProvider=new k.EllipsoidTerrainProvider,G("ellipsoid"),r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",We),!1}}function G(a){var k;const g=e==null?void 0:e();(k=g==null?void 0:g.scene)!=null&&k.globe&&(g.scene.globe.depthTestAgainstTerrain=a!=="ellipsoid")}function oe(a){const g=t==null?void 0:t();if(a==="ellipsoid")return new g.EllipsoidTerrainProvider;if(a==="cesiumWorld")return he().catch(I=>(r.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("Cesium 世界地形初始化失败",I),Ne(a,"ellipsoid"),new g.EllipsoidTerrainProvider));if(a==="arcgisWorld")return fe().catch(I=>(r.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),r.error("ArcGIS 世界地形初始化失败",I),Ne(a,"ellipsoid"),new g.EllipsoidTerrainProvider));const k=Yt(g);try{return new k({url:`${lt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:st,token:o()})}catch(I){return r.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),r.error("官方地形初始化失败",I),new g.EllipsoidTerrainProvider}}async function he(){var k,I;const a=t==null?void 0:t();pt(a,m());const g={requestWaterMask:!1,requestVertexNormals:!0};if(typeof a.createWorldTerrainAsync=="function")return a.createWorldTerrainAsync(g);if(typeof a.createWorldTerrain=="function")return a.createWorldTerrain(g);if(typeof((k=a.CesiumTerrainProvider)==null?void 0:k.fromIonAssetId)=="function")return a.CesiumTerrainProvider.fromIonAssetId(1,g);if((I=a.IonResource)!=null&&I.fromAssetId&&a.CesiumTerrainProvider){const Y=await a.IonResource.fromAssetId(1);return new a.CesiumTerrainProvider({url:Y,...g})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function fe(){var g;const a=t==null?void 0:t();if(typeof((g=a==null?void 0:a.ArcGISTiledElevationTerrainProvider)==null?void 0:g.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return a.ArcGISTiledElevationTerrainProvider.fromUrl(la)}function Ne(a,g){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{V.value===a&&(V.value=g)},0)}function Pe({overlayId:a,value:g}){if(a==="tdt-boundaries"){te.value=!!g;return}if(a==="tdt-text-labels"){q.value=!!g;return}if(a==="cesium-osm-buildings"){se.value=!!g;return}a==="google-photorealistic-3d-tiles"&&(le.value=!!g)}function Qe({url:a}){const g=String(a||"").trim(),k=ir(g);if(!k.valid){r.warning(k.message,{closable:!0});return}if(J.value=g,W.value===Xe){d(Xe,{forceReload:!0})&&r.success("已加载自定义 XYZ 图源");return}W.value=Xe,r.success("已切换到自定义 XYZ 图源")}function it(){De(),Ie(),_(),ue(),B(),Re()}return{activeBasemap:W,activeTerrain:V,customXyzBasemapUrl:J,basemapOptions:ye,terrainOptions:tr,overlayOptions:Me,createImageryProviderViewModels:N,createTerrainProviderViewModels:O,getSelectedImageryProviderViewModel:F,getSelectedTerrainProviderViewModel:de,bindLayerPickerStateSync:He,addBaseImageryLayers:Ze,initCustomTerrain:L,applyBasemap:d,applyTerrain:H,handleOverlayToggle:Pe,handleCustomBasemapSubmit:Qe,cleanupLayers:it}}function ha(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function fa(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function rr(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function nr(e){var t,r;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(r=e.destroy)==null||r.call(e)}catch{}}async function ma(e,t={}){var r;if(typeof((r=e==null?void 0:e.Cesium3DTileset)==null?void 0:r.fromIonAssetId)=="function"){const i=await e.Cesium3DTileset.fromIonAssetId(ca,t);return!i.style&&typeof e.Cesium3DTileStyle=="function"&&(i.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),i}return e.createOsmBuildingsAsync(t)}function pa(e){return e.value!==Xe?e.description||e.label:`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`}function ir(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let r=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const i=r.match(/\{([a-z0-9])-([a-z0-9])\}/i);let s=[];return i?(s=ga(i[1],i[2]),r=r.replace(i[0],"{s}")):/\{s\}/i.test(r)&&(s=["a","b","c"]),!/\{z\}/.test(r)||!/\{x\}/.test(r)||!/\{y\}/.test(r)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:r,subdomains:s}:va(r)?{valid:!0,message:"",url:r,subdomains:s}:{valid:!1,message:"URL 格式不合法",url:r,subdomains:s}}function ga(e,t){const r=String(e||"").charCodeAt(0),i=String(t||"").charCodeAt(0);if(!Number.isFinite(r)||!Number.isFinite(i))return[];const s=r<=i?1:-1,h=[];for(let f=r;s>0?f<=i:f>=i;f+=s)h.push(String.fromCharCode(f));return h}function va(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",r=new URL(e,t);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}function ya(e,t){const r=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${r||"basemap"}`}function ar(e,t){const r=String(t||"").replace(/[<>&"']/g,"").slice(0,2),i=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${r}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(i)}`}function xa({getViewer:e,getCesium:t,message:r}){function i(f){const x=e==null?void 0:e(),S=t==null?void 0:t();if(!x||!S)return;const w=typeof f=="number"?f:2;x.camera.flyTo({destination:S.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-S.Math.PI_OVER_TWO,roll:0},duration:w})}function s(){const f=e==null?void 0:e(),x=t==null?void 0:t();!f||!x||f.camera.flyTo({destination:x.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:x.Math.toRadians(0),pitch:x.Math.toRadians(-25),roll:0},duration:3})}async function h(){const f=e==null?void 0:e(),x=t==null?void 0:t();if(!(!f||!x))try{const S=await x.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");f.scene.primitives.add(S),f.flyTo(S,{duration:3,offset:new x.HeadingPitchRange(x.Math.toRadians(0),x.Math.toRadians(-25),S.boundingSphere.radius*2.5)})}catch(S){r.error(`加载模型失败: ${S}`),r.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:i,flyToEverest:s,loadCustomTileset:h}}const _a="cesium_tool_panel_open";function ba({fluidPanelRef:e,sceneActions:t={},wind:r={},panelStorageKey:i=_a}={}){const s=j(et(i,!0)),h=j({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),f=j({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),x=j({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),S=xe(()=>{var v,y,M,o,m,n;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:h.value.atmosphere||h.value.fog?"启用":"关闭",statusTone:h.value.atmosphere||h.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:h.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:h.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:h.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:h.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(v=r.wind2D)!=null&&v.value?"已加载":"未加载",statusTone:(y=r.wind2D)!=null&&y.value?"success":"neutral",actions:[{id:"load",label:(M=r.wind2D)!=null&&M.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((o=r.wind2D)!=null&&o.value)}],controls:Sa((m=r.windParams)==null?void 0:m.value,!!((n=r.wind2D)!=null&&n.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:x.value.isPicking?"等待选点":x.value.hasFluid?"已创建":"未创建",statusTone:x.value.isPicking?"warning":x.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:x.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:x.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!x.value.hasFluid&&!x.value.isPicking}],controls:Ta(f.value,x.value)}]});_e(s,v=>{ut(i,v)});function w({moduleId:v,actionId:y}){var o,m;(m=(o={scene:{home:()=>{var n;return(n=t.flyToHome)==null?void 0:n.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:r.loadSimulatedWind,clear:r.clearWind2D},fluid:{pick:()=>{var n,u;return(u=(n=e==null?void 0:e.value)==null?void 0:n.startPickHeightMap)==null?void 0:u.call(n)},clear:()=>{var n,u;return(u=(n=e==null?void 0:e.value)==null?void 0:n.clearFluid)==null?void 0:u.call(n)}}}[v])==null?void 0:o[y])==null||m.call(o)}function R({moduleId:v,controlId:y,value:M}){var o,m;if(v==="effects"&&y in h.value){h.value={...h.value,[y]:!!M};return}if(v==="wind"&&y in(((o=r.windParams)==null?void 0:o.value)||{})){(m=r.setWindParam)==null||m.call(r,y,M);return}v==="fluid"&&y in f.value&&(f.value={...f.value,[y]:y==="waterColor"?M:Number(M)})}function C(v){const y=nt(v==null?void 0:v.waterLevel),M=nt(v==null?void 0:v.waterLevelMin),o=nt(v==null?void 0:v.waterLevelMax);x.value={isPicking:!!(v!=null&&v.isPicking),hasFluid:!!(v!=null&&v.hasFluid),selectedText:(v==null?void 0:v.selectedText)||"",waterLevel:y,waterLevelMin:M,waterLevelMax:o},y!==null&&(f.value={...f.value,waterLevel:y})}function U(){var v;(v=r.clearWind2D)==null||v.call(r)}return{toolPanelOpen:s,advancedEffectControls:h,fluidParams:f,fluidState:x,toolModules:S,handleToolAction:w,handleToolControlChange:R,handleFluidStateChange:C,cleanupTools:U}}function Sa(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function Ta(e,t={}){const r=nt(t.waterLevelMin),i=nt(t.waterLevelMax),s=r!==null&&i!==null,h=s?Math.min(r,i):0,f=s?Math.max(r,i):0,x=nt(e.waterLevel),S=s?wa(x??h,h,f):0,w=s?Math.max((f-h)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:h,max:f,step:w,value:S,displayValue:s?`${Ma(S)} m`:"先捕捉",disabled:!s,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function nt(e){const t=Number(e);return Number.isFinite(t)?t:null}function wa(e,t,r){return Math.max(t,Math.min(r,e))}function Ma(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const hr=-90,Et=1,fr=5e7,or="cv",La=["heading","pitch","roll"];function Fa({getViewer:e,getCesium:t}){const r=Sr();let i=null;function s(o){var u,c;const m=h(o);if(m!=="")return m;const n=Array.isArray((u=r.query)==null?void 0:u[o])?r.query[o][0]:(c=r.query)==null?void 0:c[o];return String(n??"").trim()}function h(o){if(typeof window>"u")return"";const m=String(window.location.hash||""),n=m.indexOf("?");return n<0?"":String(new URLSearchParams(m.slice(n+1)).get(o)||"").trim()}function f(){const o={};if(Object.keys(r.query||{}).forEach(m=>{const n=Array.isArray(r.query[m])?r.query[m][0]:r.query[m];n!=null&&n!==""&&(o[m]=String(n))}),typeof window<"u"){const m=String(window.location.hash||""),n=m.indexOf("?");n>=0&&new URLSearchParams(m.slice(n+1)).forEach((c,T)=>{c!=null&&c!==""&&(o[T]=String(c))})}return o}function x(){const o=String(s(or)||"").trim(),m=Nr(o);if(Aa(m))return m;if(o&&o!=="0")return null;const n=tt(s("lng")),u=tt(s("lat")),c=Pa(s("z"));return n===null||u===null||c===null||n<-180||n>180||u<-90||u>90?null:{lng:n,lat:u,height:c,heading:tt(s("heading")),pitch:tt(s("pitch")),roll:tt(s("roll"))}}function S({duration:o=0}={}){const m=e==null?void 0:e(),n=t==null?void 0:t(),u=x();if(!(m!=null&&m.camera)||!n||!u)return!1;const c=n.Cartesian3.fromDegrees(u.lng,u.lat,u.height),T={heading:Mt(n,u.heading??0),pitch:Mt(n,Ea(u.pitch??hr)),roll:Mt(n,u.roll??0)};return Number(o)>0?(m.camera.flyTo({destination:c,orientation:T,duration:Number(o)}),!0):(m.camera.setView({destination:c,orientation:T}),!0)}function w(o){const m=Number(o==null?void 0:o.lng),n=Number(o==null?void 0:o.lat),u=Number(o==null?void 0:o.height);!Number.isFinite(m)||!Number.isFinite(n)||!Number.isFinite(u)||y({view:Gt,lng:wt(m,6),lat:wt(n,6),z:wt(Math.max(0,u),2)})}function R(){const o=v();!(o!=null&&o.moveEnd)||i||(i=o.moveEnd.addEventListener(()=>{U()}),U())}function C(){typeof i=="function"&&i(),i=null}function U(){const o=t==null?void 0:t(),m=v();if(!o||!(m!=null&&m.position))return;const n=o.Cartographic.fromCartesian(m.position);if(!n)return;const u=o.Math.toDegrees(n.longitude),c=o.Math.toDegrees(n.latitude),T=Number(n.height),A=o.Math.toDegrees(Number(m.heading)||0),P=o.Math.toDegrees(Number(m.pitch)||0),W=o.Math.toDegrees(Number(m.roll)||0);if(!Number.isFinite(u)||!Number.isFinite(c)||!Number.isFinite(T))return;const V=Ir({lng:u,lat:c,height:Math.max(Et,T),heading:A,pitch:P,roll:W});!V||V==="0"||y({view:Gt,[or]:V})}function v(){var m;const o=e==null?void 0:e();return(o==null?void 0:o.camera)||((m=o==null?void 0:o.scene)==null?void 0:m.camera)||null}function y(o){const m={...f(),...o};if(La.forEach(T=>{T in o||delete m[T]}),Object.keys(m).forEach(T=>{const A=m[T];A==null||A===""?delete m[T]:m[T]=String(A)}),M(o)||typeof window>"u")return;const n=String(window.location.hash||"#/home").split("?")[0]||"#/home",u=new URLSearchParams(m),c=`${window.location.pathname}${window.location.search}${n}?${u.toString()}`;window.history.replaceState(window.history.state,"",c)}function M(o){return Object.keys(o).every(m=>String(s(m)??"")===String(o[m]??""))}return{restoreCameraFromUrl:S,syncUrlFromPickedCoordinate:w,bindCameraViewSync:R,cleanupCameraViewSync:C}}function tt(e){const t=Number(e);return Number.isFinite(t)?t:null}function Pa(e){const t=tt(e);return t===null||t<Et||t>fr?null:t}function Aa(e){if(!e)return!1;const t=Number(e.lng),r=Number(e.lat),i=Number(e.height),s=Number(e.heading),h=Number(e.pitch),f=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(r)&&r>=-90&&r<=90&&Number.isFinite(i)&&i>=Et&&i<=fr&&Number.isFinite(s)&&Number.isFinite(h)&&h>=-90&&h<=90&&Number.isFinite(f)}function Ea(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):hr}function wt(e,t){const r=Number(e);return Number.isFinite(r)?r.toFixed(t):null}function Mt(e,t){const r=Number(t);return Number.isFinite(r)?e.Math.toRadians(r):0}const ge={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Ca=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Ra=new Float32Array([0,0,1,0,1,1,0,1]),Da=new Uint16Array([0,1,2,0,2,3]);function Ke(e,t,r){return Math.max(t,Math.min(r,e))}function re(e,t){const r=Number(e);return Number.isFinite(r)?r:t}function ka(e,t){const r=t.getParameter(t.MAX_TEXTURE_SIZE),i=Math.min(2048,r),s=Math.max(1,Math.floor(e)),h=Math.sqrt(s),f=Math.log2(h),x=Number.isFinite(f)?Math.round(f):4;let S=Math.pow(2,x);return S=Ke(S,16,i),S}function Ia(e){const t=e*e,r=new Float32Array(t*4);for(let i=0;i<t;i+=1){const s=i*4;r[s]=Math.random(),r[s+1]=Math.random(),r[s+2]=Math.random(),r[s+3]=Math.random()}return r}function Na(e){return new Float32Array(e*e*4)}function Oa(e,t,r,i,s){const h=t.createTexture();if(!h)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,h),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,r,i,0,t.RGBA,t.FLOAT,s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let f=!1;return{_context:e,_texture:h,_target:t.TEXTURE_2D,_width:r,_height:i,destroy(){f||(t.deleteTexture(h),f=!0)}}}class za{constructor(t,r={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=r.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const i={...ge,...r};this.speedFactor=re(i.speedFactor,ge.speedFactor),this.cullSpeedMin=re(i.cullSpeedMin,ge.cullSpeedMin),this.cullSpeedMax=re(i.cullSpeedMax,ge.cullSpeedMax),this.windSpeedMin=re(i.windSpeedMin,ge.windSpeedMin),this.windSpeedMax=re(i.windSpeedMax,ge.windSpeedMax),this.arrowLength=re(i.arrowLength,ge.arrowLength),this.trailLength=re(i.trailLength,ge.trailLength),this.decaySpeed=re(i.decaySpeed,ge.decaySpeed),this.alphaFactor=re(i.alphaFactor,ge.alphaFactor),this.maxWindSpeed=re(i.maxWindSpeed,ge.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=re(r.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const r=re(t.longitude,NaN),i=re(t.latitude,NaN),s=Array.isArray(t.altitude)?t.altitude:[],h=Array.isArray(t.sizeMesh)?t.sizeMesh:[],f=Array.isArray(t.count)?t.count:[],x=Array.isArray(t.hspeed)?t.hspeed:[],S=Array.isArray(t.hdir)?t.hdir:[],w=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(r)||!Number.isFinite(i))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const R=s.length;if(R<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(h.length!==R||f.length!==R)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const C=f.map(P=>Math.max(1,Math.floor(re(P,1)))),U=h.map(P=>Math.max(1,re(P,1))),v=s.map(P=>re(P,0)),y=C.reduce((P,W)=>P+W*W,0);if(x.length<y||S.length<y||w.length<y)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=R,this.visibleLayerMin=0,this.visibleLayerMax=R-1,this._altitudes=v.slice(),this._maxNx=Math.max(...C),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*R;const M=new Float32Array(this._atlasWidth*this._atlasHeight*4);let o=0;for(let P=0;P<R;P+=1){const W=C[P],V=W;for(let J=0;J<V;J+=1)for(let ee=0;ee<W;ee+=1){const te=o+J*W+ee,q=((P*this._maxNy+J)*this._atlasWidth+ee)*4,se=Number(x[te]),le=Number(S[te]),ye=Number(w[te]);if(!(Number.isFinite(se)&&Number.isFinite(le))){M[q]=0,M[q+1]=0,M[q+2]=0,M[q+3]=0;continue}const N=le*Math.PI/180;M[q]=se*Math.sin(N),M[q+1]=se*Math.cos(N),M[q+2]=Number.isFinite(ye)?ye:0,M[q+3]=1}o+=W*V}this._createOrReplaceWindAtlasTexture(M);const m=Math.max(...U),n=this._maxNx*m,u=n/2/111320,c=i*Math.PI/180,T=Math.max(1e-6,Math.abs(Math.cos(c))),A=n/2/(111320*T);this._bounds={minLon:r-A,maxLon:r+A,minLat:i-u,maxLat:i+u,minHeight:Math.min(...v),maxHeight:Math.max(...v)},this._dataPointCount=y,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const r=Math.max(1,Math.floor(re(t,1))),i=ka(r,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&i===this._particleTextureSize||(this._particleTextureSize=i,this._particleCount=i*i,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const r=Ke(re(t,this.particleDensity),.05,10);if(this.particleDensity=r,this._dataPointCount<=0)return;const i=Math.max(1,Math.floor(this._dataPointCount*r));this.setParticleCount(i)}setBounds(t,r,i,s){const h=re(t,NaN),f=re(r,NaN),x=re(i,NaN),S=re(s,NaN);if(!Number.isFinite(h)||!Number.isFinite(f)||!Number.isFinite(x)||!Number.isFinite(S))return;const w=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};w.minLon=Math.min(h,f),w.maxLon=Math.max(h,f),w.minLat=Math.min(x,S),w.maxLat=Math.max(x,S),this._bounds=w,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,r=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,r,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const s=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[s],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=s,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Oa(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,r=this._particleTextureSize,i=Ia(r),s=Na(r);for(let h=0;h<2;h+=1){this._particlePositionTextures[h]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:i},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[h]=new t.Texture({context:this._context,width:r,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:r,height:r,arrayBufferView:s},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[h]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[h],this._velocityTextures[h]],destroyAttachments:!1});const f=this._framebuffers[h]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,f),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,r=t.Buffer.createVertexBuffer({context:this._context,typedArray:Ca,usage:t.BufferUsage.STATIC_DRAW}),i=t.Buffer.createVertexBuffer({context:this._context,typedArray:Ra,usage:t.BufferUsage.STATIC_DRAW}),s=t.Buffer.createIndexBuffer({context:this._context,typedArray:Da,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:r,componentsPerAttribute:2},{index:1,vertexBuffer:i,componentsPerAttribute:2}],indexBuffer:s})}_buildParticleVertexArray(){const t=this._Cesium,r=new Float32Array(this._drawVertexCount);for(let i=0;i<r.length;i+=1)r[i]=i;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:r,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,r=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:r,fragmentShaderSource:i,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,r=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:r,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,r=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:r,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=Ke(Math.floor(re(this.visibleLayerMin,0)),0,this._layerCount-1),r=Ke(Math.floor(re(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:r}}_normalizeSpeedRange(t,r){const i=Math.max(1e-4,re(this.maxWindSpeed,ge.maxWindSpeed)),s=Ke(re(t,0)/i,0,1),h=Ke(re(r,i)/i,0,1);return{min:Math.min(s,h),max:Math.max(s,h)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>re(this.speedFactor,ge.speedFactor),maxWindSpeed:()=>Math.max(1e-4,re(this.maxWindSpeed,ge.maxWindSpeed)),decaySpeed:()=>Ke(re(this.decaySpeed,ge.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>re(this.arrowLength,ge.arrowLength),trailLength:()=>re(this.trailLength,ge.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Ke(re(this.alphaFactor,ge.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Ba({getViewer:e,getCesium:t,message:r}){const i=j(null),s=j({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function h(){var R,C;const w=e==null?void 0:e();if(i.value){try{(C=(R=w==null?void 0:w.scene)==null?void 0:R.primitives)==null||C.remove(i.value)}catch{}i.value.destroy(),i.value=null}}function f(){const w=e==null?void 0:e(),R=t==null?void 0:t();if(!w||!R){r.error("Cesium 尚未初始化");return}h();const C=Ha(R);i.value=new za(w,{maxWindSpeed:20,cesium:R,speedFactor:s.value.speedFactor,arrowLength:s.value.arrowLength,trailLength:s.value.trailLength,alphaFactor:s.value.alphaFactor}),i.value.loadData(C),w.scene.primitives.add(i.value),i.value.flyTo(),r.success("风场加载成功，可通过下方滑块调节样式")}function x(){i.value&&(i.value.speedFactor=s.value.speedFactor,i.value.arrowLength=s.value.arrowLength,i.value.trailLength=s.value.trailLength,i.value.alphaFactor=s.value.alphaFactor)}function S(w,R){return w in s.value?(s.value={...s.value,[w]:Number(R)},x(),!0):!1}return{wind2D:i,windParams:s,clearWind2D:h,loadSimulatedWind:f,setWindParam:S}}function Ha(e){const s=[0,2e3,5e3,1e4,15e3],h=[3e4,3e4,25e3,25e3,2e4],f=[30,30,25,25,20],x=f.reduce((U,v)=>U+v*v,0),S=new Array(x),w=new Array(x),R=new Array(x);let C=0;for(let U=0;U<5;U++){const v=f[U],y=f[U],M=h[U];for(let o=0;o<y;o++)for(let m=0;m<v;m++){const n=C+o*v+m,u=(m-v/2)*(M/111320),c=(o-y/2)*(M/111320/Math.cos(e.Math.toRadians(35))),A=Math.atan2(c,u)+Math.PI/2+.2*Math.sin(m*.5)*Math.cos(o*.5);w[n]=e.Math.toDegrees(A)%360;const P=Math.sqrt(u*u+c*c),V=Math.max(0,1-P/15);S[n]=(5+U*2)*V+2*Math.random(),R[n]=.5*Math.sin(m*.3)*Math.cos(o*.3)}C+=v*y}return{longitude:104,latitude:35,altitude:s,sizeMesh:h,count:f,hspeed:S,hdir:w,vspeed:R}}const Ua={key:3,class:"fps-chart-panel","aria-label":"实时帧率折线图"},Wa={class:"fps-chart-head"},Ga={class:"fps-chart",viewBox:"0 0 160 48",preserveAspectRatio:"none","aria-hidden":"true"},$a=["points"],qa={class:"map-controls-group"},Xa={class:"mouse-position-content"},Va={__name:"CesiumContainer",setup(e){let t=null,r=null,i=!1;const s=Ft(),h=j(!1),f=j(null),x=j(yr()),S=()=>r,w=()=>t||window.Cesium,R=()=>x.value.tiandituTk,C=()=>x.value.cesiumIonToken,U=da({getViewer:S,getCesium:w,message:s,backendBaseUrl:vr,tiandituToken:R,cesiumIonToken:C}),{activeBasemap:v,activeTerrain:y,customXyzBasemapUrl:M,basemapOptions:o,terrainOptions:m,overlayOptions:n,createImageryProviderViewModels:u,createTerrainProviderViewModels:c,getSelectedImageryProviderViewModel:T,getSelectedTerrainProviderViewModel:A,bindLayerPickerStateSync:P,addBaseImageryLayers:W,initCustomTerrain:V,handleOverlayToggle:J,handleCustomBasemapSubmit:ee,cleanupLayers:te}=U,{coordinateDisplay:q,setupInteractions:se,cleanupInteractions:le}=aa({getViewer:S,getCesium:w,onCoordinatePick:D=>$(D)}),{frameRateDisplay:ye,frameRateLinePoints:Me,setupFrameRateMonitor:N,cleanupFrameRateMonitor:O}=na({getViewer:S}),{installCreditHider:F,cleanupCreditHider:de}=ea({getViewer:S}),{restoreCameraFromUrl:Ee,syncUrlFromPickedCoordinate:$,bindCameraViewSync:ce,cleanupCameraViewSync:Ce}=Fa({getViewer:S,getCesium:w}),ze=xa({getViewer:S,getCesium:w,message:s}),{flyToHome:Be}=ze,Ye=Ba({getViewer:S,getCesium:w,message:s}),{toolPanelOpen:He,advancedEffectControls:Re,fluidParams:Ze,toolModules:De,handleToolAction:Le,handleToolControlChange:Te,handleFluidStateChange:je,cleanupTools:ke}=ba({fluidPanelRef:f,sceneActions:ze,wind:Ye});async function Ie(){i=!1,sr("正在初始化 3D 场景...");try{let D=0,E=1;for(;D<E;)try{if(x.value=await gr({silent:!1,force:D>0}),E=Math.max(E,Array.isArray(x.value.tiandituTokens)?x.value.tiandituTokens.length:1,Array.isArray(x.value.cesiumIonTokens)?x.value.cesiumIonTokens.length:1,1),t=await Gi({ionToken:C()}),i||!t||!document.getElementById("cesiumContainer"))return;b(),se(),N(),ce();const B=W(),K=await V();if(i){_();return}if(h.value=!0,B&&K){s.success("天地图基础影像与地形加载成功。");return}const ue=B?{switched:!1}:vt("tianditu_tk"),l=K?{switched:!1}:vt("cesium_ion_token");if(!(ue.switched||l.switched)){s.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}x.value=l.switched?l.tokens:ue.tokens,_(),D+=1,s.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(B){const K=vt("cesium_ion_token");if(!K.switched)throw B;x.value=K.tokens,_(),D+=1,s.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}s.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(D){s.error("Cesium 运行时加载失败",D),s.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{lr()}}function _(){if(h.value=!1,Ce(),le(),O(),te(),de(),!!r){try{r.destroy()}catch{}r=null}}function b(){var K;const D=typeof t.Map=="function"?t.Map:t.Viewer,E=u(),B=c();r=new D("cesiumContainer",{baseLayerPicker:!0,geocoder:((K=t.IonGeocodeProviderType)==null?void 0:K.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:E,selectedImageryProviderViewModel:T(E),terrainProviderViewModels:B,selectedTerrainProviderViewModel:A(B),shouldAnimate:!0}),r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,ji(r,t),Or(r),F(),P(),Ee({duration:0})||Be(0)}return cr(()=>{Ie()}),ur(()=>{if(i=!0,h.value=!1,Ce(),le(),O(),ke(),te(),de(),r){try{r.destroy()}catch{}r=null}}),(D,E)=>(z(),X(Fe,null,[E[10]||(E[10]=p("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),h.value?(z(),Ve(rt(rn),{key:0,headless:"","get-viewer":S,"get-cesium":w,controls:Z(Re)},null,8,["controls"])):ie("",!0),h.value?(z(),Ve(rt(Hi),{key:1,ref_key:"fluidPanelRef",ref:f,headless:"","get-viewer":S,"get-cesium":w,params:Z(Ze),onStateChange:Z(je)},null,40,["params","onStateChange"])):ie("",!0),h.value?(z(),Ve(xi,{key:2,open:Z(He),"onUpdate:open":E[0]||(E[0]=B=>yt(He)?He.value=B:null),"active-basemap":Z(v),"onUpdate:activeBasemap":E[1]||(E[1]=B=>yt(v)?v.value=B:null),"active-terrain":Z(y),"onUpdate:activeTerrain":E[2]||(E[2]=B=>yt(y)?y.value=B:null),"basemap-options":Z(o),"terrain-options":Z(m),"overlay-options":Z(n),"custom-basemap-url":Z(M),modules:Z(De),onModuleAction:Z(Le),onControlChange:Z(Te),onOverlayToggle:Z(J),onCustomBasemapSubmit:Z(ee)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):ie("",!0),h.value?(z(),X("section",Ua,[p("div",Wa,[E[4]||(E[4]=p("span",null,"FPS",-1)),p("strong",null,ae(Z(ye)),1)]),(z(),X("svg",Ga,[E[5]||(E[5]=p("line",{class:"fps-grid-line",x1:"0",y1:"12",x2:"160",y2:"12"},null,-1)),E[6]||(E[6]=p("line",{class:"fps-grid-line",x1:"0",y1:"24",x2:"160",y2:"24"},null,-1)),E[7]||(E[7]=p("line",{class:"fps-grid-line",x1:"0",y1:"36",x2:"160",y2:"36"},null,-1)),Z(Me)?(z(),X("polyline",{key:0,class:"fps-line",points:Z(Me)},null,8,$a)):ie("",!0)]))])):ie("",!0),p("div",qa,[p("div",Xa,ae(Z(q)),1),E[9]||(E[9]=p("div",{class:"divider"},null,-1)),p("button",{class:"home-btn",title:"回到初始位置",onClick:E[3]||(E[3]=(...B)=>Z(Be)&&Z(Be)(...B))},[...E[8]||(E[8]=[p("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[p("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},oo=gt(Va,[["__scopeId","data-v-c1aa3584"]]);export{oo as default};
