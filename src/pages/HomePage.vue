<script setup>
import { computed } from 'vue'
import { AppState } from '../AppState.js' // Ensure this path matches your project structure

const products = computed(() => AppState.products)
</script>

<template>
  <div class="home">
    <div class="home-card">
      <h1 class="title">Mystic Emporium</h1>
      <p class="subtitle">Commune with the Beyond</p>
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.img || 'https://via.placeholder.com/200x200?text=Product'" alt="Product Image" class="product-img" />
          <h2 class="product-name">{{ product.name }}</h2>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">${{ product.price }}</p>
        </div>
      </div>
    </div>
    <div class="planchette"></div>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English&family=UnifrakturMaguntia&display=swap');

.home {
  display: grid;
  place-content: center;
  text-align: center;
  user-select: none;
  background: url('https://via.placeholder.com/1920x1080?text=Dark+Wood+Texture') no-repeat center center fixed;
  background-size: cover;
  position: relative;
  min-height: 100vh; /* Minimum height, allows natural expansion */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
    z-index: 1;
  }

  .home-card {
    width: clamp(500px, 80vw, 1200px); /* Increased max width for 4 items */
    position: relative;
    z-index: 2;
    padding: 1rem 2.5rem; /* Reduced top padding from 2.5rem to 1rem */
    background: url('https://via.placeholder.com/1000x600?text=Parchment') no-repeat center center;
    background-size: cover;
    border: 3px solid #2c1e0f;
    border-radius: 10px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.5);
    animation: subtle-glow 10s ease-in-out infinite;

    .title {
      font-family: 'UnifrakturMaguntia', cursive;
      font-size: 3rem;
      color: #d4c7a3;
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
      letter-spacing: 2px;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-family: 'IM Fell English', serif;
      font-size: 1.3rem;
      color: #a89b7a;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 4 items side by side on desktop */
      gap: 2rem;
      padding: 2rem 1rem 1rem; /* Added 2rem top padding for gap below navbar */
      overflow: hidden; /* Contain items within grid */

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); /* 2 items on tablets */
      }

      @media (max-width: 480px) {
        grid-template-columns: 1fr; /* 1 item on mobile */
      }

      .product-card {
        background: rgba(44, 30, 15, 0.85);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid #4a3a1e;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);
          pointer-events: none;
        }

        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 12px rgba(212, 199, 163, 0.3);

          .product-img {
            transform: scale(1.05);
            filter: brightness(1.1) drop-shadow(0 0 8px rgba(212, 199, 163, 0.4));
          }
        }

        .product-img {
          height: 180px;
          max-width: 180px;
          width: 100%;
          object-fit: contain;
          object-position: center;
          transition: transform 0.4s ease, filter 0.4s ease;
          filter: sepia(0.3) drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
        }

        .product-name {
          font-family: 'UnifrakturMaguntia', cursive;
          font-size: 1.6rem;
          color: #d4c7a3;
          margin: 1rem 0 0.5rem;
          letter-spacing: 1px;
        }

        .product-description {
          font-family: 'IM Fell English', serif;
          font-size: 0.95rem;
          color: #b0a68a;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .product-price {
          font-family: 'IM Fell English', serif;
          font-size: 1.1rem;
          color: #d4c7a3;
          font-weight: bold;
        }
      }
    }
  }

  @keyframes subtle-glow {
    0% { box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.5); }
    50% { box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.9), 0 0 18px rgba(212, 199, 163, 0.2); }
    100% { box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.5); }
  }

  @keyframes planchette-drift {
    0% { transform: translate(0, 0) rotate(0deg); }
    20% { transform: translate(15px, -10px) rotate(3deg); }
    40% { transform: translate(-10px, 12px) rotate(-2deg); }
    60% { transform: translate(8px, -8px) rotate(1deg); }
    80% { transform: translate(-5px, 5px) rotate(-1deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }

  .planchette {
    position: absolute;
    width: 60px;
    height: 60px;
    background: url('https://via.placeholder.com/60x60?text=Planchette') no-repeat center;
    background-size: contain;
    top: 15%;
    left: 15%;
    animation: planchette-drift 12s ease-in-out infinite;
    z-index: 3;
    pointer-events: none;
    filter: drop-shadow(0 0 5px rgba(212, 199, 163, 0.3));
  }
}
</style>