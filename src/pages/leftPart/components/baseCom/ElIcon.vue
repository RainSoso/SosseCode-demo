<template>
  <div>
    <el-icon :="comProps.propsObj">
      <component :is="comProps.propsObj.content"></component>
    </el-icon>
  </div>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
