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
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const getCardList = computed(() => store.state.todoList);
</script>
<style scoped></style>
