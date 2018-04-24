
<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main>
      <div class="m">
        <div class="m1 mc">
          <el-row>
            <el-col :span="24">
              <el-card class="box-card bh">
                <div slot="header" class="clearfix">
                  <span>愿望清单</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <el-row>
                  <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                      label="商品信息"
                      width="380">
                      <template slot-scope="scope">
                        <el-row>
                          <el-col :span="4"><el-checkbox ></el-checkbox></el-col>
                          <el-col :span="8">
                            <!--<div class="gi" v-bind:style="{ background: 'url('+ scope.row.img +')no-repeat 50%'}">
                            </div>-->
                            <div class="gi">
                              <img :alt="scope.row.name" style="width: 100%;height: 100%"
                                   :src="scope.row.img">
                            </div>
                          </el-col>
                          <el-col :span="12">
                            <span>{{ scope.row.name }}</span>
                          </el-col>
                        </el-row><!--<div class="gi" v-bind:style="{ background: 'url('+ scope.row.img +')no-repeat 50%'}">

                        </div>-->
                        <!--<div class="items-thumb fl">
                          <img :alt="scope.row.name"
                               :src="scope.row.img">
                        </div>-->
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="单价"
                      width="180">
                      <template slot-scope="scope">
                        <span class="price">￥{{ scope.row.price }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="数量">
                      <template slot-scope="scope">
                        <el-input-number size="mini" v-model="scope.row.number"></el-input-number>
                      </template>
                    </el-table-column>
                    <el-table-column label="小计" style="text-align: center">
                      <template slot-scope="scope">
                        <span class="price">￥{{scope.row.price}}*{{scope.row.number}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="操作">
                      <template slot-scope="scope">
                        <el-button icon="el-icon-delete" circle></el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
        </div>
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
  export default {
    name: 'home',
    data () {
      return {
        msg: '秒杀商城首页',
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
      ElCol,
      ElRow,
      'v-header': header,
      'v-footer': footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-footer,.el-header{
    width: 100%;
    padding: 0px;
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
