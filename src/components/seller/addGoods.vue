
<template>
  <div class="bd">
    <div class="lb">
      <div style="text-align: center;color: #666;font-size: 25px;margin-bottom: 10px;padding-top: 10px">
        秒杀商城-商户-添加商品
      </div>
      <div class="border"></div>
      <div class="lbf">
        <el-form :model="goodsForm" status-icon :rules="rules2" ref="goodsForm" label-width="100px"  labelPosition="right" class="demo-ruleForm">
          <el-form-item prop="name" label="商品名" :required="true">
            <el-input type="text" v-model="goodsForm.name" auto-complete="off" placeholder="商品名"></el-input>
          </el-form-item>
          <el-form-item prop="detail" label="简介" >
            <el-input
              type="textarea"
              :rows="4"
              placeholder="简介"
              v-model="goodsForm.detail">
            </el-input>
          </el-form-item>
          <el-form-item label="缩略图" prop="image">
            <el-upload
              class="upload-demo"
              action="http://127.0.0.1/sbe/img"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="logoImg"
              :limit="6"
              :on-success="logoImgSuccess"
              list-type="picture">
              <el-button size="small" type="primary">点击上传logo</el-button>
              <span slot="tip" class="el-upload__tip">只能上传小于500kb的jpg/png文件</span>
            </el-upload>
          </el-form-item>
          <el-form-item prop="detailImg" label="详细图片：">
            <el-upload
              action="http://127.0.0.1/sbe/img"
              list-type="picture-card"
              :on-preview="handlePreview"
              :on-success="imgSuccess"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item prop="price" label="商品单价" :required="true">
            <el-input type="number" v-model="goodsForm.price" auto-complete="off" placeholder="商品单价" ></el-input>
          </el-form-item>
          <!--<el-form-item  label="商品型号">
            <el-row>
              <el-col :span="5" v-for="model in models" style="margin-left: 10px">
                <el-form-item  prop="description" >
                  <el-input type="text" v-model="model.description" auto-complete="off" placeholder="型号"></el-input>
                </el-form-item>
                <el-form-item  prop="inventry" style="margin-top: 20px">
                  <el-input type="number" v-model="model.inventry" auto-complete="off" placeholder="库存"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="3">
                <div>
                  <button type="button" class="abtn" @click="addModel" style="margin-top: 15px;margin-left: 10px;">添加型号</button>
                </div>
              </el-col>
            </el-row>
          </el-form-item>-->
          <el-form-item>
            <button class="lbtn" @click="submitForm('goodsForm')" type="button">确认添加</button>
          </el-form-item>
        </el-form>
        <div class="border"></div>
        <div class="ffooter">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '@/components/seller/header'
  import footer from '@/components/footer'
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  import {setStore,getStore,setSession,getSession} from '../../utils/storage'


  export default {
    components: {
      ElButton,
      ElCol,
      ElRow,
      ElFormItem},
    data() {
      var validateInventry = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } /*else if(!/^[\da-zA-Z]*(\d+[a-zA-Z]+)|([a-zA-Z]+\d+)[\da-zA-Z]*$/g.test(value)){
          callback(new Error('密码必须同时包含字母和数字'));
        }*/
        else {
          callback();
        }
      };
      var validateDescription = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } /*else if(!/^[\da-zA-Z]*(\d+[a-zA-Z]+)|([a-zA-Z]+\d+)[\da-zA-Z]*$/g.test(value)){
          callback(new Error('密码必须同时包含字母和数字'));
        }*/
        else {
          callback();
        }
      };
      return {
        rp: '',
        sellerToken:'',
        detailImg:[],
        dialogImageUrl: '',
        dialogVisible: false,
        logoImg: [],
        addResponse:{},
        models:[{inventry:0,description:'1'}],
        goodsForm: {
          name: '',
          detail:'',
          image:'',
          detailImg:'',
          price: 0
        },
        rules2: {
          name:[
            { required: true, message: '请输入商品名称', trigger: 'blur' }
          ],
          image:[
            { required: true, message: '请上传图片', trigger: 'blur' }
          ],
          detailImg:[
            { required: true, message: '请上传图片', trigger: 'blur' }
          ],
          price: [
            { required: true, message: '请输入商品价格', trigger: 'blur' }
          ],inventry:[
            { validator: validateInventry, trigger: 'blur' },
            { pattern: /^\d*/g, message: '请输入整数', trigger: 'blur'}
          ],description:[
            { validator: validateDescription, trigger: 'blur' },
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
      },
      imgSuccess(response, file, fileList){
        if(response.status == 0){
          console.log(response.file)
          this.goodsForm.detailImg += '/'+response.file
        }
      },
      logoImgSuccess(response, file, fileList){
        if(response.status == 0){
          console.log(response.file)
          this.goodsForm.image += '/'+response.file
        }
      },
      addModel(){
        let m = {inventry:0,description:''}
        console.log(this.models.length)
        this.models = this.models.concat(m)
        console.log(this.models.length)
      },
      open (t, m) {
        this.$notify.info({
          title: t,
          message: m
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let args = {'name':this.goodsForm.name, 'detail':this.goodsForm.detail, 'image':this.goodsForm.image, 'detailImg':this.goodsForm.detailImg, 'price': this.goodsForm.price,'sellerToken':this.sellerToken}
            console.log(args)
            this.$http.post('http://127.0.0.1/sbe/goods',args,{emulateJSON: true}).then(function(response){
              // 响应成功回调
              this.addResponse=response.data
              if(this.addResponse.status == 0){
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
                  message: this.addResponse.msg,
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
            this.$message({
              message: '请正确填写表单！',
              type: 'error',
              duration: 6000
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    },
    components: {
      'v-s-header': header,
      'v-footer': footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 118px;
    height: 118px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-footer,.el-header{
    width: 100%;
    padding: 0px;
  }
  .bd{
    background: url("../../assets/images/background.png") repeat;
    background-size: 100px;
    min-height: 800px;
    min-width: 630px;
    padding-top: 20px;
  }
  .lb{
    width: 60%;
    height: 60%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 9px 30px -6px rgba(0,0,0,.2), 0 18px 20px -10px rgba(0,0,0,.04), 0 18px 20px -10px rgba(0,0,0,.04), 0 10px 20px -10px rgba(0,0,0,.04);


  }
  .lbf{
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    padding-top: 10px;
  }

  .lbtn{
    border: 1px solid #5c81e3;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    background-color: #678ee7;
    background-image: linear-gradient(180deg,#678ee7,#5078df);
    margin: 0px;
    width: 100%;
    height: 48px;
    font-size: 18px;
    line-height: 48px;
  }
  .border {
    margin-top: 10px;
    border-bottom: 1px solid #ccc;
  }
  .other {
    margin: 20px 5px 0 0;
    width: auto;
    color: #bbb;
    font-size: 12px;
    cursor: default;
    color: #999;
  }
  .ffooter {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  }
  .abtn{

    border: 1px solid #5c81e3;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    background-color: #678ee7;
    background-image: linear-gradient(180deg,#678ee7,#5078df);
    margin: 0px;
    width: 100%;
    height: 48px;
    font-size: 18px;
    line-height: 48px;
  }
</style>
