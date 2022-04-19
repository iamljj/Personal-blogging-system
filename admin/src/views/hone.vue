<template>
<el-container style="height: 95vh; border: 1px solid #eee">
  <el-aside width="100px" style="background-color: #222222">
    <el-menu style="background-color: #222222"  router>
      <el-menu-item index="/users" class="text">用户管理</el-menu-item>
      <el-menu-item index="1-2" class="text">选项1</el-menu-item>
      <el-menu-item index="1-3" class="text">选项1</el-menu-item>
      <el-menu-item index="1-3" class="text">选项1</el-menu-item>
      <el-menu-item index="1-3" class="text">选项1</el-menu-item>
      <el-menu-item index="1-3" class="text">选项1</el-menu-item>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
<style lang="scss" scoped>
.text{
color:#747577
}
.text:hover{
  background-color: #222222;
  color: rgb(195,195,195);
}

</style>
