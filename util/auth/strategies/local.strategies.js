const { Strategy } = require('passport-local')
const bcrypt = require ('bcrypt')

const LocalStrategy = new Strategy(
  async(email, password, done) => {
    try{

      const usersTest = [
        {name: 'Martin', email: 'admin@hotmail.com', password: '$2b$10$S.WGN3EBteeOrQedR1OaFuuxzUJDtlM5yAs0uYpeZjNgcU4cpce9u', rol: 'admin'},
        {name: 'Nahu', email: 'user1@hotmail.com', password: '$2b$10$S.WGN3EBteeOrQedR1OaFuuxzUJDtlM5yAs0uYpeZjNgcU4cpce9u', rol: 'user1'},
        {name: 'Jesus', email: 'user2@hotmail.com', password: '$2b$10$S.WGN3EBteeOrQedR1OaFuuxzUJDtlM5yAs0uYpeZjNgcU4cpce9u', rol: 'user2'},
      ]

      const user = usersTest[0]
      if(!user) return done(null, null)
      console.log(user)
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch) throw { status: 401, message: 'No autorizado', error: true }
      delete user.pass
      done(null, user)
    } catch(error){
      done(error, false)
    }
  }
)

module.exports = LocalStrategy
