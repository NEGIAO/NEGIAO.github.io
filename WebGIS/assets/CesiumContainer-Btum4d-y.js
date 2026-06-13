const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-DtnbiQTH.js","./vendor-echarts-all-bIcaucJq.js","./vendor-libs-C22iFKzE.js","./vendor-vue-CmuMwCC6.js","./vendor-jszip-C96CrfCN.js"])))=>i.map(i=>d[i]);
var Kt=Object.defineProperty;var Qt=(a,t,o)=>t in a?Kt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;var mt=(a,t,o)=>Qt(a,typeof t!="symbol"?t+"":t,o);import{_ as Ke,e as lt,K as Lt,J as Ft,I as Jt}from"./index-3fv-X-zr.js";import{_ as ei}from"./vendor-runtime-Dp1pzeXC.js";import{C as Et,o as Rt,w as Se,d as I,c as G,f as v,t as J,G as de,W as Ze,X as je,g as ee,r as K,P as ti,a as Ie,u as Te,F as xe,e as Pe,n as ge,x as Le,S as Xe,I as pt,q as _e,v as ii,H as We}from"./vendor-vue-CmuMwCC6.js";import{af as at,ag as nt,ah as ri,X as ai,e as gt,ac as vt,ai as yt,H as xt,aj as ni,T as _t,a2 as oi,ak as si,al as li,am as ci,an as ui,q as di,o as hi,ao as fi,ap as mi}from"./vendor-libs-C22iFKzE.js";import"./vendor-ol-all-BF0m1MzN.js";import"./vendor-geotiff-ChZXZpNw.js";import"./vendor-lerc-B7uDJLnU.js";import"./vendor-jszip-C96CrfCN.js";import"./vendor-proj4-Jlp8PM4D.js";import"./vendor-axios-Bdz_Fv8M.js";const pi={key:0,class:"advanced-effects-root"},gi={class:"effects-panel"},vi={class:"panel-head"},yi={class:"effect-switches"},xi={class:"switch-item"},_i={class:"switch-item"},bi={class:"switch-item"},wi={class:"switch-item"},Ti={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(a){const t=a,o=lt(),_=K(null),D=K(!1),b=K(!1),O=K(!1),V=K(!1),U=K(!1);let n=null,N=null,E=null,$=!1,B=null,F=null,L=null,T=null,C=null,e=null,r=null,i=null,c=!1,w=0,g=0,p=typeof performance<"u"?performance.now():Date.now();function z(){return L||(L=ei(()=>import("./cesiumFxRuntime-DtnbiQTH.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(h=>{var M;const d=(M=h==null?void 0:h.getCesiumFxEchartsRuntime)==null?void 0:M.call(h);if(!d)throw new Error("Cinematic FX 图表运行时加载失败");return F=d,d}).catch(h=>{throw L=null,h}),L)}async function x(){return F||z()}const u={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},s={hdr:null,bloom:null,sky:null};Et(()=>{le()}),Rt(()=>{R()}),Se(()=>t.controls,h=>{W(h||{})},{deep:!0,immediate:!0});function W(h){Object.prototype.hasOwnProperty.call(h,"fog")&&(D.value=!!h.fog),Object.prototype.hasOwnProperty.call(h,"hbao")&&(b.value=!!h.hbao),Object.prototype.hasOwnProperty.call(h,"tiltShift")&&(O.value=!!h.tiltShift),Object.prototype.hasOwnProperty.call(h,"atmosphere")&&(V.value=!!h.atmosphere)}function le(){let h=0;T=window.setInterval(async()=>{var k,Y;h+=1;const d=(k=t.getViewer)==null?void 0:k.call(t),M=((Y=t.getCesium)==null?void 0:Y.call(t))||window.Cesium;if(d&&M){clearInterval(T),T=null;try{P(d),Ne(d),re(d,M),he(d),o.success("高级视觉效果已启用。")}catch(Q){o.error("高级视觉效果初始化失败",Q),o.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}h>=150&&(clearInterval(T),T=null,o.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function P(h){var M,k,Y,Q,ne,pe;const d=h==null?void 0:h.scene;if(d){if(typeof d.highDynamicRange=="boolean"&&(s.hdr=d.highDynamicRange),(M=d.postProcessStages)!=null&&M.bloom){const ve=d.postProcessStages.bloom;s.bloom={enabled:!!ve.enabled,contrast:(k=ve.uniforms)==null?void 0:k.contrast,brightness:(Y=ve.uniforms)==null?void 0:Y.brightness,delta:(Q=ve.uniforms)==null?void 0:Q.delta,sigma:(ne=ve.uniforms)==null?void 0:ne.sigma,stepSize:(pe=ve.uniforms)==null?void 0:pe.stepSize}}d.skyAtmosphere&&(s.sky={hueShift:d.skyAtmosphere.hueShift,saturationShift:d.skyAtmosphere.saturationShift,brightnessShift:d.skyAtmosphere.brightnessShift})}}function re(h,d){var k;!((k=h==null?void 0:h.scene)!=null&&k.postProcessStages)||!(d!=null&&d.PostProcessStage)||($e(h,d),ue(h,d),te(h,d),V.value?fe(h,1200):Fe(h))}function Ne(h){var M;const d=h==null?void 0:h.scene;(M=d==null?void 0:d.renderError)!=null&&M.addEventListener&&(d.rethrowRenderErrors=!1,i=d.renderError.addEventListener((k,Y)=>{o.error("Cesium 渲染异常，已触发降级保护",Y),Ce(),c||(c=!0,o.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function Ce(){D.value=!1,O.value=!1,b.value=!1,V.value=!1,n&&(n.enabled=!1),N&&(N.enabled=!1),E&&(E.enabled=!1)}function $e(h,d){n||(n=new d.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new d.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),h.scene.postProcessStages.add(n),n.enabled=D.value)}function ue(h,d){var k,Y;const M=(k=h==null?void 0:h.scene)==null?void 0:k.postProcessStages;M&&(M.ambientOcclusion?(E=M.ambientOcclusion,$=!1):(Y=d==null?void 0:d.PostProcessStageLibrary)!=null&&Y.createAmbientOcclusionStage&&(E=d.PostProcessStageLibrary.createAmbientOcclusionStage(),M.add(E),$=!0),E&&(E.enabled=b.value,E.uniforms&&("intensity"in E.uniforms&&(E.uniforms.intensity=4.2),"bias"in E.uniforms&&(E.uniforms.bias=.08),"lengthCap"in E.uniforms&&(E.uniforms.lengthCap=.35),"stepSize"in E.uniforms&&(E.uniforms.stepSize=1.8),"frustumLength"in E.uniforms&&(E.uniforms.frustumLength=1200))))}function te(h,d){N||(N=new d.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),h.scene.postProcessStages.add(N),N.enabled=!1)}function he(h){const d=h==null?void 0:h.scene;d&&(r=d.preRender.addEventListener(()=>{var Q;const M=X(h),k=Number(((Q=h==null?void 0:h.camera)==null?void 0:Q.pitch)??-1.2);w+=1;const Y=typeof performance<"u"?performance.now():Date.now();if(Y-p>=1e3&&(g=Math.round(w*1e3/(Y-p)),w=0,p=Y),n&&(n.enabled=D.value,n.uniforms.cameraHeightFactor=q(M,150,12e3),n.uniforms.fogDensity=55e-5+(1-n.uniforms.cameraHeightFactor)*.00125),E&&(E.enabled=b.value),N){const ne=k>-.62,pe=ne?ae((k+.62)/.5):0;N.enabled=O.value&&ne,N.uniforms.blurStrength=pe}V.value?fe(h,M):Fe(h)}))}function fe(h,d){var ne;const M=h==null?void 0:h.scene;if(!M)return;typeof M.highDynamicRange=="boolean"&&(M.highDynamicRange=!0);const k=(ne=M.postProcessStages)==null?void 0:ne.bloom;k&&(k.enabled=!0,k.uniforms&&("contrast"in k.uniforms&&(k.uniforms.contrast=149),"brightness"in k.uniforms&&(k.uniforms.brightness=-.12),"delta"in k.uniforms&&(k.uniforms.delta=1),"sigma"in k.uniforms&&(k.uniforms.sigma=3.25),"stepSize"in k.uniforms&&(k.uniforms.stepSize=5)));const Y=M.skyAtmosphere;if(!Y)return;const Q=q(d,500,12e4);Y.hueShift=-.035+Q*.035,Y.saturationShift=-.14+Q*.09,Y.brightnessShift=.03+(1-Q)*.08}function Fe(h){var k;const d=h==null?void 0:h.scene;if(!d)return;typeof d.highDynamicRange=="boolean"&&s.hdr!==null&&(d.highDynamicRange=s.hdr);const M=(k=d.postProcessStages)==null?void 0:k.bloom;M&&s.bloom&&(M.enabled=s.bloom.enabled,M.uniforms&&("contrast"in M.uniforms&&s.bloom.contrast!==void 0&&(M.uniforms.contrast=s.bloom.contrast),"brightness"in M.uniforms&&s.bloom.brightness!==void 0&&(M.uniforms.brightness=s.bloom.brightness),"delta"in M.uniforms&&s.bloom.delta!==void 0&&(M.uniforms.delta=s.bloom.delta),"sigma"in M.uniforms&&s.bloom.sigma!==void 0&&(M.uniforms.sigma=s.bloom.sigma),"stepSize"in M.uniforms&&s.bloom.stepSize!==void 0&&(M.uniforms.stepSize=s.bloom.stepSize))),d.skyAtmosphere&&s.sky&&(d.skyAtmosphere.hueShift=s.sky.hueShift,d.skyAtmosphere.saturationShift=s.sky.saturationShift,d.skyAtmosphere.brightnessShift=s.sky.brightnessShift)}function be(){C&&(clearInterval(C),C=null)}async function ke(){var k,Y;const h=!U.value;if(U.value=h,!h){be();return}const d=(k=t.getViewer)==null?void 0:k.call(t),M=((Y=t.getCesium)==null?void 0:Y.call(t))||window.Cesium;if(!d||!M){U.value=!1,o.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Ee(d,M),qe(d,M),f(d,M)}catch(Q){U.value=!1,o.error("图表模块加载失败",Q)}}async function Ee(h,d){await x(),await ti(),_.value&&(B||(B=F.init(_.value),y()),e||(e=()=>{B==null||B.resize()},window.addEventListener("resize",e)),B.resize(),f(h,d))}function qe(h,d){C||(C=window.setInterval(()=>{!B||!U.value||f(h,d)},1200))}function f(h,d){var ne;const M=new Date,k=`${me(M.getHours())}:${me(M.getMinutes())}:${me(M.getSeconds())}`,Y=Number((X(h)/1e3).toFixed(2)),Q=Number(d.Math.toDegrees(((ne=h==null?void 0:h.camera)==null?void 0:ne.pitch)??0).toFixed(1));ce(u.labels,k,20),ce(u.cameraHeightKm,Y,20),ce(u.pitchDeg,Q,20),ce(u.fps,g,20),B.setOption({xAxis:{data:u.labels},series:[{data:u.cameraHeightKm},{data:u.pitchDeg},{data:u.fps}]})}function y(){B&&B.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function R(){var M,k;T&&(clearInterval(T),T=null),be();const h=(M=t.getViewer)==null?void 0:M.call(t),d=(k=h==null?void 0:h.scene)==null?void 0:k.postProcessStages;r&&(r(),r=null),i&&(i(),i=null),n&&d&&d.remove(n),n=null,N&&d&&d.remove(N),N=null,E&&($&&d&&d.remove(E),E=null),$=!1,h&&Fe(h),e&&(window.removeEventListener("resize",e),e=null),B&&(B.dispose(),B=null),F=null,c=!1}function X(h){var Y,Q,ne;const d=(Q=(Y=h==null?void 0:h.scene)==null?void 0:Y.globe)==null?void 0:Q.ellipsoid,M=(ne=h==null?void 0:h.camera)==null?void 0:ne.positionWC;if(!d||!M)return 0;const k=d.cartesianToCartographic(M);return Math.max(0,Number((k==null?void 0:k.height)??0))}function q(h,d,M){return!Number.isFinite(h)||M<=d?0:ae((h-d)/(M-d))}function ae(h){return Math.min(1,Math.max(0,Number(h)||0))}function ce(h,d,M){h.push(d),h.length>M&&h.shift()}function me(h){return String(h).padStart(2,"0")}return(h,d)=>a.headless?ee("",!0):(I(),G("div",pi,[v("div",gi,[v("div",vi,[d[4]||(d[4]=v("span",{class:"panel-title"},"Cinematic FX",-1)),v("button",{class:"panel-btn",onClick:ke},J(U.value?"隐藏图表":"显示图表"),1)]),v("div",yi,[v("label",xi,[de(v("input",{"onUpdate:modelValue":d[0]||(d[0]=M=>D.value=M),type:"checkbox"},null,512),[[Ze,D.value]]),d[5]||(d[5]=v("span",null,"电影级高度雾",-1))]),v("label",_i,[de(v("input",{"onUpdate:modelValue":d[1]||(d[1]=M=>b.value=M),type:"checkbox"},null,512),[[Ze,b.value]]),d[6]||(d[6]=v("span",null,"HBAO 微阴影",-1))]),v("label",bi,[de(v("input",{"onUpdate:modelValue":d[2]||(d[2]=M=>O.value=M),type:"checkbox"},null,512),[[Ze,O.value]]),d[7]||(d[7]=v("span",null,"移轴摄影",-1))]),v("label",wi,[de(v("input",{"onUpdate:modelValue":d[3]||(d[3]=M=>V.value=M),type:"checkbox"},null,512),[[Ze,V.value]]),d[8]||(d[8]=v("span",null,"动态大气 + Bloom",-1))])]),de(v("div",{ref_key:"chartRef",ref:_,class:"fx-chart"},null,512),[[je,U.value]])])]))}},Si=Ke(Ti,[["__scopeId","data-v-5d8bf97e"]]),Ci={key:0,class:"launcher-count"},Mi={class:"panel-header"},Pi={class:"panel-title-block"},Li={class:"panel-mark"},Fi={class:"panel-copy"},Ei={class:"panel-subtitle"},Ri={class:"panel-actions"},Ai=["title"],Di={class:"panel-tabs","aria-label":"3D 工具分类"},Oi=["aria-pressed","onClick"],Ii={class:"panel-scroll"},zi={class:"panel-page"},ki={class:"overview-grid"},Ni={class:"overview-tile"},Bi={class:"overview-tile"},Hi={class:"overview-tile"},Ui={key:0,class:"quick-actions"},Vi=["disabled","onClick"],Wi={key:1,class:"empty-state"},Gi={class:"panel-page"},Xi={key:0,class:"option-group"},$i={class:"section-head"},qi={class:"option-grid"},Yi=["aria-pressed","title","onClick"],ji={key:1,class:"option-group"},Zi={class:"section-head"},Ki={class:"option-grid"},Qi=["aria-pressed","title","onClick"],Ji={key:2,class:"option-group"},er={class:"section-head"},tr={class:"overlay-list"},ir=["disabled","aria-pressed","title","onClick"],rr={class:"overlay-copy"},ar={class:"overlay-title"},nr={key:0,class:"overlay-desc"},or={key:3,class:"empty-state"},sr={class:"panel-page"},lr={class:"module-list"},cr=["aria-expanded","onClick"],ur={class:"module-icon"},dr={class:"module-copy"},hr={class:"module-title"},fr={key:0,class:"module-desc"},mr={class:"module-head-side"},pr={key:0,class:"module-body"},gr={key:0,class:"module-actions"},vr=["disabled","onClick"],yr={key:1,class:"control-list"},xr={class:"control-label"},_r=["min","max","step","value","disabled","onInput"],br=["min","max","step","value","disabled","onInput"],wr=["value","disabled","onChange"],Tr=["value"],Sr=["aria-pressed","disabled","onClick"],Cr={key:3,class:"control-value"},Mr={key:0,class:"empty-state"},Pr={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle"],setup(a,{emit:t}){const o=a,_=t,D=r(),b=K(D.activeTab||"scene"),O=K(!!D.compactMode),V=K(new Set(D.expandedModuleIds||["effects"])),U=_e(()=>o.embedded||o.open),n=_e(()=>o.modules.find(x=>x.id==="scene")||null),N=_e(()=>{var x;return((x=n.value)==null?void 0:x.actions)||[]}),E=_e(()=>o.modules.filter(x=>x.id!=="scene")),$=_e(()=>E.value.filter(x=>x.statusTone==="success"||x.statusTone==="warning").length),B=[{id:"scene",label:"场景",icon:nt},{id:"layers",label:"图层",icon:gt},{id:"modules",label:"模块",icon:at}],F=_e(()=>{var x;return((x=o.basemapOptions.find(u=>u.value===o.activeBasemap))==null?void 0:x.label)||"未选择"}),L=_e(()=>{var x;return((x=o.terrainOptions.find(u=>u.value===o.activeTerrain))==null?void 0:x.label)||"未选择"});Se(()=>o.modules.map(x=>x.id),x=>{x.includes(b.value)||b.value==="scene"||b.value==="layers"||b.value==="modules"||(b.value="scene")},{immediate:!0}),Se([b,O,V],i,{deep:!0});function T(x){_("update:open",x)}function C(x){return V.value.has(x)}function e(x){const u=new Set(V.value);u.has(x)?u.delete(x):u.add(x),V.value=u}function r(){if(typeof window>"u")return{};try{const x=window.localStorage.getItem(o.storageKey);return x?JSON.parse(x):{}}catch{return{}}}function i(){if(!(typeof window>"u"))try{window.localStorage.setItem(o.storageKey,JSON.stringify({activeTab:b.value,compactMode:O.value,expandedModuleIds:[...V.value]}))}catch{}}function c(x){return{scene:nt,effects:hi,wind:di,fluid:ui}[x]||at}function w(x,u){var W;return((W={scene:{home:li,everest:yt,tileset:si},wind:{load:oi,clear:_t},fluid:{pick:xt,clear:_t}}[x])==null?void 0:W[u])||ci}function g(x,u){_("module-action",{moduleId:x,actionId:u})}function p(x,u,s){const W=u.type==="range"?Number(s):s;_("control-change",{moduleId:x,controlId:u.id,value:W})}function z(x){x.disabled||_("overlay-toggle",{overlayId:x.value,value:!x.active})}return(x,u)=>(I(),G("aside",{class:ge(["cesium-tool-shell",{"is-open":U.value,"is-embedded":a.embedded}])},[!a.embedded&&!U.value?(I(),G("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:u[0]||(u[0]=s=>T(!0))},[Ie(Te(at),{size:18,"stroke-width":"2"}),u[3]||(u[3]=v("span",null,"高级控制台",-1)),$.value?(I(),G("span",Ci,J($.value),1)):ee("",!0)])):ee("",!0),de(v("section",{class:ge(["cesium-tool-panel",{compact:O.value}]),"aria-label":"Cesium 高级控制台"},[v("header",Mi,[v("div",Pi,[v("span",Li,[Ie(Te(nt),{size:18,"stroke-width":"2"})]),v("span",Fi,[u[4]||(u[4]=v("span",{class:"panel-title"},"3D 高级控制台",-1)),v("span",Ei,J(F.value)+" / "+J(L.value),1)])]),v("div",Ri,[v("button",{class:"icon-btn",type:"button",title:O.value?"切换为舒展布局":"切换为紧凑布局",onClick:u[1]||(u[1]=s=>O.value=!O.value)},[Ie(Te(ri),{size:16,"stroke-width":"2"})],8,Ai),a.embedded?ee("",!0):(I(),G("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:u[2]||(u[2]=s=>T(!1))},[Ie(Te(ai),{size:17,"stroke-width":"2"})]))])]),v("nav",Di,[(I(),G(xe,null,Pe(B,s=>v("button",{key:s.id,class:ge(["tab-btn",{active:b.value===s.id}]),type:"button","aria-pressed":b.value===s.id,onClick:W=>b.value=s.id},[(I(),Le(Xe(s.icon),{size:15,"stroke-width":"2"})),v("span",null,J(s.label),1)],10,Oi)),64))]),v("div",Ii,[de(v("section",zi,[v("div",ki,[v("div",Ni,[u[5]||(u[5]=v("span",{class:"overview-label"},"地图源",-1)),v("strong",null,J(F.value),1)]),v("div",Bi,[u[6]||(u[6]=v("span",{class:"overview-label"},"地形",-1)),v("strong",null,J(L.value),1)]),v("div",Hi,[u[7]||(u[7]=v("span",{class:"overview-label"},"模块",-1)),v("strong",null,J($.value)+"/"+J(E.value.length),1)])]),N.value.length?(I(),G("div",Ui,[(I(!0),G(xe,null,Pe(N.value,s=>(I(),G("button",{key:s.id,class:ge(["tool-action",[s.variant||"default",{active:s.active}]]),disabled:s.disabled,type:"button",onClick:W=>g(n.value.id,s.id)},[(I(),Le(Xe(w(n.value.id,s.id)),{size:15,"stroke-width":"2"})),pt(" "+J(s.label),1)],10,Vi))),128))])):(I(),G("div",Wi," 暂无场景快捷操作 "))],512),[[je,b.value==="scene"]]),de(v("section",Gi,[a.basemapOptions.length?(I(),G("div",Xi,[v("div",$i,[Ie(Te(gt),{size:16,"stroke-width":"2"}),u[8]||(u[8]=v("span",null,"地图源",-1))]),v("div",qi,[(I(!0),G(xe,null,Pe(a.basemapOptions,s=>(I(),G("button",{key:s.value,class:ge(["option-card",{active:s.value===a.activeBasemap}]),type:"button","aria-pressed":s.value===a.activeBasemap,title:s.description||s.label,onClick:W=>x.$emit("update:activeBasemap",s.value)},[v("span",null,J(s.label),1),s.value===a.activeBasemap?(I(),Le(Te(vt),{key:0,size:15,"stroke-width":"2.4"})):ee("",!0)],10,Yi))),128))])])):ee("",!0),a.terrainOptions.length?(I(),G("div",ji,[v("div",Zi,[Ie(Te(yt),{size:16,"stroke-width":"2"}),u[9]||(u[9]=v("span",null,"地形",-1))]),v("div",Ki,[(I(!0),G(xe,null,Pe(a.terrainOptions,s=>(I(),G("button",{key:s.value,class:ge(["option-card",{active:s.value===a.activeTerrain}]),type:"button","aria-pressed":s.value===a.activeTerrain,title:s.description||s.label,onClick:W=>x.$emit("update:activeTerrain",s.value)},[v("span",null,J(s.label),1),s.value===a.activeTerrain?(I(),Le(Te(vt),{key:0,size:15,"stroke-width":"2.4"})):ee("",!0)],10,Qi))),128))])])):ee("",!0),a.overlayOptions.length?(I(),G("div",Ji,[v("div",er,[Ie(Te(xt),{size:16,"stroke-width":"2"}),u[10]||(u[10]=v("span",null,"叠加层",-1))]),v("div",tr,[(I(!0),G(xe,null,Pe(a.overlayOptions,s=>(I(),G("button",{key:s.value,class:ge(["overlay-row",{active:!!s.active}]),type:"button",disabled:s.disabled,"aria-pressed":!!s.active,title:s.description||s.label,onClick:W=>z(s)},[v("span",rr,[v("span",ar,J(s.label),1),s.description?(I(),G("span",nr,J(s.description),1)):ee("",!0)]),v("span",{class:ge(["toggle-control",{active:!!s.active}]),"aria-hidden":"true"},[...u[11]||(u[11]=[v("span",{class:"toggle-track"},[v("span",{class:"toggle-thumb"})],-1)])],2)],10,ir))),128))])])):ee("",!0),!a.basemapOptions.length&&!a.terrainOptions.length&&!a.overlayOptions.length?(I(),G("div",or," 暂无图层配置项 ")):ee("",!0)],512),[[je,b.value==="layers"]]),de(v("section",sr,[v("div",lr,[(I(!0),G(xe,null,Pe(E.value,s=>{var W,le;return I(),G("article",{key:s.id,class:ge(["module-item",{expanded:C(s.id)}])},[v("button",{class:"module-head",type:"button","aria-expanded":C(s.id),onClick:P=>e(s.id)},[v("span",ur,[(I(),Le(Xe(c(s.id)),{size:16,"stroke-width":"2"}))]),v("span",dr,[v("span",hr,J(s.title),1),s.description?(I(),G("span",fr,J(s.description),1)):ee("",!0)]),v("span",mr,[s.status?(I(),G("span",{key:0,class:ge(["module-status",s.statusTone||"neutral"])},J(s.status),3)):ee("",!0),Ie(Te(ni),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,cr),C(s.id)?(I(),G("div",pr,[(W=s.actions)!=null&&W.length?(I(),G("div",gr,[(I(!0),G(xe,null,Pe(s.actions,P=>(I(),G("button",{key:P.id,class:ge(["tool-action",[P.variant||"default",{active:P.active}]]),disabled:P.disabled,type:"button",onClick:re=>g(s.id,P.id)},[(I(),Le(Xe(w(s.id,P.id)),{size:14,"stroke-width":"2"})),pt(" "+J(P.label),1)],10,vr))),128))])):ee("",!0),(le=s.controls)!=null&&le.length?(I(),G("div",yr,[(I(!0),G(xe,null,Pe(s.controls,P=>(I(),G("label",{key:P.id,class:ge(["control-row",`control-${P.type}`])},[v("span",xr,J(P.label),1),P.type==="range"?(I(),G(xe,{key:0},[v("input",{class:"control-range",type:"range",min:P.min,max:P.max,step:P.step,value:P.value,disabled:P.disabled,onInput:re=>p(s.id,P,re.target.value)},null,40,_r),v("input",{class:"control-number",type:"number",min:P.min,max:P.max,step:P.step,value:P.value,disabled:P.disabled,onInput:re=>p(s.id,P,re.target.value)},null,40,br)],64)):P.type==="select"?(I(),G("select",{key:1,class:"control-select",value:P.value,disabled:P.disabled,onChange:re=>p(s.id,P,re.target.value)},[(I(!0),G(xe,null,Pe(P.options||[],re=>(I(),G("option",{key:re.value,value:re.value},J(re.label),9,Tr))),128))],40,wr)):P.type==="toggle"?(I(),G("button",{key:2,class:ge(["toggle-control",{active:!!P.value}]),type:"button","aria-pressed":!!P.value,disabled:P.disabled,onClick:re=>p(s.id,P,!P.value)},[...u[12]||(u[12]=[v("span",{class:"toggle-track"},[v("span",{class:"toggle-thumb"})],-1)])],10,Sr)):ee("",!0),P.displayValue?(I(),G("span",Cr,J(P.displayValue),1)):ee("",!0)],2))),128))])):ee("",!0)])):ee("",!0)],2)}),128))]),E.value.length?ee("",!0):(I(),G("div",Mr," 暂无可用功能模块 "))],512),[[je,b.value==="modules"]])])],2),[[je,a.embedded||U.value]])],2))}},Lr=Ke(Pr,[["__scopeId","data-v-8d71e13b"]]);function Fr(a){if(!a)throw new Error("Cesium runtime is required for FluidRenderer.");function t(C){return(C==null?void 0:C._view)||(C==null?void 0:C.view)}function o(C){const e=t(C);if(!(e!=null&&e.passState))throw new Error("Cesium scene passState is unavailable.");return e.passState}function _(C){const e=t(C);return(e==null?void 0:e.frustumCommandsList)||(e==null?void 0:e._frustumCommandsList)||[]}const D=`
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
`,b=`
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
`,O=`
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
`,V=`
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
`,U=`
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
`,n=`
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
`;class N{constructor(e){this.commandType=e.commandType,this.geometry=e.geometry,this.attributeLocations=e.attributeLocations,this.primitiveType=e.primitiveType,this.uniformMap=e.uniformMap,this.vertexShaderSource=e.vertexShaderSource,this.fragmentShaderSource=e.fragmentShaderSource,this.rawRenderState=e.rawRenderState,this.framebuffer=e.framebuffer,this.isPostRender=e.isPostRender,this.outputTexture=e.outputTexture,this.autoClear=a.defaultValue(e.autoClear,!1),this.preExecute=e.preExecute,this.modelMatrix=a.defaultValue(e.modelMatrix,a.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new a.ClearCommand({color:new a.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:a.Pass.OPAQUE}))}createCommand(e){switch(this.commandType){case"Draw":{const r=a.VertexArray.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:a.BufferUsage.STATIC_DRAW}),i=a.ShaderProgram.fromCache({context:e,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),c=a.RenderState.fromCache(this.rawRenderState);return new a.DrawCommand({owner:this,vertexArray:r,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:i,framebuffer:this.framebuffer,renderState:c,pass:a.Pass.OPAQUE})}case"Compute":return new a.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(e,r){this.geometry=r;const i=a.VertexArray.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:a.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=i}update(e){this.show&&(a.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(e.context),this.commandToExecute.isPostRender=this.isPostRender),a.defined(this.preExecute)&&this.preExecute(this),a.defined(this.clearCommand)&&e.commandList.push(this.clearCommand),e.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return a.defined(this.commandToExecute)&&(a.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),a.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),a.destroyObject(this)}}class E{constructor(){}static loadText(e){const r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(),r.responseText}static getFullscreenQuad(){return new a.Geometry({attributes:new a.GeometryAttributes({position:new a.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new a.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(e){if(a.defined(e.arrayBufferView)){const i={};i.arrayBufferView=e.arrayBufferView,e.source=i,e.flipY=!1}return new a.Texture(e)}static createDepthFramebuffer(e,r,i){return new a.Framebuffer({context:e,colorTextures:[this.createTexture({context:e,width:r,height:i,flipY:!1,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(r*i*4)})],depthRenderbuffer:new a.Renderbuffer({context:e,width:r,height:i,format:a.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(e,r,i,c=!1){const w={context:e,colorTextures:[r],destroyAttachments:c};return i&&(w.depthTexture=i),new a.Framebuffer(w)}static createRawRenderState(e){const c={viewport:e.viewport,depthTest:e.depthTest,depthMask:e.depthMask,blending:e.blending};return a.Appearance.getDefaultRenderState(!0,!1,c)}}const T=class T{constructor(e,r={}){if(!e)throw new Error("Cesium Viewer is required");this.viewer=e,this._initConfiguration(r),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(e){this.config={resolution:new a.Cartesian2(e.width||T.DEFAULTS.width,e.height||T.DEFAULTS.height),dimensions:e.dimensions||T.DEFAULTS.dimensions.clone(),heightRange:{min:e.minHeight??T.DEFAULTS.heightRange[0],max:e.maxHeight??T.DEFAULTS.heightRange[1]},baseHeight:e.baseHeight??T.DEFAULTS.baseHeight,fluidParams:e.fluidParams||T.DEFAULTS.fluidParams.clone(),customParams:e.customParams||T.DEFAULTS.customParams.clone(),lonLat:e.lonLat||[...T.DEFAULTS.lonLat],timeStep:e.timeStep||T.DEFAULTS.timeStep,heightMapSource:e.heightMapSource||T.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const e=()=>E.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:e(),B:e(),C:e(),D:e()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(e){if(!(e!=null&&e.arrayBufferView)||!e.width||!e.height)throw new Error("Invalid height map source.");return E.createTexture({context:this.viewer.scene.context,width:e.width,height:e.height,flipY:!1,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT,arrayBufferView:e.arrayBufferView,sampler:new a.Sampler({wrapS:a.TextureWrap.CLAMP_TO_EDGE,wrapT:a.TextureWrap.CLAMP_TO_EDGE,minificationFilter:a.TextureMinificationFilter.LINEAR,magnificationFilter:a.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var W,le;const e=this.viewer.scene.context,r=E.createDepthFramebuffer(e,this.config.resolution.x,this.config.resolution.y),i=this.viewer.scene,c=i.frameState,w=o(this.viewer.scene),g=i.camera,p=c.camera,z=w.framebuffer,x=a.BoundingRectangle.clone(w.viewport,new a.BoundingRectangle);let u=null,s=[];try{w.viewport.x=0,w.viewport.y=0,w.viewport.width=this.config.resolution.x,w.viewport.height=this.config.resolution.y,w.framebuffer=r,i.camera=this.heightMapCamera,c.camera=this.heightMapCamera,c.context.uniformState.updateCamera(this.heightMapCamera),s=this._processHeightMapShaders(),this._renderDepthPrepass(w);const P=E.createTexture({context:e,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT});return u=E.createFramebuffer(e,P),this._copyTexture(r.getColorTexture(0),u),P}finally{this._restoreHeightMapShaders(s),w.framebuffer=z,a.BoundingRectangle.clone(x,w.viewport),i.camera=g,c.camera=p,p&&c.context.uniformState.updateCamera(p),u&&!((W=u.isDestroyed)!=null&&W.call(u))&&u.destroy(),r&&!((le=r.isDestroyed)!=null&&le.call(r))&&r.destroy()}}_renderDepthPrepass(e){const r=this.viewer.scene.frameState;r.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(c=>c.execute(this.viewer.scene.context,e))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:a.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:a.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const e={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...e,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:b}),this._createComputePass("B",{uniforms:{...e,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:O}),this._createComputePass("C",{uniforms:{...e,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:V}),this._createComputePass("D",{uniforms:{...e,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:U})]}_createComputePass(e,{uniforms:r,shaderSource:i}){return new N({commandType:"Compute",uniformMap:r,fragmentShaderSource:new a.ShaderSource({sources:[D,i]}),geometry:E.getFullscreenQuad(),outputTexture:this.textures[e],preExecute:c=>c.commandToExecute.outputTexture=this.textures[e]})}_createMainRenderPass(){const e=B([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new N({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new a.ShaderSource({sources:[D,n]}),geometry:this._createBoxGeometry(),modelMatrix:e,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,colorTexture:()=>{var e,r,i,c;return(c=(i=(r=(e=t(this.viewer.scene))==null?void 0:e.globeDepth)==null?void 0:r.colorFramebufferManager)==null?void 0:i._colorTextures)==null?void 0:c[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(e=>this.viewer.scene.primitives.add(e)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(e){const r=this.viewer.camera.getPickRay(e);return this.viewer.scene.globe.pick(r,this.viewer.scene)}_createOrthographicCamera(){const e=new a.Camera(this.viewer.scene);e.frustum=new a.OrthographicOffCenterFrustum;const[r,i]=this.config.lonLat,c=a.Cartesian3.fromDegrees(r,i,this.config.baseHeight),w=a.Transforms.eastNorthUpToFixedFrame(c),g=e.frustum;g.near=.01,g.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),g.left=-this.config.dimensions.x/2,g.right=this.config.dimensions.x/2,g.bottom=-this.config.dimensions.y/2,g.top=this.config.dimensions.y/2;const p=a.Matrix4.getColumn(w,2,new a.Cartesian3);a.Cartesian3.negate(p,p);const z=a.Matrix4.getColumn(w,1,new a.Cartesian3),x=a.Matrix4.getColumn(w,0,new a.Cartesian3),u=a.Cartesian3.multiplyByScalar(p,-g.far,new a.Cartesian3);return e.position=a.Cartesian3.add(c,u,new a.Cartesian3),e.direction=p,e.up=z,e.right=x,e}destroy(){var e,r;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(i=>{i&&this.viewer.scene.primitives.remove(i)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(i=>{var c;i&&!((c=i.isDestroyed)!=null&&c.call(i))&&i.destroy()}),this.textures={},this._heightMap&&!((r=(e=this._heightMap).isDestroyed)!=null&&r.call(e))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(e,r){const i=this.viewer.scene.context,c=o(this.viewer.scene),w=i.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>e},owner:this}),g=c.framebuffer;c.framebuffer=r,w.execute(i,c),c.framebuffer=g}_getDepthRenderCommands(){var i,c;const e=[],r=_(this.viewer.scene);for(let w=0;w<r.length;++w){const g=r[w],p=(i=g==null?void 0:g.commands)==null?void 0:i[2],z=((c=g==null?void 0:g.indices)==null?void 0:c[2])??(p==null?void 0:p.length)??0;p&&z>0&&e.push(...p.slice(0,z))}return e}_processHeightMapShaders(){const e=[],r=a.Transforms.eastNorthUpToFixedFrame(a.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),i=a.Matrix4.inverse(r,new a.Matrix4),c=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(g=>{var s;if(!((s=g==null?void 0:g.shaderProgram)!=null&&s.fragmentShaderSource)||!g.uniformMap)return;const p=Object.prototype.hasOwnProperty.call(g.uniformMap,"u_inverseEnuMatrix"),z=g.uniformMap.u_inverseEnuMatrix,x=g.shaderProgram,u=new a.Matrix4;g.uniformMap.u_inverseEnuMatrix=()=>{const W=g.modelMatrix||a.Matrix4.IDENTITY;return a.Matrix4.multiply(i,W,u)},g.heightMap_ShaderProgram||(g.heightMap_ShaderProgram=this._getDerivedShaderProgram(c.context,g.shaderProgram,"Height_Map")),g.shaderProgram=g.heightMap_ShaderProgram,e.push({command:g,hadInverseUniform:p,originalInverseUniform:z,originalShaderProgram:x})}),e}_restoreHeightMapShaders(e){e.forEach(r=>{const{command:i,hadInverseUniform:c,originalInverseUniform:w,originalShaderProgram:g}=r;i!=null&&i.uniformMap&&(i.shaderProgram=g,c?i.uniformMap.u_inverseEnuMatrix=w:delete i.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(e,r,i){let c=e.shaderCache.getDerivedShaderProgram(r,i);return a.defined(c)||(c=this._createHeightMapShaderProgram(e,r,i)),c}_createHeightMapShaderProgram(e,r,i){const c=this._modifyFragmentShader(r.fragmentShaderSource);return e.shaderCache.createDerivedShaderProgram(r,i,{vertexShaderSource:r.vertexShaderSource,fragmentShaderSource:c,attributeLocations:r._attributeLocations})}_modifyFragmentShader(e){const r=e.sources.map(i=>a.ShaderSource.replaceMain(i,"czm_heightMap_main"));return r.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new a.ShaderSource({sources:r,defines:e.defines})}_createBoxGeometry(){return a.BoxGeometry.createGeometry(a.BoxGeometry.fromDimensions({vertexFormat:a.VertexFormat.POSITION_AND_ST,dimensions:new a.Cartesian3(1,1,1)}))}_getAttributeLocations(){return a.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:a.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new a.ShaderSource({sources:[`
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
            }`]})}};mt(T,"DEFAULTS",{width:1024,height:1024,dimensions:new a.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new a.Cartesian4(.995,.25,1e-4,.03),customParams:new a.Cartesian4(10,20,.2,10),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let $=T;const B=(C=[0,0,0],e=[0,0,0],r=[1,1,1])=>{const i=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationX(a.Math.toRadians(e[0]))),c=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationY(a.Math.toRadians(e[1]))),w=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationZ(a.Math.toRadians(e[2])));C instanceof a.Cartesian3||(C=a.Cartesian3.fromDegrees(...C));const g=a.Transforms.eastNorthUpToFixedFrame(C);a.Matrix4.multiply(g,i,g),a.Matrix4.multiply(g,c,g),a.Matrix4.multiply(g,w,g);const p=a.Matrix4.fromScale(new a.Cartesian3(...r));return a.Matrix4.multiply(g,p,new a.Matrix4)},F=`
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
    `;function L(){return new a.PostProcessStage({fragmentShader:F})}return{FluidRenderer:$,createSkyEffect:L}}const Er={key:0,class:"fluid-root"},Rr={class:"fluid-panel"},Ar={class:"panel-actions"},Dr=["disabled"],Or={key:0,class:"selected-text"},Ir={class:"param-list"},zr={class:"param-row"},kr={class:"param-row"},Nr={class:"param-row"},bt=1024,wt=1e4,Br=1200,Hr=60,ot=64,Ur=160,Vr={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(a,{expose:t,emit:o}){const _=a,D=o,b=lt(),O=K(10),V=K(20),U=K(3),n=K(!1),N=K(!1),E=K(null),$=K(null);let B=null,F=null,L=null,T=null,C=null,e=null,r=0;const i=_e(()=>!Number.isFinite(E.value)||!Number.isFinite($.value)?"":`经度 ${E.value.toFixed(6)} / 纬度 ${$.value.toFixed(6)}`);Se([O,V,U],te),Se(()=>_.params,f=>{w(f||{})},{deep:!0,immediate:!0}),Se([n,N,i],g,{immediate:!0}),ii(()=>{Ee(!0)});function c(){var R,X;const f=(R=_.getViewer)==null?void 0:R.call(_),y=((X=_.getCesium)==null?void 0:X.call(_))||window.Cesium;if(!f||!y)return b.warning("Cesium 场景尚未就绪。"),null;if(!B){const q=Fr(y);B=q.FluidRenderer,F=q.createSkyEffect}return{viewer:f,Cesium:y}}function w(f){Number.isFinite(Number(f.threshold))&&(O.value=Number(f.threshold)),Number.isFinite(Number(f.blend))&&(V.value=Number(f.blend)),Number.isFinite(Number(f.lightStrength))&&(U.value=Number(f.lightStrength))}function g(){D("state-change",{isPicking:n.value,hasFluid:N.value,selectedText:i.value})}function p(){const f=c();if(!f)return;const{viewer:y,Cesium:R}=f;be(),he(y,R),n.value=!0,L=new R.ScreenSpaceEventHandler(y.scene.canvas),L.setInputAction(X=>{z(y,R,X.position)},R.ScreenSpaceEventType.LEFT_CLICK)}async function z(f,y,R){var Q,ne;const X=ue(f,R);if(!X){b.warning("未选中可用地形位置。");return}const q=++r;be();const ae=y.Cartographic.fromCartesian(X),ce=y.Math.toDegrees(ae.longitude),me=y.Math.toDegrees(ae.latitude),h=Math.max(0,Number(ae.height)||0),d=100,M=Br,k=Math.max(0,h-d),Y=new y.Cartesian3(wt,wt,M);Lt("正在请求模拟范围高度数据...");try{ke();const pe=Number(O.value)||0,ve=Number(V.value)||0,Be=Number(U.value)||0,Ye=await x(f,y,{lon:ce,lat:me,baseHeight:k,dimensions:Y});if(q!==r)return;Ye||b.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),T=new B(f,{lonLat:[ce,me],width:bt,height:bt,dimensions:Y,baseHeight:k,minHeight:0,maxHeight:M,heightMapSource:Ye,customParams:new y.Cartesian4(pe,ve,Be,10),fluidParams:new y.Cartesian4(.9+Be/10*.099,Math.min(1,ve/50),pe/5e4,.03)}),E.value=ce,$.value=me,N.value=!0,(ne=(Q=f.scene).requestRender)==null||ne.call(Q),b.success("水体流体已创建。")}catch(pe){b.error("水体流体创建失败",pe),b.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{Ft()}}async function x(f,y,R){const X=f==null?void 0:f.terrainProvider,q=s(R.dimensions);if(!X)return null;if(y.EllipsoidTerrainProvider&&X instanceof y.EllipsoidTerrainProvider)return Ce(q);if(typeof y.sampleTerrain!="function"&&typeof y.sampleTerrainMostDetailed!="function")return null;try{return await u(f,y,R,q)}catch(ae){if(q<=ot)throw ae;return u(f,y,R,ot)}}async function u(f,y,R,X){const q=le(y,R,X),ae=await P(y,f.terrainProvider,q);return Ne(ae||q,{baseHeight:R.baseHeight,fluidDepth:R.dimensions.z,size:X})}function s(f){const y=Math.max(Number(f==null?void 0:f.x)||0,Number(f==null?void 0:f.y)||0),R=Math.ceil(y/Hr)+1;return W(R,ot,Ur)}function W(f,y,R){return Math.max(y,Math.min(R,Math.round(f)))}function le(f,{lon:y,lat:R,baseHeight:X,dimensions:q},ae){const ce=f.Cartesian3.fromDegrees(y,R,X),me=f.Transforms.eastNorthUpToFixedFrame(ce),h=[],d=Math.max(1,ae-1);for(let M=0;M<ae;M++){const Y=(.5-M/d)*q.y;for(let Q=0;Q<ae;Q++){const pe=(Q/d-.5)*q.x,ve=new f.Cartesian3(pe,Y,0),Be=f.Matrix4.multiplyByPoint(me,ve,new f.Cartesian3);h.push(f.Cartographic.fromCartesian(Be))}}return h}async function P(f,y,R){const X=re(y);return Number.isInteger(X)&&typeof f.sampleTerrain=="function"?f.sampleTerrain(y,X,R):typeof f.sampleTerrainMostDetailed=="function"?f.sampleTerrainMostDetailed(y,R):f.sampleTerrain(y,10,R)}function re(f){const y=Number(f==null?void 0:f._bottomLevel);return Number.isFinite(y)?Math.max(0,y-1):null}function Ne(f,{baseHeight:y,fluidDepth:R,size:X}){var ae;const q=new Float32Array(X*X*4);for(let ce=0;ce<f.length;ce++){const me=Number((ae=f[ce])==null?void 0:ae.height),h=Number.isFinite(me)?$e(me-y,0,R):0,d=ce*4;q[d]=h,q[d+1]=0,q[d+2]=0,q[d+3]=1}return{width:X,height:X,arrayBufferView:q}}function Ce(f){return{width:f,height:f,arrayBufferView:new Float32Array(f*f*4)}}function $e(f,y,R){return Math.max(y,Math.min(R,f))}function ue(f,y){if(!y)return null;if(f.scene.pickPositionSupported&&typeof f.scene.pickPosition=="function"){const X=f.scene.pickPosition(y);if(X)return X}const R=f.camera.getPickRay(y);return R?f.scene.globe.pick(R,f.scene):null}function te(){if(!(T!=null&&T.config))return;const f=Number(O.value)||0,y=Number(V.value)||0,R=Number(U.value)||0;T.config.customParams&&(T.config.customParams.x=f,T.config.customParams.y=y,T.config.customParams.z=R),T.config.fluidParams&&(T.config.fluidParams.x=.9+R/10*.099,T.config.fluidParams.y=Math.min(1,y/50),T.config.fluidParams.z=f/5e4)}function he(f,y){var R,X;if(!e){const q=f.scene;e={shadows:f.shadows,resolutionScale:f.resolutionScale,msaaSamples:q.msaaSamples,depthTestAgainstTerrain:q.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:q.logarithmicDepthBuffer,highDynamicRange:q.highDynamicRange,fogEnabled:(R=q.fog)==null?void 0:R.enabled,showGroundAtmosphere:q.globe.showGroundAtmosphere,skyAtmosphereShow:(X=q.skyAtmosphere)==null?void 0:X.show,enableLighting:q.globe.enableLighting}}f.shadows=!0,f.resolutionScale=1,f.scene.msaaSamples=4,f.scene.globe.depthTestAgainstTerrain=!0,f.scene.logarithmicDepthBuffer=!0,f.scene.highDynamicRange=!0,f.scene.fog&&(f.scene.fog.enabled=!0),f.scene.globe.showGroundAtmosphere=!1,f.scene.skyAtmosphere&&(f.scene.skyAtmosphere.show=!1),f.scene.globe.enableLighting=!0,!C&&F&&(C=F(y),f.scene.postProcessStages.add(C))}function fe(f){if(!f||!e)return;const y=f.scene;f.shadows=e.shadows,f.resolutionScale=e.resolutionScale,e.msaaSamples!==void 0&&(y.msaaSamples=e.msaaSamples),y.globe.depthTestAgainstTerrain=e.depthTestAgainstTerrain,y.logarithmicDepthBuffer=e.logarithmicDepthBuffer,y.highDynamicRange=e.highDynamicRange,y.fog&&e.fogEnabled!==void 0&&(y.fog.enabled=e.fogEnabled),y.globe.showGroundAtmosphere=e.showGroundAtmosphere,y.skyAtmosphere&&e.skyAtmosphereShow!==void 0&&(y.skyAtmosphere.show=e.skyAtmosphereShow),y.globe.enableLighting=e.enableLighting,e=null}function Fe(){Ee(!1),b.success("水体流体已清除。")}function be(){L&&(L.destroy(),L=null),n.value=!1}function ke(){if(T){try{T.destroy()}catch{}T=null,N.value=!1}}function Ee(f){var R,X,q;const y=(R=_.getViewer)==null?void 0:R.call(_);if(r+=1,be(),ke(),E.value=null,$.value=null,y&&C){try{y.scene.postProcessStages.remove(C)}catch{}C=null}f&&y&&fe(y),(q=(X=y==null?void 0:y.scene)==null?void 0:X.requestRender)==null||q.call(X)}function qe(){Ee(!0),D("close")}return t({startPickHeightMap:p,clearFluid:Fe}),(f,y)=>a.headless?ee("",!0):(I(),G("div",Er,[v("div",Rr,[v("div",{class:"panel-head"},[y[6]||(y[6]=v("span",{class:"panel-title"},"水体流体",-1)),v("button",{class:"panel-close",title:"关闭",onClick:qe}," × ")]),v("div",Ar,[v("button",{class:ge(["action-btn primary",{active:n.value}]),onClick:p},J(n.value?"等待选点":"捕捉高度图"),3),v("button",{class:"action-btn",disabled:!N.value&&!n.value,onClick:Fe}," 清除 ",8,Dr)]),i.value?(I(),G("div",Or,J(i.value),1)):ee("",!0),v("div",Ir,[v("label",zr,[y[7]||(y[7]=v("span",null,"阈值",-1)),de(v("input",{"onUpdate:modelValue":y[0]||(y[0]=R=>O.value=R),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[We,O.value,void 0,{number:!0}]]),de(v("input",{"onUpdate:modelValue":y[1]||(y[1]=R=>O.value=R),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[We,O.value,void 0,{number:!0}]])]),v("label",kr,[y[8]||(y[8]=v("span",null,"混合",-1)),de(v("input",{"onUpdate:modelValue":y[2]||(y[2]=R=>V.value=R),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[We,V.value,void 0,{number:!0}]]),de(v("input",{"onUpdate:modelValue":y[3]||(y[3]=R=>V.value=R),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[We,V.value,void 0,{number:!0}]])]),v("label",Nr,[y[9]||(y[9]=v("span",null,"光强",-1)),de(v("input",{"onUpdate:modelValue":y[4]||(y[4]=R=>U.value=R),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[We,U.value,void 0,{number:!0}]]),de(v("input",{"onUpdate:modelValue":y[5]||(y[5]=R=>U.value=R),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[We,U.value,void 0,{number:!0}]])])])])]))}},Wr=Ke(Vr,[["__scopeId","data-v-7cc9bc94"]]),se={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Gr=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Xr=new Float32Array([0,0,1,0,1,1,0,1]),$r=new Uint16Array([0,1,2,0,2,3]);function ze(a,t,o){return Math.max(t,Math.min(o,a))}function j(a,t){const o=Number(a);return Number.isFinite(o)?o:t}function qr(a,t){const o=t.getParameter(t.MAX_TEXTURE_SIZE),_=Math.min(2048,o),D=Math.max(1,Math.floor(a)),b=Math.sqrt(D),O=Math.log2(b),V=Number.isFinite(O)?Math.round(O):4;let U=Math.pow(2,V);return U=ze(U,16,_),U}function Yr(a){const t=a*a,o=new Float32Array(t*4);for(let _=0;_<t;_+=1){const D=_*4;o[D]=Math.random(),o[D+1]=Math.random(),o[D+2]=Math.random(),o[D+3]=Math.random()}return o}function jr(a){return new Float32Array(a*a*4)}function Zr(a,t,o,_,D){const b=t.createTexture();if(!b)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,b),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,o,_,0,t.RGBA,t.FLOAT,D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let O=!1;return{_context:a,_texture:b,_target:t.TEXTURE_2D,_width:o,_height:_,destroy(){O||(t.deleteTexture(b),O=!0)}}}class Kr{constructor(t,o={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=o.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const _={...se,...o};this.speedFactor=j(_.speedFactor,se.speedFactor),this.cullSpeedMin=j(_.cullSpeedMin,se.cullSpeedMin),this.cullSpeedMax=j(_.cullSpeedMax,se.cullSpeedMax),this.windSpeedMin=j(_.windSpeedMin,se.windSpeedMin),this.windSpeedMax=j(_.windSpeedMax,se.windSpeedMax),this.arrowLength=j(_.arrowLength,se.arrowLength),this.trailLength=j(_.trailLength,se.trailLength),this.decaySpeed=j(_.decaySpeed,se.decaySpeed),this.alphaFactor=j(_.alphaFactor,se.alphaFactor),this.maxWindSpeed=j(_.maxWindSpeed,se.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=j(o.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const o=j(t.longitude,NaN),_=j(t.latitude,NaN),D=Array.isArray(t.altitude)?t.altitude:[],b=Array.isArray(t.sizeMesh)?t.sizeMesh:[],O=Array.isArray(t.count)?t.count:[],V=Array.isArray(t.hspeed)?t.hspeed:[],U=Array.isArray(t.hdir)?t.hdir:[],n=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(o)||!Number.isFinite(_))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const N=D.length;if(N<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(b.length!==N||O.length!==N)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const E=O.map(g=>Math.max(1,Math.floor(j(g,1)))),$=b.map(g=>Math.max(1,j(g,1))),B=D.map(g=>j(g,0)),F=E.reduce((g,p)=>g+p*p,0);if(V.length<F||U.length<F||n.length<F)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=N,this.visibleLayerMin=0,this.visibleLayerMax=N-1,this._altitudes=B.slice(),this._maxNx=Math.max(...E),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*N;const L=new Float32Array(this._atlasWidth*this._atlasHeight*4);let T=0;for(let g=0;g<N;g+=1){const p=E[g],z=p;for(let x=0;x<z;x+=1)for(let u=0;u<p;u+=1){const s=T+x*p+u,W=((g*this._maxNy+x)*this._atlasWidth+u)*4,le=Number(V[s]),P=Number(U[s]),re=Number(n[s]);if(!(Number.isFinite(le)&&Number.isFinite(P))){L[W]=0,L[W+1]=0,L[W+2]=0,L[W+3]=0;continue}const Ce=P*Math.PI/180;L[W]=le*Math.sin(Ce),L[W+1]=le*Math.cos(Ce),L[W+2]=Number.isFinite(re)?re:0,L[W+3]=1}T+=p*z}this._createOrReplaceWindAtlasTexture(L);const C=Math.max(...$),e=this._maxNx*C,r=e/2/111320,i=_*Math.PI/180,c=Math.max(1e-6,Math.abs(Math.cos(i))),w=e/2/(111320*c);this._bounds={minLon:o-w,maxLon:o+w,minLat:_-r,maxLat:_+r,minHeight:Math.min(...B),maxHeight:Math.max(...B)},this._dataPointCount=F,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const o=Math.max(1,Math.floor(j(t,1))),_=qr(o,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&_===this._particleTextureSize||(this._particleTextureSize=_,this._particleCount=_*_,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const o=ze(j(t,this.particleDensity),.05,10);if(this.particleDensity=o,this._dataPointCount<=0)return;const _=Math.max(1,Math.floor(this._dataPointCount*o));this.setParticleCount(_)}setBounds(t,o,_,D){const b=j(t,NaN),O=j(o,NaN),V=j(_,NaN),U=j(D,NaN);if(!Number.isFinite(b)||!Number.isFinite(O)||!Number.isFinite(V)||!Number.isFinite(U))return;const n=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};n.minLon=Math.min(b,O),n.maxLon=Math.max(b,O),n.minLat=Math.min(V,U),n.maxLat=Math.max(V,U),this._bounds=n,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,o=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,o,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const D=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[D],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=D,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Zr(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,o=this._particleTextureSize,_=Yr(o),D=jr(o);for(let b=0;b<2;b+=1){this._particlePositionTextures[b]=new t.Texture({context:this._context,width:o,height:o,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:o,height:o,arrayBufferView:_},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[b]=new t.Texture({context:this._context,width:o,height:o,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:o,height:o,arrayBufferView:D},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[b]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[b],this._velocityTextures[b]],destroyAttachments:!1});const O=this._framebuffers[b]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,O),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,o=t.Buffer.createVertexBuffer({context:this._context,typedArray:Gr,usage:t.BufferUsage.STATIC_DRAW}),_=t.Buffer.createVertexBuffer({context:this._context,typedArray:Xr,usage:t.BufferUsage.STATIC_DRAW}),D=t.Buffer.createIndexBuffer({context:this._context,typedArray:$r,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:o,componentsPerAttribute:2},{index:1,vertexBuffer:_,componentsPerAttribute:2}],indexBuffer:D})}_buildParticleVertexArray(){const t=this._Cesium,o=new Float32Array(this._drawVertexCount);for(let _=0;_<o.length;_+=1)o[_]=_;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:o,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,o=`#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}`,_=`#version 300 es
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
}`;this._updateProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:o,fragmentShaderSource:_,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const t=this._Cesium,o=`#version 300 es
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
}`,_=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:o,fragmentShaderSource:_,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,o=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:o,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,o=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:o,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=ze(Math.floor(j(this.visibleLayerMin,0)),0,this._layerCount-1),o=ze(Math.floor(j(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:o}}_normalizeSpeedRange(t,o){const _=Math.max(1e-4,j(this.maxWindSpeed,se.maxWindSpeed)),D=ze(j(t,0)/_,0,1),b=ze(j(o,_)/_,0,1);return{min:Math.min(D,b),max:Math.max(D,b)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>j(this.speedFactor,se.speedFactor),maxWindSpeed:()=>Math.max(1e-4,j(this.maxWindSpeed,se.maxWindSpeed)),decaySpeed:()=>ze(j(this.decaySpeed,se.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>j(this.arrowLength,se.arrowLength),trailLength:()=>j(this.trailLength,se.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>ze(j(this.alphaFactor,se.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Tt(a){if(!a)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:o,Ellipsoid:_,Resource:D,HeightmapTerrainData:b,Rectangle:O,TileAvailability:V,CustomHeightmapTerrainProvider:U}=a;function n(B,F,L,T,C,e){const r=B.tileXYToRectangle(L,T,C);return t(O.intersection(r,F,e))}function N(B){const F=[[[0,0,1,0]]],L=new V(B.tilingScheme,19);for(let T=0;T<F.length;T++){const C=F[T];for(let e=0;e<C.length;e++){const r=C[e];L.addAvailableTileRange(T,r[0],r[1],r[2],r[3])}}return L}function E(B,F,L,T,C){const e=new b({buffer:B._transformBuffer(F),width:B._width,height:B._height,childTileMask:B._getChildTileMask(T,C,L),structure:B._terrainDataStructure});return e._skirtHeight=6e3,B.availability.addAvailableTileRange(L,T,C,T,C),e}class $ extends U{constructor(F={}){if(super({...F,ellipsoid:_.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(F.url))throw new o("options.url is required.");this._dataType=F.dataType??"int16",this._url=F.url,this._subdomains=F.subdomains,this._token=F.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=N(this)}get availability(){return this._availability}requestTileGeometry(F,L,T,C){if(T>=this._bottomLevel)return Promise.reject(new Error(`Level ${T} is outside supported range.`));if(T<this._topLevel)return Promise.resolve(new b({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(F,L,T),structure:this._terrainDataStructure}));let e=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const i=this._subdomains[(F+L)%this._subdomains.length];e=e.replace("{s}",i)}e=e.replace("{token}",this._token).replace("{x}",F).replace("{y}",L).replace("{z}",T+1);const r=D.fetchArrayBuffer({url:e,request:C});if(r)return r.then(i=>i.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):fi.inflate(i)).then(i=>E(this,i,T,F,L))}getTileDataAvailable(F,L,T){return T<this._bottomLevel}_transformBuffer(F){let L=2;this._dataType==="float"&&(L=4);const T=F;if(T.length!==22500*L)return null;const C=new ArrayBuffer(L),e=new DataView(C),r=this._width,i=this._height,c=new Uint8Array(r*i*4);for(let w=0;w<i;w++)for(let g=0;g<r;g++){const p=Math.floor(149*w/(i-1)),z=Math.floor(149*g/(r-1)),x=L*(150*p+z);let u;L===4?(e.setInt8(0,T[x]),e.setInt8(1,T[x+1]),e.setInt8(2,T[x+2]),e.setInt8(3,T[x+3]),u=e.getFloat32(0,!0)):u=T[x]+256*T[x+1],(u>1e4||u<-2e3)&&(u=0);const s=(u+1e3)/.001,W=4*(w*r+g);c[W]=s/65536,c[W+1]=(s-256*c[W]*256)/256,c[W+2]=s-256*c[W]*256-256*c[W+1],c[W+3]=255}return c}_getVHeightBuffer(){let F=this._vHeightBuffer;if(!t(F)){F=new Uint8ClampedArray(this._width*this._height*4);for(let L=0;L<this._width*this._height*4;)F[L++]=15,F[L++]=66,F[L++]=64,F[L++]=255;this._vHeightBuffer=F}return F}_getChildTileMask(F,L,T){const C=new O,e=this._tilingScheme,r=this._rectangles,i=e.tileXYToRectangle(F,L,T);let c=0;for(let w=0;w<r.length&&c!==15;w++){const g=r[w];if(g.maxLevel<=T)continue;const p=g.rectangle,z=O.intersection(p,i,C);t(z)&&(n(e,p,2*F,2*L,T+1,C)&&(c|=4),n(e,p,2*F+1,2*L,T+1,C)&&(c|=8),n(e,p,2*F,2*L+1,T+1,C)&&(c|=1),n(e,p,2*F+1,2*L+1,T+1,C)&&(c|=2))}return c}}return $}function ct(a){return mi.parse(a)}const Qr=ct(`
option optimize_for = LITE_RUNTIME;
package GEOPOI;
enum enumGeometryType { ePoint = 0; eMultiLineString = 1; ePolygon = 2; }
message PBPOI {
  required uint64 OID = 1;
  required string Name = 2;
  repeated double Coordinates = 3 [packed=true];
  required enumGeometryType GeometryType = 4;
  optional int32 Interate = 5;
  optional int32 SymbolID = 10 [default = 0];
  optional double DisplayHeight = 11 [default = 32];
  optional uint32 ShiningColor = 12 [default = 0];
  optional uint32 FontNameIndex = 13 [default = 0];
  optional int32 FontSize = 14 [default = 18];
  optional uint32 FontColor = 15 [default = 0];
}
message StringTable { repeated string s = 1; }
message PBPOITile {
  required int64 Version = 1;
  required int64 TileKey = 2;
  required StringTable StringTable = 3;
  repeated PBPOI POIS = 4;
};
`).root.lookup("GEOPOI.PBPOITile"),Jr=ct(`
option optimize_for = LITE_RUNTIME;
package GEOPOI;
enum enumGeometryType { ePoint = 0; eMultiLineString = 1; ePolygon = 2; }
enum enumZCoordType { eCloseGround = 0; eCloseSeaSurface = 1; eRelativelyGround = 2; eAbsolute = 3; }
message PBPOI {
  required uint64 OID = 1;
  required string Name = 2;
  repeated double Coordinates = 3 [packed=true];
  required enumGeometryType GeometryType = 4;
  optional int32 Interate = 5;
  optional int32 SymbolID = 10 [default = 0];
  optional double DisplayHeight = 11 [default = 32];
  optional uint32 ShiningColor = 12 [default = 0];
  optional uint32 FontNameIndex = 13 [default = 0];
  optional int32 FontSize = 14 [default = 18];
  optional uint32 FontColor = 15 [default = 0];
  optional enumZCoordType ZCoordType = 16 [default = eAbsolute];
}
message StringTable { repeated string s = 1; }
message PBPOITile {
  required int64 Version = 1;
  required int64 TileKey = 2;
  required StringTable StringTable = 3;
  repeated PBPOI POIS = 4;
};
`).root.lookup("GEOPOI.PBPOITile"),ea=ct(`
option optimize_for = LITE_RUNTIME;
package GEOPOI;
enum enumGeometryType { ePoint = 0; eMultiLineString = 1; ePolygon = 2; }
enum enumZCoordType { eCloseGround = 0; eCloseSeaSurface = 1; eRelativelyGround = 2; eAbsolute = 3; }
message PBPOI {
  required uint64 OID = 1;
  required string Name = 2;
  repeated double Coordinates = 3 [packed=true];
  required enumGeometryType GeometryType = 4;
  optional int32 Priority = 5;
  repeated int32 Interates = 6 [packed=true];
  optional int32 SymbolID = 10 [default = 0];
  optional double DisplayHeight = 11 [default = 32];
  optional uint32 ShiningColor = 12 [default = 0];
  optional uint32 FontNameIndex = 13 [default = 0];
  optional int32 FontSize = 14 [default = 18];
  optional uint32 FontColor = 15 [default = 0];
  optional enumZCoordType ZCoordType = 16 [default = eAbsolute];
  optional int32 FontStyle = 17;
  optional int32 ShiningSize = 18;
}
message StringTable { repeated string s = 1; }
message PBPOITile {
  required int64 Version = 1;
  required int64 TileKey = 2;
  required StringTable StringTable = 3;
  repeated PBPOI POIS = 4;
};
`).root.lookup("GEOPOI.PBPOITile");function St(a,t){return t.minX>=a.minX&&t.minX<=a.maxX&&t.minY>=a.minY&&t.minY<=a.maxY||t.maxX>=a.minX&&t.maxX<=a.maxX&&t.maxY>=a.minY&&t.maxY<=a.maxY||t.minX>=a.minX&&t.minX<=a.maxX&&t.maxY>=a.minY&&t.maxY<=a.maxY||t.maxX>=a.minX&&t.maxX<=a.maxX&&t.minY>=a.minY&&t.minY<=a.maxY}function ta(a){let t=0;for(let o=0;o<a.length;o++)a.charAt(o).match(/[^\x00-\xff]/gi)!=null?t+=2:t+=1;return t}function Ct(a,t){const o=a.x,_=a.y,D=a.width,b=a.height,O=t.x,V=t.y,U=t.width,n=t.height;return!(O<=o&&O+U<=o||o<=O&&o+D<=O||V<=_&&V+n<=_||_<=V&&_+b<=V)}function ia(a){const t={stringTable:[],pois:[],enumGeometryType:[{ePoint:0},{eMultiLineString:1},{ePolygon:2}],enumZCoordType:[{eCloseGround:0},{eCloseSeaSurface:1},{eRelativelyGround:2},{eAbsolute:3}]};let o;const _=new Uint8Array(a);try{o=ea.decode(_)}catch{}if(!o)try{o=Jr.decode(_)}catch{try{o=Qr.decode(_)}catch{}}t.version=parseInt(o.Version.toString(),10),t.titleKey=parseInt(o.TileKey.toString(),10);for(let b=0;b<o.StringTable.s.length;b++)t.stringTable.push(o.StringTable.s[b].toString());let D=o.POIS.length;for(;D--;){const b=o.POIS[D],O={oid:`${parseInt(b.OID.toString(),10)}_${t.titleKey}`,name:b.Name.toString(),symbolID:parseInt(b.SymbolID.toString(),10),displayHeight:b.DisplayHeight,shiningColor:b.ShiningColor,fontNameIndex:b.FontNameIndex,fontSize:b.FontSize,fontColor:b.FontColor,zCoordType:b.ZCoordType??void 0,geometryType:b.GeometryType,coordinate:b.Coordinates,priority:typeof b.Priority>"u"?null:b.Priority,interates:typeof b.Interates>"u"?null:b.Interates,fontStyle:typeof b.FontStyle>"u"?null:b.FontStyle,shiningSize:typeof b.ShiningSize>"u"?null:b.ShiningSize};t.pois.push(O)}return t}function ra(a){if(!a)throw new Error("Cesium is required to create GeoWTFS.");const{Cartesian2:t,Cartesian3:o,Color:_,createGuid:D,defined:b,DeveloperError:O,Entity:V,HorizontalOrigin:U,LabelStyle:n,Math:N,SceneTransforms:E,VerticalOrigin:$,combine:B}=a,F={font:"28px sans-serif",fontSize:28,fillColor:_.WHITE,scale:.5,outlineColor:_.BLACK,outlineWidth:5,style:n.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:_.RED,backgroundPadding:new t(10,10),horizontalOrigin:U.CENTER,verticalOrigin:$.TOP,eyeOffset:o.ZERO,pixelOffset:new t(0,8)},L={horizontalOrigin:U.CENTER,verticalOrigin:$.CENTER,eyeOffset:o.ZERO,pixelOffset:t.ZERO,alignedAxis:o.ZERO,color:_.WHITE,rotation:0,scale:1,width:18,height:18};class T{constructor(e,r={}){if(!b(e))throw new O("viewer is required.");if(!b(r.url))throw new O("options.url is required.");this.viewer=e,this.proxy=r.proxy,this.url=r.url,this.icoUrl=r.icoUrl??r.iconUrl,this.metadata=r.metadata,this.roadMetadata=r.roadMetadata,this.roadUrl=r.roadUrl,this.labelGraphics=B(r.labelGraphics,F,!0),this.billboardGraphics=B(r.billboardGraphics,L,!0),this.aotuCollide=!!r.aotuCollide,this.collisionPadding=r.collisionPadding??[3,5,3,5],this.serverFirstStyle=!!r.serverFirstStyle,this.subdomains=r.subdomains||[],this.tileCache=[],this.labelCache=[],this._isInitial=!1,this._latelyGrid=[],this._latelyRefreshStamp=0,this._latelyCollisionStamp=0;const i=D();this._UUID=`GEO_WTFS_LABEL_${i}`,this._UUIDRoad=`GEO_WTFS_LABEL_ROAD_${i}`,this.viewer.camera.percentageChanged=.18,this.bindEvent()}bindEvent(){this.viewer.scene.camera.moveEnd.addEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.addEventListener(this._changed,this)}_moveEnd(){clearTimeout(this._timer);const e=this.viewer.scene.globe._surface;if(e._tilesToRender.length<2||e._tileLoadQueueHigh.length>0)this._timer=setTimeout(()=>{this._moveEnd()},100);else{const r=this.getTilesToRender();if(this.compareArray(r,this._latelyGrid))return;this._queueCall(r),this.delaySynchronous()}}_changed(){const e=new Date().getTime(),r=e-this._latelyRefreshStamp,i=e-this._latelyCollisionStamp;r>300&&this._moveEnd(),i>150&&this.collisionDetection()}getTilesToRender(){const e=this.viewer.scene.globe._surface._tilesToRender.map(i=>({x:i.x,y:i.y,level:i.level,boundBox:{minX:N.toDegrees(i.rectangle.west),minY:N.toDegrees(i.rectangle.south),maxX:N.toDegrees(i.rectangle.east),maxY:N.toDegrees(i.rectangle.north)}})).sort((i,c)=>c.level-i.level),r=[e[0].level];for(let i=0;i<e.length;i++)e[i].level!==r[r.length-1]&&(r.push(e[i].level),r.length>4&&(e.splice(i,1/0),i--));return e}compareArray(e,r){for(let i=0;i<e.length;i++){let c=!1;for(let w=0;w<r.length;w++)if(e[i].x===r[w].x&&e[i].y===r[w].y&&e[i].level===r[w].level){c=!0;break}if(!c)return!1}for(let i=0;i<r.length;i++){let c=!1;for(let w=0;w<e.length;w++)if(r[i].x===e[w].x&&r[i].y===e[w].y&&r[i].level===e[w].level){c=!0;break}if(!c)return!1}return!0}_queueCall(e){this._latelyGrid=e,this._latelyRefreshStamp=new Date().getTime();let r=e.length;for(;r--;){const i=e[r];if(this.metadata&&St(this.metadata.boundBox,i.boundBox)){if(this.metadata.minLevel>i.level+1||this.metadata.maxLevel<i.level+1)return;const c=this.getCacheTile(i.x,i.y,i.level,0);if(c)this.addLabelAndIco(c);else{const w=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",g=this.getTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",w),p=new XMLHttpRequest;p.open("GET",g,!0),p.responseType="arraybuffer";const z=this;p.onload=function(){if(!(p.status<200||p.status>=300)){const x=z.cutString(p.response);let u;x?(u=ia(x),u.x=this.tile.x,u.y=this.tile.y,u.z=this.tile.z,u.t=0,z.addCacheTile(u),z.addLabelAndIco(u)):(u={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:0},z.addCacheTile(u),z.delaySynchronous())}},p.onerror=function(x){},p.send(),p.tile={x:i.x,y:i.y,z:i.level+1}}}if(this.roadMetadata&&St(this.roadMetadata.boundBox,i.boundBox)){if(this.roadMetadata.minLevel>i.level+1||this.roadMetadata.maxLevel<i.level+1)return;const c=this.getCacheTile(i.x,i.y,i.level,0);if(c)this.addLabelAndIco(c);else{const w=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",g=this.getRoadTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",w),p=new XMLHttpRequest;p.open("GET",g,!0),p.responseType="json";const z=this;p.onload=function(){if(!(p.status<200||p.status>=300)){const x=p.response;let u;x?(u={pois:x.map(s=>({oid:`${s.LabelPoint.X}_${s.LabelPoint.Y}`,name:s.Feature.properties.Name,coordinate:[s.LabelPoint.X,s.LabelPoint.Y,s.LabelPoint.Z?s.LabelPoint.Z:0]})),x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},z.addCacheTile(u),z.addLabelAndIco(u)):(u={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},z.addCacheTile(u),z.delaySynchronous())}},p.onerror=function(x){},p.send(),p.tile={x:i.x,y:i.y,z:i.level+1}}}}}cutString(e){if(!e)return"";const r=e.byteLength;return r<=28?"":e.slice(19,r-9)}addCacheTile(e){this.tileCache.length>999&&this.tileCache.splice(0,500),this.removeCacheTile(e.x,e.y,e.z,e.t),this.tileCache.push(e)}getCacheTile(e,r,i,c){let w=this.tileCache.length;for(;w--;){const g=this.tileCache[w];if(g.x===e&&g.y===r&&g.z===i&&g.t===c)return g}return null}removeCacheTile(e,r,i,c){let w=this.tileCache.length;for(;w--;){const g=this.tileCache[w];if(g.x===e&&g.y===r&&g.z===i&&g.t===c){this.tileCache.splice(w,1);return}}}getCacheLabel(e){let r=this.labelCache.length;for(;r--;){const i=this.labelCache[r];if(i.name===this._UUID&&i.oid===e)return i}return null}addCacheLabel(e){this.labelCache.length>999&&this.labelCache.splice(0,250),this.removeCacheLabel(e.oid),e.timestamp=new Date().getTime(),this.labelCache.push(e)}removeCacheLabel(e){let r=this.labelCache.length;for(;r--;)if(this.labelCache[r].name===this._UUID&&this.labelCache[r].oid===e){this.labelCache.splice(r,1);return}}HexadecimalConversion(e){if(e===4278190080)return"#000000";let r=4278190080|parseInt(-Number(e),10),i="";if(r=r.toString(16).substring(1),r.length<6)for(let c=0;c<6-r.length;c++)i+="0";return`#${i}${r}`}addLabelAndIco(e){if(e.pois&&e.pois.length){let r=e.pois.length;for(;r--;){const i=e.pois[r];let c=this.getCacheLabel(i.oid);c||(c=this.createLabel(i,e)),c&&this.addCacheLabel(c)}}this.delaySynchronous()}createLabel(e,r){if(!e)return;const i={show:!0,position:o.fromDegrees(...e.coordinate),label:{text:e.name}};if(Object.assign(i.label,this.labelGraphics),this.serverFirstStyle&&(e.fontSize!==void 0&&(i.label.font=`${e.fontSize}px `,e.fontNameIndex!==void 0&&r.stringTable&&r.stringTable[e.fontNameIndex]?i.label.font+=r.stringTable[e.fontNameIndex]:i.label.font+="sans-serif",!this.labelGraphics.bold&&e.fontStyle!==1&&e.fontStyle!==3&&(i.label.font=`bold ${i.label.font}`),e.fontStyle!==2&&e.fontStyle!==3&&(i.label.font=`italic ${i.label.font}`)),e.fontColor!==void 0&&(i.label.fillColor=_.fromCssColorString(this.HexadecimalConversion(e.fontColor))),e.shiningColor!==void 0&&(i.label.outlineColor=_.fromCssColorString(this.HexadecimalConversion(e.shiningColor))),typeof e.shiningSize=="number"&&(i.label.outlineWidth=e.shiningSize),e.showBackground!==void 0&&(i.label.showBackground=e.showBackground),e.backgroundColor!==void 0&&(i.label.backgroundColor=e.backgroundColor),e.backgroundPadding!==void 0&&(i.label.backgroundPadding=e.backgroundPadding),e.eyeOffset!==void 0&&(i.label.eyeOffset=e.eyeOffset),e.pixelOffset!==void 0&&(i.label.pixelOffset=e.pixelOffset),e.style!==void 0&&(i.label.style=e.style),e.scale!==void 0&&(i.label.scale=e.scale),r.t||(e.verticalOrigin!==void 0&&(i.label.verticalOrigin=e.verticalOrigin),e.horizontalOrigin!==void 0&&(i.label.horizontalOrigin=e.horizontalOrigin))),e.symbolID!==void 0&&e.symbolID>-1&&this.icoUrl){const w=this.subdomains.length?(r.x+r.y)%this.subdomains.length:"";i.billboard={image:this.getIcoUrl().replace("{id}",e.symbolID).replace("{s}",this.subdomains[w])},Object.assign(i.billboard,this.billboardGraphics),this.serverFirstStyle&&(e.displayHeight!==void 0&&(i.billboard.width=e.displayHeight,i.billboard.height=e.displayHeight),e.eyeOffset!==void 0&&(i.billboard.eyeOffset=e.eyeOffset),e.pixelOffset!==void 0&&(i.billboard.pixelOffset=e.pixelOffset),e.rotation!==void 0&&(i.billboard.rotation=e.rotation),e.alignedAxis!==void 0&&(i.billboard.alignedAxis=e.alignedAxis),e.color!==void 0&&(i.billboard.color=e.color),e.scale!==void 0&&(i.billboard.scale=e.scale),r.t||(e.verticalOrigin!==void 0&&(i.billboard.verticalOrigin=e.verticalOrigin),e.horizontalOrigin!==void 0&&(i.billboard.horizontalOrigin=e.horizontalOrigin)))}r.t&&(i.label.verticalOrigin=$.CENTER,i.label.horizontalOrigin=U.CENTER,i.billboard&&(i.billboard.verticalOrigin=$.CENTER,i.billboard.horizontalOrigin=U.CENTER));const c=new V(i);return c.name=r.t?this._UUIDRoad:this._UUID,c.oid=e.oid,c.priority=e.priority||0,c.xyz=`${r.x}_${r.y}_${r.z-1}`,c}getIcoUrl(){return`${this.proxy?this.proxy.proxy:""}${this.icoUrl}`}getTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.url}`}getRoadTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.roadUrl}`}delaySynchronous(){clearTimeout(this._timer2),this._timer2=setTimeout(()=>{this.synchronousLabel()},100)}synchronousLabel(){let e=this.labelCache.length;for(;e--;){const r=this.labelCache[e];r.timestamp>=this._latelyRefreshStamp&&!this.viewer.entities.contains(r)&&(this._isInitial&&this.aotuCollide&&(r.show=!1),this.viewer.entities.add(r))}if(!this._isInitial){let r=this.viewer.entities.values.length-1;for(;r>=0;){const i=this.viewer.entities.values[r];i&&i.name&&(i.name===this._UUID||i.name===this._UUIDRoad)&&i.timestamp<this._latelyRefreshStamp&&this.viewer.entities.remove(i),r--}this.aotuCollide&&this.collisionDetection()}}collisionDetection(){const e=this.viewer.entities.values,r=[],i=[];let c=e.length;for(;c--;){const p=e[c];if(p.name&&(p.name===this._UUID||p.name===this._UUIDRoad)){const z=this.getScreenCoordinates(p.position.getValue(0));p.show=!0,p.collisionBox=this.getLabelReact({point:z,entity:p});let x=null,u=r.length;for(;!x&&u--;)r[u].xyz===p.xyz&&(x=r[u]);x||(x={xyz:p.xyz,entities:[]},r.push(x)),x.entities.push(p)}}let w=r.length;for(;w--;){const p=r[w];p.entities.sort((z,x)=>z.priority-x.priority);for(let z=0;z<p.entities.length;z++){const x=p.entities[z];if(x.show){for(let u=z+1;u<p.entities.length;u++)p.entities[u].show&&Ct(x.collisionBox,p.entities[u].collisionBox)&&(p.entities[u].show=!1);i.push(x)}}}let g=i.length;for(;g--;)if(i[g].show){i.sort((p,z)=>p.priority-z.priority);for(let p=g+1;p<i.length;p++)i[p].show&&Ct(i[g].collisionBox,i[p].collisionBox)&&(i[p].show=!1)}}getScreenCoordinates(e){const r=this.viewer.scene;return!r||!e?null:typeof E.worldToDrawingBufferCoordinates=="function"?E.worldToDrawingBufferCoordinates(r,e):typeof E.worldToWindowCoordinates=="function"?E.worldToWindowCoordinates(r,e):typeof E.wgs84ToWindowCoordinates=="function"?E.wgs84ToWindowCoordinates(r,e):null}getLabelReact(e){const{point:r,entity:i}=e;let c=parseInt(i.label.font,10);c=c>0?c:15;const w=i.label.text.getValue(0).split(`
`);let g=0;for(let x=0;x<w.length;x++){const u=ta(w[x])/2;g<u&&(g=u)}const p=i.billboard?i.billboard.width.getValue(0)*i.billboard.scale.getValue(0):1,z=i.billboard?i.billboard.height.getValue(0)*i.billboard.scale.getValue(0):1;return{x:(r?r.x:-999)-p/2-this.collisionPadding[3],y:(r?r.y:-999)-z/2-this.collisionPadding[0],width:c*i.label.scale.getValue(0)*g+i.label.pixelOffset.getValue(0).x+p+this.collisionPadding[1],height:c*i.label.scale.getValue(0)*g+i.label.pixelOffset.getValue(0).y+p+this.collisionPadding[2]}}initTDT(e,r){let i=0;this._isInitial=!0,this._queueCall(e);const c=setInterval(()=>{i>3&&(this._isInitial=!1,clearInterval(c),typeof r=="function"&&r()),i%2===0&&this.aotuCollide&&this.collisionDetection(),i++},600);return this}getPropertyValue(e,r,i,c){return r[e]!==void 0?r[e]:i[e]!==void 0?i[e]:c}unbindEvent(){this.viewer.scene.camera.moveEnd.removeEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.removeEventListener(this._changed,this)}activate(){this._latelyGrid=[],this._moveEnd()}destroy(){let e=this.viewer.entities.values.length;for(;e--;){const r=this.viewer.entities.values[e];r.name&&(r.name===this._UUID||r.name===this._UUIDRoad)&&(this.viewer.entities.remove(r),e--)}this.viewer.camera.percentageChanged=.5,this.unbindEvent(),this.handler=this.handler&&this.handler.destroy(),this.proxy=void 0,this.viewer=void 0,this.url=void 0,this.labelGraphics=void 0,this.billboardGraphics=void 0,this.aotuCollide=void 0,this.collisionPadding=void 0,this.tileCache=void 0,this.labelCache=void 0,this._latelyGrid=void 0,this._latelyRefreshStamp=void 0,this._roadTileset=void 0}getLabelVisibility(e){if(!e)return!1;const r=this.viewer.canvas.getBoundingClientRect();return!(e.x<-10||e.x>r.right+10||e.y<-10||e.y>r.bottom+10)}}return T}const aa={class:"map-controls-group"},na={class:"mouse-position-content"},Ge="https://t{s}.tianditu.gov.cn/",st="https://cdn.jsdelivr.net/npm/cesium@1.110/Build/Cesium/",Mt="cesium_tool_panel_open",Pt="cesium_tdt_label_layer_visible",oa={__name:"CesiumContainer",setup(a){let t=null;const o="4267820f43926eaf808d61dc07269beb",_="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzRhZjM0ZC02MmYxLTRhNzgtYTkxNi00YWM2MmMxNmNhMWIiLCJpZCI6MTkzNjkxLCJpYXQiOjE3MDY5NDA2ODF9.mKu1zCK-GOjwDem9-J_Ksv0xEGNsN1zGuShYzOuXJsg",D=["0","1","2","3","4","5","6","7"],b=`${st}Cesium.js`,O=`${st}Widgets/widgets.css`,V={boundBox:{minX:-180,minY:-90,maxX:180,maxY:90},minLevel:1,maxLevel:20},U=[{x:6,y:1,level:2,boundBox:{minX:90,minY:0,maxX:135,maxY:45}},{x:7,y:1,level:2,boundBox:{minX:135,minY:0,maxX:180,maxY:45}},{x:6,y:0,level:2,boundBox:{minX:90,minY:45,maxX:135,maxY:90}},{x:7,y:0,level:2,boundBox:{minX:135,minY:45,maxX:180,maxY:90}},{x:5,y:1,level:2,boundBox:{minX:45,minY:0,maxX:90,maxY:45}},{x:4,y:1,level:2,boundBox:{minX:0,minY:0,maxX:45,maxY:45}},{x:5,y:0,level:2,boundBox:{minX:45,minY:45,maxX:90,maxY:90}},{x:4,y:0,level:2,boundBox:{minX:0,minY:45,maxX:45,maxY:90}},{x:6,y:2,level:2,boundBox:{minX:90,minY:-45,maxX:135,maxY:0}},{x:6,y:3,level:2,boundBox:{minX:90,minY:-90,maxX:135,maxY:-45}},{x:7,y:2,level:2,boundBox:{minX:135,minY:-45,maxX:180,maxY:0}},{x:5,y:2,level:2,boundBox:{minX:45,minY:-45,maxX:90,maxY:0}},{x:4,y:2,level:2,boundBox:{minX:0,minY:-45,maxX:45,maxY:0}},{x:3,y:1,level:2,boundBox:{minX:-45,minY:0,maxX:0,maxY:45}},{x:3,y:0,level:2,boundBox:{minX:-45,minY:45,maxX:0,maxY:90}},{x:2,y:0,level:2,boundBox:{minX:-90,minY:45,maxX:-45,maxY:90}},{x:0,y:1,level:2,boundBox:{minX:-180,minY:0,maxX:-135,maxY:45}},{x:1,y:0,level:2,boundBox:{minX:-135,minY:45,maxX:-90,maxY:90}},{x:0,y:0,level:2,boundBox:{minX:-180,minY:45,maxX:-135,maxY:90}}];let n=null,N=null,E=null,$=null,B=null,F=null,L=0,T=[];const C=K(null),e=K("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米"),r=K(!1),i=K(null),c=K("tianditu"),w=K("tianditu"),g=K(ht(Mt,!0)),p=K(ht(Pt,!0)),z=[],x=K([]),u=new Map,s=new Map,W=new Map,le=new Map,P=lt(),re=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"}],Ne=_e(()=>[...re,...x.value]),Ce=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}],$e=_e(()=>[{value:"tdt-labels",label:"天地图标注",description:"独立控制天地图注记和边界标注叠加层",active:p.value}]),ue=K({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),te=K({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1}),he=K({threshold:10,blend:20,lightStrength:3}),fe=K({isPicking:!1,hasFluid:!1,selectedText:""}),Fe=_e(()=>[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气",status:ue.value.atmosphere||ue.value.fog?"启用":"关闭",statusTone:ue.value.atmosphere||ue.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:ue.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:ue.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:ue.value.tiltShift},{id:"atmosphere",label:"大气",type:"toggle",value:ue.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:C.value?"已加载":"未加载",statusTone:C.value?"success":"neutral",actions:[{id:"load",label:C.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!C.value}],controls:[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:te.value.speedFactor,displayValue:te.value.speedFactor.toFixed(1),disabled:!C.value},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:te.value.arrowLength,displayValue:`${Math.round(te.value.arrowLength/1e3)} km`,disabled:!C.value},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:te.value.trailLength,displayValue:`${Math.round(te.value.trailLength/1e3)} km`,disabled:!C.value},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:te.value.alphaFactor,displayValue:te.value.alphaFactor.toFixed(2),disabled:!C.value}]},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:fe.value.isPicking?"等待选点":fe.value.hasFluid?"已创建":"未创建",statusTone:fe.value.isPicking?"warning":fe.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:fe.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:fe.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!fe.value.hasFluid&&!fe.value.isPicking}],controls:[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:he.value.threshold,displayValue:Number(he.value.threshold).toFixed(2)},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:he.value.blend,displayValue:Number(he.value.blend).toFixed(2)},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:he.value.lightStrength,displayValue:Number(he.value.lightStrength).toFixed(2)}]}]);Et(()=>{qe()}),Se(c,l=>{!n||!t||Dt(l)}),Se(w,async l=>{!n||!t||await ut(l)}),Se(g,l=>{ft(Mt,l)}),Se(p,l=>{ft(Pt,l),Je()});function be(){var l,m;if(C.value){try{(m=(l=n==null?void 0:n.scene)==null?void 0:l.primitives)==null||m.remove(C.value)}catch{}C.value.destroy(),C.value=null}}function ke(){if(E){try{E.destroy()}catch{}E=null}}function Ee(){if(!(!$||!(n!=null&&n.imageryLayers))){try{n.imageryLayers.remove($,!0)}catch{}$=null}}Rt(()=>{if(r.value=!1,N&&(N.destroy(),N=null),be(),ke(),Ee(),B&&(clearInterval(B),B=null),F&&(F.remove(),F=null),Ye(),n){try{n.destroy()}catch{}n=null}});async function qe(){Lt("正在初始化 3D 场景...");try{if(await R(),!t||!document.getElementById("cesiumContainer"))return;q(),ae();const l=ce(),m=await Ot();r.value=!0,l&&m?P.success("天地图基础影像与地形加载成功。"):P.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0}),p.value}catch(l){P.error("Cesium 运行时加载失败",l),P.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{Ft()}}function f(){return n}function y(){return t||window.Cesium}async function R(){if(window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=st),await Xt(O,"cesium-widgets-style"),await Gt(b,"cesium-runtime-script"),t=window.Cesium,!t)throw new Error("Cesium global 未找到");X()}function X(){t!=null&&t.Ion&&(t.Ion.defaultAccessToken=_)}function q(){var Z;const l=typeof t.Map=="function"?t.Map:t.Viewer,m=k(),S=ne();if(n=new l("cesiumContainer",{baseLayerPicker:!0,geocoder:!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:m,selectedImageryProviderViewModel:u.get(c.value)||m[0],terrainProviderViewModels:S,selectedTerrainProviderViewModel:W.get(w.value)||S[0],shouldAnimate:!0}),Be(),et(0),(Z=n._cesiumWidget)!=null&&Z._creditContainer&&(n._cesiumWidget._creditContainer.style.display="none"),n.scene.globe.terrainExaggeration=1,n.scene.globe.terrainExaggerationRelativeHeight=0,n.scene.globe.showGroundAtmosphere=!0,Re(w.value),(()=>{var ie;(ie=n._cesiumWidget)!=null&&ie._creditContainer&&(n._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",n._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(ye=>{ye.style.cssText="display: none !important; visibility: hidden !important;",ye.innerHTML=""}),n.scene&&n.scene.frameState&&n.scene.frameState.creditDisplay&&(n.scene.frameState.creditDisplay.hasCredits=()=>!1,n.scene.frameState.creditDisplay.destroy=()=>{})})(),B=setInterval(()=>{const A=document.querySelector(".cesium-credit-container");A&&A.innerHTML.length>0&&(A.innerHTML="",A.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override")){const A=document.createElement("style");A.id="cesium-credit-override",A.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(A),F=A}}function ae(){N=new t.ScreenSpaceEventHandler(n.scene.canvas),N.setInputAction(l=>{const m=n.camera.getPickRay(l.endPosition);if(!m)return;const S=n.scene.globe.pick(m,n.scene);if(S){const H=t.Cartographic.fromCartesian(S),Z=t.Math.toDegrees(H.longitude).toFixed(6),A=t.Math.toDegrees(H.latitude).toFixed(6),ie=H.height.toFixed(2);e.value=`经度: ${Z}, 纬度: ${A}, 海拔: ${ie}米`}},t.ScreenSpaceEventType.MOUSE_MOVE),N.setInputAction(l=>{const m=l.endPosition,S=l.startPosition;if(!t.defined(n.terrainProvider))return;const H=n.scene.globe.ellipsoid;if(!n.camera.pickEllipsoid(S,H)){const A=n.camera;A.rotate(t.Cartesian3.UNIT_X,-.002*(m.y-S.y)),A.rotate(t.Cartesian3.UNIT_Y,-.002*(m.x-S.x))}},t.ScreenSpaceEventType.RIGHT_DRAG),N.setInputAction(()=>{},t.ScreenSpaceEventType.RIGHT_DOWN),N.setInputAction(()=>{},t.ScreenSpaceEventType.RIGHT_UP)}function ce(){return Qe(),!0}function me(){if(n!=null&&n.imageryLayers)for(;z.length;){const l=z.pop();try{n.imageryLayers.remove(l,!0)}catch{}}}function h(){return[new t.UrlTemplateImageryProvider({url:`${Ge}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${o}`,subdomains:D,tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:18})]}function d(){return new t.UrlTemplateImageryProvider({url:`${Ge}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${o}`,subdomains:D,tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:10})}function M(){return[new t.UrlTemplateImageryProvider({url:`${Jt}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:20})]}function k(){u.clear(),s.clear();const l=re.map(S=>{const H=new t.ProviderViewModel({name:S.label,tooltip:S.description||S.label,category:"项目底图",iconUrl:pe(S.value==="google"?"#5ea1ff":"#37d67a",S.value==="google"?"G":"TD"),creationFunction:()=>S.value==="google"?M():h()});return u.set(S.value,H),s.set(H,S.value),H}),m=Y();return x.value=m.map((S,H)=>{const Z=String((S==null?void 0:S.name)||`官方底图 ${H+1}`).trim(),A=Q(Z,H);return u.set(A,S),s.set(S,A),{value:A,label:`官方 · ${Z}`,description:String((S==null?void 0:S.tooltip)||Z),source:"official"}}),[...l,...m]}function Y(){if(typeof(t==null?void 0:t.createDefaultImageryProviderViewModels)!="function")return[];try{return t.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function Q(l,m){const S=l.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${m}_${S||"basemap"}`}function ne(){return W.clear(),le.clear(),Ce.map(m=>{const S=new t.ProviderViewModel({name:m.label,tooltip:m.description||m.label,category:"项目地形",iconUrl:pe(m.value==="ellipsoid"?"#a3a3a3":"#d0a449",m.value==="cesiumWorld"?"CW":m.value==="ellipsoid"?"EL":"TE"),creationFunction:()=>ve(m.value)});return W.set(m.value,S),le.set(S,m.value),S})}function pe(l,m){const S=String(m||"").replace(/[<>&"']/g,"").slice(0,2),H=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${l}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${S}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(H)}`}function ve(l){if(l==="ellipsoid")return new t.EllipsoidTerrainProvider;if(l==="cesiumWorld")return dt().catch(S=>(P.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),P.error("Cesium 世界地形初始化失败",S),It(l,"ellipsoid"),new t.EllipsoidTerrainProvider));const m=Tt(t);try{return new m({url:`${Ge}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:D,token:o})}catch(S){return P.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),P.error("官方地形初始化失败",S),new t.EllipsoidTerrainProvider}}function Be(){var ie,ye,Ae,De;Ye();const l=(ie=n==null?void 0:n.baseLayerPicker)==null?void 0:ie.viewModel;if(!l||!((ye=t==null?void 0:t.knockout)!=null&&ye.getObservable))return;const m=t.knockout.getObservable(l,"selectedImagery"),S=t.knockout.getObservable(l,"selectedTerrain"),H=[],Z=(Ae=m==null?void 0:m.subscribe)==null?void 0:Ae.call(m,Me=>{const oe=s.get(Me);oe&&(c.value!==oe&&(c.value=oe),Qe())}),A=(De=S==null?void 0:S.subscribe)==null?void 0:De.call(S,Me=>{const oe=le.get(Me);oe&&(w.value!==oe&&(w.value=oe),Re(oe))});Z&&H.push(Z),A&&H.push(A),T=H}function Ye(){T.forEach(l=>{var m;return(m=l==null?void 0:l.dispose)==null?void 0:m.call(l)}),T=[]}function Qe(){var l,m;Je(),(m=(l=n==null?void 0:n.scene)==null?void 0:l.requestRender)==null||m.call(l)}function Je(){var l,m,S,H;if(!(!n||!t)){if(!p.value){Ee(),ke(),(m=(l=n.scene).requestRender)==null||m.call(l);return}At(),zt(),(H=(S=n.scene).requestRender)==null||H.call(S)}}function At(){var l,m,S,H;if(!(n!=null&&n.imageryLayers)||$)return $&&((m=(l=n.imageryLayers).raiseToTop)==null||m.call(l,$)),$;try{return $=n.imageryLayers.addImageryProvider(d()),(H=(S=n.imageryLayers).raiseToTop)==null||H.call(S,$),$}catch(Z){return P.error("天地图标注图层加载失败",Z),null}}function Dt(l){var H,Z,A;if(!n||!t)return!1;const m=(H=n.baseLayerPicker)==null?void 0:H.viewModel,S=u.get(l);if(m&&S)return m.selectedImagery!==S&&(m.selectedImagery=S),Qe(),!0;try{return me(),(l==="google"?M():h()).forEach(ye=>{z.push(n.imageryLayers.addImageryProvider(ye))}),Je(),(A=(Z=n.scene).requestRender)==null||A.call(Z),!0}catch(ie){return P.error("地图源切换失败",ie),!1}}function Ot(){return ut(w.value)}async function ut(l){var A,ie,ye,Ae,De,Me,oe,we,He;if(!n||!t)return!1;const m=(A=n.baseLayerPicker)==null?void 0:A.viewModel,S=W.get(l);if(m&&S)return m.selectedTerrain!==S&&(m.selectedTerrain=S),Re(l),(ye=(ie=n.scene).requestRender)==null||ye.call(ie),!0;const H=++L;if(l==="ellipsoid")return n.terrainProvider=new t.EllipsoidTerrainProvider,Re(l),(De=(Ae=n.scene).requestRender)==null||De.call(Ae),!0;if(l==="cesiumWorld")try{const Oe=await dt();return H!==L?!1:(n.terrainProvider=Oe,Re(l),(oe=(Me=n.scene).requestRender)==null||oe.call(Me),!0)}catch(Oe){return H!==L||(n.terrainProvider=new t.EllipsoidTerrainProvider,Re("ellipsoid"),P.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),P.error("Cesium 世界地形初始化失败",Oe)),!1}const Z=Tt(t);try{return n.terrainProvider=new Z({url:`${Ge}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:D,token:o}),Re(l),(He=(we=n.scene).requestRender)==null||He.call(we),!0}catch(Oe){return n.terrainProvider=new t.EllipsoidTerrainProvider,Re("ellipsoid"),P.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),P.error("官方地形初始化失败",Oe),!1}}function Re(l){var m;(m=n==null?void 0:n.scene)!=null&&m.globe&&(n.scene.globe.depthTestAgainstTerrain=l!=="ellipsoid")}function It(l,m){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{w.value===l&&(w.value=m)},0)}async function dt(){var m,S;X();const l={requestWaterMask:!1,requestVertexNormals:!0};if(typeof t.createWorldTerrainAsync=="function")return t.createWorldTerrainAsync(l);if(typeof t.createWorldTerrain=="function")return t.createWorldTerrain(l);if(typeof((m=t.CesiumTerrainProvider)==null?void 0:m.fromIonAssetId)=="function")return t.CesiumTerrainProvider.fromIonAssetId(1,l);if((S=t.IonResource)!=null&&S.fromAssetId&&t.CesiumTerrainProvider){const H=await t.IonResource.fromAssetId(1);return new t.CesiumTerrainProvider({url:H,...l})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}function zt(){if(E)return!0;try{const l=ra(t);return E=new l(n,{subdomains:D,url:`${Ge}mapservice/GetTiles?lxys={z},{x},{y}&tk=${o}&VERSION=1.0.0`,icoUrl:`${Ge}mapservice/GetIcon?id={id}&tk=${o}`,metadata:V,aotuCollide:!0,collisionPadding:[5,10,8,5],serverFirstStyle:!0,labelGraphics:{font:"28px sans-serif",fontSize:28,fillColor:t.Color.WHITE,scale:.5,outlineColor:t.Color.BLACK,outlineWidth:5,style:t.LabelStyle.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:t.Color.RED,backgroundPadding:new t.Cartesian2(10,10),horizontalOrigin:t.HorizontalOrigin.CENTER,verticalOrigin:t.VerticalOrigin.TOP,eyeOffset:new t.Cartesian3(0,0,10),pixelOffset:t.Cartesian2.ZERO},billboardGraphics:{horizontalOrigin:t.HorizontalOrigin.CENTER,verticalOrigin:t.VerticalOrigin.CENTER,eyeOffset:t.Cartesian3.ZERO,pixelOffset:t.Cartesian2.ZERO,alignedAxis:t.Cartesian3.ZERO,color:t.Color.WHITE,rotation:0,scale:1,width:18,height:18}}),E.initTDT(U,()=>{n.scene.requestRender()}),!0}catch{return!1}}function kt(){const H=[0,2e3,5e3,1e4,15e3],Z=[3e4,3e4,25e3,25e3,2e4],A=[30,30,25,25,20],ie=A.reduce((oe,we)=>oe+we*we,0),ye=new Array(ie),Ae=new Array(ie),De=new Array(ie);let Me=0;for(let oe=0;oe<5;oe++){const we=A[oe],He=A[oe],Oe=Z[oe];for(let Ue=0;Ue<He;Ue++)for(let Ve=0;Ve<we;Ve++){const tt=Me+Ue*we+Ve,it=(Ve-we/2)*(Oe/111320),rt=(Ue-He/2)*(Oe/111320/Math.cos(t.Math.toRadians(35))),Yt=Math.atan2(rt,it)+Math.PI/2+.2*Math.sin(Ve*.5)*Math.cos(Ue*.5);Ae[tt]=t.Math.toDegrees(Yt)%360;const jt=Math.sqrt(it*it+rt*rt),Zt=Math.max(0,1-jt/15);ye[tt]=(5+oe*2)*Zt+2*Math.random(),De[tt]=.5*Math.sin(Ve*.3)*Math.cos(Ue*.3)}Me+=we*He}return{longitude:104,latitude:35,altitude:H,sizeMesh:Z,count:A,hspeed:ye,hdir:Ae,vspeed:De}}function Nt(){if(!n||!t){P.error("Cesium 尚未初始化");return}be();const l=kt();C.value=new Kr(n,{maxWindSpeed:20,cesium:t,speedFactor:te.value.speedFactor,arrowLength:te.value.arrowLength,trailLength:te.value.trailLength,alphaFactor:te.value.alphaFactor}),C.value.loadData(l),n.scene.primitives.add(C.value),C.value.flyTo(),P.success("风场加载成功，可通过下方滑块调节样式")}function Bt(){C.value&&(C.value.speedFactor=te.value.speedFactor,C.value.arrowLength=te.value.arrowLength,C.value.trailLength=te.value.trailLength,C.value.alphaFactor=te.value.alphaFactor)}function Ht({moduleId:l,actionId:m}){var H,Z;(Z=(H={scene:{home:()=>et(),everest:$t,tileset:qt},wind:{load:Nt,clear:be},fluid:{pick:()=>{var A,ie;return(ie=(A=i.value)==null?void 0:A.startPickHeightMap)==null?void 0:ie.call(A)},clear:()=>{var A,ie;return(ie=(A=i.value)==null?void 0:A.clearFluid)==null?void 0:ie.call(A)}}}[l])==null?void 0:H[m])==null||Z.call(H)}function Ut({moduleId:l,controlId:m,value:S}){if(l==="effects"&&m in ue.value){ue.value={...ue.value,[m]:!!S};return}if(l==="wind"&&m in te.value){te.value={...te.value,[m]:Number(S)},Bt();return}l==="fluid"&&m in he.value&&(he.value={...he.value,[m]:Number(S)})}function Vt({overlayId:l,value:m}){l==="tdt-labels"&&(p.value=!!m)}function Wt(l){fe.value={isPicking:!!(l!=null&&l.isPicking),hasFluid:!!(l!=null&&l.hasFluid),selectedText:(l==null?void 0:l.selectedText)||""}}function ht(l,m){if(typeof window>"u")return m;try{const S=window.localStorage.getItem(l);return S==null?m:S==="true"}catch{return m}}function ft(l,m){if(!(typeof window>"u"))try{window.localStorage.setItem(l,String(!!m))}catch{}}function Gt(l,m){return new Promise((S,H)=>{const Z=document.getElementById(m);if(Z){if(Z.getAttribute("data-loaded")==="true"){S();return}Z.addEventListener("load",()=>S(),{once:!0}),Z.addEventListener("error",()=>H(new Error(`脚本加载失败: ${l}`)),{once:!0});return}const A=document.createElement("script");A.id=m,A.src=l,A.async=!0,A.onload=()=>{A.setAttribute("data-loaded","true"),S()},A.onerror=()=>H(new Error(`脚本加载失败: ${l}`)),document.head.appendChild(A)})}function Xt(l,m){return new Promise((S,H)=>{if(document.getElementById(m)){S();return}const A=document.createElement("link");A.id=m,A.rel="stylesheet",A.href=l,A.onload=()=>S(),A.onerror=()=>H(new Error(`样式加载失败: ${l}`)),document.head.appendChild(A)})}function et(l){if(!n)return;const m=typeof l=="number"?l:2;n.camera.flyTo({destination:t.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-t.Math.PI_OVER_TWO,roll:0},duration:m})}function $t(){n&&n.camera.flyTo({destination:t.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:t.Math.toRadians(0),pitch:t.Math.toRadians(-25),roll:0},duration:3})}async function qt(){if(n)try{const l=await t.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");n.scene.primitives.add(l),n.flyTo(l,{duration:3,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-25),l.boundingSphere.radius*2.5)})}catch(l){P.error(`加载模型失败: ${l}`),P.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return(l,m)=>(I(),G(xe,null,[m[5]||(m[5]=v("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),r.value?(I(),Le(Xe(Si),{key:0,headless:"","get-viewer":f,"get-cesium":y,controls:ue.value},null,8,["controls"])):ee("",!0),r.value?(I(),Le(Xe(Wr),{key:1,ref_key:"fluidPanelRef",ref:i,headless:"","get-viewer":f,"get-cesium":y,params:he.value,onStateChange:Wt},null,40,["params"])):ee("",!0),r.value?(I(),Le(Lr,{key:2,open:g.value,"onUpdate:open":m[0]||(m[0]=S=>g.value=S),"active-basemap":c.value,"onUpdate:activeBasemap":m[1]||(m[1]=S=>c.value=S),"active-terrain":w.value,"onUpdate:activeTerrain":m[2]||(m[2]=S=>w.value=S),"basemap-options":Ne.value,"terrain-options":Ce,"overlay-options":$e.value,modules:Fe.value,onModuleAction:Ht,onControlChange:Ut,onOverlayToggle:Vt},null,8,["open","active-basemap","active-terrain","basemap-options","overlay-options","modules"])):ee("",!0),v("div",aa,[v("div",na,J(e.value),1),m[4]||(m[4]=v("div",{class:"divider"},null,-1)),v("button",{class:"home-btn",title:"回到初始位置",onClick:et},[...m[3]||(m[3]=[v("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[v("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},_a=Ke(oa,[["__scopeId","data-v-49d7aa48"]]);export{_a as default};
