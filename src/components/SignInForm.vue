<template>
  <div style="max-width: 500px" class="m-3">
    <h1>{{ formTitle }}</h1>
    <div class="mb-3" v-if="formNameVisible">
      <label for="formName" class="form-label">User Name:</label>
      <input type="text" class="form-control" id="formName" placeholder="userName" v-model="name" :disabled="load">
    </div>
    <div class="mb-3">
      <label for="formEmail" class="form-label">Email:</label>
      <input type="text" class="form-control" id="formEmail" placeholder="email@example.com" v-model="email" :disabled="load">
    </div>
    <div class="mb-3">
      <label for="formPassword" class="form-label">Password:</label>
      <input type="password" class="form-control" id="formPassword" placeholder="Password" v-model="password" :disabled="load">
    </div>
    <div class="mb-3">
      <button type="submit" class="btn btn-primary" @click="formSubmit" :disabled="load">Submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref } from 'vue'
//import global state
import loading from "../store/loading";

const load = loading.load

//Props idk how it really works, ts interface to define the variable type
interface Props {
  formTitle: string
  nameVisible: boolean
}
const props = withDefaults(defineProps<Props>(), {
  formTitle: "Default title",
  nameVisible: false
})
//exporting name visible to be used in template in v-if: directive
const formNameVisible = ref<boolean>(props.nameVisible)

const name = ref<string>("")
const email = ref<string>("") //making name, email and password reactive vue variables
const password = ref<string>("")

//Exporting values to parent component using emits
const emit = defineEmits<{
  (e: 'userCredentials', credentials: {email: string, password: string, name: string}): void
}>()
const formSubmit = () => {
  emit('userCredentials', {email: email.value, password: password.value, name: name.value})
}
</script>

<style scoped>

</style>