<template>
</template>

<script>
  import header from '@/components/header'
  import footer from '@/components/footer'
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-footer,.el-header{
    width: 100%;
    padding: 0px;
  }
</style>
