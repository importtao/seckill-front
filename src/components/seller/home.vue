
<template>
  <el-container>
    <el-header>
      <v-s-header></v-s-header>
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
  import header from '@/components/seller/header'
  import footer from '@/components/footer'
  import global from '../../global/global'

  export default {
    name: 'home',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {

    },
    components: {
      'v-s-header': header,
      'v-footer': footer
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/icon/iconfont.css";

  .el-footer,.el-header{
    width: 100%;
    padding: 0px;
  }
  .el-main{
    padding-left: 0px;
    padding-right: 0px;
  }
</style>
