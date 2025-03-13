// 属性映射
import { buttonAttribute } from "./comAttribute/buttonAttr";
import { iconAttribute } from "./comAttribute/iconAttr";
import { inputAttribute } from "./comAttribute/inputAttr";
import { tableAttribute } from "./comAttribute/tableAttr";
// import { tableColAttribute } from "./comAttribute/tableColAttr"
import { cascaderAttribute } from "./comAttribute/cascaderAttr";
import { checkboxAttribute } from "./comAttribute/checkboxAttr";
import { datePickerAttribute } from "./comAttribute/datePickerAttr";
import { dateTimePickerAttribute } from "./comAttribute/dateTimePickerAttr";
import { inputNumberAttribute } from "./comAttribute/inputNumberAttr";
import { radioAttribute } from "./comAttribute/radioAttr";
import { rateAttribute } from "./comAttribute/rateAttr";
import { selectAttribute } from "./comAttribute/selectAttr";
import { sliderAttribute } from "./comAttribute/sliderAttr";
import { switchAttribute } from "./comAttribute/switchAttr";
import { avatarAttribute } from "./comAttribute/avatarAttr";
import { badgeAttribute } from "./comAttribute/badgeAttr";
import { calendarAttribute } from "./comAttribute/calendarAttr";
import { cardAttribute } from "./comAttribute/cardAttr";
import { emptyAttribute } from "./comAttribute/emptyAttr";
import { imageAttribute } from "./comAttribute/imageAttr";
import { descriptionsAttribute } from "./comAttribute/descriptionsAttr";
import { paginationAttribute } from "./comAttribute/paginationAttr";
import { progressAttribute } from "./comAttribute/progressAttr";
import { formAttribute } from "./comAttribute/formAttr";
import { rowAttribute } from "./comAttribute/rowAttr";
import { colAttribute } from "./comAttribute/colAttr";

interface AttributeMap {
  [key: string]: ComAttribute[];
}

interface ComAttribute {
  propName: string;
  label: string;
  propValue: string;
  type:
    | "input"
    | "select"
    | "radio"
    | "switch"
    | "colorPicker"
    | "icon-dialog"
    | "input-number"
    | "data-dialog"
    | "colData"
    | "height-switch"
    | "checkList"
    | "date-picker"
    | "time-picker"
    | "select-picker"
    | "radioList"
    | "selectList"
    | "rate"
    | "radio-button"
    | "input-number-position"
    | "desColData";
  options?: Array<{ label: string; value: any }>;
  defaultValue?: any;
}

const attributeMap: AttributeMap = {
  ElButton: buttonAttribute,
  ElIcon: iconAttribute,
  ElInput: inputAttribute,
  ElTable: tableAttribute,
  // ElTableColumn: tableColAttribute  // 由于表格列属性和表格属性不在同一个组件中，所以不需要在这里注册
  ElCascader: cascaderAttribute,
  ElCheckbox: checkboxAttribute,
  ElDatePicker: datePickerAttribute,
  ElDateTimePicker: dateTimePickerAttribute,
  ElInputNumber: inputNumberAttribute,
  ElRadio: radioAttribute,
  ElRate: rateAttribute,
  ElSelect: selectAttribute,
  ElSlider: sliderAttribute,
  ElSwitch: switchAttribute,
  ElAvatar: avatarAttribute,
  ElBadge: badgeAttribute,
  ElCalendar: calendarAttribute,
  ElCard: cardAttribute,
  ElEmpty: emptyAttribute,
  ElImage: imageAttribute,
  ElDescriptions: descriptionsAttribute,
  ElPagination: paginationAttribute,
  ElProgress: progressAttribute,
  ElForm: formAttribute,
  ElRow: rowAttribute,
  ElCol: colAttribute,
};

export { attributeMap, type ComAttribute };
