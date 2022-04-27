<template>
  <label>
    <h3>{{ title }}</h3>
    <input />
  </label>
</template>
<script>
export default {
  name: "InputElement",
  props: {
    title: String,
  },
};
</script>
