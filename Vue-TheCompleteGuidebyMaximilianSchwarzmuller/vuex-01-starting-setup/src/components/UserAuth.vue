<template>
    <button v-if="!userIsAuthenticated" @click="setLogin">Login</button>
    <button @click="setLogout" v-else>Logout</button>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters(['userIsAuthenticated'])
    },
    methods: {
        ...mapActions(['setLogin', 'setLogout'])
    },
}
</script>