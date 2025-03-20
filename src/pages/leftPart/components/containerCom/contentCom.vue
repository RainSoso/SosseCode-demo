<template>
  <div
    class="formContainer"
    v-if="!contentProps.childList || contentProps.childList?.length === 0"
  >
    <div
      v-if="containerType === 'ElCol'"
      class="formContainerColTitle"
      @dragover.stop.prevent="onComDragOver(lastComUUID, 'last')"
    >
      将组件拖拽到此处
    </div>
    <div
      v-else
      class="formContainerTitle"
      @dragover.stop.prevent="onComDragOver(lastComUUID, 'last')"
    >
      将组件拖拽到此处
    </div>
  </div>
  <div class="formContainer" v-else>
    <div
      class="comList"
      v-for="(item, index) in contentProps.childList"
      :key="item.comUUID"
    >
      <!-- 组件前的插入区域 -->
      <div
        class="insert-area"
        @dragover.stop.prevent="onComDragOver(item.comUUID, 'before')"
      >
        <div
          v-show="showInsertLine(item.comUUID, 'before')"
          class="insert-line"
        >
          <slot>布局容器</slot>
        </div>
      </div>

      <!-- 组件容器 -->
      <div
        class="formContainerItem"
        :class="{
          selectCom: comStore.selectComUUID === item.comUUID,
          dragCom: comStore.dragComUUID === item.comUUID && dragCurrentItem,
          clickCom: comStore.clickComUUID === item.comUUID,
        }"
        @click.stop="clickComponent(item, index)"
        draggable="true"
        @dragstart.stop="onComDragStart(item, index)"
        @dragend.stop="comStore.resetComState"
        @mousemove.stop="selectComponent(item.comUUID)"
        :style="contentStyle ? contentStyle : item.style"
      >
        <!-- 选中组件边框高亮 删除icon -->
        <div
          v-if="comStore.clickComUUID === item.comUUID"
          class="clickDelete"
          @click.stop="deleteComponent(item, index)"
        >
          <el-icon color="#fff"><Delete /></el-icon>
        </div>

        <!-- 根据容器类型渲染不同内容 -->
        <template v-if="containerType === 'ElForm'">
          <el-form-item
            :label="item.propsObj.label"
            :label-position="contentProps.propsObj.labelPosition"
            :size="contentProps.propsObj.componentSize"
          >
            <componentAll :options="item"></componentAll>
          </el-form-item>
        </template>
        <template v-else>
          <componentAll :options="item"></componentAll>
        </template>
      </div>

      <!-- 组件后的插入区域 -->
      <div
        class="insert-area"
        @dragover.stop.prevent="onComDragOver(item.comUUID, 'after')"
      >
        <div v-show="showInsertLine(item.comUUID, 'after')" class="insert-line">
          <slot>布局容器</slot>
        </div>
      </div>
    </div>

    <!-- 最后的插入区域 -->
    <div
      class="comList insert-area last-insert"
      v-if="dragCurrentItem && comStore.currentComUUID === lastComUUID"
      @dragover.stop.prevent="onComDragOver(lastComUUID, 'last')"
    >
      <div v-show="showInsertLine(lastComUUID, 'last')" class="insert-line">
        <slot>布局容器</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useComStore } from "../../../../store/comStore";
import componentAll from "../componentAll.vue";

const props = defineProps({
  contentProps: Object,
  lastComUUID: String,
  dragCurrentItem: Object,
  contentStyle: Object,
  containerType: String,
});
const comStore = useComStore();

// 点击组件
const clickComponent = (item, index) => {
  comStore.currentComponent = item;
  comStore.clickComUUID = item.comUUID;
  comStore.selectComUUID = null;
};

// 选择组件
const selectComponent = (comUUID) => {
  if (comUUID === comStore.clickComUUID) return;
  comStore.selectComUUID = comUUID;
};

// 画布中的组件拖拽开始
const onComDragStart = (item, index) => {
  comStore.clickComUUID = null;
  comStore.dragComUUID = item.comUUID;
  comStore.setCurrentDragComponent(item);
};

// 拖拽组件在画布中移动
const onComDragOver = (uuid, position) => {
  comStore.setCurrentComUUID(uuid, position);
};

// 删除组件
const deleteComponent = (item, index) => {
  comStore.removeComByUUID(item.comUUID);
  clickComponent(props.contentProps);
};

// 显示插入线
const showInsertLine = (uuid, position) => {
  if (!props.dragCurrentItem) return false;
  return (
    comStore.currentComUUID === uuid && comStore.insertPosition === position
  );
};
</script>

<style scoped lang="scss">
.formContainer {
  padding: 6px 0;
}
.formContainerTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 10px;

  height: 200px;
  background-color: rgb(248, 248, 248);
}
.formContainerColTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 6px;
  height: 36px;
  border: 1px dashed #949494;
  background-color: rgb(248, 248, 248);

  font-size: 14px;
}
.selectCom {
  margin: -2px 0;

  border: 2px dashed rgb(128, 187, 235);
}
.dragCom {
  margin: -2px 0;
  border: 2px dashed rgb(173, 172, 253);
}
.clickCom {
  position: relative;
  margin: -2px 0;
  border: 2px solid rgb(173, 172, 253);
  cursor: pointer;

  .clickDelete {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 24px;
    background-color: rgb(173, 172, 253);
    cursor: pointer;
    z-index: 998;
  }
}

.insert-area {
  position: relative;
  height: 6px;
  transition: all 0.25s ease-in-out;
  z-index: 999;

  .insert-line {
    position: absolute;
    margin: 1px 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    text-align: right;
    background-color: rgb(93, 157, 252);
    transition: all 0.25s ease-in-out;
  }
}
.last-insert {
  margin-top: -2px;
  min-height: 8px;
}

.el-form-item {
  margin-bottom: 0px !important;
}
</style>
