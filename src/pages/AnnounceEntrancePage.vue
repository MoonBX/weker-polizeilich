<template>
  <!--门禁通知公告-->
  <div class="announce-entrance">

    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="发布范围" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.announceRange"></v-select>
        </v-form-item>
        <v-form-item label="标题" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入标题" style="width: 240px;"></v-input>
        </v-form-item>
        <v-form-item label="类型" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.announceType"></v-select>
        </v-form-item>
        <v-button class="m-b-sm m-r-sm" type="primary"
                  html-type="button"
                  icon="search"
                  @click="filterTable()">
          查询
        </v-button>
        <v-button class="m-b-sm"
                  type="ghost"
                  @click="resetTable()">
          清空
        </v-button>
      </v-form>
    </div>
    <!--搜索面板 end-->

    <!--表格-->
    <div class="g-table-content m-t-sm m-b-md">
      <div>
        <div class="prop-button-group pull-right m-b-sm">
          <v-button type="primary"
                    class="m-r-sm">
            撤销发布
          </v-button>
        </div>
        <div class="prop-button-group pull-right m-b-sm">
          <v-button type="primary"
                    class="m-r-sm">
            新增公告
          </v-button>
        </div>
      </div>

      <v-table>
        <table class="wk-table" style="table-layout:fixed;">
          <thead class="ant-table-thead">
          <tr>
            <th>序号</th>
            <th>全选</th>
            <th>通知类别</th>
            <th>通知标题</th>
            <th>表现形式</th>
            <th>发布范围</th>
            <th>接受对象</th>
            <th>阅读次数</th>
            <th>要求阅读</th>
            <th>阅读反馈</th>
            <th>门禁弹窗</th>
            <th>弹窗时长</th>
            <th>发布状态</th>
            <th>发布人</th>
            <th>发布时间</th>
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
  <!--门禁通知公告 end-->
</template>

<script>
  import vTable from '@/components/table'
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'
  export default {
    name: "announce-entrance-page",
    data() {
      return {
        filterList: {
          st: "",
          et: ""
        },
        option: {
          announceRange: filterSelect.announceRangeOption,
          announceType: filterSelect.announceTypeOption
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
