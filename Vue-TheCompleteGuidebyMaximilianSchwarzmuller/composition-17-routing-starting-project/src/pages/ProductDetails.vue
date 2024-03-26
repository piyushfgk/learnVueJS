<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">Product 2</router-link>
    <br />
    <a href="/products/p2">P2</a>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { inject, computed } from 'vue';

const route = useRoute();

const products = inject('products');
const productId = route.params.pid;

const selectedProduct = computed(() =>
  products.value.find((product) => product.id === productId)
);

const title = computed(() => selectedProduct.value.title);
const price = computed(() => selectedProduct.value.price);
const description = computed(() => selectedProduct.value.description);
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
