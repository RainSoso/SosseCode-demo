<template>
  <div :style="{ width: comProps.propsObj.sliderWidth + 'px' }">
    <el-slider
      v-model="comProps.propsObj.content"
      :size="comProps.propsObj.sliderSize"
      :height="comProps.propsObj.sliderHeight + 'px'"
      :="comProps.propsObj"
    ></el-slider>
  </div>
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
</script>

<style scoped></style>
