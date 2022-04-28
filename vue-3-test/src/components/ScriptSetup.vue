<script>
export default {
  name: "ScriptSetup",
};
</script>

<script setup>
import { ref, reactive } from "@vue/reactivity";

const hello1 = "hello";
const hello2 = ref("hello");
const hello3 = reactive({ hi: "hello" });
</script>

<template>
  <section>
    <div>{{ hello1 }}</div>
    <div>{{ hello2 }}</div>
    <div>{{ hello3.hi }}</div>
  </section>
</template>
