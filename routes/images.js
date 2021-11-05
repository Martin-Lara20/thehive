const express = require('express')
const router = express.Router()
const passport = require ('passport')
const upload = require('../libs/storage')
const { ctrlCreateImages } = require('../controllers/imgs/ctrlCreateImages')
const { ctrlDeleteImages } = require('../controllers/imgs/ctrlDeleteImages')


router.post('/',
  passport.authenticate('jwt', {session:false}),
  upload.single('image'),
  ctrlCreateImages
)

router.delete('/:title',
  passport.authenticate('jwt', {session:false}),
  ctrlDeleteImages
)


module.exports = router
