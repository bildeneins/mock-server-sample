var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.send('Sample Router Index')
})
// define the about route
router.get('/about', function (req, res) {
  // サーバーの応答例を返答する
  res.json({
    names: [
      "Taro", "Jiro", "Saburo"
    ]
  })
})

module.exports = router
