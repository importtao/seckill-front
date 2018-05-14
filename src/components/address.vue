<template>
  <div class="bd">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>收货地址管理</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addressAddVisible = true">添加收货地址</el-button>
      </div>

        <el-row>
          <div v-for="o in 4" :key="o" class="text item">
            <el-col :span="7">
              <el-card class="addrB">
                <div slot="header" class="">
                  <span>收货地址管理</span>
                  <el-button style="float: right; padding: 3px 0" type="text" @click="deleteAddr">删除</el-button>

                  <el-button style="float: right; padding: 3px 0" type="text" @click="editAddr">修改</el-button>
                </div>
                <div class="text item">
                  收货人姓名：
                </div>
                <div class="text item">
                  收货人电话：
                </div>
                <div class="text item">
                  详细地址：
                </div>
              </el-card>
            </el-col>
          </div>
        </el-row>
    </el-card>
    <el-dialog title="编辑收货地址" :visible.sync="addressEditVisible">
      <el-form :model="address">
        <el-form-item label="收货人" :label-width="formLabelWidth">
          <el-input v-model="address.name" auto-complete="off" style="width: 550px" :disabled="nameEditable"></el-input >
          <el-button style="float: right; padding: 3px 0" type="text" @click="nameEditable = false">修改</el-button>

        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="address.name" auto-complete="off" style="width: 550px" :disabled="phoneEditable"></el-input>
          <el-button style="float: right; padding: 3px 0" type="text" @click="phoneEditable = false">修改</el-button>

        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-select v-model="address.name" placeholder="请选择省" style="width: 180px" :disabled="addressEditable">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="address.name" placeholder="请选择活动区域" style="width: 180px" :disabled="addressEditable">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="address.name" placeholder="请选择活动区域" style="width: 180px" :disabled="addressEditable">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-button style="float: right; padding: 3px 0" type="text" @click="addressEditable = false">修改</el-button>

        </el-form-item>
        <el-form-item label="详细地址" :label-width="formLabelWidth">
          <el-input v-model="address.name" auto-complete="off" style="width: 550px" :disabled="addressDetailEditable"></el-input>
          <el-button style="float: right; padding: 3px 0" type="text" @click="addressDetailEditable = false">修改</el-button>

        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addressEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('address')">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加收货地址" :visible.sync="addressAddVisible">
      <el-form :model="address">
        <el-form-item label="收货人" :label-width="formLabelWidth">
          <el-input v-model="address.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="address.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-select v-model="address.name" placeholder="请选择省" style="width: 180px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="address.name" placeholder="请选择活动区域" style="width: 190px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="address.name" placeholder="请选择活动区域" style="width: 190px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="详细地址" :label-width="formLabelWidth">
          <el-input v-model="address.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addressAddVisible = false">取 消</el-button>
        <el-button type="primary" @click="addressAddVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import header from '@/components/header'
  import footer from '@/components/footer'
  import global from '../global/global'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    data () {
      return {
        addressEditVisible: false,
        addressAddVisible: false,
        formLabelWidth: '120px',
        nameEditable:true,
        phoneEditable:true,
        addressEditable:true,
        addressDetailEditable:true,
        address:{
          name:'',
          phone:''
        },
        addressRule: {
          name: [
            { required: true, message: '请输', trigger: 'blur' },
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}/g, message: '目前只支持中国大陆的手机号码', trigger: 'blur'}

          ]
        }
      }
    },
    methods:{
      deleteAddr() {
        this.$confirm('此操作将删除收货地址, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            /*let args = {'phone':this.registerForm.phone,'password':this.registerForm.pass}
            console.log(args)
            this.$http.post(global.serverPath+'user',args,{emulateJSON: true}).then(function(response){
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
            });*/
            console.log('submit')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      editAddr(){
        console.log("----------------")
        this.addressEditVisible = true
        /*this.goodsModel = model
        this.checkGoods = id*/
      },
    },
    components: {
      ElCol,
      ElRow

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
  .addrB{
    width: 360px;
    margin-top: 30px;
    margin-left: 60px;
  }
  .addrB:hover{
    -webkit-box-shadow: #666 0px 0px 10px;
    -moz-box-shadow: #666 0px 0px 10px;
    box-shadow: #666 0px 0px 10px;
    transform:translateZ(60px);
    transform:translateY(-2px);
  }
</style>
