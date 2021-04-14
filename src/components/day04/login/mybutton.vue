<template>
  <div
    class="login"
    :class="{ success: type == 'success', danger: type == 'danger' }"
    @click="handerClick"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
  },
  methods: {
    handerClick(e) {
      console.log(e);
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 90%;
  height: 50px;
  background-color: #ccc;
  color: #fff;
  font-size: 20px;
  line-height: 50px;
  border-radius: 25px;
  text-align: center;
}
.success {
  background-color: green;
}
.danger {
  background-color: red;
}
</style>