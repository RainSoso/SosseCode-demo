import type { ComAttribute } from "../attributeMap";

export const formAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "form",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "表单",
  },
  {
    label: "标签对齐",
    propName: "labelPosition",
    propValue: "",
    type: "radio-button",
    options: [
      { label: "左对齐", value: "left" },
      { label: "右对齐", value: "right" },
    ],
    defaultValue: "right",
  },
  {
    label: "标签宽度",
    propName: "labelWidth",
    propValue: "",
    type: "input-number",
    defaultValue: 150,
  },
  {
    label: "标签后缀",
    propName: "labelSuffixText",
    propValue: "",
    type: "input",
    defaultValue: "",
  },
  {
    label: "组件尺寸",
    propName: "componentSize",
    propValue: "",
    type: "radio-button",
    options: [
      { label: "大型", value: "large" },
      { label: "默认", value: "default" },
      { label: "小型", value: "small" },
    ],
    defaultValue: "default",
  },
];
