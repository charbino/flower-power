import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Nav from './components/Nav'

import './registerServiceWorker'
import './assets/styles/index.css';
import { firestorePlugin, rtdbPlugin } from 'vuefire'

Vue.config.productionTip = false
// Vue.component('nav', Nav);

Vue.use(firestorePlugin);
Vue.use(rtdbPlugin);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
