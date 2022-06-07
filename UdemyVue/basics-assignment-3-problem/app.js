const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    result() {
      if (this.count < 37) {
        return "Not there yet";
      } else if (this.count == 37) {
        return "37";
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    addResult(val) {
      this.count += val;
      console.log(this.count);
    },
  },
  watch: {
    result() {
      setTimeout(() => {
        this.count = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
