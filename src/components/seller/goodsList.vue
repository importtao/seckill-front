
<template>
  <el-container>
    <el-header>
      <v-s-header></v-s-header>
    </el-header>
    <el-main>
      <div class="m">
        <div class="m1 mc">
          <el-row>
            <el-col :span="24">
              <el-card class="box-card bh">
                <div slot="header" class="clearfix">
                  <span>商品列表</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <el-row>
                  <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                      label="商品名"
                      width="180">
                      <template slot-scope="scope">
                        <span class="price">￥{{ scope.row.price }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="简介"
                      width="180">
                      <template slot-scope="scope">
                        <span class="price">￥{{ scope.row.price }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="缩略图"
                      width="180">
                      <template slot-scope="scope">
                        <span class="price">￥{{ scope.row.price }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="详细介绍图"
                      width="180">
                      <template slot-scope="scope">
                        <span class="price">￥{{ scope.row.price }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="单价"
                      width="180">
                      <template slot-scope="scope">
                        <span class="price">￥{{ scope.row.price }}</span>
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
  import header from '@/components/seller/header'
  import footer from '@/components/footer'
  export default {
    data() {
      return {
        tableData: [{
          img: 'https://img.alicdn.com/bao/uploaded/i2/TB1epw_HpXXXXbFXVXXVJyf8VXX_031714.jpg_b.jpg',
          name: '测试商品1',
          detail:'简介测试',
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
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
  }
  .mc{
    border-radius: 30px;
    margin-top: 10px;
  }
  .bh{
    background: #f7f7f7;
  }
  .price{
    display: block;
    color: #d44d44;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
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
