const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-CWaiDzAC.js","./vendor-echarts-all-BgdNsaJf.js","./vendor-libs-CFNIrgdV.js","./vendor-vue-CmuMwCC6.js","./vendor-jszip-C96CrfCN.js"])))=>i.map(i=>d[i]);
var ct=Object.defineProperty;var ut=(a,t,o)=>t in a?ct(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;var je=(a,t,o)=>ut(a,typeof t!="symbol"?t+"":t,o);import{_ as Be,e as Xe,K as dt,J as ht,I as mt}from"./index-DVqdhOtb.js";import{_ as ft}from"./vendor-runtime-Dp1pzeXC.js";import{C as rt,o as at,w as Ce,d as W,c as X,f as b,t as ee,G as ie,W as ke,X as pt,g as te,r as q,P as gt,a as Ee,u as Re,F as ce,e as we,n as Te,_ as Ke,i as Ze,x as De,S as Ne,I as xt,v as vt,H as Se,q as nt}from"./vendor-vue-CmuMwCC6.js";import{af as yt,e as _t,ag as Qe,ah as Je,ai as bt,aj as wt,q as St,o as Tt,ak as Ct,T as et,H as Pt,a2 as Lt,al as Ft,am as Mt,an as Et,ao as Rt,ap as At}from"./vendor-libs-CFNIrgdV.js";import"./vendor-ol-all-096vM1H8.js";import"./vendor-geotiff-BEkMkPUH.js";import"./vendor-lerc-B7uDJLnU.js";import"./vendor-jszip-C96CrfCN.js";import"./vendor-proj4-D1JEjCkc.js";import"./vendor-axios-Bdz_Fv8M.js";const Dt={key:0,class:"advanced-effects-root"},Ot={class:"effects-panel"},zt={class:"panel-head"},It={class:"effect-switches"},kt={class:"switch-item"},Nt={class:"switch-item"},Bt={class:"switch-item"},Ht={class:"switch-item"},Ut={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(a){const t=a,o=Xe(),h=q(null),M=q(!0),x=q(!1),R=q(!0),B=q(!0),z=q(!1);let n=null,w=null,d=null,H=!1,D=null,u=null,m=null,v=null,F=null,e=null,r=null,i=null,s=!1,g=0,y=0,p=typeof performance<"u"?performance.now():Date.now();function E(){return m||(m=ft(()=>import("./cesiumFxRuntime-CWaiDzAC.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(c=>{var _;const l=(_=c==null?void 0:c.getCesiumFxEchartsRuntime)==null?void 0:_.call(c);if(!l)throw new Error("Cinematic FX 图表运行时加载失败");return u=l,l}).catch(c=>{throw m=null,c}),m)}async function P(){return u||E()}const T={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},A={hdr:null,bloom:null,sky:null};rt(()=>{Q()}),at(()=>{Pe()}),Ce(()=>t.controls,c=>{Y(c||{})},{deep:!0,immediate:!0});function Y(c){Object.prototype.hasOwnProperty.call(c,"fog")&&(M.value=!!c.fog),Object.prototype.hasOwnProperty.call(c,"hbao")&&(x.value=!!c.hbao),Object.prototype.hasOwnProperty.call(c,"tiltShift")&&(R.value=!!c.tiltShift),Object.prototype.hasOwnProperty.call(c,"atmosphere")&&(B.value=!!c.atmosphere)}function Q(){let c=0;v=window.setInterval(async()=>{var O,G;c+=1;const l=(O=t.getViewer)==null?void 0:O.call(t),_=((G=t.getCesium)==null?void 0:G.call(t))||window.Cesium;if(l&&_){clearInterval(v),v=null;try{re(l),de(l),ae(l,_),j(l),o.success("高级视觉效果已启用。")}catch(f){o.error("高级视觉效果初始化失败",f),o.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}c>=150&&(clearInterval(v),v=null,o.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function re(c){var _,O,G,f,S,k;const l=c==null?void 0:c.scene;if(l){if(typeof l.highDynamicRange=="boolean"&&(A.hdr=l.highDynamicRange),(_=l.postProcessStages)!=null&&_.bloom){const I=l.postProcessStages.bloom;A.bloom={enabled:!!I.enabled,contrast:(O=I.uniforms)==null?void 0:O.contrast,brightness:(G=I.uniforms)==null?void 0:G.brightness,delta:(f=I.uniforms)==null?void 0:f.delta,sigma:(S=I.uniforms)==null?void 0:S.sigma,stepSize:(k=I.uniforms)==null?void 0:k.stepSize}}l.skyAtmosphere&&(A.sky={hueShift:l.skyAtmosphere.hueShift,saturationShift:l.skyAtmosphere.saturationShift,brightnessShift:l.skyAtmosphere.brightnessShift})}}function ae(c,l){var O;!((O=c==null?void 0:c.scene)!=null&&O.postProcessStages)||!(l!=null&&l.PostProcessStage)||(C(c,l),U(c,l),$(c,l),ne(c,1200))}function de(c){var _;const l=c==null?void 0:c.scene;(_=l==null?void 0:l.renderError)!=null&&_.addEventListener&&(l.rethrowRenderErrors=!1,i=l.renderError.addEventListener((O,G)=>{o.error("Cesium 渲染异常，已触发降级保护",G),L(),s||(s=!0,o.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function L(){M.value=!1,R.value=!1,x.value=!1,B.value=!1,n&&(n.enabled=!1),w&&(w.enabled=!1),d&&(d.enabled=!1)}function C(c,l){n||(n=new l.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new l.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),c.scene.postProcessStages.add(n),n.enabled=M.value)}function U(c,l){var O,G;const _=(O=c==null?void 0:c.scene)==null?void 0:O.postProcessStages;_&&(_.ambientOcclusion?(d=_.ambientOcclusion,H=!1):(G=l==null?void 0:l.PostProcessStageLibrary)!=null&&G.createAmbientOcclusionStage&&(d=l.PostProcessStageLibrary.createAmbientOcclusionStage(),_.add(d),H=!0),d&&(d.enabled=x.value,d.uniforms&&("intensity"in d.uniforms&&(d.uniforms.intensity=4.2),"bias"in d.uniforms&&(d.uniforms.bias=.08),"lengthCap"in d.uniforms&&(d.uniforms.lengthCap=.35),"stepSize"in d.uniforms&&(d.uniforms.stepSize=1.8),"frustumLength"in d.uniforms&&(d.uniforms.frustumLength=1200))))}function $(c,l){w||(w=new l.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),c.scene.postProcessStages.add(w),w.enabled=!1)}function j(c){const l=c==null?void 0:c.scene;l&&(r=l.preRender.addEventListener(()=>{var f;const _=Oe(c),O=Number(((f=c==null?void 0:c.camera)==null?void 0:f.pitch)??-1.2);g+=1;const G=typeof performance<"u"?performance.now():Date.now();if(G-p>=1e3&&(y=Math.round(g*1e3/(G-p)),g=0,p=G),n&&(n.enabled=M.value,n.uniforms.cameraHeightFactor=ze(_,150,12e3),n.uniforms.fogDensity=55e-5+(1-n.uniforms.cameraHeightFactor)*.00125),d&&(d.enabled=x.value),w){const S=O>-.62,k=S?Ie((O+.62)/.5):0;w.enabled=R.value&&S,w.uniforms.blurStrength=k}B.value?ne(c,_):he(c)}))}function ne(c,l){var S;const _=c==null?void 0:c.scene;if(!_)return;typeof _.highDynamicRange=="boolean"&&(_.highDynamicRange=!0);const O=(S=_.postProcessStages)==null?void 0:S.bloom;O&&(O.enabled=!0,O.uniforms&&("contrast"in O.uniforms&&(O.uniforms.contrast=149),"brightness"in O.uniforms&&(O.uniforms.brightness=-.12),"delta"in O.uniforms&&(O.uniforms.delta=1),"sigma"in O.uniforms&&(O.uniforms.sigma=3.25),"stepSize"in O.uniforms&&(O.uniforms.stepSize=5)));const G=_.skyAtmosphere;if(!G)return;const f=ze(l,500,12e4);G.hueShift=-.035+f*.035,G.saturationShift=-.14+f*.09,G.brightnessShift=.03+(1-f)*.08}function he(c){var O;const l=c==null?void 0:c.scene;if(!l)return;typeof l.highDynamicRange=="boolean"&&A.hdr!==null&&(l.highDynamicRange=A.hdr);const _=(O=l.postProcessStages)==null?void 0:O.bloom;_&&A.bloom&&(_.enabled=A.bloom.enabled,_.uniforms&&("contrast"in _.uniforms&&A.bloom.contrast!==void 0&&(_.uniforms.contrast=A.bloom.contrast),"brightness"in _.uniforms&&A.bloom.brightness!==void 0&&(_.uniforms.brightness=A.bloom.brightness),"delta"in _.uniforms&&A.bloom.delta!==void 0&&(_.uniforms.delta=A.bloom.delta),"sigma"in _.uniforms&&A.bloom.sigma!==void 0&&(_.uniforms.sigma=A.bloom.sigma),"stepSize"in _.uniforms&&A.bloom.stepSize!==void 0&&(_.uniforms.stepSize=A.bloom.stepSize))),l.skyAtmosphere&&A.sky&&(l.skyAtmosphere.hueShift=A.sky.hueShift,l.skyAtmosphere.saturationShift=A.sky.saturationShift,l.skyAtmosphere.brightnessShift=A.sky.brightnessShift)}function fe(){F&&(clearInterval(F),F=null)}async function pe(){var O,G;const c=!z.value;if(z.value=c,!c){fe();return}const l=(O=t.getViewer)==null?void 0:O.call(t),_=((G=t.getCesium)==null?void 0:G.call(t))||window.Cesium;if(!l||!_){z.value=!1,o.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await ge(l,_),xe(l,_),oe(l,_)}catch(f){z.value=!1,o.error("图表模块加载失败",f)}}async function ge(c,l){await P(),await gt(),h.value&&(D||(D=u.init(h.value),ve()),e||(e=()=>{D==null||D.resize()},window.addEventListener("resize",e)),D.resize(),oe(c,l))}function xe(c,l){F||(F=window.setInterval(()=>{!D||!z.value||oe(c,l)},1200))}function oe(c,l){var S;const _=new Date,O=`${Le(_.getHours())}:${Le(_.getMinutes())}:${Le(_.getSeconds())}`,G=Number((Oe(c)/1e3).toFixed(2)),f=Number(l.Math.toDegrees(((S=c==null?void 0:c.camera)==null?void 0:S.pitch)??0).toFixed(1));ye(T.labels,O,20),ye(T.cameraHeightKm,G,20),ye(T.pitchDeg,f,20),ye(T.fps,y,20),D.setOption({xAxis:{data:T.labels},series:[{data:T.cameraHeightKm},{data:T.pitchDeg},{data:T.fps}]})}function ve(){D&&D.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function Pe(){var _,O;v&&(clearInterval(v),v=null),fe();const c=(_=t.getViewer)==null?void 0:_.call(t),l=(O=c==null?void 0:c.scene)==null?void 0:O.postProcessStages;r&&(r(),r=null),i&&(i(),i=null),n&&l&&l.remove(n),n=null,w&&l&&l.remove(w),w=null,d&&(H&&l&&l.remove(d),d=null),H=!1,c&&he(c),e&&(window.removeEventListener("resize",e),e=null),D&&(D.dispose(),D=null),u=null,s=!1}function Oe(c){var G,f,S;const l=(f=(G=c==null?void 0:c.scene)==null?void 0:G.globe)==null?void 0:f.ellipsoid,_=(S=c==null?void 0:c.camera)==null?void 0:S.positionWC;if(!l||!_)return 0;const O=l.cartesianToCartographic(_);return Math.max(0,Number((O==null?void 0:O.height)??0))}function ze(c,l,_){return!Number.isFinite(c)||_<=l?0:Ie((c-l)/(_-l))}function Ie(c){return Math.min(1,Math.max(0,Number(c)||0))}function ye(c,l,_){c.push(l),c.length>_&&c.shift()}function Le(c){return String(c).padStart(2,"0")}return(c,l)=>a.headless?te("",!0):(W(),X("div",Dt,[b("div",Ot,[b("div",zt,[l[4]||(l[4]=b("span",{class:"panel-title"},"Cinematic FX",-1)),b("button",{class:"panel-btn",onClick:pe},ee(z.value?"隐藏图表":"显示图表"),1)]),b("div",It,[b("label",kt,[ie(b("input",{"onUpdate:modelValue":l[0]||(l[0]=_=>M.value=_),type:"checkbox"},null,512),[[ke,M.value]]),l[5]||(l[5]=b("span",null,"电影级高度雾",-1))]),b("label",Nt,[ie(b("input",{"onUpdate:modelValue":l[1]||(l[1]=_=>x.value=_),type:"checkbox"},null,512),[[ke,x.value]]),l[6]||(l[6]=b("span",null,"HBAO 微阴影",-1))]),b("label",Bt,[ie(b("input",{"onUpdate:modelValue":l[2]||(l[2]=_=>R.value=_),type:"checkbox"},null,512),[[ke,R.value]]),l[7]||(l[7]=b("span",null,"移轴摄影",-1))]),b("label",Ht,[ie(b("input",{"onUpdate:modelValue":l[3]||(l[3]=_=>B.value=_),type:"checkbox"},null,512),[[ke,B.value]]),l[8]||(l[8]=b("span",null,"动态大气 + Bloom",-1))])]),ie(b("div",{ref_key:"chartRef",ref:h,class:"fx-chart"},null,512),[[pt,z.value]])])]))}},Vt=Be(Ut,[["__scopeId","data-v-67c4d537"]]),Wt={class:"cesium-tool-panel"},Gt={class:"panel-header"},Xt={class:"panel-section"},qt={class:"section-head"},Yt={class:"segmented"},$t=["onClick"],jt={class:"panel-section"},Kt={class:"section-head"},Zt={class:"segmented"},Qt=["onClick"],Jt={class:"panel-section"},ei={class:"section-head"},ti={class:"module-list"},ii=["aria-expanded","onClick","onKeydown"],ri={class:"module-icon"},ai={class:"module-copy"},ni={class:"module-title"},oi={key:0,class:"module-desc"},si={class:"module-head-side"},li={key:0,class:"module-body"},ci={key:0,class:"module-actions"},ui=["disabled","onClick"],di={key:1,class:"control-list"},hi={class:"control-label"},mi=["min","max","step","value","disabled","onInput"],fi=["min","max","step","value","disabled","onInput"],pi=["value","disabled","onChange"],gi=["value"],xi=["checked","disabled","onChange"],vi={key:3,class:"control-value"},yi={__name:"CesiumToolPanel",props:{basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},modules:{type:Array,default:()=>[]}},emits:["update:activeBasemap","update:activeTerrain","module-action","control-change"],setup(a,{emit:t}){const o=t,h=q(new Set);function M(n){return h.value.has(n)}function x(n){const w=new Set(h.value);w.has(n)?w.delete(n):w.add(n),h.value=w}function R(n){return{scene:Ct,effects:Tt,wind:St,fluid:wt}[n]||Je}function B(n,w){var H;return((H={scene:{home:Mt,everest:Qe,tileset:Ft},wind:{load:Lt,clear:et},fluid:{pick:Pt,clear:et}}[n])==null?void 0:H[w])||Et}function z(n,w,d){const H=w.type==="range"?Number(d):d;o("control-change",{moduleId:n,controlId:w.id,value:H})}return(n,w)=>(W(),X("aside",Wt,[b("div",Gt,[w[0]||(w[0]=b("div",null,[b("div",{class:"panel-title"},"Cesium 控制台"),b("div",{class:"panel-subtitle"},"场景、图层与功能参数")],-1)),Ee(Re(yt),{size:18})]),b("section",Xt,[b("div",qt,[Ee(Re(_t),{size:16}),w[1]||(w[1]=b("span",null,"地图源",-1))]),b("div",Yt,[(W(!0),X(ce,null,we(a.basemapOptions,d=>(W(),X("button",{key:d.value,class:Te(["segment-btn",{active:d.value===a.activeBasemap}]),onClick:H=>n.$emit("update:activeBasemap",d.value)},ee(d.label),11,$t))),128))])]),b("section",jt,[b("div",Kt,[Ee(Re(Qe),{size:16}),w[2]||(w[2]=b("span",null,"地形",-1))]),b("div",Zt,[(W(!0),X(ce,null,we(a.terrainOptions,d=>(W(),X("button",{key:d.value,class:Te(["segment-btn",{active:d.value===a.activeTerrain}]),onClick:H=>n.$emit("update:activeTerrain",d.value)},ee(d.label),11,Qt))),128))])]),b("section",Jt,[b("div",ei,[Ee(Re(Je),{size:16}),w[3]||(w[3]=b("span",null,"功能模块",-1))]),b("div",ti,[(W(!0),X(ce,null,we(a.modules,d=>{var H,D;return W(),X("article",{key:d.id,class:Te(["module-item",{expanded:M(d.id)}])},[b("div",{class:"module-head",role:"button",tabindex:"0","aria-expanded":M(d.id),onClick:u=>x(d.id),onKeydown:[Ke(Ze(u=>x(d.id),["prevent"]),["enter"]),Ke(Ze(u=>x(d.id),["prevent"]),["space"])]},[b("span",ri,[(W(),De(Ne(R(d.id)),{size:16,"stroke-width":"2"}))]),b("span",ai,[b("span",ni,ee(d.title),1),d.description?(W(),X("span",oi,ee(d.description),1)):te("",!0)]),b("span",si,[d.status?(W(),X("span",{key:0,class:Te(["module-status",d.statusTone||"neutral"])},ee(d.status),3)):te("",!0),Ee(Re(bt),{class:"module-chevron",size:15})])],40,ii),M(d.id)?(W(),X("div",li,[(H=d.actions)!=null&&H.length?(W(),X("div",ci,[(W(!0),X(ce,null,we(d.actions,u=>(W(),X("button",{key:u.id,class:Te(["tool-action",[u.variant||"default",{active:u.active}]]),disabled:u.disabled,onClick:m=>n.$emit("module-action",{moduleId:d.id,actionId:u.id})},[(W(),De(Ne(B(d.id,u.id)),{size:14,"stroke-width":"2"})),xt(" "+ee(u.label),1)],10,ui))),128))])):te("",!0),(D=d.controls)!=null&&D.length?(W(),X("div",di,[(W(!0),X(ce,null,we(d.controls,u=>(W(),X("label",{key:u.id,class:"control-row"},[b("span",hi,ee(u.label),1),u.type==="range"?(W(),X(ce,{key:0},[b("input",{class:"control-range",type:"range",min:u.min,max:u.max,step:u.step,value:u.value,disabled:u.disabled,onInput:m=>z(d.id,u,m.target.value)},null,40,mi),b("input",{class:"control-number",type:"number",min:u.min,max:u.max,step:u.step,value:u.value,disabled:u.disabled,onInput:m=>z(d.id,u,m.target.value)},null,40,fi)],64)):u.type==="select"?(W(),X("select",{key:1,class:"control-select",value:u.value,disabled:u.disabled,onChange:m=>z(d.id,u,m.target.value)},[(W(!0),X(ce,null,we(u.options||[],m=>(W(),X("option",{key:m.value,value:m.value},ee(m.label),9,gi))),128))],40,pi)):u.type==="toggle"?(W(),X("input",{key:2,class:"control-toggle",type:"checkbox",checked:!!u.value,disabled:u.disabled,onChange:m=>z(d.id,u,m.target.checked)},null,40,xi)):te("",!0),u.displayValue?(W(),X("span",vi,ee(u.displayValue),1)):te("",!0)]))),128))])):te("",!0)])):te("",!0)],2)}),128))])])]))}},_i=Be(yi,[["__scopeId","data-v-aba2cf18"]]);function bi(a){if(!a)throw new Error("Cesium runtime is required for FluidRenderer.");function t(F){return(F==null?void 0:F.view)||(F==null?void 0:F._view)}function o(F){const e=t(F);if(!(e!=null&&e.passState))throw new Error("Cesium scene passState is unavailable.");return e.passState}function h(F){const e=t(F);return(e==null?void 0:e.frustumCommandsList)||[]}const M=`
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
const float initialWaterLevel = 0.03;
uniform vec4 fluidParam;
uniform vec4 customParam;
uniform float waterSize;

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
    // 默认全局水深，可自定义水源点
    float waterDept = initialWaterLevel;
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
`,R=`
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
	return max(0.0f, (centerHeight.x + centerHeight.y) - (dirHeight.x + dirHeight.y));
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
`,B=`
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
`,z=`
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
	return max(0.0f, (centerHeight.x + centerHeight.y) - (dirHeight.x + dirHeight.y));
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
    p = (p + 1.0) - 0.5;
    vec2 p2 = p.xz * vec2(float(textureSize)) / iResolution.xy;
    p2 = min(p2, vec2(float(textureSize) - 0.5) / iResolution.xy);
    vec2 h = texture(iChannel0, p2 ).xy; // * 1.33333
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
    // spec = 0.1;
    // vec3 c = vec3(0.21, 0.50, 0.07);
    // float cliff = smoothstep(0.8, 0.3, n.y);
    // c = mix(c, vec3(0.25), cliff);
    // spec = mix(spec, 0.3, cliff);
    // float snow = smoothstep(0.05, 0.25, p.y) * smoothstep(0.5, 0.7, n.y);
    // c = mix(c, vec3(0.95, 0.95, 0.85), snow);
    // spec = mix(spec, 0.4, snow);
    // vec3 t = texture(iChannel1, p.xz * 5.0).xyz;
    // return mix(c, c * t, 0.75);
    return texture(heightMap, p.xz).yzw;
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
            tt += h * 0.1;
        }
        // tn = getNormal(ro + rd * tt, 0);
        // tc = terrainColor(ro + rd * tt, tn, spec);
        vec3 p =  ro + rd * tt;
        p = (p + 1.0) - 0.5;
        // tc = texture(heightMap, p.xz).yzw * czm_lightColor;
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
            wt += h * 0.1;
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
`;class w{constructor(e){this.commandType=e.commandType,this.geometry=e.geometry,this.attributeLocations=e.attributeLocations,this.primitiveType=e.primitiveType,this.uniformMap=e.uniformMap,this.vertexShaderSource=e.vertexShaderSource,this.fragmentShaderSource=e.fragmentShaderSource,this.rawRenderState=e.rawRenderState,this.framebuffer=e.framebuffer,this.isPostRender=e.isPostRender,this.outputTexture=e.outputTexture,this.autoClear=a.defaultValue(e.autoClear,!1),this.preExecute=e.preExecute,this.modelMatrix=a.defaultValue(e.modelMatrix,a.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new a.ClearCommand({color:new a.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:a.Pass.OPAQUE}))}createCommand(e){switch(this.commandType){case"Draw":{const r=a.VertexArray.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:a.BufferUsage.STATIC_DRAW}),i=a.ShaderProgram.fromCache({context:e,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),s=a.RenderState.fromCache(this.rawRenderState);return new a.DrawCommand({owner:this,vertexArray:r,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:i,framebuffer:this.framebuffer,renderState:s,pass:a.Pass.OPAQUE})}case"Compute":return new a.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(e,r){this.geometry=r;const i=a.VertexArray.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:a.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=i}update(e){this.show&&(a.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(e.context),this.commandToExecute.isPostRender=this.isPostRender),a.defined(this.preExecute)&&this.preExecute(this),a.defined(this.clearCommand)&&e.commandList.push(this.clearCommand),e.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return a.defined(this.commandToExecute)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram&&this.commandToExecute.shaderProgram.destroy()),a.destroyObject(this)}}class d{constructor(){}static loadText(e){const r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(),r.responseText}static getFullscreenQuad(){return new a.Geometry({attributes:new a.GeometryAttributes({position:new a.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new a.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(e){if(a.defined(e.arrayBufferView)){const i={};i.arrayBufferView=e.arrayBufferView,e.source=i,e.flipY=!1}return new a.Texture(e)}static createDepthFramebuffer(e,r,i){return new a.Framebuffer({context:e,colorTextures:[this.createTexture({context:e,width:r,height:i,flipY:!1,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(r*i*4)})],depthRenderbuffer:new a.Renderbuffer({context:e,width:r,height:i,format:a.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!1})}static createFramebuffer(e,r,i){return new a.Framebuffer({context:e,colorTextures:[r],depthTexture:i})}static createRawRenderState(e){const s={viewport:e.viewport,depthTest:e.depthTest,depthMask:e.depthMask,blending:e.blending};return a.Appearance.getDefaultRenderState(!0,!1,s)}}const v=class v{constructor(e,r={}){if(!e)throw new Error("Cesium Viewer is required");this.viewer=e,this._initConfiguration(r),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(e){this.config={resolution:new a.Cartesian2(e.width||v.DEFAULTS.width,e.height||v.DEFAULTS.height),dimensions:e.dimensions||v.DEFAULTS.dimensions.clone(),heightRange:{min:e.minHeight??v.DEFAULTS.heightRange[0],max:e.maxHeight??v.DEFAULTS.heightRange[1]},baseHeight:e.baseHeight??v.DEFAULTS.baseHeight,fluidParams:e.fluidParams||v.DEFAULTS.fluidParams.clone(),customParams:e.customParams||v.DEFAULTS.customParams.clone(),lonLat:e.lonLat||[...v.DEFAULTS.lonLat],timeStep:e.timeStep||v.DEFAULTS.timeStep,waterSize:e.waterSize||v.DEFAULTS.waterSize}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const e=()=>d.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:e(),B:e(),C:e(),D:e()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this._generateHeightMapTexture()}_generateHeightMapTexture(){const e=this.viewer.scene.context,r=d.createDepthFramebuffer(e,this.config.resolution.x,this.config.resolution.y),i=o(this.viewer.scene),s=this.viewer.scene.camera,g=e._currentFramebuffer,y=i.viewport;i.viewport.x=0,i.viewport.y=0,i.viewport.width=this.config.resolution.x,i.viewport.height=this.config.resolution.y,i.framebuffer=r,this.viewer.scene.camera=this.heightMapCamera,this._processHeightMapShaders(),this._renderDepthPrepass(i);const p=d.createTexture({context:e,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:a.PixelDatatype.FLOAT}),E=d.createFramebuffer(e,p);return this._copyTexture(r.getColorTexture(0),E),i.framebuffer=g,i.viewport=y,this.viewer.scene.camera=s,p}_renderDepthPrepass(e){const r=this.viewer.scene.frameState;r.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(s=>s.execute(this.viewer.scene.context,e))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:a.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:a.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const e={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,waterSize:()=>this.config.waterSize,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...e,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:x}),this._createComputePass("B",{uniforms:{...e,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:R}),this._createComputePass("C",{uniforms:{...e,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:B}),this._createComputePass("D",{uniforms:{...e,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:z})]}_createComputePass(e,{uniforms:r,shaderSource:i}){return new w({commandType:"Compute",uniformMap:r,fragmentShaderSource:new a.ShaderSource({sources:[M,i]}),geometry:d.getFullscreenQuad(),outputTexture:this.textures[e],preExecute:s=>s.commandToExecute.outputTexture=this.textures[e]})}_createMainRenderPass(){const e=D([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new w({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new a.ShaderSource({sources:[M,n]}),geometry:this._createBoxGeometry(),modelMatrix:e,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,colorTexture:()=>{var e,r,i,s;return(s=(i=(r=(e=t(this.viewer.scene))==null?void 0:e.globeDepth)==null?void 0:r.colorFramebufferManager)==null?void 0:i._colorTextures)==null?void 0:s[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(e=>this.viewer.scene.primitives.add(e)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(e){const r=this.viewer.camera.getPickRay(e);return this.viewer.scene.globe.pick(r,this.viewer.scene)}_createOrthographicCamera(){const e=new a.Camera(this.viewer.scene);e.frustum=new a.OrthographicOffCenterFrustum;const[r,i]=this.config.lonLat,s=a.Cartesian3.fromDegrees(r,i,this.config.baseHeight),g=a.Transforms.eastNorthUpToFixedFrame(s),y=e.frustum;y.near=.01,y.far=this.config.dimensions.z*2,y.left=-this.config.dimensions.x/2,y.right=this.config.dimensions.x/2,y.bottom=-this.config.dimensions.y/2,y.top=this.config.dimensions.y/2;const p=a.Matrix4.getColumn(g,2,new a.Cartesian3);a.Cartesian3.negate(p,p);const E=a.Matrix4.getColumn(g,1,new a.Cartesian3),P=a.Matrix4.getColumn(g,0,new a.Cartesian3),T=a.Cartesian3.multiplyByScalar(p,-y.far,new a.Cartesian3);return e.position=a.Cartesian3.add(s,T,new a.Cartesian3),e.direction=p,e.up=E,e.right=P,e}destroy(){this._isActive=!1,this.viewer.scene.postRender.removeEventListener(this.postRenderHandler),[this.mainRenderPass,...this.computePasses].forEach(e=>this.viewer.scene.primitives.remove(e)),this.viewer.entities.remove(this.debugEntity),Object.values(this.textures).forEach(e=>e.destroy()),this._heightMap.destroy()}_copyTexture(e,r){const i=this.viewer.scene.context,s=o(this.viewer.scene),g=i.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>e},owner:this}),y=s.framebuffer;s.framebuffer=r,g.execute(i,s),s.framebuffer=y}_getDepthRenderCommands(){const e=[],r=h(this.viewer.scene);for(let i=0;i<r.length;++i){const s=r[i],g=s.indices[2];g>0&&e.push(...s.commands[2].slice(0,g))}return e}_processHeightMapShaders(){const e=a.Transforms.eastNorthUpToFixedFrame(a.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),r=a.Matrix4.inverse(e,new a.Matrix4);this._inverseEnuMatrix=a.Matrix4.multiply(r,this.viewer.scene.frameState.context.uniformState.model,new a.Matrix4);const i=this.viewer.scene.frameState;this._getDepthRenderCommands().forEach(g=>{g.uniformMap.u_inverseEnuMatrix=()=>this._inverseEnuMatrix,g.heightMap_ShaderProgram||(g.heightMap_ShaderProgram=this._getDerivedShaderProgram(i.context,g.shaderProgram,"Height_Map")),g.shaderProgram=g.heightMap_ShaderProgram})}_getDerivedShaderProgram(e,r,i){let s=e.shaderCache.getDerivedShaderProgram(r,i);return a.defined(s)||(s=this._createHeightMapShaderProgram(e,r,i)),s}_createHeightMapShaderProgram(e,r,i){const s=this._modifyFragmentShader(r.fragmentShaderSource);return e.shaderCache.createDerivedShaderProgram(r,i,{vertexShaderSource:r.vertexShaderSource,fragmentShaderSource:s,attributeLocations:r._attributeLocations})}_modifyFragmentShader(e){const r=e.sources.map(i=>a.ShaderSource.replaceMain(i,"czm_heightMap_main"));return r.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new a.ShaderSource({sources:r,defines:e.defines})}_createBoxGeometry(){return a.BoxGeometry.createGeometry(a.BoxGeometry.fromDimensions({vertexFormat:a.VertexFormat.POSITION_AND_ST,dimensions:new a.Cartesian3(1,1,1)}))}_getAttributeLocations(){return a.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return a.RenderState.fromCache({cull:{enabled:!1,face:a.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}})}_getVertexShader(){return new a.ShaderSource({sources:[`
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
            }`]})}};je(v,"DEFAULTS",{width:1024,height:1024,dimensions:new a.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new a.Cartesian4(.995,.25,1e-4,.1),customParams:new a.Cartesian4(10,20,.2,10),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,waterSize:.005});let H=v;const D=(F=[0,0,0],e=[0,0,0],r=[1,1,1])=>{const i=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationX(a.Math.toRadians(e[0]))),s=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationY(a.Math.toRadians(e[1]))),g=a.Matrix4.fromRotationTranslation(a.Matrix3.fromRotationZ(a.Math.toRadians(e[2])));F instanceof a.Cartesian3||(F=a.Cartesian3.fromDegrees(...F));const y=a.Transforms.eastNorthUpToFixedFrame(F);a.Matrix4.multiply(y,i,y),a.Matrix4.multiply(y,s,y),a.Matrix4.multiply(y,g,y);const p=a.Matrix4.fromScale(new a.Cartesian3(...r));return a.Matrix4.multiply(y,p,new a.Matrix4)},u=`
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
    `;function m(){return new a.PostProcessStage({fragmentShader:u})}return{FluidRenderer:H,createSkyEffect:m}}const wi={key:0,class:"fluid-root"},Si={class:"fluid-panel"},Ti={class:"panel-actions"},Ci=["disabled"],Pi={key:0,class:"selected-text"},Li={class:"param-list"},Fi={class:"param-row"},Mi={class:"param-row"},Ei={class:"param-row"},Ri={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(a,{expose:t,emit:o}){const h=a,M=o,x=Xe(),R=q(10),B=q(20),z=q(3),n=q(!1),w=q(!1),d=q(null),H=q(null);let D=null,u=null,m=null,v=null,F=null,e=null;const r=nt(()=>!Number.isFinite(d.value)||!Number.isFinite(H.value)?"":`经度 ${d.value.toFixed(6)} / 纬度 ${H.value.toFixed(6)}`);Ce([R,B,z],P),Ce(()=>h.params,L=>{s(L||{})},{deep:!0,immediate:!0}),Ce([n,w,r],g,{immediate:!0}),vt(()=>{ae(!0)});function i(){var U,$;const L=(U=h.getViewer)==null?void 0:U.call(h),C=(($=h.getCesium)==null?void 0:$.call(h))||window.Cesium;if(!L||!C)return x.warning("Cesium 场景尚未就绪。"),null;if(!D){const j=bi(C);D=j.FluidRenderer,u=j.createSkyEffect}return{viewer:L,Cesium:C}}function s(L){Number.isFinite(Number(L.threshold))&&(R.value=Number(L.threshold)),Number.isFinite(Number(L.blend))&&(B.value=Number(L.blend)),Number.isFinite(Number(L.lightStrength))&&(z.value=Number(L.lightStrength))}function g(){M("state-change",{isPicking:n.value,hasFluid:w.value,selectedText:r.value})}function y(){const L=i();if(!L)return;const{viewer:C,Cesium:U}=L;Q(),T(C,U),n.value=!0,m=new U.ScreenSpaceEventHandler(C.scene.canvas),m.setInputAction($=>{p(C,U,$.position)},U.ScreenSpaceEventType.LEFT_CLICK)}function p(L,C,U){var oe,ve;const $=E(L,U);if(!$){x.warning("未选中可用地形位置。");return}const j=C.Cartographic.fromCartesian($),ne=C.Math.toDegrees(j.longitude),he=C.Math.toDegrees(j.latitude),fe=Math.max(0,Number(j.height)||0),pe=100,ge=1200,xe=Math.max(0,fe-pe);try{re(),v=new D(L,{lonLat:[ne,he],width:1024,height:1024,dimensions:new C.Cartesian3(1e4,1e4,ge),baseHeight:xe,minHeight:0,maxHeight:ge,customParams:new C.Cartesian4(Number(R.value),Number(B.value),Number(z.value),10)}),d.value=ne,H.value=he,w.value=!0,Q(),(ve=(oe=L.scene).requestRender)==null||ve.call(oe),x.success("水体流体已创建。")}catch(Pe){Q(),x.error("水体流体创建失败",Pe),x.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}}function E(L,C){if(!C)return null;if(L.scene.pickPositionSupported&&typeof L.scene.pickPosition=="function"){const $=L.scene.pickPosition(C);if($)return $}const U=L.camera.getPickRay(C);return U?L.scene.globe.pick(U,L.scene):null}function P(){var L;(L=v==null?void 0:v.config)!=null&&L.customParams&&(v.config.customParams.x=Number(R.value)||0,v.config.customParams.y=Number(B.value)||0,v.config.customParams.z=Number(z.value)||0)}function T(L,C){var U,$;if(!e){const j=L.scene;e={shadows:L.shadows,resolutionScale:L.resolutionScale,msaaSamples:j.msaaSamples,depthTestAgainstTerrain:j.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:j.logarithmicDepthBuffer,highDynamicRange:j.highDynamicRange,fogEnabled:(U=j.fog)==null?void 0:U.enabled,showGroundAtmosphere:j.globe.showGroundAtmosphere,skyAtmosphereShow:($=j.skyAtmosphere)==null?void 0:$.show,enableLighting:j.globe.enableLighting}}L.shadows=!0,L.resolutionScale=1,L.scene.msaaSamples=4,L.scene.globe.depthTestAgainstTerrain=!0,L.scene.logarithmicDepthBuffer=!0,L.scene.highDynamicRange=!0,L.scene.fog&&(L.scene.fog.enabled=!0),L.scene.globe.showGroundAtmosphere=!1,L.scene.skyAtmosphere&&(L.scene.skyAtmosphere.show=!1),L.scene.globe.enableLighting=!0,!F&&u&&(F=u(C),L.scene.postProcessStages.add(F))}function A(L){if(!L||!e)return;const C=L.scene;L.shadows=e.shadows,L.resolutionScale=e.resolutionScale,e.msaaSamples!==void 0&&(C.msaaSamples=e.msaaSamples),C.globe.depthTestAgainstTerrain=e.depthTestAgainstTerrain,C.logarithmicDepthBuffer=e.logarithmicDepthBuffer,C.highDynamicRange=e.highDynamicRange,C.fog&&e.fogEnabled!==void 0&&(C.fog.enabled=e.fogEnabled),C.globe.showGroundAtmosphere=e.showGroundAtmosphere,C.skyAtmosphere&&e.skyAtmosphereShow!==void 0&&(C.skyAtmosphere.show=e.skyAtmosphereShow),C.globe.enableLighting=e.enableLighting,e=null}function Y(){ae(!1),x.success("水体流体已清除。")}function Q(){m&&(m.destroy(),m=null),n.value=!1}function re(){if(v){try{v.destroy()}catch{}v=null,w.value=!1}}function ae(L){var U,$,j;const C=(U=h.getViewer)==null?void 0:U.call(h);if(Q(),re(),d.value=null,H.value=null,C&&F){try{C.scene.postProcessStages.remove(F)}catch{}F=null}L&&C&&A(C),(j=($=C==null?void 0:C.scene)==null?void 0:$.requestRender)==null||j.call($)}function de(){ae(!0),M("close")}return t({startPickHeightMap:y,clearFluid:Y}),(L,C)=>a.headless?te("",!0):(W(),X("div",wi,[b("div",Si,[b("div",{class:"panel-head"},[C[6]||(C[6]=b("span",{class:"panel-title"},"水体流体",-1)),b("button",{class:"panel-close",title:"关闭",onClick:de}," × ")]),b("div",Ti,[b("button",{class:Te(["action-btn primary",{active:n.value}]),onClick:y},ee(n.value?"等待选点":"捕捉高度图"),3),b("button",{class:"action-btn",disabled:!w.value&&!n.value,onClick:Y}," 清除 ",8,Ci)]),r.value?(W(),X("div",Pi,ee(r.value),1)):te("",!0),b("div",Li,[b("label",Fi,[C[7]||(C[7]=b("span",null,"阈值",-1)),ie(b("input",{"onUpdate:modelValue":C[0]||(C[0]=U=>R.value=U),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Se,R.value,void 0,{number:!0}]]),ie(b("input",{"onUpdate:modelValue":C[1]||(C[1]=U=>R.value=U),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Se,R.value,void 0,{number:!0}]])]),b("label",Mi,[C[8]||(C[8]=b("span",null,"混合",-1)),ie(b("input",{"onUpdate:modelValue":C[2]||(C[2]=U=>B.value=U),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Se,B.value,void 0,{number:!0}]]),ie(b("input",{"onUpdate:modelValue":C[3]||(C[3]=U=>B.value=U),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Se,B.value,void 0,{number:!0}]])]),b("label",Ei,[C[9]||(C[9]=b("span",null,"光强",-1)),ie(b("input",{"onUpdate:modelValue":C[4]||(C[4]=U=>z.value=U),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Se,z.value,void 0,{number:!0}]]),ie(b("input",{"onUpdate:modelValue":C[5]||(C[5]=U=>z.value=U),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Se,z.value,void 0,{number:!0}]])])])])]))}},Ai=Be(Ri,[["__scopeId","data-v-305401bc"]]),Z={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Di=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Oi=new Float32Array([0,0,1,0,1,1,0,1]),zi=new Uint16Array([0,1,2,0,2,3]);function ue(a,t,o){return Math.max(t,Math.min(o,a))}function V(a,t){const o=Number(a);return Number.isFinite(o)?o:t}function Ii(a,t){const o=t.getParameter(t.MAX_TEXTURE_SIZE),h=Math.min(2048,o),M=Math.max(1,Math.floor(a)),x=Math.sqrt(M),R=Math.log2(x),B=Number.isFinite(R)?Math.round(R):4;let z=Math.pow(2,B);return z=ue(z,16,h),z}function ki(a){const t=a*a,o=new Float32Array(t*4);for(let h=0;h<t;h+=1){const M=h*4;o[M]=Math.random(),o[M+1]=Math.random(),o[M+2]=Math.random(),o[M+3]=Math.random()}return o}function Ni(a){return new Float32Array(a*a*4)}function Bi(a,t,o,h,M){const x=t.createTexture();if(!x)throw new Error("Failed to create wind atlas texture.");t.bindTexture(t.TEXTURE_2D,x),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,o,h,0,t.RGBA,t.FLOAT,M),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null);let R=!1;return{_context:a,_texture:x,_target:t.TEXTURE_2D,_width:o,_height:h,destroy(){R||(t.deleteTexture(x),R=!0)}}}class Hi{constructor(t,o={}){if(!t||!t.scene||!t.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=t,this._scene=t.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=o.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const h={...Z,...o};this.speedFactor=V(h.speedFactor,Z.speedFactor),this.cullSpeedMin=V(h.cullSpeedMin,Z.cullSpeedMin),this.cullSpeedMax=V(h.cullSpeedMax,Z.cullSpeedMax),this.windSpeedMin=V(h.windSpeedMin,Z.windSpeedMin),this.windSpeedMax=V(h.windSpeedMax,Z.windSpeedMax),this.arrowLength=V(h.arrowLength,Z.arrowLength),this.trailLength=V(h.trailLength,Z.trailLength),this.decaySpeed=V(h.decaySpeed,Z.decaySpeed),this.alphaFactor=V(h.alphaFactor,Z.alphaFactor),this.maxWindSpeed=V(h.maxWindSpeed,Z.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=V(o.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(t){if(!t||typeof t!="object")throw new Error("Wind2D.loadData requires a valid data object.");const o=V(t.longitude,NaN),h=V(t.latitude,NaN),M=Array.isArray(t.altitude)?t.altitude:[],x=Array.isArray(t.sizeMesh)?t.sizeMesh:[],R=Array.isArray(t.count)?t.count:[],B=Array.isArray(t.hspeed)?t.hspeed:[],z=Array.isArray(t.hdir)?t.hdir:[],n=Array.isArray(t.vspeed)?t.vspeed:[];if(!Number.isFinite(o)||!Number.isFinite(h))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const w=M.length;if(w<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(x.length!==w||R.length!==w)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const d=R.map(y=>Math.max(1,Math.floor(V(y,1)))),H=x.map(y=>Math.max(1,V(y,1))),D=M.map(y=>V(y,0)),u=d.reduce((y,p)=>y+p*p,0);if(B.length<u||z.length<u||n.length<u)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=w,this.visibleLayerMin=0,this.visibleLayerMax=w-1,this._altitudes=D.slice(),this._maxNx=Math.max(...d),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*w;const m=new Float32Array(this._atlasWidth*this._atlasHeight*4);let v=0;for(let y=0;y<w;y+=1){const p=d[y],E=p;for(let P=0;P<E;P+=1)for(let T=0;T<p;T+=1){const A=v+P*p+T,Y=((y*this._maxNy+P)*this._atlasWidth+T)*4,Q=Number(B[A]),re=Number(z[A]),ae=Number(n[A]);if(!(Number.isFinite(Q)&&Number.isFinite(re))){m[Y]=0,m[Y+1]=0,m[Y+2]=0,m[Y+3]=0;continue}const L=re*Math.PI/180;m[Y]=Q*Math.sin(L),m[Y+1]=Q*Math.cos(L),m[Y+2]=Number.isFinite(ae)?ae:0,m[Y+3]=1}v+=p*E}this._createOrReplaceWindAtlasTexture(m);const F=Math.max(...H),e=this._maxNx*F,r=e/2/111320,i=h*Math.PI/180,s=Math.max(1e-6,Math.abs(Math.cos(i))),g=e/2/(111320*s);this._bounds={minLon:o-g,maxLon:o+g,minLat:h-r,maxLat:h+r,minHeight:Math.min(...D),maxHeight:Math.max(...D)},this._dataPointCount=u,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(t){const o=Math.max(1,Math.floor(V(t,1))),h=Ii(o,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&h===this._particleTextureSize||(this._particleTextureSize=h,this._particleCount=h*h,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(t){const o=ue(V(t,this.particleDensity),.05,10);if(this.particleDensity=o,this._dataPointCount<=0)return;const h=Math.max(1,Math.floor(this._dataPointCount*o));this.setParticleCount(h)}setBounds(t,o,h,M){const x=V(t,NaN),R=V(o,NaN),B=V(h,NaN),z=V(M,NaN);if(!Number.isFinite(x)||!Number.isFinite(R)||!Number.isFinite(B)||!Number.isFinite(z))return;const n=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};n.minLon=Math.min(x,R),n.maxLon=Math.max(x,R),n.minLat=Math.min(B,z),n.maxLat=Math.max(B,z),this._bounds=n,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const t=(this._bounds.minLon+this._bounds.maxLon)*.5,o=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(t,o,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(t){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const M=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[M],this._updateCommand.execute(this._context,t?t.passState:void 0),this._particleState=M,this._drawCommand.modelMatrix=this._modelMatrix,t&&Array.isArray(t.commandList)&&t.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(t){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Bi(this._context,this._gl,this._atlasWidth,this._atlasHeight,t)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const t=this._Cesium,o=this._particleTextureSize,h=ki(o),M=Ni(o);for(let x=0;x<2;x+=1){this._particlePositionTextures[x]=new t.Texture({context:this._context,width:o,height:o,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:o,height:o,arrayBufferView:h},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[x]=new t.Texture({context:this._context,width:o,height:o,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{width:o,height:o,arrayBufferView:M},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.NEAREST,magnificationFilter:t.TextureMagnificationFilter.NEAREST})}),this._framebuffers[x]=new t.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[x],this._velocityTextures[x]],destroyAttachments:!1});const R=this._framebuffers[x]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,R),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let t=0;t<2;t+=1)this._framebuffers[t]&&(this._framebuffers[t].destroy(),this._framebuffers[t]=null),this._particlePositionTextures[t]&&(this._particlePositionTextures[t].destroy(),this._particlePositionTextures[t]=null),this._velocityTextures[t]&&(this._velocityTextures[t].destroy(),this._velocityTextures[t]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const t=this._Cesium,o=t.Buffer.createVertexBuffer({context:this._context,typedArray:Di,usage:t.BufferUsage.STATIC_DRAW}),h=t.Buffer.createVertexBuffer({context:this._context,typedArray:Oi,usage:t.BufferUsage.STATIC_DRAW}),M=t.Buffer.createIndexBuffer({context:this._context,typedArray:zi,usage:t.BufferUsage.STATIC_DRAW,indexDatatype:t.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:o,componentsPerAttribute:2},{index:1,vertexBuffer:h,componentsPerAttribute:2}],indexBuffer:M})}_buildParticleVertexArray(){const t=this._Cesium,o=new Float32Array(this._drawVertexCount);for(let h=0;h<o.length;h+=1)o[h]=h;this._particleVertexBuffer=t.Buffer.createVertexBuffer({context:this._context,typedArray:o,usage:t.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new t.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const t=this._Cesium,o=`#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}`,h=`#version 300 es
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
}`;this._updateProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:o,fragmentShaderSource:h,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const t=this._Cesium,o=`#version 300 es
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
}`,h=`#version 300 es
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
}`;this._drawProgram=t.ShaderProgram.fromCache({context:this._context,vertexShaderSource:o,fragmentShaderSource:h,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const t=this._Cesium,o=t.RenderState.fromCache({viewport:new t.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:o,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const t=this._Cesium,o=t.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:t.BlendingState.ALPHA_BLEND});this._drawCommand=new t.DrawCommand({owner:this,primitiveType:t.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:o,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:t.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const t=ue(Math.floor(V(this.visibleLayerMin,0)),0,this._layerCount-1),o=ue(Math.floor(V(this.visibleLayerMax,this._layerCount-1)),t,this._layerCount-1);return{min:t,max:o}}_normalizeSpeedRange(t,o){const h=Math.max(1e-4,V(this.maxWindSpeed,Z.maxWindSpeed)),M=ue(V(t,0)/h,0,1),x=ue(V(o,h)/h,0,1);return{min:Math.min(M,x),max:Math.max(M,x)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>V(this.speedFactor,Z.speedFactor),maxWindSpeed:()=>Math.max(1e-4,V(this.maxWindSpeed,Z.maxWindSpeed)),decaySpeed:()=>ue(V(this.decaySpeed,Z.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>V(this.arrowLength,Z.arrowLength),trailLength:()=>V(this.trailLength,Z.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>ue(V(this.alphaFactor,Z.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Ui(a){if(!a)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:t,DeveloperError:o,Ellipsoid:h,Resource:M,HeightmapTerrainData:x,Rectangle:R,TileAvailability:B,CustomHeightmapTerrainProvider:z}=a;function n(D,u,m,v,F,e){const r=D.tileXYToRectangle(m,v,F);return t(R.intersection(r,u,e))}function w(D){const u=[[[0,0,1,0]]],m=new B(D.tilingScheme,19);for(let v=0;v<u.length;v++){const F=u[v];for(let e=0;e<F.length;e++){const r=F[e];m.addAvailableTileRange(v,r[0],r[1],r[2],r[3])}}return m}function d(D,u,m,v,F){const e=new x({buffer:D._transformBuffer(u),width:D._width,height:D._height,childTileMask:D._getChildTileMask(v,F,m),structure:D._terrainDataStructure});return e._skirtHeight=6e3,D.availability.addAvailableTileRange(m,v,F,v,F),e}class H extends z{constructor(u={}){if(super({...u,ellipsoid:h.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!t(u.url))throw new o("options.url is required.");this._dataType=u.dataType??"int16",this._url=u.url,this._subdomains=u.subdomains,this._token=u.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=w(this)}get availability(){return this._availability}requestTileGeometry(u,m,v,F){if(v>=this._bottomLevel)return Promise.reject(new Error(`Level ${v} is outside supported range.`));if(v<this._topLevel)return Promise.resolve(new x({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(u,m,v),structure:this._terrainDataStructure}));let e=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const i=this._subdomains[(u+m)%this._subdomains.length];e=e.replace("{s}",i)}e=e.replace("{token}",this._token).replace("{x}",u).replace("{y}",m).replace("{z}",v+1);const r=M.fetchArrayBuffer({url:e,request:F});if(r)return r.then(i=>i.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Rt.inflate(i)).then(i=>d(this,i,v,u,m))}getTileDataAvailable(u,m,v){return v<this._bottomLevel}_transformBuffer(u){let m=2;this._dataType==="float"&&(m=4);const v=u;if(v.length!==22500*m)return null;const F=new ArrayBuffer(m),e=new DataView(F),r=this._width,i=this._height,s=new Uint8Array(r*i*4);for(let g=0;g<i;g++)for(let y=0;y<r;y++){const p=Math.floor(149*g/(i-1)),E=Math.floor(149*y/(r-1)),P=m*(150*p+E);let T;m===4?(e.setInt8(0,v[P]),e.setInt8(1,v[P+1]),e.setInt8(2,v[P+2]),e.setInt8(3,v[P+3]),T=e.getFloat32(0,!0)):T=v[P]+256*v[P+1],(T>1e4||T<-2e3)&&(T=0);const A=(T+1e3)/.001,Y=4*(g*r+y);s[Y]=A/65536,s[Y+1]=(A-256*s[Y]*256)/256,s[Y+2]=A-256*s[Y]*256-256*s[Y+1],s[Y+3]=255}return s}_getVHeightBuffer(){let u=this._vHeightBuffer;if(!t(u)){u=new Uint8ClampedArray(this._width*this._height*4);for(let m=0;m<this._width*this._height*4;)u[m++]=15,u[m++]=66,u[m++]=64,u[m++]=255;this._vHeightBuffer=u}return u}_getChildTileMask(u,m,v){const F=new R,e=this._tilingScheme,r=this._rectangles,i=e.tileXYToRectangle(u,m,v);let s=0;for(let g=0;g<r.length&&s!==15;g++){const y=r[g];if(y.maxLevel<=v)continue;const p=y.rectangle,E=R.intersection(p,i,F);t(E)&&(n(e,p,2*u,2*m,v+1,F)&&(s|=4),n(e,p,2*u+1,2*m,v+1,F)&&(s|=8),n(e,p,2*u,2*m+1,v+1,F)&&(s|=1),n(e,p,2*u+1,2*m+1,v+1,F)&&(s|=2))}return s}}return H}function qe(a){return At.parse(a)}const Vi=qe(`
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
`).root.lookup("GEOPOI.PBPOITile"),Wi=qe(`
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
`).root.lookup("GEOPOI.PBPOITile"),Gi=qe(`
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
`).root.lookup("GEOPOI.PBPOITile");function tt(a,t){return t.minX>=a.minX&&t.minX<=a.maxX&&t.minY>=a.minY&&t.minY<=a.maxY||t.maxX>=a.minX&&t.maxX<=a.maxX&&t.maxY>=a.minY&&t.maxY<=a.maxY||t.minX>=a.minX&&t.minX<=a.maxX&&t.maxY>=a.minY&&t.maxY<=a.maxY||t.maxX>=a.minX&&t.maxX<=a.maxX&&t.minY>=a.minY&&t.minY<=a.maxY}function Xi(a){let t=0;for(let o=0;o<a.length;o++)a.charAt(o).match(/[^\x00-\xff]/gi)!=null?t+=2:t+=1;return t}function it(a,t){const o=a.x,h=a.y,M=a.width,x=a.height,R=t.x,B=t.y,z=t.width,n=t.height;return!(R<=o&&R+z<=o||o<=R&&o+M<=R||B<=h&&B+n<=h||h<=B&&h+x<=B)}function qi(a){const t={stringTable:[],pois:[],enumGeometryType:[{ePoint:0},{eMultiLineString:1},{ePolygon:2}],enumZCoordType:[{eCloseGround:0},{eCloseSeaSurface:1},{eRelativelyGround:2},{eAbsolute:3}]};let o;const h=new Uint8Array(a);try{o=Gi.decode(h)}catch{}if(!o)try{o=Wi.decode(h)}catch{try{o=Vi.decode(h)}catch{}}t.version=parseInt(o.Version.toString(),10),t.titleKey=parseInt(o.TileKey.toString(),10);for(let x=0;x<o.StringTable.s.length;x++)t.stringTable.push(o.StringTable.s[x].toString());let M=o.POIS.length;for(;M--;){const x=o.POIS[M],R={oid:`${parseInt(x.OID.toString(),10)}_${t.titleKey}`,name:x.Name.toString(),symbolID:parseInt(x.SymbolID.toString(),10),displayHeight:x.DisplayHeight,shiningColor:x.ShiningColor,fontNameIndex:x.FontNameIndex,fontSize:x.FontSize,fontColor:x.FontColor,zCoordType:x.ZCoordType??void 0,geometryType:x.GeometryType,coordinate:x.Coordinates,priority:typeof x.Priority>"u"?null:x.Priority,interates:typeof x.Interates>"u"?null:x.Interates,fontStyle:typeof x.FontStyle>"u"?null:x.FontStyle,shiningSize:typeof x.ShiningSize>"u"?null:x.ShiningSize};t.pois.push(R)}return t}function Yi(a){if(!a)throw new Error("Cesium is required to create GeoWTFS.");const{Cartesian2:t,Cartesian3:o,Color:h,createGuid:M,defined:x,DeveloperError:R,Entity:B,HorizontalOrigin:z,LabelStyle:n,Math:w,SceneTransforms:d,VerticalOrigin:H,combine:D}=a,u={font:"28px sans-serif",fontSize:28,fillColor:h.WHITE,scale:.5,outlineColor:h.BLACK,outlineWidth:5,style:n.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:h.RED,backgroundPadding:new t(10,10),horizontalOrigin:z.CENTER,verticalOrigin:H.TOP,eyeOffset:o.ZERO,pixelOffset:new t(0,8)},m={horizontalOrigin:z.CENTER,verticalOrigin:H.CENTER,eyeOffset:o.ZERO,pixelOffset:t.ZERO,alignedAxis:o.ZERO,color:h.WHITE,rotation:0,scale:1,width:18,height:18};class v{constructor(e,r={}){if(!x(e))throw new R("viewer is required.");if(!x(r.url))throw new R("options.url is required.");this.viewer=e,this.proxy=r.proxy,this.url=r.url,this.icoUrl=r.icoUrl??r.iconUrl,this.metadata=r.metadata,this.roadMetadata=r.roadMetadata,this.roadUrl=r.roadUrl,this.labelGraphics=D(r.labelGraphics,u,!0),this.billboardGraphics=D(r.billboardGraphics,m,!0),this.aotuCollide=!!r.aotuCollide,this.collisionPadding=r.collisionPadding??[3,5,3,5],this.serverFirstStyle=!!r.serverFirstStyle,this.subdomains=r.subdomains||[],this.tileCache=[],this.labelCache=[],this._isInitial=!1,this._latelyGrid=[],this._latelyRefreshStamp=0,this._latelyCollisionStamp=0;const i=M();this._UUID=`GEO_WTFS_LABEL_${i}`,this._UUIDRoad=`GEO_WTFS_LABEL_ROAD_${i}`,this.viewer.camera.percentageChanged=.18,this.bindEvent()}bindEvent(){this.viewer.scene.camera.moveEnd.addEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.addEventListener(this._changed,this)}_moveEnd(){clearTimeout(this._timer);const e=this.viewer.scene.globe._surface;if(e._tilesToRender.length<2||e._tileLoadQueueHigh.length>0)this._timer=setTimeout(()=>{this._moveEnd()},100);else{const r=this.getTilesToRender();if(this.compareArray(r,this._latelyGrid))return;this._queueCall(r),this.delaySynchronous()}}_changed(){const e=new Date().getTime(),r=e-this._latelyRefreshStamp,i=e-this._latelyCollisionStamp;r>300&&this._moveEnd(),i>150&&this.collisionDetection()}getTilesToRender(){const e=this.viewer.scene.globe._surface._tilesToRender.map(i=>({x:i.x,y:i.y,level:i.level,boundBox:{minX:w.toDegrees(i.rectangle.west),minY:w.toDegrees(i.rectangle.south),maxX:w.toDegrees(i.rectangle.east),maxY:w.toDegrees(i.rectangle.north)}})).sort((i,s)=>s.level-i.level),r=[e[0].level];for(let i=0;i<e.length;i++)e[i].level!==r[r.length-1]&&(r.push(e[i].level),r.length>4&&(e.splice(i,1/0),i--));return e}compareArray(e,r){for(let i=0;i<e.length;i++){let s=!1;for(let g=0;g<r.length;g++)if(e[i].x===r[g].x&&e[i].y===r[g].y&&e[i].level===r[g].level){s=!0;break}if(!s)return!1}for(let i=0;i<r.length;i++){let s=!1;for(let g=0;g<e.length;g++)if(r[i].x===e[g].x&&r[i].y===e[g].y&&r[i].level===e[g].level){s=!0;break}if(!s)return!1}return!0}_queueCall(e){this._latelyGrid=e,this._latelyRefreshStamp=new Date().getTime();let r=e.length;for(;r--;){const i=e[r];if(this.metadata&&tt(this.metadata.boundBox,i.boundBox)){if(this.metadata.minLevel>i.level+1||this.metadata.maxLevel<i.level+1)return;const s=this.getCacheTile(i.x,i.y,i.level,0);if(s)this.addLabelAndIco(s);else{const g=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",y=this.getTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",g),p=new XMLHttpRequest;p.open("GET",y,!0),p.responseType="arraybuffer";const E=this;p.onload=function(){if(!(p.status<200||p.status>=300)){const P=E.cutString(p.response);let T;P?(T=qi(P),T.x=this.tile.x,T.y=this.tile.y,T.z=this.tile.z,T.t=0,E.addCacheTile(T),E.addLabelAndIco(T)):(T={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:0},E.addCacheTile(T),E.delaySynchronous())}},p.onerror=function(P){},p.send(),p.tile={x:i.x,y:i.y,z:i.level+1}}}if(this.roadMetadata&&tt(this.roadMetadata.boundBox,i.boundBox)){if(this.roadMetadata.minLevel>i.level+1||this.roadMetadata.maxLevel<i.level+1)return;const s=this.getCacheTile(i.x,i.y,i.level,0);if(s)this.addLabelAndIco(s);else{const g=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",y=this.getRoadTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",g),p=new XMLHttpRequest;p.open("GET",y,!0),p.responseType="json";const E=this;p.onload=function(){if(!(p.status<200||p.status>=300)){const P=p.response;let T;P?(T={pois:P.map(A=>({oid:`${A.LabelPoint.X}_${A.LabelPoint.Y}`,name:A.Feature.properties.Name,coordinate:[A.LabelPoint.X,A.LabelPoint.Y,A.LabelPoint.Z?A.LabelPoint.Z:0]})),x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},E.addCacheTile(T),E.addLabelAndIco(T)):(T={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},E.addCacheTile(T),E.delaySynchronous())}},p.onerror=function(P){},p.send(),p.tile={x:i.x,y:i.y,z:i.level+1}}}}}cutString(e){if(!e)return"";const r=e.byteLength;return r<=28?"":e.slice(19,r-9)}addCacheTile(e){this.tileCache.length>999&&this.tileCache.splice(0,500),this.removeCacheTile(e.x,e.y,e.z,e.t),this.tileCache.push(e)}getCacheTile(e,r,i,s){let g=this.tileCache.length;for(;g--;){const y=this.tileCache[g];if(y.x===e&&y.y===r&&y.z===i&&y.t===s)return y}return null}removeCacheTile(e,r,i,s){let g=this.tileCache.length;for(;g--;){const y=this.tileCache[g];if(y.x===e&&y.y===r&&y.z===i&&y.t===s){this.tileCache.splice(g,1);return}}}getCacheLabel(e){let r=this.labelCache.length;for(;r--;){const i=this.labelCache[r];if(i.name===this._UUID&&i.oid===e)return i}return null}addCacheLabel(e){this.labelCache.length>999&&this.labelCache.splice(0,250),this.removeCacheLabel(e.oid),e.timestamp=new Date().getTime(),this.labelCache.push(e)}removeCacheLabel(e){let r=this.labelCache.length;for(;r--;)if(this.labelCache[r].name===this._UUID&&this.labelCache[r].oid===e){this.labelCache.splice(r,1);return}}HexadecimalConversion(e){if(e===4278190080)return"#000000";let r=4278190080|parseInt(-Number(e),10),i="";if(r=r.toString(16).substring(1),r.length<6)for(let s=0;s<6-r.length;s++)i+="0";return`#${i}${r}`}addLabelAndIco(e){if(e.pois&&e.pois.length){let r=e.pois.length;for(;r--;){const i=e.pois[r];let s=this.getCacheLabel(i.oid);s||(s=this.createLabel(i,e)),s&&this.addCacheLabel(s)}}this.delaySynchronous()}createLabel(e,r){if(!e)return;const i={show:!0,position:o.fromDegrees(...e.coordinate),label:{text:e.name}};if(Object.assign(i.label,this.labelGraphics),this.serverFirstStyle&&(e.fontSize!==void 0&&(i.label.font=`${e.fontSize}px `,e.fontNameIndex!==void 0&&r.stringTable&&r.stringTable[e.fontNameIndex]?i.label.font+=r.stringTable[e.fontNameIndex]:i.label.font+="sans-serif",!this.labelGraphics.bold&&e.fontStyle!==1&&e.fontStyle!==3&&(i.label.font=`bold ${i.label.font}`),e.fontStyle!==2&&e.fontStyle!==3&&(i.label.font=`italic ${i.label.font}`)),e.fontColor!==void 0&&(i.label.fillColor=h.fromCssColorString(this.HexadecimalConversion(e.fontColor))),e.shiningColor!==void 0&&(i.label.outlineColor=h.fromCssColorString(this.HexadecimalConversion(e.shiningColor))),typeof e.shiningSize=="number"&&(i.label.outlineWidth=e.shiningSize),e.showBackground!==void 0&&(i.label.showBackground=e.showBackground),e.backgroundColor!==void 0&&(i.label.backgroundColor=e.backgroundColor),e.backgroundPadding!==void 0&&(i.label.backgroundPadding=e.backgroundPadding),e.eyeOffset!==void 0&&(i.label.eyeOffset=e.eyeOffset),e.pixelOffset!==void 0&&(i.label.pixelOffset=e.pixelOffset),e.style!==void 0&&(i.label.style=e.style),e.scale!==void 0&&(i.label.scale=e.scale),r.t||(e.verticalOrigin!==void 0&&(i.label.verticalOrigin=e.verticalOrigin),e.horizontalOrigin!==void 0&&(i.label.horizontalOrigin=e.horizontalOrigin))),e.symbolID!==void 0&&e.symbolID>-1&&this.icoUrl){const g=this.subdomains.length?(r.x+r.y)%this.subdomains.length:"";i.billboard={image:this.getIcoUrl().replace("{id}",e.symbolID).replace("{s}",this.subdomains[g])},Object.assign(i.billboard,this.billboardGraphics),this.serverFirstStyle&&(e.displayHeight!==void 0&&(i.billboard.width=e.displayHeight,i.billboard.height=e.displayHeight),e.eyeOffset!==void 0&&(i.billboard.eyeOffset=e.eyeOffset),e.pixelOffset!==void 0&&(i.billboard.pixelOffset=e.pixelOffset),e.rotation!==void 0&&(i.billboard.rotation=e.rotation),e.alignedAxis!==void 0&&(i.billboard.alignedAxis=e.alignedAxis),e.color!==void 0&&(i.billboard.color=e.color),e.scale!==void 0&&(i.billboard.scale=e.scale),r.t||(e.verticalOrigin!==void 0&&(i.billboard.verticalOrigin=e.verticalOrigin),e.horizontalOrigin!==void 0&&(i.billboard.horizontalOrigin=e.horizontalOrigin)))}r.t&&(i.label.verticalOrigin=H.CENTER,i.label.horizontalOrigin=z.CENTER,i.billboard&&(i.billboard.verticalOrigin=H.CENTER,i.billboard.horizontalOrigin=z.CENTER));const s=new B(i);return s.name=r.t?this._UUIDRoad:this._UUID,s.oid=e.oid,s.priority=e.priority||0,s.xyz=`${r.x}_${r.y}_${r.z-1}`,s}getIcoUrl(){return`${this.proxy?this.proxy.proxy:""}${this.icoUrl}`}getTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.url}`}getRoadTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.roadUrl}`}delaySynchronous(){clearTimeout(this._timer2),this._timer2=setTimeout(()=>{this.synchronousLabel()},100)}synchronousLabel(){let e=this.labelCache.length;for(;e--;){const r=this.labelCache[e];r.timestamp>=this._latelyRefreshStamp&&!this.viewer.entities.contains(r)&&(this._isInitial&&this.aotuCollide&&(r.show=!1),this.viewer.entities.add(r))}if(!this._isInitial){let r=this.viewer.entities.values.length-1;for(;r>=0;){const i=this.viewer.entities.values[r];i&&i.name&&(i.name===this._UUID||i.name===this._UUIDRoad)&&i.timestamp<this._latelyRefreshStamp&&this.viewer.entities.remove(i),r--}this.aotuCollide&&this.collisionDetection()}}collisionDetection(){const e=this.viewer.entities.values,r=[],i=[];let s=e.length;for(;s--;){const p=e[s];if(p.name&&(p.name===this._UUID||p.name===this._UUIDRoad)){const E=this.getScreenCoordinates(p.position.getValue(0));p.show=!0,p.collisionBox=this.getLabelReact({point:E,entity:p});let P=null,T=r.length;for(;!P&&T--;)r[T].xyz===p.xyz&&(P=r[T]);P||(P={xyz:p.xyz,entities:[]},r.push(P)),P.entities.push(p)}}let g=r.length;for(;g--;){const p=r[g];p.entities.sort((E,P)=>E.priority-P.priority);for(let E=0;E<p.entities.length;E++){const P=p.entities[E];if(P.show){for(let T=E+1;T<p.entities.length;T++)p.entities[T].show&&it(P.collisionBox,p.entities[T].collisionBox)&&(p.entities[T].show=!1);i.push(P)}}}let y=i.length;for(;y--;)if(i[y].show){i.sort((p,E)=>p.priority-E.priority);for(let p=y+1;p<i.length;p++)i[p].show&&it(i[y].collisionBox,i[p].collisionBox)&&(i[p].show=!1)}}getScreenCoordinates(e){const r=this.viewer.scene;return!r||!e?null:typeof d.worldToDrawingBufferCoordinates=="function"?d.worldToDrawingBufferCoordinates(r,e):typeof d.worldToWindowCoordinates=="function"?d.worldToWindowCoordinates(r,e):typeof d.wgs84ToWindowCoordinates=="function"?d.wgs84ToWindowCoordinates(r,e):null}getLabelReact(e){const{point:r,entity:i}=e;let s=parseInt(i.label.font,10);s=s>0?s:15;const g=i.label.text.getValue(0).split(`
`);let y=0;for(let P=0;P<g.length;P++){const T=Xi(g[P])/2;y<T&&(y=T)}const p=i.billboard?i.billboard.width.getValue(0)*i.billboard.scale.getValue(0):1,E=i.billboard?i.billboard.height.getValue(0)*i.billboard.scale.getValue(0):1;return{x:(r?r.x:-999)-p/2-this.collisionPadding[3],y:(r?r.y:-999)-E/2-this.collisionPadding[0],width:s*i.label.scale.getValue(0)*y+i.label.pixelOffset.getValue(0).x+p+this.collisionPadding[1],height:s*i.label.scale.getValue(0)*y+i.label.pixelOffset.getValue(0).y+p+this.collisionPadding[2]}}initTDT(e,r){let i=0;this._isInitial=!0,this._queueCall(e);const s=setInterval(()=>{i>3&&(this._isInitial=!1,clearInterval(s),typeof r=="function"&&r()),i%2===0&&this.aotuCollide&&this.collisionDetection(),i++},600);return this}getPropertyValue(e,r,i,s){return r[e]!==void 0?r[e]:i[e]!==void 0?i[e]:s}unbindEvent(){this.viewer.scene.camera.moveEnd.removeEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.removeEventListener(this._changed,this)}activate(){this._latelyGrid=[],this._moveEnd()}destroy(){let e=this.viewer.entities.values.length;for(;e--;){const r=this.viewer.entities.values[e];r.name&&(r.name===this._UUID||r.name===this._UUIDRoad)&&(this.viewer.entities.remove(r),e--)}this.viewer.camera.percentageChanged=.5,this.unbindEvent(),this.handler=this.handler&&this.handler.destroy(),this.proxy=void 0,this.viewer=void 0,this.url=void 0,this.labelGraphics=void 0,this.billboardGraphics=void 0,this.aotuCollide=void 0,this.collisionPadding=void 0,this.tileCache=void 0,this.labelCache=void 0,this._latelyGrid=void 0,this._latelyRefreshStamp=void 0,this._roadTileset=void 0}getLabelVisibility(e){if(!e)return!1;const r=this.viewer.canvas.getBoundingClientRect();return!(e.x<-10||e.x>r.right+10||e.y<-10||e.y>r.bottom+10)}}return v}const $i={class:"map-controls-group"},ji={class:"mouse-position-content"},Ae="https://t{s}.tianditu.gov.cn/",Ge="https://cdn.jsdelivr.net/npm/cesium@1.110/Build/Cesium/",Ki={__name:"CesiumContainer",setup(a){let t=null;const o="4267820f43926eaf808d61dc07269beb",h="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMzRhZjM0ZC02MmYxLTRhNzgtYTkxNi00YWM2MmMxNmNhMWIiLCJpZCI6MTkzNjkxLCJpYXQiOjE3MDY5NDA2ODF9.mKu1zCK-GOjwDem9-J_Ksv0xEGNsN1zGuShYzOuXJsg",M=["0","1","2","3","4","5","6","7"],x=`${Ge}Cesium.js`,R=`${Ge}Widgets/widgets.css`,B={boundBox:{minX:-180,minY:-90,maxX:180,maxY:90},minLevel:1,maxLevel:20},z=[{x:6,y:1,level:2,boundBox:{minX:90,minY:0,maxX:135,maxY:45}},{x:7,y:1,level:2,boundBox:{minX:135,minY:0,maxX:180,maxY:45}},{x:6,y:0,level:2,boundBox:{minX:90,minY:45,maxX:135,maxY:90}},{x:7,y:0,level:2,boundBox:{minX:135,minY:45,maxX:180,maxY:90}},{x:5,y:1,level:2,boundBox:{minX:45,minY:0,maxX:90,maxY:45}},{x:4,y:1,level:2,boundBox:{minX:0,minY:0,maxX:45,maxY:45}},{x:5,y:0,level:2,boundBox:{minX:45,minY:45,maxX:90,maxY:90}},{x:4,y:0,level:2,boundBox:{minX:0,minY:45,maxX:45,maxY:90}},{x:6,y:2,level:2,boundBox:{minX:90,minY:-45,maxX:135,maxY:0}},{x:6,y:3,level:2,boundBox:{minX:90,minY:-90,maxX:135,maxY:-45}},{x:7,y:2,level:2,boundBox:{minX:135,minY:-45,maxX:180,maxY:0}},{x:5,y:2,level:2,boundBox:{minX:45,minY:-45,maxX:90,maxY:0}},{x:4,y:2,level:2,boundBox:{minX:0,minY:-45,maxX:45,maxY:0}},{x:3,y:1,level:2,boundBox:{minX:-45,minY:0,maxX:0,maxY:45}},{x:3,y:0,level:2,boundBox:{minX:-45,minY:45,maxX:0,maxY:90}},{x:2,y:0,level:2,boundBox:{minX:-90,minY:45,maxX:-45,maxY:90}},{x:0,y:1,level:2,boundBox:{minX:-180,minY:0,maxX:-135,maxY:45}},{x:1,y:0,level:2,boundBox:{minX:-135,minY:45,maxX:-90,maxY:90}},{x:0,y:0,level:2,boundBox:{minX:-180,minY:45,maxX:-135,maxY:90}}];let n=null,w=null,d=null,H=null,D=null,u=0;const m=q(null),v=q("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米"),F=q(!1),e=q(null),r=q("tianditu"),i=q("tianditu"),s=[],g=Xe(),y=[{value:"tianditu",label:"天地图"},{value:"google",label:"Google"}],p=[{value:"tianditu",label:"天地图地形"},{value:"cesiumWorld",label:"Cesium世界地形"},{value:"ellipsoid",label:"平面地形"}],E=q({fog:!0,hbao:!1,tiltShift:!0,atmosphere:!0}),P=q({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1}),T=q({threshold:10,blend:20,lightStrength:3}),A=q({isPicking:!1,hasFluid:!1,selectedText:""}),Y=nt(()=>[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气",status:E.value.atmosphere||E.value.fog?"启用":"关闭",statusTone:E.value.atmosphere||E.value.fog?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:E.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:E.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:E.value.tiltShift},{id:"atmosphere",label:"大气",type:"toggle",value:E.value.atmosphere}]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:m.value?"已加载":"未加载",statusTone:m.value?"success":"neutral",actions:[{id:"load",label:m.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!m.value}],controls:[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:P.value.speedFactor,displayValue:P.value.speedFactor.toFixed(1),disabled:!m.value},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:P.value.arrowLength,displayValue:`${Math.round(P.value.arrowLength/1e3)} km`,disabled:!m.value},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:P.value.trailLength,displayValue:`${Math.round(P.value.trailLength/1e3)} km`,disabled:!m.value},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:P.value.alphaFactor,displayValue:P.value.alphaFactor.toFixed(2),disabled:!m.value}]},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:A.value.isPicking?"等待选点":A.value.hasFluid?"已创建":"未创建",statusTone:A.value.isPicking?"warning":A.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:A.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:A.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!A.value.hasFluid&&!A.value.isPicking}],controls:[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:T.value.threshold,displayValue:Number(T.value.threshold).toFixed(2)},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:T.value.blend,displayValue:Number(T.value.blend).toFixed(2)},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:T.value.lightStrength,displayValue:Number(T.value.lightStrength).toFixed(2)}]}]);rt(()=>{ae()}),Ce(r,f=>{!n||!t||pe(f)}),Ce(i,async f=>{!n||!t||await xe(f)});function Q(){var f,S;if(m.value){try{(S=(f=n==null?void 0:n.scene)==null?void 0:f.primitives)==null||S.remove(m.value)}catch{}m.value.destroy(),m.value=null}}function re(){if(d){try{d.destroy()}catch{}d=null}}at(()=>{if(F.value=!1,w&&(w.destroy(),w=null),Q(),re(),H&&(clearInterval(H),H=null),D&&(D.remove(),D=null),n){try{n.destroy()}catch{}n=null}});async function ae(){dt("正在初始化 3D 场景...");try{if(await C(),!t||!document.getElementById("cesiumContainer"))return;U(),$();const f=j(),S=await ge();F.value=!0,f&&S?g.success("天地图基础影像与地形加载成功。"):g.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0}),r.value}catch(f){g.error("Cesium 运行时加载失败",f),g.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{ht()}}function de(){return n}function L(){return t||window.Cesium}async function C(){if(window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Ge),await l(R,"cesium-widgets-style"),await c(x,"cesium-runtime-script"),t=window.Cesium,!t)throw new Error("Cesium global 未找到")}function U(){var k;const f=typeof t.Map=="function"?t.Map:t.Viewer;if(n=new f("cesiumContainer",{imageryProvider:!1,terrainProvider:void 0,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,selectionIndicator:!1,timeline:!1,animation:!1,sceneModePicker:!1,navigationHelpButton:!1,shouldAnimate:!0}),_(0),(k=n._cesiumWidget)!=null&&k._creditContainer&&(n._cesiumWidget._creditContainer.style.display="none"),n.scene.globe.terrainExaggeration=1,n.scene.globe.terrainExaggerationRelativeHeight=0,n.scene.globe.showGroundAtmosphere=!0,n.scene.globe.depthTestAgainstTerrain=!0,(()=>{var K;(K=n._cesiumWidget)!=null&&K._creditContainer&&(n._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",n._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(N=>{N.style.cssText="display: none !important; visibility: hidden !important;",N.innerHTML=""}),n.scene&&n.scene.frameState&&n.scene.frameState.creditDisplay&&(n.scene.frameState.creditDisplay.hasCredits=()=>!1,n.scene.frameState.creditDisplay.destroy=()=>{})})(),H=setInterval(()=>{const I=document.querySelector(".cesium-credit-container");I&&I.innerHTML.length>0&&(I.innerHTML="",I.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override")){const I=document.createElement("style");I.id="cesium-credit-override",I.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(I),D=I}}function $(){w=new t.ScreenSpaceEventHandler(n.scene.canvas),w.setInputAction(f=>{const S=n.camera.getPickRay(f.endPosition);if(!S)return;const k=n.scene.globe.pick(S,n.scene);if(k){const I=t.Cartographic.fromCartesian(k),K=t.Math.toDegrees(I.longitude).toFixed(6),N=t.Math.toDegrees(I.latitude).toFixed(6),J=I.height.toFixed(2);v.value=`经度: ${K}, 纬度: ${N}, 海拔: ${J}米`}},t.ScreenSpaceEventType.MOUSE_MOVE),w.setInputAction(f=>{const S=f.endPosition,k=f.startPosition;if(!t.defined(n.terrainProvider))return;const I=n.scene.globe.ellipsoid;if(!n.camera.pickEllipsoid(k,I)){const N=n.camera;N.rotate(t.Cartesian3.UNIT_X,-.002*(S.y-k.y)),N.rotate(t.Cartesian3.UNIT_Y,-.002*(S.x-k.x))}},t.ScreenSpaceEventType.RIGHT_DRAG),w.setInputAction(()=>{},t.ScreenSpaceEventType.RIGHT_DOWN),w.setInputAction(()=>{},t.ScreenSpaceEventType.RIGHT_UP)}function j(){return pe(r.value)}function ne(){if(n!=null&&n.imageryLayers)for(;s.length;){const f=s.pop();try{n.imageryLayers.remove(f,!0)}catch{}}}function he(){return[new t.UrlTemplateImageryProvider({url:`${Ae}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${o}`,subdomains:M,tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:18}),new t.UrlTemplateImageryProvider({url:`${Ae}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${o}`,subdomains:M,tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:10})]}function fe(){return[new t.UrlTemplateImageryProvider({url:`${mt}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:20})]}function pe(f){var S,k;if(!n||!t)return!1;try{return ne(),(f==="google"?fe():he()).forEach(K=>{s.push(n.imageryLayers.addImageryProvider(K))}),f==="tianditu"?ve():re(),(k=(S=n.scene).requestRender)==null||k.call(S),!0}catch(I){return g.error("地图源切换失败",I),!1}}function ge(){return xe(i.value)}async function xe(f){var I,K,N,J,Fe,Me;if(!n||!t)return!1;const S=++u;if(f==="ellipsoid")return n.terrainProvider=new t.EllipsoidTerrainProvider,n.scene.globe.depthTestAgainstTerrain=!1,(K=(I=n.scene).requestRender)==null||K.call(I),!0;if(f==="cesiumWorld")try{const se=await oe();return S!==u?!1:(n.terrainProvider=se,n.scene.globe.depthTestAgainstTerrain=!0,(J=(N=n.scene).requestRender)==null||J.call(N),!0)}catch(se){return S!==u||(n.terrainProvider=new t.EllipsoidTerrainProvider,n.scene.globe.depthTestAgainstTerrain=!1,g.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),g.error("Cesium 世界地形初始化失败",se)),!1}const k=Ui(t);try{return n.terrainProvider=new k({url:`${Ae}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:M,token:o}),n.scene.globe.depthTestAgainstTerrain=!0,(Me=(Fe=n.scene).requestRender)==null||Me.call(Fe),!0}catch(se){return n.terrainProvider=new t.EllipsoidTerrainProvider,n.scene.globe.depthTestAgainstTerrain=!1,g.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),g.error("官方地形初始化失败",se),!1}}async function oe(){var S,k;t.Ion&&(t.Ion.defaultAccessToken=h);const f={requestWaterMask:!1,requestVertexNormals:!0};if(typeof t.createWorldTerrainAsync=="function")return t.createWorldTerrainAsync(f);if(typeof t.createWorldTerrain=="function")return t.createWorldTerrain(f);if(typeof((S=t.CesiumTerrainProvider)==null?void 0:S.fromIonAssetId)=="function")return t.CesiumTerrainProvider.fromIonAssetId(1,f);if((k=t.IonResource)!=null&&k.fromAssetId&&t.CesiumTerrainProvider){const I=await t.IonResource.fromAssetId(1);return new t.CesiumTerrainProvider({url:I,...f})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}function ve(){if(d)return!0;try{const f=Yi(t);return d=new f(n,{subdomains:M,url:`${Ae}mapservice/GetTiles?lxys={z},{x},{y}&tk=${o}&VERSION=1.0.0`,icoUrl:`${Ae}mapservice/GetIcon?id={id}&tk=${o}`,metadata:B,aotuCollide:!0,collisionPadding:[5,10,8,5],serverFirstStyle:!0,labelGraphics:{font:"28px sans-serif",fontSize:28,fillColor:t.Color.WHITE,scale:.5,outlineColor:t.Color.BLACK,outlineWidth:5,style:t.LabelStyle.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:t.Color.RED,backgroundPadding:new t.Cartesian2(10,10),horizontalOrigin:t.HorizontalOrigin.CENTER,verticalOrigin:t.VerticalOrigin.TOP,eyeOffset:new t.Cartesian3(0,0,10),pixelOffset:t.Cartesian2.ZERO},billboardGraphics:{horizontalOrigin:t.HorizontalOrigin.CENTER,verticalOrigin:t.VerticalOrigin.CENTER,eyeOffset:t.Cartesian3.ZERO,pixelOffset:t.Cartesian2.ZERO,alignedAxis:t.Cartesian3.ZERO,color:t.Color.WHITE,rotation:0,scale:1,width:18,height:18}}),d.initTDT(z,()=>{n.scene.requestRender()}),!0}catch{return!1}}function Pe(){const I=[0,2e3,5e3,1e4,15e3],K=[3e4,3e4,25e3,25e3,2e4],N=[30,30,25,25,20],J=N.reduce((le,me)=>le+me*me,0),Fe=new Array(J),Me=new Array(J),se=new Array(J);let Ye=0;for(let le=0;le<5;le++){const me=N[le],He=N[le],$e=K[le];for(let _e=0;_e<He;_e++)for(let be=0;be<me;be++){const Ue=Ye+_e*me+be,Ve=(be-me/2)*($e/111320),We=(_e-He/2)*($e/111320/Math.cos(t.Math.toRadians(35))),ot=Math.atan2(We,Ve)+Math.PI/2+.2*Math.sin(be*.5)*Math.cos(_e*.5);Me[Ue]=t.Math.toDegrees(ot)%360;const st=Math.sqrt(Ve*Ve+We*We),lt=Math.max(0,1-st/15);Fe[Ue]=(5+le*2)*lt+2*Math.random(),se[Ue]=.5*Math.sin(be*.3)*Math.cos(_e*.3)}Ye+=me*He}return{longitude:104,latitude:35,altitude:I,sizeMesh:K,count:N,hspeed:Fe,hdir:Me,vspeed:se}}function Oe(){if(!n||!t){g.error("Cesium 尚未初始化");return}Q();const f=Pe();m.value=new Hi(n,{maxWindSpeed:20,cesium:t,speedFactor:P.value.speedFactor,arrowLength:P.value.arrowLength,trailLength:P.value.trailLength,alphaFactor:P.value.alphaFactor}),m.value.loadData(f),n.scene.primitives.add(m.value),m.value.flyTo(),g.success("风场加载成功，可通过下方滑块调节样式")}function ze(){m.value&&(m.value.speedFactor=P.value.speedFactor,m.value.arrowLength=P.value.arrowLength,m.value.trailLength=P.value.trailLength,m.value.alphaFactor=P.value.alphaFactor)}function Ie({moduleId:f,actionId:S}){var I,K;(K=(I={scene:{home:()=>_(),everest:O,tileset:G},wind:{load:Oe,clear:Q},fluid:{pick:()=>{var N,J;return(J=(N=e.value)==null?void 0:N.startPickHeightMap)==null?void 0:J.call(N)},clear:()=>{var N,J;return(J=(N=e.value)==null?void 0:N.clearFluid)==null?void 0:J.call(N)}}}[f])==null?void 0:I[S])==null||K.call(I)}function ye({moduleId:f,controlId:S,value:k}){if(f==="effects"&&S in E.value){E.value={...E.value,[S]:!!k};return}if(f==="wind"&&S in P.value){P.value={...P.value,[S]:Number(k)},ze();return}f==="fluid"&&S in T.value&&(T.value={...T.value,[S]:Number(k)})}function Le(f){A.value={isPicking:!!(f!=null&&f.isPicking),hasFluid:!!(f!=null&&f.hasFluid),selectedText:(f==null?void 0:f.selectedText)||""}}function c(f,S){return new Promise((k,I)=>{const K=document.getElementById(S);if(K){if(K.getAttribute("data-loaded")==="true"){k();return}K.addEventListener("load",()=>k(),{once:!0}),K.addEventListener("error",()=>I(new Error(`脚本加载失败: ${f}`)),{once:!0});return}const N=document.createElement("script");N.id=S,N.src=f,N.async=!0,N.onload=()=>{N.setAttribute("data-loaded","true"),k()},N.onerror=()=>I(new Error(`脚本加载失败: ${f}`)),document.head.appendChild(N)})}function l(f,S){return new Promise((k,I)=>{if(document.getElementById(S)){k();return}const N=document.createElement("link");N.id=S,N.rel="stylesheet",N.href=f,N.onload=()=>k(),N.onerror=()=>I(new Error(`样式加载失败: ${f}`)),document.head.appendChild(N)})}function _(f){if(!n)return;const S=typeof f=="number"?f:2;n.camera.flyTo({destination:t.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-t.Math.PI_OVER_TWO,roll:0},duration:S})}function O(){n&&n.camera.flyTo({destination:t.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:t.Math.toRadians(0),pitch:t.Math.toRadians(-25),roll:0},duration:3})}async function G(){if(n)try{const f=await t.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");n.scene.primitives.add(f),n.flyTo(f,{duration:3,offset:new t.HeadingPitchRange(t.Math.toRadians(0),t.Math.toRadians(-25),f.boundingSphere.radius*2.5)})}catch(f){g.error(`加载模型失败: ${f}`),g.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return(f,S)=>(W(),X(ce,null,[S[4]||(S[4]=b("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),F.value?(W(),De(Ne(Vt),{key:0,headless:"","get-viewer":de,"get-cesium":L,controls:E.value},null,8,["controls"])):te("",!0),F.value?(W(),De(Ne(Ai),{key:1,ref_key:"fluidPanelRef",ref:e,headless:"","get-viewer":de,"get-cesium":L,params:T.value,onStateChange:Le},null,40,["params"])):te("",!0),F.value?(W(),De(_i,{key:2,"active-basemap":r.value,"onUpdate:activeBasemap":S[0]||(S[0]=k=>r.value=k),"active-terrain":i.value,"onUpdate:activeTerrain":S[1]||(S[1]=k=>i.value=k),"basemap-options":y,"terrain-options":p,modules:Y.value,onModuleAction:Ie,onControlChange:ye},null,8,["active-basemap","active-terrain","modules"])):te("",!0),b("div",$i,[b("div",ji,ee(v.value),1),S[3]||(S[3]=b("div",{class:"divider"},null,-1)),b("button",{class:"home-btn",title:"回到初始位置",onClick:_},[...S[2]||(S[2]=[b("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[b("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64))}},ur=Be(Ki,[["__scopeId","data-v-49e15f4f"]]);export{ur as default};
