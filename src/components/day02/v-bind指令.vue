<template>
  <div>
    用户名：<span>{{ user.name }}</span
    ><br />
    密码<span>{{ user.pwd }}</span
    ><br />
    <!-- :是v-bind的简写 -->
    <img :src="user.src" alt="" /><br />
    <a :href="'\edit?id=' + user.id">提交</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: 1,
        name: "aa",
        pwd: 123,
        src:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3228549874,2173006364&fm=26&gp=0.jpg",
      },
    };
  },
};
</script>

<style>
</style>