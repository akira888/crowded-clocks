<script setup lang="ts">
import { computed } from 'vue'
import type { Times } from '@/types/Times'
import BasicClock from '@/components/BasicClock.vue'
import RollResolver from '@/services/RollResolver'
import PositionResolver from '@/services/PositionResolver'
import { usePatternStore } from '@/stores/pattern'

const props = defineProps<{
  times: Times
  position: number
}>()

const pattern = usePatternStore()
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
  const hoursStr: string = hours.toString().padStart(2, '0')
  const minutesStr: string = minutes.toString().padStart(2, '0')

  switch (roll) {
    case 'hoursLeft':
      return hoursStr[0]
    case 'hoursRight':
      return hoursStr[1]
    case 'minutesLeft':
      return minutesStr[0]
    case 'minutesRight':
      return minutesStr[1]
    default:
      return '0'
  }
})
const handsPosition = computed(() => {
  if (props.times.seconds >= 30) {
    return positionResolver.resolveHandPosition(
      positionResolver.resolveDigitPosition(roll, props.position),
      targetNumber.value
    )
  } else {
    return positionResolver.resolvePatternPosition(pattern.getPattern, props.position)
  }
})
</script>

<template>
  <BasicClock :times="props.times" :handsPosition />
</template>
