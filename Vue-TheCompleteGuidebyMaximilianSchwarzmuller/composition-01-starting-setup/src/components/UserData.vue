<template>
  <div>
    <h2>{{ fullName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

// const props = defineProps(['firstName', 'lastName']);
const props = defineProps({
  firstName: String,
  lastName: String,
});

const fullName = computed(function () {
  return props.firstName + ' ' + props.lastName;
});
</script>
