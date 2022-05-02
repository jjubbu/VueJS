<template>
  <section class="todo-card">
    <h3>{{ props.item.title }}</h3>
    <p>{{ props.item.comment }}</p>
    <button-element>edit</button-element>
    <button-element>remove</button-element>
  </section>
</template>
<script>
import ButtonElement from "./ButtonElement.vue";
export default {
  components: { ButtonElement },
  name: "TodoCard",
};
</script>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  item: Object,
});
</script>

<style lang="sass"></style>
