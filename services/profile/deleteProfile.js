const Profile = require('../../models/profile')

async function deleteProfile(email){
  try{
    const profileDelete = await Profile.deleteOne({email})
    console.log(profileDelete)
    if (profileDelete.deletedCount == 0 )
      return {profileDelete: profileDelete.deletedCount, message: 'Usuario no encontrado'}
    else return { profileDelete: profileDelete.deletedCount, message: 'Usuario eliminado'}
  }catch(error){
    return {message: error. message}
  }
}

module.exports = {deleteProfile}
