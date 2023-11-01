const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter() {
      const that = this;

      setTimeout(() => {
        that.counter = 0;
        console.log("Watcher: " + that.counter);
      }, 5000);
    },
  },
  computed: {
    message() {
      if (this.counter < 37) return "Not there yet";
      if (this.counter == 37) return this.counter;
      if (this.counter > 37) return "Too much!";
    },
  },
  methods: {
    increment(value) {
      this.counter += value;
      console.log(this.counter);
    },
  },
});

app.mount("#assignment");
