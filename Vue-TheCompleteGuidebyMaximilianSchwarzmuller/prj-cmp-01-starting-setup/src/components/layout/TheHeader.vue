<template>
  <div>
    <header>
        <h1>{{ title }}</h1>
    </header>
    <the-resources></the-resources>
  </div>
</template>


<script>
import TheResources from '../learning-resources/TheResources.vue';

export default {
    components: { TheResources },
    props: [ 'title' ]
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>