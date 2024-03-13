<template>
  <div>
    <h2>{{ fullName }}</h2>
    <h3>{{ user.age }}</h3>
  </div>
</template>

<script setup>
import {
  computed,
  defineProps,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  onUpdated,
} from 'vue';

// const props = defineProps(['firstName', 'lastName']);
const props = defineProps({
  firstName: String,
  lastName: String,
});

const user = inject('userDetail');

onBeforeMount(() => {
  console.log('1. onBeforeMount');
});

onMounted(() => {
  console.log('2. onMounted');
});

onBeforeUpdate(() => {
  console.log('3. onBeforeUpdate');
});

onBeforeUnmount(() => {
  console.log('4. onBeforeUnmount');
});

onUnmounted(() => {
  console.log('5. onUnmounted');
});

onUpdated(() => {
  console.log('6. onUpdated');
});

const fullName = computed(function () {
  return props.firstName + ' ' + props.lastName;
});
</script>
