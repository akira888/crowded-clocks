<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps(['times'])
const defaultDegree: number = 90.0
const smallHandDegree = computed((): number => {
  const minutes = props.times.minutes
  const seconds = props.times.seconds
  let degree = 6 * minutes + 0.1 * seconds
  return degree + defaultDegree
})
const bigHandDegree = computed((): number => {
  const hours = props.times.hours % 12
  const minutes = props.times.minutes
  let degree = 30 * hours
  degree += minutes > 0 ? 0.5 * minutes : 0
  return degree + defaultDegree
})
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
