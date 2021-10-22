const bcrypt = require('bcrypt')

async function verifyPassword(){
  const myPassword = 'a password 20.20'
  const myPasswordHashed = '$2b$10$S.WGN3EBteeOrQedR1OaFuuxzUJDtlM5yAs0uYpeZjNgcU4cpce9u'
  const isMatch = await bcrypt.compare(myPassword, myPasswordHashed)
  console.log(isMatch)
}

verifyPassword()
