const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      controlNamed: ''
    };
  },
  methods: {
    submitform() {
      alert("Form submitted");
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setname(event, secondName) {
      this.name = event.target.value + ' ' + secondName;
    },
    setControlledName() {
      this.controlNamed = this.name;
    }
  },
});

app.mount('#events');
