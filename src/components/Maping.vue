<script setup>
import { ref, computed } from "vue";
//* maping
const mapInputValue = ref("");

let id = 0;
const todoBox = ref([
    { id: id++, text: "one", done: false },
    { id: id++, text: "two", done: false },
    { id: id++, text: "three", done: false },
]);

const hideFinish = ref(false);

// 배열을 토글시켜준다!
const resultTodoBox = computed(() => {
    return hideFinish.value
        ? todoBox.value.filter((t) => !t.done)
        : todoBox.value;
});

const addWork = () => {
    if (!mapInputValue.value) {
        return;
    }
    // todoBos에 새로운 아이템을 추가한다.
    todoBox.value.push({ id: id++, text: mapInputValue.value });
    mapInputValue.value = "";
};

const removeWork = (item) => {
    // todoBox의 값을 새로 만든다. 선택된 아이템을 제외한 아이템들로 다시 만든 배열을 집어넣는다.
    todoBox.value = todoBox.value.filter((t) => t !== item);
};
</script>
<template>
    <!-- * .map?! -->
    <div>
        <input v-model="mapInputValue" />
        <button @click="addWork">add work</button>
        <ul>
            <li v-for="item in resultTodoBox" :key="item.id">
                <label>
                    <input type="checkbox" v-model="item.done" />
                    <!-- item.done 이 true 면 finish를 클래스 명으로 한다 -->
                    <p :class="{ finish: item.done }">{{ item.text }}</p>
                </label>
                <button @click="removeWork(item)">remove</button>
            </li>
        </ul>
        <!-- hideFinish 를 !hideFinish 로 바꾸어준다 -->
        <button @click="hideFinish = !hideFinish">
            {{ hideFinish ? "show all" : "hide finished" }}
        </button>
    </div>
</template>
