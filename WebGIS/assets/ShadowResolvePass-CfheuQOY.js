import{g}from"./getCesium-6L1FaWum.js";const l=g();class S{constructor(e,r={}){this.viewer=e,this.size=r.size||1024,this.temporalAlpha=r.temporalAlpha??.01,this.varianceGamma=r.varianceGamma??1,this.updateInterval=Math.max(1,Number(r.updateInterval)||1),this.enabled=r.enabled!==!1,this._renderFrame=0,this._gl=null,this._program=null,this._fbo=null,this._outTex=null,this._historyTex=null,this._vbo=null,this._locations=null,this._useFloatRT=!0,this._preRenderListener=null,this.inputTexture=null,this.depthVelocityTexture=null,this._prevCamPos=null,this._prevCamDir=null,this._motionAlpha=this.temporalAlpha}setInputTextures(e,r){this.inputTexture=e,this.depthVelocityTexture=r}getTexture(){return!this._gl||!this._outTex||!this._historyTex?null:{_texture:this._historyTex,_textureTarget:this._gl.TEXTURE_2D,_target:this._gl.TEXTURE_2D}}_createTexture(){const e=this._gl,r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),this._useFloatRT?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,this.size,this.size,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.size,this.size,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null),r}createRT(){const e=this._gl;if(!e)return;e.getExtension("EXT_color_buffer_float"),e.getExtension("OES_texture_half_float_linear"),this._useFloatRT=!0;const r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);try{e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,4,4,0,e.RGBA,e.HALF_FLOAT,null)}catch{this._useFloatRT=!1}e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(r),this._outTex&&e.deleteTexture(this._outTex),this._historyTex&&e.deleteTexture(this._historyTex),this._fbo&&e.deleteFramebuffer(this._fbo),this._outTex=this._createTexture(),this._historyTex=this._createTexture(),this._fbo=e.createFramebuffer()}getVertexShader(){return`#version 300 es
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
`}createProgram(){const e=this._gl,r=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(r,this.getVertexShader()),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){e.deleteShader(r);return}const t=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(t,this.getFragmentShader()),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS)){e.deleteShader(r),e.deleteShader(t);return}const i=e.createProgram();if(e.attachShader(i,r),e.attachShader(i,t),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){e.deleteProgram(i),e.deleteShader(r),e.deleteShader(t);return}e.deleteShader(r),e.deleteShader(t),this._program=i,this._locations={texelSize:e.getUniformLocation(i,"u_texelSize"),varianceGamma:e.getUniformLocation(i,"u_varianceGamma"),temporalAlpha:e.getUniformLocation(i,"u_temporalAlpha"),inputBuffer:e.getUniformLocation(i,"u_inputBuffer"),depthVelocityBuffer:e.getUniformLocation(i,"u_depthVelocityBuffer"),historyBuffer:e.getUniformLocation(i,"u_historyBuffer"),position:e.getAttribLocation(i,"a_position")}}render(e=!1){var T,p;if(!this.enabled&&!e)return;const r=Math.max(1,Number(this.updateInterval)||1);if(!e&&r>1&&this._renderFrame++%r!==0)return;const t=this._gl;if(!t||!this._fbo||!this._program||!this._outTex||!this._historyTex||!this.inputTexture||!this.depthVelocityTexture)return;const i=(p=(T=this.viewer)==null?void 0:T.scene)==null?void 0:p.camera;let f=0;if(i){const s=i.positionWC,a=i.directionWC;if(this._prevCamPos){const x=l.Cartesian3.distance(s,this._prevCamPos),C=Math.abs(l.Cartesian3.dot(a,this._prevCamDir)-1);f=Math.min(1,x*.002+C*100)}this._prevCamPos=l.Cartesian3.clone(s,this._prevCamPos),this._prevCamDir=l.Cartesian3.clone(a,this._prevCamDir)}const m=this.temporalAlpha,h=Math.min(1,Math.max(0,f/.01));this._motionAlpha=m+(1-m)*(h*h*(3-2*h));const d=t.getParameter(t.FRAMEBUFFER_BINDING),n=t.getParameter(t.VIEWPORT),v=t.isEnabled(t.BLEND),E=t.isEnabled(t.DEPTH_TEST);t.disable(t.BLEND),t.disable(t.DEPTH_TEST),t.bindFramebuffer(t.FRAMEBUFFER,this._fbo),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this._outTex,0),t.drawBuffers([t.COLOR_ATTACHMENT0]),t.viewport(0,0,this.size,this.size),t.useProgram(this._program);const o=this._locations||{};o.texelSize&&t.uniform2f(o.texelSize,1/this.size,1/this.size),o.varianceGamma&&t.uniform1f(o.varianceGamma,this.varianceGamma),o.temporalAlpha&&t.uniform1f(o.temporalAlpha,this._motionAlpha);let _=0;const c=(s,a)=>{s!=null&&(t.uniform1i(s,_),t.activeTexture(t.TEXTURE0+_),t.bindTexture(t.TEXTURE_2D,a._texture??a),_++)};c(o.inputBuffer,this.inputTexture),c(o.depthVelocityBuffer,this.depthVelocityTexture),c(o.historyBuffer,{_texture:this._historyTex});const u=o.position??-1;u>=0&&this._vbo&&(t.bindBuffer(t.ARRAY_BUFFER,this._vbo),t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0),t.drawArrays(t.TRIANGLES,0,3),t.disableVertexAttribArray(u),t.bindBuffer(t.ARRAY_BUFFER,null)),t.bindFramebuffer(t.FRAMEBUFFER,d),t.viewport(n[0],n[1],n[2],n[3]),v&&t.enable(t.BLEND),E&&t.enable(t.DEPTH_TEST);const A=this._historyTex;this._historyTex=this._outTex,this._outTex=A}init(){const e=this.viewer.scene,r=e.context._gl;r&&(this._gl=r,this.createRT(),this.createProgram(),this._vbo=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this._vbo),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),this._preRenderListener=e.preRender.addEventListener(()=>this.render()))}destroy(){this._preRenderListener&&(this._preRenderListener(),this._preRenderListener=null);const e=this._gl;e&&(this._program&&e.deleteProgram(this._program),this._outTex&&e.deleteTexture(this._outTex),this._historyTex&&e.deleteTexture(this._historyTex),this._fbo&&e.deleteFramebuffer(this._fbo),this._vbo&&e.deleteBuffer(this._vbo)),this._program=null,this._outTex=null,this._historyTex=null,this._vbo=null,this._locations=null,this._fbo=null,this._gl=null}}export{S as ShadowResolvePass};
