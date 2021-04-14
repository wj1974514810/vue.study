<template>
  <div class="to_mange">
    <to_input @getNewTask="addTask"></to_input>
    <to_list :list="getlists"></to_list>
    <to_button @filterList="fileList"></to_button>
  </div>
</template>

<script>
import to_input from "./to_input.vue";
import to_list from "./to_list.vue";
import to_button from "./to_button.vue";
export default {
  components: {
    to_input,
    to_list,
    to_button,
  },
  data() {
    return {
      tasklist: [
        { id: 1, task: "周一早晨九点开会", state: false },
        { id: 2, task: "周一晚上八点半聚餐", state: false },
        { id: 3, task: "准备周二上午演讲稿", state: true },
      ],
      nextid: 4,
      current: "全部",
    };
  },
  methods: {
    addTask(newTask) {
      this.tasklist.push({ id: this.id, task: newTask, state: false });
      this.id++;
    },
    fileList(data) {
      this.current = data;
    },
  },
  computed: {
    //用计算属性
    // 计算属性必须定义在 computed 节点中
    // 计算属性是一个 function
    // 计算属性必须有返回值
    // 计算属性不能被当作方法调用，它应该当成属性来调用
    // 计算属性需要人为调用，否则不会自动有效果  所以写在上面的动态绑定中
    getlists() {
      if (this.current === "已完成") {
        return this.tasklist.filter((v) => v.state);
      } else if (this.current === "未完成") {
        return this.tasklist.filter((v) => !v.state);
      } else {
        return this.tasklist;
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>