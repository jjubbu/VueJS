<template>
  <section class="todo-card">
    <h3>{{ props.item.title }}</h3>
    <p>{{ props.item.comment }}</p>
    <button-element>edit</button-element>
    <button-element @click="removeItem">remove</button-element>
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
import { useStore } from "vuex";
const props = defineProps({
  item: Object,
});

const store = useStore();

const removeItem = () => {
  store.commit("removeItem", props.item.id);
};
</script>

<style lang="sass"></style>
