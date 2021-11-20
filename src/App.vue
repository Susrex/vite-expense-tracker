<template>
  <img alt="Vue logo" src="./assets/logo.png" />
<!--  <HelloWorld msg="Hello world"></HelloWorld>-->
  <component :is="NavBar"/>
  <component :is="Spinner" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import NavBar from "./components/NavBar.vue";
import Spinner from "./components/Spinner.vue";
</script>
