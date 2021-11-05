const { updateComment} = require("../../services/comment/updateComment")

async function ctrlUpdateComment(req, res){
  try{
    console.log('Hola desde el controlador UpdateComment')
    const { comment } = req.body
    const { email } = req.params
    const comments = await updateComment({ comment, email})
    return res.status(200).send(comments)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }

}

module.exports = { ctrlUpdateComment }
