<template>
  <el-switch
    v-model="comProps.propsObj.content"
    :="comProps.propsObj"
    :size="comProps.propsObj.switchSize"
    :style="{
      '--el-switch-on-color': comProps.propsObj.onColor,
      '--el-switch-off-color': comProps.propsObj.offColor,
    }"
  ></el-switch>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
