import { createRouter, createWebHashHistory } from "vue-router";

//define components
import Home from "./views/Home.vue";
import Expenses from "./views/Expenses.vue";
import Analysis from "./views/Analysis.vue";
import Register from "./views/Register.vue";
import SignUp from "./views/SignUp.vue";

//define routes, each route should map to a component
const routes = [
    { path: "/", name: 'Home', component: Home },
    { path: "/expenses", name: 'Expenses', component: Expenses },
    { path: "/analysis", name: 'Analysis', component: Analysis },
    { path: "/register", name: 'Register', component: Register },
    { path: "/sign-up", name: 'SignUp', component: SignUp },
];

// create router instance
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// exporting router because it is defined in separate file
export default router;