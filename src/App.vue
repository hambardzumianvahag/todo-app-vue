<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue'
import data from './data.json'
const todos = ref(data.todos)
</script>

<template>
  <div class="flex flex-col items-center justify-center my-10">
    <div>
      <RouterView :todos="todos" />
    </div>
  </div>
</template>
