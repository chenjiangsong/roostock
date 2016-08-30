import demoIndex from './demo/index.vue'
import input from './demo/input.vue'

Vue.use(VueRouter)

const routes = {
  routes:[
    {
      path: '/vue',
      name: 'index',
      component: demoIndex,
    },
    {
      path: '/vue/components/input',
      name: 'input',
      component: input
    }
  ]
}

const defOpt = util.vueRouterDefOpts()
const router = new VueRouter(Vue.util.extend(defOpt,routes))

module.exports = router
