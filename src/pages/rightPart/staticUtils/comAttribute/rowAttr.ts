import type { ComAttribute } from "../attributeMap";

export const rowAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "row",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "栅格-行",
  },
  {
    label: "栅格间隔",
    propName: "gutter",
    propValue: "",
    type: "input-number",
    defaultValue: "",
  },
  {
    label: "Flex布局",
    propName: "flex",
    propValue: "",
    type: "switch",
    defaultValue: true,
  },
  {
    label: "水平排列",
    propName: "justify",
    propValue: "",
    type: "select",
    options: [
      { label: "左对齐", value: "start" },
      { label: "右对齐", value: "end" },
      { label: "居中对齐", value: "center" },
      { label: "两端对齐", value: "space-between" },
      { label: "两侧间隔相等", value: "space-around" },
      { label: "间距平均分布", value: "space-evenly" },
    ],
    defaultValue: "start",
  },
  {
    label: "垂直排列",
    propName: "align",
    propValue: "",
    type: "select",
    options: [
      { label: "顶部对齐", value: "top" },
      { label: "居中对齐", value: "middle" },
      { label: "底部对齐", value: "bottom" },
    ],
    defaultValue: "top",
  },
];
