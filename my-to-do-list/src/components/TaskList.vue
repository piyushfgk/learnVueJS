<template>
  <section class="list-task">
    <div class="container pending-tasks--list" v-if="hasPending">
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
            :addedOn="task.createdAt"
            @deleteTask="deleteTaskId"
            @setTaskStatus="setTaskStatusId"
          ></task-item>
        </div>
      </div>
    </div>
    <div class="container completed-tasks--list" v-if="hasCompleted">
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
            :addedOn="task.createdAt"
            @deleteTask="deleteTaskId"
            @setTaskStatus="setTaskStatusId"
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
  inject: ['deleteTask', 'setTaskStatus'],
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
  methods: {
    deleteTaskId(id) {
      this.deleteTask(id);
    },
    setTaskStatusId(id, status) {
      this.setTaskStatus(id, status);
    }
  }
};
</script>

<style scoped>
.completed-tasks--list .panel-body{
  background: #79e57980;
}

.pending-tasks--list .panel-body{
  background: rgba(238, 5, 5, 0.1);
}
</style>