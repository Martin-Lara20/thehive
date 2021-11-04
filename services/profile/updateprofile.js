const Profile = require('../../models/profile')

async function updateProfile({ name,  lastName, email }){
  try{
    console.log('Hola desde dentro del servicio Updateprofile')
    console.log(email)
    const profileUpdated = await Profile.findOneAndUpdate(
      {email},
      {name, lastName},
      {new: true}
    )


    console.log(profileUpdated)
    return profileUpdated
  }catch(error){
    return {message: error.message}
  }
}

module.exports = {updateProfile}
