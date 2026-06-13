const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-B39pOI_G.js","./vendor-echarts-all-CVx2VYxY.js","./vendor-libs-CdvuqtNs.js","./vendor-vue-CmuMwCC6.js"])))=>i.map(i=>d[i]);
var pr=Object.defineProperty;var gr=(i,e,d)=>e in i?pr(i,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):i[e]=d;var _t=(i,e,d)=>gr(i,typeof e!="symbol"?e+"":e,d);import{_ as et,e as dt,K as Dt,J as kt,I as vr}from"./index-B5dmcMU-.js";import{_ as yr}from"./vendor-runtime-Dp1pzeXC.js";import{C as zt,o as It,w as we,d as D,c as W,f as u,t as ie,G as ge,W as Qe,X as Ze,g as ae,r as J,P as _r,a as Le,u as Se,F as Te,e as Ee,n as xe,x as Ae,S as $e,I as xt,i as xr,H as Ne,q as Me,v as br}from"./vendor-vue-CmuMwCC6.js";import{af as st,ag as lt,ah as wr,X as Sr,e as bt,ac as wt,ai as Tr,aj as Mr,ak as St,H as Tt,al as Cr,T as Mt,a2 as Lr,am as Pr,an as Fr,ao as Er,ap as Ar,q as Rr,o as Dr,aq as kr}from"./vendor-libs-CdvuqtNs.js";import"./vendor-ol-all-D3od1ozZ.js";import"./vendor-geotiff-DCPfLQJG.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-DbLN0cxH.js";import"./vendor-axios-Bdz_Fv8M.js";const zr={key:0,class:"advanced-effects-root"},Ir={class:"effects-panel"},Or={class:"panel-head"},Nr={class:"effect-switches"},Br={class:"switch-item"},Hr={class:"switch-item"},Vr={class:"switch-item"},Ur={class:"switch-item"},Wr={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(i){const e=i,d=dt(),_=J(null),I=J(!1),C=J(!1),V=J(!1),X=J(!1),a=J(!1);let k=null,N=null,A=null,te=!1,U=null,P=null,M=null,h=null,F=null,t=null,m=null,f=null,y=!1,E=0,b=0,B=typeof performance<"u"?performance.now():Date.now();function ee(){return M||(M=yr(()=>import("./cesiumFxRuntime-B39pOI_G.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(l=>{var x;const s=(x=l==null?void 0:l.getCesiumFxEchartsRuntime)==null?void 0:x.call(l);if(!s)throw new Error("Cinematic FX 图表运行时加载失败");return P=s,s}).catch(l=>{throw M=null,l}),M)}async function Q(){return P||ee()}const H={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},G={hdr:null,bloom:null,sky:null};zt(()=>{T()}),It(()=>{L()}),we(()=>e.controls,l=>{v(l||{})},{deep:!0,immediate:!0});function v(l){Object.prototype.hasOwnProperty.call(l,"fog")&&(I.value=!!l.fog),Object.prototype.hasOwnProperty.call(l,"hbao")&&(C.value=!!l.hbao),Object.prototype.hasOwnProperty.call(l,"tiltShift")&&(V.value=!!l.tiltShift),Object.prototype.hasOwnProperty.call(l,"atmosphere")&&(X.value=!!l.atmosphere)}function T(){let l=0;h=window.setInterval(async()=>{var z,Y;l+=1;const s=(z=e.getViewer)==null?void 0:z.call(e),x=((Y=e.getCesium)==null?void 0:Y.call(e))||window.Cesium;if(s&&x){clearInterval(h),h=null;try{g(s),K(s),oe(s,x),fe(s),d.success("高级视觉效果已启用。")}catch(re){d.error("高级视觉效果初始化失败",re),d.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}l>=150&&(clearInterval(h),h=null,d.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function g(l){var x,z,Y,re,le,be;const s=l==null?void 0:l.scene;if(s){if(typeof s.highDynamicRange=="boolean"&&(G.hdr=s.highDynamicRange),(x=s.postProcessStages)!=null&&x.bloom){const ve=s.postProcessStages.bloom;G.bloom={enabled:!!ve.enabled,contrast:(z=ve.uniforms)==null?void 0:z.contrast,brightness:(Y=ve.uniforms)==null?void 0:Y.brightness,delta:(re=ve.uniforms)==null?void 0:re.delta,sigma:(le=ve.uniforms)==null?void 0:le.sigma,stepSize:(be=ve.uniforms)==null?void 0:be.stepSize}}s.skyAtmosphere&&(G.sky={hueShift:s.skyAtmosphere.hueShift,saturationShift:s.skyAtmosphere.saturationShift,brightnessShift:s.skyAtmosphere.brightnessShift})}}function oe(l,s){var z;!((z=l==null?void 0:l.scene)!=null&&z.postProcessStages)||!(s!=null&&s.PostProcessStage)||(de(l,s),Be(l,s),qe(l,s),X.value?ne(l,1200):he(l))}function K(l){var x;const s=l==null?void 0:l.scene;(x=s==null?void 0:s.renderError)!=null&&x.addEventListener&&(s.rethrowRenderErrors=!1,f=s.renderError.addEventListener((z,Y)=>{d.error("Cesium 渲染异常，已触发降级保护",Y),O(),y||(y=!0,d.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function O(){I.value=!1,V.value=!1,C.value=!1,X.value=!1,k&&(k.enabled=!1),N&&(N.enabled=!1),A&&(A.enabled=!1)}function de(l,s){k||(k=new s.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new s.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),l.scene.postProcessStages.add(k),k.enabled=I.value)}function Be(l,s){var z,Y;const x=(z=l==null?void 0:l.scene)==null?void 0:z.postProcessStages;x&&(x.ambientOcclusion?(A=x.ambientOcclusion,te=!1):(Y=s==null?void 0:s.PostProcessStageLibrary)!=null&&Y.createAmbientOcclusionStage&&(A=s.PostProcessStageLibrary.createAmbientOcclusionStage(),x.add(A),te=!0),A&&(A.enabled=C.value,A.uniforms&&("intensity"in A.uniforms&&(A.uniforms.intensity=4.2),"bias"in A.uniforms&&(A.uniforms.bias=.08),"lengthCap"in A.uniforms&&(A.uniforms.lengthCap=.35),"stepSize"in A.uniforms&&(A.uniforms.stepSize=1.8),"frustumLength"in A.uniforms&&(A.uniforms.frustumLength=1200))))}function qe(l,s){N||(N=new s.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),l.scene.postProcessStages.add(N),N.enabled=!1)}function fe(l){const s=l==null?void 0:l.scene;s&&(m=s.preRender.addEventListener(()=>{var re;const x=$(l),z=Number(((re=l==null?void 0:l.camera)==null?void 0:re.pitch)??-1.2);E+=1;const Y=typeof performance<"u"?performance.now():Date.now();if(Y-B>=1e3&&(b=Math.round(E*1e3/(Y-B)),E=0,B=Y),k&&(k.enabled=I.value,k.uniforms.cameraHeightFactor=q(x,150,12e3),k.uniforms.fogDensity=55e-5+(1-k.uniforms.cameraHeightFactor)*.00125),A&&(A.enabled=C.value),N){const le=z>-.62,be=le?se((z+.62)/.5):0;N.enabled=V.value&&le,N.uniforms.blurStrength=be}X.value?ne(l,x):he(l)}))}function ne(l,s){var le;const x=l==null?void 0:l.scene;if(!x)return;typeof x.highDynamicRange=="boolean"&&(x.highDynamicRange=!0);const z=(le=x.postProcessStages)==null?void 0:le.bloom;z&&(z.enabled=!0,z.uniforms&&("contrast"in z.uniforms&&(z.uniforms.contrast=149),"brightness"in z.uniforms&&(z.uniforms.brightness=-.12),"delta"in z.uniforms&&(z.uniforms.delta=1),"sigma"in z.uniforms&&(z.uniforms.sigma=3.25),"stepSize"in z.uniforms&&(z.uniforms.stepSize=5)));const Y=x.skyAtmosphere;if(!Y)return;const re=q(s,500,12e4);Y.hueShift=-.035+re*.035,Y.saturationShift=-.14+re*.09,Y.brightnessShift=.03+(1-re)*.08}function he(l){var z;const s=l==null?void 0:l.scene;if(!s)return;typeof s.highDynamicRange=="boolean"&&G.hdr!==null&&(s.highDynamicRange=G.hdr);const x=(z=s.postProcessStages)==null?void 0:z.bloom;x&&G.bloom&&(x.enabled=G.bloom.enabled,x.uniforms&&("contrast"in x.uniforms&&G.bloom.contrast!==void 0&&(x.uniforms.contrast=G.bloom.contrast),"brightness"in x.uniforms&&G.bloom.brightness!==void 0&&(x.uniforms.brightness=G.bloom.brightness),"delta"in x.uniforms&&G.bloom.delta!==void 0&&(x.uniforms.delta=G.bloom.delta),"sigma"in x.uniforms&&G.bloom.sigma!==void 0&&(x.uniforms.sigma=G.bloom.sigma),"stepSize"in x.uniforms&&G.bloom.stepSize!==void 0&&(x.uniforms.stepSize=G.bloom.stepSize))),s.skyAtmosphere&&G.sky&&(s.skyAtmosphere.hueShift=G.sky.hueShift,s.skyAtmosphere.saturationShift=G.sky.saturationShift,s.skyAtmosphere.brightnessShift=G.sky.brightnessShift)}function pe(){F&&(clearInterval(F),F=null)}async function He(){var z,Y;const l=!a.value;if(a.value=l,!l){pe();return}const s=(z=e.getViewer)==null?void 0:z.call(e),x=((Y=e.getCesium)==null?void 0:Y.call(e))||window.Cesium;if(!s||!x){a.value=!1,d.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await Pe(s,x),Ve(s,x),c(s,x)}catch(re){a.value=!1,d.error("图表模块加载失败",re)}}async function Pe(l,s){await Q(),await _r(),_.value&&(U||(U=P.init(_.value),p()),t||(t=()=>{U==null||U.resize()},window.addEventListener("resize",t)),U.resize(),c(l,s))}function Ve(l,s){F||(F=window.setInterval(()=>{!U||!a.value||c(l,s)},1200))}function c(l,s){var le;const x=new Date,z=`${_e(x.getHours())}:${_e(x.getMinutes())}:${_e(x.getSeconds())}`,Y=Number(($(l)/1e3).toFixed(2)),re=Number(s.Math.toDegrees(((le=l==null?void 0:l.camera)==null?void 0:le.pitch)??0).toFixed(1));me(H.labels,z,20),me(H.cameraHeightKm,Y,20),me(H.pitchDeg,re,20),me(H.fps,b,20),U.setOption({xAxis:{data:H.labels},series:[{data:H.cameraHeightKm},{data:H.pitchDeg},{data:H.fps}]})}function p(){U&&U.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function L(){var x,z;h&&(clearInterval(h),h=null),pe();const l=(x=e.getViewer)==null?void 0:x.call(e),s=(z=l==null?void 0:l.scene)==null?void 0:z.postProcessStages;m&&(m(),m=null),f&&(f(),f=null),k&&s&&s.remove(k),k=null,N&&s&&s.remove(N),N=null,A&&(te&&s&&s.remove(A),A=null),te=!1,l&&he(l),t&&(window.removeEventListener("resize",t),t=null),U&&(U.dispose(),U=null),P=null,y=!1}function $(l){var Y,re,le;const s=(re=(Y=l==null?void 0:l.scene)==null?void 0:Y.globe)==null?void 0:re.ellipsoid,x=(le=l==null?void 0:l.camera)==null?void 0:le.positionWC;if(!s||!x)return 0;const z=s.cartesianToCartographic(x);return Math.max(0,Number((z==null?void 0:z.height)??0))}function q(l,s,x){return!Number.isFinite(l)||x<=s?0:se((l-s)/(x-s))}function se(l){return Math.min(1,Math.max(0,Number(l)||0))}function me(l,s,x){l.push(s),l.length>x&&l.shift()}function _e(l){return String(l).padStart(2,"0")}return(l,s)=>i.headless?ae("",!0):(D(),W("div",zr,[u("div",Ir,[u("div",Or,[s[4]||(s[4]=u("span",{class:"panel-title"},"Cinematic FX",-1)),u("button",{class:"panel-btn",onClick:He},ie(a.value?"隐藏图表":"显示图表"),1)]),u("div",Nr,[u("label",Br,[ge(u("input",{"onUpdate:modelValue":s[0]||(s[0]=x=>I.value=x),type:"checkbox"},null,512),[[Qe,I.value]]),s[5]||(s[5]=u("span",null,"电影级高度雾",-1))]),u("label",Hr,[ge(u("input",{"onUpdate:modelValue":s[1]||(s[1]=x=>C.value=x),type:"checkbox"},null,512),[[Qe,C.value]]),s[6]||(s[6]=u("span",null,"HBAO 微阴影",-1))]),u("label",Vr,[ge(u("input",{"onUpdate:modelValue":s[2]||(s[2]=x=>V.value=x),type:"checkbox"},null,512),[[Qe,V.value]]),s[7]||(s[7]=u("span",null,"移轴摄影",-1))]),u("label",Ur,[ge(u("input",{"onUpdate:modelValue":s[3]||(s[3]=x=>X.value=x),type:"checkbox"},null,512),[[Qe,X.value]]),s[8]||(s[8]=u("span",null,"动态大气 + Bloom",-1))])]),ge(u("div",{ref_key:"chartRef",ref:_,class:"fx-chart"},null,512),[[Ze,a.value]])])]))}},Gr=et(Wr,[["__scopeId","data-v-5d8bf97e"]]),$r={key:0,class:"launcher-count"},qr={class:"panel-header"},Xr={class:"panel-title-block"},Yr={class:"panel-mark"},jr={class:"panel-copy"},Zr={class:"panel-subtitle"},Kr={class:"panel-actions"},Jr=["title"],Qr={class:"panel-tabs","aria-label":"3D 工具分类"},ei=["aria-pressed","onClick"],ti={class:"panel-scroll"},ri={class:"panel-page"},ii={class:"overview-grid"},ai={class:"overview-tile"},ni={class:"overview-tile"},oi={class:"overview-tile"},si={key:0,class:"quick-actions"},li=["disabled","onClick"],ci={key:1,class:"empty-state"},ui={class:"panel-page"},di={key:0,class:"option-group"},hi={class:"section-head"},mi={class:"option-grid"},fi=["disabled","aria-pressed","title","onClick"],pi={class:"custom-basemap-input-row"},gi=["disabled"],vi={key:0,class:"custom-basemap-current"},yi={key:1,class:"option-group"},_i={class:"section-head"},xi={class:"option-grid"},bi=["aria-pressed","title","onClick"],wi={key:2,class:"option-group"},Si={class:"section-head"},Ti={class:"overlay-list"},Mi=["disabled","aria-pressed","title","onClick"],Ci={class:"overlay-copy"},Li={class:"overlay-title"},Pi={key:0,class:"overlay-desc"},Fi={key:3,class:"empty-state"},Ei={class:"panel-page"},Ai={class:"module-list"},Ri=["aria-expanded","onClick"],Di={class:"module-icon"},ki={class:"module-copy"},zi={class:"module-title"},Ii={key:0,class:"module-desc"},Oi={class:"module-head-side"},Ni={key:0,class:"module-body"},Bi={key:0,class:"module-actions"},Hi=["disabled","onClick"],Vi={key:1,class:"control-list"},Ui={class:"control-label"},Wi=["min","max","step","value","disabled","onInput"],Gi=["min","max","step","value","disabled","onInput"],$i=["value","disabled","onChange"],qi=["value"],Xi=["aria-pressed","disabled","onClick"],Yi={key:3,class:"control-value"},ji={key:0,class:"empty-state"},Zi={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit"],setup(i,{emit:e}){const d=i,_=e,I=E(),C=J(I.activeTab||"scene"),V=J(!!I.compactMode),X=J(new Set(I.expandedModuleIds||["effects"])),a=J(d.customBasemapUrl||""),k=Me(()=>d.embedded||d.open),N=Me(()=>d.modules.find(v=>v.id==="scene")||null),A=Me(()=>{var v;return((v=N.value)==null?void 0:v.actions)||[]}),te=Me(()=>d.modules.filter(v=>v.id!=="scene")),U=Me(()=>te.value.filter(v=>v.statusTone==="success"||v.statusTone==="warning").length),P=[{id:"scene",label:"场景",icon:lt},{id:"layers",label:"图层",icon:bt},{id:"modules",label:"模块",icon:st}],M=Me(()=>{var v;return((v=d.basemapOptions.find(T=>T.value===d.activeBasemap))==null?void 0:v.label)||"未选择"}),h=Me(()=>{var v;return((v=d.terrainOptions.find(T=>T.value===d.activeTerrain))==null?void 0:v.label)||"未选择"});we(()=>d.modules.map(v=>v.id),v=>{v.includes(C.value)||C.value==="scene"||C.value==="layers"||C.value==="modules"||(C.value="scene")},{immediate:!0}),we([C,V,X],b,{deep:!0}),we(()=>d.customBasemapUrl,v=>{v!==a.value&&(a.value=v||"")});function F(v){_("update:open",v)}function t(v){return X.value.has(v)}function m(v){const T=new Set(X.value);T.has(v)?T.delete(v):T.add(v),X.value=T}function f(v){v!=null&&v.disabled||_("update:activeBasemap",v.value)}function y(){_("custom-basemap-submit",{url:a.value})}function E(){if(typeof window>"u")return{};try{const v=window.localStorage.getItem(d.storageKey);return v?JSON.parse(v):{}}catch{return{}}}function b(){if(!(typeof window>"u"))try{window.localStorage.setItem(d.storageKey,JSON.stringify({activeTab:C.value,compactMode:V.value,expandedModuleIds:[...X.value]}))}catch{}}function B(v){return{scene:lt,effects:Dr,wind:Rr,fluid:Ar}[v]||st}function ee(v,T){var oe;return((oe={scene:{home:Fr,everest:St,tileset:Pr},wind:{load:Lr,clear:Mt},fluid:{pick:Tt,clear:Mt}}[v])==null?void 0:oe[T])||Er}function Q(v,T){_("module-action",{moduleId:v,actionId:T})}function H(v,T,g){const oe=T.type==="range"?Number(g):g;_("control-change",{moduleId:v,controlId:T.id,value:oe})}function G(v){v.disabled||_("overlay-toggle",{overlayId:v.value,value:!v.active})}return(v,T)=>(D(),W("aside",{class:xe(["cesium-tool-shell",{"is-open":k.value,"is-embedded":i.embedded}])},[!i.embedded&&!k.value?(D(),W("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:T[0]||(T[0]=g=>F(!0))},[Le(Se(st),{size:18,"stroke-width":"2"}),T[4]||(T[4]=u("span",null,"高级控制台",-1)),U.value?(D(),W("span",$r,ie(U.value),1)):ae("",!0)])):ae("",!0),ge(u("section",{class:xe(["cesium-tool-panel",{compact:V.value}]),"aria-label":"Cesium 高级控制台"},[u("header",qr,[u("div",Xr,[u("span",Yr,[Le(Se(lt),{size:18,"stroke-width":"2"})]),u("span",jr,[T[5]||(T[5]=u("span",{class:"panel-title"},"3D 高级控制台",-1)),u("span",Zr,ie(M.value)+" / "+ie(h.value),1)])]),u("div",Kr,[u("button",{class:"icon-btn",type:"button",title:V.value?"切换为舒展布局":"切换为紧凑布局",onClick:T[1]||(T[1]=g=>V.value=!V.value)},[Le(Se(wr),{size:16,"stroke-width":"2"})],8,Jr),i.embedded?ae("",!0):(D(),W("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:T[2]||(T[2]=g=>F(!1))},[Le(Se(Sr),{size:17,"stroke-width":"2"})]))])]),u("nav",Qr,[(D(),W(Te,null,Ee(P,g=>u("button",{key:g.id,class:xe(["tab-btn",{active:C.value===g.id}]),type:"button","aria-pressed":C.value===g.id,onClick:oe=>C.value=g.id},[(D(),Ae($e(g.icon),{size:15,"stroke-width":"2"})),u("span",null,ie(g.label),1)],10,ei)),64))]),u("div",ti,[ge(u("section",ri,[u("div",ii,[u("div",ai,[T[6]||(T[6]=u("span",{class:"overview-label"},"地图源",-1)),u("strong",null,ie(M.value),1)]),u("div",ni,[T[7]||(T[7]=u("span",{class:"overview-label"},"地形",-1)),u("strong",null,ie(h.value),1)]),u("div",oi,[T[8]||(T[8]=u("span",{class:"overview-label"},"模块",-1)),u("strong",null,ie(U.value)+"/"+ie(te.value.length),1)])]),A.value.length?(D(),W("div",si,[(D(!0),W(Te,null,Ee(A.value,g=>(D(),W("button",{key:g.id,class:xe(["tool-action",[g.variant||"default",{active:g.active}]]),disabled:g.disabled,type:"button",onClick:oe=>Q(N.value.id,g.id)},[(D(),Ae($e(ee(N.value.id,g.id)),{size:15,"stroke-width":"2"})),xt(" "+ie(g.label),1)],10,li))),128))])):(D(),W("div",ci," 暂无场景快捷操作 "))],512),[[Ze,C.value==="scene"]]),ge(u("section",ui,[i.basemapOptions.length?(D(),W("div",di,[u("div",hi,[Le(Se(bt),{size:16,"stroke-width":"2"}),T[9]||(T[9]=u("span",null,"地图源",-1))]),u("div",mi,[(D(!0),W(Te,null,Ee(i.basemapOptions,g=>(D(),W("button",{key:g.value,class:xe(["option-card",{active:g.value===i.activeBasemap}]),type:"button",disabled:g.disabled,"aria-pressed":g.value===i.activeBasemap,title:g.description||g.label,onClick:oe=>f(g)},[u("span",null,ie(g.label),1),g.value===i.activeBasemap?(D(),Ae(Se(wt),{key:0,size:15,"stroke-width":"2.4"})):ae("",!0)],10,fi))),128))]),u("form",{class:"custom-basemap-editor",onSubmit:xr(y,["prevent"])},[u("div",pi,[Le(Se(Tr),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),ge(u("input",{"onUpdate:modelValue":T[3]||(T[3]=g=>a.value=g),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Ne,a.value]]),u("button",{class:"custom-basemap-submit",type:"submit",disabled:!a.value.trim(),title:"加载自定义 XYZ"},[Le(Se(Mr),{size:14,"stroke-width":"2"}),T[10]||(T[10]=u("span",null,"加载",-1))],8,gi)]),i.customBasemapUrl?(D(),W("div",vi,ie(i.customBasemapUrl),1)):ae("",!0)],32)])):ae("",!0),i.terrainOptions.length?(D(),W("div",yi,[u("div",_i,[Le(Se(St),{size:16,"stroke-width":"2"}),T[11]||(T[11]=u("span",null,"地形",-1))]),u("div",xi,[(D(!0),W(Te,null,Ee(i.terrainOptions,g=>(D(),W("button",{key:g.value,class:xe(["option-card",{active:g.value===i.activeTerrain}]),type:"button","aria-pressed":g.value===i.activeTerrain,title:g.description||g.label,onClick:oe=>v.$emit("update:activeTerrain",g.value)},[u("span",null,ie(g.label),1),g.value===i.activeTerrain?(D(),Ae(Se(wt),{key:0,size:15,"stroke-width":"2.4"})):ae("",!0)],10,bi))),128))])])):ae("",!0),i.overlayOptions.length?(D(),W("div",wi,[u("div",Si,[Le(Se(Tt),{size:16,"stroke-width":"2"}),T[12]||(T[12]=u("span",null,"叠加层",-1))]),u("div",Ti,[(D(!0),W(Te,null,Ee(i.overlayOptions,g=>(D(),W("button",{key:g.value,class:xe(["overlay-row",{active:!!g.active}]),type:"button",disabled:g.disabled,"aria-pressed":!!g.active,title:g.description||g.label,onClick:oe=>G(g)},[u("span",Ci,[u("span",Li,ie(g.label),1),g.description?(D(),W("span",Pi,ie(g.description),1)):ae("",!0)]),u("span",{class:xe(["toggle-control",{active:!!g.active}]),"aria-hidden":"true"},[...T[13]||(T[13]=[u("span",{class:"toggle-track"},[u("span",{class:"toggle-thumb"})],-1)])],2)],10,Mi))),128))])])):ae("",!0),!i.basemapOptions.length&&!i.terrainOptions.length&&!i.overlayOptions.length?(D(),W("div",Fi," 暂无图层配置项 ")):ae("",!0)],512),[[Ze,C.value==="layers"]]),ge(u("section",Ei,[u("div",Ai,[(D(!0),W(Te,null,Ee(te.value,g=>{var oe,K;return D(),W("article",{key:g.id,class:xe(["module-item",{expanded:t(g.id)}])},[u("button",{class:"module-head",type:"button","aria-expanded":t(g.id),onClick:O=>m(g.id)},[u("span",Di,[(D(),Ae($e(B(g.id)),{size:16,"stroke-width":"2"}))]),u("span",ki,[u("span",zi,ie(g.title),1),g.description?(D(),W("span",Ii,ie(g.description),1)):ae("",!0)]),u("span",Oi,[g.status?(D(),W("span",{key:0,class:xe(["module-status",g.statusTone||"neutral"])},ie(g.status),3)):ae("",!0),Le(Se(Cr),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Ri),t(g.id)?(D(),W("div",Ni,[(oe=g.actions)!=null&&oe.length?(D(),W("div",Bi,[(D(!0),W(Te,null,Ee(g.actions,O=>(D(),W("button",{key:O.id,class:xe(["tool-action",[O.variant||"default",{active:O.active}]]),disabled:O.disabled,type:"button",onClick:de=>Q(g.id,O.id)},[(D(),Ae($e(ee(g.id,O.id)),{size:14,"stroke-width":"2"})),xt(" "+ie(O.label),1)],10,Hi))),128))])):ae("",!0),(K=g.controls)!=null&&K.length?(D(),W("div",Vi,[(D(!0),W(Te,null,Ee(g.controls,O=>(D(),W("label",{key:O.id,class:xe(["control-row",`control-${O.type}`])},[u("span",Ui,ie(O.label),1),O.type==="range"?(D(),W(Te,{key:0},[u("input",{class:"control-range",type:"range",min:O.min,max:O.max,step:O.step,value:O.value,disabled:O.disabled,onInput:de=>H(g.id,O,de.target.value)},null,40,Wi),u("input",{class:"control-number",type:"number",min:O.min,max:O.max,step:O.step,value:O.value,disabled:O.disabled,onInput:de=>H(g.id,O,de.target.value)},null,40,Gi)],64)):O.type==="select"?(D(),W("select",{key:1,class:"control-select",value:O.value,disabled:O.disabled,onChange:de=>H(g.id,O,de.target.value)},[(D(!0),W(Te,null,Ee(O.options||[],de=>(D(),W("option",{key:de.value,value:de.value},ie(de.label),9,qi))),128))],40,$i)):O.type==="toggle"?(D(),W("button",{key:2,class:xe(["toggle-control",{active:!!O.value}]),type:"button","aria-pressed":!!O.value,disabled:O.disabled,onClick:de=>H(g.id,O,!O.value)},[...T[14]||(T[14]=[u("span",{class:"toggle-track"},[u("span",{class:"toggle-thumb"})],-1)])],10,Xi)):ae("",!0),O.displayValue?(D(),W("span",Yi,ie(O.displayValue),1)):ae("",!0)],2))),128))])):ae("",!0)])):ae("",!0)],2)}),128))]),te.value.length?ae("",!0):(D(),W("div",ji," 暂无可用功能模块 "))],512),[[Ze,C.value==="modules"]])])],2),[[Ze,i.embedded||k.value]])],2))}},Ki=et(Zi,[["__scopeId","data-v-1d60f149"]]);function Ji(i){if(!i)throw new Error("Cesium runtime is required for FluidRenderer.");function e(F){return(F==null?void 0:F._view)||(F==null?void 0:F.view)}function d(F){const t=e(F);if(!(t!=null&&t.passState))throw new Error("Cesium scene passState is unavailable.");return t.passState}function _(F){const t=e(F);return(t==null?void 0:t.frustumCommandsList)||(t==null?void 0:t._frustumCommandsList)||[]}const I=`
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
`,C=`
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
`,V=`
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
`,X=`
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
`,a=`
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
`,k=`
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
`;class N{constructor(t){this.commandType=t.commandType,this.geometry=t.geometry,this.attributeLocations=t.attributeLocations,this.primitiveType=t.primitiveType,this.uniformMap=t.uniformMap,this.vertexShaderSource=t.vertexShaderSource,this.fragmentShaderSource=t.fragmentShaderSource,this.rawRenderState=t.rawRenderState,this.framebuffer=t.framebuffer,this.isPostRender=t.isPostRender,this.outputTexture=t.outputTexture,this.autoClear=i.defaultValue(t.autoClear,!1),this.preExecute=t.preExecute,this.modelMatrix=i.defaultValue(t.modelMatrix,i.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new i.ClearCommand({color:new i.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:i.Pass.OPAQUE}))}createCommand(t){switch(this.commandType){case"Draw":{const m=i.VertexArray.fromGeometry({context:t,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:i.BufferUsage.STATIC_DRAW}),f=i.ShaderProgram.fromCache({context:t,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),y=i.RenderState.fromCache(this.rawRenderState);return new i.DrawCommand({owner:this,vertexArray:m,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:f,framebuffer:this.framebuffer,renderState:y,pass:i.Pass.OPAQUE})}case"Compute":return new i.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(t,m){this.geometry=m;const f=i.VertexArray.fromGeometry({context:t,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:i.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=f}update(t){this.show&&(i.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(t.context),this.commandToExecute.isPostRender=this.isPostRender),i.defined(this.preExecute)&&this.preExecute(this),i.defined(this.clearCommand)&&t.commandList.push(this.clearCommand),t.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return i.defined(this.commandToExecute)&&(i.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),i.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),i.destroyObject(this)}}class A{constructor(){}static loadText(t){const m=new XMLHttpRequest;return m.open("GET",t,!1),m.send(),m.responseText}static getFullscreenQuad(){return new i.Geometry({attributes:new i.GeometryAttributes({position:new i.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new i.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(t){if(i.defined(t.arrayBufferView)){const f={};f.arrayBufferView=t.arrayBufferView,t.source=f,t.flipY=!1}return new i.Texture(t)}static createDepthFramebuffer(t,m,f){return new i.Framebuffer({context:t,colorTextures:[this.createTexture({context:t,width:m,height:f,flipY:!1,pixelFormat:i.PixelFormat.RGBA,pixelDatatype:i.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(m*f*4)})],depthRenderbuffer:new i.Renderbuffer({context:t,width:m,height:f,format:i.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(t,m,f,y=!1){const E={context:t,colorTextures:[m],destroyAttachments:y};return f&&(E.depthTexture=f),new i.Framebuffer(E)}static createRawRenderState(t){const y={viewport:t.viewport,depthTest:t.depthTest,depthMask:t.depthMask,blending:t.blending};return i.Appearance.getDefaultRenderState(!0,!1,y)}}const h=class h{constructor(t,m={}){if(!t)throw new Error("Cesium Viewer is required");this.viewer=t,this._initConfiguration(m),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(t){this.config={resolution:new i.Cartesian2(t.width||h.DEFAULTS.width,t.height||h.DEFAULTS.height),dimensions:t.dimensions||h.DEFAULTS.dimensions.clone(),heightRange:{min:t.minHeight??h.DEFAULTS.heightRange[0],max:t.maxHeight??h.DEFAULTS.heightRange[1]},baseHeight:t.baseHeight??h.DEFAULTS.baseHeight,fluidParams:t.fluidParams||h.DEFAULTS.fluidParams.clone(),customParams:t.customParams||h.DEFAULTS.customParams.clone(),lonLat:t.lonLat||[...h.DEFAULTS.lonLat],timeStep:t.timeStep||h.DEFAULTS.timeStep,heightMapSource:t.heightMapSource||h.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const t=()=>A.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:i.PixelFormat.RGBA,pixelDatatype:i.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:t(),B:t(),C:t(),D:t()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(t){if(!(t!=null&&t.arrayBufferView)||!t.width||!t.height)throw new Error("Invalid height map source.");return A.createTexture({context:this.viewer.scene.context,width:t.width,height:t.height,flipY:!1,pixelFormat:i.PixelFormat.RGBA,pixelDatatype:i.PixelDatatype.FLOAT,arrayBufferView:t.arrayBufferView,sampler:new i.Sampler({wrapS:i.TextureWrap.CLAMP_TO_EDGE,wrapT:i.TextureWrap.CLAMP_TO_EDGE,minificationFilter:i.TextureMinificationFilter.LINEAR,magnificationFilter:i.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var v,T;const t=this.viewer.scene.context,m=A.createDepthFramebuffer(t,this.config.resolution.x,this.config.resolution.y),f=this.viewer.scene,y=f.frameState,E=d(this.viewer.scene),b=f.camera,B=y.camera,ee=E.framebuffer,Q=i.BoundingRectangle.clone(E.viewport,new i.BoundingRectangle);let H=null,G=[];try{E.viewport.x=0,E.viewport.y=0,E.viewport.width=this.config.resolution.x,E.viewport.height=this.config.resolution.y,E.framebuffer=m,f.camera=this.heightMapCamera,y.camera=this.heightMapCamera,y.context.uniformState.updateCamera(this.heightMapCamera),G=this._processHeightMapShaders(),this._renderDepthPrepass(E);const g=A.createTexture({context:t,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:i.PixelFormat.RGBA,pixelDatatype:i.PixelDatatype.FLOAT});return H=A.createFramebuffer(t,g),this._copyTexture(m.getColorTexture(0),H),g}finally{this._restoreHeightMapShaders(G),E.framebuffer=ee,i.BoundingRectangle.clone(Q,E.viewport),f.camera=b,y.camera=B,B&&y.context.uniformState.updateCamera(B),H&&!((v=H.isDestroyed)!=null&&v.call(H))&&H.destroy(),m&&!((T=m.isDestroyed)!=null&&T.call(m))&&m.destroy()}}_renderDepthPrepass(t){const m=this.viewer.scene.frameState;m.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(y=>y.execute(this.viewer.scene.context,t))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:i.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:i.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const t={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...t,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:C}),this._createComputePass("B",{uniforms:{...t,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:V}),this._createComputePass("C",{uniforms:{...t,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:X}),this._createComputePass("D",{uniforms:{...t,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:a})]}_createComputePass(t,{uniforms:m,shaderSource:f}){return new N({commandType:"Compute",uniformMap:m,fragmentShaderSource:new i.ShaderSource({sources:[I,f]}),geometry:A.getFullscreenQuad(),outputTexture:this.textures[t],preExecute:y=>y.commandToExecute.outputTexture=this.textures[t]})}_createMainRenderPass(){const t=U([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new N({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new i.ShaderSource({sources:[I,k]}),geometry:this._createBoxGeometry(),modelMatrix:t,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,colorTexture:()=>{var t,m,f,y;return(y=(f=(m=(t=e(this.viewer.scene))==null?void 0:t.globeDepth)==null?void 0:m.colorFramebufferManager)==null?void 0:f._colorTextures)==null?void 0:y[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(t=>this.viewer.scene.primitives.add(t)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(t){const m=this.viewer.camera.getPickRay(t);return this.viewer.scene.globe.pick(m,this.viewer.scene)}_createOrthographicCamera(){const t=new i.Camera(this.viewer.scene);t.frustum=new i.OrthographicOffCenterFrustum;const[m,f]=this.config.lonLat,y=i.Cartesian3.fromDegrees(m,f,this.config.baseHeight),E=i.Transforms.eastNorthUpToFixedFrame(y),b=t.frustum;b.near=.01,b.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),b.left=-this.config.dimensions.x/2,b.right=this.config.dimensions.x/2,b.bottom=-this.config.dimensions.y/2,b.top=this.config.dimensions.y/2;const B=i.Matrix4.getColumn(E,2,new i.Cartesian3);i.Cartesian3.negate(B,B);const ee=i.Matrix4.getColumn(E,1,new i.Cartesian3),Q=i.Matrix4.getColumn(E,0,new i.Cartesian3),H=i.Cartesian3.multiplyByScalar(B,-b.far,new i.Cartesian3);return t.position=i.Cartesian3.add(y,H,new i.Cartesian3),t.direction=B,t.up=ee,t.right=Q,t}destroy(){var t,m;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(f=>{f&&this.viewer.scene.primitives.remove(f)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(f=>{var y;f&&!((y=f.isDestroyed)!=null&&y.call(f))&&f.destroy()}),this.textures={},this._heightMap&&!((m=(t=this._heightMap).isDestroyed)!=null&&m.call(t))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(t,m){const f=this.viewer.scene.context,y=d(this.viewer.scene),E=f.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>t},owner:this}),b=y.framebuffer;y.framebuffer=m,E.execute(f,y),y.framebuffer=b}_getDepthRenderCommands(){var f,y;const t=[],m=_(this.viewer.scene);for(let E=0;E<m.length;++E){const b=m[E],B=(f=b==null?void 0:b.commands)==null?void 0:f[2],ee=((y=b==null?void 0:b.indices)==null?void 0:y[2])??(B==null?void 0:B.length)??0;B&&ee>0&&t.push(...B.slice(0,ee))}return t}_processHeightMapShaders(){const t=[],m=i.Transforms.eastNorthUpToFixedFrame(i.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),f=i.Matrix4.inverse(m,new i.Matrix4),y=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(b=>{var G;if(!((G=b==null?void 0:b.shaderProgram)!=null&&G.fragmentShaderSource)||!b.uniformMap)return;const B=Object.prototype.hasOwnProperty.call(b.uniformMap,"u_inverseEnuMatrix"),ee=b.uniformMap.u_inverseEnuMatrix,Q=b.shaderProgram,H=new i.Matrix4;b.uniformMap.u_inverseEnuMatrix=()=>{const v=b.modelMatrix||i.Matrix4.IDENTITY;return i.Matrix4.multiply(f,v,H)},b.heightMap_ShaderProgram||(b.heightMap_ShaderProgram=this._getDerivedShaderProgram(y.context,b.shaderProgram,"Height_Map")),b.shaderProgram=b.heightMap_ShaderProgram,t.push({command:b,hadInverseUniform:B,originalInverseUniform:ee,originalShaderProgram:Q})}),t}_restoreHeightMapShaders(t){t.forEach(m=>{const{command:f,hadInverseUniform:y,originalInverseUniform:E,originalShaderProgram:b}=m;f!=null&&f.uniformMap&&(f.shaderProgram=b,y?f.uniformMap.u_inverseEnuMatrix=E:delete f.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(t,m,f){let y=t.shaderCache.getDerivedShaderProgram(m,f);return i.defined(y)||(y=this._createHeightMapShaderProgram(t,m,f)),y}_createHeightMapShaderProgram(t,m,f){const y=this._modifyFragmentShader(m.fragmentShaderSource);return t.shaderCache.createDerivedShaderProgram(m,f,{vertexShaderSource:m.vertexShaderSource,fragmentShaderSource:y,attributeLocations:m._attributeLocations})}_modifyFragmentShader(t){const m=t.sources.map(f=>i.ShaderSource.replaceMain(f,"czm_heightMap_main"));return m.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new i.ShaderSource({sources:m,defines:t.defines})}_createBoxGeometry(){return i.BoxGeometry.createGeometry(i.BoxGeometry.fromDimensions({vertexFormat:i.VertexFormat.POSITION_AND_ST,dimensions:new i.Cartesian3(1,1,1)}))}_getAttributeLocations(){return i.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:i.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new i.ShaderSource({sources:[`
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
            }`]})}};_t(h,"DEFAULTS",{width:1024,height:1024,dimensions:new i.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new i.Cartesian4(.995,.25,1e-4,.03),customParams:new i.Cartesian4(10,20,.2,10),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let te=h;const U=(F=[0,0,0],t=[0,0,0],m=[1,1,1])=>{const f=i.Matrix4.fromRotationTranslation(i.Matrix3.fromRotationX(i.Math.toRadians(t[0]))),y=i.Matrix4.fromRotationTranslation(i.Matrix3.fromRotationY(i.Math.toRadians(t[1]))),E=i.Matrix4.fromRotationTranslation(i.Matrix3.fromRotationZ(i.Math.toRadians(t[2])));F instanceof i.Cartesian3||(F=i.Cartesian3.fromDegrees(...F));const b=i.Transforms.eastNorthUpToFixedFrame(F);i.Matrix4.multiply(b,f,b),i.Matrix4.multiply(b,y,b),i.Matrix4.multiply(b,E,b);const B=i.Matrix4.fromScale(new i.Cartesian3(...m));return i.Matrix4.multiply(b,B,new i.Matrix4)},P=`
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
    `;function M(){return new i.PostProcessStage({fragmentShader:P})}return{FluidRenderer:te,createSkyEffect:M}}const Qi={key:0,class:"fluid-root"},ea={class:"fluid-panel"},ta={class:"panel-actions"},ra=["disabled"],ia={key:0,class:"selected-text"},aa={class:"param-list"},na={class:"param-row"},oa={class:"param-row"},sa={class:"param-row"},Ct=1024,Lt=1e4,la=1200,ca=60,ct=64,ua=160,da={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(i,{expose:e,emit:d}){const _=i,I=d,C=dt(),V=J(10),X=J(20),a=J(3),k=J(!1),N=J(!1),A=J(null),te=J(null);let U=null,P=null,M=null,h=null,F=null,t=null,m=0;const f=Me(()=>!Number.isFinite(A.value)||!Number.isFinite(te.value)?"":`经度 ${A.value.toFixed(6)} / 纬度 ${te.value.toFixed(6)}`);we([V,X,a],qe),we(()=>_.params,c=>{E(c||{})},{deep:!0,immediate:!0}),we([k,N,f],b,{immediate:!0}),br(()=>{Pe(!0)});function y(){var L,$;const c=(L=_.getViewer)==null?void 0:L.call(_),p=(($=_.getCesium)==null?void 0:$.call(_))||window.Cesium;if(!c||!p)return C.warning("Cesium 场景尚未就绪。"),null;if(!U){const q=Ji(p);U=q.FluidRenderer,P=q.createSkyEffect}return{viewer:c,Cesium:p}}function E(c){Number.isFinite(Number(c.threshold))&&(V.value=Number(c.threshold)),Number.isFinite(Number(c.blend))&&(X.value=Number(c.blend)),Number.isFinite(Number(c.lightStrength))&&(a.value=Number(c.lightStrength))}function b(){I("state-change",{isPicking:k.value,hasFluid:N.value,selectedText:f.value})}function B(){const c=y();if(!c)return;const{viewer:p,Cesium:L}=c;pe(),fe(p,L),k.value=!0,M=new L.ScreenSpaceEventHandler(p.scene.canvas),M.setInputAction($=>{ee(p,L,$.position)},L.ScreenSpaceEventType.LEFT_CLICK)}async function ee(c,p,L){var re,le;const $=Be(c,L);if(!$){C.warning("未选中可用地形位置。");return}const q=++m;pe();const se=p.Cartographic.fromCartesian($),me=p.Math.toDegrees(se.longitude),_e=p.Math.toDegrees(se.latitude),l=Math.max(0,Number(se.height)||0),s=100,x=la,z=Math.max(0,l-s),Y=new p.Cartesian3(Lt,Lt,x);Dt("正在请求模拟范围高度数据...");try{He();const be=Number(V.value)||0,ve=Number(X.value)||0,Oe=Number(a.value)||0,Ke=await Q(c,p,{lon:me,lat:_e,baseHeight:z,dimensions:Y});if(q!==m)return;Ke||C.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),h=new U(c,{lonLat:[me,_e],width:Ct,height:Ct,dimensions:Y,baseHeight:z,minHeight:0,maxHeight:x,heightMapSource:Ke,customParams:new p.Cartesian4(be,ve,Oe,10),fluidParams:new p.Cartesian4(.9+Oe/10*.099,Math.min(1,ve/50),be/5e4,.03)}),A.value=me,te.value=_e,N.value=!0,(le=(re=c.scene).requestRender)==null||le.call(re),C.success("水体流体已创建。")}catch(be){C.error("水体流体创建失败",be),C.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{kt()}}async function Q(c,p,L){const $=c==null?void 0:c.terrainProvider,q=G(L.dimensions);if(!$)return null;if(p.EllipsoidTerrainProvider&&$ instanceof p.EllipsoidTerrainProvider)return O(q);if(typeof p.sampleTerrain!="function"&&typeof p.sampleTerrainMostDetailed!="function")return null;try{return await H(c,p,L,q)}catch(se){if(q<=ct)throw se;return H(c,p,L,ct)}}async function H(c,p,L,$){const q=T(p,L,$),se=await g(p,c.terrainProvider,q);return K(se||q,{baseHeight:L.baseHeight,fluidDepth:L.dimensions.z,size:$})}function G(c){const p=Math.max(Number(c==null?void 0:c.x)||0,Number(c==null?void 0:c.y)||0),L=Math.ceil(p/ca)+1;return v(L,ct,ua)}function v(c,p,L){return Math.max(p,Math.min(L,Math.round(c)))}function T(c,{lon:p,lat:L,baseHeight:$,dimensions:q},se){const me=c.Cartesian3.fromDegrees(p,L,$),_e=c.Transforms.eastNorthUpToFixedFrame(me),l=[],s=Math.max(1,se-1);for(let x=0;x<se;x++){const Y=(.5-x/s)*q.y;for(let re=0;re<se;re++){const be=(re/s-.5)*q.x,ve=new c.Cartesian3(be,Y,0),Oe=c.Matrix4.multiplyByPoint(_e,ve,new c.Cartesian3);l.push(c.Cartographic.fromCartesian(Oe))}}return l}async function g(c,p,L){const $=oe(p);return Number.isInteger($)&&typeof c.sampleTerrain=="function"?c.sampleTerrain(p,$,L):typeof c.sampleTerrainMostDetailed=="function"?c.sampleTerrainMostDetailed(p,L):c.sampleTerrain(p,10,L)}function oe(c){const p=Number(c==null?void 0:c._bottomLevel);return Number.isFinite(p)?Math.max(0,p-1):null}function K(c,{baseHeight:p,fluidDepth:L,size:$}){var se;const q=new Float32Array($*$*4);for(let me=0;me<c.length;me++){const _e=Number((se=c[me])==null?void 0:se.height),l=Number.isFinite(_e)?de(_e-p,0,L):0,s=me*4;q[s]=l,q[s+1]=0,q[s+2]=0,q[s+3]=1}return{width:$,height:$,arrayBufferView:q}}function O(c){return{width:c,height:c,arrayBufferView:new Float32Array(c*c*4)}}function de(c,p,L){return Math.max(p,Math.min(L,c))}function Be(c,p){if(!p)return null;if(c.scene.pickPositionSupported&&typeof c.scene.pickPosition=="function"){const $=c.scene.pickPosition(p);if($)return $}const L=c.camera.getPickRay(p);return L?c.scene.globe.pick(L,c.scene):null}function qe(){if(!(h!=null&&h.config))return;const c=Number(V.value)||0,p=Number(X.value)||0,L=Number(a.value)||0;h.config.customParams&&(h.config.customParams.x=c,h.config.customParams.y=p,h.config.customParams.z=L),h.config.fluidParams&&(h.config.fluidParams.x=.9+L/10*.099,h.config.fluidParams.y=Math.min(1,p/50),h.config.fluidParams.z=c/5e4)}function fe(c,p){var L,$;if(!t){const q=c.scene;t={shadows:c.shadows,resolutionScale:c.resolutionScale,msaaSamples:q.msaaSamples,depthTestAgainstTerrain:q.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:q.logarithmicDepthBuffer,highDynamicRange:q.highDynamicRange,fogEnabled:(L=q.fog)==null?void 0:L.enabled,showGroundAtmosphere:q.globe.showGroundAtmosphere,skyAtmosphereShow:($=q.skyAtmosphere)==null?void 0:$.show,enableLighting:q.globe.enableLighting}}c.shadows=!0,c.resolutionScale=1,c.scene.msaaSamples=4,c.scene.globe.depthTestAgainstTerrain=!0,c.scene.logarithmicDepthBuffer=!0,c.scene.highDynamicRange=!0,c.scene.fog&&(c.scene.fog.enabled=!0),c.scene.globe.showGroundAtmosphere=!1,c.scene.skyAtmosphere&&(c.scene.skyAtmosphere.show=!1),c.scene.globe.enableLighting=!0,!F&&P&&(F=P(p),c.scene.postProcessStages.add(F))}function ne(c){if(!c||!t)return;const p=c.scene;c.shadows=t.shadows,c.resolutionScale=t.resolutionScale,t.msaaSamples!==void 0&&(p.msaaSamples=t.msaaSamples),p.globe.depthTestAgainstTerrain=t.depthTestAgainstTerrain,p.logarithmicDepthBuffer=t.logarithmicDepthBuffer,p.highDynamicRange=t.highDynamicRange,p.fog&&t.fogEnabled!==void 0&&(p.fog.enabled=t.fogEnabled),p.globe.showGroundAtmosphere=t.showGroundAtmosphere,p.skyAtmosphere&&t.skyAtmosphereShow!==void 0&&(p.skyAtmosphere.show=t.skyAtmosphereShow),p.globe.enableLighting=t.enableLighting,t=null}function he(){Pe(!1),C.success("水体流体已清除。")}function pe(){M&&(M.destroy(),M=null),k.value=!1}function He(){if(h){try{h.destroy()}catch{}h=null,N.value=!1}}function Pe(c){var L,$,q;const p=(L=_.getViewer)==null?void 0:L.call(_);if(m+=1,pe(),He(),A.value=null,te.value=null,p&&F){try{p.scene.postProcessStages.remove(F)}catch{}F=null}c&&p&&ne(p),(q=($=p==null?void 0:p.scene)==null?void 0:$.requestRender)==null||q.call($)}function Ve(){Pe(!0),I("close")}return e({startPickHeightMap:B,clearFluid:he}),(c,p)=>i.headless?ae("",!0):(D(),W("div",Qi,[u("div",ea,[u("div",{class:"panel-head"},[p[6]||(p[6]=u("span",{class:"panel-title"},"水体流体",-1)),u("button",{class:"panel-close",title:"关闭",onClick:Ve}," × ")]),u("div",ta,[u("button",{class:xe(["action-btn primary",{active:k.value}]),onClick:B},ie(k.value?"等待选点":"捕捉高度图"),3),u("button",{class:"action-btn",disabled:!N.value&&!k.value,onClick:he}," 清除 ",8,ra)]),f.value?(D(),W("div",ia,ie(f.value),1)):ae("",!0),u("div",aa,[u("label",na,[p[7]||(p[7]=u("span",null,"阈值",-1)),ge(u("input",{"onUpdate:modelValue":p[0]||(p[0]=L=>V.value=L),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Ne,V.value,void 0,{number:!0}]]),ge(u("input",{"onUpdate:modelValue":p[1]||(p[1]=L=>V.value=L),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Ne,V.value,void 0,{number:!0}]])]),u("label",oa,[p[8]||(p[8]=u("span",null,"混合",-1)),ge(u("input",{"onUpdate:modelValue":p[2]||(p[2]=L=>X.value=L),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Ne,X.value,void 0,{number:!0}]]),ge(u("input",{"onUpdate:modelValue":p[3]||(p[3]=L=>X.value=L),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Ne,X.value,void 0,{number:!0}]])]),u("label",sa,[p[9]||(p[9]=u("span",null,"光强",-1)),ge(u("input",{"onUpdate:modelValue":p[4]||(p[4]=L=>a.value=L),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Ne,a.value,void 0,{number:!0}]]),ge(u("input",{"onUpdate:modelValue":p[5]||(p[5]=L=>a.value=L),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Ne,a.value,void 0,{number:!0}]])])])])]))}},ha=et(da,[["__scopeId","data-v-7cc9bc94"]]),ue={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},ma=new Float32Array([-1,-1,1,-1,1,1,-1,1]),fa=new Float32Array([0,0,1,0,1,1,0,1]),pa=new Uint16Array([0,1,2,0,2,3]);function Ie(i,e,d){return Math.max(e,Math.min(d,i))}function Z(i,e){const d=Number(i);return Number.isFinite(d)?d:e}function ga(i,e){const d=e.getParameter(e.MAX_TEXTURE_SIZE),_=Math.min(2048,d),I=Math.max(1,Math.floor(i)),C=Math.sqrt(I),V=Math.log2(C),X=Number.isFinite(V)?Math.round(V):4;let a=Math.pow(2,X);return a=Ie(a,16,_),a}function va(i){const e=i*i,d=new Float32Array(e*4);for(let _=0;_<e;_+=1){const I=_*4;d[I]=Math.random(),d[I+1]=Math.random(),d[I+2]=Math.random(),d[I+3]=Math.random()}return d}function ya(i){return new Float32Array(i*i*4)}function _a(i,e,d,_,I){const C=e.createTexture();if(!C)throw new Error("Failed to create wind atlas texture.");e.bindTexture(e.TEXTURE_2D,C),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,d,_,0,e.RGBA,e.FLOAT,I),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null);let V=!1;return{_context:i,_texture:C,_target:e.TEXTURE_2D,_width:d,_height:_,destroy(){V||(e.deleteTexture(C),V=!0)}}}class xa{constructor(e,d={}){if(!e||!e.scene||!e.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=e,this._scene=e.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=d.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const _={...ue,...d};this.speedFactor=Z(_.speedFactor,ue.speedFactor),this.cullSpeedMin=Z(_.cullSpeedMin,ue.cullSpeedMin),this.cullSpeedMax=Z(_.cullSpeedMax,ue.cullSpeedMax),this.windSpeedMin=Z(_.windSpeedMin,ue.windSpeedMin),this.windSpeedMax=Z(_.windSpeedMax,ue.windSpeedMax),this.arrowLength=Z(_.arrowLength,ue.arrowLength),this.trailLength=Z(_.trailLength,ue.trailLength),this.decaySpeed=Z(_.decaySpeed,ue.decaySpeed),this.alphaFactor=Z(_.alphaFactor,ue.alphaFactor),this.maxWindSpeed=Z(_.maxWindSpeed,ue.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=Z(d.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(e){if(!e||typeof e!="object")throw new Error("Wind2D.loadData requires a valid data object.");const d=Z(e.longitude,NaN),_=Z(e.latitude,NaN),I=Array.isArray(e.altitude)?e.altitude:[],C=Array.isArray(e.sizeMesh)?e.sizeMesh:[],V=Array.isArray(e.count)?e.count:[],X=Array.isArray(e.hspeed)?e.hspeed:[],a=Array.isArray(e.hdir)?e.hdir:[],k=Array.isArray(e.vspeed)?e.vspeed:[];if(!Number.isFinite(d)||!Number.isFinite(_))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const N=I.length;if(N<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(C.length!==N||V.length!==N)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const A=V.map(b=>Math.max(1,Math.floor(Z(b,1)))),te=C.map(b=>Math.max(1,Z(b,1))),U=I.map(b=>Z(b,0)),P=A.reduce((b,B)=>b+B*B,0);if(X.length<P||a.length<P||k.length<P)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=N,this.visibleLayerMin=0,this.visibleLayerMax=N-1,this._altitudes=U.slice(),this._maxNx=Math.max(...A),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*N;const M=new Float32Array(this._atlasWidth*this._atlasHeight*4);let h=0;for(let b=0;b<N;b+=1){const B=A[b],ee=B;for(let Q=0;Q<ee;Q+=1)for(let H=0;H<B;H+=1){const G=h+Q*B+H,v=((b*this._maxNy+Q)*this._atlasWidth+H)*4,T=Number(X[G]),g=Number(a[G]),oe=Number(k[G]);if(!(Number.isFinite(T)&&Number.isFinite(g))){M[v]=0,M[v+1]=0,M[v+2]=0,M[v+3]=0;continue}const O=g*Math.PI/180;M[v]=T*Math.sin(O),M[v+1]=T*Math.cos(O),M[v+2]=Number.isFinite(oe)?oe:0,M[v+3]=1}h+=B*ee}this._createOrReplaceWindAtlasTexture(M);const F=Math.max(...te),t=this._maxNx*F,m=t/2/111320,f=_*Math.PI/180,y=Math.max(1e-6,Math.abs(Math.cos(f))),E=t/2/(111320*y);this._bounds={minLon:d-E,maxLon:d+E,minLat:_-m,maxLat:_+m,minHeight:Math.min(...U),maxHeight:Math.max(...U)},this._dataPointCount=P,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(e){const d=Math.max(1,Math.floor(Z(e,1))),_=ga(d,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&_===this._particleTextureSize||(this._particleTextureSize=_,this._particleCount=_*_,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(e){const d=Ie(Z(e,this.particleDensity),.05,10);if(this.particleDensity=d,this._dataPointCount<=0)return;const _=Math.max(1,Math.floor(this._dataPointCount*d));this.setParticleCount(_)}setBounds(e,d,_,I){const C=Z(e,NaN),V=Z(d,NaN),X=Z(_,NaN),a=Z(I,NaN);if(!Number.isFinite(C)||!Number.isFinite(V)||!Number.isFinite(X)||!Number.isFinite(a))return;const k=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};k.minLon=Math.min(C,V),k.maxLon=Math.max(C,V),k.minLat=Math.min(X,a),k.maxLat=Math.max(X,a),this._bounds=k,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const e=(this._bounds.minLon+this._bounds.maxLon)*.5,d=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(e,d,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(e){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const I=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[I],this._updateCommand.execute(this._context,e?e.passState:void 0),this._particleState=I,this._drawCommand.modelMatrix=this._modelMatrix,e&&Array.isArray(e.commandList)&&e.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(e){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=_a(this._context,this._gl,this._atlasWidth,this._atlasHeight,e)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const e=this._Cesium,d=this._particleTextureSize,_=va(d),I=ya(d);for(let C=0;C<2;C+=1){this._particlePositionTextures[C]=new e.Texture({context:this._context,width:d,height:d,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:d,height:d,arrayBufferView:_},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[C]=new e.Texture({context:this._context,width:d,height:d,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:d,height:d,arrayBufferView:I},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._framebuffers[C]=new e.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[C],this._velocityTextures[C]],destroyAttachments:!1});const V=this._framebuffers[C]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,V),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._particlePositionTextures[e]&&(this._particlePositionTextures[e].destroy(),this._particlePositionTextures[e]=null),this._velocityTextures[e]&&(this._velocityTextures[e].destroy(),this._velocityTextures[e]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const e=this._Cesium,d=e.Buffer.createVertexBuffer({context:this._context,typedArray:ma,usage:e.BufferUsage.STATIC_DRAW}),_=e.Buffer.createVertexBuffer({context:this._context,typedArray:fa,usage:e.BufferUsage.STATIC_DRAW}),I=e.Buffer.createIndexBuffer({context:this._context,typedArray:pa,usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:d,componentsPerAttribute:2},{index:1,vertexBuffer:_,componentsPerAttribute:2}],indexBuffer:I})}_buildParticleVertexArray(){const e=this._Cesium,d=new Float32Array(this._drawVertexCount);for(let _=0;_<d.length;_+=1)d[_]=_;this._particleVertexBuffer=e.Buffer.createVertexBuffer({context:this._context,typedArray:d,usage:e.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const e=this._Cesium,d=`#version 300 es
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
}`;this._updateProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:d,fragmentShaderSource:_,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const e=this._Cesium,d=`#version 300 es
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
}`;this._drawProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:d,fragmentShaderSource:_,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const e=this._Cesium,d=e.RenderState.fromCache({viewport:new e.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:d,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const e=this._Cesium,d=e.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:e.BlendingState.ALPHA_BLEND});this._drawCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:d,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:e.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const e=Ie(Math.floor(Z(this.visibleLayerMin,0)),0,this._layerCount-1),d=Ie(Math.floor(Z(this.visibleLayerMax,this._layerCount-1)),e,this._layerCount-1);return{min:e,max:d}}_normalizeSpeedRange(e,d){const _=Math.max(1e-4,Z(this.maxWindSpeed,ue.maxWindSpeed)),I=Ie(Z(e,0)/_,0,1),C=Ie(Z(d,_)/_,0,1);return{min:Math.min(I,C),max:Math.max(I,C)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>Z(this.speedFactor,ue.speedFactor),maxWindSpeed:()=>Math.max(1e-4,Z(this.maxWindSpeed,ue.maxWindSpeed)),decaySpeed:()=>Ie(Z(this.decaySpeed,ue.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>Z(this.arrowLength,ue.arrowLength),trailLength:()=>Z(this.trailLength,ue.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Ie(Z(this.alphaFactor,ue.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Pt(i){if(!i)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:e,DeveloperError:d,Ellipsoid:_,Resource:I,HeightmapTerrainData:C,Rectangle:V,TileAvailability:X,CustomHeightmapTerrainProvider:a}=i;function k(U,P,M,h,F,t){const m=U.tileXYToRectangle(M,h,F);return e(V.intersection(m,P,t))}function N(U){const P=[[[0,0,1,0]]],M=new X(U.tilingScheme,19);for(let h=0;h<P.length;h++){const F=P[h];for(let t=0;t<F.length;t++){const m=F[t];M.addAvailableTileRange(h,m[0],m[1],m[2],m[3])}}return M}function A(U,P,M,h,F){const t=new C({buffer:U._transformBuffer(P),width:U._width,height:U._height,childTileMask:U._getChildTileMask(h,F,M),structure:U._terrainDataStructure});return t._skirtHeight=6e3,U.availability.addAvailableTileRange(M,h,F,h,F),t}class te extends a{constructor(P={}){if(super({...P,ellipsoid:_.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!e(P.url))throw new d("options.url is required.");this._dataType=P.dataType??"int16",this._url=P.url,this._subdomains=P.subdomains,this._token=P.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=N(this)}get availability(){return this._availability}requestTileGeometry(P,M,h,F){if(h>=this._bottomLevel)return Promise.reject(new Error(`Level ${h} is outside supported range.`));if(h<this._topLevel)return Promise.resolve(new C({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(P,M,h),structure:this._terrainDataStructure}));let t=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const f=this._subdomains[(P+M)%this._subdomains.length];t=t.replace("{s}",f)}t=t.replace("{token}",this._token).replace("{x}",P).replace("{y}",M).replace("{z}",h+1);const m=I.fetchArrayBuffer({url:t,request:F});if(m)return m.then(f=>f.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):kr.inflate(f)).then(f=>A(this,f,h,P,M))}getTileDataAvailable(P,M,h){return h<this._bottomLevel}_transformBuffer(P){let M=2;this._dataType==="float"&&(M=4);const h=P;if(h.length!==22500*M)return null;const F=new ArrayBuffer(M),t=new DataView(F),m=this._width,f=this._height,y=new Uint8Array(m*f*4);for(let E=0;E<f;E++)for(let b=0;b<m;b++){const B=Math.floor(149*E/(f-1)),ee=Math.floor(149*b/(m-1)),Q=M*(150*B+ee);let H;M===4?(t.setInt8(0,h[Q]),t.setInt8(1,h[Q+1]),t.setInt8(2,h[Q+2]),t.setInt8(3,h[Q+3]),H=t.getFloat32(0,!0)):H=h[Q]+256*h[Q+1],(H>1e4||H<-2e3)&&(H=0);const G=(H+1e3)/.001,v=4*(E*m+b);y[v]=G/65536,y[v+1]=(G-256*y[v]*256)/256,y[v+2]=G-256*y[v]*256-256*y[v+1],y[v+3]=255}return y}_getVHeightBuffer(){let P=this._vHeightBuffer;if(!e(P)){P=new Uint8ClampedArray(this._width*this._height*4);for(let M=0;M<this._width*this._height*4;)P[M++]=15,P[M++]=66,P[M++]=64,P[M++]=255;this._vHeightBuffer=P}return P}_getChildTileMask(P,M,h){const F=new V,t=this._tilingScheme,m=this._rectangles,f=t.tileXYToRectangle(P,M,h);let y=0;for(let E=0;E<m.length&&y!==15;E++){const b=m[E];if(b.maxLevel<=h)continue;const B=b.rectangle,ee=V.intersection(B,f,F);e(ee)&&(k(t,B,2*P,2*M,h+1,F)&&(y|=4),k(t,B,2*P+1,2*M,h+1,F)&&(y|=8),k(t,B,2*P,2*M+1,h+1,F)&&(y|=1),k(t,B,2*P+1,2*M+1,h+1,F)&&(y|=2))}return y}}return te}const ba={class:"map-controls-group"},wa={class:"mouse-position-content"},Ye="https://t{s}.tianditu.gov.cn/",ut="https://cdn.jsdelivr.net/npm/cesium@1.110/Build/Cesium/",je="custom-xyz",Ft="cesium_custom_xyz_basemap_url",Sa="Asia/Shanghai",Ta="UTC+8",Et="cesium_tool_panel_open",Ma="cesium_tdt_label_layer_visible",At="cesium_tdt_boundary_layer_visible",Rt="cesium_tdt_text_label_layer_visible",Ca={__name:"CesiumContainer",setup(i){let e=null;const d="4267820f43926eaf808d61dc07269beb",_="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzRhZjM0ZC02MmYxLTRhNzgtYTkxNi00YWM2MmMxNmNhMWIiLCJpZCI6MTkzNjkxLCJpYXQiOjE3MDY5NDA2ODF9.mKu1zCK-GOjwDem9-J_Ksv0xEGNsN1zGuShYzOuXJsg",I=["0","1","2","3","4","5","6","7"],C=`${ut}Cesium.js`,V=`${ut}Widgets/widgets.css`,X=new Intl.DateTimeFormat("zh-CN",{timeZone:Sa,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});let a=null,k=null,N=null,A=null,te=null,U=null,P=0,M=[];const h=J(null),F=J("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米"),t=J(!1),m=J(null),f=J("tianditu"),y=J("tianditu"),E=J(or(Ft,"")),b=J(Je(Et,!0)),B=Je(Ma,!0),ee=J(Je(At,B)),Q=J(Je(Rt,B)),H=[],G=J([]),v=new Map,T=new Map,g=new Map,oe=new Map,K=dt(),O=[{value:"tianditu",label:"天地图",description:"天地图影像与注记服务"},{value:"google",label:"Google",description:"Google 卫星影像代理服务"}],de=Me(()=>[...O,{value:je,label:"自定义 XYZ",description:E.value?E.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!E.value},...G.value]),Be=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}],qe=Me(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:ee.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:Q.value}]),fe=J({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),ne=J({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1}),he=J({threshold:10,blend:20,lightStrength:3}),pe=J({isPicking:!1,hasFluid:!1,selectedText:""}),He=Me(()=>[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气",status:fe.value.atmosphere||fe.value.fog?"启用":"关闭",statusTone:fe.value.atmosphere||fe.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:fe.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:fe.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:fe.value.tiltShift},{id:"atmosphere",label:"大气",type:"toggle",value:fe.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:h.value?"已加载":"未加载",statusTone:h.value?"success":"neutral",actions:[{id:"load",label:h.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!h.value}],controls:[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:ne.value.speedFactor,displayValue:ne.value.speedFactor.toFixed(1),disabled:!h.value},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:ne.value.arrowLength,displayValue:`${Math.round(ne.value.arrowLength/1e3)} km`,disabled:!h.value},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:ne.value.trailLength,displayValue:`${Math.round(ne.value.trailLength/1e3)} km`,disabled:!h.value},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:ne.value.alphaFactor,displayValue:ne.value.alphaFactor.toFixed(2),disabled:!h.value}]},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:pe.value.isPicking?"等待选点":pe.value.hasFluid?"已创建":"未创建",statusTone:pe.value.isPicking?"warning":pe.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:pe.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:pe.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!pe.value.hasFluid&&!pe.value.isPicking}],controls:[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:he.value.threshold,displayValue:Number(he.value.threshold).toFixed(2)},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:he.value.blend,displayValue:Number(he.value.blend).toFixed(2)},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:he.value.lightStrength,displayValue:Number(he.value.lightStrength).toFixed(2)}]}]);zt(()=>{p()}),we(f,r=>{!a||!e||gt(r)}),we(E,r=>{sr(Ft,r)}),we(y,async r=>{!a||!e||await vt(r)}),we(b,r=>{rt(Et,r)}),we(ee,r=>{rt(At,r),Xe()}),we(Q,r=>{rt(Rt,r),Xe()});function Pe(){var r,n;if(h.value){try{(n=(r=a==null?void 0:a.scene)==null?void 0:r.primitives)==null||n.remove(h.value)}catch{}h.value.destroy(),h.value=null}}function Ve(){if(!(!N||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(N,!0)}catch{}N=null}}function c(){if(!(!A||!(a!=null&&a.imageryLayers))){try{a.imageryLayers.remove(A,!0)}catch{}A=null}}It(()=>{if(t.value=!1,k&&(k.destroy(),k=null),Pe(),Ve(),c(),te&&(clearInterval(te),te=null),U&&(U.remove(),U=null),pt(),a){try{a.destroy()}catch{}a=null}});async function p(){Dt("正在初始化 3D 场景...");try{if(await q(),!e||!document.getElementById("cesiumContainer"))return;re(),le();const r=be(),n=await Zt();t.value=!0,r&&n?K.success("天地图基础影像与地形加载成功。"):K.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0})}catch(r){K.error("Cesium 运行时加载失败",r),K.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{kt()}}function L(){return a}function $(){return e||window.Cesium}async function q(){if(window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=ut),await cr(V,"cesium-widgets-style"),await lr(C,"cesium-runtime-script"),e=window.Cesium,!e)throw new Error("Cesium global 未找到");se()}function se(){e!=null&&e.Ion&&(e.Ion.defaultAccessToken=_)}function me(){var r,n,o,w,R,S,j;!a||!(e!=null&&e.JulianDate)||((r=a.animation)!=null&&r.viewModel&&(a.animation.viewModel.dateFormatter=x,a.animation.viewModel.timeFormatter=z),a.timeline&&(a.timeline.makeLabel=Y,"_makeLabel"in a.timeline&&(a.timeline._makeLabel=Y),(o=(n=a.timeline).updateFromClock)==null||o.call(n),(R=(w=a.timeline).zoomTo)==null||R.call(w,a.clock.startTime,a.clock.stopTime)),(j=(S=a.scene).requestRender)==null||j.call(S))}function _e(){var o;const r=a==null?void 0:a.scene,n=r==null?void 0:r.globe;!r||!n||(n.enableLighting=!0,n.showGroundAtmosphere=!0,r.sun&&(r.sun.show=!0),r.moon&&(r.moon.show=!0),r.skyAtmosphere&&(r.skyAtmosphere.show=!0),"sunBloom"in r&&(r.sunBloom=!0),(o=r.requestRender)==null||o.call(r))}function l(...r){var S;const n=r.find(s)||((S=a==null?void 0:a.clock)==null?void 0:S.currentTime);if(!n)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const o=e.JulianDate.toDate(n),w=X.formatToParts(o),R=Object.fromEntries(w.filter(({type:j})=>j!=="literal").map(({type:j,value:ye})=>[j,ye]));return{year:R.year||"0000",month:R.month||"01",day:R.day||"01",hour:R.hour||"00",minute:R.minute||"00",second:R.second||"00"}}function s(r){return r&&typeof r.dayNumber=="number"&&typeof r.secondsOfDay=="number"}function x(...r){const{year:n,month:o,day:w}=l(...r);return`${n}-${o}-${w}`}function z(...r){const{hour:n,minute:o,second:w}=l(...r);return`${n}:${o}:${w} ${Ta}`}function Y(...r){const{month:n,day:o,hour:w,minute:R}=l(...r);return`${n}-${o} ${w}:${R}`}function re(){var R;const r=typeof e.Map=="function"?e.Map:e.Viewer,n=Vt(),o=Gt();if(a=new r("cesiumContainer",{baseLayerPicker:!0,geocoder:!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:n,selectedImageryProviderViewModel:v.get(f.value)||n[0],terrainProviderViewModels:o,selectedTerrainProviderViewModel:g.get(y.value)||o[0],shouldAnimate:!0}),me(),qt(),it(0),(R=a._cesiumWidget)!=null&&R._creditContainer&&(a._cesiumWidget._creditContainer.style.display="none"),a.scene.globe.terrainExaggeration=1,a.scene.globe.terrainExaggerationRelativeHeight=0,_e(),Re(y.value),(()=>{var j;(j=a._cesiumWidget)!=null&&j._creditContainer&&(a._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",a._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(ye=>{ye.style.cssText="display: none !important; visibility: hidden !important;",ye.innerHTML=""}),a.scene&&a.scene.frameState&&a.scene.frameState.creditDisplay&&(a.scene.frameState.creditDisplay.hasCredits=()=>!1,a.scene.frameState.creditDisplay.destroy=()=>{})})(),te=setInterval(()=>{const S=document.querySelector(".cesium-credit-container");S&&S.innerHTML.length>0&&(S.innerHTML="",S.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override")){const S=document.createElement("style");S.id="cesium-credit-override",S.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(S),U=S}}function le(){k=new e.ScreenSpaceEventHandler(a.scene.canvas),k.setInputAction(r=>{const n=a.camera.getPickRay(r.endPosition);if(!n)return;const o=a.scene.globe.pick(n,a.scene);if(o){const w=e.Cartographic.fromCartesian(o),R=e.Math.toDegrees(w.longitude).toFixed(6),S=e.Math.toDegrees(w.latitude).toFixed(6),j=w.height.toFixed(2);F.value=`经度: ${R}, 纬度: ${S}, 海拔: ${j}米`}},e.ScreenSpaceEventType.MOUSE_MOVE),k.setInputAction(r=>{const n=r.endPosition,o=r.startPosition;if(!e.defined(a.terrainProvider))return;const w=a.scene.globe.ellipsoid;if(!a.camera.pickEllipsoid(o,w)){const S=a.camera;S.rotate(e.Cartesian3.UNIT_X,-.002*(n.y-o.y)),S.rotate(e.Cartesian3.UNIT_Y,-.002*(n.x-o.x))}},e.ScreenSpaceEventType.RIGHT_DRAG),k.setInputAction(()=>{},e.ScreenSpaceEventType.RIGHT_DOWN),k.setInputAction(()=>{},e.ScreenSpaceEventType.RIGHT_UP)}function be(){return tt(),!0}function ve(){if(a!=null&&a.imageryLayers)for(;H.length;){const r=H.pop();try{a.imageryLayers.remove(r,!0)}catch{}}}function Oe(){return[new e.UrlTemplateImageryProvider({url:`${Ye}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${d}`,subdomains:I,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:18})]}function Ke(){return new e.UrlTemplateImageryProvider({url:`${Ye}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${d}`,subdomains:I,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:10})}function Ot(){return new e.UrlTemplateImageryProvider({url:`${Ye}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${d}`,subdomains:I,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:18})}function ht(){return[new e.UrlTemplateImageryProvider({url:`${vr}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:20})]}function Nt(){const r=mt(E.value);if(!r.valid)throw new Error(r.message);return[new e.UrlTemplateImageryProvider({url:r.url,subdomains:r.subdomains,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]}function mt(r){const n=String(r||"").trim();if(!n)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let o=n.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const w=o.match(/\{([a-z0-9])-([a-z0-9])\}/i);let R=[];return w?(R=Bt(w[1],w[2]),o=o.replace(w[0],"{s}")):/\{s\}/i.test(o)&&(R=["a","b","c"]),!/\{z\}/.test(o)||!/\{x\}/.test(o)||!/\{y\}/.test(o)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:o,subdomains:R}:Ht(o)?{valid:!0,message:"",url:o,subdomains:R}:{valid:!1,message:"URL 格式不合法",url:o,subdomains:R}}function Bt(r,n){const o=String(r||"").charCodeAt(0),w=String(n||"").charCodeAt(0);if(!Number.isFinite(o)||!Number.isFinite(w))return[];const R=o<=w?1:-1,S=[];for(let j=o;R>0?j<=w:j>=w;j+=R)S.push(String.fromCharCode(j));return S}function Ht(r){if(/^(https?:)?\/\//i.test(r)||r.startsWith("/"))return!0;try{const n=typeof window<"u"?window.location.origin:"http://localhost",o=new URL(r,n);return o.protocol==="http:"||o.protocol==="https:"}catch{return!1}}function Vt(){v.clear(),T.clear();const r=O.map(o=>{const w=new e.ProviderViewModel({name:o.label,tooltip:o.description||o.label,category:"项目底图",iconUrl:ft(o.value==="google"?"#5ea1ff":"#37d67a",o.value==="google"?"G":"TD"),creationFunction:()=>o.value==="google"?ht():Oe()});return v.set(o.value,w),T.set(w,o.value),w}),n=Ut();return G.value=n.map((o,w)=>{const R=String((o==null?void 0:o.name)||`官方底图 ${w+1}`).trim(),S=Wt(R,w);return v.set(S,o),T.set(o,S),{value:S,label:`官方 · ${R}`,description:String((o==null?void 0:o.tooltip)||R),source:"official"}}),[...r,...n]}function Ut(){if(typeof(e==null?void 0:e.createDefaultImageryProviderViewModels)!="function")return[];try{return e.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function Wt(r,n){const o=r.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${n}_${o||"basemap"}`}function Gt(){return g.clear(),oe.clear(),Be.map(n=>{const o=new e.ProviderViewModel({name:n.label,tooltip:n.description||n.label,category:"项目地形",iconUrl:ft(n.value==="ellipsoid"?"#a3a3a3":"#d0a449",n.value==="cesiumWorld"?"CW":n.value==="ellipsoid"?"EL":"TE"),creationFunction:()=>$t(n.value)});return g.set(n.value,o),oe.set(o,n.value),o})}function ft(r,n){const o=String(n||"").replace(/[<>&"']/g,"").slice(0,2),w=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${r}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${o}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(w)}`}function $t(r){if(r==="ellipsoid")return new e.EllipsoidTerrainProvider;if(r==="cesiumWorld")return yt().catch(o=>(K.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),K.error("Cesium 世界地形初始化失败",o),Kt(r,"ellipsoid"),new e.EllipsoidTerrainProvider));const n=Pt(e);try{return new n({url:`${Ye}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:I,token:d})}catch(o){return K.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),K.error("官方地形初始化失败",o),new e.EllipsoidTerrainProvider}}function qt(){var j,ye,De,ke;pt();const r=(j=a==null?void 0:a.baseLayerPicker)==null?void 0:j.viewModel;if(!r||!((ye=e==null?void 0:e.knockout)!=null&&ye.getObservable))return;const n=e.knockout.getObservable(r,"selectedImagery"),o=e.knockout.getObservable(r,"selectedTerrain"),w=[],R=(De=n==null?void 0:n.subscribe)==null?void 0:De.call(n,Fe=>{const ce=T.get(Fe);ce&&(f.value!==ce&&(f.value=ce),tt())}),S=(ke=o==null?void 0:o.subscribe)==null?void 0:ke.call(o,Fe=>{const ce=oe.get(Fe);ce&&(y.value!==ce&&(y.value=ce),Re(ce))});R&&w.push(R),S&&w.push(S),M=w}function pt(){M.forEach(r=>{var n;return(n=r==null?void 0:r.dispose)==null?void 0:n.call(r)}),M=[]}function tt(){var r,n;Xe(),(n=(r=a==null?void 0:a.scene)==null?void 0:r.requestRender)==null||n.call(r)}function Xe(){var r,n;!a||!e||(ee.value?Xt():Ve(),Q.value?Yt():c(),(n=(r=a.scene).requestRender)==null||n.call(r))}function Xt(){var r,n,o,w;if(!(a!=null&&a.imageryLayers)||N)return N&&((n=(r=a.imageryLayers).raiseToTop)==null||n.call(r,N)),N;try{return N=a.imageryLayers.addImageryProvider(Ke()),(w=(o=a.imageryLayers).raiseToTop)==null||w.call(o,N),N}catch(R){return K.error("天地图国界线图层加载失败",R),null}}function Yt(){var r,n,o,w;if(!(a!=null&&a.imageryLayers)||A)return A&&((n=(r=a.imageryLayers).raiseToTop)==null||n.call(r,A)),A;try{return A=a.imageryLayers.addImageryProvider(Ot()),(w=(o=a.imageryLayers).raiseToTop)==null||w.call(o,A),A}catch(R){return K.error("天地图文字标注图层加载失败",R),null}}function gt(r){var w,R,S;if(!a||!e)return!1;if(r===je)return jt();const n=(w=a.baseLayerPicker)==null?void 0:w.viewModel,o=v.get(r);if(n&&o)return ve(),n.selectedImagery!==o&&(n.selectedImagery=o),tt(),!0;try{return ve(),(r==="google"?ht():Oe()).forEach(ye=>{H.push(a.imageryLayers.addImageryProvider(ye))}),Xe(),(S=(R=a.scene).requestRender)==null||S.call(R),!0}catch(j){return K.error("地图源切换失败",j),!1}}function jt(){var r,n;try{const o=Nt();return ve(),o.forEach(w=>{H.push(a.imageryLayers.addImageryProvider(w))}),Xe(),(n=(r=a.scene).requestRender)==null||n.call(r),!0}catch(o){return K.warning(o instanceof Error?o.message:"自定义 XYZ 图源加载失败",{closable:!0}),K.error("自定义 XYZ 图源加载失败",o),!1}}function Zt(){return vt(y.value)}async function vt(r){var S,j,ye,De,ke,Fe,ce,Ce,Ue;if(!a||!e)return!1;const n=(S=a.baseLayerPicker)==null?void 0:S.viewModel,o=g.get(r);if(n&&o)return n.selectedTerrain!==o&&(n.selectedTerrain=o),Re(r),(ye=(j=a.scene).requestRender)==null||ye.call(j),!0;const w=++P;if(r==="ellipsoid")return a.terrainProvider=new e.EllipsoidTerrainProvider,Re(r),(ke=(De=a.scene).requestRender)==null||ke.call(De),!0;if(r==="cesiumWorld")try{const ze=await yt();return w!==P?!1:(a.terrainProvider=ze,Re(r),(ce=(Fe=a.scene).requestRender)==null||ce.call(Fe),!0)}catch(ze){return w!==P||(a.terrainProvider=new e.EllipsoidTerrainProvider,Re("ellipsoid"),K.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),K.error("Cesium 世界地形初始化失败",ze)),!1}const R=Pt(e);try{return a.terrainProvider=new R({url:`${Ye}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:I,token:d}),Re(r),(Ue=(Ce=a.scene).requestRender)==null||Ue.call(Ce),!0}catch(ze){return a.terrainProvider=new e.EllipsoidTerrainProvider,Re("ellipsoid"),K.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),K.error("官方地形初始化失败",ze),!1}}function Re(r){var n;(n=a==null?void 0:a.scene)!=null&&n.globe&&(a.scene.globe.depthTestAgainstTerrain=r!=="ellipsoid")}function Kt(r,n){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{y.value===r&&(y.value=n)},0)}async function yt(){var n,o;se();const r={requestWaterMask:!1,requestVertexNormals:!0};if(typeof e.createWorldTerrainAsync=="function")return e.createWorldTerrainAsync(r);if(typeof e.createWorldTerrain=="function")return e.createWorldTerrain(r);if(typeof((n=e.CesiumTerrainProvider)==null?void 0:n.fromIonAssetId)=="function")return e.CesiumTerrainProvider.fromIonAssetId(1,r);if((o=e.IonResource)!=null&&o.fromAssetId&&e.CesiumTerrainProvider){const w=await e.IonResource.fromAssetId(1);return new e.CesiumTerrainProvider({url:w,...r})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}function Jt(){const w=[0,2e3,5e3,1e4,15e3],R=[3e4,3e4,25e3,25e3,2e4],S=[30,30,25,25,20],j=S.reduce((ce,Ce)=>ce+Ce*Ce,0),ye=new Array(j),De=new Array(j),ke=new Array(j);let Fe=0;for(let ce=0;ce<5;ce++){const Ce=S[ce],Ue=S[ce],ze=R[ce];for(let We=0;We<Ue;We++)for(let Ge=0;Ge<Ce;Ge++){const at=Fe+We*Ce+Ge,nt=(Ge-Ce/2)*(ze/111320),ot=(We-Ue/2)*(ze/111320/Math.cos(e.Math.toRadians(35))),hr=Math.atan2(ot,nt)+Math.PI/2+.2*Math.sin(Ge*.5)*Math.cos(We*.5);De[at]=e.Math.toDegrees(hr)%360;const mr=Math.sqrt(nt*nt+ot*ot),fr=Math.max(0,1-mr/15);ye[at]=(5+ce*2)*fr+2*Math.random(),ke[at]=.5*Math.sin(Ge*.3)*Math.cos(We*.3)}Fe+=Ce*Ue}return{longitude:104,latitude:35,altitude:w,sizeMesh:R,count:S,hspeed:ye,hdir:De,vspeed:ke}}function Qt(){if(!a||!e){K.error("Cesium 尚未初始化");return}Pe();const r=Jt();h.value=new xa(a,{maxWindSpeed:20,cesium:e,speedFactor:ne.value.speedFactor,arrowLength:ne.value.arrowLength,trailLength:ne.value.trailLength,alphaFactor:ne.value.alphaFactor}),h.value.loadData(r),a.scene.primitives.add(h.value),h.value.flyTo(),K.success("风场加载成功，可通过下方滑块调节样式")}function er(){h.value&&(h.value.speedFactor=ne.value.speedFactor,h.value.arrowLength=ne.value.arrowLength,h.value.trailLength=ne.value.trailLength,h.value.alphaFactor=ne.value.alphaFactor)}function tr({moduleId:r,actionId:n}){var w,R;(R=(w={scene:{home:()=>it(),everest:ur,tileset:dr},wind:{load:Qt,clear:Pe},fluid:{pick:()=>{var S,j;return(j=(S=m.value)==null?void 0:S.startPickHeightMap)==null?void 0:j.call(S)},clear:()=>{var S,j;return(j=(S=m.value)==null?void 0:S.clearFluid)==null?void 0:j.call(S)}}}[r])==null?void 0:w[n])==null||R.call(w)}function rr({moduleId:r,controlId:n,value:o}){if(r==="effects"&&n in fe.value){fe.value={...fe.value,[n]:!!o};return}if(r==="wind"&&n in ne.value){ne.value={...ne.value,[n]:Number(o)},er();return}r==="fluid"&&n in he.value&&(he.value={...he.value,[n]:Number(o)})}function ir({overlayId:r,value:n}){if(r==="tdt-boundaries"){ee.value=!!n;return}r==="tdt-text-labels"&&(Q.value=!!n)}function ar({url:r}){const n=String(r||"").trim(),o=mt(n);if(!o.valid){K.warning(o.message,{closable:!0});return}if(E.value=n,f.value===je){gt(je)&&K.success("已加载自定义 XYZ 图源");return}f.value=je,K.success("已切换到自定义 XYZ 图源")}function nr(r){pe.value={isPicking:!!(r!=null&&r.isPicking),hasFluid:!!(r!=null&&r.hasFluid),selectedText:(r==null?void 0:r.selectedText)||""}}function or(r,n=""){if(typeof window>"u")return n;try{const o=window.localStorage.getItem(r);return o??n}catch{return n}}function sr(r,n){if(!(typeof window>"u"))try{window.localStorage.setItem(r,String(n||""))}catch{}}function Je(r,n){if(typeof window>"u")return n;try{const o=window.localStorage.getItem(r);return o==null?n:o==="true"}catch{return n}}function rt(r,n){if(!(typeof window>"u"))try{window.localStorage.setItem(r,String(!!n))}catch{}}function lr(r,n){return new Promise((o,w)=>{const R=document.getElementById(n);if(R){if(R.getAttribute("data-loaded")==="true"){o();return}R.addEventListener("load",()=>o(),{once:!0}),R.addEventListener("error",()=>w(new Error(`脚本加载失败: ${r}`)),{once:!0});return}const S=document.createElement("script");S.id=n,S.src=r,S.async=!0,S.onload=()=>{S.setAttribute("data-loaded","true"),o()},S.onerror=()=>w(new Error(`脚本加载失败: ${r}`)),document.head.appendChild(S)})}function cr(r,n){return new Promise((o,w)=>{if(document.getElementById(n)){o();return}const S=document.createElement("link");S.id=n,S.rel="stylesheet",S.href=r,S.onload=()=>o(),S.onerror=()=>w(new Error(`样式加载失败: ${r}`)),document.head.appendChild(S)})}function it(r){if(!a)return;const n=typeof r=="number"?r:2;a.camera.flyTo({destination:e.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-e.Math.PI_OVER_TWO,roll:0},duration:n})}function ur(){a&&a.camera.flyTo({destination:e.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:e.Math.toRadians(0),pitch:e.Math.toRadians(-25),roll:0},duration:3})}async function dr(){if(a)try{const r=await e.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");a.scene.primitives.add(r),a.flyTo(r,{duration:3,offset:new e.HeadingPitchRange(e.Math.toRadians(0),e.Math.toRadians(-25),r.boundingSphere.radius*2.5)})}catch(r){K.error(`加载模型失败: ${r}`),K.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return(r,n)=>(D(),W(Te,null,[n[5]||(n[5]=u("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),t.value?(D(),Ae($e(Gr),{key:0,headless:"","get-viewer":L,"get-cesium":$,controls:fe.value},null,8,["controls"])):ae("",!0),t.value?(D(),Ae($e(ha),{key:1,ref_key:"fluidPanelRef",ref:m,headless:"","get-viewer":L,"get-cesium":$,params:he.value,onStateChange:nr},null,40,["params"])):ae("",!0),t.value?(D(),Ae(Ki,{key:2,open:b.value,"onUpdate:open":n[0]||(n[0]=o=>b.value=o),"active-basemap":f.value,"onUpdate:activeBasemap":n[1]||(n[1]=o=>f.value=o),"active-terrain":y.value,"onUpdate:activeTerrain":n[2]||(n[2]=o=>y.value=o),"basemap-options":de.value,"terrain-options":Be,"overlay-options":qe.value,"custom-basemap-url":E.value,modules:He.value,onModuleAction:tr,onControlChange:rr,onOverlayToggle:ir,onCustomBasemapSubmit:ar},null,8,["open","active-basemap","active-terrain","basemap-options","overlay-options","custom-basemap-url","modules"])):ae("",!0),u("div",ba,[u("div",wa,ie(F.value),1),n[4]||(n[4]=u("div",{class:"divider"},null,-1)),u("button",{class:"home-btn",title:"回到初始位置",onClick:it},[...n[3]||(n[3]=[u("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[u("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},Ha=et(Ca,[["__scopeId","data-v-1e08cd8c"]]);export{Ha as default};
