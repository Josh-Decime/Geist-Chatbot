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

// /* Test with a simple cursor: THIS WORKS*/
// *, *::before, *::after {
//   cursor: crosshair !important;
// }

// *, *::before, *::after {
//   cursor: url('/Basic-Planchette.png') 16 16, auto !important;
// }

// body, html {
//   cursor: url('/Basic-Planchette.png') 16 16, auto !important;
// }

// *, *::before, *::after {
//   cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='), auto !important;
// }

/* Test with a simple colored dot cursor */
*, *::before, *::after {
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><circle cx="16" cy="16" r="8" fill="red"/></svg>') 16 16, auto !important;
}

body, html {
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><circle cx="16" cy="16" r="8" fill="red"/></svg>') 16 16, auto !important;
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
