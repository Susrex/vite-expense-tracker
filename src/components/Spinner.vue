<template>
  <div v-show="load">
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import loading from "../store/loading"

const load = loading.load

</script>

<style scoped>

</style>