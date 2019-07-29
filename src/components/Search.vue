<template>
  <div class="search">
    <form @submit.prevent="search">
      <input type="text" v-model="cnpj" name="cnpj" placeholder="CNPJ..." />
      <button type="submit">Localizar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    errors: [],
    cnpj: '',
  }),
  props: ['search'],
};
</script>

<style lang="sass" scoped>
  input[type=text]
    width: 360px
    height: 64px
    border: 2px solid $color
    border-radius: 5px
    padding: 0 25px
    font-size: 20px
    background: #f6f6f6
    &::placeholder
      color: $color-placeholder
      opacity: 1

  button
    text-transform: uppercase
    color: white
    height: 55px
    width: 155px
    font-weight: 600
    font-size: 18px
    margin-left: 35px
    background: $color
    border-radius: 25px

</style>
