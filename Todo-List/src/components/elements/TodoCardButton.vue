<script setup></script>
<template>
    <button class="todo-card-button"><slot /></button>
</template>
<style scoped>
.todo-card-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    border: none;
    cursor: pointer;
}
</style>
