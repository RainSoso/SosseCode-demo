<template>
  <div class="rightPart">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="组件属性" name="first">
        <div class="configuration-content">
          <el-scrollbar>
            <el-form :model="attr">
              <div class="attributeList">
                <template
                  v-for="(attr, index) in comAttribute.componentOptions"
                  :key="attr"
                >
                  <el-form-item :label="attr.label">
                    <attributeType :options="attr"></attributeType>
                  </el-form-item>
                </template>
              </div>
            </el-form>
          </el-scrollbar>
        </div>
      </el-tab-pane>

      <el-tab-pane label="样式属性" name="second">
        <div class="configuration-content">
          <el-scrollbar>
            <el-form :model="stylePropsObj">
              <div class="attributeList" @click="test">
                <template
                  v-for="(styleItem, index) in comStore.styleAttrsObj"
                  :key="styleItem"
                >
                  <el-form-item
                    :label="styleAttr.label"
                    v-for="styleAttr in styleItem"
                  >
                    <styleAttrType :options="styleAttr"></styleAttrType>
                  </el-form-item>
                </template>
              </div>
            </el-form>
          </el-scrollbar>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, watch, computed, reactive } from "vue";
import { useComStore } from "../../store/comStore";

import attributeType from "./staticUtils/attributeType/attributeType.vue";
import styleAttrType from "./staticUtils/attributeType/styleAttrType.vue";

const activeName = ref("first");
const comStore = useComStore();

const comAttribute = computed(() => {
  return comStore.currentComponent?.comAttrs || [];
});

const comPropsObj = computed({
  get() {
    return comStore.currentComponent.propsObj;
  },
  set(val) {
    comStore.currentComponent.propsObj = val;
  },
});

const styleAttribute = computed(() => {
  return comStore.currentComponent?.styleAttrs || [];
});

const stylePropsObj = computed({
  get() {
    return comStore.currentComponent?.styleObj;
  },
  set(val) {
    comStore.currentComponent.styleObj = val;
  },
});

const test = () => {};
</script>

<style scoped>
.rightPart {
  width: 360px;
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
:deep(.el-form-item) {
  margin-bottom: 0px !important;
  margin-top: 18px !important;
}
:deep(.el-form-item:nth-child(1)) {
  margin-top: 10px !important;
}
:deep(.el-form-item__label) {
  width: 86px !important;
  display: flex !important;
  justify-content: flex-start !important;
}
:deep(.el-collapse-item__arrow) {
  margin-right: 30px !important;
}
:deep(.el-card__body) {
  padding: 0px !important;
}
:deep(.el-table_3_column_9 .is-right .el-table__cell) {
  text-align: right;
  margin-top: 10px !important;
}

.attributeList {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 20px;
  font-size: 14px;
}
.configuration-content {
  height: calc(100vh - 80px - 60px);
  overflow: auto;
}
.collapse-title {
  margin-left: 20px;
  font-size: 16px;
  color: rgb(21, 49, 82);
}
</style>
