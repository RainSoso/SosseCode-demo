import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { attributeMap } from "../pages/rightPart/staticUtils/attributeMap";
import { styleAttrs } from "../pages/rightPart/staticUtils/styleAttribute/styleAttrsObj";

interface ComponentItem {
  comUUID: string;
  name: string; // 组件名
  props: any; // 组件自身的props
  comAttrs: comAttrs;
  styleAttrs: any;
  _name: string;
  propsObj: any;
  styleObj: any;
  groupValue: any;
  childList: any;
}
interface comAttrs {
  componentOptions: any[];
}
export const useComStore = defineStore("component", () => {
  // 画布中的所有组件列表
  const componentList = ref<ComponentItem[]>([]);
  const styleAttrsObj = ref({ styleAttrs });
  const styleAttrsValue = computed(() => {
    const styleObj: any = {};
    styleAttrsObj.value.styleAttrs.forEach((item) => {
      styleObj[item.propName] = item.defaultValue;
    });
    return styleObj;
  });

  // 当前选中的组件
  const currentComponent = ref<ComponentItem | null>(null);
  // 当前拖拽的组件
  const currentDragComponent = ref<ComponentItem | null>(null);

  // 组件状态样式
  const clickComUUID = ref<string | null>(null); // 当前选中组件的UUID（通过UUID来高亮组件样式）
  const selectComUUID = ref<string | null>(null); // 无拖拽组件，鼠标经过的组件的UUID
  const currentComUUID = ref<string | null>(null); // 拖拽组件当前经过的组件的UUID
  const dragComUUID = ref<string | null>(null); // 当前拖拽组件的UUID （已经存在于 mainPart 中的组件，更换位置）
  // 添加位置信息状态
  const insertPosition = ref(""); // 'before' | 'after' | 'last' | ''
  // 修改设置当前UUID的方法
  const setCurrentComUUID = (uuid: string | null, position: string = "") => {
    currentComUUID.value = uuid;
    insertPosition.value = position;
  };

  // 根据 uuid 移除组件
  const removeComByUUID = (
    uuid: string,
    list: ComponentItem[] = componentList.value
  ) => {
    // 递归查找
    list.some((item, index) => {
      if (item.comUUID === uuid) {
        list.splice(index, 1);
        return true;
      }
      if (item.childList) {
        return removeComByUUID(uuid, item.childList);
      }
    });
  };

  // 初始化组件
  const initComponent = (component: ComponentItem) => {
    // 组件属性
    const componentName = component._name ? component._name : component.name;

    if (!component.comAttrs) {
      component.comAttrs = {
        componentOptions: JSON.parse(
          JSON.stringify(attributeMap[componentName])
        ),
      };
    }

    // 组件属性默认值对象
    if (!component.propsObj) {
      component.propsObj = {};
      component.comAttrs.componentOptions.forEach((item) => {
        component.propsObj[item.propName] = item.defaultValue;
      });
    }

    // 样式属性
    if (!component.styleAttrs) {
      component.styleAttrs = {
        styleOptions: JSON.parse(
          JSON.stringify(styleAttrsObj.value.styleAttrs)
        ),
      };
    }

    // 样式属性默认值对象
    if (!component.styleObj) {
      component.styleObj = styleAttrsValue.value;
    }

    const newComponent = JSON.parse(JSON.stringify(component));

    return newComponent;
  };

  // 添加组件
  const addComponent = (component: ComponentItem, sourceCom: ComponentItem) => {
    const componentName = component._name ? component._name : component.name;

    // 组件属性
    if (!component.comAttrs) {
      component.comAttrs = {
        componentOptions: JSON.parse(
          JSON.stringify(attributeMap[componentName])
        ),
      };
    }

    // 组件属性默认值对象
    if (!component.propsObj) {
      component.propsObj = {};
      component.comAttrs.componentOptions.forEach((item) => {
        component.propsObj[item.propName] = item.defaultValue;
      });
    }

    // 样式属性
    if (!component.styleAttrs) {
      component.styleAttrs = {
        styleOptions: JSON.parse(
          JSON.stringify(styleAttrsObj.value.styleAttrs)
        ),
      };
    }

    // 样式属性默认值对象
    if (!component.styleObj) {
      component.styleObj = styleAttrsValue.value;
    }

    // 判断是否为布局容器
    if (!sourceCom) return componentList.value.push(component);

    // 多级嵌套布局容器
    const findAndAddToContainer = (list: ComponentItem[]): boolean => {
      for (let item of list) {
        if (item.comUUID === sourceCom.comUUID) {
          if (!item.childList) {
            item.childList = [];
          }
          item.childList.push(component);
          return true;
        }
        // 如果当前项有子列表，递归查找
        if (item.childList && item.childList.length > 0) {
          if (findAndAddToContainer(item.childList)) {
            return true;
          }
        }
      }
      return false;
    };

    findAndAddToContainer(componentList.value);
  };

  // 重置组件状态样式
  const resetComState = () => {
    selectComUUID.value = null;
    currentComUUID.value = null;
    if (clickComUUID.value === null) clickComUUID.value = dragComUUID.value;
    dragComUUID.value = null;
  };

  // 设置当前拖拽的组件
  const setCurrentDragComponent = (component: ComponentItem) => {
    currentDragComponent.value = component;
  };

  return {
    componentList,
    styleAttrsObj,
    currentDragComponent,
    setCurrentDragComponent,
    currentComponent,
    initComponent,
    addComponent,
    styleAttrsValue,
    clickComUUID,
    selectComUUID,
    currentComUUID,
    dragComUUID,
    removeComByUUID,
    resetComState,
    insertPosition,
    setCurrentComUUID,
  };
});
