<template>
  <section>
    <button-element @click="props.closeCard">close</button-element>
    <input-element title="title"></input-element>
    <input-element title="comment"></input-element>
    <button-element>save</button-element>
  </section>
</template>
<script>
import ButtonElement from "./ButtonElement.vue";
import InputElement from "./InputElement.vue";
export default {
  components: { InputElement, ButtonElement },
  name: "AddCard",
};
</script>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  closeCard: Function,
});
</script>
