<template>
  <div class="mainPart">
    <div
      class="canvas-container"
      @drop="onDrop"
      @dragenter.prevent="handleEnter"
      @dragover.stop.prevent
    >
      <div class="noContent" v-if="comStore.componentList?.length === 0">
        请从左侧列表中选择一个组件, 然后用鼠标拖动组件放置于此处。
      </div>
      <el-scrollbar v-else>
        <div
          class="comList"
          v-for="(item, index) in comStore.componentList"
          :key="item.comUUID"
        >
          <div
            class="insert-area"
            @dragover.stop.prevent="onComDragOver(item.comUUID, 'before')"
          >
            <div
              v-if="showInsertLine(item.comUUID, 'before')"
              class="insert-line"
            ></div>
          </div>

          <!-- 组件容器 -->
          <div
            class="comItem"
            :class="{
              selectCom: comStore.selectComUUID === item.comUUID,
              dragCom: comStore.dragComUUID === item.comUUID && dragCurrentItem,
              clickCom: comStore.clickComUUID === item.comUUID,
            }"
            @click="clickComponent(item, index)"
            draggable="true"
            @dragstart="onComDragStart(item, index)"
            @dragend="comStore.resetComState"
            @mousemove="selectComponent(item.comUUID)"
          >
            <!-- 选中组件边框高亮 删除icon -->
            <div
              v-if="comStore.clickComUUID === item.comUUID"
              class="clickDelete"
              @click.stop="deleteComponent(item, index)"
            >
              <el-icon color="#fff"><Delete /></el-icon>
            </div>
            <componentAll :options="item" :key="item.comUUID"></componentAll>
          </div>

          <!-- 组件后的插入区域 -->
          <div
            class="insert-area"
            @dragover.stop.prevent="onComDragOver(item.comUUID, 'after')"
          >
            <div
              v-if="showInsertLine(item.comUUID, 'after')"
              class="insert-line"
            ></div>
          </div>
        </div>
        <!-- 最后的插入区域 -->
        <div
          class="insert-area last-insert"
          v-if="dragCurrentItem && comStore.currentComUUID === lastComUUID"
          @dragover.stop.prevent="onComDragOver(lastComUUID, 'last')"
        >
          <div
            v-if="showInsertLine(lastComUUID, 'last')"
            class="insert-line"
          ></div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useComStore } from "../../store/comStore";
import { createUUID } from "../../utils/index";
import componentAll from "../leftPart/components/componentAll.vue";

const comStore = useComStore();
const dragCurrentItem = computed(() => comStore.currentDragComponent); // 当前拖拽的组件
const lastComUUID = ref(null); // 末尾插入条

// 点击组件
const clickComponent = (item, index) => {
  comStore.currentComponent = item;
  comStore.clickComUUID = item.comUUID;
};

// 选择组件
const selectComponent = (comUUID) => {
  comStore.selectComUUID = comUUID;
};

// 左侧组件拖拽进入组件
const handleEnter = () => {
  comStore.selectComUUID = null;

  // 如果是初次拖拽（没有当前拖拽组件UUID），设置末尾插入条
  if (!comStore.currentComUUID) {
    lastComUUID.value = "lastInsert_" + createUUID();
    comStore.setCurrentComUUID(lastComUUID.value, "last");
  }
};

// 组件在画布区域的拖拽释放
const onDrop = () => {
  // 如果拖拽组件移动至的位置是本身所在的位置，不做处理
  if (dragCurrentItem.value.comUUID === comStore.currentComUUID) return;

  // 删除拖拽组件
  comStore.removeComByUUID(dragCurrentItem.value.comUUID);

  // 添加拖拽组件
  addComponent();
};

// 画布中的组件拖拽开始
const onComDragStart = (item, index) => {
  if (!dragCurrentItem) return;
  comStore.clickComUUID = null;
  comStore.dragComUUID = item.comUUID;
  comStore.setCurrentDragComponent(item);
};

// 拖拽组件在画布中移动
const onComDragOver = (uuid, position) => {
  comStore.setCurrentComUUID(uuid, position);
};

// 添加组件
const addComponent = () => {
  if (!dragCurrentItem.value) return;

  const currentUUID = comStore.currentComUUID;
  const position = comStore.insertPosition;

  if (currentUUID && position) {
    if (position === "last") {
      comStore.addComponent(dragCurrentItem.value);
    } else {
      const index = comStore.componentList.findIndex(
        (item) => item.comUUID === currentUUID
      );
      if (index !== -1) {
        const insertIndex = position === "after" ? index + 1 : index;
        comStore.componentList.splice(insertIndex, 0, dragCurrentItem.value);
      }
    }
  } else {
    comStore.addComponent(dragCurrentItem.value);
  }

  comStore.clickComUUID = dragCurrentItem.value.comUUID;
  comStore.currentComponent = dragCurrentItem.value;
  comStore.setCurrentComUUID(null);
  comStore.selectComUUID = null;
  comStore.setCurrentDragComponent(null);
};

// 删除组件
const deleteComponent = (item, index) => {
  comStore.removeComByUUID(item.comUUID);

  if (comStore.componentList.length === 0) {
    clickComponent(null);
    return;
  }
  if (comStore.componentList.length === index) {
    clickComponent(comStore.componentList[index - 1]);
    return;
  }

  clickComponent(comStore.componentList[index]);
};

// 显示插入线
const showInsertLine = (uuid, position) => {
  if (!dragCurrentItem.value) return false;
  return (
    comStore.currentComUUID === uuid && comStore.insertPosition === position
  );
};
</script>

<style scoped lang="scss">
.mainPart {
  width: calc(100% - 640px);
  height: 100%;
  padding: 14px;
}
.canvas-container {
  background-color: #fff;
  height: 100%;
}

.noContent {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: #acacac;
}
.selectCom {
  position: relative;
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
    background-color: rgb(93, 157, 252);
    transition: all 0.25s ease-in-out;
  }
}
.last-insert {
  margin-top: -2px;
  min-height: 8px;
}
</style>
