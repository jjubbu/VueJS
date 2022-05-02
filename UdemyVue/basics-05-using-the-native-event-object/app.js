const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      // fulllname: "",
    };
  },
  watch: {
    //name 부분에는 watch가 지켜보는 data 가 들어간다. 이름 똑같아야함.
    //value 는 watch가 지켜보고 있는 데이터의 마지막 값
    // name(value) {
    //   if (value === "") {
    //     this.fulllname = "";
    //   } else {
    //     this.fulllname = value + " " + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if (value === "") {
    //     this.fulllname = "";
    //   } else {
    //     this.fulllname = this.name + " " + value;
    //   }
    // },
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    // computed 함수는 함수가 아닌 '데이터'로 여겨지기에 그에 맞는 함수명을 지어야함.
    // method 로 사용하면 뷰가 다른 method 를 실행할때마다 같이 실행해서 ㄴㄴ!
    fullname() {
      console.log("hello");
      if (this.name == "" || this.lastname == "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
  },

  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
      this.lastname = "";
    },
  },
});

app.mount("#events");
