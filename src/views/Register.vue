<template>
  <component
      :is="SignInForm"
      title="Create a new Account:"
      class="mx-auto"
      @userCredentials="register"/>
</template>

<script setup lang="ts">
import SignInForm from "../components/SignInForm.vue";

const register = (credentials) => {
  console.log(`Parent-Email: ${credentials.email}`)
  console.log(`Parent-Password: ${credentials.value}`)
}
</script>

<style scoped>

</style>