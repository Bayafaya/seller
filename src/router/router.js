import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import Profile from '@/pages/Profile.vue'
import Notifications from '@/pages/Notifications.vue'
import Reviews from '@/pages/Reviews.vue'
import Products from '@/pages/Products.vue'
import SignUp from '@/pages/SignUp.vue'
import AddProduct from '@/pages/AddProduct.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/main',
            name: 'main',
            component: MainPage,
            alias: '/main',
        },
        {
            path: "/:catchAll(.*)",
            redirect: { name: 'main' }
        },

        {
            path: '/profile',
            name: 'profile',
            component: Profile,
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: Reviews,
        },
        {
            path: '/notifications',
            name: 'notifications',
            component: Notifications,
        },
        {
            path: '/products',
            name: 'products',
            component: Products,
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: SignUp,
        },
    
        {
            path: '/addProduct',
            name: 'addProduct',
            component: AddProduct,
        },
    ],

})

export default router;