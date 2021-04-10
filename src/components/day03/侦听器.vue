<template>
  <div>
    <h1>侦听器的使用</h1>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "a",
    };
  },
  //侦听器  数据改变时 触发
  watch: {
    name() {
      console.log(123);
    },
  },
};
</script>

<style>
</style>