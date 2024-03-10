<template>
  <div>
    <h2>{{ fullName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
export default {
  props: ['firstName', 'lastName', 'age'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
};
</script>
