<script setup>
import AddTodo from '../components/AddTodo.vue';
const props = defineProps({
    todos: {
        type: Array
    }
})
</script>

<template>
    <h1 class="text-6xl font-semibold text-center">Add Todo</h1>
    <AddTodo :todos="props.todos" />
</template>