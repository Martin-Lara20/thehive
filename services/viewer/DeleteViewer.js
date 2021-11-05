const Viewer = require('../../models/viewer')

async function DeleteViewer(email ){
  try{
    const viewerDelete = await Viewer.deleteOne({email})
    console.log(viewerDelete)
    if (viewerDelete.deletedCount == 0)
     return {viewerDelete: viewerDelete.deletedCount, message:"Usuario no encontrado "}
    else return {viewerDelete: viewerDelete.deletedCount, message:"Usuario eliminado"}
  }catch(error){
    return {message: error.message}
  }
}

module.exports = {DeleteViewer}
