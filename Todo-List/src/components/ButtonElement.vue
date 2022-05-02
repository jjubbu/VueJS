<template>
  <button @click="props.clickEvent"><slot /></button>
</template>
<script>
export default {
  name: "ButtonElement",
};
</script>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  clickEvent: Function,
});
</script>
