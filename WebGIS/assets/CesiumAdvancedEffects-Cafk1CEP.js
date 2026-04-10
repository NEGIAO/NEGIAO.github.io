import{_ as ie,u as ae,r as y,q as le,M as ue,P as fe,j as ce,c as me,o as de,a,d as C,t as ge,c4 as M,K as he}from"./index-DvRX01gz.js";const pe={class:"advanced-effects-root"},be={class:"effects-panel"},Se={class:"panel-head"},ye={class:"effect-switches"},xe={class:"switch-item"},_e={class:"switch-item"},Ee={class:"switch-item"},Ce={class:"switch-item"},Ae={__name:"CesiumAdvancedEffects",props:{getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0}},setup(q){const d=q,b=ae(),A=y(null),x=y(!0),_=y(!1),v=y(!0),L=y(!0),p=y(!0);let u=null,m=null,r=null,P=!1,f=null,O=null,g=null,T=null,E=null,D=null,R=null,z=!1,H=0,N=0,V=typeof performance<"u"?performance.now():Date.now();const h={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},i={hdr:null,bloom:null,sky:null};le(()=>{W()}),ue(()=>{re()});function W(){let t=0;g=window.setInterval(async()=>{var n,s;t+=1;const e=(n=d.getViewer)==null?void 0:n.call(d),o=((s=d.getCesium)==null?void 0:s.call(d))||window.Cesium;if(e&&o){clearInterval(g),g=null;try{j(e),Q(e),J(e,o),te(e),await oe(e,o),ne(e,o),b.success("高级视觉效果已启用。")}catch(l){b.error("高级视觉效果初始化失败",l),b.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}t>=150&&(clearInterval(g),g=null,b.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function j(t){var o,n,s,l,c,F;const e=t==null?void 0:t.scene;if(e){if(typeof e.highDynamicRange=="boolean"&&(i.hdr=e.highDynamicRange),(o=e.postProcessStages)!=null&&o.bloom){const S=e.postProcessStages.bloom;i.bloom={enabled:!!S.enabled,contrast:(n=S.uniforms)==null?void 0:n.contrast,brightness:(s=S.uniforms)==null?void 0:s.brightness,delta:(l=S.uniforms)==null?void 0:l.delta,sigma:(c=S.uniforms)==null?void 0:c.sigma,stepSize:(F=S.uniforms)==null?void 0:F.stepSize}}e.skyAtmosphere&&(i.sky={hueShift:e.skyAtmosphere.hueShift,saturationShift:e.skyAtmosphere.saturationShift,brightnessShift:e.skyAtmosphere.brightnessShift})}}function J(t,e){var n;!((n=t==null?void 0:t.scene)!=null&&n.postProcessStages)||!(e!=null&&e.PostProcessStage)||(Z(t,e),w(t,e),ee(t,e),G(t,1200))}function Q(t){var o;const e=t==null?void 0:t.scene;(o=e==null?void 0:e.renderError)!=null&&o.addEventListener&&(e.rethrowRenderErrors=!1,R=e.renderError.addEventListener((n,s)=>{b.error("Cesium 渲染异常，已触发降级保护",s),Y(),z||(z=!0,b.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function Y(){x.value=!1,v.value=!1,_.value=!1,L.value=!1,u&&(u.enabled=!1),m&&(m.enabled=!1),r&&(r.enabled=!1)}function Z(t,e){u||(u=new e.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new e.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),t.scene.postProcessStages.add(u),u.enabled=x.value)}function w(t,e){var n,s;const o=(n=t==null?void 0:t.scene)==null?void 0:n.postProcessStages;o&&(o.ambientOcclusion?(r=o.ambientOcclusion,P=!1):(s=e==null?void 0:e.PostProcessStageLibrary)!=null&&s.createAmbientOcclusionStage&&(r=e.PostProcessStageLibrary.createAmbientOcclusionStage(),o.add(r),P=!0),r&&(r.enabled=_.value,r.uniforms&&("intensity"in r.uniforms&&(r.uniforms.intensity=4.2),"bias"in r.uniforms&&(r.uniforms.bias=.08),"lengthCap"in r.uniforms&&(r.uniforms.lengthCap=.35),"stepSize"in r.uniforms&&(r.uniforms.stepSize=1.8),"frustumLength"in r.uniforms&&(r.uniforms.frustumLength=1200))))}function ee(t,e){m||(m=new e.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),t.scene.postProcessStages.add(m),m.enabled=!1)}function te(t){const e=t==null?void 0:t.scene;e&&(D=e.preRender.addEventListener(()=>{var l;const o=U(t),n=Number(((l=t==null?void 0:t.camera)==null?void 0:l.pitch)??-1.2);H+=1;const s=typeof performance<"u"?performance.now():Date.now();if(s-V>=1e3&&(N=Math.round(H*1e3/(s-V)),H=0,V=s),u&&(u.enabled=x.value,u.uniforms.cameraHeightFactor=K(o,150,12e3),u.uniforms.fogDensity=55e-5+(1-u.uniforms.cameraHeightFactor)*.00125),r&&(r.enabled=_.value),m){const c=n>-.62,F=c?$((n+.62)/.5):0;m.enabled=v.value&&c,m.uniforms.blurStrength=F}L.value?G(t,o):I(t)}))}function G(t,e){var c;const o=t==null?void 0:t.scene;if(!o)return;typeof o.highDynamicRange=="boolean"&&(o.highDynamicRange=!0);const n=(c=o.postProcessStages)==null?void 0:c.bloom;n&&(n.enabled=!0,n.uniforms&&("contrast"in n.uniforms&&(n.uniforms.contrast=149),"brightness"in n.uniforms&&(n.uniforms.brightness=-.12),"delta"in n.uniforms&&(n.uniforms.delta=1),"sigma"in n.uniforms&&(n.uniforms.sigma=3.25),"stepSize"in n.uniforms&&(n.uniforms.stepSize=5)));const s=o.skyAtmosphere;if(!s)return;const l=K(e,500,12e4);s.hueShift=-.035+l*.035,s.saturationShift=-.14+l*.09,s.brightnessShift=.03+(1-l)*.08}function I(t){var n;const e=t==null?void 0:t.scene;if(!e)return;typeof e.highDynamicRange=="boolean"&&i.hdr!==null&&(e.highDynamicRange=i.hdr);const o=(n=e.postProcessStages)==null?void 0:n.bloom;o&&i.bloom&&(o.enabled=i.bloom.enabled,o.uniforms&&("contrast"in o.uniforms&&i.bloom.contrast!==void 0&&(o.uniforms.contrast=i.bloom.contrast),"brightness"in o.uniforms&&i.bloom.brightness!==void 0&&(o.uniforms.brightness=i.bloom.brightness),"delta"in o.uniforms&&i.bloom.delta!==void 0&&(o.uniforms.delta=i.bloom.delta),"sigma"in o.uniforms&&i.bloom.sigma!==void 0&&(o.uniforms.sigma=i.bloom.sigma),"stepSize"in o.uniforms&&i.bloom.stepSize!==void 0&&(o.uniforms.stepSize=i.bloom.stepSize))),e.skyAtmosphere&&i.sky&&(e.skyAtmosphere.hueShift=i.sky.hueShift,e.skyAtmosphere.saturationShift=i.sky.saturationShift,e.skyAtmosphere.brightnessShift=i.sky.brightnessShift)}async function oe(t,e){!A.value||(O=await fe(()=>import("./index-CI3l0H-I.js"),[],import.meta.url),!A.value)||(f=O.init(A.value),se(),E=()=>{f==null||f.resize()},window.addEventListener("resize",E),p.value||(p.value=!0,await ce(),f==null||f.resize()),B(t,e))}function ne(t,e){T=window.setInterval(()=>{!f||!p.value||B(t,e)},1200)}function B(t,e){var c;const o=new Date,n=`${X(o.getHours())}:${X(o.getMinutes())}:${X(o.getSeconds())}`,s=Number((U(t)/1e3).toFixed(2)),l=Number(e.Math.toDegrees(((c=t==null?void 0:t.camera)==null?void 0:c.pitch)??0).toFixed(1));k(h.labels,n,20),k(h.cameraHeightKm,s,20),k(h.pitchDeg,l,20),k(h.fps,N,20),f.setOption({xAxis:{data:h.labels},series:[{data:h.cameraHeightKm},{data:h.pitchDeg},{data:h.fps}]})}function se(){f&&f.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function re(){var o,n;g&&(clearInterval(g),g=null),T&&(clearInterval(T),T=null);const t=(o=d.getViewer)==null?void 0:o.call(d),e=(n=t==null?void 0:t.scene)==null?void 0:n.postProcessStages;D&&(D(),D=null),R&&(R(),R=null),u&&e&&e.remove(u),u=null,m&&e&&e.remove(m),m=null,r&&(P&&e&&e.remove(r),r=null),P=!1,t&&I(t),E&&(window.removeEventListener("resize",E),E=null),f&&(f.dispose(),f=null),O=null,z=!1}function U(t){var s,l,c;const e=(l=(s=t==null?void 0:t.scene)==null?void 0:s.globe)==null?void 0:l.ellipsoid,o=(c=t==null?void 0:t.camera)==null?void 0:c.positionWC;if(!e||!o)return 0;const n=e.cartesianToCartographic(o);return Math.max(0,Number((n==null?void 0:n.height)??0))}function K(t,e,o){return!Number.isFinite(t)||o<=e?0:$((t-e)/(o-e))}function $(t){return Math.min(1,Math.max(0,Number(t)||0))}function k(t,e,o){t.push(e),t.length>o&&t.shift()}function X(t){return String(t).padStart(2,"0")}return(t,e)=>(de(),me("div",pe,[a("div",be,[a("div",Se,[e[5]||(e[5]=a("span",{class:"panel-title"},"Cinematic FX",-1)),a("button",{class:"panel-btn",onClick:e[0]||(e[0]=o=>p.value=!p.value)},ge(p.value?"隐藏图表":"显示图表"),1)]),a("div",ye,[a("label",xe,[C(a("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>x.value=o),type:"checkbox"},null,512),[[M,x.value]]),e[6]||(e[6]=a("span",null,"电影级高度雾",-1))]),a("label",_e,[C(a("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>_.value=o),type:"checkbox"},null,512),[[M,_.value]]),e[7]||(e[7]=a("span",null,"HBAO 微阴影",-1))]),a("label",Ee,[C(a("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>v.value=o),type:"checkbox"},null,512),[[M,v.value]]),e[8]||(e[8]=a("span",null,"移轴摄影",-1))]),a("label",Ce,[C(a("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>L.value=o),type:"checkbox"},null,512),[[M,L.value]]),e[9]||(e[9]=a("span",null,"动态大气 + Bloom",-1))])]),C(a("div",{ref_key:"chartRef",ref:A,class:"fx-chart"},null,512),[[he,p.value]])])]))}},Le=ie(Ae,[["__scopeId","data-v-71240a09"]]);export{Le as default};
