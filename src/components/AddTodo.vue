<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const props = defineProps({
    todos: Array
})

const todoVal = ref('')
const router = useRouter()
const handleSubmit = () => {
    props.todos.push({
        id: props.todos.length + 1,
        todo: todoVal.value,
        completed: false
    })
    todoVal.value = ''
    router.push('/')
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="my-10 flex flex-col items-center gap-5">
        <input type="text" placeholder="Enter Todo Name" v-model="todoVal"
            class="w-[450px] h-16 text-2xl border border-solid border-black px-3 py-3 rounded" /> <br>
        <button class="bg-blue-500 text-2xl rounded text-white w-48 h-16" type="submit">Submit</button>
    </form>
</template>