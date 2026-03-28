<template>
  <section id="faq" class="faq">
    <div class="container">
      <div class="faq__header">
        <span class="faq__label">Dúvidas Frequentes</span>
        <h2 class="faq__title">Perguntas frequentes</h2>
        <p class="faq__subtitle">
          Encontre respostas para as dúvidas mais comuns sobre nossos serviços e planos.
        </p>
      </div>

      <div class="faq__list">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="faq__item"
          :class="{ 'faq__item--open': openIndex === index }"
        >
          <button class="faq__question" @click="toggle(index)">
            <span>{{ item.question }}</span>
            <font-awesome-icon
              :icon="['fas', openIndex === index ? 'minus' : 'plus']"
              class="faq__icon"
            />
          </button>
          <div class="faq__answer" v-show="openIndex === index">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      openIndex: null,
      faqs: [
        {
          question: 'Como funciona a cobertura 5G da Claro?',
          answer:
            'A Claro possui a maior cobertura 5G do Brasil, presente em mais de 350 cidades. O 5G está disponível para todos os planos pós-pagos com dispositivos compatíveis. A velocidade pode atingir até 1.2 Gbps dependendo da localização e do aparelho.',
        },
        {
          question: 'Posso manter meu número ao migrar para a Claro?',
          answer:
            'Sim! A portabilidade é totalmente gratuita e pode ser solicitada ao contratar qualquer plano. O processo leva até 3 dias úteis e você não fica sem serviço durante a migração.',
        },
        {
          question: 'Quais streamings estão inclusos nos planos?',
          answer:
            'Dependendo do plano escolhido, você pode ter acesso ao Claro Vídeo, Claro Música, e plataformas parceiras. Os planos Premium incluem acesso a todos os serviços de streaming disponíveis na plataforma.',
        },
        {
          question: 'Como funciona a internet fibra da Claro?',
          answer:
            'A internet fibra da Claro utiliza tecnologia de fibra óptica até a sua residência (FTTH), garantindo velocidades simétricas de download e upload. A instalação é gratuita e inclui roteador Wi-Fi 6 em todos os planos.',
        },
        {
          question: 'Existe fidelidade nos planos?',
          answer:
            'Os planos pós-pagos possuem fidelidade de 12 meses. Porém, oferecemos planos controle sem fidelidade para quem prefere mais flexibilidade. Consulte as condições de cada plano.',
        },
        {
          question: 'Como funciona o combo Claro?',
          answer:
            'O Combo Claro permite combinar serviços de celular, internet fibra e TV por assinatura com desconto progressivo. Quanto mais serviços você adicionar, maior o desconto na mensalidade. Tudo gerenciado em uma única fatura.',
        },
        {
          question: 'Qual o prazo de instalação da internet fibra?',
          answer:
            'O prazo padrão de instalação é de até 7 dias úteis após a confirmação do pedido. Em muitas regiões, conseguimos agendar a instalação para o próximo dia útil. Você acompanha tudo pelo app Minha Claro.',
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};
</script>

<style lang="scss" scoped>
.faq {
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
    margin-bottom: 16px;
    letter-spacing: -1px;
  }

  &__subtitle {
    font-size: $font-size-lg;
    color: #666;
    max-width: 500px;
    margin: 0 auto;
  }

  &__list {
    max-width: 800px;
    margin: 0 auto;
  }

  &__item {
    border: 1px solid #eee;
    border-radius: $radius-md;
    margin-bottom: 12px;
    overflow: hidden;
    transition: all $transition-normal;

    &:hover {
      border-color: rgba(218, 41, 28, 0.3);
    }

    &--open {
      border-color: $claro-red;
      box-shadow: 0 4px 12px rgba(218, 41, 28, 0.1);
    }
  }

  &__question {
    width: 100%;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: $font-size;
    font-weight: 600;
    color: $claro-dark;
    text-align: left;
    font-family: inherit;
    transition: color $transition-fast;

    &:hover {
      color: $claro-red;
    }
  }

  &__icon {
    color: $claro-red;
    font-size: $font-size-sm;
    flex-shrink: 0;
  }

  &__answer {
    padding: 0 24px 20px;

    p {
      font-size: $font-size;
      color: #666;
      line-height: 1.7;
    }
  }
}

@media (max-width: $mobile) {
  .faq {
    padding: 60px 0;

    &__title {
      font-size: 32px;
    }

    &__question {
      font-size: $font-size-sm;
      padding: 16px;
    }

    &__answer {
      padding: 0 16px 16px;
    }
  }
}
</style>
