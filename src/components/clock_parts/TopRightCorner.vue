<script setup>
import BasicClock from '../BasicClock.vue'
const props = defineProps(['times', 'roll'])
</script>

<template>
  <BasicClock :times="props.times" />
</template>
