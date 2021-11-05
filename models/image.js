const mongoose = require ('mongoose')
const {appConfig} = require('../config/index')

const Schema = mongoose.Schema

const imageSchema = new Schema ({
  title: { type: String },
  description: { type: String },
  imageURL: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now }
})

imageSchema.methods.setImgUrl = function setImgUrl(filename){
  const {host, port} = appConfig
  this.imageURL = `${host}:${port}/public/${filename}`
}

const Image = mongoose.model('Image', imageSchema)
module.exports = Image
