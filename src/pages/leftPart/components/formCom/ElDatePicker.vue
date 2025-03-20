<template>
  <el-date-picker
    v-model="comProps.propsObj.content"
    :="comProps.propsObj"
    start-placeholder="Start Date"
    end-placeholder="End Date"
  ></el-date-picker>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
