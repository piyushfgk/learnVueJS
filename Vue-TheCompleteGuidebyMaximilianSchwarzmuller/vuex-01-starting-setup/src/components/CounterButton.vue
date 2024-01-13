<template>
  <button @click="addOne">Add 1*2</button>
  <button @click="increase({ value: 11 })">Add 11*2</button>
  <p>Another counter button</p>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // incrementCounter() {
    //   this.$store.dispatch('increment');
    // },
    ...mapActions({
      addOne: 'increment',
      increase: 'increase',
    }),
  },
};
</script>

<style scoped>
button {
  background: yellowgreen;
  margin-left: 2em;
}

p {
  display: inline;
  margin-left: 10px;
}
</style>
