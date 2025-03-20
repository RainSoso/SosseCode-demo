<template>
  <el-row
    :gutter="currContainerComp?.propsObj?.gutter"
    :justify="currContainerComp?.propsObj?.justify"
    :align="currContainerComp?.propsObj?.align"
    class="formContainer"
  >
    <ElCol
      v-for="(item, index) in currContainerComp?.childList"
      :key="item.comUUID"
      :colProps="item"
      :colIndex="index"
      :rowProps="currContainerComp"
      @click.stop="clickComponent(item)"
    >
    </ElCol>
    <!-- 选中组件边框高亮 删除icon -->
  </el-row>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useComStore } from "../../../../store/comStore";
import { createUUID } from "../../../../utils/index";
import contentCom from "./contentCom.vue";
import { ElCol as ElColInstance } from "element-plus";
import ElCol from "./ElCol.vue";

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

// 点击组件
const clickComponent = (item, index) => {
  comStore.currentComponent = item;
  comStore.clickComUUID = item.comUUID;
  comStore.selectComUUID = null;
};

onMounted(() => {
  if (currContainerComp?.value.childList.length >= 1) return;
  currContainerComp?.value.childList.push({
    ...comStore.initComponent(ElColInstance),
    comUUID: ElColInstance.propsObj.comUUID + "_" + createUUID(),
  });
});
</script>

<style scoped>
.formContainer {
  background-color: #fff;
}

.el-row {
  margin-bottom: 20px;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.el-row:last-child {
  margin-bottom: 0;
}
</style>
