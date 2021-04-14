<template>
  <div>
    <h1>第三方库动画效果</h1>
    <button @click="msg = !msg">点击</button>

    <!-- 只需要关注进入中，离开中，不需要关注其他 -->
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <p v-show="msg">1</p>
    </transition>
  </div>
</template>

<script>
// 引入第三方库
import "animate.css";
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
  width: 100px;
  background-color: skyblue;
}
</style>>




