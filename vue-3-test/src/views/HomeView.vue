<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <section class="box">
      <setup-function></setup-function>
      <script-setup>
        <div>this is slot</div>
        <p>slots!</p>
      </script-setup>
    </section>
  </div>
</template>

<script>
import ScriptSetup from "../components/ScriptSetup.vue";
import SetupFunction from "../components/SetupFunction.vue";
export default {
  name: "HomeView",
  components: { ScriptSetup, SetupFunction },
};
</script>

<style scoped lang="scss">
.box {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
:global(.hi) {
  color: blue;
}
</style>
