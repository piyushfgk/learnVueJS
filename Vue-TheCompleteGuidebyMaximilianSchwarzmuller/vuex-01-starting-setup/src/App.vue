<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="addToCounter">Add</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    addToCounter() {
      this.$store.state.counter++;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>