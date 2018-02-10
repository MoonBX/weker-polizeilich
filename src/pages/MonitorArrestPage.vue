<template>
  <!--门禁抓拍-->
  <div class="monitor-arrest">

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
        <v-form-item label="发布时间" class="m-b-sm">
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

    <!--content-->
    <div class="block-table m-t-sm m-b-md clear">
      <div class="item pull-left m-r-sm">
        <div class="image">照片</div>
        <div class="date">2018-01-29</div>
        <div class="time">23:12:12</div>
        <div class="address">江南凌源-1栋-1单元-A1</div>
        <div class="check">
          <input type="checkbox">
        </div>
      </div>
    </div>
    <div class="pager">
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
    <!--content end-->

  </div>
</template>

<script>
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'
  export default {
    name: "monitor-arrest-page",
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
        table: {
          data: [],
          total: 0,
          pageValue: 1
        }
      }
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

<style lang="scss" scoped>
  .monitor-arrest{
    .block-table{
      .item {
        position: relative;
        padding: 5px;
        width: 18vh;
        height: 23vh;
        min-width: 120px;
        min-height: 155px;
        margin-bottom: 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #e3e5e7;

        .image{
          width: 100%;
          height: 65%;
          background-color: gray;
        }

        .date{
          font-size: 10px;
        }

        .time{
          font-size: 10px;
        }

        .address{
          font-size: 10px;
          color: blue;
        }

        .check{
          height: 10px;
          line-height: 10px;
          input{
            font-size: 10px;
          }
        }
      }
    }
  }
</style>
