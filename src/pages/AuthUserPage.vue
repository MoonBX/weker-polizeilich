<template>
  <!--用户列表-->
  <div class="auth-user">

    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="登录名" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入登录名" style="width: 120px;"></v-input>
        </v-form-item>
        <v-form-item label="真实姓名" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入真实姓名" style="width: 120px;"></v-input>
        </v-form-item>
        <v-form-item label="身份证" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入身份证" style="width: 180px;"></v-input>
        </v-form-item>
        <v-button class="m-b-sm m-r-sm"
                  type="primary"
                  html-type="button"
                  icon="search"
                  @click="filterTable()">
          查询
        </v-button>
        <v-button class="m-b-sm m-r-sm"
                  type="ghost"
                  @click="resetTable()">
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
            <th>角色名称</th>
            <th>角色描述</th>
            <th>关联账号</th>
            <th>创建人</th>
            <th>创建时间</th>
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
  <!--用户列表 end-->
</template>

<script>
  import vTable from '@/components/table'
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'
  export default {
    name: "auth-user-page",
    data() {
      return {
        filterList: {
          st: "",
          et: ""
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
