<template>
  <button @click="incrementCounter">Add+</button>
  <p>Another counter button</p>
</template>

<script>
export default {
  methods: {
    incrementCounter() {
      this.$store.dispatch('increment');
    },
  },
};
</script>

<style scoped>
button{
  background: yellowgreen;
  margin-left: 2em;
}

p{
  display: inline;
  margin-left: 10px;
}
</style>