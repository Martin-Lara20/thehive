const Profile = require('../../models/profile')

async function selectProfile(genre){
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
    const profile = !genre ? await Profile.find() : await Profile.find({genre}, 'name lastname')
    console.log(profile)
    return profile
  }catch(error){
    return {message: error. message}
  }
}

module.exports = {selectProfile}
