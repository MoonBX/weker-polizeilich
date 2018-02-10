<template>
  <!--居民列表-->
  <div class="resident">

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
        <v-form-item label="姓名" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入姓名" style="width: 120px;"></v-input>
        </v-form-item>
        <v-form-item label="性别" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.gender"></v-select>
        </v-form-item>
        <v-form-item label="证件号" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入证件号" style="width: 180px;"></v-input>
        </v-form-item>
        <v-form-item label="手机号码" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入手机号码" style="width: 180px;"></v-input>
        </v-form-item>
        <v-form-item label="职业" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.career"></v-select>
        </v-form-item>
        <v-form-item label="政治面貌" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.political"></v-select>
        </v-form-item>
        <v-form-item label="居民类型" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.residentType"></v-select>
        </v-form-item>
        <v-form-item label="居住类型" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.liveType"></v-select>
        </v-form-item>
        <v-form-item label="实名状态" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.realNameStatus"></v-select>
        </v-form-item>
        <v-form-item label="年龄" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="起始年龄" style="width: 80px;"></v-input> -
          <v-input v-model="filterList.aka" placeholder="结束年龄" style="width: 80px;"></v-input>
        </v-form-item>
        <v-form-item label="入住时间段" class="m-b-sm">
          <v-date-picker v-model="filterList.st" :disabled-date="disabledStartDate"></v-date-picker>
          <span>-</span>
          <v-date-picker v-model="filterList.et" :disabled-date="disabledEndDate"></v-date-picker>
        </v-form-item>
        <v-form-item label="开门时间段" class="m-b-sm">
          <v-date-picker v-model="filterList.st" :disabled-date="disabledStartDate"></v-date-picker>
          <span>-</span>
          <v-date-picker v-model="filterList.et" :disabled-date="disabledEndDate"></v-date-picker>
        </v-form-item>
        <v-form-item label="国籍" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.nationality"></v-select>
        </v-form-item>
        <v-form-item label="迁出状态" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.moveOutStatus"></v-select>
        </v-form-item>
        <v-form-item label="证件类型" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.certificateType"></v-select>
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
    <!--搜索面板end-->

    <!--表格-->
    <div class="g-table-content m-t-sm m-b-md">
      <v-table>
        <table class="wk-table" style="table-layout:fixed;">
          <thead class="ant-table-thead">
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>出生日期</th>
            <th>性别</th>
            <th>年龄</th>
            <th>民族</th>
            <th>证件详情</th>
            <th>职业</th>
            <th>政治面貌</th>
            <th>国籍</th>
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
              <a href="javascript:;" class="m-r-xs">居民详情</a>
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
               :width="500"
               @cancel="handleCancel('create')">
        <resident-option
          ref="residentOption"
          :type="modal.title">
        </resident-option>
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
  import vTable from '@/components/table'
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'
  import ResidentOption from './modal/residentOption'
  export default {
    name: "resident-page",
    data() {
      return {
        filterList: {
          st: "",
          et: ""
        },
        option: {
          village: filterSelect.villageOption,
          device: filterSelect.deviceOption,
          gender: filterSelect.genderOption,
          career: filterSelect.careerOption,
          political: filterSelect.politicalOption,
          residentType: filterSelect.residentTypeOption,
          liveType: filterSelect.liveTypeOption,
          realNameStatus: filterSelect.realNameStatusOption,
          nationality: filterSelect.nationalityOption,
          moveOutStatus: filterSelect.moveOutStatusOption,
          certificateType: filterSelect.certificateTypeOption,
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
      ResidentOption
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
          title: '编辑居民信息'
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
