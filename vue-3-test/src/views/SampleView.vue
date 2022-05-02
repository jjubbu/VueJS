<template>
  <main>
    <h1>sample</h1>
    <section class="contents">
      <section class="device">
        <div class="deviceBox">
          <SampleTemplate1 :style="cssColor"></SampleTemplate1>
        </div>
      </section>
      <section class="custom">
        <div>
          <h3>color theme</h3>
          <section>
            <div
              class="color-pick"
              v-for="item in colorPickList"
              :key="item.id"
              @click="changeColor(item.id)"
            >
              <span class="main-color" :style="{ background: item.main }" />
              <span class="sub-color1" :style="{ background: item.sub1 }" />
              <span class="sub-color2" :style="{ background: item.sub2 }" />
              <span class="sub-color3" :style="{ background: item.sub3 }" />
              <span class="bg-color" :style="{ background: item.bg }" />
            </div>
          </section>
        </div>
        <div>
          <h3>template</h3>
        </div>
      </section>
    </section>
  </main>
</template>
<script>
import SampleTemplate1 from "../components/SampleTempalte1.vue";
export default {
  components: {
    SampleTemplate1,
  },
};
</script>
<script setup>
import { computed, ref } from "vue";
const colorPickList = [
  {
    id: 0,
    main: "purple",
    sub1: "skyblue",
    sub2: "lightpink",
    sub3: "rgb(162, 229, 162)",
    bg: "rgb(255, 255, 255)",
  },
  {
    id: 1,
    main: "white",
    sub1: "green",
    sub2: "hotpink",
    sub3: "blue",
    bg: "gray",
  },
];

const colorId = ref(0);

const changeColor = (id) => {
  colorId.value = id;
};

const cssColor = computed(() => {
  const item = colorPickList[colorId.value];
  return {
    "--bg-color": item.bg,
    "--sub-color1": item.sub1,
    "--sub-color2": item.sub2,
    "--sub-color3": item.sub3,
    "--main-color": item.main,
  };
});
</script>

<style scoped>
.contents {
  display: grid;
  grid-template-columns: 500px 1fr;
}
.deviceBox {
  background: black;
  width: 240px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sampleBox {
  --bg-color: rgb(255, 255, 255);
  --sub-color1: skyblue;
  --sub-color2: lightpink;
  --sub-color3: rgb(162, 229, 162);
  --main-color: purple;

  width: calc(100% - 20px);
  height: calc(100% - 20px);
}
.color-pick {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 200px;
  height: 50px;
  border: 3px solid black;
  margin-top: 10px;
}
.color-pick span {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
