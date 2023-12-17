<template>
  <div>
    <the-header>
      <search-task @filtered-tasks="onFilteredTasks"></search-task>
    </the-header>
    <div class="container" v-if="searchTerm !== ''">
      <p class="text-danger text-right"><em>You searched for: <strong>{{ searchTerm }}</strong></em></p>
    </div>
    <section class="add-task">
      <div class="container">
        <add-task></add-task>
      </div>
    </section>
    <task-list :tasks="filteredTasks"></task-list>
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

  },
  data() {
    return {
      filteredTasks: [],
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
      searchTerm: ''
    }
  },
  mounted() {
    this.filteredTasks = this.storedTasks;
  },
  methods: {
    onFilteredTasks(searchTerm) {
      this.searchTerm = searchTerm;

      if(searchTerm === '') {
        this.filteredTasks = this.storedTasks;
      } else {
        this.filteredTasks = this.storedTasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
      }
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
