<template>
  <!--门禁在线-->
  <div class="entrance-online">

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
        <v-form-item label="门禁状态" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.entrance"></v-select>
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

    <!--设备分类-->
    <div class="device-classify clear b-b">
      <div class="item pull-left m-r-sm m-b-sm" :class="item.color" v-for="item in deviceClassifyList">
        <span>{{item.amount}}</span>
        <span>{{item.label}}</span>
      </div>
    </div>
    <!--设备分类 end-->

    <!--表格-->
    <div class="block-table m-t-sm m-b-md clear">
      <div class="item pull-left m-r-sm">
        <div class="title">江南凌源</div>
        <div class="block">1栋</div>
        <div class="unit">1单元 - A1</div>
        <div class="image"></div>
        <div class="button-group">
          <v-button type="success">
            远程管理
          </v-button>
          <v-button type="success">
            开门记录
          </v-button>
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

    <!--表格 end-->

  </div>
</template>

<script>
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'
  export default {
    name: "entrance-online-page",
    data() {
      return {
        filterList: {

        },
        option: {
          village: filterSelect.villageOption,
          device: filterSelect.deviceOption,
          open: filterSelect.openOption,
        },
        deviceClassifyList: [
          { amount: 8, label: '现有设备', color: 'purple'},
          { amount: 8, label: '在线设备', color: 'green'},
          { amount: 8, label: '离线设备', color: 'gray'},
          { amount: 8, label: '门打开', color: 'blue'},
          { amount: 8, label: '门关闭', color: 'green-light'}
        ],
        table: {
          data: [],
          total: 0,
          pageValue: 1
        }
      }
    },
    methods: {
      /**
       * 搜索查询
       * */
      filterTable() {
        let newObj = util.checkFilter(this.filterList);

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
  .entrance-online{
    .device-classify{
      padding-top: 10px;
      .item{
        width: 15vh;
        height: 7vh;
        min-width: 100px;
        min-height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        border-radius: 5px;
        cursor: pointer;
        font-size: 12px;

      }
      span:first-child{
        font-size: 13px;
      }
      .purple{
        background-color: purple;
      }
      .green{
        background-color: green;
      }
      .gray{
        background-color: gray;
      }
      .blue{
        background-color: blue;
      }
      .green-light{
        background-color: lightgreen;
      }
    }
    .block-table{
      .item{
        position: relative;
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
        .title{
          margin-top: 7px;
        }
        .block{
          color: green;
          font-size: 10px;
        }
        .unit{
          font-size: 11px;
        }
        .image{
          width: 40%;
          height: 40%;
          background-color: gray;
          margin-top: 5%;
        }
        .button-group{
          position: absolute;
          bottom: 5px;
          button{
            font-size: 10px;
            height: 20px;
            padding: 0 5px;
          }
        }
      }
    }
  }
</style>
