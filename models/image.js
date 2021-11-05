const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const imageSchema = new Schema ({
  title: { type: String },
  description: { type: String },
  imageURL: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now }
})


const Image = mongoose.model('Image', imageSchema)
module.exports = Image
