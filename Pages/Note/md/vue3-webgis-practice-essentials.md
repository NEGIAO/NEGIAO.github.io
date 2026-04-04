# Vue 3 实战精要：从基础到 WebGIS 架构思考

> 目标读者：
> 1. 个人复习：快速回顾 Vue 3 核心能力与 WebGIS 工程实践。
> 2. 团队分享：统一编码风格、状态管理约定和地图模块拆分思路。

---

## 1. 响应式核心：Ref vs Reactive

### 核心概念

- `ref`：适合基础类型（`string`、`number`、`boolean`）和单值状态。
- `reactive`：适合对象/数组等结构化状态，访问时不需要 `.value`。
- 关键差异：
  - `ref` 在模板中自动解包，在脚本中必须通过 `.value` 访问。
  - `reactive` 一旦被直接解构，会失去响应式追踪，需要配合 `toRefs`。

> 经验结论：
> **基础值优先 `ref`，聚合配置优先 `reactive`，需要“安全解构”时必须 `toRefs`。**

### 代码示例

```JavaScript
<script setup lang="ts">
import { reactive, ref, toRefs, watch } from 'JavaScript';

// 地图缩放等级属于单值，使用 ref 最直观
const mapZoom = ref(10);

// 地图配置是结构化对象，适合 reactive
const mapConfig = reactive({
  center: [120.0, 30.0] as [number, number],
  projection: 'EPSG:3857',
  minZoom: 3,
  maxZoom: 18
});

// 如果需要解构 reactive 对象，使用 toRefs 保留响应式
const { center, projection, minZoom, maxZoom } = toRefs(mapConfig);

// 监听单值 ref：直接监听 mapZoom 即可
watch(mapZoom, (newZoom, oldZoom) => {
  console.log('Zoom changed:', oldZoom, '->', newZoom);
});

// 监听 reactive 中的字段：推荐用 getter，减少误触发
watch(
  () => mapConfig.center,
  (newCenter) => {
    console.log('Center changed:', newCenter);
  },
  { deep: false }
);
</script>
```

### WebGIS 实战建议

- 地图当前缩放、当前底图 ID、加载状态等“原子状态”用 `ref`。
- 地图初始化参数、图层样式参数、交互开关等“配置包”用 `reactive`。
- 避免在大型项目里混用不一致风格，建议团队约定：
  - `*Id`、`*Visible`、`*Loading` 命名统一使用 `ref`。
  - `*Config`、`*Options` 命名统一使用 `reactive`。

---

## 2. 生命周期钩子：地图初始化与销毁

### 核心概念

- `onMounted`：DOM 就绪后执行，是地图实例化的黄金时机。
- `onUnmounted`：组件销毁前后的清理钩子，必须释放地图实例和事件监听。
- 在地图场景中，忘记清理常导致：
  - 内存泄漏
  - 重复注册监听
  - 组件反复进出后卡顿

> 在 WebGIS 项目里，`onUnmounted` 不是“可选优化”，而是“稳定性底线”。

### 代码示例

```JavaScript
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'JavaScript';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const mapContainerRef = ref<HTMLDivElement | null>(null);
let mapInstance: Map | null = null;
let resizeHandler: (() => void) | null = null;

onMounted(() => {
  // 1) 仅在容器真实挂载后创建地图
  if (!mapContainerRef.value) return;

  mapInstance = new Map({
    target: mapContainerRef.value,
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: [13358338, 3503549],
      zoom: 8,
      projection: 'EPSG:3857'
    })
  });

  // 2) 监听窗口变化，触发地图尺寸重算
  resizeHandler = () => mapInstance?.updateSize();
  window.addEventListener('resize', resizeHandler);
});

onUnmounted(() => {
  // 3) 清理监听，避免重复绑定和内存泄漏
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler);
    resizeHandler = null;
  }

  // 4) 断开地图和 DOM 关系，释放内部资源
  if (mapInstance) {
    mapInstance.setTarget(undefined);
    mapInstance = null;
  }
});
</script>

<template>
  <div ref="mapContainerRef" style="width: 100%; height: 420px"></div>
</template>
```

### WebGIS 实战建议

- 所有地图实例、图层实例、交互实例都要有“创建-清理”对称关系。
- 如果使用 Leaflet，同样在 `onUnmounted` 调用 `map.remove()`。
- 团队代码评审可加入硬性检查项：
  - 有 `onMounted` 创建地图，必须有 `onUnmounted` 清理逻辑。

---

## 3. 计算属性与侦听器：Computed / Watch / WatchEffect

### 核心概念

- `computed`：基于依赖缓存结果，适合纯计算。
- `watch`：用于副作用，如请求接口、驱动地图飞行。
- `watchEffect`：自动收集依赖并立即运行，适合轻量联动。

> 可记忆口诀：
> **有返回值用 `computed`，有副作用用 `watch`，快速联动用 `watchEffect`。**

### 代码示例

```JavaScript
<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'JavaScript';

const zoom = ref(10);
const dpi = 96;
const center = ref<[number, number]>([120.15, 30.28]);

// 根据缩放级别估算分辨率（示意）
const resolution = computed(() => {
  // 156543.033928 为 WebMercator 在 z=0 时的分辨率常数
  return 156543.033928 / Math.pow(2, zoom.value);
});

// 根据分辨率推算比例尺（示意）
const scale = computed(() => {
  return resolution.value * dpi * 39.37;
});

// 监听 URL 参数（或外部状态）变化，触发地图 FlyTo
const urlViewParam = ref('120.15,30.28,11');
watch(urlViewParam, (val) => {
  const [lngStr, latStr, zoomStr] = val.split(',');
  const lng = Number(lngStr);
  const lat = Number(latStr);
  const nextZoom = Number(zoomStr);

  if (Number.isFinite(lng) && Number.isFinite(lat) && Number.isFinite(nextZoom)) {
    center.value = [lng, lat];
    zoom.value = nextZoom;
    // 这里通常调用 map.getView().animate(...) 执行平滑飞行
    console.log('FlyTo target:', center.value, 'zoom:', zoom.value);
  }
});

// 自动追踪依赖，调试当前视图状态
watchEffect(() => {
  console.log('[ViewState]', {
    center: center.value,
    zoom: zoom.value,
    resolution: resolution.value,
    scale: Math.round(scale.value)
  });
});
</script>
```

### WebGIS 实战建议

- 与地图引擎交互时，避免在 `watch` 内做重计算。
- 复杂派生状态统一放在 `computed`，让更新链路可预测。
- `watch` 默认异步批处理，适合接“副作用任务队列”。

---

## 4. 组件通信：Props / Emits / Slots

### 核心概念

- `Props`：父组件向子组件传递数据。
- `Emits`：子组件向父组件回传事件。
- `Slots`：为容器组件预留可插拔内容。

在 WebGIS UI 中非常常见：

- 父组件传底图列表到切换组件（Props）。
- 子组件回传选中的底图 ID（Emits）。
- Popup 容器通过 Slots 注入图文内容（Slots）。

### 代码示例

```JavaScript
<!-- BasemapSwitcher.JavaScript -->
<script setup lang="ts">
interface BasemapItem {
  id: string;
  name: string;
}

const props = defineProps<{
  items: BasemapItem[];
  activeId: string;
}>();

const emit = defineEmits<{
  (event: 'change', id: string): void;
}>();

function handleSelect(id: string) {
  // 通知父组件切换底图
  emit('change', id);
}
</script>

<template>
  <div class="basemap-switcher">
    <button
      v-for="item in props.items"
      :key="item.id"
      :class="['bm-btn', { 'is-active': item.id === props.activeId }]"
      @click="handleSelect(item.id)"
    >
      {{ item.name }}
    </button>
  </div>
</template>
```

---

```Javascript
<!-- PopupContainer.JavaScript -->
<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="map-popup">
    <header>{{ props.title }}</header>
    <main>
      <!-- 插槽让业务内容自由注入 -->
      <slot />
    </main>
  </section>
</template>
```

### WebGIS 实战建议

- 通信边界清晰化：
  - 图层选择、底图选择等操作组件尽量“无状态”，通过 `props + emits` 完成闭环。
- Popup、Panel、Drawer 这类容器组件优先使用 Slots，减少重复组件开发。
- 团队可约定事件命名：
  - 统一 `change:*` 或 `update:*` 前缀，便于检索和维护。

---

## 5. Composables：地图逻辑抽离（重点）

### 核心概念

`Composables` 是 Vue 3 在工程化层面的关键能力。

相比 Vue 2 Mixins，优势是：

- 逻辑来源清晰（按需引入）。
- 避免命名冲突（函数作用域隔离）。
- 更容易复用和单元测试。

WebGIS 项目推荐拆分：

- `useMapCore`：地图实例创建、销毁。
- `useLayerManager`：图层注册、显隐、排序。
- `useMapViewState`：中心点、缩放、视图联动。

### 代码示例

```ts
// useMapCore.ts
import { onMounted, onUnmounted, ref } from 'JavaScript';
import Map from 'ol/Map';
import View from 'ol/View';

export function useMapCore() {
  const mapContainerRef = ref<HTMLDivElement | null>(null);
  const mapRef = ref<Map | null>(null);

  function initMap() {
    if (!mapContainerRef.value || mapRef.value) return;

    mapRef.value = new Map({
      target: mapContainerRef.value,
      layers: [],
      view: new View({
        center: [13358338, 3503549],
        zoom: 8,
        projection: 'EPSG:3857'
      })
    });
  }

  function destroyMap() {
    if (!mapRef.value) return;

    // 解除 DOM 挂载关系，释放地图内部资源
    mapRef.value.setTarget(undefined);
    mapRef.value = null;
  }

  onMounted(initMap);
  onUnmounted(destroyMap);

  return {
    mapContainerRef,
    mapRef,
    initMap,
    destroyMap
  };
}
```

---

```JavaScript
<!-- MapView.JavaScript -->
<script setup lang="ts">
import { watch } from 'JavaScript';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { useMapCore } from '@/composables/useMapCore';

const { mapContainerRef, mapRef } = useMapCore();

watch(mapRef, (map) => {
  if (!map) return;

  // 地图可用后再添加业务图层，避免空引用
  map.addLayer(
    new TileLayer({
      source: new XYZ({
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  );
});
</script>

<template>
  <div ref="mapContainerRef" class="map-shell"></div>
</template>
```

### WebGIS 实战建议

- 地图逻辑抽离优先级高于“页面快速堆功能”，否则后续维护成本会指数上升。
- Composable 返回值建议按“状态 + 行为”组织，便于团队理解。
- 在复杂项目中，将图层、绘制、量测、查询拆成独立 composable，最后在页面层编排。

---

## 6. Pinia：全局图层显隐状态管理

### 核心概念

Pinia 是 Vue 3 推荐状态管理方案，语义简洁且类型友好。

WebGIS 常见全局状态：

- 图层树结构
- 图层显隐状态
- 当前活动工具（量测/绘制/查询）
- 用户偏好（底图、主题、语言）

### 代码示例

```ts
// stores/layerStore.ts
import { computed, ref } from 'JavaScript';
import { defineStore } from 'pinia';

interface LayerNode {
  id: string;
  name: string;
  visible: boolean;
}

export const useLayerStore = defineStore('layer-store', () => {
  // 全局图层列表
  const layers = ref<LayerNode[]>([
    { id: 'base-osm', name: 'OSM底图', visible: true },
    { id: 'road-net', name: '路网图层', visible: true },
    { id: 'poi-label', name: '兴趣点标注', visible: false }
  ]);

  // getter: 当前可见图层数
  const visibleCount = computed(() => layers.value.filter((l) => l.visible).length);

  // action: 切换单个图层显隐
  function toggleLayerVisible(layerId: string) {
    const target = layers.value.find((l) => l.id === layerId);
    if (!target) return;
    target.visible = !target.visible;
  }

  // action: 批量设置显隐
  function setAllVisible(visible: boolean) {
    layers.value.forEach((layer) => {
      layer.visible = visible;
    });
  }

  return {
    layers,
    visibleCount,
    toggleLayerVisible,
    setAllVisible
  };
});
```

---


```JavaScript
<!-- LayerPanel.JavaScript -->
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLayerStore } from '@/stores/layerStore';

const layerStore = useLayerStore();
const { layers, visibleCount } = storeToRefs(layerStore);

function onToggle(id: string) {
  layerStore.toggleLayerVisible(id);

  // 实战中这里通常还会同步调用地图引擎图层 setVisible
  // 例如: olLayerMap.get(id)?.setVisible(newValue)
}
</script>

<template>
  <aside>
    <h3>图层管理（可见 {{ visibleCount }} 个）</h3>

    <label v-for="layer in layers" :key="layer.id" style="display: block; margin: 8px 0;">
      <input
        type="checkbox"
        :checked="layer.visible"
        @change="onToggle(layer.id)"
      />
      {{ layer.name }}
    </label>
  </aside>
</template>
```

### WebGIS 实战建议

- 把“UI 勾选状态”和“地图引擎图层实例状态”做双向同步，但职责分离：
  - Pinia 管业务状态。
  - 地图引擎适配层执行 `setVisible`。
- 不建议在任意组件直接持有所有图层实例，推荐集中在图层管理 composable 中桥接。

---

## 7. 易错点总结（复习高频坑）

### 核心概念

- `reactive` 解构丢响应式是 Vue 3 常见坑。
- `watch` 深度监听（`deep: true`）在大对象上有明显性能开销。

### 代码示例

```ts
import { reactive, toRefs, watch } from 'JavaScript';

const viewState = reactive({
  center: [120, 30] as [number, number],
  zoom: 10,
  extent: [0, 0, 0, 0] as [number, number, number, number]
});

// 错误示例：直接解构会失去响应式
// const { zoom } = viewState;

// 正确示例：通过 toRefs 保持响应式连接
const { zoom } = toRefs(viewState);

// 不建议：深度监听整个对象，更新频繁时开销很高
watch(
  () => viewState,
  () => {
    console.log('viewState changed');
  },
  { deep: true }
);

// 建议：只监听真正关心的字段
watch(
  () => [viewState.zoom, viewState.center[0], viewState.center[1]],
  ([nextZoom, nextLng, nextLat], [prevZoom, prevLng, prevLat]) => {
    console.log('zoom/center changed:', {
      nextZoom,
      prevZoom,
      nextLng,
      prevLng,
      nextLat,
      prevLat
    });
  }
);
```

### WebGIS 实战建议

- 大型地图状态（图层树、要素集合、查询结果）避免“全量深监听”。
- 拆分监听粒度，优先监听必要字段。
- 当 watch 触发逻辑较重时，配合节流/防抖控制更新频率。

---

## 8. 团队落地建议（分享版）

### 核心概念

为了让 Vue 3 + WebGIS 项目长期可维护，建议建立统一规范：

- 状态分层：局部状态（组件）与全局状态（Pinia）明确边界。
- 地图引擎隔离：页面组件不直接堆叠 OpenLayers/Leaflet 细节。
- 组合式优先：将地图核心能力沉淀到 composables。

### 代码示例

```text
推荐目录结构

src/
  composables/
    useMapCore.ts
    useLayerManager.ts
    useMapViewState.ts
  stores/
    layerStore.ts
    userStore.ts
  components/
    map/
      MapView.JavaScript
      LayerPanel.JavaScript
      BasemapSwitcher.JavaScript
```

### WebGIS 实战建议

- 每次迭代优先补齐“地图初始化/销毁、图层显隐、视图同步”三条主链路。
- PR 评审明确检查：
  - 是否有 `onUnmounted` 清理。
  - 是否存在不必要的深度监听。
  - 是否把地图业务逻辑沉淀到 composable/store。

---

## 结语

这份文档可作为 Vue 3 在 WebGIS 场景下的“复习骨架”和“团队对齐模板”。

如果要进一步升级，可继续补充：

- `provide/inject` 在地图插件体系里的用法
- 基于 WebWorker 的大数据量要素渲染优化
- Pinia 持久化与多端状态同步策略
