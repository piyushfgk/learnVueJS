<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      <li><NuxtLink to="/blog/s123">Blog Page s123</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  background: lightcoral;
}

ul > li {
  padding: 1rem 2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1rem;
}
</style>
