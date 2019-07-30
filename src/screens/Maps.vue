<template>
  <div class="map">
    <div class="box">asdasdasdas</div>
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

export default {
  name: 'Map',
  data() {
    return {
      center: {},
      marker: {},
      lat: null,
      lng: null,
    };
  },
  mounted() {
    const company = store.get(this.$route.params.cnpj);
    const addressObj = {
      address_line_1: `${company.nome} ${company.bairro} ${company.complemento}`,
      city: company.municipio,
      state: company.uf,
      zip_code: company.cep,
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
    .box
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
