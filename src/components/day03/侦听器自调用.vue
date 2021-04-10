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
  //侦听器自调用  打开页面自动触发一次，并且数据改变时也触发
  watch: {
    // name必须跟data里面定义的数据名字一样
    name: {
      // 加载完后立即自动触发一次
      immediate: true,
      //监听name变化的值
      handler() {
        console.log(123);
      },
    },
  },
};
</script>

<style>
</style>