<template>
  <el-badge
    :="comProps.propsObj"
    :value="
      comProps.propsObj.showNumber === true
        ? comProps.propsObj.numberValue
        : comProps.propsObj.textValue
    "
    :style="{
      'margin-left': comProps.propsObj.leftOffset + 'px',
      'margin-top': comProps.propsObj.topOffset + 'px',
    }"
  ></el-badge>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
