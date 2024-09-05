<script setup>
import Edit from "../components/Edit.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const props = defineProps({
    todos: Array
})
const route = useRoute();
const todoId = route.params.id;
const selectedTodo = computed(() => {
    return props.todos.find(todo => todo.id === parseInt(todoId));
});

</script>

<template>
    <h1 class="text-6xl font-semibold text-center">Edit Todo</h1>
    <Edit :todo="selectedTodo" />
</template>