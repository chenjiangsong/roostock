import koa from 'koa'
import router from 'koa-router'
import mount from 'koa-mount'

const app = new koa()

app.use(ctx => {
  ctx.body = 'Hello World';
});

module.exports = app
