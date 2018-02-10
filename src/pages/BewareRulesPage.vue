<template>
  <!--预警规则设置-->
  <div class="beware-rules">

    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="预警类型" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.bewareType"></v-select>
        </v-form-item>
        <v-form-item label="预警子类型" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.bewareType2"></v-select>
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
            新增规则
          </v-button>
        </div>
      </div>
      <v-table>
        <table class="wk-table" style="table-layout:fixed;">
          <thead class="ant-table-thead">
          <tr>
            <th>序号</th>
            <th>类型</th>
            <th>预警子类型</th>
            <th>属性名称</th>
            <th>绿色</th>
            <th>黄色</th>
            <th>橙色</th>
            <th>红色</th>
            <th>创建时间</th>
            <th>更新时间</th>
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
              <a class="m-r-xs" href="javascript:;" @click="showModal(1)">编辑</a>
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

    <!--模态框-->
    <div class="g-modal">
      <v-modal :title="modal.title"
               :visible="modal.visible"
               :maskClosable="false"
               :width="500"
               @cancel="handleCancel('create')">
        <beware-rules-opiton
          ref="bewareRulesOption"
          :type="modal.title">
        </beware-rules-opiton>
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
  <!--预警规则设置 end-->
</template>

<script>
  import vTable from '@/components/table'
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'
  import BewareRulesOpiton from './modal/bewareRulesOption'
  export default {
    name: "beware-rules-page",
    data() {
      return {
        filterList: {
          st: "",
          et: ""
        },
        option: {
          bewareType2: filterSelect.bewareTypeOption2,
          bewareType: filterSelect.bewareTypeOption
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
      vTable,
      BewareRulesOpiton
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
    }
  }
</script>

<style scoped>

</style>
