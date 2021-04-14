<template>
  <div>
    <my_slot>
      <template #theadheade>
        <th>任务名称</th>
        <th>紧急程度</th>
        <th>是否完成</th>
      </template>
      <template #theadbody="scope">
        <td>
          {{ scope.data.task }}
        </td>
        <td>
          {{ scope.data.level }}
        </td>
        <td>
          {{ scope.data.state ? "已完成" : "未完成" }}
        </td>
      </template>
    </my_slot>
  </div>
</template>

<script>
import my_slot from "./my_slot.vue";
export default {
  components: {
    my_slot,
  },
};
</script>

<style>
</style>