const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-DwbESWKF.js","./vendor-echarts-all-cqkMgDfv.js","./vendor-libs-4DJmrfJi.js","./vendor-vue-CmuMwCC6.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-CwWEzHqq.js","./vendor-proj4-BFhoKKYj.js","./index-BRpkcYXh.js","./vendor-ol-all-Ad62VZxn.js","./vendor-geotiff-CL7gAULd.js","./vendor-lerc-9DOY5ikF.js","./vendor-jszip-BOwK5y_4.js","./vendor-ol-all-BtPuoxOl.css","./vendor-axios-Bdz_Fv8M.js","./index-DduL8x4O.css"])))=>i.map(i=>d[i]);
var wr=Object.defineProperty;var Tr=(t,e,a)=>e in t?wr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var za=(t,e,a)=>Tr(t,typeof e!="symbol"?e+"":e,a);import{Q as Cr,r as Z,w as De,v as mr,d as J,c as re,P as pr,C as gr,o as vr,f as F,t as he,a as _e,G as st,X as It,g as pe,q as Ce,u as ce,F as mt,e as bt,n as Oe,x as Qe,S as Ft,I as ta,i as Ot,H as aa,z as Dr,B as Mr,A as Lr,a4 as da}from"./vendor-vue-CmuMwCC6.js";import{_ as zt,h as Pa,R as yr,Q as xr,e as ha,f as Ba,T as Pr,v as Fr,y as fa,P as Ar,x as Er}from"./index-BRpkcYXh.js";import{_ as Ca}from"./vendor-runtime-Dp1pzeXC.js";import{af as Rr,ag as ma,ah as pa,ai as Ir,X as Ua,e as ga,aj as Da,ak as Xt,ac as Ha,al as kr,am as _r,an as Wa,H as Ga,T as va,a2 as Or,ao as ra,ap as Nr,aq as zr,ar as Br,q as Ur,as as Hr,o as Wr,at as Yt,G as $a,au as Gr}from"./vendor-libs-4DJmrfJi.js";import{F as Fa,G as ja,v as Vt,B as $r,H as jr,I as qr,J as Vr,K as Xr,L as Yr,M as qa,N as Kr,O as Jr,P as Zr}from"./HomeView-D0TkLDe0.js";import{d as Qr}from"./vectorUtils-Ds50OJUZ.js";import"./vendor-ol-all-Ad62VZxn.js";import"./vendor-geotiff-CL7gAULd.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-BFhoKKYj.js";import"./vendor-axios-Bdz_Fv8M.js";import"./textDecoder-CXjJWEkX.js";const ca=new Map;function en(t){const e=ca.get(t);e&&e.abort();const a=new AbortController;return ca.set(t,a),a}function tn(){ca.forEach(t=>{t.abort()}),ca.clear()}function an(t){const e=t.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!e)return/\{s\}/i.test(t)?{url:t,subdomains:["a","b","c"]}:{url:t,subdomains:[]};const a=e[1].charCodeAt(0),r=e[2].charCodeAt(0),s=[];for(let i=a;i<=r;i++)s.push(String.fromCharCode(i));return{url:t.replace(e[0],"{s}"),subdomains:s}}function rn(t){return t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function nn(t,e){let a=t;return e.tiandituTk&&(a=a.replace(/\{tiandituTk\}/g,e.tiandituTk)),e.customUrl&&(a=a.replace(/\{customUrl\}/g,e.customUrl)),a}function on(t,e,a){if(!t||!e)return null;const s=en(e.id).signal,{serviceType:i}=e;let p=nn(e.url,a);if(i==="custom"){if(!a.customUrl)return null;p=a.customUrl}if(e.nonStandardAdapter||i==="vector-tile")return null;const{subdomains:v}=an(p),b=rn(p),T=e.subdomains||v,M=e.maxZoom||18;try{let I=null;if(s.aborted)return null;switch(i){case"wms":{if(typeof t.WebMapServiceImageryProvider!="function")return null;const A=e.wms;if(!(A!=null&&A.layers))return null;I=new t.WebMapServiceImageryProvider({url:b||e.url,layers:A.layers,parameters:{version:A.version||"1.1.1",srs:A.srs||"EPSG:3857",format:A.format||"image/png",styles:A.styles||"",transparent:A.transparent!==!1}});break}case"wmts":{if(typeof t.WebMapTileServiceImageryProvider!="function")return null;const A=e.wmts;if(!(A!=null&&A.layer)||!A.matrixSet)return null;I=new t.WebMapTileServiceImageryProvider({url:b||e.url,layer:A.layer,style:A.style||"default",format:A.format||"image/png",tileMatrixSetID:A.matrixSet,maximumLevel:M});break}case"osm":{typeof t.OpenStreetMapImageryProvider=="function"?I=new t.OpenStreetMapImageryProvider({maximumLevel:M}):I=new t.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:M});break}default:{if(!b||!(b.includes("{z}")||b.includes("{x}")||b.includes("{y}")||b.includes("{reverseY}")))return null;I=new t.UrlTemplateImageryProvider({url:b,subdomains:T.length>0?T:void 0,tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:M,enablePickFeatures:!1});break}}if(s.aborted){if(I&&typeof I.destroy=="function")try{I.destroy()}catch{}return null}return I&&(I._descriptorId=e.id),I}catch{return null}}function sn(t,e,a){if(!t||!Array.isArray(e))return[];const r=[];for(const s of e){const i=Fa(s);if(!i)continue;const p=on(t,i,a);p&&r.push(p)}return r}function ln(t){var r;const e=t==null?void 0:t.scene,a=e==null?void 0:e.globe;!e||!a||(a.enableLighting=!0,e.sun&&(e.sun.show=!0),e.moon&&(e.moon.show=!0),e.skyBox&&(e.skyBox.show=!0),(r=e.requestRender)==null||r.call(e))}function cn(t,e){var i;const a=t==null?void 0:t.scene,r=a==null?void 0:a.globe;if(!a||!r)return;hn(a,e),fn(a),r.enableLighting=!0,r.showGroundAtmosphere=!0,fe(r,"dynamicAtmosphereLighting",!0),fe(r,"dynamicAtmosphereLightingFromSun",!0),fe(r,"atmosphereLightIntensity",11.5),fe(r,"atmosphereHueShift",-.015),fe(r,"atmosphereSaturationShift",.08),fe(r,"atmosphereBrightnessShift",.02),fe(r,"lightingFadeInDistance",15e6),fe(r,"lightingFadeOutDistance",22e6),fe(r,"nightFadeInDistance",9e6),fe(r,"nightFadeOutDistance",16e6),Kt(e,r,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Kt(e,r,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),fe(r,"atmosphereRayleighScaleHeight",1e4),fe(r,"atmosphereMieScaleHeight",3200),fe(r,"atmosphereMieAnisotropy",.92),!a.skyAtmosphere&&(e!=null&&e.SkyAtmosphere)&&(a.skyAtmosphere=pn(e));const s=a.skyAtmosphere;s&&(s.show=!0,fe(s,"perFragmentAtmosphere",!0),fe(s,"dynamicAtmosphereLighting",!0),fe(s,"dynamicAtmosphereLightingFromSun",!0),fe(s,"hueShift",-.025),fe(s,"saturationShift",.08),fe(s,"brightnessShift",.03),fe(s,"atmosphereLightIntensity",12),Kt(e,s,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Kt(e,s,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),fe(s,"atmosphereRayleighScaleHeight",1e4),fe(s,"atmosphereMieScaleHeight",3200),fe(s,"atmosphereMieAnisotropy",.92)),a.sun&&(a.sun.show=!0),a.moon&&(a.moon.show=!0),a.skyBox&&(a.skyBox.show=!0),"sunBloom"in a&&(a.sunBloom=!0),"highDynamicRange"in a&&(a.highDynamicRange=!0),mn(a),(i=a.requestRender)==null||i.call(a)}function un(t){var s;const e=t==null?void 0:t.scene,a=e==null?void 0:e.globe;if(!e||!a)return null;const r=(s=e.postProcessStages)==null?void 0:s.bloom;return{scene:dt(e,["highDynamicRange","sunBloom","light"]),fog:dt(e.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:dt(a,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!e.skyAtmosphere,sky:dt(e.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:dt(e.sun,["show"]),moon:dt(e.moon,["show"]),skyBox:dt(e.skyBox,["show"]),bloom:{props:dt(r,["enabled"]),uniforms:dt(r==null?void 0:r.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function dn(t,e,a){var p,v,b,T;if(!a)return;const r=t==null?void 0:t.scene,s=r==null?void 0:r.globe;if(!r||!s)return;ht(r,a.scene,e),ht(r.fog,a.fog,e),ht(s,a.globe,e),ht(r.sun,a.sun,e),ht(r.moon,a.moon,e),ht(r.skyBox,a.skyBox,e),r.skyAtmosphere&&(ht(r.skyAtmosphere,a.sky,e),a.skyAtmosphereExisted||(r.skyAtmosphere.show=!1));const i=(p=r.postProcessStages)==null?void 0:p.bloom;ht(i,(v=a.bloom)==null?void 0:v.props,e),ht(i==null?void 0:i.uniforms,(b=a.bloom)==null?void 0:b.uniforms,e),(T=r.requestRender)==null||T.call(r)}function hn(t,e){var a;if(e!=null&&e.SunLight)try{t.light=new e.SunLight({color:(a=e.Color)==null?void 0:a.WHITE,intensity:2.35})}catch{t.light=new e.SunLight}fe(t.light,"intensity",2.35)}function fn(t){const e=t==null?void 0:t.fog;e&&(e.enabled=!0,fe(e,"density",12e-5),fe(e,"minimumBrightness",.035),fe(e,"screenSpaceErrorFactor",2),fe(e,"visualDensityScalar",.16))}function mn(t){var a;const e=(a=t==null?void 0:t.postProcessStages)==null?void 0:a.bloom;e&&(e.enabled=!0,e.uniforms&&(fe(e.uniforms,"contrast",128),fe(e.uniforms,"brightness",-.18),fe(e.uniforms,"delta",1),fe(e.uniforms,"sigma",2.5),fe(e.uniforms,"stepSize",4.2)))}function pn(t){var e;try{return new t.SkyAtmosphere((e=t.Ellipsoid)==null?void 0:e.WGS84)}catch{return new t.SkyAtmosphere}}function fe(t,e,a){t&&e in t&&(t[e]=a)}function Kt(t,e,a,r,s,i){!e||!(a in e)||!(t!=null&&t.Cartesian3)||(e[a]=new t.Cartesian3(r,s,i))}function dt(t,e){return t?e.reduce((a,r)=>(r in t&&(a[r]=gn(t[r])),a),{}):{}}function ht(t,e={},a){!t||!e||Object.entries(e).forEach(([r,s])=>{r in t&&(t[r]=vn(s,a))})}function gn(t){return t&&typeof t=="object"&&"x"in t&&"y"in t&&"z"in t?{__type:"Cartesian3",x:t.x,y:t.y,z:t.z}:t}function vn(t,e){return(t==null?void 0:t.__type)==="Cartesian3"&&(e!=null&&e.Cartesian3)?new e.Cartesian3(t.x,t.y,t.z):t}const Va=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]],Et={UPSCALE_FACTOR:4,HISTORY_BLEND_FACTOR:.9,STBN_SIZE:64,STBN_DEPTH:64};function yn(t={}){const{Cesium:e,viewer:a}=t,r=Z({frameIndex:0,jitterX:0,jitterY:0,historyValid:!1}),s=Cr({current:null,resolve:null,history:null});function i(u,_){var f;if(!((f=a==null?void 0:a.scene)!=null&&f.context)||!e)return;const y=a.scene.context,L=Math.ceil(u/Et.UPSCALE_FACTOR),n=Math.ceil(_/Et.UPSCALE_FACTOR);s.value={current:ya(y,e,L,n),resolve:ya(y,e,u,_),history:ya(y,e,u,_)},r.value.historyValid=!1}function p(u,_){const y=r.value;y.frameIndex=u%16;const L=Va[y.frameIndex%4][Math.floor(y.frameIndex/4)]%4,n=Math.floor(Va[y.frameIndex%4][Math.floor(y.frameIndex/4)]/4);y.jitterX=(L+.5)/Et.UPSCALE_FACTOR-.5,y.jitterY=(n+.5)/Et.UPSCALE_FACTOR-.5}function v(u,_,y){if(!e)return u;const L=r.value,n=e.Matrix4.fromTranslation(new e.Cartesian3(L.jitterX/_*2,L.jitterY/y*2,0));return e.Matrix4.multiply(u,n,new e.Matrix4)}function b(){return`
            #if __VERSION__ == 300
            in vec2 v_textureCoordinates;
            #define SAMPLE_TEX texture
            #define FRAG_COLOR out_FragColor
            #else
            varying vec2 v_textureCoordinates;
            #define SAMPLE_TEX texture2D
            #define FRAG_COLOR gl_FragColor
            #endif

            uniform sampler2D colorTexture;
            uniform sampler2D depthTexture;
            uniform sampler2D historyTexture;
            uniform vec2 resolution;
            uniform vec2 jitterOffset;
            uniform float historyBlendFactor;
            uniform int frameIndex;

            // 方差裁剪：计算邻域颜色的 AABB
            vec4 varianceClip(vec4 historyColor, vec2 uv) {
                vec4 minColor = vec4(1.0);
                vec4 maxColor = vec4(0.0);
                vec4 moment1 = vec4(0.0);
                vec4 moment2 = vec4(0.0);

                // 3x3 邻域采样
                for (int y = -1; y <= 1; y++) {
                    for (int x = -1; x <= 1; x++) {
                        vec2 offset = vec2(float(x), float(y)) / resolution;
                        vec4 sampleColor = SAMPLE_TEX(colorTexture, uv + offset);

                        minColor = min(minColor, sampleColor);
                        maxColor = max(maxColor, sampleColor);

                        moment1 += sampleColor;
                        moment2 += sampleColor * sampleColor;
                    }
                }

                // 计算均值和方差
                vec4 mean = moment1 / 9.0;
                vec4 variance = moment2 / 9.0 - mean * mean;

                // 构造 AABB 并裁剪历史颜色
                vec4 stdDev = sqrt(max(variance, vec4(0.0001)));
                vec4 aabbMin = mean - stdDev * 1.0;
                vec4 aabbMax = mean + stdDev * 1.0;

                // 将历史颜色裁剪到 AABB 内
                return clamp(historyColor, aabbMin, aabbMax);
            }

            void main() {
                vec2 uv = v_textureCoordinates;

                // 当前帧颜色
                vec4 currentColor = SAMPLE_TEX(colorTexture, uv);

                // TODO: 速度重投影接入后，用 velocity texture 计算 history UV
                vec2 historyUv = uv;

                // 检查历史 UV 是否在屏幕内
                bool historyValid = historyUv.x >= 0.0 && historyUv.x <= 1.0 &&
                                    historyUv.y >= 0.0 && historyUv.y <= 1.0;

                if (historyValid && historyBlendFactor > 0.0) {
                    // 采样历史颜色
                    vec4 historyColor = SAMPLE_TEX(historyTexture, historyUv);

                    // 方差裁剪
                    historyColor = varianceClip(historyColor, uv);

                    // 混合当前帧和历史帧
                    float blendFactor = historyBlendFactor;
                    vec4 resolvedColor = mix(currentColor, historyColor, blendFactor);

                    FRAG_COLOR = resolvedColor;
                } else {
                    // 历史无效，直接使用当前帧
                    FRAG_COLOR = currentColor;
                }
            }
        `}function T(){return`
            #if __VERSION__ == 300
            in vec2 v_textureCoordinates;
            #define SAMPLE_TEX texture
            #define FRAG_COLOR out_FragColor
            #else
            varying vec2 v_textureCoordinates;
            #define SAMPLE_TEX texture2D
            #define FRAG_COLOR gl_FragColor
            #endif

            uniform sampler2D depthTexture;
            uniform mat4 inverseViewProjection;
            uniform mat4 _previousViewProjection;
            uniform vec2 resolution;

            void main() {
                // 读取深度
                float depth = czm_readDepth(depthTexture, v_textureCoordinates);

                // 重建世界坐标
                vec4 clipPos = vec4(v_textureCoordinates * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
                vec4 worldPos = inverseViewProjection * clipPos;
                worldPos /= worldPos.w;

                // 投影到上一帧屏幕空间
                vec4 previousClipPos = _previousViewProjection * worldPos;
                previousClipPos /= previousClipPos.w;

                vec2 previousUv = previousClipPos.xy * 0.5 + 0.5;

                // 计算速度向量
                vec2 velocity = v_textureCoordinates - previousUv;

                FRAG_COLOR = vec4(velocity, 0.0, 1.0);
            }
        `}const M={jitterOffset:null,frameIndex:0,historyBlendFactor:Et.HISTORY_BLEND_FACTOR};function I(){const u=r.value;return M.jitterOffset?(M.jitterOffset.x=u.jitterX,M.jitterOffset.y=u.jitterY):M.jitterOffset=new e.Cartesian2(u.jitterX,u.jitterY),M.frameIndex=u.frameIndex,M}function A(){const u=s.value;u.resolve&&u.history&&(s.value={current:u.current,resolve:u.history,history:u.resolve},r.value.historyValid=!0)}function E(){const u=s.value;u.current&&u.current.destroy(),u.resolve&&u.resolve.destroy(),u.history&&u.history.destroy(),s.value={current:null,resolve:null,history:null},r.value.historyValid=!1}return{temporalState:r,framebuffers:s,initialize:i,update:p,getJitteredProjection:v,getResolveShader:b,getVelocityShader:T,getJitterUniforms:I,swapBuffers:A,destroy:E,TEMPORAL_CONFIG:Et}}function ya(t,e,a,r){const s=new e.Texture({context:t,width:a,height:r,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.UNSIGNED_BYTE,sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR,wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE})}),i=new e.Renderbuffer({context:t,width:a,height:r,format:e.RenderbufferFormat.DEPTH_COMPONENT16});return new e.Framebuffer({context:t,colorTextures:[s],depthRenderbuffer:i})}const Wt=128,na=32,Gt=64,ia=16,$t=128,oa=64,At=6378137,br=At+9e4;class xn{constructor(e,a={}){var r;if(!((r=e==null?void 0:e.scene)!=null&&r.context))throw new Error("AtmosphereLutResources requires a valid Cesium Viewer instance.");this.context=e.scene.context,this.Cesium=a.cesium||globalThis.Cesium,this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this._destroyed=!1,this._createTextures()}destroy(){if(this._destroyed)return;const e=(a,r)=>{var s;try{(s=a==null?void 0:a.destroy)==null||s.call(a)}catch{}};e(this.transmittanceTexture,"transmittanceTexture"),e(this.irradianceTexture,"irradianceTexture"),e(this.scatteringTexture,"scatteringTexture"),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this._destroyed=!0}isDestroyed(){return this._destroyed}_createTextures(){const e=_n(),a=bn(),r=Sn();this.transmittanceTexture=xa({Cesium:this.Cesium,context:this.context,width:Wt,height:na,data:e}),this.irradianceTexture=xa({Cesium:this.Cesium,context:this.context,width:Gt,height:ia,data:a}),this.scatteringTexture=xa({Cesium:this.Cesium,context:this.context,width:$t,height:oa,data:r})}}function xa({Cesium:t,context:e,width:a,height:r,data:s}){return new t.Texture({context:e,width:a,height:r,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.UNSIGNED_BYTE,source:{width:a,height:r,arrayBufferView:s},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE})})}function _n(){const t=new Uint8Array(Wt*na*4);for(let e=0;e<na;e+=1){const a=e/Math.max(na-1,1),r=At+a*(br-At);for(let s=0;s<Wt;s+=1){const i=s/Math.max(Wt-1,1)*2-1,p=wn(r,i);Aa(t,(e*Wt+s)*4,p,255)}}return t}function bn(){const t=new Uint8Array(Gt*ia*4);for(let e=0;e<ia;e+=1){const a=e/Math.max(ia-1,1),r=At+a*(br-At);for(let s=0;s<Gt;s+=1){const i=s/Math.max(Gt-1,1),p=Tn(r,i);Aa(t,(e*Gt+s)*4,p,255)}}return t}function Sn(){const t=new Uint8Array($t*oa*4);for(let e=0;e<oa;e+=1){const a=e/Math.max(oa-1,1);for(let r=0;r<$t;r+=1){const s=r/Math.max($t-1,1)*2-1,i=Cn(s,a);Aa(t,(e*$t+r)*4,i,255)}}return t}function wn(t,e){const a=Math.max(t-At,0),r=ua(-.08,.18,e),s=1/Math.max(e*.5+.5,.08),i=Math.exp(-a/1e4),p=Math.exp(-a/3200),v=s*(.22+.78*r);return[Math.exp(-(55e-7*i+21e-6*p)*v*18e3),Math.exp(-(13e-6*i+21e-6*p)*v*18e3),Math.exp(-(284e-7*i+21e-6*p)*v*18e3)].map(b=>b*(.22+.78*r))}function Tn(t,e){const a=Math.max(t-At,0),r=Math.exp(-a/1e4),s=[.32,.62,1],i=[.95,.62,.38],p=ua(.08,.75,e),v=.18+.55*e;return s.map((b,T)=>(i[T]*(1-p)+b*1.35*p)*v*(.35+.65*r))}function Cn(t,e){const a=Dn(t),r=Mn(t,.76),s=1-Math.exp(-e*3.2),i=ua(.58,1,e)*ua(.15,1,t*.5+.5),p=[.42,.58,.9].map(b=>b*a*18),v=[1,.78,.48].map(b=>b*r*5.5);return p.map((b,T)=>(b+v[T]*(.55+i))*s)}function Dn(t){return .05968310366*(1+t*t)}function Mn(t,e){const a=e*e,r=Math.pow(Math.max(1+a-2*e*t,.001),1.5);return(1-a)/(12.5663706144*r)}function Aa(t,e,a,r){t[e]=_a(a[0]),t[e+1]=_a(a[1]),t[e+2]=_a(a[2]),t[e+3]=r}function _a(t){return Math.round(Math.max(0,Math.min(1,t))*255)}function ua(t,e,a){const r=Math.max(0,Math.min(1,(a-t)/(e-t)));return r*r*(3-2*r)}const Ln=`#version 300 es
in vec2 position;
out vec2 v_uv;

void main() {
    v_uv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
}
`,Pn=`#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 out_FragColor;

uniform vec4 u_shadowAtlas;       // x=cascade count, y=resolution, z=bottom radius, w=top radius
uniform vec4 u_shadowParams;      // x=extinction density, y=coverage, z=step count, w=time
uniform vec3 u_sunDirectionWC;
uniform mat4 u_inverseCascadeMatrices[4];

float saturate(float value) {
    return clamp(value, 0.0, 1.0);
}

float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
}

float valueNoise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    float x00 = mix(n000, n100, f.x);
    float x10 = mix(n010, n110, f.x);
    float x01 = mix(n001, n101, f.x);
    float x11 = mix(n011, n111, f.x);
    float y0 = mix(x00, x10, f.y);
    float y1 = mix(x01, x11, f.y);
    return mix(y0, y1, f.z);
}

float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
        value += valueNoise(p) * amplitude;
        p = p * 2.03 + vec3(17.1, 31.7, 11.3);
        amplitude *= 0.5;
    }
    return value;
}

vec2 raySphere(vec3 origin, vec3 direction, float radius) {
    float b = dot(origin, direction);
    float c = dot(origin, origin) - radius * radius;
    float h = b * b - c;
    if (h < 0.0) return vec2(1.0, 0.0);
    h = sqrt(h);
    return vec2(-b - h, -b + h);
}

// 12 个正二十面体顶点法线（Golden Ratio 生成）
const vec3 STRUCTURE_NORMALS[12] = vec3[12](
    normalize(vec3(-1.0,  1.61803398875,  0.0)),
    normalize(vec3( 1.0,  1.61803398875,  0.0)),
    normalize(vec3(-1.0, -1.61803398875,  0.0)),
    normalize(vec3( 1.0, -1.61803398875,  0.0)),
    normalize(vec3( 0.0, -1.0,  1.61803398875)),
    normalize(vec3( 0.0,  1.0,  1.61803398875)),
    normalize(vec3( 0.0, -1.0, -1.61803398875)),
    normalize(vec3( 0.0,  1.0, -1.61803398875)),
    normalize(vec3( 1.61803398875,  0.0, -1.0)),
    normalize(vec3( 1.61803398875,  0.0,  1.0)),
    normalize(vec3(-1.61803398875,  0.0, -1.0)),
    normalize(vec3(-1.61803398875,  0.0,  1.0))
);

vec3 getStructureNormal(int index) {
    return STRUCTURE_NORMALS[clamp(index, 0, 11)];
}

float stableBlueNoise(vec2 texel, float cascadeIndex) {
    // 多频率空间哈希叠加，减少低频图案可见性
    vec2 cell = floor(texel);
    float seed = cascadeIndex * 0.113;
    float h1 = fract(sin(dot(cell, vec2(12.9898, 78.233)) + seed) * 43758.5453);
    float h2 = fract(sin(dot(cell, vec2(63.7264, 10.873)) + seed * 1.3) * 23421.631);
    return fract(h1 * 0.618 + h2 * 0.382);
}

float sampleCloudDensity(vec3 position, float heightFraction) {
    vec3 normal = normalize(position);
    vec3 wind = vec3(u_shadowParams.w * 0.0025, u_shadowParams.w * 0.0015, 0.0);
    vec3 weatherCoord = normal * 42.0 + wind;
    vec3 shapeCoord = position * 0.000075 + vec3(u_shadowParams.w * 0.006, 0.0, 0.0);

    float weather = fbm(weatherCoord);
    float shape = fbm(shapeCoord);
    float detail = fbm(shapeCoord * 3.2 + 19.0);
    float profile = smoothstep(0.02, 0.22, heightFraction) * (1.0 - smoothstep(0.72, 1.0, heightFraction));
    float coverageCutoff = 1.0 - u_shadowParams.y;
    float baseDensity = smoothstep(coverageCutoff, coverageCutoff + 0.28, weather * 0.72 + shape * 0.28);
    float carved = baseDensity * smoothstep(0.10, 0.82, detail);

    return carved * profile;
}

void main() {
    float cascadeCount = max(u_shadowAtlas.x, 1.0);
    float cascadeWidth = 1.0 / cascadeCount;
    int cascadeIndex = int(clamp(floor(v_uv.x / cascadeWidth), 0.0, cascadeCount - 1.0));
    float localX = fract(v_uv.x * cascadeCount);
    vec2 cascadeUv = vec2(localX, v_uv.y);
    vec2 ndc = cascadeUv * 2.0 - 1.0;

    mat4 inverseCascade = u_inverseCascadeMatrices[cascadeIndex];
    vec4 nearWorld = inverseCascade * vec4(ndc, -1.0, 1.0);
    vec4 farWorld = inverseCascade * vec4(ndc, 1.0, 1.0);
    nearWorld.xyz /= max(abs(nearWorld.w), 0.000001);
    farWorld.xyz /= max(abs(farWorld.w), 0.000001);

    vec3 rayOrigin = nearWorld.xyz;
    vec3 rayDirection = normalize(farWorld.xyz - nearWorld.xyz);
    if (dot(rayDirection, u_sunDirectionWC) < 0.0) {
        rayDirection = -rayDirection;
    }

    vec2 outerHit = raySphere(rayOrigin, rayDirection, u_shadowAtlas.w);
    if (outerHit.x > outerHit.y || outerHit.y <= 0.0) {
        out_FragColor = vec4(0.0);
        return;
    }

    vec2 innerHit = raySphere(rayOrigin, rayDirection, u_shadowAtlas.z);
    float nearT = max(outerHit.x, 0.0);
    float farT = outerHit.y;
    if (innerHit.x <= innerHit.y && innerHit.y > 0.0) {
        farT = min(farT, max(innerHit.x, 0.0));
    }
    if (farT <= nearT) {
        out_FragColor = vec4(0.0);
        return;
    }

    int stepCount = int(clamp(floor(u_shadowParams.z + 0.5), 8.0, 48.0));
    float span = farT - nearT;
    float stepSize = span / float(stepCount);
    float stableJitter = stableBlueNoise(gl_FragCoord.xy, float(cascadeIndex));
    int structureIndex = int(floor(stableJitter * 12.0));
    vec3 structureNormal = getStructureNormal(structureIndex);
    float structureDenom = dot(rayDirection, structureNormal);
    float structureSpacing = max(stepSize, 250.0);
    float t = nearT + stableJitter * stepSize;
    float planeIndex = 0.0;
    float planeDirection = 1.0;

    if (abs(structureDenom) > 0.035) {
        vec3 nearPosition = rayOrigin + rayDirection * nearT;
        float nearCoord = dot(nearPosition, structureNormal);
        planeDirection = sign(structureDenom);
        planeIndex = planeDirection > 0.0
            ? ceil(nearCoord / structureSpacing + stableJitter)
            : floor(nearCoord / structureSpacing - stableJitter);
        float planeCoord = planeIndex * structureSpacing;
        t = (planeCoord - dot(rayOrigin, structureNormal)) / structureDenom;
        if (t < nearT) {
            planeIndex += planeDirection;
            planeCoord = planeIndex * structureSpacing;
            t = (planeCoord - dot(rayOrigin, structureNormal)) / structureDenom;
        }
    }

    float opticalDepth = 0.0;
    float firstDepth = -1.0;
    float maxDensity = 0.0;

    for (int i = 0; i < 48; i++) {
        if (i >= stepCount || t > farT) break;

        float currentT = t;
        float nextT = currentT + stepSize;
        if (abs(structureDenom) > 0.035) {
            float nextPlaneCoord = (planeIndex + planeDirection) * structureSpacing;
            nextT = (nextPlaneCoord - dot(rayOrigin, structureNormal)) / structureDenom;
        }
        float sampleLength = clamp(nextT - currentT, 0.0, stepSize * 2.5);
        vec3 position = rayOrigin + rayDirection * t;
        float radius = length(position);
        float heightFraction = saturate((radius - u_shadowAtlas.z) / max(u_shadowAtlas.w - u_shadowAtlas.z, 1.0));
        float density = sampleCloudDensity(position, heightFraction);
        if (density > 0.001) {
            if (firstDepth < 0.0) firstDepth = t;
            opticalDepth += density * sampleLength * u_shadowParams.x;
            maxDensity = max(maxDensity, density);
        }

        if (abs(structureDenom) > 0.035) {
            planeIndex += planeDirection;
            float planeCoord = planeIndex * structureSpacing;
            t = (planeCoord - dot(rayOrigin, structureNormal)) / structureDenom;
        } else {
            t += stepSize;
        }
    }

    float normalizedFront = firstDepth < 0.0 ? 0.0 : saturate((firstDepth - nearT) / max(farT - nearT, 1.0));
    float encodedOcclusion = 1.0 - exp(-opticalDepth * 0.85);
    out_FragColor = vec4(normalizedFront, saturate(encodedOcclusion), saturate(maxDensity), firstDepth < 0.0 ? 0.0 : 1.0);
}
`,Bt={cascadeCount:3,resolution:256,splitLambda:.58,near:1500,far:72e4};class Fn{constructor(e,a={}){var r;if(!((r=e==null?void 0:e.scene)!=null&&r.context))throw new Error("CloudShadowResources requires a valid Cesium Viewer instance.");this.viewer=e,this.scene=e.scene,this.context=e.scene.context,this.Cesium=a.cesium||globalThis.Cesium,this.options=In(a),this.enabled=a.enabled!==!1,this.status={ready:!1,frameNumber:-1,width:0,height:0,pixelDatatype:"UNSIGNED_BYTE"},this.cascadeSplits=new Float32Array(this.options.cascadeCount),this.cascadeMatrices=Array.from({length:this.options.cascadeCount},()=>new this.Cesium.Matrix4),this.inverseCascadeMatrices=Array.from({length:this.options.cascadeCount},()=>new this.Cesium.Matrix4),this._textures=[null,null],this._framebuffers=[null,null],this._clearCommand=null,this._drawCommand=null,this._shaderProgram=null,this._quadVertexArray=null,this._viewport=null,this._activeIndex=0,this._destroyed=!1,this._lastCameraPosition=new this.Cesium.Cartesian3,this._lastSunDirection=new this.Cesium.Cartesian3,this._uniformScratch={atlas:new this.Cesium.Cartesian4,params:new this.Cesium.Cartesian4,sun:new this.Cesium.Cartesian3,inverseMatrices:Array.from({length:4},()=>new this.Cesium.Matrix4)},this._createTargets(),this._createCommands(),this.status.ready=!0}get texture(){return this._textures[this._activeIndex]}get historyTexture(){return this._textures[1-this._activeIndex]}get framebuffer(){return this._framebuffers[this._activeIndex]}get width(){return this.options.resolution*this.options.cascadeCount}get height(){return this.options.resolution}get viewport(){return this._viewport||(this._viewport=new this.Cesium.BoundingRectangle(0,0,this.width,this.height)),this._viewport.width=this.width,this._viewport.height=this.height,this._viewport}resize(e){var r,s;const a=Ma(e,64,2048);a!==this.options.resolution&&(this.options.resolution=a,this._destroyTargets(),this._createTargets(),this.status.ready=!0,this._drawCommand&&(this._drawCommand.framebuffer=this.framebuffer,this._drawCommand.renderState=this.Cesium.RenderState.fromCache({viewport:this.viewport,depthTest:{enabled:!1},depthMask:!1})),(s=(r=this.scene).requestRender)==null||s.call(r))}update({camera:e,sunDirection:a,maxDistance:r,density:s,coverage:i,bottomRadius:p,topRadius:v,timeSeconds:b,frameState:T}={}){var A,E;if(this._destroyed||!this.enabled)return;const M=e||this.viewer.camera,I=a||((E=(A=this.scene.context)==null?void 0:A.uniformState)==null?void 0:E.sunDirectionWC);!M||!I||(this._updateCascadeSplits(r),this._updateMatrices(M,I),this._updateUniforms({sunDirection:I,density:s,coverage:i,bottomRadius:p,topRadius:v,timeSeconds:b}),this.Cesium.Cartesian3.clone(M.positionWC||M.position,this._lastCameraPosition),this.Cesium.Cartesian3.clone(I,this._lastSunDirection),T!=null&&T.commandList&&this._drawCommand&&(this.enqueueClear(T),this._drawCommand.framebuffer=this.framebuffer,this.status.frameNumber=Number(T.frameNumber??this.status.frameNumber+1),T.commandList.push(this._drawCommand)))}swap(){this._activeIndex=1-this._activeIndex}enqueueClear(e){!(e!=null&&e.commandList)||!this.framebuffer||(this._clearCommand||(this._clearCommand=new this.Cesium.ClearCommand({color:new this.Cesium.Color(0,0,0,0),owner:this,pass:this.Cesium.Pass.OPAQUE})),this._clearCommand.framebuffer=this.framebuffer,this._clearCommand.renderState=this.Cesium.RenderState.fromCache({viewport:this.viewport}),e.commandList.push(this._clearCommand))}destroy(){this._destroyed||(this._destroyTargets(),this._destroyCommandResources(),this._destroyed=!0)}isDestroyed(){return this._destroyed}_createTargets(){const e=this.Cesium;this.options.resolution;const a=this.width,r=this.height,s=a*r,i=!!this.options.useFloatTexture&&!!this.context.floatingPointTexture,p=i?e.PixelDatatype.FLOAT:e.PixelDatatype.UNSIGNED_BYTE;this.status.width=a,this.status.height=r,this.status.pixelDatatype=i?"FLOAT":"UNSIGNED_BYTE";for(let v=0;v<2;v+=1)this._textures[v]=new e.Texture({context:this.context,width:a,height:r,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:p,source:{width:a,height:r,arrayBufferView:i?new Float32Array(s*4):new Uint8Array(s*4)},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR,wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE})}),this._framebuffers[v]=new e.Framebuffer({context:this.context,colorTextures:[this._textures[v]],destroyAttachments:!1})}_createCommands(){this._destroyCommandResources(),this._createQuadVertexArray(),this._shaderProgram=this.Cesium.ShaderProgram.fromCache({context:this.context,vertexShaderSource:Ln,fragmentShaderSource:Pn,attributeLocations:{position:0}}),this._drawCommand=new this.Cesium.DrawCommand({owner:this,primitiveType:this.Cesium.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._shaderProgram,renderState:this.Cesium.RenderState.fromCache({viewport:this.viewport,depthTest:{enabled:!1},depthMask:!1}),framebuffer:this.framebuffer,uniformMap:this._getUniformMap(),pass:this.Cesium.Pass.OPAQUE})}_createQuadVertexArray(){const e=this.Cesium,a=e.Buffer.createVertexBuffer({context:this.context,typedArray:new Float32Array([-1,-1,1,-1,1,1,-1,1]),usage:e.BufferUsage.STATIC_DRAW}),r=e.Buffer.createIndexBuffer({context:this.context,typedArray:new Uint16Array([0,1,2,0,2,3]),usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this.context,attributes:[{index:0,vertexBuffer:a,componentsPerAttribute:2}],indexBuffer:r})}_destroyCommandResources(){this._drawCommand=null,this._clearCommand=null,this._shaderProgram&&(this._shaderProgram.destroy(),this._shaderProgram=null),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null)}_getUniformMap(){return{u_shadowAtlas:()=>this._uniformScratch.atlas,u_shadowParams:()=>this._uniformScratch.params,u_sunDirectionWC:()=>this._uniformScratch.sun,u_inverseCascadeMatrices:()=>this._uniformScratch.inverseMatrices}}_updateUniforms({sunDirection:e,density:a=9e-5,coverage:r=.52,bottomRadius:s,topRadius:i,timeSeconds:p=0}){this._uniformScratch.atlas.x=this.options.cascadeCount,this._uniformScratch.atlas.y=this.options.resolution,this._uniformScratch.atlas.z=s||6379637,this._uniformScratch.atlas.w=i||6386637,this._uniformScratch.params.x=a,this._uniformScratch.params.y=r,this._uniformScratch.params.z=24,this._uniformScratch.params.w=p,this.Cesium.Cartesian3.clone(e,this._uniformScratch.sun);for(let v=0;v<4;v+=1)this.Cesium.Matrix4.clone(this.inverseCascadeMatrices[v]||this.Cesium.Matrix4.IDENTITY,this._uniformScratch.inverseMatrices[v])}_destroyTargets(){this.status.ready=!1;for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._textures[e]&&(this._textures[e].destroy(),this._textures[e]=null)}_updateCascadeSplits(e){const a=this.options.near,r=Math.max(a+1,Number(e)||this.options.far),s=this.options.splitLambda,i=this.options.cascadeCount;for(let p=1;p<=i;p+=1){const v=p/i,b=a*Math.pow(r/a,v),T=a+(r-a)*v;this.cascadeSplits[p-1]=b*s+T*(1-s)}}_updateMatrices(e,a){const r=this.Cesium,s=r.Cartesian3.normalize(a,An),i=e.positionWC||e.position,p=e.upWC||e.up,v=e.rightWC||e.right,b=e.directionWC||e.direction;let T=this.options.near;for(let M=0;M<this.options.cascadeCount;M+=1){const I=this.cascadeSplits[M];En({Cesium:r,eye:i,up:p,right:v,direction:b,sunDirection:s,near:T,far:I,resolution:this.options.resolution,result:this.cascadeMatrices[M],inverseResult:this.inverseCascadeMatrices[M]}),T=I}}}const An={},it={},We={},ft={},ot={},Jt={},Zt={};function En({Cesium:t,eye:e,up:a,right:r,direction:s,sunDirection:i,near:p,far:v,resolution:b,result:T,inverseResult:M}){const I=(p+v)*.5,A=Math.max((v-p)*.62,1200);t.Cartesian3.multiplyByScalar(s,I,it),t.Cartesian3.add(e,it,it),t.Cartesian3.negate(i,ot),t.Cartesian3.cross(a,ot,We),t.Cartesian3.magnitudeSquared(We)<.001&&t.Cartesian3.cross(r,ot,We),t.Cartesian3.normalize(We,We),t.Cartesian3.cross(ot,We,ft),t.Cartesian3.normalize(ft,ft);const E=A*2/Math.max(b,1),u=Math.round(t.Cartesian3.dot(it,We)/E)*E,_=Math.round(t.Cartesian3.dot(it,ft)/E)*E,y=t.Cartesian3.dot(it,ot);t.Cartesian3.multiplyByScalar(We,u,Jt),t.Cartesian3.multiplyByScalar(ft,_,Zt),t.Cartesian3.add(Jt,Zt,Jt),t.Cartesian3.multiplyByScalar(ot,y,Zt),t.Cartesian3.add(Jt,Zt,it);const L=t.Matrix4.fromArray([We.x,We.y,We.z,-t.Cartesian3.dot(We,it),ft.x,ft.y,ft.z,-t.Cartesian3.dot(ft,it),ot.x,ot.y,ot.z,-t.Cartesian3.dot(ot,it),0,0,0,1]),n=t.Matrix4.computeOrthographicOffCenter(-A,A,-A,A,-A*3,A*3,Rn);t.Matrix4.multiply(n,L,T),t.Matrix4.inverse(T,M)}const Rn={};function In(t={}){return{cascadeCount:Ma(t.cascadeCount??Bt.cascadeCount,1,4),resolution:Ma(t.resolution??Bt.resolution,64,2048),splitLambda:sa(t.splitLambda??Bt.splitLambda,0,1),near:sa(t.near??Bt.near,1,1e5),far:sa(t.far??Bt.far,1e4,2e6),useFloatTexture:t.useFloatTexture===!0}}function Ma(t,e,a){return Math.round(sa(Number(t)||e,e,a))}function sa(t,e,a){return Math.max(e,Math.min(a,t))}class kn{constructor(e,a={}){var r;if(!((r=e==null?void 0:e.scene)!=null&&r.context))throw new Error("CloudShadowPrimitive requires a valid Cesium Viewer instance.");this.viewer=e,this.Cesium=a.cesium||globalThis.Cesium,this.show=a.enabled===!0,this.params={...a},this.resources=new Fn(e,{cesium:this.Cesium,enabled:this.show,far:a.maxDistance,resolution:a.shadowResolution||256}),this._destroyed=!1}get texture(){var e;return((e=this.resources)==null?void 0:e.texture)||null}get cascadeMatrices(){var e;return((e=this.resources)==null?void 0:e.cascadeMatrices)||null}get cascadeSplits(){var e;return((e=this.resources)==null?void 0:e.cascadeSplits)||null}get cascadeCount(){var e,a;return((a=(e=this.resources)==null?void 0:e.options)==null?void 0:a.cascadeCount)||0}get shadowResolution(){var e,a;return((a=(e=this.resources)==null?void 0:e.options)==null?void 0:a.resolution)||0}get status(){var e;return((e=this.resources)==null?void 0:e.status)||null}setParams(e={}){this.params={...this.params,...e},this.show=this.params.enabled!==!1,this.resources&&(this.resources.enabled=this.show,e.shadowResolution!==void 0&&this.resources.resize(e.shadowResolution))}update(e){var a,r;if(!(this._destroyed||!this.show||!this.resources))try{const i=(r=(a=this.viewer.scene.context)==null?void 0:a.uniformState)==null?void 0:r.sunDirectionWC;this.resources.update({camera:this.viewer.camera,sunDirection:i,maxDistance:this.params.maxDistance,density:this.params.density,coverage:this.params.coverage,bottomRadius:this.params.bottomRadius,topRadius:this.params.topRadius,timeSeconds:this.params.timeSeconds,frameState:e})}catch{this.show=!1,this.params.enabled=!1,this.resources.enabled=!1}}destroy(){var e;this._destroyed||((e=this.resources)==null||e.destroy(),this.resources=null,this._destroyed=!0)}isDestroyed(){return this._destroyed}}const On=`
#if __VERSION__ == 300
in vec2 v_textureCoordinates;
#define SAMPLE_TEX texture
#define FRAG_COLOR out_FragColor
#else
varying vec2 v_textureCoordinates;
#define SAMPLE_TEX texture2D
#define FRAG_COLOR gl_FragColor
#endif

uniform sampler2D shadowTexture;
uniform sampler2D historyTexture;
uniform vec2 resolution;
uniform float historyBlendFactor;

// 方差裁剪：计算邻域 BSM 的 AABB
vec4 varianceClip(vec4 historyValue, vec2 uv) {
    vec4 minVal = vec4(1.0);
    vec4 maxVal = vec4(0.0);
    vec4 moment1 = vec4(0.0);
    vec4 moment2 = vec4(0.0);

    // 3x3 邻域采样
    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 offset = vec2(float(x), float(y)) / resolution;
            vec4 sampleVal = SAMPLE_TEX(shadowTexture, uv + offset);

            minVal = min(minVal, sampleVal);
            maxVal = max(maxVal, sampleVal);

            moment1 += sampleVal;
            moment2 += sampleVal * sampleVal;
        }
    }

    // 计算均值和方差
    vec4 mean = moment1 / 9.0;
    vec4 variance = moment2 / 9.0 - mean * mean;

    // 构造 AABB 并裁剪历史值
    vec4 stdDev = sqrt(max(variance, vec4(0.0001)));
    vec4 aabbMin = mean - stdDev * 1.0;
    vec4 aabbMax = mean + stdDev * 1.0;

    // 将历史值裁剪到 AABB 内
    return clamp(historyValue, aabbMin, aabbMax);
}

void main() {
    vec2 uv = v_textureCoordinates;

    // 当前帧 BSM 值
    vec4 currentShadow = SAMPLE_TEX(shadowTexture, uv);

    // 采样历史 BSM 值
    vec4 historyShadow = SAMPLE_TEX(historyTexture, uv);

    // 方差裁剪
    historyShadow = varianceClip(historyShadow, uv);

    // 混合当前帧和历史帧
    // 使用较小的混合因子来保持阴影的响应性
    float blendFactor = historyBlendFactor * 0.8; // 阴影比云层更敏感
    vec4 resolvedShadow = mix(currentShadow, historyShadow, blendFactor);

    FRAG_COLOR = resolvedShadow;
}
`,Nn={HISTORY_BLEND_FACTOR:.75},$e={low:{label:"性能",stepCount:32,maxDistance:26e4,temporalUpsampling:!1},medium:{label:"均衡",stepCount:56,maxDistance:36e4,temporalUpsampling:!1},high:{label:"精细",stepCount:88,maxDistance:52e4,temporalUpsampling:!0},ultra:{label:"极致",stepCount:128,maxDistance:72e4,temporalUpsampling:!0}};$e.medium.stepCount,$e.medium.maxDistance;const zn={__name:"LilGuiControls",props:{title:{type:String,default:"Parameters"},controls:{type:Array,default:()=>[]}},emits:["change"],setup(t,{emit:e}){const a=t,r=e,s=Z(null),i={},p=new Map;let v=null,b="",T=!1;De(()=>[a.title,a.controls],()=>{M()},{deep:!0,flush:"post",immediate:!0}),mr(()=>{g()});function M(){typeof window>"u"||T||(T=!0,pr(()=>{T=!1,I()}))}function I(){const d=s.value;if(!d)return;const x=y(a.controls);(!v||x!==b)&&(g(),A(d,x)),u()}function A(d,x){v=new Rr({container:d,autoPlace:!1,title:a.title||"Parameters",width:Math.max(260,Math.floor(d.clientWidth||320))}),v.domElement.classList.add("cesium-lil-gui"),d.replaceChildren(v.domElement),b=x;for(const C of a.controls||[]){const k=E(C);k&&p.set(C.id,k)}}function E(d){i[d.id]=n(d);let x=null;return d.type==="range"?x=v.add(i,d.id,o(d.min,0),o(d.max,1),o(d.step,.01)):d.type==="color"?x=v.addColor(i,d.id):d.type==="select"?x=v.add(i,d.id,f(d)):x=v.add(i,d.id),x.name(L(d)).onChange(C=>{const k=m(d.id)||d;k.disabled||r("change",{control:k,controlId:k.id,value:C})}),_(x,d),x}function u(){if(v){v.title(a.title||"Parameters");for(const d of a.controls||[]){const x=p.get(d.id);if(!x)continue;const C=n(d);w(i[d.id],C)||(i[d.id]=C,x.updateDisplay()),x.name(L(d)),x.disable(!!d.disabled),_(x,d)}}}function _(d,x){d.domElement.title=x.tooltip||"",d.domElement.dataset.controlId=x.id||"",d.domElement.dataset.controlType=x.type||""}function y(d=[]){return JSON.stringify(d.map(x=>({id:x.id,type:x.type,min:x.min,max:x.max,step:x.step,options:(x.options||[]).map(C=>({label:C.label,value:C.value}))})))}function L(d){return d.displayValue?`${d.label||d.id} (${d.displayValue})`:d.label||d.id}function n(d){var x,C;return d.type==="range"?o(d.value,o(d.min,0)):d.type==="toggle"?!!d.value:d.type==="select"?d.value??((C=(x=d.options)==null?void 0:x[0])==null?void 0:C.value)??"":d.type==="color"?typeof d.value=="string"&&d.value?d.value:"#ffffff":d.value}function f(d){const x={};for(const C of d.options||[])x[C.label||C.value]=C.value;return x}function m(d){return a.controls.find(x=>x.id===d)||null}function w(d,x){return typeof d=="number"||typeof x=="number"?Math.abs(Number(d)-Number(x))<1e-12:d===x}function o(d,x){const C=Number(d);return Number.isFinite(C)?C:x}function g(){if(v)try{v.destroy()}catch{}v=null,b="",p.clear();for(const d of Object.keys(i))delete i[d]}return(d,x)=>(J(),re("div",{ref_key:"containerRef",ref:s,class:"lil-gui-host"},null,512))}},Ea=zt(zn,[["__scopeId","data-v-77b9becf"]]),Bn={key:0,class:"advanced-effects-root"},Un={class:"effects-panel"},Hn={class:"panel-head"},Wn={class:"effect-switches"},Gn=`
uniform sampler2D colorTexture;
uniform sampler2D depthTexture;
uniform sampler2D u_cloudShadowTexture;
uniform sampler2D u_atmosphereTransmittanceTexture;
uniform sampler2D u_atmosphereIrradianceTexture;
uniform sampler2D u_atmosphereScatteringTexture;
uniform vec3 u_cameraPositionWC;
uniform vec3 u_cameraDirectionWC;
uniform mat4 u_inverseViewProjection;
uniform vec3 u_sunDirectionWC;
uniform mat4 u_cloudShadowMatrices[4];
uniform mat4 u_cloudShadowInverseMatrices[4];
uniform vec4 u_cloudShadowSplits;
uniform vec4 u_cloudShadowParams;
uniform float u_cloudBottomRadius;
uniform float u_cloudTopRadius;
uniform float u_maxDistance;
uniform float u_coverage;
uniform float u_density;
uniform float u_shadowStrength;
uniform float u_beerShadowStrength;
uniform float u_multiScattering;
uniform float u_powderStrength;
uniform float u_hazeStrength;
uniform float u_groundBounceStrength;
uniform float u_stepCount;
uniform float u_timeSeconds;
uniform vec4 u_atmosphereParams; // x=enabled, y=rayleigh, z=mie, w=aerial perspective strength
uniform float u_qualityLevel; // 0=low, 1=medium, 2=high, 3=ultra

#if __VERSION__ == 300
in vec2 v_textureCoordinates;
#define SAMPLE_TEX texture
#define FRAG_COLOR out_FragColor
#else
varying vec2 v_textureCoordinates;
#define SAMPLE_TEX texture2D
#define FRAG_COLOR gl_FragColor
#endif

float saturate(float value) {
    return clamp(value, 0.0, 1.0);
}

float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
}

float valueNoise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    float x00 = mix(n000, n100, f.x);
    float x10 = mix(n010, n110, f.x);
    float x01 = mix(n001, n101, f.x);
    float x11 = mix(n011, n111, f.x);
    float y0 = mix(x00, x10, f.y);
    float y1 = mix(x01, x11, f.y);
    return mix(y0, y1, f.z);
}

float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
        value += valueNoise(p) * amplitude;
        p = p * 2.03 + vec3(17.1, 31.7, 11.3);
        amplitude *= 0.5;
    }
    return value;
}

vec2 raySphere(vec3 origin, vec3 direction, float radius) {
    float b = dot(origin, direction);
    float c = dot(origin, origin) - radius * radius;
    float h = b * b - c;
    if (h < 0.0) {
        return vec2(1.0, 0.0);
    }
    h = sqrt(h);
    return vec2(-b - h, -b + h);
}

float getSceneDistance(vec2 uv) {
    float depth = czm_readDepth(depthTexture, uv);
    if (depth <= 0.0 || depth >= 1.0) {
        return 1.0e9;
    }
    vec4 eye = czm_windowToEyeCoordinates(gl_FragCoord.xy, depth);
    return length(eye.xyz);
}

vec3 getRayDirection(vec2 uv) {
    vec2 ndc = uv * 2.0 - 1.0;
    vec4 farPosition = u_inverseViewProjection * vec4(ndc, 1.0, 1.0);
    float safeW = abs(farPosition.w) < 0.00001 ? 0.00001 : farPosition.w;
    farPosition.xyz /= safeW;
    return normalize(farPosition.xyz - u_cameraPositionWC);
}

float sampleCloudDensity(vec3 position, float heightFraction) {
    vec3 normal = normalize(position);
    vec3 wind = vec3(u_timeSeconds * 0.0025, u_timeSeconds * 0.0015, 0.0);
    vec3 weatherCoord = normal * 42.0 + wind;
    vec3 shapeCoord = position * 0.000075 + vec3(u_timeSeconds * 0.006, 0.0, 0.0);

    float weather = fbm(weatherCoord);
    float shape = fbm(shapeCoord);
    float detail = fbm(shapeCoord * 3.2 + 19.0);
    float profile = smoothstep(0.02, 0.22, heightFraction) * (1.0 - smoothstep(0.72, 1.0, heightFraction));
    float coverageCutoff = 1.0 - u_coverage;
    float baseDensity = smoothstep(coverageCutoff, coverageCutoff + 0.28, weather * 0.72 + shape * 0.28);
    float carved = baseDensity * smoothstep(0.10, 0.82, detail);

    return carved * profile;
}

float hgPhase(float cosTheta, float g) {
    float g2 = g * g;
    float denom = pow(max(1.0 + g2 - 2.0 * g * cosTheta, 0.001), 1.5);
    return (1.0 - g2) / (12.5663706144 * denom);
}

// ============================================================
// 大气散射物理常数（基于 Bruneton 预计算大气模型）
// ============================================================
// Rayleigh 散射系数 (RGB, 550nm 参考): vec3(5.5e-6, 13.0e-6, 28.4e-6)
// Mie 散射系数: 21.0e-6
// Rayleigh 标高: 10000.0m (10km)
// Mie 标高: 3200.0m (3.2km)
// 地球半径: 6378137.0m (WGS84)
// 大气层顶: 90000.0m (90km)
// ============================================================

float rayleighPhase(float cosTheta) {
    return 0.05968310366 * (1.0 + cosTheta * cosTheta);
}

float opticalDepthHeight(float radius, float scaleHeight) {
    float altitude = max(radius - 6378137.0, 0.0);
    return exp(-altitude / scaleHeight);
}

vec3 atmosphereExtinctionAtRadius(float radius) {
    vec3 betaRayleigh = vec3(5.5e-6, 13.0e-6, 28.4e-6) * max(u_atmosphereParams.y, 0.0);
    vec3 betaMie = vec3(21.0e-6) * max(u_atmosphereParams.z, 0.0);
    float rayleighDensity = opticalDepthHeight(radius, 10000.0);  // Rayleigh 标高 10km
    float mieDensity = opticalDepthHeight(radius, 3200.0);        // Mie 标高 3.2km
    return betaRayleigh * rayleighDensity + betaMie * mieDensity;
}

vec3 approximateSunTransmittance(vec3 position, vec3 sunDirection) {
    if (u_atmosphereParams.x < 0.5) {
        return vec3(1.0);
    }

    float radius = length(position);
    float mu = dot(normalize(position), sunDirection);
    float altitudeUv = saturate((radius - 6378137.0) / 90000.0);
    vec2 lutUv = vec2(mu * 0.5 + 0.5, altitudeUv);
    vec3 lutTransmittance = SAMPLE_TEX(u_atmosphereTransmittanceTexture, lutUv).rgb;
    float horizon = smoothstep(-0.08, 0.18, mu);
    float slant = 1.0 / max(mu * 0.5 + 0.5, 0.08);
    vec3 extinction = atmosphereExtinctionAtRadius(radius);
    vec3 analyticTransmittance = exp(-extinction * slant * 18000.0) * (0.22 + 0.78 * horizon);
    return mix(analyticTransmittance, lutTransmittance, 0.78);
}

vec3 approximateSkyIrradiance(vec3 position, vec3 sunDirection) {
    float radius = length(position);
    vec3 normal = normalize(position);
    float sunUp = saturate(dot(normal, sunDirection) * 0.5 + 0.5);
    float altitudeUv = saturate((radius - 6378137.0) / 90000.0);
    vec3 lutIrradiance = SAMPLE_TEX(u_atmosphereIrradianceTexture, vec2(sunUp, altitudeUv)).rgb;
    vec3 betaRayleigh = vec3(5.5e-6, 13.0e-6, 28.4e-6) * max(u_atmosphereParams.y, 0.0);
    vec3 blueScatter = normalize(betaRayleigh + vec3(0.000001));
    vec3 skyTint = mix(vec3(0.75, 0.56, 0.42), blueScatter * 1.85, smoothstep(0.08, 0.75, sunUp));
    float density = opticalDepthHeight(radius, 10000.0);
    float ambient = 0.18 + 0.55 * sunUp;
    vec3 analyticIrradiance = skyTint * ambient * (0.35 + 0.65 * density);
    return mix(analyticIrradiance, lutIrradiance, 0.78);
}

void GetSunAndSkyScalarIrradiance(vec3 position, vec3 sunDirection, out vec3 sunIrradiance, out vec3 skyIrradiance) {
    sunIrradiance = mix(vec3(1.0), approximateSunTransmittance(position, sunDirection), saturate(u_atmosphereParams.x));
    skyIrradiance = mix(vec3(0.42, 0.62, 0.86), approximateSkyIrradiance(position, sunDirection), saturate(u_atmosphereParams.x));
}

void GetSkyRadianceToPoint(vec3 cameraPosition, vec3 pointPosition, vec3 sunDirection, out vec3 transmittance, out vec3 inScattering) {
    vec3 segment = pointPosition - cameraPosition;
    float distanceMeters = length(segment);
    vec3 rayDirection = distanceMeters > 1.0 ? segment / distanceMeters : normalize(pointPosition);

    if (u_atmosphereParams.x < 0.5) {
        transmittance = vec3(1.0);
        inScattering = vec3(0.0);
        return;
    }

    float density = opticalDepthHeight(length(cameraPosition), 10000.0) * 0.35 +
        opticalDepthHeight(length(pointPosition), 10000.0) * 0.65;
    vec3 rayleigh = vec3(5.5e-6, 13.0e-6, 28.4e-6) * max(u_atmosphereParams.y, 0.0);
    vec3 mie = vec3(21.0e-6) * max(u_atmosphereParams.z, 0.0);
    vec3 extinction = (rayleigh * 1.15 + mie * 0.72) * density;
    transmittance = exp(-extinction * distanceMeters * u_atmosphereParams.w);
    float cosTheta = dot(rayDirection, sunDirection);
    vec3 sunTransmittance = approximateSunTransmittance(mix(cameraPosition, pointPosition, 0.55), sunDirection);
    float distanceUv = saturate(distanceMeters / 360000.0);
    vec3 lutScattering = SAMPLE_TEX(u_atmosphereScatteringTexture, vec2(cosTheta * 0.5 + 0.5, distanceUv)).rgb;
    vec3 phaseColor =
        vec3(0.42, 0.58, 0.86) * rayleighPhase(cosTheta) * 18.0 +
        vec3(1.0, 0.78, 0.48) * hgPhase(cosTheta, 0.76) * 6.0;
    inScattering = mix(phaseColor, lutScattering, 0.82) * sunTransmittance * (1.0 - transmittance);
}

vec3 applyAerialPerspective(vec3 color, vec3 rayDirection, vec3 sunDirection, float frontDistance, float alpha) {
    vec3 pointPosition = u_cameraPositionWC + rayDirection * max(frontDistance, 0.0);
    vec3 transmittance;
    vec3 inScattering;
    GetSkyRadianceToPoint(u_cameraPositionWC, pointPosition, sunDirection, transmittance, inScattering);
    return color * transmittance + inScattering * alpha;
}

float marchSunOpticalDepth(vec3 startPosition, vec3 sunDirection) {
    vec2 sunHit = raySphere(startPosition, sunDirection, u_cloudTopRadius);
    float maxDistance = max(sunHit.y, 0.0);
    // 性能优化：减少步数从 6 到 3
    float stepSize = min(maxDistance / 3.0, 5000.0);
    float distanceAlongRay = stepSize * 0.5;
    float opticalDepth = 0.0;

    for (int i = 0; i < 3; i++) {
        if (distanceAlongRay > maxDistance) {
            break;
        }

        vec3 samplePosition = startPosition + sunDirection * distanceAlongRay;
        float radius = length(samplePosition);
        float heightFraction = saturate((radius - u_cloudBottomRadius) / (u_cloudTopRadius - u_cloudBottomRadius));
        if (heightFraction > 0.0 && heightFraction < 1.0) {
            opticalDepth += sampleCloudDensity(samplePosition, heightFraction) * stepSize;
        }

        distanceAlongRay += stepSize;
    }

    return opticalDepth;
}

float structuredShadowJitter(vec3 position, vec3 sunDirection) {
    vec3 p = normalize(position) * 37.0 + sunDirection * 19.0;
    return hash31(p + vec3(fract(u_timeSeconds * 0.031)));
}

float marchBeerShadowOpticalDepth(vec3 startPosition, vec3 sunDirection) {
    vec2 sunHit = raySphere(startPosition, sunDirection, u_cloudTopRadius);
    float maxDistance = max(sunHit.y, 0.0);
    if (maxDistance <= 0.0) {
        return 0.0;
    }

    // 性能优化：减少步数从 10 到 4
    float stepSize = min(maxDistance / 4.0, 12000.0);
    float jitter = structuredShadowJitter(startPosition, sunDirection);
    float distanceAlongRay = stepSize * (0.35 + jitter * 0.55);
    float opticalDepth = 0.0;
    float lastDensity = 0.0;

    for (int i = 0; i < 4; i++) {
        if (distanceAlongRay > maxDistance) {
            break;
        }

        vec3 samplePosition = startPosition + sunDirection * distanceAlongRay;
        float radius = length(samplePosition);
        float heightFraction = saturate((radius - u_cloudBottomRadius) / (u_cloudTopRadius - u_cloudBottomRadius));
        if (heightFraction > 0.0 && heightFraction < 1.0) {
            lastDensity = sampleCloudDensity(samplePosition, heightFraction);
            opticalDepth += lastDensity * stepSize;
        }

        distanceAlongRay += stepSize * 1.18;
    }

    float tailDistance = max(maxDistance - distanceAlongRay, 0.0);
    opticalDepth += lastDensity * tailDistance * 0.28;
    return opticalDepth;
}

float sampleBsmShadow(vec3 position, float cameraDistance, float localShadow) {
    if (u_cloudShadowParams.x < 0.5) {
        return 1.0;
    }

    int cascadeIndex = 0;
    if (cameraDistance > u_cloudShadowSplits.z) {
        cascadeIndex = 3;
    } else if (cameraDistance > u_cloudShadowSplits.y) {
        cascadeIndex = 2;
    } else if (cameraDistance > u_cloudShadowSplits.x) {
        cascadeIndex = 1;
    }

    float cascadeCount = max(u_cloudShadowParams.y, 1.0);
    if (float(cascadeIndex) >= cascadeCount) {
        cascadeIndex = int(cascadeCount - 1.0);
    }

    vec4 shadowClip = u_cloudShadowMatrices[cascadeIndex] * vec4(position, 1.0);
    shadowClip.xyz /= max(abs(shadowClip.w), 0.000001);
    vec2 localUv = shadowClip.xy * 0.5 + 0.5;
    vec4 lightNearWorld = u_cloudShadowInverseMatrices[cascadeIndex] * vec4(shadowClip.xy, -1.0, 1.0);
    vec4 lightFarWorld = u_cloudShadowInverseMatrices[cascadeIndex] * vec4(shadowClip.xy, 1.0, 1.0);
    lightNearWorld.xyz /= max(abs(lightNearWorld.w), 0.000001);
    lightFarWorld.xyz /= max(abs(lightFarWorld.w), 0.000001);
    vec3 lightRayOrigin = lightNearWorld.xyz;
    vec3 lightRayDirection = normalize(lightFarWorld.xyz - lightNearWorld.xyz);
    if (dot(lightRayDirection, normalize(u_sunDirectionWC)) < 0.0) {
        lightRayDirection = -lightRayDirection;
    }
    vec2 lightOuterHit = raySphere(lightRayOrigin, lightRayDirection, u_cloudTopRadius);
    vec2 lightInnerHit = raySphere(lightRayOrigin, lightRayDirection, u_cloudBottomRadius);
    if (lightOuterHit.x > lightOuterHit.y || lightOuterHit.y <= 0.0) {
        return 1.0;
    }
    float lightNearT = max(lightOuterHit.x, 0.0);
    float lightFarT = lightOuterHit.y;
    if (lightInnerHit.x <= lightInnerHit.y && lightInnerHit.y > 0.0) {
        lightFarT = min(lightFarT, max(lightInnerHit.x, 0.0));
    }
    float currentLightT = dot(position - lightRayOrigin, lightRayDirection);
    float currentCloudDepth = saturate((currentLightT - lightNearT) / max(lightFarT - lightNearT, 1.0));

    if (localUv.x <= 0.001 || localUv.x >= 0.999 || localUv.y <= 0.001 || localUv.y >= 0.999) {
        return 1.0;
    }

    float atlasWidth = 1.0 / cascadeCount;
    vec2 atlasUv = vec2((float(cascadeIndex) + localUv.x) * atlasWidth, localUv.y);
    float atlasResolution = max(u_cloudShadowParams.z, 1.0);
    vec2 texel = vec2(atlasWidth / atlasResolution, 1.0 / atlasResolution);
    float accumulatedShadow = 0.0;
    float accumulatedWeight = 0.0;

    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 tapUv = atlasUv + vec2(float(x), float(y)) * texel;
            vec4 packed = SAMPLE_TEX(u_cloudShadowTexture, tapUv);
            float hasCloud = step(0.5, packed.a);
            float behindFront = step(packed.r + 0.006, currentCloudDepth);
            float densityWeight = smoothstep(0.015, 0.42, packed.b);
            float occlusion = saturate(packed.g) * hasCloud * behindFront * densityWeight;
            float weight = x == 0 && y == 0 ? 1.0 : 0.55;
            accumulatedShadow += (1.0 - occlusion) * weight;
            accumulatedWeight += weight;
        }
    }

    float atlasShadow = accumulatedShadow / max(accumulatedWeight, 0.001);
    return mix(1.0, min(localShadow, atlasShadow), u_cloudShadowParams.w);
}

float approximateMultipleScattering(float opticalDepth) {
    float attenuation = 1.0;
    float contribution = 0.0;
    float octaveWeight = 0.5;

    for (int i = 0; i < 3; i++) {
        attenuation *= exp(-opticalDepth * u_density * octaveWeight);
        contribution += (1.0 - attenuation) * octaveWeight;
        octaveWeight *= 0.5;
    }

    return saturate(contribution);
}

vec3 applyCloudHaze(vec3 color, vec3 rayDirection, vec3 sunDirection, float frontDistance, float alpha) {
    float distanceHaze = 1.0 - exp(-max(frontDistance, 0.0) * 0.0000028);
    float sunGlow = pow(saturate(dot(rayDirection, sunDirection) * 0.5 + 0.5), 5.0);
    float verticalFade = saturate(dot(rayDirection, normalize(u_cameraPositionWC)) * 1.8 + 0.9);
    vec3 skyHaze = mix(vec3(0.48, 0.62, 0.78), vec3(1.0, 0.82, 0.55), sunGlow);
    float hazeAmount = distanceHaze * u_hazeStrength * alpha * verticalFade;
    return mix(color, skyHaze, saturate(hazeAmount));
}

void main() {
    vec2 uv = v_textureCoordinates;
    vec4 sceneColor = SAMPLE_TEX(colorTexture, uv);
    vec3 rayDirection = getRayDirection(uv);

    vec2 outerHit = raySphere(u_cameraPositionWC, rayDirection, u_cloudTopRadius);
    if (outerHit.x > outerHit.y || outerHit.y <= 0.0) {
        FRAG_COLOR = sceneColor;
        return;
    }

    vec2 innerHit = raySphere(u_cameraPositionWC, rayDirection, u_cloudBottomRadius);
    float nearDistance = max(outerHit.x, 0.0);
    float farDistance = outerHit.y;
    if (innerHit.x <= innerHit.y && innerHit.y > 0.0) {
        if (length(u_cameraPositionWC) < u_cloudBottomRadius) {
            nearDistance = max(innerHit.y, nearDistance);
        } else {
            farDistance = min(farDistance, max(innerHit.x, 0.0));
        }
    }

    farDistance = min(farDistance, u_maxDistance);
    farDistance = min(farDistance, getSceneDistance(uv));
    if (farDistance <= nearDistance) {
        FRAG_COLOR = sceneColor;
        return;
    }

    float span = farDistance - nearDistance;

    // LOD 优化：根据距离和质量等级动态调整步数
    // 质量等级：0=low, 1=medium, 2=high, 3=ultra
    float distanceFactor = 1.0;
    float lodDistanceScale = 1.0 + (3.0 - u_qualityLevel) * 0.5; // 低质量时更早触发 LOD

    if (nearDistance > 150000.0 * lodDistanceScale) {
        distanceFactor = 0.4;
    } else if (nearDistance > 80000.0 * lodDistanceScale) {
        distanceFactor = 0.6;
    } else if (nearDistance > 40000.0 * lodDistanceScale) {
        distanceFactor = 0.8;
    }

    int stepCount = int(clamp(floor(u_stepCount * distanceFactor + 0.5), 16.0, 128.0));
    float baseStepSize = span / float(stepCount);
    // 自适应步长：最小 500m，最大 5000m，避免过密采样
    float stepSize = clamp(baseStepSize, 500.0, 5000.0);
    float jitter = hash31(vec3(gl_FragCoord.xy, fract(u_timeSeconds))) * stepSize;
    float distanceAlongRay = nearDistance + jitter;
    vec3 cloudLight = vec3(0.0);
    float transmittance = 1.0;
    float alpha = 0.0;
    float weightedDepth = 0.0;
    float depthWeight = 0.0;
    vec3 sunDirection = normalize(u_sunDirectionWC);
    // 性能优化：空白区域跳过计数器
    int emptySteps = 0;
    int maxEmptySteps = 8; // 连续空白 8 次后跳大步
    // LOD：远处云层禁用昂贵的阴影计算
    // 低质量模式下，更早禁用详细阴影
    float shadowDistanceThreshold = mix(100000.0, 50000.0, (3.0 - u_qualityLevel) / 3.0);
    bool enableDetailedShadows = nearDistance < shadowDistanceThreshold;

    for (int i = 0; i < 128; i++) {
        // 更激进的早期终止：
        // 1. 超过步数限制
        // 2. 超过最大距离
        // 3. 透射率过低（几乎不透明）
        // 4. 已经走了 80% 的步数且 alpha 很高（云已经很厚）
        if (i >= stepCount || distanceAlongRay > farDistance || transmittance < 0.03) {
            break;
        }
        if (i > 64 && alpha > 0.95) {
            break; // 已经足够厚，提前终止
        }

        vec3 position = u_cameraPositionWC + rayDirection * distanceAlongRay;
        float radius = length(position);
        float heightFraction = saturate((radius - u_cloudBottomRadius) / (u_cloudTopRadius - u_cloudBottomRadius));
        float density = sampleCloudDensity(position, heightFraction);

        if (density > 0.001) {
            // 有云：重置空白计数器，恢复正常步长
            emptySteps = 0;
            float extinction = density * u_density * stepSize;
            float opticalDepthToSun = marchSunOpticalDepth(position + sunDirection * stepSize * 0.35, sunDirection);
            float localShadow = exp(-opticalDepthToSun * u_density * 1.35);

            // LOD 优化：远处云层跳过昂贵的 Beer 阴影和 BSM 计算
            float beerShadow = 1.0;
            float bsmShadow = 1.0;
            float beerOpticalDepth = 0.0;
            if (enableDetailedShadows) {
                beerOpticalDepth = marchBeerShadowOpticalDepth(position + sunDirection * stepSize * 0.75, sunDirection);
                beerShadow = exp(-beerOpticalDepth * u_density * 0.72);
                bsmShadow = sampleBsmShadow(position, distanceAlongRay, localShadow);
            }

            float sunTransmittance = mix(1.0, localShadow * mix(1.0, beerShadow, u_beerShadowStrength) * bsmShadow, u_shadowStrength);
            float multipleScattering = approximateMultipleScattering(opticalDepthToSun + beerOpticalDepth * 0.45) * u_multiScattering;
            float lightFacing = saturate(dot(normalize(position), sunDirection) * 0.45 + 0.55);
            float cosTheta = dot(rayDirection, sunDirection);
            float phase = hgPhase(cosTheta, 0.68) * 4.6 + hgPhase(cosTheta, -0.22) * 1.25;
            float silverLining = pow(saturate(cosTheta * 0.5 + 0.5), 10.0);
            float powder = 1.0 - exp(-density * 3.8);
            vec3 atmosphereSun;
            vec3 atmosphereSky;
            GetSunAndSkyScalarIrradiance(position, sunDirection, atmosphereSun, atmosphereSky);
            vec3 sunColor = vec3(1.0, 0.88, 0.66) * atmosphereSun *
                (phase * (sunTransmittance + multipleScattering * 0.34) + silverLining * sunTransmittance * 0.42) *
                (0.62 + 0.68 * lightFacing) *
                (1.0 + powder * u_powderStrength * 0.42);
            vec3 skyColor = atmosphereSky * (0.24 + 0.30 * heightFraction) * (0.78 + 0.22 * multipleScattering);
            vec3 groundBounce = vec3(0.44, 0.38, 0.31) * (1.0 - heightFraction) * u_groundBounceStrength * 0.42 * (0.45 + 0.55 * lightFacing);
            vec3 sampleLight = sunColor + skyColor;
            float sampleAlpha = 1.0 - exp(-extinction);

            cloudLight += transmittance * (sampleLight + groundBounce) * sampleAlpha;
            weightedDepth += distanceAlongRay * transmittance * sampleAlpha;
            depthWeight += transmittance * sampleAlpha;
            transmittance *= exp(-extinction);
            alpha = 1.0 - transmittance;
        } else {
            // 空白区域：累加计数器
            emptySteps++;
        }

        // 自适应步长：空白区域跳大步，有云区域保持精细
        if (emptySteps >= maxEmptySteps) {
            // 连续空白，跳大步（3 倍步长）
            stepSize = clamp(stepSize * 3.0, 500.0, 8000.0);
            emptySteps = 0; // 重置避免无限放大
        } else {
            stepSize *= 1.018;
        }
        distanceAlongRay += stepSize;
    }

    if (alpha <= 0.001) {
        FRAG_COLOR = sceneColor;
        return;
    }

    float horizonFade = saturate(dot(rayDirection, normalize(u_cameraPositionWC)) * 2.5 + 0.8);
    alpha *= horizonFade;
    vec3 cloudColor = cloudLight / max(alpha, 0.001);
    vec3 finalColor = mix(sceneColor.rgb, cloudColor, saturate(alpha * 0.82));
    float frontDistance = weightedDepth / max(depthWeight, 0.001);
    finalColor = applyAerialPerspective(finalColor, rayDirection, sunDirection, frontDistance, alpha);
    finalColor = applyCloudHaze(finalColor, rayDirection, sunDirection, frontDistance, alpha * (1.0 - saturate(u_atmosphereParams.x) * 0.55));
    FRAG_COLOR = vec4(finalColor, sceneColor.a);
}
`,$n={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(t){const e=t,a=Pa(),r=Z(null),s=Z(!1),i=Z(!1),p=Z(!1),v=Z(!1),b=Z(!1),T=Z(!1),M=Z({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,bsmShadow:!1,shadowResolution:256,maxDistance:36e4,stepCount:32}),I=Ce(()=>[{id:"fog",label:"Height Fog",type:"toggle",value:s.value},{id:"volumetricClouds",label:"Clouds",type:"toggle",value:i.value},{id:"hbao",label:"HBAO",type:"toggle",value:p.value},{id:"tiltShift",label:"Tilt Shift",type:"toggle",value:v.value},{id:"atmosphere",label:"Atmosphere + Bloom",type:"toggle",value:b.value}]);let A=null,E=null,u=null,_=!1,y=null,L=null,n=!1,f=null,m=null,w=!1,o=null,g=null,d=null,x=null,C=null,k=null,j=null,q=null,Q=null,V=null,ae=null,ue=null,ie=!1,me=null,Me=null,Ae=0,et=0,je=typeof performance<"u"?performance.now():Date.now();const tt={};function W(){return j||(j=Ca(()=>import("./cesiumFxRuntime-DwbESWKF.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(l=>{var N;const c=(N=l==null?void 0:l.getCesiumFxEchartsRuntime)==null?void 0:N.call(l);if(!c)throw new Error("Cinematic FX 图表运行时加载失败");return k=c,c}).catch(l=>{throw j=null,l}),j)}async function U(){return k||W()}const R={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},ee={texture:null,matrices:null,inverseMatrices:null,splits:null,params:null},ge={hdr:null,bloom:null,sky:null};gr(()=>{Tt()}),vr(()=>{ve()}),De(()=>e.controls,l=>{be(l||{})},{deep:!0,immediate:!0});function be(l){Object.prototype.hasOwnProperty.call(l,"fog")&&(s.value=!!l.fog),Object.prototype.hasOwnProperty.call(l,"volumetricClouds")&&(i.value=!!l.volumetricClouds),l.clouds&&typeof l.clouds=="object"&&(M.value=wt(l.clouds),M.value.bsmShadow&&(_=!1)),Object.prototype.hasOwnProperty.call(l,"hbao")&&(p.value=!!l.hbao),Object.prototype.hasOwnProperty.call(l,"tiltShift")&&(v.value=!!l.tiltShift),Object.prototype.hasOwnProperty.call(l,"atmosphere")&&(b.value=!!l.atmosphere)}function qe({controlId:l,value:c}){const N=!!c,H={fog:s,volumetricClouds:i,hbao:p,tiltShift:v,atmosphere:b}[l];H&&(H.value=N)}function wt(l={}){return{quality:["low","medium","high","ultra"].includes(l.quality)?l.quality:"medium",coverage:we(l.coverage,.52,.18,.82),density:we(l.density,9e-5,25e-6,18e-5),shadowStrength:we(l.shadowStrength,.82,0,1),beerShadowStrength:we(l.beerShadowStrength,.64,0,1),multiScattering:we(l.multiScattering,.58,0,1),powderStrength:we(l.powderStrength,.72,0,1.4),hazeStrength:we(l.hazeStrength,.38,0,1),groundBounceStrength:we(l.groundBounceStrength,.26,0,1),bsmShadow:l.bsmShadow===!0,shadowResolution:Math.round(we(l.shadowResolution,256,128,512)/128)*128,maxDistance:we(l.maxDistance,36e4,12e4,9e5),stepCount:Math.round(we(l.stepCount,48,16,128))}}function Tt(){let l=0;q=window.setInterval(async()=>{var z,H;l+=1;const c=(z=e.getViewer)==null?void 0:z.call(e),N=((H=e.getCesium)==null?void 0:H.call(e))||window.Cesium;if(c&&N){clearInterval(q),q=null;try{at(c),Xe(c),Ve(c,N),ne(c,N),a.success("高级视觉效果已启用。")}catch(te){a.error("高级视觉效果初始化失败",te),a.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}l>=150&&(clearInterval(q),q=null,a.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function at(l){var N,z,H,te,Y,Te;const c=l==null?void 0:l.scene;if(c){if(typeof c.highDynamicRange=="boolean"&&(ge.hdr=c.highDynamicRange),(N=c.postProcessStages)!=null&&N.bloom){const le=c.postProcessStages.bloom;ge.bloom={enabled:!!le.enabled,contrast:(z=le.uniforms)==null?void 0:z.contrast,brightness:(H=le.uniforms)==null?void 0:H.brightness,delta:(te=le.uniforms)==null?void 0:te.delta,sigma:(Y=le.uniforms)==null?void 0:Y.sigma,stepSize:(Te=le.uniforms)==null?void 0:Te.stepSize}}c.skyAtmosphere&&(ge.sky={hueShift:c.skyAtmosphere.hueShift,saturationShift:c.skyAtmosphere.saturationShift,brightnessShift:c.skyAtmosphere.brightnessShift})}}function Ve(l,c){var z;!((z=l==null?void 0:l.scene)!=null&&z.postProcessStages)||!(c!=null&&c.PostProcessStage)||(Ye(l,c),Ct(l,c),O(l,c),X(l,c),b.value?yt(l,c,1200):rt(l))}function Xe(l){var N;const c=l==null?void 0:l.scene;(N=c==null?void 0:c.renderError)!=null&&N.addEventListener&&(c.rethrowRenderErrors=!1,ue=c.renderError.addEventListener((z,H)=>{a.error("Cesium 渲染异常，已触发降级保护",H),pt(),ie||(ie=!0,a.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function pt(){var l;s.value=!1,i.value=!1,v.value=!1,p.value=!1,b.value=!1,A&&(A.enabled=!1),E&&(E.enabled=!1),u&&(u.show=!1,(l=u.setParams)==null||l.call(u,{enabled:!1})),ee.params&&(ee.params.x=0,ee.params.w=0),f&&(f.enabled=!1),m&&(m.enabled=!1)}function Ye(l,c){A||(A=new c.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new c.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),l.scene.postProcessStages.add(A),A.enabled=s.value)}function Ct(l,c){var xt,_t;if(E||!(c!=null&&c.PostProcessStage))return;if(Ne(l,c),!o){o=yn({Cesium:c,viewer:l});const xe=l.scene.canvas;o.initialize(xe.clientWidth,xe.clientHeight)}const N=Number((_t=(xt=c==null?void 0:c.Ellipsoid)==null?void 0:xt.WGS84)==null?void 0:_t.maximumRadius)||6378137,z=new c.Cartesian3,H=new c.Cartesian3,te=new c.Cartesian3(.35,-.25,.9),Y=new c.Matrix4,Te=Array.from({length:4},()=>new c.Matrix4),le=Array.from({length:4},()=>new c.Matrix4),Se=new c.Cartesian4(0,0,0,0),He=new c.Cartesian4(0,1,256,0),ke=new c.Cartesian4(1,1,1,.85);if(c.Cartesian3.normalize(te,te),ee.texture=Ee(l,c),ee.matrices=Te,ee.inverseMatrices=le,ee.splits=Se,ee.params=He,E=new c.PostProcessStage({name:"cesium_ecef_volumetric_clouds_stage",fragmentShader:Gn,uniforms:{u_cloudShadowTexture:()=>ee.texture,u_atmosphereTransmittanceTexture:()=>ct(l,c),u_atmosphereIrradianceTexture:()=>vt(l,c),u_atmosphereScatteringTexture:()=>S(l,c),u_cameraPositionWC:z,u_cameraDirectionWC:H,u_inverseViewProjection:Y,u_sunDirectionWC:te,u_cloudShadowMatrices:()=>ee.matrices,u_cloudShadowInverseMatrices:()=>ee.inverseMatrices,u_cloudShadowSplits:()=>ee.splits,u_cloudShadowParams:()=>ee.params,u_cloudBottomRadius:N+1500,u_cloudTopRadius:N+8500,u_maxDistance:42e4,u_coverage:.52,u_density:85e-6,u_shadowStrength:.82,u_beerShadowStrength:.64,u_multiScattering:.58,u_powderStrength:.72,u_hazeStrength:.38,u_groundBounceStrength:.26,u_stepCount:48,u_timeSeconds:0,u_atmosphereParams:ke,u_qualityLevel:1}}),l.scene.postProcessStages.add(E),E.enabled=i.value,o){const xe=o.getResolveShader(),Mt=o.getJitterUniforms();g=new c.PostProcessStage({name:"cesium_cloud_taa_resolve",fragmentShader:xe,uniforms:{colorTexture:Dt(E,l.scene.context),depthTexture:gt(l),historyTexture:()=>{var Re,Be;return lt((Be=(Re=o==null?void 0:o.framebuffers)==null?void 0:Re.value)==null?void 0:Be.history)},resolution:(()=>{const Re=new c.Cartesian2;return()=>(Re.x=l.scene.canvas.clientWidth,Re.y=l.scene.canvas.clientHeight,Re)})(),jitterOffset:()=>{var Re;return((Re=o==null?void 0:o.getJitterUniforms())==null?void 0:Re.jitterOffset)||new c.Cartesian2(0,0)},historyBlendFactor:Mt.historyBlendFactor,frameIndex:()=>{var Re,Be;return((Be=(Re=o==null?void 0:o.temporalState)==null?void 0:Re.value)==null?void 0:Be.frameIndex)||0}}}),l.scene.postProcessStages.add(g),g.enabled=!1}}function Dt(l,c){return l?l.outputTexture?l.outputTexture:l._colorTexture||l._texture||(c==null?void 0:c.defaultTexture)||null:null}function gt(l){var N,z;const c=(z=(N=l==null?void 0:l.scene)==null?void 0:N._view)==null?void 0:z.sceneFramebuffer;return c!=null&&c.depthStencilTexture?c.depthStencilTexture:null}function lt(l){var c,N;return l?(c=l.colorTextures)!=null&&c.length?l.colorTextures[0]:((N=l._colorTextures)==null?void 0:N[0])||null:null}function Ee(l,c){var H;if(L)return L;const N=(H=l==null?void 0:l.scene)==null?void 0:H.context;if(!N||!(c!=null&&c.Texture))return null;const z=N.defaultTexture||N.defaultTexture2D;return z?(L=z,n=!1,L):(L=new c.Texture({context:N,width:1,height:1,pixelFormat:c.PixelFormat.RGBA,pixelDatatype:c.PixelDatatype.UNSIGNED_BYTE,source:{width:1,height:1,arrayBufferView:new Uint8Array([0,0,0,0])}}),n=!0,L)}function Ne(l,c){var N;if(!(y||!((N=l==null?void 0:l.scene)!=null&&N.context)||!(c!=null&&c.Texture)))try{y=new xn(l,{cesium:c})}catch{y=null}}function ct(l,c){return Ne(l,c),(y==null?void 0:y.transmittanceTexture)||Ee(l,c)}function vt(l,c){return Ne(l,c),(y==null?void 0:y.irradianceTexture)||Ee(l,c)}function S(l,c){return Ne(l,c),(y==null?void 0:y.scatteringTexture)||Ee(l,c)}function P(l,c){var H;const N=M.value;if(!(i.value&&N.bsmShadow&&!_)){K(l);return}if(!(u||!((H=l==null?void 0:l.scene)!=null&&H.primitives)||!c))try{u=new kn(l,{cesium:c,enabled:!0,shadowResolution:N.shadowResolution,maxDistance:N.maxDistance}),l.scene.primitives.add(u),G(l,c)}catch{_=!0,u=null}}function G(l,c){var H;if(x||!((H=l==null?void 0:l.scene)!=null&&H.context)||!(c!=null&&c.PostProcessStage))return;const N=l.scene.context,z=M.value.shadowResolution||256;d=new c.Texture({context:N,width:z,height:z,pixelFormat:c.PixelFormat.RGBA,pixelDatatype:c.PixelDatatype.UNSIGNED_BYTE,sampler:new c.Sampler({minificationFilter:c.TextureMinificationFilter.LINEAR,magnificationFilter:c.TextureMagnificationFilter.LINEAR})}),x=new c.PostProcessStage({name:"cesium_bsm_shadow_resolve",fragmentShader:On,uniforms:{shadowTexture:()=>{var te;return((te=u==null?void 0:u.resources)==null?void 0:te.texture)||Ee(l,c)},historyTexture:()=>d,resolution:new c.Cartesian2(z,z),historyBlendFactor:Nn.HISTORY_BLEND_FACTOR,frameIndex:0}}),l.scene.postProcessStages.add(x),x.enabled=!1}function K(l){var N,z,H,te;if(!u)return;const c=((N=e.getCesium)==null?void 0:N.call(e))||window.Cesium;if(ee.params&&(ee.params.x=0,ee.params.w=0),ee.texture=Ee(l,c),(z=l==null?void 0:l.scene)!=null&&z.primitives)try{l.scene.primitives.remove(u)}catch{(H=u.destroy)==null||H.call(u)}else(te=u.destroy)==null||te.call(u);u=null}function O(l,c){var z,H;const N=(z=l==null?void 0:l.scene)==null?void 0:z.postProcessStages;N&&(N.ambientOcclusion?(m=N.ambientOcclusion,w=!1):(H=c==null?void 0:c.PostProcessStageLibrary)!=null&&H.createAmbientOcclusionStage&&(m=c.PostProcessStageLibrary.createAmbientOcclusionStage(),N.add(m),w=!0),m&&(m.enabled=p.value,m.uniforms&&("intensity"in m.uniforms&&(m.uniforms.intensity=4.2),"bias"in m.uniforms&&(m.uniforms.bias=.08),"lengthCap"in m.uniforms&&(m.uniforms.lengthCap=.35),"stepSize"in m.uniforms&&(m.uniforms.stepSize=1.8),"frustumLength"in m.uniforms&&(m.uniforms.frustumLength=1200))))}function X(l,c){f||(f=new c.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),l.scene.postProcessStages.add(f),f.enabled=!1)}function ne(l,c){const N=l==null?void 0:l.scene;N&&(ae=N.preRender.addEventListener(()=>{var Y,Te;const z=ye(l),H=Number(((Y=l==null?void 0:l.camera)==null?void 0:Y.pitch)??-1.2);Ae+=1;const te=typeof performance<"u"?performance.now():Date.now();if(te-je>=1e3&&(et=Math.round(Ae*1e3/(te-je)),Ae=0,je=te),A&&(A.enabled=s.value,A.uniforms.cameraHeightFactor=Le(z,150,12e3),A.uniforms.fogDensity=55e-5+(1-A.uniforms.cameraHeightFactor)*.00125),E&&(E.enabled=i.value,P(l,c),u&&(u.show=i.value&&M.value.bsmShadow),E.enabled&&se(l,c,z)),o&&i.value){const le=(Te=l.scene.context)==null?void 0:Te.uniformState,Se=(le==null?void 0:le.viewProjection)||c.Matrix4.multiply(l.scene.camera.viewMatrix,l.scene.camera.frustum.projectionMatrix,new c.Matrix4);o.update(Ae,Se)}if(g){const le=M.value.quality||"medium",Se=$e[le],He=i.value&&!!(Se!=null&&Se.temporalUpsampling);g.enabled=He,He&&(o==null||o.swapBuffers())}if(m&&(m.enabled=p.value),f){const le=H>-.62,Se=le?Ie((H+.62)/.5):0;f.enabled=v.value&&le,f.uniforms.blurStrength=Se}b.value?yt(l,c,z):rt(l)}))}function se(l,c,N){var Be,Oa,Na;const z=E,H=l==null?void 0:l.scene,te=l==null?void 0:l.camera;if(!z||!H||!te||!c)return;const Y=z.uniforms;c.Cartesian3.clone(te.positionWC,Y.u_cameraPositionWC),c.Cartesian3.clone(te.directionWC,Y.u_cameraDirectionWC);const Te=(Be=H.context)==null?void 0:Be.uniformState;Te!=null&&Te.inverseViewProjection?c.Matrix4.clone(Te.inverseViewProjection,Y.u_inverseViewProjection):te.inverseViewProjectionMatrix&&c.Matrix4.clone(te.inverseViewProjectionMatrix,Y.u_inverseViewProjection);const le=Pe(l,c);c.Cartesian3.clone(le,Y.u_sunDirectionWC);const Se=Le(N,1e4,18e4),He=c.Cartesian3.normalize(te.positionWC,tt),ke=c.Cartesian3.dot(He,le),xt=1-Ie((ke+.08)/.55),_t=b.value?1:.62,xe=M.value,Mt=Number((Na=(Oa=c==null?void 0:c.Ellipsoid)==null?void 0:Oa.WGS84)==null?void 0:Na.maximumRadius)||6378137;Y.u_coverage=xe.coverage,Y.u_density=xe.density*(1-Se*.22),Y.u_maxDistance=xe.maxDistance,Y.u_shadowStrength=xe.shadowStrength*(1-Se*.12),Y.u_beerShadowStrength=xe.beerShadowStrength*(1-Se*.18),Y.u_multiScattering=xe.multiScattering,Y.u_powderStrength=xe.powderStrength,Y.u_hazeStrength=xe.hazeStrength*(1-Se*.35),Y.u_groundBounceStrength=xe.groundBounceStrength,Y.u_stepCount=xe.stepCount,Y.u_timeSeconds=Ke(l,c),Y.u_atmosphereParams&&(Y.u_atmosphereParams.x=_t,Y.u_atmosphereParams.y=.92+xt*.28,Y.u_atmosphereParams.z=.82+xt*.42,Y.u_atmosphereParams.w=(.58+_t*.42)*(1-Se*.28));const Re=xe.quality==="ultra"?3:xe.quality==="high"?2:xe.quality==="medium"?1:0;Y.u_qualityLevel=Re,u==null||u.setParams({enabled:i.value&&xe.bsmShadow&&!_,coverage:Y.u_coverage,density:Y.u_density,bottomRadius:Mt+1500,topRadius:Mt+8500,maxDistance:Y.u_maxDistance,shadowResolution:xe.shadowResolution,timeSeconds:Y.u_timeSeconds}),ze(l,c,xe)}function ze(l,c,N){var xt,_t,xe,Mt,Re;const z=ee.params,H=ee.splits,te=ee.matrices,Y=ee.inverseMatrices;if(!z||!H||!te||!Y)return;const Te=Ee(l,c),le=u==null?void 0:u.resources,Se=(le==null?void 0:le.texture)||null,He=!!(i.value&&N.bsmShadow&&!_&&Se&&((xt=le==null?void 0:le.status)!=null&&xt.ready));ee.texture=He?Se:Te,z.x=He?1:0,z.y=He?Math.max(((_t=le.options)==null?void 0:_t.cascadeCount)||1,1):1,z.z=He?Math.max(((xe=le.options)==null?void 0:xe.resolution)||1,1):1,z.w=He?N.beerShadowStrength:0;for(let Be=0;Be<4;Be+=1)c.Matrix4.clone(((Mt=le==null?void 0:le.cascadeMatrices)==null?void 0:Mt[Be])||c.Matrix4.IDENTITY,te[Be]),c.Matrix4.clone(((Re=le==null?void 0:le.inverseCascadeMatrices)==null?void 0:Re[Be])||c.Matrix4.IDENTITY,Y[Be]);const ke=le==null?void 0:le.cascadeSplits;H.x=Number((ke==null?void 0:ke[0])||0),H.y=Number((ke==null?void 0:ke[1])||H.x),H.z=Number((ke==null?void 0:ke[2])||H.y),H.w=Number((ke==null?void 0:ke[3])||H.z),x&&(x.enabled=He)}function Pe(l,c){var H,te,Y;const N=(Y=(te=(H=l==null?void 0:l.scene)==null?void 0:H.context)==null?void 0:te.uniformState)==null?void 0:Y.sunDirectionWC;if(N)return N;const z=new c.Cartesian3(.35,-.25,.9);return c.Cartesian3.normalize(z,z),z}function Ke(l,c){var N,z,H;try{const te=(N=l==null?void 0:l.clock)==null?void 0:N.currentTime;if(te&&((z=c==null?void 0:c.JulianDate)!=null&&z.secondsDifference)&&((H=c==null?void 0:c.JulianDate)!=null&&H.fromIso8601))return Me||(Me=c.JulianDate.fromIso8601("2026-01-01T00:00:00Z")),c.JulianDate.secondsDifference(te,Me)}catch{}return(typeof performance<"u"?performance.now():Date.now())*.001}function yt(l,c,N){var Te;const z=l==null?void 0:l.scene;if(!z)return;me||(me=un(l)),cn(l,c),typeof z.highDynamicRange=="boolean"&&(z.highDynamicRange=!0);const H=(Te=z.postProcessStages)==null?void 0:Te.bloom;H&&(H.enabled=!0,H.uniforms&&("contrast"in H.uniforms&&(H.uniforms.contrast=149),"brightness"in H.uniforms&&(H.uniforms.brightness=-.12),"delta"in H.uniforms&&(H.uniforms.delta=1),"sigma"in H.uniforms&&(H.uniforms.sigma=3.25),"stepSize"in H.uniforms&&(H.uniforms.stepSize=5)));const te=z.skyAtmosphere;if(!te)return;const Y=Le(N,500,12e4);te.hueShift=-.035+Y*.035,te.saturationShift=-.14+Y*.09,te.brightnessShift=.03+(1-Y)*.08}function rt(l){var H,te;const c=l==null?void 0:l.scene;if(!c)return;const N=((H=e.getCesium)==null?void 0:H.call(e))||window.Cesium;if(me){dn(l,N,me),me=null;return}typeof c.highDynamicRange=="boolean"&&ge.hdr!==null&&(c.highDynamicRange=ge.hdr);const z=(te=c.postProcessStages)==null?void 0:te.bloom;z&&ge.bloom&&(z.enabled=ge.bloom.enabled,z.uniforms&&("contrast"in z.uniforms&&ge.bloom.contrast!==void 0&&(z.uniforms.contrast=ge.bloom.contrast),"brightness"in z.uniforms&&ge.bloom.brightness!==void 0&&(z.uniforms.brightness=ge.bloom.brightness),"delta"in z.uniforms&&ge.bloom.delta!==void 0&&(z.uniforms.delta=ge.bloom.delta),"sigma"in z.uniforms&&ge.bloom.sigma!==void 0&&(z.uniforms.sigma=ge.bloom.sigma),"stepSize"in z.uniforms&&ge.bloom.stepSize!==void 0&&(z.uniforms.stepSize=ge.bloom.stepSize))),c.skyAtmosphere&&ge.sky&&(c.skyAtmosphere.hueShift=ge.sky.hueShift,c.skyAtmosphere.saturationShift=ge.sky.saturationShift,c.skyAtmosphere.brightnessShift=ge.sky.brightnessShift)}function Ue(){Q&&(clearInterval(Q),Q=null)}async function h(){var z,H;const l=!T.value;if(T.value=l,!l){Ue();return}const c=(z=e.getViewer)==null?void 0:z.call(e),N=((H=e.getCesium)==null?void 0:H.call(e))||window.Cesium;if(!c||!N){T.value=!1,a.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await D(c,N),$(c,N),B(c,N)}catch(te){T.value=!1,a.error("图表模块加载失败",te)}}async function D(l,c){await U(),await pr(),r.value&&(C||(C=k.init(r.value),oe()),V||(V=()=>{C==null||C.resize()},window.addEventListener("resize",V)),C.resize(),B(l,c))}function $(l,c){Q||(Q=window.setInterval(()=>{!C||!T.value||B(l,c)},1200))}function B(l,c){var Y;const N=new Date,z=`${ut(N.getHours())}:${ut(N.getMinutes())}:${ut(N.getSeconds())}`,H=Number((ye(l)/1e3).toFixed(2)),te=Number(c.Math.toDegrees(((Y=l==null?void 0:l.camera)==null?void 0:Y.pitch)??0).toFixed(1));nt(R.labels,z,20),nt(R.cameraHeightKm,H,20),nt(R.pitchDeg,te,20),nt(R.fps,et,20),C.setOption({xAxis:{data:R.labels},series:[{data:R.cameraHeightKm},{data:R.pitchDeg},{data:R.fps}]})}function oe(){C&&C.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function ve(){var N,z,H,te,Y,Te,le,Se;q&&(clearInterval(q),q=null),Ue();const l=(N=e.getViewer)==null?void 0:N.call(e),c=(z=l==null?void 0:l.scene)==null?void 0:z.postProcessStages;ae&&(ae(),ae=null),ue&&(ue(),ue=null),A&&c&&c.remove(A),A=null,E&&c&&c.remove(E),E=null,u&&((H=l==null?void 0:l.scene)!=null&&H.primitives)?l.scene.primitives.remove(u):u&&((te=u.destroy)==null||te.call(u)),u=null,n&&L&&((Y=L.destroy)==null||Y.call(L)),L=null,n=!1,ee.texture=null,ee.matrices=null,ee.inverseMatrices=null,(Te=y==null?void 0:y.destroy)==null||Te.call(y),y=null,x&&c&&c.remove(x),x=null,(le=d==null?void 0:d.destroy)==null||le.call(d),d=null,g&&c&&c.remove(g),g=null,(Se=o==null?void 0:o.destroy)==null||Se.call(o),o=null,f&&c&&c.remove(f),f=null,m&&(w&&c&&c.remove(m),m=null),w=!1,l&&rt(l),V&&(window.removeEventListener("resize",V),V=null),C&&(C.dispose(),C=null),k=null,ie=!1}function ye(l){var H,te,Y;const c=(te=(H=l==null?void 0:l.scene)==null?void 0:H.globe)==null?void 0:te.ellipsoid,N=(Y=l==null?void 0:l.camera)==null?void 0:Y.positionWC;if(!c||!N)return 0;const z=c.cartesianToCartographic(N);return Math.max(0,Number((z==null?void 0:z.height)??0))}function Le(l,c,N){return!Number.isFinite(l)||N<=c?0:Ie((l-c)/(N-c))}function Ie(l){return Math.min(1,Math.max(0,Number(l)||0))}function we(l,c,N,z){const H=Number(l);return Number.isFinite(H)?Math.min(z,Math.max(N,H)):c}function nt(l,c,N){l.push(c),l.length>N&&l.shift()}function ut(l){return String(l).padStart(2,"0")}return(l,c)=>t.headless?pe("",!0):(J(),re("div",Bn,[F("div",Un,[F("div",Hn,[c[0]||(c[0]=F("span",{class:"panel-title"},"Cinematic FX",-1)),F("button",{class:"panel-btn",onClick:h},he(T.value?"隐藏图表":"显示图表"),1)]),F("div",Wn,[_e(Ea,{title:"Effect Parameters",controls:I.value,onChange:qe},null,8,["controls"])]),st(F("div",{ref_key:"chartRef",ref:r,class:"fx-chart"},null,512),[[It,T.value]])])]))}},jn=zt($n,[["__scopeId","data-v-508054ce"]]),qn={key:0,class:"launcher-count"},Vn={class:"panel-header"},Xn={class:"panel-title-block"},Yn={class:"panel-mark"},Kn={class:"panel-copy"},Jn={class:"panel-subtitle"},Zn={class:"panel-actions"},Qn=["title"],ei={class:"panel-tabs","aria-label":"3D 工具分类"},ti=["aria-pressed","onClick"],ai={class:"panel-scroll"},ri={class:"panel-page"},ni={class:"overview-grid"},ii={class:"overview-tile"},oi={class:"overview-tile"},si={class:"overview-tile"},li={key:0,class:"quick-actions"},ci=["disabled","onClick"],ui={key:1,class:"empty-state"},di={class:"panel-page"},hi=["aria-expanded"],fi={class:"section-main"},mi={class:"section-meta"},pi={key:0,class:"section-body"},gi={class:"option-grid"},vi=["disabled","aria-pressed","title","onClick"],yi={class:"custom-basemap-input-row"},xi=["disabled"],_i={key:0,class:"custom-basemap-current"},bi=["aria-expanded"],Si={class:"section-main"},wi={class:"section-meta"},Ti={key:0,class:"section-body"},Ci={class:"option-grid"},Di=["aria-pressed","title","onClick"],Mi=["aria-expanded"],Li={class:"section-main"},Pi={class:"section-meta"},Fi={key:0,class:"section-body"},Ai={class:"overlay-list"},Ei=["disabled","aria-pressed","title","onClick"],Ri={class:"overlay-copy"},Ii={class:"overlay-title"},ki={key:0,class:"overlay-desc"},Oi={key:3,class:"empty-state"},Ni={class:"panel-page"},zi={class:"module-list"},Bi=["aria-expanded","onClick"],Ui={class:"module-icon"},Hi={class:"module-copy"},Wi={class:"module-title"},Gi={key:0,class:"module-desc"},$i={class:"module-head-side"},ji={key:0,class:"module-body"},qi={key:0,class:"module-actions"},Vi=["disabled","onClick"],Xi={key:0,class:"empty-state"},Yi={class:"panel-page"},Ki={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},Ji={class:"data-upload-hint"},Zi={key:0,class:"data-source-list"},Qi={class:"data-source-head"},eo={class:"data-source-count"},to=["title","aria-label","onClick"],ao={class:"data-source-icon"},ro={class:"data-source-copy"},no={class:"data-source-name"},io={class:"data-source-type"},oo={key:1,class:"empty-state"},Xa=3,so=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",lo={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(t,{emit:e}){const a=t,r=Z(Array.isArray(a.loadedDataSources)?a.loadedDataSources:[]);De(()=>a.loadedDataSources,W=>{const U=Array.isArray(W)?W:[];U!==r.value&&(r.value=U)},{immediate:!0});const s=e,i=q(),p=i.uiStateVersion===Xa,v=Z(i.activeTab||"scene"),b=Z(!!i.compactMode),T=Z(new Set(p?i.expandedLayerSectionIds||[]:[])),M=Z(new Set(p?i.expandedModuleIds||[]:[])),I=Z(a.customBasemapUrl||""),A=Z(null),E=Ce(()=>a.embedded||a.open),u=Ce(()=>a.modules.find(W=>W.id==="scene")||null),_=Ce(()=>{var W;return((W=u.value)==null?void 0:W.actions)||[]}),y=Ce(()=>a.modules.filter(W=>W.id!=="scene")),L=Ce(()=>y.value.filter(W=>W.statusTone==="success"||W.statusTone==="warning").length),n=Ce(()=>a.overlayOptions.filter(W=>!!W.active).length),f=[{id:"scene",label:"场景",icon:pa},{id:"layers",label:"图层",icon:ga},{id:"data",label:"数据",icon:Da},{id:"modules",label:"模块",icon:ma}],m=Ce(()=>{var W;return((W=a.basemapOptions.find(U=>U.value===a.activeBasemap))==null?void 0:W.label)||"未选择"}),w=Ce(()=>{var W;return((W=a.terrainOptions.find(U=>U.value===a.activeTerrain))==null?void 0:W.label)||"未选择"});De(()=>a.modules.map(W=>W.id),W=>{W.includes(v.value)||v.value==="scene"||v.value==="layers"||v.value==="modules"||(v.value="scene")},{immediate:!0}),De([v,b,T,M],Q,{deep:!0}),De(()=>a.customBasemapUrl,W=>{W!==I.value&&(I.value=W||"")});function o(W){s("update:open",W)}function g(W){return T.value.has(W)}function d(W){const U=new Set(T.value);U.has(W)?U.delete(W):U.add(W),T.value=U}function x(W){return M.value.has(W)}function C(W){const U=new Set(M.value);U.has(W)?U.delete(W):U.add(W),M.value=U}function k(W){W!=null&&W.disabled||s("update:activeBasemap",W.value)}function j(){s("custom-basemap-submit",{url:I.value})}function q(){if(typeof window>"u")return{};try{const W=window.localStorage.getItem(a.storageKey);return W?JSON.parse(W):{}}catch{return{}}}function Q(){if(!(typeof window>"u"))try{window.localStorage.setItem(a.storageKey,JSON.stringify({uiStateVersion:Xa,activeTab:v.value,compactMode:b.value,expandedLayerSectionIds:[...T.value],expandedModuleIds:[...M.value]}))}catch{}}function V(W){return{scene:pa,effects:Wr,clouds:Hr,wind:Ur,fluid:Br}[W]||ma}function ae(W,U){var ee;return((ee={scene:{home:Nr,everest:Wa,tileset:ra},wind:{load:Or,clear:va},fluid:{pick:Ga,clear:va}}[W])==null?void 0:ee[U])||zr}function ue(W,U){s("module-action",{moduleId:W,actionId:U})}function ie(W,U,R){const ee=U.type==="range"?Number(R):R;s("control-change",{moduleId:W,controlId:U.id,value:ee})}function me(W){W.disabled||s("overlay-toggle",{overlayId:W.value,value:!W.active})}function Me(W){return{geojson:Yt,json:Yt,kml:$a,kmz:$a,shp:ga,gltf:ra,czml:Yt,"3dtiles":ra}[W]||Yt}function Ae(W){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[W]||W.toUpperCase()}function et(W){var R;const U=(R=W.target)==null?void 0:R.files;!U||U.length===0||(s("data-import",{files:Array.from(U)}),A.value&&(A.value.value=""))}function je(W){s("data-remove",{id:W})}function tt(){s("data-clear-all")}return(W,U)=>(J(),re("aside",{class:Oe(["cesium-tool-shell",{"is-open":E.value,"is-embedded":t.embedded}])},[!t.embedded&&!E.value?(J(),re("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:U[0]||(U[0]=R=>o(!0))},[_e(ce(ma),{size:18,"stroke-width":"2"}),U[7]||(U[7]=F("span",null,"高级控制台",-1)),L.value?(J(),re("span",qn,he(L.value),1)):pe("",!0)])):pe("",!0),st(F("section",{class:Oe(["cesium-tool-panel",{compact:b.value}]),"aria-label":"Cesium 高级控制台"},[F("header",Vn,[F("div",Xn,[F("span",Yn,[_e(ce(pa),{size:18,"stroke-width":"2"})]),F("span",Kn,[U[8]||(U[8]=F("span",{class:"panel-title"},"3D 高级控制台",-1)),F("span",Jn,he(m.value)+" / "+he(w.value),1)])]),F("div",Zn,[F("button",{class:"icon-btn",type:"button",title:b.value?"切换为舒展布局":"切换为紧凑布局",onClick:U[1]||(U[1]=R=>b.value=!b.value)},[_e(ce(Ir),{size:16,"stroke-width":"2"})],8,Qn),t.embedded?pe("",!0):(J(),re("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:U[2]||(U[2]=R=>o(!1))},[_e(ce(Ua),{size:17,"stroke-width":"2"})]))])]),F("nav",ei,[(J(),re(mt,null,bt(f,R=>F("button",{key:R.id,class:Oe(["tab-btn",{active:v.value===R.id}]),type:"button","aria-pressed":v.value===R.id,onClick:ee=>v.value=R.id},[(J(),Qe(Ft(R.icon),{size:15,"stroke-width":"2"})),F("span",null,he(R.label),1)],10,ti)),64))]),F("div",ai,[st(F("section",ri,[F("div",ni,[F("div",ii,[U[9]||(U[9]=F("span",{class:"overview-label"},"地图源",-1)),F("strong",null,he(m.value),1)]),F("div",oi,[U[10]||(U[10]=F("span",{class:"overview-label"},"地形",-1)),F("strong",null,he(w.value),1)]),F("div",si,[U[11]||(U[11]=F("span",{class:"overview-label"},"模块",-1)),F("strong",null,he(L.value)+"/"+he(y.value.length),1)])]),_.value.length?(J(),re("div",li,[(J(!0),re(mt,null,bt(_.value,R=>(J(),re("button",{key:R.id,class:Oe(["tool-action",[R.variant||"default",{active:R.active}]]),disabled:R.disabled,type:"button",onClick:ee=>ue(u.value.id,R.id)},[(J(),Qe(Ft(ae(u.value.id,R.id)),{size:15,"stroke-width":"2"})),ta(" "+he(R.label),1)],10,ci))),128))])):(J(),re("div",ui," 暂无场景快捷操作 "))],512),[[It,v.value==="scene"]]),st(F("section",di,[t.basemapOptions.length?(J(),re("div",{key:0,class:Oe(["option-group",{expanded:g("basemap")}])},[F("button",{class:"section-head section-toggle",type:"button","aria-expanded":g("basemap"),onClick:U[3]||(U[3]=R=>d("basemap"))},[F("span",fi,[_e(ce(ga),{size:16,"stroke-width":"2"}),U[12]||(U[12]=F("span",null,"底图源",-1))]),F("span",mi,[F("span",null,he(m.value),1),_e(ce(Xt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,hi),g("basemap")?(J(),re("div",pi,[F("div",gi,[(J(!0),re(mt,null,bt(t.basemapOptions,R=>(J(),re("button",{key:R.value,class:Oe(["option-card",{active:R.value===t.activeBasemap}]),type:"button",disabled:R.disabled,"aria-pressed":R.value===t.activeBasemap,title:R.description||R.label,onClick:ee=>k(R)},[F("span",null,he(R.label),1),R.value===t.activeBasemap?(J(),Qe(ce(Ha),{key:0,size:15,"stroke-width":"2.4"})):pe("",!0)],10,vi))),128))]),F("form",{class:"custom-basemap-editor",onSubmit:Ot(j,["prevent"])},[F("div",yi,[_e(ce(kr),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),st(F("input",{"onUpdate:modelValue":U[4]||(U[4]=R=>I.value=R),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[aa,I.value]]),F("button",{class:"custom-basemap-submit",type:"submit",disabled:!I.value.trim(),title:"加载自定义 XYZ"},[_e(ce(_r),{size:14,"stroke-width":"2"}),U[13]||(U[13]=F("span",null,"加载",-1))],8,xi)]),t.customBasemapUrl?(J(),re("div",_i,he(t.customBasemapUrl),1)):pe("",!0)],32)])):pe("",!0)],2)):pe("",!0),t.terrainOptions.length?(J(),re("div",{key:1,class:Oe(["option-group",{expanded:g("terrain")}])},[F("button",{class:"section-head section-toggle",type:"button","aria-expanded":g("terrain"),onClick:U[5]||(U[5]=R=>d("terrain"))},[F("span",Si,[_e(ce(Wa),{size:16,"stroke-width":"2"}),U[14]||(U[14]=F("span",null,"地形",-1))]),F("span",wi,[F("span",null,he(w.value),1),_e(ce(Xt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,bi),g("terrain")?(J(),re("div",Ti,[F("div",Ci,[(J(!0),re(mt,null,bt(t.terrainOptions,R=>(J(),re("button",{key:R.value,class:Oe(["option-card",{active:R.value===t.activeTerrain}]),type:"button","aria-pressed":R.value===t.activeTerrain,title:R.description||R.label,onClick:ee=>W.$emit("update:activeTerrain",R.value)},[F("span",null,he(R.label),1),R.value===t.activeTerrain?(J(),Qe(ce(Ha),{key:0,size:15,"stroke-width":"2.4"})):pe("",!0)],10,Di))),128))])])):pe("",!0)],2)):pe("",!0),t.overlayOptions.length?(J(),re("div",{key:2,class:Oe(["option-group",{expanded:g("overlay")}])},[F("button",{class:"section-head section-toggle",type:"button","aria-expanded":g("overlay"),onClick:U[6]||(U[6]=R=>d("overlay"))},[F("span",Li,[_e(ce(Ga),{size:16,"stroke-width":"2"}),U[15]||(U[15]=F("span",null,"叠加层",-1))]),F("span",Pi,[F("span",null,he(n.value)+"/"+he(t.overlayOptions.length),1),_e(ce(Xt),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Mi),g("overlay")?(J(),re("div",Fi,[F("div",Ai,[(J(!0),re(mt,null,bt(t.overlayOptions,R=>(J(),re("button",{key:R.value,class:Oe(["overlay-row",{active:!!R.active}]),type:"button",disabled:R.disabled,"aria-pressed":!!R.active,title:R.description||R.label,onClick:ee=>me(R)},[F("span",Ri,[F("span",Ii,he(R.label),1),R.description?(J(),re("span",ki,he(R.description),1)):pe("",!0)]),F("span",{class:Oe(["toggle-control",{active:!!R.active}]),"aria-hidden":"true"},[...U[16]||(U[16]=[F("span",{class:"toggle-track"},[F("span",{class:"toggle-thumb"})],-1)])],2)],10,Ei))),128))])])):pe("",!0)],2)):pe("",!0),!t.basemapOptions.length&&!t.terrainOptions.length&&!t.overlayOptions.length?(J(),re("div",Oi," 暂无图层配置项 ")):pe("",!0)],512),[[It,v.value==="layers"]]),st(F("section",Ni,[F("div",zi,[(J(!0),re(mt,null,bt(y.value,R=>{var ee,ge;return J(),re("article",{key:R.id,class:Oe(["module-item",{expanded:x(R.id)}])},[F("button",{class:"module-head",type:"button","aria-expanded":x(R.id),onClick:be=>C(R.id)},[F("span",Ui,[(J(),Qe(Ft(V(R.id)),{size:16,"stroke-width":"2"}))]),F("span",Hi,[F("span",Wi,he(R.title),1),R.description?(J(),re("span",Gi,he(R.description),1)):pe("",!0)]),F("span",$i,[R.status?(J(),re("span",{key:0,class:Oe(["module-status",R.statusTone||"neutral"])},he(R.status),3)):pe("",!0),_e(ce(Xt),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,Bi),x(R.id)?(J(),re("div",ji,[(ee=R.actions)!=null&&ee.length?(J(),re("div",qi,[(J(!0),re(mt,null,bt(R.actions,be=>(J(),re("button",{key:be.id,class:Oe(["tool-action",[be.variant||"default",{active:be.active}]]),disabled:be.disabled,type:"button",onClick:qe=>ue(R.id,be.id)},[(J(),Qe(Ft(ae(R.id,be.id)),{size:14,"stroke-width":"2"})),ta(" "+he(be.label),1)],10,Vi))),128))])):pe("",!0),(ge=R.controls)!=null&&ge.length?(J(),re("div",{key:1,class:Oe(["control-list control-list-gui",R.controlLayout?`control-list-${R.controlLayout}`:""])},[_e(Ea,{title:R.title,controls:R.controls,onChange:be=>ie(R.id,be.control,be.value)},null,8,["title","controls","onChange"])],2)):pe("",!0)])):pe("",!0)],2)}),128))]),y.value.length?pe("",!0):(J(),re("div",Xi," 暂无可用功能模块 "))],512),[[It,v.value==="modules"]]),st(F("section",Yi,[F("label",Ki,[F("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:A,class:"data-file-input",type:"file",multiple:"",accept:so,onChange:et},null,544),F("div",Ji,[_e(ce(Da),{size:28,"stroke-width":"1.5"}),U[17]||(U[17]=F("span",null,"选择文件或拖拽到此处",-1)),U[18]||(U[18]=F("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),r.value.length?(J(),re("div",Zi,[F("div",Qi,[F("span",eo," 已加载 "+he(r.value.length)+" 个数据源 ",1),F("button",{class:"tool-action danger",type:"button",onClick:tt},[_e(ce(va),{size:13,"stroke-width":"2"}),U[19]||(U[19]=ta(" 全部清除 ",-1))])]),(J(!0),re(mt,null,bt(r.value,R=>(J(),re("button",{key:R.id,class:"data-source-row",type:"button",title:`点击移除 ${R.name} (${Ae(R.type)})`,"aria-label":`移除 ${R.name}`,onClick:ee=>je(R.id)},[F("span",ao,[(J(),Qe(Ft(Me(R.type)),{size:15,"stroke-width":"2"}))]),F("span",ro,[F("span",no,he(R.name),1),F("span",io,he(Ae(R.type)),1)]),_e(ce(Ua),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,to))),128))])):(J(),re("div",oo," 暂无已导入的数据 "))],512),[[It,v.value==="data"]])])],2),[[It,t.embedded||E.value]])],2))}},co=zt(lo,[["__scopeId","data-v-cb0956f8"]]),uo={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},ho={class:"dialog-header"},fo={class:"dialog-title-row"},mo={class:"dialog-file-name"},po={class:"coord-fields"},go={class:"coord-field"},vo={key:0,class:"coord-error"},yo={class:"coord-field"},xo={key:0,class:"coord-error"},_o={class:"coord-field"},bo={key:0,class:"coord-error"},So={class:"dialog-actions"},wo=["disabled"],To={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(t,{emit:e}){const a=t,r=e,s=Z(""),i=Z(""),p=Z("0"),v=Z(null),b=Z(""),T=Z(""),M=Z(""),I=Ce(()=>s.value!==""&&i.value!==""&&!b.value&&!T.value&&!M.value);function A(){const u=parseFloat(s.value),_=parseFloat(i.value),y=parseFloat(p.value);b.value="",T.value="",M.value="",s.value!==""&&(isNaN(u)||u<-180||u>180)&&(b.value="经度范围: -180 ~ 180"),i.value!==""&&(isNaN(_)||_<-90||_>90)&&(T.value="纬度范围: -90 ~ 90"),p.value!==""&&(isNaN(y)||y<0)&&(M.value="高度必须 ≥ 0")}function E(){if(!I.value){A();return}const u=parseFloat(s.value),_=parseFloat(i.value),y=parseFloat(p.value)||0;r("confirm",{lng:u,lat:_,height:y})}return De(()=>a.visible,u=>{if(!u){b.value="",T.value="",M.value="";return}s.value="",i.value="",p.value="0",b.value="",T.value="",M.value="",u&&setTimeout(()=>{var _;(_=v.value)==null||_.focus()},60)}),(u,_)=>(J(),Qe(Dr,{to:"body"},[t.visible?(J(),re("div",{key:0,class:"cesium-data-dialog-overlay",onClick:_[4]||(_[4]=Ot(y=>u.$emit("cancel"),["self"]))},[F("div",uo,[F("header",ho,[F("div",fo,[_e(ce(ra),{size:18,"stroke-width":"2"}),_[5]||(_[5]=F("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),F("p",mo,he(t.fileName),1),_[6]||(_[6]=F("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),F("form",{class:"dialog-form",onSubmit:Ot(E,["prevent"])},[F("div",po,[F("label",go,[_[7]||(_[7]=F("span",{class:"coord-label"},"经度 (Longitude)",-1)),st(F("input",{ref_key:"lngInputRef",ref:v,"onUpdate:modelValue":_[0]||(_[0]=y=>s.value=y),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:A},null,544),[[aa,s.value]]),b.value?(J(),re("span",vo,he(b.value),1)):pe("",!0)]),F("label",yo,[_[8]||(_[8]=F("span",{class:"coord-label"},"纬度 (Latitude)",-1)),st(F("input",{"onUpdate:modelValue":_[1]||(_[1]=y=>i.value=y),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:A},null,544),[[aa,i.value]]),T.value?(J(),re("span",xo,he(T.value),1)):pe("",!0)]),F("label",_o,[_[9]||(_[9]=F("span",{class:"coord-label"},"高度 (Height 米)",-1)),st(F("input",{"onUpdate:modelValue":_[2]||(_[2]=y=>p.value=y),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:A},null,544),[[aa,p.value]]),M.value?(J(),re("span",bo,he(M.value),1)):pe("",!0)])]),F("div",So,[F("button",{class:"dialog-btn cancel-btn",type:"button",onClick:_[3]||(_[3]=y=>u.$emit("cancel"))}," 取消 "),F("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!I.value},[_e(ce(_r),{size:14,"stroke-width":"2"}),_[10]||(_[10]=ta(" 确认放置 ",-1))],8,wo)])],32)])])):pe("",!0)]))}},Co=zt(To,[["__scopeId","data-v-81f307a1"]]);function Do(t){if(!t)throw new Error("Cesium runtime is required for FluidRenderer.");function e(L){return(L==null?void 0:L._view)||(L==null?void 0:L.view)}function a(L){const n=e(L);if(!(n!=null&&n.passState))throw new Error("Cesium scene passState is unavailable.");return n.passState}function r(L){const n=e(L);return(n==null?void 0:n.frustumCommandsList)||(n==null?void 0:n._frustumCommandsList)||[]}const s=`
// 基于 mind3d 的 Cesium 流体示例，原始灵感来自 shadertoy：https://www.shadertoy.com/view/7tSSDD
const int textureSize = 1024;
// 渲染相关常量
const vec3 backgroundColor = vec3(0.2);
// 地形相关常量
const float transitionTime = 5.0;
const float transitionPercent = 0.3;
const int octaves = 7;
const float minAnimatedFilmDepth = 0.003;
// 水体模拟参数
// const float attenuation = 0.995;
// const float strenght = 0.25;
// const float minTotalFlow = 0.0001;
// fluidParam：x=衰减系数，y=扩散强度，z=最小总流量，w=初始水位（归一化后的绝对高程）
// customParam：x=雾化距离阈值，y=高光指数，z=高光强度，w=保留参数
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
`,i=`
    // 计算地形并更新水位的第一阶段
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
`,p=`
// 计算流量更新的第一阶段
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
`,v=`
// 水位计算的第二阶段
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
`,b=`
// 计算流量更新的第二阶段
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
`;class M{constructor(n){this.commandType=n.commandType,this.geometry=n.geometry,this.attributeLocations=n.attributeLocations,this.primitiveType=n.primitiveType,this.uniformMap=n.uniformMap,this.vertexShaderSource=n.vertexShaderSource,this.fragmentShaderSource=n.fragmentShaderSource,this.rawRenderState=n.rawRenderState,this.framebuffer=n.framebuffer,this.isPostRender=n.isPostRender,this.outputTexture=n.outputTexture,this.autoClear=t.defaultValue(n.autoClear,!1),this.preExecute=n.preExecute,this.modelMatrix=t.defaultValue(n.modelMatrix,t.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new t.ClearCommand({color:new t.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:t.Pass.OPAQUE}))}createCommand(n){switch(this.commandType){case"Draw":{const f=t.VertexArray.fromGeometry({context:n,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW}),m=t.ShaderProgram.fromCache({context:n,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),w=t.RenderState.fromCache(this.rawRenderState);return new t.DrawCommand({owner:this,vertexArray:f,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:m,framebuffer:this.framebuffer,renderState:w,pass:t.Pass.OPAQUE})}case"Compute":return new t.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(n,f){this.geometry=f;const m=t.VertexArray.fromGeometry({context:n,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=m}update(n){this.show&&(t.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(n.context),this.commandToExecute.isPostRender=this.isPostRender),t.defined(this.preExecute)&&this.preExecute(this),t.defined(this.clearCommand)&&n.commandList.push(this.clearCommand),n.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return t.defined(this.commandToExecute)&&(t.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),t.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),t.destroyObject(this)}}class I{constructor(){}static loadText(n){const f=new XMLHttpRequest;return f.open("GET",n,!1),f.send(),f.responseText}static getFullscreenQuad(){return new t.Geometry({attributes:new t.GeometryAttributes({position:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(n){if(t.defined(n.arrayBufferView)){const m={};m.arrayBufferView=n.arrayBufferView,n.source=m,n.flipY=!1}return new t.Texture(n)}static createDepthFramebuffer(n,f,m){return new t.Framebuffer({context:n,colorTextures:[this.createTexture({context:n,width:f,height:m,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(f*m*4)})],depthRenderbuffer:new t.Renderbuffer({context:n,width:f,height:m,format:t.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(n,f,m,w=!1){const o={context:n,colorTextures:[f],destroyAttachments:w};return m&&(o.depthTexture=m),new t.Framebuffer(o)}static createRawRenderState(n){const w={viewport:n.viewport,depthTest:n.depthTest,depthMask:n.depthMask,blending:n.blending};return t.Appearance.getDefaultRenderState(!0,!1,w)}}const y=class y{constructor(n,f={}){if(!n)throw new Error("Cesium Viewer is required");this.viewer=n,this._initConfiguration(f),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(n){this.config={resolution:new t.Cartesian2(n.width||y.DEFAULTS.width,n.height||y.DEFAULTS.height),dimensions:n.dimensions||y.DEFAULTS.dimensions.clone(),heightRange:{min:n.minHeight??y.DEFAULTS.heightRange[0],max:n.maxHeight??y.DEFAULTS.heightRange[1]},baseHeight:n.baseHeight??y.DEFAULTS.baseHeight,fluidParams:n.fluidParams||y.DEFAULTS.fluidParams.clone(),customParams:n.customParams||y.DEFAULTS.customParams.clone(),waterColor:n.waterColor||y.DEFAULTS.waterColor.clone(),lonLat:n.lonLat||[...y.DEFAULTS.lonLat],timeStep:n.timeStep||y.DEFAULTS.timeStep,heightMapSource:n.heightMapSource||y.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(n){const f=Number(n);!Number.isFinite(f)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,f)),this.resetSimulation())}resetSimulation(){var n,f;this._frameCount=0,(f=(n=this.viewer.scene).requestRender)==null||f.call(n)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const n=()=>I.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:n(),B:n(),C:n(),D:n()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(n){if(!(n!=null&&n.arrayBufferView)||!n.width||!n.height)throw new Error("Invalid height map source.");return I.createTexture({context:this.viewer.scene.context,width:n.width,height:n.height,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:n.arrayBufferView,sampler:new t.Sampler({wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var q,Q;const n=this.viewer.scene.context,f=I.createDepthFramebuffer(n,this.config.resolution.x,this.config.resolution.y),m=this.viewer.scene,w=m.frameState,o=a(this.viewer.scene),g=m.camera,d=w.camera,x=o.framebuffer,C=t.BoundingRectangle.clone(o.viewport,new t.BoundingRectangle);let k=null,j=[];try{o.viewport.x=0,o.viewport.y=0,o.viewport.width=this.config.resolution.x,o.viewport.height=this.config.resolution.y,o.framebuffer=f,m.camera=this.heightMapCamera,w.camera=this.heightMapCamera,w.context.uniformState.updateCamera(this.heightMapCamera),j=this._processHeightMapShaders(),this._renderDepthPrepass(o);const V=I.createTexture({context:n,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT});return k=I.createFramebuffer(n,V),this._copyTexture(f.getColorTexture(0),k),V}finally{this._restoreHeightMapShaders(j),o.framebuffer=x,t.BoundingRectangle.clone(C,o.viewport),m.camera=g,w.camera=d,d&&w.context.uniformState.updateCamera(d),k&&!((q=k.isDestroyed)!=null&&q.call(k))&&k.destroy(),f&&!((Q=f.isDestroyed)!=null&&Q.call(f))&&f.destroy()}}_renderDepthPrepass(n){const f=this.viewer.scene.frameState;f.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(w=>w.execute(this.viewer.scene.context,n))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:t.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const n={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...n,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:i}),this._createComputePass("B",{uniforms:{...n,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:p}),this._createComputePass("C",{uniforms:{...n,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:v}),this._createComputePass("D",{uniforms:{...n,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:b})]}_createComputePass(n,{uniforms:f,shaderSource:m}){return new M({commandType:"Compute",uniformMap:f,fragmentShaderSource:new t.ShaderSource({sources:[s,m]}),geometry:I.getFullscreenQuad(),outputTexture:this.textures[n],preExecute:w=>w.commandToExecute.outputTexture=this.textures[n]})}_createMainRenderPass(){const n=E([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new M({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new t.ShaderSource({sources:[s,T]}),geometry:this._createBoxGeometry(),modelMatrix:n,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var n,f,m,w;return(w=(m=(f=(n=e(this.viewer.scene))==null?void 0:n.globeDepth)==null?void 0:f.colorFramebufferManager)==null?void 0:m._colorTextures)==null?void 0:w[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(n=>this.viewer.scene.primitives.add(n)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(n){const f=this.viewer.camera.getPickRay(n);return this.viewer.scene.globe.pick(f,this.viewer.scene)}_createOrthographicCamera(){const n=new t.Camera(this.viewer.scene);n.frustum=new t.OrthographicOffCenterFrustum;const[f,m]=this.config.lonLat,w=t.Cartesian3.fromDegrees(f,m,this.config.baseHeight),o=t.Transforms.eastNorthUpToFixedFrame(w),g=n.frustum;g.near=.01,g.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),g.left=-this.config.dimensions.x/2,g.right=this.config.dimensions.x/2,g.bottom=-this.config.dimensions.y/2,g.top=this.config.dimensions.y/2;const d=t.Matrix4.getColumn(o,2,new t.Cartesian3);t.Cartesian3.negate(d,d);const x=t.Matrix4.getColumn(o,1,new t.Cartesian3),C=t.Matrix4.getColumn(o,0,new t.Cartesian3),k=t.Cartesian3.multiplyByScalar(d,-g.far,new t.Cartesian3);return n.position=t.Cartesian3.add(w,k,new t.Cartesian3),n.direction=d,n.up=x,n.right=C,n}destroy(){var n,f;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(m=>{m&&this.viewer.scene.primitives.remove(m)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(m=>{var w;m&&!((w=m.isDestroyed)!=null&&w.call(m))&&m.destroy()}),this.textures={},this._heightMap&&!((f=(n=this._heightMap).isDestroyed)!=null&&f.call(n))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(n,f){const m=this.viewer.scene.context,w=a(this.viewer.scene),o=m.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>n},owner:this}),g=w.framebuffer;w.framebuffer=f,o.execute(m,w),w.framebuffer=g}_getDepthRenderCommands(){var m,w;const n=[],f=r(this.viewer.scene);for(let o=0;o<f.length;++o){const g=f[o],d=(m=g==null?void 0:g.commands)==null?void 0:m[2],x=((w=g==null?void 0:g.indices)==null?void 0:w[2])??(d==null?void 0:d.length)??0;d&&x>0&&n.push(...d.slice(0,x))}return n}_processHeightMapShaders(){const n=[],f=t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),m=t.Matrix4.inverse(f,new t.Matrix4),w=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(g=>{var j;if(!((j=g==null?void 0:g.shaderProgram)!=null&&j.fragmentShaderSource)||!g.uniformMap)return;const d=Object.prototype.hasOwnProperty.call(g.uniformMap,"u_inverseEnuMatrix"),x=g.uniformMap.u_inverseEnuMatrix,C=g.shaderProgram,k=new t.Matrix4;g.uniformMap.u_inverseEnuMatrix=()=>{const q=g.modelMatrix||t.Matrix4.IDENTITY;return t.Matrix4.multiply(m,q,k)},g.heightMap_ShaderProgram||(g.heightMap_ShaderProgram=this._getDerivedShaderProgram(w.context,g.shaderProgram,"Height_Map")),g.shaderProgram=g.heightMap_ShaderProgram,n.push({command:g,hadInverseUniform:d,originalInverseUniform:x,originalShaderProgram:C})}),n}_restoreHeightMapShaders(n){n.forEach(f=>{const{command:m,hadInverseUniform:w,originalInverseUniform:o,originalShaderProgram:g}=f;m!=null&&m.uniformMap&&(m.shaderProgram=g,w?m.uniformMap.u_inverseEnuMatrix=o:delete m.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(n,f,m){let w=n.shaderCache.getDerivedShaderProgram(f,m);return t.defined(w)||(w=this._createHeightMapShaderProgram(n,f,m)),w}_createHeightMapShaderProgram(n,f,m){const w=this._modifyFragmentShader(f.fragmentShaderSource);return n.shaderCache.createDerivedShaderProgram(f,m,{vertexShaderSource:f.vertexShaderSource,fragmentShaderSource:w,attributeLocations:f._attributeLocations})}_modifyFragmentShader(n){const f=n.sources.map(m=>t.ShaderSource.replaceMain(m,"czm_heightMap_main"));return f.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new t.ShaderSource({sources:f,defines:n.defines})}_createBoxGeometry(){return t.BoxGeometry.createGeometry(t.BoxGeometry.fromDimensions({vertexFormat:t.VertexFormat.POSITION_AND_ST,dimensions:new t.Cartesian3(1,1,1)}))}_getAttributeLocations(){return t.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:t.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new t.ShaderSource({sources:[`
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
            }`]})}};za(y,"DEFAULTS",{width:1024,height:1024,dimensions:new t.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new t.Cartesian4(.995,.25,1e-4,.03),customParams:new t.Cartesian4(10,20,.2,10),waterColor:new t.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let A=y;const E=(L=[0,0,0],n=[0,0,0],f=[1,1,1])=>{const m=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationX(t.Math.toRadians(n[0]))),w=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationY(t.Math.toRadians(n[1]))),o=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationZ(t.Math.toRadians(n[2])));L instanceof t.Cartesian3||(L=t.Cartesian3.fromDegrees(...L));const g=t.Transforms.eastNorthUpToFixedFrame(L);t.Matrix4.multiply(g,m,g),t.Matrix4.multiply(g,w,g),t.Matrix4.multiply(g,o,g);const d=t.Matrix4.fromScale(new t.Cartesian3(...f));return t.Matrix4.multiply(g,d,new t.Matrix4)},u=`
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
    `;function _(){return new t.PostProcessStage({fragmentShader:u})}return{FluidRenderer:A,createSkyEffect:_}}const Mo={key:0,class:"fluid-root"},Lo={class:"fluid-panel"},Po={class:"panel-actions"},Fo=["disabled"],Ao={key:0,class:"selected-text"},Ya=1024,Qt=1e4,Ka=1200,Eo=100,Ro=.01,Io=.03,ko=60,ba=64,Oo=160,No={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(t,{expose:e,emit:a}){const r=t,s=a,i=Pa(),p=Z(10),v=Z(20),b=Z(3),T=Z("#0d4fa3"),M=Z(null),I=Z(null),A=Z(null),E=Z(!1),u=Z(!1),_=Z(null),y=Z(null);let L=null,n=null,f=null,m=null,w=null,o=null,g=0;const d=Ce(()=>!Number.isFinite(_.value)||!Number.isFinite(y.value)?"":`经度 ${_.value.toFixed(6)} / 纬度 ${y.value.toFixed(6)}`),x=Ce(()=>Number.isFinite(I.value)&&Number.isFinite(A.value)),C=Ce(()=>{if(!x.value)return 1;const S=Math.abs(A.value-I.value);return Math.max(S/1e3,.01)}),k=Ce(()=>[{id:"threshold",label:"Threshold",type:"range",min:0,max:500,step:1e-4,value:p.value,displayValue:Number(p.value).toFixed(2)},{id:"blend",label:"Blend",type:"range",min:0,max:50,step:1e-4,value:v.value,displayValue:Number(v.value).toFixed(2)},{id:"lightStrength",label:"Light",type:"range",min:0,max:10,step:1e-4,value:b.value,displayValue:Number(b.value).toFixed(2)},{id:"waterLevel",label:"Water Level",type:"range",min:x.value?I.value:0,max:x.value?A.value:1,step:C.value,value:Number.isFinite(Number(M.value))?Number(M.value):0,displayValue:x.value&&Number.isFinite(Number(M.value))?`${Number(M.value).toFixed(2)} m`:"Pick terrain first",disabled:!x.value},{id:"waterColor",label:"Water Color",type:"color",value:T.value}]);De([p,v,b,T],Ye),De(M,Ct),De(()=>r.params,S=>{q(S||{})},{deep:!0,immediate:!0}),De([E,u,d,M,I,A],V,{immediate:!0}),mr(()=>{ct(!0)});function j(){var G,K;const S=(G=r.getViewer)==null?void 0:G.call(r),P=((K=r.getCesium)==null?void 0:K.call(r))||window.Cesium;if(!S||!P)return i.warning("Cesium 场景尚未就绪。"),null;if(!L){const O=Do(P);L=O.FluidRenderer,n=O.createSkyEffect}return{viewer:S,Cesium:P}}function q(S){Number.isFinite(Number(S.threshold))&&(p.value=Number(S.threshold)),Number.isFinite(Number(S.blend))&&(v.value=Number(S.blend)),Number.isFinite(Number(S.lightStrength))&&(b.value=Number(S.lightStrength)),at(S.waterColor)&&(T.value=S.waterColor),Number.isFinite(Number(S.waterLevel))&&(M.value=Number(S.waterLevel))}function Q({controlId:S,value:P}){S==="threshold"?p.value=Number(P):S==="blend"?v.value=Number(P):S==="lightStrength"?b.value=Number(P):S==="waterLevel"?M.value=Number(P):S==="waterColor"&&at(P)&&(T.value=P)}function V(){s("state-change",{isPicking:E.value,hasFluid:u.value,selectedText:d.value,waterLevel:M.value,waterLevelMin:I.value,waterLevelMax:A.value})}function ae(){const S=j();if(!S)return;const{viewer:P,Cesium:G}=S;Ee(),Dt(P,G),E.value=!0,f=new G.ScreenSpaceEventHandler(P.scene.canvas),f.setInputAction(K=>{ue(P,G,K.position)},G.ScreenSpaceEventType.LEFT_CLICK)}async function ue(S,P,G){var yt,rt;const K=pt(S,G);if(!K){i.warning("未选中可用地形位置。");return}const O=++g;Ee();const X=P.Cartographic.fromCartesian(K),ne=P.Math.toDegrees(X.longitude),se=P.Math.toDegrees(X.latitude),ze=Number(X.height),Pe=Number.isFinite(ze)?ze:0,Ke=new P.Cartesian3(Qt,Qt,0);yr("正在请求模拟范围高度数据...");try{Ne();const Ue=Number(p.value)||0,h=Number(v.value)||0,D=Number(b.value)||0,$=await ie(S,P,{lon:ne,lat:se,centerHeight:Pe,dimensions:Ke}),B=ee($,Pe),oe=B.baseHeight,ve=B.depth,ye=ge(B,Pe),Le=new P.Cartesian3(Qt,Qt,ve);if(O!==g)return;I.value=B.minHeight,A.value=B.maxHeight,M.value=ye,$||i.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),m=new L(S,{lonLat:[ne,se],width:Ya,height:Ya,dimensions:Le,baseHeight:oe,minHeight:B.minHeight,maxHeight:B.maxHeight,heightMapSource:$,waterColor:wt(P,T.value),customParams:new P.Cartesian4(Ue,h,D,10),fluidParams:new P.Cartesian4(.9+D/10*.099,Math.min(1,h/50),Ue/5e4,be(ye,B))}),_.value=ne,y.value=se,u.value=!0,(rt=(yt=S.scene).requestRender)==null||rt.call(yt),i.success("水体流体已创建。")}catch(Ue){i.error("水体流体创建失败",Ue),i.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{xr()}}async function ie(S,P,G){const K=S==null?void 0:S.terrainProvider,O=Me(G.dimensions);if(!K)return null;if(P.EllipsoidTerrainProvider&&K instanceof P.EllipsoidTerrainProvider)return U(O);if(typeof P.sampleTerrain!="function"&&typeof P.sampleTerrainMostDetailed!="function")return null;try{return await me(S,P,G,O)}catch(X){if(O<=ba)throw X;return me(S,P,G,ba)}}async function me(S,P,G,K){const O=et(P,G,K),X=await je(P,S.terrainProvider,O);return W(X||O,{size:K})}function Me(S){const P=Math.max(Number(S==null?void 0:S.x)||0,Number(S==null?void 0:S.y)||0),G=Math.ceil(P/ko)+1;return Ae(G,ba,Oo)}function Ae(S,P,G){return Math.max(P,Math.min(G,Math.round(S)))}function et(S,{lon:P,lat:G,centerHeight:K,dimensions:O},X){const ne=S.Cartesian3.fromDegrees(P,G,K),se=S.Transforms.eastNorthUpToFixedFrame(ne),ze=[],Pe=Math.max(1,X-1);for(let Ke=0;Ke<X;Ke++){const rt=(.5-Ke/Pe)*O.y;for(let Ue=0;Ue<X;Ue++){const D=(Ue/Pe-.5)*O.x,$=new S.Cartesian3(D,rt,0),B=S.Matrix4.multiplyByPoint(se,$,new S.Cartesian3);ze.push(S.Cartographic.fromCartesian(B))}}return ze}async function je(S,P,G){const K=tt(P);return Number.isInteger(K)&&typeof S.sampleTerrain=="function"?S.sampleTerrain(P,K,G):typeof S.sampleTerrainMostDetailed=="function"?S.sampleTerrainMostDetailed(P,G):S.sampleTerrain(P,10,G)}function tt(S){const P=Number(S==null?void 0:S._bottomLevel);return Number.isFinite(P)?Math.max(0,P-1):null}function W(S,{size:P}){var O;const G=R(S);if(!G)return null;const K=new Float32Array(P*P*4);for(let X=0;X<P*P;X++){const ne=Number((O=S[X])==null?void 0:O.height),se=X*4;K[se]=Number.isFinite(ne)?Xe(ne,G.minHeight,G.maxHeight):G.minHeight,K[se+1]=0,K[se+2]=0,K[se+3]=1}return{width:P,height:P,arrayBufferView:K,minHeight:G.minHeight,maxHeight:G.maxHeight}}function U(S){return{width:S,height:S,arrayBufferView:new Float32Array(S*S*4),minHeight:0,maxHeight:0}}function R(S){let P=Number.POSITIVE_INFINITY,G=Number.NEGATIVE_INFINITY;for(const K of S||[]){const O=Number(K==null?void 0:K.height);Number.isFinite(O)&&(P=Math.min(P,O),G=Math.max(G,O))}return!Number.isFinite(P)||!Number.isFinite(G)?null:{minHeight:P,maxHeight:G}}function ee(S,P){const G=Number(S==null?void 0:S.minHeight),K=Number(S==null?void 0:S.maxHeight);if(Number.isFinite(G)&&Number.isFinite(K)){const ne=Number(P),se=Number.isFinite(ne)?Math.min(G,K,ne):Math.min(G,K),ze=Number.isFinite(ne)?Math.max(G,K,ne):Math.max(G,K),Pe=Math.max(ze-se,Ro);return{baseHeight:se,depth:Pe,minHeight:se,maxHeight:se+Pe}}const O=Number(P),X=Number.isFinite(O)?O-Eo:0;return{baseHeight:X,depth:Ka,minHeight:X,maxHeight:X+Ka}}function ge(S,P){const G=S.minHeight+S.depth*Io,K=Number(P),O=Number.isFinite(K)?K:G;return Xe(O,S.minHeight,S.maxHeight)}function be(S,P){const G=P.maxHeight-P.minHeight;return!Number.isFinite(G)||G<=0?0:Xe((S-P.minHeight)/G,0,1)}function qe(){return!Number.isFinite(I.value)||!Number.isFinite(A.value)?null:{minHeight:Math.min(I.value,A.value),maxHeight:Math.max(I.value,A.value)}}function wt(S,P){const G=Ve(P)||Ve("#0d4fa3");return new S.Cartesian3(G.red,G.green,G.blue)}function Tt(){var G;const S=Ve(T.value),P=(G=m==null?void 0:m.config)==null?void 0:G.waterColor;!S||!P||(P.x=S.red,P.y=S.green,P.z=S.blue)}function at(S){return typeof S=="string"&&/^#[0-9a-f]{6}$/i.test(S)}function Ve(S){return at(S)?{red:Number.parseInt(S.slice(1,3),16)/255,green:Number.parseInt(S.slice(3,5),16)/255,blue:Number.parseInt(S.slice(5,7),16)/255}:null}function Xe(S,P,G){return Math.max(P,Math.min(G,S))}function pt(S,P){if(!P)return null;if(S.scene.pickPositionSupported&&typeof S.scene.pickPosition=="function"){const K=S.scene.pickPosition(P);if(K)return K}const G=S.camera.getPickRay(P);return G?S.scene.globe.pick(G,S.scene):null}function Ye(){var K,O,X;if(!(m!=null&&m.config))return;const S=Number(p.value)||0,P=Number(v.value)||0,G=Number(b.value)||0;m.config.customParams&&(m.config.customParams.x=S,m.config.customParams.y=P,m.config.customParams.z=G),m.config.fluidParams&&(m.config.fluidParams.x=.9+G/10*.099,m.config.fluidParams.y=Math.min(1,P/50),m.config.fluidParams.z=S/5e4),Tt(),(X=(O=(K=m.viewer)==null?void 0:K.scene)==null?void 0:O.requestRender)==null||X.call(O)}function Ct(){var O,X,ne,se;if(!((O=m==null?void 0:m.config)!=null&&O.fluidParams))return;const S=qe(),P=Number(M.value);if(!S||!Number.isFinite(P))return;const G=Xe(P,S.minHeight,S.maxHeight);if(G!==P){M.value=G;return}const K=be(G,S);typeof m.setInitialWaterLevel=="function"?m.setInitialWaterLevel(K):(m.config.fluidParams.w=K,(se=(ne=(X=m.viewer)==null?void 0:X.scene)==null?void 0:ne.requestRender)==null||se.call(ne))}function Dt(S,P){var G,K;if(!o){const O=S.scene;o={shadows:S.shadows,resolutionScale:S.resolutionScale,msaaSamples:O.msaaSamples,depthTestAgainstTerrain:O.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:O.logarithmicDepthBuffer,highDynamicRange:O.highDynamicRange,fogEnabled:(G=O.fog)==null?void 0:G.enabled,showGroundAtmosphere:O.globe.showGroundAtmosphere,skyAtmosphereShow:(K=O.skyAtmosphere)==null?void 0:K.show,enableLighting:O.globe.enableLighting}}S.shadows=!0,S.resolutionScale=1,S.scene.msaaSamples=4,S.scene.globe.depthTestAgainstTerrain=!0,S.scene.logarithmicDepthBuffer=!0,S.scene.highDynamicRange=!0,S.scene.fog&&(S.scene.fog.enabled=!0),S.scene.globe.showGroundAtmosphere=!0,S.scene.skyAtmosphere&&(S.scene.skyAtmosphere.show=!0),S.scene.globe.enableLighting=!0,!w&&n&&(w=n(P),S.scene.postProcessStages.add(w))}function gt(S){if(!S||!o)return;const P=S.scene;S.shadows=o.shadows,S.resolutionScale=o.resolutionScale,o.msaaSamples!==void 0&&(P.msaaSamples=o.msaaSamples),P.globe.depthTestAgainstTerrain=o.depthTestAgainstTerrain,P.logarithmicDepthBuffer=o.logarithmicDepthBuffer,P.highDynamicRange=o.highDynamicRange,P.fog&&o.fogEnabled!==void 0&&(P.fog.enabled=o.fogEnabled),P.globe.showGroundAtmosphere=o.showGroundAtmosphere,P.skyAtmosphere&&o.skyAtmosphereShow!==void 0&&(P.skyAtmosphere.show=o.skyAtmosphereShow),P.globe.enableLighting=o.enableLighting,o=null}function lt(){ct(!1),i.success("水体流体已清除。")}function Ee(){f&&(f.destroy(),f=null),E.value=!1}function Ne(){if(m){try{m.destroy()}catch{}m=null,u.value=!1}}function ct(S){var G,K,O;const P=(G=r.getViewer)==null?void 0:G.call(r);if(g+=1,Ee(),Ne(),_.value=null,y.value=null,M.value=null,I.value=null,A.value=null,P&&w){try{P.scene.postProcessStages.remove(w)}catch{}w=null}S&&P&&gt(P),(O=(K=P==null?void 0:P.scene)==null?void 0:K.requestRender)==null||O.call(K)}function vt(){ct(!0),s("close")}return e({startPickHeightMap:ae,clearFluid:lt}),(S,P)=>t.headless?pe("",!0):(J(),re("div",Mo,[F("div",Lo,[F("div",{class:"panel-head"},[P[0]||(P[0]=F("span",{class:"panel-title"},"水体流体",-1)),F("button",{class:"panel-close",title:"关闭",onClick:vt}," × ")]),F("div",Po,[F("button",{class:Oe(["action-btn primary",{active:E.value}]),onClick:ae},he(E.value?"等待选点":"捕捉高度图"),3),F("button",{class:"action-btn",disabled:!u.value&&!E.value,onClick:lt}," 清除 ",8,Fo)]),d.value?(J(),re("div",Ao,he(d.value),1)):pe("",!0),_e(Ea,{class:"param-list",title:"Fluid Parameters",controls:k.value,onChange:Q},null,8,["controls"])])]))}},zo=zt(No,[["__scopeId","data-v-882532f8"]]),Ra="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",Bo=`${Ra}Cesium.js`,Uo=`${Ra}Widgets/widgets.css`;async function Ho({ionToken:t}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=Ra),await Go(Uo,"cesium-widgets-style"),await Wo(Bo,"cesium-runtime-script");const e=window.Cesium;if(!e)throw new Error("Cesium global 未找到（window.Cesium 为空）");return la(e,t),e}function la(t,e){e&&(t!=null&&t.Ion)&&(t.Ion.defaultAccessToken=e)}function Wo(t,e){return new Promise((a,r)=>{const s=document.getElementById(e);if(s){if(s.getAttribute("data-loaded")==="true"){a();return}s.addEventListener("load",()=>a(),{once:!0}),s.addEventListener("error",()=>r(new Error(`脚本加载失败: ${t}`)),{once:!0});return}const i=document.createElement("script");i.id=e,i.src=t,i.async=!0,i.onload=()=>{i.setAttribute("data-loaded","true"),a()},i.onerror=()=>r(new Error(`脚本加载失败: ${t}`)),document.head.appendChild(i)})}function Go(t,e){return new Promise((a,r)=>{if(document.getElementById(e)){a();return}const i=document.createElement("link");i.id=e,i.rel="stylesheet",i.href=t,i.onload=()=>a(),i.onerror=()=>r(new Error(`样式加载失败: ${t}`)),document.head.appendChild(i)})}const $o="Asia/Shanghai",jo="UTC+8",qo=new Intl.DateTimeFormat("zh-CN",{timeZone:$o,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Vo(t,e){var a,r,s,i,p,v,b;if(!(!t||!(e!=null&&e.JulianDate))){if((a=t.animation)!=null&&a.viewModel&&(t.animation.viewModel.dateFormatter=(...T)=>Yo(t,e,...T),t.animation.viewModel.timeFormatter=(...T)=>Ko(t,e,...T)),t.timeline){const T=(...M)=>Jo(t,e,...M);t.timeline.makeLabel=T,"_makeLabel"in t.timeline&&(t.timeline._makeLabel=T),(s=(r=t.timeline).updateFromClock)==null||s.call(r),(p=(i=t.timeline).zoomTo)==null||p.call(i,t.clock.startTime,t.clock.stopTime)}(b=(v=t.scene).requestRender)==null||b.call(v)}}function Ia(t,e,...a){var v;const r=a.find(Xo)||((v=t==null?void 0:t.clock)==null?void 0:v.currentTime);if(!r)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const s=e.JulianDate.toDate(r),i=qo.formatToParts(s),p=Object.fromEntries(i.filter(({type:b})=>b!=="literal").map(({type:b,value:T})=>[b,T]));return{year:p.year||"0000",month:p.month||"01",day:p.day||"01",hour:p.hour||"00",minute:p.minute||"00",second:p.second||"00"}}function Xo(t){return t&&typeof t.dayNumber=="number"&&typeof t.secondsOfDay=="number"}function Yo(t,e,...a){const{year:r,month:s,day:i}=Ia(t,e,...a);return`${r}-${s}-${i}`}function Ko(t,e,...a){const{hour:r,minute:s,second:i}=Ia(t,e,...a);return`${r}:${s}:${i} ${jo}`}function Jo(t,e,...a){const{month:r,day:s,hour:i,minute:p}=Ia(t,e,...a);return`${r}-${s} ${i}:${p}`}function Zo({getViewer:t}){let e=null,a=null;function r(){var v;const p=t==null?void 0:t();if(p&&((v=p._cesiumWidget)!=null&&v._creditContainer&&(p._cesiumWidget._creditContainer.style.display="none"),s(),e=setInterval(()=>{const b=document.querySelector(".cesium-credit-container");b&&b.innerHTML.length>0&&(b.innerHTML="",b.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const b=document.createElement("style");b.id="cesium-credit-override",b.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(b),a=b}}function s(){var b;const p=t==null?void 0:t();if(!p)return;(b=p._cesiumWidget)!=null&&b._creditContainer&&(p._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",p._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(T=>{T.style.cssText="display: none !important; visibility: hidden !important;",T.innerHTML=""}),p.scene&&p.scene.frameState&&p.scene.frameState.creditDisplay&&(p.scene.frameState.creditDisplay.hasCredits=()=>!1,p.scene.frameState.creditDisplay.destroy=()=>{})}function i(){e&&(clearInterval(e),e=null),a&&(a.remove(),a=null)}return{installCreditHider:r,cleanupCreditHider:i}}const Sa="经度: --, 纬度: --, 海拔: --米";function Qo({getViewer:t,getCesium:e,onCoordinatePick:a}){let r=null,s=null,i=null;const p=Z("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function v(){const E=t==null?void 0:t(),u=e==null?void 0:e();!E||!u||(A(),s=E.scene.canvas,r=new u.ScreenSpaceEventHandler(s),i=()=>{p.value=Sa},s.addEventListener("mouseleave",i),r.setInputAction(_=>{b(_.endPosition,E,u)},u.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(_=>{const y=_.endPosition,L=_.startPosition;if(!u.defined(E.terrainProvider))return;const n=E.scene.globe.ellipsoid;if(!E.camera.pickEllipsoid(L,n)){const m=E.camera;m.rotate(u.Cartesian3.UNIT_X,-.002*(y.y-L.y)),m.rotate(u.Cartesian3.UNIT_Y,-.002*(y.x-L.x))}},u.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},u.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},u.ScreenSpaceEventType.RIGHT_UP))}function b(E,u,_){const y=T(E,u,_);if(!y){p.value=Sa;return}const L=_.Cartographic.fromCartesian(y);if(!L||!Number.isFinite(L.longitude)||!Number.isFinite(L.latitude)){p.value=Sa;return}const n=_.Math.toDegrees(L.longitude).toFixed(6),f=_.Math.toDegrees(L.latitude).toFixed(6),m=(Number.isFinite(L.height)?L.height:0).toFixed(2);p.value=`经度: ${n}, 纬度: ${f}, 海拔: ${m}米`,typeof a=="function"&&a({lng:Number(n),lat:Number(f),height:Number(m)})}function T(E,u,_){if(!E)return null;const y=u.scene,L=M(E,y,_);if(L)return L;const n=u.camera.getPickRay(E);if(n){const m=y.globe.pick(n,y);if(I(m))return m}const f=u.camera.pickEllipsoid(E,y.globe.ellipsoid);return I(f)?f:null}function M(E,u,_){if(!u.pickPositionSupported||typeof u.pickPosition!="function")return null;const y=typeof u.pick=="function"?u.pick(E):null;if(!_.defined(y))return null;const L=u.pickPosition(E);return I(L)?L:null}function I(E){return!!E&&Number.isFinite(E.x)&&Number.isFinite(E.y)&&Number.isFinite(E.z)}function A(){i&&s&&(s.removeEventListener("mouseleave",i),i=null),s=null,r&&(r.destroy(),r=null)}return{coordinateDisplay:p,setupInteractions:v,cleanupInteractions:A}}function Ja(t,e=""){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(t);return a??e}catch{return e}}function es(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(e||""))}catch{}}function kt(t,e){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(t);return a==null?e:a==="true"}catch{return e}}function jt(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(!!e))}catch{}}function Za(t){if(!t)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:e,DeveloperError:a,Ellipsoid:r,Resource:s,HeightmapTerrainData:i,Rectangle:p,TileAvailability:v,CustomHeightmapTerrainProvider:b}=t;function T(E,u,_,y,L,n){const f=E.tileXYToRectangle(_,y,L);return e(p.intersection(f,u,n))}function M(E){const u=[[[0,0,1,0]]],_=new v(E.tilingScheme,19);for(let y=0;y<u.length;y++){const L=u[y];for(let n=0;n<L.length;n++){const f=L[n];_.addAvailableTileRange(y,f[0],f[1],f[2],f[3])}}return _}function I(E,u,_,y,L){const n=new i({buffer:E._transformBuffer(u),width:E._width,height:E._height,childTileMask:E._getChildTileMask(y,L,_),structure:E._terrainDataStructure});return n._skirtHeight=6e3,E.availability.addAvailableTileRange(_,y,L,y,L),n}class A extends b{constructor(u={}){if(super({...u,ellipsoid:r.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!e(u.url))throw new a("options.url is required.");this._dataType=u.dataType??"int16",this._url=u.url,this._subdomains=u.subdomains,this._token=u.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=M(this)}get availability(){return this._availability}requestTileGeometry(u,_,y,L){if(y>=this._bottomLevel)return Promise.reject(new Error(`Level ${y} is outside supported range.`));if(y<this._topLevel)return Promise.resolve(new i({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(u,_,y),structure:this._terrainDataStructure}));let n=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const m=this._subdomains[(u+_)%this._subdomains.length];n=n.replace("{s}",m)}n=n.replace("{token}",this._token).replace("{x}",u).replace("{y}",_).replace("{z}",y+1);const f=s.fetchArrayBuffer({url:n,request:L});if(f)return f.then(m=>m.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):Gr.inflate(m)).then(m=>I(this,m,y,u,_))}getTileDataAvailable(u,_,y){return y<this._bottomLevel}_transformBuffer(u){let _=2;this._dataType==="float"&&(_=4);const y=u;if(y.length!==22500*_)return null;const L=new ArrayBuffer(_),n=new DataView(L),f=this._width,m=this._height,w=new Uint8Array(f*m*4);for(let o=0;o<m;o++)for(let g=0;g<f;g++){const d=Math.floor(149*o/(m-1)),x=Math.floor(149*g/(f-1)),C=_*(150*d+x);let k;_===4?(n.setInt8(0,y[C]),n.setInt8(1,y[C+1]),n.setInt8(2,y[C+2]),n.setInt8(3,y[C+3]),k=n.getFloat32(0,!0)):k=y[C]+256*y[C+1],(k>1e4||k<-2e3)&&(k=0);const j=(k+1e3)/.001,q=4*(o*f+g);w[q]=j/65536,w[q+1]=(j-256*w[q]*256)/256,w[q+2]=j-256*w[q]*256-256*w[q+1],w[q+3]=255}return w}_getVHeightBuffer(){let u=this._vHeightBuffer;if(!e(u)){u=new Uint8ClampedArray(this._width*this._height*4);for(let _=0;_<this._width*this._height*4;)u[_++]=15,u[_++]=66,u[_++]=64,u[_++]=255;this._vHeightBuffer=u}return u}_getChildTileMask(u,_,y){const L=new p,n=this._tilingScheme,f=this._rectangles,m=n.tileXYToRectangle(u,_,y);let w=0;for(let o=0;o<f.length&&w!==15;o++){const g=f[o];if(g.maxLevel<=y)continue;const d=g.rectangle,x=p.intersection(d,m,L);e(x)&&(T(n,d,2*u,2*_,y+1,L)&&(w|=4),T(n,d,2*u+1,2*_,y+1,L)&&(w|=8),T(n,d,2*u,2*_+1,y+1,L)&&(w|=1),T(n,d,2*u+1,2*_+1,y+1,L)&&(w|=2))}return w}}return A}function ts({getViewer:t,getCesium:e,activeBasemap:a,applyBasemap:r,resolvePresetLayerIds:s,message:i,validationTimeoutMs:p=5e3,circuitBreakThreshold:v=3}){const b=new Map,T=new Set,M={value:!1};let I=null,A=[],E=[];function u(w,o={}){return w?T.has(w)&&!o.forceReload?(M.value=!0,!1):r(w,o)?(_(w),!0):(y(w),!1):!1}function _(w){var j,q;n();const o=t==null?void 0:t();if(!(o!=null&&o.imageryLayers))return;const g=s(w),d=[];for(let Q=0;Q<o.imageryLayers.length;Q++){const V=o.imageryLayers.get(Q);(j=V==null?void 0:V.imageryProvider)!=null&&j._descriptorId&&g.includes(V.imageryProvider._descriptorId)&&d.push(V)}if(!d.length)return;A=d;let x=!1;const C=()=>{x=!0,n(),b.delete(w),T.has(w)&&(T.delete(w),M.value=T.size>0)},k=Q=>{x||(y(w),n())};for(const Q of A){const V=Q.imageryProvider;if(V!=null&&V.errorEvent&&(V.errorEvent.addEventListener(k),E.push(()=>V.errorEvent.removeEventListener(k))),V!=null&&V.ready){C();return}(q=V==null?void 0:V.readyPromise)!=null&&q.then&&V.readyPromise.then(C).catch(k)}I=setTimeout(()=>{x||y(w)},p)}function y(w){const o=(b.get(w)||0)+1;b.set(w,o),o>=v&&(T.add(w),M.value=!0,L(w))}function L(w){var g,d,x,C,k;const o="custom_China_Blender_preset_2";if(w===o){const j="imagery_tianditu_preset";T.has(j)?(d=i==null?void 0:i.error)==null||d.call(i,"所有底图均加载失败，请检查网络",{closable:!0}):((g=i==null?void 0:i.warning)==null||g.call(i,"底图加载失败，已降级到天地图影像",{closable:!0}),a.value=j);return}if(!T.has(o))(x=i==null?void 0:i.warning)==null||x.call(i,"底图加载失败，已降级到默认底图",{closable:!0}),a.value=o;else{const j="imagery_tianditu_preset";T.has(j)?(k=i==null?void 0:i.error)==null||k.call(i,"所有底图均加载失败，请检查网络",{closable:!0}):((C=i==null?void 0:i.warning)==null||C.call(i,"底图加载失败，已降级到天地图影像",{closable:!0}),a.value=j)}}function n(){I&&(clearTimeout(I),I=null);for(const w of E)try{w()}catch{}E=[],A=[]}function f(){b.clear(),T.clear(),M.value=!1,n()}function m(){n(),b.clear(),T.clear(),M.value=!1}return{switchBasemap:u,resetCircuitBreaker:f,isCircuitOpen:M,cleanup:m}}const Ut=["0","1","2","3","4","5","6","7"],Ht="https://t{s}.tianditu.gov.cn/",as="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",rs=96188,qt="custom-xyz",Qa="webgis_custom_basemap_url",ns="cesium_tdt_label_layer_visible",er="cesium_tdt_boundary_layer_visible",tr="cesium_tdt_text_label_layer_visible",ar="cesium_osm_buildings_visible",rr="cesium_google_photorealistic_3d_tiles_visible";function is(){return $r.map(t=>({...t,description:os(t.value),source:"preset"}))}function os(t){const e=Vt(t);if(!e.length)return"复合底图";const a=e.map(r=>{const s=Fa(r);return s?s.name:r});return a.slice(0,3).join(" + ")+(a.length>3?" ...":"")}const nr=is(),ir=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function ss({getViewer:t,getCesium:e,message:a,backendBaseUrl:r,tiandituToken:s,cesiumIonToken:i}){let p=null,v=null,b=null,T=null,M=0,I=null,A=null,E=0,u=0,_=[];const y=()=>or(s),L=()=>or(i),n=[],f=Z([]),m=new Map,w=new Map,o=new Map,g=new Map,d="cesium_custom_xyz_basemap_url",x=Z(ja),C=Z("tianditu"),k=Z(Ja(Qa,"")||Ja(d,"")),j=kt(ns,!1),q=Z(kt(er,j??!1)),Q=Z(kt(tr,j??!1)),V=Z(kt(ar,!1)),ae=Z(kt(rr,!1)),ue=Ce(()=>[...nr.map(h=>h.value!=="custom"?h:{...h,description:k.value?k.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!k.value}),...f.value]),ie=ts({getViewer:t,getCesium:e,activeBasemap:x,applyBasemap:K,resolvePresetLayerIds:Vt,message:a}),me=Ce(()=>ie.isCircuitOpen.value),Me=Ce(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:q.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:Q.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:V.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:ae.value}]);De(x,h=>{!(t!=null&&t())||!(e!=null&&e())||K(h)}),De(k,h=>{es(Qa,h)}),De(C,async h=>{!(t!=null&&t())||!(e!=null&&e())||await X(h)}),De(q,h=>{jt(er,h),Ye()}),De(Q,h=>{jt(tr,h),Ye()}),De(V,h=>{jt(ar,h),Ee()}),De(ae,h=>{jt(rr,h),Ne()});function Ae(){const h=e==null?void 0:e();if(!h)return[];m.clear(),w.clear();const D=nr.map(B=>{const oe=new h.ProviderViewModel({name:B.label,tooltip:ds(B),category:"项目底图",iconUrl:cr(hs(B.value),fs(B.value,B.label)),creationFunction:()=>U(B.value)});return m.set(B.value,oe),w.set(oe,B.value),oe}),$=W();return f.value=$.map((B,oe)=>{const ve=String((B==null?void 0:B.name)||`官方底图 ${oe+1}`).trim(),ye=gs(ve,oe);return m.set(ye,B),w.set(B,ye),{value:ye,label:`官方 · ${ve}`,description:String((B==null?void 0:B.tooltip)||ve),source:"official"}}),[...D,...$]}function et(){const h=e==null?void 0:e();return h?(o.clear(),g.clear(),ir.map(D=>{const $=new h.ProviderViewModel({name:D.label,tooltip:D.description||D.label,category:"项目地形",iconUrl:cr(ls(D.value),cs(D.value)),creationFunction:()=>se(D.value)});return o.set(D.value,$),g.set($,D.value),$})):[]}function je(h=[]){return m.get(x.value)||h[0]}function tt(h=[]){return o.get(C.value)||h[0]}function W(){const h=e==null?void 0:e();if(typeof(h==null?void 0:h.createDefaultImageryProviderViewModels)!="function")return[];try{return h.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function U(h){return Vt(h).length>0?R(h):h==="google"?ge():h===qt?be():ee()}function R(h){const D=e==null?void 0:e();if(!D)return[];const $=Vt(h);if(!$.length)return ee();const B=y(),oe=k.value;return sn(D,$,{tiandituTk:B,customUrl:oe})}function ee(){const h=e==null?void 0:e();return[new h.UrlTemplateImageryProvider({url:`${Ht}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${y()}`,subdomains:Ut,tilingScheme:new h.WebMercatorTilingScheme,maximumLevel:18})]}function ge(){const h=e==null?void 0:e();return[new h.UrlTemplateImageryProvider({url:`${r}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new h.WebMercatorTilingScheme,maximumLevel:20})]}function be(){const h=e==null?void 0:e(),D=lr(k.value);return D.valid?[new h.UrlTemplateImageryProvider({url:D.url,subdomains:D.subdomains,tilingScheme:new h.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(a.warning(D.message,{closable:!0}),ee())}function qe(){const h=e==null?void 0:e();return new h.UrlTemplateImageryProvider({url:`${Ht}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${y()}`,subdomains:Ut,tilingScheme:new h.WebMercatorTilingScheme,maximumLevel:10})}function wt(){const h=e==null?void 0:e();return new h.UrlTemplateImageryProvider({url:`${Ht}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${y()}`,subdomains:Ut,tilingScheme:new h.WebMercatorTilingScheme,maximumLevel:18})}function Tt(){var Le,Ie,we,nt,ut;at();const h=e==null?void 0:e(),D=(Ie=(Le=t==null?void 0:t())==null?void 0:Le.baseLayerPicker)==null?void 0:Ie.viewModel;if(!D||!((we=h==null?void 0:h.knockout)!=null&&we.getObservable))return;const $=h.knockout.getObservable(D,"selectedImagery"),B=h.knockout.getObservable(D,"selectedTerrain"),oe=[],ve=(nt=$==null?void 0:$.subscribe)==null?void 0:nt.call($,l=>{const c=w.get(l);c&&(x.value!==c&&(x.value=c),pt())}),ye=(ut=B==null?void 0:B.subscribe)==null?void 0:ut.call(B,l=>{const c=g.get(l);c&&(C.value!==c&&(C.value=c),ne(c))});ve&&oe.push(ve),ye&&oe.push(ye),_=oe}function at(){_.forEach(h=>{var D;return(D=h==null?void 0:h.dispose)==null?void 0:D.call(h)}),_=[]}function Ve(){return Ye(),Ee(),Ne(),!0}function Xe(){const h=t==null?void 0:t();if(h!=null&&h.imageryLayers)for(;n.length;){const D=n.pop();try{h.imageryLayers.remove(D,!0)}catch{}}}function pt(){var h,D,$;Ye(),Ee(),Ne(),($=(D=(h=t==null?void 0:t())==null?void 0:h.scene)==null?void 0:D.requestRender)==null||$.call(D)}function Ye(){var D,$;const h=t==null?void 0:t();!h||!(e!=null&&e())||(q.value?Ct():gt(),Q.value?Dt():lt(),($=(D=h.scene).requestRender)==null||$.call(D))}function Ct(){var D,$,B,oe;const h=t==null?void 0:t();if(!(h!=null&&h.imageryLayers)||p)return p&&(($=(D=h==null?void 0:h.imageryLayers)==null?void 0:D.raiseToTop)==null||$.call(D,p)),p;try{return p=h.imageryLayers.addImageryProvider(qe()),(oe=(B=h.imageryLayers).raiseToTop)==null||oe.call(B,p),p}catch(ve){return a.error("天地图国界线图层加载失败",ve),null}}function Dt(){var D,$,B,oe;const h=t==null?void 0:t();if(!(h!=null&&h.imageryLayers)||v)return v&&(($=(D=h==null?void 0:h.imageryLayers)==null?void 0:D.raiseToTop)==null||$.call(D,v)),v;try{return v=h.imageryLayers.addImageryProvider(wt()),(oe=(B=h.imageryLayers).raiseToTop)==null||oe.call(B,v),v}catch(ve){return a.error("天地图文字标注图层加载失败",ve),null}}function gt(){const h=t==null?void 0:t();if(!(!p||!(h!=null&&h.imageryLayers))){try{h.imageryLayers.remove(p,!0)}catch{}p=null}}function lt(){const h=t==null?void 0:t();if(!(!v||!(h!=null&&h.imageryLayers))){try{h.imageryLayers.remove(v,!0)}catch{}v=null}}async function Ee(){var D,$,B;const h=t==null?void 0:t();!((D=h==null?void 0:h.scene)!=null&&D.primitives)||!(e!=null&&e())||(V.value?await S():P(),(B=($=h.scene).requestRender)==null||B.call($))}async function Ne(){var D,$,B;const h=t==null?void 0:t();!((D=h==null?void 0:h.scene)!=null&&D.primitives)||!(e!=null&&e())||(ae.value?await ct():vt(),(B=($=h.scene).requestRender)==null||B.call($))}async function ct(){var B,oe,ve;const h=t==null?void 0:t(),D=e==null?void 0:e();if(!((B=h==null?void 0:h.scene)!=null&&B.primitives))return null;if(I)return h.scene.globe.show=!1,I;if(A)return A;if(typeof(D==null?void 0:D.createGooglePhotorealistic3DTileset)!="function")return a.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),ae.value=!1,null;const $=++E;la(D,L()),A=D.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const ye=await A;return $!==E||!ae.value?(sr(ye),null):(I=h.scene.primitives.add(ye),h.scene.globe.show=!1,h.scene.skyAtmosphere.show=!0,(ve=(oe=h.scene).requestRender)==null||ve.call(oe),I)}catch(ye){return $!==E||(ae.value=!1,a.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),a.error("Google Photorealistic 3D Tiles 初始化失败",ye)),null}finally{$===E&&(A=null)}}function vt(){var D,$,B;const h=t==null?void 0:t();if(E+=1,A=null,!I||!((D=h==null?void 0:h.scene)!=null&&D.primitives)){($=h==null?void 0:h.scene)!=null&&$.globe&&(h.scene.globe.show=!0);return}try{h.scene.primitives.remove(I)}catch{}I=null,(B=h==null?void 0:h.scene)!=null&&B.globe&&(h.scene.globe.show=!0)}async function S(){var B,oe,ve,ye;const h=t==null?void 0:t(),D=e==null?void 0:e();if(!((B=h==null?void 0:h.scene)!=null&&B.primitives)||b)return b;if(T)return T;if(typeof((oe=D==null?void 0:D.Cesium3DTileset)==null?void 0:oe.fromIonAssetId)!="function"&&typeof(D==null?void 0:D.createOsmBuildingsAsync)!="function")return a.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),V.value=!1,null;const $=++M;la(D,L()),await G(),T=us(D,{maximumScreenSpaceError:8});try{const Le=await T;return $!==M||!V.value?(sr(Le),null):(b=h.scene.primitives.add(Le),(ye=(ve=h.scene).requestRender)==null||ye.call(ve),b)}catch(Le){return $!==M||(V.value=!1,a.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),a.error("Cesium OSM 建筑图层初始化失败",Le)),null}finally{$===M&&(T=null)}}function P(){var D,$,B;const h=t==null?void 0:t();if(M+=1,T=null,!(!b||!((D=h==null?void 0:h.scene)!=null&&D.primitives))){try{h.scene.primitives.remove(b)}catch{}b=null,(B=($=h.scene).requestRender)==null||B.call($)}}async function G(){if(C.value==="cesiumWorld")return!0;C.value="cesiumWorld";const h=await X("cesiumWorld");return h||a.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),h}function K(h,D={}){var ve,ye,Le;const $=t==null?void 0:t();if(!$||!(e!=null&&e()))return!1;tn(),Xe();const B=(ve=$.baseLayerPicker)==null?void 0:ve.viewModel,oe=m.get(h);if(B&&oe){if(D.forceReload&&B.selectedImagery===oe){const Ie=m.get(ja)||m.get("tianditu");Ie&&Ie!==oe&&(B.selectedImagery=Ie)}return B.selectedImagery!==oe&&(B.selectedImagery=oe),pt(),!0}try{return U(h).forEach(we=>{we&&n.push($.imageryLayers.addImageryProvider(we))}),Ye(),(Le=(ye=$.scene).requestRender)==null||Le.call(ye),!0}catch(Ie){return a.error("地图源切换失败",Ie),!1}}function O(){return X(C.value)}async function X(h){var Le,Ie,we,nt,ut,l,c,N,z,H,te;const D=t==null?void 0:t(),$=e==null?void 0:e();if(!D||!$)return!1;const B=(Le=D.baseLayerPicker)==null?void 0:Le.viewModel,oe=o.get(h);if(B&&oe)return B.selectedTerrain!==oe&&(B.selectedTerrain=oe),ne(h),(we=(Ie=D.scene).requestRender)==null||we.call(Ie),!0;const ve=++u;if(h==="ellipsoid")return D.terrainProvider=new $.EllipsoidTerrainProvider,ne(h),(ut=(nt=D.scene).requestRender)==null||ut.call(nt),!0;if(h==="cesiumWorld")try{const Y=await ze();return ve!==u?!1:(D.terrainProvider=Y,ne(h),(c=(l=D.scene).requestRender)==null||c.call(l),!0)}catch(Y){return ve!==u||(D.terrainProvider=new $.EllipsoidTerrainProvider,ne("ellipsoid"),a.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("Cesium 世界地形初始化失败",Y)),!1}if(h==="arcgisWorld")try{const Y=await Pe();return ve!==u?!1:(D.terrainProvider=Y,ne(h),(z=(N=D.scene).requestRender)==null||z.call(N),!0)}catch(Y){return ve!==u||(D.terrainProvider=new $.EllipsoidTerrainProvider,ne("ellipsoid"),a.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("ArcGIS 世界地形初始化失败",Y)),!1}const ye=Za($);try{return D.terrainProvider=new ye({url:`${Ht}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Ut,token:y()}),ne(h),(te=(H=D.scene).requestRender)==null||te.call(H),!0}catch(Y){return D.terrainProvider=new $.EllipsoidTerrainProvider,ne("ellipsoid"),a.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),a.error("官方地形初始化失败",Y),!1}}function ne(h){var $;const D=t==null?void 0:t();($=D==null?void 0:D.scene)!=null&&$.globe&&(D.scene.globe.depthTestAgainstTerrain=h!=="ellipsoid")}function se(h){const D=e==null?void 0:e();if(h==="ellipsoid")return new D.EllipsoidTerrainProvider;if(h==="cesiumWorld")return ze().catch(B=>(a.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("Cesium 世界地形初始化失败",B),Ke(h,"ellipsoid"),new D.EllipsoidTerrainProvider));if(h==="arcgisWorld")return Pe().catch(B=>(a.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("ArcGIS 世界地形初始化失败",B),Ke(h,"ellipsoid"),new D.EllipsoidTerrainProvider));const $=Za(D);try{return new $({url:`${Ht}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Ut,token:y()})}catch(B){return a.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),a.error("官方地形初始化失败",B),new D.EllipsoidTerrainProvider}}async function ze(){var $,B;const h=e==null?void 0:e();la(h,L());const D={requestWaterMask:!1,requestVertexNormals:!0};if(typeof h.createWorldTerrainAsync=="function")return h.createWorldTerrainAsync(D);if(typeof h.createWorldTerrain=="function")return h.createWorldTerrain(D);if(typeof(($=h.CesiumTerrainProvider)==null?void 0:$.fromIonAssetId)=="function")return h.CesiumTerrainProvider.fromIonAssetId(1,D);if((B=h.IonResource)!=null&&B.fromAssetId&&h.CesiumTerrainProvider){const oe=await h.IonResource.fromAssetId(1);return new h.CesiumTerrainProvider({url:oe,...D})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function Pe(){var D;const h=e==null?void 0:e();if(typeof((D=h==null?void 0:h.ArcGISTiledElevationTerrainProvider)==null?void 0:D.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return h.ArcGISTiledElevationTerrainProvider.fromUrl(as)}function Ke(h,D){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{C.value===h&&(C.value=D)},0)}function yt({overlayId:h,value:D}){if(h==="tdt-boundaries"){q.value=!!D;return}if(h==="tdt-text-labels"){Q.value=!!D;return}if(h==="cesium-osm-buildings"){V.value=!!D;return}h==="google-photorealistic-3d-tiles"&&(ae.value=!!D)}function rt({url:h}){const D=String(h||"").trim(),$=lr(D);if(!$.valid){a.warning($.message,{closable:!0});return}if(k.value=D,x.value===qt){K(qt,{forceReload:!0})&&a.success("已加载自定义 XYZ 图源");return}x.value=qt,a.success("已切换到自定义 XYZ 图源")}function Ue(){Xe(),gt(),lt(),P(),vt(),at()}return{activeBasemap:x,activeTerrain:C,customXyzBasemapUrl:k,basemapOptions:ue,terrainOptions:ir,overlayOptions:Me,createImageryProviderViewModels:Ae,createTerrainProviderViewModels:et,getSelectedImageryProviderViewModel:je,getSelectedTerrainProviderViewModel:tt,bindLayerPickerStateSync:Tt,addBaseImageryLayers:Ve,initCustomTerrain:O,applyBasemap:K,applyTerrain:X,handleOverlayToggle:yt,handleCustomBasemapSubmit:rt,cleanupLayers:Ue,basemapSwitcher:ie,basemapCircuitOpen:me,resetCircuitBreaker:ie.resetCircuitBreaker}}function ls(t){return t==="ellipsoid"?"#a3a3a3":t==="arcgisWorld"?"#5ea1ff":"#d0a449"}function cs(t){return t==="cesiumWorld"?"CW":t==="arcgisWorld"?"AG":t==="ellipsoid"?"EL":"TE"}function or(t){return typeof t=="function"?String(t()||"").trim():t&&typeof t=="object"&&"value"in t?String(t.value||"").trim():String(t||"").trim()}function sr(t){var e,a;if(!(!t||(e=t.isDestroyed)!=null&&e.call(t)))try{(a=t.destroy)==null||a.call(t)}catch{}}async function us(t,e={}){var a;if(typeof((a=t==null?void 0:t.Cesium3DTileset)==null?void 0:a.fromIonAssetId)=="function"){const r=await t.Cesium3DTileset.fromIonAssetId(rs,e);return!r.style&&typeof t.Cesium3DTileStyle=="function"&&(r.style=new t.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),r}return t.createOsmBuildingsAsync(e)}function ds(t){return t.value===qt?`${t.description||t.label}
支持 https://server/{z}/{x}/{y}.png`:t.description||t.label}function hs(t){const e=Vt(t);if(!e.length)return"#37d67a";const a=Fa(e[0]);if(!a)return"#37d67a";const r=a.category;return r==="imagery"?"#5ea1ff":r==="vector"?"#37d67a":r==="terrain"?"#d0a449":r==="label"?"#a78bfa":r==="theme"?"#f59e0b":r==="custom"?"#f472b6":"#37d67a"}function fs(t,e){return String(e||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function lr(t){const e=String(t||"").trim();if(!e)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let a=e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const r=a.match(/\{([a-z0-9])-([a-z0-9])\}/i);let s=[];return r?(s=ms(r[1],r[2]),a=a.replace(r[0],"{s}")):/\{s\}/i.test(a)&&(s=["a","b","c"]),!/\{z\}/.test(a)||!/\{x\}/.test(a)||!/\{y\}/.test(a)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:a,subdomains:s}:ps(a)?{valid:!0,message:"",url:a,subdomains:s}:{valid:!1,message:"URL 格式不合法",url:a,subdomains:s}}function ms(t,e){const a=String(t||"").charCodeAt(0),r=String(e||"").charCodeAt(0);if(!Number.isFinite(a)||!Number.isFinite(r))return[];const s=a<=r?1:-1,i=[];for(let p=a;s>0?p<=r:p>=r;p+=s)i.push(String.fromCharCode(p));return i}function ps(t){if(/^(https?:)?\/\//i.test(t)||t.startsWith("/"))return!0;try{const e=typeof window<"u"?window.location.origin:"http://localhost",a=new URL(t,e);return a.protocol==="http:"||a.protocol==="https:"}catch{return!1}}function gs(t,e){const a=t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${e}_${a||"basemap"}`}function cr(t,e){const a=String(e||"").replace(/[<>&"']/g,"").slice(0,2),r=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${t}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${a}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(r)}`}function vs({getViewer:t,getCesium:e,message:a}){function r(p){const v=t==null?void 0:t(),b=e==null?void 0:e();if(!v||!b)return;const T=typeof p=="number"?p:2;v.camera.flyTo({destination:b.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-b.Math.PI_OVER_TWO,roll:0},duration:T})}function s(){const p=t==null?void 0:t(),v=e==null?void 0:e();!p||!v||p.camera.flyTo({destination:v.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:v.Math.toRadians(0),pitch:v.Math.toRadians(-25),roll:0},duration:3})}async function i(){const p=t==null?void 0:t(),v=e==null?void 0:e();if(!(!p||!v))try{const b=await v.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");p.scene.primitives.add(b),p.flyTo(b,{duration:3,offset:new v.HeadingPitchRange(v.Math.toRadians(0),v.Math.toRadians(-25),b.boundingSphere.radius*2.5)})}catch(b){a.error(`加载模型失败: ${b}`),a.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:r,flyToEverest:s,loadCustomTileset:i}}const ys="tileset.json";let ea=null;async function ur(){if(ea)return ea;const[{decompressBuffer:t},{parseShpPartsToGeoJSON:e}]=await Promise.all([Ca(()=>import("./decompressFile-DiMYlfaO.js").then(a=>a.f),__vite__mapDeps([4,5]),import.meta.url),Ca(()=>import("./shpParser-CwWEzHqq.js").then(a=>a.s),__vite__mapDeps([6,5,7,2,3,8,9,10,11,12,13,14,15]),import.meta.url)]);return ea={decompressBuffer:t,parseShpPartsToGeoJSON:e},ea}function wa(t){const e=t.lastIndexOf(".");return e===-1?"":t.slice(e+1).toLowerCase()}function Lt(t,e,a,r){if(!(!t||!e||!a))try{r==="3dtiles"&&a.boundingSphere?t.flyTo(a,{duration:2,offset:new e.HeadingPitchRange(e.Math.toRadians(0),e.Math.toRadians(-30),a.boundingSphere.radius*2)}):a.entities&&a.entities.values.length>0&&t.flyTo(a,{duration:2})}catch{}}function Rt(t){return URL.createObjectURL(t)}function Je(t){t&&t.startsWith("blob:")&&URL.revokeObjectURL(t)}function xs({getViewer:t,getCesium:e,message:a}){const r=Z([]),s=Z(null);let i=0;async function p(o){const g=e(),d=t();if(!g||!d)throw new Error("Cesium 未初始化");const x=Rt(o);try{const C=await g.GeoJsonDataSource.load(x,{stroke:g.Color.fromCssColorString("#3ddc84"),fill:g.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:g.Color.fromCssColorString("#3ddc84"),markerSize:24}),k=`geojson_${++i}`;C.name=o.name,await d.dataSources.add(C),Lt(d,g,C,"geojson");const j={id:k,name:o.name,type:"geojson",entity:C,blobUrl:x};return r.value=[...r.value,j],a.success(`GeoJSON "${o.name}" 加载成功`),j}catch(C){throw Je(x),C}}async function v(o){const g=e(),d=t();if(!g||!d)throw new Error("Cesium 未初始化");const x=Rt(o);try{const C=await g.KmlDataSource.load(x,{camera:d.scene.camera,canvas:d.scene.canvas}),k=`kml_${++i}`;C.name=o.name,await d.dataSources.add(C),Lt(d,g,C,"kml");const j={id:k,name:o.name,type:"kml",entity:C,blobUrl:x};return r.value=[...r.value,j],a.success(`KML "${o.name}" 加载成功`),j}catch(C){throw Je(x),C}}async function b(o){const g=e(),d=t();if(!g||!d)throw new Error("Cesium 未初始化");const x=Rt(o);try{const C=await g.KmlDataSource.load(x,{camera:d.scene.camera,canvas:d.scene.canvas}),k=`kmz_${++i}`;C.name=o.name,await d.dataSources.add(C),Lt(d,g,C,"kmz");const j={id:k,name:o.name,type:"kmz",entity:C,blobUrl:x};return r.value=[...r.value,j],a.success(`KMZ "${o.name}" 加载成功`),j}catch{return Je(x),await T(o)}}async function T(o){const g=e(),d=t(),x=await o.arrayBuffer(),{decompressBuffer:C}=await ur(),j=(await C(x,o.name)).find(ae=>{var ue;return ae.ext==="kml"||((ue=ae.name)==null?void 0:ue.toLowerCase().endsWith(".kml"))});if(!j)throw new Error("KMZ 压缩包中未找到 KML 文件");let q;typeof j.content=="string"?q=j.content:j.content instanceof ArrayBuffer||j.content instanceof Uint8Array?q=Qr(j.content):q=String(j.content||"");const Q=new Blob([q],{type:"application/vnd.google-earth.kml+xml"}),V=URL.createObjectURL(Q);try{const ae=await g.KmlDataSource.load(V,{camera:d.scene.camera,canvas:d.scene.canvas}),ue=`kmz_${++i}`;ae.name=o.name,await d.dataSources.add(ae),Lt(d,g,ae,"kmz");const ie={id:ue,name:o.name,type:"kmz",entity:ae};return r.value=[...r.value,ie],a.success(`KMZ "${o.name}" 加载成功（手动解压）`),ie}finally{URL.revokeObjectURL(V)}}async function M(o,g=[]){const d=e(),x=t();if(!d||!x)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:C}=await ur(),k={shp:await o.arrayBuffer()};for(const ie of g){const me=wa(ie.name);me==="dbf"&&(k.dbf=await ie.arrayBuffer()),me==="shx"&&(k.shx=await ie.arrayBuffer()),me==="prj"&&(k.prj=await ie.arrayBuffer()),me==="cpg"&&(k.cpg=await ie.arrayBuffer())}const j=await C(k),q=Array.isArray(j)?j:[j],Q=q.reduce((ie,me)=>{var Me;return ie+(((Me=me==null?void 0:me.features)==null?void 0:Me.length)||0)},0),V=q.length===1?q[0]:{type:"FeatureCollection",features:q.flatMap(ie=>(ie==null?void 0:ie.features)||[])},ae=new Blob([JSON.stringify(V)],{type:"application/geo+json"}),ue=URL.createObjectURL(ae);try{const ie=await d.GeoJsonDataSource.load(ue,{stroke:d.Color.fromCssColorString("#ffcc00"),fill:d.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:d.Color.fromCssColorString("#ffcc00"),markerSize:20}),me=`shp_${++i}`;ie.name=o.name,await x.dataSources.add(ie),Lt(x,d,ie,"shp");const Me={id:me,name:o.name,type:"shp",entity:ie};return r.value=[...r.value,Me],a.success(`Shapefile "${o.name}" 加载成功 (${Q} 个要素)`),URL.revokeObjectURL(ue),Me}catch(ie){throw URL.revokeObjectURL(ue),ie}}async function I(o){const g=e(),d=t();if(!g||!d)throw new Error("Cesium 未初始化");const x=Rt(o);let C=null;try{C=await y(o)}catch{}if(C)try{const k=await n(g,d,x,o.name,C),q={id:`gltf_${++i}`,name:o.name,type:"gltf",entity:k,blobUrl:x};return r.value=[...r.value,q],a.success(`3D 模型 "${o.name}" 加载成功 (${C.lng.toFixed(4)}, ${C.lat.toFixed(4)}, ${C.height.toFixed(1)}m)`),q}catch(k){throw Je(x),k}return s.value&&Je(s.value.blobUrl),s.value={file:o,blobUrl:x,name:o.name},{needsCoordInput:!0,file:o}}async function A(o){const g=e(),d=t();if(!s.value)throw new Error("没有等待确认的模型文件");const{blobUrl:x,name:C}=s.value;try{const k=await n(g,d,x,C,o),q={id:`gltf_${++i}`,name:C,type:"gltf",entity:k,blobUrl:x};r.value=[...r.value,q],a.success(`3D 模型 "${C}" 加载成功 (${o.lng.toFixed(4)}, ${o.lat.toFixed(4)}, ${o.height.toFixed(1)}m)`);const Q=g.Cartesian3.fromDegrees(o.lng,o.lat,o.height+500);return d.camera.flyTo({destination:Q,orientation:{heading:g.Math.toRadians(0),pitch:g.Math.toRadians(-30),roll:0},duration:2}),s.value=null,q}catch(k){throw Je(x),s.value=null,k}}function E(){s.value&&(Je(s.value.blobUrl),s.value=null)}async function u(o){const g=e(),d=t();if(!g||!d)throw new Error("Cesium 未初始化");const x=Rt(o);try{const C=await g.CzmlDataSource.load(x),k=`czml_${++i}`;C.name=o.name,await d.dataSources.add(C),Lt(d,g,C,"czml");const j={id:k,name:o.name,type:"czml",entity:C,blobUrl:x};return r.value=[...r.value,j],a.success(`CZML "${o.name}" 加载成功`),j}catch(C){throw Je(x),C}}async function _(o){const g=e(),d=t();if(!g||!d)throw new Error("Cesium 未初始化");const x=Rt(o);try{const C=await g.Cesium3DTileset.fromUrl(x),k=`tileset_${++i}`;d.scene.primitives.add(C);const j={id:k,name:o.name,type:"3dtiles",entity:C,blobUrl:x};return r.value=[...r.value,j],Lt(d,g,C,"3dtiles"),a.success(`3D Tiles "${o.name}" 加载成功`),j}catch(C){throw Je(x),C}}async function y(o){var C,k,j,q,Q;const g=wa(o.name);let d;if(g==="gltf"){const V=await o.text();d=JSON.parse(V)}else{const V=await o.arrayBuffer();d=L(V)}if(!d)return null;if((C=d.extensionsUsed)!=null&&C.includes("CESIUM_RTC")&&((j=(k=d.extensions)==null?void 0:k.CESIUM_RTC)!=null&&j.center)){const V=d.extensions.CESIUM_RTC.center;if(V.length>=3){const ae=e();if(ae){const ue=new ae.Cartesian3(V[0],V[1],V[2]),ie=ae.Cartographic.fromCartesian(ue);return{lng:ae.Math.toDegrees(ie.longitude),lat:ae.Math.toDegrees(ie.latitude),height:ie.height}}}}const x=(q=d.asset)==null?void 0:q.extras;if(x){const V=x.longitude??x.lng,ae=x.latitude??x.lat,ue=x.height??x.altitude??x.alt??0;if(V!=null&&ae!=null)return{lng:Number(V),lat:Number(ae),height:Number(ue)}}if(((Q=d.nodes)==null?void 0:Q.length)>0&&d.nodes[0].matrix){const V=d.nodes[0].matrix;if(V.length>=16){const ae=V[12],ue=V[13],ie=V[14];if(Math.abs(ae)>1e5||Math.abs(ue)>1e5){const me=e();if(me)try{const Me=new me.Cartesian3(ae,ue,ie),Ae=me.Cartographic.fromCartesian(Me);return{lng:me.Math.toDegrees(Ae.longitude),lat:me.Math.toDegrees(Ae.latitude),height:Ae.height}}catch{}}}}return null}function L(o){if(o.byteLength<20)return null;const g=new DataView(o);if(g.getUint32(0,!0)!==1179937895)return null;const x=g.getUint32(12,!0);if(g.getUint32(16,!0)!==1313821514)return null;const k=new Uint8Array(o,20,x),j=new TextDecoder().decode(k);try{return JSON.parse(j)}catch{return null}}async function n(o,g,d,x,C){const{lng:k,lat:j,height:q}=C,Q=o.Cartesian3.fromDegrees(k,j,q),V=new o.HeadingPitchRoll(0,0,0),ae=o.Transforms.localFrameToFixedFrameGenerator("north","west"),ue=await o.Model.fromGltfAsync({url:d,modelMatrix:o.Transforms.headingPitchRollToFixedFrame(Q,V,o.Ellipsoid.WGS84,ae),scale:1,show:!0});return ue.name=x,g.scene.primitives.add(ue),ue}async function f(o){const g=t(),d=e();if(!g||!d)throw a.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const x=wa(o.name);try{switch(x){case"geojson":case"json":return o.name.toLowerCase().includes(ys)?await _(o):await p(o);case"kml":return await v(o);case"kmz":return await b(o);case"shp":return await M(o);case"glb":case"gltf":return await I(o);case"czml":return await u(o);default:throw a.error(`不支持的文件格式: .${x}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${x}`)}}catch(C){throw a.error(`加载 "${o.name}" 失败: ${C.message||C}`),C}}function m(o){const g=r.value.find(x=>x.id===o);if(!g)return;const d=t();if(d){try{g.type==="3dtiles"?d.scene.primitives.remove(g.entity):d.dataSources.remove(g.entity,!0)}catch{}g.blobUrl&&Je(g.blobUrl),r.value=r.value.filter(x=>x.id!==o),a.info(`已移除 "${g.name}"`)}}function w(){var d,x,C,k,j;const o=t();if(!o){r.value=[];return}for(const q of r.value){try{q.type==="3dtiles"?o.scene.primitives.remove(q.entity):o.dataSources.remove(q.entity,!0)}catch{}q.blobUrl&&Je(q.blobUrl)}if(Array.isArray((d=o.dataSources)==null?void 0:d.dataSources)){const q=o.dataSources.dataSources.slice();for(const Q of q)if(Q&&!Q.isBaseLayerPickerDataSource)try{o.dataSources.remove(Q,!0)}catch{}}const g=e();if(g&&Array.isArray((C=(x=o.scene)==null?void 0:x.primitives)==null?void 0:C.primitives)){const q=o.scene.primitives.primitives.slice();for(const Q of q)if(!(!Q||!(Q instanceof g.Cesium3DTileset||Q instanceof g.Model||Q.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(Q.name||"")))))try{o.scene.primitives.remove(Q)}catch{}}r.value=[],E();try{(j=(k=o.scene).requestRender)==null||j.call(k)}catch{}a.info("已清除所有导入数据")}return{loadDataFile:f,loadedDataSources:r,removeDataSource:m,clearAllDataSources:w,pendingGltfFile:s,loadGltfWithUserCoords:A,cancelPendingGltf:E}}const _s="cesium_tool_panel_open";function bs({fluidPanelRef:t,sceneActions:e={},wind:a={},panelStorageKey:r=_s}={}){const s=Z(kt(r,!0)),i=Z({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1,volumetricClouds:!1}),p=Z({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,bsmShadow:!1,shadowResolution:256,maxDistance:$e.medium.maxDistance,stepCount:$e.medium.stepCount});i.value={...i.value,clouds:p.value};const v=Z({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),b=Z({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),T=Ce(()=>{var u,_,y,L,n,f;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:i.value.atmosphere||i.value.fog||i.value.hbao||i.value.tiltShift?"启用":"关闭",statusTone:i.value.atmosphere||i.value.fog||i.value.hbao||i.value.tiltShift?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:i.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:i.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:i.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:i.value.atmosphere}]},{id:"clouds",title:"体积云",description:"云层质量、光照、自阴影和步进参数",status:i.value.volumetricClouds?"启用":"关闭",statusTone:i.value.volumetricClouds?"success":"neutral",controlLayout:"clouds",controls:[{id:"volumetricClouds",label:"云层",type:"toggle",value:i.value.volumetricClouds,tooltip:"Cesium ECEF 球壳体积云。包含向太阳二次步进、SVS Beer Shadow Map、自阴影与薄雾近似。"},{id:"cloudQuality",label:"质量",type:"select",value:p.value.quality,options:Object.entries($e).map(([m,w])=>({value:m,label:w.label})),disabled:!i.value.volumetricClouds},...ws(p.value,!i.value.volumetricClouds)]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(u=a.wind2D)!=null&&u.value?"已加载":"未加载",statusTone:(_=a.wind2D)!=null&&_.value?"success":"neutral",actions:[{id:"load",label:(y=a.wind2D)!=null&&y.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((L=a.wind2D)!=null&&L.value)}],controls:Ss((n=a.windParams)==null?void 0:n.value,!!((f=a.wind2D)!=null&&f.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:b.value.isPicking?"等待选点":b.value.hasFluid?"已创建":"未创建",statusTone:b.value.isPicking?"warning":b.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:b.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:b.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!b.value.hasFluid&&!b.value.isPicking}],controls:Ds(v.value,b.value)}]});De(s,u=>{jt(r,u)});function M({moduleId:u,actionId:_}){var L,n;(n=(L={scene:{home:()=>{var f;return(f=e.flyToHome)==null?void 0:f.call(e)},everest:e.flyToEverest,tileset:e.loadCustomTileset},wind:{load:a.loadSimulatedWind,clear:a.clearWind2D},fluid:{pick:()=>{var f,m;return(m=(f=t==null?void 0:t.value)==null?void 0:f.startPickHeightMap)==null?void 0:m.call(f)},clear:()=>{var f,m;return(m=(f=t==null?void 0:t.value)==null?void 0:f.clearFluid)==null?void 0:m.call(f)}}}[u])==null?void 0:L[_])==null||n.call(L)}function I({moduleId:u,controlId:_,value:y}){var L,n;if((u==="effects"||u==="clouds")&&_ in i.value){i.value={...i.value,[_]:!!y};return}if(u==="clouds"&&Ts(_)){const f=_==="cloudQuality"?{quality:y,previousQuality:p.value.quality}:{[_]:y};p.value=Cs({...p.value,...f}),i.value={...i.value,clouds:p.value};return}if(u==="wind"&&_ in(((L=a.windParams)==null?void 0:L.value)||{})){(n=a.setWindParam)==null||n.call(a,_,y);return}u==="fluid"&&_ in v.value&&(v.value={...v.value,[_]:_==="waterColor"?y:Number(y)})}function A(u){const _=Nt(u==null?void 0:u.waterLevel),y=Nt(u==null?void 0:u.waterLevelMin),L=Nt(u==null?void 0:u.waterLevelMax);b.value={isPicking:!!(u!=null&&u.isPicking),hasFluid:!!(u!=null&&u.hasFluid),selectedText:(u==null?void 0:u.selectedText)||"",waterLevel:_,waterLevelMin:y,waterLevelMax:L},_!==null&&(v.value={...v.value,waterLevel:_})}function E(){var u;(u=a.clearWind2D)==null||u.call(a)}return{toolPanelOpen:s,advancedEffectControls:i,cloudParams:p,fluidParams:v,fluidState:b,toolModules:T,handleToolAction:M,handleToolControlChange:I,handleFluidStateChange:A,cleanupTools:E}}function Ss(t={},e){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:t.speedFactor??1,displayValue:Number(t.speedFactor??1).toFixed(1),disabled:e},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:t.arrowLength??15e3,displayValue:`${Math.round((t.arrowLength??15e3)/1e3)} km`,disabled:e},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:t.trailLength??2e4,displayValue:`${Math.round((t.trailLength??2e4)/1e3)} km`,disabled:e},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:t.alphaFactor??1,displayValue:Number(t.alphaFactor??1).toFixed(2),disabled:e}]}function ws(t={},e){return[{id:"coverage",label:"云量",type:"range",min:.18,max:.82,step:.01,value:t.coverage??.52,displayValue:Number(t.coverage??.52).toFixed(2),disabled:e,tooltip:"覆盖率阈值。数值越大云越少，数值越小云越密。",numberInput:!1},{id:"density",label:"密度",type:"range",min:25e-6,max:18e-5,step:5e-6,value:t.density??9e-5,displayValue:Number(t.density??9e-5).toExponential(2),disabled:e,tooltip:"体积消光密度。数值越大云更厚、更暗，也更影响性能观感。",numberInput:!1},{id:"shadowStrength",label:"阴影",type:"range",min:0,max:1,step:.02,value:t.shadowStrength??.82,displayValue:Number(t.shadowStrength??.82).toFixed(2),disabled:e,numberInput:!1},{id:"multiScattering",label:"散射",type:"range",min:0,max:1,step:.02,value:t.multiScattering??.58,displayValue:Number(t.multiScattering??.58).toFixed(2),disabled:e,numberInput:!1},{id:"beerShadowStrength",label:"远影",type:"range",min:0,max:1,step:.02,value:t.beerShadowStrength??.64,displayValue:Number(t.beerShadowStrength??.64).toFixed(2),disabled:e,tooltip:"Beer Shadow Map 风格的远距离光学深度近似。数值越大，云层背光阴影越明显。",numberInput:!1},{id:"powderStrength",label:"银边",type:"range",min:0,max:1.4,step:.02,value:t.powderStrength??.72,displayValue:Number(t.powderStrength??.72).toFixed(2),disabled:e,numberInput:!1},{id:"hazeStrength",label:"薄霾",type:"range",min:0,max:1,step:.02,value:t.hazeStrength??.38,displayValue:Number(t.hazeStrength??.38).toFixed(2),disabled:e,numberInput:!1},{id:"groundBounceStrength",label:"反照",type:"range",min:0,max:1,step:.02,value:t.groundBounceStrength??.26,displayValue:Number(t.groundBounceStrength??.26).toFixed(2),disabled:e,tooltip:"地面反弹光近似，用于提亮云底。",numberInput:!1},{id:"bsmShadow",label:"BSM",type:"toggle",value:!!t.bsmShadow,disabled:e,tooltip:"Beer Shadow Map 阴影 atlas。用于远距离自阴影，异常时会自动降级关闭。"},{id:"shadowResolution",label:"影图",type:"range",min:128,max:512,step:128,value:t.shadowResolution??256,displayValue:`${Math.round(t.shadowResolution??256)} px`,disabled:e||!t.bsmShadow,tooltip:"BSM 阴影 atlas 单级联分辨率。越高越清晰，也越影响性能。",numberInput:!1},{id:"maxDistance",label:"距离",type:"range",min:12e4,max:9e5,step:1e4,value:t.maxDistance??$e.medium.maxDistance,displayValue:`${Math.round((t.maxDistance??$e.medium.maxDistance)/1e3)} km`,disabled:e,numberInput:!1},{id:"stepCount",label:"步数",type:"range",min:24,max:80,step:1,value:t.stepCount??$e.medium.stepCount,displayValue:String(Math.round(t.stepCount??$e.medium.stepCount)),disabled:e,numberInput:!1}]}function Ts(t){return["cloudQuality","coverage","density","shadowStrength","beerShadowStrength","multiScattering","powderStrength","hazeStrength","groundBounceStrength","bsmShadow","shadowResolution","maxDistance","stepCount"].includes(t)}function Cs(t={}){const e=Object.prototype.hasOwnProperty.call($e,t.quality)?t.quality:"medium",a=$e[e],r=t.quality&&t.quality!==t.previousQuality;return{quality:e,coverage:Ge(Ze(t.coverage,.52),.18,.82),density:Ge(Ze(t.density,9e-5),25e-6,18e-5),shadowStrength:Ge(Ze(t.shadowStrength,.82),0,1),beerShadowStrength:Ge(Ze(t.beerShadowStrength,.64),0,1),multiScattering:Ge(Ze(t.multiScattering,.58),0,1),powderStrength:Ge(Ze(t.powderStrength,.72),0,1.4),hazeStrength:Ge(Ze(t.hazeStrength,.38),0,1),groundBounceStrength:Ge(Ze(t.groundBounceStrength,.26),0,1),bsmShadow:t.bsmShadow===!0,shadowResolution:Math.round(Ge(Ze(t.shadowResolution,256),128,512)/128)*128,maxDistance:Ge(r?a.maxDistance:Ze(t.maxDistance,a.maxDistance),12e4,9e5),stepCount:Math.round(Ge(r?a.stepCount:Ze(t.stepCount,a.stepCount),24,80))}}function Ds(t,e={}){const a=Nt(e.waterLevelMin),r=Nt(e.waterLevelMax),s=a!==null&&r!==null,i=s?Math.min(a,r):0,p=s?Math.max(a,r):0,v=Nt(t.waterLevel),b=s?Ge(v??i,i,p):0,T=s?Math.max((p-i)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:t.threshold,displayValue:Number(t.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:t.blend,displayValue:Number(t.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:t.lightStrength,displayValue:Number(t.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:i,max:p,step:T,value:b,displayValue:s?`${Ms(b)} m`:"先捕捉",disabled:!s,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:t.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function Nt(t){const e=Number(t);return Number.isFinite(e)?e:null}function Ze(t,e){const a=Number(t);return Number.isFinite(a)?a:e}function Ge(t,e,a){return Math.max(e,Math.min(a,t))}function Ms(t){const e=Math.abs(t);return e>=1e3?t.toFixed(1):e>=10?t.toFixed(2):t.toFixed(3)}const{getLayerIdByIndex:Ls,getLayerIndexById:dr}=qr({urlLayerOptions:Vr,getLayerCategoryById:Xr,getLayerGroupById:Yr}),La=-90,ka=1,Sr=5e7;function Ps({getViewer:t,getCesium:e,onCameraViewSync:a,onBasemapRestore:r}={}){const s=Mr(),i=Lr();let p=null;function v(n){return Kr(n,s.query)}function b(){const n=String(v(Ba)||"").trim(),f=Pt(v("lng")),m=Pt(v("lat")),w=Fs(v("z")),o=Jr(n);if(o&&f!==null&&m!==null&&w!==null){const d={lng:f,lat:m,height:w,...o};if(hr(d))return d}const g=Zr(n);return hr(g)?g:f===null||m===null||w===null||f<-180||f>180||m<-90||m>90?null:{lng:f,lat:m,height:w,heading:Pt(v("heading"))??0,pitch:Pt(v("pitch"))??La,roll:Pt(v("roll"))??0}}function T({duration:n=0}={}){const f=t==null?void 0:t(),m=e==null?void 0:e(),w=b();if(!(f!=null&&f.camera)||!m||!w)return!1;const o=m.Cartesian3.fromDegrees(w.lng,w.lat,w.height),g={heading:Ta(m,w.heading??0),pitch:Ta(m,As(w.pitch??La)),roll:Ta(m,w.roll??0)};return Number(n)>0?(f.camera.flyTo({destination:o,orientation:g,duration:Number(n)}),!0):(f.camera.setView({destination:o,orientation:g}),!0)}function M(n){if(!n)return null;const f=dr(n);if(f===null)return null;const m={view:ha,l:String(f)};return L(m),String(f)}function I(){const n=Pt(v("l"));if(n===null)return null;const f=Ls(n);return f&&(r==null||r(f)),f}function A({initialSync:n=!1,getActivePresetId:f}={}){const m=_();if(!(!(m!=null&&m.moveEnd)||p)&&(p=m.moveEnd.addEventListener(()=>{const w=f==null?void 0:f();u({activePresetId:w})}),n)){const w=f==null?void 0:f();u({activePresetId:w})}}function E(){typeof p=="function"&&p(),p=null}function u({activePresetId:n}={}){const f=e==null?void 0:e(),m=_();if(!f||!(m!=null&&m.position))return;const w=f.Cartographic.fromCartesian(m.position);if(!w)return;const o=f.Math.toDegrees(w.longitude),g=f.Math.toDegrees(w.latitude),d=Number(w.height),x=f.Math.toDegrees(Number(m.heading)||0),C=f.Math.toDegrees(Number(m.pitch)||0),k=f.Math.toDegrees(Number(m.roll)||0);if(!Number.isFinite(o)||!Number.isFinite(g)||!Number.isFinite(d))return;const j=Math.max(ka,d),q=jr({heading:x,pitch:C,roll:k});if(!q||q==="0")return;const Q={view:ha,camera:{lng:o,lat:g,height:j,heading:x,pitch:C,roll:k}},V={view:ha,[Ba]:q,lng:fr(o,6),lat:fr(g,6),z:Es(j)},ae=n;if(ae){const ue=dr(ae);ue!==null&&(V.l=String(ue))}L(V),a==null||a(Q)}function _(){var f;const n=t==null?void 0:t();return(n==null?void 0:n.camera)||((f=n==null?void 0:n.scene)==null?void 0:f.camera)||null}function y(n,f){const m=Object.keys(n).filter(o=>n[o]!==void 0&&n[o]!==null&&n[o]!==""),w=Object.keys(f).filter(o=>f[o]!==void 0&&f[o]!==null&&f[o]!=="");return m.length!==w.length?!1:w.every(o=>String(n[o]??"")===String(f[o]??""))}function L(n){const f={...qa(s.query),...n};Pr.forEach(w=>{w in n||delete f[w]}),Object.keys(f).forEach(w=>{const o=f[w];o==null||o===""?delete f[w]:f[w]=String(o)});const m=qa(s.query);y(m,f)||i.replace({path:s.path||"/home",query:f}).catch(()=>{})}return{restoreCameraFromUrl:T,restoreBasemapFromUrl:I,syncBasemapToUrl:M,bindCameraViewSync:A,cleanupCameraViewSync:E}}function Pt(t){if(t==null||typeof t=="string"&&t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function Fs(t){const e=Pt(t);return e===null||e<ka||e>Sr?null:e}function hr(t){if(!t)return!1;const e=Number(t.lng),a=Number(t.lat),r=Number(t.height),s=Number(t.heading),i=Number(t.pitch),p=Number(t.roll);return Number.isFinite(e)&&e>=-180&&e<=180&&Number.isFinite(a)&&a>=-90&&a<=90&&Number.isFinite(r)&&r>=ka&&r<=Sr&&Number.isFinite(s)&&Number.isFinite(i)&&i>=-90&&i<=90&&Number.isFinite(p)}function As(t){const e=Number(t);return Number.isFinite(e)?Math.max(-90,Math.min(90,e)):La}function fr(t,e){const a=Number(t);return Number.isFinite(a)?a.toFixed(e):null}function Es(t){const e=Number(t);return Number.isFinite(e)?e.toFixed(2):null}function Ta(t,e){const a=Number(e);return Number.isFinite(a)?t.Math.toRadians(a):0}const Fe={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},Rs=new Float32Array([-1,-1,1,-1,1,1,-1,1]),Is=new Float32Array([0,0,1,0,1,1,0,1]),ks=new Uint16Array([0,1,2,0,2,3]);function St(t,e,a){return Math.max(e,Math.min(a,t))}function de(t,e){const a=Number(t);return Number.isFinite(a)?a:e}function Os(t,e){const a=e.getParameter(e.MAX_TEXTURE_SIZE),r=Math.min(2048,a),s=Math.max(1,Math.floor(t)),i=Math.sqrt(s),p=Math.log2(i),v=Number.isFinite(p)?Math.round(p):4;let b=Math.pow(2,v);return b=St(b,16,r),b}function Ns(t){const e=t*t,a=new Float32Array(e*4);for(let r=0;r<e;r+=1){const s=r*4;a[s]=Math.random(),a[s+1]=Math.random(),a[s+2]=Math.random(),a[s+3]=Math.random()}return a}function zs(t){return new Float32Array(t*t*4)}function Bs(t,e,a,r,s){const i=e.createTexture();if(!i)throw new Error("Failed to create wind atlas texture.");e.bindTexture(e.TEXTURE_2D,i),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,a,r,0,e.RGBA,e.FLOAT,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null);let p=!1;return{_context:t,_texture:i,_target:e.TEXTURE_2D,_width:a,_height:r,destroy(){p||(e.deleteTexture(i),p=!0)}}}class Us{constructor(e,a={}){if(!e||!e.scene||!e.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=e,this._scene=e.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=a.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const r={...Fe,...a};this.speedFactor=de(r.speedFactor,Fe.speedFactor),this.cullSpeedMin=de(r.cullSpeedMin,Fe.cullSpeedMin),this.cullSpeedMax=de(r.cullSpeedMax,Fe.cullSpeedMax),this.windSpeedMin=de(r.windSpeedMin,Fe.windSpeedMin),this.windSpeedMax=de(r.windSpeedMax,Fe.windSpeedMax),this.arrowLength=de(r.arrowLength,Fe.arrowLength),this.trailLength=de(r.trailLength,Fe.trailLength),this.decaySpeed=de(r.decaySpeed,Fe.decaySpeed),this.alphaFactor=de(r.alphaFactor,Fe.alphaFactor),this.maxWindSpeed=de(r.maxWindSpeed,Fe.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=de(a.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(e){if(!e||typeof e!="object")throw new Error("Wind2D.loadData requires a valid data object.");const a=de(e.longitude,NaN),r=de(e.latitude,NaN),s=Array.isArray(e.altitude)?e.altitude:[],i=Array.isArray(e.sizeMesh)?e.sizeMesh:[],p=Array.isArray(e.count)?e.count:[],v=Array.isArray(e.hspeed)?e.hspeed:[],b=Array.isArray(e.hdir)?e.hdir:[],T=Array.isArray(e.vspeed)?e.vspeed:[];if(!Number.isFinite(a)||!Number.isFinite(r))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const M=s.length;if(M<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(i.length!==M||p.length!==M)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const I=p.map(g=>Math.max(1,Math.floor(de(g,1)))),A=i.map(g=>Math.max(1,de(g,1))),E=s.map(g=>de(g,0)),u=I.reduce((g,d)=>g+d*d,0);if(v.length<u||b.length<u||T.length<u)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=M,this.visibleLayerMin=0,this.visibleLayerMax=M-1,this._altitudes=E.slice(),this._maxNx=Math.max(...I),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*M;const _=new Float32Array(this._atlasWidth*this._atlasHeight*4);let y=0;for(let g=0;g<M;g+=1){const d=I[g],x=d;for(let C=0;C<x;C+=1)for(let k=0;k<d;k+=1){const j=y+C*d+k,q=((g*this._maxNy+C)*this._atlasWidth+k)*4,Q=Number(v[j]),V=Number(b[j]),ae=Number(T[j]);if(!(Number.isFinite(Q)&&Number.isFinite(V))){_[q]=0,_[q+1]=0,_[q+2]=0,_[q+3]=0;continue}const ie=V*Math.PI/180;_[q]=Q*Math.sin(ie),_[q+1]=Q*Math.cos(ie),_[q+2]=Number.isFinite(ae)?ae:0,_[q+3]=1}y+=d*x}this._createOrReplaceWindAtlasTexture(_);const L=Math.max(...A),n=this._maxNx*L,f=n/2/111320,m=r*Math.PI/180,w=Math.max(1e-6,Math.abs(Math.cos(m))),o=n/2/(111320*w);this._bounds={minLon:a-o,maxLon:a+o,minLat:r-f,maxLat:r+f,minHeight:Math.min(...E),maxHeight:Math.max(...E)},this._dataPointCount=u,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(e){const a=Math.max(1,Math.floor(de(e,1))),r=Os(a,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&r===this._particleTextureSize||(this._particleTextureSize=r,this._particleCount=r*r,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(e){const a=St(de(e,this.particleDensity),.05,10);if(this.particleDensity=a,this._dataPointCount<=0)return;const r=Math.max(1,Math.floor(this._dataPointCount*a));this.setParticleCount(r)}setBounds(e,a,r,s){const i=de(e,NaN),p=de(a,NaN),v=de(r,NaN),b=de(s,NaN);if(!Number.isFinite(i)||!Number.isFinite(p)||!Number.isFinite(v)||!Number.isFinite(b))return;const T=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};T.minLon=Math.min(i,p),T.maxLon=Math.max(i,p),T.minLat=Math.min(v,b),T.maxLat=Math.max(v,b),this._bounds=T,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const e=(this._bounds.minLon+this._bounds.maxLon)*.5,a=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(e,a,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(e){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const s=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[s],this._updateCommand.execute(this._context,e?e.passState:void 0),this._particleState=s,this._drawCommand.modelMatrix=this._modelMatrix,e&&Array.isArray(e.commandList)&&e.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(e){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=Bs(this._context,this._gl,this._atlasWidth,this._atlasHeight,e)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const e=this._Cesium,a=this._particleTextureSize,r=Ns(a),s=zs(a);for(let i=0;i<2;i+=1){this._particlePositionTextures[i]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:r},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[i]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:s},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._framebuffers[i]=new e.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[i],this._velocityTextures[i]],destroyAttachments:!1});const p=this._framebuffers[i]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,p),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._particlePositionTextures[e]&&(this._particlePositionTextures[e].destroy(),this._particlePositionTextures[e]=null),this._velocityTextures[e]&&(this._velocityTextures[e].destroy(),this._velocityTextures[e]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const e=this._Cesium,a=e.Buffer.createVertexBuffer({context:this._context,typedArray:Rs,usage:e.BufferUsage.STATIC_DRAW}),r=e.Buffer.createVertexBuffer({context:this._context,typedArray:Is,usage:e.BufferUsage.STATIC_DRAW}),s=e.Buffer.createIndexBuffer({context:this._context,typedArray:ks,usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:a,componentsPerAttribute:2},{index:1,vertexBuffer:r,componentsPerAttribute:2}],indexBuffer:s})}_buildParticleVertexArray(){const e=this._Cesium,a=new Float32Array(this._drawVertexCount);for(let r=0;r<a.length;r+=1)a[r]=r;this._particleVertexBuffer=e.Buffer.createVertexBuffer({context:this._context,typedArray:a,usage:e.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const e=this._Cesium,a=`#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}`,r=`#version 300 es
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
}`;this._updateProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:a,fragmentShaderSource:r,attributeLocations:{position:0,textureCoordinates:1}})}_buildDrawProgram(){const e=this._Cesium,a=`#version 300 es
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
}`,r=`#version 300 es
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
}`;this._drawProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:a,fragmentShaderSource:r,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const e=this._Cesium,a=e.RenderState.fromCache({viewport:new e.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:a,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:e.Pass.OPAQUE})}_buildDrawCommand(){const e=this._Cesium,a=e.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:e.BlendingState.ALPHA_BLEND});this._drawCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:a,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:e.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const e=St(Math.floor(de(this.visibleLayerMin,0)),0,this._layerCount-1),a=St(Math.floor(de(this.visibleLayerMax,this._layerCount-1)),e,this._layerCount-1);return{min:e,max:a}}_normalizeSpeedRange(e,a){const r=Math.max(1e-4,de(this.maxWindSpeed,Fe.maxWindSpeed)),s=St(de(e,0)/r,0,1),i=St(de(a,r)/r,0,1);return{min:Math.min(s,i),max:Math.max(s,i)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>de(this.speedFactor,Fe.speedFactor),maxWindSpeed:()=>Math.max(1e-4,de(this.maxWindSpeed,Fe.maxWindSpeed)),decaySpeed:()=>St(de(this.decaySpeed,Fe.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>de(this.arrowLength,Fe.arrowLength),trailLength:()=>de(this.trailLength,Fe.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>St(de(this.alphaFactor,Fe.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Hs({getViewer:t,getCesium:e,message:a}){const r=Z(null),s=Z({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function i(){var M,I;const T=t==null?void 0:t();if(r.value){try{(I=(M=T==null?void 0:T.scene)==null?void 0:M.primitives)==null||I.remove(r.value)}catch{}r.value.destroy(),r.value=null}}function p(){const T=t==null?void 0:t(),M=e==null?void 0:e();if(!T||!M){a.error("Cesium 尚未初始化");return}i();const I=Ws(M);r.value=new Us(T,{maxWindSpeed:20,cesium:M,speedFactor:s.value.speedFactor,arrowLength:s.value.arrowLength,trailLength:s.value.trailLength,alphaFactor:s.value.alphaFactor}),r.value.loadData(I),T.scene.primitives.add(r.value),r.value.flyTo(),a.success("风场加载成功，可通过下方滑块调节样式")}function v(){r.value&&(r.value.speedFactor=s.value.speedFactor,r.value.arrowLength=s.value.arrowLength,r.value.trailLength=s.value.trailLength,r.value.alphaFactor=s.value.alphaFactor)}function b(T,M){return T in s.value?(s.value={...s.value,[T]:Number(M)},v(),!0):!1}return{wind2D:r,windParams:s,clearWind2D:i,loadSimulatedWind:p,setWindParam:b}}function Ws(t){const s=[0,2e3,5e3,1e4,15e3],i=[3e4,3e4,25e3,25e3,2e4],p=[30,30,25,25,20],v=p.reduce((A,E)=>A+E*E,0),b=new Array(v),T=new Array(v),M=new Array(v);let I=0;for(let A=0;A<5;A++){const E=p[A],u=p[A],_=i[A];for(let y=0;y<u;y++)for(let L=0;L<E;L++){const n=I+y*E+L,f=(L-E/2)*(_/111320),m=(y-u/2)*(_/111320/Math.cos(t.Math.toRadians(35))),o=Math.atan2(m,f)+Math.PI/2+.2*Math.sin(L*.5)*Math.cos(y*.5);T[n]=t.Math.toDegrees(o)%360;const g=Math.sqrt(f*f+m*m),x=Math.max(0,1-g/15);b[n]=(5+A*2)*x+2*Math.random(),M[n]=.5*Math.sin(L*.3)*Math.cos(y*.3)}I+=E*u}return{longitude:104,latitude:35,altitude:s,sizeMesh:i,count:p,hspeed:b,hdir:T,vspeed:M}}const Gs={key:3,class:"drag-overlay"},$s={class:"map-controls-group"},js={class:"mouse-position-content"},qs={__name:"CesiumContainer",emits:["view-sync"],setup(t,{emit:e}){let a=null,r=null,s=!1;const i=Pa(),p=e,v=Z(!1),b=Z(null),T=Z(Er()),M=()=>r,I=()=>a||window.Cesium,A=()=>T.value.tiandituTk,E=()=>T.value.cesiumIonToken,u=ss({getViewer:M,getCesium:I,message:i,backendBaseUrl:Ar,tiandituToken:A,cesiumIonToken:E}),{activeBasemap:_,activeTerrain:y,customXyzBasemapUrl:L,basemapOptions:n,terrainOptions:f,overlayOptions:m,createImageryProviderViewModels:w,createTerrainProviderViewModels:o,getSelectedImageryProviderViewModel:g,getSelectedTerrainProviderViewModel:d,bindLayerPickerStateSync:x,addBaseImageryLayers:C,initCustomTerrain:k,handleOverlayToggle:j,handleCustomBasemapSubmit:q,cleanupLayers:Q}=u;De(_,(O,X)=>{!O||O===X||et(O)});const{coordinateDisplay:V,setupInteractions:ae,cleanupInteractions:ue}=Qo({getViewer:M,getCesium:I}),{installCreditHider:ie,cleanupCreditHider:me}=Zo({getViewer:M}),{restoreCameraFromUrl:Me,restoreBasemapFromUrl:Ae,syncBasemapToUrl:et,bindCameraViewSync:je,cleanupCameraViewSync:tt}=Ps({getViewer:M,getCesium:I,onCameraViewSync:O=>p("view-sync",O),onBasemapRestore:O=>{O&&_.value!==O&&(_.value=O)}}),W=vs({getViewer:M,getCesium:I,message:i}),{flyToHome:U}=W,R=Hs({getViewer:M,getCesium:I,message:i}),ee=xs({getViewer:M,getCesium:I,message:i}),ge=Ce(()=>ee.loadedDataSources.value),be=Ce(()=>ee.pendingGltfFile.value),qe=Z(!1);function wt(O){qe.value=!0,O.dataTransfer&&(O.dataTransfer.dropEffect="copy")}function Tt(O){const X=O==null?void 0:O.relatedTarget,ne=O==null?void 0:O.currentTarget;X instanceof Node&&ne instanceof Node&&ne.contains(X)||(qe.value=!1)}async function at(O){var ne;if(qe.value=!1,!v.value)return;const X=(ne=O.dataTransfer)==null?void 0:ne.files;if(!(!X||X.length===0))for(const se of X)try{await ee.loadDataFile(se)}catch{}}const{toolPanelOpen:Ve,advancedEffectControls:Xe,fluidParams:pt,toolModules:Ye,handleToolAction:Ct,handleToolControlChange:Dt,handleFluidStateChange:gt,cleanupTools:lt}=bs({fluidPanelRef:b,sceneActions:W,wind:R});async function Ee(){s=!1,yr("正在初始化 3D 场景...");try{let O=0,X=1;for(;O<X;)try{if(T.value=await Fr({silent:!1,force:O>0}),X=Math.max(X,Array.isArray(T.value.tiandituTokens)?T.value.tiandituTokens.length:1,Array.isArray(T.value.cesiumIonTokens)?T.value.cesiumIonTokens.length:1,1),a=await Ho({ionToken:E()}),s||!a||!document.getElementById("cesiumContainer"))return;ct(),ae();const ne=C(),se=await k();if(s){Ne();return}if(v.value=!0,je({initialSync:!1,getActivePresetId:()=>_.value}),Ae(),ne&&se){i.success("天地图基础影像与地形加载成功。");return}const ze=ne?{switched:!1}:fa("tianditu_tk"),Pe=se?{switched:!1}:fa("cesium_ion_token");if(!(ze.switched||Pe.switched)){i.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}T.value=Pe.switched?Pe.tokens:ze.tokens,Ne(),O+=1,i.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(ne){const se=fa("cesium_ion_token");if(!se.switched)throw ne;T.value=se.tokens,Ne(),O+=1,i.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}i.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(O){i.error("Cesium 运行时加载失败",O),i.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{xr()}}function Ne(){if(v.value=!1,tt(),ue(),Q(),me(),!!r){try{r.destroy()}catch{}r=null}}function ct(){var se;const O=typeof a.Map=="function"?a.Map:a.Viewer,X=w(),ne=o();r=new O("cesiumContainer",{baseLayerPicker:!0,geocoder:((se=a.IonGeocodeProviderType)==null?void 0:se.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:X,selectedImageryProviderViewModel:g(X),terrainProviderViewModels:ne,selectedTerrainProviderViewModel:d(ne),shouldAnimate:!0}),r.scene.debugShowFramesPerSecond=!0,r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,Vo(r,a),ln(r),ie(),x(),Me({duration:0})||U(0)}gr(()=>{Ee()});async function vt({files:O}){for(const X of O)try{await ee.loadDataFile(X)}catch{}}function S({id:O}){ee.removeDataSource(O)}function P(){ee.clearAllDataSources()}async function G(O){try{await ee.loadGltfWithUserCoords(O)}catch{}}function K(){ee.cancelPendingGltf()}return vr(()=>{if(s=!0,v.value=!1,tt(),ue(),lt(),Q(),me(),ee.clearAllDataSources(),r){try{r.destroy()}catch{}r=null}}),(O,X)=>{var ne;return J(),re(mt,null,[F("div",{id:"cesiumContainer",class:"cesium-container",onDragover:Ot(wt,["prevent"]),onDragleave:Ot(Tt,["prevent"]),onDrop:Ot(at,["prevent"])},null,32),v.value?(J(),Qe(Ft(jn),{key:0,headless:"","get-viewer":M,"get-cesium":I,controls:ce(Xe)},null,8,["controls"])):pe("",!0),v.value?(J(),Qe(Ft(zo),{key:1,ref_key:"fluidPanelRef",ref:b,headless:"","get-viewer":M,"get-cesium":I,params:ce(pt),onStateChange:ce(gt)},null,40,["params","onStateChange"])):pe("",!0),v.value?(J(),Qe(co,{key:2,open:ce(Ve),"onUpdate:open":X[0]||(X[0]=se=>da(Ve)?Ve.value=se:null),"active-basemap":ce(_),"onUpdate:activeBasemap":X[1]||(X[1]=se=>da(_)?_.value=se:null),"active-terrain":ce(y),"onUpdate:activeTerrain":X[2]||(X[2]=se=>da(y)?y.value=se:null),"basemap-options":ce(n),"terrain-options":ce(f),"overlay-options":ce(m),"custom-basemap-url":ce(L),modules:ce(Ye),"loaded-data-sources":ge.value,onModuleAction:ce(Ct),onControlChange:ce(Dt),onOverlayToggle:ce(j),onCustomBasemapSubmit:ce(q),onDataImport:vt,onDataRemove:S,onDataClearAll:P},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):pe("",!0),_e(Co,{visible:!!be.value,"file-name":((ne=be.value)==null?void 0:ne.name)||"",onConfirm:G,onCancel:K},null,8,["visible","file-name"]),qe.value&&v.value?(J(),re("div",Gs,[_e(ce(Da),{size:48,"stroke-width":"1.5"}),X[4]||(X[4]=F("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),X[5]||(X[5]=F("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):pe("",!0),F("div",$s,[F("div",js,he(ce(V)),1),X[7]||(X[7]=F("div",{class:"divider"},null,-1)),F("button",{class:"home-btn",title:"回到初始位置",onClick:X[3]||(X[3]=(...se)=>ce(U)&&ce(U)(...se))},[...X[6]||(X[6]=[F("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[F("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},sl=zt(qs,[["__scopeId","data-v-4fae6931"]]);export{sl as default};
