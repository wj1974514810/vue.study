<template>
  <div>
    <table border="1" width="600">
      <thead>
        <slot name="theadheade"></slot>
      </thead>
      <tbody>
        <tr v-for="(value, index) in tasklist" :key="index">
          <slot name="theadbody" :data="value" :index="index"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasklist: [
        { id: 1, task: "周一早晨九点开会", level: "紧急", state: false },
        { id: 2, task: "周一晚上八点半聚餐", level: "普通", state: false },
        { id: 3, task: "准备周二上午演讲稿", level: "紧急", state: true },
      ],
    };
  },
};
</script>

<style>
</style>