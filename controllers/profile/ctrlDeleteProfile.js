const { deleteProfile } = require("../../services/profile/deleteProfile")

async function ctrlDeleteProfile(req, res){
  try{
    console.log(req)
    const { email } = req.params
    const profile = await deleteProfile(email)
    return res.status(200).send(profile)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }

  //console.log('El genero del usuario es: ', genre)
  //return res.status(200).send ({ genero: genre == 'M'? 'Femenino' : 'Masculino'})
}

module.exports = { ctrlDeleteProfile }
