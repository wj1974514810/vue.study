<template>
  <div id="app">
    <h4>esc清空</h4>
    <div class="add">
      品牌名称:<input
        type="text"
        ref="bn"
        @keyup.esc="name = ''"
        v-model.trim="name"
      />
      添加日期:<input type="datetime-local" v-model.trim="date" />
      <!-- @keyup.enter="add" 指令on -->
      <input type="button" value="添加" @click.prevent="add()" />
    </div>
    <div class="slt">
      品牌名称:<input type="text" placeholder="请输入搜索条件" />
    </div>
    <div>
      <table class="tb">
        <tbody>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>操作</th>
          </tr>
          <tr v-for="(value, index) in info" :key="value.id">
            <td>{{ index + 1 }}</td>
            <td>{{ value.name }}</td>
            <td>{{ value.date.substring(0, 10) }}</td>
            <td>
              <!-- 给删除的a标签绑定删除事件 -->
              <a href="#" @click.prevent="del(value.id)">删除</a>
            </td>
          </tr>
          <!-- 添加tr结构，如果里面被删完了，提示用户下面信息 -->
          <!-- v-show也是一样的结构，只不过v-show是隐藏或显示 而v-if是销毁或创建 -->
          <tr v-if="info.length == 0">
            <td colspan="4">没有任何品牌数据，请先添加</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        { id: 1, name: "华为", date: "1987-01-01" },
        { id: 2, name: "腾讯", date: "1998-11-11" },
      ],
      name: "",
      date: "",
      id: 3,
    };
  },
  methods: {
    add() {
      let newobj = {
        id: this.id,
        name: this.name,
        date: this.date,
      };
      this.info.push(newobj);
      this.id++;
      this.nam = this.date = "";
    },
    del(id) {
      // filter 是抛弃传进来的id的那条数据，保留其他的数据
      this.info = this.info.filter((v) => v.id != id);
    },
  },
  // 钩子函数
  mounted() {
    this.$refs.bn.focus();
  },
};
</script>

 <style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.slt {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>