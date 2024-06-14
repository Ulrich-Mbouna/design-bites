import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import _font from "../components/fonts/font/index.vue";
import subfont from "../components/fonts/font/subfont.vue";
import About from "../components/About.vue";
import Home from "../components/Home.vue";
import Index from "../components/fonts/index.vue";

const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/resources', component: Index
    },
    {
        path: '/fonts', component: Index, name: 'Fonts'
    },
    {
        path: '/fonts/:font', component: _font, name: 'fonts-detail'
    },
    {
        path: '/fonts/:font/:subfont', component: subfont, name: 'fonts-sub-detail'
    },
    {
        path: '/brushes', component: Index
    },
    {
        path: '/vectors', component: Index
    },
    {
        path: '/graphics', component: Index
    },
    {
        path: '/mockups', component: Index
    },
    {
        path: '/ui-kits', component: Index
    },
    {
        path: '/view-all', component: Index
    },
    {
        path: '/about', component: About
    },
    {
        path: '/blog', component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
