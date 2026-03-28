<template>
  <section id="servicos" class="services">
    <div class="container">
      <div class="services__header">
        <span class="services__label">Nossos Serviços</span>
        <h2 class="services__title">Tudo que você precisa em um só lugar</h2>
      </div>

      <div class="services__grid">
        <div
          v-for="service in services"
          :key="service.title"
          class="services__card"
        >
          <div class="services__card-icon" :style="{ background: service.gradient }">
            <font-awesome-icon :icon="service.icon" />
          </div>
          <h3 class="services__card-title">{{ service.title }}</h3>
          <p class="services__card-desc">{{ service.description }}</p>
          <a href="#planos" class="services__card-link">
            Saiba mais
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          icon: ['fas', 'mobile-alt'],
          title: 'Celular',
          description:
            'Planos com internet 5G, ligações ilimitadas para todo o Brasil e acesso às melhores plataformas de streaming.',
          gradient: 'linear-gradient(135deg, #da291c, #ff5252)',
        },
        {
          icon: ['fas', 'wifi'],
          title: 'Internet Fibra',
          description:
            'Conexão ultra rápida com fibra óptica. Velocidades de até 1 Gbps para sua casa com Wi-Fi 6 incluso.',
          gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        },
        {
          icon: ['fas', 'tv'],
          title: 'TV por Assinatura',
          description:
            'Os melhores canais abertos e fechados, filmes, séries e documentários. Conteúdo sob demanda quando quiser.',
          gradient: 'linear-gradient(135deg, #ff5252, #ffc107)',
        },
        {
          icon: ['fas', 'play-circle'],
          title: 'Streaming',
          description:
            'Acesso incluso às maiores plataformas de streaming de vídeo e música sem descontar da sua franquia.',
          gradient: 'linear-gradient(135deg, #b71c1c, #da291c)',
        },
        {
          icon: ['fas', 'shield-alt'],
          title: 'Segurança Digital',
          description:
            'Proteção completa para seus dispositivos com antivírus, backup na nuvem e controle parental.',
          gradient: 'linear-gradient(135deg, #16213e, #0f3460)',
        },
        {
          icon: ['fas', 'headset'],
          title: 'Suporte 24h',
          description:
            'Atendimento especializado disponível 24 horas por dia, 7 dias por semana, por telefone, chat ou app.',
          gradient: 'linear-gradient(135deg, #da291c, #b71c1c)',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services {
  padding: 100px 0;
  background: $claro-white;

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
    letter-spacing: -1px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  &__card {
    background: $claro-white;
    border: 1px solid #eee;
    border-radius: $radius-lg;
    padding: 36px;
    transition: all $transition-normal;

    &:hover {
      transform: translateY(-8px);
      box-shadow: $shadow-lg;
      border-color: transparent;
    }

    &-icon {
      width: 64px;
      height: 64px;
      border-radius: $radius-md;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;

      svg {
        font-size: 24px;
        color: $claro-white;
      }
    }

    &-title {
      font-size: $font-size-xl;
      font-weight: 700;
      color: $claro-dark;
      margin-bottom: 12px;
    }

    &-desc {
      font-size: $font-size;
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    &-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: $claro-red;
      font-weight: 600;
      font-size: $font-size;
      transition: gap $transition-normal;

      &:hover {
        gap: 14px;
        color: $claro-red-dark;
      }
    }
  }
}

@media (max-width: $tablet) {
  .services {
    padding: 60px 0;

    &__title {
      font-size: 32px;
    }

    &__grid {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }
  }
}

@media (min-width: $tablet) and (max-width: $desktop) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
