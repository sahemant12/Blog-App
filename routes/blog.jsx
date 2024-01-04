const express = require('express')
const router = express.Router()
const blogController = require('../controller/blog.jsx')

router
    .get('/blogs', blogController.getAllBlog)
    .get('/blog', blogController.getBlog)
    .post('/blog', blogController.addBlog)

exports.router = router