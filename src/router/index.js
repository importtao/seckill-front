import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import wishList from '@/components/wishList'
import goods from '@/components/goods'
import goodsDetail from '@/components/goodsDetail'
import login from '@/components/login'
import register from '@/components/register'
import notfound from '@/components/404'
import sellerHome from '@/components/seller/home'
import sellerHeader from '@/components/seller/header'
import sellerFooter from '@/components/seller/footer'
import sellerLogin from '@/components/seller/login'
import sellerRegister from '@/components/seller/register'

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
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/goods/:keyword',
      name: 'goods',
      component: goods
    },
    {
      path: '/goodsDetail/:id',
      name: 'goodsDetail',
      component: goodsDetail
    },
    {
      path: '/seller',
      name: 'sellerHome',
      component: sellerHome
    },
    {
      path: '/seller/login',
      name: 'sellerLogin',
      component: sellerLogin
    },{
      path: '/seller/register',
      name: 'sellerRegister',
      component: sellerRegister
    },
    { path: '*', component: notfound }
  ]
})
