<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <div class="footer__logo">
            <span class="footer__logo-circle">
              <font-awesome-icon :icon="['fas', 'signal']" />
            </span>
            <span class="footer__logo-text">claro</span>
          </div>
          <p class="footer__tagline">
            Conectando milhões de brasileiros ao que realmente importa.
            Tecnologia, inovação e qualidade em telecomunicações.
          </p>
          <div class="footer__social">
            <a href="#" class="footer__social-link" v-for="social in socials" :key="social.name">
              <font-awesome-icon :icon="social.icon" />
            </a>
          </div>
        </div>

        <div class="footer__links">
          <div class="footer__column" v-for="column in columns" :key="column.title">
            <h4 class="footer__column-title">{{ column.title }}</h4>
            <ul>
              <li v-for="link in column.links" :key="link">
                <a href="#">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          &copy; 2026 Claro Brasil. Todos os direitos reservados.
          CNPJ: 40.432.544/0001-47
        </p>
        <div class="footer__legal">
          <a href="#">Termos de uso</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socials: [
        { name: 'Facebook', icon: ['fas', 'thumbs-up'] },
        { name: 'Twitter', icon: ['fas', 'comment'] },
        { name: 'Instagram', icon: ['fas', 'camera'] },
        { name: 'YouTube', icon: ['fas', 'play'] },
      ],
      columns: [
        {
          title: 'Para você',
          links: ['Celular', 'Internet', 'TV', 'Combo', 'Claro Clube'],
        },
        {
          title: 'Para empresa',
          links: ['PME', 'Corporativo', 'Governo', 'Dados', 'Cloud'],
        },
        {
          title: 'Atendimento',
          links: ['Minha Claro', 'App Claro', '2ª via de conta', 'Suporte técnico', 'Ouvidoria'],
        },
        {
          title: 'Institucional',
          links: ['Sobre a Claro', 'Trabalhe conosco', 'Sustentabilidade', 'Imprensa', 'Código de ética'],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #0d0d1a;
  color: $claro-white;
  padding: 80px 0 0;

  &__top {
    display: flex;
    gap: 80px;
    padding-bottom: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  &__brand {
    max-width: 300px;
    flex-shrink: 0;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;

    &-circle {
      width: 36px;
      height: 36px;
      background: $claro-red;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: $claro-white;
        font-size: 16px;
      }
    }

    &-text {
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -1px;
    }
  }

  &__tagline {
    font-size: $font-size-sm;
    color: rgba(255, 255, 255, 0.45);
    line-height: 1.7;
    margin-bottom: 24px;
  }

  &__social {
    display: flex;
    gap: 12px;

    &-link {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all $transition-normal;

      svg {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.6);
      }

      &:hover {
        background: $claro-red;

        svg {
          color: $claro-white;
        }
      }
    }
  }

  &__links {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  &__column {
    &-title {
      font-size: $font-size;
      font-weight: 700;
      margin-bottom: 20px;
    }

    li {
      margin-bottom: 12px;
    }

    a {
      font-size: $font-size-sm;
      color: rgba(255, 255, 255, 0.45);
      transition: color $transition-fast;

      &:hover {
        color: $claro-white;
      }
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
  }

  &__copyright {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.3);
  }

  &__legal {
    display: flex;
    gap: 24px;

    a {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.3);
      transition: color $transition-fast;

      &:hover {
        color: $claro-white;
      }
    }
  }
}

@media (max-width: $mobile) {
  .footer {
    padding: 48px 0 0;

    &__top {
      flex-direction: column;
      gap: 40px;
    }

    &__brand {
      max-width: 100%;
    }

    &__links {
      grid-template-columns: repeat(2, 1fr);
    }

    &__bottom {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }

    &__legal {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
