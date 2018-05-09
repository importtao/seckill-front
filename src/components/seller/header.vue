
<template>
  <div>
    <div class="header2 auto_fixed dh" :class="auto_fixed" >
      <el-row class="hr">
        <el-col :span="20" class="r2 hr">
          <div class="grid-content bg-purple-dark">
            <el-menu :default-active="activeIndex" class="el-menu-demo hr" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">
                <router-link to="/" title="商城首页" style="text-decoration:none;">首页</router-link>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"><router-link to="/seller/addGoods" title="添加商品" style="text-decoration:none;">添加商品</router-link></el-menu-item>
              <el-menu-item index="5"><router-link to="/seller" title="商户端" style="text-decoration:none;">商户端</router-link></el-menu-item>

            </el-menu>
          </div>
        </el-col>
        <el-col :span="4" class="r2 hr">
          <div class="r hr" v-if="logined && dtop">
            <router-link to="/login" title="登录" class="link"><el-button type="text">登录</el-button></router-link> | <router-link class="link" to="/register" title="注册"><el-button type="text">注册</el-button></router-link>
          </div>
          <div v-if="!logined && dtop" class="r r2">
            <el-dropdown placement="bottom">
              <span class="el-dropdown-link">
                <el-button   circle size="mini"><i class="sk">&#xe62f;</i></el-button>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
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

  export default {
    name: 'home',
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        auto_fixed:{},
        fixed:{},
        logined: false,
        userInfo:{},
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
    },
    methods: {
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
      }
    },
    components: {
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
</style>
