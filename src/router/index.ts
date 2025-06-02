import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import TodoView from '@/views/TodoListView.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodoView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
