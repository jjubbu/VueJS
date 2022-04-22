<script setup>
import { ref, watch } from "vue";
//* watch
const dataID = ref(1);
const jsonData = ref(null);

// 데이터 가져오기
async function fetchData() {
    // 이전에 들어간 데이터를 비워준다
    jsonData.value = null;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${dataID.value}`
    );
    jsonData.value = await response.json();
    console.log(jsonData);
}
fetchData();

// dataID가 변하면 fetchData를 실행한다
watch(dataID, fetchData);
</script>

<template>
    <!-- watch -->
    <div>
        <button @click="dataID++">next id</button>
        <p v-if="!jsonData">loading</p>
        <p v-else>
            {{ jsonData }}
        </p>
    </div>
</template>
