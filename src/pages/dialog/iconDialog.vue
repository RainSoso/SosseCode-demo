<template>
  <el-dialog
    v-model="dialogVisible"
    :title="props.title"
    :before-close="handleCancel"
    show-close
    destroy-on-close
  >
    <el-scrollbar height="400px">
      <div class="icon-list">
        <div
          class="icon-item"
          v-for="(item, index) in iconList"
          :key="index"
          @click="handleSelect(item, index)"
          :class="{
            selected: temporarySelectIconName === index,
          }"
        >
          <component
            :is="item.name"
            style="width: 2em; height: 2em"
          ></component>
          <div>{{ item.name }}</div>
        </div>
      </div>
    </el-scrollbar>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, onUpdated, computed, watch, onMounted } from "vue";
import * as ElIcon from "@element-plus/icons-vue";
import { useComStore } from "../../store/comStore";

/*
 * @定义Dialog参数:
 * title：标题； v-model: 是否显示；
 * show-close：是否显示关闭按钮； close-on-click-modal：通过点击遮罩关闭;
 * close-on-press-escape：通过按下 ESC 关闭 Dialog；
 * destroy-on-close：关闭时销毁元素； align-center：文字是否居中； draggable：是否可拖拽
 */
const dialogVisible = defineModel({
  prop: "value",
  event: "update:modelValue",
});
const emits = defineEmits(["cancel", "confirm"]);
const props = defineProps({
  title: {
    type: String,
    default: "提示",
  },
});
const comStore = useComStore();
const temporarySelectIconName = ref("");
const selectIconName = computed({
  get() {
    return comStore.currentComponent.propsObj.content;
  },
  set(val) {
    comStore.currentComponent.propsObj.content = val;
  },
});
const iconList = ref(ElIcon);

watch(
  () => dialogVisible.value,
  (val) => {
    if (val) {
      temporarySelectIconName.value = selectIconName.value;
    }
  }
);

const handleSelect = (item, index) => {
  temporarySelectIconName.value = item.name;
};

// 取消按钮
const handleCancel = () => {
  emits("cancel", false);
};
// 确认按钮
const handleConfirm = () => {
  emits("confirm", false);
  selectIconName.value = temporarySelectIconName.value;
};
</script>

<style scoped lang="scss">
.icon-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  font-size: 12px;
  padding-top: 10px;
}
.svg-icon {
  width: 20px;
  height: 20px;
}
.selected {
  background-color: rgba(0, 125, 250, 0.411);
  border-radius: 10px;
}
</style>
