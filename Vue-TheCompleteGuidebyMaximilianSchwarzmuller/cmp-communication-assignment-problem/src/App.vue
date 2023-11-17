<template>
    <div>
        <active-user :userName="user.name" :userAge="user.age"></active-user>
        <user-data @set-data="setData"></user-data>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '',
                age: 0,
            }
        }
    },
    methods: {
        setData(name, age) {
            this.user.name = name
            this.user.age = +age
        }
    },
}
</script>

<style>
    html {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        text-align: center;
    }
    section {
        display: block;
        padding: 2rem;
        border: 2px solid gray;
        border-radius: 5px;
        box-shadow: inset;
        margin-bottom: 2rem;
    }
    input {
        padding: 5px 10px;
        margin-left: 0.5rem;
    }
    button {
        margin-left: 1rem;
        color: white;
        background: brown;
        border: 1px solid rgb(157, 22, 22);
        border-radius: 5px;
        padding: 5px 10px;
    }
    button:hover {
        background: rgb(193, 49, 49);
    }
</style>