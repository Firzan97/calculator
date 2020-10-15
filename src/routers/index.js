import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import Calculation from "../views/Calculation.vue"
Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home Page',

        }
    }, {
        path: '/calculation',
        name: 'Calculation',
        component: Calculation,
        meta: {
            title: 'Calculation',

        }
    }

]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})


export default router