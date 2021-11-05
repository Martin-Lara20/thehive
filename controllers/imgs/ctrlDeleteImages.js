const { deleteImages } = require("../../services/imgs/deleteImages")

async function ctrlDeleteImages(req, res){
  try{
    console.log(req)
    const { title } = req.params
    const imgs = await deleteImages(title)
    return res.status(200).send(imgs)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }

  //console.log('El genero del usuario es: ', genre)
  //return res.status(200).send ({ genero: genre == 'M'? 'Femenino' : 'Masculino'})
}

module.exports = { ctrlDeleteImages }
