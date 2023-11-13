const app = Vue.createApp({
    data() {
        return {
            taskList: [],
            taskInput: '',
            toggleShowHide: true,
            toggleMessage: 'Show / Hide List'
        }
    },
    methods: {
        addTask() {
            this.taskList.push(this.taskInput);
        },
        showHide() {
            this.toggleMessage = this.toggleShowHide ? 'Show List' : 'Hide List';
            this.toggleShowHide = !this.toggleShowHide;
        }
    },
});

app.mount("#assignment");