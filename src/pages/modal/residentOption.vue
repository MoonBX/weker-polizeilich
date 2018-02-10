<template>
  <div class="resident-option clear">
    <v-form direction="horizontal"
            :model="model"
            :rules="rules"
            ref="residentOption"
            style="width: 100%;float: left">
      <div class="form-title b-b m-b-md">
        身份信息
      </div>
      <v-form-item label="姓名"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="name" has-feedback>
        <v-input placeholder="请输入姓名"
                 v-model="model.aka">
        </v-input>
      </v-form-item>
      <div class="row">
        <v-col span="12">
          <v-form-item label="性别"
                       class="m-b-md"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 12}"
                       prop="name" has-feedback>
            <v-input placeholder="请输入姓名"
                     v-model="model.aka">
            </v-input>
          </v-form-item>
        </v-col>
        <v-col span="12">
          <v-form-item label="民族"
                       class="m-b-md"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 12}"
                       prop="age" has-feedback>
            <v-select :data="option.nation"
                      v-model="model.aka">
            </v-select>
          </v-form-item>
        </v-col>
      </div>


      <div class="row">
        <v-col span="12">
          <v-form-item label="出生日期"
                       class="m-b-sm"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 8}"
                       prop="age" has-feedback>
            <span>1981-10-20</span>
          </v-form-item>
        </v-col>
        <v-col span="12">
          <v-form-item label="年龄"
                       class="m-b-sm"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 14}"
                       prop="age" has-feedback>
            <span>36岁</span>
          </v-form-item>
        </v-col>
      </div>
      <v-form-item label="证件号码"
                   class="m-b-md"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="age" has-feedback>
        <span>210724199308230611</span>
      </v-form-item>
      <v-form-item label="证件地址"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="age" has-feedback>
        <v-input placeholder="请输入姓名"
                 v-model="model.aka">
        </v-input>
      </v-form-item>
      <v-form-item label="出生地址"
                   class="m-b-md"
                   :label-col="labelCol"
                   :wrapper-col="wrapperCol"
                   prop="age" has-feedback>
        <v-select :data="option.nation"
                  v-model="model.aka">
        </v-select>
      </v-form-item>
      <div class="form-title b-b m-b-md">
        扩展信息
      </div>

      <div class="row">
        <v-col span="12">
          <v-form-item label="政治面貌"
                       class="m-b-md"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 12}"
                       prop="name" has-feedback>
            <v-input placeholder="请输入姓名"
                     v-model="model.aka">
            </v-input>
          </v-form-item>
        </v-col>
        <v-col span="12">
          <v-form-item label="宗教信仰"
                       class="m-b-md"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 12}"
                       prop="age" has-feedback>
            <v-select :data="option.nation"
                      v-model="model.aka">
            </v-select>
          </v-form-item>
        </v-col>
      </div>

      <div class="row">
        <v-col span="12">
          <v-form-item label="文化程度"
                       class="m-b-md"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 12}"
                       prop="name" has-feedback>
            <v-input placeholder="请输入姓名"
                     v-model="model.aka">
            </v-input>
          </v-form-item>
        </v-col>
        <v-col span="12">
          <v-form-item label="婚姻状况"
                       class="m-b-md"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 12}"
                       prop="age" has-feedback>
            <v-select :data="option.nation"
                      v-model="model.aka">
            </v-select>
          </v-form-item>
        </v-col>
      </div>

      <div class="row">
        <v-col span="12">
          <v-form-item label="职业"
                       class="m-b-md"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 12}"
                       prop="name" has-feedback>
            <v-input placeholder="请输入姓名"
                     v-model="model.aka">
            </v-input>
          </v-form-item>
        </v-col>
        <v-col span="12">
          <v-form-item label="工作单位"
                       class="m-b-md"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 12}"
                       prop="age" has-feedback>
            <v-select :data="option.nation"
                      v-model="model.aka">
            </v-select>
          </v-form-item>
        </v-col>
      </div>

      <div class="row">
        <v-col span="12">
          <v-form-item label="电话号码"
                       class="m-b-md"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 12}"
                       prop="name" has-feedback>
            <v-input placeholder="请输入姓名"
                     v-model="model.aka">
            </v-input>
          </v-form-item>
        </v-col>
        <v-col span="12">
          <v-form-item label="车牌号码"
                       class="m-b-md"
                       :label-col="{span: 8}"
                       :wrapper-col="{span: 12}"
                       prop="age" has-feedback>
            <v-select :data="option.nation"
                      v-model="model.aka">
            </v-select>
          </v-form-item>
        </v-col>
      </div>

      <div class="form-title b-b m-b-md">
        属性信息
      </div>

      <div class="check-box m-b-sm">
        <div class="item m-b-sm">
          <v-checkbox>灵活就业人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>就业困难人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>低收入家庭</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>低保户</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>空巢老人</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>孤儿</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>残疾人</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>留守儿童</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>孤寡老人</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>留守妇女</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>4050人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>精神病</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>困难职工</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>服刑人员子女</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>超转人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>社会化退休</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>失独</v-checkbox>
        </div>
      </div>

      <div class="check-box m-b-sm">
        <div class="item m-b-sm">
          <v-checkbox>涉毒人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>刑满释放人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>舌吻人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>重点上访人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>重点青少年</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>邪教</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>敏感地区</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>违法在逃人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>两餐人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>两非人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>治安重点人</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>外籍人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>社区矫正人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>传销人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>肇事肇祸精神病人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>物业闲散人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>摄控人员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>刑事犯罪前科</v-checkbox>
        </div>
      </div>

      <div class="check-box m-b-sm">
        <div class="item m-b-sm">
          <v-checkbox>小区值班员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>物管</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>业主委员会</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>业务委员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>楼栋长</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>社区党员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>安全稳定信息员</v-checkbox>
        </div>
      </div>

      <div class="check-box m-b-sm">
        <div class="item m-b-sm">
          <v-checkbox>计生"两户"</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>计生协会会员</v-checkbox>
        </div>
        <div class="item m-b-sm">
          <v-checkbox>计划生育宣传员</v-checkbox>
        </div>
      </div>

    </v-form>
  </div>
</template>

<script>
  import {filterSelect} from '../../data/filterSelect'
  export default {
    name: "resident-option",
    data(){
      return{
        model: {

        },
        option: {
          gender: filterSelect.genderOption,
          nation: filterSelect.nationOption,
          controlArea: filterSelect.controlAreaOption,
        },
        rules: {},
        labelCol: { span: 4 },
        wrapperCol: { span: 12 },
      }
    }
  }
</script>

<style lang="scss" scoped>
  .resident-option{
    .form-title{
      font-size: 13px;
      font-weight: 800;
      padding-bottom: 5px;
      padding-left: 5px;
      /*color: #108ee9;*/
    }
    .check-box{
      display: flex;
      flex-wrap: wrap;
      padding: 0 10px;
      width: 100%;
      .item{
        width: 33%;
      }
    }
  }
</style>
