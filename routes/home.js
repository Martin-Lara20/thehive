const express = require('express')
const passport = require ('passport')
const router = express.Router()
const home = express()

router.get('/',
passport.authenticate('jwt', {session:false}),
(req, res) => {

      res.send( "Welcome to THE HIVE! This is a community where all build a hive of pictures")
})

home.get('/',
passport.authenticate('jwt', {session:false}),
(req, res) => {

      res.send( "Welcome to THE HIVE! This is a community where all build a hive of pictures")
})

module.exports = router
module.exports = home
