<script setup lang="ts">
import { reactive, ref } from 'vue'
import BasicClock from '../components/BasicClock.vue'
const date = new Date()
const reset = ref<number>(0)
const times: any = reactive({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  msec: date.getMilliseconds()
})
setTimeout(startClock, 999 - times.msec)

function getTime() {
  const date = new Date()
  times.hours = date.getHours()
  times.minutes = date.getMinutes()
  times.seconds = date.getSeconds()
  times.msec = date.getMilliseconds()

  // リセット機構
  if (times.msec > 20 && times.msec < 980) {
    clearInterval(reset.value)
    setTimeout(startClock, 999 - times.msec)
  }
}

function startClock() {
  getTime()
  reset.value = setInterval(getTime, 1000)
}
</script>

<template>
  <h3>digital clock</h3>
  <div>
    <time>{{ times.hours + ':' + times.minutes + ':' + times.seconds }}</time>
    msec: {{ times.msec }}
  </div>
  <div id="grid">
    <BasicClock :times="times" />
  </div>
</template>
