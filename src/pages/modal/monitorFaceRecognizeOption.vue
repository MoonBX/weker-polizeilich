<template>
  <div class="monitor-face-recognize-option">
    <div class="info-box m-b-sm">
      <div class="title m-b-xs">居民信息：</div>
      <div class="content clear">
        <div class="name m-r-lg pull-left">姓名：高雯</div>
        <div class="name m-r-md pull-left">电话：15757118282</div>
      </div>
    </div>
    <div class="info-box m-b-sm">
      <div class="title">对比源照片：</div>
      <!--表格-->
      <div class="g-table-content m-t-sm m-b-md">
        <v-table>
          <table class="wk-table" style="table-layout:fixed;">
            <thead class="ant-table-thead">
            <tr>
              <th>图片</th>
              <th>状态</th>
              <th>操作人</th>
              <th>操作时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody class="ant-table-tbody">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <a href="javascript:;">无效</a>
              </td>
            </tr>
            <div style="width: 100%;height: 20px;"></div>
            </tbody>
          </table>
        </v-table>

        <!--<v-pagination class="m-t-md m-b-md"-->
                      <!--v-model="table.pageValue"-->
                      <!--:pageSize="10"-->
                      <!--:showTotal="showTotal"-->
                      <!--@change="loadPage"-->
                      <!--ref="pagination"-->
                      <!--show-quick-jumper-->
                      <!--:total="table.total">-->
        <!--</v-pagination>-->
      </div>
      <!--表格 end-->
    </div>
    <div class="info-box">
      <div class="photo-box">
        <div class="item">
          <div class="b-b p-v-xs">身份证照</div>
          <div class="photo">photo</div>
          <div class="b-t p-v-xs">
            <v-button type="primary" html-type="button">
              加入对比源
            </v-button>
          </div>
        </div>
        <div class="item">
          <div class="b-b p-v-xs">实名认证照</div>
          <div class="photo">photo</div>
          <div class="b-t p-v-xs">
            <v-button type="primary" html-type="button">
              加入对比源
            </v-button>
          </div>
        </div>
        <div class="item">
          <div class="b-b p-v-xs">人脸开门照片</div>
          <div class="photo">photo</div>
          <div class="b-t p-v-xs">
            <v-button type="primary" html-type="button">
              加入对比源
            </v-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vTable from '@/components/table'
  export default {
    name: "monitor-face-recognize-option",
    components: {
      vTable
    },
  }
</script>

<style lang="scss" scoped>
  .monitor-face-recognize-option{
    .info-box{
      .title{
        font-size: 13px;
        font-weight: 800;
      }
      .photo-box{
        display: flex;
        justify-content: space-between;
        .item{
          width: 30%;
          border: 1px solid #e3e5e7;
          text-align: center;
          .photo{
            height: 120px;
          }
          .ant-btn-primary{
            font-size: 11px;
          }
        }
      }
    }
  }
</style>
