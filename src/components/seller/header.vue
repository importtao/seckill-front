
<template>
  <div>
    <div class="header2 auto_fixed dh" :class="auto_fixed" >
      <el-row class="hr">
        <el-col :span="20" class="r2 hr">
          <div class="grid-content bg-purple-dark">
            <el-menu :default-active="activeIndex" class="el-menu-demo hr" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">
                <router-link to="/seller" title="商城首页" style="text-decoration:none;">首页</router-link>
              </el-menu-item>
              <el-menu-item index="2"><router-link to="/seller/goodsList" title="商品列表" style="text-decoration:none;">商品列表</router-link></el-menu-item>
              <el-menu-item index="3"><router-link to="/seller/addGoods" title="添加商品" style="text-decoration:none;">添加商品</router-link></el-menu-item>
              <el-menu-item index="4">
                  <router-link to="/seller/pendingOrder" title="待处理订单" style="text-decoration:none;"><el-badge is-dot class="itemM">待处理订单</el-badge></router-link>
              </el-menu-item>
              <el-menu-item index="5"><router-link to="/seller/historycalOrder" title="历史订单" style="text-decoration:none;">历史订单</router-link></el-menu-item>
              <el-menu-item index="6"><router-link to="/seller/addSeckill" title="发布秒杀" style="text-decoration:none;">发布秒杀</router-link></el-menu-item>
              <el-menu-item index="7"><router-link to="/seller/dataReport" title="数据统计" style="text-decoration:none;">数据统计</router-link></el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="4" class="r2 hr">
          <div v-if="!logined && dtop" class="r r2">
            <el-dropdown placement="bottom">
                <el-button   circle size="mini" class="tx"><img :alt="account" style="width: 100%;height: 100%" :src="touxiang"></el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item disabled>{{sellerName}}</el-dropdown-item>
                <router-link to="/seller/sellerInfo" title="个人主页" style="text-decoration:none;">
                  <el-dropdown-item>个人主页</el-dropdown-item>
                </router-link>
                <el-dropdown-item divided ><el-button type="text" @click="loginout">注销登录</el-button></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>

    <!--导航栏顶部悬浮补充内容-->
    <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
  </div>
</template>

<script>
  import {setStore,getStore,setSession,getSession,removeStore} from '../../utils/storage'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  import global from '../../global/global'



  export default {
    name: 'home',
    data () {
      return {
        touxiang:'',
        account:'',
        sellerName:'',
        activeIndex: '1',
        activeIndex2: '1',
        sellerToken:'',
        auto_fixed:{},
        fixed:{},
        logined: false,
        sellerModel:{},
        dtop: true
      };
    },
    mounted: function() {
      //这个是钩子函数
      //如果cartView函数要执行，必须先执行钩子函数
      //这个钩子函数完成了对cratView函数的调用
      //应该注意的是，使用mounted 并不能保证钩子函数中的 this.$el 在 document 中。为此还应该引入             Vue.nextTick/vm.$nextTick
      this.$nextTick(function () {
        window.addEventListener('scroll', this.onScroll)
      })

      this.init()
    },
    methods: {
      init(){
        let sellerToken =getStore('sellerToken')
        if(sellerToken != null){
          this.sellerToken = sellerToken
          console.log(this.sellerToken)
        }else {
          this.$message({
            message: '未登录或登录超时！',
            type: 'error',
            duration: 10000
          });
          this.$router.push('/seller/login')
        }
        let args = {'sellerToken':this.sellerToken}
        console.log(args)
        this.$http.get(global.serverPath+'sellerModel',{params:args}).then(function(response){
          // 响应成功回调
          this.sellerModel =response.data
          if(this.sellerModel.status == 0){
            console.log(this.sellerModel)
            this.touxiang = global.serverPath+'img/'+this.sellerModel.seller.logo
            this.account = this.sellerModel.seller.account
            this.sellerName = this.sellerModel.seller.name
            if(this.sellerName.length>6){
              this.sellerName = this.sellerName.slice(0,4)+'..'
            }
          }else if(this.sellerModel.status == 2){
            this.$message({
              message: this.sellerModel.msg,
              type: 'error',
              duration: 6000
            });
            this.$router.push('/seller/login')
          } else{
            this.$message({
              message: this.sellerModel.msg,
              type: 'error',
              duration: 10000
            });
          }
        }, function(response){
          // 响应错误回调
          console.log('data:'+response)
          this.$message({
            message: '后台错误，请联系管理员处理！',
            type: 'error',
            duration: 6000
          });
        });
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      onScroll(){
        // 计算滚动的距离
        let scrolled = document.documentElement.scrollTop || document.body.scrollTop
        // 计算A区的高度
        let header_height = null
        if(document.getElementsByClassName('header')[0]){
          header_height = document.getElementsByClassName('header')[0].offsetHeight
        }
        /*console.log('滚动的距离:'+scrolled,'头部的高度:'+ header_height)*/
        // 当滚动的距离等于A区的高度的时候，即是临界点，马上通过auto_fixed变量，给B区添加一个
        if(scrolled >= header_height ){
          this.dtop=true
        }else{
          this.dtop=false
        }
        // class，让B区浮起来
        this.auto_fixed = {
          auto_fixed: true,
          fixed: scrolled >= header_height
        }
      },
      loginout(){
        console.log('login out')
        removeStore('sellerToken')
        this.$router.push('/seller/login')
      }
    },
    components: {
      ElButton
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/icon/iconfont.css";

  .top{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  /*顶部悬浮导航栏*/
  .auto_fixed{
    height: 3em;
    background: #ededed;;
    line-height: 3em;
    text-align: center;
  }
  .fixed{
    position: fixed;
    top: 0px;
    width: 100%;
  }

  .bg-purple-dark {
    /*background: #59060a;*/
  }
  .grid-content {
    min-height: 50px;
  }
  .header-block{
    height: 60px;
    padding-top: 15px;
    background-color: #000000;
    width: 100%;
    /*position:fixed;
    top:0px;*/
  }
  .header2{
    z-index:9999;
  }
  .hr{
    background: #f7f7f7;
    box-shadow: inset 0 2px 0px rgba(0,0,0,.04);
  }
  .logo{
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: url("../../assets/logo.png")no-repeat 50%;
    background-size: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .r{
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    height: 60px;
    text-align: center;
  }
  .r2{
    background: #f7f7f7;
    box-shadow: 0 2px 4px rgba(0,0,0,.04);height: 60px;
  }
  .link{
    color: white;
  }
  .tx{
    background:no-repeat 50%;
    background-size: cover;
    width: 58px;
    height: 58px;

  }
  .itemM {
    margin-top: 1px;
    margin-right: 10px;
  }
</style>
