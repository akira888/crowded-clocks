<script setup lang="ts">
import { computed } from 'vue'
import type { Times } from '@/types/Times'
import BasicClock from '@/components/BasicClock.vue'
import PositionResolver from '@/services/PositionResolver'
import { usePatternStore } from '@/stores/pattern'

const props = defineProps<{
  times: Times
  position: number
}>()
const pattern = usePatternStore()
const positionResolver = new PositionResolver()

const handsPosition = computed((previous) => {
  if (!previous || props.times.seconds >= 30) {
    return positionResolver.resolveTimePositions(props.times)
  } else {
    return positionResolver.resolvePatternPosition(pattern.getPattern, props.position)
  }
})
</script>

<template>
  <BasicClock :times="props.times" :hands-position />
</template>
