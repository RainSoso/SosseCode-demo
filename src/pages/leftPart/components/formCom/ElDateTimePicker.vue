src/pages/leftPart/components/formCom/ElDateTimePicker.vue
<template>
  <el-date-picker
    v-model="comProps.propsObj.content"
    :="comProps.propsObj"
    :type="comProps.propsObj.type"
    start-placeholder="Start Time"
    end-placeholder="End Time"
  />
</template>

<script setup>
const props = defineProps({
  comProps: Object,
});
console.log(props.comProps);
</script>

<style scoped></style>
