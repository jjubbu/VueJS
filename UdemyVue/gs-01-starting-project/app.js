Vue.createApp({
    // 반드시 data 라고 해야한다.
    data() {
        return {
            goalList: [],
            inputValue: "",
        };
    },
    methods: {
        addGoal() {
            this.goalList.push(this.inputValue);
        },
    },
}).mount("#app");
