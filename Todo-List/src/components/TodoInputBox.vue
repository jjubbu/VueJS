<script setup>
import TodoCardButton from "./elements/TodoCardButton.vue";
import TodoInput from "./elements/TodoInput.vue";
import TodoCardTitle from "./elements/TodoCardTitle.vue";
</script>
<template>
    <section class="todo-input-box">
        <label>
            <TodoCardTitle>title</TodoCardTitle>
            <TodoInput />
        </label>
        <label>
            <TodoCardTitle>comment</TodoCardTitle>
            <TodoInput />
        </label>
        <TodoCardButton class="todo-item-add-button"
            >Add Todo Card</TodoCardButton
        >
    </section>
</template>
<style scoped>
.todo-input-box {
    background: lightpink;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding: 30px 0;
}
.todo-item-add-button {
    max-width: 300px;
    width: 100%;
    background: deeppink;
    padding: 10px 0;
    border-radius: 5px;
    color: white;
}
</style>
