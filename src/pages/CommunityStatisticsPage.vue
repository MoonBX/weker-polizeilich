<template>
  <div class="community-statistics">
    <div class="chart">
      <div id="main6"></div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "community-statistics-page",
    data(){
      return{
        chart: null,
      }
    },
    methods: {
      drawGraph(id) {
        this.chart = echarts.init(document.getElementById(id));

        this.chart.setOption({
          color: ['#ad457b', '#5066b3'],
          width: '85%',
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              name: '日',
              nameLocation: 'end',
              data: ['周一', '周二', '周三', '周四']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '人',
              nameLocation: 'end',
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#20222d'
                }
              }
            }
          ],
          textStyle: {
            color: '#73778a'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          series: [
            {
              name: '女',
              type: 'bar',
              stack: '性别',
              barWidth: '40%',
              data: [23,  44,  55,  19]
            }
          ]
        })
      }
    },
    created(){
      this.$nextTick(()=> {
        this.drawGraph('main6')
      })
    }
  }
</script>

<style lang="scss" scoped>
  .community-statistics{
    .chart{
      width: 100%;
      height: 300px;
      #main6{
        height: 100%;
      }
    }
  }
</style>
