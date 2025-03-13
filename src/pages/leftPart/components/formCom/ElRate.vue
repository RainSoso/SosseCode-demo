<template>
  <el-rate v-model="comProps.propsObj.content" :="comProps.propsObj"></el-rate>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
