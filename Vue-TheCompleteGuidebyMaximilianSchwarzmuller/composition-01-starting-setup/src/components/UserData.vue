<template>
  <div>
    <h2>{{ fullName }}</h2>
    <h3>{{ user.age }}</h3>
  </div>
</template>

<script setup>
import { computed, defineProps, inject } from 'vue';

// const props = defineProps(['firstName', 'lastName']);
const props = defineProps({
  firstName: String,
  lastName: String,
});

const user = inject('userDetail');

const fullName = computed(function () {
  return props.firstName + ' ' + props.lastName;
});
</script>
