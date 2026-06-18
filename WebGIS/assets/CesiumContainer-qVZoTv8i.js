const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-hkrlvPw0.js","./vendor-echarts-all-DHBw4pVz.js","./vendor-libs-RyoEAG51.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var vn=Object.defineProperty;var yn=(e,t,n)=>t in e?vn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var It=(e,t,n)=>yn(e,typeof t!="symbol"?t+"":t,n);import{_ as gt,h as Ft,R as dn,Q as hn,e as Nt,f as Ot,T as xn,v as _n,y as vt,P as bn,x as Sn}from"./index-C5BlNMFC.js";import{_ as Tn}from"./vendor-runtime-Dp1pzeXC.js";import{C as fn,o as mn,w as _e,d as O,c as q,f as m,t as se,G as pe,W as dt,X as ct,g as ie,r as Y,P as wn,a as Me,u as Z,F as Fe,e as We,n as ve,x as Xe,S as nt,I as zt,i as Bt,H as Ne,O as pn,q as xe,v as Mn,B as Ln,A as Fn,a4 as yt}from"./vendor-vue-CmuMwCC6.js";import{af as xt,ag as _t,ah as Pn,X as An,e as Ht,ai as ht,ac as Ut,aj as En,ak as Cn,al as Wt,H as Gt,T as $t,a2 as Rn,am as Dn,an as kn,ao as In,ap as Nn,q as On,o as zn,aq as Bn}from"./vendor-libs-RyoEAG51.js";import{F as Hn,G as Un,H as Wn,I as qt,J as Gn}from"./HomeView-DPuT8MEC.js";import"./vendor-ol-all-ZNWqDNbP.js";import"./vendor-geotiff-B6D64MFK.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BzG5Hdu9.js";import"./vendor-axios-Bdz_Fv8M.js";function $n(e){var i;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;!t||!n||(n.enableLighting=!0,t.sun&&(t.sun.show=!0),t.moon&&(t.moon.show=!0),t.skyBox&&(t.skyBox.show=!0),(i=t.requestRender)==null||i.call(t))}function qn(e,t){var u;const n=e==null?void 0:e.scene,i=n==null?void 0:n.globe;if(!n||!i)return;Yn(n,t),jn(n),i.enableLighting=!0,i.showGroundAtmosphere=!0,re(i,"dynamicAtmosphereLighting",!0),re(i,"dynamicAtmosphereLightingFromSun",!0),re(i,"atmosphereLightIntensity",11.5),re(i,"atmosphereHueShift",-.015),re(i,"atmosphereSaturationShift",.08),re(i,"atmosphereBrightnessShift",.02),re(i,"lightingFadeInDistance",15e6),re(i,"lightingFadeOutDistance",22e6),re(i,"nightFadeInDistance",9e6),re(i,"nightFadeOutDistance",16e6),ft(t,i,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ft(t,i,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),re(i,"atmosphereRayleighScaleHeight",1e4),re(i,"atmosphereMieScaleHeight",3200),re(i,"atmosphereMieAnisotropy",.92),!n.skyAtmosphere&&(t!=null&&t.SkyAtmosphere)&&(n.skyAtmosphere=Zn(t));const h=n.skyAtmosphere;h&&(h.show=!0,re(h,"perFragmentAtmosphere",!0),re(h,"dynamicAtmosphereLighting",!0),re(h,"dynamicAtmosphereLightingFromSun",!0),re(h,"hueShift",-.025),re(h,"saturationShift",.08),re(h,"brightnessShift",.03),re(h,"atmosphereLightIntensity",12),ft(t,h,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),ft(t,h,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),re(h,"atmosphereRayleighScaleHeight",1e4),re(h,"atmosphereMieScaleHeight",3200),re(h,"atmosphereMieAnisotropy",.92)),n.sun&&(n.sun.show=!0),n.moon&&(n.moon.show=!0),n.skyBox&&(n.skyBox.show=!0),"sunBloom"in n&&(n.sunBloom=!0),"highDynamicRange"in n&&(n.highDynamicRange=!0),Kn(n),(u=n.requestRender)==null||u.call(n)}function Xn(e){var h;const t=e==null?void 0:e.scene,n=t==null?void 0:t.globe;if(!t||!n)return null;const i=(h=t.postProcessStages)==null?void 0:h.bloom;return{scene:Ge(t,["highDynamicRange","sunBloom","light"]),fog:Ge(t.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:Ge(n,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!t.skyAtmosphere,sky:Ge(t.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:Ge(t.sun,["show"]),moon:Ge(t.moon,["show"]),skyBox:Ge(t.skyBox,["show"]),bloom:{props:Ge(i,["enabled"]),uniforms:Ge(i==null?void 0:i.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Vn(e,t,n){var d,x,M,T;if(!n)return;const i=e==null?void 0:e.scene,h=i==null?void 0:i.globe;if(!i||!h)return;$e(i,n.scene,t),$e(i.fog,n.fog,t),$e(h,n.globe,t),$e(i.sun,n.sun,t),$e(i.moon,n.moon,t),$e(i.skyBox,n.skyBox,t),i.skyAtmosphere&&($e(i.skyAtmosphere,n.sky,t),n.skyAtmosphereExisted||(i.skyAtmosphere.show=!1));const u=(d=i.postProcessStages)==null?void 0:d.bloom;$e(u,(x=n.bloom)==null?void 0:x.props,t),$e(u==null?void 0:u.uniforms,(M=n.bloom)==null?void 0:M.uniforms,t),(T=i.requestRender)==null||T.call(i)}function Yn(e,t){var n;if(t!=null&&t.SunLight)try{e.light=new t.SunLight({color:(n=t.Color)==null?void 0:n.WHITE,intensity:2.35})}catch{e.light=new t.SunLight}re(e.light,"intensity",2.35)}function jn(e){const t=e==null?void 0:e.fog;t&&(t.enabled=!0,re(t,"density",12e-5),re(t,"minimumBrightness",.035),re(t,"screenSpaceErrorFactor",2),re(t,"visualDensityScalar",.16))}function Kn(e){var n;const t=(n=e==null?void 0:e.postProcessStages)==null?void 0:n.bloom;t&&(t.enabled=!0,t.uniforms&&(re(t.uniforms,"contrast",128),re(t.uniforms,"brightness",-.18),re(t.uniforms,"delta",1),re(t.uniforms,"sigma",2.5),re(t.uniforms,"stepSize",4.2)))}function Zn(e){var t;try{return new e.SkyAtmosphere((t=e.Ellipsoid)==null?void 0:t.WGS84)}catch{return new e.SkyAtmosphere}}function re(e,t,n){e&&t in e&&(e[t]=n)}function ft(e,t,n,i,h,u){!t||!(n in t)||!(e!=null&&e.Cartesian3)||(t[n]=new e.Cartesian3(i,h,u))}function Ge(e,t){return e?t.reduce((n,i)=>(i in e&&(n[i]=Qn(e[i])),n),{}):{}}function $e(e,t={},n){!e||!t||Object.entries(t).forEach(([i,h])=>{i in e&&(e[i]=Jn(h,n))})}function Qn(e){return e&&typeof e=="object"&&"x"in e&&"y"in e&&"z"in e?{__type:"Cartesian3",x:e.x,y:e.y,z:e.z}:e}function Jn(e,t){return(e==null?void 0:e.__type)==="Cartesian3"&&(t!=null&&t.Cartesian3)?new t.Cartesian3(e.x,e.y,e.z):e}const er={key:0,class:"advanced-effects-root"},tr={class:"effects-panel"},nr={class:"panel-head"},rr={class:"effect-switches"},ir={class:"switch-item"},ar={class:"switch-item"},or={class:"switch-item"},sr={class:"switch-item"},lr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(e){const t=e,n=Ft(),i=Y(null),h=Y(!1),u=Y(!1),d=Y(!1),x=Y(!1),M=Y(!1);let T=null,E=null,A=null,H=!1,p=null,y=null,v=null,l=null,_=null,r=null,c=null,f=null,L=!1,C=null,P=0,U=0,V=typeof performance<"u"?performance.now():Date.now();function K(){return v||(v=Tn(()=>import("./cesiumFxRuntime-hkrlvPw0.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(b=>{var z;const S=(z=b==null?void 0:b.getCesiumFxEchartsRuntime)==null?void 0:z.call(b);if(!S)throw new Error("Cinematic FX 图表运行时加载失败");return y=S,S}).catch(b=>{throw v=null,b}),v)}async function J(){return y||K()}const te={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},$={hdr:null,bloom:null,sky:null};fn(()=>{ue()}),mn(()=>{Re()}),_e(()=>t.controls,b=>{le(b||{})},{deep:!0,immediate:!0});function le(b){Object.prototype.hasOwnProperty.call(b,"fog")&&(h.value=!!b.fog),Object.prototype.hasOwnProperty.call(b,"hbao")&&(u.value=!!b.hbao),Object.prototype.hasOwnProperty.call(b,"tiltShift")&&(d.value=!!b.tiltShift),Object.prototype.hasOwnProperty.call(b,"atmosphere")&&(x.value=!!b.atmosphere)}function ue(){let b=0;l=window.setInterval(async()=>{var G,X;b+=1;const S=(G=t.getViewer)==null?void 0:G.call(t),z=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(S&&z){clearInterval(l),l=null;try{ye(S),k(S),Le(S,z),W(S,z),n.success("高级视觉效果已启用。")}catch(ae){n.error("高级视觉效果初始化失败",ae),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}b>=150&&(clearInterval(l),l=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function ye(b){var z,G,X,ae,ee,o;const S=b==null?void 0:b.scene;if(S){if(typeof S.highDynamicRange=="boolean"&&($.hdr=S.highDynamicRange),(z=S.postProcessStages)!=null&&z.bloom){const s=S.postProcessStages.bloom;$.bloom={enabled:!!s.enabled,contrast:(G=s.uniforms)==null?void 0:G.contrast,brightness:(X=s.uniforms)==null?void 0:X.brightness,delta:(ae=s.uniforms)==null?void 0:ae.delta,sigma:(ee=s.uniforms)==null?void 0:ee.sigma,stepSize:(o=s.uniforms)==null?void 0:o.stepSize}}S.skyAtmosphere&&($.sky={hueShift:S.skyAtmosphere.hueShift,saturationShift:S.skyAtmosphere.saturationShift,brightnessShift:S.skyAtmosphere.brightnessShift})}}function Le(b,S){var G;!((G=b==null?void 0:b.scene)!=null&&G.postProcessStages)||!(S!=null&&S.PostProcessStage)||(F(b,S),me(b,S),Pe(b,S),x.value?ce(b,S,1200):Oe(b))}function k(b){var z;const S=b==null?void 0:b.scene;(z=S==null?void 0:S.renderError)!=null&&z.addEventListener&&(S.rethrowRenderErrors=!1,f=S.renderError.addEventListener((G,X)=>{n.error("Cesium 渲染异常，已触发降级保护",X),I(),L||(L=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function I(){h.value=!1,d.value=!1,u.value=!1,x.value=!1,T&&(T.enabled=!1),E&&(E.enabled=!1),A&&(A.enabled=!1)}function F(b,S){T||(T=new S.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new S.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),b.scene.postProcessStages.add(T),T.enabled=h.value)}function me(b,S){var G,X;const z=(G=b==null?void 0:b.scene)==null?void 0:G.postProcessStages;z&&(z.ambientOcclusion?(A=z.ambientOcclusion,H=!1):(X=S==null?void 0:S.PostProcessStageLibrary)!=null&&X.createAmbientOcclusionStage&&(A=S.PostProcessStageLibrary.createAmbientOcclusionStage(),z.add(A),H=!0),A&&(A.enabled=u.value,A.uniforms&&("intensity"in A.uniforms&&(A.uniforms.intensity=4.2),"bias"in A.uniforms&&(A.uniforms.bias=.08),"lengthCap"in A.uniforms&&(A.uniforms.lengthCap=.35),"stepSize"in A.uniforms&&(A.uniforms.stepSize=1.8),"frustumLength"in A.uniforms&&(A.uniforms.frustumLength=1200))))}function Pe(b,S){E||(E=new S.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),b.scene.postProcessStages.add(E),E.enabled=!1)}function W(b,S){const z=b==null?void 0:b.scene;z&&(c=z.preRender.addEventListener(()=>{var ee;const G=Te(b),X=Number(((ee=b==null?void 0:b.camera)==null?void 0:ee.pitch)??-1.2);P+=1;const ae=typeof performance<"u"?performance.now():Date.now();if(ae-V>=1e3&&(U=Math.round(P*1e3/(ae-V)),P=0,V=ae),T&&(T.enabled=h.value,T.uniforms.cameraHeightFactor=we(G,150,12e3),T.uniforms.fogDensity=55e-5+(1-T.uniforms.cameraHeightFactor)*.00125),A&&(A.enabled=u.value),E){const o=X>-.62,s=o?je((X+.62)/.5):0;E.enabled=d.value&&o,E.uniforms.blurStrength=s}x.value?ce(b,S,G):Oe(b)}))}function ce(b,S,z){var o;const G=b==null?void 0:b.scene;if(!G)return;C||(C=Xn(b)),qn(b,S),typeof G.highDynamicRange=="boolean"&&(G.highDynamicRange=!0);const X=(o=G.postProcessStages)==null?void 0:o.bloom;X&&(X.enabled=!0,X.uniforms&&("contrast"in X.uniforms&&(X.uniforms.contrast=149),"brightness"in X.uniforms&&(X.uniforms.brightness=-.12),"delta"in X.uniforms&&(X.uniforms.delta=1),"sigma"in X.uniforms&&(X.uniforms.sigma=3.25),"stepSize"in X.uniforms&&(X.uniforms.stepSize=5)));const ae=G.skyAtmosphere;if(!ae)return;const ee=we(z,500,12e4);ae.hueShift=-.035+ee*.035,ae.saturationShift=-.14+ee*.09,ae.brightnessShift=.03+(1-ee)*.08}function Oe(b){var X,ae;const S=b==null?void 0:b.scene;if(!S)return;const z=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(C){Vn(b,z,C),C=null;return}typeof S.highDynamicRange=="boolean"&&$.hdr!==null&&(S.highDynamicRange=$.hdr);const G=(ae=S.postProcessStages)==null?void 0:ae.bloom;G&&$.bloom&&(G.enabled=$.bloom.enabled,G.uniforms&&("contrast"in G.uniforms&&$.bloom.contrast!==void 0&&(G.uniforms.contrast=$.bloom.contrast),"brightness"in G.uniforms&&$.bloom.brightness!==void 0&&(G.uniforms.brightness=$.bloom.brightness),"delta"in G.uniforms&&$.bloom.delta!==void 0&&(G.uniforms.delta=$.bloom.delta),"sigma"in G.uniforms&&$.bloom.sigma!==void 0&&(G.uniforms.sigma=$.bloom.sigma),"stepSize"in G.uniforms&&$.bloom.stepSize!==void 0&&(G.uniforms.stepSize=$.bloom.stepSize))),S.skyAtmosphere&&$.sky&&(S.skyAtmosphere.hueShift=$.sky.hueShift,S.skyAtmosphere.saturationShift=$.sky.saturationShift,S.skyAtmosphere.brightnessShift=$.sky.brightnessShift)}function ze(){_&&(clearInterval(_),_=null)}async function Ze(){var G,X;const b=!M.value;if(M.value=b,!b){ze();return}const S=(G=t.getViewer)==null?void 0:G.call(t),z=((X=t.getCesium)==null?void 0:X.call(t))||window.Cesium;if(!S||!z){M.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ve(S,z),Ye(S,z),Ae(S,z)}catch(ae){M.value=!1,n.error("图表模块加载失败",ae)}}async function Ve(b,S){await J(),await wn(),i.value&&(p||(p=y.init(i.value),Be()),r||(r=()=>{p==null||p.resize()},window.addEventListener("resize",r)),p.resize(),Ae(b,S))}function Ye(b,S){_||(_=window.setInterval(()=>{!p||!M.value||Ae(b,S)},1200))}function Ae(b,S){var ee;const z=new Date,G=`${ke(z.getHours())}:${ke(z.getMinutes())}:${ke(z.getSeconds())}`,X=Number((Te(b)/1e3).toFixed(2)),ae=Number(S.Math.toDegrees(((ee=b==null?void 0:b.camera)==null?void 0:ee.pitch)??0).toFixed(1));De(te.labels,G,20),De(te.cameraHeightKm,X,20),De(te.pitchDeg,ae,20),De(te.fps,U,20),p.setOption({xAxis:{data:te.labels},series:[{data:te.cameraHeightKm},{data:te.pitchDeg},{data:te.fps}]})}function Be(){p&&p.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function Re(){var z,G;l&&(clearInterval(l),l=null),ze();const b=(z=t.getViewer)==null?void 0:z.call(t),S=(G=b==null?void 0:b.scene)==null?void 0:G.postProcessStages;c&&(c(),c=null),f&&(f(),f=null),T&&S&&S.remove(T),T=null,E&&S&&S.remove(E),E=null,A&&(H&&S&&S.remove(A),A=null),H=!1,b&&Oe(b),r&&(window.removeEventListener("resize",r),r=null),p&&(p.dispose(),p=null),y=null,L=!1}function Te(b){var X,ae,ee;const S=(ae=(X=b==null?void 0:b.scene)==null?void 0:X.globe)==null?void 0:ae.ellipsoid,z=(ee=b==null?void 0:b.camera)==null?void 0:ee.positionWC;if(!S||!z)return 0;const G=S.cartesianToCartographic(z);return Math.max(0,Number((G==null?void 0:G.height)??0))}function we(b,S,z){return!Number.isFinite(b)||z<=S?0:je((b-S)/(z-S))}function je(b){return Math.min(1,Math.max(0,Number(b)||0))}function De(b,S,z){b.push(S),b.length>z&&b.shift()}function ke(b){return String(b).padStart(2,"0")}return(b,S)=>e.headless?ie("",!0):(O(),q("div",er,[m("div",tr,[m("div",nr,[S[4]||(S[4]=m("span",{class:"panel-title"},"Cinematic FX",-1)),m("button",{class:"panel-btn",onClick:Ze},se(M.value?"隐藏图表":"显示图表"),1)]),m("div",rr,[m("label",ir,[pe(m("input",{"onUpdate:modelValue":S[0]||(S[0]=z=>h.value=z),type:"checkbox"},null,512),[[dt,h.value]]),S[5]||(S[5]=m("span",null,"电影级高度雾",-1))]),m("label",ar,[pe(m("input",{"onUpdate:modelValue":S[1]||(S[1]=z=>u.value=z),type:"checkbox"},null,512),[[dt,u.value]]),S[6]||(S[6]=m("span",null,"HBAO 微阴影",-1))]),m("label",or,[pe(m("input",{"onUpdate:modelValue":S[2]||(S[2]=z=>d.value=z),type:"checkbox"},null,512),[[dt,d.value]]),S[7]||(S[7]=m("span",null,"移轴摄影",-1))]),m("label",sr,[pe(m("input",{"onUpdate:modelValue":S[3]||(S[3]=z=>x.value=z),type:"checkbox"},null,512),[[dt,x.value]]),S[8]||(S[8]=m("span",null,"动态大气 + Bloom",-1))])]),pe(m("div",{ref_key:"chartRef",ref:i,class:"fx-chart"},null,512),[[ct,M.value]])])]))}},cr=gt(lr,[["__scopeId","data-v-1e562e70"]]),ur={key:0,class:"launcher-count"},dr={class:"panel-header"},hr={class:"panel-title-block"},fr={class:"panel-mark"},mr={class:"panel-copy"},pr={class:"panel-subtitle"},gr={class:"panel-actions"},vr=["title"],yr={class:"panel-tabs","aria-label":"3D 工具分类"},xr=["aria-pressed","onClick"],_r={class:"panel-scroll"},br={class:"panel-page"},Sr={class:"overview-grid"},Tr={class:"overview-tile"},wr={class:"overview-tile"},Mr={class:"overview-tile"},Lr={key:0,class:"quick-actions"},Fr=["disabled","onClick"],Pr={key:1,class:"empty-state"},Ar={class:"panel-page"},Er=["aria-expanded"],Cr={class:"section-main"},Rr={class:"section-meta"},Dr={key:0,class:"section-body"},kr={class:"option-grid"},Ir=["disabled","aria-pressed","title","onClick"],Nr={class:"custom-basemap-input-row"},Or=["disabled"],zr={key:0,class:"custom-basemap-current"},Br=["aria-expanded"],Hr={class:"section-main"},Ur={class:"section-meta"},Wr={key:0,class:"section-body"},Gr={class:"option-grid"},$r=["aria-pressed","title","onClick"],qr=["aria-expanded"],Xr={class:"section-main"},Vr={class:"section-meta"},Yr={key:0,class:"section-body"},jr={class:"overlay-list"},Kr=["disabled","aria-pressed","title","onClick"],Zr={class:"overlay-copy"},Qr={class:"overlay-title"},Jr={key:0,class:"overlay-desc"},ei={key:3,class:"empty-state"},ti={class:"panel-page"},ni={class:"module-list"},ri=["aria-expanded","onClick"],ii={class:"module-icon"},ai={class:"module-copy"},oi={class:"module-title"},si={key:0,class:"module-desc"},li={class:"module-head-side"},ci={key:0,class:"module-body"},ui={key:0,class:"module-actions"},di=["disabled","onClick"],hi={key:1,class:"control-list"},fi={class:"control-label"},mi={class:"control-label-text"},pi=["aria-label","title"],gi=["min","max","step","value","disabled","onInput"],vi=["min","max","step","value","disabled","onInput"],yi=["value","disabled","onInput"],xi=["value","disabled","onChange"],_i=["value"],bi=["aria-pressed","disabled","onClick"],Si={key:4,class:"control-value"},Ti={key:0,class:"empty-state"},Xt=2,wi={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(e,{emit:t}){const n=e,i=t,h=J(),u=h.uiStateVersion===Xt,d=Y(h.activeTab||"scene"),x=Y(!!h.compactMode),M=Y(new Set(u?h.expandedLayerSectionIds||[]:[])),T=Y(new Set(u?h.expandedModuleIds||[]:[])),E=Y(n.customBasemapUrl||""),A=xe(()=>n.embedded||n.open),H=xe(()=>n.modules.find(k=>k.id==="scene")||null),p=xe(()=>{var k;return((k=H.value)==null?void 0:k.actions)||[]}),y=xe(()=>n.modules.filter(k=>k.id!=="scene")),v=xe(()=>y.value.filter(k=>k.statusTone==="success"||k.statusTone==="warning").length),l=xe(()=>n.overlayOptions.filter(k=>!!k.active).length),_=[{id:"scene",label:"场景",icon:_t},{id:"layers",label:"图层",icon:Ht},{id:"modules",label:"模块",icon:xt}],r=xe(()=>{var k;return((k=n.basemapOptions.find(I=>I.value===n.activeBasemap))==null?void 0:k.label)||"未选择"}),c=xe(()=>{var k;return((k=n.terrainOptions.find(I=>I.value===n.activeTerrain))==null?void 0:k.label)||"未选择"});_e(()=>n.modules.map(k=>k.id),k=>{k.includes(d.value)||d.value==="scene"||d.value==="layers"||d.value==="modules"||(d.value="scene")},{immediate:!0}),_e([d,x,M,T],te,{deep:!0}),_e(()=>n.customBasemapUrl,k=>{k!==E.value&&(E.value=k||"")});function f(k){i("update:open",k)}function L(k){return M.value.has(k)}function C(k){const I=new Set(M.value);I.has(k)?I.delete(k):I.add(k),M.value=I}function P(k){return T.value.has(k)}function U(k){const I=new Set(T.value);I.has(k)?I.delete(k):I.add(k),T.value=I}function V(k){k!=null&&k.disabled||i("update:activeBasemap",k.value)}function K(){i("custom-basemap-submit",{url:E.value})}function J(){if(typeof window>"u")return{};try{const k=window.localStorage.getItem(n.storageKey);return k?JSON.parse(k):{}}catch{return{}}}function te(){if(!(typeof window>"u"))try{window.localStorage.setItem(n.storageKey,JSON.stringify({uiStateVersion:Xt,activeTab:d.value,compactMode:x.value,expandedLayerSectionIds:[...M.value],expandedModuleIds:[...T.value]}))}catch{}}function $(k){return{scene:_t,effects:zn,wind:On,fluid:Nn}[k]||xt}function le(k,I){var me;return((me={scene:{home:kn,everest:Wt,tileset:Dn},wind:{load:Rn,clear:$t},fluid:{pick:Gt,clear:$t}}[k])==null?void 0:me[I])||In}function ue(k,I){i("module-action",{moduleId:k,actionId:I})}function ye(k,I,F){const me=I.type==="range"?Number(F):F;i("control-change",{moduleId:k,controlId:I.id,value:me})}function Le(k){k.disabled||i("overlay-toggle",{overlayId:k.value,value:!k.active})}return(k,I)=>(O(),q("aside",{class:ve(["cesium-tool-shell",{"is-open":A.value,"is-embedded":e.embedded}])},[!e.embedded&&!A.value?(O(),q("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:I[0]||(I[0]=F=>f(!0))},[Me(Z(xt),{size:18,"stroke-width":"2"}),I[8]||(I[8]=m("span",null,"高级控制台",-1)),v.value?(O(),q("span",ur,se(v.value),1)):ie("",!0)])):ie("",!0),pe(m("section",{class:ve(["cesium-tool-panel",{compact:x.value}]),"aria-label":"Cesium 高级控制台"},[m("header",dr,[m("div",hr,[m("span",fr,[Me(Z(_t),{size:18,"stroke-width":"2"})]),m("span",mr,[I[9]||(I[9]=m("span",{class:"panel-title"},"3D 高级控制台",-1)),m("span",pr,se(r.value)+" / "+se(c.value),1)])]),m("div",gr,[m("button",{class:"icon-btn",type:"button",title:x.value?"切换为舒展布局":"切换为紧凑布局",onClick:I[1]||(I[1]=F=>x.value=!x.value)},[Me(Z(Pn),{size:16,"stroke-width":"2"})],8,vr),e.embedded?ie("",!0):(O(),q("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:I[2]||(I[2]=F=>f(!1))},[Me(Z(An),{size:17,"stroke-width":"2"})]))])]),m("nav",yr,[(O(),q(Fe,null,We(_,F=>m("button",{key:F.id,class:ve(["tab-btn",{active:d.value===F.id}]),type:"button","aria-pressed":d.value===F.id,onClick:me=>d.value=F.id},[(O(),Xe(nt(F.icon),{size:15,"stroke-width":"2"})),m("span",null,se(F.label),1)],10,xr)),64))]),m("div",_r,[pe(m("section",br,[m("div",Sr,[m("div",Tr,[I[10]||(I[10]=m("span",{class:"overview-label"},"地图源",-1)),m("strong",null,se(r.value),1)]),m("div",wr,[I[11]||(I[11]=m("span",{class:"overview-label"},"地形",-1)),m("strong",null,se(c.value),1)]),m("div",Mr,[I[12]||(I[12]=m("span",{class:"overview-label"},"模块",-1)),m("strong",null,se(v.value)+"/"+se(y.value.length),1)])]),p.value.length?(O(),q("div",Lr,[(O(!0),q(Fe,null,We(p.value,F=>(O(),q("button",{key:F.id,class:ve(["tool-action",[F.variant||"default",{active:F.active}]]),disabled:F.disabled,type:"button",onClick:me=>ue(H.value.id,F.id)},[(O(),Xe(nt(le(H.value.id,F.id)),{size:15,"stroke-width":"2"})),zt(" "+se(F.label),1)],10,Fr))),128))])):(O(),q("div",Pr," 暂无场景快捷操作 "))],512),[[ct,d.value==="scene"]]),pe(m("section",Ar,[e.basemapOptions.length?(O(),q("div",{key:0,class:ve(["option-group",{expanded:L("basemap")}])},[m("button",{class:"section-head section-toggle",type:"button","aria-expanded":L("basemap"),onClick:I[3]||(I[3]=F=>C("basemap"))},[m("span",Cr,[Me(Z(Ht),{size:16,"stroke-width":"2"}),I[13]||(I[13]=m("span",null,"底图源",-1))]),m("span",Rr,[m("span",null,se(r.value),1),Me(Z(ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Er),L("basemap")?(O(),q("div",Dr,[m("div",kr,[(O(!0),q(Fe,null,We(e.basemapOptions,F=>(O(),q("button",{key:F.value,class:ve(["option-card",{active:F.value===e.activeBasemap}]),type:"button",disabled:F.disabled,"aria-pressed":F.value===e.activeBasemap,title:F.description||F.label,onClick:me=>V(F)},[m("span",null,se(F.label),1),F.value===e.activeBasemap?(O(),Xe(Z(Ut),{key:0,size:15,"stroke-width":"2.4"})):ie("",!0)],10,Ir))),128))]),m("form",{class:"custom-basemap-editor",onSubmit:Bt(K,["prevent"])},[m("div",Nr,[Me(Z(En),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),pe(m("input",{"onUpdate:modelValue":I[4]||(I[4]=F=>E.value=F),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Ne,E.value]]),m("button",{class:"custom-basemap-submit",type:"submit",disabled:!E.value.trim(),title:"加载自定义 XYZ"},[Me(Z(Cn),{size:14,"stroke-width":"2"}),I[14]||(I[14]=m("span",null,"加载",-1))],8,Or)]),e.customBasemapUrl?(O(),q("div",zr,se(e.customBasemapUrl),1)):ie("",!0)],32)])):ie("",!0)],2)):ie("",!0),e.terrainOptions.length?(O(),q("div",{key:1,class:ve(["option-group",{expanded:L("terrain")}])},[m("button",{class:"section-head section-toggle",type:"button","aria-expanded":L("terrain"),onClick:I[5]||(I[5]=F=>C("terrain"))},[m("span",Hr,[Me(Z(Wt),{size:16,"stroke-width":"2"}),I[15]||(I[15]=m("span",null,"地形",-1))]),m("span",Ur,[m("span",null,se(c.value),1),Me(Z(ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Br),L("terrain")?(O(),q("div",Wr,[m("div",Gr,[(O(!0),q(Fe,null,We(e.terrainOptions,F=>(O(),q("button",{key:F.value,class:ve(["option-card",{active:F.value===e.activeTerrain}]),type:"button","aria-pressed":F.value===e.activeTerrain,title:F.description||F.label,onClick:me=>k.$emit("update:activeTerrain",F.value)},[m("span",null,se(F.label),1),F.value===e.activeTerrain?(O(),Xe(Z(Ut),{key:0,size:15,"stroke-width":"2.4"})):ie("",!0)],10,$r))),128))])])):ie("",!0)],2)):ie("",!0),e.overlayOptions.length?(O(),q("div",{key:2,class:ve(["option-group",{expanded:L("overlay")}])},[m("button",{class:"section-head section-toggle",type:"button","aria-expanded":L("overlay"),onClick:I[6]||(I[6]=F=>C("overlay"))},[m("span",Xr,[Me(Z(Gt),{size:16,"stroke-width":"2"}),I[16]||(I[16]=m("span",null,"叠加层",-1))]),m("span",Vr,[m("span",null,se(l.value)+"/"+se(e.overlayOptions.length),1),Me(Z(ht),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,qr),L("overlay")?(O(),q("div",Yr,[m("div",jr,[(O(!0),q(Fe,null,We(e.overlayOptions,F=>(O(),q("button",{key:F.value,class:ve(["overlay-row",{active:!!F.active}]),type:"button",disabled:F.disabled,"aria-pressed":!!F.active,title:F.description||F.label,onClick:me=>Le(F)},[m("span",Zr,[m("span",Qr,se(F.label),1),F.description?(O(),q("span",Jr,se(F.description),1)):ie("",!0)]),m("span",{class:ve(["toggle-control",{active:!!F.active}]),"aria-hidden":"true"},[...I[17]||(I[17]=[m("span",{class:"toggle-track"},[m("span",{class:"toggle-thumb"})],-1)])],2)],10,Kr))),128))])])):ie("",!0)],2)):ie("",!0),!e.basemapOptions.length&&!e.terrainOptions.length&&!e.overlayOptions.length?(O(),q("div",ei," 暂无图层配置项 ")):ie("",!0)],512),[[ct,d.value==="layers"]]),pe(m("section",ti,[m("div",ni,[(O(!0),q(Fe,null,We(y.value,F=>{var me,Pe;return O(),q("article",{key:F.id,class:ve(["module-item",{expanded:P(F.id)}])},[m("button",{class:"module-head",type:"button","aria-expanded":P(F.id),onClick:W=>U(F.id)},[m("span",ii,[(O(),Xe(nt($(F.id)),{size:16,"stroke-width":"2"}))]),m("span",ai,[m("span",oi,se(F.title),1),F.description?(O(),q("span",si,se(F.description),1)):ie("",!0)]),m("span",li,[F.status?(O(),q("span",{key:0,class:ve(["module-status",F.statusTone||"neutral"])},se(F.status),3)):ie("",!0),Me(Z(ht),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,ri),P(F.id)?(O(),q("div",ci,[(me=F.actions)!=null&&me.length?(O(),q("div",ui,[(O(!0),q(Fe,null,We(F.actions,W=>(O(),q("button",{key:W.id,class:ve(["tool-action",[W.variant||"default",{active:W.active}]]),disabled:W.disabled,type:"button",onClick:ce=>ue(F.id,W.id)},[(O(),Xe(nt(le(F.id,W.id)),{size:14,"stroke-width":"2"})),zt(" "+se(W.label),1)],10,di))),128))])):ie("",!0),(Pe=F.controls)!=null&&Pe.length?(O(),q("div",hi,[(O(!0),q(Fe,null,We(F.controls,W=>(O(),q("label",{key:W.id,class:ve(["control-row",`control-${W.type}`])},[m("span",fi,[m("span",mi,se(W.label),1),W.tooltip?(O(),q("span",{key:0,class:"control-help","aria-label":W.tooltip,title:W.tooltip,onClick:I[7]||(I[7]=Bt(()=>{},["prevent","stop"]))}," ? ",8,pi)):ie("",!0)]),W.type==="range"?(O(),q(Fe,{key:0},[m("input",{class:"control-range",type:"range",min:W.min,max:W.max,step:W.step,value:W.value,disabled:W.disabled,onInput:ce=>ye(F.id,W,ce.target.value)},null,40,gi),m("input",{class:"control-number",type:"number",min:W.min,max:W.max,step:W.step,value:W.value,disabled:W.disabled,onInput:ce=>ye(F.id,W,ce.target.value)},null,40,vi)],64)):W.type==="color"?(O(),q(Fe,{key:1},[m("input",{class:"control-color",type:"color",value:W.value,disabled:W.disabled,onInput:ce=>ye(F.id,W,ce.target.value)},null,40,yi),m("span",{class:"control-color-swatch",style:pn({backgroundColor:W.value})},null,4)],64)):W.type==="select"?(O(),q("select",{key:2,class:"control-select",value:W.value,disabled:W.disabled,onChange:ce=>ye(F.id,W,ce.target.value)},[(O(!0),q(Fe,null,We(W.options||[],ce=>(O(),q("option",{key:ce.value,value:ce.value},se(ce.label),9,_i))),128))],40,xi)):W.type==="toggle"?(O(),q("button",{key:3,class:ve(["toggle-control",{active:!!W.value}]),type:"button","aria-pressed":!!W.value,disabled:W.disabled,onClick:ce=>ye(F.id,W,!W.value)},[...I[18]||(I[18]=[m("span",{class:"toggle-track"},[m("span",{class:"toggle-thumb"})],-1)])],10,bi)):ie("",!0),W.displayValue?(O(),q("span",Si,se(W.displayValue),1)):ie("",!0)],2))),128))])):ie("",!0)])):ie("",!0)],2)}),128))]),y.value.length?ie("",!0):(O(),q("div",Ti," 暂无可用功能模块 "))],512),[[ct,d.value==="modules"]])])],2),[[ct,e.embedded||A.value]])],2))}},Mi=gt(wi,[["__scopeId","data-v-c2b974d5"]]);function Li(e){if(!e)throw new Error("Cesium runtime is required for FluidRenderer.");function t(_){return(_==null?void 0:_._view)||(_==null?void 0:_.view)}function n(_){const r=t(_);if(!(r!=null&&r.passState))throw new Error("Cesium scene passState is unavailable.");return r.passState}function i(_){const r=t(_);return(r==null?void 0:r.frustumCommandsList)||(r==null?void 0:r._frustumCommandsList)||[]}const h=`
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
`,M=`
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
`;class E{constructor(r){this.commandType=r.commandType,this.geometry=r.geometry,this.attributeLocations=r.attributeLocations,this.primitiveType=r.primitiveType,this.uniformMap=r.uniformMap,this.vertexShaderSource=r.vertexShaderSource,this.fragmentShaderSource=r.fragmentShaderSource,this.rawRenderState=r.rawRenderState,this.framebuffer=r.framebuffer,this.isPostRender=r.isPostRender,this.outputTexture=r.outputTexture,this.autoClear=e.defaultValue(r.autoClear,!1),this.preExecute=r.preExecute,this.modelMatrix=e.defaultValue(r.modelMatrix,e.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new e.ClearCommand({color:new e.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:e.Pass.OPAQUE}))}createCommand(r){switch(this.commandType){case"Draw":{const c=e.VertexArray.fromGeometry({context:r,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW}),f=e.ShaderProgram.fromCache({context:r,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),L=e.RenderState.fromCache(this.rawRenderState);return new e.DrawCommand({owner:this,vertexArray:c,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:f,framebuffer:this.framebuffer,renderState:L,pass:e.Pass.OPAQUE})}case"Compute":return new e.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(r,c){this.geometry=c;const f=e.VertexArray.fromGeometry({context:r,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:e.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=f}update(r){this.show&&(e.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(r.context),this.commandToExecute.isPostRender=this.isPostRender),e.defined(this.preExecute)&&this.preExecute(this),e.defined(this.clearCommand)&&r.commandList.push(this.clearCommand),r.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return e.defined(this.commandToExecute)&&(e.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),e.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),e.destroyObject(this)}}class A{constructor(){}static loadText(r){const c=new XMLHttpRequest;return c.open("GET",r,!1),c.send(),c.responseText}static getFullscreenQuad(){return new e.Geometry({attributes:new e.GeometryAttributes({position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(r){if(e.defined(r.arrayBufferView)){const f={};f.arrayBufferView=r.arrayBufferView,r.source=f,r.flipY=!1}return new e.Texture(r)}static createDepthFramebuffer(r,c,f){return new e.Framebuffer({context:r,colorTextures:[this.createTexture({context:r,width:c,height:f,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(c*f*4)})],depthRenderbuffer:new e.Renderbuffer({context:r,width:c,height:f,format:e.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(r,c,f,L=!1){const C={context:r,colorTextures:[c],destroyAttachments:L};return f&&(C.depthTexture=f),new e.Framebuffer(C)}static createRawRenderState(r){const L={viewport:r.viewport,depthTest:r.depthTest,depthMask:r.depthMask,blending:r.blending};return e.Appearance.getDefaultRenderState(!0,!1,L)}}const l=class l{constructor(r,c={}){if(!r)throw new Error("Cesium Viewer is required");this.viewer=r,this._initConfiguration(c),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(r){this.config={resolution:new e.Cartesian2(r.width||l.DEFAULTS.width,r.height||l.DEFAULTS.height),dimensions:r.dimensions||l.DEFAULTS.dimensions.clone(),heightRange:{min:r.minHeight??l.DEFAULTS.heightRange[0],max:r.maxHeight??l.DEFAULTS.heightRange[1]},baseHeight:r.baseHeight??l.DEFAULTS.baseHeight,fluidParams:r.fluidParams||l.DEFAULTS.fluidParams.clone(),customParams:r.customParams||l.DEFAULTS.customParams.clone(),waterColor:r.waterColor||l.DEFAULTS.waterColor.clone(),lonLat:r.lonLat||[...l.DEFAULTS.lonLat],timeStep:r.timeStep||l.DEFAULTS.timeStep,heightMapSource:r.heightMapSource||l.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(r){const c=Number(r);!Number.isFinite(c)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,c)),this.resetSimulation())}resetSimulation(){var r,c;this._frameCount=0,(c=(r=this.viewer.scene).requestRender)==null||c.call(r)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const r=()=>A.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:r(),B:r(),C:r(),D:r()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(r){if(!(r!=null&&r.arrayBufferView)||!r.width||!r.height)throw new Error("Invalid height map source.");return A.createTexture({context:this.viewer.scene.context,width:r.width,height:r.height,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,arrayBufferView:r.arrayBufferView,sampler:new e.Sampler({wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE,minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var $,le;const r=this.viewer.scene.context,c=A.createDepthFramebuffer(r,this.config.resolution.x,this.config.resolution.y),f=this.viewer.scene,L=f.frameState,C=n(this.viewer.scene),P=f.camera,U=L.camera,V=C.framebuffer,K=e.BoundingRectangle.clone(C.viewport,new e.BoundingRectangle);let J=null,te=[];try{C.viewport.x=0,C.viewport.y=0,C.viewport.width=this.config.resolution.x,C.viewport.height=this.config.resolution.y,C.framebuffer=c,f.camera=this.heightMapCamera,L.camera=this.heightMapCamera,L.context.uniformState.updateCamera(this.heightMapCamera),te=this._processHeightMapShaders(),this._renderDepthPrepass(C);const ue=A.createTexture({context:r,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT});return J=A.createFramebuffer(r,ue),this._copyTexture(c.getColorTexture(0),J),ue}finally{this._restoreHeightMapShaders(te),C.framebuffer=V,e.BoundingRectangle.clone(K,C.viewport),f.camera=P,L.camera=U,U&&L.context.uniformState.updateCamera(U),J&&!(($=J.isDestroyed)!=null&&$.call(J))&&J.destroy(),c&&!((le=c.isDestroyed)!=null&&le.call(c))&&c.destroy()}}_renderDepthPrepass(r){const c=this.viewer.scene.frameState;c.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(L=>L.execute(this.viewer.scene.context,r))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:e.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const r={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...r,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:u}),this._createComputePass("B",{uniforms:{...r,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:d}),this._createComputePass("C",{uniforms:{...r,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:x}),this._createComputePass("D",{uniforms:{...r,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:M})]}_createComputePass(r,{uniforms:c,shaderSource:f}){return new E({commandType:"Compute",uniformMap:c,fragmentShaderSource:new e.ShaderSource({sources:[h,f]}),geometry:A.getFullscreenQuad(),outputTexture:this.textures[r],preExecute:L=>L.commandToExecute.outputTexture=this.textures[r]})}_createMainRenderPass(){const r=p([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new E({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new e.ShaderSource({sources:[h,T]}),geometry:this._createBoxGeometry(),modelMatrix:r,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var r,c,f,L;return(L=(f=(c=(r=t(this.viewer.scene))==null?void 0:r.globeDepth)==null?void 0:c.colorFramebufferManager)==null?void 0:f._colorTextures)==null?void 0:L[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(r=>this.viewer.scene.primitives.add(r)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(r){const c=this.viewer.camera.getPickRay(r);return this.viewer.scene.globe.pick(c,this.viewer.scene)}_createOrthographicCamera(){const r=new e.Camera(this.viewer.scene);r.frustum=new e.OrthographicOffCenterFrustum;const[c,f]=this.config.lonLat,L=e.Cartesian3.fromDegrees(c,f,this.config.baseHeight),C=e.Transforms.eastNorthUpToFixedFrame(L),P=r.frustum;P.near=.01,P.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),P.left=-this.config.dimensions.x/2,P.right=this.config.dimensions.x/2,P.bottom=-this.config.dimensions.y/2,P.top=this.config.dimensions.y/2;const U=e.Matrix4.getColumn(C,2,new e.Cartesian3);e.Cartesian3.negate(U,U);const V=e.Matrix4.getColumn(C,1,new e.Cartesian3),K=e.Matrix4.getColumn(C,0,new e.Cartesian3),J=e.Cartesian3.multiplyByScalar(U,-P.far,new e.Cartesian3);return r.position=e.Cartesian3.add(L,J,new e.Cartesian3),r.direction=U,r.up=V,r.right=K,r}destroy(){var r,c;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(f=>{f&&this.viewer.scene.primitives.remove(f)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(f=>{var L;f&&!((L=f.isDestroyed)!=null&&L.call(f))&&f.destroy()}),this.textures={},this._heightMap&&!((c=(r=this._heightMap).isDestroyed)!=null&&c.call(r))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(r,c){const f=this.viewer.scene.context,L=n(this.viewer.scene),C=f.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>r},owner:this}),P=L.framebuffer;L.framebuffer=c,C.execute(f,L),L.framebuffer=P}_getDepthRenderCommands(){var f,L;const r=[],c=i(this.viewer.scene);for(let C=0;C<c.length;++C){const P=c[C],U=(f=P==null?void 0:P.commands)==null?void 0:f[2],V=((L=P==null?void 0:P.indices)==null?void 0:L[2])??(U==null?void 0:U.length)??0;U&&V>0&&r.push(...U.slice(0,V))}return r}_processHeightMapShaders(){const r=[],c=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),f=e.Matrix4.inverse(c,new e.Matrix4),L=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(P=>{var te;if(!((te=P==null?void 0:P.shaderProgram)!=null&&te.fragmentShaderSource)||!P.uniformMap)return;const U=Object.prototype.hasOwnProperty.call(P.uniformMap,"u_inverseEnuMatrix"),V=P.uniformMap.u_inverseEnuMatrix,K=P.shaderProgram,J=new e.Matrix4;P.uniformMap.u_inverseEnuMatrix=()=>{const $=P.modelMatrix||e.Matrix4.IDENTITY;return e.Matrix4.multiply(f,$,J)},P.heightMap_ShaderProgram||(P.heightMap_ShaderProgram=this._getDerivedShaderProgram(L.context,P.shaderProgram,"Height_Map")),P.shaderProgram=P.heightMap_ShaderProgram,r.push({command:P,hadInverseUniform:U,originalInverseUniform:V,originalShaderProgram:K})}),r}_restoreHeightMapShaders(r){r.forEach(c=>{const{command:f,hadInverseUniform:L,originalInverseUniform:C,originalShaderProgram:P}=c;f!=null&&f.uniformMap&&(f.shaderProgram=P,L?f.uniformMap.u_inverseEnuMatrix=C:delete f.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(r,c,f){let L=r.shaderCache.getDerivedShaderProgram(c,f);return e.defined(L)||(L=this._createHeightMapShaderProgram(r,c,f)),L}_createHeightMapShaderProgram(r,c,f){const L=this._modifyFragmentShader(c.fragmentShaderSource);return r.shaderCache.createDerivedShaderProgram(c,f,{vertexShaderSource:c.vertexShaderSource,fragmentShaderSource:L,attributeLocations:c._attributeLocations})}_modifyFragmentShader(r){const c=r.sources.map(f=>e.ShaderSource.replaceMain(f,"czm_heightMap_main"));return c.push(`
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
            }`]})}};It(l,"DEFAULTS",{width:1024,height:1024,dimensions:new e.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new e.Cartesian4(.995,.25,1e-4,.03),customParams:new e.Cartesian4(10,20,.2,10),waterColor:new e.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let H=l;const p=(_=[0,0,0],r=[0,0,0],c=[1,1,1])=>{const f=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationX(e.Math.toRadians(r[0]))),L=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationY(e.Math.toRadians(r[1]))),C=e.Matrix4.fromRotationTranslation(e.Matrix3.fromRotationZ(e.Math.toRadians(r[2])));_ instanceof e.Cartesian3||(_=e.Cartesian3.fromDegrees(..._));const P=e.Transforms.eastNorthUpToFixedFrame(_);e.Matrix4.multiply(P,f,P),e.Matrix4.multiply(P,L,P),e.Matrix4.multiply(P,C,P);const U=e.Matrix4.fromScale(new e.Cartesian3(...c));return e.Matrix4.multiply(P,U,new e.Matrix4)},y=`
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
    `;function v(){return new e.PostProcessStage({fragmentShader:y})}return{FluidRenderer:H,createSkyEffect:v}}const Fi={key:0,class:"fluid-root"},Pi={class:"fluid-panel"},Ai={class:"panel-actions"},Ei=["disabled"],Ci={key:0,class:"selected-text"},Ri={class:"param-list"},Di={class:"param-row"},ki={class:"param-row"},Ii={class:"param-row"},Ni={key:0,class:"param-row"},Oi=["min","max","step"],zi=["min","max","step"],Bi={class:"param-row color-row"},Vt=1024,mt=1e4,Yt=1200,Hi=100,Ui=.01,Wi=.03,Gi=60,bt=64,$i=160,qi={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(e,{expose:t,emit:n}){const i=e,h=n,u=Ft(),d=Y(10),x=Y(20),M=Y(3),T=Y("#0d4fa3"),E=Y(null),A=Y(null),H=Y(null),p=Y(!1),y=Y(!1),v=Y(null),l=Y(null);let _=null,r=null,c=null,f=null,L=null,C=null,P=0;const U=xe(()=>!Number.isFinite(v.value)||!Number.isFinite(l.value)?"":`经度 ${v.value.toFixed(6)} / 纬度 ${l.value.toFixed(6)}`),V=xe(()=>Number.isFinite(A.value)&&Number.isFinite(H.value)),K=xe(()=>{if(!V.value)return 1;const o=Math.abs(H.value-A.value);return Math.max(o/1e3,.01)});_e([d,x,M,T],De),_e(E,ke),_e(()=>i.params,o=>{te(o||{})},{deep:!0,immediate:!0}),_e([p,y,U,E,A,H],$,{immediate:!0}),Mn(()=>{ae(!0)});function J(){var w,N;const o=(w=i.getViewer)==null?void 0:w.call(i),s=((N=i.getCesium)==null?void 0:N.call(i))||window.Cesium;if(!o||!s)return u.warning("Cesium 场景尚未就绪。"),null;if(!_){const B=Li(s);_=B.FluidRenderer,r=B.createSkyEffect}return{viewer:o,Cesium:s}}function te(o){Number.isFinite(Number(o.threshold))&&(d.value=Number(o.threshold)),Number.isFinite(Number(o.blend))&&(x.value=Number(o.blend)),Number.isFinite(Number(o.lightStrength))&&(M.value=Number(o.lightStrength)),Re(o.waterColor)&&(T.value=o.waterColor),Number.isFinite(Number(o.waterLevel))&&(E.value=Number(o.waterLevel))}function $(){h("state-change",{isPicking:p.value,hasFluid:y.value,selectedText:U.value,waterLevel:E.value,waterLevelMin:A.value,waterLevelMax:H.value})}function le(){const o=J();if(!o)return;const{viewer:s,Cesium:w}=o;G(),b(s,w),p.value=!0,c=new w.ScreenSpaceEventHandler(s.scene.canvas),c.setInputAction(N=>{ue(s,w,N.position)},w.ScreenSpaceEventType.LEFT_CLICK)}async function ue(o,s,w){var it,a;const N=je(o,w);if(!N){u.warning("未选中可用地形位置。");return}const B=++P;G();const oe=s.Cartographic.fromCartesian(N),de=s.Math.toDegrees(oe.longitude),he=s.Math.toDegrees(oe.latitude),Ie=Number(oe.height),Ee=Number.isFinite(Ie)?Ie:0,Qe=new s.Cartesian3(mt,mt,0);dn("正在请求模拟范围高度数据...");try{X();const g=Number(d.value)||0,R=Number(x.value)||0,D=Number(M.value)||0,j=await ye(o,s,{lon:de,lat:he,centerHeight:Ee,dimensions:Qe}),Q=ze(j,Ee),fe=Q.baseHeight,be=Q.depth,Se=Ze(Q,Ee),He=new s.Cartesian3(mt,mt,be);if(B!==P)return;A.value=Q.minHeight,H.value=Q.maxHeight,E.value=Se,j||u.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),f=new _(o,{lonLat:[de,he],width:Vt,height:Vt,dimensions:He,baseHeight:fe,minHeight:Q.minHeight,maxHeight:Q.maxHeight,heightMapSource:j,waterColor:Ae(s,T.value),customParams:new s.Cartesian4(g,R,D,10),fluidParams:new s.Cartesian4(.9+D/10*.099,Math.min(1,R/50),g/5e4,Ve(Se,Q))}),v.value=de,l.value=he,y.value=!0,(a=(it=o.scene).requestRender)==null||a.call(it),u.success("水体流体已创建。")}catch(g){u.error("水体流体创建失败",g),u.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{hn()}}async function ye(o,s,w){const N=o==null?void 0:o.terrainProvider,B=k(w.dimensions);if(!N)return null;if(s.EllipsoidTerrainProvider&&N instanceof s.EllipsoidTerrainProvider)return ce(B);if(typeof s.sampleTerrain!="function"&&typeof s.sampleTerrainMostDetailed!="function")return null;try{return await Le(o,s,w,B)}catch(oe){if(B<=bt)throw oe;return Le(o,s,w,bt)}}async function Le(o,s,w,N){const B=F(s,w,N),oe=await me(s,o.terrainProvider,B);return W(oe||B,{size:N})}function k(o){const s=Math.max(Number(o==null?void 0:o.x)||0,Number(o==null?void 0:o.y)||0),w=Math.ceil(s/Gi)+1;return I(w,bt,$i)}function I(o,s,w){return Math.max(s,Math.min(w,Math.round(o)))}function F(o,{lon:s,lat:w,centerHeight:N,dimensions:B},oe){const de=o.Cartesian3.fromDegrees(s,w,N),he=o.Transforms.eastNorthUpToFixedFrame(de),Ie=[],Ee=Math.max(1,oe-1);for(let Qe=0;Qe<oe;Qe++){const a=(.5-Qe/Ee)*B.y;for(let g=0;g<oe;g++){const D=(g/Ee-.5)*B.x,j=new o.Cartesian3(D,a,0),Q=o.Matrix4.multiplyByPoint(he,j,new o.Cartesian3);Ie.push(o.Cartographic.fromCartesian(Q))}}return Ie}async function me(o,s,w){const N=Pe(s);return Number.isInteger(N)&&typeof o.sampleTerrain=="function"?o.sampleTerrain(s,N,w):typeof o.sampleTerrainMostDetailed=="function"?o.sampleTerrainMostDetailed(s,w):o.sampleTerrain(s,10,w)}function Pe(o){const s=Number(o==null?void 0:o._bottomLevel);return Number.isFinite(s)?Math.max(0,s-1):null}function W(o,{size:s}){var B;const w=Oe(o);if(!w)return null;const N=new Float32Array(s*s*4);for(let oe=0;oe<s*s;oe++){const de=Number((B=o[oe])==null?void 0:B.height),he=oe*4;N[he]=Number.isFinite(de)?we(de,w.minHeight,w.maxHeight):w.minHeight,N[he+1]=0,N[he+2]=0,N[he+3]=1}return{width:s,height:s,arrayBufferView:N,minHeight:w.minHeight,maxHeight:w.maxHeight}}function ce(o){return{width:o,height:o,arrayBufferView:new Float32Array(o*o*4),minHeight:0,maxHeight:0}}function Oe(o){let s=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY;for(const N of o||[]){const B=Number(N==null?void 0:N.height);Number.isFinite(B)&&(s=Math.min(s,B),w=Math.max(w,B))}return!Number.isFinite(s)||!Number.isFinite(w)?null:{minHeight:s,maxHeight:w}}function ze(o,s){const w=Number(o==null?void 0:o.minHeight),N=Number(o==null?void 0:o.maxHeight);if(Number.isFinite(w)&&Number.isFinite(N)){const de=Number(s),he=Number.isFinite(de)?Math.min(w,N,de):Math.min(w,N),Ie=Number.isFinite(de)?Math.max(w,N,de):Math.max(w,N),Ee=Math.max(Ie-he,Ui);return{baseHeight:he,depth:Ee,minHeight:he,maxHeight:he+Ee}}const B=Number(s),oe=Number.isFinite(B)?B-Hi:0;return{baseHeight:oe,depth:Yt,minHeight:oe,maxHeight:oe+Yt}}function Ze(o,s){const w=o.minHeight+o.depth*Wi,N=Number(s),B=Number.isFinite(N)?N:w;return we(B,o.minHeight,o.maxHeight)}function Ve(o,s){const w=s.maxHeight-s.minHeight;return!Number.isFinite(w)||w<=0?0:we((o-s.minHeight)/w,0,1)}function Ye(){return!Number.isFinite(A.value)||!Number.isFinite(H.value)?null:{minHeight:Math.min(A.value,H.value),maxHeight:Math.max(A.value,H.value)}}function Ae(o,s){const w=Te(s)||Te("#0d4fa3");return new o.Cartesian3(w.red,w.green,w.blue)}function Be(){var w;const o=Te(T.value),s=(w=f==null?void 0:f.config)==null?void 0:w.waterColor;!o||!s||(s.x=o.red,s.y=o.green,s.z=o.blue)}function Re(o){return typeof o=="string"&&/^#[0-9a-f]{6}$/i.test(o)}function Te(o){return Re(o)?{red:Number.parseInt(o.slice(1,3),16)/255,green:Number.parseInt(o.slice(3,5),16)/255,blue:Number.parseInt(o.slice(5,7),16)/255}:null}function we(o,s,w){return Math.max(s,Math.min(w,o))}function je(o,s){if(!s)return null;if(o.scene.pickPositionSupported&&typeof o.scene.pickPosition=="function"){const N=o.scene.pickPosition(s);if(N)return N}const w=o.camera.getPickRay(s);return w?o.scene.globe.pick(w,o.scene):null}function De(){var N,B,oe;if(!(f!=null&&f.config))return;const o=Number(d.value)||0,s=Number(x.value)||0,w=Number(M.value)||0;f.config.customParams&&(f.config.customParams.x=o,f.config.customParams.y=s,f.config.customParams.z=w),f.config.fluidParams&&(f.config.fluidParams.x=.9+w/10*.099,f.config.fluidParams.y=Math.min(1,s/50),f.config.fluidParams.z=o/5e4),Be(),(oe=(B=(N=f.viewer)==null?void 0:N.scene)==null?void 0:B.requestRender)==null||oe.call(B)}function ke(){var B,oe,de,he;if(!((B=f==null?void 0:f.config)!=null&&B.fluidParams))return;const o=Ye(),s=Number(E.value);if(!o||!Number.isFinite(s))return;const w=we(s,o.minHeight,o.maxHeight);if(w!==s){E.value=w;return}const N=Ve(w,o);typeof f.setInitialWaterLevel=="function"?f.setInitialWaterLevel(N):(f.config.fluidParams.w=N,(he=(de=(oe=f.viewer)==null?void 0:oe.scene)==null?void 0:de.requestRender)==null||he.call(de))}function b(o,s){var w,N;if(!C){const B=o.scene;C={shadows:o.shadows,resolutionScale:o.resolutionScale,msaaSamples:B.msaaSamples,depthTestAgainstTerrain:B.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:B.logarithmicDepthBuffer,highDynamicRange:B.highDynamicRange,fogEnabled:(w=B.fog)==null?void 0:w.enabled,showGroundAtmosphere:B.globe.showGroundAtmosphere,skyAtmosphereShow:(N=B.skyAtmosphere)==null?void 0:N.show,enableLighting:B.globe.enableLighting}}o.shadows=!0,o.resolutionScale=1,o.scene.msaaSamples=4,o.scene.globe.depthTestAgainstTerrain=!0,o.scene.logarithmicDepthBuffer=!0,o.scene.highDynamicRange=!0,o.scene.fog&&(o.scene.fog.enabled=!0),o.scene.globe.showGroundAtmosphere=!0,o.scene.skyAtmosphere&&(o.scene.skyAtmosphere.show=!0),o.scene.globe.enableLighting=!0,!L&&r&&(L=r(s),o.scene.postProcessStages.add(L))}function S(o){if(!o||!C)return;const s=o.scene;o.shadows=C.shadows,o.resolutionScale=C.resolutionScale,C.msaaSamples!==void 0&&(s.msaaSamples=C.msaaSamples),s.globe.depthTestAgainstTerrain=C.depthTestAgainstTerrain,s.logarithmicDepthBuffer=C.logarithmicDepthBuffer,s.highDynamicRange=C.highDynamicRange,s.fog&&C.fogEnabled!==void 0&&(s.fog.enabled=C.fogEnabled),s.globe.showGroundAtmosphere=C.showGroundAtmosphere,s.skyAtmosphere&&C.skyAtmosphereShow!==void 0&&(s.skyAtmosphere.show=C.skyAtmosphereShow),s.globe.enableLighting=C.enableLighting,C=null}function z(){ae(!1),u.success("水体流体已清除。")}function G(){c&&(c.destroy(),c=null),p.value=!1}function X(){if(f){try{f.destroy()}catch{}f=null,y.value=!1}}function ae(o){var w,N,B;const s=(w=i.getViewer)==null?void 0:w.call(i);if(P+=1,G(),X(),v.value=null,l.value=null,E.value=null,A.value=null,H.value=null,s&&L){try{s.scene.postProcessStages.remove(L)}catch{}L=null}o&&s&&S(s),(B=(N=s==null?void 0:s.scene)==null?void 0:N.requestRender)==null||B.call(N)}function ee(){ae(!0),h("close")}return t({startPickHeightMap:le,clearFluid:z}),(o,s)=>e.headless?ie("",!0):(O(),q("div",Fi,[m("div",Pi,[m("div",{class:"panel-head"},[s[9]||(s[9]=m("span",{class:"panel-title"},"水体流体",-1)),m("button",{class:"panel-close",title:"关闭",onClick:ee}," × ")]),m("div",Ai,[m("button",{class:ve(["action-btn primary",{active:p.value}]),onClick:le},se(p.value?"等待选点":"捕捉高度图"),3),m("button",{class:"action-btn",disabled:!y.value&&!p.value,onClick:z}," 清除 ",8,Ei)]),U.value?(O(),q("div",Ci,se(U.value),1)):ie("",!0),m("div",Ri,[m("label",Di,[s[10]||(s[10]=m("span",null,"阈值",-1)),pe(m("input",{"onUpdate:modelValue":s[0]||(s[0]=w=>d.value=w),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Ne,d.value,void 0,{number:!0}]]),pe(m("input",{"onUpdate:modelValue":s[1]||(s[1]=w=>d.value=w),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Ne,d.value,void 0,{number:!0}]])]),m("label",ki,[s[11]||(s[11]=m("span",null,"混合",-1)),pe(m("input",{"onUpdate:modelValue":s[2]||(s[2]=w=>x.value=w),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Ne,x.value,void 0,{number:!0}]]),pe(m("input",{"onUpdate:modelValue":s[3]||(s[3]=w=>x.value=w),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Ne,x.value,void 0,{number:!0}]])]),m("label",Ii,[s[12]||(s[12]=m("span",null,"光强",-1)),pe(m("input",{"onUpdate:modelValue":s[4]||(s[4]=w=>M.value=w),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Ne,M.value,void 0,{number:!0}]]),pe(m("input",{"onUpdate:modelValue":s[5]||(s[5]=w=>M.value=w),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Ne,M.value,void 0,{number:!0}]])]),V.value?(O(),q("label",Ni,[s[13]||(s[13]=m("span",null,"水位",-1)),pe(m("input",{"onUpdate:modelValue":s[6]||(s[6]=w=>E.value=w),type:"range",min:A.value,max:H.value,step:K.value},null,8,Oi),[[Ne,E.value,void 0,{number:!0}]]),pe(m("input",{"onUpdate:modelValue":s[7]||(s[7]=w=>E.value=w),class:"number-input",type:"number",min:A.value,max:H.value,step:K.value},null,8,zi),[[Ne,E.value,void 0,{number:!0}]])])):ie("",!0),m("label",Bi,[s[14]||(s[14]=m("span",null,"水色",-1)),pe(m("input",{"onUpdate:modelValue":s[8]||(s[8]=w=>T.value=w),class:"color-input",type:"color"},null,512),[[Ne,T.value]]),m("span",{class:"color-swatch",style:pn({backgroundColor:T.value})},null,4)])])])]))}},Xi=gt(qi,[["__scopeId","data-v-9ecdafb8"]]),Pt="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Vi=`${Pt}Cesium.js`,Yi=`${Pt}Widgets/widgets.css`;async function ji({ionToken:e}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Pt),await Zi(Yi,"cesium-widgets-style"),await Ki(Vi,"cesium-runtime-script");const t=window.Cesium;if(!t)throw new Error("Cesium global 未找到");return pt(t,e),t}function pt(e,t){t&&(e!=null&&e.Ion)&&(e.Ion.defaultAccessToken=t)}function Ki(e,t){return new Promise((n,i)=>{const h=document.getElementById(t);if(h){if(h.getAttribute("data-loaded")==="true"){n();return}h.addEventListener("load",()=>n(),{once:!0}),h.addEventListener("error",()=>i(new Error(`脚本加载失败: ${e}`)),{once:!0});return}const u=document.createElement("script");u.id=t,u.src=e,u.async=!0,u.onload=()=>{u.setAttribute("data-loaded","true"),n()},u.onerror=()=>i(new Error(`脚本加载失败: ${e}`)),document.head.appendChild(u)})}function Zi(e,t){return new Promise((n,i)=>{if(document.getElementById(t)){n();return}const u=document.createElement("link");u.id=t,u.rel="stylesheet",u.href=e,u.onload=()=>n(),u.onerror=()=>i(new Error(`样式加载失败: ${e}`)),document.head.appendChild(u)})}const Qi="Asia/Shanghai",Ji="UTC+8",ea=new Intl.DateTimeFormat("zh-CN",{timeZone:Qi,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function ta(e,t){var n,i,h,u,d,x,M;if(!(!e||!(t!=null&&t.JulianDate))){if((n=e.animation)!=null&&n.viewModel&&(e.animation.viewModel.dateFormatter=(...T)=>ra(e,t,...T),e.animation.viewModel.timeFormatter=(...T)=>ia(e,t,...T)),e.timeline){const T=(...E)=>aa(e,t,...E);e.timeline.makeLabel=T,"_makeLabel"in e.timeline&&(e.timeline._makeLabel=T),(h=(i=e.timeline).updateFromClock)==null||h.call(i),(d=(u=e.timeline).zoomTo)==null||d.call(u,e.clock.startTime,e.clock.stopTime)}(M=(x=e.scene).requestRender)==null||M.call(x)}}function At(e,t,...n){var x;const i=n.find(na)||((x=e==null?void 0:e.clock)==null?void 0:x.currentTime);if(!i)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const h=t.JulianDate.toDate(i),u=ea.formatToParts(h),d=Object.fromEntries(u.filter(({type:M})=>M!=="literal").map(({type:M,value:T})=>[M,T]));return{year:d.year||"0000",month:d.month||"01",day:d.day||"01",hour:d.hour||"00",minute:d.minute||"00",second:d.second||"00"}}function na(e){return e&&typeof e.dayNumber=="number"&&typeof e.secondsOfDay=="number"}function ra(e,t,...n){const{year:i,month:h,day:u}=At(e,t,...n);return`${i}-${h}-${u}`}function ia(e,t,...n){const{hour:i,minute:h,second:u}=At(e,t,...n);return`${i}:${h}:${u} ${Ji}`}function aa(e,t,...n){const{month:i,day:h,hour:u,minute:d}=At(e,t,...n);return`${i}-${h} ${u}:${d}`}function oa({getViewer:e}){let t=null,n=null;function i(){var x;const d=e==null?void 0:e();if(d&&((x=d._cesiumWidget)!=null&&x._creditContainer&&(d._cesiumWidget._creditContainer.style.display="none"),h(),t=setInterval(()=>{const M=document.querySelector(".cesium-credit-container");M&&M.innerHTML.length>0&&(M.innerHTML="",M.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const M=document.createElement("style");M.id="cesium-credit-override",M.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(M),n=M}}function h(){var M;const d=e==null?void 0:e();if(!d)return;(M=d._cesiumWidget)!=null&&M._creditContainer&&(d._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",d._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(T=>{T.style.cssText="display: none !important; visibility: hidden !important;",T.innerHTML=""}),d.scene&&d.scene.frameState&&d.scene.frameState.creditDisplay&&(d.scene.frameState.creditDisplay.hasCredits=()=>!1,d.scene.frameState.creditDisplay.destroy=()=>{})}function u(){t&&(clearInterval(t),t=null),n&&(n.remove(),n=null)}return{installCreditHider:i,cleanupCreditHider:u}}const sa=500,Mt=48,la=160,jt=48;function ca({getViewer:e}){const t=Y(null),n=Y([]),i=xe(()=>Number.isFinite(t.value)?String(t.value):"--"),h=xe(()=>ua(n.value));let u=null,d=0,x=St();function M(){var A;const E=(A=e==null?void 0:e())==null?void 0:A.scene;E!=null&&E.preRender&&(T(),t.value=null,n.value=[],d=0,x=St(),u=E.preRender.addEventListener(()=>{d+=1;const H=St(),p=H-x;if(p<sa)return;const y=Math.round(d*1e3/p);t.value=y,n.value=[...n.value.slice(1-Mt),y],d=0,x=H}))}function T(){typeof u=="function"&&(u(),u=null)}return{frameRateDisplay:i,frameRateLinePoints:h,setupFrameRateMonitor:M,cleanupFrameRateMonitor:T}}function St(){return typeof performance<"u"?performance.now():Date.now()}function ua(e){if(!e.length)return"";const t=Math.max(60,...e),n=la/(Mt-1),i=Mt-e.length;return e.map((h,u)=>{const d=(i+u)*n,x=Math.max(0,Math.min(h/t,1)),M=jt-x*jt;return`${d.toFixed(1)},${M.toFixed(1)}`}).join(" ")}const Tt="经度: --, 纬度: --, 海拔: --米";function da({getViewer:e,getCesium:t,onCoordinatePick:n}){let i=null,h=null,u=null;const d=Y("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function x(){const p=e==null?void 0:e(),y=t==null?void 0:t();!p||!y||(H(),h=p.scene.canvas,i=new y.ScreenSpaceEventHandler(h),u=()=>{d.value=Tt},h.addEventListener("mouseleave",u),i.setInputAction(v=>{M(v.endPosition,p,y)},y.ScreenSpaceEventType.MOUSE_MOVE),i.setInputAction(v=>{const l=v.endPosition,_=v.startPosition;if(!y.defined(p.terrainProvider))return;const r=p.scene.globe.ellipsoid;if(!p.camera.pickEllipsoid(_,r)){const f=p.camera;f.rotate(y.Cartesian3.UNIT_X,-.002*(l.y-_.y)),f.rotate(y.Cartesian3.UNIT_Y,-.002*(l.x-_.x))}},y.ScreenSpaceEventType.RIGHT_DRAG),i.setInputAction(()=>{},y.ScreenSpaceEventType.RIGHT_DOWN),i.setInputAction(()=>{},y.ScreenSpaceEventType.RIGHT_UP))}function M(p,y,v){const l=T(p,y,v);if(!l){d.value=Tt;return}const _=v.Cartographic.fromCartesian(l);if(!_||!Number.isFinite(_.longitude)||!Number.isFinite(_.latitude)){d.value=Tt;return}const r=v.Math.toDegrees(_.longitude).toFixed(6),c=v.Math.toDegrees(_.latitude).toFixed(6),f=(Number.isFinite(_.height)?_.height:0).toFixed(2);d.value=`经度: ${r}, 纬度: ${c}, 海拔: ${f}米`,typeof n=="function"&&n({lng:Number(r),lat:Number(c),height:Number(f)})}function T(p,y,v){if(!p)return null;const l=y.scene,_=E(p,l,v);if(_)return _;const r=y.camera.getPickRay(p);if(r){const f=l.globe.pick(r,l);if(A(f))return f}const c=y.camera.pickEllipsoid(p,l.globe.ellipsoid);return A(c)?c:null}function E(p,y,v){if(!y.pickPositionSupported||typeof y.pickPosition!="function")return null;const l=typeof y.pick=="function"?y.pick(p):null;if(!v.defined(l))return null;const _=y.pickPosition(p);return A(_)?_:null}function A(p){return!!p&&Number.isFinite(p.x)&&Number.isFinite(p.y)&&Number.isFinite(p.z)}function H(){u&&h&&(h.removeEventListener("mouseleave",u),u=null),h=null,i&&(i.destroy(),i=null)}return{coordinateDisplay:d,setupInteractions:x,cleanupInteractions:H}}function ha(e,t=""){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n??t}catch{return t}}function fa(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(t||""))}catch{}}function et(e,t){if(typeof window>"u")return t;try{const n=window.localStorage.getItem(e);return n==null?t:n==="true"}catch{return t}}function ut(e,t){if(!(typeof window>"u"))try{window.localStorage.setItem(e,String(!!t))}catch{}}function Kt(e){if(!e)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:n,Ellipsoid:i,Resource:h,HeightmapTerrainData:u,Rectangle:d,TileAvailability:x,CustomHeightmapTerrainProvider:M}=e;function T(p,y,v,l,_,r){const c=p.tileXYToRectangle(v,l,_);return t(d.intersection(c,y,r))}function E(p){const y=[[[0,0,1,0]]],v=new x(p.tilingScheme,19);for(let l=0;l<y.length;l++){const _=y[l];for(let r=0;r<_.length;r++){const c=_[r];v.addAvailableTileRange(l,c[0],c[1],c[2],c[3])}}return v}function A(p,y,v,l,_){const r=new u({buffer:p._transformBuffer(y),width:p._width,height:p._height,childTileMask:p._getChildTileMask(l,_,v),structure:p._terrainDataStructure});return r._skirtHeight=6e3,p.availability.addAvailableTileRange(v,l,_,l,_),r}class H extends M{constructor(y={}){if(super({...y,ellipsoid:i.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(y.url))throw new n("options.url is required.");this._dataType=y.dataType??"int16",this._url=y.url,this._subdomains=y.subdomains,this._token=y.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=E(this)}get availability(){return this._availability}requestTileGeometry(y,v,l,_){if(l>=this._bottomLevel)return Promise.reject(new Error(`Level ${l} is outside supported range.`));if(l<this._topLevel)return Promise.resolve(new u({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(y,v,l),structure:this._terrainDataStructure}));let r=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const f=this._subdomains[(y+v)%this._subdomains.length];r=r.replace("{s}",f)}r=r.replace("{token}",this._token).replace("{x}",y).replace("{y}",v).replace("{z}",l+1);const c=h.fetchArrayBuffer({url:r,request:_});if(c)return c.then(f=>f.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Bn.inflate(f)).then(f=>A(this,f,l,y,v))}getTileDataAvailable(y,v,l){return l<this._bottomLevel}_transformBuffer(y){let v=2;this._dataType==="float"&&(v=4);const l=y;if(l.length!==22500*v)return null;const _=new ArrayBuffer(v),r=new DataView(_),c=this._width,f=this._height,L=new Uint8Array(c*f*4);for(let C=0;C<f;C++)for(let P=0;P<c;P++){const U=Math.floor(149*C/(f-1)),V=Math.floor(149*P/(c-1)),K=v*(150*U+V);let J;v===4?(r.setInt8(0,l[K]),r.setInt8(1,l[K+1]),r.setInt8(2,l[K+2]),r.setInt8(3,l[K+3]),J=r.getFloat32(0,!0)):J=l[K]+256*l[K+1],(J>1e4||J<-2e3)&&(J=0);const te=(J+1e3)/.001,$=4*(C*c+P);L[$]=te/65536,L[$+1]=(te-256*L[$]*256)/256,L[$+2]=te-256*L[$]*256-256*L[$+1],L[$+3]=255}return L}_getVHeightBuffer(){let y=this._vHeightBuffer;if(!t(y)){y=new Uint8ClampedArray(this._width*this._height*4);for(let v=0;v<this._width*this._height*4;)y[v++]=15,y[v++]=66,y[v++]=64,y[v++]=255;this._vHeightBuffer=y}return y}_getChildTileMask(y,v,l){const _=new d,r=this._tilingScheme,c=this._rectangles,f=r.tileXYToRectangle(y,v,l);let L=0;for(let C=0;C<c.length&&L!==15;C++){const P=c[C];if(P.maxLevel<=l)continue;const U=P.rectangle,V=d.intersection(U,f,_);t(V)&&(T(r,U,2*y,2*v,l+1,_)&&(L|=4),T(r,U,2*y+1,2*v,l+1,_)&&(L|=8),T(r,U,2*y,2*v+1,l+1,_)&&(L|=1),T(r,U,2*y+1,2*v+1,l+1,_)&&(L|=2))}return L}}return H}const st=["0","1","2","3","4","5","6","7"],lt="https://t{s}.tianditu.gov.cn/",ma="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",pa=96188,qe="custom-xyz",Zt="cesium_custom_xyz_basemap_url",ga="cesium_tdt_label_layer_visible",Qt="cesium_tdt_boundary_layer_visible",Jt="cesium_tdt_text_label_layer_visible",en="cesium_osm_buildings_visible",tn="cesium_google_photorealistic_3d_tiles_visible",nn=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"},{value:qe,label:"自定义 XYZ",description:"用户输入的 XYZ 瓦片 URL"}],rn=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function va({getViewer:e,getCesium:t,message:n,backendBaseUrl:i,tiandituToken:h,cesiumIonToken:u}){let d=null,x=null,M=null,T=null,E=0,A=null,H=null,p=0,y=0,v=[];const l=()=>an(h),_=()=>an(u),r=[],c=Y([]),f=new Map,L=new Map,C=new Map,P=new Map,U=Y("tianditu"),V=Y("tianditu"),K=Y(ha(Zt,"")),J=et(ga,!0),te=Y(et(Qt,J)),$=Y(et(Jt,J)),le=Y(et(en,!1)),ue=Y(et(tn,!1)),ye=xe(()=>[...nn.map(a=>a.value!==qe?a:{...a,description:K.value?K.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!K.value}),...c.value]),Le=xe(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:te.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:$.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:le.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:ue.value}]);_e(U,a=>{!(e!=null&&e())||!(t!=null&&t())||s(a)}),_e(K,a=>{fa(Zt,a)}),_e(V,async a=>{!(e!=null&&e())||!(t!=null&&t())||await N(a)}),_e(te,a=>{ut(Qt,a),we()}),_e($,a=>{ut(Jt,a),we()}),_e(le,a=>{ut(en,a),S()}),_e(ue,a=>{ut(tn,a),z()});function k(){const a=t==null?void 0:t();if(!a)return[];f.clear(),L.clear();const g=nn.map(D=>{const j=new a.ProviderViewModel({name:D.label,tooltip:ba(D),category:"项目底图",iconUrl:ln(D.value==="google"?"#5ea1ff":D.value===qe?"#f59e0b":"#37d67a",D.value==="google"?"G":D.value===qe?"XY":"TD"),creationFunction:()=>W(D.value)});return f.set(D.value,j),L.set(j,D.value),j}),R=Pe();return c.value=R.map((D,j)=>{const Q=String((D==null?void 0:D.name)||`官方底图 ${j+1}`).trim(),fe=wa(Q,j);return f.set(fe,D),L.set(D,fe),{value:fe,label:`官方 · ${Q}`,description:String((D==null?void 0:D.tooltip)||Q),source:"official"}}),[...g,...R]}function I(){const a=t==null?void 0:t();return a?(C.clear(),P.clear(),rn.map(g=>{const R=new a.ProviderViewModel({name:g.label,tooltip:g.description||g.label,category:"项目地形",iconUrl:ln(ya(g.value),xa(g.value)),creationFunction:()=>oe(g.value)});return C.set(g.value,R),P.set(R,g.value),R})):[]}function F(a=[]){return f.get(U.value)||a[0]}function me(a=[]){return C.get(V.value)||a[0]}function Pe(){const a=t==null?void 0:t();if(typeof(a==null?void 0:a.createDefaultImageryProviderViewModels)!="function")return[];try{return a.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function W(a){return a==="google"?Oe():a===qe?ze():ce()}function ce(){const a=t==null?void 0:t();return[new a.UrlTemplateImageryProvider({url:`${lt}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${l()}`,subdomains:st,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})]}function Oe(){const a=t==null?void 0:t();return[new a.UrlTemplateImageryProvider({url:`${i}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20})]}function ze(){const a=t==null?void 0:t(),g=sn(K.value);return g.valid?[new a.UrlTemplateImageryProvider({url:g.url,subdomains:g.subdomains,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(n.warning(g.message,{closable:!0}),ce())}function Ze(){const a=t==null?void 0:t();return new a.UrlTemplateImageryProvider({url:`${lt}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${l()}`,subdomains:st,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:10})}function Ve(){const a=t==null?void 0:t();return new a.UrlTemplateImageryProvider({url:`${lt}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${l()}`,subdomains:st,tilingScheme:new a.WebMercatorTilingScheme,maximumLevel:18})}function Ye(){var be,Se,He,at,ot;Ae();const a=t==null?void 0:t(),g=(Se=(be=e==null?void 0:e())==null?void 0:be.baseLayerPicker)==null?void 0:Se.viewModel;if(!g||!((He=a==null?void 0:a.knockout)!=null&&He.getObservable))return;const R=a.knockout.getObservable(g,"selectedImagery"),D=a.knockout.getObservable(g,"selectedTerrain"),j=[],Q=(at=R==null?void 0:R.subscribe)==null?void 0:at.call(R,Je=>{const Ce=L.get(Je);Ce&&(U.value!==Ce&&(U.value=Ce),Te())}),fe=(ot=D==null?void 0:D.subscribe)==null?void 0:ot.call(D,Je=>{const Ce=P.get(Je);Ce&&(V.value!==Ce&&(V.value=Ce),B(Ce))});Q&&j.push(Q),fe&&j.push(fe),v=j}function Ae(){v.forEach(a=>{var g;return(g=a==null?void 0:a.dispose)==null?void 0:g.call(a)}),v=[]}function Be(){return Te(),!0}function Re(){const a=e==null?void 0:e();if(a!=null&&a.imageryLayers)for(;r.length;){const g=r.pop();try{a.imageryLayers.remove(g,!0)}catch{}}}function Te(){var a,g,R;we(),S(),z(),(R=(g=(a=e==null?void 0:e())==null?void 0:a.scene)==null?void 0:g.requestRender)==null||R.call(g)}function we(){var g,R;const a=e==null?void 0:e();!a||!(t!=null&&t())||(te.value?je():ke(),$.value?De():b(),(R=(g=a.scene).requestRender)==null||R.call(g))}function je(){var g,R,D,j;const a=e==null?void 0:e();if(!(a!=null&&a.imageryLayers)||d)return d&&((R=(g=a==null?void 0:a.imageryLayers)==null?void 0:g.raiseToTop)==null||R.call(g,d)),d;try{return d=a.imageryLayers.addImageryProvider(Ze()),(j=(D=a.imageryLayers).raiseToTop)==null||j.call(D,d),d}catch(Q){return n.error("天地图国界线图层加载失败",Q),null}}function De(){var g,R,D,j;const a=e==null?void 0:e();if(!(a!=null&&a.imageryLayers)||x)return x&&((R=(g=a==null?void 0:a.imageryLayers)==null?void 0:g.raiseToTop)==null||R.call(g,x)),x;try{return x=a.imageryLayers.addImageryProvider(Ve()),(j=(D=a.imageryLayers).raiseToTop)==null||j.call(D,x),x}catch(Q){return n.error("天地图文字标注图层加载失败",Q),null}}function ke(){const a=e==null?void 0:e();if(!(!d||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(d,!0)}catch{}d=null}}function b(){const a=e==null?void 0:e();if(!(!x||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(x,!0)}catch{}x=null}}async function S(){var g,R,D;const a=e==null?void 0:e();!((g=a==null?void 0:a.scene)!=null&&g.primitives)||!(t!=null&&t())||(le.value?await ae():ee(),(D=(R=a.scene).requestRender)==null||D.call(R))}async function z(){var g,R,D;const a=e==null?void 0:e();!((g=a==null?void 0:a.scene)!=null&&g.primitives)||!(t!=null&&t())||(ue.value?await G():X(),(D=(R=a.scene).requestRender)==null||D.call(R))}async function G(){var D,j,Q;const a=e==null?void 0:e(),g=t==null?void 0:t();if(!((D=a==null?void 0:a.scene)!=null&&D.primitives))return null;if(A)return a.scene.globe.show=!1,A;if(H)return H;if(typeof(g==null?void 0:g.createGooglePhotorealistic3DTileset)!="function")return n.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),ue.value=!1,null;const R=++p;pt(g,_()),H=g.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const fe=await H;return R!==p||!ue.value?(on(fe),null):(A=a.scene.primitives.add(fe),a.scene.globe.show=!1,a.scene.skyAtmosphere.show=!0,(Q=(j=a.scene).requestRender)==null||Q.call(j),A)}catch(fe){return R!==p||(ue.value=!1,n.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),n.error("Google Photorealistic 3D Tiles 初始化失败",fe)),null}finally{R===p&&(H=null)}}function X(){var g,R,D;const a=e==null?void 0:e();if(p+=1,H=null,!A||!((g=a==null?void 0:a.scene)!=null&&g.primitives)){(R=a==null?void 0:a.scene)!=null&&R.globe&&(a.scene.globe.show=!0);return}try{a.scene.primitives.remove(A)}catch{}A=null,(D=a==null?void 0:a.scene)!=null&&D.globe&&(a.scene.globe.show=!0)}async function ae(){var D,j,Q,fe;const a=e==null?void 0:e(),g=t==null?void 0:t();if(!((D=a==null?void 0:a.scene)!=null&&D.primitives)||M)return M;if(T)return T;if(typeof((j=g==null?void 0:g.Cesium3DTileset)==null?void 0:j.fromIonAssetId)!="function"&&typeof(g==null?void 0:g.createOsmBuildingsAsync)!="function")return n.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),le.value=!1,null;const R=++E;pt(g,_()),await o(),T=_a(g,{maximumScreenSpaceError:8});try{const be=await T;return R!==E||!le.value?(on(be),null):(M=a.scene.primitives.add(be),(fe=(Q=a.scene).requestRender)==null||fe.call(Q),M)}catch(be){return R!==E||(le.value=!1,n.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),n.error("Cesium OSM 建筑图层初始化失败",be)),null}finally{R===E&&(T=null)}}function ee(){var g,R,D;const a=e==null?void 0:e();if(E+=1,T=null,!(!M||!((g=a==null?void 0:a.scene)!=null&&g.primitives))){try{a.scene.primitives.remove(M)}catch{}M=null,(D=(R=a.scene).requestRender)==null||D.call(R)}}async function o(){if(V.value==="cesiumWorld")return!0;V.value="cesiumWorld";const a=await N("cesiumWorld");return a||n.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),a}function s(a,g={}){var Q,fe,be;const R=e==null?void 0:e();if(!R||!(t!=null&&t()))return!1;const D=(Q=R.baseLayerPicker)==null?void 0:Q.viewModel,j=f.get(a);if(D&&j){if(Re(),g.forceReload&&D.selectedImagery===j){const Se=f.get("tianditu");Se&&Se!==j&&(D.selectedImagery=Se)}return D.selectedImagery!==j&&(D.selectedImagery=j),Te(),!0}try{return Re(),W(a).forEach(He=>{r.push(R.imageryLayers.addImageryProvider(He))}),we(),(be=(fe=R.scene).requestRender)==null||be.call(fe),!0}catch(Se){return n.error("地图源切换失败",Se),!1}}function w(){return N(V.value)}async function N(a){var be,Se,He,at,ot,Je,Ce,Ct,Rt,Dt,kt;const g=e==null?void 0:e(),R=t==null?void 0:t();if(!g||!R)return!1;const D=(be=g.baseLayerPicker)==null?void 0:be.viewModel,j=C.get(a);if(D&&j)return D.selectedTerrain!==j&&(D.selectedTerrain=j),B(a),(He=(Se=g.scene).requestRender)==null||He.call(Se),!0;const Q=++y;if(a==="ellipsoid")return g.terrainProvider=new R.EllipsoidTerrainProvider,B(a),(ot=(at=g.scene).requestRender)==null||ot.call(at),!0;if(a==="cesiumWorld")try{const Ue=await de();return Q!==y?!1:(g.terrainProvider=Ue,B(a),(Ce=(Je=g.scene).requestRender)==null||Ce.call(Je),!0)}catch(Ue){return Q!==y||(g.terrainProvider=new R.EllipsoidTerrainProvider,B("ellipsoid"),n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",Ue)),!1}if(a==="arcgisWorld")try{const Ue=await he();return Q!==y?!1:(g.terrainProvider=Ue,B(a),(Rt=(Ct=g.scene).requestRender)==null||Rt.call(Ct),!0)}catch(Ue){return Q!==y||(g.terrainProvider=new R.EllipsoidTerrainProvider,B("ellipsoid"),n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",Ue)),!1}const fe=Kt(R);try{return g.terrainProvider=new fe({url:`${lt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:st,token:l()}),B(a),(kt=(Dt=g.scene).requestRender)==null||kt.call(Dt),!0}catch(Ue){return g.terrainProvider=new R.EllipsoidTerrainProvider,B("ellipsoid"),n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",Ue),!1}}function B(a){var R;const g=e==null?void 0:e();(R=g==null?void 0:g.scene)!=null&&R.globe&&(g.scene.globe.depthTestAgainstTerrain=a!=="ellipsoid")}function oe(a){const g=t==null?void 0:t();if(a==="ellipsoid")return new g.EllipsoidTerrainProvider;if(a==="cesiumWorld")return de().catch(D=>(n.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("Cesium 世界地形初始化失败",D),Ie(a,"ellipsoid"),new g.EllipsoidTerrainProvider));if(a==="arcgisWorld")return he().catch(D=>(n.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),n.error("ArcGIS 世界地形初始化失败",D),Ie(a,"ellipsoid"),new g.EllipsoidTerrainProvider));const R=Kt(g);try{return new R({url:`${lt}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:st,token:l()})}catch(D){return n.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),n.error("官方地形初始化失败",D),new g.EllipsoidTerrainProvider}}async function de(){var R,D;const a=t==null?void 0:t();pt(a,_());const g={requestWaterMask:!1,requestVertexNormals:!0};if(typeof a.createWorldTerrainAsync=="function")return a.createWorldTerrainAsync(g);if(typeof a.createWorldTerrain=="function")return a.createWorldTerrain(g);if(typeof((R=a.CesiumTerrainProvider)==null?void 0:R.fromIonAssetId)=="function")return a.CesiumTerrainProvider.fromIonAssetId(1,g);if((D=a.IonResource)!=null&&D.fromAssetId&&a.CesiumTerrainProvider){const j=await a.IonResource.fromAssetId(1);return new a.CesiumTerrainProvider({url:j,...g})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function he(){var g;const a=t==null?void 0:t();if(typeof((g=a==null?void 0:a.ArcGISTiledElevationTerrainProvider)==null?void 0:g.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return a.ArcGISTiledElevationTerrainProvider.fromUrl(ma)}function Ie(a,g){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{V.value===a&&(V.value=g)},0)}function Ee({overlayId:a,value:g}){if(a==="tdt-boundaries"){te.value=!!g;return}if(a==="tdt-text-labels"){$.value=!!g;return}if(a==="cesium-osm-buildings"){le.value=!!g;return}a==="google-photorealistic-3d-tiles"&&(ue.value=!!g)}function Qe({url:a}){const g=String(a||"").trim(),R=sn(g);if(!R.valid){n.warning(R.message,{closable:!0});return}if(K.value=g,U.value===qe){s(qe,{forceReload:!0})&&n.success("已加载自定义 XYZ 图源");return}U.value=qe,n.success("已切换到自定义 XYZ 图源")}function it(){Re(),ke(),b(),ee(),X(),Ae()}return{activeBasemap:U,activeTerrain:V,customXyzBasemapUrl:K,basemapOptions:ye,terrainOptions:rn,overlayOptions:Le,createImageryProviderViewModels:k,createTerrainProviderViewModels:I,getSelectedImageryProviderViewModel:F,getSelectedTerrainProviderViewModel:me,bindLayerPickerStateSync:Ye,addBaseImageryLayers:Be,initCustomTerrain:w,applyBasemap:s,applyTerrain:N,handleOverlayToggle:Ee,handleCustomBasemapSubmit:Qe,cleanupLayers:it}}function ya(e){return e==="ellipsoid"?"#a3a3a3":e==="arcgisWorld"?"#5ea1ff":"#d0a449"}function xa(e){return e==="cesiumWorld"?"CW":e==="arcgisWorld"?"AG":e==="ellipsoid"?"EL":"TE"}function an(e){return typeof e=="function"?String(e()||"").trim():e&&typeof e=="object"&&"value"in e?String(e.value||"").trim():String(e||"").trim()}function on(e){var t,n;if(!(!e||(t=e.isDestroyed)!=null&&t.call(e)))try{(n=e.destroy)==null||n.call(e)}catch{}}async function _a(e,t={}){var n;if(typeof((n=e==null?void 0:e.Cesium3DTileset)==null?void 0:n.fromIonAssetId)=="function"){const i=await e.Cesium3DTileset.fromIonAssetId(pa,t);return!i.style&&typeof e.Cesium3DTileStyle=="function"&&(i.style=new e.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),i}return e.createOsmBuildingsAsync(t)}function ba(e){return e.value!==qe?e.description||e.label:`${e.description||e.label}
支持 https://server/{z}/{x}/{y}.png`}function sn(e){const t=String(e||"").trim();if(!t)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let n=t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const i=n.match(/\{([a-z0-9])-([a-z0-9])\}/i);let h=[];return i?(h=Sa(i[1],i[2]),n=n.replace(i[0],"{s}")):/\{s\}/i.test(n)&&(h=["a","b","c"]),!/\{z\}/.test(n)||!/\{x\}/.test(n)||!/\{y\}/.test(n)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:n,subdomains:h}:Ta(n)?{valid:!0,message:"",url:n,subdomains:h}:{valid:!1,message:"URL 格式不合法",url:n,subdomains:h}}function Sa(e,t){const n=String(e||"").charCodeAt(0),i=String(t||"").charCodeAt(0);if(!Number.isFinite(n)||!Number.isFinite(i))return[];const h=n<=i?1:-1,u=[];for(let d=n;h>0?d<=i:d>=i;d+=h)u.push(String.fromCharCode(d));return u}function Ta(e){if(/^(https?:)?\/\//i.test(e)||e.startsWith("/"))return!0;try{const t=typeof window<"u"?window.location.origin:"http://localhost",n=new URL(e,t);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}function wa(e,t){const n=e.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${t}_${n||"basemap"}`}function ln(e,t){const n=String(t||"").replace(/[<>&"']/g,"").slice(0,2),i=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${e}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${n}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(i)}`}function Ma({getViewer:e,getCesium:t,message:n}){function i(d){const x=e==null?void 0:e(),M=t==null?void 0:t();if(!x||!M)return;const T=typeof d=="number"?d:2;x.camera.flyTo({destination:M.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-M.Math.PI_OVER_TWO,roll:0},duration:T})}function h(){const d=e==null?void 0:e(),x=t==null?void 0:t();!d||!x||d.camera.flyTo({destination:x.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:x.Math.toRadians(0),pitch:x.Math.toRadians(-25),roll:0},duration:3})}async function u(){const d=e==null?void 0:e(),x=t==null?void 0:t();if(!(!d||!x))try{const M=await x.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");d.scene.primitives.add(M),d.flyTo(M,{duration:3,offset:new x.HeadingPitchRange(x.Math.toRadians(0),x.Math.toRadians(-25),M.boundingSphere.radius*2.5)})}catch(M){n.error(`加载模型失败: ${M}`),n.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:i,flyToEverest:h,loadCustomTileset:u}}const La="cesium_tool_panel_open";function Fa({fluidPanelRef:e,sceneActions:t={},wind:n={},panelStorageKey:i=La}={}){const h=Y(et(i,!0)),u=Y({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),d=Y({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),x=Y({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),M=xe(()=>{var p,y,v,l,_,r;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:u.value.atmosphere||u.value.fog?"启用":"关闭",statusTone:u.value.atmosphere||u.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:u.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:u.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:u.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:u.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(p=n.wind2D)!=null&&p.value?"已加载":"未加载",statusTone:(y=n.wind2D)!=null&&y.value?"success":"neutral",actions:[{id:"load",label:(v=n.wind2D)!=null&&v.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((l=n.wind2D)!=null&&l.value)}],controls:Pa((_=n.windParams)==null?void 0:_.value,!!((r=n.wind2D)!=null&&r.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:x.value.isPicking?"等待选点":x.value.hasFluid?"已创建":"未创建",statusTone:x.value.isPicking?"warning":x.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:x.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:x.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!x.value.hasFluid&&!x.value.isPicking}],controls:Aa(d.value,x.value)}]});_e(h,p=>{ut(i,p)});function T({moduleId:p,actionId:y}){var l,_;(_=(l={scene:{home:()=>{var r;return(r=t.flyToHome)==null?void 0:r.call(t)},everest:t.flyToEverest,tileset:t.loadCustomTileset},wind:{load:n.loadSimulatedWind,clear:n.clearWind2D},fluid:{pick:()=>{var r,c;return(c=(r=e==null?void 0:e.value)==null?void 0:r.startPickHeightMap)==null?void 0:c.call(r)},clear:()=>{var r,c;return(c=(r=e==null?void 0:e.value)==null?void 0:r.clearFluid)==null?void 0:c.call(r)}}}[p])==null?void 0:l[y])==null||_.call(l)}function E({moduleId:p,controlId:y,value:v}){var l,_;if(p==="effects"&&y in u.value){u.value={...u.value,[y]:!!v};return}if(p==="wind"&&y in(((l=n.windParams)==null?void 0:l.value)||{})){(_=n.setWindParam)==null||_.call(n,y,v);return}p==="fluid"&&y in d.value&&(d.value={...d.value,[y]:y==="waterColor"?v:Number(v)})}function A(p){const y=rt(p==null?void 0:p.waterLevel),v=rt(p==null?void 0:p.waterLevelMin),l=rt(p==null?void 0:p.waterLevelMax);x.value={isPicking:!!(p!=null&&p.isPicking),hasFluid:!!(p!=null&&p.hasFluid),selectedText:(p==null?void 0:p.selectedText)||"",waterLevel:y,waterLevelMin:v,waterLevelMax:l},y!==null&&(d.value={...d.value,waterLevel:y})}function H(){var p;(p=n.clearWind2D)==null||p.call(n)}return{toolPanelOpen:h,advancedEffectControls:u,fluidParams:d,fluidState:x,toolModules:M,handleToolAction:T,handleToolControlChange:E,handleFluidStateChange:A,cleanupTools:H}}function Pa(e={},t){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:e.speedFactor??1,displayValue:Number(e.speedFactor??1).toFixed(1),disabled:t},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:e.arrowLength??15e3,displayValue:`${Math.round((e.arrowLength??15e3)/1e3)} km`,disabled:t},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:e.trailLength??2e4,displayValue:`${Math.round((e.trailLength??2e4)/1e3)} km`,disabled:t},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:e.alphaFactor??1,displayValue:Number(e.alphaFactor??1).toFixed(2),disabled:t}]}function Aa(e,t={}){const n=rt(t.waterLevelMin),i=rt(t.waterLevelMax),h=n!==null&&i!==null,u=h?Math.min(n,i):0,d=h?Math.max(n,i):0,x=rt(e.waterLevel),M=h?Ea(x??u,u,d):0,T=h?Math.max((d-u)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:e.threshold,displayValue:Number(e.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:e.blend,displayValue:Number(e.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:e.lightStrength,displayValue:Number(e.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:u,max:d,step:T,value:M,displayValue:h?`${Ca(M)} m`:"先捕捉",disabled:!h,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:e.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function rt(e){const t=Number(e);return Number.isFinite(t)?t:null}function Ea(e,t,n){return Math.max(t,Math.min(n,e))}function Ca(e){const t=Math.abs(e);return t>=1e3?e.toFixed(1):t>=10?e.toFixed(2):e.toFixed(3)}const Lt=-90,Et=1,gn=5e7;function Ra({getViewer:e,getCesium:t,onCameraViewSync:n}={}){const i=Ln(),h=Fn();let u=null;function d(v){return Gn(v,i.query)}function x(){const v=String(d(Ot)||"").trim(),l=tt(d("lng")),_=tt(d("lat")),r=Da(d("z")),c=Un(v);if(c&&l!==null&&_!==null&&r!==null){const L={lng:l,lat:_,height:r,...c};if(cn(L))return L}const f=Wn(v);return cn(f)?f:l===null||_===null||r===null||l<-180||l>180||_<-90||_>90?null:{lng:l,lat:_,height:r,heading:tt(d("heading"))??0,pitch:tt(d("pitch"))??Lt,roll:tt(d("roll"))??0}}function M({duration:v=0}={}){const l=e==null?void 0:e(),_=t==null?void 0:t(),r=x();if(!(l!=null&&l.camera)||!_||!r)return!1;const c=_.Cartesian3.fromDegrees(r.lng,r.lat,r.height),f={heading:wt(_,r.heading??0),pitch:wt(_,ka(r.pitch??Lt)),roll:wt(_,r.roll??0)};return Number(v)>0?(l.camera.flyTo({destination:c,orientation:f,duration:Number(v)}),!0):(l.camera.setView({destination:c,orientation:f}),!0)}function T({initialSync:v=!1}={}){const l=H();!(l!=null&&l.moveEnd)||u||(u=l.moveEnd.addEventListener(()=>{A()}),v&&A())}function E(){typeof u=="function"&&u(),u=null}function A(){const v=t==null?void 0:t(),l=H();if(!v||!(l!=null&&l.position))return;const _=v.Cartographic.fromCartesian(l.position);if(!_)return;const r=v.Math.toDegrees(_.longitude),c=v.Math.toDegrees(_.latitude),f=Number(_.height),L=v.Math.toDegrees(Number(l.heading)||0),C=v.Math.toDegrees(Number(l.pitch)||0),P=v.Math.toDegrees(Number(l.roll)||0);if(!Number.isFinite(r)||!Number.isFinite(c)||!Number.isFinite(f))return;const U=Math.max(Et,f),V=Hn({heading:L,pitch:C,roll:P});if(!V||V==="0")return;const K={view:Nt,camera:{lng:r,lat:c,height:U,heading:L,pitch:C,roll:P}};y({view:Nt,[Ot]:V,lng:un(r,6),lat:un(c,6),z:Ia(U)}),n==null||n(K)}function H(){var l;const v=e==null?void 0:e();return(v==null?void 0:v.camera)||((l=v==null?void 0:v.scene)==null?void 0:l.camera)||null}function p(v,l){const _=Object.keys(v).filter(c=>v[c]!==void 0&&v[c]!==null&&v[c]!==""),r=Object.keys(l).filter(c=>l[c]!==void 0&&l[c]!==null&&l[c]!=="");return _.length!==r.length?!1:r.every(c=>String(v[c]??"")===String(l[c]??""))}function y(v){const l={...qt(i.query),...v};xn.forEach(r=>{r in v||delete l[r]}),Object.keys(l).forEach(r=>{const c=l[r];c==null||c===""?delete l[r]:l[r]=String(c)});const _=qt(i.query);p(_,l)||h.replace({path:i.path||"/home",query:l}).catch(()=>{})}return{restoreCameraFromUrl:M,bindCameraViewSync:T,cleanupCameraViewSync:E}}function tt(e){if(e==null||typeof e=="string"&&e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Da(e){const t=tt(e);return t===null||t<Et||t>gn?null:t}function cn(e){if(!e)return!1;const t=Number(e.lng),n=Number(e.lat),i=Number(e.height),h=Number(e.heading),u=Number(e.pitch),d=Number(e.roll);return Number.isFinite(t)&&t>=-180&&t<=180&&Number.isFinite(n)&&n>=-90&&n<=90&&Number.isFinite(i)&&i>=Et&&i<=gn&&Number.isFinite(h)&&Number.isFinite(u)&&u>=-90&&u<=90&&Number.isFinite(d)}function ka(e){const t=Number(e);return Number.isFinite(t)?Math.max(-90,Math.min(90,t)):Lt}function un(e,t){const n=Number(e);return Number.isFinite(n)?n.toFixed(t):null}function Ia(e){const t=Number(e);return Number.isFinite(t)?t.toFixed(2):null}function wt(e,t){const n=Number(t);return Number.isFinite(n)?e.Math.toRadians(n):0}const ge={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Na=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Oa=new Float32Array([0,0,1,0,1,1,0,1]),za=new Uint16Array([0,1,2,0,2,3]);function Ke(e,t,n){return Math.max(t,Math.min(n,e))}function ne(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Ba(e,t){const n=t.getParameter(t.MAX_TEXTURE_SIZE),i=Math.min(2048,n),h=Math.max(1,Math.floor(e)),u=Math.sqrt(h),d=Math.log2(u),x=Number.isFinite(d)?Math.round(d):4;let M=Math.pow(2,x);return M=Ke(M,16,i),M}function Ha(e){const t=e*e,n=new Float32Array(t*4);for(let i=0;i<t;i+=1){const h=i*4;n[h]=Math.random(),n[h+1]=Math.random(),n[h+2]=Math.random(),n[h+3]=Math.random()}return n}function Ua(e){return new Float32Array(e*e*4)}function Wa(e,t,n,i,h){const u=t.createTexture();if(!u)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,u),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,i,0,t.RGBA,t.FLOAT,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let d=!1;return{_context:e,_texture:u,_target:t.TEXTURE_2D,_width:n,_height:i,destroy(){d||(t.deleteTexture(u),d=!0)}}}class Ga{constructor(t,n={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const i={...ge,...n};this.speedFactor=ne(i.speedFactor,ge.speedFactor),this.cullSpeedMin=ne(i.cullSpeedMin,ge.cullSpeedMin),this.cullSpeedMax=ne(i.cullSpeedMax,ge.cullSpeedMax),this.windSpeedMin=ne(i.windSpeedMin,ge.windSpeedMin),this.windSpeedMax=ne(i.windSpeedMax,ge.windSpeedMax),this.arrowLength=ne(i.arrowLength,ge.arrowLength),this.trailLength=ne(i.trailLength,ge.trailLength),this.decaySpeed=ne(i.decaySpeed,ge.decaySpeed),this.alphaFactor=ne(i.alphaFactor,ge.alphaFactor),this.maxWindSpeed=ne(i.maxWindSpeed,ge.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=ne(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=ne(t.longitude,NaN),i=ne(t.latitude,NaN),h=Array.isArray(t.altitude)?t.altitude:[],u=Array.isArray(t.sizeMesh)?t.sizeMesh:[],d=Array.isArray(t.count)?t.count:[],x=Array.isArray(t.hspeed)?t.hspeed:[],M=Array.isArray(t.hdir)?t.hdir:[],T=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(i))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const E=h.length;if(E<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(u.length!==E||d.length!==E)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const A=d.map(P=>Math.max(1,Math.floor(ne(P,1)))),H=u.map(P=>Math.max(1,ne(P,1))),p=h.map(P=>ne(P,0)),y=A.reduce((P,U)=>P+U*U,0);if(x.length<y||M.length<y||T.length<y)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=E,this.visibleLayerMin=0,this.visibleLayerMax=E-1,this._altitudes=p.slice(),this._maxNx=Math.max(...A),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*E;const v=new Float32Array(this._atlasWidth*this._atlasHeight*4);let l=0;for(let P=0;P<E;P+=1){const U=A[P],V=U;for(let K=0;K<V;K+=1)for(let J=0;J<U;J+=1){const te=l+K*U+J,$=((P*this._maxNy+K)*this._atlasWidth+J)*4,le=Number(x[te]),ue=Number(M[te]),ye=Number(T[te]);if(!(Number.isFinite(le)&&Number.isFinite(ue))){v[$]=0,v[$+1]=0,v[$+2]=0,v[$+3]=0;continue}const k=ue*Math.PI/180;v[$]=le*Math.sin(k),v[$+1]=le*Math.cos(k),v[$+2]=Number.isFinite(ye)?ye:0,v[$+3]=1}l+=U*V}this._createOrReplaceWindAtlasTexture(v);const _=Math.max(...H),r=this._maxNx*_,c=r/2/111320,f=i*Math.PI/180,L=Math.max(1e-6,Math.abs(Math.cos(f))),C=r/2/(111320*L);this._bounds={minLon:n-C,maxLon:n+C,minLat:i-c,maxLat:i+c,minHeight:Math.min(...p),maxHeight:Math.max(...p)},this._dataPointCount=y,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const n=Math.max(1,Math.floor(ne(t,1))),i=Ba(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&i===this._particleTextureSize||(this._particleTextureSize=i,this._particleCount=i*i,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const n=Ke(ne(t,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const i=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(i)}setBounds(t,n,i,h){const u=ne(t,NaN),d=ne(n,NaN),x=ne(i,NaN),M=ne(h,NaN);if(!Number.isFinite(u)||!Number.isFinite(d)||!Number.isFinite(x)||!Number.isFinite(M))return;const T=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};T.minLon=Math.min(u,d),T.maxLon=Math.max(u,d),T.minLat=Math.min(x,M),T.maxLat=Math.max(x,M),this._bounds=T,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const h=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[h],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=h,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Wa(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,n=this._particleTextureSize,i=Ha(n),h=Ua(n);for(let u=0;u<2;u+=1){this._particlePositionTextures[u]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:i},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[u]=new t.Texture({context:this._context,width:n,height:n,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:h},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[u]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[u],this._velocityTextures[u]],destroyAttachments:!1});const d=this._framebuffers[u]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,d),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,n=t.Buffer.createVertexBuffer({context:this._context,typedArray:Na,usage:t.BufferUsage.STATIC_DRAW}),i=t.Buffer.createVertexBuffer({context:this._context,typedArray:Oa,usage:t.BufferUsage.STATIC_DRAW}),h=t.Buffer.createIndexBuffer({context:this._context,typedArray:za,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:i,componentsPerAttribute:2}],indexBuffer:h})}_buildParticleVertexArray(){const t=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let i=0;i<n.length;i+=1)n[i]=i;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,n=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:i,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,n=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,n=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=Ke(Math.floor(ne(this.visibleLayerMin,0)),0,this._layerCount-1),n=Ke(Math.floor(ne(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:n}}_normalizeSpeedRange(t,n){const i=Math.max(1e-4,ne(this.maxWindSpeed,ge.maxWindSpeed)),h=Ke(ne(t,0)/i,0,1),u=Ke(ne(n,i)/i,0,1);return{min:Math.min(h,u),max:Math.max(h,u)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>ne(this.speedFactor,ge.speedFactor),maxWindSpeed:()=>Math.max(1e-4,ne(this.maxWindSpeed,ge.maxWindSpeed)),decaySpeed:()=>Ke(ne(this.decaySpeed,ge.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>ne(this.arrowLength,ge.arrowLength),trailLength:()=>ne(this.trailLength,ge.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Ke(ne(this.alphaFactor,ge.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function $a({getViewer:e,getCesium:t,message:n}){const i=Y(null),h=Y({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function u(){var E,A;const T=e==null?void 0:e();if(i.value){try{(A=(E=T==null?void 0:T.scene)==null?void 0:E.primitives)==null||A.remove(i.value)}catch{}i.value.destroy(),i.value=null}}function d(){const T=e==null?void 0:e(),E=t==null?void 0:t();if(!T||!E){n.error("Cesium 尚未初始化");return}u();const A=qa(E);i.value=new Ga(T,{maxWindSpeed:20,cesium:E,speedFactor:h.value.speedFactor,arrowLength:h.value.arrowLength,trailLength:h.value.trailLength,alphaFactor:h.value.alphaFactor}),i.value.loadData(A),T.scene.primitives.add(i.value),i.value.flyTo(),n.success("风场加载成功，可通过下方滑块调节样式")}function x(){i.value&&(i.value.speedFactor=h.value.speedFactor,i.value.arrowLength=h.value.arrowLength,i.value.trailLength=h.value.trailLength,i.value.alphaFactor=h.value.alphaFactor)}function M(T,E){return T in h.value?(h.value={...h.value,[T]:Number(E)},x(),!0):!1}return{wind2D:i,windParams:h,clearWind2D:u,loadSimulatedWind:d,setWindParam:M}}function qa(e){const h=[0,2e3,5e3,1e4,15e3],u=[3e4,3e4,25e3,25e3,2e4],d=[30,30,25,25,20],x=d.reduce((H,p)=>H+p*p,0),M=new Array(x),T=new Array(x),E=new Array(x);let A=0;for(let H=0;H<5;H++){const p=d[H],y=d[H],v=u[H];for(let l=0;l<y;l++)for(let _=0;_<p;_++){const r=A+l*p+_,c=(_-p/2)*(v/111320),f=(l-y/2)*(v/111320/Math.cos(e.Math.toRadians(35))),C=Math.atan2(f,c)+Math.PI/2+.2*Math.sin(_*.5)*Math.cos(l*.5);T[r]=e.Math.toDegrees(C)%360;const P=Math.sqrt(c*c+f*f),V=Math.max(0,1-P/15);M[r]=(5+H*2)*V+2*Math.random(),E[r]=.5*Math.sin(_*.3)*Math.cos(l*.3)}A+=p*y}return{longitude:104,latitude:35,altitude:h,sizeMesh:u,count:d,hspeed:M,hdir:T,vspeed:E}}const Xa={key:3,class:"fps-chart-panel","aria-label":"实时帧率折线图"},Va={class:"fps-chart-head"},Ya={class:"fps-chart-title"},ja={class:"fps-chart",viewBox:"0 0 160 48",preserveAspectRatio:"none","aria-hidden":"true"},Ka=["points"],Za={class:"map-controls-group"},Qa={class:"mouse-position-content"},Ja={__name:"CesiumContainer",emits:["view-sync"],setup(e,{emit:t}){let n=null,i=null,h=!1;const u=Ft(),d=t,x=Y(!1),M=Y(null),T=Y(Sn()),E=Y(!0);function A(){E.value=!1}function H(){E.value=!0}const p=()=>i,y=()=>n||window.Cesium,v=()=>T.value.tiandituTk,l=()=>T.value.cesiumIonToken,_=va({getViewer:p,getCesium:y,message:u,backendBaseUrl:bn,tiandituToken:v,cesiumIonToken:l}),{activeBasemap:r,activeTerrain:c,customXyzBasemapUrl:f,basemapOptions:L,terrainOptions:C,overlayOptions:P,createImageryProviderViewModels:U,createTerrainProviderViewModels:V,getSelectedImageryProviderViewModel:K,getSelectedTerrainProviderViewModel:J,bindLayerPickerStateSync:te,addBaseImageryLayers:$,initCustomTerrain:le,handleOverlayToggle:ue,handleCustomBasemapSubmit:ye,cleanupLayers:Le}=_,{coordinateDisplay:k,setupInteractions:I,cleanupInteractions:F}=da({getViewer:p,getCesium:y}),{frameRateDisplay:me,frameRateLinePoints:Pe,setupFrameRateMonitor:W,cleanupFrameRateMonitor:ce}=ca({getViewer:p}),{installCreditHider:Oe,cleanupCreditHider:ze}=oa({getViewer:p}),{restoreCameraFromUrl:Ze,bindCameraViewSync:Ve,cleanupCameraViewSync:Ye}=Ra({getViewer:p,getCesium:y,onCameraViewSync:ee=>d("view-sync",ee)}),Ae=Ma({getViewer:p,getCesium:y,message:u}),{flyToHome:Be}=Ae,Re=$a({getViewer:p,getCesium:y,message:u}),{toolPanelOpen:Te,advancedEffectControls:we,fluidParams:je,toolModules:De,handleToolAction:ke,handleToolControlChange:b,handleFluidStateChange:S,cleanupTools:z}=Fa({fluidPanelRef:M,sceneActions:Ae,wind:Re});async function G(){h=!1,dn("正在初始化 3D 场景...");try{let ee=0,o=1;for(;ee<o;)try{if(T.value=await _n({silent:!1,force:ee>0}),o=Math.max(o,Array.isArray(T.value.tiandituTokens)?T.value.tiandituTokens.length:1,Array.isArray(T.value.cesiumIonTokens)?T.value.cesiumIonTokens.length:1,1),n=await ji({ionToken:l()}),h||!n||!document.getElementById("cesiumContainer"))return;ae(),I(),W();const s=$(),w=await le();if(h){X();return}if(x.value=!0,Ve({initialSync:!1}),s&&w){u.success("天地图基础影像与地形加载成功。");return}const N=s?{switched:!1}:vt("tianditu_tk"),B=w?{switched:!1}:vt("cesium_ion_token");if(!(N.switched||B.switched)){u.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}T.value=B.switched?B.tokens:N.tokens,X(),ee+=1,u.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(s){const w=vt("cesium_ion_token");if(!w.switched)throw s;T.value=w.tokens,X(),ee+=1,u.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}u.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(ee){u.error("Cesium 运行时加载失败",ee),u.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{hn()}}function X(){if(x.value=!1,Ye(),F(),ce(),Le(),ze(),!!i){try{i.destroy()}catch{}i=null}}function ae(){var w;const ee=typeof n.Map=="function"?n.Map:n.Viewer,o=U(),s=V();i=new ee("cesiumContainer",{baseLayerPicker:!0,geocoder:((w=n.IonGeocodeProviderType)==null?void 0:w.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:o,selectedImageryProviderViewModel:K(o),terrainProviderViewModels:s,selectedTerrainProviderViewModel:J(s),shouldAnimate:!0}),i.scene.globe.terrainExaggeration=1,i.scene.globe.terrainExaggerationRelativeHeight=0,ta(i,n),$n(i),Oe(),te(),Ze({duration:0})||Be(0)}return fn(()=>{G()}),mn(()=>{if(h=!0,x.value=!1,Ye(),F(),ce(),z(),Le(),ze(),i){try{i.destroy()}catch{}i=null}}),(ee,o)=>(O(),q(Fe,null,[o[10]||(o[10]=m("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),x.value?(O(),Xe(nt(cr),{key:0,headless:"","get-viewer":p,"get-cesium":y,controls:Z(we)},null,8,["controls"])):ie("",!0),x.value?(O(),Xe(nt(Xi),{key:1,ref_key:"fluidPanelRef",ref:M,headless:"","get-viewer":p,"get-cesium":y,params:Z(je),onStateChange:Z(S)},null,40,["params","onStateChange"])):ie("",!0),x.value?(O(),Xe(Mi,{key:2,open:Z(Te),"onUpdate:open":o[0]||(o[0]=s=>yt(Te)?Te.value=s:null),"active-basemap":Z(r),"onUpdate:activeBasemap":o[1]||(o[1]=s=>yt(r)?r.value=s:null),"active-terrain":Z(c),"onUpdate:activeTerrain":o[2]||(o[2]=s=>yt(c)?c.value=s:null),"basemap-options":Z(L),"terrain-options":Z(C),"overlay-options":Z(P),"custom-basemap-url":Z(f),modules:Z(De),onModuleAction:Z(ke),onControlChange:Z(b),onOverlayToggle:Z(ue),onCustomBasemapSubmit:Z(ye)},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):ie("",!0),x.value&&E.value?(O(),q("section",Xa,[m("div",Va,[m("div",Ya,[o[4]||(o[4]=m("span",null,"FPS",-1)),m("strong",null,se(Z(me)),1)]),m("button",{class:"fps-chart-close",type:"button","aria-label":"关闭 FPS 面板",title:"关闭 FPS 面板",onClick:A}," × ")]),(O(),q("svg",ja,[o[5]||(o[5]=m("line",{class:"fps-grid-line",x1:"0",y1:"12",x2:"160",y2:"12"},null,-1)),o[6]||(o[6]=m("line",{class:"fps-grid-line",x1:"0",y1:"24",x2:"160",y2:"24"},null,-1)),o[7]||(o[7]=m("line",{class:"fps-grid-line",x1:"0",y1:"36",x2:"160",y2:"36"},null,-1)),Z(Pe)?(O(),q("polyline",{key:0,class:"fps-line",points:Z(Pe)},null,8,Ka)):ie("",!0)]))])):x.value&&!E.value?(O(),q("button",{key:4,class:"fps-chart-toggle",type:"button","aria-label":"显示 FPS 面板",title:"显示 FPS 面板",onClick:H}," FPS ")):ie("",!0),m("div",Za,[m("div",Qa,se(Z(k)),1),o[9]||(o[9]=m("div",{class:"divider"},null,-1)),m("button",{class:"home-btn",title:"回到初始位置",onClick:o[3]||(o[3]=(...s)=>Z(Be)&&Z(Be)(...s))},[...o[8]||(o[8]=[m("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[m("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},fo=gt(Ja,[["__scopeId","data-v-2b43402a"]]);export{fo as default};
