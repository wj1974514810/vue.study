<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
//单文件组件相当于一个封装的组件模块，后期是供使用者，引入使用的，所以它需要暴露当前的组件实例
//在es6中，单文件组件的暴露要求使用 export default{} 这里的{}就是当前的组件实例
//default 暴露的是默认实例，一个文件中只能一个默认实例
//虽然暴露的是{}，但是它是一个包含着结构功能和样式的整体，结构分离并不代表功能分离
export default {
  data() {
    return {
      msg: "hellow",
    };
  },
};
</script>

<style lang="less" scoped>
//lang:指定样式的语言，可以指定预处理器
//scoped:设置样式为局部样式
p {
  color: skyblue;
  font-size: 32px;
}
</style>