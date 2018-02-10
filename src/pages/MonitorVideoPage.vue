<template>
  <div class="monitor-video">
    <!--搜索面板-->
    <div class="g-table-banner b-b">
      <v-form slot="form">
        <v-form-item label="所属小区" class="m-b-sm">
          <v-select v-model="filterList.aka" tags style="width: 120px;" :data="option.village"></v-select>
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

    <div class="pull-left m-t-md m-r-md">
      <baidu-map class="map" center="武汉" map-type="BMAP_SATELLITE_MAP">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      </baidu-map>
    </div>

    <div class="pull-left m-t-md">
      <div class="ant-transfer">
        <div class="ant-transfer-list ant-transfer-list-with-footer" style="width: 200px; height: 400px;">
          <div class="ant-transfer-list-header">
            <span class="ant-transfer-list-header-selected">
              <span>共11条</span>
            </span>
          </div>
          <div class="ant-transfer-list-body">
            <ul class="ant-transfer-list-content m-t-sm">
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="ant-transfer-operation">
          <button type="button" disabled="disabled" class="ant-btn ant-btn-primary ant-btn-sm">
            <span><i class="anticon anticon-right"></i></span>
          </button>
        </div>
        <div class="ant-transfer-list ant-transfer-list-with-footer" style="width: 300px; height: 400px;">
          <div class="ant-transfer-list-header">
            <span class="ant-transfer-list-header-selected">
              <span>共11条</span>
            </span>
          </div>
          <div class="p-sm b-b">
            <v-date-picker v-model="filterList.st" :disabled-date="disabledStartDate"></v-date-picker>
            <span>-</span>
            <v-date-picker v-model="filterList.et" :disabled-date="disabledEndDate"></v-date-picker>
            <v-button type="primary" html-type="button"
                      @click="filterTable()">
              搜索
            </v-button>
          </div>
          <div class="ant-transfer-list-body" style="position: relative;">

            <ul class="ant-transfer-list-content m-t-sm" style="position: relative; height: 260px;">
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
              <li class="ant-transfer-list-content-item">
                <span>内容2</span>
              </li>
            </ul>
          </div>
          <div class="ant-transfer-list-footer">
            <div style="float: right; margin: 5px;">
              <button type="button" class="ant-btn ant-btn-ghost ant-btn-sm">
                <span>批量下载</span>
              </button>
              <button type="button" class="ant-btn ant-btn-ghost ant-btn-sm">
                <span>批量保存</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import util from '../util/util'
  import {filterSelect} from '../data/filterSelect'

  export default {
    name: "monitor-video-page",
    data() {
      return {
        filterList: {
          st: "",
          et: ""
        },
        dataSource3: [],
        targetKeys3: [],
        option: {
          village: filterSelect.villageOption,
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

      mockData2(index) {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
          const data = {
            key: i,
            title: `内容${i + 1}`,
            description: `内容${i + 1}的描述`,
            chosen: Math.random() * 2 > 1,
          };
          if (data.chosen) {
            targetKeys.push(data.key);
          }
          mockData.push(data);
        }
        this[`dataSource${index}`] = mockData;
        this[`targetKeys${index}`] = targetKeys;
      },
      getMock() {
        for (let num = 1; num < 4; num++) {
          this.mockData2(num + 1);
        }
      },
      render1(item) {
        return item.title;
      },
      handleChange3(targetKeys, direction, moveKeys) {
        this.targetKeys3 = targetKeys;
      },
      filterOption(inputValue, option) {
        return option.description.indexOf(inputValue) > -1;
      }
    },
    created() {
      this.getMock()
    },
  }
</script>

<style scoped>
  .map {
    width: 50vh;
    height: 50vh;
  }
</style>
