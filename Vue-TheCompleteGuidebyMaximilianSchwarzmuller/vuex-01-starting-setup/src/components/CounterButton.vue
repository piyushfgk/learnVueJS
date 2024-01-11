<template>
  <button @click="incrementCounter">Add+</button>
</template>

<script>
export default {
  methods: {
    incrementCounter() {
      this.$store.commit('increment');
    },
  },
};
</script>
