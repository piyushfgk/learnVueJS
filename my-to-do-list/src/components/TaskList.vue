<template>
  <section class="list-task">
    <div class="container" v-if="hasPending">
      <div class="page-header">
        <h3 class="text-danger">
          <span class="glyphicon glyphicon-hourglass" aria-hidden="true"></span>
          Pending
        </h3>
      </div>
      <div class="panel panel-default">
        <div class="panel-body">
          <task-item
            v-for="task in pendingTasks"
            :key="task.id"
            :id="task.id"
            :title="task.title"
            :isCompleted="task.isCompleted"
          ></task-item>
        </div>
      </div>
    </div>
    <div class="container" v-if="hasCompleted">
      <div class="page-header">
        <h3 class="text-primary">
          <span class="glyphicon glyphicon-check" aria-hidden="true"></span>
          Completed
        </h3>
      </div>
      <div class="panel panel-default">
        <div class="panel-body">
          <task-item
            v-for="task in completedTasks"
            :key="task.id"
            :id="task.id"
            :title="task.title"
            :isCompleted="task.isCompleted"
          ></task-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  components: { TaskItem },
  props: ["tasks"],
  computed: {
    pendingTasks() {
      return this.tasks.filter((task) => !task.isCompleted);
    },
    completedTasks() {
      return this.tasks.filter((task) => task.isCompleted);
    },
    hasCompleted() {
      return this.tasks.some((task) => task.isCompleted);
    },
    hasPending() {
      return this.tasks.some((task) => !task.isCompleted);
    },
  },
};
</script>
