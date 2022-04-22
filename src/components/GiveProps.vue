<script setup>
// * 부모로부터 props 를 가져온다
const props = defineProps({ comment: String });
</script>

<template>
    {{ comment }}
</template>
