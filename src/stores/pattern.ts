import { defineStore } from 'pinia'

export const usePatternStore = defineStore('pattern', {
  state: () => {
    return {
      patterns: ['flat', 'vertical', 'wavy', 'diagonal'],
      pointer: 0
    }
  },
  getters: {
    getPattern: (state) => state.patterns[state.pointer]
  },
  actions: {
    setNext() {
      this.pointer++
      if (this.pointer >= this.patterns.length) {
        this.pointer = 0
      }
    }
  }
})
