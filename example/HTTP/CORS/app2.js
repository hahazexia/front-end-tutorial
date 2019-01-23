const express = require('express')
const path = require('path')
const router = express.Router()

const app = express()

app.set('views', './')
app.engine( '.html', require('ejs').renderFile )
app.set('view engine', 'html')

app.use(express.static(path.join(__dirname, './node_modules/axios/dist')));

router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/getSomeData', (req, res) => {
  console.log('接收到请求！')
  
  return res.json({
    port: 3005
  })
})

app.use('/', router)

app.listen(3005, () => {
  console.log(`Express server listening on port 3005 with pid ${process.pid}`)
})
