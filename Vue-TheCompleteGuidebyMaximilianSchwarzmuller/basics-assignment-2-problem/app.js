const app = Vue.createApp({
  data() {
    return {
      output: "",
      controlledOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("You just clicked a button!");
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    setControlledOutput(event) {
      this.controlledOutput = event.target.value;
    },
  },
});

app.mount("#assignment");
