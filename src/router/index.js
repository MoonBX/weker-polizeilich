import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/login'},
    {
      path: '/wk',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
