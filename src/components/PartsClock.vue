<script setup lang="ts">
import { computed } from 'vue'
import type { Times } from '@/types/Times'
import BasicClock from '@/components/BasicClock.vue'
import RollResolver from '@/services/RollResolver'
import PositionResolver from '@/services/PositionResolver'

const props = defineProps<{
  times: Times
  position: number
}>()

const roll = new RollResolver().resolveRoll(props.position)
const positionResolver = new PositionResolver()
const targetNumber = computed((): string => {
  let minutes: number = props.times.minutes
  let hours: number = props.times.hours
  if (minutes === 59) {
    hours += 1
    minutes = 0
  }
  if (String(minutes)[-1] === '9') {
    minutes += 1
  }
  const housrsStr: string = hours.toString().padStart(2, '0')
  const minutesStr: string = minutes.toString().padStart(2, '0')

  switch (roll) {
    case 'hoursLeft':
      return housrsStr[0]
    case 'hoursRight':
      return housrsStr[1]
    case 'minutesLeft':
      return minutesStr[0]
    case 'minutesRight':
      return minutesStr[1]
    default:
      return '0'
  }
})
const handsPosition = computed(() =>
  positionResolver.resolveHandPosition(
    positionResolver.resolveDigitPosition(roll, props.position),
    targetNumber.value
  )
)
</script>

<template>
  <BasicClock :times="props.times" :handsPosition />
</template>
