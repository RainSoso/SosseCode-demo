<template>
  <el-checkbox-group v-model="comProps.propsObj.defaultChoose">
    <el-checkbox
      v-for="check in comProps.propsObj.checkList"
      :label="check.label"
      :value="check.value"
      :="comProps.propsObj"
    ></el-checkbox>
  </el-checkbox-group>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
