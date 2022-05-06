<template>
  <section>
    <button-element @click="props.closeCard">close</button-element>
    <input-element
      type="text"
      title="title"
      v-model:value="title"
    ></input-element>
    <input-element
      type="text"
      title="comment"
      v-model:value="comment"
    ></input-element>
    <button-element @click="saveItem">save</button-element>
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
import { defineProps, ref } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  closeCard: Function,
});

const store = useStore();
const title = ref("");
const comment = ref("");

const saveItem = () => {
  if (!title.value) {
    alert("제목을 적어주세요");
    return;
  } else {
    store.commit("addItem", {
      title: title.value,
      comment: comment.value,
      done: false,
    });
    title.value = "";
    comment.value = "";
  }
};
</script>
