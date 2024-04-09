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
    post.published_at = convertDateTime(post.published_at);

    result.push(post);
  }

  return result;
});

// convert datetime string to day, month, year, hour and minute format where month will be in 3 character calendar string. The date must be in format dd MM yyyy hh:mm
function convertDateTime(dateTimeString) {
  // Create a Date object from the string
  const date = new Date(dateTimeString);

  // Get day, month (0-indexed, so add 1), year, hour, and minute
  const day = date.getDate().toString().padStart(2, "0");
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");

  // Return the formatted string
  return `${day} ${month} ${year} ${hour}:${minute}`;
}
</script>
