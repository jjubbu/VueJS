<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <todo-main></todo-main>
  <button-element @click="showCard">Add card</button-element>
  <add-card v-if="addCard"></add-card>
</template>

<script>
import AddCard from "./components/AddCard.vue";
import ButtonElement from "./components/ButtonElement.vue";
import TodoMain from "./components/TodoMain.vue";
export default {
  name: "App",
  components: { TodoMain, AddCard, ButtonElement },
};
</script>
<script setup>
import { ref } from "vue";
const addCard = ref(false);
const showCard = () => {
  addCard.value = true;
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  section {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.257);
    max-width: 480px;
    margin: 20px auto;
    padding: 20px;
  }
}
</style>
<style scoped>
section {
}
</style>
