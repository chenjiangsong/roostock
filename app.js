import koa from 'koa'
import router from 'koa-router'
import mount from 'koa-mount'
import static from 'koa-static'
import views from 'koa-views'

const app = new koa()
app.use(views(__dirname+'/views'), {
  extension:'jade'
})

app.use(ctx => {
  ctx.body = 'Hello World';
});

module.exports = app
