<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <vue-composition-api></vue-composition-api>
  </div>
</template>

<script>
import VueCompositionApi from "../components/VueCompositionApi.vue";
export default {
  name: "HomeView",
  components: { VueCompositionApi },
};
</script>
