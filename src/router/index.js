import { createRouter, createWebHashHistory, } from 'vue-router'
const routes = [{
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue'),
    children: []
},
{
    path: '/form',
    name: 'form',

    component: () => import('../views/FormDemo.vue'),
    children: []
},
{
    path: '/formTo',
    name: 'formTo',

    component: () => import('../views/FormTo.vue'),
    children: []
}]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router