import Vue from 'vue'
// import 'bootswatch/dist/cosmo/bootstrap.css'
// import 'bootswatch/dist/vapor/bootstrap.css'
import 'bootswatch/dist/darkly/bootstrap.css'
import App from './App.vue'
import router from './router'
import store from './store'
// import "jquery";
// import "bootstrap";
import '../src/assets/main.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
