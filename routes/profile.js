const express = require('express')
const router = express.Router()
const passport = require ('passport')
const { ctrlSelectProfile } = require('../controllers/profile/ctrlSelectProfile')

router.get('/',
  passport.authenticate('jwt', {session:false}),
  ctrlSelectProfile
)

module.exports = router
