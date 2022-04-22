<script setup>
import { ref, reactive } from "vue";

const message = ref("hello");
const count = reactive({ count: 0 });

const titleClass = ref("title");
const commentClass = ref("comment");

const changeMessage = () => {
    message.value = message.value == "hello" ? "안녕하세요" : "hello";
};

const addCount = () => {
    count.count++;
    changeMessage();
};
const minusCount = () => {
    count.count--;
    changeMessage();
};
</script>
<template>
    <div>
        <h1 :class="titleClass" class="hello">{{ message }}</h1>
        <p :id="commentClass">{{ count.count }}</p>
        <button v-on:click="addCount">plus count</button>
        <button v-on:click="minusCount">minus count</button>
    </div>
</template>

<style scoped>
div {
    background: pink;
}
</style>
