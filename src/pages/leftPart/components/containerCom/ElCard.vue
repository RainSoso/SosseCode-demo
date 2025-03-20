<template>
  <div>
    <el-card
      :shadow="currContainerComp.propsObj.shadow"
      :style="{ width: currContainerComp.propsObj.width + 'px' }"
      @drop.stop="onDrop"
      @dragenter.prevent="handleEnter"
      @dragover.stop.prevent
    >
      <template #header v-if="!currContainerComp.propsObj.isContent">
        <div class="card-header">
          <span>{{ currContainerComp.propsObj.header }}</span>
        </div>
      </template>

      <!-- 内容组件 -->
      <div class="formContainer">
        <contentCom
          v-if="currContainerComp"
          :contentProps="currContainerComp"
          :lastComUUID="lastComUUID"
          :dragCurrentItem="dragCurrentItem"
          :contentStyle="{
            textAlign: currContainerComp.propsObj.contentPosition,
          }"
          >卡片容器</contentCom
        >
      </div>
      <template #footer v-if="!currContainerComp.propsObj.isContent">
        <span>{{ currContainerComp.propsObj.footer }}</span>
      </template>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useComStore } from "../../../../store/comStore";
import { createUUID } from "../../../../utils/index";

import contentCom from "./contentCom.vue";

const props = defineProps({
  comProps: Object,
});
const comStore = useComStore();
const dragCurrentItem = computed(() => comStore.currentDragComponent); // 当前拖拽的组件
const lastComUUID = ref(null);

// 获取当前布局容器组件
const currContainerComp = computed({
  get() {
    // 确保 childList 存在
    if (!props.comProps.childList) {
      props.comProps.childList = [];
    }
    return props.comProps;
  },
  set(val) {
    props.comProps = val;
  },
});

// 左侧组件进入布局容器
const handleEnter = () => {
  comStore.selectComUUID = null;
  if (!comStore.currentComUUID) {
    lastComUUID.value = "lastInsert_" + createUUID();
    comStore.setCurrentComUUID(lastComUUID.value, "last");
  }
};

// 组件在布局容器的拖拽释放
const onDrop = () => {
  // 如果拖拽组件移动至的位置是本身所在的位置，不做处理
  if (dragCurrentItem.value.comUUID === comStore.currentComUUID) return;

  if (comStore.currentComUUID === currContainerComp.value.comUUID) return;
  // 删除拖拽组件
  comStore.removeComByUUID(dragCurrentItem.value.comUUID);

  // 添加拖拽组件
  addComponent();
};

// 添加组件
const addComponent = () => {
  if (!dragCurrentItem.value) return;

  const currentUUID = comStore.currentComUUID;
  const position = comStore.insertPosition;

  if (currentUUID && position) {
    if (position === "last") {
      comStore.addComponent(dragCurrentItem.value, currContainerComp.value);
    } else {
      const container = currContainerComp.value;
      const index = container.childList.findIndex(
        (item) => item.comUUID === currentUUID
      );
      if (index !== -1) {
        const insertIndex = position === "after" ? index + 1 : index;
        container.childList.splice(insertIndex, 0, dragCurrentItem.value);
      }
    }
  } else {
    comStore.addComponent(dragCurrentItem.value, currContainerComp.value);
  }

  comStore.clickComUUID = dragCurrentItem.value.comUUID;
  comStore.currentComponent = dragCurrentItem.value;
  comStore.setCurrentComUUID(null);
  comStore.selectComUUID = null;
  comStore.setCurrentDragComponent(null);
};
</script>

<style scoped>
.formContainer {
  background-color: #fff;
}
</style>
