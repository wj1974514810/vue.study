<template>
  <div>
    <h1>v-model</h1>
    用户名：<input type="text" v-model.trim="user.username" id="" />
    密码：<input type="text" v-model.trim="user.password" @keyup.enter='login' id="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      console.log(this.user);
    },
  },
};
</script>

<style>
</style>