const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema ({
  name: String,
  lastName: {type: String, default: ''},
  genre: {type: String, enum: ['H', 'M', 'U'], default: 'U'},
  email: {type: String, unique: true, trim: true},
  password: String,
},
{
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile
