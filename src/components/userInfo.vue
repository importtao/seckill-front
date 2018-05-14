<template>
  <div class="bd">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人主页</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addressAddVisible = true">添加收货地址</el-button>
      </div>

      <el-row>
        <el-col :span="10" style="">
          <div>
            <el-form :model="user" ref="user" :rules="userRule">
              <el-form-item label="用户名ID" :label-width="formLabelWidth">
                <el-input v-model="user.userId" auto-complete="off" style="width: 390px" :disabled="true"></el-input >
              </el-form-item>
              <el-form-item label="用户名" :label-width="formLabelWidth" prop="userName">
                <el-input v-model="user.userName" auto-complete="off" style="width: 390px" :disabled="userNameEditable"></el-input >
                <el-button style="float: right; padding: 3px 0" type="text" @click="userNameEditable = false" v-if="userNameEditable">修改</el-button>
              </el-form-item>
              <el-form-item label="绑定手机号" :label-width="formLabelWidth" prop="userPhone">
                <el-input v-model="user.userPhone" auto-complete="off" style="width: 390px" :disabled="userPhoneEditable" ></el-input >
                <el-button style="float: right; padding: 3px 0" type="text" @click="userPhoneEditable = false" v-if="userPhoneEditable">修改</el-button>
              </el-form-item>
              <el-form-item size="large" v-if="!userNameEditable||!userPhoneEditable">
                <div style="margin-left: auto;margin-right: auto;width: 250px">
                  <el-button type="primary" @click="submitForm('user')">确认修改</el-button>
                  <el-button @click="cancelChange">取消</el-button>
                </div>
              </el-form-item>
            </el-form>

          </div>
        </el-col>
        <el-col :span="6" style="margin-left: 100px">
          <div class="gi">
            <img :alt="user.userImg" class="gi" style="width: 100%;height: 100%"
                 :src="'http://127.0.0.1/sbe/img/'+user.userImg">
          </div>
          <div>
            <el-upload
              class="upload-demo"
              action="http://127.0.0.1/sbe/img"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :show-file-list="false"
              :on-success="imgSuccess"
            >
              <el-button size="small" type="primary">修改头像</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import global from '../global/global'
  import ElCol from "element-ui/packages/col/src/col";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
  import {getStore,setStore} from "../utils/storage"

  export default {
    name: 'home',
    data () {
      return {
        userPhone:'',
        token:'',
        userImg:'',
        userName:'',
        formLabelWidth:'120px',
        userNameEditable:true,
        userPhoneEditable:true,
        changeResponse:{},
        userModel:{},
        user:{
          userId:'',
          userPhone:'',
          userImg:'',
          userName:''
        },
        userRule: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          userPhone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}/g, message: '目前只支持中国大陆的手机号码', trigger: 'blur'}
          ]
        }

      }
    },
    mounted:function () {
      this.init()
    },
    methods:{
      init(){
        let token =getStore('token')
        if(token != null){
          this.token = token
          console.log(this.token)
          let args = {'token':this.token}
          console.log(args)
          this.$http.get(global.serverPath+'userModel',{params:args}).then(function(response){
            // 响应成功回调
            this.userModel =response.data
            if(this.userModel.status == 0){
              console.log(this.userModel)
              this.user.userId = this.userModel.user.userId
              this.user.userPhone = this.userModel.user.userPhone
              this.user.userName = this.userModel.user.userName
              this.user.userImg = this.userModel.userInfo.userImg
              this.userPhone = this.user.userPhone
              this.userName  = this.user.userName
              this.userImg   = this.user.userImg
            }else if(this.userModel.status == 2){
              this.$message({
                message: this.userModel.msg,
                type: 'error',
                duration: 6000
              });
              this.$router.push('/login')
            } else{
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
        }else {
          this.logined = false
          this.$message({
            message: '当前未登录，请先登录',
            type: 'error',
            duration: 6000
          });
          this.$router.push('/login')
        }
      },
      imgSuccess(response, file, fileList){
        if(response.status == 0){
          console.log(response.file)
          this.user.userImg = response.file
          let fdata = '?token='+this.token+'&userId='+this.user.userId+'&userImg='+this.user.userImg
          this.$http.put(global.serverPath+'userImg'+fdata).then(function(response){
            // 响应成功回调
            this.changeResponse=response.data
            if(this.changeResponse.status == 0){
              this.$message({
                message: '修改成功',
                type: 'success',
                duration: 6000
              });
              this.userNameEditable = true
              this.userPhoneEditable = true
            }else if(this.changeResponse.status == 2){
              this.$message({
                message: this.changeResponse.msg,
                type: 'error',
                duration: 6000
              });
              this.$router.push('/login')
            } else{
              this.$message({
                message: '后台错误，请联系管理员处理！',
                type: 'error',
                duration: 6000
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
        }

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let fdata = '?userPhone='+this.user.userPhone+'&userName='+this.user.userName+'&token='+this.token+'&userId='+this.user.userId+'&userImg='+this.user.userImg
            this.$http.put(global.serverPath+'user'+fdata).then(function(response){
              // 响应成功回调
              this.changeResponse=response.data
              if(this.changeResponse.status == 0){
                this.$message({
                  message: '修改成功',
                  type: 'success',
                  duration: 6000
                });
                this.userNameEditable = true
                this.userPhoneEditable = true
              }else if(this.changeResponse.status == 2){
                this.$message({
                  message: this.changeResponse.msg,
                  type: 'error',
                  duration: 6000
                });
                this.$router.push('/login')
              } else{
                this.$message({
                  message: this.changeResponse.msg,
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
            console.log('submit')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      cancelChange(){
        console.log(this.user.userPhone)
        console.log(this.userPhone)
        this.user.userPhone=this.userPhone
        this.user.userName =this.userName
        this.user.userImg =this.userImg
        this.userNameEditable=true
        this.userPhoneEditable=true
      }
    },
    components: {
      ElButton,
      ElCol
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bd{
    /* background: url("../assets/images/background.png") repeat;
     background-size: 100px;*/
    min-height: 350px;
    padding-top: 100px;
  }
  .box-card{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 70%;
  }
  .gi{
    width: 260px;
    height: 260px;
    border-radius: 10px;
    border: 2px;
  }
</style>
