
Vue.use(VueRouter)

const routes = {
  routes:[
    {
      path: '/',
      name: 'index',
      component: require('./index.vue')
    }
  ]
}

const defOpt = util.vueRouterDefOpts()
const router = new VueRouter(Vue.util.extend(defOpt,routes))

module.exports = router
