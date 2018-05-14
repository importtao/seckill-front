<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <v-footer></v-footer>
    </el-footer>
  </el-container>
</template>

<script>
  import header from '@/components/header'
  import footer from '@/components/footer'
  import homeMain from '@/components/homeMain'
  import global from '../global/global'

  export default {
    name: 'home',
    data () {
      return {
        msg: '秒杀商城首页'
      }
    },
    components: {
      'v-header': header,
      'v-footer': footer,
      'v-homeMain': homeMain
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-footer,.el-header{
    width: 100%;
    padding: 0px;
  }
  .el-main{
    padding-left: 0px;
    padding-right: 0px;
  }
</style>
