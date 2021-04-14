<template>
  <div class="sister">
    <p>这是兄弟组件</p>
    <p>名字是{{ mybrothergrname }}</p>
  </div>
</template>

<script>
// 引入事件总线,用于两个组件之间的数据传递
import bus from "../../../utils/eventBus";
export default {
  data() {
    return {
      mybrothergrname: "",
    };
  },
  mounted() {
    // 这里用箭头函数   箭头函数不会改变this指向
    // 如果这里用function  this会指向vue实例
    //当监听到其他组件所发出的事件，调用指定的回调函数进行处理，回调函数的参数就是其他组件发出事件时所传递的参数
    bus.$on("getNameS", (data) => {
      console.log(this);
      this.mybrothergrname = data;
    });
  },
};
</script>

<style lang="less">
.sister {
  background-color: yellow;
}
</style>>

