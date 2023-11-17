<template>
    <section>
        <form @submit.prevent="submitData">
            <input type="text" id="name" v-model="userName" placeholder="Enter Username">
            <input type="number" id="age" v-model="userAge" placeholder="Enter age">
            <button>Submit</button>
        </form>
    </section>
</template>

<script>
export default {
    emits: ['set-data'],
    data() {
        return {
            userName: '',
            userAge: ''
        }
    },
    methods: {
        submitData() {
            this.$emit("set-data", this.userName, this.userAge)

            //Clear input fields after submit form
            this.userName = '';
            this.userAge = '';
        }
    },
}
</script>