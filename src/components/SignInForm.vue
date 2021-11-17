<template>
  <div style="max-width: 500px">
    <h1>{{ title }}</h1>
    <div class="mb-3">
      <label for="formEmail" class="form-label">Email:</label>
      <input type="text" class="form-control" id="formEmail" placeholder="email@example.com" v-model="email">
    </div>
    <div class="mb-3">
      <label for="formPassword" class="form-label">Password:</label>
      <input type="password" class="form-control" id="formPassword" placeholder="Password" v-model="password">
    </div>
    <div class="mb-3">
      <button type="submit" class="btn btn-primary" @click="formSubmit">Submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref } from 'vue'

//Props idk how it really works, ts to define the variable type
interface Props {
  title: string
}
const props = withDefaults(defineProps<Props>(), {
  title: "Default title",
})

//Exporting values to parent component
const email = ref<string>("") //making email and password reactive vue variables
const password = ref<string>("")

const formSubmit = () => {
  console.log(`Email: ${email.value}`)
  console.log(`Password: ${password.value}`)
  this.$emit('userCredentials', {email: email.value, password: password.value})
}
</script>

<style scoped>

</style>