<template>
  <div class="row">
    <el-date-picker v-model="beginTime" :value-format="beginValueFormat" :type="type" :disabled="disabled"
                    :placeholder="lang === 'en' ? 'Please select the date': '请选择日期'" :picker-options="startDateOption"
                    @change="selectStartDate"/>
    <span>{{lang === 'en' ? 'to': '至'}}</span>
    <el-date-picker v-model="endTime" :value-format="endValueFormat" :type="type" :disabled="disabled"
                    :placeholder="lang === 'en' ? 'Please select the date': '请选择日期'" :picker-options="endDateOption" @change="selectEndDate"/>
  </div>
</template>

<script>
  import dayjs from 'dayjs';
  import i18n from '../lang/index'


  export default {
    name: 'time-range-vue',
    props: {
      startOption: Object,
      endOptions: Object,
      beginTimeFileName: String,
      endTimeFileName: String,
      startDate: String,
      endDate: String,
      beginValueFormat: {
        type: String,
        default: 'yyyy-MM-dd HH:mm:ss'
      },
      endValueFormat: {
        type: String,
        default: 'yyyy-MM-dd HH:mm:ss'
      },
      type: {
        type: String,
        default: 'date'
      },
      disabledSetting: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        beginTime: '',
        endTime: '',
        startDateOption: this.startOption,
        endDateOption: this.endOptions,
        disabled: this.disabledSetting,
        lang: i18n.locale
      };
    },
    watch: {
      disabledSetting: {
        handler(val) {
          this.$set(this, 'disabled', val);
        }
      },
      startDate: {
        handler(val) {
          this.$set(this, 'beginTime', val);
        },
        deep: true,
        immediate: true
      },
      endDate: {
        handler(val) {
          this.$set(this, 'endTime', val);
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      //开始日期控件点击时触发此方法
      selectStartDate() {
        const that = this;
        this.endDateOption = {
          disabledDate: (time) => {
            if (this.beginTime) {
              return time.getTime() < new Date(dayjs(this.beginTime).format('YYYY-MM-DD 00:00:00')).getTime()
            }
            return false;
          }
        };
        this.$emit('emitHandleSearch', this.beginTimeFileName, this.beginTime);
      },
      //结束日期控件点击时触发此方法
      selectEndDate(value) {
        const that = this;
        this.startDateOption = {
          disabledDate: (time) => {
            if (this.endTime) {
              return time.getTime() > new Date(dayjs(this.endTime).format('YYYY-MM-DD 00:00:00')).getTime()
            }
            return false;
          }
        };
        this.$emit('emitHandleSearch', this.endTimeFileName, this.endTime);
      }
    }
  };
</script>

<style scoped>
  .row{
    display: table-cell;
    vertical-align: middle;
    color: #606266;
  }
  span{
    padding : 0 5px;
  }
  .el-date-editor.el-input.el-date-editor--date {
    width: 140px;
  }
  .el-date-editor.el-input.el-date-editor--datetime {
    width: 200px;
  }

</style>
