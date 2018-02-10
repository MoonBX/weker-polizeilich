<template>
  <!--人员预警历史-->
  <div class="beware-float-population">

    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="预警级别" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.bewareLevel"></v-select>
        </v-form-item>
        <v-form-item label="预警类型" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.bewareType"></v-select>
        </v-form-item>
        <v-form-item label="居民姓名" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入居民姓名" style="width: 120px;"></v-input>
        </v-form-item>
        <v-form-item label="手机号" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入手机号" style="width: 120px;"></v-input>
        </v-form-item>
        <v-form-item label="身份证号" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入身份证号" style="width: 120px;"></v-input>
        </v-form-item>
        <v-form-item label="时间" class="m-b-sm">
          <v-date-picker v-model="filterList.st" :disabled-date="disabledStartDate"></v-date-picker>
          <span>-</span>
          <v-date-picker v-model="filterList.et" :disabled-date="disabledEndDate"></v-date-picker>
        </v-form-item>
        <v-button class="m-b-sm m-r-sm"
                  type="primary" html-type="button" icon="search"
                  @click="filterTable()">
          查询
        </v-button>
        <v-button class="m-b-sm m-r-sm" type="ghost" @click="resetTable()">
          清空
        </v-button>
      </v-form>
    </div>
    <!--搜索面板 end-->

    <!--表格-->
    <div class="g-table-content m-t-sm m-b-md">
      <v-table>
        <table class="wk-table" style="table-layout:fixed;">
          <thead class="ant-table-thead">
          <tr>
            <th>序号</th>
            <th>全选</th>
            <th>预警级别</th>
            <th>预警类型</th>
            <th>预警内容</th>
            <th>居民属性</th>
            <th>居民姓名</th>
            <th>住址</th>
            <th>预警时间</th>
            <th>核查人</th>
            <th>处理内容</th>
            <th>处理结果</th>
            <th>处理时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody class="ant-table-tbody">

          <div style="width: 100%;height: 20px;"></div>
          </tbody>
        </table>
      </v-table>

      <v-pagination class="m-t-md m-b-md"
                    v-model="table.pageValue"
                    :pageSize="10"
                    :showTotal="showTotal"
                    @change="loadPage"
                    ref="pagination"
                    show-quick-jumper
                    :total="table.total">
      </v-pagination>
    </div>
    <!--表格 end-->

  </div>
  <!--人员预警历史 end-->
</template>

<script>
  import vTable from '@/components/table'
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'
  export default {
    name: "beware-float-population-page",
    data() {
      return {
        filterList: {
          st: "",
          et: ""
        },
        option: {
          bewareLevel: filterSelect.bewareLevelOption,
          bewareType: filterSelect.bewareTypeOption
        },
        table: {
          data: [],
          total: 0,
          pageValue: 1
        }
      }
    },
    components: {
      vTable
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

      /**
       * 获取表格数据
       * */
      getTableData(pageNo, params){

      },
    }
  }
</script>

<style scoped>

</style>

