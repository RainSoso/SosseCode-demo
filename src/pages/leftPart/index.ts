import {
  ElButton,
  ElInput,
  ElTable,
  ElIcon,
  ElCascader,
  ElCheckbox,
  ElDatePicker,
  ElInputNumber,
  ElRadio,
  ElRate,
  ElSelect,
  ElSlider,
  ElSwitch,
  ElAvatar,
  ElBadge,
  ElCalendar,
  ElCard,
  ElEmpty,
  ElImage,
  ElDescriptions,
  ElPagination,
  ElProgress,
  ElForm,
  ElRow
} from "element-plus";

const componentTree = [
  {
    groupName: "布局容器",
    groupValue: "container",
    components: [
      {
        cnName: "表单",
        componentInstance: { ...ElForm, _name: "ElForm" },
      },
      {
        cnName: "卡片",
        componentInstance: { ...ElCard, _name: "ElCard" },
      },
      {
        cnName: "栅格",
        componentInstance: { ...ElRow, _name: "ElRow" },
      },
    ],
  },
  {
    groupName: "基础组件",
    groupValue: "base",
    components: [
      {
        cnName: "按钮",
        componentInstance: { ...ElButton, _name: "ElButton" },
      },
      {
        cnName: "图标",
        componentInstance: { ...ElIcon, _name: "ElIcon" },
      },
    ],
  },
  {
    groupName: "表单组件",
    groupValue: "form",
    components: [
      {
        cnName: "输入框",
        // icon: "ChatLineSquare",
        componentInstance: { ...ElInput, _name: "ElInput" },
      },
      {
        cnName: "数字输入框",
        componentInstance: { ...ElInputNumber, _name: "ElInputNumber" },
      },
      {
        cnName: "选择器",
        componentInstance: { ...ElSelect, _name: "ElSelect" },
      },
      {
        cnName: "级联选择",
        componentInstance: { ...ElCascader, _name: "ElCascader" },
      },
      {
        cnName: "单选框",
        componentInstance: { ...ElRadio, _name: "ElRadio" },
      },
      {
        cnName: "多选框",
        componentInstance: { ...ElCheckbox, _name: "ElCheckbox" },
      },
      {
        cnName: "日期选择",
        componentInstance: { ...ElDatePicker, _name: "ElDatePicker" },
      },
      {
        cnName: "日期时间",
        componentInstance: { ...ElDatePicker, _name: "ElDateTimePicker" },
      },
      {
        cnName: "评分",
        componentInstance: { ...ElRate, _name: "ElRate" },
      },
      {
        cnName: "滑块",
        componentInstance: { ...ElSlider, _name: "ElSlider" },
      },
      {
        cnName: "开关",
        // icon: "Open",
        componentInstance: { ...ElSwitch, _name: "ElSwitch" },
      },
    ],
  },
  {
    groupName: "数据展示组件",
    groupValue: "dataShow",
    components: [
      {
        cnName: "头像",
        componentInstance: { ...ElAvatar, _name: "ElAvatar" },
      },
      {
        cnName: "徽标",
        componentInstance: { ...ElBadge, _name: "ElBadge" },
      },
      {
        cnName: "日历",
        componentInstance: { ...ElCalendar, _name: "ElCalendar" },
      },

      {
        cnName: "描述列表",
        componentInstance: { ...ElDescriptions, _name: "ElDescriptions" },
      },
      {
        cnName: "空状态",
        componentInstance: { ...ElEmpty, _name: "ElEmpty" },
      },
      {
        cnName: "图片",
        componentInstance: { ...ElImage, _name: "ElImage" },
      },
      {
        cnName: "分页",
        componentInstance: { ...ElPagination, _name: "ElPagination" },
      },
      {
        cnName: "进度条",
        componentInstance: { ...ElProgress, _name: "ElProgress" },
      },
      {
        cnName: "表格",
        componentInstance: { ...ElTable, _name: "ElTable" },
      },
    ],
  },
];

export { componentTree };
