<template>
  <div class="son">
    <p>这是子组件</p>
    <p>收到钱{{ mymoney }}</p>
    <!-- <p>女朋友:{{ mygrname }}</p> -->
    <input type="text" v-model="mygrname" />
    <button @click="tellname">发送名字</button>
    <button @click="tellnamesister">发送名字</button>
  </div>
</template>

<script>
// 引入事件总线,用于两个组件之间的数据传递
import bus from "../../../utils/eventBus";
export default {
  //定义props
  //   props: ["mymoney"],
  props: {
    mymoney: {
      //规定所传入的值的数据类型
      type: [Number, String],
      //必填项,必须传
      required: true,
      //没有required 就写默认值 有就不写，两个属性只能有一个
      //   default: 1000,

      //限制(这是验证函数)
      validator(value) {
        return value < 0 || value >= 10000 ? false : true;
      },
    },
  },
  data() {
    return {
      mygrname: "",
    };
  },
  methods: {
    // this.$emit函数发出一个事件，并传递数据
    tellname() {
      this.$emit("getName", this.mygrname);
    },
    tellnamesister() {
      bus.$emit("getNameS", this.mygrname);
    },
  },
};
</script>

<style lang="less">
.son {
  background-color: red;
}
</style>
