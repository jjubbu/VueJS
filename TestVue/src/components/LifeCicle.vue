<script setup>
import { ref, onMounted } from "vue";
//* life cicle
const mountedComment = ref(null);
onMounted(() => {
    mountedComment.value.textContent = "완료!";
});
</script>
<template>
    <p ref="mountedComment">로딩중</p>
</template>
