<script setup>
import TodoCardTitle from "../elements/TodoCardTitle.vue";
import TodoCardComment from "../elements/TodoCardComment.vue";
import TodoCardButton from "../elements/TodoCardButton.vue";

const props = defineProps({ data: Object });
</script>
<template>
    <section class="todo-card">
        <div>
            <TodoCardTitle>{{ data.title }}</TodoCardTitle>
            <TodoCardComment>{{ data.comment }}</TodoCardComment>
        </div>
        <TodoCardButton class="removeButton">x</TodoCardButton>
    </section>
</template>
<style scoped>
.todo-card {
    display: grid;
    max-width: 300px;
    grid-template-columns: 1fr auto;
}

.removeButton {
    background: darkgray;
    color: black;
    width: 1.2em;
    height: 1.2em;
    font-size: 18px;
    border-radius: 100%;
}
</style>
