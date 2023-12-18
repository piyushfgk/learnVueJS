<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="col-sm-10">
            <div :class="feedbackInputTitle">
              <label v-if="invalidInput" class="control-label" for="exampleInputName2">{{ errorTitle }}</label>
              <input
                type="text"
                class="form-control input-lg"
                id="exampleInputName2"
                placeholder="Enter task detail"
                ref="taskInput"
              />
            </div>
          </div>
          <div class="col-sm-2">
            <button type="submit" class="btn btn-primary btn-lg">
              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["addTask"],
  data() {
    return {
      invalidInput: false,
      errorTitle: "",
    };
  },
  computed: {
    feedbackInputTitle() {
      return this.invalidInput === true
        ? "form-group has-error has-feedback"
        : "form-group";
    },
  },
  methods: {
    submitForm() {
      const taskInput = this.$refs.taskInput.value;

      if (this.formValidation(taskInput) === false) return;

      this.addTask(taskInput);
      this.$refs.taskInput.value = "";
    },
    formValidation(title) {
      const validLength = 2;

      if (title.length <= validLength) {
        this.invalidInput = true;
        this.errorTitle = `Task should be greater than ${validLength} characters`;
      }

      return !this.invalidInput;
    },
  },
};
</script>

<style scoped>
.panel {
  background: rgba(62, 62, 62, 0.608);
}

form {
  margin-top: 1.8rem;
}
</style>
