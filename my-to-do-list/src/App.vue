<template>
  <the-header>
    <search-task></search-task>
  </the-header>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import SearchTask from './components/SearchTask.vue'

export default {
  components: {TheHeader, SearchTask}
}
</script>