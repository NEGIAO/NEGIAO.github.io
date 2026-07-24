import{g as ve}from"./getCesium-6L1FaWum.js";function xe(k){const e=Number(k.SHADOW_RAY_FAR)||5e5,t=Math.min(Number(k.maxSteps)||500,512),r=Number(k.minStepSize)||50,a=Number(k.maxStepSize)||1e3;return`#version 300 es
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
    float samplePeriod = clamp(maxRayDistance / float(${t}), ${r.toFixed(1)}, ${a.toFixed(1)});
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
        if (float(i) >= float(${t})) break;
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
        float samplePeriod = clamp(max(maxRayDist, 0.0) / float(${t}), ${r.toFixed(1)}, ${a.toFixed(1)});
        intersectStructuredPlanes(normal, rayOrigin, rayDirection, samplePeriod, rayDistance, stepSize);
        rayDistance -= stepSize * stbn;

        float maxDensitySum = 0.0;
        float maxExtinction = 0.0;
        int emptySkipped = 0;
        int iter = 0;
        for (int i = 0; i < 512; i++) {
            if (float(i) >= float(${t})) break;
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
`}const g=ve(),ge=1024,ne=5e5,O=4;class Se{constructor(e,t={}){this.viewer=e,this.size=t.size??ge,this.textures=t.textures||{},this.params=t.params||{},this.updateInterval=Math.max(1,Number(t.updateInterval??this.params.bsmUpdateInterval)||1),this.enabled=t.enabled!==!1,this._renderFrame=0,this._hasRendered=!1,this._gl=null,this._fbo=null,this._colorTexture=null,this._depthVelocityTexture=null,this._program=null,this._vao=null,this._colorTextureTarget=null,this._tileSize=Math.floor(this.size/2),this._shadowNear=.1,this._shadowFar=0,this._shadowIntervals=Array.from({length:O},()=>new Float32Array([0,0])),this._shadowMatrices=Array.from({length:O},()=>new Float32Array(16)),this._inverseShadowMatrices=Array.from({length:O},()=>new Float32Array(16)),this._prevShadowMatrices=Array.from({length:O},()=>{const r=new Float32Array(16);return r[0]=r[5]=r[10]=r[15]=1,r}),this._sunDirection=[1,0,0],this._preRenderListener=null}updateDynamicParams(e){e.localWeatherOffset&&(this.params.localWeatherOffset=e.localWeatherOffset),e.shapeOffset&&(this.params.shapeOffset=e.shapeOffset),e.shapeDetailOffset&&(this.params.shapeDetailOffset=e.shapeDetailOffset),e.bottomRadius!==void 0&&(this.params.bottomRadius=e.bottomRadius),e.debugShadow!==void 0&&(this.params.debugShadow=e.debugShadow),e.shadowFar!==void 0&&(this.params.shadowFar=e.shadowFar),e.maxShadowLengthRayDistance!==void 0&&(this.params.maxShadowLengthRayDistance=e.maxShadowLengthRayDistance),e.shadowSplitLambda!==void 0&&(this.params.shadowSplitLambda=e.shadowSplitLambda),e.shadowFadeScale!==void 0&&(this.params.shadowFadeScale=e.shadowFadeScale),e.coverages!==void 0&&(this.params.coverages=e.coverages),e.densityScales!==void 0&&(this.params.densityScales=e.densityScales),e.shapeAmounts!==void 0&&(this.params.shapeAmounts=e.shapeAmounts),e.shapeDetailAmounts!==void 0&&(this.params.shapeDetailAmounts=e.shapeDetailAmounts),e.weatherExponents!==void 0&&(this.params.weatherExponents=e.weatherExponents),e.shapeAlteringBiases!==void 0&&(this.params.shapeAlteringBiases=e.shapeAlteringBiases),e.coverageFilterWidths!==void 0&&(this.params.coverageFilterWidths=e.coverageFilterWidths),e.scatteringCoefficient!==void 0&&(this.params.scatteringCoefficient=e.scatteringCoefficient),e.absorptionCoefficient!==void 0&&(this.params.absorptionCoefficient=e.absorptionCoefficient)}createRT(){const e=this.viewer.scene.context,t=e._gl;if(!t)return;this._cesiumColorTexture&&this._cesiumColorTexture.destroy(),this._cesiumDepthTexture&&this._cesiumDepthTexture.destroy(),this._fbo&&(t.deleteFramebuffer(this._fbo),this._fbo=null);const r={context:e,width:this.size,height:this.size,pixelFormat:g.PixelFormat.RGBA,pixelDatatype:g.PixelDatatype.HALF_FLOAT,sampler:new g.Sampler({minificationFilter:g.TextureMinificationFilter.LINEAR,magnificationFilter:g.TextureMagnificationFilter.LINEAR,wrapS:g.TextureWrap.CLAMP_TO_EDGE,wrapT:g.TextureWrap.CLAMP_TO_EDGE})};try{this._cesiumColorTexture=new g.Texture(r),this._cesiumDepthTexture=new g.Texture(r),this._useFloatRT=!0}catch{r.pixelDatatype=g.PixelDatatype.UNSIGNED_BYTE,this._cesiumColorTexture=new g.Texture(r),this._cesiumDepthTexture=new g.Texture(r),this._useFloatRT=!1}this._colorTexture=this._cesiumColorTexture._texture,this._depthVelocityTexture=this._cesiumDepthTexture._texture,this._colorTextureTarget=this._cesiumColorTexture._target;const a=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,a),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this._colorTexture,0),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT1,t.TEXTURE_2D,this._depthVelocityTexture,0),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),this._fboComplete=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE,this._fboComplete,t.bindFramebuffer(t.FRAMEBUFFER,null),this._fbo=a}updateShadowCascades(){const e=this.viewer.scene,t=e.camera,r=e.context&&e.context.uniformState,a=r&&(r.sunDirectionWC||r._sunDirectionWC)||null,i=h=>!!h&&Number.isFinite(h.x)&&Number.isFinite(h.y)&&Number.isFinite(h.z)&&h.x*h.x+h.y*h.y+h.z*h.z>1e-12;let m=null;i(a)?m=a:i(t.positionWC)?m=t.positionWC:i(t.directionWC)?m=t.directionWC:m=new g.Cartesian3(1,0,0);const s=g.Cartesian3.normalize(m,new g.Cartesian3);this._sunDirection=[s.x,s.y,s.z];const c=t.frustum,u=Number(c==null?void 0:c.near)||.1,b=Number(c==null?void 0:c.far)||Number(this.params.maxShadowLengthRayDistance)||ne,v=Number(this.params.shadowFar)||Number(this.params.maxShadowLengthRayDistance)||b;let p=Math.min(b,v);(!Number.isFinite(p)||p<=u+.001)&&(p=u+1),this._shadowNear=u,this._shadowFar=p;const w=Number(this.params.shadowSplitLambda),y=Number.isFinite(w)?w:.5,o=new Array(O),x=Math.max(p-u,1e-6);for(let h=0;h<O;h++){const z=(h+1)/O,U=u+(p-u)*z,$=u*Math.pow(p/u,z),P=U+($-U)*y;o[h]=(P-u)/x}let _=!0,d=0;for(let h=0;h<O;h++){const z=o[h];if(!Number.isFinite(z)||z<=d||z<=0||z>1){_=!1;break}d=z}_||(o[0]=.25,o[1]=.5,o[2]=.75,o[3]=1);for(let h=0;h<O;h++){const z=o[h-1]??0,U=o[h]??0;this._shadowIntervals[h][0]=z,this._shadowIntervals[h][1]=U}try{window.__bsmShadowIntervals=this._shadowIntervals.map(h=>[h[0],h[1]]),window.__bsmShadowFar=this._shadowFar}catch{}const T=this._lookAt([0,0,0],[-s.x,-s.y,-s.z],[0,0,1]),S=new Float32Array(16);this._invert(S,T);const D=g.Matrix4.clone(t.inverseViewMatrix,new g.Matrix4),R=new Float32Array(16);g.Matrix4.toArray(D,R);const F=new Float32Array(16);this._multiply(F,S,R);const N=Number(c==null?void 0:c.fovy)||Math.PI/3,A=Number(c==null?void 0:c.aspectRatio)||e.canvas.clientWidth/Math.max(1,e.canvas.clientHeight),M=Math.tan(N*.5),C=M*u,E=C*A,l=M*p,f=l*A,n=[[E,C,-u,1],[E,-C,-u,1],[-E,-C,-u,1],[-E,C,-u,1]],L=[[f,l,-p,1],[f,-l,-p,1],[-f,-l,-p,1],[-f,l,-p,1]],B=Number(this.params.shadowCascadeMargin)||0,I={width:this._tileSize,height:this._tileSize},Y=((Number(this.params.bottomRadius)||6371e3)+(Number(this.params.cloudBottomHeight)||3e3)+(Number(this.params.cloudTopHeight)||1500))*3;for(let h=0;h<O;h++){const z=o[h-1]??0,U=o[h],$=h===0?n:n.map((V,H)=>this._lerp4(n[H],L[H],z)),P=h===O-1?L:n.map((V,H)=>this._lerp4(n[H],L[H],U)),ce=this._dist3(P[0],P[2]),ue=this._dist3(P[0],$[2]);let K=Math.max(ce,ue);const J=Number(this.params.shadowFadeScale),le=Number.isFinite(J)?J:1,he=Math.abs(P[0][2]),Q=p-u>1e-6?he/(p-u):0;K+=le*.25*Q*Q*(p-u);const G=.5*K,ee=-G,te=G,ie=G,ae=-G,me=this._ortho(ee,te,ae,ie,-B,G*2+B),W={min:[1e30,1e30,1e30],max:[-1e30,-1e30,-1e30]};for(let V=0;V<4;V++){const H=this._mulMat4Vec4(F,$[V]),_e=this._mulMat4Vec4(F,P[V]);this._expandBBox(W,H),this._expandBBox(W,_e)}const q=[(W.min[0]+W.max[0])*.5,(W.min[1]+W.max[1])*.5,W.max[2]+B,1],re=(te-ee)/I.width,se=(ie-ae)/I.height;q[0]=Math.round(q[0]/re)*re,q[1]=Math.round(q[1]/se)*se;const Z=this._mulMat4Vec4(T,q),X=[Z[0],Z[1],Z[2]],fe=[X[0]+s.x*Y,X[1]+s.y*Y,X[2]+s.z*Y],pe=this._lookAt(fe,X,[0,0,1]),oe=this._shadowMatrices[h],de=this._inverseShadowMatrices[h];this._multiply(oe,me,pe),this._invert(de,oe)}}_getAltitudeCorrectionOffset(e){var u,b,v,p,w;const t=(v=(b=(u=this.viewer)==null?void 0:u.scene)==null?void 0:b.globe)==null?void 0:v.ellipsoid,r=(w=(p=this.viewer)==null?void 0:p.camera)==null?void 0:w.positionWC;if(!t||!r)return[0,0,0];const a=g.Cartographic.fromCartesian(r,t);if(!a)return[0,0,0];const i=g.Cartesian3.fromRadians(a.longitude,a.latitude,0,t),m=t.geodeticSurfaceNormal(i,new g.Cartesian3),s=g.Cartesian3.subtract(i,g.Cartesian3.multiplyByScalar(m,Number(e)||0,new g.Cartesian3),new g.Cartesian3),c=g.Cartesian3.negate(s,new g.Cartesian3);return[c.x,c.y,c.z]}_lerp4(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r,1]}_dist3(e,t){const r=e[0]-t[0],a=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(r*r+a*a+i*i)}_mulMat4Vec4(e,t){const r=t[0],a=t[1],i=t[2],m=t[3]??1;return[e[0]*r+e[4]*a+e[8]*i+e[12]*m,e[1]*r+e[5]*a+e[9]*i+e[13]*m,e[2]*r+e[6]*a+e[10]*i+e[14]*m,e[3]*r+e[7]*a+e[11]*i+e[15]*m]}_expandBBox(e,t){const r=t[0],a=t[1],i=t[2];e.min[0]=Math.min(e.min[0],r),e.min[1]=Math.min(e.min[1],a),e.min[2]=Math.min(e.min[2],i),e.max[0]=Math.max(e.max[0],r),e.max[1]=Math.max(e.max[1],a),e.max[2]=Math.max(e.max[2],i)}_lookAt(e,t,r){const a=new Float32Array(16),i=e[0],m=e[1],s=e[2],c=r[0],u=r[1],b=r[2],v=t[0],p=t[1],w=t[2];if(Math.abs(i-v)<1e-6&&Math.abs(m-p)<1e-6&&Math.abs(s-w)<1e-6)return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a;let y=i-v,o=m-p,x=s-w,_=1/Math.sqrt(y*y+o*o+x*x);y*=_,o*=_,x*=_;let d=u*x-b*o,T=b*y-c*x,S=c*o-u*y;_=Math.sqrt(d*d+T*T+S*S),_>0&&(_=1/_,d*=_,T*=_,S*=_);const D=o*S-x*T,R=x*d-y*S,F=y*T-o*d;return a[0]=d,a[1]=D,a[2]=y,a[3]=0,a[4]=T,a[5]=R,a[6]=o,a[7]=0,a[8]=S,a[9]=F,a[10]=x,a[11]=0,a[12]=-(d*i+T*m+S*s),a[13]=-(D*i+R*m+F*s),a[14]=-(y*i+o*m+x*s),a[15]=1,a}_ortho(e,t,r,a,i,m){const s=new Float32Array(16),c=1/(e-t),u=1/(r-a),b=1/(i-m);return s[0]=-2*c,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=-2*u,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2*b,s[11]=0,s[12]=(e+t)*c,s[13]=(a+r)*u,s[14]=(m+i)*b,s[15]=1,s}_multiply(e,t,r){const a=t[0],i=t[1],m=t[2],s=t[3],c=t[4],u=t[5],b=t[6],v=t[7],p=t[8],w=t[9],y=t[10],o=t[11],x=t[12],_=t[13],d=t[14],T=t[15],S=r[0],D=r[1],R=r[2],F=r[3],N=r[4],A=r[5],M=r[6],C=r[7],E=r[8],l=r[9],f=r[10],n=r[11],L=r[12],B=r[13],I=r[14],j=r[15];e[0]=a*S+c*D+p*R+x*F,e[1]=i*S+u*D+w*R+_*F,e[2]=m*S+b*D+y*R+d*F,e[3]=s*S+v*D+o*R+T*F,e[4]=a*N+c*A+p*M+x*C,e[5]=i*N+u*A+w*M+_*C,e[6]=m*N+b*A+y*M+d*C,e[7]=s*N+v*A+o*M+T*C,e[8]=a*E+c*l+p*f+x*n,e[9]=i*E+u*l+w*f+_*n,e[10]=m*E+b*l+y*f+d*n,e[11]=s*E+v*l+o*f+T*n,e[12]=a*L+c*B+p*I+x*j,e[13]=i*L+u*B+w*I+_*j,e[14]=m*L+b*B+y*I+d*j,e[15]=s*L+v*B+o*I+T*j}_invert(e,t){const r=t[0],a=t[4],i=t[8],m=t[12],s=t[1],c=t[5],u=t[9],b=t[13],v=t[2],p=t[6],w=t[10],y=t[14],o=t[3],x=t[7],_=t[11],d=t[15],T=r*c-a*s,S=r*u-i*s,D=r*b-m*s,R=a*u-i*c,F=a*b-m*c,N=i*b-m*u,A=v*x-p*o,M=v*_-w*o,C=v*d-y*o,E=p*_-w*x,l=p*d-y*x,f=w*d-y*_;let n=T*f-S*l+D*E+R*C-F*M+N*A;n&&(n=1/n,e[0]=(c*f-u*l+b*E)*n,e[4]=(i*l-a*f-m*E)*n,e[8]=(x*N-_*F+d*R)*n,e[12]=(w*F-p*N-y*R)*n,e[1]=(u*C-s*f-b*M)*n,e[5]=(r*f-i*C+m*M)*n,e[9]=(_*D-o*N-d*S)*n,e[13]=(v*N-w*D+y*S)*n,e[2]=(s*l-c*C+b*A)*n,e[6]=(a*C-r*l-m*A)*n,e[10]=(o*F-x*D+d*T)*n,e[14]=(p*D-v*F-y*T)*n,e[3]=(c*M-s*E-u*A)*n,e[7]=(r*E-a*M+i*A)*n,e[11]=(x*S-o*R-_*T)*n,e[15]=(v*R-p*S+w*T)*n)}getVertexShader(){return`#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}`}getFragmentShader(){const e={SHADOW_RAY_FAR:Number(this.params.maxShadowLengthRayDistance)||ne,maxSteps:Math.min(Number(this.params.maxSteps)||500,512),minStepSize:Number(this.params.minStepSize)||50,maxStepSize:Number(this.params.maxStepSize)||1e3};return xe(e)}createProgram(){const e=this._gl,t=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(t,this.getVertexShader()),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS)){e.deleteShader(t);return}const r=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(r,this.getFragmentShader()),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){e.deleteShader(t),e.deleteShader(r);return}const a=e.createProgram();if(e.attachShader(a,t),e.attachShader(a,r),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){e.deleteProgram(a),e.deleteShader(t),e.deleteShader(r);return}e.deleteShader(t),e.deleteShader(r),this._program=a;const i=Object.create(null),m=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let s=0;s<m;s++){const c=e.getActiveUniform(a,s);c&&(i[c.name]=e.getUniformLocation(a,c.name))}this._locations=i,this._positionLoc=e.getAttribLocation(a,"a_position")}render(e=!1){var C,E;if(!this.enabled&&!e)return;const t=Math.max(1,Number(this.updateInterval||this.params.bsmUpdateInterval)||1);if(!e&&this._hasRendered&&t>1&&this._renderFrame++%t!==0)return;this._hasRendered=!0;const i=this.viewer.scene.context._gl;if(!i||!this._fbo||!this._program||!this._fboComplete)return;this._gl=i,this.updateShadowCascades();const m=i.getParameter(i.FRAMEBUFFER_BINDING),s=i.getParameter(i.VIEWPORT),c=i.isEnabled(i.BLEND),u=i.isEnabled(i.DEPTH_TEST),b=i.isEnabled(i.CULL_FACE);if(i.disable(i.BLEND),i.disable(i.DEPTH_TEST),i.disable(i.CULL_FACE),i.bindFramebuffer(i.FRAMEBUFFER,this._fbo),i.getParameter(i.FRAMEBUFFER_BINDING)!==this._fbo)return;i.drawBuffers([i.COLOR_ATTACHMENT0,i.COLOR_ATTACHMENT1]),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.useProgram(this._program);const v=this._locations||Object.create(null),p=v.u_sunDirection;p&&i.uniform3f(p,-this._sunDirection[0],-this._sunDirection[1],-this._sunDirection[2]);const w=Number(this.params.bottomRadius)||6371e3,y=performance.now()/1e3-(this.params.startTime||0),o=(l,f)=>{const n=v[l];n!=null&&i.uniform1f(n,f)},x=(l,f,n)=>{const L=v[l];L!=null&&i.uniform2f(L,f,n)},_=(l,f)=>{const n=v[l];n!=null&&i.uniform3fv(n,f)},d=(l,f)=>{const n=v[l];n!=null&&i.uniform4fv(n,f)},T=(l,f)=>{const n=v[l];n!=null&&i.uniform1i(n,f)};x("u_resolution",this._tileSize,this._tileSize),x("u_atlasResolution",this.size,this.size),o("u_atlasScale",.5),o("u_bottomRadius",w),_("u_altitudeCorrection",this._getAltitudeCorrectionOffset(w)),o("u_shadowTopHeight",Number(this.params.shadowTopHeight)??(Number(this.params.cloudBottomHeight)||3e3)+(Number(this.params.cloudTopHeight)||1500)),o("u_shadowBottomHeight",Number(this.params.shadowBottomHeight)??(Number(this.params.cloudBottomHeight)||3e3)),o("u_weatherRepeat",Number(this.params.weatherRepeat)||100),x("u_localWeatherOffset",Number((C=this.params.localWeatherOffset)==null?void 0:C[0])||0,Number((E=this.params.localWeatherOffset)==null?void 0:E[1])||0),o("u_shapeRepeat",Number(this.params.shapeRepeat)||8e-4),o("u_shapeDetailRepeat",Number(this.params.shapeDetailRepeat)||.006),_("u_shapeOffset",this.params.shapeOffset||[0,0,0]),_("u_shapeDetailOffset",this.params.shapeDetailOffset||[0,0,0]),o("u_turbulenceRepeat",Number(this.params.turbulenceRepeat)||2),o("u_turbulenceDisplacement",Number(this.params.turbulenceDisplacement)||400),d("u_minLayerHeights",this.params.minLayerHeights||[0,0,0,0]),d("u_maxLayerHeights",this.params.maxLayerHeights||[0,0,0,0]),_("u_minIntervalHeights",this.params.minIntervalHeights||[0,0,0]),_("u_maxIntervalHeights",this.params.maxIntervalHeights||[0,0,0]),d("u_densityProfileExpTerms",this.params.densityProfileExpTerms||[0,0,0,0]),d("u_densityProfileExponents",this.params.densityProfileExponents||[0,0,0,0]),d("u_densityProfileLinearTerms",this.params.densityProfileLinear||[.75,.75,.75,.75]),d("u_densityProfileConstantTerms",this.params.densityProfileConstant||[.25,.25,.25,.25]),d("u_densityScales",this.params.densityScales||[0,0,0,0]),d("u_shapeAmounts",this.params.shapeAmounts||[1,1,1,1]),d("u_shapeDetailAmounts",this.params.shapeDetailAmounts||[1,1,1,1]),d("u_weatherExponents",this.params.weatherExponents||[1,1,1,1]),d("u_shapeAlteringBiases",this.params.shapeAlteringBiases||[.35,.35,.35,.35]),d("u_coverageFilterWidths",this.params.coverageFilterWidths||[.6,.6,.6,.6]),d("u_coverages",this.params.coverages||[.3,.3,.3,.3]),o("u_scatteringCoefficient",Number(this.params.scatteringCoefficient)??.9),o("u_absorptionCoefficient",Number(this.params.absorptionCoefficient)??1),o("u_time",y),o("u_evolutionSpeed",Number(this.params.evolutionSpeed)||.005),o("u_minDensity",Number(this.params.minDensity)??1e-5),o("u_minExtinction",Number(this.params.minExtinction)??1e-5),o("u_minTransmittance",Number(this.params.minTransmittance)??.01),o("u_opticalDepthTailScale",Number(this.params.opticalDepthTailScale)??1),T("u_debugShadow",Number(this.params.debugShadow)||0);let S=0;const D=(l,f,n)=>{const L=v[l];if(L!=null){if(i.uniform1i(L,S),f&&(f._texture!==void 0||n===i.TEXTURE_3D&&f)){i.activeTexture(i.TEXTURE0+S);const B=typeof f._texture<"u"?f._texture:f;i.bindTexture(n,B)}S++}};D("u_weatherTexture",this.textures.weather,i.TEXTURE_2D),D("u_turbulenceTexture",this.textures.turbulence,i.TEXTURE_2D),D("u_blueNoise",this.textures.blueNoise,i.TEXTURE_2D),D("u_shapeTexture",this.textures.shape,i.TEXTURE_3D),D("u_shapeDetailTexture",this.textures.shapeDetail,i.TEXTURE_3D);const R=v.u_inverseSunViewProj,F=v.u_reprojectionMatrix,N=v.u_atlasOffset,A=this._positionLoc!=null?this._positionLoc:i.getAttribLocation(this._program,"a_position");A>=0&&this._vbo&&(i.bindBuffer(i.ARRAY_BUFFER,this._vbo),i.enableVertexAttribArray(A),i.vertexAttribPointer(A,2,i.FLOAT,!1,0,0));const M=[{x:0,y:this._tileSize},{x:this._tileSize,y:this._tileSize},{x:0,y:0},{x:this._tileSize,y:0}];for(let l=0;l<O;l++){const f=M[l];i.viewport(f.x,f.y,this._tileSize,this._tileSize),R&&i.uniformMatrix4fv(R,!1,this._inverseShadowMatrices[l]),F&&i.uniformMatrix4fv(F,!1,this._prevShadowMatrices[l]),N&&i.uniform2f(N,f.x/this.size,f.y/this.size),i.drawArrays(i.TRIANGLES,0,3)}for(let l=0;l<O;l++)this._prevShadowMatrices[l].set(this._shadowMatrices[l]);A>=0&&i.disableVertexAttribArray(A),i.bindFramebuffer(i.FRAMEBUFFER,m),i.viewport(s[0],s[1],s[2],s[3]),c&&i.enable(i.BLEND),u&&i.enable(i.DEPTH_TEST),b&&i.enable(i.CULL_FACE)}getTexture(){return this._cesiumColorTexture}getDepthVelocityTexture(){return this._cesiumDepthTexture}getShadowMatrices(){return this._shadowMatrices}getShadowIntervals(){return this._shadowIntervals}getShadowFar(){return this._shadowFar}getShadowNear(){return this._shadowNear}getTileSize(){return this._tileSize}init(){const e=this.viewer.scene,t=e.context._gl;if(!t)return;this._gl=t,this.createRT(),this.createProgram();const r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),this._vbo=r,this._preRenderListener=e.preRender.addEventListener(()=>this.render())}destroy(){this._preRenderListener&&(this._preRenderListener(),this._preRenderListener=null);const e=this._gl;e&&(this._program&&e.deleteProgram(this._program),this._colorTexture&&e.deleteTexture(this._colorTexture),this._depthVelocityTexture&&e.deleteTexture(this._depthVelocityTexture),this._fbo&&e.deleteFramebuffer(this._fbo),this._vbo&&e.deleteBuffer(this._vbo)),this._program=null,this._locations=null,this._positionLoc=null,this._colorTexture=null,this._depthVelocityTexture=null,this._fbo=null,this._vbo=null,this._gl=null}}export{Se as CloudShadowPass};
