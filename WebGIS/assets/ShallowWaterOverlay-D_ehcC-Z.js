import{o as Ce,r as N,w as me,E as Be,J as Ve,V as Ke,f as Xe,a as je}from"./vendor-vue-DFe8dmUm.js";import{e as Oe,_ as $e}from"./index-BVixnRiQ.js";import{C as ee,R as te,N as Me,L as ve,S as Je,a as Qe,b as pe,V as Z,W as Ye,A as Ze,P as Ne,M as V,c as k,d as et,e as he,f as G,B as tt,g as q,h as at,i as ot,j as nt,G as rt,D as it,H as lt,k as ge,l as ye,m as st,n as ct,o as ut,p as ft,q as dt,r as mt,s as vt,U as pt,t as ht,u as we,O as gt,T as yt,v as wt}from"./vendor-three-Dm5RPYnA.js";import"./vendor-axios-BP3Np6Vt.js";import"./vendor-runtime-Dp1pzeXC.js";import"./vendor-lucide-D5caXXyd.js";const xt=`
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
`;function xe(t,p){t.onBeforeCompile=f=>{f.uniforms.uTime=p.uTime,f.uniforms.uCaustic=p.uCaustic,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vCWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
`+xt).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  float cDepth = smoothstep( 0.0, -2.0, vCWorld.y );
  float caus = causticX( vCWorld.xz * 0.06 );
  caus += causticX( vCWorld.xz * 0.13 + 40.0 ) * 0.6;
  totalEmissiveRadiance += vec3( 0.45, 0.85, 0.8 ) * caus * cDepth * uCaustic;`)}}const Ct=`
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
`,Mt=`
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
`,bt=`
  varying vec3 vWorldPos;

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,St=`
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
`;function Wt(t=256){const p=new Float32Array(t*t);for(let a=0;a<t*t;a++)p[a]=Math.random();const f=(a,r)=>{const v=new Float32Array(t*t);for(let c=0;c<t;c++)for(let g=0;g<t;g++){let h=0,S=0;for(let R=-r;R<=r;R++)for(let F=-r;F<=r;F++)h+=a[(c+R+t)%t*t+(g+F+t)%t],S++;v[c*t+g]=h/S}return v},l=f(p,4),b=f(p,1),w=new Float32Array(t*t);for(let a=0;a<t*t;a++)w[a]=l[a]*.7+b[a]*.3;const M=document.createElement("canvas");M.width=M.height=t;const u=M.getContext("2d"),s=u.createImageData(t,t),n=(a,r)=>w[(r+t)%t*t+(a+t)%t],m=3;for(let a=0;a<t;a++)for(let r=0;r<t;r++){const v=(n(r-1,a)-n(r+1,a))*m,c=(n(r,a-1)-n(r,a+1))*m,g=Math.hypot(v,c,1),h=(a*t+r)*4;s.data[h]=(v/g*.5+.5)*255,s.data[h+1]=(c/g*.5+.5)*255,s.data[h+2]=(1/g*.5+.5)*255,s.data[h+3]=255}u.putImageData(s,0,0);const C=new ee(M);return C.wrapS=C.wrapT=te,C.colorSpace=Me,C}function zt(){const t=document.createElement("canvas");t.width=t.height=512;const p=t.getContext("2d");p.fillStyle="#d8c79b",p.fillRect(0,0,512,512);for(let l=0;l<12e3;l++){const b=170+Math.random()*70|0;p.fillStyle=`rgba(${b},${b-22},${b-65},0.22)`,p.fillRect(Math.random()*512,Math.random()*512,1.6,1.6)}for(let l=0;l<26;l++){const b=60+Math.random()*40|0,w=90+Math.random()*50|0,M=70+Math.random()*40|0;p.fillStyle=`rgba(${b},${w},${M},0.30)`,p.beginPath(),p.ellipse(Math.random()*512,Math.random()*512,8+Math.random()*26,6+Math.random()*20,Math.random()*6,0,7),p.fill()}const f=new ee(t);return f.wrapS=f.wrapT=te,f.repeat.set(10,10),f.colorSpace=Je,f}function Dt(t=256){const p=(n,m)=>{const C=new Float32Array(t*t);for(let a=0;a<t;a++)for(let r=0;r<t;r++){let v=0,c=0;for(let g=-m;g<=m;g++)for(let h=-m;h<=m;h++)v+=n[(a+g+t)%t*t+(r+h+t)%t],c++;C[a*t+r]=v/c}return C},f=()=>{const n=new Float32Array(t*t);for(let c=0;c<t*t;c++)n[c]=Math.random();const m=p(n,3),C=p(n,1),a=new Float32Array(t*t);let r=1e9,v=-1e9;for(let c=0;c<t*t;c++)a[c]=m[c]*.65+C[c]*.35,r=Math.min(r,a[c]),v=Math.max(v,a[c]);for(let c=0;c<t*t;c++)a[c]=(a[c]-r)/(v-r);return a},l=f(),b=f(),w=document.createElement("canvas");w.width=w.height=t;const M=w.getContext("2d"),u=M.createImageData(t,t);for(let n=0;n<t*t;n++){const m=n*4;u.data[m]=l[n]*255,u.data[m+1]=b[n]*255,u.data[m+2]=0,u.data[m+3]=255}M.putImageData(u,0,0);const s=new ee(w);return s.wrapS=s.wrapT=te,s.colorSpace=Me,s.minFilter=ve,s.magFilter=ve,s.generateMipmaps=!1,s}function Tt(t={}){const{onReady:p,onError:f,onFpsUpdate:l}=t,b=Oe(),w=N(!1),M=N(0);let u=null,s=null,n=null,m=null,C=null,a=null,r=null,v=null,c=null,g=null,h=null,S=null,R=null;const F=new k;let W=null,D=null,P=null,I=null;const ae=new Qe;let K=0,X=0;const A={value:0},B={value:.9},j={value:0},oe={value:new k};let ne=3,re=-100;const O=.62,E={};let $=!0,_=null;const J=new pe,z={elevation:30,azimuth:150,clarity:.085,causticStrength:.9,waterColor:"#2bb3c4",waveHeight:.5,foamWidth:2.4,reflection:.38,cloudCoverage:.58,lightningEnabled:!0,lightningInterval:2};async function be(e){if(!e){f==null||f(new Error("Container element not provided"));return}if(!w.value){a=e;try{n=new Ye({antialias:!0,alpha:!0}),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(a.clientWidth,a.clientHeight),n.toneMapping=Ze,n.toneMappingExposure=O,n.setClearColor(0,0),a.appendChild(n.domElement),u=new pe,s=new Ne(55,a.clientWidth/a.clientHeight,1,2e4),s.position.set(0,55,280),Se(),Fe(),ke(),We(),ze(),De(),Te(),Ee(),Pe(),_e(),ce(),w.value=!0,p==null||p()}catch(o){f==null||f(o)}}}function Se(){S=new et,S.scale.setScalar(12e3),u.add(S);const e=S.material.uniforms;e.turbidity.value=6,e.rayleigh.value=1.6,e.mieCoefficient.value=.005,e.mieDirectionalG.value=.8}function We(){R=new it(16774368,2.6),u.add(R),u.add(new lt(13627391,2117738,.7))}function ze(){const e=new ge(1600,1600,200,200);e.rotateX(-Math.PI/2);const o=e.attributes.position;for(let i=0;i<o.count;i++){const y=o.getX(i),d=o.getZ(i);let x=-34+V.clamp((d+800)/1600,0,1)*44;x+=Math.sin(y*.012)*Math.cos(d*.014)*3.5,x+=Math.sin(y*.06+d*.05)*1.1,x+=(Math.random()-.5)*.6,o.setY(i,x)}e.computeVertexNormals(),I=new ye({map:zt(),roughness:1,metalness:0}),xe(I,{uTime:A,uCaustic:B}),u.add(new q(e,I))}function De(){const e=new st(1,0),o=[8023642,7035722,11887946,13598051,9083483];for(let i=0;i<30;i++){const y=new ye({color:o[i%o.length],roughness:.9,flatShading:!0});xe(y,{uTime:A,uCaustic:B});const d=new q(e,y),T=3+Math.random()*9;d.scale.set(T,T*(.5+Math.random()*.6),T),d.position.set((Math.random()-.5)*1100,-24+Math.random()*22,-300+Math.random()*900),d.rotation.set(Math.random(),Math.random(),Math.random()),u.add(d)}}function Te(){h=new ct(n),g=new ut(256,{generateMipmaps:!0,minFilter:ft}),c=new dt(1,2e4,g),c.position.set(0,4,0),u.add(c);const e=new Z;n.getDrawingBufferSize(e),v=new mt(e.x,e.y),v.depthTexture=new vt(e.x,e.y),v.depthTexture.type=pt,v.depthTexture.format=ht}function Ee(){const e=new Z;n.getDrawingBufferSize(e);const o=Wt(256),i={uTime:A,tRefraction:{value:v.texture},tDepth:{value:v.depthTexture},tEnv:{value:g.texture},normalMap:{value:o},resolution:{value:e.clone()},cameraNear:{value:s.near},cameraFar:{value:s.far},invProjection:{value:new we},camWorld:{value:new we},sunDirection:{value:new k},sunColor:{value:new G(16774106)},waterColor:{value:new G(z.waterColor)},absorption:{value:new k(.45,.09,.05)},foamColor:{value:new G(15925247)},clarity:{value:z.clarity},foamWidth:{value:z.foamWidth},waveHeight:{value:z.waveHeight},reflection:{value:z.reflection}};r=new q(new ge(16e3,16e3,384,384),new he({uniforms:i,vertexShader:Ct,fragmentShader:Mt})),r.rotation.x=-Math.PI/2,u.add(r)}function Fe(){const e=new he({side:tt,transparent:!0,depthWrite:!1,uniforms:{uTime:A,uNoise:{value:Dt(256)},sunDirection:{value:new k},sunColor:{value:new G(16773341)},skyTint:{value:new G(7315406)},uCoverage:{value:z.cloudCoverage},uFlash:j,uFlashPos:oe},vertexShader:bt,fragmentShader:St});W=new q(new at(8e3,32,16),e),W.renderOrder=2,u.add(W)}function ke(){P=new ot({color:14478335,transparent:!0,opacity:0,blending:nt,depthWrite:!1,depthTest:!1}),D=new rt,D.visible=!1,u.add(D)}function ie(e,o,i,y,d,T){const x=[];let L=e,U=o;const H=Math.max(5,Math.floor((i-y)/80));for(let Y=0;Y<=H;Y++){const qe=Y/H;x.push(new k(L,i+(y-i)*qe,U)),L+=(Math.random()-.5)*d,U+=(Math.random()-.5)*d}const Ge=new yt(new wt(x),H*4,T,5,!1),de=new q(Ge,P);return de.renderOrder=3,D.add(de),x}function Re(){for(const y of D.children)y.geometry.dispose();D.clear();const e=1+Math.floor(Math.random()*3);let o=0,i=0;for(let y=0;y<e;y++){const d=(Math.random()-.5)*5e3,T=-(1e3+Math.random()*4500);y===0&&(o=d,i=T);const x=ie(d,T,1180,18,110,14),L=2+Math.floor(Math.random()*3);for(let U=0;U<L;U++){const H=x[2+Math.floor(Math.random()*(x.length-4))];ie(H.x,H.z,H.y,H.y-(160+Math.random()*420),130,7)}}oe.value.set(o,1100,i)}function He(){if(!z.lightningEnabled){j.value=0,D.visible=!1,n.toneMappingExposure=O;return}const e=A.value;e>=ne&&(re=e,Re(),ne=e+z.lightningInterval*(.4+Math.random()*.8));const o=e-re;let i=0;o>=0&&o<.5&&(i=Math.max(0,Math.exp(-o*5.5)*(.5+.5*Math.sin(o*60)))),j.value=i*2.4,D.visible=i>.1,P.opacity=Math.min(1,i*1.7),n.toneMappingExposure=O+i*.75}function Pe(){m=new gt(s,n.domElement),m.target.set(0,130,-400),m.maxPolarAngle=Math.PI*.49,m.minDistance=30,m.maxDistance=2e3,m.enableDamping=!0}function _e(){window.addEventListener("keydown",le),window.addEventListener("keyup",se)}function le(e){const o=e.target&&e.target.tagName;o==="INPUT"||o==="TEXTAREA"||(E[e.code]=!0)}function se(e){E[e.code]=!1}function Ie(e){const o=(E.ShiftLeft||E.ShiftRight?240:95)*e,i=new k,y=new k,d=new k;s.getWorldDirection(i).normalize(),y.crossVectors(i,s.up).normalize(),d.set(0,0,0),E.KeyW&&d.add(i),E.KeyS&&d.addScaledVector(i,-1),E.KeyD&&d.add(y),E.KeyA&&d.addScaledVector(y,-1),E.KeyE&&(d.y+=1),E.KeyQ&&(d.y-=1),d.lengthSq()!==0&&(d.normalize().multiplyScalar(o),s.position.add(d),m.target.add(d),s.position.y<2.5&&(s.position.y=2.5))}function ce(){const e=V.degToRad(90-z.elevation),o=V.degToRad(z.azimuth);if(F.setFromSphericalCoords(1,e,o),S.material.uniforms.sunPosition.value.copy(F),R.position.copy(F).multiplyScalar(1e3),r&&r.material.uniforms.sunDirection.value.copy(F).normalize(),W){W.material.uniforms.sunDirection.value.copy(F).normalize();const i=V.clamp(1-z.elevation/28,0,1);W.material.uniforms.sunColor.value.setRGB(1,.95-.22*i,.86-.48*i)}u.remove(S),J.add(S),_&&_.dispose(),_=h.fromScene(J),u.environment=_.texture,J.remove(S),u.add(S),$=!0}function ue(){C=requestAnimationFrame(ue);try{const e=ae.getDelta();A.value+=e,B.value=z.causticStrength,Ie(e),He(),m.update(),s.updateMatrixWorld(),r.material.uniforms.invProjection.value.copy(s.projectionMatrixInverse),r.material.uniforms.camWorld.value.copy(s.matrixWorld),r.visible=!1,$&&(c.update(n,u),$=!1),W.visible=!1;const o=D.visible;D.visible=!1,n.setRenderTarget(v),n.render(u,s),n.setRenderTarget(null),W.visible=!0,D.visible=o,r.visible=!0,n.render(u,s),K++;const i=performance.now();i-X>=1e3&&(M.value=Math.round(K*1e3/(i-X)),l==null||l(M.value),K=0,X=i)}catch(e){b.error(`浅水渲染异常，已暂停动画: ${(e==null?void 0:e.message)||String(e)}`);try{Q()}catch{}f==null||f(e)}}function Ae(){if(!s||!n||!a)return;const e=a.clientWidth,o=a.clientHeight;s.aspect=e/o,s.updateProjectionMatrix(),n.setSize(e,o);const i=new Z;n.getDrawingBufferSize(i),v.setSize(i.x,i.y),r.material.uniforms.resolution.value.copy(i)}function Le(){C||(ae.start(),ue())}function Q(){C&&(cancelAnimationFrame(C),C=null)}function Ue(e){const o={...z};Object.assign(z,e),(e.elevation!==o.elevation||e.azimuth!==o.azimuth)&&ce(),r&&(e.clarity!==o.clarity&&(r.material.uniforms.clarity.value=e.clarity),e.waveHeight!==o.waveHeight&&(r.material.uniforms.waveHeight.value=e.waveHeight),e.foamWidth!==o.foamWidth&&(r.material.uniforms.foamWidth.value=e.foamWidth),e.reflection!==o.reflection&&(r.material.uniforms.reflection.value=e.reflection),e.waterColor!==o.waterColor&&r.material.uniforms.waterColor.value.set(e.waterColor)),e.causticStrength!==o.causticStrength&&(B.value=e.causticStrength),e.cloudCoverage!==o.cloudCoverage&&W&&(W.material.uniforms.uCoverage.value=e.cloudCoverage)}function fe(){var e,o,i,y,d,T;Q(),window.removeEventListener("keydown",le),window.removeEventListener("keyup",se),n&&(n.dispose(),a==null||a.removeChild(n.domElement)),u==null||u.traverse(x=>{x.geometry&&x.geometry.dispose(),x.material&&(Array.isArray(x.material)?x.material.forEach(L=>L.dispose()):x.material.dispose())}),v==null||v.dispose(),g==null||g.dispose(),_==null||_.dispose(),h==null||h.dispose(),(e=I==null?void 0:I.map)==null||e.dispose(),(o=r.material)==null||o.dispose(),(T=(d=(y=(i=W==null?void 0:W.material)==null?void 0:i.uniforms)==null?void 0:y.uNoise)==null?void 0:d.value)==null||T.dispose(),P==null||P.dispose(),u=null,s=null,n=null,m=null,r=null,S=null,R=null,W=null,D=null,P=null,w.value=!1}return Ce(()=>{fe()}),{isReady:w,fps:M,init:be,start:Le,pause:Q,dispose:fe,handleResize:Ae,updateParams:Ue}}const Et={__name:"ShallowWaterOverlay",props:{visible:{type:Boolean,default:!1},elevation:{type:Number,default:30},azimuth:{type:Number,default:150},clarity:{type:Number,default:.085},causticStrength:{type:Number,default:.9},waterColor:{type:String,default:"#2bb3c4"},waveHeight:{type:Number,default:.5},foamWidth:{type:Number,default:2.4},reflection:{type:Number,default:.38},cloudCoverage:{type:Number,default:.58},lightningEnabled:{type:Boolean,default:!0},lightningInterval:{type:Number,default:2}},emits:["ready","error","fps-update"],setup(t,{expose:p,emit:f}){const l=t,b=f,w=N(null),{isReady:M,fps:u,init:s,start:n,pause:m,dispose:C,handleResize:a,updateParams:r}=Tt({onReady:()=>b("ready"),onError:h=>b("error",h),onFpsUpdate:h=>b("fps-update",h)});me(()=>l.visible,async h=>{h?(await v(),n()):m()}),me(()=>[l.elevation,l.azimuth,l.clarity,l.causticStrength,l.waterColor,l.waveHeight,l.foamWidth,l.reflection,l.cloudCoverage,l.lightningEnabled,l.lightningInterval],()=>{c()});async function v(){!w.value||M.value||(await s(w.value),c())}function c(){r({elevation:l.elevation,azimuth:l.azimuth,clarity:l.clarity,causticStrength:l.causticStrength,waterColor:l.waterColor,waveHeight:l.waveHeight,foamWidth:l.foamWidth,reflection:l.reflection,cloudCoverage:l.cloudCoverage,lightningEnabled:l.lightningEnabled,lightningInterval:l.lightningInterval})}function g(){a()}return Be(()=>{window.addEventListener("resize",g),l.visible&&v()}),Ce(()=>{window.removeEventListener("resize",g),C()}),p({isReady:M,fps:u,start:n,pause:m}),(h,S)=>Ve((Xe(),je("div",{ref_key:"canvasContainerRef",ref:w,class:"shallow-water-overlay"},null,512)),[[Ke,t.visible]])}},It=$e(Et,[["__scopeId","data-v-97fcb297"]]);export{It as default};
