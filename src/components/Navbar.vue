<script setup>
import { onMounted, ref } from 'vue'
import { loadState, saveState } from '../utils/Store.js'
import Login from './Login.vue'

const theme = ref(loadState('theme') || 'dark') // Default to dark for Ouija aesthetic

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}
</script>

<template>
  <nav class="navbar navbar-expand-sm">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="@/assets/img/Logo.png" height="50" class="logo" />
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul>
      <div class="theme-toggle">
        <button class="btn" @click="toggleTheme"
          :title="`Enable ${theme === 'light' ? 'dark' : 'light'} theme.`">
          <span class="icon" :class="theme === 'light' ? 'icon-moon' : 'icon-sun'"></span>
        </button>
      </div>
      <Login />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');

.navbar {
  background: url('https://via.placeholder.com/1920x70?text=Dark+Wood+Texture') no-repeat center center;
  background-size: cover;
  padding: 1rem 2rem;
  border-bottom: 2px solid #2c1e0f;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
    z-index: -1;
  }

  .navbar-brand {
    .logo {
      filter: drop-shadow(0 0 5px rgba(212, 199, 163, 0.4));
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .navbar-toggler {
    border: 1px solid #4a3a1e;
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(212, 199, 163, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
  }

  .navbar-nav {
    .nav-link {
      font-family: 'UnifrakturMaguntia', cursive;
      font-size: 1.2rem;
      color: #d4c7a3;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 0.5rem 1rem;
      transition: color 0.3s ease, text-shadow 0.3s ease;

      &:hover {
        color: #fff;
        text-shadow: 0 0 5px rgba(212, 199, 163, 0.6);
      }

      &.router-link-exact-active {
        border-bottom: 2px solid #d4c7a3;
        color: #fff;
        text-shadow: 0 0 5px rgba(212, 199, 163, 0.6);
      }
    }
  }

  .theme-toggle {
    .btn {
      background: none;
      border: none;
      padding: 0.5rem;
      color: #d4c7a3;

      .icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        background-size: contain;
        transition: transform 0.3s ease;
      }

      .icon-moon {
        background: url('https://via.placeholder.com/24x24?text=Moon') no-repeat center;
      }

      .icon-sun {
        background: url('https://via.placeholder.com/24x24?text=Sun') no-repeat center;
      }

      &:hover .icon {
        transform: scale(1.2);
      }
    }
  }
}

@media screen and (min-width: 576px) {
  .navbar {
    height: 70px;
  }
}
</style>