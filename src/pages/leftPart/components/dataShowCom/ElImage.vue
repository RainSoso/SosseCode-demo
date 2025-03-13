<template>
  <el-image
    :="comProps.propsObj"
    :style="{
      width: comProps.propsObj.width + 'px',
      height: comProps.propsObj.height + 'px',
    }"
    :preview-src-list="
      comProps.propsObj.previewSrcList === true ? [comProps.propsObj.src] : []
    "
    hide-on-click-modal="true"
  >
    <template #error>
      <el-image
        :src="comProps.propsObj.error"
        :style="{
          width: comProps.propsObj.width + 'px',
          height: comProps.propsObj.height + 'px',
        }"
      />
    </template>
  </el-image>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
