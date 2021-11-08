const express = require('express')
const passport = require ('passport')
const router = express.Router()


router.get('/',
passport.authenticate('jwt', {session:false}),
async (req, res) => {
  try{
    res.json({
      status:200,
      message: "Welcome to THE HIVE! This is a community where all build a hive of pictures"
    });
  }catch (error){
    console.error(error)
    return res.status(500).send("server error")
  }
})

module.exports = router

