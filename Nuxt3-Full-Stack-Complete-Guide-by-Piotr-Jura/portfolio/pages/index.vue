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
  ],
});
</script>
