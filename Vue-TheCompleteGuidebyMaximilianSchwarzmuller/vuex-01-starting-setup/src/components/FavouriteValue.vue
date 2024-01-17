<template>
  <h3>{{ normaliseCounter }} <span>Another counter</span></h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.normaliseCounter;
    // },
    ...mapGetters('numbers',['normaliseCounter'])
  },
};
</script>

<style scoped>
span{
  color: blueviolet;
  font-size: 0.7em;
}
</style>