<template>
  <!--警情处置-->
  <div class="situation-standard">

    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="警情名称" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入警情名称" style="width: 120px;"></v-input>
        </v-form-item>
        <v-form-item label="警情分类" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.situation"></v-select>
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
      <div>
        <div class="prop-button-group pull-right m-b-sm">
          <v-button type="primary"
                    @click="showModal(0)"
                    class="m-r-sm">
            新增
          </v-button>
        </div>
      </div>
      <v-table>
        <table class="wk-table" style="table-layout:fixed;">
          <thead class="ant-table-thead">
          <tr>
            <th>序号</th>
            <th>警情名称</th>
            <th>警情分类</th>
            <th>处置流程描述</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody class="ant-table-tbody">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <a href="javascript:;" class="m-r-xs">查看</a>
              <a href="javascript:;" class="m-r-xs" @click="showModal(1)">编辑</a>
              <a href="javascript:;">删除</a>
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
  <!--黑名单预警 end-->
</template>

<script>
  import vTable from '@/components/table'
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'
  export default {
    name: "situation-standard-page",
    data() {
      return {
        filterList: {
          st: "",
          et: ""
        },
        option: {
          situation: filterSelect.situationOption
        },
        table: {
          data: [],
          total: 0,
          pageValue: 1
        },
        modal: {
          visible: false,
          title: "",
          type: 0
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

      /**
       * modal
       * params: type  (0: 新建 ; 1: 编辑)
       * */
      showModal(){
        this.modal = {
          visible: true,
          title: '新增规则'
        }
      },
      handleCancel(){
        this.modal.visible = false;
      },
    }
  }
</script>

<style scoped>

</style>

