import { createApp } from 'vue'
import './index.css'
// importing created router in router.js
import router from "./router.js";
import App from './App.vue'
// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App)
.use(router)
.mount("#app")