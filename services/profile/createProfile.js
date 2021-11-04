const Profile = require('../../models/profile')

async function createProfile( name, lastName, genero, email){
  try{
     const profileCreate = await Profile.create({
       name,
       lastName,
       genre: genero,
       email
     }
    )


    console.log(profileCreate)
    return profileCreate
  }catch(error){
    return {message: error. message}
  }
}

module.exports = {createProfile}
