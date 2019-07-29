import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import FontAwesomeIcon from './libs/FontAwesome';

import 'bootstrap/dist/css/bootstrap.css';

import routes from './routes';

// add icons global
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);



new Vue({
  router: new VueRouter({ mode: 'history', routes }),
  render: h => h(App),
}).$mount('#app');
