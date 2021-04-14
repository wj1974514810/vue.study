<template>
  <div class="list">
    <mytable :data="list">
      <template #thead>
        <th scope="col">#</th>
        <th scope="col">商品名称</th>
        <th scope="col">价格</th>
        <th scope="col">标签</th>
        <th scope="col">操作</th>
      </template>
      <template #tbody="{ item: value, index }">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ value.goods_name }}</td>
        <td>{{ "￥" + value.goods_price }}</td>
        <td>
          <input
            type="text"
            style="width: 60px"
            v-if="value.inputVisible"
            v-myfocus
            @blur="handler(value, $event)"
            @keyup.enter="handler(value, $event)"
            @keyup.esc="hadlerclear"
          />
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click="value.inputVisible = !value.inputVisible"
          >
            +tag
          </button>
          <span
            class="badge badge-warning"
            style="margin-left: 5px"
            v-for="v in value.tags"
            :key="v"
            >{{ v }}</span
          >
        </td>
        <td>
          <button type="button" class="btn btn-danger" @click="del(value.id)">
            删除
          </button>
        </td>
      </template>
    </mytable>
  </div>
</template>

<script>
import { getGoodsList } from "../../api/tabs";
import mytable from "./mytable.vue";
import { myfocus } from "../../utils/mydirectives.js";
export default {
  components: {
    mytable,
  },
  data() {
    return {
      list: [],
    };
  },
  // 注册指令
  directives: {
    myfocus,
  },
  // 钩子函数
  mounted() {
    getGoodsList()
      .then((res) => {
        console.log(res);
        this.list = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    // 添加
    handler(value, e) {
      value.inputVisible = false;
      let v = e.target.value;
      if (v.trim().length == 0 || value.tags.indexOf(v) !== -1) {
        return false;
      }
      value.tags.unshift(e.target.value);
    },
    // 删除
    del(id) {
      return (this.list = this.list.filter((v) => v.id !== id));
    },
    // 用esc 清空所输的内容
    hadlerclear(e) {
      e.target.value = "";
    },
  },
};
</script>
<style lang="less" scoped>
</style>