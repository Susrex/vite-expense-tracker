<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello world"></HelloWorld>

  <router-link to="/">Home</router-link>|
  <router-link to="/expenses">Expenses</router-link>|
  <router-link to="/analysis">Analysis</router-link>|

  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import NavBar from "./components/NavBar";

export default {
  name: 'App',
  components: {
    // NavBar,
    HelloWorld
  }
}
</script>
