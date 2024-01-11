<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addToCounter">Add</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter
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