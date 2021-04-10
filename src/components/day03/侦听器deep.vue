<template>
  <div>
    <h1>侦听器的使用</h1>
    <input type="text" v-model="obj.name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: "a",
      },
    };
  },
  //侦听器自调用  打开页面自动触发一次，并且数据改变时也触发
  watch: {
    // watch 能在异步中侦听
    //      如果 watch 侦听的是一个对象，如果对象中的属性值发生了变化，则无法被监听到。此时可以使用 deep 选项
    // 这个时候需要注意侦听器也需要定义为对象的形式，以便让我们能够添加选项配置
    obj: {
      deep: true,
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