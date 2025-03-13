<template>
  <div class="topPart">
    <span class="title">SosseCode</span>
    <span>
      <el-button type="primary" plain @click="handleClear">清空画板</el-button>

      <el-button type="primary" @click="handleClick">生成JSON</el-button>

      <el-dialog
        v-model="dialogVisible"
        title="生成JSON"
        width="500"
        destroy-on-close
      >
        <jsonEdit :dataList="jsonData" @jsonChange="onJsonChange"></jsonEdit>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="handleCancel">关闭</el-button>
            <el-button type="primary" @click="handleCopy"> 复制 </el-button>
          </div>
        </template>
      </el-dialog>
    </span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { useComStore } from "../../store/comStore";
import jsonEdit from "./jsonEdit.vue";

const comStore = useComStore();
const dialogVisible = ref(false);
const componentList = ref(null);
const styleList = ref(null);
const jsonData = ref({});
// 将组件列表转换为树形结构
function getTreeList(list = comStore.componentList) {
  return list.map((item) => {
    const comList = {
      name: item.name,
      key: item.comUUID,
      options: item.propsObj,
      style: item.styleObj,
      children: [],
    };

    // 如果是容器组件且有子组件，递归处理子组件
    if (item.childList && item.childList.length > 0) {
      comList.children = getTreeList(item.childList);
    }

    return comList;
  });
}
const handleClick = () => {
  const componentList = comStore.componentList.map((item) => {
    const comList = {
      name: item.name,
      key: item.comUUID,
      options: item.propsObj,
      style: item.styleObj,
      children: [],
    };

    if (item.childList && item.childList.length > 0) {
      comList.children = getTreeList(item.childList);
    }
    return comList;
  });
  jsonData.value = { componentList: componentList };
  dialogVisible.value = true;
};
const handleClear = () => {
  comStore.componentList = [];
};

const handleCancel = () => {
  jsonData.value = {};
  dialogVisible.value = false;
};
// const onJsonChange = (value) => {
//   jsonData.value = value;
// };

const handleCopy = () => {
  navigator.clipboard
    .writeText(JSON.stringify(jsonData.value))
    .then(() => {
      ElMessage.success("复制成功");
    })
    .catch(() => {
      ElMessage.error("复制失败");
    });
};
</script>

<style scoped>
.topPart {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  color: rgb(211, 202, 202);
  border-bottom: 1px solid rgb(190, 212, 230);
  background-color: #ffffff;
  padding: 20px;
}
.title {
  color: rgb(190, 212, 230);
  font-size: 28px;
  font-style: italic;
  font-weight: bold;
}
</style>
