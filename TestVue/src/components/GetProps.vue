<script setup>
// * 부모에게 data를 넘겨준다
const emit = defineEmits(["res"]);
emit("res", "from child component");
</script>
<template></template>
