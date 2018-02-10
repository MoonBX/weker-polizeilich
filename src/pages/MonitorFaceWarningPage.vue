<template>
  <!--人脸预警管理-->
  <div class="monitor-face-warning">

    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="小区" class="m-b-sm">
          <v-select v-model="filterList.aka"
                    tags style="width: 120px;"
                    :data="option.village">
          </v-select>
        </v-form-item>
        <v-form-item label="楼栋名称" class="m-b-sm">
          <v-select v-model="filterList.aka"
                    tags style="width: 120px;"
                    :data="option.village">
          </v-select>
        </v-form-item>
        <v-form-item label="单元号" class="m-b-sm">
          <v-select v-model="filterList.aka"
                    tags style="width: 120px;"
                    :data="option.village">
          </v-select>
        </v-form-item>
        <v-form-item label="设备名称" class="m-b-sm">
          <v-select v-model="filterList.aka"
                    tags style="width: 120px;"
                    :data="option.device">
          </v-select>
        </v-form-item>
        <v-form-item label="姓名" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入姓名" style="width: 120px;"></v-input>
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
            <th>布控照片</th>
            <th>预警照片</th>
            <th>相似度</th>
            <th>布控原因</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>采集位置</th>
            <th>采集时间</th>
            <th>布控时间</th>
            <th>核实状态</th>
            <th>处置人</th>
            <th>处置时间</th>
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
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span class="state-circle circle-green"></span>
                通过
              </td>
              <td></td>
              <td></td>
              <td>
                <a href="javascript:;" @click="showModal">处理</a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span class="state-circle circle-red"></span>
                未通过
              </td>
              <td></td>
              <td></td>
              <td>
                <a href="javascript:;" @click="showModal">处理</a>
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
               @cancel="handleCancel">
        <monitor-face-warning-deal
          ref="monitorFaceWarningDeal"
          :type="modal.title">
        </monitor-face-warning-deal>
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

</template>

<script>
  import util from '../util/util'
  import vTable from '@/components/table'
  import {filterSelect} from '../data/filterSelect'
  import MonitorFaceWarningDeal from "./modal/monitorFaceWarningDeal"
  export default {
    name: "monitor-face-warning-page",
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
        },
        modal: {
          visible: false,
          title: ""
        }
      }
    },
    components: {
      vTable,
      MonitorFaceWarningDeal
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
       * */
      showModal(){
        this.modal = {
          visible: true,
          title: "房屋预警处置"
        }
      },
      handleCancel(){
        this.modal.visible = false;
      }
    }
  }
</script>

<style scoped>

</style>
