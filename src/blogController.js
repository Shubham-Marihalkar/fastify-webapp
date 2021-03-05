//const { default: fastify } = require('fastify');
const Blog = require('./model');
//import View from '../frontend/src/view';

exports.getBlogs = async (req, reply) =>{
    try {
        const posts = await Blog.find()
        return posts;
      } catch (err) {
        console.log(err)
      }
}

exports.postBlog = async (req, reply)=>{
    try {
        const car = new Blog(req.body)
        return car.save()
      } catch (err) {
        console.log(err)
      }
}

exports.getOneBlog = async (req, reply) =>{
    try {
        const id = req.params.id
        const post = await Blog.findById(id)
        return post
      } catch (err) {
        console.log(err)
      }
}

exports.updateBlog = async (req, reply) =>{
    try {
        const id = req.params.id
        const post = req.body
        const { ...updateData } = post
        const update = await Blog.findByIdAndUpdate(id, updateData, { new: true })
        return update
      } catch (err) {
        console.log(err)
      }   
}

exports.deleteBlog = async (req, reply) =>{
    try {
        const id = req.params.id
        const post = await Blog.findByIdAndRemove(id)
        return post
      } catch (err) {
        throw boom.boomify(err)
      }
}