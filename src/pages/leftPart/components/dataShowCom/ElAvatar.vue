<template>
  <el-avatar :="comProps.propsObj"></el-avatar>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
