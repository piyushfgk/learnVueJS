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
import { ref, defineProps, computed, watch, toRefs } from 'vue';
import ProjectItem from './ProjectItem.vue';

const props = defineProps(['user']);

const activeSearchTerm = ref('');
const availableProjects = computed(() => {
  if (activeSearchTerm.value) {
    return props.user.projects.filter((prj) =>
      prj.title.includes(activeSearchTerm.value)
    );
  }
  return props.user.projects;
});

const enteredSearchTerm = ref('');
function updateSearch(val) {
  enteredSearchTerm.value = val;
}

const hasProjects = computed(() => {
  return props.user.projects && availableProjects.value.length > 0;
});

watch(enteredSearchTerm, (newValue) => {
  setTimeout(() => {
    if (newValue === enteredSearchTerm.value) {
      activeSearchTerm.value = newValue;
    }
  }, 300);
});

// Extracting props by using toRefs to make it reactive to finally use in watch, as watch only works on reactive
const { user } = toRefs(props);

watch(user, () => {
  enteredSearchTerm.value = '';
});
</script>
<!--
<script>
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  data() {
    return {
      enteredSearchTerm: '',
      activeSearchTerm: '',
    };
  },
  computed: {
    hasProjects() {
      return this.user.projects && this.availableProjects.length > 0;
    },
    availableProjects() {
      if (this.activeSearchTerm) {
        return this.user.projects.filter((prj) =>
          prj.title.includes(this.activeSearchTerm)
        );
      }
      return this.user.projects;
    },
  },
  methods: {
    updateSearch(val) {
      this.enteredSearchTerm = val;
    },
  },
  watch: {
    enteredSearchTerm(val) {
      setTimeout(() => {
        if (val === this.enteredSearchTerm) {
          this.activeSearchTerm = val;
        }
      }, 300);
    },
    user() {
      this.enteredSearchTerm = '';
    },
  },
};
</script>
-->

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
