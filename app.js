import Koa from 'koa'
import router from 'koa-router'
import mount from 'koa-mount'
import serve from 'koa-static'
import views from 'koa-views'

import vuePage from './vue.router.js'

const app = new Koa()
const staticPath = serve(`${__dirname}/dist`)

app.use(mount('/static', staticPath))

app.use(views(__dirname + '/views', {
  extension:'jade'
}))

app.use(vuePage.routes(),vuePage.allowedMethods())

module.exports = app
