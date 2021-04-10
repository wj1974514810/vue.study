<template>
  <div>
    <h1>这是指令的使用</h1>

    <!-- v-for -->
    <!-- 遍历对象 不重要-->
    <!-- key必须是数据的id，索引不能作为key的值，id具有唯一性 -->
    <!-- <ul>
      <li v-for="(v, k, i) in obj" :key="v.id">{{ v + ":" + k + ":" + i }}</li>
    </ul> -->

    <!-- 遍历对象数组 非常重要 -->
    <!-- <table width="500" border="1">
      <tr>
        <th>*</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
      </tr>

      key必须是数据的id，索引不能作为key的值，id具有唯一性
      <tr v-for="(value, index) in userlist" :key="value.id">
        <td>{{ index + 1 }}</td>
        <td>{{ value.name }}</td>
        <td>{{ value.age }}</td>
        <td>{{ value.gender == 1 ? "男" : "女" }}</td>
      </tr>
    </table> -->

    <!-- 遍历数组 不重要 -->
    <!-- <ul>
      <li v-for="(value, index) in arr">{{ index }}</li>
    </ul> -->

    <!-- 指令是属性，插值是写在标签之间的 -->
    <!-- v-html可以解析html结构
    v-text会原样输出
    <p v-html="msg"></p>
    <p v-text="msg"></p> -->

    <!-- <p v-text="msg"></p> -->
    <!-- <p v-text="msg.toUpperCase()"></p> -->
    <!-- v-text实现完全替换，插值实现部分替换 -->
    <!-- 把1111完全替换 -->
    <!-- <p v-text="msg">11111</p> -->
    <!-- 插值把111后面替换掉，前面不动 -->
    <!-- <p>11111{{ msg }}</p> -->
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     msg: "abc",
  //   };
  // },
  //   data() {
  //     return {
  //       msg: "abc<br>a<hr>",
  //     };
  //   },
  // data() {
  //   return {
  //     arr: [1, 2, 3, 4, 5],
  //   };
  // },
  data() {
    return {
      userlist: [
        { id: 1, name: "aa", age: 20, gender: 1 },
        { id: 2, name: "bb", age: 21, gender: 0 },
        { id: 3, name: "cc", age: 22, gender: 1 },
      ],
    };
  },
  // data() {
  //   return {
  //     obj: {
  //       id: 1,
  //       name: "aa",
  //       age: 20,
  //       gender: "男",
  //     },
  //   };
  // },
};
</script>

<style>
table {
  border-spacing: 0;
  text-align: center;
}
</style>