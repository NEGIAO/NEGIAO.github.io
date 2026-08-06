import{g as le}from"./getCesium-6L1FaWum.js";import{w as ke,F as Ve,N as Xe,R as Te,L as Ae,x as Ye}from"./vendor-three-Dm5RPYnA.js";const Ce=1/1e3,de={TRANSMITTANCE_TEXTURE_WIDTH:256,TRANSMITTANCE_TEXTURE_HEIGHT:64,SCATTERING_TEXTURE_R_SIZE:32,SCATTERING_TEXTURE_MU_SIZE:128,SCATTERING_TEXTURE_MU_S_SIZE:32,SCATTERING_TEXTURE_NU_SIZE:8,SCATTERING_TEXTURE_WIDTH:256,SCATTERING_TEXTURE_HEIGHT:128,SCATTERING_TEXTURE_DEPTH:32,IRRADIANCE_TEXTURE_WIDTH:64,IRRADIANCE_TEXTURE_HEIGHT:16,METER_TO_LENGTH_UNIT:1/1e3};function je(m={}){const{useHalfFloat:e=!1,output:t=null}=m,r=de,a=[`#define TRANSMITTANCE_TEXTURE_WIDTH ${r.TRANSMITTANCE_TEXTURE_WIDTH}`,`#define TRANSMITTANCE_TEXTURE_HEIGHT ${r.TRANSMITTANCE_TEXTURE_HEIGHT}`,`#define SCATTERING_TEXTURE_R_SIZE ${r.SCATTERING_TEXTURE_R_SIZE}`,`#define SCATTERING_TEXTURE_MU_SIZE ${r.SCATTERING_TEXTURE_MU_SIZE}`,`#define SCATTERING_TEXTURE_MU_S_SIZE ${r.SCATTERING_TEXTURE_MU_S_SIZE}`,`#define SCATTERING_TEXTURE_NU_SIZE ${r.SCATTERING_TEXTURE_NU_SIZE}`,`#define IRRADIANCE_TEXTURE_WIDTH ${r.IRRADIANCE_TEXTURE_WIDTH}`,`#define IRRADIANCE_TEXTURE_HEIGHT ${r.IRRADIANCE_TEXTURE_HEIGHT}`];return e&&a.push("#define TRANSMITTANCE_PRECISION_LOG 1"),t!=null&&a.push(`#define OUTPUT ${t}`),a.join(`
`)}function $e(m){const e={};for(const[t,r]of Object.entries(m))Array.isArray(r)?e[`ATMOSPHERE.${t}`]=r:r&&typeof r=="object"&&r.layers?r.layers.forEach((a,n)=>{for(const[o,i]of Object.entries(a))e[`ATMOSPHERE.${t}.layers[${n}].${o}`]=i}):e[`ATMOSPHERE.${t}`]=r;return e}function qe(m){return m*Math.PI/180}const Ke=[.2126,.7152,.0722];function Ze(m,e){return m[0]*e[0]+m[1]*e[1]+m[2]*e[2]}function ee(m,e,t,r,a){this.width=m,this.expTerm=e,this.expScale=t,this.linearTerm=r,this.constantTerm=a}ee.prototype.toUniform=function(){return{width:this.width,exp_term:this.expTerm,exp_scale:this.expScale,linear_term:this.linearTerm,constant_term:this.constantTerm}};function he(){this.bottomRadius=6371030,this.topRadius=642e4,this.sunAngularRadius=.004675,this.solarIrradiance=[1.474,1.8504,1.91198],this.rayleighDensity=[new ee(0,0,0,0,0),new ee(0,1,-.125,0,0)],this.rayleighScattering=[.005802,.013558,.0331],this.mieDensity=[new ee(0,0,0,0,0),new ee(0,1,-.833333,0,0)],this.mieScattering=[.003996,.003996,.003996],this.mieExtinction=[.00444,.00444,.00444],this.miePhaseFunctionG=.8,this.absorptionDensity=[new ee(25,0,0,1/15,-2/3),new ee(0,0,0,-1/15,8/3)],this.absorptionExtinction=[65e-5,.001881,85e-6],this.groundAlbedo=[.1,.1,.1],this.muSMin=Math.cos(qe(120)),this.sunRadianceToLuminance=[98242.786222,69954.398112,66475.012354],this.skyRadianceToLuminance=[114974.916437,71305.954816,65310.548555];const m=this.sunRadianceToLuminance,e=Ze(Ke,m);this.sunRadianceToRelativeLuminance=m.map(t=>t/e),this.skyRadianceToRelativeLuminance=this.skyRadianceToLuminance.map(t=>t/e)}he.prototype.toUniform=function(){return{solar_irradiance:this.solarIrradiance,sun_angular_radius:this.sunAngularRadius,bottom_radius:this.bottomRadius*Ce,top_radius:this.topRadius*Ce,rayleigh_density:{layers:this.rayleighDensity.map(m=>m.toUniform())},rayleigh_scattering:this.rayleighScattering,mie_density:{layers:this.mieDensity.map(m=>m.toUniform())},mie_scattering:this.mieScattering,mie_extinction:this.mieExtinction,mie_phase_function_g:this.miePhaseFunctionG,absorption_density:{layers:this.absorptionDensity.map(m=>m.toUniform())},absorption_extinction:this.absorptionExtinction,ground_albedo:this.groundAlbedo,mu_s_min:this.muSMin}};le();const X=de;function Qe(m){const e=(m&32768)>>15,t=(m&31744)>>10,r=m&1023;return t===0?(e?-1:1)*(r?Math.pow(2,-14)*(r/1024):0):t===31?r?Number.NaN:e?-1/0:1/0:(e?-1:1)*Math.pow(2,t-15)*(1+r/1024)}function ce(m){const e=new Uint16Array(m),t=e.length,r=new Float32Array(t);for(let a=0;a<t;a++)r[a]=Qe(e[a]);return r}function ue(m){return fetch(m).then(e=>{if(!e.ok)throw new Error(`Failed to load ${m}: ${e.status}`);return e.arrayBuffer()})}async function Pe(m,e,t){const r=m.replace(/\/?$/,"/"),[a,n,o,i,s]=await Promise.all([ue(r+"transmittance.bin"),ue(r+"irradiance.bin"),ue(r+"scattering.bin"),ue(r+"single_mie_scattering.bin"),ue(r+"higher_order_scattering.bin")]),c=X.TRANSMITTANCE_TEXTURE_WIDTH,d=X.TRANSMITTANCE_TEXTURE_HEIGHT,f=X.IRRADIANCE_TEXTURE_WIDTH,p=X.IRRADIANCE_TEXTURE_HEIGHT,S=X.SCATTERING_TEXTURE_WIDTH,l=X.SCATTERING_TEXTURE_HEIGHT,T=X.SCATTERING_TEXTURE_DEPTH,_=X.SCATTERING_TEXTURE_WIDTH,E=X.SCATTERING_TEXTURE_HEIGHT,v=X.SCATTERING_TEXTURE_DEPTH,u=X.SCATTERING_TEXTURE_WIDTH,h=X.SCATTERING_TEXTURE_HEIGHT,R=X.SCATTERING_TEXTURE_DEPTH,C=ce(a),g=ce(n),A=ce(o),I=ce(i),P=ce(s),O=new t.Texture({context:e,width:c,height:d,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{arrayBufferView:C,width:c,height:d},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE})}),L=new t.Texture({context:e,width:f,height:p,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{arrayBufferView:g,width:f,height:p},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE})}),F=new t.Texture3D({context:e,width:S,height:l,depth:T,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{arrayBufferView:A},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,wrapR:t.TextureWrap.CLAMP_TO_EDGE})}),x=new t.Texture3D({context:e,width:_,height:E,depth:v,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{arrayBufferView:I},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,wrapR:t.TextureWrap.CLAMP_TO_EDGE})}),w=new t.Texture3D({context:e,width:u,height:h,depth:R,pixelFormat:t.PixelFormat.RGBA,pixelDatatype:t.PixelDatatype.FLOAT,source:{arrayBufferView:P},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.CLAMP_TO_EDGE,wrapT:t.TextureWrap.CLAMP_TO_EDGE,wrapR:t.TextureWrap.CLAMP_TO_EDGE})});return{transmittanceTexture:O,irradianceTexture:L,scatteringTexture:F,singleMieScatteringTexture:x,higherOrderScatteringTexture:w}}const Je={"bruneton/definitions.glsl":`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/definitions.glsl

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
uniform float u_cloudShadowAltitudeFadeStart;\r
uniform float u_cloudShadowAltitudeFadeEnd;\r
uniform float u_bsmGroundOpticalDepthScale;\r
// cascade UV 空间 texel 尺寸（单 cascade tile，非整个 atlas）\r
uniform vec2 u_cloudShadowTexelSize;\r
// 远距几何误差修正量 [0,1]：越大越把 BSM 采样点拉向椭球/bottom 球，抑制地形 LOD 抖动\r
uniform float u_geometricErrorCorrectionAmount;\r
// 空中透视强度 [0,1]：0=透传原色（无透视），1=全强度大气散射\r
uniform float u_aerialPerspectiveScale;\r
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
  return alpha > 0.35 ? nextIndex : prevIndex;\r
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
  // BSM atlas 语义：b=maxOpticalDepth，a=tail；地面也必须消费 tail，否则阴影边缘会被硬截断。\r
  float od = min(shadow.b + shadow.a, shadow.g * max(0.0, distToTop - shadow.r));\r
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
  // 只使用显式几何误差修正；不再按距离强制贴合 bottom 球，避免远处地面云影被压平成“贴球滑动”的假阴影。\r
  float amount = saturateAP(geoAmt);\r
  vec3 corrected = correctBsmPosition(posMeters, amount);\r
  if (amount < 0.01) return corrected;\r
  // 径向高度：用当前高度与 bottom 的差做轻度保留，避免近处地形阴影完全贴球\r
  vec3 n = normalize(corrected);\r
  float h = length(posMeters) - u_cloudShadowBottomRadius;\r
  float stableH = mix(h, max(h, 0.0) * (1.0 - 0.85 * amount), amount);\r
  return n * (u_cloudShadowBottomRadius + stableH);\r
}\r
\r
float getCloudShadowCameraAltitudeFade(vec3 cameraMeters) {\r
  float cameraHeight = length(cameraMeters) - u_cloudShadowBottomRadius;\r
  float fadeStart = max(u_cloudShadowAltitudeFadeStart, 0.0);\r
  float fadeEnd = max(u_cloudShadowAltitudeFadeEnd, fadeStart + 1.0);\r
  return 1.0 - smoothstep(fadeStart, fadeEnd, cameraHeight);\r
}\r
\r
// rawWorldPosMeters：ECEF 米；u_cloudShadowBottomRadius / TopHeight 与管线 setCloudShadow 一致（米）\r
float getGroundSunTransmittance(vec3 rawWorldPosMeters) {\r
  if (u_cloudShadowEnabled == 0) return 1.0;\r
\r
  // 采样前稳定 BSM 世界点（空中透视仍用原始 depth 点，见 main）\r
  vec3 camMeters = (u_cameraPosition + u_altitudeCorrection) / METER_TO_LENGTH_UNIT;\r
  float altitudeFade = getCloudShadowCameraAltitudeFade(camMeters);\r
  if (altitudeFade <= 0.0) return 1.0;\r
  float viewDist = length(rawWorldPosMeters - u_cameraPosition / METER_TO_LENGTH_UNIT);\r
  vec3 samplePos = stabilizeBsmSamplePosition(rawWorldPosMeters, viewDist);\r
\r
  vec3 shellSamplePos = samplePos + u_altitudeCorrection / METER_TO_LENGTH_UNIT;\r
  vec3 groundNormal = normalize(shellSamplePos);\r
  float sunSinElev = dot(u_sunDirection, groundNormal);\r
\r
  // 1) 昼夜线遮挡：太阳低于该地面点本地地平线时，地面点已入夜，无云阴影。\r
  float horizonFade = smoothstep(-0.02, 0.02, sunSinElev);\r
  if (horizonFade <= 0.0) return 1.0;\r
\r
  float topShellR = u_cloudShadowBottomRadius + u_cloudShadowTopHeight;\r
  vec3 rd = u_sunDirection;\r
  float bS = dot(rd, shellSamplePos);\r
  float cTop = dot(shellSamplePos, shellSamplePos) - topShellR * topShellR;\r
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
  float fade = horizonFade * lowSunFade * rayLenFade * altitudeFade;\r
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
    // w 异常时的 bottom-sphere 交点只是透视兜底，不作为 BSM 地面阴影锚点，避免假贴地阴影粘屏。\r
    vec3 finalColorW = originalColor.rgb * transmittanceW + inscatterW * u_aerialPerspectiveScale;\r
    out_FragColor = vec4(finalColorW, originalColor.a);\r
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
    // z>=0 但深度非空：远距/对数深度常见数值问题，眼→世界不可靠。\r
    // 这里仅做空中透视近似，不再把 bottom-sphere 交点喂给 BSM，避免假贴地阴影。\r
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
  // 仅在可靠 depth→ECEF 路径上启用地面 BSM；假球壳点不参与，防止屏幕粘滞阴影。\r
  float sunT = (rawWorldPosMeters.x != 0.0 || rawWorldPosMeters.y != 0.0 || rawWorldPosMeters.z != 0.0)\r
    ? getGroundSunTransmittance(rawWorldPosMeters)\r
    : 1.0;\r
  // 地面像素：sRGB 输入不走 tonemapDisplay，避免双重 gamma 白雾\r
  vec3 finalColor = originalColor.rgb * transmittance * sunT + inscatter * u_aerialPerspectiveScale;\r
\r
  out_FragColor = vec4(finalColor, originalColor.a);\r
}\r
\r
`};function $(m,e={}){const t=e.bundledShaders??Je,r=[m];m.includes("/")||r.push(`bruneton/${m}`);for(const o of r)if(t!=null&&t[o])return Promise.resolve(t[o]);const a=e.shaderBaseUrl;if(!a)return Promise.reject(new Error(`Shader "${m}" not found in bundle and no shaderBaseUrl provided`));const n=a.replace(/\/?$/,"/")+m;return fetch(n).then(o=>{if(!o.ok)throw new Error(`Failed to load ${m}: ${o.status} (${n})`);return o.text()}).then(o=>{if(o.trimStart().startsWith("<!"))throw new Error(`Shader ${m} returned HTML, not GLSL: ${n}`);return o})}const De=le(),et="./src/AtmosphereFromThreeGeospatial/assets/";function Ie(m){const e={};for(const[t,r]of Object.entries(m))Array.isArray(r)?e[`ATMOSPHERE.${t}`]=r:r&&typeof r=="object"&&!("length"in r)&&r.layers?r.layers.forEach((a,n)=>{for(const[o,i]of Object.entries(a))e[`ATMOSPHERE.${t}.layers[${n}].${o}`]=i}):typeof r=="number"?e[`ATMOSPHERE.${t}`]=r:e[`ATMOSPHERE.${t}`]=r;return e}function tt(m,e,t,r){const a=de,n=`
precision highp float;
precision highp sampler2D;
precision highp sampler3D;
`,o=["#define COMBINED_SCATTERING_TEXTURES","#define PERSPECTIVE_CAMERA","#define SUN",`#define SCATTERING_TEXTURE_R_SIZE ${a.SCATTERING_TEXTURE_R_SIZE}`,`#define SCATTERING_TEXTURE_MU_SIZE ${a.SCATTERING_TEXTURE_MU_SIZE}`,`#define SCATTERING_TEXTURE_MU_S_SIZE ${a.SCATTERING_TEXTURE_MU_S_SIZE}`,`#define SCATTERING_TEXTURE_NU_SIZE ${a.SCATTERING_TEXTURE_NU_SIZE}`,`#define TRANSMITTANCE_TEXTURE_WIDTH ${a.TRANSMITTANCE_TEXTURE_WIDTH}`,`#define TRANSMITTANCE_TEXTURE_HEIGHT ${a.TRANSMITTANCE_TEXTURE_HEIGHT}`,`#define IRRADIANCE_TEXTURE_WIDTH ${a.IRRADIANCE_TEXTURE_WIDTH}`,`#define IRRADIANCE_TEXTURE_HEIGHT ${a.IRRADIANCE_TEXTURE_HEIGHT}`].join(`
`);return n+o+`
`+m+`
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
uniform float u_cloudShadowAltitudeFadeStart;
uniform float u_cloudShadowAltitudeFadeEnd;
uniform vec2 u_cloudShadowTexelSize;
uniform int u_cloudShadowPcfTaps;
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
    return (shadow.b + shadow.a) * max(u_bsmTyndallOpticalDepthScale, 0.0);
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
  // V3.4.12：与 aerial 一致，硬阈值改为逐像素 IGN 抖动阈值，消除随相机扫动的 cascade 硬边界线。
  return alpha > jitter ? nextIndex : prevIndex;
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
  // V3.4.7：tile UV 半 texel gutter clamp，防 PCF 越界读到相邻 cascade tile。
  vec2 gutterG = max(u_cloudShadowTexelSize, vec2(1e-4)) * 0.5;
  uv = clamp(uv, gutterG, 1.0 - gutterG);
  vec2 atlasUv = getCloudShadowAtlasOffset(ci) + uv * 0.5;
  vec4 shadow = (texture(u_cloudShadowBuffer, atlasUv) / scale) * u_cloudShadowDecode;
  float od = min(shadow.b + shadow.a, shadow.g * max(0.0, distToTop - shadow.r));
  return od * max(u_bsmGroundOpticalDepthScale, 0.0);
}

float sampleShadowOpticalDepthPCFGround(vec3 worldPos, float distToTop, float radius, int ci) {
  vec2 uv = getShadowUvGround(worldPos, ci);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
  vec2 texel = max(u_cloudShadowTexelSize, vec2(1e-4));
  int taps = clamp(u_cloudShadowPcfTaps, 1, 16);
  if (radius < 0.1 || taps <= 1) return readShadowOpticalDepthGround(uv, ci, distToTop);
  float sum = 0.0;
  float phi = interleavedGradientNoiseAP(gl_FragCoord.xy) * 6.28318530718;
  for (int i = 0; i < 16; ++i) {
    if (i >= taps) break;
    sum += readShadowOpticalDepthGround(uv + vogelDiskAP(i, 16, phi) * radius * texel, ci, distToTop);
  }
  return sum / float(taps);
}

vec3 correctBsmPosition(vec3 posMeters, float amount) {
  if (amount <= 0.0) return posMeters;
  vec3 sphereNormal = normalize(posMeters);
  vec3 spherePosition = u_cloudShadowBottomRadius * sphereNormal;
  return mix(posMeters, spherePosition, saturateAP(amount));
}

vec3 stabilizeBsmSamplePosition(vec3 posMeters, float viewDistMeters) {
  float geoAmt = max(u_geometricErrorCorrectionAmount, 0.0);
  float amount = saturateAP(geoAmt);
  vec3 corrected = correctBsmPosition(posMeters, amount);
  if (amount < 0.01) return corrected;
  vec3 n = normalize(corrected);
  float h = length(posMeters) - u_cloudShadowBottomRadius;
  float stableH = mix(h, max(h, 0.0) * (1.0 - 0.85 * amount), amount);
  return n * (u_cloudShadowBottomRadius + stableH);
}

float getCloudShadowCameraAltitudeFade(vec3 cameraMeters) {
  float cameraHeight = length(cameraMeters) - u_cloudShadowBottomRadius;
  float fadeStart = max(u_cloudShadowAltitudeFadeStart, 0.0);
  float fadeEnd = max(u_cloudShadowAltitudeFadeEnd, fadeStart + 1.0);
  return 1.0 - smoothstep(fadeStart, fadeEnd, cameraHeight);
}

float getGroundSunTransmittance(vec3 rawWorldPosMeters) {
  if (u_cloudShadowEnabled == 0) return 1.0;
  vec3 camMeters = (u_cameraPosition + u_altitudeCorrection) / METER_TO_LENGTH_UNIT;
  float altitudeFade = getCloudShadowCameraAltitudeFade(camMeters);
  if (altitudeFade <= 0.0) return 1.0;
  float viewDist = length(rawWorldPosMeters - u_cameraPosition / METER_TO_LENGTH_UNIT);
  vec3 samplePos = stabilizeBsmSamplePosition(rawWorldPosMeters, viewDist);

  vec3 shellSamplePos = samplePos + u_altitudeCorrection / METER_TO_LENGTH_UNIT;
  vec3 groundNormal = normalize(shellSamplePos);
  float sunSinElev = dot(u_sunDirection, groundNormal);
  float horizonFade = smoothstep(-0.02, 0.02, sunSinElev);
  if (horizonFade <= 0.0) return 1.0;

  float topShellR = u_cloudShadowBottomRadius + u_cloudShadowTopHeight;
  vec3 rd = u_sunDirection;
  float bS = dot(rd, shellSamplePos);
  float cS = dot(shellSamplePos, shellSamplePos) - topShellR * topShellR;
  float discS = bS * bS - cS;
  if (discS <= 0.0) return 1.0;
  float distToShadowTop = -bS + sqrt(discS);
  if (distToShadowTop <= 0.0) return 1.0;

  float lowSunFade = smoothstep(0.0, 0.087, sunSinElev);
  float rayLenFade = 1.0 - smoothstep(u_cloudShadowTopHeight * 6.0,
                                       u_cloudShadowTopHeight * 20.0,
                                       distToShadowTop);
  float fade = horizonFade * lowSunFade * rayLenFade * altitudeFade;
  if (fade <= 0.0) return 1.0;

  float jitter = interleavedGradientNoiseAP(gl_FragCoord.xy);
  float near = max(u_cloudShadowNear, 1e-3);
  float far = max(u_cloudShadowFar, near + 1.0);
  int ci = getFadedCascadeIndex(czm_view, samplePos, u_cloudShadowIntervals, near, far, jitter);
  if (ci < 0) return 1.0;

  // V3.4.12：PCF 半径固定，避免随视距连续变化导致升降时模糊宽度“呼吸”。
  float pcfRadius = 2.0;
  float opticalDepth = sampleShadowOpticalDepthPCFGround(samplePos, distToShadowTop, pcfRadius, ci);
  float shade = exp(-opticalDepth);
  return mix(1.0, shade, fade);
}

float marchShadowLengthAtm(vec3 cameraKm, vec3 rd, float tNear, float tFar) {
  if (u_cloudShadowEnabled == 0) return 0.0;
  float maxDist = tFar - tNear;
  if (maxDist <= 0.0) return 0.0;
  // V3.4.x：64→24。BSM OD 为低频信号，24 步视觉无差；该路径在修复 LUT 伪值后
  // 成为 BSM 开启时的实际执行分支，需控制每像素成本。
  const int STEPS = 24;
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
  // 注意：该兜底只用于空中透视几何点，不直接用于 BSM 地面阴影，避免球壳假贴地。
  bool bsmSampleValid = hasScene;
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
        bsmSampleValid = false;
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
  // 优先 shadowLengthBuffer；未提供纹理时回退为沿视线 BSM 步进（与 three-geospatial 丁达尔一致）。
  // V3.4.x：仅在结果会被消费的像素计算（isSky 或 applyGroundAtmosphere）；
  // 本管线 applyGround=0 → 地面像素跳过（其 shadowLength 之前算完即丢）。
  float shadowLength = 0.0;
  if (isSky || u_applyGroundAtmosphere != 0) {
    if (u_shadowLengthEnabled != 0) {
      shadowLength = readShadowLengthBuffer(v_textureCoordinates) * max(u_tyndallScale, 0.0);
    } else if (u_cloudShadowEnabled != 0) {
      shadowLength = marchShadowLengthAtm(cameraPosition, rayDirection, shadowRayBegin, shadowRayEnd);
    }
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
    float sunTransmittance = bsmSampleValid ? getGroundSunTransmittance(rawWorldPosMeters) : 1.0;
    finalColor = originalColor.rgb * transmittance * sunTransmittance + inscatter;
  }

  // 线性 HDR + 单次曝光；ACES/gamma 仅在后接 AerialPerspectiveEffect 中做，避免两道 ACES 叠乘过曝
  out_FragColor = vec4(finalColor * u_atmosphereExposure, originalColor.a);
}
`}class at{constructor(e,t={}){this.viewer=e,this.assetsBaseUrl=t.assetsBaseUrl??et,this.shaderBaseUrl=t.shaderBaseUrl??"./src/AtmosphereFromThreeGeospatial/Shaders/",this.atmosphereParams=t.atmosphereParams??new he,this.stage=null,this.textures=null,this._ready=null,this._atmosphereExposure=t.atmosphereExposure??1,this._exposureFollowTimeline=t.exposureFollowTimeline??!0,this._exposureDay=t.exposureDay??1,this._exposureNight=t.exposureNight??.1,this._exposureTwilightAngleDegrees=t.exposureTwilightAngleDegrees??6,this._debugTyndallMode=0,this._tyndallScale=2.5,this._bsmTyndallOpticalDepthScale=1,this._bsmGroundOpticalDepthScale=1,this._shadowLengthEnabled=!0,this._shadowLengthTexture=null,this._shadowLengthScale=1,this._cloudShadowEnabled=!1,this._cloudShadowBuffer=null,this._cloudShadowDecode=null,this._cloudShadowNear=.1,this._cloudShadowFar=2e5,this._cloudShadowTopHeight=5e3,this._cloudShadowAltitudeFadeStart=5e3,this._cloudShadowAltitudeFadeEnd=13e3,this._cloudShadowBottomRadius=this.atmosphereParams.bottomRadius,this._cloudShadowIntervals=null,this._cloudShadowMatrices=null,this._cloudShadowTexScale=1,this._cloudShadowTexelSize=null,this._geometricErrorCorrectionAmount=0,this._cloudShadowPcfTaps=16,this._gui=null,this.enableGui=t.enableGui===!0,this._renderSky=t.renderSky??!1,this._applyGroundAtmosphere=t.applyGroundAtmosphere??!0,this._autoAddStage=t.autoAddStage??!0}_getAltitudeCorrectionOffsetKm(e){var d,f,p,S,l;const t=window.Cesium;if(!t)return{x:0,y:0,z:0};const r=(p=(f=(d=this.viewer)==null?void 0:d.scene)==null?void 0:f.globe)==null?void 0:p.ellipsoid,a=(l=(S=this.viewer)==null?void 0:S.camera)==null?void 0:l.positionWC;if(!r||!a)return new t.Cartesian3(0,0,0);const n=t.Cartographic.fromCartesian(a,r);if(!n)return new t.Cartesian3(0,0,0);const o=t.Cartesian3.fromRadians(n.longitude,n.latitude,0,r),i=r.geodeticSurfaceNormal(o,new t.Cartesian3),s=t.Cartesian3.subtract(o,t.Cartesian3.multiplyByScalar(i,Number(e)||0,new t.Cartesian3),new t.Cartesian3),c=t.Cartesian3.negate(s,new t.Cartesian3);return new t.Cartesian3(c.x*.001,c.y*.001,c.z*.001)}_getEffectiveAtmosphereExposure(){var E,v,u,h,R;if(!this._exposureFollowTimeline)return this._atmosphereExposure;const e=window.Cesium;if(!e||!((v=(E=this.viewer)==null?void 0:E.camera)!=null&&v.positionWC))return this._exposureDay;const t=this.viewer.camera.positionWC,r=((u=this.viewer.scene.globe)==null?void 0:u.ellipsoid)??e.Ellipsoid.WGS84,a=(R=(h=this.viewer.scene.context)==null?void 0:h.uniformState)==null?void 0:R.sunDirectionWC;if(!a)return this._exposureDay;const n=e.Cartographic.fromCartesian(t,r);if(!n)return this._exposureDay;const o=e.Cartesian3.fromRadians(n.longitude,n.latitude,0,r,new e.Cartesian3),i=r.geodeticSurfaceNormal(o,new e.Cartesian3),s=e.Cartesian3.normalize(a,new e.Cartesian3),c=e.Math.clamp(e.Cartesian3.dot(s,i),-1,1),d=e.Math.toDegrees(Math.asin(c)),f=Math.max(.1,Number(this._exposureTwilightAngleDegrees)||6),p=-f,S=f;let l=(d-p)/(S-p);l=e.Math.clamp(l,0,1);const T=Number(this._exposureDay),_=Number(this._exposureNight);return _+l*(T-_)}async init(){if(this._ready)return this._ready;this.viewer.scene.globe.depthTestAgainstTerrain=!0;const e=this.viewer.scene,t=e.context;if(!(t._gl instanceof WebGL2RenderingContext))throw new Error("AtmospherePostProcess 需要 WebGL2（用于 3D 散射纹理）。");const a=window.Cesium;if(!a)throw new Error("需要全局 Cesium。");return this._ready=(async()=>{const[n,o,i]=await Promise.all([$("bruneton/definitions.glsl",{shaderBaseUrl:this.shaderBaseUrl}),$("bruneton/common.glsl",{shaderBaseUrl:this.shaderBaseUrl}),$("bruneton/runtime.glsl",{shaderBaseUrl:this.shaderBaseUrl})]),s=await $("sky.glsl",{shaderBaseUrl:this.shaderBaseUrl});this.textures=await Pe(this.assetsBaseUrl,t,a);const c=1024,d=!!t.halfFloatingPointTexture&&!!t.colorBufferHalfFloat,f=d?a.PixelDatatype.HALF_FLOAT:a.PixelDatatype.UNSIGNED_BYTE;let p=a.PixelDatatype.UNSIGNED_BYTE;d?p=a.PixelDatatype.HALF_FLOAT:t.colorBufferFloat&&t.floatingPointTexture&&(p=a.PixelDatatype.FLOAT),this._cloudShadowCesiumTexture=new a.Texture({context:t,width:c,height:c,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:f,sampler:new a.Sampler({minificationFilter:a.TextureMinificationFilter.LINEAR,magnificationFilter:a.TextureMagnificationFilter.LINEAR,wrapS:a.TextureWrap.CLAMP_TO_EDGE,wrapT:a.TextureWrap.CLAMP_TO_EDGE})}),this._cloudShadowTexScale=d?1:.02,this._cloudShadowTexClamp01=!d,this._cloudShadowDummyArray=null;const S=tt(n,o,i,s);e.skyAtmosphere&&(e.skyAtmosphere.show=!1);const l=this,T=Ie(this.atmosphereParams.toUniform()),_={u_cameraPosition:()=>{const v=l.viewer.camera.positionWC;return new a.Cartesian3(v.x*.001,v.y*.001,v.z*.001)},u_altitudeCorrection:()=>l._getAltitudeCorrectionOffsetKm(l.atmosphereParams.bottomRadius),u_sunDirection:()=>{var v,u;return((u=(v=l.viewer.scene.context)==null?void 0:v.uniformState)==null?void 0:u.sunDirectionWC)??new a.Cartesian3(1,0,0)},u_groundAlbedo:()=>new a.Cartesian3(0,0,0),u_renderSky:()=>l._renderSky?1:0,u_sunPixelAngle:()=>{const v=l.viewer.camera,u=l.viewer.scene.canvas&&l.viewer.scene.canvas.clientHeight||1080,h=(v.frustum&&v.frustum.fov)!=null?v.frustum.fov:Math.PI/3;return Math.max(h/u,1e-6)},transmittance_texture:()=>l.textures.transmittanceTexture,scattering_texture:()=>l.textures.scatteringTexture,single_mie_scattering_texture:()=>l.textures.singleMieScatteringTexture,irradiance_texture:()=>l.textures.irradianceTexture,SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:()=>{const v=l.atmosphereParams.sunRadianceToRelativeLuminance;return new a.Cartesian3(v[0],v[1],v[2])},SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:()=>{const v=l.atmosphereParams.skyRadianceToRelativeLuminance;return new a.Cartesian3(v[0],v[1],v[2])}};for(const[v,u]of Object.entries(T))Array.isArray(u)&&u.length===3&&u.every(Number.isFinite)?_[v]=new a.Cartesian3(u[0],u[1],u[2]):_[v]=u;const E=.001;_["ATMOSPHERE.bottom_radius"]=()=>l.atmosphereParams.bottomRadius*E,_["ATMOSPHERE.top_radius"]=()=>l.atmosphereParams.topRadius*E,_.u_atmosphereExposure=()=>l._getEffectiveAtmosphereExposure(),_.u_cloudShadowEnabled=()=>l._cloudShadowEnabled?1:0,_.u_cloudShadowScale=()=>l._cloudShadowTexScale??1,_.u_cloudShadowDecode=()=>l._cloudShadowDecode??new a.Cartesian4(1,1,1,1),_.u_cloudShadowBuffer=()=>l._cloudShadowBuffer??l.textures.transmittanceTexture,_.u_cloudShadowNear=()=>l._cloudShadowNear??.1,_.u_cloudShadowFar=()=>l._cloudShadowFar??2e5,_.u_cloudShadowTopHeight=()=>l._cloudShadowTopHeight??5e3,_.u_cloudShadowAltitudeFadeStart=()=>l._cloudShadowAltitudeFadeStart??l._cloudShadowTopHeight??5e3,_.u_cloudShadowAltitudeFadeEnd=()=>l._cloudShadowAltitudeFadeEnd??(l._cloudShadowTopHeight??5e3)+8e3,_.u_cloudShadowBottomRadius=()=>l._cloudShadowBottomRadius??l.atmosphereParams.bottomRadius,_.u_cloudShadowIntervals=()=>l._cloudShadowIntervals??[new a.Cartesian2(0,0),new a.Cartesian2(0,0),new a.Cartesian2(0,0),new a.Cartesian2(0,0)],_.u_cloudShadowMatrices=()=>l._cloudShadowMatrices??[a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone()],_.u_cloudShadowTexelSize=()=>l._cloudShadowTexelSize??new a.Cartesian2(1/512,1/512),_.u_cloudShadowPcfTaps=()=>Math.max(1,Math.min(16,Math.round(l._cloudShadowPcfTaps??16))),_.u_geometricErrorCorrectionAmount=()=>l._geometricErrorCorrectionAmount??0,_.u_shadowLengthEnabled=()=>l._shadowLengthEnabled&&l._shadowLengthTexture?1:0,_.u_shadowLengthScale=()=>l._shadowLengthScale??1,_.u_shadowLengthBuffer=()=>l._shadowLengthTexture??l.textures.transmittanceTexture,_.u_applyGroundAtmosphere=()=>l._applyGroundAtmosphere?1:0,_.u_debugTyndall=()=>l._debugTyndallMode??0,_.u_tyndallScale=()=>l._tyndallScale??1,_.u_bsmTyndallOpticalDepthScale=()=>l._bsmTyndallOpticalDepthScale??1,_.u_bsmGroundOpticalDepthScale=()=>l._bsmGroundOpticalDepthScale??1,this.stage=new a.PostProcessStage({name:"AtmosphereFromThreeGeospatial",fragmentShader:S,uniforms:_,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:p}),l._autoAddStage!==!1&&e.postProcessStages.add(this.stage),this.enableGui&&this._setupGUI()})(),this._ready}_setupGUI(){if(this._gui||!this.enableGui)return;const e=typeof window<"u"&&window.dat?window.dat:null;if(!(e!=null&&e.GUI))return;this._gui=new e.GUI({name:"大气参数"});const t=this._gui.addFolder("大气控制");t.add(this,"_exposureFollowTimeline").name("曝光随时间轴(太阳高度)"),t.add(this,"_exposureDay",0,5,.05).name("白天曝光"),t.add(this,"_exposureNight",0,2,.01).name("夜晚曝光"),t.add(this,"_exposureTwilightAngleDegrees",.5,18,.5).name("晨昏过渡半角(度)"),t.add(this,"_atmosphereExposure",0,30,.01).name("手动曝光(关时间轴时)"),t.add(this.atmosphereParams,"bottomRadius",63e5,64e5,10).name("bottom_radius (m)"),t.add(this.atmosphereParams,"topRadius",635e4,65e5,10).name("top_radius (m)");const r=this._gui.addFolder("丁达尔调试");r.add(this,"_tyndallScale",.5,6,.25).name("光柱强度 (scale)"),r.add(this,"_bsmTyndallOpticalDepthScale",.1,50,.1).name("BSM OD 缩放(光柱)"),r.add(this,"_bsmGroundOpticalDepthScale",.1,50,.1).name("BSM OD 缩放(地面)"),r.add(this,"_debugTyndallMode",{关闭:0,"1: shadowLength":1,"2: BSM启用(绿=是)":2,"3: BSM单点采样":3,"4: BSM纹理直显(B)":4,"5: transmittance诊断":5,"6: BSM纹理直显(R)":6,"7: BSM纹理直显(G)":7,"8: BSM纹理直显(A)":8}).name("调试模式"),r.open(),t.open()}setCloudShadow(e){if(this._cloudShadowEnabled=e.enabled??!1,this._cloudShadowBuffer=e.texture??null,e.scale!==void 0&&(this._cloudShadowTexScale=e.scale),e.decode){const t=e.decode;this._cloudShadowDecode=new De.Cartesian4(t.x??1,t.y??1,t.z??1,t.w??1)}if(this._cloudShadowNear=e.near??this._cloudShadowNear??.1,this._cloudShadowFar=e.far??2e5,this._cloudShadowTopHeight=e.topHeight??5e3,this._cloudShadowAltitudeFadeStart=e.altitudeFadeStart??this._cloudShadowTopHeight,this._cloudShadowAltitudeFadeEnd=e.altitudeFadeEnd??this._cloudShadowTopHeight+8e3,this._cloudShadowBottomRadius=e.bottomRadius??this.atmosphereParams.bottomRadius,this._cloudShadowIntervals=e.intervals??null,this._cloudShadowMatrices=e.matrices??null,e.texelSize){const t=e.texelSize;this._cloudShadowTexelSize=new De.Cartesian2(t.x??t[0]??1/512,t.y??t[1]??1/512)}e.geometricErrorCorrectionAmount!==void 0&&(this._geometricErrorCorrectionAmount=e.geometricErrorCorrectionAmount),e.pcfTaps!==void 0&&(this._cloudShadowPcfTaps=e.pcfTaps)}setCloudShadowLength(e){this._shadowLengthEnabled=e.enabled??!1,this._shadowLengthTexture=e.texture??null,e.scale!==void 0&&(this._shadowLengthScale=e.scale)}getAtmosphereForClouds(){if(!this.textures)throw new Error("AtmospherePostProcess.getAtmosphereForClouds() 需在 init() 完成后再调用");const e=window.Cesium,t=this,r=Ie(this.atmosphereParams.toUniform()),a={};for(const[i,s]of Object.entries(r))Array.isArray(s)&&s.length===3&&s.every(Number.isFinite)?a[i]=new e.Cartesian3(s[0],s[1],s[2]):a[i]=s;a.SUN_SPECTRAL_RADIANCE_TO_LUMINANCE=(()=>{const i=this.atmosphereParams.sunRadianceToRelativeLuminance;return new e.Cartesian3(i[0],i[1],i[2])})(),a.SKY_SPECTRAL_RADIANCE_TO_LUMINANCE=(()=>{const i=this.atmosphereParams.skyRadianceToRelativeLuminance;return new e.Cartesian3(i[0],i[1],i[2])})(),a.altitudeCorrection=new e.Cartesian3(0,0,0),a.worldToECEFMatrix=e.Matrix4.IDENTITY,a.ecefToWorldMatrix=e.Matrix4.IDENTITY;const n=.001;a["ATMOSPHERE.bottom_radius"]=()=>t.atmosphereParams.bottomRadius*n,a["ATMOSPHERE.top_radius"]=()=>t.atmosphereParams.topRadius*n;function o(){return{...a,bottomRadius:()=>t.atmosphereParams.bottomRadius,topRadius:()=>t.atmosphereParams.topRadius,atmosphereExposure:()=>t._getEffectiveAtmosphereExposure(),transmittance_texture:()=>t.textures.transmittanceTexture,scattering_texture:()=>t.textures.scatteringTexture,irradiance_texture:()=>t.textures.irradianceTexture,single_mie_scattering_texture:()=>t.textures.scatteringTexture,higher_order_scattering_texture:()=>null,sunDirection:()=>{var i,s;return((s=(i=t.viewer.scene.context)==null?void 0:i.uniformState)==null?void 0:s.sunDirectionWC)??new e.Cartesian3(1,0,0)},cameraPosition:()=>{const i=t.viewer.camera.positionWC;return new e.Cartesian3(i.x,i.y,i.z)}}}return{textures:{transmittanceTexture:this.textures.transmittanceTexture,scatteringTexture:this.textures.scatteringTexture,irradianceTexture:this.textures.irradianceTexture,singleMieScatteringTexture:this.textures.scatteringTexture,higherOrderScatteringTexture:null},getCloudShadowTargetTexture:()=>t._cloudShadowCesiumTexture??null,getCloudShadowScale:()=>t._cloudShadowTexScale??1,getCloudShadowClamp01:()=>t._cloudShadowTexClamp01??!0,getUniforms:o,setCloudShadow:i=>t.setCloudShadow(i),setCloudShadowLength:i=>t.setCloudShadowLength(i),setDebugTyndall:i=>{t._debugTyndallMode=i?1:0},setDebugTyndallMode:i=>{t._debugTyndallMode=i},atmosphereParams:this.atmosphereParams,constants:{METER_TO_LENGTH_UNIT:.001,precomputeConstants:de,getShaderDefines:()=>`#define COMBINED_SCATTERING_TEXTURES
`+je()}}}destroy(){this.stage&&this.viewer.scene.postProcessStages&&(this.viewer.scene.postProcessStages.remove(this.stage),this.stage=null),this.viewer.scene.skyAtmosphere&&(this.viewer.scene.skyAtmosphere.show=!0),this._gui&&(this._gui.destroy(),this._gui=null),this._cloudShadowCesiumTexture&&(this._cloudShadowCesiumTexture.destroy(),this._cloudShadowCesiumTexture=null),this._cloudShadowDummyArray=null,this.textures=null,this._ready=null}}le();const rt="./src/AtmosphereFromThreeGeospatial/assets/";class it{constructor(e,t={}){this.viewer=e,this.assetsBaseUrl=t.assetsBaseUrl??rt,this.shaderBaseUrl=t.shaderBaseUrl??"./src/AtmosphereFromThreeGeospatial/Shaders/",this.atmosphereParams=t.atmosphereParams??new he,this.stage=null,this.textures=null,this._ready=null,this._cloudShadowEnabled=!1,this._cloudShadowBuffer=null,this._cloudShadowDecode=null,this._cloudShadowNear=.1,this._cloudShadowFar=2e5,this._cloudShadowTopHeight=5e3,this._cloudShadowAltitudeFadeStart=5e3,this._cloudShadowAltitudeFadeEnd=13e3,this._cloudShadowBottomRadius=this.atmosphereParams.bottomRadius,this._cloudShadowIntervals=null,this._cloudShadowMatrices=null,this._cloudShadowTexScale=1,this._cloudShadowTexClamp01=!0,this._cloudShadowCesiumTexture=null,this._cloudShadowDummyArray=null,this._cloudShadowTexelSize=null,this._geometricErrorCorrectionAmount=0,this._cloudShadowPcfTaps=16,this._cloudShadowLengthEnabled=!1,this._cloudShadowLengthTexture=null,this._cloudShadowLengthScale=1,this._debugTyndallMode=0,this._tyndallScale=2.5,this._bsmTyndallOpticalDepthScale=1,this._bsmGroundOpticalDepthScale=1,this._aerialPerspectiveScale=0,this._logCameraAltitude=t.logCameraAltitude??!1,this._logCameraPositionEpsilonMeters=t.logCameraPositionEpsilonMeters??.05,this._logCameraDirectionEpsilon=t.logCameraDirectionEpsilon??1e-5,this._cameraAltitudePostRenderHandler=null,this._cameraAltitudeLogStateInitialized=!1,this._lastCameraPosForAltitudeLog=null,this._lastCameraDirForAltitudeLog=null,this._scratchCartographic=null,this._autoAddStage=t.autoAddStage??!0}_getAltitudeCorrectionOffsetKm(e){var d,f,p,S,l;const t=window.Cesium;if(!t)return{x:0,y:0,z:0};const r=(p=(f=(d=this.viewer)==null?void 0:d.scene)==null?void 0:f.globe)==null?void 0:p.ellipsoid,a=(l=(S=this.viewer)==null?void 0:S.camera)==null?void 0:l.positionWC;if(!r||!a)return new t.Cartesian3(0,0,0);const n=t.Cartographic.fromCartesian(a,r);if(!n)return new t.Cartesian3(0,0,0);const o=t.Cartesian3.fromRadians(n.longitude,n.latitude,0,r),i=r.geodeticSurfaceNormal(o,new t.Cartesian3),s=t.Cartesian3.subtract(o,t.Cartesian3.multiplyByScalar(i,Number(e)||0,new t.Cartesian3),new t.Cartesian3),c=t.Cartesian3.negate(s,new t.Cartesian3);return new t.Cartesian3(c.x*.001,c.y*.001,c.z*.001)}async init(){if(this._ready)return this._ready;const e=this.viewer.scene,t=e.context;if(!(t._gl instanceof WebGL2RenderingContext))throw new Error("AerialPerspectiveEffect 需要 WebGL2（用于 3D 散射纹理）。");const a=window.Cesium;if(!a)throw new Error("需要全局 Cesium。");return this._ready=(async()=>{var C;this.textures=await Pe(this.assetsBaseUrl,t,a);const n=1024,o=!!t.halfFloatingPointTexture&&!!t.colorBufferHalfFloat,i=o?a.PixelDatatype.HALF_FLOAT:a.PixelDatatype.UNSIGNED_BYTE;this._cloudShadowCesiumTexture=new a.Texture({context:t,width:n,height:n,pixelFormat:a.PixelFormat.RGBA,pixelDatatype:i,sampler:new a.Sampler({minificationFilter:a.TextureMinificationFilter.LINEAR,magnificationFilter:a.TextureMagnificationFilter.LINEAR,wrapS:a.TextureWrap.CLAMP_TO_EDGE,wrapT:a.TextureWrap.CLAMP_TO_EDGE})}),this._cloudShadowTexScale=o?1:.02,this._cloudShadowTexClamp01=!o,this._cloudShadowDummyArray=null;const s={shaderBaseUrl:this.shaderBaseUrl},[c,d,f,p]=await Promise.all([$("bruneton/definitions.glsl",s),$("bruneton/common.glsl",s),$("bruneton/runtime.glsl",s),$("aerialPerspectiveEffect.frag",s)]),S=de,l=`
precision highp float;
precision highp sampler2D;
precision highp sampler3D;
`,T=["#define COMBINED_SCATTERING_TEXTURES",`#define SCATTERING_TEXTURE_R_SIZE ${S.SCATTERING_TEXTURE_R_SIZE}`,`#define SCATTERING_TEXTURE_MU_SIZE ${S.SCATTERING_TEXTURE_MU_SIZE}`,`#define SCATTERING_TEXTURE_MU_S_SIZE ${S.SCATTERING_TEXTURE_MU_S_SIZE}`,`#define SCATTERING_TEXTURE_NU_SIZE ${S.SCATTERING_TEXTURE_NU_SIZE}`,`#define TRANSMITTANCE_TEXTURE_WIDTH ${S.TRANSMITTANCE_TEXTURE_WIDTH}`,`#define TRANSMITTANCE_TEXTURE_HEIGHT ${S.TRANSMITTANCE_TEXTURE_HEIGHT}`,`#define IRRADIANCE_TEXTURE_WIDTH ${S.IRRADIANCE_TEXTURE_WIDTH}`,`#define IRRADIANCE_TEXTURE_HEIGHT ${S.IRRADIANCE_TEXTURE_HEIGHT}`].join(`
`),E=l+T+`
`+c+`
`+d+`
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
`+p,v=$e(this.atmosphereParams.toUniform()),u=this,h={u_cameraPosition:()=>{const g=u.viewer.camera.positionWC;return new a.Cartesian3(g.x*.001,g.y*.001,g.z*.001)},u_altitudeCorrection:()=>u._getAltitudeCorrectionOffsetKm(u.atmosphereParams.bottomRadius),u_sunDirection:()=>{var g,A;return((A=(g=u.viewer.scene.context)==null?void 0:g.uniformState)==null?void 0:A.sunDirectionWC)??new a.Cartesian3(1,0,0)},u_sunPixelAngle:()=>{const g=u.viewer.camera,A=u.viewer.scene.canvas&&u.viewer.scene.canvas.clientHeight||1080,I=g.frustum&&g.frustum.fov!=null?g.frustum.fov:Math.PI/3;return Math.max(I/A,1e-6)},transmittance_texture:()=>u.textures.transmittanceTexture,scattering_texture:()=>u.textures.scatteringTexture,single_mie_scattering_texture:()=>u.textures.singleMieScatteringTexture,higher_order_scattering_texture:()=>u.textures.higherOrderScatteringTexture,SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:()=>{const g=u.atmosphereParams.sunRadianceToRelativeLuminance;return new a.Cartesian3(g[0],g[1],g[2])},SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:()=>{const g=u.atmosphereParams.skyRadianceToRelativeLuminance;return new a.Cartesian3(g[0],g[1],g[2])}};for(const[g,A]of Object.entries(v))Array.isArray(A)&&A.length===3&&A.every(Number.isFinite)?h[g]=new a.Cartesian3(A[0],A[1],A[2]):h[g]=A;const R=.001;if(h["ATMOSPHERE.bottom_radius"]=()=>u.atmosphereParams.bottomRadius*R,h["ATMOSPHERE.top_radius"]=()=>u.atmosphereParams.topRadius*R,h.u_atmosphereExposure=()=>{var g;return((g=u.viewer.scene.postProcessStages.getStageByName("AtmosphereFromThreeGeospatial"))==null?void 0:g._atmosphereExposure)??1.5},h.u_cloudShadowEnabled=()=>u._cloudShadowEnabled?1:0,h.u_cloudShadowScale=()=>u._cloudShadowTexScale??1,h.u_cloudShadowDecode=()=>u._cloudShadowDecode??new a.Cartesian4(1,1,1,1),h.u_cloudShadowBuffer=()=>u._cloudShadowBuffer??u.textures.transmittanceTexture,h.u_cloudShadowNear=()=>u._cloudShadowNear??.1,h.u_cloudShadowFar=()=>u._cloudShadowFar??2e5,h.u_cloudShadowTopHeight=()=>u._cloudShadowTopHeight??5e3,h.u_cloudShadowAltitudeFadeStart=()=>u._cloudShadowAltitudeFadeStart??u._cloudShadowTopHeight??5e3,h.u_cloudShadowAltitudeFadeEnd=()=>u._cloudShadowAltitudeFadeEnd??(u._cloudShadowTopHeight??5e3)+8e3,h.u_cloudShadowBottomRadius=()=>u._cloudShadowBottomRadius??u.atmosphereParams.bottomRadius,h.u_cloudShadowIntervals=()=>u._cloudShadowIntervals??[new a.Cartesian2(0,0),new a.Cartesian2(0,0),new a.Cartesian2(0,0),new a.Cartesian2(0,0)],h.u_cloudShadowMatrices=()=>u._cloudShadowMatrices??[a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone(),a.Matrix4.IDENTITY.clone()],h.u_cloudShadowTexelSize=()=>u._cloudShadowTexelSize??new a.Cartesian2(1/512,1/512),h.u_geometricErrorCorrectionAmount=()=>u._geometricErrorCorrectionAmount??0,h.u_cloudShadowPcfTaps=()=>Math.max(1,Math.min(16,Math.round(u._cloudShadowPcfTaps??16))),h.u_cloudShadowLengthEnabled=()=>u._cloudShadowLengthEnabled?1:0,h.u_cloudShadowLengthScale=()=>u._cloudShadowLengthScale??1,h.u_cloudShadowLengthTexture=()=>u._cloudShadowLengthTexture??u.textures.transmittanceTexture,h.u_debugTyndall=()=>u._debugTyndallMode??0,h.u_tyndallScale=()=>u._tyndallScale??1,h.u_bsmTyndallOpticalDepthScale=()=>u._bsmTyndallOpticalDepthScale??1,h.u_bsmGroundOpticalDepthScale=()=>u._bsmGroundOpticalDepthScale??1,h.u_aerialPerspectiveScale=()=>u._aerialPerspectiveScale??0,this.stage=new a.PostProcessStage({name:"AerialPerspectiveEffect",fragmentShader:E,uniforms:h}),u._autoAddStage!==!1&&e.postProcessStages.add(this.stage),u._logCameraAltitude){const g=((C=u.viewer.scene.globe)==null?void 0:C.ellipsoid)??a.Ellipsoid.WGS84;u._scratchCartographic=new a.Cartographic,u._lastCameraPosForAltitudeLog=new a.Cartesian3,u._lastCameraDirForAltitudeLog=new a.Cartesian3,u._cameraAltitudePostRenderHandler=function(){const A=u.viewer.camera,I=A.positionWC,P=A.directionWC,O=u._logCameraPositionEpsilonMeters,L=u._logCameraDirectionEpsilon;if(u._cameraAltitudeLogStateInitialized){const G=a.Cartesian3.distance(I,u._lastCameraPosForAltitudeLog),D=a.Cartesian3.dot(P,u._lastCameraDirForAltitudeLog);if(G<O&&1-D<L)return}u._cameraAltitudeLogStateInitialized=!0,a.Cartesian3.clone(I,u._lastCameraPosForAltitudeLog),a.Cartesian3.clone(P,u._lastCameraDirForAltitudeLog),a.Cartographic.fromCartesian(I,g,u._scratchCartographic);const F=u._scratchCartographic,x=F.height,w=a.Math.toDegrees(F.longitude),H=a.Math.toDegrees(F.latitude),W=a.Cartesian3.magnitude(I)*.001},u.viewer.scene.postRender.addEventListener(u._cameraAltitudePostRenderHandler)}})(),this._ready}setCloudShadow(e){const t=window.Cesium;if(this._cloudShadowEnabled=e.enabled??!1,this._cloudShadowBuffer=e.texture??null,e.scale!==void 0&&(this._cloudShadowTexScale=e.scale),e.decode){const r=e.decode;this._cloudShadowDecode=new t.Cartesian4(r.x??1,r.y??1,r.z??1,r.w??1)}this._cloudShadowNear=e.near??this._cloudShadowNear??.1,this._cloudShadowFar=e.far??2e5,this._cloudShadowTopHeight=e.topHeight??5e3,this._cloudShadowAltitudeFadeStart=e.altitudeFadeStart??this._cloudShadowTopHeight,this._cloudShadowAltitudeFadeEnd=e.altitudeFadeEnd??this._cloudShadowTopHeight+8e3,this._cloudShadowBottomRadius=e.bottomRadius??this.atmosphereParams.bottomRadius,this._cloudShadowIntervals=e.intervals??null,this._cloudShadowMatrices=e.matrices??null,e.texelSize&&(this._cloudShadowTexelSize=new t.Cartesian2(e.texelSize.x??e.texelSize[0]??1/512,e.texelSize.y??e.texelSize[1]??1/512)),e.geometricErrorCorrectionAmount!==void 0&&(this._geometricErrorCorrectionAmount=e.geometricErrorCorrectionAmount),e.pcfTaps!==void 0&&(this._cloudShadowPcfTaps=e.pcfTaps)}setCloudShadowLength(e){this._cloudShadowLengthEnabled=e.enabled??!1,this._cloudShadowLengthTexture=e.texture??null,e.scale!==void 0&&(this._cloudShadowLengthScale=e.scale)}getCameraAltitudeMeters(){var a,n,o;const e=window.Cesium;if(!e||!((n=(a=this.viewer)==null?void 0:a.camera)!=null&&n.positionWC))return NaN;const t=((o=this.viewer.scene.globe)==null?void 0:o.ellipsoid)??e.Ellipsoid.WGS84,r=new e.Cartographic;return e.Cartographic.fromCartesian(this.viewer.camera.positionWC,t,r),r.height}destroy(){var t;const e=(t=this.viewer)==null?void 0:t.scene;this._cameraAltitudePostRenderHandler&&e&&(e.postRender.removeEventListener(this._cameraAltitudePostRenderHandler),this._cameraAltitudePostRenderHandler=null),this._cameraAltitudeLogStateInitialized=!1,this._lastCameraPosForAltitudeLog=null,this._lastCameraDirForAltitudeLog=null,this._scratchCartographic=null,this.stage&&e&&e.postProcessStages&&e.postProcessStages.remove(this.stage),this.stage=null,this.textures=null,this._ready=null,this._cloudShadowCesiumTexture&&(this._cloudShadowCesiumTexture.destroy(),this._cloudShadowCesiumTexture=null)}}const nt=m=>new Uint8Array(m);function ot(m,e,t,r){const a=new Ve;a.setResponseType("arraybuffer"),a.load(m,e,t,r)}function st(m,e,t,r,a){ot(m,n=>{try{t(e(n))}catch(o){a&&a(o)}},r,a)}function ct(m,e){return new Promise((t,r)=>{const a=new ke,n={width:e,height:e,depth:e,format:Ye,minFilter:Ae,magFilter:Ae,wrapS:Te,wrapT:Te,wrapR:Te,colorSpace:Xe};st(m,nt,o=>{a.image.data=o,a.image.width=n.width,a.image.height=n.height,a.image.depth=n.depth,a.format=n.format,a.minFilter=n.minFilter,a.magFilter=n.magFilter,a.wrapS=n.wrapS,a.wrapT=n.wrapT,a.wrapR=n.wrapR,a.colorSpace=n.colorSpace,a.needsUpdate=!0,t(a)},void 0,r)})}function ut(m,e,t){const r=e.image.data,a=e.image.width,n=e.image.height,o=e.image.depth;return new t.Texture3D({context:m.scene.context,width:a,height:n,depth:o,pixelFormat:t.PixelFormat.RED,pixelDatatype:t.PixelDatatype.UNSIGNED_BYTE,flipY:!1,source:{arrayBufferView:r,width:a,height:n,depth:o},sampler:new t.Sampler({minificationFilter:t.TextureMinificationFilter.LINEAR,magnificationFilter:t.TextureMagnificationFilter.LINEAR,wrapS:t.TextureWrap.REPEAT,wrapT:t.TextureWrap.REPEAT,wrapR:t.TextureWrap.REPEAT})})}function lt(m){const e=Number(m.SHADOW_RAY_FAR)||5e5,t=Math.min(Number(m.maxSteps)||500,512),r=Number(m.minStepSize)||50,a=Number(m.maxStepSize)||1e3;return`#version 300 es
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
// V3.4.12：世界锚定噪声偏移（snap 后 cascade 中心的 texel 计数 mod 256）。
// 使噪声相位随纹理网格贴住世界，snap 跳变时 BSM 内容不再整场重噪。
uniform vec2 u_jitterOffset;
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

float getBlueNoise() { return texture(u_blueNoise, (gl_FragCoord.xy + u_jitterOffset) / 256.0).r; }

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
    if (any(greaterThan(u_shapeDetailAmounts, vec4(0.0))) && (mipLevel * 0.5 + (jitter - 0.5) * 0.5 < 0.5)) {
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
`}const N=le(),dt=1024,Ne=5e5,z=4;class ht{constructor(e,t={}){this.viewer=e,this.size=t.size??dt,this.textures=t.textures||{},this.params=t.params||{},this.updateInterval=Math.max(1,Number(t.updateInterval??this.params.bsmUpdateInterval)||1),this.enabled=t.enabled!==!1,this.autoRender=t.autoRender!==!1,this._renderFrame=0,this._hasRendered=!1,this._gl=null,this._fbo=null,this._colorTexture=null,this._colorTextureWrite=null,this._depthVelocityTexture=null,this._cesiumColorTextureRead=null,this._cesiumColorTextureWrite=null,this._cesiumDepthTexture=null,this._colorTextureHandle=null,this._depthVelocityTextureHandle=null,this._hasValidColorTexture=!1,this._lastRenderedFrame=-1,this._updatedThisFrame=!1,this._prevCamPos=null,this._prevCamDir=null,this._lastMotion=1,this._program=null,this._vao=null,this._colorTextureTarget=null,this._tileSize=Math.floor(this.size/2),this._shadowNear=.1,this._shadowFar=0,this._shadowIntervals=Array.from({length:z},()=>new Float32Array([0,0])),this._shadowMatrices=Array.from({length:z},()=>new Float32Array(16)),this._publishedShadowIntervals=Array.from({length:z},()=>new Float32Array([0,0])),this._publishedShadowMatrices=Array.from({length:z},()=>new Float32Array(16)),this._publishedShadowNear=.1,this._publishedShadowFar=0,this._hasPublishedShadowState=!1,this._inverseShadowMatrices=Array.from({length:z},()=>new Float32Array(16)),this._jitterOffsets=Array.from({length:z},()=>new Float32Array(2)),this._cascadeSignature="",this._renderedSignature=null,this._paramsRev=1,this._renderedParamsRev=-1,this._framesSinceRender=Number.MAX_SAFE_INTEGER,this._prevShadowMatrices=Array.from({length:z},()=>{const r=new Float32Array(16);return r[0]=r[5]=r[10]=r[15]=1,r}),this._sunDirection=[1,0,0],this._preRenderListener=null}updateDynamicParams(e){const t=this.params;let r=!1;const a=(o,i)=>{i!==void 0&&t[o]!==i&&(t[o]=i,r=!0)},n=(o,i)=>{if(i==null)return;const s=t[o];if(!Array.isArray(s)||s===i||s.length!==i.length){t[o]=Array.prototype.slice.call(i),r=!0;return}for(let c=0;c<i.length;c++)if(s[c]!==i[c]){for(let d=0;d<i.length;d++)s[d]=i[d];r=!0;return}};e.localWeatherOffset&&(t.localWeatherOffset=e.localWeatherOffset),e.shapeOffset&&(t.shapeOffset=e.shapeOffset),e.shapeDetailOffset&&(t.shapeDetailOffset=e.shapeDetailOffset),e.windSpeed!==void 0&&(t.windSpeed=e.windSpeed),e.evolutionSpeed!==void 0&&(t.evolutionSpeed=e.evolutionSpeed),e.clockElapsedSeconds!==void 0&&(t.clockElapsedSeconds=e.clockElapsedSeconds),a("bottomRadius",e.bottomRadius),a("shadowBottomHeight",e.shadowBottomHeight),a("shadowTopHeight",e.shadowTopHeight),a("debugShadow",e.debugShadow),a("shadowFar",e.shadowFar),a("maxShadowLengthRayDistance",e.maxShadowLengthRayDistance),a("shadowSplitLambda",e.shadowSplitLambda),a("shadowFadeScale",e.shadowFadeScale),n("coverages",e.coverages),n("densityScales",e.densityScales),n("shapeAmounts",e.shapeAmounts),n("shapeDetailAmounts",e.shapeDetailAmounts),n("weatherExponents",e.weatherExponents),n("shapeAlteringBiases",e.shapeAlteringBiases),n("coverageFilterWidths",e.coverageFilterWidths),a("scatteringCoefficient",e.scatteringCoefficient),a("absorptionCoefficient",e.absorptionCoefficient),n("minLayerHeights",e.minLayerHeights),n("maxLayerHeights",e.maxLayerHeights),n("minIntervalHeights",e.minIntervalHeights),n("maxIntervalHeights",e.maxIntervalHeights),n("densityProfileLinear",e.densityProfileLinear),n("densityProfileConstant",e.densityProfileConstant),n("densityProfileExpTerms",e.densityProfileExpTerms),n("densityProfileExponents",e.densityProfileExponents),r&&this._paramsRev++}createRT(){const e=this.viewer.scene.context,t=e._gl;if(!t)return;this._cesiumColorTextureRead&&this._cesiumColorTextureRead.destroy(),this._cesiumColorTextureWrite&&this._cesiumColorTextureWrite.destroy(),this._cesiumDepthTexture&&this._cesiumDepthTexture.destroy(),this._fbo&&(t.deleteFramebuffer(this._fbo),this._fbo=null);const r=n=>({context:e,width:this.size,height:this.size,pixelFormat:N.PixelFormat.RGBA,pixelDatatype:n,sampler:new N.Sampler({minificationFilter:N.TextureMinificationFilter.LINEAR,magnificationFilter:N.TextureMagnificationFilter.LINEAR,wrapS:N.TextureWrap.CLAMP_TO_EDGE,wrapT:N.TextureWrap.CLAMP_TO_EDGE})});try{const n=r(N.PixelDatatype.HALF_FLOAT);this._cesiumColorTextureRead=new N.Texture(n),this._cesiumColorTextureWrite=new N.Texture(n),this._cesiumDepthTexture=new N.Texture(n),this._useFloatRT=!0}catch{const o=r(N.PixelDatatype.UNSIGNED_BYTE);this._cesiumColorTextureRead=new N.Texture(o),this._cesiumColorTextureWrite=new N.Texture(o),this._cesiumDepthTexture=new N.Texture(o),this._useFloatRT=!1}this._colorTexture=this._cesiumColorTextureRead,this._colorTextureWrite=this._cesiumColorTextureWrite,this._depthVelocityTexture=this._cesiumDepthTexture,this._colorTextureHandle=this._cesiumColorTextureWrite._texture,this._depthVelocityTextureHandle=this._cesiumDepthTexture._texture,this._colorTextureTarget=this._cesiumColorTextureWrite._target,this._hasValidColorTexture=!1;const a=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,a),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this._colorTextureHandle,0),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT1,t.TEXTURE_2D,this._depthVelocityTextureHandle,0),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),this._fboComplete=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE,this._fboComplete,t.bindFramebuffer(t.FRAMEBUFFER,null),this._fbo=a}updateShadowCascades(){const e=this.viewer.scene,t=e.camera,r=e.context&&e.context.uniformState,a=r&&(r.sunDirectionWC||r._sunDirectionWC)||null,n=b=>!!b&&Number.isFinite(b.x)&&Number.isFinite(b.y)&&Number.isFinite(b.z)&&b.x*b.x+b.y*b.y+b.z*b.z>1e-12;let o=null;n(a)?o=a:n(t.positionWC)?o=t.positionWC:n(t.directionWC)?o=t.directionWC:o=new N.Cartesian3(1,0,0);const i=N.Cartesian3.normalize(o,new N.Cartesian3);this._sunDirection=[i.x,i.y,i.z];const s=t.frustum,c=Number(s==null?void 0:s.near)||.1,d=Number(s==null?void 0:s.far)||Number(this.params.maxShadowLengthRayDistance)||Ne,f=Number(this.params.shadowFar)||Number(this.params.maxShadowLengthRayDistance)||d;let p=Math.min(d,f);(!Number.isFinite(p)||p<=c+.001)&&(p=c+1),this._shadowNear=c,this._shadowFar=p;const S=Number(this.params.shadowSplitLambda),l=Number.isFinite(S)?S:.5,T=new Array(z),_=Math.max(p-c,1e-6);for(let b=0;b<z;b++){const k=(b+1)/z,j=c+(p-c)*k,K=c*Math.pow(p/c,k),Y=j+(K-j)*l;T[b]=(Y-c)/_}let E=!0,v=0;for(let b=0;b<z;b++){const k=T[b];if(!Number.isFinite(k)||k<=v||k<=0||k>1){E=!1;break}v=k}E||(T[0]=.25,T[1]=.5,T[2]=.75,T[3]=1);for(let b=0;b<z;b++){const k=T[b-1]??0,j=T[b]??0;this._shadowIntervals[b][0]=k,this._shadowIntervals[b][1]=j}try{window.__bsmShadowIntervals=this._shadowIntervals.map(b=>[b[0],b[1]]),window.__bsmShadowFar=this._shadowFar}catch{}const u=Math.abs(i.z)>.99?[0,1,0]:[0,0,1];this._shadowUpAxis=u;const h=this._lookAt([0,0,0],[-i.x,-i.y,-i.z],u),R=new Float32Array(16);this._invert(R,h);const C=N.Matrix4.clone(t.inverseViewMatrix,new N.Matrix4),g=new Float32Array(16);N.Matrix4.toArray(C,g);const A=new Float32Array(16);this._multiply(A,h,g);const I=Number(s==null?void 0:s.fovy)||Math.PI/3,P=Number(s==null?void 0:s.aspectRatio)||e.canvas.clientWidth/Math.max(1,e.canvas.clientHeight),O=Math.tan(I*.5),L=O*c,F=L*P,x=O*p,w=x*P,H=[[F,L,-c,1],[F,-L,-c,1],[-F,-L,-c,1],[-F,L,-c,1]],W=[[w,x,-p,1],[w,-x,-p,1],[-w,-x,-p,1],[-w,x,-p,1]],G=Number(this.params.shadowCascadeMargin)||0,D={width:this._tileSize,height:this._tileSize},V=((Number(this.params.bottomRadius)||6371e3)+(Number(this.params.cloudBottomHeight)||3e3)+(Number(this.params.cloudTopHeight)||1500))*3,q=[Math.round(i.x*5e3),Math.round(i.y*5e3),Math.round(i.z*5e3)];for(let b=0;b<z;b++){const k=T[b-1]??0,j=T[b],K=b===0?H:H.map((ie,J)=>this._lerp4(H[J],W[J],k)),Y=b===z-1?W:H.map((ie,J)=>this._lerp4(H[J],W[J],j)),te=this._dist3(Y[0],Y[2]),me=this._dist3(Y[0],K[2]);let Z=Math.max(te,me);const ne=Number(this.params.shadowFadeScale),y=Number.isFinite(ne)?ne:1,ae=Math.abs(Y[0][2]),re=p-c>1e-6?ae/(p-c):0;Z+=y*.25*re*re*(p-c);const U=.5*Z,oe=-U,xe=U,Ee=U,we=-U,He=this._ortho(oe,xe,we,Ee,-G,U*2+G),Q={min:[1e30,1e30,1e30],max:[-1e30,-1e30,-1e30]};for(let ie=0;ie<4;ie++){const J=this._mulMat4Vec4(A,K[ie]),We=this._mulMat4Vec4(A,Y[ie]);this._expandBBox(Q,J),this._expandBBox(Q,We)}const se=[(Q.min[0]+Q.max[0])*.5,(Q.min[1]+Q.max[1])*.5,Q.max[2]+G,1],be=(xe-oe)/D.width,ye=(Ee-we)/D.height,fe=Math.round(se[0]/be),Se=Math.round(se[1]/ye);se[0]=fe*be,se[1]=Se*ye,this._jitterOffsets[b][0]=(fe%256+256)%256,this._jitterOffsets[b][1]=(Se%256+256)%256,q.push(fe,Se,Math.round(U));const ge=this._mulMat4Vec4(R,se),_e=[ge[0],ge[1],ge[2]],Be=[_e[0]+i.x*V,_e[1]+i.y*V,_e[2]+i.z*V],Ge=this._lookAt(Be,_e,u),Re=this._shadowMatrices[b],ze=this._inverseShadowMatrices[b];this._multiply(Re,He,Ge),this._invert(ze,Re)}this._cascadeSignature=q.join(",")}_getAltitudeCorrectionOffset(e){var c,d,f,p,S;const t=(f=(d=(c=this.viewer)==null?void 0:c.scene)==null?void 0:d.globe)==null?void 0:f.ellipsoid,r=(S=(p=this.viewer)==null?void 0:p.camera)==null?void 0:S.positionWC;if(!t||!r)return[0,0,0];const a=N.Cartographic.fromCartesian(r,t);if(!a)return[0,0,0];const n=N.Cartesian3.fromRadians(a.longitude,a.latitude,0,t),o=t.geodeticSurfaceNormal(n,new N.Cartesian3),i=N.Cartesian3.subtract(n,N.Cartesian3.multiplyByScalar(o,Number(e)||0,new N.Cartesian3),new N.Cartesian3),s=N.Cartesian3.negate(i,new N.Cartesian3);return[s.x,s.y,s.z]}_lerp4(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r,1]}_dist3(e,t){const r=e[0]-t[0],a=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(r*r+a*a+n*n)}_mulMat4Vec4(e,t){const r=t[0],a=t[1],n=t[2],o=t[3]??1;return[e[0]*r+e[4]*a+e[8]*n+e[12]*o,e[1]*r+e[5]*a+e[9]*n+e[13]*o,e[2]*r+e[6]*a+e[10]*n+e[14]*o,e[3]*r+e[7]*a+e[11]*n+e[15]*o]}_expandBBox(e,t){const r=t[0],a=t[1],n=t[2];e.min[0]=Math.min(e.min[0],r),e.min[1]=Math.min(e.min[1],a),e.min[2]=Math.min(e.min[2],n),e.max[0]=Math.max(e.max[0],r),e.max[1]=Math.max(e.max[1],a),e.max[2]=Math.max(e.max[2],n)}_lookAt(e,t,r){const a=new Float32Array(16),n=e[0],o=e[1],i=e[2],s=r[0],c=r[1],d=r[2],f=t[0],p=t[1],S=t[2];if(Math.abs(n-f)<1e-6&&Math.abs(o-p)<1e-6&&Math.abs(i-S)<1e-6)return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a;let l=n-f,T=o-p,_=i-S,E=1/Math.sqrt(l*l+T*T+_*_);l*=E,T*=E,_*=E;let v=c*_-d*T,u=d*l-s*_,h=s*T-c*l;E=Math.sqrt(v*v+u*u+h*h),E>0&&(E=1/E,v*=E,u*=E,h*=E);const R=T*h-_*u,C=_*v-l*h,g=l*u-T*v;return a[0]=v,a[1]=R,a[2]=l,a[3]=0,a[4]=u,a[5]=C,a[6]=T,a[7]=0,a[8]=h,a[9]=g,a[10]=_,a[11]=0,a[12]=-(v*n+u*o+h*i),a[13]=-(R*n+C*o+g*i),a[14]=-(l*n+T*o+_*i),a[15]=1,a}_ortho(e,t,r,a,n,o){const i=new Float32Array(16),s=1/(e-t),c=1/(r-a),d=1/(n-o);return i[0]=-2*s,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=-2*c,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2*d,i[11]=0,i[12]=(e+t)*s,i[13]=(a+r)*c,i[14]=(o+n)*d,i[15]=1,i}_multiply(e,t,r){const a=t[0],n=t[1],o=t[2],i=t[3],s=t[4],c=t[5],d=t[6],f=t[7],p=t[8],S=t[9],l=t[10],T=t[11],_=t[12],E=t[13],v=t[14],u=t[15],h=r[0],R=r[1],C=r[2],g=r[3],A=r[4],I=r[5],P=r[6],O=r[7],L=r[8],F=r[9],x=r[10],w=r[11],H=r[12],W=r[13],G=r[14],D=r[15];e[0]=a*h+s*R+p*C+_*g,e[1]=n*h+c*R+S*C+E*g,e[2]=o*h+d*R+l*C+v*g,e[3]=i*h+f*R+T*C+u*g,e[4]=a*A+s*I+p*P+_*O,e[5]=n*A+c*I+S*P+E*O,e[6]=o*A+d*I+l*P+v*O,e[7]=i*A+f*I+T*P+u*O,e[8]=a*L+s*F+p*x+_*w,e[9]=n*L+c*F+S*x+E*w,e[10]=o*L+d*F+l*x+v*w,e[11]=i*L+f*F+T*x+u*w,e[12]=a*H+s*W+p*G+_*D,e[13]=n*H+c*W+S*G+E*D,e[14]=o*H+d*W+l*G+v*D,e[15]=i*H+f*W+T*G+u*D}_invert(e,t){const r=t[0],a=t[4],n=t[8],o=t[12],i=t[1],s=t[5],c=t[9],d=t[13],f=t[2],p=t[6],S=t[10],l=t[14],T=t[3],_=t[7],E=t[11],v=t[15],u=r*s-a*i,h=r*c-n*i,R=r*d-o*i,C=a*c-n*s,g=a*d-o*s,A=n*d-o*c,I=f*_-p*T,P=f*E-S*T,O=f*v-l*T,L=p*E-S*_,F=p*v-l*_,x=S*v-l*E;let w=u*x-h*F+R*L+C*O-g*P+A*I;w&&(w=1/w,e[0]=(s*x-c*F+d*L)*w,e[4]=(n*F-a*x-o*L)*w,e[8]=(_*A-E*g+v*C)*w,e[12]=(S*g-p*A-l*C)*w,e[1]=(c*O-i*x-d*P)*w,e[5]=(r*x-n*O+o*P)*w,e[9]=(E*R-T*A-v*h)*w,e[13]=(f*A-S*R+l*h)*w,e[2]=(i*F-s*O+d*I)*w,e[6]=(a*O-r*F-o*I)*w,e[10]=(T*g-_*R+v*u)*w,e[14]=(p*R-f*g-l*u)*w,e[3]=(s*P-i*L-c*I)*w,e[7]=(r*L-a*P+n*I)*w,e[11]=(_*h-T*C-E*u)*w,e[15]=(f*C-p*h+S*u)*w)}_publishShadowState(){for(let e=0;e<z;e++)this._publishedShadowIntervals[e].set(this._shadowIntervals[e]),this._publishedShadowMatrices[e].set(this._shadowMatrices[e]);this._publishedShadowNear=this._shadowNear,this._publishedShadowFar=this._shadowFar,this._hasPublishedShadowState=!0}_measureCameraMotion(){var r,a;const e=(a=(r=this.viewer)==null?void 0:r.scene)==null?void 0:a.camera;if(!(e!=null&&e.positionWC)||!(e!=null&&e.directionWC))return 1;let t=1;if(this._prevCamPos&&this._prevCamDir){const n=N.Cartesian3.distance(e.positionWC,this._prevCamPos),o=Math.min(1,Math.max(-1,N.Cartesian3.dot(e.directionWC,this._prevCamDir))),i=Math.sqrt(Math.max(0,2*(1-o)));t=Math.min(1,n*.002+i*8)}return this._prevCamPos=N.Cartesian3.clone(e.positionWC,this._prevCamPos),this._prevCamDir=N.Cartesian3.clone(e.directionWC,this._prevCamDir),this._lastMotion=t,t}_swapColorTextures(){var t,r;const e=this._cesiumColorTextureRead;this._cesiumColorTextureRead=this._cesiumColorTextureWrite,this._cesiumColorTextureWrite=e,this._colorTexture=this._cesiumColorTextureRead,this._colorTextureWrite=this._cesiumColorTextureWrite,this._colorTextureHandle=((t=this._cesiumColorTextureWrite)==null?void 0:t._texture)||null,this._colorTextureTarget=((r=this._cesiumColorTextureWrite)==null?void 0:r._target)||this._colorTextureTarget,this._hasValidColorTexture=!0}getVertexShader(){return`#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}`}getFragmentShader(){const e={SHADOW_RAY_FAR:Number(this.params.maxShadowLengthRayDistance)||Ne,maxSteps:Math.min(Number(this.params.maxSteps)||500,512),minStepSize:Number(this.params.minStepSize)||50,maxStepSize:Number(this.params.maxStepSize)||1e3};return lt(e)}createProgram(){const e=this._gl,t=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(t,this.getVertexShader()),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS)){e.deleteShader(t);return}const r=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(r,this.getFragmentShader()),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){e.deleteShader(t),e.deleteShader(r);return}const a=e.createProgram();if(e.attachShader(a,t),e.attachShader(a,r),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){e.deleteProgram(a),e.deleteShader(t),e.deleteShader(r);return}e.deleteShader(t),e.deleteShader(r),this._program=a;const n=Object.create(null),o=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let i=0;i<o;i++){const s=e.getActiveUniform(a,i);s&&(n[s.name]=e.getUniformLocation(a,s.name))}this._locations=n,this._positionLoc=e.getAttribLocation(a,"a_position")}render(e=!1){var W,G;if(this._updatedThisFrame=!1,!this.enabled&&!e)return;const a=this.viewer.scene.context._gl;if(!a||!this._fbo||!this._program||!this._fboComplete)return;this._gl=a,this.updateShadowCascades(),this._measureCameraMotion();const n=Math.max(1,Number(this.updateInterval||this.params.bsmUpdateInterval)||1),i=Math.abs(Number(this.params.windSpeed)||0)>1e-9||Math.abs(Number(this.params.evolutionSpeed)||0)>1e-9?Math.max(n,8):Number.MAX_SAFE_INTEGER;this._framesSinceRender<Number.MAX_SAFE_INTEGER&&this._framesSinceRender++;const s=this._cascadeSignature!==this._renderedSignature,c=this._paramsRev!==this._renderedParamsRev;if(!(e||!this._hasRendered||s||c||this._framesSinceRender>=i))return;this._hasRendered=!0,this._updatedThisFrame=!0,this._lastRenderedFrame++;const f=a.getParameter(a.FRAMEBUFFER_BINDING),p=a.getParameter(a.VIEWPORT),S=a.isEnabled(a.BLEND),l=a.isEnabled(a.DEPTH_TEST),T=a.isEnabled(a.CULL_FACE);if(a.disable(a.BLEND),a.disable(a.DEPTH_TEST),a.disable(a.CULL_FACE),a.bindFramebuffer(a.FRAMEBUFFER,this._fbo),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this._colorTextureHandle,0),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT1,a.TEXTURE_2D,this._depthVelocityTextureHandle,0),a.getParameter(a.FRAMEBUFFER_BINDING)!==this._fbo)return;a.drawBuffers([a.COLOR_ATTACHMENT0,a.COLOR_ATTACHMENT1]),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(this._program);const _=this._locations||Object.create(null),E=_.u_sunDirection;E&&a.uniform3f(E,-this._sunDirection[0],-this._sunDirection[1],-this._sunDirection[2]);const v=Number(this.params.bottomRadius)||6371e3,u=Number(this.params.clockElapsedSeconds)||0,h=(D,M)=>{const B=_[D];B!=null&&a.uniform1f(B,M)},R=(D,M,B)=>{const V=_[D];V!=null&&a.uniform2f(V,M,B)},C=(D,M)=>{const B=_[D];B!=null&&a.uniform3fv(B,M)},g=(D,M)=>{const B=_[D];B!=null&&a.uniform4fv(B,M)},A=(D,M)=>{const B=_[D];B!=null&&a.uniform1i(B,M)};R("u_resolution",this._tileSize,this._tileSize),R("u_atlasResolution",this.size,this.size),h("u_atlasScale",.5),h("u_bottomRadius",v),C("u_altitudeCorrection",this._getAltitudeCorrectionOffset(v)),h("u_shadowTopHeight",Number(this.params.shadowTopHeight)??(Number(this.params.cloudBottomHeight)||3e3)+(Number(this.params.cloudTopHeight)||1500)),h("u_shadowBottomHeight",Number(this.params.shadowBottomHeight)??(Number(this.params.cloudBottomHeight)||3e3)),h("u_weatherRepeat",Number(this.params.weatherRepeat)||100),R("u_localWeatherOffset",Number((W=this.params.localWeatherOffset)==null?void 0:W[0])||0,Number((G=this.params.localWeatherOffset)==null?void 0:G[1])||0),h("u_shapeRepeat",Number(this.params.shapeRepeat)||8e-4),h("u_shapeDetailRepeat",Number(this.params.shapeDetailRepeat)||.006),C("u_shapeOffset",this.params.shapeOffset||[0,0,0]),C("u_shapeDetailOffset",this.params.shapeDetailOffset||[0,0,0]),h("u_turbulenceRepeat",Number(this.params.turbulenceRepeat)||2),h("u_turbulenceDisplacement",Number(this.params.turbulenceDisplacement)||400),g("u_minLayerHeights",this.params.minLayerHeights||[0,0,0,0]),g("u_maxLayerHeights",this.params.maxLayerHeights||[0,0,0,0]),C("u_minIntervalHeights",this.params.minIntervalHeights||[0,0,0]),C("u_maxIntervalHeights",this.params.maxIntervalHeights||[0,0,0]),g("u_densityProfileExpTerms",this.params.densityProfileExpTerms||[0,0,0,0]),g("u_densityProfileExponents",this.params.densityProfileExponents||[0,0,0,0]),g("u_densityProfileLinearTerms",this.params.densityProfileLinear||[.75,.75,.75,.75]),g("u_densityProfileConstantTerms",this.params.densityProfileConstant||[.25,.25,.25,.25]),g("u_densityScales",this.params.densityScales||[0,0,0,0]),g("u_shapeAmounts",this.params.shapeAmounts||[1,1,1,1]),g("u_shapeDetailAmounts",this.params.shapeDetailAmounts||[1,1,1,1]),g("u_weatherExponents",this.params.weatherExponents||[1,1,1,1]),g("u_shapeAlteringBiases",this.params.shapeAlteringBiases||[.35,.35,.35,.35]),g("u_coverageFilterWidths",this.params.coverageFilterWidths||[.6,.6,.6,.6]),g("u_coverages",this.params.coverages||[.3,.3,.3,.3]),h("u_scatteringCoefficient",Number(this.params.scatteringCoefficient)??.9),h("u_absorptionCoefficient",Number(this.params.absorptionCoefficient)??1),h("u_time",u),h("u_evolutionSpeed",Number(this.params.evolutionSpeed)||.005),h("u_minDensity",Number(this.params.minDensity)??1e-5),h("u_minExtinction",Number(this.params.minExtinction)??1e-5),h("u_minTransmittance",Number(this.params.minTransmittance)??.01),h("u_opticalDepthTailScale",Number(this.params.opticalDepthTailScale)??1),A("u_debugShadow",Number(this.params.debugShadow)||0);let I=0;const P=(D,M,B)=>{const V=_[D];if(V!=null){if(a.uniform1i(V,I),M&&(M._texture!==void 0||B===a.TEXTURE_3D&&M)){a.activeTexture(a.TEXTURE0+I);const q=typeof M._texture<"u"?M._texture:M;a.bindTexture(B,q)}I++}};P("u_weatherTexture",this.textures.weather,a.TEXTURE_2D),P("u_turbulenceTexture",this.textures.turbulence,a.TEXTURE_2D),P("u_blueNoise",this.textures.blueNoise,a.TEXTURE_2D),P("u_shapeTexture",this.textures.shape,a.TEXTURE_3D),P("u_shapeDetailTexture",this.textures.shapeDetail,a.TEXTURE_3D);const O=_.u_inverseSunViewProj,L=_.u_reprojectionMatrix,F=_.u_atlasOffset,x=_.u_jitterOffset,w=this._positionLoc!=null?this._positionLoc:a.getAttribLocation(this._program,"a_position");w>=0&&this._vbo&&(a.bindBuffer(a.ARRAY_BUFFER,this._vbo),a.enableVertexAttribArray(w),a.vertexAttribPointer(w,2,a.FLOAT,!1,0,0));const H=[{x:0,y:this._tileSize},{x:this._tileSize,y:this._tileSize},{x:0,y:0},{x:this._tileSize,y:0}];for(let D=0;D<z;D++){const M=H[D];a.viewport(M.x,M.y,this._tileSize,this._tileSize),O&&a.uniformMatrix4fv(O,!1,this._inverseShadowMatrices[D]),L&&a.uniformMatrix4fv(L,!1,this._prevShadowMatrices[D]),F&&a.uniform2f(F,M.x/this.size,M.y/this.size),x&&a.uniform2f(x,this._jitterOffsets[D][0],this._jitterOffsets[D][1]),a.drawArrays(a.TRIANGLES,0,3)}for(let D=0;D<z;D++)this._prevShadowMatrices[D].set(this._shadowMatrices[D]);w>=0&&a.disableVertexAttribArray(w),a.bindFramebuffer(a.FRAMEBUFFER,f),a.viewport(p[0],p[1],p[2],p[3]),S&&a.enable(a.BLEND),l&&a.enable(a.DEPTH_TEST),T&&a.enable(a.CULL_FACE),this._swapColorTextures(),this._publishShadowState(),this._renderedSignature=this._cascadeSignature,this._renderedParamsRev=this._paramsRev,this._framesSinceRender=0}getTexture(){return this._hasValidColorTexture?this._cesiumColorTextureRead:null}getDepthVelocityTexture(){return this._hasValidColorTexture?this._cesiumDepthTexture:null}wasUpdatedThisFrame(){return this._updatedThisFrame===!0}getLastMotion(){return this._lastMotion||0}getShadowMatrices(){return this._hasPublishedShadowState?this._publishedShadowMatrices:this._shadowMatrices}getShadowIntervals(){return this._hasPublishedShadowState?this._publishedShadowIntervals:this._shadowIntervals}getShadowFar(){return this._hasPublishedShadowState?this._publishedShadowFar:this._shadowFar}getShadowNear(){return this._hasPublishedShadowState?this._publishedShadowNear:this._shadowNear}getTileSize(){return this._tileSize}init(){const e=this.viewer.scene,t=e.context._gl;if(!t)return;this._gl=t,this.createRT(),this.createProgram();const r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),this._vbo=r,this.autoRender&&(this._preRenderListener=e.preRender.addEventListener(()=>this.render()))}destroy(){var t,r,a,n,o,i;this._preRenderListener&&(this._preRenderListener(),this._preRenderListener=null);const e=this._gl;if(e){this._program&&e.deleteProgram(this._program);try{(r=(t=this._cesiumColorTextureRead)==null?void 0:t.destroy)==null||r.call(t)}catch{}try{(n=(a=this._cesiumColorTextureWrite)==null?void 0:a.destroy)==null||n.call(a)}catch{}try{(i=(o=this._cesiumDepthTexture)==null?void 0:o.destroy)==null||i.call(o)}catch{}this._fbo&&e.deleteFramebuffer(this._fbo),this._vbo&&e.deleteBuffer(this._vbo)}this._program=null,this._locations=null,this._positionLoc=null,this._colorTexture=null,this._colorTextureWrite=null,this._depthVelocityTexture=null,this._cesiumColorTextureRead=null,this._cesiumColorTextureWrite=null,this._cesiumDepthTexture=null,this._colorTextureHandle=null,this._depthVelocityTextureHandle=null,this._hasValidColorTexture=!1,this._prevCamPos=null,this._prevCamDir=null,this._fbo=null,this._vbo=null,this._gl=null}}const pe=le();class mt{constructor(e,t={}){this.viewer=e,this.size=t.size||1024,this.temporalAlpha=t.temporalAlpha??.01,this.varianceGamma=t.varianceGamma??1,this.updateInterval=Math.max(1,Number(t.updateInterval)||1),this.enabled=t.enabled!==!1,this._renderFrame=0,this._gl=null,this._program=null,this._fbo=null,this._outTex=null,this._historyTex=null,this._vbo=null,this._locations=null,this._useFloatRT=!0,this._preRenderListener=null,this.inputTexture=null,this.depthVelocityTexture=null,this._prevCamPos=null,this._prevCamDir=null,this._motionAlpha=this.temporalAlpha,this._forceResetHistory=!1,this._externalMotion=0,this._hasValidHistory=!1}setInputTextures(e,t){this.inputTexture=e,this.depthVelocityTexture=t}setFrameState(e={}){this._forceResetHistory=e.forceReset===!0,this._externalMotion=Math.max(0,Number(e.motion)||0)}getTexture(){return!this._hasValidHistory||!this._gl||!this._outTex||!this._historyTex?null:{_texture:this._historyTex,_textureTarget:this._gl.TEXTURE_2D,_target:this._gl.TEXTURE_2D}}_createTexture(){const e=this._gl,t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),this._useFloatRT?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,this.size,this.size,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.size,this.size,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null),t}createRT(){const e=this._gl;if(!e)return;e.getExtension("EXT_color_buffer_float"),e.getExtension("OES_texture_half_float_linear"),this._useFloatRT=!0;const t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t);try{e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,4,4,0,e.RGBA,e.HALF_FLOAT,null)}catch{this._useFloatRT=!1}e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(t),this._outTex&&e.deleteTexture(this._outTex),this._historyTex&&e.deleteTexture(this._historyTex),this._fbo&&e.deleteFramebuffer(this._fbo),this._outTex=this._createTexture(),this._historyTex=this._createTexture(),this._fbo=e.createFramebuffer()}getVertexShader(){return`#version 300 es
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
uniform int u_resetHistory;

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
  if (u_resetHistory == 1) {
    out_color = current;
    return;
  }
  vec4 depthVelocity = getClosestFragment();
  vec2 velocityUv = depthVelocity.gb * u_texelSize;
  vec2 prevUv = v_uv - velocityUv;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    out_color = current;
    return;
  }
  // V3.4.12：history 采样必须限制在本 fragment 所属 cascade tile 内（2×2 atlas），
  // 否则速度重投影会把相邻 cascade（矩阵语义不同）的 history 混进来。
  vec2 tileOrigin = floor(v_uv * 2.0) * 0.5;
  vec2 tileHalfTexel = u_texelSize * 0.5;
  prevUv = clamp(prevUv, tileOrigin + tileHalfTexel, tileOrigin + 0.5 - tileHalfTexel);
  vec4 history = texture(u_historyBuffer, prevUv);
  vec4 clipped = varianceClipping(u_inputBuffer, v_uv, current, history, u_varianceGamma);
  out_color = mix(clipped, current, u_temporalAlpha);
}
`}createProgram(){const e=this._gl,t=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(t,this.getVertexShader()),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS)){e.deleteShader(t);return}const r=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(r,this.getFragmentShader()),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){e.deleteShader(t),e.deleteShader(r);return}const a=e.createProgram();if(e.attachShader(a,t),e.attachShader(a,r),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){e.deleteProgram(a),e.deleteShader(t),e.deleteShader(r);return}e.deleteShader(t),e.deleteShader(r),this._program=a,this._locations={texelSize:e.getUniformLocation(a,"u_texelSize"),varianceGamma:e.getUniformLocation(a,"u_varianceGamma"),temporalAlpha:e.getUniformLocation(a,"u_temporalAlpha"),resetHistory:e.getUniformLocation(a,"u_resetHistory"),inputBuffer:e.getUniformLocation(a,"u_inputBuffer"),depthVelocityBuffer:e.getUniformLocation(a,"u_depthVelocityBuffer"),historyBuffer:e.getUniformLocation(a,"u_historyBuffer"),position:e.getAttribLocation(a,"a_position")}}render(e=!1){var u,h;if(!this.enabled&&!e)return;const t=Math.max(1,Number(this.updateInterval)||1);if(!e&&t>1&&this._renderFrame++%t!==0)return;const r=this._gl;if(!r||!this._fbo||!this._program||!this._outTex||!this._historyTex||!this.inputTexture||!this.depthVelocityTexture)return;const a=(h=(u=this.viewer)==null?void 0:u.scene)==null?void 0:h.camera;let n=0;if(a){const R=a.positionWC,C=a.directionWC;if(this._prevCamPos){const g=pe.Cartesian3.distance(R,this._prevCamPos),A=Math.min(1,Math.max(-1,pe.Cartesian3.dot(C,this._prevCamDir))),I=Math.sqrt(Math.max(0,2*(1-A)));n=Math.min(1,g*.002+I*8),n=Math.max(n,this._externalMotion||0)}this._prevCamPos=pe.Cartesian3.clone(R,this._prevCamPos),this._prevCamDir=pe.Cartesian3.clone(C,this._prevCamDir)}const o=this.temporalAlpha,i=Math.min(1,Math.max(0,n/.02)),s=this._forceResetHistory||!this._hasValidHistory||n>.05,c=.5;this._motionAlpha=s?1:o+(c-o)*(i*i*(3-2*i));const d=r.getParameter(r.FRAMEBUFFER_BINDING),f=r.getParameter(r.VIEWPORT),p=r.isEnabled(r.BLEND),S=r.isEnabled(r.DEPTH_TEST);r.disable(r.BLEND),r.disable(r.DEPTH_TEST),r.bindFramebuffer(r.FRAMEBUFFER,this._fbo),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this._outTex,0),r.drawBuffers([r.COLOR_ATTACHMENT0]),r.viewport(0,0,this.size,this.size),r.useProgram(this._program);const l=this._locations||{};l.texelSize&&r.uniform2f(l.texelSize,1/this.size,1/this.size),l.varianceGamma&&r.uniform1f(l.varianceGamma,this.varianceGamma),l.temporalAlpha&&r.uniform1f(l.temporalAlpha,this._motionAlpha),l.resetHistory&&r.uniform1i(l.resetHistory,s?1:0);let T=0;const _=(R,C)=>{R!=null&&(r.uniform1i(R,T),r.activeTexture(r.TEXTURE0+T),r.bindTexture(r.TEXTURE_2D,C._texture??C),T++)};_(l.inputBuffer,this.inputTexture),_(l.depthVelocityBuffer,this.depthVelocityTexture),_(l.historyBuffer,{_texture:this._historyTex});const E=l.position??-1;E>=0&&this._vbo&&(r.bindBuffer(r.ARRAY_BUFFER,this._vbo),r.enableVertexAttribArray(E),r.vertexAttribPointer(E,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLES,0,3),r.disableVertexAttribArray(E),r.bindBuffer(r.ARRAY_BUFFER,null)),r.bindFramebuffer(r.FRAMEBUFFER,d),r.viewport(f[0],f[1],f[2],f[3]),p&&r.enable(r.BLEND),S&&r.enable(r.DEPTH_TEST);const v=this._historyTex;this._historyTex=this._outTex,this._outTex=v,this._hasValidHistory=!0,this._forceResetHistory=!1,this._externalMotion=0}init(){const t=this.viewer.scene.context._gl;t&&(this._gl=t,this.createRT(),this.createProgram(),this._vbo=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this._vbo),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null))}destroy(){this._preRenderListener&&(this._preRenderListener(),this._preRenderListener=null);const e=this._gl;e&&(this._program&&e.deleteProgram(this._program),this._outTex&&e.deleteTexture(this._outTex),this._historyTex&&e.deleteTexture(this._historyTex),this._fbo&&e.deleteFramebuffer(this._fbo),this._vbo&&e.deleteBuffer(this._vbo)),this._program=null,this._outTex=null,this._historyTex=null,this._vbo=null,this._locations=null,this._fbo=null,this._gl=null}}const _t="cesium-clouds-atmosphere",pt="0.1.0",ft=`https://cdn.jsdelivr.net/npm/${_t}@${pt}`,Fe="./public/clouds-assets/",Le="./src/AtmosphereFromThreeGeospatial/Shaders/bruneton/",Oe="./public/data/noisePic/noisergba256.png",Me="./src/AtmosphereFromThreeGeospatial/assets/",Ue="./src/AtmosphereFromThreeGeospatial/Shaders/";function St(m={}){const e=m.mode??"cdn";if(e==="local")return{cloudsAssetsBase:Fe,brunetonShaderBase:Le,blueNoiseUrl:Oe,atmosphereAssetsBase:Me,atmosphereShaderBase:Ue};if(e==="custom"){const r=(m.base??"").replace(/\/+$/,"");if(!r)throw new Error('resolveAssetPaths({ mode: "custom" }) requires options.base');return{cloudsAssetsBase:`${r}/public/clouds-assets/`,brunetonShaderBase:`${r}/shaders/bruneton/`,blueNoiseUrl:`${r}/public/data/noisePic/noisergba256.png`,atmosphereAssetsBase:`${r}/assets/`,atmosphereShaderBase:`${r}/shaders/`}}const t=(m.cdnBase??ft).replace(/\/+$/,"");return{cloudsAssetsBase:`${t}/public/clouds-assets/`,brunetonShaderBase:`${t}/src/AtmosphereFromThreeGeospatial/Shaders/bruneton/`,blueNoiseUrl:`${t}/public/data/noisePic/noisergba256.png`,atmosphereAssetsBase:`${t}/src/AtmosphereFromThreeGeospatial/assets/`,atmosphereShaderBase:`${t}/src/AtmosphereFromThreeGeospatial/Shaders/`}}const ve=1024,gt=1024;function Tt(){return`
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
uniform float u_shadowScale;
uniform vec4 u_shadowDecode;
uniform vec2 u_shadowTexelSize;
uniform vec2 u_shadowIntervals[4];
uniform mat4 u_shadowMatrices[4];
uniform float u_shadowFar;
// V3.4.7：cascade 选择用 BSM published near（与 intervals/matrices 同一快照），
// 不再用当前相机 near，避免跳帧期间选择域与矩阵域不一致。
uniform float u_shadowNear;
uniform float u_maxShadowFilterRadius;
uniform int u_shadowPcfTaps;
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
// 相机高度渐变淡出：从 u_altitudeFadeStart 开始线性衰减，到 u_altitudeFadeEnd 完全消失
// 避免相机升过云顶后云层突然消失
uniform float u_altitudeFadeStart;
uniform float u_altitudeFadeEnd;
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
  // detailAmounts 全 0（smooth 档）时整体跳过 3D detail 纹理采样，节省最重的体积纹理带宽
  if (any(greaterThan(u_shapeDetailAmounts, vec4(0.0))) && (mipLevel * 0.5 + (jitter - 0.5) * 0.5 < 0.5)) {
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
  vec2 nearFar = vec2(-1.0);
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
      // 相机在云层上方：near 取射线进入云顶球面的距离（first.z），
      // 避免从相机近裁面出发耗尽步数穿越空旷空间导致云层突然消失
      float nearEntry = max(first.z, u_cameraNear);
      float farExit = max(max(first.y, second.y), second.z);
      if (farExit > nearEntry) {
          farExit = min(farExit, nearEntry + u_maxRayDistance);
          nearFar = vec2(nearEntry, farExit);
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
  return alpha > 0.35 ? nextIndex : prevIndex;
}

vec2 getShadowUv(vec3 pos, int ci) { vec4 clip = u_shadowMatrices[ci] * vec4(pos, 1.0); clip /= clip.w; return clip.xy * 0.5 + 0.5; }
vec2 getShadowAtlasOffset(int ci) { return vec2(mod(float(ci), 2.0) * 0.5, (ci < 2) ? 0.5 : 0.0); }

float readShadowOpticalDepth(vec2 uv, int ci, float distToTop, float distOff) {
  if (u_useShadowBuffer == 0) return 0.0;
  // V3.4.7：tile UV 半 texel gutter clamp。2×2 atlas + LINEAR 过滤下，
  // PCF 偏移越过 tile 边界会读到相邻 cascade（矩阵语义不同）→ 边缘黑条。
  uv = clamp(uv, u_shadowTexelSize * 0.5, 1.0 - u_shadowTexelSize * 0.5);
  vec2 atlasUv = getShadowAtlasOffset(ci) + uv * 0.5;
  vec4 shadow = (texture(u_shadowBuffer, atlasUv) / max(u_shadowScale, 1e-6)) * u_shadowDecode;
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
  int taps = clamp(u_shadowPcfTaps, 1, 16);
  for (int i = 0; i < 16; ++i) {
    if (i >= taps) break;
    sum += readShadowOpticalDepth(uv + vogelDisk(i, 16, phi) * radius * u_shadowTexelSize, ci, distToTop, distOff);
  }
  return sum / float(taps);
}

float sampleShadowOpticalDepth(vec3 rayPos, float distOff, float radius, float jitter) {
  float distToTop = getDistanceToShadowTop(rayPos);
  if (distToTop <= 0.0) return 0.0;
  // V3.4.7：near 改用 u_shadowNear（published 快照），与 intervals/matrices 同源。
  int ci = getFadedCascadeIndex(czm_view, rayPos, u_shadowIntervals, u_shadowNear, u_shadowFar, jitter);
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
      float skyGradient = dot(weather.heightFraction * 0.3 + 0.7, media.weight);
      vec3 sunColor = sunIrradiance * u_sunIntensity;
      vec3 skyColor = skyIrradiance * u_sunIntensity * u_skyToSunRatio;
      #else
      float heightAlpha = clamp((height - u_minHeight) / max(u_maxHeight - u_minHeight, 1.0), 0.0, 1.0);
      vec3 sunColor = mix(sunColorBase * 0.95, sunColorBase, heightAlpha);
      vec3 skyColor = mix(skyColorBase * 0.85, skyColorBase, heightAlpha);
      float skyGradient = dot(weather.heightFraction * 0.3 + 0.7, media.weight);
      #endif
      float sunRayDist;
      float opticalDepth = marchOpticalDepthToSun(position, sunDirection, mipLevel, jitter, sunRayDist);
      // BSM 只用于地面云影与丁达尔/空气透视辅助，不再叠加到体积云体本身。
      // 直接把地面 shadow atlas 采样到云体会在镜头移动时看起来像“阴影贴图贴到了云上”。
      // 云体自阴影仍由 marchOpticalDepthToSun(position, sunDirection, ...) 沿太阳方向实时积分负责。
      vec3 radiance = sunColor * approximateMultipleScattering(opticalDepth, cosTheta);
      radiance += skyColor * RECIPROCAL_PI4 * skyGradient * u_skyLightScale;
      // 环境光地板：模拟地面反射 + 深层多次散射，防止云底纯黑（现实中云底为浅灰）
      radiance += skyColor * RECIPROCAL_PI4 * 0.2 * u_skyLightScale;
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
  if (rayNearFar.x >= tMax) {
#ifdef SPLIT_CLOUD_OUTPUT
    // 拆分模式：无云像素输出全透明，由全分辨率合成 stage 保留场景原色
    out_FragColor = vec4(0.0);
#else
    out_FragColor = sceneColor;
#endif
    return;
  }

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

  // 相机高度渐变淡出：升过云顶后线性衰减，避免硬切消失
  float altitudeFade = 1.0 - smoothstep(u_altitudeFadeStart, u_altitudeFadeEnd, u_cameraHeight);
  cloudColor.a *= altitudeFade;
  cloudColor.rgb *= altitudeFade;

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

#ifdef SPLIT_CLOUD_OUTPUT
  // 性能拆分模式：本 stage 以 textureScale 低分辨率运行，只输出预乘云色 (cloud*a, a)，
  // 场景混合交给全分辨率合成 stage（scene*(1-a)+cloud），底图/模型保持全分辨率清晰。
  float cloudWSplit = smoothstep(0.02, 0.3, cloudColor.a);
  vec3 premulCloud = cloudActual * cloudColor.a;
  premulCloud = mix(premulCloud, reduceMagenta(premulCloud, u_magentaFixStrength), cloudWSplit);
  out_FragColor = vec4(premulCloud, cloudColor.a);
  return;
#endif

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
`}function vt(m,e,t,r){const a=m.createShader(m.VERTEX_SHADER);if(m.shaderSource(a,e),m.compileShader(a),!m.getShaderParameter(a,m.COMPILE_STATUS))return m.deleteShader(a),null;const n=m.createShader(m.FRAGMENT_SHADER);if(m.shaderSource(n,t),m.compileShader(n),!m.getShaderParameter(n,m.COMPILE_STATUS))return m.deleteShader(a),m.deleteShader(n),null;const o=m.createProgram();return m.attachShader(o,a),m.attachShader(o,n),m.linkProgram(o),m.deleteShader(a),m.deleteShader(n),m.getProgramParameter(o,m.LINK_STATUS)?o:(m.deleteProgram(o),null)}class xt{constructor(e,t={}){var a;this.viewer=e,this.atmosphereParams=t.atmosphereParams??new he,this._frameCount=0,this._gui=null,this.enableGui=t.enableGui===!0,this.assetsBase=t.cloudsAssetsBase??Fe,this.brunetonShaderBase=t.brunetonShaderBase??Le,this.blueNoiseUrl=t.blueNoiseUrl??Oe,this.atmosphereAssetsBase=t.atmosphereAssetsBase??Me,this.atmosphereShaderBase=t.atmosphereShaderBase??Ue;const r=Number((a=this.atmosphereParams)==null?void 0:a.bottomRadius)||6371030;this.params={cloudsVisible:!0,bottomRadius:r,layers:[{channel:"r",altitude:1800,height:650,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,coverage:.3,densityProfile:{expTerm:0,exponent:0,linearTerm:.75,constantTerm:.25}},{channel:"g",altitude:2400,height:1200,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,coverage:.3,densityProfile:{expTerm:0,exponent:0,linearTerm:.75,constantTerm:.25}},{channel:"b",altitude:7500,height:500,densityScale:.003,shapeAmount:.4,shapeDetailAmount:0,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.5,coverage:.3,densityProfile:{expTerm:0,exponent:0,linearTerm:.75,constantTerm:.25}},{channel:"a"}],maxSteps:500,maxStepsToSun:8,minStepSize:20,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.005,minDensity:1e-5,minExtinction:1e-5,minTransmittance:.01,distFadeStart:11e3,distFadeEnd:51e3,altitudeFadeRange:8e3,minSecondaryStepSize:100,secondaryStepScale:2,multiScatteringOctaves:8,lowLayerDensityBoost:1,shadowLengthEnabled:!0,useShadowBuffer:!0,hazeEnabled:!1,maxShadowLengthIterationCount:500,minShadowLengthStepSize:50,maxShadowLengthRayDistance:2e5,hazeDensityScale:3e-5,hazeExponent:.001,hazeScatteringCoefficient:.9,hazeAbsorptionCoefficient:.5,weatherRepeat:100,shapeRepeat:4.1,shapeDetailRepeat:5e-4,turbulenceRepeat:2,turbulenceDisplacement:400,scatteringCoefficient:1,absorptionCoefficient:0,scatterG1:.7,scatterG2:-.2,scatterMix:.5,sunIntensity:20,skyLightScale:1,skyToSunRatio:.28,powderScale:.8,powderExponent:150,aerialPerspectiveScale:0,cloudExposure:3,magentaFixStrength:2,edgeAlphaCutoff:0,mipLevelScale:.35,windSpeed:0,evolutionSpeed:.005,temporalEnabled:!1,temporalAlpha:.1,blueNoiseScale:1,jitterStrength:1,shadowFar:12e4,shadowSplitLambda:1,shadowFadeScale:5,shadowMapSize:1024,bsmUpdateInterval:1,shadowResolveEnabled:!0,shadowPcfTaps:16,cloudResolutionScale:1},t.initialCloudParams&&this._applyInitialCloudParams(t.initialCloudParams),this.atmosphere=null,this.aerial=null,this.cloudStage=null,this.textures=null,this._ready=null,this._bsm={pass:null,resolve:null,blitFbo:null,blitProg:null,blitVbo:null,blitLoc:null},this._bsmBlitSize=Number(this.params.shadowMapSize)||gt,this._bsmResourceSignature=null,this._bsmShadowDisabled=!1,this._bsmSharedTexture=null,this._bsmShadowScale=1,this._bsmBlitDone=!1,this._taa={texA:null,texB:null,current:0,pbo:null,pboReady:!1,w:0,h:0,frameCount:0,prevVP:null,curVP:null},this._weatherOffsetX=0,this._weatherOffsetY=0,this._shapeOffsetX=0,this._shapeOffsetY=0,this._shapeOffsetZ=0,this._shapeDetailOffsetX=0,this._shapeDetailOffsetY=0,this._shapeDetailOffsetZ=0,this._lastFrameTime=void 0,this._lastOffsetFrame=-1,this._clockStartTime=void 0,this._clockElapsedSeconds=0,this._lastClockElapsedSeconds=void 0,this._listeners=[],this._scratch={altCorrCarto:new Cesium.Cartographic,altCorrSurface:new Cesium.Cartesian3,altCorrNormal:new Cesium.Cartesian3,altCorrCenter:new Cesium.Cartesian3,intervalEntries:Array.from({length:8},()=>({v:0,flag:0})),intervalRanges:Array.from({length:3},()=>({min:0,max:0})),intervalResult:{min:new Cesium.Cartesian3,max:new Cesium.Cartesian3},altitudeCorrection:new Cesium.Cartesian3,cameraHeightCorr:new Cesium.Cartesian3,cameraHeightPos:new Cesium.Cartesian3,minLayerHeights:new Cesium.Cartesian4,maxLayerHeights:new Cesium.Cartesian4,densityScales:new Cesium.Cartesian4,shapeAmounts:new Cesium.Cartesian4,shapeDetailAmounts:new Cesium.Cartesian4,weatherExponents:new Cesium.Cartesian4,shapeAlteringBiases:new Cesium.Cartesian4,coverageFilterWidths:new Cesium.Cartesian4,coverages:new Cesium.Cartesian4,densityProfileExpTerms:new Cesium.Cartesian4,densityProfileExponents:new Cesium.Cartesian4,densityProfileLinearTerms:new Cesium.Cartesian4,densityProfileConstantTerms:new Cesium.Cartesian4,shadowTexelSize:new Cesium.Cartesian2,shadowDecode:new Cesium.Cartesian4(1,1,1,1),shadowIntervals:Array.from({length:4},()=>new Cesium.Cartesian2),shadowMatrices:Array.from({length:4},()=>new Cesium.Matrix4),localWeatherOffset:new Cesium.Cartesian2,shapeOffset:new Cesium.Cartesian3,shapeDetailOffset:new Cesium.Cartesian3,resolution:new Cesium.Cartesian2,bsmDynamicParams:{coverages:[0,0,0,0],densityScales:[0,0,0,0],shapeAmounts:[0,0,0,0],shapeDetailAmounts:[0,0,0,0],weatherExponents:[0,0,0,0],shapeAlteringBiases:[0,0,0,0],coverageFilterWidths:[0,0,0,0],localWeatherOffset:[0,0],shapeOffset:[0,0,0],shapeDetailOffset:[0,0,0],windSpeed:0,evolutionSpeed:0,clockElapsedSeconds:0,minLayerHeights:[0,0,0,0],maxLayerHeights:[0,0,0,0],minIntervalHeights:[0,0,0],maxIntervalHeights:[0,0,0],densityProfileLinear:[.75,.75,.75,.75],densityProfileConstant:[.25,.25,.25,.25],densityProfileExpTerms:[0,0,0,0],densityProfileExponents:[0,0,0,0]},bsmShadowOpts:null,bsmShadowIntervals:Array.from({length:4},()=>new Cesium.Cartesian2),bsmShadowMatrices:Array.from({length:4},()=>new Cesium.Matrix4)}}_applyInitialCloudParams(e){if(!e||typeof e!="object")return;const t=this.params;typeof e.cloudsEnabled=="boolean"&&(t.cloudsVisible=e.cloudsEnabled);const r=["sunIntensity","cloudExposure","skyToSunRatio","aerialPerspectiveScale","magentaFixStrength","scatterG1","scatterG2","multiScatteringOctaves","windSpeed","evolutionSpeed","distFadeStart","distFadeEnd","maxSteps","maxStepsToSun","minStepSize","maxStepSize","perspectiveStepScale","maxRayDistance","shadowFar","shadowSplitLambda","shadowFadeScale","altitudeFadeRange","maxShadowLengthIterationCount","shadowMapSize","bsmUpdateInterval","shadowPcfTaps","cloudResolutionScale"];for(const n of r){const o=Number(e[n]);Number.isFinite(o)&&(t[n]=o)}const a=e.quality==="smooth";for(let n=0;n<3;n++){const o=t.layers[n];if(!o)continue;const i=Number(e[`layer${n}Altitude`]),s=Number(e[`layer${n}Height`]),c=Number(e[`layer${n}Coverage`]);Number.isFinite(i)&&(o.altitude=i),Number.isFinite(s)&&(o.height=s),Number.isFinite(c)&&(o.coverage=c),a&&(o.shapeDetailAmount=0)}typeof e.useShadowBuffer=="boolean"&&(t.useShadowBuffer=e.useShadowBuffer),typeof e.shadowLengthEnabled=="boolean"&&(t.shadowLengthEnabled=e.shadowLengthEnabled),typeof e.hazeEnabled=="boolean"&&(t.hazeEnabled=e.hazeEnabled),typeof e.temporalEnabled=="boolean"&&(t.temporalEnabled=e.temporalEnabled),typeof e.shadowResolveEnabled=="boolean"&&(t.shadowResolveEnabled=e.shadowResolveEnabled)}async _load3DTexture(e,t){const r=await ct(e,t);return ut(this.viewer,r,Cesium)}async _load3DTextureWHD(e,t,r,a){const n=await Cesium.Resource.fetchArrayBuffer(e),o=new Uint8Array(n);return new Cesium.Texture3D({context:this.viewer.scene.context,width:t,height:r,depth:a,pixelFormat:Cesium.PixelFormat.RED,pixelDatatype:Cesium.PixelDatatype.UNSIGNED_BYTE,source:{arrayBufferView:o,width:t,height:r,depth:a},sampler:new Cesium.Sampler({minificationFilter:Cesium.TextureMinificationFilter.LINEAR,magnificationFilter:Cesium.TextureMagnificationFilter.LINEAR,wrapS:Cesium.TextureWrap.REPEAT,wrapT:Cesium.TextureWrap.REPEAT,wrapR:Cesium.TextureWrap.REPEAT})})}async _load2DTexture(e){const t=await Cesium.Resource.fetchImage(e);if(!t||t.width<=2||t.height<=2)throw new Error(`Invalid image: ${e}`);return new Cesium.Texture({context:this.viewer.scene.context,source:t,sampler:new Cesium.Sampler({minificationFilter:Cesium.TextureMinificationFilter.LINEAR,magnificationFilter:Cesium.TextureMagnificationFilter.LINEAR,wrapS:Cesium.TextureWrap.REPEAT,wrapT:Cesium.TextureWrap.REPEAT})})}async _loadTextures(){const e=this.assetsBase,[t,r,a,n,o,i]=await Promise.all([this._load3DTexture(e+"shape.bin",128).catch(()=>null),this._load3DTexture(e+"shape_detail.bin",32).catch(()=>null),this._load3DTextureWHD(e+"stbn.bin",128,128,64).catch(()=>null),this._load2DTexture(e+"local_weather.png").catch(()=>null),this._load2DTexture(e+"turbulence.png").catch(()=>null),this._load2DTexture(this.blueNoiseUrl).catch(()=>null)]);this.textures={shape:t,shapeDetail:r,stbn:a,weather:n,turbulence:o,blueNoise:i}}async _loadShader(e){return $(e,{shaderBaseUrl:this.brunetonShaderBase})}async _buildCloudFragmentShader(e=!1){const t=this.atmosphere.getAtmosphereForClouds(),[r,a,n]=await Promise.all([this._loadShader("definitions.glsl"),this._loadShader("common.glsl"),this._loadShader("runtime.glsl")]);return`precision highp float;
precision highp sampler2D;
precision highp sampler3D;
`+t.constants.getShaderDefines()+`
#define METER_TO_LENGTH_UNIT 0.001
#define USE_ATMOSPHERE_IRRADIANCE
`+(e?`#define SPLIT_CLOUD_OUTPUT
`:"")+r+`
`+a+`
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
`+n+`
`+Tt()}_getClockElapsedSeconds(){var r,a;const e=(r=this.viewer)==null?void 0:r.clock,t=e==null?void 0:e.currentTime;return!t||typeof((a=Cesium.JulianDate)==null?void 0:a.secondsDifference)!="function"?performance.now()/1e3:(this._clockStartTime||(this._clockStartTime=Cesium.JulianDate.clone(t)),Cesium.JulianDate.secondsDifference(t,this._clockStartTime))}_advanceOffsets(){const e=this._frameCount||0,t=this._getClockElapsedSeconds();return this._lastOffsetFrame===e||(this._lastOffsetFrame=e,this._weatherOffsetX=(this.params.windSpeed||0)*t,this._shapeOffsetX=(this.params.evolutionSpeed||0)*t,this._shapeDetailOffsetX=(this.params.evolutionSpeed||0)*2*t,this._clockElapsedSeconds=t,this._lastClockElapsedSeconds=t),t}_getDensityProfileVec4(e,t){const r=this.params.layers,a=i=>i==="linearTerm"?.75:i==="constantTerm"?.25:0,n=t||new Cesium.Cartesian4,o=i=>{var c,d;const s=(d=(c=r[i])==null?void 0:c.densityProfile)==null?void 0:d[e];return s!==void 0?Number(s):a(e)};return n.x=o(0),n.y=o(1),n.z=o(2),n.w=o(3),n}_getIntervalHeights(){var i,s;const e=this.params.layers,t=this._scratch.intervalEntries;for(let c=0;c<4;c++){const d=Number((i=e[c])==null?void 0:i.altitude)||0,f=Number((s=e[c])==null?void 0:s.height)||0,p=t[c*2],S=t[c*2+1];p.v=d,p.flag=0,S.v=d+f,S.flag=1}t.sort((c,d)=>c.v!==d.v?c.v-d.v:c.flag-d.flag);const r=this._scratch.intervalRanges;for(let c=0;c<3;c++)r[c].min=0,r[c].max=0;let a=0,n=0;for(let c=0;c<t.length;c++)n===0&&c>0&&a<3&&(r[a].min=t[c-1].v,r[a].max=t[c].v,a++),n+=t[c].flag===0?1:-1;const o=this._scratch.intervalResult;return o.min.x=r[0].min,o.min.y=r[1].min,o.min.z=r[2].min,o.max.x=r[0].max,o.max.y=r[1].max,o.max.z=r[2].max,o}_getLayerVec4(e,t=0,r){const a=this.params.layers,n=r||new Cesium.Cartesian4,o=i=>{var c;const s=(c=a[i])==null?void 0:c[e];return s!==void 0?Number(s):t};return n.x=o(0),n.y=o(1),n.z=o(2),n.w=o(3),n}_getAltitudeCorrectionOffset(e,t){var f,p,S,l,T;const r=t||new Cesium.Cartesian3,a=(S=(p=(f=this.viewer)==null?void 0:f.scene)==null?void 0:p.globe)==null?void 0:S.ellipsoid,n=(T=(l=this.viewer)==null?void 0:l.camera)==null?void 0:T.positionWC;if(!a||!n)return Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO,r);const o=this._scratch,i=Cesium.Cartographic.fromCartesian(n,a,o.altCorrCarto);if(!i)return Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO,r);const s=Cesium.Cartesian3.fromRadians(i.longitude,i.latitude,0,a,o.altCorrSurface),c=a.geodeticSurfaceNormal(s,o.altCorrNormal),d=Cesium.Cartesian3.subtract(s,Cesium.Cartesian3.multiplyByScalar(c,Number(e)||0,o.altCorrNormal),o.altCorrCenter);return Cesium.Cartesian3.negate(d,r)}_getMinHeight(){var r,a;const e=this.params.layers;let t=1/0;for(let n=0;n<4;n++)(Number((r=e[n])==null?void 0:r.height)||0)>0&&(t=Math.min(t,Number((a=e[n])==null?void 0:a.altitude)||0));return Number.isFinite(t)?t:0}_getMaxHeight(){var r,a;const e=this.params.layers;let t=0;for(let n=0;n<4;n++){const o=Number((r=e[n])==null?void 0:r.height)||0;o>0&&(t=Math.max(t,(Number((a=e[n])==null?void 0:a.altitude)||0)+o))}return t}_buildCloudUniforms(){const e=this,t=()=>e.params,r=()=>e.textures,n=this.atmosphere.getAtmosphereForClouds().getUniforms(),o={u_shapeTexture:()=>{var i;return(i=r())==null?void 0:i.shape},u_shapeDetailTexture:()=>{var i;return(i=r())==null?void 0:i.shapeDetail},u_stbnTexture:()=>{var i,s;return((i=r())==null?void 0:i.stbn)||((s=r())==null?void 0:s.shape)},u_weatherTexture:()=>{var i;return(i=r())==null?void 0:i.weather},u_turbulenceTexture:()=>{var i;return(i=r())==null?void 0:i.turbulence},u_blueNoise:()=>{var i;return(i=r())==null?void 0:i.blueNoise},u_blueNoiseScale:()=>t().blueNoiseScale??1,u_jitterStrength:()=>t().jitterStrength??1,u_cameraPosition:()=>e.viewer.camera.positionWC,u_altitudeCorrection:()=>{const i=Number(n.bottomRadius())||Number(t().bottomRadius)||0;return e._getAltitudeCorrectionOffset(i,e._scratch.altitudeCorrection)},u_cameraHeight:()=>{const i=e._scratch,s=Number(n.bottomRadius())||Number(t().bottomRadius)||0,c=e._getAltitudeCorrectionOffset(s,i.cameraHeightCorr),d=Cesium.Cartesian3.add(e.viewer.camera.positionWC,c,i.cameraHeightPos);return Math.max(0,Cesium.Cartesian3.magnitude(d)-s)},u_bottomRadius:()=>Number(t().bottomRadius),u_minHeight:()=>e._getMinHeight(),u_maxHeight:()=>e._getMaxHeight(),u_minLayerHeights:()=>e._getLayerVec4("altitude",0,e._scratch.minLayerHeights),u_maxLayerHeights:()=>{var c,d,f,p,S,l,T,_;const i=t().layers,s=e._scratch.maxLayerHeights;return s.x=(Number((c=i[0])==null?void 0:c.altitude)||0)+(Number((d=i[0])==null?void 0:d.height)||0),s.y=(Number((f=i[1])==null?void 0:f.altitude)||0)+(Number((p=i[1])==null?void 0:p.height)||0),s.z=(Number((S=i[2])==null?void 0:S.altitude)||0)+(Number((l=i[2])==null?void 0:l.height)||0),s.w=(Number((T=i[3])==null?void 0:T.altitude)||0)+(Number((_=i[3])==null?void 0:_.height)||0),s},u_densityScales:()=>e._getLayerVec4("densityScale",0,e._scratch.densityScales),u_shapeAmounts:()=>e._getLayerVec4("shapeAmount",0,e._scratch.shapeAmounts),u_shapeDetailAmounts:()=>e._getLayerVec4("shapeDetailAmount",0,e._scratch.shapeDetailAmounts),u_weatherExponents:()=>e._getLayerVec4("weatherExponent",1,e._scratch.weatherExponents),u_shapeAlteringBiases:()=>e._getLayerVec4("shapeAlteringBias",.35,e._scratch.shapeAlteringBiases),u_coverageFilterWidths:()=>e._getLayerVec4("coverageFilterWidth",.6,e._scratch.coverageFilterWidths),u_maxSteps:()=>t().maxSteps,u_maxStepsToSun:()=>t().maxStepsToSun,u_minStepSize:()=>t().minStepSize,u_maxStepSize:()=>t().maxStepSize,u_maxRayDistance:()=>t().maxRayDistance,u_distFadeStart:()=>Number(t().distFadeStart)||3e4,u_distFadeEnd:()=>Number(t().distFadeEnd)||15e4,u_altitudeFadeStart:()=>e._getMaxHeight(),u_altitudeFadeEnd:()=>e._getMaxHeight()+(Number(t().altitudeFadeRange)||8e3),u_cameraNear:()=>{var i;return Number((i=e.viewer.camera.frustum)==null?void 0:i.near)||0},u_shadowTopHeight:()=>e._getMaxHeight(),u_shadowLengthEnabled:()=>t().shadowLengthEnabled?1:0,u_hazeEnabled:()=>t().hazeEnabled?1:0,u_maxShadowLengthIterationCount:()=>t().maxShadowLengthIterationCount,u_minShadowLengthStepSize:()=>t().minShadowLengthStepSize,u_maxShadowLengthRayDistance:()=>t().maxShadowLengthRayDistance,u_hazeDensityScale:()=>t().hazeDensityScale,u_hazeExponent:()=>t().hazeExponent,u_hazeScatteringCoefficient:()=>t().hazeScatteringCoefficient,u_hazeAbsorptionCoefficient:()=>t().hazeAbsorptionCoefficient,u_shadowBuffer:()=>{var i,s,c;if(t().useShadowBuffer&&e._bsm.pass){const d=e._bsmSharedTexture;if(d)return d;const f=(s=(i=e._bsm.pass).getTexture)==null?void 0:s.call(i);if(f)return f}return(c=r())==null?void 0:c.weather},u_shadowScale:()=>e._bsmShadowScale??1,u_shadowDecode:()=>e._scratch.shadowDecode,u_shadowTexelSize:()=>{var c,d;const i=e._bsm.pass?((d=(c=e._bsm.pass).getTileSize)==null?void 0:d.call(c))||Math.floor((Number(t().shadowMapSize)||ve)/2):512,s=e._scratch.shadowTexelSize;return s.x=1/i,s.y=1/i,s},u_shadowIntervals:()=>{const i=e._scratch.shadowIntervals;if(t().useShadowBuffer&&e._bsm.pass){const s=e._bsm.pass.getShadowIntervals();for(let c=0;c<4;c++)i[c].x=s[c][0],i[c].y=s[c][1]}else for(let s=0;s<4;s++)i[s].x=0,i[s].y=0;return i},u_shadowMatrices:()=>{const i=e._scratch.shadowMatrices;if(t().useShadowBuffer&&e._bsm.pass){const s=e._bsm.pass.getShadowMatrices();for(let c=0;c<4;c++)Cesium.Matrix4.fromArray(s[c],0,i[c])}else for(let s=0;s<4;s++)Cesium.Matrix4.clone(Cesium.Matrix4.IDENTITY,i[s]);return i},u_shadowFar:()=>e._bsm.pass?e._bsm.pass.getShadowFar():t().maxShadowLengthRayDistance,u_shadowNear:()=>{var i;return e._bsm.pass?e._bsm.pass.getShadowNear():Number((i=e.viewer.camera.frustum)==null?void 0:i.near)||.1},u_maxShadowFilterRadius:()=>2,u_shadowPcfTaps:()=>Math.min(16,Math.max(1,Number(t().shadowPcfTaps)||16)),u_useShadowBuffer:()=>t().useShadowBuffer?1:0,u_skyLightScale:()=>t().skyLightScale,u_weatherRepeat:()=>t().weatherRepeat,u_localWeatherOffset:()=>{e._advanceOffsets();const i=e._scratch.localWeatherOffset;return i.x=e._weatherOffsetX,i.y=e._weatherOffsetY,i},u_shapeRepeat:()=>(Number(t().shapeRepeat)||3)/1e4,u_shapeOffset:()=>{e._advanceOffsets();const i=e._scratch.shapeOffset;return i.x=e._shapeOffsetX,i.y=e._shapeOffsetY,i.z=e._shapeOffsetZ,i},u_shapeDetailRepeat:()=>t().shapeDetailRepeat,u_shapeDetailOffset:()=>{e._advanceOffsets();const i=e._scratch.shapeDetailOffset;return i.x=e._shapeDetailOffsetX,i.y=e._shapeDetailOffsetY,i.z=e._shapeDetailOffsetZ,i},u_turbulenceRepeat:()=>t().turbulenceRepeat,u_turbulenceDisplacement:()=>t().turbulenceDisplacement,u_coverages:()=>e._getLayerVec4("coverage",.3,e._scratch.coverages),u_coverageHaze:()=>{var s,c,d;const i=t().layers;return Math.max(Number((s=i[0])==null?void 0:s.coverage)??.3,Number((c=i[1])==null?void 0:c.coverage)??.3,Number((d=i[2])==null?void 0:d.coverage)??.3)},u_scatteringCoefficient:()=>t().scatteringCoefficient,u_absorptionCoefficient:()=>t().absorptionCoefficient,u_scatterG1:()=>t().scatterG1,u_scatterG2:()=>t().scatterG2,u_scatterMix:()=>t().scatterMix,u_sunIntensity:()=>t().sunIntensity,u_skyToSunRatio:()=>t().skyToSunRatio,u_powderScale:()=>t().powderScale,u_powderExponent:()=>t().powderExponent,u_aerialPerspectiveScale:()=>t().aerialPerspectiveScale,u_cloudExposure:()=>t().cloudExposure,u_magentaFixStrength:()=>t().magentaFixStrength??.8,u_edgeAlphaCutoff:()=>t().edgeAlphaCutoff??.03,u_resolution:()=>{const i=e.viewer.scene.context,s=e._scratch.resolution;return s.x=i.drawingBufferWidth||1,s.y=i.drawingBufferHeight||1,s},u_mipLevelScale:()=>Number(t().mipLevelScale)||1,u_perspectiveStepScale:()=>t().perspectiveStepScale??1.01,u_minDensity:()=>t().minDensity??1e-5,u_minExtinction:()=>t().minExtinction??1e-5,u_minTransmittance:()=>t().minTransmittance??.01,u_minSecondaryStepSize:()=>t().minSecondaryStepSize??100,u_secondaryStepScale:()=>t().secondaryStepScale??2,u_multiScatteringOctaves:()=>Math.min(12,Math.max(1,t().multiScatteringOctaves??8)),u_lowLayerDensityBoost:()=>t().lowLayerDensityBoost??1,u_densityProfileExpTerms:()=>e._getDensityProfileVec4("expTerm",e._scratch.densityProfileExpTerms),u_densityProfileExponents:()=>e._getDensityProfileVec4("exponent",e._scratch.densityProfileExponents),u_densityProfileLinearTerms:()=>e._getDensityProfileVec4("linearTerm",e._scratch.densityProfileLinearTerms),u_densityProfileConstantTerms:()=>e._getDensityProfileVec4("constantTerm",e._scratch.densityProfileConstantTerms),u_minIntervalHeights:()=>e._getIntervalHeights().min,u_maxIntervalHeights:()=>e._getIntervalHeights().max,u_historyTexture:()=>{var s;return e._taaGetHistoryTexture()||((s=r())==null?void 0:s.blueNoise)},u_prevViewProjection:()=>e._taa.prevVP||Cesium.Matrix4.IDENTITY,u_temporalAlpha:()=>t().temporalAlpha??.1,u_temporalEnabled:()=>t().temporalEnabled&&!e._cloudSplitMode&&e._taa.frameCount>2&&e._taa.prevVP?1:0,u_frame:()=>e._frameCount||0};return Object.assign(o,n),o.u_cameraPosition=n.cameraPosition,o.u_bottomRadius=n.bottomRadius,o}_getBSMResourceSignature(){return{size:Math.max(256,Number(this.params.shadowMapSize)||ve),updateInterval:Math.max(1,Number(this.params.bsmUpdateInterval)||1),resolveEnabled:this.params.shadowResolveEnabled!==!1}}_sameBSMResourceSignature(e,t){return!!e&&!!t&&e.size===t.size&&e.updateInterval===t.updateInterval&&e.resolveEnabled===t.resolveEnabled}_ensureBSMPasses(){if(!this.params.useShadowBuffer||!this.textures)return;const e=this._getBSMResourceSignature();if(this._bsm.pass&&this._sameBSMResourceSignature(this._bsmResourceSignature,e)){this._bsm.pass.updateInterval=e.updateInterval,this._bsm.resolve&&(this._bsm.resolve.updateInterval=e.resolveEnabled?e.updateInterval:Number.MAX_SAFE_INTEGER,this._bsm.resolve.enabled=e.resolveEnabled);return}this._destroyBSMPasses({disableShadow:!1}),this._bsmBlitSize=e.size,this._bsm.pass=new ht(this.viewer,{size:e.size,updateInterval:e.updateInterval,textures:this.textures,params:this._getShadowPassParams(),autoRender:!1}),this._bsm.pass.init(),this._bsm.resolve=new mt(this.viewer,{size:e.size,temporalAlpha:.01,updateInterval:e.resolveEnabled?e.updateInterval:Number.MAX_SAFE_INTEGER,enabled:e.resolveEnabled}),this._bsm.resolve.setInputTextures(this._bsm.pass.getTexture(),this._bsm.pass.getDepthVelocityTexture()),this._bsm.resolve.init(),this._bsmResourceSignature=e}_destroyBSMPasses(e={}){var r,a,n,o,i,s;const t=e.disableShadow!==!1;try{(r=this._bsm.pass)==null||r.destroy()}catch{}try{(a=this._bsm.resolve)==null||a.destroy()}catch{}this._bsm.pass=null,this._bsm.resolve=null,this._bsmSharedTexture=null,this._bsmShadowScale=1,this._bsmBlitDone=!1,this._bsmResourceSignature=null,t&&((o=(n=this.atmosphere)==null?void 0:n.setCloudShadow)==null||o.call(n,{enabled:!1}),(s=(i=this.aerial)==null?void 0:i.setCloudShadow)==null||s.call(i,{enabled:!1}),this._bsmShadowDisabled=!0)}_bsmResolveGetTexture(){const e=this._bsm.resolve,t=e?e._historyTex:this._bsm.pass?this._bsm.pass._colorTexture:null;return t?{_texture:t}:null}_taaGetHistoryTexture(){var r;const e=(r=this.viewer.scene.context)==null?void 0:r._gl;if(!e)return null;const t=this._taa.current===0?this._taa.texA:this._taa.texB;return t?{_texture:t,_textureTarget:e.TEXTURE_2D,_target:e.TEXTURE_2D}:null}_blitBSM(e,t,r){var d,f,p,S;const a=(d=this.viewer.scene.context)==null?void 0:d._gl;if(!a||!(e!=null&&e._texture)||!(t!=null&&t._texture))return;if(!this._bsm.blitFbo){this._bsm.blitFbo=a.createFramebuffer(),this._bsm.blitProg=vt(a,`#version 300 es
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
  o=vec4(raw.rgb*u_scale, raw.a*u_scale);}`),this._bsm.blitLoc={src:a.getUniformLocation(this._bsm.blitProg,"u_src"),scale:a.getUniformLocation(this._bsm.blitProg,"u_scale"),pos:a.getAttribLocation(this._bsm.blitProg,"a_pos")};const l=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,l),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),a.STATIC_DRAW),this._bsm.blitVbo=l}const n=a.getParameter(a.FRAMEBUFFER_BINDING),o=a.getParameter(a.VIEWPORT),i=Number(t.width??t._width)||this._bsmBlitSize,s=Number(t.height??t._height)||this._bsmBlitSize;if(a.bindFramebuffer(a.FRAMEBUFFER,this._bsm.blitFbo),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,t._texture,0),a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE){a.bindFramebuffer(a.FRAMEBUFFER,n),a.viewport(...o);return}a.viewport(0,0,i,s),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(this._bsm.blitProg),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,e._texture),(f=this._bsm.blitLoc)!=null&&f.src&&a.uniform1i(this._bsm.blitLoc.src,0),(p=this._bsm.blitLoc)!=null&&p.scale&&a.uniform1f(this._bsm.blitLoc.scale,r),a.bindBuffer(a.ARRAY_BUFFER,this._bsm.blitVbo);const c=((S=this._bsm.blitLoc)==null?void 0:S.pos)??a.getAttribLocation(this._bsm.blitProg,"a_pos");c>=0&&(a.enableVertexAttribArray(c),a.vertexAttribPointer(c,2,a.FLOAT,!1,0,0)),a.drawArrays(a.TRIANGLES,0,3),c>=0&&a.disableVertexAttribArray(c),a.bindFramebuffer(a.FRAMEBUFFER,n),a.viewport(o[0],o[1],o[2],o[3])}_syncBSM(){var R,C,g,A,I,P,O,L,F,x,w,H,W,G,D,M,B,V,q,b,k,j,K,Y,te,me,Z,ne;if(!this.params.useShadowBuffer){this._bsm.pass||this._bsm.resolve?this._destroyBSMPasses({disableShadow:!0}):this._bsmShadowDisabled||((C=(R=this.atmosphere)==null?void 0:R.setCloudShadow)==null||C.call(R,{enabled:!1}),(A=(g=this.aerial)==null?void 0:g.setCloudShadow)==null||A.call(g,{enabled:!1}),this._bsmShadowDisabled=!0);return}this._ensureBSMPasses();const e=this._bsm.pass;if(!e){this._bsmShadowDisabled||((P=(I=this.atmosphere)==null?void 0:I.setCloudShadow)==null||P.call(I,{enabled:!1}),(L=(O=this.aerial)==null?void 0:O.setCloudShadow)==null||L.call(O,{enabled:!1}),this._bsmShadowDisabled=!0);return}const t=this._getBSMResourceSignature();e.updateInterval=t.updateInterval,this._bsm.resolve&&(this._bsm.resolve.updateInterval=t.resolveEnabled?t.updateInterval:Number.MAX_SAFE_INTEGER,this._bsm.resolve.enabled=t.resolveEnabled),this._advanceOffsets(),this._bsmShadowDisabled=!1;const r=this._scratch.bsmDynamicParams,a=this.params.layers,n=(y,ae,re)=>{var oe;const U=(oe=a[y])==null?void 0:oe[ae];return U!==void 0?Number(U):re};for(let y=0;y<4;y++)r.coverages[y]=n(y,"coverage",.3),r.densityScales[y]=n(y,"densityScale",0),r.shapeAmounts[y]=n(y,"shapeAmount",0),r.shapeDetailAmounts[y]=n(y,"shapeDetailAmount",0),r.weatherExponents[y]=n(y,"weatherExponent",1),r.shapeAlteringBiases[y]=n(y,"shapeAlteringBias",.35),r.coverageFilterWidths[y]=n(y,"coverageFilterWidth",.6);const o=this._getIntervalHeights();for(let y=0;y<4;y++){const ae=n(y,"altitude",0),re=n(y,"height",0);r.minLayerHeights[y]=ae,r.maxLayerHeights[y]=ae+re;const U=(F=a[y])==null?void 0:F.densityProfile;r.densityProfileLinear[y]=Number((U==null?void 0:U.linearTerm)??.75),r.densityProfileConstant[y]=Number((U==null?void 0:U.constantTerm)??.25),r.densityProfileExpTerms[y]=Number((U==null?void 0:U.expTerm)??0),r.densityProfileExponents[y]=Number((U==null?void 0:U.exponent)??0)}r.minIntervalHeights[0]=o.min.x,r.minIntervalHeights[1]=o.min.y,r.minIntervalHeights[2]=o.min.z,r.maxIntervalHeights[0]=o.max.x,r.maxIntervalHeights[1]=o.max.y,r.maxIntervalHeights[2]=o.max.z,r.localWeatherOffset[0]=this._weatherOffsetX||0,r.localWeatherOffset[1]=this._weatherOffsetY||0,r.shapeOffset[0]=this._shapeOffsetX||0,r.shapeOffset[1]=this._shapeOffsetY||0,r.shapeOffset[2]=this._shapeOffsetZ||0,r.shapeDetailOffset[0]=this._shapeDetailOffsetX||0,r.shapeDetailOffset[1]=this._shapeDetailOffsetY||0,r.shapeDetailOffset[2]=this._shapeDetailOffsetZ||0,r.bottomRadius=this.params.bottomRadius,r.shadowBottomHeight=this._getMinHeight(),r.shadowTopHeight=this._getMaxHeight(),r.shadowFar=Number(this.params.shadowFar)||Number(this.params.maxShadowLengthRayDistance)||2e5,r.maxShadowLengthRayDistance=Number(this.params.maxShadowLengthRayDistance)||2e5,r.shadowSplitLambda=Number(this.params.shadowSplitLambda)||.5,r.shadowFadeScale=Number(this.params.shadowFadeScale)||1,r.scatteringCoefficient=Number(this.params.scatteringCoefficient)??.9,r.absorptionCoefficient=Number(this.params.absorptionCoefficient)??1,r.windSpeed=Number(this.params.windSpeed)||0,r.evolutionSpeed=Number(this.params.evolutionSpeed)||0,r.clockElapsedSeconds=this._clockElapsedSeconds||0,e.updateDynamicParams(r),e.render();const i=((x=e.wasUpdatedThisFrame)==null?void 0:x.call(e))===!0;let s=!1;if(this._bsm.resolve){const y=((w=e.getLastMotion)==null?void 0:w.call(e))||0;this._bsm.resolve.setInputTextures(e.getTexture(),e.getDepthVelocityTexture()),(W=(H=this._bsm.resolve).setFrameState)==null||W.call(H,{forceReset:i&&y>.05,motion:y}),i&&(this._bsm.resolve.render(!0),s=!0)}let c=this._bsm.resolve?this._bsmResolveGetTexture():null;if(c||(c=e.getTexture()),!c){(D=(G=this.atmosphere)==null?void 0:G.setCloudShadow)==null||D.call(G,{enabled:!1}),(B=(M=this.aerial)==null?void 0:M.setCloudShadow)==null||B.call(M,{enabled:!1});return}const d=(q=(V=this.atmosphere)==null?void 0:V.getAtmosphereForClouds)==null?void 0:q.call(V),f=(b=d==null?void 0:d.getCloudShadowTargetTexture)==null?void 0:b.call(d),S=((k=d==null?void 0:d.getCloudShadowClamp01)==null?void 0:k.call(d))??!0?200:1;let l=c;f&&c._texture&&((i||s||!this._bsmBlitDone)&&(this._blitBSM(c,f,S),this._bsmBlitDone=!0),l=f),this._bsmSharedTexture=f||null,this._bsmShadowScale=f?S:1;const T=e.getShadowIntervals(),_=e.getShadowMatrices(),E=((j=e.getTileSize)==null?void 0:j.call(e))||Math.floor(ve/2),v=0,u=this._scratch;for(let y=0;y<4;y++)u.bsmShadowIntervals[y].x=T[y][0],u.bsmShadowIntervals[y].y=T[y][1],Cesium.Matrix4.fromArray(_[y],0,u.bsmShadowMatrices[y]);u.bsmShadowOpts||(u.bsmShadowOpts={enabled:!0,texture:null,scale:1,decode:{x:1,y:1,z:1,w:1},near:.1,far:2e5,topHeight:5e3,bottomRadius:6371e3,altitudeFadeStart:5e3,altitudeFadeEnd:13e3,intervals:u.bsmShadowIntervals,matrices:u.bsmShadowMatrices,texelSize:{x:1/512,y:1/512},geometricErrorCorrectionAmount:0,pcfTaps:16});const h=u.bsmShadowOpts;h.enabled=!0,h.texture=l,h.scale=S,h.pcfTaps=Math.min(16,Math.max(1,Number(this.params.shadowPcfTaps)||16)),h.near=((K=e.getShadowNear)==null?void 0:K.call(e))??(Number((Y=this.viewer.camera.frustum)==null?void 0:Y.near)||.1),h.far=e.getShadowFar(),h.topHeight=this._getMaxHeight(),h.altitudeFadeStart=this._getMaxHeight(),h.altitudeFadeEnd=this._getMaxHeight()+(Number(this.params.altitudeFadeRange)||8e3),h.bottomRadius=Number(this.params.bottomRadius)||6371e3,h.texelSize.x=1/E,h.texelSize.y=1/E,h.geometricErrorCorrectionAmount=v,(me=(te=this.atmosphere)==null?void 0:te.setCloudShadow)==null||me.call(te,h),(ne=(Z=this.aerial)==null?void 0:Z.setCloudShadow)==null||ne.call(Z,h)}_taaCapture(){var i;const e=(i=this.viewer.scene.context)==null?void 0:i._gl;if(!e)return;const t=this.viewer.scene.canvas,r=t.width,a=t.height;if(r!==this._taa.w||a!==this._taa.h){this._taa.texA&&e.deleteTexture(this._taa.texA),this._taa.texB&&e.deleteTexture(this._taa.texB),this._taa.pbo&&e.deleteBuffer(this._taa.pbo);const s=()=>{const c=e.createTexture();return e.bindTexture(e.TEXTURE_2D,c),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,r,a,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null),c};this._taa.texA=s(),this._taa.texB=s(),this._taa.pbo=e.createBuffer(),e.bindBuffer(e.PIXEL_PACK_BUFFER,this._taa.pbo),e.bufferData(e.PIXEL_PACK_BUFFER,r*a*4,e.STREAM_READ),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),this._taa.w=r,this._taa.h=a,this._taa.frameCount=0,this._taa.pboReady=!1}const n=this._taa.current===0?this._taa.texB:this._taa.texA;if(this._taa.pboReady){const s=e.getParameter(e.TEXTURE_BINDING_2D),c=e.getParameter(e.UNPACK_FLIP_Y_WEBGL),d=e.getParameter(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL);c&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),d&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.bindBuffer(e.PIXEL_UNPACK_BUFFER,this._taa.pbo),e.bindTexture(e.TEXTURE_2D,n),e.texSubImage2D(e.TEXTURE_2D,0,0,0,r,a,e.RGBA,e.UNSIGNED_BYTE,0),e.bindTexture(e.TEXTURE_2D,s),e.bindBuffer(e.PIXEL_UNPACK_BUFFER,null),c&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),d&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),this._taa.current=1-this._taa.current,this._taa.frameCount++}const o=e.getParameter(e.FRAMEBUFFER_BINDING);e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindBuffer(e.PIXEL_PACK_BUFFER,this._taa.pbo),e.readPixels(0,0,r,a,e.RGBA,e.UNSIGNED_BYTE,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),o&&e.bindFramebuffer(e.FRAMEBUFFER,o),this._taa.pboReady=!0}_taaUpdateVP(){this._taa.prevVP=this._taa.curVP;const e=this.viewer.camera;this._taa.curVP=Cesium.Matrix4.multiply(e.frustum.projectionMatrix,e.viewMatrix,new Cesium.Matrix4)}_setupGUI(){if(this._gui||!this.enableGui)return;const e=typeof window<"u"&&window.dat?window.dat:null;if(!(e!=null&&e.GUI))return;this._gui=new e.GUI({name:"体积云管线"});const t=this.params,r=t.layers,a=this._gui.addFolder("云层");a.add(r[0],"altitude",0,2e4,50).name("层0底高(m)"),a.add(r[0],"height",0,1e4,50).name("层0厚度(m)"),a.add(r[0],"coverage",0,1,.01).name("层0覆盖度"),a.add(r[1],"altitude",0,2e4,50).name("层1底高(m)"),a.add(r[1],"height",0,1e4,50).name("层1厚度(m)"),a.add(r[1],"coverage",0,1,.01).name("层1覆盖度"),a.add(r[2],"altitude",0,2e4,50).name("层2底高(m)"),a.add(r[2],"height",0,1e4,50).name("层2厚度(m)"),a.add(r[2],"coverage",0,1,.01).name("层2覆盖度"),a.add(t,"shapeRepeat",1,8,.1).name("主体噪声频率"),a.add(t,"shapeDetailRepeat",5e-4,.02,1e-4).name("细节噪声频率"),a.add(r[0],"shapeDetailAmount",0,1.5,.01).name("层0细节权重"),a.add(r[1],"shapeDetailAmount",0,1.5,.01).name("层1细节权重"),a.add(r[2],"shapeDetailAmount",0,1.5,.01).name("层2细节权重"),a.add(r[0],"weatherExponent",.2,2,.01).name("层0天气指数"),a.add(r[1],"weatherExponent",.2,2,.01).name("层1天气指数"),a.add(r[2],"weatherExponent",.2,2,.01).name("层2天气指数"),a.add(r[0],"coverageFilterWidth",.1,1,.01).name("层0覆盖过滤宽度"),a.add(r[1],"coverageFilterWidth",.1,1,.01).name("层1覆盖过滤宽度"),a.add(r[2],"coverageFilterWidth",.1,1,.01).name("层2覆盖过滤宽度"),a.open();const n=this._gui.addFolder("光照");n.add(t,"sunIntensity",0,150,5).name("太阳强度"),n.add(t,"skyToSunRatio",.05,.6,.01).name("天空/太阳比"),n.add(t,"cloudExposure",.1,5,.1).name("云曝光"),n.add(t,"magentaFixStrength",0,2,.05).name("落日去品红强度"),n.add(t,"edgeAlphaCutoff",0,.2,.005).name("边缘Alpha裁剪"),n.add(t,"aerialPerspectiveScale",0,3,.1).name("大气透视");const o=this._gui.addFolder("散射");o.add(t,"scatterG1",0,.99,.01).name("前向散射G"),o.add(t,"scatterG2",-.99,0,.01).name("后向散射G"),o.add(t,"multiScatteringOctaves",1,12,1).name("多散射阶数");const i=this._gui.addFolder("动画");i.add(t,"windSpeed",0,1,1e-4).name("风速"),i.add(t,"evolutionSpeed",0,1e-4,1e-6).name("演化速度"),i.add(t,"distFadeStart",5e3,1e5,1e3).name("远处衰减起点(m)"),i.add(t,"distFadeEnd",2e4,2e5,1e3).name("远处衰减终点(m)");const s=this._gui.addFolder("开关");s.add(t,"cloudsVisible").name("显示云").onChange(f=>{this.cloudStage&&(this.cloudStage.enabled=f)}),s.add(t,"useShadowBuffer").name("BSM(云阴影)"),s.add(t,"shadowLengthEnabled").name("阴影长度(丁达尔)"),s.add(t,"hazeEnabled").name("雾效(HAZE)"),s.add(t,"temporalEnabled").name("TAA"),s.add(t,"maxSteps",64,1200,1).name("主采样步数"),s.add(t,"minStepSize",5,200,1).name("最小步长"),s.add(t,"blueNoiseScale",.25,4,.05).name("噪声采样缩放"),s.add(t,"jitterStrength",0,1,.01).name("抖动强度");const c=this._gui.addFolder("BSM 缩放"),d=(f,p)=>{this.atmosphere&&(this.atmosphere[`_${f}`]=p),this.aerial&&(this.aerial[`_${f}`]=p)};t._bsmGroundScale=.3,t._bsmTyndallScale=1,c.add(t,"_bsmGroundScale",.1,20,.1).name("OD缩放(地面)").onChange(f=>d("bsmGroundOpticalDepthScale",f)),c.add(t,"_bsmTyndallScale",.1,20,.1).name("OD缩放(光柱)").onChange(f=>d("bsmTyndallOpticalDepthScale",f)),c.add(t,"shadowFar",2e4,5e5,5e3).name("阴影覆盖距离"),c.add(t,"shadowSplitLambda",0,1,.05).name("近处分配"),c.add(t,"shadowFadeScale",0,5,.1).name("边缘扩展"),d("bsmGroundOpticalDepthScale",t._bsmGroundScale),d("bsmTyndallOpticalDepthScale",t._bsmTyndallScale)}_getShadowPassParams(){var E,v,u,h,R,C,g,A,I,P,O,L,F;const e=this.params.layers,t=[],r=[],a=[],n=[],o=[],i=[],s=[],c=[],d=[],f=[],p=[];let S=1e9,l=0;for(let x=0;x<4;x++){const w=Number((E=e[x])==null?void 0:E.altitude)||0,H=Number((v=e[x])==null?void 0:v.height)||0;w+H>0&&(S=Math.min(S,w),l=Math.max(l,w+H)),t[x]=w,r[x]=w+H,a[x]=Number((h=(u=e[x])==null?void 0:u.densityProfile)==null?void 0:h.linearTerm)??.75,n[x]=Number((C=(R=e[x])==null?void 0:R.densityProfile)==null?void 0:C.constantTerm)??.25,o[x]=Number((g=e[x])==null?void 0:g.densityScale)||0,i[x]=Number((A=e[x])==null?void 0:A.shapeAmount)??1,s[x]=Number((I=e[x])==null?void 0:I.shapeDetailAmount)??1,c[x]=Number((P=e[x])==null?void 0:P.weatherExponent)??1,d[x]=Number((O=e[x])==null?void 0:O.shapeAlteringBias)??.35,f[x]=Number((L=e[x])==null?void 0:L.coverageFilterWidth)??.6,p[x]=Number((F=e[x])==null?void 0:F.coverage)??.3}const T=this._getIntervalHeights(),_=Number.isFinite(S)?S:750;return{bottomRadius:Number(this.params.bottomRadius)||6378137,cloudBottomHeight:_,cloudTopHeight:Math.max(0,l-_)||1500,shadowBottomHeight:_,shadowTopHeight:l||_+1500,shadowFar:Number(this.params.shadowFar)||Number(this.params.maxShadowLengthRayDistance)||2e5,maxShadowLengthRayDistance:Number(this.params.maxShadowLengthRayDistance)||2e5,shadowSplitLambda:Number(this.params.shadowSplitLambda)||.5,shadowFadeScale:Number(this.params.shadowFadeScale)||1,weatherRepeat:Number(this.params.weatherRepeat)||100,windSpeed:Number(this.params.windSpeed)||0,shapeRepeat:(Number(this.params.shapeRepeat)||3)/1e4,shapeDetailRepeat:Number(this.params.shapeDetailRepeat)||.006,turbulenceRepeat:Number(this.params.turbulenceRepeat)||2,turbulenceDisplacement:Number(this.params.turbulenceDisplacement)||400,coverage:Math.max(...p),densityScale:Math.max(...o),scatteringCoefficient:Number(this.params.scatteringCoefficient)??.9,absorptionCoefficient:Number(this.params.absorptionCoefficient)??1,startTime:0,evolutionSpeed:Number(this.params.evolutionSpeed)||.005,maxSteps:this.params.maxSteps,minStepSize:this.params.minStepSize,minDensity:this.params.minDensity??1e-5,minExtinction:this.params.minExtinction??1e-5,minTransmittance:this.params.minTransmittance??.01,opticalDepthTailScale:1,minLayerHeights:t,maxLayerHeights:r,densityProfileLinear:a,densityProfileConstant:n,densityProfileExpTerms:[0,0,0,0],densityProfileExponents:[0,0,0,0],densityScales:o,shapeAmounts:i,shapeDetailAmounts:s,weatherExponents:c,shapeAlteringBiases:d,coverageFilterWidths:f,coverages:p,minIntervalHeights:[T.min.x,T.min.y,T.min.z],maxIntervalHeights:[T.max.x,T.max.y,T.max.z],localWeatherOffset:[0,0],shapeOffset:[0,0,0],shapeDetailOffset:[0,0,0]}}_createCloudStage(e,t){if(!this._cloudSplitMode)return new Cesium.PostProcessStage({name:"GeospatialVolumetricClouds",fragmentShader:e,uniforms:t});const r=new Cesium.PostProcessStage({name:"GeospatialVolumetricCloudsRay",fragmentShader:e,uniforms:t,textureScale:this._cloudResolutionScale}),a=`
uniform sampler2D colorTexture;
uniform sampler2D u_cloudTexture;
in vec2 v_textureCoordinates;
void main() {
  vec4 scene = texture(colorTexture, v_textureCoordinates);
  vec4 cloud = texture(u_cloudTexture, v_textureCoordinates);
  out_FragColor = vec4(scene.rgb * (1.0 - cloud.a) + cloud.rgb, scene.a);
}`,n=new Cesium.PostProcessStage({name:"GeospatialVolumetricCloudsCompose",fragmentShader:a,uniforms:{u_cloudTexture:r.name}});return new Cesium.PostProcessStageComposite({name:"GeospatialVolumetricClouds",stages:[r,n],inputPreviousStageTexture:!1})}setCloudResolutionScale(e){var n,o,i,s;const t=Math.min(1,Math.max(.25,Number(e)||1));if(this.params.cloudResolutionScale=t,!this._cloudShaderSplit||!this._cloudShaderLegacy||!this.cloudStage||Math.abs(t-(this._cloudResolutionScale??1))<.001)return!1;const r=(o=(n=this.viewer)==null?void 0:n.scene)==null?void 0:o.postProcessStages;if(!r)return!1;const a=this.cloudStage.enabled;try{r.remove(this.cloudStage)}catch{}return this._cloudResolutionScale=t,this._cloudSplitMode=t<.999,this.cloudStage=this._createCloudStage(this._cloudSplitMode?this._cloudShaderSplit:this._cloudShaderLegacy,this._cloudUniforms),this.cloudStage.enabled=a,r.add(this.cloudStage),this._cloudStageRebuiltFlag=!0,(s=(i=this.viewer.scene).requestRender)==null||s.call(i),!0}consumeCloudStageRebuilt(){const e=this._cloudStageRebuiltFlag===!0;return this._cloudStageRebuiltFlag=!1,e}async init(){return this._ready?this._ready:(this._ready=(async()=>{const e=this.viewer;e.scene.globe.depthTestAgainstTerrain=!0,this.atmosphere=new at(e,{atmosphereParams:this.atmosphereParams,renderSky:!0,applyGroundAtmosphere:!1,autoAddStage:!1,enableGui:!1,assetsBaseUrl:this.atmosphereAssetsBase,shaderBaseUrl:this.atmosphereShaderBase}),await this.atmosphere.init(),this.aerial=new it(e,{atmosphereParams:this.atmosphereParams,autoAddStage:!1,assetsBaseUrl:this.atmosphereAssetsBase,shaderBaseUrl:this.atmosphereShaderBase}),await this._loadTextures();const t=Math.min(1,Math.max(.25,Number(this.params.cloudResolutionScale)||1));this._cloudResolutionScale=t,this._cloudSplitMode=t<.999;const[r,a]=await Promise.all([this._buildCloudFragmentShader(!0),this._buildCloudFragmentShader(!1)]);this._cloudShaderSplit=r,this._cloudShaderLegacy=a,this._ensureBSMPasses(),this._cloudUniforms=this._buildCloudUniforms(),this.cloudStage=this._createCloudStage(this._cloudSplitMode?this._cloudShaderSplit:this._cloudShaderLegacy,this._cloudUniforms),this.cloudStage.enabled=this.params.cloudsVisible,await this.aerial.init();const n=e.scene.postProcessStages;this.atmosphere.stage&&n.add(this.atmosphere.stage),this.aerial.stage&&n.add(this.aerial.stage),n.add(this.cloudStage),this._listeners.push(e.scene.preRender.addEventListener(()=>{var i,s;const o=this._getClockElapsedSeconds();this._lastClockElapsedSeconds!==void 0&&Math.abs(o-this._lastClockElapsedSeconds)>1e-6&&((s=(i=e.scene).requestRender)==null||s.call(i)),this._syncBSM()})),this._listeners.push(e.scene.postRender.addEventListener(()=>{this._taaUpdateVP(),this.params.temporalEnabled&&!this._cloudSplitMode&&this._taaCapture(),this._frameCount++})),this._listeners.push(e.camera.changed.addEventListener(()=>{var f,p,S,l,T,_;const o=Cesium.Cartographic.fromCartesian(e.camera.positionWC,e.scene.globe.ellipsoid);Number(o==null?void 0:o.height);const i=Number(((_=(T=(l=(S=(p=(f=this.atmosphere)==null?void 0:f.getAtmosphereForClouds)==null?void 0:p.call(f))==null?void 0:S.getUniforms)==null?void 0:l.call(S))==null?void 0:T.bottomRadius)==null?void 0:_.call(T))??NaN),s=Number.isFinite(i)?i:Number(this.params.bottomRadius)||0,c=this._getAltitudeCorrectionOffset(s),d=Cesium.Cartesian3.add(e.camera.positionWC,c,new Cesium.Cartesian3);Math.max(0,Cesium.Cartesian3.magnitude(d)-s)})),this.enableGui&&this._setupGUI()})(),this._ready)}destroy(){var r,a,n,o,i,s,c,d,f;for(const p of this._listeners)typeof p=="function"&&p();this._listeners=[];const e=(a=(r=this.viewer)==null?void 0:r.scene)==null?void 0:a.postProcessStages;if(e&&this.cloudStage)try{e.remove(this.cloudStage)}catch{}this.cloudStage=null;try{(n=this.aerial)==null||n.destroy()}catch{}this.aerial=null;try{(o=this.atmosphere)==null||o.destroy()}catch{}this.atmosphere=null;try{this._destroyBSMPasses({disableShadow:!1})}catch{}const t=(c=(s=(i=this.viewer)==null?void 0:i.scene)==null?void 0:s.context)==null?void 0:c._gl;if(t&&(this._bsm.blitFbo&&t.deleteFramebuffer(this._bsm.blitFbo),this._bsm.blitProg&&t.deleteProgram(this._bsm.blitProg),this._bsm.blitVbo&&t.deleteBuffer(this._bsm.blitVbo),this._taa.texA&&t.deleteTexture(this._taa.texA),this._taa.texB&&t.deleteTexture(this._taa.texB),this._taa.pbo&&t.deleteBuffer(this._taa.pbo)),this._bsm={pass:null,resolve:null,blitFbo:null,blitProg:null,blitVbo:null,blitLoc:null},this._bsmResourceSignature=null,this._bsmSharedTexture=null,this._taa={texA:null,texB:null,current:0,pbo:null,pboReady:!1,w:0,h:0,frameCount:0,prevVP:null,curVP:null},this.textures){for(const p in this.textures)try{(f=(d=this.textures[p])==null?void 0:d.destroy)==null||f.call(d)}catch{}this.textures=null}this._gui&&(this._gui.destroy(),this._gui=null),this._ready=null}}async function bt(m,e={}){const{assets:t,atmosphereParams:r,...a}=e,o=a.cloudsAssetsBase||a.atmosphereAssetsBase||a.brunetonShaderBase?{}:St(t??{mode:"cdn"}),i=new xt(m,{atmosphereParams:r??new he,enableGui:!1,...o,...a});return await i.init(),i}export{bt as createCloudAtmosphere};
