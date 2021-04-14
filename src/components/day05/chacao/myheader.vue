<template>
  <div class="header">
    <div>
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  //   props: {
  //     bgcolor: {
  //       type: String,
  //       default: "#ccc",
  //     },
  //   },
};
</script>

<style lang="less" scoped>
.header {
  background-color: red;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  padding: 0 10px;
  margin-bottom: 20px;
}
.center {
  flex: 1;
  text-align: center;
}
</style>