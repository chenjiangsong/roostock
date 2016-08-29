
import router from './router.js'
import App from './layout/App.vue'

Vue.component('Cell')
new Vue({
  router,
  render: v => v(App)
}).$mount('#app')
