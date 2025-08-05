<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-sm">
    <div class="navbar-floating-symbols">
      <span class="nav-symbol">✦</span>
      <span class="nav-symbol">☾</span>
      <span class="nav-symbol">✦</span>
    </div>
    
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
        <!-- <button class="btn" @click="toggleTheme"
          :title="`Enable ${theme === 'light' ? 'dark' : 'light'} theme.`">
          <span class="icon" :class="theme === 'light' ? 'icon-moon' : 'icon-sun'"></span>
        </button> -->
      </div>
      <!-- <Login /> -->
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

.navbar {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0e1a2e 100%);
  padding: 1rem 2rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.3);
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.2);
  position: relative;
  z-index: 10;
  backdrop-filter: blur(10px);
  overflow: hidden;

  .navbar-brand {
    .logo {
      filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.4));
      transition: transform 0.3s ease, filter 0.3s ease;
      &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.6));
      }
    }
  }

  .navbar-toggler {
    border: 1px solid rgba(139, 92, 246, 0.4);
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(139, 92, 246, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      transition: transform 0.3s ease;
    }
    &:hover {
      border-color: rgba(139, 92, 246, 0.6);
      .navbar-toggler-icon {
        transform: scale(1.1);
      }
    }
  }

  .navbar-nav {
    .nav-link {
      font-family: 'Cinzel', serif;
      font-size: 1.2rem;
      color: #a78bfa;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 0.5rem 1rem;
      text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
      transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;

      &:hover {
        color: #c4b5fd;
        text-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
        transform: translateY(-2px);
      }

      &.router-link-exact-active {
        background: linear-gradient(45deg, #8b5cf6, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
        border-bottom: 2px solid #8b5cf6;
      }
    }
  }

  .theme-toggle {
    .btn {
      background: none;
      border: 1px solid rgba(139, 92, 246, 0.4);
      border-radius: 50%;
      padding: 0.5rem;
      color: #a78bfa;
      transition: all 0.3s ease;

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

      &:hover {
        border-color: rgba(139, 92, 246, 0.6);
        box-shadow: 0 0 10px rgba(139, 92, 246, 0.4);
        .icon {
          transform: scale(1.2);
        }
      }
    }
  }
}

.navbar-floating-symbols {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;

  .nav-symbol {
    position: absolute;
    font-size: 1.5rem;
    color: rgba(139, 92, 246, 0.25);
    animation: navFloat ease-in-out infinite;
    text-shadow: 0 0 10px rgba(139, 92, 246, 0.4);

    &:nth-child(1) {
      top: 25%;
      left: 20%;
      animation-duration: 8s;
    }
    &:nth-child(2) {
      top: 60%;
      right: 25%;
      animation-duration: 10s;
    }
    &:nth-child(3) {
      bottom: 30%;
      left: 70%;
      animation-duration: 12s;
    }
  }
}

@keyframes navFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(180deg); }
}

@media screen and (min-width: 576px) {
  .navbar {
    height: 70px;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.5rem 1rem;
  }

  .navbar-nav .nav-link {
    font-size: 1rem;
    padding: 0.5rem;
  }

  .navbar-brand .logo {
    height: 40px;
  }

  .navbar-floating-symbols .nav-symbol {
    font-size: 1.2rem;
  }
}</style>