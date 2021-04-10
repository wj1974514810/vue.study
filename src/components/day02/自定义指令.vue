<template>
  <div>
    1: <input type="text" v-myfocus v-mycolor="'red'" /><br />
    2: <input type="text" v-mycolor="'blue'" />
  </div>
</template>

<script>
export default {
  directives: {
    myfocus: {
      inserted(el) {
        el.focus();
      },
    },
    mycolor: {
      inserted(el, binding) {
        el.style.color = binding.value;
      },
    },
  },
};
</script>

<style>
</style>