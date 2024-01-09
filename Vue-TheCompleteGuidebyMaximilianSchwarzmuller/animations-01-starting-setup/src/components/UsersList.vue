<template>
  <transition-group tag="ul" name="users-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </transition-group>
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

.users-list-enter-from{
    opacity: 0;
    transform: translateX(-30px);
}

.users-list-enter-active{
    transition: all 0.5s ease-out;
}

.users-list-enter-to, .users-list-leave-from{
    opacity: 1;
    transform: translateX(0);
}

.users-list-leave-active{
    transition: all 0.5s ease-in;
}

.users-list-leave-to{
    opacity: 0;
    transform: translateX(30px);
}
</style>