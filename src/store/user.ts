import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useUserStore = defineStore('user', {
    state: () => ({
        userId: Cookies.get('user_id') || null,
        token: Cookies.get('token') || null
    }),
    actions: {
        setUserId(id: string | null) { // cookieから取得する数字は全て文字列として認識される
            this.userId = id
            if (id !== null) {
                Cookies.set('user_id', id.toString())
            }
        },
        setToken(token: string | null) {
            this.token = token
            if (token !== null) {
                Cookies.set('token', token)
            }
        },
        clearUser() {
            this.userId = null
            Cookies.remove('user_id')
        }
    }
})