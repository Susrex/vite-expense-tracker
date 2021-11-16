<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.to">
        <router-link :to="route.to" :class="{ active: isActive(route.to) }">{{route.text}}</router-link>
      </li>
    </ul>
  </nav>
</template>

// using Composition API structure therefore there is setup() instead of data
<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const routes = [
  {to: "/", text: Home},
  { to: "/expenses", text: Expenses },
  { to: "/analysis", text: Analysis },
];
const router = useRouter();
const activeRoute = computed(() => router.currentRoute.value.path);
const isActive = path => path === activeRoute.value

</script>

<style scoped>
.active {
  color: green;
}
</style>