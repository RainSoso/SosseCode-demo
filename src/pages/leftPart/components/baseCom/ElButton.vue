<template>
  <el-button :="comProps.propsObj">{{ comProps.propsObj.content }}</el-button>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
