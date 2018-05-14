
<template>
  <div>
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
                  :data="data.result"
                  style="width: 100%">
                  <el-table-column
                    label="商品名"
                    width="180">
                    <template slot-scope="scope">
                      <span class="">{{ scope.row.goods.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="简介"
                    width="180">
                    <template slot-scope="scope">
                      <span class="">{{ scope.row.goods.detail }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="缩略图"
                    width="180">
                    <template slot-scope="scope">
                      <el-button type="text" @click="showLogo((scope.row.goods.image))">查看缩略图</el-button>
                      <!--{{ scope.row.goods.image }}-->
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="详细介绍图"
                    width="180">
                    <template slot-scope="scope">
                      <el-button type="text" @click="showImage((scope.row.goodsInfo.image))">查看缩略图</el-button>
                      <!--
                                              {{ scope.row.goodsInfo.image }}
                      -->
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="单价"
                    width="180">
                    <template slot-scope="scope">
                      <span class="price">￥{{ scope.row.goodsInfo.price }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="商品型号"
                    width="180">
                    <template slot-scope="scope">
                      <el-button type="text" @click="showModel((scope.row.goodsModel),scope.row.goods.goodsId)">查看型号及库存</el-button>
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
    <el-dialog title="缩略图" :visible.sync="dialogLogoVisible">
      <div>
        <el-row>
          <el-col :span="8"v-for="l in this.logo" :key="l">
            <div class="gl">
              <img :alt="l" style="width: 100%;height: 100%"
                   :src="l">
            </div>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
    <el-dialog title="详细介绍图" :visible.sync="dialogImageVisible">
      <div>
        <el-row>
          <el-col :span="8" v-for="im in this.image" :key="im">
            <div class="gi">
              <img :alt="im" style="width: 100%;height: 100%"
                   :src="im">
            </div>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
    <el-dialog title="商品型号" :visible.sync="dialogModelVisible">
      <el-table :data="goodsModel">
        <el-table-column property="discription" label="描述" width="150"></el-table-column>
        <el-table-column property="modelCode" label="类型编号" width="200"></el-table-column>
        <el-table-column property="inventry" label="库存"></el-table-column>
      </el-table>
      <el-button type="primary" @click="innerVisible = true">添加型号</el-button>
    </el-dialog>
    <el-dialog
      width="30%"
      title="添加型号"
      :visible.sync="innerVisible"
      append-to-body>
      <el-form :model="addModel" status-icon :rules="addModelRule" ref="addModel" label-width="100px"  labelPosition="top" class="demo-ruleForm">
        <el-form-item label="型号描述"  :required="true" prop="description">
          <el-input v-model="addModel.description" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="库存量"  :required="true" prop="inventry">
          <el-input type="number" v-model="addModel.inventry" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="lbtn" type="primary" @click="submitForm('addModel')">确认添加</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import header from '@/components/seller/header'
  import footer from '@/components/footer'
  import {setStore,getStore,setSession,getSession} from '../../utils/storage'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  import global from '../../global/global'


  export default {
    data() {
      return {
        checkGoods:'',
        goodsModel: [],
        image:[],
        logo:[],
        dialogtVisible:false,
        dialogModelVisible: false,
        dialogImageVisible: false,
        dialogLogoVisible: false,
        innerVisible:false,
        sellerToken:'',
        data:[],
        addModel:{
          description:'',
          inventry:0
        },
        addModelRule:{
          description: [
            { required: true, message: '请输入类型描述', trigger: 'blur' }
          ],
          inventry: [
            { required: true, message: '请输入库存量', trigger: 'blur' }
          ]
        }
      };

    },
    mounted:function () {
      this.init()
    },
    methods: {
      init(){
        let sellerToken =getStore('sellerToken')
        if(sellerToken != null){
          this.sellerToken = sellerToken
          console.log(this.sellerToken)
        }
        let args = {'sellerToken':this.sellerToken}
        console.log(args)
        this.$http.get(global.serverPath+'myGoodsList',{params:args}).then(function(response){
          // 响应成功回调
          this.data =response.data
          if(this.data.status == 0){
            console.log(this.data.result)
          }else if(this.data.status == 2){
            this.$message({
              message: this.data.msg,
              type: 'error',
              duration: 10000
            });
            this.$router.push('/seller/login')
          } else{
            this.$message({
              message: this.data.msg,
              type: 'error',
              duration: 10000
            });
          }
        }, function(response){
          // 响应错误回调
          console.log('data:'+response)
          this.$message({
            message: '后台错误，请联系管理员处理！',
            type: 'error',
            duration: 6000
          });
        });
      },
      showModel(model,id){
        console.log("----------------"+model)
        this.dialogModelVisible = true
        this.goodsModel = model
        this.checkGoods = id
      },
      showImage(model){
        console.log("----------------"+model)
        this.dialogImageVisible = true
        let m = model.split('/')
        for(var i = 0;i<m.length;i++){
          if(m[i]==''||m[i]==null||typeof(m[i])==undefined){
            m.splice(i,1);
            i=i-1;
          }else {
            m[i] = global.serverPath+'img/'+m[i]
          }
        }
        this.image = m
      },
      showLogo(model){
        console.log("----------------"+model)
        this.dialogLogoVisible = true
        let m = model.split('/')
        for(var i = 0;i<m.length;i++){
          if(m[i]==''||m[i]==null||typeof(m[i])==undefined){
            m.splice(i,1);
            i=i-1;
          }else {
            m[i] = global.serverPath+'img/'+m[i]
          }
        }
        this.logo = m
      },
      /*showInnerDialog(){
        this.innerVisible = true

      },*/
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let args = {'sellerToken':this.sellerToken,'goodsId':this.checkGoods,'description':this.addModel.description,'inventry':this.addModel.inventry}
            console.log(args)
            this.$http.post(global.serverPath+'goodsModel',args,{emulateJSON: true}).then(function(response){
              // 响应成功回调
              this.addResponse=response.data
              if(this.addResponse.status == 0){
                this.innerVisible = false
                this.dialogModelVisible = false
                this.$message({
                  message: this.addResponse.msg,
                  type: 'success',
                  duration: 10000
                });
                this.$router.push('/seller/goodsList')
              }else if(this.addResponse.status == 2){
                this.$message({
                  message: this.addResponse.msg,
                  type: 'error',
                  duration: 10000
                });
                this.$router.push('/seller/login')
              } else{
                this.$message({
                  message: this.addResponse.msg+"刷新页面可见",
                  type: 'error',
                  duration: 10000
                });
              }
            }, function(response){
              // 响应错误回调
              console.log('data:'+response)
              this.$message({
                message: '后台错误，请联系管理员处理！',
                type: 'error',
                duration: 6000
              });
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    components: {
      ElButton,
      ElCol,
      ElRow,
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
  .gl{
    text-align: center;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    /*background: url("../assets/logo.png")no-repeat 50%;
    background-size: cover;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .gi{
    text-align: center;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    /*background: url("../assets/logo.png")no-repeat 50%;
    background-size: cover;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

</style>
