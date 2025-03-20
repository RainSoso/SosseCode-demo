<template>
  <div>
    <el-input :="comProps.propsObj" v-model="comProps.propsObj.content">
    </el-input>
  </div>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
