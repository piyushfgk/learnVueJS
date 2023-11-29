<template>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
  components: { LearningResource },
  data() {
    return {
      storedResources: [
        {
          id: 1,
          title: 'Official Vue JS',
          description: 'Learn Vue JS',
          link: 'https://vuejs.org',
        },
        {
          id: 2,
          title: 'Google Search',
          description: 'Search google for your studies',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>
