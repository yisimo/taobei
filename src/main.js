// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './components/layout.vue'
import IndexPage from './pages/index.vue'
import DetailPage from './pages/detail.vue'
import DetAnaPage from './pages/detail/analysis.vue'
import DetCouPage from './pages/detail/count.vue'
import DetForPage from './pages/detail/forecast.vue'
import DetPubPage from './pages/detail/publish.vue'
import OrderListPage from './pages/orderList.vue'
import store from './store/index'

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path:'/detail',
      component:DetailPage,
      redirect:'/detail/analysis',
      children:[
        {
          path:'analysis',
          component:DetAnaPage
        },
        {
          path:'count',
          component:DetCouPage
        },
        {
          path:'forecast',
          component:DetForPage
        },
        {
          path:'publish',
          component:DetPubPage
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
