<template>
  <el-calendar
    v-model="comProps.propsObj.content"
    :range="[comProps.propsObj.startDate, comProps.propsObj.endDate]"
    :="comProps.propsObj"
  ></el-calendar>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
