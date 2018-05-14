<template>
  <div class="bd">
    <div class="lb">
      <div style="text-align: center;color: #666;font-size: 25px;margin-bottom: 10px;padding-top: 10px">
        秒杀商城-商户注册
      </div>
      <div class="border"></div>
      <div class="lbf">


        <el-form :model="registerForm" status-icon :rules="registerRules" ref="registerForm" label-width="100px"  labelPosition="top" class="demo-ruleForm">
          <el-form-item>
            <el-upload
              class="upload-demo"
              action="http://127.0.0.1/sbe/img"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="logoImg"
              :limit="1"
              :on-success="logoImgSuccess"
              list-type="picture">
              <el-button size="small" type="primary">点击上传logo</el-button>
              <span slot="tip" class="el-upload__tip">只能上传小于500kb的jpg/png文件</span>
            </el-upload>
          </el-form-item>
          <el-form-item prop="phone" :required="true">
            <el-input type="text" v-model="registerForm.phone" auto-complete="off" placeholder="电话"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="registerForm.pass" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="registerForm.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item prop="corporation">
            <el-input type="text" v-model="registerForm.corporation" auto-complete="off" placeholder="法人"></el-input>
          </el-form-item>
          <!--<el-form-item prop="username">
            <el-input type="text" v-model="registerForm.pass" auto-complete="off" placeholder="法人身份证"></el-input>
          </el-form-item>-->
          <el-form-item>
          <el-upload
            class="upload-demo"
            action="http://127.0.0.1/sbe/img"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="idImg"
            :limit="1"
            :on-success="idImgSuccess"
            list-type="picture">
            <el-button size="small" type="primary">点击上传法人身份证照片</el-button>
            <span slot="tip" class="el-upload__tip">只能上传小于500kb的jpg/png文件</span>
          </el-upload>
        </el-form-item>
          <el-form-item prop="name">
            <el-input type="text" v-model="registerForm.name" auto-complete="off" placeholder="商户名"></el-input>
          </el-form-item>
          <el-form-item prop="detail">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="简介"
              v-model="registerForm.detail">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-upload
              class="upload-demo"
              action="http://127.0.0.1/sbe/img"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="license"
              :on-success="licenseSuccess"
              :limit="1"
              list-type="picture">
              <el-button size="small" type="primary">点击上传营业执照</el-button>
              <span slot="tip" class="el-upload__tip">只能上传小于500kb的jpg/png文件</span>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <button class="lbtn" type="button" @click="submitForm('registerForm')">注册</button>
          </el-form-item>
        </el-form>
        <div class="border"></div>
        <div class="footer">
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";
  import {setStore,getStore,setSession,getSession} from '../../utils/storage'
  import global from '../../global/global'


  export default {
    components: {ElFormItem},
    data() {
      var checkPhone = (rule, value, callback) => {
        callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value.length<2){
          callback(new Error('密码不少于8位且必须同时包含字母和数字'));
        }else if(!/^[\da-zA-Z]*(\d+[a-zA-Z]+)|([a-zA-Z]+\d+)[\da-zA-Z]*$/g.test(value)){
          callback(new Error('密码必须同时包含字母和数字'));
        }
        else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        rp: '',
        idImg: [],
        license:[],
        logoImg: [],
        registerResponse:{},
        registerForm: {
          pass: '',
          checkPass: '',
          phone: '',
          corporation: '',//法人
          idImg: '',
          license:'',
          name: '',
          detail:'',
          logoImg: ''
        },
        registerRules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' },
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}/g, message: '目前只支持中国大陆的手机号码', trigger: 'blur'}

          ],
          corporation: [
            { required: true, message: '请输入法人', trigger: 'blur' }
          ],
          idImg: [
            { required: true, message: '请上传法人身份证图片', trigger: 'blur' }
          ],
          license:[
            { required: true, message: '请上传营业执照', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入商户名', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      idImgSuccess(response, file, fileList){
        if(response.status == 0){
          console.log(response.file)
          this.registerForm.idImg = response.file
        }
      },
      licenseSuccess(response, file, fileList){
        if(response.status == 0){
          console.log(response.file)
          this.registerForm.license = response.file
        }
      },
      logoImgSuccess(response, file, fileList){
        if(response.status == 0){
          console.log(response.file)
          this.registerForm.logoImg = response.file
        }
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
            let args = {'password':this.registerForm.pass  ,'phone':this.registerForm.phone ,'corporation': this.registerForm.corporation,'idImg': this.registerForm.idImg,'license':this.registerForm.license,'name': this.registerForm.name,'detail':this.registerForm.detail,'logoImg': this.registerForm.logoImg}
            console.log(args)
            this.$http.post(global.serverPath+'seller',args,{emulateJSON: true}).then(function(response){
              // 响应成功回调
              this.registerResponse=response.data
              if(this.registerResponse.status == 0){
                this.$message.close()
                setStore('sellerToken',this.registerResponse.sellerToken)
                this.$router.push('/seller')
              }else{
                this.$message({
                  message: this.registerResponse.msg,
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
            console.log('请正确填写表单');
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
    }
  }

</script>
<style scoped>
  .bd{
    background: url("../../assets/images/background.png") repeat;
    background-size: 100px;
    min-height: 800px;
    min-width: 630px;
    padding-top: 60px;
  }
  .lb{
    width: 30%;
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
    width: 80%;
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
  .footer {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  }
</style>
