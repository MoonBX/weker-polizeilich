<template>
  <div class="handle-room-beware clear">
    <v-form direction="horizontal"
            :model="model"
            :rules="rules"
            ref="monitorControlRulesOption"
            style="width: 75%;float: left">
      <v-form-item label="是否通过"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="name" has-feedback>
        <v-radio-group v-model="model.isThrough" :data="[{value: '1', text: '是'},{value: '2', text: '否'}]">
        </v-radio-group>
      </v-form-item>
      <v-form-item label="备注"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="name" has-feedback>
        <!--zheng qi bo-->
        <v-input type="textarea"
                 placeholder="简单说明理由"
                 autosize
                 v-model="model.content">
        </v-input>
      </v-form-item>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: "handle-room-beware",
    data(){
      return{
        model: {
          isThrough: '1'
        },
        rules: {},
        labelCol: { span: 7 },
        wrapperCol: { span: 17 },
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
