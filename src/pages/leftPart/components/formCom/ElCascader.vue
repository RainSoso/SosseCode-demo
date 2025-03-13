<template>
  <el-cascader :options="comProps.propsObj.tableData" :="comProps.propsObj" />
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
