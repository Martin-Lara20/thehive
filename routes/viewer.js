const express = require('express')
const router = express.Router()
const passport = require ('passport')
const Viewer = require('../models/viewer')

router.get('/', passport.authenticate('jwt', {session:false}),
(req, res) => {
  try{
    res.json({
        name: 'Nahu',
        lastName: 'Said',
        userName: 'Nahuyaca123456',
        email: 'moc_1324@hive.com'
    })
  }catch(error){
    console.log(`Error: ${error}`)
  }
})


module.exports = router
