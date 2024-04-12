<template>
  <div class="container mx-auto max-w-2xl">
    <NuxtLayout></NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 50%;
  filter: grayscale(1);
}
</style>
`
