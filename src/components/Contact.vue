<template>
  <section id="contato" class="contact">
    <div class="container">
      <div class="contact__content">
        <div class="contact__info">
          <span class="contact__label">Fale Conosco</span>
          <h2 class="contact__title">Entre em contato</h2>
          <p class="contact__desc">
            Nossa equipe está pronta para ajudar você a encontrar o plano perfeito.
            Entre em contato por qualquer um dos nossos canais.
          </p>

          <div class="contact__channels">
            <div class="contact__channel" v-for="channel in channels" :key="channel.title">
              <div class="contact__channel-icon">
                <font-awesome-icon :icon="channel.icon" />
              </div>
              <div>
                <h4 class="contact__channel-title">{{ channel.title }}</h4>
                <p class="contact__channel-value">{{ channel.value }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact__form-wrapper">
          <form class="contact__form" @submit.prevent="handleSubmit">
            <h3 class="contact__form-title">Solicite uma proposta</h3>
            <div class="contact__form-group">
              <input type="text" placeholder="Seu nome completo" class="contact__input" required />
            </div>
            <div class="contact__form-group">
              <input type="email" placeholder="Seu melhor e-mail" class="contact__input" required />
            </div>
            <div class="contact__form-group">
              <input type="tel" placeholder="Telefone com DDD" class="contact__input" required />
            </div>
            <div class="contact__form-group">
              <select class="contact__input">
                <option value="" disabled selected>Interesse</option>
                <option value="celular">Plano Celular</option>
                <option value="internet">Internet Fibra</option>
                <option value="tv">TV por Assinatura</option>
                <option value="combo">Combo</option>
                <option value="empresarial">Plano Empresarial</option>
              </select>
            </div>
            <div class="contact__form-group">
              <textarea
                placeholder="Sua mensagem (opcional)"
                class="contact__input contact__textarea"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" class="contact__submit">
              <font-awesome-icon :icon="['fas', 'paper-plane']" />
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      channels: [
        {
          icon: ['fas', 'phone-alt'],
          title: 'Central de vendas',
          value: '0800 100 2828',
        },
        {
          icon: ['fas', 'comment-dots'],
          title: 'WhatsApp',
          value: '(11) 99999-0000',
        },
        {
          icon: ['fas', 'envelope'],
          title: 'E-mail',
          value: 'contato@claro.com.br',
        },
        {
          icon: ['fas', 'store'],
          title: 'Lojas físicas',
          value: 'Encontre a loja mais próxima',
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      // Form submission placeholder
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 100px 0;
  background: $claro-dark;

  &__content {
    display: flex;
    gap: 60px;
    align-items: flex-start;
  }

  &__info {
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
    color: $claro-white;
    margin-bottom: 16px;
    letter-spacing: -1px;
  }

  &__desc {
    font-size: $font-size-lg;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    margin-bottom: 40px;
    max-width: 450px;
  }

  &__channels {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__channel {
    display: flex;
    align-items: center;
    gap: 16px;

    &-icon {
      width: 50px;
      height: 50px;
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
      font-size: $font-size-sm;
      font-weight: 600;
      color: $claro-white;
      margin-bottom: 2px;
    }

    &-value {
      font-size: $font-size;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  &__form-wrapper {
    flex: 1;
    max-width: 480px;
  }

  &__form {
    background: $claro-white;
    border-radius: $radius-lg;
    padding: 40px;
    box-shadow: $shadow-lg;

    &-title {
      font-size: $font-size-xl;
      font-weight: 700;
      color: $claro-dark;
      margin-bottom: 24px;
    }

    &-group {
      margin-bottom: 16px;
    }
  }

  &__input {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #eee;
    border-radius: $radius-sm;
    font-size: $font-size;
    font-family: inherit;
    transition: border-color $transition-fast;
    background: $claro-white;
    color: $claro-gray-dark;

    &:focus {
      outline: none;
      border-color: $claro-red;
    }

    &::placeholder {
      color: #aaa;
    }
  }

  &__textarea {
    resize: vertical;
    min-height: 100px;
  }

  &__submit {
    width: 100%;
    padding: 16px;
    background: $claro-red;
    color: $claro-white;
    border: none;
    border-radius: $radius-sm;
    font-size: $font-size;
    font-weight: 600;
    cursor: pointer;
    transition: all $transition-normal;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 8px;

    &:hover {
      background: $claro-red-dark;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(218, 41, 28, 0.4);
    }
  }
}

@media (max-width: $mobile) {
  .contact {
    padding: 60px 0;

    &__content {
      flex-direction: column;
    }

    &__title {
      font-size: 32px;
    }

    &__form {
      padding: 24px;
    }

    &__form-wrapper {
      max-width: 100%;
      width: 100%;
    }
  }
}
</style>
