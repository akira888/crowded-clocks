<script setup lang="ts">
import type { Times } from '@/types/Times'
import BasicClock from '@/components/BasicClock.vue'
const props = defineProps<{
  times: Times
  position: number
}>()
</script>

<template>
  <BasicClock :times="props.times" />
</template>
