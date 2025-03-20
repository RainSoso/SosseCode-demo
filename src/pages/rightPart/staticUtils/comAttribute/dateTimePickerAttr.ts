import type { ComAttribute } from "../attributeMap";

export const dateTimePickerAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "dateTimePicker",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "时间选择器",
  },
  {
    label: "选择时间",
    propName: "content",
    propValue: "",
    type: "time-picker",
    defaultValue: "",
  },
  {
    label: "占位文本",
    propName: "placeholder",
    propValue: "",
    type: "input",
    defaultValue: "Pick a Time",
  },
  {
    label: "时间范围",
    propName: "type",
    propValue: "",
    type: "select",
    options: [
      { label: "日期和时间点", value: "datetime" },
      { label: "日期和时间范围", value: "datetimerange" },
    ],
    defaultValue: "datetime",
  },
  {
    label: "时间格式",
    propName: "format",
    propValue: "",
    type: "select",
    options: [
      { label: "YYYY/MM/DD HH/mm/ss", value: "YYYY/MM/DD HH/mm/ss" },
      { label: "YYYY-MM-DD HH-mm-ss", value: "YYYY-MM-DD HH-mm-ss" },
      { label: "YYYY:MM:DD HH:mm:ss", value: "YYYY:MM:DD HH:mm:ss" },
    ],
    defaultValue: "YYYY/MM/DD HH/mm/ss",
  },
  {
    label: "范围分隔符",
    propName: "range-separator",
    propValue: "",
    type: "input",
    defaultValue: "-",
  },

  {
    label: "一键清除",
    propName: "clearable",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "禁用状态",
    propName: "disabled",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
];
