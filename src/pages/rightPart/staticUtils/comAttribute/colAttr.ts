import type { ComAttribute } from "../attributeMap";

export const colAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "col",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "栅格-列",
  },
  {
    label: "占据列数",
    propName: "colSpan",
    propValue: "col",
    type: "input-number",
    defaultValue: 12,
  },
  {
    label: "左侧间隔",
    propName: "colOffset",
    propValue: "col",
    type: "input-number",
    defaultValue: 0,
  },
  {
    label: "左侧偏移",
    propName: "colPush",
    propValue: "col",
    type: "input-number",
    defaultValue: 0,
  },
  {
    label: "右侧偏移",
    propName: "colPull",
    propValue: "col",
    type: "input-number",
    defaultValue: 0,
  },
];
