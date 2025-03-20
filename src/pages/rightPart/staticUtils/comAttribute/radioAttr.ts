import type { ComAttribute } from "../attributeMap";

export const radioAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "radio",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "单选框",
  },
  {
    label: "单选框组",
    propName: "radioList",
    propValue: "",
    type: "radioList",
    defaultValue: [
      { label: "选项1", value: "1" },
      { label: "选项2", value: "2" },
      { label: "选项3", value: "3" },
    ],
  },
  {
    label: "禁用状态",
    propName: "disabled",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "显示边框",
    propName: "border",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
];
