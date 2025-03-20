<template>
  <el-form :model="comAttribute" label-width="80px" style="width: 260px">
    <el-form-item label="列标题">
      <el-input v-model="comAttribute.label" style="width: 130px"></el-input>
    </el-form-item>
    <el-form-item label="列内容">
      <el-input v-model="comAttribute.content" style="width: 130px"></el-input>
    </el-form-item>
    <el-form-item label="列图标">
      <el-input v-model="comAttribute.icon" style="width: 130px"></el-input>
    </el-form-item>
    <el-form-item label="列宽">
      <el-input-number
        v-model="comAttribute.width"
        style="width: 130px"
      ></el-input-number>
      <span style="margin-left: 4px">px</span>
    </el-form-item>
    <el-form-item label="标签对齐">
      <el-radio-group v-model="comAttribute.labelAlign" size="small">
        <el-radio-button label="left" value="left" />
        <el-radio-button label="center" value="center" />
        <el-radio-button label="right" value="right" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="内容对齐">
      <el-radio-group v-model="comAttribute.align" size="small">
        <el-radio-button label="left" value="left" />
        <el-radio-button label="center" value="center" />
        <el-radio-button label="right" value="right" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="单元格跨行">
      <el-input-number
        v-model="comAttribute.rowSpan"
        style="width: 130px"
      ></el-input-number>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, onUpdated, computed, watch, onMounted } from "vue";
import { useComStore } from "../../store/comStore";

const props = defineProps({
  rowData: Object,
});

const isFixed = ref(false);
const comStore = useComStore();
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
