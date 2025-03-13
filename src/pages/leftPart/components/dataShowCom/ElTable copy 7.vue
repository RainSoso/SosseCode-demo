<template>
  <div>
    <el-table :data="comProps.propsObj.tableData" :="comProps.propsObj">
      <el-table-column
        v-for="(key, index) in comProps.propsObj.colData"
        :prop="key.value"
        :label="key.label"
        :fixed="key.fixed"
        :align="key.align"
        :width="key.width"
        :showOverflowTooltip="key.showOverflowTooltip"
        width="150"
      />
    </el-table>
  </div>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
