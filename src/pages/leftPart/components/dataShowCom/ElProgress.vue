<template>
  <div :style="{ width: comProps.propsObj.max + 'px' }">
    <el-progress :="comProps.propsObj" />
  </div>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
