<template>
  <div>
    <!-- v-mycolor  全局指令 -->
    1: <input type="text" v-myfocus v-mycolor="'red'" /><br />
    2: <input type="text" v-mycolor="'blue'" />
  </div>
</template>

<script>
// 引入其他模块
// import "../../utils/mydirectives";

//引入封装的指令
import { mycolor, myfocus } from "../../utils/mydirectives";

export default {
  directives: {
    //注册指令
    // myfocus:myfocus 都一样 可以简写为下面
    myfocus,
    mycolor,
  },
};
</script>

<style>
</style>