<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello world"></HelloWorld>
<!--  <nav-bar/>-->
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
