// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)                                // state -> propriedades reativas
//   const doubleCount = computed(() => count.value * 2) // getters -> propriedades computadas
//   function increment() {                              // actions -> methods
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  // state -> propriedades reativas
  state() {
    return {
      count: 0,
    };
  },

  // actions -> methods
  actions: {
    increment() {
      this.count++;
    },

    decrement() {
      this.count--;
    },
  },

  // getters -> propriedades computadas
  getters: {
    showCount() {
      return "O valor do count é: " + this.count;
    },
  },
});
