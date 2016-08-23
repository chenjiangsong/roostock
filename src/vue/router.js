
Vue.use(VueRouter)

const router = util.initVueRouter()
console.log(router);
router.map({
    '/':{
      name:'index',
      component:require('./index.vue')
    }
})
module.exports = router
