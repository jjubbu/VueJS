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
  <section class="hello">
    <div class="hi">{{ hello1 }}</div>
    <div class="hi">{{ hello2 }}</div>
    <div class="hi">{{ hello3.hi }}</div>
    <span class="hey">hey</span>
    <h3 class="good">good</h3>
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.hello {
  .hi {
    background: pink;
  }
  .hey {
    color: pink;
  }
  .good {
    color: pink;
  }
  :slotted(div) {
    background: purple;
  }
  :slotted(p) {
    background: purple;
  }
}
</style>
