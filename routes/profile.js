const express = require('express')
const router = express.Router()
const passport = require ('passport')
const Profile = require('../models/profile')

router.get('/', passport.authenticate('jwt', {session:false}),
(req, res) => {
  try{
    res.json({
        author: 'Martin',
        lastName: 'Lara',
        email: 'Martin_105@hive.com'
      })
  }catch(error){
    console.log(`Error: ${error}`)
  }
})

module.exports = router
