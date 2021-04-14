<template>
  <div>
    <input type="text" v-model="key" />
    <button @click="get">get无参</button>
    <button @click="gets">get有参</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      key: "",
    };
  },
  methods: {
    get() {
      axios
        .get("http://157.122.54.189:9083/post")
        // then成功的回调
        .then((res) => {
          console.log(res);
        })
        // catch错误
        .catch((err) => {
          console.log(err);
        });
    },
    // 带参第一种
    gets() {
      axios
        .get("http://157.122.54.189:9083/post_search?keyword=" + this.key)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 带参第二种
    // gets() {
    //   axios
    //     .get("http://157.122.54.189:9083/post_search", {
    //       params: {
    //         keyword: "关",
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>

<style>
</style>