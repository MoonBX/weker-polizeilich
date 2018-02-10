<template>
  <!--房屋预警-->
  <div class="beware-room">

    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="预警级别" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.bewareLevel"></v-select>
        </v-form-item>
        <v-form-item label="预警类型" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.bewareType"></v-select>
        </v-form-item>
        <v-form-item label="预警时间" class="m-b-sm">
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

    <!--表格-->
    <div class="g-table-content m-t-sm m-b-md">
      <div>
        <div class="prop-button-group pull-right m-b-sm">
          <v-button type="primary"
                    @click="showModal"
                    class="m-r-sm">
            处理
          </v-button>
        </div>
      </div>
      <v-table>
        <table class="wk-table" style="table-layout:fixed;">
          <thead class="ant-table-thead">
          <tr>
            <th>序号</th>
            <th>全选</th>
            <th>预警级别</th>
            <th>预警类型</th>
            <th>预警内容</th>
            <th>房屋地址</th>
            <th>房屋属性</th>
            <th>房屋联系人</th>
            <th>预警时间</th>
            <th>是否恢复</th>
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
            <td>
              <a href="javascript:;">开门记录</a>
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
        <handle-room-beware
          ref="residentOption"
          :type="modal.title">
        </handle-room-beware>
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
  <!--房屋预警 end-->
</template>

<script>
  import vTable from '@/components/table'
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'
  import HandleRoomBeware from './modal/handleRoomBeware'

  export default {
    name: "beware-room-page",
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
        },
        modal: {
          visible: false,
          title: ""
        }
      }
    },
    components: {
      HandleRoomBeware,
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

      /**
       * modal
       * params: type  (0: 新建 ; 1: 编辑)
       * */
      showModal(){
        this.modal = {
          visible: true,
          title: '房屋预警处置'
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
