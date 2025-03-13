import type { ComAttribute } from "../attributeMap";

export const cardAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "card",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "卡片",
  },
  {
    label: "卡片标题",
    propName: "header",
    propValue: "",
    type: "input",
    defaultValue: "Card name",
  },
  {
    label: "卡片页脚",
    propName: "footer",
    propValue: "",
    type: "input",
    defaultValue: "",
  },
  {
    label: "卡片宽度",
    propName: "width",
    propValue: "",
    type: "input-number",
    defaultValue: 480,
  },
  {
    label: "卡片阴影",
    propName: "shadow",
    propValue: "",
    type: "radio-button",
    options: [
      { label: "always", value: "always" },
      { label: "never", value: "never" },
      { label: "hover", value: "hover" },
    ],
    defaultValue: "always",
  },
  {
    label: "仅显示内容",
    propName: "isContent",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "内容对齐",
    propName: "contentPosition",
    propValue: "",
    type: "radio-button",
    options: [
      { label: "左对齐", value: "left" },
      { label: "居中", value: "center" },
      { label: "右对齐", value: "right" },
    ],
    defaultValue: "center",
  },
];
