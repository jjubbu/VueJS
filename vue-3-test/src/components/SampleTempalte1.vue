<template>
  <section class="sampleBox">
    <div class="sample-content">
      <h1>Name</h1>
      <ul class="link-box">
        <li><a href="naver.com">naver</a></li>
        <li><a href="google.com">google</a></li>
      </ul>
    </div>
    <span class="background top"></span>
    <span class="background middle"></span>
    <span class="background bottom"></span>
  </section>
</template>
<style scoped>
.sampleBox {
  position: relative;
  background: var(--bg-color);
  color: var(--main-color);
}
.sample-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
}
.link-box li a {
  color: var(--main-color);
  text-decoration: none;
}
.background {
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 0;
}
.background.top {
  background: var(--sub-color1);
  top: 0;
}
.background.middle {
  background: var(--sub-color2);
  top: 35%;
}
.background.bottom {
  background: var(--sub-color3);
  bottom: 0;
}
</style>
