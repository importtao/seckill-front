import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import wishList from '@/components/wishList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/wishList',
      name: 'wishList',
      component: wishList
    }
  ]
})
