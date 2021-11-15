import { createWebHistory, createRouter } from "vue-router";

//define components
import Home from "./components/Home.vue";
import Expenses from "./components/Expenses.vue";
import Analysis from "./components/Analysis.vue";

//define routes, each route should map to a component
const routes = [
    { path: "/", component: Home },
    { path: "/expenses", component: Expenses },
    { path: "/analysis", component: Analysis },
];

// create router instance
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;