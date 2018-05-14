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
import addSeckill from '@/components/seller/addSeckill'

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
          component: wishList,
          name:"愿望清单",
          meta:{
            title:"愿望清单"
          }
        },
        {
          path: '/goods/:keyword',
          component: goods,
          name:"搜索商品",
          meta:{
            title:"搜索商品"
          }
        },
        {
          path: '/goodsDetail/:goodsId',
          component: goodsDetail,
          name:"商品详情",
          meta:{
            title:"商品详情"
          }
        },
        {
          path: '/address',
          component: address,
          name:"收货地址",
          meta:{
            title:"收货地址"
          }
        },
        {
          path: '/order',
          component: order,
          name:"我的订单",
          meta:{
            title:"我的订单"
          }
        },
        {
          path: '/userInfo',
          component: userInfo,
          name:"用户首页",
          meta:{
            title:"用户首页"
          }
        },
        {
          path: '/orderDetail/:orderId',
          component: orderDetail,
          name:"订单详情",
          meta:{
            title:"订单详情"
          }
        }
      ]
    },
    {
      path: '/login',
      component: login,
      name:"用户登录",
      meta:{
        title:"用户登录"
      }
    },
    {
      path: '/register',
      component: register,
      name:"用户注册",
      meta:{
        title:"用户注册"
      }
    },
    {
      path: '/seller',
      component: sellerHome,
      children:[
        {
          path: '/seller',
          component: sellerMain,
          meta:{
            title:"秒杀商城商户端"
          },
        },
        {
          path: '/seller/addGoods',
          name: 'addGoods',
          component: addGoods,
          meta:{
            title:"商户端-添加商品"
          }
        },
        {
          path: '/seller/goodsList',
          component: goodsList,
          name:"商户端-商品列表",
          meta:{
            title:"商户端-商品列表"
          }
        },
        {
          path: '/seller/dataReport',
          component: dataReport,
          name:"商户端-数据报表",
          meta:{
            title:"商户端-数据报表"
          }
        },
        {
          path: '/seller/historycalOrder',
          component: historycalOrder,
          name:"商户端-历史订单",
          meta:{
            title:"商户端-历史订单"
          }
        },
        {
          path: '/seller/pendingOrder',
          component: pendingOrder,
          name:"商户端-待处理订单",
          meta:{
            title:"商户端-待处理订单"
          }
        },
        {
          path: '/seller/sellerInfo',
          component: sellerInfo,
          name:"商户端-商户主页",
          meta:{
            title:"商户端-商户主页"
          }
        },
        {
          path: '/seller/sellerOrder/:orderId',
          component: sellerOrder,
          name:"商户端-订单",
          meta:{
            title:"商户端-订单"
          }
        },
        {
          path: '/seller/addSeckill',
          component: addSeckill,
          name:"商户端-发布秒杀",
          meta:{
            title:"商户端-发布秒杀"
          }
        }

      ]
    },
    {
      path: '/seller/login',
      component: sellerLogin,
      name:"商户端-登录",
      meta:{
        title:"商户端-登录"
      }
    },{
      path: '/seller/register',
      component: sellerRegister,
      name:"商户端-注册",
      meta:{
        title:"商户端-注册"
      }
    },
    { path: '*', component: notfound }
  ]
})
