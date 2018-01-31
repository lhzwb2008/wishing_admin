<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="activeIndex" @select="handleSelect">
          <el-menu-item index="1">愿望管理</el-menu-item>
          <el-menu-item index="2">御守管理</el-menu-item>
          <el-menu-item index="3">用户管理</el-menu-item>
          <el-menu-item index="4">许愿池管理</el-menu-item>
          <el-menu-item index="5">许愿牌管理</el-menu-item>
          <el-menu-item index="6">新建许愿牌</el-menu-item>
          <el-menu-item index="7">新建许愿池</el-menu-item>
          <el-menu-item index="8">新建愿望</el-menu-item>
          <el-menu-item index="9">新建御守</el-menu-item>
          <el-menu-item index="10">新建御守牌</el-menu-item>
          <el-menu-item index="11">御守牌管理</el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
 

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == 1) {
        this.$router.push({ path: "/showWishings" });
      } else if (key == 2) {
        this.$router.push({ path: "/showGuardings" });
      } else if (key == 3) {
        this.$router.push({ path: "/showUsers" });
      } else if (key == 4) {
        this.$router.push({ path: "/showWishingPools" });
      } else if (key == 5) {
        this.$router.push({ path: "/showWishingCards" });
      } else if (key == 6) {
        this.$router.push({ path: "/createCard" });
      } else if (key == 7) {
        this.$router.push({ path: "/createPool" });
      } else if (key == 8) {
        this.$router.push({ path: "/createWishing" });
      } else if (key == 9) {
        this.$router.push({ path: "/createGuarding" });
      } else if (key == 10) {
        this.$router.push({ path: "/createGuardingCard" });
      } else if (key == 11) {
        this.$router.push({ path: "/showGuardingCards" });
      }
    }
  }
};
</script>

<style>
.el-aside {
  color: #333;
}
</style>
