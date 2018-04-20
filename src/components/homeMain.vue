<template>
  <div class="m1">
    <el-row>
      <el-col :span="24">

      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'v-homeMain',
    data () {
      return {
        msg: '秒杀商城首页'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .bg-purple-dark {
    background: #e8f4f9;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .m1{
    height: 1000px;
    padding-top: 30px;
    background-color: #43938d;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 100px;
  }
  .logo{
    text-align: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: url("../assets/logo.png")no-repeat 50%;
    background-size: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
