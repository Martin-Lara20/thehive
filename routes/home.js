const express = require('express')
const {checkApiKey} = require('../middleware/auth.handler')

const router = express.Router()

router.get('/', checkApiKey, (req, res) => {
  res.json([
    {
      description: "Welcome to THE HIVE! This is a community where all build a hive of pictures"
    }
  ])
})

module.exports = router
