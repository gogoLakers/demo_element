<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="15"
        ><div class="grid-content bg-purple first">
          校园后台管理系统
        </div></el-col
      >
      <el-col :span="6"
        ><a href="https://github.com/gogoLakers?tab=repositories" target="blank"
          ><img src="../assets/github.jpeg"
        /></a>
        <div class="grid-content bg-purple second">{{ username }}</div>
      </el-col>
      <el-col :span="3">
        <el-button type="danger" @click="logout">退出登录</el-button></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  methods: {
    logout() {
      this.$store.commit("updateLogout");
      this.$router.push({ name: "login" });
    },
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  line-height: 80px;
  .first {
    font-size: 30px;
    color: rgb(92, 134, 92);
  }
  .second {
    font-size: 20px;
    color: rgb(188, 115, 236);
    margin-left: 50px;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    position: absolute;
    top: 25px;
    margin-left: 80px;
  }
}
</style>