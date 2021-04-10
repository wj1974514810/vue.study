<template>
  <div>
    <h1>插值表达式</h1>
    <p>{{ info }}</p>
    <p>{{ "DNF" + info }}</p>
    <p>{{ version.substring(0, 1).toUpperCase() + version.substring(1) }}</p>
    <p>{{ women >= 18 ? "妇女" : "少女" }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "明天更新",
      version: "a.b.c",
      women: 18,
    };
  },
};
</script>

<style lang="less" scoped>
p {
  color: red;
  font-size: 32px;
}
</style>