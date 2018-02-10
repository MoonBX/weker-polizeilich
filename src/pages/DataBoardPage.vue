<template>
  <div class="data-board">
    <div class="openVideo panel-single m-b-sm">
      <div class="title p-h-sm">
        开门影响
      </div>
      <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
        <ul class="item">
          <li v-for="item in newsList" class="p-v-sm">
            <div class="image"></div>
            <div style="line-height: 14px">{{item.title}}</div>
            <div style="line-height: 14px" class="m-b-sm">2018-10-10 12:12:12</div>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>

    <div class="fangwushuju panel-double m-b-sm">
      <div class="title p-h-sm">
        房屋数据概况
      </div>
      <div id="main1"></div>
    </div>

    <div class="openVideo panel-double m-b-sm">
      <div class="title p-h-sm">
        房屋实时数据
      </div>
    </div>

    <div class="openVideo panel-double m-b-sm">
      <div class="title p-h-sm">
        门禁开门方式
      </div>
    </div>

    <div class="openVideo panel-double m-b-sm">
      <div class="title p-h-sm">
        人口实时数据
      </div>
    </div>

    <div class="openVideo panel-double m-b-sm">
      <div class="title p-h-sm">
        工作人员统计
      </div>
    </div>

    <div class="openVideo panel-double m-b-sm">
      <div class="title p-h-sm">
        重点管控人员
      </div>
    </div>

    <div class="openVideo panel-double m-b-sm">
      <div class="title p-h-sm">
        重点帮扶人员
      </div>
    </div>

    <div class="openVideo panel-double m-b-sm">
      <div class="title p-h-sm">
        党员人数统计
      </div>
    </div>

    <div class="openVideo panel-double m-b-sm">
      <div class="title p-h-sm">
        民族人口统计
      </div>
    </div>

    <div class="openVideo panel-double m-b-sm">
      <div class="title p-h-sm">
        房屋预警
      </div>
    </div>

    <div class="openVideo panel-single m-b-sm">
      <div class="title p-h-sm">
        人口户籍统计
      </div>
    </div>

    <div class="openVideo panel-single m-b-sm">
      <div class="title p-h-sm">
        出生地占比
      </div>
    </div>

    <div class="openVideo panel-single m-b-sm">
      <div class="title p-h-sm">
        门禁预警统计
      </div>
    </div>

    <div class="openVideo panel-single m-b-sm">
      <div class="title p-h-sm">
        开门实时数据
      </div>
    </div>

    <div class="openVideo panel-single m-b-sm">
      <div class="title p-h-sm">
        人员预警统计
      </div>
    </div>


  </div>
</template>

<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
  import echarts from 'echarts'

  export default {
    name: "data-board-page",
    components: {
      vueSeamlessScroll
    },
    data() {
      return {
        newsList: [
          {
            title: '图片1',
            pic: '../static/01.jpg'
          }, {
            title: '图片2',
            pic: '../static/02.jpg'
          }, {
            title: '图片3',
            pic: '../static/03.jpg'
          }, {
            title: '图片4',
            pic: '../static/04.jpg'
          }, {
            title: '图片1',
            pic: '../static/01.jpg'
          }, {
            title: '图片2',
            pic: '../static/02.jpg'
          }, {
            title: '图片3',
            pic: '../static/03.jpg'
          }, {
            title: '图片4',
            pic: '../static/04.jpg'
          }, {
            title: '图片1',
            pic: '../static/01.jpg'
          }, {
            title: '图片2',
            pic: '../static/02.jpg'
          }, {
            title: '图片3',
            pic: '../static/03.jpg'
          }, {
            title: '图片4',
            pic: '../static/04.jpg'
          }
        ],
        chart: null,
        recordList: [],
      }
    },

    methods: {
      drawGraph(id) {
        console.log('d')
        this.chart = echarts.init(document.getElementById(id));

        this.chart.setOption({
          title: {
            text: '85.44%',
            subtext: '自住房',
            textStyle: {
              color: '#333333',
              fontSize: 14,
              fontWeight: 'bold'
            },
            subtextStyle: {
              color: '#333333',
              fontSize: 16
            },
            top: 90,
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          color: ['#20A0FF', '#F7BA2A', '#99A9BF', '#F4F7F9'],
          legend: {
            show: true,
            orient: 'vertical',
            x: 'right',
            data: ['直接访问','邮件营销','联盟广告','视频广告']
          },
          calculable: false,
          series: [
            {
              name: '房屋类型',
              type: 'pie',
              radius: ['40%', '47%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                    formatter: '{b}:{c}'
                  },
                  labelLine: {
                    show: false
                  }
                },
                emphasis: {
                  label: {
                    show: false,
                    position: 'center',
                    textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                }
              },
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'}
              ]
            }
          ]
        })
      }
    },
    created() {
      this.$nextTick(() => {
        this.drawGraph('main1')
      })
    },
    computed: {
      optionLeft() {
        return {
          direction: 3,
          limitMoveNum: 4
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .data-board {
    .panel-single {
      width: 99%;
      overflow: hidden;
      border: 1px solid rgb(245, 246, 248);
      height: 200px;
      .title {
        line-height: 40px;
        height: 40px;
        background: rgb(245, 246, 248);
      }
    }

    .panel-double {
      width: 49%;
      float: left;
      margin-right: 1%;
      overflow: hidden;
      border: 1px solid rgb(245, 246, 248);
      height: 230px;
      .title {
        line-height: 40px;
        height: 40px;
        background: rgb(245, 246, 248);
      }
    }

    .openVideo {
      .seamless-warp2 {
        overflow: hidden;
        width: 100%;

        ul.item {
          width: 1000px;
          li {
            float: left;
            margin-right: 20px;
            .image {
              min-width: 100px;
              height: 100px;
              background-color: #000;
              background-repeat: no-repeat;
            }
          }
        }
      }
    }

    .fangwushuju{

      #main1{
        height: 100%;
      }
    }

  }

</style>
