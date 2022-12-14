import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import LuckDraw from 'vue-luck-draw';
import 'swiper/swiper-bundle.css';

Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(LuckDraw);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
