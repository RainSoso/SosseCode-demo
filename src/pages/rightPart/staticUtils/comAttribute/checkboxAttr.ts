import type { ComAttribute } from "../attributeMap";

export const checkboxAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "checkbox",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "多选框",
  },
  {
    label: "选项",
    propName: "checkList",
    propValue: "",
    type: "checkList",
    defaultValue: [
      { label: "选项1", value: "1" },
      { label: "选项2", value: "2" },
      { label: "选项3", value: "3" },
    ],
  },
  {
    label: "默认选中值",
    propName: "defaultChoose",
    propValue: "",
    type: "input",
    defaultValue: ["1"],
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
