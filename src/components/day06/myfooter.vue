<template>
  <div class="tabscontainer">
    <div
      class="tabitem"
      :class="{ activeStyle: index == current }"
      v-for="(value, index) in tabs"
      :key="value.text"
      @click="change(value.name, index)"
    >
      <span :class="['iconfont', value.icon]"></span>
      <span>{{ value.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
      validator(value) {
        return value.length < 2 || value.length > 5 ? false : true;
      },
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    change(name, index) {
      this.current = index;
      this.$emit("changeCom", name);
    },
  },
};
</script>

<style lang="less" scoped>
.tabscontainer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #efefef;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tabitem {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
  }
  // 激活项的样式
  .activeStyle {
    color: #1d7bff;
  }
}
</style>