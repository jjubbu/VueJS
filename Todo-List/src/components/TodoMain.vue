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
  computed: {
    getCardList() {
      return this.$store.state.todoList;
    },
  },
};
</script>
<style scoped></style>
