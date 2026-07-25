import{k as x}from"./vendor-libs-IhiymJUG.js";x.track||(x.track=function(e,t){t&&t.forEach(i=>{const r=x.observable(e[i]);Object.defineProperty(e,i,{get:r,set:r,enumerable:!0,configurable:!0})})});x.bindingHandlers.cesiumSvgPath||(x.bindingHandlers.cesiumSvgPath={update(e,t){const i=x.unwrap(t()),r=x.unwrap(i.path),o=x.unwrap(i.width)||16,s=x.unwrap(i.height)||16,d="http://www.w3.org/2000/svg",c=document.createElementNS(d,"svg");c.setAttribute("class","cesium-nav-svg"),c.style.width="100%",c.style.height="100%",c.style.display="block",c.setAttribute("viewBox",`0 0 ${o} ${s}`),c.setAttribute("preserveAspectRatio","xMidYMid meet");const u=document.createElementNS(d,"path");u.setAttribute("d",r),u.setAttribute("fill","currentColor"),c.appendChild(u),e.innerHTML="",e.appendChild(c)}});function T(){const e=window.Cesium;if(!e)throw new Error("[cesium-shim] window.Cesium 未找到，请确保 Cesium CDN 已加载");return e}function n(e){return new Proxy(function(){},{construct(t,i){const o=T()[e];if(typeof o!="function")throw new TypeError(`[cesium-shim] window.Cesium.${e} 不是构造函数`);return new o(...i)},apply(t,i,r){const s=T()[e];if(typeof s!="function")throw new TypeError(`[cesium-shim] window.Cesium.${e} 不可调用`);return s(...r)},get(t,i){const o=T()[e];if(o===void 0||typeof i=="symbol")return;const s=o[i];return typeof s=="function"?s.bind(o):s}})}const ze=n("Cartesian3"),Ie=n("Cartographic"),$=n("Math"),Oe=n("Matrix3"),de=n("Matrix4"),Ve=n("Quaternion"),We=n("Transforms"),je=n("HeadingPitchRoll"),Ne=n("Model"),Ge=n("ModelAnimationLoop"),Ue=n("Primitive"),He=n("GeometryInstance"),le=n("Geometry"),K=n("GeometryAttribute"),Q=n("ComponentDatatype"),me=n("PrimitiveType"),ke=n("BoundingSphere"),Ye=n("ColorGeometryInstanceAttribute"),U=n("Color"),qe=n("PerInstanceColorAppearance"),$e=n("ScreenSpaceEventHandler"),Ke=n("ScreenSpaceEventType"),Qe=n("KeyboardEventModifier");n("sampleTerrainMostDetailed");const Xe=n("sampleTerrain"),C=n("defined"),Je=n("DeveloperError"),Ze=n("Event"),et=n("EventHelper"),tt=n("getTimestamp"),it=n("getElement"),he=n("SceneMode"),m=n("Cartesian2"),rt=n("HeadingPitchRange"),nt=n("EllipsoidGeodesic"),ot=n("Camera"),pe=n("Rectangle"),at=n("Ray"),st=n("IntersectionTests");n("ReferenceFrame");const D=n("PixelDatatype"),L=n("PixelFormat"),I=n("Sampler"),f=n("Texture"),O=n("TextureMagnificationFilter"),V=n("TextureMinificationFilter"),fe=n("FrameRateMonitor"),b=n("ShaderSource"),ve=n("GeometryAttributes"),ge=n("Appearance"),X=n("TextureWrap"),W=n("VertexArray"),j=n("BufferUsage"),J=n("ClearCommand"),N=n("Pass"),xe=n("Framebuffer"),we=n("ShaderProgram"),ye=n("DrawCommand"),Pe=n("RenderState"),Ce=n("ComputeCommand"),Se=n("destroyObject");new Proxy({},{get(e,t){const i=T();if(typeof t!="symbol")return i[t]},set(e,t,i){const r=T();return r[t]=i,!0},has(e,t){const i=T();return t in i}});var Te=Object.defineProperty,be=(e,t,i)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,a=(e,t,i)=>be(e,typeof t!="symbol"?t+"":t,i),De=`#version 300 es
precision highp float;

uniform sampler2D currentParticlesPosition;
uniform sampler2D particlesSpeed;

in vec2 v_textureCoordinates;

out vec4 fragColor;

void main() {
    // 获取当前粒子的位置
    vec2 currentPos = texture(currentParticlesPosition, v_textureCoordinates).rg;
    // 获取粒子的速度
    vec2 speed = texture(particlesSpeed, v_textureCoordinates).rg;
    // 计算下一个位置
    vec2 nextPos = currentPos + speed;
    
    // 将新的位置写入 fragColor
    fragColor = vec4(nextPos, 0.0, 1.0);
}
`,Le=`#version 300 es

// the size of UV textures: width = lon, height = lat
uniform sampler2D U; // eastward wind
uniform sampler2D V; // northward wind
uniform sampler2D currentParticlesPosition; // (lon, lat, lev)

uniform vec2 uRange; // (min, max)
uniform vec2 vRange; // (min, max)
uniform vec2 speedRange; // (min, max)
uniform vec2 dimension; // (lon, lat)
uniform vec2 minimum; // minimum of each dimension
uniform vec2 maximum; // maximum of each dimension

uniform float speedScaleFactor;
uniform float frameRateAdjustment;

in vec2 v_textureCoordinates;

vec2 getInterval(vec2 maximum, vec2 minimum, vec2 dimension) {
    return (maximum - minimum) / (dimension - 1.0);
}

vec2 mapPositionToNormalizedIndex2D(vec2 lonLat) {
    // ensure the range of longitude and latitude
    lonLat.x = clamp(lonLat.x, minimum.x, maximum.x);
    lonLat.y = clamp(lonLat.y,  minimum.y, maximum.y);

    vec2 interval = getInterval(maximum, minimum, dimension);
    
    vec2 index2D = vec2(0.0);
    index2D.x = (lonLat.x - minimum.x) / interval.x;
    index2D.y = (lonLat.y - minimum.y) / interval.y;

    vec2 normalizedIndex2D = vec2(index2D.x / dimension.x, index2D.y / dimension.y);
    return normalizedIndex2D;
}

float getWindComponent(sampler2D componentTexture, vec2 lonLat) {
    vec2 normalizedIndex2D = mapPositionToNormalizedIndex2D(lonLat);
    float result = texture(componentTexture, normalizedIndex2D).r;
    return result;
}

vec2 getWindComponents(vec2 lonLat) {
    vec2 normalizedIndex2D = mapPositionToNormalizedIndex2D(lonLat);
    float u = texture(U, normalizedIndex2D).r;
    float v = texture(V, normalizedIndex2D).r;
    return vec2(u, v);
}

vec2 bilinearInterpolation(vec2 lonLat) {
    float lon = lonLat.x;
    float lat = lonLat.y;

    vec2 interval = getInterval(maximum, minimum, dimension);

    // Calculate grid cell coordinates
    float lon0 = floor(lon / interval.x) * interval.x;
    float lon1 = lon0 + interval.x;
    float lat0 = floor(lat / interval.y) * interval.y;
    float lat1 = lat0 + interval.y;

    // Get wind vectors at four corners
    vec2 v00 = getWindComponents(vec2(lon0, lat0));
    vec2 v10 = getWindComponents(vec2(lon1, lat0));
    vec2 v01 = getWindComponents(vec2(lon0, lat1));
    vec2 v11 = getWindComponents(vec2(lon1, lat1));

    // Check if all wind vectors are zero
    if (length(v00) == 0.0 && length(v10) == 0.0 && length(v01) == 0.0 && length(v11) == 0.0) {
        return vec2(0.0, 0.0);
    }

    // Calculate interpolation weights
    float s = (lon - lon0) / interval.x;
    float t = (lat - lat0) / interval.y;

    // Perform bilinear interpolation on vector components
    vec2 v0 = mix(v00, v10, s);
    vec2 v1 = mix(v01, v11, s);
    return mix(v0, v1, t);
}

vec2 lengthOfLonLat(vec2 lonLat) {
    // unit conversion: meters -> longitude latitude degrees
    // see https://en.wikipedia.org/wiki/Geographic_coordinate_system#Length_of_a_degree for detail

    // Calculate the length of a degree of latitude and longitude in meters
    float latitude = radians(lonLat.y);

    float term1 = 111132.92;
    float term2 = 559.82 * cos(2.0 * latitude);
    float term3 = 1.175 * cos(4.0 * latitude);
    float term4 = 0.0023 * cos(6.0 * latitude);
    float latLength = term1 - term2 + term3 - term4;

    float term5 = 111412.84 * cos(latitude);
    float term6 = 93.5 * cos(3.0 * latitude);
    float term7 = 0.118 * cos(5.0 * latitude);
    float longLength = term5 - term6 + term7;

    return vec2(longLength, latLength);
}

vec2 convertSpeedUnitToLonLat(vec2 lonLat, vec2 speed) {
    vec2 lonLatLength = lengthOfLonLat(lonLat);
    float u = speed.x / lonLatLength.x;
    float v = speed.y / lonLatLength.y;
    vec2 windVectorInLonLat = vec2(u, v);

    return windVectorInLonLat;
}

vec2 calculateSpeedByRungeKutta2(vec2 lonLat) {
    // see https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods#Second-order_methods_with_two_stages for detail
    const float h = 0.5;

    vec2 y_n = lonLat;
    vec2 f_n = bilinearInterpolation(lonLat);
    vec2 midpoint = y_n + 0.5 * h * convertSpeedUnitToLonLat(y_n, f_n) * speedScaleFactor;
    vec2 speed = h * bilinearInterpolation(midpoint) * speedScaleFactor;

    return speed;
}


vec2 calculateWindNorm(vec2 speed) {
    float speedLength = length(speed.xy);
    if(speedLength == 0.0){
      return vec2(0.0);
    }

    // Clamp speedLength to range
    float clampedSpeed = clamp(speedLength, speedRange.x, speedRange.y);
    float normalizedSpeed = (clampedSpeed - speedRange.x) / (speedRange.y - speedRange.x);
    return vec2(speedLength, normalizedSpeed);
}

out vec4 fragColor;

void main() {
    // texture coordinate must be normalized
    vec2 lonLat = texture(currentParticlesPosition, v_textureCoordinates).rg;
    vec2 speedOrigin = bilinearInterpolation(lonLat);
    vec2 speed = calculateSpeedByRungeKutta2(lonLat) * frameRateAdjustment;
    vec2 speedInLonLat = convertSpeedUnitToLonLat(lonLat, speed);

    fragColor = vec4(speedInLonLat, calculateWindNorm(speedOrigin));
}
`,Ee=`#version 300 es
precision highp float;

uniform sampler2D nextParticlesPosition;
uniform sampler2D particlesSpeed; // (u, v, norm)

// range (min, max)
uniform vec2 lonRange;
uniform vec2 latRange;

// range (min, max)
uniform vec2 dataLonRange;
uniform vec2 dataLatRange;

uniform float randomCoefficient;
uniform float dropRate;
uniform float dropRateBump;

// 添加新的 uniform 变量
uniform bool useViewerBounds;

in vec2 v_textureCoordinates;

// pseudo-random generator
const vec3 randomConstants = vec3(12.9898, 78.233, 4375.85453);
const vec2 normalRange = vec2(0.0, 1.0);
float rand(vec2 seed, vec2 range) {
    vec2 randomSeed = randomCoefficient * seed;
    float temp = dot(randomConstants.xy, randomSeed);
    temp = fract(sin(temp) * (randomConstants.z + temp));
    return temp * (range.y - range.x) + range.x;
}

vec2 generateRandomParticle(vec2 seed) {
    vec2 range;
    float randomLon, randomLat;
    
    if (useViewerBounds) {
        // 在当前视域范围内生成粒子
        randomLon = rand(seed, lonRange);
        randomLat = rand(-seed, latRange);
    } else {
        // 在数据范围内生成粒子
        randomLon = rand(seed, dataLonRange);
        randomLat = rand(-seed, dataLatRange);
    }

    return vec2(randomLon, randomLat);
}

bool particleOutbound(vec2 particle) {
    return particle.y < dataLatRange.x || particle.y > dataLatRange.y || particle.x < dataLonRange.x || particle.x > dataLonRange.y;
}

out vec4 fragColor;

void main() {
    vec2 nextParticle = texture(nextParticlesPosition, v_textureCoordinates).rg;
    vec4 nextSpeed = texture(particlesSpeed, v_textureCoordinates);
    float speedNorm = nextSpeed.a;
    float particleDropRate = dropRate + dropRateBump * speedNorm;

    vec2 seed1 = nextParticle.xy + v_textureCoordinates;
    vec2 seed2 = nextSpeed.rg + v_textureCoordinates;
    vec2 randomParticle = generateRandomParticle(seed1);
    float randomNumber = rand(seed2, normalRange);

    if (randomNumber < particleDropRate || particleOutbound(nextParticle)) {
        fragColor = vec4(randomParticle, 0.0, 1.0); // 1.0 means this is a random particle
    } else {
        fragColor = vec4(nextParticle, 0.0, 0.0);
    }
}
`,Re=`#version 300 es
precision highp float;

in vec2 st;
in vec3 normal;

uniform sampler2D previousParticlesPosition;
uniform sampler2D currentParticlesPosition;
uniform sampler2D postProcessingPosition;
uniform sampler2D particlesSpeed;

uniform float frameRateAdjustment;
uniform float particleHeight;
uniform float aspect;
uniform float pixelSize;
uniform vec2 lineWidth;
uniform vec2 lineLength;
uniform vec2 domain;
uniform bool is3D;

// 添加输出变量传递给片元着色器
out vec4 speed;
out float v_segmentPosition;
out vec2 textureCoordinate;

// 添加结构体定义
struct adjacentPoints {
    vec4 previous;
    vec4 current;
    vec4 next;
};

vec3 convertCoordinate(vec2 lonLat) {
    // WGS84 (lon, lat, lev) -> ECEF (x, y, z)
    // read https://en.wikipedia.org/wiki/Geographic_coordinate_conversion#From_geodetic_to_ECEF_coordinates for detail

    // WGS 84 geometric constants
    float a = 6378137.0; // Semi-major axis
    float b = 6356752.3142; // Semi-minor axis
    float e2 = 6.69437999014e-3; // First eccentricity squared

    float latitude = radians(lonLat.y);
    float longitude = radians(lonLat.x);

    float cosLat = cos(latitude);
    float sinLat = sin(latitude);
    float cosLon = cos(longitude);
    float sinLon = sin(longitude);

    float N_Phi = a / sqrt(1.0 - e2 * sinLat * sinLat);
    float h = particleHeight; // it should be high enough otherwise the particle may not pass the terrain depth test
    vec3 cartesian = vec3(0.0);
    cartesian.x = (N_Phi + h) * cosLat * cosLon;
    cartesian.y = (N_Phi + h) * cosLat * sinLon;
    cartesian.z = ((b * b) / (a * a) * N_Phi + h) * sinLat;
    return cartesian;
}

vec4 calculateProjectedCoordinate(vec2 lonLat) {
    if (is3D) {
        vec3 particlePosition = convertCoordinate(lonLat);
        // 使用 modelViewProjection 矩阵进行投影变换
        vec4 projectedPosition = czm_modelViewProjection * vec4(particlePosition, 1.0);
        return projectedPosition;
    } else {
        vec3 position2D = vec3(radians(lonLat.x), radians(lonLat.y), 0.0);
        return czm_modelViewProjection * vec4(position2D, 1.0);
    }
}

vec4 calculateOffsetOnNormalDirection(vec4 pointA, vec4 pointB, float offsetSign, float widthFactor) {
    vec2 aspectVec2 = vec2(aspect, 1.0);
    vec2 pointA_XY = (pointA.xy / pointA.w) * aspectVec2;
    vec2 pointB_XY = (pointB.xy / pointB.w) * aspectVec2;

    // 计算方向向量
    vec2 direction = normalize(pointB_XY - pointA_XY);

    // 计算法向量
    vec2 normalVector = vec2(-direction.y, direction.x);
    normalVector.x = normalVector.x / aspect;

    // 使用 widthFactor 调整宽度
    float offsetLength = widthFactor * lineWidth.y;
    normalVector = offsetLength * normalVector;

    vec4 offset = vec4(offsetSign * normalVector, 0.0, 0.0);
    return offset;
}

void main() {
    // 翻转 Y 轴坐标
    vec2 flippedIndex = vec2(st.x, 1.0 - st.y);

    vec2 particleIndex = flippedIndex;
    speed = texture(particlesSpeed, particleIndex);

    vec2 previousPosition = texture(previousParticlesPosition, particleIndex).rg;
    vec2 currentPosition = texture(currentParticlesPosition, particleIndex).rg;
    vec2 nextPosition = texture(postProcessingPosition, particleIndex).rg;

    float isAnyRandomPointUsed = texture(postProcessingPosition, particleIndex).a +
        texture(currentParticlesPosition, particleIndex).a +
        texture(previousParticlesPosition, particleIndex).a;

    adjacentPoints projectedCoordinates;
    if (isAnyRandomPointUsed > 0.0) {
        projectedCoordinates.previous = calculateProjectedCoordinate(previousPosition);
        projectedCoordinates.current = projectedCoordinates.previous;
        projectedCoordinates.next = projectedCoordinates.previous;
    } else {
        projectedCoordinates.previous = calculateProjectedCoordinate(previousPosition);
        projectedCoordinates.current = calculateProjectedCoordinate(currentPosition);
        projectedCoordinates.next = calculateProjectedCoordinate(nextPosition);
    }

    int pointToUse = int(normal.x);
    float offsetSign = normal.y;
    vec4 offset = vec4(0.0);

    // 计算速度相关的宽度和长度因子
    float speedLength = clamp(speed.b, domain.x, domain.y);
    float normalizedSpeed = (speedLength - domain.x) / (domain.y - domain.x);
    
    // 根据速度计算宽度
    float widthFactor = mix(lineWidth.x, lineWidth.y, normalizedSpeed);
    widthFactor *= (pointToUse < 0 ? 1.0 : 0.5); // 头部更宽，尾部更窄

    // Calculate length based on speed
    float lengthFactor = mix(lineLength.x, lineLength.y, normalizedSpeed) * pixelSize;

    if (pointToUse == 1) {
        // 头部位置
        offset = pixelSize * calculateOffsetOnNormalDirection(
            projectedCoordinates.previous,
            projectedCoordinates.current,
            offsetSign,
            widthFactor
        );
        gl_Position = projectedCoordinates.previous + offset;
        v_segmentPosition = 0.0; // 头部
    } else if (pointToUse == -1) {
        // Get direction and normalize it to length 1.0
        vec4 direction = normalize(projectedCoordinates.next - projectedCoordinates.current);
        vec4 extendedPosition = projectedCoordinates.current + direction * lengthFactor;

        offset = pixelSize * calculateOffsetOnNormalDirection(
            projectedCoordinates.current,
            extendedPosition,
            offsetSign,
            widthFactor
        );
        gl_Position = extendedPosition + offset;
        v_segmentPosition = 1.0; // 尾部
    }

    textureCoordinate = st;
}
`,Fe=`#version 300 es
precision highp float;

in vec4 speed;
in float v_segmentPosition;
in vec2 textureCoordinate;

uniform vec2 domain;
uniform vec2 displayRange;
uniform sampler2D colorTable;
uniform sampler2D segmentsDepthTexture;

out vec4 fragColor;

void main() {
    const float zero = 0.0;
    if(speed.a > zero && speed.b > displayRange.x && speed.b < displayRange.y) {
        float speedLength = clamp(speed.b, domain.x, domain.y);
        float normalizedSpeed = (speedLength - domain.x) / (domain.y - domain.x);
        vec4 baseColor = texture(colorTable, vec2(normalizedSpeed, zero));

        // 使用更平滑的渐变效果
        float alpha = smoothstep(0.0, 1.0, v_segmentPosition);
        alpha = pow(alpha, 1.5); // 调整透明度渐变曲线

        // 根据速度调整透明度
        float speedAlpha = mix(0.3, 1.0, speed.a);

        // 组合颜色和透明度
        fragColor = vec4(baseColor.rgb, baseColor.a * alpha * speedAlpha);
    } else {
        fragColor = vec4(zero);
    }

    float segmentsDepth = texture(segmentsDepthTexture, textureCoordinate).r;
    float globeDepth = czm_unpackDepth(texture(czm_globeDepthTexture, textureCoordinate));
    if (segmentsDepth < globeDepth) {
        fragColor = vec4(zero);
    }
}
`,E=class{static getCalculateSpeedShader(){return new b({sources:[Le]})}static getUpdatePositionShader(){return new b({sources:[De]})}static getSegmentDrawVertexShader(){return new b({sources:[Re]})}static getSegmentDrawFragmentShader(){return new b({sources:[Fe]})}static getPostProcessingPositionShader(){return new b({sources:[Ee]})}},_=class{constructor(e){a(this,"commandType"),a(this,"geometry"),a(this,"attributeLocations"),a(this,"primitiveType"),a(this,"uniformMap"),a(this,"vertexShaderSource"),a(this,"fragmentShaderSource"),a(this,"rawRenderState"),a(this,"framebuffer"),a(this,"outputTexture"),a(this,"autoClear"),a(this,"preExecute"),a(this,"show"),a(this,"commandToExecute"),a(this,"clearCommand"),a(this,"isDynamic"),this.commandType=e.commandType,this.geometry=e.geometry,this.attributeLocations=e.attributeLocations,this.primitiveType=e.primitiveType,this.uniformMap=e.uniformMap||{},this.vertexShaderSource=e.vertexShaderSource,this.fragmentShaderSource=e.fragmentShaderSource,this.rawRenderState=e.rawRenderState,this.framebuffer=e.framebuffer,this.outputTexture=e.outputTexture,this.autoClear=e.autoClear??!1,this.preExecute=e.preExecute,this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.isDynamic=e.isDynamic??(()=>!0),this.autoClear&&(this.clearCommand=new J({color:new U(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:N.OPAQUE}))}createCommand(e){if(this.commandType==="Draw"){const t=W.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:j.STATIC_DRAW}),i=we.fromCache({context:e,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource,attributeLocations:this.attributeLocations}),r=Pe.fromCache(this.rawRenderState);return new ye({owner:this,vertexArray:t,primitiveType:this.primitiveType,modelMatrix:de.IDENTITY,renderState:r,shaderProgram:i,framebuffer:this.framebuffer,uniformMap:this.uniformMap,pass:N.OPAQUE})}else{if(this.commandType==="Compute")return new Ce({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0});throw new Error("Unknown command type")}}setGeometry(e,t){this.geometry=t,C(this.commandToExecute)&&(this.commandToExecute.vertexArray=W.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:j.STATIC_DRAW}))}update(e){this.isDynamic()&&(!this.show||!C(e)||(C(this.commandToExecute)||(this.commandToExecute=this.createCommand(e.context)),C(this.preExecute)&&this.preExecute(),e.commandList&&(C(this.clearCommand)&&e.commandList.push(this.clearCommand),C(this.commandToExecute)&&e.commandList.push(this.commandToExecute))))}isDestroyed(){return!1}destroy(){var e;return C(this.commandToExecute)&&((e=this.commandToExecute.shaderProgram)==null||e.destroy(),this.commandToExecute.shaderProgram=void 0),Se(this)}};function R(e,t){if(!e)return t;if(!t)return e;const i={...t};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const o=e[r],s=t[r];if(Array.isArray(o)){i[r]=o.slice();continue}if(o&&typeof o=="object"){i[r]=R(o,s||{});continue}o!==void 0&&(i[r]=o)}return i}var Ae=class{constructor(e,t,i,r,o){a(this,"context"),a(this,"options"),a(this,"viewerParameters"),a(this,"windTextures"),a(this,"particlesTextures"),a(this,"primitives"),a(this,"windData"),a(this,"frameRateMonitor"),a(this,"frameRate",60),a(this,"frameRateAdjustment",1),this.context=e,this.options=i,this.viewerParameters=r,this.windData=t,this.frameRateMonitor=new fe({scene:o,samplingWindow:1,quietPeriod:0}),this.initFrameRate(),this.createWindTextures(),this.createParticlesTextures(),this.createComputingPrimitives()}initFrameRate(){const e=()=>{this.frameRateMonitor.lastFramesPerSecond>20&&(this.frameRate=this.frameRateMonitor.lastFramesPerSecond,this.frameRateAdjustment=60/Math.max(this.frameRate,1))};e();const t=setInterval(e,1e3);this.frameRateMonitor.lowFrameRate.addEventListener((r,o)=>{}),this.frameRateMonitor.nominalFrameRate.addEventListener((r,o)=>{});const i=this.destroy.bind(this);this.destroy=()=>{clearInterval(t),i()}}createWindTextures(){const e={context:this.context,width:this.windData.width,height:this.windData.height,pixelFormat:L.RED,pixelDatatype:D.FLOAT,flipY:this.options.flipY??!1,sampler:new I({minificationFilter:V.LINEAR,magnificationFilter:O.LINEAR})};this.windTextures={U:new f({...e,source:{arrayBufferView:new Float32Array(this.windData.u.array)}}),V:new f({...e,source:{arrayBufferView:new Float32Array(this.windData.v.array)}})}}createParticlesTextures(){const e={context:this.context,width:this.options.particlesTextureSize,height:this.options.particlesTextureSize,pixelFormat:L.RGBA,pixelDatatype:D.FLOAT,flipY:!1,source:{arrayBufferView:new Float32Array(this.options.particlesTextureSize*this.options.particlesTextureSize*4).fill(0)},sampler:new I({minificationFilter:V.NEAREST,magnificationFilter:O.NEAREST})};this.particlesTextures={previousParticlesPosition:new f(e),currentParticlesPosition:new f(e),nextParticlesPosition:new f(e),postProcessingPosition:new f(e),particlesSpeed:new f(e)}}destroyParticlesTextures(){Object.values(this.particlesTextures).forEach(e=>e.destroy())}createComputingPrimitives(){this.primitives={calculateSpeed:new _({commandType:"Compute",uniformMap:{U:()=>this.windTextures.U,V:()=>this.windTextures.V,uRange:()=>new m(this.windData.u.min,this.windData.u.max),vRange:()=>new m(this.windData.v.min,this.windData.v.max),speedRange:()=>new m(this.windData.speed.min,this.windData.speed.max),currentParticlesPosition:()=>this.particlesTextures.currentParticlesPosition,speedScaleFactor:()=>(this.viewerParameters.pixelSize+50)*this.options.speedFactor,frameRateAdjustment:()=>this.frameRateAdjustment,dimension:()=>new m(this.windData.width,this.windData.height),minimum:()=>new m(this.windData.bounds.west,this.windData.bounds.south),maximum:()=>new m(this.windData.bounds.east,this.windData.bounds.north)},fragmentShaderSource:E.getCalculateSpeedShader(),outputTexture:this.particlesTextures.particlesSpeed,preExecute:()=>{const e=this.particlesTextures.previousParticlesPosition;this.particlesTextures.previousParticlesPosition=this.particlesTextures.currentParticlesPosition,this.particlesTextures.currentParticlesPosition=this.particlesTextures.postProcessingPosition,this.particlesTextures.postProcessingPosition=e,this.primitives.calculateSpeed.commandToExecute&&(this.primitives.calculateSpeed.commandToExecute.outputTexture=this.particlesTextures.particlesSpeed)},isDynamic:()=>this.options.dynamic}),updatePosition:new _({commandType:"Compute",uniformMap:{currentParticlesPosition:()=>this.particlesTextures.currentParticlesPosition,particlesSpeed:()=>this.particlesTextures.particlesSpeed},fragmentShaderSource:E.getUpdatePositionShader(),outputTexture:this.particlesTextures.nextParticlesPosition,preExecute:()=>{this.primitives.updatePosition.commandToExecute&&(this.primitives.updatePosition.commandToExecute.outputTexture=this.particlesTextures.nextParticlesPosition)},isDynamic:()=>this.options.dynamic}),postProcessingPosition:new _({commandType:"Compute",uniformMap:{nextParticlesPosition:()=>this.particlesTextures.nextParticlesPosition,particlesSpeed:()=>this.particlesTextures.particlesSpeed,lonRange:()=>this.viewerParameters.lonRange,latRange:()=>this.viewerParameters.latRange,dataLonRange:()=>new m(this.windData.bounds.west,this.windData.bounds.east),dataLatRange:()=>new m(this.windData.bounds.south,this.windData.bounds.north),randomCoefficient:function(){return Math.random()},dropRate:()=>this.options.dropRate,dropRateBump:()=>this.options.dropRateBump,useViewerBounds:()=>this.options.useViewerBounds},fragmentShaderSource:E.getPostProcessingPositionShader(),outputTexture:this.particlesTextures.postProcessingPosition,preExecute:()=>{this.primitives.postProcessingPosition.commandToExecute&&(this.primitives.postProcessingPosition.commandToExecute.outputTexture=this.particlesTextures.postProcessingPosition)},isDynamic:()=>this.options.dynamic})}}reCreateWindTextures(){this.windTextures.U.destroy(),this.windTextures.V.destroy(),this.createWindTextures()}updateWindData(e){this.windData=e,this.reCreateWindTextures()}updateOptions(e){const t=e.flipY!==void 0&&e.flipY!==this.options.flipY;this.options=R(e,this.options),t&&this.reCreateWindTextures()}processWindData(e){const{array:t}=e;let{min:i,max:r}=e;const o=new Float32Array(t.length);i===void 0&&(i=Math.min(...t)),r===void 0&&(r=Math.max(...t));const s=Math.max(Math.abs(i),Math.abs(r));for(let d=0;d<t.length;d++){const c=t[d]/s;o[d]=c}return o}destroy(){Object.values(this.windTextures).forEach(e=>e.destroy()),Object.values(this.particlesTextures).forEach(e=>e.destroy()),Object.values(this.primitives).forEach(e=>e.destroy()),this.frameRateMonitor.destroy()}},_e=class{constructor(e,t,i,r){a(this,"context"),a(this,"options"),a(this,"viewerParameters"),a(this,"computing"),a(this,"primitives"),a(this,"colorTable"),a(this,"textures"),a(this,"framebuffers"),this.context=e,this.options=t,this.viewerParameters=i,this.computing=r,(typeof this.options.particlesTextureSize!="number"||this.options.particlesTextureSize<=0)&&(this.options.particlesTextureSize=256),this.colorTable=this.createColorTableTexture(),this.textures=this.createRenderingTextures(),this.framebuffers=this.createRenderingFramebuffers(),this.primitives=this.createPrimitives()}createRenderingTextures(){const e={context:this.context,width:this.context.drawingBufferWidth,height:this.context.drawingBufferHeight,pixelFormat:L.RGBA,pixelDatatype:D.UNSIGNED_BYTE},t={context:this.context,width:this.context.drawingBufferWidth,height:this.context.drawingBufferHeight,pixelFormat:L.DEPTH_COMPONENT,pixelDatatype:D.UNSIGNED_INT};return{segmentsColor:new f(e),segmentsDepth:new f(t)}}createRenderingFramebuffers(){return{segments:new xe({context:this.context,colorTextures:[this.textures.segmentsColor],depthTexture:this.textures.segmentsDepth})}}destoryRenderingFramebuffers(){Object.values(this.framebuffers).forEach(e=>{e.destroy()})}createColorTableTexture(){const e=new Float32Array(this.options.colors.flatMap(t=>{const i=U.fromCssColorString(t);return[i.red,i.green,i.blue,i.alpha]}));return new f({context:this.context,width:this.options.colors.length,height:1,pixelFormat:L.RGBA,pixelDatatype:D.FLOAT,sampler:new I({minificationFilter:V.LINEAR,magnificationFilter:O.LINEAR,wrapS:X.CLAMP_TO_EDGE,wrapT:X.CLAMP_TO_EDGE}),source:{width:this.options.colors.length,height:1,arrayBufferView:e}})}createSegmentsGeometry(){const t=this.options.particlesTextureSize;let i=[];for(let c=0;c<t;c++)for(let u=0;u<t;u++)for(let w=0;w<4;w++)i.push(c/t),i.push(u/t);i=new Float32Array(i);const r=this.options.particlesTextureSize**2;let o=[];for(let c=0;c<r;c++)o.push(-1,-1,0,-1,1,0,1,-1,0,1,1,0);o=new Float32Array(o);let s=[];for(let c=0,u=0;c<r;c++)s.push(u+0,u+1,u+2,u+2,u+1,u+3),u+=4;return s=new Uint32Array(s),new le({attributes:new ve({st:new K({componentDatatype:Q.FLOAT,componentsPerAttribute:2,values:i}),normal:new K({componentDatatype:Q.FLOAT,componentsPerAttribute:3,values:o})}),indices:s})}createRawRenderState(e){return ge.getDefaultRenderState(!0,!1,{viewport:void 0,depthTest:void 0,depthMask:void 0,blending:void 0,...e})}createPrimitives(){return{segments:new _({commandType:"Draw",attributeLocations:{st:0,normal:1},geometry:this.createSegmentsGeometry(),primitiveType:me.TRIANGLES,uniformMap:{previousParticlesPosition:()=>this.computing.particlesTextures.previousParticlesPosition,currentParticlesPosition:()=>this.computing.particlesTextures.currentParticlesPosition,postProcessingPosition:()=>this.computing.particlesTextures.postProcessingPosition,particlesSpeed:()=>this.computing.particlesTextures.particlesSpeed,frameRateAdjustment:()=>this.computing.frameRateAdjustment,colorTable:()=>this.colorTable,domain:()=>{var i,r;return new m(((i=this.options.domain)==null?void 0:i.min)??this.computing.windData.speed.min,((r=this.options.domain)==null?void 0:r.max)??this.computing.windData.speed.max)},displayRange:()=>{var i,r;return new m(((i=this.options.displayRange)==null?void 0:i.min)??this.computing.windData.speed.min,((r=this.options.displayRange)==null?void 0:r.max)??this.computing.windData.speed.max)},particleHeight:()=>this.options.particleHeight||0,aspect:()=>this.context.drawingBufferWidth/this.context.drawingBufferHeight,pixelSize:()=>this.viewerParameters.pixelSize,lineWidth:()=>{const t=this.options.lineWidth||G.lineWidth;return new m(t.min,t.max)},lineLength:()=>{const t=this.options.lineLength||G.lineLength;return new m(t.min,t.max)},is3D:()=>this.viewerParameters.sceneMode===he.SCENE3D,segmentsDepthTexture:()=>this.textures.segmentsDepth},vertexShaderSource:E.getSegmentDrawVertexShader(),fragmentShaderSource:E.getSegmentDrawFragmentShader(),rawRenderState:this.createRawRenderState({viewport:void 0,depthTest:{enabled:!0},depthMask:!0,blending:{enabled:!0,blendEquation:WebGLRenderingContext.FUNC_ADD,blendFuncSource:WebGLRenderingContext.SRC_ALPHA,blendFuncDestination:WebGLRenderingContext.ONE_MINUS_SRC_ALPHA}})})}}onParticlesTextureSizeChange(){const e=this.createSegmentsGeometry();this.primitives.segments.geometry=e;const t=W.fromGeometry({context:this.context,geometry:e,attributeLocations:this.primitives.segments.attributeLocations,bufferUsage:j.STATIC_DRAW});this.primitives.segments.commandToExecute&&(this.primitives.segments.commandToExecute.vertexArray=t)}onColorTableChange(){this.colorTable.destroy(),this.colorTable=this.createColorTableTexture()}updateOptions(e){const t=e.colors&&JSON.stringify(e.colors)!==JSON.stringify(this.options.colors);this.options=R(e,this.options),t&&this.onColorTableChange()}destroy(){Object.values(this.framebuffers).forEach(e=>{e.destroy()}),Object.values(this.primitives).forEach(e=>{e.destroy()}),this.colorTable.destroy()}},Me=class{constructor(e,t,i,r,o){a(this,"computing"),a(this,"rendering"),a(this,"options"),a(this,"viewerParameters"),a(this,"context"),this.context=e,this.options=i,this.viewerParameters=r,this.computing=new Ae(e,t,i,r,o),this.rendering=new _e(e,i,r,this.computing),this.clearFramebuffers()}getPrimitives(){return[this.computing.primitives.calculateSpeed,this.computing.primitives.updatePosition,this.computing.primitives.postProcessingPosition,this.rendering.primitives.segments]}clearFramebuffers(){const e=new J({color:new U(0,0,0,0),depth:1,framebuffer:void 0,pass:N.OPAQUE});Object.keys(this.rendering.framebuffers).forEach(t=>{e.framebuffer=this.rendering.framebuffers[t],e.execute(this.context)})}changeOptions(e){let t=!1;e.particlesTextureSize&&this.options.particlesTextureSize!==e.particlesTextureSize&&(t=!0);const i=R(e,this.options);if(i.particlesTextureSize<1)throw new Error("particlesTextureSize must be greater than 0");this.options=i,this.rendering.updateOptions(e),this.computing.updateOptions(e),t&&(this.computing.destroyParticlesTextures(),this.computing.createParticlesTextures(),this.rendering.onParticlesTextureSizeChange())}applyViewerParameters(e){this.viewerParameters=e,this.computing.viewerParameters=e,this.rendering.viewerParameters=e}destroy(){this.computing.destroy(),this.rendering.destroy()}},G={particlesTextureSize:100,dropRate:.003,particleHeight:1e3,dropRateBump:.01,speedFactor:1,lineWidth:{min:1,max:2},lineLength:{min:20,max:100},colors:["white"],flipY:!1,useViewerBounds:!1,domain:void 0,displayRange:void 0,dynamic:!0},Z=class ee{constructor(t,i,r){a(this,"_show",!0),a(this,"_resized",!1),a(this,"windData"),a(this,"viewer"),a(this,"scene"),a(this,"options"),a(this,"particleSystem"),a(this,"viewerParameters"),a(this,"_isDestroyed",!1),a(this,"primitives",[]),a(this,"eventListeners",new Map),this.show=!0,this.viewer=t,this.scene=t.scene,this.options={...ee.defaultOptions,...r},this.windData=this.processWindData(i),this.viewerParameters={lonRange:new m(-180,180),latRange:new m(-90,90),pixelSize:1e3,sceneMode:this.scene.mode},this.updateViewerParameters(),this.particleSystem=new Me(this.scene.context,this.windData,this.options,this.viewerParameters,this.scene),this.add(),this.setupEventListeners()}get show(){return this._show}set show(t){this._show!==t&&(this._show=t,this.updatePrimitivesVisibility(t))}setupEventListeners(){this.viewer.camera.percentageChanged=.01,this.viewer.camera.changed.addEventListener(this.updateViewerParameters.bind(this)),this.scene.morphComplete.addEventListener(this.updateViewerParameters.bind(this)),window.addEventListener("resize",this.updateViewerParameters.bind(this))}removeEventListeners(){this.viewer.camera.changed.removeEventListener(this.updateViewerParameters.bind(this)),this.scene.morphComplete.removeEventListener(this.updateViewerParameters.bind(this)),window.removeEventListener("resize",this.updateViewerParameters.bind(this))}processWindData(t){var i,r;if(((i=t.speed)==null?void 0:i.min)===void 0||((r=t.speed)==null?void 0:r.max)===void 0||t.speed.array===void 0){const o={array:new Float32Array(t.u.array.length),min:Number.MAX_VALUE,max:Number.MIN_VALUE};for(let s=0;s<t.u.array.length;s++)o.array[s]=Math.sqrt(t.u.array[s]*t.u.array[s]+t.v.array[s]*t.v.array[s]),o.array[s]!==0&&(o.min=Math.min(o.min,o.array[s]),o.max=Math.max(o.max,o.array[s]));t={...t,speed:o}}return t}getDataAtLonLat(t,i){const{bounds:r,width:o,height:s,u:d,v:c,speed:u}=this.windData,{flipY:w}=this.options;if(t<r.west||t>r.east||i<r.south||i>r.north)return null;const h=(t-r.west)/(r.east-r.west)*(o-1);let l=(i-r.south)/(r.north-r.south)*(s-1);w&&(l=s-1-l);const y=Math.floor(h),P=Math.floor(l),v=Math.floor(h),F=Math.min(v+1,o-1),S=Math.floor(l),A=Math.min(S+1,s-1),g=h-v,p=l-S,M=P*o+y,H=S*o+v,k=S*o+F,Y=A*o+v,q=A*o+F,te=d.array[H],ie=d.array[k],re=d.array[Y],ne=d.array[q],B=(1-g)*(1-p)*te+g*(1-p)*ie+(1-g)*p*re+g*p*ne,oe=c.array[H],ae=c.array[k],se=c.array[Y],ce=c.array[q],z=(1-g)*(1-p)*oe+g*(1-p)*ae+(1-g)*p*se+g*p*ce,ue=Math.sqrt(B*B+z*z);return{original:{u:d.array[M],v:c.array[M],speed:u.array[M]},interpolated:{u:B,v:z,speed:ue}}}updateViewerParameters(){var w;const t=this.viewer.scene,i=t.canvas,r=[{x:0,y:0},{x:0,y:i.clientHeight},{x:i.clientWidth,y:0},{x:i.clientWidth,y:i.clientHeight}];let o=180,s=-180,d=90,c=-90,u=!1;for(const h of r){const l=t.camera.pickEllipsoid(new m(h.x,h.y),t.globe.ellipsoid);if(!l){u=!0;break}const y=t.globe.ellipsoid.cartesianToCartographic(l),P=$.toDegrees(y.longitude),v=$.toDegrees(y.latitude);o=Math.min(o,P),s=Math.max(s,P),d=Math.min(d,v),c=Math.max(c,v)}if(!u){const h=new m(Math.max(this.windData.bounds.west,o),Math.min(this.windData.bounds.east,s)),l=new m(Math.max(this.windData.bounds.south,d),Math.min(this.windData.bounds.north,c)),y=(h.y-h.x)*.05,P=(l.y-l.x)*.05;h.x=Math.max(this.windData.bounds.west,h.x-y),h.y=Math.min(this.windData.bounds.east,h.y+y),l.x=Math.max(this.windData.bounds.south,l.x-P),l.y=Math.min(this.windData.bounds.north,l.y+P),this.viewerParameters.lonRange=h,this.viewerParameters.latRange=l;const v=this.windData.bounds.east-this.windData.bounds.west,F=this.windData.bounds.north-this.windData.bounds.south,S=(h.y-h.x)/v,A=(l.y-l.x)/F,p=1e3*Math.min(S,A);p>0&&(this.viewerParameters.pixelSize=Math.max(0,Math.min(1e3,p)))}this.viewerParameters.sceneMode=this.scene.mode,(w=this.particleSystem)==null||w.applyViewerParameters(this.viewerParameters)}updateWindData(t){this._isDestroyed||(this.windData=this.processWindData(t),this.particleSystem.computing.updateWindData(this.windData),this.viewer.scene.requestRender(),this.dispatchEvent("dataChange",this.windData))}updateOptions(t){this._isDestroyed||(this.options=R(t,this.options),this.particleSystem.changeOptions(t),this.viewer.scene.requestRender(),this.dispatchEvent("optionsChange",this.options))}zoomTo(t=0){if(this.windData.bounds){const i=pe.fromDegrees(this.windData.bounds.west,this.windData.bounds.south,this.windData.bounds.east,this.windData.bounds.north);this.viewer.camera.flyTo({destination:i,duration:t})}}add(){this.primitives=this.particleSystem.getPrimitives(),this.primitives.forEach(t=>{this.scene.primitives.add(t)})}remove(){this.primitives.forEach(t=>{this.scene.primitives.remove(t)}),this.primitives=[]}isDestroyed(){return this._isDestroyed}destroy(){this.remove(),this.removeEventListeners(),this.particleSystem.destroy(),this.eventListeners.clear(),this._isDestroyed=!0}updatePrimitivesVisibility(t){const i=t!==void 0?t:this._show;this.primitives.forEach(r=>{r.show=i})}addEventListener(t,i){var r;this.eventListeners.has(t)||this.eventListeners.set(t,new Set),(r=this.eventListeners.get(t))==null||r.add(i)}removeEventListener(t,i){var r;(r=this.eventListeners.get(t))==null||r.delete(i)}dispatchEvent(t,i){var r;(r=this.eventListeners.get(t))==null||r.forEach(o=>o(i))}};a(Z,"defaultOptions",G);var ct=Z;export{ke as B,m as C,Je as D,et as E,He as G,rt as H,st as I,Qe as K,$ as M,Ue as P,Ve as Q,pe as R,he as S,We as T,ct as W,tt as a,nt as b,Ie as c,C as d,ot as e,ze as f,it as g,at as h,de as i,Ze as j,Oe as k,je as l,$e as m,Ke as n,Ge as o,Ne as p,U as q,qe as r,Xe as s,le as t,Ye as u,me as v,K as w,Q as x};
