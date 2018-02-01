import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import showWishings from './components/showWishings.vue'
import showWishingPools from './components/showWishingPools.vue'
import showWishingCards from './components/showWishingCards.vue'
import showGuardingCards from './components/showGuardingCards.vue'
import showGuardings from './components/showGuardings.vue'
import showUsers from './components/showUsers.vue'
import createPool from './components/createPool.vue'
import createCard from './components/createCard.vue'
import createWishing from './components/createWishing.vue'
import createGuardingCard from './components/createGuardingCard.vue'
import createGuarding from './components/createGuarding.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;

const routes = [
  { path: '/', component: showWishings },
  { path: '/createCard/:id', component: createCard },
  { path: '/createCard', component: createCard },
  { path: '/showWishings', component: showWishings },
  { path: '/showWishingPools', component: showWishingPools },
  { path: '/showWishingCards', component: showWishingCards },
  { path: '/showGuardingCards', component: showGuardingCards },
  { path: '/showGuardings', component: showGuardings },
  { path: '/showUsers', component: showUsers },
  { path: '/createPool', component: createPool },
  { path: '/createPool/:id', component: createPool },
  { path: '/createGuardingCard', component: createGuardingCard },
  { path: '/createGuarding', component: createGuarding },
  { path: '/createWishing', component: createWishing }
]
global.host = 'http://wish.dtxn.net'

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
