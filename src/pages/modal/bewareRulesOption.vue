<template>
  <div class="beware-rules-option clear">
    <v-form direction="horizontal"
            :model="model"
            :rules="rules"
            ref="monitorControlRulesOption"
            style="width: 75%;float: left">
      <v-form-item label="预警类型"
                   :label-col="labelCol"
                   :wrapper-col="{span: 10}"
                   prop="gender" has-feedback>
        <v-select :data="option.bewareType"
                  v-model="model.aka">
        </v-select>
      </v-form-item>
      <v-form-item label="预警子类型"
                   :label-col="labelCol"
                   :wrapper-col="{span: 10}"
                   prop="gender" has-feedback>
        <v-select :data="option.bewareType2"
                  v-model="model.aka">
        </v-select>
      </v-form-item>
      <v-form-item label="绿色告警"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="name" has-feedback>
        <v-input placeholder="请输入绿色告警"
                 v-model="model.aka">
        </v-input>
      </v-form-item>
      <v-form-item label="黄色告警"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="name" has-feedback>
        <v-input placeholder="请输入黄色告警"
                 v-model="model.aka">
        </v-input>
      </v-form-item>
      <v-form-item label="橙色告警"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="name" has-feedback>
        <v-input placeholder="请输入橙色告警"
                 v-model="model.aka">
        </v-input>
      </v-form-item>
      <v-form-item label="红色告警"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="name" has-feedback>
        <v-input placeholder="请输入红色告警"
                 v-model="model.aka">
        </v-input>
      </v-form-item>
    </v-form>
  </div>
</template>

<script>
  import {filterSelect} from '../../data/filterSelect'
  export default {
    name: "beware-rules-option",
    data(){
      return{
        model: {
          isThrough: '1'
        },
        option: {
          bewareType: filterSelect.bewareTypeOption,
          bewareType2: filterSelect.bewareTypeOption2,
          controlArea: filterSelect.controlAreaOption,
          effective: [{
            label: '是',
            value: 1
          }, {
            label: '否',
            value: 2
          }]
        },
        rules: {},
        labelCol: { span: 7 },
        wrapperCol: { span: 17 },
      }
    }
  }
</script>

<style scoped>

</style>
