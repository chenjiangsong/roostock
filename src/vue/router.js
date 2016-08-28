
Vue.use(VueRouter)

const routes = {
  routes:[
    {
      path: '/vue',
      component: require('./layout/content.vue'),
      // components: {
      //     header:require('./layout/header.vue'),
      //     content:require('./layout/content.vue')
      // },
      children: [
        {
          path: 'test',
          name: 'test',
          component: require('./components/test.vue')
        },
        {
          path: 'test1',
          name: 'test1',
          component: require('./components/test1.vue')
        }
      ]
    }
  ]
}

const defOpt = util.vueRouterDefOpts()
const router = new VueRouter(Vue.util.extend(defOpt,routes))

module.exports = router
