import type { ComAttribute } from "../attributeMap";

export const iconAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "icon",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "图标",
  },
  {
    label: "icon名称",
    propName: "content",
    propValue: "",
    type: "input",
    defaultValue: "AddLocation",
  },
  {
    label: "选择图标",
    propName: "name",
    propValue: "",
    type: "icon-dialog",
    defaultValue: "AddLocation",
  },
  {
    label: "图标颜色",
    propName: "color",
    propValue: "",
    type: "colorPicker",
    defaultValue: "",
  },
  {
    label: "图标大小",
    propName: "size",
    propValue: "",
    type: "input-number",
    defaultValue: "30",
  },
];
