<template>
  <section id="home" class="hero">
    <div class="hero__bg">
      <div class="hero__circle hero__circle--1"></div>
      <div class="hero__circle hero__circle--2"></div>
      <div class="hero__circle hero__circle--3"></div>
    </div>

    <div class="hero__content container">
      <div class="hero__text">
        <span class="hero__badge">
          <font-awesome-icon :icon="['fas', 'bolt']" /> Novidade
        </span>
        <h1 class="hero__title">
          Conecta você<br />
          <span class="hero__title--highlight">ao que importa</span>
        </h1>
        <p class="hero__description">
          Internet ultra rápida, planos de celular com a maior cobertura 5G do Brasil,
          TV com os melhores canais e streaming. Tudo em um só lugar.
        </p>
        <div class="hero__actions">
          <a href="#planos" class="hero__btn hero__btn--primary">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
            Ver planos
          </a>
          <a href="#cobertura" class="hero__btn hero__btn--secondary">
            Verificar cobertura
          </a>
        </div>
        <div class="hero__stats">
          <div class="hero__stat">
            <span class="hero__stat-number">5G</span>
            <span class="hero__stat-label">Tecnologia</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-number">99%</span>
            <span class="hero__stat-label">Cobertura 4G</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-number">80M+</span>
            <span class="hero__stat-label">Clientes</span>
          </div>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__phone">
          <div class="hero__phone-screen">
            <div class="hero__phone-header">
              <span class="hero__phone-time">09:41</span>
              <div class="hero__phone-icons">
                <font-awesome-icon :icon="['fas', 'signal']" />
                <font-awesome-icon :icon="['fas', 'wifi']" />
                <font-awesome-icon :icon="['fas', 'battery-full']" />
              </div>
            </div>
            <div class="hero__phone-content">
              <div class="hero__phone-speed">
                <span class="hero__phone-speed-value">1.2</span>
                <span class="hero__phone-speed-unit">Gbps</span>
              </div>
              <div class="hero__phone-label">Velocidade 5G</div>
              <div class="hero__phone-bar">
                <div class="hero__phone-bar-fill"></div>
              </div>
              <div class="hero__phone-network">
                <font-awesome-icon :icon="['fas', 'signal']" />
                <span>5G Ultra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero__scroll">
      <a href="#planos">
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  background: $gradient-hero;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  &__circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.08;

    &--1 {
      width: 600px;
      height: 600px;
      background: $claro-red;
      top: -200px;
      right: -100px;
    }

    &--2 {
      width: 400px;
      height: 400px;
      background: $claro-red-light;
      bottom: -150px;
      left: -100px;
    }

    &--3 {
      width: 300px;
      height: 300px;
      background: $claro-yellow;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    position: relative;
    z-index: 1;
    width: 100%;
  }

  &__text {
    flex: 1;
    max-width: 600px;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(218, 41, 28, 0.2);
    color: $claro-red-light;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: $font-size-sm;
    font-weight: 600;
    margin-bottom: 24px;
    border: 1px solid rgba(218, 41, 28, 0.3);
  }

  &__title {
    font-size: 64px;
    font-weight: 800;
    color: $claro-white;
    line-height: 1.1;
    margin-bottom: 24px;
    letter-spacing: -2px;

    &--highlight {
      background: linear-gradient(135deg, $claro-red-light, $claro-yellow);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  &__description {
    font-size: $font-size-lg;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
    margin-bottom: 36px;
    max-width: 500px;
  }

  &__actions {
    display: flex;
    gap: 16px;
    margin-bottom: 48px;
  }

  &__btn {
    padding: 16px 32px;
    border-radius: 50px;
    font-size: $font-size;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all $transition-normal;

    &--primary {
      background: $claro-red;
      color: $claro-white;

      &:hover {
        background: $claro-red-dark;
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(218, 41, 28, 0.4);
      }
    }

    &--secondary {
      background: rgba(255, 255, 255, 0.1);
      color: $claro-white;
      border: 1px solid rgba(255, 255, 255, 0.2);

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-3px);
      }
    }
  }

  &__stats {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  &__stat {
    display: flex;
    flex-direction: column;

    &-number {
      font-size: 28px;
      font-weight: 800;
      color: $claro-white;
    }

    &-label {
      font-size: $font-size-sm;
      color: rgba(255, 255, 255, 0.5);
      margin-top: 2px;
    }

    &-divider {
      width: 1px;
      height: 40px;
      background: rgba(255, 255, 255, 0.15);
    }
  }

  &__visual {
    flex-shrink: 0;
  }

  &__phone {
    width: 280px;
    height: 560px;
    background: #0a0a0a;
    border-radius: 40px;
    padding: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 0 2px rgba(255, 255, 255, 0.1);
    position: relative;

    &-screen {
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, $claro-dark 0%, $claro-dark-secondary 100%);
      border-radius: 30px;
      overflow: hidden;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 60px;
    }

    &-time {
      color: $claro-white;
      font-size: $font-size-sm;
      font-weight: 600;
    }

    &-icons {
      display: flex;
      gap: 6px;
      color: $claro-white;
      font-size: 12px;
    }

    &-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &-speed {
      text-align: center;
      margin-bottom: 8px;

      &-value {
        font-size: 72px;
        font-weight: 800;
        color: $claro-white;
        line-height: 1;
      }

      &-unit {
        font-size: 24px;
        font-weight: 600;
        color: $claro-red-light;
        margin-left: 4px;
      }
    }

    &-label {
      color: rgba(255, 255, 255, 0.6);
      font-size: $font-size-sm;
      margin-bottom: 32px;
    }

    &-bar {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      overflow: hidden;
      margin-bottom: 24px;

      &-fill {
        width: 85%;
        height: 100%;
        background: linear-gradient(90deg, $claro-red, $claro-red-light);
        border-radius: 3px;
        animation: pulse-bar 2s ease-in-out infinite;
      }
    }

    &-network {
      display: flex;
      align-items: center;
      gap: 8px;
      color: $claro-red-light;
      font-size: $font-size-sm;
      font-weight: 600;

      svg {
        font-size: 16px;
      }
    }
  }

  &__scroll {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    a {
      color: rgba(255, 255, 255, 0.5);
      font-size: 24px;
      animation: bounce 2s ease-in-out infinite;
    }
  }
}

@keyframes pulse-bar {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

@media (max-width: $mobile) {
  .hero {
    padding: 100px 0 80px;

    &__content {
      flex-direction: column;
      text-align: center;
    }

    &__text {
      max-width: 100%;
    }

    &__title {
      font-size: 40px;
    }

    &__description {
      max-width: 100%;
    }

    &__actions {
      justify-content: center;
      flex-wrap: wrap;
    }

    &__stats {
      justify-content: center;
    }

    &__visual {
      display: none;
    }

    &__scroll {
      display: none;
    }
  }
}
</style>
