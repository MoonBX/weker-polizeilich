<template>
  <div class="monitor-control-rules-option clear">
    <v-form direction="horizontal"
            :model="model"
            :rules="rules"
            ref="monitorControlRulesOption"
            style="width: 65%;float: left">
      <v-form-item label="头像"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="avatar" has-feedback>
        <div style="width: 215px; height: 140px">
          <v-upload :name="name" :action="action" drag @change="onChange">
            <v-icon type="plus"></v-icon>
          </v-upload>
        </div>

      </v-form-item>
      <v-form-item label="姓名"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="name" has-feedback>
        <v-input placeholder="请输入姓名"
                 v-model="model.name">
        </v-input>
      </v-form-item>
      <v-form-item label="年龄"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="age" has-feedback>
        <v-input placeholder="请输入年龄"
                 v-model="model.age">
        </v-input>
      </v-form-item>
      <v-form-item label="性别"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="gender" has-feedback>
        <v-select :data="option.gender"
                  v-model="model.gender">
        </v-select>
      </v-form-item>
      <v-form-item label="是否生效"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="effective" has-feedback>
        <v-select :data="option.effective"
                  v-model="model.effective">
        </v-select>
      </v-form-item>
      <v-form-item label="布控类型"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="controlType" has-feedback>
        <v-select
                  :data="option.controlType"
                  v-model="model.controlType">
        </v-select>
      </v-form-item>
      <v-form-item label="布控区域"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="area" has-feedback>
        <v-select :data="option.controlArea"
                  v-model="model.area">
        </v-select>
      </v-form-item>
      <v-form-item label="布控原因"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="content" has-feedback>
        <v-input type="textarea"
                 placeholder="请输入公告内容"
                 autosize
                 v-model="model.content">
        </v-input>
      </v-form-item>
    </v-form>
  </div>
</template>

<script>
  import {filterSelect} from '../../data/filterSelect'
  export default {
    name: "monitor-control-rules-option",
    data(){
      return {
        model: {
          name: "",
          fenceIds: "",
          unitIds: "",
          content: "",
          range: "请在右侧选择",
          effectiveEndTime: "",
          effectiveStartTime: ""
        },
        option: {
          gender: filterSelect.genderOption,
          controlType: filterSelect.controlTypeOption,
          controlArea: filterSelect.controlAreaOption,
          effective: [{
            label: '是',
            value: 1
          }, {
            label: '否',
            value: 2
          }]
        },
        rules: {
          name: [{
            required: true,
            message: '请输入姓名'
          },{
            pattern: '(^.{1,10}$)',
            message: '姓名长度不得大于10字'
          }],
          age: [{
            required: true,
            message: '请输入年龄'
          }, {
            pattern: '^[0-9]+$',
            message: '请输入正整数'
          }],
          gender: [{
            required: true,
            message: '请选择性别'
          }],
          controlType: [{
            required: true,
            message: '请选择布控类型'
          }]
          // range: [{
          //   required: true,
          //   message: '请在右侧选择公告范围'
          // },{
          //   validator: validatePass2
          // }],
          // effectiveEndTime: [{
          //   required: true,
          //   message: '请选择公告时间'
          // },{
          //   validator: validatePass3
          // }],
          // content: [{
          //   required: true,
          //   message: '请输入公告内容'
          // },{
          //   pattern: '(^.{1,200}$)',
          //   message: '公告长度不得大于200字'
          // }],
        },
        labelCol: { span: 7 },
        wrapperCol: { span: 17 },
      }
    },
    props: ['type'],
    created(){
      console.log(this.type)
    }
  }
</script>

<style scoped>

</style>
