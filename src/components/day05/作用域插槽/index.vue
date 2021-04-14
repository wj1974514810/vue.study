<template>
  <div>
    <to_slot>
      <template v-slot:tablehead>
        <th>任务名称</th>
        <th>紧急程度</th>
        <th>是否完成</th>
      </template>

      <template v-slot:tablebody="scope">
        <td>{{ scope.data.task }}</td>
        <td>{{ scope.data.level }}</td>
        <td>{{ scope.data.state ? "已完成" : "未完成" }}</td>
      </template>
    </to_slot>
  </div>
</template>

<script>
import to_slot from "./to_slot.vue";
export default {
  components: {
    to_slot,
  },
};
</script>

<style>
</style>
