// 未使用
import type { ComAttribute } from "../attributeMap";

export const tableColAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "tableCol",
  },
  {
    label: "列标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "",
  },
  {
    label: "列字段",
    propName: "prop",
    propValue: "",
    type: "input",
    defaultValue: "",
  },
  {
    label: "列宽",
    propName: "width",
    propValue: "",
    type: "input-number",
    defaultValue: "",
  },
  {
    label: "溢出省略",
    propName: "show-overflow-tooltip",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },

  {
    label: "对齐方式",
    propName: "align",
    propValue: "",
    type: "radio",
    options: [
      { label: "left", value: "left" },
      { label: "center", value: "center" },
      { label: "right", value: "right" },
    ],
    defaultValue: "left",
  },
  {
    label: "固定列",
    propName: "fixed",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
];
