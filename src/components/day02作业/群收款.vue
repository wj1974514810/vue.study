<template>
  <div id="app">
    <h2>总金额</h2>

    <input type="number" v-model.number="pay" v-myfocus />
    <br />
    <span>今天吃饭用了 {{ pay }}元</span>

    <h2>用餐参与人</h2>

    <input type="text" v-model="name" ref="nm" />
    <button @click="add">添加</button>

    <ul v-if="list.length != 0">
      <li v-for="(value, index) in list" :key="value.id">
        第{{ index + 1 }}位: {{ value.name }},
        <span>需要支付 {{ (pay / list.length).toFixed(2) }} 元</span>
        <button @click.prevent="del(value.id)">X</button>
      </li>
    </ul>
    <p v-else>吃饭人数不能为空</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      name: "",
      pay: "",
      id: 1,
    };
  },
  methods: {
    add() {
      let obj = {
        id: this.id,
        name: this.name,
      };
      this.list.push(obj);
      this.id++;
      this.$refs.nm.focus();
      this.name = "";
    },
    del(id) {
      this.list = this.list.filter((v) => v.id != id);
      this.$refs.nm.focus();
    },
  },
  directives: {
    myfocus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style>
</style>