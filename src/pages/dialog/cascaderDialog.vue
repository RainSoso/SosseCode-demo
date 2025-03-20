<template>
  <el-dialog
    v-model="dialogVisible"
    :title="props.title"
    :before-close="handleCancel"
    show-close
    destroy-on-close
  >
    <el-scrollbar height="400px">
      <div class="data-list">
        <jsonEdit
          :dataList="temporaryTableData"
          @jsonChange="onJsonChange"
        ></jsonEdit>
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
import { ref, onMounted, computed, watch } from "vue";
import jsonEdit from "../topPart/jsonEdit.vue";
import { useComStore } from "../../store/comStore";
import vueJsonEditor from "vue-json-editor";
import axios from "axios";

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
const emits = defineEmits(["cancel", "confirm", "dataChange"]);
const props = defineProps({
  title: {
    type: String,
    default: "提示",
  },
});
const comStore = useComStore();
const temporaryTableData = ref([]);
const tableDataList = computed({
  get() {
    return comStore.currentComponent.propsObj.tableData;
  },
  set(val) {
    comStore.currentComponent.propsObj.tableData = val;
  },
});
watch(
  () => dialogVisible.value,
  (val) => {
    if (val) {
      temporaryTableData.value = JSON.parse(
        JSON.stringify(tableDataList.value)
      );
    }
  }
);
// 取消按钮
const handleCancel = () => {
  emits("cancel", false);
};
// 确认按钮
const handleConfirm = () => {
  emits("confirm", false);
  tableDataList.value = temporaryTableData.value;
};

const onJsonChange = (value) => {
  temporaryTableData.value = value;
  console.log("json has been changed");
};
</script>

<style scoped lang="scss"></style>
