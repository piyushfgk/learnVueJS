<template>
  <ul class="flex space-x-4">
    <li><NuxtLink to="/">Home</NuxtLink></li>
    <li><NuxtLink to="/about">About</NuxtLink></li>
    <li><NuxtLink to="/blog">Blog</NuxtLink></li>
    <li><NuxtLink to="/blog/projects">Projects</NuxtLink></li>
  </ul>
</template>

<style scoped>
ul > li {
  @apply p-1 hover:bg-gray-200;
}
</style>
