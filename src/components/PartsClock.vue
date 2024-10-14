<script setup>
import BasicClock from '@/components/BasicClock.vue'
const props = defineProps(['times', 'roll', 'position'])
</script>

<template>
  <BasicClock :times="props.times" />
</template>
