<template>
  <div class="leftPart">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="组件" name="first">
        <div class="configuration-content">
          <el-scrollbar>
            <el-collapse v-model="activeNames">
              <el-collapse-item
                v-for="(group, groupIndex) in soComponent"
                :name="groupIndex"
                :key="groupIndex"
              >
                <template #title>
                  <div class="collapse-title">{{ group.groupName }}</div>
                </template>
                <div class="componentList">
                  <template
                    v-for="(item, index) in group.components"
                    :key="index"
                  >
                    <div
                      class="componentItem"
                      draggable="true"
                      @dragstart="onDragStart(item.componentInstance, group)"
                      @dragend="comStore.resetComState"
                    >
                      <component
                        :is="item.icon"
                        class="componentIcon"
                      ></component>

                      {{ item.cnName }}
                    </div>
                  </template>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-scrollbar>
        </div>
      </el-tab-pane>

      <el-tab-pane label="数据" name="second">
        <div class="configuration-content" @click="clickTest">
          <el-tree
            style="max-width: 600px"
            :data="treeData"
            highlight-current
            default-expand-all
            @node-click="handleNodeClick"
          >
            <template #default="{ node, data }">
              <span class="custom-tree-node" style="display: flex">
                <span>{{ node.label }} </span>
                <div class="treeTitle">{{ data.comUUID }}</div>
              </span>
            </template>
          </el-tree>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { componentTree } from "./index.ts";
import { useComStore } from "../../store/comStore";
import { createUUID } from "../../utils/index";

const activeName = ref("first");
const activeNames = ref(componentTree.map((item, index) => index));
const soComponent = componentTree;
const comStore = useComStore();
const treeData = computed(() =>
  comStore.componentList.map((item) => {
    const node = {
      label: item.propsObj.label,
      comUUID: item.comUUID,
      children: [],
    };

    if (item.childList && item.childList.length > 0) {
      node.children = getTreeList(item.childList);
    }
    return node;
  })
);

// 将组件列表转换为树形结构
function getTreeList(list = comStore.componentList) {
  return list.map((item) => {
    const node = {
      label: item.propsObj.label,
      comUUID: item.comUUID,
      children: [],
    };

    // 如果是容器组件且有子组件，递归处理子组件
    if (item.childList && item.childList.length > 0) {
      node.children = getTreeList(item.childList);
    }

    return node;
  });
}

const onDragStart = (componentInstance, group) => {
  comStore.setCurrentDragComponent({
    ...comStore.initComponent(componentInstance),
    comUUID: componentInstance.propsObj.comUUID + "_" + createUUID(),
  });
};

const handleNodeClick = (data) => {
  // 递归查找组件节点
  const findComponent = (list = comStore.componentList) => {
    for (let item of list) {
      if (item.comUUID === data.comUUID) {
        return item;
      }
      if (item.childList && item.childList.length > 0) {
        const found = findComponent(item.childList);
        if (found) return found;
      }
    }
    return null;
  };

  const comItem = findComponent();
  if (comItem) {
    comStore.clickComUUID = comItem.comUUID;
    comStore.currentComponent = comItem;
  }
};
</script>

<style scoped>
.leftPart {
  width: 300px;
  background-color: white;
}
:deep(.el-tabs__nav-wrap::after) {
  background-color: #fff;
}
:deep(.el-tabs__nav) {
  width: 100%;
  justify-content: space-evenly;
}
:deep(.el-tabs__active-bar) {
  width: 80px !important;
  left: -20px !important;
}
:deep(.el-collapse-item__arrow) {
  margin: 0 30px 0 auto !important;
}
.configuration-content {
  height: calc(100vh - 80px - 60px);
  overflow: auto;
}
.componentList {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-wrap: wrap;
  margin: 0 15px;
}
.componentItem {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  margin: 10px;
  border: 1px solid #bed4e6;
  border-radius: 4px;
  color: #1c78c4;
  font-size: 14px;
  font-weight: 200;
}
.collapse-title {
  padding-left: 30px;
  font-size: 16px;
  color: rgb(21, 49, 82);
  /* font-weight: bold; */
}
.treeTitle {
  margin-left: 10px;
  color: #92b8d8;
}
.componentIcon {
  width: 1em;
  height: 1em;
  margin-right: 4px;
  color: #000;
}
</style>
