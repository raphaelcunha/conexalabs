<template>
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
</template>

<script>
export default {
  name: 'CompanyCard',
  props: ['company'],
};
</script>

<style lang="sass" scoped>
  .card
    color: $color
    border-radius: 15px
    min-height: 200px
    ul
      padding: 15px
      margin-top: 25px
      list-style: none
      li
        margin-bottom: 25px
        .title
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          font-size: 14px
          font-weight: 400
          max-width: 215px
        .subtitle
          font-size: 14px

</style>
