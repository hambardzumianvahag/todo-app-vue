<script setup>
import TodoItem from './TodoItem.vue';
const props = defineProps({
    todos: {
        type: Array
    }
})

const deleteTodo = (id) => {
    const index = props.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        props.todos.splice(index, 1);
    }
};

</script>

<template>
    <div class="my-10">
        <div v-for="todo in props.todos" :key="todo.id">
            <TodoItem :todo="todo" :deleteTodo="deleteTodo" />
        </div>
    </div>
</template>