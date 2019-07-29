<template>
  <div class="slide">
    <div class="card">
      <ul>
        <li>
          <div class="title">{{ company.nome }}</div>
          <div class="subtitle">Razão Social</div>
        </li>
        <li>
          <div class="title">{{ company.cnpj }}</div>
          <div class="subtitle">CNPJ</div>
        </li>
        <li>
          <div class="title">{{ company.bairro }}</div>
          <div class="subtitle">Endereço</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyCard',
  props: ['company'],
};
</script>

<style lang="sass" scoped>
  .slide
    padding: 0 15px
    .card
      color: $color
      border-radius: 15px
      min-height: 200px
      ul
        padding: 20px
        list-style: none
        li
          margin-bottom: 25px
          color: $color-secondary
          .title
            font-size: 16px
            font-weight: 600
          .subtitle
            font-size: 16px

</style>
