import{g as ve}from"./getCesium-6L1FaWum.js";function ge(k){const e=Number(k.SHADOW_RAY_FAR)||5e5,i=Math.min(Number(k.maxSteps)||500,512),t=Number(k.minStepSize)||50,a=Number(k.maxStepSize)||1e3;return`#version 300 es
precision highp float;
precision highp sampler3D;

uniform mat4 u_inverseSunViewProj;
uniform mat4 u_reprojectionMatrix;
uniform vec3 u_sunDirection;
// Bruneton bottom 球(6371860) 与 WGS84(6378137) 球心偏移；point.xyz 已在 ECEF，
// 加该偏移对齐到 getRayNearFar 使用的 u_bottomRadius 球坐标系。对齐 three-geospatial shadow.frag。
uniform vec3 u_altitudeCorrection;
uniform vec2 u_resolution;
uniform vec2 u_atlasOffset;
uniform float u_atlasScale;
uniform vec2 u_atlasResolution;
uniform float u_bottomRadius;
uniform float u_shadowTopHeight;
uniform float u_shadowBottomHeight;
uniform float u_weatherRepeat;
uniform vec2 u_localWeatherOffset;
uniform float u_shapeRepeat;
uniform float u_shapeDetailRepeat;
uniform vec3 u_shapeOffset;
uniform vec3 u_shapeDetailOffset;
uniform float u_turbulenceRepeat;
uniform float u_turbulenceDisplacement;
uniform vec4 u_minLayerHeights;
uniform vec4 u_maxLayerHeights;
uniform vec3 u_minIntervalHeights;
uniform vec3 u_maxIntervalHeights;
uniform vec4 u_densityProfileExpTerms;
uniform vec4 u_densityProfileExponents;
uniform vec4 u_densityProfileLinearTerms;
uniform vec4 u_densityProfileConstantTerms;
uniform vec4 u_densityScales;
uniform vec4 u_shapeAmounts;
uniform vec4 u_shapeDetailAmounts;
uniform vec4 u_weatherExponents;
uniform vec4 u_shapeAlteringBiases;
uniform vec4 u_coverageFilterWidths;
uniform vec4 u_coverages;
uniform float u_scatteringCoefficient;
uniform float u_absorptionCoefficient;
uniform float u_time;
uniform float u_evolutionSpeed;
uniform float u_minDensity;
uniform float u_minExtinction;
uniform float u_minTransmittance;
uniform float u_opticalDepthTailScale;

uniform sampler3D u_shapeTexture;
uniform sampler3D u_shapeDetailTexture;
uniform sampler2D u_weatherTexture;
uniform sampler2D u_turbulenceTexture;
uniform sampler2D u_blueNoise;
uniform int u_debugShadow;

in vec2 v_uv;
layout(location = 0) out vec4 out_color;
layout(location = 1) out vec4 out_depthVelocity;

const float PI = 3.14159265359;
const float EVOLUTION_SCALE = 2e4;

float getBlueNoise() { return texture(u_blueNoise, gl_FragCoord.xy / 256.0).r; }

float saturate(float x) { return clamp(x, 0.0, 1.0); }
vec4 saturate(vec4 x) { return clamp(x, 0.0, 1.0); }
float remap(float v, float a, float b, float c, float d) { return c + (v - a) * (d - c) / (b - a); }
vec4 remapClamped(vec4 v, vec4 a, vec4 b, vec4 c, vec4 d) { return clamp(c + (v - a) * (d - c) / (b - a), min(c, d), max(c, d)); }
vec4 remapClamped(vec4 v, vec4 a, vec4 b) { return clamp((v - a) / max(b - a, vec4(0.0001)), 0.0, 1.0); }

vec2 getCubeSphereUv(vec3 position) {
    vec3 n = normalize(position);
    vec3 f = abs(n);
    vec3 c = n / max(f.x, max(f.y, f.z));
    vec2 m;
    if (f.y >= f.x && f.y >= f.z) {
        m = c.y > 0.0 ? vec2(-n.x, n.z) : n.xz;
    } else if (f.x >= f.y && f.x >= f.z) {
        m = c.x > 0.0 ? n.yz : vec2(-n.y, n.z);
    } else {
        m = c.z > 0.0 ? n.xy : vec2(n.x, -n.y);
    }
    vec2 m2 = m * m;
    float q = dot(m2.xy, vec2(-2.0, 2.0)) - 3.0;
    float q2 = q * q;
    vec2 uv;
    uv.x = sqrt(1.5 + m2.x - m2.y - 0.5 * sqrt(max(0.0, -24.0 * m2.x + q2))) * (m.x > 0.0 ? 1.0 : -1.0);
    uv.y = sqrt(6.0 / max(0.001, 3.0 - uv.x * uv.x)) * m.y;
    return uv * 0.5 + 0.5;
}
vec2 getGlobeUv(vec3 position) { return getCubeSphereUv(position); }

bool inEmptySpace(float height) {
    bvec3 gt = greaterThan(vec3(height), u_minIntervalHeights);
    bvec3 lt = lessThan(vec3(height), u_maxIntervalHeights);
    return (gt.x && lt.x) || (gt.y && lt.y) || (gt.z && lt.z);
}

vec4 getLayerDensity(vec4 heightFraction) {
    return u_densityProfileExpTerms * exp(u_densityProfileExponents * heightFraction)
        + u_densityProfileLinearTerms * heightFraction + u_densityProfileConstantTerms;
}

vec4 getHeightFractions(float height) {
    vec4 range = u_maxLayerHeights - u_minLayerHeights;
    return clamp((vec4(height) - u_minLayerHeights) / max(range, vec4(0.0001)), 0.0, 1.0);
}

struct WeatherSample { vec4 heightFraction; vec4 density; };
struct MediaSample { float density; vec4 weight; float scattering; float extinction; };

vec4 shapeAlteringFunction(vec4 heightFraction, vec4 bias) {
    vec4 biased = pow(heightFraction, bias);
    vec4 x = clamp(biased * 2.0 - 1.0, -1.0, 1.0);
    return 1.0 - x * x;
}

WeatherSample sampleWeather(vec2 uv, float height, float mipLevel) {
    WeatherSample w;
    w.heightFraction = getHeightFractions(height);
    vec2 weatherUv = uv * u_weatherRepeat + u_localWeatherOffset;
    vec4 localWeather = pow(textureLod(u_weatherTexture, weatherUv, mipLevel).rgba, u_weatherExponents);
    vec4 heightScale = shapeAlteringFunction(w.heightFraction, u_shapeAlteringBiases);
    vec4 factor = 1.0 - u_coverages * heightScale;
    w.density = remapClamped(mix(localWeather, vec4(1.0), u_coverageFilterWidths), factor, factor + u_coverageFilterWidths);
    return w;
}

MediaSample sampleMedia(WeatherSample weather, vec3 position, vec2 uv, float mipLevel, float jitter) {
    vec4 density = weather.density;
    vec3 surfaceNormal = normalize(position);
    float localWeatherSpeed = length(u_localWeatherOffset);
    vec3 evolution = -surfaceNormal * localWeatherSpeed * EVOLUTION_SCALE;
    vec2 turbulenceUv = uv * u_weatherRepeat * u_turbulenceRepeat;
    vec3 turbulence = u_turbulenceDisplacement * (texture(u_turbulenceTexture, turbulenceUv).rgb * 2.0 - 1.0)
        * dot(density, remapClamped(weather.heightFraction, vec4(0.3), vec4(0.0)));
    vec3 shapePosition = (position + evolution + turbulence) * u_shapeRepeat + u_shapeOffset;
    float shapeTex = texture(u_shapeTexture, fract(shapePosition)).r;
    density = remapClamped(density, vec4(1.0 - shapeTex) * u_shapeAmounts, vec4(1.0));
    if (mipLevel * 0.5 + (jitter - 0.5) * 0.5 < 0.5) {
        vec3 detailPosition = (position + turbulence) * u_shapeDetailRepeat + u_shapeDetailOffset;
        float detail = texture(u_shapeDetailTexture, detailPosition).r;
        vec4 modifier = mix(vec4(pow(detail, 6.0)), vec4(1.0 - detail), remapClamped(weather.heightFraction, vec4(0.2), vec4(0.4), vec4(0.0), vec4(1.0)));
        modifier = mix(vec4(0.0), modifier, u_shapeDetailAmounts);
        density = remapClamped(density * 2.0, vec4(modifier * 0.5), vec4(1.0));
    }
    density = saturate(density * u_densityScales * getLayerDensity(weather.heightFraction));
    float densitySum = density.x + density.y + density.z + density.w;
    MediaSample media;
    media.density = densitySum;
    media.weight = density / max(densitySum, 1e-7);
    media.scattering = densitySum * u_scatteringCoefficient;
    media.extinction = densitySum * u_absorptionCoefficient + media.scattering;
    return media;
}

void getIcosahedralVertices(vec3 direction, out vec3 v1, out vec3 v2, out vec3 v3) {
    const float a = 0.85065080835204;
    const float b = 0.5257311121191336;
    const float kT = 0.6180339887498948;
    const float kT2 = 0.38196601125010515;
    vec3 absD = abs(direction);
    float s1 = dot(absD, vec3(1.0, kT2, -kT));
    float s2 = dot(absD, vec3(-kT, 1.0, kT2));
    float s3 = dot(absD, vec3(kT2, -kT, 1.0));
    v1 = s1 > 0.0 ? vec3(a, b, 0.0) : vec3(-b, 0.0, a);
    v2 = s2 > 0.0 ? vec3(0.0, a, b) : vec3(a, -b, 0.0);
    v3 = s3 > 0.0 ? vec3(b, 0.0, a) : vec3(0.0, a, -b);
    vec3 octantSign = sign(direction);
    v1 *= octantSign; v2 *= octantSign; v3 *= octantSign;
}

void swapIfBigger(inout vec4 a, inout vec4 b) {
    if (a.w > b.w) { vec4 t = a; a = b; b = t; }
}

void sortVertices(inout vec3 a, inout vec3 b, inout vec3 c) {
    vec4 aw = vec4(a, dot(a, vec3(0.5, 0.5, 1.0)));
    vec4 bw = vec4(b, dot(b, vec3(0.5, 0.5, 1.0)));
    vec4 cw = vec4(c, dot(c, vec3(0.5, 0.5, 1.0)));
    swapIfBigger(aw, bw); swapIfBigger(bw, cw); swapIfBigger(aw, bw);
    a = aw.xyz; b = bw.xyz; c = cw.xyz;
}

vec3 getPentagonalWeights(vec3 direction, vec3 v1, vec3 v2, vec3 v3) {
    vec3 w = exp(vec3(dot(v1, direction), dot(v2, direction), dot(v3, direction)) * 40.0);
    return w / (w.x + w.y + w.z);
}

vec3 getStructureNormal(vec3 direction, float jitter) {
    vec3 a, b, c, weights;
    getIcosahedralVertices(direction, a, b, c);
    sortVertices(a, b, c);
    weights = getPentagonalWeights(direction, a, b, c);
    return jitter < weights.x ? a : (jitter < weights.x + weights.y ? b : c);
}

void intersectStructuredPlanes(vec3 normal, vec3 rayOrigin, vec3 rayDirection, float samplePeriod, out float stepOffset, out float stepSize) {
    float NoD = dot(rayDirection, normal);
    stepSize = samplePeriod / max(abs(NoD), 1e-7);
    stepOffset = -mod(dot(rayOrigin, normal), samplePeriod) / NoD;
    if (stepOffset < 0.0) stepOffset += stepSize;
}

vec4 raySphereFirstIntersection(vec3 origin, vec3 direction, vec3 center, vec4 radius) {
    vec3 a = origin - center;
    float b = 2.0 * dot(direction, a);
    vec4 c = vec4(dot(a, a)) - radius * radius;
    vec4 discriminant = b * b - 4.0 * c;
    vec4 mask = step(discriminant, vec4(0.0));
    return mix((-b - sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

void getRayNearFar(vec3 sunPosition, vec3 rayDirection, out float rayNear, out float rayFar) {
    vec4 radii = u_bottomRadius + vec4(u_shadowTopHeight, u_shadowBottomHeight, 0.0, 0.0);
    vec4 firstIntersections = raySphereFirstIntersection(sunPosition, rayDirection, vec3(0.0), radii);
    rayNear = max(0.0, firstIntersections.x);
    rayFar = firstIntersections.y < 0.0 ? 1e6 : firstIntersections.y;
}

vec4 marchClouds(vec3 rayOrigin, vec3 rayDirection, float maxRayDistance, float jitter, float mipLevel) {
    vec3 normal = getStructureNormal(rayDirection, jitter);
    float rayDistance, stepSize;
    float samplePeriod = clamp(maxRayDistance / float(${i}), ${t.toFixed(1)}, ${a.toFixed(1)});
    intersectStructuredPlanes(normal, rayOrigin, rayDirection, samplePeriod, rayDistance, stepSize);
    rayDistance -= stepSize * jitter;

    float extinctionSum = 0.0;
    float maxOpticalDepth = 0.0;
    float maxOpticalDepthTail = 0.0;
    float transmittanceIntegral = 1.0;
    float weightedDistanceSum = 0.0;
    float transmittanceSum = 0.0;
    int sampleCount = 0;

    for (int i = 0; i < 512; i++) {
        if (float(i) >= float(${i})) break;
        if (rayDistance > maxRayDistance) break;
        if (transmittanceIntegral <= u_minTransmittance) break;

        vec3 position = rayDistance * rayDirection + rayOrigin;
        float height = length(position) - u_bottomRadius;

        if (inEmptySpace(height)) {
            rayDistance += stepSize;
            continue;
        }

        vec2 uv = getGlobeUv(position);
        WeatherSample weather = sampleWeather(uv, height, mipLevel);
        if (!any(greaterThan(weather.density, vec4(u_minDensity)))) {
            rayDistance += stepSize;
            continue;
        }

        MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
        if (media.extinction > u_minExtinction) {
            extinctionSum += media.extinction;
            maxOpticalDepth += media.extinction * stepSize;
            transmittanceIntegral *= exp(-media.extinction * stepSize);
            weightedDistanceSum += rayDistance * transmittanceIntegral;
            transmittanceSum += transmittanceIntegral;
            sampleCount++;
        }

        if (transmittanceIntegral <= u_minTransmittance) {
            maxOpticalDepthTail = min(u_opticalDepthTailScale * stepSize * exp(float(1 - sampleCount)), stepSize * 0.5);
            break;
        }
        rayDistance += stepSize;
    }

    if (sampleCount == 0) {
        return vec4(maxRayDistance, 0.0, 0.0, 0.0);
    }
    float frontDepth = min(weightedDistanceSum / transmittanceSum, maxRayDistance);
    float meanExtinction = extinctionSum / float(sampleCount);
    return vec4(frontDepth, meanExtinction, maxOpticalDepth, maxOpticalDepthTail);
}

void main() {
    if (u_debugShadow == 1) {
        // 强制输出：用于验证 ShadowPass 是否在写入颜色附件
        out_color = vec4(0.0, 0.0, 1.0, 1.0);
        out_depthVelocity = vec4(0.0);
        return;
    }
    if (u_debugShadow == 2) {
        // 直接显示天气纹理采样（验证 u_weatherTexture 是否绑定/是否全 0）
        vec4 w = texture(u_weatherTexture, v_uv * 4.0);
        out_color = vec4(w.rgb, 1.0);
        out_depthVelocity = vec4(0.0);
        return;
    }
    if (u_debugShadow == 9) {
        // shapeTexture: sanity for 3D texture binding
        float s = texture(u_shapeTexture, vec3(v_uv, 0.5)).r;
        out_color = vec4(vec3(s), 1.0);
        out_depthVelocity = vec4(0.0);
        return;
    }
    if (u_debugShadow == 10) {
        // shapeDetailTexture: sanity for 3D texture binding
        float s = texture(u_shapeDetailTexture, vec3(v_uv, 0.5)).r;
        out_color = vec4(vec3(s), 1.0);
        out_depthVelocity = vec4(0.0);
        return;
    }
    if (u_debugShadow == 4 || u_debugShadow == 5 || u_debugShadow == 6 || u_debugShadow == 7 || u_debugShadow == 8) {
        vec2 clip = v_uv * 2.0 - 1.0;
        vec4 point = u_inverseSunViewProj * vec4(clip.xy, -1.0, 1.0);
        point /= point.w;
        vec3 sunPosition = point.xyz + u_altitudeCorrection;

        vec3 rayDirection = normalize(u_sunDirection);
        float rayNear, rayFar;
        getRayNearFar(sunPosition, rayDirection, rayNear, rayFar);
        vec3 rayOrigin = rayNear * rayDirection + sunPosition;
        float maxRayDist = min(rayFar - rayNear, ${e.toFixed(1)});
        float stbn = getBlueNoise();

        if (u_debugShadow == 7) {
            // Ray sanity: R=rayNear/max, G=rayFar/max, B=maxRayDist/max
            float m = max(${e.toFixed(1)}, 1.0);
            out_color = vec4(
                clamp(rayNear / m, 0.0, 1.0),
                clamp(rayFar / m, 0.0, 1.0),
                clamp(maxRayDist / m, 0.0, 1.0),
                1.0
            );
            out_depthVelocity = vec4(0.0);
            return;
        }
        if (u_debugShadow == 8) {
            // sunPosition sanity
            float lenN = clamp(length(sunPosition) / (u_bottomRadius + max(u_shadowTopHeight, 1.0)), 0.0, 1.0);
            out_color = vec4(vec3(lenN), 1.0);
            out_depthVelocity = vec4(0.0);
            return;
        }

        // March-lite diagnostics (no need for full BSM output)
        vec3 normal = getStructureNormal(rayDirection, stbn);
        float rayDistance, stepSize;
        float samplePeriod = clamp(max(maxRayDist, 0.0) / float(${i}), ${t.toFixed(1)}, ${a.toFixed(1)});
        intersectStructuredPlanes(normal, rayOrigin, rayDirection, samplePeriod, rayDistance, stepSize);
        rayDistance -= stepSize * stbn;

        float maxDensitySum = 0.0;
        float maxExtinction = 0.0;
        int emptySkipped = 0;
        int iter = 0;
        for (int i = 0; i < 512; i++) {
            if (float(i) >= float(${i})) break;
            if (rayDistance > maxRayDist) break;
            iter++;
            vec3 position = rayDistance * rayDirection + rayOrigin;
            float height = length(position) - u_bottomRadius;
            if (inEmptySpace(height)) {
                emptySkipped++;
                rayDistance += stepSize;
                continue;
            }
            vec2 uv = getGlobeUv(position);
            WeatherSample weather = sampleWeather(uv, height, 0.0);
            if (!any(greaterThan(weather.density, vec4(u_minDensity)))) {
                rayDistance += stepSize;
                continue;
            }
            MediaSample media = sampleMedia(weather, position, uv, 0.0, stbn);
            maxDensitySum = max(maxDensitySum, media.density);
            maxExtinction = max(maxExtinction, media.extinction);
            rayDistance += stepSize;
        }

        float outV = 0.0;
        if (u_debugShadow == 4) {
            // max density
            outV = 1.0 - exp(-maxDensitySum * 2.0);
        } else if (u_debugShadow == 5) {
            // max extinction
            outV = 1.0 - exp(-maxExtinction * 0.5);
        } else {
            // empty ratio (u_debugShadow == 6)
            outV = (iter > 0) ? (float(emptySkipped) / float(iter)) : 0.0;
        }
        out_color = vec4(vec3(clamp(outV, 0.0, 1.0)), 1.0);
        out_depthVelocity = vec4(0.0);
        return;
    }
    vec2 clip = v_uv * 2.0 - 1.0;
    vec4 point = u_inverseSunViewProj * vec4(clip.xy, -1.0, 1.0);
    point /= point.w;
    vec3 sunPosition = point.xyz + u_altitudeCorrection;

    vec3 rayDirection = normalize(u_sunDirection);
    float rayNear, rayFar;
    getRayNearFar(sunPosition, rayDirection, rayNear, rayFar);

    vec3 rayOrigin = rayNear * rayDirection + sunPosition;
    float maxRayDist = min(rayFar - rayNear, ${e.toFixed(1)});
    float stbn = getBlueNoise();
    float mipLevel = 0.0;

    vec4 color = marchClouds(rayOrigin, rayDirection, maxRayDist, stbn, mipLevel);
    if (u_debugShadow == 3) {
        // 显示本像素是否采到云（sampleCount>0 时 meanExtinction>0）
        float hit = (color.y > 0.0) ? 1.0 : 0.0;
        out_color = vec4(hit, hit, hit, 1.0);
        out_depthVelocity = vec4(0.0);
        return;
    }
    out_color = color;

    // Velocity for temporal resolve (three-geospatial shadow.frag TEMPORAL_PASS)
    vec2 atlasUv = v_uv * u_atlasScale + u_atlasOffset;
    vec3 frontPosition = color.x * rayDirection + rayOrigin;
    // frontPosition 含 altitudeCorrection（Bruneton 球系）；reprojection 用世界坐标，需减回偏移。
    // 对齐 three-geospatial shadow.frag: ecefToWorldMatrix * (frontPosition - altitudeCorrection)
    vec4 prevClip = u_reprojectionMatrix * vec4(frontPosition - u_altitudeCorrection, 1.0);
    prevClip /= prevClip.w;
    vec2 prevUv = prevClip.xy * 0.5 + 0.5;
    vec2 prevAtlasUv = prevUv * u_atlasScale + u_atlasOffset;
    vec2 velocity = (atlasUv - prevAtlasUv) * u_atlasResolution;
    out_depthVelocity = vec4(color.x, velocity.x, velocity.y, 0.0);
}
`}const x=ve(),xe=1024,ne=5e5,M=4;class be{constructor(e,i={}){this.viewer=e,this.size=i.size??xe,this.textures=i.textures||{},this.params=i.params||{},this._gl=null,this._fbo=null,this._colorTexture=null,this._depthVelocityTexture=null,this._program=null,this._vao=null,this._colorTextureTarget=null,this._tileSize=Math.floor(this.size/2),this._shadowNear=.1,this._shadowFar=0,this._shadowIntervals=Array.from({length:M},()=>new Float32Array([0,0])),this._shadowMatrices=Array.from({length:M},()=>new Float32Array(16)),this._inverseShadowMatrices=Array.from({length:M},()=>new Float32Array(16)),this._prevShadowMatrices=Array.from({length:M},()=>{const t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t}),this._sunDirection=[1,0,0],this._preRenderListener=null}updateDynamicParams(e){e.localWeatherOffset&&(this.params.localWeatherOffset=e.localWeatherOffset),e.shapeOffset&&(this.params.shapeOffset=e.shapeOffset),e.shapeDetailOffset&&(this.params.shapeDetailOffset=e.shapeDetailOffset),e.bottomRadius!==void 0&&(this.params.bottomRadius=e.bottomRadius),e.debugShadow!==void 0&&(this.params.debugShadow=e.debugShadow),e.shadowFar!==void 0&&(this.params.shadowFar=e.shadowFar),e.maxShadowLengthRayDistance!==void 0&&(this.params.maxShadowLengthRayDistance=e.maxShadowLengthRayDistance),e.shadowSplitLambda!==void 0&&(this.params.shadowSplitLambda=e.shadowSplitLambda),e.shadowFadeScale!==void 0&&(this.params.shadowFadeScale=e.shadowFadeScale),e.coverages!==void 0&&(this.params.coverages=e.coverages),e.densityScales!==void 0&&(this.params.densityScales=e.densityScales),e.shapeAmounts!==void 0&&(this.params.shapeAmounts=e.shapeAmounts),e.shapeDetailAmounts!==void 0&&(this.params.shapeDetailAmounts=e.shapeDetailAmounts),e.weatherExponents!==void 0&&(this.params.weatherExponents=e.weatherExponents),e.shapeAlteringBiases!==void 0&&(this.params.shapeAlteringBiases=e.shapeAlteringBiases),e.coverageFilterWidths!==void 0&&(this.params.coverageFilterWidths=e.coverageFilterWidths),e.scatteringCoefficient!==void 0&&(this.params.scatteringCoefficient=e.scatteringCoefficient),e.absorptionCoefficient!==void 0&&(this.params.absorptionCoefficient=e.absorptionCoefficient)}createRT(){const e=this.viewer.scene.context,i=e._gl;if(!i)return;this._cesiumColorTexture&&this._cesiumColorTexture.destroy(),this._cesiumDepthTexture&&this._cesiumDepthTexture.destroy(),this._fbo&&(i.deleteFramebuffer(this._fbo),this._fbo=null);const t={context:e,width:this.size,height:this.size,pixelFormat:x.PixelFormat.RGBA,pixelDatatype:x.PixelDatatype.HALF_FLOAT,sampler:new x.Sampler({minificationFilter:x.TextureMinificationFilter.LINEAR,magnificationFilter:x.TextureMagnificationFilter.LINEAR,wrapS:x.TextureWrap.CLAMP_TO_EDGE,wrapT:x.TextureWrap.CLAMP_TO_EDGE})};try{this._cesiumColorTexture=new x.Texture(t),this._cesiumDepthTexture=new x.Texture(t),this._useFloatRT=!0}catch{t.pixelDatatype=x.PixelDatatype.UNSIGNED_BYTE,this._cesiumColorTexture=new x.Texture(t),this._cesiumDepthTexture=new x.Texture(t),this._useFloatRT=!1}this._colorTexture=this._cesiumColorTexture._texture,this._depthVelocityTexture=this._cesiumDepthTexture._texture,this._colorTextureTarget=this._cesiumColorTexture._target;const a=i.createFramebuffer();i.bindFramebuffer(i.FRAMEBUFFER,a),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this._colorTexture,0),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT1,i.TEXTURE_2D,this._depthVelocityTexture,0),i.drawBuffers([i.COLOR_ATTACHMENT0,i.COLOR_ATTACHMENT1]),this._fboComplete=i.checkFramebufferStatus(i.FRAMEBUFFER)===i.FRAMEBUFFER_COMPLETE,this._fboComplete,i.bindFramebuffer(i.FRAMEBUFFER,null),this._fbo=a}updateShadowCascades(){const e=this.viewer.scene,i=e.camera,t=e.context&&e.context.uniformState,a=t&&(t.sunDirectionWC||t._sunDirectionWC)||null,n=u=>!!u&&Number.isFinite(u.x)&&Number.isFinite(u.y)&&Number.isFinite(u.z)&&u.x*u.x+u.y*u.y+u.z*u.z>1e-12;let f=null;n(a)?f=a:n(i.positionWC)?f=i.positionWC:n(i.directionWC)?f=i.directionWC:f=new x.Cartesian3(1,0,0);const o=x.Cartesian3.normalize(f,new x.Cartesian3);this._sunDirection=[o.x,o.y,o.z];const h=i.frustum,c=Number(h==null?void 0:h.near)||.1,y=Number(h==null?void 0:h.far)||Number(this.params.maxShadowLengthRayDistance)||ne,R=Number(this.params.shadowFar)||Number(this.params.maxShadowLengthRayDistance)||y;let r=Math.min(y,R);(!Number.isFinite(r)||r<=c+.001)&&(r=c+1),this._shadowNear=c,this._shadowFar=r;const b=Number(this.params.shadowSplitLambda),_=Number.isFinite(b)?b:.5,s=new Array(M),S=Math.max(r-c,1e-6);for(let u=0;u<M;u++){const z=(u+1)/M,H=c+(r-c)*z,$=c*Math.pow(r/c,z),W=H+($-H)*_;s[u]=(W-c)/S}let v=!0,g=0;for(let u=0;u<M;u++){const z=s[u];if(!Number.isFinite(z)||z<=g||z<=0||z>1){v=!1;break}g=z}v||(s[0]=.25,s[1]=.5,s[2]=.75,s[3]=1);for(let u=0;u<M;u++){const z=s[u-1]??0,H=s[u]??0;this._shadowIntervals[u][0]=z,this._shadowIntervals[u][1]=H}try{window.__bsmShadowIntervals=this._shadowIntervals.map(u=>[u[0],u[1]]),window.__bsmShadowFar=this._shadowFar}catch{}const w=this._lookAt([0,0,0],[-o.x,-o.y,-o.z],[0,0,1]),T=new Float32Array(16);this._invert(T,w);const C=x.Matrix4.clone(i.inverseViewMatrix,new x.Matrix4),D=new Float32Array(16);x.Matrix4.toArray(C,D);const A=new Float32Array(16);this._multiply(A,T,D);const L=Number(h==null?void 0:h.fovy)||Math.PI/3,N=Number(h==null?void 0:h.aspectRatio)||e.canvas.clientWidth/Math.max(1,e.canvas.clientHeight),m=Math.tan(L*.5),l=m*c,p=l*N,F=m*r,E=F*N,d=[[p,l,-c,1],[p,-l,-c,1],[-p,-l,-c,1],[-p,l,-c,1]],O=[[E,F,-r,1],[E,-F,-r,1],[-E,-F,-r,1],[-E,F,-r,1]],B=Number(this.params.shadowCascadeMargin)||0,U={width:this._tileSize,height:this._tileSize},Y=((Number(this.params.bottomRadius)||6371e3)+(Number(this.params.cloudBottomHeight)||3e3)+(Number(this.params.cloudTopHeight)||1500))*3;for(let u=0;u<M;u++){const z=s[u-1]??0,H=s[u],$=u===0?d:d.map((V,P)=>this._lerp4(d[P],O[P],z)),W=u===M-1?O:d.map((V,P)=>this._lerp4(d[P],O[P],H)),ce=this._dist3(W[0],W[2]),ue=this._dist3(W[0],$[2]);let K=Math.max(ce,ue);const J=Number(this.params.shadowFadeScale),le=Number.isFinite(J)?J:1,he=Math.abs(W[0][2]),Q=r-c>1e-6?he/(r-c):0;K+=le*.25*Q*Q*(r-c);const G=.5*K,ee=-G,te=G,ie=G,ae=-G,me=this._ortho(ee,te,ae,ie,-B,G*2+B),I={min:[1e30,1e30,1e30],max:[-1e30,-1e30,-1e30]};for(let V=0;V<4;V++){const P=this._mulMat4Vec4(A,$[V]),_e=this._mulMat4Vec4(A,W[V]);this._expandBBox(I,P),this._expandBBox(I,_e)}const q=[(I.min[0]+I.max[0])*.5,(I.min[1]+I.max[1])*.5,I.max[2]+B,1],re=(te-ee)/U.width,oe=(ie-ae)/U.height;q[0]=Math.round(q[0]/re)*re,q[1]=Math.round(q[1]/oe)*oe;const Z=this._mulMat4Vec4(w,q),X=[Z[0],Z[1],Z[2]],fe=[X[0]+o.x*Y,X[1]+o.y*Y,X[2]+o.z*Y],pe=this._lookAt(fe,X,[0,0,1]),se=this._shadowMatrices[u],de=this._inverseShadowMatrices[u];this._multiply(se,me,pe),this._invert(de,se)}}_getAltitudeCorrectionOffset(e){var c,y,R,r,b;const i=(R=(y=(c=this.viewer)==null?void 0:c.scene)==null?void 0:y.globe)==null?void 0:R.ellipsoid,t=(b=(r=this.viewer)==null?void 0:r.camera)==null?void 0:b.positionWC;if(!i||!t)return[0,0,0];const a=x.Cartographic.fromCartesian(t,i);if(!a)return[0,0,0];const n=x.Cartesian3.fromRadians(a.longitude,a.latitude,0,i),f=i.geodeticSurfaceNormal(n,new x.Cartesian3),o=x.Cartesian3.subtract(n,x.Cartesian3.multiplyByScalar(f,Number(e)||0,new x.Cartesian3),new x.Cartesian3),h=x.Cartesian3.negate(o,new x.Cartesian3);return[h.x,h.y,h.z]}_lerp4(e,i,t){return[e[0]+(i[0]-e[0])*t,e[1]+(i[1]-e[1])*t,e[2]+(i[2]-e[2])*t,1]}_dist3(e,i){const t=e[0]-i[0],a=e[1]-i[1],n=e[2]-i[2];return Math.sqrt(t*t+a*a+n*n)}_mulMat4Vec4(e,i){const t=i[0],a=i[1],n=i[2],f=i[3]??1;return[e[0]*t+e[4]*a+e[8]*n+e[12]*f,e[1]*t+e[5]*a+e[9]*n+e[13]*f,e[2]*t+e[6]*a+e[10]*n+e[14]*f,e[3]*t+e[7]*a+e[11]*n+e[15]*f]}_expandBBox(e,i){const t=i[0],a=i[1],n=i[2];e.min[0]=Math.min(e.min[0],t),e.min[1]=Math.min(e.min[1],a),e.min[2]=Math.min(e.min[2],n),e.max[0]=Math.max(e.max[0],t),e.max[1]=Math.max(e.max[1],a),e.max[2]=Math.max(e.max[2],n)}_lookAt(e,i,t){const a=new Float32Array(16),n=e[0],f=e[1],o=e[2],h=t[0],c=t[1],y=t[2],R=i[0],r=i[1],b=i[2];if(Math.abs(n-R)<1e-6&&Math.abs(f-r)<1e-6&&Math.abs(o-b)<1e-6)return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a;let _=n-R,s=f-r,S=o-b,v=1/Math.sqrt(_*_+s*s+S*S);_*=v,s*=v,S*=v;let g=c*S-y*s,w=y*_-h*S,T=h*s-c*_;v=Math.sqrt(g*g+w*w+T*T),v>0&&(v=1/v,g*=v,w*=v,T*=v);const C=s*T-S*w,D=S*g-_*T,A=_*w-s*g;return a[0]=g,a[1]=C,a[2]=_,a[3]=0,a[4]=w,a[5]=D,a[6]=s,a[7]=0,a[8]=T,a[9]=A,a[10]=S,a[11]=0,a[12]=-(g*n+w*f+T*o),a[13]=-(C*n+D*f+A*o),a[14]=-(_*n+s*f+S*o),a[15]=1,a}_ortho(e,i,t,a,n,f){const o=new Float32Array(16),h=1/(e-i),c=1/(t-a),y=1/(n-f);return o[0]=-2*h,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=-2*c,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=2*y,o[11]=0,o[12]=(e+i)*h,o[13]=(a+t)*c,o[14]=(f+n)*y,o[15]=1,o}_multiply(e,i,t){const a=i[0],n=i[1],f=i[2],o=i[3],h=i[4],c=i[5],y=i[6],R=i[7],r=i[8],b=i[9],_=i[10],s=i[11],S=i[12],v=i[13],g=i[14],w=i[15],T=t[0],C=t[1],D=t[2],A=t[3],L=t[4],N=t[5],m=t[6],l=t[7],p=t[8],F=t[9],E=t[10],d=t[11],O=t[12],B=t[13],U=t[14],j=t[15];e[0]=a*T+h*C+r*D+S*A,e[1]=n*T+c*C+b*D+v*A,e[2]=f*T+y*C+_*D+g*A,e[3]=o*T+R*C+s*D+w*A,e[4]=a*L+h*N+r*m+S*l,e[5]=n*L+c*N+b*m+v*l,e[6]=f*L+y*N+_*m+g*l,e[7]=o*L+R*N+s*m+w*l,e[8]=a*p+h*F+r*E+S*d,e[9]=n*p+c*F+b*E+v*d,e[10]=f*p+y*F+_*E+g*d,e[11]=o*p+R*F+s*E+w*d,e[12]=a*O+h*B+r*U+S*j,e[13]=n*O+c*B+b*U+v*j,e[14]=f*O+y*B+_*U+g*j,e[15]=o*O+R*B+s*U+w*j}_invert(e,i){const t=i[0],a=i[4],n=i[8],f=i[12],o=i[1],h=i[5],c=i[9],y=i[13],R=i[2],r=i[6],b=i[10],_=i[14],s=i[3],S=i[7],v=i[11],g=i[15],w=t*h-a*o,T=t*c-n*o,C=t*y-f*o,D=a*c-n*h,A=a*y-f*h,L=n*y-f*c,N=R*S-r*s,m=R*v-b*s,l=R*g-_*s,p=r*v-b*S,F=r*g-_*S,E=b*g-_*v;let d=w*E-T*F+C*p+D*l-A*m+L*N;d&&(d=1/d,e[0]=(h*E-c*F+y*p)*d,e[4]=(n*F-a*E-f*p)*d,e[8]=(S*L-v*A+g*D)*d,e[12]=(b*A-r*L-_*D)*d,e[1]=(c*l-o*E-y*m)*d,e[5]=(t*E-n*l+f*m)*d,e[9]=(v*C-s*L-g*T)*d,e[13]=(R*L-b*C+_*T)*d,e[2]=(o*F-h*l+y*N)*d,e[6]=(a*l-t*F-f*N)*d,e[10]=(s*A-S*C+g*w)*d,e[14]=(r*C-R*A-_*w)*d,e[3]=(h*m-o*p-c*N)*d,e[7]=(t*p-a*m+n*N)*d,e[11]=(S*T-s*D-v*w)*d,e[15]=(R*D-r*T+b*w)*d)}getVertexShader(){return`#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}`}getFragmentShader(){const e={SHADOW_RAY_FAR:Number(this.params.maxShadowLengthRayDistance)||ne,maxSteps:Math.min(Number(this.params.maxSteps)||500,512),minStepSize:Number(this.params.minStepSize)||50,maxStepSize:Number(this.params.maxStepSize)||1e3};return ge(e)}createProgram(){const e=this._gl,i=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(i,this.getVertexShader()),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){e.deleteShader(i);return}const t=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(t,this.getFragmentShader()),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS)){e.deleteShader(i),e.deleteShader(t);return}const a=e.createProgram();if(e.attachShader(a,i),e.attachShader(a,t),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){e.deleteProgram(a),e.deleteShader(i),e.deleteShader(t);return}e.deleteShader(i),e.deleteShader(t),this._program=a}render(){var L,N;const t=this.viewer.scene.context._gl;if(!t||!this._fbo||!this._program||!this._fboComplete)return;this._gl=t,this.updateShadowCascades();const a=t.getParameter(t.FRAMEBUFFER_BINDING),n=t.getParameter(t.VIEWPORT),f=t.isEnabled(t.BLEND),o=t.isEnabled(t.DEPTH_TEST),h=t.isEnabled(t.CULL_FACE);if(t.disable(t.BLEND),t.disable(t.DEPTH_TEST),t.disable(t.CULL_FACE),t.bindFramebuffer(t.FRAMEBUFFER,this._fbo),t.getParameter(t.FRAMEBUFFER_BINDING)!==this._fbo)return;t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(this._program);const c=t.getUniformLocation(this._program,"u_sunDirection");c&&t.uniform3f(c,-this._sunDirection[0],-this._sunDirection[1],-this._sunDirection[2]);const y=Number(this.params.bottomRadius)||6371e3,R=performance.now()/1e3-(this.params.startTime||0),r=(m,l)=>{const p=t.getUniformLocation(this._program,m);p!==null&&t.uniform1f(p,l)},b=(m,l,p)=>{const F=t.getUniformLocation(this._program,m);F!==null&&t.uniform2f(F,l,p)},_=(m,l)=>{const p=t.getUniformLocation(this._program,m);p!==null&&t.uniform3fv(p,l)},s=(m,l)=>{const p=t.getUniformLocation(this._program,m);p!==null&&t.uniform4fv(p,l)},S=(m,l)=>{const p=t.getUniformLocation(this._program,m);p!==null&&t.uniform1i(p,l)};b("u_resolution",this._tileSize,this._tileSize),b("u_atlasResolution",this.size,this.size),r("u_atlasScale",.5),r("u_bottomRadius",y),_("u_altitudeCorrection",this._getAltitudeCorrectionOffset(y)),r("u_shadowTopHeight",Number(this.params.shadowTopHeight)??(Number(this.params.cloudBottomHeight)||3e3)+(Number(this.params.cloudTopHeight)||1500)),r("u_shadowBottomHeight",Number(this.params.shadowBottomHeight)??(Number(this.params.cloudBottomHeight)||3e3)),r("u_weatherRepeat",Number(this.params.weatherRepeat)||100),b("u_localWeatherOffset",Number((L=this.params.localWeatherOffset)==null?void 0:L[0])||0,Number((N=this.params.localWeatherOffset)==null?void 0:N[1])||0),r("u_shapeRepeat",Number(this.params.shapeRepeat)||8e-4),r("u_shapeDetailRepeat",Number(this.params.shapeDetailRepeat)||.006),_("u_shapeOffset",this.params.shapeOffset||[0,0,0]),_("u_shapeDetailOffset",this.params.shapeDetailOffset||[0,0,0]),r("u_turbulenceRepeat",Number(this.params.turbulenceRepeat)||2),r("u_turbulenceDisplacement",Number(this.params.turbulenceDisplacement)||400),s("u_minLayerHeights",this.params.minLayerHeights||[0,0,0,0]),s("u_maxLayerHeights",this.params.maxLayerHeights||[0,0,0,0]),_("u_minIntervalHeights",this.params.minIntervalHeights||[0,0,0]),_("u_maxIntervalHeights",this.params.maxIntervalHeights||[0,0,0]),s("u_densityProfileExpTerms",this.params.densityProfileExpTerms||[0,0,0,0]),s("u_densityProfileExponents",this.params.densityProfileExponents||[0,0,0,0]),s("u_densityProfileLinearTerms",this.params.densityProfileLinear||[.75,.75,.75,.75]),s("u_densityProfileConstantTerms",this.params.densityProfileConstant||[.25,.25,.25,.25]),s("u_densityScales",this.params.densityScales||[0,0,0,0]),s("u_shapeAmounts",this.params.shapeAmounts||[1,1,1,1]),s("u_shapeDetailAmounts",this.params.shapeDetailAmounts||[1,1,1,1]),s("u_weatherExponents",this.params.weatherExponents||[1,1,1,1]),s("u_shapeAlteringBiases",this.params.shapeAlteringBiases||[.35,.35,.35,.35]),s("u_coverageFilterWidths",this.params.coverageFilterWidths||[.6,.6,.6,.6]),s("u_coverages",this.params.coverages||[.3,.3,.3,.3]),r("u_scatteringCoefficient",Number(this.params.scatteringCoefficient)??.9),r("u_absorptionCoefficient",Number(this.params.absorptionCoefficient)??1),r("u_time",R),r("u_evolutionSpeed",Number(this.params.evolutionSpeed)||.005),r("u_minDensity",Number(this.params.minDensity)??1e-5),r("u_minExtinction",Number(this.params.minExtinction)??1e-5),r("u_minTransmittance",Number(this.params.minTransmittance)??.01),r("u_opticalDepthTailScale",Number(this.params.opticalDepthTailScale)??1),S("u_debugShadow",Number(this.params.debugShadow)||0);let v=0;const g=(m,l,p)=>{const F=t.getUniformLocation(this._program,m);if(F!==null){if(t.uniform1i(F,v),l&&(l._texture!==void 0||p===t.TEXTURE_3D&&l)){t.activeTexture(t.TEXTURE0+v);const E=typeof l._texture<"u"?l._texture:l;t.bindTexture(p,E)}v++}};g("u_weatherTexture",this.textures.weather,t.TEXTURE_2D),g("u_turbulenceTexture",this.textures.turbulence,t.TEXTURE_2D),g("u_blueNoise",this.textures.blueNoise,t.TEXTURE_2D),g("u_shapeTexture",this.textures.shape,t.TEXTURE_3D),g("u_shapeDetailTexture",this.textures.shapeDetail,t.TEXTURE_3D);const w=t.getUniformLocation(this._program,"u_inverseSunViewProj"),T=t.getUniformLocation(this._program,"u_reprojectionMatrix"),C=t.getUniformLocation(this._program,"u_atlasOffset"),D=t.getAttribLocation(this._program,"a_position");D>=0&&this._vbo&&(t.bindBuffer(t.ARRAY_BUFFER,this._vbo),t.enableVertexAttribArray(D),t.vertexAttribPointer(D,2,t.FLOAT,!1,0,0));const A=[{x:0,y:this._tileSize},{x:this._tileSize,y:this._tileSize},{x:0,y:0},{x:this._tileSize,y:0}];for(let m=0;m<M;m++){const l=A[m];t.viewport(l.x,l.y,this._tileSize,this._tileSize),w&&t.uniformMatrix4fv(w,!1,this._inverseShadowMatrices[m]),T&&t.uniformMatrix4fv(T,!1,this._prevShadowMatrices[m]),C&&t.uniform2f(C,l.x/this.size,l.y/this.size),t.drawArrays(t.TRIANGLES,0,3)}for(let m=0;m<M;m++)this._prevShadowMatrices[m].set(this._shadowMatrices[m]);D>=0&&t.disableVertexAttribArray(D),t.bindFramebuffer(t.FRAMEBUFFER,a),t.viewport(n[0],n[1],n[2],n[3]),f&&t.enable(t.BLEND),o&&t.enable(t.DEPTH_TEST),h&&t.enable(t.CULL_FACE)}getTexture(){return this._cesiumColorTexture}getDepthVelocityTexture(){return this._cesiumDepthTexture}getShadowMatrices(){return this._shadowMatrices}getShadowIntervals(){return this._shadowIntervals}getShadowFar(){return this._shadowFar}getShadowNear(){return this._shadowNear}getTileSize(){return this._tileSize}init(){const e=this.viewer.scene,i=e.context._gl;if(!i)return;this._gl=i,this.createRT(),this.createProgram();const t=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,t),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,null),this._vbo=t,this._preRenderListener=e.preRender.addEventListener(()=>this.render())}destroy(){this._preRenderListener&&(this._preRenderListener(),this._preRenderListener=null);const e=this._gl;e&&(this._program&&e.deleteProgram(this._program),this._colorTexture&&e.deleteTexture(this._colorTexture),this._depthVelocityTexture&&e.deleteTexture(this._depthVelocityTexture),this._fbo&&e.deleteFramebuffer(this._fbo),this._vbo&&e.deleteBuffer(this._vbo)),this._program=null,this._colorTexture=null,this._depthVelocityTexture=null,this._fbo=null,this._vbo=null,this._gl=null}}export{be as CloudShadowPass};
