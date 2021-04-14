<template>
  <div>
    <h1>头部</h1>
    <a href="#/first">first</a>
    <a href="#/two">two</a>
    <a href="#/three">three</a>
    <component :is="changename"></component>
  </div>
</template>

<script>
import first from "./first.vue";
import two from "./two.vue";
import three from "./three.vue";
export default {
  components: { first, two, three },
  data() {
    return {
      changename: "first",
    };
  },
  created() {
    window.onhashchange = () => {
      console.log(location);
      let hash = location.hash;
      if (hash == "#/first") {
        this.changename = "first";
      } else if (hash == "#/two") {
        this.changename = "two";
      } else {
        this.changename = "three";
      }
    };
  },
};
</script>

<style>
</style>