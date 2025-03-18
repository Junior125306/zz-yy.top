import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueParticles from 'vue-particles'
import VueNavigationBar from 'vue-navigation-bar'
import VTooltip from 'v-tooltip'
import axios from 'axios'
import Home from './views/Home.vue'
import About from './views/About.vue'
import StudyStep from './views/StudyStep.vue'
import NotFound from './views/NotFound.vue'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueParticles)
Vue.use(VTooltip)
Vue.component('vue-navigation-bar', VueNavigationBar)

// NProgress
import NProgress from 'nprogress'
import './assets/styles/nprogress.css'
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/StudyStep', component: StudyStep },
    // Not found 404
    { path: '/*', component: NotFound },
  ],
})

router.beforeEach((to, from, next) => {
  if (from.name !== null) {
    NProgress.start()
  }
  next()
})
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done()
})

Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
