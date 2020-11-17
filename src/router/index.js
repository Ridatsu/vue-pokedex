import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home.vue";
import favorites from "../pages/favorites.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/favorites",
        name: "Favorites",
        component: favorites
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;