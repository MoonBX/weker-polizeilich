<template>
  <!--开门记录-->
  <div class="entrance-record">

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
        <v-form-item label="开门方式" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.open"></v-select>
        </v-form-item>
        <v-form-item label="发布时间" class="m-b-sm">
          <v-date-picker v-model="filterList.st" :disabled-date="disabledStartDate"></v-date-picker>
          <span>-</span>
          <v-date-picker v-model="filterList.et" :disabled-date="disabledEndDate"></v-date-picker>
        </v-form-item>
        <v-form-item label="姓名" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入姓名" style="width: 120px;"></v-input>
        </v-form-item>
        <v-form-item label="手机号" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入手机号" style="width: 120px;"></v-input>
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

    <!--表格-->
    <div class="g-table-content m-t-sm m-b-md">
      <v-table>
        <table class="wk-table" style="table-layout:fixed;">
          <thead class="ant-table-thead">
          <tr>
            <th>序号</th>
            <th>开门日期</th>
            <th>姓名</th>
            <th>开门方式</th>
            <th>位置信息</th>
            <th>开门照片</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody class="ant-table-tbody">
          <tr>
            <td>1</td>
            <td>2018-02-03 16:33:14</td>
            <td>张文</td>
            <td>开门方式</td>
            <td>1栋1单元A1</td>
            <td>
              <v-popover placement="leftBottom" title="Title" trigger="click">
                <v-button>LT</v-button>
                <div slot="content">
                  <p>Content</P>
                  <p>Content</P>
                </div>
              </v-popover>
            </td>
            <td>
              <a href="javascript:;" class="m-r-xs">视频录像</a>
              <a href="javascript:;" class="m-r-xs">门禁位置</a>
            </td>
          </tr>
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
  <!--开门记录-->

</template>

<script>
  import util from '../util/util'
  import vTable from '@/components/table'
  import {filterSelect} from '../data/filterSelect'

  export default {
    name: "entrance-record-page",
    data() {
      return {
        filterList: {},
        option: {
          village: filterSelect.villageOption,
          device: filterSelect.deviceOption,
          open: filterSelect.openOption,
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
      disabledStartDate(current) {
        return util.disabledStartDate(current, this.filterList.et);
      },
      disabledEndDate(current) {
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

      }

    },
    created(){
      this.getTableData();
    }
  }
</script>

<style scoped>

</style>
