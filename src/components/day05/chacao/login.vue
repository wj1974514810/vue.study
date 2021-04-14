<template>
  <div>
    <myheader>
      <template #left>
        <span class="iconfont icon-user"></span>
      </template>
      <template #center>
        <span>用户信息</span>
      </template>
      <template #right>
        <span class="iconfont icon-sousuo"></span>
      </template>
    </myheader>
    <mybutton :type="type" @click="login">
      <p>
        <span class="iconfont icon-home"></span>
        登录
      </p>
    </mybutton>
  </div>
</template>

<script>
import mybutton from "./mybutton.vue";
import myheader from "./myheader.vue";
export default {
  data() {
    return {
      text: "登录",
      type: "login",
    };
  },
  components: { mybutton, myheader },
  methods: {
    login() {
      console.log("注册成功");
      this.text = "退出";
      this.type = "success";
    },
  },
};
</script>

<style>
</style>