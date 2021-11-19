<template>
  <h1>Home</h1>
  <h2>User name: {{userName}}</h2>
  <button @click="click">Click</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import currentUser from '../composables/currentUser.ts';
export default defineComponent({
  setup() {
    const click = () => {
      console.log("click")
      currentUser.changeName("Paul")
    }
    return {
      userName: currentUser.name,
      click
    }
  },
});
</script>

<style scoped>

</style>