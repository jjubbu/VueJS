<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue";
import ChangeValue from "./components/ChangeValue.vue";
import LifeCicle from "./components/LifeCicle.vue";
import Inputs from "./components/Inputs.vue";
import Maping from "./components/Maping.vue";
import GiveProps from "./components/GiveProps.vue";
import GetProps from "./components/GetProps.vue";
import Slot from "./components/Slot.vue";
import WatchID from "./components/WatchID.vue";

//* 자식에게 값을 내려준다
const property = ref("this is props");

//* 자식으로부터 값을 받아온다
const childData = ref("");
</script>

<template>
    <GiveProps :comment="property" />
    <GetProps @res="(data) => (childData = data)" />
    <p>{{ childData }}</p>
    <Slot> this is slot!! </Slot>
    <LifeCicle />
    <ChangeValue />
    <Maping />
    <Inputs />
    <WatchID />
</template>

<style>
.finish {
    color: greenyellow;
    background: black;
    font-weight: 900;
}
label {
    display: inline-block;
}
.title {
    color: blue;
}

.hello {
    background: pink;
}

#comment {
    color: hotpink;
}
</style>
