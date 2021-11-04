const express = require('express')
const router = express.Router()
const passport = require ('passport')

const { ctrlSelectProfile } = require('../controllers/profile/ctrlSelectProfile')
const { ctrlUpdateProfile } = require('../controllers/profile/ctrlUpdateProfile')
const { ctrlCreateProfile } = require('../controllers/profile/ctrlCreateProfile')
const { ctrlDeleteProfile } = require('../controllers/profile/ctrlDeleteProfile')



router.get('/',
  passport.authenticate('jwt', {session:false}),
  ctrlSelectProfile
)

router.post('/',
  passport.authenticate('jwt', {session:false}),
  ctrlCreateProfile
)

router.put('/:email',
  passport.authenticate('jwt', {session:false}),
  ctrlUpdateProfile
)

router.delete('/:email',
  passport.authenticate('jwt', {session:false}),
  ctrlDeleteProfile
)

module.exports = router
