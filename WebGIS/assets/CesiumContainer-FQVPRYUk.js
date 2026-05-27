import{A as Se,o as we,a as pe,c as _e,f as T,t as ae,C as K,Y as fe,U as Me,r as Y,N as Ae,x as Re,O as De,g as ve,D as me,F as Ie}from"./vendor-vue-CbKzRfu9.js";import{_ as Le,u as Ee,G as Oe,F as Fe}from"./index-wZS76mFR.js";import{_ as ze}from"./vendor-runtime-CAQj6dvO.js";import{a7 as Be,a8 as Ne}from"./vendor-libs-Cf4mfC6y.js";import"./vendor-ol-all-nfwWZ9Aw.js";import"./vendor-geotiff-BMYw3dwk.js";import"./vendor-lerc-DsKvfVdY.js";import"./vendor-jszip-9q85DyUf.js";import"./vendor-axios-Bdz_Fv8M.js";import"./vendor-proj4-Cw7F0OoU.js";const Ue={class:"advanced-effects-root"},ke={class:"effects-panel"},We={class:"panel-head"},Xe={class:"effect-switches"},Ve={class:"switch-item"},He={class:"switch-item"},Ge={class:"switch-item"},Ye={class:"switch-item"},$e={__name:"CesiumAdvancedEffects",props:{getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0}},setup(x){const e=x,a=Ee(),s=Y(null),S=Y(!0),h=Y(!1),A=Y(!0),N=Y(!0),l=Y(!1);let w=null,D=null,y=null,H=!1,M=null,f=null,p=null,g=null,I=null,t=null,n=null,i=null,d=!1,E=0,m=0,u=typeof performance<"u"?performance.now():Date.now();function R(){return p||(p=ze(()=>import("./cesiumFxRuntime-B_v0om3e.js"),[],import.meta.url).then(o=>{var c;const r=(c=o==null?void 0:o.getCesiumFxEchartsRuntime)==null?void 0:c.call(o);if(!r)throw new Error("Cinematic FX 图表运行时加载失败");return f=r,r}).catch(o=>{throw p=null,o}),p)}async function L(){return f||R()}const _={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},P={hdr:null,bloom:null,sky:null};Se(()=>{W()}),we(()=>{he()});function W(){let o=0;g=window.setInterval(async()=>{var b,F;o+=1;const r=(b=e.getViewer)==null?void 0:b.call(e),c=((F=e.getCesium)==null?void 0:F.call(e))||window.Cesium;if(r&&c){clearInterval(g),g=null;try{ee(r),j(r),ie(r,c),xe(r),a.success("高级视觉效果已启用。")}catch(k){a.error("高级视觉效果初始化失败",k),a.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}o>=150&&(clearInterval(g),g=null,a.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function ee(o){var c,b,F,k,G,re;const r=o==null?void 0:o.scene;if(r){if(typeof r.highDynamicRange=="boolean"&&(P.hdr=r.highDynamicRange),(c=r.postProcessStages)!=null&&c.bloom){const Q=r.postProcessStages.bloom;P.bloom={enabled:!!Q.enabled,contrast:(b=Q.uniforms)==null?void 0:b.contrast,brightness:(F=Q.uniforms)==null?void 0:F.brightness,delta:(k=Q.uniforms)==null?void 0:k.delta,sigma:(G=Q.uniforms)==null?void 0:G.sigma,stepSize:(re=Q.uniforms)==null?void 0:re.stepSize}}r.skyAtmosphere&&(P.sky={hueShift:r.skyAtmosphere.hueShift,saturationShift:r.skyAtmosphere.saturationShift,brightnessShift:r.skyAtmosphere.brightnessShift})}}function ie(o,r){var b;!((b=o==null?void 0:o.scene)!=null&&b.postProcessStages)||!(r!=null&&r.PostProcessStage)||(ne(o,r),ue(o,r),ge(o,r),v(o,1200))}function j(o){var c;const r=o==null?void 0:o.scene;(c=r==null?void 0:r.renderError)!=null&&c.addEventListener&&(r.rethrowRenderErrors=!1,i=r.renderError.addEventListener((b,F)=>{a.error("Cesium 渲染异常，已触发降级保护",F),ce(),d||(d=!0,a.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function ce(){S.value=!1,A.value=!1,h.value=!1,N.value=!1,w&&(w.enabled=!1),D&&(D.enabled=!1),y&&(y.enabled=!1)}function ne(o,r){w||(w=new r.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new r.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),o.scene.postProcessStages.add(w),w.enabled=S.value)}function ue(o,r){var b,F;const c=(b=o==null?void 0:o.scene)==null?void 0:b.postProcessStages;c&&(c.ambientOcclusion?(y=c.ambientOcclusion,H=!1):(F=r==null?void 0:r.PostProcessStageLibrary)!=null&&F.createAmbientOcclusionStage&&(y=r.PostProcessStageLibrary.createAmbientOcclusionStage(),c.add(y),H=!0),y&&(y.enabled=h.value,y.uniforms&&("intensity"in y.uniforms&&(y.uniforms.intensity=4.2),"bias"in y.uniforms&&(y.uniforms.bias=.08),"lengthCap"in y.uniforms&&(y.uniforms.lengthCap=.35),"stepSize"in y.uniforms&&(y.uniforms.stepSize=1.8),"frustumLength"in y.uniforms&&(y.uniforms.frustumLength=1200))))}function ge(o,r){D||(D=new r.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),o.scene.postProcessStages.add(D),D.enabled=!1)}function xe(o){const r=o==null?void 0:o.scene;r&&(n=r.preRender.addEventListener(()=>{var k;const c=oe(o),b=Number(((k=o==null?void 0:o.camera)==null?void 0:k.pitch)??-1.2);E+=1;const F=typeof performance<"u"?performance.now():Date.now();if(F-u>=1e3&&(m=Math.round(E*1e3/(F-u)),E=0,u=F),w&&(w.enabled=S.value,w.uniforms.cameraHeightFactor=se(c,150,12e3),w.uniforms.fogDensity=55e-5+(1-w.uniforms.cameraHeightFactor)*.00125),y&&(y.enabled=h.value),D){const G=b>-.62,re=G?Z((b+.62)/.5):0;D.enabled=A.value&&G,D.uniforms.blurStrength=re}N.value?v(o,c):C(o)}))}function v(o,r){var G;const c=o==null?void 0:o.scene;if(!c)return;typeof c.highDynamicRange=="boolean"&&(c.highDynamicRange=!0);const b=(G=c.postProcessStages)==null?void 0:G.bloom;b&&(b.enabled=!0,b.uniforms&&("contrast"in b.uniforms&&(b.uniforms.contrast=149),"brightness"in b.uniforms&&(b.uniforms.brightness=-.12),"delta"in b.uniforms&&(b.uniforms.delta=1),"sigma"in b.uniforms&&(b.uniforms.sigma=3.25),"stepSize"in b.uniforms&&(b.uniforms.stepSize=5)));const F=c.skyAtmosphere;if(!F)return;const k=se(r,500,12e4);F.hueShift=-.035+k*.035,F.saturationShift=-.14+k*.09,F.brightnessShift=.03+(1-k)*.08}function C(o){var b;const r=o==null?void 0:o.scene;if(!r)return;typeof r.highDynamicRange=="boolean"&&P.hdr!==null&&(r.highDynamicRange=P.hdr);const c=(b=r.postProcessStages)==null?void 0:b.bloom;c&&P.bloom&&(c.enabled=P.bloom.enabled,c.uniforms&&("contrast"in c.uniforms&&P.bloom.contrast!==void 0&&(c.uniforms.contrast=P.bloom.contrast),"brightness"in c.uniforms&&P.bloom.brightness!==void 0&&(c.uniforms.brightness=P.bloom.brightness),"delta"in c.uniforms&&P.bloom.delta!==void 0&&(c.uniforms.delta=P.bloom.delta),"sigma"in c.uniforms&&P.bloom.sigma!==void 0&&(c.uniforms.sigma=P.bloom.sigma),"stepSize"in c.uniforms&&P.bloom.stepSize!==void 0&&(c.uniforms.stepSize=P.bloom.stepSize))),r.skyAtmosphere&&P.sky&&(r.skyAtmosphere.hueShift=P.sky.hueShift,r.skyAtmosphere.saturationShift=P.sky.saturationShift,r.skyAtmosphere.brightnessShift=P.sky.brightnessShift)}function z(){I&&(clearInterval(I),I=null)}async function V(){var b,F;const o=!l.value;if(l.value=o,!o){z();return}const r=(b=e.getViewer)==null?void 0:b.call(e),c=((F=e.getCesium)==null?void 0:F.call(e))||window.Cesium;if(!r||!c){l.value=!1,a.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await U(r,c),B(r,c),$(r,c)}catch(k){l.value=!1,a.error("图表模块加载失败",k)}}async function U(o,r){await L(),await Ae(),s.value&&(M||(M=f.init(s.value),de()),t||(t=()=>{M==null||M.resize()},window.addEventListener("resize",t)),M.resize(),$(o,r))}function B(o,r){I||(I=window.setInterval(()=>{!M||!l.value||$(o,r)},1200))}function $(o,r){var G;const c=new Date,b=`${te(c.getHours())}:${te(c.getMinutes())}:${te(c.getSeconds())}`,F=Number((oe(o)/1e3).toFixed(2)),k=Number(r.Math.toDegrees(((G=o==null?void 0:o.camera)==null?void 0:G.pitch)??0).toFixed(1));q(_.labels,b,20),q(_.cameraHeightKm,F,20),q(_.pitchDeg,k,20),q(_.fps,m,20),M.setOption({xAxis:{data:_.labels},series:[{data:_.cameraHeightKm},{data:_.pitchDeg},{data:_.fps}]})}function de(){M&&M.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function he(){var c,b;g&&(clearInterval(g),g=null),z();const o=(c=e.getViewer)==null?void 0:c.call(e),r=(b=o==null?void 0:o.scene)==null?void 0:b.postProcessStages;n&&(n(),n=null),i&&(i(),i=null),w&&r&&r.remove(w),w=null,D&&r&&r.remove(D),D=null,y&&(H&&r&&r.remove(y),y=null),H=!1,o&&C(o),t&&(window.removeEventListener("resize",t),t=null),M&&(M.dispose(),M=null),f=null,d=!1}function oe(o){var F,k,G;const r=(k=(F=o==null?void 0:o.scene)==null?void 0:F.globe)==null?void 0:k.ellipsoid,c=(G=o==null?void 0:o.camera)==null?void 0:G.positionWC;if(!r||!c)return 0;const b=r.cartesianToCartographic(c);return Math.max(0,Number((b==null?void 0:b.height)??0))}function se(o,r,c){return!Number.isFinite(o)||c<=r?0:Z((o-r)/(c-r))}function Z(o){return Math.min(1,Math.max(0,Number(o)||0))}function q(o,r,c){o.push(r),o.length>c&&o.shift()}function te(o){return String(o).padStart(2,"0")}return(o,r)=>(pe(),_e("div",Ue,[T("div",ke,[T("div",We,[r[4]||(r[4]=T("span",{class:"panel-title"},"Cinematic FX",-1)),T("button",{class:"panel-btn",onClick:V},ae(l.value?"隐藏图表":"显示图表"),1)]),T("div",Xe,[T("label",Ve,[K(T("input",{"onUpdate:modelValue":r[0]||(r[0]=c=>S.value=c),type:"checkbox"},null,512),[[fe,S.value]]),r[5]||(r[5]=T("span",null,"电影级高度雾",-1))]),T("label",He,[K(T("input",{"onUpdate:modelValue":r[1]||(r[1]=c=>h.value=c),type:"checkbox"},null,512),[[fe,h.value]]),r[6]||(r[6]=T("span",null,"HBAO 微阴影",-1))]),T("label",Ge,[K(T("input",{"onUpdate:modelValue":r[2]||(r[2]=c=>A.value=c),type:"checkbox"},null,512),[[fe,A.value]]),r[7]||(r[7]=T("span",null,"移轴摄影",-1))]),T("label",Ye,[K(T("input",{"onUpdate:modelValue":r[3]||(r[3]=c=>N.value=c),type:"checkbox"},null,512),[[fe,N.value]]),r[8]||(r[8]=T("span",null,"动态大气 + Bloom",-1))])]),K(T("div",{ref_key:"chartRef",ref:s,class:"fx-chart"},null,512),[[Me,l.value]])])]))}},qe=Le($e,[["__scopeId","data-v-e626db49"]]),X={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Ze=new Float32Array([-1,-1,1,-1,1,1,-1,1]),je=new Float32Array([0,0,1,0,1,1,0,1]),Ke=new Uint16Array([0,1,2,0,2,3]);function J(x,e,a){return Math.max(e,Math.min(a,x))}function O(x,e){const a=Number(x);return Number.isFinite(a)?a:e}function Qe(x,e){const a=e.getParameter(e.MAX_TEXTURE_SIZE),s=Math.min(2048,a),S=Math.max(1,Math.floor(x)),h=Math.sqrt(S),A=Math.log2(h),N=Number.isFinite(A)?Math.round(A):4;let l=Math.pow(2,N);return l=J(l,16,s),l}function Je(x){const e=x*x,a=new Float32Array(e*4);for(let s=0;s<e;s+=1){const S=s*4;a[S]=Math.random(),a[S+1]=Math.random(),a[S+2]=Math.random(),a[S+3]=Math.random()}return a}function et(x){return new Float32Array(x*x*4)}function tt(x,e,a,s,S){const h=e.createTexture();if(!h)throw new Error("Failed to create wind atlas texture.");e.bindTexture(e.TEXTURE_2D,h),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,a,s,0,e.RGBA,e.FLOAT,S),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null);let A=!1;return{_context:x,_texture:h,_target:e.TEXTURE_2D,_width:a,_height:s,destroy(){A||(e.deleteTexture(h),A=!0)}}}class it{constructor(e,a={}){if(!e||!e.scene||!e.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=e,this._scene=e.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=a.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const s={...X,...a};this.speedFactor=O(s.speedFactor,X.speedFactor),this.cullSpeedMin=O(s.cullSpeedMin,X.cullSpeedMin),this.cullSpeedMax=O(s.cullSpeedMax,X.cullSpeedMax),this.windSpeedMin=O(s.windSpeedMin,X.windSpeedMin),this.windSpeedMax=O(s.windSpeedMax,X.windSpeedMax),this.arrowLength=O(s.arrowLength,X.arrowLength),this.trailLength=O(s.trailLength,X.trailLength),this.decaySpeed=O(s.decaySpeed,X.decaySpeed),this.alphaFactor=O(s.alphaFactor,X.alphaFactor),this.maxWindSpeed=O(s.maxWindSpeed,X.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=O(a.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(e){if(!e||typeof e!="object")throw new Error("Wind2D.loadData requires a valid data object.");const a=O(e.longitude,NaN),s=O(e.latitude,NaN),S=Array.isArray(e.altitude)?e.altitude:[],h=Array.isArray(e.sizeMesh)?e.sizeMesh:[],A=Array.isArray(e.count)?e.count:[],N=Array.isArray(e.hspeed)?e.hspeed:[],l=Array.isArray(e.hdir)?e.hdir:[],w=Array.isArray(e.vspeed)?e.vspeed:[];if(!Number.isFinite(a)||!Number.isFinite(s))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const D=S.length;if(D<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(h.length!==D||A.length!==D)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const y=A.map(m=>Math.max(1,Math.floor(O(m,1)))),H=h.map(m=>Math.max(1,O(m,1))),M=S.map(m=>O(m,0)),f=y.reduce((m,u)=>m+u*u,0);if(N.length<f||l.length<f||w.length<f)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=D,this.visibleLayerMin=0,this.visibleLayerMax=D-1,this._altitudes=M.slice(),this._maxNx=Math.max(...y),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*D;const p=new Float32Array(this._atlasWidth*this._atlasHeight*4);let g=0;for(let m=0;m<D;m+=1){const u=y[m],R=u;for(let L=0;L<R;L+=1)for(let _=0;_<u;_+=1){const P=g+L*u+_,W=((m*this._maxNy+L)*this._atlasWidth+_)*4,ee=Number(N[P]),ie=Number(l[P]),j=Number(w[P]);if(!(Number.isFinite(ee)&&Number.isFinite(ie))){p[W]=0,p[W+1]=0,p[W+2]=0,p[W+3]=0;continue}const ne=ie*Math.PI/180;p[W]=ee*Math.sin(ne),p[W+1]=ee*Math.cos(ne),p[W+2]=Number.isFinite(j)?j:0,p[W+3]=1}g+=u*R}this._createOrReplaceWindAtlasTexture(p);const I=Math.max(...H),t=this._maxNx*I,n=t/2/111320,i=s*Math.PI/180,d=Math.max(1e-6,Math.abs(Math.cos(i))),E=t/2/(111320*d);this._bounds={minLon:a-E,maxLon:a+E,minLat:s-n,maxLat:s+n,minHeight:Math.min(...M),maxHeight:Math.max(...M)},this._dataPointCount=f,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(e){const a=Math.max(1,Math.floor(O(e,1))),s=Qe(a,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&s===this._particleTextureSize||(this._particleTextureSize=s,this._particleCount=s*s,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(e){const a=J(O(e,this.particleDensity),.05,10);if(this.particleDensity=a,this._dataPointCount<=0)return;const s=Math.max(1,Math.floor(this._dataPointCount*a));this.setParticleCount(s)}setBounds(e,a,s,S){const h=O(e,NaN),A=O(a,NaN),N=O(s,NaN),l=O(S,NaN);if(!Number.isFinite(h)||!Number.isFinite(A)||!Number.isFinite(N)||!Number.isFinite(l))return;const w=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};w.minLon=Math.min(h,A),w.maxLon=Math.max(h,A),w.minLat=Math.min(N,l),w.maxLat=Math.max(N,l),this._bounds=w,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const e=(this._bounds.minLon+this._bounds.maxLon)*.5,a=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(e,a,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(e){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const S=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[S],this._updateCommand.execute(this._context,e?e.passState:void 0),this._particleState=S,this._drawCommand.modelMatrix=this._modelMatrix,e&&Array.isArray(e.commandList)&&e.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(e){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=tt(this._context,this._gl,this._atlasWidth,this._atlasHeight,e)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const e=this._Cesium,a=this._particleTextureSize,s=Je(a),S=et(a);for(let h=0;h<2;h+=1){this._particlePositionTextures[h]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:s},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[h]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:S},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._framebuffers[h]=new e.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[h],this._velocityTextures[h]],destroyAttachments:!1});const A=this._framebuffers[h]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,A),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._particlePositionTextures[e]&&(this._particlePositionTextures[e].destroy(),this._particlePositionTextures[e]=null),this._velocityTextures[e]&&(this._velocityTextures[e].destroy(),this._velocityTextures[e]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const e=this._Cesium,a=e.Buffer.createVertexBuffer({context:this._context,typedArray:Ze,usage:e.BufferUsage.STATIC_DRAW}),s=e.Buffer.createVertexBuffer({context:this._context,typedArray:je,usage:e.BufferUsage.STATIC_DRAW}),S=e.Buffer.createIndexBuffer({context:this._context,typedArray:Ke,usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:a,componentsPerAttribute:2},{index:1,vertexBuffer:s,componentsPerAttribute:2}],indexBuffer:S})}_buildParticleVertexArray(){const e=this._Cesium,a=new Float32Array(this._drawVertexCount);for(let s=0;s<a.length;s+=1)a[s]=s;this._particleVertexBuffer=e.Buffer.createVertexBuffer({context:this._context,typedArray:a,usage:e.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const e=this._Cesium,a=`#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}`,s=`#version 300 es
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
}`;this._updateProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:a,fragmentShaderSource:s,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const e=this._Cesium,a=`#version 300 es
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
}`,s=`#version 300 es
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
}`;this._drawProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:a,fragmentShaderSource:s,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const e=this._Cesium,a=e.RenderState.fromCache({viewport:new e.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:a,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const e=this._Cesium,a=e.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:e.BlendingState.ALPHA_BLEND});this._drawCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:a,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:e.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const e=J(Math.floor(O(this.visibleLayerMin,0)),0,this._layerCount-1),a=J(Math.floor(O(this.visibleLayerMax,this._layerCount-1)),e,this._layerCount-1);return{min:e,max:a}}_normalizeSpeedRange(e,a){const s=Math.max(1e-4,O(this.maxWindSpeed,X.maxWindSpeed)),S=J(O(e,0)/s,0,1),h=J(O(a,s)/s,0,1);return{min:Math.min(S,h),max:Math.max(S,h)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>O(this.speedFactor,X.speedFactor),maxWindSpeed:()=>Math.max(1e-4,O(this.maxWindSpeed,X.maxWindSpeed)),decaySpeed:()=>J(O(this.decaySpeed,X.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>O(this.arrowLength,X.arrowLength),trailLength:()=>O(this.trailLength,X.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>J(O(this.alphaFactor,X.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function nt(x){if(!x)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:e,DeveloperError:a,Ellipsoid:s,Resource:S,HeightmapTerrainData:h,Rectangle:A,TileAvailability:N,CustomHeightmapTerrainProvider:l}=x;function w(M,f,p,g,I,t){const n=M.tileXYToRectangle(p,g,I);return e(A.intersection(n,f,t))}function D(M){const f=[[[0,0,1,0]]],p=new N(M.tilingScheme,19);for(let g=0;g<f.length;g++){const I=f[g];for(let t=0;t<I.length;t++){const n=I[t];p.addAvailableTileRange(g,n[0],n[1],n[2],n[3])}}return p}function y(M,f,p,g,I){const t=new h({buffer:M._transformBuffer(f),width:M._width,height:M._height,childTileMask:M._getChildTileMask(g,I,p),structure:M._terrainDataStructure});return t._skirtHeight=6e3,M.availability.addAvailableTileRange(p,g,I,g,I),t}class H extends l{constructor(f={}){if(super({...f,ellipsoid:s.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!e(f.url))throw new a("options.url is required.");this._dataType=f.dataType??"int16",this._url=f.url,this._subdomains=f.subdomains,this._token=f.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=D(this)}get availability(){return this._availability}requestTileGeometry(f,p,g,I){if(g>=this._bottomLevel)return Promise.reject(new Error(`Level ${g} is outside supported range.`));if(g<this._topLevel)return Promise.resolve(new h({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(f,p,g),structure:this._terrainDataStructure}));let t=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const i=this._subdomains[(f+p)%this._subdomains.length];t=t.replace("{s}",i)}t=t.replace("{token}",this._token).replace("{x}",f).replace("{y}",p).replace("{z}",g+1);const n=S.fetchArrayBuffer({url:t,request:I});if(n)return n.then(i=>i.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Be.inflate(i)).then(i=>y(this,i,g,f,p))}getTileDataAvailable(f,p,g){return g<this._bottomLevel}_transformBuffer(f){let p=2;this._dataType==="float"&&(p=4);const g=f;if(g.length!==22500*p)return null;const I=new ArrayBuffer(p),t=new DataView(I),n=this._width,i=this._height,d=new Uint8Array(n*i*4);for(let E=0;E<i;E++)for(let m=0;m<n;m++){const u=Math.floor(149*E/(i-1)),R=Math.floor(149*m/(n-1)),L=p*(150*u+R);let _;p===4?(t.setInt8(0,g[L]),t.setInt8(1,g[L+1]),t.setInt8(2,g[L+2]),t.setInt8(3,g[L+3]),_=t.getFloat32(0,!0)):_=g[L]+256*g[L+1],(_>1e4||_<-2e3)&&(_=0);const P=(_+1e3)/.001,W=4*(E*n+m);d[W]=P/65536,d[W+1]=(P-256*d[W]*256)/256,d[W+2]=P-256*d[W]*256-256*d[W+1],d[W+3]=255}return d}_getVHeightBuffer(){let f=this._vHeightBuffer;if(!e(f)){f=new Uint8ClampedArray(this._width*this._height*4);for(let p=0;p<this._width*this._height*4;)f[p++]=15,f[p++]=66,f[p++]=64,f[p++]=255;this._vHeightBuffer=f}return f}_getChildTileMask(f,p,g){const I=new A,t=this._tilingScheme,n=this._rectangles,i=t.tileXYToRectangle(f,p,g);let d=0;for(let E=0;E<n.length&&d!==15;E++){const m=n[E];if(m.maxLevel<=g)continue;const u=m.rectangle,R=A.intersection(u,i,I);e(R)&&(w(t,u,2*f,2*p,g+1,I)&&(d|=4),w(t,u,2*f+1,2*p,g+1,I)&&(d|=8),w(t,u,2*f,2*p+1,g+1,I)&&(d|=1),w(t,u,2*f+1,2*p+1,g+1,I)&&(d|=2))}return d}}return H}function be(x){return Ne.parse(x)}const rt=be(`
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
`).root.lookup("GEOPOI.PBPOITile"),at=be(`
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
`).root.lookup("GEOPOI.PBPOITile"),ot=be(`
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
`).root.lookup("GEOPOI.PBPOITile");function Ce(x,e){return e.minX>=x.minX&&e.minX<=x.maxX&&e.minY>=x.minY&&e.minY<=x.maxY||e.maxX>=x.minX&&e.maxX<=x.maxX&&e.maxY>=x.minY&&e.maxY<=x.maxY||e.minX>=x.minX&&e.minX<=x.maxX&&e.maxY>=x.minY&&e.maxY<=x.maxY||e.maxX>=x.minX&&e.maxX<=x.maxX&&e.minY>=x.minY&&e.minY<=x.maxY}function st(x){let e=0;for(let a=0;a<x.length;a++)x.charAt(a).match(/[^\x00-\xff]/gi)!=null?e+=2:e+=1;return e}function Te(x,e){const a=x.x,s=x.y,S=x.width,h=x.height,A=e.x,N=e.y,l=e.width,w=e.height;return!(A<=a&&A+l<=a||a<=A&&a+S<=A||N<=s&&N+w<=s||s<=N&&s+h<=N)}function lt(x){const e={stringTable:[],pois:[],enumGeometryType:[{ePoint:0},{eMultiLineString:1},{ePolygon:2}],enumZCoordType:[{eCloseGround:0},{eCloseSeaSurface:1},{eRelativelyGround:2},{eAbsolute:3}]};let a;const s=new Uint8Array(x);try{a=ot.decode(s)}catch{}if(!a)try{a=at.decode(s)}catch{a=rt.decode(s)}e.version=parseInt(a.Version.toString(),10),e.titleKey=parseInt(a.TileKey.toString(),10);for(let h=0;h<a.StringTable.s.length;h++)e.stringTable.push(a.StringTable.s[h].toString());let S=a.POIS.length;for(;S--;){const h=a.POIS[S],A={oid:`${parseInt(h.OID.toString(),10)}_${e.titleKey}`,name:h.Name.toString(),symbolID:parseInt(h.SymbolID.toString(),10),displayHeight:h.DisplayHeight,shiningColor:h.ShiningColor,fontNameIndex:h.FontNameIndex,fontSize:h.FontSize,fontColor:h.FontColor,zCoordType:h.ZCoordType??void 0,geometryType:h.GeometryType,coordinate:h.Coordinates,priority:typeof h.Priority>"u"?null:h.Priority,interates:typeof h.Interates>"u"?null:h.Interates,fontStyle:typeof h.FontStyle>"u"?null:h.FontStyle,shiningSize:typeof h.ShiningSize>"u"?null:h.ShiningSize};e.pois.push(A)}return e}function ct(x){if(!x)throw new Error("Cesium is required to create GeoWTFS.");const{Cartesian2:e,Cartesian3:a,Color:s,createGuid:S,defined:h,DeveloperError:A,Entity:N,HorizontalOrigin:l,LabelStyle:w,Math:D,SceneTransforms:y,VerticalOrigin:H,combine:M}=x,f={font:"28px sans-serif",fontSize:28,fillColor:s.WHITE,scale:.5,outlineColor:s.BLACK,outlineWidth:5,style:w.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:s.RED,backgroundPadding:new e(10,10),horizontalOrigin:l.CENTER,verticalOrigin:H.TOP,eyeOffset:a.ZERO,pixelOffset:new e(0,8)},p={horizontalOrigin:l.CENTER,verticalOrigin:H.CENTER,eyeOffset:a.ZERO,pixelOffset:e.ZERO,alignedAxis:a.ZERO,color:s.WHITE,rotation:0,scale:1,width:18,height:18};class g{constructor(t,n={}){if(!h(t))throw new A("viewer is required.");if(!h(n.url))throw new A("options.url is required.");this.viewer=t,this.proxy=n.proxy,this.url=n.url,this.icoUrl=n.icoUrl??n.iconUrl,this.metadata=n.metadata,this.roadMetadata=n.roadMetadata,this.roadUrl=n.roadUrl,this.labelGraphics=M(n.labelGraphics,f,!0),this.billboardGraphics=M(n.billboardGraphics,p,!0),this.aotuCollide=!!n.aotuCollide,this.collisionPadding=n.collisionPadding??[3,5,3,5],this.serverFirstStyle=!!n.serverFirstStyle,this.subdomains=n.subdomains||[],this.tileCache=[],this.labelCache=[],this._isInitial=!1,this._latelyGrid=[],this._latelyRefreshStamp=0,this._latelyCollisionStamp=0;const i=S();this._UUID=`GEO_WTFS_LABEL_${i}`,this._UUIDRoad=`GEO_WTFS_LABEL_ROAD_${i}`,this.viewer.camera.percentageChanged=.18,this.bindEvent()}bindEvent(){this.viewer.scene.camera.moveEnd.addEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.addEventListener(this._changed,this)}_moveEnd(){clearTimeout(this._timer);const t=this.viewer.scene.globe._surface;if(t._tilesToRender.length<2||t._tileLoadQueueHigh.length>0)this._timer=setTimeout(()=>{this._moveEnd()},100);else{const n=this.getTilesToRender();if(this.compareArray(n,this._latelyGrid))return;this._queueCall(n),this.delaySynchronous()}}_changed(){const t=new Date().getTime(),n=t-this._latelyRefreshStamp,i=t-this._latelyCollisionStamp;n>300&&this._moveEnd(),i>150&&this.collisionDetection()}getTilesToRender(){const t=this.viewer.scene.globe._surface._tilesToRender.map(i=>({x:i.x,y:i.y,level:i.level,boundBox:{minX:D.toDegrees(i.rectangle.west),minY:D.toDegrees(i.rectangle.south),maxX:D.toDegrees(i.rectangle.east),maxY:D.toDegrees(i.rectangle.north)}})).sort((i,d)=>d.level-i.level),n=[t[0].level];for(let i=0;i<t.length;i++)t[i].level!==n[n.length-1]&&(n.push(t[i].level),n.length>4&&(t.splice(i,1/0),i--));return t}compareArray(t,n){let i=!1;for(let d=0;d<t.length;d++){let E=!1;for(let m=0;m<n.length;m++)if(t[d].x===n[m].x&&t[d].y===n[m].y&&t[d].level===n[m].level){E=!0;break}if(!E){i=!0;break}}return!i}_queueCall(t){this._latelyGrid=t,this._latelyRefreshStamp=new Date().getTime();let n=t.length;for(;n--;){const i=t[n];if(this.metadata&&Ce(this.metadata.boundBox,i.boundBox)){if(this.metadata.minLevel>i.level+1||this.metadata.maxLevel<i.level+1)return;const d=this.getCacheTile(i.x,i.y,i.level,0);if(d)this.addLabelAndIco(d);else{const E=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",m=this.getTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",E),u=new XMLHttpRequest;u.open("GET",m,!0),u.responseType="arraybuffer";const R=this;u.onload=function(){if(!(u.status<200||u.status>=300)){const L=R.cutString(u.response);let _;L?(_=lt(L),_.x=this.tile.x,_.y=this.tile.y,_.z=this.tile.z,_.t=0,R.addCacheTile(_),R.addLabelAndIco(_)):(_={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:0},R.addCacheTile(_),R.delaySynchronous())}},u.onerror=function(L){},u.send(),u.tile={x:i.x,y:i.y,z:i.level+1}}}if(this.roadMetadata&&Ce(this.roadMetadata.boundBox,i.boundBox)){if(this.roadMetadata.minLevel>i.level+1||this.roadMetadata.maxLevel<i.level+1)return;const d=this.getCacheTile(i.x,i.y,i.level,0);if(d)this.addLabelAndIco(d);else{const E=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",m=this.getRoadTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",E),u=new XMLHttpRequest;u.open("GET",m,!0),u.responseType="json";const R=this;u.onload=function(){if(!(u.status<200||u.status>=300)){const L=u.response;let _;L?(_={pois:L.map(P=>({oid:`${P.LabelPoint.X}_${P.LabelPoint.Y}`,name:P.Feature.properties.Name,coordinate:[P.LabelPoint.X,P.LabelPoint.Y,P.LabelPoint.Z?P.LabelPoint.Z:0]})),x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},R.addCacheTile(_),R.addLabelAndIco(_)):(_={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},R.addCacheTile(_),R.delaySynchronous())}},u.onerror=function(L){},u.send(),u.tile={x:i.x,y:i.y,z:i.level+1}}}}}cutString(t){if(!t)return"";const n=t.byteLength;return n<=28?"":t.slice(19,n-9)}addCacheTile(t){this.tileCache.length>999&&this.tileCache.splice(0,500),this.removeCacheTile(t.x,t.y,t.z,t.t),this.tileCache.push(t)}getCacheTile(t,n,i,d){let E=this.tileCache.length;for(;E--;){const m=this.tileCache[E];if(m.x===t&&m.y===n&&m.z===i&&m.t===d)return m}return null}removeCacheTile(t,n,i,d){let E=this.tileCache.length;for(;E--;){const m=this.tileCache[E];if(m.x===t&&m.y===n&&m.z===i&&m.t===d){this.tileCache.splice(E,1);return}}}getCacheLabel(t){let n=this.labelCache.length;for(;n--;){const i=this.labelCache[n];if(i.name===this._UUID&&i.oid===t)return i}return null}addCacheLabel(t){this.labelCache.length>999&&this.labelCache.splice(0,250),this.removeCacheLabel(t.oid),t.timestamp=new Date().getTime(),this.labelCache.push(t)}removeCacheLabel(t){let n=this.labelCache.length;for(;n--;)if(this.labelCache[n].name===this._UUID&&this.labelCache[n].oid===t){this.labelCache.splice(n,1);return}}HexadecimalConversion(t){if(t===4278190080)return"#000000";let n=4278190080|parseInt(-Number(t),10),i="";if(n=n.toString(16).substring(1),n.length<6)for(let d=0;d<6-n.length;d++)i+="0";return`#${i}${n}`}addLabelAndIco(t){if(t.pois&&t.pois.length){let n=t.pois.length;for(;n--;){const i=t.pois[n];let d=this.getCacheLabel(i.oid);d||(d=this.createLabel(i,t)),d&&this.addCacheLabel(d)}}this.delaySynchronous()}createLabel(t,n){if(!t)return;const i={show:!0,position:a.fromDegrees(...t.coordinate),label:{text:t.name}};if(Object.assign(i.label,this.labelGraphics),this.serverFirstStyle&&(t.fontSize!==void 0&&(i.label.font=`${t.fontSize}px `,t.fontNameIndex!==void 0&&n.stringTable&&n.stringTable[t.fontNameIndex]?i.label.font+=n.stringTable[t.fontNameIndex]:i.label.font+="sans-serif",!this.labelGraphics.bold&&(t.fontStyle!==1||t.fontStyle!==3)&&(i.label.font=`bold ${i.label.font}`),(t.fontStyle!==2||t.fontStyle!==3)&&(i.label.font=`italic ${i.label.font}`)),t.fontColor!==void 0&&(i.label.fillColor=s.fromCssColorString(this.HexadecimalConversion(t.fontColor))),t.shiningColor!==void 0&&(i.label.outlineColor=s.fromCssColorString(this.HexadecimalConversion(t.shiningColor))),typeof t.shiningSize=="number"&&(i.label.outlineWidth=t.shiningSize),t.showBackground!==void 0&&(i.label.showBackground=t.showBackground),t.backgroundColor!==void 0&&(i.label.backgroundColor=t.backgroundColor),t.backgroundPadding!==void 0&&(i.label.backgroundPadding=t.backgroundPadding),t.eyeOffset!==void 0&&(i.label.eyeOffset=t.eyeOffset),t.pixelOffset!==void 0&&(i.label.pixelOffset=t.pixelOffset),t.style!==void 0&&(i.label.style=t.style),t.scale!==void 0&&(i.label.scale=t.scale),n.t||(t.verticalOrigin!==void 0&&(i.label.verticalOrigin=t.verticalOrigin),t.horizontalOrigin!==void 0&&(i.label.horizontalOrigin=t.horizontalOrigin))),t.symbolID!==void 0&&t.symbolID>-1&&this.icoUrl){const E=this.subdomains.length?(n.x+n.y)%this.subdomains.length:"";i.billboard={image:this.getIcoUrl().replace("{id}",t.symbolID).replace("{s}",this.subdomains[E])},Object.assign(i.billboard,this.billboardGraphics),this.serverFirstStyle&&(t.displayHeight!==void 0&&(i.billboard.width=t.displayHeight,i.billboard.height=t.displayHeight),t.eyeOffset!==void 0&&(i.billboard.eyeOffset=t.eyeOffset),t.pixelOffset!==void 0&&(i.billboard.pixelOffset=t.pixelOffset),t.rotation!==void 0&&(i.billboard.rotation=t.rotation),t.alignedAxis!==void 0&&(i.billboard.alignedAxis=t.alignedAxis),t.color!==void 0&&(i.billboard.color=t.color),t.scale!==void 0&&(i.billboard.scale=t.scale),n.t||(t.verticalOrigin!==void 0&&(i.billboard.verticalOrigin=t.verticalOrigin),t.horizontalOrigin!==void 0&&(i.billboard.horizontalOrigin=t.horizontalOrigin)))}n.t&&(i.label.verticalOrigin=H.CENTER,i.label.horizontalOrigin=l.CENTER,i.billboard&&(i.billboard.verticalOrigin=H.CENTER,i.billboard.horizontalOrigin=l.CENTER));const d=new N(i);return d.name=n.t?this._UUIDRoad:this._UUID,d.oid=t.oid,d.priority=t.priority||0,d.xyz=`${n.x}_${n.y}_${n.z-1}`,d}getIcoUrl(){return`${this.proxy?this.proxy.proxy:""}${this.icoUrl}`}getTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.url}`}getRoadTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.roadUrl}`}delaySynchronous(){clearTimeout(this._timer2),this._timer2=setTimeout(()=>{this.synchronousLabel()},100)}synchronousLabel(){let t=this.labelCache.length;for(;t--;){const n=this.labelCache[t];n.timestamp>=this._latelyRefreshStamp&&!this.viewer.entities.contains(n)&&(this._isInitial&&this.aotuCollide&&(n.show=!1),this.viewer.entities.add(n))}if(!this._isInitial){let n=this.viewer.entities.values.length-1;for(;n>=0;){const i=this.viewer.entities.values[n];i&&i.name&&(i.name===this._UUID||i.name===this._UUIDRoad)&&i.timestamp<this._latelyRefreshStamp&&this.viewer.entities.remove(i),n--}this.aotuCollide&&this.collisionDetection()}}collisionDetection(){const t=this.viewer.entities.values,n=[],i=[];let d=t.length;for(;d--;){const u=t[d];if(u.name&&(u.name===this._UUID||u.name===this._UUIDRoad)){const R=this.getScreenCoordinates(u.position.getValue(0));u.show=!0,u.collisionBox=this.getLabelReact({point:R,entity:u});let L=null,_=n.length;for(;!L&&_--;)n[_].xyz===u.xyz&&(L=n[_]);L||(L={xyz:u.xyz,entities:[]},n.push(L)),L.entities.push(u)}}let E=n.length;for(;E--;){const u=n[E];u.entities.sort((R,L)=>R.priority-L.priority);for(let R=0;R<u.entities.length;R++){const L=u.entities[R];if(L.show){for(let _=R+1;_<u.entities.length;_++)u.entities[_].show&&Te(L.collisionBox,u.entities[_].collisionBox)&&(u.entities[_].show=!1);i.push(L)}}}let m=i.length;for(;m--;)if(i[m].show){i.sort((u,R)=>u.priority-R.priority);for(let u=m+1;u<i.length;u++)i[u].show&&Te(i[m].collisionBox,i[u].collisionBox)&&(i[u].show=!1)}}getScreenCoordinates(t){const n=this.viewer.scene;return!n||!t?null:typeof y.worldToDrawingBufferCoordinates=="function"?y.worldToDrawingBufferCoordinates(n,t):typeof y.worldToWindowCoordinates=="function"?y.worldToWindowCoordinates(n,t):typeof y.wgs84ToWindowCoordinates=="function"?y.wgs84ToWindowCoordinates(n,t):null}getLabelReact(t){const{point:n,entity:i}=t;let d=parseInt(i.label.font,10);d=d>0?d:15;const E=i.label.text.getValue(0).split(`
`);let m=0;for(let L=0;L<E.length;L++){const _=st(E[L])/2;m<_&&(m=_)}const u=i.billboard?i.billboard.width.getValue(0)*i.billboard.scale.getValue(0):1,R=i.billboard?i.billboard.height.getValue(0)*i.billboard.scale.getValue(0):1;return{x:(n?n.x:-999)-u/2-this.collisionPadding[3],y:(n?n.y:-999)-R/2-this.collisionPadding[0],width:d*i.label.scale.getValue(0)*m+i.label.pixelOffset.getValue(0).x+u+this.collisionPadding[1],height:d*i.label.scale.getValue(0)*m+i.label.pixelOffset.getValue(0).y+u+this.collisionPadding[2]}}initTDT(t,n){let i=0;this._isInitial=!0,this._queueCall(t);const d=setInterval(()=>{i>3&&(this._isInitial=!1,clearInterval(d),typeof n=="function"&&n()),i%2===0&&this.aotuCollide&&this.collisionDetection(),i++},600);return this}getPropertyValue(t,n,i,d){return n[t]!==void 0?n[t]:i[t]!==void 0?i[t]:d}unbindEvent(){this.viewer.scene.camera.moveEnd.removeEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.removeEventListener(this._changed,this)}activate(){this._latelyGrid=[],this._moveEnd()}destroy(){let t=this.viewer.entities.values.length;for(;t--;){const n=this.viewer.entities.values[t];n.name&&(n.name===this._UUID||n.name===this._UUIDRoad)&&(this.viewer.entities.remove(n),t--)}this.viewer.camera.percentageChanged=.5,this.unbindEvent(),this.handler=this.handler&&this.handler.destroy(),this.proxy=void 0,this.viewer=void 0,this.url=void 0,this.labelGraphics=void 0,this.billboardGraphics=void 0,this.aotuCollide=void 0,this.collisionPadding=void 0,this.tileCache=void 0,this.labelCache=void 0,this._latelyGrid=void 0,this._latelyRefreshStamp=void 0,this._roadTileset=void 0}getLabelVisibility(t){if(!t)return!1;const n=this.viewer.canvas.getBoundingClientRect();return!(t.x<-10||t.x>n.right+10||t.y<-10||t.y>n.bottom+10)}}return g}const ut={class:"map-controls-group"},dt={class:"mouse-position-content"},ht={key:1,class:"wind-controls"},ft={class:"param-row"},mt={class:"param-row"},pt={class:"param-row"},gt={class:"param-row"},le="https://t{s}.tianditu.gov.cn/",ye="https://cdn.jsdelivr.net/npm/cesium@1.110/Build/Cesium/",xt={__name:"CesiumContainer",setup(x){let e=null;const a="4267820f43926eaf808d61dc07269beb",s=["0","1","2","3","4","5","6","7"],S=`${ye}Cesium.js`,h=`${ye}Widgets/widgets.css`,A={boundBox:{minX:-180,minY:-90,maxX:180,maxY:90},minLevel:1,maxLevel:20},N=[{x:6,y:1,level:2,boundBox:{minX:90,minY:0,maxX:135,maxY:45}},{x:7,y:1,level:2,boundBox:{minX:135,minY:0,maxX:180,maxY:45}},{x:6,y:0,level:2,boundBox:{minX:90,minY:45,maxX:135,maxY:90}},{x:7,y:0,level:2,boundBox:{minX:135,minY:45,maxX:180,maxY:90}},{x:5,y:1,level:2,boundBox:{minX:45,minY:0,maxX:90,maxY:45}},{x:4,y:1,level:2,boundBox:{minX:0,minY:0,maxX:45,maxY:45}},{x:5,y:0,level:2,boundBox:{minX:45,minY:45,maxX:90,maxY:90}},{x:4,y:0,level:2,boundBox:{minX:0,minY:45,maxX:45,maxY:90}},{x:6,y:2,level:2,boundBox:{minX:90,minY:-45,maxX:135,maxY:0}},{x:6,y:3,level:2,boundBox:{minX:90,minY:-90,maxX:135,maxY:-45}},{x:7,y:2,level:2,boundBox:{minX:135,minY:-45,maxX:180,maxY:0}},{x:5,y:2,level:2,boundBox:{minX:45,minY:-45,maxX:90,maxY:0}},{x:4,y:2,level:2,boundBox:{minX:0,minY:-45,maxX:45,maxY:0}},{x:3,y:1,level:2,boundBox:{minX:-45,minY:0,maxX:0,maxY:45}},{x:3,y:0,level:2,boundBox:{minX:-45,minY:45,maxX:0,maxY:90}},{x:2,y:0,level:2,boundBox:{minX:-90,minY:45,maxX:-45,maxY:90}},{x:0,y:1,level:2,boundBox:{minX:-180,minY:0,maxX:-135,maxY:45}},{x:1,y:0,level:2,boundBox:{minX:-135,minY:45,maxX:-90,maxY:90}},{x:0,y:0,level:2,boundBox:{minX:-180,minY:45,maxX:-135,maxY:90}}];let l=null,w=null,D=null;const y=Y(null),H=Y("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米"),M=Y(!1),f=Ee(),p=Y(1),g=Y(15e3),I=Y(2e4),t=Y(1);Se(()=>{d()});function n(){var v,C;if(y.value){try{(C=(v=l==null?void 0:l.scene)==null?void 0:v.primitives)==null||C.remove(y.value)}catch{}y.value.destroy(),y.value=null}}function i(){if(D){try{D.destroy()}catch{}D=null}}we(()=>{if(M.value=!1,w&&(w.destroy(),w=null),n(),i(),l){try{l._creditCheckInterval&&clearInterval(l._creditCheckInterval),l.destroy()}catch{}l=null}});async function d(){Oe("正在初始化 3D 场景...");try{if(await u(),!e||!document.getElementById("cesiumContainer"))return;R(),L(),_();const v=P(),C=W();M.value=!0,v?f.success("天地图基础影像与地形加载成功。"):f.error("天地图地形加载失败，请检查 token 或网络。",{closable:!0})}catch(v){f.error("Cesium 运行时加载失败",v),f.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{Fe()}}function E(){return l}function m(){return e||window.Cesium}async function u(){if(window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=ye),await ne(h,"cesium-widgets-style"),await ce(S,"cesium-runtime-script"),e=window.Cesium,!e)throw new Error("Cesium global 未找到")}function R(){var V;const v=typeof e.Map=="function"?e.Map:e.Viewer;l=new v("cesiumContainer",{imageryProvider:!1,terrainProvider:void 0,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,selectionIndicator:!1,timeline:!1,animation:!1,sceneModePicker:!1,navigationHelpButton:!1,shouldAnimate:!0}),ue(0),(V=l._cesiumWidget)!=null&&V._creditContainer&&(l._cesiumWidget._creditContainer.style.display="none"),l.scene.globe.terrainExaggeration=1,l.scene.globe.terrainExaggerationRelativeHeight=0,l.scene.globe.showGroundAtmosphere=!0,l.scene.globe.depthTestAgainstTerrain=!0,(()=>{var B;(B=l._cesiumWidget)!=null&&B._creditContainer&&(l._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",l._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach($=>{$.style.cssText="display: none !important; visibility: hidden !important;",$.innerHTML=""}),l.scene&&l.scene.frameState&&l.scene.frameState.creditDisplay&&(l.scene.frameState.creditDisplay.hasCredits=()=>!1,l.scene.frameState.creditDisplay.destroy=()=>{})})();const z=setInterval(()=>{const U=document.querySelector(".cesium-credit-container");U&&U.innerHTML.length>0&&(U.innerHTML="",U.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500);if(l._creditCheckInterval=z,!document.getElementById("cesium-credit-override")){const U=document.createElement("style");U.id="cesium-credit-override",U.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(U)}}function L(){w=new e.ScreenSpaceEventHandler(l.scene.canvas),w.setInputAction(v=>{const C=l.camera.getPickRay(v.endPosition);if(!C)return;const z=l.scene.globe.pick(C,l.scene);if(z){const V=e.Cartographic.fromCartesian(z),U=e.Math.toDegrees(V.longitude).toFixed(6),B=e.Math.toDegrees(V.latitude).toFixed(6),$=V.height.toFixed(2);H.value=`经度: ${U}, 纬度: ${B}, 海拔: ${$}米`}},e.ScreenSpaceEventType.MOUSE_MOVE),w.setInputAction(v=>{const C=v.endPosition,z=v.startPosition;if(!e.defined(l.terrainProvider))return;const V=l.scene.globe.ellipsoid;if(!l.camera.pickEllipsoid(z,V)){const B=l.camera;B.rotate(e.Cartesian3.UNIT_X,-.002*(C.endPosition.y-C.startPosition.y)),B.rotate(e.Cartesian3.UNIT_Y,-.002*(C.endPosition.x-C.startPosition.x))}},e.ScreenSpaceEventType.RIGHT_DRAG),w.setInputAction(()=>{},e.ScreenSpaceEventType.RIGHT_DOWN),w.setInputAction(()=>{},e.ScreenSpaceEventType.RIGHT_UP)}function _(){const v=l.imageryLayers,C=new e.UrlTemplateImageryProvider({url:`${le}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${a}`,subdomains:s,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:18});v.addImageryProvider(C);const z=new e.UrlTemplateImageryProvider({url:`${le}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${a}`,subdomains:s,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:10});v.addImageryProvider(z)}function P(){const v=nt(e);try{return l.terrainProvider=new v({url:`${le}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:s,token:a}),l.scene.globe.depthTestAgainstTerrain=!0,!0}catch(C){return l.terrainProvider=new e.EllipsoidTerrainProvider,f.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),f.error("官方地形初始化失败",C),!1}}function W(){try{const v=ct(e);return D=new v(l,{subdomains:s,url:`${le}mapservice/GetTiles?lxys={z},{x},{y}&tk=${a}&VERSION=1.0.0`,icoUrl:`${le}mapservice/GetIcon?id={id}&tk=${a}`,metadata:A,aotuCollide:!0,collisionPadding:[5,10,8,5],serverFirstStyle:!0,labelGraphics:{font:"28px sans-serif",fontSize:28,fillColor:e.Color.WHITE,scale:.5,outlineColor:e.Color.BLACK,outlineWidth:5,style:e.LabelStyle.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:e.Color.RED,backgroundPadding:new e.Cartesian2(10,10),horizontalOrigin:e.HorizontalOrigin.CENTER,verticalOrigin:e.VerticalOrigin.TOP,eyeOffset:new e.Cartesian3(0,0,10),pixelOffset:e.Cartesian2.ZERO},billboardGraphics:{horizontalOrigin:e.HorizontalOrigin.CENTER,verticalOrigin:e.VerticalOrigin.CENTER,eyeOffset:e.Cartesian3.ZERO,pixelOffset:e.Cartesian2.ZERO,alignedAxis:e.Cartesian3.ZERO,color:e.Color.WHITE,rotation:0,scale:1,width:18,height:18}}),D.initTDT(N,()=>{l.scene.requestRender()}),!0}catch{return!1}}function ee(){const V=[0,2e3,5e3,1e4,15e3],U=[3e4,3e4,25e3,25e3,2e4],B=[30,30,25,25,20],$=B.reduce((Z,q)=>Z+q*q,0),de=new Array($),he=new Array($),oe=new Array($);let se=0;for(let Z=0;Z<5;Z++){const q=B[Z],te=B[Z],o=U[Z];for(let r=0;r<te;r++)for(let c=0;c<q;c++){const b=se+r*q+c,F=(c-q/2)*(o/111320),k=(r-te/2)*(o/111320/Math.cos(e.Math.toRadians(35))),re=Math.atan2(k,F)+Math.PI/2+.2*Math.sin(c*.5)*Math.cos(r*.5);he[b]=e.Math.toDegrees(re)%360;const Q=Math.sqrt(F*F+k*k),Pe=Math.max(0,1-Q/15);de[b]=(5+Z*2)*Pe+2*Math.random(),oe[b]=.5*Math.sin(c*.3)*Math.cos(r*.3)}se+=q*te}return{longitude:104,latitude:35,altitude:V,sizeMesh:U,count:B,hspeed:de,hdir:he,vspeed:oe}}function ie(){if(!l||!e){f.error("Cesium 尚未初始化");return}n();const v=ee();y.value=new it(l,{maxWindSpeed:20,cesium:e,speedFactor:p.value,arrowLength:g.value,trailLength:I.value,alphaFactor:t.value}),y.value.loadData(v),l.scene.primitives.add(y.value),y.value.flyTo(),f.success("风场加载成功，可通过下方滑块调节样式")}function j(){y.value&&(y.value.speedFactor=p.value,y.value.arrowLength=g.value,y.value.trailLength=I.value,y.value.alphaFactor=t.value)}function ce(v,C){return new Promise((z,V)=>{const U=document.getElementById(C);if(U){if(U.getAttribute("data-loaded")==="true"){z();return}U.addEventListener("load",()=>z(),{once:!0}),U.addEventListener("error",()=>V(new Error(`脚本加载失败: ${v}`)),{once:!0});return}const B=document.createElement("script");B.id=C,B.src=v,B.async=!0,B.onload=()=>{B.setAttribute("data-loaded","true"),z()},B.onerror=()=>V(new Error(`脚本加载失败: ${v}`)),document.head.appendChild(B)})}function ne(v,C){return new Promise((z,V)=>{if(document.getElementById(C)){z();return}const B=document.createElement("link");B.id=C,B.rel="stylesheet",B.href=v,B.onload=()=>z(),B.onerror=()=>V(new Error(`样式加载失败: ${v}`)),document.head.appendChild(B)})}function ue(v){if(!l)return;const C=typeof v=="number"?v:2;l.camera.flyTo({destination:e.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-e.Math.PI_OVER_TWO,roll:0},duration:C})}function ge(){l&&l.camera.flyTo({destination:e.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:e.Math.toRadians(0),pitch:e.Math.toRadians(-25),roll:0},duration:3})}async function xe(){if(l)try{const v=await e.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");l.scene.primitives.add(v),l.flyTo(v,{duration:3,offset:new e.HeadingPitchRange(e.Math.toRadians(0),e.Math.toRadians(-25),v.boundingSphere.radius*2.5)})}catch(v){f.error(`加载模型失败: ${v}`),f.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return(v,C)=>(pe(),_e(Ie,null,[C[7]||(C[7]=T("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),M.value?(pe(),Re(De(qe),{key:0,"get-viewer":E,"get-cesium":m})):ve("",!0),T("div",ut,[T("div",dt,ae(H.value),1),C[6]||(C[6]=T("div",{class:"divider"},null,-1)),T("button",{class:"home-btn",onClick:ue,title:"回到初始位置"},[...C[5]||(C[5]=[T("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[T("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])]),T("div",{class:"cesium-controls"},[T("button",{onClick:ge,class:"fly-btn"}," 🏔️ 飞越珠穆朗玛峰 "),T("button",{onClick:xe,class:"fly-btn"}," 🏢 加载3D模型 "),T("button",{onClick:ie,class:"fly-btn"}," 🌬️ 加载模拟风场 ")]),y.value?(pe(),_e("div",ht,[T("button",{class:"close-btn",onClick:C[0]||(C[0]=z=>y.value=!1),title:"关闭控制面板"}," × "),T("div",ft,[T("label",null,"速度因子: "+ae(p.value.toFixed(1)),1),K(T("input",{type:"range",min:"0.1",max:"5",step:"0.1","onUpdate:modelValue":C[1]||(C[1]=z=>p.value=z),onInput:j},null,544),[[me,p.value,void 0,{number:!0}]])]),T("div",mt,[T("label",null,"箭头长度: "+ae(g.value/1e3)+"km",1),K(T("input",{type:"range",min:"5000",max:"50000",step:"1000","onUpdate:modelValue":C[2]||(C[2]=z=>g.value=z),onInput:j},null,544),[[me,g.value,void 0,{number:!0}]])]),T("div",pt,[T("label",null,"尾迹长度: "+ae(I.value/1e3)+"km",1),K(T("input",{type:"range",min:"5000",max:"80000",step:"1000","onUpdate:modelValue":C[3]||(C[3]=z=>I.value=z),onInput:j},null,544),[[me,I.value,void 0,{number:!0}]])]),T("div",gt,[T("label",null,"透明度: "+ae(t.value.toFixed(2)),1),K(T("input",{type:"range",min:"0.1",max:"1",step:"0.05","onUpdate:modelValue":C[4]||(C[4]=z=>t.value=z),onInput:j},null,544),[[me,t.value,void 0,{number:!0}]])])])):ve("",!0)],64))}},Mt=Le(xt,[["__scopeId","data-v-3d1141b3"]]);export{Mt as default};
