<template>
  <el-radio-group v-model="comProps.propsObj.defaultChoose">
    <el-radio
      v-for="check in comProps.propsObj.radioList"
      :label="check.label"
      :value="check.value"
      :="comProps.propsObj"
    ></el-radio>
  </el-radio-group>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
