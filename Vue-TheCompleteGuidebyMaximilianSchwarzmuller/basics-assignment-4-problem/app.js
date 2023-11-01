const app = Vue.createApp({
    data() {
        return {
            classStyleInput: '',
            togglePragraph: false,
        }
    },
    computed: {
        styleMe() {
            return this.classStyleInput;
        },
    },
    methods: {
        showHide() {

            this.togglePragraph = !this.togglePragraph;

        }
    },
});

app.mount("#assignment");