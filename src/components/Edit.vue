<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    todo: Object
})

const router = useRouter();
const todoInput = ref(props.todo.todo);

const handleEdit = () => {
    props.todo.todo = todoInput.value;
    router.push('/');
};

</script>

<template>
    <div class="my-10 flex flex-col items-center gap-5">
        <input class=" w-[450px] h-16 text-2xl border border-solid border-black px-3 py-3 rounded" type="text"
            v-model="todoInput" /> <br>
        <button class="bg-blue-500 text-2xl rounded text-white w-48 h-16" @click="handleEdit">Edit</button>
    </div>
</template>