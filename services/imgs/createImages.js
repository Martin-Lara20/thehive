const Image = require('../../models/image')

async function createImage(  title, description, email ){
  try{
     const imageCreate = await Image.create({
      title,
      description,
      email,

     }
    )


    console.log(imageCreate)
    return imageCreate
  }catch(error){
    return {message: error. message}
  }
}

module.exports = {createImage}
