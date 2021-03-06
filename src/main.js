import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCustomers from './components/AppCustomers'
import AppProducts from './components/AppProducts'

Vue.use(VueRouter);

const routes = [
  { path: '/customers', component: AppCustomers},
  { path: '/products', component: AppProducts}
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
