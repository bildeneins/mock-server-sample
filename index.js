// api mock server
const https = require('https')
const express = require('express')
// const bodyParser = require('body-parser')
const server = express()
const cors = require('cors')
const log4js = require('log4js')
const port = 8000

// import router
const sample = require('./routes/sample')

// use router
server.use('/sample', sample)

// allow cors
server.use(cors())

// logging
log4js.configure ({
  appenders: {
    access: { type: 'console' }
  },
  categories: {
    default: { appenders: ['access'], level: 'info' }
  }
})
const accessLogger = log4js.getLogger('access')
server.use(log4js.connectLogger(accessLogger))

server.get ('/test', (req, res) => {
  res.json({ message: 'Hello' })
})

server.listen(port, () => {
  console.log('api server started on port ' + port)
})
