const Viewer = require('../../models/viewer')

async function CreateViewer({ name,  lastName, genero, email }){
  try{
    const viewerCreated = await Viewer.create({
    name,
    lastName,
    genre: genero,
    email
    } )


    console.log(viewerCreated)
    return viewerCreated
  }catch(error){
    return {message: error.message}
  }
}

module.exports = {CreateViewer}
