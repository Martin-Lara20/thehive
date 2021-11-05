const Comment = require('../../models/comment')

async function deleteComment(email){
  try{
    const commentDelete = await Comment.deleteOne({email})
    console.log(commentDelete)
    if (commentDelete.deletedCount == 0 )
      return {commentDelete: commentDelete.deletedCount, message: 'Comentario no encontrada'}
    else return { commentDelete: commentDelete.deletedCount, message: 'Comentario eliminado'}
  }catch(error){
    return {message: error. message}
  }
}

module.exports = {deleteComment}
