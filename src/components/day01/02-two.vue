<template>
  <div>
    <h1>{{ info }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "明天更新",
    };
  },
};
</script>

<style lang="less" scoped>
p {
  color: yellow;
  font-size: 32px;
}
</style>