<template>
  <component
    :is="comMap[options._name]"
    :comProps="options"
    :style="{
      color: options.styleObj.fontColor,
      fontSize: options.styleObj.fontSize + 'px',
      width: options.styleObj.width + 'px',
      height: options.styleObj.height + 'px',
      textAlign: options.styleObj.textAlign,
    }"
  ></component>
</template>

<script setup>
import ElForm from "./containerCom/ElForm.vue";
import ElCard from "./containerCom/ElCard.vue";
import ElRow from "./containerCom/ElRow.vue";

import ElButton from "./baseCom/ElButton.vue";
import ElIcon from "./baseCom/ElIcon.vue";

import ElInput from "./formCom/ElInput.vue";
import ElInputNumber from "./formCom/ElInputNumber.vue";
import ElSelect from "./formCom/ElSelect.vue";
import ElCascader from "./formCom/ElCascader.vue";
import ElRadio from "./formCom/ElRadio.vue";
import ElCheckbox from "./formCom/ElCheckbox.vue";
import ElDatePicker from "./formCom/ElDatePicker.vue";
import ElDateTimePicker from "./formCom/ElDateTimePicker.vue";
import ElRate from "./formCom/ElRate.vue";
import ElSlider from "./formCom/ElSlider.vue";
import ElSwitch from "./formCom/ElSwitch.vue";

import ElTable from "./dataShowCom/ElTable.vue";
import ElAvatar from "./dataShowCom/ElAvatar.vue";
import ElBadge from "./dataShowCom/ElBadge.vue";
import ElCalendar from "./dataShowCom/ElCalendar.vue";
import ElDescriptions from "./dataShowCom/ElDescriptions.vue";
import ElEmpty from "./dataShowCom/ElEmpty.vue";
import ElImage from "./dataShowCom/ElImage.vue";
import ElPagination from "./dataShowCom/ElPagination.vue";
import ElProgress from "./dataShowCom/ElProgress.vue";

const props = defineProps({
  options: Object,
});

const comMap = {
  ElButton,
  ElIcon,
  ElInput,
  ElInputNumber,
  ElSelect,
  ElCascader,
  ElRadio,
  ElRate,
  ElSlider,
  ElSwitch,
  ElCheckbox,
  ElDatePicker,
  ElDateTimePicker,
  ElTable,
  ElAvatar,
  ElBadge,
  ElCalendar,
  ElDescriptions,
  ElEmpty,
  ElImage,
  ElPagination,
  ElProgress,
  ElForm,
  ElCard,
  ElRow,
};
</script>

<style scoped></style>
