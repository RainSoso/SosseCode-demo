<template>
  <el-empty :="comProps.propsObj"></el-empty>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
