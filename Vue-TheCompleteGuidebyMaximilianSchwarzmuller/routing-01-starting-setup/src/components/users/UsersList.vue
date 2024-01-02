<template>
  <button @click="goToPage">Go to Teams</button>
  <button @click="saveChanges">Save Changes</button>
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
  data() {
    return {
      formSaved: false,
    }
  },
  methods: {
    goToPage() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.formSaved = true;
    }
  },
  beforeRouteEnter (to, from, next) {
    console.error("Before route enter UsersList component");
    console.log({to: to, from: from});
    next();
  },
  unmounted() {
    console.log("Unmounted");
  },
  beforeRouteLeave (to, from, next) {
    if(this.formSaved === true) {
      next();
    } else {
      const userConfirm = confirm("Changes have been saved yet! Are you sure want to leave?");

      console.log("Before Users List Component Leave");
      console.log({to:to,from:from});

      next(userConfirm);
    }
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