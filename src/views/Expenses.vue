<template>
  <h1>Expenses</h1>
  <h2>User name: {{userName}}</h2>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import currentUser from '../composables/currentUser.ts';
export default defineComponent({
  setup() {
    return {
      userName: currentUser.name,
    }
  },
});
</script>

<style scoped>

</style>