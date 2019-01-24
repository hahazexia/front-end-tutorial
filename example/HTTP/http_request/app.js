const express = require('express')
const path = require('path')
const router = express.Router()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Busboy = require('busboy')
const fs = require('fs')

const app = express()

app.set('views', './')
app.engine( '.html', require('ejs').renderFile )
app.set('view engine', 'html')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, './node_modules/axios/dist')));

app.use((req, res, next) => {
  if (req.method === 'POST') {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      var saveTo = path.join(__dirname, path.basename(fieldname) + path.extname(filename))
      console.log('\n\n', saveTo, '\n\n')
      file.pipe(fs.createWriteStream(saveTo));//saveTo就是存储路径
    })
    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' })
      res.end("That's all folks!")
    });
    return req.pipe(busboy)
  } else {
    next()
  }
})

router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/getSomeData', (req, res) => {
  console.log('接收到请求！')
  console.log(req.body, 'body')

  return res.json({
    port: 3000
  })
})

app.use('/', router)

app.listen(3000, () => {
  console.log(`Express server listening on port 3000 with pid ${process.pid}`)
})
