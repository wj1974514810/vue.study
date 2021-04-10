<template>
  <div>
    <button @click="one">无参</button>
    <button @click="two('cn')">传参</button>
    <!-- $event 不是内置就是挂载  $开头很重要 -->
    <button @click="three('zh', $event)">传参+事件源对象</button>
  </div>
</template>

<script>
export default {
  methods: {
    one(e) {
      console.log(e);
    },
    two(name) {
      console.log(name);
    },
    three(name, e) {
      console.log(name, e);
    },
  },
};
</script>

<style>
</style>