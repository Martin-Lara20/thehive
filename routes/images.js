const express = require('express')
const router = express.Router()
const Image = require('../models/image')

router.get('/', (req, res) => {
  try{
    res.json({
        title: "Martin",
        author: "Martin_105@hive.com",
        description: "Lara"
    })
  }catch(error){
    console.log(`Error: ${error}`)
  }
})

module.exports = router
