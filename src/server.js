const { request } = require("http");
const mongoose = require('mongoose')

const fastify = require("fastify")
const app = fastify({ logger:true })
const PORT = process.env.PORT || 8082;

const routes = require('./routes');
const db = require('./db-connector');
app.register(db)


// app.get('/', async (request,reply)=>{
//     return {Hello:"Fastify is on Fire"}
// })

app.register(require('fastify-cors'),{
    'origin': true,
    'methods': "GET, HEAD, PUT, PATCH, POST, DELETE"
})

routes.forEach((route, index)=>{
    console.log(route)
    app.route(route)
})

const start = async ()=>{
    try{
        await app.listen(PORT);
        app.log.info(`Server listening on ${app.server.address().port}`)
    } catch(err){
        app.log.error(err);
        process.exit(1);
    }
}
start();