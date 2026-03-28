<template>
  <section id="vantagens" class="benefits">
    <div class="container">
      <div class="benefits__content">
        <div class="benefits__text">
          <span class="benefits__label">Por que escolher a Claro?</span>
          <h2 class="benefits__title">A operadora que mais<br />investe no Brasil</h2>
          <p class="benefits__desc">
            Com mais de 20 anos de história, a Claro é referência em telecomunicações
            no Brasil. Investimos constantemente em tecnologia de ponta para oferecer
            a melhor experiência para nossos clientes.
          </p>

          <div class="benefits__list">
            <div
              v-for="benefit in benefits"
              :key="benefit.title"
              class="benefits__item"
            >
              <div class="benefits__item-icon">
                <font-awesome-icon :icon="benefit.icon" />
              </div>
              <div class="benefits__item-info">
                <h4 class="benefits__item-title">{{ benefit.title }}</h4>
                <p class="benefits__item-desc">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="benefits__visual">
          <div class="benefits__card benefits__card--1">
            <div class="benefits__card-icon">
              <font-awesome-icon :icon="['fas', 'tachometer-alt']" />
            </div>
            <div class="benefits__card-info">
              <span class="benefits__card-value">1 Gbps</span>
              <span class="benefits__card-label">Velocidade máxima</span>
            </div>
          </div>
          <div class="benefits__card benefits__card--2">
            <div class="benefits__card-icon">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
            </div>
            <div class="benefits__card-info">
              <span class="benefits__card-value">4.900+</span>
              <span class="benefits__card-label">Cidades com cobertura</span>
            </div>
          </div>
          <div class="benefits__card benefits__card--3">
            <div class="benefits__card-icon">
              <font-awesome-icon :icon="['fas', 'trophy']" />
            </div>
            <div class="benefits__card-info">
              <span class="benefits__card-value">#1</span>
              <span class="benefits__card-label">Melhor 5G do Brasil</span>
            </div>
          </div>
          <div class="benefits__card benefits__card--4">
            <div class="benefits__card-icon">
              <font-awesome-icon :icon="['fas', 'users']" />
            </div>
            <div class="benefits__card-info">
              <span class="benefits__card-value">80M+</span>
              <span class="benefits__card-label">Clientes satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Benefits',
  data() {
    return {
      benefits: [
        {
          icon: ['fas', 'bolt'],
          title: 'Maior cobertura 5G',
          description: 'Presente nas principais cidades com a tecnologia mais avançada do mercado.',
        },
        {
          icon: ['fas', 'globe-americas'],
          title: 'Roaming internacional',
          description: 'Use seu plano em mais de 100 países sem se preocupar com cobranças extras.',
        },
        {
          icon: ['fas', 'gift'],
          title: 'Benefícios exclusivos',
          description: 'Acesso a streamings, descontos em parceiros e promoções especiais.',
        },
        {
          icon: ['fas', 'clock'],
          title: 'Atendimento 24/7',
          description: 'Suporte especializado disponível a qualquer hora pelo app, chat ou telefone.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.benefits {
  padding: 100px 0;
  background: $claro-dark;
  color: $claro-white;
  overflow: hidden;

  &__content {
    display: flex;
    align-items: center;
    gap: 80px;
  }

  &__text {
    flex: 1;
  }

  &__label {
    display: inline-block;
    background: rgba(218, 41, 28, 0.2);
    color: $claro-red-light;
    padding: 6px 16px;
    border-radius: 50px;
    font-size: $font-size-sm;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__title {
    font-size: 44px;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 20px;
    letter-spacing: -1px;
  }

  &__desc {
    font-size: $font-size-lg;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    margin-bottom: 40px;
    max-width: 500px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__item {
    display: flex;
    gap: 16px;
    align-items: flex-start;

    &-icon {
      width: 48px;
      height: 48px;
      background: rgba(218, 41, 28, 0.15);
      border-radius: $radius-sm;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      svg {
        color: $claro-red-light;
        font-size: 20px;
      }
    }

    &-title {
      font-size: $font-size;
      font-weight: 700;
      margin-bottom: 4px;
    }

    &-desc {
      font-size: $font-size-sm;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.5;
    }
  }

  &__visual {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 480px;
  }

  &__card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: $radius-md;
    padding: 28px;
    transition: all $transition-normal;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-4px);
    }

    &--2, &--4 {
      margin-top: 20px;
    }

    &-icon {
      width: 44px;
      height: 44px;
      background: $gradient-red;
      border-radius: $radius-sm;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;

      svg {
        color: $claro-white;
        font-size: 18px;
      }
    }

    &-value {
      display: block;
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 4px;
    }

    &-label {
      font-size: $font-size-sm;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}

@media (max-width: $mobile) {
  .benefits {
    padding: 60px 0;

    &__content {
      flex-direction: column;
      gap: 48px;
    }

    &__title {
      font-size: 32px;
    }

    &__visual {
      max-width: 100%;
      width: 100%;
    }

    &__card--2, &__card--4 {
      margin-top: 0;
    }
  }
}
</style>
