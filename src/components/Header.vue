<template>
  <header>
    <div class="container text-center">
      <h1>
        <font-awesome-icon icon="building" size="1x" />Localizador de Empresas
      </h1>
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="sass" scoped>
  header
    height: 235px
    background: #f6f6f6
    padding-top: 35px
    h1
      color: $color
      font-size: $font-size-title
      font-weight: 400
      letter-spacing: 1.2px
      margin-bottom: 35px
      svg
        width: 25px
        margin-right: 25px
</style>
