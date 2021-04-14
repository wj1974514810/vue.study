<template>
  <div class="mytable">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <slot name="thead"></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in data" :key="value.id">
          <slot name="tbody" :item="value" :index="index"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>