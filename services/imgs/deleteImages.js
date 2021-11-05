const Image = require('../../models/image')

async function deleteImages(title){
  try{
    const imageDelete = await Image.deleteOne({title})
    console.log(imageDelete)
    if (imageDelete.deletedCount == 0 )
      return {imageDelete: imageDelete.deletedCount, message: 'Imagen no encontrada'}
    else return { imageDelete: imageDelete.deletedCount, message: 'Imagen eliminada'}
  }catch(error){
    return {message: error. message}
  }
}

module.exports = {deleteImages}
