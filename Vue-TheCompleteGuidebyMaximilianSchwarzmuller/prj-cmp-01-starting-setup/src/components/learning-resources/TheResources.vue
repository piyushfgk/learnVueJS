<template>
  <div>
    <base-card>
      <base-button @click="setSelectedTab('stored-resources')"
        >Stored Resources</base-button
      >
      <base-button @click="selectedTab('add-resource')"
        >Add Resource</base-button
      >
    </base-card>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  provide() {
    return {
        resources: this.storedResources
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
