import type { ComAttribute } from "../attributeMap";

export const avatarAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "avatar",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "头像",
  },
  {
    label: "头像形状",
    propName: "shape",
    propValue: "",
    type: "radio-button",
    options: [
      { label: "circle", value: "circle" },
      { label: "square", value: "square" },
    ],
    defaultValue: "circle",
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
    label: "头像大小",
    propName: "size",
    propValue: "",
    type: "input-number",
    defaultValue: "50",
  },
  {
    label: "替代文本",
    propName: "alt",
    propValue: "",
    type: "input",
    defaultValue: "",
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
];
