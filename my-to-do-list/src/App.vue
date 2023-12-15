<template>
  <div>
    <the-header>
      <search-task></search-task>
    </the-header>
    <section class="add-task">
      <div class="container">
        <add-task></add-task>
      </div>
    </section>
    <section class="list-task">
      <div class="container">
        <div class="page-header">
          <h3 class="text-danger">
            <span
              class="glyphicon glyphicon-hourglass"
              aria-hidden="true"
            ></span>
            Pending
          </h3>
        </div>
        <task-list taskType="pending"></task-list>
      </div>
      <div class="container">
        <div class="page-header">
          <h3 class="text-primary">
            <span class="glyphicon glyphicon-check" aria-hidden="true"></span>
            Completed
          </h3>
        </div>
        <task-list taskType="completed"></task-list>
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
