const Viewer = require('../../models/viewer')

async function updateViewer({ name,  lastName, email }){
  try{
    console.log('Hola desde dentro del servicio Updateviewer')
    console.log(email)
    const viewerUpdated = await Viewer.findOneAndUpdate(
      {email},
      {name, lastName},
      {new: true}
    )


    console.log(viewerUpdated)
    return viewerUpdated
  }catch(error){
    return {message: error.message}
  }
}

module.exports = {updateViewer}
