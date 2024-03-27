<template>
  <h2>{{ counter }}</h2>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const counter = computed(() => store.getters.counter);
</script>
