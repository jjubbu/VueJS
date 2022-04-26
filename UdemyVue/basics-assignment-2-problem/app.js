const app = Vue.createApp({
  data() {
    return {
      keydownOutput: "",
      enterOutput: "",
    };
  },
  methods: {
    alertMessage() {
      alert("this is alert");
    },
    keydownMessage(e) {
      this.keydownOutput = e.target.value;
    },
    enterMasseage(e) {
      //   e.key == "Enter" ? (this.enterOutput = e.target.value) : null;
      this.enterOutput = e.target.value;
    },
  },
});

app.mount("#assignment");
