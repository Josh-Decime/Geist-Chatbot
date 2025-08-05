
<template>
  <div class="about">
    <div class="mystical-container">
      <div class="floating-symbols">
        <span class="symbol">☾</span>
        <span class="symbol">✦</span>
        <span class="symbol">⚡</span>
        <span class="symbol">🔮</span>
        <span class="symbol">☽</span>
      </div>
      
      <h1 class="mystical-title">The Truth Behind the Veil</h1>
      
      <div class="revelation-card">
        <h2 class="section-title">🌙 A Portal to Knowledge 🌙</h2>
        <p class="mystical-text">
          Welcome, seeker of wisdom. The supernatural artifacts you see before you exist not in the physical realm, 
          but in the digital ether as vessels of knowledge. These mystical items are manifestations of imagination, 
          crafted to test the boundaries between artificial intelligence and ancient wisdom.
        </p>
      </div>

      <div class="revelation-card">
        <h2 class="section-title">🔮 The Oracle's Purpose 🔮</h2>
        <p class="mystical-text">
          This ethereal marketplace serves as a testing ground for an AI chatbot—a digital oracle built through 
          the mystical arts of Voiceflow. Each phantom product holds deeper secrets and knowledge that only 
          the artificial spirit can reveal when properly summoned through conversation.
        </p>
      </div>

      <div class="revelation-card">
        <h2 class="section-title">⚡ The Creator's Journey ⚡</h2>
        <p class="mystical-text">
          This realm was conjured as a personal quest to understand the arcane mysteries of AI chatbot creation. 
          Through this project, the boundaries between human curiosity and artificial intelligence blur, 
          revealing the intricate dance of technology and imagination.
        </p>
      </div>

      <div class="revelation-card">
        <h2 class="section-title">✨ The Experiment Unveiled ✨</h2>
        <p class="mystical-text">
          Each supernatural item in our collection exists as a test case—a way to explore how AI can maintain 
          character, provide detailed information, and engage users in meaningful dialogue about fictional 
          products. The chatbot holds extensive knowledge about every artifact's properties, origins, and uses.
        </p>
      </div>

      <div class="warning-scroll">
        <h3 class="warning-title">⚠️ Supernatural Disclaimer ⚠️</h3>
        <p class="warning-text">
          No actual demons were harmed in the making of this website. No real supernatural powers are conferred 
          by viewing these products. Any spontaneous astral projection, time travel, or communication with spirits 
          is purely coincidental and not covered under our return policy.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.about {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0e1a2e 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.mystical-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
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
    font-size: 2rem;
    color: rgba(139, 92, 246, 0.3);
    animation: float 6s ease-in-out infinite;

    &:nth-child(1) {
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      top: 20%;
      right: 15%;
      animation-delay: 1s;
    }
    &:nth-child(3) {
      top: 60%;
      left: 5%;
      animation-delay: 2s;
    }
    &:nth-child(4) {
      bottom: 30%;
      right: 10%;
      animation-delay: 3s;
    }
    &:nth-child(5) {
      bottom: 10%;
      left: 20%;
      animation-delay: 4s;
    }
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.mystical-title {
  text-align: center;
  font-size: 3rem;
  background: linear-gradient(45deg, #8b5cf6, #a78bfa, #c4b5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
  font-family: 'Cinzel', serif;
  position: relative;
  z-index: 3;

  &::before, &::after {
    content: '✦';
    position: absolute;
    color: #8b5cf6;
    font-size: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: -3rem;
  }

  &::after {
    right: -3rem;
  }
}

.revelation-card {
  background: rgba(139, 92, 246, 0.1);
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    border-color: rgba(139, 92, 246, 0.6);
    box-shadow: 0 12px 40px rgba(139, 92, 246, 0.3);
    transform: translateY(-5px);

    &::before {
      left: 100%;
    }
  }
}

.section-title {
  color: #a78bfa;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Cinzel', serif;
  text-shadow: 0 0 10px rgba(167, 139, 250, 0.5);
}

.mystical-text {
  color: #e5e7eb;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  font-family: 'Crimson Text', serif;
}

.warning-scroll {
  background: rgba(220, 38, 38, 0.1);
  border: 2px solid rgba(220, 38, 38, 0.4);
  border-radius: 15px;
  padding: 1.5rem;
  margin-top: 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #dc2626, #ef4444, #f87171, #dc2626);
    border-radius: 15px;
    z-index: -1;
    animation: pulse-border 2s ease-in-out infinite;
  }
}

@keyframes pulse-border {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

.warning-title {
  color: #f87171;
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Cinzel', serif;
}

.warning-text {
  color: #fca5a5;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  font-style: italic;
}

// Responsive design
@media (max-width: 768px) {
  .about {
    padding: 1rem;
  }

  .mystical-title {
    font-size: 2rem;
    
    &::before, &::after {
      display: none;
    }
  }

  .revelation-card {
    padding: 1.5rem;
  }

  .floating-symbols .symbol {
    font-size: 1.5rem;
  }
}

// Import Google Fonts if not already included
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
</style>