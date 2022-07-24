<template>
  <div class="leftNav">
    <el-menu
      class="el-menu-vertical-demo"
      default-active="/index/home"
      :router="true"
    >
      <el-menu-item v-for="item in routeInfo" :key="item.id" :index="item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  computed: {
    routeInfo() {
      return this.$store.state.routeInfo;
    },
  },
};
</script>

<style lang="less" scoped>
.leftNav {
  width: 240px;
  .el-menu {
    height: 89.4vh;
  }
}
</style>