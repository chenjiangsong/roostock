var views = require('koa-views')
var Koa = require('koa')
var router = require('koa-router')()

var app = new Koa()

app.use(views(__dirname+'/layout'),{
  extension: 'jade'
})

// router.get('/',async function(ctx,next){
//   await ctx.render('index',{
//     title:'welcome',
//     name:'koa-views'
//   })
// })
router.get('/', async function(ctx,next){
  await ctx.render('index')
})

// app.use(ctx => {
//   ctx.body = 'hello world'
//   ctx.state = {
//     title:'hello koa'
//   }
//   // ctx.render('index')
// })

app.use(router.routes(),router.allowedMethods())

// app.listen(3000)

module.exports = app
// app.listen(3000)
