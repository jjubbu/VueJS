const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    valueFunction() {
      if (!this.name) {
        console.log("hello");
        return "";
      }
      return "hello " + this.name;
    },
  },

  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
});

app.mount("#events");
