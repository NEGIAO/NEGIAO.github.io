const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-hkrlvPw0.js","./vendor-echarts-all-DHBw4pVz.js","./vendor-libs-RyoEAG51.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var vn=Object.defineProperty;var yn=(e,t,n)=>t in e?vn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var kt=(e,t,n)=>yn(e,typeof t!="symbol"?t+"":t,n);import{_ as gt,h as Ft,R as dn,Q as hn,e as Nt,f as Ot,T as xn,v as _n,y as vt,P as bn,x as Sn}from"./index-BYy8qkZB.js";import{_ as Tn}from"./vendor-runtime-Dp1pzeXC.js";import{C as fn,o as mn,w as _e,d as B,c as X,f as m,t as ae,G as pe,W as dt,X as ct,g as ie,r as K,P as wn,a as we,u as Q,F as Pe,e as We,n as ve,x as Xe,S as nt,I as zt,i as Bt,H as Oe,O as pn,q as xe,v as Mn,B as Ln,A as Fn,a4 as yt}from"./vendor-vue-CmuMwCC6.js";import{af as xt,ag as _t,ah as Pn,X as An,e as Ht,ai as ht,ac as Ut,aj as En,ak as Cn,al as Wt,H as Gt,T as $t,a2 as Rn,am as Dn,an as In,ao as kn,ap as Nn,q as On,o as zn,aq as Bn}from"./vendor-libs-RyoEAG51.js";import{F as Hn,G as Un,H as Wn,I as qt,J as Gn}from"./HomeView-SyjWHKKl.js";import"./vendor-ol-all-ZNWqDNbP.js";import"./vendor-geotiff-B6D64MFK.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BzG5Hdu9.js";import"./vendor-axios-Bdz_Fv8M.js";function $n(e){var i;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(i=t.requestRender)==null||i.call(t))}function qn(e,t){var l;const n=e==null?void 0:e.scene,i=n==null?void 0:n.globe;if(!n||!i)return;Yn(n,t),jn(n),i.enableLighting=!0,i.showGroundAtmosphere=!0,re(i,"dynamicAtmosphereLighting",!0),re(i,"dynamicAtmosphereLightingFromSun",!0),re(i,"atmosphereLightIntensity",11.5),re(i,"atmosphereHueShift",-.015),re(i,"atmosphereSaturationShift",.08),re(i,"atmosphereBrightnessShift",.02),re(i,"lightingFadeInDistance",15e6),re(i,"lightingFadeOutDistance",22e6),re(i,"nightFadeInDistance",9e6),re(i,"nightFadeOutDistance",16e6),ft(t,i,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ft(t,i,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),re(i,"atmosphereRayleighScaleHeight",1e4),re(i,"atmosphereMieScaleHeight",3200),re(i,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=Zn(t));const h=n.skyAtmosphere;h&&(h.show=!0,re(h,"perFragmentAtmosphere",!0),re(h,"dynamicAtmosphereLighting",!0),re(h,"dynamicAtmosphereLightingFromSun",!0),re(h,"hueShift",-.025),re(h,"saturationShift",.08),re(h,"brightnessShift",.03),re(h,"atmosphereLightIntensity",12),ft(t,h,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ft(t,h,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),re(h,"atmosphereRayleighScaleHeight",1e4),re(h,"atmosphereMieScaleHeight",3200),re(h,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),Kn(n),(l=n.requestRender)==null||l.call(n)}function Xn(e){var h;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const i=(h=t.postProcessStages)==null?void 0:h.bloom;return{scene:Ge(t,["highDynamicRange","sunBloom","light"]),fog:Ge(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:Ge(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:Ge(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:Ge(t.sun,["show"]),moon:Ge(t.moon,["show"]),skyBox:Ge(t.skyBox,["show"]),bloom:{props:Ge(i,["enabled"]),uniforms:Ge(i==null?void 0:i.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Vn(e,t,n){var d,_,w,T;if(!n)return;const i=e==null?void 0:e.scene,h=i==null?void 0:i.globe;if(!i||!h)return;$e(i,n.scene,t),$e(i.fog,n.fog,t),$e(h,n.globe,t),$e(i.sun,n.sun,t),$e(i.moon,n.moon,t),$e(i.skyBox,n.skyBox,t),i.skyAtmosphere&&($e(i.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(i.skyAtmosphere.show=!1));const l=(d=i.postProcessStages)==null?void 0:d.bloom;$e(l,(_=n.bloom)==null?void 0:_.props,t),$e(l==null?void 0:l.uniforms,(w=n.bloom)==null?void 0:w.uniforms,t),(T=i.requestRender)==null||T.call(i)}function Yn(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}re(e.light,"intensity",2.35)}function jn(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,re(t,"density",12e-5),re(t,"minimumBrightness",.035),re(t,"screenSpaceErrorFactor",2),re(t,"visualDensityScalar",.16))}function Kn(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(re(t.uniforms,"contrast",128),re(t.uniforms,"brightness",-.18),re(t.uniforms,"delta",1),re(t.uniforms,"sigma",2.5),re(t.uniforms,"stepSize",4.2)))}function Zn(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function re(e,t,n){e&&t in e&&(e[t]=n)}function ft(e,t,n,i,h,l){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(i,h,l))}function Ge(e,t){return e?t.reduce((n,i)=>(i in e&&(n[i]=Qn(e[i])),n),{}):{}}function $e(e,t={},n){!e||!t||Object.entries(t).forEach(([i,h])=>{i in e&&(e[i]=Jn(h,n))})}function Qn(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Jn(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const er={key:0,class:"advanced-effects-root"},tr={class:"effects-panel"},nr={class:"panel-head"},rr={class:"effect-switches"},ir={class:"switch-item"},ar={class:"switch-item"},or={class:"switch-item"},sr={class:"switch-item"},lr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=Ft(),i=K(null),h=K(!1),l=K(!1),d=K(!1),_=K(!1),w=K(!1);let T=null,E=null,P=null,U=!1,v=null,y=null,p=null,o=null,x=null,r=null,c=null,f=null,M=!1,C=null,A=0,W=0,Y=typeof performance<"u"?performance.now():Date.now();function Z(){return p||(p=Tn(()=>import("./cesiumFxRuntime-hkrlvPw0.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(b=>{var z;const S=(z=b==null?void 0:b.getCesiumFxEchartsRuntime)==null?void 0:z.call(b);if(!S)throw new Error("Cinematic FX 图表运行时加载失败");return y=S,S}).catch(b=>{throw p=null,b}),p)}async function ee(){return y||Z()}const te={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},q={hdr:null,bloom:null,sky:null};fn(()=>{ue()}),mn(()=>{De()}),_e(()=>t.controls,b=>{le(b||{})},{deep:!0,immediate:!0});function le(b){Object.prototype.hasOwnProperty.call(b,"fog")&&(h.value=!!b.fog),Object.prototype.hasOwnProperty.call(b,"hbao")&&(l.value=!!b.hbao),Object.prototype.hasOwnProperty.call(b,"tiltShift")&&(d.value=!!b.tiltShift),Object.prototype.hasOwnProperty.call(b,"atmosphere")&&(_.value=!!b.atmosphere)}function ue(){let b=0;o=window.setInterval(async()=>{var O,R;b+=1;const S=(O=t.getViewer)==null?void 0:O.call(t),z=((R=t.getCesium)==null?void 0:R.call(t))||window.Cesium;if(S&&z){clearInterval(o),o=null;try{ye(S),k(S),Me(S,z),G(S,z),n.success("高级视觉效果已启用。")}catch(V){n.error("高级视觉效果初始化失败",V),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}b>=150&&(clearInterval(o),o=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function ye(b){var z,O,R,V,oe,s;const S=b==null?void 0:b.scene;if(S){if(typeof S.highDynamicRange=="boolean"&&(q.hdr=S.highDynamicRange),(z=S.postProcessStages)!=null&&z.bloom){const u=S.postProcessStages.bloom;q.bloom={enabled:!!u.enabled,contrast:(O=u.uniforms)==null?void 0:O.contrast,brightness:(R=u.uniforms)==null?void 0:R.brightness,delta:(V=u.uniforms)==null?void 0:V.delta,sigma:(oe=u.uniforms)==null?void 0:oe.sigma,stepSize:(s=u.uniforms)==null?void 0:s.stepSize}}S.skyAtmosphere&&(q.sky={hueShift:S.skyAtmosphere.hueShift,saturationShift:S.skyAtmosphere.saturationShift,brightnessShift:S.skyAtmosphere.brightnessShift})}}function Me(b,S){var O;!((O=b==null?void 0:b.scene)!=null&&O.postProcessStages)||!(S!=null&&S.PostProcessStage)||(F(b,S),de(b,S),Ce(b,S),_.value?ce(b,S,1200):ze(b))}function k(b){var z;const S=b==null?void 0:b.scene;(z=S==null?void 0:S.renderError)!=null&&z.addEventListener&&(S.rethrowRenderErrors=!1,f=S.renderError.addEventListener((O,R)=>{n.error("Cesium 渲染异常，已触发降级保护",R),N(),M||(M=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function N(){h.value=!1,d.value=!1,l.value=!1,_.value=!1,T&&(T.enabled=!1),E&&(E.enabled=!1),P&&(P.enabled=!1)}function F(b,S){T||(T=new S.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new S.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),b.scene.postProcessStages.add(T),T.enabled=h.value)}function de(b,S){var O,R;const z=(O=b==null?void 0:b.scene)==null?void 0:O.postProcessStages;z&&(z.ambientOcclusion?(P=z.ambientOcclusion,U=!1):(R=S==null?void 0:S.PostProcessStageLibrary)!=null&&R.createAmbientOcclusionStage&&(P=S.PostProcessStageLibrary.createAmbientOcclusionStage(),z.add(P),U=!0),P&&(P.enabled=l.value,P.uniforms&&("intensity"in P.uniforms&&(P.uniforms.intensity=4.2),"bias"in P.uniforms&&(P.uniforms.bias=.08),"lengthCap"in P.uniforms&&(P.uniforms.lengthCap=.35),"stepSize"in P.uniforms&&(P.uniforms.stepSize=1.8),"frustumLength"in P.uniforms&&(P.uniforms.frustumLength=1200))))}function Ce(b,S){E||(E=new S.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),b.scene.postProcessStages.add(E),E.enabled=!1)}function G(b,S){const z=b==null?void 0:b.scene;z&&(c=z.preRender.addEventListener(()=>{var oe;const O=Fe(b),R=Number(((oe=b==null?void 0:b.camera)==null?void 0:oe.pitch)??-1.2);A+=1;const V=typeof performance<"u"?performance.now():Date.now();if(V-Y>=1e3&&(W=Math.round(A*1e3/(V-Y)),A=0,Y=V),T&&(T.enabled=h.value,T.uniforms.cameraHeightFactor=Te(O,150,12e3),T.uniforms.fogDensity=55e-5+(1-T.uniforms.cameraHeightFactor)*.00125),P&&(P.enabled=l.value),E){const s=R>-.62,u=s?Ye((R+.62)/.5):0;E.enabled=d.value&&s,E.uniforms.blurStrength=u}_.value?ce(b,S,O):ze(b)}))}function ce(b,S,z){var s;const O=b==null?void 0:b.scene;if(!O)return;C||(C=Xn(b)),qn(b,S),typeof O.highDynamicRange=="boolean"&&(O.highDynamicRange=!0);const R=(s=O.postProcessStages)==null?void 0:s.bloom;R&&(R.enabled=!0,R.uniforms&&("contrast"in R.uniforms&&(R.uniforms.contrast=149),"brightness"in R.uniforms&&(R.uniforms.brightness=-.12),"delta"in R.uniforms&&(R.uniforms.delta=1),"sigma"in R.uniforms&&(R.uniforms.sigma=3.25),"stepSize"in R.uniforms&&(R.uniforms.stepSize=5)));const V=O.skyAtmosphere;if(!V)return;const oe=Te(z,500,12e4);V.hueShift=-.035+oe*.035,V.saturationShift=-.14+oe*.09,V.brightnessShift=.03+(1-oe)*.08}function ze(b){var R,V;const S=b==null?void 0:b.scene;if(!S)return;const z=((R=t.getCesium)==null?void 0:R.call(t))||window.Cesium;if(C){Vn(b,z,C),C=null;return}typeof S.highDynamicRange=="boolean"&&q.hdr!==null&&(S.highDynamicRange=q.hdr);const O=(V=S.postProcessStages)==null?void 0:V.bloom;O&&q.bloom&&(O.enabled=q.bloom.enabled,O.uniforms&&("contrast"in O.uniforms&&q.bloom.contrast!==void 0&&(O.uniforms.contrast=q.bloom.contrast),"brightness"in O.uniforms&&q.bloom.brightness!==void 0&&(O.uniforms.brightness=q.bloom.brightness),"delta"in O.uniforms&&q.bloom.delta!==void 0&&(O.uniforms.delta=q.bloom.delta),"sigma"in O.uniforms&&q.bloom.sigma!==void 0&&(O.uniforms.sigma=q.bloom.sigma),"stepSize"in O.uniforms&&q.bloom.stepSize!==void 0&&(O.uniforms.stepSize=q.bloom.stepSize))),S.skyAtmosphere&&q.sky&&(S.skyAtmosphere.hueShift=q.sky.hueShift,S.skyAtmosphere.saturationShift=q.sky.saturationShift,S.skyAtmosphere.brightnessShift=q.sky.brightnessShift)}function Be(){x&&(clearInterval(x),x=null)}async function Ve(){var O,R;const b=!w.value;if(w.value=b,!b){Be();return}const S=(O=t.getViewer)==null?void 0:O.call(t),z=((R=t.getCesium)==null?void 0:R.call(t))||window.Cesium;if(!S||!z){w.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Re(S,z),Ke(S,z),Le(S,z)}catch(V){w.value=!1,n.error("图表模块加载失败",V)}}async function Re(b,S){await ee(),await wn(),i.value&&(v||(v=y.init(i.value),Ze()),r||(r=()=>{v==null||v.resize()},window.addEventListener("resize",r)),v.resize(),Le(b,S))}function Ke(b,S){x||(x=window.setInterval(()=>{!v||!w.value||Le(b,S)},1200))}function Le(b,S){var oe;const z=new Date,O=`${ke(z.getHours())}:${ke(z.getMinutes())}:${ke(z.getSeconds())}`,R=Number((Fe(b)/1e3).toFixed(2)),V=Number(S.Math.toDegrees(((oe=b==null?void 0:b.camera)==null?void 0:oe.pitch)??0).toFixed(1));Ie(te.labels,O,20),Ie(te.cameraHeightKm,R,20),Ie(te.pitchDeg,V,20),Ie(te.fps,W,20),v.setOption({xAxis:{data:te.labels},series:[{data:te.cameraHeightKm},{data:te.pitchDeg},{data:te.fps}]})}function Ze(){v&&v.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function De(){var z,O;o&&(clearInterval(o),o=null),Be();const b=(z=t.getViewer)==null?void 0:z.call(t),S=(O=b==null?void 0:b.scene)==null?void 0:O.postProcessStages;c&&(c(),c=null),f&&(f(),f=null),T&&S&&S.remove(T),T=null,E&&S&&S.remove(E),E=null,P&&(U&&S&&S.remove(P),P=null),U=!1,b&&ze(b),r&&(window.removeEventListener("resize",r),r=null),v&&(v.dispose(),v=null),y=null,M=!1}function Fe(b){var R,V,oe;const S=(V=(R=b==null?void 0:b.scene)==null?void 0:R.globe)==null?void 0:V.ellipsoid,z=(oe=b==null?void 0:b.camera)==null?void 0:oe.positionWC;if(!S||!z)return 0;const O=S.cartesianToCartographic(z);return Math.max(0,Number((O==null?void 0:O.height)??0))}function Te(b,S,z){return!Number.isFinite(b)||z<=S?0:Ye((b-S)/(z-S))}function Ye(b){return Math.min(1,Math.max(0,Number(b)||0))}function Ie(b,S,z){b.push(S),b.length>z&&b.shift()}function ke(b){return String(b).padStart(2,"0")}return(b,S)=>e.headless?ie("",!0):(B(),X("div",er,[m("div",tr,[m("div",nr,[S[4]||(S[4]=m("span",{class:"panel-title"},"Cinematic FX",-1)),m("button",{class:"panel-btn",onClick:Ve},ae(w.value?"隐藏图表":"显示图表"),1)]),m("div",rr,[m("label",ir,[pe(m("input",{"onUpdate:modelValue":S[0]||(S[0]=z=>h.value=z),type:"checkbox"},null,512),[[dt,h.value]]),S[5]||(S[5]=m("span",null,"电影级高度雾",-1))]),m("label",ar,[pe(m("input",{"onUpdate:modelValue":S[1]||(S[1]=z=>l.value=z),type:"checkbox"},null,512),[[dt,l.value]]),S[6]||(S[6]=m("span",null,"HBAO 微阴影",-1))]),m("label",or,[pe(m("input",{"onUpdate:modelValue":S[2]||(S[2]=z=>d.value=z),type:"checkbox"},null,512),[[dt,d.value]]),S[7]||(S[7]=m("span",null,"移轴摄影",-1))]),m("label",sr,[pe(m("input",{"onUpdate:modelValue":S[3]||(S[3]=z=>_.value=z),type:"checkbox"},null,512),[[dt,_.value]]),S[8]||(S[8]=m("span",null,"动态大气 + Bloom",-1))])]),pe(m("div",{ref_key:"chartRef",ref:i,class:"fx-chart"},null,512),[[ct,w.value]])])]))}},cr=gt(lr,[["__scopeId","data-v-1e562e70"]]),ur={key:0,class:"launcher-count"},dr={class:"panel-header"},hr={class:"panel-title-block"},fr={class:"panel-mark"},mr={class:"panel-copy"},pr={class:"panel-subtitle"},gr={class:"panel-actions"},vr=["title"],yr={class:"panel-tabs","aria-label":"3D 工具分类"},xr=["aria-pressed","onClick"],_r={class:"panel-scroll"},br={class:"panel-page"},Sr={class:"overview-grid"},Tr={class:"overview-tile"},wr={class:"overview-tile"},Mr={class:"overview-tile"},Lr={key:0,class:"quick-actions"},Fr=["disabled","onClick"],Pr={key:1,class:"empty-state"},Ar={class:"panel-page"},Er=["aria-expanded"],Cr={class:"section-main"},Rr={class:"section-meta"},Dr={key:0,class:"section-body"},Ir={class:"option-grid"},kr=["disabled","aria-pressed","title","onClick"],Nr={class:"custom-basemap-input-row"},Or=["disabled"],zr={key:0,class:"custom-basemap-current"},Br=["aria-expanded"],Hr={class:"section-main"},Ur={class:"section-meta"},Wr={key:0,class:"section-body"},Gr={class:"option-grid"},$r=["aria-pressed","title","onClick"],qr=["aria-expanded"],Xr={class:"section-main"},Vr={class:"section-meta"},Yr={key:0,class:"section-body"},jr={class:"overlay-list"},Kr=["disabled","aria-pressed","title","onClick"],Zr={class:"overlay-copy"},Qr={class:"overlay-title"},Jr={key:0,class:"overlay-desc"},ei={key:3,class:"empty-state"},ti={class:"panel-page"},ni={class:"module-list"},ri=["aria-expanded","onClick"],ii={class:"module-icon"},ai={class:"module-copy"},oi={class:"module-title"},si={key:0,class:"module-desc"},li={class:"module-head-side"},ci={key:0,class:"module-body"},ui={key:0,class:"module-actions"},di=["disabled","onClick"],hi={key:1,class:"control-list"},fi={class:"control-label"},mi={class:"control-label-text"},pi=["aria-label","title"],gi=["min","max","step","value","disabled","onInput"],vi=["min","max","step","value","disabled","onInput"],yi=["value","disabled","onInput"],xi=["value","disabled","onChange"],_i=["value"],bi=["aria-pressed","disabled","onClick"],Si={key:4,class:"control-value"},Ti={key:0,class:"empty-state"},Xt=2,wi={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(e,{emit:t}){const n=e,i=t,h=ee(),l=h.uiStateVersion===Xt,d=K(h.activeTab||"scene"),_=K(!!h.compactMode),w=K(new Set(l?h.expandedLayerSectionIds||[]:[])),T=K(new Set(l?h.expandedModuleIds||[]:[])),E=K(n.customBasemapUrl||""),P=xe(()=>n.embedded||n.open),U=xe(()=>n.modules.find(k=>k.id==="scene")||null),v=xe(()=>{var k;return((k=U.value)==null?void 0:k.actions)||[]}),y=xe(()=>n.modules.filter(k=>k.id!=="scene")),p=xe(()=>y.value.filter(k=>k.statusTone==="success"||k.statusTone==="warning").length),o=xe(()=>n.overlayOptions.filter(k=>!!k.active).length),x=[{id:"scene",label:"场景",icon:_t},{id:"layers",label:"图层",icon:Ht},{id:"modules",label:"模块",icon:xt}],r=xe(()=>{var k;return((k=n.basemapOptions.find(N=>N.value===n.activeBasemap))==null?void 0:k.label)||"未选择"}),c=xe(()=>{var k;return((k=n.terrainOptions.find(N=>N.value===n.activeTerrain))==null?void 0:k.label)||"未选择"});_e(()=>n.modules.map(k=>k.id),k=>{k.includes(d.value)||d.value==="scene"||d.value==="layers"||d.value==="modules"||(d.value="scene")},{immediate:!0}),_e([d,_,w,T],te,{deep:!0}),_e(()=>n.customBasemapUrl,k=>{k!==E.value&&(E.value=k||"")});function f(k){i("update:open",k)}function M(k){return w.value.has(k)}function C(k){const N=new Set(w.value);N.has(k)?N.delete(k):N.add(k),w.value=N}function A(k){return T.value.has(k)}function W(k){const N=new Set(T.value);N.has(k)?N.delete(k):N.add(k),T.value=N}function Y(k){k!=null&&k.disabled||i("update:activeBasemap",k.value)}function Z(){i("custom-basemap-submit",{url:E.value})}function ee(){if(typeof window>"u")return{};try{const k=window.localStorage.getItem(n.storageKey);return k?JSON.parse(k):{}}catch{return{}}}function te(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:Xt,activeTab:d.value,compactMode:_.value,expandedLayerSectionIds:[...w.value],expandedModuleIds:[...T.value]}))}catch{}}function q(k){return{scene:_t,effects:zn,wind:On,fluid:Nn}[k]||xt}function le(k,N){var de;return((de={scene:{home:In,everest:Wt,tileset:Dn},wind:{load:Rn,clear:$t},fluid:{pick:Gt,clear:$t}}[k])==null?void 0:de[N])||kn}function ue(k,N){i("module-action",{moduleId:k,actionId:N})}function ye(k,N,F){const de=N.type==="range"?Number(F):F;i("control-change",{moduleId:k,controlId:N.id,value:de})}function Me(k){k.disabled||i("overlay-toggle",{overlayId:k.value,value:!k.active})}return(k,N)=>(B(),X("aside",{class:ve(["cesium-tool-shell",{"is-open":P.value,"is-embedded":e.embedded}])},[!e.embedded&&!P.value?(B(),X("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:N[0]||(N[0]=F=>f(!0))},[we(Q(xt),{size:18,"stroke-width":"2"}),N[8]||(N[8]=m("span",null,"高级控制台",-1)),p.value?(B(),X("span",ur,ae(p.value),1)):ie("",!0)])):ie("",!0),pe(m("section",{class:ve(["cesium-tool-panel",{compact:_.value}]),"aria-label":"Cesium 高级控制台"},[m("header",dr,[m("div",hr,[m("span",fr,[we(Q(_t),{size:18,"stroke-width":"2"})]),m("span",mr,[N[9]||(N[9]=m("span",{class:"panel-title"},"3D 高级控制台",-1)),m("span",pr,ae(r.value)+" / "+ae(c.value),1)])]),m("div",gr,[m("button",{class:"icon-btn",type:"button",title:_.value?"切换为舒展布局":"切换为紧凑布局",onClick:N[1]||(N[1]=F=>_.value=!_.value)},[we(Q(Pn),{size:16,"stroke-width":"2"})],8,vr),e.embedded?ie("",!0):(B(),X("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:N[2]||(N[2]=F=>f(!1))},[we(Q(An),{size:17,"stroke-width":"2"})]))])]),m("nav",yr,[(B(),X(Pe,null,We(x,F=>m("button",{key:F.id,class:ve(["tab-btn",{active:d.value===F.id}]),type:"button","aria-pressed":d.value===F.id,onClick:de=>d.value=F.id},[(B(),Xe(nt(F.icon),{size:15,"stroke-width":"2"})),m("span",null,ae(F.label),1)],10,xr)),64))]),m("div",_r,[pe(m("section",br,[m("div",Sr,[m("div",Tr,[N[10]||(N[10]=m("span",{class:"overview-label"},"地图源",-1)),m("strong",null,ae(r.value),1)]),m("div",wr,[N[11]||(N[11]=m("span",{class:"overview-label"},"地形",-1)),m("strong",null,ae(c.value),1)]),m("div",Mr,[N[12]||(N[12]=m("span",{class:"overview-label"},"模块",-1)),m("strong",null,ae(p.value)+"/"+ae(y.value.length),1)])]),v.value.length?(B(),X("div",Lr,[(B(!0),X(Pe,null,We(v.value,F=>(B(),X("button",{key:F.id,class:ve(["tool-action",[F.variant||"default",{active:F.active}]]),disabled:F.disabled,type:"button",onClick:de=>ue(U.value.id,F.id)},[(B(),Xe(nt(le(U.value.id,F.id)),{size:15,"stroke-width":"2"})),zt(" "+ae(F.label),1)],10,Fr))),128))])):(B(),X("div",Pr," 暂无场景快捷操作 "))],512),[[ct,d.value==="scene"]]),pe(m("section",Ar,[e.basemapOptions.length?(B(),X("div",{key:0,class:ve(["option-group",{expanded:M("basemap")}])},[m("button",{class:"section-head section-toggle",type:"button","aria-expanded":M("basemap"),onClick:N[3]||(N[3]=F=>C("basemap"))},[m("span",Cr,[we(Q(Ht),{size:16,"stroke-width":"2"}),N[13]||(N[13]=m("span",null,"底图源",-1))]),m("span",Rr,[m("span",null,ae(r.value),1),we(Q(ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Er),M("basemap")?(B(),X("div",Dr,[m("div",Ir,[(B(!0),X(Pe,null,We(e.basemapOptions,F=>(B(),X("button",{key:F.value,class:ve(["option-card",{active:F.value===e.activeBasemap}]),type:"button",disabled:F.disabled,"aria-pressed":F.value===e.activeBasemap,title:F.description||F.label,onClick:de=>Y(F)},[m("span",null,ae(F.label),1),F.value===e.activeBasemap?(B(),Xe(Q(Ut),{key:0,size:15,"stroke-width":"2.4"})):ie("",!0)],10,kr))),128))]),m("form",{class:"custom-basemap-editor",onSubmit:Bt(Z,["prevent"])},[m("div",Nr,[we(Q(En),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),pe(m("input",{"onUpdate:modelValue":N[4]||(N[4]=F=>E.value=F),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Oe,E.value]]),m("button",{class:"custom-basemap-submit",type:"submit",disabled:!E.value.trim(),title:"加载自定义 XYZ"},[we(Q(Cn),{size:14,"stroke-width":"2"}),N[14]||(N[14]=m("span",null,"加载",-1))],8,Or)]),e.customBasemapUrl?(B(),X("div",zr,ae(e.customBasemapUrl),1)):ie("",!0)],32)])):ie("",!0)],2)):ie("",!0),e.terrainOptions.length?(B(),X("div",{key:1,class:ve(["option-group",{expanded:M("terrain")}])},[m("button",{class:"section-head section-toggle",type:"button","aria-expanded":M("terrain"),onClick:N[5]||(N[5]=F=>C("terrain"))},[m("span",Hr,[we(Q(Wt),{size:16,"stroke-width":"2"}),N[15]||(N[15]=m("span",null,"地形",-1))]),m("span",Ur,[m("span",null,ae(c.value),1),we(Q(ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Br),M("terrain")?(B(),X("div",Wr,[m("div",Gr,[(B(!0),X(Pe,null,We(e.terrainOptions,F=>(B(),X("button",{key:F.value,class:ve(["option-card",{active:F.value===e.activeTerrain}]),type:"button","aria-pressed":F.value===e.activeTerrain,title:F.description||F.label,onClick:de=>k.$emit("update:activeTerrain",F.value)},[m("span",null,ae(F.label),1),F.value===e.activeTerrain?(B(),Xe(Q(Ut),{key:0,size:15,"stroke-width":"2.4"})):ie("",!0)],10,$r))),128))])])):ie("",!0)],2)):ie("",!0),e.overlayOptions.length?(B(),X("div",{key:2,class:ve(["option-group",{expanded:M("overlay")}])},[m("button",{class:"section-head section-toggle",type:"button","aria-expanded":M("overlay"),onClick:N[6]||(N[6]=F=>C("overlay"))},[m("span",Xr,[we(Q(Gt),{size:16,"stroke-width":"2"}),N[16]||(N[16]=m("span",null,"叠加层",-1))]),m("span",Vr,[m("span",null,ae(o.value)+"/"+ae(e.overlayOptions.length),1),we(Q(ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,qr),M("overlay")?(B(),X("div",Yr,[m("div",jr,[(B(!0),X(Pe,null,We(e.overlayOptions,F=>(B(),X("button",{key:F.value,class:ve(["overlay-row",{active:!!F.active}]),type:"button",disabled:F.disabled,"aria-pressed":!!F.active,title:F.description||F.label,onClick:de=>Me(F)},[m("span",Zr,[m("span",Qr,ae(F.label),1),F.description?(B(),X("span",Jr,ae(F.description),1)):ie("",!0)]),m("span",{class:ve(["toggle-control",{active:!!F.active}]),"aria-hidden":"true"},[...N[17]||(N[17]=[m("span",{class:"toggle-track"},[m("span",{class:"toggle-thumb"})],-1)])],2)],10,Kr))),128))])])):ie("",!0)],2)):ie("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(B(),X("div",ei," 暂无图层配置项 ")):ie("",!0)],512),[[ct,d.value==="layers"]]),pe(m("section",ti,[m("div",ni,[(B(!0),X(Pe,null,We(y.value,F=>{var de,Ce;return B(),X("article",{key:F.id,class:ve(["module-item",{expanded:A(F.id)}])},[m("button",{class:"module-head",type:"button","aria-expanded":A(F.id),onClick:G=>W(F.id)},[m("span",ii,[(B(),Xe(nt(q(F.id)),{size:16,"stroke-width":"2"}))]),m("span",ai,[m("span",oi,ae(F.title),1),F.description?(B(),X("span",si,ae(F.description),1)):ie("",!0)]),m("span",li,[F.status?(B(),X("span",{key:0,class:ve(["module-status",F.statusTone||"neutral"])},ae(F.status),3)):ie("",!0),we(Q(ht),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,ri),A(F.id)?(B(),X("div",ci,[(de=F.actions)!=null&&de.length?(B(),X("div",ui,[(B(!0),X(Pe,null,We(F.actions,G=>(B(),X("button",{key:G.id,class:ve(["tool-action",[G.variant||"default",{active:G.active}]]),disabled:G.disabled,type:"button",onClick:ce=>ue(F.id,G.id)},[(B(),Xe(nt(le(F.id,G.id)),{size:14,"stroke-width":"2"})),zt(" "+ae(G.label),1)],10,di))),128))])):ie("",!0),(Ce=F.controls)!=null&&Ce.length?(B(),X("div",hi,[(B(!0),X(Pe,null,We(F.controls,G=>(B(),X("label",{key:G.id,class:ve(["control-row",`control-${G.type}`])},[m("span",fi,[m("span",mi,ae(G.label),1),G.tooltip?(B(),X("span",{key:0,class:"control-help","aria-label":G.tooltip,title:G.tooltip,onClick:N[7]||(N[7]=Bt(()=>{},["prevent","stop"]))}," ? ",8,pi)):ie("",!0)]),G.type==="range"?(B(),X(Pe,{key:0},[m("input",{class:"control-range",type:"range",min:G.min,max:G.max,step:G.step,value:G.value,disabled:G.disabled,onInput:ce=>ye(F.id,G,ce.target.value)},null,40,gi),m("input",{class:"control-number",type:"number",min:G.min,max:G.max,step:G.step,value:G.value,disabled:G.disabled,onInput:ce=>ye(F.id,G,ce.target.value)},null,40,vi)],64)):G.type==="color"?(B(),X(Pe,{key:1},[m("input",{class:"control-color",type:"color",value:G.value,disabled:G.disabled,onInput:ce=>ye(F.id,G,ce.target.value)},null,40,yi),m("span",{class:"control-color-swatch",style:pn({backgroundColor:G.value})},null,4)],64)):G.type==="select"?(B(),X("select",{key:2,class:"control-select",value:G.value,disabled:G.disabled,onChange:ce=>ye(F.id,G,ce.target.value)},[(B(!0),X(Pe,null,We(G.options||[],ce=>(B(),X("option",{key:ce.value,value:ce.value},ae(ce.label),9,_i))),128))],40,xi)):G.type==="toggle"?(B(),X("button",{key:3,class:ve(["toggle-control",{active:!!G.value}]),type:"button","aria-pressed":!!G.value,disabled:G.disabled,onClick:ce=>ye(F.id,G,!G.value)},[...N[18]||(N[18]=[m("span",{class:"toggle-track"},[m("span",{class:"toggle-thumb"})],-1)])],10,bi)):ie("",!0),G.displayValue?(B(),X("span",Si,ae(G.displayValue),1)):ie("",!0)],2))),128))])):ie("",!0)])):ie("",!0)],2)}),128))]),y.value.length?ie("",!0):(B(),X("div",Ti," 暂无可用功能模块 "))],512),[[ct,d.value==="modules"]])])],2),[[ct,e.embedded||P.value]])],2))}},Mi=gt(wi,[["__scopeId","data-v-c2b974d5"]]);function Li(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(x){return(x==null?void 0:x._view)||(x==null?void 0:x.view)}function n(x){const r=t(x);if(!(r!=null&&r.passState))throw new Error("Cesium scene passState is unavailable.");return r.passState}function i(x){const r=t(x);return(r==null?void 0:r.frustumCommandsList)||(r==null?void 0:r._frustumCommandsList)||[]}const h=`
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
`,w=`
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
`;class E{constructor(r){this.commandType=r.commandType,this.geometry=r.geometry,this.attributeLocations=r.attributeLocations,this.primitiveType=r.primitiveType,this.uniformMap=r.uniformMap,this.vertexShaderSource=r.vertexShaderSource,this.fragmentShaderSource=r.fragmentShaderSource,this.rawRenderState=r.rawRenderState,this.framebuffer=r.framebuffer,this.isPostRender=r.isPostRender,this.outputTexture=r.outputTexture,this.autoClear=e.defaultValue(r.autoClear,!1),this.preExecute=r.preExecute,this.modelMatrix=e.defaultValue(r.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(r){switch(this.commandType){case"Draw":{const c=e.VertexArray.fromGeometry({context:r,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),f=e.ShaderProgram.fromCache({context:r,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),M=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:c,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:f,framebuffer:this.framebuffer,renderState:M,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(r,c){this.geometry=c;const f=e.VertexArray.fromGeometry({context:r,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=f}update(r){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(r.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&r.commandList.push(this.clearCommand),r.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class P{constructor(){}static loadText(r){const c=new XMLHttpRequest;return c.open("GET",r,!1),c.send(),c.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(r){if(e.defined(r.arrayBufferView)){const f={};f.arrayBufferView=r.arrayBufferView,r.source=f,r.flipY=!1}return new e.Texture(r)}static createDepthFramebuffer(r,c,f){return new e.Framebuffer({context:r,colorTextures:[this.createTexture({context:r,width:c,height:f,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(c*f*4)})],depthRenderbuffer:new e.Renderbuffer({context:r,width:c,height:f,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(r,c,f,M=!1){const C={context:r,colorTextures:[c],destroyAttachments:M};return f&&(C.depthTexture=f),new e.Framebuffer(C)}static createRawRenderState(r){const M={viewport:r.viewport,depthTest:r.depthTest,depthMask:r.depthMask,blending:r.blending};return e.Appearance.getDefaultRenderState(!0,!1,M)}}const o=class o{constructor(r,c={}){if(!r)throw new Error("Cesium Viewer is required");this.viewer=r,this._initConfiguration(c),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(r){this.config={resolution:new e.Cartesian2(r.width||o.DEFAULTS.width,r.height||o.DEFAULTS.height),dimensions:r.dimensions||o.DEFAULTS.dimensions.clone(),heightRange:{min:r.minHeight??o.DEFAULTS.heightRange[0],max:r.maxHeight??o.DEFAULTS.heightRange[1]},baseHeight:r.baseHeight??o.DEFAULTS.baseHeight,fluidParams:r.fluidParams||o.DEFAULTS.fluidParams.clone(),customParams:r.customParams||o.DEFAULTS.customParams.clone(),waterColor:r.waterColor||o.DEFAULTS.waterColor.clone(),lonLat:r.lonLat||[...o.DEFAULTS.lonLat],timeStep:r.timeStep||o.DEFAULTS.timeStep,heightMapSource:r.heightMapSource||o.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(r){const c=Number(r);!Number.isFinite(c)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,c)),this.resetSimulation())}resetSimulation(){var r,c;this._frameCount=0,(c=(r=this.viewer.scene).requestRender)==null||c.call(r)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const r=()=>P.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:r(),B:r(),C:r(),D:r()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(r){if(!(r!=null&&r.arrayBufferView)||!r.width||!r.height)throw new Error("Invalid height map source.");return P.createTexture({context:this.viewer.scene.context,width:r.width,height:r.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:r.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var q,le;const r=this.viewer.scene.context,c=P.createDepthFramebuffer(r,this.config.resolution.x,this.config.resolution.y),f=this.viewer.scene,M=f.frameState,C=n(this.viewer.scene),A=f.camera,W=M.camera,Y=C.framebuffer,Z=e.BoundingRectangle.clone(C.viewport,new e.BoundingRectangle);let ee=null,te=[];try{C.viewport.x=0,C.viewport.y=0,C.viewport.width=this.config.resolution.x,C.viewport.height=this.config.resolution.y,C.framebuffer=c,f.camera=this.heightMapCamera,M.camera=this.heightMapCamera,M.context.uniformState.updateCamera(this.heightMapCamera),te=this._processHeightMapShaders(),this._renderDepthPrepass(C);const ue=P.createTexture({context:r,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return ee=P.createFramebuffer(r,ue),this._copyTexture(c.getColorTexture(0),ee),ue}finally{this._restoreHeightMapShaders(te),C.framebuffer=Y,e.BoundingRectangle.clone(Z,C.viewport),f.camera=A,M.camera=W,W&&M.context.uniformState.updateCamera(W),ee&&!((q=ee.isDestroyed)!=null&&q.call(ee))&&ee.destroy(),c&&!((le=c.isDestroyed)!=null&&le.call(c))&&c.destroy()}}_renderDepthPrepass(r){const c=this.viewer.scene.frameState;c.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(M=>M.execute(this.viewer.scene.context,r))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const r={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...r,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:l}),this._createComputePass("B",{uniforms:{...r,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:d}),this._createComputePass("C",{uniforms:{...r,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:_}),this._createComputePass("D",{uniforms:{...r,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:w})]}_createComputePass(r,{uniforms:c,shaderSource:f}){return new E({commandType:"Compute",uniformMap:c,fragmentShaderSource:new e.ShaderSource({sources:[h,f]}),geometry:P.getFullscreenQuad(),outputTexture:this.textures[r],preExecute:M=>M.commandToExecute.outputTexture=this.textures[r]})}_createMainRenderPass(){const r=v([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new E({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[h,T]}),geometry:this._createBoxGeometry(),modelMatrix:r,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var r,c,f,M;return(M=(f=(c=(r=t(this.viewer.scene))==null?void 0:r.globeDepth)==null?void 0:c.colorFramebufferManager)==null?void 0:f._colorTextures)==null?void 0:M[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(r=>this.viewer.scene.primitives.add(r)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(r){const c=this.viewer.camera.getPickRay(r);return this.viewer.scene.globe.pick(c,this.viewer.scene)}_createOrthographicCamera(){const r=new e.Camera(this.viewer.scene);r.frustum=new e.OrthographicOffCenterFrustum;const[c,f]=this.config.lonLat,M=e.Cartesian3.fromDegrees(c,f,this.config.baseHeight),C=e.Transforms.eastNorthUpToFixedFrame(M),A=r.frustum;A.near=.01,A.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),A.left=-this.config.dimensions.x/2,A.right=this.config.dimensions.x/2,A.bottom=-this.config.dimensions.y/2,A.top=this.config.dimensions.y/2;const W=e.Matrix4.getColumn(C,2,new e.Cartesian3);e.Cartesian3.negate(W,W);const Y=e.Matrix4.getColumn(C,1,new e.Cartesian3),Z=e.Matrix4.getColumn(C,0,new e.Cartesian3),ee=e.Cartesian3.multiplyByScalar(W,-A.far,new e.Cartesian3);return r.position=e.Cartesian3.add(M,ee,new e.Cartesian3),r.direction=W,r.up=Y,r.right=Z,r}destroy(){var r,c;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(f=>{f&&this.viewer.scene.primitives.remove(f)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(f=>{var M;f&&!((M=f.isDestroyed)!=null&&M.call(f))&&f.destroy()}),this.textures={},this._heightMap&&!((c=(r=this._heightMap).isDestroyed)!=null&&c.call(r))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(r,c){const f=this.viewer.scene.context,M=n(this.viewer.scene),C=f.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>r},owner:this}),A=M.framebuffer;M.framebuffer=c,C.execute(f,M),M.framebuffer=A}_getDepthRenderCommands(){var f,M;const r=[],c=i(this.viewer.scene);for(let C=0;C<c.length;++C){const A=c[C],W=(f=A==null?void 0:A.commands)==null?void 0:f[2],Y=((M=A==null?void 0:A.indices)==null?void 0:M[2])??(W==null?void 0:W.length)??0;W&&Y>0&&r.push(...W.slice(0,Y))}return r}_processHeightMapShaders(){const r=[],c=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),f=e.Matrix4.inverse(c,new e.Matrix4),M=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(A=>{var te;if(!((te=A==null?void 0:A.shaderProgram)!=null&&te.fragmentShaderSource)||!A.uniformMap)return;const W=Object.prototype.hasOwnProperty.call(A.uniformMap,"u_inverseEnuMatrix"),Y=A.uniformMap.u_inverseEnuMatrix,Z=A.shaderProgram,ee=new e.Matrix4;A.uniformMap.u_inverseEnuMatrix=()=>{const q=A.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(f,q,ee)},A.heightMap_ShaderProgram||(A.heightMap_ShaderProgram=this._getDerivedShaderProgram(M.context,A.shaderProgram,"Height_Map")),A.shaderProgram=A.heightMap_ShaderProgram,r.push({command:A,hadInverseUniform:W,originalInverseUniform:Y,originalShaderProgram:Z})}),r}_restoreHeightMapShaders(r){r.forEach(c=>{const{command:f,hadInverseUniform:M,originalInverseUniform:C,originalShaderProgram:A}=c;f!=null&&f.uniformMap&&(f.shaderProgram=A,M?f.uniformMap.u_inverseEnuMatrix=C:delete f.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(r,c,f){let M=r.shaderCache.getDerivedShaderProgram(c,f);return e.defined(M)||(M=this._createHeightMapShaderProgram(r,c,f)),M}_createHeightMapShaderProgram(r,c,f){const M=this._modifyFragmentShader(c.fragmentShaderSource);return r.shaderCache.createDerivedShaderProgram(c,f,{vertexShaderSource:c.vertexShaderSource,fragmentShaderSource:M,attributeLocations:c._attributeLocations})}_modifyFragmentShader(r){const c=r.sources.map(f=>e.ShaderSource.replaceMain(f,"czm_heightMap_main"));return c.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new e.ShaderSource({sources:c,defines:r.defines})}_createBoxGeometry(){return e.BoxGeometry.createGeometry(e.BoxGeometry.fromDimensions({vertexFormat:e.VertexFormat.POSITION_AND_ST,dimensions:new e.Cartesian3(1,1,1)}))}_getAttributeLocations(){return e.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:e.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new e.ShaderSource({sources:[`
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
            }`]})}};kt(o,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let U=o;const v=(x=[0,0,0],r=[0,0,0],c=[1,1,1])=>{const f=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(r[0]))),M=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(r[1]))),C=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(r[2])));x instanceof e.Cartesian3||(x=e.Cartesian3.fromDegrees(...x));const A=e.Transforms.eastNorthUpToFixedFrame(x);e.Matrix4.multiply(A,f,A),e.Matrix4.multiply(A,M,A),e.Matrix4.multiply(A,C,A);const W=e.Matrix4.fromScale(new e.Cartesian3(...c));return e.Matrix4.multiply(A,W,new e.Matrix4)},y=`
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
    `;function p(){return new e.PostProcessStage({fragmentShader:y})}return{FluidRenderer:U,createSkyEffect:p}}const Fi={key:0,class:"fluid-root"},Pi={class:"fluid-panel"},Ai={class:"panel-actions"},Ei=["disabled"],Ci={key:0,class:"selected-text"},Ri={class:"param-list"},Di={class:"param-row"},Ii={class:"param-row"},ki={class:"param-row"},Ni={key:0,class:"param-row"},Oi=["min","max","step"],zi=["min","max","step"],Bi={class:"param-row color-row"},Vt=1024,mt=1e4,Yt=1200,Hi=100,Ui=.01,Wi=.03,Gi=60,bt=64,$i=160,qi={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const i=e,h=n,l=Ft(),d=K(10),_=K(20),w=K(3),T=K("#0d4fa3"),E=K(null),P=K(null),U=K(null),v=K(!1),y=K(!1),p=K(null),o=K(null);let x=null,r=null,c=null,f=null,M=null,C=null,A=0;const W=xe(()=>!Number.isFinite(p.value)||!Number.isFinite(o.value)?"":`经度 ${p.value.toFixed(6)} / 纬度 ${o.value.toFixed(6)}`),Y=xe(()=>Number.isFinite(P.value)&&Number.isFinite(U.value)),Z=xe(()=>{if(!Y.value)return 1;const s=Math.abs(U.value-P.value);return Math.max(s/1e3,.01)});_e([d,_,w,T],Ie),_e(E,ke),_e(()=>i.params,s=>{te(s||{})},{deep:!0,immediate:!0}),_e([v,y,W,E,P,U],q,{immediate:!0}),Mn(()=>{V(!0)});function ee(){var L,H;const s=(L=i.getViewer)==null?void 0:L.call(i),u=((H=i.getCesium)==null?void 0:H.call(i))||window.Cesium;if(!s||!u)return l.warning("Cesium 场景尚未就绪。"),null;if(!x){const $=Li(u);x=$.FluidRenderer,r=$.createSkyEffect}return{viewer:s,Cesium:u}}function te(s){Number.isFinite(Number(s.threshold))&&(d.value=Number(s.threshold)),Number.isFinite(Number(s.blend))&&(_.value=Number(s.blend)),Number.isFinite(Number(s.lightStrength))&&(w.value=Number(s.lightStrength)),De(s.waterColor)&&(T.value=s.waterColor),Number.isFinite(Number(s.waterLevel))&&(E.value=Number(s.waterLevel))}function q(){h("state-change",{isPicking:v.value,hasFluid:y.value,selectedText:W.value,waterLevel:E.value,waterLevelMin:P.value,waterLevelMax:U.value})}function le(){const s=ee();if(!s)return;const{viewer:u,Cesium:L}=s;O(),b(u,L),v.value=!0,c=new L.ScreenSpaceEventHandler(u.scene.canvas),c.setInputAction(H=>{ue(u,L,H.position)},L.ScreenSpaceEventType.LEFT_CLICK)}async function ue(s,u,L){var it,a;const H=Ye(s,L);if(!H){l.warning("未选中可用地形位置。");return}const $=++A;O();const se=u.Cartographic.fromCartesian(H),he=u.Math.toDegrees(se.longitude),fe=u.Math.toDegrees(se.latitude),Ne=Number(se.height),Ae=Number.isFinite(Ne)?Ne:0,Qe=new u.Cartesian3(mt,mt,0);dn("正在请求模拟范围高度数据...");try{R();const g=Number(d.value)||0,D=Number(_.value)||0,I=Number(w.value)||0,j=await ye(s,u,{lon:he,lat:fe,centerHeight:Ae,dimensions:Qe}),J=Be(j,Ae),me=J.baseHeight,be=J.depth,Se=Ve(J,Ae),He=new u.Cartesian3(mt,mt,be);if($!==A)return;P.value=J.minHeight,U.value=J.maxHeight,E.value=Se,j||l.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),f=new x(s,{lonLat:[he,fe],width:Vt,height:Vt,dimensions:He,baseHeight:me,minHeight:J.minHeight,maxHeight:J.maxHeight,heightMapSource:j,waterColor:Le(u,T.value),customParams:new u.Cartesian4(g,D,I,10),fluidParams:new u.Cartesian4(.9+I/10*.099,Math.min(1,D/50),g/5e4,Re(Se,J))}),p.value=he,o.value=fe,y.value=!0,(a=(it=s.scene).requestRender)==null||a.call(it),l.success("水体流体已创建。")}catch(g){l.error("水体流体创建失败",g),l.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{hn()}}async function ye(s,u,L){const H=s==null?void 0:s.terrainProvider,$=k(L.dimensions);if(!H)return null;if(u.EllipsoidTerrainProvider&&H instanceof u.EllipsoidTerrainProvider)return ce($);if(typeof u.sampleTerrain!="function"&&typeof u.sampleTerrainMostDetailed!="function")return null;try{return await Me(s,u,L,$)}catch(se){if($<=bt)throw se;return Me(s,u,L,bt)}}async function Me(s,u,L,H){const $=F(u,L,H),se=await de(u,s.terrainProvider,$);return G(se||$,{size:H})}function k(s){const u=Math.max(Number(s==null?void 0:s.x)||0,Number(s==null?void 0:s.y)||0),L=Math.ceil(u/Gi)+1;return N(L,bt,$i)}function N(s,u,L){return Math.max(u,Math.min(L,Math.round(s)))}function F(s,{lon:u,lat:L,centerHeight:H,dimensions:$},se){const he=s.Cartesian3.fromDegrees(u,L,H),fe=s.Transforms.eastNorthUpToFixedFrame(he),Ne=[],Ae=Math.max(1,se-1);for(let Qe=0;Qe<se;Qe++){const a=(.5-Qe/Ae)*$.y;for(let g=0;g<se;g++){const I=(g/Ae-.5)*$.x,j=new s.Cartesian3(I,a,0),J=s.Matrix4.multiplyByPoint(fe,j,new s.Cartesian3);Ne.push(s.Cartographic.fromCartesian(J))}}return Ne}async function de(s,u,L){const H=Ce(u);return Number.isInteger(H)&&typeof s.sampleTerrain=="function"?s.sampleTerrain(u,H,L):typeof s.sampleTerrainMostDetailed=="function"?s.sampleTerrainMostDetailed(u,L):s.sampleTerrain(u,10,L)}function Ce(s){const u=Number(s==null?void 0:s._bottomLevel);return Number.isFinite(u)?Math.max(0,u-1):null}function G(s,{size:u}){var $;const L=ze(s);if(!L)return null;const H=new Float32Array(u*u*4);for(let se=0;se<u*u;se++){const he=Number(($=s[se])==null?void 0:$.height),fe=se*4;H[fe]=Number.isFinite(he)?Te(he,L.minHeight,L.maxHeight):L.minHeight,H[fe+1]=0,H[fe+2]=0,H[fe+3]=1}return{width:u,height:u,arrayBufferView:H,minHeight:L.minHeight,maxHeight:L.maxHeight}}function ce(s){return{width:s,height:s,arrayBufferView:new Float32Array(s*s*4),minHeight:0,maxHeight:0}}function ze(s){let u=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;for(const H of s||[]){const $=Number(H==null?void 0:H.height);Number.isFinite($)&&(u=Math.min(u,$),L=Math.max(L,$))}return!Number.isFinite(u)||!Number.isFinite(L)?null:{minHeight:u,maxHeight:L}}function Be(s,u){const L=Number(s==null?void 0:s.minHeight),H=Number(s==null?void 0:s.maxHeight);if(Number.isFinite(L)&&Number.isFinite(H)){const he=Number(u),fe=Number.isFinite(he)?Math.min(L,H,he):Math.min(L,H),Ne=Number.isFinite(he)?Math.max(L,H,he):Math.max(L,H),Ae=Math.max(Ne-fe,Ui);return{baseHeight:fe,depth:Ae,minHeight:fe,maxHeight:fe+Ae}}const $=Number(u),se=Number.isFinite($)?$-Hi:0;return{baseHeight:se,depth:Yt,minHeight:se,maxHeight:se+Yt}}function Ve(s,u){const L=s.minHeight+s.depth*Wi,H=Number(u),$=Number.isFinite(H)?H:L;return Te($,s.minHeight,s.maxHeight)}function Re(s,u){const L=u.maxHeight-u.minHeight;return!Number.isFinite(L)||L<=0?0:Te((s-u.minHeight)/L,0,1)}function Ke(){return!Number.isFinite(P.value)||!Number.isFinite(U.value)?null:{minHeight:Math.min(P.value,U.value),maxHeight:Math.max(P.value,U.value)}}function Le(s,u){const L=Fe(u)||Fe("#0d4fa3");return new s.Cartesian3(L.red,L.green,L.blue)}function Ze(){var L;const s=Fe(T.value),u=(L=f==null?void 0:f.config)==null?void 0:L.waterColor;!s||!u||(u.x=s.red,u.y=s.green,u.z=s.blue)}function De(s){return typeof s=="string"&&/^#[0-9a-f]{6}$/i.test(s)}function Fe(s){return De(s)?{red:Number.parseInt(s.slice(1,3),16)/255,green:Number.parseInt(s.slice(3,5),16)/255,blue:Number.parseInt(s.slice(5,7),16)/255}:null}function Te(s,u,L){return Math.max(u,Math.min(L,s))}function Ye(s,u){if(!u)return null;if(s.scene.pickPositionSupported&&typeof s.scene.pickPosition=="function"){const H=s.scene.pickPosition(u);if(H)return H}const L=s.camera.getPickRay(u);return L?s.scene.globe.pick(L,s.scene):null}function Ie(){var H,$,se;if(!(f!=null&&f.config))return;const s=Number(d.value)||0,u=Number(_.value)||0,L=Number(w.value)||0;f.config.customParams&&(f.config.customParams.x=s,f.config.customParams.y=u,f.config.customParams.z=L),f.config.fluidParams&&(f.config.fluidParams.x=.9+L/10*.099,f.config.fluidParams.y=Math.min(1,u/50),f.config.fluidParams.z=s/5e4),Ze(),(se=($=(H=f.viewer)==null?void 0:H.scene)==null?void 0:$.requestRender)==null||se.call($)}function ke(){var $,se,he,fe;if(!(($=f==null?void 0:f.config)!=null&&$.fluidParams))return;const s=Ke(),u=Number(E.value);if(!s||!Number.isFinite(u))return;const L=Te(u,s.minHeight,s.maxHeight);if(L!==u){E.value=L;return}const H=Re(L,s);typeof f.setInitialWaterLevel=="function"?f.setInitialWaterLevel(H):(f.config.fluidParams.w=H,(fe=(he=(se=f.viewer)==null?void 0:se.scene)==null?void 0:he.requestRender)==null||fe.call(he))}function b(s,u){var L,H;if(!C){const $=s.scene;C={shadows:s.shadows,resolutionScale:s.resolutionScale,msaaSamples:$.msaaSamples,depthTestAgainstTerrain:$.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:$.logarithmicDepthBuffer,highDynamicRange:$.highDynamicRange,fogEnabled:(L=$.fog)==null?void 0:L.enabled,showGroundAtmosphere:$.globe.showGroundAtmosphere,skyAtmosphereShow:(H=$.skyAtmosphere)==null?void 0:H.show,enableLighting:$.globe.enableLighting}}s.shadows=!0,s.resolutionScale=1,s.scene.msaaSamples=4,s.scene.globe.depthTestAgainstTerrain=!0,s.scene.logarithmicDepthBuffer=!0,s.scene.highDynamicRange=!0,s.scene.fog&&(s.scene.fog.enabled=!0),s.scene.globe.showGroundAtmosphere=!0,s.scene.skyAtmosphere&&(s.scene.skyAtmosphere.show=!0),s.scene.globe.enableLighting=!0,!M&&r&&(M=r(u),s.scene.postProcessStages.add(M))}function S(s){if(!s||!C)return;const u=s.scene;s.shadows=C.shadows,s.resolutionScale=C.resolutionScale,C.msaaSamples!==void 0&&(u.msaaSamples=C.msaaSamples),u.globe.depthTestAgainstTerrain=C.depthTestAgainstTerrain,u.logarithmicDepthBuffer=C.logarithmicDepthBuffer,u.highDynamicRange=C.highDynamicRange,u.fog&&C.fogEnabled!==void 0&&(u.fog.enabled=C.fogEnabled),u.globe.showGroundAtmosphere=C.showGroundAtmosphere,u.skyAtmosphere&&C.skyAtmosphereShow!==void 0&&(u.skyAtmosphere.show=C.skyAtmosphereShow),u.globe.enableLighting=C.enableLighting,C=null}function z(){V(!1),l.success("水体流体已清除。")}function O(){c&&(c.destroy(),c=null),v.value=!1}function R(){if(f){try{f.destroy()}catch{}f=null,y.value=!1}}function V(s){var L,H,$;const u=(L=i.getViewer)==null?void 0:L.call(i);if(A+=1,O(),R(),p.value=null,o.value=null,E.value=null,P.value=null,U.value=null,u&&M){try{u.scene.postProcessStages.remove(M)}catch{}M=null}s&&u&&S(u),($=(H=u==null?void 0:u.scene)==null?void 0:H.requestRender)==null||$.call(H)}function oe(){V(!0),h("close")}return t({startPickHeightMap:le,clearFluid:z}),(s,u)=>e.headless?ie("",!0):(B(),X("div",Fi,[m("div",Pi,[m("div",{class:"panel-head"},[u[9]||(u[9]=m("span",{class:"panel-title"},"水体流体",-1)),m("button",{class:"panel-close",title:"关闭",onClick:oe}," × ")]),m("div",Ai,[m("button",{class:ve(["action-btn primary",{active:v.value}]),onClick:le},ae(v.value?"等待选点":"捕捉高度图"),3),m("button",{class:"action-btn",disabled:!y.value&&!v.value,onClick:z}," 清除 ",8,Ei)]),W.value?(B(),X("div",Ci,ae(W.value),1)):ie("",!0),m("div",Ri,[m("label",Di,[u[10]||(u[10]=m("span",null,"阈值",-1)),pe(m("input",{"onUpdate:modelValue":u[0]||(u[0]=L=>d.value=L),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Oe,d.value,void 0,{number:!0}]]),pe(m("input",{"onUpdate:modelValue":u[1]||(u[1]=L=>d.value=L),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Oe,d.value,void 0,{number:!0}]])]),m("label",Ii,[u[11]||(u[11]=m("span",null,"混合",-1)),pe(m("input",{"onUpdate:modelValue":u[2]||(u[2]=L=>_.value=L),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Oe,_.value,void 0,{number:!0}]]),pe(m("input",{"onUpdate:modelValue":u[3]||(u[3]=L=>_.value=L),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Oe,_.value,void 0,{number:!0}]])]),m("label",ki,[u[12]||(u[12]=m("span",null,"光强",-1)),pe(m("input",{"onUpdate:modelValue":u[4]||(u[4]=L=>w.value=L),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Oe,w.value,void 0,{number:!0}]]),pe(m("input",{"onUpdate:modelValue":u[5]||(u[5]=L=>w.value=L),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Oe,w.value,void 0,{number:!0}]])]),Y.value?(B(),X("label",Ni,[u[13]||(u[13]=m("span",null,"水位",-1)),pe(m("input",{"onUpdate:modelValue":u[6]||(u[6]=L=>E.value=L),type:"range",min:P.value,max:U.value,step:Z.value},null,8,Oi),[[Oe,E.value,void 0,{number:!0}]]),pe(m("input",{"onUpdate:modelValue":u[7]||(u[7]=L=>E.value=L),class:"number-input",type:"number",min:P.value,max:U.value,step:Z.value},null,8,zi),[[Oe,E.value,void 0,{number:!0}]])])):ie("",!0),m("label",Bi,[u[14]||(u[14]=m("span",null,"水色",-1)),pe(m("input",{"onUpdate:modelValue":u[8]||(u[8]=L=>T.value=L),class:"color-input",type:"color"},null,512),[[Oe,T.value]]),m("span",{class:"color-swatch",style:pn({backgroundColor:T.value})},null,4)])])])]))}},Xi=gt(qi,[["__scopeId","data-v-9ecdafb8"]]),Pt="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Vi=`${Pt}Cesium.js`,Yi=`${Pt}Widgets/widgets.css`;async function ji({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Pt),await Zi(Yi,"cesium-widgets-style"),await Ki(Vi,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到");return pt(t,e),t}function pt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function Ki(e,t){return new Promise((n,i)=>{const h=document.getElementById(t);if(h){if(h.getAttribute("data-loaded")==="true"){n();return}h.addEventListener("load",()=>n(),{once:!0}),h.addEventListener("error",()=>i(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const l=document.createElement("script");l.id=t,l.src=e,l.async=!0,l.onload=()=>{l.setAttribute("data-loaded","true"),n()},l.onerror=()=>i(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(l)})}function Zi(e,t){return new Promise((n,i)=>{if(document.getElementById(t)){n();return}const l=document.createElement("link");l.id=t,l.rel="stylesheet",l.href=e,l.onload=()=>n(),l.onerror=()=>i(new Error(`样式加载失败: ${e}`)),document.head.appendChild(l)})}const Qi="Asia/Shanghai",Ji="UTC+8",ea=new Intl.DateTimeFormat("zh-CN",{timeZone:Qi,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function ta(e,t){var n,i,h,l,d,_,w;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...T)=>ra(e,t,...T),e.animation.viewModel.timeFormatter=(...T)=>ia(e,t,...T)),e.timeline){const T=(...E)=>aa(e,t,...E);e.timeline.makeLabel=T,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=T),(h=(i=e.timeline).updateFromClock)==null||h.call(i),(d=(l=e.timeline).zoomTo)==null||d.call(l,e.clock.startTime,e.clock.stopTime)}(w=(_=e.scene).requestRender)==null||w.call(_)}}function At(e,t,...n){var _;const i=n.find(na)||((_=e==null?void 0:e.clock)==null?void 0:_.currentTime);if(!i)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const h=t.JulianDate.toDate(i),l=ea.formatToParts(h),d=Object.fromEntries(l.filter(({type:w})=>w!=="literal").map(({type:w,value:T})=>[w,T]));return{year:d.year||"0000",month:d.month||"01",day:d.day||"01",hour:d.hour||"00",minute:d.minute||"00",second:d.second||"00"}}function na(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function ra(e,t,...n){const{year:i,month:h,day:l}=At(e,t,...n);return`${i}-${h}-${l}`}function ia(e,t,...n){const{hour:i,minute:h,second:l}=At(e,t,...n);return`${i}:${h}:${l} ${Ji}`}function aa(e,t,...n){const{month:i,day:h,hour:l,minute:d}=At(e,t,...n);return`${i}-${h} ${l}:${d}`}function oa({getViewer:e}){let t=null,n=null;function i(){var _;const d=e==null?void 0:e();if(d&&((_=d._cesiumWidget)!=null&&_._creditContainer&&(d._cesiumWidget._creditContainer.style.display="none"),h(),t=setInterval(()=>{const w=document.querySelector(".cesium-credit-container");w&&w.innerHTML.length>0&&(w.innerHTML="",w.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const w=document.createElement("style");w.id="cesium-credit-override",w.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(w),n=w}}function h(){var w;const d=e==null?void 0:e();if(!d)return;(w=d._cesiumWidget)!=null&&w._creditContainer&&(d._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",d._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(T=>{T.style.cssText="display: none !important; visibility: hidden !important;",T.innerHTML=""}),d.scene&&d.scene.frameState&&d.scene.frameState.creditDisplay&&(d.scene.frameState.creditDisplay.hasCredits=()=>!1,d.scene.frameState.creditDisplay.destroy=()=>{})}function l(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:i,cleanupCreditHider:l}}const sa=500,Mt=48,la=160,jt=48;function ca({getViewer:e}){const t=K(null),n=K([]),i=xe(()=>Number.isFinite(t.value)?String(t.value):"--"),h=xe(()=>ua(n.value));let l=null,d=0,_=St();function w(){var P;const E=(P=e==null?void 0:e())==null?void 0:P.scene;E!=null&&E.preRender&&(T(),t.value=null,n.value=[],d=0,_=St(),l=E.preRender.addEventListener(()=>{d+=1;const U=St(),v=U-_;if(v<sa)return;const y=Math.round(d*1e3/v);t.value=y,n.value=[...n.value.slice(1-Mt),y],d=0,_=U}))}function T(){typeof l=="function"&&(l(),l=null)}return{frameRateDisplay:i,frameRateLinePoints:h,setupFrameRateMonitor:w,cleanupFrameRateMonitor:T}}function St(){return typeof performance<"u"?performance.now():Date.now()}function ua(e){if(!e.length)return"";const t=Math.max(60,...e),n=la/(Mt-1),i=Mt-e.length;return e.map((h,l)=>{const d=(i+l)*n,_=Math.max(0,Math.min(h/t,1)),w=jt-_*jt;return`${d.toFixed(1)},${w.toFixed(1)}`}).join(" ")}const Tt="经度: --, 纬度: --, 海拔: --米";function da({getViewer:e,getCesium:t,onCoordinatePick:n}){let i=null,h=null,l=null;const d=K("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function _(){const v=e==null?void 0:e(),y=t==null?void 0:t();!v||!y||(U(),h=v.scene.canvas,i=new y.ScreenSpaceEventHandler(h),l=()=>{d.value=Tt},h.addEventListener("mouseleave",l),i.setInputAction(p=>{w(p.endPosition,v,y)},y.ScreenSpaceEventType.MOUSE_MOVE),i.setInputAction(p=>{const o=p.endPosition,x=p.startPosition;if(!y.defined(v.terrainProvider))return;const r=v.scene.globe.ellipsoid;if(!v.camera.pickEllipsoid(x,r)){const f=v.camera;f.rotate(y.Cartesian3.UNIT_X,-.002*(o.y-x.y)),f.rotate(y.Cartesian3.UNIT_Y,-.002*(o.x-x.x))}},y.ScreenSpaceEventType.RIGHT_DRAG),i.setInputAction(()=>{},y.ScreenSpaceEventType.RIGHT_DOWN),i.setInputAction(()=>{},y.ScreenSpaceEventType.RIGHT_UP))}function w(v,y,p){const o=T(v,y,p);if(!o){d.value=Tt;return}const x=p.Cartographic.fromCartesian(o);if(!x||!Number.isFinite(x.longitude)||!Number.isFinite(x.latitude)){d.value=Tt;return}const r=p.Math.toDegrees(x.longitude).toFixed(6),c=p.Math.toDegrees(x.latitude).toFixed(6),f=(Number.isFinite(x.height)?x.height:0).toFixed(2);d.value=`经度: ${r}, 纬度: ${c}, 海拔: ${f}米`,typeof n=="function"&&n({lng:Number(r),lat:Number(c),height:Number(f)})}function T(v,y,p){if(!v)return null;const o=y.scene,x=E(v,o,p);if(x)return x;const r=y.camera.getPickRay(v);if(r){const f=o.globe.pick(r,o);if(P(f))return f}const c=y.camera.pickEllipsoid(v,o.globe.ellipsoid);return P(c)?c:null}function E(v,y,p){if(!y.pickPositionSupported||typeof y.pickPosition!="function")return null;const o=typeof y.pick=="function"?y.pick(v):null;if(!p.defined(o))return null;const x=y.pickPosition(v);return P(x)?x:null}function P(v){return!!v&&Number.isFinite(v.x)&&Number.isFinite(v.y)&&Number.isFinite(v.z)}function U(){l&&h&&(h.removeEventListener("mouseleave",l),l=null),h=null,i&&(i.destroy(),i=null)}return{coordinateDisplay:d,setupInteractions:_,cleanupInteractions:U}}function ha(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function fa(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function et(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function ut(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Kt(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:i,Resource:h,HeightmapTerrainData:l,Rectangle:d,TileAvailability:_,CustomHeightmapTerrainProvider:w}=e;function T(v,y,p,o,x,r){const c=v.tileXYToRectangle(p,o,x);return t(d.intersection(c,y,r))}function E(v){const y=[[[0,0,1,0]]],p=new _(v.tilingScheme,19);for(let o=0;o<y.length;o++){const x=y[o];for(let r=0;r<x.length;r++){const c=x[r];p.addAvailableTileRange(o,c[0],c[1],c[2],c[3])}}return p}function P(v,y,p,o,x){const r=new l({buffer:v._transformBuffer(y),width:v._width,height:v._height,childTileMask:v._getChildTileMask(o,x,p),structure:v._terrainDataStructure});return r._skirtHeight=6e3,v.availability.addAvailableTileRange(p,o,x,o,x),r}class U extends w{constructor(y={}){if(super({...y,ellipsoid:i.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(y.url))throw new n("options.url is required.");this._dataType=y.dataType??"int16",this._url=y.url,this._subdomains=y.subdomains,this._token=y.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=E(this)}get availability(){return this._availability}requestTileGeometry(y,p,o,x){if(o>=this._bottomLevel)return Promise.reject(new Error(`Level ${o} is outside supported range.`));if(o<this._topLevel)return Promise.resolve(new l({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(y,p,o),structure:this._terrainDataStructure}));let r=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const f=this._subdomains[(y+p)%this._subdomains.length];r=r.replace("{s}",f)}r=r.replace("{token}",this._token).replace("{x}",y).replace("{y}",p).replace("{z}",o+1);const c=h.fetchArrayBuffer({url:r,request:x});if(c)return c.then(f=>f.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Bn.inflate(f)).then(f=>P(this,f,o,y,p))}getTileDataAvailable(y,p,o){return o<this._bottomLevel}_transformBuffer(y){let p=2;this._dataType==="float"&&(p=4);const o=y;if(o.length!==22500*p)return null;const x=new ArrayBuffer(p),r=new DataView(x),c=this._width,f=this._height,M=new Uint8Array(c*f*4);for(let C=0;C<f;C++)for(let A=0;A<c;A++){const W=Math.floor(149*C/(f-1)),Y=Math.floor(149*A/(c-1)),Z=p*(150*W+Y);let ee;p===4?(r.setInt8(0,o[Z]),r.setInt8(1,o[Z+1]),r.setInt8(2,o[Z+2]),r.setInt8(3,o[Z+3]),ee=r.getFloat32(0,!0)):ee=o[Z]+256*o[Z+1],(ee>1e4||ee<-2e3)&&(ee=0);const te=(ee+1e3)/.001,q=4*(C*c+A);M[q]=te/65536,M[q+1]=(te-256*M[q]*256)/256,M[q+2]=te-256*M[q]*256-256*M[q+1],M[q+3]=255}return M}_getVHeightBuffer(){let y=this._vHeightBuffer;if(!t(y)){y=new Uint8ClampedArray(this._width*this._height*4);for(let p=0;p<this._width*this._height*4;)y[p++]=15,y[p++]=66,y[p++]=64,y[p++]=255;this._vHeightBuffer=y}return y}_getChildTileMask(y,p,o){const x=new d,r=this._tilingScheme,c=this._rectangles,f=r.tileXYToRectangle(y,p,o);let M=0;for(let C=0;C<c.length&&M!==15;C++){const A=c[C];if(A.maxLevel<=o)continue;const W=A.rectangle,Y=d.intersection(W,f,x);t(Y)&&(T(r,W,2*y,2*p,o+1,x)&&(M|=4),T(r,W,2*y+1,2*p,o+1,x)&&(M|=8),T(r,W,2*y,2*p+1,o+1,x)&&(M|=1),T(r,W,2*y+1,2*p+1,o+1,x)&&(M|=2))}return M}}return U}const st=["0","1","2","3","4","5","6","7"],lt="https://t{s}.tianditu.gov.cn/",ma="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",pa=96188,qe="custom-xyz",Zt="cesium_custom_xyz_basemap_url",ga="cesium_tdt_label_layer_visible",Qt="cesium_tdt_boundary_layer_visible",Jt="cesium_tdt_text_label_layer_visible",en="cesium_osm_buildings_visible",tn="cesium_google_photorealistic_3d_tiles_visible",nn=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:qe,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],rn=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function va({getViewer:e,getCesium:t,message:n,backendBaseUrl:i,tiandituToken:h,cesiumIonToken:l}){let d=null,_=null,w=null,T=null,E=0,P=null,U=null,v=0,y=0,p=[];const o=()=>an(h),x=()=>an(l),r=[],c=K([]),f=new Map,M=new Map,C=new Map,A=new Map,W=K("tianditu"),Y=K("tianditu"),Z=K(ha(Zt,"")),ee=et(ga,!0),te=K(et(Qt,ee)),q=K(et(Jt,ee)),le=K(et(en,!1)),ue=K(et(tn,!1)),ye=xe(()=>[...nn.map(a=>a.value!==qe?a:{...a,description:Z.value?Z.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!Z.value}),...c.value]),Me=xe(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:te.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:q.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:le.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:ue.value}]);_e(W,a=>{!(e!=null&&e())||!(t!=null&&t())||u(a)}),_e(Z,a=>{fa(Zt,a)}),_e(Y,async a=>{!(e!=null&&e())||!(t!=null&&t())||await H(a)}),_e(te,a=>{ut(Qt,a),Te()}),_e(q,a=>{ut(Jt,a),Te()}),_e(le,a=>{ut(en,a),S()}),_e(ue,a=>{ut(tn,a),z()});function k(){const a=t==null?void 0:t();if(!a)return[];f.clear(),M.clear();const g=nn.map(I=>{const j=new a.ProviderViewModel({name:I.label,tooltip:ba(I),category:"项目底图",iconUrl:ln(I.value==="google"?"#5ea1ff":I.value===qe?"#f59e0b":"#37d67a",I.value==="google"?"G":I.value===qe?"XY":"TD"),creationFunction:()=>G(I.value)});return f.set(I.value,j),M.set(j,I.value),j}),D=Ce();return c.value=D.map((I,j)=>{const J=String((I==null?void 0:I.name)||`官方底图 ${j+1}`).trim(),me=wa(J,j);return f.set(me,I),M.set(I,me),{value:me,label:`官方 · ${J}`,description:String((I==null?void 0:I.tooltip)||J),source:"official"}}),[...g,...D]}function N(){const a=t==null?void 0:t();return a?(C.clear(),A.clear(),rn.map(g=>{const D=new a.ProviderViewModel({name:g.label,tooltip:g.description||g.label,category:"项目地形",iconUrl:ln(ya(g.value),xa(g.value)),creationFunction:()=>se(g.value)});return C.set(g.value,D),A.set(D,g.value),D})):[]}function F(a=[]){return f.get(W.value)||a[0]}function de(a=[]){return C.get(Y.value)||a[0]}function Ce(){const a=t==null?void 0:t();if(typeof(a==null?void 0:a.createDefaultImageryProviderViewModels)!="function")return[];try{return a.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function G(a){return a==="google"?ze():a===qe?Be():ce()}function ce(){const a=t==null?void 0:t();return[new a.UrlTemplateImageryProvider({url:`${lt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${o()}`,subdomains:st,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})]}function ze(){const a=t==null?void 0:t();return[new a.UrlTemplateImageryProvider({url:`${i}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20})]}function Be(){const a=t==null?void 0:t(),g=sn(Z.value);return g.valid?[new a.UrlTemplateImageryProvider({url:g.url,subdomains:g.subdomains,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(g.message,{closable:!0}),ce())}function Ve(){const a=t==null?void 0:t();return new a.UrlTemplateImageryProvider({url:`${lt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${o()}`,subdomains:st,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:10})}function Re(){const a=t==null?void 0:t();return new a.UrlTemplateImageryProvider({url:`${lt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${o()}`,subdomains:st,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})}function Ke(){var be,Se,He,at,ot;Le();const a=t==null?void 0:t(),g=(Se=(be=e==null?void 0:e())==null?void 0:be.baseLayerPicker)==null?void 0:Se.viewModel;if(!g||!((He=a==null?void 0:a.knockout)!=null&&He.getObservable))return;const D=a.knockout.getObservable(g,"selectedImagery"),I=a.knockout.getObservable(g,"selectedTerrain"),j=[],J=(at=D==null?void 0:D.subscribe)==null?void 0:at.call(D,Je=>{const Ee=M.get(Je);Ee&&(W.value!==Ee&&(W.value=Ee),Fe())}),me=(ot=I==null?void 0:I.subscribe)==null?void 0:ot.call(I,Je=>{const Ee=A.get(Je);Ee&&(Y.value!==Ee&&(Y.value=Ee),$(Ee))});J&&j.push(J),me&&j.push(me),p=j}function Le(){p.forEach(a=>{var g;return(g=a==null?void 0:a.dispose)==null?void 0:g.call(a)}),p=[]}function Ze(){return Fe(),!0}function De(){const a=e==null?void 0:e();if(a!=null&&a.imageryLayers)for(;r.length;){const g=r.pop();try{a.imageryLayers.remove(g,!0)}catch{}}}function Fe(){var a,g,D;Te(),S(),z(),(D=(g=(a=e==null?void 0:e())==null?void 0:a.scene)==null?void 0:g.requestRender)==null||D.call(g)}function Te(){var g,D;const a=e==null?void 0:e();!a||!(t!=null&&t())||(te.value?Ye():ke(),q.value?Ie():b(),(D=(g=a.scene).requestRender)==null||D.call(g))}function Ye(){var g,D,I,j;const a=e==null?void 0:e();if(!(a!=null&&a.imageryLayers)||d)return d&&((D=(g=a==null?void 0:a.imageryLayers)==null?void 0:g.raiseToTop)==null||D.call(g,d)),d;try{return d=a.imageryLayers.addImageryProvider(Ve()),(j=(I=a.imageryLayers).raiseToTop)==null||j.call(I,d),d}catch(J){return n.error("天地图国界线图层加载失败",J),null}}function Ie(){var g,D,I,j;const a=e==null?void 0:e();if(!(a!=null&&a.imageryLayers)||_)return _&&((D=(g=a==null?void 0:a.imageryLayers)==null?void 0:g.raiseToTop)==null||D.call(g,_)),_;try{return _=a.imageryLayers.addImageryProvider(Re()),(j=(I=a.imageryLayers).raiseToTop)==null||j.call(I,_),_}catch(J){return n.error("天地图文字标注图层加载失败",J),null}}function ke(){const a=e==null?void 0:e();if(!(!d||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(d,!0)}catch{}d=null}}function b(){const a=e==null?void 0:e();if(!(!_||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(_,!0)}catch{}_=null}}async function S(){var g,D,I;const a=e==null?void 0:e();!((g=a==null?void 0:a.scene)!=null&&g.primitives)||!(t!=null&&t())||(le.value?await V():oe(),(I=(D=a.scene).requestRender)==null||I.call(D))}async function z(){var g,D,I;const a=e==null?void 0:e();!((g=a==null?void 0:a.scene)!=null&&g.primitives)||!(t!=null&&t())||(ue.value?await O():R(),(I=(D=a.scene).requestRender)==null||I.call(D))}async function O(){var I,j,J;const a=e==null?void 0:e(),g=t==null?void 0:t();if(!((I=a==null?void 0:a.scene)!=null&&I.primitives))return null;if(P)return a.scene.globe.show=!1,P;if(U)return U;if(typeof(g==null?void 0:g.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),ue.value=!1,null;const D=++v;pt(g,x()),U=g.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const me=await U;return D!==v||!ue.value?(on(me),null):(P=a.scene.primitives.add(me),a.scene.globe.show=!1,a.scene.skyAtmosphere.show=!0,(J=(j=a.scene).requestRender)==null||J.call(j),P)}catch(me){return D!==v||(ue.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",me)),null}finally{D===v&&(U=null)}}function R(){var g,D,I;const a=e==null?void 0:e();if(v+=1,U=null,!P||!((g=a==null?void 0:a.scene)!=null&&g.primitives)){(D=a==null?void 0:a.scene)!=null&&D.globe&&(a.scene.globe.show=!0);return}try{a.scene.primitives.remove(P)}catch{}P=null,(I=a==null?void 0:a.scene)!=null&&I.globe&&(a.scene.globe.show=!0)}async function V(){var I,j,J,me;const a=e==null?void 0:e(),g=t==null?void 0:t();if(!((I=a==null?void 0:a.scene)!=null&&I.primitives)||w)return w;if(T)return T;if(typeof((j=g==null?void 0:g.Cesium3DTileset)==null?void 0:j.fromIonAssetId)!="function"&&typeof(g==null?void 0:g.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),le.value=!1,null;const D=++E;pt(g,x()),await s(),T=_a(g,{maximumScreenSpaceError:8});try{const be=await T;return D!==E||!le.value?(on(be),null):(w=a.scene.primitives.add(be),(me=(J=a.scene).requestRender)==null||me.call(J),w)}catch(be){return D!==E||(le.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",be)),null}finally{D===E&&(T=null)}}function oe(){var g,D,I;const a=e==null?void 0:e();if(E+=1,T=null,!(!w||!((g=a==null?void 0:a.scene)!=null&&g.primitives))){try{a.scene.primitives.remove(w)}catch{}w=null,(I=(D=a.scene).requestRender)==null||I.call(D)}}async function s(){if(Y.value==="cesiumWorld")return!0;Y.value="cesiumWorld";const a=await H("cesiumWorld");return a||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),a}function u(a,g={}){var J,me,be;const D=e==null?void 0:e();if(!D||!(t!=null&&t()))return!1;const I=(J=D.baseLayerPicker)==null?void 0:J.viewModel,j=f.get(a);if(I&&j){if(De(),g.forceReload&&I.selectedImagery===j){const Se=f.get("tianditu");Se&&Se!==j&&(I.selectedImagery=Se)}return I.selectedImagery!==j&&(I.selectedImagery=j),Fe(),!0}try{return De(),G(a).forEach(He=>{r.push(D.imageryLayers.addImageryProvider(He))}),Te(),(be=(me=D.scene).requestRender)==null||be.call(me),!0}catch(Se){return n.error("地图源切换失败",Se),!1}}function L(){return H(Y.value)}async function H(a){var be,Se,He,at,ot,Je,Ee,Ct,Rt,Dt,It;const g=e==null?void 0:e(),D=t==null?void 0:t();if(!g||!D)return!1;const I=(be=g.baseLayerPicker)==null?void 0:be.viewModel,j=C.get(a);if(I&&j)return I.selectedTerrain!==j&&(I.selectedTerrain=j),$(a),(He=(Se=g.scene).requestRender)==null||He.call(Se),!0;const J=++y;if(a==="ellipsoid")return g.terrainProvider=new D.EllipsoidTerrainProvider,$(a),(ot=(at=g.scene).requestRender)==null||ot.call(at),!0;if(a==="cesiumWorld")try{const Ue=await he();return J!==y?!1:(g.terrainProvider=Ue,$(a),(Ee=(Je=g.scene).requestRender)==null||Ee.call(Je),!0)}catch(Ue){return J!==y||(g.terrainProvider=new D.EllipsoidTerrainProvider,$("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",Ue)),!1}if(a==="arcgisWorld")try{const Ue=await fe();return J!==y?!1:(g.terrainProvider=Ue,$(a),(Rt=(Ct=g.scene).requestRender)==null||Rt.call(Ct),!0)}catch(Ue){return J!==y||(g.terrainProvider=new D.EllipsoidTerrainProvider,$("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",Ue)),!1}const me=Kt(D);try{return g.terrainProvider=new me({url:`${lt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:st,token:o()}),$(a),(It=(Dt=g.scene).requestRender)==null||It.call(Dt),!0}catch(Ue){return g.terrainProvider=new D.EllipsoidTerrainProvider,$("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",Ue),!1}}function $(a){var D;const g=e==null?void 0:e();(D=g==null?void 0:g.scene)!=null&&D.globe&&(g.scene.globe.depthTestAgainstTerrain=a!=="ellipsoid")}function se(a){const g=t==null?void 0:t();if(a==="ellipsoid")return new g.EllipsoidTerrainProvider;if(a==="cesiumWorld")return he().catch(I=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",I),Ne(a,"ellipsoid"),new g.EllipsoidTerrainProvider));if(a==="arcgisWorld")return fe().catch(I=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",I),Ne(a,"ellipsoid"),new g.EllipsoidTerrainProvider));const D=Kt(g);try{return new D({url:`${lt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:st,token:o()})}catch(I){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",I),new g.EllipsoidTerrainProvider}}async function he(){var D,I;const a=t==null?void 0:t();pt(a,x());const g={requestWaterMask:!1,requestVertexNormals:!0};if(typeof a.createWorldTerrainAsync=="function")return a.createWorldTerrainAsync(g);if(typeof a.createWorldTerrain=="function")return a.createWorldTerrain(g);if(typeof((D=a.CesiumTerrainProvider)==null?void 0:D.fromIonAssetId)=="function")return a.CesiumTerrainProvider.fromIonAssetId(1,g);if((I=a.IonResource)!=null&&I.fromAssetId&&a.CesiumTerrainProvider){const j=await a.IonResource.fromAssetId(1);return new a.CesiumTerrainProvider({url:j,...g})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function fe(){var g;const a=t==null?void 0:t();if(typeof((g=a==null?void 0:a.ArcGISTiledElevationTerrainProvider)==null?void 0:g.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return a.ArcGISTiledElevationTerrainProvider.fromUrl(ma)}function Ne(a,g){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{Y.value===a&&(Y.value=g)},0)}function Ae({overlayId:a,value:g}){if(a==="tdt-boundaries"){te.value=!!g;return}if(a==="tdt-text-labels"){q.value=!!g;return}if(a==="cesium-osm-buildings"){le.value=!!g;return}a==="google-photorealistic-3d-tiles"&&(ue.value=!!g)}function Qe({url:a}){const g=String(a||"").trim(),D=sn(g);if(!D.valid){n.warning(D.message,{closable:!0});return}if(Z.value=g,W.value===qe){u(qe,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}W.value=qe,n.success("已切换到自定义 XYZ 图源")}function it(){De(),ke(),b(),oe(),R(),Le()}return{activeBasemap:W,activeTerrain:Y,customXyzBasemapUrl:Z,basemapOptions:ye,terrainOptions:rn,overlayOptions:Me,createImageryProviderViewModels:k,createTerrainProviderViewModels:N,getSelectedImageryProviderViewModel:F,getSelectedTerrainProviderViewModel:de,bindLayerPickerStateSync:Ke,addBaseImageryLayers:Ze,initCustomTerrain:L,applyBasemap:u,applyTerrain:H,handleOverlayToggle:Ae,handleCustomBasemapSubmit:Qe,cleanupLayers:it}}function ya(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function xa(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function an(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function on(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function _a(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const i=await e.Cesium3DTileset.fromIonAssetId(pa,t);return!i.style&&typeof e.Cesium3DTileStyle=="function"&&(i.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),i}return e.createOsmBuildingsAsync(t)}function ba(e){return e.value!==qe?e.description||e.label:`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`}function sn(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const i=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let h=[];return i?(h=Sa(i[1],i[2]),n=n.replace(i[0],"{s}")):/\{s\}/i.test(n)&&(h=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:h}:Ta(n)?{valid:!0,message:"",url:n,subdomains:h}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:h}}function Sa(e,t){const n=String(e||"").charCodeAt(0),i=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(i))return[];const h=n<=i?1:-1,l=[];for(let d=n;h>0?d<=i:d>=i;d+=h)l.push(String.fromCharCode(d));return l}function Ta(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function wa(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function ln(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),i=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(i)}`}function Ma({getViewer:e,getCesium:t,message:n}){function i(d){const _=e==null?void 0:e(),w=t==null?void 0:t();if(!_||!w)return;const T=typeof d=="number"?d:2;_.camera.flyTo({destination:w.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-w.Math.PI_OVER_TWO,roll:0},duration:T})}function h(){const d=e==null?void 0:e(),_=t==null?void 0:t();!d||!_||d.camera.flyTo({destination:_.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:_.Math.toRadians(0),pitch:_.Math.toRadians(-25),roll:0},duration:3})}async function l(){const d=e==null?void 0:e(),_=t==null?void 0:t();if(!(!d||!_))try{const w=await _.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");d.scene.primitives.add(w),d.flyTo(w,{duration:3,offset:new _.HeadingPitchRange(_.Math.toRadians(0),_.Math.toRadians(-25),w.boundingSphere.radius*2.5)})}catch(w){n.error(`加载模型失败: ${w}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:i,flyToEverest:h,loadCustomTileset:l}}const La="cesium_tool_panel_open";function Fa({fluidPanelRef:e,sceneActions:t={},wind:n={},panelStorageKey:i=La}={}){const h=K(et(i,!0)),l=K({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),d=K({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),_=K({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),w=xe(()=>{var v,y,p,o,x,r;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:l.value.atmosphere||l.value.fog?"启用":"关闭",statusTone:l.value.atmosphere||l.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:l.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:l.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:l.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:l.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(v=n.wind2D)!=null&&v.value?"已加载":"未加载",statusTone:(y=n.wind2D)!=null&&y.value?"success":"neutral",actions:[{id:"load",label:(p=n.wind2D)!=null&&p.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((o=n.wind2D)!=null&&o.value)}],controls:Pa((x=n.windParams)==null?void 0:x.value,!!((r=n.wind2D)!=null&&r.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:_.value.isPicking?"等待选点":_.value.hasFluid?"已创建":"未创建",statusTone:_.value.isPicking?"warning":_.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:_.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:_.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!_.value.hasFluid&&!_.value.isPicking}],controls:Aa(d.value,_.value)}]});_e(h,v=>{ut(i,v)});function T({moduleId:v,actionId:y}){var o,x;(x=(o={scene:{home:()=>{var r;return(r=t.flyToHome)==null?void 0:r.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},fluid:{pick:()=>{var r,c;return(c=(r=e==null?void 0:e.value)==null?void 0:r.startPickHeightMap)==null?void 0:c.call(r)},clear:()=>{var r,c;return(c=(r=e==null?void 0:e.value)==null?void 0:r.clearFluid)==null?void 0:c.call(r)}}}[v])==null?void 0:o[y])==null||x.call(o)}function E({moduleId:v,controlId:y,value:p}){var o,x;if(v==="effects"&&y in l.value){l.value={...l.value,[y]:!!p};return}if(v==="wind"&&y in(((o=n.windParams)==null?void 0:o.value)||{})){(x=n.setWindParam)==null||x.call(n,y,p);return}v==="fluid"&&y in d.value&&(d.value={...d.value,[y]:y==="waterColor"?p:Number(p)})}function P(v){const y=rt(v==null?void 0:v.waterLevel),p=rt(v==null?void 0:v.waterLevelMin),o=rt(v==null?void 0:v.waterLevelMax);_.value={isPicking:!!(v!=null&&v.isPicking),hasFluid:!!(v!=null&&v.hasFluid),selectedText:(v==null?void 0:v.selectedText)||"",waterLevel:y,waterLevelMin:p,waterLevelMax:o},y!==null&&(d.value={...d.value,waterLevel:y})}function U(){var v;(v=n.clearWind2D)==null||v.call(n)}return{toolPanelOpen:h,advancedEffectControls:l,fluidParams:d,fluidState:_,toolModules:w,handleToolAction:T,handleToolControlChange:E,handleFluidStateChange:P,cleanupTools:U}}function Pa(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function Aa(e,t={}){const n=rt(t.waterLevelMin),i=rt(t.waterLevelMax),h=n!==null&&i!==null,l=h?Math.min(n,i):0,d=h?Math.max(n,i):0,_=rt(e.waterLevel),w=h?Ea(_??l,l,d):0,T=h?Math.max((d-l)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:l,max:d,step:T,value:w,displayValue:h?`${Ca(w)} m`:"先捕捉",disabled:!h,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function rt(e){const t=Number(e);return Number.isFinite(t)?t:null}function Ea(e,t,n){return Math.max(t,Math.min(n,e))}function Ca(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const Lt=-90,Et=1,gn=5e7;function Ra({getViewer:e,getCesium:t,onCameraViewSync:n}={}){const i=Ln(),h=Fn();let l=null;function d(p){return Gn(p,i.query)}function _(){const p=String(d(Ot)||"").trim(),o=tt(d("lng")),x=tt(d("lat")),r=Da(d("z")),c=Un(p);if(c&&o!==null&&x!==null&&r!==null){const M={lng:o,lat:x,height:r,...c};if(cn(M))return M}const f=Wn(p);return cn(f)?f:o===null||x===null||r===null||o<-180||o>180||x<-90||x>90?null:{lng:o,lat:x,height:r,heading:tt(d("heading"))??0,pitch:tt(d("pitch"))??Lt,roll:tt(d("roll"))??0}}function w({duration:p=0}={}){const o=e==null?void 0:e(),x=t==null?void 0:t(),r=_();if(!(o!=null&&o.camera)||!x||!r)return!1;const c=x.Cartesian3.fromDegrees(r.lng,r.lat,r.height),f={heading:wt(x,r.heading??0),pitch:wt(x,Ia(r.pitch??Lt)),roll:wt(x,r.roll??0)};return Number(p)>0?(o.camera.flyTo({destination:c,orientation:f,duration:Number(p)}),!0):(o.camera.setView({destination:c,orientation:f}),!0)}function T({initialSync:p=!1}={}){const o=U();!(o!=null&&o.moveEnd)||l||(l=o.moveEnd.addEventListener(()=>{P()}),p&&P())}function E(){typeof l=="function"&&l(),l=null}function P(){const p=t==null?void 0:t(),o=U();if(!p||!(o!=null&&o.position))return;const x=p.Cartographic.fromCartesian(o.position);if(!x)return;const r=p.Math.toDegrees(x.longitude),c=p.Math.toDegrees(x.latitude),f=Number(x.height),M=p.Math.toDegrees(Number(o.heading)||0),C=p.Math.toDegrees(Number(o.pitch)||0),A=p.Math.toDegrees(Number(o.roll)||0);if(!Number.isFinite(r)||!Number.isFinite(c)||!Number.isFinite(f))return;const W=Math.max(Et,f),Y=Hn({heading:M,pitch:C,roll:A});if(!Y||Y==="0")return;const Z={view:Nt,camera:{lng:r,lat:c,height:W,heading:M,pitch:C,roll:A}};y({view:Nt,[Ot]:Y,lng:un(r,6),lat:un(c,6),z:ka(W)}),n==null||n(Z)}function U(){var o;const p=e==null?void 0:e();return(p==null?void 0:p.camera)||((o=p==null?void 0:p.scene)==null?void 0:o.camera)||null}function v(p,o){const x=Object.keys(p).filter(c=>p[c]!==void 0&&p[c]!==null&&p[c]!==""),r=Object.keys(o).filter(c=>o[c]!==void 0&&o[c]!==null&&o[c]!=="");return x.length!==r.length?!1:r.every(c=>String(p[c]??"")===String(o[c]??""))}function y(p){const o={...qt(i.query),...p};xn.forEach(r=>{r in p||delete o[r]}),Object.keys(o).forEach(r=>{const c=o[r];c==null||c===""?delete o[r]:o[r]=String(c)});const x=qt(i.query);v(x,o)||h.replace({path:i.path||"/home",query:o}).catch(()=>{})}return{restoreCameraFromUrl:w,bindCameraViewSync:T,cleanupCameraViewSync:E}}function tt(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Da(e){const t=tt(e);return t===null||t<Et||t>gn?null:t}function cn(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),i=Number(e.height),h=Number(e.heading),l=Number(e.pitch),d=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(i)&&i>=Et&&i<=gn&&Number.isFinite(h)&&Number.isFinite(l)&&l>=-90&&l<=90&&Number.isFinite(d)}function Ia(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):Lt}function un(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function ka(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function wt(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const ge={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Na=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Oa=new Float32Array([0,0,1,0,1,1,0,1]),za=new Uint16Array([0,1,2,0,2,3]);function je(e,t,n){return Math.max(t,Math.min(n,e))}function ne(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Ba(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),i=Math.min(2048,n),h=Math.max(1,Math.floor(e)),l=Math.sqrt(h),d=Math.log2(l),_=Number.isFinite(d)?Math.round(d):4;let w=Math.pow(2,_);return w=je(w,16,i),w}function Ha(e){const t=e*e,n=new Float32Array(t*4);for(let i=0;i<t;i+=1){const h=i*4;n[h]=Math.random(),n[h+1]=Math.random(),n[h+2]=Math.random(),n[h+3]=Math.random()}return n}function Ua(e){return new Float32Array(e*e*4)}function Wa(e,t,n,i,h){const l=t.createTexture();if(!l)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,l),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,i,0,t.RGBA,t.FLOAT,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let d=!1;return{_context:e,_texture:l,_target:t.TEXTURE_2D,_width:n,_height:i,destroy(){d||(t.deleteTexture(l),d=!0)}}}class Ga{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const i={...ge,...n};this.speedFactor=ne(i.speedFactor,ge.speedFactor),this.cullSpeedMin=ne(i.cullSpeedMin,ge.cullSpeedMin),this.cullSpeedMax=ne(i.cullSpeedMax,ge.cullSpeedMax),this.windSpeedMin=ne(i.windSpeedMin,ge.windSpeedMin),this.windSpeedMax=ne(i.windSpeedMax,ge.windSpeedMax),this.arrowLength=ne(i.arrowLength,ge.arrowLength),this.trailLength=ne(i.trailLength,ge.trailLength),this.decaySpeed=ne(i.decaySpeed,ge.decaySpeed),this.alphaFactor=ne(i.alphaFactor,ge.alphaFactor),this.maxWindSpeed=ne(i.maxWindSpeed,ge.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=ne(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=ne(t.longitude,NaN),i=ne(t.latitude,NaN),h=Array.isArray(t.altitude)?t.altitude:[],l=Array.isArray(t.sizeMesh)?t.sizeMesh:[],d=Array.isArray(t.count)?t.count:[],_=Array.isArray(t.hspeed)?t.hspeed:[],w=Array.isArray(t.hdir)?t.hdir:[],T=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(i))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const E=h.length;if(E<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(l.length!==E||d.length!==E)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const P=d.map(A=>Math.max(1,Math.floor(ne(A,1)))),U=l.map(A=>Math.max(1,ne(A,1))),v=h.map(A=>ne(A,0)),y=P.reduce((A,W)=>A+W*W,0);if(_.length<y||w.length<y||T.length<y)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=E,this.visibleLayerMin=0,this.visibleLayerMax=E-1,this._altitudes=v.slice(),this._maxNx=Math.max(...P),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*E;const p=new Float32Array(this._atlasWidth*this._atlasHeight*4);let o=0;for(let A=0;A<E;A+=1){const W=P[A],Y=W;for(let Z=0;Z<Y;Z+=1)for(let ee=0;ee<W;ee+=1){const te=o+Z*W+ee,q=((A*this._maxNy+Z)*this._atlasWidth+ee)*4,le=Number(_[te]),ue=Number(w[te]),ye=Number(T[te]);if(!(Number.isFinite(le)&&Number.isFinite(ue))){p[q]=0,p[q+1]=0,p[q+2]=0,p[q+3]=0;continue}const k=ue*Math.PI/180;p[q]=le*Math.sin(k),p[q+1]=le*Math.cos(k),p[q+2]=Number.isFinite(ye)?ye:0,p[q+3]=1}o+=W*Y}this._createOrReplaceWindAtlasTexture(p);const x=Math.max(...U),r=this._maxNx*x,c=r/2/111320,f=i*Math.PI/180,M=Math.max(1e-6,Math.abs(Math.cos(f))),C=r/2/(111320*M);this._bounds={minLon:n-C,maxLon:n+C,minLat:i-c,maxLat:i+c,minHeight:Math.min(...v),maxHeight:Math.max(...v)},this._dataPointCount=y,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(ne(t,1))),i=Ba(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&i===this._particleTextureSize||(this._particleTextureSize=i,this._particleCount=i*i,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=je(ne(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const i=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(i)}setBounds(t,n,i,h){const l=ne(t,NaN),d=ne(n,NaN),_=ne(i,NaN),w=ne(h,NaN);if(!Number.isFinite(l)||!Number.isFinite(d)||!Number.isFinite(_)||!Number.isFinite(w))return;const T=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};T.minLon=Math.min(l,d),T.maxLon=Math.max(l,d),T.minLat=Math.min(_,w),T.maxLat=Math.max(_,w),this._bounds=T,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const h=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[h],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=h,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Wa(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,i=Ha(n),h=Ua(n);for(let l=0;l<2;l+=1){this._particlePositionTextures[l]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:i},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[l]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:h},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[l]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[l],this._velocityTextures[l]],destroyAttachments:!1});const d=this._framebuffers[l]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,d),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:Na,usage:t.BufferUsage.STATIC_DRAW}),i=t.Buffer.createVertexBuffer({context:this._context,typedArray:Oa,usage:t.BufferUsage.STATIC_DRAW}),h=t.Buffer.createIndexBuffer({context:this._context,typedArray:za,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:i,componentsPerAttribute:2}],indexBuffer:h})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let i=0;i<n.length;i+=1)n[i]=i;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._updateProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:i,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:i,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=je(Math.floor(ne(this.visibleLayerMin,0)),0,this._layerCount-1),n=je(Math.floor(ne(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const i=Math.max(1e-4,ne(this.maxWindSpeed,ge.maxWindSpeed)),h=je(ne(t,0)/i,0,1),l=je(ne(n,i)/i,0,1);return{min:Math.min(h,l),max:Math.max(h,l)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>ne(this.speedFactor,ge.speedFactor),maxWindSpeed:()=>Math.max(1e-4,ne(this.maxWindSpeed,ge.maxWindSpeed)),decaySpeed:()=>je(ne(this.decaySpeed,ge.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>ne(this.arrowLength,ge.arrowLength),trailLength:()=>ne(this.trailLength,ge.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>je(ne(this.alphaFactor,ge.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function $a({getViewer:e,getCesium:t,message:n}){const i=K(null),h=K({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function l(){var E,P;const T=e==null?void 0:e();if(i.value){try{(P=(E=T==null?void 0:T.scene)==null?void 0:E.primitives)==null||P.remove(i.value)}catch{}i.value.destroy(),i.value=null}}function d(){const T=e==null?void 0:e(),E=t==null?void 0:t();if(!T||!E){n.error("Cesium 尚未初始化");return}l();const P=qa(E);i.value=new Ga(T,{maxWindSpeed:20,cesium:E,speedFactor:h.value.speedFactor,arrowLength:h.value.arrowLength,trailLength:h.value.trailLength,alphaFactor:h.value.alphaFactor}),i.value.loadData(P),T.scene.primitives.add(i.value),i.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function _(){i.value&&(i.value.speedFactor=h.value.speedFactor,i.value.arrowLength=h.value.arrowLength,i.value.trailLength=h.value.trailLength,i.value.alphaFactor=h.value.alphaFactor)}function w(T,E){return T in h.value?(h.value={...h.value,[T]:Number(E)},_(),!0):!1}return{wind2D:i,windParams:h,clearWind2D:l,loadSimulatedWind:d,setWindParam:w}}function qa(e){const h=[0,2e3,5e3,1e4,15e3],l=[3e4,3e4,25e3,25e3,2e4],d=[30,30,25,25,20],_=d.reduce((U,v)=>U+v*v,0),w=new Array(_),T=new Array(_),E=new Array(_);let P=0;for(let U=0;U<5;U++){const v=d[U],y=d[U],p=l[U];for(let o=0;o<y;o++)for(let x=0;x<v;x++){const r=P+o*v+x,c=(x-v/2)*(p/111320),f=(o-y/2)*(p/111320/Math.cos(e.Math.toRadians(35))),C=Math.atan2(f,c)+Math.PI/2+.2*Math.sin(x*.5)*Math.cos(o*.5);T[r]=e.Math.toDegrees(C)%360;const A=Math.sqrt(c*c+f*f),Y=Math.max(0,1-A/15);w[r]=(5+U*2)*Y+2*Math.random(),E[r]=.5*Math.sin(x*.3)*Math.cos(o*.3)}P+=v*y}return{longitude:104,latitude:35,altitude:h,sizeMesh:l,count:d,hspeed:w,hdir:T,vspeed:E}}const Xa={key:3,class:"fps-chart-panel","aria-label":"实时帧率折线图"},Va={class:"fps-chart-head"},Ya={class:"fps-chart",viewBox:"0 0 160 48",preserveAspectRatio:"none","aria-hidden":"true"},ja=["points"],Ka={class:"map-controls-group"},Za={class:"mouse-position-content"},Qa={__name:"CesiumContainer",emits:["view-sync"],setup(e,{emit:t}){let n=null,i=null,h=!1;const l=Ft(),d=t,_=K(!1),w=K(null),T=K(Sn()),E=()=>i,P=()=>n||window.Cesium,U=()=>T.value.tiandituTk,v=()=>T.value.cesiumIonToken,y=va({getViewer:E,getCesium:P,message:l,backendBaseUrl:bn,tiandituToken:U,cesiumIonToken:v}),{activeBasemap:p,activeTerrain:o,customXyzBasemapUrl:x,basemapOptions:r,terrainOptions:c,overlayOptions:f,createImageryProviderViewModels:M,createTerrainProviderViewModels:C,getSelectedImageryProviderViewModel:A,getSelectedTerrainProviderViewModel:W,bindLayerPickerStateSync:Y,addBaseImageryLayers:Z,initCustomTerrain:ee,handleOverlayToggle:te,handleCustomBasemapSubmit:q,cleanupLayers:le}=y,{coordinateDisplay:ue,setupInteractions:ye,cleanupInteractions:Me}=da({getViewer:E,getCesium:P}),{frameRateDisplay:k,frameRateLinePoints:N,setupFrameRateMonitor:F,cleanupFrameRateMonitor:de}=ca({getViewer:E}),{installCreditHider:Ce,cleanupCreditHider:G}=oa({getViewer:E}),{restoreCameraFromUrl:ce,bindCameraViewSync:ze,cleanupCameraViewSync:Be}=Ra({getViewer:E,getCesium:P,onCameraViewSync:O=>d("view-sync",O)}),Ve=Ma({getViewer:E,getCesium:P,message:l}),{flyToHome:Re}=Ve,Ke=$a({getViewer:E,getCesium:P,message:l}),{toolPanelOpen:Le,advancedEffectControls:Ze,fluidParams:De,toolModules:Fe,handleToolAction:Te,handleToolControlChange:Ye,handleFluidStateChange:Ie,cleanupTools:ke}=Fa({fluidPanelRef:w,sceneActions:Ve,wind:Ke});async function b(){h=!1,dn("正在初始化 3D 场景...");try{let O=0,R=1;for(;O<R;)try{if(T.value=await _n({silent:!1,force:O>0}),R=Math.max(R,Array.isArray(T.value.tiandituTokens)?T.value.tiandituTokens.length:1,Array.isArray(T.value.cesiumIonTokens)?T.value.cesiumIonTokens.length:1,1),n=await ji({ionToken:v()}),h||!n||!document.getElementById("cesiumContainer"))return;z(),ye(),F();const V=Z(),oe=await ee();if(h){S();return}if(_.value=!0,ze({initialSync:!1}),V&&oe){l.success("天地图基础影像与地形加载成功。");return}const s=V?{switched:!1}:vt("tianditu_tk"),u=oe?{switched:!1}:vt("cesium_ion_token");if(!(s.switched||u.switched)){l.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}T.value=u.switched?u.tokens:s.tokens,S(),O+=1,l.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(V){const oe=vt("cesium_ion_token");if(!oe.switched)throw V;T.value=oe.tokens,S(),O+=1,l.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}l.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(O){l.error("Cesium 运行时加载失败",O),l.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{hn()}}function S(){if(_.value=!1,Be(),Me(),de(),le(),G(),!!i){try{i.destroy()}catch{}i=null}}function z(){var oe;const O=typeof n.Map=="function"?n.Map:n.Viewer,R=M(),V=C();i=new O("cesiumContainer",{baseLayerPicker:!0,geocoder:((oe=n.IonGeocodeProviderType)==null?void 0:oe.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:R,selectedImageryProviderViewModel:A(R),terrainProviderViewModels:V,selectedTerrainProviderViewModel:W(V),shouldAnimate:!0}),i.scene.globe.terrainExaggeration=1,i.scene.globe.terrainExaggerationRelativeHeight=0,ta(i,n),$n(i),Ce(),Y(),ce({duration:0})||Re(0)}return fn(()=>{b()}),mn(()=>{if(h=!0,_.value=!1,Be(),Me(),de(),ke(),le(),G(),i){try{i.destroy()}catch{}i=null}}),(O,R)=>(B(),X(Pe,null,[R[10]||(R[10]=m("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),_.value?(B(),Xe(nt(cr),{key:0,headless:"","get-viewer":E,"get-cesium":P,controls:Q(Ze)},null,8,["controls"])):ie("",!0),_.value?(B(),Xe(nt(Xi),{key:1,ref_key:"fluidPanelRef",ref:w,headless:"","get-viewer":E,"get-cesium":P,params:Q(De),onStateChange:Q(Ie)},null,40,["params","onStateChange"])):ie("",!0),_.value?(B(),Xe(Mi,{key:2,open:Q(Le),"onUpdate:open":R[0]||(R[0]=V=>yt(Le)?Le.value=V:null),"active-basemap":Q(p),"onUpdate:activeBasemap":R[1]||(R[1]=V=>yt(p)?p.value=V:null),"active-terrain":Q(o),"onUpdate:activeTerrain":R[2]||(R[2]=V=>yt(o)?o.value=V:null),"basemap-options":Q(r),"terrain-options":Q(c),"overlay-options":Q(f),"custom-basemap-url":Q(x),modules:Q(Fe),onModuleAction:Q(Te),onControlChange:Q(Ye),onOverlayToggle:Q(te),onCustomBasemapSubmit:Q(q)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):ie("",!0),_.value?(B(),X("section",Xa,[m("div",Va,[R[4]||(R[4]=m("span",null,"FPS",-1)),m("strong",null,ae(Q(k)),1)]),(B(),X("svg",Ya,[R[5]||(R[5]=m("line",{class:"fps-grid-line",x1:"0",y1:"12",x2:"160",y2:"12"},null,-1)),R[6]||(R[6]=m("line",{class:"fps-grid-line",x1:"0",y1:"24",x2:"160",y2:"24"},null,-1)),R[7]||(R[7]=m("line",{class:"fps-grid-line",x1:"0",y1:"36",x2:"160",y2:"36"},null,-1)),Q(N)?(B(),X("polyline",{key:0,class:"fps-line",points:Q(N)},null,8,ja)):ie("",!0)]))])):ie("",!0),m("div",Ka,[m("div",Za,ae(Q(ue)),1),R[9]||(R[9]=m("div",{class:"divider"},null,-1)),m("button",{class:"home-btn",title:"回到初始位置",onClick:R[3]||(R[3]=(...V)=>Q(Re)&&Q(Re)(...V))},[...R[8]||(R[8]=[m("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[m("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},ho=gt(Qa,[["__scopeId","data-v-4f641d9c"]]);export{ho as default};
