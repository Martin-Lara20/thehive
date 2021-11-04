const { updateProfile } = require("../../services/profile/updateprofile")

async function ctrlUpdateProfile(req, res){
  try{
    console.log('Hola desde el controlador UpdateProfile')
    const { name, lastName } = req.body
    const { email } = req.params
    const profile = await updateProfile({ name, lastName, email})
    return res.status(200).send(profile)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }

  //console.log('El genero del usuario es: ', genre)
  //return res.status(200).send ({ genero: genre == 'M'? 'Femenino' : 'Masculino'})
}

module.exports = { ctrlUpdateProfile }
