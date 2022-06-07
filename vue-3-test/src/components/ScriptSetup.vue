<script>
export default {
  name: "ScriptSetup",
};
</script>

<script setup>
import { ref, reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const hello1 = "hello";
const hello2 = ref("hello");
const hello3 = reactive({ hi: "hello" });

const heyBackground = ref("hotpink");
const changeColor = computed(() => {
  heyBackground.value = "blue";
});
</script>

<template>
  <section class="hello">
    <div class="hi">{{ hello1 }}</div>
    <div class="hi">{{ hello2 }}</div>
    <div class="hi">{{ hello3.hi }}</div>
    <h3 class="good">good</h3>
    <slot></slot>

    <span class="hey">hey</span>
    <button @click="changeColor">hey color change to blue</button>
  </section>
</template>

<style scoped lang="scss">
.hello {
  .hi {
    background: pink;
  }
  .hey {
    color: pink;
    background: v-bind("heyBackground");
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
