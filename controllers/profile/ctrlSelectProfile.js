const { selectProfile } = require("../../services/profile/SelectProfile")

async function ctrlSelectProfile(req, res){
  try{
    const { genre } = req.query
    console.log('Hola desde el controlador')
    const x = await selectProfile(genre)
    return res.status(200).send(x)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }

  //console.log('El genero del usuario es: ', genre)
  //return res.status(200).send ({ genero: genre == 'M'? 'Femenino' : 'Masculino'})
}

module.exports = { ctrlSelectProfile }
