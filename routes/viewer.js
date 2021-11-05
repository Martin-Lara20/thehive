const express = require('express')
const router = express.Router()
const passport = require ('passport')
const { ctrlSelectViewer } = require('../controllers/viewer/ctrlSelectViewer')
const { ctrlUpdateViewer } = require('../controllers/viewer/ctrlUpdateViewer')
const { ctrlCreateViewer } = require('../controllers/viewer/ctrlCreateViewer')
const { ctrlDeleteViewer } = require('../controllers/viewer/ctrlDeleteViewer')


router.get('/',
  passport.authenticate('jwt', {session:false}),
  ctrlSelectViewer
)

router.post('/',
  passport.authenticate('jwt', {session:false}),
  ctrlCreateViewer
)


router.put('/:email',
  passport.authenticate('jwt', {session:false}),
  ctrlUpdateViewer
)

router.delete('/:email',
  passport.authenticate('jwt', {session:false}),
  ctrlDeleteViewer
)

module.exports = router
