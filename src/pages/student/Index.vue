<template>
  <div>
    <el-tabs v-model="active_route" @tab-click="handleClick">
      <el-tab-pane label="培养方案" name="teachingplan"></el-tab-pane>
      <el-tab-pane label="网上选课" name="courseschoose"></el-tab-pane>
      <el-tab-pane label="成绩查询" name="grades"></el-tab-pane>
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