<template>
  <div>
    <el-tabs v-model="active_route" @tab-click="handleClick">
      <el-tab-pane label="成绩录入" name="recordscore"></el-tab-pane>
      <el-tab-pane label="工资管理" name="salary"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    active_route: {
      get() {
        return this.$route.name;
      },
      set() {},
    },
  },
  methods: {
    handleClick(tab) {
      this.$router.push({ name: `${tab.name}` });
    },
  },
};
</script>
