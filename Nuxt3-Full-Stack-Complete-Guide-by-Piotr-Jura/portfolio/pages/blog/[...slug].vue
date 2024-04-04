<template>
  <article class="prose dark:prose-invert">
    <ContentDoc></ContentDoc>
  </article>
</template>

<script setup>
const route = useRoute();
console.log(route.params.slug);
</script>
