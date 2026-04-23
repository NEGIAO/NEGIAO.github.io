# Wind2D 类生成提示词

> 本文档描述了一个基于 Cesium 的多层 2D 风场粒子可视化类的完整实现原理与规格，供 AI Agent 据此生成等价的 `Wind2D` 类代码。

---

## 1. 概述

生成一个 ES Module 导出的 `Wind2D` 类，用于在 Cesium 三维地球上渲染**多层非均匀网格**的 2D 风场可视化。核心特征：

- **纹理图集（Texture Atlas）**：将所有高度层的风场数据打包到一张 2D 纹理中，避免 GLSL ES 无法用变量索引 sampler 数组的限制
- **GPU 驱动粒子模拟**：粒子位置更新完全在片段着色器中完成，零 CPU-GPU 数据回读
- **双缓冲（Ping-Pong）**：粒子位置纹理和速度纹理各两份，交替读写
- **箭头 + 尾迹渲染**：每个粒子生成 6 个顶点构成箭头与尾迹线段
- **空洞数据支持**：通过 Alpha 通道标记无效数据区域，粒子在空洞区自动重生
- **多层垂直插值**：粒子可根据高度在相邻层之间线性插值获取风速
- **可见层过滤**：支持运行时切换可见的高度层范围

**必须使用 WebGL 2**（需要 `#version 300 es`、`RGBA16F` 纹理格式、MRT 输出）。

---

## 2. 类接口规格

### 2.1 构造函数

```js
constructor(viewer: Cesium.Viewer, options?: Wind2DOptions)
```

### 2.2 配置选项（Wind2DOptions）

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `speedFactor` | number | 1.0 | 粒子移动速度倍率 |
| `cullSpeedMin` | number | 0.0 | 速度剔除下限 (m/s)，低于此值的粒子隐藏 |
| `cullSpeedMax` | number | 15.0 | 速度剔除上限 (m/s)，高于此值的粒子隐藏 |
| `windSpeedMin` | number | 0.0 | 颜色映射速度下限 (m/s) |
| `windSpeedMax` | number | 15.0 | 颜色映射速度上限 (m/s) |
| `arrowLength` | number | 15000.0 | 箭头长度（米） |
| `trailLength` | number | 20000.0 | 尾迹长度（米） |
| `decaySpeed` | number | 0.005 | 粒子衰老速率，越大寿命越短 |
| `alphaFactor` | number | 1.0 | 全局透明度因子 (0-1) |
| `maxWindSpeed` | number | 15.0 | 归一化用最大风速 (m/s) |

### 2.3 公有方法

| 方法 | 签名 | 说明 |
|---|---|---|
| `loadData` | `(apiData: Object) => void` | 加载 API 微尺度气象数据 |
| `update` | `(frameState: Cesium.FrameState) => void` | 每帧调用，驱动粒子更新与渲染 |
| `setParticleCount` | `(count: number) => void` | 设置粒子数量（自动取最近 2 的幂） |
| `setParticleDensity` | `(density: number) => void` | 设置密度倍率（实际粒子数 = dataPointCount × density） |
| `setBounds` | `(minLon, maxLon, minLat, maxLat) => void` | 手动设置风场边界 |
| `flyTo` | `() => void` | 相机飞到风场中心上方 2000km |
| `destroy` | `() => void` | 销毁所有 GPU 资源 |
| `isDestroyed` | `() => boolean` | 查询是否已销毁 |

### 2.4 公有属性（运行时可修改）

| 属性 | 类型 | 说明 |
|---|---|---|
| `speedFactor` | number | 粒子移动速度倍率 |
| `cullSpeedMin` / `cullSpeedMax` | number | 速度剔除范围 |
| `windSpeedMin` / `windSpeedMax` | number | 颜色映射范围 |
| `arrowLength` | number | 箭头长度（米） |
| `trailLength` | number | 尾迹长度（米） |
| `decaySpeed` | number | 衰减速率 |
| `alphaFactor` | number | 透明度因子 |
| `maxWindSpeed` | number | 最大风速 |
| `visibleLayerMin` / `visibleLayerMax` | number | 可见高度层索引范围 |
| `particleDensity` | number | 粒子密度倍率 |

---

## 3. 数据加载规格（loadData）

### 3.1 输入数据格式

```js
{
  longitude: Number,       // 风场中心经度
  latitude: Number,        // 风场中心纬度
  altitude: Number[],      // 各层海拔（米）
  sizeMesh: Number[],      // 各层网格水平间距（米）
  count: Number[],         // 各层水平网格数（nx = ny = count[k]）
  hspeed: Number[],        // 水平风速 (m/s)，所有层展平为一维
  hdir: Number[],          // 水平风向（度），同上
  vspeed: Number[],        // 垂直气流 (m/s)，同上
}
```

### 3.2 数据处理流程

1. 从 `altitude.length` 得到层数 `layerCount`，设 `visibleLayerMax = layerCount - 1`
2. 计算 `maxNx = maxNy = Math.max(...count)`
3. 图集尺寸：`atlasW = maxNx`，`atlasH = maxNy * layerCount`
4. 构建 `Float32Array(atlasW * atlasH * 4)` 图集数据：
   - 对每层 k，对每个网格点 (i, j)：
     - 计算源索引：`srcIdx = offset + j * nx + i`（offset 为前 k 层的总点数）
     - 计算目标索引：`dstIdx = ((k * maxNy + j) * atlasW + i) * 4`
     - 极坐标→笛卡尔：`u = speed * sin(dir_rad)`，`v = speed * cos(dir_rad)`，`w = vspeed`
     - 数据有效性检查：`hdir` 和 `hspeed` 均为有限数 → `alpha = 1.0`，否则 `alpha = 0.0`
   - 无效区域（如建筑物遮挡）写入 `(0, 0, 0, 0)`
5. 通过 WebGL2 原生接口创建 `RGBA16F` 纹理（见 4.2）
6. 根据中心经纬度和网格尺寸计算风场边界（经纬度范围）
7. 调用 `_updateTransform()` 计算模型矩阵
8. 调用 `setParticleDensity()` 根据数据点数自动设置粒子数
9. 设 `_needsRebuild = true`

### 3.3 边界计算

```
totalSizeMeters = maxNx * maxSizeMesh（maxSizeMesh = Math.max(...sizeMesh)）
halfSizeDeg = totalSizeMeters / 2.0 / 111320.0
halfSizeLonDeg = totalSizeMeters / 2.0 / (111320.0 * cos(latitude * π / 180))
bounds = {
  minLon: longitude - halfSizeLonDeg,
  maxLon: longitude + halfSizeLonDeg,
  minLat: latitude - halfSizeDeg,
  maxLat: latitude + halfSizeDeg,
  minHeight: Math.min(...altitude),
  maxHeight: Math.max(...altitude),
}
```

---

## 4. 纹理系统

### 4.1 粒子位置纹理

- **尺寸**：`particlesTextureSize × particlesTextureSize`（2 的幂，16 ~ 2048）
- **格式**：`RGBA / FLOAT`（Cesium 封装）
- **采样**：NEAREST
- **初始数据**：随机 [0,1)
- **编码**：
  - **R(x)**: 归一化经度 [0, 1]
  - **G(y)**: 归一化纬度 [0, 1]
  - **B(z)**: 归一化高度 [0, 1]
  - **A(w)**: 打包值 = `floor(normalizedSpeed * 255) + age`
    - 整数部分 = 归一化速度 × 255（0-255）
    - 小数部分 = 粒子年龄 [0, 1)

### 4.2 风场图集纹理

- **尺寸**：`atlasW × atlasH`
- **格式**：`RGBA16F`（WebGL2 原生，半精度浮点）
- **采样**：LINEAR，CLAMP_TO_EDGE
- **数据布局**：

```
┌─────────────────────┐  ← 层 0: 行 [0, maxNy)
│  Layer 0 (maxNx×maxNy)  │
├─────────────────────┤  ← 层 1: 行 [maxNy, 2*maxNy)
│  Layer 1               │
├─────────────────────┤
│  ...                   │
├─────────────────────┤  ← 层 k: 行 [k*maxNy, (k+1)*maxNy)
│  Layer k               │
└─────────────────────┘
```

- **通道含义**：R=u(东西风), G=v(南北风), B=w(垂直风), A=有效性(1=有效/0=空洞)
- **创建方式**：必须绕过 Cesium 纹理封装，直接使用 `gl.createTexture()` + `gl.texImage2D()` + `RGBA16F` 内部格式

### 4.3 速度纹理

- 与粒子位置纹理同尺寸
- 格式：`RGBA / FLOAT`，NEAREST 采样
- 初始全零
- 存储：`vec4(windU, windV, windW, 0)`

### 4.4 双缓冲

位置纹理和速度纹理各两份（index 0 和 1），`particleState` 在 0/1 间交替：

```
帧 N:   读 [particleState]  →  Update Shader  →  写 [1 - particleState]
帧 N+1: particleState 翻转，重复
```

### 4.5 帧缓冲

两个 Framebuffer，各挂载一组位置+速度纹理作为颜色附件（MRT）：
- FBO 0: colorTextures = [particlesTextures[0], velocityTextures[0]]
- FBO 1: colorTextures = [particlesTextures[1], velocityTextures[1]]
- `destroyAttachments: false`（纹理生命周期由类管理）

---

## 5. 变换系统

### 5.1 坐标系

以风场边界中心为原点，建立 **ENU（东北天）局部坐标系**：

```js
centerPos = Cartesian3.fromDegrees(centerLon, centerLat, centerHeight)
modelMatrix = Transforms.eastNorthUpToFixedFrame(centerPos)
```

同时缓存：
- `_centerCartesian`：中心点 ECEF 坐标
- `_centerLonRad` / `_centerLatRad`：中心经纬度（弧度）

### 5.2 变换更新时机

- `loadData()` 加载数据后
- `setBounds()` 手动设置边界后

---

## 6. 着色器规格

### 6.1 全屏 Quad 顶点着色器（Update 用）

```glsl
#version 300 es
in vec2 position;
in vec2 textureCoordinates;
out vec2 v_textureCoordinates;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  v_textureCoordinates = textureCoordinates;
}
```

顶点数据：标准全屏四边形 `[-1,-1], [1,-1], [1,1], [-1,1]`，索引 `[0,1,2,0,2,3]`。

### 6.2 Update 片段着色器

**输入 Uniforms**：

| Uniform | 类型 | 说明 |
|---|---|---|
| `currentParticlesPosition` | sampler2D | 当前粒子位置纹理 |
| `windAtlas` | sampler2D | 风场图集纹理 |
| `speedFactor` | float | 速度倍率 |
| `maxWindSpeed` | float | 最大风速 |
| `decaySpeed` | float | 衰减速率 |
| `layerCount` | int | 高度层数 |
| `maxNx` / `maxNy` | float | 图集最大网格维度 |
| `atlasW` / `atlasH` | float | 图集像素尺寸 |
| `visibleLayerMin` / `visibleLayerMax` | int | 可见层范围 |

**MRT 输出**：

```glsl
layout(location = 0) out vec4 positionOut;   // 新位置
layout(location = 1) out vec4 velocityOut;   // 速度向量
```

**核心逻辑**：

1. 采样当前粒子位置：`pos = particle.xyz`，`age = fract(particle.w)`
2. 年龄递增：`age += decaySpeed`
3. 若 `age > 1.0`：重生，`age = 0`，`pos` 设为基于纹理坐标的伪随机值（三个分量的哈希函数不同）
4. 调用 `sampleWind(pos)` 获取风速：
   - 根据 `pos.z` 查找上下两层的索引（线性搜索，max 64 次迭代）
   - 层边界：第 i 层中心 = `(i + 0.5) / layerCount`
   - 调用 `sampleLayer(layerIdx, pos.xy)` 分别采样上下层：
     - 计算 UV：`u = pos.x * maxNx / atlasW`，`v = layerStartV + pos.y * (layerEndV - layerStartV)`
     - `layerStartV = layerIdx * maxNy / atlasH`
     - `layerEndV = (layerIdx + 1) * maxNy / atlasH`
   - 可见层过滤：若任一层不在 [visibleLayerMin, visibleLayerMax] 内 → 返回 `(0,0,0,0)`
   - 空洞检查：若任一层 `w < 0.5` → 返回 `(0,0,0,0)`
   - 线性插值：`t = clamp((z - zLower) / (zUpper - zLower), 0, 1)`，`mix(windLower.xyz, windUpper.xyz, t)`
5. 空洞处理：若 `isValid < 0.5` → 粒子立即重生（age=0, pos 随机化），输出位置 alpha 为 0
6. 位置更新：`pos += windVector * speedFactor * 0.001`
7. 位置回绕：各分量超出 [0,1] 时回绕
8. 输出打包：`positionOut = vec4(pos, floor(normalizedSpeed * 255) + age)`，`velocityOut = vec4(windVector, 0)`

### 6.3 Draw 顶点着色器

**输入**：

| Uniform | 类型 | 说明 |
|---|---|---|
| `currentParticlesPosition` | sampler2D | 粒子位置纹理 |
| `velocityTexture` | sampler2D | 速度纹理 |
| `particlesTextureSize` | float | 纹理尺寸 |
| `arrowLength` | float | 箭头长度（米） |
| `trailLength` | float | 尾迹长度（米） |
| `speedMin` / `speedMax` | float | 归一化剔除范围 |
| `boundsMinLon/MaxLon/MinLat/MaxLat` | float | 风场边界（弧度） |
| `boundsMinHeight/MaxHeight` | float | 高度边界（米） |
| `centerECEF` | vec3 | 中心点 ECEF 坐标 |
| `centerLonRad` / `centerLatRad` | float | 中心经纬度（弧度） |

**顶点属性**：`particleIndex` (float)，每个粒子 6 个顶点（索引 0-5）。

**核心逻辑**：

1. 计算粒子 ID 和顶点类型：`pIdx = floor(particleIndex / 6)`，`vType = particleIndex - pIdx * 6`
2. 从粒子纹理采样：计算 UV `(u, v)`，读取位置和速度
3. 解包：`age = fract(packed)`，`speed = floor(packed) / 255.0`
4. 速度剔除：超出范围 → `v_culled = 1.0`
5. 归一化位置 → 经纬度高度：`lon = mix(minLon, maxLon, posNorm.x)` 等
6. 经纬度高度 → **ECEF**：使用 WGS84 椭球参数 `a=6378137, e²=0.00669437999014`
7. ECEF → **局部坐标系**：`localPos = ecefToLocal * (ecefPos - centerECEF)`
   - `ecefToLocal = transpose(enuToECEFMat(centerLon, centerLat))`
8. 速度向量转到局部坐标系：先转 ENU→ECEF，再 ECEF→Local
9. 构建**箭头几何**（6 顶点 = 3 条线段）：
   - `forward` = 归一化速度方向
   - `right` = `cross(forward, up)`，归一化
   - `tip = localPos + forward * arrowLength`
   - `tail = localPos - forward * trailLength`
   - `headBase = tip - forward * headLen`（headLen = arrowLength × 0.3）
   - `leftWing = headBase + right * headWidth`（headWidth = arrowLength × 0.15）
   - `rightWing = headBase - right * headWidth`
   - 顶点分配：vType=0→tail, 1→tip, 2→tip, 3→leftWing, 4→tip, 5→rightWing
10. 剔除粒子：`v_culled > 0.5` → `gl_Position = vec4(0.0)`

### 6.4 Draw 片段着色器

**输入 Varying**：`v_age` (float), `v_speed` (float), `v_culled` (float)

**核心逻辑**：

1. 剔除：`v_culled > 0.5` → `discard`
2. 透明度：`alpha = (1.0 - v_age) * alphaFactor`（越老越透明）
3. 颜色映射：将 `v_speed` 归一化到 [colorSpeedMin, colorSpeedMax] 范围后映射颜色：
   - `[0, 0.25)`: 蓝 `(0,0,1)` → 青 `(0,1,1)`
   - `[0.25, 0.5)`: 青 → 绿 `(0,1,0)`
   - `[0.5, 0.75)`: 绿 → 黄 `(1,1,0)`
   - `[0.75, 1.0]`: 黄 → 红 `(1,0,0)`
4. 输出：`out_FragColor = vec4(color, alpha)`

---

## 7. 渲染管线

### 7.1 帧循环（update 方法）

每帧被 Cesium 的 `Primitive` 回调 `update(frameState)` 触发：

1. 若无风场纹理或已销毁 → 直接返回
2. 若命令未创建或 `_needsRebuild` → 重建命令和帧缓冲
3. 执行 Update 命令：
   - 设置 `framebuffer` 为对侧缓冲（`1 - particleState`）
   - 调用 `drawCommand.execute(context)`
4. 将 Draw 命令推入 `frameState.commandList`（Cesium 负责在 TRANSLUCENT pass 执行）
5. 翻转 `particleState`

### 7.2 Update 命令

- **类型**：`Cesium.DrawCommand`
- **顶点数组**：全屏 Quad（4 顶点 + 6 索引，TRIANGLES）
- **视口**：`BoundingRectangle(0, 0, particlesTextureSize, particlesTextureSize)`
- **帧缓冲**：动态设置，指向对侧缓冲
- **着色器**：GLSL 300 es，MRT 输出

### 7.3 Draw 命令

- **类型**：`Cesium.DrawCommand`
- **顶点数组**：粒子索引缓冲（每个粒子 6 顶点，`LINES` 模式）
- **模型矩阵**：`_modelMatrix`（ENU 变换）
- **渲染状态**：
  - 深度测试：enabled, writeMask=false
  - 混合：ALPHA_BLEND
- **Pass**：`Cesium.Pass.TRANSLUCENT`
- **uniform 中的速度剔除/颜色范围**：需要将 m/s 值除以 `maxWindSpeed` 归一化后传入 shader

---

## 8. 粒子索引缓冲

每个粒子生成 6 个顶点（构成箭头+尾迹的 3 条线段），总顶点数 = `particlesCount × 6`。

索引缓冲内容：`Float32Array [0, 1, 2, ..., totalVertices-1]`

每个顶点的 `particleIndex` 值编码了粒子 ID 和顶点类型：
- `pIdx = floor(particleIndex / 6)`
- `vType = particleIndex - pIdx * 6`

---

## 9. 粒子纹理尺寸计算

```js
setParticleCount(count) {
  gpuMaxSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  maxTextureSize = Math.min(2048, gpuMaxSize)
  size = Math.max(16, Math.min(maxTextureSize, 2^round(log2(sqrt(count)))))
  // 若 size 未变化则跳过
  // 否则：销毁旧纹理/缓冲，重建
}
```

---

## 10. 资源管理

### 10.1 创建的资源清单

| 资源 | 数量 | 创建方式 |
|---|---|---|
| 粒子位置纹理 | 2 | `Cesium.Texture` (RGBA/FLOAT, NEAREST) |
| 速度纹理 | 2 | `Cesium.Texture` (RGBA/FLOAT, NEAREST) |
| 风场图集纹理 | 1 | 原生 WebGL2 `RGBA16F` |
| 帧缓冲 | 2 | `Cesium.Framebuffer` (MRT, 2 color attachments) |
| 全屏 Quad VA | 1 | 缓存复用 |
| 粒子索引 VB | 1 | 粒子数变化时重建 |
| Update DrawCommand | 1 | 需要时重建 |
| Draw DrawCommand | 1 | 需要时重建 |

### 10.2 销毁

`destroy()` 方法必须释放所有纹理、帧缓冲、顶点数组、索引缓冲。设 `_isDestroyed = true` 防止后续操作。

---

## 11. 注册到 Cesium

类需要以 `Cesium.Primitive` 方式注册到 `viewer.scene.primitives`：

```js
viewer.scene.primitives.add(wind2DInstance)
```

因此类实例必须实现 `update(frameState)` 和 `isDestroyed()` 接口，符合 Cesium Primitive 协议。

---

## 12. 关键实现注意事项

1. **WebGL2 必须**：风场图集使用 `RGBA16F` 格式，shader 使用 `#version 300 es`，必须检查 `context.webgl2`
2. **图集纹理创建绕过 Cesium**：Cesium 的 `Texture` 类不直接支持 `RGBA16F`，需通过 `context._gl` 原生 WebGL2 API 创建，但封装为与 Cesium uniform 兼容的对象（包含 `_texture`、`_target`、`destroy()`）
3. **MRT 帧缓冲**：Update shader 同时输出位置和速度到两个颜色附件，`Cesium.Framebuffer` 的 `colorTextures` 接受数组
4. **uniform 速度归一化**：传给 Draw shader 的 `speedMin`/`speedMax` 是归一化后的值（原始 m/s 值除以 `maxWindSpeed`），不是原始物理量
5. **粒子重生伪随机**：使用基于纹理坐标的哈希函数，三个维度使用不同系数避免周期性
6. **位置回绕**：更新后各归一化分量超出 [0,1] 时回绕（`x < 0 ? x+1 : x > 1 ? x-1 : x`），实现周期边界
7. **Shader 中的层查找**：使用线性搜索（max 64 次迭代），适用于层数较少的场景；层数多时可优化为二分查找
8. **czm_modelViewProjection**：Draw shader 顶点着色器使用 Cesium 内置 uniform `czm_modelViewProjection`，需在模型空间输出顶点位置
9. **out_FragColor**：Draw 片段着色器需使用 Cesium 兼容的输出变量名 `out_FragColor`
10. **setParticleCount 中的资源重建**：改变粒子数后需销毁旧纹理/帧缓冲并重建，设 `_needsRebuild = true` 触发命令重建

---

## 13. 使用示例

```js
import Wind2D from './Wind2D'

const wind2D = new Wind2D(viewer, {
  maxWindSpeed: 15,
  speedFactor: 1.0,
  arrowLength: 15000,
  trailLength: 20000,
})

viewer.scene.primitives.add(wind2D)

// 加载 API 数据
const apiData = await fetch('/api/wind').then(r => r.json())
wind2D.loadData(apiData.data)

// 飞到风场区域
wind2D.flyTo()

// 运行时调参
wind2D.speedFactor = 2.0
wind2D.visibleLayerMin = 2
wind2D.visibleLayerMax = 5
wind2D.setParticleDensity(1.5)

// 销毁
wind2D.destroy()
```
