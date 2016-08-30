
import router from './router.js'
// import layout from './layout.vue'
import App from './App.vue'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
