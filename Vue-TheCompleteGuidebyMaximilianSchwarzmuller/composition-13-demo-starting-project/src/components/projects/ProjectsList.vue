<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import { defineProps, computed, watch, toRefs } from 'vue';
import ProjectItem from './ProjectItem.vue';
import useSearch from '../../hooks/search';

// Extracting props by using toRefs to make it reactive to finally use in watch, as watch only works on reactive
const props = defineProps(['user']);
const { user } = toRefs(props);

const projects = computed(() => {
  return user.value ? user.value.projects : [];
});

const [enteredSearchTerm, availableProjects, updateSearch] = useSearch(
  projects,
  'title'
);

const hasProjects = computed(() => {
  return user.value.projects && availableProjects.value.length > 0;
});

watch(user, () => {
  updateSearch('');
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
