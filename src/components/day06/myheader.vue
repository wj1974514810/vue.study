<template>
  <div class="myheader" :style="{ background: bgcolor, color: fontcolor }">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      {{ title }}
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //   背景颜色，文字颜色
    bgcolor: {
      type: String,
      default: "#ccc",
    },
    fontcolor: {
      type: String,
      default: "#fff",
    },
    // 默认标题
    title: {
      type: String,
      default: "myHeader",
    },
  },
};
</script>

<style lang="less" scoped>
.myheader {
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  > div:nth-of-type(2) {
    flex: 1;
    text-align: center;
  }
}
</style>