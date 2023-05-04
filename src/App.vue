<script setup>
import Counter from "/src/components/Counter.vue";
import { useCounterStore } from "/src/stores/counter.js";

const counter = useCounterStore();
</script>

<template>
  <h2>Welcome to pinia</h2>
  <!-- {{ counter.count }} -->
  {{ counter.showCount }}

  <button @click="counter.increment">Increment</button>

  <br />
  <br />
  <hr />
  <br />

  <Counter />
</template>
