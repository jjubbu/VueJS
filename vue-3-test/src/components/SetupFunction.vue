<script>
import { ref, reactive } from "vue";
export default {
  name: "SetupFunction",
  setup() {
    const hello1 = "hello";
    const hello2 = ref("hello");
    const hello3 = reactive({ hi: "hello" });
    return {
      hello1,
      hello2,
      hello3,
    };
  },
};
</script>

<template>
  <section>
    <div>{{ hello1 }}</div>
    <div>{{ hello2 }}</div>
    <div>{{ hello3.hi }}</div>
  </section>
</template>
