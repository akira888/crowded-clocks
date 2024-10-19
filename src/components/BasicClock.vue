<script setup lang="ts">
import { computed } from 'vue'
import PositionResolver from '@/services/PositionResolver'

const props = defineProps(['times', 'handsPosition'])
const defaultDegree: number = 90.0
const transformDigitStart: number = 40
const transformDigitEnd: number = 59
const transformedDigit: number = transformDigitEnd + 1
const transformPatternStart: number = 10
const transformPatternEnd: number = 29
const transformedPattern: number = transformPatternEnd + 1
const position = new PositionResolver()

const smallHandDegree = computed((previous) => {
  if (previous === undefined) {
    return position.smallHandDegree(props.times) + defaultDegree
  }
  const handsPosition = props.handsPosition[1] + defaultDegree

  if (isTransformDigit(props.times.seconds)) {
    return calclateDegree(previous, handsPosition, transformedDigit - props.times.seconds)
  } else if (isTransformPattern(props.times.seconds)) {
    return calclateDegree(previous, handsPosition, transformedPattern - props.times.seconds)
  }
  return previous
})

const bigHandDegree = computed((previous) => {
  if (previous === undefined) {
    return position.bigHandDegree(props.times) + defaultDegree
  }

  const handsPosition = props.handsPosition[0] + defaultDegree
  if (isTransformDigit(props.times.seconds)) {
    return calclateDegree(previous, handsPosition, transformedDigit - props.times.seconds)
  } else if (isTransformPattern(props.times.seconds)) {
    return calclateDegree(previous, handsPosition, transformedPattern - props.times.seconds)
  }
  return previous
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
