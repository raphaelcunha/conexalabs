<template>
  <section id="planos" class="plans">
    <div class="container">
      <div class="plans__header">
        <span class="plans__label">Nossos Planos</span>
        <h2 class="plans__title">Escolha o plano ideal para você</h2>
        <p class="plans__subtitle">
          Planos com a melhor cobertura do Brasil. Internet rápida, ligações ilimitadas e muito mais.
        </p>
      </div>

      <div class="plans__tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="plans__tab"
          :class="{ 'plans__tab--active': activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          <font-awesome-icon :icon="tab.icon" />
          {{ tab.label }}
        </button>
      </div>

      <div class="plans__grid">
        <div
          v-for="plan in currentPlans"
          :key="plan.name"
          class="plans__card"
          :class="{ 'plans__card--featured': plan.featured }"
        >
          <div class="plans__card-badge" v-if="plan.featured">
            <font-awesome-icon :icon="['fas', 'star']" /> Mais popular
          </div>
          <div class="plans__card-header">
            <h3 class="plans__card-name">{{ plan.name }}</h3>
            <p class="plans__card-data">{{ plan.data }}</p>
          </div>
          <div class="plans__card-price">
            <span class="plans__card-currency">R$</span>
            <span class="plans__card-value">{{ plan.price }}</span>
            <span class="plans__card-period">/mês</span>
          </div>
          <ul class="plans__card-features">
            <li v-for="feature in plan.features" :key="feature">
              <font-awesome-icon :icon="['fas', 'check']" class="plans__card-check" />
              {{ feature }}
            </li>
          </ul>
          <a
            href="#contato"
            class="plans__card-btn"
            :class="{ 'plans__card-btn--featured': plan.featured }"
          >
            Assinar agora
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Plans',
  data() {
    return {
      activeTab: 'celular',
      tabs: [
        { id: 'celular', label: 'Celular', icon: ['fas', 'mobile-alt'] },
        { id: 'internet', label: 'Internet', icon: ['fas', 'wifi'] },
        { id: 'combo', label: 'Combo', icon: ['fas', 'box-open'] },
      ],
      plans: {
        celular: [
          {
            name: 'Claro Básico',
            data: '15GB',
            price: '49',
            featured: false,
            features: [
              'Ligações ilimitadas',
              'WhatsApp ilimitado',
              'Roaming nacional',
              'Claro Música',
            ],
          },
          {
            name: 'Claro Plus',
            data: '50GB',
            price: '89',
            featured: true,
            features: [
              'Ligações ilimitadas',
              'Redes sociais ilimitadas',
              'Roaming nacional',
              'Claro Música + Claro Vídeo',
              '5G incluso',
            ],
          },
          {
            name: 'Claro Premium',
            data: '100GB',
            price: '139',
            featured: false,
            features: [
              'Ligações ilimitadas',
              'Internet ilimitada para apps',
              'Roaming internacional',
              'Todos os streamings inclusos',
              '5G Ultra velocidade',
            ],
          },
        ],
        internet: [
          {
            name: 'Fibra 250',
            data: '250 Mega',
            price: '99',
            featured: false,
            features: [
              'Download 250 Mbps',
              'Upload 125 Mbps',
              'Wi-Fi 6 grátis',
              'Instalação gratuita',
            ],
          },
          {
            name: 'Fibra 500',
            data: '500 Mega',
            price: '129',
            featured: true,
            features: [
              'Download 500 Mbps',
              'Upload 250 Mbps',
              'Wi-Fi 6 grátis',
              'Claro Vídeo incluso',
              'IP fixo disponível',
            ],
          },
          {
            name: 'Fibra 1 Giga',
            data: '1 Gbps',
            price: '199',
            featured: false,
            features: [
              'Download 1 Gbps',
              'Upload 500 Mbps',
              'Wi-Fi 6E premium',
              'Todos os streamings',
              'Suporte prioritário',
            ],
          },
        ],
        combo: [
          {
            name: 'Combo Start',
            data: 'Internet + Celular',
            price: '149',
            featured: false,
            features: [
              'Fibra 250 Mega',
              'Celular 15GB',
              'Ligações ilimitadas',
              'Wi-Fi grátis',
            ],
          },
          {
            name: 'Combo Total',
            data: 'Internet + Celular + TV',
            price: '219',
            featured: true,
            features: [
              'Fibra 500 Mega',
              'Celular 50GB + 5G',
              'TV com 150+ canais',
              'Streamings inclusos',
              'Desconto progressivo',
            ],
          },
          {
            name: 'Combo Max',
            data: 'Tudo ilimitado',
            price: '329',
            featured: false,
            features: [
              'Fibra 1 Gbps',
              'Celular 100GB + 5G Ultra',
              'TV com 200+ canais + HBO',
              'Todos os streamings',
              'Suporte VIP 24h',
            ],
          },
        ],
      },
    };
  },
  computed: {
    currentPlans() {
      return this.plans[this.activeTab];
    },
  },
};
</script>

<style lang="scss" scoped>
.plans {
  padding: 100px 0;
  background: $claro-gray;

  &__header {
    text-align: center;
    margin-bottom: 48px;
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

  &__tabs {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 48px;
  }

  &__tab {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: 50px;
    border: 2px solid #e0e0e0;
    background: $claro-white;
    font-size: $font-size;
    font-weight: 600;
    color: #666;
    cursor: pointer;
    transition: all $transition-normal;

    &:hover {
      border-color: $claro-red;
      color: $claro-red;
    }

    &--active {
      background: $claro-red;
      border-color: $claro-red;
      color: $claro-white;

      &:hover {
        color: $claro-white;
      }
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1100px;
    margin: 0 auto;
  }

  &__card {
    background: $claro-white;
    border-radius: $radius-lg;
    padding: 40px 32px;
    text-align: center;
    position: relative;
    border: 2px solid transparent;
    transition: all $transition-normal;
    box-shadow: $shadow-card;

    &:hover {
      transform: translateY(-8px);
      box-shadow: $shadow-lg;
    }

    &--featured {
      border-color: $claro-red;
      transform: scale(1.05);

      &:hover {
        transform: scale(1.05) translateY(-8px);
      }
    }

    &-badge {
      position: absolute;
      top: -14px;
      left: 50%;
      transform: translateX(-50%);
      background: $claro-red;
      color: $claro-white;
      padding: 6px 20px;
      border-radius: 50px;
      font-size: 12px;
      font-weight: 700;
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    &-header {
      margin-bottom: 24px;
    }

    &-name {
      font-size: $font-size-xl;
      font-weight: 700;
      color: $claro-dark;
      margin-bottom: 4px;
    }

    &-data {
      font-size: $font-size;
      color: $claro-red;
      font-weight: 600;
    }

    &-price {
      margin-bottom: 32px;
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 2px;
    }

    &-currency {
      font-size: $font-size-lg;
      font-weight: 600;
      color: $claro-gray-dark;
    }

    &-value {
      font-size: 56px;
      font-weight: 800;
      color: $claro-dark;
      line-height: 1;
    }

    &-period {
      font-size: $font-size-sm;
      color: #999;
      font-weight: 500;
    }

    &-features {
      text-align: left;
      margin-bottom: 32px;

      li {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 0;
        font-size: $font-size;
        color: #555;
        border-bottom: 1px solid #f0f0f0;

        &:last-child {
          border-bottom: none;
        }
      }
    }

    &-check {
      color: $claro-red;
      font-size: $font-size-sm;
      flex-shrink: 0;
    }

    &-btn {
      display: block;
      width: 100%;
      padding: 14px;
      border-radius: 50px;
      font-size: $font-size;
      font-weight: 600;
      text-align: center;
      transition: all $transition-normal;
      background: $claro-gray;
      color: $claro-dark;

      &:hover {
        background: $claro-dark;
        color: $claro-white;
        transform: translateY(-2px);
      }

      &--featured {
        background: $claro-red;
        color: $claro-white;

        &:hover {
          background: $claro-red-dark;
          color: $claro-white;
          box-shadow: 0 4px 15px rgba(218, 41, 28, 0.4);
        }
      }
    }
  }
}

@media (max-width: $mobile) {
  .plans {
    padding: 60px 0;

    &__title {
      font-size: 32px;
    }

    &__tabs {
      flex-wrap: wrap;
    }

    &__grid {
      grid-template-columns: 1fr;
      max-width: 400px;
    }

    &__card--featured {
      transform: none;

      &:hover {
        transform: translateY(-8px);
      }
    }
  }
}
</style>
