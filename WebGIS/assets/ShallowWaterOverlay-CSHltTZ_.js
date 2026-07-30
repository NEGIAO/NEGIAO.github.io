import{o as we,r as Y,w as fe,E as Ge,I as qe,V as Be,f as Ve,a as Ke}from"./vendor-vue-QjxL4X9Q.js";import{C as Z,R as J,N as xe,L as de,S as Xe,a as je,b as me,V as Q,W as Oe,A as $e,P as Qe,M as q,c as F,d as Ye,e as ve,f as A,B as Ze,g as L,h as Je,i as Ne,j as et,G as tt,D as at,H as ot,k as pe,l as he,m as nt,n as rt,o as it,p as lt,q as ct,r as st,s as ut,U as ft,t as dt,u as ge,O as mt,T as vt,v as pt}from"./vendor-three-Dm5RPYnA.js";import{_ as ht}from"./index-D2ewlDQt.js";import"./vendor-axios-BP3Np6Vt.js";import"./vendor-runtime-Dp1pzeXC.js";const gt=`
  uniform float uTime;
  uniform float uCaustic;
  varying vec3 vCWorld;

  float causticX( vec2 uv ) {
    vec2 p = mod( uv * 6.28318530718, 6.28318530718 ) - 250.0;
    vec2 i = vec2( p );
    float c = 1.0;
    float inten = 0.005;

    for ( int n = 0; n < 5; n++ ) {
      float t = uTime * 0.5 * ( 1.0 - ( 3.5 / float( n + 1 ) ) );
      i = p + vec2( cos( t - i.x ) + sin( t + i.y ), sin( t - i.y ) + cos( t + i.x ) );
      c += 1.0 / length( vec2( p.x / ( sin( i.x + t ) / inten ), p.y / ( cos( i.y + t ) / inten ) ) );
    }

    c /= 5.0;
    c = 1.17 - pow( c, 1.4 );
    return pow( abs( c ), 8.0 );
  }
`;function ye(t,p){t.onBeforeCompile=m=>{m.uniforms.uTime=p.uTime,m.uniforms.uCaustic=p.uCaustic,m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vCWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
`+gt).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  float cDepth = smoothstep( 0.0, -2.0, vCWorld.y );
  float caus = causticX( vCWorld.xz * 0.06 );
  caus += causticX( vCWorld.xz * 0.13 + 40.0 ) * 0.6;
  totalEmissiveRadiance += vec3( 0.45, 0.85, 0.8 ) * caus * cDepth * uCaustic;`)}}const yt=`
  uniform float uTime;
  uniform float waveHeight;
  varying vec3 vWorldPos;
  varying float vEyeDepth;
  varying vec3 vWaveNormal;
  varying vec2 vWorldUv;

  float wv(vec2 p, vec2 d, float f, float a, float s) {
    return a * sin(dot(p, normalize(d)) * f + uTime * s);
  }

  float h(vec2 p) {
    float v = 0.0;
    v += wv(p, vec2(0.2, 1.0), 0.040, 1.0, 0.9);
    v += wv(p, vec2(1.0, 0.3), 0.055, 0.6, 1.1);
    v += wv(p, vec2(-0.6, 0.7), 0.090, 0.35, 1.5);
    return v;
  }

  void main() {
    vec2 wp = vec2(position.x, -position.y);
    float e = 1.5;

    float H  = h(wp) * waveHeight;
    float Hx = h(wp + vec2(e, 0.0)) * waveHeight;
    float Hz = h(wp + vec2(0.0, e)) * waveHeight;

    vWaveNormal = normalize(vec3(-(Hx - H) / e, 1.0, -(Hz - H) / e));
    vWorldUv = wp;

    vec3 disp = position;
    disp.z += H;
    vec4 wpos = modelMatrix * vec4(disp, 1.0);
    vWorldPos = wpos.xyz;

    vec4 mv = viewMatrix * wpos;
    vEyeDepth = -mv.z;

    gl_Position = projectionMatrix * mv;
  }
`,wt=`
  precision highp float;

  uniform sampler2D tRefraction;
  uniform sampler2D tDepth;
  uniform sampler2D normalMap;
  uniform samplerCube tEnv;

  uniform mat4 invProjection;
  uniform mat4 camWorld;

  uniform vec2 resolution;
  uniform float cameraNear;
  uniform float cameraFar;

  uniform float uTime;
  uniform float clarity;
  uniform float foamWidth;
  uniform float reflection;

  uniform vec3 sunDirection;
  uniform vec3 sunColor;
  uniform vec3 waterColor;
  uniform vec3 absorption;
  uniform vec3 foamColor;

  varying vec3 vWorldPos;
  varying float vEyeDepth;
  varying vec3 vWaveNormal;
  varying vec2 vWorldUv;

  float sat(float x) {
    return clamp(x, 0.0, 1.0);
  }

  vec3 reconWorld(vec2 uvc, float d) {
    vec4 clip = vec4(uvc * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
    vec4 vpos = invProjection * clip;
    vpos /= vpos.w;
    return (camWorld * vpos).xyz;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution;

    vec3 n1 = texture2D(normalMap, vWorldUv * 0.025 + uTime * vec2(0.02, 0.015)).xyz * 2.0 - 1.0;
    vec3 n2 = texture2D(normalMap, vWorldUv * 0.060 - uTime * vec2(0.015, 0.02)).xyz * 2.0 - 1.0;
    vec3 normal = normalize(vWaveNormal + vec3(n1.x + n2.x, 0.0, n1.y + n2.y) * 0.45);

    vec2 refrUV = clamp(uv + normal.xz * 0.05, vec2(0.001), vec2(0.999));
    vec3 fpos = reconWorld(refrUV, texture2D(tDepth, refrUV).x);

    if (fpos.y > vWorldPos.y - 0.05) {
      refrUV = uv;
      fpos = reconWorld(uv, texture2D(tDepth, uv).x);
    }

    float depth = max(vWorldPos.y - fpos.y, 0.0);
    vec3 refr = texture2D(tRefraction, refrUV).rgb;

    vec3 transmit = exp(-depth * absorption * clarity);
    vec3 throughWater = refr * transmit + waterColor * (1.0 - transmit);

    vec3 viewDir = normalize(vWorldPos - cameraPosition);
    vec3 refl = textureCube(tEnv, reflect(viewDir, normal)).rgb;
    float fres = 0.02 + 0.98 * pow(1.0 - sat(dot(normal, -viewDir)), 5.0);
    vec3 color = mix(throughWater, refl, fres * reflection);

    float foam = 1.0 - smoothstep(0.0, foamWidth, depth);
    float fn = texture2D(normalMap, vWorldUv * 0.08 + uTime * 0.04).r;
    foam *= smoothstep(0.35, 0.85, fn + foam * 0.4);
    color = mix(color, foamColor, sat(foam));

    vec3 hf = normalize(sunDirection - viewDir);
    float spec = pow(max(dot(normal, hf), 0.0), 280.0);
    color += sunColor * spec * 2.2;

    color = pow(clamp(color, 0.0, 1.0), vec3(1.0 / 2.2));
    gl_FragColor = vec4(color, 1.0);
  }
`,xt=`
  varying vec3 vWorldPos;

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Ct=`
  precision highp float;

  uniform sampler2D uNoise;
  uniform vec3 sunDirection;
  uniform vec3 sunColor;
  uniform vec3 skyTint;
  uniform vec3 uFlashPos;
  uniform float uTime;
  uniform float uCoverage;
  uniform float uFlash;

  varying vec3 vWorldPos;

  const float CMIN = 600.0;
  const float CMAX = 1700.0;

  const mat3 m = mat3(
    0.00, 0.80, 0.60,
    -0.80, 0.36, -0.48,
    -0.60, -0.48, 0.64
  );

  float noise(in vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);

    vec2 uv = (p.xy + vec2(37.0, 239.0) * p.z) + f.xy;
    vec2 rg = texture2D(uNoise, (uv + 0.5) / 256.0).yx;
    return mix(rg.x, rg.y, f.z);
  }

  float density(vec3 wp) {
    float h = (wp.y - CMIN) / (CMAX - CMIN);
    if (h < 0.0 || h > 1.0) return 0.0;

    vec3 q = wp * 0.0022 - vec3(uTime * 0.06, 0.0, uTime * 0.03);

    float f;
    f  = 0.50000 * noise(q); q = m * q * 2.02;
    f += 0.25000 * noise(q); q = m * q * 2.03;
    f += 0.12500 * noise(q); q = m * q * 2.01;
    f += 0.06250 * noise(q); q = m * q * 2.02;
    f += 0.03125 * noise(q);

    float shape = smoothstep(0.0, 0.30, h) * smoothstep(1.0, 0.55, h);

    return clamp((f - (1.0 - uCoverage)) * shape * 2.6, 0.0, 1.0);
  }

  void main() {
    vec3 ro = cameraPosition;
    vec3 rd = normalize(vWorldPos - ro);

    if (rd.y < 0.02) discard;

    float tEnter = max((CMIN - ro.y) / rd.y, 0.0);
    float tExit = (CMAX - ro.y) / rd.y;

    const float STEPS = 48.0;
    float dt = (tExit - tEnter) / STEPS;

    float jit = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    vec3 p = ro + rd * (tEnter + dt * jit);
    vec3 sdir = normalize(sunDirection);

    vec4 sum = vec4(0.0);

    for (int i = 0; i < 48; i++) {
      if (sum.a > 0.99) break;

      float den = density(p);
      if (den > 0.01) {
        float dif = clamp((den - density(p + sdir * 60.0)) / 0.5, 0.0, 1.0);
        vec3 lin = skyTint * 1.1 + sunColor * 2.2 * dif;

        vec4 col = vec4(mix(vec3(1.0, 0.98, 0.92), vec3(0.30, 0.36, 0.45), den), den);
        col.rgb *= lin;

        float fd = length(p.xz - uFlashPos.xz);
        col.rgb += vec3(0.6, 0.75, 1.0) * uFlash * exp(-fd * 0.0016) * den;

        col.a *= 0.5;
        col.rgb *= col.a;
        sum += col * (1.0 - sum.a);
      }

      p += rd * dt;
    }

    float alpha = sum.a * smoothstep(0.02, 0.14, rd.y);
    if (alpha < 0.01) discard;

    vec3 col = sum.rgb / max(sum.a, 0.0001);

    col = (col * (2.51 * col + 0.03)) / (col * (2.43 * col + 0.59) + 0.14);

    col = pow(clamp(col, 0.0, 1.0), vec3(1.0 / 2.2));
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;function Mt(t=256){const p=new Float32Array(t*t);for(let a=0;a<t*t;a++)p[a]=Math.random();const m=(a,i)=>{const x=new Float32Array(t*t);for(let c=0;c<t;c++)for(let y=0;y<t;y++){let d=0,k=0;for(let T=-i;T<=i;T++)for(let b=-i;b<=i;b++)d+=a[(c+T+t)%t*t+(y+b+t)%t],k++;x[c*t+y]=d/k}return x},r=m(p,4),C=m(p,1),M=new Float32Array(t*t);for(let a=0;a<t*t;a++)M[a]=r[a]*.7+C[a]*.3;const s=document.createElement("canvas");s.width=s.height=t;const u=s.getContext("2d"),n=u.createImageData(t,t),f=(a,i)=>M[(i+t)%t*t+(a+t)%t],g=3;for(let a=0;a<t;a++)for(let i=0;i<t;i++){const x=(f(i-1,a)-f(i+1,a))*g,c=(f(i,a-1)-f(i,a+1))*g,y=Math.hypot(x,c,1),d=(a*t+i)*4;n.data[d]=(x/y*.5+.5)*255,n.data[d+1]=(c/y*.5+.5)*255,n.data[d+2]=(1/y*.5+.5)*255,n.data[d+3]=255}u.putImageData(n,0,0);const h=new Z(s);return h.wrapS=h.wrapT=J,h.colorSpace=xe,h}function bt(){const t=document.createElement("canvas");t.width=t.height=512;const p=t.getContext("2d");p.fillStyle="#d8c79b",p.fillRect(0,0,512,512);for(let r=0;r<12e3;r++){const C=170+Math.random()*70|0;p.fillStyle=`rgba(${C},${C-22},${C-65},0.22)`,p.fillRect(Math.random()*512,Math.random()*512,1.6,1.6)}for(let r=0;r<26;r++){const C=60+Math.random()*40|0,M=90+Math.random()*50|0,s=70+Math.random()*40|0;p.fillStyle=`rgba(${C},${M},${s},0.30)`,p.beginPath(),p.ellipse(Math.random()*512,Math.random()*512,8+Math.random()*26,6+Math.random()*20,Math.random()*6,0,7),p.fill()}const m=new Z(t);return m.wrapS=m.wrapT=J,m.repeat.set(10,10),m.colorSpace=Xe,m}function St(t=256){const p=(f,g)=>{const h=new Float32Array(t*t);for(let a=0;a<t;a++)for(let i=0;i<t;i++){let x=0,c=0;for(let y=-g;y<=g;y++)for(let d=-g;d<=g;d++)x+=f[(a+y+t)%t*t+(i+d+t)%t],c++;h[a*t+i]=x/c}return h},m=()=>{const f=new Float32Array(t*t);for(let c=0;c<t*t;c++)f[c]=Math.random();const g=p(f,3),h=p(f,1),a=new Float32Array(t*t);let i=1e9,x=-1e9;for(let c=0;c<t*t;c++)a[c]=g[c]*.65+h[c]*.35,i=Math.min(i,a[c]),x=Math.max(x,a[c]);for(let c=0;c<t*t;c++)a[c]=(a[c]-i)/(x-i);return a},r=m(),C=m(),M=document.createElement("canvas");M.width=M.height=t;const s=M.getContext("2d"),u=s.createImageData(t,t);for(let f=0;f<t*t;f++){const g=f*4;u.data[g]=r[f]*255,u.data[g+1]=C[f]*255,u.data[g+2]=0,u.data[g+3]=255}s.putImageData(u,0,0);const n=new Z(M);return n.wrapS=n.wrapT=J,n.colorSpace=xe,n.minFilter=de,n.magFilter=de,n.generateMipmaps=!1,n}function Wt(t={}){const{onReady:p,onError:m,onFpsUpdate:r}=t,C=Y(!1),M=Y(0);let s=null,u=null,n=null,f=null,g=null,h=null,a=null,i=null,x=null,c=null,y=null,d=null,k=null;const T=new F;let b=null,W=null,U=null;const N=new je;let B=0,V=0;const I={value:0},G={value:.9},K={value:0},ee={value:new F};let te=3,ae=-100;const X=.62,z={};let j=!0,H=null;const O=new me,S={elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2};async function Ce(e){if(!e){m==null||m(new Error("Container element not provided"));return}if(!C.value){h=e;try{n=new Oe({antialias:!0,alpha:!0}),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(h.clientWidth,h.clientHeight),n.toneMapping=$e,n.toneMappingExposure=X,n.setClearColor(0,0),h.appendChild(n.domElement),s=new me,u=new Qe(55,h.clientWidth/h.clientHeight,1,2e4),u.position.set(0,55,280),Me(),Te(),Ee(),be(),Se(),We(),De(),ze(),Re(),He(),ie(),C.value=!0,p==null||p()}catch(o){m==null||m(o)}}}function Me(){d=new Ye,d.scale.setScalar(12e3),s.add(d);const e=d.material.uniforms;e.turbidity.value=6,e.rayleigh.value=1.6,e.mieCoefficient.value=.005,e.mieDirectionalG.value=.8}function be(){k=new at(16774368,2.6),s.add(k),s.add(new ot(13627391,2117738,.7))}function Se(){const e=new pe(1600,1600,200,200);e.rotateX(-Math.PI/2);const o=e.attributes.position;for(let w=0;w<o.count;w++){const v=o.getX(w),D=o.getZ(w);let E=-34+q.clamp((D+800)/1600,0,1)*44;E+=Math.sin(v*.012)*Math.cos(D*.014)*3.5,E+=Math.sin(v*.06+D*.05)*1.1,E+=(Math.random()-.5)*.6,o.setY(w,E)}e.computeVertexNormals();const l=new he({map:bt(),roughness:1,metalness:0});ye(l,{uTime:I,uCaustic:G}),s.add(new L(e,l))}function We(){const e=new nt(1,0),o=[8023642,7035722,11887946,13598051,9083483];for(let l=0;l<30;l++){const w=new he({color:o[l%o.length],roughness:.9,flatShading:!0});ye(w,{uTime:I,uCaustic:G});const v=new L(e,w),D=3+Math.random()*9;v.scale.set(D,D*(.5+Math.random()*.6),D),v.position.set((Math.random()-.5)*1100,-24+Math.random()*22,-300+Math.random()*900),v.rotation.set(Math.random(),Math.random(),Math.random()),s.add(v)}}function De(){y=new rt(n),c=new it(256,{generateMipmaps:!0,minFilter:lt}),x=new ct(1,2e4,c),x.position.set(0,4,0),s.add(x);const e=new Q;n.getDrawingBufferSize(e),i=new st(e.x,e.y),i.depthTexture=new ut(e.x,e.y),i.depthTexture.type=ft,i.depthTexture.format=dt}function ze(){const e=new Q;n.getDrawingBufferSize(e);const o=Mt(256),l={uTime:I,tRefraction:{value:i.texture},tDepth:{value:i.depthTexture},tEnv:{value:c.texture},normalMap:{value:o},resolution:{value:e.clone()},cameraNear:{value:u.near},cameraFar:{value:u.far},invProjection:{value:new ge},camWorld:{value:new ge},sunDirection:{value:new F},sunColor:{value:new A(16774106)},waterColor:{value:new A(S.waterColor)},absorption:{value:new F(.45,.09,.05)},foamColor:{value:new A(15925247)},clarity:{value:S.clarity},foamWidth:{value:S.foamWidth},waveHeight:{value:S.waveHeight},reflection:{value:S.reflection}};a=new L(new pe(16e3,16e3,384,384),new ve({uniforms:l,vertexShader:yt,fragmentShader:wt})),a.rotation.x=-Math.PI/2,s.add(a)}function Te(){const e=new ve({side:Ze,transparent:!0,depthWrite:!1,uniforms:{uTime:I,uNoise:{value:St(256)},sunDirection:{value:new F},sunColor:{value:new A(16773341)},skyTint:{value:new A(7315406)},uCoverage:{value:S.cloudCoverage},uFlash:K,uFlashPos:ee},vertexShader:xt,fragmentShader:Ct});b=new L(new Je(8e3,32,16),e),b.renderOrder=2,s.add(b)}function Ee(){U=new Ne({color:14478335,transparent:!0,opacity:0,blending:et,depthWrite:!1,depthTest:!1}),W=new tt,W.visible=!1,s.add(W)}function oe(e,o,l,w,v,D){const P=[];let E=e,_=o;const R=Math.max(5,Math.floor((l-w)/80));for(let $=0;$<=R;$++){const Ue=$/R;P.push(new F(E,l+(w-l)*Ue,_)),E+=(Math.random()-.5)*v,_+=(Math.random()-.5)*v}const Le=new vt(new pt(P),R*4,D,5,!1),ue=new L(Le,U);return ue.renderOrder=3,W.add(ue),P}function Fe(){for(const w of W.children)w.geometry.dispose();W.clear();const e=1+Math.floor(Math.random()*3);let o=0,l=0;for(let w=0;w<e;w++){const v=(Math.random()-.5)*5e3,D=-(1e3+Math.random()*4500);w===0&&(o=v,l=D);const P=oe(v,D,1180,18,110,14),E=2+Math.floor(Math.random()*3);for(let _=0;_<E;_++){const R=P[2+Math.floor(Math.random()*(P.length-4))];oe(R.x,R.z,R.y,R.y-(160+Math.random()*420),130,7)}}ee.value.set(o,1100,l)}function ke(){if(!S.lightningEnabled){K.value=0,W.visible=!1,n.toneMappingExposure=X;return}const e=I.value;e>=te&&(ae=e,Fe(),te=e+S.lightningInterval*(.4+Math.random()*.8));const o=e-ae;let l=0;o>=0&&o<.5&&(l=Math.max(0,Math.exp(-o*5.5)*(.5+.5*Math.sin(o*60)))),K.value=l*2.4,W.visible=l>.1,U.opacity=Math.min(1,l*1.7),n.toneMappingExposure=X+l*.75}function Re(){f=new mt(u,n.domElement),f.target.set(0,130,-400),f.maxPolarAngle=Math.PI*.49,f.minDistance=30,f.maxDistance=2e3,f.enableDamping=!0}function He(){window.addEventListener("keydown",ne),window.addEventListener("keyup",re)}function ne(e){const o=e.target&&e.target.tagName;o==="INPUT"||o==="TEXTAREA"||(z[e.code]=!0)}function re(e){z[e.code]=!1}function Pe(e){const o=(z.ShiftLeft||z.ShiftRight?240:95)*e,l=new F,w=new F,v=new F;u.getWorldDirection(l).normalize(),w.crossVectors(l,u.up).normalize(),v.set(0,0,0),z.KeyW&&v.add(l),z.KeyS&&v.addScaledVector(l,-1),z.KeyD&&v.add(w),z.KeyA&&v.addScaledVector(w,-1),z.KeyE&&(v.y+=1),z.KeyQ&&(v.y-=1),v.lengthSq()!==0&&(v.normalize().multiplyScalar(o),u.position.add(v),f.target.add(v),u.position.y<2.5&&(u.position.y=2.5))}function ie(){const e=q.degToRad(90-S.elevation),o=q.degToRad(S.azimuth);if(T.setFromSphericalCoords(1,e,o),d.material.uniforms.sunPosition.value.copy(T),k.position.copy(T).multiplyScalar(1e3),a&&a.material.uniforms.sunDirection.value.copy(T).normalize(),b){b.material.uniforms.sunDirection.value.copy(T).normalize();const l=q.clamp(1-S.elevation/28,0,1);b.material.uniforms.sunColor.value.setRGB(1,.95-.22*l,.86-.48*l)}s.remove(d),O.add(d),H&&H.dispose(),H=y.fromScene(O),s.environment=H.texture,O.remove(d),s.add(d),j=!0}function le(){g=requestAnimationFrame(le);const e=N.getDelta();I.value+=e,G.value=S.causticStrength,Pe(e),ke(),f.update(),u.updateMatrixWorld(),a.material.uniforms.invProjection.value.copy(u.projectionMatrixInverse),a.material.uniforms.camWorld.value.copy(u.matrixWorld),a.visible=!1,j&&(x.update(n,s),j=!1),b.visible=!1;const o=W.visible;W.visible=!1,n.setRenderTarget(i),n.render(s,u),n.setRenderTarget(null),b.visible=!0,W.visible=o,a.visible=!0,n.render(s,u),B++;const l=performance.now();l-V>=1e3&&(M.value=Math.round(B*1e3/(l-V)),r==null||r(M.value),B=0,V=l)}function Ie(){if(!u||!n||!h)return;const e=h.clientWidth,o=h.clientHeight;u.aspect=e/o,u.updateProjectionMatrix(),n.setSize(e,o);const l=new Q;n.getDrawingBufferSize(l),i.setSize(l.x,l.y),a.material.uniforms.resolution.value.copy(l)}function _e(){g||(N.start(),le())}function ce(){g&&(cancelAnimationFrame(g),g=null)}function Ae(e){const o={...S};Object.assign(S,e),(e.elevation!==o.elevation||e.azimuth!==o.azimuth)&&ie(),a&&(e.clarity!==o.clarity&&(a.material.uniforms.clarity.value=e.clarity),e.waveHeight!==o.waveHeight&&(a.material.uniforms.waveHeight.value=e.waveHeight),e.foamWidth!==o.foamWidth&&(a.material.uniforms.foamWidth.value=e.foamWidth),e.reflection!==o.reflection&&(a.material.uniforms.reflection.value=e.reflection),e.waterColor!==o.waterColor&&a.material.uniforms.waterColor.value.set(e.waterColor)),e.causticStrength!==o.causticStrength&&(G.value=e.causticStrength),e.cloudCoverage!==o.cloudCoverage&&b&&(b.material.uniforms.uCoverage.value=e.cloudCoverage)}function se(){ce(),window.removeEventListener("keydown",ne),window.removeEventListener("keyup",re),n&&(n.dispose(),h==null||h.removeChild(n.domElement)),s==null||s.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(o=>o.dispose()):e.material.dispose())}),i==null||i.dispose(),c==null||c.dispose(),H==null||H.dispose(),y==null||y.dispose(),s=null,u=null,n=null,f=null,a=null,d=null,k=null,b=null,W=null,U=null,C.value=!1}return we(()=>{se()}),{isReady:C,fps:M,init:Ce,start:_e,pause:ce,dispose:se,handleResize:Ie,updateParams:Ae}}const Dt={__name:"ShallowWaterOverlay",props:{visible:{type:Boolean,default:!1},elevation:{type:Number,default:30},azimuth:{type:Number,default:150},clarity:{type:Number,default:.085},causticStrength:{type:Number,default:.9},waterColor:{type:String,default:"#2bb3c4"},waveHeight:{type:Number,default:.5},foamWidth:{type:Number,default:2.4},reflection:{type:Number,default:.38},cloudCoverage:{type:Number,default:.58},lightningEnabled:{type:Boolean,default:!0},lightningInterval:{type:Number,default:2}},emits:["ready","error","fps-update"],setup(t,{expose:p,emit:m}){const r=t,C=m,M=Y(null),{isReady:s,fps:u,init:n,start:f,pause:g,dispose:h,handleResize:a,updateParams:i}=Wt({onReady:()=>C("ready"),onError:d=>C("error",d),onFpsUpdate:d=>C("fps-update",d)});fe(()=>r.visible,async d=>{d?(await x(),f()):g()}),fe(()=>[r.elevation,r.azimuth,r.clarity,r.causticStrength,r.waterColor,r.waveHeight,r.foamWidth,r.reflection,r.cloudCoverage,r.lightningEnabled,r.lightningInterval],()=>{c()});async function x(){!M.value||s.value||(await n(M.value),c())}function c(){i({elevation:r.elevation,azimuth:r.azimuth,clarity:r.clarity,causticStrength:r.causticStrength,waterColor:r.waterColor,waveHeight:r.waveHeight,foamWidth:r.foamWidth,reflection:r.reflection,cloudCoverage:r.cloudCoverage,lightningEnabled:r.lightningEnabled,lightningInterval:r.lightningInterval})}function y(){a()}return Ge(()=>{window.addEventListener("resize",y),r.visible&&x()}),we(()=>{window.removeEventListener("resize",y),h()}),p({isReady:s,fps:u,start:f,pause:g}),(d,k)=>qe((Ve(),Ke("div",{ref_key:"canvasContainerRef",ref:M,class:"shallow-water-overlay"},null,512)),[[Be,t.visible]])}},Rt=ht(Dt,[["__scopeId","data-v-97fcb297"]]);export{Rt as default};
