import type { ComAttribute } from "../attributeMap";

export const tableAttribute: ComAttribute[] = [
  {
    label: "字段标识",
    propName: "comUUID",
    propValue: "",
    type: "input",
    defaultValue: "table",
  },
  {
    label: "标题",
    propName: "label",
    propValue: "",
    type: "input",
    defaultValue: "表格",
  },
  {
    label: "表格数据",
    propName: "tableData",
    propValue: "",
    type: "data-dialog",
    defaultValue: [
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄",
      },
    ],
  },
  {
    label: "列表数据",
    propName: "colData",
    propValue: "",
    type: "colData",
    defaultValue: [
      {
        label: "日期",
        value: "date",
        align: "center",
        showOverflowTooltip: false,
        fixed: "left",
        width: "180",
      },
      {
        label: "姓名",
        value: "name",
        align: "center",
        showOverflowTooltip: false,
        fixed: "left",
        width: "180",
      },
      {
        label: "地址",
        value: "address",
        align: "center",
        showOverflowTooltip: false,
        fixed: "left",
        width: "180",
      },
    ],
  },
  {
    label: "最大高度",
    propName: "max-height",
    propValue: "min0",
    type: "input-number",
    defaultValue: 300,
  },
  {
    label: "纵向边框",
    propName: "border",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "斑马纹",
    propName: "stripe",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },

  {
    label: "显示表头",
    propName: "show-header",
    propValue: "",
    type: "switch",
    defaultValue: true,
  },
  {
    label: "高亮当前行",
    propName: "highlight-current-row",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
  {
    label: "显示合并行",
    propName: "show-summary",
    propValue: "",
    type: "switch",
    defaultValue: false,
  },
];
