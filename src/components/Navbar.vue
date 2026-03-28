<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__container container">
      <a href="#home" class="navbar__brand">
        <span class="navbar__logo">
          <font-awesome-icon :icon="['fas', 'signal']" class="navbar__logo-icon" />
        </span>
        <span class="navbar__brand-text">claro</span>
      </a>

      <button class="navbar__toggle" @click="toggleMenu" :class="{ active: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="navbar__menu" :class="{ 'navbar__menu--open': menuOpen }">
        <li><a href="#home" @click="closeMenu">Início</a></li>
        <li><a href="#planos" @click="closeMenu">Planos</a></li>
        <li><a href="#servicos" @click="closeMenu">Serviços</a></li>
        <li><a href="#vantagens" @click="closeMenu">Vantagens</a></li>
        <li><a href="#cobertura" @click="closeMenu">Cobertura</a></li>
        <li><a href="#faq" @click="closeMenu">FAQ</a></li>
        <li><a href="#contato" @click="closeMenu">Contato</a></li>
      </ul>

      <a href="#planos" class="navbar__cta" @click="closeMenu">Assine já</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      menuOpen: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 0;
  transition: all $transition-normal;
  background: transparent;

  &--scrolled {
    background: rgba(26, 26, 46, 0.95);
    backdrop-filter: blur(10px);
    padding: 10px 0;
    box-shadow: $shadow-md;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 1001;
  }

  &__logo {
    width: 40px;
    height: 40px;
    background: $claro-red;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__logo-icon {
    color: white;
    font-size: 18px;
  }

  &__brand-text {
    font-size: 28px;
    font-weight: 800;
    color: $claro-white;
    text-transform: lowercase;
    letter-spacing: -1px;
  }

  &__toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    z-index: 1001;

    span {
      width: 25px;
      height: 2px;
      background: $claro-white;
      transition: all $transition-normal;
      display: block;
    }

    &.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    &.active span:nth-child(2) {
      opacity: 0;
    }
    &.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 32px;

    a {
      color: rgba(255, 255, 255, 0.85);
      font-size: $font-size-sm;
      font-weight: 500;
      transition: color $transition-fast;
      position: relative;

      &:hover {
        color: $claro-white;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: $claro-red;
        transition: width $transition-normal;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  &__cta {
    background: $claro-red;
    color: $claro-white !important;
    padding: 10px 24px;
    border-radius: 50px;
    font-size: $font-size-sm;
    font-weight: 600;
    transition: all $transition-normal;

    &:hover {
      background: $claro-red-dark;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(218, 41, 28, 0.4);
    }
  }
}

@media (max-width: $mobile) {
  .navbar {
    &__toggle {
      display: flex;
    }

    &__menu {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(26, 26, 46, 0.98);
      flex-direction: column;
      justify-content: center;
      gap: 24px;
      transform: translateX(100%);
      transition: transform $transition-normal;

      &--open {
        transform: translateX(0);
      }

      a {
        font-size: $font-size-xl;
      }
    }

    &__cta {
      display: none;
    }
  }
}
</style>
