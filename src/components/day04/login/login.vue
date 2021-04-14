<template>
  <div>
    <mybutton :text="text" :type="type" @click="login"></mybutton>
  </div>
</template>

<script>
import mybutton from "./mybutton.vue";
export default {
  data() {
    return {
      text: "登录",
      type: "login",
    };
  },
  components: { mybutton },
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