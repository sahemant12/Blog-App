const mongoose = require('mongoose')
const { Schema } = mongoose

const blogSchema = new Schema({
    title: String, 
    description: String
    
  })
exports.Blog = mongoose.model('Blog', blogSchema)