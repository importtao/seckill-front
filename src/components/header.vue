<template>
  <div class="top">
    <div class="header-block header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple-dark">
            <div class="logo" @click="goHome">
              <router-link to="/" title="商城首页"> </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="4" >
          <div class="grid-content bg-purple-dark">
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-dark">
            <el-input
              placeholder="请输入内容"
              v-model="keyWord">
              <i slot="suffix" class="el-input__icon el-icon-search" @click="doSearch"></i>
            </el-input>
          </div>
        </el-col>
        <el-col :span="4" >
          <div class="grid-content bg-purple-dark">
          </div>
        </el-col>
        <el-col :span="4">

          <div class="r" v-if="!logined">
            <router-link to="/login" title="登录" class="link"><el-button type="text">登录</el-button></router-link> | <router-link class="link" to="/register" title="注册"><el-button type="text">注册</el-button></router-link>
          </div>
          <div v-if="logined" class="r">
            <el-dropdown placement="bottom">
              <span class="el-dropdown-link">
                <el-button   circle size="mini"><i class="sk">&#xe62f;</i></el-button>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item disabled>{{userName}}</el-dropdown-item>
                <router-link to="/userInfo" title="个人主页" style="text-decoration:none;">
                  <el-dropdown-item>个人主页</el-dropdown-item>
                </router-link>
                <el-dropdown-item divided ><el-button type="text" @click="loginout">注销登录</el-button></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button   circle size="mini" style="margin-left: 30px"><i class="sk">&#xe887;</i></el-button>
            <el-button type="danger"  circle size="mini" style="margin-left: -5px;padding: 5px;">13</el-button>
          </div>
        </el-col>

      </el-row>
    </div>

    <div class="header2 auto_fixed dh" :class="auto_fixed" >
      <el-row class="hr">
        <el-col :span="20" class="r2 hr">
          <div class="grid-content bg-purple-dark">
            <el-menu  class="el-menu-demo hr" mode="horizontal" @select="handleSelect" :default-active="activeIndex">
              <el-menu-item index="1">
                <router-link to="/" title="商城首页" style="text-decoration:none;">首页</router-link>
              </el-menu-item>
              <el-menu-item index="2" @click="link('/order')">订单</el-menu-item><!--<router-link to="/order" title="订单" style="text-decoration:none;">订单</router-link>-->
              <el-menu-item index="3"><router-link to="/address" title="收货地址" style="text-decoration:none;">收货地址</router-link></el-menu-item>
              <el-menu-item index="4"><router-link to="/userInfo" title="个人主页" style="text-decoration:none;">个人主页</router-link></el-menu-item>
              <el-menu-item index="5"><router-link to="/wishList" title="愿望清单" style="text-decoration:none;">愿望清单</router-link></el-menu-item>
              <el-menu-item index="6"><router-link to="/seller" title="商户端" style="text-decoration:none;">商户端</router-link></el-menu-item>

            </el-menu>
          </div>
        </el-col>
        <el-col :span="4" class="r2 hr" style="padding-top: ">
          <div class="r hr" v-if="!logined && dtop">
            <router-link to="/login" title="登录" class="link"><el-button type="text">登录</el-button></router-link> | <router-link class="link" to="/register" title="注册"><el-button type="text">注册</el-button></router-link>
          </div>
          <div v-if="logined && dtop" class="r r2">
            <el-dropdown placement="bottom">
              <span class="el-dropdown-link">
                <el-button   circle size="mini"><i class="sk">&#xe62f;</i></el-button>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item disabled>{{userName}}</el-dropdown-item>
                <router-link to="/userInfo" title="个人主页" style="text-decoration:none;">
                  <el-dropdown-item>个人主页</el-dropdown-item>
                </router-link>
                <el-dropdown-item divided ><el-button type="text" @click="loginout">注销登录</el-button></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button   circle size="mini" style="margin-left: 30px"><i class="sk">&#xe887;</i></el-button>
            <el-button type="danger"  circle size="mini" style="margin-left: -5px;padding: 5px;">13</el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <!--导航栏顶部悬浮补充内容-->
    <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
  </div>

</template>

<script>
  import ElCol from "element-ui/packages/col/src/col";
  import {setStore,getStore,removeStore} from '../utils/storage'
  import global from '../global/global'


  export default {
    components: {ElCol},
    name: 'v-header',
    data () {
      return {
        msg: '秒杀商城首页',
        token:'',
        keyWord: '',
        activeIndex: '1',
        activeIndex2: '1',
        auto_fixed:{},
        fixed:{},
        logined: false,
        userModel:{},
        userName:'',
        dtop: false
      }

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
    methods:{
      init(){
        let token =getStore('token')
        if(token != null){
          this.token = token
          console.log(this.token)
          let args = {'token':this.token}
          console.log(args)
          this.$http.get(global.serverPath+'userModel',{params:args}).then(function(response){
            // 响应成功回调
            this.userModel =response.data
            if(this.userModel.status == 0){
              console.log(this.userModel)
              this.userName = this.userModel.user.userName
              if(this.userName.length>6){
                this.userName = this.userName.slice(0,4)+'..'
              }
             this.logined = true
            }else if(this.userModel.status == 2){
              this.logined = false
            } else{
              this.logined = false
            }
          }, function(response){
            // 响应错误回调
            console.log('data:'+response)
            this.logined = false
            this.$message({
              message: '后台错误，请联系管理员处理！',
              type: 'error',
              duration: 6000
            });
          });
        }else {
          this.logined = false
        }

      },
      loginout(){
        console.log('login out')
        removeStore('token')
        this.login = false
        this.$router.push('/login')

      },
      link(url){
        this.$router.push(url)
      },
      doSearch (){
        console.log(this.keyWord)
        this.$router.push('/goods/'+this.keyWord)
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      goHome(){
        this.$router.push("/")
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/icon/iconfont.css";
  .top{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    height: 135px;
  }

  /*顶部悬浮导航栏*/
  .auto_fixed{
    height: 60px;
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
    height: 70px;
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
    background: url("../assets/logo.png")no-repeat 50%;
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
</style>
