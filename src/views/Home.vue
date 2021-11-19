<template>
  <h1>Home</h1>
  <h2>User name: {{ userName }}</h2>
  <button @click="click">Click</button>
</template>

<script setup lang="ts">
// import global state
import currentUser from '../composables/currentUser.ts';

const userName = currentUser.name

const click = () => {
  console.log("click")
  currentUser.changeName("Paul")
}
</script>

<style scoped>

</style>