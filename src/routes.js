const blogController = require('./blogController');

const routes = [
    {
        method: 'POST',
        url: '/api/post',
        handler: blogController.postBlog
    },
    {
        method: 'GET',
        url: '/api/getOne/:id',
        handler: blogController.getOneBlog
    },
    {
        method: 'GET',
        url: '/api/getAll',
        handler: blogController.getBlogs
    },
    {
        method: 'PUT',
        url: '/api/update/:id',
        handler: blogController.updateBlog
    },
    {
        method: 'DELETE',
        url: '/api/delete/:id',
        handler: blogController.deleteBlog
    }
]

module.exports = routes;