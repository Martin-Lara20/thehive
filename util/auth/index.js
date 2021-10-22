const passport = require ('passport')
const LocalStrategy = require('./strategies/local.strategies')
const JwtStrategy = require('./strategies/jwt.strategy')

passport.use(LocalStrategy)
passport.use(JwtStrategy)

module.exports = passport

