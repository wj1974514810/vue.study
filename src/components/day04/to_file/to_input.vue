<template>
  <form>
    <div class="form-row align-items-center">
      <div class="col-auto">
        <label class="sr-only" for="inlineFormInputGroup"></label>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">任务</div>
          </div>
          <input
            type="text"
            class="form-control myinput"
            id="inlineFormInputGroup"
            placeholder="请填写任务信息"
            v-model.trim="newTask"
          />
        </div>
      </div>
      <div class="col-auto">
        <button
          type="submit"
          class="btn btn-primary mb-2"
          @click.prevent="addTask"
        >
          添加新任务
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.length === 0) {
        return;
      }
      this.$emit("getNewTask", this.newTask);
      this.newTask = "";
    },
  },
};
</script>

<style lang="less" scoped>
.myinput {
  width: 400px;
}
</style>