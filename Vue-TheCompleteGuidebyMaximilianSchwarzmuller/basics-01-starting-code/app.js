const app = Vue.createApp({
  data() {
    return {
      main: {
        courseGoal: "Finish the course!",
        courseHeader: "Your way...",
        color: "text-red",
      },
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const random = Math.random();
      return random > 0.5 ? "Learn Vue" : "Master Vue";
    },
  },
});

app.mount("#user-goal");
