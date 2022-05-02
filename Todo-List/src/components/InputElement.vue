<template>
  <label>
    <h3>{{ props.title }}</h3>
    <input :value="value" @input="emits('update:value', $event.target.value)" />
  </label>
</template>
<script>
export default {
  name: "InputElement",
};
</script>
<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: String,
  value: String,
});

const emits = defineEmits(["update:value"]);
</script>
