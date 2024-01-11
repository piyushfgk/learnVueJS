<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addToCounter(10)">Add 10</button>
    <counter-button></counter-button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import CounterButton from './components/CounterButton.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    CounterButton,
  },
  methods: {
    addToCounter(incrementBy) {
      this.$store.commit('increase', { value: incrementBy });
    },
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
