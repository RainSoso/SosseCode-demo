<template>
  <el-input-number
    :="comProps.propsObj"
    v-model="comProps.propsObj.content"
    :min="comProps.propsObj.minNumber ? comProps.propsObj.minNumber : -Infinity"
    :max="comProps.propsObj.maxNumber ? comProps.propsObj.maxNumber : Infinity"
  >
  </el-input-number>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
