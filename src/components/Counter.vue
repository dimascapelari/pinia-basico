<script setup>
import { useCounterStore } from "/src/stores/counter";

const counter = useCounterStore();
</script>

<template>
  <h2>Welcome to pinia Counter component</h2>
  <!-- {{ counter.count }} -->
  {{ counter.showCount }}

  <button @click="counter.increment">Increment</button>
</template>
