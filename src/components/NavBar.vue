<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="route in routes" class="nav-item">
            <router-link class="nav-link" :to="route.to" :class="{ active: isActive(route.to) }">{{route.text}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<!--  todo: should the nav bar be collapsible? User profile + sign in/log in-->
</template>

<script setup lang="ts">
// using Composition API structure - setup() function is moved into script tag
import { computed } from "vue";
import { useRouter } from "vue-router";

const routes = [
  {to: "/", text: "Home"},
  { to: "/expenses", text: "Expenses" },
  { to: "/analysis", text: "Analysis" },
  { to: "/register", text: "Register" },
  { to: "/sign-up", text: "Sign Up" },
];
const router = useRouter() // get a reference to our vue router
const activeRoute = computed(() => router.currentRoute.value.path); // gets the path of active tab (eg. "/expenses")
const isActive = path => path === activeRoute.value; // returns true if current path is active index path

</script>

<style scoped>

</style>