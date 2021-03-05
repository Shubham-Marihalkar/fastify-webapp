const Blog = require('./db-connector')

async function createBlog(request, reply){
    try{
        const blog = request.body;
        const newBlog = await Blog.create(blog);

        reply.code(201).send(newBlog);
    } catch(err){
        reply.code(500).send(err);
    }
}

module.exports=createBlog;