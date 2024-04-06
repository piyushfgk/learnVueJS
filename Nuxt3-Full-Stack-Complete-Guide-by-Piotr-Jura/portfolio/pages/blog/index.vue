<template>
  <section>
    <ul>
      <li
        v-for="post in posts"
        :key="post._path"
        class="flex align-items-center gap-6 shadow-sm shadow-gray-500 mb-4 p-2 rounded-md"
      >
        <div class="basis-1/4">
          <img :src="post.image" alt="No image found" />
        </div>
        <div class="basis-3/4">
          <NuxtLink :to="post._path" class="text-lg">{{ post.title }}</NuxtLink>
          <p class="text-xs mt-1">{{ post.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData(() =>
  queryContent("blog").only(["title", "description", "_path", "image"]).find()
);
</script>
