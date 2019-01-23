const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(morgan('combined'))

// const allowCrossDomain = function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'POST')
//   res.header('Access-Control-Allow-Headers', 'Content-Type')
//   next()
// }

// app.use(allowCrossDomain)

router.all('/getSomeData', (req, res, next) => {
  //为url为/getSomeData的请求设置允许跨域的响应头
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

router.post('/getSomeData', (req, res) => {
  //url为/getSomeData设置了跨域响应头，因此跨域请求会成功
  console.log('接收到请求！！\n')

  return res.json({
    port: 3000,
    number: 1
  })
})

router.post('/getSomeData2', (req, res) => {
  //url为/getSomeData2 没有 设置跨域响应头，因此跨域请求会失败
  console.log('接收到请求！！\n')

  return res.json({
    port: 3000,
    number: 2
  })
})

app.use('/', router)

app.listen(3000, () => {
  console.log(`Express server listening on port 3000 with pid ${process.pid}`)
})