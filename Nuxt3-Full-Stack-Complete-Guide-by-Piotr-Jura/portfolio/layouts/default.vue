<template>
  <div class="container mx-auto max-w-4xl">
    <div class="flex flex-col h-screen justify-between">
      <header class="h-10 flex justify-between items-center p-2">
        <div class="flex items-center space-x-8">
          <div>
            <NuxtLink
              to="/"
              class="text-xl font-semibold py-2 hover:bg-gray-200 dark:hover:bg-gray-800"
              >Piyush</NuxtLink
            >
          </div>
          <NuxtLayout :name="headerLayout"></NuxtLayout>
        </div>
        <ClientOnly>
          <ColorModeSelector></ColorModeSelector>
        </ClientOnly>
      </header>

      <div class="mb-auto p-2 mt-10">
        <NuxtPage></NuxtPage>
      </div>

      <footer class="p-2 h-10">
        <NuxtLayout :name="footerLayout"></NuxtLayout>
      </footer>
    </div>
  </div>
</template>

<script setup>
const headerLayout = "header";
const footerLayout = "footer";
</script>

<style>
body {
  font-family: Roboto, Arial, Helvetica, sans-serif;
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
