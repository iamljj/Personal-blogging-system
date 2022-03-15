<template>
  <div id="bgi">
    <img src="../images/enroll.png" style="height: 99vh; width: 100%" />
    <div class="loginBOX">
      <el-card class="box-card" :body-style="{ padding: '10px' }">
        <div slot="header" class="clearfix">
          <span>注册新账号</span>
        </div>
        <div>
          <el-form
            label-width="70px"
            :model="formLabelAlign"
            :rules="rules"
            ref="ruleForm"
          >
            <el-form-item label="用户名" prop="name">
              <el-input
                v-model="formLabelAlign.name"
                placeholder="请输入用户名"
                onkeyup="this.value=this.value.replace(/[\u4E00-\u9FA5]/g,'')"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="formLabelAlign.password"
                placeholder="请输入密码"
                show-password
                onkeyup="this.value=this.value.replace(/[\u4E00-\u9FA5]/g,'')"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="operate">
          <el-button
            type="primary"
            class="bth"
            @click="enrollbth"
            :loading="loading"
            >注册</el-button
          >
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      formLabelAlign: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          {
            min: 3,
            max: 11,
            message: "长度在 3 到 11 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 14,
            message: "长度在 6 到 14 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    enrollbth() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          let res = await this.$http.post("/user", this.formLabelAlign);
          if (res.data.code == 200) {
            this.$message({
              message: res.data.msg,
              type: "success",
            });
            this.loading=false
            this.$confirm('是否跳转到登录页面')
          .then(_ => {
          this.$router.push({path:'/login'}) 
          })
          .catch(_ => {});
          }else{
             this.loading=false
          }
        } else {
          this.$message({
            message: "请注意填写内容是否正确",
            type: "warning",
          });
        }
      });
    },
  },
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
    opacity: 0.8;
    .box-card {
      width: 400px;
      height: 300px;
    }
    .operate {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      .bth {
        width: 200px;
      }
    }
  }
}
</style>