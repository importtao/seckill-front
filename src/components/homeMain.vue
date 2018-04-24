<template>
  <div class="m">
    <div class="m1 mc">
      <el-row>
        <el-col :span="24" >
          <el-card class="box-card bh">
            <div slot="header" class="clearfix">
              <span>官方推荐</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <el-row >
              <el-col :span="24" >
                <el-card :body-style="{ padding: '0px'}" class="bc" shadow="hover">
                  <img src="../assets/logo.png" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="m1 mc">
      <el-row>
        <el-col :span="24">
          <el-card class="box-card bh" shadow="hover">
            <div slot="header" class="clearfix">
              <span>品牌周边</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <el-row>
              <el-col :span="8" v-for="(o, index) in 6" :key="o" >
                <el-card :body-style="{ padding: '0px'}" class="bc" shadow="hover">
                  <img src="../assets/logo.png" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="m1 mc">
      <el-row>
        <el-col :span="24">
          <el-card class="box-card bh" shadow="hover">
            <div slot="header" class="clearfix">
              <span>品牌周边</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <el-row>
              <el-col :span="6" v-for="(o, index) in 36" :key="o" >
                <el-card :body-style="{ padding: '0px'}" class="bc" shadow="hover">
                  <img src="../assets/logo.png" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="m1 mc">
      <el-dropdown>
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
    </div>
  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    components: {
      ElCol,
      ElRow},
    name: 'v-homeMain',
    data () {
      return {
        msg: '秒杀商城首页',
        currentDate: new Date(),
        //推荐
        recommender:[],
        //热门商品
        hot:[],
        //品牌商品
        brand:[]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .m{
    /*height: 1000px;*/
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 100px;
  }
  .mc{
    border-radius: 30px;
    margin-top: 50px;
  }
  .bc{
    margin-left: 0px;
    border: 0px;
  }
  .bc:hover{
    -webkit-box-shadow: #666 0px 0px 10px;
    -moz-box-shadow: #666 0px 0px 10px;
    box-shadow: #666 0px 0px 10px;
    transform:translateZ(60px);
    transform:translateY(-2px);
  }
  .bh{
    background: #f7f7f7;
    padding: 0px;
  }
</style>
