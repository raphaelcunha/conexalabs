<template>
  <section>
    <div class="container">
      <blank-state v-if="!companies.length"></blank-state>
      <carousel class="list" :navigationEnabled="true" :perPageCustom="[[768, 3], [1024, 4]]">
        <slide v-for="company in companies" :key="company.cnpj">
          <company-card :company="company" />
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import BlankState from './BlankState.vue';
import CompanyCard from './CompanyCard.vue';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'List',
  props: ['companies', 'loading'],
  components: {
    Carousel,
    Slide,
    BlankState,
    CompanyCard,
  },
};
</script>

<style lang="sass" scoped>
    section
      height: calc(100vh - 235px)
      background: $gradient
      .container
        .blank-state
          padding-top: 130px
          text-align: center
        .list
          padding-top: 130px
          .card
            margin-left: 15px
            margin-right: 15px
</style>
