<template>
  <section class="todo-card">
    <h3>{{ item.title }}</h3>
    <p>{{ item.comment }}</p>
    <button-element>edit</button-element>
    <button-element>remove</button-element>
  </section>
</template>
<script>
import ButtonElement from "./ButtonElement.vue";
export default {
  components: { ButtonElement },
  name: "TodoCard",
  props: {
    item: Object,
  },
};
</script>
<style lang="sass"></style>
