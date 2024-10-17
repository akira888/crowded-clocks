<script setup lang="ts">
import type { Times } from '@/types/Times'
import { reactive, ref } from 'vue'
import PositionDeclare from '@/services/PositionDeclare'
import PartsClock from '@/components/PartsClock.vue'
import OtherClock from '@/components/OtherClock.vue'
import { usePatternStore } from '@/stores/pattern'

const devmode: boolean = !!import.meta.env.VITE_DEVMODE
const date = new Date()
const pattern = usePatternStore()
const rows = ref<number>(9)
const columns = ref<number>(20)
const position = new PositionDeclare()
const reset = ref<number>(0)
const times: any = reactive<Times>({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  msec: date.getMilliseconds()
})

setTimeout(startClock, 1000 - times.msec)

function getTime() {
  const date = new Date()
  times.hours = date.getHours()
  times.minutes = date.getMinutes()
  times.seconds = date.getSeconds()
  times.msec = date.getMilliseconds()
  if (times.msec < 950) {
    times.seconds += 1
  }
  if (times.seconds == 0 || times.seconds > 59) {
    pattern.setNext()
  }
}

function startClock() {
  getTime()
  reset.value = window.setInterval(runClock, 1000)
}

function runClock() {
  getTime()

  // リセット機構
  if (times.msec > 50 && times.msec < 950) {
    clearInterval(reset.value)
    window.setTimeout(startClock, 1000 - times.msec)
  }
}
</script>

<template>
  <div v-if="devmode">
    <h3>digital clock</h3>
    <time>{{ times.hours + ':' + times.minutes + ':' + times.seconds }}</time>
    msec: {{ times.msec }} resetID: {{ reset }}
  </div>
  <div id="grid">
    <div class="items" v-for="n in columns * rows" :key="n">
      <template v-if="position.clockPositions.includes(n)">
        <PartsClock :times="times" :position="n" />
      </template>
      <template v-else>
        <OtherClock :times="times" :position="n" />
      </template>
    </div>
  </div>
</template>

<style scoped>
#grid {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
}
</style>
