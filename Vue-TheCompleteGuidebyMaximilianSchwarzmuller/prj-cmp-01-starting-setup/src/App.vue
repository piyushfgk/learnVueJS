<template>
  <div>
    <the-header :title="title"></the-header>
    <storedResources :resources="storedResources"></storedResources>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import StoredResources from './components/learning-resources/StoredResources.vue';

export default {
  components: { TheHeader, StoredResources },
  data() {
    return {
      title: 'Remember Me',
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
