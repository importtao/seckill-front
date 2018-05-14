
<template>
  <div >
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
              <el-input v-model="priceMin" placeholder="价格" size="mini" style="width: 60px"></el-input>
            </el-col>
            <el-col :span="1">
              -
            </el-col>
            <el-col :span="3">
              <el-input v-model="priceMax" placeholder="价格" size="mini" style="width: 60px"></el-input>
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
            <el-card class="box-card bh bd">
              <div slot="header" class="clearfix">
                <span>商品列表</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <el-row v-if="has">
                <el-col :span="6" v-for="goodsModel in goodsList" >
                  <el-card :body-style="{ padding: '0px'}" class="bc" shadow="hover" @hover="console.log('123')">
                    <img :src="getImageByImages(goodsModel.goods.image)" class="image">
                    <div style="padding: 14px;">
                      <el-row style="height: 16px">
                        <span style="font-size: 16px;line-height: 1.25;color: #000;margin-bottom: 13px;">
                          {{goodsModel.goods.name}}
                        </span>
                      </el-row>
                      <el-row style="margin-top: 5px;height: 32px">
                        <el-col :span="17">
                          <span style="font-size: 14px;line-height: 1.5;color: #bdbdbd;">
                            {{goodsModel.goods.detail}}
                          </span>
                        </el-col>
                        <el-col :span="7">
                          <span class="price">
                           ￥{{goodsModel.goodsInfo.price}}
                          </span>
                        </el-col>
                      </el-row>
                      <el-row style="margin-top: 30px" >
                          <el-button>加入愿望清单</el-button>
                          <el-button type="primary" @click="goodsDetail(goodsModel.goods.goodsId)">立即抢购</el-button>
                      </el-row>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <div v-if="!has">
                <h1>找不到你想要的商品"{{keyword}}"</h1>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--<div class="block m">

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>-->
  </div>
</template>

<script>
  import header from '@/components/header'
  import footer from '@/components/footer'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
  import global from '../global/global'

  export default {
    name: 'home',
    data () {
      return {
        keyword: '',
        has:false,
        priceMin:0,
        priceMax:0,
        currentDate: new Date(),
        goodsList:[]
      }
    },
    mounted:function () {
      this.init()
    },
    methods:{
      init(){
        this.keyword = this.$route.params.keyword
        let args = {'keyWord':this.keyword}
        console.log(args)
        this.$http.get(global.serverPath+'goodsList',{params:args}).then(function(response){
          // 响应成功回调
          let result =response.data
          if(result.status == 0){
            console.log(result)
            if(Object.keys(result.result).length >0){
              this.has=true
              this.goodsList = result.result
            }else{
              this.has=false
            }
          }else{

          }
        }, function(response){
          // 响应错误回调
          console.log('data:'+response)
          this.logined = false
          this.$message({
            message: '后台错误，请联系管理员处理！',
            type: 'error',
            duration: 6000
          });
        });
      },
      getImageByImages(images){
        let m = images.split('/')
        for(var i = 0;i<m.length;i++){
          if(m[i]==''||m[i]==null||typeof(m[i]) == undefined){
            m.splice(i,1);
            i=i-1;
          }else {
            m[i] = global.serverPath+'img/'+m[i]
          }
        }
        return m[0]
      },
      goodsDetail(id){
        this.$router.push('/goodsDetail/'+id)
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
  .bd{
    /* background: url("../assets/images/background.png") repeat;
     background-size: 100px;*/
    min-height: 350px;
    padding-top: 10px;
  }
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
    height: 200px;
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
    margin-top: 10px;
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
  .price{
    display: block;
    color: #d44d44;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
  }
</style>
