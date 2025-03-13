import type { ComAttribute } from "../attributeMap";

export const calendarAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "calendar",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "日历",
  },
  {
    label: "默认值",
    propName: "content",
    propValue: "",
    type: "date-picker",
    defaultValue: "",
  },
  {
    label: "周起始日",
    propName: "startDate",
    propValue: "",
    type: "date-picker",
    defaultValue: "",
  },
  {
    label: "周结束日",
    propName: "endDate",
    propValue: "",
    type: "date-picker",
    defaultValue: "",
  },
];
