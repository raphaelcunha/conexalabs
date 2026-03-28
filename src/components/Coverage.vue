<template>
  <section id="cobertura" class="coverage">
    <div class="container">
      <div class="coverage__header">
        <span class="coverage__label">Cobertura</span>
        <h2 class="coverage__title">Presente em todo o Brasil</h2>
        <p class="coverage__subtitle">
          Cobertura 4G em 99% do território nacional e 5G nas principais capitais e regiões metropolitanas.
        </p>
      </div>

      <div class="coverage__content">
        <div class="coverage__map">
          <div class="coverage__map-visual">
            <div class="coverage__map-brazil">
              <div class="coverage__dot" v-for="dot in mapDots" :key="dot.id" :style="dot.style">
                <div class="coverage__dot-pulse"></div>
              </div>
              <div class="coverage__map-outline">
                <font-awesome-icon :icon="['fas', 'map']" />
              </div>
            </div>
          </div>
        </div>

        <div class="coverage__stats">
          <div class="coverage__stat" v-for="stat in stats" :key="stat.label">
            <div class="coverage__stat-header">
              <font-awesome-icon :icon="stat.icon" class="coverage__stat-icon" />
              <span class="coverage__stat-value">{{ stat.value }}</span>
            </div>
            <span class="coverage__stat-label">{{ stat.label }}</span>
            <div class="coverage__stat-bar">
              <div class="coverage__stat-bar-fill" :style="{ width: stat.percent }"></div>
            </div>
          </div>

          <div class="coverage__cta">
            <h3 class="coverage__cta-title">Consulte a cobertura na sua região</h3>
            <p class="coverage__cta-desc">
              Digite seu CEP e descubra quais serviços estão disponíveis no seu endereço.
            </p>
            <div class="coverage__cta-form">
              <input
                type="text"
                placeholder="Digite seu CEP"
                class="coverage__cta-input"
                maxlength="9"
              />
              <button class="coverage__cta-btn">Consultar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Coverage',
  data() {
    return {
      stats: [
        {
          icon: ['fas', 'signal'],
          value: '99%',
          label: 'Cobertura 4G nacional',
          percent: '99%',
        },
        {
          icon: ['fas', 'broadcast-tower'],
          value: '350+',
          label: 'Cidades com 5G',
          percent: '70%',
        },
        {
          icon: ['fas', 'wifi'],
          value: '4.900+',
          label: 'Cidades com internet fibra',
          percent: '85%',
        },
        {
          icon: ['fas', 'satellite-dish'],
          value: '100%',
          label: 'Cobertura por satélite',
          percent: '100%',
        },
      ],
      mapDots: [
        { id: 1, style: { top: '20%', left: '65%' } },
        { id: 2, style: { top: '35%', left: '70%' } },
        { id: 3, style: { top: '30%', left: '55%' } },
        { id: 4, style: { top: '50%', left: '60%' } },
        { id: 5, style: { top: '55%', left: '50%' } },
        { id: 6, style: { top: '65%', left: '55%' } },
        { id: 7, style: { top: '75%', left: '50%' } },
        { id: 8, style: { top: '40%', left: '45%' } },
        { id: 9, style: { top: '25%', left: '50%' } },
        { id: 10, style: { top: '45%', left: '65%' } },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.coverage {
  padding: 100px 0;
  background: $claro-gray;

  &__header {
    text-align: center;
    margin-bottom: 60px;
  }

  &__label {
    display: inline-block;
    background: rgba(218, 41, 28, 0.1);
    color: $claro-red;
    padding: 6px 16px;
    border-radius: 50px;
    font-size: $font-size-sm;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__title {
    font-size: $font-size-title;
    font-weight: 800;
    color: $claro-dark;
    margin-bottom: 16px;
    letter-spacing: -1px;
  }

  &__subtitle {
    font-size: $font-size-lg;
    color: #666;
    max-width: 550px;
    margin: 0 auto;
  }

  &__content {
    display: flex;
    gap: 60px;
    align-items: center;
  }

  &__map {
    flex: 1;

    &-visual {
      background: $claro-white;
      border-radius: $radius-lg;
      padding: 40px;
      box-shadow: $shadow-card;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-brazil {
      position: relative;
      width: 100%;
      height: 100%;
    }

    &-outline {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      svg {
        font-size: 180px;
        color: rgba(218, 41, 28, 0.1);
      }
    }
  }

  &__dot {
    position: absolute;
    width: 12px;
    height: 12px;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background: $claro-red;
      border-radius: 50%;
    }

    &-pulse {
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(218, 41, 28, 0.3);
      animation: coverage-pulse 2s ease-in-out infinite;
    }
  }

  &__stats {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  &__stat {
    &-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 6px;
    }

    &-icon {
      color: $claro-red;
      font-size: 18px;
    }

    &-value {
      font-size: $font-size-xl;
      font-weight: 800;
      color: $claro-dark;
    }

    &-label {
      font-size: $font-size-sm;
      color: #666;
      display: block;
      margin-bottom: 8px;
    }

    &-bar {
      height: 6px;
      background: #e0e0e0;
      border-radius: 3px;
      overflow: hidden;

      &-fill {
        height: 100%;
        background: $gradient-red;
        border-radius: 3px;
        transition: width 1s ease;
      }
    }
  }

  &__cta {
    background: $claro-white;
    border: 1px solid #eee;
    border-radius: $radius-md;
    padding: 28px;
    margin-top: 8px;

    &-title {
      font-size: $font-size-lg;
      font-weight: 700;
      color: $claro-dark;
      margin-bottom: 8px;
    }

    &-desc {
      font-size: $font-size-sm;
      color: #666;
      margin-bottom: 16px;
    }

    &-form {
      display: flex;
      gap: 8px;
    }

    &-input {
      flex: 1;
      padding: 12px 16px;
      border: 2px solid #eee;
      border-radius: $radius-sm;
      font-size: $font-size;
      font-family: inherit;
      transition: border-color $transition-fast;

      &:focus {
        outline: none;
        border-color: $claro-red;
      }
    }

    &-btn {
      padding: 12px 24px;
      background: $claro-red;
      color: $claro-white;
      border: none;
      border-radius: $radius-sm;
      font-size: $font-size;
      font-weight: 600;
      cursor: pointer;
      transition: all $transition-normal;
      font-family: inherit;

      &:hover {
        background: $claro-red-dark;
      }
    }
  }
}

@keyframes coverage-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(3); opacity: 0; }
}

@media (max-width: $mobile) {
  .coverage {
    padding: 60px 0;

    &__title {
      font-size: 32px;
    }

    &__content {
      flex-direction: column;
    }

    &__map {
      max-width: 300px;
      margin: 0 auto;
    }

    &__cta-form {
      flex-direction: column;
    }
  }
}
</style>
