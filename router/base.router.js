import Router from 'koa-router'
const router = new Router({
  prefix: '/base'
})

router.get('*', async (ctx, next) => {
  ctx.state = {
    title: 'base'
  }

  await ctx.render('index', {
    tag:'base'
  })

})

module.exports = router
