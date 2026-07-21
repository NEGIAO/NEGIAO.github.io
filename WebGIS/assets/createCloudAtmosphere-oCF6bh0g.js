const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CloudShadowPass-BOrPom-c.js","./getCesium-6L1FaWum.js","./ShadowResolvePass-DxqxB0I-.js"])))=>i.map(i=>d[i]);
import{_ as $}from"./vendor-runtime-Dp1pzeXC.js";import{g as V}from"./getCesium-6L1FaWum.js";import{w as oe,F as ie,N as se,R as X,L as q,x as ce}from"./vendor-three-Dm5RPYnA.js";const K=1/1e3,z={TRANSMITTANCE_TEXTURE_WIDTH:256,TRANSMITTANCE_TEXTURE_HEIGHT:64,SCATTERING_TEXTURE_R_SIZE:32,SCATTERING_TEXTURE_MU_SIZE:128,SCATTERING_TEXTURE_MU_S_SIZE:32,SCATTERING_TEXTURE_NU_SIZE:8,SCATTERING_TEXTURE_WIDTH:256,SCATTERING_TEXTURE_HEIGHT:128,SCATTERING_TEXTURE_DEPTH:32,IRRADIANCE_TEXTURE_WIDTH:64,IRRADIANCE_TEXTURE_HEIGHT:16,METER_TO_LENGTH_UNIT:1/1e3};function ue(c={}){const{useHalfFloat:e=!1,output:t=null}=c,r=z,a=[`#define TRANSMITTANCE_TEXTURE_WIDTH ${r.TRANSMITTANCE_TEXTURE_WIDTH}`,`#define TRANSMITTANCE_TEXTURE_HEIGHT ${r.TRANSMITTANCE_TEXTURE_HEIGHT}`,`#define SCATTERING_TEXTURE_R_SIZE ${r.SCATTERING_TEXTURE_R_SIZE}`,`#define SCATTERING_TEXTURE_MU_SIZE ${r.SCATTERING_TEXTURE_MU_SIZE}`,`#define SCATTERING_TEXTURE_MU_S_SIZE ${r.SCATTERING_TEXTURE_MU_S_SIZE}`,`#define SCATTERING_TEXTURE_NU_SIZE ${r.SCATTERING_TEXTURE_NU_SIZE}`,`#define IRRADIANCE_TEXTURE_WIDTH ${r.IRRADIANCE_TEXTURE_WIDTH}`,`#define IRRADIANCE_TEXTURE_HEIGHT ${r.IRRADIANCE_TEXTURE_HEIGHT}`];return e&&a.push("#define TRANSMITTANCE_PRECISION_LOG 1"),t!=null&&a.push(`#define OUTPUT ${t}`),a.join(`
`)}function le(c){const e={};for(const[t,r]of Object.entries(c))Array.isArray(r)?e[`ATMOSPHERE.${t}`]=r:r&&typeof r=="object"&&r.layers?r.layers.forEach((a,o)=>{for(const[i,n]of Object.entries(a))e[`ATMOSPHERE.${t}.layers[${o}].${i}`]=n}):e[`ATMOSPHERE.${t}`]=r;return e}function de(c){return c*Math.PI/180}const me=[.2126,.7152,.0722];function he(c,e){return c[0]*e[0]+c[1]*e[1]+c[2]*e[2]}function G(c,e,t,r,a){this.width=c,this.expTerm=e,this.expScale=t,this.linearTerm=r,this.constantTerm=a}G.prototype.toUniform=function(){return{width:this.width,exp_term:this.expTerm,exp_scale:this.expScale,linear_term:this.linearTerm,constant_term:this.constantTerm}};function W(){this.bottomRadius=6371030,this.topRadius=642e4,this.sunAngularRadius=.004675,this.solarIrradiance=[1.474,1.8504,1.91198],this.rayleighDensity=[new G(0,0,0,0,0),new G(0,1,-.125,0,0)],this.rayleighScattering=[.005802,.013558,.0331],this.mieDensity=[new G(0,0,0,0,0),new G(0,1,-.833333,0,0)],this.mieScattering=[.003996,.003996,.003996],this.mieExtinction=[.00444,.00444,.00444],this.miePhaseFunctionG=.8,this.absorptionDensity=[new G(25,0,0,1/15,-2/3),new G(0,0,0,-1/15,8/3)],this.absorptionExtinction=[65e-5,.001881,85e-6],this.groundAlbedo=[.1,.1,.1],this.muSMin=Math.cos(de(120)),this.sunRadianceToLuminance=[98242.786222,69954.398112,66475.012354],this.skyRadianceToLuminance=[114974.916437,71305.954816,65310.548555];const c=this.sunRadianceToLuminance,e=he(me,c);this.sunRadianceToRelativeLuminance=c.map(t=>t/e),this.skyRadianceToRelativeLuminance=this.skyRadianceToLuminance.map(t=>t/e)}W.prototype.toUniform=function(){return{solar_irradiance:this.solarIrradiance,sun_angular_radius:this.sunAngularRadius,bottom_radius:this.bottomRadius*K,top_radius:this.topRadius*K,rayleigh_density:{layers:this.rayleighDensity.map(c=>c.toUniform())},rayleigh_scattering:this.rayleighScattering,mie_density:{layers:this.mieDensity.map(c=>c.toUniform())},mie_scattering:this.mieScattering,mie_extinction:this.mieExtinction,mie_phase_function_g:this.miePhaseFunctionG,absorption_density:{layers:this.absorptionDensity.map(c=>c.toUniform())},absorption_extinction:this.absorptionExtinction,ground_albedo:this.groundAlbedo,mu_s_min:this.muSMin}};V();const C=z;function _e(c){const e=(c&32768)>>15,t=(c&31744)>>10,r=c&1023;return t===0?(e?-1:1)*(r?Math.pow(2,-14)*(r/1024):0):t===31?r?Number.NaN:e?-1/0:1/0:(e?-1:1)*Math.pow(2,t-15)*(1+r/1024)}function H(c){const e=new Uint16Array(c),t=e.length,r=new Float32Array(t);for(let a=0;a<t;a++)r[a]=_e(e[a]);return r}function B(c){return fetch(c).then(e=>{if(!e.ok)throw new Error(`Failed to load ${c}: ${e.status}`);return e.arrayBuffer()})}async function J(c,e,t){const r=c.replace(/\/?$/,"/"),[a,o,i,n,s]=await Promise.all([B(r+"transmittance.bin"),B(r+"irradiance.bin"),B(r+"scattering.bin"),B(r+"single_mie_scattering.bin"),B(r+"higher_order_scattering.bin")]),d=C.TRANSMITTANCE_TEXTURE_WIDTH,m=C.TRANSMITTANCE_TEXTURE_HEIGHT,f=C.IRRADIANCE_TEXTURE_WIDTH,p=C.IRRADIANCE_TEXTURE_HEIGHT,T=C.SCATTERING_TEXTURE_WIDTH,l=C.SCATTERING_TEXTURE_HEIGHT,w=C.SCATTERING_TEXTURE_DEPTH,h=C.SCATTERING_TEXTURE_WIDTH,y=C.SCATTERING_TEXTURE_HEIGHT,S=C.SCATTERING_TEXTURE_DEPTH,u=C.SCATTERING_TEXTURE_WIDTH,_=C.SCATTERING_TEXTURE_HEIGHT,I=C.SCATTERING_TEXTURE_DEPTH,N=H(a),g=H(o),v=H(i),b=H(n),L=H(s),O=new t.Texture({context:e,width:d,height:m,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{arrayBufferView:N,width:d,height:m},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE})}),F=new t.Texture({context:e,width:f,height:p,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{arrayBufferView:g,width:f,height:p},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE})}),D=new t.Texture3D({context:e,width:T,height:l,depth:w,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{arrayBufferView:v},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,wrapR:t.TextureWrap.CLAMP_TO_EDGE})}),E=new t.Texture3D({context:e,width:h,height:y,depth:S,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{arrayBufferView:b},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,wrapR:t.TextureWrap.CLAMP_TO_EDGE})}),P=new t.Texture3D({context:e,width:u,height:_,depth:I,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{arrayBufferView:L},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,wrapR:t.TextureWrap.CLAMP_TO_EDGE})});return{transmittanceTexture:O,irradianceTexture:F,scatteringTexture:D,singleMieScatteringTexture:E,higherOrderScatteringTexture:P}}const pe={"bruneton/definitions.glsl":`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/definitions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#define assert(x)

#define Length float
#define Wavelength float
#define Angle float
#define SolidAngle float
#define Power float
#define LuminousPower float

#define Number float
#define InverseLength float
#define Area float
#define Volume float
#define NumberDensity float
#define Irradiance float
#define Radiance float
#define SpectralPower float
#define SpectralIrradiance float
#define SpectralRadiance float
#define SpectralRadianceDensity float
#define ScatteringCoefficient float
#define InverseSolidAngle float
#define LuminousIntensity float
#define Luminance float
#define Illuminance float

// A generic function from Wavelength to some other type.
#define AbstractSpectrum vec3
// A function from Wavelength to Number.
#define DimensionlessSpectrum vec3
// A function from Wavelength to SpectralPower.
#define PowerSpectrum vec3
// A function from Wavelength to SpectralIrradiance.
#define IrradianceSpectrum vec3
// A function from Wavelength to SpectralRadiance.
#define RadianceSpectrum vec3
// A function from Wavelength to SpectralRadianceDensity.
#define RadianceDensitySpectrum vec3
// A function from Wavelength to ScatteringCoefficient.
#define ScatteringSpectrum vec3

// A position in 3D (3 length values).
#define Position vec3
// A unit direction vector in 3D (3 unit-less values).
#define Direction vec3
// A vector of 3 luminance values.
#define Luminance3 vec3
// A vector of 3 illuminance values.
#define Illuminance3 vec3

#define TransmittanceTexture sampler2D
#define AbstractScatteringTexture sampler3D
#define ReducedScatteringTexture sampler3D
#define ScatteringTexture sampler3D
#define ScatteringDensityTexture sampler3D
#define IrradianceTexture sampler2D

const Length m = 1.0;
const Wavelength nm = 1.0;
const Angle rad = 1.0;
const SolidAngle sr = 1.0;
const Power watt = 1.0;
const LuminousPower lm = 1.0;

#if !defined(PI)
const float PI = 3.14159265358979323846;
#endif // !defined(PI)

const Length km = 1000.0 * m;
const Area m2 = m * m;
const Volume m3 = m * m * m;
const Angle pi = PI * rad;
const Angle deg = pi / 180.0;
const Irradiance watt_per_square_meter = watt / m2;
const Radiance watt_per_square_meter_per_sr = watt / (m2 * sr);
const SpectralIrradiance watt_per_square_meter_per_nm = watt / (m2 * nm);
const SpectralRadiance watt_per_square_meter_per_sr_per_nm = watt / (m2 * sr * nm);
const SpectralRadianceDensity watt_per_cubic_meter_per_sr_per_nm = watt / (m3 * sr * nm);
const LuminousIntensity cd = lm / sr;
const LuminousIntensity kcd = 1000.0 * cd;
const Luminance cd_per_square_meter = cd / m2;
const Luminance kcd_per_square_meter = kcd / m2;

struct DensityProfileLayer {
  Length width;
  Number exp_term;
  InverseLength exp_scale;
  InverseLength linear_term;
  Number constant_term;
};

struct DensityProfile {
  DensityProfileLayer layers[2];
};

// See AtmosphereParameter.ts for further details.
struct AtmosphereParameters {
  IrradianceSpectrum solar_irradiance;
  Angle sun_angular_radius;
  Length bottom_radius;
  Length top_radius;
  DensityProfile rayleigh_density;
  ScatteringSpectrum rayleigh_scattering;
  DensityProfile mie_density;
  ScatteringSpectrum mie_scattering;
  ScatteringSpectrum mie_extinction;
  Number mie_phase_function_g;
  DensityProfile absorption_density;
  ScatteringSpectrum absorption_extinction;
  DimensionlessSpectrum ground_albedo;
  Number mu_s_min;
};
`,"bruneton/common.glsl":`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

Number ClampCosine(const Number mu) {
  return clamp(mu, Number(-1.0), Number(1.0));
}

Length ClampDistance(const Length d) {
  return max(d, 0.0 * m);
}

Length ClampRadius(const AtmosphereParameters atmosphere, const Length r) {
  return clamp(r, atmosphere.bottom_radius, atmosphere.top_radius);
}

Length SafeSqrt(const Area a) {
  return sqrt(max(a, 0.0 * m2));
}

Length DistanceToTopAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.top_radius * atmosphere.top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

Length DistanceToBottomAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius;
  return ClampDistance(-r * mu - SafeSqrt(discriminant));
}

bool RayIntersectsGround(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  return mu < 0.0 && r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius >= 0.0 * m2;
}

Number GetTextureCoordFromUnitRange(const Number x, const int texture_size) {
  return 0.5 / Number(texture_size) + x * (1.0 - 1.0 / Number(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon).
  Length d = DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Number x_mu = (d - d_min) / (d_max - d_min);
  Number x_r = rho / H;
  return vec2(GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT));
}

DimensionlessSpectrum GetTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  vec2 uv = GetTransmittanceTextureUvFromRMu(atmosphere, r, mu);
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  // Manually interpolate the transmittance instead of the optical depth.
  const vec2 size = vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  const vec3 texel_size = vec3(1.0 / size, 0.0);
  vec2 coord = (uv * size) - 0.5;
  vec2 i = (floor(coord) + 0.5) * texel_size.xy;
  vec2 f = fract(coord);
  vec4 t1 = exp(-texture(transmittance_texture, i));
  vec4 t2 = exp(-texture(transmittance_texture, i + texel_size.xz));
  vec4 t3 = exp(-texture(transmittance_texture, i + texel_size.zy));
  vec4 t4 = exp(-texture(transmittance_texture, i + texel_size.xy));
  return DimensionlessSpectrum(mix(mix(t1, t2, f.x), mix(t3, t4, f.x), f.y));
  #else // TRANSMITTANCE_PRECISION_LOG
  return DimensionlessSpectrum(texture(transmittance_texture, uv));
  #endif // TRANSMITTANCE_PRECISION_LOG
}

DimensionlessSpectrum GetTransmittance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Length d,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(d >= 0.0 * m);

  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_d = ClampCosine((r * mu + d) / r_d);

  if (ray_r_mu_intersects_ground) {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, -mu),
        DimensionlessSpectrum(1.0));
  } else {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, mu_d),
        DimensionlessSpectrum(1.0));
  }
}

DimensionlessSpectrum GetTransmittanceToSun(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  Number sin_theta_h = atmosphere.bottom_radius / r;
  Number cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) *
      smoothstep(-sin_theta_h * atmosphere.sun_angular_radius / rad,
                 sin_theta_h * atmosphere.sun_angular_radius / rad,
                 mu_s - cos_theta_h);
}

InverseSolidAngle RayleighPhaseFunction(const Number nu) {
  InverseSolidAngle k = 3.0 / (16.0 * PI * sr);
  return k * (1.0 + nu * nu);
}

InverseSolidAngle MiePhaseFunction(const Number g, const Number nu) {
  InverseSolidAngle k = 3.0 / (8.0 * PI * sr) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  Number u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);

  // Discriminant of the quadratic equation for the intersections of the ray
  // (r,mu) with the ground (see RayIntersectsGround).
  Length r_mu = r * mu;
  Area discriminant =
      r_mu * r_mu - r * r + atmosphere.bottom_radius * atmosphere.bottom_radius;
  Number u_mu;
  if (ray_r_mu_intersects_ground) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon).
    Length d = -r_mu - SafeSqrt(discriminant);
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    u_mu = 0.5 - 0.5 * GetTextureCoordFromUnitRange(d_max == d_min ? 0.0 :
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon).
    Length d = -r_mu + SafeSqrt(discriminant + H * H);
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    u_mu = 0.5 + 0.5 * GetTextureCoordFromUnitRange(
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }

  Length d = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, mu_s);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Number a = (d - d_min) / (d_max - d_min);
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  // An ad-hoc function equal to 0 for mu_s = mu_s_min (because then d = D and
  // thus a = A), equal to 1 for mu_s = 1 (because then d = d_min and thus
  // a = 0), and with a large slope around mu_s = 0, to get more texture
  // samples near the horizon.
  Number u_mu_s = GetTextureCoordFromUnitRange(
      max(1.0 - a / A, 0.0) / (1.0 + a), SCATTERING_TEXTURE_MU_S_SIZE);

  Number u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(const AtmosphereParameters atmosphere,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  Number x_r = (r - atmosphere.bottom_radius) /
      (atmosphere.top_radius - atmosphere.bottom_radius);
  Number x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT));
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(atmosphere, r, mu_s);
  return IrradianceSpectrum(texture(irradiance_texture, uv));
}
`,"bruneton/runtime.glsl":`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifdef COMBINED_SCATTERING_TEXTURES
vec3 GetExtrapolatedSingleMieScattering(
    const AtmosphereParameters atmosphere, const vec4 scattering) {
  // Algebraically this can never be negative, but rounding errors can produce
  // that effect for sufficiently short view rays.
  // @shotamatsuda: Avoid division by infinitesimal values.
  // See https://github.com/takram-design-engineering/three-geospatial/issues/47
  if (scattering.r < 1e-5) {
    return vec3(0.0);
  }
  return scattering.rgb * scattering.a / scattering.r *
	    (atmosphere.rayleigh_scattering.r / atmosphere.mie_scattering.r) *
	    (atmosphere.mie_scattering / atmosphere.rayleigh_scattering);
}
#endif // COMBINED_SCATTERING_TEXTURES

IrradianceSpectrum GetCombinedScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum single_mie_scattering) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
#ifdef COMBINED_SCATTERING_TEXTURES
  vec4 combined_scattering =
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp;
  IrradianceSpectrum scattering = IrradianceSpectrum(combined_scattering);
  single_mie_scattering =
      GetExtrapolatedSingleMieScattering(atmosphere, combined_scattering);
#else // COMBINED_SCATTERING_TEXTURES
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  single_mie_scattering = IrradianceSpectrum(
      texture(single_mie_scattering_texture, uvw0) * (1.0 - lerp) +
      texture(single_mie_scattering_texture, uvw1) * lerp);
#endif // COMBINED_SCATTERING_TEXTURES
  return scattering;
}

// @shotamatsuda: Added for reading higher-order scattering texture.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
IrradianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  return scattering;
}
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

RadianceSpectrum GetSkyRadiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, const Direction view_ray, const Length shadow_length,
    const Direction sun_direction,
    out DimensionlessSpectrum transmittance) {
  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > atmosphere.top_radius) {
    // If the view ray does not intersect the atmosphere, simply return 0.
    transmittance = DimensionlessSpectrum(1.0);
    return RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  }
  // Compute the r, mu, mu_s and nu parameters needed for the texture lookups.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);

  // @shotamatsuda: For rendering points below the bottom atmosphere.
  #ifdef GROUND
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);
  #else // GROUND
  bool ray_r_mu_intersects_ground = false;
  #endif // GROUND

  transmittance = ray_r_mu_intersects_ground ? DimensionlessSpectrum(0.0) :
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu);
  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering;
  if (shadow_length == 0.0 * m) {
    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r, mu, mu_s, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
  } else {
    // Case of light shafts (shadow_length is the total length noted l in our
    // paper): we omit the scattering between the camera and the point at
    // distance l, by implementing Eq. (18) of the paper (shadow_transmittance
    // is the T(x,x_s) term, scattering is the S|x_s=x+lv term).
    Length d = shadow_length;
    Length r_p =
        ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
    Number mu_p = (r * mu + d) / r_p;
    Number mu_s_p = (r * mu_s + d * nu) / r_p;

    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
    DimensionlessSpectrum shadow_transmittance =
        GetTransmittance(atmosphere, transmittance_texture,
            r, mu, shadow_length, ray_r_mu_intersects_ground);
    // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    IrradianceSpectrum higher_order_scattering = GetScattering(
        atmosphere, higher_order_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
    IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
    scattering = single_scattering * shadow_transmittance + higher_order_scattering;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    scattering = scattering * shadow_transmittance;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) +
      single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

// @shotamatsuda: Returns the point on the ray closest to the origin.
vec3 ClosestPointOnRay(const Position camera, const Position point) {
  Position ray = point - camera;
  Number t = clamp(-dot(camera, ray) / dot(ray, ray), 0.0, 1.0);
  return camera + t * ray;
}

vec2 RaySphereIntersections(
    const Position camera, const Direction direction, const Length radius) {
  float b = 2.0 * dot(direction, camera);
  float c = dot(camera, camera) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  float Q = sqrt(discriminant);
  return vec2(-b - Q, -b + Q) * 0.5;
}

// @shotamatsuda: Clip the view ray at the bottom atmosphere boundary.
bool ClipAtBottomAtmosphere(
    const AtmosphereParameters atmosphere,
    const Direction view_ray, inout Position camera, inout Position point) {
  const Length eps = 0.0;
  Length bottom_radius = atmosphere.bottom_radius + eps;
  Length r_camera = length(camera);
  Length r_point = length(point);
  bool camera_below = r_camera < bottom_radius;
  bool point_below = r_point < bottom_radius;

  vec2 t = RaySphereIntersections(camera, view_ray, bottom_radius);
  Position intersection = camera + view_ray * (camera_below ? t.y : t.x);
  camera = camera_below ? intersection : camera;
  point = point_below ? intersection : point;

  return camera_below && point_below;
}

RadianceSpectrum GetSkyRadianceToPoint(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  // @shotamatsuda: Avoid artifacts when the ray does not intersect the top
  // atmosphere boundary.
  if (length(ClosestPointOnRay(camera, point)) > atmosphere.top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  Direction view_ray = normalize(point - camera);
  if (ClipAtBottomAtmosphere(atmosphere, view_ray, camera, point)) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }

  // Compute the r, mu, mu_s and nu parameters for the first texture lookup.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);
  Length d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);

  // @shotamatsuda: Hack to avoid rendering artifacts near the horizon, due to
  // finite atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    Number mu_horizon = -SafeSqrt(1.0 -
        (atmosphere.bottom_radius * atmosphere.bottom_radius) / (r * r));
    const Number eps = 0.004;
    mu = max(mu, mu_horizon + eps);
  }

  transmittance = GetTransmittance(atmosphere, transmittance_texture,
      r, mu, d, ray_r_mu_intersects_ground);

  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground,
      single_mie_scattering);

  // Compute the r, mu, mu_s and nu parameters for the second texture lookup.
  // If shadow_length is not 0 (case of light shafts), we want to ignore the
  // scattering along the last shadow_length meters of the view ray, which we
  // do by subtracting shadow_length from d (this way scattering_p is equal to
  // the S|x_s=x_0-lv term in Eq. (17) of our paper).
  d = max(d - shadow_length, 0.0 * m);
  Length r_p = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_p = (r * mu + d) / r_p;
  Number mu_s_p = (r * mu_s + d * nu) / r_p;

  IrradianceSpectrum single_mie_scattering_p;
  IrradianceSpectrum scattering_p = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
      single_mie_scattering_p);

  // Combine the lookup results to get the scattering between camera and point.
  DimensionlessSpectrum shadow_transmittance = transmittance;
  if (shadow_length > 0.0 * m) {
    // This is the T(x,x_s) term in Eq. (17) of our paper, for light shafts.
    shadow_transmittance = GetTransmittance(atmosphere, transmittance_texture,
        r, mu, d, ray_r_mu_intersects_ground);
  }
  // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  IrradianceSpectrum higher_order_scattering = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
  IrradianceSpectrum higher_order_scattering_p = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering_p =
      scattering_p - higher_order_scattering_p;
  scattering =
      single_scattering - shadow_transmittance * single_scattering_p +
      higher_order_scattering - transmittance * higher_order_scattering_p;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  scattering = scattering - shadow_transmittance * scattering_p;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

  single_mie_scattering =
      single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
#ifdef COMBINED_SCATTERING_TEXTURES
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
      atmosphere, vec4(scattering, single_mie_scattering.r));
#endif // COMBINED_SCATTERING_TEXTURES

  // Hack to avoid rendering artifacts when the sun is below the horizon.
  single_mie_scattering = single_mie_scattering *
      smoothstep(Number(0.0), Number(0.01), mu_s);

  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

IrradianceSpectrum GetSunAndSkyIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance (approximated if the surface is not horizontal).
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      (1.0 + dot(normal, point) / r) * 0.5;

  // Direct irradiance.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r, mu_s) *
      max(dot(normal, sun_direction), 0.0);
}

// @shotamatsuda: Added for the clouds.
IrradianceSpectrum GetSunAndSkyScalarIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance. Integral over sphere yields 2π.
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      2.0 * PI;

  // Direct irradiance. Omit the cosine term.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(atmosphere, transmittance_texture, r, mu_s);
}

Luminance3 GetSolarLuminance() {
  return ATMOSPHERE.solar_irradiance /
      (PI * ATMOSPHERE.sun_angular_radius * ATMOSPHERE.sun_angular_radius) *
      SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminance(
    const Position camera, Direction view_ray, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadiance(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, view_ray, shadow_length, sun_direction,
      transmittance) * SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminanceToPoint(
    const Position camera, const Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadianceToPoint(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, point, shadow_length, sun_direction, transmittance) *
      SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Illuminance3 GetSunAndSkyIlluminance(
    const Position p, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p, normal,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

// @shotamatsuda: Added for the clouds.
Illuminance3 GetSunAndSkyScalarIlluminance(
    const Position p, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyScalarIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

#define GetSolarRadiance GetSolarLuminance
#define GetSkyRadiance GetSkyLuminance
#define GetSkyRadianceToPoint GetSkyLuminanceToPoint
#define GetSunAndSkyIrradiance GetSunAndSkyIlluminance
#define GetSunAndSkyScalarIrradiance GetSunAndSkyScalarIlluminance
`,"sky.glsl":`// Copied & adapted from three-geospatial SkyMaterial shaders.
// Note: This file is included into a Cesium PostProcessStage fragment shader.

// RECIPROCAL_PI is expected by some ground terms.
#ifndef RECIPROCAL_PI
#define RECIPROCAL_PI 0.3183098861837907
#endif

#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif

vec3 getSkyRadiance(
  const vec3 cameraPosition,
  const vec3 rayDirection,
  const float shadowLength,
  const vec3 sunDirection
) {
  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    transmittance
  );

  // Rendering celestial objects without perspective doesn't make sense.
  #ifdef PERSPECTIVE_CAMERA

  #ifdef SUN
  vec3 ddx = dFdx(rayDirection);
  vec3 ddy = dFdy(rayDirection);
  float fragmentAngle = length(ddx + ddy) / max(length(rayDirection), 1e-6);
  #endif // SUN

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cos(ATMOSPHERE.sun_angular_radius)) {
    // 当太阳在地球背面时，太阳盘应被地球遮挡。
    // cameraPosition / ATMOSPHERE.bottom_radius 均为 length unit（此工程为 km）。
    float bSun = dot(cameraPosition, rayDirection);
    float cSun = dot(cameraPosition, cameraPosition) - ATMOSPHERE.bottom_radius * ATMOSPHERE.bottom_radius;
    float discSun = bSun * bSun - cSun;
    bool sunOccludedByEarth = (discSun > 0.0) && ((-bSun - sqrt(discSun)) > 0.0);
    if (sunOccludedByEarth) {
      return radiance;
    }

    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(
      ATMOSPHERE.sun_angular_radius,
      ATMOSPHERE.sun_angular_radius - fragmentAngle,
      angle
    );
    radiance += transmittance * GetSolarRadiance() * antialias;
  }
  #endif // SUN

  #endif // PERSPECTIVE_CAMERA

  return radiance;
}

`,"aerialPerspectiveEffect.frag":`// Cesium/PostProcessStage 版 AerialPerspectiveEffect 片元主体。\r
// 该文件不包含任何 #include；Bruneton 的 definitions/common/runtime 由 JS 侧拼接在它之前。\r
\r
uniform sampler2D colorTexture;\r
uniform sampler2D depthTexture;\r
in vec2 v_textureCoordinates;\r
\r
uniform vec3 u_cameraPosition; // km\r
uniform vec3 u_altitudeCorrection; // km\r
uniform vec3 u_sunDirection;\r
// 曝光在上一 pass（AtmospherePostProcess）线性段完成；此处仅做 ACES + gamma\r
// three-geospatial 对齐：直接采样 shadowLengthBuffer（这里沿用现有 uniform 命名）\r
uniform int u_cloudShadowLengthEnabled;\r
uniform float u_cloudShadowLengthScale;\r
uniform sampler2D u_cloudShadowLengthTexture;\r
// BSM 地面太阳遮光（与 AtmospherePostProcess 中 getGroundSunTransmittance 一致；applyGroundAtmosphere=false 时仅靠本 pass 生效）\r
uniform sampler2D u_cloudShadowBuffer;\r
uniform float u_cloudShadowScale;\r
uniform vec4 u_cloudShadowDecode;\r
uniform int u_cloudShadowEnabled;\r
uniform mat4 u_cloudShadowMatrices[4];\r
uniform vec2 u_cloudShadowIntervals[4];\r
uniform float u_cloudShadowNear;\r
uniform float u_cloudShadowFar;\r
uniform float u_cloudShadowTopHeight;\r
uniform float u_cloudShadowBottomRadius;\r
uniform float u_bsmGroundOpticalDepthScale;\r
// cascade UV 空间 texel 尺寸（单 cascade tile，非整个 atlas）\r
uniform vec2 u_cloudShadowTexelSize;\r
// 远距几何误差修正量 [0,1]：越大越把 BSM 采样点拉向椭球/bottom 球，抑制地形 LOD 抖动\r
uniform float u_geometricErrorCorrectionAmount;\r
\r
const float METER_TO_LENGTH_UNIT = 0.001; // m -> km\r
\r
float saturateAP(float x) { return clamp(x, 0.0, 1.0); }\r
\r
vec3 ACESFilmic(vec3 x) {\r
  float a = 2.51;\r
  float b = 0.03;\r
  float c = 2.43;\r
  float d = 0.59;\r
  float e = 0.14;\r
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);\r
}\r
\r
// AtmospherePostProcess 已输出曝光后的线性 HDR；本 pass 只做一次 OETF（勿再乘曝光）\r
vec4 tonemapDisplay(vec3 linearHdr, float a) {\r
  vec3 c = ACESFilmic(linearHdr);\r
  c = pow(c, vec3(1.0 / 2.2));\r
  return vec4(c, a);\r
}\r
\r
void reconstructRay(out vec3 ro, out vec3 rd) {\r
  ro = u_cameraPosition + u_altitudeCorrection;\r
  vec2 uv = v_textureCoordinates * 2.0 - 1.0;\r
  vec4 clipPos = vec4(uv, 1.0, 1.0);\r
  vec4 viewPos = czm_inverseProjection * clipPos;\r
  viewPos /= viewPos.w;\r
  vec4 worldPos4 = czm_inverseView * viewPos;\r
  vec3 worldPosKm = worldPos4.xyz * METER_TO_LENGTH_UNIT + u_altitudeCorrection;\r
  rd = normalize(worldPosKm - ro);\r
}\r
\r
// 射线 o + t*d 与以原点为球心、半径 R 的球在 t>eps 上是否存在交点（前向半直线）\r
bool rayForwardHitsSphere(vec3 o, vec3 d, float R) {\r
  float b = dot(o, d);\r
  float c = dot(o, o) - R * R;\r
  float disc = b * b - c;\r
  if (disc < 0.0) {\r
    return false;\r
  }\r
  float s = sqrt(disc);\r
  float t0 = -b - s;\r
  float t1 = -b + s;\r
  return (t0 > 1e-6) || (t1 > 1e-6);\r
}\r
\r
// 是否处于 bottom/top 大气壳层之间（不含恰贴内球心的情况，地表略大于 bottom 时算壳层内）\r
bool cameraInAtmosphereShell(vec3 o, float bottomR, float topR) {\r
  float r = length(o);\r
  return r > bottomR + 1e-5 && r < topR - 1e-5;\r
}\r
\r
// 2×2 图集：cascade 0=左上, 1=右上, 2=左下, 3=右下（与 AtmospherePostProcess 一致）\r
vec2 getCloudShadowAtlasOffset(int ci) {\r
  float x = mod(float(ci), 2.0) * 0.5;\r
  float y = (ci < 2) ? 0.5 : 0.0;\r
  return vec2(x, y);\r
}\r
\r
// three.js / three-geospatial：与 CloudShadowPass intervals=(d-near)/(far-near) 一致\r
float viewZToOrthographicDepth(float viewZ, float near, float far) {\r
  return (viewZ + near) / (near - far);\r
}\r
\r
// 对齐 three-geospatial cascadedShadowMaps.glsl：按相机 view depth 选 cascade，边界 dither 淡入淡出\r
int getFadedCascadeIndex(mat4 viewMat, vec3 worldPos, vec2 intervals[4], float near, float far, float jitter) {\r
  vec4 vp = viewMat * vec4(worldPos, 1.0);\r
  float depth = viewZToOrthographicDepth(vp.z, near, far);\r
  int nextIndex = -1;\r
  int prevIndex = -1;\r
  float alpha = 1.0;\r
  for (int i = 0; i < 4; ++i) {\r
    vec2 interval = intervals[i];\r
    float intervalCenter = (interval.x + interval.y) * 0.5;\r
    float closestEdge = depth < intervalCenter ? interval.x : interval.y;\r
    float margin = closestEdge * closestEdge * 0.5;\r
    interval += margin * vec2(-0.5, 0.5);\r
    if (i < 3) {\r
      if (depth >= interval.x && depth < interval.y) {\r
        prevIndex = nextIndex;\r
        nextIndex = i;\r
        alpha = saturateAP(min(depth - interval.x, interval.y - depth) / max(margin, 1e-6));\r
      }\r
    } else {\r
      if (depth >= interval.x) {\r
        prevIndex = nextIndex;\r
        nextIndex = i;\r
        alpha = saturateAP((depth - interval.x) / max(margin, 1e-6));\r
      }\r
    }\r
  }\r
  return jitter <= alpha ? nextIndex : prevIndex;\r
}\r
\r
vec2 getShadowUv(vec3 worldPos, int ci) {\r
  vec4 clip = u_cloudShadowMatrices[ci] * vec4(worldPos, 1.0);\r
  clip /= clip.w;\r
  return clip.xy * 0.5 + 0.5;\r
}\r
\r
float interleavedGradientNoise(vec2 coord) {\r
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);\r
  return fract(magic.z * fract(dot(coord, magic.xy)));\r
}\r
\r
vec2 vogelDisk(int index, int count, float phi) {\r
  const float goldenAngle = 2.39996322972865332;\r
  float r = sqrt(float(index) + 0.5) / sqrt(float(count));\r
  float theta = float(index) * goldenAngle + phi;\r
  return r * vec2(cos(theta), sin(theta));\r
}\r
\r
float readShadowOpticalDepth(vec2 uv, int ci, float distToTop) {\r
  float scale = max(u_cloudShadowScale, 1e-6);\r
  vec2 atlasUv = getCloudShadowAtlasOffset(ci) + uv * 0.5;\r
  vec4 shadow = (texture(u_cloudShadowBuffer, atlasUv) / scale) * u_cloudShadowDecode;\r
  float od = min(shadow.b, shadow.g * max(0.0, distToTop - shadow.r));\r
  return od * max(u_bsmGroundOpticalDepthScale, 0.0);\r
}\r
\r
float sampleShadowOpticalDepthPCF(vec3 worldPos, float distToTop, float radius, int ci) {\r
  vec2 uv = getShadowUv(worldPos, ci);\r
  // 与 three-geospatial 一致：UV 出 [0,1] 才无阴影（硬切），不再做 edgeFade 矩形软边\r
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;\r
  vec2 texel = max(u_cloudShadowTexelSize, vec2(1e-4));\r
  if (radius < 0.1) return readShadowOpticalDepth(uv, ci, distToTop);\r
  float sum = 0.0;\r
  float phi = interleavedGradientNoise(gl_FragCoord.xy) * 6.28318530718;\r
  for (int i = 0; i < 16; ++i) {\r
    sum += readShadowOpticalDepth(uv + vogelDisk(i, 16, phi) * radius * texel, ci, distToTop);\r
  }\r
  return sum / 16.0;\r
}\r
\r
// three-geospatial correctGeometricError：远距把位置混向 bottom 球表面，减轻 tile/地形几何误差对阴影 UV 的影响\r
vec3 correctBsmPosition(vec3 posMeters, float amount) {\r
  if (amount <= 0.0) return posMeters;\r
  vec3 sphereNormal = normalize(posMeters);\r
  vec3 spherePosition = u_cloudShadowBottomRadius * sphereNormal;\r
  return mix(posMeters, spherePosition, saturateAP(amount));\r
}\r
\r
// 远距额外径向稳定：保留水平位置方向，高度向粗略地表混合，进一步抑制 DEM LOD 高度跳变\r
vec3 stabilizeBsmSamplePosition(vec3 posMeters, float viewDistMeters) {\r
  float geoAmt = max(u_geometricErrorCorrectionAmount, 0.0);\r
  // 距离驱动：约 8km 起开始拉向稳定面，50km 附近接近满修正\r
  float distAmt = smoothstep(8000.0, 50000.0, viewDistMeters);\r
  float amount = saturateAP(max(geoAmt, distAmt));\r
  vec3 corrected = correctBsmPosition(posMeters, amount);\r
  if (amount < 0.01) return corrected;\r
  // 径向高度：用当前高度与 bottom 的差做轻度保留，避免近处地形阴影完全贴球\r
  vec3 n = normalize(corrected);\r
  float h = length(posMeters) - u_cloudShadowBottomRadius;\r
  float stableH = mix(h, max(h, 0.0) * (1.0 - 0.85 * amount), amount);\r
  return n * (u_cloudShadowBottomRadius + stableH);\r
}\r
\r
// rawWorldPosMeters：ECEF 米；u_cloudShadowBottomRadius / TopHeight 与管线 setCloudShadow 一致（米）\r
float getGroundSunTransmittance(vec3 rawWorldPosMeters) {\r
  if (u_cloudShadowEnabled == 0) return 1.0;\r
\r
  // 采样前稳定 BSM 世界点（空中透视仍用原始 depth 点，见 main）\r
  vec3 camMeters = (u_cameraPosition + u_altitudeCorrection) / METER_TO_LENGTH_UNIT;\r
  float viewDist = length(rawWorldPosMeters - camMeters);\r
  vec3 samplePos = stabilizeBsmSamplePosition(rawWorldPosMeters, viewDist);\r
\r
  vec3 groundNormal = normalize(samplePos);\r
  float sunSinElev = dot(u_sunDirection, groundNormal);\r
\r
  // 1) 昼夜线遮挡：太阳低于该地面点本地地平线时，地面点已入夜，无云阴影。\r
  float horizonFade = smoothstep(-0.02, 0.02, sunSinElev);\r
  if (horizonFade <= 0.0) return 1.0;\r
\r
  float topShellR = u_cloudShadowBottomRadius + u_cloudShadowTopHeight;\r
  vec3 rd = u_sunDirection;\r
  float bS = dot(rd, samplePos);\r
  float cTop = dot(samplePos, samplePos) - topShellR * topShellR;\r
  float discTop = bS * bS - cTop;\r
  if (discTop <= 0.0) return 1.0;\r
  float distToShadowTop = -bS + sqrt(discTop);\r
  if (distToShadowTop <= 0.0) return 1.0;\r
\r
  // 2) 低太阳角 / 长阴影淡出（Cesium 椭球外地形专用，three-geospatial 无）\r
  float lowSunFade = smoothstep(0.0, 0.087, sunSinElev);\r
  float rayLenFade = 1.0 - smoothstep(u_cloudShadowTopHeight * 6.0,\r
                                       u_cloudShadowTopHeight * 20.0,\r
                                       distToShadowTop);\r
  float fade = horizonFade * lowSunFade * rayLenFade;\r
  if (fade <= 0.0) return 1.0;\r
\r
  float jitter = interleavedGradientNoise(gl_FragCoord.xy);\r
  float near = max(u_cloudShadowNear, 1e-3);\r
  float far = max(u_cloudShadowFar, near + 1.0);\r
  int ci = getFadedCascadeIndex(\r
    czm_view,\r
    samplePos,\r
    u_cloudShadowIntervals,\r
    near,\r
    far,\r
    jitter\r
  );\r
  if (ci < 0) return 1.0;\r
\r
  // PCF 半径（cascade UV texel 单位）；远处略加大，减轻锯齿\r
  float pcfRadius = mix(1.5, 3.0, saturateAP(viewDist / max(far, 1.0)));\r
  float opticalDepth = sampleShadowOpticalDepthPCF(samplePos, distToShadowTop, pcfRadius, ci);\r
  float shade = exp(-opticalDepth);\r
  return mix(1.0, shade, fade);\r
}\r
\r
void main() {\r
  vec4 originalColor = texture(colorTexture, v_textureCoordinates);\r
  float depth = czm_readDepth(depthTexture, v_textureCoordinates);\r
  // 非清空深度（用于太空视点的透视兜底，见下）\r
  const float DEPTH_SKY_EPS = 1e-4;\r
  bool hasSceneDepth = depth < 1.0 - DEPTH_SKY_EPS;\r
\r
  vec3 cameraPosition = u_cameraPosition;\r
  float camRadius = length(cameraPosition);\r
  vec3 rayDirection;\r
  reconstructRay(cameraPosition, rayDirection);\r
\r
  float bottomR = ATMOSPHERE.bottom_radius;\r
  float topR = ATMOSPHERE.top_radius;\r
  bool inShell = cameraInAtmosphereShell(cameraPosition, bottomR, topR);\r
  bool hitBottom = rayForwardHitsSphere(cameraPosition, rayDirection, bottomR);\r
  bool hitTop = rayForwardHitsSphere(cameraPosition, rayDirection, topR);\r
\r
  // 地心指向相机的单位向量（ECEF）；视线与其点积：<0 朝地心/地表一侧，>0 朝外（天空/深空）\r
  // 仅用 hitBottom 会错：Cesium 地表往往在 Bruneton bottom 球之外，斜视时射线可无 bottom 前向交点但仍指向地面 → 误透传原色\r
  vec3 radialOut = normalize(cameraPosition);\r
  float muLook = dot(rayDirection, radialOut);\r
\r
  bool passOriginal = false;\r
  if (inShell) {\r
    passOriginal = false;\r
  } else if (camRadius > topR + 1e-5) {\r
    // 太空：朝外深空 → 透传；朝地球(mu<0)必做透视，避免仅靠 hitTop 在 grazing 时漏判\r
    float skyMuEps = 1e-5;\r
    passOriginal = (muLook > skyMuEps) && !hitTop;\r
  } else {\r
    // r <= bottom（地表贴内球或数值在内球内侧）：一律按地面管线处理\r
    passOriginal = false;\r
  }\r
\r
  // 壳层内：完全听 passOriginal（天际线上方 mu>0 常为原色）；天际线附近深度常非 1，若用深度强制透视会把天空染色。\r
  // 仅当相机在 top 球外（太空）时：深度非空则强制透视，修「太空看地整片原色」。\r
  bool cameraOutsideAtmosphere = camRadius > topR + 1e-5;\r
  bool forceAerialFromDepth = hasSceneDepth && cameraOutsideAtmosphere;\r
  if (passOriginal && !forceAerialFromDepth) {\r
    out_FragColor = tonemapDisplay(originalColor.rgb, originalColor.a);\r
    return;\r
  }\r
\r
  // 壳层内：与 AtmospherePostProcess 一致用 0.014 宽带，避免相机运动时深度抖动导致误走透视/透传、天际线闪黑。\r
  if (inShell && !forceAerialFromDepth) {\r
    const float SHELL_SKY_DEPTH_SLOP = 0.014;\r
    const float MU_EXPLICIT_GROUND = -0.065;\r
    bool depthLikelySky = depth >= 1.0 - SHELL_SKY_DEPTH_SLOP;\r
    bool explicitGround =\r
      hitBottom || (hasSceneDepth && muLook < MU_EXPLICIT_GROUND);\r
    if (depthLikelySky && !explicitGround) {\r
      out_FragColor = tonemapDisplay(originalColor.rgb, originalColor.a);\r
      return;\r
    }\r
  }\r
\r
  // 重建 ECEF 世界坐标（米），再转 km，得到几何点位置\r
  vec4 eyePos = czm_windowToEyeCoordinates(vec4(gl_FragCoord.xy, depth, 1.0));\r
  if (abs(eyePos.w) < 1e-6) {\r
    if (!hasSceneDepth) {\r
      out_FragColor = tonemapDisplay(originalColor.rgb, originalColor.a);\r
      return;\r
    }\r
    // w 异常但深度表明有几何：用当前像素射线与 bottom 球最近前向交点作 scene 近似（太空地表常见）\r
    float bW = dot(cameraPosition, rayDirection);\r
    float cW = dot(cameraPosition, cameraPosition) - bottomR * bottomR;\r
    float discW = bW * bW - cW;\r
    if (discW < 0.0) {\r
      out_FragColor = tonemapDisplay(originalColor.rgb, originalColor.a);\r
      return;\r
    }\r
    float sW = sqrt(discW);\r
    float tHit = -bW - sW;\r
    if (tHit <= 1e-6) {\r
      tHit = -bW + sW;\r
    }\r
    if (tHit <= 1e-6) {\r
      out_FragColor = tonemapDisplay(originalColor.rgb, originalColor.a);\r
      return;\r
    }\r
    vec3 scenePosKmApprox = cameraPosition + rayDirection * tHit;\r
    vec3 transmittanceW;\r
    vec3 inscatterW = GetSkyRadianceToPoint(\r
      cameraPosition,\r
      scenePosKmApprox,\r
      0.0,\r
      u_sunDirection,\r
      transmittanceW\r
    );\r
    float sunTW = getGroundSunTransmittance(scenePosKmApprox / METER_TO_LENGTH_UNIT);\r
    vec3 finalColorW = originalColor.rgb * transmittanceW * sunTW + inscatterW;\r
    out_FragColor = tonemapDisplay(finalColorW, originalColor.a);\r
    return;\r
  }\r
  eyePos /= eyePos.w;\r
  if (eyePos.z >= 0.0 && !hasSceneDepth) {\r
    out_FragColor = tonemapDisplay(originalColor.rgb, originalColor.a);\r
    return;\r
  }\r
\r
  vec3 scenePosKm;\r
  vec3 rawWorldPosMeters = vec3(0.0);\r
  if (eyePos.z >= 0.0 && hasSceneDepth) {\r
    // z>=0 但深度非空：远距/对数深度常见数值问题，眼→世界不可靠，用射线与 bottom 球前向交点作地表锚点\r
    float bz = dot(cameraPosition, rayDirection);\r
    float cz = dot(cameraPosition, cameraPosition) - bottomR * bottomR;\r
    float discz = bz * bz - cz;\r
    if (discz < 0.0) {\r
      out_FragColor = tonemapDisplay(originalColor.rgb, originalColor.a);\r
      return;\r
    }\r
    float sz = sqrt(discz);\r
    float tz = -bz - sz;\r
    if (tz <= 1e-6) {\r
      tz = -bz + sz;\r
    }\r
    if (tz <= 1e-6) {\r
      out_FragColor = tonemapDisplay(originalColor.rgb, originalColor.a);\r
      return;\r
    }\r
    scenePosKm = cameraPosition + rayDirection * tz;\r
  } else {\r
    vec4 worldPos4 = czm_inverseView * eyePos;\r
    rawWorldPosMeters = worldPos4.xyz;\r
    vec3 sceneWorldPosKm = rawWorldPosMeters * METER_TO_LENGTH_UNIT + u_altitudeCorrection;\r
    float sceneDist = length(sceneWorldPosKm - cameraPosition);\r
    scenePosKm = cameraPosition + rayDirection * sceneDist;\r
  }\r
  float shadowLength = 0.0;\r
  if (u_cloudShadowLengthEnabled > 0) {\r
    shadowLength = max(texture(u_cloudShadowLengthTexture, v_textureCoordinates).r, 0.0)\r
      * max(u_cloudShadowLengthScale, 0.0);\r
  }\r
\r
  vec3 transmittance;\r
  vec3 inscatter = GetSkyRadianceToPoint(\r
    cameraPosition,\r
    scenePosKm,\r
    shadowLength,\r
    u_sunDirection,\r
    transmittance\r
  );\r
\r
  vec3 rawForBSM;\r
  if (eyePos.z >= 0.0 && hasSceneDepth) {\r
    rawForBSM = scenePosKm / METER_TO_LENGTH_UNIT;\r
  } else {\r
    rawForBSM = rawWorldPosMeters;\r
  }\r
  float sunT = getGroundSunTransmittance(rawForBSM);\r
  vec3 finalColor = originalColor.rgb * transmittance * sunT + inscatter;\r
\r
  out_FragColor = tonemapDisplay(finalColor, originalColor.a);\r
}\r
\r
`};function M(c,e={}){const t=e.bundledShaders??pe,r=[c];c.includes("/")||r.push(`bruneton/${c}`);for(const i of r)if(t!=null&&t[i])return Promise.resolve(t[i]);const a=e.shaderBaseUrl;if(!a)return Promise.reject(new Error(`Shader "${c}" not found in bundle and no shaderBaseUrl provided`));const o=a.replace(/\/?$/,"/")+c;return fetch(o).then(i=>{if(!i.ok)throw new Error(`Failed to load ${c}: ${i.status} (${o})`);return i.text()}).then(i=>{if(i.trimStart().startsWith("<!"))throw new Error(`Shader ${c} returned HTML, not GLSL: ${o}`);return i})}const Z=V(),fe="./src/AtmosphereFromThreeGeospatial/assets/";function j(c){const e={};for(const[t,r]of Object.entries(c))Array.isArray(r)?e[`ATMOSPHERE.${t}`]=r:r&&typeof r=="object"&&!("length"in r)&&r.layers?r.layers.forEach((a,o)=>{for(const[i,n]of Object.entries(a))e[`ATMOSPHERE.${t}.layers[${o}].${i}`]=n}):typeof r=="number"?e[`ATMOSPHERE.${t}`]=r:e[`ATMOSPHERE.${t}`]=r;return e}function Se(c,e,t,r){const a=z,o=`
precision highp float;
precision highp sampler2D;
precision highp sampler3D;
`,i=["#define COMBINED_SCATTERING_TEXTURES","#define PERSPECTIVE_CAMERA","#define SUN",`#define SCATTERING_TEXTURE_R_SIZE ${a.SCATTERING_TEXTURE_R_SIZE}`,`#define SCATTERING_TEXTURE_MU_SIZE ${a.SCATTERING_TEXTURE_MU_SIZE}`,`#define SCATTERING_TEXTURE_MU_S_SIZE ${a.SCATTERING_TEXTURE_MU_S_SIZE}`,`#define SCATTERING_TEXTURE_NU_SIZE ${a.SCATTERING_TEXTURE_NU_SIZE}`,`#define TRANSMITTANCE_TEXTURE_WIDTH ${a.TRANSMITTANCE_TEXTURE_WIDTH}`,`#define TRANSMITTANCE_TEXTURE_HEIGHT ${a.TRANSMITTANCE_TEXTURE_HEIGHT}`,`#define IRRADIANCE_TEXTURE_WIDTH ${a.IRRADIANCE_TEXTURE_WIDTH}`,`#define IRRADIANCE_TEXTURE_HEIGHT ${a.IRRADIANCE_TEXTURE_HEIGHT}`].join(`
`);return o+i+`
`+c+`
`+e+`
`+`
uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler2D irradiance_texture;
`+t+`
`+r+`
`+`
uniform sampler2D colorTexture;
uniform sampler2D depthTexture;
in vec2 v_textureCoordinates;
uniform vec3 u_cameraPosition;
uniform vec3 u_altitudeCorrection;
uniform vec3 u_sunDirection;
uniform vec3 u_groundAlbedo;
// 每像素对应的角度（弧度），用于太阳边缘抗锯齿；当 dFdx 不可用时作为 fallback（与 three-geospatial PERSPECTIVE_CAMERA 一致）
uniform float u_sunPixelAngle;
// 线性曝光（在 ACES 之前）；OETF 仅在后接 AerialPerspectiveEffect 做一次
uniform float u_atmosphereExposure;

// Cloud shadow (BSM) - Cesium 仅支持 sampler2D，使用 2×2 图集（每 cascade 一 tile）
uniform sampler2D u_cloudShadowBuffer;
uniform float u_cloudShadowScale;
uniform vec4 u_cloudShadowDecode;
uniform int u_cloudShadowEnabled;
uniform mat4 u_cloudShadowMatrices[4];
uniform vec2 u_cloudShadowIntervals[4];
uniform float u_cloudShadowNear;
uniform float u_cloudShadowFar;
uniform float u_cloudShadowTopHeight;
uniform float u_cloudShadowBottomRadius;
uniform vec2 u_cloudShadowTexelSize;
uniform float u_geometricErrorCorrectionAmount;
// three-geospatial 对齐：直接消费 shadowLengthBuffer（长度单位与大气 length unit 一致，当前为 km）
uniform sampler2D u_shadowLengthBuffer;
uniform int u_shadowLengthEnabled;
uniform float u_shadowLengthScale;
uniform int u_debugTyndall;
// 为 0 时几何像素不透传 Bruneton 地面项（只做天空），避免与 AerialPerspectiveEffect 双重叠加导致过曝/死黑/晨昏线色偏
uniform int u_applyGroundAtmosphere;
// 丁达尔光柱强度：对 shadow length 的缩放，>1 时阴影更明显（光柱更暗）
uniform float u_tyndallScale;
// BSM 光学厚度缩放：用于丁达尔/光柱（仅影响 shadowLength）
uniform float u_bsmTyndallOpticalDepthScale;
// BSM 光学厚度缩放：用于地面太阳遮光（仅影响地面变暗）
uniform float u_bsmGroundOpticalDepthScale;
uniform int u_renderSky;

const float MAX_FLOAT = 1e20;

// 2×2 图集：cascade 0=左上, 1=右上, 2=左下, 3=右下
vec2 getCloudShadowAtlasOffset(int ci) {
  float x = mod(float(ci), 2.0) * 0.5;
  float y = (ci < 2) ? 0.5 : 0.0;
  return vec2(x, y);
}

// Cesium 的矩阵/深度距离单位是“米”，而 Bruneton/LUT 这套在本工程中使用“千米”(lengthUnit=km)。
// ACES + gamma 改由 AerialPerspectiveEffect 在链路末端统一处理（避免与天空 pass 重复 OETF）。
const float METER_TO_LENGTH_UNIT = 0.001;


float raySphereFirstIntersection(const vec3 ro, const vec3 rd, const float radius) {
  float b = dot(ro, rd);
  float c = dot(ro, ro) - radius * radius;
  float disc = b * b - c;
  if (disc <= 0.0) return -1.0;
  float t = -b - sqrt(disc);
  return t;
}

float readBSMOpticalDepth(vec3 posMeters) {
  float scale = max(u_cloudShadowScale, 1e-6);
  for (int ci = 0; ci < 4; ci++) {
    vec4 clip = u_cloudShadowMatrices[ci] * vec4(posMeters, 1.0);
    clip /= clip.w;
    vec2 uv = clip.xy * 0.5 + 0.5;
    if (uv.x < 0.01 || uv.x > 0.99 || uv.y < 0.01 || uv.y > 0.99) continue;
    vec2 atlasUv = getCloudShadowAtlasOffset(ci) + uv * 0.5;
    vec4 shadow = (texture(u_cloudShadowBuffer, atlasUv) / scale) * u_cloudShadowDecode;
    return shadow.b * max(u_bsmTyndallOpticalDepthScale, 0.0);
  }
  return 0.0;
}

float saturateAP(float x) { return clamp(x, 0.0, 1.0); }

float viewZToOrthographicDepth(float viewZ, float near, float far) {
  return (viewZ + near) / (near - far);
}

int getFadedCascadeIndex(mat4 viewMat, vec3 worldPos, vec2 intervals[4], float near, float far, float jitter) {
  vec4 vp = viewMat * vec4(worldPos, 1.0);
  float depth = viewZToOrthographicDepth(vp.z, near, far);
  int nextIndex = -1;
  int prevIndex = -1;
  float alpha = 1.0;
  for (int i = 0; i < 4; ++i) {
    vec2 interval = intervals[i];
    float intervalCenter = (interval.x + interval.y) * 0.5;
    float closestEdge = depth < intervalCenter ? interval.x : interval.y;
    float margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);
    if (i < 3) {
      if (depth >= interval.x && depth < interval.y) {
        prevIndex = nextIndex;
        nextIndex = i;
        alpha = saturateAP(min(depth - interval.x, interval.y - depth) / max(margin, 1e-6));
      }
    } else {
      if (depth >= interval.x) {
        prevIndex = nextIndex;
        nextIndex = i;
        alpha = saturateAP((depth - interval.x) / max(margin, 1e-6));
      }
    }
  }
  return jitter <= alpha ? nextIndex : prevIndex;
}

vec2 getShadowUvGround(vec3 worldPos, int ci) {
  vec4 clip = u_cloudShadowMatrices[ci] * vec4(worldPos, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float interleavedGradientNoiseAP(vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}

vec2 vogelDiskAP(int index, int count, float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(count));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}

float readShadowOpticalDepthGround(vec2 uv, int ci, float distToTop) {
  float scale = max(u_cloudShadowScale, 1e-6);
  vec2 atlasUv = getCloudShadowAtlasOffset(ci) + uv * 0.5;
  vec4 shadow = (texture(u_cloudShadowBuffer, atlasUv) / scale) * u_cloudShadowDecode;
  float od = min(shadow.b, shadow.g * max(0.0, distToTop - shadow.r));
  return od * max(u_bsmGroundOpticalDepthScale, 0.0);
}

float sampleShadowOpticalDepthPCFGround(vec3 worldPos, float distToTop, float radius, int ci) {
  vec2 uv = getShadowUvGround(worldPos, ci);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
  vec2 texel = max(u_cloudShadowTexelSize, vec2(1e-4));
  if (radius < 0.1) return readShadowOpticalDepthGround(uv, ci, distToTop);
  float sum = 0.0;
  float phi = interleavedGradientNoiseAP(gl_FragCoord.xy) * 6.28318530718;
  for (int i = 0; i < 16; ++i) {
    sum += readShadowOpticalDepthGround(uv + vogelDiskAP(i, 16, phi) * radius * texel, ci, distToTop);
  }
  return sum / 16.0;
}

vec3 correctBsmPosition(vec3 posMeters, float amount) {
  if (amount <= 0.0) return posMeters;
  vec3 sphereNormal = normalize(posMeters);
  vec3 spherePosition = u_cloudShadowBottomRadius * sphereNormal;
  return mix(posMeters, spherePosition, saturateAP(amount));
}

vec3 stabilizeBsmSamplePosition(vec3 posMeters, float viewDistMeters) {
  float geoAmt = max(u_geometricErrorCorrectionAmount, 0.0);
  float distAmt = smoothstep(8000.0, 50000.0, viewDistMeters);
  float amount = saturateAP(max(geoAmt, distAmt));
  vec3 corrected = correctBsmPosition(posMeters, amount);
  if (amount < 0.01) return corrected;
  vec3 n = normalize(corrected);
  float h = length(posMeters) - u_cloudShadowBottomRadius;
  float stableH = mix(h, max(h, 0.0) * (1.0 - 0.85 * amount), amount);
  return n * (u_cloudShadowBottomRadius + stableH);
}

float getGroundSunTransmittance(vec3 rawWorldPosMeters) {
  if (u_cloudShadowEnabled == 0) return 1.0;
  vec3 camMeters = (u_cameraPosition + u_altitudeCorrection) / METER_TO_LENGTH_UNIT;
  float viewDist = length(rawWorldPosMeters - camMeters);
  vec3 samplePos = stabilizeBsmSamplePosition(rawWorldPosMeters, viewDist);

  vec3 groundNormal = normalize(samplePos);
  float sunSinElev = dot(u_sunDirection, groundNormal);
  float horizonFade = smoothstep(-0.02, 0.02, sunSinElev);
  if (horizonFade <= 0.0) return 1.0;

  float topShellR = u_cloudShadowBottomRadius + u_cloudShadowTopHeight;
  vec3 rd = u_sunDirection;
  float bS = dot(rd, samplePos);
  float cS = dot(samplePos, samplePos) - topShellR * topShellR;
  float discS = bS * bS - cS;
  if (discS <= 0.0) return 1.0;
  float distToShadowTop = -bS + sqrt(discS);
  if (distToShadowTop <= 0.0) return 1.0;

  float lowSunFade = smoothstep(0.0, 0.087, sunSinElev);
  float rayLenFade = 1.0 - smoothstep(u_cloudShadowTopHeight * 6.0,
                                       u_cloudShadowTopHeight * 20.0,
                                       distToShadowTop);
  float fade = horizonFade * lowSunFade * rayLenFade;
  if (fade <= 0.0) return 1.0;

  float jitter = interleavedGradientNoiseAP(gl_FragCoord.xy);
  float near = max(u_cloudShadowNear, 1e-3);
  float far = max(u_cloudShadowFar, near + 1.0);
  int ci = getFadedCascadeIndex(czm_view, samplePos, u_cloudShadowIntervals, near, far, jitter);
  if (ci < 0) return 1.0;

  float pcfRadius = mix(1.5, 3.0, saturateAP(viewDist / max(far, 1.0)));
  float opticalDepth = sampleShadowOpticalDepthPCFGround(samplePos, distToShadowTop, pcfRadius, ci);
  float shade = exp(-opticalDepth);
  return mix(1.0, shade, fade);
}

float marchShadowLengthAtm(vec3 cameraKm, vec3 rd, float tNear, float tFar) {
  if (u_cloudShadowEnabled == 0) return 0.0;
  float maxDist = tFar - tNear;
  if (maxDist <= 0.0) return 0.0;
  const int STEPS = 64;
  float stepSize = maxDist / float(STEPS);
  float shadowLen = 0.0;
  float attenuation = 1.0;
  for (int i = 0; i < STEPS; i++) {
    float t = tNear + (float(i) + 0.5) * stepSize;
    vec3 posKm = cameraKm + rd * t;
    vec3 posMeters = posKm / METER_TO_LENGTH_UNIT;
    float opticalDepth = readBSMOpticalDepth(posMeters);
    shadowLen += (1.0 - exp(-opticalDepth)) * stepSize * attenuation;
    attenuation *= 0.9995;
  }
  return (shadowLen / METER_TO_LENGTH_UNIT) * max(u_tyndallScale, 0.0);
}

float readShadowLengthBuffer(vec2 uv) {
  if (u_shadowLengthEnabled == 0) return 0.0;
  // 约定：buffer 中存储的就是 Bruneton 所需的 shadowLength（length unit, km）
  // scale 用于可选的编码/解码缩放（默认 1.0）
  return max(texture(u_shadowLengthBuffer, uv).r, 0.0) * max(u_shadowLengthScale, 0.0);
}

void reconstructRay(out vec3 ro, out vec3 rd) {
  ro = u_cameraPosition + u_altitudeCorrection;
  vec2 uv = v_textureCoordinates * 2.0 - 1.0;
  vec4 clipPos = vec4(uv, 1.0, 1.0);
  vec4 viewPos = czm_inverseProjection * clipPos;
  viewPos /= viewPos.w;
  vec4 worldPos4 = czm_inverseView * viewPos;
  vec3 worldPos = worldPos4.xyz * METER_TO_LENGTH_UNIT + u_altitudeCorrection;
  rd = normalize(worldPos - ro);
}

// 与 Shaders/aerialPerspectiveEffect.frag 一致：前向半直线与球的交点判定
bool rayForwardHitsSphereAP(vec3 o, vec3 d, float R) {
  float b = dot(o, d);
  float c = dot(o, o) - R * R;
  float disc = b * b - c;
  if (disc < 0.0) {
    return false;
  }
  float s = sqrt(disc);
  float t0 = -b - s;
  float t1 = -b + s;
  return (t0 > 1e-6) || (t1 > 1e-6);
}

bool cameraInAtmosphereShellAP(vec3 o, float bottomR, float topR) {
  float r = length(o);
  return r > bottomR + 1e-5 && r < topR - 1e-5;
}

void main() {
  vec4 originalColor = texture(colorTexture, v_textureCoordinates);
  float depth = czm_readDepth(depthTexture, v_textureCoordinates);

  vec3 cameraPosition = u_cameraPosition;
  vec3 rayDirection;
  reconstructRay(cameraPosition, rayDirection);
  rayDirection = normalize(rayDirection);

  // Reconstruct raw ECEF world position from depth buffer
  vec3 rawWorldPosMeters = vec3(0.0);
  float sceneDist = MAX_FLOAT;
  // 基于 eye-space 重建来判定是否命中几何，避免远距 depth 阈值误判
  bool hasScene = false;
  if (depth < 1.0 - 1e-8) {
    vec4 eyePos = czm_windowToEyeCoordinates(vec4(gl_FragCoord.xy, depth, 1.0));
    if (abs(eyePos.w) > 1e-6) {
      eyePos /= eyePos.w;
      // 掠射/天际附近 eyePos.z 在 0 附近抖动 → hasScene 帧间跳变 → isSky 与透传黑底交替闪烁；略收严
      if (eyePos.z < -1e-4) {
        hasScene = true;
        vec4 worldPos4 = czm_inverseView * eyePos;
        rawWorldPosMeters = worldPos4.xyz;
        vec3 sceneWorldPosKm = rawWorldPosMeters * METER_TO_LENGTH_UNIT + u_altitudeCorrection;
        sceneDist = length(sceneWorldPosKm - cameraPosition);
      }
    }
  }

  float bottomRadius = ATMOSPHERE.bottom_radius;
  float topRadius = ATMOSPHERE.top_radius;
  float camR = length(cameraPosition);

  // —— 天空/地面：与 aerialPerspectiveEffect.frag 对齐（几何 + 放宽深度带），减轻天际线 log-depth 闪烁
  bool hitBottom = rayForwardHitsSphereAP(cameraPosition, rayDirection, bottomRadius);
  bool hitTop = rayForwardHitsSphereAP(cameraPosition, rayDirection, topRadius);
  bool inShell = cameraInAtmosphereShellAP(cameraPosition, bottomRadius, topRadius);
  vec3 radialOut = normalize(cameraPosition);
  float muLook = dot(rayDirection, radialOut);

  const float AP_DEPTH_SKY_EPS = 1e-4;
  bool hasSceneDepth = depth < 1.0 - AP_DEPTH_SKY_EPS;

  // 宽带 0.014：与 log-depth 抖动折中。skyOverride 仅用于「真·净空 + 明显仰视」时压制误报的 hasScene，避免闪黑。
  // 过宽的 depth（原 1-5e-4）+ 小 mu 会在仰视山坡/远山时把地形当净空 → 大气盖在地形前；过一会深度稳定后又恢复。
  const float MU_EXPLICIT_GROUND = -0.01;
  const float SHELL_SKY_DEPTH_SLOP = 0.0005;
  const float SKY_OVERRIDE_MU = 0.075;
  const float SKY_OVERRIDE_DEPTH = 1.0 - 8e-6;
  bool explicitGround = hitBottom || (hasSceneDepth && muLook < MU_EXPLICIT_GROUND);
  bool cameraOutsideAtmosphere = camR > topRadius + 1e-5;
  bool forceGroundFromDepth = hasSceneDepth && cameraOutsideAtmosphere;
  bool passOriginalSpace = (muLook > 1e-5) && !hitTop;

  bool depthLikelySky = depth >= 1.0 - SHELL_SKY_DEPTH_SLOP;
  bool skyOverrideFromView =
    (muLook > SKY_OVERRIDE_MU) &&
    (depth >= SKY_OVERRIDE_DEPTH) &&
    depthLikelySky &&
    !explicitGround;

  bool isSky = false;
  if (inShell) {
    if (hasScene && !skyOverrideFromView) {
      isSky = false;
    } else {
      isSky = depthLikelySky && !explicitGround;
    }
  } else if (cameraOutsideAtmosphere) {
    if (forceGroundFromDepth) {
      isSky = false;
    } else if (passOriginalSpace) {
      isSky = true;
    } else {
      isSky = !hitBottom;
    }
  } else {
    isSky = false;
  }

  // 天际线黑带：壳层内 applyGroundAtmosphere=0 时 isSky=false 会透传 originalColor；掠射带 hasScene/深度抖动使误判为几何，
  // 而主缓冲该处常为未着色黑 → 一条黑带。仅在「宽带仍像天空 + 原色极暗 + 视线未朝脚下」时拉回天空，避免压暗色地形。
  if (inShell && u_applyGroundAtmosphere == 0) {
    float lum = dot(originalColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    if (!isSky && lum < 0.04 && depthLikelySky && !explicitGround && depth >= 1.0 - 0.01 && muLook > -0.14) {
      isSky = true;
    }
  }

  // 地面分支仍依赖 depth 重建；若几何上已判地面但深度未重建出 hit，用 bottom 球前向交点兜底（同 aerial）
  if (!isSky && !hasScene && hitBottom) {
    float bG = dot(cameraPosition, rayDirection);
    float cG = dot(cameraPosition, cameraPosition) - bottomRadius * bottomRadius;
    float discG = bG * bG - cG;
    if (discG > 0.0) {
      float sG = sqrt(discG);
      float tHitG = -bG - sG;
      if (tHitG <= 1e-6) {
        tHitG = -bG + sG;
      }
      if (tHitG > 1e-6) {
        hasScene = true;
        vec3 sceneKmG = cameraPosition + rayDirection * tHitG;
        rawWorldPosMeters = sceneKmG / METER_TO_LENGTH_UNIT;
        sceneDist = tHitG;
      }
    }
  }

  float b = dot(cameraPosition, rayDirection);
  float c = dot(cameraPosition, cameraPosition) - topRadius * topRadius;
  float disc = b * b - c;
  float tMax = MAX_FLOAT;
  float tEnterTop = 0.0;
  if (disc > 0.0) {
    float s = sqrt(disc);
    float t0 = -b - s;
    float t1 = -b + s;
    tEnterTop = (t0 > 0.0) ? t0 : max(t1, 0.0);
    tMax = max(t1, 0.0);
  }
  c = dot(cameraPosition, cameraPosition) - bottomRadius * bottomRadius;
  disc = b * b - c;
  if (disc > 0.0) {
    float tHit = -b - sqrt(disc);
    if (tHit > 0.0) tMax = min(tMax, tHit);
  }

  // Shadow length: march along view ray sampling BSM (Tyndall / God rays)
  // 云层典型高度 2~15km， marching 区间收紧到 0~25km 以提高采样密度
  float marchMax = 25.0;
  float startT = (isSky && camR > topRadius + 1e-3) ? tEnterTop : 0.0;
  float shadowRayEnd = isSky ? min(tMax, startT + marchMax) : min(sceneDist, marchMax);
  float shadowRayBegin = max(startT, shadowRayEnd - marchMax);
  // 优先 shadowLengthBuffer；未提供纹理时回退为沿视线 BSM 步进（与 three-geospatial 丁达尔一致）
  float shadowLength;
  if (u_shadowLengthEnabled != 0) {
    shadowLength = readShadowLengthBuffer(v_textureCoordinates) * max(u_tyndallScale, 0.0);
  } else if (u_cloudShadowEnabled != 0) {
    shadowLength = marchShadowLengthAtm(cameraPosition, rayDirection, shadowRayBegin, shadowRayEnd);
  } else {
    shadowLength = 0.0;
  }

  vec3 transmittance;
  vec3 finalColor;

  if (isSky) {
      // 注意：getSkyRadiance 内部会自己计算 transmittance
      vec3 skyRadiance = getSkyRadiance(
        cameraPosition,
        rayDirection,
        shadowLength,
        u_sunDirection
      );
      finalColor = skyRadiance;
  } else if (u_applyGroundAtmosphere == 0) {
    // 地面/几何交给后续 AerialPerspectiveEffect 等单独 pass，避免两次 * transmittance + inscatter
    finalColor = originalColor.rgb;
  } else {
    // 关键：直接使用 depth 重建出的世界坐标作为命中点，避免 camera + ray * dist 在远距下误差放大引发闪烁
    vec3 scenePos = rawWorldPosMeters * METER_TO_LENGTH_UNIT;
    vec3 inscatter = GetSkyRadianceToPoint(
      cameraPosition,
      scenePos,
      shadowLength,
      u_sunDirection,
      transmittance
    );
    float sunTransmittance = getGroundSunTransmittance(rawWorldPosMeters);
    finalColor = originalColor.rgb * transmittance * sunTransmittance + inscatter;
  }

  // 线性 HDR + 单次曝光；ACES/gamma 仅在后接 AerialPerspectiveEffect 中做，避免两道 ACES 叠乘过曝
  out_FragColor = vec4(finalColor * u_atmosphereExposure, originalColor.a);
}
`}class Te{constructor(e,t={}){this.viewer=e,this.assetsBaseUrl=t.assetsBaseUrl??fe,this.shaderBaseUrl=t.shaderBaseUrl??"./src/AtmosphereFromThreeGeospatial/Shaders/",this.atmosphereParams=t.atmosphereParams??new W,this.stage=null,this.textures=null,this._ready=null,this._atmosphereExposure=t.atmosphereExposure??1,this._exposureFollowTimeline=t.exposureFollowTimeline??!0,this._exposureDay=t.exposureDay??1,this._exposureNight=t.exposureNight??.1,this._exposureTwilightAngleDegrees=t.exposureTwilightAngleDegrees??6,this._debugTyndallMode=0,this._tyndallScale=2.5,this._bsmTyndallOpticalDepthScale=1,this._bsmGroundOpticalDepthScale=1,this._shadowLengthEnabled=!0,this._shadowLengthTexture=null,this._shadowLengthScale=1,this._cloudShadowEnabled=!1,this._cloudShadowBuffer=null,this._cloudShadowDecode=null,this._cloudShadowNear=.1,this._cloudShadowFar=2e5,this._cloudShadowTopHeight=5e3,this._cloudShadowBottomRadius=this.atmosphereParams.bottomRadius,this._cloudShadowIntervals=null,this._cloudShadowMatrices=null,this._cloudShadowTexScale=1,this._cloudShadowTexelSize=null,this._geometricErrorCorrectionAmount=0,this._gui=null,this.enableGui=t.enableGui===!0,this._renderSky=t.renderSky??!1,this._applyGroundAtmosphere=t.applyGroundAtmosphere??!0,this._autoAddStage=t.autoAddStage??!0}_getAltitudeCorrectionOffsetKm(e){var m,f,p,T,l;const t=window.Cesium;if(!t)return{x:0,y:0,z:0};const r=(p=(f=(m=this.viewer)==null?void 0:m.scene)==null?void 0:f.globe)==null?void 0:p.ellipsoid,a=(l=(T=this.viewer)==null?void 0:T.camera)==null?void 0:l.positionWC;if(!r||!a)return new t.Cartesian3(0,0,0);const o=t.Cartographic.fromCartesian(a,r);if(!o)return new t.Cartesian3(0,0,0);const i=t.Cartesian3.fromRadians(o.longitude,o.latitude,0,r),n=r.geodeticSurfaceNormal(i,new t.Cartesian3),s=t.Cartesian3.subtract(i,t.Cartesian3.multiplyByScalar(n,Number(e)||0,new t.Cartesian3),new t.Cartesian3),d=t.Cartesian3.negate(s,new t.Cartesian3);return new t.Cartesian3(d.x*.001,d.y*.001,d.z*.001)}_getEffectiveAtmosphereExposure(){var y,S,u,_,I;if(!this._exposureFollowTimeline)return this._atmosphereExposure;const e=window.Cesium;if(!e||!((S=(y=this.viewer)==null?void 0:y.camera)!=null&&S.positionWC))return this._exposureDay;const t=this.viewer.camera.positionWC,r=((u=this.viewer.scene.globe)==null?void 0:u.ellipsoid)??e.Ellipsoid.WGS84,a=(I=(_=this.viewer.scene.context)==null?void 0:_.uniformState)==null?void 0:I.sunDirectionWC;if(!a)return this._exposureDay;const o=e.Cartographic.fromCartesian(t,r);if(!o)return this._exposureDay;const i=e.Cartesian3.fromRadians(o.longitude,o.latitude,0,r,new e.Cartesian3),n=r.geodeticSurfaceNormal(i,new e.Cartesian3),s=e.Cartesian3.normalize(a,new e.Cartesian3),d=e.Math.clamp(e.Cartesian3.dot(s,n),-1,1),m=e.Math.toDegrees(Math.asin(d)),f=Math.max(.1,Number(this._exposureTwilightAngleDegrees)||6),p=-f,T=f;let l=(m-p)/(T-p);l=e.Math.clamp(l,0,1);const w=Number(this._exposureDay),h=Number(this._exposureNight);return h+l*(w-h)}async init(){if(this._ready)return this._ready;this.viewer.scene.globe.depthTestAgainstTerrain=!0;const e=this.viewer.scene,t=e.context;if(!(t._gl instanceof WebGL2RenderingContext))throw new Error("AtmospherePostProcess 需要 WebGL2（用于 3D 散射纹理）。");const a=window.Cesium;if(!a)throw new Error("需要全局 Cesium。");return this._ready=(async()=>{const[o,i,n]=await Promise.all([M("bruneton/definitions.glsl",{shaderBaseUrl:this.shaderBaseUrl}),M("bruneton/common.glsl",{shaderBaseUrl:this.shaderBaseUrl}),M("bruneton/runtime.glsl",{shaderBaseUrl:this.shaderBaseUrl})]),s=await M("sky.glsl",{shaderBaseUrl:this.shaderBaseUrl});this.textures=await J(this.assetsBaseUrl,t,a);const d=1024,m=!!t.halfFloatingPointTexture&&!!t.colorBufferHalfFloat,f=m?a.PixelDatatype.HALF_FLOAT:a.PixelDatatype.UNSIGNED_BYTE;let p=a.PixelDatatype.UNSIGNED_BYTE;m?p=a.PixelDatatype.HALF_FLOAT:t.colorBufferFloat&&t.floatingPointTexture&&(p=a.PixelDatatype.FLOAT),this._cloudShadowCesiumTexture=new a.Texture({context:t,width:d,height:d,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:f,sampler:new a.Sampler({minificationFilter:a.TextureMinificationFilter.LINEAR,magnificationFilter:a.TextureMagnificationFilter.LINEAR,wrapS:a.TextureWrap.CLAMP_TO_EDGE,wrapT:a.TextureWrap.CLAMP_TO_EDGE})}),this._cloudShadowTexScale=m?1:.02,this._cloudShadowTexClamp01=!m,this._cloudShadowDummyArray=null;const T=Se(o,i,n,s);e.skyAtmosphere&&(e.skyAtmosphere.show=!1);const l=this,w=j(this.atmosphereParams.toUniform()),h={u_cameraPosition:()=>{const S=l.viewer.camera.positionWC;return new a.Cartesian3(S.x*.001,S.y*.001,S.z*.001)},u_altitudeCorrection:()=>l._getAltitudeCorrectionOffsetKm(l.atmosphereParams.bottomRadius),u_sunDirection:()=>{var S,u;return((u=(S=l.viewer.scene.context)==null?void 0:S.uniformState)==null?void 0:u.sunDirectionWC)??new a.Cartesian3(1,0,0)},u_groundAlbedo:()=>new a.Cartesian3(0,0,0),u_renderSky:()=>l._renderSky?1:0,u_sunPixelAngle:()=>{const S=l.viewer.camera,u=l.viewer.scene.canvas&&l.viewer.scene.canvas.clientHeight||1080,_=(S.frustum&&S.frustum.fov)!=null?S.frustum.fov:Math.PI/3;return Math.max(_/u,1e-6)},transmittance_texture:()=>l.textures.transmittanceTexture,scattering_texture:()=>l.textures.scatteringTexture,single_mie_scattering_texture:()=>l.textures.singleMieScatteringTexture,irradiance_texture:()=>l.textures.irradianceTexture,SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:()=>{const S=l.atmosphereParams.sunRadianceToRelativeLuminance;return new a.Cartesian3(S[0],S[1],S[2])},SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:()=>{const S=l.atmosphereParams.skyRadianceToRelativeLuminance;return new a.Cartesian3(S[0],S[1],S[2])}};for(const[S,u]of Object.entries(w))Array.isArray(u)&&u.length===3&&u.every(Number.isFinite)?h[S]=new a.Cartesian3(u[0],u[1],u[2]):h[S]=u;const y=.001;h["ATMOSPHERE.bottom_radius"]=()=>l.atmosphereParams.bottomRadius*y,h["ATMOSPHERE.top_radius"]=()=>l.atmosphereParams.topRadius*y,h.u_atmosphereExposure=()=>l._getEffectiveAtmosphereExposure(),h.u_cloudShadowEnabled=()=>l._cloudShadowEnabled?1:0,h.u_cloudShadowScale=()=>l._cloudShadowTexScale??1,h.u_cloudShadowDecode=()=>l._cloudShadowDecode??new a.Cartesian4(1,1,1,1),h.u_cloudShadowBuffer=()=>l._cloudShadowBuffer??l.textures.transmittanceTexture,h.u_cloudShadowNear=()=>l._cloudShadowNear??.1,h.u_cloudShadowFar=()=>l._cloudShadowFar??2e5,h.u_cloudShadowTopHeight=()=>l._cloudShadowTopHeight??5e3,h.u_cloudShadowBottomRadius=()=>l._cloudShadowBottomRadius??l.atmosphereParams.bottomRadius,h.u_cloudShadowIntervals=()=>l._cloudShadowIntervals??[new a.Cartesian2(0,0),new a.Cartesian2(0,0),new a.Cartesian2(0,0),new a.Cartesian2(0,0)],h.u_cloudShadowMatrices=()=>l._cloudShadowMatrices??[a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone()],h.u_cloudShadowTexelSize=()=>l._cloudShadowTexelSize??new a.Cartesian2(1/512,1/512),h.u_geometricErrorCorrectionAmount=()=>l._geometricErrorCorrectionAmount??0,h.u_shadowLengthEnabled=()=>l._shadowLengthEnabled?1:0,h.u_shadowLengthScale=()=>l._shadowLengthScale??1,h.u_shadowLengthBuffer=()=>l._shadowLengthTexture??l.textures.transmittanceTexture,h.u_applyGroundAtmosphere=()=>l._applyGroundAtmosphere?1:0,h.u_debugTyndall=()=>l._debugTyndallMode??0,h.u_tyndallScale=()=>l._tyndallScale??1,h.u_bsmTyndallOpticalDepthScale=()=>l._bsmTyndallOpticalDepthScale??1,h.u_bsmGroundOpticalDepthScale=()=>l._bsmGroundOpticalDepthScale??1,this.stage=new a.PostProcessStage({name:"AtmosphereFromThreeGeospatial",fragmentShader:T,uniforms:h,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:p}),l._autoAddStage!==!1&&e.postProcessStages.add(this.stage),this.enableGui&&this._setupGUI()})(),this._ready}_setupGUI(){if(this._gui||!this.enableGui)return;const e=typeof window<"u"&&window.dat?window.dat:null;if(!(e!=null&&e.GUI))return;this._gui=new e.GUI({name:"大气参数"});const t=this._gui.addFolder("大气控制");t.add(this,"_exposureFollowTimeline").name("曝光随时间轴(太阳高度)"),t.add(this,"_exposureDay",0,5,.05).name("白天曝光"),t.add(this,"_exposureNight",0,2,.01).name("夜晚曝光"),t.add(this,"_exposureTwilightAngleDegrees",.5,18,.5).name("晨昏过渡半角(度)"),t.add(this,"_atmosphereExposure",0,30,.01).name("手动曝光(关时间轴时)"),t.add(this.atmosphereParams,"bottomRadius",63e5,64e5,10).name("bottom_radius (m)"),t.add(this.atmosphereParams,"topRadius",635e4,65e5,10).name("top_radius (m)");const r=this._gui.addFolder("丁达尔调试");r.add(this,"_tyndallScale",.5,6,.25).name("光柱强度 (scale)"),r.add(this,"_bsmTyndallOpticalDepthScale",.1,50,.1).name("BSM OD 缩放(光柱)"),r.add(this,"_bsmGroundOpticalDepthScale",.1,50,.1).name("BSM OD 缩放(地面)"),r.add(this,"_debugTyndallMode",{关闭:0,"1: shadowLength":1,"2: BSM启用(绿=是)":2,"3: BSM单点采样":3,"4: BSM纹理直显(B)":4,"5: transmittance诊断":5,"6: BSM纹理直显(R)":6,"7: BSM纹理直显(G)":7,"8: BSM纹理直显(A)":8}).name("调试模式"),r.open(),t.open()}setCloudShadow(e){if(this._cloudShadowEnabled=e.enabled??!1,this._cloudShadowBuffer=e.texture??null,e.scale!==void 0&&(this._cloudShadowTexScale=e.scale),e.decode){const t=e.decode;this._cloudShadowDecode=new Z.Cartesian4(t.x??1,t.y??1,t.z??1,t.w??1)}if(this._cloudShadowNear=e.near??this._cloudShadowNear??.1,this._cloudShadowFar=e.far??2e5,this._cloudShadowTopHeight=e.topHeight??5e3,this._cloudShadowBottomRadius=e.bottomRadius??this.atmosphereParams.bottomRadius,this._cloudShadowIntervals=e.intervals??null,this._cloudShadowMatrices=e.matrices??null,e.texelSize){const t=e.texelSize;this._cloudShadowTexelSize=new Z.Cartesian2(t.x??t[0]??1/512,t.y??t[1]??1/512)}e.geometricErrorCorrectionAmount!==void 0&&(this._geometricErrorCorrectionAmount=e.geometricErrorCorrectionAmount)}setCloudShadowLength(e){this._shadowLengthEnabled=e.enabled??!1,this._shadowLengthTexture=e.texture??null,e.scale!==void 0&&(this._shadowLengthScale=e.scale)}getAtmosphereForClouds(){if(!this.textures)throw new Error("AtmospherePostProcess.getAtmosphereForClouds() 需在 init() 完成后再调用");const e=window.Cesium,t=this,r=j(this.atmosphereParams.toUniform()),a={};for(const[n,s]of Object.entries(r))Array.isArray(s)&&s.length===3&&s.every(Number.isFinite)?a[n]=new e.Cartesian3(s[0],s[1],s[2]):a[n]=s;a.SUN_SPECTRAL_RADIANCE_TO_LUMINANCE=(()=>{const n=this.atmosphereParams.sunRadianceToRelativeLuminance;return new e.Cartesian3(n[0],n[1],n[2])})(),a.SKY_SPECTRAL_RADIANCE_TO_LUMINANCE=(()=>{const n=this.atmosphereParams.skyRadianceToRelativeLuminance;return new e.Cartesian3(n[0],n[1],n[2])})(),a.altitudeCorrection=new e.Cartesian3(0,0,0),a.worldToECEFMatrix=e.Matrix4.IDENTITY,a.ecefToWorldMatrix=e.Matrix4.IDENTITY;const o=.001;a["ATMOSPHERE.bottom_radius"]=()=>t.atmosphereParams.bottomRadius*o,a["ATMOSPHERE.top_radius"]=()=>t.atmosphereParams.topRadius*o;function i(){return{...a,bottomRadius:()=>t.atmosphereParams.bottomRadius,topRadius:()=>t.atmosphereParams.topRadius,atmosphereExposure:()=>t._getEffectiveAtmosphereExposure(),transmittance_texture:()=>t.textures.transmittanceTexture,scattering_texture:()=>t.textures.scatteringTexture,irradiance_texture:()=>t.textures.irradianceTexture,single_mie_scattering_texture:()=>t.textures.scatteringTexture,higher_order_scattering_texture:()=>null,sunDirection:()=>{var n,s;return((s=(n=t.viewer.scene.context)==null?void 0:n.uniformState)==null?void 0:s.sunDirectionWC)??new e.Cartesian3(1,0,0)},cameraPosition:()=>{const n=t.viewer.camera.positionWC;return new e.Cartesian3(n.x,n.y,n.z)}}}return{textures:{transmittanceTexture:this.textures.transmittanceTexture,scatteringTexture:this.textures.scatteringTexture,irradianceTexture:this.textures.irradianceTexture,singleMieScatteringTexture:this.textures.scatteringTexture,higherOrderScatteringTexture:null},getCloudShadowTargetTexture:()=>t._cloudShadowCesiumTexture??null,getCloudShadowScale:()=>t._cloudShadowTexScale??1,getCloudShadowClamp01:()=>t._cloudShadowTexClamp01??!0,getUniforms:i,setCloudShadow:n=>t.setCloudShadow(n),setCloudShadowLength:n=>t.setCloudShadowLength(n),setDebugTyndall:n=>{t._debugTyndallMode=n?1:0},setDebugTyndallMode:n=>{t._debugTyndallMode=n},atmosphereParams:this.atmosphereParams,constants:{METER_TO_LENGTH_UNIT:.001,precomputeConstants:z,getShaderDefines:()=>`#define COMBINED_SCATTERING_TEXTURES
`+ue()}}}destroy(){this.stage&&this.viewer.scene.postProcessStages&&(this.viewer.scene.postProcessStages.remove(this.stage),this.stage=null),this.viewer.scene.skyAtmosphere&&(this.viewer.scene.skyAtmosphere.show=!0),this._gui&&(this._gui.destroy(),this._gui=null),this._cloudShadowCesiumTexture&&(this._cloudShadowCesiumTexture.destroy(),this._cloudShadowCesiumTexture=null),this._cloudShadowDummyArray=null,this.textures=null,this._ready=null}}V();const ge="./src/AtmosphereFromThreeGeospatial/assets/";class Ee{constructor(e,t={}){this.viewer=e,this.assetsBaseUrl=t.assetsBaseUrl??ge,this.shaderBaseUrl=t.shaderBaseUrl??"./src/AtmosphereFromThreeGeospatial/Shaders/",this.atmosphereParams=t.atmosphereParams??new W,this.stage=null,this.textures=null,this._ready=null,this._cloudShadowEnabled=!1,this._cloudShadowBuffer=null,this._cloudShadowDecode=null,this._cloudShadowNear=.1,this._cloudShadowFar=2e5,this._cloudShadowTopHeight=5e3,this._cloudShadowBottomRadius=this.atmosphereParams.bottomRadius,this._cloudShadowIntervals=null,this._cloudShadowMatrices=null,this._cloudShadowTexScale=1,this._cloudShadowTexClamp01=!0,this._cloudShadowCesiumTexture=null,this._cloudShadowDummyArray=null,this._cloudShadowTexelSize=null,this._geometricErrorCorrectionAmount=0,this._cloudShadowLengthEnabled=!1,this._cloudShadowLengthTexture=null,this._cloudShadowLengthScale=1,this._debugTyndallMode=0,this._tyndallScale=2.5,this._bsmTyndallOpticalDepthScale=1,this._bsmGroundOpticalDepthScale=1,this._logCameraAltitude=t.logCameraAltitude??!1,this._logCameraPositionEpsilonMeters=t.logCameraPositionEpsilonMeters??.05,this._logCameraDirectionEpsilon=t.logCameraDirectionEpsilon??1e-5,this._cameraAltitudePostRenderHandler=null,this._cameraAltitudeLogStateInitialized=!1,this._lastCameraPosForAltitudeLog=null,this._lastCameraDirForAltitudeLog=null,this._scratchCartographic=null,this._autoAddStage=t.autoAddStage??!0}_getAltitudeCorrectionOffsetKm(e){var m,f,p,T,l;const t=window.Cesium;if(!t)return{x:0,y:0,z:0};const r=(p=(f=(m=this.viewer)==null?void 0:m.scene)==null?void 0:f.globe)==null?void 0:p.ellipsoid,a=(l=(T=this.viewer)==null?void 0:T.camera)==null?void 0:l.positionWC;if(!r||!a)return new t.Cartesian3(0,0,0);const o=t.Cartographic.fromCartesian(a,r);if(!o)return new t.Cartesian3(0,0,0);const i=t.Cartesian3.fromRadians(o.longitude,o.latitude,0,r),n=r.geodeticSurfaceNormal(i,new t.Cartesian3),s=t.Cartesian3.subtract(i,t.Cartesian3.multiplyByScalar(n,Number(e)||0,new t.Cartesian3),new t.Cartesian3),d=t.Cartesian3.negate(s,new t.Cartesian3);return new t.Cartesian3(d.x*.001,d.y*.001,d.z*.001)}async init(){if(this._ready)return this._ready;const e=this.viewer.scene,t=e.context;if(!(t._gl instanceof WebGL2RenderingContext))throw new Error("AerialPerspectiveEffect 需要 WebGL2（用于 3D 散射纹理）。");const a=window.Cesium;if(!a)throw new Error("需要全局 Cesium。");return this._ready=(async()=>{var N;this.textures=await J(this.assetsBaseUrl,t,a);const o=1024,i=!!t.halfFloatingPointTexture&&!!t.colorBufferHalfFloat,n=i?a.PixelDatatype.HALF_FLOAT:a.PixelDatatype.UNSIGNED_BYTE;this._cloudShadowCesiumTexture=new a.Texture({context:t,width:o,height:o,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:n,sampler:new a.Sampler({minificationFilter:a.TextureMinificationFilter.LINEAR,magnificationFilter:a.TextureMagnificationFilter.LINEAR,wrapS:a.TextureWrap.CLAMP_TO_EDGE,wrapT:a.TextureWrap.CLAMP_TO_EDGE})}),this._cloudShadowTexScale=i?1:.02,this._cloudShadowTexClamp01=!i,this._cloudShadowDummyArray=null;const s={shaderBaseUrl:this.shaderBaseUrl},[d,m,f,p]=await Promise.all([M("bruneton/definitions.glsl",s),M("bruneton/common.glsl",s),M("bruneton/runtime.glsl",s),M("aerialPerspectiveEffect.frag",s)]),T=z,l=`
precision highp float;
precision highp sampler2D;
precision highp sampler3D;
`,w=["#define COMBINED_SCATTERING_TEXTURES",`#define SCATTERING_TEXTURE_R_SIZE ${T.SCATTERING_TEXTURE_R_SIZE}`,`#define SCATTERING_TEXTURE_MU_SIZE ${T.SCATTERING_TEXTURE_MU_SIZE}`,`#define SCATTERING_TEXTURE_MU_S_SIZE ${T.SCATTERING_TEXTURE_MU_S_SIZE}`,`#define SCATTERING_TEXTURE_NU_SIZE ${T.SCATTERING_TEXTURE_NU_SIZE}`,`#define TRANSMITTANCE_TEXTURE_WIDTH ${T.TRANSMITTANCE_TEXTURE_WIDTH}`,`#define TRANSMITTANCE_TEXTURE_HEIGHT ${T.TRANSMITTANCE_TEXTURE_HEIGHT}`,`#define IRRADIANCE_TEXTURE_WIDTH ${T.IRRADIANCE_TEXTURE_WIDTH}`,`#define IRRADIANCE_TEXTURE_HEIGHT ${T.IRRADIANCE_TEXTURE_HEIGHT}`].join(`
`),y=l+w+`
`+d+`
`+m+`
`+`
uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;
uniform sampler2D irradiance_texture;
`+f+`
`+p,S=le(this.atmosphereParams.toUniform()),u=this,_={u_cameraPosition:()=>{const g=u.viewer.camera.positionWC;return new a.Cartesian3(g.x*.001,g.y*.001,g.z*.001)},u_altitudeCorrection:()=>u._getAltitudeCorrectionOffsetKm(u.atmosphereParams.bottomRadius),u_sunDirection:()=>{var g,v;return((v=(g=u.viewer.scene.context)==null?void 0:g.uniformState)==null?void 0:v.sunDirectionWC)??new a.Cartesian3(1,0,0)},u_sunPixelAngle:()=>{const g=u.viewer.camera,v=u.viewer.scene.canvas&&u.viewer.scene.canvas.clientHeight||1080,b=g.frustum&&g.frustum.fov!=null?g.frustum.fov:Math.PI/3;return Math.max(b/v,1e-6)},transmittance_texture:()=>u.textures.transmittanceTexture,scattering_texture:()=>u.textures.scatteringTexture,single_mie_scattering_texture:()=>u.textures.singleMieScatteringTexture,higher_order_scattering_texture:()=>u.textures.higherOrderScatteringTexture,SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:()=>{const g=u.atmosphereParams.sunRadianceToRelativeLuminance;return new a.Cartesian3(g[0],g[1],g[2])},SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:()=>{const g=u.atmosphereParams.skyRadianceToRelativeLuminance;return new a.Cartesian3(g[0],g[1],g[2])}};for(const[g,v]of Object.entries(S))Array.isArray(v)&&v.length===3&&v.every(Number.isFinite)?_[g]=new a.Cartesian3(v[0],v[1],v[2]):_[g]=v;const I=.001;if(_["ATMOSPHERE.bottom_radius"]=()=>u.atmosphereParams.bottomRadius*I,_["ATMOSPHERE.top_radius"]=()=>u.atmosphereParams.topRadius*I,_.u_atmosphereExposure=()=>{var g;return((g=u.viewer.scene.postProcessStages.getStageByName("AtmosphereFromThreeGeospatial"))==null?void 0:g._atmosphereExposure)??1.5},_.u_cloudShadowEnabled=()=>u._cloudShadowEnabled?1:0,_.u_cloudShadowScale=()=>u._cloudShadowTexScale??1,_.u_cloudShadowDecode=()=>u._cloudShadowDecode??new a.Cartesian4(1,1,1,1),_.u_cloudShadowBuffer=()=>u._cloudShadowBuffer??u.textures.transmittanceTexture,_.u_cloudShadowNear=()=>u._cloudShadowNear??.1,_.u_cloudShadowFar=()=>u._cloudShadowFar??2e5,_.u_cloudShadowTopHeight=()=>u._cloudShadowTopHeight??5e3,_.u_cloudShadowBottomRadius=()=>u._cloudShadowBottomRadius??u.atmosphereParams.bottomRadius,_.u_cloudShadowIntervals=()=>u._cloudShadowIntervals??[new a.Cartesian2(0,0),new a.Cartesian2(0,0),new a.Cartesian2(0,0),new a.Cartesian2(0,0)],_.u_cloudShadowMatrices=()=>u._cloudShadowMatrices??[a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone()],_.u_cloudShadowTexelSize=()=>u._cloudShadowTexelSize??new a.Cartesian2(1/512,1/512),_.u_geometricErrorCorrectionAmount=()=>u._geometricErrorCorrectionAmount??0,_.u_cloudShadowLengthEnabled=()=>u._cloudShadowLengthEnabled?1:0,_.u_cloudShadowLengthScale=()=>u._cloudShadowLengthScale??1,_.u_cloudShadowLengthTexture=()=>u._cloudShadowLengthTexture??u.textures.transmittanceTexture,_.u_debugTyndall=()=>u._debugTyndallMode??0,_.u_tyndallScale=()=>u._tyndallScale??1,_.u_bsmTyndallOpticalDepthScale=()=>u._bsmTyndallOpticalDepthScale??1,_.u_bsmGroundOpticalDepthScale=()=>u._bsmGroundOpticalDepthScale??1,this.stage=new a.PostProcessStage({name:"AerialPerspectiveEffect",fragmentShader:y,uniforms:_}),u._autoAddStage!==!1&&e.postProcessStages.add(this.stage),u._logCameraAltitude){const g=((N=u.viewer.scene.globe)==null?void 0:N.ellipsoid)??a.Ellipsoid.WGS84;u._scratchCartographic=new a.Cartographic,u._lastCameraPosForAltitudeLog=new a.Cartesian3,u._lastCameraDirForAltitudeLog=new a.Cartesian3,u._cameraAltitudePostRenderHandler=function(){const v=u.viewer.camera,b=v.positionWC,L=v.directionWC,O=u._logCameraPositionEpsilonMeters,F=u._logCameraDirectionEpsilon;if(u._cameraAltitudeLogStateInitialized){const R=a.Cartesian3.distance(b,u._lastCameraPosForAltitudeLog),x=a.Cartesian3.dot(L,u._lastCameraDirForAltitudeLog);if(R<O&&1-x<F)return}u._cameraAltitudeLogStateInitialized=!0,a.Cartesian3.clone(b,u._lastCameraPosForAltitudeLog),a.Cartesian3.clone(L,u._lastCameraDirForAltitudeLog),a.Cartographic.fromCartesian(b,g,u._scratchCartographic);const D=u._scratchCartographic,E=D.height,P=a.Math.toDegrees(D.longitude),U=a.Math.toDegrees(D.latitude),k=a.Cartesian3.magnitude(b)*.001},u.viewer.scene.postRender.addEventListener(u._cameraAltitudePostRenderHandler)}})(),this._ready}setCloudShadow(e){const t=window.Cesium;if(this._cloudShadowEnabled=e.enabled??!1,this._cloudShadowBuffer=e.texture??null,e.scale!==void 0&&(this._cloudShadowTexScale=e.scale),e.decode){const r=e.decode;this._cloudShadowDecode=new t.Cartesian4(r.x??1,r.y??1,r.z??1,r.w??1)}this._cloudShadowNear=e.near??this._cloudShadowNear??.1,this._cloudShadowFar=e.far??2e5,this._cloudShadowTopHeight=e.topHeight??5e3,this._cloudShadowBottomRadius=e.bottomRadius??this.atmosphereParams.bottomRadius,this._cloudShadowIntervals=e.intervals??null,this._cloudShadowMatrices=e.matrices??null,e.texelSize&&(this._cloudShadowTexelSize=new t.Cartesian2(e.texelSize.x??e.texelSize[0]??1/512,e.texelSize.y??e.texelSize[1]??1/512)),e.geometricErrorCorrectionAmount!==void 0&&(this._geometricErrorCorrectionAmount=e.geometricErrorCorrectionAmount)}setCloudShadowLength(e){this._cloudShadowLengthEnabled=e.enabled??!1,this._cloudShadowLengthTexture=e.texture??null,e.scale!==void 0&&(this._cloudShadowLengthScale=e.scale)}getCameraAltitudeMeters(){var a,o,i;const e=window.Cesium;if(!e||!((o=(a=this.viewer)==null?void 0:a.camera)!=null&&o.positionWC))return NaN;const t=((i=this.viewer.scene.globe)==null?void 0:i.ellipsoid)??e.Ellipsoid.WGS84,r=new e.Cartographic;return e.Cartographic.fromCartesian(this.viewer.camera.positionWC,t,r),r.height}destroy(){var t;const e=(t=this.viewer)==null?void 0:t.scene;this._cameraAltitudePostRenderHandler&&e&&(e.postRender.removeEventListener(this._cameraAltitudePostRenderHandler),this._cameraAltitudePostRenderHandler=null),this._cameraAltitudeLogStateInitialized=!1,this._lastCameraPosForAltitudeLog=null,this._lastCameraDirForAltitudeLog=null,this._scratchCartographic=null,this.stage&&e&&e.postProcessStages&&e.postProcessStages.remove(this.stage),this.stage=null,this.textures=null,this._ready=null,this._cloudShadowCesiumTexture&&(this._cloudShadowCesiumTexture.destroy(),this._cloudShadowCesiumTexture=null)}}const ve=c=>new Uint8Array(c);function xe(c,e,t,r){const a=new ie;a.setResponseType("arraybuffer"),a.load(c,e,t,r)}function we(c,e,t,r,a){xe(c,o=>{try{t(e(o))}catch(i){a&&a(i)}},r,a)}function Re(c,e){return new Promise((t,r)=>{const a=new oe,o={width:e,height:e,depth:e,format:ce,minFilter:q,magFilter:q,wrapS:X,wrapT:X,wrapR:X,colorSpace:se};we(c,ve,i=>{a.image.data=i,a.image.width=o.width,a.image.height=o.height,a.image.depth=o.depth,a.format=o.format,a.minFilter=o.minFilter,a.magFilter=o.magFilter,a.wrapS=o.wrapS,a.wrapT=o.wrapT,a.wrapR=o.wrapR,a.colorSpace=o.colorSpace,a.needsUpdate=!0,t(a)},void 0,r)})}function Ae(c,e,t){const r=e.image.data,a=e.image.width,o=e.image.height,i=e.image.depth;return new t.Texture3D({context:c.scene.context,width:a,height:o,depth:i,pixelFormat:t.PixelFormat.RED,pixelDatatype:t.PixelDatatype.UNSIGNED_BYTE,flipY:!1,source:{arrayBufferView:r,width:a,height:o,depth:i},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.REPEAT,wrapT:t.TextureWrap.REPEAT,wrapR:t.TextureWrap.REPEAT})})}const ye="cesium-clouds-atmosphere",be="0.1.0",Ie=`https://cdn.jsdelivr.net/npm/${ye}@${be}`,ee="./public/clouds-assets/",te="./src/AtmosphereFromThreeGeospatial/Shaders/bruneton/",ae="./public/data/noisePic/noisergba256.png",re="./src/AtmosphereFromThreeGeospatial/assets/",ne="./src/AtmosphereFromThreeGeospatial/Shaders/";function Ce(c={}){const e=c.mode??"cdn";if(e==="local")return{cloudsAssetsBase:ee,brunetonShaderBase:te,blueNoiseUrl:ae,atmosphereAssetsBase:re,atmosphereShaderBase:ne};if(e==="custom"){const r=(c.base??"").replace(/\/+$/,"");if(!r)throw new Error('resolveAssetPaths({ mode: "custom" }) requires options.base');return{cloudsAssetsBase:`${r}/public/clouds-assets/`,brunetonShaderBase:`${r}/shaders/bruneton/`,blueNoiseUrl:`${r}/public/data/noisePic/noisergba256.png`,atmosphereAssetsBase:`${r}/assets/`,atmosphereShaderBase:`${r}/shaders/`}}const t=(c.cdnBase??Ie).replace(/\/+$/,"");return{cloudsAssetsBase:`${t}/public/clouds-assets/`,brunetonShaderBase:`${t}/src/AtmosphereFromThreeGeospatial/Shaders/bruneton/`,blueNoiseUrl:`${t}/public/data/noisePic/noisergba256.png`,atmosphereAssetsBase:`${t}/src/AtmosphereFromThreeGeospatial/assets/`,atmosphereShaderBase:`${t}/src/AtmosphereFromThreeGeospatial/Shaders/`}}const Y=1024,Q=1024;function Ne(){return`
const float RECIPROCAL_PI4 = 0.07957747154594767;
const float EVOLUTION_SCALE = 2e4;

uniform sampler2D colorTexture;
uniform sampler2D depthTexture;
uniform sampler3D u_shapeTexture;
uniform sampler3D u_shapeDetailTexture;
uniform sampler3D u_stbnTexture;
uniform sampler2D u_weatherTexture;
uniform sampler2D u_turbulenceTexture;
uniform sampler2D u_blueNoise;
uniform float u_blueNoiseScale;
uniform float u_jitterStrength;

uniform vec3 u_cameraPosition;
uniform vec3 u_altitudeCorrection;
uniform float u_cameraHeight;
uniform float u_bottomRadius;
uniform float u_minHeight;
uniform float u_maxHeight;
uniform vec4 u_minLayerHeights;
uniform vec4 u_maxLayerHeights;
uniform vec4 u_densityScales;
uniform vec4 u_shapeAmounts;
uniform vec4 u_shapeDetailAmounts;
uniform vec4 u_weatherExponents;
uniform vec4 u_shapeAlteringBiases;
uniform vec4 u_coverageFilterWidths;
uniform float u_maxSteps;
uniform float u_maxStepsToSun;
uniform float u_minStepSize;
uniform float u_maxStepSize;
uniform float u_maxRayDistance;
uniform float u_cameraNear;
uniform float u_shadowTopHeight;
uniform int u_shadowLengthEnabled;
uniform int u_hazeEnabled;
uniform int u_maxShadowLengthIterationCount;
uniform float u_minShadowLengthStepSize;
uniform float u_maxShadowLengthRayDistance;
uniform float u_hazeDensityScale;
uniform float u_hazeExponent;
uniform float u_hazeScatteringCoefficient;
uniform float u_hazeAbsorptionCoefficient;
uniform sampler2D u_shadowBuffer;
uniform vec2 u_shadowTexelSize;
uniform vec2 u_shadowIntervals[4];
uniform mat4 u_shadowMatrices[4];
uniform float u_shadowFar;
uniform float u_maxShadowFilterRadius;
uniform int u_useShadowBuffer;
uniform float u_skyLightScale;
uniform float u_weatherRepeat;
uniform vec2 u_localWeatherOffset;
uniform float u_shapeRepeat;
uniform vec3 u_shapeOffset;
uniform float u_shapeDetailRepeat;
uniform vec3 u_shapeDetailOffset;
uniform float u_turbulenceRepeat;
uniform float u_turbulenceDisplacement;
uniform vec4 u_coverages;
uniform float u_coverageHaze;
uniform float u_scatteringCoefficient;
uniform float u_absorptionCoefficient;
uniform float u_scatterG1;
uniform float u_scatterG2;
uniform float u_scatterMix;
uniform float u_sunIntensity;
uniform float u_skyToSunRatio;
uniform float u_powderScale;
uniform float u_powderExponent;
uniform float u_aerialPerspectiveScale;
uniform float u_cloudExposure;
uniform float u_magentaFixStrength;
uniform float u_edgeAlphaCutoff;
uniform vec2 u_resolution;
uniform float u_mipLevelScale;
uniform float u_perspectiveStepScale;
uniform float u_minDensity;
uniform float u_minExtinction;
uniform float u_minTransmittance;
// 远处云密度距离衰减：从 u_distFadeStart（米）开始线性降到0，到 u_distFadeEnd 完全消失
// 消除天际线附近云"堆在一起"的视觉拥挤
uniform float u_distFadeStart;
uniform float u_distFadeEnd;
uniform float u_minSecondaryStepSize;
uniform float u_secondaryStepScale;
uniform int u_multiScatteringOctaves;
uniform float u_lowLayerDensityBoost;
uniform vec4 u_densityProfileExpTerms;
uniform vec4 u_densityProfileExponents;
uniform vec4 u_densityProfileLinearTerms;
uniform vec4 u_densityProfileConstantTerms;
uniform vec3 u_minIntervalHeights;
uniform vec3 u_maxIntervalHeights;

uniform sampler2D u_historyTexture;
uniform mat4 u_prevViewProjection;
uniform float u_temporalAlpha;
uniform int u_temporalEnabled;
uniform int u_frame;

in vec2 v_textureCoordinates;

vec3 ACESFilmic(vec3 x) {
  float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

float saturate(float x) { return clamp(x, 0.0, 1.0); }
vec4 saturate(vec4 x) { return clamp(x, 0.0, 1.0); }
float remap(float v, float a, float b, float c, float d) { return c + (v - a) * (d - c) / (b - a); }
float remapClamped(float v, float a, float b, float c, float d) { return clamp(remap(v, a, b, c, d), min(c, d), max(c, d)); }
float remapClamped(float v, float a, float b) { return clamp((v - a) / (b - a), 0.0, 1.0); }
vec4 remap(vec4 v, vec4 a, vec4 b, vec4 c, vec4 d) { return c + (v - a) * (d - c) / (b - a); }
vec4 remapClamped(vec4 v, vec4 a, vec4 b, vec4 c, vec4 d) { return clamp(remap(v, a, b, c, d), min(c, d), max(c, d)); }
vec4 remapClamped(vec4 v, vec4 a, vec4 b) { return clamp((v - a) / (b - a), 0.0, 1.0); }

vec3 reduceMagenta(vec3 color, float strength) {
  float magenta = max(0.0, min(color.r, color.b) - color.g);
  float fix = clamp(magenta * 5.0 * max(strength, 0.0), 0.0, 1.0);
  float target = color.g;
  color.r = mix(color.r, target, fix);
  color.b = mix(color.b, target, fix);
  return color;
}

vec2 raySphereIntersect(vec3 ro, vec3 rd, float radius) {
  float b = dot(ro, rd);
  float c = dot(ro, ro) - radius * radius;
  float h = b * b - c;
  if (h < 0.0) return vec2(-1.0);
  h = sqrt(h);
  return vec2(-b - h, -b + h);
}

void reconstructRay(out vec3 ro, out vec3 rd) {
  ro = u_cameraPosition + u_altitudeCorrection;
  vec2 uv = v_textureCoordinates * 2.0 - 1.0;
  vec4 clipPos = vec4(uv, 1.0, 1.0);
  vec4 viewPos = czm_inverseProjection * clipPos;
  viewPos /= viewPos.w;
  vec4 worldPos4 = czm_inverseView * viewPos;
  vec3 worldPos = worldPos4.xyz + u_altitudeCorrection;
  rd = normalize(worldPos - ro);
}

float getSTBN() {
  // 与 three-geospatial 一致：按帧在 3D STBN 的 z 维切片轮换
  ivec3 size = textureSize(u_stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(
    u_stbnTexture,
    vec3(gl_FragCoord.xy, float(u_frame % size.z)) * scale
  ).r;
}

vec2 getCubeSphereUv(vec3 position) {
  vec3 n = normalize(position);
  vec3 f = abs(n);
  vec3 c = n / max(f.x, max(f.y, f.z));
  vec2 m;
  if (f.y >= f.x && f.y >= f.z) { m = c.y > 0.0 ? vec2(-n.x, n.z) : n.xz; }
  else if (f.x >= f.y && f.x >= f.z) { m = c.x > 0.0 ? n.yz : vec2(-n.y, n.z); }
  else { m = c.z > 0.0 ? n.xy : vec2(n.x, -n.y); }
  vec2 m2 = m * m;
  float q = dot(m2.xy, vec2(-2.0, 2.0)) - 3.0;
  float q2 = q * q;
  vec2 uv;
  uv.x = sqrt(1.5 + m2.x - m2.y - 0.5 * sqrt(max(0.0, -24.0 * m2.x + q2))) * (m.x > 0.0 ? 1.0 : -1.0);
  uv.y = sqrt(6.0 / max(0.001, 3.0 - uv.x * uv.x)) * m.y;
  return uv * 0.5 + 0.5;
}
vec2 getGlobeUv(vec3 position) { return getCubeSphereUv(position); }

float getMipLevel(vec2 uv) {
  vec2 coord = uv * u_resolution;
  vec2 ddx_v = dFdx(coord);
  vec2 ddy_v = dFdy(coord);
  float deltaMaxSqr = max(dot(ddx_v, ddx_v), dot(ddy_v, ddy_v)) * 0.1;
  return max(0.0, 0.5 * log2(max(1.0, deltaMaxSqr)));
}

bool inEmptySpace(float height) {
  bvec3 gt = greaterThan(vec3(height), u_minIntervalHeights);
  bvec3 lt = lessThan(vec3(height), u_maxIntervalHeights);
  return gt.x && lt.x || gt.y && lt.y || gt.z && lt.z;
}

vec4 getLayerDensity(vec4 hf) {
  return u_densityProfileExpTerms * exp(u_densityProfileExponents * hf) + u_densityProfileLinearTerms * hf + u_densityProfileConstantTerms;
}

vec4 getHeightFractions(float height) {
  vec4 range = u_maxLayerHeights - u_minLayerHeights;
  return clamp((vec4(height) - u_minLayerHeights) / max(range, vec4(0.0001)), 0.0, 1.0);
}

struct WeatherSample { vec4 heightFraction; vec4 density; };
struct MediaSample { float density; vec4 weight; float scattering; float extinction; };

vec4 shapeAlteringFunction(vec4 hf, vec4 bias) {
  vec4 biased = pow(hf, bias);
  vec4 x = clamp(biased * 2.0 - 1.0, -1.0, 1.0);
  return 1.0 - x * x;
}

WeatherSample sampleWeather(vec2 uv, float height, float mipLevel) {
  WeatherSample w;
  w.heightFraction = getHeightFractions(height);
  vec2 wUv = uv * u_weatherRepeat + u_localWeatherOffset;
  vec4 localW = pow(textureLod(u_weatherTexture, wUv, mipLevel).rgba, u_weatherExponents);
  vec4 hs = shapeAlteringFunction(w.heightFraction, u_shapeAlteringBiases);
  vec4 factor = 1.0 - u_coverages * hs;
  w.density = remapClamped(mix(localW, vec4(1.0), u_coverageFilterWidths), factor, factor + u_coverageFilterWidths);
  return w;
}

MediaSample sampleMedia(WeatherSample weather, vec3 position, vec2 uv, float mipLevel, float jitter) {
  vec4 density = weather.density;
  vec3 sn = normalize(position);
  vec3 evolution = -sn * length(u_localWeatherOffset) * EVOLUTION_SCALE;
  vec2 tUv = uv * u_weatherRepeat * u_turbulenceRepeat;
  vec3 turb = u_turbulenceDisplacement * (texture(u_turbulenceTexture, tUv).rgb * 2.0 - 1.0)
      * dot(density, remapClamped(weather.heightFraction, vec4(0.3), vec4(0.0)));
  vec3 sp = (position + evolution + turb) * u_shapeRepeat + u_shapeOffset;
  float shapeTex = texture(u_shapeTexture, fract(sp)).r;
  density = remapClamped(density, vec4(1.0 - shapeTex) * u_shapeAmounts, vec4(1.0));
  if (mipLevel * 0.5 + (jitter - 0.5) * 0.5 < 0.5) {
    vec3 dp = (position + turb) * u_shapeDetailRepeat + u_shapeDetailOffset;
    float detail = texture(u_shapeDetailTexture, dp).r;
    vec4 modifier = mix(vec4(pow(detail, 6.0)), vec4(1.0 - detail),
        remapClamped(weather.heightFraction, vec4(0.2), vec4(0.4), vec4(0.0), vec4(1.0)));
    modifier = mix(vec4(0.0), modifier, u_shapeDetailAmounts);
    density = remapClamped(density * 2.0, vec4(modifier * 0.5), vec4(1.0));
  }
  density = saturate(density * u_densityScales * getLayerDensity(weather.heightFraction));
  float ds = density.x + density.y + density.z + density.w;
  MediaSample m;
  m.density = ds;
  m.weight = density / max(ds, 1e-7);
  m.scattering = ds * u_scatteringCoefficient;
  m.extinction = ds * u_absorptionCoefficient + m.scattering;
  return m;
}

float henyeyGreenstein(float g, float cosTheta) {
  float g2 = g * g;
  return RECIPROCAL_PI4 * (1.0 - g2) / pow(1.0 + g2 - 2.0 * g * cosTheta, 1.5);
}

float phaseFunction(float cosTheta, float attenuation) {
  return mix(henyeyGreenstein(u_scatterG1 * attenuation, cosTheta),
             henyeyGreenstein(u_scatterG2 * attenuation, cosTheta), u_scatterMix);
}

float approximateMultipleScattering(float opticalDepth, float cosTheta) {
  vec3 coeffs = vec3(1.0);
  const vec3 attenuation = vec3(0.5);
  float scattering = 0.0;
  for (int i = 0; i < 12; i++) {
    if (i >= u_multiScatteringOctaves) break;
    scattering += coeffs.x * exp(-opticalDepth * coeffs.y) * phaseFunction(cosTheta, coeffs.z);
    coeffs *= attenuation;
  }
  return scattering;
}

float marchOpticalDepthToSun(vec3 rayOrigin, vec3 rayDirection, float mipLevel, float jitter, out float sunRayDist) {
  float iterCount = max(0.0, remap(mipLevel, 0.0, 1.0, float(u_maxStepsToSun) + 1.0, 1.0) - jitter);
  int ic = int(iterCount);
  if (ic == 0) return 0.5;
  float stepSize = u_minSecondaryStepSize / iterCount;
  float nextDist = stepSize * jitter;
  float od = 0.0;
  sunRayDist = 0.0;
  for (int i = 0; i < 8; i++) {
    if (i >= ic) break;
    sunRayDist = nextDist;
    vec3 pos = rayDirection * nextDist + rayOrigin;
    vec2 uv = getGlobeUv(pos);
    float h = length(pos) - u_bottomRadius;
    WeatherSample ws = sampleWeather(uv, h, mipLevel);
    MediaSample ms = sampleMedia(ws, pos, uv, mipLevel, jitter);
    od += ms.extinction * stepSize;
    nextDist += stepSize;
    stepSize *= u_secondaryStepScale;
  }
  return od;
}

bool rayIntersectsGround(vec3 camPos, vec3 rd) {
  float r = length(camPos);
  float mu = dot(camPos, rd) / r;
  return mu < 0.0 && r * r * (mu * mu - 1.0) + u_bottomRadius * u_bottomRadius >= 0.0;
}

void raySphereIntersections(vec3 origin, vec3 direction, vec4 radius, out vec4 i1, out vec4 i2) {
  float b = 2.0 * dot(direction, origin);
  vec4 c = dot(origin, origin) - radius * radius;
  vec4 disc = b * b - 4.0 * c;
  vec4 mask = step(disc, vec4(0.0));
  vec4 Q = sqrt(max(vec4(0.0), disc));
  i1 = mix((-b - Q) * 0.5, vec4(-1.0), mask);
  i2 = mix((-b + Q) * 0.5, vec4(-1.0), mask);
}

void getIntersections(vec3 camPos, vec3 rd, out bool ground, out vec4 first, out vec4 second) {
  ground = rayIntersectsGround(camPos, rd);
  vec4 radii = u_bottomRadius + vec4(0.0, u_minHeight, u_maxHeight, u_shadowTopHeight);
  raySphereIntersections(camPos, rd, radii, first, second);
}

vec2 getRayNearFar(bool ground, vec4 first, vec4 second) {
  vec2 nearFar;
  if (u_cameraHeight < u_minHeight) {
     if (ground) {
        nearFar = vec2(-1.0);
    } else {
        nearFar = vec2(second.y, second.z);
        nearFar.y = min(nearFar.y, u_maxRayDistance);
    }
  } else if (u_cameraHeight < u_maxHeight) {
      if (ground) {
          // 地面相交时，采样从相机近裁面到云层下边界
          nearFar = vec2(u_cameraNear, first.y);
          if (nearFar.y <= nearFar.x) nearFar = vec2(-1.0);
      } else {
          float farExit = max(max(first.y, second.y), max(first.z, second.z));
          if (farExit <= 0.0) {
          // 无有效远边界时，强制采样到最大射线距离
          farExit = u_maxRayDistance;
          }
          farExit = min(farExit, u_maxRayDistance);
          farExit = max(farExit, u_cameraNear + u_minStepSize * 0.5);
          nearFar = vec2(u_cameraNear, farExit);
      }
  } else {
      float farExit = max(max(first.y, second.y), max(first.z, second.z));
      if (farExit > 0.0) {
          farExit = min(farExit, u_maxRayDistance);
          farExit = max(farExit, u_cameraNear + u_minStepSize * 0.5);
          nearFar = vec2(u_cameraNear, farExit);
      }
  }
  return nearFar;
}

vec2 getShadowRayNearFar(bool ground, vec4 first, vec4 second) {
  vec2 nf;
  if (u_cameraHeight < u_shadowTopHeight) {
    nf = ground ? vec2(u_cameraNear, first.x) : vec2(u_cameraNear, second.w);
  } else {
    nf = vec2(first.w, second.w);
    if (ground) nf.y = first.x;
  }
  nf.y = min(nf.y, u_maxShadowLengthRayDistance);
  return nf;
}

vec2 getHazeRayNearFar(bool ground, vec4 first, vec4 second) {
  vec2 nf;
  if (u_cameraHeight < u_maxHeight) {
    nf = ground ? vec2(u_cameraNear, first.x) : vec2(u_cameraNear, second.z);
  } else {
    nf = vec2(u_cameraNear, second.z);
    if (ground) nf.y = first.x;
  }
  return nf;
}

// ── BSM sampling ──
float sampleShadowOpticalDepth(vec3 rayPosition, float distanceOffset, float radius, float jitter);

float getDistanceToShadowTop(vec3 rayPos) {
  vec3 rd = czm_sunDirectionWC;
  float R = u_bottomRadius + u_shadowTopHeight;
  float b = dot(rayPos, rd);
  float c = dot(rayPos, rayPos) - R * R;
  float h = b * b - c;
  if (h < 0.0) return -1.0;
  return -b + sqrt(h);
}

// three.js / CloudShadowPass intervals=(d-near)/(far-near) 一致
float viewZToOrthographicDepth(float viewZ, float near, float far) {
  return (viewZ + near) / (near - far);
}

int getFadedCascadeIndex(mat4 viewMat, vec3 worldPos, vec2 intervals[4], float near, float far, float jitter) {
  vec4 vp = viewMat * vec4(worldPos, 1.0);
  float depth = viewZToOrthographicDepth(vp.z, near, far);
  int nextIndex = -1, prevIndex = -1;
  float alpha = 1.0;
  for (int i = 0; i < 4; ++i) {
    vec2 interval = intervals[i];
    float intervalCenter = (interval.x + interval.y) * 0.5;
    float closestEdge = depth < intervalCenter ? interval.x : interval.y;
    float margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);
    if (i < 3) {
      if (depth >= interval.x && depth < interval.y) { prevIndex = nextIndex; nextIndex = i; alpha = saturate(min(depth - interval.x, interval.y - depth) / max(margin, 1e-6)); }
    } else {
      if (depth >= interval.x) { prevIndex = nextIndex; nextIndex = i; alpha = saturate((depth - interval.x) / max(margin, 1e-6)); }
    }
  }
  return jitter <= alpha ? nextIndex : prevIndex;
}

vec2 getShadowUv(vec3 pos, int ci) { vec4 clip = u_shadowMatrices[ci] * vec4(pos, 1.0); clip /= clip.w; return clip.xy * 0.5 + 0.5; }
vec2 getShadowAtlasOffset(int ci) { return vec2(mod(float(ci), 2.0) * 0.5, (ci < 2) ? 0.5 : 0.0); }

float readShadowOpticalDepth(vec2 uv, int ci, float distToTop, float distOff) {
  if (u_useShadowBuffer == 0) return 0.0;
  vec2 atlasUv = getShadowAtlasOffset(ci) + uv * 0.5;
  vec4 shadow = texture(u_shadowBuffer, atlasUv);
  float distToFront = max(0.0, distToTop - distOff - shadow.r);
  return min(shadow.b + shadow.a, shadow.g * distToFront);
}

float interleavedGradientNoise(vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}

vec2 vogelDisk(int index, int count, float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(count));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}

float sampleShadowOpticalDepthPCF(vec3 worldPos, float distToTop, float distOff, float radius, int ci) {
  vec2 uv = getShadowUv(worldPos, ci);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
  if (radius < 0.1) return readShadowOpticalDepth(uv, ci, distToTop, distOff);
  float sum = 0.0;
  float phi = interleavedGradientNoise(gl_FragCoord.xy) * 3.14159265 * 2.0;
  for (int i = 0; i < 16; ++i) sum += readShadowOpticalDepth(uv + vogelDisk(i, 16, phi) * radius * u_shadowTexelSize, ci, distToTop, distOff);
  return sum / 16.0;
}

float sampleShadowOpticalDepth(vec3 rayPos, float distOff, float radius, float jitter) {
  float distToTop = getDistanceToShadowTop(rayPos);
  if (distToTop <= 0.0) return 0.0;
  int ci = getFadedCascadeIndex(czm_view, rayPos, u_shadowIntervals, u_cameraNear, u_shadowFar, jitter);
  return ci >= 0 ? sampleShadowOpticalDepthPCF(rayPos, distToTop, distOff, radius, ci) : 0.0;
}

float marchShadowLength(vec3 rayOrigin, vec3 rayDir, vec2 rayNearFar, float jitter) {
  float shadowLen = 0.0;
  float maxDist = rayNearFar.y - rayNearFar.x;
  float stepSize = u_minShadowLengthStepSize;
  float rayDist = stepSize * jitter;
  for (int i = 0; i < 512; i++) {
    if (float(i) >= float(u_maxShadowLengthIterationCount)) break;
    if (rayDist > maxDist) break;
    vec3 pos = rayDir * rayDist + rayOrigin;
    float od = sampleShadowOpticalDepth(pos, 0.0, 0.0, jitter);
    shadowLen += (1.0 - exp(-od)) * stepSize;
    stepSize *= u_perspectiveStepScale;
    rayDist += stepSize;
  }
  return shadowLen;
}

#ifdef USE_ATMOSPHERE_IRRADIANCE
void applyAerialPerspective(vec3 camPos, vec3 frontPos, float dist, float shadowLen, inout vec4 color) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(camPos * METER_TO_LENGTH_UNIT, frontPos * METER_TO_LENGTH_UNIT, shadowLen * METER_TO_LENGTH_UNIT, sunDirection, transmittance);
  float horizonBias = smoothstep(20.0, 80.0, dist * METER_TO_LENGTH_UNIT);
  // 【新增】根据太阳高度计算可见度，晚上太阳沉下地平线时 sunVis 为 0
  float sunVis = smoothstep(-0.02, 0.05, dot(normalize(camPos), sunDirection));
  vec3 fakeHorizonColor = vec3(0.5, 0.6, 0.8) * 0.2 * sunVis;
  inscatter = mix(inscatter, inscatter * 0.4 + fakeHorizonColor, horizonBias);
  color.rgb = color.rgb * transmittance + inscatter * color.a * u_aerialPerspectiveScale;
}
#else
void applyAerialPerspective(vec3 camPos, vec3 frontPos, float dist, float shadowLen, inout vec4 color) {
  vec3 rayleigh = vec3(0.005802, 0.013558, 0.033100) * 0.001;
  float h = length(frontPos) - u_bottomRadius;
  float density = exp(-h / 8000.0);
  vec3 transmittance = exp(-dist * rayleigh * density * u_aerialPerspectiveScale);
  // 【新增】太阳可见度衰减
  float sunVis = smoothstep(-0.05, 0.1, dot(normalize(camPos), sunDirection));
  vec3 skyColor = vec3(0.4, 0.6, 1.0) * u_sunIntensity * 0.02 * sunVis;
  color.rgb = color.rgb * transmittance + skyColor * (1.0 - transmittance) * color.a;
}
#endif

vec4 approximateHaze(vec3 ro, vec3 rd, float maxDist, float cosTheta, float shadowLen) {
  float modulation = remapClamped(u_coverageHaze, 0.2, 0.4);
  if (u_cameraHeight * modulation < 0.0) return vec4(0.0);
  float density = modulation * u_hazeDensityScale * exp(-u_cameraHeight * u_hazeExponent);
  if (density < 1e-7) return vec4(0.0);
  vec3 nOrigin = normalize(ro);
  float sunHeight = dot(nOrigin, sunDirection);
  float sunVis = smoothstep(-0.02, 0.05, sunHeight);
  float viewZenith = abs(rd.y);
  float horizonTaming = smoothstep(0.0, 0.15, viewZenith);
  // 即使在天际线，也要保留一点点基础亮度，但不能是 1.0
  horizonTaming = mix(0.3, 1.0, horizonTaming);
  vec3 nHoriz = (ro - dot(ro, rd) * rd) / u_bottomRadius;
  float alpha = remapClamped(dot(nOrigin, nHoriz), 0.9, 1.0);
  vec3 normal = mix(nOrigin, nHoriz, alpha);
  float angle = max(dot(normal, rd), 1e-5);
  float exponent = angle * u_hazeExponent;
  float linearTerm = density / u_hazeExponent / angle;
  float expTerm = 1.0 - exp(-maxDist * exponent);
  float shadowExpTerm = 1.0 - exp(-min(maxDist, shadowLen) * exponent);
  float opticalDepth = expTerm * linearTerm;
  float shadowOD = max((expTerm - shadowExpTerm) * linearTerm, 0.0);
  float transmittance = saturate(1.0 - exp(-opticalDepth));
  float shadowTransmittance = saturate(1.0 - exp(-shadowOD));
  // 【修改】将硬编码的光源强度乘以太阳可见度
  vec3 skyIrradiance = vec3(0.4, 0.6, 1.0) * u_sunIntensity * 0.04 * sunVis * horizonTaming;
  vec3 sunIrradiance = vec3(1.0, 0.95, 0.9) * u_sunIntensity * sunVis;
  float ph = henyeyGreenstein(u_scatterG1, cosTheta) * (1.0 - u_scatterMix) + henyeyGreenstein(u_scatterG2, cosTheta) * u_scatterMix;
  vec3 inscatter = sunIrradiance * ph * shadowTransmittance + skyIrradiance * RECIPROCAL_PI4 * u_skyLightScale * transmittance;
  inscatter *= u_hazeScatteringCoefficient / (u_hazeAbsorptionCoefficient + u_hazeScatteringCoefficient);
  return vec4(inscatter, transmittance);
}

// ── Main raymarch ──
vec4 marchClouds(vec3 rayOrigin, vec3 rd, vec2 rayNearFar, float cosTheta, float jitter, float rayStartTexels, out float frontDepth) {
  float maxDist = min(rayNearFar.y - rayNearFar.x, u_maxRayDistance);
  vec3 radInt = vec3(0.0);
  float transInt = 1.0, wdSum = 0.0, tSum = 0.0;
  float perspDist = min(rayNearFar.x, 3000.0);
  float stepSize = u_minStepSize + (u_perspectiveStepScale - 1.0) * perspDist;
  float rayDist = stepSize * jitter * 2.0;
  #ifdef USE_ATMOSPHERE_IRRADIANCE
  float refRadius = u_bottomRadius;
  #else
  vec3 sunColorBase = vec3(1.0, 0.95, 0.9) * u_sunIntensity;
  vec3 skyColorBase = vec3(0.4, 0.6, 1.0) * u_sunIntensity * u_skyToSunRatio;
  float refRadius = u_bottomRadius;
  vec3 sunDirection = czm_sunDirectionWC;
  #endif

  for (int i = 0; i < 512; i++) {
    if (float(i) >= u_maxSteps) break;
    if (rayDist > maxDist) break;
    if (transInt <= u_minTransmittance) break;
    vec3 position = rayOrigin + rd * rayDist;
    float height = length(position) - refRadius;
    float mipLevel = log2(max(1.0, rayStartTexels + rayDist * 1e-5));
    if (inEmptySpace(height)) { stepSize *= u_perspectiveStepScale; rayDist += mix(stepSize, u_maxStepSize, min(1.0, mipLevel)); continue; }
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);
    if (!any(greaterThan(weather.density, vec4(u_minDensity)))) { stepSize *= u_perspectiveStepScale; rayDist += mix(stepSize, u_maxStepSize, min(1.0, mipLevel)); continue; }
    weather.density.xy *= u_lowLayerDensityBoost;
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
    if (media.extinction > u_minExtinction) {
      #ifdef USE_ATMOSPHERE_IRRADIANCE
      vec3 skyIrradiance;
      vec3 sunIrradiance = GetSunAndSkyScalarIrradiance(position * METER_TO_LENGTH_UNIT, sunDirection, skyIrradiance);
      float skyGradient = dot(weather.heightFraction * 0.5 + 0.5, media.weight);
      vec3 sunColor = sunIrradiance * u_sunIntensity;
      vec3 skyColor = skyIrradiance * u_sunIntensity * u_skyToSunRatio;
      #else
      float heightAlpha = clamp((height - u_minHeight) / max(u_maxHeight - u_minHeight, 1.0), 0.0, 1.0);
      vec3 sunColor = mix(sunColorBase * 0.85, sunColorBase, heightAlpha);
      vec3 skyColor = mix(skyColorBase * 0.6, skyColorBase, heightAlpha);
      float skyGradient = dot(weather.heightFraction * 0.5 + 0.5, media.weight);
      #endif
      float sunRayDist;
      float opticalDepth = marchOpticalDepthToSun(position, sunDirection, mipLevel, jitter, sunRayDist);
      if (length(position) - refRadius < u_shadowTopHeight && u_useShadowBuffer == 1) {
        vec3 sn = normalize(position);
        float r = u_maxShadowFilterRadius * remapClamped(dot(sunDirection, sn), 0.1, 0.0);
        opticalDepth += sampleShadowOpticalDepth(position, sunRayDist, r, jitter);
      }
      vec3 radiance = sunColor * approximateMultipleScattering(opticalDepth, cosTheta);
      radiance += skyColor * RECIPROCAL_PI4 * skyGradient * u_skyLightScale;
      radiance *= media.scattering * (1.0 - u_powderScale * exp(-media.extinction * u_powderExponent));
      float transmittance = exp(-media.extinction * stepSize);
      vec3 scatInt = (radiance - radiance * transmittance) / max(media.extinction, 1e-7);
      radInt += transInt * scatInt;
      transInt *= transmittance;
      wdSum += rayDist * transInt;
      tSum += transInt;
    }
    stepSize *= u_perspectiveStepScale;
    rayDist += stepSize;
  }
  frontDepth = tSum > 0.0 ? wdSum / tSum : -1.0;
  float alpha = saturate(remapClamped(transInt, 1.0, u_minTransmittance));
  return vec4(radInt, alpha);
}

void main() {
  vec4 sceneColor = texture(colorTexture, v_textureCoordinates);
  float depth = czm_readDepth(depthTexture, v_textureCoordinates);
  vec3 ro, rd;
  reconstructRay(ro, rd);
  #ifndef USE_ATMOSPHERE_IRRADIANCE
  vec3 sunDirection = czm_sunDirectionWC;
  #endif
  float jitter = getSTBN();
  bool ground; vec4 first, second;
  getIntersections(ro, rd, ground, first, second);
  vec2 rayNearFar = getRayNearFar(ground, first, second);
  vec2 shadowNF = vec2(-1.0), hazeNF = vec2(-1.0);
  if (u_shadowLengthEnabled == 1) shadowNF = getShadowRayNearFar(ground, first, second);
  if (u_hazeEnabled == 1) hazeNF = getHazeRayNearFar(ground, first, second);

  // depthTestAgainstTerrain 只影响 Globe/贴地物体与地形网格的深度关系，不能替后处理修正「沿像素射线」的距离。
  // 此处必须用 inverseView 还原命中点，再沿 rd 求距离；用 -viewZ/dot(rd, forward) 在离轴像素上会偏大 → 云压在地形前。
  float rayDistToScene = 0.0;
  if (depth < 1.0 - 1e-7) {
    vec4 eyePos = czm_windowToEyeCoordinates(vec4(gl_FragCoord.xy, depth, 1.0));
    if (abs(eyePos.w) > 1e-6) {
      eyePos /= eyePos.w;
      if (eyePos.z < 0.0) {
        vec4 worldPos4 = czm_inverseView * eyePos;
        vec3 worldHit = worldPos4.xyz + u_altitudeCorrection;
        rayDistToScene = max(0.0, dot(worldHit - ro, rd));
      }
    }
  }
  float tMax = rayNearFar.y;
  // 原逻辑：低于云层且 !ground 时跳过深度钳位 —— 平视/看山体时 ground 常为 false，会整屏不钳位 → 云盖住地形。
  // 仅当该像素无场景深度（天空）时才允许跳过；有地形/几何时必须用 rayDistToScene 截断射线。
  const float DEPTH_SKY = 1.0 - 1e-7;
  bool skipDepthClamp =
    (depth >= DEPTH_SKY) && (u_cameraHeight < u_minHeight) && (!ground);
  if (rayDistToScene > 0.0 && !skipDepthClamp) {
    tMax = min(tMax, rayDistToScene);
    if (u_shadowLengthEnabled == 1 && shadowNF.y > 0.0) shadowNF.y = min(shadowNF.y, rayDistToScene);
    if (u_hazeEnabled == 1 && hazeNF.y > 0.0) hazeNF.y = min(hazeNF.y, rayDistToScene);
  }
  if (rayNearFar.x >= tMax) { out_FragColor = sceneColor; return; }

  float frontDepth;
  float cosTheta = dot(rd, sunDirection);
  vec2 globeUv = getGlobeUv(ro + rd * rayNearFar.x);
  float mipLevel = getMipLevel(globeUv * u_weatherRepeat) * u_mipLevelScale;
  mipLevel = mix(0.0, mipLevel, min(1.0, 0.2 * u_cameraHeight / max(u_maxHeight, 1.0)));
  vec4 cloudColor = marchClouds(ro + rd * rayNearFar.x, rd, vec2(rayNearFar.x, tMax), cosTheta, jitter, pow(2.0, mipLevel), frontDepth);

  // 远处云透明度距离衰减：用"相机到云层入口距离"（rayNearFar.x）衰减 alpha，
  // 而非云内穿行距离。天顶云入口近不衰减，天际线云入口远衰减——只压远处透明度，不影响各层密度。
  // 这解决斜射时云层路径长导致 alpha 堆积的问题，且不误伤高空稀疏层（层2 近处不衰减）。
  float entryFade = 1.0 - smoothstep(u_distFadeStart, u_distFadeEnd, rayNearFar.x);
  cloudColor.a *= entryFade;
  cloudColor.rgb *= entryFade;

  float shadowLen = 0.0;
  bool hitClouds = frontDepth > 0.0 && cloudColor.a > max(u_edgeAlphaCutoff, 0.02);
  float rayFrontT = rayNearFar.x + frontDepth;

  if (hitClouds) {
    if (u_shadowLengthEnabled == 1 && all(greaterThanEqual(shadowNF, vec2(0.0)))) {
      shadowNF.y = mix(shadowNF.y, min(rayFrontT, shadowNF.y), cloudColor.a);
      shadowLen = marchShadowLength(ro + rd * shadowNF.x, rd, shadowNF, jitter);
    }
    if (u_hazeEnabled == 1 && all(greaterThanEqual(hazeNF, vec2(0.0))))
      hazeNF.y = mix(hazeNF.y, min(rayFrontT, hazeNF.y), cloudColor.a);
      applyAerialPerspective(ro, ro + rd * rayFrontT, rayFrontT, shadowLen, cloudColor);
    } else if (u_shadowLengthEnabled == 1 && all(greaterThanEqual(shadowNF, vec2(0.0)))) {
    shadowLen = marchShadowLength(ro + rd * shadowNF.x, rd, shadowNF, jitter);
  }

  if (u_hazeEnabled == 1) {
    float hazeDist = all(greaterThanEqual(hazeNF, vec2(0.0))) ? (hazeNF.y - hazeNF.x) : 0.0;
    vec4 haze = approximateHaze(ro, rd, hazeDist, cosTheta, shadowLen);
    cloudColor.rgb = mix(cloudColor.rgb, haze.rgb, haze.a);
    cloudColor.a = cloudColor.a * (1.0 - haze.a) + haze.a;
  }

  // 边缘裁剪：低 alpha 区域直接清零，避免云边缘细碎噪点与闪烁
  if (cloudColor.a < u_edgeAlphaCutoff) {
    cloudColor = vec4(0.0);
  }
  // 边缘裁剪后再判一次：防止“已被裁掉的薄云像素”仍进入 TAA，导致底层模型抖动
  hitClouds = hitClouds && (cloudColor.a > max(u_edgeAlphaCutoff, 0.02));

  // 边缘稳噪：低 alpha 处直接除以 alpha 会把随机误差放大成亮点/闪点
  float edgeSafeAlpha = max(cloudColor.a, 0.08);
  vec3 cloudActual = cloudColor.rgb / edgeSafeAlpha;
  cloudActual = ACESFilmic(cloudActual * u_cloudExposure);
  cloudActual = pow(cloudActual, vec3(1.0 / 2.2));

  vec4 composited = vec4(
    sceneColor.rgb * (1.0 - cloudColor.a) + cloudActual * cloudColor.a,
    // 让 history.a 表示“云覆盖度”，用于后续 TAA 历史有效性判定
    cloudColor.a
  );
  // 在最终云合成色上去品红，按云覆盖度加权，确保无云区域不受影响
  vec3 compositedNoMagenta = reduceMagenta(composited.rgb, u_magentaFixStrength);
  float cloudW = smoothstep(0.02, 0.3, cloudColor.a);
  composited.rgb = mix(composited.rgb, compositedNoMagenta, cloudW);

  if (u_temporalEnabled > 0 && hitClouds) {
    vec3 worldPos = ro + rd * rayFrontT - u_altitudeCorrection;
    vec4 prevClip = u_prevViewProjection * vec4(worldPos, 1.0);
    vec2 prevUv = (prevClip.xy / prevClip.w) * 0.5 + 0.5;
    if (prevUv.x >= 0.0 && prevUv.x <= 1.0 && prevUv.y >= 0.0 && prevUv.y <= 1.0) {
      vec4 history = texture(u_historyTexture, prevUv);
      // TAA 仅对“云增量”做融合，底层模型保持当前帧，减少模型虚影
      vec3 deltaNow = composited.rgb - sceneColor.rgb;
      vec3 deltaHist = history.rgb - sceneColor.rgb;
      float maxDiff = max(abs(deltaHist.r - deltaNow.r), max(abs(deltaHist.g - deltaNow.g), abs(deltaHist.b - deltaNow.b)));
      float reject = max(
        smoothstep(0.35, 0.75, maxDiff),
        smoothstep(0.004, 0.03, length(prevUv - v_textureCoordinates))
      );
      // 让低透明边缘也参与历史融合，抑制云边缘噪点“跳闪”
      float opacityW = smoothstep(0.015, 0.25, cloudColor.a);
      float a = mix(1.0, mix(u_temporalAlpha, 1.0, reject), opacityW);
      // 仅当“当前与历史”都存在足够云覆盖时才使用历史，避免把模型底色抖动带入
      float historyCloudW = smoothstep(0.02, 0.12, history.a);
      float currentCloudW = smoothstep(0.02, 0.12, cloudColor.a);
      float cloudHistoryValidity = min(historyCloudW, currentCloudW);
      a = mix(1.0, a, cloudHistoryValidity);
      vec3 deltaFiltered = mix(deltaHist, deltaNow, a);
      composited.rgb = sceneColor.rgb + deltaFiltered;
      composited.a = cloudColor.a;
    }
  }
  out_FragColor = composited;
}
`}function De(c,e,t,r){const a=c.createShader(c.VERTEX_SHADER);if(c.shaderSource(a,e),c.compileShader(a),!c.getShaderParameter(a,c.COMPILE_STATUS))return c.deleteShader(a),null;const o=c.createShader(c.FRAGMENT_SHADER);if(c.shaderSource(o,t),c.compileShader(o),!c.getShaderParameter(o,c.COMPILE_STATUS))return c.deleteShader(a),c.deleteShader(o),null;const i=c.createProgram();return c.attachShader(i,a),c.attachShader(i,o),c.linkProgram(i),c.deleteShader(a),c.deleteShader(o),c.getProgramParameter(i,c.LINK_STATUS)?i:(c.deleteProgram(i),null)}class Pe{constructor(e,t={}){this.viewer=e,this.atmosphereParams=t.atmosphereParams??new W,this._frameCount=0,this._gui=null,this.enableGui=t.enableGui===!0,this.assetsBase=t.cloudsAssetsBase??ee,this.brunetonShaderBase=t.brunetonShaderBase??te,this.blueNoiseUrl=t.blueNoiseUrl??ae,this.atmosphereAssetsBase=t.atmosphereAssetsBase??re,this.atmosphereShaderBase=t.atmosphereShaderBase??ne,this.params={cloudsVisible:!0,bottomRadius:6371860,layers:[{channel:"r",altitude:1800,height:650,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,coverage:.3,densityProfile:{expTerm:0,exponent:0,linearTerm:.75,constantTerm:.25}},{channel:"g",altitude:2400,height:1200,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,coverage:.3,densityProfile:{expTerm:0,exponent:0,linearTerm:.75,constantTerm:.25}},{channel:"b",altitude:7500,height:500,densityScale:.003,shapeAmount:.4,shapeDetailAmount:0,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.5,coverage:.3,densityProfile:{expTerm:0,exponent:0,linearTerm:.75,constantTerm:.25}},{channel:"a"}],maxSteps:500,maxStepsToSun:8,minStepSize:20,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.005,minDensity:1e-5,minExtinction:1e-5,minTransmittance:.01,distFadeStart:11e3,distFadeEnd:51e3,minSecondaryStepSize:100,secondaryStepScale:2,multiScatteringOctaves:8,lowLayerDensityBoost:1,shadowLengthEnabled:!0,useShadowBuffer:!0,hazeEnabled:!1,maxShadowLengthIterationCount:500,minShadowLengthStepSize:50,maxShadowLengthRayDistance:2e5,hazeDensityScale:3e-5,hazeExponent:.001,hazeScatteringCoefficient:.9,hazeAbsorptionCoefficient:.5,weatherRepeat:100,shapeRepeat:4.1,shapeDetailRepeat:5e-4,turbulenceRepeat:2,turbulenceDisplacement:400,scatteringCoefficient:1,absorptionCoefficient:0,scatterG1:.7,scatterG2:-.2,scatterMix:.5,sunIntensity:20,skyLightScale:1,skyToSunRatio:.28,powderScale:.8,powderExponent:150,aerialPerspectiveScale:0,cloudExposure:3,magentaFixStrength:2,edgeAlphaCutoff:0,mipLevelScale:.35,windSpeed:0,evolutionSpeed:.005,temporalEnabled:!1,temporalAlpha:.1,blueNoiseScale:1,jitterStrength:1,shadowFar:4e4,shadowSplitLambda:1,shadowFadeScale:5},this.atmosphere=null,this.aerial=null,this.cloudStage=null,this.textures=null,this._ready=null,this._bsm={pass:null,resolve:null,blitFbo:null,blitProg:null,blitVbo:null},this._taa={texA:null,texB:null,current:0,pbo:null,pboReady:!1,w:0,h:0,frameCount:0,prevVP:null,curVP:null},this._weatherOffsetX=0,this._weatherOffsetY=0,this._shapeOffsetX=0,this._shapeOffsetY=0,this._shapeOffsetZ=0,this._shapeDetailOffsetX=0,this._shapeDetailOffsetY=0,this._shapeDetailOffsetZ=0,this._lastFrameTime=void 0,this._listeners=[]}async _load3DTexture(e,t){const r=await Re(e,t);return Ae(this.viewer,r,Cesium)}async _load3DTextureWHD(e,t,r,a){const o=await Cesium.Resource.fetchArrayBuffer(e),i=new Uint8Array(o);return new Cesium.Texture3D({context:this.viewer.scene.context,width:t,height:r,depth:a,pixelFormat:Cesium.PixelFormat.RED,pixelDatatype:Cesium.PixelDatatype.UNSIGNED_BYTE,source:{arrayBufferView:i,width:t,height:r,depth:a},sampler:new Cesium.Sampler({minificationFilter:Cesium.TextureMinificationFilter.LINEAR,magnificationFilter:Cesium.TextureMagnificationFilter.LINEAR,wrapS:Cesium.TextureWrap.REPEAT,wrapT:Cesium.TextureWrap.REPEAT,wrapR:Cesium.TextureWrap.REPEAT})})}async _load2DTexture(e){const t=await Cesium.Resource.fetchImage(e);if(!t||t.width<=2||t.height<=2)throw new Error(`Invalid image: ${e}`);return new Cesium.Texture({context:this.viewer.scene.context,source:t,sampler:new Cesium.Sampler({minificationFilter:Cesium.TextureMinificationFilter.LINEAR,magnificationFilter:Cesium.TextureMagnificationFilter.LINEAR,wrapS:Cesium.TextureWrap.REPEAT,wrapT:Cesium.TextureWrap.REPEAT})})}async _loadTextures(){const e=this.assetsBase,[t,r,a,o,i,n]=await Promise.all([this._load3DTexture(e+"shape.bin",128).catch(()=>null),this._load3DTexture(e+"shape_detail.bin",32).catch(()=>null),this._load3DTextureWHD(e+"stbn.bin",128,128,64).catch(()=>null),this._load2DTexture(e+"local_weather.png").catch(()=>null),this._load2DTexture(e+"turbulence.png").catch(()=>null),this._load2DTexture(this.blueNoiseUrl).catch(()=>null)]);this.textures={shape:t,shapeDetail:r,stbn:a,weather:o,turbulence:i,blueNoise:n}}async _loadShader(e){return M(e,{shaderBaseUrl:this.brunetonShaderBase})}async _buildCloudFragmentShader(){const e=this.atmosphere.getAtmosphereForClouds(),[t,r,a]=await Promise.all([this._loadShader("definitions.glsl"),this._loadShader("common.glsl"),this._loadShader("runtime.glsl")]);return`precision highp float;
precision highp sampler2D;
precision highp sampler3D;
`+e.constants.getShaderDefines()+`
#define METER_TO_LENGTH_UNIT 0.001
#define USE_ATMOSPHERE_IRRADIANCE
`+t+`
`+r+`
`+`
uniform vec3 sunDirection;
uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler2D irradiance_texture;
`+`
`+a+`
`+Ne()}_advanceOffsets(){const e=performance.now()/1e3;if(this._lastFrameTime!==void 0){const t=e-this._lastFrameTime;this._weatherOffsetX+=(this.params.windSpeed||0)*t,this._shapeOffsetX+=(this.params.evolutionSpeed||0)*t,this._shapeDetailOffsetX+=(this.params.evolutionSpeed||0)*2*t}this._lastFrameTime=e}_getDensityProfileVec4(e){const t=this.params.layers,r=a=>a==="linearTerm"?.75:a==="constantTerm"?.25:0;return new Cesium.Cartesian4(...[0,1,2,3].map(a=>{var i,n;const o=(n=(i=t[a])==null?void 0:i.densityProfile)==null?void 0:n[e];return o!==void 0?Number(o):r(e)}))}_getIntervalHeights(){var i,n;const e=this.params.layers,t=[];for(let s=0;s<4;s++){const d=Number((i=e[s])==null?void 0:i.altitude)||0,m=Number((n=e[s])==null?void 0:n.height)||0;t.push({v:d,flag:0},{v:d+m,flag:1})}t.sort((s,d)=>s.v!==d.v?s.v-d.v:s.flag-d.flag);const r=[{min:0,max:0},{min:0,max:0},{min:0,max:0}];let a=0,o=0;for(let s=0;s<t.length;s++)o===0&&s>0&&(r[a]={min:t[s-1].v,max:t[s].v},a++),o+=t[s].flag===0?1:-1;return{min:new Cesium.Cartesian3(r[0].min,r[1].min,r[2].min),max:new Cesium.Cartesian3(r[0].max,r[1].max,r[2].max)}}_getLayerVec4(e,t=0){const r=this.params.layers;return new Cesium.Cartesian4(...[0,1,2,3].map(a=>{var i;const o=(i=r[a])==null?void 0:i[e];return o!==void 0?Number(o):t}))}_getAltitudeCorrectionOffset(e){var s,d,m,f,p;const t=(m=(d=(s=this.viewer)==null?void 0:s.scene)==null?void 0:d.globe)==null?void 0:m.ellipsoid,r=(p=(f=this.viewer)==null?void 0:f.camera)==null?void 0:p.positionWC;if(!t||!r)return Cesium.Cartesian3.ZERO.clone();const a=Cesium.Cartographic.fromCartesian(r,t);if(!a)return Cesium.Cartesian3.ZERO.clone();const o=Cesium.Cartesian3.fromRadians(a.longitude,a.latitude,0,t),i=t.geodeticSurfaceNormal(o,new Cesium.Cartesian3),n=Cesium.Cartesian3.subtract(o,Cesium.Cartesian3.multiplyByScalar(i,Number(e)||0,new Cesium.Cartesian3),new Cesium.Cartesian3);return Cesium.Cartesian3.negate(n,new Cesium.Cartesian3)}_getMinHeight(){var r,a;const e=this.params.layers;let t=1/0;for(let o=0;o<4;o++)(Number((r=e[o])==null?void 0:r.height)||0)>0&&(t=Math.min(t,Number((a=e[o])==null?void 0:a.altitude)||0));return Number.isFinite(t)?t:0}_getMaxHeight(){var r,a;const e=this.params.layers;let t=0;for(let o=0;o<4;o++){const i=Number((r=e[o])==null?void 0:r.height)||0;i>0&&(t=Math.max(t,(Number((a=e[o])==null?void 0:a.altitude)||0)+i))}return t}_buildCloudUniforms(){const e=this,t=()=>e.params,r=()=>e.textures,o=this.atmosphere.getAtmosphereForClouds().getUniforms(),i={u_shapeTexture:()=>{var n;return(n=r())==null?void 0:n.shape},u_shapeDetailTexture:()=>{var n;return(n=r())==null?void 0:n.shapeDetail},u_stbnTexture:()=>{var n,s;return((n=r())==null?void 0:n.stbn)||((s=r())==null?void 0:s.shape)},u_weatherTexture:()=>{var n;return(n=r())==null?void 0:n.weather},u_turbulenceTexture:()=>{var n;return(n=r())==null?void 0:n.turbulence},u_blueNoise:()=>{var n;return(n=r())==null?void 0:n.blueNoise},u_blueNoiseScale:()=>t().blueNoiseScale??1,u_jitterStrength:()=>t().jitterStrength??1,u_cameraPosition:()=>e.viewer.camera.positionWC,u_altitudeCorrection:()=>{const n=Number(o.bottomRadius())||Number(t().bottomRadius)||0;return e._getAltitudeCorrectionOffset(n)},u_cameraHeight:()=>{const n=i.u_altitudeCorrection(),s=Cesium.Cartesian3.add(e.viewer.camera.positionWC,n,new Cesium.Cartesian3),d=Number(o.bottomRadius())||Number(t().bottomRadius)||0;return Math.max(0,Cesium.Cartesian3.magnitude(s)-d)},u_bottomRadius:()=>Number(t().bottomRadius),u_minHeight:()=>e._getMinHeight(),u_maxHeight:()=>e._getMaxHeight(),u_minLayerHeights:()=>e._getLayerVec4("altitude",0),u_maxLayerHeights:()=>{const n=t().layers;return new Cesium.Cartesian4(...[0,1,2,3].map(s=>{var d,m;return(Number((d=n[s])==null?void 0:d.altitude)||0)+(Number((m=n[s])==null?void 0:m.height)||0)}))},u_densityScales:()=>e._getLayerVec4("densityScale",0),u_shapeAmounts:()=>e._getLayerVec4("shapeAmount",0),u_shapeDetailAmounts:()=>e._getLayerVec4("shapeDetailAmount",0),u_weatherExponents:()=>e._getLayerVec4("weatherExponent",1),u_shapeAlteringBiases:()=>e._getLayerVec4("shapeAlteringBias",.35),u_coverageFilterWidths:()=>e._getLayerVec4("coverageFilterWidth",.6),u_maxSteps:()=>t().maxSteps,u_maxStepsToSun:()=>t().maxStepsToSun,u_minStepSize:()=>t().minStepSize,u_maxStepSize:()=>t().maxStepSize,u_maxRayDistance:()=>t().maxRayDistance,u_distFadeStart:()=>Number(t().distFadeStart)||3e4,u_distFadeEnd:()=>Number(t().distFadeEnd)||15e4,u_cameraNear:()=>{var n;return Number((n=e.viewer.camera.frustum)==null?void 0:n.near)||0},u_shadowTopHeight:()=>e._getMaxHeight(),u_shadowLengthEnabled:()=>t().shadowLengthEnabled?1:0,u_hazeEnabled:()=>t().hazeEnabled?1:0,u_maxShadowLengthIterationCount:()=>t().maxShadowLengthIterationCount,u_minShadowLengthStepSize:()=>t().minShadowLengthStepSize,u_maxShadowLengthRayDistance:()=>t().maxShadowLengthRayDistance,u_hazeDensityScale:()=>t().hazeDensityScale,u_hazeExponent:()=>t().hazeExponent,u_hazeScatteringCoefficient:()=>t().hazeScatteringCoefficient,u_hazeAbsorptionCoefficient:()=>t().hazeAbsorptionCoefficient,u_shadowBuffer:()=>{var n;if(t().useShadowBuffer&&e._bsm.resolve){const s=e._bsmResolveGetTexture();if(s)return s}return(n=r())==null?void 0:n.weather},u_shadowTexelSize:()=>{const n=e._bsm.pass?Math.floor(Y/2):512;return new Cesium.Cartesian2(1/n,1/n)},u_shadowIntervals:()=>t().useShadowBuffer&&e._bsm.pass?e._bsm.pass.getShadowIntervals().map(s=>new Cesium.Cartesian2(s[0],s[1])):Array(4).fill(null).map(()=>new Cesium.Cartesian2(0,0)),u_shadowMatrices:()=>t().useShadowBuffer&&e._bsm.pass?e._bsm.pass._shadowMatrices.map(n=>Cesium.Matrix4.fromArray(n)):Array(4).fill(null).map(()=>Cesium.Matrix4.IDENTITY.clone()),u_shadowFar:()=>e._bsm.pass?e._bsm.pass._shadowFar:t().maxShadowLengthRayDistance,u_maxShadowFilterRadius:()=>2,u_useShadowBuffer:()=>t().useShadowBuffer?1:0,u_skyLightScale:()=>t().skyLightScale,u_weatherRepeat:()=>t().weatherRepeat,u_localWeatherOffset:()=>(e._advanceOffsets(),new Cesium.Cartesian2(e._weatherOffsetX,e._weatherOffsetY)),u_shapeRepeat:()=>(Number(t().shapeRepeat)||3)/1e4,u_shapeOffset:()=>(e._advanceOffsets(),new Cesium.Cartesian3(e._shapeOffsetX,e._shapeOffsetY,e._shapeOffsetZ)),u_shapeDetailRepeat:()=>t().shapeDetailRepeat,u_shapeDetailOffset:()=>(e._advanceOffsets(),new Cesium.Cartesian3(e._shapeDetailOffsetX,e._shapeDetailOffsetY,e._shapeDetailOffsetZ)),u_turbulenceRepeat:()=>t().turbulenceRepeat,u_turbulenceDisplacement:()=>t().turbulenceDisplacement,u_coverages:()=>e._getLayerVec4("coverage",.3),u_coverageHaze:()=>{var s,d,m;const n=t().layers;return Math.max(Number((s=n[0])==null?void 0:s.coverage)??.3,Number((d=n[1])==null?void 0:d.coverage)??.3,Number((m=n[2])==null?void 0:m.coverage)??.3)},u_scatteringCoefficient:()=>t().scatteringCoefficient,u_absorptionCoefficient:()=>t().absorptionCoefficient,u_scatterG1:()=>t().scatterG1,u_scatterG2:()=>t().scatterG2,u_scatterMix:()=>t().scatterMix,u_sunIntensity:()=>t().sunIntensity,u_skyToSunRatio:()=>t().skyToSunRatio,u_powderScale:()=>t().powderScale,u_powderExponent:()=>t().powderExponent,u_aerialPerspectiveScale:()=>t().aerialPerspectiveScale,u_cloudExposure:()=>t().cloudExposure,u_magentaFixStrength:()=>t().magentaFixStrength??.8,u_edgeAlphaCutoff:()=>t().edgeAlphaCutoff??.03,u_resolution:()=>{const n=e.viewer.scene.context;return new Cesium.Cartesian2(n.drawingBufferWidth||1,n.drawingBufferHeight||1)},u_mipLevelScale:()=>Number(t().mipLevelScale)||1,u_perspectiveStepScale:()=>t().perspectiveStepScale??1.01,u_minDensity:()=>t().minDensity??1e-5,u_minExtinction:()=>t().minExtinction??1e-5,u_minTransmittance:()=>t().minTransmittance??.01,u_minSecondaryStepSize:()=>t().minSecondaryStepSize??100,u_secondaryStepScale:()=>t().secondaryStepScale??2,u_multiScatteringOctaves:()=>Math.min(12,Math.max(1,t().multiScatteringOctaves??8)),u_lowLayerDensityBoost:()=>t().lowLayerDensityBoost??1,u_densityProfileExpTerms:()=>e._getDensityProfileVec4("expTerm"),u_densityProfileExponents:()=>e._getDensityProfileVec4("exponent"),u_densityProfileLinearTerms:()=>e._getDensityProfileVec4("linearTerm"),u_densityProfileConstantTerms:()=>e._getDensityProfileVec4("constantTerm"),u_minIntervalHeights:()=>e._getIntervalHeights().min,u_maxIntervalHeights:()=>e._getIntervalHeights().max,u_historyTexture:()=>{var s;return e._taaGetHistoryTexture()||((s=r())==null?void 0:s.blueNoise)},u_prevViewProjection:()=>e._taa.prevVP||Cesium.Matrix4.IDENTITY,u_temporalAlpha:()=>t().temporalAlpha??.1,u_temporalEnabled:()=>t().temporalEnabled&&e._taa.frameCount>2&&e._taa.prevVP?1:0,u_frame:()=>e._frameCount||0};return Object.assign(i,o),i.u_cameraPosition=o.cameraPosition,i.u_bottomRadius=o.bottomRadius,i}_bsmResolveGetTexture(){const e=this._bsm.resolve,t=e?e._historyTex:this._bsm.pass?this._bsm.pass._colorTexture:null;if(!t)return null;const r=this.viewer.scene.context._gl;return{_texture:t,_textureTarget:r.TEXTURE_2D,_target:r.TEXTURE_2D,bind:function(a){r.activeTexture(r.TEXTURE0+a),r.bindTexture(r.TEXTURE_2D,this._texture)}}}_taaGetHistoryTexture(){var r;const e=(r=this.viewer.scene.context)==null?void 0:r._gl;if(!e)return null;const t=this._taa.current===0?this._taa.texA:this._taa.texB;return t?{_texture:t,_textureTarget:e.TEXTURE_2D,_target:e.TEXTURE_2D}:null}_blitBSM(e,t,r){var s;const a=(s=this.viewer.scene.context)==null?void 0:s._gl;if(!a||!(e!=null&&e._texture)||!(t!=null&&t._texture))return;if(!this._bsm.blitFbo){this._bsm.blitFbo=a.createFramebuffer(),this._bsm.blitProg=De(a,`#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main(){v_uv=a_pos*0.5+0.5;gl_Position=vec4(a_pos,0,1);}`,`#version 300 es
precision highp float;
uniform sampler2D u_src;
uniform float u_scale;
in vec2 v_uv;
out vec4 o;
void main(){vec4 raw=texture(u_src,v_uv);
  // 编码：rgba *= scale。HALF_FLOAT(scale=1)等价透传；RGBA8(scale=0.02)压到0..1，消费端 /scale 还原。
  o=vec4(raw.rgb*u_scale, raw.a*u_scale);}`,"BSMBlit");const d=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,d),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),a.STATIC_DRAW),this._bsm.blitVbo=d}const o=a.getParameter(a.FRAMEBUFFER_BINDING),i=a.getParameter(a.VIEWPORT);if(a.bindFramebuffer(a.FRAMEBUFFER,this._bsm.blitFbo),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,t._texture,0),a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE){a.bindFramebuffer(a.FRAMEBUFFER,o),a.viewport(...i);return}a.viewport(0,0,Q,Q),a.useProgram(this._bsm.blitProg),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,e._texture),a.uniform1i(a.getUniformLocation(this._bsm.blitProg,"u_src"),0),a.uniform1f(a.getUniformLocation(this._bsm.blitProg,"u_scale"),r),a.bindBuffer(a.ARRAY_BUFFER,this._bsm.blitVbo);const n=a.getAttribLocation(this._bsm.blitProg,"a_pos");n>=0&&(a.enableVertexAttribArray(n),a.vertexAttribPointer(n,2,a.FLOAT,!1,0,0)),a.drawArrays(a.TRIANGLES,0,3),n>=0&&a.disableVertexAttribArray(n),a.bindFramebuffer(a.FRAMEBUFFER,o),a.viewport(i[0],i[1],i[2],i[3])}_syncBSM(){var l,w,h,y,S,u,_,I,N,g,v,b,L,O,F,D,E,P,U,k;const e=this._bsm.pass;if(!e||!this.params.useShadowBuffer){(w=(l=this.atmosphere)==null?void 0:l.setCloudShadow)==null||w.call(l,{enabled:!1}),(y=(h=this.aerial)==null?void 0:h.setCloudShadow)==null||y.call(h,{enabled:!1});return}e.updateDynamicParams({localWeatherOffset:[this._weatherOffsetX||0,this._weatherOffsetY||0],shapeOffset:[this._shapeOffsetX||0,this._shapeOffsetY||0,this._shapeOffsetZ||0],shapeDetailOffset:[this._shapeDetailOffsetX||0,this._shapeDetailOffsetY||0,this._shapeDetailOffsetZ||0],bottomRadius:this.params.bottomRadius,shadowFar:Number(this.params.shadowFar)||Number(this.params.maxShadowLengthRayDistance)||2e5,maxShadowLengthRayDistance:Number(this.params.maxShadowLengthRayDistance)||2e5,shadowSplitLambda:Number(this.params.shadowSplitLambda)||.5,shadowFadeScale:Number(this.params.shadowFadeScale)||1,coverages:[0,1,2,3].map(R=>{var A;const x=(A=this.params.layers[R])==null?void 0:A.coverage;return x!==void 0?Number(x):.3}),densityScales:[0,1,2,3].map(R=>{var A;const x=(A=this.params.layers[R])==null?void 0:A.densityScale;return x!==void 0?Number(x):0}),shapeAmounts:[0,1,2,3].map(R=>{var A;const x=(A=this.params.layers[R])==null?void 0:A.shapeAmount;return x!==void 0?Number(x):0}),shapeDetailAmounts:[0,1,2,3].map(R=>{var A;const x=(A=this.params.layers[R])==null?void 0:A.shapeDetailAmount;return x!==void 0?Number(x):0}),weatherExponents:[0,1,2,3].map(R=>{var A;const x=(A=this.params.layers[R])==null?void 0:A.weatherExponent;return x!==void 0?Number(x):1}),shapeAlteringBiases:[0,1,2,3].map(R=>{var A;const x=(A=this.params.layers[R])==null?void 0:A.shapeAlteringBias;return x!==void 0?Number(x):.35}),coverageFilterWidths:[0,1,2,3].map(R=>{var A;const x=(A=this.params.layers[R])==null?void 0:A.coverageFilterWidth;return x!==void 0?Number(x):.6}),scatteringCoefficient:Number(this.params.scatteringCoefficient)??.9,absorptionCoefficient:Number(this.params.absorptionCoefficient)??1});let t=this._bsm.resolve?this._bsmResolveGetTexture():null;if(t||(t=e.getTexture()),!t){(u=(S=this.atmosphere)==null?void 0:S.setCloudShadow)==null||u.call(S,{enabled:!1}),(I=(_=this.aerial)==null?void 0:_.setCloudShadow)==null||I.call(_,{enabled:!1});return}const r=(g=(N=this.atmosphere)==null?void 0:N.getAtmosphereForClouds)==null?void 0:g.call(N),a=(v=r==null?void 0:r.getCloudShadowTargetTexture)==null?void 0:v.call(r),i=((b=r==null?void 0:r.getCloudShadowClamp01)==null?void 0:b.call(r))??!0?200:1;let n=t;a&&t._texture&&(this._blitBSM(t,a,i),n=a);const s=e.getShadowIntervals(),d=e.getShadowMatrices(),m=((L=e.getTileSize)==null?void 0:L.call(e))||Math.floor(Y/2),f=((O=this.viewer.camera.positionCartographic)==null?void 0:O.height)??0,p=Math.min(1,Math.max(0,(f-2e3)/25e3)),T={enabled:!0,texture:n,scale:i,decode:{x:1,y:1,z:1,w:1},near:((F=e.getShadowNear)==null?void 0:F.call(e))??(Number((D=this.viewer.camera.frustum)==null?void 0:D.near)||.1),far:e.getShadowFar(),topHeight:this._getMaxHeight(),bottomRadius:Number(this.params.bottomRadius)||6371e3,intervals:s.map(R=>new Cesium.Cartesian2(R[0],R[1])),matrices:d.map(R=>Cesium.Matrix4.fromArray(R)),texelSize:{x:1/m,y:1/m},geometricErrorCorrectionAmount:p};(P=(E=this.atmosphere)==null?void 0:E.setCloudShadow)==null||P.call(E,T),(k=(U=this.aerial)==null?void 0:U.setCloudShadow)==null||k.call(U,T)}_taaCapture(){var n;const e=(n=this.viewer.scene.context)==null?void 0:n._gl;if(!e)return;const t=this.viewer.scene.canvas,r=t.width,a=t.height;if(r!==this._taa.w||a!==this._taa.h){this._taa.texA&&e.deleteTexture(this._taa.texA),this._taa.texB&&e.deleteTexture(this._taa.texB),this._taa.pbo&&e.deleteBuffer(this._taa.pbo);const s=()=>{const d=e.createTexture();return e.bindTexture(e.TEXTURE_2D,d),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,r,a,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null),d};this._taa.texA=s(),this._taa.texB=s(),this._taa.pbo=e.createBuffer(),e.bindBuffer(e.PIXEL_PACK_BUFFER,this._taa.pbo),e.bufferData(e.PIXEL_PACK_BUFFER,r*a*4,e.STREAM_READ),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),this._taa.w=r,this._taa.h=a,this._taa.frameCount=0,this._taa.pboReady=!1}const o=this._taa.current===0?this._taa.texB:this._taa.texA;if(this._taa.pboReady){const s=e.getParameter(e.TEXTURE_BINDING_2D),d=e.getParameter(e.UNPACK_FLIP_Y_WEBGL),m=e.getParameter(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL);d&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),m&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.bindBuffer(e.PIXEL_UNPACK_BUFFER,this._taa.pbo),e.bindTexture(e.TEXTURE_2D,o),e.texSubImage2D(e.TEXTURE_2D,0,0,0,r,a,e.RGBA,e.UNSIGNED_BYTE,0),e.bindTexture(e.TEXTURE_2D,s),e.bindBuffer(e.PIXEL_UNPACK_BUFFER,null),d&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),m&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),this._taa.current=1-this._taa.current,this._taa.frameCount++}const i=e.getParameter(e.FRAMEBUFFER_BINDING);e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindBuffer(e.PIXEL_PACK_BUFFER,this._taa.pbo),e.readPixels(0,0,r,a,e.RGBA,e.UNSIGNED_BYTE,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),i&&e.bindFramebuffer(e.FRAMEBUFFER,i),this._taa.pboReady=!0}_taaUpdateVP(){this._taa.prevVP=this._taa.curVP;const e=this.viewer.camera;this._taa.curVP=Cesium.Matrix4.multiply(e.frustum.projectionMatrix,e.viewMatrix,new Cesium.Matrix4)}_setupGUI(){if(this._gui||!this.enableGui)return;const e=typeof window<"u"&&window.dat?window.dat:null;if(!(e!=null&&e.GUI))return;this._gui=new e.GUI({name:"体积云管线"});const t=this.params,r=t.layers,a=this._gui.addFolder("云层");a.add(r[0],"altitude",0,2e4,50).name("层0底高(m)"),a.add(r[0],"height",0,1e4,50).name("层0厚度(m)"),a.add(r[0],"coverage",0,1,.01).name("层0覆盖度"),a.add(r[1],"altitude",0,2e4,50).name("层1底高(m)"),a.add(r[1],"height",0,1e4,50).name("层1厚度(m)"),a.add(r[1],"coverage",0,1,.01).name("层1覆盖度"),a.add(r[2],"altitude",0,2e4,50).name("层2底高(m)"),a.add(r[2],"height",0,1e4,50).name("层2厚度(m)"),a.add(r[2],"coverage",0,1,.01).name("层2覆盖度"),a.add(t,"shapeRepeat",1,8,.1).name("主体噪声频率"),a.add(t,"shapeDetailRepeat",5e-4,.02,1e-4).name("细节噪声频率"),a.add(r[0],"shapeDetailAmount",0,1.5,.01).name("层0细节权重"),a.add(r[1],"shapeDetailAmount",0,1.5,.01).name("层1细节权重"),a.add(r[2],"shapeDetailAmount",0,1.5,.01).name("层2细节权重"),a.add(r[0],"weatherExponent",.2,2,.01).name("层0天气指数"),a.add(r[1],"weatherExponent",.2,2,.01).name("层1天气指数"),a.add(r[2],"weatherExponent",.2,2,.01).name("层2天气指数"),a.add(r[0],"coverageFilterWidth",.1,1,.01).name("层0覆盖过滤宽度"),a.add(r[1],"coverageFilterWidth",.1,1,.01).name("层1覆盖过滤宽度"),a.add(r[2],"coverageFilterWidth",.1,1,.01).name("层2覆盖过滤宽度"),a.open();const o=this._gui.addFolder("光照");o.add(t,"sunIntensity",0,150,5).name("太阳强度"),o.add(t,"skyToSunRatio",.05,.6,.01).name("天空/太阳比"),o.add(t,"cloudExposure",.1,5,.1).name("云曝光"),o.add(t,"magentaFixStrength",0,2,.05).name("落日去品红强度"),o.add(t,"edgeAlphaCutoff",0,.2,.005).name("边缘Alpha裁剪"),o.add(t,"aerialPerspectiveScale",0,3,.1).name("大气透视");const i=this._gui.addFolder("散射");i.add(t,"scatterG1",0,.99,.01).name("前向散射G"),i.add(t,"scatterG2",-.99,0,.01).name("后向散射G"),i.add(t,"multiScatteringOctaves",1,12,1).name("多散射阶数");const n=this._gui.addFolder("动画");n.add(t,"windSpeed",0,1,1e-4).name("风速"),n.add(t,"evolutionSpeed",0,1e-4,1e-6).name("演化速度"),n.add(t,"distFadeStart",5e3,1e5,1e3).name("远处衰减起点(m)"),n.add(t,"distFadeEnd",2e4,2e5,1e3).name("远处衰减终点(m)");const s=this._gui.addFolder("开关");s.add(t,"cloudsVisible").name("显示云").onChange(f=>{this.cloudStage&&(this.cloudStage.enabled=f)}),s.add(t,"useShadowBuffer").name("BSM(云阴影)"),s.add(t,"shadowLengthEnabled").name("阴影长度(丁达尔)"),s.add(t,"hazeEnabled").name("雾效(HAZE)"),s.add(t,"temporalEnabled").name("TAA"),s.add(t,"maxSteps",64,1200,1).name("主采样步数"),s.add(t,"minStepSize",5,200,1).name("最小步长"),s.add(t,"blueNoiseScale",.25,4,.05).name("噪声采样缩放"),s.add(t,"jitterStrength",0,1,.01).name("抖动强度");const d=this._gui.addFolder("BSM 缩放"),m=(f,p)=>{this.atmosphere&&(this.atmosphere[`_${f}`]=p),this.aerial&&(this.aerial[`_${f}`]=p)};t._bsmGroundScale=.3,t._bsmTyndallScale=1,d.add(t,"_bsmGroundScale",.1,20,.1).name("OD缩放(地面)").onChange(f=>m("bsmGroundOpticalDepthScale",f)),d.add(t,"_bsmTyndallScale",.1,20,.1).name("OD缩放(光柱)").onChange(f=>m("bsmTyndallOpticalDepthScale",f)),d.add(t,"shadowFar",2e4,5e5,5e3).name("阴影覆盖距离"),d.add(t,"shadowSplitLambda",0,1,.05).name("近处分配"),d.add(t,"shadowFadeScale",0,5,.1).name("边缘扩展"),m("bsmGroundOpticalDepthScale",t._bsmGroundScale),m("bsmTyndallOpticalDepthScale",t._bsmTyndallScale)}_getShadowPassParams(){var y,S,u,_,I,N,g,v,b,L,O,F,D;const e=this.params.layers,t=[],r=[],a=[],o=[],i=[],n=[],s=[],d=[],m=[],f=[],p=[];let T=1e9,l=0;for(let E=0;E<4;E++){const P=Number((y=e[E])==null?void 0:y.altitude)||0,U=Number((S=e[E])==null?void 0:S.height)||0;P+U>0&&(T=Math.min(T,P),l=Math.max(l,P+U)),t[E]=P,r[E]=P+U,a[E]=Number((_=(u=e[E])==null?void 0:u.densityProfile)==null?void 0:_.linearTerm)??.75,o[E]=Number((N=(I=e[E])==null?void 0:I.densityProfile)==null?void 0:N.constantTerm)??.25,i[E]=Number((g=e[E])==null?void 0:g.densityScale)||0,n[E]=Number((v=e[E])==null?void 0:v.shapeAmount)??1,s[E]=Number((b=e[E])==null?void 0:b.shapeDetailAmount)??1,d[E]=Number((L=e[E])==null?void 0:L.weatherExponent)??1,m[E]=Number((O=e[E])==null?void 0:O.shapeAlteringBias)??.35,f[E]=Number((F=e[E])==null?void 0:F.coverageFilterWidth)??.6,p[E]=Number((D=e[E])==null?void 0:D.coverage)??.3}const w=this._getIntervalHeights(),h=Number.isFinite(T)?T:750;return{bottomRadius:Number(this.params.bottomRadius)||6378137,cloudBottomHeight:h,cloudTopHeight:Math.max(0,l-h)||1500,shadowBottomHeight:h,shadowTopHeight:l||h+1500,shadowFar:Number(this.params.shadowFar)||Number(this.params.maxShadowLengthRayDistance)||2e5,maxShadowLengthRayDistance:Number(this.params.maxShadowLengthRayDistance)||2e5,shadowSplitLambda:Number(this.params.shadowSplitLambda)||.5,shadowFadeScale:Number(this.params.shadowFadeScale)||1,weatherRepeat:Number(this.params.weatherRepeat)||100,windSpeed:Number(this.params.windSpeed)||0,shapeRepeat:(Number(this.params.shapeRepeat)||3)/1e4,shapeDetailRepeat:Number(this.params.shapeDetailRepeat)||.006,turbulenceRepeat:Number(this.params.turbulenceRepeat)||2,turbulenceDisplacement:Number(this.params.turbulenceDisplacement)||400,coverage:Math.max(...p),densityScale:Math.max(...i),scatteringCoefficient:Number(this.params.scatteringCoefficient)??.9,absorptionCoefficient:Number(this.params.absorptionCoefficient)??1,startTime:performance.now()/1e3,evolutionSpeed:Number(this.params.evolutionSpeed)||.005,maxSteps:this.params.maxSteps,minStepSize:this.params.minStepSize,minDensity:this.params.minDensity??1e-5,minExtinction:this.params.minExtinction??1e-5,minTransmittance:this.params.minTransmittance??.01,opticalDepthTailScale:1,minLayerHeights:t,maxLayerHeights:r,densityProfileLinear:a,densityProfileConstant:o,densityProfileExpTerms:[0,0,0,0],densityProfileExponents:[0,0,0,0],densityScales:i,shapeAmounts:n,shapeDetailAmounts:s,weatherExponents:d,shapeAlteringBiases:m,coverageFilterWidths:f,coverages:p,minIntervalHeights:[w.min.x,w.min.y,w.min.z],maxIntervalHeights:[w.max.x,w.max.y,w.max.z],localWeatherOffset:[0,0],shapeOffset:[0,0,0],shapeDetailOffset:[0,0,0]}}async init(){return this._ready?this._ready:(this._ready=(async()=>{const e=this.viewer;e.scene.globe.depthTestAgainstTerrain=!0,this.atmosphere=new Te(e,{atmosphereParams:this.atmosphereParams,renderSky:!0,applyGroundAtmosphere:!1,autoAddStage:!1,enableGui:!1,assetsBaseUrl:this.atmosphereAssetsBase,shaderBaseUrl:this.atmosphereShaderBase}),await this.atmosphere.init(),this.aerial=new Ee(e,{atmosphereParams:this.atmosphereParams,autoAddStage:!1,assetsBaseUrl:this.atmosphereAssetsBase,shaderBaseUrl:this.atmosphereShaderBase}),await this._loadTextures();const t=await this._buildCloudFragmentShader(),{CloudShadowPass:r}=await $(async()=>{const{CloudShadowPass:n}=await import("./CloudShadowPass-BOrPom-c.js");return{CloudShadowPass:n}},__vite__mapDeps([0,1]),import.meta.url),{ShadowResolvePass:a}=await $(async()=>{const{ShadowResolvePass:n}=await import("./ShadowResolvePass-DxqxB0I-.js");return{ShadowResolvePass:n}},__vite__mapDeps([2,1]),import.meta.url);this.params.useShadowBuffer&&this.textures&&(this._bsm.pass=new r(e,{textures:this.textures,params:this._getShadowPassParams()}),this._bsm.pass.init(),this._bsm.resolve=new a(e,{size:Y,temporalAlpha:.01}),this._bsm.resolve.setInputTextures(this._bsm.pass.getTexture(),this._bsm.pass.getDepthVelocityTexture()),this._bsm.resolve.init());const o=this._buildCloudUniforms();this.cloudStage=new Cesium.PostProcessStage({name:"GeospatialVolumetricClouds",fragmentShader:t,uniforms:o}),this.cloudStage.enabled=this.params.cloudsVisible,await this.aerial.init();const i=e.scene.postProcessStages;this.atmosphere.stage&&i.add(this.atmosphere.stage),this.aerial.stage&&i.add(this.aerial.stage),i.add(this.cloudStage),this._listeners.push(e.scene.preRender.addEventListener(()=>this._syncBSM())),this._listeners.push(e.scene.postRender.addEventListener(()=>{this._taaUpdateVP(),this.params.temporalEnabled&&this._taaCapture(),this._frameCount++})),this._listeners.push(e.camera.changed.addEventListener(()=>{var p,T,l,w,h,y;const n=Cesium.Cartographic.fromCartesian(e.camera.positionWC,e.scene.globe.ellipsoid);Number(n==null?void 0:n.height);const s=Number(((y=(h=(w=(l=(T=(p=this.atmosphere)==null?void 0:p.getAtmosphereForClouds)==null?void 0:T.call(p))==null?void 0:l.getUniforms)==null?void 0:w.call(l))==null?void 0:h.bottomRadius)==null?void 0:y.call(h))??NaN),d=Number.isFinite(s)?s:Number(this.params.bottomRadius)||0,m=this._getAltitudeCorrectionOffset(d),f=Cesium.Cartesian3.add(e.camera.positionWC,m,new Cesium.Cartesian3);Math.max(0,Cesium.Cartesian3.magnitude(f)-d)})),this.enableGui&&this._setupGUI()})(),this._ready)}destroy(){var r,a,o,i,n,s,d,m,f,p,T;for(const l of this._listeners)typeof l=="function"&&l();this._listeners=[];const e=(a=(r=this.viewer)==null?void 0:r.scene)==null?void 0:a.postProcessStages;if(e&&this.cloudStage)try{e.remove(this.cloudStage)}catch{}this.cloudStage=null;try{(o=this.aerial)==null||o.destroy()}catch{}this.aerial=null;try{(i=this.atmosphere)==null||i.destroy()}catch{}this.atmosphere=null;try{(n=this._bsm.pass)==null||n.destroy()}catch{}this._bsm.pass=null;try{(s=this._bsm.resolve)==null||s.destroy()}catch{}this._bsm.resolve=null;const t=(f=(m=(d=this.viewer)==null?void 0:d.scene)==null?void 0:m.context)==null?void 0:f._gl;if(t&&(this._bsm.blitFbo&&t.deleteFramebuffer(this._bsm.blitFbo),this._bsm.blitProg&&t.deleteProgram(this._bsm.blitProg),this._bsm.blitVbo&&t.deleteBuffer(this._bsm.blitVbo),this._taa.texA&&t.deleteTexture(this._taa.texA),this._taa.texB&&t.deleteTexture(this._taa.texB),this._taa.pbo&&t.deleteBuffer(this._taa.pbo)),this._bsm={pass:null,resolve:null,blitFbo:null,blitProg:null,blitVbo:null},this._taa={texA:null,texB:null,current:0,pbo:null,pboReady:!1,w:0,h:0,frameCount:0,prevVP:null,curVP:null},this.textures){for(const l in this.textures)try{(T=(p=this.textures[l])==null?void 0:p.destroy)==null||T.call(p)}catch{}this.textures=null}this._gui&&(this._gui.destroy(),this._gui=null),this._ready=null}}async function Ue(c,e={}){const{assets:t,atmosphereParams:r,...a}=e,i=a.cloudsAssetsBase||a.atmosphereAssetsBase||a.brunetonShaderBase?{}:Ce(t??{mode:"cdn"}),n=new Pe(c,{atmosphereParams:r??new W,enableGui:!1,...i,...a});return await n.init(),n}export{Ue as createCloudAtmosphere};
