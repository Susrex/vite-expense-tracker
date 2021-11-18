<template>
  <component
    :is="SignInForm"
    :formTitle="formTitle"
    :nameVisible="nameFormVisible"
    class="mx-auto"
    @userCredentials="loginByPasswordAndEmail"/>
</template>

<script setup lang="ts">
import firebase from "firebase/compat";
import { useRouter } from 'vue-router' // import router
import { ref } from 'vue'
//import components
import SignInForm from "../components/SignInForm.vue";

const router = useRouter() // get a reference to our vue router

// defining props values
const formTitle = ref<string>("Log in:")
const nameFormVisible = ref<boolean>(false)

// firebase Authentication
const errMsg = ref<string>("")
const loginByPasswordAndEmail = ($event) => {
  firebase
      .auth() //get the auth api
      .signInWithEmailAndPassword($event.email, $event.password)
      .then((response) => {
          console.log(`Successful log in user: ${$event.email}`);
          //todo: save current user here
          router.push('/expenses') // redirect to the feed
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
            break
          case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found'
            break
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect password'
            break
          default:
            errMsg.value = 'Email or password was incorrect'
            break
        }
        console.log(errMsg.value)
        alert(error.message);
      });
}
</script>

<style scoped>

</style>