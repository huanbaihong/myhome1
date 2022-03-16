import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import {showMessage}  from "./utils";
import "./mock";
import vLoading from "./directives/loading.js";
import "./eventBus";


Vue.directive("loading", vLoading);
Vue.config.productionTip = false
Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
