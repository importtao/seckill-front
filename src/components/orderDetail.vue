<template>
  <div class="bd">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>订单详情</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addressAddVisible = true">添加收货地址</el-button>
      </div>

      <el-row>
        <div>
          <el-steps :active="steps" align-center finish-status="success">
            <el-step title="秒杀成功" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="待支付" description="这是一段很长很长很长的描述性文字" v-if="steps<2"></el-step>
            <el-step title="支付完成" description="这是一段很长很长很长的描述性文字" v-if="steps>=2"></el-step>
            <el-step title="待发货" description="这是一段很长很长很长的描述性文字" v-if="steps<3"></el-step>
            <el-step title="已发货" description="这是一段很长很长很长的描述性文字" v-if="steps>=3"></el-step>
            <el-step title="待签收" description="这是一段很长很长很长的描述性文字" v-if="steps<4"></el-step>
            <el-step title="已签收" description="这是一段很长很长很长的描述性文字" v-if="steps>=4"></el-step>
          </el-steps>
        </div>
        <div class="detail">
          <div>
            订单号：1111111111111
          </div>
          <div>
            订单号：11111111111111111111
          </div>
          <div>
            订单号：1111111111111
          </div>
          <div>
            订单号：11111111111111111
          </div>
          <div>
            订单号：11111111
          </div>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import global from '../global/global'

  export default {
    name: 'home',
    data () {
      return {
        steps:4
      }
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bd{
    /* background: url("../assets/images/background.png") repeat;
     background-size: 100px;*/
    min-height: 350px;
    padding-top: 100px;
  }
  .box-card{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 70%;
  }
  .detail{
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    color: rgb(189, 189, 189);
  }
</style>
