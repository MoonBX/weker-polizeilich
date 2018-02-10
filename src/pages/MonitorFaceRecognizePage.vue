<template>
  <!--人脸识别比对源-->
  <div class="monitor-face-warning">

    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="姓名" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入姓名" style="width: 120px;"></v-input>
        </v-form-item>
        <v-form-item label="电话" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入电话" style="width: 120px;"></v-input>
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
            <th>姓名</th>
            <th>年龄</th>
            <th>电话</th>
            <th>性别</th>
            <th>实名认证照</th>
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
            <td>
              <a href="javascript:;" @click="showModal">编辑</a>
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
               :width="600"
               @cancel="handleCancel">
        <monitor-face-recognize-option
          ref="monitorFaceRecognizeOption"
          :type="modal.title">
        </monitor-face-recognize-option>
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
  import MonitorFaceRecognizeOption from './modal/monitorFaceRecognizeOption'
  import vTable from '@/components/table'
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'

  export default {
    name: "monitor-face-recognize-page",
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
      MonitorFaceRecognizeOption
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
      getTableData(pageNo, params) {

      },

      /**
       * modal
       * */
      showModal(){
        this.modal = {
          visible: true,
          title: "编辑对比源图像"
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
