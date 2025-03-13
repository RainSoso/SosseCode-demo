<template>
  <el-col
    :span="currContainerComp?.propsObj?.colSpan"
    :offset="currContainerComp?.propsObj?.colOffset"
    :push="currContainerComp?.propsObj?.colPush"
    :pull="currContainerComp?.propsObj?.colPull"
  >
    <!-- 内容组件 -->
    <div
      class="col-content"
      @drop.stop="onDrop"
      @dragenter.prevent="handleEnter"
      @dragover.stop.prevent
      @click.stop="clickComponent(currContainerComp)"
      :class="{
        clickCom: comStore.clickComUUID === currContainerComp.comUUID,
        selectCom: comStore.selectComUUID === currContainerComp.comUUID,
      }"
      @mousemove.stop="selectComponent(currContainerComp.comUUID)"
    >
      <!-- 选中组件边框高亮 删除icon -->
      <div
        v-if="
          comStore.currentComponent === currContainerComp &&
          comStore.clickComUUID === currContainerComp.comUUID
        "
        class="clickIcon"
      >
        <el-icon
          v-if="props.rowProps.childList.length !== 1"
          color="#fff"
          style="margin-left: 4px"
          @click.stop="deleteComponent(currContainerComp, props.colIndex)"
          ><Delete
        /></el-icon>
        <el-icon
          color="#fff"
          style="margin-left: 6px; margin-right: 4px"
          @click.stop="copyComponent(props.colIndex)"
          ><CopyDocument
        /></el-icon>
      </div>

      <contentCom
        v-if="currContainerComp"
        :contentProps="currContainerComp"
        :lastComUUID="lastComUUID"
        :dragCurrentItem="dragCurrentItem"
        :containerType="currContainerComp.name"
        >栅格容器
      </contentCom>
    </div>
  </el-col>
</template>

<script setup>
import { ref, computed } from "vue";
import { useComStore } from "../../../../store/comStore";
import { createUUID } from "../../../../utils/index";
import contentCom from "./contentCom.vue";
import { rowProps } from "element-plus";
import { ElCol as ElColInstance } from "element-plus";

const props = defineProps({
  colProps: Object,
  rowProps: Object,
  colIndex: Number,
});

const comStore = useComStore();
const dragCurrentItem = computed(() => comStore.currentDragComponent); // 当前拖拽的组件
const lastComUUID = ref(null);

// 获取当前布局容器组件
const currContainerComp = computed({
  get() {
    if (!props.colProps.childList) {
      props.colProps.childList = [];
    }
    return props.colProps;
  },
  set(val) {
    props.colProps = val;
  },
});

// 获取父级布局容器组件
const rowContainerComp = computed({
  get() {
    return props.rowProps;
  },
  set(val) {
    props.rowProps = val;
  },
});

// 点击组件
const clickComponent = (item) => {
  comStore.currentComponent = item;
  comStore.clickComUUID = item.comUUID;
  comStore.selectComUUID = null;
};

// 选择组件
const selectComponent = (comUUID) => {
  if (comUUID === comStore.clickComUUID) return;
  comStore.selectComUUID = comUUID;
};

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

// 点击增加col组件
const copyComponent = (index) => {
  rowContainerComp.value.childList.splice(index + 1, 0, {
    ...comStore.initComponent(ElColInstance),
    comUUID: ElColInstance.propsObj.comUUID + "_" + createUUID(),
  });
  clickComponent(rowContainerComp.value.childList[index + 1]);
};

// 删除组件
const deleteComponent = (item, index) => {
  // 保证row组件里至少有一个col组件
  if (rowContainerComp.value.childList.length === 1) {
    return;
  }

  comStore.removeComByUUID(item.comUUID);

  // 调整位置
  if (rowContainerComp.value.childList.length === index) {
    clickComponent(rowContainerComp.value.childList[index - 1]);
    return;
  }

  clickComponent(rowContainerComp.value.childList[index]);
};
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}

.col-content {
  position: relative;
  border-radius: 4px;
  min-height: 36px;
  border: 2px solid #f0f0f0;
}

.clickCom {
  border: 2px solid rgb(173, 172, 253);
  cursor: pointer;
}
.selectCom {
  border: 2px dashed rgb(128, 187, 235);
}
.clickIcon {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 24px;
  background-color: rgb(173, 172, 253);
  border-radius: 2px;
  cursor: pointer;
  z-index: 998;
}
</style>
