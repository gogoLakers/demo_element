<template>
  <div>
    <el-container>
      <el-header height="80px"><MyHeader /></el-header>
      <el-container>
        <el-aside width="240px"><Aside /></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "./MyHeader";
import Aside from "./Aside";
export default {
  name: "Index",
  components: { MyHeader, Aside },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  float: right;
}
</style>
