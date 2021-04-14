<template>
  <div>
    <button @click="name = 'first'">第一个组件</button>
    <button @click="name = 'two'">第二个组件</button>
    <button @click="name = 'three'">第三个组件</button>
    <keep-alive>
      <component :is="name"></component>
    </keep-alive>
  </div>
</template>

<script>
import first from "./first.vue";
import two from "./two.vue";
import three from "./three.vue";
export default {
  components: {
    first: first,
    two: two,
    three: three,
  },
  data() {
    return {
      name: "first",
    };
  },
};
</script>

<style>
</style>