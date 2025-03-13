<template>
  <el-pagination
    v-model:current-page="comProps.propsObj.currentPage"
    v-model:page-size="comProps.propsObj.pageSize"
    :page-sizes="[comProps.propsObj.pageSize]"
    :total="comProps.propsObj.totalCount"
    :pager-count="comProps.propsObj.pagerCount"
    :small="comProps.propsObj.small"
    :disabled="comProps.propsObj.disabled"
    :background="comProps.propsObj.background"
    :hide-on-single-page="comProps.propsObj.hideOnSinglePage"
    :layout="`${
      comProps.propsObj.showCount === true ? 'total' : null
    },prev,pager,next,${comProps.propsObj.jumpTo === true ? 'jumper' : null},${
      comProps.propsObj.pageChange === true ? 'sizes' : null
    }`"
  />
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
