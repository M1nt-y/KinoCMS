<template>
  <router-view />
</template>

<script setup>
import {useAuthStore} from "@/stores/auth";
import {onMounted} from "vue";

const authStore = useAuthStore();

onMounted(() => {
  authStore.checkAuthStatus();
})
</script>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

textarea {
  resize: none;
  max-width: 500px;
  aspect-ratio: 1 / 0.25;
}
</style>
