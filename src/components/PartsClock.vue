<script setup lang="ts">
import { computed } from 'vue'
import type { Times } from '@/types/Times'
import BasicClock from '@/components/BasicClock.vue'
import RollResolver from '@/services/RollResolver'

const props = defineProps<{
  times: Times
  position: number
}>()

const rollResolver = new RollResolver()
const roll = rollResolver.resolveRoll(props.position)
const gotoNumbers = computed(() => {
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

  return {
    hoursLeft: housrsStr[0],
    hoursRight: housrsStr[1],
    minutesLeft: minutesStr[0],
    minutesRight: minutesStr[1]
  }
})
</script>

<template>
  <BasicClock :times="props.times" />
</template>
