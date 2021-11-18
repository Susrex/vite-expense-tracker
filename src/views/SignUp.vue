<template>
  <div>
    <component
        :is="SignInForm"
        :formTitle="formTitle"
        :nameVisible="nameFormVisible"
        class="mx-auto"
        @userCredentials="loginByPasswordAndEmail"/>
      <component
        :is="Notification"
        :msg="notificationMsg"/>
  </div>
</template>

<script setup lang="ts">
import firebase from "firebase/compat";
import { useRouter } from 'vue-router' // import router
import { ref } from 'vue'
//import toast-notifications
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
//import components
import SignInForm from "../components/SignInForm.vue";
import Notification from "../components/Notification.vue";

const router = useRouter() // get a reference to our vue router

// defining props values
const formTitle = ref<string>("Log in:")
const nameFormVisible = ref<boolean>(false)

//notifications
const notificationMsg = ref<string>("Notification")

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
        createToast(errMsg.value,
            //using bootstrap Notification component doesn't work
            {
              timeout: 2000,
            })
        //alert(error.message);
      });
}
</script>

<style scoped>

</style>