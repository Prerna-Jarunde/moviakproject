import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import {
  library,
} from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons'; // fas
import {

} from '@fortawesome/free-regular-svg-icons'; // far
import {
  faApple,
} from '@fortawesome/free-brands-svg-icons'; // fab
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';
import store from './store';
import router from './router';
import App from './App.vue';

library.add(faUser, faStar, faStarHalfAlt); // fas
library.add(); // far
library.add(faApple); // fab


Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
