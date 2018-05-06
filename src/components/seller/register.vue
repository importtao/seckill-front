<template>
  <div class="bd">
    <div class="lb">
      <div style="text-align: center;color: #666;font-size: 25px;margin-bottom: 10px;padding-top: 10px">
        秒杀商城-商户注册
      </div>
      <div class="border"></div>
      <div class="lbf">


        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px"  labelPosition="top" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input type="text" v-model="ruleForm2.pass" auto-complete="off" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="username">
            <el-input type="text" v-model="ruleForm2.pass" auto-complete="off" placeholder="电话"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item prop="username">
            <el-input type="text" v-model="ruleForm2.pass" auto-complete="off" placeholder="法人"></el-input>
          </el-form-item>
          <el-form-item prop="username">
            <el-input type="text" v-model="ruleForm2.pass" auto-complete="off" placeholder="法人身份证"></el-input>
          </el-form-item>
          <el-form-item>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList2"
              list-type="picture">
              <el-button size="small" type="primary">点击上传法人身份证照片</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList2"
              list-type="picture">
              <el-button size="small" type="primary">点击上传营业执照</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item prop="username">
            <el-input type="text" v-model="ruleForm2.pass" auto-complete="off" placeholder="商户名"></el-input>
          </el-form-item>
          <el-form-item prop="username">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="简介"
              v-model="textarea">
            </el-input>
          </el-form-item>
          <el-form-item>
            <button class="lbtn" @click="submitForm('ruleForm2')">注册</button>
          </el-form-item>
        </el-form>
        <div class="border"></div>
        <div class="footer">
          <div class="other">其它账号登录：</div>
          <a><img @click="open('待开发','此功能开发中...')" style="height: 15px; margin-top: 22px;" src="../../assets/images/other-login.png"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";

  export default {
    components: {ElFormItem},
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        rp: '',
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
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
            alert('submit!');
          } else {
            console.log('error submit!!');
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
