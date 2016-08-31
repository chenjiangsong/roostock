import Router from 'koa-router'
const router = new Router({
  prefix: '/vue'
})

router.get('*', async (ctx, next) => {
  ctx.state = {
    title: 'vue个人组件库'
  }

  await ctx.render('index', {
    tag:'vue'
  })

})

module.exports = router
