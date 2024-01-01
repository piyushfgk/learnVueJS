<template>
  <button @click="goToPage">Go to Teams</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    goToPage() {
      this.$router.push('/teams');
    }
  },
  beforeRouteEnter (to, from, next) {
    console.error("Before route enter UsersList component");
    console.log({to: to, from: from});
    next();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>