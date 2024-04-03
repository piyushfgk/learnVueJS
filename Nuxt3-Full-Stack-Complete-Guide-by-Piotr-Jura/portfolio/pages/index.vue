<template>
  <div>
    <h2>Hello from the main page again!</h2>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Piyush::Blog",
  description: "This is my blog to keep yout hooked.",
  ogTitle: "PiyushBlog:OG",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "PiyushBlog::Twitter",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: Roboto, Arial, Helvetica, sans-serif;
}
</style>
