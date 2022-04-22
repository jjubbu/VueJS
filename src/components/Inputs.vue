<script setup>
import { ref } from "vue";

//* inputs
const inputValue = ref("");
const onInput = (e) => {
    inputValue.value = e.target.value;
};

const inputValueSimple = ref("");
const check = ref(false);
const checkNames = ref([]);
</script>

<template>
    <!-- inputs -->

    <div>
        <input :value="inputValue" @input="onInput" />
        <p>{{ inputValue }}</p>
    </div>
    <div>
        <input v-model="inputValueSimple" />
        <p>{{ inputValueSimple }}</p>
    </div>

    <!-- input 체크박스 -->
    <label>
        <input type="checkbox" v-model="check" />
        <p>{{ check ? "check" : "un checked" }}</p>
        <p v-if="!check">un checked</p>
        <p v-else>check</p>
    </label>

    <div>
        <h1>Checked names : {{ checkNames }}</h1>
        <label>
            <input type="checkbox" value="hello" v-model="checkNames" />
            <p>hello</p>
        </label>
        <label>
            <input type="checkbox" value="hi" v-model="checkNames" />
            <p>hi</p>
        </label>
        <label>
            <input type="checkbox" value="good" v-model="checkNames" />
            <p>good</p>
        </label>
    </div>
</template>
