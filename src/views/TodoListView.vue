<template>
    <div class="p-6">
        <h2 class="text-xl font-bond mb-4">Team Todo List</h2>
        <ul>
            <li
                v-for="todo in todos"
                :key="todo.id"
                class="mb-2 p-4 border rounded shadow"
            >
                <h3 class="font-semibold">{{  todo.title }}</h3>
                <p class="text-sm text-gray-600">
                    担当: {{ todo.user_id }} | Status: {{ todo.completed }}
                </p>
            </li>
        </ul>
        <p v-if="todos.length === 0 || !todos" class="text-gray-500">No tasks found.</p>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { useUserStore } from '@/store/user'
    import axios from '@/config/axios'

    interface Todo {
        id: number;
        title: string;
        user_id: number;
        completed: number;
    }

    const todos = ref<Todo[]>([]) // ([])は空の配列で初期化している
    const userStore = useUserStore()

    onMounted(async () => {
        try {
            const userId = userStore.userId
            const res = await axios.get(`/todos/${userId}`)
            console.log(res.data)
            todos.value = res.data.todos || []

        } catch(err) {
            console.log('タスク取得失敗', err)
            todos.value = []
        }
    })
</script>