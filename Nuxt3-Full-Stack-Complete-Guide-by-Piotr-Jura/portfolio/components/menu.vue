<template>
  <ul class="flex flex-col md:flex-row md:space-x-4">
    <li><NuxtLink to="/">Home</NuxtLink></li>
    <li><NuxtLink to="/about">About</NuxtLink></li>
    <li><NuxtLink to="/blog">Blog</NuxtLink></li>
    <li><NuxtLink to="/projects">Projects</NuxtLink></li>
  </ul>
</template>

<style scoped>
ul > li {
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800 text-2xl md:text-base;
}
</style>
