<template>
  <ul>
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </ul>
  <input type="text" ref="inputUser" />
  <button @click="addUser">Add User</button>
</template>

<script>
export default {
  data() {
    return {
      users: ['Piyush', 'Rahul', 'Niraj', 'Jomon', 'Rakesh'],
    };
  },
  methods: {
    addUser() {
        this.users.unshift(this.$refs.inputUser.value);

        this.$refs.inputUser.value = '';
    },
    removeUser(user) {
        this.users = this.users.filter(u => u !== user);
    },
  },
};
</script>

<style scoped>
ul{
    margin:  1rem;
    list-style: none;
    padding-inline-start: 0;
}

li{
    padding: 1rem;
    margin: 0;
    border: 1px solid #eee;
    text-align: center;
    cursor: pointer;
}
</style>