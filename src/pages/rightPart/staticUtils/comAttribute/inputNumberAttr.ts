import type { ComAttribute } from "../attributeMap";

export const inputNumberAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "inputNumber",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "数字输入框",
  },
  {
    label: "当前值",
    propName: "content",
    propValue: "",
    type: "input-number",
    defaultValue: "",
  },
  {
    label: "最小值",
    propName: "minNumber",
    propValue: "",
    type: "input-number",
    defaultValue: -Infinity,
  },
  {
    label: "最大值",
    propName: "maxNumber",
    propValue: "",
    type: "input-number",
    defaultValue: Infinity,
  },
  {
    label: "步长",
    propName: "step",
    propValue: "min0",
    type: "input-number",
    defaultValue: 1,
  },
  {
    label: "精度",
    propName: "precision",
    propValue: "min0",
    type: "input-number",
    defaultValue: 0,
  },
  {
    label: "控制按钮",
    propName: "controls",
    propValue: "",
    type: "switch",
    defaultValue: true,
  },
  {
    label: "禁用状态",
    propName: "disabled",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
];
