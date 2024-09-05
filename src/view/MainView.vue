<script setup>
import AddTodoButton from '../components/AddTodoButton.vue';
import TodoList from '../components/TodoList.vue';
const props = defineProps({
    todos: Array
})
</script>

<template>
    <h1 class="text-6xl font-semibold text-center">Todo List</h1>
    <TodoList :todos="props.todos" />
    <AddTodoButton />
</template>