<template>
  <div>
    <el-select
      v-model="comProps.propsObj.content"
      style="width: 180px"
      :="comProps.propsObj"
    >
      <el-option
        v-for="check in comProps.propsObj.selectList"
        :label="check.label"
        :value="check.value"
        :disabled="check.disabled"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
