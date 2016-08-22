var mount = require('koa-mount');
var koa = require('koa');

// hello

var a = new koa();

a.use((ctx) => {
  ctx.body = 'Hello'
});

// world

var b = new koa();

b.use((ctx) => {
  ctx.body = 'World';
});

// app

var app = new koa();

app.use(mount('/hello', a));
app.use(mount('/world', b));

app.listen(3000);
console.log('listening on port 3000');
