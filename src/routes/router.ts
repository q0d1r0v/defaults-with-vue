// imports
import { createRouter, createWebHistory } from 'vue-router'

// layouts
const defaultLayout = () => import('../layouts/default.vue')
const notFoundLayout = () => import('../layouts/404.vue')
const authLayout = () => import('../layouts/auth.vue')

// pages
const IndexPage = () => import('../pages/index.vue')
const NotFoundPage = () => import('../pages/404.vue')
const LoginPage = () => import('../pages/auth/login-page.vue')
const RegisterPage = () => import('../pages/auth/register-page.vue')

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: defaultLayout,
            children: [
                {
                    path: '/',
                    name: 'Index page',
                    component: IndexPage
                }
            ]
        },
        {
            path: '/auth/',
            component: authLayout,
            children: [
                {
                    path: 'login',
                    name: 'Login page',
                    component: LoginPage
                },
                {
                    path: 'register',
                    name: 'Register page',
                    component: RegisterPage
                },
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            component: notFoundLayout,
            children: [
                {
                    path: '/:pathMatch(.*)*',
                    name: 'Not found page',
                    component: NotFoundPage
                }
            ]
        },
    ]
})