// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueBeauty from 'vue-beauty'
import ECharts from 'vue-echarts/components/ECharts.vue'
import BaiduMap from 'vue-baidu-map'
import store from './store'
// import * as filters from './util/filter'

import 'vue-beauty/package/style/vue-beauty.min.css'

// Object.keys(filters).forEach(k => Vue.filter(k, filters[k])); //注册过滤器

Vue.use(vueBeauty);
Vue.use(BaiduMap, {
  ak: 'sfGKs5tKV1uFizko82jU96xiZQ6cRIX4'
})
Vue.component('chart', ECharts);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
