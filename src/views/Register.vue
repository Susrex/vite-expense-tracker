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
import {createToast} from "mosha-vue-toastify";
//import global state
import User from "../store/currentUser"
import loading from "../store/loading";

const router = useRouter() // get a reference to our vue index

// defining props values
const formTitle = ref<string>("Create a new Account:")
const nameFormVisible = ref<boolean>(true)

// firebase Authentication
const errMsg = ref<string>("Error")
const registerByPasswordAndEmail = ($event) => {
  loading.toggleLoading()
  firebase
    .auth() //get the auth api
    .createUserWithEmailAndPassword($event.email, $event.password)
    .then((response) => {
      response.user.updateProfile({
        displayName: $event.name //hopefully it saves userName in database...
      })
        .then(() => {
          console.log(`Successfully registered user ${$event.name}`);
          createToast(`Successfully registered user ${$event.name}`,
              {
                timeout: 2000,
              })
          // saving just register user
          User.newUser({
            name: $event.name,
            email: $event.email,
          })
          router.push('/expenses') // redirect to the feed
          loading.toggleLoading()
        })
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/weak-password':
          errMsg.value = 'The password is too weak.'
          break
        case 'auth/email-already-in-use':
          errMsg.value = 'Email already in use. Choose different email.'
          break
        default:
          errMsg.value = error.message
          break
      }
      createToast(errMsg.value,
          {
            timeout: 2000,
          })
      loading.toggleLoading()
    });
}
</script>

<style scoped>

</style>