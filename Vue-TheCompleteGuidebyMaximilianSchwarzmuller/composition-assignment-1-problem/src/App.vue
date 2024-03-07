<template>
  <div>
    <h2>My Course Goals</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <h3 v-if="showGoals">
      <ul v-for="goal in courseGoals" :key="goal">
        <li>{{ goal }}</li>
      </ul>
    </h3>
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="toggleGoals">Toggle Goals</button>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <!-- => Ref Object -->
    <!-- => Reactive Object -->
    <!-- Task 4: Also solve the assignment with the Options API -->
  </div>
</template>

<!-- Method new Vue 3 compostion API -->
<!-- <script setup>

import { ref } from 'vue';

const courseGoals = [
  'Frontend Development with Javascript Framework',
  'PHP Rest APIs',
];
const showGoals = ref(true);

function toggleGoals() {
  showGoals.value = !showGoals.value;
}
</script> -->

<!-- Method Options API -->
<script>
export default {
  data() {
    return {
      courseGoals: [
        'Frontend Development with Javascript Framework',
        'PHP Rest APIs',
      ],
      isShowGoals: true,
    };
  },
  computed: {
    showGoals() {
      return this.isShowGoals;
    },
  },
  methods: {
    toggleGoals() {
      this.isShowGoals = !this.isShowGoals;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}

h3 {
  width: 80%;
  font-size: 1em;
  font-weight: 300;
  margin: 0 auto;
}

ul {
  list-style: none;
  padding-inline-start: 0;
}

ul > li {
  font-size: 0.8em;
}
</style>
