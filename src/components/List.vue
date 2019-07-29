<template>
  <section>
    <div class="container">
      <blank-state v-if="!companies.length"></blank-state>
      <carousel
        class="list"
        :navigationEnabled="true"
        :perPage="4"
        :navigation-next-label="navigationNext"
        :navigation-prev-label="navigationPrev"
      >
        <slide v-for="(company, index) in companies" :key="index" @slideclick="handleSlideClick()">
          <company-card :company="company" />
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import BlankState from './BlankState.vue';
import CompanyCard from './CompanyCard.vue';

export default {
  name: 'List',
  props: ['companies', 'loading'],
  computed: {
    navigationNext() {
      return `<span style="font-size: 48px; color: white">></span>`;
    },
    navigationPrev() {
      return `<span style="font-size: 48px; color: white"><</span>`;
    },
  },
  components: {
    Carousel,
    Slide,
    BlankState,
    CompanyCard,
  },
  methods: {
    handleSlideClick(dataset) {
      console.log(dataset);
    },
  },
};
</script>

<style lang="sass">
    section
      height: calc(100vh - 235px)
      background: $gradient

      .container
        .blank-state
          padding-top: 130px
          text-align: center
        .list
          padding-top: 130px

</style>
