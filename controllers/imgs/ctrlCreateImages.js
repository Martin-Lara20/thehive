const { createImage } = require("../../services/imgs/createImages")


async function ctrlCreateImages(req, res){
  try{
    console.log('Hola desde el controlador CreateImages')
    console.log(req.body)
    const { title, description, email } = req.body

    const images = await createImage(title, description, email )

    return res.status(200).send(images)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }

  //console.log('El genero del usuario es: ', genre)
  //return res.status(200).send ({ genero: genre == 'M'? 'Femenino' : 'Masculino'})
}

module.exports = { ctrlCreateImages }
