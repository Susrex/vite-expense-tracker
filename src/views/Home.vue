<template>
  <h1>Home</h1>
  <h2>User name: {{ userName }}</h2>
  <button @click="click">Click</button>
  <button @click="logOut">Log out</button>
</template>

<script setup lang="ts">
// import components
import UserHandler from '../components/UserHandler.vue'
// import global state
import currentUser from '../store/currentUser.ts';
import loading from "../store/loading"

const userName = currentUser.name

const click = () => {
  console.log("click")
  loading.toggleLoading()
  currentUser.newUser({
    name: "Pavel",
    email: "email",
    password: "password"
  })
}

const logOut = () => {
  currentUser.logOut()
}
</script>

<style scoped>

</style>