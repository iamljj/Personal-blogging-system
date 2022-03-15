<template>
  <div id="bgi">
    <img src="../images/bgi.png" style="height: 99vh; width: 100%" />
    <div class="loginBOX">
      <el-card class="box-card" :body-style="{ padding: '10px' }">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <div>
          <el-form label-width="50px" :model="formLabelAlign">
            <el-form-item label="账号">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formLabelAlign.password"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="operate">
          <div class="zhuce">
              <el-button type="text" @click="Toenroll">注册新账号</el-button>
          </div>
          <el-button type="text">忘记密码？</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign: {
        name: "",
        password: "",
      },
    };
  },
  methods:{
      Toenroll(){
         this.$router.push({path:'/enroll'}) 
      }
  }
};
</script>

<style lang='scss'>
#bgi {
  position: relative;
  .loginBOX {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    opacity: 0.9;
    .box-card {
      width: 400px;
      height: 300px;
    }
    .operate {
        margin-top:80px ;
      display: flex;
      .zhuce {
        flex: 1;
      }
    }
  }
}
</style>