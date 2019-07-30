import Vue from 'vue';
import VueRouter from 'vue-router';
import Geocoder from '@pderas/vue2-geocoder';
import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App.vue';
import FontAwesomeIcon from './libs/FontAwesome';

import 'bootstrap/dist/css/bootstrap.css';

import routes from './routes';

// add icons global
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBKshoYfZ-pj534HVfwDw5mKIKorpuW0pg',
    libraries: 'places',
  },
});

Vue.use(Geocoder, {
  defaultMode: 'address',
  googleMapsApiKey: 'AIzaSyBKshoYfZ-pj534HVfwDw5mKIKorpuW0pg',
});

new Vue({
  router: new VueRouter({ mode: 'history', routes }),
  render: h => h(App),
}).$mount('#app');
