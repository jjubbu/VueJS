<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <todo-main></todo-main>
</template>

<script>
import TodoMain from "./components/TodoMain.vue";
export default {
  name: "App",
  components: { TodoMain },
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
}
</style>
