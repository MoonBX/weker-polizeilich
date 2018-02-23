<template>
  <div class="hr-info-query">
    <div class="left">
      <div class="info panel panel-default">
        <div class="panel-heading">
          楼幢列表
        </div>
        <div class="panel-body">
          <ul>
            <li>千家街77号</li>
            <li>千家街77号</li>
            <li>千家街77号</li>
            <li>千家街77号</li>
            <li>千家街77号</li>
          </ul>
        </div>
      </div>
      <div class="info panel panel-default">
        <div class="panel-heading">
          人员查询条件
        </div>
        <div class="panel-body">
          <v-form class="form">
            <v-row class="m-b-sm">
              <v-col span="12">
                <v-form-item label="姓名"
                             style="width: 100%;"
                             :label-col="{span: 5}"
                             :wrapper-col="{span: 16}">
                  <v-input placeholder="请输入姓名"></v-input>
                </v-form-item>
              </v-col>
              <v-col span="12">
                <v-form-item label="国籍"
                             style="width: 100%;"
                             :label-col="{span: 6}"
                             :wrapper-col="{span: 16}">
                  <v-select v-model="filterList.aka" tags :data="option.nationality"></v-select>
                </v-form-item>
              </v-col>
            </v-row>

            <v-row class="m-b-sm">
              <v-col span="12">
                <v-form-item label="性别"
                             style="width: 100%;"
                             :label-col="{span: 5}"
                             :wrapper-col="{span: 16}">
                  <v-select v-model="filterList.aka" tags :data="option.gender"></v-select>
                </v-form-item>
              </v-col>
              <v-col span="12">
                <v-form-item label="政治面貌"
                             style="width: 100%;"
                             :label-col="{span: 9}"
                             :wrapper-col="{span: 13}">
                  <v-select v-model="filterList.aka" tags :data="option.political"></v-select>
                </v-form-item>
              </v-col>
            </v-row>

            <v-row class="m-b-sm">
              <v-col span="12">
                <v-form-item label="民族"
                             style="width: 100%;"
                             :label-col="{span: 5}"
                             :wrapper-col="{span: 16}">
                  <v-select v-model="filterList.aka" tags :data="option.gender"></v-select>
                </v-form-item>
              </v-col>
              <v-col span="12">
                <v-form-item label="宗教信仰"
                             style="width: 100%;"
                             :label-col="{span: 9}"
                             :wrapper-col="{span: 13}">
                  <v-select v-model="filterList.aka" tags :data="option.political"></v-select>
                </v-form-item>
              </v-col>
            </v-row>

            <v-row class="m-b-sm">
              <v-col span="12">
                <v-form-item label="职业"
                             style="width: 100%;"
                             :label-col="{span: 5}"
                             :wrapper-col="{span: 16}">
                  <v-select v-model="filterList.aka" tags :data="option.gender"></v-select>
                </v-form-item>
              </v-col>
              <v-col span="12">
                <v-form-item label="人员类型"
                             style="width: 100%;"
                             :label-col="{span: 9}"
                             :wrapper-col="{span: 13}">
                  <v-select v-model="filterList.aka" tags :data="option.political"></v-select>
                </v-form-item>
              </v-col>
            </v-row>

          </v-form>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="info panel panel-default">
        <div class="panel-heading">
          房屋信息
        </div>
        <div class="panel-body">
          <div class="total-room-box">
            <v-row class="m-b-sm">
              <v-col span="6">
                总房屋数：246
              </v-col>
              <v-col span="18">
                <ul class="tag-1">
                  <li><span>自住</span><span>18</span></li>
                  <li><span>自住</span><span>18</span></li>
                  <li><span>自住</span><span>18</span></li>
                </ul>
              </v-col>
            </v-row>
            <v-row>
              <v-col span="18" offset="6">
                <ul class="tag-2 clear">
                  <li><span>高危</span><span>231</span></li>
                  <li><span>关注</span><span>231</span></li>
                  <li><span>一般</span><span>231</span></li>
                </ul>
              </v-col>
            </v-row>
          </div>
          <div class="total-pop-box">
            <v-row>
              <v-col span="6">
                总人口数：246
              </v-col>
              <v-col span="18">col-18</v-col>
            </v-row>
            <v-row>
              <v-col span="18" offset="6">col-18</v-col>
            </v-row>
          </div>
          <div class="room-list-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {filterSelect} from '../data/filterSelect'
  export default {
    name: "hr-info-query-page",
    data(){
      return {
        filterList: {},
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

      }
    }
  }
</script>

<style lang="scss" scoped>
  .hr-info-query {
    .left {
      width: 36%;
      height: 100%;
      float: left;
      padding-right: 10px;
      .info{
        .panel-body{
          padding: 0;
          ul{
            padding: 0;
            li{
              padding: 12px 20px;
              font-size: 12px;
              border-bottom: 1px solid #E4EDFF;
              cursor: pointer;
              &:hover{
                background-color: #E4EDFF;
                color: #1D8BF7;
              }
            }
          }
          .form{
            padding: 12px 20px;
          }
        }
      }
    }
    .right {
      width: 64%;
      height: 100%;
      float: left;
      padding: 0 10px;
      .info{
        .panel-body{
          padding: 0;
          .total-room-box, .total-pop-box{
            padding: 10px 20px;
            border-bottom: 1px solid #E4EDFF;
            ul.tag-1{
              padding: 0 10px;
              li{
                float: left;
                margin-right: 60px;
              }
            }
            ul.tag-2{
              background-color: #EAEFF8;
              padding: 10px;
              li{
                float: left;
                margin-right: 40px;
              }
            }
          }
          .total-room-box{
            .tag-1{

            }
          }
        }
      }
    }
  }


  .panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  }

  .panel-body {
    padding: 15px;
  }

  .panel-heading {
    padding: 14px 20px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .panel-heading > .dropdown .dropdown-toggle {
    color: inherit;
  }

  .panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
  }

  .panel-title > a,
  .panel-title > small,
  .panel-title > .small,
  .panel-title > small > a,
  .panel-title > .small > a {
    color: inherit;
  }

  .panel-footer {
    padding: 10px 15px;
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .panel-default {
    border-color: #EAEFF8;
  }

  .panel-default > .panel-heading {
    color: #333;
    background-color: #EAEFF8;
    border-color: #EAEFF8;
  }

  .panel-default > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #EAEFF8;
  }

  .panel-default > .panel-heading .badge {
    color: #f5f5f5;
    background-color: #333;
  }

  .panel-default > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #ddd;
  }

  .panel-primary {
    border-color: #337ab7;
  }

  .panel-primary > .panel-heading {
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
  }

  .panel-primary > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #337ab7;
  }

  .panel-primary > .panel-heading .badge {
    color: #337ab7;
    background-color: #fff;
  }

  .panel-primary > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #337ab7;
  }

  .panel-success {
    border-color: #d6e9c6;
  }

  .panel-success > .panel-heading {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }

  .panel-success > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #d6e9c6;
  }

  .panel-success > .panel-heading .badge {
    color: #dff0d8;
    background-color: #3c763d;
  }

  .panel-success > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #d6e9c6;
  }

  .panel-info {
    border-color: #bce8f1;
  }

  .panel-info > .panel-heading {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
  }

  .panel-info > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #bce8f1;
  }

  .panel-info > .panel-heading .badge {
    color: #d9edf7;
    background-color: #31708f;
  }

  .panel-info > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #bce8f1;
  }

  .panel-warning {
    border-color: #faebcc;
  }

  .panel-warning > .panel-heading {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
  }

  .panel-warning > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #faebcc;
  }

  .panel-warning > .panel-heading .badge {
    color: #fcf8e3;
    background-color: #8a6d3b;
  }

  .panel-warning > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #faebcc;
  }

  .panel-danger {
    border-color: #ebccd1;
  }

  .panel-danger > .panel-heading {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
  }

  .panel-danger > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #ebccd1;
  }

  .panel-danger > .panel-heading .badge {
    color: #f2dede;
    background-color: #a94442;
  }

  .panel-danger > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #ebccd1;
  }


</style>
