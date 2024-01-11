const model = require('../model/blog.jsx')
const Blog = model.Blog

exports.getAllBlog = (async(req,res)=>{
    const allBlog = await Blog.find({})
    res.send(allBlog)
})
exports.getBlog = (async(req,res)=>{
    const title = req.body.title
    const blog = await Blog.findOne({title:title})
    res.send(blog)
})
exports.addBlog = ((req,res)=>{
    const doc = new Blog(req.body)
    doc.save()
    console.log(doc)
    res.status(200).json(doc)
})
exports.deleteBlog = (async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const doc = await Blog.deleteOne({ _id: id })
    res.send(doc)
})
exports.updateBlog = (async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const doc = await Blog.findOneAndUpdate({_id:id},req.body)
    res.send(doc)
})
exports.replaceBlog = (async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const doc = await Blog.findOneAndReplace({_id:id},req.body)
    res.send(doc)
})