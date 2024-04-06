<template>
  <section class="not-prose font-mono">
    <ul>
      <li
        v-for="post in posts"
        :key="post._path"
        class="flex items-center space-x-8 border-b border-gray-200 p-2 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <div class="basis-1/4">
          <img :src="post.image" alt="No image found" />
        </div>
        <div class="basis-3/4">
          <NuxtLink :to="post._path" class="text-lg">{{ post.title }}</NuxtLink>
          <p class="text-xs mt-1 text-gray-500 dark:text-gray-700">
            {{ post.published_at }}
          </p>
          <p class="text-xs mt-1">{{ post.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data } = await useAsyncData(() =>
  queryContent("blog")
    .where({ _path: { $ne: "/blog" } })
    .only(["published_at", "title", "description", "_path", "image"])
    .sort({ published_at: -1 })
    .find()
);

const posts = computed(() => {
  if (!data.value) return [];

  const result = [];

  for (const post of data.value) {
    const year = new Date(post.published_at).getFullYear();
    const month = new Date(post.published_at).getMonth();
    const day = new Date(post.published_at).getDate();
    const hour = new Date(post.published_at).getHours();
    const minute = new Date(post.published_at).getMinutes();

    post.published_at = `${day}-${month}-${year} ${hour}:${minute}`;

    result.push(post);
  }

  return result;
});
</script>
