const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-CWaiDzAC.js","./vendor-echarts-all-BgdNsaJf.js","./vendor-libs-CFNIrgdV.js","./vendor-vue-CmuMwCC6.js","./vendor-jszip-C96CrfCN.js"])))=>i.map(i=>d[i]);
var mt=Object.defineProperty;var pt=(a,t,s)=>t in a?mt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;var Ze=(a,t,s)=>pt(a,typeof t!="symbol"?t+"":t,s);import{_ as Be,e as Ye,K as ot,J as st,I as gt}from"./index-ZX_HC-Ah.js";import{_ as xt}from"./vendor-runtime-Dp1pzeXC.js";import{C as lt,o as ct,w as Me,d as Y,c as j,f as C,t as re,G as oe,W as ke,X as vt,g as ae,r as Z,P as yt,a as De,u as Oe,F as fe,e as Te,n as Ce,_ as Ke,i as Qe,x as ze,S as Ne,I as _t,v as bt,H as Se,q as ut}from"./vendor-vue-CmuMwCC6.js";import{af as wt,e as Tt,ag as Je,ah as et,ai as St,aj as Ct,q as Mt,o as Pt,ak as Lt,T as tt,H as Ft,a2 as Et,al as Rt,am as At,an as Dt,ao as Ot,ap as It}from"./vendor-libs-CFNIrgdV.js";import"./vendor-ol-all-096vM1H8.js";import"./vendor-geotiff-BEkMkPUH.js";import"./vendor-lerc-B7uDJLnU.js";import"./vendor-jszip-C96CrfCN.js";import"./vendor-proj4-D1JEjCkc.js";import"./vendor-axios-Bdz_Fv8M.js";const zt={key:0,class:"advanced-effects-root"},kt={class:"effects-panel"},Nt={class:"panel-head"},Bt={class:"effect-switches"},Ht={class:"switch-item"},Ut={class:"switch-item"},Vt={class:"switch-item"},Wt={class:"switch-item"},Gt={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(a){const t=a,s=Ye(),x=Z(null),R=Z(!1),_=Z(!1),D=Z(!1),H=Z(!1),N=Z(!1);let n=null,P=null,p=null,V=!1,k=null,d=null,v=null,b=null,F=null,e=null,r=null,i=null,o=!1,y=0,h=0,g=typeof performance<"u"?performance.now():Date.now();function E(){return v||(v=xt(()=>import("./cesiumFxRuntime-CWaiDzAC.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(c=>{var w;const l=(w=c==null?void 0:c.getCesiumFxEchartsRuntime)==null?void 0:w.call(c);if(!l)throw new Error("Cinematic FX 图表运行时加载失败");return d=l,l}).catch(c=>{throw v=null,c}),v)}async function M(){return d||E()}const T={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},A={hdr:null,bloom:null,sky:null};lt(()=>{ee()}),ct(()=>{L()}),Me(()=>t.controls,c=>{q(c||{})},{deep:!0,immediate:!0});function q(c){Object.prototype.hasOwnProperty.call(c,"fog")&&(R.value=!!c.fog),Object.prototype.hasOwnProperty.call(c,"hbao")&&(_.value=!!c.hbao),Object.prototype.hasOwnProperty.call(c,"tiltShift")&&(D.value=!!c.tiltShift),Object.prototype.hasOwnProperty.call(c,"atmosphere")&&(H.value=!!c.atmosphere)}function ee(){let c=0;b=window.setInterval(async()=>{var O,G;c+=1;const l=(O=t.getViewer)==null?void 0:O.call(t),w=((G=t.getCesium)==null?void 0:G.call(t))||window.Cesium;if(l&&w){clearInterval(b),b=null;try{ne(l),pe(l),le(l,w),Ee(l),s.success("高级视觉效果已启用。")}catch(f){s.error("高级视觉效果初始化失败",f),s.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}c>=150&&(clearInterval(b),b=null,s.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function ne(c){var w,O,G,f,S,z;const l=c==null?void 0:c.scene;if(l){if(typeof l.highDynamicRange=="boolean"&&(A.hdr=l.highDynamicRange),(w=l.postProcessStages)!=null&&w.bloom){const I=l.postProcessStages.bloom;A.bloom={enabled:!!I.enabled,contrast:(O=I.uniforms)==null?void 0:O.contrast,brightness:(G=I.uniforms)==null?void 0:G.brightness,delta:(f=I.uniforms)==null?void 0:f.delta,sigma:(S=I.uniforms)==null?void 0:S.sigma,stepSize:(z=I.uniforms)==null?void 0:z.stepSize}}l.skyAtmosphere&&(A.sky={hueShift:l.skyAtmosphere.hueShift,saturationShift:l.skyAtmosphere.saturationShift,brightnessShift:l.skyAtmosphere.brightnessShift})}}function le(c,l){var O;!((O=c==null?void 0:c.scene)!=null&&O.postProcessStages)||!(l!=null&&l.PostProcessStage)||(Pe(c,l),Le(c,l),Fe(c,l),H.value?ye(c,1200):ce(c))}function pe(c){var w;const l=c==null?void 0:c.scene;(w=l==null?void 0:l.renderError)!=null&&w.addEventListener&&(l.rethrowRenderErrors=!1,i=l.renderError.addEventListener((O,G)=>{s.error("Cesium 渲染异常，已触发降级保护",G),se(),o||(o=!0,s.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function se(){R.value=!1,D.value=!1,_.value=!1,H.value=!1,n&&(n.enabled=!1),P&&(P.enabled=!1),p&&(p.enabled=!1)}function Pe(c,l){n||(n=new l.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new l.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),c.scene.postProcessStages.add(n),n.enabled=R.value)}function Le(c,l){var O,G;const w=(O=c==null?void 0:c.scene)==null?void 0:O.postProcessStages;w&&(w.ambientOcclusion?(p=w.ambientOcclusion,V=!1):(G=l==null?void 0:l.PostProcessStageLibrary)!=null&&G.createAmbientOcclusionStage&&(p=l.PostProcessStageLibrary.createAmbientOcclusionStage(),w.add(p),V=!0),p&&(p.enabled=_.value,p.uniforms&&("intensity"in p.uniforms&&(p.uniforms.intensity=4.2),"bias"in p.uniforms&&(p.uniforms.bias=.08),"lengthCap"in p.uniforms&&(p.uniforms.lengthCap=.35),"stepSize"in p.uniforms&&(p.uniforms.stepSize=1.8),"frustumLength"in p.uniforms&&(p.uniforms.frustumLength=1200))))}function Fe(c,l){P||(P=new l.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),c.scene.postProcessStages.add(P),P.enabled=!1)}function Ee(c){const l=c==null?void 0:c.scene;l&&(r=l.preRender.addEventListener(()=>{var f;const w=U(c),O=Number(((f=c==null?void 0:c.camera)==null?void 0:f.pitch)??-1.2);y+=1;const G=typeof performance<"u"?performance.now():Date.now();if(G-g>=1e3&&(h=Math.round(y*1e3/(G-g)),y=0,g=G),n&&(n.enabled=R.value,n.uniforms.cameraHeightFactor=W(w,150,12e3),n.uniforms.fogDensity=55e-5+(1-n.uniforms.cameraHeightFactor)*.00125),p&&(p.enabled=_.value),P){const S=O>-.62,z=S?K((O+.62)/.5):0;P.enabled=D.value&&S,P.uniforms.blurStrength=z}H.value?ye(c,w):ce(c)}))}function ye(c,l){var S;const w=c==null?void 0:c.scene;if(!w)return;typeof w.highDynamicRange=="boolean"&&(w.highDynamicRange=!0);const O=(S=w.postProcessStages)==null?void 0:S.bloom;O&&(O.enabled=!0,O.uniforms&&("contrast"in O.uniforms&&(O.uniforms.contrast=149),"brightness"in O.uniforms&&(O.uniforms.brightness=-.12),"delta"in O.uniforms&&(O.uniforms.delta=1),"sigma"in O.uniforms&&(O.uniforms.sigma=3.25),"stepSize"in O.uniforms&&(O.uniforms.stepSize=5)));const G=w.skyAtmosphere;if(!G)return;const f=W(l,500,12e4);G.hueShift=-.035+f*.035,G.saturationShift=-.14+f*.09,G.brightnessShift=.03+(1-f)*.08}function ce(c){var O;const l=c==null?void 0:c.scene;if(!l)return;typeof l.highDynamicRange=="boolean"&&A.hdr!==null&&(l.highDynamicRange=A.hdr);const w=(O=l.postProcessStages)==null?void 0:O.bloom;w&&A.bloom&&(w.enabled=A.bloom.enabled,w.uniforms&&("contrast"in w.uniforms&&A.bloom.contrast!==void 0&&(w.uniforms.contrast=A.bloom.contrast),"brightness"in w.uniforms&&A.bloom.brightness!==void 0&&(w.uniforms.brightness=A.bloom.brightness),"delta"in w.uniforms&&A.bloom.delta!==void 0&&(w.uniforms.delta=A.bloom.delta),"sigma"in w.uniforms&&A.bloom.sigma!==void 0&&(w.uniforms.sigma=A.bloom.sigma),"stepSize"in w.uniforms&&A.bloom.stepSize!==void 0&&(w.uniforms.stepSize=A.bloom.stepSize))),l.skyAtmosphere&&A.sky&&(l.skyAtmosphere.hueShift=A.sky.hueShift,l.skyAtmosphere.saturationShift=A.sky.saturationShift,l.skyAtmosphere.brightnessShift=A.sky.brightnessShift)}function ue(){F&&(clearInterval(F),F=null)}async function ge(){var O,G;const c=!N.value;if(N.value=c,!c){ue();return}const l=(O=t.getViewer)==null?void 0:O.call(t),w=((G=t.getCesium)==null?void 0:G.call(t))||window.Cesium;if(!l||!w){N.value=!1,s.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await xe(l,w),_e(l,w),u(l,w)}catch(f){N.value=!1,s.error("图表模块加载失败",f)}}async function xe(c,l){await M(),await yt(),x.value&&(k||(k=d.init(x.value),m()),e||(e=()=>{k==null||k.resize()},window.addEventListener("resize",e)),k.resize(),u(c,l))}function _e(c,l){F||(F=window.setInterval(()=>{!k||!N.value||u(c,l)},1200))}function u(c,l){var S;const w=new Date,O=`${te(w.getHours())}:${te(w.getMinutes())}:${te(w.getSeconds())}`,G=Number((U(c)/1e3).toFixed(2)),f=Number(l.Math.toDegrees(((S=c==null?void 0:c.camera)==null?void 0:S.pitch)??0).toFixed(1));J(T.labels,O,20),J(T.cameraHeightKm,G,20),J(T.pitchDeg,f,20),J(T.fps,h,20),k.setOption({xAxis:{data:T.labels},series:[{data:T.cameraHeightKm},{data:T.pitchDeg},{data:T.fps}]})}function m(){k&&k.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function L(){var w,O;b&&(clearInterval(b),b=null),ue();const c=(w=t.getViewer)==null?void 0:w.call(t),l=(O=c==null?void 0:c.scene)==null?void 0:O.postProcessStages;r&&(r(),r=null),i&&(i(),i=null),n&&l&&l.remove(n),n=null,P&&l&&l.remove(P),P=null,p&&(V&&l&&l.remove(p),p=null),V=!1,c&&ce(c),e&&(window.removeEventListener("resize",e),e=null),k&&(k.dispose(),k=null),d=null,o=!1}function U(c){var G,f,S;const l=(f=(G=c==null?void 0:c.scene)==null?void 0:G.globe)==null?void 0:f.ellipsoid,w=(S=c==null?void 0:c.camera)==null?void 0:S.positionWC;if(!l||!w)return 0;const O=l.cartesianToCartographic(w);return Math.max(0,Number((O==null?void 0:O.height)??0))}function W(c,l,w){return!Number.isFinite(c)||w<=l?0:K((c-l)/(w-l))}function K(c){return Math.min(1,Math.max(0,Number(c)||0))}function J(c,l,w){c.push(l),c.length>w&&c.shift()}function te(c){return String(c).padStart(2,"0")}return(c,l)=>a.headless?ae("",!0):(Y(),j("div",zt,[C("div",kt,[C("div",Nt,[l[4]||(l[4]=C("span",{class:"panel-title"},"Cinematic FX",-1)),C("button",{class:"panel-btn",onClick:ge},re(N.value?"隐藏图表":"显示图表"),1)]),C("div",Bt,[C("label",Ht,[oe(C("input",{"onUpdate:modelValue":l[0]||(l[0]=w=>R.value=w),type:"checkbox"},null,512),[[ke,R.value]]),l[5]||(l[5]=C("span",null,"电影级高度雾",-1))]),C("label",Ut,[oe(C("input",{"onUpdate:modelValue":l[1]||(l[1]=w=>_.value=w),type:"checkbox"},null,512),[[ke,_.value]]),l[6]||(l[6]=C("span",null,"HBAO 微阴影",-1))]),C("label",Vt,[oe(C("input",{"onUpdate:modelValue":l[2]||(l[2]=w=>D.value=w),type:"checkbox"},null,512),[[ke,D.value]]),l[7]||(l[7]=C("span",null,"移轴摄影",-1))]),C("label",Wt,[oe(C("input",{"onUpdate:modelValue":l[3]||(l[3]=w=>H.value=w),type:"checkbox"},null,512),[[ke,H.value]]),l[8]||(l[8]=C("span",null,"动态大气 + Bloom",-1))])]),oe(C("div",{ref_key:"chartRef",ref:x,class:"fx-chart"},null,512),[[vt,N.value]])])]))}},Xt=Be(Gt,[["__scopeId","data-v-5d8bf97e"]]),Yt={class:"cesium-tool-panel"},qt={class:"panel-header"},$t={class:"panel-section"},jt={class:"section-head"},Zt={class:"segmented"},Kt=["onClick"],Qt={class:"panel-section"},Jt={class:"section-head"},ei={class:"segmented"},ti=["onClick"],ii={class:"panel-section"},ri={class:"section-head"},ai={class:"module-list"},ni=["aria-expanded","onClick","onKeydown"],oi={class:"module-icon"},si={class:"module-copy"},li={class:"module-title"},ci={key:0,class:"module-desc"},ui={class:"module-head-side"},di={key:0,class:"module-body"},hi={key:0,class:"module-actions"},fi=["disabled","onClick"],mi={key:1,class:"control-list"},pi={class:"control-label"},gi=["min","max","step","value","disabled","onInput"],xi=["min","max","step","value","disabled","onInput"],vi=["value","disabled","onChange"],yi=["value"],_i=["checked","disabled","onChange"],bi={key:3,class:"control-value"},wi={__name:"CesiumToolPanel",props:{basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},modules:{type:Array,default:()=>[]}},emits:["update:activeBasemap","update:activeTerrain","module-action","control-change"],setup(a,{emit:t}){const s=t,x=Z(new Set);function R(n){return x.value.has(n)}function _(n){const P=new Set(x.value);P.has(n)?P.delete(n):P.add(n),x.value=P}function D(n){return{scene:Lt,effects:Pt,wind:Mt,fluid:Ct}[n]||et}function H(n,P){var V;return((V={scene:{home:At,everest:Je,tileset:Rt},wind:{load:Et,clear:tt},fluid:{pick:Ft,clear:tt}}[n])==null?void 0:V[P])||Dt}function N(n,P,p){const V=P.type==="range"?Number(p):p;s("control-change",{moduleId:n,controlId:P.id,value:V})}return(n,P)=>(Y(),j("aside",Yt,[C("div",qt,[P[0]||(P[0]=C("div",null,[C("div",{class:"panel-title"},"Cesium 控制台"),C("div",{class:"panel-subtitle"},"场景、图层与功能参数")],-1)),De(Oe(wt),{size:18})]),C("section",$t,[C("div",jt,[De(Oe(Tt),{size:16}),P[1]||(P[1]=C("span",null,"地图源",-1))]),C("div",Zt,[(Y(!0),j(fe,null,Te(a.basemapOptions,p=>(Y(),j("button",{key:p.value,class:Ce(["segment-btn",{active:p.value===a.activeBasemap}]),onClick:V=>n.$emit("update:activeBasemap",p.value)},re(p.label),11,Kt))),128))])]),C("section",Qt,[C("div",Jt,[De(Oe(Je),{size:16}),P[2]||(P[2]=C("span",null,"地形",-1))]),C("div",ei,[(Y(!0),j(fe,null,Te(a.terrainOptions,p=>(Y(),j("button",{key:p.value,class:Ce(["segment-btn",{active:p.value===a.activeTerrain}]),onClick:V=>n.$emit("update:activeTerrain",p.value)},re(p.label),11,ti))),128))])]),C("section",ii,[C("div",ri,[De(Oe(et),{size:16}),P[3]||(P[3]=C("span",null,"功能模块",-1))]),C("div",ai,[(Y(!0),j(fe,null,Te(a.modules,p=>{var V,k;return Y(),j("article",{key:p.id,class:Ce(["module-item",{expanded:R(p.id)}])},[C("div",{class:"module-head",role:"button",tabindex:"0","aria-expanded":R(p.id),onClick:d=>_(p.id),onKeydown:[Ke(Qe(d=>_(p.id),["prevent"]),["enter"]),Ke(Qe(d=>_(p.id),["prevent"]),["space"])]},[C("span",oi,[(Y(),ze(Ne(D(p.id)),{size:16,"stroke-width":"2"}))]),C("span",si,[C("span",li,re(p.title),1),p.description?(Y(),j("span",ci,re(p.description),1)):ae("",!0)]),C("span",ui,[p.status?(Y(),j("span",{key:0,class:Ce(["module-status",p.statusTone||"neutral"])},re(p.status),3)):ae("",!0),De(Oe(St),{class:"module-chevron",size:15})])],40,ni),R(p.id)?(Y(),j("div",di,[(V=p.actions)!=null&&V.length?(Y(),j("div",hi,[(Y(!0),j(fe,null,Te(p.actions,d=>(Y(),j("button",{key:d.id,class:Ce(["tool-action",[d.variant||"default",{active:d.active}]]),disabled:d.disabled,onClick:v=>n.$emit("module-action",{moduleId:p.id,actionId:d.id})},[(Y(),ze(Ne(H(p.id,d.id)),{size:14,"stroke-width":"2"})),_t(" "+re(d.label),1)],10,fi))),128))])):ae("",!0),(k=p.controls)!=null&&k.length?(Y(),j("div",mi,[(Y(!0),j(fe,null,Te(p.controls,d=>(Y(),j("label",{key:d.id,class:"control-row"},[C("span",pi,re(d.label),1),d.type==="range"?(Y(),j(fe,{key:0},[C("input",{class:"control-range",type:"range",min:d.min,max:d.max,step:d.step,value:d.value,disabled:d.disabled,onInput:v=>N(p.id,d,v.target.value)},null,40,gi),C("input",{class:"control-number",type:"number",min:d.min,max:d.max,step:d.step,value:d.value,disabled:d.disabled,onInput:v=>N(p.id,d,v.target.value)},null,40,xi)],64)):d.type==="select"?(Y(),j("select",{key:1,class:"control-select",value:d.value,disabled:d.disabled,onChange:v=>N(p.id,d,v.target.value)},[(Y(!0),j(fe,null,Te(d.options||[],v=>(Y(),j("option",{key:v.value,value:v.value},re(v.label),9,yi))),128))],40,vi)):d.type==="toggle"?(Y(),j("input",{key:2,class:"control-toggle",type:"checkbox",checked:!!d.value,disabled:d.disabled,onChange:v=>N(p.id,d,v.target.checked)},null,40,_i)):ae("",!0),d.displayValue?(Y(),j("span",bi,re(d.displayValue),1)):ae("",!0)]))),128))])):ae("",!0)])):ae("",!0)],2)}),128))])])]))}},Ti=Be(wi,[["__scopeId","data-v-aba2cf18"]]);function Si(a){if(!a)throw new Error("Cesium runtime is required for FluidRenderer.");function t(F){return(F==null?void 0:F._view)||(F==null?void 0:F.view)}function s(F){const e=t(F);if(!(e!=null&&e.passState))throw new Error("Cesium scene passState is unavailable.");return e.passState}function x(F){const e=t(F);return(e==null?void 0:e.frustumCommandsList)||(e==null?void 0:e._frustumCommandsList)||[]}const R=`
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
`,_=`
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
`,D=`
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
`,H=`
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
`,N=`
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
`;class P{constructor(e){this.commandType=e.commandType,this.geometry=e.geometry,this.attributeLocations=e.attributeLocations,this.primitiveType=e.primitiveType,this.uniformMap=e.uniformMap,this.vertexShaderSource=e.vertexShaderSource,this.fragmentShaderSource=e.fragmentShaderSource,this.rawRenderState=e.rawRenderState,this.framebuffer=e.framebuffer,this.isPostRender=e.isPostRender,this.outputTexture=e.outputTexture,this.autoClear=a.defaultValue(e.autoClear,!1),this.preExecute=e.preExecute,this.modelMatrix=a.defaultValue(e.modelMatrix,a.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new a.ClearCommand({color:new a.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:a.Pass.OPAQUE}))}createCommand(e){switch(this.commandType){case"Draw":{const r=a.VertexArray.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:a.BufferUsage.STATIC_DRAW}),i=a.ShaderProgram.fromCache({context:e,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),o=a.RenderState.fromCache(this.rawRenderState);return new a.DrawCommand({owner:this,vertexArray:r,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:i,framebuffer:this.framebuffer,renderState:o,pass:a.Pass.OPAQUE})}case"Compute":return new a.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(e,r){this.geometry=r;const i=a.VertexArray.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:a.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=i}update(e){this.show&&(a.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(e.context),this.commandToExecute.isPostRender=this.isPostRender),a.defined(this.preExecute)&&this.preExecute(this),a.defined(this.clearCommand)&&e.commandList.push(this.clearCommand),e.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return a.defined(this.commandToExecute)&&(a.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),a.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),a.destroyObject(this)}}class p{constructor(){}static loadText(e){const r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(),r.responseText}static getFullscreenQuad(){return new a.Geometry({attributes:new a.GeometryAttributes({position:new a.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new a.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(e){if(a.defined(e.arrayBufferView)){const i={};i.arrayBufferView=e.arrayBufferView,e.source=i,e.flipY=!1}return new a.Texture(e)}static createDepthFramebuffer(e,r,i){return new a.Framebuffer({context:e,colorTextures:[this.createTexture({context:e,width:r,height:i,flipY:!1,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(r*i*4)})],depthRenderbuffer:new a.Renderbuffer({context:e,width:r,height:i,format:a.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(e,r,i,o=!1){const y={context:e,colorTextures:[r],destroyAttachments:o};return i&&(y.depthTexture=i),new a.Framebuffer(y)}static createRawRenderState(e){const o={viewport:e.viewport,depthTest:e.depthTest,depthMask:e.depthMask,blending:e.blending};return a.Appearance.getDefaultRenderState(!0,!1,o)}}const b=class b{constructor(e,r={}){if(!e)throw new Error("Cesium Viewer is required");this.viewer=e,this._initConfiguration(r),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(e){this.config={resolution:new a.Cartesian2(e.width||b.DEFAULTS.width,e.height||b.DEFAULTS.height),dimensions:e.dimensions||b.DEFAULTS.dimensions.clone(),heightRange:{min:e.minHeight??b.DEFAULTS.heightRange[0],max:e.maxHeight??b.DEFAULTS.heightRange[1]},baseHeight:e.baseHeight??b.DEFAULTS.baseHeight,fluidParams:e.fluidParams||b.DEFAULTS.fluidParams.clone(),customParams:e.customParams||b.DEFAULTS.customParams.clone(),lonLat:e.lonLat||[...b.DEFAULTS.lonLat],timeStep:e.timeStep||b.DEFAULTS.timeStep,heightMapSource:e.heightMapSource||b.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const e=()=>p.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:e(),B:e(),C:e(),D:e()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(e){if(!(e!=null&&e.arrayBufferView)||!e.width||!e.height)throw new Error("Invalid height map source.");return p.createTexture({context:this.viewer.scene.context,width:e.width,height:e.height,flipY:!1,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT,arrayBufferView:e.arrayBufferView,sampler:new a.Sampler({wrapS:a.TextureWrap.CLAMP_TO_EDGE,wrapT:a.TextureWrap.CLAMP_TO_EDGE,minificationFilter:a.TextureMinificationFilter.LINEAR,magnificationFilter:a.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var q,ee;const e=this.viewer.scene.context,r=p.createDepthFramebuffer(e,this.config.resolution.x,this.config.resolution.y),i=this.viewer.scene,o=i.frameState,y=s(this.viewer.scene),h=i.camera,g=o.camera,E=y.framebuffer,M=a.BoundingRectangle.clone(y.viewport,new a.BoundingRectangle);let T=null,A=[];try{y.viewport.x=0,y.viewport.y=0,y.viewport.width=this.config.resolution.x,y.viewport.height=this.config.resolution.y,y.framebuffer=r,i.camera=this.heightMapCamera,o.camera=this.heightMapCamera,o.context.uniformState.updateCamera(this.heightMapCamera),A=this._processHeightMapShaders(),this._renderDepthPrepass(y);const ne=p.createTexture({context:e,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT});return T=p.createFramebuffer(e,ne),this._copyTexture(r.getColorTexture(0),T),ne}finally{this._restoreHeightMapShaders(A),y.framebuffer=E,a.BoundingRectangle.clone(M,y.viewport),i.camera=h,o.camera=g,g&&o.context.uniformState.updateCamera(g),T&&!((q=T.isDestroyed)!=null&&q.call(T))&&T.destroy(),r&&!((ee=r.isDestroyed)!=null&&ee.call(r))&&r.destroy()}}_renderDepthPrepass(e){const r=this.viewer.scene.frameState;r.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(o=>o.execute(this.viewer.scene.context,e))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:a.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:a.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const e={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...e,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:_}),this._createComputePass("B",{uniforms:{...e,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:D}),this._createComputePass("C",{uniforms:{...e,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:H}),this._createComputePass("D",{uniforms:{...e,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:N})]}_createComputePass(e,{uniforms:r,shaderSource:i}){return new P({commandType:"Compute",uniformMap:r,fragmentShaderSource:new a.ShaderSource({sources:[R,i]}),geometry:p.getFullscreenQuad(),outputTexture:this.textures[e],preExecute:o=>o.commandToExecute.outputTexture=this.textures[e]})}_createMainRenderPass(){const e=k([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new P({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new a.ShaderSource({sources:[R,n]}),geometry:this._createBoxGeometry(),modelMatrix:e,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,colorTexture:()=>{var e,r,i,o;return(o=(i=(r=(e=t(this.viewer.scene))==null?void 0:e.globeDepth)==null?void 0:r.colorFramebufferManager)==null?void 0:i._colorTextures)==null?void 0:o[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(e=>this.viewer.scene.primitives.add(e)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(e){const r=this.viewer.camera.getPickRay(e);return this.viewer.scene.globe.pick(r,this.viewer.scene)}_createOrthographicCamera(){const e=new a.Camera(this.viewer.scene);e.frustum=new a.OrthographicOffCenterFrustum;const[r,i]=this.config.lonLat,o=a.Cartesian3.fromDegrees(r,i,this.config.baseHeight),y=a.Transforms.eastNorthUpToFixedFrame(o),h=e.frustum;h.near=.01,h.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),h.left=-this.config.dimensions.x/2,h.right=this.config.dimensions.x/2,h.bottom=-this.config.dimensions.y/2,h.top=this.config.dimensions.y/2;const g=a.Matrix4.getColumn(y,2,new a.Cartesian3);a.Cartesian3.negate(g,g);const E=a.Matrix4.getColumn(y,1,new a.Cartesian3),M=a.Matrix4.getColumn(y,0,new a.Cartesian3),T=a.Cartesian3.multiplyByScalar(g,-h.far,new a.Cartesian3);return e.position=a.Cartesian3.add(o,T,new a.Cartesian3),e.direction=g,e.up=E,e.right=M,e}destroy(){var e,r;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(i=>{i&&this.viewer.scene.primitives.remove(i)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(i=>{var o;i&&!((o=i.isDestroyed)!=null&&o.call(i))&&i.destroy()}),this.textures={},this._heightMap&&!((r=(e=this._heightMap).isDestroyed)!=null&&r.call(e))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(e,r){const i=this.viewer.scene.context,o=s(this.viewer.scene),y=i.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>e},owner:this}),h=o.framebuffer;o.framebuffer=r,y.execute(i,o),o.framebuffer=h}_getDepthRenderCommands(){var i,o;const e=[],r=x(this.viewer.scene);for(let y=0;y<r.length;++y){const h=r[y],g=(i=h==null?void 0:h.commands)==null?void 0:i[2],E=((o=h==null?void 0:h.indices)==null?void 0:o[2])??(g==null?void 0:g.length)??0;g&&E>0&&e.push(...g.slice(0,E))}return e}_processHeightMapShaders(){const e=[],r=a.Transforms.eastNorthUpToFixedFrame(a.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),i=a.Matrix4.inverse(r,new a.Matrix4),o=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(h=>{var A;if(!((A=h==null?void 0:h.shaderProgram)!=null&&A.fragmentShaderSource)||!h.uniformMap)return;const g=Object.prototype.hasOwnProperty.call(h.uniformMap,"u_inverseEnuMatrix"),E=h.uniformMap.u_inverseEnuMatrix,M=h.shaderProgram,T=new a.Matrix4;h.uniformMap.u_inverseEnuMatrix=()=>{const q=h.modelMatrix||a.Matrix4.IDENTITY;return a.Matrix4.multiply(i,q,T)},h.heightMap_ShaderProgram||(h.heightMap_ShaderProgram=this._getDerivedShaderProgram(o.context,h.shaderProgram,"Height_Map")),h.shaderProgram=h.heightMap_ShaderProgram,e.push({command:h,hadInverseUniform:g,originalInverseUniform:E,originalShaderProgram:M})}),e}_restoreHeightMapShaders(e){e.forEach(r=>{const{command:i,hadInverseUniform:o,originalInverseUniform:y,originalShaderProgram:h}=r;i!=null&&i.uniformMap&&(i.shaderProgram=h,o?i.uniformMap.u_inverseEnuMatrix=y:delete i.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(e,r,i){let o=e.shaderCache.getDerivedShaderProgram(r,i);return a.defined(o)||(o=this._createHeightMapShaderProgram(e,r,i)),o}_createHeightMapShaderProgram(e,r,i){const o=this._modifyFragmentShader(r.fragmentShaderSource);return e.shaderCache.createDerivedShaderProgram(r,i,{vertexShaderSource:r.vertexShaderSource,fragmentShaderSource:o,attributeLocations:r._attributeLocations})}_modifyFragmentShader(e){const r=e.sources.map(i=>a.ShaderSource.replaceMain(i,"czm_heightMap_main"));return r.push(`
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
            }`]})}};Ze(b,"DEFAULTS",{width:1024,height:1024,dimensions:new a.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new a.Cartesian4(.995,.25,1e-4,.03),customParams:new a.Cartesian4(10,20,.2,10),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let V=b;const k=(F=[0,0,0],e=[0,0,0],r=[1,1,1])=>{const i=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationX(a.Math.toRadians(e[0]))),o=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationY(a.Math.toRadians(e[1]))),y=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationZ(a.Math.toRadians(e[2])));F instanceof a.Cartesian3||(F=a.Cartesian3.fromDegrees(...F));const h=a.Transforms.eastNorthUpToFixedFrame(F);a.Matrix4.multiply(h,i,h),a.Matrix4.multiply(h,o,h),a.Matrix4.multiply(h,y,h);const g=a.Matrix4.fromScale(new a.Cartesian3(...r));return a.Matrix4.multiply(h,g,new a.Matrix4)},d=`
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
    `;function v(){return new a.PostProcessStage({fragmentShader:d})}return{FluidRenderer:V,createSkyEffect:v}}const Ci={key:0,class:"fluid-root"},Mi={class:"fluid-panel"},Pi={class:"panel-actions"},Li=["disabled"],Fi={key:0,class:"selected-text"},Ei={class:"param-list"},Ri={class:"param-row"},Ai={class:"param-row"},Di={class:"param-row"},it=1024,rt=1e4,Oi=1200,Ii=60,Ge=64,zi=160,ki={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(a,{expose:t,emit:s}){const x=a,R=s,_=Ye(),D=Z(10),H=Z(20),N=Z(3),n=Z(!1),P=Z(!1),p=Z(null),V=Z(null);let k=null,d=null,v=null,b=null,F=null,e=null,r=0;const i=ut(()=>!Number.isFinite(p.value)||!Number.isFinite(V.value)?"":`经度 ${p.value.toFixed(6)} / 纬度 ${V.value.toFixed(6)}`);Me([D,H,N],Fe),Me(()=>x.params,u=>{y(u||{})},{deep:!0,immediate:!0}),Me([n,P,i],h,{immediate:!0}),bt(()=>{xe(!0)});function o(){var L,U;const u=(L=x.getViewer)==null?void 0:L.call(x),m=((U=x.getCesium)==null?void 0:U.call(x))||window.Cesium;if(!u||!m)return _.warning("Cesium 场景尚未就绪。"),null;if(!k){const W=Si(m);k=W.FluidRenderer,d=W.createSkyEffect}return{viewer:u,Cesium:m}}function y(u){Number.isFinite(Number(u.threshold))&&(D.value=Number(u.threshold)),Number.isFinite(Number(u.blend))&&(H.value=Number(u.blend)),Number.isFinite(Number(u.lightStrength))&&(N.value=Number(u.lightStrength))}function h(){R("state-change",{isPicking:n.value,hasFluid:P.value,selectedText:i.value})}function g(){const u=o();if(!u)return;const{viewer:m,Cesium:L}=u;ue(),Ee(m,L),n.value=!0,v=new L.ScreenSpaceEventHandler(m.scene.canvas),v.setInputAction(U=>{E(m,L,U.position)},L.ScreenSpaceEventType.LEFT_CLICK)}async function E(u,m,L){var f,S;const U=Le(u,L);if(!U){_.warning("未选中可用地形位置。");return}const W=++r;ue();const K=m.Cartographic.fromCartesian(U),J=m.Math.toDegrees(K.longitude),te=m.Math.toDegrees(K.latitude),c=Math.max(0,Number(K.height)||0),l=100,w=Oi,O=Math.max(0,c-l),G=new m.Cartesian3(rt,rt,w);ot("正在请求模拟范围高度数据...");try{ge();const z=Number(D.value)||0,I=Number(H.value)||0,$=Number(N.value)||0,B=await M(u,m,{lon:J,lat:te,baseHeight:O,dimensions:G});if(W!==r)return;B||_.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),b=new k(u,{lonLat:[J,te],width:it,height:it,dimensions:G,baseHeight:O,minHeight:0,maxHeight:w,heightMapSource:B,customParams:new m.Cartesian4(z,I,$,10),fluidParams:new m.Cartesian4(.9+$/10*.099,Math.min(1,I/50),z/5e4,.03)}),p.value=J,V.value=te,P.value=!0,(S=(f=u.scene).requestRender)==null||S.call(f),_.success("水体流体已创建。")}catch(z){_.error("水体流体创建失败",z),_.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{st()}}async function M(u,m,L){const U=u==null?void 0:u.terrainProvider,W=A(L.dimensions);if(!U)return null;if(m.EllipsoidTerrainProvider&&U instanceof m.EllipsoidTerrainProvider)return se(W);if(typeof m.sampleTerrain!="function"&&typeof m.sampleTerrainMostDetailed!="function")return null;try{return await T(u,m,L,W)}catch(K){if(W<=Ge)throw K;return T(u,m,L,Ge)}}async function T(u,m,L,U){const W=ee(m,L,U),K=await ne(m,u.terrainProvider,W);return pe(K||W,{baseHeight:L.baseHeight,fluidDepth:L.dimensions.z,size:U})}function A(u){const m=Math.max(Number(u==null?void 0:u.x)||0,Number(u==null?void 0:u.y)||0),L=Math.ceil(m/Ii)+1;return q(L,Ge,zi)}function q(u,m,L){return Math.max(m,Math.min(L,Math.round(u)))}function ee(u,{lon:m,lat:L,baseHeight:U,dimensions:W},K){const J=u.Cartesian3.fromDegrees(m,L,U),te=u.Transforms.eastNorthUpToFixedFrame(J),c=[],l=Math.max(1,K-1);for(let w=0;w<K;w++){const G=(.5-w/l)*W.y;for(let f=0;f<K;f++){const z=(f/l-.5)*W.x,I=new u.Cartesian3(z,G,0),$=u.Matrix4.multiplyByPoint(te,I,new u.Cartesian3);c.push(u.Cartographic.fromCartesian($))}}return c}async function ne(u,m,L){const U=le(m);return Number.isInteger(U)&&typeof u.sampleTerrain=="function"?u.sampleTerrain(m,U,L):typeof u.sampleTerrainMostDetailed=="function"?u.sampleTerrainMostDetailed(m,L):u.sampleTerrain(m,10,L)}function le(u){const m=Number(u==null?void 0:u._bottomLevel);return Number.isFinite(m)?Math.max(0,m-1):null}function pe(u,{baseHeight:m,fluidDepth:L,size:U}){var K;const W=new Float32Array(U*U*4);for(let J=0;J<u.length;J++){const te=Number((K=u[J])==null?void 0:K.height),c=Number.isFinite(te)?Pe(te-m,0,L):0,l=J*4;W[l]=c,W[l+1]=0,W[l+2]=0,W[l+3]=1}return{width:U,height:U,arrayBufferView:W}}function se(u){return{width:u,height:u,arrayBufferView:new Float32Array(u*u*4)}}function Pe(u,m,L){return Math.max(m,Math.min(L,u))}function Le(u,m){if(!m)return null;if(u.scene.pickPositionSupported&&typeof u.scene.pickPosition=="function"){const U=u.scene.pickPosition(m);if(U)return U}const L=u.camera.getPickRay(m);return L?u.scene.globe.pick(L,u.scene):null}function Fe(){if(!(b!=null&&b.config))return;const u=Number(D.value)||0,m=Number(H.value)||0,L=Number(N.value)||0;b.config.customParams&&(b.config.customParams.x=u,b.config.customParams.y=m,b.config.customParams.z=L),b.config.fluidParams&&(b.config.fluidParams.x=.9+L/10*.099,b.config.fluidParams.y=Math.min(1,m/50),b.config.fluidParams.z=u/5e4)}function Ee(u,m){var L,U;if(!e){const W=u.scene;e={shadows:u.shadows,resolutionScale:u.resolutionScale,msaaSamples:W.msaaSamples,depthTestAgainstTerrain:W.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:W.logarithmicDepthBuffer,highDynamicRange:W.highDynamicRange,fogEnabled:(L=W.fog)==null?void 0:L.enabled,showGroundAtmosphere:W.globe.showGroundAtmosphere,skyAtmosphereShow:(U=W.skyAtmosphere)==null?void 0:U.show,enableLighting:W.globe.enableLighting}}u.shadows=!0,u.resolutionScale=1,u.scene.msaaSamples=4,u.scene.globe.depthTestAgainstTerrain=!0,u.scene.logarithmicDepthBuffer=!0,u.scene.highDynamicRange=!0,u.scene.fog&&(u.scene.fog.enabled=!0),u.scene.globe.showGroundAtmosphere=!1,u.scene.skyAtmosphere&&(u.scene.skyAtmosphere.show=!1),u.scene.globe.enableLighting=!0,!F&&d&&(F=d(m),u.scene.postProcessStages.add(F))}function ye(u){if(!u||!e)return;const m=u.scene;u.shadows=e.shadows,u.resolutionScale=e.resolutionScale,e.msaaSamples!==void 0&&(m.msaaSamples=e.msaaSamples),m.globe.depthTestAgainstTerrain=e.depthTestAgainstTerrain,m.logarithmicDepthBuffer=e.logarithmicDepthBuffer,m.highDynamicRange=e.highDynamicRange,m.fog&&e.fogEnabled!==void 0&&(m.fog.enabled=e.fogEnabled),m.globe.showGroundAtmosphere=e.showGroundAtmosphere,m.skyAtmosphere&&e.skyAtmosphereShow!==void 0&&(m.skyAtmosphere.show=e.skyAtmosphereShow),m.globe.enableLighting=e.enableLighting,e=null}function ce(){xe(!1),_.success("水体流体已清除。")}function ue(){v&&(v.destroy(),v=null),n.value=!1}function ge(){if(b){try{b.destroy()}catch{}b=null,P.value=!1}}function xe(u){var L,U,W;const m=(L=x.getViewer)==null?void 0:L.call(x);if(r+=1,ue(),ge(),p.value=null,V.value=null,m&&F){try{m.scene.postProcessStages.remove(F)}catch{}F=null}u&&m&&ye(m),(W=(U=m==null?void 0:m.scene)==null?void 0:U.requestRender)==null||W.call(U)}function _e(){xe(!0),R("close")}return t({startPickHeightMap:g,clearFluid:ce}),(u,m)=>a.headless?ae("",!0):(Y(),j("div",Ci,[C("div",Mi,[C("div",{class:"panel-head"},[m[6]||(m[6]=C("span",{class:"panel-title"},"水体流体",-1)),C("button",{class:"panel-close",title:"关闭",onClick:_e}," × ")]),C("div",Pi,[C("button",{class:Ce(["action-btn primary",{active:n.value}]),onClick:g},re(n.value?"等待选点":"捕捉高度图"),3),C("button",{class:"action-btn",disabled:!P.value&&!n.value,onClick:ce}," 清除 ",8,Li)]),i.value?(Y(),j("div",Fi,re(i.value),1)):ae("",!0),C("div",Ei,[C("label",Ri,[m[7]||(m[7]=C("span",null,"阈值",-1)),oe(C("input",{"onUpdate:modelValue":m[0]||(m[0]=L=>D.value=L),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Se,D.value,void 0,{number:!0}]]),oe(C("input",{"onUpdate:modelValue":m[1]||(m[1]=L=>D.value=L),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Se,D.value,void 0,{number:!0}]])]),C("label",Ai,[m[8]||(m[8]=C("span",null,"混合",-1)),oe(C("input",{"onUpdate:modelValue":m[2]||(m[2]=L=>H.value=L),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Se,H.value,void 0,{number:!0}]]),oe(C("input",{"onUpdate:modelValue":m[3]||(m[3]=L=>H.value=L),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Se,H.value,void 0,{number:!0}]])]),C("label",Di,[m[9]||(m[9]=C("span",null,"光强",-1)),oe(C("input",{"onUpdate:modelValue":m[4]||(m[4]=L=>N.value=L),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Se,N.value,void 0,{number:!0}]]),oe(C("input",{"onUpdate:modelValue":m[5]||(m[5]=L=>N.value=L),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Se,N.value,void 0,{number:!0}]])])])])]))}},Ni=Be(ki,[["__scopeId","data-v-7cc9bc94"]]),Q={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Bi=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Hi=new Float32Array([0,0,1,0,1,1,0,1]),Ui=new Uint16Array([0,1,2,0,2,3]);function me(a,t,s){return Math.max(t,Math.min(s,a))}function X(a,t){const s=Number(a);return Number.isFinite(s)?s:t}function Vi(a,t){const s=t.getParameter(t.MAX_TEXTURE_SIZE),x=Math.min(2048,s),R=Math.max(1,Math.floor(a)),_=Math.sqrt(R),D=Math.log2(_),H=Number.isFinite(D)?Math.round(D):4;let N=Math.pow(2,H);return N=me(N,16,x),N}function Wi(a){const t=a*a,s=new Float32Array(t*4);for(let x=0;x<t;x+=1){const R=x*4;s[R]=Math.random(),s[R+1]=Math.random(),s[R+2]=Math.random(),s[R+3]=Math.random()}return s}function Gi(a){return new Float32Array(a*a*4)}function Xi(a,t,s,x,R){const _=t.createTexture();if(!_)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,_),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,s,x,0,t.RGBA,t.FLOAT,R),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let D=!1;return{_context:a,_texture:_,_target:t.TEXTURE_2D,_width:s,_height:x,destroy(){D||(t.deleteTexture(_),D=!0)}}}class Yi{constructor(t,s={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=s.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const x={...Q,...s};this.speedFactor=X(x.speedFactor,Q.speedFactor),this.cullSpeedMin=X(x.cullSpeedMin,Q.cullSpeedMin),this.cullSpeedMax=X(x.cullSpeedMax,Q.cullSpeedMax),this.windSpeedMin=X(x.windSpeedMin,Q.windSpeedMin),this.windSpeedMax=X(x.windSpeedMax,Q.windSpeedMax),this.arrowLength=X(x.arrowLength,Q.arrowLength),this.trailLength=X(x.trailLength,Q.trailLength),this.decaySpeed=X(x.decaySpeed,Q.decaySpeed),this.alphaFactor=X(x.alphaFactor,Q.alphaFactor),this.maxWindSpeed=X(x.maxWindSpeed,Q.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=X(s.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const s=X(t.longitude,NaN),x=X(t.latitude,NaN),R=Array.isArray(t.altitude)?t.altitude:[],_=Array.isArray(t.sizeMesh)?t.sizeMesh:[],D=Array.isArray(t.count)?t.count:[],H=Array.isArray(t.hspeed)?t.hspeed:[],N=Array.isArray(t.hdir)?t.hdir:[],n=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(s)||!Number.isFinite(x))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const P=R.length;if(P<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(_.length!==P||D.length!==P)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const p=D.map(h=>Math.max(1,Math.floor(X(h,1)))),V=_.map(h=>Math.max(1,X(h,1))),k=R.map(h=>X(h,0)),d=p.reduce((h,g)=>h+g*g,0);if(H.length<d||N.length<d||n.length<d)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=P,this.visibleLayerMin=0,this.visibleLayerMax=P-1,this._altitudes=k.slice(),this._maxNx=Math.max(...p),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*P;const v=new Float32Array(this._atlasWidth*this._atlasHeight*4);let b=0;for(let h=0;h<P;h+=1){const g=p[h],E=g;for(let M=0;M<E;M+=1)for(let T=0;T<g;T+=1){const A=b+M*g+T,q=((h*this._maxNy+M)*this._atlasWidth+T)*4,ee=Number(H[A]),ne=Number(N[A]),le=Number(n[A]);if(!(Number.isFinite(ee)&&Number.isFinite(ne))){v[q]=0,v[q+1]=0,v[q+2]=0,v[q+3]=0;continue}const se=ne*Math.PI/180;v[q]=ee*Math.sin(se),v[q+1]=ee*Math.cos(se),v[q+2]=Number.isFinite(le)?le:0,v[q+3]=1}b+=g*E}this._createOrReplaceWindAtlasTexture(v);const F=Math.max(...V),e=this._maxNx*F,r=e/2/111320,i=x*Math.PI/180,o=Math.max(1e-6,Math.abs(Math.cos(i))),y=e/2/(111320*o);this._bounds={minLon:s-y,maxLon:s+y,minLat:x-r,maxLat:x+r,minHeight:Math.min(...k),maxHeight:Math.max(...k)},this._dataPointCount=d,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const s=Math.max(1,Math.floor(X(t,1))),x=Vi(s,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&x===this._particleTextureSize||(this._particleTextureSize=x,this._particleCount=x*x,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const s=me(X(t,this.particleDensity),.05,10);if(this.particleDensity=s,this._dataPointCount<=0)return;const x=Math.max(1,Math.floor(this._dataPointCount*s));this.setParticleCount(x)}setBounds(t,s,x,R){const _=X(t,NaN),D=X(s,NaN),H=X(x,NaN),N=X(R,NaN);if(!Number.isFinite(_)||!Number.isFinite(D)||!Number.isFinite(H)||!Number.isFinite(N))return;const n=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};n.minLon=Math.min(_,D),n.maxLon=Math.max(_,D),n.minLat=Math.min(H,N),n.maxLat=Math.max(H,N),this._bounds=n,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,s=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,s,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const R=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[R],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=R,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Xi(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,s=this._particleTextureSize,x=Wi(s),R=Gi(s);for(let _=0;_<2;_+=1){this._particlePositionTextures[_]=new t.Texture({context:this._context,width:s,height:s,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:s,height:s,arrayBufferView:x},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[_]=new t.Texture({context:this._context,width:s,height:s,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:s,height:s,arrayBufferView:R},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[_]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[_],this._velocityTextures[_]],destroyAttachments:!1});const D=this._framebuffers[_]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,D),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,s=t.Buffer.createVertexBuffer({context:this._context,typedArray:Bi,usage:t.BufferUsage.STATIC_DRAW}),x=t.Buffer.createVertexBuffer({context:this._context,typedArray:Hi,usage:t.BufferUsage.STATIC_DRAW}),R=t.Buffer.createIndexBuffer({context:this._context,typedArray:Ui,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:s,componentsPerAttribute:2},{index:1,vertexBuffer:x,componentsPerAttribute:2}],indexBuffer:R})}_buildParticleVertexArray(){const t=this._Cesium,s=new Float32Array(this._drawVertexCount);for(let x=0;x<s.length;x+=1)s[x]=x;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:s,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,s=`#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}`,x=`#version 300 es
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
}`;this._updateProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:s,fragmentShaderSource:x,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const t=this._Cesium,s=`#version 300 es
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
}`,x=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:s,fragmentShaderSource:x,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,s=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:s,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,s=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:s,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=me(Math.floor(X(this.visibleLayerMin,0)),0,this._layerCount-1),s=me(Math.floor(X(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:s}}_normalizeSpeedRange(t,s){const x=Math.max(1e-4,X(this.maxWindSpeed,Q.maxWindSpeed)),R=me(X(t,0)/x,0,1),_=me(X(s,x)/x,0,1);return{min:Math.min(R,_),max:Math.max(R,_)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>X(this.speedFactor,Q.speedFactor),maxWindSpeed:()=>Math.max(1e-4,X(this.maxWindSpeed,Q.maxWindSpeed)),decaySpeed:()=>me(X(this.decaySpeed,Q.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>X(this.arrowLength,Q.arrowLength),trailLength:()=>X(this.trailLength,Q.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>me(X(this.alphaFactor,Q.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function qi(a){if(!a)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:s,Ellipsoid:x,Resource:R,HeightmapTerrainData:_,Rectangle:D,TileAvailability:H,CustomHeightmapTerrainProvider:N}=a;function n(k,d,v,b,F,e){const r=k.tileXYToRectangle(v,b,F);return t(D.intersection(r,d,e))}function P(k){const d=[[[0,0,1,0]]],v=new H(k.tilingScheme,19);for(let b=0;b<d.length;b++){const F=d[b];for(let e=0;e<F.length;e++){const r=F[e];v.addAvailableTileRange(b,r[0],r[1],r[2],r[3])}}return v}function p(k,d,v,b,F){const e=new _({buffer:k._transformBuffer(d),width:k._width,height:k._height,childTileMask:k._getChildTileMask(b,F,v),structure:k._terrainDataStructure});return e._skirtHeight=6e3,k.availability.addAvailableTileRange(v,b,F,b,F),e}class V extends N{constructor(d={}){if(super({...d,ellipsoid:x.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(d.url))throw new s("options.url is required.");this._dataType=d.dataType??"int16",this._url=d.url,this._subdomains=d.subdomains,this._token=d.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=P(this)}get availability(){return this._availability}requestTileGeometry(d,v,b,F){if(b>=this._bottomLevel)return Promise.reject(new Error(`Level ${b} is outside supported range.`));if(b<this._topLevel)return Promise.resolve(new _({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(d,v,b),structure:this._terrainDataStructure}));let e=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const i=this._subdomains[(d+v)%this._subdomains.length];e=e.replace("{s}",i)}e=e.replace("{token}",this._token).replace("{x}",d).replace("{y}",v).replace("{z}",b+1);const r=R.fetchArrayBuffer({url:e,request:F});if(r)return r.then(i=>i.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Ot.inflate(i)).then(i=>p(this,i,b,d,v))}getTileDataAvailable(d,v,b){return b<this._bottomLevel}_transformBuffer(d){let v=2;this._dataType==="float"&&(v=4);const b=d;if(b.length!==22500*v)return null;const F=new ArrayBuffer(v),e=new DataView(F),r=this._width,i=this._height,o=new Uint8Array(r*i*4);for(let y=0;y<i;y++)for(let h=0;h<r;h++){const g=Math.floor(149*y/(i-1)),E=Math.floor(149*h/(r-1)),M=v*(150*g+E);let T;v===4?(e.setInt8(0,b[M]),e.setInt8(1,b[M+1]),e.setInt8(2,b[M+2]),e.setInt8(3,b[M+3]),T=e.getFloat32(0,!0)):T=b[M]+256*b[M+1],(T>1e4||T<-2e3)&&(T=0);const A=(T+1e3)/.001,q=4*(y*r+h);o[q]=A/65536,o[q+1]=(A-256*o[q]*256)/256,o[q+2]=A-256*o[q]*256-256*o[q+1],o[q+3]=255}return o}_getVHeightBuffer(){let d=this._vHeightBuffer;if(!t(d)){d=new Uint8ClampedArray(this._width*this._height*4);for(let v=0;v<this._width*this._height*4;)d[v++]=15,d[v++]=66,d[v++]=64,d[v++]=255;this._vHeightBuffer=d}return d}_getChildTileMask(d,v,b){const F=new D,e=this._tilingScheme,r=this._rectangles,i=e.tileXYToRectangle(d,v,b);let o=0;for(let y=0;y<r.length&&o!==15;y++){const h=r[y];if(h.maxLevel<=b)continue;const g=h.rectangle,E=D.intersection(g,i,F);t(E)&&(n(e,g,2*d,2*v,b+1,F)&&(o|=4),n(e,g,2*d+1,2*v,b+1,F)&&(o|=8),n(e,g,2*d,2*v+1,b+1,F)&&(o|=1),n(e,g,2*d+1,2*v+1,b+1,F)&&(o|=2))}return o}}return V}function qe(a){return It.parse(a)}const $i=qe(`
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
`).root.lookup("GEOPOI.PBPOITile"),ji=qe(`
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
`).root.lookup("GEOPOI.PBPOITile"),Zi=qe(`
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
`).root.lookup("GEOPOI.PBPOITile");function at(a,t){return t.minX>=a.minX&&t.minX<=a.maxX&&t.minY>=a.minY&&t.minY<=a.maxY||t.maxX>=a.minX&&t.maxX<=a.maxX&&t.maxY>=a.minY&&t.maxY<=a.maxY||t.minX>=a.minX&&t.minX<=a.maxX&&t.maxY>=a.minY&&t.maxY<=a.maxY||t.maxX>=a.minX&&t.maxX<=a.maxX&&t.minY>=a.minY&&t.minY<=a.maxY}function Ki(a){let t=0;for(let s=0;s<a.length;s++)a.charAt(s).match(/[^\x00-\xff]/gi)!=null?t+=2:t+=1;return t}function nt(a,t){const s=a.x,x=a.y,R=a.width,_=a.height,D=t.x,H=t.y,N=t.width,n=t.height;return!(D<=s&&D+N<=s||s<=D&&s+R<=D||H<=x&&H+n<=x||x<=H&&x+_<=H)}function Qi(a){const t={stringTable:[],pois:[],enumGeometryType:[{ePoint:0},{eMultiLineString:1},{ePolygon:2}],enumZCoordType:[{eCloseGround:0},{eCloseSeaSurface:1},{eRelativelyGround:2},{eAbsolute:3}]};let s;const x=new Uint8Array(a);try{s=Zi.decode(x)}catch{}if(!s)try{s=ji.decode(x)}catch{try{s=$i.decode(x)}catch{}}t.version=parseInt(s.Version.toString(),10),t.titleKey=parseInt(s.TileKey.toString(),10);for(let _=0;_<s.StringTable.s.length;_++)t.stringTable.push(s.StringTable.s[_].toString());let R=s.POIS.length;for(;R--;){const _=s.POIS[R],D={oid:`${parseInt(_.OID.toString(),10)}_${t.titleKey}`,name:_.Name.toString(),symbolID:parseInt(_.SymbolID.toString(),10),displayHeight:_.DisplayHeight,shiningColor:_.ShiningColor,fontNameIndex:_.FontNameIndex,fontSize:_.FontSize,fontColor:_.FontColor,zCoordType:_.ZCoordType??void 0,geometryType:_.GeometryType,coordinate:_.Coordinates,priority:typeof _.Priority>"u"?null:_.Priority,interates:typeof _.Interates>"u"?null:_.Interates,fontStyle:typeof _.FontStyle>"u"?null:_.FontStyle,shiningSize:typeof _.ShiningSize>"u"?null:_.ShiningSize};t.pois.push(D)}return t}function Ji(a){if(!a)throw new Error("Cesium is required to create GeoWTFS.");const{Cartesian2:t,Cartesian3:s,Color:x,createGuid:R,defined:_,DeveloperError:D,Entity:H,HorizontalOrigin:N,LabelStyle:n,Math:P,SceneTransforms:p,VerticalOrigin:V,combine:k}=a,d={font:"28px sans-serif",fontSize:28,fillColor:x.WHITE,scale:.5,outlineColor:x.BLACK,outlineWidth:5,style:n.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:x.RED,backgroundPadding:new t(10,10),horizontalOrigin:N.CENTER,verticalOrigin:V.TOP,eyeOffset:s.ZERO,pixelOffset:new t(0,8)},v={horizontalOrigin:N.CENTER,verticalOrigin:V.CENTER,eyeOffset:s.ZERO,pixelOffset:t.ZERO,alignedAxis:s.ZERO,color:x.WHITE,rotation:0,scale:1,width:18,height:18};class b{constructor(e,r={}){if(!_(e))throw new D("viewer is required.");if(!_(r.url))throw new D("options.url is required.");this.viewer=e,this.proxy=r.proxy,this.url=r.url,this.icoUrl=r.icoUrl??r.iconUrl,this.metadata=r.metadata,this.roadMetadata=r.roadMetadata,this.roadUrl=r.roadUrl,this.labelGraphics=k(r.labelGraphics,d,!0),this.billboardGraphics=k(r.billboardGraphics,v,!0),this.aotuCollide=!!r.aotuCollide,this.collisionPadding=r.collisionPadding??[3,5,3,5],this.serverFirstStyle=!!r.serverFirstStyle,this.subdomains=r.subdomains||[],this.tileCache=[],this.labelCache=[],this._isInitial=!1,this._latelyGrid=[],this._latelyRefreshStamp=0,this._latelyCollisionStamp=0;const i=R();this._UUID=`GEO_WTFS_LABEL_${i}`,this._UUIDRoad=`GEO_WTFS_LABEL_ROAD_${i}`,this.viewer.camera.percentageChanged=.18,this.bindEvent()}bindEvent(){this.viewer.scene.camera.moveEnd.addEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.addEventListener(this._changed,this)}_moveEnd(){clearTimeout(this._timer);const e=this.viewer.scene.globe._surface;if(e._tilesToRender.length<2||e._tileLoadQueueHigh.length>0)this._timer=setTimeout(()=>{this._moveEnd()},100);else{const r=this.getTilesToRender();if(this.compareArray(r,this._latelyGrid))return;this._queueCall(r),this.delaySynchronous()}}_changed(){const e=new Date().getTime(),r=e-this._latelyRefreshStamp,i=e-this._latelyCollisionStamp;r>300&&this._moveEnd(),i>150&&this.collisionDetection()}getTilesToRender(){const e=this.viewer.scene.globe._surface._tilesToRender.map(i=>({x:i.x,y:i.y,level:i.level,boundBox:{minX:P.toDegrees(i.rectangle.west),minY:P.toDegrees(i.rectangle.south),maxX:P.toDegrees(i.rectangle.east),maxY:P.toDegrees(i.rectangle.north)}})).sort((i,o)=>o.level-i.level),r=[e[0].level];for(let i=0;i<e.length;i++)e[i].level!==r[r.length-1]&&(r.push(e[i].level),r.length>4&&(e.splice(i,1/0),i--));return e}compareArray(e,r){for(let i=0;i<e.length;i++){let o=!1;for(let y=0;y<r.length;y++)if(e[i].x===r[y].x&&e[i].y===r[y].y&&e[i].level===r[y].level){o=!0;break}if(!o)return!1}for(let i=0;i<r.length;i++){let o=!1;for(let y=0;y<e.length;y++)if(r[i].x===e[y].x&&r[i].y===e[y].y&&r[i].level===e[y].level){o=!0;break}if(!o)return!1}return!0}_queueCall(e){this._latelyGrid=e,this._latelyRefreshStamp=new Date().getTime();let r=e.length;for(;r--;){const i=e[r];if(this.metadata&&at(this.metadata.boundBox,i.boundBox)){if(this.metadata.minLevel>i.level+1||this.metadata.maxLevel<i.level+1)return;const o=this.getCacheTile(i.x,i.y,i.level,0);if(o)this.addLabelAndIco(o);else{const y=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",h=this.getTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",y),g=new XMLHttpRequest;g.open("GET",h,!0),g.responseType="arraybuffer";const E=this;g.onload=function(){if(!(g.status<200||g.status>=300)){const M=E.cutString(g.response);let T;M?(T=Qi(M),T.x=this.tile.x,T.y=this.tile.y,T.z=this.tile.z,T.t=0,E.addCacheTile(T),E.addLabelAndIco(T)):(T={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:0},E.addCacheTile(T),E.delaySynchronous())}},g.onerror=function(M){},g.send(),g.tile={x:i.x,y:i.y,z:i.level+1}}}if(this.roadMetadata&&at(this.roadMetadata.boundBox,i.boundBox)){if(this.roadMetadata.minLevel>i.level+1||this.roadMetadata.maxLevel<i.level+1)return;const o=this.getCacheTile(i.x,i.y,i.level,0);if(o)this.addLabelAndIco(o);else{const y=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",h=this.getRoadTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",y),g=new XMLHttpRequest;g.open("GET",h,!0),g.responseType="json";const E=this;g.onload=function(){if(!(g.status<200||g.status>=300)){const M=g.response;let T;M?(T={pois:M.map(A=>({oid:`${A.LabelPoint.X}_${A.LabelPoint.Y}`,name:A.Feature.properties.Name,coordinate:[A.LabelPoint.X,A.LabelPoint.Y,A.LabelPoint.Z?A.LabelPoint.Z:0]})),x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},E.addCacheTile(T),E.addLabelAndIco(T)):(T={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},E.addCacheTile(T),E.delaySynchronous())}},g.onerror=function(M){},g.send(),g.tile={x:i.x,y:i.y,z:i.level+1}}}}}cutString(e){if(!e)return"";const r=e.byteLength;return r<=28?"":e.slice(19,r-9)}addCacheTile(e){this.tileCache.length>999&&this.tileCache.splice(0,500),this.removeCacheTile(e.x,e.y,e.z,e.t),this.tileCache.push(e)}getCacheTile(e,r,i,o){let y=this.tileCache.length;for(;y--;){const h=this.tileCache[y];if(h.x===e&&h.y===r&&h.z===i&&h.t===o)return h}return null}removeCacheTile(e,r,i,o){let y=this.tileCache.length;for(;y--;){const h=this.tileCache[y];if(h.x===e&&h.y===r&&h.z===i&&h.t===o){this.tileCache.splice(y,1);return}}}getCacheLabel(e){let r=this.labelCache.length;for(;r--;){const i=this.labelCache[r];if(i.name===this._UUID&&i.oid===e)return i}return null}addCacheLabel(e){this.labelCache.length>999&&this.labelCache.splice(0,250),this.removeCacheLabel(e.oid),e.timestamp=new Date().getTime(),this.labelCache.push(e)}removeCacheLabel(e){let r=this.labelCache.length;for(;r--;)if(this.labelCache[r].name===this._UUID&&this.labelCache[r].oid===e){this.labelCache.splice(r,1);return}}HexadecimalConversion(e){if(e===4278190080)return"#000000";let r=4278190080|parseInt(-Number(e),10),i="";if(r=r.toString(16).substring(1),r.length<6)for(let o=0;o<6-r.length;o++)i+="0";return`#${i}${r}`}addLabelAndIco(e){if(e.pois&&e.pois.length){let r=e.pois.length;for(;r--;){const i=e.pois[r];let o=this.getCacheLabel(i.oid);o||(o=this.createLabel(i,e)),o&&this.addCacheLabel(o)}}this.delaySynchronous()}createLabel(e,r){if(!e)return;const i={show:!0,position:s.fromDegrees(...e.coordinate),label:{text:e.name}};if(Object.assign(i.label,this.labelGraphics),this.serverFirstStyle&&(e.fontSize!==void 0&&(i.label.font=`${e.fontSize}px `,e.fontNameIndex!==void 0&&r.stringTable&&r.stringTable[e.fontNameIndex]?i.label.font+=r.stringTable[e.fontNameIndex]:i.label.font+="sans-serif",!this.labelGraphics.bold&&e.fontStyle!==1&&e.fontStyle!==3&&(i.label.font=`bold ${i.label.font}`),e.fontStyle!==2&&e.fontStyle!==3&&(i.label.font=`italic ${i.label.font}`)),e.fontColor!==void 0&&(i.label.fillColor=x.fromCssColorString(this.HexadecimalConversion(e.fontColor))),e.shiningColor!==void 0&&(i.label.outlineColor=x.fromCssColorString(this.HexadecimalConversion(e.shiningColor))),typeof e.shiningSize=="number"&&(i.label.outlineWidth=e.shiningSize),e.showBackground!==void 0&&(i.label.showBackground=e.showBackground),e.backgroundColor!==void 0&&(i.label.backgroundColor=e.backgroundColor),e.backgroundPadding!==void 0&&(i.label.backgroundPadding=e.backgroundPadding),e.eyeOffset!==void 0&&(i.label.eyeOffset=e.eyeOffset),e.pixelOffset!==void 0&&(i.label.pixelOffset=e.pixelOffset),e.style!==void 0&&(i.label.style=e.style),e.scale!==void 0&&(i.label.scale=e.scale),r.t||(e.verticalOrigin!==void 0&&(i.label.verticalOrigin=e.verticalOrigin),e.horizontalOrigin!==void 0&&(i.label.horizontalOrigin=e.horizontalOrigin))),e.symbolID!==void 0&&e.symbolID>-1&&this.icoUrl){const y=this.subdomains.length?(r.x+r.y)%this.subdomains.length:"";i.billboard={image:this.getIcoUrl().replace("{id}",e.symbolID).replace("{s}",this.subdomains[y])},Object.assign(i.billboard,this.billboardGraphics),this.serverFirstStyle&&(e.displayHeight!==void 0&&(i.billboard.width=e.displayHeight,i.billboard.height=e.displayHeight),e.eyeOffset!==void 0&&(i.billboard.eyeOffset=e.eyeOffset),e.pixelOffset!==void 0&&(i.billboard.pixelOffset=e.pixelOffset),e.rotation!==void 0&&(i.billboard.rotation=e.rotation),e.alignedAxis!==void 0&&(i.billboard.alignedAxis=e.alignedAxis),e.color!==void 0&&(i.billboard.color=e.color),e.scale!==void 0&&(i.billboard.scale=e.scale),r.t||(e.verticalOrigin!==void 0&&(i.billboard.verticalOrigin=e.verticalOrigin),e.horizontalOrigin!==void 0&&(i.billboard.horizontalOrigin=e.horizontalOrigin)))}r.t&&(i.label.verticalOrigin=V.CENTER,i.label.horizontalOrigin=N.CENTER,i.billboard&&(i.billboard.verticalOrigin=V.CENTER,i.billboard.horizontalOrigin=N.CENTER));const o=new H(i);return o.name=r.t?this._UUIDRoad:this._UUID,o.oid=e.oid,o.priority=e.priority||0,o.xyz=`${r.x}_${r.y}_${r.z-1}`,o}getIcoUrl(){return`${this.proxy?this.proxy.proxy:""}${this.icoUrl}`}getTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.url}`}getRoadTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.roadUrl}`}delaySynchronous(){clearTimeout(this._timer2),this._timer2=setTimeout(()=>{this.synchronousLabel()},100)}synchronousLabel(){let e=this.labelCache.length;for(;e--;){const r=this.labelCache[e];r.timestamp>=this._latelyRefreshStamp&&!this.viewer.entities.contains(r)&&(this._isInitial&&this.aotuCollide&&(r.show=!1),this.viewer.entities.add(r))}if(!this._isInitial){let r=this.viewer.entities.values.length-1;for(;r>=0;){const i=this.viewer.entities.values[r];i&&i.name&&(i.name===this._UUID||i.name===this._UUIDRoad)&&i.timestamp<this._latelyRefreshStamp&&this.viewer.entities.remove(i),r--}this.aotuCollide&&this.collisionDetection()}}collisionDetection(){const e=this.viewer.entities.values,r=[],i=[];let o=e.length;for(;o--;){const g=e[o];if(g.name&&(g.name===this._UUID||g.name===this._UUIDRoad)){const E=this.getScreenCoordinates(g.position.getValue(0));g.show=!0,g.collisionBox=this.getLabelReact({point:E,entity:g});let M=null,T=r.length;for(;!M&&T--;)r[T].xyz===g.xyz&&(M=r[T]);M||(M={xyz:g.xyz,entities:[]},r.push(M)),M.entities.push(g)}}let y=r.length;for(;y--;){const g=r[y];g.entities.sort((E,M)=>E.priority-M.priority);for(let E=0;E<g.entities.length;E++){const M=g.entities[E];if(M.show){for(let T=E+1;T<g.entities.length;T++)g.entities[T].show&&nt(M.collisionBox,g.entities[T].collisionBox)&&(g.entities[T].show=!1);i.push(M)}}}let h=i.length;for(;h--;)if(i[h].show){i.sort((g,E)=>g.priority-E.priority);for(let g=h+1;g<i.length;g++)i[g].show&&nt(i[h].collisionBox,i[g].collisionBox)&&(i[g].show=!1)}}getScreenCoordinates(e){const r=this.viewer.scene;return!r||!e?null:typeof p.worldToDrawingBufferCoordinates=="function"?p.worldToDrawingBufferCoordinates(r,e):typeof p.worldToWindowCoordinates=="function"?p.worldToWindowCoordinates(r,e):typeof p.wgs84ToWindowCoordinates=="function"?p.wgs84ToWindowCoordinates(r,e):null}getLabelReact(e){const{point:r,entity:i}=e;let o=parseInt(i.label.font,10);o=o>0?o:15;const y=i.label.text.getValue(0).split(`
`);let h=0;for(let M=0;M<y.length;M++){const T=Ki(y[M])/2;h<T&&(h=T)}const g=i.billboard?i.billboard.width.getValue(0)*i.billboard.scale.getValue(0):1,E=i.billboard?i.billboard.height.getValue(0)*i.billboard.scale.getValue(0):1;return{x:(r?r.x:-999)-g/2-this.collisionPadding[3],y:(r?r.y:-999)-E/2-this.collisionPadding[0],width:o*i.label.scale.getValue(0)*h+i.label.pixelOffset.getValue(0).x+g+this.collisionPadding[1],height:o*i.label.scale.getValue(0)*h+i.label.pixelOffset.getValue(0).y+g+this.collisionPadding[2]}}initTDT(e,r){let i=0;this._isInitial=!0,this._queueCall(e);const o=setInterval(()=>{i>3&&(this._isInitial=!1,clearInterval(o),typeof r=="function"&&r()),i%2===0&&this.aotuCollide&&this.collisionDetection(),i++},600);return this}getPropertyValue(e,r,i,o){return r[e]!==void 0?r[e]:i[e]!==void 0?i[e]:o}unbindEvent(){this.viewer.scene.camera.moveEnd.removeEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.removeEventListener(this._changed,this)}activate(){this._latelyGrid=[],this._moveEnd()}destroy(){let e=this.viewer.entities.values.length;for(;e--;){const r=this.viewer.entities.values[e];r.name&&(r.name===this._UUID||r.name===this._UUIDRoad)&&(this.viewer.entities.remove(r),e--)}this.viewer.camera.percentageChanged=.5,this.unbindEvent(),this.handler=this.handler&&this.handler.destroy(),this.proxy=void 0,this.viewer=void 0,this.url=void 0,this.labelGraphics=void 0,this.billboardGraphics=void 0,this.aotuCollide=void 0,this.collisionPadding=void 0,this.tileCache=void 0,this.labelCache=void 0,this._latelyGrid=void 0,this._latelyRefreshStamp=void 0,this._roadTileset=void 0}getLabelVisibility(e){if(!e)return!1;const r=this.viewer.canvas.getBoundingClientRect();return!(e.x<-10||e.x>r.right+10||e.y<-10||e.y>r.bottom+10)}}return b}const er={class:"map-controls-group"},tr={class:"mouse-position-content"},Ie="https://t{s}.tianditu.gov.cn/",Xe="https://cdn.jsdelivr.net/npm/cesium@1.110/Build/Cesium/",ir={__name:"CesiumContainer",setup(a){let t=null;const s="4267820f43926eaf808d61dc07269beb",x="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzRhZjM0ZC02MmYxLTRhNzgtYTkxNi00YWM2MmMxNmNhMWIiLCJpZCI6MTkzNjkxLCJpYXQiOjE3MDY5NDA2ODF9.mKu1zCK-GOjwDem9-J_Ksv0xEGNsN1zGuShYzOuXJsg",R=["0","1","2","3","4","5","6","7"],_=`${Xe}Cesium.js`,D=`${Xe}Widgets/widgets.css`,H={boundBox:{minX:-180,minY:-90,maxX:180,maxY:90},minLevel:1,maxLevel:20},N=[{x:6,y:1,level:2,boundBox:{minX:90,minY:0,maxX:135,maxY:45}},{x:7,y:1,level:2,boundBox:{minX:135,minY:0,maxX:180,maxY:45}},{x:6,y:0,level:2,boundBox:{minX:90,minY:45,maxX:135,maxY:90}},{x:7,y:0,level:2,boundBox:{minX:135,minY:45,maxX:180,maxY:90}},{x:5,y:1,level:2,boundBox:{minX:45,minY:0,maxX:90,maxY:45}},{x:4,y:1,level:2,boundBox:{minX:0,minY:0,maxX:45,maxY:45}},{x:5,y:0,level:2,boundBox:{minX:45,minY:45,maxX:90,maxY:90}},{x:4,y:0,level:2,boundBox:{minX:0,minY:45,maxX:45,maxY:90}},{x:6,y:2,level:2,boundBox:{minX:90,minY:-45,maxX:135,maxY:0}},{x:6,y:3,level:2,boundBox:{minX:90,minY:-90,maxX:135,maxY:-45}},{x:7,y:2,level:2,boundBox:{minX:135,minY:-45,maxX:180,maxY:0}},{x:5,y:2,level:2,boundBox:{minX:45,minY:-45,maxX:90,maxY:0}},{x:4,y:2,level:2,boundBox:{minX:0,minY:-45,maxX:45,maxY:0}},{x:3,y:1,level:2,boundBox:{minX:-45,minY:0,maxX:0,maxY:45}},{x:3,y:0,level:2,boundBox:{minX:-45,minY:45,maxX:0,maxY:90}},{x:2,y:0,level:2,boundBox:{minX:-90,minY:45,maxX:-45,maxY:90}},{x:0,y:1,level:2,boundBox:{minX:-180,minY:0,maxX:-135,maxY:45}},{x:1,y:0,level:2,boundBox:{minX:-135,minY:45,maxX:-90,maxY:90}},{x:0,y:0,level:2,boundBox:{minX:-180,minY:45,maxX:-135,maxY:90}}];let n=null,P=null,p=null,V=null,k=null,d=0;const v=Z(null),b=Z("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米"),F=Z(!1),e=Z(null),r=Z("tianditu"),i=Z("tianditu"),o=[],y=Ye(),h=[{value:"tianditu",label:"天地图"},{value:"google",label:"Google"}],g=[{value:"tianditu",label:"天地图地形"},{value:"cesiumWorld",label:"Cesium世界地形"},{value:"ellipsoid",label:"平面地形"}],E=Z({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1}),M=Z({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1}),T=Z({threshold:10,blend:20,lightStrength:3}),A=Z({isPicking:!1,hasFluid:!1,selectedText:""}),q=ut(()=>[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气",status:E.value.atmosphere||E.value.fog?"启用":"关闭",statusTone:E.value.atmosphere||E.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:E.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:E.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:E.value.tiltShift},{id:"atmosphere",label:"大气",type:"toggle",value:E.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:v.value?"已加载":"未加载",statusTone:v.value?"success":"neutral",actions:[{id:"load",label:v.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!v.value}],controls:[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:M.value.speedFactor,displayValue:M.value.speedFactor.toFixed(1),disabled:!v.value},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:M.value.arrowLength,displayValue:`${Math.round(M.value.arrowLength/1e3)} km`,disabled:!v.value},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:M.value.trailLength,displayValue:`${Math.round(M.value.trailLength/1e3)} km`,disabled:!v.value},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:M.value.alphaFactor,displayValue:M.value.alphaFactor.toFixed(2),disabled:!v.value}]},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:A.value.isPicking?"等待选点":A.value.hasFluid?"已创建":"未创建",statusTone:A.value.isPicking?"warning":A.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:A.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:A.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!A.value.hasFluid&&!A.value.isPicking}],controls:[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:T.value.threshold,displayValue:Number(T.value.threshold).toFixed(2)},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:T.value.blend,displayValue:Number(T.value.blend).toFixed(2)},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:T.value.lightStrength,displayValue:Number(T.value.lightStrength).toFixed(2)}]}]);lt(()=>{le()}),Me(r,f=>{!n||!t||ge(f)}),Me(i,async f=>{!n||!t||await _e(f)});function ee(){var f,S;if(v.value){try{(S=(f=n==null?void 0:n.scene)==null?void 0:f.primitives)==null||S.remove(v.value)}catch{}v.value.destroy(),v.value=null}}function ne(){if(p){try{p.destroy()}catch{}p=null}}ct(()=>{if(F.value=!1,P&&(P.destroy(),P=null),ee(),ne(),V&&(clearInterval(V),V=null),k&&(k.remove(),k=null),n){try{n.destroy()}catch{}n=null}});async function le(){ot("正在初始化 3D 场景...");try{if(await Pe(),!t||!document.getElementById("cesiumContainer"))return;Le(),Fe();const f=Ee(),S=await xe();F.value=!0,f&&S?y.success("天地图基础影像与地形加载成功。"):y.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0}),r.value}catch(f){y.error("Cesium 运行时加载失败",f),y.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{st()}}function pe(){return n}function se(){return t||window.Cesium}async function Pe(){if(window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Xe),await l(D,"cesium-widgets-style"),await c(_,"cesium-runtime-script"),t=window.Cesium,!t)throw new Error("Cesium global 未找到")}function Le(){var z;const f=typeof t.Map=="function"?t.Map:t.Viewer;if(n=new f("cesiumContainer",{imageryProvider:!1,terrainProvider:void 0,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,selectionIndicator:!1,timeline:!1,animation:!1,sceneModePicker:!1,navigationHelpButton:!1,shouldAnimate:!0}),w(0),(z=n._cesiumWidget)!=null&&z._creditContainer&&(n._cesiumWidget._creditContainer.style.display="none"),n.scene.globe.terrainExaggeration=1,n.scene.globe.terrainExaggerationRelativeHeight=0,n.scene.globe.showGroundAtmosphere=!0,n.scene.globe.depthTestAgainstTerrain=!0,(()=>{var $;($=n._cesiumWidget)!=null&&$._creditContainer&&(n._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",n._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(B=>{B.style.cssText="display: none !important; visibility: hidden !important;",B.innerHTML=""}),n.scene&&n.scene.frameState&&n.scene.frameState.creditDisplay&&(n.scene.frameState.creditDisplay.hasCredits=()=>!1,n.scene.frameState.creditDisplay.destroy=()=>{})})(),V=setInterval(()=>{const I=document.querySelector(".cesium-credit-container");I&&I.innerHTML.length>0&&(I.innerHTML="",I.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override")){const I=document.createElement("style");I.id="cesium-credit-override",I.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(I),k=I}}function Fe(){P=new t.ScreenSpaceEventHandler(n.scene.canvas),P.setInputAction(f=>{const S=n.camera.getPickRay(f.endPosition);if(!S)return;const z=n.scene.globe.pick(S,n.scene);if(z){const I=t.Cartographic.fromCartesian(z),$=t.Math.toDegrees(I.longitude).toFixed(6),B=t.Math.toDegrees(I.latitude).toFixed(6),ie=I.height.toFixed(2);b.value=`经度: ${$}, 纬度: ${B}, 海拔: ${ie}米`}},t.ScreenSpaceEventType.MOUSE_MOVE),P.setInputAction(f=>{const S=f.endPosition,z=f.startPosition;if(!t.defined(n.terrainProvider))return;const I=n.scene.globe.ellipsoid;if(!n.camera.pickEllipsoid(z,I)){const B=n.camera;B.rotate(t.Cartesian3.UNIT_X,-.002*(S.y-z.y)),B.rotate(t.Cartesian3.UNIT_Y,-.002*(S.x-z.x))}},t.ScreenSpaceEventType.RIGHT_DRAG),P.setInputAction(()=>{},t.ScreenSpaceEventType.RIGHT_DOWN),P.setInputAction(()=>{},t.ScreenSpaceEventType.RIGHT_UP)}function Ee(){return ge(r.value)}function ye(){if(n!=null&&n.imageryLayers)for(;o.length;){const f=o.pop();try{n.imageryLayers.remove(f,!0)}catch{}}}function ce(){return[new t.UrlTemplateImageryProvider({url:`${Ie}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${s}`,subdomains:R,tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:18}),new t.UrlTemplateImageryProvider({url:`${Ie}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${s}`,subdomains:R,tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:10})]}function ue(){return[new t.UrlTemplateImageryProvider({url:`${gt}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:20})]}function ge(f){var S,z;if(!n||!t)return!1;try{return ye(),(f==="google"?ue():ce()).forEach($=>{o.push(n.imageryLayers.addImageryProvider($))}),f==="tianditu"?m():ne(),(z=(S=n.scene).requestRender)==null||z.call(S),!0}catch(I){return y.error("地图源切换失败",I),!1}}function xe(){return _e(i.value)}async function _e(f){var I,$,B,ie,Re,Ae;if(!n||!t)return!1;const S=++d;if(f==="ellipsoid")return n.terrainProvider=new t.EllipsoidTerrainProvider,n.scene.globe.depthTestAgainstTerrain=!1,($=(I=n.scene).requestRender)==null||$.call(I),!0;if(f==="cesiumWorld")try{const de=await u();return S!==d?!1:(n.terrainProvider=de,n.scene.globe.depthTestAgainstTerrain=!0,(ie=(B=n.scene).requestRender)==null||ie.call(B),!0)}catch(de){return S!==d||(n.terrainProvider=new t.EllipsoidTerrainProvider,n.scene.globe.depthTestAgainstTerrain=!1,y.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),y.error("Cesium 世界地形初始化失败",de)),!1}const z=qi(t);try{return n.terrainProvider=new z({url:`${Ie}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:R,token:s}),n.scene.globe.depthTestAgainstTerrain=!0,(Ae=(Re=n.scene).requestRender)==null||Ae.call(Re),!0}catch(de){return n.terrainProvider=new t.EllipsoidTerrainProvider,n.scene.globe.depthTestAgainstTerrain=!1,y.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),y.error("官方地形初始化失败",de),!1}}async function u(){var S,z;t.Ion&&(t.Ion.defaultAccessToken=x);const f={requestWaterMask:!1,requestVertexNormals:!0};if(typeof t.createWorldTerrainAsync=="function")return t.createWorldTerrainAsync(f);if(typeof t.createWorldTerrain=="function")return t.createWorldTerrain(f);if(typeof((S=t.CesiumTerrainProvider)==null?void 0:S.fromIonAssetId)=="function")return t.CesiumTerrainProvider.fromIonAssetId(1,f);if((z=t.IonResource)!=null&&z.fromAssetId&&t.CesiumTerrainProvider){const I=await t.IonResource.fromAssetId(1);return new t.CesiumTerrainProvider({url:I,...f})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}function m(){if(p)return!0;try{const f=Ji(t);return p=new f(n,{subdomains:R,url:`${Ie}mapservice/GetTiles?lxys={z},{x},{y}&tk=${s}&VERSION=1.0.0`,icoUrl:`${Ie}mapservice/GetIcon?id={id}&tk=${s}`,metadata:H,aotuCollide:!0,collisionPadding:[5,10,8,5],serverFirstStyle:!0,labelGraphics:{font:"28px sans-serif",fontSize:28,fillColor:t.Color.WHITE,scale:.5,outlineColor:t.Color.BLACK,outlineWidth:5,style:t.LabelStyle.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:t.Color.RED,backgroundPadding:new t.Cartesian2(10,10),horizontalOrigin:t.HorizontalOrigin.CENTER,verticalOrigin:t.VerticalOrigin.TOP,eyeOffset:new t.Cartesian3(0,0,10),pixelOffset:t.Cartesian2.ZERO},billboardGraphics:{horizontalOrigin:t.HorizontalOrigin.CENTER,verticalOrigin:t.VerticalOrigin.CENTER,eyeOffset:t.Cartesian3.ZERO,pixelOffset:t.Cartesian2.ZERO,alignedAxis:t.Cartesian3.ZERO,color:t.Color.WHITE,rotation:0,scale:1,width:18,height:18}}),p.initTDT(N,()=>{n.scene.requestRender()}),!0}catch{return!1}}function L(){const I=[0,2e3,5e3,1e4,15e3],$=[3e4,3e4,25e3,25e3,2e4],B=[30,30,25,25,20],ie=B.reduce((he,ve)=>he+ve*ve,0),Re=new Array(ie),Ae=new Array(ie),de=new Array(ie);let $e=0;for(let he=0;he<5;he++){const ve=B[he],He=B[he],je=$[he];for(let be=0;be<He;be++)for(let we=0;we<ve;we++){const Ue=$e+be*ve+we,Ve=(we-ve/2)*(je/111320),We=(be-He/2)*(je/111320/Math.cos(t.Math.toRadians(35))),dt=Math.atan2(We,Ve)+Math.PI/2+.2*Math.sin(we*.5)*Math.cos(be*.5);Ae[Ue]=t.Math.toDegrees(dt)%360;const ht=Math.sqrt(Ve*Ve+We*We),ft=Math.max(0,1-ht/15);Re[Ue]=(5+he*2)*ft+2*Math.random(),de[Ue]=.5*Math.sin(we*.3)*Math.cos(be*.3)}$e+=ve*He}return{longitude:104,latitude:35,altitude:I,sizeMesh:$,count:B,hspeed:Re,hdir:Ae,vspeed:de}}function U(){if(!n||!t){y.error("Cesium 尚未初始化");return}ee();const f=L();v.value=new Yi(n,{maxWindSpeed:20,cesium:t,speedFactor:M.value.speedFactor,arrowLength:M.value.arrowLength,trailLength:M.value.trailLength,alphaFactor:M.value.alphaFactor}),v.value.loadData(f),n.scene.primitives.add(v.value),v.value.flyTo(),y.success("风场加载成功，可通过下方滑块调节样式")}function W(){v.value&&(v.value.speedFactor=M.value.speedFactor,v.value.arrowLength=M.value.arrowLength,v.value.trailLength=M.value.trailLength,v.value.alphaFactor=M.value.alphaFactor)}function K({moduleId:f,actionId:S}){var I,$;($=(I={scene:{home:()=>w(),everest:O,tileset:G},wind:{load:U,clear:ee},fluid:{pick:()=>{var B,ie;return(ie=(B=e.value)==null?void 0:B.startPickHeightMap)==null?void 0:ie.call(B)},clear:()=>{var B,ie;return(ie=(B=e.value)==null?void 0:B.clearFluid)==null?void 0:ie.call(B)}}}[f])==null?void 0:I[S])==null||$.call(I)}function J({moduleId:f,controlId:S,value:z}){if(f==="effects"&&S in E.value){E.value={...E.value,[S]:!!z};return}if(f==="wind"&&S in M.value){M.value={...M.value,[S]:Number(z)},W();return}f==="fluid"&&S in T.value&&(T.value={...T.value,[S]:Number(z)})}function te(f){A.value={isPicking:!!(f!=null&&f.isPicking),hasFluid:!!(f!=null&&f.hasFluid),selectedText:(f==null?void 0:f.selectedText)||""}}function c(f,S){return new Promise((z,I)=>{const $=document.getElementById(S);if($){if($.getAttribute("data-loaded")==="true"){z();return}$.addEventListener("load",()=>z(),{once:!0}),$.addEventListener("error",()=>I(new Error(`脚本加载失败: ${f}`)),{once:!0});return}const B=document.createElement("script");B.id=S,B.src=f,B.async=!0,B.onload=()=>{B.setAttribute("data-loaded","true"),z()},B.onerror=()=>I(new Error(`脚本加载失败: ${f}`)),document.head.appendChild(B)})}function l(f,S){return new Promise((z,I)=>{if(document.getElementById(S)){z();return}const B=document.createElement("link");B.id=S,B.rel="stylesheet",B.href=f,B.onload=()=>z(),B.onerror=()=>I(new Error(`样式加载失败: ${f}`)),document.head.appendChild(B)})}function w(f){if(!n)return;const S=typeof f=="number"?f:2;n.camera.flyTo({destination:t.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-t.Math.PI_OVER_TWO,roll:0},duration:S})}function O(){n&&n.camera.flyTo({destination:t.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:t.Math.toRadians(0),pitch:t.Math.toRadians(-25),roll:0},duration:3})}async function G(){if(n)try{const f=await t.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");n.scene.primitives.add(f),n.flyTo(f,{duration:3,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-25),f.boundingSphere.radius*2.5)})}catch(f){y.error(`加载模型失败: ${f}`),y.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return(f,S)=>(Y(),j(fe,null,[S[4]||(S[4]=C("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),F.value?(Y(),ze(Ne(Xt),{key:0,headless:"","get-viewer":pe,"get-cesium":se,controls:E.value},null,8,["controls"])):ae("",!0),F.value?(Y(),ze(Ne(Ni),{key:1,ref_key:"fluidPanelRef",ref:e,headless:"","get-viewer":pe,"get-cesium":se,params:T.value,onStateChange:te},null,40,["params"])):ae("",!0),F.value?(Y(),ze(Ti,{key:2,"active-basemap":r.value,"onUpdate:activeBasemap":S[0]||(S[0]=z=>r.value=z),"active-terrain":i.value,"onUpdate:activeTerrain":S[1]||(S[1]=z=>i.value=z),"basemap-options":h,"terrain-options":g,modules:q.value,onModuleAction:K,onControlChange:J},null,8,["active-basemap","active-terrain","modules"])):ae("",!0),C("div",er,[C("div",tr,re(b.value),1),S[3]||(S[3]=C("div",{class:"divider"},null,-1)),C("button",{class:"home-btn",title:"回到初始位置",onClick:w},[...S[2]||(S[2]=[C("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[C("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},gr=Be(ir,[["__scopeId","data-v-77866e38"]]);export{gr as default};
