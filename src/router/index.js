import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import main from '@/components/homeMain'
import wishList from '@/components/wishList'
import goods from '@/components/goods'
import goodsDetail from '@/components/goodsDetail'
import login from '@/components/login'
import register from '@/components/register'
import address from '@/components/address'
import order from '@/components/order'
import orderDetail from '@/components/orderDetail'
import userInfo from '@/components/userInfo'
import notfound from '@/components/404'

import sellerHome from '@/components/seller/home'
import sellerMain from '@/components/seller/main'
import sellerLogin from '@/components/seller/login'
import sellerRegister from '@/components/seller/register'
import addGoods from '@/components/seller/addGoods'
import goodsList from '@/components/seller/goodsList'
import dataReport from '@/components/seller/dataReport'
import historycalOrder from '@/components/seller/historycalOrder'
import pendingOrder from '@/components/seller/pendingOrder'
import sellerInfo from '@/components/seller/sellerHome'
import sellerOrder from '@/components/seller/order'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
      children:[
        {
          path: '/',
          component: main
        },
        {
          path: '/wishList',
          name: 'wishList',
          component: wishList
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
          path: '/address',
          name: 'address',
          component: address
        },
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/userInfo',
          name: 'userInfo',
          component: userInfo
        },
        {
          path: '/orderDetail/:orderId',
          name: 'orderDetail',
          component: orderDetail
        }
      ]
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
      path: '/seller',
      component: sellerHome,
      children:[
        {
          path: '/seller',
          component: sellerMain
        },
        {
          path: '/seller/addGoods',
          name: 'addGoods',
          component: addGoods
        },
        {
          path: '/seller/goodsList',
          name: 'goodsList',
          component: goodsList
        },
        {
          path: '/seller/dataReport',
          name: 'dataReport',
          component: dataReport
        },
        {
          path: '/seller/historycalOrder',
          name: 'historycalOrder',
          component: historycalOrder
        },
        {
          path: '/seller/pendingOrder',
          name: 'pendingOrder',
          component: pendingOrder
        },
        {
          path: '/seller/sellerInfo',
          name: 'sellerInfo',
          component: sellerInfo
        },
        {
          path: '/seller/sellerOrder/:orderId',
          name: 'sellerOrder',
          component: sellerOrder
        }
      ]
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
