import{r as W,A as ve,l as be,i as xe,g as _e,k as u,E as j,t as oe,W as fe,Y as Te,S as Le,a as we,j as ge,N as Me,G as pe,F as Ee}from"./vendor-vue-Ce8TchnW.js";import{_ as Se,u as Ce,C as Ae,B as Pe}from"./index-DzyqIr5O.js";import{_ as Re}from"./vendor-runtime-D6mAa8sP.js";import"./vendor-axios-DX1DA4HQ.js";const De={class:"advanced-effects-root"},Fe={class:"effects-panel"},Ne={class:"panel-head"},ze={class:"effect-switches"},Ie={class:"switch-item"},We={class:"switch-item"},Ve={class:"switch-item"},ke={class:"switch-item"},Ue={__name:"CesiumAdvancedEffects",props:{getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0}},setup(E){const e=E,n=Ce(),o=W(null),d=W(!0),r=W(!1),b=W(!0),x=W(!0),T=W(!1);let g=null,p=null,h=null,V=!1,S=null,P=null,L=null,N=null,X=null,k=null,G=null,K=null,J=!1,Q=0,A=0,z=typeof performance<"u"?performance.now():Date.now();function ie(){return L||(L=Re(()=>import("./cesiumFxRuntime-DKjyhU71.js"),[],import.meta.url).then(i=>{var a;const t=(a=i==null?void 0:i.getCesiumFxEchartsRuntime)==null?void 0:a.call(i);if(!t)throw new Error("Cinematic FX 图表运行时加载失败");return P=t,t}).catch(i=>{throw L=null,i}),L)}async function U(){return P||ie()}const R={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},y={hdr:null,bloom:null,sky:null};ve(()=>{I()}),be(()=>{he()});function I(){let i=0;N=window.setInterval(async()=>{var l,_;i+=1;const t=(l=e.getViewer)==null?void 0:l.call(e),a=((_=e.getCesium)==null?void 0:_.call(e))||window.Cesium;if(t&&a){clearInterval(N),N=null;try{ee(t),s(t),ne(t,a),v(t),n.success("高级视觉效果已启用。")}catch(w){n.error("高级视觉效果初始化失败",w),n.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}i>=150&&(clearInterval(N),N=null,n.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function ee(i){var a,l,_,w,F,me;const t=i==null?void 0:i.scene;if(t){if(typeof t.highDynamicRange=="boolean"&&(y.hdr=t.highDynamicRange),(a=t.postProcessStages)!=null&&a.bloom){const ae=t.postProcessStages.bloom;y.bloom={enabled:!!ae.enabled,contrast:(l=ae.uniforms)==null?void 0:l.contrast,brightness:(_=ae.uniforms)==null?void 0:_.brightness,delta:(w=ae.uniforms)==null?void 0:w.delta,sigma:(F=ae.uniforms)==null?void 0:F.sigma,stepSize:(me=ae.uniforms)==null?void 0:me.stepSize}}t.skyAtmosphere&&(y.sky={hueShift:t.skyAtmosphere.hueShift,saturationShift:t.skyAtmosphere.saturationShift,brightnessShift:t.skyAtmosphere.brightnessShift})}}function ne(i,t){var l;!((l=i==null?void 0:i.scene)!=null&&l.postProcessStages)||!(t!=null&&t.PostProcessStage)||(f(i,t),D(i,t),C(i,t),O(i,1200))}function s(i){var a;const t=i==null?void 0:i.scene;(a=t==null?void 0:t.renderError)!=null&&a.addEventListener&&(t.rethrowRenderErrors=!1,K=t.renderError.addEventListener((l,_)=>{n.error("Cesium 渲染异常，已触发降级保护",_),c(),J||(J=!0,n.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function c(){d.value=!1,b.value=!1,r.value=!1,x.value=!1,g&&(g.enabled=!1),p&&(p.enabled=!1),h&&(h.enabled=!1)}function f(i,t){g||(g=new t.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new t.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),i.scene.postProcessStages.add(g),g.enabled=d.value)}function D(i,t){var l,_;const a=(l=i==null?void 0:i.scene)==null?void 0:l.postProcessStages;a&&(a.ambientOcclusion?(h=a.ambientOcclusion,V=!1):(_=t==null?void 0:t.PostProcessStageLibrary)!=null&&_.createAmbientOcclusionStage&&(h=t.PostProcessStageLibrary.createAmbientOcclusionStage(),a.add(h),V=!0),h&&(h.enabled=r.value,h.uniforms&&("intensity"in h.uniforms&&(h.uniforms.intensity=4.2),"bias"in h.uniforms&&(h.uniforms.bias=.08),"lengthCap"in h.uniforms&&(h.uniforms.lengthCap=.35),"stepSize"in h.uniforms&&(h.uniforms.stepSize=1.8),"frustumLength"in h.uniforms&&(h.uniforms.frustumLength=1200))))}function C(i,t){p||(p=new t.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),i.scene.postProcessStages.add(p),p.enabled=!1)}function v(i){const t=i==null?void 0:i.scene;t&&(G=t.preRender.addEventListener(()=>{var w;const a=$(i),l=Number(((w=i==null?void 0:i.camera)==null?void 0:w.pitch)??-1.2);Q+=1;const _=typeof performance<"u"?performance.now():Date.now();if(_-z>=1e3&&(A=Math.round(Q*1e3/(_-z)),Q=0,z=_),g&&(g.enabled=d.value,g.uniforms.cameraHeightFactor=q(a,150,12e3),g.uniforms.fogDensity=55e-5+(1-g.uniforms.cameraHeightFactor)*.00125),h&&(h.enabled=r.value),p){const F=l>-.62,me=F?re((l+.62)/.5):0;p.enabled=b.value&&F,p.uniforms.blurStrength=me}x.value?O(i,a):se(i)}))}function O(i,t){var F;const a=i==null?void 0:i.scene;if(!a)return;typeof a.highDynamicRange=="boolean"&&(a.highDynamicRange=!0);const l=(F=a.postProcessStages)==null?void 0:F.bloom;l&&(l.enabled=!0,l.uniforms&&("contrast"in l.uniforms&&(l.uniforms.contrast=149),"brightness"in l.uniforms&&(l.uniforms.brightness=-.12),"delta"in l.uniforms&&(l.uniforms.delta=1),"sigma"in l.uniforms&&(l.uniforms.sigma=3.25),"stepSize"in l.uniforms&&(l.uniforms.stepSize=5)));const _=a.skyAtmosphere;if(!_)return;const w=q(t,500,12e4);_.hueShift=-.035+w*.035,_.saturationShift=-.14+w*.09,_.brightnessShift=.03+(1-w)*.08}function se(i){var l;const t=i==null?void 0:i.scene;if(!t)return;typeof t.highDynamicRange=="boolean"&&y.hdr!==null&&(t.highDynamicRange=y.hdr);const a=(l=t.postProcessStages)==null?void 0:l.bloom;a&&y.bloom&&(a.enabled=y.bloom.enabled,a.uniforms&&("contrast"in a.uniforms&&y.bloom.contrast!==void 0&&(a.uniforms.contrast=y.bloom.contrast),"brightness"in a.uniforms&&y.bloom.brightness!==void 0&&(a.uniforms.brightness=y.bloom.brightness),"delta"in a.uniforms&&y.bloom.delta!==void 0&&(a.uniforms.delta=y.bloom.delta),"sigma"in a.uniforms&&y.bloom.sigma!==void 0&&(a.uniforms.sigma=y.bloom.sigma),"stepSize"in a.uniforms&&y.bloom.stepSize!==void 0&&(a.uniforms.stepSize=y.bloom.stepSize))),t.skyAtmosphere&&y.sky&&(t.skyAtmosphere.hueShift=y.sky.hueShift,t.skyAtmosphere.saturationShift=y.sky.saturationShift,t.skyAtmosphere.brightnessShift=y.sky.brightnessShift)}function le(){X&&(clearInterval(X),X=null)}async function ce(){var l,_;const i=!T.value;if(T.value=i,!i){le();return}const t=(l=e.getViewer)==null?void 0:l.call(e),a=((_=e.getCesium)==null?void 0:_.call(e))||window.Cesium;if(!t||!a){T.value=!1,n.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await de(t,a),H(t,a),B(t,a)}catch(w){T.value=!1,n.error("图表模块加载失败",w)}}async function de(i,t){await U(),await Le(),o.value&&(S||(S=P.init(o.value),ue()),k||(k=()=>{S==null||S.resize()},window.addEventListener("resize",k)),S.resize(),B(i,t))}function H(i,t){X||(X=window.setInterval(()=>{!S||!T.value||B(i,t)},1200))}function B(i,t){var F;const a=new Date,l=`${te(a.getHours())}:${te(a.getMinutes())}:${te(a.getSeconds())}`,_=Number(($(i)/1e3).toFixed(2)),w=Number(t.Math.toDegrees(((F=i==null?void 0:i.camera)==null?void 0:F.pitch)??0).toFixed(1));Y(R.labels,l,20),Y(R.cameraHeightKm,_,20),Y(R.pitchDeg,w,20),Y(R.fps,A,20),S.setOption({xAxis:{data:R.labels},series:[{data:R.cameraHeightKm},{data:R.pitchDeg},{data:R.fps}]})}function ue(){S&&S.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function he(){var a,l;N&&(clearInterval(N),N=null),le();const i=(a=e.getViewer)==null?void 0:a.call(e),t=(l=i==null?void 0:i.scene)==null?void 0:l.postProcessStages;G&&(G(),G=null),K&&(K(),K=null),g&&t&&t.remove(g),g=null,p&&t&&t.remove(p),p=null,h&&(V&&t&&t.remove(h),h=null),V=!1,i&&se(i),k&&(window.removeEventListener("resize",k),k=null),S&&(S.dispose(),S=null),P=null,J=!1}function $(i){var _,w,F;const t=(w=(_=i==null?void 0:i.scene)==null?void 0:_.globe)==null?void 0:w.ellipsoid,a=(F=i==null?void 0:i.camera)==null?void 0:F.positionWC;if(!t||!a)return 0;const l=t.cartesianToCartographic(a);return Math.max(0,Number((l==null?void 0:l.height)??0))}function q(i,t,a){return!Number.isFinite(i)||a<=t?0:re((i-t)/(a-t))}function re(i){return Math.min(1,Math.max(0,Number(i)||0))}function Y(i,t,a){i.push(t),i.length>a&&i.shift()}function te(i){return String(i).padStart(2,"0")}return(i,t)=>(_e(),xe("div",De,[u("div",Fe,[u("div",Ne,[t[4]||(t[4]=u("span",{class:"panel-title"},"Cinematic FX",-1)),u("button",{class:"panel-btn",onClick:ce},oe(T.value?"隐藏图表":"显示图表"),1)]),u("div",ze,[u("label",Ie,[j(u("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>d.value=a),type:"checkbox"},null,512),[[fe,d.value]]),t[5]||(t[5]=u("span",null,"电影级高度雾",-1))]),u("label",We,[j(u("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>r.value=a),type:"checkbox"},null,512),[[fe,r.value]]),t[6]||(t[6]=u("span",null,"HBAO 微阴影",-1))]),u("label",Ve,[j(u("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>b.value=a),type:"checkbox"},null,512),[[fe,b.value]]),t[7]||(t[7]=u("span",null,"移轴摄影",-1))]),u("label",ke,[j(u("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>x.value=a),type:"checkbox"},null,512),[[fe,x.value]]),t[8]||(t[8]=u("span",null,"动态大气 + Bloom",-1))])]),j(u("div",{ref_key:"chartRef",ref:o,class:"fx-chart"},null,512),[[Te,T.value]])])]))}},Oe=Se(Ue,[["__scopeId","data-v-663c0c6a"]]),M={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Be=new Float32Array([-1,-1,1,-1,1,1,-1,1]),He=new Float32Array([0,0,1,0,1,1,0,1]),Xe=new Uint16Array([0,1,2,0,2,3]);function Z(E,e,n){return Math.max(e,Math.min(n,E))}function m(E,e){const n=Number(E);return Number.isFinite(n)?n:e}function Ge(E,e){const n=e.getParameter(e.MAX_TEXTURE_SIZE),o=Math.min(2048,n),d=Math.max(1,Math.floor(E)),r=Math.sqrt(d),b=Math.log2(r),x=Number.isFinite(b)?Math.round(b):4;let T=Math.pow(2,x);return T=Z(T,16,o),T}function $e(E){const e=E*E,n=new Float32Array(e*4);for(let o=0;o<e;o+=1){const d=o*4;n[d]=Math.random(),n[d+1]=Math.random(),n[d+2]=Math.random(),n[d+3]=Math.random()}return n}function qe(E){return new Float32Array(E*E*4)}function je(E,e,n,o,d){const r=e.createTexture();if(!r)throw new Error("Failed to create wind atlas texture.");e.bindTexture(e.TEXTURE_2D,r),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,n,o,0,e.RGBA,e.FLOAT,d),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null);let b=!1;return{_context:E,_texture:r,_target:e.TEXTURE_2D,_width:n,_height:o,destroy(){b||(e.deleteTexture(r),b=!0)}}}class Ke{constructor(e,n={}){if(!e||!e.scene||!e.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=e,this._scene=e.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=n.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const o={...M,...n};this.speedFactor=m(o.speedFactor,M.speedFactor),this.cullSpeedMin=m(o.cullSpeedMin,M.cullSpeedMin),this.cullSpeedMax=m(o.cullSpeedMax,M.cullSpeedMax),this.windSpeedMin=m(o.windSpeedMin,M.windSpeedMin),this.windSpeedMax=m(o.windSpeedMax,M.windSpeedMax),this.arrowLength=m(o.arrowLength,M.arrowLength),this.trailLength=m(o.trailLength,M.trailLength),this.decaySpeed=m(o.decaySpeed,M.decaySpeed),this.alphaFactor=m(o.alphaFactor,M.alphaFactor),this.maxWindSpeed=m(o.maxWindSpeed,M.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=m(n.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=16*16,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(e){if(!e||typeof e!="object")throw new Error("Wind2D.loadData requires a valid data object.");const n=m(e.longitude,NaN),o=m(e.latitude,NaN),d=Array.isArray(e.altitude)?e.altitude:[],r=Array.isArray(e.sizeMesh)?e.sizeMesh:[],b=Array.isArray(e.count)?e.count:[],x=Array.isArray(e.hspeed)?e.hspeed:[],T=Array.isArray(e.hdir)?e.hdir:[],g=Array.isArray(e.vspeed)?e.vspeed:[];if(!Number.isFinite(n)||!Number.isFinite(o))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const p=d.length;if(p<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(r.length!==p||b.length!==p)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const h=b.map(A=>Math.max(1,Math.floor(m(A,1)))),V=r.map(A=>Math.max(1,m(A,1))),S=d.map(A=>m(A,0)),P=h.reduce((A,z)=>A+z*z,0);if(x.length<P||T.length<P||g.length<P)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=p,this.visibleLayerMin=0,this.visibleLayerMax=p-1,this._altitudes=S.slice(),this._maxNx=Math.max(...h),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*p;const L=new Float32Array(this._atlasWidth*this._atlasHeight*4);let N=0;for(let A=0;A<p;A+=1){const z=h[A],ie=z;for(let U=0;U<ie;U+=1)for(let R=0;R<z;R+=1){const y=N+U*z+R,I=((A*this._maxNy+U)*this._atlasWidth+R)*4,ee=Number(x[y]),ne=Number(T[y]),s=Number(g[y]);if(!(Number.isFinite(ee)&&Number.isFinite(ne))){L[I]=0,L[I+1]=0,L[I+2]=0,L[I+3]=0;continue}const f=ne*Math.PI/180;L[I]=ee*Math.sin(f),L[I+1]=ee*Math.cos(f),L[I+2]=Number.isFinite(s)?s:0,L[I+3]=1}N+=z*ie}this._createOrReplaceWindAtlasTexture(L);const X=Math.max(...V),k=this._maxNx*X,G=k/2/111320,K=o*Math.PI/180,J=Math.max(1e-6,Math.abs(Math.cos(K))),Q=k/2/(111320*J);this._bounds={minLon:n-Q,maxLon:n+Q,minLat:o-G,maxLat:o+G,minHeight:Math.min(...S),maxHeight:Math.max(...S)},this._dataPointCount=P,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(e){const n=Math.max(1,Math.floor(m(e,1))),o=Ge(n,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&o===this._particleTextureSize||(this._particleTextureSize=o,this._particleCount=o*o,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(e){const n=Z(m(e,this.particleDensity),.05,10);if(this.particleDensity=n,this._dataPointCount<=0)return;const o=Math.max(1,Math.floor(this._dataPointCount*n));this.setParticleCount(o)}setBounds(e,n,o,d){const r=m(e,NaN),b=m(n,NaN),x=m(o,NaN),T=m(d,NaN);if(!Number.isFinite(r)||!Number.isFinite(b)||!Number.isFinite(x)||!Number.isFinite(T))return;const g=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};g.minLon=Math.min(r,b),g.maxLon=Math.max(r,b),g.minLat=Math.min(x,T),g.maxLat=Math.max(x,T),this._bounds=g,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const e=(this._bounds.minLon+this._bounds.maxLon)*.5,n=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(e,n,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(e){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const d=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[d],this._updateCommand.execute(this._context,e?e.passState:void 0),this._particleState=d,this._drawCommand.modelMatrix=this._modelMatrix,e&&Array.isArray(e.commandList)&&e.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(e){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=je(this._context,this._gl,this._atlasWidth,this._atlasHeight,e)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const e=this._Cesium,n=this._particleTextureSize,o=$e(n),d=qe(n);for(let r=0;r<2;r+=1){this._particlePositionTextures[r]=new e.Texture({context:this._context,width:n,height:n,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:o},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[r]=new e.Texture({context:this._context,width:n,height:n,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:n,height:n,arrayBufferView:d},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._framebuffers[r]=new e.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[r],this._velocityTextures[r]],destroyAttachments:!1});const b=this._framebuffers[r]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,b),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._particlePositionTextures[e]&&(this._particlePositionTextures[e].destroy(),this._particlePositionTextures[e]=null),this._velocityTextures[e]&&(this._velocityTextures[e].destroy(),this._velocityTextures[e]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const e=this._Cesium,n=e.Buffer.createVertexBuffer({context:this._context,typedArray:Be,usage:e.BufferUsage.STATIC_DRAW}),o=e.Buffer.createVertexBuffer({context:this._context,typedArray:He,usage:e.BufferUsage.STATIC_DRAW}),d=e.Buffer.createIndexBuffer({context:this._context,typedArray:Xe,usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:n,componentsPerAttribute:2},{index:1,vertexBuffer:o,componentsPerAttribute:2}],indexBuffer:d})}_buildParticleVertexArray(){const e=this._Cesium,n=new Float32Array(this._drawVertexCount);for(let o=0;o<n.length;o+=1)n[o]=o;this._particleVertexBuffer=e.Buffer.createVertexBuffer({context:this._context,typedArray:n,usage:e.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const e=this._Cesium,n=`#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}`,o=`#version 300 es
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
}`;this._updateProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:o,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const e=this._Cesium,n=`#version 300 es
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
}`,o=`#version 300 es
precision highp float;

in float v_age;
in float v_speed;
in float v_culled;

uniform float alphaFactor;
uniform float colorSpeedMin;
uniform float colorSpeedMax;

out vec4 out_FragColor;

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
}`;this._drawProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:n,fragmentShaderSource:o,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const e=this._Cesium,n=e.RenderState.fromCache({viewport:new e.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:n,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const e=this._Cesium,n=e.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:e.BlendingState.ALPHA_BLEND});this._drawCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:n,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:e.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const e=Z(Math.floor(m(this.visibleLayerMin,0)),0,this._layerCount-1),n=Z(Math.floor(m(this.visibleLayerMax,this._layerCount-1)),e,this._layerCount-1);return{min:e,max:n}}_normalizeSpeedRange(e,n){const o=Math.max(1e-4,m(this.maxWindSpeed,M.maxWindSpeed)),d=Z(m(e,0)/o,0,1),r=Z(m(n,o)/o,0,1);return{min:Math.min(d,r),max:Math.max(d,r)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>m(this.speedFactor,M.speedFactor),maxWindSpeed:()=>Math.max(1e-4,m(this.maxWindSpeed,M.maxWindSpeed)),decaySpeed:()=>Z(m(this.decaySpeed,M.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>m(this.arrowLength,M.arrowLength),trailLength:()=>m(this.trailLength,M.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>Z(m(this.alphaFactor,M.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}const Qe={class:"map-controls-group"},Ye={class:"mouse-position-content"},Ze={key:1,class:"wind-controls"},Je={class:"param-row"},et={class:"param-row"},tt={class:"param-row"},it={class:"param-row"},ye="https://t{s}.tianditu.gov.cn/",nt="https://api.tianditu.gov.cn/cdn/demo/sanwei/static/cesium/Cesium.js",rt="https://api.tianditu.gov.cn/cdn/demo/sanwei/static/cesium/Widgets/widgets.css",at={__name:"CesiumContainer",setup(E){let e=null;const n="4267820f43926eaf808d61dc07269beb",o=["0","1","2","3","4","5","6","7"],d=["https://api.tianditu.gov.cn/cdn/plugins/cesium/Cesium_ext_min.js","https://api.tianditu.gov.cn/cdn/plugins/cesium/long.min.js","https://api.tianditu.gov.cn/cdn/plugins/cesium/bytebuffer.min.js","https://api.tianditu.gov.cn/cdn/plugins/cesium/protobuf.min.js"];let r=null,b=null;const x=W(null),T=W("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米"),g=W(!1),p=Ce(),h=W(1),V=W(15e3),S=W(2e4),P=W(1);ve(()=>{N()});function L(){var s,c;if(x.value){try{(c=(s=r==null?void 0:r.scene)==null?void 0:s.primitives)==null||c.remove(x.value)}catch{}x.value.destroy(),x.value=null}}be(()=>{if(g.value=!1,b&&(b.destroy(),b=null),L(),r){try{r._creditCheckInterval&&clearInterval(r._creditCheckInterval),r.destroy()}catch{}r=null}});async function N(){Ae("正在初始化 3D 场景...");try{if(await G(),!e||!document.getElementById("cesiumContainer"))return;K(),J(),Q();const s=A();g.value=!0,s?p.success("天地图基础影像与地形加载成功。"):p.error("天地图地形加载失败，请检查 token 或网络。",{closable:!0})}catch(s){p.error("Cesium 运行时加载失败",s),p.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{Pe()}}function X(){return r}function k(){return e||window.Cesium}async function G(){await y(rt,"tdt-cesium-widgets-style"),await R(nt,"tdt-cesium-runtime-script");for(let s=0;s<d.length;s++)await R(d[s],`tdt-plugin-${s}`);if(e=window.Cesium,!e)throw new Error("Cesium global 未找到")}function K(){var D;const s=typeof e.Map=="function"?e.Map:e.Viewer;r=new s("cesiumContainer",{imageryProvider:!1,terrainProvider:void 0,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,selectionIndicator:!1,timeline:!1,animation:!1,sceneModePicker:!1,navigationHelpButton:!1,shouldAnimate:!0}),I(0),(D=r._cesiumWidget)!=null&&D._creditContainer&&(r._cesiumWidget._creditContainer.style.display="none"),r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,r.scene.globe.showGroundAtmosphere=!0,r.scene.globe.depthTestAgainstTerrain=!0,(()=>{var v;(v=r._cesiumWidget)!=null&&v._creditContainer&&(r._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",r._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(O=>{O.style.cssText="display: none !important; visibility: hidden !important;",O.innerHTML=""}),r.scene&&r.scene.frameState&&r.scene.frameState.creditDisplay&&(r.scene.frameState.creditDisplay.hasCredits=()=>!1,r.scene.frameState.creditDisplay.destroy=()=>{})})();const f=setInterval(()=>{const C=document.querySelector(".cesium-credit-container");C&&C.innerHTML.length>0&&(C.innerHTML="",C.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500);if(r._creditCheckInterval=f,!document.getElementById("cesium-credit-override")){const C=document.createElement("style");C.id="cesium-credit-override",C.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(C)}}function J(){b=new e.ScreenSpaceEventHandler(r.scene.canvas),b.setInputAction(s=>{const c=r.camera.getPickRay(s.endPosition);if(!c)return;const f=r.scene.globe.pick(c,r.scene);if(f){const D=e.Cartographic.fromCartesian(f),C=e.Math.toDegrees(D.longitude).toFixed(6),v=e.Math.toDegrees(D.latitude).toFixed(6),O=D.height.toFixed(2);T.value=`经度: ${C}, 纬度: ${v}, 海拔: ${O}米`}},e.ScreenSpaceEventType.MOUSE_MOVE)}function Q(){const s=r.imageryLayers,c=new e.UrlTemplateImageryProvider({url:`${ye}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${n}`,subdomains:o,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:18});s.addImageryProvider(c);const f=new e.UrlTemplateImageryProvider({url:`${ye}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${n}`,subdomains:o,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:10});s.addImageryProvider(f)}function A(){var c;const s=o.map(f=>`https://t${f}.tianditu.gov.cn/mapservice/swdx?T=elv_c&tk=${n}`);if(!((c=window.Cesium)!=null&&c.GeoTerrainProvider))return p.error("GeoTerrainProvider 不存在，插件未正确加载。"),!1;try{return r.terrainProvider=new window.Cesium.GeoTerrainProvider({urls:s}),r.scene.globe.depthTestAgainstTerrain=!0,!0}catch(f){return p.error("GeoTerrainProvider 初始化失败",f),!1}}function z(){const D=[0,2e3,5e3,1e4,15e3],C=[3e4,3e4,25e3,25e3,2e4],v=[30,30,25,25,20],O=v.reduce((H,B)=>H+B*B,0),se=new Array(O),le=new Array(O),ce=new Array(O);let de=0;for(let H=0;H<5;H++){const B=v[H],ue=v[H],he=C[H];for(let $=0;$<ue;$++)for(let q=0;q<B;q++){const re=de+$*B+q,Y=(q-B/2)*(he/111320),te=($-ue/2)*(he/111320/Math.cos(e.Math.toRadians(35))),t=Math.atan2(te,Y)+Math.PI/2+.2*Math.sin(q*.5)*Math.cos($*.5);le[re]=e.Math.toDegrees(t)%360;const a=Math.sqrt(Y*Y+te*te),_=Math.max(0,1-a/15);se[re]=(5+H*2)*_+2*Math.random(),ce[re]=.5*Math.sin(q*.3)*Math.cos($*.3)}de+=B*ue}return{longitude:104,latitude:35,altitude:D,sizeMesh:C,count:v,hspeed:se,hdir:le,vspeed:ce}}function ie(){if(!r||!e){p.error("Cesium 尚未初始化");return}L();const s=z();x.value=new Ke(r,{maxWindSpeed:20,cesium:e,speedFactor:h.value,arrowLength:V.value,trailLength:S.value,alphaFactor:P.value}),x.value.loadData(s),r.scene.primitives.add(x.value),x.value.flyTo(),p.success("风场加载成功，可通过下方滑块调节样式")}function U(){x.value&&(x.value.speedFactor=h.value,x.value.arrowLength=V.value,x.value.trailLength=S.value,x.value.alphaFactor=P.value)}function R(s,c){return new Promise((f,D)=>{const C=document.getElementById(c);if(C){if(C.getAttribute("data-loaded")==="true"){f();return}C.addEventListener("load",()=>f(),{once:!0}),C.addEventListener("error",()=>D(new Error(`脚本加载失败: ${s}`)),{once:!0});return}const v=document.createElement("script");v.id=c,v.src=s,v.async=!0,v.onload=()=>{v.setAttribute("data-loaded","true"),f()},v.onerror=()=>D(new Error(`脚本加载失败: ${s}`)),document.head.appendChild(v)})}function y(s,c){return new Promise((f,D)=>{if(document.getElementById(c)){f();return}const v=document.createElement("link");v.id=c,v.rel="stylesheet",v.href=s,v.onload=()=>f(),v.onerror=()=>D(new Error(`样式加载失败: ${s}`)),document.head.appendChild(v)})}function I(s){if(!r)return;const c=typeof s=="number"?s:2;r.camera.flyTo({destination:e.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-e.Math.PI_OVER_TWO,roll:0},duration:c})}function ee(){r&&r.camera.flyTo({destination:e.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:e.Math.toRadians(0),pitch:e.Math.toRadians(-25),roll:0},duration:3})}async function ne(){if(r)try{const s=await e.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");r.scene.primitives.add(s),r.flyTo(s,{duration:3,offset:new e.HeadingPitchRange(e.Math.toRadians(0),e.Math.toRadians(-25),s.boundingSphere.radius*2.5)})}catch(s){p.error(`加载模型失败: ${s}`),p.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return(s,c)=>(_e(),xe(Ee,null,[c[6]||(c[6]=u("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),g.value?(_e(),we(Me(Oe),{key:0,"get-viewer":X,"get-cesium":k})):ge("",!0),u("div",Qe,[u("div",Ye,oe(T.value),1),c[5]||(c[5]=u("div",{class:"divider"},null,-1)),u("button",{class:"home-btn",onClick:I,title:"回到初始位置"},c[4]||(c[4]=[u("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[u("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)]))]),u("div",{class:"cesium-controls"},[u("button",{onClick:ee,class:"fly-btn"},"🏔️ 飞越珠穆朗玛峰"),u("button",{onClick:ne,class:"fly-btn"},"🏢 加载3D模型"),u("button",{onClick:ie,class:"fly-btn"},"🌬️ 加载模拟风场")]),x.value?(_e(),xe("div",Ze,[u("div",Je,[u("label",null,"速度因子: "+oe(h.value.toFixed(1)),1),j(u("input",{type:"range",min:"0.1",max:"5",step:"0.1","onUpdate:modelValue":c[0]||(c[0]=f=>h.value=f),onInput:U},null,544),[[pe,h.value,void 0,{number:!0}]])]),u("div",et,[u("label",null,"箭头长度: "+oe(V.value/1e3)+"km",1),j(u("input",{type:"range",min:"5000",max:"50000",step:"1000","onUpdate:modelValue":c[1]||(c[1]=f=>V.value=f),onInput:U},null,544),[[pe,V.value,void 0,{number:!0}]])]),u("div",tt,[u("label",null,"尾迹长度: "+oe(S.value/1e3)+"km",1),j(u("input",{type:"range",min:"5000",max:"80000",step:"1000","onUpdate:modelValue":c[2]||(c[2]=f=>S.value=f),onInput:U},null,544),[[pe,S.value,void 0,{number:!0}]])]),u("div",it,[u("label",null,"透明度: "+oe(P.value.toFixed(2)),1),j(u("input",{type:"range",min:"0.1",max:"1",step:"0.05","onUpdate:modelValue":c[3]||(c[3]=f=>P.value=f),onInput:U},null,544),[[pe,P.value,void 0,{number:!0}]])])])):ge("",!0)],64))}},ct=Se(at,[["__scopeId","data-v-326e4b18"]]);export{ct as default};
