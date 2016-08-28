
import router from './router.js'
// import App from './layout/App.vue'

// const router = require('./router.js')
const App = require('./layout/App.vue')

// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     { path: '/', component: require('./index.vue') }
//   ]
// })
new Vue({
  router,
  render: v => v(App)
  // template:`
  //   <div id="app">
  //     <router-view name="header"></router-view>
  //     <router-view name="content"></router-view>
  //   </div>
  // `
}).$mount('#app')
