import type { ComAttribute } from "../attributeMap";

export const buttonAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "button",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "按钮",
  },
  {
    label: "按钮文字",
    propName: "content",
    propValue: "",
    type: "input",
    defaultValue: "按钮",
  },
  {
    label: "按钮类型",
    propName: "type",
    propValue: "",
    type: "select",
    options: [
      { label: "默认按钮", value: "default" },
      { label: "主要按钮", value: "primary" },
      { label: "成功按钮", value: "success" },
      { label: "警告按钮", value: "warning" },
      { label: "危险按钮", value: "danger" },
      { label: "信息按钮", value: "info" },
    ],
    defaultValue: "default",
  },

  {
    label: "按钮大小",
    propName: "size",
    propValue: "",
    type: "radio-button",
    options: [
      { label: "大型", value: "large" },
      { label: "默认", value: "default" },
      { label: "小型", value: "small" },
    ],
    defaultValue: "default",
  },
  {
    label: "朴素按钮",
    propName: "plain",
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
  {
    label: "圆角按钮",
    propName: "round",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "圆形按钮",
    propName: "circle",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "自定义颜色",
    propName: "color",
    propValue: "",
    type: "colorPicker",
    defaultValue: "",
  },
];
