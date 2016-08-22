#!/usr/bin/env node
require('babel-core/register')

var app = require('./koa/app.views.js')

console.log('服务已经启动....端口：3000');

app.listen(3000);
