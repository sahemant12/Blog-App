const express = require('express')
const router = express.Router()
const blogController = require('../controller/blog.jsx')

router
    .get('/blogs', blogController.getAllBlog)
    .get('/blog', blogController.getBlog)
    .post('/blog', blogController.addBlog)
    .delete('/blog/:id', blogController.deleteBlog)
    .patch('/blog/:id', blogController.replaceBlog)
    .put('/blog/:id', blogController.updateBlog)
 
exports.router = router