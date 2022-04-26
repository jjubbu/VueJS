<template>
  <section class="todo-card">
    <h3>{{ item.title }}</h3>
    <p>{{ item.comment }}</p>
    <button>edit</button>
    <button>delete</button>
  </section>
</template>
<script>
export default {
  name: "TodoCard",
  props: {
    item: Object,
  },
};
</script>
<style lang="sass"></style>
