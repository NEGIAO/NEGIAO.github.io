import{g}from"./getCesium-6L1FaWum.js";const l=g();class S{constructor(e,t={}){this.viewer=e,this.size=t.size||1024,this.temporalAlpha=t.temporalAlpha??.01,this.varianceGamma=t.varianceGamma??1,this._gl=null,this._program=null,this._fbo=null,this._outTex=null,this._historyTex=null,this._useFloatRT=!0,this._preRenderListener=null,this.inputTexture=null,this.depthVelocityTexture=null,this._prevCamPos=null,this._prevCamDir=null,this._motionAlpha=this.temporalAlpha}setInputTextures(e,t){this.inputTexture=e,this.depthVelocityTexture=t}getTexture(){return!this._gl||!this._outTex||!this._historyTex?null:{_texture:this._historyTex,_textureTarget:this._gl.TEXTURE_2D,_target:this._gl.TEXTURE_2D}}_createTexture(){const e=this._gl,t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),this._useFloatRT?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,this.size,this.size,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.size,this.size,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null),t}createRT(){const e=this._gl;if(!e)return;e.getExtension("EXT_color_buffer_float"),e.getExtension("OES_texture_half_float_linear"),this._useFloatRT=!0;const t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t);try{e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,4,4,0,e.RGBA,e.HALF_FLOAT,null)}catch{this._useFloatRT=!1}e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(t),this._outTex&&e.deleteTexture(this._outTex),this._historyTex&&e.deleteTexture(this._historyTex),this._fbo&&e.deleteFramebuffer(this._fbo),this._outTex=this._createTexture(),this._historyTex=this._createTexture(),this._fbo=e.createFramebuffer()}getVertexShader(){return`#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}`}getFragmentShader(){return`#version 300 es
precision highp float;

uniform sampler2D u_inputBuffer;
uniform sampler2D u_depthVelocityBuffer;
uniform sampler2D u_historyBuffer;

uniform vec2 u_texelSize;
uniform float u_varianceGamma;
uniform float u_temporalAlpha;

in vec2 v_uv;
out vec4 out_color;

vec4 clipAABB(const vec4 current, const vec4 history, const vec4 minColor, const vec4 maxColor) {
  vec3 pClip = 0.5 * (maxColor.rgb + minColor.rgb);
  vec3 eClip = 0.5 * (maxColor.rgb - minColor.rgb) + 1e-7;
  vec4 vClip = history - vec4(pClip, current.a);
  vec3 vUnit = vClip.xyz / eClip;
  vec3 aUnit = abs(vUnit);
  float maUnit = max(aUnit.x, max(aUnit.y, aUnit.z));
  if (maUnit > 1.0) {
    return vec4(pClip, current.a) + vClip / maUnit;
  }
  return history;
}

#define ACCUMULATE_VARIANCE(buf, coord, ox, oy) {   vec4 n = textureOffset(buf, coord, ivec2(ox, oy));   moment1 += n; moment2 += n * n; }

vec4 varianceClipping(const sampler2D inputBuffer, const vec2 coord, const vec4 current, const vec4 history, const float gamma) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  ACCUMULATE_VARIANCE(inputBuffer, coord, -1, -1)
  ACCUMULATE_VARIANCE(inputBuffer, coord, -1,  1)
  ACCUMULATE_VARIANCE(inputBuffer, coord,  1, -1)
  ACCUMULATE_VARIANCE(inputBuffer, coord,  1,  1)
  ACCUMULATE_VARIANCE(inputBuffer, coord,  1,  0)
  ACCUMULATE_VARIANCE(inputBuffer, coord,  0, -1)
  ACCUMULATE_VARIANCE(inputBuffer, coord,  0,  1)
  ACCUMULATE_VARIANCE(inputBuffer, coord, -1,  0)
  const float N = 9.0;
  vec4 mean = moment1 / N;
  vec4 vg = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - vg;
  vec4 maxColor = mean + vg;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

#define CHECK_CLOSEST(buf, coord, ox, oy) {   vec4 n = texelFetchOffset(buf, coord, 0, ivec2(ox, oy));   if (n.r < result.r) result = n; }

vec4 getClosestFragment() {
  ivec2 coord = ivec2(gl_FragCoord.xy);
  vec4 result = texelFetch(u_depthVelocityBuffer, coord, 0);
  CHECK_CLOSEST(u_depthVelocityBuffer, coord, -1, -1)
  CHECK_CLOSEST(u_depthVelocityBuffer, coord, -1,  0)
  CHECK_CLOSEST(u_depthVelocityBuffer, coord, -1,  1)
  CHECK_CLOSEST(u_depthVelocityBuffer, coord,  0, -1)
  CHECK_CLOSEST(u_depthVelocityBuffer, coord,  0,  1)
  CHECK_CLOSEST(u_depthVelocityBuffer, coord,  1, -1)
  CHECK_CLOSEST(u_depthVelocityBuffer, coord,  1,  0)
  CHECK_CLOSEST(u_depthVelocityBuffer, coord,  1,  1)
  return result;
}

void main() {
  vec4 current = texture(u_inputBuffer, v_uv);
  vec4 depthVelocity = getClosestFragment();
  vec2 velocityUv = depthVelocity.gb * u_texelSize;
  vec2 prevUv = v_uv - velocityUv;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    out_color = current;
    return;
  }
  vec4 history = texture(u_historyBuffer, prevUv);
  vec4 clipped = varianceClipping(u_inputBuffer, v_uv, current, history, u_varianceGamma);
  out_color = mix(clipped, current, u_temporalAlpha);
}
`}createProgram(){const e=this._gl,t=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(t,this.getVertexShader()),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS)){e.deleteShader(t);return}const r=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(r,this.getFragmentShader()),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){e.deleteShader(t),e.deleteShader(r);return}const i=e.createProgram();if(e.attachShader(i,t),e.attachShader(i,r),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){e.deleteProgram(i),e.deleteShader(t),e.deleteShader(r);return}e.deleteShader(t),e.deleteShader(r),this._program=i}render(){var p,d;const e=this._gl;if(!e||!this._fbo||!this._program||!this._outTex||!this._historyTex||!this.inputTexture||!this.depthVelocityTexture)return;const t=(d=(p=this.viewer)==null?void 0:p.scene)==null?void 0:d.camera;let r=0;if(t){const o=t.positionWC,s=t.directionWC;if(this._prevCamPos){const u=l.Cartesian3.distance(o,this._prevCamPos),A=Math.abs(l.Cartesian3.dot(s,this._prevCamDir)-1);r=Math.min(1,u*.002+A*100)}this._prevCamPos=l.Cartesian3.clone(o,this._prevCamPos),this._prevCamDir=l.Cartesian3.clone(s,this._prevCamDir)}const i=this.temporalAlpha,c=Math.min(1,Math.max(0,r/.01));this._motionAlpha=i+(1-i)*(c*c*(3-2*c));const E=e.getParameter(e.FRAMEBUFFER_BINDING),a=e.getParameter(e.VIEWPORT),v=e.isEnabled(e.BLEND),C=e.isEnabled(e.DEPTH_TEST);e.disable(e.BLEND),e.disable(e.DEPTH_TEST),e.bindFramebuffer(e.FRAMEBUFFER,this._fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this._outTex,0),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.viewport(0,0,this.size,this.size),e.useProgram(this._program);const f=e.getUniformLocation(this._program,"u_texelSize");f&&e.uniform2f(f,1/this.size,1/this.size);const T=e.getUniformLocation(this._program,"u_varianceGamma");T&&e.uniform1f(T,this.varianceGamma);const m=e.getUniformLocation(this._program,"u_temporalAlpha");m&&e.uniform1f(m,this._motionAlpha);let h=0;const _=(o,s)=>{const u=e.getUniformLocation(this._program,o);u!==null&&(e.uniform1i(u,h),e.activeTexture(e.TEXTURE0+h),e.bindTexture(e.TEXTURE_2D,s._texture??s),h++)};_("u_inputBuffer",this.inputTexture),_("u_depthVelocityBuffer",this.depthVelocityTexture),_("u_historyBuffer",{_texture:this._historyTex});const n=e.getAttribLocation(this._program,"a_position");if(n>=0){const o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(n),e.vertexAttribPointer(n,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLES,0,3),e.disableVertexAttribArray(n),e.deleteBuffer(o)}e.bindFramebuffer(e.FRAMEBUFFER,E),e.viewport(a[0],a[1],a[2],a[3]),v&&e.enable(e.BLEND),C&&e.enable(e.DEPTH_TEST);const x=this._historyTex;this._historyTex=this._outTex,this._outTex=x}init(){const e=this.viewer.scene,t=e.context._gl;t&&(this._gl=t,this.createRT(),this.createProgram(),this._preRenderListener=e.preRender.addEventListener(()=>this.render()))}destroy(){this._preRenderListener&&(this._preRenderListener(),this._preRenderListener=null);const e=this._gl;e&&(this._program&&e.deleteProgram(this._program),this._outTex&&e.deleteTexture(this._outTex),this._historyTex&&e.deleteTexture(this._historyTex),this._fbo&&e.deleteFramebuffer(this._fbo)),this._program=null,this._outTex=null,this._historyTex=null,this._fbo=null,this._gl=null}}export{S as ShadowResolvePass};
