const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            togglePragraph: true,
            backgroundColor: ''
        }
    },
    computed: {
        setClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.togglePragraph,
                hidden: !this.togglePragraph,
            }
        }
    },
    methods: {
        setToggleParagraph() {
            this.togglePragraph = !this.togglePragraph;
        }
    },
})

app.mount("#assignment");