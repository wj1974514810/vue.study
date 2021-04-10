<template>
  <div>
    <h1>过渡动画</h1>
    <button @click="msg = !msg">点击</button>

    <transition name="move">
      <p v-show="msg">1</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: false,
    };
  },
};
</script>

<style lang="less">
p {
  width: 200px;
  background-color: red;
}
.move-enter,
.move-leave-to {
  opacity: 0;
  margin-left: 300px;
}
.move-enter-active,
.move-leave-active {
  transition: all 3s;
}
.move-enter-to,
.move-leave {
  opacity: 1;
  margin-left: 0px;
}
</style>>
