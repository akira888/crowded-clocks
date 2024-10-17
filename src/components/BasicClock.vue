<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps(['times', 'handsPosition'])
const defaultDegree: number = 90.0
const transformDigitStart: number = 45
const transformDigitEnd: number = 59
const transformPatternStart: number = 15
const transformPatternEnd: number = 29

const smallHandDegree = computed((previous) => {
  if (props.handsPosition && previous !== undefined) {
    if (isTransformDigit(props.times.seconds)) {
      const handsPosition = props.handsPosition[0] + defaultDegree
      return calclateDegree(previous, handsPosition, 60 - props.times.seconds)
    } else if (isTransformPattern(props.times.seconds)) {
      const handsPosition = props.handsPosition[0] + defaultDegree
      return calclateDegree(previous, handsPosition, 30 - props.times.seconds)
    }
  }
  if (previous !== undefined) {
    return previous
  }

  const minutes = props.times.minutes
  const seconds = props.times.seconds
  let degree = 6 * minutes + 0.1 * seconds
  return degree + defaultDegree
})

const bigHandDegree = computed((previous) => {
  if (props.handsPosition && previous !== undefined) {
    if (isTransformDigit(props.times.seconds)) {
      const handsPosition = props.handsPosition[1] + defaultDegree
      return calclateDegree(previous, handsPosition, 60 - props.times.seconds)
    } else if (isTransformPattern(props.times.seconds)) {
      const handsPosition = props.handsPosition[1] + defaultDegree
      return calclateDegree(previous, handsPosition, 30 - props.times.seconds)
    }
  }
  if (previous !== undefined) {
    return previous
  }
  const hours = props.times.hours % 12
  const minutes = props.times.minutes
  let degree = 30 * hours
  degree += minutes > 0 ? 0.5 * minutes : 0
  return degree + defaultDegree
})

function isTransformDigit(seconds: number): boolean {
  return transformDigitStart <= seconds && transformDigitEnd >= seconds
}
function isTransformPattern(seconds: number): boolean {
  return transformPatternStart <= seconds && transformPatternEnd >= seconds
}

function calclateDegree(start: any, end: number, divid: number): number {
  if (start > end) {
    end += 360
  }
  return start + (end - start) / divid
}
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
  transform: rotate(v-bind(bigHandDegree + 'deg'));
}
.small-hand {
  transform: rotate(v-bind(smallHandDegree + 'deg'));
}
b {
  color: blueviolet;
}
</style>
