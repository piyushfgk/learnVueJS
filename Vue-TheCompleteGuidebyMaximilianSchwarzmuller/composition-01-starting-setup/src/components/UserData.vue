<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
export default {
  props: ['userName', 'age'],
};
</script>
