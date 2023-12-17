<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <task-item
        v-for="task in filteredTasks"
        :key="task.id"
        :id="task.id"
        :title="task.title"
        :isCompleted="task.isCompleted"
      ></task-item>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  components: { TaskItem },
  props: ["taskType", 'tasks'],
  computed: {
    filteredTasks() {
      if (!this.taskType) return this.tasks;
      return this.tasks.filter((task) => {
        if (this.taskType === "pending") {
          return !task.isCompleted;
        } else if (this.taskType === "completed") {
          return task.isCompleted;
        }
        return false;
      });
    },
  },
};
</script>
