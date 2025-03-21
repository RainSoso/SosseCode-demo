import type { ComAttribute } from "../attributeMap";

export const selectAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "select",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "选择器",
  },
  {
    label: "占位文本",
    propName: "placeholder",
    propValue: "",
    type: "input",
    defaultValue: "Please Select",
  },
  {
    label: "可选项",
    propName: "selectList",
    propValue: "",
    type: "selectList",
    defaultValue: [
      { label: "选项1", value: "1", disabled: false },
      { label: "选项2", value: "2", disabled: true },
      { label: "选项3", value: "3", disabled: false },
    ],
  },
  {
    label: "选择器内容",
    propName: "content",
    propValue: "",
    type: "select-picker",
    defaultValue: "",
  },
  {
    label: "一键清除",
    propName: "clearable",
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
    label: "基础多选",
    propName: "multiple",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "折叠选项",
    propName: "collapse-tags",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "悬停显示",
    propName: "collapse-tags-tooltip",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "最大合并数",
    propName: "max-collapse-tags",
    propValue: "min0",
    type: "input-number",
    defaultValue: 0,
  },
];
