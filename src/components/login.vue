<template>
  <div class="bd">
    <div class="lb">
      <div class="lbf">
        <div class="logo">
        </div>
        <div style="text-align: center;color: #666;font-size: 25px;margin-bottom: 20px">
          秒杀商城登录
        </div>
        <el-form :model="loginForm" status-icon :rules="login" ref="loginForm" label-width="100px"  labelPosition="top" class="demo-ruleForm">
          <el-form-item prop="parameter">
            <el-input type="text" v-model="loginForm.parameter" auto-complete="off" placeholder="昵称/电话/用户ID"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="loginForm.pass" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="rp">记住密码</el-checkbox>
            <router-link to="/register" style="padding: 0 5px;margin-left: 55%" >注册用户</router-link>

          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="lbtn" @click="submitForm('loginForm')">登录</el-button>
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

  export default {
    components: {ElFormItem},
    data() {
      var validateparameter = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入昵称/电话/用户ID'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.loginForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        rp: '',
        loginResponse:{},
        loginForm: {
          pass: '',
          checkPass: '',
          parameter: ''
        },
        login: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          parameter: [
            { validator: validateparameter, trigger: 'blur' }
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
          let arg = {'parameter':this.loginForm.parameter,'password':this.loginForm.pass}
          this.$http.get('http://127.0.0.1/sbe/user',{params:arg}).then(function(response){
            // 响应成功回调
            this.loginResponse=response.data
            if(this.loginResponse.status == 0){
              this.$message.close()
              this.$router.push('/home')
            }else{
              this.$message({
                message: this.loginResponse.msg,
                type: 'error',
                duration: 6000
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
    padding-top: 100px;
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
    padding-top: 50px;
  }
  .logo{
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background: url("../assets/logo.png")no-repeat 50%;
    background-size: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
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
