<script setup lang="ts">
import type { Times } from '@/types/Times'
import { computed, reactive, ref } from 'vue'
import PositionDeclare from '@/services/PositionDeclare'
import PartsClock from '@/components/PartsClock.vue'
import OtherClock from '@/components/OtherClock.vue'

const date = new Date()
const rows = ref<number>(9)
const columns = ref<number>(20)
const position = new PositionDeclare()
const reset = ref(0)
const times: any = reactive<Times>({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  msec: date.getMilliseconds()
})

const patterns = ['horizontal', 'vertical']
const pattern = computed((): string => {
  if (times.minutes.value == 0) {
    const idx: number = Math.floor(Math.random() * patterns.length)
    return patterns[idx]
  } else if (!pattern.value) {
    return patterns[0]
  } else {
    return pattern.value
  }
})

setTimeout(startClock, 999 - times.msec)

function getTime() {
  const date = new Date()
  times.hours = date.getHours()
  times.minutes = date.getMinutes()
  times.seconds = date.getSeconds()
  times.msec = date.getMilliseconds()
}

function startClock() {
  getTime()
  reset.value = setInterval(runClock, 1000)
}

function runClock() {
  getTime()

  // リセット機構
  if (times.msec > 100 && times.msec < 900) {
    clearInterval(reset.value)
    setTimeout(startClock, 999 - times.msec)
  }
}
</script>

<template>
  <h3>digital clock</h3>
  <div>
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
