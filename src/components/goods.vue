
<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main>
      <div class="m">
        <div id="sotr">
          <el-row>
            <el-col :span="12">
              <el-col :span="3">
                <router-link to="/wishList" title="综合排序" style="text-decoration:none;">综合排序</router-link>
              </el-col>
              <el-col :span="4">
                <router-link to="/wishList" title="价格从高到低" style="text-decoration:none;">价格从高到低</router-link>
              </el-col>
              <el-col :span="4">
                <router-link to="/wishList" title="价格从低到高" style="text-decoration:none;">价格从低到高</router-link>
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" placeholder="价格" size="mini" style="width: 60px"></el-input>
              </el-col>
              <el-col :span="1">
                -
              </el-col>
              <el-col :span="3">
                <el-input v-model="input" placeholder="价格" size="mini" style="width: 60px"></el-input>
              </el-col>
              <el-col :span="4">
                <el-button size="mini">确定</el-button>
              </el-col>
            </el-col>
          </el-row>
        </div>
        <div class="m1 mc">
          <el-row>
            <el-col :span="24">
              <el-card class="box-card bh">
                <div slot="header" class="clearfix">
                  <span>商品列表</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <el-row>
                  <h1>{{ $route.params.keyword }}</h1>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="block m">

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </el-main>
    <el-footer>
      <v-footer></v-footer>
    </el-footer>
  </el-container>
</template>

<script>
  import header from '@/components/header'
  import footer from '@/components/footer'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
  export default {
    name: 'home',
    data () {
      return {
        msg: '商品明细',
        tableData: [{
          img: 'https://img.alicdn.com/bao/uploaded/i2/TB1epw_HpXXXXbFXVXXVJyf8VXX_031714.jpg_b.jpg',
          name: '测试商品1',
          price: 99,
          id:'1',
          number: 2
        }, {
          img: 'https://img.alicdn.com/bao/uploaded/i2/TB1epw_HpXXXXbFXVXXVJyf8VXX_031714.jpg_b.jpg',
          name: 'carnon',
          price: 199,
          id:'1',
          number: 2
        }, {
          img: 'https://img.alicdn.com/bao/uploaded/i2/TB1epw_HpXXXXbFXVXXVJyf8VXX_031714.jpg_b.jpg',
          name: 'carnon',
          price: 199,
          id:'1',
          number: 2
        }, {
          img: 'https://img.alicdn.com/bao/uploaded/i2/TB1epw_HpXXXXbFXVXXVJyf8VXX_031714.jpg_b.jpg',
          name: 'carnon',
          price: 199,
          id:'1',
          number: 2
        }]
      }
    },
    components: {
      ElButton,
      ElCol,
      ElRow,
      'v-header': header,
      'v-footer': footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #sort{
    width: 150px;
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
  .bh{
    background: #f7f7f7;
  }
  .price{
    color: red;
  }
  .gi{
    text-align: center;
    width: 80px;
    height: 80px;
    border-radius: 10px;
    /*background: url("../assets/logo.png")no-repeat 50%;
    background-size: cover;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
