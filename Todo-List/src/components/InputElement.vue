<template>
  <label>
    <h3>{{ props.title }}</h3>
    <input />
  </label>
</template>
<script>
export default {
  name: "InputElement",
};
</script>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
});
</script>
