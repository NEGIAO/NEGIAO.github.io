const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-DtnbiQTH.js","./vendor-echarts-all-bIcaucJq.js","./vendor-libs-C22iFKzE.js","./vendor-vue-CmuMwCC6.js","./vendor-jszip-C96CrfCN.js"])))=>i.map(i=>d[i]);
var Ut=Object.defineProperty;var Vt=(a,t,o)=>t in a?Ut(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;var ct=(a,t,o)=>Vt(a,typeof t!="symbol"?t+"":t,o);import{_ as Ze,e as nt,K as bt,J as wt,I as Wt}from"./index-DrRto-Ru.js";import{_ as Gt}from"./vendor-runtime-Dp1pzeXC.js";import{C as St,o as Tt,w as Pe,d as N,c as $,f as w,t as re,G as ue,W as je,X as Ye,g as ae,r as Q,P as Xt,a as Be,u as Ce,F as _e,e as Ae,n as ve,x as Me,S as $e,I as ut,q as be,v as $t,H as Ge}from"./vendor-vue-CmuMwCC6.js";import{af as tt,ag as it,ah as qt,X as Yt,e as dt,ac as ht,ai as ft,aj as jt,T as mt,H as Zt,a2 as Kt,ak as Qt,al as Jt,am as ei,an as ti,q as ii,o as ri,ao as ai,ap as ni}from"./vendor-libs-C22iFKzE.js";import"./vendor-ol-all-BF0m1MzN.js";import"./vendor-geotiff-ChZXZpNw.js";import"./vendor-lerc-B7uDJLnU.js";import"./vendor-jszip-C96CrfCN.js";import"./vendor-proj4-Jlp8PM4D.js";import"./vendor-axios-Bdz_Fv8M.js";const oi={key:0,class:"advanced-effects-root"},si={class:"effects-panel"},li={class:"panel-head"},ci={class:"effect-switches"},ui={class:"switch-item"},di={class:"switch-item"},hi={class:"switch-item"},fi={class:"switch-item"},mi={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(a){const t=a,o=nt(),y=Q(null),A=Q(!1),x=Q(!1),I=Q(!1),V=Q(!1),U=Q(!1);let l=null,k=null,L=null,j=!1,H=null,P=null,M=null,f=null,E=null,e=null,r=null,i=null,s=!1,S=0,m=0,p=typeof performance<"u"?performance.now():Date.now();function _(){return M||(M=Gt(()=>import("./cesiumFxRuntime-DtnbiQTH.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(d=>{var C;const c=(C=d==null?void 0:d.getCesiumFxEchartsRuntime)==null?void 0:C.call(d);if(!c)throw new Error("Cinematic FX 图表运行时加载失败");return P=c,c}).catch(d=>{throw M=null,d}),M)}async function b(){return P||_()}const n={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},F={hdr:null,bloom:null,sky:null};St(()=>{O()}),Tt(()=>{R()}),Pe(()=>t.controls,d=>{B(d||{})},{deep:!0,immediate:!0});function B(d){Object.prototype.hasOwnProperty.call(d,"fog")&&(A.value=!!d.fog),Object.prototype.hasOwnProperty.call(d,"hbao")&&(x.value=!!d.hbao),Object.prototype.hasOwnProperty.call(d,"tiltShift")&&(I.value=!!d.tiltShift),Object.prototype.hasOwnProperty.call(d,"atmosphere")&&(V.value=!!d.atmosphere)}function O(){let d=0;f=window.setInterval(async()=>{var z,q;d+=1;const c=(z=t.getViewer)==null?void 0:z.call(t),C=((q=t.getCesium)==null?void 0:q.call(t))||window.Cesium;if(c&&C){clearInterval(f),f=null;try{ee(c),le(c),we(c,C),Oe(c),o.success("高级视觉效果已启用。")}catch(K){o.error("高级视觉效果初始化失败",K),o.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}d>=150&&(clearInterval(f),f=null,o.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function ee(d){var C,z,q,K,ie,me;const c=d==null?void 0:d.scene;if(c){if(typeof c.highDynamicRange=="boolean"&&(F.hdr=c.highDynamicRange),(C=c.postProcessStages)!=null&&C.bloom){const pe=c.postProcessStages.bloom;F.bloom={enabled:!!pe.enabled,contrast:(z=pe.uniforms)==null?void 0:z.contrast,brightness:(q=pe.uniforms)==null?void 0:q.brightness,delta:(K=pe.uniforms)==null?void 0:K.delta,sigma:(ie=pe.uniforms)==null?void 0:ie.sigma,stepSize:(me=pe.uniforms)==null?void 0:me.stepSize}}c.skyAtmosphere&&(F.sky={hueShift:c.skyAtmosphere.hueShift,saturationShift:c.skyAtmosphere.saturationShift,brightnessShift:c.skyAtmosphere.brightnessShift})}}function we(d,c){var z;!((z=d==null?void 0:d.scene)!=null&&z.postProcessStages)||!(c!=null&&c.PostProcessStage)||(de(d,c),fe(d,c),qe(d,c),V.value?Le(d,1200):Fe(d))}function le(d){var C;const c=d==null?void 0:d.scene;(C=c==null?void 0:c.renderError)!=null&&C.addEventListener&&(c.rethrowRenderErrors=!1,i=c.renderError.addEventListener((z,q)=>{o.error("Cesium 渲染异常，已触发降级保护",q),J(),s||(s=!0,o.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function J(){A.value=!1,I.value=!1,x.value=!1,V.value=!1,l&&(l.enabled=!1),k&&(k.enabled=!1),L&&(L.enabled=!1)}function de(d,c){l||(l=new c.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new c.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),d.scene.postProcessStages.add(l),l.enabled=A.value)}function fe(d,c){var z,q;const C=(z=d==null?void 0:d.scene)==null?void 0:z.postProcessStages;C&&(C.ambientOcclusion?(L=C.ambientOcclusion,j=!1):(q=c==null?void 0:c.PostProcessStageLibrary)!=null&&q.createAmbientOcclusionStage&&(L=c.PostProcessStageLibrary.createAmbientOcclusionStage(),C.add(L),j=!0),L&&(L.enabled=x.value,L.uniforms&&("intensity"in L.uniforms&&(L.uniforms.intensity=4.2),"bias"in L.uniforms&&(L.uniforms.bias=.08),"lengthCap"in L.uniforms&&(L.uniforms.lengthCap=.35),"stepSize"in L.uniforms&&(L.uniforms.stepSize=1.8),"frustumLength"in L.uniforms&&(L.uniforms.frustumLength=1200))))}function qe(d,c){k||(k=new c.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),d.scene.postProcessStages.add(k),k.enabled=!1)}function Oe(d){const c=d==null?void 0:d.scene;c&&(r=c.preRender.addEventListener(()=>{var K;const C=W(d),z=Number(((K=d==null?void 0:d.camera)==null?void 0:K.pitch)??-1.2);S+=1;const q=typeof performance<"u"?performance.now():Date.now();if(q-p>=1e3&&(m=Math.round(S*1e3/(q-p)),S=0,p=q),l&&(l.enabled=A.value,l.uniforms.cameraHeightFactor=X(C,150,12e3),l.uniforms.fogDensity=55e-5+(1-l.uniforms.cameraHeightFactor)*.00125),L&&(L.enabled=x.value),k){const ie=z>-.62,me=ie?ne((z+.62)/.5):0;k.enabled=I.value&&ie,k.uniforms.blurStrength=me}V.value?Le(d,C):Fe(d)}))}function Le(d,c){var ie;const C=d==null?void 0:d.scene;if(!C)return;typeof C.highDynamicRange=="boolean"&&(C.highDynamicRange=!0);const z=(ie=C.postProcessStages)==null?void 0:ie.bloom;z&&(z.enabled=!0,z.uniforms&&("contrast"in z.uniforms&&(z.uniforms.contrast=149),"brightness"in z.uniforms&&(z.uniforms.brightness=-.12),"delta"in z.uniforms&&(z.uniforms.delta=1),"sigma"in z.uniforms&&(z.uniforms.sigma=3.25),"stepSize"in z.uniforms&&(z.uniforms.stepSize=5)));const q=C.skyAtmosphere;if(!q)return;const K=X(c,500,12e4);q.hueShift=-.035+K*.035,q.saturationShift=-.14+K*.09,q.brightnessShift=.03+(1-K)*.08}function Fe(d){var z;const c=d==null?void 0:d.scene;if(!c)return;typeof c.highDynamicRange=="boolean"&&F.hdr!==null&&(c.highDynamicRange=F.hdr);const C=(z=c.postProcessStages)==null?void 0:z.bloom;C&&F.bloom&&(C.enabled=F.bloom.enabled,C.uniforms&&("contrast"in C.uniforms&&F.bloom.contrast!==void 0&&(C.uniforms.contrast=F.bloom.contrast),"brightness"in C.uniforms&&F.bloom.brightness!==void 0&&(C.uniforms.brightness=F.bloom.brightness),"delta"in C.uniforms&&F.bloom.delta!==void 0&&(C.uniforms.delta=F.bloom.delta),"sigma"in C.uniforms&&F.bloom.sigma!==void 0&&(C.uniforms.sigma=F.bloom.sigma),"stepSize"in C.uniforms&&F.bloom.stepSize!==void 0&&(C.uniforms.stepSize=F.bloom.stepSize))),c.skyAtmosphere&&F.sky&&(c.skyAtmosphere.hueShift=F.sky.hueShift,c.skyAtmosphere.saturationShift=F.sky.saturationShift,c.skyAtmosphere.brightnessShift=F.sky.brightnessShift)}function Se(){E&&(clearInterval(E),E=null)}async function ze(){var z,q;const d=!U.value;if(U.value=d,!d){Se();return}const c=(z=t.getViewer)==null?void 0:z.call(t),C=((q=t.getCesium)==null?void 0:q.call(t))||window.Cesium;if(!c||!C){U.value=!1,o.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await ke(c,C),He(c,C),h(c,C)}catch(K){U.value=!1,o.error("图表模块加载失败",K)}}async function ke(d,c){await b(),await Xt(),y.value&&(H||(H=P.init(y.value),v()),e||(e=()=>{H==null||H.resize()},window.addEventListener("resize",e)),H.resize(),h(d,c))}function He(d,c){E||(E=window.setInterval(()=>{!H||!U.value||h(d,c)},1200))}function h(d,c){var ie;const C=new Date,z=`${he(C.getHours())}:${he(C.getMinutes())}:${he(C.getSeconds())}`,q=Number((W(d)/1e3).toFixed(2)),K=Number(c.Math.toDegrees(((ie=d==null?void 0:d.camera)==null?void 0:ie.pitch)??0).toFixed(1));ce(n.labels,z,20),ce(n.cameraHeightKm,q,20),ce(n.pitchDeg,K,20),ce(n.fps,m,20),H.setOption({xAxis:{data:n.labels},series:[{data:n.cameraHeightKm},{data:n.pitchDeg},{data:n.fps}]})}function v(){H&&H.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function R(){var C,z;f&&(clearInterval(f),f=null),Se();const d=(C=t.getViewer)==null?void 0:C.call(t),c=(z=d==null?void 0:d.scene)==null?void 0:z.postProcessStages;r&&(r(),r=null),i&&(i(),i=null),l&&c&&c.remove(l),l=null,k&&c&&c.remove(k),k=null,L&&(j&&c&&c.remove(L),L=null),j=!1,d&&Fe(d),e&&(window.removeEventListener("resize",e),e=null),H&&(H.dispose(),H=null),P=null,s=!1}function W(d){var q,K,ie;const c=(K=(q=d==null?void 0:d.scene)==null?void 0:q.globe)==null?void 0:K.ellipsoid,C=(ie=d==null?void 0:d.camera)==null?void 0:ie.positionWC;if(!c||!C)return 0;const z=c.cartesianToCartographic(C);return Math.max(0,Number((z==null?void 0:z.height)??0))}function X(d,c,C){return!Number.isFinite(d)||C<=c?0:ne((d-c)/(C-c))}function ne(d){return Math.min(1,Math.max(0,Number(d)||0))}function ce(d,c,C){d.push(c),d.length>C&&d.shift()}function he(d){return String(d).padStart(2,"0")}return(d,c)=>a.headless?ae("",!0):(N(),$("div",oi,[w("div",si,[w("div",li,[c[4]||(c[4]=w("span",{class:"panel-title"},"Cinematic FX",-1)),w("button",{class:"panel-btn",onClick:ze},re(U.value?"隐藏图表":"显示图表"),1)]),w("div",ci,[w("label",ui,[ue(w("input",{"onUpdate:modelValue":c[0]||(c[0]=C=>A.value=C),type:"checkbox"},null,512),[[je,A.value]]),c[5]||(c[5]=w("span",null,"电影级高度雾",-1))]),w("label",di,[ue(w("input",{"onUpdate:modelValue":c[1]||(c[1]=C=>x.value=C),type:"checkbox"},null,512),[[je,x.value]]),c[6]||(c[6]=w("span",null,"HBAO 微阴影",-1))]),w("label",hi,[ue(w("input",{"onUpdate:modelValue":c[2]||(c[2]=C=>I.value=C),type:"checkbox"},null,512),[[je,I.value]]),c[7]||(c[7]=w("span",null,"移轴摄影",-1))]),w("label",fi,[ue(w("input",{"onUpdate:modelValue":c[3]||(c[3]=C=>V.value=C),type:"checkbox"},null,512),[[je,V.value]]),c[8]||(c[8]=w("span",null,"动态大气 + Bloom",-1))])]),ue(w("div",{ref_key:"chartRef",ref:y,class:"fx-chart"},null,512),[[Ye,U.value]])])]))}},pi=Ze(mi,[["__scopeId","data-v-5d8bf97e"]]),gi={key:0,class:"launcher-count"},vi={class:"panel-header"},yi={class:"panel-title-block"},xi={class:"panel-mark"},_i={class:"panel-copy"},bi={class:"panel-subtitle"},wi={class:"panel-actions"},Si=["title"],Ti={class:"panel-tabs","aria-label":"3D 工具分类"},Ci=["aria-pressed","onClick"],Mi={class:"panel-scroll"},Pi={class:"panel-page"},Li={class:"overview-grid"},Fi={class:"overview-tile"},Ei={class:"overview-tile"},Ri={class:"overview-tile"},Di={key:0,class:"quick-actions"},Ai=["disabled","onClick"],Ii={key:1,class:"empty-state"},Oi={class:"panel-page"},zi={key:0,class:"option-group"},ki={class:"section-head"},Ni={class:"option-grid"},Bi=["aria-pressed","title","onClick"],Hi={key:1,class:"option-group"},Ui={class:"section-head"},Vi={class:"option-grid"},Wi=["aria-pressed","title","onClick"],Gi={key:2,class:"empty-state"},Xi={class:"panel-page"},$i={class:"module-list"},qi=["aria-expanded","onClick"],Yi={class:"module-icon"},ji={class:"module-copy"},Zi={class:"module-title"},Ki={key:0,class:"module-desc"},Qi={class:"module-head-side"},Ji={key:0,class:"module-body"},er={key:0,class:"module-actions"},tr=["disabled","onClick"],ir={key:1,class:"control-list"},rr={class:"control-label"},ar=["min","max","step","value","disabled","onInput"],nr=["min","max","step","value","disabled","onInput"],or=["value","disabled","onChange"],sr=["value"],lr=["aria-pressed","disabled","onClick"],cr={key:3,class:"control-value"},ur={key:0,class:"empty-state"},dr={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change"],setup(a,{emit:t}){const o=a,y=t,A=r(),x=Q(A.activeTab||"scene"),I=Q(!!A.compactMode),V=Q(new Set(A.expandedModuleIds||["effects"])),U=be(()=>o.embedded||o.open),l=be(()=>o.modules.find(_=>_.id==="scene")||null),k=be(()=>{var _;return((_=l.value)==null?void 0:_.actions)||[]}),L=be(()=>o.modules.filter(_=>_.id!=="scene")),j=be(()=>L.value.filter(_=>_.statusTone==="success"||_.statusTone==="warning").length),H=[{id:"scene",label:"场景",icon:it},{id:"layers",label:"图层",icon:dt},{id:"modules",label:"模块",icon:tt}],P=be(()=>{var _;return((_=o.basemapOptions.find(b=>b.value===o.activeBasemap))==null?void 0:_.label)||"未选择"}),M=be(()=>{var _;return((_=o.terrainOptions.find(b=>b.value===o.activeTerrain))==null?void 0:_.label)||"未选择"});Pe(()=>o.modules.map(_=>_.id),_=>{_.includes(x.value)||x.value==="scene"||x.value==="layers"||x.value==="modules"||(x.value="scene")},{immediate:!0}),Pe([x,I,V],i,{deep:!0});function f(_){y("update:open",_)}function E(_){return V.value.has(_)}function e(_){const b=new Set(V.value);b.has(_)?b.delete(_):b.add(_),V.value=b}function r(){if(typeof window>"u")return{};try{const _=window.localStorage.getItem(o.storageKey);return _?JSON.parse(_):{}}catch{return{}}}function i(){if(!(typeof window>"u"))try{window.localStorage.setItem(o.storageKey,JSON.stringify({activeTab:x.value,compactMode:I.value,expandedModuleIds:[...V.value]}))}catch{}}function s(_){return{scene:it,effects:ri,wind:ii,fluid:ti}[_]||tt}function S(_,b){var F;return((F={scene:{home:Jt,everest:ft,tileset:Qt},wind:{load:Kt,clear:mt},fluid:{pick:Zt,clear:mt}}[_])==null?void 0:F[b])||ei}function m(_,b){y("module-action",{moduleId:_,actionId:b})}function p(_,b,n){const F=b.type==="range"?Number(n):n;y("control-change",{moduleId:_,controlId:b.id,value:F})}return(_,b)=>(N(),$("aside",{class:ve(["cesium-tool-shell",{"is-open":U.value,"is-embedded":a.embedded}])},[!a.embedded&&!U.value?(N(),$("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:b[0]||(b[0]=n=>f(!0))},[Be(Ce(tt),{size:18,"stroke-width":"2"}),b[3]||(b[3]=w("span",null,"高级控制台",-1)),j.value?(N(),$("span",gi,re(j.value),1)):ae("",!0)])):ae("",!0),ue(w("section",{class:ve(["cesium-tool-panel",{compact:I.value}]),"aria-label":"Cesium 高级控制台"},[w("header",vi,[w("div",yi,[w("span",xi,[Be(Ce(it),{size:18,"stroke-width":"2"})]),w("span",_i,[b[4]||(b[4]=w("span",{class:"panel-title"},"3D 高级控制台",-1)),w("span",bi,re(P.value)+" / "+re(M.value),1)])]),w("div",wi,[w("button",{class:"icon-btn",type:"button",title:I.value?"切换为舒展布局":"切换为紧凑布局",onClick:b[1]||(b[1]=n=>I.value=!I.value)},[Be(Ce(qt),{size:16,"stroke-width":"2"})],8,Si),a.embedded?ae("",!0):(N(),$("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:b[2]||(b[2]=n=>f(!1))},[Be(Ce(Yt),{size:17,"stroke-width":"2"})]))])]),w("nav",Ti,[(N(),$(_e,null,Ae(H,n=>w("button",{key:n.id,class:ve(["tab-btn",{active:x.value===n.id}]),type:"button","aria-pressed":x.value===n.id,onClick:F=>x.value=n.id},[(N(),Me($e(n.icon),{size:15,"stroke-width":"2"})),w("span",null,re(n.label),1)],10,Ci)),64))]),w("div",Mi,[ue(w("section",Pi,[w("div",Li,[w("div",Fi,[b[5]||(b[5]=w("span",{class:"overview-label"},"地图源",-1)),w("strong",null,re(P.value),1)]),w("div",Ei,[b[6]||(b[6]=w("span",{class:"overview-label"},"地形",-1)),w("strong",null,re(M.value),1)]),w("div",Ri,[b[7]||(b[7]=w("span",{class:"overview-label"},"模块",-1)),w("strong",null,re(j.value)+"/"+re(L.value.length),1)])]),k.value.length?(N(),$("div",Di,[(N(!0),$(_e,null,Ae(k.value,n=>(N(),$("button",{key:n.id,class:ve(["tool-action",[n.variant||"default",{active:n.active}]]),disabled:n.disabled,type:"button",onClick:F=>m(l.value.id,n.id)},[(N(),Me($e(S(l.value.id,n.id)),{size:15,"stroke-width":"2"})),ut(" "+re(n.label),1)],10,Ai))),128))])):(N(),$("div",Ii," 暂无场景快捷操作 "))],512),[[Ye,x.value==="scene"]]),ue(w("section",Oi,[a.basemapOptions.length?(N(),$("div",zi,[w("div",ki,[Be(Ce(dt),{size:16,"stroke-width":"2"}),b[8]||(b[8]=w("span",null,"地图源",-1))]),w("div",Ni,[(N(!0),$(_e,null,Ae(a.basemapOptions,n=>(N(),$("button",{key:n.value,class:ve(["option-card",{active:n.value===a.activeBasemap}]),type:"button","aria-pressed":n.value===a.activeBasemap,title:n.description||n.label,onClick:F=>_.$emit("update:activeBasemap",n.value)},[w("span",null,re(n.label),1),n.value===a.activeBasemap?(N(),Me(Ce(ht),{key:0,size:15,"stroke-width":"2.4"})):ae("",!0)],10,Bi))),128))])])):ae("",!0),a.terrainOptions.length?(N(),$("div",Hi,[w("div",Ui,[Be(Ce(ft),{size:16,"stroke-width":"2"}),b[9]||(b[9]=w("span",null,"地形",-1))]),w("div",Vi,[(N(!0),$(_e,null,Ae(a.terrainOptions,n=>(N(),$("button",{key:n.value,class:ve(["option-card",{active:n.value===a.activeTerrain}]),type:"button","aria-pressed":n.value===a.activeTerrain,title:n.description||n.label,onClick:F=>_.$emit("update:activeTerrain",n.value)},[w("span",null,re(n.label),1),n.value===a.activeTerrain?(N(),Me(Ce(ht),{key:0,size:15,"stroke-width":"2.4"})):ae("",!0)],10,Wi))),128))])])):ae("",!0),!a.basemapOptions.length&&!a.terrainOptions.length?(N(),$("div",Gi," 暂无图层配置项 ")):ae("",!0)],512),[[Ye,x.value==="layers"]]),ue(w("section",Xi,[w("div",$i,[(N(!0),$(_e,null,Ae(L.value,n=>{var F,B;return N(),$("article",{key:n.id,class:ve(["module-item",{expanded:E(n.id)}])},[w("button",{class:"module-head",type:"button","aria-expanded":E(n.id),onClick:O=>e(n.id)},[w("span",Yi,[(N(),Me($e(s(n.id)),{size:16,"stroke-width":"2"}))]),w("span",ji,[w("span",Zi,re(n.title),1),n.description?(N(),$("span",Ki,re(n.description),1)):ae("",!0)]),w("span",Qi,[n.status?(N(),$("span",{key:0,class:ve(["module-status",n.statusTone||"neutral"])},re(n.status),3)):ae("",!0),Be(Ce(jt),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,qi),E(n.id)?(N(),$("div",Ji,[(F=n.actions)!=null&&F.length?(N(),$("div",er,[(N(!0),$(_e,null,Ae(n.actions,O=>(N(),$("button",{key:O.id,class:ve(["tool-action",[O.variant||"default",{active:O.active}]]),disabled:O.disabled,type:"button",onClick:ee=>m(n.id,O.id)},[(N(),Me($e(S(n.id,O.id)),{size:14,"stroke-width":"2"})),ut(" "+re(O.label),1)],10,tr))),128))])):ae("",!0),(B=n.controls)!=null&&B.length?(N(),$("div",ir,[(N(!0),$(_e,null,Ae(n.controls,O=>(N(),$("label",{key:O.id,class:ve(["control-row",`control-${O.type}`])},[w("span",rr,re(O.label),1),O.type==="range"?(N(),$(_e,{key:0},[w("input",{class:"control-range",type:"range",min:O.min,max:O.max,step:O.step,value:O.value,disabled:O.disabled,onInput:ee=>p(n.id,O,ee.target.value)},null,40,ar),w("input",{class:"control-number",type:"number",min:O.min,max:O.max,step:O.step,value:O.value,disabled:O.disabled,onInput:ee=>p(n.id,O,ee.target.value)},null,40,nr)],64)):O.type==="select"?(N(),$("select",{key:1,class:"control-select",value:O.value,disabled:O.disabled,onChange:ee=>p(n.id,O,ee.target.value)},[(N(!0),$(_e,null,Ae(O.options||[],ee=>(N(),$("option",{key:ee.value,value:ee.value},re(ee.label),9,sr))),128))],40,or)):O.type==="toggle"?(N(),$("button",{key:2,class:ve(["toggle-control",{active:!!O.value}]),type:"button","aria-pressed":!!O.value,disabled:O.disabled,onClick:ee=>p(n.id,O,!O.value)},[...b[10]||(b[10]=[w("span",{class:"toggle-track"},[w("span",{class:"toggle-thumb"})],-1)])],10,lr)):ae("",!0),O.displayValue?(N(),$("span",cr,re(O.displayValue),1)):ae("",!0)],2))),128))])):ae("",!0)])):ae("",!0)],2)}),128))]),L.value.length?ae("",!0):(N(),$("div",ur," 暂无可用功能模块 "))],512),[[Ye,x.value==="modules"]])])],2),[[Ye,a.embedded||U.value]])],2))}},hr=Ze(dr,[["__scopeId","data-v-a78ef0c8"]]);function fr(a){if(!a)throw new Error("Cesium runtime is required for FluidRenderer.");function t(E){return(E==null?void 0:E._view)||(E==null?void 0:E.view)}function o(E){const e=t(E);if(!(e!=null&&e.passState))throw new Error("Cesium scene passState is unavailable.");return e.passState}function y(E){const e=t(E);return(e==null?void 0:e.frustumCommandsList)||(e==null?void 0:e._frustumCommandsList)||[]}const A=`
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
`,x=`
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
`,I=`
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
`,l=`
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
`;class k{constructor(e){this.commandType=e.commandType,this.geometry=e.geometry,this.attributeLocations=e.attributeLocations,this.primitiveType=e.primitiveType,this.uniformMap=e.uniformMap,this.vertexShaderSource=e.vertexShaderSource,this.fragmentShaderSource=e.fragmentShaderSource,this.rawRenderState=e.rawRenderState,this.framebuffer=e.framebuffer,this.isPostRender=e.isPostRender,this.outputTexture=e.outputTexture,this.autoClear=a.defaultValue(e.autoClear,!1),this.preExecute=e.preExecute,this.modelMatrix=a.defaultValue(e.modelMatrix,a.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new a.ClearCommand({color:new a.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:a.Pass.OPAQUE}))}createCommand(e){switch(this.commandType){case"Draw":{const r=a.VertexArray.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:a.BufferUsage.STATIC_DRAW}),i=a.ShaderProgram.fromCache({context:e,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),s=a.RenderState.fromCache(this.rawRenderState);return new a.DrawCommand({owner:this,vertexArray:r,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:i,framebuffer:this.framebuffer,renderState:s,pass:a.Pass.OPAQUE})}case"Compute":return new a.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(e,r){this.geometry=r;const i=a.VertexArray.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:a.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=i}update(e){this.show&&(a.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(e.context),this.commandToExecute.isPostRender=this.isPostRender),a.defined(this.preExecute)&&this.preExecute(this),a.defined(this.clearCommand)&&e.commandList.push(this.clearCommand),e.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return a.defined(this.commandToExecute)&&(a.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),a.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),a.destroyObject(this)}}class L{constructor(){}static loadText(e){const r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(),r.responseText}static getFullscreenQuad(){return new a.Geometry({attributes:new a.GeometryAttributes({position:new a.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new a.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(e){if(a.defined(e.arrayBufferView)){const i={};i.arrayBufferView=e.arrayBufferView,e.source=i,e.flipY=!1}return new a.Texture(e)}static createDepthFramebuffer(e,r,i){return new a.Framebuffer({context:e,colorTextures:[this.createTexture({context:e,width:r,height:i,flipY:!1,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(r*i*4)})],depthRenderbuffer:new a.Renderbuffer({context:e,width:r,height:i,format:a.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(e,r,i,s=!1){const S={context:e,colorTextures:[r],destroyAttachments:s};return i&&(S.depthTexture=i),new a.Framebuffer(S)}static createRawRenderState(e){const s={viewport:e.viewport,depthTest:e.depthTest,depthMask:e.depthMask,blending:e.blending};return a.Appearance.getDefaultRenderState(!0,!1,s)}}const f=class f{constructor(e,r={}){if(!e)throw new Error("Cesium Viewer is required");this.viewer=e,this._initConfiguration(r),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(e){this.config={resolution:new a.Cartesian2(e.width||f.DEFAULTS.width,e.height||f.DEFAULTS.height),dimensions:e.dimensions||f.DEFAULTS.dimensions.clone(),heightRange:{min:e.minHeight??f.DEFAULTS.heightRange[0],max:e.maxHeight??f.DEFAULTS.heightRange[1]},baseHeight:e.baseHeight??f.DEFAULTS.baseHeight,fluidParams:e.fluidParams||f.DEFAULTS.fluidParams.clone(),customParams:e.customParams||f.DEFAULTS.customParams.clone(),lonLat:e.lonLat||[...f.DEFAULTS.lonLat],timeStep:e.timeStep||f.DEFAULTS.timeStep,heightMapSource:e.heightMapSource||f.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const e=()=>L.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:e(),B:e(),C:e(),D:e()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(e){if(!(e!=null&&e.arrayBufferView)||!e.width||!e.height)throw new Error("Invalid height map source.");return L.createTexture({context:this.viewer.scene.context,width:e.width,height:e.height,flipY:!1,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT,arrayBufferView:e.arrayBufferView,sampler:new a.Sampler({wrapS:a.TextureWrap.CLAMP_TO_EDGE,wrapT:a.TextureWrap.CLAMP_TO_EDGE,minificationFilter:a.TextureMinificationFilter.LINEAR,magnificationFilter:a.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var B,O;const e=this.viewer.scene.context,r=L.createDepthFramebuffer(e,this.config.resolution.x,this.config.resolution.y),i=this.viewer.scene,s=i.frameState,S=o(this.viewer.scene),m=i.camera,p=s.camera,_=S.framebuffer,b=a.BoundingRectangle.clone(S.viewport,new a.BoundingRectangle);let n=null,F=[];try{S.viewport.x=0,S.viewport.y=0,S.viewport.width=this.config.resolution.x,S.viewport.height=this.config.resolution.y,S.framebuffer=r,i.camera=this.heightMapCamera,s.camera=this.heightMapCamera,s.context.uniformState.updateCamera(this.heightMapCamera),F=this._processHeightMapShaders(),this._renderDepthPrepass(S);const ee=L.createTexture({context:e,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT});return n=L.createFramebuffer(e,ee),this._copyTexture(r.getColorTexture(0),n),ee}finally{this._restoreHeightMapShaders(F),S.framebuffer=_,a.BoundingRectangle.clone(b,S.viewport),i.camera=m,s.camera=p,p&&s.context.uniformState.updateCamera(p),n&&!((B=n.isDestroyed)!=null&&B.call(n))&&n.destroy(),r&&!((O=r.isDestroyed)!=null&&O.call(r))&&r.destroy()}}_renderDepthPrepass(e){const r=this.viewer.scene.frameState;r.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(s=>s.execute(this.viewer.scene.context,e))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:a.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:a.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const e={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...e,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:x}),this._createComputePass("B",{uniforms:{...e,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:I}),this._createComputePass("C",{uniforms:{...e,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:V}),this._createComputePass("D",{uniforms:{...e,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:U})]}_createComputePass(e,{uniforms:r,shaderSource:i}){return new k({commandType:"Compute",uniformMap:r,fragmentShaderSource:new a.ShaderSource({sources:[A,i]}),geometry:L.getFullscreenQuad(),outputTexture:this.textures[e],preExecute:s=>s.commandToExecute.outputTexture=this.textures[e]})}_createMainRenderPass(){const e=H([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new k({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new a.ShaderSource({sources:[A,l]}),geometry:this._createBoxGeometry(),modelMatrix:e,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,colorTexture:()=>{var e,r,i,s;return(s=(i=(r=(e=t(this.viewer.scene))==null?void 0:e.globeDepth)==null?void 0:r.colorFramebufferManager)==null?void 0:i._colorTextures)==null?void 0:s[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(e=>this.viewer.scene.primitives.add(e)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(e){const r=this.viewer.camera.getPickRay(e);return this.viewer.scene.globe.pick(r,this.viewer.scene)}_createOrthographicCamera(){const e=new a.Camera(this.viewer.scene);e.frustum=new a.OrthographicOffCenterFrustum;const[r,i]=this.config.lonLat,s=a.Cartesian3.fromDegrees(r,i,this.config.baseHeight),S=a.Transforms.eastNorthUpToFixedFrame(s),m=e.frustum;m.near=.01,m.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),m.left=-this.config.dimensions.x/2,m.right=this.config.dimensions.x/2,m.bottom=-this.config.dimensions.y/2,m.top=this.config.dimensions.y/2;const p=a.Matrix4.getColumn(S,2,new a.Cartesian3);a.Cartesian3.negate(p,p);const _=a.Matrix4.getColumn(S,1,new a.Cartesian3),b=a.Matrix4.getColumn(S,0,new a.Cartesian3),n=a.Cartesian3.multiplyByScalar(p,-m.far,new a.Cartesian3);return e.position=a.Cartesian3.add(s,n,new a.Cartesian3),e.direction=p,e.up=_,e.right=b,e}destroy(){var e,r;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(i=>{i&&this.viewer.scene.primitives.remove(i)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(i=>{var s;i&&!((s=i.isDestroyed)!=null&&s.call(i))&&i.destroy()}),this.textures={},this._heightMap&&!((r=(e=this._heightMap).isDestroyed)!=null&&r.call(e))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(e,r){const i=this.viewer.scene.context,s=o(this.viewer.scene),S=i.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>e},owner:this}),m=s.framebuffer;s.framebuffer=r,S.execute(i,s),s.framebuffer=m}_getDepthRenderCommands(){var i,s;const e=[],r=y(this.viewer.scene);for(let S=0;S<r.length;++S){const m=r[S],p=(i=m==null?void 0:m.commands)==null?void 0:i[2],_=((s=m==null?void 0:m.indices)==null?void 0:s[2])??(p==null?void 0:p.length)??0;p&&_>0&&e.push(...p.slice(0,_))}return e}_processHeightMapShaders(){const e=[],r=a.Transforms.eastNorthUpToFixedFrame(a.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),i=a.Matrix4.inverse(r,new a.Matrix4),s=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(m=>{var F;if(!((F=m==null?void 0:m.shaderProgram)!=null&&F.fragmentShaderSource)||!m.uniformMap)return;const p=Object.prototype.hasOwnProperty.call(m.uniformMap,"u_inverseEnuMatrix"),_=m.uniformMap.u_inverseEnuMatrix,b=m.shaderProgram,n=new a.Matrix4;m.uniformMap.u_inverseEnuMatrix=()=>{const B=m.modelMatrix||a.Matrix4.IDENTITY;return a.Matrix4.multiply(i,B,n)},m.heightMap_ShaderProgram||(m.heightMap_ShaderProgram=this._getDerivedShaderProgram(s.context,m.shaderProgram,"Height_Map")),m.shaderProgram=m.heightMap_ShaderProgram,e.push({command:m,hadInverseUniform:p,originalInverseUniform:_,originalShaderProgram:b})}),e}_restoreHeightMapShaders(e){e.forEach(r=>{const{command:i,hadInverseUniform:s,originalInverseUniform:S,originalShaderProgram:m}=r;i!=null&&i.uniformMap&&(i.shaderProgram=m,s?i.uniformMap.u_inverseEnuMatrix=S:delete i.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(e,r,i){let s=e.shaderCache.getDerivedShaderProgram(r,i);return a.defined(s)||(s=this._createHeightMapShaderProgram(e,r,i)),s}_createHeightMapShaderProgram(e,r,i){const s=this._modifyFragmentShader(r.fragmentShaderSource);return e.shaderCache.createDerivedShaderProgram(r,i,{vertexShaderSource:r.vertexShaderSource,fragmentShaderSource:s,attributeLocations:r._attributeLocations})}_modifyFragmentShader(e){const r=e.sources.map(i=>a.ShaderSource.replaceMain(i,"czm_heightMap_main"));return r.push(`
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
            }`]})}};ct(f,"DEFAULTS",{width:1024,height:1024,dimensions:new a.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new a.Cartesian4(.995,.25,1e-4,.03),customParams:new a.Cartesian4(10,20,.2,10),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let j=f;const H=(E=[0,0,0],e=[0,0,0],r=[1,1,1])=>{const i=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationX(a.Math.toRadians(e[0]))),s=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationY(a.Math.toRadians(e[1]))),S=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationZ(a.Math.toRadians(e[2])));E instanceof a.Cartesian3||(E=a.Cartesian3.fromDegrees(...E));const m=a.Transforms.eastNorthUpToFixedFrame(E);a.Matrix4.multiply(m,i,m),a.Matrix4.multiply(m,s,m),a.Matrix4.multiply(m,S,m);const p=a.Matrix4.fromScale(new a.Cartesian3(...r));return a.Matrix4.multiply(m,p,new a.Matrix4)},P=`
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
    `;function M(){return new a.PostProcessStage({fragmentShader:P})}return{FluidRenderer:j,createSkyEffect:M}}const mr={key:0,class:"fluid-root"},pr={class:"fluid-panel"},gr={class:"panel-actions"},vr=["disabled"],yr={key:0,class:"selected-text"},xr={class:"param-list"},_r={class:"param-row"},br={class:"param-row"},wr={class:"param-row"},pt=1024,gt=1e4,Sr=1200,Tr=60,rt=64,Cr=160,Mr={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(a,{expose:t,emit:o}){const y=a,A=o,x=nt(),I=Q(10),V=Q(20),U=Q(3),l=Q(!1),k=Q(!1),L=Q(null),j=Q(null);let H=null,P=null,M=null,f=null,E=null,e=null,r=0;const i=be(()=>!Number.isFinite(L.value)||!Number.isFinite(j.value)?"":`经度 ${L.value.toFixed(6)} / 纬度 ${j.value.toFixed(6)}`);Pe([I,V,U],qe),Pe(()=>y.params,h=>{S(h||{})},{deep:!0,immediate:!0}),Pe([l,k,i],m,{immediate:!0}),$t(()=>{ke(!0)});function s(){var R,W;const h=(R=y.getViewer)==null?void 0:R.call(y),v=((W=y.getCesium)==null?void 0:W.call(y))||window.Cesium;if(!h||!v)return x.warning("Cesium 场景尚未就绪。"),null;if(!H){const X=fr(v);H=X.FluidRenderer,P=X.createSkyEffect}return{viewer:h,Cesium:v}}function S(h){Number.isFinite(Number(h.threshold))&&(I.value=Number(h.threshold)),Number.isFinite(Number(h.blend))&&(V.value=Number(h.blend)),Number.isFinite(Number(h.lightStrength))&&(U.value=Number(h.lightStrength))}function m(){A("state-change",{isPicking:l.value,hasFluid:k.value,selectedText:i.value})}function p(){const h=s();if(!h)return;const{viewer:v,Cesium:R}=h;Se(),Oe(v,R),l.value=!0,M=new R.ScreenSpaceEventHandler(v.scene.canvas),M.setInputAction(W=>{_(v,R,W.position)},R.ScreenSpaceEventType.LEFT_CLICK)}async function _(h,v,R){var K,ie;const W=fe(h,R);if(!W){x.warning("未选中可用地形位置。");return}const X=++r;Se();const ne=v.Cartographic.fromCartesian(W),ce=v.Math.toDegrees(ne.longitude),he=v.Math.toDegrees(ne.latitude),d=Math.max(0,Number(ne.height)||0),c=100,C=Sr,z=Math.max(0,d-c),q=new v.Cartesian3(gt,gt,C);bt("正在请求模拟范围高度数据...");try{ze();const me=Number(I.value)||0,pe=Number(V.value)||0,Ne=Number(U.value)||0,ye=await b(h,v,{lon:ce,lat:he,baseHeight:z,dimensions:q});if(X!==r)return;ye||x.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),f=new H(h,{lonLat:[ce,he],width:pt,height:pt,dimensions:q,baseHeight:z,minHeight:0,maxHeight:C,heightMapSource:ye,customParams:new v.Cartesian4(me,pe,Ne,10),fluidParams:new v.Cartesian4(.9+Ne/10*.099,Math.min(1,pe/50),me/5e4,.03)}),L.value=ce,j.value=he,k.value=!0,(ie=(K=h.scene).requestRender)==null||ie.call(K),x.success("水体流体已创建。")}catch(me){x.error("水体流体创建失败",me),x.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{wt()}}async function b(h,v,R){const W=h==null?void 0:h.terrainProvider,X=F(R.dimensions);if(!W)return null;if(v.EllipsoidTerrainProvider&&W instanceof v.EllipsoidTerrainProvider)return J(X);if(typeof v.sampleTerrain!="function"&&typeof v.sampleTerrainMostDetailed!="function")return null;try{return await n(h,v,R,X)}catch(ne){if(X<=rt)throw ne;return n(h,v,R,rt)}}async function n(h,v,R,W){const X=O(v,R,W),ne=await ee(v,h.terrainProvider,X);return le(ne||X,{baseHeight:R.baseHeight,fluidDepth:R.dimensions.z,size:W})}function F(h){const v=Math.max(Number(h==null?void 0:h.x)||0,Number(h==null?void 0:h.y)||0),R=Math.ceil(v/Tr)+1;return B(R,rt,Cr)}function B(h,v,R){return Math.max(v,Math.min(R,Math.round(h)))}function O(h,{lon:v,lat:R,baseHeight:W,dimensions:X},ne){const ce=h.Cartesian3.fromDegrees(v,R,W),he=h.Transforms.eastNorthUpToFixedFrame(ce),d=[],c=Math.max(1,ne-1);for(let C=0;C<ne;C++){const q=(.5-C/c)*X.y;for(let K=0;K<ne;K++){const me=(K/c-.5)*X.x,pe=new h.Cartesian3(me,q,0),Ne=h.Matrix4.multiplyByPoint(he,pe,new h.Cartesian3);d.push(h.Cartographic.fromCartesian(Ne))}}return d}async function ee(h,v,R){const W=we(v);return Number.isInteger(W)&&typeof h.sampleTerrain=="function"?h.sampleTerrain(v,W,R):typeof h.sampleTerrainMostDetailed=="function"?h.sampleTerrainMostDetailed(v,R):h.sampleTerrain(v,10,R)}function we(h){const v=Number(h==null?void 0:h._bottomLevel);return Number.isFinite(v)?Math.max(0,v-1):null}function le(h,{baseHeight:v,fluidDepth:R,size:W}){var ne;const X=new Float32Array(W*W*4);for(let ce=0;ce<h.length;ce++){const he=Number((ne=h[ce])==null?void 0:ne.height),d=Number.isFinite(he)?de(he-v,0,R):0,c=ce*4;X[c]=d,X[c+1]=0,X[c+2]=0,X[c+3]=1}return{width:W,height:W,arrayBufferView:X}}function J(h){return{width:h,height:h,arrayBufferView:new Float32Array(h*h*4)}}function de(h,v,R){return Math.max(v,Math.min(R,h))}function fe(h,v){if(!v)return null;if(h.scene.pickPositionSupported&&typeof h.scene.pickPosition=="function"){const W=h.scene.pickPosition(v);if(W)return W}const R=h.camera.getPickRay(v);return R?h.scene.globe.pick(R,h.scene):null}function qe(){if(!(f!=null&&f.config))return;const h=Number(I.value)||0,v=Number(V.value)||0,R=Number(U.value)||0;f.config.customParams&&(f.config.customParams.x=h,f.config.customParams.y=v,f.config.customParams.z=R),f.config.fluidParams&&(f.config.fluidParams.x=.9+R/10*.099,f.config.fluidParams.y=Math.min(1,v/50),f.config.fluidParams.z=h/5e4)}function Oe(h,v){var R,W;if(!e){const X=h.scene;e={shadows:h.shadows,resolutionScale:h.resolutionScale,msaaSamples:X.msaaSamples,depthTestAgainstTerrain:X.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:X.logarithmicDepthBuffer,highDynamicRange:X.highDynamicRange,fogEnabled:(R=X.fog)==null?void 0:R.enabled,showGroundAtmosphere:X.globe.showGroundAtmosphere,skyAtmosphereShow:(W=X.skyAtmosphere)==null?void 0:W.show,enableLighting:X.globe.enableLighting}}h.shadows=!0,h.resolutionScale=1,h.scene.msaaSamples=4,h.scene.globe.depthTestAgainstTerrain=!0,h.scene.logarithmicDepthBuffer=!0,h.scene.highDynamicRange=!0,h.scene.fog&&(h.scene.fog.enabled=!0),h.scene.globe.showGroundAtmosphere=!1,h.scene.skyAtmosphere&&(h.scene.skyAtmosphere.show=!1),h.scene.globe.enableLighting=!0,!E&&P&&(E=P(v),h.scene.postProcessStages.add(E))}function Le(h){if(!h||!e)return;const v=h.scene;h.shadows=e.shadows,h.resolutionScale=e.resolutionScale,e.msaaSamples!==void 0&&(v.msaaSamples=e.msaaSamples),v.globe.depthTestAgainstTerrain=e.depthTestAgainstTerrain,v.logarithmicDepthBuffer=e.logarithmicDepthBuffer,v.highDynamicRange=e.highDynamicRange,v.fog&&e.fogEnabled!==void 0&&(v.fog.enabled=e.fogEnabled),v.globe.showGroundAtmosphere=e.showGroundAtmosphere,v.skyAtmosphere&&e.skyAtmosphereShow!==void 0&&(v.skyAtmosphere.show=e.skyAtmosphereShow),v.globe.enableLighting=e.enableLighting,e=null}function Fe(){ke(!1),x.success("水体流体已清除。")}function Se(){M&&(M.destroy(),M=null),l.value=!1}function ze(){if(f){try{f.destroy()}catch{}f=null,k.value=!1}}function ke(h){var R,W,X;const v=(R=y.getViewer)==null?void 0:R.call(y);if(r+=1,Se(),ze(),L.value=null,j.value=null,v&&E){try{v.scene.postProcessStages.remove(E)}catch{}E=null}h&&v&&Le(v),(X=(W=v==null?void 0:v.scene)==null?void 0:W.requestRender)==null||X.call(W)}function He(){ke(!0),A("close")}return t({startPickHeightMap:p,clearFluid:Fe}),(h,v)=>a.headless?ae("",!0):(N(),$("div",mr,[w("div",pr,[w("div",{class:"panel-head"},[v[6]||(v[6]=w("span",{class:"panel-title"},"水体流体",-1)),w("button",{class:"panel-close",title:"关闭",onClick:He}," × ")]),w("div",gr,[w("button",{class:ve(["action-btn primary",{active:l.value}]),onClick:p},re(l.value?"等待选点":"捕捉高度图"),3),w("button",{class:"action-btn",disabled:!k.value&&!l.value,onClick:Fe}," 清除 ",8,vr)]),i.value?(N(),$("div",yr,re(i.value),1)):ae("",!0),w("div",xr,[w("label",_r,[v[7]||(v[7]=w("span",null,"阈值",-1)),ue(w("input",{"onUpdate:modelValue":v[0]||(v[0]=R=>I.value=R),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Ge,I.value,void 0,{number:!0}]]),ue(w("input",{"onUpdate:modelValue":v[1]||(v[1]=R=>I.value=R),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Ge,I.value,void 0,{number:!0}]])]),w("label",br,[v[8]||(v[8]=w("span",null,"混合",-1)),ue(w("input",{"onUpdate:modelValue":v[2]||(v[2]=R=>V.value=R),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Ge,V.value,void 0,{number:!0}]]),ue(w("input",{"onUpdate:modelValue":v[3]||(v[3]=R=>V.value=R),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Ge,V.value,void 0,{number:!0}]])]),w("label",wr,[v[9]||(v[9]=w("span",null,"光强",-1)),ue(w("input",{"onUpdate:modelValue":v[4]||(v[4]=R=>U.value=R),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Ge,U.value,void 0,{number:!0}]]),ue(w("input",{"onUpdate:modelValue":v[5]||(v[5]=R=>U.value=R),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Ge,U.value,void 0,{number:!0}]])])])])]))}},Pr=Ze(Mr,[["__scopeId","data-v-7cc9bc94"]]),se={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Lr=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Fr=new Float32Array([0,0,1,0,1,1,0,1]),Er=new Uint16Array([0,1,2,0,2,3]);function Ie(a,t,o){return Math.max(t,Math.min(o,a))}function Y(a,t){const o=Number(a);return Number.isFinite(o)?o:t}function Rr(a,t){const o=t.getParameter(t.MAX_TEXTURE_SIZE),y=Math.min(2048,o),A=Math.max(1,Math.floor(a)),x=Math.sqrt(A),I=Math.log2(x),V=Number.isFinite(I)?Math.round(I):4;let U=Math.pow(2,V);return U=Ie(U,16,y),U}function Dr(a){const t=a*a,o=new Float32Array(t*4);for(let y=0;y<t;y+=1){const A=y*4;o[A]=Math.random(),o[A+1]=Math.random(),o[A+2]=Math.random(),o[A+3]=Math.random()}return o}function Ar(a){return new Float32Array(a*a*4)}function Ir(a,t,o,y,A){const x=t.createTexture();if(!x)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,x),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,o,y,0,t.RGBA,t.FLOAT,A),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let I=!1;return{_context:a,_texture:x,_target:t.TEXTURE_2D,_width:o,_height:y,destroy(){I||(t.deleteTexture(x),I=!0)}}}class Or{constructor(t,o={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=o.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const y={...se,...o};this.speedFactor=Y(y.speedFactor,se.speedFactor),this.cullSpeedMin=Y(y.cullSpeedMin,se.cullSpeedMin),this.cullSpeedMax=Y(y.cullSpeedMax,se.cullSpeedMax),this.windSpeedMin=Y(y.windSpeedMin,se.windSpeedMin),this.windSpeedMax=Y(y.windSpeedMax,se.windSpeedMax),this.arrowLength=Y(y.arrowLength,se.arrowLength),this.trailLength=Y(y.trailLength,se.trailLength),this.decaySpeed=Y(y.decaySpeed,se.decaySpeed),this.alphaFactor=Y(y.alphaFactor,se.alphaFactor),this.maxWindSpeed=Y(y.maxWindSpeed,se.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=Y(o.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const o=Y(t.longitude,NaN),y=Y(t.latitude,NaN),A=Array.isArray(t.altitude)?t.altitude:[],x=Array.isArray(t.sizeMesh)?t.sizeMesh:[],I=Array.isArray(t.count)?t.count:[],V=Array.isArray(t.hspeed)?t.hspeed:[],U=Array.isArray(t.hdir)?t.hdir:[],l=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(o)||!Number.isFinite(y))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const k=A.length;if(k<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(x.length!==k||I.length!==k)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const L=I.map(m=>Math.max(1,Math.floor(Y(m,1)))),j=x.map(m=>Math.max(1,Y(m,1))),H=A.map(m=>Y(m,0)),P=L.reduce((m,p)=>m+p*p,0);if(V.length<P||U.length<P||l.length<P)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=k,this.visibleLayerMin=0,this.visibleLayerMax=k-1,this._altitudes=H.slice(),this._maxNx=Math.max(...L),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*k;const M=new Float32Array(this._atlasWidth*this._atlasHeight*4);let f=0;for(let m=0;m<k;m+=1){const p=L[m],_=p;for(let b=0;b<_;b+=1)for(let n=0;n<p;n+=1){const F=f+b*p+n,B=((m*this._maxNy+b)*this._atlasWidth+n)*4,O=Number(V[F]),ee=Number(U[F]),we=Number(l[F]);if(!(Number.isFinite(O)&&Number.isFinite(ee))){M[B]=0,M[B+1]=0,M[B+2]=0,M[B+3]=0;continue}const J=ee*Math.PI/180;M[B]=O*Math.sin(J),M[B+1]=O*Math.cos(J),M[B+2]=Number.isFinite(we)?we:0,M[B+3]=1}f+=p*_}this._createOrReplaceWindAtlasTexture(M);const E=Math.max(...j),e=this._maxNx*E,r=e/2/111320,i=y*Math.PI/180,s=Math.max(1e-6,Math.abs(Math.cos(i))),S=e/2/(111320*s);this._bounds={minLon:o-S,maxLon:o+S,minLat:y-r,maxLat:y+r,minHeight:Math.min(...H),maxHeight:Math.max(...H)},this._dataPointCount=P,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const o=Math.max(1,Math.floor(Y(t,1))),y=Rr(o,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&y===this._particleTextureSize||(this._particleTextureSize=y,this._particleCount=y*y,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const o=Ie(Y(t,this.particleDensity),.05,10);if(this.particleDensity=o,this._dataPointCount<=0)return;const y=Math.max(1,Math.floor(this._dataPointCount*o));this.setParticleCount(y)}setBounds(t,o,y,A){const x=Y(t,NaN),I=Y(o,NaN),V=Y(y,NaN),U=Y(A,NaN);if(!Number.isFinite(x)||!Number.isFinite(I)||!Number.isFinite(V)||!Number.isFinite(U))return;const l=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};l.minLon=Math.min(x,I),l.maxLon=Math.max(x,I),l.minLat=Math.min(V,U),l.maxLat=Math.max(V,U),this._bounds=l,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,o=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,o,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const A=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[A],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=A,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Ir(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,o=this._particleTextureSize,y=Dr(o),A=Ar(o);for(let x=0;x<2;x+=1){this._particlePositionTextures[x]=new t.Texture({context:this._context,width:o,height:o,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:o,height:o,arrayBufferView:y},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[x]=new t.Texture({context:this._context,width:o,height:o,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:o,height:o,arrayBufferView:A},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[x]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[x],this._velocityTextures[x]],destroyAttachments:!1});const I=this._framebuffers[x]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,I),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,o=t.Buffer.createVertexBuffer({context:this._context,typedArray:Lr,usage:t.BufferUsage.STATIC_DRAW}),y=t.Buffer.createVertexBuffer({context:this._context,typedArray:Fr,usage:t.BufferUsage.STATIC_DRAW}),A=t.Buffer.createIndexBuffer({context:this._context,typedArray:Er,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:o,componentsPerAttribute:2},{index:1,vertexBuffer:y,componentsPerAttribute:2}],indexBuffer:A})}_buildParticleVertexArray(){const t=this._Cesium,o=new Float32Array(this._drawVertexCount);for(let y=0;y<o.length;y+=1)o[y]=y;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:o,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,o=`#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}`,y=`#version 300 es
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
}`;this._updateProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:o,fragmentShaderSource:y,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const t=this._Cesium,o=`#version 300 es
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
}`,y=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:o,fragmentShaderSource:y,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,o=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:o,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,o=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:o,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=Ie(Math.floor(Y(this.visibleLayerMin,0)),0,this._layerCount-1),o=Ie(Math.floor(Y(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:o}}_normalizeSpeedRange(t,o){const y=Math.max(1e-4,Y(this.maxWindSpeed,se.maxWindSpeed)),A=Ie(Y(t,0)/y,0,1),x=Ie(Y(o,y)/y,0,1);return{min:Math.min(A,x),max:Math.max(A,x)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>Y(this.speedFactor,se.speedFactor),maxWindSpeed:()=>Math.max(1e-4,Y(this.maxWindSpeed,se.maxWindSpeed)),decaySpeed:()=>Ie(Y(this.decaySpeed,se.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>Y(this.arrowLength,se.arrowLength),trailLength:()=>Y(this.trailLength,se.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Ie(Y(this.alphaFactor,se.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function vt(a){if(!a)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:o,Ellipsoid:y,Resource:A,HeightmapTerrainData:x,Rectangle:I,TileAvailability:V,CustomHeightmapTerrainProvider:U}=a;function l(H,P,M,f,E,e){const r=H.tileXYToRectangle(M,f,E);return t(I.intersection(r,P,e))}function k(H){const P=[[[0,0,1,0]]],M=new V(H.tilingScheme,19);for(let f=0;f<P.length;f++){const E=P[f];for(let e=0;e<E.length;e++){const r=E[e];M.addAvailableTileRange(f,r[0],r[1],r[2],r[3])}}return M}function L(H,P,M,f,E){const e=new x({buffer:H._transformBuffer(P),width:H._width,height:H._height,childTileMask:H._getChildTileMask(f,E,M),structure:H._terrainDataStructure});return e._skirtHeight=6e3,H.availability.addAvailableTileRange(M,f,E,f,E),e}class j extends U{constructor(P={}){if(super({...P,ellipsoid:y.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(P.url))throw new o("options.url is required.");this._dataType=P.dataType??"int16",this._url=P.url,this._subdomains=P.subdomains,this._token=P.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=k(this)}get availability(){return this._availability}requestTileGeometry(P,M,f,E){if(f>=this._bottomLevel)return Promise.reject(new Error(`Level ${f} is outside supported range.`));if(f<this._topLevel)return Promise.resolve(new x({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(P,M,f),structure:this._terrainDataStructure}));let e=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const i=this._subdomains[(P+M)%this._subdomains.length];e=e.replace("{s}",i)}e=e.replace("{token}",this._token).replace("{x}",P).replace("{y}",M).replace("{z}",f+1);const r=A.fetchArrayBuffer({url:e,request:E});if(r)return r.then(i=>i.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):ai.inflate(i)).then(i=>L(this,i,f,P,M))}getTileDataAvailable(P,M,f){return f<this._bottomLevel}_transformBuffer(P){let M=2;this._dataType==="float"&&(M=4);const f=P;if(f.length!==22500*M)return null;const E=new ArrayBuffer(M),e=new DataView(E),r=this._width,i=this._height,s=new Uint8Array(r*i*4);for(let S=0;S<i;S++)for(let m=0;m<r;m++){const p=Math.floor(149*S/(i-1)),_=Math.floor(149*m/(r-1)),b=M*(150*p+_);let n;M===4?(e.setInt8(0,f[b]),e.setInt8(1,f[b+1]),e.setInt8(2,f[b+2]),e.setInt8(3,f[b+3]),n=e.getFloat32(0,!0)):n=f[b]+256*f[b+1],(n>1e4||n<-2e3)&&(n=0);const F=(n+1e3)/.001,B=4*(S*r+m);s[B]=F/65536,s[B+1]=(F-256*s[B]*256)/256,s[B+2]=F-256*s[B]*256-256*s[B+1],s[B+3]=255}return s}_getVHeightBuffer(){let P=this._vHeightBuffer;if(!t(P)){P=new Uint8ClampedArray(this._width*this._height*4);for(let M=0;M<this._width*this._height*4;)P[M++]=15,P[M++]=66,P[M++]=64,P[M++]=255;this._vHeightBuffer=P}return P}_getChildTileMask(P,M,f){const E=new I,e=this._tilingScheme,r=this._rectangles,i=e.tileXYToRectangle(P,M,f);let s=0;for(let S=0;S<r.length&&s!==15;S++){const m=r[S];if(m.maxLevel<=f)continue;const p=m.rectangle,_=I.intersection(p,i,E);t(_)&&(l(e,p,2*P,2*M,f+1,E)&&(s|=4),l(e,p,2*P+1,2*M,f+1,E)&&(s|=8),l(e,p,2*P,2*M+1,f+1,E)&&(s|=1),l(e,p,2*P+1,2*M+1,f+1,E)&&(s|=2))}return s}}return j}function ot(a){return ni.parse(a)}const zr=ot(`
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
`).root.lookup("GEOPOI.PBPOITile"),kr=ot(`
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
`).root.lookup("GEOPOI.PBPOITile"),Nr=ot(`
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
`).root.lookup("GEOPOI.PBPOITile");function yt(a,t){return t.minX>=a.minX&&t.minX<=a.maxX&&t.minY>=a.minY&&t.minY<=a.maxY||t.maxX>=a.minX&&t.maxX<=a.maxX&&t.maxY>=a.minY&&t.maxY<=a.maxY||t.minX>=a.minX&&t.minX<=a.maxX&&t.maxY>=a.minY&&t.maxY<=a.maxY||t.maxX>=a.minX&&t.maxX<=a.maxX&&t.minY>=a.minY&&t.minY<=a.maxY}function Br(a){let t=0;for(let o=0;o<a.length;o++)a.charAt(o).match(/[^\x00-\xff]/gi)!=null?t+=2:t+=1;return t}function xt(a,t){const o=a.x,y=a.y,A=a.width,x=a.height,I=t.x,V=t.y,U=t.width,l=t.height;return!(I<=o&&I+U<=o||o<=I&&o+A<=I||V<=y&&V+l<=y||y<=V&&y+x<=V)}function Hr(a){const t={stringTable:[],pois:[],enumGeometryType:[{ePoint:0},{eMultiLineString:1},{ePolygon:2}],enumZCoordType:[{eCloseGround:0},{eCloseSeaSurface:1},{eRelativelyGround:2},{eAbsolute:3}]};let o;const y=new Uint8Array(a);try{o=Nr.decode(y)}catch{}if(!o)try{o=kr.decode(y)}catch{try{o=zr.decode(y)}catch{}}t.version=parseInt(o.Version.toString(),10),t.titleKey=parseInt(o.TileKey.toString(),10);for(let x=0;x<o.StringTable.s.length;x++)t.stringTable.push(o.StringTable.s[x].toString());let A=o.POIS.length;for(;A--;){const x=o.POIS[A],I={oid:`${parseInt(x.OID.toString(),10)}_${t.titleKey}`,name:x.Name.toString(),symbolID:parseInt(x.SymbolID.toString(),10),displayHeight:x.DisplayHeight,shiningColor:x.ShiningColor,fontNameIndex:x.FontNameIndex,fontSize:x.FontSize,fontColor:x.FontColor,zCoordType:x.ZCoordType??void 0,geometryType:x.GeometryType,coordinate:x.Coordinates,priority:typeof x.Priority>"u"?null:x.Priority,interates:typeof x.Interates>"u"?null:x.Interates,fontStyle:typeof x.FontStyle>"u"?null:x.FontStyle,shiningSize:typeof x.ShiningSize>"u"?null:x.ShiningSize};t.pois.push(I)}return t}function Ur(a){if(!a)throw new Error("Cesium is required to create GeoWTFS.");const{Cartesian2:t,Cartesian3:o,Color:y,createGuid:A,defined:x,DeveloperError:I,Entity:V,HorizontalOrigin:U,LabelStyle:l,Math:k,SceneTransforms:L,VerticalOrigin:j,combine:H}=a,P={font:"28px sans-serif",fontSize:28,fillColor:y.WHITE,scale:.5,outlineColor:y.BLACK,outlineWidth:5,style:l.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:y.RED,backgroundPadding:new t(10,10),horizontalOrigin:U.CENTER,verticalOrigin:j.TOP,eyeOffset:o.ZERO,pixelOffset:new t(0,8)},M={horizontalOrigin:U.CENTER,verticalOrigin:j.CENTER,eyeOffset:o.ZERO,pixelOffset:t.ZERO,alignedAxis:o.ZERO,color:y.WHITE,rotation:0,scale:1,width:18,height:18};class f{constructor(e,r={}){if(!x(e))throw new I("viewer is required.");if(!x(r.url))throw new I("options.url is required.");this.viewer=e,this.proxy=r.proxy,this.url=r.url,this.icoUrl=r.icoUrl??r.iconUrl,this.metadata=r.metadata,this.roadMetadata=r.roadMetadata,this.roadUrl=r.roadUrl,this.labelGraphics=H(r.labelGraphics,P,!0),this.billboardGraphics=H(r.billboardGraphics,M,!0),this.aotuCollide=!!r.aotuCollide,this.collisionPadding=r.collisionPadding??[3,5,3,5],this.serverFirstStyle=!!r.serverFirstStyle,this.subdomains=r.subdomains||[],this.tileCache=[],this.labelCache=[],this._isInitial=!1,this._latelyGrid=[],this._latelyRefreshStamp=0,this._latelyCollisionStamp=0;const i=A();this._UUID=`GEO_WTFS_LABEL_${i}`,this._UUIDRoad=`GEO_WTFS_LABEL_ROAD_${i}`,this.viewer.camera.percentageChanged=.18,this.bindEvent()}bindEvent(){this.viewer.scene.camera.moveEnd.addEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.addEventListener(this._changed,this)}_moveEnd(){clearTimeout(this._timer);const e=this.viewer.scene.globe._surface;if(e._tilesToRender.length<2||e._tileLoadQueueHigh.length>0)this._timer=setTimeout(()=>{this._moveEnd()},100);else{const r=this.getTilesToRender();if(this.compareArray(r,this._latelyGrid))return;this._queueCall(r),this.delaySynchronous()}}_changed(){const e=new Date().getTime(),r=e-this._latelyRefreshStamp,i=e-this._latelyCollisionStamp;r>300&&this._moveEnd(),i>150&&this.collisionDetection()}getTilesToRender(){const e=this.viewer.scene.globe._surface._tilesToRender.map(i=>({x:i.x,y:i.y,level:i.level,boundBox:{minX:k.toDegrees(i.rectangle.west),minY:k.toDegrees(i.rectangle.south),maxX:k.toDegrees(i.rectangle.east),maxY:k.toDegrees(i.rectangle.north)}})).sort((i,s)=>s.level-i.level),r=[e[0].level];for(let i=0;i<e.length;i++)e[i].level!==r[r.length-1]&&(r.push(e[i].level),r.length>4&&(e.splice(i,1/0),i--));return e}compareArray(e,r){for(let i=0;i<e.length;i++){let s=!1;for(let S=0;S<r.length;S++)if(e[i].x===r[S].x&&e[i].y===r[S].y&&e[i].level===r[S].level){s=!0;break}if(!s)return!1}for(let i=0;i<r.length;i++){let s=!1;for(let S=0;S<e.length;S++)if(r[i].x===e[S].x&&r[i].y===e[S].y&&r[i].level===e[S].level){s=!0;break}if(!s)return!1}return!0}_queueCall(e){this._latelyGrid=e,this._latelyRefreshStamp=new Date().getTime();let r=e.length;for(;r--;){const i=e[r];if(this.metadata&&yt(this.metadata.boundBox,i.boundBox)){if(this.metadata.minLevel>i.level+1||this.metadata.maxLevel<i.level+1)return;const s=this.getCacheTile(i.x,i.y,i.level,0);if(s)this.addLabelAndIco(s);else{const S=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",m=this.getTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",S),p=new XMLHttpRequest;p.open("GET",m,!0),p.responseType="arraybuffer";const _=this;p.onload=function(){if(!(p.status<200||p.status>=300)){const b=_.cutString(p.response);let n;b?(n=Hr(b),n.x=this.tile.x,n.y=this.tile.y,n.z=this.tile.z,n.t=0,_.addCacheTile(n),_.addLabelAndIco(n)):(n={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:0},_.addCacheTile(n),_.delaySynchronous())}},p.onerror=function(b){},p.send(),p.tile={x:i.x,y:i.y,z:i.level+1}}}if(this.roadMetadata&&yt(this.roadMetadata.boundBox,i.boundBox)){if(this.roadMetadata.minLevel>i.level+1||this.roadMetadata.maxLevel<i.level+1)return;const s=this.getCacheTile(i.x,i.y,i.level,0);if(s)this.addLabelAndIco(s);else{const S=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",m=this.getRoadTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",S),p=new XMLHttpRequest;p.open("GET",m,!0),p.responseType="json";const _=this;p.onload=function(){if(!(p.status<200||p.status>=300)){const b=p.response;let n;b?(n={pois:b.map(F=>({oid:`${F.LabelPoint.X}_${F.LabelPoint.Y}`,name:F.Feature.properties.Name,coordinate:[F.LabelPoint.X,F.LabelPoint.Y,F.LabelPoint.Z?F.LabelPoint.Z:0]})),x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},_.addCacheTile(n),_.addLabelAndIco(n)):(n={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},_.addCacheTile(n),_.delaySynchronous())}},p.onerror=function(b){},p.send(),p.tile={x:i.x,y:i.y,z:i.level+1}}}}}cutString(e){if(!e)return"";const r=e.byteLength;return r<=28?"":e.slice(19,r-9)}addCacheTile(e){this.tileCache.length>999&&this.tileCache.splice(0,500),this.removeCacheTile(e.x,e.y,e.z,e.t),this.tileCache.push(e)}getCacheTile(e,r,i,s){let S=this.tileCache.length;for(;S--;){const m=this.tileCache[S];if(m.x===e&&m.y===r&&m.z===i&&m.t===s)return m}return null}removeCacheTile(e,r,i,s){let S=this.tileCache.length;for(;S--;){const m=this.tileCache[S];if(m.x===e&&m.y===r&&m.z===i&&m.t===s){this.tileCache.splice(S,1);return}}}getCacheLabel(e){let r=this.labelCache.length;for(;r--;){const i=this.labelCache[r];if(i.name===this._UUID&&i.oid===e)return i}return null}addCacheLabel(e){this.labelCache.length>999&&this.labelCache.splice(0,250),this.removeCacheLabel(e.oid),e.timestamp=new Date().getTime(),this.labelCache.push(e)}removeCacheLabel(e){let r=this.labelCache.length;for(;r--;)if(this.labelCache[r].name===this._UUID&&this.labelCache[r].oid===e){this.labelCache.splice(r,1);return}}HexadecimalConversion(e){if(e===4278190080)return"#000000";let r=4278190080|parseInt(-Number(e),10),i="";if(r=r.toString(16).substring(1),r.length<6)for(let s=0;s<6-r.length;s++)i+="0";return`#${i}${r}`}addLabelAndIco(e){if(e.pois&&e.pois.length){let r=e.pois.length;for(;r--;){const i=e.pois[r];let s=this.getCacheLabel(i.oid);s||(s=this.createLabel(i,e)),s&&this.addCacheLabel(s)}}this.delaySynchronous()}createLabel(e,r){if(!e)return;const i={show:!0,position:o.fromDegrees(...e.coordinate),label:{text:e.name}};if(Object.assign(i.label,this.labelGraphics),this.serverFirstStyle&&(e.fontSize!==void 0&&(i.label.font=`${e.fontSize}px `,e.fontNameIndex!==void 0&&r.stringTable&&r.stringTable[e.fontNameIndex]?i.label.font+=r.stringTable[e.fontNameIndex]:i.label.font+="sans-serif",!this.labelGraphics.bold&&e.fontStyle!==1&&e.fontStyle!==3&&(i.label.font=`bold ${i.label.font}`),e.fontStyle!==2&&e.fontStyle!==3&&(i.label.font=`italic ${i.label.font}`)),e.fontColor!==void 0&&(i.label.fillColor=y.fromCssColorString(this.HexadecimalConversion(e.fontColor))),e.shiningColor!==void 0&&(i.label.outlineColor=y.fromCssColorString(this.HexadecimalConversion(e.shiningColor))),typeof e.shiningSize=="number"&&(i.label.outlineWidth=e.shiningSize),e.showBackground!==void 0&&(i.label.showBackground=e.showBackground),e.backgroundColor!==void 0&&(i.label.backgroundColor=e.backgroundColor),e.backgroundPadding!==void 0&&(i.label.backgroundPadding=e.backgroundPadding),e.eyeOffset!==void 0&&(i.label.eyeOffset=e.eyeOffset),e.pixelOffset!==void 0&&(i.label.pixelOffset=e.pixelOffset),e.style!==void 0&&(i.label.style=e.style),e.scale!==void 0&&(i.label.scale=e.scale),r.t||(e.verticalOrigin!==void 0&&(i.label.verticalOrigin=e.verticalOrigin),e.horizontalOrigin!==void 0&&(i.label.horizontalOrigin=e.horizontalOrigin))),e.symbolID!==void 0&&e.symbolID>-1&&this.icoUrl){const S=this.subdomains.length?(r.x+r.y)%this.subdomains.length:"";i.billboard={image:this.getIcoUrl().replace("{id}",e.symbolID).replace("{s}",this.subdomains[S])},Object.assign(i.billboard,this.billboardGraphics),this.serverFirstStyle&&(e.displayHeight!==void 0&&(i.billboard.width=e.displayHeight,i.billboard.height=e.displayHeight),e.eyeOffset!==void 0&&(i.billboard.eyeOffset=e.eyeOffset),e.pixelOffset!==void 0&&(i.billboard.pixelOffset=e.pixelOffset),e.rotation!==void 0&&(i.billboard.rotation=e.rotation),e.alignedAxis!==void 0&&(i.billboard.alignedAxis=e.alignedAxis),e.color!==void 0&&(i.billboard.color=e.color),e.scale!==void 0&&(i.billboard.scale=e.scale),r.t||(e.verticalOrigin!==void 0&&(i.billboard.verticalOrigin=e.verticalOrigin),e.horizontalOrigin!==void 0&&(i.billboard.horizontalOrigin=e.horizontalOrigin)))}r.t&&(i.label.verticalOrigin=j.CENTER,i.label.horizontalOrigin=U.CENTER,i.billboard&&(i.billboard.verticalOrigin=j.CENTER,i.billboard.horizontalOrigin=U.CENTER));const s=new V(i);return s.name=r.t?this._UUIDRoad:this._UUID,s.oid=e.oid,s.priority=e.priority||0,s.xyz=`${r.x}_${r.y}_${r.z-1}`,s}getIcoUrl(){return`${this.proxy?this.proxy.proxy:""}${this.icoUrl}`}getTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.url}`}getRoadTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.roadUrl}`}delaySynchronous(){clearTimeout(this._timer2),this._timer2=setTimeout(()=>{this.synchronousLabel()},100)}synchronousLabel(){let e=this.labelCache.length;for(;e--;){const r=this.labelCache[e];r.timestamp>=this._latelyRefreshStamp&&!this.viewer.entities.contains(r)&&(this._isInitial&&this.aotuCollide&&(r.show=!1),this.viewer.entities.add(r))}if(!this._isInitial){let r=this.viewer.entities.values.length-1;for(;r>=0;){const i=this.viewer.entities.values[r];i&&i.name&&(i.name===this._UUID||i.name===this._UUIDRoad)&&i.timestamp<this._latelyRefreshStamp&&this.viewer.entities.remove(i),r--}this.aotuCollide&&this.collisionDetection()}}collisionDetection(){const e=this.viewer.entities.values,r=[],i=[];let s=e.length;for(;s--;){const p=e[s];if(p.name&&(p.name===this._UUID||p.name===this._UUIDRoad)){const _=this.getScreenCoordinates(p.position.getValue(0));p.show=!0,p.collisionBox=this.getLabelReact({point:_,entity:p});let b=null,n=r.length;for(;!b&&n--;)r[n].xyz===p.xyz&&(b=r[n]);b||(b={xyz:p.xyz,entities:[]},r.push(b)),b.entities.push(p)}}let S=r.length;for(;S--;){const p=r[S];p.entities.sort((_,b)=>_.priority-b.priority);for(let _=0;_<p.entities.length;_++){const b=p.entities[_];if(b.show){for(let n=_+1;n<p.entities.length;n++)p.entities[n].show&&xt(b.collisionBox,p.entities[n].collisionBox)&&(p.entities[n].show=!1);i.push(b)}}}let m=i.length;for(;m--;)if(i[m].show){i.sort((p,_)=>p.priority-_.priority);for(let p=m+1;p<i.length;p++)i[p].show&&xt(i[m].collisionBox,i[p].collisionBox)&&(i[p].show=!1)}}getScreenCoordinates(e){const r=this.viewer.scene;return!r||!e?null:typeof L.worldToDrawingBufferCoordinates=="function"?L.worldToDrawingBufferCoordinates(r,e):typeof L.worldToWindowCoordinates=="function"?L.worldToWindowCoordinates(r,e):typeof L.wgs84ToWindowCoordinates=="function"?L.wgs84ToWindowCoordinates(r,e):null}getLabelReact(e){const{point:r,entity:i}=e;let s=parseInt(i.label.font,10);s=s>0?s:15;const S=i.label.text.getValue(0).split(`
`);let m=0;for(let b=0;b<S.length;b++){const n=Br(S[b])/2;m<n&&(m=n)}const p=i.billboard?i.billboard.width.getValue(0)*i.billboard.scale.getValue(0):1,_=i.billboard?i.billboard.height.getValue(0)*i.billboard.scale.getValue(0):1;return{x:(r?r.x:-999)-p/2-this.collisionPadding[3],y:(r?r.y:-999)-_/2-this.collisionPadding[0],width:s*i.label.scale.getValue(0)*m+i.label.pixelOffset.getValue(0).x+p+this.collisionPadding[1],height:s*i.label.scale.getValue(0)*m+i.label.pixelOffset.getValue(0).y+p+this.collisionPadding[2]}}initTDT(e,r){let i=0;this._isInitial=!0,this._queueCall(e);const s=setInterval(()=>{i>3&&(this._isInitial=!1,clearInterval(s),typeof r=="function"&&r()),i%2===0&&this.aotuCollide&&this.collisionDetection(),i++},600);return this}getPropertyValue(e,r,i,s){return r[e]!==void 0?r[e]:i[e]!==void 0?i[e]:s}unbindEvent(){this.viewer.scene.camera.moveEnd.removeEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.removeEventListener(this._changed,this)}activate(){this._latelyGrid=[],this._moveEnd()}destroy(){let e=this.viewer.entities.values.length;for(;e--;){const r=this.viewer.entities.values[e];r.name&&(r.name===this._UUID||r.name===this._UUIDRoad)&&(this.viewer.entities.remove(r),e--)}this.viewer.camera.percentageChanged=.5,this.unbindEvent(),this.handler=this.handler&&this.handler.destroy(),this.proxy=void 0,this.viewer=void 0,this.url=void 0,this.labelGraphics=void 0,this.billboardGraphics=void 0,this.aotuCollide=void 0,this.collisionPadding=void 0,this.tileCache=void 0,this.labelCache=void 0,this._latelyGrid=void 0,this._latelyRefreshStamp=void 0,this._roadTileset=void 0}getLabelVisibility(e){if(!e)return!1;const r=this.viewer.canvas.getBoundingClientRect();return!(e.x<-10||e.x>r.right+10||e.y<-10||e.y>r.bottom+10)}}return f}const Vr={class:"map-controls-group"},Wr={class:"mouse-position-content"},Xe="https://t{s}.tianditu.gov.cn/",at="https://cdn.jsdelivr.net/npm/cesium@1.110/Build/Cesium/",_t="cesium_tool_panel_open",Gr={__name:"CesiumContainer",setup(a){let t=null;const o="4267820f43926eaf808d61dc07269beb",y="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzRhZjM0ZC02MmYxLTRhNzgtYTkxNi00YWM2MmMxNmNhMWIiLCJpZCI6MTkzNjkxLCJpYXQiOjE3MDY5NDA2ODF9.mKu1zCK-GOjwDem9-J_Ksv0xEGNsN1zGuShYzOuXJsg",A=["0","1","2","3","4","5","6","7"],x=`${at}Cesium.js`,I=`${at}Widgets/widgets.css`,V={boundBox:{minX:-180,minY:-90,maxX:180,maxY:90},minLevel:1,maxLevel:20},U=[{x:6,y:1,level:2,boundBox:{minX:90,minY:0,maxX:135,maxY:45}},{x:7,y:1,level:2,boundBox:{minX:135,minY:0,maxX:180,maxY:45}},{x:6,y:0,level:2,boundBox:{minX:90,minY:45,maxX:135,maxY:90}},{x:7,y:0,level:2,boundBox:{minX:135,minY:45,maxX:180,maxY:90}},{x:5,y:1,level:2,boundBox:{minX:45,minY:0,maxX:90,maxY:45}},{x:4,y:1,level:2,boundBox:{minX:0,minY:0,maxX:45,maxY:45}},{x:5,y:0,level:2,boundBox:{minX:45,minY:45,maxX:90,maxY:90}},{x:4,y:0,level:2,boundBox:{minX:0,minY:45,maxX:45,maxY:90}},{x:6,y:2,level:2,boundBox:{minX:90,minY:-45,maxX:135,maxY:0}},{x:6,y:3,level:2,boundBox:{minX:90,minY:-90,maxX:135,maxY:-45}},{x:7,y:2,level:2,boundBox:{minX:135,minY:-45,maxX:180,maxY:0}},{x:5,y:2,level:2,boundBox:{minX:45,minY:-45,maxX:90,maxY:0}},{x:4,y:2,level:2,boundBox:{minX:0,minY:-45,maxX:45,maxY:0}},{x:3,y:1,level:2,boundBox:{minX:-45,minY:0,maxX:0,maxY:45}},{x:3,y:0,level:2,boundBox:{minX:-45,minY:45,maxX:0,maxY:90}},{x:2,y:0,level:2,boundBox:{minX:-90,minY:45,maxX:-45,maxY:90}},{x:0,y:1,level:2,boundBox:{minX:-180,minY:0,maxX:-135,maxY:45}},{x:1,y:0,level:2,boundBox:{minX:-135,minY:45,maxX:-90,maxY:90}},{x:0,y:0,level:2,boundBox:{minX:-180,minY:45,maxX:-135,maxY:90}}];let l=null,k=null,L=null,j=null,H=null,P=0,M=[];const f=Q(null),E=Q("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米"),e=Q(!1),r=Q(null),i=Q("tianditu"),s=Q("tianditu"),S=Q(Dt(_t,!0)),m=[],p=Q([]),_=new Map,b=new Map,n=new Map,F=new Map,B=nt(),O=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"}],ee=be(()=>[...O,...p.value]),we=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}],le=Q({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),J=Q({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1}),de=Q({threshold:10,blend:20,lightStrength:3}),fe=Q({isPicking:!1,hasFluid:!1,selectedText:""}),qe=be(()=>[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气",status:le.value.atmosphere||le.value.fog?"启用":"关闭",statusTone:le.value.atmosphere||le.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:le.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:le.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:le.value.tiltShift},{id:"atmosphere",label:"大气",type:"toggle",value:le.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:f.value?"已加载":"未加载",statusTone:f.value?"success":"neutral",actions:[{id:"load",label:f.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!f.value}],controls:[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:J.value.speedFactor,displayValue:J.value.speedFactor.toFixed(1),disabled:!f.value},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:J.value.arrowLength,displayValue:`${Math.round(J.value.arrowLength/1e3)} km`,disabled:!f.value},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:J.value.trailLength,displayValue:`${Math.round(J.value.trailLength/1e3)} km`,disabled:!f.value},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:J.value.alphaFactor,displayValue:J.value.alphaFactor.toFixed(2),disabled:!f.value}]},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:fe.value.isPicking?"等待选点":fe.value.hasFluid?"已创建":"未创建",statusTone:fe.value.isPicking?"warning":fe.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:fe.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:fe.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!fe.value.hasFluid&&!fe.value.isPicking}],controls:[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:de.value.threshold,displayValue:Number(de.value.threshold).toFixed(2)},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:de.value.blend,displayValue:Number(de.value.blend).toFixed(2)},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:de.value.lightStrength,displayValue:Number(de.value.lightStrength).toFixed(2)}]}]);St(()=>{Fe()}),Pe(i,u=>{!l||!t||me(u)}),Pe(s,async u=>{!l||!t||await Ne(u)}),Pe(S,u=>{At(_t,u)});function Oe(){var u,g;if(f.value){try{(g=(u=l==null?void 0:l.scene)==null?void 0:u.primitives)==null||g.remove(f.value)}catch{}f.value.destroy(),f.value=null}}function Le(){if(L){try{L.destroy()}catch{}L=null}}Tt(()=>{if(e.value=!1,k&&(k.destroy(),k=null),Oe(),Le(),j&&(clearInterval(j),j=null),H&&(H.remove(),H=null),K(),l){try{l.destroy()}catch{}l=null}});async function Fe(){bt("正在初始化 3D 场景...");try{if(await ke(),!t||!document.getElementById("cesiumContainer"))return;h(),v();const u=R(),g=await pe();e.value=!0,u&&g?B.success("天地图基础影像与地形加载成功。"):B.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0}),i.value}catch(u){B.error("Cesium 运行时加载失败",u),B.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{wt()}}function Se(){return l}function ze(){return t||window.Cesium}async function ke(){if(window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=at),await Ot(I,"cesium-widgets-style"),await It(x,"cesium-runtime-script"),t=window.Cesium,!t)throw new Error("Cesium global 未找到");He()}function He(){t!=null&&t.Ion&&(t.Ion.defaultAccessToken=y)}function h(){var Z;const u=typeof t.Map=="function"?t.Map:t.Viewer,g=ce(),T=c();if(l=new u("cesiumContainer",{baseLayerPicker:!0,geocoder:!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:g,selectedImageryProviderViewModel:_.get(i.value)||g[0],terrainProviderViewModels:T,selectedTerrainProviderViewModel:n.get(s.value)||T[0],shouldAnimate:!0}),q(),Ke(0),(Z=l._cesiumWidget)!=null&&Z._creditContainer&&(l._cesiumWidget._creditContainer.style.display="none"),l.scene.globe.terrainExaggeration=1,l.scene.globe.terrainExaggerationRelativeHeight=0,l.scene.globe.showGroundAtmosphere=!0,ye(s.value),(()=>{var te;(te=l._cesiumWidget)!=null&&te._creditContainer&&(l._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",l._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(ge=>{ge.style.cssText="display: none !important; visibility: hidden !important;",ge.innerHTML=""}),l.scene&&l.scene.frameState&&l.scene.frameState.creditDisplay&&(l.scene.frameState.creditDisplay.hasCredits=()=>!1,l.scene.frameState.creditDisplay.destroy=()=>{})})(),j=setInterval(()=>{const D=document.querySelector(".cesium-credit-container");D&&D.innerHTML.length>0&&(D.innerHTML="",D.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override")){const D=document.createElement("style");D.id="cesium-credit-override",D.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(D),H=D}}function v(){k=new t.ScreenSpaceEventHandler(l.scene.canvas),k.setInputAction(u=>{const g=l.camera.getPickRay(u.endPosition);if(!g)return;const T=l.scene.globe.pick(g,l.scene);if(T){const G=t.Cartographic.fromCartesian(T),Z=t.Math.toDegrees(G.longitude).toFixed(6),D=t.Math.toDegrees(G.latitude).toFixed(6),te=G.height.toFixed(2);E.value=`经度: ${Z}, 纬度: ${D}, 海拔: ${te}米`}},t.ScreenSpaceEventType.MOUSE_MOVE),k.setInputAction(u=>{const g=u.endPosition,T=u.startPosition;if(!t.defined(l.terrainProvider))return;const G=l.scene.globe.ellipsoid;if(!l.camera.pickEllipsoid(T,G)){const D=l.camera;D.rotate(t.Cartesian3.UNIT_X,-.002*(g.y-T.y)),D.rotate(t.Cartesian3.UNIT_Y,-.002*(g.x-T.x))}},t.ScreenSpaceEventType.RIGHT_DRAG),k.setInputAction(()=>{},t.ScreenSpaceEventType.RIGHT_DOWN),k.setInputAction(()=>{},t.ScreenSpaceEventType.RIGHT_UP)}function R(){return ie(i.value),!0}function W(){if(l!=null&&l.imageryLayers)for(;m.length;){const u=m.pop();try{l.imageryLayers.remove(u,!0)}catch{}}}function X(){return[new t.UrlTemplateImageryProvider({url:`${Xe}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${o}`,subdomains:A,tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:18}),new t.UrlTemplateImageryProvider({url:`${Xe}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${o}`,subdomains:A,tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:10})]}function ne(){return[new t.UrlTemplateImageryProvider({url:`${Wt}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:20})]}function ce(){_.clear(),b.clear();const u=O.map(T=>{const G=new t.ProviderViewModel({name:T.label,tooltip:T.description||T.label,category:"项目底图",iconUrl:C(T.value==="google"?"#5ea1ff":"#37d67a",T.value==="google"?"G":"TD"),creationFunction:()=>T.value==="google"?ne():X()});return _.set(T.value,G),b.set(G,T.value),G}),g=he();return p.value=g.map((T,G)=>{const Z=String((T==null?void 0:T.name)||`官方底图 ${G+1}`).trim(),D=d(Z,G);return _.set(D,T),b.set(T,D),{value:D,label:`官方 · ${Z}`,description:String((T==null?void 0:T.tooltip)||Z),source:"official"}}),[...u,...g]}function he(){if(typeof(t==null?void 0:t.createDefaultImageryProviderViewModels)!="function")return[];try{return t.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function d(u,g){const T=u.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${g}_${T||"basemap"}`}function c(){return n.clear(),F.clear(),we.map(g=>{const T=new t.ProviderViewModel({name:g.label,tooltip:g.description||g.label,category:"项目地形",iconUrl:C(g.value==="ellipsoid"?"#a3a3a3":"#d0a449",g.value==="cesiumWorld"?"CW":g.value==="ellipsoid"?"EL":"TE"),creationFunction:()=>z(g.value)});return n.set(g.value,T),F.set(T,g.value),T})}function C(u,g){const T=String(g||"").replace(/[<>&"']/g,"").slice(0,2),G=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${u}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${T}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(G)}`}function z(u){if(u==="ellipsoid")return new t.EllipsoidTerrainProvider;if(u==="cesiumWorld")return st().catch(T=>(B.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),B.error("Cesium 世界地形初始化失败",T),Ct(u,"ellipsoid"),new t.EllipsoidTerrainProvider));const g=vt(t);try{return new g({url:`${Xe}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:A,token:o})}catch(T){return B.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),B.error("官方地形初始化失败",T),new t.EllipsoidTerrainProvider}}function q(){var te,ge,Ee,Re;K();const u=(te=l==null?void 0:l.baseLayerPicker)==null?void 0:te.viewModel;if(!u||!((ge=t==null?void 0:t.knockout)!=null&&ge.getObservable))return;const g=t.knockout.getObservable(u,"selectedImagery"),T=t.knockout.getObservable(u,"selectedTerrain"),G=[],Z=(Ee=g==null?void 0:g.subscribe)==null?void 0:Ee.call(g,Te=>{const oe=b.get(Te);oe&&(i.value!==oe&&(i.value=oe),ie(oe))}),D=(Re=T==null?void 0:T.subscribe)==null?void 0:Re.call(T,Te=>{const oe=F.get(Te);oe&&(s.value!==oe&&(s.value=oe),ye(oe))});Z&&G.push(Z),D&&G.push(D),M=G}function K(){M.forEach(u=>{var g;return(g=u==null?void 0:u.dispose)==null?void 0:g.call(u)}),M=[]}function ie(u){var g,T;u==="tianditu"?lt():Le(),(T=(g=l==null?void 0:l.scene)==null?void 0:g.requestRender)==null||T.call(g)}function me(u){var G,Z,D;if(!l||!t)return!1;const g=(G=l.baseLayerPicker)==null?void 0:G.viewModel,T=_.get(u);if(g&&T)return g.selectedImagery!==T&&(g.selectedImagery=T),ie(u),!0;try{return W(),(u==="google"?ne():X()).forEach(ge=>{m.push(l.imageryLayers.addImageryProvider(ge))}),u==="tianditu"?lt():Le(),(D=(Z=l.scene).requestRender)==null||D.call(Z),!0}catch(te){return B.error("地图源切换失败",te),!1}}function pe(){return Ne(s.value)}async function Ne(u){var D,te,ge,Ee,Re,Te,oe,xe,Ue;if(!l||!t)return!1;const g=(D=l.baseLayerPicker)==null?void 0:D.viewModel,T=n.get(u);if(g&&T)return g.selectedTerrain!==T&&(g.selectedTerrain=T),ye(u),(ge=(te=l.scene).requestRender)==null||ge.call(te),!0;const G=++P;if(u==="ellipsoid")return l.terrainProvider=new t.EllipsoidTerrainProvider,ye(u),(Re=(Ee=l.scene).requestRender)==null||Re.call(Ee),!0;if(u==="cesiumWorld")try{const De=await st();return G!==P?!1:(l.terrainProvider=De,ye(u),(oe=(Te=l.scene).requestRender)==null||oe.call(Te),!0)}catch(De){return G!==P||(l.terrainProvider=new t.EllipsoidTerrainProvider,ye("ellipsoid"),B.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),B.error("Cesium 世界地形初始化失败",De)),!1}const Z=vt(t);try{return l.terrainProvider=new Z({url:`${Xe}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:A,token:o}),ye(u),(Ue=(xe=l.scene).requestRender)==null||Ue.call(xe),!0}catch(De){return l.terrainProvider=new t.EllipsoidTerrainProvider,ye("ellipsoid"),B.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),B.error("官方地形初始化失败",De),!1}}function ye(u){var g;(g=l==null?void 0:l.scene)!=null&&g.globe&&(l.scene.globe.depthTestAgainstTerrain=u!=="ellipsoid")}function Ct(u,g){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{s.value===u&&(s.value=g)},0)}async function st(){var g,T;He();const u={requestWaterMask:!1,requestVertexNormals:!0};if(typeof t.createWorldTerrainAsync=="function")return t.createWorldTerrainAsync(u);if(typeof t.createWorldTerrain=="function")return t.createWorldTerrain(u);if(typeof((g=t.CesiumTerrainProvider)==null?void 0:g.fromIonAssetId)=="function")return t.CesiumTerrainProvider.fromIonAssetId(1,u);if((T=t.IonResource)!=null&&T.fromAssetId&&t.CesiumTerrainProvider){const G=await t.IonResource.fromAssetId(1);return new t.CesiumTerrainProvider({url:G,...u})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}function lt(){if(L)return!0;try{const u=Ur(t);return L=new u(l,{subdomains:A,url:`${Xe}mapservice/GetTiles?lxys={z},{x},{y}&tk=${o}&VERSION=1.0.0`,icoUrl:`${Xe}mapservice/GetIcon?id={id}&tk=${o}`,metadata:V,aotuCollide:!0,collisionPadding:[5,10,8,5],serverFirstStyle:!0,labelGraphics:{font:"28px sans-serif",fontSize:28,fillColor:t.Color.WHITE,scale:.5,outlineColor:t.Color.BLACK,outlineWidth:5,style:t.LabelStyle.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:t.Color.RED,backgroundPadding:new t.Cartesian2(10,10),horizontalOrigin:t.HorizontalOrigin.CENTER,verticalOrigin:t.VerticalOrigin.TOP,eyeOffset:new t.Cartesian3(0,0,10),pixelOffset:t.Cartesian2.ZERO},billboardGraphics:{horizontalOrigin:t.HorizontalOrigin.CENTER,verticalOrigin:t.VerticalOrigin.CENTER,eyeOffset:t.Cartesian3.ZERO,pixelOffset:t.Cartesian2.ZERO,alignedAxis:t.Cartesian3.ZERO,color:t.Color.WHITE,rotation:0,scale:1,width:18,height:18}}),L.initTDT(U,()=>{l.scene.requestRender()}),!0}catch{return!1}}function Mt(){const G=[0,2e3,5e3,1e4,15e3],Z=[3e4,3e4,25e3,25e3,2e4],D=[30,30,25,25,20],te=D.reduce((oe,xe)=>oe+xe*xe,0),ge=new Array(te),Ee=new Array(te),Re=new Array(te);let Te=0;for(let oe=0;oe<5;oe++){const xe=D[oe],Ue=D[oe],De=Z[oe];for(let Ve=0;Ve<Ue;Ve++)for(let We=0;We<xe;We++){const Qe=Te+Ve*xe+We,Je=(We-xe/2)*(De/111320),et=(Ve-Ue/2)*(De/111320/Math.cos(t.Math.toRadians(35))),Nt=Math.atan2(et,Je)+Math.PI/2+.2*Math.sin(We*.5)*Math.cos(Ve*.5);Ee[Qe]=t.Math.toDegrees(Nt)%360;const Bt=Math.sqrt(Je*Je+et*et),Ht=Math.max(0,1-Bt/15);ge[Qe]=(5+oe*2)*Ht+2*Math.random(),Re[Qe]=.5*Math.sin(We*.3)*Math.cos(Ve*.3)}Te+=xe*Ue}return{longitude:104,latitude:35,altitude:G,sizeMesh:Z,count:D,hspeed:ge,hdir:Ee,vspeed:Re}}function Pt(){if(!l||!t){B.error("Cesium 尚未初始化");return}Oe();const u=Mt();f.value=new Or(l,{maxWindSpeed:20,cesium:t,speedFactor:J.value.speedFactor,arrowLength:J.value.arrowLength,trailLength:J.value.trailLength,alphaFactor:J.value.alphaFactor}),f.value.loadData(u),l.scene.primitives.add(f.value),f.value.flyTo(),B.success("风场加载成功，可通过下方滑块调节样式")}function Lt(){f.value&&(f.value.speedFactor=J.value.speedFactor,f.value.arrowLength=J.value.arrowLength,f.value.trailLength=J.value.trailLength,f.value.alphaFactor=J.value.alphaFactor)}function Ft({moduleId:u,actionId:g}){var G,Z;(Z=(G={scene:{home:()=>Ke(),everest:zt,tileset:kt},wind:{load:Pt,clear:Oe},fluid:{pick:()=>{var D,te;return(te=(D=r.value)==null?void 0:D.startPickHeightMap)==null?void 0:te.call(D)},clear:()=>{var D,te;return(te=(D=r.value)==null?void 0:D.clearFluid)==null?void 0:te.call(D)}}}[u])==null?void 0:G[g])==null||Z.call(G)}function Et({moduleId:u,controlId:g,value:T}){if(u==="effects"&&g in le.value){le.value={...le.value,[g]:!!T};return}if(u==="wind"&&g in J.value){J.value={...J.value,[g]:Number(T)},Lt();return}u==="fluid"&&g in de.value&&(de.value={...de.value,[g]:Number(T)})}function Rt(u){fe.value={isPicking:!!(u!=null&&u.isPicking),hasFluid:!!(u!=null&&u.hasFluid),selectedText:(u==null?void 0:u.selectedText)||""}}function Dt(u,g){if(typeof window>"u")return g;try{const T=window.localStorage.getItem(u);return T==null?g:T==="true"}catch{return g}}function At(u,g){if(!(typeof window>"u"))try{window.localStorage.setItem(u,String(!!g))}catch{}}function It(u,g){return new Promise((T,G)=>{const Z=document.getElementById(g);if(Z){if(Z.getAttribute("data-loaded")==="true"){T();return}Z.addEventListener("load",()=>T(),{once:!0}),Z.addEventListener("error",()=>G(new Error(`脚本加载失败: ${u}`)),{once:!0});return}const D=document.createElement("script");D.id=g,D.src=u,D.async=!0,D.onload=()=>{D.setAttribute("data-loaded","true"),T()},D.onerror=()=>G(new Error(`脚本加载失败: ${u}`)),document.head.appendChild(D)})}function Ot(u,g){return new Promise((T,G)=>{if(document.getElementById(g)){T();return}const D=document.createElement("link");D.id=g,D.rel="stylesheet",D.href=u,D.onload=()=>T(),D.onerror=()=>G(new Error(`样式加载失败: ${u}`)),document.head.appendChild(D)})}function Ke(u){if(!l)return;const g=typeof u=="number"?u:2;l.camera.flyTo({destination:t.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-t.Math.PI_OVER_TWO,roll:0},duration:g})}function zt(){l&&l.camera.flyTo({destination:t.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:t.Math.toRadians(0),pitch:t.Math.toRadians(-25),roll:0},duration:3})}async function kt(){if(l)try{const u=await t.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");l.scene.primitives.add(u),l.flyTo(u,{duration:3,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-25),u.boundingSphere.radius*2.5)})}catch(u){B.error(`加载模型失败: ${u}`),B.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return(u,g)=>(N(),$(_e,null,[g[5]||(g[5]=w("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),e.value?(N(),Me($e(pi),{key:0,headless:"","get-viewer":Se,"get-cesium":ze,controls:le.value},null,8,["controls"])):ae("",!0),e.value?(N(),Me($e(Pr),{key:1,ref_key:"fluidPanelRef",ref:r,headless:"","get-viewer":Se,"get-cesium":ze,params:de.value,onStateChange:Rt},null,40,["params"])):ae("",!0),e.value?(N(),Me(hr,{key:2,open:S.value,"onUpdate:open":g[0]||(g[0]=T=>S.value=T),"active-basemap":i.value,"onUpdate:activeBasemap":g[1]||(g[1]=T=>i.value=T),"active-terrain":s.value,"onUpdate:activeTerrain":g[2]||(g[2]=T=>s.value=T),"basemap-options":ee.value,"terrain-options":we,modules:qe.value,onModuleAction:Ft,onControlChange:Et},null,8,["open","active-basemap","active-terrain","basemap-options","modules"])):ae("",!0),w("div",Vr,[w("div",Wr,re(E.value),1),g[4]||(g[4]=w("div",{class:"divider"},null,-1)),w("button",{class:"home-btn",title:"回到初始位置",onClick:Ke},[...g[3]||(g[3]=[w("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[w("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},aa=Ze(Gr,[["__scopeId","data-v-a34af7aa"]]);export{aa as default};
