<template>
  <div class="bd">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>订单</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addressAddVisible = true">添加收货地址</el-button>
      </div>

      <el-row>

      </el-row>
    </el-card>
  </div>
</template>

<script>
  import global from '../../global/global'

  export default {
    name: 'home',
    data () {
      return {
      }
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bd{
    min-height: 350px;
    padding-top: 100px;
  }
  .box-card{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 70%;
  }
</style>
