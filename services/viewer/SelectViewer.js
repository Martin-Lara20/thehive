const Viewer = require('../../models/viewer')

async function SelectViewer(genre){
  try{
    console.log('Hola desde dentro del servicio')
    console.log(genre)
    //let profile
    /*if (!genre){
      profile = await Profile.find()
    }
    else{
      profile = await Profile.find({genre})
    }*/
    const viewer = !genre ? await Viewer.find() : await Viewer.find({genre}, 'name lastname')
    console.log(viewer)
    return viewer
  }catch(error){
    return {message: error. message}
  }
}

module.exports = {SelectViewer}
