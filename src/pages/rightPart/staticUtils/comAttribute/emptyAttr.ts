import type { ComAttribute } from "../attributeMap";

export const emptyAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "empty",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "空状态",
  },
  {
    label: "描述信息",
    propName: "description",
    propValue: "",
    type: "input",
    defaultValue: "description",
  },
  {
    label: "自定义图片",
    propName: "image",
    propValue: "",
    type: "input",
    defaultValue: "",
  },
  {
    label: "图片尺寸",
    propName: "image-size",
    propValue: "",
    type: "input-number",
    defaultValue: "",
  },
];
