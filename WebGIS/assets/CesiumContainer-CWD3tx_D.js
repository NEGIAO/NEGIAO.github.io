const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cesiumFxRuntime-BqG_P5BD.js","./vendor-echarts-all-DPXvW73w.js","./vendor-libs-Dl00jiqA.js","./vendor-vue-CmuMwCC6.js","./decompressFile-DiMYlfaO.js","./vendor-runtime-Dp1pzeXC.js","./shpParser-HlIsEZGg.js","./vendor-proj4-D7a973Zq.js","./index-BztcNvMS.js","./vendor-ol-all-DDEuVH7L.js","./vendor-geotiff-D7SPLrNz.js","./vendor-lerc-9DOY5ikF.js","./vendor-jszip-BOwK5y_4.js","./vendor-ol-all-BtPuoxOl.css","./vendor-axios-Bdz_Fv8M.js","./index-DduL8x4O.css"])))=>i.map(i=>d[i]);
var Xa=Object.defineProperty;var Ya=(t,e,a)=>e in t?Xa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var ha=(t,e,a)=>Ya(t,typeof e!="symbol"?e+"":e,a);import{C as Ha,o as Wa,w as Te,d as j,c as K,f as g,t as de,G as be,W as St,X as yt,g as he,r as ee,P as Ka,a as we,u as se,F as ke,e as Ke,n as De,x as $e,S as mt,I as Nt,i as pt,H as Ie,O as Ga,q as Le,z as Za,v as Ja,B as Qa,A as er,a4 as Wt}from"./vendor-vue-CmuMwCC6.js";import{_ as Pt,h as ra,R as $a,Q as qa,e as Gt,f as fa,T as tr,v as ar,y as $t,P as rr,x as nr}from"./index-BztcNvMS.js";import{_ as Qt}from"./vendor-runtime-Dp1pzeXC.js";import{af as qt,ag as jt,ah as ir,X as ma,e as Vt,ai as ea,aj as Ft,ac as pa,ak as or,al as ja,am as ga,H as va,T as Xt,a2 as sr,an as Ot,ao as lr,ap as cr,aq as ur,q as dr,ar as hr,o as fr,as as At,G as ya,at as mr}from"./vendor-libs-Dl00jiqA.js";import{F as na,G as xa,v as Lt,B as pr,H as gr,I as vr,J as yr,K as xr,L as _r,M as _a,N as br,O as Sr,P as wr}from"./HomeView-CNvLJzEh.js";import{d as Tr}from"./vectorUtils-Ds50OJUZ.js";import"./vendor-ol-all-DDEuVH7L.js";import"./vendor-geotiff-D7SPLrNz.js";import"./vendor-lerc-9DOY5ikF.js";import"./vendor-jszip-BOwK5y_4.js";import"./vendor-proj4-D7a973Zq.js";import"./vendor-axios-Bdz_Fv8M.js";import"./textDecoder-CXjJWEkX.js";const Ht=new Map;function Cr(t){const e=Ht.get(t);e&&e.abort();const a=new AbortController;return Ht.set(t,a),a}function Mr(){Ht.forEach(t=>{t.abort()}),Ht.clear()}function Dr(t){const e=t.match(/\{([a-z0-9])-([a-z0-9])\}/i);if(!e)return/\{s\}/i.test(t)?{url:t,subdomains:["a","b","c"]}:{url:t,subdomains:[]};const a=e[1].charCodeAt(0),r=e[2].charCodeAt(0),l=[];for(let o=a;o<=r;o++)l.push(String.fromCharCode(o));return{url:t.replace(e[0],"{s}"),subdomains:l}}function Lr(t){return t.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{-\s*y\s*\}/gi,"{reverseY}").replace(/\{y\}/gi,"{y}").replace(/\{s\}/gi,"{s}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/%7C/gi,"|").replace(/%2C/gi,",")}function Pr(t,e){let a=t;return e.tiandituTk&&(a=a.replace(/\{tiandituTk\}/g,e.tiandituTk)),e.customUrl&&(a=a.replace(/\{customUrl\}/g,e.customUrl)),a}function Fr(t,e,a){if(!t||!e)return null;const l=Cr(e.id).signal,{serviceType:o}=e;let p=Pr(e.url,a);if(o==="custom"){if(!a.customUrl)return null;p=a.customUrl}if(e.nonStandardAdapter||o==="vector-tile")return null;const{subdomains:_}=Dr(p),w=Lr(p),C=e.subdomains||_,R=e.maxZoom||18;try{let F=null;if(l.aborted)return null;switch(o){case"wms":{if(typeof t.WebMapServiceImageryProvider!="function")return null;const k=e.wms;if(!(k!=null&&k.layers))return null;F=new t.WebMapServiceImageryProvider({url:w||e.url,layers:k.layers,parameters:{version:k.version||"1.1.1",srs:k.srs||"EPSG:3857",format:k.format||"image/png",styles:k.styles||"",transparent:k.transparent!==!1}});break}case"wmts":{if(typeof t.WebMapTileServiceImageryProvider!="function")return null;const k=e.wmts;if(!(k!=null&&k.layer)||!k.matrixSet)return null;F=new t.WebMapTileServiceImageryProvider({url:w||e.url,layer:k.layer,style:k.style||"default",format:k.format||"image/png",tileMatrixSetID:k.matrixSet,maximumLevel:R});break}case"osm":{typeof t.OpenStreetMapImageryProvider=="function"?F=new t.OpenStreetMapImageryProvider({maximumLevel:R}):F=new t.UrlTemplateImageryProvider({url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maximumLevel:R});break}default:{if(!w||!(w.includes("{z}")||w.includes("{x}")||w.includes("{y}")||w.includes("{reverseY}")))return null;F=new t.UrlTemplateImageryProvider({url:w,subdomains:C.length>0?C:void 0,tilingScheme:new t.WebMercatorTilingScheme,maximumLevel:R,enablePickFeatures:!1});break}}if(l.aborted){if(F&&typeof F.destroy=="function")try{F.destroy()}catch{}return null}return F&&(F._descriptorId=e.id),F}catch{return null}}function Ar(t,e,a){if(!t||!Array.isArray(e))return[];const r=[];for(const l of e){const o=na(l);if(!o)continue;const p=Fr(t,o,a);p&&r.push(p)}return r}function Er(t){var r;const e=t==null?void 0:t.scene,a=e==null?void 0:e.globe;!e||!a||(a.enableLighting=!0,e.sun&&(e.sun.show=!0),e.moon&&(e.moon.show=!0),e.skyBox&&(e.skyBox.show=!0),(r=e.requestRender)==null||r.call(e))}function Rr(t,e){var o;const a=t==null?void 0:t.scene,r=a==null?void 0:a.globe;if(!a||!r)return;zr(a,e),Nr(a),r.enableLighting=!0,r.showGroundAtmosphere=!0,ge(r,"dynamicAtmosphereLighting",!0),ge(r,"dynamicAtmosphereLightingFromSun",!0),ge(r,"atmosphereLightIntensity",11.5),ge(r,"atmosphereHueShift",-.015),ge(r,"atmosphereSaturationShift",.08),ge(r,"atmosphereBrightnessShift",.02),ge(r,"lightingFadeInDistance",15e6),ge(r,"lightingFadeOutDistance",22e6),ge(r,"nightFadeInDistance",9e6),ge(r,"nightFadeOutDistance",16e6),Et(e,r,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Et(e,r,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ge(r,"atmosphereRayleighScaleHeight",1e4),ge(r,"atmosphereMieScaleHeight",3200),ge(r,"atmosphereMieAnisotropy",.92),!a.skyAtmosphere&&(e!=null&&e.SkyAtmosphere)&&(a.skyAtmosphere=Br(e));const l=a.skyAtmosphere;l&&(l.show=!0,ge(l,"perFragmentAtmosphere",!0),ge(l,"dynamicAtmosphereLighting",!0),ge(l,"dynamicAtmosphereLightingFromSun",!0),ge(l,"hueShift",-.025),ge(l,"saturationShift",.08),ge(l,"brightnessShift",.03),ge(l,"atmosphereLightIntensity",12),Et(e,l,"atmosphereRayleighCoefficient",55e-7,13e-6,284e-7),Et(e,l,"atmosphereMieCoefficient",21e-6,21e-6,21e-6),ge(l,"atmosphereRayleighScaleHeight",1e4),ge(l,"atmosphereMieScaleHeight",3200),ge(l,"atmosphereMieAnisotropy",.92)),a.sun&&(a.sun.show=!0),a.moon&&(a.moon.show=!0),a.skyBox&&(a.skyBox.show=!0),"sunBloom"in a&&(a.sunBloom=!0),"highDynamicRange"in a&&(a.highDynamicRange=!0),Or(a),(o=a.requestRender)==null||o.call(a)}function kr(t){var l;const e=t==null?void 0:t.scene,a=e==null?void 0:e.globe;if(!e||!a)return null;const r=(l=e.postProcessStages)==null?void 0:l.bloom;return{scene:rt(e,["highDynamicRange","sunBloom","light"]),fog:rt(e.fog,["enabled","density","minimumBrightness","screenSpaceErrorFactor","visualDensityScalar"]),globe:rt(a,["enableLighting","showGroundAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","atmosphereLightIntensity","atmosphereHueShift","atmosphereSaturationShift","atmosphereBrightnessShift","lightingFadeInDistance","lightingFadeOutDistance","nightFadeInDistance","nightFadeOutDistance","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),skyAtmosphereExisted:!!e.skyAtmosphere,sky:rt(e.skyAtmosphere,["show","perFragmentAtmosphere","dynamicAtmosphereLighting","dynamicAtmosphereLightingFromSun","hueShift","saturationShift","brightnessShift","atmosphereLightIntensity","atmosphereRayleighCoefficient","atmosphereMieCoefficient","atmosphereRayleighScaleHeight","atmosphereMieScaleHeight","atmosphereMieAnisotropy"]),sun:rt(e.sun,["show"]),moon:rt(e.moon,["show"]),skyBox:rt(e.skyBox,["show"]),bloom:{props:rt(r,["enabled"]),uniforms:rt(r==null?void 0:r.uniforms,["contrast","brightness","delta","sigma","stepSize"])}}}function Ir(t,e,a){var p,_,w,C;if(!a)return;const r=t==null?void 0:t.scene,l=r==null?void 0:r.globe;if(!r||!l)return;nt(r,a.scene,e),nt(r.fog,a.fog,e),nt(l,a.globe,e),nt(r.sun,a.sun,e),nt(r.moon,a.moon,e),nt(r.skyBox,a.skyBox,e),r.skyAtmosphere&&(nt(r.skyAtmosphere,a.sky,e),a.skyAtmosphereExisted||(r.skyAtmosphere.show=!1));const o=(p=r.postProcessStages)==null?void 0:p.bloom;nt(o,(_=a.bloom)==null?void 0:_.props,e),nt(o==null?void 0:o.uniforms,(w=a.bloom)==null?void 0:w.uniforms,e),(C=r.requestRender)==null||C.call(r)}function zr(t,e){var a;if(e!=null&&e.SunLight)try{t.light=new e.SunLight({color:(a=e.Color)==null?void 0:a.WHITE,intensity:2.35})}catch{t.light=new e.SunLight}ge(t.light,"intensity",2.35)}function Nr(t){const e=t==null?void 0:t.fog;e&&(e.enabled=!0,ge(e,"density",12e-5),ge(e,"minimumBrightness",.035),ge(e,"screenSpaceErrorFactor",2),ge(e,"visualDensityScalar",.16))}function Or(t){var a;const e=(a=t==null?void 0:t.postProcessStages)==null?void 0:a.bloom;e&&(e.enabled=!0,e.uniforms&&(ge(e.uniforms,"contrast",128),ge(e.uniforms,"brightness",-.18),ge(e.uniforms,"delta",1),ge(e.uniforms,"sigma",2.5),ge(e.uniforms,"stepSize",4.2)))}function Br(t){var e;try{return new t.SkyAtmosphere((e=t.Ellipsoid)==null?void 0:e.WGS84)}catch{return new t.SkyAtmosphere}}function ge(t,e,a){t&&e in t&&(t[e]=a)}function Et(t,e,a,r,l,o){!e||!(a in e)||!(t!=null&&t.Cartesian3)||(e[a]=new t.Cartesian3(r,l,o))}function rt(t,e){return t?e.reduce((a,r)=>(r in t&&(a[r]=Ur(t[r])),a),{}):{}}function nt(t,e={},a){!t||!e||Object.entries(e).forEach(([r,l])=>{r in t&&(t[r]=Hr(l,a))})}function Ur(t){return t&&typeof t=="object"&&"x"in t&&"y"in t&&"z"in t?{__type:"Cartesian3",x:t.x,y:t.y,z:t.z}:t}function Hr(t,e){return(t==null?void 0:t.__type)==="Cartesian3"&&(e!=null&&e.Cartesian3)?new e.Cartesian3(t.x,t.y,t.z):t}const Wr=`#version 300 es
in vec2 position;
out vec2 v_uv;

void main() {
    v_uv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
}
`,Gr=`#version 300 es
precision highp float;

in vec2 v_uv;

uniform vec4 u_shadowAtlas;       // x=cascade count, y=resolution, z=bottom radius, w=top radius
uniform vec4 u_shadowParams;      // x=density, y=coverage, z=step count, w=time
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
    float stepSize = (farT - nearT) / float(stepCount);
    float jitter = hash31(vec3(gl_FragCoord.xy, fract(u_shadowParams.w))) * stepSize;
    float t = nearT + jitter;
    float opticalDepth = 0.0;
    float firstDepth = -1.0;
    float maxDensity = 0.0;

    for (int i = 0; i < 48; i++) {
        if (i >= stepCount || t > farT) break;

        vec3 position = rayOrigin + rayDirection * t;
        float radius = length(position);
        float heightFraction = saturate((radius - u_shadowAtlas.z) / max(u_shadowAtlas.w - u_shadowAtlas.z, 1.0));
        float density = sampleCloudDensity(position, heightFraction);
        if (density > 0.001) {
            if (firstDepth < 0.0) firstDepth = t;
            opticalDepth += density * stepSize * u_shadowParams.x;
            maxDensity = max(maxDensity, density);
        }

        t += stepSize;
    }

    float normalizedFront = firstDepth < 0.0 ? 0.0 : saturate((firstDepth - nearT) / max(farT - nearT, 1.0));
    out_FragColor = vec4(normalizedFront, opticalDepth, maxDensity, 1.0);
}
`,wt={cascadeCount:3,resolution:256,splitLambda:.58,near:1500,far:72e4};class $r{constructor(e,a={}){var r;if(!((r=e==null?void 0:e.scene)!=null&&r.context))throw new Error("CloudShadowResources requires a valid Cesium Viewer instance.");this.viewer=e,this.scene=e.scene,this.context=e.scene.context,this.Cesium=a.cesium||globalThis.Cesium,this.options=Xr(a),this.enabled=a.enabled!==!1,this.status={ready:!1,frameNumber:-1,width:0,height:0,pixelDatatype:"UNSIGNED_BYTE"},this.cascadeSplits=new Float32Array(this.options.cascadeCount),this.cascadeMatrices=Array.from({length:this.options.cascadeCount},()=>new this.Cesium.Matrix4),this.inverseCascadeMatrices=Array.from({length:this.options.cascadeCount},()=>new this.Cesium.Matrix4),this._textures=[null,null],this._framebuffers=[null,null],this._clearCommand=null,this._drawCommand=null,this._shaderProgram=null,this._quadVertexArray=null,this._viewport=null,this._activeIndex=0,this._destroyed=!1,this._lastCameraPosition=new this.Cesium.Cartesian3,this._lastSunDirection=new this.Cesium.Cartesian3,this._uniformScratch={atlas:new this.Cesium.Cartesian4,params:new this.Cesium.Cartesian4,sun:new this.Cesium.Cartesian3,inverseMatrices:Array.from({length:4},()=>new this.Cesium.Matrix4)},this._createTargets(),this._createCommands(),this.status.ready=!0}get texture(){return this._textures[this._activeIndex]}get historyTexture(){return this._textures[1-this._activeIndex]}get framebuffer(){return this._framebuffers[this._activeIndex]}get width(){return this.options.resolution*this.options.cascadeCount}get height(){return this.options.resolution}get viewport(){return this._viewport||(this._viewport=new this.Cesium.BoundingRectangle(0,0,this.width,this.height)),this._viewport.width=this.width,this._viewport.height=this.height,this._viewport}resize(e){var r,l;const a=ta(e,64,2048);a!==this.options.resolution&&(this.options.resolution=a,this._destroyTargets(),this._createTargets(),this.status.ready=!0,this._drawCommand&&(this._drawCommand.framebuffer=this.framebuffer,this._drawCommand.renderState=this.Cesium.RenderState.fromCache({viewport:this.viewport,depthTest:{enabled:!1},depthMask:!1})),(l=(r=this.scene).requestRender)==null||l.call(r))}update({camera:e,sunDirection:a,maxDistance:r,density:l,coverage:o,bottomRadius:p,topRadius:_,timeSeconds:w,frameState:C}={}){var k,D;if(this._destroyed||!this.enabled)return;const R=e||this.viewer.camera,F=a||((D=(k=this.scene.context)==null?void 0:k.uniformState)==null?void 0:D.sunDirectionWC);!R||!F||(this._updateCascadeSplits(r),this._updateMatrices(R,F),this._updateUniforms({sunDirection:F,density:l,coverage:o,bottomRadius:p,topRadius:_,timeSeconds:w}),this.Cesium.Cartesian3.clone(R.positionWC||R.position,this._lastCameraPosition),this.Cesium.Cartesian3.clone(F,this._lastSunDirection),C!=null&&C.commandList&&this._drawCommand&&(this.enqueueClear(C),this._drawCommand.framebuffer=this.framebuffer,this.status.frameNumber=Number(C.frameNumber??this.status.frameNumber+1),C.commandList.push(this._drawCommand)))}swap(){this._activeIndex=1-this._activeIndex}enqueueClear(e){!(e!=null&&e.commandList)||!this.framebuffer||(this._clearCommand||(this._clearCommand=new this.Cesium.ClearCommand({color:new this.Cesium.Color(0,0,0,0),owner:this,pass:this.Cesium.Pass.OPAQUE})),this._clearCommand.framebuffer=this.framebuffer,this._clearCommand.renderState=this.Cesium.RenderState.fromCache({viewport:this.viewport}),e.commandList.push(this._clearCommand))}destroy(){this._destroyed||(this._destroyTargets(),this._destroyCommandResources(),this._destroyed=!0)}isDestroyed(){return this._destroyed}_createTargets(){const e=this.Cesium;this.options.resolution;const a=this.width,r=this.height,l=a*r,o=!!this.options.useFloatTexture&&!!this.context.floatingPointTexture,p=o?e.PixelDatatype.FLOAT:e.PixelDatatype.UNSIGNED_BYTE;this.status.width=a,this.status.height=r,this.status.pixelDatatype=o?"FLOAT":"UNSIGNED_BYTE";for(let _=0;_<2;_+=1)this._textures[_]=new e.Texture({context:this.context,width:a,height:r,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:p,source:{width:a,height:r,arrayBufferView:o?new Float32Array(l*4):new Uint8Array(l*4)},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.LINEAR,magnificationFilter:e.TextureMagnificationFilter.LINEAR,wrapS:e.TextureWrap.CLAMP_TO_EDGE,wrapT:e.TextureWrap.CLAMP_TO_EDGE})}),this._framebuffers[_]=new e.Framebuffer({context:this.context,colorTextures:[this._textures[_]],destroyAttachments:!1})}_createCommands(){this._destroyCommandResources(),this._createQuadVertexArray(),this._shaderProgram=this.Cesium.ShaderProgram.fromCache({context:this.context,vertexShaderSource:Wr,fragmentShaderSource:Gr,attributeLocations:{position:0}}),this._drawCommand=new this.Cesium.DrawCommand({owner:this,primitiveType:this.Cesium.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._shaderProgram,renderState:this.Cesium.RenderState.fromCache({viewport:this.viewport,depthTest:{enabled:!1},depthMask:!1}),framebuffer:this.framebuffer,uniformMap:this._getUniformMap(),pass:this.Cesium.Pass.OPAQUE})}_createQuadVertexArray(){const e=this.Cesium,a=e.Buffer.createVertexBuffer({context:this.context,typedArray:new Float32Array([-1,-1,1,-1,1,1,-1,1]),usage:e.BufferUsage.STATIC_DRAW}),r=e.Buffer.createIndexBuffer({context:this.context,typedArray:new Uint16Array([0,1,2,0,2,3]),usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this.context,attributes:[{index:0,vertexBuffer:a,componentsPerAttribute:2}],indexBuffer:r})}_destroyCommandResources(){this._drawCommand=null,this._clearCommand=null,this._shaderProgram&&(this._shaderProgram.destroy(),this._shaderProgram=null),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null)}_getUniformMap(){return{u_shadowAtlas:()=>this._uniformScratch.atlas,u_shadowParams:()=>this._uniformScratch.params,u_sunDirectionWC:()=>this._uniformScratch.sun,u_inverseCascadeMatrices:()=>this._uniformScratch.inverseMatrices}}_updateUniforms({sunDirection:e,density:a=9e-5,coverage:r=.52,bottomRadius:l,topRadius:o,timeSeconds:p=0}){this._uniformScratch.atlas.x=this.options.cascadeCount,this._uniformScratch.atlas.y=this.options.resolution,this._uniformScratch.atlas.z=l||6379637,this._uniformScratch.atlas.w=o||6386637,this._uniformScratch.params.x=a,this._uniformScratch.params.y=r,this._uniformScratch.params.z=24,this._uniformScratch.params.w=p,this.Cesium.Cartesian3.clone(e,this._uniformScratch.sun);for(let _=0;_<4;_+=1)this.Cesium.Matrix4.clone(this.inverseCascadeMatrices[_]||this.Cesium.Matrix4.IDENTITY,this._uniformScratch.inverseMatrices[_])}_destroyTargets(){this.status.ready=!1;for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._textures[e]&&(this._textures[e].destroy(),this._textures[e]=null)}_updateCascadeSplits(e){const a=this.options.near,r=Math.max(a+1,Number(e)||this.options.far),l=this.options.splitLambda,o=this.options.cascadeCount;for(let p=1;p<=o;p+=1){const _=p/o,w=a*Math.pow(r/a,_),C=a+(r-a)*_;this.cascadeSplits[p-1]=w*l+C*(1-l)}}_updateMatrices(e,a){const r=this.Cesium,l=r.Cartesian3.normalize(a,qr),o=e.positionWC||e.position,p=e.upWC||e.up,_=e.rightWC||e.right,w=e.directionWC||e.direction;let C=this.options.near;for(let R=0;R<this.options.cascadeCount;R+=1){const F=this.cascadeSplits[R];jr({Cesium:r,eye:o,up:p,right:_,direction:w,sunDirection:l,near:C,far:F,resolution:this.options.resolution,result:this.cascadeMatrices[R],inverseResult:this.inverseCascadeMatrices[R]}),C=F}}}const qr={},Ze={},Ne={},it={},Je={},Rt={},kt={};function jr({Cesium:t,eye:e,up:a,right:r,direction:l,sunDirection:o,near:p,far:_,resolution:w,result:C,inverseResult:R}){const F=(p+_)*.5,k=Math.max((_-p)*.62,1200);t.Cartesian3.multiplyByScalar(l,F,Ze),t.Cartesian3.add(e,Ze,Ze),t.Cartesian3.negate(o,Je),t.Cartesian3.cross(a,Je,Ne),t.Cartesian3.magnitudeSquared(Ne)<.001&&t.Cartesian3.cross(r,Je,Ne),t.Cartesian3.normalize(Ne,Ne),t.Cartesian3.cross(Je,Ne,it),t.Cartesian3.normalize(it,it);const D=k*2/Math.max(w,1),y=Math.round(t.Cartesian3.dot(Ze,Ne)/D)*D,v=Math.round(t.Cartesian3.dot(Ze,it)/D)*D,T=t.Cartesian3.dot(Ze,Je);t.Cartesian3.multiplyByScalar(Ne,y,Rt),t.Cartesian3.multiplyByScalar(it,v,kt),t.Cartesian3.add(Rt,kt,Rt),t.Cartesian3.multiplyByScalar(Je,T,kt),t.Cartesian3.add(Rt,kt,Ze);const A=t.Matrix4.fromArray([Ne.x,Ne.y,Ne.z,-t.Cartesian3.dot(Ne,Ze),it.x,it.y,it.z,-t.Cartesian3.dot(it,Ze),Je.x,Je.y,Je.z,-t.Cartesian3.dot(Je,Ze),0,0,0,1]),i=t.Matrix4.computeOrthographicOffCenter(-k,k,-k,k,-k*3,k*3,Vr);t.Matrix4.multiply(i,A,C),t.Matrix4.inverse(C,R)}const Vr={};function Xr(t={}){return{cascadeCount:ta(t.cascadeCount??wt.cascadeCount,1,4),resolution:ta(t.resolution??wt.resolution,64,2048),splitLambda:Bt(t.splitLambda??wt.splitLambda,0,1),near:Bt(t.near??wt.near,1,1e5),far:Bt(t.far??wt.far,1e4,2e6),useFloatTexture:t.useFloatTexture===!0}}function ta(t,e,a){return Math.round(Bt(Number(t)||e,e,a))}function Bt(t,e,a){return Math.max(e,Math.min(a,t))}class Yr{constructor(e,a={}){var r;if(!((r=e==null?void 0:e.scene)!=null&&r.context))throw new Error("CloudShadowPrimitive requires a valid Cesium Viewer instance.");this.viewer=e,this.Cesium=a.cesium||globalThis.Cesium,this.show=a.enabled===!0,this.params={...a},this.resources=new $r(e,{cesium:this.Cesium,enabled:this.show,far:a.maxDistance,resolution:a.shadowResolution||256}),this._destroyed=!1}get texture(){var e;return((e=this.resources)==null?void 0:e.texture)||null}get cascadeMatrices(){var e;return((e=this.resources)==null?void 0:e.cascadeMatrices)||null}get cascadeSplits(){var e;return((e=this.resources)==null?void 0:e.cascadeSplits)||null}get cascadeCount(){var e,a;return((a=(e=this.resources)==null?void 0:e.options)==null?void 0:a.cascadeCount)||0}get shadowResolution(){var e,a;return((a=(e=this.resources)==null?void 0:e.options)==null?void 0:a.resolution)||0}get status(){var e;return((e=this.resources)==null?void 0:e.status)||null}setParams(e={}){this.params={...this.params,...e},this.show=this.params.enabled!==!1,this.resources&&(this.resources.enabled=this.show,e.shadowResolution!==void 0&&this.resources.resize(e.shadowResolution))}update(e){var a,r;if(!(this._destroyed||!this.show||!this.resources))try{const o=(r=(a=this.viewer.scene.context)==null?void 0:a.uniformState)==null?void 0:r.sunDirectionWC;this.resources.update({camera:this.viewer.camera,sunDirection:o,maxDistance:this.params.maxDistance,density:this.params.density,coverage:this.params.coverage,bottomRadius:this.params.bottomRadius,topRadius:this.params.topRadius,timeSeconds:this.params.timeSeconds,frameState:e})}catch{this.show=!1,this.params.enabled=!1,this.resources.enabled=!1}}destroy(){var e;this._destroyed||((e=this.resources)==null||e.destroy(),this.resources=null,this._destroyed=!0)}isDestroyed(){return this._destroyed}}const Kr={key:0,class:"advanced-effects-root"},Zr={class:"effects-panel"},Jr={class:"panel-head"},Qr={class:"effect-switches"},en={class:"switch-item"},tn={class:"switch-item"},an={class:"switch-item"},rn={class:"switch-item"},nn={class:"switch-item"},on=`
uniform sampler2D colorTexture;
uniform sampler2D depthTexture;
uniform sampler2D u_cloudShadowTexture;
uniform vec3 u_cameraPositionWC;
uniform vec3 u_cameraDirectionWC;
uniform mat4 u_inverseViewProjection;
uniform vec3 u_sunDirectionWC;
uniform mat4 u_cloudShadowMatrices[4];
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

float marchSunOpticalDepth(vec3 startPosition, vec3 sunDirection) {
    vec2 sunHit = raySphere(startPosition, sunDirection, u_cloudTopRadius);
    float maxDistance = max(sunHit.y, 0.0);
    float stepSize = min(maxDistance / 6.0, 2600.0);
    float distanceAlongRay = stepSize * 0.5;
    float opticalDepth = 0.0;

    for (int i = 0; i < 6; i++) {
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

    float stepSize = min(maxDistance / 10.0, 7200.0);
    float jitter = structuredShadowJitter(startPosition, sunDirection);
    float distanceAlongRay = stepSize * (0.35 + jitter * 0.55);
    float opticalDepth = 0.0;
    float lastDensity = 0.0;

    for (int i = 0; i < 10; i++) {
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

    if (localUv.x <= 0.001 || localUv.x >= 0.999 || localUv.y <= 0.001 || localUv.y >= 0.999) {
        return 1.0;
    }

    float atlasWidth = 1.0 / cascadeCount;
    vec2 atlasUv = vec2((float(cascadeIndex) + localUv.x) * atlasWidth, localUv.y);
    vec4 packed = SAMPLE_TEX(u_cloudShadowTexture, atlasUv);
    float opticalDepth = packed.g * 255.0;
    float maxDensity = packed.b;
    float frontOcclusion = smoothstep(0.015, 0.25, maxDensity);
    float atlasShadow = exp(-opticalDepth * u_density * u_cloudShadowParams.z);
    float densityShadow = mix(1.0, atlasShadow, frontOcclusion);

    return mix(1.0, min(localShadow, densityShadow), u_cloudShadowParams.w);
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
    int stepCount = int(clamp(floor(u_stepCount + 0.5), 16.0, 80.0));
    float stepSize = max(span / float(stepCount), 750.0);
    float jitter = hash31(vec3(gl_FragCoord.xy, fract(u_timeSeconds))) * stepSize;
    float distanceAlongRay = nearDistance + jitter;
    vec3 cloudLight = vec3(0.0);
    float transmittance = 1.0;
    float alpha = 0.0;
    float weightedDepth = 0.0;
    float depthWeight = 0.0;
    vec3 sunDirection = normalize(u_sunDirectionWC);

    for (int i = 0; i < 80; i++) {
        if (i >= stepCount || distanceAlongRay > farDistance || transmittance < 0.03) {
            break;
        }

        vec3 position = u_cameraPositionWC + rayDirection * distanceAlongRay;
        float radius = length(position);
        float heightFraction = saturate((radius - u_cloudBottomRadius) / (u_cloudTopRadius - u_cloudBottomRadius));
        float density = sampleCloudDensity(position, heightFraction);

        if (density > 0.001) {
            float extinction = density * u_density * stepSize;
            float opticalDepthToSun = marchSunOpticalDepth(position + sunDirection * stepSize * 0.35, sunDirection);
            float beerOpticalDepth = marchBeerShadowOpticalDepth(position + sunDirection * stepSize * 0.75, sunDirection);
            float localShadow = exp(-opticalDepthToSun * u_density * 1.35);
            float beerShadow = exp(-beerOpticalDepth * u_density * 0.72);
            float bsmShadow = sampleBsmShadow(position, distanceAlongRay, localShadow);
            float sunTransmittance = mix(1.0, localShadow * mix(1.0, beerShadow, u_beerShadowStrength) * bsmShadow, u_shadowStrength);
            float multipleScattering = approximateMultipleScattering(opticalDepthToSun + beerOpticalDepth * 0.45) * u_multiScattering;
            float lightFacing = saturate(dot(normalize(position), sunDirection) * 0.45 + 0.55);
            float cosTheta = dot(rayDirection, sunDirection);
            float phase = hgPhase(cosTheta, 0.68) * 4.6 + hgPhase(cosTheta, -0.22) * 1.25;
            float silverLining = pow(saturate(cosTheta * 0.5 + 0.5), 10.0);
            float powder = 1.0 - exp(-density * 3.8);
            vec3 sunColor = vec3(1.0, 0.88, 0.66) *
                (phase * (sunTransmittance + multipleScattering * 0.34) + silverLining * sunTransmittance * 0.42) *
                (0.62 + 0.68 * lightFacing) *
                (1.0 + powder * u_powderStrength * 0.42);
            vec3 skyColor = vec3(0.42, 0.62, 0.86) * (0.24 + 0.30 * heightFraction) * (0.78 + 0.22 * multipleScattering);
            vec3 groundBounce = vec3(0.44, 0.38, 0.31) * (1.0 - heightFraction) * u_groundBounceStrength * 0.42 * (0.45 + 0.55 * lightFacing);
            vec3 sampleLight = sunColor + skyColor;
            float sampleAlpha = 1.0 - exp(-extinction);

            cloudLight += transmittance * (sampleLight + groundBounce) * sampleAlpha;
            weightedDepth += distanceAlongRay * transmittance * sampleAlpha;
            depthWeight += transmittance * sampleAlpha;
            transmittance *= exp(-extinction);
            alpha = 1.0 - transmittance;
        }

        stepSize *= 1.018;
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
    finalColor = applyCloudHaze(finalColor, rayDirection, sunDirection, frontDistance, alpha);
    FRAG_COLOR = vec4(finalColor, sceneColor.a);
}
`,sn={__name:"CesiumAdvancedEffects",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},controls:{type:Object,default:()=>({})}},setup(t){const e=t,a=ra(),r=ee(null),l=ee(!1),o=ee(!1),p=ee(!1),_=ee(!1),w=ee(!1),C=ee(!1),R=ee({coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,bsmShadow:!1,shadowResolution:256,maxDistance:36e4,stepCount:48});let F=null,k=null,D=null,y=!1,v=null,T=!1,A=null,i=null,c=!1,u=null,b=null,s=null,m=null,M=null,P=null,E=null,O=null,G=!1,$=null,Q=null,q=0,re=0,le=typeof performance<"u"?performance.now():Date.now();function ne(){return s||(s=Qt(()=>import("./cesiumFxRuntime-BqG_P5BD.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(d=>{var B;const f=(B=d==null?void 0:d.getCesiumFxEchartsRuntime)==null?void 0:B.call(d);if(!f)throw new Error("Cinematic FX 图表运行时加载失败");return b=f,f}).catch(d=>{throw s=null,d}),s)}async function ye(){return b||ne()}const xe={labels:[],cameraHeightKm:[],pitchDeg:[],fps:[]},fe={texture:null,matrices:null,splits:null,params:null},ve={hdr:null,bloom:null,sky:null};Ha(()=>{W()}),Wa(()=>{ue()}),Te(()=>e.controls,d=>{Qe(d||{})},{deep:!0,immediate:!0});function Qe(d){Object.prototype.hasOwnProperty.call(d,"fog")&&(l.value=!!d.fog),Object.prototype.hasOwnProperty.call(d,"volumetricClouds")&&(o.value=!!d.volumetricClouds),d.clouds&&typeof d.clouds=="object"&&(R.value=qe(d.clouds),R.value.bsmShadow&&(y=!1)),Object.prototype.hasOwnProperty.call(d,"hbao")&&(p.value=!!d.hbao),Object.prototype.hasOwnProperty.call(d,"tiltShift")&&(_.value=!!d.tiltShift),Object.prototype.hasOwnProperty.call(d,"atmosphere")&&(w.value=!!d.atmosphere)}function qe(d={}){return{coverage:ie(d.coverage,.52,.18,.82),density:ie(d.density,9e-5,25e-6,18e-5),shadowStrength:ie(d.shadowStrength,.82,0,1),beerShadowStrength:ie(d.beerShadowStrength,.64,0,1),multiScattering:ie(d.multiScattering,.58,0,1),powderStrength:ie(d.powderStrength,.72,0,1.4),hazeStrength:ie(d.hazeStrength,.38,0,1),groundBounceStrength:ie(d.groundBounceStrength,.26,0,1),bsmShadow:d.bsmShadow===!0,shadowResolution:Math.round(ie(d.shadowResolution,256,128,512)/128)*128,maxDistance:ie(d.maxDistance,36e4,12e4,9e5),stepCount:Math.round(ie(d.stepCount,48,24,80))}}function W(){let d=0;m=window.setInterval(async()=>{var H,n;d+=1;const f=(H=e.getViewer)==null?void 0:H.call(e),B=((n=e.getCesium)==null?void 0:n.call(e))||window.Cesium;if(f&&B){clearInterval(m),m=null;try{U(f),me(f),I(f,B),lt(f,B),a.success("高级视觉效果已启用。")}catch(h){a.error("高级视觉效果初始化失败",h),a.warning("高级视觉效果部分初始化失败，已自动降级。",{closable:!0})}return}d>=150&&(clearInterval(m),m=null,a.warning("高级视觉效果等待超时，未获取到 3D Viewer。"))},80)}function U(d){var B,H,n,h,L,z;const f=d==null?void 0:d.scene;if(f){if(typeof f.highDynamicRange=="boolean"&&(ve.hdr=f.highDynamicRange),(B=f.postProcessStages)!=null&&B.bloom){const J=f.postProcessStages.bloom;ve.bloom={enabled:!!J.enabled,contrast:(H=J.uniforms)==null?void 0:H.contrast,brightness:(n=J.uniforms)==null?void 0:n.brightness,delta:(h=J.uniforms)==null?void 0:h.delta,sigma:(L=J.uniforms)==null?void 0:L.sigma,stepSize:(z=J.uniforms)==null?void 0:z.stepSize}}f.skyAtmosphere&&(ve.sky={hueShift:f.skyAtmosphere.hueShift,saturationShift:f.skyAtmosphere.saturationShift,brightnessShift:f.skyAtmosphere.brightnessShift})}}function I(d,f){var H;!((H=d==null?void 0:d.scene)!=null&&H.postProcessStages)||!(f!=null&&f.PostProcessStage)||(Z(d,f),_e(d,f),tt(d,f),st(d,f),w.value?Ye(d,f,1200):Ee(d))}function me(d){var B;const f=d==null?void 0:d.scene;(B=f==null?void 0:f.renderError)!=null&&B.addEventListener&&(f.rethrowRenderErrors=!1,O=f.renderError.addEventListener((H,n)=>{a.error("Cesium 渲染异常，已触发降级保护",n),je(),G||(G=!0,a.warning("检测到当前设备图形兼容性问题，已自动降级高级特效以保证 3D 可用。",{closable:!0,duration:6e3}))}))}function je(){var d;l.value=!1,o.value=!1,_.value=!1,p.value=!1,w.value=!1,F&&(F.enabled=!1),k&&(k.enabled=!1),D&&(D.show=!1,(d=D.setParams)==null||d.call(D,{enabled:!1})),fe.params&&(fe.params.x=0,fe.params.w=0),A&&(A.enabled=!1),i&&(i.enabled=!1)}function Z(d,f){F||(F=new f.PostProcessStage({name:"cinematic_height_fog_stage",fragmentShader:`
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
    `,uniforms:{fogColor:new f.Color(.78,.85,.92,1),fogDensity:65e-5,cameraHeightFactor:1}}),d.scene.postProcessStages.add(F),F.enabled=l.value)}function _e(d,f){var ae,Se;if(k||!(f!=null&&f.PostProcessStage))return;const B=Number((Se=(ae=f==null?void 0:f.Ellipsoid)==null?void 0:ae.WGS84)==null?void 0:Se.maximumRadius)||6378137,H=new f.Cartesian3,n=new f.Cartesian3,h=new f.Cartesian3(.35,-.25,.9),L=new f.Matrix4,z=Array.from({length:4},()=>new f.Matrix4),J=new f.Cartesian4(0,0,0,0),oe=new f.Cartesian4(0,1,.72,0);f.Cartesian3.normalize(h,h),fe.texture=Ve(d,f),fe.matrices=z,fe.splits=J,fe.params=oe,k=new f.PostProcessStage({name:"cesium_ecef_volumetric_clouds_stage",fragmentShader:on,uniforms:{u_cloudShadowTexture:()=>fe.texture,u_cameraPositionWC:H,u_cameraDirectionWC:n,u_inverseViewProjection:L,u_sunDirectionWC:h,u_cloudShadowMatrices:()=>fe.matrices,u_cloudShadowSplits:()=>fe.splits,u_cloudShadowParams:()=>fe.params,u_cloudBottomRadius:B+1500,u_cloudTopRadius:B+8500,u_maxDistance:42e4,u_coverage:.52,u_density:85e-6,u_shadowStrength:.82,u_beerShadowStrength:.64,u_multiScattering:.58,u_powderStrength:.72,u_hazeStrength:.38,u_groundBounceStrength:.26,u_stepCount:48,u_timeSeconds:0}}),d.scene.postProcessStages.add(k),k.enabled=o.value}function Ve(d,f){var n;if(v)return v;const B=(n=d==null?void 0:d.scene)==null?void 0:n.context;if(!B||!(f!=null&&f.Texture))return null;const H=B.defaultTexture||B.defaultTexture2D;return H?(v=H,T=!1,v):(v=new f.Texture({context:B,width:1,height:1,pixelFormat:f.PixelFormat.RGBA,pixelDatatype:f.PixelDatatype.UNSIGNED_BYTE,source:{width:1,height:1,arrayBufferView:new Uint8Array([0,0,0,0])}}),T=!0,v)}function et(d,f){var n;const B=R.value;if(!(o.value&&B.bsmShadow&&!y)){Be(d);return}if(!(D||!((n=d==null?void 0:d.scene)!=null&&n.primitives)||!f))try{D=new Yr(d,{cesium:f,enabled:!0,shadowResolution:B.shadowResolution,maxDistance:B.maxDistance}),d.scene.primitives.add(D)}catch{y=!0,D=null}}function Be(d){var B,H,n,h;if(!D)return;const f=((B=e.getCesium)==null?void 0:B.call(e))||window.Cesium;if(fe.params&&(fe.params.x=0,fe.params.w=0),fe.texture=Ve(d,f),(H=d==null?void 0:d.scene)!=null&&H.primitives)try{d.scene.primitives.remove(D)}catch{(n=D.destroy)==null||n.call(D)}else(h=D.destroy)==null||h.call(D);D=null}function tt(d,f){var H,n;const B=(H=d==null?void 0:d.scene)==null?void 0:H.postProcessStages;B&&(B.ambientOcclusion?(i=B.ambientOcclusion,c=!1):(n=f==null?void 0:f.PostProcessStageLibrary)!=null&&n.createAmbientOcclusionStage&&(i=f.PostProcessStageLibrary.createAmbientOcclusionStage(),B.add(i),c=!0),i&&(i.enabled=p.value,i.uniforms&&("intensity"in i.uniforms&&(i.uniforms.intensity=4.2),"bias"in i.uniforms&&(i.uniforms.bias=.08),"lengthCap"in i.uniforms&&(i.uniforms.lengthCap=.35),"stepSize"in i.uniforms&&(i.uniforms.stepSize=1.8),"frustumLength"in i.uniforms&&(i.uniforms.frustumLength=1200))))}function st(d,f){A||(A=new f.PostProcessStage({name:"cinematic_tilt_shift_stage",fragmentShader:`
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
    `,uniforms:{focusCenter:.56,focusSpread:.11,blurStrength:0}}),d.scene.postProcessStages.add(A),A.enabled=!1)}function lt(d,f){const B=d==null?void 0:d.scene;B&&(E=B.preRender.addEventListener(()=>{var L;const H=X(d),n=Number(((L=d==null?void 0:d.camera)==null?void 0:L.pitch)??-1.2);q+=1;const h=typeof performance<"u"?performance.now():Date.now();if(h-le>=1e3&&(re=Math.round(q*1e3/(h-le)),q=0,le=h),F&&(F.enabled=l.value,F.uniforms.cameraHeightFactor=Y(H,150,12e3),F.uniforms.fogDensity=55e-5+(1-F.uniforms.cameraHeightFactor)*.00125),k&&(k.enabled=o.value,et(d,f),D&&(D.show=o.value&&R.value.bsmShadow),k.enabled&&Ue(d,f,H)),i&&(i.enabled=p.value),A){const z=n>-.62,J=z?ce((n+.62)/.5):0;A.enabled=_.value&&z,A.uniforms.blurStrength=J}w.value?Ye(d,f,H):Ee(d)}))}function Ue(d,f,B){var Ce,Ae,Re;const H=k,n=d==null?void 0:d.scene,h=d==null?void 0:d.camera;if(!H||!n||!h||!f)return;const L=H.uniforms;f.Cartesian3.clone(h.positionWC,L.u_cameraPositionWC),f.Cartesian3.clone(h.directionWC,L.u_cameraDirectionWC);const z=(Ce=n.context)==null?void 0:Ce.uniformState;z!=null&&z.inverseViewProjection?f.Matrix4.clone(z.inverseViewProjection,L.u_inverseViewProjection):h.inverseViewProjectionMatrix&&f.Matrix4.clone(h.inverseViewProjectionMatrix,L.u_inverseViewProjection);const J=ct(d,f);f.Cartesian3.clone(J,L.u_sunDirectionWC);const oe=Y(B,1e4,18e4),ae=R.value,Se=Number((Re=(Ae=f==null?void 0:f.Ellipsoid)==null?void 0:Ae.WGS84)==null?void 0:Re.maximumRadius)||6378137;L.u_coverage=ae.coverage,L.u_density=ae.density*(1-oe*.22),L.u_maxDistance=ae.maxDistance,L.u_shadowStrength=ae.shadowStrength*(1-oe*.12),L.u_beerShadowStrength=ae.beerShadowStrength*(1-oe*.18),L.u_multiScattering=ae.multiScattering,L.u_powderStrength=ae.powderStrength,L.u_hazeStrength=ae.hazeStrength*(1-oe*.35),L.u_groundBounceStrength=ae.groundBounceStrength,L.u_stepCount=ae.stepCount,L.u_timeSeconds=Xe(d,f),D==null||D.setParams({enabled:o.value&&ae.bsmShadow&&!y,coverage:L.u_coverage,density:L.u_density,bottomRadius:Se+1500,topRadius:Se+8500,maxDistance:L.u_maxDistance,shadowResolution:ae.shadowResolution,timeSeconds:L.u_timeSeconds}),dt(d,f,ae)}function dt(d,f,B){var Se,Ce,Ae;const H=fe.params,n=fe.splits,h=fe.matrices;if(!H||!n||!h)return;const L=Ve(d,f),z=D==null?void 0:D.resources,J=(z==null?void 0:z.texture)||null,oe=!!(o.value&&B.bsmShadow&&!y&&J&&((Se=z==null?void 0:z.status)!=null&&Se.ready));fe.texture=oe?J:L,H.x=oe?1:0,H.y=oe?Math.max(((Ce=z.options)==null?void 0:Ce.cascadeCount)||1,1):1,H.z=.72,H.w=oe?B.beerShadowStrength:0;for(let Re=0;Re<4;Re+=1)f.Matrix4.clone(((Ae=z==null?void 0:z.cascadeMatrices)==null?void 0:Ae[Re])||f.Matrix4.IDENTITY,h[Re]);const ae=z==null?void 0:z.cascadeSplits;n.x=Number((ae==null?void 0:ae[0])||0),n.y=Number((ae==null?void 0:ae[1])||n.x),n.z=Number((ae==null?void 0:ae[2])||n.y),n.w=Number((ae==null?void 0:ae[3])||n.z)}function ct(d,f){var n,h,L;const B=(L=(h=(n=d==null?void 0:d.scene)==null?void 0:n.context)==null?void 0:h.uniformState)==null?void 0:L.sunDirectionWC;if(B)return B;const H=new f.Cartesian3(.35,-.25,.9);return f.Cartesian3.normalize(H,H),H}function Xe(d,f){var B,H,n;try{const h=(B=d==null?void 0:d.clock)==null?void 0:B.currentTime;if(h&&((H=f==null?void 0:f.JulianDate)!=null&&H.secondsDifference)&&((n=f==null?void 0:f.JulianDate)!=null&&n.fromIso8601))return Q||(Q=f.JulianDate.fromIso8601("2026-01-01T00:00:00Z")),f.JulianDate.secondsDifference(h,Q)}catch{}return(typeof performance<"u"?performance.now():Date.now())*.001}function Ye(d,f,B){var z;const H=d==null?void 0:d.scene;if(!H)return;$||($=kr(d)),Rr(d,f),typeof H.highDynamicRange=="boolean"&&(H.highDynamicRange=!0);const n=(z=H.postProcessStages)==null?void 0:z.bloom;n&&(n.enabled=!0,n.uniforms&&("contrast"in n.uniforms&&(n.uniforms.contrast=149),"brightness"in n.uniforms&&(n.uniforms.brightness=-.12),"delta"in n.uniforms&&(n.uniforms.delta=1),"sigma"in n.uniforms&&(n.uniforms.sigma=3.25),"stepSize"in n.uniforms&&(n.uniforms.stepSize=5)));const h=H.skyAtmosphere;if(!h)return;const L=Y(B,500,12e4);h.hueShift=-.035+L*.035,h.saturationShift=-.14+L*.09,h.brightnessShift=.03+(1-L)*.08}function Ee(d){var n,h;const f=d==null?void 0:d.scene;if(!f)return;const B=((n=e.getCesium)==null?void 0:n.call(e))||window.Cesium;if($){Ir(d,B,$),$=null;return}typeof f.highDynamicRange=="boolean"&&ve.hdr!==null&&(f.highDynamicRange=ve.hdr);const H=(h=f.postProcessStages)==null?void 0:h.bloom;H&&ve.bloom&&(H.enabled=ve.bloom.enabled,H.uniforms&&("contrast"in H.uniforms&&ve.bloom.contrast!==void 0&&(H.uniforms.contrast=ve.bloom.contrast),"brightness"in H.uniforms&&ve.bloom.brightness!==void 0&&(H.uniforms.brightness=ve.bloom.brightness),"delta"in H.uniforms&&ve.bloom.delta!==void 0&&(H.uniforms.delta=ve.bloom.delta),"sigma"in H.uniforms&&ve.bloom.sigma!==void 0&&(H.uniforms.sigma=ve.bloom.sigma),"stepSize"in H.uniforms&&ve.bloom.stepSize!==void 0&&(H.uniforms.stepSize=ve.bloom.stepSize))),f.skyAtmosphere&&ve.sky&&(f.skyAtmosphere.hueShift=ve.sky.hueShift,f.skyAtmosphere.saturationShift=ve.sky.saturationShift,f.skyAtmosphere.brightnessShift=ve.sky.brightnessShift)}function ze(){M&&(clearInterval(M),M=null)}async function x(){var H,n;const d=!C.value;if(C.value=d,!d){ze();return}const f=(H=e.getViewer)==null?void 0:H.call(e),B=((n=e.getCesium)==null?void 0:n.call(e))||window.Cesium;if(!f||!B){C.value=!1,a.warning("图表暂不可用：3D Viewer 尚未就绪。");return}try{await S(f,B),N(f,B),V(f,B)}catch(h){C.value=!1,a.error("图表模块加载失败",h)}}async function S(d,f){await ye(),await Ka(),r.value&&(u||(u=b.init(r.value),te()),P||(P=()=>{u==null||u.resize()},window.addEventListener("resize",P)),u.resize(),V(d,f))}function N(d,f){M||(M=window.setInterval(()=>{!u||!C.value||V(d,f)},1200))}function V(d,f){var L;const B=new Date,H=`${Fe(B.getHours())}:${Fe(B.getMinutes())}:${Fe(B.getSeconds())}`,n=Number((X(d)/1e3).toFixed(2)),h=Number(f.Math.toDegrees(((L=d==null?void 0:d.camera)==null?void 0:L.pitch)??0).toFixed(1));Pe(xe.labels,H,20),Pe(xe.cameraHeightKm,n,20),Pe(xe.pitchDeg,h,20),Pe(xe.fps,re,20),u.setOption({xAxis:{data:xe.labels},series:[{data:xe.cameraHeightKm},{data:xe.pitchDeg},{data:xe.fps}]})}function te(){u&&u.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{top:10,left:"center",textStyle:{color:"#ddf7e8",fontSize:11},itemGap:22},grid:{left:38,right:20,top:85,bottom:24},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"rgba(190, 240, 210, 0.35)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},yAxis:[{type:"value",name:"高度(km)/FPS",nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(190, 240, 210, 0.12)"}},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}},{type:"value",name:"俯仰角(°)",position:"right",min:-90,max:0,nameTextStyle:{color:"rgba(223, 248, 232, 0.85)"},splitLine:{show:!1},axisLabel:{color:"rgba(223, 248, 232, 0.85)",fontSize:10}}],series:[{name:"相机高度(km)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#67e8f9"},areaStyle:{color:"rgba(103, 232, 249, 0.14)"},data:[]},{name:"俯仰角(°)",type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#facc15"},areaStyle:{color:"rgba(250, 204, 21, 0.12)"},data:[]},{name:"帧率(FPS)",type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:2,color:"#86efac"},areaStyle:{color:"rgba(134, 239, 172, 0.1)"},data:[]}]})}function ue(){var B,H,n,h,L;m&&(clearInterval(m),m=null),ze();const d=(B=e.getViewer)==null?void 0:B.call(e),f=(H=d==null?void 0:d.scene)==null?void 0:H.postProcessStages;E&&(E(),E=null),O&&(O(),O=null),F&&f&&f.remove(F),F=null,k&&f&&f.remove(k),k=null,D&&((n=d==null?void 0:d.scene)!=null&&n.primitives)?d.scene.primitives.remove(D):D&&((h=D.destroy)==null||h.call(D)),D=null,T&&v&&((L=v.destroy)==null||L.call(v)),v=null,T=!1,fe.texture=null,A&&f&&f.remove(A),A=null,i&&(c&&f&&f.remove(i),i=null),c=!1,d&&Ee(d),P&&(window.removeEventListener("resize",P),P=null),u&&(u.dispose(),u=null),b=null,G=!1}function X(d){var n,h,L;const f=(h=(n=d==null?void 0:d.scene)==null?void 0:n.globe)==null?void 0:h.ellipsoid,B=(L=d==null?void 0:d.camera)==null?void 0:L.positionWC;if(!f||!B)return 0;const H=f.cartesianToCartographic(B);return Math.max(0,Number((H==null?void 0:H.height)??0))}function Y(d,f,B){return!Number.isFinite(d)||B<=f?0:ce((d-f)/(B-f))}function ce(d){return Math.min(1,Math.max(0,Number(d)||0))}function ie(d,f,B,H){const n=Number(d);return Number.isFinite(n)?Math.min(H,Math.max(B,n)):f}function Pe(d,f,B){d.push(f),d.length>B&&d.shift()}function Fe(d){return String(d).padStart(2,"0")}return(d,f)=>t.headless?he("",!0):(j(),K("div",Kr,[g("div",Zr,[g("div",Jr,[f[5]||(f[5]=g("span",{class:"panel-title"},"Cinematic FX",-1)),g("button",{class:"panel-btn",onClick:x},de(C.value?"隐藏图表":"显示图表"),1)]),g("div",Qr,[g("label",en,[be(g("input",{"onUpdate:modelValue":f[0]||(f[0]=B=>l.value=B),type:"checkbox"},null,512),[[St,l.value]]),f[6]||(f[6]=g("span",null,"电影级高度雾",-1))]),g("label",tn,[be(g("input",{"onUpdate:modelValue":f[1]||(f[1]=B=>o.value=B),type:"checkbox"},null,512),[[St,o.value]]),f[7]||(f[7]=g("span",null,"Clouds",-1))]),g("label",an,[be(g("input",{"onUpdate:modelValue":f[2]||(f[2]=B=>p.value=B),type:"checkbox"},null,512),[[St,p.value]]),f[8]||(f[8]=g("span",null,"HBAO 微阴影",-1))]),g("label",rn,[be(g("input",{"onUpdate:modelValue":f[3]||(f[3]=B=>_.value=B),type:"checkbox"},null,512),[[St,_.value]]),f[9]||(f[9]=g("span",null,"移轴摄影",-1))]),g("label",nn,[be(g("input",{"onUpdate:modelValue":f[4]||(f[4]=B=>w.value=B),type:"checkbox"},null,512),[[St,w.value]]),f[10]||(f[10]=g("span",null,"动态大气 + Bloom",-1))])]),be(g("div",{ref_key:"chartRef",ref:r,class:"fx-chart"},null,512),[[yt,C.value]])])]))}},ln=Pt(sn,[["__scopeId","data-v-159559cb"]]),cn={key:0,class:"launcher-count"},un={class:"panel-header"},dn={class:"panel-title-block"},hn={class:"panel-mark"},fn={class:"panel-copy"},mn={class:"panel-subtitle"},pn={class:"panel-actions"},gn=["title"],vn={class:"panel-tabs","aria-label":"3D 工具分类"},yn=["aria-pressed","onClick"],xn={class:"panel-scroll"},_n={class:"panel-page"},bn={class:"overview-grid"},Sn={class:"overview-tile"},wn={class:"overview-tile"},Tn={class:"overview-tile"},Cn={key:0,class:"quick-actions"},Mn=["disabled","onClick"],Dn={key:1,class:"empty-state"},Ln={class:"panel-page"},Pn=["aria-expanded"],Fn={class:"section-main"},An={class:"section-meta"},En={key:0,class:"section-body"},Rn={class:"option-grid"},kn=["disabled","aria-pressed","title","onClick"],In={class:"custom-basemap-input-row"},zn=["disabled"],Nn={key:0,class:"custom-basemap-current"},On=["aria-expanded"],Bn={class:"section-main"},Un={class:"section-meta"},Hn={key:0,class:"section-body"},Wn={class:"option-grid"},Gn=["aria-pressed","title","onClick"],$n=["aria-expanded"],qn={class:"section-main"},jn={class:"section-meta"},Vn={key:0,class:"section-body"},Xn={class:"overlay-list"},Yn=["disabled","aria-pressed","title","onClick"],Kn={class:"overlay-copy"},Zn={class:"overlay-title"},Jn={key:0,class:"overlay-desc"},Qn={key:3,class:"empty-state"},ei={class:"panel-page"},ti={class:"module-list"},ai=["aria-expanded","onClick"],ri={class:"module-icon"},ni={class:"module-copy"},ii={class:"module-title"},oi={key:0,class:"module-desc"},si={class:"module-head-side"},li={key:0,class:"module-body"},ci={key:0,class:"module-actions"},ui=["disabled","onClick"],di={class:"control-label"},hi={class:"control-label-text"},fi=["aria-label","title"],mi=["min","max","step","value","disabled","onInput"],pi=["min","max","step","value","disabled","onInput"],gi=["value","disabled","onInput"],vi=["value","disabled","onChange"],yi=["value"],xi=["aria-pressed","disabled","onClick"],_i={key:4,class:"control-value"},bi={key:0,class:"empty-state"},Si={class:"panel-page"},wi={for:"cesium-data-file-input",class:"data-upload-area","aria-label":"选择要导入的数据文件"},Ti={class:"data-upload-hint"},Ci={key:0,class:"data-source-list"},Mi={class:"data-source-head"},Di={class:"data-source-count"},Li=["title","aria-label","onClick"],Pi={class:"data-source-icon"},Fi={class:"data-source-copy"},Ai={class:"data-source-name"},Ei={class:"data-source-type"},Ri={key:1,class:"empty-state"},ba=3,ki=".geojson,.json,.kml,.kmz,.shp,.dbf,.shx,.prj,.cpg,.glb,.gltf,.czml,.zip",Ii={__name:"CesiumToolPanel",props:{open:{type:Boolean,default:!0},embedded:{type:Boolean,default:!1},basemapOptions:{type:Array,default:()=>[]},terrainOptions:{type:Array,default:()=>[]},overlayOptions:{type:Array,default:()=>[]},activeBasemap:{type:String,default:""},activeTerrain:{type:String,default:""},customBasemapUrl:{type:String,default:""},modules:{type:Array,default:()=>[]},storageKey:{type:String,default:"cesium_tool_panel_ui"},loadedDataSources:{type:Array,default:()=>[]}},emits:["update:open","update:activeBasemap","update:activeTerrain","module-action","control-change","overlay-toggle","custom-basemap-submit","data-import","data-remove","data-clear-all"],setup(t,{emit:e}){const a=t,r=ee(Array.isArray(a.loadedDataSources)?a.loadedDataSources:[]);Te(()=>a.loadedDataSources,W=>{const U=Array.isArray(W)?W:[];U!==r.value&&(r.value=U)},{immediate:!0});const l=e,o=$(),p=o.uiStateVersion===ba,_=ee(o.activeTab||"scene"),w=ee(!!o.compactMode),C=ee(new Set(p?o.expandedLayerSectionIds||[]:[])),R=ee(new Set(p?o.expandedModuleIds||[]:[])),F=ee(a.customBasemapUrl||""),k=ee(null),D=Le(()=>a.embedded||a.open),y=Le(()=>a.modules.find(W=>W.id==="scene")||null),v=Le(()=>{var W;return((W=y.value)==null?void 0:W.actions)||[]}),T=Le(()=>a.modules.filter(W=>W.id!=="scene")),A=Le(()=>T.value.filter(W=>W.statusTone==="success"||W.statusTone==="warning").length),i=Le(()=>a.overlayOptions.filter(W=>!!W.active).length),c=[{id:"scene",label:"场景",icon:jt},{id:"layers",label:"图层",icon:Vt},{id:"data",label:"数据",icon:ea},{id:"modules",label:"模块",icon:qt}],u=Le(()=>{var W;return((W=a.basemapOptions.find(U=>U.value===a.activeBasemap))==null?void 0:W.label)||"未选择"}),b=Le(()=>{var W;return((W=a.terrainOptions.find(U=>U.value===a.activeTerrain))==null?void 0:W.label)||"未选择"});Te(()=>a.modules.map(W=>W.id),W=>{W.includes(_.value)||_.value==="scene"||_.value==="layers"||_.value==="modules"||(_.value="scene")},{immediate:!0}),Te([_,w,C,R],Q,{deep:!0}),Te(()=>a.customBasemapUrl,W=>{W!==F.value&&(F.value=W||"")});function s(W){l("update:open",W)}function m(W){return C.value.has(W)}function M(W){const U=new Set(C.value);U.has(W)?U.delete(W):U.add(W),C.value=U}function P(W){return R.value.has(W)}function E(W){const U=new Set(R.value);U.has(W)?U.delete(W):U.add(W),R.value=U}function O(W){W!=null&&W.disabled||l("update:activeBasemap",W.value)}function G(){l("custom-basemap-submit",{url:F.value})}function $(){if(typeof window>"u")return{};try{const W=window.localStorage.getItem(a.storageKey);return W?JSON.parse(W):{}}catch{return{}}}function Q(){if(!(typeof window>"u"))try{window.localStorage.setItem(a.storageKey,JSON.stringify({uiStateVersion:ba,activeTab:_.value,compactMode:w.value,expandedLayerSectionIds:[...C.value],expandedModuleIds:[...R.value]}))}catch{}}function q(W){return{scene:jt,effects:fr,clouds:hr,wind:dr,fluid:ur}[W]||qt}function re(W,U){var me;return((me={scene:{home:lr,everest:ga,tileset:Ot},wind:{load:sr,clear:Xt},fluid:{pick:va,clear:Xt}}[W])==null?void 0:me[U])||cr}function le(W,U){l("module-action",{moduleId:W,actionId:U})}function ne(W,U,I){const me=U.type==="range"?Number(I):I;l("control-change",{moduleId:W,controlId:U.id,value:me})}function ye(W){W.disabled||l("overlay-toggle",{overlayId:W.value,value:!W.active})}function xe(W){return{geojson:At,json:At,kml:ya,kmz:ya,shp:Vt,gltf:Ot,czml:At,"3dtiles":Ot}[W]||At}function fe(W){return{geojson:"GeoJSON",json:"JSON",kml:"KML",kmz:"KMZ",shp:"Shapefile",gltf:"GLTF/GLB",czml:"CZML","3dtiles":"3D Tiles"}[W]||W.toUpperCase()}function ve(W){var I;const U=(I=W.target)==null?void 0:I.files;!U||U.length===0||(l("data-import",{files:Array.from(U)}),k.value&&(k.value.value=""))}function Qe(W){l("data-remove",{id:W})}function qe(){l("data-clear-all")}return(W,U)=>(j(),K("aside",{class:De(["cesium-tool-shell",{"is-open":D.value,"is-embedded":t.embedded}])},[!t.embedded&&!D.value?(j(),K("button",{key:0,class:"tool-launcher",type:"button",title:"打开 3D 高级控制台",onClick:U[0]||(U[0]=I=>s(!0))},[we(se(qt),{size:18,"stroke-width":"2"}),U[8]||(U[8]=g("span",null,"高级控制台",-1)),A.value?(j(),K("span",cn,de(A.value),1)):he("",!0)])):he("",!0),be(g("section",{class:De(["cesium-tool-panel",{compact:w.value}]),"aria-label":"Cesium 高级控制台"},[g("header",un,[g("div",dn,[g("span",hn,[we(se(jt),{size:18,"stroke-width":"2"})]),g("span",fn,[U[9]||(U[9]=g("span",{class:"panel-title"},"3D 高级控制台",-1)),g("span",mn,de(u.value)+" / "+de(b.value),1)])]),g("div",pn,[g("button",{class:"icon-btn",type:"button",title:w.value?"切换为舒展布局":"切换为紧凑布局",onClick:U[1]||(U[1]=I=>w.value=!w.value)},[we(se(ir),{size:16,"stroke-width":"2"})],8,gn),t.embedded?he("",!0):(j(),K("button",{key:0,class:"icon-btn",type:"button",title:"隐藏面板",onClick:U[2]||(U[2]=I=>s(!1))},[we(se(ma),{size:17,"stroke-width":"2"})]))])]),g("nav",vn,[(j(),K(ke,null,Ke(c,I=>g("button",{key:I.id,class:De(["tab-btn",{active:_.value===I.id}]),type:"button","aria-pressed":_.value===I.id,onClick:me=>_.value=I.id},[(j(),$e(mt(I.icon),{size:15,"stroke-width":"2"})),g("span",null,de(I.label),1)],10,yn)),64))]),g("div",xn,[be(g("section",_n,[g("div",bn,[g("div",Sn,[U[10]||(U[10]=g("span",{class:"overview-label"},"地图源",-1)),g("strong",null,de(u.value),1)]),g("div",wn,[U[11]||(U[11]=g("span",{class:"overview-label"},"地形",-1)),g("strong",null,de(b.value),1)]),g("div",Tn,[U[12]||(U[12]=g("span",{class:"overview-label"},"模块",-1)),g("strong",null,de(A.value)+"/"+de(T.value.length),1)])]),v.value.length?(j(),K("div",Cn,[(j(!0),K(ke,null,Ke(v.value,I=>(j(),K("button",{key:I.id,class:De(["tool-action",[I.variant||"default",{active:I.active}]]),disabled:I.disabled,type:"button",onClick:me=>le(y.value.id,I.id)},[(j(),$e(mt(re(y.value.id,I.id)),{size:15,"stroke-width":"2"})),Nt(" "+de(I.label),1)],10,Mn))),128))])):(j(),K("div",Dn," 暂无场景快捷操作 "))],512),[[yt,_.value==="scene"]]),be(g("section",Ln,[t.basemapOptions.length?(j(),K("div",{key:0,class:De(["option-group",{expanded:m("basemap")}])},[g("button",{class:"section-head section-toggle",type:"button","aria-expanded":m("basemap"),onClick:U[3]||(U[3]=I=>M("basemap"))},[g("span",Fn,[we(se(Vt),{size:16,"stroke-width":"2"}),U[13]||(U[13]=g("span",null,"底图源",-1))]),g("span",An,[g("span",null,de(u.value),1),we(se(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,Pn),m("basemap")?(j(),K("div",En,[g("div",Rn,[(j(!0),K(ke,null,Ke(t.basemapOptions,I=>(j(),K("button",{key:I.value,class:De(["option-card",{active:I.value===t.activeBasemap}]),type:"button",disabled:I.disabled,"aria-pressed":I.value===t.activeBasemap,title:I.description||I.label,onClick:me=>O(I)},[g("span",null,de(I.label),1),I.value===t.activeBasemap?(j(),$e(se(pa),{key:0,size:15,"stroke-width":"2.4"})):he("",!0)],10,kn))),128))]),g("form",{class:"custom-basemap-editor",onSubmit:pt(G,["prevent"])},[g("div",In,[we(se(or),{class:"custom-basemap-icon",size:15,"stroke-width":"2"}),be(g("input",{"onUpdate:modelValue":U[4]||(U[4]=I=>F.value=I),class:"custom-basemap-input",type:"text",inputmode:"url",spellcheck:"false",placeholder:"https://example.com/tiles/{z}/{x}/{y}.png"},null,512),[[Ie,F.value]]),g("button",{class:"custom-basemap-submit",type:"submit",disabled:!F.value.trim(),title:"加载自定义 XYZ"},[we(se(ja),{size:14,"stroke-width":"2"}),U[14]||(U[14]=g("span",null,"加载",-1))],8,zn)]),t.customBasemapUrl?(j(),K("div",Nn,de(t.customBasemapUrl),1)):he("",!0)],32)])):he("",!0)],2)):he("",!0),t.terrainOptions.length?(j(),K("div",{key:1,class:De(["option-group",{expanded:m("terrain")}])},[g("button",{class:"section-head section-toggle",type:"button","aria-expanded":m("terrain"),onClick:U[5]||(U[5]=I=>M("terrain"))},[g("span",Bn,[we(se(ga),{size:16,"stroke-width":"2"}),U[15]||(U[15]=g("span",null,"地形",-1))]),g("span",Un,[g("span",null,de(b.value),1),we(se(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,On),m("terrain")?(j(),K("div",Hn,[g("div",Wn,[(j(!0),K(ke,null,Ke(t.terrainOptions,I=>(j(),K("button",{key:I.value,class:De(["option-card",{active:I.value===t.activeTerrain}]),type:"button","aria-pressed":I.value===t.activeTerrain,title:I.description||I.label,onClick:me=>W.$emit("update:activeTerrain",I.value)},[g("span",null,de(I.label),1),I.value===t.activeTerrain?(j(),$e(se(pa),{key:0,size:15,"stroke-width":"2.4"})):he("",!0)],10,Gn))),128))])])):he("",!0)],2)):he("",!0),t.overlayOptions.length?(j(),K("div",{key:2,class:De(["option-group",{expanded:m("overlay")}])},[g("button",{class:"section-head section-toggle",type:"button","aria-expanded":m("overlay"),onClick:U[6]||(U[6]=I=>M("overlay"))},[g("span",qn,[we(se(va),{size:16,"stroke-width":"2"}),U[16]||(U[16]=g("span",null,"叠加层",-1))]),g("span",jn,[g("span",null,de(i.value)+"/"+de(t.overlayOptions.length),1),we(se(Ft),{class:"section-chevron",size:15,"stroke-width":"2"})])],8,$n),m("overlay")?(j(),K("div",Vn,[g("div",Xn,[(j(!0),K(ke,null,Ke(t.overlayOptions,I=>(j(),K("button",{key:I.value,class:De(["overlay-row",{active:!!I.active}]),type:"button",disabled:I.disabled,"aria-pressed":!!I.active,title:I.description||I.label,onClick:me=>ye(I)},[g("span",Kn,[g("span",Zn,de(I.label),1),I.description?(j(),K("span",Jn,de(I.description),1)):he("",!0)]),g("span",{class:De(["toggle-control",{active:!!I.active}]),"aria-hidden":"true"},[...U[17]||(U[17]=[g("span",{class:"toggle-track"},[g("span",{class:"toggle-thumb"})],-1)])],2)],10,Yn))),128))])])):he("",!0)],2)):he("",!0),!t.basemapOptions.length&&!t.terrainOptions.length&&!t.overlayOptions.length?(j(),K("div",Qn," 暂无图层配置项 ")):he("",!0)],512),[[yt,_.value==="layers"]]),be(g("section",ei,[g("div",ti,[(j(!0),K(ke,null,Ke(T.value,I=>{var me,je;return j(),K("article",{key:I.id,class:De(["module-item",{expanded:P(I.id)}])},[g("button",{class:"module-head",type:"button","aria-expanded":P(I.id),onClick:Z=>E(I.id)},[g("span",ri,[(j(),$e(mt(q(I.id)),{size:16,"stroke-width":"2"}))]),g("span",ni,[g("span",ii,de(I.title),1),I.description?(j(),K("span",oi,de(I.description),1)):he("",!0)]),g("span",si,[I.status?(j(),K("span",{key:0,class:De(["module-status",I.statusTone||"neutral"])},de(I.status),3)):he("",!0),we(se(Ft),{class:"module-chevron",size:15,"stroke-width":"2"})])],8,ai),P(I.id)?(j(),K("div",li,[(me=I.actions)!=null&&me.length?(j(),K("div",ci,[(j(!0),K(ke,null,Ke(I.actions,Z=>(j(),K("button",{key:Z.id,class:De(["tool-action",[Z.variant||"default",{active:Z.active}]]),disabled:Z.disabled,type:"button",onClick:_e=>le(I.id,Z.id)},[(j(),$e(mt(re(I.id,Z.id)),{size:14,"stroke-width":"2"})),Nt(" "+de(Z.label),1)],10,ui))),128))])):he("",!0),(je=I.controls)!=null&&je.length?(j(),K("div",{key:1,class:De(["control-list",I.controlLayout?`control-list-${I.controlLayout}`:""])},[(j(!0),K(ke,null,Ke(I.controls,Z=>(j(),K("label",{key:Z.id,class:De(["control-row",[`control-${Z.type}`,I.controlLayout?`control-row-${I.controlLayout}`:"",Z.numberInput===!1?"without-number-input":""]])},[g("span",di,[g("span",hi,de(Z.label),1),Z.tooltip?(j(),K("span",{key:0,class:"control-help","aria-label":Z.tooltip,title:Z.tooltip,onClick:U[7]||(U[7]=pt(()=>{},["prevent","stop"]))}," ? ",8,fi)):he("",!0)]),Z.type==="range"?(j(),K(ke,{key:0},[g("input",{class:"control-range",type:"range",min:Z.min,max:Z.max,step:Z.step,value:Z.value,disabled:Z.disabled,onInput:_e=>ne(I.id,Z,_e.target.value)},null,40,mi),Z.numberInput!==!1?(j(),K("input",{key:0,class:"control-number",type:"number",min:Z.min,max:Z.max,step:Z.step,value:Z.value,disabled:Z.disabled,onInput:_e=>ne(I.id,Z,_e.target.value)},null,40,pi)):he("",!0)],64)):Z.type==="color"?(j(),K(ke,{key:1},[g("input",{class:"control-color",type:"color",value:Z.value,disabled:Z.disabled,onInput:_e=>ne(I.id,Z,_e.target.value)},null,40,gi),g("span",{class:"control-color-swatch",style:Ga({backgroundColor:Z.value})},null,4)],64)):Z.type==="select"?(j(),K("select",{key:2,class:"control-select",value:Z.value,disabled:Z.disabled,onChange:_e=>ne(I.id,Z,_e.target.value)},[(j(!0),K(ke,null,Ke(Z.options||[],_e=>(j(),K("option",{key:_e.value,value:_e.value},de(_e.label),9,yi))),128))],40,vi)):Z.type==="toggle"?(j(),K("button",{key:3,class:De(["toggle-control",{active:!!Z.value}]),type:"button","aria-pressed":!!Z.value,disabled:Z.disabled,onClick:_e=>ne(I.id,Z,!Z.value)},[...U[18]||(U[18]=[g("span",{class:"toggle-track"},[g("span",{class:"toggle-thumb"})],-1)])],10,xi)):he("",!0),Z.displayValue?(j(),K("span",_i,de(Z.displayValue),1)):he("",!0)],2))),128))],2)):he("",!0)])):he("",!0)],2)}),128))]),T.value.length?he("",!0):(j(),K("div",bi," 暂无可用功能模块 "))],512),[[yt,_.value==="modules"]]),be(g("section",Si,[g("label",wi,[g("input",{id:"cesium-data-file-input",ref_key:"fileInputRef",ref:k,class:"data-file-input",type:"file",multiple:"",accept:ki,onChange:ve},null,544),g("div",Ti,[we(se(ea),{size:28,"stroke-width":"1.5"}),U[19]||(U[19]=g("span",null,"选择文件或拖拽到此处",-1)),U[20]||(U[20]=g("span",{class:"data-formats-label"}," 支持: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles ",-1))])]),r.value.length?(j(),K("div",Ci,[g("div",Mi,[g("span",Di," 已加载 "+de(r.value.length)+" 个数据源 ",1),g("button",{class:"tool-action danger",type:"button",onClick:qe},[we(se(Xt),{size:13,"stroke-width":"2"}),U[21]||(U[21]=Nt(" 全部清除 ",-1))])]),(j(!0),K(ke,null,Ke(r.value,I=>(j(),K("button",{key:I.id,class:"data-source-row",type:"button",title:`点击移除 ${I.name} (${fe(I.type)})`,"aria-label":`移除 ${I.name}`,onClick:me=>Qe(I.id)},[g("span",Pi,[(j(),$e(mt(xe(I.type)),{size:15,"stroke-width":"2"}))]),g("span",Fi,[g("span",Ai,de(I.name),1),g("span",Ei,de(fe(I.type)),1)]),we(se(ma),{class:"data-source-remove-icon",size:14,"stroke-width":"2"})],8,Li))),128))])):(j(),K("div",Ri," 暂无已导入的数据 "))],512),[[yt,_.value==="data"]])])],2),[[yt,t.embedded||D.value]])],2))}},zi=Pt(Ii,[["__scopeId","data-v-e9d48ec0"]]),Ni={class:"cesium-data-dialog",role:"dialog","aria-modal":"true","aria-label":"输入 3D 模型放置坐标"},Oi={class:"dialog-header"},Bi={class:"dialog-title-row"},Ui={class:"dialog-file-name"},Hi={class:"coord-fields"},Wi={class:"coord-field"},Gi={key:0,class:"coord-error"},$i={class:"coord-field"},qi={key:0,class:"coord-error"},ji={class:"coord-field"},Vi={key:0,class:"coord-error"},Xi={class:"dialog-actions"},Yi=["disabled"],Ki={__name:"CesiumDataImportDialog",props:{visible:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["confirm","cancel"],setup(t,{emit:e}){const a=t,r=e,l=ee(""),o=ee(""),p=ee("0"),_=ee(null),w=ee(""),C=ee(""),R=ee(""),F=Le(()=>l.value!==""&&o.value!==""&&!w.value&&!C.value&&!R.value);function k(){const y=parseFloat(l.value),v=parseFloat(o.value),T=parseFloat(p.value);w.value="",C.value="",R.value="",l.value!==""&&(isNaN(y)||y<-180||y>180)&&(w.value="经度范围: -180 ~ 180"),o.value!==""&&(isNaN(v)||v<-90||v>90)&&(C.value="纬度范围: -90 ~ 90"),p.value!==""&&(isNaN(T)||T<0)&&(R.value="高度必须 ≥ 0")}function D(){if(!F.value){k();return}const y=parseFloat(l.value),v=parseFloat(o.value),T=parseFloat(p.value)||0;r("confirm",{lng:y,lat:v,height:T})}return Te(()=>a.visible,y=>{if(!y){w.value="",C.value="",R.value="";return}l.value="",o.value="",p.value="0",w.value="",C.value="",R.value="",y&&setTimeout(()=>{var v;(v=_.value)==null||v.focus()},60)}),(y,v)=>(j(),$e(Za,{to:"body"},[t.visible?(j(),K("div",{key:0,class:"cesium-data-dialog-overlay",onClick:v[4]||(v[4]=pt(T=>y.$emit("cancel"),["self"]))},[g("div",Ni,[g("header",Oi,[g("div",Bi,[we(se(Ot),{size:18,"stroke-width":"2"}),v[5]||(v[5]=g("span",{class:"dialog-title"},"输入模型放置坐标",-1))]),g("p",Ui,de(t.fileName),1),v[6]||(v[6]=g("p",{class:"dialog-hint"}," 该模型未包含嵌入的地理坐标，请输入要放置的位置。 ",-1))]),g("form",{class:"dialog-form",onSubmit:pt(D,["prevent"])},[g("div",Hi,[g("label",Wi,[v[7]||(v[7]=g("span",{class:"coord-label"},"经度 (Longitude)",-1)),be(g("input",{ref_key:"lngInputRef",ref:_,"onUpdate:modelValue":v[0]||(v[0]=T=>l.value=T),class:"coord-input",type:"number",step:"any",min:-180,max:180,placeholder:"例如: 104.1954",onInput:k},null,544),[[Ie,l.value]]),w.value?(j(),K("span",Gi,de(w.value),1)):he("",!0)]),g("label",$i,[v[8]||(v[8]=g("span",{class:"coord-label"},"纬度 (Latitude)",-1)),be(g("input",{"onUpdate:modelValue":v[1]||(v[1]=T=>o.value=T),class:"coord-input",type:"number",step:"any",min:-90,max:90,placeholder:"例如: 35.8617",onInput:k},null,544),[[Ie,o.value]]),C.value?(j(),K("span",qi,de(C.value),1)):he("",!0)]),g("label",ji,[v[9]||(v[9]=g("span",{class:"coord-label"},"高度 (Height 米)",-1)),be(g("input",{"onUpdate:modelValue":v[2]||(v[2]=T=>p.value=T),class:"coord-input",type:"number",step:"any",min:"0",placeholder:"例如: 0",onInput:k},null,544),[[Ie,p.value]]),R.value?(j(),K("span",Vi,de(R.value),1)):he("",!0)])]),g("div",Xi,[g("button",{class:"dialog-btn cancel-btn",type:"button",onClick:v[3]||(v[3]=T=>y.$emit("cancel"))}," 取消 "),g("button",{class:"dialog-btn confirm-btn",type:"submit",disabled:!F.value},[we(se(ja),{size:14,"stroke-width":"2"}),v[10]||(v[10]=Nt(" 确认放置 ",-1))],8,Yi)])],32)])])):he("",!0)]))}},Zi=Pt(Ki,[["__scopeId","data-v-81f307a1"]]);function Ji(t){if(!t)throw new Error("Cesium runtime is required for FluidRenderer.");function e(A){return(A==null?void 0:A._view)||(A==null?void 0:A.view)}function a(A){const i=e(A);if(!(i!=null&&i.passState))throw new Error("Cesium scene passState is unavailable.");return i.passState}function r(A){const i=e(A);return(i==null?void 0:i.frustumCommandsList)||(i==null?void 0:i._frustumCommandsList)||[]}const l=`
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
`,o=`
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
`,_=`
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
`,w=`
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
`,C=`
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
`;class R{constructor(i){this.commandType=i.commandType,this.geometry=i.geometry,this.attributeLocations=i.attributeLocations,this.primitiveType=i.primitiveType,this.uniformMap=i.uniformMap,this.vertexShaderSource=i.vertexShaderSource,this.fragmentShaderSource=i.fragmentShaderSource,this.rawRenderState=i.rawRenderState,this.framebuffer=i.framebuffer,this.isPostRender=i.isPostRender,this.outputTexture=i.outputTexture,this.autoClear=t.defaultValue(i.autoClear,!1),this.preExecute=i.preExecute,this.modelMatrix=t.defaultValue(i.modelMatrix,t.Matrix4.IDENTITY),this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.autoClear&&(this.clearCommand=new t.ClearCommand({color:new t.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:t.Pass.OPAQUE}))}createCommand(i){switch(this.commandType){case"Draw":{const c=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW}),u=t.ShaderProgram.fromCache({context:i,attributeLocations:this.attributeLocations,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource}),b=t.RenderState.fromCache(this.rawRenderState);return new t.DrawCommand({owner:this,vertexArray:c,primitiveType:this.primitiveType,uniformMap:this.uniformMap,modelMatrix:this.modelMatrix,shaderProgram:u,framebuffer:this.framebuffer,renderState:b,pass:t.Pass.OPAQUE})}case"Compute":return new t.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0})}}setGeometry(i,c){this.geometry=c;const u=t.VertexArray.fromGeometry({context:i,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:t.BufferUsage.STATIC_DRAW});this.commandToExecute.vertexArray=u}update(i){this.show&&(t.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(i.context),this.commandToExecute.isPostRender=this.isPostRender),t.defined(this.preExecute)&&this.preExecute(this),t.defined(this.clearCommand)&&i.commandList.push(this.clearCommand),i.commandList.push(this.commandToExecute))}isDestroyed(){return!1}destroy(){return t.defined(this.commandToExecute)&&(t.defined(this.commandToExecute.shaderProgram)&&(this.commandToExecute.shaderProgram=this.commandToExecute.shaderProgram.destroy()),t.defined(this.commandToExecute.vertexArray)&&(this.commandToExecute.vertexArray=this.commandToExecute.vertexArray.destroy())),t.destroyObject(this)}}class F{constructor(){}static loadText(i){const c=new XMLHttpRequest;return c.open("GET",i,!1),c.send(),c.responseText}static getFullscreenQuad(){return new t.Geometry({attributes:new t.GeometryAttributes({position:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}),st:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array([0,0,1,0,1,1,0,1])})}),indices:new Uint32Array([3,2,0,0,2,1])})}static createTexture(i){if(t.defined(i.arrayBufferView)){const u={};u.arrayBufferView=i.arrayBufferView,i.source=u,i.flipY=!1}return new t.Texture(i)}static createDepthFramebuffer(i,c,u){return new t.Framebuffer({context:i,colorTextures:[this.createTexture({context:i,width:c,height:u,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(c*u*4)})],depthRenderbuffer:new t.Renderbuffer({context:i,width:c,height:u,format:t.RenderbufferFormat.DEPTH_COMPONENT16}),destroyAttachments:!0})}static createFramebuffer(i,c,u,b=!1){const s={context:i,colorTextures:[c],destroyAttachments:b};return u&&(s.depthTexture=u),new t.Framebuffer(s)}static createRawRenderState(i){const b={viewport:i.viewport,depthTest:i.depthTest,depthMask:i.depthMask,blending:i.blending};return t.Appearance.getDefaultRenderState(!0,!1,b)}}const T=class T{constructor(i,c={}){if(!i)throw new Error("Cesium Viewer is required");this.viewer=i,this._initConfiguration(c),this._initState(),this._createResources(),this._setupRenderPipeline()}_initConfiguration(i){this.config={resolution:new t.Cartesian2(i.width||T.DEFAULTS.width,i.height||T.DEFAULTS.height),dimensions:i.dimensions||T.DEFAULTS.dimensions.clone(),heightRange:{min:i.minHeight??T.DEFAULTS.heightRange[0],max:i.maxHeight??T.DEFAULTS.heightRange[1]},baseHeight:i.baseHeight??T.DEFAULTS.baseHeight,fluidParams:i.fluidParams||T.DEFAULTS.fluidParams.clone(),customParams:i.customParams||T.DEFAULTS.customParams.clone(),waterColor:i.waterColor||T.DEFAULTS.waterColor.clone(),lonLat:i.lonLat||[...T.DEFAULTS.lonLat],timeStep:i.timeStep||T.DEFAULTS.timeStep,heightMapSource:i.heightMapSource||T.DEFAULTS.heightMapSource}}_initState(){this._frameCount=0,this._isActive=!0,this._time=0}setInitialWaterLevel(i){const c=Number(i);!Number.isFinite(c)||!this.config.fluidParams||(this.config.fluidParams.w=Math.max(0,Math.min(1,c)),this.resetSimulation())}resetSimulation(){var i,c;this._frameCount=0,(c=(i=this.viewer.scene).requestRender)==null||c.call(i)}_createResources(){this._createTextures(),this._setupHeightMap(),this._createDebugVisualization()}_createTextures(){const i=()=>F.createTexture({context:this.viewer.scene.context,width:this.config.resolution.x,height:this.config.resolution.y,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:new Float32Array(this.config.resolution.x*this.config.resolution.y*4)});this.textures={A:i(),B:i(),C:i(),D:i()}}_setupHeightMap(){this.heightMapCamera=this._createOrthographicCamera(),this._heightMap=this.config.heightMapSource?this._createHeightMapTexture(this.config.heightMapSource):this._generateHeightMapTexture()}_createHeightMapTexture(i){if(!(i!=null&&i.arrayBufferView)||!i.width||!i.height)throw new Error("Invalid height map source.");return F.createTexture({context:this.viewer.scene.context,width:i.width,height:i.height,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,arrayBufferView:i.arrayBufferView,sampler:new t.Sampler({wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR})})}_generateHeightMapTexture(){var $,Q;const i=this.viewer.scene.context,c=F.createDepthFramebuffer(i,this.config.resolution.x,this.config.resolution.y),u=this.viewer.scene,b=u.frameState,s=a(this.viewer.scene),m=u.camera,M=b.camera,P=s.framebuffer,E=t.BoundingRectangle.clone(s.viewport,new t.BoundingRectangle);let O=null,G=[];try{s.viewport.x=0,s.viewport.y=0,s.viewport.width=this.config.resolution.x,s.viewport.height=this.config.resolution.y,s.framebuffer=c,u.camera=this.heightMapCamera,b.camera=this.heightMapCamera,b.context.uniformState.updateCamera(this.heightMapCamera),G=this._processHeightMapShaders(),this._renderDepthPrepass(s);const q=F.createTexture({context:i,width:this.config.resolution.x,height:this.config.resolution.y,flipY:!1,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT});return O=F.createFramebuffer(i,q),this._copyTexture(c.getColorTexture(0),O),q}finally{this._restoreHeightMapShaders(G),s.framebuffer=P,t.BoundingRectangle.clone(E,s.viewport),u.camera=m,b.camera=M,M&&b.context.uniformState.updateCamera(M),O&&!(($=O.isDestroyed)!=null&&$.call(O))&&O.destroy(),c&&!((Q=c.isDestroyed)!=null&&Q.call(c))&&c.destroy()}}_renderDepthPrepass(i){const c=this.viewer.scene.frameState;c.camera=this.heightMapCamera,this.viewer.scene.frameState.context.uniformState.updateCamera(this.heightMapCamera),this._getDepthRenderCommands().forEach(b=>b.execute(this.viewer.scene.context,i))}_createDebugVisualization(){this.debugEntity=this.viewer.entities.add({position:t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2),box:{dimensions:this.config.dimensions,fill:!1,outline:!0,outlineColor:t.Color.WHITE}})}_setupRenderPipeline(){this._createComputePasses(),this._createMainRenderPass(),this._startRenderLoop()}_createComputePasses(){const i={iTime:()=>this._time,iFrame:()=>this._frameCount,resolution:()=>this.config.resolution,fluidParam:()=>this.config.fluidParams,customParam:()=>this.config.customParams,minHeight:()=>this.config.heightRange.min,maxHeight:()=>this.config.heightRange.max,heightMap:()=>this._heightMap};this.computePasses=[this._createComputePass("A",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.D},shaderSource:o}),this._createComputePass("B",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.D},shaderSource:p}),this._createComputePass("C",{uniforms:{...i,iChannel0:()=>this.textures.A,iChannel1:()=>this.textures.B},shaderSource:_}),this._createComputePass("D",{uniforms:{...i,iChannel0:()=>this.textures.C,iChannel1:()=>this.textures.B},shaderSource:w})]}_createComputePass(i,{uniforms:c,shaderSource:u}){return new R({commandType:"Compute",uniformMap:c,fragmentShaderSource:new t.ShaderSource({sources:[l,u]}),geometry:F.getFullscreenQuad(),outputTexture:this.textures[i],preExecute:b=>b.commandToExecute.outputTexture=this.textures[i]})}_createMainRenderPass(){const i=D([...this.config.lonLat,this.config.baseHeight+this.config.dimensions.z/2],[90,0,0],[this.config.dimensions.x,this.config.dimensions.z,this.config.dimensions.y]);this.mainRenderPass=new R({commandType:"Draw",uniformMap:this._getMainRenderUniforms(),vertexShaderSource:this._getVertexShader(),fragmentShaderSource:new t.ShaderSource({sources:[l,C]}),geometry:this._createBoxGeometry(),modelMatrix:i,attributeLocations:this._getAttributeLocations(),rawRenderState:this._createRenderState()})}_getMainRenderUniforms(){return{iTime:()=>this._time,iFrame:()=>this._frameCount,iResolution:()=>this.config.resolution,iChannel0:()=>this.textures.C,heightMap:()=>this._heightMap,customParam:()=>this.config.customParams,waterColor:()=>this.config.waterColor,colorTexture:()=>{var i,c,u,b;return(b=(u=(c=(i=e(this.viewer.scene))==null?void 0:i.globeDepth)==null?void 0:c.colorFramebufferManager)==null?void 0:u._colorTextures)==null?void 0:b[0]}}}_startRenderLoop(){this.postRenderHandler=this.viewer.scene.postRender.addEventListener(()=>{this._isActive&&(this._time=performance.now()/1e3,this._frameCount+=this.config.timeStep)}),this.computePasses.forEach(i=>this.viewer.scene.primitives.add(i)),this.viewer.scene.primitives.add(this.mainRenderPass)}_screenToWorld(i){const c=this.viewer.camera.getPickRay(i);return this.viewer.scene.globe.pick(c,this.viewer.scene)}_createOrthographicCamera(){const i=new t.Camera(this.viewer.scene);i.frustum=new t.OrthographicOffCenterFrustum;const[c,u]=this.config.lonLat,b=t.Cartesian3.fromDegrees(c,u,this.config.baseHeight),s=t.Transforms.eastNorthUpToFixedFrame(b),m=i.frustum;m.near=.01,m.far=Math.max(this.config.dimensions.z*2,this.config.heightRange.max-this.config.heightRange.min+this.config.dimensions.z),m.left=-this.config.dimensions.x/2,m.right=this.config.dimensions.x/2,m.bottom=-this.config.dimensions.y/2,m.top=this.config.dimensions.y/2;const M=t.Matrix4.getColumn(s,2,new t.Cartesian3);t.Cartesian3.negate(M,M);const P=t.Matrix4.getColumn(s,1,new t.Cartesian3),E=t.Matrix4.getColumn(s,0,new t.Cartesian3),O=t.Cartesian3.multiplyByScalar(M,-m.far,new t.Cartesian3);return i.position=t.Cartesian3.add(b,O,new t.Cartesian3),i.direction=M,i.up=P,i.right=E,i}destroy(){var i,c;this._isActive=!1,typeof this.postRenderHandler=="function"&&(this.postRenderHandler(),this.postRenderHandler=null),[this.mainRenderPass,...this.computePasses||[]].forEach(u=>{u&&this.viewer.scene.primitives.remove(u)}),this.mainRenderPass=null,this.computePasses=[],this.debugEntity&&(this.viewer.entities.remove(this.debugEntity),this.debugEntity=null),Object.values(this.textures||{}).forEach(u=>{var b;u&&!((b=u.isDestroyed)!=null&&b.call(u))&&u.destroy()}),this.textures={},this._heightMap&&!((c=(i=this._heightMap).isDestroyed)!=null&&c.call(i))&&(this._heightMap.destroy(),this._heightMap=null)}_copyTexture(i,c){const u=this.viewer.scene.context,b=a(this.viewer.scene),s=u.createViewportQuadCommand(`uniform sampler2D u_texToCopy;
        in vec2 v_textureCoordinates;
        void main() {
            out_FragColor = texture(u_texToCopy, vec2(v_textureCoordinates.x, 1.0 - v_textureCoordinates.y));
        }`,{uniformMap:{u_texToCopy:()=>i},owner:this}),m=b.framebuffer;b.framebuffer=c,s.execute(u,b),b.framebuffer=m}_getDepthRenderCommands(){var u,b;const i=[],c=r(this.viewer.scene);for(let s=0;s<c.length;++s){const m=c[s],M=(u=m==null?void 0:m.commands)==null?void 0:u[2],P=((b=m==null?void 0:m.indices)==null?void 0:b[2])??(M==null?void 0:M.length)??0;M&&P>0&&i.push(...M.slice(0,P))}return i}_processHeightMapShaders(){const i=[],c=t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(...this.config.lonLat,this.config.baseHeight)),u=t.Matrix4.inverse(c,new t.Matrix4),b=this.viewer.scene.frameState;return this._getDepthRenderCommands().forEach(m=>{var G;if(!((G=m==null?void 0:m.shaderProgram)!=null&&G.fragmentShaderSource)||!m.uniformMap)return;const M=Object.prototype.hasOwnProperty.call(m.uniformMap,"u_inverseEnuMatrix"),P=m.uniformMap.u_inverseEnuMatrix,E=m.shaderProgram,O=new t.Matrix4;m.uniformMap.u_inverseEnuMatrix=()=>{const $=m.modelMatrix||t.Matrix4.IDENTITY;return t.Matrix4.multiply(u,$,O)},m.heightMap_ShaderProgram||(m.heightMap_ShaderProgram=this._getDerivedShaderProgram(b.context,m.shaderProgram,"Height_Map")),m.shaderProgram=m.heightMap_ShaderProgram,i.push({command:m,hadInverseUniform:M,originalInverseUniform:P,originalShaderProgram:E})}),i}_restoreHeightMapShaders(i){i.forEach(c=>{const{command:u,hadInverseUniform:b,originalInverseUniform:s,originalShaderProgram:m}=c;u!=null&&u.uniformMap&&(u.shaderProgram=m,b?u.uniformMap.u_inverseEnuMatrix=s:delete u.uniformMap.u_inverseEnuMatrix)})}_getDerivedShaderProgram(i,c,u){let b=i.shaderCache.getDerivedShaderProgram(c,u);return t.defined(b)||(b=this._createHeightMapShaderProgram(i,c,u)),b}_createHeightMapShaderProgram(i,c,u){const b=this._modifyFragmentShader(c.fragmentShaderSource);return i.shaderCache.createDerivedShaderProgram(c,u,{vertexShaderSource:c.vertexShaderSource,fragmentShaderSource:b,attributeLocations:c._attributeLocations})}_modifyFragmentShader(i){const c=i.sources.map(u=>t.ShaderSource.replaceMain(u,"czm_heightMap_main"));return c.push(`
        uniform mat4 u_inverseEnuMatrix;
        void main() {
            czm_heightMap_main();
            vec3 posMC = (u_inverseEnuMatrix * vec4(v_positionMC, 1.0)).xyz;
            out_FragColor = vec4(posMC.z, out_FragColor.gb, 1.0);
        }
    `),new t.ShaderSource({sources:c,defines:i.defines})}_createBoxGeometry(){return t.BoxGeometry.createGeometry(t.BoxGeometry.fromDimensions({vertexFormat:t.VertexFormat.POSITION_AND_ST,dimensions:new t.Cartesian3(1,1,1)}))}_getAttributeLocations(){return t.GeometryPipeline.createAttributeLocations(this._createBoxGeometry())}_createRenderState(){return{cull:{enabled:!1,face:t.CullFace.BACK},depthRange:{near:0,far:1},depthTest:{enabled:!0},depthMask:!0,colorMask:{red:!0,green:!0,blue:!0,alpha:!0}}}_getVertexShader(){return new t.ShaderSource({sources:[`
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
            }`]})}};ha(T,"DEFAULTS",{width:1024,height:1024,dimensions:new t.Cartesian3(2500,2500,2500),heightRange:[0,2e3],baseHeight:0,fluidParams:new t.Cartesian4(.995,.25,1e-4,.03),customParams:new t.Cartesian4(10,20,.2,10),waterColor:new t.Cartesian3(.05,.31,.64),lonLat:[120.20998865783179,30.13650797533829],timeStep:.3,heightMapSource:null});let k=T;const D=(A=[0,0,0],i=[0,0,0],c=[1,1,1])=>{const u=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationX(t.Math.toRadians(i[0]))),b=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationY(t.Math.toRadians(i[1]))),s=t.Matrix4.fromRotationTranslation(t.Matrix3.fromRotationZ(t.Math.toRadians(i[2])));A instanceof t.Cartesian3||(A=t.Cartesian3.fromDegrees(...A));const m=t.Transforms.eastNorthUpToFixedFrame(A);t.Matrix4.multiply(m,u,m),t.Matrix4.multiply(m,b,m),t.Matrix4.multiply(m,s,m);const M=t.Matrix4.fromScale(new t.Cartesian3(...c));return t.Matrix4.multiply(m,M,new t.Matrix4)},y=`
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
    `;function v(){return new t.PostProcessStage({fragmentShader:y})}return{FluidRenderer:k,createSkyEffect:v}}const Qi={key:0,class:"fluid-root"},eo={class:"fluid-panel"},to={class:"panel-actions"},ao=["disabled"],ro={key:0,class:"selected-text"},no={class:"param-list"},io={class:"param-row"},oo={class:"param-row"},so={class:"param-row"},lo={key:0,class:"param-row"},co=["min","max","step"],uo=["min","max","step"],ho={class:"param-row color-row"},Sa=1024,It=1e4,wa=1200,fo=100,mo=.01,po=.03,go=60,Yt=64,vo=160,yo={__name:"FluidSimulationPanel",props:{headless:{type:Boolean,default:!1},getViewer:{type:Function,required:!0},getCesium:{type:Function,required:!0},params:{type:Object,default:()=>({})}},emits:["close","state-change"],setup(t,{expose:e,emit:a}){const r=t,l=a,o=ra(),p=ee(10),_=ee(20),w=ee(3),C=ee("#0d4fa3"),R=ee(null),F=ee(null),k=ee(null),D=ee(!1),y=ee(!1),v=ee(null),T=ee(null);let A=null,i=null,c=null,u=null,b=null,s=null,m=0;const M=Le(()=>!Number.isFinite(v.value)||!Number.isFinite(T.value)?"":`经度 ${v.value.toFixed(6)} / 纬度 ${T.value.toFixed(6)}`),P=Le(()=>Number.isFinite(F.value)&&Number.isFinite(k.value)),E=Le(()=>{if(!P.value)return 1;const x=Math.abs(k.value-F.value);return Math.max(x/1e3,.01)});Te([p,_,w,C],st),Te(R,lt),Te(()=>r.params,x=>{G(x||{})},{deep:!0,immediate:!0}),Te([D,y,M,R,F,k],$,{immediate:!0}),Ja(()=>{Ee(!0)});function O(){var N,V;const x=(N=r.getViewer)==null?void 0:N.call(r),S=((V=r.getCesium)==null?void 0:V.call(r))||window.Cesium;if(!x||!S)return o.warning("Cesium 场景尚未就绪。"),null;if(!A){const te=Ji(S);A=te.FluidRenderer,i=te.createSkyEffect}return{viewer:x,Cesium:S}}function G(x){Number.isFinite(Number(x.threshold))&&(p.value=Number(x.threshold)),Number.isFinite(Number(x.blend))&&(_.value=Number(x.blend)),Number.isFinite(Number(x.lightStrength))&&(w.value=Number(x.lightStrength)),Ve(x.waterColor)&&(C.value=x.waterColor),Number.isFinite(Number(x.waterLevel))&&(R.value=Number(x.waterLevel))}function $(){l("state-change",{isPicking:D.value,hasFluid:y.value,selectedText:M.value,waterLevel:R.value,waterLevelMin:F.value,waterLevelMax:k.value})}function Q(){const x=O();if(!x)return;const{viewer:S,Cesium:N}=x;Xe(),Ue(S,N),D.value=!0,c=new N.ScreenSpaceEventHandler(S.scene.canvas),c.setInputAction(V=>{q(S,N,V.position)},N.ScreenSpaceEventType.LEFT_CLICK)}async function q(x,S,N){var Fe,d;const V=tt(x,N);if(!V){o.warning("未选中可用地形位置。");return}const te=++m;Xe();const ue=S.Cartographic.fromCartesian(V),X=S.Math.toDegrees(ue.longitude),Y=S.Math.toDegrees(ue.latitude),ce=Number(ue.height),ie=Number.isFinite(ce)?ce:0,Pe=new S.Cartesian3(It,It,0);$a("正在请求模拟范围高度数据...");try{Ye();const f=Number(p.value)||0,B=Number(_.value)||0,H=Number(w.value)||0,n=await re(x,S,{lon:X,lat:Y,centerHeight:ie,dimensions:Pe}),h=U(n,ie),L=h.baseHeight,z=h.depth,J=I(h,ie),oe=new S.Cartesian3(It,It,z);if(te!==m)return;F.value=h.minHeight,k.value=h.maxHeight,R.value=J,n||o.warning("范围高度预请求不可用，已回退到当前场景捕捉。",{duration:4200}),u=new A(x,{lonLat:[X,Y],width:Sa,height:Sa,dimensions:oe,baseHeight:L,minHeight:h.minHeight,maxHeight:h.maxHeight,heightMapSource:n,waterColor:Z(S,C.value),customParams:new S.Cartesian4(f,B,H,10),fluidParams:new S.Cartesian4(.9+H/10*.099,Math.min(1,B/50),f/5e4,me(J,h))}),v.value=X,T.value=Y,y.value=!0,(d=(Fe=x.scene).requestRender)==null||d.call(Fe),o.success("水体流体已创建。")}catch(f){o.error("水体流体创建失败",f),o.warning("当前显卡或 Cesium 版本可能不支持该流体渲染管线。",{closable:!0})}finally{qa()}}async function re(x,S,N){const V=x==null?void 0:x.terrainProvider,te=ne(N.dimensions);if(!V)return null;if(S.EllipsoidTerrainProvider&&V instanceof S.EllipsoidTerrainProvider)return qe(te);if(typeof S.sampleTerrain!="function"&&typeof S.sampleTerrainMostDetailed!="function")return null;try{return await le(x,S,N,te)}catch(ue){if(te<=Yt)throw ue;return le(x,S,N,Yt)}}async function le(x,S,N,V){const te=xe(S,N,V),ue=await fe(S,x.terrainProvider,te);return Qe(ue||te,{size:V})}function ne(x){const S=Math.max(Number(x==null?void 0:x.x)||0,Number(x==null?void 0:x.y)||0),N=Math.ceil(S/go)+1;return ye(N,Yt,vo)}function ye(x,S,N){return Math.max(S,Math.min(N,Math.round(x)))}function xe(x,{lon:S,lat:N,centerHeight:V,dimensions:te},ue){const X=x.Cartesian3.fromDegrees(S,N,V),Y=x.Transforms.eastNorthUpToFixedFrame(X),ce=[],ie=Math.max(1,ue-1);for(let Pe=0;Pe<ue;Pe++){const d=(.5-Pe/ie)*te.y;for(let f=0;f<ue;f++){const H=(f/ie-.5)*te.x,n=new x.Cartesian3(H,d,0),h=x.Matrix4.multiplyByPoint(Y,n,new x.Cartesian3);ce.push(x.Cartographic.fromCartesian(h))}}return ce}async function fe(x,S,N){const V=ve(S);return Number.isInteger(V)&&typeof x.sampleTerrain=="function"?x.sampleTerrain(S,V,N):typeof x.sampleTerrainMostDetailed=="function"?x.sampleTerrainMostDetailed(S,N):x.sampleTerrain(S,10,N)}function ve(x){const S=Number(x==null?void 0:x._bottomLevel);return Number.isFinite(S)?Math.max(0,S-1):null}function Qe(x,{size:S}){var te;const N=W(x);if(!N)return null;const V=new Float32Array(S*S*4);for(let ue=0;ue<S*S;ue++){const X=Number((te=x[ue])==null?void 0:te.height),Y=ue*4;V[Y]=Number.isFinite(X)?Be(X,N.minHeight,N.maxHeight):N.minHeight,V[Y+1]=0,V[Y+2]=0,V[Y+3]=1}return{width:S,height:S,arrayBufferView:V,minHeight:N.minHeight,maxHeight:N.maxHeight}}function qe(x){return{width:x,height:x,arrayBufferView:new Float32Array(x*x*4),minHeight:0,maxHeight:0}}function W(x){let S=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY;for(const V of x||[]){const te=Number(V==null?void 0:V.height);Number.isFinite(te)&&(S=Math.min(S,te),N=Math.max(N,te))}return!Number.isFinite(S)||!Number.isFinite(N)?null:{minHeight:S,maxHeight:N}}function U(x,S){const N=Number(x==null?void 0:x.minHeight),V=Number(x==null?void 0:x.maxHeight);if(Number.isFinite(N)&&Number.isFinite(V)){const X=Number(S),Y=Number.isFinite(X)?Math.min(N,V,X):Math.min(N,V),ce=Number.isFinite(X)?Math.max(N,V,X):Math.max(N,V),ie=Math.max(ce-Y,mo);return{baseHeight:Y,depth:ie,minHeight:Y,maxHeight:Y+ie}}const te=Number(S),ue=Number.isFinite(te)?te-fo:0;return{baseHeight:ue,depth:wa,minHeight:ue,maxHeight:ue+wa}}function I(x,S){const N=x.minHeight+x.depth*po,V=Number(S),te=Number.isFinite(V)?V:N;return Be(te,x.minHeight,x.maxHeight)}function me(x,S){const N=S.maxHeight-S.minHeight;return!Number.isFinite(N)||N<=0?0:Be((x-S.minHeight)/N,0,1)}function je(){return!Number.isFinite(F.value)||!Number.isFinite(k.value)?null:{minHeight:Math.min(F.value,k.value),maxHeight:Math.max(F.value,k.value)}}function Z(x,S){const N=et(S)||et("#0d4fa3");return new x.Cartesian3(N.red,N.green,N.blue)}function _e(){var N;const x=et(C.value),S=(N=u==null?void 0:u.config)==null?void 0:N.waterColor;!x||!S||(S.x=x.red,S.y=x.green,S.z=x.blue)}function Ve(x){return typeof x=="string"&&/^#[0-9a-f]{6}$/i.test(x)}function et(x){return Ve(x)?{red:Number.parseInt(x.slice(1,3),16)/255,green:Number.parseInt(x.slice(3,5),16)/255,blue:Number.parseInt(x.slice(5,7),16)/255}:null}function Be(x,S,N){return Math.max(S,Math.min(N,x))}function tt(x,S){if(!S)return null;if(x.scene.pickPositionSupported&&typeof x.scene.pickPosition=="function"){const V=x.scene.pickPosition(S);if(V)return V}const N=x.camera.getPickRay(S);return N?x.scene.globe.pick(N,x.scene):null}function st(){var V,te,ue;if(!(u!=null&&u.config))return;const x=Number(p.value)||0,S=Number(_.value)||0,N=Number(w.value)||0;u.config.customParams&&(u.config.customParams.x=x,u.config.customParams.y=S,u.config.customParams.z=N),u.config.fluidParams&&(u.config.fluidParams.x=.9+N/10*.099,u.config.fluidParams.y=Math.min(1,S/50),u.config.fluidParams.z=x/5e4),_e(),(ue=(te=(V=u.viewer)==null?void 0:V.scene)==null?void 0:te.requestRender)==null||ue.call(te)}function lt(){var te,ue,X,Y;if(!((te=u==null?void 0:u.config)!=null&&te.fluidParams))return;const x=je(),S=Number(R.value);if(!x||!Number.isFinite(S))return;const N=Be(S,x.minHeight,x.maxHeight);if(N!==S){R.value=N;return}const V=me(N,x);typeof u.setInitialWaterLevel=="function"?u.setInitialWaterLevel(V):(u.config.fluidParams.w=V,(Y=(X=(ue=u.viewer)==null?void 0:ue.scene)==null?void 0:X.requestRender)==null||Y.call(X))}function Ue(x,S){var N,V;if(!s){const te=x.scene;s={shadows:x.shadows,resolutionScale:x.resolutionScale,msaaSamples:te.msaaSamples,depthTestAgainstTerrain:te.globe.depthTestAgainstTerrain,logarithmicDepthBuffer:te.logarithmicDepthBuffer,highDynamicRange:te.highDynamicRange,fogEnabled:(N=te.fog)==null?void 0:N.enabled,showGroundAtmosphere:te.globe.showGroundAtmosphere,skyAtmosphereShow:(V=te.skyAtmosphere)==null?void 0:V.show,enableLighting:te.globe.enableLighting}}x.shadows=!0,x.resolutionScale=1,x.scene.msaaSamples=4,x.scene.globe.depthTestAgainstTerrain=!0,x.scene.logarithmicDepthBuffer=!0,x.scene.highDynamicRange=!0,x.scene.fog&&(x.scene.fog.enabled=!0),x.scene.globe.showGroundAtmosphere=!0,x.scene.skyAtmosphere&&(x.scene.skyAtmosphere.show=!0),x.scene.globe.enableLighting=!0,!b&&i&&(b=i(S),x.scene.postProcessStages.add(b))}function dt(x){if(!x||!s)return;const S=x.scene;x.shadows=s.shadows,x.resolutionScale=s.resolutionScale,s.msaaSamples!==void 0&&(S.msaaSamples=s.msaaSamples),S.globe.depthTestAgainstTerrain=s.depthTestAgainstTerrain,S.logarithmicDepthBuffer=s.logarithmicDepthBuffer,S.highDynamicRange=s.highDynamicRange,S.fog&&s.fogEnabled!==void 0&&(S.fog.enabled=s.fogEnabled),S.globe.showGroundAtmosphere=s.showGroundAtmosphere,S.skyAtmosphere&&s.skyAtmosphereShow!==void 0&&(S.skyAtmosphere.show=s.skyAtmosphereShow),S.globe.enableLighting=s.enableLighting,s=null}function ct(){Ee(!1),o.success("水体流体已清除。")}function Xe(){c&&(c.destroy(),c=null),D.value=!1}function Ye(){if(u){try{u.destroy()}catch{}u=null,y.value=!1}}function Ee(x){var N,V,te;const S=(N=r.getViewer)==null?void 0:N.call(r);if(m+=1,Xe(),Ye(),v.value=null,T.value=null,R.value=null,F.value=null,k.value=null,S&&b){try{S.scene.postProcessStages.remove(b)}catch{}b=null}x&&S&&dt(S),(te=(V=S==null?void 0:S.scene)==null?void 0:V.requestRender)==null||te.call(V)}function ze(){Ee(!0),l("close")}return e({startPickHeightMap:Q,clearFluid:ct}),(x,S)=>t.headless?he("",!0):(j(),K("div",Qi,[g("div",eo,[g("div",{class:"panel-head"},[S[9]||(S[9]=g("span",{class:"panel-title"},"水体流体",-1)),g("button",{class:"panel-close",title:"关闭",onClick:ze}," × ")]),g("div",to,[g("button",{class:De(["action-btn primary",{active:D.value}]),onClick:Q},de(D.value?"等待选点":"捕捉高度图"),3),g("button",{class:"action-btn",disabled:!y.value&&!D.value,onClick:ct}," 清除 ",8,ao)]),M.value?(j(),K("div",ro,de(M.value),1)):he("",!0),g("div",no,[g("label",io,[S[10]||(S[10]=g("span",null,"阈值",-1)),be(g("input",{"onUpdate:modelValue":S[0]||(S[0]=N=>p.value=N),type:"range",min:"0",max:"500",step:"0.0001"},null,512),[[Ie,p.value,void 0,{number:!0}]]),be(g("input",{"onUpdate:modelValue":S[1]||(S[1]=N=>p.value=N),class:"number-input",type:"number",min:"0",max:"500",step:"0.0001"},null,512),[[Ie,p.value,void 0,{number:!0}]])]),g("label",oo,[S[11]||(S[11]=g("span",null,"混合",-1)),be(g("input",{"onUpdate:modelValue":S[2]||(S[2]=N=>_.value=N),type:"range",min:"0",max:"50",step:"0.0001"},null,512),[[Ie,_.value,void 0,{number:!0}]]),be(g("input",{"onUpdate:modelValue":S[3]||(S[3]=N=>_.value=N),class:"number-input",type:"number",min:"0",max:"50",step:"0.0001"},null,512),[[Ie,_.value,void 0,{number:!0}]])]),g("label",so,[S[12]||(S[12]=g("span",null,"光强",-1)),be(g("input",{"onUpdate:modelValue":S[4]||(S[4]=N=>w.value=N),type:"range",min:"0",max:"10",step:"0.0001"},null,512),[[Ie,w.value,void 0,{number:!0}]]),be(g("input",{"onUpdate:modelValue":S[5]||(S[5]=N=>w.value=N),class:"number-input",type:"number",min:"0",max:"10",step:"0.0001"},null,512),[[Ie,w.value,void 0,{number:!0}]])]),P.value?(j(),K("label",lo,[S[13]||(S[13]=g("span",null,"水位",-1)),be(g("input",{"onUpdate:modelValue":S[6]||(S[6]=N=>R.value=N),type:"range",min:F.value,max:k.value,step:E.value},null,8,co),[[Ie,R.value,void 0,{number:!0}]]),be(g("input",{"onUpdate:modelValue":S[7]||(S[7]=N=>R.value=N),class:"number-input",type:"number",min:F.value,max:k.value,step:E.value},null,8,uo),[[Ie,R.value,void 0,{number:!0}]])])):he("",!0),g("label",ho,[S[14]||(S[14]=g("span",null,"水色",-1)),be(g("input",{"onUpdate:modelValue":S[8]||(S[8]=N=>C.value=N),class:"color-input",type:"color"},null,512),[[Ie,C.value]]),g("span",{class:"color-swatch",style:Ga({backgroundColor:C.value})},null,4)])])])]))}},xo=Pt(yo,[["__scopeId","data-v-9ecdafb8"]]),ia="https://cdn.jsdelivr.net/npm/cesium@1.122/Build/Cesium/",_o=`${ia}Cesium.js`,bo=`${ia}Widgets/widgets.css`;async function So({ionToken:t}={}){window.CESIUM_BASE_URL||(window.CESIUM_BASE_URL=ia),await To(bo,"cesium-widgets-style"),await wo(_o,"cesium-runtime-script");const e=window.Cesium;if(!e)throw new Error("Cesium global 未找到（window.Cesium 为空）");return Ut(e,t),e}function Ut(t,e){e&&(t!=null&&t.Ion)&&(t.Ion.defaultAccessToken=e)}function wo(t,e){return new Promise((a,r)=>{const l=document.getElementById(e);if(l){if(l.getAttribute("data-loaded")==="true"){a();return}l.addEventListener("load",()=>a(),{once:!0}),l.addEventListener("error",()=>r(new Error(`脚本加载失败: ${t}`)),{once:!0});return}const o=document.createElement("script");o.id=e,o.src=t,o.async=!0,o.onload=()=>{o.setAttribute("data-loaded","true"),a()},o.onerror=()=>r(new Error(`脚本加载失败: ${t}`)),document.head.appendChild(o)})}function To(t,e){return new Promise((a,r)=>{if(document.getElementById(e)){a();return}const o=document.createElement("link");o.id=e,o.rel="stylesheet",o.href=t,o.onload=()=>a(),o.onerror=()=>r(new Error(`样式加载失败: ${t}`)),document.head.appendChild(o)})}const Co="Asia/Shanghai",Mo="UTC+8",Do=new Intl.DateTimeFormat("zh-CN",{timeZone:Co,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Lo(t,e){var a,r,l,o,p,_,w;if(!(!t||!(e!=null&&e.JulianDate))){if((a=t.animation)!=null&&a.viewModel&&(t.animation.viewModel.dateFormatter=(...C)=>Fo(t,e,...C),t.animation.viewModel.timeFormatter=(...C)=>Ao(t,e,...C)),t.timeline){const C=(...R)=>Eo(t,e,...R);t.timeline.makeLabel=C,"_makeLabel"in t.timeline&&(t.timeline._makeLabel=C),(l=(r=t.timeline).updateFromClock)==null||l.call(r),(p=(o=t.timeline).zoomTo)==null||p.call(o,t.clock.startTime,t.clock.stopTime)}(w=(_=t.scene).requestRender)==null||w.call(_)}}function oa(t,e,...a){var _;const r=a.find(Po)||((_=t==null?void 0:t.clock)==null?void 0:_.currentTime);if(!r)return{year:"0000",month:"01",day:"01",hour:"00",minute:"00",second:"00"};const l=e.JulianDate.toDate(r),o=Do.formatToParts(l),p=Object.fromEntries(o.filter(({type:w})=>w!=="literal").map(({type:w,value:C})=>[w,C]));return{year:p.year||"0000",month:p.month||"01",day:p.day||"01",hour:p.hour||"00",minute:p.minute||"00",second:p.second||"00"}}function Po(t){return t&&typeof t.dayNumber=="number"&&typeof t.secondsOfDay=="number"}function Fo(t,e,...a){const{year:r,month:l,day:o}=oa(t,e,...a);return`${r}-${l}-${o}`}function Ao(t,e,...a){const{hour:r,minute:l,second:o}=oa(t,e,...a);return`${r}:${l}:${o} ${Mo}`}function Eo(t,e,...a){const{month:r,day:l,hour:o,minute:p}=oa(t,e,...a);return`${r}-${l} ${o}:${p}`}function Ro({getViewer:t}){let e=null,a=null;function r(){var _;const p=t==null?void 0:t();if(p&&((_=p._cesiumWidget)!=null&&_._creditContainer&&(p._cesiumWidget._creditContainer.style.display="none"),l(),e=setInterval(()=>{const w=document.querySelector(".cesium-credit-container");w&&w.innerHTML.length>0&&(w.innerHTML="",w.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;")},500),!document.getElementById("cesium-credit-override"))){const w=document.createElement("style");w.id="cesium-credit-override",w.textContent=`
      .cesium-credit-container { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
      .cesium-credit-text { display: none !important; visibility: hidden !important; }
      .cesium-credit-logo-link { display: none !important; visibility: hidden !important; }
      [class*="credit"] { display: none !important; visibility: hidden !important; }
    `,document.head.appendChild(w),a=w}}function l(){var w;const p=t==null?void 0:t();if(!p)return;(w=p._cesiumWidget)!=null&&w._creditContainer&&(p._cesiumWidget._creditContainer.style.cssText="display: none !important; visibility: hidden !important; width: 0 !important; height: 0 !important;",p._cesiumWidget._creditContainer.innerHTML=""),document.querySelectorAll('[class*="credit"], [class*="geostar"], [class*="GeoStar"]').forEach(C=>{C.style.cssText="display: none !important; visibility: hidden !important;",C.innerHTML=""}),p.scene&&p.scene.frameState&&p.scene.frameState.creditDisplay&&(p.scene.frameState.creditDisplay.hasCredits=()=>!1,p.scene.frameState.creditDisplay.destroy=()=>{})}function o(){e&&(clearInterval(e),e=null),a&&(a.remove(),a=null)}return{installCreditHider:r,cleanupCreditHider:o}}const Kt="经度: --, 纬度: --, 海拔: --米";function ko({getViewer:t,getCesium:e,onCoordinatePick:a}){let r=null,l=null,o=null;const p=ee("经度: 0.000000, 纬度: 0.000000, 海拔: 0.00米");function _(){const D=t==null?void 0:t(),y=e==null?void 0:e();!D||!y||(k(),l=D.scene.canvas,r=new y.ScreenSpaceEventHandler(l),o=()=>{p.value=Kt},l.addEventListener("mouseleave",o),r.setInputAction(v=>{w(v.endPosition,D,y)},y.ScreenSpaceEventType.MOUSE_MOVE),r.setInputAction(v=>{const T=v.endPosition,A=v.startPosition;if(!y.defined(D.terrainProvider))return;const i=D.scene.globe.ellipsoid;if(!D.camera.pickEllipsoid(A,i)){const u=D.camera;u.rotate(y.Cartesian3.UNIT_X,-.002*(T.y-A.y)),u.rotate(y.Cartesian3.UNIT_Y,-.002*(T.x-A.x))}},y.ScreenSpaceEventType.RIGHT_DRAG),r.setInputAction(()=>{},y.ScreenSpaceEventType.RIGHT_DOWN),r.setInputAction(()=>{},y.ScreenSpaceEventType.RIGHT_UP))}function w(D,y,v){const T=C(D,y,v);if(!T){p.value=Kt;return}const A=v.Cartographic.fromCartesian(T);if(!A||!Number.isFinite(A.longitude)||!Number.isFinite(A.latitude)){p.value=Kt;return}const i=v.Math.toDegrees(A.longitude).toFixed(6),c=v.Math.toDegrees(A.latitude).toFixed(6),u=(Number.isFinite(A.height)?A.height:0).toFixed(2);p.value=`经度: ${i}, 纬度: ${c}, 海拔: ${u}米`,typeof a=="function"&&a({lng:Number(i),lat:Number(c),height:Number(u)})}function C(D,y,v){if(!D)return null;const T=y.scene,A=R(D,T,v);if(A)return A;const i=y.camera.getPickRay(D);if(i){const u=T.globe.pick(i,T);if(F(u))return u}const c=y.camera.pickEllipsoid(D,T.globe.ellipsoid);return F(c)?c:null}function R(D,y,v){if(!y.pickPositionSupported||typeof y.pickPosition!="function")return null;const T=typeof y.pick=="function"?y.pick(D):null;if(!v.defined(T))return null;const A=y.pickPosition(D);return F(A)?A:null}function F(D){return!!D&&Number.isFinite(D.x)&&Number.isFinite(D.y)&&Number.isFinite(D.z)}function k(){o&&l&&(l.removeEventListener("mouseleave",o),o=null),l=null,r&&(r.destroy(),r=null)}return{coordinateDisplay:p,setupInteractions:_,cleanupInteractions:k}}function Ta(t,e=""){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(t);return a??e}catch{return e}}function Io(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(e||""))}catch{}}function xt(t,e){if(typeof window>"u")return e;try{const a=window.localStorage.getItem(t);return a==null?e:a==="true"}catch{return e}}function Mt(t,e){if(!(typeof window>"u"))try{window.localStorage.setItem(t,String(!!e))}catch{}}function Ca(t){if(!t)throw new Error("Cesium is required to create GeoTerrainProvider.");const{defined:e,DeveloperError:a,Ellipsoid:r,Resource:l,HeightmapTerrainData:o,Rectangle:p,TileAvailability:_,CustomHeightmapTerrainProvider:w}=t;function C(D,y,v,T,A,i){const c=D.tileXYToRectangle(v,T,A);return e(p.intersection(c,y,i))}function R(D){const y=[[[0,0,1,0]]],v=new _(D.tilingScheme,19);for(let T=0;T<y.length;T++){const A=y[T];for(let i=0;i<A.length;i++){const c=A[i];v.addAvailableTileRange(T,c[0],c[1],c[2],c[3])}}return v}function F(D,y,v,T,A){const i=new o({buffer:D._transformBuffer(y),width:D._width,height:D._height,childTileMask:D._getChildTileMask(T,A,v),structure:D._terrainDataStructure});return i._skirtHeight=6e3,D.availability.addAvailableTileRange(v,T,A,T,A),i}class k extends w{constructor(y={}){if(super({...y,ellipsoid:r.WGS84,width:64,height:64,callback(){return new Float32Array(1024)}}),!e(y.url))throw new a("options.url is required.");this._dataType=y.dataType??"int16",this._url=y.url,this._subdomains=y.subdomains,this._token=y.token,this._rectangles=[],this._topLevel=5,this._bottomLevel=11,this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0},this._availability=R(this)}get availability(){return this._availability}requestTileGeometry(y,v,T,A){if(T>=this._bottomLevel)return Promise.reject(new Error(`Level ${T} is outside supported range.`));if(T<this._topLevel)return Promise.resolve(new o({buffer:this._getVHeightBuffer(),width:this._width,height:this._height,childTileMask:this._getChildTileMask(y,v,T),structure:this._terrainDataStructure}));let i=this._url;if(Array.isArray(this._subdomains)&&this._subdomains.length){const u=this._subdomains[(y+v)%this._subdomains.length];i=i.replace("{s}",u)}i=i.replace("{token}",this._token).replace("{x}",y).replace("{y}",v).replace("{z}",T+1);const c=l.fetchArrayBuffer({url:i,request:A});if(c)return c.then(u=>u.byteLength<1e3?Promise.reject(new Error("Invalid terrain data.")):mr.inflate(u)).then(u=>F(this,u,T,y,v))}getTileDataAvailable(y,v,T){return T<this._bottomLevel}_transformBuffer(y){let v=2;this._dataType==="float"&&(v=4);const T=y;if(T.length!==22500*v)return null;const A=new ArrayBuffer(v),i=new DataView(A),c=this._width,u=this._height,b=new Uint8Array(c*u*4);for(let s=0;s<u;s++)for(let m=0;m<c;m++){const M=Math.floor(149*s/(u-1)),P=Math.floor(149*m/(c-1)),E=v*(150*M+P);let O;v===4?(i.setInt8(0,T[E]),i.setInt8(1,T[E+1]),i.setInt8(2,T[E+2]),i.setInt8(3,T[E+3]),O=i.getFloat32(0,!0)):O=T[E]+256*T[E+1],(O>1e4||O<-2e3)&&(O=0);const G=(O+1e3)/.001,$=4*(s*c+m);b[$]=G/65536,b[$+1]=(G-256*b[$]*256)/256,b[$+2]=G-256*b[$]*256-256*b[$+1],b[$+3]=255}return b}_getVHeightBuffer(){let y=this._vHeightBuffer;if(!e(y)){y=new Uint8ClampedArray(this._width*this._height*4);for(let v=0;v<this._width*this._height*4;)y[v++]=15,y[v++]=66,y[v++]=64,y[v++]=255;this._vHeightBuffer=y}return y}_getChildTileMask(y,v,T){const A=new p,i=this._tilingScheme,c=this._rectangles,u=i.tileXYToRectangle(y,v,T);let b=0;for(let s=0;s<c.length&&b!==15;s++){const m=c[s];if(m.maxLevel<=T)continue;const M=m.rectangle,P=p.intersection(M,u,A);e(P)&&(C(i,M,2*y,2*v,T+1,A)&&(b|=4),C(i,M,2*y+1,2*v,T+1,A)&&(b|=8),C(i,M,2*y,2*v+1,T+1,A)&&(b|=1),C(i,M,2*y+1,2*v+1,T+1,A)&&(b|=2))}return b}}return k}function zo({getViewer:t,getCesium:e,activeBasemap:a,applyBasemap:r,resolvePresetLayerIds:l,message:o,validationTimeoutMs:p=5e3,circuitBreakThreshold:_=3}){const w=new Map,C=new Set,R={value:!1};let F=null,k=[],D=[];function y(b,s={}){return b?C.has(b)&&!s.forceReload?(R.value=!0,!1):r(b,s)?(v(b),!0):(T(b),!1):!1}function v(b){var G,$;i();const s=t==null?void 0:t();if(!(s!=null&&s.imageryLayers))return;const m=l(b),M=[];for(let Q=0;Q<s.imageryLayers.length;Q++){const q=s.imageryLayers.get(Q);(G=q==null?void 0:q.imageryProvider)!=null&&G._descriptorId&&m.includes(q.imageryProvider._descriptorId)&&M.push(q)}if(!M.length)return;k=M;let P=!1;const E=()=>{P=!0,i(),w.delete(b),C.has(b)&&(C.delete(b),R.value=C.size>0)},O=Q=>{P||(T(b),i())};for(const Q of k){const q=Q.imageryProvider;if(q!=null&&q.errorEvent&&(q.errorEvent.addEventListener(O),D.push(()=>q.errorEvent.removeEventListener(O))),q!=null&&q.ready){E();return}($=q==null?void 0:q.readyPromise)!=null&&$.then&&q.readyPromise.then(E).catch(O)}F=setTimeout(()=>{P||T(b)},p)}function T(b){const s=(w.get(b)||0)+1;w.set(b,s),s>=_&&(C.add(b),R.value=!0,A(b))}function A(b){var m,M,P,E,O;const s="custom_China_Blender_preset_2";if(b===s){const G="imagery_tianditu_preset";C.has(G)?(M=o==null?void 0:o.error)==null||M.call(o,"所有底图均加载失败，请检查网络",{closable:!0}):((m=o==null?void 0:o.warning)==null||m.call(o,"底图加载失败，已降级到天地图影像",{closable:!0}),a.value=G);return}if(!C.has(s))(P=o==null?void 0:o.warning)==null||P.call(o,"底图加载失败，已降级到默认底图",{closable:!0}),a.value=s;else{const G="imagery_tianditu_preset";C.has(G)?(O=o==null?void 0:o.error)==null||O.call(o,"所有底图均加载失败，请检查网络",{closable:!0}):((E=o==null?void 0:o.warning)==null||E.call(o,"底图加载失败，已降级到天地图影像",{closable:!0}),a.value=G)}}function i(){F&&(clearTimeout(F),F=null);for(const b of D)try{b()}catch{}D=[],k=[]}function c(){w.clear(),C.clear(),R.value=!1,i()}function u(){i(),w.clear(),C.clear(),R.value=!1}return{switchBasemap:y,resetCircuitBreaker:c,isCircuitOpen:R,cleanup:u}}const Tt=["0","1","2","3","4","5","6","7"],Ct="https://t{s}.tianditu.gov.cn/",No="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",Oo=96188,Dt="custom-xyz",Ma="webgis_custom_basemap_url",Bo="cesium_tdt_label_layer_visible",Da="cesium_tdt_boundary_layer_visible",La="cesium_tdt_text_label_layer_visible",Pa="cesium_osm_buildings_visible",Fa="cesium_google_photorealistic_3d_tiles_visible";function Uo(){return pr.map(t=>({...t,description:Ho(t.value),source:"preset"}))}function Ho(t){const e=Lt(t);if(!e.length)return"复合底图";const a=e.map(r=>{const l=na(r);return l?l.name:r});return a.slice(0,3).join(" + ")+(a.length>3?" ...":"")}const Aa=Uo(),Ea=[{value:"tianditu",label:"天地图地形",description:"天地图高程地形服务"},{value:"cesiumWorld",label:"Cesium世界地形",description:"Cesium ion 全球地形服务"},{value:"arcgisWorld",label:"ArcGIS世界地形",description:"ArcGIS World Elevation 3D 高程服务"},{value:"ellipsoid",label:"平面地形",description:"无高程的椭球地形"}];function Wo({getViewer:t,getCesium:e,message:a,backendBaseUrl:r,tiandituToken:l,cesiumIonToken:o}){let p=null,_=null,w=null,C=null,R=0,F=null,k=null,D=0,y=0,v=[];const T=()=>Ra(l),A=()=>Ra(o),i=[],c=ee([]),u=new Map,b=new Map,s=new Map,m=new Map,M="cesium_custom_xyz_basemap_url",P=ee(xa),E=ee("tianditu"),O=ee(Ta(Ma,"")||Ta(M,"")),G=xt(Bo,!1),$=ee(xt(Da,G??!1)),Q=ee(xt(La,G??!1)),q=ee(xt(Pa,!1)),re=ee(xt(Fa,!1)),le=Le(()=>[...Aa.map(n=>n.value!=="custom"?n:{...n,description:O.value?O.value:"输入 XYZ 瓦片 URL 后启用",source:"custom",disabled:!O.value}),...c.value]),ne=zo({getViewer:t,getCesium:e,activeBasemap:P,applyBasemap:ue,resolvePresetLayerIds:Lt,message:a}),ye=Le(()=>ne.isCircuitOpen.value),xe=Le(()=>[{value:"tdt-boundaries",label:"国界线",description:"天地图国界、行政边界与边界注记栅格层",active:$.value},{value:"tdt-text-labels",label:"文字标注",description:"天地图官方文字注记栅格层",active:Q.value},{value:"cesium-osm-buildings",label:"Cesium OSM建筑",description:"Cesium ion OpenStreetMap 3D Buildings 图层",active:q.value},{value:"google-photorealistic-3d-tiles",label:"Google真实3D模型",description:"Google Photorealistic 3D Tiles 倾斜摄影模型",active:re.value}]);Te(P,n=>{!(t!=null&&t())||!(e!=null&&e())||ue(n)}),Te(O,n=>{Io(Ma,n)}),Te(E,async n=>{!(t!=null&&t())||!(e!=null&&e())||await Y(n)}),Te($,n=>{Mt(Da,n),Ue()}),Te(Q,n=>{Mt(La,n),Ue()}),Te(q,n=>{Mt(Pa,n),Ee()}),Te(re,n=>{Mt(Fa,n),ze()});function fe(){const n=e==null?void 0:e();if(!n)return[];u.clear(),b.clear();const h=Aa.map(z=>{const J=new n.ProviderViewModel({name:z.label,tooltip:jo(z),category:"项目底图",iconUrl:za(Vo(z.value),Xo(z.value,z.label)),creationFunction:()=>U(z.value)});return u.set(z.value,J),b.set(J,z.value),J}),L=W();return c.value=L.map((z,J)=>{const oe=String((z==null?void 0:z.name)||`官方底图 ${J+1}`).trim(),ae=Zo(oe,J);return u.set(ae,z),b.set(z,ae),{value:ae,label:`官方 · ${oe}`,description:String((z==null?void 0:z.tooltip)||oe),source:"official"}}),[...h,...L]}function ve(){const n=e==null?void 0:e();return n?(s.clear(),m.clear(),Ea.map(h=>{const L=new n.ProviderViewModel({name:h.label,tooltip:h.description||h.label,category:"项目地形",iconUrl:za(Go(h.value),$o(h.value)),creationFunction:()=>ie(h.value)});return s.set(h.value,L),m.set(L,h.value),L})):[]}function Qe(n=[]){return u.get(P.value)||n[0]}function qe(n=[]){return s.get(E.value)||n[0]}function W(){const n=e==null?void 0:e();if(typeof(n==null?void 0:n.createDefaultImageryProviderViewModels)!="function")return[];try{return n.createDefaultImageryProviderViewModels()||[]}catch{return[]}}function U(n){return Lt(n).length>0?I(n):n==="google"?je():n===Dt?Z():me()}function I(n){const h=e==null?void 0:e();if(!h)return[];const L=Lt(n);if(!L.length)return me();const z=T(),J=O.value;return Ar(h,L,{tiandituTk:z,customUrl:J})}function me(){const n=e==null?void 0:e();return[new n.UrlTemplateImageryProvider({url:`${Ct}DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${T()}`,subdomains:Tt,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:18})]}function je(){const n=e==null?void 0:e();return[new n.UrlTemplateImageryProvider({url:`${r}/proxy/mt{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}`,subdomains:["0","1","2","3"],tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:20})]}function Z(){const n=e==null?void 0:e(),h=Ia(O.value);return h.valid?[new n.UrlTemplateImageryProvider({url:h.url,subdomains:h.subdomains,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:20,enablePickFeatures:!1})]:(a.warning(h.message,{closable:!0}),me())}function _e(){const n=e==null?void 0:e();return new n.UrlTemplateImageryProvider({url:`${Ct}DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=${T()}`,subdomains:Tt,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:10})}function Ve(){const n=e==null?void 0:e();return new n.UrlTemplateImageryProvider({url:`${Ct}DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${T()}`,subdomains:Tt,tilingScheme:new n.WebMercatorTilingScheme,maximumLevel:18})}function et(){var Se,Ce,Ae,Re,bt;Be();const n=e==null?void 0:e(),h=(Ce=(Se=t==null?void 0:t())==null?void 0:Se.baseLayerPicker)==null?void 0:Ce.viewModel;if(!h||!((Ae=n==null?void 0:n.knockout)!=null&&Ae.getObservable))return;const L=n.knockout.getObservable(h,"selectedImagery"),z=n.knockout.getObservable(h,"selectedTerrain"),J=[],oe=(Re=L==null?void 0:L.subscribe)==null?void 0:Re.call(L,gt=>{const He=b.get(gt);He&&(P.value!==He&&(P.value=He),lt())}),ae=(bt=z==null?void 0:z.subscribe)==null?void 0:bt.call(z,gt=>{const He=m.get(gt);He&&(E.value!==He&&(E.value=He),ce(He))});oe&&J.push(oe),ae&&J.push(ae),v=J}function Be(){v.forEach(n=>{var h;return(h=n==null?void 0:n.dispose)==null?void 0:h.call(n)}),v=[]}function tt(){return Ue(),Ee(),ze(),!0}function st(){const n=t==null?void 0:t();if(n!=null&&n.imageryLayers)for(;i.length;){const h=i.pop();try{n.imageryLayers.remove(h,!0)}catch{}}}function lt(){var n,h,L;Ue(),Ee(),ze(),(L=(h=(n=t==null?void 0:t())==null?void 0:n.scene)==null?void 0:h.requestRender)==null||L.call(h)}function Ue(){var h,L;const n=t==null?void 0:t();!n||!(e!=null&&e())||($.value?dt():Xe(),Q.value?ct():Ye(),(L=(h=n.scene).requestRender)==null||L.call(h))}function dt(){var h,L,z,J;const n=t==null?void 0:t();if(!(n!=null&&n.imageryLayers)||p)return p&&((L=(h=n==null?void 0:n.imageryLayers)==null?void 0:h.raiseToTop)==null||L.call(h,p)),p;try{return p=n.imageryLayers.addImageryProvider(_e()),(J=(z=n.imageryLayers).raiseToTop)==null||J.call(z,p),p}catch(oe){return a.error("天地图国界线图层加载失败",oe),null}}function ct(){var h,L,z,J;const n=t==null?void 0:t();if(!(n!=null&&n.imageryLayers)||_)return _&&((L=(h=n==null?void 0:n.imageryLayers)==null?void 0:h.raiseToTop)==null||L.call(h,_)),_;try{return _=n.imageryLayers.addImageryProvider(Ve()),(J=(z=n.imageryLayers).raiseToTop)==null||J.call(z,_),_}catch(oe){return a.error("天地图文字标注图层加载失败",oe),null}}function Xe(){const n=t==null?void 0:t();if(!(!p||!(n!=null&&n.imageryLayers))){try{n.imageryLayers.remove(p,!0)}catch{}p=null}}function Ye(){const n=t==null?void 0:t();if(!(!_||!(n!=null&&n.imageryLayers))){try{n.imageryLayers.remove(_,!0)}catch{}_=null}}async function Ee(){var h,L,z;const n=t==null?void 0:t();!((h=n==null?void 0:n.scene)!=null&&h.primitives)||!(e!=null&&e())||(q.value?await N():V(),(z=(L=n.scene).requestRender)==null||z.call(L))}async function ze(){var h,L,z;const n=t==null?void 0:t();!((h=n==null?void 0:n.scene)!=null&&h.primitives)||!(e!=null&&e())||(re.value?await x():S(),(z=(L=n.scene).requestRender)==null||z.call(L))}async function x(){var z,J,oe;const n=t==null?void 0:t(),h=e==null?void 0:e();if(!((z=n==null?void 0:n.scene)!=null&&z.primitives))return null;if(F)return n.scene.globe.show=!1,F;if(k)return k;if(typeof(h==null?void 0:h.createGooglePhotorealistic3DTileset)!="function")return a.warning("当前 Cesium 运行时不支持 Google Photorealistic 3D Tiles。",{closable:!0}),re.value=!1,null;const L=++D;Ut(h,A()),k=h.createGooglePhotorealistic3DTileset(void 0,{maximumScreenSpaceError:4,cacheBytes:1536*1024*1024,enableCollision:!0});try{const ae=await k;return L!==D||!re.value?(ka(ae),null):(F=n.scene.primitives.add(ae),n.scene.globe.show=!1,n.scene.skyAtmosphere.show=!0,(oe=(J=n.scene).requestRender)==null||oe.call(J),F)}catch(ae){return L!==D||(re.value=!1,a.warning("Google 真实 3D 模型加载失败，已关闭该叠加层。",{closable:!0}),a.error("Google Photorealistic 3D Tiles 初始化失败",ae)),null}finally{L===D&&(k=null)}}function S(){var h,L,z;const n=t==null?void 0:t();if(D+=1,k=null,!F||!((h=n==null?void 0:n.scene)!=null&&h.primitives)){(L=n==null?void 0:n.scene)!=null&&L.globe&&(n.scene.globe.show=!0);return}try{n.scene.primitives.remove(F)}catch{}F=null,(z=n==null?void 0:n.scene)!=null&&z.globe&&(n.scene.globe.show=!0)}async function N(){var z,J,oe,ae;const n=t==null?void 0:t(),h=e==null?void 0:e();if(!((z=n==null?void 0:n.scene)!=null&&z.primitives)||w)return w;if(C)return C;if(typeof((J=h==null?void 0:h.Cesium3DTileset)==null?void 0:J.fromIonAssetId)!="function"&&typeof(h==null?void 0:h.createOsmBuildingsAsync)!="function")return a.warning("当前 Cesium 运行时不支持 Cesium OSM Buildings。",{closable:!0}),q.value=!1,null;const L=++R;Ut(h,A()),await te(),C=qo(h,{maximumScreenSpaceError:8});try{const Se=await C;return L!==R||!q.value?(ka(Se),null):(w=n.scene.primitives.add(Se),(ae=(oe=n.scene).requestRender)==null||ae.call(oe),w)}catch(Se){return L!==R||(q.value=!1,a.warning("Cesium OSM 建筑图层加载失败，已关闭该叠加层。",{closable:!0}),a.error("Cesium OSM 建筑图层初始化失败",Se)),null}finally{L===R&&(C=null)}}function V(){var h,L,z;const n=t==null?void 0:t();if(R+=1,C=null,!(!w||!((h=n==null?void 0:n.scene)!=null&&h.primitives))){try{n.scene.primitives.remove(w)}catch{}w=null,(z=(L=n.scene).requestRender)==null||z.call(L)}}async function te(){if(E.value==="cesiumWorld")return!0;E.value="cesiumWorld";const n=await Y("cesiumWorld");return n||a.warning("Cesium OSM Buildings 建议配合 Cesium 世界地形使用，当前地形可能导致建筑遮挡或高度偏移。",{closable:!0}),n}function ue(n,h={}){var oe,ae,Se;const L=t==null?void 0:t();if(!L||!(e!=null&&e()))return!1;Mr(),st();const z=(oe=L.baseLayerPicker)==null?void 0:oe.viewModel,J=u.get(n);if(z&&J){if(h.forceReload&&z.selectedImagery===J){const Ce=u.get(xa)||u.get("tianditu");Ce&&Ce!==J&&(z.selectedImagery=Ce)}return z.selectedImagery!==J&&(z.selectedImagery=J),lt(),!0}try{return U(n).forEach(Ae=>{Ae&&i.push(L.imageryLayers.addImageryProvider(Ae))}),Ue(),(Se=(ae=L.scene).requestRender)==null||Se.call(ae),!0}catch(Ce){return a.error("地图源切换失败",Ce),!1}}function X(){return Y(E.value)}async function Y(n){var Se,Ce,Ae,Re,bt,gt,He,la,ca,ua,da;const h=t==null?void 0:t(),L=e==null?void 0:e();if(!h||!L)return!1;const z=(Se=h.baseLayerPicker)==null?void 0:Se.viewModel,J=s.get(n);if(z&&J)return z.selectedTerrain!==J&&(z.selectedTerrain=J),ce(n),(Ae=(Ce=h.scene).requestRender)==null||Ae.call(Ce),!0;const oe=++y;if(n==="ellipsoid")return h.terrainProvider=new L.EllipsoidTerrainProvider,ce(n),(bt=(Re=h.scene).requestRender)==null||bt.call(Re),!0;if(n==="cesiumWorld")try{const at=await Pe();return oe!==y?!1:(h.terrainProvider=at,ce(n),(He=(gt=h.scene).requestRender)==null||He.call(gt),!0)}catch(at){return oe!==y||(h.terrainProvider=new L.EllipsoidTerrainProvider,ce("ellipsoid"),a.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("Cesium 世界地形初始化失败",at)),!1}if(n==="arcgisWorld")try{const at=await Fe();return oe!==y?!1:(h.terrainProvider=at,ce(n),(ca=(la=h.scene).requestRender)==null||ca.call(la),!0)}catch(at){return oe!==y||(h.terrainProvider=new L.EllipsoidTerrainProvider,ce("ellipsoid"),a.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("ArcGIS 世界地形初始化失败",at)),!1}const ae=Ca(L);try{return h.terrainProvider=new ae({url:`${Ct}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Tt,token:T()}),ce(n),(da=(ua=h.scene).requestRender)==null||da.call(ua),!0}catch(at){return h.terrainProvider=new L.EllipsoidTerrainProvider,ce("ellipsoid"),a.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),a.error("官方地形初始化失败",at),!1}}function ce(n){var L;const h=t==null?void 0:t();(L=h==null?void 0:h.scene)!=null&&L.globe&&(h.scene.globe.depthTestAgainstTerrain=n!=="ellipsoid")}function ie(n){const h=e==null?void 0:e();if(n==="ellipsoid")return new h.EllipsoidTerrainProvider;if(n==="cesiumWorld")return Pe().catch(z=>(a.warning("Cesium 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("Cesium 世界地形初始化失败",z),d(n,"ellipsoid"),new h.EllipsoidTerrainProvider));if(n==="arcgisWorld")return Fe().catch(z=>(a.warning("ArcGIS 世界地形加载失败，已降级为平面地形。",{closable:!0}),a.error("ArcGIS 世界地形初始化失败",z),d(n,"ellipsoid"),new h.EllipsoidTerrainProvider));const L=Ca(h);try{return new L({url:`${Ct}mapservice/swdx?T=elv_c&tk={token}&x={x}&y={y}&l={z}`,subdomains:Tt,token:T()})}catch(z){return a.warning("官方地形服务加载失败，已降级为椭球地形。",{closable:!0}),a.error("官方地形初始化失败",z),new h.EllipsoidTerrainProvider}}async function Pe(){var L,z;const n=e==null?void 0:e();Ut(n,A());const h={requestWaterMask:!1,requestVertexNormals:!0};if(typeof n.createWorldTerrainAsync=="function")return n.createWorldTerrainAsync(h);if(typeof n.createWorldTerrain=="function")return n.createWorldTerrain(h);if(typeof((L=n.CesiumTerrainProvider)==null?void 0:L.fromIonAssetId)=="function")return n.CesiumTerrainProvider.fromIonAssetId(1,h);if((z=n.IonResource)!=null&&z.fromAssetId&&n.CesiumTerrainProvider){const J=await n.IonResource.fromAssetId(1);return new n.CesiumTerrainProvider({url:J,...h})}throw new Error("当前 Cesium 运行时不支持在线世界地形。")}async function Fe(){var h;const n=e==null?void 0:e();if(typeof((h=n==null?void 0:n.ArcGISTiledElevationTerrainProvider)==null?void 0:h.fromUrl)!="function")throw new Error("当前 Cesium 运行时不支持 ArcGIS 高程地形。");return n.ArcGISTiledElevationTerrainProvider.fromUrl(No)}function d(n,h){(typeof window<"u"?window.setTimeout:setTimeout)(()=>{E.value===n&&(E.value=h)},0)}function f({overlayId:n,value:h}){if(n==="tdt-boundaries"){$.value=!!h;return}if(n==="tdt-text-labels"){Q.value=!!h;return}if(n==="cesium-osm-buildings"){q.value=!!h;return}n==="google-photorealistic-3d-tiles"&&(re.value=!!h)}function B({url:n}){const h=String(n||"").trim(),L=Ia(h);if(!L.valid){a.warning(L.message,{closable:!0});return}if(O.value=h,P.value===Dt){ue(Dt,{forceReload:!0})&&a.success("已加载自定义 XYZ 图源");return}P.value=Dt,a.success("已切换到自定义 XYZ 图源")}function H(){st(),Xe(),Ye(),V(),S(),Be()}return{activeBasemap:P,activeTerrain:E,customXyzBasemapUrl:O,basemapOptions:le,terrainOptions:Ea,overlayOptions:xe,createImageryProviderViewModels:fe,createTerrainProviderViewModels:ve,getSelectedImageryProviderViewModel:Qe,getSelectedTerrainProviderViewModel:qe,bindLayerPickerStateSync:et,addBaseImageryLayers:tt,initCustomTerrain:X,applyBasemap:ue,applyTerrain:Y,handleOverlayToggle:f,handleCustomBasemapSubmit:B,cleanupLayers:H,basemapSwitcher:ne,basemapCircuitOpen:ye,resetCircuitBreaker:ne.resetCircuitBreaker}}function Go(t){return t==="ellipsoid"?"#a3a3a3":t==="arcgisWorld"?"#5ea1ff":"#d0a449"}function $o(t){return t==="cesiumWorld"?"CW":t==="arcgisWorld"?"AG":t==="ellipsoid"?"EL":"TE"}function Ra(t){return typeof t=="function"?String(t()||"").trim():t&&typeof t=="object"&&"value"in t?String(t.value||"").trim():String(t||"").trim()}function ka(t){var e,a;if(!(!t||(e=t.isDestroyed)!=null&&e.call(t)))try{(a=t.destroy)==null||a.call(t)}catch{}}async function qo(t,e={}){var a;if(typeof((a=t==null?void 0:t.Cesium3DTileset)==null?void 0:a.fromIonAssetId)=="function"){const r=await t.Cesium3DTileset.fromIonAssetId(Oo,e);return!r.style&&typeof t.Cesium3DTileStyle=="function"&&(r.style=new t.Cesium3DTileStyle({color:"Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('white')"})),r}return t.createOsmBuildingsAsync(e)}function jo(t){return t.value===Dt?`${t.description||t.label}
支持 https://server/{z}/{x}/{y}.png`:t.description||t.label}function Vo(t){const e=Lt(t);if(!e.length)return"#37d67a";const a=na(e[0]);if(!a)return"#37d67a";const r=a.category;return r==="imagery"?"#5ea1ff":r==="vector"?"#37d67a":r==="terrain"?"#d0a449":r==="label"?"#a78bfa":r==="theme"?"#f59e0b":r==="custom"?"#f472b6":"#37d67a"}function Xo(t,e){return String(e||"").replace(/[<>&"']/g,"").slice(0,2)||"BM"}function Ia(t){const e=String(t||"").trim();if(!e)return{valid:!1,message:"自定义 XYZ URL 为空",url:"",subdomains:[]};let a=e.replace(/\{z\}/gi,"{z}").replace(/\{x\}/gi,"{x}").replace(/\{y\}/gi,"{y}").replace(/\{subdomains?\}/gi,"{s}").replace(/\{switch:[^}]+\}/gi,"{s}").replace(/\{s\}/gi,"{s}");const r=a.match(/\{([a-z0-9])-([a-z0-9])\}/i);let l=[];return r?(l=Yo(r[1],r[2]),a=a.replace(r[0],"{s}")):/\{s\}/i.test(a)&&(l=["a","b","c"]),!/\{z\}/.test(a)||!/\{x\}/.test(a)||!/\{y\}/.test(a)?{valid:!1,message:"URL 需要包含 {z}、{x}、{y} 占位符",url:a,subdomains:l}:Ko(a)?{valid:!0,message:"",url:a,subdomains:l}:{valid:!1,message:"URL 格式不合法",url:a,subdomains:l}}function Yo(t,e){const a=String(t||"").charCodeAt(0),r=String(e||"").charCodeAt(0);if(!Number.isFinite(a)||!Number.isFinite(r))return[];const l=a<=r?1:-1,o=[];for(let p=a;l>0?p<=r:p>=r;p+=l)o.push(String.fromCharCode(p));return o}function Ko(t){if(/^(https?:)?\/\//i.test(t)||t.startsWith("/"))return!0;try{const e=typeof window<"u"?window.location.origin:"http://localhost",a=new URL(t,e);return a.protocol==="http:"||a.protocol==="https:"}catch{return!1}}function Zo(t,e){const a=t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");return`official_${e}_${a||"basemap"}`}function za(t,e){const a=String(e||"").replace(/[<>&"']/g,"").slice(0,2),r=`
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="10" fill="#0f2432"/>
            <circle cx="32" cy="30" r="18" fill="${t}" opacity="0.9"/>
            <text x="32" y="53" text-anchor="middle" fill="#ffffff" font-size="10" font-family="Arial">${a}</text>
        </svg>
    `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(r)}`}function Jo({getViewer:t,getCesium:e,message:a}){function r(p){const _=t==null?void 0:t(),w=e==null?void 0:e();if(!_||!w)return;const C=typeof p=="number"?p:2;_.camera.flyTo({destination:w.Cartesian3.fromDegrees(104.1954,35.8617,6e6),orientation:{heading:0,pitch:-w.Math.PI_OVER_TWO,roll:0},duration:C})}function l(){const p=t==null?void 0:t(),_=e==null?void 0:e();!p||!_||p.camera.flyTo({destination:_.Cartesian3.fromDegrees(86.925,27.9881,9e3),orientation:{heading:_.Math.toRadians(0),pitch:_.Math.toRadians(-25),roll:0},duration:3})}async function o(){const p=t==null?void 0:t(),_=e==null?void 0:e();if(!(!p||!_))try{const w=await _.Cesium3DTileset.fromUrl("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json");p.scene.primitives.add(w),p.flyTo(w,{duration:3,offset:new _.HeadingPitchRange(_.Math.toRadians(0),_.Math.toRadians(-25),w.boundingSphere.radius*2.5)})}catch(w){a.error(`加载模型失败: ${w}`),a.error("加载3D模型失败，可能是网络原因无法访问 GitHub 资源。",{closable:!0,duration:6500})}}return{flyToHome:r,flyToEverest:l,loadCustomTileset:o}}const Qo="tileset.json";let zt=null;async function Na(){if(zt)return zt;const[{decompressBuffer:t},{parseShpPartsToGeoJSON:e}]=await Promise.all([Qt(()=>import("./decompressFile-DiMYlfaO.js").then(a=>a.f),__vite__mapDeps([4,5]),import.meta.url),Qt(()=>import("./shpParser-HlIsEZGg.js").then(a=>a.s),__vite__mapDeps([6,5,7,2,3,8,9,10,11,12,13,14,15]),import.meta.url)]);return zt={decompressBuffer:t,parseShpPartsToGeoJSON:e},zt}function Zt(t){const e=t.lastIndexOf(".");return e===-1?"":t.slice(e+1).toLowerCase()}function ht(t,e,a,r){if(!(!t||!e||!a))try{r==="3dtiles"&&a.boundingSphere?t.flyTo(a,{duration:2,offset:new e.HeadingPitchRange(e.Math.toRadians(0),e.Math.toRadians(-30),a.boundingSphere.radius*2)}):a.entities&&a.entities.values.length>0&&t.flyTo(a,{duration:2})}catch{}}function vt(t){return URL.createObjectURL(t)}function We(t){t&&t.startsWith("blob:")&&URL.revokeObjectURL(t)}function es({getViewer:t,getCesium:e,message:a}){const r=ee([]),l=ee(null);let o=0;async function p(s){const m=e(),M=t();if(!m||!M)throw new Error("Cesium 未初始化");const P=vt(s);try{const E=await m.GeoJsonDataSource.load(P,{stroke:m.Color.fromCssColorString("#3ddc84"),fill:m.Color.fromCssColorString("#3ddc84").withAlpha(.3),markerColor:m.Color.fromCssColorString("#3ddc84"),markerSize:24}),O=`geojson_${++o}`;E.name=s.name,await M.dataSources.add(E),ht(M,m,E,"geojson");const G={id:O,name:s.name,type:"geojson",entity:E,blobUrl:P};return r.value=[...r.value,G],a.success(`GeoJSON "${s.name}" 加载成功`),G}catch(E){throw We(P),E}}async function _(s){const m=e(),M=t();if(!m||!M)throw new Error("Cesium 未初始化");const P=vt(s);try{const E=await m.KmlDataSource.load(P,{camera:M.scene.camera,canvas:M.scene.canvas}),O=`kml_${++o}`;E.name=s.name,await M.dataSources.add(E),ht(M,m,E,"kml");const G={id:O,name:s.name,type:"kml",entity:E,blobUrl:P};return r.value=[...r.value,G],a.success(`KML "${s.name}" 加载成功`),G}catch(E){throw We(P),E}}async function w(s){const m=e(),M=t();if(!m||!M)throw new Error("Cesium 未初始化");const P=vt(s);try{const E=await m.KmlDataSource.load(P,{camera:M.scene.camera,canvas:M.scene.canvas}),O=`kmz_${++o}`;E.name=s.name,await M.dataSources.add(E),ht(M,m,E,"kmz");const G={id:O,name:s.name,type:"kmz",entity:E,blobUrl:P};return r.value=[...r.value,G],a.success(`KMZ "${s.name}" 加载成功`),G}catch{return We(P),await C(s)}}async function C(s){const m=e(),M=t(),P=await s.arrayBuffer(),{decompressBuffer:E}=await Na(),G=(await E(P,s.name)).find(re=>{var le;return re.ext==="kml"||((le=re.name)==null?void 0:le.toLowerCase().endsWith(".kml"))});if(!G)throw new Error("KMZ 压缩包中未找到 KML 文件");let $;typeof G.content=="string"?$=G.content:G.content instanceof ArrayBuffer||G.content instanceof Uint8Array?$=Tr(G.content):$=String(G.content||"");const Q=new Blob([$],{type:"application/vnd.google-earth.kml+xml"}),q=URL.createObjectURL(Q);try{const re=await m.KmlDataSource.load(q,{camera:M.scene.camera,canvas:M.scene.canvas}),le=`kmz_${++o}`;re.name=s.name,await M.dataSources.add(re),ht(M,m,re,"kmz");const ne={id:le,name:s.name,type:"kmz",entity:re};return r.value=[...r.value,ne],a.success(`KMZ "${s.name}" 加载成功（手动解压）`),ne}finally{URL.revokeObjectURL(q)}}async function R(s,m=[]){const M=e(),P=t();if(!M||!P)throw new Error("Cesium 未初始化");const{parseShpPartsToGeoJSON:E}=await Na(),O={shp:await s.arrayBuffer()};for(const ne of m){const ye=Zt(ne.name);ye==="dbf"&&(O.dbf=await ne.arrayBuffer()),ye==="shx"&&(O.shx=await ne.arrayBuffer()),ye==="prj"&&(O.prj=await ne.arrayBuffer()),ye==="cpg"&&(O.cpg=await ne.arrayBuffer())}const G=await E(O),$=Array.isArray(G)?G:[G],Q=$.reduce((ne,ye)=>{var xe;return ne+(((xe=ye==null?void 0:ye.features)==null?void 0:xe.length)||0)},0),q=$.length===1?$[0]:{type:"FeatureCollection",features:$.flatMap(ne=>(ne==null?void 0:ne.features)||[])},re=new Blob([JSON.stringify(q)],{type:"application/geo+json"}),le=URL.createObjectURL(re);try{const ne=await M.GeoJsonDataSource.load(le,{stroke:M.Color.fromCssColorString("#ffcc00"),fill:M.Color.fromCssColorString("#ffcc00").withAlpha(.25),markerColor:M.Color.fromCssColorString("#ffcc00"),markerSize:20}),ye=`shp_${++o}`;ne.name=s.name,await P.dataSources.add(ne),ht(P,M,ne,"shp");const xe={id:ye,name:s.name,type:"shp",entity:ne};return r.value=[...r.value,xe],a.success(`Shapefile "${s.name}" 加载成功 (${Q} 个要素)`),URL.revokeObjectURL(le),xe}catch(ne){throw URL.revokeObjectURL(le),ne}}async function F(s){const m=e(),M=t();if(!m||!M)throw new Error("Cesium 未初始化");const P=vt(s);let E=null;try{E=await T(s)}catch{}if(E)try{const O=await i(m,M,P,s.name,E),$={id:`gltf_${++o}`,name:s.name,type:"gltf",entity:O,blobUrl:P};return r.value=[...r.value,$],a.success(`3D 模型 "${s.name}" 加载成功 (${E.lng.toFixed(4)}, ${E.lat.toFixed(4)}, ${E.height.toFixed(1)}m)`),$}catch(O){throw We(P),O}return l.value&&We(l.value.blobUrl),l.value={file:s,blobUrl:P,name:s.name},{needsCoordInput:!0,file:s}}async function k(s){const m=e(),M=t();if(!l.value)throw new Error("没有等待确认的模型文件");const{blobUrl:P,name:E}=l.value;try{const O=await i(m,M,P,E,s),$={id:`gltf_${++o}`,name:E,type:"gltf",entity:O,blobUrl:P};r.value=[...r.value,$],a.success(`3D 模型 "${E}" 加载成功 (${s.lng.toFixed(4)}, ${s.lat.toFixed(4)}, ${s.height.toFixed(1)}m)`);const Q=m.Cartesian3.fromDegrees(s.lng,s.lat,s.height+500);return M.camera.flyTo({destination:Q,orientation:{heading:m.Math.toRadians(0),pitch:m.Math.toRadians(-30),roll:0},duration:2}),l.value=null,$}catch(O){throw We(P),l.value=null,O}}function D(){l.value&&(We(l.value.blobUrl),l.value=null)}async function y(s){const m=e(),M=t();if(!m||!M)throw new Error("Cesium 未初始化");const P=vt(s);try{const E=await m.CzmlDataSource.load(P),O=`czml_${++o}`;E.name=s.name,await M.dataSources.add(E),ht(M,m,E,"czml");const G={id:O,name:s.name,type:"czml",entity:E,blobUrl:P};return r.value=[...r.value,G],a.success(`CZML "${s.name}" 加载成功`),G}catch(E){throw We(P),E}}async function v(s){const m=e(),M=t();if(!m||!M)throw new Error("Cesium 未初始化");const P=vt(s);try{const E=await m.Cesium3DTileset.fromUrl(P),O=`tileset_${++o}`;M.scene.primitives.add(E);const G={id:O,name:s.name,type:"3dtiles",entity:E,blobUrl:P};return r.value=[...r.value,G],ht(M,m,E,"3dtiles"),a.success(`3D Tiles "${s.name}" 加载成功`),G}catch(E){throw We(P),E}}async function T(s){var E,O,G,$,Q;const m=Zt(s.name);let M;if(m==="gltf"){const q=await s.text();M=JSON.parse(q)}else{const q=await s.arrayBuffer();M=A(q)}if(!M)return null;if((E=M.extensionsUsed)!=null&&E.includes("CESIUM_RTC")&&((G=(O=M.extensions)==null?void 0:O.CESIUM_RTC)!=null&&G.center)){const q=M.extensions.CESIUM_RTC.center;if(q.length>=3){const re=e();if(re){const le=new re.Cartesian3(q[0],q[1],q[2]),ne=re.Cartographic.fromCartesian(le);return{lng:re.Math.toDegrees(ne.longitude),lat:re.Math.toDegrees(ne.latitude),height:ne.height}}}}const P=($=M.asset)==null?void 0:$.extras;if(P){const q=P.longitude??P.lng,re=P.latitude??P.lat,le=P.height??P.altitude??P.alt??0;if(q!=null&&re!=null)return{lng:Number(q),lat:Number(re),height:Number(le)}}if(((Q=M.nodes)==null?void 0:Q.length)>0&&M.nodes[0].matrix){const q=M.nodes[0].matrix;if(q.length>=16){const re=q[12],le=q[13],ne=q[14];if(Math.abs(re)>1e5||Math.abs(le)>1e5){const ye=e();if(ye)try{const xe=new ye.Cartesian3(re,le,ne),fe=ye.Cartographic.fromCartesian(xe);return{lng:ye.Math.toDegrees(fe.longitude),lat:ye.Math.toDegrees(fe.latitude),height:fe.height}}catch{}}}}return null}function A(s){if(s.byteLength<20)return null;const m=new DataView(s);if(m.getUint32(0,!0)!==1179937895)return null;const P=m.getUint32(12,!0);if(m.getUint32(16,!0)!==1313821514)return null;const O=new Uint8Array(s,20,P),G=new TextDecoder().decode(O);try{return JSON.parse(G)}catch{return null}}async function i(s,m,M,P,E){const{lng:O,lat:G,height:$}=E,Q=s.Cartesian3.fromDegrees(O,G,$),q=new s.HeadingPitchRoll(0,0,0),re=s.Transforms.localFrameToFixedFrameGenerator("north","west"),le=await s.Model.fromGltfAsync({url:M,modelMatrix:s.Transforms.headingPitchRollToFixedFrame(Q,q,s.Ellipsoid.WGS84,re),scale:1,show:!0});return le.name=P,m.scene.primitives.add(le),le}async function c(s){const m=t(),M=e();if(!m||!M)throw a.error("Cesium 3D 场景未就绪，请稍后重试"),new Error("Cesium 未初始化");const P=Zt(s.name);try{switch(P){case"geojson":case"json":return s.name.toLowerCase().includes(Qo)?await v(s):await p(s);case"kml":return await _(s);case"kmz":return await w(s);case"shp":return await R(s);case"glb":case"gltf":return await F(s);case"czml":return await y(s);default:throw a.error(`不支持的文件格式: .${P}。支持的格式: GeoJSON, KML/KMZ, SHP, GLB/GLTF, CZML, 3D Tiles`),new Error(`不支持的格式: .${P}`)}}catch(E){throw a.error(`加载 "${s.name}" 失败: ${E.message||E}`),E}}function u(s){const m=r.value.find(P=>P.id===s);if(!m)return;const M=t();if(M){try{m.type==="3dtiles"?M.scene.primitives.remove(m.entity):M.dataSources.remove(m.entity,!0)}catch{}m.blobUrl&&We(m.blobUrl),r.value=r.value.filter(P=>P.id!==s),a.info(`已移除 "${m.name}"`)}}function b(){var M,P,E,O,G;const s=t();if(!s){r.value=[];return}for(const $ of r.value){try{$.type==="3dtiles"?s.scene.primitives.remove($.entity):s.dataSources.remove($.entity,!0)}catch{}$.blobUrl&&We($.blobUrl)}if(Array.isArray((M=s.dataSources)==null?void 0:M.dataSources)){const $=s.dataSources.dataSources.slice();for(const Q of $)if(Q&&!Q.isBaseLayerPickerDataSource)try{s.dataSources.remove(Q,!0)}catch{}}const m=e();if(m&&Array.isArray((E=(P=s.scene)==null?void 0:P.primitives)==null?void 0:E.primitives)){const $=s.scene.primitives.primitives.slice();for(const Q of $)if(!(!Q||!(Q instanceof m.Cesium3DTileset||Q instanceof m.Model||Q.name&&/^(geojson_|kml_|kmz_|shp_|czml_|tileset_|gltf_)/.test(String(Q.name||"")))))try{s.scene.primitives.remove(Q)}catch{}}r.value=[],D();try{(G=(O=s.scene).requestRender)==null||G.call(O)}catch{}a.info("已清除所有导入数据")}return{loadDataFile:c,loadedDataSources:r,removeDataSource:u,clearAllDataSources:b,pendingGltfFile:l,loadGltfWithUserCoords:k,cancelPendingGltf:D}}const ts="cesium_tool_panel_open",ot={low:{label:"性能",stepCount:28,maxDistance:24e4},medium:{label:"均衡",stepCount:48,maxDistance:36e4},high:{label:"精细",stepCount:64,maxDistance:52e4}};function as({fluidPanelRef:t,sceneActions:e={},wind:a={},panelStorageKey:r=ts}={}){const l=ee(xt(r,!0)),o=ee({fog:!1,hbao:!1,tiltShift:!1,atmosphere:!1,volumetricClouds:!1}),p=ee({quality:"medium",coverage:.52,density:9e-5,shadowStrength:.82,beerShadowStrength:.64,multiScattering:.58,powderStrength:.72,hazeStrength:.38,groundBounceStrength:.26,bsmShadow:!1,shadowResolution:256,maxDistance:ot.medium.maxDistance,stepCount:ot.medium.stepCount});o.value={...o.value,clouds:p.value};const _=ee({threshold:10,blend:20,lightStrength:3,waterColor:"#0d4fa3",waterLevel:null}),w=ee({isPicking:!1,hasFluid:!1,selectedText:"",waterLevel:null,waterLevelMin:null,waterLevelMax:null}),C=Le(()=>{var y,v,T,A,i,c;return[{id:"scene",title:"场景导航",description:"相机和演示数据",actions:[{id:"home",label:"回到初始视角"},{id:"everest",label:"飞越珠峰"},{id:"tileset",label:"加载3D模型"}]},{id:"effects",title:"高级特效",description:"统一控制雾效、阴影和大气圈增强",status:o.value.atmosphere||o.value.fog||o.value.hbao||o.value.tiltShift?"启用":"关闭",statusTone:o.value.atmosphere||o.value.fog||o.value.hbao||o.value.tiltShift?"success":"neutral",controls:[{id:"fog",label:"高度雾",type:"toggle",value:o.value.fog},{id:"hbao",label:"微阴影",type:"toggle",value:o.value.hbao},{id:"tiltShift",label:"移轴",type:"toggle",value:o.value.tiltShift},{id:"atmosphere",label:"大气圈增强",type:"toggle",value:o.value.atmosphere}]},{id:"clouds",title:"体积云",description:"云层质量、光照、自阴影和步进参数",status:o.value.volumetricClouds?"启用":"关闭",statusTone:o.value.volumetricClouds?"success":"neutral",controlLayout:"clouds",controls:[{id:"volumetricClouds",label:"云层",type:"toggle",value:o.value.volumetricClouds,tooltip:"Cesium ECEF 球壳体积云。当前为单 pass 版本，后续可替换为 BSM 阴影与 TAA。"},{id:"cloudQuality",label:"质量",type:"select",value:p.value.quality,options:Object.entries(ot).map(([u,b])=>({value:u,label:b.label})),disabled:!o.value.volumetricClouds},...ns(p.value,!o.value.volumetricClouds)]},{id:"wind",title:"模拟风场",description:"WebGL2 粒子风场",status:(y=a.wind2D)!=null&&y.value?"已加载":"未加载",statusTone:(v=a.wind2D)!=null&&v.value?"success":"neutral",actions:[{id:"load",label:(T=a.wind2D)!=null&&T.value?"重新加载":"加载风场",variant:"primary"},{id:"clear",label:"清除",variant:"danger",disabled:!((A=a.wind2D)!=null&&A.value)}],controls:rs((i=a.windParams)==null?void 0:i.value,!!((c=a.wind2D)!=null&&c.value))},{id:"fluid",title:"水体流体",description:"点击地形捕捉高度图并生成水体",status:w.value.isPicking?"等待选点":w.value.hasFluid?"已创建":"未创建",statusTone:w.value.isPicking?"warning":w.value.hasFluid?"success":"neutral",actions:[{id:"pick",label:w.value.isPicking?"等待选点":"捕捉高度图",variant:"primary",active:w.value.isPicking},{id:"clear",label:"清除",variant:"danger",disabled:!w.value.hasFluid&&!w.value.isPicking}],controls:ss(_.value,w.value)}]});Te(l,y=>{Mt(r,y)});function R({moduleId:y,actionId:v}){var A,i;(i=(A={scene:{home:()=>{var c;return(c=e.flyToHome)==null?void 0:c.call(e)},everest:e.flyToEverest,tileset:e.loadCustomTileset},wind:{load:a.loadSimulatedWind,clear:a.clearWind2D},fluid:{pick:()=>{var c,u;return(u=(c=t==null?void 0:t.value)==null?void 0:c.startPickHeightMap)==null?void 0:u.call(c)},clear:()=>{var c,u;return(u=(c=t==null?void 0:t.value)==null?void 0:c.clearFluid)==null?void 0:u.call(c)}}}[y])==null?void 0:A[v])==null||i.call(A)}function F({moduleId:y,controlId:v,value:T}){var A,i;if((y==="effects"||y==="clouds")&&v in o.value){o.value={...o.value,[v]:!!T};return}if(y==="clouds"&&is(v)){const c=v==="cloudQuality"?{quality:T,previousQuality:p.value.quality}:{[v]:T};p.value=os({...p.value,...c}),o.value={...o.value,clouds:p.value};return}if(y==="wind"&&v in(((A=a.windParams)==null?void 0:A.value)||{})){(i=a.setWindParam)==null||i.call(a,v,T);return}y==="fluid"&&v in _.value&&(_.value={..._.value,[v]:v==="waterColor"?T:Number(T)})}function k(y){const v=_t(y==null?void 0:y.waterLevel),T=_t(y==null?void 0:y.waterLevelMin),A=_t(y==null?void 0:y.waterLevelMax);w.value={isPicking:!!(y!=null&&y.isPicking),hasFluid:!!(y!=null&&y.hasFluid),selectedText:(y==null?void 0:y.selectedText)||"",waterLevel:v,waterLevelMin:T,waterLevelMax:A},v!==null&&(_.value={..._.value,waterLevel:v})}function D(){var y;(y=a.clearWind2D)==null||y.call(a)}return{toolPanelOpen:l,advancedEffectControls:o,cloudParams:p,fluidParams:_,fluidState:w,toolModules:C,handleToolAction:R,handleToolControlChange:F,handleFluidStateChange:k,cleanupTools:D}}function rs(t={},e){return[{id:"speedFactor",label:"速度因子",type:"range",min:.1,max:5,step:.1,value:t.speedFactor??1,displayValue:Number(t.speedFactor??1).toFixed(1),disabled:e},{id:"arrowLength",label:"箭头长度",type:"range",min:5e3,max:5e4,step:1e3,value:t.arrowLength??15e3,displayValue:`${Math.round((t.arrowLength??15e3)/1e3)} km`,disabled:e},{id:"trailLength",label:"尾迹长度",type:"range",min:5e3,max:8e4,step:1e3,value:t.trailLength??2e4,displayValue:`${Math.round((t.trailLength??2e4)/1e3)} km`,disabled:e},{id:"alphaFactor",label:"透明度",type:"range",min:.1,max:1,step:.05,value:t.alphaFactor??1,displayValue:Number(t.alphaFactor??1).toFixed(2),disabled:e}]}function ns(t={},e){return[{id:"coverage",label:"云量",type:"range",min:.18,max:.82,step:.01,value:t.coverage??.52,displayValue:Number(t.coverage??.52).toFixed(2),disabled:e,tooltip:"覆盖率阈值。数值越大云越少，数值越小云越密。",numberInput:!1},{id:"density",label:"密度",type:"range",min:25e-6,max:18e-5,step:5e-6,value:t.density??9e-5,displayValue:Number(t.density??9e-5).toExponential(2),disabled:e,tooltip:"体积消光密度。数值越大云更厚、更暗，也更影响性能观感。",numberInput:!1},{id:"shadowStrength",label:"阴影",type:"range",min:0,max:1,step:.02,value:t.shadowStrength??.82,displayValue:Number(t.shadowStrength??.82).toFixed(2),disabled:e,numberInput:!1},{id:"multiScattering",label:"散射",type:"range",min:0,max:1,step:.02,value:t.multiScattering??.58,displayValue:Number(t.multiScattering??.58).toFixed(2),disabled:e,numberInput:!1},{id:"beerShadowStrength",label:"远影",type:"range",min:0,max:1,step:.02,value:t.beerShadowStrength??.64,displayValue:Number(t.beerShadowStrength??.64).toFixed(2),disabled:e,tooltip:"Beer Shadow Map 风格的远距离光学深度近似。数值越大，云层背光阴影越明显。",numberInput:!1},{id:"powderStrength",label:"银边",type:"range",min:0,max:1.4,step:.02,value:t.powderStrength??.72,displayValue:Number(t.powderStrength??.72).toFixed(2),disabled:e,numberInput:!1},{id:"hazeStrength",label:"薄霾",type:"range",min:0,max:1,step:.02,value:t.hazeStrength??.38,displayValue:Number(t.hazeStrength??.38).toFixed(2),disabled:e,numberInput:!1},{id:"groundBounceStrength",label:"反照",type:"range",min:0,max:1,step:.02,value:t.groundBounceStrength??.26,displayValue:Number(t.groundBounceStrength??.26).toFixed(2),disabled:e,tooltip:"地面反弹光近似，用于提亮云底。",numberInput:!1},{id:"bsmShadow",label:"BSM",type:"toggle",value:!!t.bsmShadow,disabled:e,tooltip:"实验 Beer Shadow Map 阴影 atlas。用于调试真实阴影链路，异常时会自动关闭。"},{id:"shadowResolution",label:"影图",type:"range",min:128,max:512,step:128,value:t.shadowResolution??256,displayValue:`${Math.round(t.shadowResolution??256)} px`,disabled:e||!t.bsmShadow,tooltip:"BSM 阴影 atlas 单级联分辨率。越高越清晰，也越影响性能。",numberInput:!1},{id:"maxDistance",label:"距离",type:"range",min:12e4,max:9e5,step:1e4,value:t.maxDistance??ot.medium.maxDistance,displayValue:`${Math.round((t.maxDistance??ot.medium.maxDistance)/1e3)} km`,disabled:e,numberInput:!1},{id:"stepCount",label:"步数",type:"range",min:24,max:80,step:1,value:t.stepCount??ot.medium.stepCount,displayValue:String(Math.round(t.stepCount??ot.medium.stepCount)),disabled:e,numberInput:!1}]}function is(t){return["cloudQuality","coverage","density","shadowStrength","beerShadowStrength","multiScattering","powderStrength","hazeStrength","groundBounceStrength","bsmShadow","shadowResolution","maxDistance","stepCount"].includes(t)}function os(t={}){const e=Object.prototype.hasOwnProperty.call(ot,t.quality)?t.quality:"medium",a=ot[e],r=t.quality&&t.quality!==t.previousQuality;return{quality:e,coverage:Oe(Ge(t.coverage,.52),.18,.82),density:Oe(Ge(t.density,9e-5),25e-6,18e-5),shadowStrength:Oe(Ge(t.shadowStrength,.82),0,1),beerShadowStrength:Oe(Ge(t.beerShadowStrength,.64),0,1),multiScattering:Oe(Ge(t.multiScattering,.58),0,1),powderStrength:Oe(Ge(t.powderStrength,.72),0,1.4),hazeStrength:Oe(Ge(t.hazeStrength,.38),0,1),groundBounceStrength:Oe(Ge(t.groundBounceStrength,.26),0,1),bsmShadow:t.bsmShadow===!0,shadowResolution:Math.round(Oe(Ge(t.shadowResolution,256),128,512)/128)*128,maxDistance:Oe(r?a.maxDistance:Ge(t.maxDistance,a.maxDistance),12e4,9e5),stepCount:Math.round(Oe(r?a.stepCount:Ge(t.stepCount,a.stepCount),24,80))}}function ss(t,e={}){const a=_t(e.waterLevelMin),r=_t(e.waterLevelMax),l=a!==null&&r!==null,o=l?Math.min(a,r):0,p=l?Math.max(a,r):0,_=_t(t.waterLevel),w=l?Oe(_??o,o,p):0,C=l?Math.max((p-o)/1e3,.01):1;return[{id:"threshold",label:"阈值",type:"range",min:0,max:500,step:1e-4,value:t.threshold,displayValue:Number(t.threshold).toFixed(2),tooltip:"起流阈值。值越大，越小的水流越容易被过滤掉，水体越不容易产生细碎流动；同时会影响水体雾化距离。"},{id:"blend",label:"混合",type:"range",min:0,max:50,step:1e-4,value:t.blend,displayValue:Number(t.blend).toFixed(2),tooltip:"流动混合/扩散强度。值越大，相邻区域之间的水量交换越强，水流传播更快；同时会影响水面高光的锐度。"},{id:"lightStrength",label:"光强",type:"range",min:0,max:10,step:1e-4,value:t.lightStrength,displayValue:Number(t.lightStrength).toFixed(2),tooltip:"光照与衰减强度。值越大，水面高光越明显，模拟中的流量衰减越慢，水流会持续得更久。"},{id:"waterLevel",label:"水位",type:"range",min:o,max:p,step:C,value:w,displayValue:l?`${ls(w)} m`:"先捕捉",disabled:!l,tooltip:"当前水位海拔。范围来自本次捕捉区域内的最低到最高高程，拖动后会按新水位重置并重新计算水流。"},{id:"waterColor",label:"水色",type:"color",value:t.waterColor,tooltip:"水体渲染颜色。改变后会实时更新当前水体颜色。"}]}function _t(t){const e=Number(t);return Number.isFinite(e)?e:null}function Ge(t,e){const a=Number(t);return Number.isFinite(a)?a:e}function Oe(t,e,a){return Math.max(e,Math.min(a,t))}function ls(t){const e=Math.abs(t);return e>=1e3?t.toFixed(1):e>=10?t.toFixed(2):t.toFixed(3)}const{getLayerIdByIndex:cs,getLayerIndexById:Oa}=vr({urlLayerOptions:yr,getLayerCategoryById:xr,getLayerGroupById:_r}),aa=-90,sa=1,Va=5e7;function us({getViewer:t,getCesium:e,onCameraViewSync:a,onBasemapRestore:r}={}){const l=Qa(),o=er();let p=null;function _(i){return br(i,l.query)}function w(){const i=String(_(fa)||"").trim(),c=ft(_("lng")),u=ft(_("lat")),b=ds(_("z")),s=Sr(i);if(s&&c!==null&&u!==null&&b!==null){const M={lng:c,lat:u,height:b,...s};if(Ba(M))return M}const m=wr(i);return Ba(m)?m:c===null||u===null||b===null||c<-180||c>180||u<-90||u>90?null:{lng:c,lat:u,height:b,heading:ft(_("heading"))??0,pitch:ft(_("pitch"))??aa,roll:ft(_("roll"))??0}}function C({duration:i=0}={}){const c=t==null?void 0:t(),u=e==null?void 0:e(),b=w();if(!(c!=null&&c.camera)||!u||!b)return!1;const s=u.Cartesian3.fromDegrees(b.lng,b.lat,b.height),m={heading:Jt(u,b.heading??0),pitch:Jt(u,hs(b.pitch??aa)),roll:Jt(u,b.roll??0)};return Number(i)>0?(c.camera.flyTo({destination:s,orientation:m,duration:Number(i)}),!0):(c.camera.setView({destination:s,orientation:m}),!0)}function R(i){if(!i)return null;const c=Oa(i);if(c===null)return null;const u={view:Gt,l:String(c)};return A(u),String(c)}function F(){const i=ft(_("l"));if(i===null)return null;const c=cs(i);return c&&(r==null||r(c)),c}function k({initialSync:i=!1,getActivePresetId:c}={}){const u=v();if(!(!(u!=null&&u.moveEnd)||p)&&(p=u.moveEnd.addEventListener(()=>{const b=c==null?void 0:c();y({activePresetId:b})}),i)){const b=c==null?void 0:c();y({activePresetId:b})}}function D(){typeof p=="function"&&p(),p=null}function y({activePresetId:i}={}){const c=e==null?void 0:e(),u=v();if(!c||!(u!=null&&u.position))return;const b=c.Cartographic.fromCartesian(u.position);if(!b)return;const s=c.Math.toDegrees(b.longitude),m=c.Math.toDegrees(b.latitude),M=Number(b.height),P=c.Math.toDegrees(Number(u.heading)||0),E=c.Math.toDegrees(Number(u.pitch)||0),O=c.Math.toDegrees(Number(u.roll)||0);if(!Number.isFinite(s)||!Number.isFinite(m)||!Number.isFinite(M))return;const G=Math.max(sa,M),$=gr({heading:P,pitch:E,roll:O});if(!$||$==="0")return;const Q={view:Gt,camera:{lng:s,lat:m,height:G,heading:P,pitch:E,roll:O}},q={view:Gt,[fa]:$,lng:Ua(s,6),lat:Ua(m,6),z:fs(G)},re=i;if(re){const le=Oa(re);le!==null&&(q.l=String(le))}A(q),a==null||a(Q)}function v(){var c;const i=t==null?void 0:t();return(i==null?void 0:i.camera)||((c=i==null?void 0:i.scene)==null?void 0:c.camera)||null}function T(i,c){const u=Object.keys(i).filter(s=>i[s]!==void 0&&i[s]!==null&&i[s]!==""),b=Object.keys(c).filter(s=>c[s]!==void 0&&c[s]!==null&&c[s]!=="");return u.length!==b.length?!1:b.every(s=>String(i[s]??"")===String(c[s]??""))}function A(i){const c={..._a(l.query),...i};tr.forEach(b=>{b in i||delete c[b]}),Object.keys(c).forEach(b=>{const s=c[b];s==null||s===""?delete c[b]:c[b]=String(s)});const u=_a(l.query);T(u,c)||o.replace({path:l.path||"/home",query:c}).catch(()=>{})}return{restoreCameraFromUrl:C,restoreBasemapFromUrl:F,syncBasemapToUrl:R,bindCameraViewSync:k,cleanupCameraViewSync:D}}function ft(t){if(t==null||typeof t=="string"&&t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function ds(t){const e=ft(t);return e===null||e<sa||e>Va?null:e}function Ba(t){if(!t)return!1;const e=Number(t.lng),a=Number(t.lat),r=Number(t.height),l=Number(t.heading),o=Number(t.pitch),p=Number(t.roll);return Number.isFinite(e)&&e>=-180&&e<=180&&Number.isFinite(a)&&a>=-90&&a<=90&&Number.isFinite(r)&&r>=sa&&r<=Va&&Number.isFinite(l)&&Number.isFinite(o)&&o>=-90&&o<=90&&Number.isFinite(p)}function hs(t){const e=Number(t);return Number.isFinite(e)?Math.max(-90,Math.min(90,e)):aa}function Ua(t,e){const a=Number(t);return Number.isFinite(a)?a.toFixed(e):null}function fs(t){const e=Number(t);return Number.isFinite(e)?e.toFixed(2):null}function Jt(t,e){const a=Number(e);return Number.isFinite(a)?t.Math.toRadians(a):0}const Me={speedFactor:1,cullSpeedMin:0,cullSpeedMax:15,windSpeedMin:0,windSpeedMax:15,arrowLength:15e3,trailLength:2e4,decaySpeed:.005,alphaFactor:1,maxWindSpeed:15},ms=new Float32Array([-1,-1,1,-1,1,1,-1,1]),ps=new Float32Array([0,0,1,0,1,1,0,1]),gs=new Uint16Array([0,1,2,0,2,3]);function ut(t,e,a){return Math.max(e,Math.min(a,t))}function pe(t,e){const a=Number(t);return Number.isFinite(a)?a:e}function vs(t,e){const a=e.getParameter(e.MAX_TEXTURE_SIZE),r=Math.min(2048,a),l=Math.max(1,Math.floor(t)),o=Math.sqrt(l),p=Math.log2(o),_=Number.isFinite(p)?Math.round(p):4;let w=Math.pow(2,_);return w=ut(w,16,r),w}function ys(t){const e=t*t,a=new Float32Array(e*4);for(let r=0;r<e;r+=1){const l=r*4;a[l]=Math.random(),a[l+1]=Math.random(),a[l+2]=Math.random(),a[l+3]=Math.random()}return a}function xs(t){return new Float32Array(t*t*4)}function _s(t,e,a,r,l){const o=e.createTexture();if(!o)throw new Error("Failed to create wind atlas texture.");e.bindTexture(e.TEXTURE_2D,o),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,a,r,0,e.RGBA,e.FLOAT,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null);let p=!1;return{_context:t,_texture:o,_target:e.TEXTURE_2D,_width:a,_height:r,destroy(){p||(e.deleteTexture(o),p=!0)}}}class bs{constructor(e,a={}){if(!e||!e.scene||!e.scene.context)throw new Error("Wind2D requires a valid Cesium Viewer instance.");if(this._viewer=e,this._scene=e.scene,this._context=this._scene.context,this._gl=this._context._gl,this._Cesium=a.cesium||globalThis.Cesium,!this._Cesium)throw new Error("Wind2D requires Cesium runtime from options.cesium or window.Cesium.");if(!this._context.webgl2)throw new Error("Wind2D requires WebGL2 context.");const r={...Me,...a};this.speedFactor=pe(r.speedFactor,Me.speedFactor),this.cullSpeedMin=pe(r.cullSpeedMin,Me.cullSpeedMin),this.cullSpeedMax=pe(r.cullSpeedMax,Me.cullSpeedMax),this.windSpeedMin=pe(r.windSpeedMin,Me.windSpeedMin),this.windSpeedMax=pe(r.windSpeedMax,Me.windSpeedMax),this.arrowLength=pe(r.arrowLength,Me.arrowLength),this.trailLength=pe(r.trailLength,Me.trailLength),this.decaySpeed=pe(r.decaySpeed,Me.decaySpeed),this.alphaFactor=pe(r.alphaFactor,Me.alphaFactor),this.maxWindSpeed=pe(r.maxWindSpeed,Me.maxWindSpeed),this.visibleLayerMin=0,this.visibleLayerMax=0,this.particleDensity=pe(a.particleDensity,1),this.show=!0,this._isDestroyed=!1,this._needsRebuild=!0,this._particleState=0,this._layerCount=0,this._maxNx=0,this._maxNy=0,this._atlasWidth=0,this._atlasHeight=0,this._dataPointCount=0,this._bounds=null,this._altitudes=[],this._centerLon=0,this._centerLat=0,this._centerHeight=0,this._centerLonRad=0,this._centerLatRad=0,this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(0,0,0),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian),this._particleTextureSize=16,this._particleCount=256,this._drawVertexCount=this._particleCount*6,this._particlePositionTextures=[null,null],this._velocityTextures=[null,null],this._framebuffers=[null,null],this._windAtlasTexture=null,this._quadVertexArray=null,this._particleVertexArray=null,this._particleVertexBuffer=null,this._updateProgram=null,this._drawProgram=null,this._updateCommand=null,this._drawCommand=null}loadData(e){if(!e||typeof e!="object")throw new Error("Wind2D.loadData requires a valid data object.");const a=pe(e.longitude,NaN),r=pe(e.latitude,NaN),l=Array.isArray(e.altitude)?e.altitude:[],o=Array.isArray(e.sizeMesh)?e.sizeMesh:[],p=Array.isArray(e.count)?e.count:[],_=Array.isArray(e.hspeed)?e.hspeed:[],w=Array.isArray(e.hdir)?e.hdir:[],C=Array.isArray(e.vspeed)?e.vspeed:[];if(!Number.isFinite(a)||!Number.isFinite(r))throw new Error("Wind2D.loadData requires finite longitude and latitude.");const R=l.length;if(R<1)throw new Error("Wind2D.loadData requires at least one altitude layer.");if(o.length!==R||p.length!==R)throw new Error("Wind2D.loadData sizeMesh/count length must match altitude length.");const F=p.map(m=>Math.max(1,Math.floor(pe(m,1)))),k=o.map(m=>Math.max(1,pe(m,1))),D=l.map(m=>pe(m,0)),y=F.reduce((m,M)=>m+M*M,0);if(_.length<y||w.length<y||C.length<y)throw new Error("Wind2D.loadData hspeed/hdir/vspeed length does not match grid count.");this._layerCount=R,this.visibleLayerMin=0,this.visibleLayerMax=R-1,this._altitudes=D.slice(),this._maxNx=Math.max(...F),this._maxNy=this._maxNx,this._atlasWidth=this._maxNx,this._atlasHeight=this._maxNy*R;const v=new Float32Array(this._atlasWidth*this._atlasHeight*4);let T=0;for(let m=0;m<R;m+=1){const M=F[m],P=M;for(let E=0;E<P;E+=1)for(let O=0;O<M;O+=1){const G=T+E*M+O,$=((m*this._maxNy+E)*this._atlasWidth+O)*4,Q=Number(_[G]),q=Number(w[G]),re=Number(C[G]);if(!(Number.isFinite(Q)&&Number.isFinite(q))){v[$]=0,v[$+1]=0,v[$+2]=0,v[$+3]=0;continue}const ne=q*Math.PI/180;v[$]=Q*Math.sin(ne),v[$+1]=Q*Math.cos(ne),v[$+2]=Number.isFinite(re)?re:0,v[$+3]=1}T+=M*P}this._createOrReplaceWindAtlasTexture(v);const A=Math.max(...k),i=this._maxNx*A,c=i/2/111320,u=r*Math.PI/180,b=Math.max(1e-6,Math.abs(Math.cos(u))),s=i/2/(111320*b);this._bounds={minLon:a-s,maxLon:a+s,minLat:r-c,maxLat:r+c,minHeight:Math.min(...D),maxHeight:Math.max(...D)},this._dataPointCount=y,this._updateTransform(),this.setParticleDensity(this.particleDensity),this._needsRebuild=!0}setParticleCount(e){const a=Math.max(1,Math.floor(pe(e,1))),r=vs(a,this._gl);this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&r===this._particleTextureSize||(this._particleTextureSize=r,this._particleCount=r*r,this._drawVertexCount=this._particleCount*6,this._rebuildParticleResources(),this._needsRebuild=!0)}setParticleDensity(e){const a=ut(pe(e,this.particleDensity),.05,10);if(this.particleDensity=a,this._dataPointCount<=0)return;const r=Math.max(1,Math.floor(this._dataPointCount*a));this.setParticleCount(r)}setBounds(e,a,r,l){const o=pe(e,NaN),p=pe(a,NaN),_=pe(r,NaN),w=pe(l,NaN);if(!Number.isFinite(o)||!Number.isFinite(p)||!Number.isFinite(_)||!Number.isFinite(w))return;const C=this._bounds?{...this._bounds}:{minHeight:0,maxHeight:0};C.minLon=Math.min(o,p),C.maxLon=Math.max(o,p),C.minLat=Math.min(_,w),C.maxLat=Math.max(_,w),this._bounds=C,this._updateTransform(),this._needsRebuild=!0}flyTo(){if(!this._bounds||!this._viewer||!this._viewer.camera)return;const e=(this._bounds.minLon+this._bounds.maxLon)*.5,a=(this._bounds.minLat+this._bounds.maxLat)*.5;this._viewer.camera.flyTo({destination:this._Cesium.Cartesian3.fromDegrees(e,a,2e6),orientation:{heading:0,pitch:-this._Cesium.Math.PI_OVER_TWO,roll:0}})}update(e){if(this._isDestroyed||!this.show||!!!(this._windAtlasTexture&&this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1])||((this._needsRebuild||!this._updateCommand||!this._drawCommand)&&this._rebuildCommands(),!this._updateCommand||!this._drawCommand))return;const l=1-this._particleState;this._updateCommand.framebuffer=this._framebuffers[l],this._updateCommand.execute(this._context,e?e.passState:void 0),this._particleState=l,this._drawCommand.modelMatrix=this._modelMatrix,e&&Array.isArray(e.commandList)&&e.commandList.push(this._drawCommand)}destroy(){this._isDestroyed||(this._destroyCommandResources(),this._destroyParticleResources(),this._quadVertexArray&&(this._quadVertexArray.destroy(),this._quadVertexArray=null),this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._isDestroyed=!0)}isDestroyed(){return this._isDestroyed}_createOrReplaceWindAtlasTexture(e){this._windAtlasTexture&&(this._windAtlasTexture.destroy(),this._windAtlasTexture=null),this._windAtlasTexture=_s(this._context,this._gl,this._atlasWidth,this._atlasHeight,e)}_updateTransform(){this._bounds&&(this._centerLon=(this._bounds.minLon+this._bounds.maxLon)*.5,this._centerLat=(this._bounds.minLat+this._bounds.maxLat)*.5,this._centerHeight=(this._bounds.minHeight+this._bounds.maxHeight)*.5,this._centerLonRad=this._Cesium.Math.toRadians(this._centerLon),this._centerLatRad=this._Cesium.Math.toRadians(this._centerLat),this._centerCartesian=this._Cesium.Cartesian3.fromDegrees(this._centerLon,this._centerLat,this._centerHeight),this._modelMatrix=this._Cesium.Transforms.eastNorthUpToFixedFrame(this._centerCartesian))}_rebuildParticleResources(){this._destroyParticleResources();const e=this._Cesium,a=this._particleTextureSize,r=ys(a),l=xs(a);for(let o=0;o<2;o+=1){this._particlePositionTextures[o]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:r},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._velocityTextures[o]=new e.Texture({context:this._context,width:a,height:a,pixelFormat:e.PixelFormat.RGBA,pixelDatatype:e.PixelDatatype.FLOAT,source:{width:a,height:a,arrayBufferView:l},sampler:new e.Sampler({minificationFilter:e.TextureMinificationFilter.NEAREST,magnificationFilter:e.TextureMagnificationFilter.NEAREST})}),this._framebuffers[o]=new e.Framebuffer({context:this._context,colorTextures:[this._particlePositionTextures[o],this._velocityTextures[o]],destroyAttachments:!1});const p=this._framebuffers[o]._framebuffer;this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,p),this._gl.drawBuffers([this._gl.COLOR_ATTACHMENT0,this._gl.COLOR_ATTACHMENT1]),this._gl.bindFramebuffer(this._gl.DRAW_FRAMEBUFFER,null)}this._particleState=0}_destroyParticleResources(){for(let e=0;e<2;e+=1)this._framebuffers[e]&&(this._framebuffers[e].destroy(),this._framebuffers[e]=null),this._particlePositionTextures[e]&&(this._particlePositionTextures[e].destroy(),this._particlePositionTextures[e]=null),this._velocityTextures[e]&&(this._velocityTextures[e].destroy(),this._velocityTextures[e]=null)}_rebuildCommands(){this._particlePositionTextures[0]&&this._particlePositionTextures[1]&&this._velocityTextures[0]&&this._velocityTextures[1]&&this._framebuffers[0]&&this._framebuffers[1]&&this._windAtlasTexture&&(this._destroyCommandResources(),this._buildQuadVertexArray(),this._buildParticleVertexArray(),this._buildUpdateProgram(),this._buildDrawProgram(),this._buildUpdateCommand(),this._buildDrawCommand(),this._needsRebuild=!1)}_destroyCommandResources(){this._updateCommand=null,this._drawCommand=null,this._updateProgram&&(this._updateProgram.destroy(),this._updateProgram=null),this._drawProgram&&(this._drawProgram.destroy(),this._drawProgram=null),this._particleVertexArray&&(this._particleVertexArray.destroy(),this._particleVertexArray=null),this._particleVertexBuffer&&(this._particleVertexBuffer.destroy(),this._particleVertexBuffer=null)}_buildQuadVertexArray(){if(this._quadVertexArray)return;const e=this._Cesium,a=e.Buffer.createVertexBuffer({context:this._context,typedArray:ms,usage:e.BufferUsage.STATIC_DRAW}),r=e.Buffer.createVertexBuffer({context:this._context,typedArray:ps,usage:e.BufferUsage.STATIC_DRAW}),l=e.Buffer.createIndexBuffer({context:this._context,typedArray:gs,usage:e.BufferUsage.STATIC_DRAW,indexDatatype:e.IndexDatatype.UNSIGNED_SHORT});this._quadVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:a,componentsPerAttribute:2},{index:1,vertexBuffer:r,componentsPerAttribute:2}],indexBuffer:l})}_buildParticleVertexArray(){const e=this._Cesium,a=new Float32Array(this._drawVertexCount);for(let r=0;r<a.length;r+=1)a[r]=r;this._particleVertexBuffer=e.Buffer.createVertexBuffer({context:this._context,typedArray:a,usage:e.BufferUsage.STATIC_DRAW}),this._particleVertexArray=new e.VertexArray({context:this._context,attributes:[{index:0,vertexBuffer:this._particleVertexBuffer,componentsPerAttribute:1}]})}_buildUpdateProgram(){const e=this._Cesium,a=`#version 300 es
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
}`;this._drawProgram=e.ShaderProgram.fromCache({context:this._context,vertexShaderSource:a,fragmentShaderSource:r,attributeLocations:{particleIndex:0}})}_buildUpdateCommand(){const e=this._Cesium,a=e.RenderState.fromCache({viewport:new e.BoundingRectangle(0,0,this._particleTextureSize,this._particleTextureSize)});this._updateCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.TRIANGLES,vertexArray:this._quadVertexArray,shaderProgram:this._updateProgram,renderState:a,framebuffer:this._framebuffers[1-this._particleState],uniformMap:this._getUpdateUniformMap(),pass:e.Pass.OPAQUE})}_buildDrawCommand(){const e=this._Cesium,a=e.RenderState.fromCache({depthTest:{enabled:!0},depthMask:!1,blending:e.BlendingState.ALPHA_BLEND});this._drawCommand=new e.DrawCommand({owner:this,primitiveType:e.PrimitiveType.LINES,vertexArray:this._particleVertexArray,shaderProgram:this._drawProgram,renderState:a,modelMatrix:this._modelMatrix,uniformMap:this._getDrawUniformMap(),pass:e.Pass.TRANSLUCENT,count:this._drawVertexCount})}_getVisibleLayerRange(){if(this._layerCount<=0)return{min:0,max:0};const e=ut(Math.floor(pe(this.visibleLayerMin,0)),0,this._layerCount-1),a=ut(Math.floor(pe(this.visibleLayerMax,this._layerCount-1)),e,this._layerCount-1);return{min:e,max:a}}_normalizeSpeedRange(e,a){const r=Math.max(1e-4,pe(this.maxWindSpeed,Me.maxWindSpeed)),l=ut(pe(e,0)/r,0,1),o=ut(pe(a,r)/r,0,1);return{min:Math.min(l,o),max:Math.max(l,o)}}_getUpdateUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],windAtlas:()=>this._windAtlasTexture,speedFactor:()=>pe(this.speedFactor,Me.speedFactor),maxWindSpeed:()=>Math.max(1e-4,pe(this.maxWindSpeed,Me.maxWindSpeed)),decaySpeed:()=>ut(pe(this.decaySpeed,Me.decaySpeed),0,1),layerCount:()=>this._layerCount,maxNx:()=>this._maxNx,maxNy:()=>this._maxNy,atlasW:()=>this._atlasWidth,atlasH:()=>this._atlasHeight,visibleLayerMin:()=>this._getVisibleLayerRange().min,visibleLayerMax:()=>this._getVisibleLayerRange().max}}_getDrawUniformMap(){return{currentParticlesPosition:()=>this._particlePositionTextures[this._particleState],velocityTexture:()=>this._velocityTextures[this._particleState],particlesTextureSize:()=>this._particleTextureSize,arrowLength:()=>pe(this.arrowLength,Me.arrowLength),trailLength:()=>pe(this.trailLength,Me.trailLength),speedMin:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).min,speedMax:()=>this._normalizeSpeedRange(this.cullSpeedMin,this.cullSpeedMax).max,colorSpeedMin:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).min,colorSpeedMax:()=>this._normalizeSpeedRange(this.windSpeedMin,this.windSpeedMax).max,alphaFactor:()=>ut(pe(this.alphaFactor,Me.alphaFactor),0,1),boundsMinLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLon):0,boundsMaxLon:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLon):0,boundsMinLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.minLat):0,boundsMaxLat:()=>this._bounds?this._Cesium.Math.toRadians(this._bounds.maxLat):0,boundsMinHeight:()=>this._bounds?this._bounds.minHeight:0,boundsMaxHeight:()=>this._bounds?this._bounds.maxHeight:0,centerECEF:()=>this._centerCartesian,centerLonRad:()=>this._centerLonRad,centerLatRad:()=>this._centerLatRad}}}function Ss({getViewer:t,getCesium:e,message:a}){const r=ee(null),l=ee({speedFactor:1,arrowLength:15e3,trailLength:2e4,alphaFactor:1});function o(){var R,F;const C=t==null?void 0:t();if(r.value){try{(F=(R=C==null?void 0:C.scene)==null?void 0:R.primitives)==null||F.remove(r.value)}catch{}r.value.destroy(),r.value=null}}function p(){const C=t==null?void 0:t(),R=e==null?void 0:e();if(!C||!R){a.error("Cesium 尚未初始化");return}o();const F=ws(R);r.value=new bs(C,{maxWindSpeed:20,cesium:R,speedFactor:l.value.speedFactor,arrowLength:l.value.arrowLength,trailLength:l.value.trailLength,alphaFactor:l.value.alphaFactor}),r.value.loadData(F),C.scene.primitives.add(r.value),r.value.flyTo(),a.success("风场加载成功，可通过下方滑块调节样式")}function _(){r.value&&(r.value.speedFactor=l.value.speedFactor,r.value.arrowLength=l.value.arrowLength,r.value.trailLength=l.value.trailLength,r.value.alphaFactor=l.value.alphaFactor)}function w(C,R){return C in l.value?(l.value={...l.value,[C]:Number(R)},_(),!0):!1}return{wind2D:r,windParams:l,clearWind2D:o,loadSimulatedWind:p,setWindParam:w}}function ws(t){const l=[0,2e3,5e3,1e4,15e3],o=[3e4,3e4,25e3,25e3,2e4],p=[30,30,25,25,20],_=p.reduce((k,D)=>k+D*D,0),w=new Array(_),C=new Array(_),R=new Array(_);let F=0;for(let k=0;k<5;k++){const D=p[k],y=p[k],v=o[k];for(let T=0;T<y;T++)for(let A=0;A<D;A++){const i=F+T*D+A,c=(A-D/2)*(v/111320),u=(T-y/2)*(v/111320/Math.cos(t.Math.toRadians(35))),s=Math.atan2(u,c)+Math.PI/2+.2*Math.sin(A*.5)*Math.cos(T*.5);C[i]=t.Math.toDegrees(s)%360;const m=Math.sqrt(c*c+u*u),P=Math.max(0,1-m/15);w[i]=(5+k*2)*P+2*Math.random(),R[i]=.5*Math.sin(A*.3)*Math.cos(T*.3)}F+=D*y}return{longitude:104,latitude:35,altitude:l,sizeMesh:o,count:p,hspeed:w,hdir:C,vspeed:R}}const Ts={key:3,class:"drag-overlay"},Cs={class:"map-controls-group"},Ms={class:"mouse-position-content"},Ds={__name:"CesiumContainer",emits:["view-sync"],setup(t,{emit:e}){let a=null,r=null,l=!1;const o=ra(),p=e,_=ee(!1),w=ee(null),C=ee(nr()),R=()=>r,F=()=>a||window.Cesium,k=()=>C.value.tiandituTk,D=()=>C.value.cesiumIonToken,y=Wo({getViewer:R,getCesium:F,message:o,backendBaseUrl:rr,tiandituToken:k,cesiumIonToken:D}),{activeBasemap:v,activeTerrain:T,customXyzBasemapUrl:A,basemapOptions:i,terrainOptions:c,overlayOptions:u,createImageryProviderViewModels:b,createTerrainProviderViewModels:s,getSelectedImageryProviderViewModel:m,getSelectedTerrainProviderViewModel:M,bindLayerPickerStateSync:P,addBaseImageryLayers:E,initCustomTerrain:O,handleOverlayToggle:G,handleCustomBasemapSubmit:$,cleanupLayers:Q}=y;Te(v,(X,Y)=>{!X||X===Y||ve(X)});const{coordinateDisplay:q,setupInteractions:re,cleanupInteractions:le}=ko({getViewer:R,getCesium:F}),{installCreditHider:ne,cleanupCreditHider:ye}=Ro({getViewer:R}),{restoreCameraFromUrl:xe,restoreBasemapFromUrl:fe,syncBasemapToUrl:ve,bindCameraViewSync:Qe,cleanupCameraViewSync:qe}=us({getViewer:R,getCesium:F,onCameraViewSync:X=>p("view-sync",X),onBasemapRestore:X=>{X&&v.value!==X&&(v.value=X)}}),W=Jo({getViewer:R,getCesium:F,message:o}),{flyToHome:U}=W,I=Ss({getViewer:R,getCesium:F,message:o}),me=es({getViewer:R,getCesium:F,message:o}),je=Le(()=>me.loadedDataSources.value),Z=Le(()=>me.pendingGltfFile.value),_e=ee(!1);function Ve(X){_e.value=!0,X.dataTransfer&&(X.dataTransfer.dropEffect="copy")}function et(X){const Y=X==null?void 0:X.relatedTarget,ce=X==null?void 0:X.currentTarget;Y instanceof Node&&ce instanceof Node&&ce.contains(Y)||(_e.value=!1)}async function Be(X){var ce;if(_e.value=!1,!_.value)return;const Y=(ce=X.dataTransfer)==null?void 0:ce.files;if(!(!Y||Y.length===0))for(const ie of Y)try{await me.loadDataFile(ie)}catch{}}const{toolPanelOpen:tt,advancedEffectControls:st,fluidParams:lt,toolModules:Ue,handleToolAction:dt,handleToolControlChange:ct,handleFluidStateChange:Xe,cleanupTools:Ye}=as({fluidPanelRef:w,sceneActions:W,wind:I});async function Ee(){l=!1,$a("正在初始化 3D 场景...");try{let X=0,Y=1;for(;X<Y;)try{if(C.value=await ar({silent:!1,force:X>0}),Y=Math.max(Y,Array.isArray(C.value.tiandituTokens)?C.value.tiandituTokens.length:1,Array.isArray(C.value.cesiumIonTokens)?C.value.cesiumIonTokens.length:1,1),a=await So({ionToken:D()}),l||!a||!document.getElementById("cesiumContainer"))return;x(),re();const ce=E(),ie=await O();if(l){ze();return}if(_.value=!0,Qe({initialSync:!1,getActivePresetId:()=>v.value}),fe(),ce&&ie){o.success("天地图基础影像与地形加载成功。");return}const Pe=ce?{switched:!1}:$t("tianditu_tk"),Fe=ie?{switched:!1}:$t("cesium_ion_token");if(!(Pe.switched||Fe.switched)){o.error("默认地图源或地形加载失败，请检查 token 或网络。",{closable:!0});return}C.value=Fe.switched?Fe.tokens:Pe.tokens,ze(),X+=1,o.warning("主 token 初始化失败，正在尝试备用 token。",{closable:!0})}catch(ce){const ie=$t("cesium_ion_token");if(!ie.switched)throw ce;C.value=ie.tokens,ze(),X+=1,o.warning("Cesium ion token 失败，正在尝试备用 token。",{closable:!0})}o.error("备用 token 已全部尝试，Cesium 初始化仍失败。",{closable:!0})}catch(X){o.error("Cesium 运行时加载失败",X),o.error("Cesium 初始化失败，请检查网络环境。",{closable:!0})}finally{qa()}}function ze(){if(_.value=!1,qe(),le(),Q(),ye(),!!r){try{r.destroy()}catch{}r=null}}function x(){var ie;const X=typeof a.Map=="function"?a.Map:a.Viewer,Y=b(),ce=s();r=new X("cesiumContainer",{baseLayerPicker:!0,geocoder:((ie=a.IonGeocodeProviderType)==null?void 0:ie.GOOGLE)||!0,homeButton:!0,infoBox:!0,selectionIndicator:!0,timeline:!0,animation:!0,sceneModePicker:!0,navigationHelpButton:!1,imageryProviderViewModels:Y,selectedImageryProviderViewModel:m(Y),terrainProviderViewModels:ce,selectedTerrainProviderViewModel:M(ce),shouldAnimate:!0}),r.scene.debugShowFramesPerSecond=!0,r.scene.globe.terrainExaggeration=1,r.scene.globe.terrainExaggerationRelativeHeight=0,Lo(r,a),Er(r),ne(),P(),xe({duration:0})||U(0)}Ha(()=>{Ee()});async function S({files:X}){for(const Y of X)try{await me.loadDataFile(Y)}catch{}}function N({id:X}){me.removeDataSource(X)}function V(){me.clearAllDataSources()}async function te(X){try{await me.loadGltfWithUserCoords(X)}catch{}}function ue(){me.cancelPendingGltf()}return Wa(()=>{if(l=!0,_.value=!1,qe(),le(),Ye(),Q(),ye(),me.clearAllDataSources(),r){try{r.destroy()}catch{}r=null}}),(X,Y)=>{var ce;return j(),K(ke,null,[g("div",{id:"cesiumContainer",class:"cesium-container",onDragover:pt(Ve,["prevent"]),onDragleave:pt(et,["prevent"]),onDrop:pt(Be,["prevent"])},null,32),_.value?(j(),$e(mt(ln),{key:0,headless:"","get-viewer":R,"get-cesium":F,controls:se(st)},null,8,["controls"])):he("",!0),_.value?(j(),$e(mt(xo),{key:1,ref_key:"fluidPanelRef",ref:w,headless:"","get-viewer":R,"get-cesium":F,params:se(lt),onStateChange:se(Xe)},null,40,["params","onStateChange"])):he("",!0),_.value?(j(),$e(zi,{key:2,open:se(tt),"onUpdate:open":Y[0]||(Y[0]=ie=>Wt(tt)?tt.value=ie:null),"active-basemap":se(v),"onUpdate:activeBasemap":Y[1]||(Y[1]=ie=>Wt(v)?v.value=ie:null),"active-terrain":se(T),"onUpdate:activeTerrain":Y[2]||(Y[2]=ie=>Wt(T)?T.value=ie:null),"basemap-options":se(i),"terrain-options":se(c),"overlay-options":se(u),"custom-basemap-url":se(A),modules:se(Ue),"loaded-data-sources":je.value,onModuleAction:se(dt),onControlChange:se(ct),onOverlayToggle:se(G),onCustomBasemapSubmit:se($),onDataImport:S,onDataRemove:N,onDataClearAll:V},null,8,["open","active-basemap","active-terrain","basemap-options","terrain-options","overlay-options","custom-basemap-url","modules","loaded-data-sources","onModuleAction","onControlChange","onOverlayToggle","onCustomBasemapSubmit"])):he("",!0),we(Zi,{visible:!!Z.value,"file-name":((ce=Z.value)==null?void 0:ce.name)||"",onConfirm:te,onCancel:ue},null,8,["visible","file-name"]),_e.value&&_.value?(j(),K("div",Ts,[we(se(ea),{size:48,"stroke-width":"1.5"}),Y[4]||(Y[4]=g("span",{class:"drag-overlay-text"},"释放文件以导入到 3D 场景",-1)),Y[5]||(Y[5]=g("span",{class:"drag-overlay-hint"},"GeoJSON / KML / SHP / GLB / CZML",-1))])):he("",!0),g("div",Cs,[g("div",Ms,de(se(q)),1),Y[7]||(Y[7]=g("div",{class:"divider"},null,-1)),g("button",{class:"home-btn",title:"回到初始位置",onClick:Y[3]||(Y[3]=(...ie)=>se(U)&&se(U)(...ie))},[...Y[6]||(Y[6]=[g("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor"},[g("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})],-1)])])])],64)}}},Ws=Pt(Ds,[["__scopeId","data-v-4fae6931"]]);export{Ws as default};
