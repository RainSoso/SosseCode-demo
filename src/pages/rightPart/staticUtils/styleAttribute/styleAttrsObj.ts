import type { ComAttribute } from "../attributeMap";

export const styleAttrs: ComAttribute[] = [
  {
    label: "宽度",
    propName: "width",
    propValue: "",
    type: "input-number",
    defaultValue: "",
  },
  {
    label: "高度",
    propName: "height",
    propValue: "",
    type: "input-number",
    defaultValue: "",
  },
  {
    label: "字号",
    propName: "fontSize",
    propValue: "",
    type: "input-number",
    defaultValue: "",
  },
  {
    label: "对齐",
    propName: "textAlign",
    propValue: "",
    type: "select",
    options: [
      { label: "左对齐", value: "left" },
      { label: "居中", value: "center" },
      { label: "右对齐", value: "right" },
      { label: "两端对齐", value: "justify" },
    ],
    defaultValue: "left",
  },
  {
    label: "文字颜色",
    propName: "fontColor",
    propValue: "",
    type: "colorPicker",
    defaultValue: "",
  },
];
