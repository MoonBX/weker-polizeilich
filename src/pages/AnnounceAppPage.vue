<template>
  <!--app通知公告-->
  <div class="announce-app">

    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="发布范围" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.announceRange"></v-select>
        </v-form-item>
        <v-form-item label="标题" class="m-b-sm">
          <v-input v-model="filterList.aka" placeholder="请输入标题" style="width: 240px;"></v-input>
        </v-form-item>
        <v-form-item label="类型" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.announceType"></v-select>
        </v-form-item>
        <v-button class="m-b-sm m-r-sm"
                  type="primary"
                  html-type="button" icon="search"
                  @click="filterTable()">
          查询
        </v-button>
        <v-button class="m-b-sm"
                  type="ghost"
                  @click="resetTable()">
          清空
        </v-button>
      </v-form>
    </div>
    <!--搜索面板 end-->

  </div>
  <!--门禁通知公告 end-->
</template>

<script>
  import {filterSelect} from '../data/filterSelect'
  export default {
    name: "announce-app-page",
    data() {
      return {
        filterList: {
          st: "",
          et: ""
        },
        option: {
          announceRange: filterSelect.announceRangeOption,
          announceType: filterSelect.announceTypeOption
        },
      }
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
    }
  }
</script>

<style scoped>

</style>
