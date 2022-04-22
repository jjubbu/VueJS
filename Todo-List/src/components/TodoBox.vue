<script setup>
import { ref } from "@vue/reactivity";
import TodoCard from "./TodoCard.vue";
import TodoInputBox from "./TodoInputBox.vue";
import TodoCardButton from "./elements/TodoCardButton.vue";

let id = 0;
const todoData = ref([
    {
        id: id++,
        title: "make todo list project",
        comment: "with Vue.js and Vuex.",
    },
    { id: id++, title: "study somthing else", comment: "maybe node.js." },
    { id: id++, title: "eat dinner", comment: "with mom" },
]);
</script>
<template>
    <section class="todo-box">
        <TodoCard
            v-for="todoItem in todoData"
            :key="todoItem.id"
            :data="todoItem"
        />
        <TodoInputBox />
    </section>
</template>
<style scoped>
.todo-box {
    max-width: 360px;
    background: lightblue;
}
</style>
