const { deleteComment } = require("../../services/comment/deleteComment")

async function ctrlDeleteComment(req, res){
  try{
    console.log(req)
    const { email } = req.params
    const comments = await deleteComment(email)
    return res.status(200).send(comments)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }

  //console.log('El genero del usuario es: ', genre)
  //return res.status(200).send ({ genero: genre == 'M'? 'Femenino' : 'Masculino'})
}

module.exports = { ctrlDeleteComment }
