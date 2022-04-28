<template>
  <section>
    <button-element>close</button-element>
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
