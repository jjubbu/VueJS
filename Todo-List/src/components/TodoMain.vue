<template>
  <todo-card
    v-for="todoItem in getCardList"
    :key="todoItem.id"
    :item="todoItem"
  ></todo-card>
</template>
<script>
import TodoCard from "./TodoCard.vue";

export default {
  name: "TodoMain",
  components: { TodoCard },
};
</script>
<script setup>
import { useStore } from "vuex";

const store = useStore();
const getCardList = store.state.todoList;
</script>
<style scoped></style>
