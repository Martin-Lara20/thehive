const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema(
  {
    image_id: { type: Schema.Types.ObjectId },
    email: { type: String },
    name: { type: String },
    gravatar: { type: String },
    comment: { type: String }
  },
  {
    timestamp: { type: Date, default: Date.now },
  }
)

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment
