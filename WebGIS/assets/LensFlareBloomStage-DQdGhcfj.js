import{g as i}from"./getCesium-6L1FaWum.js";const n=i(),r=`
uniform sampler2D colorTexture;
uniform sampler2D depthTexture;
in vec2 v_textureCoordinates;

uniform vec3 u_cameraPositionWC;
uniform vec3 u_sunDirectionWC;
uniform float u_bottomRadiusMeters;
uniform float u_bloomIntensity;
uniform float u_ghostIntensity;
uniform float u_haloIntensity;

const float SUN_DISTANCE = 1e6;

float raySphereIntersect(vec3 ro, vec3 rd, float radius) {
  float b = dot(ro, rd);
  float c = dot(ro, ro) - radius * radius;
  float d = b * b - c;
  if (d < 0.0) return -1.0;
  return -b - sqrt(d);
}

float getGhost(vec2 uv, vec2 sunUV, float offset, float size) {
  vec2 center = vec2(0.5);
  vec2 sunToCenter = center - sunUV;
  vec2 ghostVec = sunToCenter * offset;
  vec2 ghostPos = center + ghostVec;
  float dist = length(uv - ghostPos);
  return exp(-dist * dist * size);
}

void main() {
  vec4 color = texture(colorTexture, v_textureCoordinates);

  vec4 sunWorld = vec4(u_cameraPositionWC + u_sunDirectionWC * SUN_DISTANCE, 1.0);
  vec4 sunClip = czm_projection * czm_view * sunWorld;
  if (sunClip.w <= 0.0) {
    out_FragColor = color;
    return;
  }
  vec2 sunNDC = sunClip.xy / sunClip.w;
  vec2 sunUV = sunNDC * 0.5 + 0.5;

  bool sunInScreen = sunUV.x >= 0.0 && sunUV.x <= 1.0 && sunUV.y >= 0.0 && sunUV.y <= 1.0;
  if (!sunInScreen) {
    out_FragColor = color;
    return;
  }

  float sunVis = 1.0;
  float tHit = raySphereIntersect(u_cameraPositionWC, u_sunDirectionWC, u_bottomRadiusMeters);
  if (tHit > 0.0 && tHit < SUN_DISTANCE) sunVis = 0.0;
  if (sunVis > 0.0) {
    float depthAtSun = czm_readDepth(depthTexture, sunUV);
    if (depthAtSun < 0.999999) sunVis = 0.0;
  }

  if (sunVis < 0.01) {
    out_FragColor = color;
    return;
  }

  vec2 uv = v_textureCoordinates;
  float ghostSize = 650.0;

  vec3 flare = vec3(0.0);
  flare += getGhost(uv, sunUV, -5.0, ghostSize * 0.5) * vec3(0.8, 0.8, 1.0) * 0.012;
  flare += getGhost(uv, sunUV, -1.5, ghostSize) * vec3(1.0, 0.8, 0.4) * 0.02;
  flare += getGhost(uv, sunUV, -0.4, ghostSize) * vec3(0.9, 1.0, 0.8) * 0.02;
  flare += getGhost(uv, sunUV, -0.2, ghostSize) * vec3(1.0, 0.8, 0.4) * 0.025;
  flare += getGhost(uv, sunUV, -0.1, ghostSize) * vec3(0.9, 0.7, 0.7) * 0.025;
  flare += getGhost(uv, sunUV, 0.7, ghostSize) * vec3(0.5, 1.0, 0.4) * 0.015;
  flare += getGhost(uv, sunUV, 1.0, ghostSize) * vec3(0.5, 0.5, 0.5) * 0.02;
  flare += getGhost(uv, sunUV, 2.5, ghostSize) * vec3(1.0, 1.0, 0.6) * 0.02;
  flare += getGhost(uv, sunUV, 10.0, ghostSize * 0.5) * vec3(0.5, 0.8, 1.0) * 0.01;

  float bloom = exp(-length(uv - sunUV) * 28.0) * 0.25;
  flare += bloom * vec3(1.0, 0.9, 0.8);
  flare *= sunVis * u_ghostIntensity;

  float haloVal = exp(-length(uv - sunUV) * 12.0) * 0.15 * sunVis * u_haloIntensity;
  vec3 halo = vec3(1.0, 0.98, 0.95) * haloVal;

  vec3 bloomSample = texture(colorTexture, sunUV).rgb;
  float bloomMask = exp(-length(uv - sunUV) * 15.0) * sunVis * u_bloomIntensity;
  vec3 bloomEffect = bloomSample * bloomMask;

  // Screen blend: 1 - (1-base)*(1-effect), prevents over-saturation
  vec3 totalEffect = flare + halo + bloomEffect;
  color.rgb = 1.0 - (1.0 - color.rgb) * (1.0 - totalEffect);

  out_FragColor = color;
}
`;class l{constructor(t,e={}){this.viewer=t,this.bloomIntensity=e.bloomIntensity??.01,this.ghostIntensity=e.ghostIntensity??.001,this.haloIntensity=e.haloIntensity??.001,this.bottomRadiusMeters=e.bottomRadiusMeters??6371e3,this.stage=null,this._gui=null}createGUI(){if(this._gui)return;const t=typeof window<"u"&&window.dat?window.dat:null;if(!(t!=null&&t.GUI))return;this._gui=new t.GUI({name:"Lens Flare"});const e=this._gui.addFolder("Lens Flare");e.add(this,"bloomIntensity",0,5,.001).name("bloomIntensity"),e.add(this,"ghostIntensity",0,5,.001).name("ghostIntensity"),e.add(this,"haloIntensity",0,5,.001).name("haloIntensity"),e.open()}init(){if(this.stage)return;const t=this.viewer.scene,e=this;this.stage=new n.PostProcessStage({name:"LensFlareBloom",fragmentShader:r,uniforms:{u_cameraPositionWC:()=>e.viewer.camera.positionWC.clone(),u_sunDirectionWC:()=>{var s,o;return(((o=(s=t.context)==null?void 0:s.uniformState)==null?void 0:o.sunDirectionWC)??new n.Cartesian3(1,0,0)).clone()},u_bottomRadiusMeters:()=>e.bottomRadiusMeters,u_bloomIntensity:()=>e.bloomIntensity,u_ghostIntensity:()=>e.ghostIntensity,u_haloIntensity:()=>e.haloIntensity}}),t.postProcessStages.add(this.stage)}setBloomIntensity(t){this.bloomIntensity=t}setGhostIntensity(t){this.ghostIntensity=t}setHaloIntensity(t){this.haloIntensity=t}destroy(){this._gui&&(this._gui.destroy(),this._gui=null),this.stage&&this.viewer.scene.postProcessStages&&(this.viewer.scene.postProcessStages.remove(this.stage),this.stage=null)}}export{l as LensFlareBloomStage};
