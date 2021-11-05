const express = require('express')
const router = express.Router()
const passport = require ('passport')
const upload = require('../libs/storage')

const { ctrlCreateImages } = require('../controllers/imgs/ctrlCreateImages')
const { ctrlDeleteImages } = require('../controllers/imgs/ctrlDeleteImages')

const { ctrlCreateComment } = require('../controllers/comment/ctrlCreateComment')
const { ctrlUpdateComment } = require('../controllers/comment/ctrlUpdateComment')
const { ctrlDeleteComment } = require('../controllers/comment/ctrlDeleteComment')

router.post('/new',
  passport.authenticate('jwt', {session:false}),
  upload.single('image'),
  ctrlCreateImages
)

router.delete('/:title',
  passport.authenticate('jwt', {session:false}),
  ctrlDeleteImages
)

//------------------------------------------------------------------------------------------------
router.post('/comment',
  passport.authenticate('jwt', {session:false}),
   ctrlCreateComment
)

router.put('/comment/:email',
  passport.authenticate('jwt', {session:false}),
  ctrlUpdateComment
)

router.delete('/comment/:email',
  passport.authenticate('jwt', {session:false}),
  ctrlDeleteComment
)

module.exports = router
