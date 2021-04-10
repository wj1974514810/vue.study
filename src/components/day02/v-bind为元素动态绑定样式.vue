<template>
  <div>
    <button @click="flag = !flag">展开或合并</button>
    <!-- <div class="menu"></div> -->
    <!-- <div :class="{menu:true,small:flag}"></div> -->
    <!-- <div class="menu"
         :class="{small:flag}"></div> -->

    <!-- menu不加引号是一个变量，必须是一个已定定义的变量 -->
    <!-- menu是必须有的属性，small要或者不要 需进行判断，对象里的属性可写可不写引号 -->
    <div :class="['menu', { small: flag }]"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style lang="less" scoped>
.menu {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  transition: all 1s;
}
.small {
  height: 40px;
}
</style>