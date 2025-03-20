<template>
  <!-- 输入框 -->
  <div v-if="options.type === 'input'">
    <div v-if="options.propName === 'defaultChoose'">
      <el-input
        v-model="comPropsObj[options.propName]"
        disabled
        style="width: 180px"
      />
    </div>
    <!-- 字段标识 -->
    <div v-else-if="options.propName === 'comUUID'">
      <el-input
        v-model="comStore.currentComponent.comUUID"
        disabled
        style="width: 180px"
      />
    </div>
    <!-- 后缀 -->
    <div v-else-if="options.propName === 'labelSuffixText'">
      <el-switch v-model="isFormTrue" @click="setLabelSuffixForm" />
    </div>

    <div v-else>
      <el-input v-model="comPropsObj[options.propName]" style="width: 180px" />
    </div>
  </div>

  <!-- 选择框 -->
  <div v-else-if="options.type === 'select'">
    <el-select v-model="comPropsObj[options.propName]" style="width: 180px">
      <el-option
        v-for="item in options.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :type="item.type"
      />
    </el-select>
  </div>

  <!-- 颜色 -->
  <div v-else-if="options.type === 'colorPicker'">
    <el-color-picker v-model="comPropsObj[options.propName]" />
  </div>

  <!-- 数字输入框 -->
  <div v-else-if="options.type === 'input-number'">
    <div v-if="options.propValue === 'min0'">
      <el-input-number
        v-model="comPropsObj[options.propName]"
        min="0"
        style="width: 180px"
      />
      px
    </div>
    <div v-else-if="options.propValue === '1to100'">
      <el-input-number
        v-model="comPropsObj[options.propName]"
        min="0"
        max="100"
        style="width: 180px"
      />
    </div>
    <div v-else-if="options.propValue === 'col'">
      <el-input-number
        v-model="comPropsObj[options.propName]"
        min="0"
        max="24"
        style="width: 180px"
      />
    </div>
    <div v-else>
      <el-input-number
        v-model="comPropsObj[options.propName]"
        style="width: 180px"
      />
      px
    </div>
  </div>

  <!-- 开关 -->
  <div v-else-if="options.type === 'switch'">
    <div v-if="options.propName === 'flex'">
      <el-switch v-model="comPropsObj[options.propName]" disabled />
    </div>
    <div v-else>
      <el-switch v-model="comPropsObj[options.propName]" />
    </div>
  </div>

  <!-- 选择 -->
  <div v-else-if="options.type === 'select-picker'">
    <el-select
      v-model="comPropsObj[options.propName]"
      :multiple="comPropsObj['multiple']"
      :clearable="comPropsObj['clearable']"
      :collapse-tags="comPropsObj['collapse-tags']"
      :collapse-tags-tooltip="comPropsObj['collapse-tags-tooltip']"
      :max-collapse-tags="comPropsObj['max-collapse-tags']"
      style="width: 180px"
    >
      <el-option
        v-for="item in comPropsObj.selectList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </el-select>
  </div>

  <!-- 多选数据 -->
  <div v-else-if="options.type === 'checkList'">
    <span style="margin-left: 38px">选项名</span>
    <span style="margin-left: 46px">选项值</span>

    <el-checkbox-group v-model="comPropsObj.defaultChoose">
      <el-checkbox
        v-for="(check, index) in comPropsObj[options.propName]"
        :label="check.label"
        :value="check.value"
        :key="check.value"
        style="margin-top: 10px"
      >
        <el-input v-model="check.label" style="width: 80px"></el-input>
        <el-input
          v-model="check.value"
          style="width: 80px; margin-left: 10px; margin-right: 10px"
        ></el-input>
        <el-icon
          color="black"
          @click="
            handelCheckDelete(
              comPropsObj[options.propName],
              comPropsObj.defaultChoose,
              index
            )
          "
          ><Delete
        /></el-icon>
      </el-checkbox>
    </el-checkbox-group>
    <div class="addCol" @click="handleAddDetail(comPropsObj[options.propName])">
      添加列 +
    </div>
  </div>

  <!-- 单选数据 -->
  <div v-else-if="options.type === 'radioList'">
    <span style="margin-left: 38px">选项名</span>
    <span style="margin-left: 46px">选项值</span>

    <el-radio-group v-model="comPropsObj.defaultChoose">
      <el-radio
        v-for="(check, index) in comPropsObj[options.propName]"
        :label="check.label"
        :value="check.value"
        :key="check.value"
        style="margin-top: 10px"
      >
        <el-input v-model="check.label" style="width: 80px"></el-input>
        <el-input
          v-model="check.value"
          style="width: 80px; margin-left: 10px; margin-right: 10px"
        ></el-input>
        <el-icon
          color="black"
          @click="
            handelCheckDelete(
              comPropsObj[options.propName],
              comPropsObj.defaultChoose,
              index
            )
          "
          ><Delete
        /></el-icon>
      </el-radio>
    </el-radio-group>
    <div class="addCol" @click="handleAddDetail(comPropsObj[options.propName])">
      添加列 +
    </div>
  </div>

  <!-- 日期选择 -->
  <div v-else-if="options.type === 'date-picker'">
    <el-date-picker
      v-model="comPropsObj[options.propName]"
      placeholder="选择日期"
      style="width: 180px"
      format="YYYY-MM-DD"
      :type="comPropsObj['type']"
      :unlink-panels="comPropsObj['unlink-panels']"
      start-placeholder="Start"
      end-placeholder="End"
    />
  </div>

  <!-- 时间选择 -->
  <div v-else-if="options.type === 'time-picker'">
    <el-date-picker
      v-model="comPropsObj[options.propName]"
      :type="comPropsObj['type']"
      placeholder="选择时间"
      style="width: 180px"
      start-placeholder="Start"
      end-placeholder="End"
    />
  </div>

  <!-- 评分 -->
  <div v-else-if="options.type === 'rate'">
    <el-rate
      v-model="comPropsObj[options.propName]"
      :max="comPropsObj['max']"
      :allow-half="comPropsObj['allow-half']"
      :disabled="comPropsObj['disabled']"
      :clearable="comPropsObj['clearable']"
      style="width: 180px"
    />
  </div>

  <!-- radio-button -->
  <div v-else-if="options.type === 'radio-button'">
    <el-radio-group v-model="comPropsObj[options.propName]">
      <el-radio-button
        v-for="item in options.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-radio-button>
    </el-radio-group>
  </div>

  <!-- 滑块垂直模式 -->
  <div v-else-if="options.type === 'vertical'">
    <el-switch v-model="comPropsObj[options.propName]"></el-switch>
  </div>

  <!-- 偏移量 -->
  <div v-else-if="options.type === 'input-number-position'">
    <div v-if="options.propName === 'column'">
      <el-input-number
        v-model="comPropsObj[options.propName]"
        controls-position="right"
        style="width: 180px"
        min="0"
      />
    </div>

    <div v-else="options.propName === 'column'">
      <el-input-number
        v-model="comPropsObj[options.propName]"
        controls-position="right"
        style="width: 180px"
      />
    </div>
  </div>

  <!-- 图标弹窗 -->
  <div v-if="options.type === 'icon-dialog'">
    <el-button plain @click="handleOpen">选择图标</el-button>
    <iconDialog
      v-model="dialogVisible"
      title="选择图标"
      width="500"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    ></iconDialog>
  </div>

  <!-- data弹窗 -->
  <div v-else-if="options.type === 'data-dialog'">
    <el-button plain @click="handleOpen">编辑数据</el-button>
    <tableDialog
      v-model="dialogVisible"
      title="表格数据"
      width="500"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
    </tableDialog>
  </div>

  <!-- 表格列数据 -->
  <div v-else-if="options.type === 'colData'">
    <el-card style="width: 240px">
      <div class="tableColBox">
        <el-table
          :data="comPropsObj[options.propName]"
          :row-class-name="activeClass"
          style="width: 100%"
        >
          <el-table-column width="26">
            <template #default="scope">
              <el-popover
                placement="left"
                title="列设置"
                :width="260"
                trigger="click"
              >
                <template #reference>
                  <el-icon size="14px" style="margin-top: 14px">
                    <MoreFilled
                  /></el-icon>
                </template>
                <tableColDialog :rowData="scope.row"></tableColDialog>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="label" label="列标题" width="90">
            <template #default="{ row }">
              <el-input
                v-model="row.label"
                class="colInput"
                style="width: 78px"
              />
            </template>
          </el-table-column>
          <el-table-column prop="value" label="列字段" width="90">
            <template #default="{ row }">
              <el-input
                v-model="row.value"
                class="colInput"
                style="width: 78px"
              />
            </template>
          </el-table-column>
          <el-table-column width="30">
            <template #default="scope">
              <el-icon
                size="14px"
                style="margin-right: 6px; margin-top: 14px; color: #df776f"
                @click="handleDelete(options.type, scope.$index, scope.row)"
                ><Delete
              /></el-icon>
            </template>
          </el-table-column>
        </el-table>
        <div
          class="addCol"
          @click="handleAddDetail(comPropsObj[options.propName])"
        >
          添加列 +
        </div>
      </div>
    </el-card>
  </div>

  <!-- 描述列表列数据 -->
  <div v-else-if="options.type === 'desColData'">
    <el-card style="width: 240px">
      <div class="tableColBox">
        <el-table
          :data="comPropsObj[options.propName]"
          :row-class-name="activeClass"
          style="width: 100%"
        >
          <el-table-column width="40">
            <template #default="scope">
              <el-popover
                placement="left"
                title="列设置"
                :width="260"
                trigger="click"
              >
                <template #reference>
                  <el-icon size="14px" style="margin-top: 14px">
                    <MoreFilled
                  /></el-icon>
                </template>
                <descriptColDialog :rowData="scope.row"></descriptColDialog>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="列表项" width="160">
            <template #default="{ row }">
              <el-input
                v-model="row.label"
                class="colInput"
                style="width: 120px"
              />
            </template>
          </el-table-column>

          <el-table-column width="30">
            <template #default="scope">
              <el-icon
                size="14px"
                style="margin-right: 6px; margin-top: 14px; color: #df776f"
                @click="handleDelete(options.type, scope.$index, scope.row)"
                ><Delete
              /></el-icon>
            </template>
          </el-table-column>
        </el-table>
        <div
          class="addCol"
          @click="handleAddDetail(comPropsObj[options.propName])"
        >
          添加列 +
        </div>
      </div>
    </el-card>
  </div>

  <!-- 固定表头 -->
  <div v-else-if="options.type === 'height-switch'">
    <el-switch v-model="comPropsObj[options.propName]" />
    <div v-if="comPropsObj[options.propName]">
      高度：
      <el-input-number v-model="comPropsObj[options.propName]" />
      px
    </div>
  </div>

  <!-- 级联数据弹窗 -->
  <div v-else-if="options.type === 'cascader-dialog'">
    <el-button plain @click="handleOpen">编辑级联数据</el-button>
    <tableDialog
      v-model="dialogVisible"
      title="级联数据"
      width="500"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
    </tableDialog>
  </div>

  <!-- 选择器 -->
  <div v-else-if="options.type === 'selectList'">
    <el-card style="width: 240px">
      <div class="tableColBox">
        <el-table
          :data="comPropsObj[options.propName]"
          :row-class-name="activeClass"
          style="width: 100%"
        >
          <el-table-column width="26">
            <template #default="scope">
              <el-popover
                placement="left"
                title="选项设置"
                :width="260"
                trigger="click"
              >
                <template #reference>
                  <el-icon size="14px" style="margin-top: 14px">
                    <MoreFilled
                  /></el-icon>
                </template>
                <selectColDialog :rowData="scope.row"></selectColDialog>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="label" label="选项名" width="90">
            <template #default="{ row }">
              <el-input
                v-model="row.label"
                class="colInput"
                style="width: 78px"
              />
            </template>
          </el-table-column>
          <el-table-column prop="value" label="选项值" width="90">
            <template #default="{ row }">
              <el-input
                v-model="row.value"
                class="colInput"
                style="width: 78px"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column width="30">
            <template #default="scope">
              <el-icon
                size="14px"
                style="margin-right: 6px; margin-top: 14px; color: #df776f"
                @click="
                  handleSelectDelete(
                    comPropsObj[options.propName],
                    comPropsObj.defaultChoose,
                    scope.$index
                  )
                "
                ><Delete
              /></el-icon>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <div class="addCol" @click="handleAddDetail(comPropsObj[options.propName])">
      添加列 +
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useComStore } from "../../../../store/comStore";
import iconDialog from "../../../dialog/iconDialog.vue";
import tableDialog from "../../../dialog/tableDialog.vue";
import tableColDialog from "../../../dialog/tableColDialog.vue";
import selectColDialog from "../../../dialog/selectColDialog.vue";
import descriptColDialog from "../../../dialog/descriptColDialog.vue";

const props = defineProps({
  options: Object,
});
const comStore = useComStore();
const dialogVisible = ref(false);
const dialogTitle = ref("");
const isTrue = ref(false);
const isFormTrue = ref(false);

const comPropsObj = computed({
  get() {
    return comStore.currentComponent.propsObj;
  },
  set(val) {
    comStore.currentComponent.propsObj = val;
  },
});

const test = () => {
  // console.log(comStore.currentDragComponent, "com");
};
const handleOpen = () => {
  dialogVisible.value = true;
};
const handleConfirm = () => {
  dialogVisible.value = false;
};
const handleClose = (done) => {
  done();
};
const handleCancel = () => {
  dialogVisible.value = false;
};

const handleAddDetail = (item) => {
  item.push({
    label: "",
    value: randomString(4),
  });
};
const handleDelete = (item, index, row) => {
  if (item === "colData") {
    comPropsObj.value.colData.splice(index, 1);
  }
  if (item === "desColData") {
    comPropsObj.value.desColData.splice(index, 1);
  }
};
const handleSelectDelete = (item1, item2, index) => {
  const deleteItemValue = item1[index].value;
  item1.splice(index, 1);
  comPropsObj.value.content = "";
};
const handelCheckDelete = (item1, item2, index) => {
  const deleteItemValue = item1[index].value;
  item1.splice(index, 1);
  if (Array.isArray(item2)) {
    comPropsObj.value.defaultChoose = item2.filter(
      (item) => item !== deleteItemValue
    );
  }
  if (typeof item2 === "string") {
    comPropsObj.value.defaultChoose = "";
  }
};

const setLabelSuffix = () => {
  if (isTrue.value === true) {
    formPropsObj.value.labelSuffixText = "：";
  } else {
    formPropsObj.value.labelSuffixText = "";
  }
};
const setLabelSuffixForm = () => {
  if (isFormTrue.value === true) {
    comPropsObj.value.labelSuffixText = "：";
  } else {
    comPropsObj.value.labelSuffixText = "";
  }
};
function randomString(e) {
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}
</script>

<style scoped>
.tableColBox {
  width: 240px;
}
.addCol {
  width: 100%;
  color: rgb(93, 157, 252);
  margin: 8px 16px;
  cursor: pointer;
}
.colInput {
  margin-top: 10px;
}
</style>
