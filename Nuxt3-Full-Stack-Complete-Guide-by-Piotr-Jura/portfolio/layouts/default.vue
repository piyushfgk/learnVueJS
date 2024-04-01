<template>
  <div>
    <header>
      <NuxtLayout :name="headerLayout"></NuxtLayout>
    </header>

    <div class="container-fluid">
      <NuxtPage></NuxtPage>
    </div>

    <footer>
      <NuxtLayout :name="footerLayout"></NuxtLayout>
    </footer>
  </div>
</template>

<script setup>
const headerLayout = "header";
const footerLayout = "footer";
</script>
