<template>
  <h1>Home</h1>
  <h2>User name: {{ userName }}</h2>
</template>

<script setup lang="ts">
// import components
import UserHandler from '../components/UserHandler.vue'
// import global state
import currentUser from '../store/currentUser.ts';

const userName = currentUser.name

</script>

<style scoped>

</style>