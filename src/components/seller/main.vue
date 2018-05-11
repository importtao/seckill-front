<template>
  <el-container>
    <el-header>
      <v-s-header></v-s-header>
    </el-header>
    <el-main>
      <div class="mb">
        <el-row>
          <el-col :span="8">
            <el-card class="box-card" shadow="hover">
              <div class="text item">
                <el-row>
                  <el-col :span="18">
                    test
                  </el-col>
                  <el-col :span="6">
                    <div>
                      <i class="sk" style="font-size: 70px">&#xe62f;</i>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card" shadow="hover">
              <div class="text item">
                <el-row>
                  <el-col :span="18">
                    test
                  </el-col>
                  <el-col :span="6">
                    <div>
                      <i class="sk" style="font-size: 70px">&#xe62f;</i>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card" shadow="hover">
              <div class="text item">
                <el-row>
                  <el-col :span="20">
                    test
                  </el-col>
                  <el-col :span="4">
                    <div>
                      <i class="sk" style="font-size: 70px">&#xe62f;</i>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin-top: 30px">
          <el-col :span="8">
            <el-card class="box-card" shadow="hover">
              <div class="text item">
                <el-row>
                  <el-col :span="18">
                    test
                  </el-col>
                  <el-col :span="6">
                    <div>
                      <i class="sk" style="font-size: 70px">&#xe62f;</i>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card" shadow="hover">
              <div class="text item">
                <el-row>
                  <el-col :span="18">
                    test
                  </el-col>
                  <el-col :span="6">
                    <div>
                      <i class="sk" style="font-size: 70px">&#xe62f;</i>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card" shadow="hover">
              <div class="text item">
                <el-row>
                  <el-col :span="20">
                    test
                  </el-col>
                  <el-col :span="4">
                    <div>
                      <i class="sk" style="font-size: 70px">&#xe62f;</i>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
        </el-row>

      </div>
    </el-main>
    <el-footer>
      <v-footer></v-footer>
    </el-footer>
  </el-container>
</template>

<script>
  import header from '@/components/seller/header'
  import footer from '@/components/footer'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import {setStore,getStore,setSession,getSession} from '../../utils/storage'

  export default {
    name: 'home',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      imgSuccess(response, file, fileList){
        if(response.status == 0){
          console.log(response.file)
        }
      }
    },
    components: {
      ElCol,
      ElRow,
      'v-s-header': header,
      'v-footer': footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/icon/iconfont.css";
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
    width: 178px;
    height: 178px;
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
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    /*width: 480px;*/
    height: 210px;
    margin-left: 10px;
  }
  .mb{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .box-card:hover{
    -webkit-box-shadow: #666 0px 0px 10px;
    -moz-box-shadow: #666 0px 0px 10px;
    box-shadow: #666 0px 0px 10px;
    transform:translateZ(60px);
    transform:translateY(-2px);
  }
</style>
