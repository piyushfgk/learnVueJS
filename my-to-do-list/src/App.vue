<template>
  <the-header>
    <search-task></search-task>
  </the-header>
  <section class="add-task">
    <div class="container">
      <add-task></add-task>
    </div>
  </section>
  <section class="list-task">
    <div class="container-fluid">
      <div class="page-header">
        <h1><small>List tasks</small></h1>
      </div>
    </div>
    <div class="container">
      <task-list></task-list>
    </div>
  </section>
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
.page-header{
  border-bottom: 2px solid #265a88;
}
</style>