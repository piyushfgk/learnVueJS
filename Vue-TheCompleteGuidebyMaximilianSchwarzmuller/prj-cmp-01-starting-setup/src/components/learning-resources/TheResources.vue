<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
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
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
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
        link: url,
      };

      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    deleteResource(id) {
      // Find the index of the resource with the specified id
      const indexToDelete = this.storedResources.findIndex(
        (resource) => resource.id === id
      );

      // Check if the resource with the given id was found
      if (indexToDelete !== -1) {
        // Use splice to remove the item at the found index
        this.storedResources.splice(indexToDelete, 1);
      }
    },
  },
};
</script>
