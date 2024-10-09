<script setup lang="ts">
import { ref } from 'vue'
const smallHandDegree = ref('1deg')
const bigHandDegree = ref('20deg')
</script>

<template>
  <div class="clocks">
    <div class="rim">
      <span class="big-hand"></span>
      <span class="small-hand"></span>
    </div>
  </div>
</template>

<style scoped>
.big-hand {
  transform: rotate(v-bind(bigHandDegree));
}
.small-hand {
  transform: rotate(v-bind(smallHandDegree));
}
</style>
