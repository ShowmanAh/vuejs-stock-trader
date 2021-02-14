import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {routes} from './routes';
import store from './store/store';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-stock-trader.firebaseio.com/';
Vue.filter('currency', (value) => {
        return '$' + value.toLocaleString();
});
Vue.config.productionTip = false
const router = new VueRouter({
mode: 'history',
routes
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
