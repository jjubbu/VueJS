const app = Vue.createApp({
    data() {
        return {
            name: "seona",
            age: 24,
            image: "https://placekitten.com/200/300",
        };
    },
    methods: {
        random() {
            const randomNum = Math.random();
            return randomNum;
        },
    },
});

app.mount("#assignment");
