<template>
  <div>
    <!-- 顶部 -->
    <myheader bgcolor="skyblue">
      <template #left>返回</template>
    </myheader>
    <!-- 主体内容 -->
    <component :is="comName"></component>
    <!-- 底部 -->
    <myfooter :tabs="tablist" @changeCom="changeCom"> </myfooter>
  </div>
</template>

<script>
import myheader from "./myheader";
import myfooter from "./myfooter";
import mylist from "./mylist";
import mysearch from "./mysearch";
import myinfo from "./myinfo";
export default {
  components: {
    myheader,
    myfooter,
    mylist,
    mysearch,
    myinfo,
  },
  data() {
    return {
      comName: "mylist",
      // 底部栏
      tablist: [
        {
          icon: "icon-shangpinliebiao",
          text: "商品列表",
          name: "mylist",
        },
        {
          icon: "icon-sousuo",
          text: "商品搜索",
          name: "mysearch",
        },
        {
          icon: "icon-user",
          text: "我的信息",
          name: "myinfo",
        },
      ],
    };
  },
  methods: {
    changeCom(data) {
      this.comName = data;
    },
  },
};
</script>

<style lang="less" scoped>
</style>