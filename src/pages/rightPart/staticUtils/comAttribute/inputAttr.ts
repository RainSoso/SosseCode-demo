import type { ComAttribute } from "../attributeMap";

export const inputAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "input",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "输入框",
  },
  {
    label: "占位文本",
    propName: "placeholder",
    propValue: "",
    type: "input",
    defaultValue: "Please input",
  },
  {
    label: "输入框内容",
    propName: "content",
    propValue: "",
    type: "input",
    defaultValue: "",
  },
  {
    label: "输入框类型",
    propName: "type",
    propValue: "",
    type: "select",
    options: [
      { label: "文本框", value: "text" },
      { label: "密码框", value: "password" },
      { label: "文本域", value: "textarea" },
      { label: "搜索框", value: "search" },
    ],
    defaultValue: "text",
  },
  {
    label: "输入框尺寸",
    propName: "size",
    propValue: "",
    type: "select",
    options: [
      { label: "大型", value: "large" },
      { label: "默认", value: "default" },
      { label: "小型", value: "small" },
    ],
    defaultValue: "default",
  },
  // {
  //     label: '输入框宽度',
  //     propName: 'width',
  //     propValue: '',
  //     type: 'input-number',
  //     defaultValue: '240'
  // },
  // {
  //     label: '输入框高度',
  //     propName: 'height',
  //     propValue: '',
  //     type: 'input-number',
  //     defaultValue: '30'
  // },
  {
    label: "密码图标",
    propName: "show-password",
    propValue: "",
    type: "switch",
    defaultValue: false,
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
];
