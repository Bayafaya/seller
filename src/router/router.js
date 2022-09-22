import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import UserPage from '@/pages/UserPage.vue'

const routes = [
    {
        path:'/',
        component: MainPage
    },
    {
        path:'/user',
        component: UserPage
    },
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;