const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose');

async function dbConnector (fastify, options) {
    try{
        const db = await mongoose.connect('mongodb://localhost/blogDB', 
        )
        console.log("DATABASE CONNECTED")
        //fastify.decorate('mongo', db);
    } catch(err){
        console.log(err)
    }
}
  
  // Wrapping a plugin function with fastify-plugin exposes the decorators    
  // and hooks, declared inside the plugin to the parent scope.
  module.exports = fastifyPlugin(dbConnector)