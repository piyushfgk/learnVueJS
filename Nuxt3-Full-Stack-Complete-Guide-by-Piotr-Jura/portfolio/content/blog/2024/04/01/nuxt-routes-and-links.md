---
published_at: 2024-04-01 04:04:05
title: "Pages and Routing"
description: "Create pages directory for automatic routes."
head:
  meta:
    - name: "keywords"
      content: "nuxt, vue, content"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Piyush"
    - name: "copyright"
      content: "@ 2022 Techlit India"
    - name: "og:title"
      content: "What are pages and routes in Nuxt JS"
---

### Pages and Routing

- Create `pages` directory for automatic **routes**. Each file for directory will the router with default `index.vue` or the page name it self.
- Use `<NuxtLink to="/">Home</NuxtLink>` to create a _client side route link_.
- Use `<NuxtPage></NuxtPage>`to show page content.
- Use square brackets and name of parameter like `[id].vue` as a page name for parameters than can be passed on a URL/route

  ```jsx
  <script setup>
    const route = useRoute(); const postId = route.params.**id**;
  </script>
  ```
