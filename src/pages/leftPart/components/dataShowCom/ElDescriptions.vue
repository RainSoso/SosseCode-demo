<template>
  <el-descriptions :="comProps.propsObj" :title="comProps.propsObj.content">
    <el-descriptions-item
      v-for="(key, index) in comProps.propsObj.desColData"
      :label="key.label"
      :align="key.align"
      :label-align="key.labelAlign"
      :width="key.width"
      :span="key.span"
      :rowspan="key.rowSpan"
    >
      {{ key.content }}
      <template #label v-if="!!key.icon">
        <div style="display: flex; align-items: center">
          <el-icon style="margin-right: 4px">
            <component :is="key.icon"></component>
          </el-icon>
          {{ key.label }}
        </div>
      </template>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
