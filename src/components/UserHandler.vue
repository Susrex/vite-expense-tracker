<template>
  <div v-show="userLoggedIn" class="position-absolute end-0 btn-group px-3">
    <button class="btn btn-secondary" disabled="true">{{userName}}</button>
    <button class="btn btn-secondary" @click="signOut">Sign out</button>
  </div>

  <li v-show="!userLoggedIn" v-for="route in routes" class="nav-item">
    <router-link class="nav-link" :to="route.to" :class="{ active: isActive(route.to) }">{{route.text}}</router-link>
  </li>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {computed} from "vue";
import firebase from "firebase/compat";
// import global state
import User from "../store/currentUser"
import {createToast} from "mosha-vue-toastify";

// router
const routes = [
  { to: "/register", text: "Register" },
  { to: "/log-in", text: "Log In" },
];
const router = useRouter() // get a reference to our vue router
const activeRoute = computed(() => router.currentRoute.value.path); // gets the path of active tab (eg. "/expenses")
const isActive = path => path === activeRoute.value; // returns true if current path is active index path

const userLoggedIn = User.loggedIn
const userName = User.name

const signOut = () => {
  if (userLoggedIn){
    firebase.auth().signOut()
    router.push('/')
    createToast(`${User.name.value} has been signed out.`,
        {
          timeout: 2000,
        })
    User.logOut()
  }
}


</script>

<style scoped>

</style>