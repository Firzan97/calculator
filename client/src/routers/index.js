import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import Calculation from "../views/Calculation.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/calculation',
        name: 'Calculation',
        component: Calculation
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});


export default router