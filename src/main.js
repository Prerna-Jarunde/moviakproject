import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// font awesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
