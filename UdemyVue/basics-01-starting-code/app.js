const app = Vue.createApp({
    // data는 함수다!
    data() {
        //* 늘 객체로 반환한다.
        return {
            goal: "Finish~",
            obj: { name: "soena" },
            link: "naver.com",
            h1: "<h2>html~</h2>",
        };
    },
    methods: {
        click() {
            alert(this.goal);
        },
    },
});

app.mount("#user-goal");
