<template>
  <div class="login">
    <el-popover
      placement="right"
      title="用户信息"
      width="350"
      trigger="click"
      content="admin:可以看到所有页面;teacher:首页和教师页;student:首页和学生页;密码均为123456"
      ><el-button
        type="warning"
        icon="el-icon-s-comment"
        circle
        slot="reference"
        class="hint"
      ></el-button
    ></el-popover>
    <div>
      <i class="el-icon-burger"></i>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          placeholder="请输入用户名"
          v-model="ruleForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="ruleForm.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" @keyup="keyDown(e)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reqLogin } from "@/utils/index.js";
import _ from "lodash";
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 12, message: "密码长度为6~12", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    // 绑定监听事件
    window.addEventListener("keydown", this.keyDown);
  },
  beforeDestroy() {
    // 解绑监听事件
    window.removeEventListener("keydown", this.keyDown, false);
  },
  methods: {
    login: _.throttle(async function () {
      let res = await reqLogin(this.ruleForm);
      if (res.data.code === 200) {
        this.$message.success("登录成功");
        this.$store.commit("updataUserinfo", res.data.userinfo);
        this.$router.push({ name: "index" });
      } else {
        this.$message({
          type: "warning",
          message: "用户名或者密码错误",
          duration: 500,
        });
      }
    }, 1000),
    keyDown(e) {
      if (e.keyCode == 13) {
        this.login();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 520px;
  height: 280px;
  background-color: rgb(236, 230, 234);
  padding: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-260px, -200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .el-icon-burger {
    width: 30px;
    height: 30px;
  }
  .el-form-item .el-button {
    margin-left: 30px;
  }
  .hint {
    position: absolute;
    right: 5px;
    top: 5px;
  }
}
</style>