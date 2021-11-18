<template>
  <component
      :is="SignInForm"
      :formTitle="formTitle"
      :nameVisible="nameFormVisible"
      class="mx-auto"
      @userCredentials="registerByPasswordAndEmail"/>
</template>

<script setup lang="ts">
import firebase from "firebase/compat";
import { useRouter } from 'vue-router' // import router
import { ref } from 'vue'
//import components
import SignInForm from "../components/SignInForm.vue";

const router = useRouter() // get a reference to our vue router

// defining props values
const formTitle = ref<string>("Create a new Account:")
const nameFormVisible = ref<boolean>(true)

// firebase Authentication
const registerByPasswordAndEmail = ($event) => {
  firebase
    .auth() //get the auth api
    .createUserWithEmailAndPassword($event.email, $event.password)
    .then((response) => {
      response.user.updateProfile({
        displayName: $event.name //hopefully it saves userName in database...
      })
        .then(() => {
          console.log(`Successfully registered user ${$event.name}`);
          //todo: save current user here
          router.push('/expenses') // redirect to the feed
        })
    })
    .catch(error => {
      console.log(error.code)
      alert(error.message);
    });
}
</script>

<style scoped>

</style>