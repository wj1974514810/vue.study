<template>
  <div class="to_list">
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="value in list"
        :key="value.id"
      >
        <div class="form-check">
          <!-- 1、v-model操作复选框的checked属性值 -->
          <!-- 2、获取复选框的checked值，赋值给变量 -->
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            :id="value.id"
            v-model="value.state"
          />
          <label
            class="form-check-label"
            :for="value.id"
            :class="{ finished: value.state }"
          >
            {{ value.task }}
          </label>
        </div>
        <span
          class="badge badge-pill"
          :class="{
            'badge-warning': !value.state,
            'badge-success': value.state,
          }"
          >{{ value.state ? "完成" : "未完成" }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="less" scoped>
.to_list {
  width: 400px;
  .finished {
    font-style: italic;
    text-decoration: line-through;
    color: #aaa;
  }
}
</style>