<template>
  <div>
    <p ref="p" myf>p元素</p>
    <span ref="span">span元素</span>
    <button @click="getDom">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    getDom() {
      // 只要元素上面使用了ref 就能通过this.$refs拿到这个元素
      console.log(this.$refs);
    },
  },
};
</script>

<style>
</style>