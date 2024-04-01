<template>
  <div>
    <h3>New blog page post number {{ postId }}</h3>
  </div>
</template>

<script setup>
const route = useRoute();
const postId = route.params.id;
</script>
