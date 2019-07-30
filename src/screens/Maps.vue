<template>
  <div class="map">
    <company-card :company="company" />
    <GmapMap
      :options="{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      disableDefaultUi: false
    }"
      :center="center"
      :zoom="15"
      class="googleMaps"
    >
      <GmapMarker :position="marker" />
    </GmapMap>
  </div>
</template>

<script>
import store from '../services/store';
import CompanyCard from '../components/CompanyCard.vue';

export default {
  name: 'Map',
  data() {
    return {
      company: null,
      center: {},
      marker: {},
    };
  },
  components: {
    CompanyCard,
  },
  mounted() {
    this.company = store.get(this.$route.params.cnpj);

    const addressObj = {
      address_line_1: `${this.company.nome} ${this.company.bairro} ${this.company.complemento}`,
      city: this.company.municipio,
      state: this.company.uf,
      zip_code: this.company.cep,
    };
    this.$geocoder.send(addressObj, response => {
      if (response.results) {
        const { lat, lng } = response.results[0].geometry.location;
        this.center = { lat, lng };
        this.marker = { lat, lng };
      }
    });
  },
};
</script>

<style lang="sass" scoped>
  .map
    width: 100wh
    height: 100vh
    .card
      z-index: 1
      background: white
      position: absolute
      top: 0
      left: 0
      width: 300px
      height: 300px
    .googleMaps
      width: 100wh
      height: 100vh

</style>
