<template>
  <button @click="clickEvent"><slot /></button>
</template>
<script>
export default {
  name: "ButtonElement",
  props: {
    clickEvent: Function,
  },
};
</script>
