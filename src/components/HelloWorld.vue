<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore();
const resetCount = () => {
  counterStore.$reset();
}
</script>

<template>
  <div class="my-2 text-center flex flex-wrap justify-center items-center">
    <el-button @click="counterStore.increment">count is: {{ counterStore.count }}</el-button>
    <el-button type="primary" @click="counterStore.increment">doubleCount is: {{ counterStore.doubleCount }}</el-button>
    <el-button type="warning" @click="resetCount()">Reset counter store</el-button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
