<script setup>

const props = defineProps({
    todo: {
        type: Object
    },
    deleteTodo: {
        type: Function
    }
})
</script>
<template>
    <div class="flex items-center justify-between gap-5 py-3 px-3 bg-gray-300  my-3 rounded-xl">
        <div class="flex gap-5">
            <input type="checkbox" v-model="props.todo.completed" class="cursor-pointer w-5">
            <h2 :class="props.todo.completed ? 'line-through' : ''" class="text-xl">{{ props.todo.todo }}</h2>
        </div>
        <div class="flex gap-5">
            <RouterLink :to="{ name: 'edit', params: { id: props.todo.id } }">
                <i class="pi pi-pencil text-blue-500 text-xl cursor-pointer"></i>
            </RouterLink>
            <i class="pi pi-trash text-blue-500 text-xl cursor-pointer" @click="deleteTodo(props.todo.id)"></i>
        </div>
    </div>
</template>