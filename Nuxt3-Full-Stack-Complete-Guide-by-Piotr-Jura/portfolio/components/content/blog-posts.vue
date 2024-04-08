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
  // Check if valid ISO 8601 format (example: 2024-04-02T13:04:05.000Z)
  const iso8601Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
  if (!iso8601Regex.test(dateTimeString)) {
    throw new Error(
      "Invalid datetime string format. Must be YYYY-MM-DDTHH:mm:ss.sssZ"
    );
  }

  // Extract date and time parts
  const datePart = dateTimeString.substring(0, 10);
  const timePart = dateTimeString.slice(11, 16);

  // Split date part
  const [year, month, day] = datePart.split("-");

  // Convert month to three-letter string
  const monthNames = [
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
  ];
  const monthString = monthNames[parseInt(month) - 1];

  // Return the formatted string
  return `${day} ${monthString} ${year} ${timePart} Hrs.`;
}
</script>
