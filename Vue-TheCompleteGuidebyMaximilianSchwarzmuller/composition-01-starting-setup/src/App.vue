<template>
  <div>
    <section class="container">
      <h2>{{ user.name }}</h2>
      <h3>{{ user.age }}</h3>
      <h4>{{ count }}</h4>
      <button @click="count++">Increment</button>
      <button @click="changeAge('Piyush')">Change Age</button>
      <p v-if="user.name === 'Piyush' && !isAgeAltered">
        If have only {{ countdown }} seconds to change Piyush age...!
      </p>
    </section>
    <section class="container">
      <h2>{{ fullName }}</h2>
      <!-- <input type="text" placeholder="First Name" @input="inputFirstName" />
      <input type="text" placeholder="Last Name" @input="inputLastName" /> -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </section>
  </div>
</template>

<script setup>
import { ref, isRef, isReactive, computed } from 'vue';

const count = ref(0);
const countdown = ref(5);
const newAge = 40;
const isAgeAltered = ref(false);
const firstName = ref('');
const lastName = ref('');

const user = ref({
  name: 'Piyush',
  age: 59,
});

const timeoutId = setTimeout(() => {
  user.value = {
    name: 'Ravina',
    age: 39,
  };

  setTimeout(() => {
    user.value.name = 'Prabhas';
    user.value.age = 5;
  }, 5000);
}, 5000);

// Start the countdown timer
const intervalId = setInterval(() => {
  if (countdown.value > 0) {
    countdown.value--;
  } else {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  }
}, 1000); // Update timer every second

console.log({
  isUserRef: isRef(user),
  isUserReactive: isReactive(user),
  isUserValueRef: isRef(user.value),
  isUserValueReactive: isReactive(user.value),
  isUserNameRef: isRef(user.value.name),
  isUserNameReactive: isReactive(user.value.name),
});

function changeAge(userName) {
  if (user.value.name === userName) {
    user.value.age = newAge;
    isAgeAltered.value = true;
  }
}

// function inputFirstName(event) {
//   firstName.value = event.target.value;
// }

// function inputLastName(event) {
//   lastName.value = event.target.value;
// }

const fullName = computed(function () {
  return firstName.value + ' ' + lastName.value;
});
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
