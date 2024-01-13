<template>
  <h3>{{ counter }} <span>Another counter</span></h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normaliseCounter;
    },
  },
};
</script>

<style scoped>
span{
  color: blueviolet;
  font-size: 0.7em;
}
</style>