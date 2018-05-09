<template>
  <div class="bd">
    <div class="lb">
      <div style="text-align: center;color: #666;font-size: 25px;margin-bottom: 10px;padding-top: 10px">
        秒杀商城注册
      </div>
      <div class="border"></div>
      <div class="lbf">


        <el-form :model="registerForm" status-icon :rules="registerRules" ref="registerForm" label-width="100px"  labelPosition="top" class="demo-ruleForm">
          <el-form-item prop="phone">
            <el-input type="text" v-model="registerForm.phone" auto-complete="off" placeholder="电话"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="registerForm.pass" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="registerForm.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <button type="button" class="lbtn" @click="submitForm('registerForm')">注册</button>
          </el-form-item>
        </el-form>
        <div class="border"></div>
        <div class="footer">
          <div class="other">其它账号登录：</div>
          <a><img @click="open('待开发','此功能开发中...')" style="height: 15px; margin-top: 22px;" src="../assets/images/other-login.png"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item.vue";
  import {setStore,getStore,setSession,getSession} from '../utils/storage'

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
        registerResponse:{},
        registerForm: {
          pass: '',
          checkPass: '',
          phone: ''
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

          ]
        }
      };
    },
    methods: {
      open (t, m) {
        this.$notify.info({
          title: t,
          message: m
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let args = {'phone':this.registerForm.phone,'password':this.registerForm.pass}
            console.log(args)
            this.$http.post('http://127.0.0.1/sbe/user',args,{emulateJSON: true}).then(function(response){
              // 响应成功回调
              this.registerResponse=response.data
              if(this.registerResponse.status == 0){
                setStore('token',this.loginResponse.token)
                this.$message.close()
                this.$router.push('/')
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
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>
<style scoped>
  .bd{
    background: url("../assets/images/background.png") repeat;
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
