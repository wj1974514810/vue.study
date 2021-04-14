<template>
  <div>
    用户名:<input type="text" v-model="user.username" /> 密码:<input
      type="text"
      v-model="user.password"
    />
    <button @click="post">post</button>
  </div>
</template>

<script>
// 引入封装的axios方法   解构
import { login } from "../../../utils/api/user";
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
    post() {
      // axios
      //   .post("/login", this.user)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      login(this.user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>