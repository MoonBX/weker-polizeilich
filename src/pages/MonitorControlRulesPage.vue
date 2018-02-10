<template>
  <!--布控规则管理-->
  <div class="monitor-control-rules">

    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="姓名" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入姓名" style="width: 120px;"></v-input>
        </v-form-item>
        <v-form-item label="布控区域" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.controlArea"></v-select>
        </v-form-item>
        <v-form-item label="类型" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.controlType"></v-select>
        </v-form-item>
        <v-button class="m-b-sm m-r-sm" type="primary" html-type="button" icon="search"
                  @click="filterTable()">
          查询
        </v-button>
        <v-button class="m-b-sm" type="ghost" @click="resetTable()">
          清空
        </v-button>
      </v-form>
    </div>
    <!--搜索面板end-->

    <!--表格-->
    <div class="g-table-content m-t-sm m-b-md">
      <div>
        <div class="prop-button-group pull-right m-b-sm">
          <v-button type="primary"
                    class="m-r-sm" @click="showModal(0)">
            新建规则
          </v-button>
        </div>
      </div>

      <v-table>
        <table class="wk-table" style="table-layout:fixed;">
          <thead class="ant-table-thead">
          <tr>
            <th>序号</th>
            <th>照片</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>布控类型</th>
            <th>布控平台</th>
            <th>布控人</th>
            <th>布控时间</th>
            <th>状态</th>
            <th>关联信息</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody class="ant-table-tbody">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span class="state-circle circle-green"></span>
                通过
              </td>
              <td></td>
              <td>
                <a href="javascript:;" @click="showModal(1)">编辑</a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span class="state-circle circle-red"></span>
                未通过
              </td>
              <td></td>
              <td>
                <a href="javascript:;" @click="showModal(1)">编辑</a>
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

    <!--模态框-->
    <div class="g-modal">
      <v-modal :title="modal.title"
               :visible="modal.visible"
               :maskClosable="false"
               :width="500"
               @cancel="handleCancel('create')">
        <monitor-control-rules-option
          ref="monitorControlRulesOption"
          :type="modal.title">
        </monitor-control-rules-option>
        <div slot="footer">
          <v-button key="cancel"
                    @click="handleCancel">
            取 消
          </v-button>
          <v-button key="confirm"
                    type="primary"
                    @click="postForm">
            提 交
          </v-button>
        </div>
      </v-modal>
    </div>
    <!--模态框end-->

  </div>
  <!--布控规则管理 end-->
</template>

<script>
  import util from '../util/util'
  import vTable from '@/components/table'
  import {filterSelect} from '../data/filterSelect'
  import EntranceRecordPage from "./EntranceRecordPage";
  import MonitorControlRulesOption from "./modal/monitorControlRulesOption"
  export default {
    name: "monitor-control-rules-page",
    data() {
      return {
        filterList: {
          st: "",
          et: ""
        },
        option: {
          controlArea: filterSelect.controlAreaOption,
          controlType: filterSelect.controlTypeOption
        },
        table: {
          data: [],
          total: 0,
          pageValue: 1
        },
        modal: {
          visible: false,
          title: "",
          type: 0,
        }
      }
    },
    components: {
      EntranceRecordPage,
      MonitorControlRulesOption,
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
      showModal(type){
        this.modal = {
          type: type,
          visible: true,
          title: type==0?'新建规则':'编辑规则'
        }
      },
      handleCancel(){
        this.modal.visible = false;
      },

      /**
       * 提交表单
       * */
      postForm(){

      }
    }
  }
</script>

<style scoped>

</style>
