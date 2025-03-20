<template>
  <div class="lowCode">
    <topPart></topPart>
    <div class="main">
      <leftPart></leftPart>
      <mainPart></mainPart>
      <rightPart></rightPart>
    </div>
  </div>
</template>

<script setup>
import leftPart from "./leftPart/leftPart.vue";
import mainPart from "./mainPart/mainPart.vue";
import rightPart from "./rightPart/rightPart.vue";
import topPart from "./topPart/topPart.vue";
</script>

<style scoped>
.lowCode {
  display: flex;
  flex-direction: column;
  background-color: rgb(248, 248, 248);
  width: 100%;
  height: 100vh;
}

.main {
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 80px);
}
</style>
