<script setup lang="ts">
import { ref } from 'vue'
const smallHandDegree = ref<number>(90)
const bigHandDegree = ref<number>(180)
</script>

<template>
  <div class="controll-panel">
    <input type="range" min="0" max="360" v-model="smallHandDegree" /><b>minutes</b>
    <br />
    <input type="range" min="0" max="360" v-model="bigHandDegree" /><b>hour</b>
  </div>
  <div class="clocks">
    <div class="rim">
      <span class="big-hand"></span>
      <span class="small-hand"></span>
    </div>
  </div>
</template>

<style scoped>
.big-hand {
  transform: rotate(v-bind(bigHandDegree + 'deg'));
}
.small-hand {
  transform: rotate(v-bind(smallHandDegree + 'deg'));
}
b {
  color: blueviolet;
}
</style>
