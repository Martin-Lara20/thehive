const Comment = require('../../models/comment')

async function updateComment({ comment, email }){
  try{
    console.log('Hola desde dentro del servicio Updateprofile')
    console.log(email)
    const commentUpdated = await Comment.findOneAndUpdate(
      {email},
      {comment},
      {new: true}
    )


    console.log(commentUpdated)
    return commentUpdated
  }catch(error){
    return {message: error.message}
  }
}

module.exports = {updateComment}
