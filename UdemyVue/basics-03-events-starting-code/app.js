const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            inputValue: "",
        };
    },
    methods: {
        addCount() {
            this.counter++;
        },
        removeCount() {
            this.counter--;
        },
        submitForm(e) {
            console.log(e);
            // * 이 후의 form의 submit에 디폴트로 포함된 자바스크립트 실행을 멈춤!
            // * e.preventDefault();
            // 원래는 새로고침되어서 콘솔로그가 바로 사라지지만 preventDefault를 넣어두면 새로고침되지 않아 콘솔로그가 남는다.
            // 버튼을 또 눌러도 form submit default js만 실행이 안되는것!
        },
    },
});

app.mount("#events");
