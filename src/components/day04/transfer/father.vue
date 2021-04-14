<template>
  <div class="father">
    <p>这是父组件</p>
    <input type="text" v-model.number="money" />
    <p>给{{ money }}钱</p>
    <p>儿子的女朋友：{{ mysongrname }}</p>
    <!-- 使用注册的组件 -->
    <!-- v-bind动态绑定 向子组件传值  父传子（数据传递）-->
    <!-- 如果子组件发出的事件，和内置事件同名，那么在父组件中优先监听子组件所发出的同名事件 -->
    <son :mymoney="money" @getName="getname"></son>
    <sister></sister>
  </div>
</template>

<script>
//引入子组件和兄弟组件
import son from "./son.vue";
import sister from "./sister.vue";
export default {
  //注册组件
  components: {
    son,
    sister,
  },
  data() {
    return {
      money: 0,
      mysongrname: "",
    };
  },
  methods: {
    // 监听子组件所发出的事件的处理函数，默认回有一个参数，这个参数就是子组件所传递的数据
    getname(data) {
      this.mysongrname = data;
    },
  },
};
</script>

<style lang="less">
.father {
  background-color: skyblue;
  padding: 5px 0;
}
</style>>
