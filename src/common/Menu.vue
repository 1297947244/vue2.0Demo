<template>
  <div class="menu">
    <el-menu default-active="1" id="nav-menu">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>导航一</template>
        <el-menu-item index="1-1"><router-link to="/page1" class="nav-link">二级导航一</router-link></el-menu-item>
        <el-menu-item index="1-2"><router-link to="/page2" class="nav-link">二级导航二</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>导航二</template>
        <el-menu-item index="1-1"><router-link to="/page3" class="nav-link">二级导航一</router-link></el-menu-item>
        <el-menu-item index="1-2"><router-link to="/page4" class="nav-link">二级导航二</router-link></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.el-submenu {
  text-align: left;
  .el-menu-item a {
    color: #333;
    text-decoration: none;
  }
}
</style>
