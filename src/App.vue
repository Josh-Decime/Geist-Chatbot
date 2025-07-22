<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light">
    👻👻👻
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

/* Global custom cursor */
*, *::before, *::after {
  cursor: url('@/assets/img/Planchette-Cursor.ico') 16 16, auto !important;
}

body, html {
  cursor: url('@/assets/img/Planchette-Cursor.ico') 16 16, auto !important;
}

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
