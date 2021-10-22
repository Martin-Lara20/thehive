const {config} = require ('../../../config/index')
const WordSecret = encodeURIComponent(config.PaSEPass)
const {Strategy, ExtractJwt} = require('passport-jwt')
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: WordSecret
}

const JwtStrategy = new Strategy (options, (payload, done)=>{
  return done(null, payload)

})

module.exports = JwtStrategy
