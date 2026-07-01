var G=Object.defineProperty;var H=(p,e,i)=>e in p?G(p,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):p[e]=i;var n=(p,e,i)=>H(p,typeof e!="symbol"?e+"":e,i);import{n as r}from"./cesium-shim-Dw1YPcub.js";const Y=`#version 300 es
precision highp float;

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

    float lon0 = floor(lon / interval.x) * interval.x;
    float lon1 = lon0 + interval.x;
    float lat0 = floor(lat / interval.y) * interval.y;
    float lat1 = lat0 + interval.y;

    vec2 v00 = getWindComponents(vec2(lon0, lat0));
    vec2 v10 = getWindComponents(vec2(lon1, lat0));
    vec2 v01 = getWindComponents(vec2(lon0, lat1));
    vec2 v11 = getWindComponents(vec2(lon1, lat1));

    if (length(v00) == 0.0 && length(v10) == 0.0 && length(v01) == 0.0 && length(v11) == 0.0) {
        return vec2(0.0, 0.0);
    }

    float s = (lon - lon0) / interval.x;
    float t = (lat - lat0) / interval.y;

    vec2 v0 = mix(v00, v10, s);
    vec2 v1 = mix(v01, v11, s);
    return mix(v0, v1, t);
}

vec2 lengthOfLonLat(vec2 lonLat) {
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

    float clampedSpeed = clamp(speedLength, speedRange.x, speedRange.y);
    float normalizedSpeed = (clampedSpeed - speedRange.x) / (speedRange.y - speedRange.x);
    return vec2(speedLength, normalizedSpeed);
}

out vec4 fragColor;

void main() {
    vec2 lonLat = texture(currentParticlesPosition, v_textureCoordinates).rg;
    vec2 speedOrigin = bilinearInterpolation(lonLat);
    vec2 speed = calculateSpeedByRungeKutta2(lonLat) * frameRateAdjustment;
    vec2 speedInLonLat = convertSpeedUnitToLonLat(lonLat, speed);

    fragColor = vec4(speedInLonLat, calculateWindNorm(speedOrigin));
}
`,q=`#version 300 es
precision highp float;

uniform sampler2D currentParticlesPosition;
uniform sampler2D particlesSpeed;

in vec2 v_textureCoordinates;

out vec4 fragColor;

void main() {
    vec2 currentPos = texture(currentParticlesPosition, v_textureCoordinates).rg;
    vec2 speed = texture(particlesSpeed, v_textureCoordinates).rg;
    vec2 nextPos = currentPos + speed;

    fragColor = vec4(nextPos, 0.0, 1.0);
}
`,k=`#version 300 es
precision highp float;

uniform sampler2D nextParticlesPosition;
uniform sampler2D particlesSpeed; // (u, v, norm)

uniform vec2 lonRange;
uniform vec2 latRange;

uniform vec2 dataLonRange;
uniform vec2 dataLatRange;

uniform float randomCoefficient;
uniform float dropRate;
uniform float dropRateBump;

uniform bool useViewerBounds;

in vec2 v_textureCoordinates;

const vec3 randomConstants = vec3(12.9898, 78.233, 4375.85453);
const vec2 normalRange = vec2(0.0, 1.0);
float rand(vec2 seed, vec2 range) {
    vec2 randomSeed = randomCoefficient * seed;
    float temp = dot(randomConstants.xy, randomSeed);
    temp = fract(sin(temp) * (randomConstants.z + temp));
    return temp * (range.y - range.x) + range.x;
}

vec2 generateRandomParticle(vec2 seed) {
    float randomLon, randomLat;

    if (useViewerBounds) {
        randomLon = rand(seed, lonRange);
        randomLat = rand(-seed, latRange);
    } else {
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
        fragColor = vec4(randomParticle, 0.0, 1.0);
    } else {
        fragColor = vec4(nextParticle, 0.0, 0.0);
    }
}
`,X=`#version 300 es
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

out vec4 speed;
out float v_segmentPosition;
out vec2 textureCoordinate;

struct adjacentPoints {
    vec4 previous;
    vec4 current;
    vec4 next;
};

vec3 convertCoordinate(vec2 lonLat) {
    float a = 6378137.0;
    float b = 6356752.3142;
    float e2 = 6.69437999014e-3;

    float latitude = radians(lonLat.y);
    float longitude = radians(lonLat.x);

    float cosLat = cos(latitude);
    float sinLat = sin(latitude);
    float cosLon = cos(longitude);
    float sinLon = sin(longitude);

    float N_Phi = a / sqrt(1.0 - e2 * sinLat * sinLat);
    float h = particleHeight;
    vec3 cartesian = vec3(0.0);
    cartesian.x = (N_Phi + h) * cosLat * cosLon;
    cartesian.y = (N_Phi + h) * cosLat * sinLon;
    cartesian.z = ((b * b) / (a * a) * N_Phi + h) * sinLat;
    return cartesian;
}

vec4 calculateProjectedCoordinate(vec2 lonLat) {
    if (is3D) {
        vec3 particlePosition = convertCoordinate(lonLat);
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

    vec2 direction = normalize(pointB_XY - pointA_XY);
    vec2 normalVector = vec2(-direction.y, direction.x);
    normalVector.x = normalVector.x / aspect;

    float offsetLength = widthFactor * lineWidth.y;
    normalVector = offsetLength * normalVector;

    vec4 offset = vec4(offsetSign * normalVector, 0.0, 0.0);
    return offset;
}

void main() {
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

    float speedLength = clamp(speed.b, domain.x, domain.y);
    float normalizedSpeed = (speedLength - domain.x) / (domain.y - domain.x);

    float widthFactor = mix(lineWidth.x, lineWidth.y, normalizedSpeed);
    widthFactor *= (pointToUse < 0 ? 1.0 : 0.5);

    float lengthFactor = mix(lineLength.x, lineLength.y, normalizedSpeed) * pixelSize;

    if (pointToUse == 1) {
        offset = pixelSize * calculateOffsetOnNormalDirection(
            projectedCoordinates.previous,
            projectedCoordinates.current,
            offsetSign,
            widthFactor
        );
        gl_Position = projectedCoordinates.previous + offset;
        v_segmentPosition = 0.0;
    } else if (pointToUse == -1) {
        vec4 direction = normalize(projectedCoordinates.next - projectedCoordinates.current);
        vec4 extendedPosition = projectedCoordinates.current + direction * lengthFactor;

        offset = pixelSize * calculateOffsetOnNormalDirection(
            projectedCoordinates.current,
            extendedPosition,
            offsetSign,
            widthFactor
        );
        gl_Position = extendedPosition + offset;
        v_segmentPosition = 1.0;
    }

    textureCoordinate = st;
}
`,K=`#version 300 es
precision highp float;

in vec4 speed;
in float v_segmentPosition;
in vec2 textureCoordinate;

uniform vec2 domain;
uniform vec2 displayRange;
uniform sampler2D colorTable;

out vec4 fragColor;

void main() {
    const float zero = 0.0;
    if(speed.a > zero && speed.b > displayRange.x && speed.b < displayRange.y) {
        float speedLength = clamp(speed.b, domain.x, domain.y);
        float normalizedSpeed = (speedLength - domain.x) / (domain.y - domain.x);
        vec4 baseColor = texture(colorTable, vec2(normalizedSpeed, zero));

        float alpha = smoothstep(0.0, 1.0, v_segmentPosition);
        alpha = pow(alpha, 1.5);

        float speedAlpha = mix(0.3, 1.0, speed.a);

        fragColor = vec4(baseColor.rgb, baseColor.a * alpha * speedAlpha);
    } else {
        fragColor = vec4(zero);
    }
}
`;class w{static createCalculateSpeedShader(){return new r.ShaderSource({sources:[Y]})}static createUpdatePositionShader(){return new r.ShaderSource({sources:[q]})}static createPostProcessingPositionShader(){return new r.ShaderSource({sources:[k]})}static createSegmentDrawVertexShader(){return new r.ShaderSource({sources:[X]})}static createSegmentDrawFragmentShader(){return new r.ShaderSource({sources:[K]})}}class T{constructor(e){n(this,"commandType");n(this,"geometry");n(this,"attributeLocations");n(this,"primitiveType");n(this,"uniformMap");n(this,"vertexShaderSource");n(this,"fragmentShaderSource");n(this,"rawRenderState");n(this,"framebuffer");n(this,"outputTexture");n(this,"autoClear");n(this,"preExecute");n(this,"show");n(this,"commandToExecute");n(this,"clearCommand");n(this,"isDynamic");n(this,"uniforms");this.commandType=e.commandType,this.geometry=e.geometry,this.attributeLocations=e.attributeLocations,this.primitiveType=e.primitiveType,this.uniformMap=e.uniformMap||{},this.vertexShaderSource=e.vertexShaderSource,this.fragmentShaderSource=e.fragmentShaderSource,this.rawRenderState=e.rawRenderState,this.framebuffer=e.framebuffer,this.outputTexture=e.outputTexture,this.autoClear=e.autoClear??!1,this.preExecute=e.preExecute,this.show=!0,this.commandToExecute=void 0,this.clearCommand=void 0,this.isDynamic=e.isDynamic??(()=>!0),this.autoClear&&(this.clearCommand=new r.ClearCommand({color:new r.Color(0,0,0,0),depth:1,framebuffer:this.framebuffer,pass:r.Pass.OPAQUE}))}createCommand(e){if(this.commandType==="Draw"){const i=this.geometry instanceof r.VertexArray?this.geometry:r.VertexArray.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:r.BufferUsage.STATIC_DRAW}),t=r.ShaderProgram.fromCache({context:e,vertexShaderSource:this.vertexShaderSource,fragmentShaderSource:this.fragmentShaderSource,attributeLocations:this.attributeLocations}),a=r.RenderState.fromCache(this.rawRenderState);return new r.DrawCommand({owner:this,vertexArray:i,primitiveType:this.primitiveType,modelMatrix:r.Matrix4.IDENTITY,renderState:a,shaderProgram:t,framebuffer:this.framebuffer,uniformMap:this.uniformMap,pass:r.Pass.OPAQUE})}else{if(this.commandType==="Compute")return new r.ComputeCommand({owner:this,fragmentShaderSource:this.fragmentShaderSource,uniformMap:this.uniformMap,outputTexture:this.outputTexture,persists:!0});throw new Error("Unknown command type")}}getComputeCommand(e,i,t){this.fragmentShaderSource=i,this.outputTexture=t;const a=this.createCommand(e);return this.commandToExecute=a,a}getDrawCommand(e,i,t,a,o,c,d){this.vertexShaderSource=i,this.fragmentShaderSource=t,this.rawRenderState=c,d&&(this.attributeLocations=d);const m=this.createCommand(e);return this.commandToExecute=m,m}execute(e){}setUniformMap(e){this.uniformMap=e,this.commandToExecute&&(this.commandToExecute.uniformMap=e)}setGeometry(e,i){this.geometry=i,r.defined(this.commandToExecute)&&(this.commandToExecute.vertexArray=i instanceof r.VertexArray?i:r.VertexArray.fromGeometry({context:e,geometry:this.geometry,attributeLocations:this.attributeLocations,bufferUsage:r.BufferUsage.STATIC_DRAW}))}update(e){this.isDynamic()&&(!this.show||!r.defined(e)||(r.defined(this.commandToExecute)||(this.commandToExecute=this.createCommand(e.context)),r.defined(this.preExecute)&&this.preExecute(),e.commandList&&(r.defined(this.clearCommand)&&e.commandList.push(this.clearCommand),r.defined(this.commandToExecute)&&e.commandList.push(this.commandToExecute))))}isDestroyed(){return!1}destroy(){var e;return r.defined(this.commandToExecute)&&((e=this.commandToExecute.shaderProgram)==null||e.destroy(),this.commandToExecute.shaderProgram=void 0),r.destroyObject(this)}}class Q{constructor(e,i,t,a,o){n(this,"windData");n(this,"context");n(this,"options");n(this,"viewerParameters");n(this,"scene");n(this,"particlesTextures",{});n(this,"windTextures",{});n(this,"primitives");n(this,"frameRateMonitor");n(this,"frameRateAdjustment",1);n(this,"randomCoefficient",Math.random());n(this,"particlesTextureSize",0);this.context=e,this.windData=i,this.options=t,this.viewerParameters=a,this.scene=o,this.particlesTextureSize=this.options.particlesTextureSize,this.frameRateMonitor=typeof r.FrameRateMonitor<"u"?new r.FrameRateMonitor({scene:this.scene,quietPeriod:.2,samplingWindow:.5}):null,this.createWindTextures(),this.createParticlesTextures(),this.createCalculateSpeedPrimitive(),this.createUpdatePositionPrimitive(),this.createPostProcessingPositionPrimitive()}createWindTextures(){const{width:e,height:i,u:t,v:a}=this.windData,o=this.context.floatingPointTexture,c=new r.Sampler({minificationFilter:r.TextureMinificationFilter.LINEAR,magnificationFilter:r.TextureMagnificationFilter.LINEAR}),d=m=>new r.Texture({context:this.context,width:e,height:i,pixelFormat:r.PixelFormat.RED,pixelDatatype:o?r.PixelDatatype.FLOAT:r.PixelDatatype.UNSIGNED_BYTE,sampler:c,flipY:this.options.flipY,array:m});this.windTextures.U=d(t.array),this.windTextures.V=d(a.array)}createParticlesTextures(){const e=this.context.floatingPointTexture;this.particlesTextureSize=this.options.particlesTextureSize;const i=this.particlesTextureSize;if(i<1)throw new Error("particlesTextureSize must be greater than 0");if(i>r.ContextLimits.maximumTextureSize)throw new Error(`particlesTextureSize must be less than or equal to ${r.ContextLimits.maximumTextureSize}`);const t=new r.Sampler({minificationFilter:r.TextureMinificationFilter.NEAREST,magnificationFilter:r.TextureMagnificationFilter.NEAREST});["previousParticlesPosition","currentParticlesPosition","nextParticlesPosition","postProcessingPosition","particlesSpeed"].forEach(o=>{const c={context:this.context,width:i,height:i,pixelFormat:r.PixelFormat.RGBA,pixelDatatype:e?r.PixelDatatype.FLOAT:r.PixelDatatype.UNSIGNED_BYTE,sampler:t};if(o!=="particlesSpeed"){const d=this.generateRandomArray(this.particlesTextureSize*this.particlesTextureSize*4),m=this.filterArrayByBounds(d);c.array=m}this.particlesTextures[o]=new r.Texture(c)})}filterArrayByBounds(e){const{bounds:i}=this.windData,t=e;for(let a=0;a<t.length;a+=4)t[a]=t[a]*(i.east-i.west)+i.west,t[a+1]=t[a+1]*(i.north-i.south)+i.south,t[a+2]=0,t[a+3]=0;return t}generateRandomArray(e){const i=new Float32Array(e);for(let t=0;t<e;t++)i[t]=Math.random();return i}destroyParticlesTextures(){["previousParticlesPosition","currentParticlesPosition","nextParticlesPosition","postProcessingPosition","particlesSpeed"].forEach(i=>{var t;(t=this.particlesTextures[i])==null||t.destroy()})}updateWindData(e){this.windData=e,this.windTextures.U.destroy(),this.windTextures.V.destroy(),this.createWindTextures()}updateOptions(e){this.options={...this.options,...e}}createCalculateSpeedPrimitive(){var i,t;const e=new T({geometry:this.getComputeTriangle(),appearance:void 0,commandType:"Compute",preExecute:()=>{const a=this.particlesTextures.previousParticlesPosition;this.particlesTextures.previousParticlesPosition=this.particlesTextures.currentParticlesPosition,this.particlesTextures.currentParticlesPosition=this.particlesTextures.postProcessingPosition,this.particlesTextures.postProcessingPosition=a,this.primitives.calculateSpeed.commandToExecute&&(this.primitives.calculateSpeed.commandToExecute.outputTexture=this.particlesTextures.particlesSpeed),this.primitives.postProcessingPosition.commandToExecute&&(this.primitives.postProcessingPosition.commandToExecute.outputTexture=this.particlesTextures.postProcessingPosition),this.randomCoefficient=Math.random()}});e.getComputeCommand(this.context,w.createCalculateSpeedShader(),this.particlesTextures.particlesSpeed),e.execute(e),this.primitives={calculateSpeed:e},this.primitives.calculateSpeed.setUniformMap({U:()=>this.windTextures.U,V:()=>this.windTextures.V,currentParticlesPosition:()=>this.particlesTextures.currentParticlesPosition,uRange:()=>new r.Cartesian2(this.windData.u.min??0,this.windData.u.max??1),vRange:()=>new r.Cartesian2(this.windData.v.min??0,this.windData.v.max??1),speedRange:()=>{var a,o;return new r.Cartesian2(((a=this.windData.speed)==null?void 0:a.min)??0,((o=this.windData.speed)==null?void 0:o.max)??1)},dimension:()=>new r.Cartesian2(this.windData.width,this.windData.height),minimum:()=>new r.Cartesian2(this.windData.bounds.west,this.windData.bounds.south),maximum:()=>new r.Cartesian2(this.windData.bounds.east,this.windData.bounds.north),speedScaleFactor:()=>(this.viewerParameters.pixelSize+50)*this.options.speedFactor,frameRateAdjustment:()=>this.frameRateAdjustment}),(t=(i=this.frameRateMonitor)==null?void 0:i.frameRateChanged)==null||t.addEventListener(this.updateFrameRate,this)}updateFrameRate(e){const i=e.lastFramesPerSecond;i>20&&(this.frameRateAdjustment=60/i)}createUpdatePositionPrimitive(){const e=new T({geometry:this.getComputeTriangle(),appearance:void 0,commandType:"Compute"});e.getComputeCommand(this.context,w.createUpdatePositionShader(),this.particlesTextures.nextParticlesPosition),e.execute(e),this.primitives.updatePosition=e,this.primitives.updatePosition.setUniformMap({currentParticlesPosition:()=>this.particlesTextures.currentParticlesPosition,particlesSpeed:()=>this.particlesTextures.particlesSpeed})}createPostProcessingPositionPrimitive(){const e=new T({geometry:this.getComputeTriangle(),appearance:void 0,commandType:"Compute"});e.getComputeCommand(this.context,w.createPostProcessingPositionShader(),this.particlesTextures.postProcessingPosition),e.execute(e),this.primitives.postProcessingPosition=e,this.primitives.postProcessingPosition.setUniformMap({nextParticlesPosition:()=>this.particlesTextures.nextParticlesPosition,particlesSpeed:()=>this.particlesTextures.particlesSpeed,lonRange:()=>this.viewerParameters.lonRange,latRange:()=>this.viewerParameters.latRange,dataLonRange:()=>new r.Cartesian2(this.windData.bounds.west,this.windData.bounds.east),dataLatRange:()=>new r.Cartesian2(this.windData.bounds.south,this.windData.bounds.north),randomCoefficient:()=>this.randomCoefficient,dropRate:()=>this.options.dropRate,dropRateBump:()=>this.options.dropRateBump,useViewerBounds:()=>this.options.useViewerBounds})}getComputeTriangle(){return{attributes:{position:{vertexBuffer:{usage:35044,sizeInBytes:24,copyFromView:()=>new Float32Array([-1,-1,3,-1,-1,3])},componentsPerAttribute:2,normalize:!1,offsetInBytes:0,strideInBytes:0,indexDatatype:void 0,instanceDivisor:void 0}},primitiveType:4,_workerName:"createPlaneGeometry"}}destroy(){var e,i,t;(i=(e=this.frameRateMonitor)==null?void 0:e.frameRateChanged)==null||i.removeEventListener(this.updateFrameRate,this),(t=this.frameRateMonitor)==null||t.destroy(),Object.keys(this.windTextures).forEach(a=>{this.windTextures[a].destroy()}),Object.keys(this.particlesTextures).forEach(a=>{var o;(o=this.particlesTextures[a])==null||o.destroy()})}}class ${constructor(e,i,t,a){n(this,"context");n(this,"options");n(this,"viewerParameters");n(this,"computing");n(this,"segmentBuffers",{});n(this,"renderState");n(this,"primitives");n(this,"colorTable",null);n(this,"particlesTextureSize",0);n(this,"segmentsCount",0);this.context=e,this.options=i,this.viewerParameters=t,this.computing=a,this.particlesTextureSize=this.options.particlesTextureSize,this.createColorTable(),this.createSegmentsBuffers(),this.createRenderState(),this.createSegmentDrawPrimitive()}createColorTable(){const e=this.options.colors,i=e.length,t=new Float32Array(i*4);for(let o=0;o<i;o++){const c=r.Color.fromCssColorString(e[o]);t[o*4]=c.red,t[o*4+1]=c.green,t[o*4+2]=c.blue,t[o*4+3]=1}const a=this.context.floatingPointTexture;this.colorTable=new r.Texture({context:this.context,width:i,height:1,pixelFormat:r.PixelFormat.RGBA,pixelDatatype:a?r.PixelDatatype.FLOAT:r.PixelDatatype.UNSIGNED_BYTE,array:t,sampler:new r.Sampler({minificationFilter:r.TextureMinificationFilter.LINEAR,magnificationFilter:r.TextureMagnificationFilter.LINEAR})})}createSegmentsBuffers(){this.particlesTextureSize=this.options.particlesTextureSize;const e=this.particlesTextureSize*this.particlesTextureSize;this.segmentsCount=e*4;const i=new Float32Array(this.segmentsCount*2),t=new Float32Array(this.segmentsCount*3),a=new Uint32Array(e*6);for(let m=0;m<e;++m){const P=m%this.particlesTextureSize/this.particlesTextureSize,l=Math.floor(m/this.particlesTextureSize)/this.particlesTextureSize,s=m*4,f=[[-1,-1,0],[-1,1,0],[1,-1,0],[1,1,0]];for(let u=0;u<4;++u){const y=(s+u)*2;i[y]=P,i[y+1]=l;const v=(s+u)*3;t[v]=f[u][0],t[v+1]=f[u][1],t[v+2]=f[u][2]}const h=m*6;a[h]=s,a[h+1]=s+1,a[h+2]=s+2,a[h+3]=s+1,a[h+4]=s+3,a[h+5]=s+2}const o=this.computing.windData.bounds,c=r.Cartesian3.fromDegrees((o.west+o.east)/2,(o.south+o.north)/2,this.options.particleHeight),d=r.Cartesian3.distance(r.Cartesian3.fromDegrees(o.west,o.south,this.options.particleHeight),c);this.segmentBuffers.geometry=new r.Geometry({attributes:{st:new r.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:i}),normal:new r.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})},indices:a,primitiveType:r.PrimitiveType.TRIANGLES,boundingSphere:new r.BoundingSphere(c,d)})}createRenderState(){this.renderState=r.RenderState.fromCache({cull:{enabled:!1},depthTest:{enabled:!1},depthMask:!1,blending:{enabled:!0,equationRgb:WebGL2RenderingContext.FUNC_ADD,equationAlpha:WebGL2RenderingContext.FUNC_ADD,functionSourceRgb:WebGL2RenderingContext.SRC_ALPHA,functionSourceAlpha:WebGL2RenderingContext.SRC_ALPHA,functionDestinationRgb:WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,functionDestinationAlpha:WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA}})}onParticlesTextureSizeChange(){var e;this.destroySegmentsBuffers(),this.createSegmentsBuffers(),(e=this.primitives)!=null&&e.segments&&this.primitives.segments.setGeometry(this.context,this.segmentBuffers.geometry)}destroySegmentsBuffers(){this.segmentBuffers.geometry=null}updateOptions(e){var i;this.options={...this.options,...e},e.colors&&((i=this.colorTable)==null||i.destroy(),this.createColorTable())}createSegmentDrawPrimitive(){const e=new T({geometry:this.segmentBuffers.geometry,appearance:void 0,commandType:"Draw",attributeLocations:{st:0,normal:1},primitiveType:r.PrimitiveType.TRIANGLES});e.getDrawCommand(this.context,w.createSegmentDrawVertexShader(),w.createSegmentDrawFragmentShader(),this.segmentsCount,null,this.renderState),this.primitives={segments:e};const i={previousParticlesPosition:()=>this.computing.particlesTextures.previousParticlesPosition,currentParticlesPosition:()=>this.computing.particlesTextures.currentParticlesPosition,postProcessingPosition:()=>this.computing.particlesTextures.postProcessingPosition,particlesSpeed:()=>this.computing.particlesTextures.particlesSpeed,colorTable:()=>this.colorTable,lineWidth:()=>{const t=this.options.lineWidth;return new r.Cartesian2(t.min,t.max)},lineLength:()=>{const t=this.options.lineLength;return new r.Cartesian2(t.min,t.max)},particleHeight:()=>this.options.particleHeight,frameRateAdjustment:()=>this.computing.frameRateAdjustment,aspect:()=>this.context.drawingBufferWidth/this.context.drawingBufferHeight,pixelSize:()=>this.viewerParameters.pixelSize,domain:()=>{const t=this.computing.windData.speed;return t?new r.Cartesian2(t.min??0,t.max??1):new r.Cartesian2(0,1)},is3D:()=>this.viewerParameters.sceneMode===r.SceneMode.SCENE3D,displayRange:()=>{const t=this.options.displayRange,a=this.computing.windData.speed;return new r.Cartesian2((t==null?void 0:t.min)??(a==null?void 0:a.min)??0,(t==null?void 0:t.max)??(a==null?void 0:a.max)??1)}};this.primitives.segments.setUniformMap(i)}destroy(){var e;this.destroySegmentsBuffers(),(e=this.colorTable)==null||e.destroy()}}function R(p,e){if(!p)return e;if(!e)return p;const i={...e};for(const t in p)if(Object.prototype.hasOwnProperty.call(p,t)){const a=p[t],o=e[t];if(Array.isArray(a)){i[t]=a.slice();continue}if(a&&typeof a=="object"){i[t]=R(a,o||{});continue}a!==void 0&&(i[t]=a)}return i}class J{constructor(e,i,t,a,o){n(this,"computing");n(this,"rendering");n(this,"options");n(this,"viewerParameters");n(this,"context");this.context=e,this.options=t,this.viewerParameters=a,this.computing=new Q(e,i,t,a,o),this.rendering=new $(e,t,a,this.computing)}getPrimitives(){return[this.computing.primitives.calculateSpeed,this.computing.primitives.updatePosition,this.computing.primitives.postProcessingPosition,this.rendering.primitives.segments]}changeOptions(e){let i=!1;e.particlesTextureSize&&this.options.particlesTextureSize!==e.particlesTextureSize&&(i=!0);const t=R(e,this.options);if(t.particlesTextureSize<1)throw new Error("particlesTextureSize must be greater than 0");this.options=t,this.rendering.updateOptions(e),this.computing.updateOptions(e),i&&(this.computing.destroyParticlesTextures(),this.computing.createParticlesTextures(),this.rendering.onParticlesTextureSizeChange())}applyViewerParameters(e){this.viewerParameters=e,this.computing.viewerParameters=e,this.rendering.viewerParameters=e}destroy(){this.computing.destroy(),this.rendering.destroy()}}const Z={particlesTextureSize:100,dropRate:.003,particleHeight:1e3,dropRateBump:.01,speedFactor:1,lineWidth:{min:1,max:2},lineLength:{min:20,max:100},colors:["white"],flipY:!1,useViewerBounds:!1,domain:void 0,displayRange:void 0,dynamic:!0},C=class C{constructor(e,i,t){n(this,"_show",!0);n(this,"windData");n(this,"viewer");n(this,"scene");n(this,"options");n(this,"particleSystem");n(this,"viewerParameters");n(this,"_isDestroyed",!1);n(this,"primitives",[]);n(this,"eventListeners",new Map);n(this,"_boundUpdateViewerParameters");n(this,"_prevPercentageChanged");this.show=!0,this.viewer=e,this.scene=e.scene,this.options={...C.defaultOptions,...t},this.windData=this.processWindData(i),this.viewerParameters={lonRange:new r.Cartesian2(-180,180),latRange:new r.Cartesian2(-90,90),pixelSize:1e3,sceneMode:this.scene.mode},this.updateViewerParameters(),this.particleSystem=new J(this.scene.context,this.windData,this.options,this.viewerParameters,this.scene),this.add(),this.setupEventListeners()}get show(){return this._show}set show(e){this._show!==e&&(this._show=e,this.updatePrimitivesVisibility(e))}setupEventListeners(){this._boundUpdateViewerParameters=this.updateViewerParameters.bind(this),this._prevPercentageChanged=this.viewer.camera.percentageChanged,this.viewer.camera.percentageChanged=.01,this.viewer.camera.changed.addEventListener(this._boundUpdateViewerParameters),this.scene.morphComplete.addEventListener(this._boundUpdateViewerParameters),window.addEventListener("resize",this._boundUpdateViewerParameters)}removeEventListeners(){this.viewer.camera.changed.removeEventListener(this._boundUpdateViewerParameters),this._prevPercentageChanged!==void 0&&(this.viewer.camera.percentageChanged=this._prevPercentageChanged),this.scene.morphComplete.removeEventListener(this._boundUpdateViewerParameters),window.removeEventListener("resize",this._boundUpdateViewerParameters)}processWindData(e){var i,t;if(((i=e.speed)==null?void 0:i.min)===void 0||((t=e.speed)==null?void 0:t.max)===void 0||e.speed.array===void 0){const a={array:new Float32Array(e.u.array.length),min:Number.MAX_VALUE,max:Number.MIN_VALUE};for(let o=0;o<e.u.array.length;o++)a.array[o]=Math.sqrt(e.u.array[o]*e.u.array[o]+e.v.array[o]*e.v.array[o]),a.array[o]!==0&&(a.min=Math.min(a.min,a.array[o]),a.max=Math.max(a.max,a.array[o]));e={...e,speed:a}}return e}getDataAtLonLat(e,i){const{bounds:t,width:a,height:o,u:c,v:d,speed:m}=this.windData,{flipY:P}=this.options;if(e<t.west||e>t.east||i<t.south||i>t.north)return null;const l=(e-t.west)/(t.east-t.west)*(a-1);let s=(i-t.south)/(t.north-t.south)*(o-1);P&&(s=o-1-s);const f=Math.floor(l),h=Math.floor(s),u=Math.floor(l),y=Math.min(u+1,a-1),v=Math.floor(s),S=Math.min(v+1,o-1),g=l-u,x=s-v,L=h*a+f,A=v*a+u,E=v*a+y,z=S*a+u,M=S*a+y,F=c.array[A],I=c.array[E],V=c.array[z],U=c.array[M],D=(1-g)*(1-x)*F+g*(1-x)*I+(1-g)*x*V+g*x*U,B=d.array[A],N=d.array[E],j=d.array[z],O=d.array[M],b=(1-g)*(1-x)*B+g*(1-x)*N+(1-g)*x*j+g*x*O,W=Math.sqrt(D*D+b*b);return{original:{u:c.array[L],v:d.array[L],speed:m.array[L]},interpolated:{u:D,v:b,speed:W}}}updateViewerParameters(){var P;const e=this.viewer.scene,i=e.canvas,t=[{x:0,y:0},{x:0,y:i.clientHeight},{x:i.clientWidth,y:0},{x:i.clientWidth,y:i.clientHeight}];let a=180,o=-180,c=90,d=-90,m=!1;for(const l of t){const s=e.camera.pickEllipsoid(new r.Cartesian2(l.x,l.y),e.globe.ellipsoid);if(!s){m=!0;break}const f=e.globe.ellipsoid.cartesianToCartographic(s),h=r.Math.toDegrees(f.longitude),u=r.Math.toDegrees(f.latitude);a=Math.min(a,h),o=Math.max(o,h),c=Math.min(c,u),d=Math.max(d,u)}if(!m){const l=new r.Cartesian2(Math.max(this.windData.bounds.west,a),Math.min(this.windData.bounds.east,o)),s=new r.Cartesian2(Math.max(this.windData.bounds.south,c),Math.min(this.windData.bounds.north,d)),f=(l.y-l.x)*.05,h=(s.y-s.x)*.05;l.x=Math.max(this.windData.bounds.west,l.x-f),l.y=Math.min(this.windData.bounds.east,l.y+f),s.x=Math.max(this.windData.bounds.south,s.x-h),s.y=Math.min(this.windData.bounds.north,s.y+h),this.viewerParameters.lonRange=l,this.viewerParameters.latRange=s;const u=this.windData.bounds.east-this.windData.bounds.west,y=this.windData.bounds.north-this.windData.bounds.south,v=(l.y-l.x)/u,S=(s.y-s.x)/y,x=1e3*Math.min(v,S);x>0&&(this.viewerParameters.pixelSize=Math.max(0,Math.min(1e3,x)))}this.viewerParameters.sceneMode=this.scene.mode,(P=this.particleSystem)==null||P.applyViewerParameters(this.viewerParameters)}updateWindData(e){this._isDestroyed||(this.windData=this.processWindData(e),this.particleSystem.computing.updateWindData(this.windData),this.viewer.scene.requestRender(),this.dispatchEvent("dataChange",this.windData))}updateOptions(e){this._isDestroyed||(this.options=R(e,this.options),this.particleSystem.changeOptions(e),this.viewer.scene.requestRender(),this.dispatchEvent("optionsChange",this.options))}zoomTo(e=0){if(this.windData.bounds){const i=r.Rectangle.fromDegrees(this.windData.bounds.west,this.windData.bounds.south,this.windData.bounds.east,this.windData.bounds.north);this.viewer.camera.flyTo({destination:i,duration:e})}}add(){this.primitives=this.particleSystem.getPrimitives(),this.primitives.forEach(e=>{this.scene.primitives.add(e)})}remove(){this.primitives.forEach(e=>{this.scene.primitives.remove(e)}),this.primitives=[]}isDestroyed(){return this._isDestroyed}destroy(){this.remove(),this.removeEventListeners(),this.particleSystem.destroy(),this.eventListeners.clear(),this._isDestroyed=!0}updatePrimitivesVisibility(e){const i=e!==void 0?e:this._show;this.primitives.forEach(t=>{t.show=i})}addEventListener(e,i){var t;this.eventListeners.has(e)||this.eventListeners.set(e,new Set),(t=this.eventListeners.get(e))==null||t.add(i)}removeEventListener(e,i){var t;(t=this.eventListeners.get(e))==null||t.delete(i)}dispatchEvent(e,i){var t;(t=this.eventListeners.get(e))==null||t.forEach(a=>a(i))}};n(C,"defaultOptions",Z);let _=C;export{Z as DefaultOptions,_ as WindLayer};
