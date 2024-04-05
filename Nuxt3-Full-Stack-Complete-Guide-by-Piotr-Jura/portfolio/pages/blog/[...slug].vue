<template>
  <article
    class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentDoc></ContentDoc>
  </article>
</template>

<script setup>
const route = useRoute();
console.log(route.params.slug);
</script>
