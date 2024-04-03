<template>
  <div class="flex flex-col h-screen justify-between">
    <header class="h-10 bg-red-500 flex justify-between items-center p-2">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold py-2 hover:bg-gray-200"
          >Piyush</NuxtLink
        >
      </div>
      <NuxtLayout :name="headerLayout"></NuxtLayout>
    </header>

    <div class="mb-auto p-2 mt-10">
      <NuxtPage></NuxtPage>
    </div>

    <footer class="p-2 h-10 bg-blue-500">
      <NuxtLayout :name="footerLayout"></NuxtLayout>
    </footer>
  </div>
</template>

<script setup>
const headerLayout = "header";
const footerLayout = "footer";
</script>
