<template>
  <div>
    <the-header>
      <search-task @filtered-tasks="onFilteredTasks"></search-task>
    </the-header>
    <section class="add-task">
      <div class="container">
        <add-task></add-task>
      </div>
    </section>
    <section class="list-task">
      <div class="container" v-if="hasPending">
        <div class="page-header">
          <h3 class="text-danger">
            <span
              class="glyphicon glyphicon-hourglass"
              aria-hidden="true"
            ></span>
            Pending
          </h3>
        </div>
        <task-list taskType="pending" :tasks="storedTasks"></task-list>
      </div>
      <div class="container" v-if="hasCompleted">
        <div class="page-header">
          <h3 class="text-primary">
            <span class="glyphicon glyphicon-check" aria-hidden="true"></span>
            Completed
          </h3>
        </div>
        <task-list taskType="completed" :tasks="storedTasks"></task-list>
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import SearchTask from "./components/SearchTask.vue";
import AddTask from "./components/AddTask.vue";
import TaskList from "./components/TaskList.vue";

export default {
  components: { TheHeader, SearchTask, AddTask, TaskList },
  computed: {
    hasCompleted() {
      return this.storedTasks.some(task => task.isCompleted);
    },
    hasPending() {
      return this.storedTasks.some(task => !task.isCompleted);
    }
  },
  data() {
    return {
      storedTasks: [
        {
          id: 1,
          title: "Take groceries from market",
          isCompleted: false,
          createdAt: "2023-04-11 11:50:23",
        },
        {
          id: 2,
          title: "Study books for self",
          isCompleted: true,
          createdAt: "2023-04-11 11:51:23",
        },
        {
          id: 3,
          title: "Do meditation in the morning",
          isCompleted: false,
          createdAt: "2023-04-11 11:55:23",
        },
      ],
    }
  },
  methods: {
    onFilteredTasks(searchTerm) {
      if(searchTerm != '') this.storedTasks = this.storedTasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      ); else this.storedTasks = [
        {
          id: 1,
          title: "Take groceries from market",
          isCompleted: false,
          createdAt: "2023-04-11 11:50:23",
        },
        {
          id: 2,
          title: "Study books for self",
          isCompleted: true,
          createdAt: "2023-04-11 11:51:23",
        },
        {
          id: 3,
          title: "Do meditation in the morning",
          isCompleted: false,
          createdAt: "2023-04-11 11:55:23",
        },
      ];
    }
  },
};
</script>

<style scoped>
section.add-task {
  margin-top: 3rem;
}
.page-header {
  border-bottom: 2px solid #265a88;
}
</style>
