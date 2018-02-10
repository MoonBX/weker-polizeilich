<template>
  <!--人脸聚类-->
  <div class="monitor-face-warning">

    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="小区" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.village"></v-select>
        </v-form-item>
        <v-form-item label="楼栋名称" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.village"></v-select>
        </v-form-item>
        <v-form-item label="单元号" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.village"></v-select>
        </v-form-item>
        <v-form-item label="设备名称" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.device"></v-select>
        </v-form-item>
        <v-form-item label="时间" class="m-b-sm">
          <v-date-picker v-model="filterList.st" :disabled-date="disabledStartDate"></v-date-picker>
          <span>-</span>
          <v-date-picker v-model="filterList.et" :disabled-date="disabledEndDate"></v-date-picker>
        </v-form-item>
        <v-button class="m-b-sm m-r-sm" type="primary" html-type="button" icon="search"
                  @click="filterTable()">
          查询
        </v-button>
        <v-button class="m-b-sm m-r-sm" type="ghost" @click="resetTable()">
          清空
        </v-button>
      </v-form>
    </div>
    <!--搜索面板 end-->

    <div class="cluster">
      <div>
        <ribbon :title="'人脸聚类'" :type="'primary'"></ribbon>
      </div>
      <div>
        content
      </div>
    </div>

    <div class="cluster">
      <div>
        <ribbon :title="'预警人员'" :type="'error'"></ribbon>
      </div>
      <div>
        content
      </div>
    </div>


  </div>
  <!--人脸聚类 end-->
</template>

<script>
  import ribbon from '@/components/ribbon'
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'
  export default {
    name: "monitor-face-cluster-page",
    data() {
      return {
        filterList: {
          st: "",
          et: ""
        },
        option: {
          village: filterSelect.villageOption,
          device: filterSelect.deviceOption
        },
      }
    },
    components: {
      ribbon
    },
    methods: {
      /**
       * 设置开始和结束时间范围
       * current：默认参数
       * */
      disabledStartDate(current){
        return util.disabledStartDate(current, this.filterList.et);
      },
      disabledEndDate(current){
        return util.disabledEndDate(current, this.filterList.st);
      },

      /**
       * 搜索查询
       * */
      filterTable() {
        let newObj = util.checkFilter(this.filterList);
        if(newObj.st&&newObj.et){
          newObj.st = Date.parse(new Date(this.filterList.st));
          newObj.et = Date.parse(new Date(this.filterList.et)) + 24 * 60 * 60 * 1000 - 1000;
        }

        /**
         * todo:
         * 获取筛选列表
         * params: { pageNo, newObj }
         * */

      },

      /**
       * 清空查询内容
       * */
      resetTable() {
        this.filterList = {};
        /**
         * todo:
         * 获取初始列表
         * params: { pageNo }
         * */

      },
    }
  }
</script>

<style scoped>

</style>
