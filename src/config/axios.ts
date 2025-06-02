// src/lib/axios.js
import { useUserStore } from '@/store/user'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  withCredentials: true, // セッションクッキーを使う場合に必要
})

// 認証トークンをヘッダーに含める
instance.interceptors.request.use(
    (config) => {
        const userStore = useUserStore()
        const token = userStore.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance