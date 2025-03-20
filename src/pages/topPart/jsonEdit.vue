<template>
  <div class="code-json-editor">
    <vue-json-editor
      :value="dataList"
      :showBtns="false"
      mode="code"
      lang="zh"
      @json-change="onJsonChange"
      @json-save="onJsonSave"
      @has-error="onError"
    ></vue-json-editor>
  </div>
</template>

<script setup>
import vueJsonEditor from "vue-json-editor";
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  dataList: Object,
});
const emit = defineEmits(["jsonChange"]);
const dataList = props.dataList;
const onJsonChange = (value) => {
  emit("jsonChange", value);
  console.log("json has been changed");
};

const onError = (value) => {
  console.log("json has error");
};

const onJsonSave = (value) => {
  console.log("json has been saved", value);
};
</script>
<style lang="scss" scoped>
.code-json-editor {
  ::v-deep {
    /* jsoneditor右上角默认有一个链接,加css去掉 */
    .jsoneditor-poweredBy {
      display: none !important;
    }

    /*修改高度*/
    div.jsoneditor-outer {
      height: 400px;
    }
    /*隐藏菜单栏背景颜色*/
    div.jsoneditor-menu {
      background-color: #000;
      border-bottom: 1px solid #000;
      display: none;
    }

    /*修改输入框边框颜色*/
    div.jsoneditor {
      border: 1px solid #000;
    }
    .ace-jsoneditor .ace_gutter {
      background: none;
    }
    .ace-jsoneditor .ace_marker-layer .ace_active-line {
      background: none;
    }
    .ace-jsoneditor .ace_focus {
      background: blue;
    }
  }
}
</style>
