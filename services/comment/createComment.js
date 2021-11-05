const Comment = require('../../models/comment')

async function createComment( name, email, comment){
  try{
     const commentCreate = await Comment.create({
       name,
       email,
       comment
     }
    )


    console.log(commentCreate)
    return commentCreate
  }catch(error){
    return {message: error. message}
  }
}

module.exports = {createComment}
