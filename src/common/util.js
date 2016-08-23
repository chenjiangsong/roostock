
Vue.use(VueRouter)

module.exports = {
  initVueRouter() {
    const opt = {
      history: true,
      saveScrollPosition: true,
      root:'/'
    }
    return new VueRouter(opt)
  }
}
