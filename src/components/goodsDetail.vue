
<template>
      <div class="m">
        <div class="m1">
          <el-row>
            <el-col :span="3">
              <div class="sg" v-for="img in goodsDetail.logoImg" @click="checkImg(img)" tabindex="0">
                <img :alt="img" style="width: 100%;height: 100%"
                     :src="img">
              </div>
            </el-col>
            <el-col :span="9">
              <div class="lg" >
                <img :alt="goodsDetail.limg" style="width: 100%;height: 100%"
                     :src="goodsDetail.limg">
              </div>
            </el-col>
            <el-col :span="9">
              <el-row>
                <span style="font-size: 24px;line-height: 1.25;color: #000;margin-bottom: 13px;">
                  {{goodsDetail.name}}
                </span>
              </el-row>
              <el-row style="margin-top: 10px">
                <el-col :span="20">
                  <span style="font-size: 14px;line-height: 1.5;color: #bdbdbd;">
                    {{goodsDetail.name}}
                  </span>
                </el-col>
                <el-col :span="4">
                  <span class="price">
                   ￥{{goodsDetail.price}}
                  </span>
                </el-col>
              </el-row>
              <el-row style="margin-top: 30px">
                <el-select v-model="ct" placeholder="请选择">
                  <el-option
                    v-for="ty in goodsDetail.type"
                    :label="ty.discription"
                    :value="ty.modelCode">
                  </el-option>
                </el-select>
              </el-row>
              <el-row style="margin-top: 30px">
                <el-button>加入愿望清单</el-button>
                <el-button>立即抢购</el-button>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="m2">
          <el-row>
            <div class="bt" style="padding-top: 10px">
              <span style="margin-left: 15px;ont-size: 18px;font-weight: 400;color: #626262;">产品信息</span>
            </div>
            <div class="dib" v-for="img in goodsDetail.detailImg"  tabindex="0">
              <img :alt="img" style="width: 100%;height: 100%"
                   :src="img">
            </div>
          </el-row>
        </div>
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
        msg: '商品明细',
        hasBorder: false,
        ct: '请选择型号',
        goodsDetail:{
          logoImg: [],
          name: '',
          detail: '',
          price: 99,
          type:[],
          goodsId:'',
          number: 2,
          detailImg:[],
          limg: ''
        }
      }
    },
    mounted:function () {
      this.init()
    },
    methods:{
      init(){
        this.$route.params.goodsId
        let args = {'goodsId':this.$route.params.goodsId}
        console.log(args)
        this.$http.get(global.serverPath+'goods',{params:args}).then(function(response){
          // 响应成功回调
          let result =response.data
          if(result.status == 0){
            console.log(result)
            this.goodsDetail.name = result.goods.name
            this.goodsDetail.detail = result.goods.detail
            this.goodsDetail.price = result.goodsInfo.price
            this.goodsDetail.type = result.goodsModel
            this.goodsDetail.goodsId = result.goods.goodsId
            let m = result.goods.image.split('/')
            for(var i = 0;i<m.length;i++){
              if(m[i]==''||m[i]==null||typeof(m[i])==undefined){
                m.splice(i,1);
                i=i-1;
              }else {
                m[i] = global.serverPath+'img/'+m[i]
              }
            }
            this.goodsDetail.limg = m[0]
            this.goodsDetail.logoImg = m
            let img = result.goodsInfo.image.split('/')
            for(var i = 0;i<img.length;i++){
              if(img[i]==''||img[i]==null||typeof(img[i])==undefined){
                img.splice(i,1);
                i=i-1;
              }else {
                img[i] = global.serverPath+'img/'+img[i]
              }
            }
            this.goodsDetail.detailImg = img
          }else{
            this.$message({
              message: result.msg,
              type: 'error',
              duration: 6000
            });
            this.$router.push('/')
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
      checkImg(img){
        this.goodsDetail.limg = img
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
  .m1{
    height: 500px;
    background-color: white;
    border-radius: 10px;
    padding-top: 15px;
  }
  .m2{
    background-color: white;
    border-radius: 10px;
    margin-top: 15px;
  }
  .mc{
    border-radius: 30px;
    margin-top: 50px;
  }
  .bh{
    background: #f7f7f7;
  }
  .price{
    display: block;
    color: #d44d44;
    font-weight: 700;
    font-size: 36px;
    line-height: 20px;
  }
  .sg{
    text-align: center;
    width: 80px;
    height: 80px;
    /*background: url("../assets/logo.png")no-repeat 50%;
    background-size: cover;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 5px;
    cursor: pointer;
    tabindex:"0";
  }
  .lg{
    text-align: center;
    width: 380px;
    height: 420px;
    /*background: url("../assets/logo.png")no-repeat 50%;
    background-size: cover;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgba(0,0,0,.06);
    cursor: pointer;
  }
  .sg:focus{
    border: 3px solid rgba(0,0,0,.2);
    outline: none;
  }
  .bt{
    background: #f7f7f7;
    height: 40px;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 2px 4px rgba(0,0,0,.04);
  }
  .dib{
    width: 100%;
    height: 600px;
  }
</style>
