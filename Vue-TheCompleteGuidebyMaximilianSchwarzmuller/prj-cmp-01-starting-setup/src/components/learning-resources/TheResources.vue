<template>
  <div>
    <base-card>
      <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>

function getMaxIdPlusOne(resources) {
  // Use Array.reduce to find the maximum id
  const maxId = resources.reduce((max, resource) => {
    return resource.id > max ? resource.id : max;
  }, 0);

  // Return maxId + 1
  return maxId + 1;
}

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
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },
  provide() {
    return {
        resources: this.storedResources,
        addResource: this.addResource
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: getMaxIdPlusOne(this.storedResources),
        title: title,
        description: description,
        link: url
      }

      this.storedResources.unshift(newResource)
      this.selectedTab = 'stored-resources'
    }
  },
};
</script>
