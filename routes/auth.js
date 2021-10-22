const express = require('express')
const passport = require('../util/auth')
const router = express.Router()

const {checkApiKey} = require('../middleware/auth.handler')


const {config} = require ('../config/index')
const WordSecret = encodeURIComponent(config.PaSEPass)
const jwt = require('jsonwebtoken')



router.post('/login', checkApiKey,

 passport.authenticate('local', {session:false}),
async (req, res, next)=>{
  try{

    const user =req.user
    const payload = {
      sub: user.id,
      role: user.role
    }
    const token = jwt.sign(payload, WordSecret)
    delete user.password
    res.json({
      user,
      token
    })
    //res.json(req.user)
  }catch(error){
    next(error)
   }

  }

 )

 module.exports = router
