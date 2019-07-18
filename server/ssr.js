const Koa = require('koa')
const koaStatic = require('koa-static')
const koaMount = require('koa-mount')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const router = require('./server')
const app = new Koa()

// 开放目录
app.use(koaMount('/dist', koaStatic(resolve('../dist'))))
app.use(koaMount('/public', koaStatic(resolve('../public'))))

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
