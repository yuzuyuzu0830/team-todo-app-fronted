<template>
    <div class="p-4">
        <h1 class="text-xl mb-2">ログイン</h1>
        <form @submit.prevent="handleLogin">
            <input v-model="email" placeholder="メールアドレス" class="border p-2 block mb-2">
            <input v-model="password" type="password" placeholder="パスワード" class="border p-2 block mb-2" />
            <button type="submit" class="bg-blue-500 text-white px-4 py-2">ログイン</button>
        </form>

        <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import axios from '@/config/axios'
    import Cookies from 'js-cookie'
    import { useUserStore } from '@/store/user'

    const email = ref<string>('')
    const password = ref<string>('')
    const error = ref<string>('')

    const handleLogin = async () => {
        error.value =  ''
        try {
            const res = await axios.post('/login', {
                email: email.value,
                password: password.value
            })
            console.log('ログイン成功', res.data)
            
            Cookies.set('user_id', res.data.user_id)

            const userStore = useUserStore()
            userStore.setUserId(res.data.user_id)

        } catch (err: any) {
            error.value = "ログイン失敗しました"
            console.error(err)
        }
    }
</script>