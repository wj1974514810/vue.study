<template>
  <div id="app">
    <!-- 添加路由超链接 -->
    <router-link to="/index">主页</router-link>
    <router-link to="/first">第一</router-link>
    <div style="background: red">
      <!-- 路由渲染 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
</style>
