<template>
  <div class="top">
    <div class="header-block header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple-dark">
            <div class="logo">
              <router-link to="/" title="商城首页"></router-link>
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
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </el-col>
        <el-col :span="4" >
          <div class="grid-content bg-purple-dark">
          </div>
        </el-col>
        <el-col :span="4">

          <!--<div class="r">
            <router-link to="/login" title="登录">登录</router-link>|<router-link to="/register" title="注册">注册</router-link>
          </div>-->
        </el-col>

      </el-row>
    </div>

    <div class="header2 auto_fixed dh" :class="auto_fixed" >
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <router-link to="/" title="商城首页">首页</router-link>
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
            <el-menu-item index="4"><a href="https://www.baidu.com" target="_blank">后台管理系统</a></el-menu-item>
          </el-menu>
        </div></el-col>

      </el-row>
    </div>

    <!--导航栏顶部悬浮补充内容-->
    <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
  </div>

</template>

<script>
  export default {
    name: 'v-header',
    data () {
      return {
        msg: '秒杀商城首页',
        keyWord: '',
        activeIndex: '1',
        activeIndex2: '1',
        auto_fixed:{

        },
        fixed:{}
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
    },
    methods:{
      search (){
        alert(this.keyWord)
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
        console.log('滚动的距离:'+scrolled,'头部的高度:'+ header_height)
        // 当滚动的距离等于A区的高度的时候，即是临界点，马上通过auto_fixed变量，给B区添加一个
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
  .top{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  /*顶部悬浮导航栏*/
  .auto_fixed{
    height: 3em;
    background: orange;
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
   /* margin-top: 80px;*/
  }
  .logo{
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 10px;
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
    color: white;
    width: 100px;
    text-align: center;
  }
</style>
