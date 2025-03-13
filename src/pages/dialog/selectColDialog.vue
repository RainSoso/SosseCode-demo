<template>
  <el-form :model="comAttribute" label-width="80px">
    <el-form-item label="选项名">
      <el-input v-model="comAttribute.label"></el-input>
    </el-form-item>
    <el-form-item label="选项值">
      <el-input v-model="comAttribute.value"></el-input>
    </el-form-item>
    <el-form-item label="禁用状态">
      <el-switch v-model="comAttribute.disabled"></el-switch>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  rowData: Object,
});

const comAttribute = computed(() => {
  return props.rowData || [];
});
</script>

<style scoped lang="scss">
:deep(.el-form-item__label) {
  width: 80px;
  justify-content: flex-start !important;
}
</style>
