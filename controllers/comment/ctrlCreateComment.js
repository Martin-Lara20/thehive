const { createComment} = require("../../services/comment/createComment")

async function ctrlCreateComment(req, res){
  try{
    console.log('Hola desde el controlador CreateComment')
    console.log(req.body)
    const { name, email, comment } = req.body
    const comments = await createComment(name, email, comment)
    return res.status(200).send(comments)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }

  //console.log('El genero del usuario es: ', genre)
  //return res.status(200).send ({ genero: genre == 'M'? 'Femenino' : 'Masculino'})
}

module.exports = { ctrlCreateComment }
