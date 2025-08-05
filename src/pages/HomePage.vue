
<template>
  <div class="home">
    <div class="floating-symbols">
      <span class="symbol">☾</span>
      <span class="symbol">✦</span>
      <span class="symbol">⚡</span>
      <span class="symbol">🔮</span>
      <span class="symbol">☽</span>
      <span class="symbol">🌟</span>
      <span class="symbol">🕯️</span>
      <span class="symbol">☾</span>
      <span class="symbol">✦</span>
      <span class="symbol">⚡</span>
      <span class="symbol">🔮</span>
      <span class="symbol">☽</span>
      <span class="symbol">🌟</span>
      <span class="symbol">🕯️</span>
      <span class="symbol">☾</span>
      <span class="symbol">✦</span>
    </div>

    <div class="mystical-container">
      <h1 class="mystical-title">Mystic Emporium</h1>
      <p class="mystical-subtitle">Commune with the Beyond</p>
      
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card" @click="openModal(product)">
          <div class="product-image-bg" :style="{ backgroundImage: product.img ? `url(${product.img})` : 'none' }"></div>
          <div class="product-overlay">
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedProduct" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">×</button>
        <h2 class="modal-title">{{ selectedProduct.name }}</h2>
        <img v-if="selectedProduct.img" :src="selectedProduct.img" alt="Product Image" class="modal-product-img" />
        <p class="modal-description">{{ selectedProduct.description }}</p>
        <div class="modal-price">${{ selectedProduct.price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { AppState } from '../AppState.js' 

const products = computed(() => AppState.products)
const selectedProduct = ref(null) // Track the selected product for the modal

const openModal = (product) => {
  selectedProduct.value = product
}

const closeModal = () => {
  selectedProduct.value = null
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0e1a2e 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.floating-symbols {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  
  .symbol {
    position: absolute;
    font-size: 2.5rem;
    color: rgba(139, 92, 246, 0.35);
    animation: float ease-in-out infinite;
    text-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    
    &:nth-child(1) { top: 5%; left: 5%; animation-delay: 0s; animation-duration: 20s; }
    &:nth-child(2) { top: 10%; right: 10%; animation-delay: 0s; animation-duration: 25s; }
    &:nth-child(3) { top: 25%; left: 15%; animation-delay: 0s; animation-duration: 22s; }
    &:nth-child(4) { top: 30%; right: 20%; animation-delay: 0s; animation-duration: 28s; }
    &:nth-child(5) { top: 45%; left: 10%; animation-delay: 0s; animation-duration: 24s; }
    &:nth-child(6) { top: 50%; right: 15%; animation-delay: 0s; animation-duration: 26s; }
    &:nth-child(7) { top: 65%; left: 20%; animation-delay: 0s; animation-duration: 21s; }
    &:nth-child(8) { bottom: 25%; right: 25%; animation-delay: 0s; animation-duration: 27s; }
    &:nth-child(9) { bottom: 20%; left: 25%; animation-delay: 0s; animation-duration: 23s; }
    &:nth-child(10) { bottom: 15%; right: 5%; animation-delay: 0s; animation-duration: 29s; }
    &:nth-child(11) { bottom: 35%; left: 5%; animation-delay: 0s; animation-duration: 25s; }
    &:nth-child(12) { top: 15%; left: 35%; animation-delay: 0s; animation-duration: 24s; }
    &:nth-child(13) { top: 55%; right: 35%; animation-delay: 0s; animation-duration: 26s; }
    &:nth-child(14) { bottom: 45%; left: 35%; animation-delay: 0s; animation-duration: 22s; }
    &:nth-child(15) { top: 35%; left: 50%; animation-delay: 0s; animation-duration: 28s; }
    &:nth-child(16) { bottom: 55%; right: 50%; animation-delay: 0s; animation-duration: 30s; }
  }
}

@keyframes float {
  0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
  25% { transform: translate(80px, -60px) rotate(90deg) scale(1.1); }
  50% { transform: translate(-70px, 40px) rotate(180deg) scale(0.9); }
  75% { transform: translate(90px, -30px) rotate(270deg) scale(1.05); }
  100% { transform: translate(0px, 0px) rotate(360deg) scale(1); }
}

.mystical-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.mystical-title {
  text-align: center;
  font-size: 4rem;
  background: linear-gradient(45deg, #8b5cf6, #a78bfa, #c4b5fd, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
  font-family: 'Cinzel', serif;
  font-weight: 600;
  position: relative;
  z-index: 3;

  &::before, &::after {
    content: '✦';
    position: absolute;
    color: #8b5cf6;
    font-size: 2rem;
    top: 50%;
    transform: translateY(-50%);
    animation: sparkle 3s ease-in-out infinite;
  }

  &::before {
    left: -4rem;
  }

  &::after {
    right: -4rem;
    animation-delay: 1.5s;
  }
}

.mystical-subtitle {
  text-align: center;
  font-size: 1.5rem;
  color: #a78bfa;
  font-family: 'Crimson Text', serif;
  font-style: italic;
  margin-bottom: 3rem;
  text-shadow: 0 0 15px rgba(167, 139, 250, 0.3);
}

@keyframes sparkle {
  0%, 100% { opacity: 0.6; transform: translateY(-50%) scale(1); }
  50% { opacity: 1; transform: translateY(-50%) scale(1.2); }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

.product-card {
  position: relative;
  background: rgba(139, 92, 246, 0.05);
  border: 2px solid rgba(139, 92, 246, 0.2);
  border-radius: 15px;
  padding: 0;
  height: 250px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: rgba(139, 92, 246, 0.6);
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.3);
    transform: translateY(-8px) scale(1.02);

    .product-image-bg {
      transform: scale(1.1);
      filter: brightness(1.2) contrast(1.1);
    }

    .product-overlay {
      background: linear-gradient(to top, rgba(139, 92, 246, 0.9), rgba(139, 92, 246, 0.7), transparent);
    }
  }

  .product-image-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.4s ease;
    filter: brightness(0.8) contrast(1.2) sepia(0.1);
  }

  .product-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(139, 92, 246, 0.8), rgba(139, 92, 246, 0.6), transparent);
    padding: 1.5rem;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }

  .product-name {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    color: #ffffff;
    margin: 0 0 0.5rem 0;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
    font-weight: 600;
    line-height: 1.2;
  }

  .product-price {
    font-family: 'Crimson Text', serif;
    font-size: 1.2rem;
    color: #c4b5fd;
    font-weight: 600;
    margin: 0;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
  }
}

// Modal styles matching the about page
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 2rem;
  border-radius: 15px;
  max-width: 700px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  border: 2px solid #8b5cf6;
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: #8b5cf6;
  cursor: pointer;
  padding: 5px;
  line-height: 1;
  transition: color 0.3s ease;

  &:hover {
    color: #a78bfa;
  }
}

.modal-title {
  color: #8b5cf6;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  text-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
}

.modal-product-img {
  max-width: 450px;
  max-height: 450px;
  width: auto;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  margin: 1.5rem auto 2rem;
  display: block;
  border: 3px solid rgba(139, 92, 246, 0.4);
  box-shadow: 0 15px 35px rgba(139, 92, 246, 0.3);
}

.modal-description {
  color: #e5e7eb;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-family: 'Crimson Text', serif;
  text-align: left;
}

.modal-price {
  color: #10b981;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Cinzel', serif;
  text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
}

// Responsive design
@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }

  .mystical-title {
    font-size: 2.5rem;
    
    &::before, &::after {
      display: none;
    }
  }

  .mystical-subtitle {
    font-size: 1.2rem;
  }

  .product-card {
    height: 220px;
  }

  .floating-symbols .symbol {
    font-size: 1.5rem;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .modal-product-img {
    max-width: 350px;
    max-height: 350px;
  }
}
</style>