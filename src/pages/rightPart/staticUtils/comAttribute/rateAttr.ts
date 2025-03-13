import type { ComAttribute } from "../attributeMap";

export const rateAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "rate",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "评分",
  },
  {
    label: "当前分值",
    propName: "content",
    propValue: "",
    type: "rate",
    defaultValue: 0,
  },
  {
    label: "最大分值",
    propName: "max",
    propValue: "min0",
    type: "input-number",
    defaultValue: 5,
  },
  {
    label: "允许半选",
    propName: "allow-half",
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
    label: "点击清空",
    propName: "clearable",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "展示分数",
    propName: "show-score",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "文字颜色",
    propName: "text-color",
    propValue: "",
    type: "colorPicker",
    defaultValue: "",
  },
];
