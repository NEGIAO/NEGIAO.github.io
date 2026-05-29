import{A as Se,o as we,a as pe,c as _e,f as S,t as re,C as Z,Z as fe,V as Re,r as Y,N as De,x as Ie,P as Oe,g as ve,D as me,F as Fe}from"./vendor-vue-ojuJXn1Z.js";import{_ as Le,u as Ee,I as ze,H as Be}from"./index-BgzBW6BU.js";import{_ as Ne}from"./vendor-runtime-CAQj6dvO.js";import{aa as Ue,ab as ke}from"./vendor-libs-iDwZQydm.js";import"./vendor-ol-all-C5e30MU7.js";import"./vendor-geotiff-DvokpQCc.js";import"./vendor-lerc-B7uDJLnU.js";import"./vendor-jszip-C96CrfCN.js";import"./vendor-proj4-CVV176HV.js";import"./vendor-axios-Bdz_Fv8M.js";const We={class:"advanced-effects-root"},Xe={class:"effects-panel"},Ve={class:"panel-head"},He={class:"effect-switches"},Ge={class:"switch-item"},Ye={class:"switch-item"},$e={class:"switch-item"},qe={class:"switch-item"},Ze={__name:"CesiumAdvancedEffects",props:{getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0}},setup(p){const e=p,a=Ee(),s=Y(null),w=Y(!0),h=Y(!1),A=Y(!0),U=Y(!0),l=Y(!1);let L=null,I=null,E=null,X=!1,b=null,g=null,m=null,f=null,O=null,t=null,n=null,i=null,d=!1,v=0,_=0,c=typeof performance<"u"?performance.now():Date.now();function R(){return m||(m=Ne(()=>import("./cesiumFxRuntime-C4qeOmWK.js"),[],import.meta.url).then(o=>{var u;const r=(u=o==null?void 0:o.getCesiumFxEchartsRuntime)==null?void 0:u.call(o);if(!r)throw new Error("Cinematic FX 图表运行时加载失败");return g=r,r}).catch(o=>{throw m=null,o}),m)}async function P(){return g||R()}const x={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},M={hdr:null,bloom:null,sky:null};Se(()=>{W()}),we(()=>{J()});function W(){let o=0;f=window.setInterval(async()=>{var y,D;o+=1;const r=(y=e.getViewer)==null?void 0:y.call(e),u=((D=e.getCesium)==null?void 0:D.call(e))||window.Cesium;if(r&&u){clearInterval(f),f=null;try{Q(r),ne(r),ie(r,u),ue(r),a.success("高级视觉效果已启用。")}catch(k){a.error("高级视觉效果初始化失败",k),a.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}o>=150&&(clearInterval(f),f=null,a.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function Q(o){var u,y,D,k,H,j;const r=o==null?void 0:o.scene;if(r){if(typeof r.highDynamicRange=="boolean"&&(M.hdr=r.highDynamicRange),(u=r.postProcessStages)!=null&&u.bloom){const te=r.postProcessStages.bloom;M.bloom={enabled:!!te.enabled,contrast:(y=te.uniforms)==null?void 0:y.contrast,brightness:(D=te.uniforms)==null?void 0:D.brightness,delta:(k=te.uniforms)==null?void 0:k.delta,sigma:(H=te.uniforms)==null?void 0:H.sigma,stepSize:(j=te.uniforms)==null?void 0:j.stepSize}}r.skyAtmosphere&&(M.sky={hueShift:r.skyAtmosphere.hueShift,saturationShift:r.skyAtmosphere.saturationShift,brightnessShift:r.skyAtmosphere.brightnessShift})}}function ie(o,r){var y;!((y=o==null?void 0:o.scene)!=null&&y.postProcessStages)||!(r!=null&&r.PostProcessStage)||(q(o,r),ge(o,r),xe(o,r),de(o,1200))}function ne(o){var u;const r=o==null?void 0:o.scene;(u=r==null?void 0:r.renderError)!=null&&u.addEventListener&&(r.rethrowRenderErrors=!1,i=r.renderError.addEventListener((y,D)=>{a.error("Cesium 渲染异常，已触发降级保护",D),ce(),d||(d=!0,a.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function ce(){w.value=!1,A.value=!1,h.value=!1,U.value=!1,L&&(L.enabled=!1),I&&(I.enabled=!1),E&&(E.enabled=!1)}function q(o,r){L||(L=new r.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new r.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),o.scene.postProcessStages.add(L),L.enabled=w.value)}function ge(o,r){var y,D;const u=(y=o==null?void 0:o.scene)==null?void 0:y.postProcessStages;u&&(u.ambientOcclusion?(E=u.ambientOcclusion,X=!1):(D=r==null?void 0:r.PostProcessStageLibrary)!=null&&D.createAmbientOcclusionStage&&(E=r.PostProcessStageLibrary.createAmbientOcclusionStage(),u.add(E),X=!0),E&&(E.enabled=h.value,E.uniforms&&("intensity"in E.uniforms&&(E.uniforms.intensity=4.2),"bias"in E.uniforms&&(E.uniforms.bias=.08),"lengthCap"in E.uniforms&&(E.uniforms.lengthCap=.35),"stepSize"in E.uniforms&&(E.uniforms.stepSize=1.8),"frustumLength"in E.uniforms&&(E.uniforms.frustumLength=1200))))}function xe(o,r){I||(I=new r.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),o.scene.postProcessStages.add(I),I.enabled=!1)}function ue(o){const r=o==null?void 0:o.scene;r&&(n=r.preRender.addEventListener(()=>{var k;const u=ae(o),y=Number(((k=o==null?void 0:o.camera)==null?void 0:k.pitch)??-1.2);v+=1;const D=typeof performance<"u"?performance.now():Date.now();if(D-c>=1e3&&(_=Math.round(v*1e3/(D-c)),v=0,c=D),L&&(L.enabled=w.value,L.uniforms.cameraHeightFactor=oe(u,150,12e3),L.uniforms.fogDensity=55e-5+(1-L.uniforms.cameraHeightFactor)*.00125),E&&(E.enabled=h.value),I){const H=y>-.62,j=H?se((y+.62)/.5):0;I.enabled=A.value&&H,I.uniforms.blurStrength=j}U.value?de(o,u):he(o)}))}function de(o,r){var H;const u=o==null?void 0:o.scene;if(!u)return;typeof u.highDynamicRange=="boolean"&&(u.highDynamicRange=!0);const y=(H=u.postProcessStages)==null?void 0:H.bloom;y&&(y.enabled=!0,y.uniforms&&("contrast"in y.uniforms&&(y.uniforms.contrast=149),"brightness"in y.uniforms&&(y.uniforms.brightness=-.12),"delta"in y.uniforms&&(y.uniforms.delta=1),"sigma"in y.uniforms&&(y.uniforms.sigma=3.25),"stepSize"in y.uniforms&&(y.uniforms.stepSize=5)));const D=u.skyAtmosphere;if(!D)return;const k=oe(r,500,12e4);D.hueShift=-.035+k*.035,D.saturationShift=-.14+k*.09,D.brightnessShift=.03+(1-k)*.08}function he(o){var y;const r=o==null?void 0:o.scene;if(!r)return;typeof r.highDynamicRange=="boolean"&&M.hdr!==null&&(r.highDynamicRange=M.hdr);const u=(y=r.postProcessStages)==null?void 0:y.bloom;u&&M.bloom&&(u.enabled=M.bloom.enabled,u.uniforms&&("contrast"in u.uniforms&&M.bloom.contrast!==void 0&&(u.uniforms.contrast=M.bloom.contrast),"brightness"in u.uniforms&&M.bloom.brightness!==void 0&&(u.uniforms.brightness=M.bloom.brightness),"delta"in u.uniforms&&M.bloom.delta!==void 0&&(u.uniforms.delta=M.bloom.delta),"sigma"in u.uniforms&&M.bloom.sigma!==void 0&&(u.uniforms.sigma=M.bloom.sigma),"stepSize"in u.uniforms&&M.bloom.stepSize!==void 0&&(u.uniforms.stepSize=M.bloom.stepSize))),r.skyAtmosphere&&M.sky&&(r.skyAtmosphere.hueShift=M.sky.hueShift,r.skyAtmosphere.saturationShift=M.sky.saturationShift,r.skyAtmosphere.brightnessShift=M.sky.brightnessShift)}function T(){O&&(clearInterval(O),O=null)}async function C(){var y,D;const o=!l.value;if(l.value=o,!o){T();return}const r=(y=e.getViewer)==null?void 0:y.call(e),u=((D=e.getCesium)==null?void 0:D.call(e))||window.Cesium;if(!r||!u){l.value=!1,a.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await z(r,u),N(r,u),V(r,u)}catch(k){l.value=!1,a.error("图表模块加载失败",k)}}async function z(o,r){await P(),await De(),s.value&&(b||(b=g.init(s.value),B()),t||(t=()=>{b==null||b.resize()},window.addEventListener("resize",t)),b.resize(),V(o,r))}function N(o,r){O||(O=window.setInterval(()=>{!b||!l.value||V(o,r)},1200))}function V(o,r){var H;const u=new Date,y=`${$(u.getHours())}:${$(u.getMinutes())}:${$(u.getSeconds())}`,D=Number((ae(o)/1e3).toFixed(2)),k=Number(r.Math.toDegrees(((H=o==null?void 0:o.camera)==null?void 0:H.pitch)??0).toFixed(1));ee(x.labels,y,20),ee(x.cameraHeightKm,D,20),ee(x.pitchDeg,k,20),ee(x.fps,_,20),b.setOption({xAxis:{data:x.labels},series:[{data:x.cameraHeightKm},{data:x.pitchDeg},{data:x.fps}]})}function B(){b&&b.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function J(){var u,y;f&&(clearInterval(f),f=null),T();const o=(u=e.getViewer)==null?void 0:u.call(e),r=(y=o==null?void 0:o.scene)==null?void 0:y.postProcessStages;n&&(n(),n=null),i&&(i(),i=null),L&&r&&r.remove(L),L=null,I&&r&&r.remove(I),I=null,E&&(X&&r&&r.remove(E),E=null),X=!1,o&&he(o),t&&(window.removeEventListener("resize",t),t=null),b&&(b.dispose(),b=null),g=null,d=!1}function ae(o){var D,k,H;const r=(k=(D=o==null?void 0:o.scene)==null?void 0:D.globe)==null?void 0:k.ellipsoid,u=(H=o==null?void 0:o.camera)==null?void 0:H.positionWC;if(!r||!u)return 0;const y=r.cartesianToCartographic(u);return Math.max(0,Number((y==null?void 0:y.height)??0))}function oe(o,r,u){return!Number.isFinite(o)||u<=r?0:se((o-r)/(u-r))}function se(o){return Math.min(1,Math.max(0,Number(o)||0))}function ee(o,r,u){o.push(r),o.length>u&&o.shift()}function $(o){return String(o).padStart(2,"0")}return(o,r)=>(pe(),_e("div",We,[S("div",Xe,[S("div",Ve,[r[4]||(r[4]=S("span",{class:"panel-title"},"Cinematic FX",-1)),S("button",{class:"panel-btn",onClick:C},re(l.value?"隐藏图表":"显示图表"),1)]),S("div",He,[S("label",Ge,[Z(S("input",{"onUpdate:modelValue":r[0]||(r[0]=u=>w.value=u),type:"checkbox"},null,512),[[fe,w.value]]),r[5]||(r[5]=S("span",null,"电影级高度雾",-1))]),S("label",Ye,[Z(S("input",{"onUpdate:modelValue":r[1]||(r[1]=u=>h.value=u),type:"checkbox"},null,512),[[fe,h.value]]),r[6]||(r[6]=S("span",null,"HBAO 微阴影",-1))]),S("label",$e,[Z(S("input",{"onUpdate:modelValue":r[2]||(r[2]=u=>A.value=u),type:"checkbox"},null,512),[[fe,A.value]]),r[7]||(r[7]=S("span",null,"移轴摄影",-1))]),S("label",qe,[Z(S("input",{"onUpdate:modelValue":r[3]||(r[3]=u=>U.value=u),type:"checkbox"},null,512),[[fe,U.value]]),r[8]||(r[8]=S("span",null,"动态大气 + Bloom",-1))])]),Z(S("div",{ref_key:"chartRef",ref:s,class:"fx-chart"},null,512),[[Re,l.value]])])]))}},je=Le(Ze,[["__scopeId","data-v-e626db49"]]),G={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Ke=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Qe=new Float32Array([0,0,1,0,1,1,0,1]),Je=new Uint16Array([0,1,2,0,2,3]);function K(p,e,a){return Math.max(e,Math.min(a,p))}function F(p,e){const a=Number(p);return Number.isFinite(a)?a:e}function et(p,e){const a=e.getParameter(e.MAX_TEXTURE_SIZE),s=Math.min(2048,a),w=Math.max(1,Math.floor(p)),h=Math.sqrt(w),A=Math.log2(h),U=Number.isFinite(A)?Math.round(A):4;let l=Math.pow(2,U);return l=K(l,16,s),l}function tt(p){const e=p*p,a=new Float32Array(e*4);for(let s=0;s<e;s+=1){const w=s*4;a[w]=Math.random(),a[w+1]=Math.random(),a[w+2]=Math.random(),a[w+3]=Math.random()}return a}function it(p){return new Float32Array(p*p*4)}function nt(p,e,a,s,w){const h=e.createTexture();if(!h)throw new Error("Failed to create wind atlas texture.");e.bindTexture(e.TEXTURE_2D,h),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,a,s,0,e.RGBA,e.FLOAT,w),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null);let A=!1;return{_context:p,_texture:h,_target:e.TEXTURE_2D,_width:a,_height:s,destroy(){A||(e.deleteTexture(h),A=!0)}}}class rt{constructor(e,a={}){if(!e||!e.scene||!e.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=e,this._scene=e.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=a.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const s={...G,...a};this.speedFactor=F(s.speedFactor,G.speedFactor),this.cullSpeedMin=F(s.cullSpeedMin,G.cullSpeedMin),this.cullSpeedMax=F(s.cullSpeedMax,G.cullSpeedMax),this.windSpeedMin=F(s.windSpeedMin,G.windSpeedMin),this.windSpeedMax=F(s.windSpeedMax,G.windSpeedMax),this.arrowLength=F(s.arrowLength,G.arrowLength),this.trailLength=F(s.trailLength,G.trailLength),this.decaySpeed=F(s.decaySpeed,G.decaySpeed),this.alphaFactor=F(s.alphaFactor,G.alphaFactor),this.maxWindSpeed=F(s.maxWindSpeed,G.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=F(a.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(e){if(!e||typeof e!="object")throw new Error("Wind2D.loadData requires a valid data object.");const a=F(e.longitude,NaN),s=F(e.latitude,NaN),w=Array.isArray(e.altitude)?e.altitude:[],h=Array.isArray(e.sizeMesh)?e.sizeMesh:[],A=Array.isArray(e.count)?e.count:[],U=Array.isArray(e.hspeed)?e.hspeed:[],l=Array.isArray(e.hdir)?e.hdir:[],L=Array.isArray(e.vspeed)?e.vspeed:[];if(!Number.isFinite(a)||!Number.isFinite(s))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const I=w.length;if(I<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(h.length!==I||A.length!==I)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const E=A.map(_=>Math.max(1,Math.floor(F(_,1)))),X=h.map(_=>Math.max(1,F(_,1))),b=w.map(_=>F(_,0)),g=E.reduce((_,c)=>_+c*c,0);if(U.length<g||l.length<g||L.length<g)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=I,this.visibleLayerMin=0,this.visibleLayerMax=I-1,this._altitudes=b.slice(),this._maxNx=Math.max(...E),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*I;const m=new Float32Array(this._atlasWidth*this._atlasHeight*4);let f=0;for(let _=0;_<I;_+=1){const c=E[_],R=c;for(let P=0;P<R;P+=1)for(let x=0;x<c;x+=1){const M=f+P*c+x,W=((_*this._maxNy+P)*this._atlasWidth+x)*4,Q=Number(U[M]),ie=Number(l[M]),ne=Number(L[M]);if(!(Number.isFinite(Q)&&Number.isFinite(ie))){m[W]=0,m[W+1]=0,m[W+2]=0,m[W+3]=0;continue}const q=ie*Math.PI/180;m[W]=Q*Math.sin(q),m[W+1]=Q*Math.cos(q),m[W+2]=Number.isFinite(ne)?ne:0,m[W+3]=1}f+=c*R}this._createOrReplaceWindAtlasTexture(m);const O=Math.max(...X),t=this._maxNx*O,n=t/2/111320,i=s*Math.PI/180,d=Math.max(1e-6,Math.abs(Math.cos(i))),v=t/2/(111320*d);this._bounds={minLon:a-v,maxLon:a+v,minLat:s-n,maxLat:s+n,minHeight:Math.min(...b),maxHeight:Math.max(...b)},this._dataPointCount=g,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(e){const a=Math.max(1,Math.floor(F(e,1))),s=et(a,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&s===this._particleTextureSize||(this._particleTextureSize=s,this._particleCount=s*s,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(e){const a=K(F(e,this.particleDensity),.05,10);if(this.particleDensity=a,this._dataPointCount<=0)return;const s=Math.max(1,Math.floor(this._dataPointCount*a));this.setParticleCount(s)}setBounds(e,a,s,w){const h=F(e,NaN),A=F(a,NaN),U=F(s,NaN),l=F(w,NaN);if(!Number.isFinite(h)||!Number.isFinite(A)||!Number.isFinite(U)||!Number.isFinite(l))return;const L=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};L.minLon=Math.min(h,A),L.maxLon=Math.max(h,A),L.minLat=Math.min(U,l),L.maxLat=Math.max(U,l),this._bounds=L,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const e=(this._bounds.minLon+this._bounds.maxLon)*.5,a=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(e,a,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(e){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const w=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[w],this._updateCommand.execute(this._context,e?e.passState:void 0),this._particleState=w,this._drawCommand.modelMatrix=this._modelMatrix,e&&Array.isArray(e.commandList)&&e.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(e){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=nt(this._context,this._gl,this._atlasWidth,this._atlasHeight,e)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const e=this._Cesium,a=this._particleTextureSize,s=tt(a),w=it(a);for(let h=0;h<2;h+=1){this._particlePositionTextures[h]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:s},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[h]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:w},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._framebuffers[h]=new e.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[h],this._velocityTextures[h]],destroyAttachments:!1});const A=this._framebuffers[h]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,A),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._particlePositionTextures[e]&&(this._particlePositionTextures[e].destroy(),this._particlePositionTextures[e]=null),this._velocityTextures[e]&&(this._velocityTextures[e].destroy(),this._velocityTextures[e]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const e=this._Cesium,a=e.Buffer.createVertexBuffer({context:this._context,typedArray:Ke,usage:e.BufferUsage.STATIC_DRAW}),s=e.Buffer.createVertexBuffer({context:this._context,typedArray:Qe,usage:e.BufferUsage.STATIC_DRAW}),w=e.Buffer.createIndexBuffer({context:this._context,typedArray:Je,usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:a,componentsPerAttribute:2},{index:1,vertexBuffer:s,componentsPerAttribute:2}],indexBuffer:w})}_buildParticleVertexArray(){const e=this._Cesium,a=new Float32Array(this._drawVertexCount);for(let s=0;s<a.length;s+=1)a[s]=s;this._particleVertexBuffer=e.Buffer.createVertexBuffer({context:this._context,typedArray:a,usage:e.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const e=this._Cesium,a=`#version 300 es
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
}`;this._drawProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:a,fragmentShaderSource:s,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const e=this._Cesium,a=e.RenderState.fromCache({viewport:new e.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:a,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap()})}_buildDrawCommand(){const e=this._Cesium,a=e.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:e.BlendingState.ALPHA_BLEND});this._drawCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:a,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:e.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const e=K(Math.floor(F(this.visibleLayerMin,0)),0,this._layerCount-1),a=K(Math.floor(F(this.visibleLayerMax,this._layerCount-1)),e,this._layerCount-1);return{min:e,max:a}}_normalizeSpeedRange(e,a){const s=Math.max(1e-4,F(this.maxWindSpeed,G.maxWindSpeed)),w=K(F(e,0)/s,0,1),h=K(F(a,s)/s,0,1);return{min:Math.min(w,h),max:Math.max(w,h)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>F(this.speedFactor,G.speedFactor),maxWindSpeed:()=>Math.max(1e-4,F(this.maxWindSpeed,G.maxWindSpeed)),decaySpeed:()=>K(F(this.decaySpeed,G.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>F(this.arrowLength,G.arrowLength),trailLength:()=>F(this.trailLength,G.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>K(F(this.alphaFactor,G.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function at(p){if(!p)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:e,DeveloperError:a,Ellipsoid:s,Resource:w,HeightmapTerrainData:h,Rectangle:A,TileAvailability:U,CustomHeightmapTerrainProvider:l}=p;function L(b,g,m,f,O,t){const n=b.tileXYToRectangle(m,f,O);return e(A.intersection(n,g,t))}function I(b){const g=[[[0,0,1,0]]],m=new U(b.tilingScheme,19);for(let f=0;f<g.length;f++){const O=g[f];for(let t=0;t<O.length;t++){const n=O[t];m.addAvailableTileRange(f,n[0],n[1],n[2],n[3])}}return m}function E(b,g,m,f,O){const t=new h({buffer:b._transformBuffer(g),width:b._width,height:b._height,childTileMask:b._getChildTileMask(f,O,m),structure:b._terrainDataStructure});return t._skirtHeight=6e3,b.availability.addAvailableTileRange(m,f,O,f,O),t}class X extends l{constructor(g={}){if(super({...g,ellipsoid:s.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!e(g.url))throw new a("options.url is required.");this._dataType=g.dataType??"int16",this._url=g.url,this._subdomains=g.subdomains,this._token=g.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=I(this)}get availability(){return this._availability}requestTileGeometry(g,m,f,O){if(f>=this._bottomLevel)return Promise.reject(new Error(`Level ${f} is outside supported range.`));if(f<this._topLevel)return Promise.resolve(new h({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(g,m,f),structure:this._terrainDataStructure}));let t=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const i=this._subdomains[(g+m)%this._subdomains.length];t=t.replace("{s}",i)}t=t.replace("{token}",this._token).replace("{x}",g).replace("{y}",m).replace("{z}",f+1);const n=w.fetchArrayBuffer({url:t,request:O});if(n)return n.then(i=>i.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Ue.inflate(i)).then(i=>E(this,i,f,g,m))}getTileDataAvailable(g,m,f){return f<this._bottomLevel}_transformBuffer(g){let m=2;this._dataType==="float"&&(m=4);const f=g;if(f.length!==22500*m)return null;const O=new ArrayBuffer(m),t=new DataView(O),n=this._width,i=this._height,d=new Uint8Array(n*i*4);for(let v=0;v<i;v++)for(let _=0;_<n;_++){const c=Math.floor(149*v/(i-1)),R=Math.floor(149*_/(n-1)),P=m*(150*c+R);let x;m===4?(t.setInt8(0,f[P]),t.setInt8(1,f[P+1]),t.setInt8(2,f[P+2]),t.setInt8(3,f[P+3]),x=t.getFloat32(0,!0)):x=f[P]+256*f[P+1],(x>1e4||x<-2e3)&&(x=0);const M=(x+1e3)/.001,W=4*(v*n+_);d[W]=M/65536,d[W+1]=(M-256*d[W]*256)/256,d[W+2]=M-256*d[W]*256-256*d[W+1],d[W+3]=255}return d}_getVHeightBuffer(){let g=this._vHeightBuffer;if(!e(g)){g=new Uint8ClampedArray(this._width*this._height*4);for(let m=0;m<this._width*this._height*4;)g[m++]=15,g[m++]=66,g[m++]=64,g[m++]=255;this._vHeightBuffer=g}return g}_getChildTileMask(g,m,f){const O=new A,t=this._tilingScheme,n=this._rectangles,i=t.tileXYToRectangle(g,m,f);let d=0;for(let v=0;v<n.length&&d!==15;v++){const _=n[v];if(_.maxLevel<=f)continue;const c=_.rectangle,R=A.intersection(c,i,O);e(R)&&(L(t,c,2*g,2*m,f+1,O)&&(d|=4),L(t,c,2*g+1,2*m,f+1,O)&&(d|=8),L(t,c,2*g,2*m+1,f+1,O)&&(d|=1),L(t,c,2*g+1,2*m+1,f+1,O)&&(d|=2))}return d}}return X}function be(p){return ke.parse(p)}const ot=be(`
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
`).root.lookup("GEOPOI.PBPOITile"),st=be(`
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
`).root.lookup("GEOPOI.PBPOITile"),lt=be(`
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
`).root.lookup("GEOPOI.PBPOITile");function Te(p,e){return e.minX>=p.minX&&e.minX<=p.maxX&&e.minY>=p.minY&&e.minY<=p.maxY||e.maxX>=p.minX&&e.maxX<=p.maxX&&e.maxY>=p.minY&&e.maxY<=p.maxY||e.minX>=p.minX&&e.minX<=p.maxX&&e.maxY>=p.minY&&e.maxY<=p.maxY||e.maxX>=p.minX&&e.maxX<=p.maxX&&e.minY>=p.minY&&e.minY<=p.maxY}function ct(p){let e=0;for(let a=0;a<p.length;a++)p.charAt(a).match(/[^\x00-\xff]/gi)!=null?e+=2:e+=1;return e}function Ce(p,e){const a=p.x,s=p.y,w=p.width,h=p.height,A=e.x,U=e.y,l=e.width,L=e.height;return!(A<=a&&A+l<=a||a<=A&&a+w<=A||U<=s&&U+L<=s||s<=U&&s+h<=U)}function ut(p){const e={stringTable:[],pois:[],enumGeometryType:[{ePoint:0},{eMultiLineString:1},{ePolygon:2}],enumZCoordType:[{eCloseGround:0},{eCloseSeaSurface:1},{eRelativelyGround:2},{eAbsolute:3}]};let a;const s=new Uint8Array(p);try{a=lt.decode(s)}catch{}if(!a)try{a=st.decode(s)}catch{try{a=ot.decode(s)}catch{}}e.version=parseInt(a.Version.toString(),10),e.titleKey=parseInt(a.TileKey.toString(),10);for(let h=0;h<a.StringTable.s.length;h++)e.stringTable.push(a.StringTable.s[h].toString());let w=a.POIS.length;for(;w--;){const h=a.POIS[w],A={oid:`${parseInt(h.OID.toString(),10)}_${e.titleKey}`,name:h.Name.toString(),symbolID:parseInt(h.SymbolID.toString(),10),displayHeight:h.DisplayHeight,shiningColor:h.ShiningColor,fontNameIndex:h.FontNameIndex,fontSize:h.FontSize,fontColor:h.FontColor,zCoordType:h.ZCoordType??void 0,geometryType:h.GeometryType,coordinate:h.Coordinates,priority:typeof h.Priority>"u"?null:h.Priority,interates:typeof h.Interates>"u"?null:h.Interates,fontStyle:typeof h.FontStyle>"u"?null:h.FontStyle,shiningSize:typeof h.ShiningSize>"u"?null:h.ShiningSize};e.pois.push(A)}return e}function dt(p){if(!p)throw new Error("Cesium is required to create GeoWTFS.");const{Cartesian2:e,Cartesian3:a,Color:s,createGuid:w,defined:h,DeveloperError:A,Entity:U,HorizontalOrigin:l,LabelStyle:L,Math:I,SceneTransforms:E,VerticalOrigin:X,combine:b}=p,g={font:"28px sans-serif",fontSize:28,fillColor:s.WHITE,scale:.5,outlineColor:s.BLACK,outlineWidth:5,style:L.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:s.RED,backgroundPadding:new e(10,10),horizontalOrigin:l.CENTER,verticalOrigin:X.TOP,eyeOffset:a.ZERO,pixelOffset:new e(0,8)},m={horizontalOrigin:l.CENTER,verticalOrigin:X.CENTER,eyeOffset:a.ZERO,pixelOffset:e.ZERO,alignedAxis:a.ZERO,color:s.WHITE,rotation:0,scale:1,width:18,height:18};class f{constructor(t,n={}){if(!h(t))throw new A("viewer is required.");if(!h(n.url))throw new A("options.url is required.");this.viewer=t,this.proxy=n.proxy,this.url=n.url,this.icoUrl=n.icoUrl??n.iconUrl,this.metadata=n.metadata,this.roadMetadata=n.roadMetadata,this.roadUrl=n.roadUrl,this.labelGraphics=b(n.labelGraphics,g,!0),this.billboardGraphics=b(n.billboardGraphics,m,!0),this.aotuCollide=!!n.aotuCollide,this.collisionPadding=n.collisionPadding??[3,5,3,5],this.serverFirstStyle=!!n.serverFirstStyle,this.subdomains=n.subdomains||[],this.tileCache=[],this.labelCache=[],this._isInitial=!1,this._latelyGrid=[],this._latelyRefreshStamp=0,this._latelyCollisionStamp=0;const i=w();this._UUID=`GEO_WTFS_LABEL_${i}`,this._UUIDRoad=`GEO_WTFS_LABEL_ROAD_${i}`,this.viewer.camera.percentageChanged=.18,this.bindEvent()}bindEvent(){this.viewer.scene.camera.moveEnd.addEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.addEventListener(this._changed,this)}_moveEnd(){clearTimeout(this._timer);const t=this.viewer.scene.globe._surface;if(t._tilesToRender.length<2||t._tileLoadQueueHigh.length>0)this._timer=setTimeout(()=>{this._moveEnd()},100);else{const n=this.getTilesToRender();if(this.compareArray(n,this._latelyGrid))return;this._queueCall(n),this.delaySynchronous()}}_changed(){const t=new Date().getTime(),n=t-this._latelyRefreshStamp,i=t-this._latelyCollisionStamp;n>300&&this._moveEnd(),i>150&&this.collisionDetection()}getTilesToRender(){const t=this.viewer.scene.globe._surface._tilesToRender.map(i=>({x:i.x,y:i.y,level:i.level,boundBox:{minX:I.toDegrees(i.rectangle.west),minY:I.toDegrees(i.rectangle.south),maxX:I.toDegrees(i.rectangle.east),maxY:I.toDegrees(i.rectangle.north)}})).sort((i,d)=>d.level-i.level),n=[t[0].level];for(let i=0;i<t.length;i++)t[i].level!==n[n.length-1]&&(n.push(t[i].level),n.length>4&&(t.splice(i,1/0),i--));return t}compareArray(t,n){for(let i=0;i<t.length;i++){let d=!1;for(let v=0;v<n.length;v++)if(t[i].x===n[v].x&&t[i].y===n[v].y&&t[i].level===n[v].level){d=!0;break}if(!d)return!1}for(let i=0;i<n.length;i++){let d=!1;for(let v=0;v<t.length;v++)if(n[i].x===t[v].x&&n[i].y===t[v].y&&n[i].level===t[v].level){d=!0;break}if(!d)return!1}return!0}_queueCall(t){this._latelyGrid=t,this._latelyRefreshStamp=new Date().getTime();let n=t.length;for(;n--;){const i=t[n];if(this.metadata&&Te(this.metadata.boundBox,i.boundBox)){if(this.metadata.minLevel>i.level+1||this.metadata.maxLevel<i.level+1)return;const d=this.getCacheTile(i.x,i.y,i.level,0);if(d)this.addLabelAndIco(d);else{const v=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",_=this.getTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",v),c=new XMLHttpRequest;c.open("GET",_,!0),c.responseType="arraybuffer";const R=this;c.onload=function(){if(!(c.status<200||c.status>=300)){const P=R.cutString(c.response);let x;P?(x=ut(P),x.x=this.tile.x,x.y=this.tile.y,x.z=this.tile.z,x.t=0,R.addCacheTile(x),R.addLabelAndIco(x)):(x={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:0},R.addCacheTile(x),R.delaySynchronous())}},c.onerror=function(P){},c.send(),c.tile={x:i.x,y:i.y,z:i.level+1}}}if(this.roadMetadata&&Te(this.roadMetadata.boundBox,i.boundBox)){if(this.roadMetadata.minLevel>i.level+1||this.roadMetadata.maxLevel<i.level+1)return;const d=this.getCacheTile(i.x,i.y,i.level,0);if(d)this.addLabelAndIco(d);else{const v=this.subdomains.length?(i.x+i.y)%this.subdomains.length:"",_=this.getRoadTileUrl().replace("{x}",i.x).replace("{y}",i.y).replace("{z}",i.level+1).replace("{s}",v),c=new XMLHttpRequest;c.open("GET",_,!0),c.responseType="json";const R=this;c.onload=function(){if(!(c.status<200||c.status>=300)){const P=c.response;let x;P?(x={pois:P.map(M=>({oid:`${M.LabelPoint.X}_${M.LabelPoint.Y}`,name:M.Feature.properties.Name,coordinate:[M.LabelPoint.X,M.LabelPoint.Y,M.LabelPoint.Z?M.LabelPoint.Z:0]})),x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},R.addCacheTile(x),R.addLabelAndIco(x)):(x={x:this.tile.x,y:this.tile.y,z:this.tile.z,t:1},R.addCacheTile(x),R.delaySynchronous())}},c.onerror=function(P){},c.send(),c.tile={x:i.x,y:i.y,z:i.level+1}}}}}cutString(t){if(!t)return"";const n=t.byteLength;return n<=28?"":t.slice(19,n-9)}addCacheTile(t){this.tileCache.length>999&&this.tileCache.splice(0,500),this.removeCacheTile(t.x,t.y,t.z,t.t),this.tileCache.push(t)}getCacheTile(t,n,i,d){let v=this.tileCache.length;for(;v--;){const _=this.tileCache[v];if(_.x===t&&_.y===n&&_.z===i&&_.t===d)return _}return null}removeCacheTile(t,n,i,d){let v=this.tileCache.length;for(;v--;){const _=this.tileCache[v];if(_.x===t&&_.y===n&&_.z===i&&_.t===d){this.tileCache.splice(v,1);return}}}getCacheLabel(t){let n=this.labelCache.length;for(;n--;){const i=this.labelCache[n];if(i.name===this._UUID&&i.oid===t)return i}return null}addCacheLabel(t){this.labelCache.length>999&&this.labelCache.splice(0,250),this.removeCacheLabel(t.oid),t.timestamp=new Date().getTime(),this.labelCache.push(t)}removeCacheLabel(t){let n=this.labelCache.length;for(;n--;)if(this.labelCache[n].name===this._UUID&&this.labelCache[n].oid===t){this.labelCache.splice(n,1);return}}HexadecimalConversion(t){if(t===4278190080)return"#000000";let n=4278190080|parseInt(-Number(t),10),i="";if(n=n.toString(16).substring(1),n.length<6)for(let d=0;d<6-n.length;d++)i+="0";return`#${i}${n}`}addLabelAndIco(t){if(t.pois&&t.pois.length){let n=t.pois.length;for(;n--;){const i=t.pois[n];let d=this.getCacheLabel(i.oid);d||(d=this.createLabel(i,t)),d&&this.addCacheLabel(d)}}this.delaySynchronous()}createLabel(t,n){if(!t)return;const i={show:!0,position:a.fromDegrees(...t.coordinate),label:{text:t.name}};if(Object.assign(i.label,this.labelGraphics),this.serverFirstStyle&&(t.fontSize!==void 0&&(i.label.font=`${t.fontSize}px `,t.fontNameIndex!==void 0&&n.stringTable&&n.stringTable[t.fontNameIndex]?i.label.font+=n.stringTable[t.fontNameIndex]:i.label.font+="sans-serif",!this.labelGraphics.bold&&t.fontStyle!==1&&t.fontStyle!==3&&(i.label.font=`bold ${i.label.font}`),t.fontStyle!==2&&t.fontStyle!==3&&(i.label.font=`italic ${i.label.font}`)),t.fontColor!==void 0&&(i.label.fillColor=s.fromCssColorString(this.HexadecimalConversion(t.fontColor))),t.shiningColor!==void 0&&(i.label.outlineColor=s.fromCssColorString(this.HexadecimalConversion(t.shiningColor))),typeof t.shiningSize=="number"&&(i.label.outlineWidth=t.shiningSize),t.showBackground!==void 0&&(i.label.showBackground=t.showBackground),t.backgroundColor!==void 0&&(i.label.backgroundColor=t.backgroundColor),t.backgroundPadding!==void 0&&(i.label.backgroundPadding=t.backgroundPadding),t.eyeOffset!==void 0&&(i.label.eyeOffset=t.eyeOffset),t.pixelOffset!==void 0&&(i.label.pixelOffset=t.pixelOffset),t.style!==void 0&&(i.label.style=t.style),t.scale!==void 0&&(i.label.scale=t.scale),n.t||(t.verticalOrigin!==void 0&&(i.label.verticalOrigin=t.verticalOrigin),t.horizontalOrigin!==void 0&&(i.label.horizontalOrigin=t.horizontalOrigin))),t.symbolID!==void 0&&t.symbolID>-1&&this.icoUrl){const v=this.subdomains.length?(n.x+n.y)%this.subdomains.length:"";i.billboard={image:this.getIcoUrl().replace("{id}",t.symbolID).replace("{s}",this.subdomains[v])},Object.assign(i.billboard,this.billboardGraphics),this.serverFirstStyle&&(t.displayHeight!==void 0&&(i.billboard.width=t.displayHeight,i.billboard.height=t.displayHeight),t.eyeOffset!==void 0&&(i.billboard.eyeOffset=t.eyeOffset),t.pixelOffset!==void 0&&(i.billboard.pixelOffset=t.pixelOffset),t.rotation!==void 0&&(i.billboard.rotation=t.rotation),t.alignedAxis!==void 0&&(i.billboard.alignedAxis=t.alignedAxis),t.color!==void 0&&(i.billboard.color=t.color),t.scale!==void 0&&(i.billboard.scale=t.scale),n.t||(t.verticalOrigin!==void 0&&(i.billboard.verticalOrigin=t.verticalOrigin),t.horizontalOrigin!==void 0&&(i.billboard.horizontalOrigin=t.horizontalOrigin)))}n.t&&(i.label.verticalOrigin=X.CENTER,i.label.horizontalOrigin=l.CENTER,i.billboard&&(i.billboard.verticalOrigin=X.CENTER,i.billboard.horizontalOrigin=l.CENTER));const d=new U(i);return d.name=n.t?this._UUIDRoad:this._UUID,d.oid=t.oid,d.priority=t.priority||0,d.xyz=`${n.x}_${n.y}_${n.z-1}`,d}getIcoUrl(){return`${this.proxy?this.proxy.proxy:""}${this.icoUrl}`}getTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.url}`}getRoadTileUrl(){return`${this.proxy?this.proxy.proxy:""}${this.roadUrl}`}delaySynchronous(){clearTimeout(this._timer2),this._timer2=setTimeout(()=>{this.synchronousLabel()},100)}synchronousLabel(){let t=this.labelCache.length;for(;t--;){const n=this.labelCache[t];n.timestamp>=this._latelyRefreshStamp&&!this.viewer.entities.contains(n)&&(this._isInitial&&this.aotuCollide&&(n.show=!1),this.viewer.entities.add(n))}if(!this._isInitial){let n=this.viewer.entities.values.length-1;for(;n>=0;){const i=this.viewer.entities.values[n];i&&i.name&&(i.name===this._UUID||i.name===this._UUIDRoad)&&i.timestamp<this._latelyRefreshStamp&&this.viewer.entities.remove(i),n--}this.aotuCollide&&this.collisionDetection()}}collisionDetection(){const t=this.viewer.entities.values,n=[],i=[];let d=t.length;for(;d--;){const c=t[d];if(c.name&&(c.name===this._UUID||c.name===this._UUIDRoad)){const R=this.getScreenCoordinates(c.position.getValue(0));c.show=!0,c.collisionBox=this.getLabelReact({point:R,entity:c});let P=null,x=n.length;for(;!P&&x--;)n[x].xyz===c.xyz&&(P=n[x]);P||(P={xyz:c.xyz,entities:[]},n.push(P)),P.entities.push(c)}}let v=n.length;for(;v--;){const c=n[v];c.entities.sort((R,P)=>R.priority-P.priority);for(let R=0;R<c.entities.length;R++){const P=c.entities[R];if(P.show){for(let x=R+1;x<c.entities.length;x++)c.entities[x].show&&Ce(P.collisionBox,c.entities[x].collisionBox)&&(c.entities[x].show=!1);i.push(P)}}}let _=i.length;for(;_--;)if(i[_].show){i.sort((c,R)=>c.priority-R.priority);for(let c=_+1;c<i.length;c++)i[c].show&&Ce(i[_].collisionBox,i[c].collisionBox)&&(i[c].show=!1)}}getScreenCoordinates(t){const n=this.viewer.scene;return!n||!t?null:typeof E.worldToDrawingBufferCoordinates=="function"?E.worldToDrawingBufferCoordinates(n,t):typeof E.worldToWindowCoordinates=="function"?E.worldToWindowCoordinates(n,t):typeof E.wgs84ToWindowCoordinates=="function"?E.wgs84ToWindowCoordinates(n,t):null}getLabelReact(t){const{point:n,entity:i}=t;let d=parseInt(i.label.font,10);d=d>0?d:15;const v=i.label.text.getValue(0).split(`
`);let _=0;for(let P=0;P<v.length;P++){const x=ct(v[P])/2;_<x&&(_=x)}const c=i.billboard?i.billboard.width.getValue(0)*i.billboard.scale.getValue(0):1,R=i.billboard?i.billboard.height.getValue(0)*i.billboard.scale.getValue(0):1;return{x:(n?n.x:-999)-c/2-this.collisionPadding[3],y:(n?n.y:-999)-R/2-this.collisionPadding[0],width:d*i.label.scale.getValue(0)*_+i.label.pixelOffset.getValue(0).x+c+this.collisionPadding[1],height:d*i.label.scale.getValue(0)*_+i.label.pixelOffset.getValue(0).y+c+this.collisionPadding[2]}}initTDT(t,n){let i=0;this._isInitial=!0,this._queueCall(t);const d=setInterval(()=>{i>3&&(this._isInitial=!1,clearInterval(d),typeof n=="function"&&n()),i%2===0&&this.aotuCollide&&this.collisionDetection(),i++},600);return this}getPropertyValue(t,n,i,d){return n[t]!==void 0?n[t]:i[t]!==void 0?i[t]:d}unbindEvent(){this.viewer.scene.camera.moveEnd.removeEventListener(this._moveEnd,this),this.viewer.scene.camera.changed.removeEventListener(this._changed,this)}activate(){this._latelyGrid=[],this._moveEnd()}destroy(){let t=this.viewer.entities.values.length;for(;t--;){const n=this.viewer.entities.values[t];n.name&&(n.name===this._UUID||n.name===this._UUIDRoad)&&(this.viewer.entities.remove(n),t--)}this.viewer.camera.percentageChanged=.5,this.unbindEvent(),this.handler=this.handler&&this.handler.destroy(),this.proxy=void 0,this.viewer=void 0,this.url=void 0,this.labelGraphics=void 0,this.billboardGraphics=void 0,this.aotuCollide=void 0,this.collisionPadding=void 0,this.tileCache=void 0,this.labelCache=void 0,this._latelyGrid=void 0,this._latelyRefreshStamp=void 0,this._roadTileset=void 0}getLabelVisibility(t){if(!t)return!1;const n=this.viewer.canvas.getBoundingClientRect();return!(t.x<-10||t.x>n.right+10||t.y<-10||t.y>n.bottom+10)}}return f}const ht={class:"map-controls-group"},ft={class:"mouse-position-content"},mt={key:1,class:"wind-controls"},pt={class:"param-row"},gt={class:"param-row"},xt={class:"param-row"},yt={class:"param-row"},le="https://t{s}.tianditu.gov.cn/",ye="https://cdn.jsdelivr.net/npm/cesium@1.110/Build/Cesium/",_t={__name:"CesiumContainer",setup(p){let e=null;const a="4267820f43926eaf808d61dc07269beb",s=["0","1","2","3","4","5","6","7"],w=`${ye}Cesium.js`,h=`${ye}Widgets/widgets.css`,A={boundBox:{minX:-180,minY:-90,maxX:180,maxY:90},minLevel:1,maxLevel:20},U=[{x:6,y:1,level:2,boundBox:{minX:90,minY:0,maxX:135,maxY:45}},{x:7,y:1,level:2,boundBox:{minX:135,minY:0,maxX:180,maxY:45}},{x:6,y:0,level:2,boundBox:{minX:90,minY:45,maxX:135,maxY:90}},{x:7,y:0,level:2,boundBox:{minX:135,minY:45,maxX:180,maxY:90}},{x:5,y:1,level:2,boundBox:{minX:45,minY:0,maxX:90,maxY:45}},{x:4,y:1,level:2,boundBox:{minX:0,minY:0,maxX:45,maxY:45}},{x:5,y:0,level:2,boundBox:{minX:45,minY:45,maxX:90,maxY:90}},{x:4,y:0,level:2,boundBox:{minX:0,minY:45,maxX:45,maxY:90}},{x:6,y:2,level:2,boundBox:{minX:90,minY:-45,maxX:135,maxY:0}},{x:6,y:3,level:2,boundBox:{minX:90,minY:-90,maxX:135,maxY:-45}},{x:7,y:2,level:2,boundBox:{minX:135,minY:-45,maxX:180,maxY:0}},{x:5,y:2,level:2,boundBox:{minX:45,minY:-45,maxX:90,maxY:0}},{x:4,y:2,level:2,boundBox:{minX:0,minY:-45,maxX:45,maxY:0}},{x:3,y:1,level:2,boundBox:{minX:-45,minY:0,maxX:0,maxY:45}},{x:3,y:0,level:2,boundBox:{minX:-45,minY:45,maxX:0,maxY:90}},{x:2,y:0,level:2,boundBox:{minX:-90,minY:45,maxX:-45,maxY:90}},{x:0,y:1,level:2,boundBox:{minX:-180,minY:0,maxX:-135,maxY:45}},{x:1,y:0,level:2,boundBox:{minX:-135,minY:45,maxX:-90,maxY:90}},{x:0,y:0,level:2,boundBox:{minX:-180,minY:45,maxX:-135,maxY:90}}];let l=null,L=null,I=null,E=null,X=null;const b=Y(null),g=Y("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米"),m=Y(!1),f=Ee(),O=Y(1),t=Y(15e3),n=Y(2e4),i=Y(1);Se(()=>{_()});function d(){var T,C;if(b.value){try{(C=(T=l==null?void 0:l.scene)==null?void 0:T.primitives)==null||C.remove(b.value)}catch{}b.value.destroy(),b.value=null}}function v(){if(I){try{I.destroy()}catch{}I=null}}we(()=>{if(m.value=!1,L&&(L.destroy(),L=null),d(),v(),E&&(clearInterval(E),E=null),X&&(X.remove(),X=null),l){try{l.destroy()}catch{}l=null}});async function _(){ze("正在初始化 3D 场景...");try{if(await P(),!e||!document.getElementById("cesiumContainer"))return;x(),M(),W();const T=Q(),C=ie();m.value=!0,T?f.success("天地图基础影像与地形加载成功。"):f.error("天地图地形加载失败，请检查 token 或网络。",{closable:!0})}catch(T){f.error("Cesium 运行时加载失败",T),f.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{Be()}}function c(){return l}function R(){return e||window.Cesium}async function P(){if(window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=ye),await xe(h,"cesium-widgets-style"),await ge(w,"cesium-runtime-script"),e=window.Cesium,!e)throw new Error("Cesium global 未找到")}function x(){var z;const T=typeof e.Map=="function"?e.Map:e.Viewer;if(l=new T("cesiumContainer",{imageryProvider:!1,terrainProvider:void 0,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,selectionIndicator:!1,timeline:!1,animation:!1,sceneModePicker:!1,navigationHelpButton:!1,shouldAnimate:!0}),ue(0),(z=l._cesiumWidget)!=null&&z._creditContainer&&(l._cesiumWidget._creditContainer.style.display="none"),l.scene.globe.terrainExaggeration=1,l.scene.globe.terrainExaggerationRelativeHeight=0,l.scene.globe.showGroundAtmosphere=!0,l.scene.globe.depthTestAgainstTerrain=!0,(()=>{var V;(V=l._cesiumWidget)!=null&&V._creditContainer&&(l._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",l._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(B=>{B.style.cssText="display: none !important; visibility: hidden !important;",B.innerHTML=""}),l.scene&&l.scene.frameState&&l.scene.frameState.creditDisplay&&(l.scene.frameState.creditDisplay.hasCredits=()=>!1,l.scene.frameState.creditDisplay.destroy=()=>{})})(),E=setInterval(()=>{const N=document.querySelector(".cesium-credit-container");N&&N.innerHTML.length>0&&(N.innerHTML="",N.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override")){const N=document.createElement("style");N.id="cesium-credit-override",N.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(N),X=N}}function M(){L=new e.ScreenSpaceEventHandler(l.scene.canvas),L.setInputAction(T=>{const C=l.camera.getPickRay(T.endPosition);if(!C)return;const z=l.scene.globe.pick(C,l.scene);if(z){const N=e.Cartographic.fromCartesian(z),V=e.Math.toDegrees(N.longitude).toFixed(6),B=e.Math.toDegrees(N.latitude).toFixed(6),J=N.height.toFixed(2);g.value=`经度: ${V}, 纬度: ${B}, 海拔: ${J}米`}},e.ScreenSpaceEventType.MOUSE_MOVE),L.setInputAction(T=>{const C=T.endPosition,z=T.startPosition;if(!e.defined(l.terrainProvider))return;const N=l.scene.globe.ellipsoid;if(!l.camera.pickEllipsoid(z,N)){const B=l.camera;B.rotate(e.Cartesian3.UNIT_X,-.002*(C.y-z.y)),B.rotate(e.Cartesian3.UNIT_Y,-.002*(C.x-z.x))}},e.ScreenSpaceEventType.RIGHT_DRAG),L.setInputAction(()=>{},e.ScreenSpaceEventType.RIGHT_DOWN),L.setInputAction(()=>{},e.ScreenSpaceEventType.RIGHT_UP)}function W(){const T=l.imageryLayers,C=new e.UrlTemplateImageryProvider({url:`${le}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${a}`,subdomains:s,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:18});T.addImageryProvider(C);const z=new e.UrlTemplateImageryProvider({url:`${le}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${a}`,subdomains:s,tilingScheme:new e.WebMercatorTilingScheme,maximumLevel:10});T.addImageryProvider(z)}function Q(){const T=at(e);try{return l.terrainProvider=new T({url:`${le}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:s,token:a}),l.scene.globe.depthTestAgainstTerrain=!0,!0}catch(C){return l.terrainProvider=new e.EllipsoidTerrainProvider,f.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),f.error("官方地形初始化失败",C),!1}}function ie(){try{const T=dt(e);return I=new T(l,{subdomains:s,url:`${le}mapservice/GetTiles?lxys={z},{x},{y}&tk=${a}&VERSION=1.0.0`,icoUrl:`${le}mapservice/GetIcon?id={id}&tk=${a}`,metadata:A,aotuCollide:!0,collisionPadding:[5,10,8,5],serverFirstStyle:!0,labelGraphics:{font:"28px sans-serif",fontSize:28,fillColor:e.Color.WHITE,scale:.5,outlineColor:e.Color.BLACK,outlineWidth:5,style:e.LabelStyle.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:e.Color.RED,backgroundPadding:new e.Cartesian2(10,10),horizontalOrigin:e.HorizontalOrigin.CENTER,verticalOrigin:e.VerticalOrigin.TOP,eyeOffset:new e.Cartesian3(0,0,10),pixelOffset:e.Cartesian2.ZERO},billboardGraphics:{horizontalOrigin:e.HorizontalOrigin.CENTER,verticalOrigin:e.VerticalOrigin.CENTER,eyeOffset:e.Cartesian3.ZERO,pixelOffset:e.Cartesian2.ZERO,alignedAxis:e.Cartesian3.ZERO,color:e.Color.WHITE,rotation:0,scale:1,width:18,height:18}}),I.initTDT(U,()=>{l.scene.requestRender()}),!0}catch{return!1}}function ne(){const N=[0,2e3,5e3,1e4,15e3],V=[3e4,3e4,25e3,25e3,2e4],B=[30,30,25,25,20],J=B.reduce(($,o)=>$+o*o,0),ae=new Array(J),oe=new Array(J),se=new Array(J);let ee=0;for(let $=0;$<5;$++){const o=B[$],r=B[$],u=V[$];for(let y=0;y<r;y++)for(let D=0;D<o;D++){const k=ee+y*o+D,H=(D-o/2)*(u/111320),j=(y-r/2)*(u/111320/Math.cos(e.Math.toRadians(35))),Pe=Math.atan2(j,H)+Math.PI/2+.2*Math.sin(D*.5)*Math.cos(y*.5);oe[k]=e.Math.toDegrees(Pe)%360;const Me=Math.sqrt(H*H+j*j),Ae=Math.max(0,1-Me/15);ae[k]=(5+$*2)*Ae+2*Math.random(),se[k]=.5*Math.sin(D*.3)*Math.cos(y*.3)}ee+=o*r}return{longitude:104,latitude:35,altitude:N,sizeMesh:V,count:B,hspeed:ae,hdir:oe,vspeed:se}}function ce(){if(!l||!e){f.error("Cesium 尚未初始化");return}d();const T=ne();b.value=new rt(l,{maxWindSpeed:20,cesium:e,speedFactor:O.value,arrowLength:t.value,trailLength:n.value,alphaFactor:i.value}),b.value.loadData(T),l.scene.primitives.add(b.value),b.value.flyTo(),f.success("风场加载成功，可通过下方滑块调节样式")}function q(){b.value&&(b.value.speedFactor=O.value,b.value.arrowLength=t.value,b.value.trailLength=n.value,b.value.alphaFactor=i.value)}function ge(T,C){return new Promise((z,N)=>{const V=document.getElementById(C);if(V){if(V.getAttribute("data-loaded")==="true"){z();return}V.addEventListener("load",()=>z(),{once:!0}),V.addEventListener("error",()=>N(new Error(`脚本加载失败: ${T}`)),{once:!0});return}const B=document.createElement("script");B.id=C,B.src=T,B.async=!0,B.onload=()=>{B.setAttribute("data-loaded","true"),z()},B.onerror=()=>N(new Error(`脚本加载失败: ${T}`)),document.head.appendChild(B)})}function xe(T,C){return new Promise((z,N)=>{if(document.getElementById(C)){z();return}const B=document.createElement("link");B.id=C,B.rel="stylesheet",B.href=T,B.onload=()=>z(),B.onerror=()=>N(new Error(`样式加载失败: ${T}`)),document.head.appendChild(B)})}function ue(T){if(!l)return;const C=typeof T=="number"?T:2;l.camera.flyTo({destination:e.Cartesian3.fromDegrees(104.1954,35.8617,15e6),orientation:{heading:0,pitch:-e.Math.PI_OVER_TWO,roll:0},duration:C})}function de(){l&&l.camera.flyTo({destination:e.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:e.Math.toRadians(0),pitch:e.Math.toRadians(-25),roll:0},duration:3})}async function he(){if(l)try{const T=await e.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");l.scene.primitives.add(T),l.flyTo(T,{duration:3,offset:new e.HeadingPitchRange(e.Math.toRadians(0),e.Math.toRadians(-25),T.boundingSphere.radius*2.5)})}catch(T){f.error(`加载模型失败: ${T}`),f.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return(T,C)=>(pe(),_e(Fe,null,[C[7]||(C[7]=S("div",{id:"cesiumContainer",class:"cesium-container"},null,-1)),m.value?(pe(),Ie(Oe(je),{key:0,"get-viewer":c,"get-cesium":R})):ve("",!0),S("div",ht,[S("div",ft,re(g.value),1),C[6]||(C[6]=S("div",{class:"divider"},null,-1)),S("button",{class:"home-btn",onClick:ue,title:"回到初始位置"},[...C[5]||(C[5]=[S("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[S("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])]),S("div",{class:"cesium-controls"},[S("button",{onClick:de,class:"fly-btn"}," 🏔️ 飞越珠穆朗玛峰 "),S("button",{onClick:he,class:"fly-btn"}," 🏢 加载3D模型 "),S("button",{onClick:ce,class:"fly-btn"}," 🌬️ 加载模拟风场 ")]),b.value?(pe(),_e("div",mt,[S("button",{class:"close-btn",onClick:C[0]||(C[0]=z=>b.value=!1),title:"关闭控制面板"}," × "),S("div",pt,[S("label",null,"速度因子: "+re(O.value.toFixed(1)),1),Z(S("input",{type:"range",min:"0.1",max:"5",step:"0.1","onUpdate:modelValue":C[1]||(C[1]=z=>O.value=z),onInput:q},null,544),[[me,O.value,void 0,{number:!0}]])]),S("div",gt,[S("label",null,"箭头长度: "+re(t.value/1e3)+"km",1),Z(S("input",{type:"range",min:"5000",max:"50000",step:"1000","onUpdate:modelValue":C[2]||(C[2]=z=>t.value=z),onInput:q},null,544),[[me,t.value,void 0,{number:!0}]])]),S("div",xt,[S("label",null,"尾迹长度: "+re(n.value/1e3)+"km",1),Z(S("input",{type:"range",min:"5000",max:"80000",step:"1000","onUpdate:modelValue":C[3]||(C[3]=z=>n.value=z),onInput:q},null,544),[[me,n.value,void 0,{number:!0}]])]),S("div",yt,[S("label",null,"透明度: "+re(i.value.toFixed(2)),1),Z(S("input",{type:"range",min:"0.1",max:"1",step:"0.05","onUpdate:modelValue":C[4]||(C[4]=z=>i.value=z),onInput:q},null,544),[[me,i.value,void 0,{number:!0}]])])])):ve("",!0)],64))}},Rt=Le(_t,[["__scopeId","data-v-237e36f4"]]);export{Rt as default};
