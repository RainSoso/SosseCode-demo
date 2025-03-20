import type { ComAttribute } from "../attributeMap";

export const imageAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "image",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "图片",
  },
  {
    label: "图片地址",
    propName: "src",
    propValue: "",
    type: "input",
    defaultValue:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
  },
  {
    label: "图片预览",
    propName: "previewSrcList",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "图片适应",
    propName: "fit",
    propValue: "",
    type: "select",
    options: [
      { label: "fill", value: "fill" },
      { label: "contain", value: "contain" },
      { label: "cover", value: "cover" },
      { label: "none", value: "none" },
      { label: "scale-down", value: "scale-down" },
    ],
    defaultValue: "cover",
  },
  {
    label: "失败地址",
    propName: "error",
    propValue: "",
    type: "input",
    defaultValue: "",
  },
  {
    label: "图片宽度",
    propName: "width",
    propValue: "",
    type: "input-number",
    defaultValue: 100,
  },
  {
    label: "图片高度",
    propName: "height",
    propValue: "",
    type: "input-number",
    defaultValue: 100,
  },
];
