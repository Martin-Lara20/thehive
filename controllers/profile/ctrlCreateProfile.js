const { createProfile } = require("../../services/profile/createProfile")

async function ctrlCreateProfile(req, res){
  try{
    console.log('Hola desde el controlador CreateProfile')
    console.log(req.body)
    const { name, lastName, genero, email } = req.body
    const profile = await createProfile(name, lastName, genero, email)
    return res.status(200).send(profile)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }

  //console.log('El genero del usuario es: ', genre)
  //return res.status(200).send ({ genero: genre == 'M'? 'Femenino' : 'Masculino'})
}

module.exports = { ctrlCreateProfile }
