import { createApp } from 'vue'
import './index.css'
// importing created router in router/index.ts
import router from "./router";
import App from './App.vue'
// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// importing firebase (import firebase from "firebase";) !!
import firebase from "firebase/compat";
// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
// import global state
import currentUser from "./store/currentUser";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCf3gNGvysjL4ZhkVDmr7aIfUHNO5xAZms",
//     authDomain: "vue-expense-tracker-database.firebaseapp.com",
//     projectId: "vue-expense-tracker-database",
//     storageBucket: "vue-expense-tracker-database.appspot.com",
//     messagingSenderId: "842351821003",
//     appId: "1:842351821003:web:f5ca4d912aa4f6828c1b4e",
//     measurementId: "G-JPK1M8JMP6" // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// };
//
// // Initialize Firebase
// //const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);
// currentUser.initializeFireBaseAuth(firebase.auth())

const app = createApp(App);
app.use(router).mount("#app")