<template>
  <div>
    <h1>计算属性的定义与使用</h1>
    <p>{{ msg.split("").reverse().join("") }}</p>
    <!-- 只能用计算属性来调用 不需要加（） -->
    <p>{{ reserveString }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hellow",
    };
  },
  // 计算属性
  computed: {
    reserveString() {
      let str = this.msg.split("").reverse().join("");

      return str;
    },
  },
};
</script>

<style>
</style>