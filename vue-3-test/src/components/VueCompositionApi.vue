// * script setup 은 composition api 의...일부?
<script setup>
import { ref } from "vue";
const reactivity = ref("hello");
</script>

<template>
  <div>{{ reactivity }}</div>
</template>
